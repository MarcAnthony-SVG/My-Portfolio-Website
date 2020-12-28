(this["webpackJsonpmy_portfolio_website"] = this["webpackJsonpmy_portfolio_website"] || []).push([["main"],{

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/components/Profile/Profile.css":
/*!***********************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!./node_modules/postcss-loader/src??postcss!./src/components/Profile/Profile.css ***!
  \***********************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "#About_Me {\n  order: 2;\n  text-align: justify;\n  margin-left: 1.4%;\n  width: 80vw;\n\n}\n\n#Details {\n  order: 4;\n  width: 80vw;\n}\n#ProfilePic {\n  order: 3;\n  /* position: absolute; */\n  /* left:50%; */\n  margin-top: 1%;\n  margin-left: 5vw;\n  margin-right: 5vw;\n}\n#Title {\n  textalign: \"center\";\n}\n\n.Information_Box {\n  margin: 1%;\n  background-color: darkgrey;\n  border-radius: 4%;\n  border: 3px solid black;\n  width: 25vw;\n  height: 44vh;\n  overflow: auto;\n  -webkit-border-radius: 4%;\n  -moz-border-radius: 4%;\n  -ms-border-radius: 4%;\n  -o-border-radius: 4%;\n}\n", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/index.css":
/*!**************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!./node_modules/postcss-loader/src??postcss!./src/index.css ***!
  \**************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "body {\n  margin: 0;\n  font-family: Arial, Helvetica, sans-serif;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\n\ncode {\n  font-family: -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, Oxygen,\n    Ubuntu, Cantarell, \"Open Sans\", \"Helvetica Neue\", sans-serif;\n}\n.nav {\n  position: fixed;\n  right: 10px;\n  top: 46%;\n  background-color: #708090;\n  width: 120px;\n  height: 125px;\n  border: 2px solid silver;\n  text-align: center;\n  border-radius: 10%;\n}\n.ParentContainer {\n  border-style: \"solid\";\n  height: \"auto\";\n  width: \"350px\";\n  padding: \"10px\";\n  margin: \"10px\";\n  background-color: \"lightgrey\";\n  border-radius: \"0.9%\";\n  overflow: \"auto\";\n}\n", ""]);
// Exports
module.exports = exports;


/***/ }),

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

/***/ "./src/Data/Projects.js":
/*!******************************!*\
  !*** ./src/Data/Projects.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// const placeholder = require("../components/OldProjects/images/placeholder.png");
const RealEstate = __webpack_require__(/*! ../components/Projects/Images/RealEstateApp.png */ "./src/components/Projects/Images/RealEstateApp.png");

const MentorMii = __webpack_require__(/*! ../components/Projects/Images/MentorMii.png */ "./src/components/Projects/Images/MentorMii.png");

var Projects = [{
  id: 1,
  image: RealEstate,
  title: `Real Estate Website`,
  text: `A website I created to use libraries, frameworks, and APIs
that I hadn’t used before, to challenge myself as a developer
and improve upon my skills.`
}, {
  id: 2,
  image: MentorMii,
  title: `MentorMii`,
  text: `A full-stack web application that connects those seeking
        mentorship with a variety of skills with mentors that can
        teach them those skills. Served as the Project Manager for a
        team of six developers, managed tickets with Trello,
        facilitated workflow, and tracked performance and progress,
        ensuring completion of the application.`
}, {
  id: 3,
  image: "image",
  title: `RottenHuevos`,
  text: `A full-stack e-commerce application and alternative to Newegg.
        I served as a software developer focusing on the front-end.`
}];
module.exports = Projects;

/***/ }),

/***/ "./src/Homepage.js":
/*!*************************!*\
  !*** ./src/Homepage.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_spring__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-spring */ "./node_modules/react-spring/web.js");
/* harmony import */ var _components_Title_Title_jsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/Title/Title.jsx */ "./src/components/Title/Title.jsx");
/* harmony import */ var _components_Profile_Profile_jsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/Profile/Profile.jsx */ "./src/components/Profile/Profile.jsx");
/* harmony import */ var _components_Experience_Experience_jsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/Experience/Experience.jsx */ "./src/components/Experience/Experience.jsx");
/* harmony import */ var _components_Contact_Contact_jsx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/Contact/Contact.jsx */ "./src/components/Contact/Contact.jsx");
/* harmony import */ var _components_Projects_ProjectsContainer_jsx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/Projects/ProjectsContainer.jsx */ "./src/components/Projects/ProjectsContainer.jsx");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _components_NavigationBar_NavBar_jsx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/NavigationBar/NavBar.jsx */ "./src/components/NavigationBar/NavBar.jsx");
var _jsxFileName = "/Users/MarcAnthony/Documents/Personal Projects/my_portfolio_website/src/Homepage.js";

 // import { Jumbotron, Button } from "react-bootstrap";

 // import ReactSpringTest from "./components/reactspring";


 // import Projects from "./components/OldProjects/OldProjects.jsx";




 // import * as Scroll from "react-scroll";
