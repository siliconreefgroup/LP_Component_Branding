(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["debugManifests"] = factory();
	else
		root["debugManifests"] = factory();
})(window, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Set the webpack public path
/******/ 	(function () {
/******/ 	  var scripts = document.getElementsByTagName('script');
/******/ 	  var regex = new RegExp('manifests\\.js', 'i');
/******/ 	  var publicPath;
/******/ 	
/******/ 	  if (scripts && scripts.length) {
/******/ 	    for (var i = 0; i < scripts.length; i++) {
/******/ 	      if (!scripts[i]) continue;
/******/ 	      var path = scripts[i].getAttribute('src');
/******/ 	      if (path && path.match(regex)) {
/******/ 	        publicPath = path.substring(0, path.lastIndexOf('/') + 1);
/******/ 	        break;
/******/ 	      }
/******/ 	    }
/******/ 	  }
/******/ 	
/******/ 	  if (!publicPath) {
/******/ 	    for (var global in window.__setWebpackPublicPathLoaderSrcRegistry__) {
/******/ 	      if (global && global.match(regex)) {
/******/ 	        publicPath = global.substring(0, global.lastIndexOf('/') + 1);
/******/ 	        break;
/******/ 	      }
/******/ 	    }
/******/ 	  }
/******/ 	  __webpack_require__.p = publicPath;
/******/ 	})();
/******/ 	
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getManifests", function() { return getManifests; });
var MANIFESTS_ARRAY = [
  {
    "id": "f97266fb-ccb7-430e-9384-4124d05295d3",
    "alias": "Decorators",
    "componentType": "Library",
    "version": "1.11.0",
    "manifestVersion": 2,
    "loaderConfig": {
      "entryModuleId": "decorators",
      "internalModuleBaseUrls": [
        "https://localhost:4321/node_modules/@microsoft/decorators/"
      ],
      "scriptResources": {
        "decorators": {
          "type": "path",
          "path": "dist/decorators.js"
        }
      }
    },
    "isInternal": true
  },
  {
    "id": "73e1dc6c-8441-42cc-ad47-4bd3659f8a3a",
    "alias": "SPLodashSubset",
    "componentType": "Library",
    "version": "1.11.0",
    "manifestVersion": 2,
    "loaderConfig": {
      "entryModuleId": "sp-lodash-subset",
      "internalModuleBaseUrls": [
        "https://localhost:4321/node_modules/@microsoft/sp-lodash-subset/"
      ],
      "scriptResources": {
        "sp-lodash-subset": {
          "type": "path",
          "path": "dist/sp-lodash-subset.js"
        }
      }
    },
    "isInternal": true
  },
  {
    "id": "7263c7d0-1d6a-45ec-8d85-d4d1d234171b",
    "alias": "SPCoreLibrary",
    "componentType": "Library",
    "version": "1.11.0",
    "manifestVersion": 2,
    "loaderConfig": {
      "entryModuleId": "sp-core-library",
      "internalModuleBaseUrls": [
        "https://localhost:4321/node_modules/@microsoft/sp-core-library/"
      ],
      "scriptResources": {
        "sp-core-library": {
          "type": "localizedPath",
          "defaultPath": "dist/sp-core-library_en-us.js"
        },
        "@microsoft/sp-lodash-subset": {
          "type": "component",
          "version": "1.11.0",
          "id": "73e1dc6c-8441-42cc-ad47-4bd3659f8a3a"
        }
      }
    },
    "isInternal": true
  },
  {
    "manifestVersion": 2,
    "id": "78359e4b-07c2-43c6-8d0b-d060b4d577e8",
    "alias": "SPDiagnostics",
    "componentType": "Library",
    "version": "1.11.0",
    "loaderConfig": {
      "entryModuleId": "sp-diagnostics",
      "internalModuleBaseUrls": [
        "https://localhost:4321/node_modules/@microsoft/sp-diagnostics/"
      ],
      "scriptResources": {
        "sp-diagnostics": {
          "type": "path",
          "path": "dist/sp-diagnostics.js"
        },
        "@microsoft/sp-lodash-subset": {
          "type": "component",
          "version": "1.11.0",
          "id": "73e1dc6c-8441-42cc-ad47-4bd3659f8a3a"
        },
        "@microsoft/sp-core-library": {
          "type": "component",
          "version": "1.11.0",
          "id": "7263c7d0-1d6a-45ec-8d85-d4d1d234171b"
        }
      }
    },
    "isInternal": true
  },
  {
    "manifestVersion": 2,
    "id": "e40f8203-b39d-425a-a957-714852e33b79",
    "alias": "SPDynamicData",
    "componentType": "Library",
    "version": "1.11.0",
    "loaderConfig": {
      "entryModuleId": "sp-dynamic-data",
      "internalModuleBaseUrls": [
        "https://localhost:4321/node_modules/@microsoft/sp-dynamic-data/"
      ],
      "scriptResources": {
        "sp-dynamic-data": {
          "type": "localizedPath",
          "defaultPath": "dist/sp-dynamic-data_en-us.js"
        },
        "@microsoft/sp-lodash-subset": {
          "type": "component",
          "version": "1.11.0",
          "id": "73e1dc6c-8441-42cc-ad47-4bd3659f8a3a"
        },
        "@microsoft/sp-core-library": {
          "type": "component",
          "version": "1.11.0",
          "id": "7263c7d0-1d6a-45ec-8d85-d4d1d234171b"
        },
        "@microsoft/sp-diagnostics": {
          "type": "component",
          "version": "1.11.0",
          "id": "78359e4b-07c2-43c6-8d0b-d060b4d577e8"
        }
      }
    },
    "isInternal": true
  },
  {
    "id": "1e384972-6346-49b4-93c7-b2e6763938e6",
    "alias": "sp-polyfills",
    "componentType": "Library",
    "version": "1.11.0",
    "manifestVersion": 2,
    "loaderConfig": {
      "entryModuleId": "sp-polyfills",
      "internalModuleBaseUrls": [
        "https://localhost:4321/node_modules/@microsoft/sp-polyfills/"
      ],
      "scriptResources": {
        "sp-polyfills": {
          "type": "path",
          "path": "dist/sp-polyfills.js"
        }
      }
    }
  },
  {
    "id": "c07208f0-ea3b-4c1a-9965-ac1b825211a6",
    "alias": "SPHttp",
    "componentType": "Library",
    "version": "1.11.0",
    "manifestVersion": 2,
    "preloadComponents": [],
    "loaderConfig": {
      "entryModuleId": "sp-http",
      "internalModuleBaseUrls": [
        "https://localhost:4321/node_modules/@microsoft/sp-http/"
      ],
      "scriptResources": {
        "sp-http": {
          "type": "localizedPath",
          "defaultPath": "dist/sp-http_en-us.js"
        },
        "@microsoft/sp-core-library": {
          "type": "component",
          "version": "1.11.0",
          "id": "7263c7d0-1d6a-45ec-8d85-d4d1d234171b"
        },
        "@microsoft/sp-diagnostics": {
          "type": "component",
          "version": "1.11.0",
          "id": "78359e4b-07c2-43c6-8d0b-d060b4d577e8"
        }
      }
    },
    "isInternal": true
  },
  {
    "id": "02a01e42-69ab-403d-8a16-acd128661f8e",
    "alias": "OfficeUIFabricReact",
    "componentType": "Library",
    "version": "1.11.0",
    "manifestVersion": 2,
    "loaderConfig": {
      "entryModuleId": "office-ui-fabric-react-bundle",
      "internalModuleBaseUrls": [
        "https://localhost:4321/node_modules/@microsoft/office-ui-fabric-react-bundle/"
      ],
      "scriptResources": {
        "office-ui-fabric-react-bundle": {
          "type": "path",
          "path": "dist/office-ui-fabric-react-bundle.js"
        },
        "react": {
          "type": "component",
          "version": "16.8.5",
          "id": "0d910c1c-13b9-4e1c-9aa4-b008c5e42d7d",
          "failoverPath": "node_modules/react/dist/react.js"
        },
        "react-dom": {
          "type": "component",
          "version": "16.8.5",
          "id": "aa0a46ec-1505-43cd-a44a-93f3a5aa460a",
          "failoverPath": "node_modules/react-dom/dist/react-dom.js"
        },
        "@ms/uifabric-styling-bundle": {
          "type": "component",
          "version": "0.1.0",
          "id": "17ce0976-e69a-4355-be84-89b69a74717d"
        },
        "@microsoft/load-themed-styles": {
          "type": "component",
          "version": "0.1.2",
          "id": "229b8d08-79f3-438b-8c21-4613fc877abd"
        }
      }
    },
    "isInternal": true
  },
  {
    "id": "1c4541f7-5c31-41aa-9fa8-fbc9dc14c0a8",
    "alias": "SPPageContext",
    "componentType": "Library",
    "version": "1.11.0",
    "manifestVersion": 2,
    "loaderConfig": {
      "entryModuleId": "sp-page-context",
      "internalModuleBaseUrls": [
        "https://localhost:4321/node_modules/@microsoft/sp-page-context/"
      ],
      "scriptResources": {
        "sp-page-context": {
          "type": "localizedPath",
          "defaultPath": "dist/sp-page-context_en-us.js"
        },
        "@microsoft/sp-dynamic-data": {
          "type": "component",
          "version": "1.11.0",
          "id": "e40f8203-b39d-425a-a957-714852e33b79"
        },
        "@microsoft/sp-core-library": {
          "type": "component",
          "version": "1.11.0",
          "id": "7263c7d0-1d6a-45ec-8d85-d4d1d234171b"
        },
        "@microsoft/sp-diagnostics": {
          "type": "component",
          "version": "1.11.0",
          "id": "78359e4b-07c2-43c6-8d0b-d060b4d577e8"
        }
      }
    },
    "isInternal": true
  },
  {
    "id": "1c6c9123-7aac-41f3-a376-3caea41ed83f",
    "alias": "SPLoader",
    "componentType": "Library",
    "version": "1.11.0",
    "manifestVersion": 2,
    "loaderConfig": {
      "entryModuleId": "sp-loader",
      "internalModuleBaseUrls": [
        "https://localhost:4321/node_modules/@microsoft/sp-loader/"
      ],
      "scriptResources": {
        "sp-loader": {
          "type": "localizedPath",
          "defaultPath": "dist/sp-loader_en-us.js"
        },
        "@ms/sp-telemetry": {
          "type": "component",
          "version": "0.8.24",
          "id": "8217e442-8ed3-41fd-957d-b112e841286a"
        },
        "@microsoft/sp-dynamic-data": {
          "type": "component",
          "version": "1.11.0",
          "id": "e40f8203-b39d-425a-a957-714852e33b79"
        },
        "@microsoft/sp-lodash-subset": {
          "type": "component",
          "version": "1.11.0",
          "id": "73e1dc6c-8441-42cc-ad47-4bd3659f8a3a"
        },
        "@microsoft/sp-core-library": {
          "type": "component",
          "version": "1.11.0",
          "id": "7263c7d0-1d6a-45ec-8d85-d4d1d234171b"
        },
        "@microsoft/sp-page-context": {
          "type": "component",
          "version": "1.11.0",
          "id": "1c4541f7-5c31-41aa-9fa8-fbc9dc14c0a8"
        },
        "@microsoft/load-themed-styles": {
          "type": "component",
          "version": "0.1.2",
          "id": "229b8d08-79f3-438b-8c21-4613fc877abd"
        },
        "@microsoft/sp-diagnostics": {
          "type": "component",
          "version": "1.11.0",
          "id": "78359e4b-07c2-43c6-8d0b-d060b4d577e8"
        },
        "@microsoft/sp-http": {
          "type": "component",
          "version": "1.11.0",
          "id": "c07208f0-ea3b-4c1a-9965-ac1b825211a6"
        }
      }
    },
    "isInternal": true
  },
  {
    "id": "467dc675-7cc5-4709-8aac-78e3b71bd2f6",
    "alias": "SPComponentBase",
    "componentType": "Library",
    "version": "1.11.0",
    "manifestVersion": 2,
    "loaderConfig": {
      "entryModuleId": "sp-component-base",
      "internalModuleBaseUrls": [
        "https://localhost:4321/node_modules/@microsoft/sp-component-base/"
      ],
      "scriptResources": {
        "sp-component-base": {
          "type": "localizedPath",
          "defaultPath": "dist/sp-component-base_en-us.js"
        },
        "@microsoft/sp-dynamic-data": {
          "type": "component",
          "version": "1.11.0",
          "id": "e40f8203-b39d-425a-a957-714852e33b79"
        },
        "@microsoft/sp-lodash-subset": {
          "type": "component",
          "version": "1.11.0",
          "id": "73e1dc6c-8441-42cc-ad47-4bd3659f8a3a"
        },
        "@microsoft/sp-core-library": {
          "type": "component",
          "version": "1.11.0",
          "id": "7263c7d0-1d6a-45ec-8d85-d4d1d234171b"
        },
        "@microsoft/sp-page-context": {
          "type": "component",
          "version": "1.11.0",
          "id": "1c4541f7-5c31-41aa-9fa8-fbc9dc14c0a8"
        },
        "@microsoft/load-themed-styles": {
          "type": "component",
          "version": "0.1.2",
          "id": "229b8d08-79f3-438b-8c21-4613fc877abd"
        },
        "@microsoft/sp-diagnostics": {
          "type": "component",
          "version": "1.11.0",
          "id": "78359e4b-07c2-43c6-8d0b-d060b4d577e8"
        },
        "@microsoft/sp-http": {
          "type": "component",
          "version": "1.11.0",
          "id": "c07208f0-ea3b-4c1a-9965-ac1b825211a6"
        },
        "@microsoft/decorators": {
          "type": "component",
          "version": "1.11.0",
          "id": "f97266fb-ccb7-430e-9384-4124d05295d3"
        }
      }
    },
    "isInternal": true
  },
  {
    "id": "0773bd53-a69e-4293-87e6-ba80ea4d614b",
    "alias": "SPExtensionBase",
    "componentType": "Library",
    "version": "1.11.0",
    "manifestVersion": 2,
    "loaderConfig": {
      "entryModuleId": "sp-extension-base",
      "internalModuleBaseUrls": [
        "https://localhost:4321/node_modules/@microsoft/sp-extension-base/"
      ],
      "scriptResources": {
        "sp-extension-base": {
          "type": "localizedPath",
          "defaultPath": "dist/sp-extension-base_en-us.js"
        },
        "@ms/sp-telemetry": {
          "type": "component",
          "version": "0.8.24",
          "id": "8217e442-8ed3-41fd-957d-b112e841286a"
        },
        "@microsoft/sp-component-base": {
          "type": "component",
          "version": "1.11.0",
          "id": "467dc675-7cc5-4709-8aac-78e3b71bd2f6"
        },
        "@microsoft/sp-loader": {
          "type": "component",
          "version": "1.11.0",
          "id": "1c6c9123-7aac-41f3-a376-3caea41ed83f"
        },
        "@microsoft/sp-core-library": {
          "type": "component",
          "version": "1.11.0",
          "id": "7263c7d0-1d6a-45ec-8d85-d4d1d234171b"
        },
        "@microsoft/sp-diagnostics": {
          "type": "component",
          "version": "1.11.0",
          "id": "78359e4b-07c2-43c6-8d0b-d060b4d577e8"
        },
        "@microsoft/decorators": {
          "type": "component",
          "version": "1.11.0",
          "id": "f97266fb-ccb7-430e-9384-4124d05295d3"
        }
      }
    },
    "isInternal": true
  },
  {
    "manifestVersion": 2,
    "id": "4958ea79-6ff3-4480-8291-0932dd010869",
    "alias": "SPSearchExtensibility",
    "componentType": "Library",
    "version": "1.11.0",
    "loaderConfig": {
      "entryModuleId": "sp-search-extensibility",
      "internalModuleBaseUrls": [
        "https://localhost:4321/node_modules/@microsoft/sp-search-extensibility/"
      ],
      "scriptResources": {
        "sp-search-extensibility": {
          "type": "path",
          "path": "dist/sp-search-extensibility.js"
        },
        "@microsoft/sp-core-library": {
          "type": "component",
          "version": "1.11.0",
          "id": "7263c7d0-1d6a-45ec-8d85-d4d1d234171b"
        },
        "@microsoft/sp-extension-base": {
          "type": "component",
          "version": "1.11.0",
          "id": "0773bd53-a69e-4293-87e6-ba80ea4d614b"
        },
        "@microsoft/sp-diagnostics": {
          "type": "component",
          "version": "1.11.0",
          "id": "78359e4b-07c2-43c6-8d0b-d060b4d577e8"
        }
      }
    },
    "isInternal": true
  },
  {
    "id": "4df9bb86-ab0a-4aab-ab5f-48bf167048fb",
    "alias": "SPApplicationBase",
    "componentType": "Library",
    "version": "1.11.0",
    "manifestVersion": 2,
    "preloadComponents": [
      "c0c518b8-701b-4f6f-956d-5782772bb731",
      "4958ea79-6ff3-4480-8291-0932dd010869"
    ],
    "loaderConfig": {
      "entryModuleId": "sp-application-base",
      "internalModuleBaseUrls": [
        "https://localhost:4321/node_modules/@microsoft/sp-application-base/"
      ],
      "scriptResources": {
        "sp-application-base": {
          "type": "localizedPath",
          "defaultPath": "dist/sp-application-base_en-us.js"
        },
        "@ms/sp-telemetry": {
          "type": "component",
          "version": "0.8.24",
          "id": "8217e442-8ed3-41fd-957d-b112e841286a"
        },
        "@ms/sp-load-themed-styles": {
          "type": "component",
          "version": "0.1.2",
          "id": "229b8d08-79f3-438b-8c21-4613fc877abd"
        },
        "@ms/sp-suite-nav": {
          "type": "component",
          "version": "0.1.0",
          "id": "f8a8ad94-4cf3-4a19-a76b-1cec9da00219"
        },
        "@microsoft/sp-component-base": {
          "type": "component",
          "version": "1.11.0",
          "id": "467dc675-7cc5-4709-8aac-78e3b71bd2f6"
        },
        "@microsoft/sp-loader": {
          "type": "component",
          "version": "1.11.0",
          "id": "1c6c9123-7aac-41f3-a376-3caea41ed83f"
        },
        "@microsoft/sp-lodash-subset": {
          "type": "component",
          "version": "1.11.0",
          "id": "73e1dc6c-8441-42cc-ad47-4bd3659f8a3a"
        },
        "@microsoft/sp-core-library": {
          "type": "component",
          "version": "1.11.0",
          "id": "7263c7d0-1d6a-45ec-8d85-d4d1d234171b"
        },
        "@microsoft/sp-page-context": {
          "type": "component",
          "version": "1.11.0",
          "id": "1c4541f7-5c31-41aa-9fa8-fbc9dc14c0a8"
        },
        "@microsoft/sp-extension-base": {
          "type": "component",
          "version": "1.11.0",
          "id": "0773bd53-a69e-4293-87e6-ba80ea4d614b"
        },
        "react": {
          "type": "component",
          "version": "16.8.5",
          "id": "0d910c1c-13b9-4e1c-9aa4-b008c5e42d7d",
          "failoverPath": "node_modules/react/dist/react.js"
        },
        "react-dom": {
          "type": "component",
          "version": "16.8.5",
          "id": "aa0a46ec-1505-43cd-a44a-93f3a5aa460a",
          "failoverPath": "node_modules/react-dom/dist/react-dom.js"
        },
        "@ms/uifabric-styling-bundle": {
          "type": "component",
          "version": "0.1.0",
          "id": "17ce0976-e69a-4355-be84-89b69a74717d"
        },
        "@microsoft/load-themed-styles": {
          "type": "component",
          "version": "0.1.2",
          "id": "229b8d08-79f3-438b-8c21-4613fc877abd"
        },
        "@microsoft/sp-diagnostics": {
          "type": "component",
          "version": "1.11.0",
          "id": "78359e4b-07c2-43c6-8d0b-d060b4d577e8"
        },
        "@microsoft/sp-http": {
          "type": "component",
          "version": "1.11.0",
          "id": "c07208f0-ea3b-4c1a-9965-ac1b825211a6"
        },
        "@microsoft/decorators": {
          "type": "component",
          "version": "1.11.0",
          "id": "f97266fb-ccb7-430e-9384-4124d05295d3"
        },
        "@ms/odsp-utilities-bundle": {
          "type": "component",
          "version": "5.1.55",
          "id": "cc2cc925-b5be-41bb-880a-f0f8030c6aff"
        }
      }
    },
    "isInternal": true
  },
  {
    "id": "f9e737b7-f0df-4597-ba8c-3060f82380db",
    "alias": "SPPropertyPane",
    "componentType": "Library",
    "version": "1.11.0",
    "manifestVersion": 2,
    "loaderConfig": {
      "entryModuleId": "sp-property-pane",
      "internalModuleBaseUrls": [
        "https://localhost:4321/node_modules/@microsoft/sp-property-pane/"
      ],
      "scriptResources": {
        "sp-property-pane": {
          "type": "localizedPath",
          "defaultPath": "dist/sp-property-pane_en-us.js"
        },
        "@microsoft/sp-component-base": {
          "type": "component",
          "version": "1.11.0",
          "id": "467dc675-7cc5-4709-8aac-78e3b71bd2f6"
        },
        "@microsoft/office-ui-fabric-react-bundle": {
          "type": "component",
          "version": "1.11.0",
          "id": "02a01e42-69ab-403d-8a16-acd128661f8e"
        },
        "@microsoft/sp-lodash-subset": {
          "type": "component",
          "version": "1.11.0",
          "id": "73e1dc6c-8441-42cc-ad47-4bd3659f8a3a"
        },
        "@microsoft/sp-core-library": {
          "type": "component",
          "version": "1.11.0",
          "id": "7263c7d0-1d6a-45ec-8d85-d4d1d234171b"
        },
        "react": {
          "type": "component",
          "version": "16.8.5",
          "id": "0d910c1c-13b9-4e1c-9aa4-b008c5e42d7d",
          "failoverPath": "node_modules/react/dist/react.js"
        },
        "react-dom": {
          "type": "component",
          "version": "16.8.5",
          "id": "aa0a46ec-1505-43cd-a44a-93f3a5aa460a",
          "failoverPath": "node_modules/react-dom/dist/react-dom.js"
        },
        "@ms/uifabric-styling-bundle": {
          "type": "component",
          "version": "0.1.0",
          "id": "17ce0976-e69a-4355-be84-89b69a74717d"
        },
        "@microsoft/load-themed-styles": {
          "type": "component",
          "version": "0.1.2",
          "id": "229b8d08-79f3-438b-8c21-4613fc877abd"
        },
        "@microsoft/sp-diagnostics": {
          "type": "component",
          "version": "1.11.0",
          "id": "78359e4b-07c2-43c6-8d0b-d060b4d577e8"
        },
        "@microsoft/decorators": {
          "type": "component",
          "version": "1.11.0",
          "id": "f97266fb-ccb7-430e-9384-4124d05295d3"
        }
      }
    },
    "isInternal": true
  },
  {
    "id": "974a7777-0990-4136-8fa6-95d80114c2e0",
    "alias": "SPWebPartBase",
    "componentType": "Library",
    "version": "1.11.0",
    "manifestVersion": 2,
    "preloadComponents": [
      "f9e737b7-f0df-4597-ba8c-3060f82380db"
    ],
    "loaderConfig": {
      "entryModuleId": "sp-webpart-base",
      "internalModuleBaseUrls": [
        "https://localhost:4321/node_modules/@microsoft/sp-webpart-base/"
      ],
      "scriptResources": {
        "sp-webpart-base": {
          "type": "localizedPath",
          "defaultPath": "dist/sp-webpart-base_en-us.js"
        },
        "@ms/sp-telemetry": {
          "type": "component",
          "version": "0.8.24",
          "id": "8217e442-8ed3-41fd-957d-b112e841286a"
        },
        "@ms/sp-load-themed-styles": {
          "type": "component",
          "version": "0.1.2",
          "id": "229b8d08-79f3-438b-8c21-4613fc877abd"
        },
        "@microsoft/sp-component-base": {
          "type": "component",
          "version": "1.11.0",
          "id": "467dc675-7cc5-4709-8aac-78e3b71bd2f6"
        },
        "@microsoft/sp-loader": {
          "type": "component",
          "version": "1.11.0",
          "id": "1c6c9123-7aac-41f3-a376-3caea41ed83f"
        },
        "@microsoft/sp-lodash-subset": {
          "type": "component",
          "version": "1.11.0",
          "id": "73e1dc6c-8441-42cc-ad47-4bd3659f8a3a"
        },
        "@microsoft/sp-core-library": {
          "type": "component",
          "version": "1.11.0",
          "id": "7263c7d0-1d6a-45ec-8d85-d4d1d234171b"
        },
        "@microsoft/sp-page-context": {
          "type": "component",
          "version": "1.11.0",
          "id": "1c4541f7-5c31-41aa-9fa8-fbc9dc14c0a8"
        },
        "@microsoft/load-themed-styles": {
          "type": "component",
          "version": "0.1.2",
          "id": "229b8d08-79f3-438b-8c21-4613fc877abd"
        },
        "@microsoft/sp-diagnostics": {
          "type": "component",
          "version": "1.11.0",
          "id": "78359e4b-07c2-43c6-8d0b-d060b4d577e8"
        },
        "@microsoft/sp-http": {
          "type": "component",
          "version": "1.11.0",
          "id": "c07208f0-ea3b-4c1a-9965-ac1b825211a6"
        },
        "@microsoft/decorators": {
          "type": "component",
          "version": "1.11.0",
          "id": "f97266fb-ccb7-430e-9384-4124d05295d3"
        }
      }
    },
    "isInternal": true
  },
  {
    "id": "c0c518b8-701b-4f6f-956d-5782772bb731",
    "alias": "SPDialog",
    "componentType": "Library",
    "version": "1.11.0",
    "manifestVersion": 2,
    "loaderConfig": {
      "entryModuleId": "sp-dialog",
      "internalModuleBaseUrls": [
        "https://localhost:4321/node_modules/@microsoft/sp-dialog/"
      ],
      "scriptResources": {
        "sp-dialog": {
          "type": "path",
          "path": "dist/sp-dialog.js"
        },
        "@microsoft/sp-application-base": {
          "type": "component",
          "version": "1.11.0",
          "id": "4df9bb86-ab0a-4aab-ab5f-48bf167048fb"
        },
        "@microsoft/office-ui-fabric-react-bundle": {
          "type": "component",
          "version": "1.11.0",
          "id": "02a01e42-69ab-403d-8a16-acd128661f8e"
        },
        "@microsoft/sp-core-library": {
          "type": "component",
          "version": "1.11.0",
          "id": "7263c7d0-1d6a-45ec-8d85-d4d1d234171b"
        },
        "react": {
          "type": "component",
          "version": "16.8.5",
          "id": "0d910c1c-13b9-4e1c-9aa4-b008c5e42d7d",
          "failoverPath": "node_modules/react/dist/react.js"
        },
        "react-dom": {
          "type": "component",
          "version": "16.8.5",
          "id": "aa0a46ec-1505-43cd-a44a-93f3a5aa460a",
          "failoverPath": "node_modules/react-dom/dist/react-dom.js"
        },
        "@microsoft/load-themed-styles": {
          "type": "component",
          "version": "0.1.2",
          "id": "229b8d08-79f3-438b-8c21-4613fc877abd"
        },
        "@microsoft/sp-diagnostics": {
          "type": "component",
          "version": "1.11.0",
          "id": "78359e4b-07c2-43c6-8d0b-d060b4d577e8"
        },
        "@microsoft/decorators": {
          "type": "component",
          "version": "1.11.0",
          "id": "f97266fb-ccb7-430e-9384-4124d05295d3"
        }
      }
    },
    "isInternal": true
  },
  {
    "id": "29bd516f-4ece-40b7-8028-597cbc65a223",
    "alias": "SpOfficeUIFabricCore",
    "componentType": "Library",
    "version": "1.11.0",
    "manifestVersion": 2,
    "loaderConfig": {
      "entryModuleId": "office-ui-fabric-core",
      "internalModuleBaseUrls": [
        "https://localhost:4321/node_modules/@microsoft/sp-office-ui-fabric-core/"
      ],
      "scriptResources": {
        "office-ui-fabric-core": {
          "type": "path",
          "path": "dist/office-ui-fabric-core.js"
        },
        "@microsoft/load-themed-styles": {
          "type": "component",
          "version": "0.1.2",
          "id": "229b8d08-79f3-438b-8c21-4613fc877abd"
        }
      }
    },
    "isInternal": true
  },
  {
    "id": "1b3eef7e-c9b2-409b-bb47-3d2299e7057a",
    "alias": "SiliconReefBrandingApplicationCustomizer",
    "componentType": "Extension",
    "extensionType": "ApplicationCustomizer",
    "version": "0.0.1",
    "manifestVersion": 2,
    "requiresCustomScript": false,
    "loaderConfig": {
      "entryModuleId": "silicon-reef-branding-application-customizer",
      "internalModuleBaseUrls": [
        "https://localhost:4321/"
      ],
      "scriptResources": {
        "silicon-reef-branding-application-customizer": {
          "type": "path",
          "path": "dist/silicon-reef-branding-application-customizer.js"
        },
        "@microsoft/sp-application-base": {
          "type": "component",
          "version": "1.11.0",
          "id": "4df9bb86-ab0a-4aab-ab5f-48bf167048fb"
        },
        "@microsoft/decorators": {
          "type": "component",
          "version": "1.11.0",
          "id": "f97266fb-ccb7-430e-9384-4124d05295d3"
        }
      }
    }
  },
  {
    "id": "c1cd1a2b-99c3-4011-b43b-1bf2d2802df2",
    "alias": "SiliconReefBrandingWebPart",
    "componentType": "WebPart",
    "version": "0.0.1",
    "manifestVersion": 2,
    "requiresCustomScript": false,
    "supportedHosts": [
      "SharePointWebPart"
    ],
    "preconfiguredEntries": [
      {
        "groupId": "5c03119e-3074-46fd-976b-c60198311f70",
        "group": {
          "default": "Other"
        },
        "title": {
          "default": "Silicon Reef Branding Customiser"
        },
        "description": {
          "default": "Tool for replacing fonts and branding Modern SharePoint"
        },
        "iconImageUrl": "data:image/png;base64,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",
        "properties": {
          "description": "Branding Customiser"
        }
      }
    ],
    "loaderConfig": {
      "entryModuleId": "silicon-reef-branding-web-part",
      "internalModuleBaseUrls": [
        "https://localhost:4321/"
      ],
      "scriptResources": {
        "silicon-reef-branding-web-part": {
          "type": "path",
          "path": "dist/silicon-reef-branding-web-part.js"
        },
        "PropertyControlStrings": {
          "defaultPath": "node_modules/@pnp/spfx-property-controls/lib/loc/en-us.js",
          "type": "localizedPath",
          "paths": {
            "bg-BG": "node_modules/@pnp/spfx-property-controls/lib/loc/bg-bg.js",
            "ca-ES": "node_modules/@pnp/spfx-property-controls/lib/loc/ca-es.js",
            "da-DK": "node_modules/@pnp/spfx-property-controls/lib/loc/da-dk.js",
            "fo": "node_modules/@pnp/spfx-property-controls/lib/loc/da-dk.js",
            "kl": "node_modules/@pnp/spfx-property-controls/lib/loc/da-dk.js",
            "de-DE": "node_modules/@pnp/spfx-property-controls/lib/loc/de-de.js",
            "de": "node_modules/@pnp/spfx-property-controls/lib/loc/de-de.js",
            "dsb": "node_modules/@pnp/spfx-property-controls/lib/loc/de-de.js",
            "rm": "node_modules/@pnp/spfx-property-controls/lib/loc/de-de.js",
            "hsb": "node_modules/@pnp/spfx-property-controls/lib/loc/de-de.js",
            "el-GR": "node_modules/@pnp/spfx-property-controls/lib/loc/el-gr.js",
            "el": "node_modules/@pnp/spfx-property-controls/lib/loc/el-gr.js",
            "en-US": "node_modules/@pnp/spfx-property-controls/lib/loc/en-us.js",
            "bn": "node_modules/@pnp/spfx-property-controls/lib/loc/en-us.js",
            "chr": "node_modules/@pnp/spfx-property-controls/lib/loc/en-us.js",
            "dv": "node_modules/@pnp/spfx-property-controls/lib/loc/en-us.js",
            "div": "node_modules/@pnp/spfx-property-controls/lib/loc/en-us.js",
            "en": "node_modules/@pnp/spfx-property-controls/lib/loc/en-us.js",
            "fil": "node_modules/@pnp/spfx-property-controls/lib/loc/en-us.js",
            "haw": "node_modules/@pnp/spfx-property-controls/lib/loc/en-us.js",
            "iu": "node_modules/@pnp/spfx-property-controls/lib/loc/en-us.js",
            "lo": "node_modules/@pnp/spfx-property-controls/lib/loc/en-us.js",
            "moh": "node_modules/@pnp/spfx-property-controls/lib/loc/en-us.js",
            "es-ES": "node_modules/@pnp/spfx-property-controls/lib/loc/es-es.js",
            "gn": "node_modules/@pnp/spfx-property-controls/lib/loc/es-es.js",
            "quz": "node_modules/@pnp/spfx-property-controls/lib/loc/es-es.js",
            "es": "node_modules/@pnp/spfx-property-controls/lib/loc/es-es.js",
            "ca-ES-valencia": "node_modules/@pnp/spfx-property-controls/lib/loc/es-es.js",
            "et-EE": "node_modules/@pnp/spfx-property-controls/lib/loc/et-ee.js",
            "fi-FI": "node_modules/@pnp/spfx-property-controls/lib/loc/fi-fi.js",
            "sms": "node_modules/@pnp/spfx-property-controls/lib/loc/fi-fi.js",
            "se-FI": "node_modules/@pnp/spfx-property-controls/lib/loc/fi-fi.js",
            "se-Latn-FI": "node_modules/@pnp/spfx-property-controls/lib/loc/fi-fi.js",
            "fr-FR": "node_modules/@pnp/spfx-property-controls/lib/loc/fr-fr.js",
            "gsw": "node_modules/@pnp/spfx-property-controls/lib/loc/fr-fr.js",
            "br": "node_modules/@pnp/spfx-property-controls/lib/loc/fr-fr.js",
            "tzm-Tfng": "node_modules/@pnp/spfx-property-controls/lib/loc/fr-fr.js",
            "co": "node_modules/@pnp/spfx-property-controls/lib/loc/fr-fr.js",
            "fr": "node_modules/@pnp/spfx-property-controls/lib/loc/fr-fr.js",
            "ff": "node_modules/@pnp/spfx-property-controls/lib/loc/fr-fr.js",
            "lb": "node_modules/@pnp/spfx-property-controls/lib/loc/fr-fr.js",
            "mg": "node_modules/@pnp/spfx-property-controls/lib/loc/fr-fr.js",
            "oc": "node_modules/@pnp/spfx-property-controls/lib/loc/fr-fr.js",
            "zgh": "node_modules/@pnp/spfx-property-controls/lib/loc/fr-fr.js",
            "wo": "node_modules/@pnp/spfx-property-controls/lib/loc/fr-fr.js",
            "it-IT": "node_modules/@pnp/spfx-property-controls/lib/loc/it-it.js",
            "it": "node_modules/@pnp/spfx-property-controls/lib/loc/it-it.js",
            "ja-JP": "node_modules/@pnp/spfx-property-controls/lib/loc/ja-jp.js",
            "lt-LT": "node_modules/@pnp/spfx-property-controls/lib/loc/lt-lt.js",
            "lv-LV": "node_modules/@pnp/spfx-property-controls/lib/loc/lv-lv.js",
            "nb-NO": "node_modules/@pnp/spfx-property-controls/lib/loc/nb-no.js",
            "no": "node_modules/@pnp/spfx-property-controls/lib/loc/no.js",
            "nb": "node_modules/@pnp/spfx-property-controls/lib/loc/nb-no.js",
            "nn": "node_modules/@pnp/spfx-property-controls/lib/loc/nb-no.js",
            "smj-NO": "node_modules/@pnp/spfx-property-controls/lib/loc/nb-no.js",
            "smj-Latn-NO": "node_modules/@pnp/spfx-property-controls/lib/loc/nb-no.js",
            "se-NO": "node_modules/@pnp/spfx-property-controls/lib/loc/nb-no.js",
            "se-Latn-NO": "node_modules/@pnp/spfx-property-controls/lib/loc/nb-no.js",
            "sma-Latn": "node_modules/@pnp/spfx-property-controls/lib/loc/nb-no.js",
            "sma-NO": "node_modules/@pnp/spfx-property-controls/lib/loc/nb-no.js",
            "nl-NL": "node_modules/@pnp/spfx-property-controls/lib/loc/nl-nl.js",
            "nl": "node_modules/@pnp/spfx-property-controls/lib/loc/nl-nl.js",
            "fy": "node_modules/@pnp/spfx-property-controls/lib/loc/nl-nl.js",
            "pl-PL": "node_modules/@pnp/spfx-property-controls/lib/loc/pl-pl.js",
            "pt-PT": "node_modules/@pnp/spfx-property-controls/lib/loc/pt-pt.js",
            "pt": "node_modules/@pnp/spfx-property-controls/lib/loc/pt-pt.js",
            "ro-RO": "node_modules/@pnp/spfx-property-controls/lib/loc/ro-ro.js",
            "ro": "node_modules/@pnp/spfx-property-controls/lib/loc/ro-ro.js",
            "ru-RU": "node_modules/@pnp/spfx-property-controls/lib/loc/ru-ru.js",
            "ru": "node_modules/@pnp/spfx-property-controls/lib/loc/ru-ru.js",
            "ba": "node_modules/@pnp/spfx-property-controls/lib/loc/ru-ru.js",
            "be": "node_modules/@pnp/spfx-property-controls/lib/loc/ru-ru.js",
            "ky": "node_modules/@pnp/spfx-property-controls/lib/loc/ru-ru.js",
            "mn": "node_modules/@pnp/spfx-property-controls/lib/loc/ru-ru.js",
            "sah": "node_modules/@pnp/spfx-property-controls/lib/loc/ru-ru.js",
            "tg": "node_modules/@pnp/spfx-property-controls/lib/loc/ru-ru.js",
            "tt": "node_modules/@pnp/spfx-property-controls/lib/loc/ru-ru.js",
            "tk": "node_modules/@pnp/spfx-property-controls/lib/loc/ru-ru.js",
            "sk-SK": "node_modules/@pnp/spfx-property-controls/lib/loc/sk-sk.js",
            "sk": "node_modules/@pnp/spfx-property-controls/lib/loc/sk-sk.js",
            "sr-Latn-RS": "node_modules/@pnp/spfx-property-controls/lib/loc/sr-latn-rs.js",
            "sr": "node_modules/@pnp/spfx-property-controls/lib/loc/sr-latn-rs.js",
            "sv-SE": "node_modules/@pnp/spfx-property-controls/lib/loc/sv-se.js",
            "smj": "node_modules/@pnp/spfx-property-controls/lib/loc/sv-se.js",
            "se": "node_modules/@pnp/spfx-property-controls/lib/loc/sv-se.js",
            "sv": "node_modules/@pnp/spfx-property-controls/lib/loc/sv-se.js",
            "sma-SE": "node_modules/@pnp/spfx-property-controls/lib/loc/sv-se.js",
            "sma-Latn-SE": "node_modules/@pnp/spfx-property-controls/lib/loc/sv-se.js",
            "tr-TR": "node_modules/@pnp/spfx-property-controls/lib/loc/tr-tr.js",
            "tr": "node_modules/@pnp/spfx-property-controls/lib/loc/tr-tr.js",
            "vi-VN": "node_modules/@pnp/spfx-property-controls/lib/loc/vi-vn.js",
            "vi": "node_modules/@pnp/spfx-property-controls/lib/loc/vi-vn.js",
            "zh-CN": "node_modules/@pnp/spfx-property-controls/lib/loc/zh-cn.js",
            "zh": "node_modules/@pnp/spfx-property-controls/lib/loc/zh-cn.js",
            "mn-Mong": "node_modules/@pnp/spfx-property-controls/lib/loc/zh-cn.js",
            "bo": "node_modules/@pnp/spfx-property-controls/lib/loc/zh-cn.js",
            "ug": "node_modules/@pnp/spfx-property-controls/lib/loc/zh-cn.js",
            "ii": "node_modules/@pnp/spfx-property-controls/lib/loc/zh-cn.js",
            "zh-TW": "node_modules/@pnp/spfx-property-controls/lib/loc/zh-tw.js",
            "zh-HK": "node_modules/@pnp/spfx-property-controls/lib/loc/zh-tw.js",
            "zh-CHT": "node_modules/@pnp/spfx-property-controls/lib/loc/zh-tw.js",
            "zh-Hant": "node_modules/@pnp/spfx-property-controls/lib/loc/zh-tw.js",
            "zh-MO": "node_modules/@pnp/spfx-property-controls/lib/loc/zh-tw.js"
          }
        },
        "@microsoft/sp-property-pane": {
          "type": "component",
          "version": "1.11.0",
          "id": "f9e737b7-f0df-4597-ba8c-3060f82380db"
        },
        "@microsoft/sp-loader": {
          "type": "component",
          "version": "1.11.0",
          "id": "1c6c9123-7aac-41f3-a376-3caea41ed83f"
        },
        "@microsoft/sp-lodash-subset": {
          "type": "component",
          "version": "1.11.0",
          "id": "73e1dc6c-8441-42cc-ad47-4bd3659f8a3a"
        },
        "@microsoft/sp-core-library": {
          "type": "component",
          "version": "1.11.0",
          "id": "7263c7d0-1d6a-45ec-8d85-d4d1d234171b"
        },
        "@microsoft/sp-webpart-base": {
          "type": "component",
          "version": "1.11.0",
          "id": "974a7777-0990-4136-8fa6-95d80114c2e0"
        },
        "react": {
          "type": "component",
          "version": "16.8.5",
          "id": "0d910c1c-13b9-4e1c-9aa4-b008c5e42d7d",
          "failoverPath": "node_modules/react/dist/react.js"
        },
        "react-dom": {
          "type": "component",
          "version": "16.8.5",
          "id": "aa0a46ec-1505-43cd-a44a-93f3a5aa460a",
          "failoverPath": "node_modules/react-dom/dist/react-dom.js"
        }
      }
    }
  }
];
/**
 * Get the manifest array.
 */
function getManifests() {
    // Clone manifestsArray
    var manifests = JSON.parse(JSON.stringify(MANIFESTS_ARRAY));
    var manifestsFileUrl = __webpack_require__.p;
    if (manifestsFileUrl && manifestsFileUrl !== '') {
        manifests.forEach(function (manifest) {
            if (!manifest.loaderConfig.internalModuleBaseUrls || manifest.loaderConfig.internalModuleBaseUrls.length === 0) {
                manifest.loaderConfig.internalModuleBaseUrls = [manifestsFileUrl];
            }
        });
    }
    else {
        console.error("Unable to determine " + "manifests.js" + " file URL. Using default base URL. " +
            'This is expected if you are running "gulp serve."');
    }
    return manifests;
}
//# sourceMappingURL=manifestsFile.js.map

/***/ })
/******/ ]);
});