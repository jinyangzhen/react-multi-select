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
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

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
        key: "render",
        value: function render() {
            var _props = this.props,
                checked = _props.checked,
                option = _props.option,
                onClick = _props.onClick;


            return _react2.default.createElement(
                "span",
                null,
                _react2.default.createElement("input", {
                    type: "checkbox",
                    onChange: onClick,
                    checked: checked,
                    tabIndex: "-1"
                }),
                _react2.default.createElement(
                    "span",
                    { style: styles.label },
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
        key: "componentDidMount",
        value: function componentDidMount() {
            this.updateFocus();
        }
    }, {
        key: "componentDidUpdate",
        value: function componentDidUpdate() {
            this.updateFocus();
        }
    }, {
        key: "updateFocus",
        value: function updateFocus() {
            var focused = this.props.focused;


            if (focused && this.itemRef) {
                this.itemRef.focus();
            }
        }
    }, {
        key: "render",
        value: function render() {
            var _this3 = this;

            var _props2 = this.props,
                ItemRenderer = _props2.ItemRenderer,
                option = _props2.option,
                checked = _props2.checked,
                focused = _props2.focused;
            var hovered = this.state.hovered;


            var focusStyle = focused || hovered ? styles.itemContainerHover : undefined;

            return _react2.default.createElement(
                "label",
                {
                    role: "option",
                    "aria-selected": checked,
                    selected: checked,
                    tabIndex: "-1",
                    style: _extends({}, styles.itemContainer, focusStyle),
                    onClick: this.handleClick,
                    ref: function ref(_ref2) {
                        return _this3.itemRef = _ref2;
                    },
                    onKeyDown: this.handleKeyDown,
                    onMouseOver: function onMouseOver() {
                        return _this3.setState({ hovered: true });
                    },
                    onMouseOut: function onMouseOut() {
                        return _this3.setState({ hovered: false });
                    }
                },
                _react2.default.createElement(ItemRenderer, {
                    option: option,
                    checked: checked,
                    onClick: this.handleClick
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
    label: {
        display: 'inline-block',
        verticalAlign: 'middle',
        borderBottomRightRadius: '2px',
        borderTopRightRadius: '2px',
        cursor: 'default',
        padding: '2px 5px'
    }
};

exports.default = SelectItem;

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

var _loadingIndicator = __webpack_require__(5);

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
            hovered: false
        }, _this.handleDocumentClick = function (event) {
            if (_this.wrapper && !_this.wrapper.contains(event.target)) {
                _this.setState({ expanded: false });
            }
        }, _this.handleKeyDown = function (e) {
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

            e.preventDefault();
        }, _this.handleFocus = function (e) {
            var hasFocus = _this.state.hasFocus;


            if (e.target === _this.wrapper && !hasFocus) {
                _this.setState({ hasFocus: true });
            }
        }, _this.handleBlur = function (e) {
            var hasFocus = _this.state.hasFocus;


            if (hasFocus) {
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
            var _props = this.props,
                ContentComponent = _props.contentComponent,
                contentProps = _props.contentProps;


            return _react2.default.createElement(
                'div',
                { style: styles.panelContainer },
                _react2.default.createElement(ContentComponent, contentProps)
            );
        }
    }, {
        key: 'render',
        value: function render() {
            var _this2 = this;

            var _state = this.state,
                expanded = _state.expanded,
                hasFocus = _state.hasFocus,
                hovered = _state.hovered;
            var _props2 = this.props,
                children = _props2.children,
                isLoading = _props2.isLoading;


            var expandedHeaderStyle = expanded ? styles.dropdownHeaderExpanded : undefined;

            var focusedHeaderStyle = hasFocus ? styles.dropdownHeaderFocused : undefined;

            var hoverHeaderStyle = hovered && !hasFocus && !expanded ? styles.dropdownHeaderHover : undefined;

            var arrowStyle = expanded ? styles.dropdownArrowUp : styles.dropdownArrowDown;

            var focusedArrowStyle = hasFocus ? styles.dropdownArrowDownFocused : undefined;

            return _react2.default.createElement(
                'div',
                {
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
                    onMouseOver: function onMouseOver() {
                        return _this2.setState({ hovered: true });
                    },
                    onMouseOut: function onMouseOut() {
                        return _this2.setState({ hovered: false });
                    }
                },
                _react2.default.createElement(
                    'div',
                    {
                        style: _extends({}, styles.dropdownHeader, expandedHeaderStyle, hoverHeaderStyle, focusedHeaderStyle),
                        onClick: function onClick() {
                            return _this2.toggleExpanded();
                        }
                    },
                    _react2.default.createElement(
                        'span',
                        { style: styles.dropdownChildren },
                        children
                    ),
                    _react2.default.createElement(
                        'span',
                        { style: styles.loadingContainer },
                        isLoading && _react2.default.createElement(_loadingIndicator2.default, null)
                    ),
                    _react2.default.createElement(
                        'span',
                        { style: styles.dropdownArrow },
                        _react2.default.createElement('span', { style: _extends({}, arrowStyle, focusedArrowStyle)
                        })
                    )
                ),
                expanded && this.renderPanel()
            );
        }
    }]);

    return Dropdown;
}(_react.Component);

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
        borderColor: '#999 transparent transparent',
        borderStyle: 'solid',
        borderWidth: '5px 5px 2.5px',
        display: 'inline-block',
        height: 0,
        width: 0,
        position: 'relative'
    },
    dropdownArrowDownFocused: {
        borderColor: focusColor + ' transparent transparent'
    },
    dropdownArrowUp: {
        boxSizing: 'border-box',
        top: '-2px',
        borderColor: 'transparent transparent #999',
        borderStyle: 'solid',
        borderWidth: '0px 5px 5px',
        display: 'inline-block',
        height: 0,
        width: 0,
        position: 'relative'
    },
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
        borderRadius: 4,
        borderBottomRightRadius: 4,
        borderBottomLeftRadius: 4,
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
    dropdownHeaderFocused: {
        borderColor: '#96C8DA!important',
        boxShadow: 'none'
    },
    dropdownHeaderHover: {
        borderColor: 'rgba(34, 36, 38, 0.35)'
    },
    dropdownHeaderExpanded: {
        borderColor: '#96C8DA #96C8DA #96C8DA',
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
        borderBottomRightRadius: '4px',
        borderBottomLeftRadius: '4px',
        backgroundColor: '#fff',
        border: '1px solid #96C8DA',
        borderTopColor: '#e6e6e6',
        boxShadow: '0 1px 0 rgba(0, 0, 0, 0.06)',
        boxSizing: 'border-box',
        marginTop: '-1px',
        maxHeight: '300px',
        position: 'absolute',
        top: '100%',
        width: '100%',
        zIndex: 1,
        overflowY: 'auto'
    }
};