// import {
//   Link,
//   Element,
//   Events,
//   animateScroll as scroll,
//   scrollSpy,
//   scroller,
// } from "react-scroll";
// import "./Homepage.css";

const Homepage = () => {
  const [isNavOpen, setNavOpen] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const navAnimation = Object(react_spring__WEBPACK_IMPORTED_MODULE_1__["useSpring"])({
    transform: isNavOpen ? `translate3d(0,0,0)` : `translate3d(100%,0,0)`
  });
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "App",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 5
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_spring__WEBPACK_IMPORTED_MODULE_1__["animated"].div, {
    onMouseEnter: () => {
      setNavOpen(true);
    },
    onMouseLeave: () => setNavOpen(false),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 7
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_NavigationBar_NavBar_jsx__WEBPACK_IMPORTED_MODULE_8__["default"], {
    style: navAnimation,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 9
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Title_Title_jsx__WEBPACK_IMPORTED_MODULE_2__["default"], {
    title: "Title",
    dark: true,
    id: "Title",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 7
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Profile_Profile_jsx__WEBPACK_IMPORTED_MODULE_3__["default"], {
    title: "Profile",
    dark: false,
    id: "Profile",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 7
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Experience_Experience_jsx__WEBPACK_IMPORTED_MODULE_4__["default"], {
    title: "Experience",
    dark: false,
    id: "Experience",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 7
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Projects_ProjectsContainer_jsx__WEBPACK_IMPORTED_MODULE_6__["default"], {
    title: "Projects",
    dark: false,
    id: "Projects",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 7
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Contact_Contact_jsx__WEBPACK_IMPORTED_MODULE_5__["default"], {
    title: "Contact",
    dark: true,
    id: "Contact",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 7
    }
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Homepage);

/***/ }),

/***/ "./src/Utilities/ItemTypes.js":
/*!************************************!*\
  !*** ./src/Utilities/ItemTypes.js ***!
  \************************************/
/*! exports provided: ItemTypes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ItemTypes", function() { return ItemTypes; });
const ItemTypes = {
  CARD: 'card'
};

/***/ }),

/***/ "./src/components/Contact/Contact.jsx":
/*!********************************************!*\
  !*** ./src/components/Contact/Contact.jsx ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_icons_ai__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-icons/ai */ "./node_modules/react-icons/ai/index.esm.js");
/* harmony import */ var react_scroll__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-scroll */ "./node_modules/react-scroll/modules/index.js");
/* harmony import */ var react_scroll__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_scroll__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "/Users/MarcAnthony/Documents/Personal Projects/my_portfolio_website/src/components/Contact/Contact.jsx";



var linkStyle = {
  margin: 2,
  width: "auto",
  border: "2px solid silver",
  flex: "auto",
  textAlign: "center",
  overflow: "auto"
};

function ContactInfo(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "Contact",
    style: {
      backgroundColor: "#cfe2e2",
      height: "auto",
      width: "auto"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 5
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
    style: {
      marginBlockStart: "0.1em"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 7
    }
  }, "Contact"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p1", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 7
    }
  }, "\u201CIf I had asked people what they wanted, they would have said faster horses. \u201D - Henry Ford"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "LinksContainer",
    style: {
      display: "flex",
      height: "auto"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 7
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    style: linkStyle,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 9
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_icons_ai__WEBPACK_IMPORTED_MODULE_1__["AiFillLinkedin"], {
    size: "2em",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 11
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "https://www.linkedin.com/in/marcrodriguez2020/",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 11
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    style: linkStyle,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 9
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_icons_ai__WEBPACK_IMPORTED_MODULE_1__["AiFillFacebook"], {
    size: "2em",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 11
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "https://www.facebook.com/MarcRodriguez20",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 11
    }
  }, "MarcRodriguez20")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    style: linkStyle,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 9
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: " ",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 11
    }
  }, "Website")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    style: linkStyle,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 9
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "FILL ME IN",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 11
    }
  }, "marcanthonyrodriguez95@gmail.com"))));
}

/* harmony default export */ __webpack_exports__["default"] = (ContactInfo);

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

/***/ "./src/components/NavigationBar/NavBar.jsx":
/*!*************************************************!*\
  !*** ./src/components/NavigationBar/NavBar.jsx ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_scroll__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-scroll */ "./node_modules/react-scroll/modules/index.js");
