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