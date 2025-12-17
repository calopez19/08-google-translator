import type { AUTO_LENGUAGE, SOPORTED_LENGUAGES } from "../constants";

export type Lenguages = keyof typeof SOPORTED_LENGUAGES
export type AutoLenguage = typeof AUTO_LENGUAGE
export type FromLenguage = Lenguages | AutoLenguage 
export interface State {
  fromLenguage: string;
  toLenguage: string;
  fromText: string;
  result: string;
  loading: boolean;
}

export type Action =
  | { type: "SET_FROM_LENGUAGE"; payload: string }
  | { type: 'INTERCHANGE_LENGUAGES' }
  | { type: "SET_TO_LENGUAGE"; payload: string }
  | { type: "SET_FROM_TEXT"; payload: string }
  | { type: "SET_RESULT"; payload: string };
