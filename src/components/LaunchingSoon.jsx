"use client"

import React from "react"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ArrowRight, CheckCircle, Code, Layers, Palette, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"

export default function ComingSoonPage() {
  const [email, setEmail] = useState("")
  const [submitted, setSubmitted] = useState(false)
  const [activeDemo, setActiveDemo] = useState(0)

  const handleSubmit = (e) => {
    e.preventDefault()
    if (email) {
      // Here you would typically send this to your backend
      console.log("Email submitted:", email)
      setSubmitted(true)
      setTimeout(() => setSubmitted(false), 3000)
      setEmail("")
    }
  }

  const demoComponents = [
    {
      title: "Button",
      component: (
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-primary text-primary-foreground px-6 py-3 rounded-lg font-medium flex items-center gap-2"
        >
          Get Started <ArrowRight className="h-4 w-4" />
        </motion.div>
      ),
    },
    {
      title: "Card",
      component: (
        <motion.div
          whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)" }}
          className="bg-card text-card-foreground p-6 rounded-xl border"
        >
          <h3 className="font-bold mb-2">Feature Card</h3>
          <p className="text-sm text-muted-foreground">Hover to see the animation effect</p>
        </motion.div>
      ),
    },
    {
      title: "Toggle",
      component: <ToggleSwitch />,
    },
  ]

  // Change demo component every 3 seconds
  useState(() => {
    const interval = setInterval(() => {
      setActiveDemo((prev) => (prev + 1) % demoComponents.length)
    }, 3000)
    return () => clearInterval(interval)
  })

  const features = [
    {
      icon: <Sparkles className="h-6 w-6" />,
      title: "Fluid Animations",
      description: "Smooth, customizable animations that bring your UI to life",
    },
    {
      icon: <Code className="h-6 w-6" />,
      title: "Easy Integration",
      description: "Simple API with TypeScript support for quick implementation",
    },
    {
      icon: <Palette className="h-6 w-6" />,
      title: "Customizable",
      description: "Easily adapt components to match your brand and design system",
    },
    {
      icon: <Layers className="h-6 w-6" />,
      title: "Composable",
      description: "Build complex UIs by combining simple animated components",
    },
  ]

  return (
    <div className="min-h-screen flex flex-col">

      {/* Hero Section */}
      <section className="py-20 flex-1">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Animated Components, <span className="text-primary">Simplified</span>
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                A free, open-source library of customizable animated React components. Launching soon.
              </p>
            </motion.div>
          </div>

          {/* Demo Components */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="max-w-lg mx-auto mt-16"
          >
            <Card className="border shadow-lg">
              <CardContent className="p-6">
                <div className="flex justify-between items-center mb-6">
                  <h3 className="font-semibold">Component Preview</h3>
                  <div className="flex gap-2">
                    {demoComponents.map((_, index) => (
                      <div
                        key={index}
                        className={`h-2 w-2 rounded-full ${index === activeDemo ? "bg-primary" : "bg-muted"}`}
                      />
                    ))}
                  </div>
                </div>
                <div className="h-40 flex items-center justify-center">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={activeDemo}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      transition={{ duration: 0.3 }}
                      className="text-center"
                    >
                      <div className="mb-4">{demoComponents[activeDemo].component}</div>
                      <p className="text-sm text-muted-foreground">{demoComponents[activeDemo].title} Component</p>
                    </motion.div>
                  </AnimatePresence>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Why Choose Pixelflow UI?</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Our library is designed to make adding beautiful animations to your React applications simple and
              performant.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-card border rounded-xl p-6 text-center"
              >
                <div className="bg-primary/10 text-primary p-3 rounded-full w-fit mx-auto mb-4">{feature.icon}</div>
                <h3 className="font-semibold mb-2">{feature.title}</h3>
                <p className="text-sm text-muted-foreground">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t">
        <div className="container mx-auto px-4 text-center">
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} Pixelflow UI. All rights reserved.
          </p>
          <div className="flex justify-center gap-6 mt-4">
            <a href="#" className="text-sm text-muted-foreground hover:text-foreground">
              Twitter
            </a>
            <a href="#" className="text-sm text-muted-foreground hover:text-foreground">
              GitHub
            </a>
            <a href="#" className="text-sm text-muted-foreground hover:text-foreground">
              Discord
            </a>
          </div>
        </div>
      </footer>
    </div>
  )
}

// Custom Toggle Switch Component
function ToggleSwitch() {
  const [isOn, setIsOn] = useState(false)

  return (
    <motion.button
      className={`w-14 h-8 flex items-center rounded-full p-1 ${
        isOn ? "justify-end bg-primary" : "justify-start bg-muted"
      }`}
      onClick={() => setIsOn(!isOn)}
      whileTap={{ scale: 0.95 }}
    >
      <motion.div
        className="w-6 h-6 bg-white rounded-full shadow-md"
        layout
        transition={{
          type: "spring",
          stiffness: 700,
          damping: 30,
        }}
      />
    </motion.button>
  )
}

