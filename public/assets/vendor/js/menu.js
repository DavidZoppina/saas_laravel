/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
/*!********************************************!*\
  !*** ./resources/assets/vendor/js/menu.js ***!
  \********************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Menu": () => (/* binding */ Menu)
/* harmony export */ });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

var TRANSITION_EVENTS = ['transitionend', 'webkitTransitionEnd', 'oTransitionEnd']; // const TRANSITION_PROPERTIES = ['transition', 'MozTransition', 'webkitTransition', 'WebkitTransition', 'OTransition']

var Menu = /*#__PURE__*/function () {
  function Menu(el) {
    var config = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    var _PS = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;

    _classCallCheck(this, Menu);

    this._el = el;
    this._animate = config.animate !== false;
    this._accordion = config.accordion !== false;
    this._closeChildren = Boolean(config.closeChildren);

    this._onOpen = config.onOpen || function () {};

    this._onOpened = config.onOpened || function () {};

    this._onClose = config.onClose || function () {};

    this._onClosed = config.onClosed || function () {};

    this._psScroll = null;
    this._topParent = null;
    this._menuBgClass = null;
    el.classList.add('menu');
    el.classList[this._animate ? 'remove' : 'add']('menu-no-animation'); // check

    el.classList.add('menu-vertical');
    var PerfectScrollbarLib = _PS || window.PerfectScrollbar;

    if (PerfectScrollbarLib) {
      this._scrollbar = new PerfectScrollbarLib(el.querySelector('.menu-inner'), {
        suppressScrollX: true,
        wheelPropagation: !Menu._hasClass('layout-menu-fixed layout-menu-fixed-offcanvas')
      });
      window.Helpers.menuPsScroll = this._scrollbar;
    } else {
      el.querySelector('.menu-inner').classList.add('overflow-auto');
    } // Add data attribute for bg color class of menu


    var menuClassList = el.classList;

    for (var i = 0; i < menuClassList.length; i++) {
      if (menuClassList[i].startsWith('bg-')) {
        this._menuBgClass = menuClassList[i];
      }
    }

    el.setAttribute('data-bg-class', this._menuBgClass);

    this._bindEvents(); // Link menu instance to element


    el.menuInstance = this;
  }

  _createClass(Menu, [{
    key: "_bindEvents",
    value: function _bindEvents() {
      var _this = this;

      // Click Event
      this._evntElClick = function (e) {
        // Find top parent element
        if (e.target.closest('ul') && e.target.closest('ul').classList.contains('menu-inner')) {
          var menuItem = Menu._findParent(e.target, 'menu-item', false); // eslint-disable-next-line prefer-destructuring


          if (menuItem) _this._topParent = menuItem.childNodes[0];
        }

        var toggleLink = e.target.classList.contains('menu-toggle') ? e.target : Menu._findParent(e.target, 'menu-toggle', false);

        if (toggleLink) {
          e.preventDefault();

          if (toggleLink.getAttribute('data-hover') !== 'true') {
            _this.toggle(toggleLink);
          }
        }
      };

      if (window.Helpers.isMobileDevice) this._el.addEventListener('click', this._evntElClick);

      this._evntWindowResize = function () {
        _this.update();

        if (_this._lastWidth !== window.innerWidth) {
          _this._lastWidth = window.innerWidth;

          _this.update();
        }

        var horizontalMenuTemplate = document.querySelector("[data-template^='horizontal-menu']");
        if (!_this._horizontal && !horizontalMenuTemplate) _this.manageScroll();
      };

      window.addEventListener('resize', this._evntWindowResize);
    }
  }, {
    key: "_unbindEvents",
    value: function _unbindEvents() {
      if (this._evntElClick) {
        this._el.removeEventListener('click', this._evntElClick);

        this._evntElClick = null;
      }

      if (this._evntElMouseOver) {
        this._el.removeEventListener('mouseover', this._evntElMouseOver);

        this._evntElMouseOver = null;
      }

      if (this._evntElMouseOut) {
        this._el.removeEventListener('mouseout', this._evntElMouseOut);

        this._evntElMouseOut = null;
      }

      if (this._evntWindowResize) {
        window.removeEventListener('resize', this._evntWindowResize);
        this._evntWindowResize = null;
      }

      if (this._evntBodyClick) {
        document.body.removeEventListener('click', this._evntBodyClick);
        this._evntBodyClick = null;
      }

      if (this._evntInnerMousemove) {
        this._inner.removeEventListener('mousemove', this._evntInnerMousemove);

        this._evntInnerMousemove = null;
      }

      if (this._evntInnerMouseleave) {
        this._inner.removeEventListener('mouseleave', this._evntInnerMouseleave);

        this._evntInnerMouseleave = null;
      }
    }
  }, {
    key: "open",
    value: function open(el) {
      var _this2 = this;

      var closeChildren = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this._closeChildren;

      var item = this._findUnopenedParent(Menu._getItem(el, true), closeChildren);

      if (!item) return;

      var toggleLink = Menu._getLink(item, true);

      Menu._promisify(this._onOpen, this, item, toggleLink, Menu._findMenu(item)).then(function () {
        if (!_this2._horizontal || !Menu._isRoot(item)) {
          if (_this2._animate && !_this2._horizontal) {
            window.requestAnimationFrame(function () {
              return _this2._toggleAnimation(true, item, false);
            });
            if (_this2._accordion) _this2._closeOther(item, closeChildren);
          } else if (_this2._animate) {
            // eslint-disable-next-line no-unused-expressions
            _this2._onOpened && _this2._onOpened(_this2, item, toggleLink, Menu._findMenu(item));
          } else {
            item.classList.add('open'); // eslint-disable-next-line no-unused-expressions

            _this2._onOpened && _this2._onOpened(_this2, item, toggleLink, Menu._findMenu(item));
            if (_this2._accordion) _this2._closeOther(item, closeChildren);
          }
        } else {
          // eslint-disable-next-line no-unused-expressions
          _this2._onOpened && _this2._onOpened(_this2, item, toggleLink, Menu._findMenu(item));
        }
      })["catch"](function () {});
    }
  }, {
    key: "close",
    value: function close(el) {
      var _this3 = this;

      var closeChildren = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this._closeChildren;

      var _autoClose = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

      var item = Menu._getItem(el, true);

      var toggleLink = Menu._getLink(el, true);

      if (!item.classList.contains('open') || item.classList.contains('disabled')) return;

      Menu._promisify(this._onClose, this, item, toggleLink, Menu._findMenu(item), _autoClose).then(function () {
        if (!_this3._horizontal || !Menu._isRoot(item)) {
          if (_this3._animate && !_this3._horizontal) {
            window.requestAnimationFrame(function () {
              return _this3._toggleAnimation(false, item, closeChildren);
            });
          } else {
            item.classList.remove('open');

            if (closeChildren) {
              var opened = item.querySelectorAll('.menu-item.open');

              for (var i = 0, l = opened.length; i < l; i++) {
                opened[i].classList.remove('open');
              }
            } // eslint-disable-next-line no-unused-expressions


            _this3._onClosed && _this3._onClosed(_this3, item, toggleLink, Menu._findMenu(item));
          }
        } else {
          // eslint-disable-next-line no-unused-expressions
          _this3._onClosed && _this3._onClosed(_this3, item, toggleLink, Menu._findMenu(item));
        }
      })["catch"](function () {});
    }
  }, {
    key: "_closeOther",
    value: function _closeOther(item, closeChildren) {
      var opened = Menu._findChild(item.parentNode, ['menu-item', 'open']);

      for (var i = 0, l = opened.length; i < l; i++) {
        if (opened[i] !== item) this.close(opened[i], closeChildren);
      }
    }
  }, {
    key: "toggle",
    value: function toggle(el) {
      var closeChildren = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this._closeChildren;

      var item = Menu._getItem(el, true); // const toggleLink = Menu._getLink(el, true)


      if (item.classList.contains('open')) this.close(item, closeChildren);else this.open(item, closeChildren);
    }
  }, {
    key: "_findUnopenedParent",
    value: function _findUnopenedParent(item, closeChildren) {
      var tree = [];
      var parentItem = null;

      while (item) {
        if (item.classList.contains('disabled')) {
          parentItem = null;
          tree = [];
        } else {
          if (!item.classList.contains('open')) parentItem = item;
          tree.push(item);
        }

        item = Menu._findParent(item, 'menu-item', false);
      }

      if (!parentItem) return null;
      if (tree.length === 1) return parentItem;
      tree = tree.slice(0, tree.indexOf(parentItem));

      for (var i = 0, l = tree.length; i < l; i++) {
        tree[i].classList.add('open');

        if (this._accordion) {
          var openedItems = Menu._findChild(tree[i].parentNode, ['menu-item', 'open']);

          for (var j = 0, k = openedItems.length; j < k; j++) {
            if (openedItems[j] !== tree[i]) {
              openedItems[j].classList.remove('open');

              if (closeChildren) {
                var openedChildren = openedItems[j].querySelectorAll('.menu-item.open');

                for (var x = 0, z = openedChildren.length; x < z; x++) {
                  openedChildren[x].classList.remove('open');
                }
              }
            }
          }
        }
      }

      return parentItem;
    }
  }, {
    key: "_toggleAnimation",
    value: function _toggleAnimation(open, item, closeChildren) {
      var _this4 = this;

      var toggleLink = Menu._getLink(item, true);

      var menu = Menu._findMenu(item);

      Menu._unbindAnimationEndEvent(item);

      var linkHeight = Math.round(toggleLink.getBoundingClientRect().height);
      item.style.overflow = 'hidden';

      var clearItemStyle = function clearItemStyle() {
        item.classList.remove('menu-item-animating');
        item.classList.remove('menu-item-closing');
        item.style.overflow = null;
        item.style.height = null;

        _this4.update();
      };

      if (open) {
        item.style.height = "".concat(linkHeight, "px");
        item.classList.add('menu-item-animating');
        item.classList.add('open');

        Menu._bindAnimationEndEvent(item, function () {
          clearItemStyle();

          _this4._onOpened(_this4, item, toggleLink, menu);
        });

        setTimeout(function () {
          item.style.height = "".concat(linkHeight + Math.round(menu.getBoundingClientRect().height), "px");
        }, 50);
      } else {
        item.style.height = "".concat(linkHeight + Math.round(menu.getBoundingClientRect().height), "px");
        item.classList.add('menu-item-animating');
        item.classList.add('menu-item-closing');

        Menu._bindAnimationEndEvent(item, function () {
          item.classList.remove('open');
          clearItemStyle();

          if (closeChildren) {
            var opened = item.querySelectorAll('.menu-item.open');

            for (var i = 0, l = opened.length; i < l; i++) {
              opened[i].classList.remove('open');
            }
          }

          _this4._onClosed(_this4, item, toggleLink, menu);
        });

        setTimeout(function () {
          item.style.height = "".concat(linkHeight, "px");
        }, 50);
      }
    }
  }, {
    key: "_getItemOffset",
    value: function _getItemOffset(item) {
      var curItem = this._inner.childNodes[0];
      var left = 0;

      while (curItem !== item) {
        if (curItem.tagName) {
          left += Math.round(curItem.getBoundingClientRect().width);
        }

        curItem = curItem.nextSibling;
      }

      return left;
    }
  }, {
    key: "_innerWidth",
    get: function get() {
      var items = this._inner.childNodes;
      var width = 0;

      for (var i = 0, l = items.length; i < l; i++) {
        if (items[i].tagName) {
          width += Math.round(items[i].getBoundingClientRect().width);
        }
      }

      return width;
    }
  }, {
    key: "_innerPosition",
    get: function get() {
      return parseInt(this._inner.style[this._rtl ? 'marginRight' : 'marginLeft'] || '0px', 10);
    },
    set: function set(value) {
      this._inner.style[this._rtl ? 'marginRight' : 'marginLeft'] = "".concat(value, "px");
      return value;
    }
  }, {
    key: "closeAll",
    value: function closeAll() {
      var closeChildren = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this._closeChildren;

      var opened = this._el.querySelectorAll('.menu-inner > .menu-item.open');

      for (var i = 0, l = opened.length; i < l; i++) {
        this.close(opened[i], closeChildren);
      }
    }
  }, {
    key: "update",
    value: function update() {
      if (this._scrollbar) {
        this._scrollbar.update();
      }
    }
  }, {
    key: "manageScroll",
    value: function manageScroll() {
      var _window = window,
          PerfectScrollbar = _window.PerfectScrollbar;
      var menuInner = document.querySelector('.menu-inner');

      if (window.innerWidth < window.Helpers.LAYOUT_BREAKPOINT) {
        if (this._scrollbar !== null) {
          // window.Helpers.menuPsScroll.destroy()
          this._scrollbar.destroy();

          this._scrollbar = null;
        }

        menuInner.classList.add('overflow-auto');
      } else {
        if (this._scrollbar === null) {
          var menuScroll = new PerfectScrollbar(document.querySelector('.menu-inner'), {
            suppressScrollX: true,
            wheelPropagation: false
          });
          this._scrollbar = menuScroll;
        }

        menuInner.classList.remove('overflow-auto');
      }
    }
  }, {
    key: "destroy",
    value: function destroy() {
      if (!this._el) return;

      this._unbindEvents();

      var items = this._el.querySelectorAll('.menu-item');

      for (var i = 0, l = items.length; i < l; i++) {
        Menu._unbindAnimationEndEvent(items[i]);

        items[i].classList.remove('menu-item-animating');
        items[i].classList.remove('open');
        items[i].style.overflow = null;
        items[i].style.height = null;
      }

      var menus = this._el.querySelectorAll('.menu-menu');

      for (var i2 = 0, l2 = menus.length; i2 < l2; i2++) {
        menus[i2].style.marginRight = null;
        menus[i2].style.marginLeft = null;
      }

      this._el.classList.remove('menu-no-animation');

      if (this._wrapper) {
        this._prevBtn.parentNode.removeChild(this._prevBtn);

        this._nextBtn.parentNode.removeChild(this._nextBtn);

        this._wrapper.parentNode.insertBefore(this._inner, this._wrapper);

        this._wrapper.parentNode.removeChild(this._wrapper);

        this._inner.style.marginLeft = null;
        this._inner.style.marginRight = null;
      }

      this._el.menuInstance = null;
      delete this._el.menuInstance;
      this._el = null;
      this._animate = null;
      this._accordion = null;
      this._closeChildren = null;
      this._onOpen = null;
      this._onOpened = null;
      this._onClose = null;
      this._onClosed = null;

      if (this._scrollbar) {
        this._scrollbar.destroy();

        this._scrollbar = null;
      }

      this._inner = null;
      this._prevBtn = null;
      this._wrapper = null;
      this._nextBtn = null;
    }
  }], [{
    key: "childOf",
    value: function childOf(
    /* child node */
    c,
    /* parent node */
    p) {
      // returns boolean
      if (c.parentNode) {
        while ((c = c.parentNode) && c !== p) {
          ;
        }

        return !!c;
      }

      return false;
    }
  }, {
    key: "_isRoot",
    value: function _isRoot(item) {
      return !Menu._findParent(item, 'menu-item', false);
    }
  }, {
    key: "_findParent",
    value: function _findParent(el, cls) {
      var throwError = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
      if (el.tagName.toUpperCase() === 'BODY') return null;
      el = el.parentNode;

      while (el.tagName.toUpperCase() !== 'BODY' && !el.classList.contains(cls)) {
        el = el.parentNode;
      }

      el = el.tagName.toUpperCase() !== 'BODY' ? el : null;
      if (!el && throwError) throw new Error("Cannot find `.".concat(cls, "` parent element"));
      return el;
    }
  }, {
    key: "_findChild",
    value: function _findChild(el, cls) {
      var items = el.childNodes;
      var found = [];

      for (var i = 0, l = items.length; i < l; i++) {
        if (items[i].classList) {
          var passed = 0;

          for (var j = 0; j < cls.length; j++) {
            if (items[i].classList.contains(cls[j])) passed += 1;
          }

          if (cls.length === passed) found.push(items[i]);
        }
      }

      return found;
    }
  }, {
    key: "_findMenu",
    value: function _findMenu(item) {
      var curEl = item.childNodes[0];
      var menu = null;

      while (curEl && !menu) {
        if (curEl.classList && curEl.classList.contains('menu-sub')) menu = curEl;
        curEl = curEl.nextSibling;
      }

      if (!menu) throw new Error('Cannot find `.menu-sub` element for the current `.menu-toggle`');
      return menu;
    } // Has class

  }, {
    key: "_hasClass",
    value: function _hasClass(cls) {
      var el = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : window.Helpers.ROOT_EL;
      var result = false;
      cls.split(' ').forEach(function (c) {
        if (el.classList.contains(c)) result = true;
      });
      return result;
    }
  }, {
    key: "_getItem",
    value: function _getItem(el, toggle) {
      var item = null;
      var selector = toggle ? 'menu-toggle' : 'menu-link';

      if (el.classList.contains('menu-item')) {
        if (Menu._findChild(el, [selector]).length) item = el;
      } else if (el.classList.contains(selector)) {
        item = el.parentNode.classList.contains('menu-item') ? el.parentNode : null;
      }

      if (!item) {
        throw new Error("".concat(toggle ? 'Toggable ' : '', "`.menu-item` element not found."));
      }

      return item;
    }
  }, {
    key: "_getLink",
    value: function _getLink(el, toggle) {
      var found = [];
      var selector = toggle ? 'menu-toggle' : 'menu-link';
      if (el.classList.contains(selector)) found = [el];else if (el.classList.contains('menu-item')) found = Menu._findChild(el, [selector]);
      if (!found.length) throw new Error("`".concat(selector, "` element not found."));
      return found[0];
    }
  }, {
    key: "_bindAnimationEndEvent",
    value: function _bindAnimationEndEvent(el, handler) {
      var cb = function cb(e) {
        if (e.target !== el) return;

        Menu._unbindAnimationEndEvent(el);

        handler(e);
      };

      var duration = window.getComputedStyle(el).transitionDuration;
      duration = parseFloat(duration) * (duration.indexOf('ms') !== -1 ? 1 : 1000);
      el._menuAnimationEndEventCb = cb;
      TRANSITION_EVENTS.forEach(function (ev) {
        return el.addEventListener(ev, el._menuAnimationEndEventCb, false);
      });
      el._menuAnimationEndEventTimeout = setTimeout(function () {
        cb({
          target: el
        });
      }, duration + 50);
    }
  }, {
    key: "_promisify",
    value: function _promisify(fn) {
      for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        args[_key - 1] = arguments[_key];
      }

      var result = fn.apply(void 0, args);

      if (result instanceof Promise) {
        return result;
      }

      if (result === false) {
        return Promise.reject();
      }

      return Promise.resolve();
    }
  }, {
    key: "_unbindAnimationEndEvent",
    value: function _unbindAnimationEndEvent(el) {
      var cb = el._menuAnimationEndEventCb;

      if (el._menuAnimationEndEventTimeout) {
        clearTimeout(el._menuAnimationEndEventTimeout);
        el._menuAnimationEndEventTimeout = null;
      }

      if (!cb) return;
      TRANSITION_EVENTS.forEach(function (ev) {
        return el.removeEventListener(ev, cb, false);
      });
      el._menuAnimationEndEventCb = null;
    }
  }, {
    key: "setDisabled",
    value: function setDisabled(el, disabled) {
      Menu._getItem(el, false).classList[disabled ? 'add' : 'remove']('disabled');
    }
  }, {
    key: "isActive",
    value: function isActive(el) {
      return Menu._getItem(el, false).classList.contains('active');
    }
  }, {
    key: "isOpened",
    value: function isOpened(el) {
      return Menu._getItem(el, false).classList.contains('open');
    }
  }, {
    key: "isDisabled",
    value: function isDisabled(el) {
      return Menu._getItem(el, false).classList.contains('disabled');
    }
  }]);

  return Menu;
}();


var __webpack_export_target__ = window;
for(var i in __webpack_exports__) __webpack_export_target__[i] = __webpack_exports__[i];
if(__webpack_exports__.__esModule) Object.defineProperty(__webpack_export_target__, "__esModule", { value: true });
/******/ })()
;