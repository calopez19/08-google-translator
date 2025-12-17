import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { useStore } from "./hooks/useStore";


function App() {
  const {fromLenguage,setFromLenguage} = useStore()
  console.log(fromLenguage);
  return (
    
    <div>
      <h1>Google translator clone</h1>
      <button
        onClick={() => { setFromLenguage('es')
        }}
      >
        cambiar a Español
      </button>
    </div>
  );
}

export default App;
