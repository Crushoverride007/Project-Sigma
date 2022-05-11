/**
=========================================================
* Sigma React - v2.1.0
=========================================================

* Product Page: https://www.github.com/crushoverride007/product/material-dashboard-react
* Copyright 2022 Matrix-Nexus (https://www.github.com/crushoverride007)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// Sigma React base styles
import boxShadows from "assets/theme-dark/base/boxShadows";
import typography from "assets/theme-dark/base/typography";
import colors from "assets/theme-dark/base/colors";
import borders from "assets/theme-dark/base/borders";

// Sigma React helper functions
import pxToRem from "assets/theme-dark/functions/pxToRem";

const { md } = boxShadows;
const { size } = typography;
const { text, background } = colors;
const { borderRadius } = borders;

const menu = {
  defaultProps: {
    disableAutoFocusItem: true,
  },

  styleOverrides: {
    paper: {
      minWidth: pxToRem(160),
      boxShadow: md,
      padding: `${pxToRem(16)} ${pxToRem(8)}`,
      fontSize: size.sm,
      color: text.main,
      textAlign: "left",
      backgroundColor: `${background.card} !important`,
      borderRadius: borderRadius.md,
    },
  },
};

export default menu;
