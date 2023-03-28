"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.XMLParser = exports.JsonParser = void 0;
var xml_js_1 = require("xml-js");
var fs_1 = require("fs");
var JsonParser = /** @class */ (function () {
    function JsonParser() {
    }
    JsonParser.prototype.XMLParseFromFile = function (path) {
        var data = (0, fs_1.readFileSync)(path, 'utf-8');
        return this.XMLParseRaw(data);
    };
    JsonParser.prototype.XMLParseRaw = function (doc) {
        return (0, xml_js_1.xml2json)(doc);
    };
    return JsonParser;
}());
exports.JsonParser = JsonParser;
var XMLParser = /** @class */ (function () {
    function XMLParser() {
    }
    XMLParser.prototype.JsonParseFromFile = function (path) {
        var data = (0, fs_1.readFileSync)(path, 'utf-8');
        return this.JsonParseRaw(data);
    };
    XMLParser.prototype.JsonParseRaw = function (doc) {
        return (0, xml_js_1.json2xml)(doc);
    };
    return XMLParser;
}());
exports.XMLParser = XMLParser;
