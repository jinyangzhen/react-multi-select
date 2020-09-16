(function(e, a) { for(var i in a) e[i] = a[i]; }(exports, /******/ (function(modules) { // webpackBootstrap
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
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 5);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("lodash");

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _lodash = __webpack_require__(1);

var _lodash2 = _interopRequireDefault(_lodash);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
/**
 * This component represents an individual item in the multi-select drop-down
 */


var DefaultItemRenderer = function (_Component) {
    _inherits(DefaultItemRenderer, _Component);

    function DefaultItemRenderer() {
        _classCallCheck(this, DefaultItemRenderer);

        return _possibleConstructorReturn(this, (DefaultItemRenderer.__proto__ || Object.getPrototypeOf(DefaultItemRenderer)).apply(this, arguments));
    }

    _createClass(DefaultItemRenderer, [{
        key: 'render',
        value: function render() {
            var _props = this.props,
                checked = _props.checked,
                option = _props.option,
                onClick = _props.onClick,
                disable = _props.disable,
                selectable = _props.selectable;

            var toggel = void 0;

            console.log(option.label + ' - disable: ' + disable + ' - checked: ' + checked);

            if (selectable) {
                toggel = _react2.default.createElement('input', { type: 'checkbox', onChange: onClick, checked: checked, tabIndex: '-1', disabled: disable });
            }

            return _react2.default.createElement(
                'span',
                null,
                toggel,
                _react2.default.createElement(
                    'span',
                    { style: _extends({}, styles.label, disable ? styles.disable : styles.enable) },
                    option.label
                )
            );
        }
    }]);

    return DefaultItemRenderer;
}(_react.Component);

var SelectItem = function (_Component2) {
    _inherits(SelectItem, _Component2);

    function SelectItem() {
        var _ref;

        var _temp, _this2, _ret;

        _classCallCheck(this, SelectItem);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this2 = _possibleConstructorReturn(this, (_ref = SelectItem.__proto__ || Object.getPrototypeOf(SelectItem)).call.apply(_ref, [this].concat(args))), _this2), _this2.state = {
            hovered: false
        }, _this2.onChecked = function (e) {
            var onSelectionChanged = _this2.props.onSelectionChanged;
            var checked = e.target.checked;


            onSelectionChanged(checked);
        }, _this2.toggleChecked = function () {
            var _this2$props = _this2.props,
                checked = _this2$props.checked,
                onSelectionChanged = _this2$props.onSelectionChanged;

            onSelectionChanged(!checked);
        }, _this2.handleClick = function (e) {
            var onClick = _this2.props.onClick;

            _this2.toggleChecked();
            onClick(e);

            e.preventDefault();
        }, _this2.handleKeyDown = function (e) {
            switch (e.which) {
                case 13: // Enter
                case 32:
                    // Space
                    _this2.toggleChecked();
                    break;
                default:
                    return;
            }

            e.preventDefault();
        }, _temp), _possibleConstructorReturn(_this2, _ret);
    }

    _createClass(SelectItem, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            this.updateFocus();
        }
    }, {
        key: 'componentDidUpdate',
        value: function componentDidUpdate() {
            this.updateFocus();
        }
    }, {
        key: 'updateFocus',
        value: function updateFocus() {
            var focused = this.props.focused;


            if (focused && this.itemRef) {
                this.itemRef.focus();
            }
        }
    }, {
        key: 'render',
        value: function render() {
            var _this3 = this;

            var _props2 = this.props,
                ItemRenderer = _props2.ItemRenderer,
                option = _props2.option,
                checked = _props2.checked,
                focused = _props2.focused,
                selected = _props2.selected,
                options = _props2.options,
                disable = _props2.disable,
                selectable = _props2.selectable;
            var hovered = this.state.hovered;


            var focusStyle = focused || hovered ? styles.itemContainerHover : undefined;

            var o = _lodash2.default.clone(option);
            if (o.level && _lodash2.default.isNumber(o.level) && o.level >= 0) {
                //add indent space to hierarchical item, 
                //3 whitespace each level, trim() is for backward compatible
                if (o.label) {
                    o.label = ' '.repeat(3 * o.level) + o.label.trim();
                } else if (o.text) {
                    o.text = ' '.repeat(3 * o.level) + o.text.trim();
                }
            }

            return _react2.default.createElement(
                'label',
                {
                    role: 'option',
                    'aria-selected': checked,
                    selected: checked,
                    title: o.text,
                    tabIndex: '-1',
                    style: _extends({}, styles.itemContainer, focusStyle, disable ? styles.disable : styles.enable, selectable ? {} : styles.unselectable),
                    onClick: selectable ? this.handleClick : Function.prototype //false do nothing
                    , ref: function ref(_ref2) {
                        return _this3.itemRef = _ref2;
                    },
                    onKeyDown: selectable ? this.handleKeyDown : Function.prototype,
                    onMouseOver: function onMouseOver() {
                        return _this3.setState({ hovered: true });
                    },
                    onMouseOut: function onMouseOut() {
                        return _this3.setState({ hovered: false });
                    }
                },
                _react2.default.createElement(ItemRenderer, {
                    option: o,
                    checked: checked,
                    onClick: this.handleClick,
                    selected: selected,
                    options: options,
                    disable: disable,
                    selectable: selectable
                })
            );
        }
    }]);

    return SelectItem;
}(_react.Component);

SelectItem.defaultProps = {
    ItemRenderer: DefaultItemRenderer
};


var styles = {
    itemContainer: {
        boxSizing: 'border-box',
        backgroundColor: '#fff',
        color: '#666666',
        cursor: 'pointer',
        display: 'block',
        padding: '10px 10px',
        outline: 0
    },
    itemContainerHover: {
        backgroundColor: 'rgba(0,0,0,0.06)',
        outline: 0
    },
    disable: {
        color: 'rgba(0, 0, 0, 0.27)',
        cursor: 'default'
    },
    unselectable: {
        color: 'rgba(0, 0, 0, 0.87)',
        cursor: 'default'
    },
    enable: {
        color: 'rgba(0, 0, 0, 0.87)',
        cursor: 'pointer'
    },
    label: {
        display: 'inline-block',
        verticalAlign: 'middle',
        borderBottomRightRadius: '0px',
        borderTopRightRadius: '0px',
        padding: '2px 5px',
        whiteSpace: 'pre',
        wordWrap: 'normal'
    }
};

exports.default = SelectItem;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _styleIt = __webpack_require__(8);

var _styleIt2 = _interopRequireDefault(_styleIt);

var _loadingIndicator = __webpack_require__(6);

var _loadingIndicator2 = _interopRequireDefault(_loadingIndicator);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
/**
 * A generic dropdown component.  It takes the children of the component
 * and hosts it in the component.  When the component is selected, it
 * drops-down the contentComponent and applies the contentProps.
 */


