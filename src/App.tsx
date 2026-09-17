
import Navber from './component/shared/Navber'
import Banner from './component/shared/Banner'

const fetchtechs = async () => {
	const res = await fetch('/public/technologies.json')
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
				<section className='container mx-auto my-10'>
					<div className='grid grid-cols-4 gap-5'>
					
						<Suspense fallback={<div>loading...</div>}>
							<Books
								handleSavedtech={handleSavedtech}
								techPromise={techPromise}
								saved={saved}
							/>
						</Suspense>

			
					</div>
				</section>
			</main>
    </div>
  );
};

export default App;