import * as React from "react";
import * as Common from "../../common/common";

declare module "@embers/components/TextArea";

export interface Props extends Common.UIComponentProps {
  /**
   * Title of the button
   */
  title?: string;

  /**
   * Variant of the button
   */
  variant?: "primary" | "secondary" | "outline" | "text-only";

  /**
   * Set a left icon for the button
   */
  icon?: Common.EmberIcon;

  /**
   * Set a right icon for the button
   */
  iconRight?: Common.EmberIcon;

  /**
   * Optional click handler
   */
  onClick?: () => boolean | void;

  /**
   * Is the button disabled?
   */
  disabled?: boolean;

  /**
   * Is a full width (100%) button?
   */
  fullWidth?: boolean;
}

declare const TextArea: React.FC<Props>;
export { TextArea, TextArea as default };