var Dropdown = function (_Component) {
    _inherits(Dropdown, _Component);

    function Dropdown() {
        var _ref;

        var _temp, _this, _ret;

        _classCallCheck(this, Dropdown);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Dropdown.__proto__ || Object.getPrototypeOf(Dropdown)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
            expanded: false,
            hasFocus: false,
            hovered: false,
            clearable: false
        }, _this.handleDocumentClick = function (event) {
            if (_this.wrapper && !_this.wrapper.contains(event.target)) {
                _this.setState({ expanded: false });
            }
        }, _this.handleKeyDown = function (e) {
            if (!_this.props.disabled) {
                switch (e.which) {
                    case 27:
                        // Escape
                        _this.toggleExpanded(false);
                        break;
                    case 38:
                        // Up Arrow
                        _this.toggleExpanded(false);
                        break;
                    case 40:
                        // Down Arrow
                        _this.toggleExpanded(true);
                        break;
                    default:
                        return;
                }
            }

            e.preventDefault();
        }, _this.handleFocus = function (e) {
            var hasFocus = _this.state.hasFocus;


            if (!_this.props.disabled && e.target === _this.wrapper && !hasFocus) {
                _this.setState({ hasFocus: true });
            }
        }, _this.handleBlur = function (e) {
            var hasFocus = _this.state.hasFocus;


            if (!_this.props.disabled && hasFocus) {
                _this.setState({ hasFocus: false });
            }
        }, _this.toggleExpanded = function (value) {
            var isLoading = _this.props.isLoading;
            var expanded = _this.state.expanded;


            if (isLoading) {
                return;
            }

            var newExpanded = value === undefined ? !expanded : !!value;

            _this.setState({ expanded: newExpanded });

            if (!newExpanded && _this.wrapper) {
                _this.wrapper.focus();
            }
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(Dropdown, [{
        key: 'componentWillMount',
        value: function componentWillMount() {
            this.setState({ clearable: this.props.contentProps.selected.length > 0 });
        }
    }, {
        key: 'componentWillUpdate',
        value: function componentWillUpdate() {
            document.addEventListener('touchstart', this.handleDocumentClick);
            document.addEventListener('mousedown', this.handleDocumentClick);
        }
    }, {
        key: 'componentWillUnmount',
        value: function componentWillUnmount() {
            document.removeEventListener('touchstart', this.handleDocumentClick);
            document.removeEventListener('mousedown', this.handleDocumentClick);
        }
    }, {
        key: 'renderPanel',
        value: function renderPanel() {
            var self = this;
            var _props = this.props,
                ContentComponent = _props.contentComponent,
                contentProps = _props.contentProps;


            var relay = contentProps.onSelectedChanged;

            //react on onSelectedChanged called by sub component SelectPanel, make sure show close btn if non empty
            contentProps['onSelectedChanged'] = function (values) {
                self.setState({ clearable: values.length > 0 });
                //rely selected values
                relay(values);
            };

            var panelStyles = _.clone(styles.panelContainer);

            var _wrapper$getBoundingC = this.wrapper.getBoundingClientRect(),
                bottom = _wrapper$getBoundingC.bottom;

            var spaceToViewportBottom = window.innerHeight - bottom;
            var options = contentProps.options;

            var dropdownHeight = Math.min((options.length + 1) * 34 + 44, 500);
            if (dropdownHeight > spaceToViewportBottom) {
                _.assign(panelStyles, { top: 'unset', bottom: '100%', borderBottomStyle: 'none', borderTopColor: '#96C8DA' });
            }

            return _react2.default.createElement(
                'div',
                { style: panelStyles },
                _react2.default.createElement(ContentComponent, _extends({ ref: 'selectPanel' }, contentProps))
            );
        }
    }, {
        key: 'render',
        value: function render() {
            var _this2 = this;

            var self = this;
            var _state = this.state,
                expanded = _state.expanded,
                hasFocus = _state.hasFocus,
                hovered = _state.hovered,
                clearable = _state.clearable;
            var _props2 = this.props,
                children = _props2.children,
                isLoading = _props2.isLoading,
                contentProps = _props2.contentProps,
                disabled = _props2.disabled;


            var expandedHeaderStyle = expanded ? styles.dropdownHeaderExpanded : undefined;

            var focusedHeaderStyle = hasFocus ? styles.dropdownHeaderFocused : undefined;

            var hoverHeaderStyle = hovered && !hasFocus && !expanded ? styles.dropdownHeaderHover : undefined;

            // const arrowStyle = expanded
            //     ? styles.dropdownArrowUp
            //     : styles.dropdownArrowDown;

            // const focusedArrowStyle = hasFocus || expanded
            //     ? styles.dropdownArrowDownFocused
            //     : undefined;

            return _react2.default.createElement(
                'div',
                { id: 'simple-multiple-select',
                    tabIndex: '0',
                    role: 'combobox',
                    'aria-expanded': expanded,
                    'aria-readonly': 'true',
                    style: styles.dropdownContainer,
                    ref: function ref(_ref2) {
                        return _this2.wrapper = _ref2;
                    },
                    onKeyDown: this.handleKeyDown,
                    onFocus: this.handleFocus,
                    onBlur: this.handleBlur,
                    onMouseEnter: function onMouseEnter() {
                        if (disabled) {
                            return;
                        }
                        _this2.setState({ hovered: true });
                    },
                    onMouseLeave: function onMouseLeave() {
                        if (disabled) {
                            return;
                        }
                        _this2.setState({ hovered: false });
                    } },
                _react2.default.createElement(
                    _styleIt2.default,
                    null,
                    xClass
                ),
                _react2.default.createElement(
                    'div',
                    { style: _extends({}, styles.dropdownHeader, disabled ? styles.disable : styles.enable, expandedHeaderStyle, hoverHeaderStyle, focusedHeaderStyle) },
                    _react2.default.createElement(
                        'span',
                        { style: styles.dropdownChildren, onClick: function onClick() {
                                if (disabled) {
                                    return;
                                }
                                _this2.toggleExpanded();
                            } },
                        children
                    ),
                    _react2.default.createElement(
                        'span',
                        { style: styles.loadingContainer },
                        isLoading && _react2.default.createElement(_loadingIndicator2.default, null)
                    ),
                    (expanded || hovered) && clearable ? _react2.default.createElement('span', { className: 'xButton', onClick: function onClick(e) {
                            if (disabled) {
                                return;
                            }
                            if (self.refs.selectPanel) {
                                self.refs.selectPanel.selectNone();
                            } else {
                                contentProps.onSelectedChanged([]);
                                self.setState({ clearable: false });
                            }
                            e.stopPropagation();
                            e.preventDefault();
                        } }) : '',
                    _react2.default.createElement(
                        'span',
                        { id: 'dropdown-arrow', style: styles.dropdownArrow, onClick: function onClick() {
                                if (disabled) {
                                    return;
                                }
                                _this2.toggleExpanded();
                            } },
                        _react2.default.createElement('span', { style: _extends({}, styles.dropdownArrowDown)
                        })
                    )
                ),
                expanded && this.renderPanel()
            );
        }
    }]);

    return Dropdown;
}(_react.Component);

var xClass = '\n                .xButton {\n                    display: table-cell;\n                    position: relative;\n                    width: 16px;\n                    height: 16px;\n                    transition: transform .25s ease-in-out;\n                }\n                .xButton:before {\n                    content: "";\n                    position: absolute;\n                    display: block;\n                    margin: auto;\n                    left: 0;\n                    right: 0;\n                    top: 0;\n                    bottom: 0;\n                    width: 16px;\n                    height: 0;\n                    border-top: 1px solid rgba(0,0,0,0.5);\n                    transform: rotate(45deg);\n                    transform-origin: center;\n                }\n                .xButton:after {\n                    content: "";\n                    position: absolute;\n                    display: block;\n                    margin: auto;\n                    left: 0;\n                    right: 0;\n                    top: 0;\n                    bottom: 0;\n                    width: 16px;\n                    height: 0;\n                    border-top: 1px solid rgba(0,0,0,0.5);\n                    transform: rotate(-45deg);\n                    transform-origin: center;\n                }\n                .xButton:hover {\n                    cursor:pointer;\n                }\n';

var focusColor = '';

var styles = {
    dropdownArrow: {
        boxSizing: 'border-box',
        cursor: 'pointer',
        display: 'table-cell',
        position: 'relative',
        textAlign: 'center',
        verticalAlign: 'middle',
        width: 25,
        paddingRight: 5
    },
    dropdownArrowDown: {
        boxSizing: 'border-box',
        borderColor: 'rgb(204, 204, 204) transparent transparent',
        borderStyle: 'solid',
        borderWidth: '4px 4px 2px',
        display: 'inline-block',
        height: 0,
        width: 0,
        position: 'relative'
    },
    // dropdownArrowDownFocused: {
    //     borderColor: `${focusColor} transparent transparent`,
    // },
    // dropdownArrowUp: {
    //     boxSizing: 'border-box',
    //     top: '-2px',
    //     borderColor: 'transparent transparent #999',
    //     borderStyle: 'solid',
    //     borderWidth: '0px 5px 5px',
    //     display: 'inline-block',
    //     height: 0,
    //     width: 0,
    //     position: 'relative',
    // },
    dropdownChildren: {
        boxSizing: 'border-box',
        bottom: 0,
        color: '#333',
        left: 0,
        lineHeight: '34px',
        paddingLeft: 10,
        paddingRight: 10,
        position: 'absolute',
        right: 0,
        top: 0,
        maxWidth: '100%',
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        whiteWpace: 'nowrap'
    },
    dropdownContainer: {
        position: 'relative',
        boxSizing: 'border-box',
        outline: 'none',
        width: '100%'
    },
    dropdownHeader: {
        boxSizing: 'border-box',
        backgroundColor: '#fff',
        borderColor: 'rgba(34, 36, 38, 0.15)',
        borderRadius: 0,
        borderBottomRightRadius: 0,
        borderBottomLeftRadius: 0,
        border: '1px solid rgba(34, 36, 38, 0.15)',
        color: 'rgba(0, 0, 0, 0.87)',
        cursor: 'default',
        display: 'table',
        borderSpacing: 0,
        borderCollapse: 'separate',
        height: 38,
        outline: 'none',
        overflow: 'hidden',
        position: 'relative',
        width: '100%'
    },
    disable: {
        backgroundColor: '#f7f7f7'
    },
    enabled: {
        backgroundColor: '#fff'
    },
    dropdownHeaderFocused: {
        borderColor: '#96C8DA',
        boxShadow: 'none'
    },
    dropdownHeaderHover: {
        borderColor: 'rgba(34, 36, 38, 0.35)'
    },
    dropdownHeaderExpanded: {
        borderColor: '#96C8DA',
        borderBottomRightRadius: '0px',
        borderBottomLeftRadius: '0px'
    },
    loadingContainer: {
        cursor: 'pointer',
        display: 'table-cell',
        verticalAlign: 'middle',
        width: '16px'
    },
    panelContainer: {
        borderBottomRightRadius: '0px',
        borderBottomLeftRadius: '0px',
        backgroundColor: '#fff',
        border: '1px solid #96C8DA',
        borderTopColor: '#e6e6e6',
        boxShadow: '0 1px 0 rgba(0, 0, 0, 0.06)',
        boxSizing: 'border-box',
        marginTop: '-1px',
        maxHeight: '500px',
        position: 'absolute',
        top: '100%',
        width: '100%',
        zIndex: 99,
        overflowY: 'auto'
    }
};

exports.default = Dropdown;

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _fuzzyMatchUtils = __webpack_require__(9);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _lodash = __webpack_require__(1);

var _lodash2 = _interopRequireDefault(_lodash);

var _selectItem = __webpack_require__(2);

var _selectItem2 = _interopRequireDefault(_selectItem);

var _selectList = __webpack_require__(7);

var _selectList2 = _interopRequireDefault(_selectList);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
/**
 * This component represents the entire panel which gets dropped down when the
 * user selects the component.  It encapsulates the search filter, the
 * Select-all item, and the list of options.
 */


function defaultIsLeaf(option, options) {
    //TODO, assume type of leaf level value is always not Array or stringified Array, this may not be true in future and probably to further involve 'level' to justify  
    if (_lodash2.default.isArray(option.value)) {
        return false;
    } else if (typeof option.value === 'string' && option.value.startsWith('[')) {
        try {
            var v = JSON.parse(option.value);
            return false;
        } catch (ex) {}
    }

    return true;
}

var SelectPanel = function (_Component) {
    _inherits(SelectPanel, _Component);

    function SelectPanel() {
        var _ref;

        var _temp, _this, _ret;

        _classCallCheck(this, SelectPanel);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = SelectPanel.__proto__ || Object.getPrototypeOf(SelectPanel)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
            searchHasFocus: false,
            searchText: "",
            focusIndex: 0
        }, _this.selectAll = function () {
            var _this$props = _this.props,
                onSelectedChanged = _this$props.onSelectedChanged,
                options = _this$props.options,
                isLeafChecker = _this$props.isLeafChecker;

            var isLeaf = isLeafChecker ? isLeafChecker : defaultIsLeaf;
            var allValues = _lodash2.default.chain(options).map(function (o) {
                return isLeaf(o, options) ? o.value : null;
            }).without(null, undefined).value();

            onSelectedChanged(allValues);
        }, _this.selectNone = function () {
            var onSelectedChanged = _this.props.onSelectedChanged;


            onSelectedChanged([]);
        }, _this.selectAllChanged = function (checked) {
            if (checked) {
                _this.selectAll();
            } else {
                _this.selectNone();
            }
        }, _this.handleSearchChange = function (e) {
            _this.setState({
                searchText: e.target.value,
                focusIndex: -1
            });
        }, _this.handleItemClicked = function (index) {
            _this.setState({ focusIndex: index });
        }, _this.clearSearch = function () {
            _this.setState({ searchText: "" });
        }, _this.handleKeyDown = function (e) {
            switch (e.which) {
                case 38:
                    // Up Arrow
                    if (e.altKey) {
                        return;
                    }

                    _this.updateFocus(-1);
                    break;
                case 40:
                    // Down Arrow
                    if (e.altKey) {
                        return;
                    }

                    _this.updateFocus(1);
                    break;
                default:
                    return;
            }

            e.stopPropagation();
            e.preventDefault();
        }, _this.handleSearchFocus = function (searchHasFocus) {
            _this.setState({
                searchHasFocus: searchHasFocus,
                focusIndex: -1
            });
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(SelectPanel, [{
        key: 'allAreSelected',
        value: function allAreSelected() {
            var _props = this.props,
                options = _props.options,
                selected = _props.selected,
                isLeafChecker = _props.isLeafChecker;

            var isLeaf = isLeafChecker ? isLeafChecker : defaultIsLeaf;
            var leafs = _lodash2.default.chain(options).map(function (o) {
                return isLeaf(o, options) ? o.value : null;
            }).without(null, undefined).value();
            return leafs.length === selected.length;
        }
    }, {
        key: 'filteredOptions',
        value: function filteredOptions() {
            var searchText = this.state.searchText;
            var _props2 = this.props,
                options = _props2.options,
                searchFunc = _props2.searchFunc;

            var op = _lodash2.default.map(options, function (o) {
                if (!o.label) {
                    return _lodash2.default.assign(o, { label: o.text });
                } else {
                    return o;
                }
            });

            return searchFunc ? searchFunc(op, searchText) : (0, _fuzzyMatchUtils.filterOptions)(op, searchText);
        }
    }, {
        key: 'updateFocus',
        value: function updateFocus(offset) {
            var focusIndex = this.state.focusIndex;
            var options = this.props.options;


            var newFocus = focusIndex + offset;
            newFocus = Math.max(0, newFocus);
            newFocus = Math.min(newFocus, options.length);

            this.setState({ focusIndex: newFocus });
        }
    }, {
        key: 'render',
        value: function render() {
            var _this2 = this;

            var _state = this.state,
                focusIndex = _state.focusIndex,
                searchHasFocus = _state.searchHasFocus;
            var _props3 = this.props,
                ItemRenderer = _props3.ItemRenderer,
                selectAllLabel = _props3.selectAllLabel,
                enableSearch = _props3.enableSearch,
                leafOnly = _props3.leafOnly;


            var selectAllOption = {
                label: selectAllLabel,
                value: ""
            };

            var focusedSearchStyle = searchHasFocus ? styles.searchFocused : undefined;

            return _react2.default.createElement(
                'div',
                {
                    style: styles.panel,
                    role: 'listbox',
                    onKeyDown: this.handleKeyDown
                },
                enableSearch ? _react2.default.createElement(
                    'div',
                    { style: styles.searchContainer },
                    _react2.default.createElement('input', {
                        placeholder: 'Search',
                        type: 'text',
                        onChange: this.handleSearchChange,
                        style: _extends({}, styles.search, focusedSearchStyle),
                        onFocus: function onFocus() {
                            return _this2.handleSearchFocus(true);
                        },
                        onBlur: function onBlur() {
                            return _this2.handleSearchFocus(false);
                        }
                    })
                ) : '',
                selectAllLabel ? _react2.default.createElement(_selectItem2.default, {
                    focused: focusIndex === 0,
                    checked: this.allAreSelected(),
                    option: selectAllOption,
                    onSelectionChanged: this.selectAllChanged,
                    onClick: function onClick() {
                        return _this2.handleItemClicked(0);
                    },
                    selectable: true,
                    ItemRenderer: ItemRenderer }) : '',
                _react2.default.createElement(_selectList2.default, _extends({}, this.props, {
                    options: this.filteredOptions(),
                    focusIndex: focusIndex - 1,
                    onClick: function onClick(e, index) {
                        return _this2.handleItemClicked(index + 1);
                    },
                    ItemRenderer: ItemRenderer,
                    leafOnly: leafOnly
                }))
            );
        }
    }]);

    return SelectPanel;
}(_react.Component);

var styles = {
    panel: {
        boxSizing: 'border-box'
    },
    search: {
        display: "block",

        maxWidth: "100%",
        borderRadius: "0px",

        boxSizing: 'border-box',
        height: '30px',
        lineHeight: '24px',
        border: '1px solid',
        borderColor: '#dee2e4',
        padding: '10px',
        width: "100%",
        outline: "none"
    },
    searchFocused: {
        borderColor: "#96C8DA"
    },
    searchContainer: {
        width: "100%",
        boxSizing: 'border-box',
        padding: "0.5em"
    }
};

exports.default = SelectPanel;

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Dropdown = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _dropdown = __webpack_require__(3);

var _dropdown2 = _interopRequireDefault(_dropdown);

var _selectPanel = __webpack_require__(4);

var _selectPanel2 = _interopRequireDefault(_selectPanel);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
/**
 * This component is designed to be a multi-selct component which supports
 * the selection of several items in a picklist.  It was meant to mimic the
 * style of react-select but the multi-select behavior didn't work for our
 * our needs.
 *
 * Arguments:
 * - options: The {value, label}[] options to be displayed
 * - values: The currently selected values []
 * - onSelectedChanged: An event to notify the caller of new values
 * - valueRenderer: A fn to support overriding the message in the component
 * - isLoading: Show a loading indicator
 */


var SimpleMultiSelect = function (_Component) {
    _inherits(SimpleMultiSelect, _Component);

    function SimpleMultiSelect() {
        _classCallCheck(this, SimpleMultiSelect);

        return _possibleConstructorReturn(this, (SimpleMultiSelect.__proto__ || Object.getPrototypeOf(SimpleMultiSelect)).apply(this, arguments));
    }

    _createClass(SimpleMultiSelect, [{
        key: 'getSelectedText',
        value: function getSelectedText() {
            var _props = this.props,
                options = _props.options,
                selected = _props.selected;


            var selectedOptions = selected.map(function (s) {
                return options.find(function (o) {
                    return o.value === s;
                });
            });

            var selectedLabels = selectedOptions.map(function (s) {
                return s ? s.label : "";
            });

            return selectedLabels.join(", ");
        }
    }, {
        key: 'renderHeader',
        value: function renderHeader() {
            var _props2 = this.props,
                options = _props2.options,
                selected = _props2.selected,
                valueRenderer = _props2.valueRenderer;


            var noneSelected = selected.length === 0;
            var allSelected = selected.length === options.length;

            var customText = valueRenderer && valueRenderer(selected, options);

            if (noneSelected) {
                return _react2.default.createElement(
                    'span',
                    { style: styles.noneSelected },
                    customText || "Select some items..."
                );
            }

            if (customText) {
                return _react2.default.createElement(
                    'span',
                    null,
                    customText
                );
            }

            return _react2.default.createElement(
                'span',
                null,
                allSelected ? "All items are selected" : this.getSelectedText()
            );
        }
    }, {
        key: 'render',
        value: function render() {
            var _props3 = this.props,
                ItemRenderer = _props3.ItemRenderer,
                options = _props3.options,
                selected = _props3.selected,
                selectAllLabel = _props3.selectAllLabel,
                onSelectedChanged = _props3.onSelectedChanged,
                isLoading = _props3.isLoading,
                enableSearch = _props3.enableSearch,
                leafOnly = _props3.leafOnly,
                isLeafChecker = _props3.isLeafChecker,
                disabled = _props3.disabled,
                searchFunc = _props3.searchFunc;


            return _react2.default.createElement(
                _dropdown2.default,
                {
                    isLoading: isLoading,
                    disabled: disabled,
                    contentComponent: _selectPanel2.default,
                    contentProps: {
                        ItemRenderer: ItemRenderer,
                        options: options,
                        selected: selected,
                        selectAllLabel: selectAllLabel,
                        onSelectedChanged: onSelectedChanged,
                        enableSearch: enableSearch,
                        leafOnly: leafOnly,
                        isLeafChecker: isLeafChecker,
                        searchFunc: searchFunc
                    }
                },
                this.renderHeader()
            );
        }
    }]);

    return SimpleMultiSelect;
}(_react.Component);

var styles = {
    noneSelected: {
        color: "#aaa"
    }
};

exports.default = SimpleMultiSelect;
exports.Dropdown = _dropdown2.default;

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
/**
 * A simple loading indicator, modeled after react-select.  Since react styles
 * don't support animations, hack it so we inject the keyframe animation
 * into the document.
 */


var STYLESHEET_NAME = "__react-multi-select_style_inject__";

function findStylesheet() {
    var styleSheet = Array.from(document.styleSheets).find(function (stylesheet) {
        return stylesheet.title === STYLESHEET_NAME;
    });

    // upcast as CSSStyleSheet
    var cssStylesheet = styleSheet;

    return cssStylesheet;
}

function registerStylesheet(css) {
    try {
        if (findStylesheet()) {
            return;
        }

        var style = document.createElement("style");
        style.setAttribute("title", STYLESHEET_NAME);
        document.head && document.head.appendChild(style);

        var stylesheet = findStylesheet();
        if (!stylesheet) {
            // Someting bad happened.  Abort!
            return;
        }

        stylesheet.insertRule(css, 0);
    } catch (e) {}
}

var LoadingIndicator = function (_Component) {
    _inherits(LoadingIndicator, _Component);

    function LoadingIndicator() {
        _classCallCheck(this, LoadingIndicator);

        return _possibleConstructorReturn(this, (LoadingIndicator.__proto__ || Object.getPrototypeOf(LoadingIndicator)).apply(this, arguments));
    }

    _createClass(LoadingIndicator, [{
        key: "componentWillMount",
        value: function componentWillMount() {
            // React styles don't support adding keyframe rules.  Create a
            // stylesheet and inject the keyframe animarion into it.
            registerStylesheet(keyFrames);
        }
    }, {
        key: "render",
        value: function render() {
            return _react2.default.createElement("span", { style: styles.loading });
        }
    }]);

    return LoadingIndicator;
}(_react.Component);

var keyFrames = "\n@keyframes react-multi-select_loading-spin {\n    to {\n        transform: rotate(1turn);\n    }\n}\n";

var styles = {
    loading: {
        "animation": "react-multi-select_loading-spin 400ms infinite linear",
        "width": "16px",
        "height": "16px",
        boxSizing: "border-box",
        borderRadius: "50%",
        border: "2px solid #ccc",
        borderRightColor: "#333",
        display: "inline-block",
        position: "relative",
        verticalAlign: "middle"
    }
};

exports.default = LoadingIndicator;

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _lodash = __webpack_require__(1);

var _lodash2 = _interopRequireDefault(_lodash);

var _selectItem = __webpack_require__(2);

var _selectItem2 = _interopRequireDefault(_selectItem);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
/**
 * This component represents an unadorned list of SelectItem (s).
 */


var SelectList = function (_Component) {
    _inherits(SelectList, _Component);

    function SelectList() {
        var _ref;

        var _temp, _this, _ret;

        _classCallCheck(this, SelectList);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = SelectList.__proto__ || Object.getPrototypeOf(SelectList)).call.apply(_ref, [this].concat(args))), _this), _this.handleSelectionChanged = function (option, checked) {
            var _this$props = _this.props,
                selected = _this$props.selected,
                onSelectedChanged = _this$props.onSelectedChanged,
                options = _this$props.options;

            var currentSelected = selected;

            if (checked) {
                currentSelected = [].concat(_toConsumableArray(selected), [option.value]);
            } else {
                var _index = selected.indexOf(option.value);
                currentSelected = [].concat(_toConsumableArray(selected.slice(0, _index)), _toConsumableArray(selected.slice(_index + 1)));
            }

            if (option.level !== undefined && option.level !== null) {
                _this.computeActiveLevel(currentSelected, options);
                currentSelected = _lodash2.default.filter(currentSelected, function (s) {
                    var o = _lodash2.default.find(_this.props.options, { value: s });
                    return o && o.level <= _this.activeLevel;
                });
            }

            onSelectedChanged(currentSelected);
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(SelectList, [{
        key: 'computeActiveLevel',
        value: function computeActiveLevel(selected, options) {
            var _this2 = this;

            //if hierarchical item, to compute topest menu (lowest level)
            this.activeLevel = 99;

            _lodash2.default.each(options, function (o) {
                if (selected.indexOf(o.value) >= 0 && o.level && o.level < _this2.activeLevel) {
                    _this2.activeLevel = o.level;
                }
            });
        }
    }, {
        key: 'renderItems',
        value: function renderItems() {
            var _this3 = this;

            var _props = this.props,
                ItemRenderer = _props.ItemRenderer,
                options = _props.options,
                selected = _props.selected,
                focusIndex = _props.focusIndex,
                onClick = _props.onClick,
                leafOnly = _props.leafOnly;


            this.computeActiveLevel(selected, options);
            var leafObj = _lodash2.default.maxBy(options, 'level');

            return options.map(function (o, i) {
                return _react2.default.createElement(
                    'li',
                    { style: styles.listItem, key: i },
                    _react2.default.createElement(_selectItem2.default, {
                        focused: focusIndex === i,
                        option: o,
                        onSelectionChanged: function onSelectionChanged(c) {
                            return _this3.handleSelectionChanged(o, c);
                        },
                        checked: selected.includes(o.value),
                        onClick: function (_onClick) {
                            function onClick(_x) {
                                return _onClick.apply(this, arguments);
                            }

                            onClick.toString = function () {
                                return _onClick.toString();
                            };

                            return onClick;
                        }(function (e) {
                            return onClick(e, i);
                        }),
                        ItemRenderer: ItemRenderer,
                        selected: selected,
                        options: options,
                        disable: o.level ? o.level > _this3.activeLevel : false,
                        selectable: leafOnly ? o.level === leafObj.level : true
                    })
                );
            });
        }
    }, {
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                'ul',
                { style: styles.list },
                this.renderItems()
            );
        }
    }]);

    return SelectList;
}(_react.Component);

