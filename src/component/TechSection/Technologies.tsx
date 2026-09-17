// import type { Technology } from "../../types/technologyTypes"
// import TechnologyCard from "./TechnologyCard"

// interface TechnologiesProps {
//   technologies: Technology[]
//   handleAddToStack: (technology: Technology) => void
//   stack: Technology[]
// }

// const Technologies = ({
//   technologies,
//   handleAddToStack,
//   stack,
// }: TechnologiesProps) => {

//   return (
//     <div className="grid grid-cols-3 gap-5">

//       {technologies.length === 0 ? (
//         <p>No technologies found</p>
//       ) : (
//         technologies.map((technology) => (
//           <TechnologyCard
//             key={technology.id}
//             technology={technology}
//             handleAddToStack={handleAddToStack}
//             stack={stack}
//           />
//         ))
//       )}

//     </div>
//   )
// }

// export default Technologies