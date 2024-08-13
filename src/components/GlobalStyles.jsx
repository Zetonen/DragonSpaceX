import { createGlobalStyle } from "styled-components";
import "modern-normalize";
import "reset-css";
import { colors } from "../constants/colors";

export const GlobalStyles = createGlobalStyle`
body {  
  color: ${colors.WHITE};
  font-family: "Rubik";
  font-size: 14px;
  font-weight: 400;
  background: ${colors.BLACK};
}
ul,
ol {
  list-style: none;
  margin: 0;
  padding: 0;
}
img {
  display: block;
  max-width: 100%;
  height: auto;
}
button, a {
font-family: inherit;
font-size: inherit;
color: inherit;
}
a {
    text-decoration: none;
}`;