/* harmony import */ var react_scroll__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_scroll__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_spring__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-spring */ "./node_modules/react-spring/web.js");
var _jsxFileName = "/Users/MarcAnthony/Documents/Personal Projects/my_portfolio_website/src/components/NavigationBar/NavBar.jsx";


 // var Style = {
//   position: "fixed",
//   right: "10px",
//   top: "46%",
//   backgroundColor: "#708090",
//   width: "120px",
//   height: "125px",
//   border: "2px solid silver",
//   textAlign: "center",
//   borderRadius: "10%"
// };

const Navbar = ({
  style
}) => {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_spring__WEBPACK_IMPORTED_MODULE_2__["animated"].nav, {
    className: "nav",
    id: "navbar",
    style: style,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 5
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "nav-content",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 7
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "nav-items",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 9
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 11
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_scroll__WEBPACK_IMPORTED_MODULE_1__["Link"], {
    activeClass: "active",
    to: "Title",
    spy: true,
    smooth: true,
    offset: 10,
    duration: 1000,
    onSetActive: 0,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 13
    }
  }, "Title")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 11
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_scroll__WEBPACK_IMPORTED_MODULE_1__["Link"], {
    activeClass: "active",
    to: "Profile",
    spy: true,
    smooth: true,
    offset: 1,
    duration: 1000,
    onSetActive: 1,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 13
    }
  }, "Profile")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 11
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_scroll__WEBPACK_IMPORTED_MODULE_1__["Link"], {
    activeClass: "active",
    to: "Experience",
    spy: true,
    smooth: true,
    offset: 1,
    duration: 1000,
    onSetActive: 2,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 13
    }
  }, "Experience")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 11
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_scroll__WEBPACK_IMPORTED_MODULE_1__["Link"], {
    activeClass: "active",
    to: "Projects",
    spy: true,
    smooth: true,
    offset: 1,
    duration: 1000,
    onSetActive: 3,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 13
    }
  }, "Projects")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72,
      columnNumber: 11
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_scroll__WEBPACK_IMPORTED_MODULE_1__["Link"], {
    activeClass: "active",
    to: "Contact",
    spy: true,
    smooth: true,
    offset: 1,
    duration: 1000,
    onSetActive: 4,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73,
      columnNumber: 13
    }
  }, "ContactInfo")))));
};

/* harmony default export */ __webpack_exports__["default"] = (Navbar);

/***/ }),

/***/ "./src/components/Profile/Images/profilePic.jpeg":
/*!*******************************************************!*\
  !*** ./src/components/Profile/Images/profilePic.jpeg ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/profilePic.6c35e602.jpeg";

/***/ }),

/***/ "./src/components/Profile/Profile.css":
/*!********************************************!*\
  !*** ./src/components/Profile/Profile.css ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../../../node_modules/postcss-loader/src??postcss!./Profile.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/components/Profile/Profile.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(true) {
	module.hot.accept(/*! !../../../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../../../node_modules/postcss-loader/src??postcss!./Profile.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/components/Profile/Profile.css", function() {
		var newContent = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../../../node_modules/postcss-loader/src??postcss!./Profile.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/components/Profile/Profile.css");

		if(typeof newContent === 'string') newContent = [[module.i, newContent, '']];

		var locals = (function(a, b) {
			var key, idx = 0;

			for(key in a) {
				if(!b || a[key] !== b[key]) return false;
				idx++;
			}

			for(key in b) idx--;

			return idx === 0;
		}(content.locals, newContent.locals));

		if(!locals) throw new Error('Aborting CSS HMR due to changed css-modules locals.');

		update(newContent);
	});

	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./src/components/Profile/Profile.jsx":
/*!********************************************!*\
  !*** ./src/components/Profile/Profile.jsx ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_waypoint__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-waypoint */ "./node_modules/react-waypoint/es/index.js");
/* harmony import */ var react_spring__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-spring */ "./node_modules/react-spring/web.js");
/* harmony import */ var _Images_profilePic_jpeg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Images/profilePic.jpeg */ "./src/components/Profile/Images/profilePic.jpeg");
/* harmony import */ var _Images_profilePic_jpeg__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_Images_profilePic_jpeg__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _Profile_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Profile.css */ "./src/components/Profile/Profile.css");
/* harmony import */ var _Profile_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_Profile_css__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_bootstrap_Image__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-bootstrap/Image */ "./node_modules/react-bootstrap/esm/Image.js");
var _jsxFileName = "/Users/MarcAnthony/Documents/Personal Projects/my_portfolio_website/src/components/Profile/Profile.jsx";






const containerStyle = {
  display: "flex",
  flexDirection: "row",
  width: "auto",
  height: "auto"
};

