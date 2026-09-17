// import { use } from 'react'
// import type { Technology } from '../../component/types/technologyTypes'

// interface TechsProps {
//   techPromise: Promise<Technology[]>;
// }

// const Techs = ({ techPromise }: TechsProps) => {
//   const allTechs = use(techPromise);

//   return (
//     <div>
//       {allTechs.map((technology) => (
//         <div key={technology.id}>
//           {technology.name}
//         </div>
//       ))}
//     </div>
//   );
// };

// export default Techs;
// import { use } from "react";
// import type { Technology } from "../../component/types/technologyTypes";

// interface TechsProps {
//   techPromise: Promise<Technology[]>;
// }

// const Techs = ({ techPromise }: TechsProps) => {
//   const allTechs = use(techPromise);

//   return (
//     <>
//       {allTechs.map((technology) => (
//         <div
//           key={technology.id}
//           className="bg-white border border-gray-200 rounded-2xl p-5 shadow-sm hover:shadow-lg hover:-translate-y-1 transition duration-300"
//         >
//           {/* Icon + Badge */}
//           <div className="flex justify-between items-start mb-4">
//             <img
//               src={technology.icon}
//               alt={technology.name}
//               className="w-14 h-14 object-contain"
//             />

//             <span className="bg-purple-100 text-purple-700 text-xs font-semibold px-3 py-1 rounded-full">
//               {technology.badge}
//             </span>
//           </div>

//           {/* Name */}
//           <h3 className="text-xl font-bold text-gray-800 mb-2">
//             {technology.name}
//           </h3>

//           {/* Description */}
//           <p className="text-gray-600 text-sm leading-6 mb-4">
//             {technology.description}
//           </p>

//           {/* Category + Difficulty */}
//           <div className="flex flex-wrap gap-2 mb-4">
//             <span className="bg-blue-100 text-blue-700 text-xs font-medium px-3 py-1 rounded-full">
//               {technology.category}
//             </span>

//             <span className="bg-gray-100 text-gray-700 text-xs font-medium px-3 py-1 rounded-full">
//               {technology.difficulty}
//             </span>
//           </div>

//           {/* Rating */}
//           <div className="flex items-center gap-2 mb-5">
//             <span className="text-yellow-500 text-lg">
//               ★
//             </span>

//             <span className="text-gray-700 font-semibold">
//               {technology.rating}
//             </span>
//           </div>

//           {/* Add to Stack */}
//           <button
//             className="w-full bg-purple-600 hover:bg-purple-700 text-white font-semibold py-2.5 rounded-full transition"
//           >
//             Add to Stack
//           </button>
//         </div>
//       ))}
//     </>
//   );
// };

// export default Techs;

import { use, useState } from "react";
import type { Technology } from "../types/technologyTypes";
import TechnologyList from "./TechnologyList";
import YourStack from "../Stack/YourStack";

interface TechsProps {
  techPromise: Promise<Technology[]>;
}

const Techs = ({ techPromise }: TechsProps) => {
  const allTechs = use(techPromise);

  const [stack, setStack] = useState<Technology[]>([]);

  // Add to Stack
  const handleAddToStack = (technology: Technology) => {
    const alreadyAdded = stack.some(
      (item) => item.id === technology.id
    );

    if (alreadyAdded) {
      alert(`${technology.name} is already in your stack!`);
      return;
    }

    setStack([...stack, technology]);
  };

  // Remove one
  const handleRemove = (id: string) => {
    setStack(stack.filter((item) => item.id !== id));
  };

  // Remove all
  const handleRemoveAll = () => {
    setStack([]);
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">

      {/* Technology Cards - 3 columns */}
      <div className="lg:col-span-3">
        <TechnologyList
          technologies={allTechs}
          stack={stack}
          onAddToStack={handleAddToStack}
        />
      </div>

      {/* Your Stack - 1 column */}
      <div className="lg:col-span-1">
        <YourStack
          stack={stack}
          onRemove={handleRemove}
          onRemoveAll={handleRemoveAll}
        />
      </div>

    </div>
  );
};

export default Techs;