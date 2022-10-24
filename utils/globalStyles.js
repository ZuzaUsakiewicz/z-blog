import { globalCss } from "@nextui-org/react";

export const globalStyles = globalCss({
  html: {
    margin: 0,
    padding: 0,
  },
  body: { boxSizing: "border-box", minHeight: "100vh" },
  ".container": {
    textAlign: "justify",
  },
  ".container > p": {
    fontSize: "12px",
  },
  "@md": {
    ".container > p": {
      fontSize: "18px",
    },
  },
});
