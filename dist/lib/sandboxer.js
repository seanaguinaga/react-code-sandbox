'use strict';Object.defineProperty(exports,'__esModule',{value:!0});var _lodash=require('lodash'),_lodash2=_interopRequireDefault(_lodash);function _interopRequireDefault(a){return a&&a.__esModule?a:{default:a}}exports.default=function(){return{visitor:{Program:function c(a){var b=_lodash2.default.filter(a.get('body'),function(a){return a.isImportDeclaration()});_lodash2.default.each(b,function(a){return a.remove()})},Identifier:function b(a){'render'!==a.node.name||(a.node.name='return render')}}}};