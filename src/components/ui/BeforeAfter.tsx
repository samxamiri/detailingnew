// "use client";

// import React, { useState } from "react";
// import Image from "next/image";

// interface ImagePair {
//   before: string;
//   after: string;
// }

// interface BeforeAfterProps {
//   imagePairs: ImagePair[];
// }

// const BeforeAfter: React.FC<BeforeAfterProps> = ({ imagePairs }) => {
//   const [currentIndex, setCurrentIndex] = useState(0);

//   const handleNext = () => {
//     setCurrentIndex((prevIndex) => (prevIndex + 1) % imagePairs.length);
//   };

//   const { before, after } = imagePairs[currentIndex];

//   return (
//     <section className="w-full py-12 md:py-24 lg:py-32">
//       <div className="container mx-auto px-4 md:px-6">
//         <div className="text-center mb-12">
//           <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
//             Before & After
//           </h2>
//           <p className="text-gray-500 md:text-xl dark:text-gray-400">
//             See the incredible transformation our detailing services can
//             achieve.
//           </p>
//         </div>
//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-center">
//           <div
//             className="flex flex-col items-center relative w-full"
//             style={{ height: "50vh" }}
//           >
//             {" "}
//             {/* Using viewport height */}
//             <Image
//               alt="Before - detailing transformation showing initial state"
//               src={before}
//               layout="fill"
//               objectFit="cover"
//               className="rounded-xl overflow-hidden"
//             />
//             <h3 className="mt-2 text-lg font-bold">Before</h3>
//           </div>
//           <div
//             className="flex flex-col items-center relative w-full"
//             style={{ height: "50vh" }}
//           >
//             {" "}
//             {/* Using viewport height */}
//             <Image
//               alt="After - detailing transformation showing final state"
//               src={after}
//               layout="fill"
//               objectFit="cover"
//               className="rounded-xl overflow-hidden"
//             />
//             <h3 className="mt-2 text-lg font-bold">After</h3>
//           </div>
//         </div>
//         <div className="flex justify-center mt-8">
//           <button
//             onClick={handleNext}
//             className="inline-flex items-center justify-center rounded-md bg-gray-900 px-8 py-2 text-sm font-medium text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2"
//             aria-label="View next image pair"
//           >
//             Next
//           </button>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default BeforeAfter;
