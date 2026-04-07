import * as React from "react";

declare global {
  namespace JSX {
    interface IntrinsicElements {
      "el-dialog": React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
      "el-dialog-panel": React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
    }
  }
}
