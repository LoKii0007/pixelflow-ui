import { redirect, notFound } from "next/navigation";
import { getCategory, componentCategories } from "@/lib/components-data";

export function generateStaticParams() {
  return componentCategories.map((category) => ({ category: category.id }));
}

export async function generateMetadata({ params }) {
  const { category: categoryId } = await params;
  const category = getCategory(categoryId);
  if (!category) return {};
  return {
    ...category.metadata,
    openGraph: {
      title: category.metadata?.title,
      description: category.metadata?.description,
      url: `https://pixelflow-ui.vercel.app/components/${category.id}`,
      siteName: "PixelFlow UI",
      locale: "en_US",
      type: "website",
    },
  };
}

// A category landing page redirects to its first nested component so that
// only one component is ever shown per page.
const CategoryPage = async ({ params }) => {
  const { category: categoryId } = await params;
  const category = getCategory(categoryId);

  if (!category || category.items.length === 0) {
    notFound();
  }

  redirect(`/components/${category.id}/${category.items[0].id}`);
};

export default CategoryPage;