exports.default = Dropdown;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _fuzzyMatchUtils = __webpack_require__(7);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _selectItem = __webpack_require__(1);

var _selectItem2 = _interopRequireDefault(_selectItem);

var _selectList = __webpack_require__(6);

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
                options = _this$props.options;

            var allValues = options.map(function (o) {
                return o.value;
            });

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
                selected = _props.selected;

            return options.length === selected.length;
        }
    }, {
        key: 'filteredOptions',
        value: function filteredOptions() {
            var searchText = this.state.searchText;
            var options = this.props.options;


            return (0, _fuzzyMatchUtils.filterOptions)(options, searchText);
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
            var _props2 = this.props,
                ItemRenderer = _props2.ItemRenderer,
                selectAllLabel = _props2.selectAllLabel,
                enableSearch = _props2.enableSearch;


            var selectAllOption = {
                label: selectAllLabel || "Select All",
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
                _react2.default.createElement(_selectItem2.default, {
                    focused: focusIndex === 0,
                    checked: this.allAreSelected(),
                    option: selectAllOption,
                    onSelectionChanged: this.selectAllChanged,
                    onClick: function onClick() {
                        return _this2.handleItemClicked(0);
                    },
                    ItemRenderer: ItemRenderer
                }),
                _react2.default.createElement(_selectList2.default, _extends({}, this.props, {
                    options: this.filteredOptions(),
                    focusIndex: focusIndex - 1,
                    onClick: function onClick(e, index) {
                        return _this2.handleItemClicked(index + 1);
                    },
                    ItemRenderer: ItemRenderer
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
        borderRadius: "3px",

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
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Dropdown = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _dropdown = __webpack_require__(2);

var _dropdown2 = _interopRequireDefault(_dropdown);

var _selectPanel = __webpack_require__(3);

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


var MultiSelect = function (_Component) {
    _inherits(MultiSelect, _Component);

    function MultiSelect() {
        _classCallCheck(this, MultiSelect);

        return _possibleConstructorReturn(this, (MultiSelect.__proto__ || Object.getPrototypeOf(MultiSelect)).apply(this, arguments));
    }

    _createClass(MultiSelect, [{
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
                enableSearch = _props3.enableSearch;


            return _react2.default.createElement(
                _dropdown2.default,
                {
                    isLoading: isLoading,
                    contentComponent: _selectPanel2.default,
                    contentProps: {
                        ItemRenderer: ItemRenderer,
                        options: options,
                        selected: selected,
                        selectAllLabel: selectAllLabel,
                        onSelectedChanged: onSelectedChanged,
                        enableSearch: enableSearch
                    }
                },
                this.renderHeader()
            );
        }
    }]);

    return MultiSelect;
}(_react.Component);

var styles = {
    noneSelected: {
        color: "#aaa"
    }
};

exports.default = MultiSelect;
exports.Dropdown = _dropdown2.default;

/***/ }),
/* 5 */
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
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _selectItem = __webpack_require__(1);

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
                onSelectedChanged = _this$props.onSelectedChanged;


            if (checked) {
                onSelectedChanged([].concat(_toConsumableArray(selected), [option.value]));
            } else {
                var _index = selected.indexOf(option.value);
                var removed = [].concat(_toConsumableArray(selected.slice(0, _index)), _toConsumableArray(selected.slice(_index + 1)));
                onSelectedChanged(removed);
            }
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(SelectList, [{
        key: 'renderItems',
        value: function renderItems() {
            var _this2 = this;

            var _props = this.props,
                ItemRenderer = _props.ItemRenderer,
                options = _props.options,
                selected = _props.selected,
                focusIndex = _props.focusIndex,
                onClick = _props.onClick;


            return options.map(function (o, i) {
                return _react2.default.createElement(
                    'li',
                    { style: styles.listItem, key: i },
                    _react2.default.createElement(_selectItem2.default, {
                        focused: focusIndex === i,
                        option: o,
                        onSelectionChanged: function onSelectionChanged(c) {
                            return _this2.handleSelectionChanged(o, c);
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
                        ItemRenderer: ItemRenderer
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
/* 7 */
/***/ (function(module, exports) {

module.exports = require("fuzzy-match-utils");

/***/ })
/******/ ])));