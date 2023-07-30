import type { V2_MetaFunction } from "@remix-run/node";
import clsx from "clsx";
import {
  ToggleColorSchemeForm,
  useInversedColorScheme,
} from "~/modules/color-scheme";

export const meta: V2_MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  const inversedScheme = useInversedColorScheme();

  return (
    <div className="h-screen bg-white px-12 py-4 dark:bg-slate-900">
      <h1 className="text-4xl font-bold text-slate-600 dark:text-slate-300">
        <span className="text-pink-400">Color Theme</span> Switcher
      </h1>
      <p className="text-xl dark:text-slate-100">Based on cookies</p>

      <ToggleColorSchemeForm className="mt-12">
        <button
          type="submit"
          className={clsx(
            "rounded-lg px-8 py-4 font-bold uppercase transition-colors",
            "bg-slate-800 text-slate-100 hover:bg-pink-400 hover:text-white",
            "dark:bg-slate-100 dark:text-slate-800 dark:hover:bg-pink-400 dark:hover:text-white",
          )}
        >
          {`Switch to ${inversedScheme}`}
        </button>
      </ToggleColorSchemeForm>
    </div>
  );
}
