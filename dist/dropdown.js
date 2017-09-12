'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _styleIt = require('style-it');

var _styleIt2 = _interopRequireDefault(_styleIt);

var _loadingIndicator = require('./loading-indicator.js');

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

            return _react2.default.createElement(
                'div',
                { style: styles.panelContainer },
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
                contentProps = _props2.contentProps;


            var expandedHeaderStyle = expanded ? styles.dropdownHeaderExpanded : undefined;

            var focusedHeaderStyle = hasFocus ? styles.dropdownHeaderFocused : undefined;

            var hoverHeaderStyle = hovered && !hasFocus && !expanded ? styles.dropdownHeaderHover : undefined;

            // const arrowStyle = expanded
            //     ? styles.dropdownArrowUp
            //     : styles.dropdownArrowDown;

            // const focusedArrowStyle = hasFocus || expanded
            //     ? styles.dropdownArrowDownFocused
            //     : undefined;

            console.log('hover ' + hovered);

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
                    onMouseEnter: function onMouseEnter() {
                        return _this2.setState({ hovered: true });
                    },
                    onMouseLeave: function onMouseLeave() {
                        return _this2.setState({ hovered: false });
                    }
                },
                _react2.default.createElement(
                    _styleIt2.default,
                    null,
                    xClass
                ),
                _react2.default.createElement(
                    'div',
                    { style: _extends({}, styles.dropdownHeader, expandedHeaderStyle, hoverHeaderStyle, focusedHeaderStyle) },
                    _react2.default.createElement(
                        'span',
                        { style: styles.dropdownChildren, onClick: function onClick() {
                                return _this2.toggleExpanded();
                            } },
                        children
                    ),
                    _react2.default.createElement(
                        'span',
                        { style: styles.loadingContainer },
                        isLoading && _react2.default.createElement(_loadingIndicator2.default, null)
                    ),
                    (expanded || hovered) && clearable ? _react2.default.createElement('span', { className: 'xButton', onClick: function onClick(e) {
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
                        { style: styles.dropdownArrow, onClick: function onClick() {
                                return _this2.toggleExpanded();
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
        zIndex: 99,
        overflowY: 'auto'
    }
};

exports.default = Dropdown;