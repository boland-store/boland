'use strict';



;define("catch-the-mouse/app", ["exports", "@ember/application", "catch-the-mouse/resolver", "ember-load-initializers", "catch-the-mouse/config/environment"], function (_exports, _application, _resolver, _emberLoadInitializers, _environment) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71f0,"@ember/application",0,"catch-the-mouse/resolver",0,"ember-load-initializers",0,"catch-the-mouse/config/environment"eaimeta@70e063a35619d71f

  var App = _application.default.extend({
    modulePrefix: _environment.default.modulePrefix,
    podModulePrefix: _environment.default.podModulePrefix,
    Resolver: _resolver.default
  });

  (0, _emberLoadInitializers.default)(App, _environment.default.modulePrefix);
  var _default = App;
  _exports.default = _default;
});
;define("catch-the-mouse/component-managers/glimmer", ["exports", "@glimmer/component/-private/ember-component-manager"], function (_exports, _emberComponentManager) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function get() {
      return _emberComponentManager.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"@glimmer/component/-private/ember-component-manager"eaimeta@70e063a35619d71f
});
;define("catch-the-mouse/components/-dynamic-element-alt", ["exports", "@ember/component"], function (_exports, _component) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71f0,"@ember/component"eaimeta@70e063a35619d71f

  // This component is not needed anymore. However we can only safely remove it once we have an Embroider release that
  // has the special dependency rule for this addon removed:
  // https://github.com/embroider-build/embroider/blob/4fad67f16f811e7f93199a1ee92dba8254c42978/packages/compat/src/addon-dependency-rules/ember-element-helper.ts
  var _default = _component.default.extend();

  _exports.default = _default;
});
;define("catch-the-mouse/components/-dynamic-element", ["exports", "@ember/component"], function (_exports, _component) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71f0,"@ember/component"eaimeta@70e063a35619d71f

  // This component is not needed anymore. However we can only safely remove it once we have an Embroider release that
  // has the special dependency rule for this addon removed:
  // https://github.com/embroider-build/embroider/blob/4fad67f16f811e7f93199a1ee92dba8254c42978/packages/compat/src/addon-dependency-rules/ember-element-helper.ts
  var _default = _component.default.extend();

  _exports.default = _default;
});
;define("catch-the-mouse/components/basic-dropdown-content", ["exports", "ember-basic-dropdown/components/basic-dropdown-content"], function (_exports, _basicDropdownContent) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function get() {
      return _basicDropdownContent.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-basic-dropdown/components/basic-dropdown-content"eaimeta@70e063a35619d71f
});
;define("catch-the-mouse/components/basic-dropdown-optional-tag", ["exports", "ember-basic-dropdown/components/basic-dropdown-optional-tag"], function (_exports, _basicDropdownOptionalTag) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function get() {
      return _basicDropdownOptionalTag.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-basic-dropdown/components/basic-dropdown-optional-tag"eaimeta@70e063a35619d71f
});
;define("catch-the-mouse/components/basic-dropdown-trigger", ["exports", "ember-basic-dropdown/components/basic-dropdown-trigger"], function (_exports, _basicDropdownTrigger) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function get() {
      return _basicDropdownTrigger.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-basic-dropdown/components/basic-dropdown-trigger"eaimeta@70e063a35619d71f
});
;define("catch-the-mouse/components/basic-dropdown", ["exports", "ember-basic-dropdown/components/basic-dropdown"], function (_exports, _basicDropdown) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function get() {
      return _basicDropdown.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-basic-dropdown/components/basic-dropdown"eaimeta@70e063a35619d71f
});
;define("catch-the-mouse/components/board-screen", ["exports", "@ember/component", "@ember/service", "@ember/object", "@ember/object/computed"], function (_exports, _component, _service, _object, _computed) {
  'use strict';

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _obj;

  0; //eaimeta@70e063a35619d71f0,"@ember/component",0,"@ember/service",0,"@ember/object",0,"@ember/object/computed"eaimeta@70e063a35619d71f

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  var _default = _component.default.extend((_obj = {
    classNames: ['board-screen'],
    gameService: (0, _service.inject)(),
    localStorageService: (0, _service.inject)(),
    confirmedDialog: false,
    user: '',
    records: [],
    points: (0, _computed.alias)('gameService.points'),
    isPlaying: (0, _computed.alias)('gameService.isPlaying'),
    showScore: (0, _object.computed)('isPlaying', 'confirmedDialog', function () {
      var confirmedDialog = this.confirmedDialog;
      var isPlaying = this.isPlaying;
      return !confirmedDialog && isPlaying;
    }),
    didInsertElement: function didInsertElement() {
      this._super.apply(this, arguments);

      (0, _object.set)(this, 'confirmedDialog', false);
      var localStorageService = this.localStorageService;
      var records = localStorageService && localStorageService.getCachedItem('records');

      if (records) {
        (0, _object.set)(this, 'records', records);
      }
    },
    showBoard: function showBoard() {
      (0, _object.set)(this, 'confirmedDialog', true);
    },
    saveScore: function saveScore() {
      var user = this.user ? this.user : '';
      var points = this.points;
      var newRecord = {
        user: user,
        points: points
      };
      var records = this.records ? this.records : [];
      records.pushObject(newRecord);
      records = records.sortBy('points');

      if (records.length > 5) {
        records = records.slice(records.length - 5);
      }

      records = records.reverse();
      var localStorageService = this.localStorageService;
      localStorageService && localStorageService.setCachedItem('records', records);
      (0, _object.set)(this, 'records', records);
      (0, _object.set)(this, 'confirmedDialog', true);
    },
    goHome: function goHome() {
      var gameService = this.gameService;
      gameService && gameService.goHome();
    },
    resetCachedPoints: function resetCachedPoints() {
      var localStorageService = this.localStorageService;
      var records = [];
      localStorageService && localStorageService.setCachedItem('records', records);
      (0, _object.set)(this, 'records', records);
    }
  }, (_applyDecoratedDescriptor(_obj, "showBoard", [_object.action], Object.getOwnPropertyDescriptor(_obj, "showBoard"), _obj), _applyDecoratedDescriptor(_obj, "saveScore", [_object.action], Object.getOwnPropertyDescriptor(_obj, "saveScore"), _obj), _applyDecoratedDescriptor(_obj, "goHome", [_object.action], Object.getOwnPropertyDescriptor(_obj, "goHome"), _obj), _applyDecoratedDescriptor(_obj, "resetCachedPoints", [_object.action], Object.getOwnPropertyDescriptor(_obj, "resetCachedPoints"), _obj)), _obj));

  _exports.default = _default;
});
;define("catch-the-mouse/components/game-char", ["exports", "@ember/component", "@ember/service", "@glimmer/tracking", "@ember/object"], function (_exports, _component, _service, _tracking, _object) {
  'use strict';

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _obj, _init, _init2, _init3, _init4;

  0; //eaimeta@70e063a35619d71f0,"@ember/component",0,"@ember/service",0,"@glimmer/tracking",0,"@ember/object"eaimeta@70e063a35619d71f

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  var _default = _component.default.extend((_obj = {
    classNames: ['game-char'],
    gameService: (0, _service.inject)(),
    type: 'cat',
    name: 'cat-1',
    gate: undefined,
    allowedClick: false,
    mice: ['mouse-1', 'mouse-2', 'mouse-3'],
    cats: ['cat-1', 'cat-2', 'cat-3'],
    didInsertElement: function didInsertElement() {
      this._super.apply(this, arguments);

      var mice = this.mice ? this.mice : [];
      var cats = this.cats ? this.cats : [];
      this.type = cats.includes(this.name) ? 'cat' : 'mouse';
      this.getFreeGate();
    },
    setupGate: function setupGate() {
      var _this = this;

      var gate = this.gate;
      var gameService = this.gameService;
      var left = gate && gate.left;
      var bottom = gate && gate.bottom;
      var rotate = gate && gate.rotate;
      var animationTime = Math.floor(Math.random() * 1250) + 500;
      var element = this.element;
      var imageElement = element && element.getElementsByClassName('gs-char-image')[0];

      if (element && element.style) {
        element.style.left = left + '%';
        element.style.bottom = bottom + '%';
        element.style.transform = 'rotate(' + rotate + 'deg)';

        if (imageElement && imageElement.style) {
          imageElement.style.top = '0';
          imageElement.style.transitionDuration = animationTime / 1000 + 's';
        }

        this.allowedClick = true;
      } // show char


      setTimeout(function () {
        // hide char
        var element = _this.element;
        var imageElement = element && element.getElementsByClassName('gs-char-image')[0];

        if (imageElement && imageElement.style) {
          imageElement.style.top = '100%';
        }

        setTimeout(function () {
          _this.unlockGate();
        }, animationTime);
      }, animationTime + 250);
    },
    getFreeGate: function getFreeGate() {
      var _this2 = this;

      var waitTime = Math.floor(Math.random() * 4) * 1000;
      var gameService = this.gameService;
      var element = this.element;

      if (element && element.style) {
        element.style.left = '100vw';
        element.style.bottom = '100vh';
      }

      setTimeout(function () {
        if (_this2.isDestroyed || _this2.isDestroying || !gameService || _this2.gate) {
          return;
        }

        _this2.gate = gameService.getFreeGate();

        if (!_this2.gate) {
          _this2.getFreeGate();
        } else {
          _this2.setupGate();
        }
      }, waitTime);
    },
    unlockGate: function unlockGate() {
      var gate = this.gate;

      if (!gate) {
        return;
      }

      this.gate = undefined;
      var gameService = this.gameService;
      var isDestroying = this.isDestroyed || this.isDestroying;

      if (this.allowedClick && !isDestroying) {
        this.allowedClick = false;
      }

      gameService && gameService.unlockGate(gate);

      if (!isDestroying) {
        this.getFreeGate();
      }
    },
    handleClick: function handleClick() {
      if (this.allowedClick) {
        this.allowedClick = false;
      } else {
        return;
      }

      var element = this.element;
      var imageElement = element && element.getElementsByClassName('gs-char-image')[0];

      if (imageElement && imageElement.style) {
        imageElement.style.transitionDuration = '0.25s';
        imageElement.style.top = '100%';
      }

      var gameService = this.gameService;
      gameService && this.type === 'mouse' && gameService.incrementPoints() || this.type === 'cat' && gameService.decrementPoints();
    }
  }, (_applyDecoratedDescriptor(_obj, "type", [_tracking.tracked], (_init = Object.getOwnPropertyDescriptor(_obj, "type"), _init = _init ? _init.value : undefined, {
    enumerable: true,
    configurable: true,
    writable: true,
    initializer: function initializer() {
      return _init;
    }
  }), _obj), _applyDecoratedDescriptor(_obj, "name", [_tracking.tracked], (_init2 = Object.getOwnPropertyDescriptor(_obj, "name"), _init2 = _init2 ? _init2.value : undefined, {
    enumerable: true,
    configurable: true,
    writable: true,
    initializer: function initializer() {
      return _init2;
    }
  }), _obj), _applyDecoratedDescriptor(_obj, "gate", [_tracking.tracked], (_init3 = Object.getOwnPropertyDescriptor(_obj, "gate"), _init3 = _init3 ? _init3.value : undefined, {
    enumerable: true,
    configurable: true,
    writable: true,
    initializer: function initializer() {
      return _init3;
    }
  }), _obj), _applyDecoratedDescriptor(_obj, "allowedClick", [_tracking.tracked], (_init4 = Object.getOwnPropertyDescriptor(_obj, "allowedClick"), _init4 = _init4 ? _init4.value : undefined, {
    enumerable: true,
    configurable: true,
    writable: true,
    initializer: function initializer() {
      return _init4;
    }
  }), _obj), _applyDecoratedDescriptor(_obj, "handleClick", [_object.action], Object.getOwnPropertyDescriptor(_obj, "handleClick"), _obj)), _obj));

  _exports.default = _default;
});
;define("catch-the-mouse/components/game-screen", ["exports", "@ember/component", "@ember/service", "@ember/object", "@ember/object/computed"], function (_exports, _component, _service, _object, _computed) {
  'use strict';

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _obj;

  0; //eaimeta@70e063a35619d71f0,"@ember/component",0,"@ember/service",0,"@ember/object",0,"@ember/object/computed"eaimeta@70e063a35619d71f

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  var _default = _component.default.extend((_obj = {
    classNames: ['game-screen'],
    gameService: (0, _service.inject)(),
    points: (0, _computed.alias)('gameService.points'),
    time: (0, _computed.alias)('gameService.time'),
    pointsClass: (0, _object.computed)('gameService.pointState', 'points', function () {
      var gameService = this.gameService;
      var pointState = gameService && gameService.pointState;
      var points = this.points;
      return 'points-' + (points === 0 ? 'initial' : pointState === 'increased' ? 'increased' : 'decreased');
    }),
    pointsTimeClass: (0, _object.computed)('time', function () {
      var gameService = this.gameService;
      var time = gameService && gameService.time;
      return 'points-timer-' + (time < 6 ? 'warning' : 'ok');
    }),
    endGame: function endGame() {
      var gameService = this.gameService;
      gameService && gameService.endGame();
    }
  }, (_applyDecoratedDescriptor(_obj, "endGame", [_object.action], Object.getOwnPropertyDescriptor(_obj, "endGame"), _obj)), _obj));

  _exports.default = _default;
});
;function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

