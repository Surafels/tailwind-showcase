"use client"; // Enable interactivity for client-side features

import { useState, useEffect } from "react";
import Image from "next/image";

export default function Home() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Toggle dark mode
  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  // Apply dark mode class to the <html> element
  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDarkMode]);

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      {/* Navbar */}
      <nav className="bg-white dark:bg-gray-800 shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            {/* Logo */}
            <div className="flex items-center">
              <span className="text-xl font-bold text-gray-900 dark:text-white">
                Tailwind Showcase
              </span>
            </div>

            {/* Nav Links */}
            <div className="hidden md:flex items-center space-x-4">
              <a
                href="#jit-mode"
                className="text-gray-900 dark:text-white hover:text-blue-500 dark:hover:text-blue-400"
              >
                JIT Mode
              </a>
              <a
                href="#aspect-ratio"
                className="text-gray-900 dark:text-white hover:text-blue-500 dark:hover:text-blue-400"
              >
                Aspect Ratio
              </a>
              <a
                href="#forms"
                className="text-gray-900 dark:text-white hover:text-blue-500 dark:hover:text-blue-400"
              >
                Forms
              </a>
              <a
                href="#contact"
                className="text-gray-900 dark:text-white hover:text-blue-500 dark:hover:text-blue-400"
              >
                Contact
              </a>
            </div>

            {/* Dark Mode Toggle */}
            <div className="flex items-center">
              <button
                onClick={toggleDarkMode}
                className="p-2 bg-gray-200 dark:bg-gray-700 rounded-lg text-gray-800 dark:text-gray-200"
              >
                {isDarkMode ? "🌙 Dark Mode" : "☀️ Light Mode"}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="p-8 max-w-7xl mx-auto">
        {/* Header */}
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-8">
          Tailwind CSS New Features Showcase
        </h1>

        {/* Just-In-Time (JIT) Mode */}
        <section id="jit-mode" className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
            Just-In-Time (JIT) Mode
          </h2>
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
            Advantages of JIT Mode
          </h3>
          <ul className="list-disc list-inside text-gray-600 dark:text-gray-300">
            <li>On-Demand Style Generation</li>
            <li>Smaller CSS Files</li>
            <li>Faster Build Times</li>
            <li>Arbitrary Value Support</li>
            <li>Simplified Prototyping</li>
            <li>Responsive and Adaptive Design</li>
            <li>Improved Developer Experience</li>
            <li>Dynamic Styling</li>
            <li>Customization Flexibility</li>
          </ul>
          <p className="text-gray-600 dark:text-gray-300 mb-4">
            JIT mode generates styles on-demand, resulting in faster build times and smaller CSS
            files. You can now use arbitrary values directly in your class names.
          </p>
          <div className="p-6 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-lg shadow-lg">
            <p className="text-lg font-semibold">Arbitrary Value Example:</p>
            <p className="text-sm">`w-[300px] h-[200px] bg-[#ff00ff]`</p>
          </div>
        </section>

        {/* Aspect Ratio Utility */}
        <section id="aspect-ratio" className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
            Aspect Ratio Utility
          </h2>
          <p className="text-gray-600 dark:text-gray-300 mb-4">
            The new `aspect-ratio` utility makes responsive design easier. Define aspect ratios for
            images and videos with ease.
          </p>

          {/* 16:9 Aspect Ratio */}
          <div className="mb-8">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
              16:9 Aspect Ratio
            </h3>
            <div className="aspect-w-16 aspect-h-9 bg-gray-200 dark:bg-gray-700 rounded-lg overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1682686581551-867e0b208bd1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                alt="16:9 Image"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* 4:3 Aspect Ratio */}
          {/* <div className="mb-8">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
              4:3 Aspect Ratio
            </h3>
            <div className="aspect-w-4 aspect-h-3 bg-gray-200 dark:bg-gray-700 rounded-lg overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1695653422902-1bea566871c6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80"
                alt="4:3 Image"
                className="w-full h-full object-cover"
              />
            </div>
          </div> */}

          {/* 1:1 Aspect Ratio */}
          {/* <div className="mb-8">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
              1:1 Aspect Ratio
            </h3>
            <div className="aspect-w-1 aspect-h-1 bg-gray-200 dark:bg-gray-700 rounded-lg overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1695653422902-1bea566871c6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80"

                alt="1:1 Image"
                className="w-full h-full object-cover"
              />
            </div>
          </div> */}

          {/* Custom 3:2 Aspect Ratio */}
          {/* <div>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
              Custom 3:2 Aspect Ratio
            </h3>
            <div className="aspect-w-[3] aspect-h-[2] bg-gray-200 dark:bg-gray-700 rounded-lg overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1682686581551-867e0b208bd1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                alt="3:2 Image"
                className="w-full h-full object-cover"
              />
            </div>
          </div> */}
        </section>

        {/* Improved Forms */}
        <section id="forms" className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
            Improved Form Styling
          </h2>
          <p className="text-gray-600 dark:text-gray-300 mb-4">
            Tailwind now includes utilities to streamline form styling, making it simpler to achieve
            consistent designs.
          </p>
          <div className="space-y-4">
            <input
              type="text"
              placeholder="Styled Input"
              className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-800 dark:text-white"
            />
            <select className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-800 dark:text-white">
              <option>Select an option</option>
              <option>Option 1</option>
              <option>Option 2</option>
            </select>
          </div>
        </section>

        {/* Customization and Extended Theme */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
            Extended Customization
          </h2>
          <p className="text-gray-600 dark:text-gray-300 mb-4">
            Tailwind's theme customization allows you to easily extend colors, spacing, and
            typography.
          </p>
          <div className="bg-gradient-to-r from-teal-500 to-cyan-500 text-white p-6 rounded-lg shadow-lg">
            <p className="text-lg font-semibold">Custom Theme Example</p>
          </div>
        </section>

        {/* Enhanced Components */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
            Enhanced Component Plugins
          </h2>
          <p className="text-gray-600 dark:text-gray-300 mb-4">
            New component plugins simplify UI development, allowing for quicker prototyping.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {[1, 2, 3].map((item) => (
              <div
                key={item}
                className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
              >
                <h3 className="font-bold text-gray-900 dark:text-white">Card {item}</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  This is a card example.
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Button Variants */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
            Button Variants
          </h2>
          <p className="text-gray-600 dark:text-gray-300 mb-4">
            Easily create different button styles using Tailwind's utility classes.
          </p>
          <div className="flex space-x-4">
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition-all">
              Primary Button
            </button>
            <button className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded transition-all">
              Secondary Button
            </button>
            <button className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-pink-500 hover:to-purple-500 text-white font-bold py-2 px-4 rounded transition-all">
              Gradient Button
            </button>
          </div>
        </section>

        {/* Animations */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
            Animations
          </h2>
          <p className="text-gray-600 dark:text-gray-300 mb-4">
            Tailwind now includes built-in animations for creating engaging user experiences.
          </p>
          <div className="flex space-x-4">
            <button className="animate-bounce bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded">
              Bounce
            </button>
            <button className="animate-spin bg-pink-500 hover:bg-pink-700 text-white font-bold py-2 px-4 rounded">
              Spin
            </button>
            <button className="animate-pulse bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
              Pulse
            </button>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
            Contact Us
          </h2>
          <p className="text-gray-600 dark:text-gray-300 mb-4">
            We'd love to hear from you! Fill out the form below to get in touch.
          </p>
          <form className="space-y-4">
            <div>
              <label className="block text-gray-700 dark:text-gray-300 mb-2" htmlFor="name">
                Name
              </label>
              <input
                type="text"
                id="name"
                className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-800 dark:text-white"
                placeholder="Your Name"
              />
            </div>
            <div>
              <label className="block text-gray-700 dark:text-gray-300 mb-2" htmlFor="email">
                Email
              </label>
              <input
                type="email"
                id="email"
                className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-800 dark:text-white"
                placeholder="Your Email"
              />
            </div>
            <div>
              <label className="block text-gray-700 dark:text-gray-300 mb-2" htmlFor="message">
                Message
              </label>
              <textarea
                id="message"
                className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-800 dark:text-white"
                placeholder="Your Message"
                rows={4}
              ></textarea>
            </div>
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition-all"
            >
              Send Message
            </button>
          </form>
        </section>
      </div>
    </div>
  );
}