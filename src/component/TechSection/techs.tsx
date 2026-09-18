import { useState } from "react";
import { toast } from "react-toastify";
import type { Technology } from "../types/technologyTypes";
import TechnologyList from "./TechnologyList";
import YourStack from "../Stack/YourStack";

interface TechsProps {
  technologies: Technology[];
}

const Techs = ({ technologies }: TechsProps) => {
  const [stack, setStack] = useState<Technology[]>([]);

  const handleAddToStack = (technology: Technology) => {
    const alreadyAdded = stack.some(
      (item) => item.id === technology.id
    );

    if (alreadyAdded) {
      toast.warning("Already added!");
      return;
    }

    setStack((previousStack) => [
      ...previousStack,
      technology,
    ]);

    toast.success("Technology added!");
  };


  const handleRemove = (id: string) => {
    setStack((previousStack) =>
      previousStack.filter(
        (item) => item.id !== id
      )
    );

    toast.info("Technology removed!");
  };

  const handleRemoveAll = () => {
    setStack([]);

    toast.error("All technologies removed!");
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
      <div className="lg:col-span-3">
        <TechnologyList
          technologies={technologies}
          stack={stack}
          onAddToStack={handleAddToStack}
        />
      </div>
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