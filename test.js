"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.App = void 0;
// test.js - exporting es6
var App;
(function (App) {
    var SomeClass = /** @class */ (function () {
        function SomeClass() {
        }
        SomeClass.prototype.getName = function () {
            return 'name';
        };
        return SomeClass;
    }());
    App.SomeClass = SomeClass;
    var OtherClass = /** @class */ (function () {
        function OtherClass() {
        }
        OtherClass.prototype.getName = function () {
            return 'name';
        };
        return OtherClass;
    }());
    App.OtherClass = OtherClass;
})(App = exports.App || (exports.App = {}));
