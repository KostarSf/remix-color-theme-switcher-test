import type { ColorScheme } from "../types";
import { useColorScheme } from "./useColorScheme";

export const useInversedColorScheme = (): ColorScheme => {
  return useColorScheme() === "dark" ? "light" : "dark";
};
