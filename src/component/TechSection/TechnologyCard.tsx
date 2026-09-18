import type { Technology } from "../types/technologyTypes";

interface TechnologyCardProps {
  technology: Technology;
  onAddToStack: (technology: Technology) => void;
  isAdded: boolean;
}

const TechnologyCard = ({
  technology,
  onAddToStack,
  isAdded,
}: TechnologyCardProps) => {
  return (
    <div className="bg-white border border-gray-200 rounded-2xl p-5 shadow-sm hover:shadow-lg transition">

     
      <div className="flex justify-between items-start mb-4">
        <img src={technology.icon}  alt={technology.name} className="w-14 h-14 object-contain"/>

        <span className="bg-purple-100 text-purple-700 px-3 py-1 rounded-full text-xs font-semibold">
          {technology.badge}
        </span>
      </div>

     
      <h3 className="text-xl font-bold text-gray-800 mb-2">
        {technology.name}
      </h3>
      <p className="text-sm text-gray-600 leading-6 mb-4">
        {technology.description}
      </p>
      <div className="flex flex-wrap gap-2 mb-4">
        <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-xs">
          {technology.category}
        </span>
        <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-xs">
          {technology.difficulty}
        </span>
      </div>
      <div className="flex items-center gap-2 mb-5">
        <span className="text-yellow-500 text-lg">
          ★
        </span>
        <span className="font-semibold text-gray-700">
          {technology.rating}
        </span>
      </div>

      
      <button
        onClick={() => onAddToStack(technology)}
        disabled={isAdded}
        className={`w-full py-2.5 rounded-full font-semibold transition ${
          isAdded
            ? "bg-gray-300 text-gray-600 cursor-not-allowed"
            : "bg-black text-white hover:bg-blue-700"
        }`}
      >
        {isAdded ? "✓ Added to Stack" : "Add to Stack"}
      </button>
    </div>
  );
};

export default TechnologyCard;