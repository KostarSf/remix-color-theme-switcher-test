import { Form, useLocation } from "@remix-run/react";
import type { ReactNode } from "react";
import { useInversedColorScheme } from "../hooks/useInversedColorScheme";
import { COLOR_SCHEME_DEFAULT_ACTION } from "../server";

type ToggleColorSchemeFormProps = {
  children?: ReactNode;
  className?: string;
  action?: string;
};
export const ToggleColorSchemeForm = ({
  children,
  className,
  action,
}: ToggleColorSchemeFormProps) => {
  const { pathname } = useLocation();
  const inversedScheme = useInversedColorScheme();

  return (
    <Form
      method="POST"
      action={action || COLOR_SCHEME_DEFAULT_ACTION}
      preventScrollReset
      className={className}
    >
      <input type="hidden" name="returnTo" value={pathname} />
      <input type="hidden" name="colorScheme" value={inversedScheme} />
      {children}
    </Form>
  );
};
