// import { Suspense } from "react";
// import Navber from './component/shared/Navber'
// import Banner from './component/shared/Banner'
// import Techs from './component/TechSection/Techs'
// const fetchtechs = async () => {
// 	const res = await fetch('/technologies.json')
// 	const data = await res.json()
// 	return data
// }

// const techPromise = fetchtechs()
// const App = () => {
//   return (
//     <div>
//    <Navber />
//    <Banner />
//     <main>
//         <section className="container mx-auto my-10">
//           <div className="grid grid-cols-4 gap-5">
//             <Suspense fallback={<div>loading...</div>}>
//               <Techs techPromise={techPromise} />
//             </Suspense>
//           </div>
//         </section>
//       </main>
//     </div>
//   );
// };

// export default App;
// import { Suspense } from "react";
// import Navber from "./component/shared/Navber";
// import Banner from "./component/shared/Banner";
// import Techs from "./component/TechSection/Techs";

// const fetchtechs = async () => {
//   const res = await fetch("/technologies.json");

//   const data = await res.json();

//   return data;
// };

// const techPromise = fetchtechs();

// const App = () => {
//   return (
//     <div className="bg-gray-50 min-h-screen">

//       {/* Navbar */}
//       <Navber />

//       {/* Banner */}
//       <Banner />

//       {/* Technologies */}
//       <main>
//         <section className="container mx-auto my-10 px-4">

//           <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">
//             Explore Technologies
//           </h2>

//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">

//             <Suspense fallback={<div>Loading...</div>}>

//               <Techs techPromise={techPromise} />

//             </Suspense>

//           </div>

//         </section>
//       </main>

//     </div>
//   );
// };

// export default App;

import { Suspense } from "react";
import Navber from "./component/shared/Navber";
import Banner from "./component/shared/Banner";
import Techs from "./component/TechSection/Techs";
import type { Technology } from "./component/types/technologyTypes";

const fetchtechs = async (): Promise<Technology[]> => {
  const res = await fetch("/technologies.json");

  if (!res.ok) {
    throw new Error("Failed to fetch technologies");
  }

  const data = await res.json();

  return data;
};

const techPromise = fetchtechs();

const App = () => {
  return (
    <div className="bg-gray-50 min-h-screen">

      <Navber />

      <Banner />

      <main>
        <section className="container mx-auto my-10 px-4">

          <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
            Explore Technologies
          </h2>

          <Suspense fallback={<div className="text-center">Loading...</div>}>
            <Techs techPromise={techPromise} />
          </Suspense>

        </section>
      </main>

    </div>
  );
};

export default App;