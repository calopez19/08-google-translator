import { useReducer } from "react";
import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';

const initialState = {
  fromLenguage: 'auto',
  toLenguage: 'en',
  fronText: '',
  result: '',
  loading: false
}

function reducer (state, action) {
  const {type, payload} = action

  if (type === 'INTERCHANGE_LENGUAGES') {
    return {
      ...state,
      fromLenguage: state.toLenguage,
      toLenguage: state.fromLenguage
    }  
  }

  if (type === 'SET_FROM_LENGUAGES') {
    return {
      ...state,
      fromLenguage: action.payload,
    }  
  }  
  if (type === 'SET_TO_LENGUAGES') {
    return {
      ...state,
      toLenguage: action.payload,
    }  
  }  

  return state
}
function App() {
  const [state, dispatch ] = useReducer(reducer, initialState)
  return (
    <div>
      <h1>Google translator clone</h1>
    </div>
  );
}

export default App;
