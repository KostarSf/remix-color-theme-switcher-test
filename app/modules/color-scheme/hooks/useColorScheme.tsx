import { useMatches, useNavigation } from "@remix-run/react";

import type { ColorScheme } from "../types";

export const useColorScheme = (): ColorScheme => {
  const fallback = "light";

  const rootLoaderData = useMatches()[0].data;
  const current = rootLoaderData?.colorScheme;

  const { formData } = useNavigation();
  const optimistic = formData?.get("colorScheme");

  return (optimistic || current || fallback) as ColorScheme;
};

export const useInversedColorScheme = (): ColorScheme => {
  return useColorScheme() === 'dark' ? 'light' : 'dark'
}
