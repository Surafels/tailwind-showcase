"use client"; // Enable interactivity for client-side features

import { useState, useEffect } from "react";
import Image from "next/image";

export default function Home() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Toggle dark mode
  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Toggle modal visibility
  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
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
    <div className="min-h-screen bg-white dark:bg-gray-900 ">
      {/* Navbar */}
      <nav className="bg-white dark:bg-gray-800 shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            {/* Logo */}
            <div className="flex items-center">
              <span className="text-xl font-bold text-gray-900 dark:text-white hover:text-green-500 dark:hover:text-blue-400">
                Tailwind Showcase
              </span>
            </div>

            {/* Nav Links */}
            <div className="hidden md:flex items-center space-x-4">

              <a
                href="#explanation"

                className="text-gray-900 dark:text-white hover:text-green-500 dark:hover:text-blue-400"
              >
                Explanation
              </a>
              <a
                href="#jit-mode"
                className="text-gray-900 dark:text-white hover:text-green-500 dark:hover:text-blue-400"
              >
                JIT Mode
              </a>
              <a
                href="#aspect-ratio"
                className="text-gray-900 dark:text-white hover:text-green-500 dark:hover:text-blue-400"
              >
                Aspect Ratio
              </a>
              <a
                href="#forms"
                className="text-gray-900 dark:text-white hover:text-green-500 dark:hover:text-blue-400"
              >
                Forms
              </a>
              <a
                href="#contact"
                className="text-gray-900 dark:text-white hover:text-green-500 dark:hover:text-blue-400"
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
        {/* <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-8">
          Tailwind CSS New Features Showcase
        </h1> */}
        {/* Explantion */}

        <section id="explanation" className="mb-12">
          <h1 className="text-4xl font-bold text-center mb-8 font-serif text-gray-900 dark:text-green-900 ">
            Explanation of New Tailwind CSS Features
          </h1>

          {/* Just-In-Time (JIT) Mode */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold mb-4 font-mono  text-gray-900 dark:text-white">Just-In-Time (JIT) Mode</h2>
            <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
              <li><strong>On-Demand Style Generation:</strong> Generates styles as you write them, reducing the size of your CSS files.</li>
              <li><strong>Smaller CSS Files:</strong> Only includes the styles you use, resulting in smaller CSS files.</li>
              <li><strong>Faster Build Times:</strong> Speeds up the build process by generating styles on-demand.</li>
              <li><strong>Arbitrary Value Support:</strong> Allows you to use arbitrary values directly in your class names.</li>
              <li><strong>Simplified Prototyping:</strong> Makes it easier to prototype designs quickly.</li>
              <li><strong>Responsive and Adaptive Design:</strong> Supports responsive and adaptive design out of the box.</li>
              <li><strong>Improved Developer Experience:</strong> Enhances the developer experience with faster feedback loops.</li>
              <li><strong>Dynamic Styling:</strong> Enables dynamic styling based on your needs.</li>
              <li><strong>Customization Flexibility:</strong> Provides flexibility to customize your design system.</li>
            </ul>
          </div>

          {/* Aspect Ratio Utility */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold mb-4 font-mono text-gray-900 dark:text-green-800">Aspect Ratio Utility</h2>
            <ul className="list-disc list-inside space-y-2 text-gray-600 dark:text-gray-300">
              <li><strong>Makes it easy to define aspect ratios for images and videos.</strong></li>
              <li><strong>Supports common aspect ratios like 16:9, 4:3, and 1:1.</strong></li>
              <li><strong>Allows for custom aspect ratios.</strong></li>
            </ul>
          </div>

          {/* Improved Form Styling */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold mb-4 font-mono text-gray-900 dark:text-blue-800">Improved Form Styling</h2>
            <ul className="list-disc list-inside space-y-2 text-gray-600 dark:text-red-600">
              <li><strong>Provides utilities to streamline form styling.</strong></li>
              <li><strong>Makes it easier to achieve consistent designs for form elements.</strong></li>
            </ul>
          </div>

          {/* Extended Customization */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold mb-4 font-mono text-gray-900 dark:text-blue-500">Extended Customization</h2>
            <ul className="list-disc list-inside space-y-2 text-gray-800 dark:text-red-600">
              <li><strong>Allows you to extend colors, spacing, and typography.</strong></li>
              <li><strong>Provides flexibility to customize your design system.</strong></li>
            </ul>
          </div>

          {/* Enhanced Component Plugins */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold mb-4 font-mono text-gray-600 dark:text-green-500">Enhanced Component Plugins</h2>
            <ul className="list-disc list-inside space-y-2 text-gray-600 dark:text-gray-300">
              <li><strong>Simplifies UI development with new component plugins.</strong></li>
              <li><strong>Allows for quicker prototyping and development.</strong></li>
            </ul>
          </div>

          {/* Button Variants */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold mb-4 font-mono text-gray-600 dark:text-orange-500">Button Variants</h2>
            <ul className="list-disc list-inside space-y-2 text-gray-600 dark:text-gray-300">
              <li><strong>Easily create different button styles using Tailwind's utility classes.</strong></li>
              <li><strong>Supports primary, secondary, and gradient button styles.</strong></li>
            </ul>
          </div>

          {/* Animations */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold mb-4 font-mono text-gray-600 dark:text-purple-500">Animations</h2>
            <ul className="list-disc list-inside space-y-2 text-gray-600 dark:text-gray-300">
              <li><strong>Includes built-in animations for creating engaging user experiences.</strong></li>
              <li><strong>Supports animations like bounce, spin, pulse, ping, and wiggle.</strong></li>
            </ul>
          </div>

          {/* Contact Section */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold mb-4 font-mono text-gray-600 dark:text-gray-900">Contact Section</h2>
            <ul className="list-disc list-inside space-y-2 text-gray-600 dark:text-gray-300">
              <li><strong>Provides a contact form for users to get in touch.</strong></li>
              <li><strong>Includes fields for name, email, and message.</strong></li>
            </ul>
          </div>
        </section>
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
        <section id="colors" className="py-12 bg-white dark:bg-gray-900 transition-colors duration-300">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-8">
              Color Showcase
            </h2>

            {/* Background Colors */}
            <div className="mb-12">
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                Background Colors
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-lg">
                  <p className="text-gray-900 dark:text-white"><code>bg-white</code> / <code>bg-gray-900</code></p>
                </div>
                <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg shadow-lg">
                  <p className="text-gray-900 dark:text-white"><code>bg-gray-50</code> / <code>bg-gray-800</code></p>
                </div>
                <div className="bg-gray-100 dark:bg-gray-700 p-6 rounded-lg shadow-lg">
                  <p className="text-gray-900 dark:text-white"><code>bg-gray-100</code> / <code>bg-gray-700</code></p>
                </div>
              </div>
            </div>

            {/* Text Colors */}
            <div className="mb-12">
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                Text Colors
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-lg">
                  <p className="text-gray-900 dark:text-white"><code>text-gray-900</code> / <code>text-white</code></p>
                </div>
                <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg shadow-lg">
                  <p className="text-gray-700 dark:text-gray-300"><code>text-gray-700</code> / <code>text-gray-300</code></p>
                </div>
                <div className="bg-gray-100 dark:bg-gray-700 p-6 rounded-lg shadow-lg">
                  <p className="text-gray-500 dark:text-gray-400"><code>text-gray-500</code> / <code>text-gray-400</code></p>
                </div>
              </div>
            </div>

            {/* Accent Colors */}
            <div className="mb-12">
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                Accent Colors
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-blue-600 dark:bg-blue-500 p-6 rounded-lg shadow-lg">
                  <p className="text-white"><code>bg-blue-600</code> / <code>bg-blue-500</code></p>
                </div>
                <div className="bg-green-600 dark:bg-green-500 p-6 rounded-lg shadow-lg">
                  <p className="text-white"><code>bg-green-600</code> / <code>bg-green-500</code></p>
                </div>
                <div className="bg-purple-600 dark:bg-purple-500 p-6 rounded-lg shadow-lg">
                  <p className="text-white"><code>bg-purple-600</code> / <code>bg-purple-500</code></p>
                </div>
              </div>
            </div>

            {/* Border Colors */}
            <div className="mb-12">
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                Border Colors
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="border-2 border-gray-200 dark:border-gray-700 p-6 rounded-lg shadow-lg">
                  <p className="text-gray-900 dark:text-white"><code>border-gray-200</code> / <code>border-gray-700</code></p>
                </div>
                <div className="border-2 border-gray-300 dark:border-gray-600 p-6 rounded-lg shadow-lg">
                  <p className="text-gray-900 dark:text-white"><code>border-gray-300</code> / <code>border-gray-600</code></p>
                </div>
                <div className="border-2 border-gray-400 dark:border-gray-500 p-6 rounded-lg shadow-lg">
                  <p className="text-gray-900 dark:text-white"><code>border-gray-400</code> / <code>border-gray-500</code></p>
                </div>
              </div>
            </div>

            {/* Error and Warning Colors */}
            <div className="mb-12">
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                Error & Warning Colors
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-red-600 dark:bg-red-500 p-6 rounded-lg shadow-lg">
                  <p className="text-white"><code>bg-red-600</code> / <code>bg-red-500</code></p>
                </div>
                <div className="bg-yellow-600 dark:bg-yellow-500 p-6 rounded-lg shadow-lg">
                  <p className="text-white"><code>bg-yellow-600</code> / <code>bg-yellow-500</code></p>
                </div>
                <div className="bg-orange-600 dark:bg-orange-500 p-6 rounded-lg shadow-lg">
                  <p className="text-white"><code>bg-orange-600</code> / <code>bg-orange-500</code></p>
                </div>
              </div>
            </div>

            {/* Gradient Colors */}
            <div className="mb-12">
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                Gradient Colors
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-gradient-to-r from-blue-500 to-purple-500 p-6 rounded-lg shadow-lg">
                  <p className="text-white"><code>from-blue-500 to-purple-500</code></p>
                </div>
                <div className="bg-gradient-to-r from-teal-500 to-green-500 p-6 rounded-lg shadow-lg">
                  <p className="text-white"><code>from-teal-500 to-green-500</code></p>
                </div>
                <div className="bg-gradient-to-r from-pink-500 to-red-500 p-6 rounded-lg shadow-lg">
                  <p className="text-white"><code>from-pink-500 to-red-500</code></p>
                </div>
              </div>
            </div>
          </div>
        </section>
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
        {/* Text Section */}
        <section id="text" className="py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-8">
              Text Section
            </h2>
            <div className="space-y-4">
              <h1 className="text-4xl font-bold text-gray-900 dark:text-white">
                Heading 1
              </h1>
              <h2 className="text-3xl font-semibold text-gray-900 dark:text-white">
                Heading 2
              </h2>
              <h3 className="text-2xl font-medium text-gray-900 dark:text-white">
                Heading 3
              </h3>
              <p className="text-lg text-gray-700 dark:text-gray-300">
                This is a paragraph with some text. It demonstrates how text looks in both light and dark modes.
              </p>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                This is smaller text, often used for captions or secondary information.
              </p>
            </div>
          </div>
        </section>


        {/* Card Section */}
        <section id="cards" className="py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-8">
              Card Section
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Card 1 */}
              <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden">
                <img
                  // src="https://via.placeholder.com/400x200"
                  src="https://images.unsplash.com/photo-1682686581551-867e0b208bd1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"

                  alt="Card Image"
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                    Card Title
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300 mb-4">
                    This is a sample card with an image, text, and a button.
                  </p>
                  <button
                    onClick={toggleModal}
                    className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition-all"
                  >
                    Learn More
                  </button>
                </div>
              </div>

              {/* Card 2 */}
              <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1682686581551-867e0b208bd1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                  alt="Card Image"
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                    Card Title
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300 mb-4">
                    This is another sample card with an image, text, and a button.
                  </p>
                  <button
                    onClick={toggleModal}
                    className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition-all"
                  >
                    Learn More
                  </button>
                </div>
              </div>

              {/* Card 3 */}
              <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1682686581551-867e0b208bd1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                  alt="Card Image"
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                    Card Title
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300 mb-4">
                    This is yet another sample card with an image, text, and a button.
                  </p>
                  <button
                    onClick={toggleModal}
                    className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition-all"
                  >
                    Learn More
                  </button>
                </div>
              </div>
              {/* Card 4 */}
              <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1682686581551-867e0b208bd1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                  alt="Card Image"
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                    Card Title
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300 mb-4">
                    This is yet another sample card with an image, text, and a button.
                  </p>
                  <button
                    onClick={toggleModal}
                    className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition-all"
                  >
                    Learn More
                  </button>
                </div>
              </div>
                {/* Card 3 */}
              <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1682686581551-867e0b208bd1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                  alt="Card Image"
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                    Card Title
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300 mb-4">
                    This is yet another sample card with an image, text, and a button.
                  </p>
                  <button
                    onClick={toggleModal}
                    className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition-all"
                  >
                    Learn More
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Modal */}
        {isModalOpen && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg w-11/12 md:w-1/2 p-6">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                Detailed Information
              </h2>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                This is a detailed description of the card content. It can include more text, links, and other important information.
              </p>
              <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 mb-4">
                <li>Feature 1: Description of feature 1.</li>
                <li>Feature 2: Description of feature 2.</li>
                <li>Feature 3: Description of feature 3.</li>
              </ul>
              <a
                href="#"
                className="text-blue-600 dark:text-blue-400 hover:underline"
              >
                Learn More
              </a>
              <div className="mt-6 flex justify-end">
                <button
                  onClick={toggleModal}
                  className="bg-gray-600 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded transition-all"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        )}
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