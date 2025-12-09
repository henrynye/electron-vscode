declare global {
  declare module "*.svg" {
    import React from "react";
    import { SvgProps } from "react";
    export const ReactComponent: React.FunctionComponent<
      SVGProps<SVGSVGElement>
    >;
  }
}