function Profile(props) {
  const [isVisible, setVisibility] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const fadeAnimation = Object(react_spring__WEBPACK_IMPORTED_MODULE_2__["useSpring"])({
    opacity: isVisible ? 1 : 0
  });
  const photoAnimation = Object(react_spring__WEBPACK_IMPORTED_MODULE_2__["useSpring"])({
    opacity: isVisible ? 1 : 0,
    width: '24vw',
    borderRadius: "10%",
    height: "43.5vh"
  });
  const {
    x
  } = Object(react_spring__WEBPACK_IMPORTED_MODULE_2__["useSpring"])({
    x: isVisible ? 0 : 100
  });
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    id: "Profile",
    style: {
      backgroundColor: "#cfe2e2",
      width: "auto",
      height: "730px",
      textAlign: "center",
      border: "65px inset darkslategrey"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 5
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    id: "Title" // className="item"
    ,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 7
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_waypoint__WEBPACK_IMPORTED_MODULE_1__["Waypoint"] // bottomOffSet="40%"
  , {
    onEnter: () => {
      setVisibility(true);
    },
    onLeave: () => {
      setVisibility(false);
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 9
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_spring__WEBPACK_IMPORTED_MODULE_2__["animated"].h1, {
    style: fadeAnimation,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 9
    }
  }, "Profile"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 9
    }
  }, "I'm a creative Javascript Developer")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    style: containerStyle,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 7
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_spring__WEBPACK_IMPORTED_MODULE_2__["animated"].section, {
    id: "About_Me",
    className: "Information_Box",
    style: {
      transform: x.interpolate(x => `translate3d(${x * -11}%,0,0`)
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 9
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
    id: "Title",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 11
    }
  }, "About me"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    style: {
      padding: "10px"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 11
    }
  }, "Welcome to my website, which is continually being updated with new and exciting features that I've learned from my experience while working as a developer. From a young age, I always had an affinity for problem-solving, working with others, being creative, and pursuing my dreams. When it comes to picking a career, I've always been one to say, \"do something that you have a passion for, and that will bring you great happiness.\" So far, I've had two careers, both of which I love. In my first career, I was a soldier trained as an intelligence analyst, and in my current position, I'm a software engineer. I always knew I wanted to be a software engineer, but I never had the means to pursue it until one day, the opportunity came, and I took it. Since then, I've enjoyed working with a great variety of mentors and colleges, solving mundane and exciting problems and showing off my ability to problem-solve and come up with creative solutions to everyday issues.")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    style: {
      height: "44.5vh",
      width: "auto"
    },
    id: "ProfilePic",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87,
      columnNumber: 9
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_spring__WEBPACK_IMPORTED_MODULE_2__["animated"].img, {
    src: _Images_profilePic_jpeg__WEBPACK_IMPORTED_MODULE_3___default.a,
    style: photoAnimation,
    thumbnail: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88,
      columnNumber: 11
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_spring__WEBPACK_IMPORTED_MODULE_2__["animated"].section, {
    id: "Details",
    className: "Information_Box",
    style: {
      transform: x.interpolate(x => `translate3d(${x * 11}%,0,0`)
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94,
      columnNumber: 9
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101,
      columnNumber: 11
    }
  }, "Details"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    style: {
      textAlign: "left",
      padding: "10px"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 102,
      columnNumber: 11
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
    style: {
      display: "inline"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 108,
      columnNumber: 13
    }
  }, "Occupation"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    style: {
      display: "inline"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 109,
      columnNumber: 13
    }
  }, ":Software Engineer"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 110,
      columnNumber: 13
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", {
    style: {
      display: "inline"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 112,
      columnNumber: 13
    }
  }, "Name"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    style: {
      display: "inline"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 113,
      columnNumber: 13
    }
  }, ": Marc Rodriguez"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 114,
      columnNumber: 13
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
    style: {
      display: "inline"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 115,
      columnNumber: 13
    }
  }, "Age"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    style: {
      display: "inline"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 116,
      columnNumber: 13
    }
  }, ":28"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 117,
      columnNumber: 13
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
    style: {
      display: "inline"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 118,
      columnNumber: 13
    }
  }, "Location"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    style: {
      display: "inline"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 119,
      columnNumber: 13
    }
  }, ":San Antonio, Texas"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 120,
      columnNumber: 13
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
    style: {
      display: "inline"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 121,
      columnNumber: 13
    }
  }, "Email"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    style: {
      display: "inline"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 122,
      columnNumber: 13
    }
  }, ":Marcanthonyrodriguez95@gmail.com"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 125,
      columnNumber: 13
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
    style: {
      display: "inline"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 126,
      columnNumber: 13
    }
  }, "Phone Number"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    style: {
      display: "inline"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 127,
      columnNumber: 13
    }
  }, ":210-745-8744")))));
}

