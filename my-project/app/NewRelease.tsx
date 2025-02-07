import React from 'react';

const NewRelease: React.FC = () => {
  return (
    <div className="p-8">
      <h1 className="text-4xl font-bold mb-4">New Tailwind CSS Release</h1>
      <p className="mb-4">
        Welcome to the new release of Tailwind CSS! Here are some of the exciting new features and improvements:
      </p>
      <ul className="list-disc list-inside mb-4">
        <li>Improved performance</li>
        <li>New utility classes</li>
        <li>Enhanced customization options</li>
        <li>Better support for modern CSS features</li>
      </ul>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="p-4 bg-gray-100 rounded-lg shadow">
          <h2 className="text-2xl font-semibold mb-2">Feature 1</h2>
          <p>Details about the first feature of the new release.</p>
        </div>
        <div className="p-4 bg-gray-100 rounded-lg shadow">
          <h2 className="text-2xl font-semibold mb-2">Feature 2</h2>
          <p>Details about the second feature of the new release.</p>
        </div>
        <div className="p-4 bg-gray-100 rounded-lg shadow">
          <h2 className="text-2xl font-semibold mb-2">Feature 3</h2>
          <p>Details about the third feature of the new release.</p>
        </div>
        <div className="p-4 bg-gray-100 rounded-lg shadow">
          <h2 className="text-2xl font-semibold mb-2">Feature 4</h2>
          <p>Details about the fourth feature of the new release.</p>
        </div>
      </div>
    </div>
  );
};

export default NewRelease;