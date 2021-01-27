import { transform } from "@babel/core";
import babelPresetReact from "@babel/preset-react";
import _ from "lodash";
import render from "./lib/render";
import sandboxer from "./lib/sandboxer";

export default ({ children, imports }) => {
  const { code } = transform(children, {
    filename: "ignore",
    presets: [babelPresetReact],
    plugins: [sandboxer],
  });

  const importsWithRender = { ...imports, render };

  return new Function(..._.keys(importsWithRender), code)(
    ..._.values(importsWithRender)
  );
};
