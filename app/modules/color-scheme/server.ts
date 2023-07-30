import type { ActionFunction } from "@remix-run/node";
import { createCookie, redirect } from "@remix-run/node";
import { safeRedirect } from "remix-utils";
import type { ColorScheme, CookieData } from "./types";

export const COLOR_SCHEME_DEFAULT_ACTION = "/api/color-scheme";

const cookie = createCookie("color-scheme", {
  maxAge: 34_560_000,
  sameSite: "lax",
});

export async function parseColorScheme(
  request: Request,
  defaultColorScheme: ColorScheme = "light",
): Promise<ColorScheme> {
  const headers = request.headers.get("Cookie");
  const cookieData = (await cookie.parse(headers)) as CookieData | undefined;
  return cookieData?.colorScheme || defaultColorScheme;
}

export const action: ActionFunction = async ({ request }) => {
  const formData = await request.formData();
  const { colorScheme, returnTo } = Object.fromEntries(formData);

  if (!validateColorScheme(colorScheme)) {
    throw new Response("Bad Request", { status: 400 });
  }

  return redirect(safeRedirect(returnTo, "/"), {
    headers: await setCookieHeaders(colorScheme),
  });
};

function validateColorScheme(colorScheme: unknown): colorScheme is ColorScheme {
  return colorScheme === "light" || colorScheme === "dark";
}

async function setCookieHeaders(colorScheme: ColorScheme) {
  const cookieData: CookieData = { colorScheme };
  return { "Set-Cookie": await cookie.serialize(cookieData) };
}