define("catch-the-mouse/components/lang-switch", ["exports", "@glimmer/component", "@ember/service", "@ember/object/computed", "@ember/object"], function (_exports, _component, _service, _computed, _object) {
  'use strict';

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _dec, _dec2, _class2, _descriptor, _descriptor2, _descriptor3;

  0; //eaimeta@70e063a35619d71f0,"@glimmer/component",0,"@ember/service",0,"@ember/object/computed",0,"@ember/object"eaimeta@70e063a35619d71f

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

  function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

  function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

  function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

  function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

  function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

  function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  var _class = (_dec = (0, _computed.alias)('langService.lang'), _dec2 = (0, _computed.alias)('langService.langs'), (_class2 = /*#__PURE__*/function (_Component) {
    _inherits(_class2, _Component);

    var _super = _createSuper(_class2);

    function _class2() {
      var _this;

      _classCallCheck(this, _class2);

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      _this = _super.call.apply(_super, [this].concat(args));

      _defineProperty(_assertThisInitialized(_this), "classNames", ['lang-switch']);

      _initializerDefineProperty(_assertThisInitialized(_this), "langService", _descriptor, _assertThisInitialized(_this));

      _initializerDefineProperty(_assertThisInitialized(_this), "lang", _descriptor2, _assertThisInitialized(_this));

      _initializerDefineProperty(_assertThisInitialized(_this), "langs", _descriptor3, _assertThisInitialized(_this));

      return _this;
    }

    _createClass(_class2, [{
      key: "switchLang",
      value: function switchLang(lang) {
        var langService = this.langService;
        lang && langService && langService.setupLang(lang);
      }
    }]);

    return _class2;
  }(_component.default), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "langService", [_service.inject], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "lang", [_dec], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "langs", [_dec2], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _applyDecoratedDescriptor(_class2.prototype, "switchLang", [_object.action], Object.getOwnPropertyDescriptor(_class2.prototype, "switchLang"), _class2.prototype)), _class2));

  _exports.default = _class;
});
;function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

