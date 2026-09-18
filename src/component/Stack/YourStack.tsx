import type { Technology } from "../types/technologyTypes";

interface YourStackProps {
  stack: Technology[];
  onRemove: (id: string) => void;
  onRemoveAll: () => void;
}

const YourStack = ({
  stack,
  onRemove,
  onRemoveAll,
}: YourStackProps) => {
  return (
    <aside className="bg-white border border-gray-200 rounded-2xl p-5 h-fit sticky top-5">

    
      <div className="mb-5">
        <h2 className="text-xl font-bold text-gray-800">
          Your Stack
        </h2>

        <p className="text-sm text-gray-500">
          {stack.length} Technologies Selected
        </p>
      </div>

   
      {stack.length === 0 ? (
        <div className="text-center py-10">
          <p className="text-gray-500 text-sm">
            Your stack is empty.
          </p>

          <p className="text-gray-400 text-xs mt-2">
            Add technologies to build your stack.
          </p>
        </div>
      ) : (
        <>
          
          <div className="space-y-3">
            {stack.map((technology) => (
              <div key={technology.id} className="border border-gray-200 rounded-xl p-3 flex items-center gap-3" >
                <img src={technology.icon}  alt={technology.name}  className="w-10 h-10 object-contain"/>

                <div className="flex-1">
                  <h3 className="font-semibold text-gray-800 text-sm">
                    {technology.name}
                  </h3>

                  <p className="text-xs text-gray-500">
                    {technology.category}
                  </p>
                </div>

                <button  onClick={() => onRemove(technology.id)}  className="text-red-500 hover:text-red-700 font-bold text-lg">
                  ✕
                </button>
              </div>
            ))}
          </div>

          
          <button onClick={onRemoveAll} className="w-full mt-5 border border-red-300 text-red-500 hover:bg-red-50 py-2 rounded-full font-semibold">
            Remove All
          </button>
        </>
      )}
    </aside>
  );
};

export default YourStack;