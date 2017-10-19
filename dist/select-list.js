'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

var _selectItem = require('./select-item.js');

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
                    return o.level <= _this.activeLevel;
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