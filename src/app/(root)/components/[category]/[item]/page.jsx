import { notFound } from "next/navigation";
import {
  componentCategories,
  getCategory,
  getItem,
} from "@/lib/components-data";
import ComponentRenderer from "@/components/features/ComponentRenderer";

export function generateStaticParams() {
  return componentCategories.flatMap((category) =>
    category.items.map((item) => ({
      category: category.id,
      item: item.id,
    }))
  );
}

export async function generateMetadata({ params }) {
  const { category: categoryId, item: itemId } = await params;
  const category = getCategory(categoryId);
  const item = getItem(categoryId, itemId);
  if (!category || !item) return {};

  const title = `${item.name} | ${category.name} | PixelFlow UI`;
  const description = item.description || category.metadata?.description;

  return {
    title,
    description,
    keywords: category.metadata?.keywords,
    openGraph: {
      title,
      description,
      url: `https://pixelflow-ui.vercel.app/components/${category.id}/${item.id}`,
      siteName: "PixelFlow UI",
      locale: "en_US",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
  };
}

const ComponentItemPage = async ({ params }) => {
  const { category: categoryId, item: itemId } = await params;
  const category = getCategory(categoryId);
  const item = getItem(categoryId, itemId);

  if (!category || !item) {
    notFound();
  }

  // Pass only plain serializable data across the server/client boundary.
  const categoryData = {
    id: category.id,
    name: category.name,
    dependencies: category.dependencies || [],
    usage: category.usage || [],
    extraDoc: category.extraDoc || null,
  };

  return <ComponentRenderer category={categoryData} item={item} />;
};

export default ComponentItemPage;
