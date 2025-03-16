"use client";

import { ArrowRight, Code, Layers, Paintbrush, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useSelector } from "react-redux";
import { Theme } from "@/types/types";
import { useRouter } from "next/navigation";

export default function AnimationLibraryLanding() {
  const theme = useSelector((state) => state.theme.theme);
  const router = useRouter();

  return (
    <div
      className={`flex flex-col min-h-screen ${
        theme === Theme.dark
          ? "bg-zinc-950 text-gray-50"
          : "bg-gray-50 text-zinc-950"
      }`}
    >
      <main className="flex-1">
        {/* Hero Section */}
        <section
          className={`w-full py-12 md:py-24 lg:py-32 xl:py-48 ${
            theme === Theme.dark
              ? "bg-gradient-to-b from-zinc-950 to-zinc-900"
              : "bg-gradient-to-b from-gray-50 to-gray-100"
          }`}
        >
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                  PIXELFLOW<span className=" text-cyan-700"> UI</span>
                </h1>
                <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                  A powerful component library with customizable animations.
                  Build beautiful, interactive interfaces in minutes.
                </p>
              </div>
              <div className="space-x-4">
                <Button className='cursor-pointer' onClick={() => router.push("/components")}>
                  Get Started <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section
          className={`w-full py-12 md:py-24 lg:py-32 ${
            theme === Theme.dark ? "bg-zinc-900" : "bg-gray-100"
          }`}
        >
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Why Choose Pixelflow UI?
                </h2>
                <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                  Built with performance and developer experience in mind.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 mt-12">
              <FeatureCard
                icon={<Zap className="h-10 w-10 text-primary" />}
                title="Performant"
                description="Optimized animations that won't slow down your application."
              />
              <FeatureCard
                icon={<Paintbrush className="h-10 w-10 text-primary" />}
                title="Customizable"
                description="Tailor every aspect of your animations to match your brand."
              />
              <FeatureCard
                icon={<Layers className="h-10 w-10 text-primary" />}
                title="Composable"
                description="Mix and match animations to create unique effects."
              />
              <FeatureCard
                icon={<Code className="h-10 w-10 text-primary" />}
                title="Developer Friendly"
                description="Simple API with TypeScript support and comprehensive documentation."
              />
              <FeatureCard
                icon={<ArrowRight className="h-10 w-10 text-primary" />}
                title="Progressive"
                description="Works with or without JavaScript, ensuring accessibility."
              />
              <FeatureCard
                icon={<Zap className="h-10 w-10 text-primary" />}
                title="Free to Use"
                description="Open source and free for personal and commercial projects."
              />
            </div>
          </div>
        </section>

        {/* Code Example Section */}
        <section
          className={`w-full py-12 md:py-24 lg:py-32 ${
            theme === Theme.dark ? "bg-zinc-950" : "bg-gray-50"
          }`}
        >
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Simple to Implement
                </h2>
                <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                  Just a few lines of code to add beautiful animations to your
                  components.
                </p>
              </div>
            </div>
            <div
              className={`mx-auto mt-12 max-w-4xl rounded-lg border p-4 ${
                theme === Theme.dark
                  ? "bg-zinc-900 border-gray-600"
                  : "bg-gray-100 border-gray-200"
              }`}
            >
              <pre className="overflow-x-auto text-sm">
                <code className="language-jsx">
                  {`import { Button } from 'pixelflow-ui';

// Basic usage
<AnimateCard animation="fade" duration={300}>
  Your content here
</AnimateCard>

// With custom parameters
<AnimateCard 
  animation="slide" 
  direction="up" 
  duration={500} 
  easing="ease-out"
  delay={200}
>
  Customized animation
</AnimateCard>`}
                </code>
              </pre>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section
          className={`w-full py-12 md:py-24 lg:py-32 ${
            theme === Theme.dark
              ? "bg-primary-900 text-gray-50"
              : "bg-primary-100 text-gray-950"
          }`}
        >
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Ready to Bring Your UI to Life?
                </h2>
                <p className="mx-auto max-w-[700px] md:text-xl">
                  Get started with Pixelflow UI today and transform your user
                  experience.
                </p>
              </div>
              <div className="space-x-4">
                <Button variant="secondary" size="lg">
                  Get Started <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="bg-transparent text-primary-foreground border-primary-foreground hover:bg-primary-foreground hover:text-primary"
                >
                  View Examples
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer
        className={`w-full py-6 border-t ${
          theme === Theme.dark
            ? "bg-zinc-950 border-gray-600"
            : "bg-gray-50 border-gray-200"
        }`}
      >
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <p className="text-sm text-muted-foreground">
                © {new Date().getFullYear()} Pixelflow UI. All rights reserved.
              </p>
              <div className="flex items-center justify-center space-x-4">
                <a
                  href="#"
                  className="text-sm text-muted-foreground hover:text-foreground"
                >
                  GitHub
                </a>
                <a
                  href="#"
                  className="text-sm text-muted-foreground hover:text-foreground"
                >
                  Documentation
                </a>
                <a
                  href="#"
                  className="text-sm text-muted-foreground hover:text-foreground"
                >
                  License
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

function FeatureCard({ icon, title, description }) {
  return (
    <Card>
      <CardHeader>
        <div className="flex items-center justify-center">{icon}</div>
        <CardTitle className="text-xl text-center mt-4">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <CardDescription className="text-center">{description}</CardDescription>
      </CardContent>
    </Card>
  );
}
