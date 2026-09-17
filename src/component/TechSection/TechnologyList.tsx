import type { Technology } from "../types/technologyTypes";
import TechnologyCard from "./TechnologyCard";

interface TechnologyListProps {
  technologies: Technology[];
  stack: Technology[];
  onAddToStack: (technology: Technology) => void;
}

const TechnologyList = ({
  technologies,
  stack,
  onAddToStack,
}: TechnologyListProps) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
      {technologies.map((technology) => (
        <TechnologyCard
          key={technology.id}
          technology={technology}
          onAddToStack={onAddToStack}
          isAdded={stack.some((item) => item.id === technology.id)}
        />
      ))}
    </div>
  );
};

export default TechnologyList;