/* harmony default export */ __webpack_exports__["default"] = (Profile);

/***/ }),

/***/ "./src/components/Projects/Card.jsx":
/*!******************************************!*\
  !*** ./src/components/Projects/Card.jsx ***!
  \******************************************/
/*! exports provided: Card */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Card", function() { return Card; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_waypoint__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-waypoint */ "./node_modules/react-waypoint/es/index.js");
/* harmony import */ var react_dnd__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-dnd */ "./node_modules/react-dnd/dist/esm/index.js");
/* harmony import */ var _Utilities_ItemTypes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../Utilities/ItemTypes */ "./src/Utilities/ItemTypes.js");
var _jsxFileName = "/Users/MarcAnthony/Documents/Personal Projects/my_portfolio_website/src/components/Projects/Card.jsx";




const cardStyle = {
  border: "1px solid black",
  width: "30vw",
  height: "60vh",
  margin: "1%",
  padding: "0.5rem 1rem",
  backgroundColor: "white",
  cursor: "move",
  overflow: "auto"
};
const Card = Object(react__WEBPACK_IMPORTED_MODULE_0__["memo"])(({
  id,
  text,
  title,
  image,
  moveCard
}) => {
  const ref = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(null);
  const [{
    isDragging
  }, connectDrag] = Object(react_dnd__WEBPACK_IMPORTED_MODULE_2__["useDrag"])({
    item: {
      id,
      type: _Utilities_ItemTypes__WEBPACK_IMPORTED_MODULE_3__["ItemTypes"].CARD
    },
    collect: monitor => {
      const result = {
        isDragging: monitor.isDragging()
      };
      return result;
    }
  });
  const [, connectDrop] = Object(react_dnd__WEBPACK_IMPORTED_MODULE_2__["useDrop"])({
    accept: _Utilities_ItemTypes__WEBPACK_IMPORTED_MODULE_3__["ItemTypes"].CARD,

    hover({
      id: draggedId
    }) {
      if (draggedId !== id) {
        moveCard(draggedId, id);
      }
    }

  });
  connectDrag(ref);
  connectDrop(ref);
  const opacity = isDragging ? 0 : 1;
  const containerStyle = Object(react__WEBPACK_IMPORTED_MODULE_0__["useMemo"])(() => ({ ...cardStyle,
    opacity
  }), [opacity]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    ref: ref,
    style: containerStyle,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 5
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: image,
    style: {
      height: "45%",
      width: "100%"
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 7
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
    style: {
      textAlign: "center"
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 7
    }
  }, title), text);
});

/***/ }),

/***/ "./src/components/Projects/Images/Corkboard.jpg":
/*!******************************************************!*\
  !*** ./src/components/Projects/Images/Corkboard.jpg ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/Corkboard.950a8410.jpg";

/***/ }),

/***/ "./src/components/Projects/Images/MentorMii.png":
/*!******************************************************!*\
  !*** ./src/components/Projects/Images/MentorMii.png ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/MentorMii.e1a2dc19.png";

/***/ }),

/***/ "./src/components/Projects/Images/RealEstateApp.png":
/*!**********************************************************!*\
  !*** ./src/components/Projects/Images/RealEstateApp.png ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/RealEstateApp.77bab1d7.png";

/***/ }),

/***/ "./src/components/Projects/ProjectsContainer.jsx":
/*!*******************************************************!*\
  !*** ./src/components/Projects/ProjectsContainer.jsx ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ProjectsContainer; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Projects_Images_Corkboard_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Projects/Images/Corkboard.jpg */ "./src/components/Projects/Images/Corkboard.jpg");
/* harmony import */ var _Projects_Images_Corkboard_jpg__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Projects_Images_Corkboard_jpg__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Card */ "./src/components/Projects/Card.jsx");
/* harmony import */ var _Data_Projects_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../Data/Projects.js */ "./src/Data/Projects.js");
/* harmony import */ var _Data_Projects_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_Data_Projects_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var immutability_helper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! immutability-helper */ "./node_modules/immutability-helper/index.js");
/* harmony import */ var immutability_helper__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(immutability_helper__WEBPACK_IMPORTED_MODULE_4__);
var _jsxFileName = "/Users/MarcAnthony/Documents/Personal Projects/my_portfolio_website/src/components/Projects/ProjectsContainer.jsx";





const constainerStyle = {
  width: "100%",
  display: "flex",
  height: "930px",
  justifyContent: "center",
  backgroundImage: "url(" + _Projects_Images_Corkboard_jpg__WEBPACK_IMPORTED_MODULE_1___default.a + ")",
  backgroundRepeat: "repeat",
  imageRendering: "high-quality",
  overflow: "auto"
};
console.log("DELETETHIS");

