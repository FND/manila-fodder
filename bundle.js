(function(){'use strict';if(typeof global === "undefined" && typeof window !== "undefined") {
	window.global = window;
}

function _typeof(obj) {
  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof = function (obj) {
      return typeof obj;
    };
  } else {
    _typeof = function (obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) _setPrototypeOf(subClass, superClass);
}

function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

function isNativeReflectConstruct() {
  if (typeof Reflect === "undefined" || !Reflect.construct) return false;
  if (Reflect.construct.sham) return false;
  if (typeof Proxy === "function") return true;

  try {
    Date.prototype.toString.call(Reflect.construct(Date, [], function () {}));
    return true;
  } catch (e) {
    return false;
  }
}

function _construct(Parent, args, Class) {
  if (isNativeReflectConstruct()) {
    _construct = Reflect.construct;
  } else {
    _construct = function _construct(Parent, args, Class) {
      var a = [null];
      a.push.apply(a, args);
      var Constructor = Function.bind.apply(Parent, a);
      var instance = new Constructor();
      if (Class) _setPrototypeOf(instance, Class.prototype);
      return instance;
    };
  }

  return _construct.apply(null, arguments);
}

function _isNativeFunction(fn) {
  return Function.toString.call(fn).indexOf("[native code]") !== -1;
}

function _wrapNativeSuper(Class) {
  var _cache = typeof Map === "function" ? new Map() : undefined;

  _wrapNativeSuper = function _wrapNativeSuper(Class) {
    if (Class === null || !_isNativeFunction(Class)) return Class;

    if (typeof Class !== "function") {
      throw new TypeError("Super expression must either be null or a function");
    }

    if (typeof _cache !== "undefined") {
      if (_cache.has(Class)) return _cache.get(Class);

      _cache.set(Class, Wrapper);
    }

    function Wrapper() {
      return _construct(Class, arguments, _getPrototypeOf(this).constructor);
    }

    Wrapper.prototype = Object.create(Class.prototype, {
      constructor: {
        value: Wrapper,
        enumerable: false,
        writable: true,
        configurable: true
      }
    });
    return _setPrototypeOf(Wrapper, Class);
  };

  return _wrapNativeSuper(Class);
}

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

function _possibleConstructorReturn(self, call) {
  if (call && (typeof call === "object" || typeof call === "function")) {
    return call;
  }

  return _assertThisInitialized(self);
}

function _superPropBase(object, property) {
  while (!Object.prototype.hasOwnProperty.call(object, property)) {
    object = _getPrototypeOf(object);
    if (object === null) break;
  }

  return object;
}

function _get(target, property, receiver) {
  if (typeof Reflect !== "undefined" && Reflect.get) {
    _get = Reflect.get;
  } else {
    _get = function _get(target, property, receiver) {
      var base = _superPropBase(target, property);

      if (!base) return;
      var desc = Object.getOwnPropertyDescriptor(base, property);

      if (desc.get) {
        return desc.get.call(receiver);
      }

      return desc.value;
    };
  }

  return _get(target, property, receiver || target);
}

function _taggedTemplateLiteral(strings, raw) {
  if (!raw) {
    raw = strings.slice(0);
  }

  return Object.freeze(Object.defineProperties(strings, {
    raw: {
      value: Object.freeze(raw)
    }
  }));
}

function _toConsumableArray(arr) {
  return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread();
}

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) {
    for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) arr2[i] = arr[i];

    return arr2;
  }
}

function _iterableToArray(iter) {
  if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter);
}

