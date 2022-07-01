/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/_components.js":
/*!*******************************!*\
  !*** ./src/js/_components.js ***!
  \*******************************/
/***/ (() => {



/***/ }),

/***/ "./src/js/_functions.js":
/*!******************************!*\
  !*** ./src/js/_functions.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _functions_burger__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./functions/burger */ "./src/js/functions/burger.js");
/* harmony import */ var _functions_burger__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_functions_burger__WEBPACK_IMPORTED_MODULE_0__);


/***/ }),

/***/ "./src/js/_vars.js":
/*!*************************!*\
  !*** ./src/js/_vars.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  windowEl: window,
  documentEl: document,
  htmlEl: document.documentElement,
  bodyEl: document.body
});

/***/ }),

/***/ "./src/js/_vendor.js":
/*!***************************!*\
  !*** ./src/js/_vendor.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _vendor_focus_visible_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./vendor/focus-visible.js */ "./src/js/vendor/focus-visible.js");
/* harmony import */ var _vendor_focus_visible_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_vendor_focus_visible_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _vendor_choices_min_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./vendor/choices.min.js */ "./src/js/vendor/choices.min.js");
/* harmony import */ var _vendor_choices_min_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_vendor_choices_min_js__WEBPACK_IMPORTED_MODULE_1__);



/***/ }),

/***/ "./src/js/functions/burger.js":
/*!************************************!*\
  !*** ./src/js/functions/burger.js ***!
  \************************************/
/***/ (() => {

(function () {
  var _document, _document2;

  var burger = (_document = document) === null || _document === void 0 ? void 0 : _document.querySelector('[data-burger]');
  var menu = (_document2 = document) === null || _document2 === void 0 ? void 0 : _document2.querySelector('[data-menu]');
  var btns = document.querySelector('.header__btns');
  var body = document.querySelector('body');
  burger === null || burger === void 0 ? void 0 : burger.addEventListener('click', function (e) {
    burger === null || burger === void 0 ? void 0 : burger.classList.toggle('burger--active');
    menu === null || menu === void 0 ? void 0 : menu.classList.toggle('menu--active');
    btns === null || btns === void 0 ? void 0 : btns.classList.toggle('active');
    body === null || body === void 0 ? void 0 : body.classList.toggle('active');
  });
})();

/***/ }),

/***/ "./src/js/vendor/choices.min.js":
/*!**************************************!*\
  !*** ./src/js/vendor/choices.min.js ***!
  \**************************************/
