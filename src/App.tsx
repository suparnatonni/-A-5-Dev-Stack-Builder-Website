import { useEffect, useState } from "react";
import Navber from "./component/shared/Navber";
import Banner from "./component/shared/Banner";
import Techs from "./component/TechSection/Techs";
import type { Technology } from "./component/types/technologyTypes";
import Footer from "./component/shared/Footer";

const App = () => {
  const [technologies, setTechnologies] = useState<Technology[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const loadData = async () => {
      try {
        const response = await fetch("/technologies.json");

        if (!response.ok) {
          throw new Error("Failed to fetch technologies");
        }

        const data: Technology[] = await response.json();

        setTechnologies(data);
      } catch (error) {
        setError("Failed to load technologies.");
      } finally {
        setLoading(false);
      }
    };

    loadData();
  }, []);

  return (
    <div className="bg-gray-50 min-h-screen">

      <Navber />

      <Banner />

      <main>
        <section className="container mx-auto my-10 px-4">
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-gray-900">
              Explore the{" "}
              <span className="text-pink-500">
                Technologies
              </span>
            </h1>

            <p className="text-sm text-gray-500 mt-2">
              Pick one technology category to build your ideal stack.
            </p>
          </div>

    
          {loading && (
            <div className="text-center py-10">
              <p className="text-gray-600 text-lg">
                Loading technologies...
              </p>
            </div>
          )}

         
          {!loading && error && (
            <div className="text-center py-10">
              <p className="text-red-500">
                {error}
              </p>
            </div>
          )}

         
          {!loading && !error && (
            <Techs technologies={technologies} />
          )}

        </section>
      </main>
     <Footer />
    </div>
  );
};

export default App;