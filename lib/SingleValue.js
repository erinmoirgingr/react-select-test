'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var PropTypes = require('prop-types');
var React = require('react');
var classes = require('classnames');

var SingleValue = (function (_React$Component) {
  _inherits(SingleValue, _React$Component);

  function SingleValue() {
    _classCallCheck(this, SingleValue);

    _get(Object.getPrototypeOf(SingleValue.prototype), 'constructor', this).apply(this, arguments);
  }

  _createClass(SingleValue, [{
    key: 'render',
    value: function render() {
      var classNames = classes('Select-placeholder', this.props.value && this.props.value.className);
      return React.createElement(
        'div',
        {
          className: classNames,
          style: this.props.value && this.props.value.style,
          title: this.props.value && this.props.value.title
        },
        this.props.placeholder
      );
    }
  }]);

  return SingleValue;
})(React.Component);

SingleValue.propTypes = {
  placeholder: PropTypes.string, // this is default value provided by React-Select based component
  value: PropTypes.object // selected option
};

module.exports = SingleValue;