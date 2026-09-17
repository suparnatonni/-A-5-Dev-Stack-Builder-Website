// import type { Technology } from "../../types/technologyTypes"

// interface TechnologyCardProps {
//   technology: Technology
//   handleAddToStack: (technology: Technology) => void
//   stack: Technology[]
// }

// const TechnologyCard = ({
//   technology,
//   handleAddToStack,
//   stack,
// }: TechnologyCardProps) => {

//   const isAdded = stack.some(
//     (item) => item.id === technology.id
//   )

//   return (
//     <div className="border rounded-xl p-5">

//       <img
//         src={technology.icon}
//         alt={technology.name}
//         className="w-12 h-12"
//       />

//       <h3 className="text-xl font-bold mt-3">
//         {technology.name}
//       </h3>

//       <p className="text-gray-600 mt-2">
//         {technology.description}
//       </p>

//       <div className="flex gap-2 mt-3">
//         <span>{technology.category}</span>
//         <span>{technology.difficulty}</span>
//       </div>

//       <p className="mt-3">
//         ⭐ {technology.rating}
//       </p>

//       <button
//         onClick={() => handleAddToStack(technology)}
//         disabled={isAdded}
//         className="mt-4 border px-4 py-2 rounded-lg"
//       >
//         {isAdded ? "✓ Added to Stack" : "Add to Stack"}
//       </button>

//     </div>
//   )
// }

// export default TechnologyCard