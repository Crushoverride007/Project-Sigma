/**
=========================================================
* Sigma React - v2.1.0
=========================================================

* Product Page: https://www.github.com/crushoverride007/product/material-dashboard-react
* Copyright 2022 Matrix-Nexus (https://www.github.com/crushoverride007)



 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// Sigma React base styles
import colors from "assets/theme-dark/base/colors";
import borders from "assets/theme-dark/base/borders";

// Sigma React helper functions
import pxToRem from "assets/theme-dark/functions/pxToRem";

const { background } = colors;
const { borderRadius } = borders;

const sidenav = {
  styleOverrides: {
    root: {
      width: pxToRem(250),
      whiteSpace: "nowrap",
      border: "none",
    },

    paper: {
      width: pxToRem(250),
      backgroundColor: background.sidenav,
      height: `calc(100vh - ${pxToRem(32)})`,
      margin: pxToRem(16),
      borderRadius: borderRadius.xl,
      border: "none",
    },

    paperAnchorDockedLeft: {
      borderRight: "none",
    },
  },
};

export default sidenav;