/***/ (() => {

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

/*! For license information please see choices.min.js.LICENSE.txt */
!function () {
  "use strict";

  var e = {
    282: function _(e, t, i) {
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.clearChoices = t.activateChoices = t.filterChoices = t.addChoice = void 0;
      var n = i(883);
      t.addChoice = function (e) {
        var t = e.value,
            i = e.label,
            s = e.id,
            r = e.groupId,
            o = e.disabled,
            a = e.elementId,
            c = e.customProperties,
            l = e.placeholder,
            h = e.keyCode;
        return {
          type: n.ACTION_TYPES.ADD_CHOICE,
          value: t,
          label: i,
          id: s,
          groupId: r,
          disabled: o,
          elementId: a,
          customProperties: c,
          placeholder: l,
          keyCode: h
        };
      }, t.filterChoices = function (e) {
        return {
          type: n.ACTION_TYPES.FILTER_CHOICES,
          results: e
        };
      }, t.activateChoices = function (e) {
        return void 0 === e && (e = !0), {
          type: n.ACTION_TYPES.ACTIVATE_CHOICES,
          active: e
        };
      }, t.clearChoices = function () {
        return {
          type: n.ACTION_TYPES.CLEAR_CHOICES
        };
      };
    },
    783: function _(e, t, i) {
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.addGroup = void 0;
      var n = i(883);

      t.addGroup = function (e) {
        var t = e.value,
            i = e.id,
            s = e.active,
            r = e.disabled;
        return {
          type: n.ACTION_TYPES.ADD_GROUP,
          value: t,
          id: i,
          active: s,
          disabled: r
        };
      };
    },
    464: function _(e, t, i) {
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.highlightItem = t.removeItem = t.addItem = void 0;
      var n = i(883);
      t.addItem = function (e) {
        var t = e.value,
            i = e.label,
            s = e.id,
            r = e.choiceId,
            o = e.groupId,
            a = e.customProperties,
            c = e.placeholder,
            l = e.keyCode;
        return {
          type: n.ACTION_TYPES.ADD_ITEM,
          value: t,
          label: i,
          id: s,
          choiceId: r,
          groupId: o,
          customProperties: a,
          placeholder: c,
          keyCode: l
        };
      }, t.removeItem = function (e, t) {
        return {
          type: n.ACTION_TYPES.REMOVE_ITEM,
          id: e,
          choiceId: t
        };
      }, t.highlightItem = function (e, t) {
        return {
          type: n.ACTION_TYPES.HIGHLIGHT_ITEM,
          id: e,
          highlighted: t
        };
      };
    },
    137: function _(e, t, i) {
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.setIsLoading = t.resetTo = t.clearAll = void 0;
      var n = i(883);
      t.clearAll = function () {
        return {
          type: n.ACTION_TYPES.CLEAR_ALL
        };
      }, t.resetTo = function (e) {
        return {
          type: n.ACTION_TYPES.RESET_TO,
          state: e
        };
      }, t.setIsLoading = function (e) {
        return {
          type: n.ACTION_TYPES.SET_IS_LOADING,
          isLoading: e
        };
      };
    },
    373: function _(e, t, i) {
      var n = this && this.__spreadArray || function (e, t, i) {
        if (i || 2 === arguments.length) for (var n, s = 0, r = t.length; s < r; s++) {
          !n && s in t || (n || (n = Array.prototype.slice.call(t, 0, s)), n[s] = t[s]);
        }
        return e.concat(n || Array.prototype.slice.call(t));
      },
          s = this && this.__importDefault || function (e) {
        return e && e.__esModule ? e : {
          default: e
        };
      };

      Object.defineProperty(t, "__esModule", {
        value: !0
      });

      var r = s(i(996)),
          o = s(i(221)),
          a = i(282),
          c = i(783),
          l = i(464),
          h = i(137),
          u = i(520),
          d = i(883),
          p = i(789),
          f = i(799),
          m = i(655),
          v = s(i(744)),
          g = s(i(686)),
          _ = "-ms-scroll-limit" in document.documentElement.style && "-ms-ime-align" in document.documentElement.style,
          y = {},
          E = function () {
        function e(t, i) {
          var s = this;
          void 0 === t && (t = "[data-choice]"), void 0 === i && (i = {}), void 0 === i.allowHTML && console.warn("Deprecation warning: allowHTML will default to false in a future release. To render HTML in Choices, you will need to set it to true. Setting allowHTML will suppress this message."), this.config = r.default.all([p.DEFAULT_CONFIG, e.defaults.options, i], {
            arrayMerge: function arrayMerge(e, t) {
              return n([], t, !0);
            }
          });
          var o = (0, f.diff)(this.config, p.DEFAULT_CONFIG);
          o.length && console.warn("Unknown config option(s) passed", o.join(", "));
          var a = "string" == typeof t ? document.querySelector(t) : t;
          if (!(a instanceof HTMLInputElement || a instanceof HTMLSelectElement)) throw TypeError("Expected one of the following types text|select-one|select-multiple");

          if (this._isTextElement = a.type === d.TEXT_TYPE, this._isSelectOneElement = a.type === d.SELECT_ONE_TYPE, this._isSelectMultipleElement = a.type === d.SELECT_MULTIPLE_TYPE, this._isSelectElement = this._isSelectOneElement || this._isSelectMultipleElement, this.config.searchEnabled = this._isSelectMultipleElement || this.config.searchEnabled, ["auto", "always"].includes("".concat(this.config.renderSelectedChoices)) || (this.config.renderSelectedChoices = "auto"), i.addItemFilter && "function" != typeof i.addItemFilter) {
            var c = i.addItemFilter instanceof RegExp ? i.addItemFilter : new RegExp(i.addItemFilter);
            this.config.addItemFilter = c.test.bind(c);
          }

          if (this._isTextElement ? this.passedElement = new u.WrappedInput({
            element: a,
            classNames: this.config.classNames,
            delimiter: this.config.delimiter
          }) : this.passedElement = new u.WrappedSelect({
            element: a,
            classNames: this.config.classNames,
            template: function template(e) {
              return s._templates.option(e);
            }
          }), this.initialised = !1, this._store = new v.default(), this._initialState = m.defaultState, this._currentState = m.defaultState, this._prevState = m.defaultState, this._currentValue = "", this._canSearch = !!this.config.searchEnabled, this._isScrollingOnIe = !1, this._highlightPosition = 0, this._wasTap = !0, this._placeholderValue = this._generatePlaceholderValue(), this._baseId = (0, f.generateId)(this.passedElement.element, "choices-"), this._direction = this.passedElement.dir, !this._direction) {
            var l = window.getComputedStyle(this.passedElement.element).direction;
            l !== window.getComputedStyle(document.documentElement).direction && (this._direction = l);
          }

          if (this._idNames = {
            itemChoice: "item-choice"
          }, this._isSelectElement && (this._presetGroups = this.passedElement.optionGroups, this._presetOptions = this.passedElement.options), this._presetChoices = this.config.choices, this._presetItems = this.config.items, this.passedElement.value && this._isTextElement) {
            var h = this.passedElement.value.split(this.config.delimiter);
            this._presetItems = this._presetItems.concat(h);
          }

          if (this.passedElement.options && this.passedElement.options.forEach(function (e) {
            s._presetChoices.push({
              value: e.value,
              label: e.innerHTML,
              selected: !!e.selected,
              disabled: e.disabled || e.parentNode.disabled,
              placeholder: "" === e.value || e.hasAttribute("placeholder"),
              customProperties: e.dataset["custom-properties"]
            });
          }), this._render = this._render.bind(this), this._onFocus = this._onFocus.bind(this), this._onBlur = this._onBlur.bind(this), this._onKeyUp = this._onKeyUp.bind(this), this._onKeyDown = this._onKeyDown.bind(this), this._onClick = this._onClick.bind(this), this._onTouchMove = this._onTouchMove.bind(this), this._onTouchEnd = this._onTouchEnd.bind(this), this._onMouseDown = this._onMouseDown.bind(this), this._onMouseOver = this._onMouseOver.bind(this), this._onFormReset = this._onFormReset.bind(this), this._onSelectKey = this._onSelectKey.bind(this), this._onEnterKey = this._onEnterKey.bind(this), this._onEscapeKey = this._onEscapeKey.bind(this), this._onDirectionKey = this._onDirectionKey.bind(this), this._onDeleteKey = this._onDeleteKey.bind(this), this.passedElement.isActive) return this.config.silent || console.warn("Trying to initialise Choices on element already initialised", {
            element: t
          }), void (this.initialised = !0);
          this.init();
        }

        return Object.defineProperty(e, "defaults", {
          get: function get() {
            return Object.preventExtensions({
              get options() {
                return y;
              },

              get templates() {
                return g.default;
              }

            });
          },
          enumerable: !1,
          configurable: !0
        }), e.prototype.init = function () {
          if (!this.initialised) {
            this._createTemplates(), this._createElements(), this._createStructure(), this._store.subscribe(this._render), this._render(), this._addEventListeners(), (!this.config.addItems || this.passedElement.element.hasAttribute("disabled")) && this.disable(), this.initialised = !0;
            var e = this.config.callbackOnInit;
            e && "function" == typeof e && e.call(this);
          }
        }, e.prototype.destroy = function () {
          this.initialised && (this._removeEventListeners(), this.passedElement.reveal(), this.containerOuter.unwrap(this.passedElement.element), this.clearStore(), this._isSelectElement && (this.passedElement.options = this._presetOptions), this._templates = g.default, this.initialised = !1);
        }, e.prototype.enable = function () {
          return this.passedElement.isDisabled && this.passedElement.enable(), this.containerOuter.isDisabled && (this._addEventListeners(), this.input.enable(), this.containerOuter.enable()), this;
        }, e.prototype.disable = function () {
          return this.passedElement.isDisabled || this.passedElement.disable(), this.containerOuter.isDisabled || (this._removeEventListeners(), this.input.disable(), this.containerOuter.disable()), this;
        }, e.prototype.highlightItem = function (e, t) {
          if (void 0 === t && (t = !0), !e || !e.id) return this;
          var i = e.id,
              n = e.groupId,
              s = void 0 === n ? -1 : n,
              r = e.value,
              o = void 0 === r ? "" : r,
              a = e.label,
              c = void 0 === a ? "" : a,
              h = s >= 0 ? this._store.getGroupById(s) : null;
          return this._store.dispatch((0, l.highlightItem)(i, !0)), t && this.passedElement.triggerEvent(d.EVENTS.highlightItem, {
            id: i,
            value: o,
            label: c,
            groupValue: h && h.value ? h.value : null
          }), this;
        }, e.prototype.unhighlightItem = function (e) {
          if (!e || !e.id) return this;
          var t = e.id,
              i = e.groupId,
              n = void 0 === i ? -1 : i,
              s = e.value,
              r = void 0 === s ? "" : s,
              o = e.label,
              a = void 0 === o ? "" : o,
              c = n >= 0 ? this._store.getGroupById(n) : null;
          return this._store.dispatch((0, l.highlightItem)(t, !1)), this.passedElement.triggerEvent(d.EVENTS.highlightItem, {
            id: t,
            value: r,
            label: a,
            groupValue: c && c.value ? c.value : null
          }), this;
        }, e.prototype.highlightAll = function () {
          var e = this;
          return this._store.items.forEach(function (t) {
            return e.highlightItem(t);
          }), this;
        }, e.prototype.unhighlightAll = function () {
          var e = this;
          return this._store.items.forEach(function (t) {
            return e.unhighlightItem(t);
          }), this;
        }, e.prototype.removeActiveItemsByValue = function (e) {
          var t = this;
          return this._store.activeItems.filter(function (t) {
            return t.value === e;
          }).forEach(function (e) {
            return t._removeItem(e);
          }), this;
        }, e.prototype.removeActiveItems = function (e) {
          var t = this;
          return this._store.activeItems.filter(function (t) {
            return t.id !== e;
          }).forEach(function (e) {
            return t._removeItem(e);
          }), this;
        }, e.prototype.removeHighlightedItems = function (e) {
          var t = this;
          return void 0 === e && (e = !1), this._store.highlightedActiveItems.forEach(function (i) {
            t._removeItem(i), e && t._triggerChange(i.value);
          }), this;
        }, e.prototype.showDropdown = function (e) {
          var t = this;
          return this.dropdown.isActive || requestAnimationFrame(function () {
            t.dropdown.show(), t.containerOuter.open(t.dropdown.distanceFromTopWindow), !e && t._canSearch && t.input.focus(), t.passedElement.triggerEvent(d.EVENTS.showDropdown, {});
          }), this;
        }, e.prototype.hideDropdown = function (e) {
          var t = this;
          return this.dropdown.isActive ? (requestAnimationFrame(function () {
            t.dropdown.hide(), t.containerOuter.close(), !e && t._canSearch && (t.input.removeActiveDescendant(), t.input.blur()), t.passedElement.triggerEvent(d.EVENTS.hideDropdown, {});
          }), this) : this;
        }, e.prototype.getValue = function (e) {
          void 0 === e && (e = !1);

          var t = this._store.activeItems.reduce(function (t, i) {
            var n = e ? i.value : i;
            return t.push(n), t;
          }, []);

          return this._isSelectOneElement ? t[0] : t;
        }, e.prototype.setValue = function (e) {
          var t = this;
          return this.initialised ? (e.forEach(function (e) {
            return t._setChoiceOrItem(e);
          }), this) : this;
        }, e.prototype.setChoiceByValue = function (e) {
          var t = this;
          return !this.initialised || this._isTextElement || (Array.isArray(e) ? e : [e]).forEach(function (e) {
            return t._findAndSelectChoiceByValue(e);
          }), this;
        }, e.prototype.setChoices = function (e, t, i, n) {
          var s = this;
          if (void 0 === e && (e = []), void 0 === t && (t = "value"), void 0 === i && (i = "label"), void 0 === n && (n = !1), !this.initialised) throw new ReferenceError("setChoices was called on a non-initialized instance of Choices");
          if (!this._isSelectElement) throw new TypeError("setChoices can't be used with INPUT based Choices");
          if ("string" != typeof t || !t) throw new TypeError("value parameter must be a name of 'value' field in passed objects");

          if (n && this.clearChoices(), "function" == typeof e) {
            var r = e(this);
            if ("function" == typeof Promise && r instanceof Promise) return new Promise(function (e) {
              return requestAnimationFrame(e);
            }).then(function () {
              return s._handleLoadingState(!0);
            }).then(function () {
              return r;
            }).then(function (e) {
              return s.setChoices(e, t, i, n);
            }).catch(function (e) {
              s.config.silent || console.error(e);
            }).then(function () {
              return s._handleLoadingState(!1);
            }).then(function () {
              return s;
            });
            if (!Array.isArray(r)) throw new TypeError(".setChoices first argument function must return either array of choices or Promise, got: ".concat(_typeof(r)));
            return this.setChoices(r, t, i, !1);
          }

          if (!Array.isArray(e)) throw new TypeError(".setChoices must be called either with array of choices with a function resulting into Promise of array of choices");
          return this.containerOuter.removeLoadingState(), this._startLoading(), e.forEach(function (e) {
            if (e.choices) s._addGroup({
              id: e.id ? parseInt("".concat(e.id), 10) : null,
              group: e,
              valueKey: t,
              labelKey: i
            });else {
              var n = e;

              s._addChoice({
                value: n[t],
                label: n[i],
                isSelected: !!n.selected,
                isDisabled: !!n.disabled,
                placeholder: !!n.placeholder,
                customProperties: n.customProperties
              });
            }
          }), this._stopLoading(), this;
        }, e.prototype.clearChoices = function () {
          return this._store.dispatch((0, a.clearChoices)()), this;
        }, e.prototype.clearStore = function () {
          return this._store.dispatch((0, h.clearAll)()), this;
        }, e.prototype.clearInput = function () {
          var e = !this._isSelectOneElement;
          return this.input.clear(e), !this._isTextElement && this._canSearch && (this._isSearching = !1, this._store.dispatch((0, a.activateChoices)(!0))), this;
        }, e.prototype._render = function () {
          if (!this._store.isLoading()) {
            this._currentState = this._store.state;
            var e = this._currentState.choices !== this._prevState.choices || this._currentState.groups !== this._prevState.groups || this._currentState.items !== this._prevState.items,
                t = this._isSelectElement,
                i = this._currentState.items !== this._prevState.items;
            e && (t && this._renderChoices(), i && this._renderItems(), this._prevState = this._currentState);
          }
        }, e.prototype._renderChoices = function () {
          var e = this,
              t = this._store,
              i = t.activeGroups,
              n = t.activeChoices,
              s = document.createDocumentFragment();

          if (this.choiceList.clear(), this.config.resetScrollPosition && requestAnimationFrame(function () {
            return e.choiceList.scrollToTop();
          }), i.length >= 1 && !this._isSearching) {
            var r = n.filter(function (e) {
              return !0 === e.placeholder && -1 === e.groupId;
            });
            r.length >= 1 && (s = this._createChoicesFragment(r, s)), s = this._createGroupsFragment(i, n, s);
          } else n.length >= 1 && (s = this._createChoicesFragment(n, s));

          if (s.childNodes && s.childNodes.length > 0) {
            var o = this._store.activeItems,
                a = this._canAddItem(o, this.input.value);

            if (a.response) this.choiceList.append(s), this._highlightChoice();else {
              var c = this._getTemplate("notice", a.notice);

              this.choiceList.append(c);
            }
          } else {
            var l = void 0;
            c = void 0, this._isSearching ? (c = "function" == typeof this.config.noResultsText ? this.config.noResultsText() : this.config.noResultsText, l = this._getTemplate("notice", c, "no-results")) : (c = "function" == typeof this.config.noChoicesText ? this.config.noChoicesText() : this.config.noChoicesText, l = this._getTemplate("notice", c, "no-choices")), this.choiceList.append(l);
          }
        }, e.prototype._renderItems = function () {
          var e = this._store.activeItems || [];
          this.itemList.clear();

          var t = this._createItemsFragment(e);

          t.childNodes && this.itemList.append(t);
        }, e.prototype._createGroupsFragment = function (e, t, i) {
          var n = this;
          return void 0 === i && (i = document.createDocumentFragment()), this.config.shouldSort && e.sort(this.config.sorter), e.forEach(function (e) {
            var s = function (e) {
              return t.filter(function (t) {
                return n._isSelectOneElement ? t.groupId === e.id : t.groupId === e.id && ("always" === n.config.renderSelectedChoices || !t.selected);
              });
            }(e);

            if (s.length >= 1) {
              var r = n._getTemplate("choiceGroup", e);

              i.appendChild(r), n._createChoicesFragment(s, i, !0);
            }
          }), i;
        }, e.prototype._createChoicesFragment = function (e, t, i) {
          var s = this;
          void 0 === t && (t = document.createDocumentFragment()), void 0 === i && (i = !1);

          var r = this.config,
              o = r.renderSelectedChoices,
              a = r.searchResultLimit,
              c = r.renderChoiceLimit,
              l = this._isSearching ? f.sortByScore : this.config.sorter,
              h = function h(e) {
            if ("auto" !== o || s._isSelectOneElement || !e.selected) {
              var i = s._getTemplate("choice", e, s.config.itemSelectText);

              t.appendChild(i);
            }
          },
              u = e;

          "auto" !== o || this._isSelectOneElement || (u = e.filter(function (e) {
            return !e.selected;
          }));
          var d = u.reduce(function (e, t) {
            return t.placeholder ? e.placeholderChoices.push(t) : e.normalChoices.push(t), e;
          }, {
            placeholderChoices: [],
            normalChoices: []
          }),
              p = d.placeholderChoices,
              m = d.normalChoices;
          (this.config.shouldSort || this._isSearching) && m.sort(l);
          var v = u.length,
              g = this._isSelectOneElement ? n(n([], p, !0), m, !0) : m;
          this._isSearching ? v = a : c && c > 0 && !i && (v = c);

          for (var _ = 0; _ < v; _ += 1) {
            g[_] && h(g[_]);
          }

          return t;
        }, e.prototype._createItemsFragment = function (e, t) {
          var i = this;
          void 0 === t && (t = document.createDocumentFragment());
          var n = this.config,
              s = n.shouldSortItems,
              r = n.sorter,
              o = n.removeItemButton;
          return s && !this._isSelectOneElement && e.sort(r), this._isTextElement ? this.passedElement.value = e.map(function (e) {
            return e.value;
          }).join(this.config.delimiter) : this.passedElement.options = e, e.forEach(function (e) {
            var n = i._getTemplate("item", e, o);

            t.appendChild(n);
          }), t;
        }, e.prototype._triggerChange = function (e) {
          null != e && this.passedElement.triggerEvent(d.EVENTS.change, {
            value: e
          });
        }, e.prototype._selectPlaceholderChoice = function (e) {
          this._addItem({
            value: e.value,
            label: e.label,
            choiceId: e.id,
            groupId: e.groupId,
            placeholder: e.placeholder
          }), this._triggerChange(e.value);
        }, e.prototype._handleButtonAction = function (e, t) {
          if (e && t && this.config.removeItems && this.config.removeItemButton) {
            var i = t.parentNode && t.parentNode.dataset.id,
                n = i && e.find(function (e) {
              return e.id === parseInt(i, 10);
            });
            n && (this._removeItem(n), this._triggerChange(n.value), this._isSelectOneElement && this._store.placeholderChoice && this._selectPlaceholderChoice(this._store.placeholderChoice));
          }
        }, e.prototype._handleItemAction = function (e, t, i) {
          var n = this;

          if (void 0 === i && (i = !1), e && t && this.config.removeItems && !this._isSelectOneElement) {
            var s = t.dataset.id;
            e.forEach(function (e) {
              e.id !== parseInt("".concat(s), 10) || e.highlighted ? !i && e.highlighted && n.unhighlightItem(e) : n.highlightItem(e);
            }), this.input.focus();
          }
        }, e.prototype._handleChoiceAction = function (e, t) {
          if (e && t) {
            var i = t.dataset.id,
                n = i && this._store.getChoiceById(i);

            if (n) {
              var s = e[0] && e[0].keyCode ? e[0].keyCode : void 0,
                  r = this.dropdown.isActive;
              n.keyCode = s, this.passedElement.triggerEvent(d.EVENTS.choice, {
                choice: n
              }), n.selected || n.disabled || this._canAddItem(e, n.value).response && (this._addItem({
                value: n.value,
                label: n.label,
                choiceId: n.id,
                groupId: n.groupId,
                customProperties: n.customProperties,
                placeholder: n.placeholder,
                keyCode: n.keyCode
              }), this._triggerChange(n.value)), this.clearInput(), r && this._isSelectOneElement && (this.hideDropdown(!0), this.containerOuter.focus());
            }
          }
        }, e.prototype._handleBackspace = function (e) {
          if (this.config.removeItems && e) {
            var t = e[e.length - 1],
                i = e.some(function (e) {
              return e.highlighted;
            });
            this.config.editItems && !i && t ? (this.input.value = t.value, this.input.setWidth(), this._removeItem(t), this._triggerChange(t.value)) : (i || this.highlightItem(t, !1), this.removeHighlightedItems(!0));
          }
        }, e.prototype._startLoading = function () {
          this._store.dispatch((0, h.setIsLoading)(!0));
        }, e.prototype._stopLoading = function () {
          this._store.dispatch((0, h.setIsLoading)(!1));
        }, e.prototype._handleLoadingState = function (e) {
          void 0 === e && (e = !0);
          var t = this.itemList.getChild(".".concat(this.config.classNames.placeholder));
          e ? (this.disable(), this.containerOuter.addLoadingState(), this._isSelectOneElement ? t ? t.innerHTML = this.config.loadingText : (t = this._getTemplate("placeholder", this.config.loadingText)) && this.itemList.append(t) : this.input.placeholder = this.config.loadingText) : (this.enable(), this.containerOuter.removeLoadingState(), this._isSelectOneElement ? t && (t.innerHTML = this._placeholderValue || "") : this.input.placeholder = this._placeholderValue || "");
        }, e.prototype._handleSearch = function (e) {
          if (this.input.isFocussed) {
            var t = this._store.choices,
                i = this.config,
                n = i.searchFloor,
                s = i.searchChoices,
                r = t.some(function (e) {
              return !e.active;
            });

            if (null != e && e.length >= n) {
              var o = s ? this._searchChoices(e) : 0;
              this.passedElement.triggerEvent(d.EVENTS.search, {
                value: e,
                resultCount: o
              });
            } else r && (this._isSearching = !1, this._store.dispatch((0, a.activateChoices)(!0)));
          }
        }, e.prototype._canAddItem = function (e, t) {
          var i = !0,
              n = "function" == typeof this.config.addItemText ? this.config.addItemText(t) : this.config.addItemText;

          if (!this._isSelectOneElement) {
            var s = (0, f.existsInArray)(e, t);
            this.config.maxItemCount > 0 && this.config.maxItemCount <= e.length && (i = !1, n = "function" == typeof this.config.maxItemText ? this.config.maxItemText(this.config.maxItemCount) : this.config.maxItemText), !this.config.duplicateItemsAllowed && s && i && (i = !1, n = "function" == typeof this.config.uniqueItemText ? this.config.uniqueItemText(t) : this.config.uniqueItemText), this._isTextElement && this.config.addItems && i && "function" == typeof this.config.addItemFilter && !this.config.addItemFilter(t) && (i = !1, n = "function" == typeof this.config.customAddItemText ? this.config.customAddItemText(t) : this.config.customAddItemText);
          }

          return {
            response: i,
            notice: n
          };
        }, e.prototype._searchChoices = function (e) {
          var t = "string" == typeof e ? e.trim() : e,
              i = "string" == typeof this._currentValue ? this._currentValue.trim() : this._currentValue;
          if (t.length < 1 && t === "".concat(i, " ")) return 0;
          var s = this._store.searchableChoices,
              r = t,
              c = Object.assign(this.config.fuseOptions, {
            keys: n([], this.config.searchFields, !0),
            includeMatches: !0
          }),
              l = new o.default(s, c).search(r);
          return this._currentValue = t, this._highlightPosition = 0, this._isSearching = !0, this._store.dispatch((0, a.filterChoices)(l)), l.length;
        }, e.prototype._addEventListeners = function () {
          var e = document.documentElement;
          e.addEventListener("touchend", this._onTouchEnd, !0), this.containerOuter.element.addEventListener("keydown", this._onKeyDown, !0), this.containerOuter.element.addEventListener("mousedown", this._onMouseDown, !0), e.addEventListener("click", this._onClick, {
            passive: !0
          }), e.addEventListener("touchmove", this._onTouchMove, {
            passive: !0
          }), this.dropdown.element.addEventListener("mouseover", this._onMouseOver, {
            passive: !0
          }), this._isSelectOneElement && (this.containerOuter.element.addEventListener("focus", this._onFocus, {
            passive: !0
          }), this.containerOuter.element.addEventListener("blur", this._onBlur, {
            passive: !0
          })), this.input.element.addEventListener("keyup", this._onKeyUp, {
            passive: !0
          }), this.input.element.addEventListener("focus", this._onFocus, {
            passive: !0
          }), this.input.element.addEventListener("blur", this._onBlur, {
            passive: !0
          }), this.input.element.form && this.input.element.form.addEventListener("reset", this._onFormReset, {
            passive: !0
          }), this.input.addEventListeners();
        }, e.prototype._removeEventListeners = function () {
          var e = document.documentElement;
          e.removeEventListener("touchend", this._onTouchEnd, !0), this.containerOuter.element.removeEventListener("keydown", this._onKeyDown, !0), this.containerOuter.element.removeEventListener("mousedown", this._onMouseDown, !0), e.removeEventListener("click", this._onClick), e.removeEventListener("touchmove", this._onTouchMove), this.dropdown.element.removeEventListener("mouseover", this._onMouseOver), this._isSelectOneElement && (this.containerOuter.element.removeEventListener("focus", this._onFocus), this.containerOuter.element.removeEventListener("blur", this._onBlur)), this.input.element.removeEventListener("keyup", this._onKeyUp), this.input.element.removeEventListener("focus", this._onFocus), this.input.element.removeEventListener("blur", this._onBlur), this.input.element.form && this.input.element.form.removeEventListener("reset", this._onFormReset), this.input.removeEventListeners();
        }, e.prototype._onKeyDown = function (e) {
          var t = e.keyCode,
              i = this._store.activeItems,
              n = this.input.isFocussed,
              s = this.dropdown.isActive,
              r = this.itemList.hasChildren(),
              o = String.fromCharCode(t),
              a = /[a-zA-Z0-9-_ ]/.test(o),
              c = d.KEY_CODES.BACK_KEY,
              l = d.KEY_CODES.DELETE_KEY,
              h = d.KEY_CODES.ENTER_KEY,
              u = d.KEY_CODES.A_KEY,
              p = d.KEY_CODES.ESC_KEY,
              f = d.KEY_CODES.UP_KEY,
              m = d.KEY_CODES.DOWN_KEY,
              v = d.KEY_CODES.PAGE_UP_KEY,
              g = d.KEY_CODES.PAGE_DOWN_KEY;

          switch (this._isTextElement || s || !a || (this.showDropdown(), this.input.isFocussed || (this.input.value += o.toLowerCase())), t) {
            case u:
              return this._onSelectKey(e, r);

            case h:
              return this._onEnterKey(e, i, s);

            case p:
              return this._onEscapeKey(s);

            case f:
            case v:
            case m:
            case g:
              return this._onDirectionKey(e, s);

            case l:
            case c:
              return this._onDeleteKey(e, i, n);
          }
        }, e.prototype._onKeyUp = function (e) {
          var t = e.target,
              i = e.keyCode,
              n = this.input.value,
              s = this._store.activeItems,
              r = this._canAddItem(s, n),
              o = d.KEY_CODES.BACK_KEY,
              c = d.KEY_CODES.DELETE_KEY;

          if (this._isTextElement) {
            if (r.notice && n) {
              var l = this._getTemplate("notice", r.notice);

              this.dropdown.element.innerHTML = l.outerHTML, this.showDropdown(!0);
            } else this.hideDropdown(!0);
          } else {
            var h = (i === o || i === c) && t && !t.value,
                u = !this._isTextElement && this._isSearching,
                p = this._canSearch && r.response;
            h && u ? (this._isSearching = !1, this._store.dispatch((0, a.activateChoices)(!0))) : p && this._handleSearch(this.input.rawValue);
          }
          this._canSearch = this.config.searchEnabled;
        }, e.prototype._onSelectKey = function (e, t) {
          var i = e.ctrlKey,
              n = e.metaKey;
          (i || n) && t && (this._canSearch = !1, this.config.removeItems && !this.input.value && this.input.element === document.activeElement && this.highlightAll());
        }, e.prototype._onEnterKey = function (e, t, i) {
          var n = e.target,
              s = d.KEY_CODES.ENTER_KEY,
              r = n && n.hasAttribute("data-button");

          if (this._isTextElement && n && n.value) {
            var o = this.input.value;
            this._canAddItem(t, o).response && (this.hideDropdown(!0), this._addItem({
              value: o
            }), this._triggerChange(o), this.clearInput());
          }

          if (r && (this._handleButtonAction(t, n), e.preventDefault()), i) {
            var a = this.dropdown.getChild(".".concat(this.config.classNames.highlightedState));
            a && (t[0] && (t[0].keyCode = s), this._handleChoiceAction(t, a)), e.preventDefault();
          } else this._isSelectOneElement && (this.showDropdown(), e.preventDefault());
        }, e.prototype._onEscapeKey = function (e) {
          e && (this.hideDropdown(!0), this.containerOuter.focus());
        }, e.prototype._onDirectionKey = function (e, t) {
          var i = e.keyCode,
              n = e.metaKey,
              s = d.KEY_CODES.DOWN_KEY,
              r = d.KEY_CODES.PAGE_UP_KEY,
              o = d.KEY_CODES.PAGE_DOWN_KEY;

          if (t || this._isSelectOneElement) {
            this.showDropdown(), this._canSearch = !1;
            var a = i === s || i === o ? 1 : -1,
                c = "[data-choice-selectable]",
                l = void 0;
            if (n || i === o || i === r) l = a > 0 ? this.dropdown.element.querySelector("".concat(c, ":last-of-type")) : this.dropdown.element.querySelector(c);else {
              var h = this.dropdown.element.querySelector(".".concat(this.config.classNames.highlightedState));
              l = h ? (0, f.getAdjacentEl)(h, c, a) : this.dropdown.element.querySelector(c);
            }
            l && ((0, f.isScrolledIntoView)(l, this.choiceList.element, a) || this.choiceList.scrollToChildElement(l, a), this._highlightChoice(l)), e.preventDefault();
          }
        }, e.prototype._onDeleteKey = function (e, t, i) {
          var n = e.target;
          this._isSelectOneElement || n.value || !i || (this._handleBackspace(t), e.preventDefault());
        }, e.prototype._onTouchMove = function () {
          this._wasTap && (this._wasTap = !1);
        }, e.prototype._onTouchEnd = function (e) {
          var t = (e || e.touches[0]).target;
          this._wasTap && this.containerOuter.element.contains(t) && ((t === this.containerOuter.element || t === this.containerInner.element) && (this._isTextElement ? this.input.focus() : this._isSelectMultipleElement && this.showDropdown()), e.stopPropagation()), this._wasTap = !0;
        }, e.prototype._onMouseDown = function (e) {
          var t = e.target;

          if (t instanceof HTMLElement) {
            if (_ && this.choiceList.element.contains(t)) {
              var i = this.choiceList.element.firstElementChild,
                  n = "ltr" === this._direction ? e.offsetX >= i.offsetWidth : e.offsetX < i.offsetLeft;
              this._isScrollingOnIe = n;
            }

            if (t !== this.input.element) {
              var s = t.closest("[data-button],[data-item],[data-choice]");

              if (s instanceof HTMLElement) {
                var r = e.shiftKey,
                    o = this._store.activeItems,
                    a = s.dataset;
                "button" in a ? this._handleButtonAction(o, s) : "item" in a ? this._handleItemAction(o, s, r) : "choice" in a && this._handleChoiceAction(o, s);
              }

              e.preventDefault();
            }
          }
        }, e.prototype._onMouseOver = function (e) {
          var t = e.target;
          t instanceof HTMLElement && "choice" in t.dataset && this._highlightChoice(t);
        }, e.prototype._onClick = function (e) {
          var t = e.target;
          this.containerOuter.element.contains(t) ? this.dropdown.isActive || this.containerOuter.isDisabled ? this._isSelectOneElement && t !== this.input.element && !this.dropdown.element.contains(t) && this.hideDropdown() : this._isTextElement ? document.activeElement !== this.input.element && this.input.focus() : (this.showDropdown(), this.containerOuter.focus()) : (this._store.highlightedActiveItems.length > 0 && this.unhighlightAll(), this.containerOuter.removeFocusState(), this.hideDropdown(!0));
        }, e.prototype._onFocus = function (e) {
          var t,
              i = this,
              n = e.target;
          n && this.containerOuter.element.contains(n) && ((t = {})[d.TEXT_TYPE] = function () {
            n === i.input.element && i.containerOuter.addFocusState();
          }, t[d.SELECT_ONE_TYPE] = function () {
            i.containerOuter.addFocusState(), n === i.input.element && i.showDropdown(!0);
          }, t[d.SELECT_MULTIPLE_TYPE] = function () {
            n === i.input.element && (i.showDropdown(!0), i.containerOuter.addFocusState());
          }, t)[this.passedElement.element.type]();
        }, e.prototype._onBlur = function (e) {
          var t,
              i = this,
              n = e.target;

          if (n && this.containerOuter.element.contains(n) && !this._isScrollingOnIe) {
            var s = this._store.activeItems.some(function (e) {
              return e.highlighted;
            });

            ((t = {})[d.TEXT_TYPE] = function () {
              n === i.input.element && (i.containerOuter.removeFocusState(), s && i.unhighlightAll(), i.hideDropdown(!0));
            }, t[d.SELECT_ONE_TYPE] = function () {
              i.containerOuter.removeFocusState(), (n === i.input.element || n === i.containerOuter.element && !i._canSearch) && i.hideDropdown(!0);
            }, t[d.SELECT_MULTIPLE_TYPE] = function () {
              n === i.input.element && (i.containerOuter.removeFocusState(), i.hideDropdown(!0), s && i.unhighlightAll());
            }, t)[this.passedElement.element.type]();
          } else this._isScrollingOnIe = !1, this.input.element.focus();
        }, e.prototype._onFormReset = function () {
          this._store.dispatch((0, h.resetTo)(this._initialState));
        }, e.prototype._highlightChoice = function (e) {
          var t = this;
          void 0 === e && (e = null);
          var i = Array.from(this.dropdown.element.querySelectorAll("[data-choice-selectable]"));

          if (i.length) {
            var n = e;
            Array.from(this.dropdown.element.querySelectorAll(".".concat(this.config.classNames.highlightedState))).forEach(function (e) {
              e.classList.remove(t.config.classNames.highlightedState), e.setAttribute("aria-selected", "false");
            }), n ? this._highlightPosition = i.indexOf(n) : (n = i.length > this._highlightPosition ? i[this._highlightPosition] : i[i.length - 1]) || (n = i[0]), n.classList.add(this.config.classNames.highlightedState), n.setAttribute("aria-selected", "true"), this.passedElement.triggerEvent(d.EVENTS.highlightChoice, {
              el: n
            }), this.dropdown.isActive && (this.input.setActiveDescendant(n.id), this.containerOuter.setActiveDescendant(n.id));
          }
        }, e.prototype._addItem = function (e) {
          var t = e.value,
              i = e.label,
              n = void 0 === i ? null : i,
              s = e.choiceId,
              r = void 0 === s ? -1 : s,
              o = e.groupId,
              a = void 0 === o ? -1 : o,
              c = e.customProperties,
              h = void 0 === c ? {} : c,
              u = e.placeholder,
              p = void 0 !== u && u,
              f = e.keyCode,
              m = void 0 === f ? -1 : f,
              v = "string" == typeof t ? t.trim() : t,
              g = this._store.items,
              _ = n || v,
              y = r || -1,
              E = a >= 0 ? this._store.getGroupById(a) : null,
              b = g ? g.length + 1 : 1;

          this.config.prependValue && (v = this.config.prependValue + v.toString()), this.config.appendValue && (v += this.config.appendValue.toString()), this._store.dispatch((0, l.addItem)({
            value: v,
            label: _,
            id: b,
            choiceId: y,
            groupId: a,
            customProperties: h,
            placeholder: p,
            keyCode: m
          })), this._isSelectOneElement && this.removeActiveItems(b), this.passedElement.triggerEvent(d.EVENTS.addItem, {
            id: b,
            value: v,
            label: _,
            customProperties: h,
            groupValue: E && E.value ? E.value : null,
            keyCode: m
          });
        }, e.prototype._removeItem = function (e) {
          var t = e.id,
              i = e.value,
              n = e.label,
              s = e.customProperties,
              r = e.choiceId,
              o = e.groupId,
              a = o && o >= 0 ? this._store.getGroupById(o) : null;
          t && r && (this._store.dispatch((0, l.removeItem)(t, r)), this.passedElement.triggerEvent(d.EVENTS.removeItem, {
            id: t,
            value: i,
            label: n,
            customProperties: s,
            groupValue: a && a.value ? a.value : null
          }));
        }, e.prototype._addChoice = function (e) {
          var t = e.value,
              i = e.label,
              n = void 0 === i ? null : i,
              s = e.isSelected,
              r = void 0 !== s && s,
              o = e.isDisabled,
              c = void 0 !== o && o,
              l = e.groupId,
              h = void 0 === l ? -1 : l,
              u = e.customProperties,
              d = void 0 === u ? {} : u,
              p = e.placeholder,
              f = void 0 !== p && p,
              m = e.keyCode,
              v = void 0 === m ? -1 : m;

          if (null != t) {
            var g = this._store.choices,
                _ = n || t,
                y = g ? g.length + 1 : 1,
                E = "".concat(this._baseId, "-").concat(this._idNames.itemChoice, "-").concat(y);

            this._store.dispatch((0, a.addChoice)({
              id: y,
              groupId: h,
              elementId: E,
              value: t,
              label: _,
              disabled: c,
              customProperties: d,
              placeholder: f,
              keyCode: v
            })), r && this._addItem({
              value: t,
              label: _,
              choiceId: y,
              customProperties: d,
              placeholder: f,
              keyCode: v
            });
          }
        }, e.prototype._addGroup = function (e) {
          var t = this,
              i = e.group,
              n = e.id,
              s = e.valueKey,
              r = void 0 === s ? "value" : s,
              o = e.labelKey,
              a = void 0 === o ? "label" : o,
              l = (0, f.isType)("Object", i) ? i.choices : Array.from(i.getElementsByTagName("OPTION")),
              h = n || Math.floor(new Date().valueOf() * Math.random()),
              u = !!i.disabled && i.disabled;
          l ? (this._store.dispatch((0, c.addGroup)({
            value: i.label,
            id: h,
            active: !0,
            disabled: u
          })), l.forEach(function (e) {
            var i = e.disabled || e.parentNode && e.parentNode.disabled;

            t._addChoice({
              value: e[r],
              label: (0, f.isType)("Object", e) ? e[a] : e.innerHTML,
              isSelected: e.selected,
              isDisabled: i,
              groupId: h,
              customProperties: e.customProperties,
              placeholder: e.placeholder
            });
          })) : this._store.dispatch((0, c.addGroup)({
            value: i.label,
            id: i.id,
            active: !1,
            disabled: i.disabled
          }));
        }, e.prototype._getTemplate = function (e) {
          for (var t, i = [], s = 1; s < arguments.length; s++) {
            i[s - 1] = arguments[s];
          }

          return (t = this._templates[e]).call.apply(t, n([this, this.config], i, !1));
        }, e.prototype._createTemplates = function () {
          var e = this.config.callbackOnCreateTemplates,
              t = {};
          e && "function" == typeof e && (t = e.call(this, f.strToEl)), this._templates = (0, r.default)(g.default, t);
        }, e.prototype._createElements = function () {
          this.containerOuter = new u.Container({
            element: this._getTemplate("containerOuter", this._direction, this._isSelectElement, this._isSelectOneElement, this.config.searchEnabled, this.passedElement.element.type, this.config.labelId),
            classNames: this.config.classNames,
            type: this.passedElement.element.type,
            position: this.config.position
          }), this.containerInner = new u.Container({
            element: this._getTemplate("containerInner"),
            classNames: this.config.classNames,
            type: this.passedElement.element.type,
            position: this.config.position
          }), this.input = new u.Input({
            element: this._getTemplate("input", this._placeholderValue),
            classNames: this.config.classNames,
            type: this.passedElement.element.type,
            preventPaste: !this.config.paste
          }), this.choiceList = new u.List({
            element: this._getTemplate("choiceList", this._isSelectOneElement)
          }), this.itemList = new u.List({
            element: this._getTemplate("itemList", this._isSelectOneElement)
          }), this.dropdown = new u.Dropdown({
            element: this._getTemplate("dropdown"),
            classNames: this.config.classNames,
            type: this.passedElement.element.type
          });
        }, e.prototype._createStructure = function () {
          this.passedElement.conceal(), this.containerInner.wrap(this.passedElement.element), this.containerOuter.wrap(this.containerInner.element), this._isSelectOneElement ? this.input.placeholder = this.config.searchPlaceholderValue || "" : this._placeholderValue && (this.input.placeholder = this._placeholderValue, this.input.setWidth()), this.containerOuter.element.appendChild(this.containerInner.element), this.containerOuter.element.appendChild(this.dropdown.element), this.containerInner.element.appendChild(this.itemList.element), this._isTextElement || this.dropdown.element.appendChild(this.choiceList.element), this._isSelectOneElement ? this.config.searchEnabled && this.dropdown.element.insertBefore(this.input.element, this.dropdown.element.firstChild) : this.containerInner.element.appendChild(this.input.element), this._isSelectElement && (this._highlightPosition = 0, this._isSearching = !1, this._startLoading(), this._presetGroups.length ? this._addPredefinedGroups(this._presetGroups) : this._addPredefinedChoices(this._presetChoices), this._stopLoading()), this._isTextElement && this._addPredefinedItems(this._presetItems);
        }, e.prototype._addPredefinedGroups = function (e) {
          var t = this,
              i = this.passedElement.placeholderOption;
          i && i.parentNode && "SELECT" === i.parentNode.tagName && this._addChoice({
            value: i.value,
            label: i.innerHTML,
            isSelected: i.selected,
            isDisabled: i.disabled,
            placeholder: !0
          }), e.forEach(function (e) {
            return t._addGroup({
              group: e,
              id: e.id || null
            });
          });
        }, e.prototype._addPredefinedChoices = function (e) {
          var t = this;
          this.config.shouldSort && e.sort(this.config.sorter);
          var i = e.some(function (e) {
            return e.selected;
          }),
              n = e.findIndex(function (e) {
            return void 0 === e.disabled || !e.disabled;
          });
          e.forEach(function (e, s) {
            var r = e.value,
                o = void 0 === r ? "" : r,
                a = e.label,
                c = e.customProperties,
                l = e.placeholder;
            if (t._isSelectElement) {
              if (e.choices) t._addGroup({
                group: e,
                id: e.id || null
              });else {
                var h = !(!t._isSelectOneElement || i || s !== n) || e.selected,
                    u = e.disabled;

                t._addChoice({
                  value: o,
                  label: a,
                  isSelected: !!h,
                  isDisabled: !!u,
                  placeholder: !!l,
                  customProperties: c
                });
              }
            } else t._addChoice({
              value: o,
              label: a,
              isSelected: !!e.selected,
              isDisabled: !!e.disabled,
              placeholder: !!e.placeholder,
              customProperties: c
            });
          });
        }, e.prototype._addPredefinedItems = function (e) {
          var t = this;
          e.forEach(function (e) {
            "object" == _typeof(e) && e.value && t._addItem({
              value: e.value,
              label: e.label,
              choiceId: e.id,
              customProperties: e.customProperties,
              placeholder: e.placeholder
            }), "string" == typeof e && t._addItem({
              value: e
            });
          });
        }, e.prototype._setChoiceOrItem = function (e) {
          var t = this;
          ({
            object: function object() {
              e.value && (t._isTextElement ? t._addItem({
                value: e.value,
                label: e.label,
                choiceId: e.id,
                customProperties: e.customProperties,
                placeholder: e.placeholder
              }) : t._addChoice({
                value: e.value,
                label: e.label,
                isSelected: !0,
                isDisabled: !1,
                customProperties: e.customProperties,
                placeholder: e.placeholder
              }));
            },
            string: function string() {
              t._isTextElement ? t._addItem({
                value: e
              }) : t._addChoice({
                value: e,
                label: e,
                isSelected: !0,
                isDisabled: !1
              });
            }
          })[(0, f.getType)(e).toLowerCase()]();
        }, e.prototype._findAndSelectChoiceByValue = function (e) {
          var t = this,
              i = this._store.choices.find(function (i) {
            return t.config.valueComparer(i.value, e);
          });

          i && !i.selected && this._addItem({
            value: i.value,
            label: i.label,
            choiceId: i.id,
            groupId: i.groupId,
            customProperties: i.customProperties,
            placeholder: i.placeholder,
            keyCode: i.keyCode
          });
        }, e.prototype._generatePlaceholderValue = function () {
          if (this._isSelectElement && this.passedElement.placeholderOption) {
            var e = this.passedElement.placeholderOption;
            return e ? e.text : null;
          }

          var t = this.config,
              i = t.placeholder,
              n = t.placeholderValue,
              s = this.passedElement.element.dataset;

          if (i) {
            if (n) return n;
            if (s.placeholder) return s.placeholder;
          }

          return null;
        }, e;
      }();

      t.default = E;
    },
    613: function _(e, t, i) {
      Object.defineProperty(t, "__esModule", {
        value: !0
      });

      var n = i(799),
          s = i(883),
          r = function () {
        function e(e) {
          var t = e.element,
              i = e.type,
              n = e.classNames,
              s = e.position;
          this.element = t, this.classNames = n, this.type = i, this.position = s, this.isOpen = !1, this.isFlipped = !1, this.isFocussed = !1, this.isDisabled = !1, this.isLoading = !1, this._onFocus = this._onFocus.bind(this), this._onBlur = this._onBlur.bind(this);
        }

        return e.prototype.addEventListeners = function () {
          this.element.addEventListener("focus", this._onFocus), this.element.addEventListener("blur", this._onBlur);
        }, e.prototype.removeEventListeners = function () {
          this.element.removeEventListener("focus", this._onFocus), this.element.removeEventListener("blur", this._onBlur);
        }, e.prototype.shouldFlip = function (e) {
          if ("number" != typeof e) return !1;
          var t = !1;
          return "auto" === this.position ? t = !window.matchMedia("(min-height: ".concat(e + 1, "px)")).matches : "top" === this.position && (t = !0), t;
        }, e.prototype.setActiveDescendant = function (e) {
          this.element.setAttribute("aria-activedescendant", e);
        }, e.prototype.removeActiveDescendant = function () {
          this.element.removeAttribute("aria-activedescendant");
        }, e.prototype.open = function (e) {
          this.element.classList.add(this.classNames.openState), this.element.setAttribute("aria-expanded", "true"), this.isOpen = !0, this.shouldFlip(e) && (this.element.classList.add(this.classNames.flippedState), this.isFlipped = !0);
        }, e.prototype.close = function () {
          this.element.classList.remove(this.classNames.openState), this.element.setAttribute("aria-expanded", "false"), this.removeActiveDescendant(), this.isOpen = !1, this.isFlipped && (this.element.classList.remove(this.classNames.flippedState), this.isFlipped = !1);
        }, e.prototype.focus = function () {
          this.isFocussed || this.element.focus();
        }, e.prototype.addFocusState = function () {
          this.element.classList.add(this.classNames.focusState);
        }, e.prototype.removeFocusState = function () {
          this.element.classList.remove(this.classNames.focusState);
        }, e.prototype.enable = function () {
          this.element.classList.remove(this.classNames.disabledState), this.element.removeAttribute("aria-disabled"), this.type === s.SELECT_ONE_TYPE && this.element.setAttribute("tabindex", "0"), this.isDisabled = !1;
        }, e.prototype.disable = function () {
          this.element.classList.add(this.classNames.disabledState), this.element.setAttribute("aria-disabled", "true"), this.type === s.SELECT_ONE_TYPE && this.element.setAttribute("tabindex", "-1"), this.isDisabled = !0;
        }, e.prototype.wrap = function (e) {
          (0, n.wrap)(e, this.element);
        }, e.prototype.unwrap = function (e) {
          this.element.parentNode && (this.element.parentNode.insertBefore(e, this.element), this.element.parentNode.removeChild(this.element));
        }, e.prototype.addLoadingState = function () {
          this.element.classList.add(this.classNames.loadingState), this.element.setAttribute("aria-busy", "true"), this.isLoading = !0;
        }, e.prototype.removeLoadingState = function () {
          this.element.classList.remove(this.classNames.loadingState), this.element.removeAttribute("aria-busy"), this.isLoading = !1;
        }, e.prototype._onFocus = function () {
          this.isFocussed = !0;
        }, e.prototype._onBlur = function () {
          this.isFocussed = !1;
        }, e;
      }();

      t.default = r;
    },
    217: function _(e, t) {
      Object.defineProperty(t, "__esModule", {
        value: !0
      });

      var i = function () {
        function e(e) {
          var t = e.element,
              i = e.type,
              n = e.classNames;
          this.element = t, this.classNames = n, this.type = i, this.isActive = !1;
        }

        return Object.defineProperty(e.prototype, "distanceFromTopWindow", {
          get: function get() {
            return this.element.getBoundingClientRect().bottom;
          },
          enumerable: !1,
          configurable: !0
        }), e.prototype.getChild = function (e) {
          return this.element.querySelector(e);
        }, e.prototype.show = function () {
          return this.element.classList.add(this.classNames.activeState), this.element.setAttribute("aria-expanded", "true"), this.isActive = !0, this;
        }, e.prototype.hide = function () {
          return this.element.classList.remove(this.classNames.activeState), this.element.setAttribute("aria-expanded", "false"), this.isActive = !1, this;
        }, e;
      }();

      t.default = i;
    },
    520: function _(e, t, i) {
      var n = this && this.__importDefault || function (e) {
        return e && e.__esModule ? e : {
          default: e
        };
      };

      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.WrappedSelect = t.WrappedInput = t.List = t.Input = t.Container = t.Dropdown = void 0;
      var s = n(i(217));
      t.Dropdown = s.default;
      var r = n(i(613));
      t.Container = r.default;
      var o = n(i(11));
      t.Input = o.default;
      var a = n(i(624));
      t.List = a.default;
      var c = n(i(541));
      t.WrappedInput = c.default;
      var l = n(i(982));
      t.WrappedSelect = l.default;
    },
    11: function _(e, t, i) {
      Object.defineProperty(t, "__esModule", {
        value: !0
      });

      var n = i(799),
          s = i(883),
          r = function () {
        function e(e) {
          var t = e.element,
              i = e.type,
              n = e.classNames,
              s = e.preventPaste;
          this.element = t, this.type = i, this.classNames = n, this.preventPaste = s, this.isFocussed = this.element.isEqualNode(document.activeElement), this.isDisabled = t.disabled, this._onPaste = this._onPaste.bind(this), this._onInput = this._onInput.bind(this), this._onFocus = this._onFocus.bind(this), this._onBlur = this._onBlur.bind(this);
        }

        return Object.defineProperty(e.prototype, "placeholder", {
          set: function set(e) {
            this.element.placeholder = e;
          },
          enumerable: !1,
          configurable: !0
        }), Object.defineProperty(e.prototype, "value", {
          get: function get() {
            return (0, n.sanitise)(this.element.value);
          },
          set: function set(e) {
            this.element.value = e;
          },
          enumerable: !1,
          configurable: !0
        }), Object.defineProperty(e.prototype, "rawValue", {
          get: function get() {
            return this.element.value;
          },
          enumerable: !1,
          configurable: !0
        }), e.prototype.addEventListeners = function () {
          this.element.addEventListener("paste", this._onPaste), this.element.addEventListener("input", this._onInput, {
            passive: !0
          }), this.element.addEventListener("focus", this._onFocus, {
            passive: !0
          }), this.element.addEventListener("blur", this._onBlur, {
            passive: !0
          });
        }, e.prototype.removeEventListeners = function () {
          this.element.removeEventListener("input", this._onInput), this.element.removeEventListener("paste", this._onPaste), this.element.removeEventListener("focus", this._onFocus), this.element.removeEventListener("blur", this._onBlur);
        }, e.prototype.enable = function () {
          this.element.removeAttribute("disabled"), this.isDisabled = !1;
        }, e.prototype.disable = function () {
          this.element.setAttribute("disabled", ""), this.isDisabled = !0;
        }, e.prototype.focus = function () {
          this.isFocussed || this.element.focus();
        }, e.prototype.blur = function () {
          this.isFocussed && this.element.blur();
        }, e.prototype.clear = function (e) {
          return void 0 === e && (e = !0), this.element.value && (this.element.value = ""), e && this.setWidth(), this;
        }, e.prototype.setWidth = function () {
          var e = this.element,
              t = e.style,
              i = e.value,
              n = e.placeholder;
          t.minWidth = "".concat(n.length + 1, "ch"), t.width = "".concat(i.length + 1, "ch");
        }, e.prototype.setActiveDescendant = function (e) {
          this.element.setAttribute("aria-activedescendant", e);
        }, e.prototype.removeActiveDescendant = function () {
          this.element.removeAttribute("aria-activedescendant");
        }, e.prototype._onInput = function () {
          this.type !== s.SELECT_ONE_TYPE && this.setWidth();
        }, e.prototype._onPaste = function (e) {
          this.preventPaste && e.preventDefault();
        }, e.prototype._onFocus = function () {
          this.isFocussed = !0;
        }, e.prototype._onBlur = function () {
          this.isFocussed = !1;
        }, e;
      }();

      t.default = r;
    },
    624: function _(e, t, i) {
      Object.defineProperty(t, "__esModule", {
        value: !0
      });

      var n = i(883),
          s = function () {
        function e(e) {
          var t = e.element;
          this.element = t, this.scrollPos = this.element.scrollTop, this.height = this.element.offsetHeight;
        }

        return e.prototype.clear = function () {
          this.element.innerHTML = "";
        }, e.prototype.append = function (e) {
          this.element.appendChild(e);
        }, e.prototype.getChild = function (e) {
          return this.element.querySelector(e);
        }, e.prototype.hasChildren = function () {
          return this.element.hasChildNodes();
        }, e.prototype.scrollToTop = function () {
          this.element.scrollTop = 0;
        }, e.prototype.scrollToChildElement = function (e, t) {
          var i = this;

          if (e) {
            var n = this.element.offsetHeight,
                s = this.element.scrollTop + n,
                r = e.offsetHeight,
                o = e.offsetTop + r,
                a = t > 0 ? this.element.scrollTop + o - s : e.offsetTop;
            requestAnimationFrame(function () {
              i._animateScroll(a, t);
            });
          }
        }, e.prototype._scrollDown = function (e, t, i) {
          var n = (i - e) / t,
              s = n > 1 ? n : 1;
          this.element.scrollTop = e + s;
        }, e.prototype._scrollUp = function (e, t, i) {
          var n = (e - i) / t,
              s = n > 1 ? n : 1;
          this.element.scrollTop = e - s;
        }, e.prototype._animateScroll = function (e, t) {
          var i = this,
              s = n.SCROLLING_SPEED,
              r = this.element.scrollTop,
              o = !1;
          t > 0 ? (this._scrollDown(r, s, e), r < e && (o = !0)) : (this._scrollUp(r, s, e), r > e && (o = !0)), o && requestAnimationFrame(function () {
            i._animateScroll(e, t);
          });
        }, e;
      }();

      t.default = s;
    },
    730: function _(e, t, i) {
      Object.defineProperty(t, "__esModule", {
        value: !0
      });

      var n = i(799),
          s = function () {
        function e(e) {
          var t = e.element,
              i = e.classNames;
          if (this.element = t, this.classNames = i, !(t instanceof HTMLInputElement || t instanceof HTMLSelectElement)) throw new TypeError("Invalid element passed");
          this.isDisabled = !1;
        }

        return Object.defineProperty(e.prototype, "isActive", {
          get: function get() {
            return "active" === this.element.dataset.choice;
          },
          enumerable: !1,
          configurable: !0
        }), Object.defineProperty(e.prototype, "dir", {
          get: function get() {
            return this.element.dir;
          },
          enumerable: !1,
          configurable: !0
        }), Object.defineProperty(e.prototype, "value", {
          get: function get() {
            return this.element.value;
          },
          set: function set(e) {
            this.element.value = e;
          },
          enumerable: !1,
          configurable: !0
        }), e.prototype.conceal = function () {
          this.element.classList.add(this.classNames.input), this.element.hidden = !0, this.element.tabIndex = -1;
          var e = this.element.getAttribute("style");
          e && this.element.setAttribute("data-choice-orig-style", e), this.element.setAttribute("data-choice", "active");
        }, e.prototype.reveal = function () {
          this.element.classList.remove(this.classNames.input), this.element.hidden = !1, this.element.removeAttribute("tabindex");
          var e = this.element.getAttribute("data-choice-orig-style");
          e ? (this.element.removeAttribute("data-choice-orig-style"), this.element.setAttribute("style", e)) : this.element.removeAttribute("style"), this.element.removeAttribute("data-choice"), this.element.value = this.element.value;
        }, e.prototype.enable = function () {
          this.element.removeAttribute("disabled"), this.element.disabled = !1, this.isDisabled = !1;
        }, e.prototype.disable = function () {
          this.element.setAttribute("disabled", ""), this.element.disabled = !0, this.isDisabled = !0;
        }, e.prototype.triggerEvent = function (e, t) {
          (0, n.dispatchEvent)(this.element, e, t);
        }, e;
      }();

      t.default = s;
    },
    541: function _(e, t, i) {
      var _n,
          s = this && this.__extends || (_n = function n(e, t) {
        return _n = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function (e, t) {
          e.__proto__ = t;
        } || function (e, t) {
          for (var i in t) {
            Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
          }
        }, _n(e, t);
      }, function (e, t) {
        if ("function" != typeof t && null !== t) throw new TypeError("Class extends value " + String(t) + " is not a constructor or null");

        function i() {
          this.constructor = e;
        }

        _n(e, t), e.prototype = null === t ? Object.create(t) : (i.prototype = t.prototype, new i());
      }),
          r = this && this.__importDefault || function (e) {
        return e && e.__esModule ? e : {
          default: e
        };
      };

      Object.defineProperty(t, "__esModule", {
        value: !0
      });

      var o = function (e) {
        function t(t) {
          var i = t.element,
              n = t.classNames,
              s = t.delimiter,
              r = e.call(this, {
            element: i,
            classNames: n
          }) || this;
          return r.delimiter = s, r;
        }

        return s(t, e), Object.defineProperty(t.prototype, "value", {
          get: function get() {
            return this.element.value;
          },
          set: function set(e) {
            this.element.setAttribute("value", e), this.element.value = e;
          },
          enumerable: !1,
          configurable: !0
        }), t;
      }(r(i(730)).default);

      t.default = o;
    },
    982: function _(e, t, i) {
      var _n2,
          s = this && this.__extends || (_n2 = function n(e, t) {
        return _n2 = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function (e, t) {
          e.__proto__ = t;
        } || function (e, t) {
          for (var i in t) {
            Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
          }
        }, _n2(e, t);
      }, function (e, t) {
        if ("function" != typeof t && null !== t) throw new TypeError("Class extends value " + String(t) + " is not a constructor or null");

        function i() {
          this.constructor = e;
        }

        _n2(e, t), e.prototype = null === t ? Object.create(t) : (i.prototype = t.prototype, new i());
      }),
          r = this && this.__importDefault || function (e) {
        return e && e.__esModule ? e : {
          default: e
        };
      };

      Object.defineProperty(t, "__esModule", {
        value: !0
      });

      var o = function (e) {
        function t(t) {
          var i = t.element,
              n = t.classNames,
              s = t.template,
              r = e.call(this, {
            element: i,
            classNames: n
          }) || this;
          return r.template = s, r;
        }

        return s(t, e), Object.defineProperty(t.prototype, "placeholderOption", {
          get: function get() {
            return this.element.querySelector('option[value=""]') || this.element.querySelector("option[placeholder]");
          },
          enumerable: !1,
          configurable: !0
        }), Object.defineProperty(t.prototype, "optionGroups", {
          get: function get() {
            return Array.from(this.element.getElementsByTagName("OPTGROUP"));
          },
          enumerable: !1,
          configurable: !0
        }), Object.defineProperty(t.prototype, "options", {
          get: function get() {
            return Array.from(this.element.options);
          },
          set: function set(e) {
            var t = this,
                i = document.createDocumentFragment();
            e.forEach(function (e) {
              return n = e, s = t.template(n), void i.appendChild(s);
              var n, s;
            }), this.appendDocFragment(i);
          },
          enumerable: !1,
          configurable: !0
        }), t.prototype.appendDocFragment = function (e) {
          this.element.innerHTML = "", this.element.appendChild(e);
        }, t;
      }(r(i(730)).default);

      t.default = o;
    },
    883: function _(e, t) {
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.SCROLLING_SPEED = t.SELECT_MULTIPLE_TYPE = t.SELECT_ONE_TYPE = t.TEXT_TYPE = t.KEY_CODES = t.ACTION_TYPES = t.EVENTS = void 0, t.EVENTS = {
        showDropdown: "showDropdown",
        hideDropdown: "hideDropdown",
        change: "change",
        choice: "choice",
        search: "search",
        addItem: "addItem",
        removeItem: "removeItem",
        highlightItem: "highlightItem",
        highlightChoice: "highlightChoice",
        unhighlightItem: "unhighlightItem"
      }, t.ACTION_TYPES = {
        ADD_CHOICE: "ADD_CHOICE",
        FILTER_CHOICES: "FILTER_CHOICES",
        ACTIVATE_CHOICES: "ACTIVATE_CHOICES",
        CLEAR_CHOICES: "CLEAR_CHOICES",
        ADD_GROUP: "ADD_GROUP",
        ADD_ITEM: "ADD_ITEM",
        REMOVE_ITEM: "REMOVE_ITEM",
        HIGHLIGHT_ITEM: "HIGHLIGHT_ITEM",
        CLEAR_ALL: "CLEAR_ALL",
        RESET_TO: "RESET_TO",
        SET_IS_LOADING: "SET_IS_LOADING"
      }, t.KEY_CODES = {
        BACK_KEY: 46,
        DELETE_KEY: 8,
        ENTER_KEY: 13,
        A_KEY: 65,
        ESC_KEY: 27,
        UP_KEY: 38,
        DOWN_KEY: 40,
        PAGE_UP_KEY: 33,
        PAGE_DOWN_KEY: 34
      }, t.TEXT_TYPE = "text", t.SELECT_ONE_TYPE = "select-one", t.SELECT_MULTIPLE_TYPE = "select-multiple", t.SCROLLING_SPEED = 4;
    },
    789: function _(e, t, i) {
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.DEFAULT_CONFIG = t.DEFAULT_CLASSNAMES = void 0;
      var n = i(799);
      t.DEFAULT_CLASSNAMES = {
        containerOuter: "choices",
        containerInner: "choices__inner",
        input: "choices__input",
        inputCloned: "choices__input--cloned",
        list: "choices__list",
        listItems: "choices__list--multiple",
        listSingle: "choices__list--single",
        listDropdown: "choices__list--dropdown",
        item: "choices__item",
        itemSelectable: "choices__item--selectable",
        itemDisabled: "choices__item--disabled",
        itemChoice: "choices__item--choice",
        placeholder: "choices__placeholder",
        group: "choices__group",
        groupHeading: "choices__heading",
        button: "choices__button",
        activeState: "is-active",
        focusState: "is-focused",
        openState: "is-open",
        disabledState: "is-disabled",
        highlightedState: "is-highlighted",
        selectedState: "is-selected",
        flippedState: "is-flipped",
        loadingState: "is-loading",
        noResults: "has-no-results",
        noChoices: "has-no-choices"
      }, t.DEFAULT_CONFIG = {
        items: [],
        choices: [],
        silent: !1,
        renderChoiceLimit: -1,
        maxItemCount: -1,
        addItems: !0,
        addItemFilter: null,
        removeItems: !0,
        removeItemButton: !1,
        editItems: !1,
        allowHTML: !0,
        duplicateItemsAllowed: !0,
        delimiter: ",",
        paste: !0,
        searchEnabled: !0,
        searchChoices: !0,
        searchFloor: 1,
        searchResultLimit: 4,
        searchFields: ["label", "value"],
        position: "auto",
        resetScrollPosition: !0,
        shouldSort: !0,
        shouldSortItems: !1,
        sorter: n.sortByAlpha,
        placeholder: !0,
        placeholderValue: null,
        searchPlaceholderValue: null,
        prependValue: null,
        appendValue: null,
        renderSelectedChoices: "auto",
        loadingText: "Loading...",
        noResultsText: "No results found",
        noChoicesText: "No choices to choose from",
        itemSelectText: "Press to select",
        uniqueItemText: "Only unique values can be added",
        customAddItemText: "Only values matching specific conditions can be added",
        addItemText: function addItemText(e) {
          return 'Press Enter to add <b>"'.concat((0, n.sanitise)(e), '"</b>');
        },
        maxItemText: function maxItemText(e) {
          return "Only ".concat(e, " values can be added");
        },
        valueComparer: function valueComparer(e, t) {
          return e === t;
        },
        fuseOptions: {
          includeScore: !0
        },
        labelId: "",
        callbackOnInit: null,
        callbackOnCreateTemplates: null,
        classNames: t.DEFAULT_CLASSNAMES
      };
    },
    18: function _(e, t) {
      Object.defineProperty(t, "__esModule", {
        value: !0
      });
    },
    978: function _(e, t) {
      Object.defineProperty(t, "__esModule", {
        value: !0
      });
    },
    948: function _(e, t) {
      Object.defineProperty(t, "__esModule", {
        value: !0
      });
    },
    359: function _(e, t) {
      Object.defineProperty(t, "__esModule", {
        value: !0
      });
    },
    285: function _(e, t) {
      Object.defineProperty(t, "__esModule", {
        value: !0
      });
    },
    533: function _(e, t) {
      Object.defineProperty(t, "__esModule", {
        value: !0
      });
    },
    187: function _(e, t, i) {
      var n = this && this.__createBinding || (Object.create ? function (e, t, i, n) {
        void 0 === n && (n = i), Object.defineProperty(e, n, {
          enumerable: !0,
          get: function get() {
            return t[i];
          }
        });
      } : function (e, t, i, n) {
        void 0 === n && (n = i), e[n] = t[i];
      }),
          s = this && this.__exportStar || function (e, t) {
        for (var i in e) {
          "default" === i || Object.prototype.hasOwnProperty.call(t, i) || n(t, e, i);
        }
      };

      Object.defineProperty(t, "__esModule", {
        value: !0
      }), s(i(18), t), s(i(978), t), s(i(948), t), s(i(359), t), s(i(285), t), s(i(533), t), s(i(287), t), s(i(132), t), s(i(837), t), s(i(598), t), s(i(369), t), s(i(37), t), s(i(47), t), s(i(923), t), s(i(876), t);
    },
    287: function _(e, t) {
      Object.defineProperty(t, "__esModule", {
        value: !0
      });
    },
    132: function _(e, t) {
      Object.defineProperty(t, "__esModule", {
        value: !0
      });
    },
    837: function _(e, t) {
      Object.defineProperty(t, "__esModule", {
        value: !0
      });
    },
    598: function _(e, t) {
      Object.defineProperty(t, "__esModule", {
        value: !0
      });
    },
    37: function _(e, t) {
      Object.defineProperty(t, "__esModule", {
        value: !0
      });
    },
    369: function _(e, t) {
      Object.defineProperty(t, "__esModule", {
        value: !0
      });
    },
    47: function _(e, t) {
      Object.defineProperty(t, "__esModule", {
        value: !0
      });
    },
    923: function _(e, t) {
      Object.defineProperty(t, "__esModule", {
        value: !0
      });
    },
    876: function _(e, t) {
      Object.defineProperty(t, "__esModule", {
        value: !0
      });
    },
    799: function _(e, t) {
      var i;
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.diff = t.cloneObject = t.existsInArray = t.dispatchEvent = t.sortByScore = t.sortByAlpha = t.strToEl = t.sanitise = t.isScrolledIntoView = t.getAdjacentEl = t.wrap = t.isType = t.getType = t.generateId = t.generateChars = t.getRandomNumber = void 0, t.getRandomNumber = function (e, t) {
        return Math.floor(Math.random() * (t - e) + e);
      }, t.generateChars = function (e) {
        return Array.from({
          length: e
        }, function () {
          return (0, t.getRandomNumber)(0, 36).toString(36);
        }).join("");
      }, t.generateId = function (e, i) {
        var n = e.id || e.name && "".concat(e.name, "-").concat((0, t.generateChars)(2)) || (0, t.generateChars)(4);
        return n = n.replace(/(:|\.|\[|\]|,)/g, ""), "".concat(i, "-").concat(n);
      }, t.getType = function (e) {
        return Object.prototype.toString.call(e).slice(8, -1);
      }, t.isType = function (e, i) {
        return null != i && (0, t.getType)(i) === e;
      }, t.wrap = function (e, t) {
        return void 0 === t && (t = document.createElement("div")), e.parentNode && (e.nextSibling ? e.parentNode.insertBefore(t, e.nextSibling) : e.parentNode.appendChild(t)), t.appendChild(e);
      }, t.getAdjacentEl = function (e, t, i) {
        void 0 === i && (i = 1);

        for (var n = "".concat(i > 0 ? "next" : "previous", "ElementSibling"), s = e[n]; s;) {
          if (s.matches(t)) return s;
          s = s[n];
        }

        return s;
      }, t.isScrolledIntoView = function (e, t, i) {
        return void 0 === i && (i = 1), !!e && (i > 0 ? t.scrollTop + t.offsetHeight >= e.offsetTop + e.offsetHeight : e.offsetTop >= t.scrollTop);
      }, t.sanitise = function (e) {
        return "string" != typeof e ? e : e.replace(/&/g, "&amp;").replace(/>/g, "&gt;").replace(/</g, "&lt;").replace(/"/g, "&quot;");
      }, t.strToEl = (i = document.createElement("div"), function (e) {
        var t = e.trim();
        i.innerHTML = t;

        for (var n = i.children[0]; i.firstChild;) {
          i.removeChild(i.firstChild);
        }

        return n;
      }), t.sortByAlpha = function (e, t) {
        var i = e.value,
            n = e.label,
            s = void 0 === n ? i : n,
            r = t.value,
            o = t.label,
            a = void 0 === o ? r : o;
        return s.localeCompare(a, [], {
          sensitivity: "base",
          ignorePunctuation: !0,
          numeric: !0
        });
      }, t.sortByScore = function (e, t) {
        var i = e.score,
            n = void 0 === i ? 0 : i,
            s = t.score;
        return n - (void 0 === s ? 0 : s);
      }, t.dispatchEvent = function (e, t, i) {
        void 0 === i && (i = null);
        var n = new CustomEvent(t, {
          detail: i,
          bubbles: !0,
          cancelable: !0
        });
        return e.dispatchEvent(n);
      }, t.existsInArray = function (e, t, i) {
        return void 0 === i && (i = "value"), e.some(function (e) {
          return "string" == typeof t ? e[i] === t.trim() : e[i] === t;
        });
      }, t.cloneObject = function (e) {
        return JSON.parse(JSON.stringify(e));
      }, t.diff = function (e, t) {
        var i = Object.keys(e).sort(),
            n = Object.keys(t).sort();
        return i.filter(function (e) {
          return n.indexOf(e) < 0;
        });
      };
    },
    273: function _(e, t) {
      var i = this && this.__spreadArray || function (e, t, i) {
        if (i || 2 === arguments.length) for (var n, s = 0, r = t.length; s < r; s++) {
          !n && s in t || (n || (n = Array.prototype.slice.call(t, 0, s)), n[s] = t[s]);
        }
        return e.concat(n || Array.prototype.slice.call(t));
      };

      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.defaultState = void 0, t.defaultState = [], t.default = function (e, n) {
        switch (void 0 === e && (e = t.defaultState), void 0 === n && (n = {}), n.type) {
          case "ADD_CHOICE":
            var s = n,
                r = {
              id: s.id,
              elementId: s.elementId,
              groupId: s.groupId,
              value: s.value,
              label: s.label || s.value,
              disabled: s.disabled || !1,
              selected: !1,
              active: !0,
              score: 9999,
              customProperties: s.customProperties,
              placeholder: s.placeholder || !1
            };
            return i(i([], e, !0), [r], !1);

          case "ADD_ITEM":
            var o = n;
            return o.choiceId > -1 ? e.map(function (e) {
              var t = e;
              return t.id === parseInt("".concat(o.choiceId), 10) && (t.selected = !0), t;
            }) : e;

          case "REMOVE_ITEM":
            var a = n;
            return a.choiceId && a.choiceId > -1 ? e.map(function (e) {
              var t = e;
              return t.id === parseInt("".concat(a.choiceId), 10) && (t.selected = !1), t;
            }) : e;

          case "FILTER_CHOICES":
            var c = n;
            return e.map(function (e) {
              var t = e;
              return t.active = c.results.some(function (e) {
                var i = e.item,
                    n = e.score;
                return i.id === t.id && (t.score = n, !0);
              }), t;
            });

          case "ACTIVATE_CHOICES":
            var l = n;
            return e.map(function (e) {
              var t = e;
              return t.active = l.active, t;
            });

          case "CLEAR_CHOICES":
            return t.defaultState;

          default:
            return e;
        }
      };
    },
    871: function _(e, t) {
      var i = this && this.__spreadArray || function (e, t, i) {
        if (i || 2 === arguments.length) for (var n, s = 0, r = t.length; s < r; s++) {
          !n && s in t || (n || (n = Array.prototype.slice.call(t, 0, s)), n[s] = t[s]);
        }
        return e.concat(n || Array.prototype.slice.call(t));
      };

      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.defaultState = void 0, t.defaultState = [], t.default = function (e, n) {
        switch (void 0 === e && (e = t.defaultState), void 0 === n && (n = {}), n.type) {
          case "ADD_GROUP":
            var s = n;
            return i(i([], e, !0), [{
              id: s.id,
              value: s.value,
              active: s.active,
              disabled: s.disabled
            }], !1);

          case "CLEAR_CHOICES":
            return [];

          default:
            return e;
        }
      };
    },
    655: function _(e, t, i) {
      var n = this && this.__importDefault || function (e) {
        return e && e.__esModule ? e : {
          default: e
        };
      };

      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.defaultState = void 0;
      var s = i(857),
          r = n(i(52)),
          o = n(i(871)),
          a = n(i(273)),
          c = n(i(502)),
          l = i(799);
      t.defaultState = {
        groups: [],
        items: [],
        choices: [],
        loading: !1
      };
      var h = (0, s.combineReducers)({
        items: r.default,
        groups: o.default,
        choices: a.default,
        loading: c.default
      });

      t.default = function (e, i) {
        var n = e;
        if ("CLEAR_ALL" === i.type) n = t.defaultState;else if ("RESET_TO" === i.type) return (0, l.cloneObject)(i.state);
        return h(n, i);
      };
    },
    52: function _(e, t) {
      var i = this && this.__spreadArray || function (e, t, i) {
        if (i || 2 === arguments.length) for (var n, s = 0, r = t.length; s < r; s++) {
          !n && s in t || (n || (n = Array.prototype.slice.call(t, 0, s)), n[s] = t[s]);
        }
        return e.concat(n || Array.prototype.slice.call(t));
      };

      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.defaultState = void 0, t.defaultState = [], t.default = function (e, n) {
        switch (void 0 === e && (e = t.defaultState), void 0 === n && (n = {}), n.type) {
          case "ADD_ITEM":
            var s = n;
            return i(i([], e, !0), [{
              id: s.id,
              choiceId: s.choiceId,
              groupId: s.groupId,
              value: s.value,
              label: s.label,
              active: !0,
              highlighted: !1,
              customProperties: s.customProperties,
              placeholder: s.placeholder || !1,
              keyCode: null
            }], !1).map(function (e) {
              var t = e;
              return t.highlighted = !1, t;
            });

          case "REMOVE_ITEM":
            return e.map(function (e) {
              var t = e;
              return t.id === n.id && (t.active = !1), t;
            });

          case "HIGHLIGHT_ITEM":
            var r = n;
            return e.map(function (e) {
              var t = e;
              return t.id === r.id && (t.highlighted = r.highlighted), t;
            });

          default:
            return e;
        }
      };
    },
    502: function _(e, t) {
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.defaultState = void 0, t.defaultState = !1, t.default = function (e, i) {
        return void 0 === e && (e = t.defaultState), void 0 === i && (i = {}), "SET_IS_LOADING" === i.type ? i.isLoading : e;
      };
    },
    744: function _(e, t, i) {
      var n = this && this.__spreadArray || function (e, t, i) {
        if (i || 2 === arguments.length) for (var n, s = 0, r = t.length; s < r; s++) {
          !n && s in t || (n || (n = Array.prototype.slice.call(t, 0, s)), n[s] = t[s]);
        }
        return e.concat(n || Array.prototype.slice.call(t));
      },
          s = this && this.__importDefault || function (e) {
        return e && e.__esModule ? e : {
          default: e
        };
      };

      Object.defineProperty(t, "__esModule", {
        value: !0
      });

      var r = i(857),
          o = s(i(655)),
          a = function () {
        function e() {
          this._store = (0, r.createStore)(o.default, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
        }

        return e.prototype.subscribe = function (e) {
          this._store.subscribe(e);
        }, e.prototype.dispatch = function (e) {
          this._store.dispatch(e);
        }, Object.defineProperty(e.prototype, "state", {
          get: function get() {
            return this._store.getState();
          },
          enumerable: !1,
          configurable: !0
        }), Object.defineProperty(e.prototype, "items", {
          get: function get() {
            return this.state.items;
          },
          enumerable: !1,
          configurable: !0
        }), Object.defineProperty(e.prototype, "activeItems", {
          get: function get() {
            return this.items.filter(function (e) {
              return !0 === e.active;
            });
          },
          enumerable: !1,
          configurable: !0
        }), Object.defineProperty(e.prototype, "highlightedActiveItems", {
          get: function get() {
            return this.items.filter(function (e) {
              return e.active && e.highlighted;
            });
          },
          enumerable: !1,
          configurable: !0
        }), Object.defineProperty(e.prototype, "choices", {
          get: function get() {
            return this.state.choices;
          },
          enumerable: !1,
          configurable: !0
        }), Object.defineProperty(e.prototype, "activeChoices", {
          get: function get() {
            return this.choices.filter(function (e) {
              return !0 === e.active;
            });
          },
          enumerable: !1,
          configurable: !0
        }), Object.defineProperty(e.prototype, "selectableChoices", {
          get: function get() {
            return this.choices.filter(function (e) {
              return !0 !== e.disabled;
            });
          },
          enumerable: !1,
          configurable: !0
        }), Object.defineProperty(e.prototype, "searchableChoices", {
          get: function get() {
            return this.selectableChoices.filter(function (e) {
              return !0 !== e.placeholder;
            });
          },
          enumerable: !1,
          configurable: !0
        }), Object.defineProperty(e.prototype, "placeholderChoice", {
          get: function get() {
            return n([], this.choices, !0).reverse().find(function (e) {
              return !0 === e.placeholder;
            });
          },
          enumerable: !1,
          configurable: !0
        }), Object.defineProperty(e.prototype, "groups", {
          get: function get() {
            return this.state.groups;
          },
          enumerable: !1,
          configurable: !0
        }), Object.defineProperty(e.prototype, "activeGroups", {
          get: function get() {
            var e = this.groups,
                t = this.choices;
            return e.filter(function (e) {
              var i = !0 === e.active && !1 === e.disabled,
                  n = t.some(function (e) {
                return !0 === e.active && !1 === e.disabled;
              });
              return i && n;
            }, []);
          },
          enumerable: !1,
          configurable: !0
        }), e.prototype.isLoading = function () {
          return this.state.loading;
        }, e.prototype.getChoiceById = function (e) {
          return this.activeChoices.find(function (t) {
            return t.id === parseInt(e, 10);
          });
        }, e.prototype.getGroupById = function (e) {
          return this.groups.find(function (t) {
            return t.id === e;
          });
        }, e;
      }();

      t.default = a;
    },
    686: function _(e, t) {
      Object.defineProperty(t, "__esModule", {
        value: !0
      });
      var i = {
        containerOuter: function containerOuter(e, t, i, n, s, r, o) {
          var a = e.classNames.containerOuter,
              c = Object.assign(document.createElement("div"), {
            className: a
          });
          return c.dataset.type = r, t && (c.dir = t), n && (c.tabIndex = 0), i && (c.setAttribute("role", s ? "combobox" : "listbox"), s && c.setAttribute("aria-autocomplete", "list")), c.setAttribute("aria-haspopup", "true"), c.setAttribute("aria-expanded", "false"), o && c.setAttribute("aria-labeledby", o), c;
        },
        containerInner: function containerInner(e) {
          var t = e.classNames.containerInner;
          return Object.assign(document.createElement("div"), {
            className: t
          });
        },
        itemList: function itemList(e, t) {
          var i = e.classNames,
              n = i.list,
              s = i.listSingle,
              r = i.listItems;
          return Object.assign(document.createElement("div"), {
            className: "".concat(n, " ").concat(t ? s : r)
          });
        },
        placeholder: function placeholder(e, t) {
          var i,
              n = e.allowHTML,
              s = e.classNames.placeholder;
          return Object.assign(document.createElement("div"), ((i = {
            className: s
          })[n ? "innerHTML" : "innerText"] = t, i));
        },
        item: function item(e, t, i) {
          var n,
              s,
              r = e.allowHTML,
              o = e.classNames,
              a = o.item,
              c = o.button,
              l = o.highlightedState,
              h = o.itemSelectable,
              u = o.placeholder,
              d = t.id,
              p = t.value,
              f = t.label,
              m = t.customProperties,
              v = t.active,
              g = t.disabled,
              _ = t.highlighted,
              y = t.placeholder,
              E = Object.assign(document.createElement("div"), ((n = {
            className: a
          })[r ? "innerHTML" : "innerText"] = f, n));

          if (Object.assign(E.dataset, {
            item: "",
            id: d,
            value: p,
            customProperties: m
          }), v && E.setAttribute("aria-selected", "true"), g && E.setAttribute("aria-disabled", "true"), y && E.classList.add(u), E.classList.add(_ ? l : h), i) {
            g && E.classList.remove(h), E.dataset.deletable = "";
            var b = "Remove item",
                S = Object.assign(document.createElement("button"), ((s = {
              type: "button",
              className: c
            })[r ? "innerHTML" : "innerText"] = b, s));
            S.setAttribute("aria-label", "".concat(b, ": '").concat(p, "'")), S.dataset.button = "", E.appendChild(S);
          }

          return E;
        },
        choiceList: function choiceList(e, t) {
          var i = e.classNames.list,
              n = Object.assign(document.createElement("div"), {
            className: i
          });
          return t || n.setAttribute("aria-multiselectable", "true"), n.setAttribute("role", "listbox"), n;
        },
        choiceGroup: function choiceGroup(e, t) {
          var i,
              n = e.allowHTML,
              s = e.classNames,
              r = s.group,
              o = s.groupHeading,
              a = s.itemDisabled,
              c = t.id,
              l = t.value,
              h = t.disabled,
              u = Object.assign(document.createElement("div"), {
            className: "".concat(r, " ").concat(h ? a : "")
          });
          return u.setAttribute("role", "group"), Object.assign(u.dataset, {
            group: "",
            id: c,
            value: l
          }), h && u.setAttribute("aria-disabled", "true"), u.appendChild(Object.assign(document.createElement("div"), ((i = {
            className: o
          })[n ? "innerHTML" : "innerText"] = l, i))), u;
        },
        choice: function choice(e, t, i) {
          var n,
              s = e.allowHTML,
              r = e.classNames,
              o = r.item,
              a = r.itemChoice,
              c = r.itemSelectable,
              l = r.selectedState,
              h = r.itemDisabled,
              u = r.placeholder,
              d = t.id,
              p = t.value,
              f = t.label,
              m = t.groupId,
              v = t.elementId,
              g = t.disabled,
              _ = t.selected,
              y = t.placeholder,
              E = Object.assign(document.createElement("div"), ((n = {
            id: v
          })[s ? "innerHTML" : "innerText"] = f, n.className = "".concat(o, " ").concat(a), n));
          return _ && E.classList.add(l), y && E.classList.add(u), E.setAttribute("role", m && m > 0 ? "treeitem" : "option"), Object.assign(E.dataset, {
            choice: "",
            id: d,
            value: p,
            selectText: i
          }), g ? (E.classList.add(h), E.dataset.choiceDisabled = "", E.setAttribute("aria-disabled", "true")) : (E.classList.add(c), E.dataset.choiceSelectable = ""), E;
        },
        input: function input(e, t) {
          var i = e.classNames,
              n = i.input,
              s = i.inputCloned,
              r = Object.assign(document.createElement("input"), {
            type: "search",
            name: "search_terms",
            className: "".concat(n, " ").concat(s),
            autocomplete: "off",
            autocapitalize: "off",
            spellcheck: !1
          });
          return r.setAttribute("role", "textbox"), r.setAttribute("aria-autocomplete", "list"), r.setAttribute("aria-label", t), r;
        },
        dropdown: function dropdown(e) {
          var t = e.classNames,
              i = t.list,
              n = t.listDropdown,
              s = document.createElement("div");
          return s.classList.add(i, n), s.setAttribute("aria-expanded", "false"), s;
        },
        notice: function notice(e, t, i) {
          var n,
              s = e.allowHTML,
              r = e.classNames,
              o = r.item,
              a = r.itemChoice,
              c = r.noResults,
              l = r.noChoices;
          void 0 === i && (i = "");
          var h = [o, a];
          return "no-choices" === i ? h.push(l) : "no-results" === i && h.push(c), Object.assign(document.createElement("div"), ((n = {})[s ? "innerHTML" : "innerText"] = t, n.className = h.join(" "), n));
        },
        option: function option(e) {
          var t = e.label,
              i = e.value,
              n = e.customProperties,
              s = e.active,
              r = e.disabled,
              o = new Option(t, i, !1, s);
          return n && (o.dataset.customProperties = "".concat(n)), o.disabled = !!r, o;
        }
      };
      t.default = i;
    },
    996: function _(e) {
      var t = function t(e) {
        return function (e) {
          return !!e && "object" == _typeof(e);
        }(e) && !function (e) {
          var t = Object.prototype.toString.call(e);
          return "[object RegExp]" === t || "[object Date]" === t || function (e) {
            return e.$$typeof === i;
          }(e);
        }(e);
      },
          i = "function" == typeof Symbol && Symbol.for ? Symbol.for("react.element") : 60103;

      function n(e, t) {
        return !1 !== t.clone && t.isMergeableObject(e) ? a((i = e, Array.isArray(i) ? [] : {}), e, t) : e;
        var i;
      }

      function s(e, t, i) {
        return e.concat(t).map(function (e) {
          return n(e, i);
        });
      }

      function r(e) {
        return Object.keys(e).concat(function (e) {
          return Object.getOwnPropertySymbols ? Object.getOwnPropertySymbols(e).filter(function (t) {
            return e.propertyIsEnumerable(t);
          }) : [];
        }(e));
      }

      function o(e, t) {
        try {
          return t in e;
        } catch (e) {
          return !1;
        }
      }

      function a(e, i, c) {
        (c = c || {}).arrayMerge = c.arrayMerge || s, c.isMergeableObject = c.isMergeableObject || t, c.cloneUnlessOtherwiseSpecified = n;
        var l = Array.isArray(i);
        return l === Array.isArray(e) ? l ? c.arrayMerge(e, i, c) : function (e, t, i) {
          var s = {};
          return i.isMergeableObject(e) && r(e).forEach(function (t) {
            s[t] = n(e[t], i);
          }), r(t).forEach(function (r) {
            (function (e, t) {
              return o(e, t) && !(Object.hasOwnProperty.call(e, t) && Object.propertyIsEnumerable.call(e, t));
            })(e, r) || (o(e, r) && i.isMergeableObject(t[r]) ? s[r] = function (e, t) {
              if (!t.customMerge) return a;
              var i = t.customMerge(e);
              return "function" == typeof i ? i : a;
            }(r, i)(e[r], t[r], i) : s[r] = n(t[r], i));
          }), s;
        }(e, i, c) : n(i, c);
      }

      a.all = function (e, t) {
        if (!Array.isArray(e)) throw new Error("first argument should be an array");
        return e.reduce(function (e, i) {
          return a(e, i, t);
        }, {});
      };

      var c = a;
      e.exports = c;
    },
    221: function _(e, t, i) {
      function n(e) {
        return Array.isArray ? Array.isArray(e) : "[object Array]" === l(e);
      }

      function s(e) {
        return "string" == typeof e;
      }

      function r(e) {
        return "number" == typeof e;
      }

      function o(e) {
        return "object" == _typeof(e);
      }

      function a(e) {
        return null != e;
      }

      function c(e) {
        return !e.trim().length;
      }

      function l(e) {
        return null == e ? void 0 === e ? "[object Undefined]" : "[object Null]" : Object.prototype.toString.call(e);
      }

      i.r(t), i.d(t, {
        default: function _default() {
          return R;
        }
      });
      var h = Object.prototype.hasOwnProperty;

      var u = /*#__PURE__*/function () {
        function u(e) {
          var _this = this;

          _classCallCheck(this, u);

          this._keys = [], this._keyMap = {};
          var t = 0;
          e.forEach(function (e) {
            var i = d(e);
            t += i.weight, _this._keys.push(i), _this._keyMap[i.id] = i, t += i.weight;
          }), this._keys.forEach(function (e) {
            e.weight /= t;
          });
        }

        _createClass(u, [{
          key: "get",
          value: function get(e) {
            return this._keyMap[e];
          }
        }, {
          key: "keys",
          value: function keys() {
            return this._keys;
          }
        }, {
          key: "toJSON",
          value: function toJSON() {
            return JSON.stringify(this._keys);
          }
        }]);

        return u;
      }();

      function d(e) {
        var t = null,
            i = null,
            r = null,
            o = 1;
        if (s(e) || n(e)) r = e, t = p(e), i = f(e);else {
          if (!h.call(e, "name")) throw new Error("Missing name property in key");
          var _n3 = e.name;
          if (r = _n3, h.call(e, "weight") && (o = e.weight, o <= 0)) throw new Error(function (e) {
            return "Property 'weight' in key '".concat(e, "' must be a positive integer");
          }(_n3));
          t = p(_n3), i = f(_n3);
        }
        return {
          path: t,
          id: i,
          weight: o,
          src: r
        };
      }

      function p(e) {
        return n(e) ? e : e.split(".");
      }

      function f(e) {
        return n(e) ? e.join(".") : e;
      }

      var m = {
        isCaseSensitive: !1,
        includeScore: !1,
        keys: [],
        shouldSort: !0,
        sortFn: function sortFn(e, t) {
          return e.score === t.score ? e.idx < t.idx ? -1 : 1 : e.score < t.score ? -1 : 1;
        },
        includeMatches: !1,
        findAllMatches: !1,
        minMatchCharLength: 1,
        location: 0,
        threshold: .6,
        distance: 100,
        useExtendedSearch: !1,
        getFn: function getFn(e, t) {
          var i = [],
              c = !1;

          var h = function h(e, t, u) {
            if (a(e)) if (t[u]) {
              var _d = e[t[u]];
              if (!a(_d)) return;
              if (u === t.length - 1 && (s(_d) || r(_d) || function (e) {
                return !0 === e || !1 === e || function (e) {
                  return o(e) && null !== e;
                }(e) && "[object Boolean]" == l(e);
              }(_d))) i.push(function (e) {
                return null == e ? "" : function (e) {
                  if ("string" == typeof e) return e;
                  var t = e + "";
                  return "0" == t && 1 / e == -1 / 0 ? "-0" : t;
                }(e);
              }(_d));else if (n(_d)) {
                c = !0;

                for (var _e = 0, _i = _d.length; _e < _i; _e += 1) {
                  h(_d[_e], t, u + 1);
                }
              } else t.length && h(_d, t, u + 1);
            } else i.push(e);
          };

          return h(e, s(t) ? t.split(".") : t, 0), c ? i : i[0];
        },
        ignoreLocation: !1,
        ignoreFieldNorm: !1,
        fieldNormWeight: 1
      };
      var v = /[^ ]+/g;

      var g = /*#__PURE__*/function () {
        function g() {
          var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
              _ref$getFn = _ref.getFn,
              e = _ref$getFn === void 0 ? m.getFn : _ref$getFn,
              _ref$fieldNormWeight = _ref.fieldNormWeight,
              t = _ref$fieldNormWeight === void 0 ? m.fieldNormWeight : _ref$fieldNormWeight;

          _classCallCheck(this, g);

          this.norm = function () {
            var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
            var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 3;
            var i = new Map(),
                n = Math.pow(10, t);
            return {
              get: function get(t) {
                var s = t.match(v).length;
                if (i.has(s)) return i.get(s);
                var r = 1 / Math.pow(s, .5 * e),
                    o = parseFloat(Math.round(r * n) / n);
                return i.set(s, o), o;
              },
              clear: function clear() {
                i.clear();
              }
            };
          }(t, 3), this.getFn = e, this.isCreated = !1, this.setIndexRecords();
        }

        _createClass(g, [{
          key: "setSources",
          value: function setSources() {
            var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
            this.docs = e;
          }
        }, {
          key: "setIndexRecords",
          value: function setIndexRecords() {
            var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
            this.records = e;
          }
        }, {
          key: "setKeys",
          value: function setKeys() {
            var _this2 = this;

            var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
            this.keys = e, this._keysMap = {}, e.forEach(function (e, t) {
              _this2._keysMap[e.id] = t;
            });
          }
        }, {
          key: "create",
          value: function create() {
            var _this3 = this;

            !this.isCreated && this.docs.length && (this.isCreated = !0, s(this.docs[0]) ? this.docs.forEach(function (e, t) {
              _this3._addString(e, t);
            }) : this.docs.forEach(function (e, t) {
              _this3._addObject(e, t);
            }), this.norm.clear());
          }
        }, {
          key: "add",
          value: function add(e) {
            var t = this.size();
            s(e) ? this._addString(e, t) : this._addObject(e, t);
          }
        }, {
          key: "removeAt",
          value: function removeAt(e) {
            this.records.splice(e, 1);

            for (var _t = e, _i2 = this.size(); _t < _i2; _t += 1) {
              this.records[_t].i -= 1;
            }
          }
        }, {
          key: "getValueForItemAtKeyId",
          value: function getValueForItemAtKeyId(e, t) {
            return e[this._keysMap[t]];
          }
        }, {
          key: "size",
          value: function size() {
            return this.records.length;
          }
        }, {
          key: "_addString",
          value: function _addString(e, t) {
            if (!a(e) || c(e)) return;
            var i = {
              v: e,
              i: t,
              n: this.norm.get(e)
            };
            this.records.push(i);
          }
        }, {
          key: "_addObject",
          value: function _addObject(e, t) {
            var _this4 = this;

            var i = {
              i: t,
              $: {}
            };
            this.keys.forEach(function (t, r) {
              var o = _this4.getFn(e, t.path);

              if (a(o)) if (n(o)) {
                (function () {
                  var e = [];
                  var t = [{
                    nestedArrIndex: -1,
                    value: o
                  }];

                  for (; t.length;) {
                    var _t$pop = t.pop(),
                        _i3 = _t$pop.nestedArrIndex,
                        _r = _t$pop.value;

                    if (a(_r)) if (s(_r) && !c(_r)) {
                      var _t2 = {
                        v: _r,
                        i: _i3,
                        n: _this4.norm.get(_r)
                      };
                      e.push(_t2);
                    } else n(_r) && _r.forEach(function (e, i) {
                      t.push({
                        nestedArrIndex: i,
                        value: e
                      });
                    });
                  }

                  i.$[r] = e;
                })();
              } else if (!c(o)) {
                var _e2 = {
                  v: o,
                  n: _this4.norm.get(o)
                };
                i.$[r] = _e2;
              }
            }), this.records.push(i);
          }
        }, {
          key: "toJSON",
          value: function toJSON() {
            return {
              keys: this.keys,
              records: this.records
            };
          }
        }]);

        return g;
      }();

      function _(e, t) {
        var _ref2 = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {},
            _ref2$getFn = _ref2.getFn,
            i = _ref2$getFn === void 0 ? m.getFn : _ref2$getFn,
            _ref2$fieldNormWeight = _ref2.fieldNormWeight,
            n = _ref2$fieldNormWeight === void 0 ? m.fieldNormWeight : _ref2$fieldNormWeight;

        var s = new g({
          getFn: i,
          fieldNormWeight: n
        });
        return s.setKeys(e.map(d)), s.setSources(t), s.create(), s;
      }

      function y(e) {
        var _ref3 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
            _ref3$errors = _ref3.errors,
            t = _ref3$errors === void 0 ? 0 : _ref3$errors,
            _ref3$currentLocation = _ref3.currentLocation,
            i = _ref3$currentLocation === void 0 ? 0 : _ref3$currentLocation,
            _ref3$expectedLocatio = _ref3.expectedLocation,
            n = _ref3$expectedLocatio === void 0 ? 0 : _ref3$expectedLocatio,
            _ref3$distance = _ref3.distance,
            s = _ref3$distance === void 0 ? m.distance : _ref3$distance,
            _ref3$ignoreLocation = _ref3.ignoreLocation,
            r = _ref3$ignoreLocation === void 0 ? m.ignoreLocation : _ref3$ignoreLocation;

        var o = t / e.length;
        if (r) return o;
        var a = Math.abs(n - i);
        return s ? o + a / s : a ? 1 : o;
      }

      var E = 32;

      function b(e) {
        var t = {};

        for (var _i4 = 0, _n4 = e.length; _i4 < _n4; _i4 += 1) {
          var _s = e.charAt(_i4);

          t[_s] = (t[_s] || 0) | 1 << _n4 - _i4 - 1;
        }

        return t;
      }

      var S = /*#__PURE__*/function () {
        function S(e) {
          var _this5 = this;

          var _ref4 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
              _ref4$location = _ref4.location,
              t = _ref4$location === void 0 ? m.location : _ref4$location,
              _ref4$threshold = _ref4.threshold,
              i = _ref4$threshold === void 0 ? m.threshold : _ref4$threshold,
              _ref4$distance = _ref4.distance,
              n = _ref4$distance === void 0 ? m.distance : _ref4$distance,
              _ref4$includeMatches = _ref4.includeMatches,
              s = _ref4$includeMatches === void 0 ? m.includeMatches : _ref4$includeMatches,
              _ref4$findAllMatches = _ref4.findAllMatches,
              r = _ref4$findAllMatches === void 0 ? m.findAllMatches : _ref4$findAllMatches,
              _ref4$minMatchCharLen = _ref4.minMatchCharLength,
              o = _ref4$minMatchCharLen === void 0 ? m.minMatchCharLength : _ref4$minMatchCharLen,
              _ref4$isCaseSensitive = _ref4.isCaseSensitive,
              a = _ref4$isCaseSensitive === void 0 ? m.isCaseSensitive : _ref4$isCaseSensitive,
              _ref4$ignoreLocation = _ref4.ignoreLocation,
              c = _ref4$ignoreLocation === void 0 ? m.ignoreLocation : _ref4$ignoreLocation;

          _classCallCheck(this, S);

          if (this.options = {
            location: t,
            threshold: i,
            distance: n,
            includeMatches: s,
            findAllMatches: r,
            minMatchCharLength: o,
            isCaseSensitive: a,
            ignoreLocation: c
          }, this.pattern = a ? e : e.toLowerCase(), this.chunks = [], !this.pattern.length) return;

          var l = function l(e, t) {
            _this5.chunks.push({
              pattern: e,
              alphabet: b(e),
              startIndex: t
            });
          },
              h = this.pattern.length;

          if (h > E) {
            var _e3 = 0;

            var _t3 = h % E,
                _i5 = h - _t3;

            for (; _e3 < _i5;) {
              l(this.pattern.substr(_e3, E), _e3), _e3 += E;
            }

            if (_t3) {
              var _e4 = h - E;

              l(this.pattern.substr(_e4), _e4);
            }
          } else l(this.pattern, 0);
        }

        _createClass(S, [{
          key: "searchIn",
          value: function searchIn(e) {
            var _this$options = this.options,
                t = _this$options.isCaseSensitive,
                i = _this$options.includeMatches;

            if (t || (e = e.toLowerCase()), this.pattern === e) {
              var _t4 = {
                isMatch: !0,
                score: 0
              };
              return i && (_t4.indices = [[0, e.length - 1]]), _t4;
            }

            var _this$options2 = this.options,
                n = _this$options2.location,
                s = _this$options2.distance,
                r = _this$options2.threshold,
                o = _this$options2.findAllMatches,
                a = _this$options2.minMatchCharLength,
                c = _this$options2.ignoreLocation;
            var l = [],
                h = 0,
                u = !1;
            this.chunks.forEach(function (_ref5) {
              var t = _ref5.pattern,
                  d = _ref5.alphabet,
                  p = _ref5.startIndex;

              var _ref6 = function (e, t, i) {
                var _ref7 = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {},
                    _ref7$location = _ref7.location,
                    n = _ref7$location === void 0 ? m.location : _ref7$location,
                    _ref7$distance = _ref7.distance,
                    s = _ref7$distance === void 0 ? m.distance : _ref7$distance,
                    _ref7$threshold = _ref7.threshold,
                    r = _ref7$threshold === void 0 ? m.threshold : _ref7$threshold,
                    _ref7$findAllMatches = _ref7.findAllMatches,
                    o = _ref7$findAllMatches === void 0 ? m.findAllMatches : _ref7$findAllMatches,
                    _ref7$minMatchCharLen = _ref7.minMatchCharLength,
                    a = _ref7$minMatchCharLen === void 0 ? m.minMatchCharLength : _ref7$minMatchCharLen,
                    _ref7$includeMatches = _ref7.includeMatches,
                    c = _ref7$includeMatches === void 0 ? m.includeMatches : _ref7$includeMatches,
                    _ref7$ignoreLocation = _ref7.ignoreLocation,
                    l = _ref7$ignoreLocation === void 0 ? m.ignoreLocation : _ref7$ignoreLocation;

                if (t.length > E) throw new Error("Pattern length exceeds max of 32.");
                var h = t.length,
                    u = e.length,
                    d = Math.max(0, Math.min(n, u));
                var p = r,
                    f = d;
                var v = a > 1 || c,
                    g = v ? Array(u) : [];

                var _;

                for (; (_ = e.indexOf(t, f)) > -1;) {
                  var _e5 = y(t, {
                    currentLocation: _,
                    expectedLocation: d,
                    distance: s,
                    ignoreLocation: l
                  });

                  if (p = Math.min(_e5, p), f = _ + h, v) {
                    var _e6 = 0;

                    for (; _e6 < h;) {
                      g[_ + _e6] = 1, _e6 += 1;
                    }
                  }
                }

                f = -1;
                var b = [],
                    S = 1,
                    I = h + u;
                var O = 1 << h - 1;

                for (var _n5 = 0; _n5 < h; _n5 += 1) {
                  var _r2 = 0,
                      _a = I;

                  for (; _r2 < _a;) {
                    y(t, {
                      errors: _n5,
                      currentLocation: d + _a,
                      expectedLocation: d,
                      distance: s,
                      ignoreLocation: l
                    }) <= p ? _r2 = _a : I = _a, _a = Math.floor((I - _r2) / 2 + _r2);
                  }

                  I = _a;

                  var _c = Math.max(1, d - _a + 1),
                      _m = o ? u : Math.min(d + _a, u) + h,
                      _2 = Array(_m + 2);

                  _2[_m + 1] = (1 << _n5) - 1;

                  for (var _r3 = _m; _r3 >= _c; _r3 -= 1) {
                    var _o = _r3 - 1,
                        _a2 = i[e.charAt(_o)];

                    if (v && (g[_o] = +!!_a2), _2[_r3] = (_2[_r3 + 1] << 1 | 1) & _a2, _n5 && (_2[_r3] |= (b[_r3 + 1] | b[_r3]) << 1 | 1 | b[_r3 + 1]), _2[_r3] & O && (S = y(t, {
                      errors: _n5,
                      currentLocation: _o,
                      expectedLocation: d,
                      distance: s,
                      ignoreLocation: l
                    }), S <= p)) {
                      if (p = S, f = _o, f <= d) break;
                      _c = Math.max(1, 2 * d - f);
                    }
                  }

                  if (y(t, {
                    errors: _n5 + 1,
                    currentLocation: d,
                    expectedLocation: d,
                    distance: s,
                    ignoreLocation: l
                  }) > p) break;
                  b = _2;
                }

                var C = {
                  isMatch: f >= 0,
                  score: Math.max(.001, S)
                };

                if (v) {
                  var _e7 = function () {
                    var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
                    var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : m.minMatchCharLength;
                    var i = [],
                        n = -1,
                        s = -1,
                        r = 0;

                    for (var _o2 = e.length; r < _o2; r += 1) {
                      var _o3 = e[r];
                      _o3 && -1 === n ? n = r : _o3 || -1 === n || (s = r - 1, s - n + 1 >= t && i.push([n, s]), n = -1);
                    }

                    return e[r - 1] && r - n >= t && i.push([n, r - 1]), i;
                  }(g, a);

                  _e7.length ? c && (C.indices = _e7) : C.isMatch = !1;
                }

                return C;
              }(e, t, d, {
                location: n + p,
                distance: s,
                threshold: r,
                findAllMatches: o,
                minMatchCharLength: a,
                includeMatches: i,
                ignoreLocation: c
              }),
                  f = _ref6.isMatch,
                  v = _ref6.score,
                  g = _ref6.indices;

              f && (u = !0), h += v, f && g && (l = [].concat(_toConsumableArray(l), _toConsumableArray(g)));
            });
            var d = {
              isMatch: u,
              score: u ? h / this.chunks.length : 1
            };
            return u && i && (d.indices = l), d;
          }
        }]);

        return S;
      }();

      var I = /*#__PURE__*/function () {
        function I(e) {
          _classCallCheck(this, I);

          this.pattern = e;
        }

        _createClass(I, [{
          key: "search",
          value: function search() {}
        }], [{
          key: "isMultiMatch",
          value: function isMultiMatch(e) {
            return O(e, this.multiRegex);
          }
        }, {
          key: "isSingleMatch",
          value: function isSingleMatch(e) {
            return O(e, this.singleRegex);
          }
        }]);

        return I;
      }();

      function O(e, t) {
        var i = e.match(t);
        return i ? i[1] : null;
      }

      var C = /*#__PURE__*/function (_I) {
        _inherits(C, _I);

        var _super = _createSuper(C);

        function C(e) {
          var _this6;

          var _ref8 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
              _ref8$location = _ref8.location,
              t = _ref8$location === void 0 ? m.location : _ref8$location,
              _ref8$threshold = _ref8.threshold,
              i = _ref8$threshold === void 0 ? m.threshold : _ref8$threshold,
              _ref8$distance = _ref8.distance,
              n = _ref8$distance === void 0 ? m.distance : _ref8$distance,
              _ref8$includeMatches = _ref8.includeMatches,
              s = _ref8$includeMatches === void 0 ? m.includeMatches : _ref8$includeMatches,
              _ref8$findAllMatches = _ref8.findAllMatches,
              r = _ref8$findAllMatches === void 0 ? m.findAllMatches : _ref8$findAllMatches,
              _ref8$minMatchCharLen = _ref8.minMatchCharLength,
              o = _ref8$minMatchCharLen === void 0 ? m.minMatchCharLength : _ref8$minMatchCharLen,
              _ref8$isCaseSensitive = _ref8.isCaseSensitive,
              a = _ref8$isCaseSensitive === void 0 ? m.isCaseSensitive : _ref8$isCaseSensitive,
              _ref8$ignoreLocation = _ref8.ignoreLocation,
              c = _ref8$ignoreLocation === void 0 ? m.ignoreLocation : _ref8$ignoreLocation;

          _classCallCheck(this, C);

          _this6 = _super.call(this, e), _this6._bitapSearch = new S(e, {
            location: t,
            threshold: i,
            distance: n,
            includeMatches: s,
            findAllMatches: r,
            minMatchCharLength: o,
            isCaseSensitive: a,
            ignoreLocation: c
          });
          return _this6;
        }

        _createClass(C, [{
          key: "search",
          value: function search(e) {
            return this._bitapSearch.searchIn(e);
          }
        }], [{
          key: "type",
          get: function get() {
            return "fuzzy";
          }
        }, {
          key: "multiRegex",
          get: function get() {
            return /^"(.*)"$/;
          }
        }, {
          key: "singleRegex",
          get: function get() {
            return /^(.*)$/;
          }
        }]);

        return C;
      }(I);

      var T = /*#__PURE__*/function (_I2) {
        _inherits(T, _I2);

        var _super2 = _createSuper(T);

        function T(e) {
          _classCallCheck(this, T);

          return _super2.call(this, e);
        }

        _createClass(T, [{
          key: "search",
          value: function search(e) {
            var t,
                i = 0;
            var n = [],
                s = this.pattern.length;

            for (; (t = e.indexOf(this.pattern, i)) > -1;) {
              i = t + s, n.push([t, i - 1]);
            }

            var r = !!n.length;
            return {
              isMatch: r,
              score: r ? 0 : 1,
              indices: n
            };
          }
        }], [{
          key: "type",
          get: function get() {
            return "include";
          }
        }, {
          key: "multiRegex",
          get: function get() {
            return /^'"(.*)"$/;
          }
        }, {
          key: "singleRegex",
          get: function get() {
            return /^'(.*)$/;
          }
        }]);

        return T;
      }(I);

      var L = [/*#__PURE__*/function (_I3) {
        _inherits(_class, _I3);

        var _super3 = _createSuper(_class);

        function _class(e) {
          _classCallCheck(this, _class);

          return _super3.call(this, e);
        }

        _createClass(_class, [{
          key: "search",
          value: function search(e) {
            var t = e === this.pattern;
            return {
              isMatch: t,
              score: t ? 0 : 1,
              indices: [0, this.pattern.length - 1]
            };
          }
        }], [{
          key: "type",
          get: function get() {
            return "exact";
          }
        }, {
          key: "multiRegex",
          get: function get() {
            return /^="(.*)"$/;
          }
        }, {
          key: "singleRegex",
          get: function get() {
            return /^=(.*)$/;
          }
        }]);

        return _class;
      }(I), T, /*#__PURE__*/function (_I4) {
        _inherits(_class2, _I4);

        var _super4 = _createSuper(_class2);

        function _class2(e) {
          _classCallCheck(this, _class2);

          return _super4.call(this, e);
        }

        _createClass(_class2, [{
          key: "search",
          value: function search(e) {
            var t = e.startsWith(this.pattern);
            return {
              isMatch: t,
              score: t ? 0 : 1,
              indices: [0, this.pattern.length - 1]
            };
          }
        }], [{
          key: "type",
          get: function get() {
            return "prefix-exact";
          }
        }, {
          key: "multiRegex",
          get: function get() {
            return /^\^"(.*)"$/;
          }
        }, {
          key: "singleRegex",
          get: function get() {
            return /^\^(.*)$/;
          }
        }]);

        return _class2;
      }(I), /*#__PURE__*/function (_I5) {
        _inherits(_class3, _I5);

        var _super5 = _createSuper(_class3);

        function _class3(e) {
          _classCallCheck(this, _class3);

          return _super5.call(this, e);
        }

        _createClass(_class3, [{
          key: "search",
          value: function search(e) {
            var t = !e.startsWith(this.pattern);
            return {
              isMatch: t,
              score: t ? 0 : 1,
              indices: [0, e.length - 1]
            };
          }
        }], [{
          key: "type",
          get: function get() {
            return "inverse-prefix-exact";
          }
        }, {
          key: "multiRegex",
          get: function get() {
            return /^!\^"(.*)"$/;
          }
        }, {
          key: "singleRegex",
          get: function get() {
            return /^!\^(.*)$/;
          }
        }]);

        return _class3;
      }(I), /*#__PURE__*/function (_I6) {
        _inherits(_class4, _I6);

        var _super6 = _createSuper(_class4);

        function _class4(e) {
          _classCallCheck(this, _class4);

          return _super6.call(this, e);
        }

        _createClass(_class4, [{
          key: "search",
          value: function search(e) {
            var t = !e.endsWith(this.pattern);
            return {
              isMatch: t,
              score: t ? 0 : 1,
              indices: [0, e.length - 1]
            };
          }
        }], [{
          key: "type",
          get: function get() {
            return "inverse-suffix-exact";
          }
        }, {
          key: "multiRegex",
          get: function get() {
            return /^!"(.*)"\$$/;
          }
        }, {
          key: "singleRegex",
          get: function get() {
            return /^!(.*)\$$/;
          }
        }]);

        return _class4;
      }(I), /*#__PURE__*/function (_I7) {
        _inherits(_class5, _I7);

        var _super7 = _createSuper(_class5);

        function _class5(e) {
          _classCallCheck(this, _class5);

          return _super7.call(this, e);
        }

        _createClass(_class5, [{
          key: "search",
          value: function search(e) {
            var t = e.endsWith(this.pattern);
            return {
              isMatch: t,
              score: t ? 0 : 1,
              indices: [e.length - this.pattern.length, e.length - 1]
            };
          }
        }], [{
          key: "type",
          get: function get() {
            return "suffix-exact";
          }
        }, {
          key: "multiRegex",
          get: function get() {
            return /^"(.*)"\$$/;
          }
        }, {
          key: "singleRegex",
          get: function get() {
            return /^(.*)\$$/;
          }
        }]);

        return _class5;
      }(I), /*#__PURE__*/function (_I8) {
        _inherits(_class6, _I8);

        var _super8 = _createSuper(_class6);

        function _class6(e) {
          _classCallCheck(this, _class6);

          return _super8.call(this, e);
        }

        _createClass(_class6, [{
          key: "search",
          value: function search(e) {
            var t = -1 === e.indexOf(this.pattern);
            return {
              isMatch: t,
              score: t ? 0 : 1,
              indices: [0, e.length - 1]
            };
          }
        }], [{
          key: "type",
          get: function get() {
            return "inverse-exact";
          }
        }, {
          key: "multiRegex",
          get: function get() {
            return /^!"(.*)"$/;
          }
        }, {
          key: "singleRegex",
          get: function get() {
            return /^!(.*)$/;
          }
        }]);

        return _class6;
      }(I), C],
          w = L.length,
          A = / +(?=([^\"]*\"[^\"]*\")*[^\"]*$)/,
          M = new Set([C.type, T.type]);
      var P = [];

      function x(e, t) {
        for (var _i6 = 0, _n6 = P.length; _i6 < _n6; _i6 += 1) {
          var _n7 = P[_i6];
          if (_n7.condition(e, t)) return new _n7(e, t);
        }

        return new S(e, t);
      }

      var N = "$and",
          D = function D(e) {
        return !(!e.$and && !e.$or);
      },
          j = function j(e) {
        return _defineProperty({}, N, Object.keys(e).map(function (t) {
          return _defineProperty({}, t, e[t]);
        }));
      };

      function F(e, t) {
        var _ref11 = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {},
            _ref11$auto = _ref11.auto,
            i = _ref11$auto === void 0 ? !0 : _ref11$auto;

        var r = function r(e) {
          var a = Object.keys(e);

          var c = function (e) {
            return !!e.$path;
          }(e);

          if (!c && a.length > 1 && !D(e)) return r(j(e));

          if (function (e) {
            return !n(e) && o(e) && !D(e);
          }(e)) {
            var _n8 = c ? e.$path : a[0],
                _r4 = c ? e.$val : e[_n8];

            if (!s(_r4)) throw new Error(function (e) {
              return "Invalid value for key ".concat(e);
            }(_n8));
            var _o4 = {
              keyId: f(_n8),
              pattern: _r4
            };
            return i && (_o4.searcher = x(_r4, t)), _o4;
          }

          var l = {
            children: [],
            operator: a[0]
          };
          return a.forEach(function (t) {
            var i = e[t];
            n(i) && i.forEach(function (e) {
              l.children.push(r(e));
            });
          }), l;
        };

        return D(e) || (e = j(e)), r(e);
      }

      function k(e, t) {
        var i = e.matches;
        t.matches = [], a(i) && i.forEach(function (e) {
          if (!a(e.indices) || !e.indices.length) return;
          var i = e.indices,
              n = e.value;
          var s = {
            indices: i,
            value: n
          };
          e.key && (s.key = e.key.src), e.idx > -1 && (s.refIndex = e.idx), t.matches.push(s);
        });
      }

      function K(e, t) {
        t.score = e.score;
      }

      var R = /*#__PURE__*/function () {
        function R(e) {
          var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
          var i = arguments.length > 2 ? arguments[2] : undefined;

          _classCallCheck(this, R);

          this.options = _objectSpread(_objectSpread({}, m), t), this.options.useExtendedSearch, this._keyStore = new u(this.options.keys), this.setCollection(e, i);
        }

        _createClass(R, [{
          key: "setCollection",
          value: function setCollection(e, t) {
            if (this._docs = e, t && !(t instanceof g)) throw new Error("Incorrect 'index' type");
            this._myIndex = t || _(this.options.keys, this._docs, {
              getFn: this.options.getFn,
              fieldNormWeight: this.options.fieldNormWeight
            });
          }
        }, {
          key: "add",
          value: function add(e) {
            a(e) && (this._docs.push(e), this._myIndex.add(e));
          }
        }, {
          key: "remove",
          value: function remove() {
            var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : function () {
              return !1;
            };
            var t = [];

            for (var _i7 = 0, _n9 = this._docs.length; _i7 < _n9; _i7 += 1) {
              var _s2 = this._docs[_i7];
              e(_s2, _i7) && (this.removeAt(_i7), _i7 -= 1, _n9 -= 1, t.push(_s2));
            }

            return t;
          }
        }, {
          key: "removeAt",
          value: function removeAt(e) {
            this._docs.splice(e, 1), this._myIndex.removeAt(e);
          }
        }, {
          key: "getIndex",
          value: function getIndex() {
            return this._myIndex;
          }
        }, {
          key: "search",
          value: function search(e) {
            var _ref12 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
                _ref12$limit = _ref12.limit,
                t = _ref12$limit === void 0 ? -1 : _ref12$limit;

            var _this$options3 = this.options,
                i = _this$options3.includeMatches,
                n = _this$options3.includeScore,
                o = _this$options3.shouldSort,
                a = _this$options3.sortFn,
                c = _this$options3.ignoreFieldNorm;
            var l = s(e) ? s(this._docs[0]) ? this._searchStringList(e) : this._searchObjectList(e) : this._searchLogical(e);
            return function (e, _ref13) {
              var _ref13$ignoreFieldNor = _ref13.ignoreFieldNorm,
                  t = _ref13$ignoreFieldNor === void 0 ? m.ignoreFieldNorm : _ref13$ignoreFieldNor;
              e.forEach(function (e) {
                var i = 1;
                e.matches.forEach(function (_ref14) {
                  var e = _ref14.key,
                      n = _ref14.norm,
                      s = _ref14.score;
                  var r = e ? e.weight : null;
                  i *= Math.pow(0 === s && r ? Number.EPSILON : s, (r || 1) * (t ? 1 : n));
                }), e.score = i;
              });
            }(l, {
              ignoreFieldNorm: c
            }), o && l.sort(a), r(t) && t > -1 && (l = l.slice(0, t)), function (e, t) {
              var _ref15 = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {},
                  _ref15$includeMatches = _ref15.includeMatches,
                  i = _ref15$includeMatches === void 0 ? m.includeMatches : _ref15$includeMatches,
                  _ref15$includeScore = _ref15.includeScore,
                  n = _ref15$includeScore === void 0 ? m.includeScore : _ref15$includeScore;

              var s = [];
              return i && s.push(k), n && s.push(K), e.map(function (e) {
                var i = e.idx,
                    n = {
                  item: t[i],
                  refIndex: i
                };
                return s.length && s.forEach(function (t) {
                  t(e, n);
                }), n;
              });
            }(l, this._docs, {
              includeMatches: i,
              includeScore: n
            });
          }
        }, {
          key: "_searchStringList",
          value: function _searchStringList(e) {
            var t = x(e, this.options),
                i = this._myIndex.records,
                n = [];
            return i.forEach(function (_ref16) {
              var e = _ref16.v,
                  i = _ref16.i,
                  s = _ref16.n;
              if (!a(e)) return;

              var _t$searchIn = t.searchIn(e),
                  r = _t$searchIn.isMatch,
                  o = _t$searchIn.score,
                  c = _t$searchIn.indices;

              r && n.push({
                item: e,
                idx: i,
                matches: [{
                  score: o,
                  value: e,
                  norm: s,
                  indices: c
                }]
              });
            }), n;
          }
        }, {
          key: "_searchLogical",
          value: function _searchLogical(e) {
            var _this7 = this;

            var t = F(e, this.options),
                i = function i(e, t, n) {
              if (!e.children) {
                var _i8 = e.keyId,
                    _s3 = e.searcher,
                    _r5 = _this7._findMatches({
                  key: _this7._keyStore.get(_i8),
                  value: _this7._myIndex.getValueForItemAtKeyId(t, _i8),
                  searcher: _s3
                });

                return _r5 && _r5.length ? [{
                  idx: n,
                  item: t,
                  matches: _r5
                }] : [];
              }

              var s = [];

              for (var _r6 = 0, _o5 = e.children.length; _r6 < _o5; _r6 += 1) {
                var _o6 = e.children[_r6],
                    _a3 = i(_o6, t, n);

                if (_a3.length) s.push.apply(s, _toConsumableArray(_a3));else if (e.operator === N) return [];
              }

              return s;
            },
                n = this._myIndex.records,
                s = {},
                r = [];

            return n.forEach(function (_ref17) {
              var e = _ref17.$,
                  n = _ref17.i;

              if (a(e)) {
                var _o7 = i(t, e, n);

                _o7.length && (s[n] || (s[n] = {
                  idx: n,
                  item: e,
                  matches: []
                }, r.push(s[n])), _o7.forEach(function (_ref18) {
                  var _s$n$matches;

                  var e = _ref18.matches;

                  (_s$n$matches = s[n].matches).push.apply(_s$n$matches, _toConsumableArray(e));
                }));
              }
            }), r;
          }
        }, {
          key: "_searchObjectList",
          value: function _searchObjectList(e) {
            var _this8 = this;

            var t = x(e, this.options),
                _this$_myIndex = this._myIndex,
                i = _this$_myIndex.keys,
                n = _this$_myIndex.records,
                s = [];
            return n.forEach(function (_ref19) {
              var e = _ref19.$,
                  n = _ref19.i;
              if (!a(e)) return;
              var r = [];
              i.forEach(function (i, n) {
                r.push.apply(r, _toConsumableArray(_this8._findMatches({
                  key: i,
                  value: e[n],
                  searcher: t
                })));
              }), r.length && s.push({
                idx: n,
                item: e,
                matches: r
              });
            }), s;
          }
        }, {
          key: "_findMatches",
          value: function _findMatches(_ref20) {
            var e = _ref20.key,
                t = _ref20.value,
                i = _ref20.searcher;
            if (!a(t)) return [];
            var s = [];
            if (n(t)) t.forEach(function (_ref21) {
              var t = _ref21.v,
                  n = _ref21.i,
                  r = _ref21.n;
              if (!a(t)) return;

              var _i$searchIn = i.searchIn(t),
                  o = _i$searchIn.isMatch,
                  c = _i$searchIn.score,
                  l = _i$searchIn.indices;

              o && s.push({
                score: c,
                key: e,
                value: t,
                idx: n,
                norm: r,
                indices: l
              });
            });else {
              var _n10 = t.v,
                  _r7 = t.n,
                  _i$searchIn2 = i.searchIn(_n10),
                  _o8 = _i$searchIn2.isMatch,
                  _a4 = _i$searchIn2.score,
                  _c2 = _i$searchIn2.indices;

              _o8 && s.push({
                score: _a4,
                key: e,
                value: _n10,
                norm: _r7,
                indices: _c2
              });
            }
            return s;
          }
        }]);

        return R;
      }();

      R.version = "6.5.3", R.createIndex = _, R.parseIndex = function (e) {
        var _ref22 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
            _ref22$getFn = _ref22.getFn,
            t = _ref22$getFn === void 0 ? m.getFn : _ref22$getFn,
            _ref22$fieldNormWeigh = _ref22.fieldNormWeight,
            i = _ref22$fieldNormWeigh === void 0 ? m.fieldNormWeight : _ref22$fieldNormWeigh;

        var n = e.keys,
            s = e.records,
            r = new g({
          getFn: t,
          fieldNormWeight: i
        });
        return r.setKeys(n), r.setIndexRecords(s), r;
      }, R.config = m, R.parseQuery = F, function () {
        P.push.apply(P, arguments);
      }( /*#__PURE__*/function () {
        function _class7(e) {
          var _ref23 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
              _ref23$isCaseSensitiv = _ref23.isCaseSensitive,
              t = _ref23$isCaseSensitiv === void 0 ? m.isCaseSensitive : _ref23$isCaseSensitiv,
              _ref23$includeMatches = _ref23.includeMatches,
              i = _ref23$includeMatches === void 0 ? m.includeMatches : _ref23$includeMatches,
              _ref23$minMatchCharLe = _ref23.minMatchCharLength,
              n = _ref23$minMatchCharLe === void 0 ? m.minMatchCharLength : _ref23$minMatchCharLe,
              _ref23$ignoreLocation = _ref23.ignoreLocation,
              s = _ref23$ignoreLocation === void 0 ? m.ignoreLocation : _ref23$ignoreLocation,
              _ref23$findAllMatches = _ref23.findAllMatches,
              r = _ref23$findAllMatches === void 0 ? m.findAllMatches : _ref23$findAllMatches,
              _ref23$location = _ref23.location,
              o = _ref23$location === void 0 ? m.location : _ref23$location,
              _ref23$threshold = _ref23.threshold,
              a = _ref23$threshold === void 0 ? m.threshold : _ref23$threshold,
              _ref23$distance = _ref23.distance,
              c = _ref23$distance === void 0 ? m.distance : _ref23$distance;

          _classCallCheck(this, _class7);

          this.query = null, this.options = {
            isCaseSensitive: t,
            includeMatches: i,
            minMatchCharLength: n,
            findAllMatches: r,
            ignoreLocation: s,
            location: o,
            threshold: a,
            distance: c
          }, this.pattern = t ? e : e.toLowerCase(), this.query = function (e) {
            var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
            return e.split("|").map(function (e) {
              var i = e.trim().split(A).filter(function (e) {
                return e && !!e.trim();
              }),
                  n = [];

              for (var _e8 = 0, _s4 = i.length; _e8 < _s4; _e8 += 1) {
                var _s5 = i[_e8];

                var _r8 = !1,
                    _o9 = -1;

                for (; !_r8 && ++_o9 < w;) {
                  var _e9 = L[_o9];

                  var _i9 = _e9.isMultiMatch(_s5);

                  _i9 && (n.push(new _e9(_i9, t)), _r8 = !0);
                }

                if (!_r8) for (_o9 = -1; ++_o9 < w;) {
                  var _e10 = L[_o9];

                  var _i10 = _e10.isSingleMatch(_s5);

                  if (_i10) {
                    n.push(new _e10(_i10, t));
                    break;
                  }
                }
              }

              return n;
            });
          }(this.pattern, this.options);
        }

        _createClass(_class7, [{
          key: "searchIn",
          value: function searchIn(e) {
            var t = this.query;
            if (!t) return {
              isMatch: !1,
              score: 1
            };
            var _this$options4 = this.options,
                i = _this$options4.includeMatches,
                n = _this$options4.isCaseSensitive;
            e = n ? e : e.toLowerCase();
            var s = 0,
                r = [],
                o = 0;

            for (var _n11 = 0, _a5 = t.length; _n11 < _a5; _n11 += 1) {
              var _a6 = t[_n11];
              r.length = 0, s = 0;

              for (var _t5 = 0, _n12 = _a6.length; _t5 < _n12; _t5 += 1) {
                var _n13 = _a6[_t5],
                    _n13$search = _n13.search(e),
                    _c3 = _n13$search.isMatch,
                    _l = _n13$search.indices,
                    _h = _n13$search.score;

                if (!_c3) {
                  o = 0, s = 0, r.length = 0;
                  break;
                }

                if (s += 1, o += _h, i) {
                  var _e11 = _n13.constructor.type;
                  M.has(_e11) ? r = [].concat(_toConsumableArray(r), _toConsumableArray(_l)) : r.push(_l);
                }
              }

              if (s) {
                var _e12 = {
                  isMatch: !0,
                  score: o / s
                };
                return i && (_e12.indices = r), _e12;
              }
            }

            return {
              isMatch: !1,
              score: 1
            };
          }
        }], [{
          key: "condition",
          value: function condition(e, t) {
            return t.useExtendedSearch;
          }
        }]);

        return _class7;
      }());
    },
    857: function _(e, t, i) {
      function n(e, t, i) {
        return t in e ? Object.defineProperty(e, t, {
          value: i,
          enumerable: !0,
          configurable: !0,
          writable: !0
        }) : e[t] = i, e;
      }

      function s(e, t) {
        var i = Object.keys(e);

        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t && (n = n.filter(function (t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable;
          })), i.push.apply(i, n);
        }

        return i;
      }

      function r(e) {
        for (var t = 1; t < arguments.length; t++) {
          var i = null != arguments[t] ? arguments[t] : {};
          t % 2 ? s(Object(i), !0).forEach(function (t) {
            n(e, t, i[t]);
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(i)) : s(Object(i)).forEach(function (t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(i, t));
          });
        }

        return e;
      }

      function o(e) {
        return "Minified Redux error #" + e + "; visit https://redux.js.org/Errors?code=" + e + " for the full message or use the non-minified dev environment for full errors. ";
      }

      i.r(t), i.d(t, {
        __DO_NOT_USE__ActionTypes: function __DO_NOT_USE__ActionTypes() {
          return l;
        },
        applyMiddleware: function applyMiddleware() {
          return v;
        },
        bindActionCreators: function bindActionCreators() {
          return f;
        },
        combineReducers: function combineReducers() {
          return d;
        },
        compose: function compose() {
          return m;
        },
        createStore: function createStore() {
          return u;
        }
      });

      var a = "function" == typeof Symbol && Symbol.observable || "@@observable",
          c = function c() {
        return Math.random().toString(36).substring(7).split("").join(".");
      },
          l = {
        INIT: "@@redux/INIT" + c(),
        REPLACE: "@@redux/REPLACE" + c(),
        PROBE_UNKNOWN_ACTION: function PROBE_UNKNOWN_ACTION() {
          return "@@redux/PROBE_UNKNOWN_ACTION" + c();
        }
      };

      function h(e) {
        if ("object" != _typeof(e) || null === e) return !1;

        for (var t = e; null !== Object.getPrototypeOf(t);) {
          t = Object.getPrototypeOf(t);
        }

        return Object.getPrototypeOf(e) === t;
      }

      function u(e, t, i) {
        var n;
        if ("function" == typeof t && "function" == typeof i || "function" == typeof i && "function" == typeof arguments[3]) throw new Error(o(0));

        if ("function" == typeof t && void 0 === i && (i = t, t = void 0), void 0 !== i) {
          if ("function" != typeof i) throw new Error(o(1));
          return i(u)(e, t);
        }

        if ("function" != typeof e) throw new Error(o(2));
        var s = e,
            r = t,
            c = [],
            d = c,
            p = !1;

        function f() {
          d === c && (d = c.slice());
        }

        function m() {
          if (p) throw new Error(o(3));
          return r;
        }

        function v(e) {
          if ("function" != typeof e) throw new Error(o(4));
          if (p) throw new Error(o(5));
          var t = !0;
          return f(), d.push(e), function () {
            if (t) {
              if (p) throw new Error(o(6));
              t = !1, f();
              var i = d.indexOf(e);
              d.splice(i, 1), c = null;
            }
          };
        }

        function g(e) {
          if (!h(e)) throw new Error(o(7));
          if (void 0 === e.type) throw new Error(o(8));
          if (p) throw new Error(o(9));

          try {
            p = !0, r = s(r, e);
          } finally {
            p = !1;
          }

          for (var t = c = d, i = 0; i < t.length; i++) {
            (0, t[i])();
          }

          return e;
        }

        function _(e) {
          if ("function" != typeof e) throw new Error(o(10));
          s = e, g({
            type: l.REPLACE
          });
        }

        function y() {
          var e,
              t = v;
          return (e = {
            subscribe: function subscribe(e) {
              if ("object" != _typeof(e) || null === e) throw new Error(o(11));

              function i() {
                e.next && e.next(m());
              }

              return i(), {
                unsubscribe: t(i)
              };
            }
          })[a] = function () {
            return this;
          }, e;
        }

        return g({
          type: l.INIT
        }), (n = {
          dispatch: g,
          subscribe: v,
          getState: m,
          replaceReducer: _
        })[a] = y, n;
      }

      function d(e) {
        for (var t = Object.keys(e), i = {}, n = 0; n < t.length; n++) {
          var s = t[n];
          "function" == typeof e[s] && (i[s] = e[s]);
        }

        var r,
            a = Object.keys(i);

        try {
          !function (e) {
            Object.keys(e).forEach(function (t) {
              var i = e[t];
              if (void 0 === i(void 0, {
                type: l.INIT
              })) throw new Error(o(12));
              if (void 0 === i(void 0, {
                type: l.PROBE_UNKNOWN_ACTION()
              })) throw new Error(o(13));
            });
          }(i);
        } catch (e) {
          r = e;
        }

        return function (e, t) {
          if (void 0 === e && (e = {}), r) throw r;

          for (var n = !1, s = {}, c = 0; c < a.length; c++) {
            var l = a[c],
                h = i[l],
                u = e[l],
                d = h(u, t);
            if (void 0 === d) throw t && t.type, new Error(o(14));
            s[l] = d, n = n || d !== u;
          }

          return (n = n || a.length !== Object.keys(e).length) ? s : e;
        };
      }

      function p(e, t) {
        return function () {
          return t(e.apply(this, arguments));
        };
      }

      function f(e, t) {
        if ("function" == typeof e) return p(e, t);
        if ("object" != _typeof(e) || null === e) throw new Error(o(16));
        var i = {};

        for (var n in e) {
          var s = e[n];
          "function" == typeof s && (i[n] = p(s, t));
        }

        return i;
      }

      function m() {
        for (var e = arguments.length, t = new Array(e), i = 0; i < e; i++) {
          t[i] = arguments[i];
        }

        return 0 === t.length ? function (e) {
          return e;
        } : 1 === t.length ? t[0] : t.reduce(function (e, t) {
          return function () {
            return e(t.apply(void 0, arguments));
          };
        });
      }

      function v() {
        for (var e = arguments.length, t = new Array(e), i = 0; i < e; i++) {
          t[i] = arguments[i];
        }

        return function (e) {
          return function () {
            var i = e.apply(void 0, arguments),
                n = function n() {
              throw new Error(o(15));
            },
                s = {
              getState: i.getState,
              dispatch: function dispatch() {
                return n.apply(void 0, arguments);
              }
            },
                a = t.map(function (e) {
              return e(s);
            });

            return n = m.apply(void 0, a)(i.dispatch), r(r({}, i), {}, {
              dispatch: n
            });
          };
        };
      }
    }
  },
      t = {};

  function i(n) {
    var s = t[n];
    if (void 0 !== s) return s.exports;
    var r = t[n] = {
      exports: {}
    };
    return e[n].call(r.exports, r, r.exports, i), r.exports;
  }

  i.n = function (e) {
    var t = e && e.__esModule ? function () {
      return e.default;
    } : function () {
      return e;
    };
    return i.d(t, {
      a: t
    }), t;
  }, i.d = function (e, t) {
    for (var n in t) {
      i.o(t, n) && !i.o(e, n) && Object.defineProperty(e, n, {
        enumerable: !0,
        get: t[n]
      });
    }
  }, i.o = function (e, t) {
    return Object.prototype.hasOwnProperty.call(e, t);
  }, i.r = function (e) {
    "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
      value: "Module"
    }), Object.defineProperty(e, "__esModule", {
      value: !0
    });
  };
  var n,
      s,
      r = {};
  n = i(373), s = i.n(n), i(187), i(883), i(789), i(686), r.default = s(), window.Choices = r.default;
}();

/***/ }),

/***/ "./src/js/vendor/focus-visible.js":
/*!****************************************!*\
  !*** ./src/js/vendor/focus-visible.js ***!
  \****************************************/
/***/ (() => {

/**
 * Applies the :focus-visible polyfill at the given scope.
 * A scope in this case is either the top-level Document or a Shadow Root.
 *
 * @param {(Document|ShadowRoot)} scope
 * @see https://github.com/WICG/focus-visible
 */
function applyFocusVisiblePolyfill(scope) {
  var hadKeyboardEvent = true;
  var hadFocusVisibleRecently = false;
  var hadFocusVisibleRecentlyTimeout = null;
  var inputTypesAllowlist = {
    text: true,
    search: true,
    url: true,
    tel: true,
    email: true,
    password: true,
    number: true,
    date: true,
    month: true,
    week: true,
    time: true,
    datetime: true,
    'datetime-local': true
  };
  /**
   * Helper function for legacy browsers and iframes which sometimes focus
   * elements like document, body, and non-interactive SVG.
   * @param {Element} el
   */

  function isValidFocusTarget(el) {
    if (el && el !== document && el.nodeName !== 'HTML' && el.nodeName !== 'BODY' && 'classList' in el && 'contains' in el.classList) {
      return true;
    }

    return false;
  }
  /**
   * Computes whether the given element should automatically trigger the
   * `focus-visible` class being added, i.e. whether it should always match
   * `:focus-visible` when focused.
   * @param {Element} el
   * @return {boolean}
   */


  function focusTriggersKeyboardModality(el) {
    var type = el.type;
    var tagName = el.tagName;

    if (tagName === 'INPUT' && inputTypesAllowlist[type] && !el.readOnly) {
      return true;
    }

    if (tagName === 'TEXTAREA' && !el.readOnly) {
      return true;
    }

    if (el.isContentEditable) {
      return true;
    }

    return false;
  }
  /**
   * Add the `focus-visible` class to the given element if it was not added by
   * the author.
   * @param {Element} el
   */


  function addFocusVisibleClass(el) {
    if (el.classList.contains('focus-visible')) {
      return;
    }

    el.classList.add('focus-visible');
    el.setAttribute('data-focus-visible-added', '');
  }
  /**
   * Remove the `focus-visible` class from the given element if it was not
   * originally added by the author.
   * @param {Element} el
   */


  function removeFocusVisibleClass(el) {
    if (!el.hasAttribute('data-focus-visible-added')) {
      return;
    }

    el.classList.remove('focus-visible');
    el.removeAttribute('data-focus-visible-added');
  }
  /**
   * If the most recent user interaction was via the keyboard;
   * and the key press did not include a meta, alt/option, or control key;
   * then the modality is keyboard. Otherwise, the modality is not keyboard.
   * Apply `focus-visible` to any current active element and keep track
   * of our keyboard modality state with `hadKeyboardEvent`.
   * @param {KeyboardEvent} e
   */


  function onKeyDown(e) {
    if (e.metaKey || e.altKey || e.ctrlKey) {
      return;
    }

    if (isValidFocusTarget(scope.activeElement)) {
      addFocusVisibleClass(scope.activeElement);
    }

    hadKeyboardEvent = true;
  }
  /**
   * If at any point a user clicks with a pointing device, ensure that we change
   * the modality away from keyboard.
   * This avoids the situation where a user presses a key on an already focused
   * element, and then clicks on a different element, focusing it with a
   * pointing device, while we still think we're in keyboard modality.
   * @param {Event} e
   */


  function onPointerDown(e) {
    hadKeyboardEvent = false;
  }
  /**
   * On `focus`, add the `focus-visible` class to the target if:
   * - the target received focus as a result of keyboard navigation, or
   * - the event target is an element that will likely require interaction
   *   via the keyboard (e.g. a text box)
   * @param {Event} e
   */


  function onFocus(e) {
    // Prevent IE from focusing the document or HTML element.
    if (!isValidFocusTarget(e.target)) {
      return;
    }

    if (hadKeyboardEvent || focusTriggersKeyboardModality(e.target)) {
      addFocusVisibleClass(e.target);
    }
  }
  /**
   * On `blur`, remove the `focus-visible` class from the target.
   * @param {Event} e
   */


  function onBlur(e) {
    if (!isValidFocusTarget(e.target)) {
      return;
    }

    if (e.target.classList.contains('focus-visible') || e.target.hasAttribute('data-focus-visible-added')) {
      // To detect a tab/window switch, we look for a blur event followed
      // rapidly by a visibility change.
      // If we don't see a visibility change within 100ms, it's probably a
      // regular focus change.
      hadFocusVisibleRecently = true;
      window.clearTimeout(hadFocusVisibleRecentlyTimeout);
      hadFocusVisibleRecentlyTimeout = window.setTimeout(function () {
        hadFocusVisibleRecently = false;
      }, 100);
      removeFocusVisibleClass(e.target);
    }
  }
  /**
   * If the user changes tabs, keep track of whether or not the previously
   * focused element had .focus-visible.
   * @param {Event} e
   */


  function onVisibilityChange(e) {
    if (document.visibilityState === 'hidden') {
      // If the tab becomes active again, the browser will handle calling focus
      // on the element (Safari actually calls it twice).
      // If this tab change caused a blur on an element with focus-visible,
      // re-apply the class when the user switches back to the tab.
      if (hadFocusVisibleRecently) {
        hadKeyboardEvent = true;
      }

      addInitialPointerMoveListeners();
    }
  }
  /**
   * Add a group of listeners to detect usage of any pointing devices.
   * These listeners will be added when the polyfill first loads, and anytime
   * the window is blurred, so that they are active when the window regains
   * focus.
   */


  function addInitialPointerMoveListeners() {
    document.addEventListener('mousemove', onInitialPointerMove);
    document.addEventListener('mousedown', onInitialPointerMove);
    document.addEventListener('mouseup', onInitialPointerMove);
    document.addEventListener('pointermove', onInitialPointerMove);
    document.addEventListener('pointerdown', onInitialPointerMove);
    document.addEventListener('pointerup', onInitialPointerMove);
    document.addEventListener('touchmove', onInitialPointerMove);
    document.addEventListener('touchstart', onInitialPointerMove);
    document.addEventListener('touchend', onInitialPointerMove);
  }

  function removeInitialPointerMoveListeners() {
    document.removeEventListener('mousemove', onInitialPointerMove);
    document.removeEventListener('mousedown', onInitialPointerMove);
    document.removeEventListener('mouseup', onInitialPointerMove);
    document.removeEventListener('pointermove', onInitialPointerMove);
    document.removeEventListener('pointerdown', onInitialPointerMove);
    document.removeEventListener('pointerup', onInitialPointerMove);
    document.removeEventListener('touchmove', onInitialPointerMove);
    document.removeEventListener('touchstart', onInitialPointerMove);
    document.removeEventListener('touchend', onInitialPointerMove);
  }
  /**
   * When the polfyill first loads, assume the user is in keyboard modality.
   * If any event is received from a pointing device (e.g. mouse, pointer,
   * touch), turn off keyboard modality.
   * This accounts for situations where focus enters the page from the URL bar.
   * @param {Event} e
   */


  function onInitialPointerMove(e) {
    // Work around a Safari quirk that fires a mousemove on <html> whenever the
    // window blurs, even if you're tabbing out of the page. ¯\_(ツ)_/¯
    if (e.target.nodeName && e.target.nodeName.toLowerCase() === 'html') {
      return;
    }

    hadKeyboardEvent = false;
    removeInitialPointerMoveListeners();
  } // For some kinds of state, we are interested in changes at the global scope
  // only. For example, global pointer input, global key presses and global
  // visibility change should affect the state at every scope:


  document.addEventListener('keydown', onKeyDown, true);
  document.addEventListener('mousedown', onPointerDown, true);
  document.addEventListener('pointerdown', onPointerDown, true);
  document.addEventListener('touchstart', onPointerDown, true);
  document.addEventListener('visibilitychange', onVisibilityChange, true);
  addInitialPointerMoveListeners(); // For focus and blur, we specifically care about state changes in the local
  // scope. This is because focus / blur events that originate from within a
  // shadow root are not re-dispatched from the host element if it was already
  // the active element in its own scope:

  scope.addEventListener('focus', onFocus, true);
  scope.addEventListener('blur', onBlur, true); // We detect that a node is a ShadowRoot by ensuring that it is a
  // DocumentFragment and also has a host property. This check covers native
  // implementation and polyfill implementation transparently. If we only cared
  // about the native implementation, we could just check if the scope was
  // an instance of a ShadowRoot.

  if (scope.nodeType === Node.DOCUMENT_FRAGMENT_NODE && scope.host) {
    // Since a ShadowRoot is a special kind of DocumentFragment, it does not
    // have a root element to add a class to. So, we add this attribute to the
    // host element instead:
    scope.host.setAttribute('data-js-focus-visible', '');
  } else if (scope.nodeType === Node.DOCUMENT_NODE) {
    document.documentElement.classList.add('js-focus-visible');
    document.documentElement.setAttribute('data-js-focus-visible', '');
  }
} // It is important to wrap all references to global window and document in
// these checks to support server-side rendering use cases
// @see https://github.com/WICG/focus-visible/issues/199


if (typeof window !== 'undefined' && typeof document !== 'undefined') {
  // Make the polyfill helper globally available. This can be used as a signal
  // to interested libraries that wish to coordinate with the polyfill for e.g.,
  // applying the polyfill to a shadow root:
  window.applyFocusVisiblePolyfill = applyFocusVisiblePolyfill; // Notify interested libraries of the polyfill's presence, in case the
  // polyfill was loaded lazily:

  var event;

  try {
    event = new CustomEvent('focus-visible-polyfill-ready');
  } catch (error) {
    // IE11 does not support using CustomEvent as a constructor directly:
    event = document.createEvent('CustomEvent');
    event.initCustomEvent('focus-visible-polyfill-ready', false, false, {});
  }

  window.dispatchEvent(event);
}

if (typeof document !== 'undefined') {
  // Apply the polyfill to the global document, so that no JavaScript
  // coordination is required to use the polyfill in the top-level document:
  applyFocusVisiblePolyfill(document);
}

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _vendor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_vendor */ "./src/js/_vendor.js");
/* harmony import */ var _vars__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_vars */ "./src/js/_vars.js");
/* harmony import */ var _functions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_functions */ "./src/js/_functions.js");
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./_components */ "./src/js/_components.js");
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_components__WEBPACK_IMPORTED_MODULE_3__);





