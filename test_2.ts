#!/usr/bin/env npx tsc --noEmit --skipLibCheck --diagnostics test_2.ts

import * as CSS from "csstype";
import * as React from "react";

declare const isSelected: boolean;
declare const css_style: CSS.Properties;
declare const react_style: React.CSSProperties;

// The following expression generates 2.7k extra types, one of the following two is enough
const a = {
  borderRadius: "200px",
  padding: "3px",
  minWidth: 0,
  background: isSelected ? "blue" : "#E5E5E5",
  color: isSelected ? "white" : "black",
  ...css_style,
} satisfies CSS.Properties;
const b = {
  paddingTop: "3px",
  pageBreakInside: "avoid",
  ...css_style,
} satisfies CSS.Properties;

// // This expression is fine!
// const acceptStyles = (styles: CSS.Properties): CSS.Properties => styles;
// acceptStyles({
//   borderRadius: "200px",
//   padding: "3px",
//   minWidth: 0,
//   background: isSelected ? "blue" : "#E5E5E5",
//   color: isSelected ? "white" : "black",
//   ...css_style,
// });

// // This expression is slow again even though it's very similar!
// const acceptStyles = (styles: React.CSSProperties): React.CSSProperties =>
//   styles;
// acceptStyles({
//   borderRadius: "200px",
//   padding: "3px",
//   minWidth: 0,
//   background: isSelected ? "blue" : "#E5E5E5",
//   color: isSelected ? "white" : "black",
//   ...react_style,
// });

// // This expression is slow again even though it's very similar!
// const mergeStyles = <T extends React.CSSProperties>(styles: T) => ({
//   borderRadius: "200px",
//   padding: "3px",
//   minWidth: 0,
//   background: isSelected ? "blue" : "#E5E5E5",
//   color: isSelected ? "white" : "black",
//   ...styles,
// });

// const acceptStyles = (styles: React.CSSProperties): React.CSSProperties =>
//   styles;
// acceptStyles(mergeStyles(react_style));

// // This assignment check is also slow
// declare const style_1: {
//   borderRadius: string;
//   padding: string;
//   minWidth: number;
//   background: string;
//   color: string;
// } & React.CSSProperties;
// const style_2: React.CSSProperties = style_1;

// // This assignment check is surprisingly fast
// declare const style_1: {
//   borderRadius: string;
//   padding: string;
//   minWidth: number;
//   background: string;
//   color: string;
// } & CSS.Properties;
// const style_2: CSS.Properties = style_1;

// // This assignment check is also slow but still faster than the original react one
// type Clean<T> = { [K in keyof T]: T[K] } & {};
// type CleanReactCSSProps = Clean<React.CSSProperties>;
// declare const style_1: {
//   borderRadius: string;
//   padding: string;
//   minWidth: number;
//   background: string;
//   color: string;
// } & CleanReactCSSProps;
// const style_2: CleanReactCSSProps = style_1;
