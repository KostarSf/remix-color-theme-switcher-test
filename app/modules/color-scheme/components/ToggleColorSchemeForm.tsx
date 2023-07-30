import { Form, useLocation } from "@remix-run/react";

import { useInversedColorScheme } from "../hooks/useColorScheme";
import type { ToggleColorSchemeFormProps } from "../types";

/** Make POST on /api/color-scheme by default */
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
      action={action || '/api/color-scheme'}
      preventScrollReset
      className={className}
    >
      <input type="hidden" name="returnTo" value={pathname} />
      <input type="hidden" name="colorScheme" value={inversedScheme} />
      {children}
    </Form>
  );
};