function buildCardData() {
  const cardsById = [];
  const cardsByIndex = [];

  for (let i = 0; i < _Data_Projects_js__WEBPACK_IMPORTED_MODULE_3___default.a.length; i += 1) {
    const card = {
      id: i,
      image: _Data_Projects_js__WEBPACK_IMPORTED_MODULE_3___default.a[i].image,
      title: _Data_Projects_js__WEBPACK_IMPORTED_MODULE_3___default.a[i].title,
      text: _Data_Projects_js__WEBPACK_IMPORTED_MODULE_3___default.a[i].text
    };
    cardsById[card.id] = card;
    cardsByIndex[i] = card;
    console.log("id", cardsById);
    console.log("index", cardsByIndex);
  }

  return {
    cardsById,
    cardsByIndex
  };
}

class ProjectsContainer extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  constructor(props) {
    super(props);

    this.drawFrame = () => {
      const nextState = immutability_helper__WEBPACK_IMPORTED_MODULE_4___default()(this.state, this.pendingUpdateFn);
      this.setState(nextState);
      this.pendingUpdateFn = undefined;
      this.requestedFrame = undefined;
    };

    this.moveCard = (id, afterId) => {
      const {
        cardsById,
        cardsByIndex
      } = this.state;
      const card = cardsById[id];
      const afterCard = cardsById[afterId];
      const cardIndex = cardsByIndex.indexOf(card);
      const afterIndex = cardsByIndex.indexOf(afterCard);
      this.scheduleUpdate({
        cardsByIndex: {
          $splice: [[cardIndex, 1], [afterIndex, 0, card]]
        }
      });
    };

    this.state = buildCardData();
  }

  componentWillUnmount() {
    if (this.requestedFrame !== undefined) {
      cancelAnimationFrame(this.requestedFrame);
    }
  }

  render() {
    const {
      cardsByIndex
    } = this.state;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "Projects",
      style: {
        overflow: "auto",
        backgroundColor: "black",
        border: "10px solid black",
        width: "99%"
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 73,
        columnNumber: 7
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "title",
      style: {
        textAlign: "center"
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 82,
        columnNumber: 9
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
      style: {
        color: "white"
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 83,
        columnNumber: 11
      }
    }, "Projects")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      style: constainerStyle,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 86,
        columnNumber: 9
      }
    }, cardsByIndex.map(card => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Card__WEBPACK_IMPORTED_MODULE_2__["Card"] // style={{textAlign:"center"}}
    , {
      key: card.id,
      id: card.id,
      image: card.image,
      title: card.title,
      text: card.text,
      moveCard: this.moveCard,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 88,
        columnNumber: 13
      }
    }))));
  }

  scheduleUpdate(updateFn) {
    this.pendingUpdateFn = updateFn;

    if (!this.requestedFrame) {
      this.requestedFrame = requestAnimationFrame(this.drawFrame);
    }
  }

}

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

/***/ }),

/***/ "./src/components/Title/Images/Artistic-4K-Wallpaper-3840x2160.jpg":
/*!*************************************************************************!*\
  !*** ./src/components/Title/Images/Artistic-4K-Wallpaper-3840x2160.jpg ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/Artistic-4K-Wallpaper-3840x2160.6a375215.jpg";

/***/ }),

/***/ "./src/components/Title/Title.jsx":
/*!****************************************!*\
  !*** ./src/components/Title/Title.jsx ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_spring__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-spring */ "./node_modules/react-spring/web.js");
/* harmony import */ var react_waypoint__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-waypoint */ "./node_modules/react-waypoint/es/index.js");
var _jsxFileName = "/Users/MarcAnthony/Documents/Personal Projects/my_portfolio_website/src/components/Title/Title.jsx";




const Background = __webpack_require__(/*! ./Images/Artistic-4K-Wallpaper-3840x2160.jpg */ "./src/components/Title/Images/Artistic-4K-Wallpaper-3840x2160.jpg");

