'use strict';

var jsxRuntime = require('react/jsx-runtime');

function styleInject(css, ref) {
  if ( ref === void 0 ) ref = {};
  var insertAt = ref.insertAt;

  if (!css || typeof document === 'undefined') { return; }

  var head = document.head || document.getElementsByTagName('head')[0];
  var style = document.createElement('style');
  style.type = 'text/css';

  if (insertAt === 'top') {
    if (head.firstChild) {
      head.insertBefore(style, head.firstChild);
    } else {
      head.appendChild(style);
    }
  } else {
    head.appendChild(style);
  }

  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    style.appendChild(document.createTextNode(css));
  }
}

var css_248z = ".index-module_compo__ken2Y {\n  color: red;\n}";
var styles = {"compo":"index-module_compo__ken2Y"};
styleInject(css_248z);

var sum = function (a, b) {
  return a + b;
};

function Component() {
  return /*#__PURE__*/jsxRuntime.jsxs("div", {
    className: styles.compo,
    children: ["hello", sum(1, 2)]
  });
}

module.exports = Component;
//# sourceMappingURL=index.js.map
