'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var IndexHtml = function IndexHtml(_ref) {
  var title = _ref.title,
      children = _ref.children;
  return _react2.default.createElement(
    'html',
    { id: 'index-html' },
    _react2.default.createElement(
      'head',
      null,
      _react2.default.createElement(
        'title',
        null,
        title
      ),
      _react2.default.createElement('meta', { charSet: 'UTF-8' }),
      _react2.default.createElement('link', { rel: 'icon', href: '/favicon.png' })
    ),
    _react2.default.createElement(
      'body',
      null,
      children
    )
  );
};

exports.default = IndexHtml;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVua25vd24iXSwibmFtZXMiOlsiSW5kZXhIdG1sIiwidGl0bGUiLCJjaGlsZHJlbiJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OztBQUVBOzs7Ozs7QUFFQSxJQUFNQSxZQUFZLFNBQVpBLFNBQVk7QUFBQSxNQUFHQyxLQUFILFFBQUdBLEtBQUg7QUFBQSxNQUFVQyxRQUFWLFFBQVVBLFFBQVY7QUFBQSxTQUNoQjtBQUFBO0FBQUEsTUFBTSxJQUFHLFlBQVQ7QUFDQTtBQUFBO0FBQUE7QUFDRTtBQUFBO0FBQUE7QUFBU0Q7QUFBVCxPQURGO0FBRUUsOENBQU0sU0FBUSxPQUFkLEdBRkY7QUFHRSw4Q0FBTSxLQUFJLE1BQVYsRUFBaUIsTUFBSyxjQUF0QjtBQUhGLEtBREE7QUFNQTtBQUFBO0FBQUE7QUFDRUM7QUFERjtBQU5BLEdBRGdCO0FBQUEsQ0FBbEI7O2tCQWFlRixTIiwiZmlsZSI6InVua25vd24iLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCdcblxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuXG5jb25zdCBJbmRleEh0bWwgPSAoeyB0aXRsZSwgY2hpbGRyZW4gfSkgPT4gKFxuICA8aHRtbCBpZD0naW5kZXgtaHRtbCc+XG4gIDxoZWFkPlxuICAgIDx0aXRsZT57IHRpdGxlIH08L3RpdGxlPlxuICAgIDxtZXRhIGNoYXJTZXQ9XCJVVEYtOFwiLz5cbiAgICA8bGluayByZWw9XCJpY29uXCIgaHJlZj1cIi9mYXZpY29uLnBuZ1wiLz5cbiAgPC9oZWFkPlxuICA8Ym9keT5cbiAgeyBjaGlsZHJlbiB9XG4gIDwvYm9keT5cbiAgPC9odG1sPlxuKVxuXG5leHBvcnQgZGVmYXVsdCBJbmRleEh0bWxcblxuXG4iXX0=