function Title(props) {
  const transforms = {
    overflow: "hidden",
    width: "100%",
    color: "white",
    display: "flex",
    justifyContent: "flex start",
    alignItems: "center",
    fontWeight: "bold",
    textTransform: "uppercase",
    willChange: "transform, opacity, height",
    whiteSpace: "nowrap",
    cursor: "pointer"
  };
  const ref = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])([]);
  const [items, set] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([]);
  const transitions = Object(react_spring__WEBPACK_IMPORTED_MODULE_1__["useTransition"])(items, null, {
    from: {
      opacity: "100%",
      height: "70%",
      innerHeight: "100px",
      // transform: 'perspective(100px) rotateX(0deg)',
      color: "#F8F8FF",
      padding: "5px",
      fontSize: "4em",
      top: "3%",
      fontWeight: "bold"
    },
    enter: [{
      opacity: "60%",
      height: "100%",
      innerHeight: "100px",
      top: "55%"
    } // { transform: 'perspective(130px) rotateX(180deg)', color: 'silver' },
    // { transform: 'perspective(880px) rotateX(10deg)' },
    ],
    leave: [{
      color: "#F5F5F5"
    }, {
      innerHeight: "100px"
    }, {
      opacity: "0%",
      height: 0
    }, {
      top: "44%"
    }],
    update: {
      color: "#4682B4"
    }
  });
  const reset = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(() => {
    ref.current.map(clearTimeout);
    ref.current = [];
    set([]);
    ref.current.push(setTimeout(() => set(["Marc", "Anthony", "Rodriguez"]), 1000));
    ref.current.push(setTimeout(() => set(["Software", "Engineer"]), 4000));
    ref.current.push(setTimeout(() => set(["Ready", "For", "Hire"]), 9000));
  }, [] //  setTimeout(() =>
  //   reset()
  // , 12000)
  );
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => void reset(), []);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    style: {
      width: "100%",
      height: "930px",
      // padding: 2,
      backgroundImage: `url(${Background})`,
      display: "flex",
      alignItems: "center",
      position: "relative"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 5
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_waypoint__WEBPACK_IMPORTED_MODULE_2__["Waypoint"], {
    onEnter: () => {
      reset();
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80,
      columnNumber: 7
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    style: {
      width: "500px",
      background: "black",
      fontFamily: "apple system, BlinkMacSystemFont, avenir next, avenir, helvetica neue, helvetica, ubuntu, roboto, noto, segoe ui, arial, sans-serif",
      background: "transparent",
      webkitTouchCallout: "none",
      webkitUserSelect: "none",
      khtmlUserSelect: "none",
      mozUserSelect: "none",
      msUserSelect: "none",
      userSelect: "none",
      cursor: "default",
      display: "flex",
      position: "absolute",
      top: "46%",
      left: "27%"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81,
      columnNumber: 7
    }
  }, transitions.map(({
    item,
    props: {
      innerHeight,
      ...rest
    },
    key
  }) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_spring__WEBPACK_IMPORTED_MODULE_1__["animated"].div, {
    className: "transitions-item",
    key: key,
    style: rest,
    onRender: reset,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 102,
      columnNumber: 11
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_spring__WEBPACK_IMPORTED_MODULE_1__["animated"].div, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 108,
      columnNumber: 13
    }
  }, item)))));
}

/* harmony default export */ __webpack_exports__["default"] = (Title);
/* function Title(props) {
  return (
    <div
      id="Title"
      style={{
        height: "930px",
        width: "auto",
        display: "flex",
        margin: "auto",
        color: "grey",
        backgroundImage: `url(${Background})`,
      }}
    >
      <div
        id="Title"
        className="item"
        style={{
          fontFamily: "crackedCode",
          width: "auto",
          display: "flex",
          margin: "auto",
          fontSize: "5vmax",
        }}
      >
        Marc Anthony Rodriguez
      </div>
    </div>
  );
}
export default Title;
*/

/***/ }),

/***/ "./src/index.css":
/*!***********************!*\
  !*** ./src/index.css ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../node_modules/postcss-loader/src??postcss!./index.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/index.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(true) {
	module.hot.accept(/*! !../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../node_modules/postcss-loader/src??postcss!./index.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/index.css", function() {
		var newContent = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../node_modules/postcss-loader/src??postcss!./index.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/index.css");

		if(typeof newContent === 'string') newContent = [[module.i, newContent, '']];

		var locals = (function(a, b) {
			var key, idx = 0;

			for(key in a) {
				if(!b || a[key] !== b[key]) return false;
				idx++;
			}

			for(key in b) idx--;

			return idx === 0;
		}(content.locals, newContent.locals));

		if(!locals) throw new Error('Aborting CSS HMR due to changed css-modules locals.');

		update(newContent);
	});

	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index.css */ "./src/index.css");
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_index_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Homepage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Homepage */ "./src/Homepage.js");
/* harmony import */ var _serviceWorker__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./serviceWorker */ "./src/serviceWorker.js");
/* harmony import */ var react_dnd__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-dnd */ "./node_modules/react-dnd/dist/esm/index.js");
/* harmony import */ var react_dnd_html5_backend__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-dnd-html5-backend */ "./node_modules/react-dnd-html5-backend/dist/esm/index.js");
var _jsxFileName = "/Users/MarcAnthony/Documents/Personal Projects/my_portfolio_website/src/index.js";







