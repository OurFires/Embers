import * as React from "react";
import type { Props } from "./index.d";

export type BuildIcon = (
    def: JSX.Element,
    viewBox: string,
    displayName: string,
) => React.ComponentType<Props>;

export default BuildICon;
