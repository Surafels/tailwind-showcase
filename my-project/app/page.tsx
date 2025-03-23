"use client";

import React from "react";
import { useState, useEffect } from "react";
import { Button, Dialog, DialogTitle, DialogContent, DialogActions, } from "@mui/material";
import Image from "next/image";

export default function Home() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isOpen, setIsOpen] = useState(false)
  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };
  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDarkMode]);


  const [selectedCountry, setSelectedCountry] = useState("US");

  const countries = [
    { code: "US", name: "United States", flag: "🇺🇸" },
    { code: "IN", name: "India", flag: "🇮🇳" },
    { code: "GB", name: "United Kingdom", flag: "🇬🇧" },
    { code: "CA", name: "Canada", flag: "🇨🇦" },
    { code: "AU", name: "Australia", flag: "🇦🇺" },
    { code: "DE", name: "Germany", flag: "🇩🇪" },
    { code: "FR", name: "France", flag: "🇫🇷" },
    { code: "JP", name: "Japan", flag: "🇯🇵" },
  ];

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>): void => {
    setSelectedCountry(e.target.value);
  };

  const selectedCountryDetails = countries.find(
    (country) => country.code === selectedCountry
  );


  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 ">
      <nav className="bg-white dark:bg-gray-800 shadow-lg">
        <div className=" bg-gray-100 w-full px-4 fixed top-0 z-50 dark:bg-gray-500">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <span className="text-xl font-bold text-gray-900 dark:text-white hover:text-green-500 dark:hover:text-blue-400">
                Tailwind Showcase
              </span>
            </div>

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

      <div className="p-8 max-w-7xl mx-auto">
        <section id="explanation" className=" mt-12 mb-12">
          <h1 className="text-4xl font-bold text-center mb-8 font-serif text-gray-900 dark:text-green-900 ">
            Explanation of New Tailwind CSS Features
          </h1>
          <div className="mb-8">
            <h2 className="text-2xl font-bold mb-4 font-mono text-gray-900 dark:text-green-800">Aspect Ratio Utility</h2>
            <ul className="list-disc list-inside space-y-2 text-gray-600 dark:text-gray-300">
              <li><strong>Makes it easy to define aspect ratios for images and videos.</strong></li>
              <li><strong>Supports common aspect ratios like 16:9, 4:3, and 1:1.</strong></li>
              <li><strong>Allows for custom aspect ratios.</strong></li>
            </ul>
          </div>

          <div className="mb-8">
            <h2 className="text-2xl font-bold mb-4 font-mono text-gray-900 dark:text-blue-800">Improved Form Styling</h2>
            <ul className="list-disc list-inside space-y-2 text-gray-600 dark:text-red-600">
              <li><strong>Provides utilities to streamline form styling.</strong></li>
              <li><strong>Makes it easier to achieve consistent designs for form elements.</strong></li>
            </ul>
          </div>

          <div className="mb-8">
            <h2 className="text-2xl font-bold mb-4 font-mono text-gray-900 dark:text-blue-500">Extended Customization</h2>
            <ul className="list-disc list-inside space-y-2 text-gray-800 dark:text-red-600">
              <li><strong>Allows you to extend colors, spacing, and typography.</strong></li>
              <li><strong>Provides flexibility to customize your design system.</strong></li>
            </ul>
          </div>

          <div className="mb-8">
            <h2 className="text-2xl font-bold mb-4 font-mono text-gray-600 dark:text-green-500">Enhanced Component Plugins</h2>
            <ul className="list-disc list-inside space-y-2 text-gray-600 dark:text-gray-300">
              <li><strong>Simplifies UI development with new component plugins.</strong></li>
              <li><strong>Allows for quicker prototyping and development.</strong></li>
            </ul>
          </div>
          <div className="mb-8">
            <h2 className="text-2xl font-bold mb-4 font-mono text-gray-600 dark:text-orange-500">Button Variants</h2>
            <ul className="list-disc list-inside space-y-2 text-gray-600 dark:text-gray-300">
              <li><strong>Easily create different button styles using Tailwind`s utility classes.</strong></li>
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


        <div>

          <h1>Components</h1>
          <div className="bg-blue-100 border-l-4 border-blue-500 text-blue-700 p-4" role="alert">
            <p className="font-bold">Info Alert</p>
            <p>This is an informational message.</p>
          </div>
          {/* avatar */}
          <div className="flex items-center space-x-4">
            <Image
              className="w-12 h-12 rounded-full"
              src="https://randomuser.me/api/portraits/men/32.jpg"
              width={48}
              height={48}
              alt="User Avatar"
            />
            <div>
              <p className="font-semibold">John Doe</p>
              <p className="text-gray-500">Software Engineer</p>
            </div>
          </div>
          {/* badge */}
          <span className="bg-blue-100 text-blue-800 text-sm font-medium px-2.5 py-0.5 rounded">
            New
          </span>


          {/* checkbox */}
          <label className="flex items-center space-x-2">
            <input type="checkbox" className="form-checkbox h-5 w-5 text-blue-600" />
            <span>Check me</span>
          </label>


          {/* description list */}


          <dl className="grid grid-cols-2 gap-x-4 gap-y-2">
            <dt className="font-semibold">Name</dt>
            <dd>John Doe</dd>
            <dt className="font-semibold">Email</dt>
            <dd>john.doe@example.com</dd>
          </dl>
          <fieldset className="border p-4 rounded-lg">
            <legend className="font-semibold">Personal Information</legend>
            <label className="block">
              <span className="text-gray-700">Name</span>
              <input type="text" className="mt-1 block w-full rounded-md border-gray-300" />
            </label>
          </fieldset>


          {/*  Listbox (Custom Select) */}

          <div className="relative">
            <select className="block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm rounded-md">
              <option>Option 1</option>
              <option>Option 2</option>
              <option>option 3</option>

            </select>
          </div>
        </div>

        {/* Aspect Ratio Utility */}
        <div id="aspect-ratio" className="mb-12">
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
              <Image
                src="https://images.unsplash.com/photo-1682686581551-867e0b208bd1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                alt="16:9 Image"
                width={400}
                height={225}
                className="w-full h-full object-cover"
              />
            </div>
          </div>

        </div>
        <>

          <Dialog open={isOpen} onClose={setIsOpen}>
            <DialogTitle>Refund payment</DialogTitle>
            <DialogContent>
              The refund will be reflected in the customer’s bank account 2 to 3 business days after processing.
            </DialogContent>
            <DialogContent>
              <div>
                <label htmlFor="amount" className="block text-sm font-medium text-gray-700">
                  Amount
                </label>
                <input
                  id="amount"
                  name="amount"
                  type="text"
                  placeholder="$0.00"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                />
              </div>
            </DialogContent>
            <DialogActions>
              <Button onClick={() => setIsOpen(false)}>
                Cancel
              </Button>
              <Button onClick={() => setIsOpen(false)}>Refund</Button>
            </DialogActions>
          </Dialog>
        </>

        <div className="bg-gray-100 flex items-center justify-center ">
          <div className="max-w-xs w-full">
            {/* Dropdown Label */}
            <label htmlFor="country" className="block text-sm font-medium text-gray-700">
              Select Country
            </label>

            {/* Dropdown Select */}
            <select
              id="country"
              name="country"
              className="mt-1 block w-full pl-3 pr-10 py-2 text-base border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
              value={selectedCountry}
              onChange={handleChange}
            >
              {countries.map((country) => (
                <option key={country.code} value={country.code}>
                  {country.flag} {country.name}
                </option>
              ))}
            </select>

            {/* Selected Country Display */}
            <div className="mt-4 p-4 bg-gray-50 rounded-md">
              <p className="text-sm text-gray-700">
                Selected Country:{" "}
                <span className="font-semibold">
                  {selectedCountryDetails ? `${selectedCountryDetails.flag} ${selectedCountryDetails.name}` : "Country not found"}
                </span>
              </p>
            </div>
          </div>
        </div>

        {/* badge  */}
        {/* <section className="flex gap-3">
          <Badge className="lime">documentation</Badge>
          <Badge color="purple">help wanted</Badge>
          <Badge color="rose">bug</Badge>
        </section> */}

        <div className="flex flex-col items-center my-8 text-center animate-fade-in">
          {/* 3D Image Container */}
          <div className="relative group perspective-1000 transform-style-preserve-3d">
            {/* Image with 3D Transform */}
            <div className="transform transition-transform duration-500 group-hover:rotate-y-45 group-hover:rotate-x-12 group-hover:scale-105 group-hover:translate-z-12">
              <Image
                src="https://images.unsplash.com/photo-1682686581551-867e0b208bd1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                alt="Sarah Dayan"
                width={400}
                height={400}
                className=" border-4 border-gray-300"
              />
            </div>

            {/* Shadow */}
            <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-20  transition-opacity duration-300"></div>

            {/* Glow Effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-purple-500 opacity-0 group-hover:opacity-30  transition-opacity duration-300"></div>
          </div>
        </div>



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
            Tailwind`s theme customization allows you to easily extend colors, spacing, and
            typography.
          </p>
          <div className="bg-gradient-to-r from-teal-500 to-cyan-500 text-white p-6 rounded-lg shadow-lg">
            <p className="text-lg font-semibold">Custom Theme Example</p>
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
                <Image
                  src="https://images.unsplash.com/photo-1682686581551-867e0b208bd1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                  width={400}
                  height={200}
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
                <Image
                  src="https://images.unsplash.com/photo-1682686581551-867e0b208bd1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                  alt="Card Image"
                  width={400}
                  height={200}
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
                <Image
                  src="https://images.unsplash.com/photo-1682686581551-867e0b208bd1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                  alt="Card Image"
                  width={400}
                  height={200}
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
                <Image
                  src="https://images.unsplash.com/photo-1682686581551-867e0b208bd1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                  alt="Card Image"
                  width={400}
                  height={200}
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
                <Image
                  src="https://images.unsplash.com/photo-1682686581551-867e0b208bd1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                  alt="Card Image"
                  width={400}
                  height={200}
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
            Easily create different button styles using Tailwind`s utility classes.
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

        <div>
          <div className="bg-gray-100 py-12">
            <div className="max-w-4xl mx-auto px-4">
              <h2 className="text-3xl font-bold text-center mb-8">What Our Clients Say</h2>
              <div className="bg-white rounded-lg shadow-lg p-8">
                <p className="text-gray-700 italic mb-6">
                  Tailwind CSS has completely transformed the way we build websites. It`s fast, flexible, and easy to use.
                </p>
                <div className="flex items-center">
                  <Image className="w-12 h-12 rounded-full mr-4"
                    src="https://randomuser.me/api/portraits/men/32.jpg" alt="John Doe"

                    width={48}
                    height={48}
                  />
                  <div>
                    <p className="font-semibold">John Doe</p>
                    <p className="text-sm text-gray-600">CEO, Example Corp</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <section className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-4 p-6">
          <div className="bg-white rounded-lg shadow-lg p-6 w-64 text-center">
            <h3 className="text-xl font-semibold mb-4">Basic</h3>
            <p className="text-gray-600 mb-4">Perfect for individuals</p>
            <p className="text-4xl font-bold mb-4">$10<span className="text-lg text-gray-500">/mo</span></p>
            <ul className="text-sm text-gray-600 mb-6">
              <li className="mb-2">1 User</li>
              <li className="mb-2">5 Projects</li>
              <li className="mb-2">Basic Support</li>
            </ul>
            <button className="bg-blue-500 text-white px-6 py-2 rounded-full hover:bg-blue-600 transition duration-300">Get Started</button>
          </div>

          <div className="bg-blue-500 text-white rounded-lg shadow-lg p-6 w-64 text-center transform scale-105">
            <h3 className="text-xl font-semibold mb-4">Pro</h3>
            <p className="mb-4">Best for small teams</p>
            <p className="text-4xl font-bold mb-4">$20<span className="text-lg">/mo</span></p>
            <ul className="text-sm mb-6">
              <li className="mb-2">5 Users</li>
              <li className="mb-2">Unlimited Projects</li>
              <li className="mb-2">Priority Support</li>
            </ul>
            <button className="bg-white text-blue-500 px-6 py-2 rounded-full hover:bg-gray-100 transition duration-300">Get Started</button>
          </div>
          <Button type="button" onClick={() => setIsOpen(true)}>
            Refund payment
          </Button>
        </section>

        {/* Contact Section */}
        <section id="contact" className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
            Contact Us
          </h2>
          <p className="text-gray-600 dark:text-gray-300 mb-4">
            We`d love to hear from you! Fill out the form below to get in touch.
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