window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 10 || document.documentElement.scrollTop > 10) {
    document.querySelector('header').classList.add('backgroundWhite');
  } else {
    document.querySelector('header').classList.remove('backgroundWhite');
  }
} // Swiper for home page


var swiper = new Swiper(".members__slider", {
  loop: true,
  slidesPerView: 3,
  spaceBetween: 30,
  centeredSlides: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true
  },
  breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 1,
      spaceBetween: 10
    },
    // when window width is >= 576px
    576: {
      slidesPerView: 2,
      spaceBetween: 10
    },
    // when window width is >= 768px
    992: {
      slidesPerView: 3,
      spaceBetween: 30
    }
  }
});
var swiperTeacher = new Swiper(".teacher__slider", {
  //loop: true,
  slidesPerView: 4,
  spaceBetween: 30,
  //centeredSlides: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true
  },
  breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 1,
      spaceBetween: 30
    },
    400: {
      slidesPerView: 2,
      spaceBetween: 10
    },
    // when window width is >= 576px
    576: {
      slidesPerView: 3,
      spaceBetween: 10
    },
    // when window width is >= 768px
    992: {
      slidesPerView: 4,
      spaceBetween: 30
    }
  }
});

var defaultSelect = function defaultSelect() {
  var element = document.querySelector('.filter__select');
  var choices = new Choices(element, {
    searchEnabled: false,
    itemSelectText: ''
  });
};