function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance");
}/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
var directives = new WeakMap();
var isDirective = function isDirective(o) {
  return typeof o === 'function' && directives.has(o);
};/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
var isCEPolyfill = window.customElements !== undefined && window.customElements.polyfillWrapFlushCallback !== undefined;
var reparentNodes = function reparentNodes(container, start) {
  var end = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
  var before = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null;
  var node = start;
  while (node !== end) {
    var n = node.nextSibling;
    container.insertBefore(node, before);
    node = n;
  }
};
var removeNodes = function removeNodes(container, startNode) {
  var endNode = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
  var node = startNode;
  while (node !== endNode) {
    var n = node.nextSibling;
    container.removeChild(node);
    node = n;
  }
};/**
 * @license
 * Copyright (c) 2018 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
var noChange = {};
var nothing = {};/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
var marker = "{{lit-".concat(String(Math.random()).slice(2), "}}");
var nodeMarker = "<!--".concat(marker, "-->");
var markerRegex = new RegExp("".concat(marker, "|").concat(nodeMarker));
var boundAttributeSuffix = '$lit$';
var Template = function Template(result, element) {
  var _this = this;
  _classCallCheck(this, Template);
  this.parts = [];
  this.element = element;
  var index = -1;
  var partIndex = 0;
  var nodesToRemove = [];
  var _prepareTemplate = function _prepareTemplate(template) {
    var content = template.content;
    var walker = document.createTreeWalker(content, 133
    , null, false);
    var lastPartIndex = 0;
    while (walker.nextNode()) {
      index++;
      var node = walker.currentNode;
      if (node.nodeType === 1
      ) {
          if (node.hasAttributes()) {
            var attributes = node.attributes;
            var count = 0;
            for (var i = 0; i < attributes.length; i++) {
              if (attributes[i].value.indexOf(marker) >= 0) {
                count++;
              }
            }
            while (count-- > 0) {
              var stringForPart = result.strings[partIndex];
              var name = lastAttributeNameRegex.exec(stringForPart)[2];
              var attributeLookupName = name.toLowerCase() + boundAttributeSuffix;
              var attributeValue = node.getAttribute(attributeLookupName);
              var strings = attributeValue.split(markerRegex);
              _this.parts.push({
                type: 'attribute',
                index: index,
                name: name,
                strings: strings
              });
              node.removeAttribute(attributeLookupName);
              partIndex += strings.length - 1;
            }
          }
          if (node.tagName === 'TEMPLATE') {
            _prepareTemplate(node);
          }
        } else if (node.nodeType === 3
      ) {
          var data = node.data;
          if (data.indexOf(marker) >= 0) {
            var parent = node.parentNode;
            var _strings = data.split(markerRegex);
            var lastIndex = _strings.length - 1;
            for (var _i = 0; _i < lastIndex; _i++) {
              parent.insertBefore(_strings[_i] === '' ? createMarker() : document.createTextNode(_strings[_i]), node);
              _this.parts.push({
                type: 'node',
                index: ++index
              });
            }
            if (_strings[lastIndex] === '') {
              parent.insertBefore(createMarker(), node);
              nodesToRemove.push(node);
            } else {
              node.data = _strings[lastIndex];
            }
            partIndex += lastIndex;
          }
        } else if (node.nodeType === 8
      ) {
          if (node.data === marker) {
            var _parent = node.parentNode;
            if (node.previousSibling === null || index === lastPartIndex) {
              index++;
              _parent.insertBefore(createMarker(), node);
            }
            lastPartIndex = index;
            _this.parts.push({
              type: 'node',
              index: index
            });
            if (node.nextSibling === null) {
              node.data = '';
            } else {
              nodesToRemove.push(node);
              index--;
            }
            partIndex++;
          } else {
            var _i2 = -1;
            while ((_i2 = node.data.indexOf(marker, _i2 + 1)) !== -1) {
              _this.parts.push({
                type: 'node',
                index: -1
              });
            }
          }
        }
    }
  };
  _prepareTemplate(element);
  for (var _i3 = 0; _i3 < nodesToRemove.length; _i3++) {
    var n = nodesToRemove[_i3];
    n.parentNode.removeChild(n);
  }
};
var isTemplatePartActive = function isTemplatePartActive(part) {
  return part.index !== -1;
};
var createMarker = function createMarker() {
  return document.createComment('');
};
var lastAttributeNameRegex = /([ \x09\x0a\x0c\x0d])([^\0-\x1F\x7F-\x9F \x09\x0a\x0c\x0d"'>=/]+)([ \x09\x0a\x0c\x0d]*=[ \x09\x0a\x0c\x0d]*(?:[^ \x09\x0a\x0c\x0d"'`<>=]*|"[^"]*|'[^']*))$/;var TemplateInstance =
function () {
  function TemplateInstance(template, processor, options) {
    _classCallCheck(this, TemplateInstance);
    this._parts = [];
    this.template = template;
    this.processor = processor;
    this.options = options;
  }
  _createClass(TemplateInstance, [{
    key: "update",
    value: function update(values) {
      var i = 0;
      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;
      try {
        for (var _iterator = this._parts[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var part = _step.value;
          if (part !== undefined) {
            part.setValue(values[i]);
          }
          i++;
        }
      } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion && _iterator.return != null) {
            _iterator.return();
          }
        } finally {
          if (_didIteratorError) {
            throw _iteratorError;
          }
        }
      }
      var _iteratorNormalCompletion2 = true;
      var _didIteratorError2 = false;
      var _iteratorError2 = undefined;
      try {
        for (var _iterator2 = this._parts[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
          var _part = _step2.value;
          if (_part !== undefined) {
            _part.commit();
          }
        }
      } catch (err) {
        _didIteratorError2 = true;
        _iteratorError2 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion2 && _iterator2.return != null) {
            _iterator2.return();
          }
        } finally {
          if (_didIteratorError2) {
            throw _iteratorError2;
          }
        }
      }
    }
  }, {
    key: "_clone",
    value: function _clone() {
      var _this = this;
      var fragment = isCEPolyfill ? this.template.element.content.cloneNode(true) : document.importNode(this.template.element.content, true);
      var parts = this.template.parts;
      var partIndex = 0;
      var nodeIndex = 0;
      var _prepareInstance = function _prepareInstance(fragment) {
        var walker = document.createTreeWalker(fragment, 133
        , null, false);
        var node = walker.nextNode();
        while (partIndex < parts.length && node !== null) {
          var part = parts[partIndex];
          if (!isTemplatePartActive(part)) {
            _this._parts.push(undefined);
            partIndex++;
          } else if (nodeIndex === part.index) {
            if (part.type === 'node') {
              var _part2 = _this.processor.handleTextExpression(_this.options);
              _part2.insertAfterNode(node.previousSibling);
              _this._parts.push(_part2);
            } else {
              var _this$_parts;
              (_this$_parts = _this._parts).push.apply(_this$_parts, _toConsumableArray(_this.processor.handleAttributeExpressions(node, part.name, part.strings, _this.options)));
            }
            partIndex++;
          } else {
            nodeIndex++;
            if (node.nodeName === 'TEMPLATE') {
              _prepareInstance(node.content);
            }
            node = walker.nextNode();
          }
        }
      };
      _prepareInstance(fragment);
      if (isCEPolyfill) {
        document.adoptNode(fragment);
        customElements.upgrade(fragment);
      }
      return fragment;
    }
  }]);
  return TemplateInstance;
}();var TemplateResult =
function () {
  function TemplateResult(strings, values, type, processor) {
    _classCallCheck(this, TemplateResult);
    this.strings = strings;
    this.values = values;
    this.type = type;
    this.processor = processor;
  }
  _createClass(TemplateResult, [{
    key: "getHTML",
    value: function getHTML() {
      var endIndex = this.strings.length - 1;
      var html = '';
      for (var i = 0; i < endIndex; i++) {
        var s = this.strings[i];
        var match = lastAttributeNameRegex.exec(s);
        if (match) {
          html += s.substr(0, match.index) + match[1] + match[2] + boundAttributeSuffix + match[3] + marker;
        } else {
          html += s + nodeMarker;
        }
      }
      return html + this.strings[endIndex];
    }
  }, {
    key: "getTemplateElement",
    value: function getTemplateElement() {
      var template = document.createElement('template');
      template.innerHTML = this.getHTML();
      return template;
    }
  }]);
  return TemplateResult;
}();
var SVGTemplateResult =
function (_TemplateResult) {
  _inherits(SVGTemplateResult, _TemplateResult);
  function SVGTemplateResult() {
    _classCallCheck(this, SVGTemplateResult);
    return _possibleConstructorReturn(this, _getPrototypeOf(SVGTemplateResult).apply(this, arguments));
  }
  _createClass(SVGTemplateResult, [{
    key: "getHTML",
    value: function getHTML() {
      return "<svg>".concat(_get(_getPrototypeOf(SVGTemplateResult.prototype), "getHTML", this).call(this), "</svg>");
    }
  }, {
    key: "getTemplateElement",
    value: function getTemplateElement() {
      var template = _get(_getPrototypeOf(SVGTemplateResult.prototype), "getTemplateElement", this).call(this);
      var content = template.content;
      var svgElement = content.firstChild;
      content.removeChild(svgElement);
      reparentNodes(content, svgElement.firstChild);
      return template;
    }
  }]);
  return SVGTemplateResult;
}(TemplateResult);var isPrimitive = function isPrimitive(value) {
  return value === null || !(_typeof(value) === 'object' || typeof value === 'function');
};
var AttributeCommitter =
function () {
  function AttributeCommitter(element, name, strings) {
    _classCallCheck(this, AttributeCommitter);
    this.dirty = true;
    this.element = element;
    this.name = name;
    this.strings = strings;
    this.parts = [];
    for (var i = 0; i < strings.length - 1; i++) {
      this.parts[i] = this._createPart();
    }
  }
  _createClass(AttributeCommitter, [{
    key: "_createPart",
    value: function _createPart() {
      return new AttributePart(this);
    }
  }, {
    key: "_getValue",
    value: function _getValue() {
      var strings = this.strings;
      var l = strings.length - 1;
      var text = '';
      for (var i = 0; i < l; i++) {
        text += strings[i];
        var part = this.parts[i];
        if (part !== undefined) {
          var v = part.value;
          if (v != null && (Array.isArray(v) || typeof v !== 'string' && v[Symbol.iterator])) {
            var _iteratorNormalCompletion = true;
            var _didIteratorError = false;
            var _iteratorError = undefined;
            try {
              for (var _iterator = v[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                var t = _step.value;
                text += typeof t === 'string' ? t : String(t);
              }
            } catch (err) {
              _didIteratorError = true;
              _iteratorError = err;
            } finally {
              try {
                if (!_iteratorNormalCompletion && _iterator.return != null) {
                  _iterator.return();
                }
              } finally {
                if (_didIteratorError) {
                  throw _iteratorError;
                }
              }
            }
          } else {
            text += typeof v === 'string' ? v : String(v);
          }
        }
      }
      text += strings[l];
      return text;
    }
  }, {
    key: "commit",
    value: function commit() {
      if (this.dirty) {
        this.dirty = false;
        this.element.setAttribute(this.name, this._getValue());
      }
    }
  }]);
  return AttributeCommitter;
}();
var AttributePart =
function () {
  function AttributePart(comitter) {
    _classCallCheck(this, AttributePart);
    this.value = undefined;
    this.committer = comitter;
  }
  _createClass(AttributePart, [{
    key: "setValue",
    value: function setValue(value) {
      if (value !== noChange && (!isPrimitive(value) || value !== this.value)) {
        this.value = value;
        if (!isDirective(value)) {
          this.committer.dirty = true;
        }
      }
    }
  }, {
    key: "commit",
    value: function commit() {
      while (isDirective(this.value)) {
        var directive$$1 = this.value;
        this.value = noChange;
        directive$$1(this);
      }
      if (this.value === noChange) {
        return;
      }
      this.committer.commit();
    }
  }]);
  return AttributePart;
}();
var NodePart =
function () {
  function NodePart(options) {
    _classCallCheck(this, NodePart);
    this.value = undefined;
    this._pendingValue = undefined;
    this.options = options;
  }
  _createClass(NodePart, [{
    key: "appendInto",
    value: function appendInto(container) {
      this.startNode = container.appendChild(createMarker());
      this.endNode = container.appendChild(createMarker());
    }
  }, {
    key: "insertAfterNode",
    value: function insertAfterNode(ref) {
      this.startNode = ref;
      this.endNode = ref.nextSibling;
    }
  }, {
    key: "appendIntoPart",
    value: function appendIntoPart(part) {
      part._insert(this.startNode = createMarker());
      part._insert(this.endNode = createMarker());
    }
  }, {
    key: "insertAfterPart",
    value: function insertAfterPart(ref) {
      ref._insert(this.startNode = createMarker());
      this.endNode = ref.endNode;
      ref.endNode = this.startNode;
    }
  }, {
    key: "setValue",
    value: function setValue(value) {
      this._pendingValue = value;
    }
  }, {
    key: "commit",
    value: function commit() {
      while (isDirective(this._pendingValue)) {
        var directive$$1 = this._pendingValue;
        this._pendingValue = noChange;
        directive$$1(this);
      }
      var value = this._pendingValue;
      if (value === noChange) {
        return;
      }
      if (isPrimitive(value)) {
        if (value !== this.value) {
          this._commitText(value);
        }
      } else if (value instanceof TemplateResult) {
        this._commitTemplateResult(value);
      } else if (value instanceof Node) {
        this._commitNode(value);
      } else if (Array.isArray(value) || value[Symbol.iterator]) {
        this._commitIterable(value);
      } else if (value === nothing) {
        this.value = nothing;
        this.clear();
      } else {
        this._commitText(value);
      }
    }
  }, {
    key: "_insert",
    value: function _insert(node) {
      this.endNode.parentNode.insertBefore(node, this.endNode);
    }
  }, {
    key: "_commitNode",
    value: function _commitNode(value) {
      if (this.value === value) {
        return;
      }
      this.clear();
      this._insert(value);
      this.value = value;
    }
  }, {
    key: "_commitText",
    value: function _commitText(value) {
      var node = this.startNode.nextSibling;
      value = value == null ? '' : value;
      if (node === this.endNode.previousSibling && node.nodeType === 3
      ) {
          node.data = value;
        } else {
        this._commitNode(document.createTextNode(typeof value === 'string' ? value : String(value)));
      }
      this.value = value;
    }
  }, {
    key: "_commitTemplateResult",
    value: function _commitTemplateResult(value) {
      var template = this.options.templateFactory(value);
      if (this.value && this.value.template === template) {
        this.value.update(value.values);
      } else {
        var instance = new TemplateInstance(template, value.processor, this.options);
        var fragment = instance._clone();
        instance.update(value.values);
        this._commitNode(fragment);
        this.value = instance;
      }
    }
  }, {
    key: "_commitIterable",
    value: function _commitIterable(value) {
      if (!Array.isArray(this.value)) {
        this.value = [];
        this.clear();
      }
      var itemParts = this.value;
      var partIndex = 0;
      var itemPart;
      var _iteratorNormalCompletion2 = true;
      var _didIteratorError2 = false;
      var _iteratorError2 = undefined;
      try {
        for (var _iterator2 = value[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
          var item = _step2.value;
          itemPart = itemParts[partIndex];
          if (itemPart === undefined) {
            itemPart = new NodePart(this.options);
            itemParts.push(itemPart);
            if (partIndex === 0) {
              itemPart.appendIntoPart(this);
            } else {
              itemPart.insertAfterPart(itemParts[partIndex - 1]);
            }
          }
          itemPart.setValue(item);
          itemPart.commit();
          partIndex++;
        }
      } catch (err) {
        _didIteratorError2 = true;
        _iteratorError2 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion2 && _iterator2.return != null) {
            _iterator2.return();
          }
        } finally {
          if (_didIteratorError2) {
            throw _iteratorError2;
          }
        }
      }
      if (partIndex < itemParts.length) {
        itemParts.length = partIndex;
        this.clear(itemPart && itemPart.endNode);
      }
    }
  }, {
    key: "clear",
    value: function clear() {
      var startNode = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.startNode;
      removeNodes(this.startNode.parentNode, startNode.nextSibling, this.endNode);
    }
  }]);
  return NodePart;
}();
var BooleanAttributePart =
function () {
  function BooleanAttributePart(element, name, strings) {
    _classCallCheck(this, BooleanAttributePart);
    this.value = undefined;
    this._pendingValue = undefined;
    if (strings.length !== 2 || strings[0] !== '' || strings[1] !== '') {
      throw new Error('Boolean attributes can only contain a single expression');
    }
    this.element = element;
    this.name = name;
    this.strings = strings;
  }
  _createClass(BooleanAttributePart, [{
    key: "setValue",
    value: function setValue(value) {
      this._pendingValue = value;
    }
  }, {
    key: "commit",
    value: function commit() {
      while (isDirective(this._pendingValue)) {
        var directive$$1 = this._pendingValue;
        this._pendingValue = noChange;
        directive$$1(this);
      }
      if (this._pendingValue === noChange) {
        return;
      }
      var value = !!this._pendingValue;
      if (this.value !== value) {
        if (value) {
          this.element.setAttribute(this.name, '');
        } else {
          this.element.removeAttribute(this.name);
        }
      }
      this.value = value;
      this._pendingValue = noChange;
    }
  }]);
  return BooleanAttributePart;
}();
var PropertyCommitter =
function (_AttributeCommitter) {
  _inherits(PropertyCommitter, _AttributeCommitter);
  function PropertyCommitter(element, name, strings) {
    var _this;
    _classCallCheck(this, PropertyCommitter);
    _this = _possibleConstructorReturn(this, _getPrototypeOf(PropertyCommitter).call(this, element, name, strings));
    _this.single = strings.length === 2 && strings[0] === '' && strings[1] === '';
    return _this;
  }
  _createClass(PropertyCommitter, [{
    key: "_createPart",
    value: function _createPart() {
      return new PropertyPart(this);
    }
  }, {
    key: "_getValue",
    value: function _getValue() {
      if (this.single) {
        return this.parts[0].value;
      }
      return _get(_getPrototypeOf(PropertyCommitter.prototype), "_getValue", this).call(this);
    }
  }, {
    key: "commit",
    value: function commit() {
      if (this.dirty) {
        this.dirty = false;
        this.element[this.name] = this._getValue();
      }
    }
  }]);
  return PropertyCommitter;
}(AttributeCommitter);
var PropertyPart =
function (_AttributePart) {
  _inherits(PropertyPart, _AttributePart);
  function PropertyPart() {
    _classCallCheck(this, PropertyPart);
    return _possibleConstructorReturn(this, _getPrototypeOf(PropertyPart).apply(this, arguments));
  }
  return PropertyPart;
}(AttributePart);
var eventOptionsSupported = false;
try {
  var options = {
    get capture() {
      eventOptionsSupported = true;
      return false;
    }
  };
  window.addEventListener('test', options, options);
  window.removeEventListener('test', options, options);
} catch (_e) {}
var EventPart =
function () {
  function EventPart(element, eventName, eventContext) {
    var _this2 = this;
    _classCallCheck(this, EventPart);
    this.value = undefined;
    this._pendingValue = undefined;
    this.element = element;
    this.eventName = eventName;
    this.eventContext = eventContext;
    this._boundHandleEvent = function (e) {
      return _this2.handleEvent(e);
    };
  }
  _createClass(EventPart, [{
    key: "setValue",
    value: function setValue(value) {
      this._pendingValue = value;
    }
  }, {
    key: "commit",
    value: function commit() {
      while (isDirective(this._pendingValue)) {
        var directive$$1 = this._pendingValue;
        this._pendingValue = noChange;
        directive$$1(this);
      }
      if (this._pendingValue === noChange) {
        return;
      }
      var newListener = this._pendingValue;
      var oldListener = this.value;
      var shouldRemoveListener = newListener == null || oldListener != null && (newListener.capture !== oldListener.capture || newListener.once !== oldListener.once || newListener.passive !== oldListener.passive);
      var shouldAddListener = newListener != null && (oldListener == null || shouldRemoveListener);
      if (shouldRemoveListener) {
        this.element.removeEventListener(this.eventName, this._boundHandleEvent, this._options);
      }
      if (shouldAddListener) {
        this._options = getOptions(newListener);
        this.element.addEventListener(this.eventName, this._boundHandleEvent, this._options);
      }
      this.value = newListener;
      this._pendingValue = noChange;
    }
  }, {
    key: "handleEvent",
    value: function handleEvent(event) {
      if (typeof this.value === 'function') {
        this.value.call(this.eventContext || this.element, event);
      } else {
        this.value.handleEvent(event);
      }
    }
  }]);
  return EventPart;
}();
var getOptions = function getOptions(o) {
  return o && (eventOptionsSupported ? {
    capture: o.capture,
    passive: o.passive,
    once: o.once
  } : o.capture);
};var DefaultTemplateProcessor =
function () {
  function DefaultTemplateProcessor() {
    _classCallCheck(this, DefaultTemplateProcessor);
  }
  _createClass(DefaultTemplateProcessor, [{
    key: "handleAttributeExpressions",
    value: function handleAttributeExpressions(element, name, strings, options) {
      var prefix = name[0];
      if (prefix === '.') {
        var _comitter = new PropertyCommitter(element, name.slice(1), strings);
        return _comitter.parts;
      }
      if (prefix === '@') {
        return [new EventPart(element, name.slice(1), options.eventContext)];
      }
      if (prefix === '?') {
        return [new BooleanAttributePart(element, name.slice(1), strings)];
      }
      var comitter = new AttributeCommitter(element, name, strings);
      return comitter.parts;
    }
  }, {
    key: "handleTextExpression",
    value: function handleTextExpression(options) {
      return new NodePart(options);
    }
  }]);
  return DefaultTemplateProcessor;
}();
var defaultTemplateProcessor = new DefaultTemplateProcessor();/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
function templateFactory(result) {
  var templateCache = templateCaches.get(result.type);
  if (templateCache === undefined) {
    templateCache = {
      stringsArray: new WeakMap(),
      keyString: new Map()
    };
    templateCaches.set(result.type, templateCache);
  }
  var template = templateCache.stringsArray.get(result.strings);
  if (template !== undefined) {
    return template;
  }
  var key = result.strings.join(marker);
  template = templateCache.keyString.get(key);
  if (template === undefined) {
    template = new Template(result, result.getTemplateElement());
    templateCache.keyString.set(key, template);
  }
  templateCache.stringsArray.set(result.strings, template);
  return template;
}
var templateCaches = new Map();/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
var parts = new WeakMap();
var render = function render(result, container, options) {
  var part = parts.get(container);
  if (part === undefined) {
    removeNodes(container, container.firstChild);
    parts.set(container, part = new NodePart(Object.assign({
      templateFactory: templateFactory
    }, options)));
    part.appendInto(container);
  }
  part.setValue(result);
  part.commit();
};/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
var html = function html(strings) {
  for (var _len = arguments.length, values = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    values[_key - 1] = arguments[_key];
  }
  return new TemplateResult(strings, values, 'html', defaultTemplateProcessor);
};function _templateObject6() {
  var data = _taggedTemplateLiteral(["<li>\n\t\t\t<code>", "</code>\n\t\t\t<small>(", " kB)</small>\n\t\t</li>"]);
  _templateObject6 = function _templateObject6() {
    return data;
  };
  return data;
}
function _templateObject5() {
  var data = _taggedTemplateLiteral(["\n<ul>\n\t", "\n</ul>\n\t"]);
  _templateObject5 = function _templateObject5() {
    return data;
  };
  return data;
}
function _templateObject4() {
  var data = _taggedTemplateLiteral(["<p class=\"error\">", "</p>"]);
  _templateObject4 = function _templateObject4() {
    return data;
  };
  return data;
}
function _templateObject3() {
  var data = _taggedTemplateLiteral(["<p class=\"hint\">", "</p>"]);
  _templateObject3 = function _templateObject3() {
    return data;
  };
  return data;
}
function _templateObject2() {
  var data = _taggedTemplateLiteral(["<button type=\"button\">", "</button>"]);
  _templateObject2 = function _templateObject2() {
    return data;
  };
  return data;
}
function _templateObject() {
  var data = _taggedTemplateLiteral(["\n", "\n", "\n\n", "\n", "\n\n", "\n\n", "\n\t"]);
  _templateObject = function _templateObject() {
    return data;
  };
  return data;
}
var render$1 = (function (container, _ref, messages, _ref2) {
  var field = _ref.field,
      note = _ref.note;
  var state = _ref2.state,
      files = _ref2.files;
  var nodes = template(field, note, messages, {
    state: state,
    files: files
  });
  render(nodes, container);
});
function template(field, note, _ref3, _ref4) {
  var hint = _ref3.hint,
      reset = _ref3.reset,
      error = _ref3.error;
  var state = _ref4.state,
      files = _ref4.files;
  var rejected = state === "rejected";
  return html(_templateObject(), field, optional(reset && (rejected || files.length > 0) && html(_templateObject2(), reset)), optional(hint && html(_templateObject3(), hint)), note, optional(state === "settled" && renderFiles(files)), optional(rejected && error && html(_templateObject4(), error)));
}
function renderFiles(files) {
  files = Array.prototype.slice.call(files);
  return html(_templateObject5(), files.map(function (_ref5) {
    var name = _ref5.name,
        size = _ref5.size;
    size = Math.round(size / 1024);
    return html(_templateObject6(), name, size);
  }));
}
function optional(val) {
  return val === false ? null : val;
}var ManilaFodder =
function (_HTMLElement) {
  _inherits(ManilaFodder, _HTMLElement);
  function ManilaFodder() {
    _classCallCheck(this, ManilaFodder);
    return _possibleConstructorReturn(this, _getPrototypeOf(ManilaFodder).apply(this, arguments));
  }
  _createClass(ManilaFodder, [{
    key: "connectedCallback",
    value: function connectedCallback() {
      var _this = this;
      this.classList.add("augmented");
      this.setAttribute("aria-live", "polite");
      var field = this.field = this.querySelector("input[type=file]");
      this.note = this.querySelector(".note");
      this.messages = {
        hint: this.getAttribute("hint"),
        reset: this.getAttribute("reset-label"),
        error: this.getAttribute("error-multi")
      };
      var init = function init() {
        _this.setState(field.files.length === 0 ? "idle" : "settled");
      };
      this.setPending(false);
      init();
      field.addEventListener("change", init);
      this.addEventListener("click", this.onReset);
      this.addEventListener("dragover", this.onEnter);
      this.addEventListener("dragleave", this.onLeave);
      this.addEventListener("drop", this.onDrop);
    }
  }, {
    key: "onReset",
    value: function onReset(ev) {
      if (ev.target.nodeName === "BUTTON") {
        this.reset();
      }
    }
  }, {
    key: "onDrop",
    value: function onDrop(ev) {
      ev.preventDefault();
      var files = ev.dataTransfer.files;
      if (files.length < 2 || this.multiple) {
        this.field.files = files;
        this.setState("settled");
      } else {
        this.reset();
        this.setState("rejected");
      }
      this.setPending(false);
    }
  }, {
    key: "onEnter",
    value: function onEnter(ev) {
      ev.preventDefault();
      if (this._pending) {
        return;
      }
      ev.dataTransfer.dropEffect = "copy";
      this.setPending(true);
    }
  }, {
    key: "onLeave",
    value: function onLeave(ev) {
      this.setPending(false);
    }
  }, {
    key: "reset",
    value: function reset() {
      this.setState("idle");
      this.setPending(false);
    }
  }, {
    key: "setState",
    value: function setState(state) {
      var field = this.field;
      switch (state) {
        case "idle":
          field.value = "";
          this.classList.remove("settled");
          this.classList.remove("rejected");
          break;
        case "settled":
          this.classList.add("settled");
          this.classList.remove("rejected");
          break;
        case "rejected":
          this.classList.remove("settled");
          this.classList.add("rejected");
          break;
        default:
          throw new Error("unknown state: `".concat(state, "`"));
      }
      render$1(this, {
        field: field,
        note: this.note
      }, this.messages, {
        state: state,
        files: field.files
      });
    }
  }, {
    key: "setPending",
    value: function setPending(value) {
      this._pending = !!value;
      this.classList[value ? "add" : "remove"]("pending");
    }
  }, {
    key: "multiple",
    get: function get() {
      return this.field.hasAttribute("multiple");
    }
  }]);
  return ManilaFodder;
}(_wrapNativeSuper(HTMLElement));var FILES = [{
  name: "minutes.txt",
  size: 32768
}, {
  name: "logo.png",
  size: 65536
}];
customElements.define("manila-fodder",
function (_ManilaFodder) {
  _inherits(_class, _ManilaFodder);
  function _class() {
    _classCallCheck(this, _class);
    return _possibleConstructorReturn(this, _getPrototypeOf(_class).apply(this, arguments));
  }
  _createClass(_class, [{
    key: "connectedCallback",
    value: function connectedCallback() {
      var _this = this;
      var state = this.getAttribute("state");
      if (state) {
        this._files = state === "settled" ? FILES : null;
        setTimeout(function () {
          _this.setState(state);
        }, 1);
      }
      if (this.hasAttribute("pending")) {
        setTimeout(function () {
          _this.setPending(true);
        }, 1);
      }
      _get(_getPrototypeOf(_class.prototype), "connectedCallback", this).call(this);
    }
  }, {
    key: "setState",
    value: function setState(state) {
      var files = this._files;
      _get(_getPrototypeOf(_class.prototype), "setState", this).call(this, state);
      if (files) {
        render$1(this, {
          field: this.field,
          note: this.note
        }, this.messages, {
          state: state,
          files: files
        });
      }
    }
  }]);
  return _class;
}(ManilaFodder));}());