import Pic from "../../assets/banner-stack.png";

const Banner = () => {
  return (
    <section className="bg-white">
      <div className="max-w-6xl mx-auto px-6 py-14">
        <div className="grid md:grid-cols-2 items-center gap-10">

         
          <div>
            <h1 className="text-5xl md:text-6xl font-bold leading-tight">
              <span className="text-slate-900">
                Build Your Ideal
              </span>
              <br />

              <span className="bg-gradient-to-r from-orange-500 via-pink-500 to-purple-600 bg-clip-text text-transparent">
                Development Stack
              </span>
            </h1>

            <p className="mt-6 text-gray-600 text-lg leading-7 max-w-xl">
              Explore frontend, backend, database, and tooling options,
              compare them side by side, and put together the stack that
              fits your next project.
            </p>

            
            <div className="mt-10 flex gap-3">

              <a href="#technologies" className="px-4 py-3 rounded-lg text-white font-medium bg-gradient-to-r from-orange-500 to-pink-500   hover:opacity-90 transition"      >
                Explore Technologies
              </a>

              <a href="#stack" className="px-7 py-3 rounded-lg border border-gray-300 text-gray-700 hover:bg-gray-50 transition" >
                Learn More
              </a>

            </div>
          </div>

        
          <div className="flex justify-center">
             <img src={Pic} alt="" className="w-full max-w-md "/>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Banner;