// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"../node_modules/parcel-bundler/src/builtins/bundle-url.js":[function(require,module,exports) {
var bundleURL = null;

function getBundleURLCached() {
  if (!bundleURL) {
    bundleURL = getBundleURL();
  }

  return bundleURL;
}

function getBundleURL() {
  // Attempt to find the URL of the current script and use that as the base URL
  try {
    throw new Error();
  } catch (err) {
    var matches = ('' + err.stack).match(/(https?|file|ftp|chrome-extension|moz-extension):\/\/[^)\n]+/g);

    if (matches) {
      return getBaseURL(matches[0]);
    }
  }

  return '/';
}

function getBaseURL(url) {
  return ('' + url).replace(/^((?:https?|file|ftp|chrome-extension|moz-extension):\/\/.+)\/[^/]+$/, '$1') + '/';
}

exports.getBundleURL = getBundleURLCached;
exports.getBaseURL = getBaseURL;
},{}],"../node_modules/parcel-bundler/src/builtins/css-loader.js":[function(require,module,exports) {
var bundle = require('./bundle-url');

function updateLink(link) {
  var newLink = link.cloneNode();

  newLink.onload = function () {
    link.remove();
  };

  newLink.href = link.href.split('?')[0] + '?' + Date.now();
  link.parentNode.insertBefore(newLink, link.nextSibling);
}

var cssTimeout = null;

function reloadCSS() {
  if (cssTimeout) {
    return;
  }

  cssTimeout = setTimeout(function () {
    var links = document.querySelectorAll('link[rel="stylesheet"]');

    for (var i = 0; i < links.length; i++) {
      if (bundle.getBaseURL(links[i].href) === bundle.getBundleURL()) {
        updateLink(links[i]);
      }
    }

    cssTimeout = null;
  }, 50);
}

module.exports = reloadCSS;
},{"./bundle-url":"../node_modules/parcel-bundler/src/builtins/bundle-url.js"}],"sass/main.scss":[function(require,module,exports) {
var reloadCSS = require('_css_loader');

module.hot.dispose(reloadCSS);
module.hot.accept(reloadCSS);
},{"./..\\images\\img-hero\\milk-tablet.png":[["milk-tablet.19bdcaa8.png","images/img-hero/milk-tablet.png"],"images/img-hero/milk-tablet.png"],"./..\\images\\img-hero\\milk-tablet@2x.png":[["milk-tablet@2x.7e932682.png","images/img-hero/milk-tablet@2x.png"],"images/img-hero/milk-tablet@2x.png"],"./..\\images\\img-hero\\milk-desctop.png":[["milk-desctop.4da36299.png","images/img-hero/milk-desctop.png"],"images/img-hero/milk-desctop.png"],"./..\\images\\img-hero\\milk-desctop@2x.png":[["milk-desctop@2x.6ac9bea3.png","images/img-hero/milk-desctop@2x.png"],"images/img-hero/milk-desctop@2x.png"],"./..\\images\\products\\ellipse.png":[["ellipse.04cd3a7b.png","images/products/ellipse.png"],"images/products/ellipse.png"],"./..\\images\\products\\ice-mobile.png":[["ice-mobile.610b6e9a.png","images/products/ice-mobile.png"],"images/products/ice-mobile.png"],"./..\\images\\products\\ice-mobile@2x.png":[["ice-mobile@2x.09018647.png","images/products/ice-mobile@2x.png"],"images/products/ice-mobile@2x.png"],"./..\\images\\products\\coffee-mobile.png":[["coffee-mobile.28d58f27.png","images/products/coffee-mobile.png"],"images/products/coffee-mobile.png"],"./..\\images\\products\\coffee-mobile@2x.png":[["coffee-mobile@2x.4b84d631.png","images/products/coffee-mobile@2x.png"],"images/products/coffee-mobile@2x.png"],"./..\\images\\products\\milkshakes-mobile.png":[["milkshakes-mobile.a6a0c564.png","images/products/milkshakes-mobile.png"],"images/products/milkshakes-mobile.png"],"./..\\images\\products\\milkshakes-mobile@2x.png":[["milkshakes-mobile@2x.99565f67.png","images/products/milkshakes-mobile@2x.png"],"images/products/milkshakes-mobile@2x.png"],"./..\\images\\products\\ice-tablet.png":[["ice-tablet.82df6ac8.png","images/products/ice-tablet.png"],"images/products/ice-tablet.png"],"./..\\images\\products\\ice-tablet@2x.png":[["ice-tablet@2x.675834ad.png","images/products/ice-tablet@2x.png"],"images/products/ice-tablet@2x.png"],"./..\\images\\products\\coffee-tablet.png":[["coffee-tablet.827cf448.png","images/products/coffee-tablet.png"],"images/products/coffee-tablet.png"],"./..\\images\\products\\coffee-tablet@2x.png":[["coffee-tablet@2x.ab75787d.png","images/products/coffee-tablet@2x.png"],"images/products/coffee-tablet@2x.png"],"./..\\images\\products\\milkshakes-tablet.png":[["milkshakes-tablet.5438a269.png","images/products/milkshakes-tablet.png"],"images/products/milkshakes-tablet.png"],"./..\\images\\products\\milkshakes-tablet@2x.png":[["milkshakes-tablet@2x.39b681e5.png","images/products/milkshakes-tablet@2x.png"],"images/products/milkshakes-tablet@2x.png"],"./..\\images\\products\\ice-desctop.png":[["ice-desctop.3842e368.png","images/products/ice-desctop.png"],"images/products/ice-desctop.png"],"./..\\images\\products\\ice-desctop@2x.png":[["ice-desctop@2x.6420d33a.png","images/products/ice-desctop@2x.png"],"images/products/ice-desctop@2x.png"],"./..\\images\\products\\coffee-desctop.png":[["coffee-desctop.597d08f9.png","images/products/coffee-desctop.png"],"images/products/coffee-desctop.png"],"./..\\images\\products\\coffee-desctop@2x.png":[["coffee-desctop@2x.a2f84b6d.png","images/products/coffee-desctop@2x.png"],"images/products/coffee-desctop@2x.png"],"./..\\images\\products\\milkshakes-desctop.png":[["milkshakes-desctop.bdc3dc21.png","images/products/milkshakes-desctop.png"],"images/products/milkshakes-desctop.png"],"./..\\images\\products\\milkshakes-desctop@2x.png":[["milkshakes-desctop@2x.8258d5d8.png","images/products/milkshakes-desctop@2x.png"],"images/products/milkshakes-desctop@2x.png"],"./..\\images\\img-advantages\\milkbg-mobile.png":[["milkbg-mobile.b6a666a3.png","images/img-advantages/milkbg-mobile.png"],"images/img-advantages/milkbg-mobile.png"],"./..\\images\\img-advantages\\milkbg-mobile@2x.png":[["milkbg-mobile@2x.f710e196.png","images/img-advantages/milkbg-mobile@2x.png"],"images/img-advantages/milkbg-mobile@2x.png"],"./..\\images\\img-advantages\\milkbg-desctop.png":[["milkbg-desctop.3638da41.png","images/img-advantages/milkbg-desctop.png"],"images/img-advantages/milkbg-desctop.png"],"./..\\images\\img-advantages\\milkbg-desctop@2x.png":[["milkbg-desctop@2x.45a0136a.png","images/img-advantages/milkbg-desctop@2x.png"],"images/img-advantages/milkbg-desctop@2x.png"],"./..\\images\\img-advantages\\icon-mobile1.png":[["icon-mobile1.8441dcd2.png","images/img-advantages/icon-mobile1.png"],"images/img-advantages/icon-mobile1.png"],"./..\\images\\img-advantages\\icon-mobile2.png":[["icon-mobile2.3c750513.png","images/img-advantages/icon-mobile2.png"],"images/img-advantages/icon-mobile2.png"],"./..\\images\\img-advantages\\icon-mobile3.png":[["icon-mobile3.a3dd37f9.png","images/img-advantages/icon-mobile3.png"],"images/img-advantages/icon-mobile3.png"],"./..\\images\\img-advantages\\icon-mobile1@2x.png":[["icon-mobile1@2x.364a938d.png","images/img-advantages/icon-mobile1@2x.png"],"images/img-advantages/icon-mobile1@2x.png"],"./..\\images\\img-advantages\\icon-mobile2@2x.png":[["icon-mobile2@2x.b7dfcc4c.png","images/img-advantages/icon-mobile2@2x.png"],"images/img-advantages/icon-mobile2@2x.png"],"./..\\images\\img-advantages\\icon-mobile3@2x.png":[["icon-mobile3@2x.9cdc04ad.png","images/img-advantages/icon-mobile3@2x.png"],"images/img-advantages/icon-mobile3@2x.png"],"./..\\images\\img-advantages\\icon-tablet1.png":[["icon-tablet1.29b26557.png","images/img-advantages/icon-tablet1.png"],"images/img-advantages/icon-tablet1.png"],"./..\\images\\img-advantages\\icon-tablet2.png":[["icon-tablet2.a8a7d30e.png","images/img-advantages/icon-tablet2.png"],"images/img-advantages/icon-tablet2.png"],"./..\\images\\img-advantages\\icon-tablet3.png":[["icon-tablet3.dd8cc990.png","images/img-advantages/icon-tablet3.png"],"images/img-advantages/icon-tablet3.png"],"./..\\images\\img-advantages\\icon-tablet1@2x.png":[["icon-tablet1@2x.ccc21844.png","images/img-advantages/icon-tablet1@2x.png"],"images/img-advantages/icon-tablet1@2x.png"],"./..\\images\\img-advantages\\icon-tablet2@2x.png":[["icon-tablet2@2x.19ec6a05.png","images/img-advantages/icon-tablet2@2x.png"],"images/img-advantages/icon-tablet2@2x.png"],"./..\\images\\img-advantages\\icon-tablet3@2x.png":[["icon-tablet3@2x.d68f1532.png","images/img-advantages/icon-tablet3@2x.png"],"images/img-advantages/icon-tablet3@2x.png"],"./..\\images\\img-advantages\\icon-desctop1.png":[["icon-desctop1.a056eb37.png","images/img-advantages/icon-desctop1.png"],"images/img-advantages/icon-desctop1.png"],"./..\\images\\img-advantages\\icon-desctop2.png":[["icon-desctop2.96a9c0a8.png","images/img-advantages/icon-desctop2.png"],"images/img-advantages/icon-desctop2.png"],"./..\\images\\img-advantages\\icon-desctop3.png":[["icon-desctop3.a140d8e1.png","images/img-advantages/icon-desctop3.png"],"images/img-advantages/icon-desctop3.png"],"./..\\images\\img-advantages\\icon-desctop1@2x.png":[["icon-desctop1@2x.1af6c258.png","images/img-advantages/icon-desctop1@2x.png"],"images/img-advantages/icon-desctop1@2x.png"],"./..\\images\\img-advantages\\icon-desctop2@2x.png":[["icon-desctop2@2x.8fc2f5f5.png","images/img-advantages/icon-desctop2@2x.png"],"images/img-advantages/icon-desctop2@2x.png"],"./..\\images\\img-advantages\\icon-desctop3@2x.png":[["icon-desctop3@2x.2f6a8da1.png","images/img-advantages/icon-desctop3@2x.png"],"images/img-advantages/icon-desctop3@2x.png"],"./..\\images\\img-customer\\home.svg":[["home.29f6d261.svg","images/img-customer/home.svg"],"images/img-customer/home.svg"],"./..\\images\\img-contacts\\bg-contact.png":[["bg-contact.caf6f0f7.png","images/img-contacts/bg-contact.png"],"images/img-contacts/bg-contact.png"],"./..\\images\\img-contacts\\bg-contact@2x.png":[["bg-contact@2x.66b856d9.png","images/img-contacts/bg-contact@2x.png"],"images/img-contacts/bg-contact@2x.png"],"_css_loader":"../node_modules/parcel-bundler/src/builtins/css-loader.js"}],"index.js":[function(require,module,exports) {
"use strict";

require("./sass/main.scss");
},{"./sass/main.scss":"sass/main.scss"}],"../node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "49780" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["../node_modules/parcel-bundler/src/builtins/hmr-runtime.js","index.js"], null)
//# sourceMappingURL=/src.e31bb0bc.js.map