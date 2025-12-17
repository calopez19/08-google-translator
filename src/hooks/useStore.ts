import { useReducer } from "react";
import type { Action, State } from "../assets/types";

const initialState: State = {
  fromLenguage: "auto",
  toLenguage: "en",
  fromText: "",
  result: "",
  loading: false,
};

function reducer(state: State, action: Action) {
  const { type } = action;

  if (type === "INTERCHANGE_LENGUAGES") {
    return {
      ...state,
      fromLenguage: state.toLenguage,
      toLenguage: state.fromLenguage,
    };
  }

  if (type === "SET_FROM_LENGUAGE") {
    return {
      ...state,
      fromLenguage: action.payload,
    };
  }
  if (type === "SET_TO_LENGUAGE") {
    return {
      ...state,
      toLenguage: action.payload,
    };
  }
  if (type === "SET_FROM_TEXT") {
    return {
      ...state,
      loading: true,
      fromText: action.payload,
      result: "",
    };
  }

  if (type === "SET_RESULT") {
    return { ...state, loading: false, result: action.payload };
  }
  return state;
}

export function useStore() {
  const [{ fromLenguage, toLenguage, fromText, result, loading }, dispatch] =
    useReducer(reducer, initialState);
  const interchangeLenguage = () => {
    dispatch({ type: "INTERCHANGE_LENGUAGES" });
  };
  const setFromLenguage = (payload: string) => {
    dispatch({ type: "SET_FROM_LENGUAGE", payload: payload });
  };
  const setToLenguage = (payload: string) => {
    dispatch({ type: "SET_TO_LENGUAGE", payload: payload });
  };
  const setFromText = (payload: string) => {
    dispatch({ type: "SET_FROM_TEXT", payload: payload });
  };
  const setResult = (payload: string) => {
    dispatch({ type: "SET_RESULT", payload: payload });
  };
  return {
    fromLenguage,
    toLenguage,
    fromText,
    result,
    loading,
    interchangeLenguage,
    setFromLenguage,
    setToLenguage,
    setFromText,
    setResult,
  };
}
