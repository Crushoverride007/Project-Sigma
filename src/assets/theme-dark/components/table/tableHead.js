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
import borders from "assets/theme-dark/base/borders";

// Sigma React helper functions
import pxToRem from "assets/theme-dark/functions/pxToRem";

const { borderRadius } = borders;

const tableHead = {
  styleOverrides: {
    root: {
      display: "block",
      padding: `${pxToRem(16)} ${pxToRem(16)} 0  ${pxToRem(16)}`,
      borderRadius: `${borderRadius.xl} ${borderRadius.xl} 0 0`,
    },
  },
};

export default tableHead;