react_dom__WEBPACK_IMPORTED_MODULE_1___default.a.render( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.StrictMode, {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 10,
    columnNumber: 3
  }
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_dnd__WEBPACK_IMPORTED_MODULE_5__["DndProvider"], {
  backend: react_dnd_html5_backend__WEBPACK_IMPORTED_MODULE_6__["HTML5Backend"],
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 11,
    columnNumber: 5
  }
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Homepage__WEBPACK_IMPORTED_MODULE_3__["default"], {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 12,
    columnNumber: 7
  }
}))), document.getElementById("root")); // If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA

_serviceWorker__WEBPACK_IMPORTED_MODULE_4__["unregister"]();

/***/ }),

/***/ "./src/serviceWorker.js":
/*!******************************!*\
  !*** ./src/serviceWorker.js ***!
  \******************************/
/*! exports provided: register, unregister */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "register", function() { return register; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "unregister", function() { return unregister; });
// This optional code is used to register a service worker.
// register() is not called by default.
// This lets the app load faster on subsequent visits in production, and gives
// it offline capabilities. However, it also means that developers (and users)
// will only see deployed updates on subsequent visits to a page, after all the
// existing tabs open on the page have been closed, since previously cached
// resources are updated in the background.
// To learn more about the benefits of this model and instructions on how to
// opt-in, read https://bit.ly/CRA-PWA
const isLocalhost = Boolean(window.location.hostname === 'localhost' || // [::1] is the IPv6 localhost address.
window.location.hostname === '[::1]' || // 127.0.0.0/8 are considered localhost for IPv4.
window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));
function register(config) {
  if (false) {}
}

function registerValidSW(swUrl, config) {
  navigator.serviceWorker.register(swUrl).then(registration => {
    registration.onupdatefound = () => {
      const installingWorker = registration.installing;

      if (installingWorker == null) {
        return;
      }

      installingWorker.onstatechange = () => {
        if (installingWorker.state === 'installed') {
          if (navigator.serviceWorker.controller) {
            // At this point, the updated precached content has been fetched,
            // but the previous service worker will still serve the older
            // content until all client tabs are closed.
            console.log('New content is available and will be used when all ' + 'tabs for this page are closed. See https://bit.ly/CRA-PWA.'); // Execute callback

            if (config && config.onUpdate) {
              config.onUpdate(registration);
            }
          } else {
            // At this point, everything has been precached.
            // It's the perfect time to display a
            // "Content is cached for offline use." message.
            console.log('Content is cached for offline use.'); // Execute callback

            if (config && config.onSuccess) {
              config.onSuccess(registration);
            }
          }
        }
      };
    };
  }).catch(error => {
    console.error('Error during service worker registration:', error);
  });
}

function checkValidServiceWorker(swUrl, config) {
  // Check if the service worker can be found. If it can't reload the page.
  fetch(swUrl, {
    headers: {
      'Service-Worker': 'script'
    }
  }).then(response => {
    // Ensure service worker exists, and that we really are getting a JS file.
    const contentType = response.headers.get('content-type');

    if (response.status === 404 || contentType != null && contentType.indexOf('javascript') === -1) {
      // No service worker found. Probably a different app. Reload the page.
      navigator.serviceWorker.ready.then(registration => {
        registration.unregister().then(() => {
          window.location.reload();
        });
      });
    } else {
      // Service worker found. Proceed as normal.
      registerValidSW(swUrl, config);
    }
  }).catch(() => {
    console.log('No internet connection found. App is running in offline mode.');
  });
}

function unregister() {
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.ready.then(registration => {
      registration.unregister();
    }).catch(error => {
      console.error(error.message);
    });
  }
}

/***/ }),

/***/ 1:
/*!**************************************************************************************************************!*\
  !*** multi (webpack)/hot/dev-server.js ./node_modules/react-dev-utils/webpackHotDevClient.js ./src/index.js ***!
  \**************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! /Users/MarcAnthony/Documents/Personal Projects/my_portfolio_website/node_modules/webpack/hot/dev-server.js */"./node_modules/webpack/hot/dev-server.js");
__webpack_require__(/*! /Users/MarcAnthony/Documents/Personal Projects/my_portfolio_website/node_modules/react-dev-utils/webpackHotDevClient.js */"./node_modules/react-dev-utils/webpackHotDevClient.js");
module.exports = __webpack_require__(/*! /Users/MarcAnthony/Documents/Personal Projects/my_portfolio_website/src/index.js */"./src/index.js");


/***/ })

},[[1,"runtime-main",1]]]);
//# sourceMappingURL=main.chunk.js.map