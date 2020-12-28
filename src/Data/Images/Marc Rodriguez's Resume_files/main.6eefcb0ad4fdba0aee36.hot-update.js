webpackHotUpdate("main",{

/***/ "./src/Data/Images/Galvanize Logo.jpg":
/*!********************************************!*\
  !*** ./src/Data/Images/Galvanize Logo.jpg ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/Galvanize Logo.e8acad94.jpg";

/***/ }),

/***/ "./src/Data/Images/U.S. Army Logo.png":
/*!********************************************!*\
  !*** ./src/Data/Images/U.S. Army Logo.png ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/U.S. Army Logo.92f21173.png";

/***/ }),

/***/ "./src/components/Experience/Experience.jsx":
/*!**************************************************!*\
  !*** ./src/components/Experience/Experience.jsx ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_waypoint__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-waypoint */ "./node_modules/react-waypoint/es/index.js");
/* harmony import */ var react_spring__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-spring */ "./node_modules/react-spring/web.js");
/* harmony import */ var _Data_Images_Galvanize_Logo_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../Data/Images/Galvanize Logo.jpg */ "./src/Data/Images/Galvanize Logo.jpg");
/* harmony import */ var _Data_Images_Galvanize_Logo_jpg__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_Data_Images_Galvanize_Logo_jpg__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _Data_Images_U_S_Army_Logo_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../../Data/Images/U.S. Army Logo.png */ "./src/Data/Images/U.S. Army Logo.png");
/* harmony import */ var _Data_Images_U_S_Army_Logo_png__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_Data_Images_U_S_Army_Logo_png__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _Technical_Skills_Technical_Skills_jsx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../Technical_Skills/Technical_Skills.jsx */ "./src/components/Technical_Skills/Technical_Skills.jsx");
/* harmony import */ var react_bootstrap_Image__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-bootstrap/Image */ "./node_modules/react-bootstrap/esm/Image.js");
var _jsxFileName = "/Users/MarcAnthony/Documents/Personal Projects/my_portfolio_website/src/components/Experience/Experience.jsx";







const Parent_Container = {
  borderStyle: "solid",
  height: "auto",
  width: "350px",
  padding: "10px",
  margin: "10px",
  backgroundColor: "lightgrey",
  borderRadius: "0.9%",
  overflow: "auto"
};
const Photo_Style = {
  height: "13vh",
  width: "auto",
  borderRadius: "10%"
};

