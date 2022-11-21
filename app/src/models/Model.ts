import { Comparable } from "../utils/comparable.js";
import { Printable } from "../utils/printable.js";

export interface Model<T> extends Printable, Comparable<T> {}
