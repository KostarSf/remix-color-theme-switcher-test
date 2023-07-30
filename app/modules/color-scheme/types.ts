export type ColorScheme = "light" | "dark";
export type CookieData = { colorScheme: ColorScheme };

export type ToggleColorSchemeFormProps = {
  children?: React.ReactNode;
  className?: string;
  action?: string;
};
