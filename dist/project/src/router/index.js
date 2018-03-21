'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _vue = require('vue');

var _vue2 = _interopRequireDefault(_vue);

var _vueRouter = require('vue-router');

var _vueRouter2 = _interopRequireDefault(_vueRouter);

var _App = require('@/App.vue');

var _App2 = _interopRequireDefault(_App);

var _content = require('@/components/content.vue');

var _content2 = _interopRequireDefault(_content);

var _wuliu = require('@/pages/wuliu/wuliu');

var _wuliu2 = _interopRequireDefault(_wuliu);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_vue2.default.use(_vueRouter2.default);

exports.default = new _vueRouter2.default({
  routes: [{
    path: '/',
    component: _content2.default,
    children: [{
      path: '/',
      component: _wuliu2.default
    }]
  }]
});
//# sourceMappingURL=index.js.map