var styles = {
    list: {
        margin: 0,
        paddingLeft: 0
    },
    listItem: {
        listStyle: 'none'
    }
};

exports.default = SelectList;

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

(function webpackUniversalModuleDefinition(root, factory) {
	if(true)
		module.exports = factory(__webpack_require__(0));
	else if(typeof define === 'function' && define.amd)
		define(["react"], factory);
	else if(typeof exports === 'object')
		exports["Style"] = factory(require("react"));
	else
		root["Style"] = factory(root["React"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_2__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _reactLibAdler = __webpack_require__(1);

	var _reactLibAdler2 = _interopRequireDefault(_reactLibAdler);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Copyright 2016-present, Joshua Robinson
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * All rights reserved.
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * This source code is licensed under the MIT license.
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */

	var __DEV__ = ("production") !== 'production';

	var Style = function (_Component) {
	  _inherits(Style, _Component);

	  function Style(props) {
	    _classCallCheck(this, Style);

	    var _this = _possibleConstructorReturn(this, (Style.__proto__ || Object.getPrototypeOf(Style)).call(this, props));

	    _this.getStyleString = function () {
	      if (_this.props.children instanceof Array) {
	        var styleString = _this.props.children.filter(function (child) {
	          return !(0, _react.isValidElement)(child) && typeof child === 'string';
	        });

	        if (styleString.length > 1) {
	          throw new Error('Multiple style objects as direct descedents of a ' + 'Style component are not supported (' + styleString.length + ' style objects detected): \n\n' + styleString[0]);
	        }

	        return styleString[0];
	      } else if (typeof _this.props.children === 'string' && !(0, _react.isValidElement)(_this.props.children)) {
	        return _this.props.children;
	      } else {
	        return null;
	      }
	    };

	    _this.getRootElement = function () {
	      if (_this.props.children instanceof Array) {
	        var rootElement = _this.props.children.filter(function (child) {
	          return (0, _react.isValidElement)(child);
	        });

	        if (__DEV__) {
	          if (rootElement.length > 1) {
	            console.log(rootElement);
	            throw new Error('Adjacent JSX elements must be wrapped in an enclosing tag (' + rootElement.length + ' root elements detected).');
	          }

	          if (typeof rootElement[0] !== 'undefined' && _this.isVoidElement(rootElement[0].type)) {
	            throw new Error('Self-closing void elements like ' + rootElement.type + ' must be wrapped ' + 'in an enclosing tag. Reactive Style must be able to nest a style element ' + 'inside of the root element and void element content models never allow' + 'it to have contents under any circumstances.');
	          }
	        }

	        return rootElement[0];
	      } else if ((0, _react.isValidElement)(_this.props.children)) {
	        return _this.props.children;
	      } else {
	        return null;
	      }
	    };

	    _this.getRootSelectors = function (rootElement) {
	      var rootSelectors = [];

	      // Handle id
	      if (rootElement.props.id) {
	        rootSelectors.push('#' + rootElement.props.id);
	      }

	      // Handle classes
	      if (rootElement.props.className) {
	        rootElement.props.className.trim().split(/\s+/g).forEach(function (className) {
	          return rootSelectors.push(className);
	        });
	      }

	      // Handle no root selector by using type
	      if (!rootSelectors.length && typeof rootElement.type !== 'function') {
	        rootSelectors.push(rootElement.type);
	      }

	      return rootSelectors;
	    };

	    _this.processCSSText = function (styleString, scopeClassName, rootSelectors) {
	      // TODO: Look into using memoizeStringOnly from fbjs/lib for escaped strings;
	      // can avoid much of the computation as long as scoped doesn't come into play
	      // which would be unique

	      // TODO: If dev lint and provide feedback
	      // if linting fails we need to error out because
	      // the style string will not be parsed correctly

	      return styleString.replace(/\s*\/\/(?![^\(]*\)).*|\s*\/\*.*\*\//g, '') // Strip javascript style comments
	      .replace(/\s\s+/g, ' ') // Convert multiple to single whitespace
	      .split('}') // Start breaking down statements
	      .map(function (fragment) {
	        var isDeclarationBodyPattern = /.*:.*;/g;
	        var isAtRulePattern = /\s*@/g;
	        var isKeyframeOffsetPattern = /\s*(([0-9][0-9]?|100)\s*%)|\s*(to|from)\s*$/g;
	        // const isContent
	        // Split fragment into selector and declarationBody; escape declaration body
	        return fragment.split('{').map(function (statement) {
	          // Avoid processing whitespace
	          if (!statement.trim().length) {
	            return;
	          }

	          // Skip escaping selectors statements since that would break them;
	          // note in docs that selector statements are not escaped and should
	          // not be generated from user provided strings
	          if (statement.match(isDeclarationBodyPattern)) {
	            return _this.escapeTextContentForBrowser(statement // Have to deal with special case of CSS property "content", breaks without quotes
	            .replace(/lsquo|rsquo/g, '') // Prevent manipulation
	            .replace(/content\s*:\s*['"](.*)['"]\s*;/, 'content: lsquo;$1rsquo;;') // "Entify" content property
	            .replace(/['"]/g, '') // Remove single and double quotes
	            ).replace(/lsquo;|rsquo;/g, "'") // De-"entify" content property
	            .replace(/$/g, '\n'); // Add formatting;
	          } else {
	            // Statement is a selector
	            var selector = statement;

	            if (scopeClassName && !/:target/gi.test(selector)) {
	              // Prefix the scope to the selector if it is not an at-rule
	              if (!selector.match(isAtRulePattern) && !selector.match(isKeyframeOffsetPattern)) {
	                return _this.scopeSelector(scopeClassName, selector, rootSelectors);
	              } else {
	                // Is at-rule or keyframe offset and should not be scoped
	                return selector;
	              }
	            } else {
	              // No scope; do nothing to the selector
	              return selector;
	            }
	          }

	          // Pretty print in dev
	        }).join('{\n');
	      }).join('}\n');
	    };

	    _this.escaper = function (match) {
	      var ESCAPE_LOOKUP = {
	        '>': '&gt;',
	        '<': '&lt;',
	        '"': '&quot;',
	        '\'': '&#x27;'
	      };

	      return ESCAPE_LOOKUP[match];
	    };

	    _this.escapeTextContentForBrowser = function (text) {
	      var ESCAPE_REGEX = /[><"']/g;
	      return ('' + text).replace(ESCAPE_REGEX, _this.escaper);
	    };

	    _this.scopeSelector = function (scopeClassName, selector, rootSelectors) {
	      var scopedSelector = [];

	      // Matches comma-delimiters in multi-selectors (".fooClass, .barClass {...}" => "," );
	      // ignores commas-delimiters inside of brackets and parenthesis ([attr=value], :not()..)
	      var groupOfSelectorsPattern = /,(?![^\(|\[]*\)|\])/g;

	      var selectors = selector.split(groupOfSelectorsPattern);

	      for (var i = 0; i < selectors.length; i++) {
	        var containsSelector = void 0; // [data-scoped="54321"] .someClass
	        var unionSelector = void 0; // [data-scoped="54321"].someClass (account for root)

	        if (rootSelectors.length && rootSelectors.some(function (rootSelector) {
	          return selector.match(rootSelector);
	        })) {
	          unionSelector = selectors[i];

	          // Can't just add them together because of selector combinator complexity
	          // like '.rootClassName.someClass.otherClass > *' or :not('.rootClassName'),
	          // replace must be used

	          // Escape valid CSS special characters that are also RegExp special characters
	          var escapedRootSelectors = rootSelectors.map(function (rootSelector) {
	            return rootSelector.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&');
	          });

	          unionSelector = unionSelector.replace(new RegExp('(' + // Start capture group
	          escapedRootSelectors.join('|') + // Match any one root selector
	          ')' // End capture group
	          ), '$1' + scopeClassName // Replace any one root selector match with a union
	          ); // of the root selector and scoping class (e.g., .rootSelector._scoped-1). Order matters here because of type-class union support like div._scoped-1

	          // Do both union and contains selectors because of case <div><div></div></div>
	          // or <div className="foo"><div className="foo"></div></div>
	          containsSelector = scopeClassName + ' ' + selectors[i];
	          scopedSelector.push(unionSelector, containsSelector);
	        } else {
	          containsSelector = scopeClassName + ' ' + selectors[i];
	          scopedSelector.push(containsSelector);
	        }
	      }

	      return scopedSelector.join(', ');
	    };

	    _this.getScopeClassName = function (styleString, rootElement) {
	      var hash = styleString;

	      if (rootElement) {
	        _this.pepper = '';
	        _this.traverseObjectToGeneratePepper(rootElement);
	        hash += _this.pepper;
	      }

	      return (__DEV__ ? '_scope-' : '_') + (0, _reactLibAdler2.default)(hash);
	    };

	    _this.traverseObjectToGeneratePepper = function (obj) {
	      var depth = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

	      // Max depth is equal to max depth of JSON.stringify
	      // Max length of 10,000 is arbitrary
	      if (depth > 32 || _this.pepper.length > 10000) return;

	      for (var prop in obj) {
	        // Avoid internal props that are unreliable
	        var isPropReactInternal = /^[_\$]|type|ref|^value$/.test(prop);
	        if (!!obj[prop] && _typeof(obj[prop]) === 'object' && !isPropReactInternal) {
	          _this.traverseObjectToGeneratePepper(obj[prop], depth + 1);
	        } else if (!!obj[prop] && !isPropReactInternal && typeof obj[prop] !== 'function') {
	          _this.pepper += obj[prop];
	        }
	      }
	    };

	    _this.isVoidElement = function (type) {
	      return ['area', 'base', 'br', 'col', 'command', 'embed', 'hr', 'img', 'input', 'keygen', 'link', 'meta', 'param', 'source', 'track', 'wbr'].some(function (voidType) {
	        return type === voidType;
	      });
	    };

	    _this.addCSSTextToHead = function (cssText) {
	      if (!cssText.length) {
	        return;
	      } else {
	        var cssTextHash = (0, _reactLibAdler2.default)(cssText);

	        if (!window._reactiveStyle.cssTextHashesAddedToHead.some(function (hash) {
	          return hash === cssTextHash;
	        })) {
	          window._reactiveStyle.el.innerHTML += cssText;
	          window._reactiveStyle.cssTextHashesAddedToHead.push(cssTextHash);
	        }
	      }
	    };

	    _this.createStyleElement = function (cssText, scopeClassName) {
	      return _react2.default.createElement('style', { type: 'text/css', key: scopeClassName, ref: function ref(c) {
	          return _this._style = c;
	        },
	        dangerouslySetInnerHTML: {
	          __html: cssText || ''
	        } });
	    };

	    _this.getNewChildrenForCloneElement = function (cssText, rootElement, scopeClassName) {
	      return [_this.createStyleElement(cssText, scopeClassName)].concat(rootElement.props.children);
	    };

	    _this.scopeClassNameCache = {};
	    _this.scopedCSSTextCache = {};
	    return _this;
	  }

	  _createClass(Style, [{
	    key: 'render',
	    value: function render() {
	      if (!this.props.children) {
	        return this.createStyleElement();
	      }

	      var styleString = this.getStyleString();
	      var rootElement = this.getRootElement();

	      if (!styleString && rootElement) {
	        // Passthrough; no style actions
	        return rootElement.props.children;
	      } else if (styleString && !rootElement) {
	        // Global styling with no scoping
	        return this.createStyleElement(this.processCSSText(styleString), this.getScopeClassName(styleString, rootElement));
	      } else {
	        // Style tree of elements
	        var rootElementClassNames = rootElement.props.className ? rootElement.props.className + ' ' : '';
	        var rootElementId = rootElement.props.id ? rootElement.props.id : '';

	        // If styleString has already been calculated before and CSS text is unchanged;
	        // use the cached version. No need to recalculate.
	        var scopeClassName = void 0;
	        var scopedCSSText = void 0;
	        // Include rootElementClassName and rootElementId as part of cache address
	        // to ensure upon state/prop change resulting in new id/class on root element
	        // will properly generate a union selector.
	        // WARNING: May be a preoptimization; cost of adding union selector to all selectors
	        // could be so low that its worth doing so to avoid surface space for bugs
	        var scopeClassNameAddress = rootElementClassNames + rootElementId + styleString;
	        if (this.scopeClassNameCache[scopeClassNameAddress]) {
	          // Use cached scope and scoped CSS Text
	          scopeClassName = this.scopeClassNameCache[scopeClassNameAddress];
	          scopedCSSText = this.scopedCSSTextCache[scopeClassName];
	        } else {
	          // Calculate scope and scoped CSS Text
	          scopeClassName = this.getScopeClassName(styleString, rootElement);
	          scopedCSSText = this.processCSSText(styleString, '.' + scopeClassName, this.getRootSelectors(rootElement));

	          // Cache for future use
	          this.scopeClassNameCache[scopeClassNameAddress] = scopeClassName;
	          this.scopedCSSTextCache[scopeClassName] = scopedCSSText;
	        }

	        return (0, _react.cloneElement)(rootElement, _extends({}, rootElement.props, {
	          className: '' + rootElementClassNames + scopeClassName
	        }), this.getNewChildrenForCloneElement(scopedCSSText, rootElement, scopeClassName));
	      }
	    }

	    /**
	     * Filters out the style string from this.props.children
	     *
	     *    > getStyleString()
	     *    ".foo { color: red; }"
	     *
	     * @return {?string} string Style string
	     */


	    /**
	    * Filters out the root element from this.props.children
	    *
	    *    > getRootElement()
	    *    "<MyRootElement />"
	    *
	    * @return {?ReactDOMComponent} component Root element component
	    */


	    /**
	    * Creates an array of selectors which target the root element
	    *
	    *    > getRootSelectors( <div id="foo" className="bar" /> )
	    *    "['#foo', '.bar']"
	    *
	    * @param {ReactDOMComponent} component
	    * @return {!array} array Array of selectors that target the root element
	    */


	    /**
	    * Scopes CSS statement with a given scoping class name as a union or contains selector;
	    * also escapes CSS declaration bodies
	    *
	    *    > proccessStyleString( '.foo { color: red; } .bar { color: green; }', '_scoped-1234, ['.root', '.foo']  )
	    *    ".scoped-1234.foo { color: red; } .scoped-1234 .bar { color: green; }"
	    *
	    * @param {string} styleString String of style rules
	    * @param {string} scopeClassName Class name used to create a unique scope
	    * @param {array} rootSelectors Array of selectors on the root element; ids and classNames
	    * @return {!string} Scoped style rule string
	    */


	    /**
	     * Escaper used in escapeTextContentForBrowser
	     *
	     */


	    /**
	     * Escapes text to prevent scripting attacks.
	     *
	     * @param {*} text Text value to escape.
	     * @return {string} An escaped string.
	     */


	    /**
	     * Scopes a selector with a given scoping className as a union or contains selector
	     *
	     *    > scopeSelector( '_scoped-1827481', '.root', ['.root', '.foo']  )
	     *    ".scoped-1827481.root"
	     *
	     * @param {string} scopeClassName Class name used to scope selectors
	     * @param {string} selector Selector to scope
	     * @param {array} rootSelectors Array of selectors on the root element; ids and classNames
	     * @return {!string} Union or contains selector scoped with the scoping className
	     */


	    /**
	     * Creates a className used as a CSS scope by generating a checksum from a styleString
	     *
	     *    > scoped( 'footer { color: red; }' )
	     *    "_scoped-182938591"
	     *
	     * @param {string} String of style rules
	     * @return {!string} A scoping class name
	     */


	    /**
	     * Traverses an object tree looking for anything that is not internal or a circular
	     * reference. Accumulates values on this.pepper
	     *
	     *    > traverseObjectToGeneratePepper(obj)
	     *    void
	     * @param {object} object Object to traverse
	     */


	    /**
	     * Checks if a tag type is a self-closing void element
	     *
	     *    > isVoidElement( "img" )
	     *    "true"
	     *
	     * @param {*} string Element type to check
	     * @return {!bool} bool True or false
	     */


	    /**
	     * Add CSS text to the style element in the head of document unless it has
	     * already been added.
	     *
	     *    > addCSSTextToHead( ".foo { color: red; }" )
	     *
	     * @param {string} string CSS text to add to head
	     */


	    /**
	    * Creates the style element used for server side rendering
	    *    > createStyleElement( ".foo._scoped-1 { color: red; }" )
	    *
	    *
	    * @param {string} string CSS string
	    * @return {ReactDOMComponent} component
	    */


	    /**
	    * Returns new children for a root element being cloned. If mounted the CSS text
	    * is added to the style element in head, otherwise we are doing server side rendering
	    * and to avoid flash of unstyled content (FOUC) a style element is added to children
	    * to avoid FOUC on first render.
	    *
	    *    > getNewChildrenForCloneElement( ".foo._scoped-1 { color: red; }" )
	    *     "<NewChildren />"
	    *
	    * @param {string} string CSS string
	    * @return {ReactDOMComponent} component
	    */


	    /**
	    * Syntactic sugar for functional usage of Reactive Style
	    *
	    *    > Style.it( ".foo { color: red; }", <div /> )
	    *     "<div class="_scoped-1">
	    *        <style type="text/css">
	    *          .foo._scoped-1 { color: red; }
	    *        </style>
	    *      </div>"
	    *
	    * @param {string} string CSS string
	    * @param {ReactDOMComponent} component
	    */

	  }]);

	  return Style;
	}(_react.Component);

	Style.it = function (cssText, rootElement) {
	  return _react2.default.createElement(
	    Style,
	    null,
	    cssText,
	    rootElement
	  );
	};

	exports.default = Style;

/***/ },
/* 1 */
/***/ function(module, exports) {

	/**
	 * Copyright 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule adler32
	 */

	'use strict';

	var MOD = 65521;

	// adler32 is not cryptographically strong, and is only used to sanity check that
	// markup generated on the server matches the markup generated on the client.
	// This implementation (a modified version of the SheetJS version) has been optimized
	// for our use case, at the expense of conforming to the adler32 specification
	// for non-ascii inputs.
	function adler32(data) {
	  var a = 1;
	  var b = 0;
	  var i = 0;
	  var l = data.length;
	  var m = l & ~0x3;
	  while (i < m) {
	    var n = Math.min(i + 4096, m);
	    for (; i < n; i += 4) {
	      b += (a += data.charCodeAt(i)) + (a += data.charCodeAt(i + 1)) + (a += data.charCodeAt(i + 2)) + (a += data.charCodeAt(i + 3));
	    }
	    a %= MOD;
	    b %= MOD;
	  }
	  for (; i < l; i++) {
	    b += a += data.charCodeAt(i);
	  }
	  a %= MOD;
	  b %= MOD;
	  return a | b << 16;
	}

	module.exports = adler32;

/***/ },
/* 2 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_2__;

/***/ }
/******/ ])
});
;

/***/ }),
/* 9 */
/***/ (function(module, exports) {

module.exports = require("fuzzy-match-utils");

/***/ })
/******/ ])));