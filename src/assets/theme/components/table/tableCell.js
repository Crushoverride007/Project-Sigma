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
import borders from "assets/theme/base/borders";
import colors from "assets/theme/base/colors";

// Sigma React helper functions
import pxToRem from "assets/theme/functions/pxToRem";

const { borderWidth } = borders;
const { light } = colors;

const tableCell = {
  styleOverrides: {
    root: {
      padding: `${pxToRem(12)} ${pxToRem(16)}`,
      borderBottom: `${borderWidth[1]} solid ${light.main}`,
    },
  },
};

export default tableCell;
