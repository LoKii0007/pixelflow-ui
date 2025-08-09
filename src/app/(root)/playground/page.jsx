"use client";

import React from "react";
import { Palette, Code, Zap, Play, Clock } from "lucide-react";

export default function ComingSoonPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black text-white overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-1/2 -left-1/2 w-full h-full bg-gradient-to-r from-gray-800/10 to-blue-400/10 rotate-12 animate-pulse"></div>
        <div className="absolute -bottom-1/2 -right-1/2 w-full h-full bg-gradient-to-l from-blue-300/10 to-gray-700/10 -rotate-12 animate-pulse"></div>
      </div>

      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-6 mt-20">
        {/* Main Content */}
        <div
          className={`max-w-4xl mx-auto text-center mb-12 transform transition-all duration-1000 delay-300 `}
        >
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4">Coming Soon</h1>
          </div>
          {/* Pain Points Section */}
          <div className="bg-gray-900/50 backdrop-blur-sm rounded-2xl p-8 mb-8 border border-gray-700/50">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-white">
              We all <span className="text-red-400">hate</span> docs, right?
            </h2>

            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div className="bg-gray-800/30 border border-gray-600/30 rounded-xl p-6">
                <Clock className="w-8 h-8 text-gray-400 mb-4 mx-auto" />
                <h3 className="text-xl font-semibold mb-3 text-gray-200">
                  What Devs Love
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  Spending <strong>4+ hours</strong> figuring out component
                  props by trial and error, and still not reading docs.
                </p>
              </div>

              <div className="bg-blue-500/10 border border-blue-500/20 rounded-xl p-6">
                <Zap className="w-8 h-8 text-blue-400 mb-4 mx-auto" />
                <h3 className="text-xl font-semibold mb-3 text-blue-300">
                  Our Solution
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  Interactive playground with{" "}
                  <strong>every prop visible</strong>. See what you like, copy
                  the code, done in minutes.
                </p>
              </div>
            </div>
          </div>

          {/* Features Preview */}
          <div className="bg-gray-900/30 backdrop-blur-sm rounded-2xl p-8 mb-8 border border-gray-700/30">
            <h3 className="text-2xl font-bold mb-6 text-white">
              Coming Soon: Feature Playground
            </h3>

            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="bg-gray-800/20 border border-gray-600/20 rounded-xl p-6">
                <Play className="w-8 h-8 text-blue-400 mb-4 mx-auto" />
                <h4 className="font-semibold mb-2 text-blue-300">
                  Live Preview
                </h4>
                <p className="text-sm text-gray-400">
                  See animations and interactions in real-time
                </p>
              </div>

              <div className="bg-gray-800/20 border border-gray-600/20 rounded-xl p-6">
                <Code className="w-8 h-8 text-blue-400 mb-4 mx-auto" />
                <h4 className="font-semibold mb-2 text-blue-300">
                  Instant Code
                </h4>
                <p className="text-sm text-gray-400">
                  Copy-paste ready code with your settings
                </p>
              </div>

              <div className="bg-gray-800/20 border border-gray-600/20 rounded-xl p-6">
                <Palette className="w-8 h-8 text-blue-400 mb-4 mx-auto" />
                <h4 className="font-semibold mb-2 text-blue-300">All Props</h4>
                <p className="text-sm text-gray-400">
                  Every possible prop and variation available
                </p>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center">
            <p className="text-slate-400 mt-4 text-sm">
              No more docs diving. Just play, see, copy, done.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
