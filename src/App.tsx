import toast from "react-hot-toast";

const App = () => {
  return (
    <div>
         <button onClick={() => toast.success("Successfully toasted!")}>
        Click Me
      </button>

      <h2 className="bg-amber-600">hello</h2>
    </div>
  );
};

export default App;