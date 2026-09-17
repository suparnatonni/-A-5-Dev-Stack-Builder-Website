import { use } from 'react'
import type { Technology } from '../../component/types/technologyTypes'

interface TechsProps {
  techPromise: Promise<Technology[]>;
}

const Techs = ({ techPromise }: TechsProps) => {
  const allTechs = use(techPromise);

  return (
    <div>
      {allTechs.map((technology) => (
        <div key={technology.id}>
          {technology.name}
        </div>
      ))}
    </div>
  );
};

export default Techs;