function Experience(props) {
  const [isVisible, setVisibility] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const fadeAnimation = Object(react_spring__WEBPACK_IMPORTED_MODULE_2__["useSpring"])({
    opacity: isVisible ? 1 : 0
  });
  const {
    x
  } = Object(react_spring__WEBPACK_IMPORTED_MODULE_2__["useSpring"])({
    x: isVisible ? 0 : 100,
    borderRadius: "0.9%",
    borderStyle: "solid",
    backgroundColor: "lightgrey"
  });
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "Experience",
    style: {
      backgroundColor: "white",
      height: "923px",
      textAlign: "center",
      border: "65px inset darkred",
      overflow: "auto"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 5
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 7
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_waypoint__WEBPACK_IMPORTED_MODULE_1__["Waypoint"], {
    scrollableAncestor: window,
    onEnter: () => {
      setVisibility(true);
      console.log(4);
    },
    onLeave: () => {
      setVisibility(false);
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 9
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_spring__WEBPACK_IMPORTED_MODULE_2__["animated"].h1, {
    style: fadeAnimation,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 9
    }
  }, "Work Experience")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "center" // alignItems: "center",

    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 7
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_spring__WEBPACK_IMPORTED_MODULE_2__["animated"].div, {
    className: "ParentContainer",
    style: {
      transform: x.interpolate(x => `translate3d(${x * -11}%,0,0`, `borderRadius: "0.9%"`, `borderStyle: "solid"`)
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73,
      columnNumber: 9
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "ChildContainer",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80,
      columnNumber: 11
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap_Image__WEBPACK_IMPORTED_MODULE_6__["default"], {
    src: _Data_Images_Galvanize_Logo_jpg__WEBPACK_IMPORTED_MODULE_3___default.a,
    alt: "Galvanize Logo",
    style: Photo_Style,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81,
      columnNumber: 13
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86,
      columnNumber: 13
    }
  }, "Galvanize Inc"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p3", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87,
      columnNumber: 13
    }
  }, "5 Months")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "ChildContainer",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89,
      columnNumber: 11
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90,
      columnNumber: 13
    }
  }, "Software Engineering Specialist"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p3", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91,
      columnNumber: 13
    }
  }, "Full-Time "), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p3", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92,
      columnNumber: 13
    }
  }, "Sep 2020 \u2013 Present Employment Duration", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94,
      columnNumber: 15
    }
  }), "3 Months Location Austin, Texas, United States"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "ChildContainer",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96,
      columnNumber: 13
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97,
      columnNumber: 15
    }
  }, "Software Engineer"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p3", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98,
      columnNumber: 15
    }
  }, "Internship"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p3", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99,
      columnNumber: 15
    }
  }, "Aug 2020 \u2013 Sep 2020 Employment Duration", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101,
      columnNumber: 17
    }
  }), "2 Months Location Austin, Texas, United States")))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "ParentContainer",
    style: Parent_Container,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 106,
      columnNumber: 9
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "ChildContainer",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 107,
      columnNumber: 11
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap_Image__WEBPACK_IMPORTED_MODULE_6__["default"], {
    src: _Data_Images_U_S_Army_Logo_png__WEBPACK_IMPORTED_MODULE_4___default.a,
    alt: "Army Logo",
    style: Photo_Style,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 108,
      columnNumber: 13
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 109,
      columnNumber: 13
    }
  }, "US Army"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p3", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 110,
      columnNumber: 13
    }
  }, " 5 Years 8 Months")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "ChildContainer",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 112,
      columnNumber: 11
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 113,
      columnNumber: 13
    }
  }, "All-Source Analyst"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p3", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 114,
      columnNumber: 13
    }
  }, "Full-time"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p3", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 115,
      columnNumber: 13
    }
  }, "Prepared All-Source Intelligence products to support combat commanders. ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 117,
      columnNumber: 27
    }
  }), "Assessed the significance and reliability of incoming information with current intelligence.", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 119,
      columnNumber: 41
    }
  }), " Established and maintained systematic cross-reference intelligence records and files."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "ChildContainer",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 122,
      columnNumber: 13
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 123,
      columnNumber: 15
    }
  }, "Full Motion Video (FMV) Intelligence Analyst"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p3", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 124,
      columnNumber: 15
    }
  }, "Full-Time"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p3", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 125,
      columnNumber: 15
    }
  }, "Produced detailed analytical products to build Patterns of Life (PoL) and target descriptions.", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 128,
      columnNumber: 17
    }
  }), "Conducted order of battle analysis, Activity-Based Intelligence (ABI), Battle Damage Assessment (BDA), Storyboards, Vehicle Follows, and 360-degree graphics."))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Technical_Skills_Technical_Skills_jsx__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 136,
      columnNumber: 7
    }
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (Experience);

/***/ }),

/***/ "./src/components/Technical_Skills/Technical_Skills.jsx":
/*!**************************************************************!*\
  !*** ./src/components/Technical_Skills/Technical_Skills.jsx ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_waypoint__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-waypoint */ "./node_modules/react-waypoint/es/index.js");
/* harmony import */ var react_spring__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-spring */ "./node_modules/react-spring/web.js");
var _jsxFileName = "/Users/MarcAnthony/Documents/Personal Projects/my_portfolio_website/src/components/Technical_Skills/Technical_Skills.jsx";



const Inline = {
  display: "inline"
};

function TechnicalSkills(props) {
  const [isVisible, setVisibility] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const fadeAnimation = Object(react_spring__WEBPACK_IMPORTED_MODULE_2__["useSpring"])({
    opacity: isVisible ? 1 : 0
  });
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "TechnicalSkills",
    style: {
      backgroundColor: "white"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 5
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_waypoint__WEBPACK_IMPORTED_MODULE_1__["Waypoint"], {
    scrollableAncestor: window,
    onEnter: () => {
      setVisibility(true);
      console.log("Technical Skills");
    },
    onLeave: () => {
      setVisibility(false);
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 10
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_spring__WEBPACK_IMPORTED_MODULE_2__["animated"].h1, {
    style: fadeAnimation,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 7
    }
  }, "Technical Skills"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_spring__WEBPACK_IMPORTED_MODULE_2__["animated"].section, {
    style: fadeAnimation,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 7
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    style: {
      textAlign: "center"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 9
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", {
    style: Inline,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 11
    }
  }, "Front End "), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p1", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 11
    }
  }, "\u200B: JavaScript, HTML5, CSS3, React, Axios, Bootstrap"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 11
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", {
    style: Inline,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 11
    }
  }, "Back End "), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p1", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 11
    }
  }, ": Node.js, Express, MySQL, S3, D3, Graphql, Apollo-Server, PHP "), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 11
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", {
    style: Inline,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 11
    }
  }, "Developer Tools "), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p1", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 11
    }
  }, ":\u200B React Debugger, Git, npm, Webpack, Babel "))));
}

/* harmony default export */ __webpack_exports__["default"] = (TechnicalSkills);

/***/ })

})
//# sourceMappingURL=main.6eefcb0ad4fdba0aee36.hot-update.js.map