define("catch-the-mouse/components/main-screen", ["exports", "@glimmer/component", "@glimmer/tracking", "@ember/object", "@ember/object/computed", "@ember/service"], function (_exports, _component, _tracking, _object, _computed, _service) {
  'use strict';

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _dec, _dec2, _class2, _descriptor, _descriptor2, _descriptor3;

  0; //eaimeta@70e063a35619d71f0,"@glimmer/component",0,"@glimmer/tracking",0,"@ember/object",0,"@ember/object/computed",0,"@ember/service"eaimeta@70e063a35619d71f

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

  function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

  function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

  function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

  function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

  function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

  function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  var _class = (_dec = (0, _computed.alias)('gameService.gameScreen'), _dec2 = (0, _computed.alias)('gameService.boardScreen'), (_class2 = /*#__PURE__*/function (_Component) {
    _inherits(_class2, _Component);

    var _super = _createSuper(_class2);

    function _class2() {
      var _this;

      _classCallCheck(this, _class2);

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      _this = _super.call.apply(_super, [this].concat(args));

      _defineProperty(_assertThisInitialized(_this), "classNames", ['main-screen']);

      _initializerDefineProperty(_assertThisInitialized(_this), "gameService", _descriptor, _assertThisInitialized(_this));

      _initializerDefineProperty(_assertThisInitialized(_this), "gameScreen", _descriptor2, _assertThisInitialized(_this));

      _initializerDefineProperty(_assertThisInitialized(_this), "boardScreen", _descriptor3, _assertThisInitialized(_this));

      return _this;
    }

    _createClass(_class2, [{
      key: "startGame",
      value: function startGame() {
        var gameService = this.gameService;
        gameService && gameService.startGame();
      }
    }]);

    return _class2;
  }(_component.default), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "gameService", [_service.inject], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "gameScreen", [_dec], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "boardScreen", [_dec2], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _applyDecoratedDescriptor(_class2.prototype, "startGame", [_object.action], Object.getOwnPropertyDescriptor(_class2.prototype, "startGame"), _class2.prototype)), _class2));

  _exports.default = _class;
});
;define("catch-the-mouse/components/maybe-in-element", ["exports", "ember-maybe-in-element/components/maybe-in-element"], function (_exports, _maybeInElement) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function get() {
      return _maybeInElement.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-maybe-in-element/components/maybe-in-element"eaimeta@70e063a35619d71f
});
;define("catch-the-mouse/components/power-select-multiple", ["exports", "ember-power-select/components/power-select-multiple"], function (_exports, _powerSelectMultiple) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function get() {
      return _powerSelectMultiple.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-power-select/components/power-select-multiple"eaimeta@70e063a35619d71f
});
;define("catch-the-mouse/components/power-select-multiple/trigger", ["exports", "ember-power-select/components/power-select-multiple/trigger"], function (_exports, _trigger) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function get() {
      return _trigger.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-power-select/components/power-select-multiple/trigger"eaimeta@70e063a35619d71f
});
;define("catch-the-mouse/components/power-select", ["exports", "ember-power-select/components/power-select"], function (_exports, _powerSelect) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function get() {
      return _powerSelect.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-power-select/components/power-select"eaimeta@70e063a35619d71f
});
;define("catch-the-mouse/components/power-select/before-options", ["exports", "ember-power-select/components/power-select/before-options"], function (_exports, _beforeOptions) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function get() {
      return _beforeOptions.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-power-select/components/power-select/before-options"eaimeta@70e063a35619d71f
});
;define("catch-the-mouse/components/power-select/no-matches-message", ["exports", "ember-power-select/components/power-select/no-matches-message"], function (_exports, _noMatchesMessage) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function get() {
      return _noMatchesMessage.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-power-select/components/power-select/no-matches-message"eaimeta@70e063a35619d71f
});
;define("catch-the-mouse/components/power-select/options", ["exports", "ember-power-select/components/power-select/options"], function (_exports, _options) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function get() {
      return _options.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-power-select/components/power-select/options"eaimeta@70e063a35619d71f
});
;define("catch-the-mouse/components/power-select/placeholder", ["exports", "ember-power-select/components/power-select/placeholder"], function (_exports, _placeholder) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function get() {
      return _placeholder.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-power-select/components/power-select/placeholder"eaimeta@70e063a35619d71f
});
;define("catch-the-mouse/components/power-select/power-select-group", ["exports", "ember-power-select/components/power-select/power-select-group"], function (_exports, _powerSelectGroup) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function get() {
      return _powerSelectGroup.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-power-select/components/power-select/power-select-group"eaimeta@70e063a35619d71f
});
;define("catch-the-mouse/components/power-select/search-message", ["exports", "ember-power-select/components/power-select/search-message"], function (_exports, _searchMessage) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function get() {
      return _searchMessage.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-power-select/components/power-select/search-message"eaimeta@70e063a35619d71f
});
;define("catch-the-mouse/components/power-select/trigger", ["exports", "ember-power-select/components/power-select/trigger"], function (_exports, _trigger) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function get() {
      return _trigger.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-power-select/components/power-select/trigger"eaimeta@70e063a35619d71f
});
;define("catch-the-mouse/controllers/application", ["exports", "@ember/controller"], function (_exports, _controller) {
  'use strict';

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71f0,"@ember/controller"eaimeta@70e063a35619d71f

  var _default = _controller.default.extend({});

  _exports.default = _default;
});
;define("catch-the-mouse/formats", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71feaimeta@70e063a35619d71f

  var _default = {
    time: {
      hhmmss: {
        hour: 'numeric',
        minute: 'numeric',
        second: 'numeric'
      }
    },
    date: {
      hhmmss: {
        hour: 'numeric',
        minute: 'numeric',
        second: 'numeric'
      }
    },
    number: {
      compact: {
        notation: 'compact'
      },
      EUR: {
        style: 'currency',
        currency: 'EUR'
      },
      USD: {
        style: 'currency',
        currency: 'USD'
      }
    }
  };
  _exports.default = _default;
});
;define("catch-the-mouse/helpers/-element", ["exports", "ember-element-helper/helpers/-element"], function (_exports, _element) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function get() {
      return _element.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-element-helper/helpers/-element"eaimeta@70e063a35619d71f
});
;define("catch-the-mouse/helpers/and", ["exports", "ember-truth-helpers/helpers/and"], function (_exports, _and) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "and", {
    enumerable: true,
    get: function get() {
      return _and.and;
    }
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function get() {
      return _and.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-truth-helpers/helpers/and"eaimeta@70e063a35619d71f
});
;define("catch-the-mouse/helpers/append", ["exports", "ember-composable-helpers/helpers/append"], function (_exports, _append) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "append", {
    enumerable: true,
    get: function get() {
      return _append.append;
    }
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function get() {
      return _append.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-composable-helpers/helpers/append"eaimeta@70e063a35619d71f
});
;define("catch-the-mouse/helpers/assign", ["exports", "ember-assign-helper/helpers/assign"], function (_exports, _assign) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "assign", {
    enumerable: true,
    get: function get() {
      return _assign.assign;
    }
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function get() {
      return _assign.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-assign-helper/helpers/assign"eaimeta@70e063a35619d71f
});
;define("catch-the-mouse/helpers/call", ["exports", "ember-composable-helpers/helpers/call"], function (_exports, _call) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "call", {
    enumerable: true,
    get: function get() {
      return _call.call;
    }
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function get() {
      return _call.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-composable-helpers/helpers/call"eaimeta@70e063a35619d71f
});
;define("catch-the-mouse/helpers/cancel-all", ["exports", "ember-concurrency/helpers/cancel-all"], function (_exports, _cancelAll) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function get() {
      return _cancelAll.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-concurrency/helpers/cancel-all"eaimeta@70e063a35619d71f
});
;define("catch-the-mouse/helpers/chunk", ["exports", "ember-composable-helpers/helpers/chunk"], function (_exports, _chunk) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "chunk", {
    enumerable: true,
    get: function get() {
      return _chunk.chunk;
    }
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function get() {
      return _chunk.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-composable-helpers/helpers/chunk"eaimeta@70e063a35619d71f
});
;define("catch-the-mouse/helpers/compact", ["exports", "ember-composable-helpers/helpers/compact"], function (_exports, _compact) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function get() {
      return _compact.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-composable-helpers/helpers/compact"eaimeta@70e063a35619d71f
});
;define("catch-the-mouse/helpers/compute", ["exports", "ember-composable-helpers/helpers/compute"], function (_exports, _compute) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "compute", {
    enumerable: true,
    get: function get() {
      return _compute.compute;
    }
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function get() {
      return _compute.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-composable-helpers/helpers/compute"eaimeta@70e063a35619d71f
});
;define("catch-the-mouse/helpers/contains", ["exports", "ember-composable-helpers/helpers/contains"], function (_exports, _contains) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "contains", {
    enumerable: true,
    get: function get() {
      return _contains.contains;
    }
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function get() {
      return _contains.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-composable-helpers/helpers/contains"eaimeta@70e063a35619d71f
});
;define("catch-the-mouse/helpers/dec", ["exports", "ember-composable-helpers/helpers/dec"], function (_exports, _dec) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "dec", {
    enumerable: true,
    get: function get() {
      return _dec.dec;
    }
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function get() {
      return _dec.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-composable-helpers/helpers/dec"eaimeta@70e063a35619d71f
});
;define("catch-the-mouse/helpers/drop", ["exports", "ember-composable-helpers/helpers/drop"], function (_exports, _drop) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function get() {
      return _drop.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-composable-helpers/helpers/drop"eaimeta@70e063a35619d71f
});
;define("catch-the-mouse/helpers/element", ["exports", "ember-element-helper/helpers/element"], function (_exports, _element) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function get() {
      return _element.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-element-helper/helpers/element"eaimeta@70e063a35619d71f
});
;define("catch-the-mouse/helpers/ember-power-select-is-group", ["exports", "ember-power-select/helpers/ember-power-select-is-group"], function (_exports, _emberPowerSelectIsGroup) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function get() {
      return _emberPowerSelectIsGroup.default;
    }
  });
  Object.defineProperty(_exports, "emberPowerSelectIsGroup", {
    enumerable: true,
    get: function get() {
      return _emberPowerSelectIsGroup.emberPowerSelectIsGroup;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-power-select/helpers/ember-power-select-is-group"eaimeta@70e063a35619d71f
});
;define("catch-the-mouse/helpers/ember-power-select-is-selected", ["exports", "ember-power-select/helpers/ember-power-select-is-selected"], function (_exports, _emberPowerSelectIsSelected) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function get() {
      return _emberPowerSelectIsSelected.default;
    }
  });
  Object.defineProperty(_exports, "emberPowerSelectIsSelected", {
    enumerable: true,
    get: function get() {
      return _emberPowerSelectIsSelected.emberPowerSelectIsSelected;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-power-select/helpers/ember-power-select-is-selected"eaimeta@70e063a35619d71f
});
;define("catch-the-mouse/helpers/ensure-safe-component", ["exports", "@embroider/util"], function (_exports, _util) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function get() {
      return _util.EnsureSafeComponentHelper;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"@embroider/util"eaimeta@70e063a35619d71f
});
;define("catch-the-mouse/helpers/entries", ["exports", "ember-composable-helpers/helpers/entries"], function (_exports, _entries) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function get() {
      return _entries.default;
    }
  });
  Object.defineProperty(_exports, "entries", {
    enumerable: true,
    get: function get() {
      return _entries.entries;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-composable-helpers/helpers/entries"eaimeta@70e063a35619d71f
});
;define("catch-the-mouse/helpers/eq", ["exports", "ember-truth-helpers/helpers/equal"], function (_exports, _equal) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function get() {
      return _equal.default;
    }
  });
  Object.defineProperty(_exports, "equal", {
    enumerable: true,
    get: function get() {
      return _equal.equal;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-truth-helpers/helpers/equal"eaimeta@70e063a35619d71f
});
;define("catch-the-mouse/helpers/filter-by", ["exports", "ember-composable-helpers/helpers/filter-by"], function (_exports, _filterBy) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function get() {
      return _filterBy.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-composable-helpers/helpers/filter-by"eaimeta@70e063a35619d71f
});
;define("catch-the-mouse/helpers/filter", ["exports", "ember-composable-helpers/helpers/filter"], function (_exports, _filter) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function get() {
      return _filter.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-composable-helpers/helpers/filter"eaimeta@70e063a35619d71f
});
;define("catch-the-mouse/helpers/find-by", ["exports", "ember-composable-helpers/helpers/find-by"], function (_exports, _findBy) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function get() {
      return _findBy.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-composable-helpers/helpers/find-by"eaimeta@70e063a35619d71f
});
;define("catch-the-mouse/helpers/flatten", ["exports", "ember-composable-helpers/helpers/flatten"], function (_exports, _flatten) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function get() {
      return _flatten.default;
    }
  });
  Object.defineProperty(_exports, "flatten", {
    enumerable: true,
    get: function get() {
      return _flatten.flatten;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-composable-helpers/helpers/flatten"eaimeta@70e063a35619d71f
});
;define("catch-the-mouse/helpers/from-entries", ["exports", "ember-composable-helpers/helpers/from-entries"], function (_exports, _fromEntries) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function get() {
      return _fromEntries.default;
    }
  });
  Object.defineProperty(_exports, "fromEntries", {
    enumerable: true,
    get: function get() {
      return _fromEntries.fromEntries;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-composable-helpers/helpers/from-entries"eaimeta@70e063a35619d71f
});
;define("catch-the-mouse/helpers/group-by", ["exports", "ember-composable-helpers/helpers/group-by"], function (_exports, _groupBy) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function get() {
      return _groupBy.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-composable-helpers/helpers/group-by"eaimeta@70e063a35619d71f
});
;define("catch-the-mouse/helpers/gt", ["exports", "ember-truth-helpers/helpers/gt"], function (_exports, _gt) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function get() {
      return _gt.default;
    }
  });
  Object.defineProperty(_exports, "gt", {
    enumerable: true,
    get: function get() {
      return _gt.gt;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-truth-helpers/helpers/gt"eaimeta@70e063a35619d71f
});
;define("catch-the-mouse/helpers/gte", ["exports", "ember-truth-helpers/helpers/gte"], function (_exports, _gte) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function get() {
      return _gte.default;
    }
  });
  Object.defineProperty(_exports, "gte", {
    enumerable: true,
    get: function get() {
      return _gte.gte;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-truth-helpers/helpers/gte"eaimeta@70e063a35619d71f
});
;define("catch-the-mouse/helpers/has-next", ["exports", "ember-composable-helpers/helpers/has-next"], function (_exports, _hasNext) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function get() {
      return _hasNext.default;
    }
  });
  Object.defineProperty(_exports, "hasNext", {
    enumerable: true,
    get: function get() {
      return _hasNext.hasNext;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-composable-helpers/helpers/has-next"eaimeta@70e063a35619d71f
});
;define("catch-the-mouse/helpers/has-previous", ["exports", "ember-composable-helpers/helpers/has-previous"], function (_exports, _hasPrevious) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function get() {
      return _hasPrevious.default;
    }
  });
  Object.defineProperty(_exports, "hasPrevious", {
    enumerable: true,
    get: function get() {
      return _hasPrevious.hasPrevious;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-composable-helpers/helpers/has-previous"eaimeta@70e063a35619d71f
});
;define("catch-the-mouse/helpers/inc", ["exports", "ember-composable-helpers/helpers/inc"], function (_exports, _inc) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function get() {
      return _inc.default;
    }
  });
  Object.defineProperty(_exports, "inc", {
    enumerable: true,
    get: function get() {
      return _inc.inc;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-composable-helpers/helpers/inc"eaimeta@70e063a35619d71f
});
;define("catch-the-mouse/helpers/includes", ["exports", "ember-composable-helpers/helpers/includes"], function (_exports, _includes) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function get() {
      return _includes.default;
    }
  });
  Object.defineProperty(_exports, "includes", {
    enumerable: true,
    get: function get() {
      return _includes.includes;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-composable-helpers/helpers/includes"eaimeta@70e063a35619d71f
});
;define("catch-the-mouse/helpers/intersect", ["exports", "ember-composable-helpers/helpers/intersect"], function (_exports, _intersect) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function get() {
      return _intersect.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-composable-helpers/helpers/intersect"eaimeta@70e063a35619d71f
});
;define("catch-the-mouse/helpers/invoke", ["exports", "ember-composable-helpers/helpers/invoke"], function (_exports, _invoke) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function get() {
      return _invoke.default;
    }
  });
  Object.defineProperty(_exports, "invoke", {
    enumerable: true,
    get: function get() {
      return _invoke.invoke;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-composable-helpers/helpers/invoke"eaimeta@70e063a35619d71f
});
;define("catch-the-mouse/helpers/is-array", ["exports", "ember-truth-helpers/helpers/is-array"], function (_exports, _isArray) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function get() {
      return _isArray.default;
    }
  });
  Object.defineProperty(_exports, "isArray", {
    enumerable: true,
    get: function get() {
      return _isArray.isArray;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-truth-helpers/helpers/is-array"eaimeta@70e063a35619d71f
});
;define("catch-the-mouse/helpers/is-empty", ["exports", "ember-truth-helpers/helpers/is-empty"], function (_exports, _isEmpty) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function get() {
      return _isEmpty.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-truth-helpers/helpers/is-empty"eaimeta@70e063a35619d71f
});
;define("catch-the-mouse/helpers/is-equal", ["exports", "ember-truth-helpers/helpers/is-equal"], function (_exports, _isEqual) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function get() {
      return _isEqual.default;
    }
  });
  Object.defineProperty(_exports, "isEqual", {
    enumerable: true,
    get: function get() {
      return _isEqual.isEqual;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-truth-helpers/helpers/is-equal"eaimeta@70e063a35619d71f
});
;define("catch-the-mouse/helpers/join", ["exports", "ember-composable-helpers/helpers/join"], function (_exports, _join) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function get() {
      return _join.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-composable-helpers/helpers/join"eaimeta@70e063a35619d71f
});
;define("catch-the-mouse/helpers/keys", ["exports", "ember-composable-helpers/helpers/keys"], function (_exports, _keys) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function get() {
      return _keys.default;
    }
  });
  Object.defineProperty(_exports, "keys", {
    enumerable: true,
    get: function get() {
      return _keys.keys;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-composable-helpers/helpers/keys"eaimeta@70e063a35619d71f
});
;define("catch-the-mouse/helpers/loc", ["exports", "@ember/component/helper", "@ember/service"], function (_exports, _helper, _service) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71f0,"@ember/component/helper",0,"@ember/service"eaimeta@70e063a35619d71f

  function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

  function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

  function _iterableToArrayLimit(arr, i) { var _i = arr && (typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]); if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

  function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

  var _default = _helper.default.extend({
    langService: (0, _service.inject)(),
    init: function init() {
      this._super.apply(this, arguments);

      var langService = this.langService;
      langService && langService.subscribe(this, 'onLangChange');
    },
    willDestroy: function willDestroy() {
      var langService = this.langService;
      langService && langService.unsubscribe(this, 'onLangChange');
    },
    onLangChange: function onLangChange() {
      var langService = this.langService;
      var isLangSetup = langService && langService.isLangSetup;
      var lang = langService && langService.lang;
      var allTranslations = langService && langService.allTranslations;

      if (isLangSetup && lang && allTranslations && allTranslations.length > 0) {
        this.recompute();
      }
    },
    compute: function compute(_ref) {
      var _ref2 = _slicedToArray(_ref, 1),
          text = _ref2[0];

      var langService = this.langService;
      return langService && langService.loc(text);
    }
  });

  _exports.default = _default;
});
;define("catch-the-mouse/helpers/lt", ["exports", "ember-truth-helpers/helpers/lt"], function (_exports, _lt) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function get() {
      return _lt.default;
    }
  });
  Object.defineProperty(_exports, "lt", {
    enumerable: true,
    get: function get() {
      return _lt.lt;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-truth-helpers/helpers/lt"eaimeta@70e063a35619d71f
});
;define("catch-the-mouse/helpers/lte", ["exports", "ember-truth-helpers/helpers/lte"], function (_exports, _lte) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function get() {
      return _lte.default;
    }
  });
  Object.defineProperty(_exports, "lte", {
    enumerable: true,
    get: function get() {
      return _lte.lte;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-truth-helpers/helpers/lte"eaimeta@70e063a35619d71f
});
;define("catch-the-mouse/helpers/map-by", ["exports", "ember-composable-helpers/helpers/map-by"], function (_exports, _mapBy) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function get() {
      return _mapBy.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-composable-helpers/helpers/map-by"eaimeta@70e063a35619d71f
});
;define("catch-the-mouse/helpers/map", ["exports", "ember-composable-helpers/helpers/map"], function (_exports, _map) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function get() {
      return _map.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-composable-helpers/helpers/map"eaimeta@70e063a35619d71f
});
;define("catch-the-mouse/helpers/next", ["exports", "ember-composable-helpers/helpers/next"], function (_exports, _next) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function get() {
      return _next.default;
    }
  });
  Object.defineProperty(_exports, "next", {
    enumerable: true,
    get: function get() {
      return _next.next;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-composable-helpers/helpers/next"eaimeta@70e063a35619d71f
});
;define("catch-the-mouse/helpers/noop", ["exports", "ember-composable-helpers/helpers/noop"], function (_exports, _noop) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function get() {
      return _noop.default;
    }
  });
  Object.defineProperty(_exports, "noop", {
    enumerable: true,
    get: function get() {
      return _noop.noop;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-composable-helpers/helpers/noop"eaimeta@70e063a35619d71f
});
;define("catch-the-mouse/helpers/not-eq", ["exports", "ember-truth-helpers/helpers/not-equal"], function (_exports, _notEqual) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function get() {
      return _notEqual.default;
    }
  });
  Object.defineProperty(_exports, "notEqualHelper", {
    enumerable: true,
    get: function get() {
      return _notEqual.notEqualHelper;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-truth-helpers/helpers/not-equal"eaimeta@70e063a35619d71f
});
;define("catch-the-mouse/helpers/not", ["exports", "ember-truth-helpers/helpers/not"], function (_exports, _not) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function get() {
      return _not.default;
    }
  });
  Object.defineProperty(_exports, "not", {
    enumerable: true,
    get: function get() {
      return _not.not;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-truth-helpers/helpers/not"eaimeta@70e063a35619d71f
});
;define("catch-the-mouse/helpers/object-at", ["exports", "ember-composable-helpers/helpers/object-at"], function (_exports, _objectAt) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function get() {
      return _objectAt.default;
    }
  });
  Object.defineProperty(_exports, "objectAt", {
    enumerable: true,
    get: function get() {
      return _objectAt.objectAt;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-composable-helpers/helpers/object-at"eaimeta@70e063a35619d71f
});
;define("catch-the-mouse/helpers/optional", ["exports", "ember-composable-helpers/helpers/optional"], function (_exports, _optional) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function get() {
      return _optional.default;
    }
  });
  Object.defineProperty(_exports, "optional", {
    enumerable: true,
    get: function get() {
      return _optional.optional;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-composable-helpers/helpers/optional"eaimeta@70e063a35619d71f
});
;define("catch-the-mouse/helpers/or", ["exports", "ember-truth-helpers/helpers/or"], function (_exports, _or) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function get() {
      return _or.default;
    }
  });
  Object.defineProperty(_exports, "or", {
    enumerable: true,
    get: function get() {
      return _or.or;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-truth-helpers/helpers/or"eaimeta@70e063a35619d71f
});
;define("catch-the-mouse/helpers/perform", ["exports", "ember-concurrency/helpers/perform"], function (_exports, _perform) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function get() {
      return _perform.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-concurrency/helpers/perform"eaimeta@70e063a35619d71f
});
;define("catch-the-mouse/helpers/pick", ["exports", "ember-composable-helpers/helpers/pick"], function (_exports, _pick) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function get() {
      return _pick.default;
    }
  });
  Object.defineProperty(_exports, "pick", {
    enumerable: true,
    get: function get() {
      return _pick.pick;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-composable-helpers/helpers/pick"eaimeta@70e063a35619d71f
});
;define("catch-the-mouse/helpers/pipe-action", ["exports", "ember-composable-helpers/helpers/pipe-action"], function (_exports, _pipeAction) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function get() {
      return _pipeAction.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-composable-helpers/helpers/pipe-action"eaimeta@70e063a35619d71f
});
;define("catch-the-mouse/helpers/pipe", ["exports", "ember-composable-helpers/helpers/pipe"], function (_exports, _pipe) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function get() {
      return _pipe.default;
    }
  });
  Object.defineProperty(_exports, "pipe", {
    enumerable: true,
    get: function get() {
      return _pipe.pipe;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-composable-helpers/helpers/pipe"eaimeta@70e063a35619d71f
});
;define("catch-the-mouse/helpers/previous", ["exports", "ember-composable-helpers/helpers/previous"], function (_exports, _previous) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function get() {
      return _previous.default;
    }
  });
  Object.defineProperty(_exports, "previous", {
    enumerable: true,
    get: function get() {
      return _previous.previous;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-composable-helpers/helpers/previous"eaimeta@70e063a35619d71f
});
;define("catch-the-mouse/helpers/queue", ["exports", "ember-composable-helpers/helpers/queue"], function (_exports, _queue) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function get() {
      return _queue.default;
    }
  });
  Object.defineProperty(_exports, "queue", {
    enumerable: true,
    get: function get() {
      return _queue.queue;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-composable-helpers/helpers/queue"eaimeta@70e063a35619d71f
});
;define("catch-the-mouse/helpers/range", ["exports", "ember-composable-helpers/helpers/range"], function (_exports, _range) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function get() {
      return _range.default;
    }
  });
  Object.defineProperty(_exports, "range", {
    enumerable: true,
    get: function get() {
      return _range.range;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-composable-helpers/helpers/range"eaimeta@70e063a35619d71f
});
;define("catch-the-mouse/helpers/reduce", ["exports", "ember-composable-helpers/helpers/reduce"], function (_exports, _reduce) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function get() {
      return _reduce.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-composable-helpers/helpers/reduce"eaimeta@70e063a35619d71f
});
;define("catch-the-mouse/helpers/reject-by", ["exports", "ember-composable-helpers/helpers/reject-by"], function (_exports, _rejectBy) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function get() {
      return _rejectBy.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-composable-helpers/helpers/reject-by"eaimeta@70e063a35619d71f
});
;define("catch-the-mouse/helpers/repeat", ["exports", "ember-composable-helpers/helpers/repeat"], function (_exports, _repeat) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function get() {
      return _repeat.default;
    }
  });
  Object.defineProperty(_exports, "repeat", {
    enumerable: true,
    get: function get() {
      return _repeat.repeat;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-composable-helpers/helpers/repeat"eaimeta@70e063a35619d71f
});
;define("catch-the-mouse/helpers/reverse", ["exports", "ember-composable-helpers/helpers/reverse"], function (_exports, _reverse) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function get() {
      return _reverse.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-composable-helpers/helpers/reverse"eaimeta@70e063a35619d71f
});
;define("catch-the-mouse/helpers/shuffle", ["exports", "ember-composable-helpers/helpers/shuffle"], function (_exports, _shuffle) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function get() {
      return _shuffle.default;
    }
  });
  Object.defineProperty(_exports, "shuffle", {
    enumerable: true,
    get: function get() {
      return _shuffle.shuffle;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-composable-helpers/helpers/shuffle"eaimeta@70e063a35619d71f
});
;define("catch-the-mouse/helpers/slice", ["exports", "ember-composable-helpers/helpers/slice"], function (_exports, _slice) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function get() {
      return _slice.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-composable-helpers/helpers/slice"eaimeta@70e063a35619d71f
});
;define("catch-the-mouse/helpers/sort-by", ["exports", "ember-composable-helpers/helpers/sort-by"], function (_exports, _sortBy) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function get() {
      return _sortBy.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-composable-helpers/helpers/sort-by"eaimeta@70e063a35619d71f
});
;define("catch-the-mouse/helpers/take", ["exports", "ember-composable-helpers/helpers/take"], function (_exports, _take) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function get() {
      return _take.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-composable-helpers/helpers/take"eaimeta@70e063a35619d71f
});
;define("catch-the-mouse/helpers/task", ["exports", "ember-concurrency/helpers/task"], function (_exports, _task) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function get() {
      return _task.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-concurrency/helpers/task"eaimeta@70e063a35619d71f
});
;define("catch-the-mouse/helpers/toggle-action", ["exports", "ember-composable-helpers/helpers/toggle-action"], function (_exports, _toggleAction) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function get() {
      return _toggleAction.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-composable-helpers/helpers/toggle-action"eaimeta@70e063a35619d71f
});
;define("catch-the-mouse/helpers/toggle", ["exports", "ember-composable-helpers/helpers/toggle"], function (_exports, _toggle) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function get() {
      return _toggle.default;
    }
  });
  Object.defineProperty(_exports, "toggle", {
    enumerable: true,
    get: function get() {
      return _toggle.toggle;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-composable-helpers/helpers/toggle"eaimeta@70e063a35619d71f
});
;define("catch-the-mouse/helpers/union", ["exports", "ember-composable-helpers/helpers/union"], function (_exports, _union) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function get() {
      return _union.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-composable-helpers/helpers/union"eaimeta@70e063a35619d71f
});
;define("catch-the-mouse/helpers/values", ["exports", "ember-composable-helpers/helpers/values"], function (_exports, _values) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function get() {
      return _values.default;
    }
  });
  Object.defineProperty(_exports, "values", {
    enumerable: true,
    get: function get() {
      return _values.values;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-composable-helpers/helpers/values"eaimeta@70e063a35619d71f
});
;define("catch-the-mouse/helpers/without", ["exports", "ember-composable-helpers/helpers/without"], function (_exports, _without) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function get() {
      return _without.default;
    }
  });
  Object.defineProperty(_exports, "without", {
    enumerable: true,
    get: function get() {
      return _without.without;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-composable-helpers/helpers/without"eaimeta@70e063a35619d71f
});
;define("catch-the-mouse/helpers/xor", ["exports", "ember-truth-helpers/helpers/xor"], function (_exports, _xor) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function get() {
      return _xor.default;
    }
  });
  Object.defineProperty(_exports, "xor", {
    enumerable: true,
    get: function get() {
      return _xor.xor;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-truth-helpers/helpers/xor"eaimeta@70e063a35619d71f
});
;define("catch-the-mouse/initializers/container-debug-adapter", ["exports", "ember-resolver/resolvers/classic/container-debug-adapter"], function (_exports, _containerDebugAdapter) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71f0,"ember-resolver/resolvers/classic/container-debug-adapter"eaimeta@70e063a35619d71f

  var _default = {
    name: 'container-debug-adapter',
    initialize: function initialize() {
      var app = arguments[1] || arguments[0];
      app.register('container-debug-adapter:main', _containerDebugAdapter.default);
    }
  };
  _exports.default = _default;
});
;define("catch-the-mouse/modifiers/did-insert", ["exports", "@ember/render-modifiers/modifiers/did-insert"], function (_exports, _didInsert) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function get() {
      return _didInsert.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"@ember/render-modifiers/modifiers/did-insert"eaimeta@70e063a35619d71f
});
;define("catch-the-mouse/modifiers/did-update", ["exports", "@ember/render-modifiers/modifiers/did-update"], function (_exports, _didUpdate) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function get() {
      return _didUpdate.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"@ember/render-modifiers/modifiers/did-update"eaimeta@70e063a35619d71f
});
;define("catch-the-mouse/modifiers/style", ["exports", "ember-style-modifier/modifiers/style"], function (_exports, _style) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function get() {
      return _style.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-style-modifier/modifiers/style"eaimeta@70e063a35619d71f
});
;define("catch-the-mouse/modifiers/will-destroy", ["exports", "@ember/render-modifiers/modifiers/will-destroy"], function (_exports, _willDestroy) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function get() {
      return _willDestroy.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"@ember/render-modifiers/modifiers/will-destroy"eaimeta@70e063a35619d71f
});
;define("catch-the-mouse/resolver", ["exports", "ember-resolver"], function (_exports, _emberResolver) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71f0,"ember-resolver"eaimeta@70e063a35619d71f

  var _default = _emberResolver.default;
  _exports.default = _default;
});
;define("catch-the-mouse/router", ["exports", "@ember/routing/router", "catch-the-mouse/config/environment"], function (_exports, _router, _environment) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71f0,"@ember/routing/router",0,"catch-the-mouse/config/environment"eaimeta@70e063a35619d71f

  var Router = _router.default.extend({
    location: _environment.default.locationType,
    rootURL: _environment.default.rootURL
  });

  Router.map(function () {});
  var _default = Router;
  _exports.default = _default;
});
;function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

define("catch-the-mouse/routes/application", ["exports", "@ember/routing/route", "@ember/service"], function (_exports, _route, _service) {
  'use strict';

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _class, _descriptor;

  0; //eaimeta@70e063a35619d71f0,"@ember/routing/route",0,"@ember/service"eaimeta@70e063a35619d71f

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

  function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

  function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

  function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

  function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

  function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

  function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  var AppRoute = (_class = /*#__PURE__*/function (_Route) {
    _inherits(AppRoute, _Route);

    var _super = _createSuper(AppRoute);

    function AppRoute() {
      var _this;

      _classCallCheck(this, AppRoute);

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      _this = _super.call.apply(_super, [this].concat(args));

      _initializerDefineProperty(_assertThisInitialized(_this), "langService", _descriptor, _assertThisInitialized(_this));

      return _this;
    }

    _createClass(AppRoute, [{
      key: "beforeModel",
      value: function beforeModel() {
        var langService = this.langService;
        langService && langService.setupLang();
      }
    }]);

    return AppRoute;
  }(_route.default), (_descriptor = _applyDecoratedDescriptor(_class.prototype, "langService", [_service.inject], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  })), _class);
  _exports.default = AppRoute;
});
;define("catch-the-mouse/services/-ensure-registered", ["exports", "@embroider/util/services/ensure-registered"], function (_exports, _ensureRegistered) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function get() {
      return _ensureRegistered.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"@embroider/util/services/ensure-registered"eaimeta@70e063a35619d71f
});
;define("catch-the-mouse/services/game-service", ["exports", "ember", "@ember/service", "@ember/object/evented", "@glimmer/tracking"], function (_exports, _ember, _service, _evented, _tracking) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _obj, _init, _init2, _init3, _init4, _init5, _init6, _init7;

  0; //eaimeta@70e063a35619d71f0,"ember",0,"@ember/service",0,"@ember/object/evented",0,"@glimmer/tracking"eaimeta@70e063a35619d71f

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  var IS_POINT_CHANGED = 'is-point-changed';

  var _default = _service.default.extend(_evented.default, (_obj = {
    points: 0,
    time: 30,
    pointState: undefined,
    isPlaying: false,
    gameScreen: false,
    boardScreen: false,
    gates: [{
      left: -5,
      bottom: 37,
      rotate: 299,
      occupied: false
    }, {
      left: 16,
      bottom: 1,
      rotate: 0,
      occupied: false
    }, {
      left: 20,
      bottom: 35,
      rotate: 232,
      occupied: false
    }, {
      left: 23,
      bottom: 82,
      rotate: 0,
      occupied: false
    }, {
      left: 40,
      bottom: 53,
      rotate: 19,
      occupied: false
    }, {
      left: 48,
      bottom: -5,
      rotate: 180,
      occupied: false
    }, {
      left: 58,
      bottom: 36,
      rotate: 12,
      occupied: false
    }, {
      left: 57,
      bottom: 42,
      rotate: 196,
      occupied: false
    }, {
      left: 76,
      bottom: 6,
      rotate: 135,
      occupied: false
    }, {
      left: 80,
      bottom: 55,
      rotate: 45,
      occupied: false
    }],
    onPointChanged: function onPointChanged() {
      this.trigger(IS_POINT_CHANGED);
    },
    subscribe: function subscribe(object, functionName) {
      this.on(IS_POINT_CHANGED, object, functionName);
    },
    unsubscribe: function unsubscribe(object, functionName) {
      this.off(IS_POINT_CHANGED, object, functionName);
    },
    incrementPoints: function incrementPoints() {
      this.points = (this.points ? this.points : 0) + 1;
      this.pointState = 'increased';
    },
    decrementPoints: function decrementPoints() {
      this.points = (this.points > 1 ? this.points : 1) - 1;
      this.pointState = 'decreased';
    },
    resetPoints: function resetPoints() {
      this.points = 0;
    },
    resetTime: function resetTime() {
      this.time = 30;
    },
    handleTimer: function handleTimer() {
      var _this = this;

      setTimeout(function () {
        if (_this.isDestroyed || _this.isDestroying || !_this.gameScreen) {
          return;
        }

        _this.time = _this.time - 1;

        if (_this.time < 1) {
          _this.endGame();
        } else {
          _this.handleTimer();
        }
      }, 1000);
    },
    getFreeGate: function getFreeGate() {
      var gates = this.gates;
      var freeGates = gates && gates.length > 0 && gates.filterBy('occupied', false);
      var freeGateIndex = freeGates && freeGates.length > 0 && Math.floor(Math.random() * freeGates.length);

      if (freeGateIndex && freeGates[freeGateIndex]) {
        freeGates[freeGateIndex].occupied = true;
      }

      return freeGateIndex && freeGates[freeGateIndex];
    },
    unlockGate: function unlockGate(gate) {
      if (gate && gate.occupied) {
        gate.occupied = false;
      }
    },
    startGame: function startGame() {
      this.isPlaying = true;
      this.gameScreen = true;
      this.resetPoints();
      this.resetTime();
      this.handleTimer();
    },
    endGame: function endGame() {
      this.gameScreen = false;
      this.boardScreen = true;
    },
    goHome: function goHome() {
      this.isPlaying = false;
      this.boardScreen = false;
      this.gameScreen = false;
    }
  }, (_applyDecoratedDescriptor(_obj, "points", [_tracking.tracked], (_init = Object.getOwnPropertyDescriptor(_obj, "points"), _init = _init ? _init.value : undefined, {
    enumerable: true,
    configurable: true,
    writable: true,
    initializer: function initializer() {
      return _init;
    }
  }), _obj), _applyDecoratedDescriptor(_obj, "time", [_tracking.tracked], (_init2 = Object.getOwnPropertyDescriptor(_obj, "time"), _init2 = _init2 ? _init2.value : undefined, {
    enumerable: true,
    configurable: true,
    writable: true,
    initializer: function initializer() {
      return _init2;
    }
  }), _obj), _applyDecoratedDescriptor(_obj, "pointState", [_tracking.tracked], (_init3 = Object.getOwnPropertyDescriptor(_obj, "pointState"), _init3 = _init3 ? _init3.value : undefined, {
    enumerable: true,
    configurable: true,
    writable: true,
    initializer: function initializer() {
      return _init3;
    }
  }), _obj), _applyDecoratedDescriptor(_obj, "isPlaying", [_tracking.tracked], (_init4 = Object.getOwnPropertyDescriptor(_obj, "isPlaying"), _init4 = _init4 ? _init4.value : undefined, {
    enumerable: true,
    configurable: true,
    writable: true,
    initializer: function initializer() {
      return _init4;
    }
  }), _obj), _applyDecoratedDescriptor(_obj, "gameScreen", [_tracking.tracked], (_init5 = Object.getOwnPropertyDescriptor(_obj, "gameScreen"), _init5 = _init5 ? _init5.value : undefined, {
    enumerable: true,
    configurable: true,
    writable: true,
    initializer: function initializer() {
      return _init5;
    }
  }), _obj), _applyDecoratedDescriptor(_obj, "boardScreen", [_tracking.tracked], (_init6 = Object.getOwnPropertyDescriptor(_obj, "boardScreen"), _init6 = _init6 ? _init6.value : undefined, {
    enumerable: true,
    configurable: true,
    writable: true,
    initializer: function initializer() {
      return _init6;
    }
  }), _obj), _applyDecoratedDescriptor(_obj, "gates", [_tracking.tracked], (_init7 = Object.getOwnPropertyDescriptor(_obj, "gates"), _init7 = _init7 ? _init7.value : undefined, {
    enumerable: true,
    configurable: true,
    writable: true,
    initializer: function initializer() {
      return _init7;
    }
  }), _obj)), _obj));

  _exports.default = _default;
});
;define("catch-the-mouse/services/lang-service", ["exports", "ember", "@ember/service", "@ember/object/evented", "@ember/utils", "@glimmer/tracking"], function (_exports, _ember, _service, _evented, _utils, _tracking) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _obj, _init, _init2, _init3;

  0; //eaimeta@70e063a35619d71f0,"ember",0,"@ember/service",0,"@ember/object/evented",0,"@ember/utils",0,"@glimmer/tracking",0,"@ember/service"eaimeta@70e063a35619d71f

  function _readOnlyError(name) { throw new TypeError("\"" + name + "\" is read-only"); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  var IS_LANG_CHANGED = 'is-lang-changed';

  var _default = _service.default.extend(_evented.default, (_obj = {
    langs: ['en', 'sk'],
    localStorageService: (0, _service.inject)(),
    lang: 'en',
    isLangSetup: false,
    allTranslations: {},
    onLangChanged: function onLangChanged() {
      this.trigger(IS_LANG_CHANGED);
    },
    subscribe: function subscribe(object, functionName) {
      this.on(IS_LANG_CHANGED, object, functionName);
    },
    unsubscribe: function unsubscribe(object, functionName) {
      this.off(IS_LANG_CHANGED, object, functionName);
    },
    setupLang: function setupLang(lang) {
      var _this = this;

      var localStorageService = this.localStorageService;

      if (!this.isLangSetup) {
        if (!lang) {
          lang = localStorageService && localStorageService.getCachedItem('lang');
        }

        if (!lang) {
          lang = 'en';
        }

        var langs = this.langs;
        var langsCount = langs && langs.length;
        langs && langs.length > 0 && langs.forEach(function (l) {
          var translation = _this.getJSON((location.href.includes('catch-the-mouse') ? '/catch-the-mouse/assets/' : '') + '/lang/strings_' + l + '.json').then(function (t) {
            var allTranslations = _this.allTranslations;

            if ((0, _utils.isEmpty)(allTranslations)) {
              ({}), _readOnlyError("allTranslations");
            }

            allTranslations[l] = t;
            _this.allTranslations = allTranslations;

            if (l === _this.lang) {
              _this.onLangChanged();
            }
          });
        });
        this.isLangSetup = true;
      }

      if (this.lang !== lang) {
        this.lang = lang;
        localStorageService && localStorageService.setCachedItem('lang', lang);
        this.onLangChanged();
      }
    },
    getJSON: function getJSON(url) {
      return new _ember.default.RSVP.Promise(function (resolve, reject) {
        var xhr = new XMLHttpRequest();
        xhr.open('GET', url);

        xhr.onreadystatechange = function (req) {
          var state = req && (req.target || req.currentTarget);

          if (state.readyState === state.DONE) {
            if (state.status === 200) {
              typeof state.response === "string" ? resolve(JSON.parse(state.response.replace(/[\r\n]/g, ''))) : resolve(state.response);
            } else {
              reject(state.status);
            }
          }
        };

        xhr.responseType = 'text';
        xhr.setRequestHeader('Accept', 'application/json');
        xhr.send();
      });
    },
    loc: function loc(text) {
      var lang = this.lang;
      var curTranslations = this.allTranslations;
      var allTranslations = (0, _utils.isEmpty)(curTranslations) ? {} : curTranslations;
      var translation = allTranslations[lang];

      if (!translation && lang !== 'en') {
        translation = allTranslations['en'];
      }

      var transaltedText = translation && translation[text];
      return transaltedText ? transaltedText : '';
    }
  }, (_applyDecoratedDescriptor(_obj, "lang", [_tracking.tracked], (_init = Object.getOwnPropertyDescriptor(_obj, "lang"), _init = _init ? _init.value : undefined, {
    enumerable: true,
    configurable: true,
    writable: true,
    initializer: function initializer() {
      return _init;
    }
  }), _obj), _applyDecoratedDescriptor(_obj, "isLangSetup", [_tracking.tracked], (_init2 = Object.getOwnPropertyDescriptor(_obj, "isLangSetup"), _init2 = _init2 ? _init2.value : undefined, {
    enumerable: true,
    configurable: true,
    writable: true,
    initializer: function initializer() {
      return _init2;
    }
  }), _obj), _applyDecoratedDescriptor(_obj, "allTranslations", [_tracking.tracked], (_init3 = Object.getOwnPropertyDescriptor(_obj, "allTranslations"), _init3 = _init3 ? _init3.value : undefined, {
    enumerable: true,
    configurable: true,
    writable: true,
    initializer: function initializer() {
      return _init3;
    }
  }), _obj)), _obj));

  _exports.default = _default;
});
;define("catch-the-mouse/services/local-storage-service", ["exports", "@ember/service"], function (_exports, _service) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71f0,"@ember/service"eaimeta@70e063a35619d71f

  function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

  var _default = _service.default.extend({
    getCachedItem: function getCachedItem(item) {
      var cachedItem;

      if ((typeof localStorage === "undefined" ? "undefined" : _typeof(localStorage)) !== undefined) {
        var boland = localStorage.getItem('boland');
        var parsedBoland = boland && typeof boland === 'string' ? JSON.parse(boland) : boland;
        cachedItem = parsedBoland && parsedBoland['catch-the-mouse'] && parsedBoland['catch-the-mouse'][item];
      }

      return cachedItem;
    },
    setCachedItem: function setCachedItem(item, value) {
      if ((typeof localStorage === "undefined" ? "undefined" : _typeof(localStorage)) !== undefined) {
        var boland = localStorage.getItem('boland');
        var newBolandRecord = boland && typeof boland === 'string' ? JSON.parse(boland) : boland;

        if (!newBolandRecord || typeof newBolandRecord === 'string') {
          newBolandRecord = {};
        }

        if (newBolandRecord && !newBolandRecord['catch-the-mouse']) {
          newBolandRecord['catch-the-mouse'] = {};
        }

        newBolandRecord['catch-the-mouse'][item] = value;
        localStorage.setItem('boland', JSON.stringify(newBolandRecord));
      }
    }
  });

  _exports.default = _default;
});
;define("catch-the-mouse/services/text-measurer", ["exports", "ember-text-measurer/services/text-measurer"], function (_exports, _textMeasurer) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function get() {
      return _textMeasurer.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-text-measurer/services/text-measurer"eaimeta@70e063a35619d71f
});
;define("catch-the-mouse/templates/application", ["exports", "@ember/template-factory"], function (_exports, _templateFactory) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71f0,"@ember/template-factory"eaimeta@70e063a35619d71f

  var _default = (0, _templateFactory.createTemplateFactory)({
    "id": "hBv3hNmC",
    "block": "[[[10,0],[14,1,\"header\"],[12],[1,\"\\n  \"],[10,1],[14,0,\"title\"],[12],[1,[28,[35,0],[\"_main_title\"],null]],[13],[1,\"\\n  \"],[1,[34,1]],[1,\"\\n\"],[13],[1,\"\\n\"],[10,0],[14,1,\"main\"],[12],[1,\"\\n  \"],[1,[34,2]],[1,\"\\n\"],[13],[1,\"\\n\"],[10,0],[14,1,\"footer\"],[12],[1,\"\\n  \"],[10,1],[14,0,\"title\"],[12],[1,\"© 2021 Boland - \"],[13],[1,\"\\n  \"],[10,3],[14,6,\"mailto:boland.store@gmail.com\"],[12],[1,\"boland.store@gmail.com\"],[13],[1,\"\\n  \"],[10,1],[14,0,\"title\"],[12],[1,\" - \"],[1,[28,[35,0],[\"_all_rights_reserved\"],null]],[13],[1,\"\\n\"],[13],[1,\"\\n\"]],[],false,[\"loc\",\"lang-switch\",\"main-screen\"]]",
    "moduleName": "catch-the-mouse/templates/application.hbs",
    "isStrictMode": false
  });

  _exports.default = _default;
});
;define("catch-the-mouse/templates/components/basic-dropdown-content", ["exports", "ember-basic-dropdown/templates/components/basic-dropdown-content"], function (_exports, _basicDropdownContent) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function get() {
      return _basicDropdownContent.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-basic-dropdown/templates/components/basic-dropdown-content"eaimeta@70e063a35619d71f
});
;define("catch-the-mouse/templates/components/basic-dropdown-optional-tag", ["exports", "ember-basic-dropdown/templates/components/basic-dropdown-optional-tag"], function (_exports, _basicDropdownOptionalTag) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function get() {
      return _basicDropdownOptionalTag.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-basic-dropdown/templates/components/basic-dropdown-optional-tag"eaimeta@70e063a35619d71f
});
;define("catch-the-mouse/templates/components/basic-dropdown-trigger", ["exports", "ember-basic-dropdown/templates/components/basic-dropdown-trigger"], function (_exports, _basicDropdownTrigger) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function get() {
      return _basicDropdownTrigger.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-basic-dropdown/templates/components/basic-dropdown-trigger"eaimeta@70e063a35619d71f
});
;define("catch-the-mouse/templates/components/basic-dropdown", ["exports", "ember-basic-dropdown/templates/components/basic-dropdown"], function (_exports, _basicDropdown) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function get() {
      return _basicDropdown.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-basic-dropdown/templates/components/basic-dropdown"eaimeta@70e063a35619d71f
});
;define("catch-the-mouse/templates/components/board-screen", ["exports", "@ember/template-factory"], function (_exports, _templateFactory) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71f0,"@ember/template-factory"eaimeta@70e063a35619d71f

  var _default = (0, _templateFactory.createTemplateFactory)({
    "id": "xFPBm0eH",
    "block": "[[[41,[30,0,[\"showScore\"]],[[[1,\"  \"],[10,0],[14,0,\"info-panel\"],[12],[1,\"\\n    \"],[11,\"button\"],[24,0,\"base-button floating-button-close\"],[24,4,\"button\"],[4,[38,1],[\"click\",[30,0,[\"showBoard\"]]],null],[12],[1,\"×\"],[13],[1,\"\\n    \"],[10,1],[14,0,\"points-title\"],[12],[1,[28,[35,2],[\"_your_score\"],null]],[1,\":\"],[13],[1,\"\\n    \"],[10,1],[14,0,\"points\"],[12],[1,[30,0,[\"points\"]]],[13],[1,\"\\n    \"],[10,1],[14,0,\"name\"],[12],[8,[39,3],null,[[\"@placeholder\",\"@type\",\"@value\"],[[28,[37,2],[\"_name\"],null],\"text\",[30,0,[\"user\"]]]],null],[13],[1,\"\\n    \"],[10,0],[14,0,\"points-buttons\"],[12],[1,\"\\n      \"],[11,\"button\"],[16,\"disabled\",[28,[37,4],[[30,0,[\"user\"]]],null]],[24,0,\"base-button\"],[24,4,\"button\"],[4,[38,1],[\"click\",[30,0,[\"saveScore\"]]],null],[12],[1,[28,[35,2],[\"_save\"],null]],[13],[1,\"\\n    \"],[13],[1,\"\\n  \"],[13],[1,\"\\n\"]],[]],[[[1,\"  \"],[10,0],[14,0,\"board-panel\"],[12],[1,\"\\n    \"],[11,\"button\"],[24,0,\"base-button floating-button-close\"],[24,4,\"button\"],[4,[38,1],[\"click\",[30,0,[\"goHome\"]]],null],[12],[1,\"×\"],[13],[1,\"\\n    \"],[10,1],[14,0,\"points-title\"],[12],[1,[28,[35,2],[\"_score_board\"],null]],[13],[1,\"\\n    \"],[10,0],[14,0,\"points-records\"],[12],[1,\"\\n\"],[42,[28,[37,6],[[28,[37,6],[[30,0,[\"records\"]]],null]],null],null,[[[1,\"        \"],[10,0],[14,0,\"points-record\"],[12],[10,1],[12],[1,[30,1,[\"user\"]]],[13],[10,1],[12],[1,\":\"],[13],[10,1],[12],[1,[30,1,[\"points\"]]],[13],[13],[1,\"\\n\"]],[1]],null],[1,\"    \"],[13],[1,\"\\n    \"],[10,0],[14,0,\"points-buttons\"],[12],[1,\"\\n      \"],[11,\"button\"],[24,0,\"base-button button-secondary\"],[24,4,\"button\"],[4,[38,1],[\"click\",[30,0,[\"resetCachedPoints\"]]],null],[12],[1,[28,[35,2],[\"_reset\"],null]],[13],[1,\"\\n    \"],[13],[1,\"\\n  \"],[13],[1,\"\\n\"]],[]]]],[\"record\"],false,[\"if\",\"on\",\"loc\",\"input\",\"not\",\"each\",\"-track-array\"]]",
    "moduleName": "catch-the-mouse/templates/components/board-screen.hbs",
    "isStrictMode": false
  });

  _exports.default = _default;
});
;define("catch-the-mouse/templates/components/game-char", ["exports", "@ember/template-factory"], function (_exports, _templateFactory) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71f0,"@ember/template-factory"eaimeta@70e063a35619d71f

  var _default = (0, _templateFactory.createTemplateFactory)({
    "id": "p3hd6KzH",
    "block": "[[[10,0],[15,0,[29,[\"gs-char gs-char-\",[30,0,[\"type\"]],\" gs-char-\",[30,0,[\"name\"]]]]],[12],[1,\"\\n  \"],[11,0],[24,0,\"gs-char-image\"],[4,[38,0],[\"click\",[30,0,[\"handleClick\"]]],null],[12],[13],[1,\"\\n\"],[13],[1,\"\\n\"]],[],false,[\"on\"]]",
    "moduleName": "catch-the-mouse/templates/components/game-char.hbs",
    "isStrictMode": false
  });

  _exports.default = _default;
});
;define("catch-the-mouse/templates/components/game-screen", ["exports", "@ember/template-factory"], function (_exports, _templateFactory) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71f0,"@ember/template-factory"eaimeta@70e063a35619d71f

  var _default = (0, _templateFactory.createTemplateFactory)({
    "id": "DfblBAqY",
    "block": "[[[10,0],[14,0,\"info-panel\"],[12],[1,\"\\n  \"],[10,1],[15,0,[29,[\"points \",[30,0,[\"pointsClass\"]]]]],[12],[1,[28,[35,0],[\"_points\"],null]],[1,\" : \"],[1,[30,0,[\"points\"]]],[13],[1,\" | \"],[10,1],[15,0,[29,[\"points-timer \",[30,0,[\"pointsTimeClass\"]]]]],[12],[1,[28,[35,0],[\"_time\"],null]],[1,\" : \"],[1,[30,0,[\"time\"]]],[1,\"s\"],[13],[1,\"\\n\"],[13],[1,\"\\n\"],[10,0],[14,0,\"gs-cheese\"],[12],[13],[1,\"\\n\"],[1,[28,[35,1],null,[[\"name\"],[\"cat-1\"]]]],[1,\"\\n\"],[1,[28,[35,1],null,[[\"name\"],[\"cat-2\"]]]],[1,\"\\n\"],[1,[28,[35,1],null,[[\"name\"],[\"cat-3\"]]]],[1,\"\\n\"],[1,[28,[35,1],null,[[\"name\"],[\"mouse-1\"]]]],[1,\"\\n\"],[1,[28,[35,1],null,[[\"name\"],[\"mouse-2\"]]]],[1,\"\\n\"],[1,[28,[35,1],null,[[\"name\"],[\"mouse-3\"]]]],[1,\"\\n\"],[10,0],[14,0,\"gs-cheese-base\"],[12],[13],[1,\"\\n\"],[11,\"button\"],[24,0,\"base-button floating-button-close\"],[24,4,\"button\"],[4,[38,2],[\"click\",[30,0,[\"endGame\"]]],null],[12],[1,\"×\"],[13],[1,\"\\n\"]],[],false,[\"loc\",\"game-char\",\"on\"]]",
    "moduleName": "catch-the-mouse/templates/components/game-screen.hbs",
    "isStrictMode": false
  });

  _exports.default = _default;
});
;define("catch-the-mouse/templates/components/lang-switch", ["exports", "@ember/template-factory"], function (_exports, _templateFactory) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71f0,"@ember/template-factory"eaimeta@70e063a35619d71f

  var _default = (0, _templateFactory.createTemplateFactory)({
    "id": "KMJr2/gz",
    "block": "[[[10,0],[15,0,[30,0,[\"classNames\"]]],[12],[1,\"\\n  \"],[8,[39,0],null,[[\"@selected\",\"@options\",\"@onChange\",\"@renderInPlace\"],[[30,0,[\"lang\"]],[30,0,[\"langs\"]],[30,0,[\"switchLang\"]],true]],[[\"default\"],[[[[1,\"\\n    \"],[1,[30,1]],[1,\"\\n  \"]],[1]]]]],[1,\"\\n\"],[13],[1,\"\\n\"]],[\"item\"],false,[\"power-select\"]]",
    "moduleName": "catch-the-mouse/templates/components/lang-switch.hbs",
    "isStrictMode": false
  });

  _exports.default = _default;
});
;define("catch-the-mouse/templates/components/main-screen", ["exports", "@ember/template-factory"], function (_exports, _templateFactory) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71f0,"@ember/template-factory"eaimeta@70e063a35619d71f

  var _default = (0, _templateFactory.createTemplateFactory)({
    "id": "JZRBMSfR",
    "block": "[[[10,0],[15,0,[30,0,[\"classNames\"]]],[12],[1,\"\\n\"],[41,[30,0,[\"gameScreen\"]],[[[1,\"    \"],[1,[34,1]],[1,\"\\n\"]],[]],[[[41,[30,0,[\"boardScreen\"]],[[[1,\"    \"],[1,[34,2]],[1,\"\\n\"]],[]],[[[1,\"    \"],[11,\"button\"],[24,0,\"base-button\"],[24,4,\"button\"],[4,[38,3],[\"click\",[30,0,[\"startGame\"]]],null],[12],[1,[28,[35,4],[\"_start_game\"],null]],[13],[1,\"\\n  \"]],[]]]],[]]],[13],[1,\"\\n\"]],[],false,[\"if\",\"game-screen\",\"board-screen\",\"on\",\"loc\"]]",
    "moduleName": "catch-the-mouse/templates/components/main-screen.hbs",
    "isStrictMode": false
  });

  _exports.default = _default;
});
;define("catch-the-mouse/utils/calculate-position", ["exports", "ember-basic-dropdown/utils/calculate-position"], function (_exports, _calculatePosition) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function get() {
      return _calculatePosition.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-basic-dropdown/utils/calculate-position"eaimeta@70e063a35619d71f
});
;

;define('catch-the-mouse/config/environment', [], function() {
  var prefix = 'catch-the-mouse';
try {
  var metaName = prefix + '/config/environment';
  var rawConfig = document.querySelector('meta[name="' + metaName + '"]').getAttribute('content');
  var config = JSON.parse(decodeURIComponent(rawConfig));

  var exports = { 'default': config };

  Object.defineProperty(exports, '__esModule', { value: true });

  return exports;
}
catch(err) {
  throw new Error('Could not read config from meta tag with name "' + metaName + '".');
}

});

;
          if (!runningTests) {
            require("catch-the-mouse/app")["default"].create({});
          }
        
