import "./App.css";
import HandleCounter from "./components/HandleCounter";

function App() {
  return (
    <>
      <div className="min-h-screen flex flex-col items-center justify-center">
        <h1>React-useEffect-CounterApp</h1>
        <HandleCounter />
      </div>
    </>
  );
}

export default App;
