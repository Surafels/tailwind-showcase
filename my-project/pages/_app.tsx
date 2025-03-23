import '../app/globals.css';

function MyApp({ Component, pageProps }: any) {
    return <Component {...pageProps} />;
}

export default MyApp; 



// import React from 'react';
// const Navbar = () => {
//     return (
//         <nav className="bg-gray-900 text-white p-4">
//             <div className="container mx-auto flex justify-between items-center">

//                 <div className="text-xl font-bold">Professor's Portal
//                     <ul className="flex space-x-4">
//                         <li><a href="/" className="hover:text-gray-400">Home</a></li>
//                         <li><a href="about" className="hover:text-gray-400">About</a></li>
//                         <li><a href="projects" className="hover:text-gray-400">Projects</a></li>
//                         <li><a href="contact" className="hover:text-gray-400">Contact</a></li>
//                         <li><a href="experiance" className="hover:text-gray-400">Experience</a></li>
//                         <li><a href="publications" className="hover:text-gray-400">Publication</a></li>
//                     </ul>
//                 </div>
//             </div>
//         </nav>
//     );
// };

// export default Navbar; 