var defaultSelectOne = function defaultSelectOne() {
  var element = document.querySelector('.filter__select_1');
  var choices = new Choices(element, {
    searchEnabled: false,
    itemSelectText: ''
  });
};

var defaultSelectTwo = function defaultSelectTwo() {
  var element = document.querySelector('.filter__select_2');
  var choices = new Choices(element, {
    searchEnabled: false,
    itemSelectText: ''
  });
};

var defaultSelectThree = function defaultSelectThree() {
  var element = document.querySelector('.filter__select_3');
  var choices = new Choices(element, {
    searchEnabled: false,
    itemSelectText: ''
  });
};

var defaultSelectFour = function defaultSelectFour() {
  var element = document.querySelector('.filter__select_4');
  var choices = new Choices(element, {
    searchEnabled: false,
    itemSelectText: ''
  });
};

var defaultSelectFive = function defaultSelectFive() {
  var element = document.querySelector('.filter__select_5');
  var choices = new Choices(element, {
    searchEnabled: false,
    itemSelectText: ''
  });
};

var defaultSelectSix = function defaultSelectSix() {
  var element = document.querySelector('.filter__select_6');
  var choices = new Choices(element, {
    searchEnabled: false,
    itemSelectText: ''
  });
};

var defaultSelectSeven = function defaultSelectSeven() {
  var element = document.querySelector('.filter__select_7');
  var choices = new Choices(element, {
    searchEnabled: false,
    itemSelectText: ''
  });
};

defaultSelect();
defaultSelectOne();
defaultSelectTwo();
defaultSelectThree();
defaultSelectFour();
defaultSelectFive();
defaultSelectSix();
defaultSelectSeven();
var sliderTecher = document.querySelector('.teacher__slider');

if (sliderTecher.querySelectorAll('.swiper-slide').length <= 4) {
  sliderTecher.querySelector('.swiper-wrapper').style.justifyContent = 'center';
} else {
  sliderTecher.querySelector('.swiper-wrapper').style.justifyContent = 'flex-start';
}

;
})();

/******/ })()
;
//# sourceMappingURL=main.js.map