import { Suspense } from "react";
import Navber from './component/shared/Navber'
import Banner from './component/shared/Banner'
import Techs from './component/TechSection/Techs'
const fetchtechs = async () => {
	const res = await fetch('/technologies.json')
	const data = await res.json()
	return data
}

const techPromise = fetchtechs()
const App = () => {
  return (
    <div>
   <Navber />
   <Banner />
    <main>
        <section className="container mx-auto my-10">
          <div className="grid grid-cols-4 gap-5">
            <Suspense fallback={<div>loading...</div>}>
              <Techs techPromise={techPromise} />
            </Suspense>
          </div>
        </section>
      </main>
    </div>
  );
};

export default App;