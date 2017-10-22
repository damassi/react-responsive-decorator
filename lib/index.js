'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _interopRequireDefault = function (obj) { return obj && obj.__esModule ? obj : { 'default': obj }; };

var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } };

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _inherits = function (subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; };

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _React = require('react');

var _React2 = _interopRequireDefault(_React);

var _enquire = require('enquire.js');

var _enquire2 = _interopRequireDefault(_enquire);

var _canUseDOM = require('can-use-dom');

var _canUseDOM2 = _interopRequireDefault(_canUseDOM);

var _json2mq = require('json2mq');

var _json2mq2 = _interopRequireDefault(_json2mq);

var ResponsiveDecorator = function ResponsiveDecorator(ComposedComponent) {
  return (function (_React$Component) {
    var _class = function () {
      _classCallCheck(this, _class);

      if (_React$Component != null) {
        _React$Component.apply(this, arguments);
      }

      this._responsiveMediaHandlers = [];
    };

    _inherits(_class, _React$Component);

    _createClass(_class, [{
      key: 'media',
      value: function media(query, handler) {
        query = _json2mq2['default'](query);

        if (typeof handler === 'function') {
          handler = {
            match: handler
          };
        }

        _enquire2['default'].register(query, handler);

        this._responsiveMediaHandlers.push({
          query: query,
          handler: handler
        });
      }
    }, {
      key: 'componentWillUnmount',
      value: function componentWillUnmount() {
        this._responsiveMediaHandlers.forEach(function (obj) {
          _enquire2['default'].unregister(obj.query, obj.handler);
        });
      }
    }, {
      key: 'render',
      value: function render() {
        return _React2['default'].createElement(ComposedComponent, _extends({}, this.props, {
          media: this.media.bind(this)
        }));
      }
    }], [{
      key: 'displayName',
      value: 'ResponsiveDecorator',
      enumerable: true
    }]);

    return _class;
  })(_React2['default'].Component);
};

exports['default'] = ResponsiveDecorator;
module.exports = exports['default'];