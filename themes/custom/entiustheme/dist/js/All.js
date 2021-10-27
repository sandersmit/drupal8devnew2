"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

(function e(t, n, r) {
  function s(o, u) {
    if (!n[o]) {
      if (!t[o]) {
        var a = typeof require == "function" && require;
        if (!u && a) return a(o, !0);
        if (i) return i(o, !0);
        var f = new Error("Cannot find module '" + o + "'");
        throw f.code = "MODULE_NOT_FOUND", f;
      }

      var l = n[o] = {
        exports: {}
      };
      t[o][0].call(l.exports, function (e) {
        var n = t[o][1][e];
        return s(n ? n : e);
      }, l, l.exports, e, t, n, r);
    }

    return n[o].exports;
  }

  var i = typeof require == "function" && require;

  for (var o = 0; o < r.length; o++) {
    s(r[o]);
  }

  return s;
})({
  1: [function (_dereq_, module, exports) {
    (function (global) {
      "use strict";

      _dereq_(327);

      _dereq_(328);

      _dereq_(2);

      if (global._babelPolyfill) {
        throw new Error("only one instance of babel-polyfill is allowed");
      }

      global._babelPolyfill = true;
      var DEFINE_PROPERTY = "defineProperty";

      function define(O, key, value) {
        O[key] || Object[DEFINE_PROPERTY](O, key, {
          writable: true,
          configurable: true,
          value: value
        });
      }

      define(String.prototype, "padLeft", "".padStart);
      define(String.prototype, "padRight", "".padEnd);
      "pop,reverse,shift,keys,values,entries,indexOf,every,some,forEach,map,filter,find,findIndex,includes,join,slice,concat,push,splice,unshift,sort,lastIndexOf,reduce,reduceRight,copyWithin,fill".split(",").forEach(function (key) {
        [][key] && define(Array, key, Function.call.bind([][key]));
      });
    }).call(this, typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {});
  }, {
    "2": 2,
    "327": 327,
    "328": 328
  }],
  2: [function (_dereq_, module, exports) {
    _dereq_(130);

    module.exports = _dereq_(23).RegExp.escape;
  }, {
    "130": 130,
    "23": 23
  }],
  3: [function (_dereq_, module, exports) {
    module.exports = function (it) {
      if (typeof it != 'function') throw TypeError(it + ' is not a function!');
      return it;
    };
  }, {}],
  4: [function (_dereq_, module, exports) {
    var cof = _dereq_(18);

    module.exports = function (it, msg) {
      if (typeof it != 'number' && cof(it) != 'Number') throw TypeError(msg);
      return +it;
    };
  }, {
    "18": 18
  }],
  5: [function (_dereq_, module, exports) {
    // 22.1.3.31 Array.prototype[@@unscopables]
    var UNSCOPABLES = _dereq_(128)('unscopables');

    var ArrayProto = Array.prototype;
    if (ArrayProto[UNSCOPABLES] == undefined) _dereq_(42)(ArrayProto, UNSCOPABLES, {});

    module.exports = function (key) {
      ArrayProto[UNSCOPABLES][key] = true;
    };
  }, {
    "128": 128,
    "42": 42
  }],
  6: [function (_dereq_, module, exports) {
    module.exports = function (it, Constructor, name, forbiddenField) {
      if (!(it instanceof Constructor) || forbiddenField !== undefined && forbiddenField in it) {
        throw TypeError(name + ': incorrect invocation!');
      }

      return it;
    };
  }, {}],
  7: [function (_dereq_, module, exports) {
    var isObject = _dereq_(51);

    module.exports = function (it) {
      if (!isObject(it)) throw TypeError(it + ' is not an object!');
      return it;
    };
  }, {
    "51": 51
  }],
  8: [function (_dereq_, module, exports) {
    // 22.1.3.3 Array.prototype.copyWithin(target, start, end = this.length)
    'use strict';

    var toObject = _dereq_(119);

    var toAbsoluteIndex = _dereq_(114);

    var toLength = _dereq_(118);

    module.exports = [].copyWithin || function copyWithin(target
    /* = 0 */
    , start
    /* = 0, end = @length */
    ) {
      var O = toObject(this);
      var len = toLength(O.length);
      var to = toAbsoluteIndex(target, len);
      var from = toAbsoluteIndex(start, len);
      var end = arguments.length > 2 ? arguments[2] : undefined;
      var count = Math.min((end === undefined ? len : toAbsoluteIndex(end, len)) - from, len - to);
      var inc = 1;

      if (from < to && to < from + count) {
        inc = -1;
        from += count - 1;
        to += count - 1;
      }

      while (count-- > 0) {
        if (from in O) O[to] = O[from];else delete O[to];
        to += inc;
        from += inc;
      }

      return O;
    };
  }, {
    "114": 114,
    "118": 118,
    "119": 119
  }],
  9: [function (_dereq_, module, exports) {
    // 22.1.3.6 Array.prototype.fill(value, start = 0, end = this.length)
    'use strict';

    var toObject = _dereq_(119);

    var toAbsoluteIndex = _dereq_(114);

    var toLength = _dereq_(118);

    module.exports = function fill(value
    /* , start = 0, end = @length */
    ) {
      var O = toObject(this);
      var length = toLength(O.length);
      var aLen = arguments.length;
      var index = toAbsoluteIndex(aLen > 1 ? arguments[1] : undefined, length);
      var end = aLen > 2 ? arguments[2] : undefined;
      var endPos = end === undefined ? length : toAbsoluteIndex(end, length);

      while (endPos > index) {
        O[index++] = value;
      }

      return O;
    };
  }, {
    "114": 114,
    "118": 118,
    "119": 119
  }],
  10: [function (_dereq_, module, exports) {
    var forOf = _dereq_(39);

    module.exports = function (iter, ITERATOR) {
      var result = [];
      forOf(iter, false, result.push, result, ITERATOR);
      return result;
    };
  }, {
    "39": 39
  }],
  11: [function (_dereq_, module, exports) {
    // false -> Array#indexOf
    // true  -> Array#includes
    var toIObject = _dereq_(117);

    var toLength = _dereq_(118);

    var toAbsoluteIndex = _dereq_(114);

    module.exports = function (IS_INCLUDES) {
      return function ($this, el, fromIndex) {
        var O = toIObject($this);
        var length = toLength(O.length);
        var index = toAbsoluteIndex(fromIndex, length);
        var value; // Array#includes uses SameValueZero equality algorithm
        // eslint-disable-next-line no-self-compare

        if (IS_INCLUDES && el != el) while (length > index) {
          value = O[index++]; // eslint-disable-next-line no-self-compare

          if (value != value) return true; // Array#indexOf ignores holes, Array#includes - not
        } else for (; length > index; index++) {
          if (IS_INCLUDES || index in O) {
            if (O[index] === el) return IS_INCLUDES || index || 0;
          }
        }
        return !IS_INCLUDES && -1;
      };
    };
  }, {
    "114": 114,
    "117": 117,
    "118": 118
  }],
  12: [function (_dereq_, module, exports) {
    // 0 -> Array#forEach
    // 1 -> Array#map
    // 2 -> Array#filter
    // 3 -> Array#some
    // 4 -> Array#every
    // 5 -> Array#find
    // 6 -> Array#findIndex
    var ctx = _dereq_(25);

    var IObject = _dereq_(47);

    var toObject = _dereq_(119);

    var toLength = _dereq_(118);

    var asc = _dereq_(15);

    module.exports = function (TYPE, $create) {
      var IS_MAP = TYPE == 1;
      var IS_FILTER = TYPE == 2;
      var IS_SOME = TYPE == 3;
      var IS_EVERY = TYPE == 4;
      var IS_FIND_INDEX = TYPE == 6;
      var NO_HOLES = TYPE == 5 || IS_FIND_INDEX;
      var create = $create || asc;
      return function ($this, callbackfn, that) {
        var O = toObject($this);
        var self = IObject(O);
        var f = ctx(callbackfn, that, 3);
        var length = toLength(self.length);
        var index = 0;
        var result = IS_MAP ? create($this, length) : IS_FILTER ? create($this, 0) : undefined;
        var val, res;

        for (; length > index; index++) {
          if (NO_HOLES || index in self) {
            val = self[index];
            res = f(val, index, O);

            if (TYPE) {
              if (IS_MAP) result[index] = res; // map
              else if (res) switch (TYPE) {
                case 3:
                  return true;
                // some

                case 5:
                  return val;
                // find

                case 6:
                  return index;
                // findIndex

                case 2:
                  result.push(val);
                // filter
              } else if (IS_EVERY) return false; // every
            }
          }
        }

        return IS_FIND_INDEX ? -1 : IS_SOME || IS_EVERY ? IS_EVERY : result;
      };
    };
  }, {
    "118": 118,
    "119": 119,
    "15": 15,
    "25": 25,
    "47": 47
  }],
  13: [function (_dereq_, module, exports) {
    var aFunction = _dereq_(3);

    var toObject = _dereq_(119);

    var IObject = _dereq_(47);

    var toLength = _dereq_(118);

    module.exports = function (that, callbackfn, aLen, memo, isRight) {
      aFunction(callbackfn);
      var O = toObject(that);
      var self = IObject(O);
      var length = toLength(O.length);
      var index = isRight ? length - 1 : 0;
      var i = isRight ? -1 : 1;
      if (aLen < 2) for (;;) {
        if (index in self) {
          memo = self[index];
          index += i;
          break;
        }

        index += i;

        if (isRight ? index < 0 : length <= index) {
          throw TypeError('Reduce of empty array with no initial value');
        }
      }

      for (; isRight ? index >= 0 : length > index; index += i) {
        if (index in self) {
          memo = callbackfn(memo, self[index], index, O);
        }
      }

      return memo;
    };
  }, {
    "118": 118,
    "119": 119,
    "3": 3,
    "47": 47
  }],
  14: [function (_dereq_, module, exports) {
    var isObject = _dereq_(51);

    var isArray = _dereq_(49);

    var SPECIES = _dereq_(128)('species');

    module.exports = function (original) {
      var C;

      if (isArray(original)) {
        C = original.constructor; // cross-realm fallback

        if (typeof C == 'function' && (C === Array || isArray(C.prototype))) C = undefined;

        if (isObject(C)) {
          C = C[SPECIES];
          if (C === null) C = undefined;
        }
      }

      return C === undefined ? Array : C;
    };
  }, {
    "128": 128,
    "49": 49,
    "51": 51
  }],
  15: [function (_dereq_, module, exports) {
    // 9.4.2.3 ArraySpeciesCreate(originalArray, length)
    var speciesConstructor = _dereq_(14);

    module.exports = function (original, length) {
      return new (speciesConstructor(original))(length);
    };
  }, {
    "14": 14
  }],
  16: [function (_dereq_, module, exports) {
    'use strict';

    var aFunction = _dereq_(3);

    var isObject = _dereq_(51);

    var invoke = _dereq_(46);

    var arraySlice = [].slice;
    var factories = {};

    var construct = function construct(F, len, args) {
      if (!(len in factories)) {
        for (var n = [], i = 0; i < len; i++) {
          n[i] = 'a[' + i + ']';
        } // eslint-disable-next-line no-new-func


        factories[len] = Function('F,a', 'return new F(' + n.join(',') + ')');
      }

      return factories[len](F, args);
    };

    module.exports = Function.bind || function bind(that
    /* , ...args */
    ) {
      var fn = aFunction(this);
      var partArgs = arraySlice.call(arguments, 1);

      var bound = function bound() {
        var args = partArgs.concat(arraySlice.call(arguments));
        return this instanceof bound ? construct(fn, args.length, args) : invoke(fn, args, that);
      };

      if (isObject(fn.prototype)) bound.prototype = fn.prototype;
      return bound;
    };
  }, {
    "3": 3,
    "46": 46,
    "51": 51
  }],
  17: [function (_dereq_, module, exports) {
    // getting tag from 19.1.3.6 Object.prototype.toString()
    var cof = _dereq_(18);

    var TAG = _dereq_(128)('toStringTag'); // ES3 wrong here


    var ARG = cof(function () {
      return arguments;
    }()) == 'Arguments'; // fallback for IE11 Script Access Denied error

    var tryGet = function tryGet(it, key) {
      try {
        return it[key];
      } catch (e) {
        /* empty */
      }
    };

    module.exports = function (it) {
      var O, T, B;
      return it === undefined ? 'Undefined' : it === null ? 'Null' // @@toStringTag case
      : typeof (T = tryGet(O = Object(it), TAG)) == 'string' ? T // builtinTag case
      : ARG ? cof(O) // ES3 arguments fallback
      : (B = cof(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : B;
    };
  }, {
    "128": 128,
    "18": 18
  }],
  18: [function (_dereq_, module, exports) {
    var toString = {}.toString;

    module.exports = function (it) {
      return toString.call(it).slice(8, -1);
    };
  }, {}],
  19: [function (_dereq_, module, exports) {
    'use strict';

    var dP = _dereq_(72).f;

    var create = _dereq_(71);

    var redefineAll = _dereq_(93);

    var ctx = _dereq_(25);

    var anInstance = _dereq_(6);

    var forOf = _dereq_(39);

    var $iterDefine = _dereq_(55);

    var step = _dereq_(57);

    var setSpecies = _dereq_(100);

    var DESCRIPTORS = _dereq_(29);

    var fastKey = _dereq_(66).fastKey;

    var validate = _dereq_(125);

    var SIZE = DESCRIPTORS ? '_s' : 'size';

    var getEntry = function getEntry(that, key) {
      // fast case
      var index = fastKey(key);
      var entry;
      if (index !== 'F') return that._i[index]; // frozen object case

      for (entry = that._f; entry; entry = entry.n) {
        if (entry.k == key) return entry;
      }
    };

    module.exports = {
      getConstructor: function getConstructor(wrapper, NAME, IS_MAP, ADDER) {
        var C = wrapper(function (that, iterable) {
          anInstance(that, C, NAME, '_i');
          that._t = NAME; // collection type

          that._i = create(null); // index

          that._f = undefined; // first entry

          that._l = undefined; // last entry

          that[SIZE] = 0; // size

          if (iterable != undefined) forOf(iterable, IS_MAP, that[ADDER], that);
        });
        redefineAll(C.prototype, {
          // 23.1.3.1 Map.prototype.clear()
          // 23.2.3.2 Set.prototype.clear()
          clear: function clear() {
            for (var that = validate(this, NAME), data = that._i, entry = that._f; entry; entry = entry.n) {
              entry.r = true;
              if (entry.p) entry.p = entry.p.n = undefined;
              delete data[entry.i];
            }

            that._f = that._l = undefined;
            that[SIZE] = 0;
          },
          // 23.1.3.3 Map.prototype.delete(key)
          // 23.2.3.4 Set.prototype.delete(value)
          'delete': function _delete(key) {
            var that = validate(this, NAME);
            var entry = getEntry(that, key);

            if (entry) {
              var next = entry.n;
              var prev = entry.p;
              delete that._i[entry.i];
              entry.r = true;
              if (prev) prev.n = next;
              if (next) next.p = prev;
              if (that._f == entry) that._f = next;
              if (that._l == entry) that._l = prev;
              that[SIZE]--;
            }

            return !!entry;
          },
          // 23.2.3.6 Set.prototype.forEach(callbackfn, thisArg = undefined)
          // 23.1.3.5 Map.prototype.forEach(callbackfn, thisArg = undefined)
          forEach: function forEach(callbackfn
          /* , that = undefined */
          ) {
            validate(this, NAME);
            var f = ctx(callbackfn, arguments.length > 1 ? arguments[1] : undefined, 3);
            var entry;

            while (entry = entry ? entry.n : this._f) {
              f(entry.v, entry.k, this); // revert to the last existing entry

              while (entry && entry.r) {
                entry = entry.p;
              }
            }
          },
          // 23.1.3.7 Map.prototype.has(key)
          // 23.2.3.7 Set.prototype.has(value)
          has: function has(key) {
            return !!getEntry(validate(this, NAME), key);
          }
        });
        if (DESCRIPTORS) dP(C.prototype, 'size', {
          get: function get() {
            return validate(this, NAME)[SIZE];
          }
        });
        return C;
      },
      def: function def(that, key, value) {
        var entry = getEntry(that, key);
        var prev, index; // change existing entry

        if (entry) {
          entry.v = value; // create new entry
        } else {
          that._l = entry = {
            i: index = fastKey(key, true),
            // <- index
            k: key,
            // <- key
            v: value,
            // <- value
            p: prev = that._l,
            // <- previous entry
            n: undefined,
            // <- next entry
            r: false // <- removed

          };
          if (!that._f) that._f = entry;
          if (prev) prev.n = entry;
          that[SIZE]++; // add to index

          if (index !== 'F') that._i[index] = entry;
        }

        return that;
      },
      getEntry: getEntry,
      setStrong: function setStrong(C, NAME, IS_MAP) {
        // add .keys, .values, .entries, [@@iterator]
        // 23.1.3.4, 23.1.3.8, 23.1.3.11, 23.1.3.12, 23.2.3.5, 23.2.3.8, 23.2.3.10, 23.2.3.11
        $iterDefine(C, NAME, function (iterated, kind) {
          this._t = validate(iterated, NAME); // target

          this._k = kind; // kind

          this._l = undefined; // previous
        }, function () {
          var that = this;
          var kind = that._k;
          var entry = that._l; // revert to the last existing entry

          while (entry && entry.r) {
            entry = entry.p;
          } // get next entry


          if (!that._t || !(that._l = entry = entry ? entry.n : that._t._f)) {
            // or finish the iteration
            that._t = undefined;
            return step(1);
          } // return step by kind


          if (kind == 'keys') return step(0, entry.k);
          if (kind == 'values') return step(0, entry.v);
          return step(0, [entry.k, entry.v]);
        }, IS_MAP ? 'entries' : 'values', !IS_MAP, true); // add [@@species], 23.1.2.2, 23.2.2.2

        setSpecies(NAME);
      }
    };
  }, {
    "100": 100,
    "125": 125,
    "25": 25,
    "29": 29,
    "39": 39,
    "55": 55,
    "57": 57,
    "6": 6,
    "66": 66,
    "71": 71,
    "72": 72,
    "93": 93
  }],
  20: [function (_dereq_, module, exports) {
    // https://github.com/DavidBruant/Map-Set.prototype.toJSON
    var classof = _dereq_(17);

    var from = _dereq_(10);

    module.exports = function (NAME) {
      return function toJSON() {
        if (classof(this) != NAME) throw TypeError(NAME + "#toJSON isn't generic");
        return from(this);
      };
    };
  }, {
    "10": 10,
    "17": 17
  }],
  21: [function (_dereq_, module, exports) {
    'use strict';

    var redefineAll = _dereq_(93);

    var getWeak = _dereq_(66).getWeak;

    var anObject = _dereq_(7);

    var isObject = _dereq_(51);

    var anInstance = _dereq_(6);

    var forOf = _dereq_(39);

    var createArrayMethod = _dereq_(12);

    var $has = _dereq_(41);

    var validate = _dereq_(125);

    var arrayFind = createArrayMethod(5);
    var arrayFindIndex = createArrayMethod(6);
    var id = 0; // fallback for uncaught frozen keys

    var uncaughtFrozenStore = function uncaughtFrozenStore(that) {
      return that._l || (that._l = new UncaughtFrozenStore());
    };

    var UncaughtFrozenStore = function UncaughtFrozenStore() {
      this.a = [];
    };

    var findUncaughtFrozen = function findUncaughtFrozen(store, key) {
      return arrayFind(store.a, function (it) {
        return it[0] === key;
      });
    };

    UncaughtFrozenStore.prototype = {
      get: function get(key) {
        var entry = findUncaughtFrozen(this, key);
        if (entry) return entry[1];
      },
      has: function has(key) {
        return !!findUncaughtFrozen(this, key);
      },
      set: function set(key, value) {
        var entry = findUncaughtFrozen(this, key);
        if (entry) entry[1] = value;else this.a.push([key, value]);
      },
      'delete': function _delete(key) {
        var index = arrayFindIndex(this.a, function (it) {
          return it[0] === key;
        });
        if (~index) this.a.splice(index, 1);
        return !!~index;
      }
    };
    module.exports = {
      getConstructor: function getConstructor(wrapper, NAME, IS_MAP, ADDER) {
        var C = wrapper(function (that, iterable) {
          anInstance(that, C, NAME, '_i');
          that._t = NAME; // collection type

          that._i = id++; // collection id

          that._l = undefined; // leak store for uncaught frozen objects

          if (iterable != undefined) forOf(iterable, IS_MAP, that[ADDER], that);
        });
        redefineAll(C.prototype, {
          // 23.3.3.2 WeakMap.prototype.delete(key)
          // 23.4.3.3 WeakSet.prototype.delete(value)
          'delete': function _delete(key) {
            if (!isObject(key)) return false;
            var data = getWeak(key);
            if (data === true) return uncaughtFrozenStore(validate(this, NAME))['delete'](key);
            return data && $has(data, this._i) && delete data[this._i];
          },
          // 23.3.3.4 WeakMap.prototype.has(key)
          // 23.4.3.4 WeakSet.prototype.has(value)
          has: function has(key) {
            if (!isObject(key)) return false;
            var data = getWeak(key);
            if (data === true) return uncaughtFrozenStore(validate(this, NAME)).has(key);
            return data && $has(data, this._i);
          }
        });
        return C;
      },
      def: function def(that, key, value) {
        var data = getWeak(anObject(key), true);
        if (data === true) uncaughtFrozenStore(that).set(key, value);else data[that._i] = value;
        return that;
      },
      ufstore: uncaughtFrozenStore
    };
  }, {
    "12": 12,
    "125": 125,
    "39": 39,
    "41": 41,
    "51": 51,
    "6": 6,
    "66": 66,
    "7": 7,
    "93": 93
  }],
  22: [function (_dereq_, module, exports) {
    'use strict';

    var global = _dereq_(40);

    var $export = _dereq_(33);

    var redefine = _dereq_(94);

    var redefineAll = _dereq_(93);

    var meta = _dereq_(66);

    var forOf = _dereq_(39);

    var anInstance = _dereq_(6);

    var isObject = _dereq_(51);

    var fails = _dereq_(35);

    var $iterDetect = _dereq_(56);

    var setToStringTag = _dereq_(101);

    var inheritIfRequired = _dereq_(45);

    module.exports = function (NAME, wrapper, methods, common, IS_MAP, IS_WEAK) {
      var Base = global[NAME];
      var C = Base;
      var ADDER = IS_MAP ? 'set' : 'add';
      var proto = C && C.prototype;
      var O = {};

      var fixMethod = function fixMethod(KEY) {
        var fn = proto[KEY];
        redefine(proto, KEY, KEY == 'delete' ? function (a) {
          return IS_WEAK && !isObject(a) ? false : fn.call(this, a === 0 ? 0 : a);
        } : KEY == 'has' ? function has(a) {
          return IS_WEAK && !isObject(a) ? false : fn.call(this, a === 0 ? 0 : a);
        } : KEY == 'get' ? function get(a) {
          return IS_WEAK && !isObject(a) ? undefined : fn.call(this, a === 0 ? 0 : a);
        } : KEY == 'add' ? function add(a) {
          fn.call(this, a === 0 ? 0 : a);
          return this;
        } : function set(a, b) {
          fn.call(this, a === 0 ? 0 : a, b);
          return this;
        });
      };

      if (typeof C != 'function' || !(IS_WEAK || proto.forEach && !fails(function () {
        new C().entries().next();
      }))) {
        // create collection constructor
        C = common.getConstructor(wrapper, NAME, IS_MAP, ADDER);
        redefineAll(C.prototype, methods);
        meta.NEED = true;
      } else {
        var instance = new C(); // early implementations not supports chaining

        var HASNT_CHAINING = instance[ADDER](IS_WEAK ? {} : -0, 1) != instance; // V8 ~  Chromium 40- weak-collections throws on primitives, but should return false

        var THROWS_ON_PRIMITIVES = fails(function () {
          instance.has(1);
        }); // most early implementations doesn't supports iterables, most modern - not close it correctly

        var ACCEPT_ITERABLES = $iterDetect(function (iter) {
          new C(iter);
        }); // eslint-disable-line no-new
        // for early implementations -0 and +0 not the same

        var BUGGY_ZERO = !IS_WEAK && fails(function () {
          // V8 ~ Chromium 42- fails only with 5+ elements
          var $instance = new C();
          var index = 5;

          while (index--) {
            $instance[ADDER](index, index);
          }

          return !$instance.has(-0);
        });

        if (!ACCEPT_ITERABLES) {
          C = wrapper(function (target, iterable) {
            anInstance(target, C, NAME);
            var that = inheritIfRequired(new Base(), target, C);
            if (iterable != undefined) forOf(iterable, IS_MAP, that[ADDER], that);
            return that;
          });
          C.prototype = proto;
          proto.constructor = C;
        }

        if (THROWS_ON_PRIMITIVES || BUGGY_ZERO) {
          fixMethod('delete');
          fixMethod('has');
          IS_MAP && fixMethod('get');
        }

        if (BUGGY_ZERO || HASNT_CHAINING) fixMethod(ADDER); // weak collections should not contains .clear method

        if (IS_WEAK && proto.clear) delete proto.clear;
      }

      setToStringTag(C, NAME);
      O[NAME] = C;
      $export($export.G + $export.W + $export.F * (C != Base), O);
      if (!IS_WEAK) common.setStrong(C, NAME, IS_MAP);
      return C;
    };
  }, {
    "101": 101,
    "33": 33,
    "35": 35,
    "39": 39,
    "40": 40,
    "45": 45,
    "51": 51,
    "56": 56,
    "6": 6,
    "66": 66,
    "93": 93,
    "94": 94
  }],
  23: [function (_dereq_, module, exports) {
    var core = module.exports = {
      version: '2.5.0'
    };
    if (typeof __e == 'number') __e = core; // eslint-disable-line no-undef
  }, {}],
  24: [function (_dereq_, module, exports) {
    'use strict';

    var $defineProperty = _dereq_(72);

    var createDesc = _dereq_(92);

    module.exports = function (object, index, value) {
      if (index in object) $defineProperty.f(object, index, createDesc(0, value));else object[index] = value;
    };
  }, {
    "72": 72,
    "92": 92
  }],
  25: [function (_dereq_, module, exports) {
    // optional / simple context binding
    var aFunction = _dereq_(3);

    module.exports = function (fn, that, length) {
      aFunction(fn);
      if (that === undefined) return fn;

      switch (length) {
        case 1:
          return function (a) {
            return fn.call(that, a);
          };

        case 2:
          return function (a, b) {
            return fn.call(that, a, b);
          };

        case 3:
          return function (a, b, c) {
            return fn.call(that, a, b, c);
          };
      }

      return function () {
        return fn.apply(that, arguments);
      };
    };
  }, {
    "3": 3
  }],
  26: [function (_dereq_, module, exports) {
    'use strict'; // 20.3.4.36 / 15.9.5.43 Date.prototype.toISOString()

    var fails = _dereq_(35);

    var getTime = Date.prototype.getTime;
    var $toISOString = Date.prototype.toISOString;

    var lz = function lz(num) {
      return num > 9 ? num : '0' + num;
    }; // PhantomJS / old WebKit has a broken implementations


    module.exports = fails(function () {
      return $toISOString.call(new Date(-5e13 - 1)) != '0385-07-25T07:06:39.999Z';
    }) || !fails(function () {
      $toISOString.call(new Date(NaN));
    }) ? function toISOString() {
      if (!isFinite(getTime.call(this))) throw RangeError('Invalid time value');
      var d = this;
      var y = d.getUTCFullYear();
      var m = d.getUTCMilliseconds();
      var s = y < 0 ? '-' : y > 9999 ? '+' : '';
      return s + ('00000' + Math.abs(y)).slice(s ? -6 : -4) + '-' + lz(d.getUTCMonth() + 1) + '-' + lz(d.getUTCDate()) + 'T' + lz(d.getUTCHours()) + ':' + lz(d.getUTCMinutes()) + ':' + lz(d.getUTCSeconds()) + '.' + (m > 99 ? m : '0' + lz(m)) + 'Z';
    } : $toISOString;
  }, {
    "35": 35
  }],
  27: [function (_dereq_, module, exports) {
    'use strict';

    var anObject = _dereq_(7);

    var toPrimitive = _dereq_(120);

    var NUMBER = 'number';

    module.exports = function (hint) {
      if (hint !== 'string' && hint !== NUMBER && hint !== 'default') throw TypeError('Incorrect hint');
      return toPrimitive(anObject(this), hint != NUMBER);
    };
  }, {
    "120": 120,
    "7": 7
  }],
  28: [function (_dereq_, module, exports) {
    // 7.2.1 RequireObjectCoercible(argument)
    module.exports = function (it) {
      if (it == undefined) throw TypeError("Can't call method on  " + it);
      return it;
    };
  }, {}],
  29: [function (_dereq_, module, exports) {
    // Thank's IE8 for his funny defineProperty
    module.exports = !_dereq_(35)(function () {
      return Object.defineProperty({}, 'a', {
        get: function get() {
          return 7;
        }
      }).a != 7;
    });
  }, {
    "35": 35
  }],
  30: [function (_dereq_, module, exports) {
    var isObject = _dereq_(51);

    var document = _dereq_(40).document; // typeof document.createElement is 'object' in old IE


    var is = isObject(document) && isObject(document.createElement);

    module.exports = function (it) {
      return is ? document.createElement(it) : {};
    };
  }, {
    "40": 40,
    "51": 51
  }],
  31: [function (_dereq_, module, exports) {
    // IE 8- don't enum bug keys
    module.exports = 'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'.split(',');
  }, {}],
  32: [function (_dereq_, module, exports) {
    // all enumerable object keys, includes symbols
    var getKeys = _dereq_(81);

    var gOPS = _dereq_(78);

    var pIE = _dereq_(82);

    module.exports = function (it) {
      var result = getKeys(it);
      var getSymbols = gOPS.f;

      if (getSymbols) {
        var symbols = getSymbols(it);
        var isEnum = pIE.f;
        var i = 0;
        var key;

        while (symbols.length > i) {
          if (isEnum.call(it, key = symbols[i++])) result.push(key);
        }
      }

      return result;
    };
  }, {
    "78": 78,
    "81": 81,
    "82": 82
  }],
  33: [function (_dereq_, module, exports) {
    var global = _dereq_(40);

    var core = _dereq_(23);

    var hide = _dereq_(42);

    var redefine = _dereq_(94);

    var ctx = _dereq_(25);

    var PROTOTYPE = 'prototype';

    var $export = function $export(type, name, source) {
      var IS_FORCED = type & $export.F;
      var IS_GLOBAL = type & $export.G;
      var IS_STATIC = type & $export.S;
      var IS_PROTO = type & $export.P;
      var IS_BIND = type & $export.B;
      var target = IS_GLOBAL ? global : IS_STATIC ? global[name] || (global[name] = {}) : (global[name] || {})[PROTOTYPE];
      var exports = IS_GLOBAL ? core : core[name] || (core[name] = {});
      var expProto = exports[PROTOTYPE] || (exports[PROTOTYPE] = {});
      var key, own, out, exp;
      if (IS_GLOBAL) source = name;

      for (key in source) {
        // contains in native
        own = !IS_FORCED && target && target[key] !== undefined; // export native or passed

        out = (own ? target : source)[key]; // bind timers to global for call from export context

        exp = IS_BIND && own ? ctx(out, global) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out; // extend global

        if (target) redefine(target, key, out, type & $export.U); // export

        if (exports[key] != out) hide(exports, key, exp);
        if (IS_PROTO && expProto[key] != out) expProto[key] = out;
      }
    };

    global.core = core; // type bitmap

    $export.F = 1; // forced

    $export.G = 2; // global

    $export.S = 4; // static

    $export.P = 8; // proto

    $export.B = 16; // bind

    $export.W = 32; // wrap

    $export.U = 64; // safe

    $export.R = 128; // real proto method for `library`

    module.exports = $export;
  }, {
    "23": 23,
    "25": 25,
    "40": 40,
    "42": 42,
    "94": 94
  }],
  34: [function (_dereq_, module, exports) {
    var MATCH = _dereq_(128)('match');

    module.exports = function (KEY) {
      var re = /./;

      try {
        '/./'[KEY](re);
      } catch (e) {
        try {
          re[MATCH] = false;
          return !'/./'[KEY](re);
        } catch (f) {
          /* empty */
        }
      }

      return true;
    };
  }, {
    "128": 128
  }],
  35: [function (_dereq_, module, exports) {
    module.exports = function (exec) {
      try {
        return !!exec();
      } catch (e) {
        return true;
      }
    };
  }, {}],
  36: [function (_dereq_, module, exports) {
    'use strict';

    var hide = _dereq_(42);

    var redefine = _dereq_(94);

    var fails = _dereq_(35);

    var defined = _dereq_(28);

    var wks = _dereq_(128);

    module.exports = function (KEY, length, exec) {
      var SYMBOL = wks(KEY);
      var fns = exec(defined, SYMBOL, ''[KEY]);
      var strfn = fns[0];
      var rxfn = fns[1];

      if (fails(function () {
        var O = {};

        O[SYMBOL] = function () {
          return 7;
        };

        return ''[KEY](O) != 7;
      })) {
        redefine(String.prototype, KEY, strfn);
        hide(RegExp.prototype, SYMBOL, length == 2 // 21.2.5.8 RegExp.prototype[@@replace](string, replaceValue)
        // 21.2.5.11 RegExp.prototype[@@split](string, limit)
        ? function (string, arg) {
          return rxfn.call(string, this, arg);
        } // 21.2.5.6 RegExp.prototype[@@match](string)
        // 21.2.5.9 RegExp.prototype[@@search](string)
        : function (string) {
          return rxfn.call(string, this);
        });
      }
    };
  }, {
    "128": 128,
    "28": 28,
    "35": 35,
    "42": 42,
    "94": 94
  }],
  37: [function (_dereq_, module, exports) {
    'use strict'; // 21.2.5.3 get RegExp.prototype.flags

    var anObject = _dereq_(7);

    module.exports = function () {
      var that = anObject(this);
      var result = '';
      if (that.global) result += 'g';
      if (that.ignoreCase) result += 'i';
      if (that.multiline) result += 'm';
      if (that.unicode) result += 'u';
      if (that.sticky) result += 'y';
      return result;
    };
  }, {
    "7": 7
  }],
  38: [function (_dereq_, module, exports) {
    'use strict'; // https://tc39.github.io/proposal-flatMap/#sec-FlattenIntoArray

    var isArray = _dereq_(49);

    var isObject = _dereq_(51);

    var toLength = _dereq_(118);

    var ctx = _dereq_(25);

    var IS_CONCAT_SPREADABLE = _dereq_(128)('isConcatSpreadable');

    function flattenIntoArray(target, original, source, sourceLen, start, depth, mapper, thisArg) {
      var targetIndex = start;
      var sourceIndex = 0;
      var mapFn = mapper ? ctx(mapper, thisArg, 3) : false;
      var element, spreadable;

      while (sourceIndex < sourceLen) {
        if (sourceIndex in source) {
          element = mapFn ? mapFn(source[sourceIndex], sourceIndex, original) : source[sourceIndex];
          spreadable = false;

          if (isObject(element)) {
            spreadable = element[IS_CONCAT_SPREADABLE];
            spreadable = spreadable !== undefined ? !!spreadable : isArray(element);
          }

          if (spreadable && depth > 0) {
            targetIndex = flattenIntoArray(target, original, element, toLength(element.length), targetIndex, depth - 1) - 1;
          } else {
            if (targetIndex >= 0x1fffffffffffff) throw TypeError();
            target[targetIndex] = element;
          }

          targetIndex++;
        }

        sourceIndex++;
      }

      return targetIndex;
    }

    module.exports = flattenIntoArray;
  }, {
    "118": 118,
    "128": 128,
    "25": 25,
    "49": 49,
    "51": 51
  }],
  39: [function (_dereq_, module, exports) {
    var ctx = _dereq_(25);

    var call = _dereq_(53);

    var isArrayIter = _dereq_(48);

    var anObject = _dereq_(7);

    var toLength = _dereq_(118);

    var getIterFn = _dereq_(129);

    var BREAK = {};
    var RETURN = {};

    var exports = module.exports = function (iterable, entries, fn, that, ITERATOR) {
      var iterFn = ITERATOR ? function () {
        return iterable;
      } : getIterFn(iterable);
      var f = ctx(fn, that, entries ? 2 : 1);
      var index = 0;
      var length, step, iterator, result;
      if (typeof iterFn != 'function') throw TypeError(iterable + ' is not iterable!'); // fast case for arrays with default iterator

      if (isArrayIter(iterFn)) for (length = toLength(iterable.length); length > index; index++) {
        result = entries ? f(anObject(step = iterable[index])[0], step[1]) : f(iterable[index]);
        if (result === BREAK || result === RETURN) return result;
      } else for (iterator = iterFn.call(iterable); !(step = iterator.next()).done;) {
        result = call(iterator, f, step.value, entries);
        if (result === BREAK || result === RETURN) return result;
      }
    };

    exports.BREAK = BREAK;
    exports.RETURN = RETURN;
  }, {
    "118": 118,
    "129": 129,
    "25": 25,
    "48": 48,
    "53": 53,
    "7": 7
  }],
  40: [function (_dereq_, module, exports) {
    // https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
    var global = module.exports = typeof window != 'undefined' && window.Math == Math ? window : typeof self != 'undefined' && self.Math == Math ? self // eslint-disable-next-line no-new-func
    : Function('return this')();
    if (typeof __g == 'number') __g = global; // eslint-disable-line no-undef
  }, {}],
  41: [function (_dereq_, module, exports) {
    var hasOwnProperty = {}.hasOwnProperty;

    module.exports = function (it, key) {
      return hasOwnProperty.call(it, key);
    };
  }, {}],
  42: [function (_dereq_, module, exports) {
    var dP = _dereq_(72);

    var createDesc = _dereq_(92);

    module.exports = _dereq_(29) ? function (object, key, value) {
      return dP.f(object, key, createDesc(1, value));
    } : function (object, key, value) {
      object[key] = value;
      return object;
    };
  }, {
    "29": 29,
    "72": 72,
    "92": 92
  }],
  43: [function (_dereq_, module, exports) {
    var document = _dereq_(40).document;

    module.exports = document && document.documentElement;
  }, {
    "40": 40
  }],
  44: [function (_dereq_, module, exports) {
    module.exports = !_dereq_(29) && !_dereq_(35)(function () {
      return Object.defineProperty(_dereq_(30)('div'), 'a', {
        get: function get() {
          return 7;
        }
      }).a != 7;
    });
  }, {
    "29": 29,
    "30": 30,
    "35": 35
  }],
  45: [function (_dereq_, module, exports) {
    var isObject = _dereq_(51);

    var setPrototypeOf = _dereq_(99).set;

    module.exports = function (that, target, C) {
      var S = target.constructor;
      var P;

      if (S !== C && typeof S == 'function' && (P = S.prototype) !== C.prototype && isObject(P) && setPrototypeOf) {
        setPrototypeOf(that, P);
      }

      return that;
    };
  }, {
    "51": 51,
    "99": 99
  }],
  46: [function (_dereq_, module, exports) {
    // fast apply, http://jsperf.lnkit.com/fast-apply/5
    module.exports = function (fn, args, that) {
      var un = that === undefined;

      switch (args.length) {
        case 0:
          return un ? fn() : fn.call(that);

        case 1:
          return un ? fn(args[0]) : fn.call(that, args[0]);

        case 2:
          return un ? fn(args[0], args[1]) : fn.call(that, args[0], args[1]);

        case 3:
          return un ? fn(args[0], args[1], args[2]) : fn.call(that, args[0], args[1], args[2]);

        case 4:
          return un ? fn(args[0], args[1], args[2], args[3]) : fn.call(that, args[0], args[1], args[2], args[3]);
      }

      return fn.apply(that, args);
    };
  }, {}],
  47: [function (_dereq_, module, exports) {
    // fallback for non-array-like ES3 and non-enumerable old V8 strings
    var cof = _dereq_(18); // eslint-disable-next-line no-prototype-builtins


    module.exports = Object('z').propertyIsEnumerable(0) ? Object : function (it) {
      return cof(it) == 'String' ? it.split('') : Object(it);
    };
  }, {
    "18": 18
  }],
  48: [function (_dereq_, module, exports) {
    // check on default Array iterator
    var Iterators = _dereq_(58);

    var ITERATOR = _dereq_(128)('iterator');

    var ArrayProto = Array.prototype;

    module.exports = function (it) {
      return it !== undefined && (Iterators.Array === it || ArrayProto[ITERATOR] === it);
    };
  }, {
    "128": 128,
    "58": 58
  }],
  49: [function (_dereq_, module, exports) {
    // 7.2.2 IsArray(argument)
    var cof = _dereq_(18);

    module.exports = Array.isArray || function isArray(arg) {
      return cof(arg) == 'Array';
    };
  }, {
    "18": 18
  }],
  50: [function (_dereq_, module, exports) {
    // 20.1.2.3 Number.isInteger(number)
    var isObject = _dereq_(51);

    var floor = Math.floor;

    module.exports = function isInteger(it) {
      return !isObject(it) && isFinite(it) && floor(it) === it;
    };
  }, {
    "51": 51
  }],
  51: [function (_dereq_, module, exports) {
    module.exports = function (it) {
      return _typeof(it) === 'object' ? it !== null : typeof it === 'function';
    };
  }, {}],
  52: [function (_dereq_, module, exports) {
    // 7.2.8 IsRegExp(argument)
    var isObject = _dereq_(51);

    var cof = _dereq_(18);

    var MATCH = _dereq_(128)('match');

    module.exports = function (it) {
      var isRegExp;
      return isObject(it) && ((isRegExp = it[MATCH]) !== undefined ? !!isRegExp : cof(it) == 'RegExp');
    };
  }, {
    "128": 128,
    "18": 18,
    "51": 51
  }],
  53: [function (_dereq_, module, exports) {
    // call something on iterator step with safe closing on error
    var anObject = _dereq_(7);

    module.exports = function (iterator, fn, value, entries) {
      try {
        return entries ? fn(anObject(value)[0], value[1]) : fn(value); // 7.4.6 IteratorClose(iterator, completion)
      } catch (e) {
        var ret = iterator['return'];
        if (ret !== undefined) anObject(ret.call(iterator));
        throw e;
      }
    };
  }, {
    "7": 7
  }],
  54: [function (_dereq_, module, exports) {
    'use strict';

    var create = _dereq_(71);

    var descriptor = _dereq_(92);

    var setToStringTag = _dereq_(101);

    var IteratorPrototype = {}; // 25.1.2.1.1 %IteratorPrototype%[@@iterator]()

    _dereq_(42)(IteratorPrototype, _dereq_(128)('iterator'), function () {
      return this;
    });

    module.exports = function (Constructor, NAME, next) {
      Constructor.prototype = create(IteratorPrototype, {
        next: descriptor(1, next)
      });
      setToStringTag(Constructor, NAME + ' Iterator');
    };
  }, {
    "101": 101,
    "128": 128,
    "42": 42,
    "71": 71,
    "92": 92
  }],
  55: [function (_dereq_, module, exports) {
    'use strict';

    var LIBRARY = _dereq_(60);

    var $export = _dereq_(33);

    var redefine = _dereq_(94);

    var hide = _dereq_(42);

    var has = _dereq_(41);

    var Iterators = _dereq_(58);

    var $iterCreate = _dereq_(54);

    var setToStringTag = _dereq_(101);

    var getPrototypeOf = _dereq_(79);

    var ITERATOR = _dereq_(128)('iterator');

    var BUGGY = !([].keys && 'next' in [].keys()); // Safari has buggy iterators w/o `next`

    var FF_ITERATOR = '@@iterator';
    var KEYS = 'keys';
    var VALUES = 'values';

    var returnThis = function returnThis() {
      return this;
    };

    module.exports = function (Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED) {
      $iterCreate(Constructor, NAME, next);

      var getMethod = function getMethod(kind) {
        if (!BUGGY && kind in proto) return proto[kind];

        switch (kind) {
          case KEYS:
            return function keys() {
              return new Constructor(this, kind);
            };

          case VALUES:
            return function values() {
              return new Constructor(this, kind);
            };
        }

        return function entries() {
          return new Constructor(this, kind);
        };
      };

      var TAG = NAME + ' Iterator';
      var DEF_VALUES = DEFAULT == VALUES;
      var VALUES_BUG = false;
      var proto = Base.prototype;
      var $native = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT];
      var $default = $native || getMethod(DEFAULT);
      var $entries = DEFAULT ? !DEF_VALUES ? $default : getMethod('entries') : undefined;
      var $anyNative = NAME == 'Array' ? proto.entries || $native : $native;
      var methods, key, IteratorPrototype; // Fix native

      if ($anyNative) {
        IteratorPrototype = getPrototypeOf($anyNative.call(new Base()));

        if (IteratorPrototype !== Object.prototype && IteratorPrototype.next) {
          // Set @@toStringTag to native iterators
          setToStringTag(IteratorPrototype, TAG, true); // fix for some old engines

          if (!LIBRARY && !has(IteratorPrototype, ITERATOR)) hide(IteratorPrototype, ITERATOR, returnThis);
        }
      } // fix Array#{values, @@iterator}.name in V8 / FF


      if (DEF_VALUES && $native && $native.name !== VALUES) {
        VALUES_BUG = true;

        $default = function values() {
          return $native.call(this);
        };
      } // Define iterator


      if ((!LIBRARY || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])) {
        hide(proto, ITERATOR, $default);
      } // Plug for library


      Iterators[NAME] = $default;
      Iterators[TAG] = returnThis;

      if (DEFAULT) {
        methods = {
          values: DEF_VALUES ? $default : getMethod(VALUES),
          keys: IS_SET ? $default : getMethod(KEYS),
          entries: $entries
        };
        if (FORCED) for (key in methods) {
          if (!(key in proto)) redefine(proto, key, methods[key]);
        } else $export($export.P + $export.F * (BUGGY || VALUES_BUG), NAME, methods);
      }

      return methods;
    };
  }, {
    "101": 101,
    "128": 128,
    "33": 33,
    "41": 41,
    "42": 42,
    "54": 54,
    "58": 58,
    "60": 60,
    "79": 79,
    "94": 94
  }],
  56: [function (_dereq_, module, exports) {
    var ITERATOR = _dereq_(128)('iterator');

    var SAFE_CLOSING = false;

    try {
      var riter = [7][ITERATOR]();

      riter['return'] = function () {
        SAFE_CLOSING = true;
      }; // eslint-disable-next-line no-throw-literal


      Array.from(riter, function () {
        throw 2;
      });
    } catch (e) {
      /* empty */
    }

    module.exports = function (exec, skipClosing) {
      if (!skipClosing && !SAFE_CLOSING) return false;
      var safe = false;

      try {
        var arr = [7];
        var iter = arr[ITERATOR]();

        iter.next = function () {
          return {
            done: safe = true
          };
        };

        arr[ITERATOR] = function () {
          return iter;
        };

        exec(arr);
      } catch (e) {
        /* empty */
      }

      return safe;
    };
  }, {
    "128": 128
  }],
  57: [function (_dereq_, module, exports) {
    module.exports = function (done, value) {
      return {
        value: value,
        done: !!done
      };
    };
  }, {}],
  58: [function (_dereq_, module, exports) {
    module.exports = {};
  }, {}],
  59: [function (_dereq_, module, exports) {
    var getKeys = _dereq_(81);

    var toIObject = _dereq_(117);

    module.exports = function (object, el) {
      var O = toIObject(object);
      var keys = getKeys(O);
      var length = keys.length;
      var index = 0;
      var key;

      while (length > index) {
        if (O[key = keys[index++]] === el) return key;
      }
    };
  }, {
    "117": 117,
    "81": 81
  }],
  60: [function (_dereq_, module, exports) {
    module.exports = false;
  }, {}],
  61: [function (_dereq_, module, exports) {
    // 20.2.2.14 Math.expm1(x)
    var $expm1 = Math.expm1;
    module.exports = !$expm1 // Old FF bug
    || $expm1(10) > 22025.465794806719 || $expm1(10) < 22025.4657948067165168 // Tor Browser bug
    || $expm1(-2e-17) != -2e-17 ? function expm1(x) {
      return (x = +x) == 0 ? x : x > -1e-6 && x < 1e-6 ? x + x * x / 2 : Math.exp(x) - 1;
    } : $expm1;
  }, {}],
  62: [function (_dereq_, module, exports) {
    // 20.2.2.16 Math.fround(x)
    var sign = _dereq_(65);

    var pow = Math.pow;
    var EPSILON = pow(2, -52);
    var EPSILON32 = pow(2, -23);
    var MAX32 = pow(2, 127) * (2 - EPSILON32);
    var MIN32 = pow(2, -126);

    var roundTiesToEven = function roundTiesToEven(n) {
      return n + 1 / EPSILON - 1 / EPSILON;
    };

    module.exports = Math.fround || function fround(x) {
      var $abs = Math.abs(x);
      var $sign = sign(x);
      var a, result;
      if ($abs < MIN32) return $sign * roundTiesToEven($abs / MIN32 / EPSILON32) * MIN32 * EPSILON32;
      a = (1 + EPSILON32 / EPSILON) * $abs;
      result = a - (a - $abs); // eslint-disable-next-line no-self-compare

      if (result > MAX32 || result != result) return $sign * Infinity;
      return $sign * result;
    };
  }, {
    "65": 65
  }],
  63: [function (_dereq_, module, exports) {
    // 20.2.2.20 Math.log1p(x)
    module.exports = Math.log1p || function log1p(x) {
      return (x = +x) > -1e-8 && x < 1e-8 ? x - x * x / 2 : Math.log(1 + x);
    };
  }, {}],
  64: [function (_dereq_, module, exports) {
    // https://rwaldron.github.io/proposal-math-extensions/
    module.exports = Math.scale || function scale(x, inLow, inHigh, outLow, outHigh) {
      if (arguments.length === 0 // eslint-disable-next-line no-self-compare
      || x != x // eslint-disable-next-line no-self-compare
      || inLow != inLow // eslint-disable-next-line no-self-compare
      || inHigh != inHigh // eslint-disable-next-line no-self-compare
      || outLow != outLow // eslint-disable-next-line no-self-compare
      || outHigh != outHigh) return NaN;
      if (x === Infinity || x === -Infinity) return x;
      return (x - inLow) * (outHigh - outLow) / (inHigh - inLow) + outLow;
    };
  }, {}],
  65: [function (_dereq_, module, exports) {
    // 20.2.2.28 Math.sign(x)
    module.exports = Math.sign || function sign(x) {
      // eslint-disable-next-line no-self-compare
      return (x = +x) == 0 || x != x ? x : x < 0 ? -1 : 1;
    };
  }, {}],
  66: [function (_dereq_, module, exports) {
    var META = _dereq_(124)('meta');

    var isObject = _dereq_(51);

    var has = _dereq_(41);

    var setDesc = _dereq_(72).f;

    var id = 0;

    var isExtensible = Object.isExtensible || function () {
      return true;
    };

    var FREEZE = !_dereq_(35)(function () {
      return isExtensible(Object.preventExtensions({}));
    });

    var setMeta = function setMeta(it) {
      setDesc(it, META, {
        value: {
          i: 'O' + ++id,
          // object ID
          w: {} // weak collections IDs

        }
      });
    };

    var fastKey = function fastKey(it, create) {
      // return primitive with prefix
      if (!isObject(it)) return _typeof(it) == 'symbol' ? it : (typeof it == 'string' ? 'S' : 'P') + it;

      if (!has(it, META)) {
        // can't set metadata to uncaught frozen object
        if (!isExtensible(it)) return 'F'; // not necessary to add metadata

        if (!create) return 'E'; // add missing metadata

        setMeta(it); // return object ID
      }

      return it[META].i;
    };

    var getWeak = function getWeak(it, create) {
      if (!has(it, META)) {
        // can't set metadata to uncaught frozen object
        if (!isExtensible(it)) return true; // not necessary to add metadata

        if (!create) return false; // add missing metadata

        setMeta(it); // return hash weak collections IDs
      }

      return it[META].w;
    }; // add metadata on freeze-family methods calling


    var onFreeze = function onFreeze(it) {
      if (FREEZE && meta.NEED && isExtensible(it) && !has(it, META)) setMeta(it);
      return it;
    };

    var meta = module.exports = {
      KEY: META,
      NEED: false,
      fastKey: fastKey,
      getWeak: getWeak,
      onFreeze: onFreeze
    };
  }, {
    "124": 124,
    "35": 35,
    "41": 41,
    "51": 51,
    "72": 72
  }],
  67: [function (_dereq_, module, exports) {
    var Map = _dereq_(160);

    var $export = _dereq_(33);

    var shared = _dereq_(103)('metadata');

    var store = shared.store || (shared.store = new (_dereq_(266))());

    var getOrCreateMetadataMap = function getOrCreateMetadataMap(target, targetKey, create) {
      var targetMetadata = store.get(target);

      if (!targetMetadata) {
        if (!create) return undefined;
        store.set(target, targetMetadata = new Map());
      }

      var keyMetadata = targetMetadata.get(targetKey);

      if (!keyMetadata) {
        if (!create) return undefined;
        targetMetadata.set(targetKey, keyMetadata = new Map());
      }

      return keyMetadata;
    };

    var ordinaryHasOwnMetadata = function ordinaryHasOwnMetadata(MetadataKey, O, P) {
      var metadataMap = getOrCreateMetadataMap(O, P, false);
      return metadataMap === undefined ? false : metadataMap.has(MetadataKey);
    };

    var ordinaryGetOwnMetadata = function ordinaryGetOwnMetadata(MetadataKey, O, P) {
      var metadataMap = getOrCreateMetadataMap(O, P, false);
      return metadataMap === undefined ? undefined : metadataMap.get(MetadataKey);
    };

    var ordinaryDefineOwnMetadata = function ordinaryDefineOwnMetadata(MetadataKey, MetadataValue, O, P) {
      getOrCreateMetadataMap(O, P, true).set(MetadataKey, MetadataValue);
    };

    var ordinaryOwnMetadataKeys = function ordinaryOwnMetadataKeys(target, targetKey) {
      var metadataMap = getOrCreateMetadataMap(target, targetKey, false);
      var keys = [];
      if (metadataMap) metadataMap.forEach(function (_, key) {
        keys.push(key);
      });
      return keys;
    };

    var toMetaKey = function toMetaKey(it) {
      return it === undefined || _typeof(it) == 'symbol' ? it : String(it);
    };

    var exp = function exp(O) {
      $export($export.S, 'Reflect', O);
    };

    module.exports = {
      store: store,
      map: getOrCreateMetadataMap,
      has: ordinaryHasOwnMetadata,
      get: ordinaryGetOwnMetadata,
      set: ordinaryDefineOwnMetadata,
      keys: ordinaryOwnMetadataKeys,
      key: toMetaKey,
      exp: exp
    };
  }, {
    "103": 103,
    "160": 160,
    "266": 266,
    "33": 33
  }],
  68: [function (_dereq_, module, exports) {
    var global = _dereq_(40);

    var macrotask = _dereq_(113).set;

    var Observer = global.MutationObserver || global.WebKitMutationObserver;
    var process = global.process;
    var Promise = global.Promise;
    var isNode = _dereq_(18)(process) == 'process';

    module.exports = function () {
      var head, last, notify;

      var flush = function flush() {
        var parent, fn;
        if (isNode && (parent = process.domain)) parent.exit();

        while (head) {
          fn = head.fn;
          head = head.next;

          try {
            fn();
          } catch (e) {
            if (head) notify();else last = undefined;
            throw e;
          }
        }

        last = undefined;
        if (parent) parent.enter();
      }; // Node.js


      if (isNode) {
        notify = function notify() {
          process.nextTick(flush);
        }; // browsers with MutationObserver

      } else if (Observer) {
        var toggle = true;
        var node = document.createTextNode('');
        new Observer(flush).observe(node, {
          characterData: true
        }); // eslint-disable-line no-new

        notify = function notify() {
          node.data = toggle = !toggle;
        }; // environments with maybe non-completely correct, but existent Promise

      } else if (Promise && Promise.resolve) {
        var promise = Promise.resolve();

        notify = function notify() {
          promise.then(flush);
        }; // for other environments - macrotask based on:
        // - setImmediate
        // - MessageChannel
        // - window.postMessag
        // - onreadystatechange
        // - setTimeout

      } else {
        notify = function notify() {
          // strange IE + webpack dev server bug - use .call(global)
          macrotask.call(global, flush);
        };
      }

      return function (fn) {
        var task = {
          fn: fn,
          next: undefined
        };
        if (last) last.next = task;

        if (!head) {
          head = task;
          notify();
        }

        last = task;
      };
    };
  }, {
    "113": 113,
    "18": 18,
    "40": 40
  }],
  69: [function (_dereq_, module, exports) {
    'use strict'; // 25.4.1.5 NewPromiseCapability(C)

    var aFunction = _dereq_(3);

    function PromiseCapability(C) {
      var resolve, reject;
      this.promise = new C(function ($$resolve, $$reject) {
        if (resolve !== undefined || reject !== undefined) throw TypeError('Bad Promise constructor');
        resolve = $$resolve;
        reject = $$reject;
      });
      this.resolve = aFunction(resolve);
      this.reject = aFunction(reject);
    }

    module.exports.f = function (C) {
      return new PromiseCapability(C);
    };
  }, {
    "3": 3
  }],
  70: [function (_dereq_, module, exports) {
    'use strict'; // 19.1.2.1 Object.assign(target, source, ...)

    var getKeys = _dereq_(81);

    var gOPS = _dereq_(78);

    var pIE = _dereq_(82);

    var toObject = _dereq_(119);

    var IObject = _dereq_(47);

    var $assign = Object.assign; // should work with symbols and should have deterministic property order (V8 bug)

    module.exports = !$assign || _dereq_(35)(function () {
      var A = {};
      var B = {}; // eslint-disable-next-line no-undef

      var S = Symbol();
      var K = 'abcdefghijklmnopqrst';
      A[S] = 7;
      K.split('').forEach(function (k) {
        B[k] = k;
      });
      return $assign({}, A)[S] != 7 || Object.keys($assign({}, B)).join('') != K;
    }) ? function assign(target, source) {
      // eslint-disable-line no-unused-vars
      var T = toObject(target);
      var aLen = arguments.length;
      var index = 1;
      var getSymbols = gOPS.f;
      var isEnum = pIE.f;

      while (aLen > index) {
        var S = IObject(arguments[index++]);
        var keys = getSymbols ? getKeys(S).concat(getSymbols(S)) : getKeys(S);
        var length = keys.length;
        var j = 0;
        var key;

        while (length > j) {
          if (isEnum.call(S, key = keys[j++])) T[key] = S[key];
        }
      }

      return T;
    } : $assign;
  }, {
    "119": 119,
    "35": 35,
    "47": 47,
    "78": 78,
    "81": 81,
    "82": 82
  }],
  71: [function (_dereq_, module, exports) {
    // 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
    var anObject = _dereq_(7);

    var dPs = _dereq_(73);

    var enumBugKeys = _dereq_(31);

    var IE_PROTO = _dereq_(102)('IE_PROTO');

    var Empty = function Empty() {
      /* empty */
    };

    var PROTOTYPE = 'prototype'; // Create object with fake `null` prototype: use iframe Object with cleared prototype

    var _createDict = function createDict() {
      // Thrash, waste and sodomy: IE GC bug
      var iframe = _dereq_(30)('iframe');

      var i = enumBugKeys.length;
      var lt = '<';
      var gt = '>';
      var iframeDocument;
      iframe.style.display = 'none';

      _dereq_(43).appendChild(iframe);

      iframe.src = 'javascript:'; // eslint-disable-line no-script-url
      // createDict = iframe.contentWindow.Object;
      // html.removeChild(iframe);

      iframeDocument = iframe.contentWindow.document;
      iframeDocument.open();
      iframeDocument.write(lt + 'script' + gt + 'document.F=Object' + lt + '/script' + gt);
      iframeDocument.close();
      _createDict = iframeDocument.F;

      while (i--) {
        delete _createDict[PROTOTYPE][enumBugKeys[i]];
      }

      return _createDict();
    };

    module.exports = Object.create || function create(O, Properties) {
      var result;

      if (O !== null) {
        Empty[PROTOTYPE] = anObject(O);
        result = new Empty();
        Empty[PROTOTYPE] = null; // add "__proto__" for Object.getPrototypeOf polyfill

        result[IE_PROTO] = O;
      } else result = _createDict();

      return Properties === undefined ? result : dPs(result, Properties);
    };
  }, {
    "102": 102,
    "30": 30,
    "31": 31,
    "43": 43,
    "7": 7,
    "73": 73
  }],
  72: [function (_dereq_, module, exports) {
    var anObject = _dereq_(7);

    var IE8_DOM_DEFINE = _dereq_(44);

    var toPrimitive = _dereq_(120);

    var dP = Object.defineProperty;
    exports.f = _dereq_(29) ? Object.defineProperty : function defineProperty(O, P, Attributes) {
      anObject(O);
      P = toPrimitive(P, true);
      anObject(Attributes);
      if (IE8_DOM_DEFINE) try {
        return dP(O, P, Attributes);
      } catch (e) {
        /* empty */
      }
      if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported!');
      if ('value' in Attributes) O[P] = Attributes.value;
      return O;
    };
  }, {
    "120": 120,
    "29": 29,
    "44": 44,
    "7": 7
  }],
  73: [function (_dereq_, module, exports) {
    var dP = _dereq_(72);

    var anObject = _dereq_(7);

    var getKeys = _dereq_(81);

    module.exports = _dereq_(29) ? Object.defineProperties : function defineProperties(O, Properties) {
      anObject(O);
      var keys = getKeys(Properties);
      var length = keys.length;
      var i = 0;
      var P;

      while (length > i) {
        dP.f(O, P = keys[i++], Properties[P]);
      }

      return O;
    };
  }, {
    "29": 29,
    "7": 7,
    "72": 72,
    "81": 81
  }],
  74: [function (_dereq_, module, exports) {
    'use strict'; // Forced replacement prototype accessors methods

    module.exports = _dereq_(60) || !_dereq_(35)(function () {
      var K = Math.random(); // In FF throws only define methods
      // eslint-disable-next-line no-undef, no-useless-call

      __defineSetter__.call(null, K, function () {
        /* empty */
      });

      delete _dereq_(40)[K];
    });
  }, {
    "35": 35,
    "40": 40,
    "60": 60
  }],
  75: [function (_dereq_, module, exports) {
    var pIE = _dereq_(82);

    var createDesc = _dereq_(92);

    var toIObject = _dereq_(117);

    var toPrimitive = _dereq_(120);

    var has = _dereq_(41);

    var IE8_DOM_DEFINE = _dereq_(44);

    var gOPD = Object.getOwnPropertyDescriptor;
    exports.f = _dereq_(29) ? gOPD : function getOwnPropertyDescriptor(O, P) {
      O = toIObject(O);
      P = toPrimitive(P, true);
      if (IE8_DOM_DEFINE) try {
        return gOPD(O, P);
      } catch (e) {
        /* empty */
      }
      if (has(O, P)) return createDesc(!pIE.f.call(O, P), O[P]);
    };
  }, {
    "117": 117,
    "120": 120,
    "29": 29,
    "41": 41,
    "44": 44,
    "82": 82,
    "92": 92
  }],
  76: [function (_dereq_, module, exports) {
    // fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window
    var toIObject = _dereq_(117);

    var gOPN = _dereq_(77).f;

    var toString = {}.toString;
    var windowNames = (typeof window === "undefined" ? "undefined" : _typeof(window)) == 'object' && window && Object.getOwnPropertyNames ? Object.getOwnPropertyNames(window) : [];

    var getWindowNames = function getWindowNames(it) {
      try {
        return gOPN(it);
      } catch (e) {
        return windowNames.slice();
      }
    };

    module.exports.f = function getOwnPropertyNames(it) {
      return windowNames && toString.call(it) == '[object Window]' ? getWindowNames(it) : gOPN(toIObject(it));
    };
  }, {
    "117": 117,
    "77": 77
  }],
  77: [function (_dereq_, module, exports) {
    // 19.1.2.7 / 15.2.3.4 Object.getOwnPropertyNames(O)
    var $keys = _dereq_(80);

    var hiddenKeys = _dereq_(31).concat('length', 'prototype');

    exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
      return $keys(O, hiddenKeys);
    };
  }, {
    "31": 31,
    "80": 80
  }],
  78: [function (_dereq_, module, exports) {
    exports.f = Object.getOwnPropertySymbols;
  }, {}],
  79: [function (_dereq_, module, exports) {
    // 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
    var has = _dereq_(41);

    var toObject = _dereq_(119);

    var IE_PROTO = _dereq_(102)('IE_PROTO');

    var ObjectProto = Object.prototype;

    module.exports = Object.getPrototypeOf || function (O) {
      O = toObject(O);
      if (has(O, IE_PROTO)) return O[IE_PROTO];

      if (typeof O.constructor == 'function' && O instanceof O.constructor) {
        return O.constructor.prototype;
      }

      return O instanceof Object ? ObjectProto : null;
    };
  }, {
    "102": 102,
    "119": 119,
    "41": 41
  }],
  80: [function (_dereq_, module, exports) {
    var has = _dereq_(41);

    var toIObject = _dereq_(117);

    var arrayIndexOf = _dereq_(11)(false);

    var IE_PROTO = _dereq_(102)('IE_PROTO');

    module.exports = function (object, names) {
      var O = toIObject(object);
      var i = 0;
      var result = [];
      var key;

      for (key in O) {
        if (key != IE_PROTO) has(O, key) && result.push(key);
      } // Don't enum bug & hidden keys


      while (names.length > i) {
        if (has(O, key = names[i++])) {
          ~arrayIndexOf(result, key) || result.push(key);
        }
      }

      return result;
    };
  }, {
    "102": 102,
    "11": 11,
    "117": 117,
    "41": 41
  }],
  81: [function (_dereq_, module, exports) {
    // 19.1.2.14 / 15.2.3.14 Object.keys(O)
    var $keys = _dereq_(80);

    var enumBugKeys = _dereq_(31);

    module.exports = Object.keys || function keys(O) {
      return $keys(O, enumBugKeys);
    };
  }, {
    "31": 31,
    "80": 80
  }],
  82: [function (_dereq_, module, exports) {
    exports.f = {}.propertyIsEnumerable;
  }, {}],
  83: [function (_dereq_, module, exports) {
    // most Object methods by ES6 should accept primitives
    var $export = _dereq_(33);

    var core = _dereq_(23);

    var fails = _dereq_(35);

    module.exports = function (KEY, exec) {
      var fn = (core.Object || {})[KEY] || Object[KEY];
      var exp = {};
      exp[KEY] = exec(fn);
      $export($export.S + $export.F * fails(function () {
        fn(1);
      }), 'Object', exp);
    };
  }, {
    "23": 23,
    "33": 33,
    "35": 35
  }],
  84: [function (_dereq_, module, exports) {
    var getKeys = _dereq_(81);

    var toIObject = _dereq_(117);

    var isEnum = _dereq_(82).f;

    module.exports = function (isEntries) {
      return function (it) {
        var O = toIObject(it);
        var keys = getKeys(O);
        var length = keys.length;
        var i = 0;
        var result = [];
        var key;

        while (length > i) {
          if (isEnum.call(O, key = keys[i++])) {
            result.push(isEntries ? [key, O[key]] : O[key]);
          }
        }

        return result;
      };
    };
  }, {
    "117": 117,
    "81": 81,
    "82": 82
  }],
  85: [function (_dereq_, module, exports) {
    // all object keys, includes non-enumerable and symbols
    var gOPN = _dereq_(77);

    var gOPS = _dereq_(78);

    var anObject = _dereq_(7);

    var Reflect = _dereq_(40).Reflect;

    module.exports = Reflect && Reflect.ownKeys || function ownKeys(it) {
      var keys = gOPN.f(anObject(it));
      var getSymbols = gOPS.f;
      return getSymbols ? keys.concat(getSymbols(it)) : keys;
    };
  }, {
    "40": 40,
    "7": 7,
    "77": 77,
    "78": 78
  }],
  86: [function (_dereq_, module, exports) {
    var $parseFloat = _dereq_(40).parseFloat;

    var $trim = _dereq_(111).trim;

    module.exports = 1 / $parseFloat(_dereq_(112) + '-0') !== -Infinity ? function parseFloat(str) {
      var string = $trim(String(str), 3);
      var result = $parseFloat(string);
      return result === 0 && string.charAt(0) == '-' ? -0 : result;
    } : $parseFloat;
  }, {
    "111": 111,
    "112": 112,
    "40": 40
  }],
  87: [function (_dereq_, module, exports) {
    var $parseInt = _dereq_(40).parseInt;

    var $trim = _dereq_(111).trim;

    var ws = _dereq_(112);

    var hex = /^[-+]?0[xX]/;
    module.exports = $parseInt(ws + '08') !== 8 || $parseInt(ws + '0x16') !== 22 ? function parseInt(str, radix) {
      var string = $trim(String(str), 3);
      return $parseInt(string, radix >>> 0 || (hex.test(string) ? 16 : 10));
    } : $parseInt;
  }, {
    "111": 111,
    "112": 112,
    "40": 40
  }],
  88: [function (_dereq_, module, exports) {
    'use strict';

    var path = _dereq_(89);

    var invoke = _dereq_(46);

    var aFunction = _dereq_(3);

    module.exports = function () {
      var fn = aFunction(this);
      var length = arguments.length;
      var pargs = Array(length);
      var i = 0;
      var _ = path._;
      var holder = false;

      while (length > i) {
        if ((pargs[i] = arguments[i++]) === _) holder = true;
      }

      return function () {
        var that = this;
        var aLen = arguments.length;
        var j = 0;
        var k = 0;
        var args;
        if (!holder && !aLen) return invoke(fn, pargs, that);
        args = pargs.slice();
        if (holder) for (; length > j; j++) {
          if (args[j] === _) args[j] = arguments[k++];
        }

        while (aLen > k) {
          args.push(arguments[k++]);
        }

        return invoke(fn, args, that);
      };
    };
  }, {
    "3": 3,
    "46": 46,
    "89": 89
  }],
  89: [function (_dereq_, module, exports) {
    module.exports = _dereq_(40);
  }, {
    "40": 40
  }],
  90: [function (_dereq_, module, exports) {
    module.exports = function (exec) {
      try {
        return {
          e: false,
          v: exec()
        };
      } catch (e) {
        return {
          e: true,
          v: e
        };
      }
    };
  }, {}],
  91: [function (_dereq_, module, exports) {
    var newPromiseCapability = _dereq_(69);

    module.exports = function (C, x) {
      var promiseCapability = newPromiseCapability.f(C);
      var resolve = promiseCapability.resolve;
      resolve(x);
      return promiseCapability.promise;
    };
  }, {
    "69": 69
  }],
  92: [function (_dereq_, module, exports) {
    module.exports = function (bitmap, value) {
      return {
        enumerable: !(bitmap & 1),
        configurable: !(bitmap & 2),
        writable: !(bitmap & 4),
        value: value
      };
    };
  }, {}],
  93: [function (_dereq_, module, exports) {
    var redefine = _dereq_(94);

    module.exports = function (target, src, safe) {
      for (var key in src) {
        redefine(target, key, src[key], safe);
      }

      return target;
    };
  }, {
    "94": 94
  }],
  94: [function (_dereq_, module, exports) {
    var global = _dereq_(40);

    var hide = _dereq_(42);

    var has = _dereq_(41);

    var SRC = _dereq_(124)('src');

    var TO_STRING = 'toString';
    var $toString = Function[TO_STRING];
    var TPL = ('' + $toString).split(TO_STRING);

    _dereq_(23).inspectSource = function (it) {
      return $toString.call(it);
    };

    (module.exports = function (O, key, val, safe) {
      var isFunction = typeof val == 'function';
      if (isFunction) has(val, 'name') || hide(val, 'name', key);
      if (O[key] === val) return;
      if (isFunction) has(val, SRC) || hide(val, SRC, O[key] ? '' + O[key] : TPL.join(String(key)));

      if (O === global) {
        O[key] = val;
      } else if (!safe) {
        delete O[key];
        hide(O, key, val);
      } else if (O[key]) {
        O[key] = val;
      } else {
        hide(O, key, val);
      } // add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative

    })(Function.prototype, TO_STRING, function toString() {
      return typeof this == 'function' && this[SRC] || $toString.call(this);
    });
  }, {
    "124": 124,
    "23": 23,
    "40": 40,
    "41": 41,
    "42": 42
  }],
  95: [function (_dereq_, module, exports) {
    module.exports = function (regExp, replace) {
      var replacer = replace === Object(replace) ? function (part) {
        return replace[part];
      } : replace;
      return function (it) {
        return String(it).replace(regExp, replacer);
      };
    };
  }, {}],
  96: [function (_dereq_, module, exports) {
    // 7.2.9 SameValue(x, y)
    module.exports = Object.is || function is(x, y) {
      // eslint-disable-next-line no-self-compare
      return x === y ? x !== 0 || 1 / x === 1 / y : x != x && y != y;
    };
  }, {}],
  97: [function (_dereq_, module, exports) {
    'use strict'; // https://tc39.github.io/proposal-setmap-offrom/

    var $export = _dereq_(33);

    var aFunction = _dereq_(3);

    var ctx = _dereq_(25);

    var forOf = _dereq_(39);

    module.exports = function (COLLECTION) {
      $export($export.S, COLLECTION, {
        from: function from(source
        /* , mapFn, thisArg */
        ) {
          var mapFn = arguments[1];
          var mapping, A, n, cb;
          aFunction(this);
          mapping = mapFn !== undefined;
          if (mapping) aFunction(mapFn);
          if (source == undefined) return new this();
          A = [];

          if (mapping) {
            n = 0;
            cb = ctx(mapFn, arguments[2], 2);
            forOf(source, false, function (nextItem) {
              A.push(cb(nextItem, n++));
            });
          } else {
            forOf(source, false, A.push, A);
          }

          return new this(A);
        }
      });
    };
  }, {
    "25": 25,
    "3": 3,
    "33": 33,
    "39": 39
  }],
  98: [function (_dereq_, module, exports) {
    'use strict'; // https://tc39.github.io/proposal-setmap-offrom/

    var $export = _dereq_(33);

    module.exports = function (COLLECTION) {
      $export($export.S, COLLECTION, {
        of: function of() {
          var length = arguments.length;
          var A = Array(length);

          while (length--) {
            A[length] = arguments[length];
          }

          return new this(A);
        }
      });
    };
  }, {
    "33": 33
  }],
  99: [function (_dereq_, module, exports) {
    // Works with __proto__ only. Old v8 can't work with null proto objects.

    /* eslint-disable no-proto */
    var isObject = _dereq_(51);

    var anObject = _dereq_(7);

    var check = function check(O, proto) {
      anObject(O);
      if (!isObject(proto) && proto !== null) throw TypeError(proto + ": can't set as prototype!");
    };

    module.exports = {
      set: Object.setPrototypeOf || ('__proto__' in {} ? // eslint-disable-line
      function (test, buggy, set) {
        try {
          set = _dereq_(25)(Function.call, _dereq_(75).f(Object.prototype, '__proto__').set, 2);
          set(test, []);
          buggy = !(test instanceof Array);
        } catch (e) {
          buggy = true;
        }

        return function setPrototypeOf(O, proto) {
          check(O, proto);
          if (buggy) O.__proto__ = proto;else set(O, proto);
          return O;
        };
      }({}, false) : undefined),
      check: check
    };
  }, {
    "25": 25,
    "51": 51,
    "7": 7,
    "75": 75
  }],
  100: [function (_dereq_, module, exports) {
    'use strict';

    var global = _dereq_(40);

    var dP = _dereq_(72);

    var DESCRIPTORS = _dereq_(29);

    var SPECIES = _dereq_(128)('species');

    module.exports = function (KEY) {
      var C = global[KEY];
      if (DESCRIPTORS && C && !C[SPECIES]) dP.f(C, SPECIES, {
        configurable: true,
        get: function get() {
          return this;
        }
      });
    };
  }, {
    "128": 128,
    "29": 29,
    "40": 40,
    "72": 72
  }],
  101: [function (_dereq_, module, exports) {
    var def = _dereq_(72).f;

    var has = _dereq_(41);

    var TAG = _dereq_(128)('toStringTag');

    module.exports = function (it, tag, stat) {
      if (it && !has(it = stat ? it : it.prototype, TAG)) def(it, TAG, {
        configurable: true,
        value: tag
      });
    };
  }, {
    "128": 128,
    "41": 41,
    "72": 72
  }],
  102: [function (_dereq_, module, exports) {
    var shared = _dereq_(103)('keys');

    var uid = _dereq_(124);

    module.exports = function (key) {
      return shared[key] || (shared[key] = uid(key));
    };
  }, {
    "103": 103,
    "124": 124
  }],
  103: [function (_dereq_, module, exports) {
    var global = _dereq_(40);

    var SHARED = '__core-js_shared__';
    var store = global[SHARED] || (global[SHARED] = {});

    module.exports = function (key) {
      return store[key] || (store[key] = {});
    };
  }, {
    "40": 40
  }],
  104: [function (_dereq_, module, exports) {
    // 7.3.20 SpeciesConstructor(O, defaultConstructor)
    var anObject = _dereq_(7);

    var aFunction = _dereq_(3);

    var SPECIES = _dereq_(128)('species');

    module.exports = function (O, D) {
      var C = anObject(O).constructor;
      var S;
      return C === undefined || (S = anObject(C)[SPECIES]) == undefined ? D : aFunction(S);
    };
  }, {
    "128": 128,
    "3": 3,
    "7": 7
  }],
  105: [function (_dereq_, module, exports) {
    'use strict';

    var fails = _dereq_(35);

    module.exports = function (method, arg) {
      return !!method && fails(function () {
        // eslint-disable-next-line no-useless-call
        arg ? method.call(null, function () {
          /* empty */
        }, 1) : method.call(null);
      });
    };
  }, {
    "35": 35
  }],
  106: [function (_dereq_, module, exports) {
    var toInteger = _dereq_(116);

    var defined = _dereq_(28); // true  -> String#at
    // false -> String#codePointAt


    module.exports = function (TO_STRING) {
      return function (that, pos) {
        var s = String(defined(that));
        var i = toInteger(pos);
        var l = s.length;
        var a, b;
        if (i < 0 || i >= l) return TO_STRING ? '' : undefined;
        a = s.charCodeAt(i);
        return a < 0xd800 || a > 0xdbff || i + 1 === l || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff ? TO_STRING ? s.charAt(i) : a : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;
      };
    };
  }, {
    "116": 116,
    "28": 28
  }],
  107: [function (_dereq_, module, exports) {
    // helper for String#{startsWith, endsWith, includes}
    var isRegExp = _dereq_(52);

    var defined = _dereq_(28);

    module.exports = function (that, searchString, NAME) {
      if (isRegExp(searchString)) throw TypeError('String#' + NAME + " doesn't accept regex!");
      return String(defined(that));
    };
  }, {
    "28": 28,
    "52": 52
  }],
  108: [function (_dereq_, module, exports) {
    var $export = _dereq_(33);

    var fails = _dereq_(35);

    var defined = _dereq_(28);

    var quot = /"/g; // B.2.3.2.1 CreateHTML(string, tag, attribute, value)

    var createHTML = function createHTML(string, tag, attribute, value) {
      var S = String(defined(string));
      var p1 = '<' + tag;
      if (attribute !== '') p1 += ' ' + attribute + '="' + String(value).replace(quot, '&quot;') + '"';
      return p1 + '>' + S + '</' + tag + '>';
    };

    module.exports = function (NAME, exec) {
      var O = {};
      O[NAME] = exec(createHTML);
      $export($export.P + $export.F * fails(function () {
        var test = ''[NAME]('"');
        return test !== test.toLowerCase() || test.split('"').length > 3;
      }), 'String', O);
    };
  }, {
    "28": 28,
    "33": 33,
    "35": 35
  }],
  109: [function (_dereq_, module, exports) {
    // https://github.com/tc39/proposal-string-pad-start-end
    var toLength = _dereq_(118);

    var repeat = _dereq_(110);

    var defined = _dereq_(28);

    module.exports = function (that, maxLength, fillString, left) {
      var S = String(defined(that));
      var stringLength = S.length;
      var fillStr = fillString === undefined ? ' ' : String(fillString);
      var intMaxLength = toLength(maxLength);
      if (intMaxLength <= stringLength || fillStr == '') return S;
      var fillLen = intMaxLength - stringLength;
      var stringFiller = repeat.call(fillStr, Math.ceil(fillLen / fillStr.length));
      if (stringFiller.length > fillLen) stringFiller = stringFiller.slice(0, fillLen);
      return left ? stringFiller + S : S + stringFiller;
    };
  }, {
    "110": 110,
    "118": 118,
    "28": 28
  }],
  110: [function (_dereq_, module, exports) {
    'use strict';

    var toInteger = _dereq_(116);

    var defined = _dereq_(28);

    module.exports = function repeat(count) {
      var str = String(defined(this));
      var res = '';
      var n = toInteger(count);
      if (n < 0 || n == Infinity) throw RangeError("Count can't be negative");

      for (; n > 0; (n >>>= 1) && (str += str)) {
        if (n & 1) res += str;
      }

      return res;
    };
  }, {
    "116": 116,
    "28": 28
  }],
  111: [function (_dereq_, module, exports) {
    var $export = _dereq_(33);

    var defined = _dereq_(28);

    var fails = _dereq_(35);

    var spaces = _dereq_(112);

    var space = '[' + spaces + ']';
    var non = "\u200B\x85";
    var ltrim = RegExp('^' + space + space + '*');
    var rtrim = RegExp(space + space + '*$');

    var exporter = function exporter(KEY, exec, ALIAS) {
      var exp = {};
      var FORCE = fails(function () {
        return !!spaces[KEY]() || non[KEY]() != non;
      });
      var fn = exp[KEY] = FORCE ? exec(trim) : spaces[KEY];
      if (ALIAS) exp[ALIAS] = fn;
      $export($export.P + $export.F * FORCE, 'String', exp);
    }; // 1 -> String#trimLeft
    // 2 -> String#trimRight
    // 3 -> String#trim


    var trim = exporter.trim = function (string, TYPE) {
      string = String(defined(string));
      if (TYPE & 1) string = string.replace(ltrim, '');
      if (TYPE & 2) string = string.replace(rtrim, '');
      return string;
    };

    module.exports = exporter;
  }, {
    "112": 112,
    "28": 28,
    "33": 33,
    "35": 35
  }],
  112: [function (_dereq_, module, exports) {
    module.exports = "\t\n\x0B\f\r \xA0\u1680\u180E\u2000\u2001\u2002\u2003" + "\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028\u2029\uFEFF";
  }, {}],
  113: [function (_dereq_, module, exports) {
    var ctx = _dereq_(25);

    var invoke = _dereq_(46);

    var html = _dereq_(43);

    var cel = _dereq_(30);

    var global = _dereq_(40);

    var process = global.process;
    var setTask = global.setImmediate;
    var clearTask = global.clearImmediate;
    var MessageChannel = global.MessageChannel;
    var Dispatch = global.Dispatch;
    var counter = 0;
    var queue = {};
    var ONREADYSTATECHANGE = 'onreadystatechange';
    var defer, channel, port;

    var run = function run() {
      var id = +this; // eslint-disable-next-line no-prototype-builtins

      if (queue.hasOwnProperty(id)) {
        var fn = queue[id];
        delete queue[id];
        fn();
      }
    };

    var listener = function listener(event) {
      run.call(event.data);
    }; // Node.js 0.9+ & IE10+ has setImmediate, otherwise:


    if (!setTask || !clearTask) {
      setTask = function setImmediate(fn) {
        var args = [];
        var i = 1;

        while (arguments.length > i) {
          args.push(arguments[i++]);
        }

        queue[++counter] = function () {
          // eslint-disable-next-line no-new-func
          invoke(typeof fn == 'function' ? fn : Function(fn), args);
        };

        defer(counter);
        return counter;
      };

      clearTask = function clearImmediate(id) {
        delete queue[id];
      }; // Node.js 0.8-


      if (_dereq_(18)(process) == 'process') {
        defer = function defer(id) {
          process.nextTick(ctx(run, id, 1));
        }; // Sphere (JS game engine) Dispatch API

      } else if (Dispatch && Dispatch.now) {
        defer = function defer(id) {
          Dispatch.now(ctx(run, id, 1));
        }; // Browsers with MessageChannel, includes WebWorkers

      } else if (MessageChannel) {
        channel = new MessageChannel();
        port = channel.port2;
        channel.port1.onmessage = listener;
        defer = ctx(port.postMessage, port, 1); // Browsers with postMessage, skip WebWorkers
        // IE8 has postMessage, but it's sync & typeof its postMessage is 'object'
      } else if (global.addEventListener && typeof postMessage == 'function' && !global.importScripts) {
        defer = function defer(id) {
          global.postMessage(id + '', '*');
        };

        global.addEventListener('message', listener, false); // IE8-
      } else if (ONREADYSTATECHANGE in cel('script')) {
        defer = function defer(id) {
          html.appendChild(cel('script'))[ONREADYSTATECHANGE] = function () {
            html.removeChild(this);
            run.call(id);
          };
        }; // Rest old browsers

      } else {
        defer = function defer(id) {
          setTimeout(ctx(run, id, 1), 0);
        };
      }
    }

    module.exports = {
      set: setTask,
      clear: clearTask
    };
  }, {
    "18": 18,
    "25": 25,
    "30": 30,
    "40": 40,
    "43": 43,
    "46": 46
  }],
  114: [function (_dereq_, module, exports) {
    var toInteger = _dereq_(116);

    var max = Math.max;
    var min = Math.min;

    module.exports = function (index, length) {
      index = toInteger(index);
      return index < 0 ? max(index + length, 0) : min(index, length);
    };
  }, {
    "116": 116
  }],
  115: [function (_dereq_, module, exports) {
    // https://tc39.github.io/ecma262/#sec-toindex
    var toInteger = _dereq_(116);

    var toLength = _dereq_(118);

    module.exports = function (it) {
      if (it === undefined) return 0;
      var number = toInteger(it);
      var length = toLength(number);
      if (number !== length) throw RangeError('Wrong length!');
      return length;
    };
  }, {
    "116": 116,
    "118": 118
  }],
  116: [function (_dereq_, module, exports) {
    // 7.1.4 ToInteger
    var ceil = Math.ceil;
    var floor = Math.floor;

    module.exports = function (it) {
      return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
    };
  }, {}],
  117: [function (_dereq_, module, exports) {
    // to indexed object, toObject with fallback for non-array-like ES3 strings
    var IObject = _dereq_(47);

    var defined = _dereq_(28);

    module.exports = function (it) {
      return IObject(defined(it));
    };
  }, {
    "28": 28,
    "47": 47
  }],
  118: [function (_dereq_, module, exports) {
    // 7.1.15 ToLength
    var toInteger = _dereq_(116);

    var min = Math.min;

    module.exports = function (it) {
      return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
    };
  }, {
    "116": 116
  }],
  119: [function (_dereq_, module, exports) {
    // 7.1.13 ToObject(argument)
    var defined = _dereq_(28);

    module.exports = function (it) {
      return Object(defined(it));
    };
  }, {
    "28": 28
  }],
  120: [function (_dereq_, module, exports) {
    // 7.1.1 ToPrimitive(input [, PreferredType])
    var isObject = _dereq_(51); // instead of the ES6 spec version, we didn't implement @@toPrimitive case
    // and the second argument - flag - preferred type is a string


    module.exports = function (it, S) {
      if (!isObject(it)) return it;
      var fn, val;
      if (S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
      if (typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it))) return val;
      if (!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
      throw TypeError("Can't convert object to primitive value");
    };
  }, {
    "51": 51
  }],
  121: [function (_dereq_, module, exports) {
    'use strict';

    if (_dereq_(29)) {
      var LIBRARY = _dereq_(60);

      var global = _dereq_(40);

      var fails = _dereq_(35);

      var $export = _dereq_(33);

      var $typed = _dereq_(123);

      var $buffer = _dereq_(122);

      var ctx = _dereq_(25);

      var anInstance = _dereq_(6);

      var propertyDesc = _dereq_(92);

      var hide = _dereq_(42);

      var redefineAll = _dereq_(93);

      var toInteger = _dereq_(116);

      var toLength = _dereq_(118);

      var toIndex = _dereq_(115);

      var toAbsoluteIndex = _dereq_(114);

      var toPrimitive = _dereq_(120);

      var has = _dereq_(41);

      var classof = _dereq_(17);

      var isObject = _dereq_(51);

      var toObject = _dereq_(119);

      var isArrayIter = _dereq_(48);

      var create = _dereq_(71);

      var getPrototypeOf = _dereq_(79);

      var gOPN = _dereq_(77).f;

      var getIterFn = _dereq_(129);

      var uid = _dereq_(124);

      var wks = _dereq_(128);

      var createArrayMethod = _dereq_(12);

      var createArrayIncludes = _dereq_(11);

      var speciesConstructor = _dereq_(104);

      var ArrayIterators = _dereq_(141);

      var Iterators = _dereq_(58);

      var $iterDetect = _dereq_(56);

      var setSpecies = _dereq_(100);

      var arrayFill = _dereq_(9);

      var arrayCopyWithin = _dereq_(8);

      var $DP = _dereq_(72);

      var $GOPD = _dereq_(75);

      var dP = $DP.f;
      var gOPD = $GOPD.f;
      var RangeError = global.RangeError;
      var TypeError = global.TypeError;
      var Uint8Array = global.Uint8Array;
      var ARRAY_BUFFER = 'ArrayBuffer';
      var SHARED_BUFFER = 'Shared' + ARRAY_BUFFER;
      var BYTES_PER_ELEMENT = 'BYTES_PER_ELEMENT';
      var PROTOTYPE = 'prototype';
      var ArrayProto = Array[PROTOTYPE];
      var $ArrayBuffer = $buffer.ArrayBuffer;
      var $DataView = $buffer.DataView;
      var arrayForEach = createArrayMethod(0);
      var arrayFilter = createArrayMethod(2);
      var arraySome = createArrayMethod(3);
      var arrayEvery = createArrayMethod(4);
      var arrayFind = createArrayMethod(5);
      var arrayFindIndex = createArrayMethod(6);
      var arrayIncludes = createArrayIncludes(true);
      var arrayIndexOf = createArrayIncludes(false);
      var arrayValues = ArrayIterators.values;
      var arrayKeys = ArrayIterators.keys;
      var arrayEntries = ArrayIterators.entries;
      var arrayLastIndexOf = ArrayProto.lastIndexOf;
      var arrayReduce = ArrayProto.reduce;
      var arrayReduceRight = ArrayProto.reduceRight;
      var arrayJoin = ArrayProto.join;
      var arraySort = ArrayProto.sort;
      var arraySlice = ArrayProto.slice;
      var arrayToString = ArrayProto.toString;
      var arrayToLocaleString = ArrayProto.toLocaleString;
      var ITERATOR = wks('iterator');
      var TAG = wks('toStringTag');
      var TYPED_CONSTRUCTOR = uid('typed_constructor');
      var DEF_CONSTRUCTOR = uid('def_constructor');
      var ALL_CONSTRUCTORS = $typed.CONSTR;
      var TYPED_ARRAY = $typed.TYPED;
      var VIEW = $typed.VIEW;
      var WRONG_LENGTH = 'Wrong length!';
      var $map = createArrayMethod(1, function (O, length) {
        return allocate(speciesConstructor(O, O[DEF_CONSTRUCTOR]), length);
      });
      var LITTLE_ENDIAN = fails(function () {
        // eslint-disable-next-line no-undef
        return new Uint8Array(new Uint16Array([1]).buffer)[0] === 1;
      });
      var FORCED_SET = !!Uint8Array && !!Uint8Array[PROTOTYPE].set && fails(function () {
        new Uint8Array(1).set({});
      });

      var toOffset = function toOffset(it, BYTES) {
        var offset = toInteger(it);
        if (offset < 0 || offset % BYTES) throw RangeError('Wrong offset!');
        return offset;
      };

      var validate = function validate(it) {
        if (isObject(it) && TYPED_ARRAY in it) return it;
        throw TypeError(it + ' is not a typed array!');
      };

      var allocate = function allocate(C, length) {
        if (!(isObject(C) && TYPED_CONSTRUCTOR in C)) {
          throw TypeError('It is not a typed array constructor!');
        }

        return new C(length);
      };

      var speciesFromList = function speciesFromList(O, list) {
        return fromList(speciesConstructor(O, O[DEF_CONSTRUCTOR]), list);
      };

      var fromList = function fromList(C, list) {
        var index = 0;
        var length = list.length;
        var result = allocate(C, length);

        while (length > index) {
          result[index] = list[index++];
        }

        return result;
      };

      var addGetter = function addGetter(it, key, internal) {
        dP(it, key, {
          get: function get() {
            return this._d[internal];
          }
        });
      };

      var $from = function from(source
      /* , mapfn, thisArg */
      ) {
        var O = toObject(source);
        var aLen = arguments.length;
        var mapfn = aLen > 1 ? arguments[1] : undefined;
        var mapping = mapfn !== undefined;
        var iterFn = getIterFn(O);
        var i, length, values, result, step, iterator;

        if (iterFn != undefined && !isArrayIter(iterFn)) {
          for (iterator = iterFn.call(O), values = [], i = 0; !(step = iterator.next()).done; i++) {
            values.push(step.value);
          }

          O = values;
        }

        if (mapping && aLen > 2) mapfn = ctx(mapfn, arguments[2], 2);

        for (i = 0, length = toLength(O.length), result = allocate(this, length); length > i; i++) {
          result[i] = mapping ? mapfn(O[i], i) : O[i];
        }

        return result;
      };

      var $of = function of() {
        var index = 0;
        var length = arguments.length;
        var result = allocate(this, length);

        while (length > index) {
          result[index] = arguments[index++];
        }

        return result;
      }; // iOS Safari 6.x fails here


      var TO_LOCALE_BUG = !!Uint8Array && fails(function () {
        arrayToLocaleString.call(new Uint8Array(1));
      });

      var $toLocaleString = function toLocaleString() {
        return arrayToLocaleString.apply(TO_LOCALE_BUG ? arraySlice.call(validate(this)) : validate(this), arguments);
      };

      var proto = {
        copyWithin: function copyWithin(target, start
        /* , end */
        ) {
          return arrayCopyWithin.call(validate(this), target, start, arguments.length > 2 ? arguments[2] : undefined);
        },
        every: function every(callbackfn
        /* , thisArg */
        ) {
          return arrayEvery(validate(this), callbackfn, arguments.length > 1 ? arguments[1] : undefined);
        },
        fill: function fill(value
        /* , start, end */
        ) {
          // eslint-disable-line no-unused-vars
          return arrayFill.apply(validate(this), arguments);
        },
        filter: function filter(callbackfn
        /* , thisArg */
        ) {
          return speciesFromList(this, arrayFilter(validate(this), callbackfn, arguments.length > 1 ? arguments[1] : undefined));
        },
        find: function find(predicate
        /* , thisArg */
        ) {
          return arrayFind(validate(this), predicate, arguments.length > 1 ? arguments[1] : undefined);
        },
        findIndex: function findIndex(predicate
        /* , thisArg */
        ) {
          return arrayFindIndex(validate(this), predicate, arguments.length > 1 ? arguments[1] : undefined);
        },
        forEach: function forEach(callbackfn
        /* , thisArg */
        ) {
          arrayForEach(validate(this), callbackfn, arguments.length > 1 ? arguments[1] : undefined);
        },
        indexOf: function indexOf(searchElement
        /* , fromIndex */
        ) {
          return arrayIndexOf(validate(this), searchElement, arguments.length > 1 ? arguments[1] : undefined);
        },
        includes: function includes(searchElement
        /* , fromIndex */
        ) {
          return arrayIncludes(validate(this), searchElement, arguments.length > 1 ? arguments[1] : undefined);
        },
        join: function join(separator) {
          // eslint-disable-line no-unused-vars
          return arrayJoin.apply(validate(this), arguments);
        },
        lastIndexOf: function lastIndexOf(searchElement
        /* , fromIndex */
        ) {
          // eslint-disable-line no-unused-vars
          return arrayLastIndexOf.apply(validate(this), arguments);
        },
        map: function map(mapfn
        /* , thisArg */
        ) {
          return $map(validate(this), mapfn, arguments.length > 1 ? arguments[1] : undefined);
        },
        reduce: function reduce(callbackfn
        /* , initialValue */
        ) {
          // eslint-disable-line no-unused-vars
          return arrayReduce.apply(validate(this), arguments);
        },
        reduceRight: function reduceRight(callbackfn
        /* , initialValue */
        ) {
          // eslint-disable-line no-unused-vars
          return arrayReduceRight.apply(validate(this), arguments);
        },
        reverse: function reverse() {
          var that = this;
          var length = validate(that).length;
          var middle = Math.floor(length / 2);
          var index = 0;
          var value;

          while (index < middle) {
            value = that[index];
            that[index++] = that[--length];
            that[length] = value;
          }

          return that;
        },
        some: function some(callbackfn
        /* , thisArg */
        ) {
          return arraySome(validate(this), callbackfn, arguments.length > 1 ? arguments[1] : undefined);
        },
        sort: function sort(comparefn) {
          return arraySort.call(validate(this), comparefn);
        },
        subarray: function subarray(begin, end) {
          var O = validate(this);
          var length = O.length;
          var $begin = toAbsoluteIndex(begin, length);
          return new (speciesConstructor(O, O[DEF_CONSTRUCTOR]))(O.buffer, O.byteOffset + $begin * O.BYTES_PER_ELEMENT, toLength((end === undefined ? length : toAbsoluteIndex(end, length)) - $begin));
        }
      };

      var $slice = function slice(start, end) {
        return speciesFromList(this, arraySlice.call(validate(this), start, end));
      };

      var $set = function set(arrayLike
      /* , offset */
      ) {
        validate(this);
        var offset = toOffset(arguments[1], 1);
        var length = this.length;
        var src = toObject(arrayLike);
        var len = toLength(src.length);
        var index = 0;
        if (len + offset > length) throw RangeError(WRONG_LENGTH);

        while (index < len) {
          this[offset + index] = src[index++];
        }
      };

      var $iterators = {
        entries: function entries() {
          return arrayEntries.call(validate(this));
        },
        keys: function keys() {
          return arrayKeys.call(validate(this));
        },
        values: function values() {
          return arrayValues.call(validate(this));
        }
      };

      var isTAIndex = function isTAIndex(target, key) {
        return isObject(target) && target[TYPED_ARRAY] && _typeof(key) != 'symbol' && key in target && String(+key) == String(key);
      };

      var $getDesc = function getOwnPropertyDescriptor(target, key) {
        return isTAIndex(target, key = toPrimitive(key, true)) ? propertyDesc(2, target[key]) : gOPD(target, key);
      };

      var $setDesc = function defineProperty(target, key, desc) {
        if (isTAIndex(target, key = toPrimitive(key, true)) && isObject(desc) && has(desc, 'value') && !has(desc, 'get') && !has(desc, 'set') // TODO: add validation descriptor w/o calling accessors
        && !desc.configurable && (!has(desc, 'writable') || desc.writable) && (!has(desc, 'enumerable') || desc.enumerable)) {
          target[key] = desc.value;
          return target;
        }

        return dP(target, key, desc);
      };

      if (!ALL_CONSTRUCTORS) {
        $GOPD.f = $getDesc;
        $DP.f = $setDesc;
      }

      $export($export.S + $export.F * !ALL_CONSTRUCTORS, 'Object', {
        getOwnPropertyDescriptor: $getDesc,
        defineProperty: $setDesc
      });

      if (fails(function () {
        arrayToString.call({});
      })) {
        arrayToString = arrayToLocaleString = function toString() {
          return arrayJoin.call(this);
        };
      }

      var $TypedArrayPrototype$ = redefineAll({}, proto);
      redefineAll($TypedArrayPrototype$, $iterators);
      hide($TypedArrayPrototype$, ITERATOR, $iterators.values);
      redefineAll($TypedArrayPrototype$, {
        slice: $slice,
        set: $set,
        constructor: function constructor() {
          /* noop */
        },
        toString: arrayToString,
        toLocaleString: $toLocaleString
      });
      addGetter($TypedArrayPrototype$, 'buffer', 'b');
      addGetter($TypedArrayPrototype$, 'byteOffset', 'o');
      addGetter($TypedArrayPrototype$, 'byteLength', 'l');
      addGetter($TypedArrayPrototype$, 'length', 'e');
      dP($TypedArrayPrototype$, TAG, {
        get: function get() {
          return this[TYPED_ARRAY];
        }
      }); // eslint-disable-next-line max-statements

      module.exports = function (KEY, BYTES, wrapper, CLAMPED) {
        CLAMPED = !!CLAMPED;
        var NAME = KEY + (CLAMPED ? 'Clamped' : '') + 'Array';
        var GETTER = 'get' + KEY;
        var SETTER = 'set' + KEY;
        var TypedArray = global[NAME];
        var Base = TypedArray || {};
        var TAC = TypedArray && getPrototypeOf(TypedArray);
        var FORCED = !TypedArray || !$typed.ABV;
        var O = {};
        var TypedArrayPrototype = TypedArray && TypedArray[PROTOTYPE];

        var getter = function getter(that, index) {
          var data = that._d;
          return data.v[GETTER](index * BYTES + data.o, LITTLE_ENDIAN);
        };

        var setter = function setter(that, index, value) {
          var data = that._d;
          if (CLAMPED) value = (value = Math.round(value)) < 0 ? 0 : value > 0xff ? 0xff : value & 0xff;
          data.v[SETTER](index * BYTES + data.o, value, LITTLE_ENDIAN);
        };

        var addElement = function addElement(that, index) {
          dP(that, index, {
            get: function get() {
              return getter(this, index);
            },
            set: function set(value) {
              return setter(this, index, value);
            },
            enumerable: true
          });
        };

        if (FORCED) {
          TypedArray = wrapper(function (that, data, $offset, $length) {
            anInstance(that, TypedArray, NAME, '_d');
            var index = 0;
            var offset = 0;
            var buffer, byteLength, length, klass;

            if (!isObject(data)) {
              length = toIndex(data);
              byteLength = length * BYTES;
              buffer = new $ArrayBuffer(byteLength);
            } else if (data instanceof $ArrayBuffer || (klass = classof(data)) == ARRAY_BUFFER || klass == SHARED_BUFFER) {
              buffer = data;
              offset = toOffset($offset, BYTES);
              var $len = data.byteLength;

              if ($length === undefined) {
                if ($len % BYTES) throw RangeError(WRONG_LENGTH);
                byteLength = $len - offset;
                if (byteLength < 0) throw RangeError(WRONG_LENGTH);
              } else {
                byteLength = toLength($length) * BYTES;
                if (byteLength + offset > $len) throw RangeError(WRONG_LENGTH);
              }

              length = byteLength / BYTES;
            } else if (TYPED_ARRAY in data) {
              return fromList(TypedArray, data);
            } else {
              return $from.call(TypedArray, data);
            }

            hide(that, '_d', {
              b: buffer,
              o: offset,
              l: byteLength,
              e: length,
              v: new $DataView(buffer)
            });

            while (index < length) {
              addElement(that, index++);
            }
          });
          TypedArrayPrototype = TypedArray[PROTOTYPE] = create($TypedArrayPrototype$);
          hide(TypedArrayPrototype, 'constructor', TypedArray);
        } else if (!fails(function () {
          TypedArray(1);
        }) || !fails(function () {
          new TypedArray(-1); // eslint-disable-line no-new
        }) || !$iterDetect(function (iter) {
          new TypedArray(); // eslint-disable-line no-new

          new TypedArray(null); // eslint-disable-line no-new

          new TypedArray(1.5); // eslint-disable-line no-new

          new TypedArray(iter); // eslint-disable-line no-new
        }, true)) {
          TypedArray = wrapper(function (that, data, $offset, $length) {
            anInstance(that, TypedArray, NAME);
            var klass; // `ws` module bug, temporarily remove validation length for Uint8Array
            // https://github.com/websockets/ws/pull/645

            if (!isObject(data)) return new Base(toIndex(data));

            if (data instanceof $ArrayBuffer || (klass = classof(data)) == ARRAY_BUFFER || klass == SHARED_BUFFER) {
              return $length !== undefined ? new Base(data, toOffset($offset, BYTES), $length) : $offset !== undefined ? new Base(data, toOffset($offset, BYTES)) : new Base(data);
            }

            if (TYPED_ARRAY in data) return fromList(TypedArray, data);
            return $from.call(TypedArray, data);
          });
          arrayForEach(TAC !== Function.prototype ? gOPN(Base).concat(gOPN(TAC)) : gOPN(Base), function (key) {
            if (!(key in TypedArray)) hide(TypedArray, key, Base[key]);
          });
          TypedArray[PROTOTYPE] = TypedArrayPrototype;
          if (!LIBRARY) TypedArrayPrototype.constructor = TypedArray;
        }

        var $nativeIterator = TypedArrayPrototype[ITERATOR];
        var CORRECT_ITER_NAME = !!$nativeIterator && ($nativeIterator.name == 'values' || $nativeIterator.name == undefined);
        var $iterator = $iterators.values;
        hide(TypedArray, TYPED_CONSTRUCTOR, true);
        hide(TypedArrayPrototype, TYPED_ARRAY, NAME);
        hide(TypedArrayPrototype, VIEW, true);
        hide(TypedArrayPrototype, DEF_CONSTRUCTOR, TypedArray);

        if (CLAMPED ? new TypedArray(1)[TAG] != NAME : !(TAG in TypedArrayPrototype)) {
          dP(TypedArrayPrototype, TAG, {
            get: function get() {
              return NAME;
            }
          });
        }

        O[NAME] = TypedArray;
        $export($export.G + $export.W + $export.F * (TypedArray != Base), O);
        $export($export.S, NAME, {
          BYTES_PER_ELEMENT: BYTES
        });
        $export($export.S + $export.F * fails(function () {
          Base.of.call(TypedArray, 1);
        }), NAME, {
          from: $from,
          of: $of
        });
        if (!(BYTES_PER_ELEMENT in TypedArrayPrototype)) hide(TypedArrayPrototype, BYTES_PER_ELEMENT, BYTES);
        $export($export.P, NAME, proto);
        setSpecies(NAME);
        $export($export.P + $export.F * FORCED_SET, NAME, {
          set: $set
        });
        $export($export.P + $export.F * !CORRECT_ITER_NAME, NAME, $iterators);
        if (!LIBRARY && TypedArrayPrototype.toString != arrayToString) TypedArrayPrototype.toString = arrayToString;
        $export($export.P + $export.F * fails(function () {
          new TypedArray(1).slice();
        }), NAME, {
          slice: $slice
        });
        $export($export.P + $export.F * (fails(function () {
          return [1, 2].toLocaleString() != new TypedArray([1, 2]).toLocaleString();
        }) || !fails(function () {
          TypedArrayPrototype.toLocaleString.call([1, 2]);
        })), NAME, {
          toLocaleString: $toLocaleString
        });
        Iterators[NAME] = CORRECT_ITER_NAME ? $nativeIterator : $iterator;
        if (!LIBRARY && !CORRECT_ITER_NAME) hide(TypedArrayPrototype, ITERATOR, $iterator);
      };
    } else module.exports = function () {
      /* empty */
    };
  }, {
    "100": 100,
    "104": 104,
    "11": 11,
    "114": 114,
    "115": 115,
    "116": 116,
    "118": 118,
    "119": 119,
    "12": 12,
    "120": 120,
    "122": 122,
    "123": 123,
    "124": 124,
    "128": 128,
    "129": 129,
    "141": 141,
    "17": 17,
    "25": 25,
    "29": 29,
    "33": 33,
    "35": 35,
    "40": 40,
    "41": 41,
    "42": 42,
    "48": 48,
    "51": 51,
    "56": 56,
    "58": 58,
    "6": 6,
    "60": 60,
    "71": 71,
    "72": 72,
    "75": 75,
    "77": 77,
    "79": 79,
    "8": 8,
    "9": 9,
    "92": 92,
    "93": 93
  }],
  122: [function (_dereq_, module, exports) {
    'use strict';

    var global = _dereq_(40);

    var DESCRIPTORS = _dereq_(29);

    var LIBRARY = _dereq_(60);

    var $typed = _dereq_(123);

    var hide = _dereq_(42);

    var redefineAll = _dereq_(93);

    var fails = _dereq_(35);

    var anInstance = _dereq_(6);

    var toInteger = _dereq_(116);

    var toLength = _dereq_(118);

    var toIndex = _dereq_(115);

    var gOPN = _dereq_(77).f;

    var dP = _dereq_(72).f;

    var arrayFill = _dereq_(9);

    var setToStringTag = _dereq_(101);

    var ARRAY_BUFFER = 'ArrayBuffer';
    var DATA_VIEW = 'DataView';
    var PROTOTYPE = 'prototype';
    var WRONG_LENGTH = 'Wrong length!';
    var WRONG_INDEX = 'Wrong index!';
    var $ArrayBuffer = global[ARRAY_BUFFER];
    var $DataView = global[DATA_VIEW];
    var Math = global.Math;
    var RangeError = global.RangeError; // eslint-disable-next-line no-shadow-restricted-names

    var Infinity = global.Infinity;
    var BaseBuffer = $ArrayBuffer;
    var abs = Math.abs;
    var pow = Math.pow;
    var floor = Math.floor;
    var log = Math.log;
    var LN2 = Math.LN2;
    var BUFFER = 'buffer';
    var BYTE_LENGTH = 'byteLength';
    var BYTE_OFFSET = 'byteOffset';
    var $BUFFER = DESCRIPTORS ? '_b' : BUFFER;
    var $LENGTH = DESCRIPTORS ? '_l' : BYTE_LENGTH;
    var $OFFSET = DESCRIPTORS ? '_o' : BYTE_OFFSET; // IEEE754 conversions based on https://github.com/feross/ieee754

    function packIEEE754(value, mLen, nBytes) {
      var buffer = Array(nBytes);
      var eLen = nBytes * 8 - mLen - 1;
      var eMax = (1 << eLen) - 1;
      var eBias = eMax >> 1;
      var rt = mLen === 23 ? pow(2, -24) - pow(2, -77) : 0;
      var i = 0;
      var s = value < 0 || value === 0 && 1 / value < 0 ? 1 : 0;
      var e, m, c;
      value = abs(value); // eslint-disable-next-line no-self-compare

      if (value != value || value === Infinity) {
        // eslint-disable-next-line no-self-compare
        m = value != value ? 1 : 0;
        e = eMax;
      } else {
        e = floor(log(value) / LN2);

        if (value * (c = pow(2, -e)) < 1) {
          e--;
          c *= 2;
        }

        if (e + eBias >= 1) {
          value += rt / c;
        } else {
          value += rt * pow(2, 1 - eBias);
        }

        if (value * c >= 2) {
          e++;
          c /= 2;
        }

        if (e + eBias >= eMax) {
          m = 0;
          e = eMax;
        } else if (e + eBias >= 1) {
          m = (value * c - 1) * pow(2, mLen);
          e = e + eBias;
        } else {
          m = value * pow(2, eBias - 1) * pow(2, mLen);
          e = 0;
        }
      }

      for (; mLen >= 8; buffer[i++] = m & 255, m /= 256, mLen -= 8) {
        ;
      }

      e = e << mLen | m;
      eLen += mLen;

      for (; eLen > 0; buffer[i++] = e & 255, e /= 256, eLen -= 8) {
        ;
      }

      buffer[--i] |= s * 128;
      return buffer;
    }

    function unpackIEEE754(buffer, mLen, nBytes) {
      var eLen = nBytes * 8 - mLen - 1;
      var eMax = (1 << eLen) - 1;
      var eBias = eMax >> 1;
      var nBits = eLen - 7;
      var i = nBytes - 1;
      var s = buffer[i--];
      var e = s & 127;
      var m;
      s >>= 7;

      for (; nBits > 0; e = e * 256 + buffer[i], i--, nBits -= 8) {
        ;
      }

      m = e & (1 << -nBits) - 1;
      e >>= -nBits;
      nBits += mLen;

      for (; nBits > 0; m = m * 256 + buffer[i], i--, nBits -= 8) {
        ;
      }

      if (e === 0) {
        e = 1 - eBias;
      } else if (e === eMax) {
        return m ? NaN : s ? -Infinity : Infinity;
      } else {
        m = m + pow(2, mLen);
        e = e - eBias;
      }

      return (s ? -1 : 1) * m * pow(2, e - mLen);
    }

    function unpackI32(bytes) {
      return bytes[3] << 24 | bytes[2] << 16 | bytes[1] << 8 | bytes[0];
    }

    function packI8(it) {
      return [it & 0xff];
    }

    function packI16(it) {
      return [it & 0xff, it >> 8 & 0xff];
    }

    function packI32(it) {
      return [it & 0xff, it >> 8 & 0xff, it >> 16 & 0xff, it >> 24 & 0xff];
    }

    function packF64(it) {
      return packIEEE754(it, 52, 8);
    }

    function packF32(it) {
      return packIEEE754(it, 23, 4);
    }

    function addGetter(C, key, internal) {
      dP(C[PROTOTYPE], key, {
        get: function get() {
          return this[internal];
        }
      });
    }

    function get(view, bytes, index, isLittleEndian) {
      var numIndex = +index;
      var intIndex = toIndex(numIndex);
      if (intIndex + bytes > view[$LENGTH]) throw RangeError(WRONG_INDEX);
      var store = view[$BUFFER]._b;
      var start = intIndex + view[$OFFSET];
      var pack = store.slice(start, start + bytes);
      return isLittleEndian ? pack : pack.reverse();
    }

    function set(view, bytes, index, conversion, value, isLittleEndian) {
      var numIndex = +index;
      var intIndex = toIndex(numIndex);
      if (intIndex + bytes > view[$LENGTH]) throw RangeError(WRONG_INDEX);
      var store = view[$BUFFER]._b;
      var start = intIndex + view[$OFFSET];
      var pack = conversion(+value);

      for (var i = 0; i < bytes; i++) {
        store[start + i] = pack[isLittleEndian ? i : bytes - i - 1];
      }
    }

    if (!$typed.ABV) {
      $ArrayBuffer = function ArrayBuffer(length) {
        anInstance(this, $ArrayBuffer, ARRAY_BUFFER);
        var byteLength = toIndex(length);
        this._b = arrayFill.call(Array(byteLength), 0);
        this[$LENGTH] = byteLength;
      };

      $DataView = function DataView(buffer, byteOffset, byteLength) {
        anInstance(this, $DataView, DATA_VIEW);
        anInstance(buffer, $ArrayBuffer, DATA_VIEW);
        var bufferLength = buffer[$LENGTH];
        var offset = toInteger(byteOffset);
        if (offset < 0 || offset > bufferLength) throw RangeError('Wrong offset!');
        byteLength = byteLength === undefined ? bufferLength - offset : toLength(byteLength);
        if (offset + byteLength > bufferLength) throw RangeError(WRONG_LENGTH);
        this[$BUFFER] = buffer;
        this[$OFFSET] = offset;
        this[$LENGTH] = byteLength;
      };

      if (DESCRIPTORS) {
        addGetter($ArrayBuffer, BYTE_LENGTH, '_l');
        addGetter($DataView, BUFFER, '_b');
        addGetter($DataView, BYTE_LENGTH, '_l');
        addGetter($DataView, BYTE_OFFSET, '_o');
      }

      redefineAll($DataView[PROTOTYPE], {
        getInt8: function getInt8(byteOffset) {
          return get(this, 1, byteOffset)[0] << 24 >> 24;
        },
        getUint8: function getUint8(byteOffset) {
          return get(this, 1, byteOffset)[0];
        },
        getInt16: function getInt16(byteOffset
        /* , littleEndian */
        ) {
          var bytes = get(this, 2, byteOffset, arguments[1]);
          return (bytes[1] << 8 | bytes[0]) << 16 >> 16;
        },
        getUint16: function getUint16(byteOffset
        /* , littleEndian */
        ) {
          var bytes = get(this, 2, byteOffset, arguments[1]);
          return bytes[1] << 8 | bytes[0];
        },
        getInt32: function getInt32(byteOffset
        /* , littleEndian */
        ) {
          return unpackI32(get(this, 4, byteOffset, arguments[1]));
        },
        getUint32: function getUint32(byteOffset
        /* , littleEndian */
        ) {
          return unpackI32(get(this, 4, byteOffset, arguments[1])) >>> 0;
        },
        getFloat32: function getFloat32(byteOffset
        /* , littleEndian */
        ) {
          return unpackIEEE754(get(this, 4, byteOffset, arguments[1]), 23, 4);
        },
        getFloat64: function getFloat64(byteOffset
        /* , littleEndian */
        ) {
          return unpackIEEE754(get(this, 8, byteOffset, arguments[1]), 52, 8);
        },
        setInt8: function setInt8(byteOffset, value) {
          set(this, 1, byteOffset, packI8, value);
        },
        setUint8: function setUint8(byteOffset, value) {
          set(this, 1, byteOffset, packI8, value);
        },
        setInt16: function setInt16(byteOffset, value
        /* , littleEndian */
        ) {
          set(this, 2, byteOffset, packI16, value, arguments[2]);
        },
        setUint16: function setUint16(byteOffset, value
        /* , littleEndian */
        ) {
          set(this, 2, byteOffset, packI16, value, arguments[2]);
        },
        setInt32: function setInt32(byteOffset, value
        /* , littleEndian */
        ) {
          set(this, 4, byteOffset, packI32, value, arguments[2]);
        },
        setUint32: function setUint32(byteOffset, value
        /* , littleEndian */
        ) {
          set(this, 4, byteOffset, packI32, value, arguments[2]);
        },
        setFloat32: function setFloat32(byteOffset, value
        /* , littleEndian */
        ) {
          set(this, 4, byteOffset, packF32, value, arguments[2]);
        },
        setFloat64: function setFloat64(byteOffset, value
        /* , littleEndian */
        ) {
          set(this, 8, byteOffset, packF64, value, arguments[2]);
        }
      });
    } else {
      if (!fails(function () {
        $ArrayBuffer(1);
      }) || !fails(function () {
        new $ArrayBuffer(-1); // eslint-disable-line no-new
      }) || fails(function () {
        new $ArrayBuffer(); // eslint-disable-line no-new

        new $ArrayBuffer(1.5); // eslint-disable-line no-new

        new $ArrayBuffer(NaN); // eslint-disable-line no-new

        return $ArrayBuffer.name != ARRAY_BUFFER;
      })) {
        $ArrayBuffer = function ArrayBuffer(length) {
          anInstance(this, $ArrayBuffer);
          return new BaseBuffer(toIndex(length));
        };

        var ArrayBufferProto = $ArrayBuffer[PROTOTYPE] = BaseBuffer[PROTOTYPE];

        for (var keys = gOPN(BaseBuffer), j = 0, key; keys.length > j;) {
          if (!((key = keys[j++]) in $ArrayBuffer)) hide($ArrayBuffer, key, BaseBuffer[key]);
        }

        if (!LIBRARY) ArrayBufferProto.constructor = $ArrayBuffer;
      } // iOS Safari 7.x bug


      var view = new $DataView(new $ArrayBuffer(2));
      var $setInt8 = $DataView[PROTOTYPE].setInt8;
      view.setInt8(0, 2147483648);
      view.setInt8(1, 2147483649);
      if (view.getInt8(0) || !view.getInt8(1)) redefineAll($DataView[PROTOTYPE], {
        setInt8: function setInt8(byteOffset, value) {
          $setInt8.call(this, byteOffset, value << 24 >> 24);
        },
        setUint8: function setUint8(byteOffset, value) {
          $setInt8.call(this, byteOffset, value << 24 >> 24);
        }
      }, true);
    }

    setToStringTag($ArrayBuffer, ARRAY_BUFFER);
    setToStringTag($DataView, DATA_VIEW);
    hide($DataView[PROTOTYPE], $typed.VIEW, true);
    exports[ARRAY_BUFFER] = $ArrayBuffer;
    exports[DATA_VIEW] = $DataView;
  }, {
    "101": 101,
    "115": 115,
    "116": 116,
    "118": 118,
    "123": 123,
    "29": 29,
    "35": 35,
    "40": 40,
    "42": 42,
    "6": 6,
    "60": 60,
    "72": 72,
    "77": 77,
    "9": 9,
    "93": 93
  }],
  123: [function (_dereq_, module, exports) {
    var global = _dereq_(40);

    var hide = _dereq_(42);

    var uid = _dereq_(124);

    var TYPED = uid('typed_array');
    var VIEW = uid('view');
    var ABV = !!(global.ArrayBuffer && global.DataView);
    var CONSTR = ABV;
    var i = 0;
    var l = 9;
    var Typed;
    var TypedArrayConstructors = 'Int8Array,Uint8Array,Uint8ClampedArray,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array'.split(',');

    while (i < l) {
      if (Typed = global[TypedArrayConstructors[i++]]) {
        hide(Typed.prototype, TYPED, true);
        hide(Typed.prototype, VIEW, true);
      } else CONSTR = false;
    }

    module.exports = {
      ABV: ABV,
      CONSTR: CONSTR,
      TYPED: TYPED,
      VIEW: VIEW
    };
  }, {
    "124": 124,
    "40": 40,
    "42": 42
  }],
  124: [function (_dereq_, module, exports) {
    var id = 0;
    var px = Math.random();

    module.exports = function (key) {
      return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
    };
  }, {}],
  125: [function (_dereq_, module, exports) {
    var isObject = _dereq_(51);

    module.exports = function (it, TYPE) {
      if (!isObject(it) || it._t !== TYPE) throw TypeError('Incompatible receiver, ' + TYPE + ' required!');
      return it;
    };
  }, {
    "51": 51
  }],
  126: [function (_dereq_, module, exports) {
    var global = _dereq_(40);

    var core = _dereq_(23);

    var LIBRARY = _dereq_(60);

    var wksExt = _dereq_(127);

    var defineProperty = _dereq_(72).f;

    module.exports = function (name) {
      var $Symbol = core.Symbol || (core.Symbol = LIBRARY ? {} : global.Symbol || {});
      if (name.charAt(0) != '_' && !(name in $Symbol)) defineProperty($Symbol, name, {
        value: wksExt.f(name)
      });
    };
  }, {
    "127": 127,
    "23": 23,
    "40": 40,
    "60": 60,
    "72": 72
  }],
  127: [function (_dereq_, module, exports) {
    exports.f = _dereq_(128);
  }, {
    "128": 128
  }],
  128: [function (_dereq_, module, exports) {
    var store = _dereq_(103)('wks');

    var uid = _dereq_(124);

    var _Symbol = _dereq_(40).Symbol;

    var USE_SYMBOL = typeof _Symbol == 'function';

    var $exports = module.exports = function (name) {
      return store[name] || (store[name] = USE_SYMBOL && _Symbol[name] || (USE_SYMBOL ? _Symbol : uid)('Symbol.' + name));
    };

    $exports.store = store;
  }, {
    "103": 103,
    "124": 124,
    "40": 40
  }],
  129: [function (_dereq_, module, exports) {
    var classof = _dereq_(17);

    var ITERATOR = _dereq_(128)('iterator');

    var Iterators = _dereq_(58);

    module.exports = _dereq_(23).getIteratorMethod = function (it) {
      if (it != undefined) return it[ITERATOR] || it['@@iterator'] || Iterators[classof(it)];
    };
  }, {
    "128": 128,
    "17": 17,
    "23": 23,
    "58": 58
  }],
  130: [function (_dereq_, module, exports) {
    // https://github.com/benjamingr/RexExp.escape
    var $export = _dereq_(33);

    var $re = _dereq_(95)(/[\\^$*+?.()|[\]{}]/g, '\\$&');

    $export($export.S, 'RegExp', {
      escape: function escape(it) {
        return $re(it);
      }
    });
  }, {
    "33": 33,
    "95": 95
  }],
  131: [function (_dereq_, module, exports) {
    // 22.1.3.3 Array.prototype.copyWithin(target, start, end = this.length)
    var $export = _dereq_(33);

    $export($export.P, 'Array', {
      copyWithin: _dereq_(8)
    });

    _dereq_(5)('copyWithin');
  }, {
    "33": 33,
    "5": 5,
    "8": 8
  }],
  132: [function (_dereq_, module, exports) {
    'use strict';

    var $export = _dereq_(33);

    var $every = _dereq_(12)(4);

    $export($export.P + $export.F * !_dereq_(105)([].every, true), 'Array', {
      // 22.1.3.5 / 15.4.4.16 Array.prototype.every(callbackfn [, thisArg])
      every: function every(callbackfn
      /* , thisArg */
      ) {
        return $every(this, callbackfn, arguments[1]);
      }
    });
  }, {
    "105": 105,
    "12": 12,
    "33": 33
  }],
  133: [function (_dereq_, module, exports) {
    // 22.1.3.6 Array.prototype.fill(value, start = 0, end = this.length)
    var $export = _dereq_(33);

    $export($export.P, 'Array', {
      fill: _dereq_(9)
    });

    _dereq_(5)('fill');
  }, {
    "33": 33,
    "5": 5,
    "9": 9
  }],
  134: [function (_dereq_, module, exports) {
    'use strict';

    var $export = _dereq_(33);

    var $filter = _dereq_(12)(2);

    $export($export.P + $export.F * !_dereq_(105)([].filter, true), 'Array', {
      // 22.1.3.7 / 15.4.4.20 Array.prototype.filter(callbackfn [, thisArg])
      filter: function filter(callbackfn
      /* , thisArg */
      ) {
        return $filter(this, callbackfn, arguments[1]);
      }
    });
  }, {
    "105": 105,
    "12": 12,
    "33": 33
  }],
  135: [function (_dereq_, module, exports) {
    'use strict'; // 22.1.3.9 Array.prototype.findIndex(predicate, thisArg = undefined)

    var $export = _dereq_(33);

    var $find = _dereq_(12)(6);

    var KEY = 'findIndex';
    var forced = true; // Shouldn't skip holes

    if (KEY in []) Array(1)[KEY](function () {
      forced = false;
    });
    $export($export.P + $export.F * forced, 'Array', {
      findIndex: function findIndex(callbackfn
      /* , that = undefined */
      ) {
        return $find(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
      }
    });

    _dereq_(5)(KEY);
  }, {
    "12": 12,
    "33": 33,
    "5": 5
  }],
  136: [function (_dereq_, module, exports) {
    'use strict'; // 22.1.3.8 Array.prototype.find(predicate, thisArg = undefined)

    var $export = _dereq_(33);

    var $find = _dereq_(12)(5);

    var KEY = 'find';
    var forced = true; // Shouldn't skip holes

    if (KEY in []) Array(1)[KEY](function () {
      forced = false;
    });
    $export($export.P + $export.F * forced, 'Array', {
      find: function find(callbackfn
      /* , that = undefined */
      ) {
        return $find(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
      }
    });

    _dereq_(5)(KEY);
  }, {
    "12": 12,
    "33": 33,
    "5": 5
  }],
  137: [function (_dereq_, module, exports) {
    'use strict';

    var $export = _dereq_(33);

    var $forEach = _dereq_(12)(0);

    var STRICT = _dereq_(105)([].forEach, true);

    $export($export.P + $export.F * !STRICT, 'Array', {
      // 22.1.3.10 / 15.4.4.18 Array.prototype.forEach(callbackfn [, thisArg])
      forEach: function forEach(callbackfn
      /* , thisArg */
      ) {
        return $forEach(this, callbackfn, arguments[1]);
      }
    });
  }, {
    "105": 105,
    "12": 12,
    "33": 33
  }],
  138: [function (_dereq_, module, exports) {
    'use strict';

    var ctx = _dereq_(25);

    var $export = _dereq_(33);

    var toObject = _dereq_(119);

    var call = _dereq_(53);

    var isArrayIter = _dereq_(48);

    var toLength = _dereq_(118);

    var createProperty = _dereq_(24);

    var getIterFn = _dereq_(129);

    $export($export.S + $export.F * !_dereq_(56)(function (iter) {
      Array.from(iter);
    }), 'Array', {
      // 22.1.2.1 Array.from(arrayLike, mapfn = undefined, thisArg = undefined)
      from: function from(arrayLike
      /* , mapfn = undefined, thisArg = undefined */
      ) {
        var O = toObject(arrayLike);
        var C = typeof this == 'function' ? this : Array;
        var aLen = arguments.length;
        var mapfn = aLen > 1 ? arguments[1] : undefined;
        var mapping = mapfn !== undefined;
        var index = 0;
        var iterFn = getIterFn(O);
        var length, result, step, iterator;
        if (mapping) mapfn = ctx(mapfn, aLen > 2 ? arguments[2] : undefined, 2); // if object isn't iterable or it's array with default iterator - use simple case

        if (iterFn != undefined && !(C == Array && isArrayIter(iterFn))) {
          for (iterator = iterFn.call(O), result = new C(); !(step = iterator.next()).done; index++) {
            createProperty(result, index, mapping ? call(iterator, mapfn, [step.value, index], true) : step.value);
          }
        } else {
          length = toLength(O.length);

          for (result = new C(length); length > index; index++) {
            createProperty(result, index, mapping ? mapfn(O[index], index) : O[index]);
          }
        }

        result.length = index;
        return result;
      }
    });
  }, {
    "118": 118,
    "119": 119,
    "129": 129,
    "24": 24,
    "25": 25,
    "33": 33,
    "48": 48,
    "53": 53,
    "56": 56
  }],
  139: [function (_dereq_, module, exports) {
    'use strict';

    var $export = _dereq_(33);

    var $indexOf = _dereq_(11)(false);

    var $native = [].indexOf;
    var NEGATIVE_ZERO = !!$native && 1 / [1].indexOf(1, -0) < 0;
    $export($export.P + $export.F * (NEGATIVE_ZERO || !_dereq_(105)($native)), 'Array', {
      // 22.1.3.11 / 15.4.4.14 Array.prototype.indexOf(searchElement [, fromIndex])
      indexOf: function indexOf(searchElement
      /* , fromIndex = 0 */
      ) {
        return NEGATIVE_ZERO // convert -0 to +0
        ? $native.apply(this, arguments) || 0 : $indexOf(this, searchElement, arguments[1]);
      }
    });
  }, {
    "105": 105,
    "11": 11,
    "33": 33
  }],
  140: [function (_dereq_, module, exports) {
    // 22.1.2.2 / 15.4.3.2 Array.isArray(arg)
    var $export = _dereq_(33);

    $export($export.S, 'Array', {
      isArray: _dereq_(49)
    });
  }, {
    "33": 33,
    "49": 49
  }],
  141: [function (_dereq_, module, exports) {
    'use strict';

    var addToUnscopables = _dereq_(5);

    var step = _dereq_(57);

    var Iterators = _dereq_(58);

    var toIObject = _dereq_(117); // 22.1.3.4 Array.prototype.entries()
    // 22.1.3.13 Array.prototype.keys()
    // 22.1.3.29 Array.prototype.values()
    // 22.1.3.30 Array.prototype[@@iterator]()


    module.exports = _dereq_(55)(Array, 'Array', function (iterated, kind) {
      this._t = toIObject(iterated); // target

      this._i = 0; // next index

      this._k = kind; // kind
      // 22.1.5.2.1 %ArrayIteratorPrototype%.next()
    }, function () {
      var O = this._t;
      var kind = this._k;
      var index = this._i++;

      if (!O || index >= O.length) {
        this._t = undefined;
        return step(1);
      }

      if (kind == 'keys') return step(0, index);
      if (kind == 'values') return step(0, O[index]);
      return step(0, [index, O[index]]);
    }, 'values'); // argumentsList[@@iterator] is %ArrayProto_values% (9.4.4.6, 9.4.4.7)

    Iterators.Arguments = Iterators.Array;
    addToUnscopables('keys');
    addToUnscopables('values');
    addToUnscopables('entries');
  }, {
    "117": 117,
    "5": 5,
    "55": 55,
    "57": 57,
    "58": 58
  }],
  142: [function (_dereq_, module, exports) {
    'use strict'; // 22.1.3.13 Array.prototype.join(separator)

    var $export = _dereq_(33);

    var toIObject = _dereq_(117);

    var arrayJoin = [].join; // fallback for not array-like strings

    $export($export.P + $export.F * (_dereq_(47) != Object || !_dereq_(105)(arrayJoin)), 'Array', {
      join: function join(separator) {
        return arrayJoin.call(toIObject(this), separator === undefined ? ',' : separator);
      }
    });
  }, {
    "105": 105,
    "117": 117,
    "33": 33,
    "47": 47
  }],
  143: [function (_dereq_, module, exports) {
    'use strict';

    var $export = _dereq_(33);

    var toIObject = _dereq_(117);

    var toInteger = _dereq_(116);

    var toLength = _dereq_(118);

    var $native = [].lastIndexOf;
    var NEGATIVE_ZERO = !!$native && 1 / [1].lastIndexOf(1, -0) < 0;
    $export($export.P + $export.F * (NEGATIVE_ZERO || !_dereq_(105)($native)), 'Array', {
      // 22.1.3.14 / 15.4.4.15 Array.prototype.lastIndexOf(searchElement [, fromIndex])
      lastIndexOf: function lastIndexOf(searchElement
      /* , fromIndex = @[*-1] */
      ) {
        // convert -0 to +0
        if (NEGATIVE_ZERO) return $native.apply(this, arguments) || 0;
        var O = toIObject(this);
        var length = toLength(O.length);
        var index = length - 1;
        if (arguments.length > 1) index = Math.min(index, toInteger(arguments[1]));
        if (index < 0) index = length + index;

        for (; index >= 0; index--) {
          if (index in O) if (O[index] === searchElement) return index || 0;
        }

        return -1;
      }
    });
  }, {
    "105": 105,
    "116": 116,
    "117": 117,
    "118": 118,
    "33": 33
  }],
  144: [function (_dereq_, module, exports) {
    'use strict';

    var $export = _dereq_(33);

    var $map = _dereq_(12)(1);

    $export($export.P + $export.F * !_dereq_(105)([].map, true), 'Array', {
      // 22.1.3.15 / 15.4.4.19 Array.prototype.map(callbackfn [, thisArg])
      map: function map(callbackfn
      /* , thisArg */
      ) {
        return $map(this, callbackfn, arguments[1]);
      }
    });
  }, {
    "105": 105,
    "12": 12,
    "33": 33
  }],
  145: [function (_dereq_, module, exports) {
    'use strict';

    var $export = _dereq_(33);

    var createProperty = _dereq_(24); // WebKit Array.of isn't generic


    $export($export.S + $export.F * _dereq_(35)(function () {
      function F() {
        /* empty */
      }

      return !(Array.of.call(F) instanceof F);
    }), 'Array', {
      // 22.1.2.3 Array.of( ...items)
      of: function of() {
        var index = 0;
        var aLen = arguments.length;
        var result = new (typeof this == 'function' ? this : Array)(aLen);

        while (aLen > index) {
          createProperty(result, index, arguments[index++]);
        }

        result.length = aLen;
        return result;
      }
    });
  }, {
    "24": 24,
    "33": 33,
    "35": 35
  }],
  146: [function (_dereq_, module, exports) {
    'use strict';

    var $export = _dereq_(33);

    var $reduce = _dereq_(13);

    $export($export.P + $export.F * !_dereq_(105)([].reduceRight, true), 'Array', {
      // 22.1.3.19 / 15.4.4.22 Array.prototype.reduceRight(callbackfn [, initialValue])
      reduceRight: function reduceRight(callbackfn
      /* , initialValue */
      ) {
        return $reduce(this, callbackfn, arguments.length, arguments[1], true);
      }
    });
  }, {
    "105": 105,
    "13": 13,
    "33": 33
  }],
  147: [function (_dereq_, module, exports) {
    'use strict';

    var $export = _dereq_(33);

    var $reduce = _dereq_(13);

    $export($export.P + $export.F * !_dereq_(105)([].reduce, true), 'Array', {
      // 22.1.3.18 / 15.4.4.21 Array.prototype.reduce(callbackfn [, initialValue])
      reduce: function reduce(callbackfn
      /* , initialValue */
      ) {
        return $reduce(this, callbackfn, arguments.length, arguments[1], false);
      }
    });
  }, {
    "105": 105,
    "13": 13,
    "33": 33
  }],
  148: [function (_dereq_, module, exports) {
    'use strict';

    var $export = _dereq_(33);

    var html = _dereq_(43);

    var cof = _dereq_(18);

    var toAbsoluteIndex = _dereq_(114);

    var toLength = _dereq_(118);

    var arraySlice = [].slice; // fallback for not array-like ES3 strings and DOM objects

    $export($export.P + $export.F * _dereq_(35)(function () {
      if (html) arraySlice.call(html);
    }), 'Array', {
      slice: function slice(begin, end) {
        var len = toLength(this.length);
        var klass = cof(this);
        end = end === undefined ? len : end;
        if (klass == 'Array') return arraySlice.call(this, begin, end);
        var start = toAbsoluteIndex(begin, len);
        var upTo = toAbsoluteIndex(end, len);
        var size = toLength(upTo - start);
        var cloned = Array(size);
        var i = 0;

        for (; i < size; i++) {
          cloned[i] = klass == 'String' ? this.charAt(start + i) : this[start + i];
        }

        return cloned;
      }
    });
  }, {
    "114": 114,
    "118": 118,
    "18": 18,
    "33": 33,
    "35": 35,
    "43": 43
  }],
  149: [function (_dereq_, module, exports) {
    'use strict';

    var $export = _dereq_(33);

    var $some = _dereq_(12)(3);

    $export($export.P + $export.F * !_dereq_(105)([].some, true), 'Array', {
      // 22.1.3.23 / 15.4.4.17 Array.prototype.some(callbackfn [, thisArg])
      some: function some(callbackfn
      /* , thisArg */
      ) {
        return $some(this, callbackfn, arguments[1]);
      }
    });
  }, {
    "105": 105,
    "12": 12,
    "33": 33
  }],
  150: [function (_dereq_, module, exports) {
    'use strict';

    var $export = _dereq_(33);

    var aFunction = _dereq_(3);

    var toObject = _dereq_(119);

    var fails = _dereq_(35);

    var $sort = [].sort;
    var test = [1, 2, 3];
    $export($export.P + $export.F * (fails(function () {
      // IE8-
      test.sort(undefined);
    }) || !fails(function () {
      // V8 bug
      test.sort(null); // Old WebKit
    }) || !_dereq_(105)($sort)), 'Array', {
      // 22.1.3.25 Array.prototype.sort(comparefn)
      sort: function sort(comparefn) {
        return comparefn === undefined ? $sort.call(toObject(this)) : $sort.call(toObject(this), aFunction(comparefn));
      }
    });
  }, {
    "105": 105,
    "119": 119,
    "3": 3,
    "33": 33,
    "35": 35
  }],
  151: [function (_dereq_, module, exports) {
    _dereq_(100)('Array');
  }, {
    "100": 100
  }],
  152: [function (_dereq_, module, exports) {
    // 20.3.3.1 / 15.9.4.4 Date.now()
    var $export = _dereq_(33);

    $export($export.S, 'Date', {
      now: function now() {
        return new Date().getTime();
      }
    });
  }, {
    "33": 33
  }],
  153: [function (_dereq_, module, exports) {
    // 20.3.4.36 / 15.9.5.43 Date.prototype.toISOString()
    var $export = _dereq_(33);

    var toISOString = _dereq_(26); // PhantomJS / old WebKit has a broken implementations


    $export($export.P + $export.F * (Date.prototype.toISOString !== toISOString), 'Date', {
      toISOString: toISOString
    });
  }, {
    "26": 26,
    "33": 33
  }],
  154: [function (_dereq_, module, exports) {
    'use strict';

    var $export = _dereq_(33);

    var toObject = _dereq_(119);

    var toPrimitive = _dereq_(120);

    $export($export.P + $export.F * _dereq_(35)(function () {
      return new Date(NaN).toJSON() !== null || Date.prototype.toJSON.call({
        toISOString: function toISOString() {
          return 1;
        }
      }) !== 1;
    }), 'Date', {
      // eslint-disable-next-line no-unused-vars
      toJSON: function toJSON(key) {
        var O = toObject(this);
        var pv = toPrimitive(O);
        return typeof pv == 'number' && !isFinite(pv) ? null : O.toISOString();
      }
    });
  }, {
    "119": 119,
    "120": 120,
    "33": 33,
    "35": 35
  }],
  155: [function (_dereq_, module, exports) {
    var TO_PRIMITIVE = _dereq_(128)('toPrimitive');

    var proto = Date.prototype;
    if (!(TO_PRIMITIVE in proto)) _dereq_(42)(proto, TO_PRIMITIVE, _dereq_(27));
  }, {
    "128": 128,
    "27": 27,
    "42": 42
  }],
  156: [function (_dereq_, module, exports) {
    var DateProto = Date.prototype;
    var INVALID_DATE = 'Invalid Date';
    var TO_STRING = 'toString';
    var $toString = DateProto[TO_STRING];
    var getTime = DateProto.getTime;

    if (new Date(NaN) + '' != INVALID_DATE) {
      _dereq_(94)(DateProto, TO_STRING, function toString() {
        var value = getTime.call(this); // eslint-disable-next-line no-self-compare

        return value === value ? $toString.call(this) : INVALID_DATE;
      });
    }
  }, {
    "94": 94
  }],
  157: [function (_dereq_, module, exports) {
    // 19.2.3.2 / 15.3.4.5 Function.prototype.bind(thisArg, args...)
    var $export = _dereq_(33);

    $export($export.P, 'Function', {
      bind: _dereq_(16)
    });
  }, {
    "16": 16,
    "33": 33
  }],
  158: [function (_dereq_, module, exports) {
    'use strict';

    var isObject = _dereq_(51);

    var getPrototypeOf = _dereq_(79);

    var HAS_INSTANCE = _dereq_(128)('hasInstance');

    var FunctionProto = Function.prototype; // 19.2.3.6 Function.prototype[@@hasInstance](V)

    if (!(HAS_INSTANCE in FunctionProto)) _dereq_(72).f(FunctionProto, HAS_INSTANCE, {
      value: function value(O) {
        if (typeof this != 'function' || !isObject(O)) return false;
        if (!isObject(this.prototype)) return O instanceof this; // for environment w/o native `@@hasInstance` logic enough `instanceof`, but add this:

        while (O = getPrototypeOf(O)) {
          if (this.prototype === O) return true;
        }

        return false;
      }
    });
  }, {
    "128": 128,
    "51": 51,
    "72": 72,
    "79": 79
  }],
  159: [function (_dereq_, module, exports) {
    var dP = _dereq_(72).f;

    var FProto = Function.prototype;
    var nameRE = /^\s*function ([^ (]*)/;
    var NAME = 'name'; // 19.2.4.2 name

    NAME in FProto || _dereq_(29) && dP(FProto, NAME, {
      configurable: true,
      get: function get() {
        try {
          return ('' + this).match(nameRE)[1];
        } catch (e) {
          return '';
        }
      }
    });
  }, {
    "29": 29,
    "72": 72
  }],
  160: [function (_dereq_, module, exports) {
    'use strict';

    var strong = _dereq_(19);

    var validate = _dereq_(125);

    var MAP = 'Map'; // 23.1 Map Objects

    module.exports = _dereq_(22)(MAP, function (get) {
      return function Map() {
        return get(this, arguments.length > 0 ? arguments[0] : undefined);
      };
    }, {
      // 23.1.3.6 Map.prototype.get(key)
      get: function get(key) {
        var entry = strong.getEntry(validate(this, MAP), key);
        return entry && entry.v;
      },
      // 23.1.3.9 Map.prototype.set(key, value)
      set: function set(key, value) {
        return strong.def(validate(this, MAP), key === 0 ? 0 : key, value);
      }
    }, strong, true);
  }, {
    "125": 125,
    "19": 19,
    "22": 22
  }],
  161: [function (_dereq_, module, exports) {
    // 20.2.2.3 Math.acosh(x)
    var $export = _dereq_(33);

    var log1p = _dereq_(63);

    var sqrt = Math.sqrt;
    var $acosh = Math.acosh;
    $export($export.S + $export.F * !($acosh // V8 bug: https://code.google.com/p/v8/issues/detail?id=3509
    && Math.floor($acosh(Number.MAX_VALUE)) == 710 // Tor Browser bug: Math.acosh(Infinity) -> NaN
    && $acosh(Infinity) == Infinity), 'Math', {
      acosh: function acosh(x) {
        return (x = +x) < 1 ? NaN : x > 94906265.62425156 ? Math.log(x) + Math.LN2 : log1p(x - 1 + sqrt(x - 1) * sqrt(x + 1));
      }
    });
  }, {
    "33": 33,
    "63": 63
  }],
  162: [function (_dereq_, module, exports) {
    // 20.2.2.5 Math.asinh(x)
    var $export = _dereq_(33);

    var $asinh = Math.asinh;

    function asinh(x) {
      return !isFinite(x = +x) || x == 0 ? x : x < 0 ? -asinh(-x) : Math.log(x + Math.sqrt(x * x + 1));
    } // Tor Browser bug: Math.asinh(0) -> -0


    $export($export.S + $export.F * !($asinh && 1 / $asinh(0) > 0), 'Math', {
      asinh: asinh
    });
  }, {
    "33": 33
  }],
  163: [function (_dereq_, module, exports) {
    // 20.2.2.7 Math.atanh(x)
    var $export = _dereq_(33);

    var $atanh = Math.atanh; // Tor Browser bug: Math.atanh(-0) -> 0

    $export($export.S + $export.F * !($atanh && 1 / $atanh(-0) < 0), 'Math', {
      atanh: function atanh(x) {
        return (x = +x) == 0 ? x : Math.log((1 + x) / (1 - x)) / 2;
      }
    });
  }, {
    "33": 33
  }],
  164: [function (_dereq_, module, exports) {
    // 20.2.2.9 Math.cbrt(x)
    var $export = _dereq_(33);

    var sign = _dereq_(65);

    $export($export.S, 'Math', {
      cbrt: function cbrt(x) {
        return sign(x = +x) * Math.pow(Math.abs(x), 1 / 3);
      }
    });
  }, {
    "33": 33,
    "65": 65
  }],
  165: [function (_dereq_, module, exports) {
    // 20.2.2.11 Math.clz32(x)
    var $export = _dereq_(33);

    $export($export.S, 'Math', {
      clz32: function clz32(x) {
        return (x >>>= 0) ? 31 - Math.floor(Math.log(x + 0.5) * Math.LOG2E) : 32;
      }
    });
  }, {
    "33": 33
  }],
  166: [function (_dereq_, module, exports) {
    // 20.2.2.12 Math.cosh(x)
    var $export = _dereq_(33);

    var exp = Math.exp;
    $export($export.S, 'Math', {
      cosh: function cosh(x) {
        return (exp(x = +x) + exp(-x)) / 2;
      }
    });
  }, {
    "33": 33
  }],
  167: [function (_dereq_, module, exports) {
    // 20.2.2.14 Math.expm1(x)
    var $export = _dereq_(33);

    var $expm1 = _dereq_(61);

    $export($export.S + $export.F * ($expm1 != Math.expm1), 'Math', {
      expm1: $expm1
    });
  }, {
    "33": 33,
    "61": 61
  }],
  168: [function (_dereq_, module, exports) {
    // 20.2.2.16 Math.fround(x)
    var $export = _dereq_(33);

    $export($export.S, 'Math', {
      fround: _dereq_(62)
    });
  }, {
    "33": 33,
    "62": 62
  }],
  169: [function (_dereq_, module, exports) {
    // 20.2.2.17 Math.hypot([value1[, value2[, … ]]])
    var $export = _dereq_(33);

    var abs = Math.abs;
    $export($export.S, 'Math', {
      hypot: function hypot(value1, value2) {
        // eslint-disable-line no-unused-vars
        var sum = 0;
        var i = 0;
        var aLen = arguments.length;
        var larg = 0;
        var arg, div;

        while (i < aLen) {
          arg = abs(arguments[i++]);

          if (larg < arg) {
            div = larg / arg;
            sum = sum * div * div + 1;
            larg = arg;
          } else if (arg > 0) {
            div = arg / larg;
            sum += div * div;
          } else sum += arg;
        }

        return larg === Infinity ? Infinity : larg * Math.sqrt(sum);
      }
    });
  }, {
    "33": 33
  }],
  170: [function (_dereq_, module, exports) {
    // 20.2.2.18 Math.imul(x, y)
    var $export = _dereq_(33);

    var $imul = Math.imul; // some WebKit versions fails with big numbers, some has wrong arity

    $export($export.S + $export.F * _dereq_(35)(function () {
      return $imul(0xffffffff, 5) != -5 || $imul.length != 2;
    }), 'Math', {
      imul: function imul(x, y) {
        var UINT16 = 0xffff;
        var xn = +x;
        var yn = +y;
        var xl = UINT16 & xn;
        var yl = UINT16 & yn;
        return 0 | xl * yl + ((UINT16 & xn >>> 16) * yl + xl * (UINT16 & yn >>> 16) << 16 >>> 0);
      }
    });
  }, {
    "33": 33,
    "35": 35
  }],
  171: [function (_dereq_, module, exports) {
    // 20.2.2.21 Math.log10(x)
    var $export = _dereq_(33);

    $export($export.S, 'Math', {
      log10: function log10(x) {
        return Math.log(x) * Math.LOG10E;
      }
    });
  }, {
    "33": 33
  }],
  172: [function (_dereq_, module, exports) {
    // 20.2.2.20 Math.log1p(x)
    var $export = _dereq_(33);

    $export($export.S, 'Math', {
      log1p: _dereq_(63)
    });
  }, {
    "33": 33,
    "63": 63
  }],
  173: [function (_dereq_, module, exports) {
    // 20.2.2.22 Math.log2(x)
    var $export = _dereq_(33);

    $export($export.S, 'Math', {
      log2: function log2(x) {
        return Math.log(x) / Math.LN2;
      }
    });
  }, {
    "33": 33
  }],
  174: [function (_dereq_, module, exports) {
    // 20.2.2.28 Math.sign(x)
    var $export = _dereq_(33);

    $export($export.S, 'Math', {
      sign: _dereq_(65)
    });
  }, {
    "33": 33,
    "65": 65
  }],
  175: [function (_dereq_, module, exports) {
    // 20.2.2.30 Math.sinh(x)
    var $export = _dereq_(33);

    var expm1 = _dereq_(61);

    var exp = Math.exp; // V8 near Chromium 38 has a problem with very small numbers

    $export($export.S + $export.F * _dereq_(35)(function () {
      return !Math.sinh(-2e-17) != -2e-17;
    }), 'Math', {
      sinh: function sinh(x) {
        return Math.abs(x = +x) < 1 ? (expm1(x) - expm1(-x)) / 2 : (exp(x - 1) - exp(-x - 1)) * (Math.E / 2);
      }
    });
  }, {
    "33": 33,
    "35": 35,
    "61": 61
  }],
  176: [function (_dereq_, module, exports) {
    // 20.2.2.33 Math.tanh(x)
    var $export = _dereq_(33);

    var expm1 = _dereq_(61);

    var exp = Math.exp;
    $export($export.S, 'Math', {
      tanh: function tanh(x) {
        var a = expm1(x = +x);
        var b = expm1(-x);
        return a == Infinity ? 1 : b == Infinity ? -1 : (a - b) / (exp(x) + exp(-x));
      }
    });
  }, {
    "33": 33,
    "61": 61
  }],
  177: [function (_dereq_, module, exports) {
    // 20.2.2.34 Math.trunc(x)
    var $export = _dereq_(33);

    $export($export.S, 'Math', {
      trunc: function trunc(it) {
        return (it > 0 ? Math.floor : Math.ceil)(it);
      }
    });
  }, {
    "33": 33
  }],
  178: [function (_dereq_, module, exports) {
    'use strict';

    var global = _dereq_(40);

    var has = _dereq_(41);

    var cof = _dereq_(18);

    var inheritIfRequired = _dereq_(45);

    var toPrimitive = _dereq_(120);

    var fails = _dereq_(35);

    var gOPN = _dereq_(77).f;

    var gOPD = _dereq_(75).f;

    var dP = _dereq_(72).f;

    var $trim = _dereq_(111).trim;

    var NUMBER = 'Number';
    var $Number = global[NUMBER];
    var Base = $Number;
    var proto = $Number.prototype; // Opera ~12 has broken Object#toString

    var BROKEN_COF = cof(_dereq_(71)(proto)) == NUMBER;
    var TRIM = ('trim' in String.prototype); // 7.1.3 ToNumber(argument)

    var toNumber = function toNumber(argument) {
      var it = toPrimitive(argument, false);

      if (typeof it == 'string' && it.length > 2) {
        it = TRIM ? it.trim() : $trim(it, 3);
        var first = it.charCodeAt(0);
        var third, radix, maxCode;

        if (first === 43 || first === 45) {
          third = it.charCodeAt(2);
          if (third === 88 || third === 120) return NaN; // Number('+0x1') should be NaN, old V8 fix
        } else if (first === 48) {
          switch (it.charCodeAt(1)) {
            case 66:
            case 98:
              radix = 2;
              maxCode = 49;
              break;
            // fast equal /^0b[01]+$/i

            case 79:
            case 111:
              radix = 8;
              maxCode = 55;
              break;
            // fast equal /^0o[0-7]+$/i

            default:
              return +it;
          }

          for (var digits = it.slice(2), i = 0, l = digits.length, code; i < l; i++) {
            code = digits.charCodeAt(i); // parseInt parses a string to a first unavailable symbol
            // but ToNumber should return NaN if a string contains unavailable symbols

            if (code < 48 || code > maxCode) return NaN;
          }

          return parseInt(digits, radix);
        }
      }

      return +it;
    };

    if (!$Number(' 0o1') || !$Number('0b1') || $Number('+0x1')) {
      $Number = function Number(value) {
        var it = arguments.length < 1 ? 0 : value;
        var that = this;
        return that instanceof $Number // check on 1..constructor(foo) case
        && (BROKEN_COF ? fails(function () {
          proto.valueOf.call(that);
        }) : cof(that) != NUMBER) ? inheritIfRequired(new Base(toNumber(it)), that, $Number) : toNumber(it);
      };

      for (var keys = _dereq_(29) ? gOPN(Base) : ( // ES3:
      'MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,' + // ES6 (in case, if modules with ES6 Number statics required before):
      'EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,' + 'MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger').split(','), j = 0, key; keys.length > j; j++) {
        if (has(Base, key = keys[j]) && !has($Number, key)) {
          dP($Number, key, gOPD(Base, key));
        }
      }

      $Number.prototype = proto;
      proto.constructor = $Number;

      _dereq_(94)(global, NUMBER, $Number);
    }
  }, {
    "111": 111,
    "120": 120,
    "18": 18,
    "29": 29,
    "35": 35,
    "40": 40,
    "41": 41,
    "45": 45,
    "71": 71,
    "72": 72,
    "75": 75,
    "77": 77,
    "94": 94
  }],
  179: [function (_dereq_, module, exports) {
    // 20.1.2.1 Number.EPSILON
    var $export = _dereq_(33);

    $export($export.S, 'Number', {
      EPSILON: Math.pow(2, -52)
    });
  }, {
    "33": 33
  }],
  180: [function (_dereq_, module, exports) {
    // 20.1.2.2 Number.isFinite(number)
    var $export = _dereq_(33);

    var _isFinite = _dereq_(40).isFinite;

    $export($export.S, 'Number', {
      isFinite: function isFinite(it) {
        return typeof it == 'number' && _isFinite(it);
      }
    });
  }, {
    "33": 33,
    "40": 40
  }],
  181: [function (_dereq_, module, exports) {
    // 20.1.2.3 Number.isInteger(number)
    var $export = _dereq_(33);

    $export($export.S, 'Number', {
      isInteger: _dereq_(50)
    });
  }, {
    "33": 33,
    "50": 50
  }],
  182: [function (_dereq_, module, exports) {
    // 20.1.2.4 Number.isNaN(number)
    var $export = _dereq_(33);

    $export($export.S, 'Number', {
      isNaN: function isNaN(number) {
        // eslint-disable-next-line no-self-compare
        return number != number;
      }
    });
  }, {
    "33": 33
  }],
  183: [function (_dereq_, module, exports) {
    // 20.1.2.5 Number.isSafeInteger(number)
    var $export = _dereq_(33);

    var isInteger = _dereq_(50);

    var abs = Math.abs;
    $export($export.S, 'Number', {
      isSafeInteger: function isSafeInteger(number) {
        return isInteger(number) && abs(number) <= 0x1fffffffffffff;
      }
    });
  }, {
    "33": 33,
    "50": 50
  }],
  184: [function (_dereq_, module, exports) {
    // 20.1.2.6 Number.MAX_SAFE_INTEGER
    var $export = _dereq_(33);

    $export($export.S, 'Number', {
      MAX_SAFE_INTEGER: 0x1fffffffffffff
    });
  }, {
    "33": 33
  }],
  185: [function (_dereq_, module, exports) {
    // 20.1.2.10 Number.MIN_SAFE_INTEGER
    var $export = _dereq_(33);

    $export($export.S, 'Number', {
      MIN_SAFE_INTEGER: -0x1fffffffffffff
    });
  }, {
    "33": 33
  }],
  186: [function (_dereq_, module, exports) {
    var $export = _dereq_(33);

    var $parseFloat = _dereq_(86); // 20.1.2.12 Number.parseFloat(string)


    $export($export.S + $export.F * (Number.parseFloat != $parseFloat), 'Number', {
      parseFloat: $parseFloat
    });
  }, {
    "33": 33,
    "86": 86
  }],
  187: [function (_dereq_, module, exports) {
    var $export = _dereq_(33);

    var $parseInt = _dereq_(87); // 20.1.2.13 Number.parseInt(string, radix)


    $export($export.S + $export.F * (Number.parseInt != $parseInt), 'Number', {
      parseInt: $parseInt
    });
  }, {
    "33": 33,
    "87": 87
  }],
  188: [function (_dereq_, module, exports) {
    'use strict';

    var $export = _dereq_(33);

    var toInteger = _dereq_(116);

    var aNumberValue = _dereq_(4);

    var repeat = _dereq_(110);

    var $toFixed = 1.0.toFixed;
    var floor = Math.floor;
    var data = [0, 0, 0, 0, 0, 0];
    var ERROR = 'Number.toFixed: incorrect invocation!';
    var ZERO = '0';

    var multiply = function multiply(n, c) {
      var i = -1;
      var c2 = c;

      while (++i < 6) {
        c2 += n * data[i];
        data[i] = c2 % 1e7;
        c2 = floor(c2 / 1e7);
      }
    };

    var divide = function divide(n) {
      var i = 6;
      var c = 0;

      while (--i >= 0) {
        c += data[i];
        data[i] = floor(c / n);
        c = c % n * 1e7;
      }
    };

    var numToString = function numToString() {
      var i = 6;
      var s = '';

      while (--i >= 0) {
        if (s !== '' || i === 0 || data[i] !== 0) {
          var t = String(data[i]);
          s = s === '' ? t : s + repeat.call(ZERO, 7 - t.length) + t;
        }
      }

      return s;
    };

    var pow = function pow(x, n, acc) {
      return n === 0 ? acc : n % 2 === 1 ? pow(x, n - 1, acc * x) : pow(x * x, n / 2, acc);
    };

    var log = function log(x) {
      var n = 0;
      var x2 = x;

      while (x2 >= 4096) {
        n += 12;
        x2 /= 4096;
      }

      while (x2 >= 2) {
        n += 1;
        x2 /= 2;
      }

      return n;
    };

    $export($export.P + $export.F * (!!$toFixed && (0.00008.toFixed(3) !== '0.000' || 0.9.toFixed(0) !== '1' || 1.255.toFixed(2) !== '1.25' || 1000000000000000128.0.toFixed(0) !== '1000000000000000128') || !_dereq_(35)(function () {
      // V8 ~ Android 4.3-
      $toFixed.call({});
    })), 'Number', {
      toFixed: function toFixed(fractionDigits) {
        var x = aNumberValue(this, ERROR);
        var f = toInteger(fractionDigits);
        var s = '';
        var m = ZERO;
        var e, z, j, k;
        if (f < 0 || f > 20) throw RangeError(ERROR); // eslint-disable-next-line no-self-compare

        if (x != x) return 'NaN';
        if (x <= -1e21 || x >= 1e21) return String(x);

        if (x < 0) {
          s = '-';
          x = -x;
        }

        if (x > 1e-21) {
          e = log(x * pow(2, 69, 1)) - 69;
          z = e < 0 ? x * pow(2, -e, 1) : x / pow(2, e, 1);
          z *= 0x10000000000000;
          e = 52 - e;

          if (e > 0) {
            multiply(0, z);
            j = f;

            while (j >= 7) {
              multiply(1e7, 0);
              j -= 7;
            }

            multiply(pow(10, j, 1), 0);
            j = e - 1;

            while (j >= 23) {
              divide(1 << 23);
              j -= 23;
            }

            divide(1 << j);
            multiply(1, 1);
            divide(2);
            m = numToString();
          } else {
            multiply(0, z);
            multiply(1 << -e, 0);
            m = numToString() + repeat.call(ZERO, f);
          }
        }

        if (f > 0) {
          k = m.length;
          m = s + (k <= f ? '0.' + repeat.call(ZERO, f - k) + m : m.slice(0, k - f) + '.' + m.slice(k - f));
        } else {
          m = s + m;
        }

        return m;
      }
    });
  }, {
    "110": 110,
    "116": 116,
    "33": 33,
    "35": 35,
    "4": 4
  }],
  189: [function (_dereq_, module, exports) {
    'use strict';

    var $export = _dereq_(33);

    var $fails = _dereq_(35);

    var aNumberValue = _dereq_(4);

    var $toPrecision = 1.0.toPrecision;
    $export($export.P + $export.F * ($fails(function () {
      // IE7-
      return $toPrecision.call(1, undefined) !== '1';
    }) || !$fails(function () {
      // V8 ~ Android 4.3-
      $toPrecision.call({});
    })), 'Number', {
      toPrecision: function toPrecision(precision) {
        var that = aNumberValue(this, 'Number#toPrecision: incorrect invocation!');
        return precision === undefined ? $toPrecision.call(that) : $toPrecision.call(that, precision);
      }
    });
  }, {
    "33": 33,
    "35": 35,
    "4": 4
  }],
  190: [function (_dereq_, module, exports) {
    // 19.1.3.1 Object.assign(target, source)
    var $export = _dereq_(33);

    $export($export.S + $export.F, 'Object', {
      assign: _dereq_(70)
    });
  }, {
    "33": 33,
    "70": 70
  }],
  191: [function (_dereq_, module, exports) {
    var $export = _dereq_(33); // 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])


    $export($export.S, 'Object', {
      create: _dereq_(71)
    });
  }, {
    "33": 33,
    "71": 71
  }],
  192: [function (_dereq_, module, exports) {
    var $export = _dereq_(33); // 19.1.2.3 / 15.2.3.7 Object.defineProperties(O, Properties)


    $export($export.S + $export.F * !_dereq_(29), 'Object', {
      defineProperties: _dereq_(73)
    });
  }, {
    "29": 29,
    "33": 33,
    "73": 73
  }],
  193: [function (_dereq_, module, exports) {
    var $export = _dereq_(33); // 19.1.2.4 / 15.2.3.6 Object.defineProperty(O, P, Attributes)


    $export($export.S + $export.F * !_dereq_(29), 'Object', {
      defineProperty: _dereq_(72).f
    });
  }, {
    "29": 29,
    "33": 33,
    "72": 72
  }],
  194: [function (_dereq_, module, exports) {
    // 19.1.2.5 Object.freeze(O)
    var isObject = _dereq_(51);

    var meta = _dereq_(66).onFreeze;

    _dereq_(83)('freeze', function ($freeze) {
      return function freeze(it) {
        return $freeze && isObject(it) ? $freeze(meta(it)) : it;
      };
    });
  }, {
    "51": 51,
    "66": 66,
    "83": 83
  }],
  195: [function (_dereq_, module, exports) {
    // 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
    var toIObject = _dereq_(117);

    var $getOwnPropertyDescriptor = _dereq_(75).f;

    _dereq_(83)('getOwnPropertyDescriptor', function () {
      return function getOwnPropertyDescriptor(it, key) {
        return $getOwnPropertyDescriptor(toIObject(it), key);
      };
    });
  }, {
    "117": 117,
    "75": 75,
    "83": 83
  }],
  196: [function (_dereq_, module, exports) {
    // 19.1.2.7 Object.getOwnPropertyNames(O)
    _dereq_(83)('getOwnPropertyNames', function () {
      return _dereq_(76).f;
    });
  }, {
    "76": 76,
    "83": 83
  }],
  197: [function (_dereq_, module, exports) {
    // 19.1.2.9 Object.getPrototypeOf(O)
    var toObject = _dereq_(119);

    var $getPrototypeOf = _dereq_(79);

    _dereq_(83)('getPrototypeOf', function () {
      return function getPrototypeOf(it) {
        return $getPrototypeOf(toObject(it));
      };
    });
  }, {
    "119": 119,
    "79": 79,
    "83": 83
  }],
  198: [function (_dereq_, module, exports) {
    // 19.1.2.11 Object.isExtensible(O)
    var isObject = _dereq_(51);

    _dereq_(83)('isExtensible', function ($isExtensible) {
      return function isExtensible(it) {
        return isObject(it) ? $isExtensible ? $isExtensible(it) : true : false;
      };
    });
  }, {
    "51": 51,
    "83": 83
  }],
  199: [function (_dereq_, module, exports) {
    // 19.1.2.12 Object.isFrozen(O)
    var isObject = _dereq_(51);

    _dereq_(83)('isFrozen', function ($isFrozen) {
      return function isFrozen(it) {
        return isObject(it) ? $isFrozen ? $isFrozen(it) : false : true;
      };
    });
  }, {
    "51": 51,
    "83": 83
  }],
  200: [function (_dereq_, module, exports) {
    // 19.1.2.13 Object.isSealed(O)
    var isObject = _dereq_(51);

    _dereq_(83)('isSealed', function ($isSealed) {
      return function isSealed(it) {
        return isObject(it) ? $isSealed ? $isSealed(it) : false : true;
      };
    });
  }, {
    "51": 51,
    "83": 83
  }],
  201: [function (_dereq_, module, exports) {
    // 19.1.3.10 Object.is(value1, value2)
    var $export = _dereq_(33);

    $export($export.S, 'Object', {
      is: _dereq_(96)
    });
  }, {
    "33": 33,
    "96": 96
  }],
  202: [function (_dereq_, module, exports) {
    // 19.1.2.14 Object.keys(O)
    var toObject = _dereq_(119);

    var $keys = _dereq_(81);

    _dereq_(83)('keys', function () {
      return function keys(it) {
        return $keys(toObject(it));
      };
    });
  }, {
    "119": 119,
    "81": 81,
    "83": 83
  }],
  203: [function (_dereq_, module, exports) {
    // 19.1.2.15 Object.preventExtensions(O)
    var isObject = _dereq_(51);

    var meta = _dereq_(66).onFreeze;

    _dereq_(83)('preventExtensions', function ($preventExtensions) {
      return function preventExtensions(it) {
        return $preventExtensions && isObject(it) ? $preventExtensions(meta(it)) : it;
      };
    });
  }, {
    "51": 51,
    "66": 66,
    "83": 83
  }],
  204: [function (_dereq_, module, exports) {
    // 19.1.2.17 Object.seal(O)
    var isObject = _dereq_(51);

    var meta = _dereq_(66).onFreeze;

    _dereq_(83)('seal', function ($seal) {
      return function seal(it) {
        return $seal && isObject(it) ? $seal(meta(it)) : it;
      };
    });
  }, {
    "51": 51,
    "66": 66,
    "83": 83
  }],
  205: [function (_dereq_, module, exports) {
    // 19.1.3.19 Object.setPrototypeOf(O, proto)
    var $export = _dereq_(33);

    $export($export.S, 'Object', {
      setPrototypeOf: _dereq_(99).set
    });
  }, {
    "33": 33,
    "99": 99
  }],
  206: [function (_dereq_, module, exports) {
    'use strict'; // 19.1.3.6 Object.prototype.toString()

    var classof = _dereq_(17);

    var test = {};
    test[_dereq_(128)('toStringTag')] = 'z';

    if (test + '' != '[object z]') {
      _dereq_(94)(Object.prototype, 'toString', function toString() {
        return '[object ' + classof(this) + ']';
      }, true);
    }
  }, {
    "128": 128,
    "17": 17,
    "94": 94
  }],
  207: [function (_dereq_, module, exports) {
    var $export = _dereq_(33);

    var $parseFloat = _dereq_(86); // 18.2.4 parseFloat(string)


    $export($export.G + $export.F * (parseFloat != $parseFloat), {
      parseFloat: $parseFloat
    });
  }, {
    "33": 33,
    "86": 86
  }],
  208: [function (_dereq_, module, exports) {
    var $export = _dereq_(33);

    var $parseInt = _dereq_(87); // 18.2.5 parseInt(string, radix)


    $export($export.G + $export.F * (parseInt != $parseInt), {
      parseInt: $parseInt
    });
  }, {
    "33": 33,
    "87": 87
  }],
  209: [function (_dereq_, module, exports) {
    'use strict';

    var LIBRARY = _dereq_(60);

    var global = _dereq_(40);

    var ctx = _dereq_(25);

    var classof = _dereq_(17);

    var $export = _dereq_(33);

    var isObject = _dereq_(51);

    var aFunction = _dereq_(3);

    var anInstance = _dereq_(6);

    var forOf = _dereq_(39);

    var speciesConstructor = _dereq_(104);

    var task = _dereq_(113).set;

    var microtask = _dereq_(68)();

    var newPromiseCapabilityModule = _dereq_(69);

    var perform = _dereq_(90);

    var promiseResolve = _dereq_(91);

    var PROMISE = 'Promise';
    var TypeError = global.TypeError;
    var process = global.process;
    var $Promise = global[PROMISE];
    var isNode = classof(process) == 'process';

    var empty = function empty() {
      /* empty */
    };

    var Internal, newGenericPromiseCapability, OwnPromiseCapability, Wrapper;
    var newPromiseCapability = newGenericPromiseCapability = newPromiseCapabilityModule.f;
    var USE_NATIVE = !!function () {
      try {
        // correct subclassing with @@species support
        var promise = $Promise.resolve(1);

        var FakePromise = (promise.constructor = {})[_dereq_(128)('species')] = function (exec) {
          exec(empty, empty);
        }; // unhandled rejections tracking support, NodeJS Promise without it fails @@species test


        return (isNode || typeof PromiseRejectionEvent == 'function') && promise.then(empty) instanceof FakePromise;
      } catch (e) {
        /* empty */
      }
    }(); // helpers

    var sameConstructor = LIBRARY ? function (a, b) {
      // with library wrapper special case
      return a === b || a === $Promise && b === Wrapper;
    } : function (a, b) {
      return a === b;
    };

    var isThenable = function isThenable(it) {
      var then;
      return isObject(it) && typeof (then = it.then) == 'function' ? then : false;
    };

    var notify = function notify(promise, isReject) {
      if (promise._n) return;
      promise._n = true;
      var chain = promise._c;
      microtask(function () {
        var value = promise._v;
        var ok = promise._s == 1;
        var i = 0;

        var run = function run(reaction) {
          var handler = ok ? reaction.ok : reaction.fail;
          var resolve = reaction.resolve;
          var reject = reaction.reject;
          var domain = reaction.domain;
          var result, then;

          try {
            if (handler) {
              if (!ok) {
                if (promise._h == 2) onHandleUnhandled(promise);
                promise._h = 1;
              }

              if (handler === true) result = value;else {
                if (domain) domain.enter();
                result = handler(value);
                if (domain) domain.exit();
              }

              if (result === reaction.promise) {
                reject(TypeError('Promise-chain cycle'));
              } else if (then = isThenable(result)) {
                then.call(result, resolve, reject);
              } else resolve(result);
            } else reject(value);
          } catch (e) {
            reject(e);
          }
        };

        while (chain.length > i) {
          run(chain[i++]);
        } // variable length - can't use forEach


        promise._c = [];
        promise._n = false;
        if (isReject && !promise._h) onUnhandled(promise);
      });
    };

    var onUnhandled = function onUnhandled(promise) {
      task.call(global, function () {
        var value = promise._v;
        var unhandled = isUnhandled(promise);
        var result, handler, console;

        if (unhandled) {
          result = perform(function () {
            if (isNode) {
              process.emit('unhandledRejection', value, promise);
            } else if (handler = global.onunhandledrejection) {
              handler({
                promise: promise,
                reason: value
              });
            } else if ((console = global.console) && console.error) {
              console.error('Unhandled promise rejection', value);
            }
          }); // Browsers should not trigger `rejectionHandled` event if it was handled here, NodeJS - should

          promise._h = isNode || isUnhandled(promise) ? 2 : 1;
        }

        promise._a = undefined;
        if (unhandled && result.e) throw result.v;
      });
    };

    var isUnhandled = function isUnhandled(promise) {
      if (promise._h == 1) return false;
      var chain = promise._a || promise._c;
      var i = 0;
      var reaction;

      while (chain.length > i) {
        reaction = chain[i++];
        if (reaction.fail || !isUnhandled(reaction.promise)) return false;
      }

      return true;
    };

    var onHandleUnhandled = function onHandleUnhandled(promise) {
      task.call(global, function () {
        var handler;

        if (isNode) {
          process.emit('rejectionHandled', promise);
        } else if (handler = global.onrejectionhandled) {
          handler({
            promise: promise,
            reason: promise._v
          });
        }
      });
    };

    var $reject = function $reject(value) {
      var promise = this;
      if (promise._d) return;
      promise._d = true;
      promise = promise._w || promise; // unwrap

      promise._v = value;
      promise._s = 2;
      if (!promise._a) promise._a = promise._c.slice();
      notify(promise, true);
    };

    var $resolve = function $resolve(value) {
      var promise = this;
      var then;
      if (promise._d) return;
      promise._d = true;
      promise = promise._w || promise; // unwrap

      try {
        if (promise === value) throw TypeError("Promise can't be resolved itself");

        if (then = isThenable(value)) {
          microtask(function () {
            var wrapper = {
              _w: promise,
              _d: false
            }; // wrap

            try {
              then.call(value, ctx($resolve, wrapper, 1), ctx($reject, wrapper, 1));
            } catch (e) {
              $reject.call(wrapper, e);
            }
          });
        } else {
          promise._v = value;
          promise._s = 1;
          notify(promise, false);
        }
      } catch (e) {
        $reject.call({
          _w: promise,
          _d: false
        }, e); // wrap
      }
    }; // constructor polyfill


    if (!USE_NATIVE) {
      // 25.4.3.1 Promise(executor)
      $Promise = function Promise(executor) {
        anInstance(this, $Promise, PROMISE, '_h');
        aFunction(executor);
        Internal.call(this);

        try {
          executor(ctx($resolve, this, 1), ctx($reject, this, 1));
        } catch (err) {
          $reject.call(this, err);
        }
      }; // eslint-disable-next-line no-unused-vars


      Internal = function Promise(executor) {
        this._c = []; // <- awaiting reactions

        this._a = undefined; // <- checked in isUnhandled reactions

        this._s = 0; // <- state

        this._d = false; // <- done

        this._v = undefined; // <- value

        this._h = 0; // <- rejection state, 0 - default, 1 - handled, 2 - unhandled

        this._n = false; // <- notify
      };

      Internal.prototype = _dereq_(93)($Promise.prototype, {
        // 25.4.5.3 Promise.prototype.then(onFulfilled, onRejected)
        then: function then(onFulfilled, onRejected) {
          var reaction = newPromiseCapability(speciesConstructor(this, $Promise));
          reaction.ok = typeof onFulfilled == 'function' ? onFulfilled : true;
          reaction.fail = typeof onRejected == 'function' && onRejected;
          reaction.domain = isNode ? process.domain : undefined;

          this._c.push(reaction);

          if (this._a) this._a.push(reaction);
          if (this._s) notify(this, false);
          return reaction.promise;
        },
        // 25.4.5.1 Promise.prototype.catch(onRejected)
        'catch': function _catch(onRejected) {
          return this.then(undefined, onRejected);
        }
      });

      OwnPromiseCapability = function OwnPromiseCapability() {
        var promise = new Internal();
        this.promise = promise;
        this.resolve = ctx($resolve, promise, 1);
        this.reject = ctx($reject, promise, 1);
      };

      newPromiseCapabilityModule.f = newPromiseCapability = function newPromiseCapability(C) {
        return sameConstructor($Promise, C) ? new OwnPromiseCapability(C) : newGenericPromiseCapability(C);
      };
    }

    $export($export.G + $export.W + $export.F * !USE_NATIVE, {
      Promise: $Promise
    });

    _dereq_(101)($Promise, PROMISE);

    _dereq_(100)(PROMISE);

    Wrapper = _dereq_(23)[PROMISE]; // statics

    $export($export.S + $export.F * !USE_NATIVE, PROMISE, {
      // 25.4.4.5 Promise.reject(r)
      reject: function reject(r) {
        var capability = newPromiseCapability(this);
        var $$reject = capability.reject;
        $$reject(r);
        return capability.promise;
      }
    });
    $export($export.S + $export.F * (LIBRARY || !USE_NATIVE), PROMISE, {
      // 25.4.4.6 Promise.resolve(x)
      resolve: function resolve(x) {
        // instanceof instead of internal slot check because we should fix it without replacement native Promise core
        if (x instanceof $Promise && sameConstructor(x.constructor, this)) return x;
        return promiseResolve(this, x);
      }
    });
    $export($export.S + $export.F * !(USE_NATIVE && _dereq_(56)(function (iter) {
      $Promise.all(iter)['catch'](empty);
    })), PROMISE, {
      // 25.4.4.1 Promise.all(iterable)
      all: function all(iterable) {
        var C = this;
        var capability = newPromiseCapability(C);
        var resolve = capability.resolve;
        var reject = capability.reject;
        var result = perform(function () {
          var values = [];
          var index = 0;
          var remaining = 1;
          forOf(iterable, false, function (promise) {
            var $index = index++;
            var alreadyCalled = false;
            values.push(undefined);
            remaining++;
            C.resolve(promise).then(function (value) {
              if (alreadyCalled) return;
              alreadyCalled = true;
              values[$index] = value;
              --remaining || resolve(values);
            }, reject);
          });
          --remaining || resolve(values);
        });
        if (result.e) reject(result.v);
        return capability.promise;
      },
      // 25.4.4.4 Promise.race(iterable)
      race: function race(iterable) {
        var C = this;
        var capability = newPromiseCapability(C);
        var reject = capability.reject;
        var result = perform(function () {
          forOf(iterable, false, function (promise) {
            C.resolve(promise).then(capability.resolve, reject);
          });
        });
        if (result.e) reject(result.v);
        return capability.promise;
      }
    });
  }, {
    "100": 100,
    "101": 101,
    "104": 104,
    "113": 113,
    "128": 128,
    "17": 17,
    "23": 23,
    "25": 25,
    "3": 3,
    "33": 33,
    "39": 39,
    "40": 40,
    "51": 51,
    "56": 56,
    "6": 6,
    "60": 60,
    "68": 68,
    "69": 69,
    "90": 90,
    "91": 91,
    "93": 93
  }],
  210: [function (_dereq_, module, exports) {
    // 26.1.1 Reflect.apply(target, thisArgument, argumentsList)
    var $export = _dereq_(33);

    var aFunction = _dereq_(3);

    var anObject = _dereq_(7);

    var rApply = (_dereq_(40).Reflect || {}).apply;
    var fApply = Function.apply; // MS Edge argumentsList argument is optional

    $export($export.S + $export.F * !_dereq_(35)(function () {
      rApply(function () {
        /* empty */
      });
    }), 'Reflect', {
      apply: function apply(target, thisArgument, argumentsList) {
        var T = aFunction(target);
        var L = anObject(argumentsList);
        return rApply ? rApply(T, thisArgument, L) : fApply.call(T, thisArgument, L);
      }
    });
  }, {
    "3": 3,
    "33": 33,
    "35": 35,
    "40": 40,
    "7": 7
  }],
  211: [function (_dereq_, module, exports) {
    // 26.1.2 Reflect.construct(target, argumentsList [, newTarget])
    var $export = _dereq_(33);

    var create = _dereq_(71);

    var aFunction = _dereq_(3);

    var anObject = _dereq_(7);

    var isObject = _dereq_(51);

    var fails = _dereq_(35);

    var bind = _dereq_(16);

    var rConstruct = (_dereq_(40).Reflect || {}).construct; // MS Edge supports only 2 arguments and argumentsList argument is optional
    // FF Nightly sets third argument as `new.target`, but does not create `this` from it

    var NEW_TARGET_BUG = fails(function () {
      function F() {
        /* empty */
      }

      return !(rConstruct(function () {
        /* empty */
      }, [], F) instanceof F);
    });
    var ARGS_BUG = !fails(function () {
      rConstruct(function () {
        /* empty */
      });
    });
    $export($export.S + $export.F * (NEW_TARGET_BUG || ARGS_BUG), 'Reflect', {
      construct: function construct(Target, args
      /* , newTarget */
      ) {
        aFunction(Target);
        anObject(args);
        var newTarget = arguments.length < 3 ? Target : aFunction(arguments[2]);
        if (ARGS_BUG && !NEW_TARGET_BUG) return rConstruct(Target, args, newTarget);

        if (Target == newTarget) {
          // w/o altered newTarget, optimization for 0-4 arguments
          switch (args.length) {
            case 0:
              return new Target();

            case 1:
              return new Target(args[0]);

            case 2:
              return new Target(args[0], args[1]);

            case 3:
              return new Target(args[0], args[1], args[2]);

            case 4:
              return new Target(args[0], args[1], args[2], args[3]);
          } // w/o altered newTarget, lot of arguments case


          var $args = [null];
          $args.push.apply($args, args);
          return new (bind.apply(Target, $args))();
        } // with altered newTarget, not support built-in constructors


        var proto = newTarget.prototype;
        var instance = create(isObject(proto) ? proto : Object.prototype);
        var result = Function.apply.call(Target, instance, args);
        return isObject(result) ? result : instance;
      }
    });
  }, {
    "16": 16,
    "3": 3,
    "33": 33,
    "35": 35,
    "40": 40,
    "51": 51,
    "7": 7,
    "71": 71
  }],
  212: [function (_dereq_, module, exports) {
    // 26.1.3 Reflect.defineProperty(target, propertyKey, attributes)
    var dP = _dereq_(72);

    var $export = _dereq_(33);

    var anObject = _dereq_(7);

    var toPrimitive = _dereq_(120); // MS Edge has broken Reflect.defineProperty - throwing instead of returning false


    $export($export.S + $export.F * _dereq_(35)(function () {
      // eslint-disable-next-line no-undef
      Reflect.defineProperty(dP.f({}, 1, {
        value: 1
      }), 1, {
        value: 2
      });
    }), 'Reflect', {
      defineProperty: function defineProperty(target, propertyKey, attributes) {
        anObject(target);
        propertyKey = toPrimitive(propertyKey, true);
        anObject(attributes);

        try {
          dP.f(target, propertyKey, attributes);
          return true;
        } catch (e) {
          return false;
        }
      }
    });
  }, {
    "120": 120,
    "33": 33,
    "35": 35,
    "7": 7,
    "72": 72
  }],
  213: [function (_dereq_, module, exports) {
    // 26.1.4 Reflect.deleteProperty(target, propertyKey)
    var $export = _dereq_(33);

    var gOPD = _dereq_(75).f;

    var anObject = _dereq_(7);

    $export($export.S, 'Reflect', {
      deleteProperty: function deleteProperty(target, propertyKey) {
        var desc = gOPD(anObject(target), propertyKey);
        return desc && !desc.configurable ? false : delete target[propertyKey];
      }
    });
  }, {
    "33": 33,
    "7": 7,
    "75": 75
  }],
  214: [function (_dereq_, module, exports) {
    'use strict'; // 26.1.5 Reflect.enumerate(target)

    var $export = _dereq_(33);

    var anObject = _dereq_(7);

    var Enumerate = function Enumerate(iterated) {
      this._t = anObject(iterated); // target

      this._i = 0; // next index

      var keys = this._k = []; // keys

      var key;

      for (key in iterated) {
        keys.push(key);
      }
    };

    _dereq_(54)(Enumerate, 'Object', function () {
      var that = this;
      var keys = that._k;
      var key;

      do {
        if (that._i >= keys.length) return {
          value: undefined,
          done: true
        };
      } while (!((key = keys[that._i++]) in that._t));

      return {
        value: key,
        done: false
      };
    });

    $export($export.S, 'Reflect', {
      enumerate: function enumerate(target) {
        return new Enumerate(target);
      }
    });
  }, {
    "33": 33,
    "54": 54,
    "7": 7
  }],
  215: [function (_dereq_, module, exports) {
    // 26.1.7 Reflect.getOwnPropertyDescriptor(target, propertyKey)
    var gOPD = _dereq_(75);

    var $export = _dereq_(33);

    var anObject = _dereq_(7);

    $export($export.S, 'Reflect', {
      getOwnPropertyDescriptor: function getOwnPropertyDescriptor(target, propertyKey) {
        return gOPD.f(anObject(target), propertyKey);
      }
    });
  }, {
    "33": 33,
    "7": 7,
    "75": 75
  }],
  216: [function (_dereq_, module, exports) {
    // 26.1.8 Reflect.getPrototypeOf(target)
    var $export = _dereq_(33);

    var getProto = _dereq_(79);

    var anObject = _dereq_(7);

    $export($export.S, 'Reflect', {
      getPrototypeOf: function getPrototypeOf(target) {
        return getProto(anObject(target));
      }
    });
  }, {
    "33": 33,
    "7": 7,
    "79": 79
  }],
  217: [function (_dereq_, module, exports) {
    // 26.1.6 Reflect.get(target, propertyKey [, receiver])
    var gOPD = _dereq_(75);

    var getPrototypeOf = _dereq_(79);

    var has = _dereq_(41);

    var $export = _dereq_(33);

    var isObject = _dereq_(51);

    var anObject = _dereq_(7);

    function get(target, propertyKey
    /* , receiver */
    ) {
      var receiver = arguments.length < 3 ? target : arguments[2];
      var desc, proto;
      if (anObject(target) === receiver) return target[propertyKey];
      if (desc = gOPD.f(target, propertyKey)) return has(desc, 'value') ? desc.value : desc.get !== undefined ? desc.get.call(receiver) : undefined;
      if (isObject(proto = getPrototypeOf(target))) return get(proto, propertyKey, receiver);
    }

    $export($export.S, 'Reflect', {
      get: get
    });
  }, {
    "33": 33,
    "41": 41,
    "51": 51,
    "7": 7,
    "75": 75,
    "79": 79
  }],
  218: [function (_dereq_, module, exports) {
    // 26.1.9 Reflect.has(target, propertyKey)
    var $export = _dereq_(33);

    $export($export.S, 'Reflect', {
      has: function has(target, propertyKey) {
        return propertyKey in target;
      }
    });
  }, {
    "33": 33
  }],
  219: [function (_dereq_, module, exports) {
    // 26.1.10 Reflect.isExtensible(target)
    var $export = _dereq_(33);

    var anObject = _dereq_(7);

    var $isExtensible = Object.isExtensible;
    $export($export.S, 'Reflect', {
      isExtensible: function isExtensible(target) {
        anObject(target);
        return $isExtensible ? $isExtensible(target) : true;
      }
    });
  }, {
    "33": 33,
    "7": 7
  }],
  220: [function (_dereq_, module, exports) {
    // 26.1.11 Reflect.ownKeys(target)
    var $export = _dereq_(33);

    $export($export.S, 'Reflect', {
      ownKeys: _dereq_(85)
    });
  }, {
    "33": 33,
    "85": 85
  }],
  221: [function (_dereq_, module, exports) {
    // 26.1.12 Reflect.preventExtensions(target)
    var $export = _dereq_(33);

    var anObject = _dereq_(7);

    var $preventExtensions = Object.preventExtensions;
    $export($export.S, 'Reflect', {
      preventExtensions: function preventExtensions(target) {
        anObject(target);

        try {
          if ($preventExtensions) $preventExtensions(target);
          return true;
        } catch (e) {
          return false;
        }
      }
    });
  }, {
    "33": 33,
    "7": 7
  }],
  222: [function (_dereq_, module, exports) {
    // 26.1.14 Reflect.setPrototypeOf(target, proto)
    var $export = _dereq_(33);

    var setProto = _dereq_(99);

    if (setProto) $export($export.S, 'Reflect', {
      setPrototypeOf: function setPrototypeOf(target, proto) {
        setProto.check(target, proto);

        try {
          setProto.set(target, proto);
          return true;
        } catch (e) {
          return false;
        }
      }
    });
  }, {
    "33": 33,
    "99": 99
  }],
  223: [function (_dereq_, module, exports) {
    // 26.1.13 Reflect.set(target, propertyKey, V [, receiver])
    var dP = _dereq_(72);

    var gOPD = _dereq_(75);

    var getPrototypeOf = _dereq_(79);

    var has = _dereq_(41);

    var $export = _dereq_(33);

    var createDesc = _dereq_(92);

    var anObject = _dereq_(7);

    var isObject = _dereq_(51);

    function set(target, propertyKey, V
    /* , receiver */
    ) {
      var receiver = arguments.length < 4 ? target : arguments[3];
      var ownDesc = gOPD.f(anObject(target), propertyKey);
      var existingDescriptor, proto;

      if (!ownDesc) {
        if (isObject(proto = getPrototypeOf(target))) {
          return set(proto, propertyKey, V, receiver);
        }

        ownDesc = createDesc(0);
      }

      if (has(ownDesc, 'value')) {
        if (ownDesc.writable === false || !isObject(receiver)) return false;
        existingDescriptor = gOPD.f(receiver, propertyKey) || createDesc(0);
        existingDescriptor.value = V;
        dP.f(receiver, propertyKey, existingDescriptor);
        return true;
      }

      return ownDesc.set === undefined ? false : (ownDesc.set.call(receiver, V), true);
    }

    $export($export.S, 'Reflect', {
      set: set
    });
  }, {
    "33": 33,
    "41": 41,
    "51": 51,
    "7": 7,
    "72": 72,
    "75": 75,
    "79": 79,
    "92": 92
  }],
  224: [function (_dereq_, module, exports) {
    var global = _dereq_(40);

    var inheritIfRequired = _dereq_(45);

    var dP = _dereq_(72).f;

    var gOPN = _dereq_(77).f;

    var isRegExp = _dereq_(52);

    var $flags = _dereq_(37);

    var $RegExp = global.RegExp;
    var Base = $RegExp;
    var proto = $RegExp.prototype;
    var re1 = /a/g;
    var re2 = /a/g; // "new" creates a new object, old webkit buggy here

    var CORRECT_NEW = new $RegExp(re1) !== re1;

    if (_dereq_(29) && (!CORRECT_NEW || _dereq_(35)(function () {
      re2[_dereq_(128)('match')] = false; // RegExp constructor can alter flags and IsRegExp works correct with @@match

      return $RegExp(re1) != re1 || $RegExp(re2) == re2 || $RegExp(re1, 'i') != '/a/i';
    }))) {
      $RegExp = function RegExp(p, f) {
        var tiRE = this instanceof $RegExp;
        var piRE = isRegExp(p);
        var fiU = f === undefined;
        return !tiRE && piRE && p.constructor === $RegExp && fiU ? p : inheritIfRequired(CORRECT_NEW ? new Base(piRE && !fiU ? p.source : p, f) : Base((piRE = p instanceof $RegExp) ? p.source : p, piRE && fiU ? $flags.call(p) : f), tiRE ? this : proto, $RegExp);
      };

      var proxy = function proxy(key) {
        key in $RegExp || dP($RegExp, key, {
          configurable: true,
          get: function get() {
            return Base[key];
          },
          set: function set(it) {
            Base[key] = it;
          }
        });
      };

      for (var keys = gOPN(Base), i = 0; keys.length > i;) {
        proxy(keys[i++]);
      }

      proto.constructor = $RegExp;
      $RegExp.prototype = proto;

      _dereq_(94)(global, 'RegExp', $RegExp);
    }

    _dereq_(100)('RegExp');
  }, {
    "100": 100,
    "128": 128,
    "29": 29,
    "35": 35,
    "37": 37,
    "40": 40,
    "45": 45,
    "52": 52,
    "72": 72,
    "77": 77,
    "94": 94
  }],
  225: [function (_dereq_, module, exports) {
    // 21.2.5.3 get RegExp.prototype.flags()
    if (_dereq_(29) && /./g.flags != 'g') _dereq_(72).f(RegExp.prototype, 'flags', {
      configurable: true,
      get: _dereq_(37)
    });
  }, {
    "29": 29,
    "37": 37,
    "72": 72
  }],
  226: [function (_dereq_, module, exports) {
    // @@match logic
    _dereq_(36)('match', 1, function (defined, MATCH, $match) {
      // 21.1.3.11 String.prototype.match(regexp)
      return [function match(regexp) {
        'use strict';

        var O = defined(this);
        var fn = regexp == undefined ? undefined : regexp[MATCH];
        return fn !== undefined ? fn.call(regexp, O) : new RegExp(regexp)[MATCH](String(O));
      }, $match];
    });
  }, {
    "36": 36
  }],
  227: [function (_dereq_, module, exports) {
    // @@replace logic
    _dereq_(36)('replace', 2, function (defined, REPLACE, $replace) {
      // 21.1.3.14 String.prototype.replace(searchValue, replaceValue)
      return [function replace(searchValue, replaceValue) {
        'use strict';

        var O = defined(this);
        var fn = searchValue == undefined ? undefined : searchValue[REPLACE];
        return fn !== undefined ? fn.call(searchValue, O, replaceValue) : $replace.call(String(O), searchValue, replaceValue);
      }, $replace];
    });
  }, {
    "36": 36
  }],
  228: [function (_dereq_, module, exports) {
    // @@search logic
    _dereq_(36)('search', 1, function (defined, SEARCH, $search) {
      // 21.1.3.15 String.prototype.search(regexp)
      return [function search(regexp) {
        'use strict';

        var O = defined(this);
        var fn = regexp == undefined ? undefined : regexp[SEARCH];
        return fn !== undefined ? fn.call(regexp, O) : new RegExp(regexp)[SEARCH](String(O));
      }, $search];
    });
  }, {
    "36": 36
  }],
  229: [function (_dereq_, module, exports) {
    // @@split logic
    _dereq_(36)('split', 2, function (defined, SPLIT, $split) {
      'use strict';

      var isRegExp = _dereq_(52);

      var _split = $split;
      var $push = [].push;
      var $SPLIT = 'split';
      var LENGTH = 'length';
      var LAST_INDEX = 'lastIndex';

      if ('abbc'[$SPLIT](/(b)*/)[1] == 'c' || 'test'[$SPLIT](/(?:)/, -1)[LENGTH] != 4 || 'ab'[$SPLIT](/(?:ab)*/)[LENGTH] != 2 || '.'[$SPLIT](/(.?)(.?)/)[LENGTH] != 4 || '.'[$SPLIT](/()()/)[LENGTH] > 1 || ''[$SPLIT](/.?/)[LENGTH]) {
        var NPCG = /()??/.exec('')[1] === undefined; // nonparticipating capturing group
        // based on es5-shim implementation, need to rework it

        $split = function $split(separator, limit) {
          var string = String(this);
          if (separator === undefined && limit === 0) return []; // If `separator` is not a regex, use native split

          if (!isRegExp(separator)) return _split.call(string, separator, limit);
          var output = [];
          var flags = (separator.ignoreCase ? 'i' : '') + (separator.multiline ? 'm' : '') + (separator.unicode ? 'u' : '') + (separator.sticky ? 'y' : '');
          var lastLastIndex = 0;
          var splitLimit = limit === undefined ? 4294967295 : limit >>> 0; // Make `global` and avoid `lastIndex` issues by working with a copy

          var separatorCopy = new RegExp(separator.source, flags + 'g');
          var separator2, match, lastIndex, lastLength, i; // Doesn't need flags gy, but they don't hurt

          if (!NPCG) separator2 = new RegExp('^' + separatorCopy.source + '$(?!\\s)', flags);

          while (match = separatorCopy.exec(string)) {
            // `separatorCopy.lastIndex` is not reliable cross-browser
            lastIndex = match.index + match[0][LENGTH];

            if (lastIndex > lastLastIndex) {
              output.push(string.slice(lastLastIndex, match.index)); // Fix browsers whose `exec` methods don't consistently return `undefined` for NPCG
              // eslint-disable-next-line no-loop-func

              if (!NPCG && match[LENGTH] > 1) match[0].replace(separator2, function () {
                for (i = 1; i < arguments[LENGTH] - 2; i++) {
                  if (arguments[i] === undefined) match[i] = undefined;
                }
              });
              if (match[LENGTH] > 1 && match.index < string[LENGTH]) $push.apply(output, match.slice(1));
              lastLength = match[0][LENGTH];
              lastLastIndex = lastIndex;
              if (output[LENGTH] >= splitLimit) break;
            }

            if (separatorCopy[LAST_INDEX] === match.index) separatorCopy[LAST_INDEX]++; // Avoid an infinite loop
          }

          if (lastLastIndex === string[LENGTH]) {
            if (lastLength || !separatorCopy.test('')) output.push('');
          } else output.push(string.slice(lastLastIndex));

          return output[LENGTH] > splitLimit ? output.slice(0, splitLimit) : output;
        }; // Chakra, V8

      } else if ('0'[$SPLIT](undefined, 0)[LENGTH]) {
        $split = function $split(separator, limit) {
          return separator === undefined && limit === 0 ? [] : _split.call(this, separator, limit);
        };
      } // 21.1.3.17 String.prototype.split(separator, limit)


      return [function split(separator, limit) {
        var O = defined(this);
        var fn = separator == undefined ? undefined : separator[SPLIT];
        return fn !== undefined ? fn.call(separator, O, limit) : $split.call(String(O), separator, limit);
      }, $split];
    });
  }, {
    "36": 36,
    "52": 52
  }],
  230: [function (_dereq_, module, exports) {
    'use strict';

    _dereq_(225);

    var anObject = _dereq_(7);

    var $flags = _dereq_(37);

    var DESCRIPTORS = _dereq_(29);

    var TO_STRING = 'toString';
    var $toString = /./[TO_STRING];

    var define = function define(fn) {
      _dereq_(94)(RegExp.prototype, TO_STRING, fn, true);
    }; // 21.2.5.14 RegExp.prototype.toString()


    if (_dereq_(35)(function () {
      return $toString.call({
        source: 'a',
        flags: 'b'
      }) != '/a/b';
    })) {
      define(function toString() {
        var R = anObject(this);
        return '/'.concat(R.source, '/', 'flags' in R ? R.flags : !DESCRIPTORS && R instanceof RegExp ? $flags.call(R) : undefined);
      }); // FF44- RegExp#toString has a wrong name
    } else if ($toString.name != TO_STRING) {
      define(function toString() {
        return $toString.call(this);
      });
    }
  }, {
    "225": 225,
    "29": 29,
    "35": 35,
    "37": 37,
    "7": 7,
    "94": 94
  }],
  231: [function (_dereq_, module, exports) {
    'use strict';

    var strong = _dereq_(19);

    var validate = _dereq_(125);

    var SET = 'Set'; // 23.2 Set Objects

    module.exports = _dereq_(22)(SET, function (get) {
      return function Set() {
        return get(this, arguments.length > 0 ? arguments[0] : undefined);
      };
    }, {
      // 23.2.3.1 Set.prototype.add(value)
      add: function add(value) {
        return strong.def(validate(this, SET), value = value === 0 ? 0 : value, value);
      }
    }, strong);
  }, {
    "125": 125,
    "19": 19,
    "22": 22
  }],
  232: [function (_dereq_, module, exports) {
    'use strict'; // B.2.3.2 String.prototype.anchor(name)

    _dereq_(108)('anchor', function (createHTML) {
      return function anchor(name) {
        return createHTML(this, 'a', 'name', name);
      };
    });
  }, {
    "108": 108
  }],
  233: [function (_dereq_, module, exports) {
    'use strict'; // B.2.3.3 String.prototype.big()

    _dereq_(108)('big', function (createHTML) {
      return function big() {
        return createHTML(this, 'big', '', '');
      };
    });
  }, {
    "108": 108
  }],
  234: [function (_dereq_, module, exports) {
    'use strict'; // B.2.3.4 String.prototype.blink()

    _dereq_(108)('blink', function (createHTML) {
      return function blink() {
        return createHTML(this, 'blink', '', '');
      };
    });
  }, {
    "108": 108
  }],
  235: [function (_dereq_, module, exports) {
    'use strict'; // B.2.3.5 String.prototype.bold()

    _dereq_(108)('bold', function (createHTML) {
      return function bold() {
        return createHTML(this, 'b', '', '');
      };
    });
  }, {
    "108": 108
  }],
  236: [function (_dereq_, module, exports) {
    'use strict';

    var $export = _dereq_(33);

    var $at = _dereq_(106)(false);

    $export($export.P, 'String', {
      // 21.1.3.3 String.prototype.codePointAt(pos)
      codePointAt: function codePointAt(pos) {
        return $at(this, pos);
      }
    });
  }, {
    "106": 106,
    "33": 33
  }],
  237: [function (_dereq_, module, exports) {
    // 21.1.3.6 String.prototype.endsWith(searchString [, endPosition])
    'use strict';

    var $export = _dereq_(33);

    var toLength = _dereq_(118);

    var context = _dereq_(107);

    var ENDS_WITH = 'endsWith';
    var $endsWith = ''[ENDS_WITH];
    $export($export.P + $export.F * _dereq_(34)(ENDS_WITH), 'String', {
      endsWith: function endsWith(searchString
      /* , endPosition = @length */
      ) {
        var that = context(this, searchString, ENDS_WITH);
        var endPosition = arguments.length > 1 ? arguments[1] : undefined;
        var len = toLength(that.length);
        var end = endPosition === undefined ? len : Math.min(toLength(endPosition), len);
        var search = String(searchString);
        return $endsWith ? $endsWith.call(that, search, end) : that.slice(end - search.length, end) === search;
      }
    });
  }, {
    "107": 107,
    "118": 118,
    "33": 33,
    "34": 34
  }],
  238: [function (_dereq_, module, exports) {
    'use strict'; // B.2.3.6 String.prototype.fixed()

    _dereq_(108)('fixed', function (createHTML) {
      return function fixed() {
        return createHTML(this, 'tt', '', '');
      };
    });
  }, {
    "108": 108
  }],
  239: [function (_dereq_, module, exports) {
    'use strict'; // B.2.3.7 String.prototype.fontcolor(color)

    _dereq_(108)('fontcolor', function (createHTML) {
      return function fontcolor(color) {
        return createHTML(this, 'font', 'color', color);
      };
    });
  }, {
    "108": 108
  }],
  240: [function (_dereq_, module, exports) {
    'use strict'; // B.2.3.8 String.prototype.fontsize(size)

    _dereq_(108)('fontsize', function (createHTML) {
      return function fontsize(size) {
        return createHTML(this, 'font', 'size', size);
      };
    });
  }, {
    "108": 108
  }],
  241: [function (_dereq_, module, exports) {
    var $export = _dereq_(33);

    var toAbsoluteIndex = _dereq_(114);

    var fromCharCode = String.fromCharCode;
    var $fromCodePoint = String.fromCodePoint; // length should be 1, old FF problem

    $export($export.S + $export.F * (!!$fromCodePoint && $fromCodePoint.length != 1), 'String', {
      // 21.1.2.2 String.fromCodePoint(...codePoints)
      fromCodePoint: function fromCodePoint(x) {
        // eslint-disable-line no-unused-vars
        var res = [];
        var aLen = arguments.length;
        var i = 0;
        var code;

        while (aLen > i) {
          code = +arguments[i++];
          if (toAbsoluteIndex(code, 0x10ffff) !== code) throw RangeError(code + ' is not a valid code point');
          res.push(code < 0x10000 ? fromCharCode(code) : fromCharCode(((code -= 0x10000) >> 10) + 0xd800, code % 0x400 + 0xdc00));
        }

        return res.join('');
      }
    });
  }, {
    "114": 114,
    "33": 33
  }],
  242: [function (_dereq_, module, exports) {
    // 21.1.3.7 String.prototype.includes(searchString, position = 0)
    'use strict';

    var $export = _dereq_(33);

    var context = _dereq_(107);

    var INCLUDES = 'includes';
    $export($export.P + $export.F * _dereq_(34)(INCLUDES), 'String', {
      includes: function includes(searchString
      /* , position = 0 */
      ) {
        return !!~context(this, searchString, INCLUDES).indexOf(searchString, arguments.length > 1 ? arguments[1] : undefined);
      }
    });
  }, {
    "107": 107,
    "33": 33,
    "34": 34
  }],
  243: [function (_dereq_, module, exports) {
    'use strict'; // B.2.3.9 String.prototype.italics()

    _dereq_(108)('italics', function (createHTML) {
      return function italics() {
        return createHTML(this, 'i', '', '');
      };
    });
  }, {
    "108": 108
  }],
  244: [function (_dereq_, module, exports) {
    'use strict';

    var $at = _dereq_(106)(true); // 21.1.3.27 String.prototype[@@iterator]()


    _dereq_(55)(String, 'String', function (iterated) {
      this._t = String(iterated); // target

      this._i = 0; // next index
      // 21.1.5.2.1 %StringIteratorPrototype%.next()
    }, function () {
      var O = this._t;
      var index = this._i;
      var point;
      if (index >= O.length) return {
        value: undefined,
        done: true
      };
      point = $at(O, index);
      this._i += point.length;
      return {
        value: point,
        done: false
      };
    });
  }, {
    "106": 106,
    "55": 55
  }],
  245: [function (_dereq_, module, exports) {
    'use strict'; // B.2.3.10 String.prototype.link(url)

    _dereq_(108)('link', function (createHTML) {
      return function link(url) {
        return createHTML(this, 'a', 'href', url);
      };
    });
  }, {
    "108": 108
  }],
  246: [function (_dereq_, module, exports) {
    var $export = _dereq_(33);

    var toIObject = _dereq_(117);

    var toLength = _dereq_(118);

    $export($export.S, 'String', {
      // 21.1.2.4 String.raw(callSite, ...substitutions)
      raw: function raw(callSite) {
        var tpl = toIObject(callSite.raw);
        var len = toLength(tpl.length);
        var aLen = arguments.length;
        var res = [];
        var i = 0;

        while (len > i) {
          res.push(String(tpl[i++]));
          if (i < aLen) res.push(String(arguments[i]));
        }

        return res.join('');
      }
    });
  }, {
    "117": 117,
    "118": 118,
    "33": 33
  }],
  247: [function (_dereq_, module, exports) {
    var $export = _dereq_(33);

    $export($export.P, 'String', {
      // 21.1.3.13 String.prototype.repeat(count)
      repeat: _dereq_(110)
    });
  }, {
    "110": 110,
    "33": 33
  }],
  248: [function (_dereq_, module, exports) {
    'use strict'; // B.2.3.11 String.prototype.small()

    _dereq_(108)('small', function (createHTML) {
      return function small() {
        return createHTML(this, 'small', '', '');
      };
    });
  }, {
    "108": 108
  }],
  249: [function (_dereq_, module, exports) {
    // 21.1.3.18 String.prototype.startsWith(searchString [, position ])
    'use strict';

    var $export = _dereq_(33);

    var toLength = _dereq_(118);

    var context = _dereq_(107);

    var STARTS_WITH = 'startsWith';
    var $startsWith = ''[STARTS_WITH];
    $export($export.P + $export.F * _dereq_(34)(STARTS_WITH), 'String', {
      startsWith: function startsWith(searchString
      /* , position = 0 */
      ) {
        var that = context(this, searchString, STARTS_WITH);
        var index = toLength(Math.min(arguments.length > 1 ? arguments[1] : undefined, that.length));
        var search = String(searchString);
        return $startsWith ? $startsWith.call(that, search, index) : that.slice(index, index + search.length) === search;
      }
    });
  }, {
    "107": 107,
    "118": 118,
    "33": 33,
    "34": 34
  }],
  250: [function (_dereq_, module, exports) {
    'use strict'; // B.2.3.12 String.prototype.strike()

    _dereq_(108)('strike', function (createHTML) {
      return function strike() {
        return createHTML(this, 'strike', '', '');
      };
    });
  }, {
    "108": 108
  }],
  251: [function (_dereq_, module, exports) {
    'use strict'; // B.2.3.13 String.prototype.sub()

    _dereq_(108)('sub', function (createHTML) {
      return function sub() {
        return createHTML(this, 'sub', '', '');
      };
    });
  }, {
    "108": 108
  }],
  252: [function (_dereq_, module, exports) {
    'use strict'; // B.2.3.14 String.prototype.sup()

    _dereq_(108)('sup', function (createHTML) {
      return function sup() {
        return createHTML(this, 'sup', '', '');
      };
    });
  }, {
    "108": 108
  }],
  253: [function (_dereq_, module, exports) {
    'use strict'; // 21.1.3.25 String.prototype.trim()

    _dereq_(111)('trim', function ($trim) {
      return function trim() {
        return $trim(this, 3);
      };
    });
  }, {
    "111": 111
  }],
  254: [function (_dereq_, module, exports) {
    'use strict'; // ECMAScript 6 symbols shim

    var global = _dereq_(40);

    var has = _dereq_(41);

    var DESCRIPTORS = _dereq_(29);

    var $export = _dereq_(33);

    var redefine = _dereq_(94);

    var META = _dereq_(66).KEY;

    var $fails = _dereq_(35);

    var shared = _dereq_(103);

    var setToStringTag = _dereq_(101);

    var uid = _dereq_(124);

    var wks = _dereq_(128);

    var wksExt = _dereq_(127);

    var wksDefine = _dereq_(126);

    var keyOf = _dereq_(59);

    var enumKeys = _dereq_(32);

    var isArray = _dereq_(49);

    var anObject = _dereq_(7);

    var toIObject = _dereq_(117);

    var toPrimitive = _dereq_(120);

    var createDesc = _dereq_(92);

    var _create = _dereq_(71);

    var gOPNExt = _dereq_(76);

    var $GOPD = _dereq_(75);

    var $DP = _dereq_(72);

    var $keys = _dereq_(81);

    var gOPD = $GOPD.f;
    var dP = $DP.f;
    var gOPN = gOPNExt.f;
    var $Symbol = global.Symbol;
    var $JSON = global.JSON;

    var _stringify = $JSON && $JSON.stringify;

    var PROTOTYPE = 'prototype';
    var HIDDEN = wks('_hidden');
    var TO_PRIMITIVE = wks('toPrimitive');
    var isEnum = {}.propertyIsEnumerable;
    var SymbolRegistry = shared('symbol-registry');
    var AllSymbols = shared('symbols');
    var OPSymbols = shared('op-symbols');
    var ObjectProto = Object[PROTOTYPE];
    var USE_NATIVE = typeof $Symbol == 'function';
    var QObject = global.QObject; // Don't use setters in Qt Script, https://github.com/zloirock/core-js/issues/173

    var setter = !QObject || !QObject[PROTOTYPE] || !QObject[PROTOTYPE].findChild; // fallback for old Android, https://code.google.com/p/v8/issues/detail?id=687

    var setSymbolDesc = DESCRIPTORS && $fails(function () {
      return _create(dP({}, 'a', {
        get: function get() {
          return dP(this, 'a', {
            value: 7
          }).a;
        }
      })).a != 7;
    }) ? function (it, key, D) {
      var protoDesc = gOPD(ObjectProto, key);
      if (protoDesc) delete ObjectProto[key];
      dP(it, key, D);
      if (protoDesc && it !== ObjectProto) dP(ObjectProto, key, protoDesc);
    } : dP;

    var wrap = function wrap(tag) {
      var sym = AllSymbols[tag] = _create($Symbol[PROTOTYPE]);

      sym._k = tag;
      return sym;
    };

    var isSymbol = USE_NATIVE && _typeof($Symbol.iterator) == 'symbol' ? function (it) {
      return _typeof(it) == 'symbol';
    } : function (it) {
      return it instanceof $Symbol;
    };

    var $defineProperty = function defineProperty(it, key, D) {
      if (it === ObjectProto) $defineProperty(OPSymbols, key, D);
      anObject(it);
      key = toPrimitive(key, true);
      anObject(D);

      if (has(AllSymbols, key)) {
        if (!D.enumerable) {
          if (!has(it, HIDDEN)) dP(it, HIDDEN, createDesc(1, {}));
          it[HIDDEN][key] = true;
        } else {
          if (has(it, HIDDEN) && it[HIDDEN][key]) it[HIDDEN][key] = false;
          D = _create(D, {
            enumerable: createDesc(0, false)
          });
        }

        return setSymbolDesc(it, key, D);
      }

      return dP(it, key, D);
    };

    var $defineProperties = function defineProperties(it, P) {
      anObject(it);
      var keys = enumKeys(P = toIObject(P));
      var i = 0;
      var l = keys.length;
      var key;

      while (l > i) {
        $defineProperty(it, key = keys[i++], P[key]);
      }

      return it;
    };

    var $create = function create(it, P) {
      return P === undefined ? _create(it) : $defineProperties(_create(it), P);
    };

    var $propertyIsEnumerable = function propertyIsEnumerable(key) {
      var E = isEnum.call(this, key = toPrimitive(key, true));
      if (this === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key)) return false;
      return E || !has(this, key) || !has(AllSymbols, key) || has(this, HIDDEN) && this[HIDDEN][key] ? E : true;
    };

    var $getOwnPropertyDescriptor = function getOwnPropertyDescriptor(it, key) {
      it = toIObject(it);
      key = toPrimitive(key, true);
      if (it === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key)) return;
      var D = gOPD(it, key);
      if (D && has(AllSymbols, key) && !(has(it, HIDDEN) && it[HIDDEN][key])) D.enumerable = true;
      return D;
    };

    var $getOwnPropertyNames = function getOwnPropertyNames(it) {
      var names = gOPN(toIObject(it));
      var result = [];
      var i = 0;
      var key;

      while (names.length > i) {
        if (!has(AllSymbols, key = names[i++]) && key != HIDDEN && key != META) result.push(key);
      }

      return result;
    };

    var $getOwnPropertySymbols = function getOwnPropertySymbols(it) {
      var IS_OP = it === ObjectProto;
      var names = gOPN(IS_OP ? OPSymbols : toIObject(it));
      var result = [];
      var i = 0;
      var key;

      while (names.length > i) {
        if (has(AllSymbols, key = names[i++]) && (IS_OP ? has(ObjectProto, key) : true)) result.push(AllSymbols[key]);
      }

      return result;
    }; // 19.4.1.1 Symbol([description])


    if (!USE_NATIVE) {
      $Symbol = function _Symbol2() {
        if (this instanceof $Symbol) throw TypeError('Symbol is not a constructor!');
        var tag = uid(arguments.length > 0 ? arguments[0] : undefined);

        var $set = function $set(value) {
          if (this === ObjectProto) $set.call(OPSymbols, value);
          if (has(this, HIDDEN) && has(this[HIDDEN], tag)) this[HIDDEN][tag] = false;
          setSymbolDesc(this, tag, createDesc(1, value));
        };

        if (DESCRIPTORS && setter) setSymbolDesc(ObjectProto, tag, {
          configurable: true,
          set: $set
        });
        return wrap(tag);
      };

      redefine($Symbol[PROTOTYPE], 'toString', function toString() {
        return this._k;
      });
      $GOPD.f = $getOwnPropertyDescriptor;
      $DP.f = $defineProperty;
      _dereq_(77).f = gOPNExt.f = $getOwnPropertyNames;
      _dereq_(82).f = $propertyIsEnumerable;
      _dereq_(78).f = $getOwnPropertySymbols;

      if (DESCRIPTORS && !_dereq_(60)) {
        redefine(ObjectProto, 'propertyIsEnumerable', $propertyIsEnumerable, true);
      }

      wksExt.f = function (name) {
        return wrap(wks(name));
      };
    }

    $export($export.G + $export.W + $export.F * !USE_NATIVE, {
      Symbol: $Symbol
    });

    for (var es6Symbols = // 19.4.2.2, 19.4.2.3, 19.4.2.4, 19.4.2.6, 19.4.2.8, 19.4.2.9, 19.4.2.10, 19.4.2.11, 19.4.2.12, 19.4.2.13, 19.4.2.14
    'hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables'.split(','), j = 0; es6Symbols.length > j;) {
      wks(es6Symbols[j++]);
    }

    for (var wellKnownSymbols = $keys(wks.store), k = 0; wellKnownSymbols.length > k;) {
      wksDefine(wellKnownSymbols[k++]);
    }

    $export($export.S + $export.F * !USE_NATIVE, 'Symbol', {
      // 19.4.2.1 Symbol.for(key)
      'for': function _for(key) {
        return has(SymbolRegistry, key += '') ? SymbolRegistry[key] : SymbolRegistry[key] = $Symbol(key);
      },
      // 19.4.2.5 Symbol.keyFor(sym)
      keyFor: function keyFor(key) {
        if (isSymbol(key)) return keyOf(SymbolRegistry, key);
        throw TypeError(key + ' is not a symbol!');
      },
      useSetter: function useSetter() {
        setter = true;
      },
      useSimple: function useSimple() {
        setter = false;
      }
    });
    $export($export.S + $export.F * !USE_NATIVE, 'Object', {
      // 19.1.2.2 Object.create(O [, Properties])
      create: $create,
      // 19.1.2.4 Object.defineProperty(O, P, Attributes)
      defineProperty: $defineProperty,
      // 19.1.2.3 Object.defineProperties(O, Properties)
      defineProperties: $defineProperties,
      // 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
      getOwnPropertyDescriptor: $getOwnPropertyDescriptor,
      // 19.1.2.7 Object.getOwnPropertyNames(O)
      getOwnPropertyNames: $getOwnPropertyNames,
      // 19.1.2.8 Object.getOwnPropertySymbols(O)
      getOwnPropertySymbols: $getOwnPropertySymbols
    }); // 24.3.2 JSON.stringify(value [, replacer [, space]])

    $JSON && $export($export.S + $export.F * (!USE_NATIVE || $fails(function () {
      var S = $Symbol(); // MS Edge converts symbol values to JSON as {}
      // WebKit converts symbol values to JSON as null
      // V8 throws on boxed symbols

      return _stringify([S]) != '[null]' || _stringify({
        a: S
      }) != '{}' || _stringify(Object(S)) != '{}';
    })), 'JSON', {
      stringify: function stringify(it) {
        if (it === undefined || isSymbol(it)) return; // IE8 returns string on undefined

        var args = [it];
        var i = 1;
        var replacer, $replacer;

        while (arguments.length > i) {
          args.push(arguments[i++]);
        }

        replacer = args[1];
        if (typeof replacer == 'function') $replacer = replacer;
        if ($replacer || !isArray(replacer)) replacer = function replacer(key, value) {
          if ($replacer) value = $replacer.call(this, key, value);
          if (!isSymbol(value)) return value;
        };
        args[1] = replacer;
        return _stringify.apply($JSON, args);
      }
    }); // 19.4.3.4 Symbol.prototype[@@toPrimitive](hint)

    $Symbol[PROTOTYPE][TO_PRIMITIVE] || _dereq_(42)($Symbol[PROTOTYPE], TO_PRIMITIVE, $Symbol[PROTOTYPE].valueOf); // 19.4.3.5 Symbol.prototype[@@toStringTag]

    setToStringTag($Symbol, 'Symbol'); // 20.2.1.9 Math[@@toStringTag]

    setToStringTag(Math, 'Math', true); // 24.3.3 JSON[@@toStringTag]

    setToStringTag(global.JSON, 'JSON', true);
  }, {
    "101": 101,
    "103": 103,
    "117": 117,
    "120": 120,
    "124": 124,
    "126": 126,
    "127": 127,
    "128": 128,
    "29": 29,
    "32": 32,
    "33": 33,
    "35": 35,
    "40": 40,
    "41": 41,
    "42": 42,
    "49": 49,
    "59": 59,
    "60": 60,
    "66": 66,
    "7": 7,
    "71": 71,
    "72": 72,
    "75": 75,
    "76": 76,
    "77": 77,
    "78": 78,
    "81": 81,
    "82": 82,
    "92": 92,
    "94": 94
  }],
  255: [function (_dereq_, module, exports) {
    'use strict';

    var $export = _dereq_(33);

    var $typed = _dereq_(123);

    var buffer = _dereq_(122);

    var anObject = _dereq_(7);

    var toAbsoluteIndex = _dereq_(114);

    var toLength = _dereq_(118);

    var isObject = _dereq_(51);

    var ArrayBuffer = _dereq_(40).ArrayBuffer;

    var speciesConstructor = _dereq_(104);

    var $ArrayBuffer = buffer.ArrayBuffer;
    var $DataView = buffer.DataView;
    var $isView = $typed.ABV && ArrayBuffer.isView;
    var $slice = $ArrayBuffer.prototype.slice;
    var VIEW = $typed.VIEW;
    var ARRAY_BUFFER = 'ArrayBuffer';
    $export($export.G + $export.W + $export.F * (ArrayBuffer !== $ArrayBuffer), {
      ArrayBuffer: $ArrayBuffer
    });
    $export($export.S + $export.F * !$typed.CONSTR, ARRAY_BUFFER, {
      // 24.1.3.1 ArrayBuffer.isView(arg)
      isView: function isView(it) {
        return $isView && $isView(it) || isObject(it) && VIEW in it;
      }
    });
    $export($export.P + $export.U + $export.F * _dereq_(35)(function () {
      return !new $ArrayBuffer(2).slice(1, undefined).byteLength;
    }), ARRAY_BUFFER, {
      // 24.1.4.3 ArrayBuffer.prototype.slice(start, end)
      slice: function slice(start, end) {
        if ($slice !== undefined && end === undefined) return $slice.call(anObject(this), start); // FF fix

        var len = anObject(this).byteLength;
        var first = toAbsoluteIndex(start, len);
        var final = toAbsoluteIndex(end === undefined ? len : end, len);
        var result = new (speciesConstructor(this, $ArrayBuffer))(toLength(final - first));
        var viewS = new $DataView(this);
        var viewT = new $DataView(result);
        var index = 0;

        while (first < final) {
          viewT.setUint8(index++, viewS.getUint8(first++));
        }

        return result;
      }
    });

    _dereq_(100)(ARRAY_BUFFER);
  }, {
    "100": 100,
    "104": 104,
    "114": 114,
    "118": 118,
    "122": 122,
    "123": 123,
    "33": 33,
    "35": 35,
    "40": 40,
    "51": 51,
    "7": 7
  }],
  256: [function (_dereq_, module, exports) {
    var $export = _dereq_(33);

    $export($export.G + $export.W + $export.F * !_dereq_(123).ABV, {
      DataView: _dereq_(122).DataView
    });
  }, {
    "122": 122,
    "123": 123,
    "33": 33
  }],
  257: [function (_dereq_, module, exports) {
    _dereq_(121)('Float32', 4, function (init) {
      return function Float32Array(data, byteOffset, length) {
        return init(this, data, byteOffset, length);
      };
    });
  }, {
    "121": 121
  }],
  258: [function (_dereq_, module, exports) {
    _dereq_(121)('Float64', 8, function (init) {
      return function Float64Array(data, byteOffset, length) {
        return init(this, data, byteOffset, length);
      };
    });
  }, {
    "121": 121
  }],
  259: [function (_dereq_, module, exports) {
    _dereq_(121)('Int16', 2, function (init) {
      return function Int16Array(data, byteOffset, length) {
        return init(this, data, byteOffset, length);
      };
    });
  }, {
    "121": 121
  }],
  260: [function (_dereq_, module, exports) {
    _dereq_(121)('Int32', 4, function (init) {
      return function Int32Array(data, byteOffset, length) {
        return init(this, data, byteOffset, length);
      };
    });
  }, {
    "121": 121
  }],
  261: [function (_dereq_, module, exports) {
    _dereq_(121)('Int8', 1, function (init) {
      return function Int8Array(data, byteOffset, length) {
        return init(this, data, byteOffset, length);
      };
    });
  }, {
    "121": 121
  }],
  262: [function (_dereq_, module, exports) {
    _dereq_(121)('Uint16', 2, function (init) {
      return function Uint16Array(data, byteOffset, length) {
        return init(this, data, byteOffset, length);
      };
    });
  }, {
    "121": 121
  }],
  263: [function (_dereq_, module, exports) {
    _dereq_(121)('Uint32', 4, function (init) {
      return function Uint32Array(data, byteOffset, length) {
        return init(this, data, byteOffset, length);
      };
    });
  }, {
    "121": 121
  }],
  264: [function (_dereq_, module, exports) {
    _dereq_(121)('Uint8', 1, function (init) {
      return function Uint8Array(data, byteOffset, length) {
        return init(this, data, byteOffset, length);
      };
    });
  }, {
    "121": 121
  }],
  265: [function (_dereq_, module, exports) {
    _dereq_(121)('Uint8', 1, function (init) {
      return function Uint8ClampedArray(data, byteOffset, length) {
        return init(this, data, byteOffset, length);
      };
    }, true);
  }, {
    "121": 121
  }],
  266: [function (_dereq_, module, exports) {
    'use strict';

    var each = _dereq_(12)(0);

    var redefine = _dereq_(94);

    var meta = _dereq_(66);

    var assign = _dereq_(70);

    var weak = _dereq_(21);

    var isObject = _dereq_(51);

    var fails = _dereq_(35);

    var validate = _dereq_(125);

    var WEAK_MAP = 'WeakMap';
    var getWeak = meta.getWeak;
    var isExtensible = Object.isExtensible;
    var uncaughtFrozenStore = weak.ufstore;
    var tmp = {};
    var InternalMap;

    var wrapper = function wrapper(get) {
      return function WeakMap() {
        return get(this, arguments.length > 0 ? arguments[0] : undefined);
      };
    };

    var methods = {
      // 23.3.3.3 WeakMap.prototype.get(key)
      get: function get(key) {
        if (isObject(key)) {
          var data = getWeak(key);
          if (data === true) return uncaughtFrozenStore(validate(this, WEAK_MAP)).get(key);
          return data ? data[this._i] : undefined;
        }
      },
      // 23.3.3.5 WeakMap.prototype.set(key, value)
      set: function set(key, value) {
        return weak.def(validate(this, WEAK_MAP), key, value);
      }
    }; // 23.3 WeakMap Objects

    var $WeakMap = module.exports = _dereq_(22)(WEAK_MAP, wrapper, methods, weak, true, true); // IE11 WeakMap frozen keys fix


    if (fails(function () {
      return new $WeakMap().set((Object.freeze || Object)(tmp), 7).get(tmp) != 7;
    })) {
      InternalMap = weak.getConstructor(wrapper, WEAK_MAP);
      assign(InternalMap.prototype, methods);
      meta.NEED = true;
      each(['delete', 'has', 'get', 'set'], function (key) {
        var proto = $WeakMap.prototype;
        var method = proto[key];
        redefine(proto, key, function (a, b) {
          // store frozen objects on internal weakmap shim
          if (isObject(a) && !isExtensible(a)) {
            if (!this._f) this._f = new InternalMap();

            var result = this._f[key](a, b);

            return key == 'set' ? this : result; // store all the rest on native weakmap
          }

          return method.call(this, a, b);
        });
      });
    }
  }, {
    "12": 12,
    "125": 125,
    "21": 21,
    "22": 22,
    "35": 35,
    "51": 51,
    "66": 66,
    "70": 70,
    "94": 94
  }],
  267: [function (_dereq_, module, exports) {
    'use strict';

    var weak = _dereq_(21);

    var validate = _dereq_(125);

    var WEAK_SET = 'WeakSet'; // 23.4 WeakSet Objects

    _dereq_(22)(WEAK_SET, function (get) {
      return function WeakSet() {
        return get(this, arguments.length > 0 ? arguments[0] : undefined);
      };
    }, {
      // 23.4.3.1 WeakSet.prototype.add(value)
      add: function add(value) {
        return weak.def(validate(this, WEAK_SET), value, true);
      }
    }, weak, false, true);
  }, {
    "125": 125,
    "21": 21,
    "22": 22
  }],
  268: [function (_dereq_, module, exports) {
    'use strict'; // https://tc39.github.io/proposal-flatMap/#sec-Array.prototype.flatMap

    var $export = _dereq_(33);

    var flattenIntoArray = _dereq_(38);

    var toObject = _dereq_(119);

    var toLength = _dereq_(118);

    var aFunction = _dereq_(3);

    var arraySpeciesCreate = _dereq_(15);

    $export($export.P, 'Array', {
      flatMap: function flatMap(callbackfn
      /* , thisArg */
      ) {
        var O = toObject(this);
        var sourceLen, A;
        aFunction(callbackfn);
        sourceLen = toLength(O.length);
        A = arraySpeciesCreate(O, 0);
        flattenIntoArray(A, O, O, sourceLen, 0, 1, callbackfn, arguments[1]);
        return A;
      }
    });

    _dereq_(5)('flatMap');
  }, {
    "118": 118,
    "119": 119,
    "15": 15,
    "3": 3,
    "33": 33,
    "38": 38,
    "5": 5
  }],
  269: [function (_dereq_, module, exports) {
    'use strict'; // https://tc39.github.io/proposal-flatMap/#sec-Array.prototype.flatten

    var $export = _dereq_(33);

    var flattenIntoArray = _dereq_(38);

    var toObject = _dereq_(119);

    var toLength = _dereq_(118);

    var toInteger = _dereq_(116);

    var arraySpeciesCreate = _dereq_(15);

    $export($export.P, 'Array', {
      flatten: function flatten() {
        var depthArg = arguments[0];
        var O = toObject(this);
        var sourceLen = toLength(O.length);
        var A = arraySpeciesCreate(O, 0);
        flattenIntoArray(A, O, O, sourceLen, 0, depthArg === undefined ? 1 : toInteger(depthArg));
        return A;
      }
    });

    _dereq_(5)('flatten');
  }, {
    "116": 116,
    "118": 118,
    "119": 119,
    "15": 15,
    "33": 33,
    "38": 38,
    "5": 5
  }],
  270: [function (_dereq_, module, exports) {
    'use strict'; // https://github.com/tc39/Array.prototype.includes

    var $export = _dereq_(33);

    var $includes = _dereq_(11)(true);

    $export($export.P, 'Array', {
      includes: function includes(el
      /* , fromIndex = 0 */
      ) {
        return $includes(this, el, arguments.length > 1 ? arguments[1] : undefined);
      }
    });

    _dereq_(5)('includes');
  }, {
    "11": 11,
    "33": 33,
    "5": 5
  }],
  271: [function (_dereq_, module, exports) {
    // https://github.com/rwaldron/tc39-notes/blob/master/es6/2014-09/sept-25.md#510-globalasap-for-enqueuing-a-microtask
    var $export = _dereq_(33);

    var microtask = _dereq_(68)();

    var process = _dereq_(40).process;

    var isNode = _dereq_(18)(process) == 'process';
    $export($export.G, {
      asap: function asap(fn) {
        var domain = isNode && process.domain;
        microtask(domain ? domain.bind(fn) : fn);
      }
    });
  }, {
    "18": 18,
    "33": 33,
    "40": 40,
    "68": 68
  }],
  272: [function (_dereq_, module, exports) {
    // https://github.com/ljharb/proposal-is-error
    var $export = _dereq_(33);

    var cof = _dereq_(18);

    $export($export.S, 'Error', {
      isError: function isError(it) {
        return cof(it) === 'Error';
      }
    });
  }, {
    "18": 18,
    "33": 33
  }],
  273: [function (_dereq_, module, exports) {
    // https://github.com/tc39/proposal-global
    var $export = _dereq_(33);

    $export($export.G, {
      global: _dereq_(40)
    });
  }, {
    "33": 33,
    "40": 40
  }],
  274: [function (_dereq_, module, exports) {
    // https://tc39.github.io/proposal-setmap-offrom/#sec-map.from
    _dereq_(97)('Map');
  }, {
    "97": 97
  }],
  275: [function (_dereq_, module, exports) {
    // https://tc39.github.io/proposal-setmap-offrom/#sec-map.of
    _dereq_(98)('Map');
  }, {
    "98": 98
  }],
  276: [function (_dereq_, module, exports) {
    // https://github.com/DavidBruant/Map-Set.prototype.toJSON
    var $export = _dereq_(33);

    $export($export.P + $export.R, 'Map', {
      toJSON: _dereq_(20)('Map')
    });
  }, {
    "20": 20,
    "33": 33
  }],
  277: [function (_dereq_, module, exports) {
    // https://rwaldron.github.io/proposal-math-extensions/
    var $export = _dereq_(33);

    $export($export.S, 'Math', {
      clamp: function clamp(x, lower, upper) {
        return Math.min(upper, Math.max(lower, x));
      }
    });
  }, {
    "33": 33
  }],
  278: [function (_dereq_, module, exports) {
    // https://rwaldron.github.io/proposal-math-extensions/
    var $export = _dereq_(33);

    $export($export.S, 'Math', {
      DEG_PER_RAD: Math.PI / 180
    });
  }, {
    "33": 33
  }],
  279: [function (_dereq_, module, exports) {
    // https://rwaldron.github.io/proposal-math-extensions/
    var $export = _dereq_(33);

    var RAD_PER_DEG = 180 / Math.PI;
    $export($export.S, 'Math', {
      degrees: function degrees(radians) {
        return radians * RAD_PER_DEG;
      }
    });
  }, {
    "33": 33
  }],
  280: [function (_dereq_, module, exports) {
    // https://rwaldron.github.io/proposal-math-extensions/
    var $export = _dereq_(33);

    var scale = _dereq_(64);

    var fround = _dereq_(62);

    $export($export.S, 'Math', {
      fscale: function fscale(x, inLow, inHigh, outLow, outHigh) {
        return fround(scale(x, inLow, inHigh, outLow, outHigh));
      }
    });
  }, {
    "33": 33,
    "62": 62,
    "64": 64
  }],
  281: [function (_dereq_, module, exports) {
    // https://gist.github.com/BrendanEich/4294d5c212a6d2254703
    var $export = _dereq_(33);

    $export($export.S, 'Math', {
      iaddh: function iaddh(x0, x1, y0, y1) {
        var $x0 = x0 >>> 0;
        var $x1 = x1 >>> 0;
        var $y0 = y0 >>> 0;
        return $x1 + (y1 >>> 0) + (($x0 & $y0 | ($x0 | $y0) & ~($x0 + $y0 >>> 0)) >>> 31) | 0;
      }
    });
  }, {
    "33": 33
  }],
  282: [function (_dereq_, module, exports) {
    // https://gist.github.com/BrendanEich/4294d5c212a6d2254703
    var $export = _dereq_(33);

    $export($export.S, 'Math', {
      imulh: function imulh(u, v) {
        var UINT16 = 0xffff;
        var $u = +u;
        var $v = +v;
        var u0 = $u & UINT16;
        var v0 = $v & UINT16;
        var u1 = $u >> 16;
        var v1 = $v >> 16;
        var t = (u1 * v0 >>> 0) + (u0 * v0 >>> 16);
        return u1 * v1 + (t >> 16) + ((u0 * v1 >>> 0) + (t & UINT16) >> 16);
      }
    });
  }, {
    "33": 33
  }],
  283: [function (_dereq_, module, exports) {
    // https://gist.github.com/BrendanEich/4294d5c212a6d2254703
    var $export = _dereq_(33);

    $export($export.S, 'Math', {
      isubh: function isubh(x0, x1, y0, y1) {
        var $x0 = x0 >>> 0;
        var $x1 = x1 >>> 0;
        var $y0 = y0 >>> 0;
        return $x1 - (y1 >>> 0) - ((~$x0 & $y0 | ~($x0 ^ $y0) & $x0 - $y0 >>> 0) >>> 31) | 0;
      }
    });
  }, {
    "33": 33
  }],
  284: [function (_dereq_, module, exports) {
    // https://rwaldron.github.io/proposal-math-extensions/
    var $export = _dereq_(33);

    $export($export.S, 'Math', {
      RAD_PER_DEG: 180 / Math.PI
    });
  }, {
    "33": 33
  }],
  285: [function (_dereq_, module, exports) {
    // https://rwaldron.github.io/proposal-math-extensions/
    var $export = _dereq_(33);

    var DEG_PER_RAD = Math.PI / 180;
    $export($export.S, 'Math', {
      radians: function radians(degrees) {
        return degrees * DEG_PER_RAD;
      }
    });
  }, {
    "33": 33
  }],
  286: [function (_dereq_, module, exports) {
    // https://rwaldron.github.io/proposal-math-extensions/
    var $export = _dereq_(33);

    $export($export.S, 'Math', {
      scale: _dereq_(64)
    });
  }, {
    "33": 33,
    "64": 64
  }],
  287: [function (_dereq_, module, exports) {
    // http://jfbastien.github.io/papers/Math.signbit.html
    var $export = _dereq_(33);

    $export($export.S, 'Math', {
      signbit: function signbit(x) {
        // eslint-disable-next-line no-self-compare
        return (x = +x) != x ? x : x == 0 ? 1 / x == Infinity : x > 0;
      }
    });
  }, {
    "33": 33
  }],
  288: [function (_dereq_, module, exports) {
    // https://gist.github.com/BrendanEich/4294d5c212a6d2254703
    var $export = _dereq_(33);

    $export($export.S, 'Math', {
      umulh: function umulh(u, v) {
        var UINT16 = 0xffff;
        var $u = +u;
        var $v = +v;
        var u0 = $u & UINT16;
        var v0 = $v & UINT16;
        var u1 = $u >>> 16;
        var v1 = $v >>> 16;
        var t = (u1 * v0 >>> 0) + (u0 * v0 >>> 16);
        return u1 * v1 + (t >>> 16) + ((u0 * v1 >>> 0) + (t & UINT16) >>> 16);
      }
    });
  }, {
    "33": 33
  }],
  289: [function (_dereq_, module, exports) {
    'use strict';

    var $export = _dereq_(33);

    var toObject = _dereq_(119);

    var aFunction = _dereq_(3);

    var $defineProperty = _dereq_(72); // B.2.2.2 Object.prototype.__defineGetter__(P, getter)


    _dereq_(29) && $export($export.P + _dereq_(74), 'Object', {
      __defineGetter__: function __defineGetter__(P, getter) {
        $defineProperty.f(toObject(this), P, {
          get: aFunction(getter),
          enumerable: true,
          configurable: true
        });
      }
    });
  }, {
    "119": 119,
    "29": 29,
    "3": 3,
    "33": 33,
    "72": 72,
    "74": 74
  }],
  290: [function (_dereq_, module, exports) {
    'use strict';

    var $export = _dereq_(33);

    var toObject = _dereq_(119);

    var aFunction = _dereq_(3);

    var $defineProperty = _dereq_(72); // B.2.2.3 Object.prototype.__defineSetter__(P, setter)


    _dereq_(29) && $export($export.P + _dereq_(74), 'Object', {
      __defineSetter__: function __defineSetter__(P, setter) {
        $defineProperty.f(toObject(this), P, {
          set: aFunction(setter),
          enumerable: true,
          configurable: true
        });
      }
    });
  }, {
    "119": 119,
    "29": 29,
    "3": 3,
    "33": 33,
    "72": 72,
    "74": 74
  }],
  291: [function (_dereq_, module, exports) {
    // https://github.com/tc39/proposal-object-values-entries
    var $export = _dereq_(33);

    var $entries = _dereq_(84)(true);

    $export($export.S, 'Object', {
      entries: function entries(it) {
        return $entries(it);
      }
    });
  }, {
    "33": 33,
    "84": 84
  }],
  292: [function (_dereq_, module, exports) {
    // https://github.com/tc39/proposal-object-getownpropertydescriptors
    var $export = _dereq_(33);

    var ownKeys = _dereq_(85);

    var toIObject = _dereq_(117);

    var gOPD = _dereq_(75);

    var createProperty = _dereq_(24);

    $export($export.S, 'Object', {
      getOwnPropertyDescriptors: function getOwnPropertyDescriptors(object) {
        var O = toIObject(object);
        var getDesc = gOPD.f;
        var keys = ownKeys(O);
        var result = {};
        var i = 0;
        var key, desc;

        while (keys.length > i) {
          desc = getDesc(O, key = keys[i++]);
          if (desc !== undefined) createProperty(result, key, desc);
        }

        return result;
      }
    });
  }, {
    "117": 117,
    "24": 24,
    "33": 33,
    "75": 75,
    "85": 85
  }],
  293: [function (_dereq_, module, exports) {
    'use strict';

    var $export = _dereq_(33);

    var toObject = _dereq_(119);

    var toPrimitive = _dereq_(120);

    var getPrototypeOf = _dereq_(79);

    var getOwnPropertyDescriptor = _dereq_(75).f; // B.2.2.4 Object.prototype.__lookupGetter__(P)


    _dereq_(29) && $export($export.P + _dereq_(74), 'Object', {
      __lookupGetter__: function __lookupGetter__(P) {
        var O = toObject(this);
        var K = toPrimitive(P, true);
        var D;

        do {
          if (D = getOwnPropertyDescriptor(O, K)) return D.get;
        } while (O = getPrototypeOf(O));
      }
    });
  }, {
    "119": 119,
    "120": 120,
    "29": 29,
    "33": 33,
    "74": 74,
    "75": 75,
    "79": 79
  }],
  294: [function (_dereq_, module, exports) {
    'use strict';

    var $export = _dereq_(33);

    var toObject = _dereq_(119);

    var toPrimitive = _dereq_(120);

    var getPrototypeOf = _dereq_(79);

    var getOwnPropertyDescriptor = _dereq_(75).f; // B.2.2.5 Object.prototype.__lookupSetter__(P)


    _dereq_(29) && $export($export.P + _dereq_(74), 'Object', {
      __lookupSetter__: function __lookupSetter__(P) {
        var O = toObject(this);
        var K = toPrimitive(P, true);
        var D;

        do {
          if (D = getOwnPropertyDescriptor(O, K)) return D.set;
        } while (O = getPrototypeOf(O));
      }
    });
  }, {
    "119": 119,
    "120": 120,
    "29": 29,
    "33": 33,
    "74": 74,
    "75": 75,
    "79": 79
  }],
  295: [function (_dereq_, module, exports) {
    // https://github.com/tc39/proposal-object-values-entries
    var $export = _dereq_(33);

    var $values = _dereq_(84)(false);

    $export($export.S, 'Object', {
      values: function values(it) {
        return $values(it);
      }
    });
  }, {
    "33": 33,
    "84": 84
  }],
  296: [function (_dereq_, module, exports) {
    'use strict'; // https://github.com/zenparsing/es-observable

    var $export = _dereq_(33);

    var global = _dereq_(40);

    var core = _dereq_(23);

    var microtask = _dereq_(68)();

    var OBSERVABLE = _dereq_(128)('observable');

    var aFunction = _dereq_(3);

    var anObject = _dereq_(7);

    var anInstance = _dereq_(6);

    var redefineAll = _dereq_(93);

    var hide = _dereq_(42);

    var forOf = _dereq_(39);

    var RETURN = forOf.RETURN;

    var getMethod = function getMethod(fn) {
      return fn == null ? undefined : aFunction(fn);
    };

    var cleanupSubscription = function cleanupSubscription(subscription) {
      var cleanup = subscription._c;

      if (cleanup) {
        subscription._c = undefined;
        cleanup();
      }
    };

    var subscriptionClosed = function subscriptionClosed(subscription) {
      return subscription._o === undefined;
    };

    var closeSubscription = function closeSubscription(subscription) {
      if (!subscriptionClosed(subscription)) {
        subscription._o = undefined;
        cleanupSubscription(subscription);
      }
    };

    var Subscription = function Subscription(observer, subscriber) {
      anObject(observer);
      this._c = undefined;
      this._o = observer;
      observer = new SubscriptionObserver(this);

      try {
        var cleanup = subscriber(observer);
        var subscription = cleanup;

        if (cleanup != null) {
          if (typeof cleanup.unsubscribe === 'function') cleanup = function cleanup() {
            subscription.unsubscribe();
          };else aFunction(cleanup);
          this._c = cleanup;
        }
      } catch (e) {
        observer.error(e);
        return;
      }

      if (subscriptionClosed(this)) cleanupSubscription(this);
    };

    Subscription.prototype = redefineAll({}, {
      unsubscribe: function unsubscribe() {
        closeSubscription(this);
      }
    });

    var SubscriptionObserver = function SubscriptionObserver(subscription) {
      this._s = subscription;
    };

    SubscriptionObserver.prototype = redefineAll({}, {
      next: function next(value) {
        var subscription = this._s;

        if (!subscriptionClosed(subscription)) {
          var observer = subscription._o;

          try {
            var m = getMethod(observer.next);
            if (m) return m.call(observer, value);
          } catch (e) {
            try {
              closeSubscription(subscription);
            } finally {
              throw e;
            }
          }
        }
      },
      error: function error(value) {
        var subscription = this._s;
        if (subscriptionClosed(subscription)) throw value;
        var observer = subscription._o;
        subscription._o = undefined;

        try {
          var m = getMethod(observer.error);
          if (!m) throw value;
          value = m.call(observer, value);
        } catch (e) {
          try {
            cleanupSubscription(subscription);
          } finally {
            throw e;
          }
        }

        cleanupSubscription(subscription);
        return value;
      },
      complete: function complete(value) {
        var subscription = this._s;

        if (!subscriptionClosed(subscription)) {
          var observer = subscription._o;
          subscription._o = undefined;

          try {
            var m = getMethod(observer.complete);
            value = m ? m.call(observer, value) : undefined;
          } catch (e) {
            try {
              cleanupSubscription(subscription);
            } finally {
              throw e;
            }
          }

          cleanupSubscription(subscription);
          return value;
        }
      }
    });

    var $Observable = function Observable(subscriber) {
      anInstance(this, $Observable, 'Observable', '_f')._f = aFunction(subscriber);
    };

    redefineAll($Observable.prototype, {
      subscribe: function subscribe(observer) {
        return new Subscription(observer, this._f);
      },
      forEach: function forEach(fn) {
        var that = this;
        return new (core.Promise || global.Promise)(function (resolve, reject) {
          aFunction(fn);
          var subscription = that.subscribe({
            next: function next(value) {
              try {
                return fn(value);
              } catch (e) {
                reject(e);
                subscription.unsubscribe();
              }
            },
            error: reject,
            complete: resolve
          });
        });
      }
    });
    redefineAll($Observable, {
      from: function from(x) {
        var C = typeof this === 'function' ? this : $Observable;
        var method = getMethod(anObject(x)[OBSERVABLE]);

        if (method) {
          var observable = anObject(method.call(x));
          return observable.constructor === C ? observable : new C(function (observer) {
            return observable.subscribe(observer);
          });
        }

        return new C(function (observer) {
          var done = false;
          microtask(function () {
            if (!done) {
              try {
                if (forOf(x, false, function (it) {
                  observer.next(it);
                  if (done) return RETURN;
                }) === RETURN) return;
              } catch (e) {
                if (done) throw e;
                observer.error(e);
                return;
              }

              observer.complete();
            }
          });
          return function () {
            done = true;
          };
        });
      },
      of: function of() {
        for (var i = 0, l = arguments.length, items = Array(l); i < l;) {
          items[i] = arguments[i++];
        }

        return new (typeof this === 'function' ? this : $Observable)(function (observer) {
          var done = false;
          microtask(function () {
            if (!done) {
              for (var j = 0; j < items.length; ++j) {
                observer.next(items[j]);
                if (done) return;
              }

              observer.complete();
            }
          });
          return function () {
            done = true;
          };
        });
      }
    });
    hide($Observable.prototype, OBSERVABLE, function () {
      return this;
    });
    $export($export.G, {
      Observable: $Observable
    });

    _dereq_(100)('Observable');
  }, {
    "100": 100,
    "128": 128,
    "23": 23,
    "3": 3,
    "33": 33,
    "39": 39,
    "40": 40,
    "42": 42,
    "6": 6,
    "68": 68,
    "7": 7,
    "93": 93
  }],
  297: [function (_dereq_, module, exports) {
    // https://github.com/tc39/proposal-promise-finally
    'use strict';

    var $export = _dereq_(33);

    var core = _dereq_(23);

    var global = _dereq_(40);

    var speciesConstructor = _dereq_(104);

    var promiseResolve = _dereq_(91);

    $export($export.P + $export.R, 'Promise', {
      'finally': function _finally(onFinally) {
        var C = speciesConstructor(this, core.Promise || global.Promise);
        var isFunction = typeof onFinally == 'function';
        return this.then(isFunction ? function (x) {
          return promiseResolve(C, onFinally()).then(function () {
            return x;
          });
        } : onFinally, isFunction ? function (e) {
          return promiseResolve(C, onFinally()).then(function () {
            throw e;
          });
        } : onFinally);
      }
    });
  }, {
    "104": 104,
    "23": 23,
    "33": 33,
    "40": 40,
    "91": 91
  }],
  298: [function (_dereq_, module, exports) {
    'use strict'; // https://github.com/tc39/proposal-promise-try

    var $export = _dereq_(33);

    var newPromiseCapability = _dereq_(69);

    var perform = _dereq_(90);

    $export($export.S, 'Promise', {
      'try': function _try(callbackfn) {
        var promiseCapability = newPromiseCapability.f(this);
        var result = perform(callbackfn);
        (result.e ? promiseCapability.reject : promiseCapability.resolve)(result.v);
        return promiseCapability.promise;
      }
    });
  }, {
    "33": 33,
    "69": 69,
    "90": 90
  }],
  299: [function (_dereq_, module, exports) {
    var metadata = _dereq_(67);

    var anObject = _dereq_(7);

    var toMetaKey = metadata.key;
    var ordinaryDefineOwnMetadata = metadata.set;
    metadata.exp({
      defineMetadata: function defineMetadata(metadataKey, metadataValue, target, targetKey) {
        ordinaryDefineOwnMetadata(metadataKey, metadataValue, anObject(target), toMetaKey(targetKey));
      }
    });
  }, {
    "67": 67,
    "7": 7
  }],
  300: [function (_dereq_, module, exports) {
    var metadata = _dereq_(67);

    var anObject = _dereq_(7);

    var toMetaKey = metadata.key;
    var getOrCreateMetadataMap = metadata.map;
    var store = metadata.store;
    metadata.exp({
      deleteMetadata: function deleteMetadata(metadataKey, target
      /* , targetKey */
      ) {
        var targetKey = arguments.length < 3 ? undefined : toMetaKey(arguments[2]);
        var metadataMap = getOrCreateMetadataMap(anObject(target), targetKey, false);
        if (metadataMap === undefined || !metadataMap['delete'](metadataKey)) return false;
        if (metadataMap.size) return true;
        var targetMetadata = store.get(target);
        targetMetadata['delete'](targetKey);
        return !!targetMetadata.size || store['delete'](target);
      }
    });
  }, {
    "67": 67,
    "7": 7
  }],
  301: [function (_dereq_, module, exports) {
    var Set = _dereq_(231);

    var from = _dereq_(10);

    var metadata = _dereq_(67);

    var anObject = _dereq_(7);

    var getPrototypeOf = _dereq_(79);

    var ordinaryOwnMetadataKeys = metadata.keys;
    var toMetaKey = metadata.key;

    var ordinaryMetadataKeys = function ordinaryMetadataKeys(O, P) {
      var oKeys = ordinaryOwnMetadataKeys(O, P);
      var parent = getPrototypeOf(O);
      if (parent === null) return oKeys;
      var pKeys = ordinaryMetadataKeys(parent, P);
      return pKeys.length ? oKeys.length ? from(new Set(oKeys.concat(pKeys))) : pKeys : oKeys;
    };

    metadata.exp({
      getMetadataKeys: function getMetadataKeys(target
      /* , targetKey */
      ) {
        return ordinaryMetadataKeys(anObject(target), arguments.length < 2 ? undefined : toMetaKey(arguments[1]));
      }
    });
  }, {
    "10": 10,
    "231": 231,
    "67": 67,
    "7": 7,
    "79": 79
  }],
  302: [function (_dereq_, module, exports) {
    var metadata = _dereq_(67);

    var anObject = _dereq_(7);

    var getPrototypeOf = _dereq_(79);

    var ordinaryHasOwnMetadata = metadata.has;
    var ordinaryGetOwnMetadata = metadata.get;
    var toMetaKey = metadata.key;

    var ordinaryGetMetadata = function ordinaryGetMetadata(MetadataKey, O, P) {
      var hasOwn = ordinaryHasOwnMetadata(MetadataKey, O, P);
      if (hasOwn) return ordinaryGetOwnMetadata(MetadataKey, O, P);
      var parent = getPrototypeOf(O);
      return parent !== null ? ordinaryGetMetadata(MetadataKey, parent, P) : undefined;
    };

    metadata.exp({
      getMetadata: function getMetadata(metadataKey, target
      /* , targetKey */
      ) {
        return ordinaryGetMetadata(metadataKey, anObject(target), arguments.length < 3 ? undefined : toMetaKey(arguments[2]));
      }
    });
  }, {
    "67": 67,
    "7": 7,
    "79": 79
  }],
  303: [function (_dereq_, module, exports) {
    var metadata = _dereq_(67);

    var anObject = _dereq_(7);

    var ordinaryOwnMetadataKeys = metadata.keys;
    var toMetaKey = metadata.key;
    metadata.exp({
      getOwnMetadataKeys: function getOwnMetadataKeys(target
      /* , targetKey */
      ) {
        return ordinaryOwnMetadataKeys(anObject(target), arguments.length < 2 ? undefined : toMetaKey(arguments[1]));
      }
    });
  }, {
    "67": 67,
    "7": 7
  }],
  304: [function (_dereq_, module, exports) {
    var metadata = _dereq_(67);

    var anObject = _dereq_(7);

    var ordinaryGetOwnMetadata = metadata.get;
    var toMetaKey = metadata.key;
    metadata.exp({
      getOwnMetadata: function getOwnMetadata(metadataKey, target
      /* , targetKey */
      ) {
        return ordinaryGetOwnMetadata(metadataKey, anObject(target), arguments.length < 3 ? undefined : toMetaKey(arguments[2]));
      }
    });
  }, {
    "67": 67,
    "7": 7
  }],
  305: [function (_dereq_, module, exports) {
    var metadata = _dereq_(67);

    var anObject = _dereq_(7);

    var getPrototypeOf = _dereq_(79);

    var ordinaryHasOwnMetadata = metadata.has;
    var toMetaKey = metadata.key;

    var ordinaryHasMetadata = function ordinaryHasMetadata(MetadataKey, O, P) {
      var hasOwn = ordinaryHasOwnMetadata(MetadataKey, O, P);
      if (hasOwn) return true;
      var parent = getPrototypeOf(O);
      return parent !== null ? ordinaryHasMetadata(MetadataKey, parent, P) : false;
    };

    metadata.exp({
      hasMetadata: function hasMetadata(metadataKey, target
      /* , targetKey */
      ) {
        return ordinaryHasMetadata(metadataKey, anObject(target), arguments.length < 3 ? undefined : toMetaKey(arguments[2]));
      }
    });
  }, {
    "67": 67,
    "7": 7,
    "79": 79
  }],
  306: [function (_dereq_, module, exports) {
    var metadata = _dereq_(67);

    var anObject = _dereq_(7);

    var ordinaryHasOwnMetadata = metadata.has;
    var toMetaKey = metadata.key;
    metadata.exp({
      hasOwnMetadata: function hasOwnMetadata(metadataKey, target
      /* , targetKey */
      ) {
        return ordinaryHasOwnMetadata(metadataKey, anObject(target), arguments.length < 3 ? undefined : toMetaKey(arguments[2]));
      }
    });
  }, {
    "67": 67,
    "7": 7
  }],
  307: [function (_dereq_, module, exports) {
    var $metadata = _dereq_(67);

    var anObject = _dereq_(7);

    var aFunction = _dereq_(3);

    var toMetaKey = $metadata.key;
    var ordinaryDefineOwnMetadata = $metadata.set;
    $metadata.exp({
      metadata: function metadata(metadataKey, metadataValue) {
        return function decorator(target, targetKey) {
          ordinaryDefineOwnMetadata(metadataKey, metadataValue, (targetKey !== undefined ? anObject : aFunction)(target), toMetaKey(targetKey));
        };
      }
    });
  }, {
    "3": 3,
    "67": 67,
    "7": 7
  }],
  308: [function (_dereq_, module, exports) {
    // https://tc39.github.io/proposal-setmap-offrom/#sec-set.from
    _dereq_(97)('Set');
  }, {
    "97": 97
  }],
  309: [function (_dereq_, module, exports) {
    // https://tc39.github.io/proposal-setmap-offrom/#sec-set.of
    _dereq_(98)('Set');
  }, {
    "98": 98
  }],
  310: [function (_dereq_, module, exports) {
    // https://github.com/DavidBruant/Map-Set.prototype.toJSON
    var $export = _dereq_(33);

    $export($export.P + $export.R, 'Set', {
      toJSON: _dereq_(20)('Set')
    });
  }, {
    "20": 20,
    "33": 33
  }],
  311: [function (_dereq_, module, exports) {
    'use strict'; // https://github.com/mathiasbynens/String.prototype.at

    var $export = _dereq_(33);

    var $at = _dereq_(106)(true);

    $export($export.P, 'String', {
      at: function at(pos) {
        return $at(this, pos);
      }
    });
  }, {
    "106": 106,
    "33": 33
  }],
  312: [function (_dereq_, module, exports) {
    'use strict'; // https://tc39.github.io/String.prototype.matchAll/

    var $export = _dereq_(33);

    var defined = _dereq_(28);

    var toLength = _dereq_(118);

    var isRegExp = _dereq_(52);

    var getFlags = _dereq_(37);

    var RegExpProto = RegExp.prototype;

    var $RegExpStringIterator = function $RegExpStringIterator(regexp, string) {
      this._r = regexp;
      this._s = string;
    };

    _dereq_(54)($RegExpStringIterator, 'RegExp String', function next() {
      var match = this._r.exec(this._s);

      return {
        value: match,
        done: match === null
      };
    });

    $export($export.P, 'String', {
      matchAll: function matchAll(regexp) {
        defined(this);
        if (!isRegExp(regexp)) throw TypeError(regexp + ' is not a regexp!');
        var S = String(this);
        var flags = 'flags' in RegExpProto ? String(regexp.flags) : getFlags.call(regexp);
        var rx = new RegExp(regexp.source, ~flags.indexOf('g') ? flags : 'g' + flags);
        rx.lastIndex = toLength(regexp.lastIndex);
        return new $RegExpStringIterator(rx, S);
      }
    });
  }, {
    "118": 118,
    "28": 28,
    "33": 33,
    "37": 37,
    "52": 52,
    "54": 54
  }],
  313: [function (_dereq_, module, exports) {
    'use strict'; // https://github.com/tc39/proposal-string-pad-start-end

    var $export = _dereq_(33);

    var $pad = _dereq_(109);

    $export($export.P, 'String', {
      padEnd: function padEnd(maxLength
      /* , fillString = ' ' */
      ) {
        return $pad(this, maxLength, arguments.length > 1 ? arguments[1] : undefined, false);
      }
    });
  }, {
    "109": 109,
    "33": 33
  }],
  314: [function (_dereq_, module, exports) {
    'use strict'; // https://github.com/tc39/proposal-string-pad-start-end

    var $export = _dereq_(33);

    var $pad = _dereq_(109);

    $export($export.P, 'String', {
      padStart: function padStart(maxLength
      /* , fillString = ' ' */
      ) {
        return $pad(this, maxLength, arguments.length > 1 ? arguments[1] : undefined, true);
      }
    });
  }, {
    "109": 109,
    "33": 33
  }],
  315: [function (_dereq_, module, exports) {
    'use strict'; // https://github.com/sebmarkbage/ecmascript-string-left-right-trim

    _dereq_(111)('trimLeft', function ($trim) {
      return function trimLeft() {
        return $trim(this, 1);
      };
    }, 'trimStart');
  }, {
    "111": 111
  }],
  316: [function (_dereq_, module, exports) {
    'use strict'; // https://github.com/sebmarkbage/ecmascript-string-left-right-trim

    _dereq_(111)('trimRight', function ($trim) {
      return function trimRight() {
        return $trim(this, 2);
      };
    }, 'trimEnd');
  }, {
    "111": 111
  }],
  317: [function (_dereq_, module, exports) {
    _dereq_(126)('asyncIterator');
  }, {
    "126": 126
  }],
  318: [function (_dereq_, module, exports) {
    _dereq_(126)('observable');
  }, {
    "126": 126
  }],
  319: [function (_dereq_, module, exports) {
    // https://github.com/tc39/proposal-global
    var $export = _dereq_(33);

    $export($export.S, 'System', {
      global: _dereq_(40)
    });
  }, {
    "33": 33,
    "40": 40
  }],
  320: [function (_dereq_, module, exports) {
    // https://tc39.github.io/proposal-setmap-offrom/#sec-weakmap.from
    _dereq_(97)('WeakMap');
  }, {
    "97": 97
  }],
  321: [function (_dereq_, module, exports) {
    // https://tc39.github.io/proposal-setmap-offrom/#sec-weakmap.of
    _dereq_(98)('WeakMap');
  }, {
    "98": 98
  }],
  322: [function (_dereq_, module, exports) {
    // https://tc39.github.io/proposal-setmap-offrom/#sec-weakset.from
    _dereq_(97)('WeakSet');
  }, {
    "97": 97
  }],
  323: [function (_dereq_, module, exports) {
    // https://tc39.github.io/proposal-setmap-offrom/#sec-weakset.of
    _dereq_(98)('WeakSet');
  }, {
    "98": 98
  }],
  324: [function (_dereq_, module, exports) {
    var $iterators = _dereq_(141);

    var getKeys = _dereq_(81);

    var redefine = _dereq_(94);

    var global = _dereq_(40);

    var hide = _dereq_(42);

    var Iterators = _dereq_(58);

    var wks = _dereq_(128);

    var ITERATOR = wks('iterator');
    var TO_STRING_TAG = wks('toStringTag');
    var ArrayValues = Iterators.Array;
    var DOMIterables = {
      CSSRuleList: true,
      // TODO: Not spec compliant, should be false.
      CSSStyleDeclaration: false,
      CSSValueList: false,
      ClientRectList: false,
      DOMRectList: false,
      DOMStringList: false,
      DOMTokenList: true,
      DataTransferItemList: false,
      FileList: false,
      HTMLAllCollection: false,
      HTMLCollection: false,
      HTMLFormElement: false,
      HTMLSelectElement: false,
      MediaList: true,
      // TODO: Not spec compliant, should be false.
      MimeTypeArray: false,
      NamedNodeMap: false,
      NodeList: true,
      PaintRequestList: false,
      Plugin: false,
      PluginArray: false,
      SVGLengthList: false,
      SVGNumberList: false,
      SVGPathSegList: false,
      SVGPointList: false,
      SVGStringList: false,
      SVGTransformList: false,
      SourceBufferList: false,
      StyleSheetList: true,
      // TODO: Not spec compliant, should be false.
      TextTrackCueList: false,
      TextTrackList: false,
      TouchList: false
    };

    for (var collections = getKeys(DOMIterables), i = 0; i < collections.length; i++) {
      var NAME = collections[i];
      var explicit = DOMIterables[NAME];
      var Collection = global[NAME];
      var proto = Collection && Collection.prototype;
      var key;

      if (proto) {
        if (!proto[ITERATOR]) hide(proto, ITERATOR, ArrayValues);
        if (!proto[TO_STRING_TAG]) hide(proto, TO_STRING_TAG, NAME);
        Iterators[NAME] = ArrayValues;
        if (explicit) for (key in $iterators) {
          if (!proto[key]) redefine(proto, key, $iterators[key], true);
        }
      }
    }
  }, {
    "128": 128,
    "141": 141,
    "40": 40,
    "42": 42,
    "58": 58,
    "81": 81,
    "94": 94
  }],
  325: [function (_dereq_, module, exports) {
    var $export = _dereq_(33);

    var $task = _dereq_(113);

    $export($export.G + $export.B, {
      setImmediate: $task.set,
      clearImmediate: $task.clear
    });
  }, {
    "113": 113,
    "33": 33
  }],
  326: [function (_dereq_, module, exports) {
    // ie9- setTimeout & setInterval additional parameters fix
    var global = _dereq_(40);

    var $export = _dereq_(33);

    var invoke = _dereq_(46);

    var partial = _dereq_(88);

    var navigator = global.navigator;
    var MSIE = !!navigator && /MSIE .\./.test(navigator.userAgent); // <- dirty ie9- check

    var wrap = function wrap(set) {
      return MSIE ? function (fn, time
      /* , ...args */
      ) {
        return set(invoke(partial, [].slice.call(arguments, 2), // eslint-disable-next-line no-new-func
        typeof fn == 'function' ? fn : Function(fn)), time);
      } : set;
    };

    $export($export.G + $export.B + $export.F * MSIE, {
      setTimeout: wrap(global.setTimeout),
      setInterval: wrap(global.setInterval)
    });
  }, {
    "33": 33,
    "40": 40,
    "46": 46,
    "88": 88
  }],
  327: [function (_dereq_, module, exports) {
    _dereq_(254);

    _dereq_(191);

    _dereq_(193);

    _dereq_(192);

    _dereq_(195);

    _dereq_(197);

    _dereq_(202);

    _dereq_(196);

    _dereq_(194);

    _dereq_(204);

    _dereq_(203);

    _dereq_(199);

    _dereq_(200);

    _dereq_(198);

    _dereq_(190);

    _dereq_(201);

    _dereq_(205);

    _dereq_(206);

    _dereq_(157);

    _dereq_(159);

    _dereq_(158);

    _dereq_(208);

    _dereq_(207);

    _dereq_(178);

    _dereq_(188);

    _dereq_(189);

    _dereq_(179);

    _dereq_(180);

    _dereq_(181);

    _dereq_(182);

    _dereq_(183);

    _dereq_(184);

    _dereq_(185);

    _dereq_(186);

    _dereq_(187);

    _dereq_(161);

    _dereq_(162);

    _dereq_(163);

    _dereq_(164);

    _dereq_(165);

    _dereq_(166);

    _dereq_(167);

    _dereq_(168);

    _dereq_(169);

    _dereq_(170);

    _dereq_(171);

    _dereq_(172);

    _dereq_(173);

    _dereq_(174);

    _dereq_(175);

    _dereq_(176);

    _dereq_(177);

    _dereq_(241);

    _dereq_(246);

    _dereq_(253);

    _dereq_(244);

    _dereq_(236);

    _dereq_(237);

    _dereq_(242);

    _dereq_(247);

    _dereq_(249);

    _dereq_(232);

    _dereq_(233);

    _dereq_(234);

    _dereq_(235);

    _dereq_(238);

    _dereq_(239);

    _dereq_(240);

    _dereq_(243);

    _dereq_(245);

    _dereq_(248);

    _dereq_(250);

    _dereq_(251);

    _dereq_(252);

    _dereq_(152);

    _dereq_(154);

    _dereq_(153);

    _dereq_(156);

    _dereq_(155);

    _dereq_(140);

    _dereq_(138);

    _dereq_(145);

    _dereq_(142);

    _dereq_(148);

    _dereq_(150);

    _dereq_(137);

    _dereq_(144);

    _dereq_(134);

    _dereq_(149);

    _dereq_(132);

    _dereq_(147);

    _dereq_(146);

    _dereq_(139);

    _dereq_(143);

    _dereq_(131);

    _dereq_(133);

    _dereq_(136);

    _dereq_(135);

    _dereq_(151);

    _dereq_(141);

    _dereq_(224);

    _dereq_(230);

    _dereq_(225);

    _dereq_(226);

    _dereq_(227);

    _dereq_(228);

    _dereq_(229);

    _dereq_(209);

    _dereq_(160);

    _dereq_(231);

    _dereq_(266);

    _dereq_(267);

    _dereq_(255);

    _dereq_(256);

    _dereq_(261);

    _dereq_(264);

    _dereq_(265);

    _dereq_(259);

    _dereq_(262);

    _dereq_(260);

    _dereq_(263);

    _dereq_(257);

    _dereq_(258);

    _dereq_(210);

    _dereq_(211);

    _dereq_(212);

    _dereq_(213);

    _dereq_(214);

    _dereq_(217);

    _dereq_(215);

    _dereq_(216);

    _dereq_(218);

    _dereq_(219);

    _dereq_(220);

    _dereq_(221);

    _dereq_(223);

    _dereq_(222);

    _dereq_(270);

    _dereq_(268);

    _dereq_(269);

    _dereq_(311);

    _dereq_(314);

    _dereq_(313);

    _dereq_(315);

    _dereq_(316);

    _dereq_(312);

    _dereq_(317);

    _dereq_(318);

    _dereq_(292);

    _dereq_(295);

    _dereq_(291);

    _dereq_(289);

    _dereq_(290);

    _dereq_(293);

    _dereq_(294);

    _dereq_(276);

    _dereq_(310);

    _dereq_(275);

    _dereq_(309);

    _dereq_(321);

    _dereq_(323);

    _dereq_(274);

    _dereq_(308);

    _dereq_(320);

    _dereq_(322);

    _dereq_(273);

    _dereq_(319);

    _dereq_(272);

    _dereq_(277);

    _dereq_(278);

    _dereq_(279);

    _dereq_(280);

    _dereq_(281);

    _dereq_(283);

    _dereq_(282);

    _dereq_(284);

    _dereq_(285);

    _dereq_(286);

    _dereq_(288);

    _dereq_(287);

    _dereq_(297);

    _dereq_(298);

    _dereq_(299);

    _dereq_(300);

    _dereq_(302);

    _dereq_(301);

    _dereq_(304);

    _dereq_(303);

    _dereq_(305);

    _dereq_(306);

    _dereq_(307);

    _dereq_(271);

    _dereq_(296);

    _dereq_(326);

    _dereq_(325);

    _dereq_(324);

    module.exports = _dereq_(23);
  }, {
    "131": 131,
    "132": 132,
    "133": 133,
    "134": 134,
    "135": 135,
    "136": 136,
    "137": 137,
    "138": 138,
    "139": 139,
    "140": 140,
    "141": 141,
    "142": 142,
    "143": 143,
    "144": 144,
    "145": 145,
    "146": 146,
    "147": 147,
    "148": 148,
    "149": 149,
    "150": 150,
    "151": 151,
    "152": 152,
    "153": 153,
    "154": 154,
    "155": 155,
    "156": 156,
    "157": 157,
    "158": 158,
    "159": 159,
    "160": 160,
    "161": 161,
    "162": 162,
    "163": 163,
    "164": 164,
    "165": 165,
    "166": 166,
    "167": 167,
    "168": 168,
    "169": 169,
    "170": 170,
    "171": 171,
    "172": 172,
    "173": 173,
    "174": 174,
    "175": 175,
    "176": 176,
    "177": 177,
    "178": 178,
    "179": 179,
    "180": 180,
    "181": 181,
    "182": 182,
    "183": 183,
    "184": 184,
    "185": 185,
    "186": 186,
    "187": 187,
    "188": 188,
    "189": 189,
    "190": 190,
    "191": 191,
    "192": 192,
    "193": 193,
    "194": 194,
    "195": 195,
    "196": 196,
    "197": 197,
    "198": 198,
    "199": 199,
    "200": 200,
    "201": 201,
    "202": 202,
    "203": 203,
    "204": 204,
    "205": 205,
    "206": 206,
    "207": 207,
    "208": 208,
    "209": 209,
    "210": 210,
    "211": 211,
    "212": 212,
    "213": 213,
    "214": 214,
    "215": 215,
    "216": 216,
    "217": 217,
    "218": 218,
    "219": 219,
    "220": 220,
    "221": 221,
    "222": 222,
    "223": 223,
    "224": 224,
    "225": 225,
    "226": 226,
    "227": 227,
    "228": 228,
    "229": 229,
    "23": 23,
    "230": 230,
    "231": 231,
    "232": 232,
    "233": 233,
    "234": 234,
    "235": 235,
    "236": 236,
    "237": 237,
    "238": 238,
    "239": 239,
    "240": 240,
    "241": 241,
    "242": 242,
    "243": 243,
    "244": 244,
    "245": 245,
    "246": 246,
    "247": 247,
    "248": 248,
    "249": 249,
    "250": 250,
    "251": 251,
    "252": 252,
    "253": 253,
    "254": 254,
    "255": 255,
    "256": 256,
    "257": 257,
    "258": 258,
    "259": 259,
    "260": 260,
    "261": 261,
    "262": 262,
    "263": 263,
    "264": 264,
    "265": 265,
    "266": 266,
    "267": 267,
    "268": 268,
    "269": 269,
    "270": 270,
    "271": 271,
    "272": 272,
    "273": 273,
    "274": 274,
    "275": 275,
    "276": 276,
    "277": 277,
    "278": 278,
    "279": 279,
    "280": 280,
    "281": 281,
    "282": 282,
    "283": 283,
    "284": 284,
    "285": 285,
    "286": 286,
    "287": 287,
    "288": 288,
    "289": 289,
    "290": 290,
    "291": 291,
    "292": 292,
    "293": 293,
    "294": 294,
    "295": 295,
    "296": 296,
    "297": 297,
    "298": 298,
    "299": 299,
    "300": 300,
    "301": 301,
    "302": 302,
    "303": 303,
    "304": 304,
    "305": 305,
    "306": 306,
    "307": 307,
    "308": 308,
    "309": 309,
    "310": 310,
    "311": 311,
    "312": 312,
    "313": 313,
    "314": 314,
    "315": 315,
    "316": 316,
    "317": 317,
    "318": 318,
    "319": 319,
    "320": 320,
    "321": 321,
    "322": 322,
    "323": 323,
    "324": 324,
    "325": 325,
    "326": 326
  }],
  328: [function (_dereq_, module, exports) {
    (function (global) {
      /**
       * Copyright (c) 2014, Facebook, Inc.
       * All rights reserved.
       *
       * This source code is licensed under the BSD-style license found in the
       * https://raw.github.com/facebook/regenerator/master/LICENSE file. An
       * additional grant of patent rights can be found in the PATENTS file in
       * the same directory.
       */
      !function (global) {
        "use strict";

        var Op = Object.prototype;
        var hasOwn = Op.hasOwnProperty;
        var undefined; // More compressible than void 0.

        var $Symbol = typeof Symbol === "function" ? Symbol : {};
        var iteratorSymbol = $Symbol.iterator || "@@iterator";
        var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
        var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";
        var inModule = _typeof(module) === "object";
        var runtime = global.regeneratorRuntime;

        if (runtime) {
          if (inModule) {
            // If regeneratorRuntime is defined globally and we're in a module,
            // make the exports object identical to regeneratorRuntime.
            module.exports = runtime;
          } // Don't bother evaluating the rest of this file if the runtime was
          // already defined globally.


          return;
        } // Define the runtime globally (as expected by generated code) as either
        // module.exports (if we're in a module) or a new, empty object.


        runtime = global.regeneratorRuntime = inModule ? module.exports : {};

        function wrap(innerFn, outerFn, self, tryLocsList) {
          // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
          var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
          var generator = Object.create(protoGenerator.prototype);
          var context = new Context(tryLocsList || []); // The ._invoke method unifies the implementations of the .next,
          // .throw, and .return methods.

          generator._invoke = makeInvokeMethod(innerFn, self, context);
          return generator;
        }

        runtime.wrap = wrap; // Try/catch helper to minimize deoptimizations. Returns a completion
        // record like context.tryEntries[i].completion. This interface could
        // have been (and was previously) designed to take a closure to be
        // invoked without arguments, but in all the cases we care about we
        // already have an existing method we want to call, so there's no need
        // to create a new function object. We can even get away with assuming
        // the method takes exactly one argument, since that happens to be true
        // in every case, so we don't have to touch the arguments object. The
        // only additional allocation required is the completion record, which
        // has a stable shape and so hopefully should be cheap to allocate.

        function tryCatch(fn, obj, arg) {
          try {
            return {
              type: "normal",
              arg: fn.call(obj, arg)
            };
          } catch (err) {
            return {
              type: "throw",
              arg: err
            };
          }
        }

        var GenStateSuspendedStart = "suspendedStart";
        var GenStateSuspendedYield = "suspendedYield";
        var GenStateExecuting = "executing";
        var GenStateCompleted = "completed"; // Returning this object from the innerFn has the same effect as
        // breaking out of the dispatch switch statement.

        var ContinueSentinel = {}; // Dummy constructor functions that we use as the .constructor and
        // .constructor.prototype properties for functions that return Generator
        // objects. For full spec compliance, you may wish to configure your
        // minifier not to mangle the names of these two functions.

        function Generator() {}

        function GeneratorFunction() {}

        function GeneratorFunctionPrototype() {} // This is a polyfill for %IteratorPrototype% for environments that
        // don't natively support it.


        var IteratorPrototype = {};

        IteratorPrototype[iteratorSymbol] = function () {
          return this;
        };

        var getProto = Object.getPrototypeOf;
        var NativeIteratorPrototype = getProto && getProto(getProto(values([])));

        if (NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
          // This environment has a native %IteratorPrototype%; use it instead
          // of the polyfill.
          IteratorPrototype = NativeIteratorPrototype;
        }

        var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype);
        GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype;
        GeneratorFunctionPrototype.constructor = GeneratorFunction;
        GeneratorFunctionPrototype[toStringTagSymbol] = GeneratorFunction.displayName = "GeneratorFunction"; // Helper for defining the .next, .throw, and .return methods of the
        // Iterator interface in terms of a single ._invoke method.

        function defineIteratorMethods(prototype) {
          ["next", "throw", "return"].forEach(function (method) {
            prototype[method] = function (arg) {
              return this._invoke(method, arg);
            };
          });
        }

        runtime.isGeneratorFunction = function (genFun) {
          var ctor = typeof genFun === "function" && genFun.constructor;
          return ctor ? ctor === GeneratorFunction || // For the native GeneratorFunction constructor, the best we can
          // do is to check its .name property.
          (ctor.displayName || ctor.name) === "GeneratorFunction" : false;
        };

        runtime.mark = function (genFun) {
          if (Object.setPrototypeOf) {
            Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
          } else {
            genFun.__proto__ = GeneratorFunctionPrototype;

            if (!(toStringTagSymbol in genFun)) {
              genFun[toStringTagSymbol] = "GeneratorFunction";
            }
          }

          genFun.prototype = Object.create(Gp);
          return genFun;
        }; // Within the body of any async function, `await x` is transformed to
        // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
        // `hasOwn.call(value, "__await")` to determine if the yielded value is
        // meant to be awaited.


        runtime.awrap = function (arg) {
          return {
            __await: arg
          };
        };

        function AsyncIterator(generator) {
          function invoke(method, arg, resolve, reject) {
            var record = tryCatch(generator[method], generator, arg);

            if (record.type === "throw") {
              reject(record.arg);
            } else {
              var result = record.arg;
              var value = result.value;

              if (value && _typeof(value) === "object" && hasOwn.call(value, "__await")) {
                return Promise.resolve(value.__await).then(function (value) {
                  invoke("next", value, resolve, reject);
                }, function (err) {
                  invoke("throw", err, resolve, reject);
                });
              }

              return Promise.resolve(value).then(function (unwrapped) {
                // When a yielded Promise is resolved, its final value becomes
                // the .value of the Promise<{value,done}> result for the
                // current iteration. If the Promise is rejected, however, the
                // result for this iteration will be rejected with the same
                // reason. Note that rejections of yielded Promises are not
                // thrown back into the generator function, as is the case
                // when an awaited Promise is rejected. This difference in
                // behavior between yield and await is important, because it
                // allows the consumer to decide what to do with the yielded
                // rejection (swallow it and continue, manually .throw it back
                // into the generator, abandon iteration, whatever). With
                // await, by contrast, there is no opportunity to examine the
                // rejection reason outside the generator function, so the
                // only option is to throw it from the await expression, and
                // let the generator function handle the exception.
                result.value = unwrapped;
                resolve(result);
              }, reject);
            }
          }

          if (_typeof(global.process) === "object" && global.process.domain) {
            invoke = global.process.domain.bind(invoke);
          }

          var previousPromise;

          function enqueue(method, arg) {
            function callInvokeWithMethodAndArg() {
              return new Promise(function (resolve, reject) {
                invoke(method, arg, resolve, reject);
              });
            }

            return previousPromise = // If enqueue has been called before, then we want to wait until
            // all previous Promises have been resolved before calling invoke,
            // so that results are always delivered in the correct order. If
            // enqueue has not been called before, then it is important to
            // call invoke immediately, without waiting on a callback to fire,
            // so that the async generator function has the opportunity to do
            // any necessary setup in a predictable way. This predictability
            // is why the Promise constructor synchronously invokes its
            // executor callback, and why async functions synchronously
            // execute code before the first await. Since we implement simple
            // async functions in terms of async generators, it is especially
            // important to get this right, even though it requires care.
            previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, // Avoid propagating failures to Promises returned by later
            // invocations of the iterator.
            callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg();
          } // Define the unified helper method that is used to implement .next,
          // .throw, and .return (see defineIteratorMethods).


          this._invoke = enqueue;
        }

        defineIteratorMethods(AsyncIterator.prototype);

        AsyncIterator.prototype[asyncIteratorSymbol] = function () {
          return this;
        };

        runtime.AsyncIterator = AsyncIterator; // Note that simple async functions are implemented on top of
        // AsyncIterator objects; they just return a Promise for the value of
        // the final result produced by the iterator.

        runtime.async = function (innerFn, outerFn, self, tryLocsList) {
          var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList));
          return runtime.isGeneratorFunction(outerFn) ? iter // If outerFn is a generator, return the full iterator.
          : iter.next().then(function (result) {
            return result.done ? result.value : iter.next();
          });
        };

        function makeInvokeMethod(innerFn, self, context) {
          var state = GenStateSuspendedStart;
          return function invoke(method, arg) {
            if (state === GenStateExecuting) {
              throw new Error("Generator is already running");
            }

            if (state === GenStateCompleted) {
              if (method === "throw") {
                throw arg;
              } // Be forgiving, per 25.3.3.3.3 of the spec:
              // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume


              return doneResult();
            }

            context.method = method;
            context.arg = arg;

            while (true) {
              var delegate = context.delegate;

              if (delegate) {
                var delegateResult = maybeInvokeDelegate(delegate, context);

                if (delegateResult) {
                  if (delegateResult === ContinueSentinel) continue;
                  return delegateResult;
                }
              }

              if (context.method === "next") {
                // Setting context._sent for legacy support of Babel's
                // function.sent implementation.
                context.sent = context._sent = context.arg;
              } else if (context.method === "throw") {
                if (state === GenStateSuspendedStart) {
                  state = GenStateCompleted;
                  throw context.arg;
                }

                context.dispatchException(context.arg);
              } else if (context.method === "return") {
                context.abrupt("return", context.arg);
              }

              state = GenStateExecuting;
              var record = tryCatch(innerFn, self, context);

              if (record.type === "normal") {
                // If an exception is thrown from innerFn, we leave state ===
                // GenStateExecuting and loop back for another invocation.
                state = context.done ? GenStateCompleted : GenStateSuspendedYield;

                if (record.arg === ContinueSentinel) {
                  continue;
                }

                return {
                  value: record.arg,
                  done: context.done
                };
              } else if (record.type === "throw") {
                state = GenStateCompleted; // Dispatch the exception by looping back around to the
                // context.dispatchException(context.arg) call above.

                context.method = "throw";
                context.arg = record.arg;
              }
            }
          };
        } // Call delegate.iterator[context.method](context.arg) and handle the
        // result, either by returning a { value, done } result from the
        // delegate iterator, or by modifying context.method and context.arg,
        // setting context.delegate to null, and returning the ContinueSentinel.


        function maybeInvokeDelegate(delegate, context) {
          var method = delegate.iterator[context.method];

          if (method === undefined) {
            // A .throw or .return when the delegate iterator has no .throw
            // method always terminates the yield* loop.
            context.delegate = null;

            if (context.method === "throw") {
              if (delegate.iterator.return) {
                // If the delegate iterator has a return method, give it a
                // chance to clean up.
                context.method = "return";
                context.arg = undefined;
                maybeInvokeDelegate(delegate, context);

                if (context.method === "throw") {
                  // If maybeInvokeDelegate(context) changed context.method from
                  // "return" to "throw", let that override the TypeError below.
                  return ContinueSentinel;
                }
              }

              context.method = "throw";
              context.arg = new TypeError("The iterator does not provide a 'throw' method");
            }

            return ContinueSentinel;
          }

          var record = tryCatch(method, delegate.iterator, context.arg);

          if (record.type === "throw") {
            context.method = "throw";
            context.arg = record.arg;
            context.delegate = null;
            return ContinueSentinel;
          }

          var info = record.arg;

          if (!info) {
            context.method = "throw";
            context.arg = new TypeError("iterator result is not an object");
            context.delegate = null;
            return ContinueSentinel;
          }

          if (info.done) {
            // Assign the result of the finished delegate to the temporary
            // variable specified by delegate.resultName (see delegateYield).
            context[delegate.resultName] = info.value; // Resume execution at the desired location (see delegateYield).

            context.next = delegate.nextLoc; // If context.method was "throw" but the delegate handled the
            // exception, let the outer generator proceed normally. If
            // context.method was "next", forget context.arg since it has been
            // "consumed" by the delegate iterator. If context.method was
            // "return", allow the original .return call to continue in the
            // outer generator.

            if (context.method !== "return") {
              context.method = "next";
              context.arg = undefined;
            }
          } else {
            // Re-yield the result returned by the delegate method.
            return info;
          } // The delegate iterator is finished, so forget it and continue with
          // the outer generator.


          context.delegate = null;
          return ContinueSentinel;
        } // Define Generator.prototype.{next,throw,return} in terms of the
        // unified ._invoke helper method.


        defineIteratorMethods(Gp);
        Gp[toStringTagSymbol] = "Generator"; // A Generator should always return itself as the iterator object when the
        // @@iterator function is called on it. Some browsers' implementations of the
        // iterator prototype chain incorrectly implement this, causing the Generator
        // object to not be returned from this call. This ensures that doesn't happen.
        // See https://github.com/facebook/regenerator/issues/274 for more details.

        Gp[iteratorSymbol] = function () {
          return this;
        };

        Gp.toString = function () {
          return "[object Generator]";
        };

        function pushTryEntry(locs) {
          var entry = {
            tryLoc: locs[0]
          };

          if (1 in locs) {
            entry.catchLoc = locs[1];
          }

          if (2 in locs) {
            entry.finallyLoc = locs[2];
            entry.afterLoc = locs[3];
          }

          this.tryEntries.push(entry);
        }

        function resetTryEntry(entry) {
          var record = entry.completion || {};
          record.type = "normal";
          delete record.arg;
          entry.completion = record;
        }

        function Context(tryLocsList) {
          // The root entry object (effectively a try statement without a catch
          // or a finally block) gives us a place to store values thrown from
          // locations where there is no enclosing try statement.
          this.tryEntries = [{
            tryLoc: "root"
          }];
          tryLocsList.forEach(pushTryEntry, this);
          this.reset(true);
        }

        runtime.keys = function (object) {
          var keys = [];

          for (var key in object) {
            keys.push(key);
          }

          keys.reverse(); // Rather than returning an object with a next method, we keep
          // things simple and return the next function itself.

          return function next() {
            while (keys.length) {
              var key = keys.pop();

              if (key in object) {
                next.value = key;
                next.done = false;
                return next;
              }
            } // To avoid creating an additional object, we just hang the .value
            // and .done properties off the next function object itself. This
            // also ensures that the minifier will not anonymize the function.


            next.done = true;
            return next;
          };
        };

        function values(iterable) {
          if (iterable) {
            var iteratorMethod = iterable[iteratorSymbol];

            if (iteratorMethod) {
              return iteratorMethod.call(iterable);
            }

            if (typeof iterable.next === "function") {
              return iterable;
            }

            if (!isNaN(iterable.length)) {
              var i = -1,
                  next = function next() {
                while (++i < iterable.length) {
                  if (hasOwn.call(iterable, i)) {
                    next.value = iterable[i];
                    next.done = false;
                    return next;
                  }
                }

                next.value = undefined;
                next.done = true;
                return next;
              };

              return next.next = next;
            }
          } // Return an iterator with no values.


          return {
            next: doneResult
          };
        }

        runtime.values = values;

        function doneResult() {
          return {
            value: undefined,
            done: true
          };
        }

        Context.prototype = {
          constructor: Context,
          reset: function reset(skipTempReset) {
            this.prev = 0;
            this.next = 0; // Resetting context._sent for legacy support of Babel's
            // function.sent implementation.

            this.sent = this._sent = undefined;
            this.done = false;
            this.delegate = null;
            this.method = "next";
            this.arg = undefined;
            this.tryEntries.forEach(resetTryEntry);

            if (!skipTempReset) {
              for (var name in this) {
                // Not sure about the optimal order of these conditions:
                if (name.charAt(0) === "t" && hasOwn.call(this, name) && !isNaN(+name.slice(1))) {
                  this[name] = undefined;
                }
              }
            }
          },
          stop: function stop() {
            this.done = true;
            var rootEntry = this.tryEntries[0];
            var rootRecord = rootEntry.completion;

            if (rootRecord.type === "throw") {
              throw rootRecord.arg;
            }

            return this.rval;
          },
          dispatchException: function dispatchException(exception) {
            if (this.done) {
              throw exception;
            }

            var context = this;

            function handle(loc, caught) {
              record.type = "throw";
              record.arg = exception;
              context.next = loc;

              if (caught) {
                // If the dispatched exception was caught by a catch block,
                // then let that catch block handle the exception normally.
                context.method = "next";
                context.arg = undefined;
              }

              return !!caught;
            }

            for (var i = this.tryEntries.length - 1; i >= 0; --i) {
              var entry = this.tryEntries[i];
              var record = entry.completion;

              if (entry.tryLoc === "root") {
                // Exception thrown outside of any try block that could handle
                // it, so set the completion value of the entire function to
                // throw the exception.
                return handle("end");
              }

              if (entry.tryLoc <= this.prev) {
                var hasCatch = hasOwn.call(entry, "catchLoc");
                var hasFinally = hasOwn.call(entry, "finallyLoc");

                if (hasCatch && hasFinally) {
                  if (this.prev < entry.catchLoc) {
                    return handle(entry.catchLoc, true);
                  } else if (this.prev < entry.finallyLoc) {
                    return handle(entry.finallyLoc);
                  }
                } else if (hasCatch) {
                  if (this.prev < entry.catchLoc) {
                    return handle(entry.catchLoc, true);
                  }
                } else if (hasFinally) {
                  if (this.prev < entry.finallyLoc) {
                    return handle(entry.finallyLoc);
                  }
                } else {
                  throw new Error("try statement without catch or finally");
                }
              }
            }
          },
          abrupt: function abrupt(type, arg) {
            for (var i = this.tryEntries.length - 1; i >= 0; --i) {
              var entry = this.tryEntries[i];

              if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) {
                var finallyEntry = entry;
                break;
              }
            }

            if (finallyEntry && (type === "break" || type === "continue") && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc) {
              // Ignore the finally entry if control is not jumping to a
              // location outside the try/catch block.
              finallyEntry = null;
            }

            var record = finallyEntry ? finallyEntry.completion : {};
            record.type = type;
            record.arg = arg;

            if (finallyEntry) {
              this.method = "next";
              this.next = finallyEntry.finallyLoc;
              return ContinueSentinel;
            }

            return this.complete(record);
          },
          complete: function complete(record, afterLoc) {
            if (record.type === "throw") {
              throw record.arg;
            }

            if (record.type === "break" || record.type === "continue") {
              this.next = record.arg;
            } else if (record.type === "return") {
              this.rval = this.arg = record.arg;
              this.method = "return";
              this.next = "end";
            } else if (record.type === "normal" && afterLoc) {
              this.next = afterLoc;
            }

            return ContinueSentinel;
          },
          finish: function finish(finallyLoc) {
            for (var i = this.tryEntries.length - 1; i >= 0; --i) {
              var entry = this.tryEntries[i];

              if (entry.finallyLoc === finallyLoc) {
                this.complete(entry.completion, entry.afterLoc);
                resetTryEntry(entry);
                return ContinueSentinel;
              }
            }
          },
          "catch": function _catch(tryLoc) {
            for (var i = this.tryEntries.length - 1; i >= 0; --i) {
              var entry = this.tryEntries[i];

              if (entry.tryLoc === tryLoc) {
                var record = entry.completion;

                if (record.type === "throw") {
                  var thrown = record.arg;
                  resetTryEntry(entry);
                }

                return thrown;
              }
            } // The context.catch method must only be called with a location
            // argument that corresponds to a known catch block.


            throw new Error("illegal catch attempt");
          },
          delegateYield: function delegateYield(iterable, resultName, nextLoc) {
            this.delegate = {
              iterator: values(iterable),
              resultName: resultName,
              nextLoc: nextLoc
            };

            if (this.method === "next") {
              // Deliberately forget the last sent value so that we don't
              // accidentally pass it on to the delegate.
              this.arg = undefined;
            }

            return ContinueSentinel;
          }
        };
      }( // Among the various tricks for obtaining a reference to the global
      // object, this seems to be the most reliable technique that does not
      // use indirect eval (which violates Content Security Policy).
      _typeof(global) === "object" ? global : (typeof window === "undefined" ? "undefined" : _typeof(window)) === "object" ? window : (typeof self === "undefined" ? "undefined" : _typeof(self)) === "object" ? self : this);
    }).call(this, typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {});
  }, {}]
}, {}, [1]);
/*jslint node: true */

/*jshint esversion: 6 */
"use strict";

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

(function () {
  window.addEventListener("load", function () {
    console.log("assesment.js loaded?");
    var endpoint1 = "http://www.omdbapi.com/?s=bridge&apiKey=6c3a2d45";
    var endpoint2 = "http://www.omdbapi.com/?i=tt3682448&apikey=6c3a2d45"; // const endpoint1 = `data/amazon.json`;
    // const endpoint2 = `data/amazon2.json`;
    //const endpoint = `data/amazon.json`;
    //empty var to put array into

    var movies = ''; //comment??

    var search_termNEW = "";
    var searchNEW = document.getElementById("searchNEW");
    var resultsNEW = document.getElementById("resultsNEW");
    var predefinedNEW = document.getElementById("predefinedNEW");

    var fetchEndpoint1 = function fetchEndpoint1() {
      fetch(endpoint1).then(function (response) {
        return response.json();
      }).then(function (allMovies) {
        movies = allMovies;
        displayMovies();
      }).catch(function (error) {// return alert(error);
      });
    };

    var fetchEndpoint2 = function fetchEndpoint2() {
      fetch(endpoint2).then(function (response) {
        return response.json();
      }).then(function (predefinedMovies) {
        printpredefined(predefinedMovies);
      }).catch(function (error) {//return alert(error);
      });
    }; //check if search input is on page  


    if (document.getElementById('searchNEW') != null) {
      console.log("Search page");
      fetchEndpoint1();
      searchNEW.addEventListener("input", checkInput);
    } else {
      console.log("Detail page");
      fetchEndpoint2();
    }

    function printpredefined(predefinedMovies) {
      //Looping trough object ES8 compile babel..
      for (var _i = 0, _Object$entries = Object.entries(predefinedMovies); _i < _Object$entries.length; _i++) {
        var _Object$entries$_i = _slicedToArray(_Object$entries[_i], 2),
            key = _Object$entries$_i[0],
            value = _Object$entries$_i[1];

        console.log("".concat(key, ": ").concat(value));
        var li = document.createElement("li");
        var ratingUl = document.createElement("ul");
        var myListArray = [];
        var newlist = document.createElement('ul');
        var newParagraph = document.createElement('p');

        if (key === 'Ratings') {
          console.log("RATINGS??");
          li.innerHTML = "<h4>".concat(key, "</h4>");

          for (var i = 0; i < value.length; i++) {
            console.log("length rating value" + value.length);
            console.log("rating!: ".concat(value[i].Source, " value!: ").concat(value[i].Value));
            ratingUl.innerHTML += "<li><i>".concat(value[i].Source, "</i><span>").concat(value[i].Value, "</span></li>");
          }

          console.log("ratingUl" + ratingUl.innerHTML);
          predefinedNEW.appendChild(li).appendChild(ratingUl).classList.add('ratings');
        } else if (key === 'Plot') {
          console.log("title" + key + "counting" + value.length);

          if (value.length > 200) {
            newParagraph.classList.add('newPar');
            console.log("LANG!!!" + value.length);
            li.innerHTML = "<h4>".concat(key, "</h4>");
            var text = document.createTextNode(value);
            newParagraph.appendChild(text);
            li.appendChild(newParagraph);
            newParagraph.parentElement.classList.add('plot');
            predefinedNEW.appendChild(li);
          } else {
            console.log("kort genoeg" + value.length);
          }
        } else if (key === 'Genre') {
          makeLists(value, key, li, myListArray, newlist);
        } else if (key === 'Writer') {
          makeLists(value, key, li, myListArray, newlist);
        } else if (key === 'Actors') {
          makeLists(value, key, li, myListArray, newlist);
        } else if (key === 'Poster') {
          console.log("Poster source:".concat(value)); //placing it on top

          predefinedNEW.firstElementChild.nextElementSibling.innerHTML = "<img src=".concat(value, ">");
        } else {
          li.innerHTML = "<h4>".concat(key, "</h4>") + "<p>".concat(value, "</p>");
          predefinedNEW.appendChild(li);
        }
      }
    }

    function makeLists(value, key, li, myListArray, newlist) {
      myListArray = value.replace(/,/g, '').split(" ");
      console.log(myListArray.length);
      console.log("Genre new array:" + myListArray[0]);
      newlist.classList.add('newlist');
      li.innerHTML = "<h4>".concat(key, "</h4>");

      for (var k = 0; k < myListArray.length; k++) {
        console.log("inhoud:" + myListArray[k]);
        newlist.innerHTML += '<li>' + myListArray[k] + '</li>';
      }

      predefinedNEW.appendChild(li).appendChild(newlist);
    }

    function displayMovies() {
      resultsNEW.innerHTML = "";
      movies.Search.filter(function (item) {
        for (var i = 0; i < 4; i++) {
          console.log("index" + i);
          return item.Title.toLowerCase().includes(search_termNEW);
        }
      }).forEach(function (index) {
        var li = document.createElement("li");
        li.innerHTML = "<img src=" + index.Poster + ">" + "<span> Title:" + index.Title + "</span> " + "<span> Type: " + index.Type + "</span>" + "<span> Year: " + index.Year + "</span>" + "<span> imdbID: " + index.imdbID + "</span>";
        resultsNEW.appendChild(li);
      });
    }

    function checkInput(event) {
      search_termNEW = event.target.value.toLowerCase();
      console.log("test" + search_termNEW);
      displayMovies();
    }
  });
})();
'use strict';
/*jshint esversion: 6 */

var _index = require("../node_modules/gsap/index.js");

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

(function () {
  window.addEventListener("load", function () {
    console.log("sandbox.js loaded?");

    var hello = function hello() {
      return "Hello World!";
    };

    var fruits = ["Banana", "Orange", "Apple", "Mango"];
    fruits.includes("Mango"); // is true

    function resolveAfter2Seconds() {
      return new Promise(function (resolve) {
        setTimeout(function () {
          resolve('resolved?');
        }, 2000);
      });
    }

    function asyncCall() {
      return _asyncCall.apply(this, arguments);
    }

    function _asyncCall() {
      _asyncCall = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
        var result;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                console.log('calling');
                _context.next = 3;
                return resolveAfter2Seconds();

              case 3:
                result = _context.sent;
                console.log(result); // expected output: "resolved"

              case 5:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));
      return _asyncCall.apply(this, arguments);
    }

    asyncCall(); //WITH Timelines (cleaner, more versatile)
    // var tl = gsap.timeline({repeat: 2, repeatDelay: 1, repeat:0});
    // tl.to(".een", {x: -1000 , duration: 1});
    // tl.to(".een", {x: 0, duration: 1});
    //tl.to(".een", {opacity: 0, duration: 1});
    // then we can control the whole thing easily...
    //tl.pause();
    //tl.resume();
    //tl.seek(1.5);
    //tl.reverse();
    // tl.kill();
    // HTML CSS JSResult Skip Results Iframe
    // EDIT ON

    _index.gsap.from(".blockholder ul li", {
      duration: 2,
      scale: 0.5,
      opacity: 0,
      delay: 0.5,
      stagger: 0.6,
      ease: "elastic",
      force3D: true
    }); // document.querySelectorAll(".blockholder ul li").forEach(function(box) {
    //  // box.addEventListener("click", function() {
    //     gsap.to(".blockholder ul li", {
    //       duration: 0.5, 
    //       //opacity: 0, 
    //       //y: 200, 
    //       stagger: 0.2,
    //       ease: "back.in"
    //     });
    //   //});
    // });
    //clipTween1 = TweenLite.from(box1, 1, {clip:"rect(50px 100px 50px 0px)", paused:true});
    // gsap.effects.explode(".blockholder ul li", {
    //   direction: "up", //can reference any properties that the author decides - in this case "direction".
    //   duration: 3
    // });

  });
})();
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBvbHlmaWxsLmpzIiwiYXNzZXNtZW50LmpzIiwic2FuZGJveC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ25nVkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDM0pBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiQWxsLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7IFwiQGJhYmVsL2hlbHBlcnMgLSB0eXBlb2ZcIjsgaWYgKHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID09PSBcInN5bWJvbFwiKSB7IF90eXBlb2YgPSBmdW5jdGlvbiBfdHlwZW9mKG9iaikgeyByZXR1cm4gdHlwZW9mIG9iajsgfTsgfSBlbHNlIHsgX3R5cGVvZiA9IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7IHJldHVybiBvYmogJiYgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9iai5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sICYmIG9iaiAhPT0gU3ltYm9sLnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2Ygb2JqOyB9OyB9IHJldHVybiBfdHlwZW9mKG9iaik7IH1cblxuKGZ1bmN0aW9uIGUodCwgbiwgcikge1xuICBmdW5jdGlvbiBzKG8sIHUpIHtcbiAgICBpZiAoIW5bb10pIHtcbiAgICAgIGlmICghdFtvXSkge1xuICAgICAgICB2YXIgYSA9IHR5cGVvZiByZXF1aXJlID09IFwiZnVuY3Rpb25cIiAmJiByZXF1aXJlO1xuICAgICAgICBpZiAoIXUgJiYgYSkgcmV0dXJuIGEobywgITApO1xuICAgICAgICBpZiAoaSkgcmV0dXJuIGkobywgITApO1xuICAgICAgICB2YXIgZiA9IG5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIgKyBvICsgXCInXCIpO1xuICAgICAgICB0aHJvdyBmLmNvZGUgPSBcIk1PRFVMRV9OT1RfRk9VTkRcIiwgZjtcbiAgICAgIH1cblxuICAgICAgdmFyIGwgPSBuW29dID0ge1xuICAgICAgICBleHBvcnRzOiB7fVxuICAgICAgfTtcbiAgICAgIHRbb11bMF0uY2FsbChsLmV4cG9ydHMsIGZ1bmN0aW9uIChlKSB7XG4gICAgICAgIHZhciBuID0gdFtvXVsxXVtlXTtcbiAgICAgICAgcmV0dXJuIHMobiA/IG4gOiBlKTtcbiAgICAgIH0sIGwsIGwuZXhwb3J0cywgZSwgdCwgbiwgcik7XG4gICAgfVxuXG4gICAgcmV0dXJuIG5bb10uZXhwb3J0cztcbiAgfVxuXG4gIHZhciBpID0gdHlwZW9mIHJlcXVpcmUgPT0gXCJmdW5jdGlvblwiICYmIHJlcXVpcmU7XG5cbiAgZm9yICh2YXIgbyA9IDA7IG8gPCByLmxlbmd0aDsgbysrKSB7XG4gICAgcyhyW29dKTtcbiAgfVxuXG4gIHJldHVybiBzO1xufSkoe1xuICAxOiBbZnVuY3Rpb24gKF9kZXJlcV8sIG1vZHVsZSwgZXhwb3J0cykge1xuICAgIChmdW5jdGlvbiAoZ2xvYmFsKSB7XG4gICAgICBcInVzZSBzdHJpY3RcIjtcblxuICAgICAgX2RlcmVxXygzMjcpO1xuXG4gICAgICBfZGVyZXFfKDMyOCk7XG5cbiAgICAgIF9kZXJlcV8oMik7XG5cbiAgICAgIGlmIChnbG9iYWwuX2JhYmVsUG9seWZpbGwpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwib25seSBvbmUgaW5zdGFuY2Ugb2YgYmFiZWwtcG9seWZpbGwgaXMgYWxsb3dlZFwiKTtcbiAgICAgIH1cblxuICAgICAgZ2xvYmFsLl9iYWJlbFBvbHlmaWxsID0gdHJ1ZTtcbiAgICAgIHZhciBERUZJTkVfUFJPUEVSVFkgPSBcImRlZmluZVByb3BlcnR5XCI7XG5cbiAgICAgIGZ1bmN0aW9uIGRlZmluZShPLCBrZXksIHZhbHVlKSB7XG4gICAgICAgIE9ba2V5XSB8fCBPYmplY3RbREVGSU5FX1BST1BFUlRZXShPLCBrZXksIHtcbiAgICAgICAgICB3cml0YWJsZTogdHJ1ZSxcbiAgICAgICAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgICAgICAgdmFsdWU6IHZhbHVlXG4gICAgICAgIH0pO1xuICAgICAgfVxuXG4gICAgICBkZWZpbmUoU3RyaW5nLnByb3RvdHlwZSwgXCJwYWRMZWZ0XCIsIFwiXCIucGFkU3RhcnQpO1xuICAgICAgZGVmaW5lKFN0cmluZy5wcm90b3R5cGUsIFwicGFkUmlnaHRcIiwgXCJcIi5wYWRFbmQpO1xuICAgICAgXCJwb3AscmV2ZXJzZSxzaGlmdCxrZXlzLHZhbHVlcyxlbnRyaWVzLGluZGV4T2YsZXZlcnksc29tZSxmb3JFYWNoLG1hcCxmaWx0ZXIsZmluZCxmaW5kSW5kZXgsaW5jbHVkZXMsam9pbixzbGljZSxjb25jYXQscHVzaCxzcGxpY2UsdW5zaGlmdCxzb3J0LGxhc3RJbmRleE9mLHJlZHVjZSxyZWR1Y2VSaWdodCxjb3B5V2l0aGluLGZpbGxcIi5zcGxpdChcIixcIikuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgICAgIFtdW2tleV0gJiYgZGVmaW5lKEFycmF5LCBrZXksIEZ1bmN0aW9uLmNhbGwuYmluZChbXVtrZXldKSk7XG4gICAgICB9KTtcbiAgICB9KS5jYWxsKHRoaXMsIHR5cGVvZiBnbG9iYWwgIT09IFwidW5kZWZpbmVkXCIgPyBnbG9iYWwgOiB0eXBlb2Ygc2VsZiAhPT0gXCJ1bmRlZmluZWRcIiA/IHNlbGYgOiB0eXBlb2Ygd2luZG93ICE9PSBcInVuZGVmaW5lZFwiID8gd2luZG93IDoge30pO1xuICB9LCB7XG4gICAgXCIyXCI6IDIsXG4gICAgXCIzMjdcIjogMzI3LFxuICAgIFwiMzI4XCI6IDMyOFxuICB9XSxcbiAgMjogW2Z1bmN0aW9uIChfZGVyZXFfLCBtb2R1bGUsIGV4cG9ydHMpIHtcbiAgICBfZGVyZXFfKDEzMCk7XG5cbiAgICBtb2R1bGUuZXhwb3J0cyA9IF9kZXJlcV8oMjMpLlJlZ0V4cC5lc2NhcGU7XG4gIH0sIHtcbiAgICBcIjEzMFwiOiAxMzAsXG4gICAgXCIyM1wiOiAyM1xuICB9XSxcbiAgMzogW2Z1bmN0aW9uIChfZGVyZXFfLCBtb2R1bGUsIGV4cG9ydHMpIHtcbiAgICBtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCkge1xuICAgICAgaWYgKHR5cGVvZiBpdCAhPSAnZnVuY3Rpb24nKSB0aHJvdyBUeXBlRXJyb3IoaXQgKyAnIGlzIG5vdCBhIGZ1bmN0aW9uIScpO1xuICAgICAgcmV0dXJuIGl0O1xuICAgIH07XG4gIH0sIHt9XSxcbiAgNDogW2Z1bmN0aW9uIChfZGVyZXFfLCBtb2R1bGUsIGV4cG9ydHMpIHtcbiAgICB2YXIgY29mID0gX2RlcmVxXygxOCk7XG5cbiAgICBtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCwgbXNnKSB7XG4gICAgICBpZiAodHlwZW9mIGl0ICE9ICdudW1iZXInICYmIGNvZihpdCkgIT0gJ051bWJlcicpIHRocm93IFR5cGVFcnJvcihtc2cpO1xuICAgICAgcmV0dXJuICtpdDtcbiAgICB9O1xuICB9LCB7XG4gICAgXCIxOFwiOiAxOFxuICB9XSxcbiAgNTogW2Z1bmN0aW9uIChfZGVyZXFfLCBtb2R1bGUsIGV4cG9ydHMpIHtcbiAgICAvLyAyMi4xLjMuMzEgQXJyYXkucHJvdG90eXBlW0BAdW5zY29wYWJsZXNdXG4gICAgdmFyIFVOU0NPUEFCTEVTID0gX2RlcmVxXygxMjgpKCd1bnNjb3BhYmxlcycpO1xuXG4gICAgdmFyIEFycmF5UHJvdG8gPSBBcnJheS5wcm90b3R5cGU7XG4gICAgaWYgKEFycmF5UHJvdG9bVU5TQ09QQUJMRVNdID09IHVuZGVmaW5lZCkgX2RlcmVxXyg0MikoQXJyYXlQcm90bywgVU5TQ09QQUJMRVMsIHt9KTtcblxuICAgIG1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGtleSkge1xuICAgICAgQXJyYXlQcm90b1tVTlNDT1BBQkxFU11ba2V5XSA9IHRydWU7XG4gICAgfTtcbiAgfSwge1xuICAgIFwiMTI4XCI6IDEyOCxcbiAgICBcIjQyXCI6IDQyXG4gIH1dLFxuICA2OiBbZnVuY3Rpb24gKF9kZXJlcV8sIG1vZHVsZSwgZXhwb3J0cykge1xuICAgIG1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0LCBDb25zdHJ1Y3RvciwgbmFtZSwgZm9yYmlkZGVuRmllbGQpIHtcbiAgICAgIGlmICghKGl0IGluc3RhbmNlb2YgQ29uc3RydWN0b3IpIHx8IGZvcmJpZGRlbkZpZWxkICE9PSB1bmRlZmluZWQgJiYgZm9yYmlkZGVuRmllbGQgaW4gaXQpIHtcbiAgICAgICAgdGhyb3cgVHlwZUVycm9yKG5hbWUgKyAnOiBpbmNvcnJlY3QgaW52b2NhdGlvbiEnKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGl0O1xuICAgIH07XG4gIH0sIHt9XSxcbiAgNzogW2Z1bmN0aW9uIChfZGVyZXFfLCBtb2R1bGUsIGV4cG9ydHMpIHtcbiAgICB2YXIgaXNPYmplY3QgPSBfZGVyZXFfKDUxKTtcblxuICAgIG1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0KSB7XG4gICAgICBpZiAoIWlzT2JqZWN0KGl0KSkgdGhyb3cgVHlwZUVycm9yKGl0ICsgJyBpcyBub3QgYW4gb2JqZWN0IScpO1xuICAgICAgcmV0dXJuIGl0O1xuICAgIH07XG4gIH0sIHtcbiAgICBcIjUxXCI6IDUxXG4gIH1dLFxuICA4OiBbZnVuY3Rpb24gKF9kZXJlcV8sIG1vZHVsZSwgZXhwb3J0cykge1xuICAgIC8vIDIyLjEuMy4zIEFycmF5LnByb3RvdHlwZS5jb3B5V2l0aGluKHRhcmdldCwgc3RhcnQsIGVuZCA9IHRoaXMubGVuZ3RoKVxuICAgICd1c2Ugc3RyaWN0JztcblxuICAgIHZhciB0b09iamVjdCA9IF9kZXJlcV8oMTE5KTtcblxuICAgIHZhciB0b0Fic29sdXRlSW5kZXggPSBfZGVyZXFfKDExNCk7XG5cbiAgICB2YXIgdG9MZW5ndGggPSBfZGVyZXFfKDExOCk7XG5cbiAgICBtb2R1bGUuZXhwb3J0cyA9IFtdLmNvcHlXaXRoaW4gfHwgZnVuY3Rpb24gY29weVdpdGhpbih0YXJnZXRcbiAgICAvKiA9IDAgKi9cbiAgICAsIHN0YXJ0XG4gICAgLyogPSAwLCBlbmQgPSBAbGVuZ3RoICovXG4gICAgKSB7XG4gICAgICB2YXIgTyA9IHRvT2JqZWN0KHRoaXMpO1xuICAgICAgdmFyIGxlbiA9IHRvTGVuZ3RoKE8ubGVuZ3RoKTtcbiAgICAgIHZhciB0byA9IHRvQWJzb2x1dGVJbmRleCh0YXJnZXQsIGxlbik7XG4gICAgICB2YXIgZnJvbSA9IHRvQWJzb2x1dGVJbmRleChzdGFydCwgbGVuKTtcbiAgICAgIHZhciBlbmQgPSBhcmd1bWVudHMubGVuZ3RoID4gMiA/IGFyZ3VtZW50c1syXSA6IHVuZGVmaW5lZDtcbiAgICAgIHZhciBjb3VudCA9IE1hdGgubWluKChlbmQgPT09IHVuZGVmaW5lZCA/IGxlbiA6IHRvQWJzb2x1dGVJbmRleChlbmQsIGxlbikpIC0gZnJvbSwgbGVuIC0gdG8pO1xuICAgICAgdmFyIGluYyA9IDE7XG5cbiAgICAgIGlmIChmcm9tIDwgdG8gJiYgdG8gPCBmcm9tICsgY291bnQpIHtcbiAgICAgICAgaW5jID0gLTE7XG4gICAgICAgIGZyb20gKz0gY291bnQgLSAxO1xuICAgICAgICB0byArPSBjb3VudCAtIDE7XG4gICAgICB9XG5cbiAgICAgIHdoaWxlIChjb3VudC0tID4gMCkge1xuICAgICAgICBpZiAoZnJvbSBpbiBPKSBPW3RvXSA9IE9bZnJvbV07ZWxzZSBkZWxldGUgT1t0b107XG4gICAgICAgIHRvICs9IGluYztcbiAgICAgICAgZnJvbSArPSBpbmM7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBPO1xuICAgIH07XG4gIH0sIHtcbiAgICBcIjExNFwiOiAxMTQsXG4gICAgXCIxMThcIjogMTE4LFxuICAgIFwiMTE5XCI6IDExOVxuICB9XSxcbiAgOTogW2Z1bmN0aW9uIChfZGVyZXFfLCBtb2R1bGUsIGV4cG9ydHMpIHtcbiAgICAvLyAyMi4xLjMuNiBBcnJheS5wcm90b3R5cGUuZmlsbCh2YWx1ZSwgc3RhcnQgPSAwLCBlbmQgPSB0aGlzLmxlbmd0aClcbiAgICAndXNlIHN0cmljdCc7XG5cbiAgICB2YXIgdG9PYmplY3QgPSBfZGVyZXFfKDExOSk7XG5cbiAgICB2YXIgdG9BYnNvbHV0ZUluZGV4ID0gX2RlcmVxXygxMTQpO1xuXG4gICAgdmFyIHRvTGVuZ3RoID0gX2RlcmVxXygxMTgpO1xuXG4gICAgbW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBmaWxsKHZhbHVlXG4gICAgLyogLCBzdGFydCA9IDAsIGVuZCA9IEBsZW5ndGggKi9cbiAgICApIHtcbiAgICAgIHZhciBPID0gdG9PYmplY3QodGhpcyk7XG4gICAgICB2YXIgbGVuZ3RoID0gdG9MZW5ndGgoTy5sZW5ndGgpO1xuICAgICAgdmFyIGFMZW4gPSBhcmd1bWVudHMubGVuZ3RoO1xuICAgICAgdmFyIGluZGV4ID0gdG9BYnNvbHV0ZUluZGV4KGFMZW4gPiAxID8gYXJndW1lbnRzWzFdIDogdW5kZWZpbmVkLCBsZW5ndGgpO1xuICAgICAgdmFyIGVuZCA9IGFMZW4gPiAyID8gYXJndW1lbnRzWzJdIDogdW5kZWZpbmVkO1xuICAgICAgdmFyIGVuZFBvcyA9IGVuZCA9PT0gdW5kZWZpbmVkID8gbGVuZ3RoIDogdG9BYnNvbHV0ZUluZGV4KGVuZCwgbGVuZ3RoKTtcblxuICAgICAgd2hpbGUgKGVuZFBvcyA+IGluZGV4KSB7XG4gICAgICAgIE9baW5kZXgrK10gPSB2YWx1ZTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIE87XG4gICAgfTtcbiAgfSwge1xuICAgIFwiMTE0XCI6IDExNCxcbiAgICBcIjExOFwiOiAxMTgsXG4gICAgXCIxMTlcIjogMTE5XG4gIH1dLFxuICAxMDogW2Z1bmN0aW9uIChfZGVyZXFfLCBtb2R1bGUsIGV4cG9ydHMpIHtcbiAgICB2YXIgZm9yT2YgPSBfZGVyZXFfKDM5KTtcblxuICAgIG1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZXIsIElURVJBVE9SKSB7XG4gICAgICB2YXIgcmVzdWx0ID0gW107XG4gICAgICBmb3JPZihpdGVyLCBmYWxzZSwgcmVzdWx0LnB1c2gsIHJlc3VsdCwgSVRFUkFUT1IpO1xuICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9O1xuICB9LCB7XG4gICAgXCIzOVwiOiAzOVxuICB9XSxcbiAgMTE6IFtmdW5jdGlvbiAoX2RlcmVxXywgbW9kdWxlLCBleHBvcnRzKSB7XG4gICAgLy8gZmFsc2UgLT4gQXJyYXkjaW5kZXhPZlxuICAgIC8vIHRydWUgIC0+IEFycmF5I2luY2x1ZGVzXG4gICAgdmFyIHRvSU9iamVjdCA9IF9kZXJlcV8oMTE3KTtcblxuICAgIHZhciB0b0xlbmd0aCA9IF9kZXJlcV8oMTE4KTtcblxuICAgIHZhciB0b0Fic29sdXRlSW5kZXggPSBfZGVyZXFfKDExNCk7XG5cbiAgICBtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChJU19JTkNMVURFUykge1xuICAgICAgcmV0dXJuIGZ1bmN0aW9uICgkdGhpcywgZWwsIGZyb21JbmRleCkge1xuICAgICAgICB2YXIgTyA9IHRvSU9iamVjdCgkdGhpcyk7XG4gICAgICAgIHZhciBsZW5ndGggPSB0b0xlbmd0aChPLmxlbmd0aCk7XG4gICAgICAgIHZhciBpbmRleCA9IHRvQWJzb2x1dGVJbmRleChmcm9tSW5kZXgsIGxlbmd0aCk7XG4gICAgICAgIHZhciB2YWx1ZTsgLy8gQXJyYXkjaW5jbHVkZXMgdXNlcyBTYW1lVmFsdWVaZXJvIGVxdWFsaXR5IGFsZ29yaXRobVxuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tc2VsZi1jb21wYXJlXG5cbiAgICAgICAgaWYgKElTX0lOQ0xVREVTICYmIGVsICE9IGVsKSB3aGlsZSAobGVuZ3RoID4gaW5kZXgpIHtcbiAgICAgICAgICB2YWx1ZSA9IE9baW5kZXgrK107IC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1zZWxmLWNvbXBhcmVcblxuICAgICAgICAgIGlmICh2YWx1ZSAhPSB2YWx1ZSkgcmV0dXJuIHRydWU7IC8vIEFycmF5I2luZGV4T2YgaWdub3JlcyBob2xlcywgQXJyYXkjaW5jbHVkZXMgLSBub3RcbiAgICAgICAgfSBlbHNlIGZvciAoOyBsZW5ndGggPiBpbmRleDsgaW5kZXgrKykge1xuICAgICAgICAgIGlmIChJU19JTkNMVURFUyB8fCBpbmRleCBpbiBPKSB7XG4gICAgICAgICAgICBpZiAoT1tpbmRleF0gPT09IGVsKSByZXR1cm4gSVNfSU5DTFVERVMgfHwgaW5kZXggfHwgMDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuICFJU19JTkNMVURFUyAmJiAtMTtcbiAgICAgIH07XG4gICAgfTtcbiAgfSwge1xuICAgIFwiMTE0XCI6IDExNCxcbiAgICBcIjExN1wiOiAxMTcsXG4gICAgXCIxMThcIjogMTE4XG4gIH1dLFxuICAxMjogW2Z1bmN0aW9uIChfZGVyZXFfLCBtb2R1bGUsIGV4cG9ydHMpIHtcbiAgICAvLyAwIC0+IEFycmF5I2ZvckVhY2hcbiAgICAvLyAxIC0+IEFycmF5I21hcFxuICAgIC8vIDIgLT4gQXJyYXkjZmlsdGVyXG4gICAgLy8gMyAtPiBBcnJheSNzb21lXG4gICAgLy8gNCAtPiBBcnJheSNldmVyeVxuICAgIC8vIDUgLT4gQXJyYXkjZmluZFxuICAgIC8vIDYgLT4gQXJyYXkjZmluZEluZGV4XG4gICAgdmFyIGN0eCA9IF9kZXJlcV8oMjUpO1xuXG4gICAgdmFyIElPYmplY3QgPSBfZGVyZXFfKDQ3KTtcblxuICAgIHZhciB0b09iamVjdCA9IF9kZXJlcV8oMTE5KTtcblxuICAgIHZhciB0b0xlbmd0aCA9IF9kZXJlcV8oMTE4KTtcblxuICAgIHZhciBhc2MgPSBfZGVyZXFfKDE1KTtcblxuICAgIG1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKFRZUEUsICRjcmVhdGUpIHtcbiAgICAgIHZhciBJU19NQVAgPSBUWVBFID09IDE7XG4gICAgICB2YXIgSVNfRklMVEVSID0gVFlQRSA9PSAyO1xuICAgICAgdmFyIElTX1NPTUUgPSBUWVBFID09IDM7XG4gICAgICB2YXIgSVNfRVZFUlkgPSBUWVBFID09IDQ7XG4gICAgICB2YXIgSVNfRklORF9JTkRFWCA9IFRZUEUgPT0gNjtcbiAgICAgIHZhciBOT19IT0xFUyA9IFRZUEUgPT0gNSB8fCBJU19GSU5EX0lOREVYO1xuICAgICAgdmFyIGNyZWF0ZSA9ICRjcmVhdGUgfHwgYXNjO1xuICAgICAgcmV0dXJuIGZ1bmN0aW9uICgkdGhpcywgY2FsbGJhY2tmbiwgdGhhdCkge1xuICAgICAgICB2YXIgTyA9IHRvT2JqZWN0KCR0aGlzKTtcbiAgICAgICAgdmFyIHNlbGYgPSBJT2JqZWN0KE8pO1xuICAgICAgICB2YXIgZiA9IGN0eChjYWxsYmFja2ZuLCB0aGF0LCAzKTtcbiAgICAgICAgdmFyIGxlbmd0aCA9IHRvTGVuZ3RoKHNlbGYubGVuZ3RoKTtcbiAgICAgICAgdmFyIGluZGV4ID0gMDtcbiAgICAgICAgdmFyIHJlc3VsdCA9IElTX01BUCA/IGNyZWF0ZSgkdGhpcywgbGVuZ3RoKSA6IElTX0ZJTFRFUiA/IGNyZWF0ZSgkdGhpcywgMCkgOiB1bmRlZmluZWQ7XG4gICAgICAgIHZhciB2YWwsIHJlcztcblxuICAgICAgICBmb3IgKDsgbGVuZ3RoID4gaW5kZXg7IGluZGV4KyspIHtcbiAgICAgICAgICBpZiAoTk9fSE9MRVMgfHwgaW5kZXggaW4gc2VsZikge1xuICAgICAgICAgICAgdmFsID0gc2VsZltpbmRleF07XG4gICAgICAgICAgICByZXMgPSBmKHZhbCwgaW5kZXgsIE8pO1xuXG4gICAgICAgICAgICBpZiAoVFlQRSkge1xuICAgICAgICAgICAgICBpZiAoSVNfTUFQKSByZXN1bHRbaW5kZXhdID0gcmVzOyAvLyBtYXBcbiAgICAgICAgICAgICAgZWxzZSBpZiAocmVzKSBzd2l0Y2ggKFRZUEUpIHtcbiAgICAgICAgICAgICAgICBjYXNlIDM6XG4gICAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgICAgICAvLyBzb21lXG5cbiAgICAgICAgICAgICAgICBjYXNlIDU6XG4gICAgICAgICAgICAgICAgICByZXR1cm4gdmFsO1xuICAgICAgICAgICAgICAgIC8vIGZpbmRcblxuICAgICAgICAgICAgICAgIGNhc2UgNjpcbiAgICAgICAgICAgICAgICAgIHJldHVybiBpbmRleDtcbiAgICAgICAgICAgICAgICAvLyBmaW5kSW5kZXhcblxuICAgICAgICAgICAgICAgIGNhc2UgMjpcbiAgICAgICAgICAgICAgICAgIHJlc3VsdC5wdXNoKHZhbCk7XG4gICAgICAgICAgICAgICAgLy8gZmlsdGVyXG4gICAgICAgICAgICAgIH0gZWxzZSBpZiAoSVNfRVZFUlkpIHJldHVybiBmYWxzZTsgLy8gZXZlcnlcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gSVNfRklORF9JTkRFWCA/IC0xIDogSVNfU09NRSB8fCBJU19FVkVSWSA/IElTX0VWRVJZIDogcmVzdWx0O1xuICAgICAgfTtcbiAgICB9O1xuICB9LCB7XG4gICAgXCIxMThcIjogMTE4LFxuICAgIFwiMTE5XCI6IDExOSxcbiAgICBcIjE1XCI6IDE1LFxuICAgIFwiMjVcIjogMjUsXG4gICAgXCI0N1wiOiA0N1xuICB9XSxcbiAgMTM6IFtmdW5jdGlvbiAoX2RlcmVxXywgbW9kdWxlLCBleHBvcnRzKSB7XG4gICAgdmFyIGFGdW5jdGlvbiA9IF9kZXJlcV8oMyk7XG5cbiAgICB2YXIgdG9PYmplY3QgPSBfZGVyZXFfKDExOSk7XG5cbiAgICB2YXIgSU9iamVjdCA9IF9kZXJlcV8oNDcpO1xuXG4gICAgdmFyIHRvTGVuZ3RoID0gX2RlcmVxXygxMTgpO1xuXG4gICAgbW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodGhhdCwgY2FsbGJhY2tmbiwgYUxlbiwgbWVtbywgaXNSaWdodCkge1xuICAgICAgYUZ1bmN0aW9uKGNhbGxiYWNrZm4pO1xuICAgICAgdmFyIE8gPSB0b09iamVjdCh0aGF0KTtcbiAgICAgIHZhciBzZWxmID0gSU9iamVjdChPKTtcbiAgICAgIHZhciBsZW5ndGggPSB0b0xlbmd0aChPLmxlbmd0aCk7XG4gICAgICB2YXIgaW5kZXggPSBpc1JpZ2h0ID8gbGVuZ3RoIC0gMSA6IDA7XG4gICAgICB2YXIgaSA9IGlzUmlnaHQgPyAtMSA6IDE7XG4gICAgICBpZiAoYUxlbiA8IDIpIGZvciAoOzspIHtcbiAgICAgICAgaWYgKGluZGV4IGluIHNlbGYpIHtcbiAgICAgICAgICBtZW1vID0gc2VsZltpbmRleF07XG4gICAgICAgICAgaW5kZXggKz0gaTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuXG4gICAgICAgIGluZGV4ICs9IGk7XG5cbiAgICAgICAgaWYgKGlzUmlnaHQgPyBpbmRleCA8IDAgOiBsZW5ndGggPD0gaW5kZXgpIHtcbiAgICAgICAgICB0aHJvdyBUeXBlRXJyb3IoJ1JlZHVjZSBvZiBlbXB0eSBhcnJheSB3aXRoIG5vIGluaXRpYWwgdmFsdWUnKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBmb3IgKDsgaXNSaWdodCA/IGluZGV4ID49IDAgOiBsZW5ndGggPiBpbmRleDsgaW5kZXggKz0gaSkge1xuICAgICAgICBpZiAoaW5kZXggaW4gc2VsZikge1xuICAgICAgICAgIG1lbW8gPSBjYWxsYmFja2ZuKG1lbW8sIHNlbGZbaW5kZXhdLCBpbmRleCwgTyk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgcmV0dXJuIG1lbW87XG4gICAgfTtcbiAgfSwge1xuICAgIFwiMTE4XCI6IDExOCxcbiAgICBcIjExOVwiOiAxMTksXG4gICAgXCIzXCI6IDMsXG4gICAgXCI0N1wiOiA0N1xuICB9XSxcbiAgMTQ6IFtmdW5jdGlvbiAoX2RlcmVxXywgbW9kdWxlLCBleHBvcnRzKSB7XG4gICAgdmFyIGlzT2JqZWN0ID0gX2RlcmVxXyg1MSk7XG5cbiAgICB2YXIgaXNBcnJheSA9IF9kZXJlcV8oNDkpO1xuXG4gICAgdmFyIFNQRUNJRVMgPSBfZGVyZXFfKDEyOCkoJ3NwZWNpZXMnKTtcblxuICAgIG1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKG9yaWdpbmFsKSB7XG4gICAgICB2YXIgQztcblxuICAgICAgaWYgKGlzQXJyYXkob3JpZ2luYWwpKSB7XG4gICAgICAgIEMgPSBvcmlnaW5hbC5jb25zdHJ1Y3RvcjsgLy8gY3Jvc3MtcmVhbG0gZmFsbGJhY2tcblxuICAgICAgICBpZiAodHlwZW9mIEMgPT0gJ2Z1bmN0aW9uJyAmJiAoQyA9PT0gQXJyYXkgfHwgaXNBcnJheShDLnByb3RvdHlwZSkpKSBDID0gdW5kZWZpbmVkO1xuXG4gICAgICAgIGlmIChpc09iamVjdChDKSkge1xuICAgICAgICAgIEMgPSBDW1NQRUNJRVNdO1xuICAgICAgICAgIGlmIChDID09PSBudWxsKSBDID0gdW5kZWZpbmVkO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBDID09PSB1bmRlZmluZWQgPyBBcnJheSA6IEM7XG4gICAgfTtcbiAgfSwge1xuICAgIFwiMTI4XCI6IDEyOCxcbiAgICBcIjQ5XCI6IDQ5LFxuICAgIFwiNTFcIjogNTFcbiAgfV0sXG4gIDE1OiBbZnVuY3Rpb24gKF9kZXJlcV8sIG1vZHVsZSwgZXhwb3J0cykge1xuICAgIC8vIDkuNC4yLjMgQXJyYXlTcGVjaWVzQ3JlYXRlKG9yaWdpbmFsQXJyYXksIGxlbmd0aClcbiAgICB2YXIgc3BlY2llc0NvbnN0cnVjdG9yID0gX2RlcmVxXygxNCk7XG5cbiAgICBtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChvcmlnaW5hbCwgbGVuZ3RoKSB7XG4gICAgICByZXR1cm4gbmV3IChzcGVjaWVzQ29uc3RydWN0b3Iob3JpZ2luYWwpKShsZW5ndGgpO1xuICAgIH07XG4gIH0sIHtcbiAgICBcIjE0XCI6IDE0XG4gIH1dLFxuICAxNjogW2Z1bmN0aW9uIChfZGVyZXFfLCBtb2R1bGUsIGV4cG9ydHMpIHtcbiAgICAndXNlIHN0cmljdCc7XG5cbiAgICB2YXIgYUZ1bmN0aW9uID0gX2RlcmVxXygzKTtcblxuICAgIHZhciBpc09iamVjdCA9IF9kZXJlcV8oNTEpO1xuXG4gICAgdmFyIGludm9rZSA9IF9kZXJlcV8oNDYpO1xuXG4gICAgdmFyIGFycmF5U2xpY2UgPSBbXS5zbGljZTtcbiAgICB2YXIgZmFjdG9yaWVzID0ge307XG5cbiAgICB2YXIgY29uc3RydWN0ID0gZnVuY3Rpb24gY29uc3RydWN0KEYsIGxlbiwgYXJncykge1xuICAgICAgaWYgKCEobGVuIGluIGZhY3RvcmllcykpIHtcbiAgICAgICAgZm9yICh2YXIgbiA9IFtdLCBpID0gMDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgICAgICAgbltpXSA9ICdhWycgKyBpICsgJ10nO1xuICAgICAgICB9IC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1uZXctZnVuY1xuXG5cbiAgICAgICAgZmFjdG9yaWVzW2xlbl0gPSBGdW5jdGlvbignRixhJywgJ3JldHVybiBuZXcgRignICsgbi5qb2luKCcsJykgKyAnKScpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gZmFjdG9yaWVzW2xlbl0oRiwgYXJncyk7XG4gICAgfTtcblxuICAgIG1vZHVsZS5leHBvcnRzID0gRnVuY3Rpb24uYmluZCB8fCBmdW5jdGlvbiBiaW5kKHRoYXRcbiAgICAvKiAsIC4uLmFyZ3MgKi9cbiAgICApIHtcbiAgICAgIHZhciBmbiA9IGFGdW5jdGlvbih0aGlzKTtcbiAgICAgIHZhciBwYXJ0QXJncyA9IGFycmF5U2xpY2UuY2FsbChhcmd1bWVudHMsIDEpO1xuXG4gICAgICB2YXIgYm91bmQgPSBmdW5jdGlvbiBib3VuZCgpIHtcbiAgICAgICAgdmFyIGFyZ3MgPSBwYXJ0QXJncy5jb25jYXQoYXJyYXlTbGljZS5jYWxsKGFyZ3VtZW50cykpO1xuICAgICAgICByZXR1cm4gdGhpcyBpbnN0YW5jZW9mIGJvdW5kID8gY29uc3RydWN0KGZuLCBhcmdzLmxlbmd0aCwgYXJncykgOiBpbnZva2UoZm4sIGFyZ3MsIHRoYXQpO1xuICAgICAgfTtcblxuICAgICAgaWYgKGlzT2JqZWN0KGZuLnByb3RvdHlwZSkpIGJvdW5kLnByb3RvdHlwZSA9IGZuLnByb3RvdHlwZTtcbiAgICAgIHJldHVybiBib3VuZDtcbiAgICB9O1xuICB9LCB7XG4gICAgXCIzXCI6IDMsXG4gICAgXCI0NlwiOiA0NixcbiAgICBcIjUxXCI6IDUxXG4gIH1dLFxuICAxNzogW2Z1bmN0aW9uIChfZGVyZXFfLCBtb2R1bGUsIGV4cG9ydHMpIHtcbiAgICAvLyBnZXR0aW5nIHRhZyBmcm9tIDE5LjEuMy42IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcoKVxuICAgIHZhciBjb2YgPSBfZGVyZXFfKDE4KTtcblxuICAgIHZhciBUQUcgPSBfZGVyZXFfKDEyOCkoJ3RvU3RyaW5nVGFnJyk7IC8vIEVTMyB3cm9uZyBoZXJlXG5cblxuICAgIHZhciBBUkcgPSBjb2YoZnVuY3Rpb24gKCkge1xuICAgICAgcmV0dXJuIGFyZ3VtZW50cztcbiAgICB9KCkpID09ICdBcmd1bWVudHMnOyAvLyBmYWxsYmFjayBmb3IgSUUxMSBTY3JpcHQgQWNjZXNzIERlbmllZCBlcnJvclxuXG4gICAgdmFyIHRyeUdldCA9IGZ1bmN0aW9uIHRyeUdldChpdCwga2V5KSB7XG4gICAgICB0cnkge1xuICAgICAgICByZXR1cm4gaXRba2V5XTtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLyogZW1wdHkgKi9cbiAgICAgIH1cbiAgICB9O1xuXG4gICAgbW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQpIHtcbiAgICAgIHZhciBPLCBULCBCO1xuICAgICAgcmV0dXJuIGl0ID09PSB1bmRlZmluZWQgPyAnVW5kZWZpbmVkJyA6IGl0ID09PSBudWxsID8gJ051bGwnIC8vIEBAdG9TdHJpbmdUYWcgY2FzZVxuICAgICAgOiB0eXBlb2YgKFQgPSB0cnlHZXQoTyA9IE9iamVjdChpdCksIFRBRykpID09ICdzdHJpbmcnID8gVCAvLyBidWlsdGluVGFnIGNhc2VcbiAgICAgIDogQVJHID8gY29mKE8pIC8vIEVTMyBhcmd1bWVudHMgZmFsbGJhY2tcbiAgICAgIDogKEIgPSBjb2YoTykpID09ICdPYmplY3QnICYmIHR5cGVvZiBPLmNhbGxlZSA9PSAnZnVuY3Rpb24nID8gJ0FyZ3VtZW50cycgOiBCO1xuICAgIH07XG4gIH0sIHtcbiAgICBcIjEyOFwiOiAxMjgsXG4gICAgXCIxOFwiOiAxOFxuICB9XSxcbiAgMTg6IFtmdW5jdGlvbiAoX2RlcmVxXywgbW9kdWxlLCBleHBvcnRzKSB7XG4gICAgdmFyIHRvU3RyaW5nID0ge30udG9TdHJpbmc7XG5cbiAgICBtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCkge1xuICAgICAgcmV0dXJuIHRvU3RyaW5nLmNhbGwoaXQpLnNsaWNlKDgsIC0xKTtcbiAgICB9O1xuICB9LCB7fV0sXG4gIDE5OiBbZnVuY3Rpb24gKF9kZXJlcV8sIG1vZHVsZSwgZXhwb3J0cykge1xuICAgICd1c2Ugc3RyaWN0JztcblxuICAgIHZhciBkUCA9IF9kZXJlcV8oNzIpLmY7XG5cbiAgICB2YXIgY3JlYXRlID0gX2RlcmVxXyg3MSk7XG5cbiAgICB2YXIgcmVkZWZpbmVBbGwgPSBfZGVyZXFfKDkzKTtcblxuICAgIHZhciBjdHggPSBfZGVyZXFfKDI1KTtcblxuICAgIHZhciBhbkluc3RhbmNlID0gX2RlcmVxXyg2KTtcblxuICAgIHZhciBmb3JPZiA9IF9kZXJlcV8oMzkpO1xuXG4gICAgdmFyICRpdGVyRGVmaW5lID0gX2RlcmVxXyg1NSk7XG5cbiAgICB2YXIgc3RlcCA9IF9kZXJlcV8oNTcpO1xuXG4gICAgdmFyIHNldFNwZWNpZXMgPSBfZGVyZXFfKDEwMCk7XG5cbiAgICB2YXIgREVTQ1JJUFRPUlMgPSBfZGVyZXFfKDI5KTtcblxuICAgIHZhciBmYXN0S2V5ID0gX2RlcmVxXyg2NikuZmFzdEtleTtcblxuICAgIHZhciB2YWxpZGF0ZSA9IF9kZXJlcV8oMTI1KTtcblxuICAgIHZhciBTSVpFID0gREVTQ1JJUFRPUlMgPyAnX3MnIDogJ3NpemUnO1xuXG4gICAgdmFyIGdldEVudHJ5ID0gZnVuY3Rpb24gZ2V0RW50cnkodGhhdCwga2V5KSB7XG4gICAgICAvLyBmYXN0IGNhc2VcbiAgICAgIHZhciBpbmRleCA9IGZhc3RLZXkoa2V5KTtcbiAgICAgIHZhciBlbnRyeTtcbiAgICAgIGlmIChpbmRleCAhPT0gJ0YnKSByZXR1cm4gdGhhdC5faVtpbmRleF07IC8vIGZyb3plbiBvYmplY3QgY2FzZVxuXG4gICAgICBmb3IgKGVudHJ5ID0gdGhhdC5fZjsgZW50cnk7IGVudHJ5ID0gZW50cnkubikge1xuICAgICAgICBpZiAoZW50cnkuayA9PSBrZXkpIHJldHVybiBlbnRyeTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgbW9kdWxlLmV4cG9ydHMgPSB7XG4gICAgICBnZXRDb25zdHJ1Y3RvcjogZnVuY3Rpb24gZ2V0Q29uc3RydWN0b3Iod3JhcHBlciwgTkFNRSwgSVNfTUFQLCBBRERFUikge1xuICAgICAgICB2YXIgQyA9IHdyYXBwZXIoZnVuY3Rpb24gKHRoYXQsIGl0ZXJhYmxlKSB7XG4gICAgICAgICAgYW5JbnN0YW5jZSh0aGF0LCBDLCBOQU1FLCAnX2knKTtcbiAgICAgICAgICB0aGF0Ll90ID0gTkFNRTsgLy8gY29sbGVjdGlvbiB0eXBlXG5cbiAgICAgICAgICB0aGF0Ll9pID0gY3JlYXRlKG51bGwpOyAvLyBpbmRleFxuXG4gICAgICAgICAgdGhhdC5fZiA9IHVuZGVmaW5lZDsgLy8gZmlyc3QgZW50cnlcblxuICAgICAgICAgIHRoYXQuX2wgPSB1bmRlZmluZWQ7IC8vIGxhc3QgZW50cnlcblxuICAgICAgICAgIHRoYXRbU0laRV0gPSAwOyAvLyBzaXplXG5cbiAgICAgICAgICBpZiAoaXRlcmFibGUgIT0gdW5kZWZpbmVkKSBmb3JPZihpdGVyYWJsZSwgSVNfTUFQLCB0aGF0W0FEREVSXSwgdGhhdCk7XG4gICAgICAgIH0pO1xuICAgICAgICByZWRlZmluZUFsbChDLnByb3RvdHlwZSwge1xuICAgICAgICAgIC8vIDIzLjEuMy4xIE1hcC5wcm90b3R5cGUuY2xlYXIoKVxuICAgICAgICAgIC8vIDIzLjIuMy4yIFNldC5wcm90b3R5cGUuY2xlYXIoKVxuICAgICAgICAgIGNsZWFyOiBmdW5jdGlvbiBjbGVhcigpIHtcbiAgICAgICAgICAgIGZvciAodmFyIHRoYXQgPSB2YWxpZGF0ZSh0aGlzLCBOQU1FKSwgZGF0YSA9IHRoYXQuX2ksIGVudHJ5ID0gdGhhdC5fZjsgZW50cnk7IGVudHJ5ID0gZW50cnkubikge1xuICAgICAgICAgICAgICBlbnRyeS5yID0gdHJ1ZTtcbiAgICAgICAgICAgICAgaWYgKGVudHJ5LnApIGVudHJ5LnAgPSBlbnRyeS5wLm4gPSB1bmRlZmluZWQ7XG4gICAgICAgICAgICAgIGRlbGV0ZSBkYXRhW2VudHJ5LmldO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB0aGF0Ll9mID0gdGhhdC5fbCA9IHVuZGVmaW5lZDtcbiAgICAgICAgICAgIHRoYXRbU0laRV0gPSAwO1xuICAgICAgICAgIH0sXG4gICAgICAgICAgLy8gMjMuMS4zLjMgTWFwLnByb3RvdHlwZS5kZWxldGUoa2V5KVxuICAgICAgICAgIC8vIDIzLjIuMy40IFNldC5wcm90b3R5cGUuZGVsZXRlKHZhbHVlKVxuICAgICAgICAgICdkZWxldGUnOiBmdW5jdGlvbiBfZGVsZXRlKGtleSkge1xuICAgICAgICAgICAgdmFyIHRoYXQgPSB2YWxpZGF0ZSh0aGlzLCBOQU1FKTtcbiAgICAgICAgICAgIHZhciBlbnRyeSA9IGdldEVudHJ5KHRoYXQsIGtleSk7XG5cbiAgICAgICAgICAgIGlmIChlbnRyeSkge1xuICAgICAgICAgICAgICB2YXIgbmV4dCA9IGVudHJ5Lm47XG4gICAgICAgICAgICAgIHZhciBwcmV2ID0gZW50cnkucDtcbiAgICAgICAgICAgICAgZGVsZXRlIHRoYXQuX2lbZW50cnkuaV07XG4gICAgICAgICAgICAgIGVudHJ5LnIgPSB0cnVlO1xuICAgICAgICAgICAgICBpZiAocHJldikgcHJldi5uID0gbmV4dDtcbiAgICAgICAgICAgICAgaWYgKG5leHQpIG5leHQucCA9IHByZXY7XG4gICAgICAgICAgICAgIGlmICh0aGF0Ll9mID09IGVudHJ5KSB0aGF0Ll9mID0gbmV4dDtcbiAgICAgICAgICAgICAgaWYgKHRoYXQuX2wgPT0gZW50cnkpIHRoYXQuX2wgPSBwcmV2O1xuICAgICAgICAgICAgICB0aGF0W1NJWkVdLS07XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldHVybiAhIWVudHJ5O1xuICAgICAgICAgIH0sXG4gICAgICAgICAgLy8gMjMuMi4zLjYgU2V0LnByb3RvdHlwZS5mb3JFYWNoKGNhbGxiYWNrZm4sIHRoaXNBcmcgPSB1bmRlZmluZWQpXG4gICAgICAgICAgLy8gMjMuMS4zLjUgTWFwLnByb3RvdHlwZS5mb3JFYWNoKGNhbGxiYWNrZm4sIHRoaXNBcmcgPSB1bmRlZmluZWQpXG4gICAgICAgICAgZm9yRWFjaDogZnVuY3Rpb24gZm9yRWFjaChjYWxsYmFja2ZuXG4gICAgICAgICAgLyogLCB0aGF0ID0gdW5kZWZpbmVkICovXG4gICAgICAgICAgKSB7XG4gICAgICAgICAgICB2YWxpZGF0ZSh0aGlzLCBOQU1FKTtcbiAgICAgICAgICAgIHZhciBmID0gY3R4KGNhbGxiYWNrZm4sIGFyZ3VtZW50cy5sZW5ndGggPiAxID8gYXJndW1lbnRzWzFdIDogdW5kZWZpbmVkLCAzKTtcbiAgICAgICAgICAgIHZhciBlbnRyeTtcblxuICAgICAgICAgICAgd2hpbGUgKGVudHJ5ID0gZW50cnkgPyBlbnRyeS5uIDogdGhpcy5fZikge1xuICAgICAgICAgICAgICBmKGVudHJ5LnYsIGVudHJ5LmssIHRoaXMpOyAvLyByZXZlcnQgdG8gdGhlIGxhc3QgZXhpc3RpbmcgZW50cnlcblxuICAgICAgICAgICAgICB3aGlsZSAoZW50cnkgJiYgZW50cnkucikge1xuICAgICAgICAgICAgICAgIGVudHJ5ID0gZW50cnkucDtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0sXG4gICAgICAgICAgLy8gMjMuMS4zLjcgTWFwLnByb3RvdHlwZS5oYXMoa2V5KVxuICAgICAgICAgIC8vIDIzLjIuMy43IFNldC5wcm90b3R5cGUuaGFzKHZhbHVlKVxuICAgICAgICAgIGhhczogZnVuY3Rpb24gaGFzKGtleSkge1xuICAgICAgICAgICAgcmV0dXJuICEhZ2V0RW50cnkodmFsaWRhdGUodGhpcywgTkFNRSksIGtleSk7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgaWYgKERFU0NSSVBUT1JTKSBkUChDLnByb3RvdHlwZSwgJ3NpemUnLCB7XG4gICAgICAgICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICAgICAgICByZXR1cm4gdmFsaWRhdGUodGhpcywgTkFNRSlbU0laRV07XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIEM7XG4gICAgICB9LFxuICAgICAgZGVmOiBmdW5jdGlvbiBkZWYodGhhdCwga2V5LCB2YWx1ZSkge1xuICAgICAgICB2YXIgZW50cnkgPSBnZXRFbnRyeSh0aGF0LCBrZXkpO1xuICAgICAgICB2YXIgcHJldiwgaW5kZXg7IC8vIGNoYW5nZSBleGlzdGluZyBlbnRyeVxuXG4gICAgICAgIGlmIChlbnRyeSkge1xuICAgICAgICAgIGVudHJ5LnYgPSB2YWx1ZTsgLy8gY3JlYXRlIG5ldyBlbnRyeVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRoYXQuX2wgPSBlbnRyeSA9IHtcbiAgICAgICAgICAgIGk6IGluZGV4ID0gZmFzdEtleShrZXksIHRydWUpLFxuICAgICAgICAgICAgLy8gPC0gaW5kZXhcbiAgICAgICAgICAgIGs6IGtleSxcbiAgICAgICAgICAgIC8vIDwtIGtleVxuICAgICAgICAgICAgdjogdmFsdWUsXG4gICAgICAgICAgICAvLyA8LSB2YWx1ZVxuICAgICAgICAgICAgcDogcHJldiA9IHRoYXQuX2wsXG4gICAgICAgICAgICAvLyA8LSBwcmV2aW91cyBlbnRyeVxuICAgICAgICAgICAgbjogdW5kZWZpbmVkLFxuICAgICAgICAgICAgLy8gPC0gbmV4dCBlbnRyeVxuICAgICAgICAgICAgcjogZmFsc2UgLy8gPC0gcmVtb3ZlZFxuXG4gICAgICAgICAgfTtcbiAgICAgICAgICBpZiAoIXRoYXQuX2YpIHRoYXQuX2YgPSBlbnRyeTtcbiAgICAgICAgICBpZiAocHJldikgcHJldi5uID0gZW50cnk7XG4gICAgICAgICAgdGhhdFtTSVpFXSsrOyAvLyBhZGQgdG8gaW5kZXhcblxuICAgICAgICAgIGlmIChpbmRleCAhPT0gJ0YnKSB0aGF0Ll9pW2luZGV4XSA9IGVudHJ5O1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHRoYXQ7XG4gICAgICB9LFxuICAgICAgZ2V0RW50cnk6IGdldEVudHJ5LFxuICAgICAgc2V0U3Ryb25nOiBmdW5jdGlvbiBzZXRTdHJvbmcoQywgTkFNRSwgSVNfTUFQKSB7XG4gICAgICAgIC8vIGFkZCAua2V5cywgLnZhbHVlcywgLmVudHJpZXMsIFtAQGl0ZXJhdG9yXVxuICAgICAgICAvLyAyMy4xLjMuNCwgMjMuMS4zLjgsIDIzLjEuMy4xMSwgMjMuMS4zLjEyLCAyMy4yLjMuNSwgMjMuMi4zLjgsIDIzLjIuMy4xMCwgMjMuMi4zLjExXG4gICAgICAgICRpdGVyRGVmaW5lKEMsIE5BTUUsIGZ1bmN0aW9uIChpdGVyYXRlZCwga2luZCkge1xuICAgICAgICAgIHRoaXMuX3QgPSB2YWxpZGF0ZShpdGVyYXRlZCwgTkFNRSk7IC8vIHRhcmdldFxuXG4gICAgICAgICAgdGhpcy5fayA9IGtpbmQ7IC8vIGtpbmRcblxuICAgICAgICAgIHRoaXMuX2wgPSB1bmRlZmluZWQ7IC8vIHByZXZpb3VzXG4gICAgICAgIH0sIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICB2YXIgdGhhdCA9IHRoaXM7XG4gICAgICAgICAgdmFyIGtpbmQgPSB0aGF0Ll9rO1xuICAgICAgICAgIHZhciBlbnRyeSA9IHRoYXQuX2w7IC8vIHJldmVydCB0byB0aGUgbGFzdCBleGlzdGluZyBlbnRyeVxuXG4gICAgICAgICAgd2hpbGUgKGVudHJ5ICYmIGVudHJ5LnIpIHtcbiAgICAgICAgICAgIGVudHJ5ID0gZW50cnkucDtcbiAgICAgICAgICB9IC8vIGdldCBuZXh0IGVudHJ5XG5cblxuICAgICAgICAgIGlmICghdGhhdC5fdCB8fCAhKHRoYXQuX2wgPSBlbnRyeSA9IGVudHJ5ID8gZW50cnkubiA6IHRoYXQuX3QuX2YpKSB7XG4gICAgICAgICAgICAvLyBvciBmaW5pc2ggdGhlIGl0ZXJhdGlvblxuICAgICAgICAgICAgdGhhdC5fdCA9IHVuZGVmaW5lZDtcbiAgICAgICAgICAgIHJldHVybiBzdGVwKDEpO1xuICAgICAgICAgIH0gLy8gcmV0dXJuIHN0ZXAgYnkga2luZFxuXG5cbiAgICAgICAgICBpZiAoa2luZCA9PSAna2V5cycpIHJldHVybiBzdGVwKDAsIGVudHJ5LmspO1xuICAgICAgICAgIGlmIChraW5kID09ICd2YWx1ZXMnKSByZXR1cm4gc3RlcCgwLCBlbnRyeS52KTtcbiAgICAgICAgICByZXR1cm4gc3RlcCgwLCBbZW50cnkuaywgZW50cnkudl0pO1xuICAgICAgICB9LCBJU19NQVAgPyAnZW50cmllcycgOiAndmFsdWVzJywgIUlTX01BUCwgdHJ1ZSk7IC8vIGFkZCBbQEBzcGVjaWVzXSwgMjMuMS4yLjIsIDIzLjIuMi4yXG5cbiAgICAgICAgc2V0U3BlY2llcyhOQU1FKTtcbiAgICAgIH1cbiAgICB9O1xuICB9LCB7XG4gICAgXCIxMDBcIjogMTAwLFxuICAgIFwiMTI1XCI6IDEyNSxcbiAgICBcIjI1XCI6IDI1LFxuICAgIFwiMjlcIjogMjksXG4gICAgXCIzOVwiOiAzOSxcbiAgICBcIjU1XCI6IDU1LFxuICAgIFwiNTdcIjogNTcsXG4gICAgXCI2XCI6IDYsXG4gICAgXCI2NlwiOiA2NixcbiAgICBcIjcxXCI6IDcxLFxuICAgIFwiNzJcIjogNzIsXG4gICAgXCI5M1wiOiA5M1xuICB9XSxcbiAgMjA6IFtmdW5jdGlvbiAoX2RlcmVxXywgbW9kdWxlLCBleHBvcnRzKSB7XG4gICAgLy8gaHR0cHM6Ly9naXRodWIuY29tL0RhdmlkQnJ1YW50L01hcC1TZXQucHJvdG90eXBlLnRvSlNPTlxuICAgIHZhciBjbGFzc29mID0gX2RlcmVxXygxNyk7XG5cbiAgICB2YXIgZnJvbSA9IF9kZXJlcV8oMTApO1xuXG4gICAgbW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoTkFNRSkge1xuICAgICAgcmV0dXJuIGZ1bmN0aW9uIHRvSlNPTigpIHtcbiAgICAgICAgaWYgKGNsYXNzb2YodGhpcykgIT0gTkFNRSkgdGhyb3cgVHlwZUVycm9yKE5BTUUgKyBcIiN0b0pTT04gaXNuJ3QgZ2VuZXJpY1wiKTtcbiAgICAgICAgcmV0dXJuIGZyb20odGhpcyk7XG4gICAgICB9O1xuICAgIH07XG4gIH0sIHtcbiAgICBcIjEwXCI6IDEwLFxuICAgIFwiMTdcIjogMTdcbiAgfV0sXG4gIDIxOiBbZnVuY3Rpb24gKF9kZXJlcV8sIG1vZHVsZSwgZXhwb3J0cykge1xuICAgICd1c2Ugc3RyaWN0JztcblxuICAgIHZhciByZWRlZmluZUFsbCA9IF9kZXJlcV8oOTMpO1xuXG4gICAgdmFyIGdldFdlYWsgPSBfZGVyZXFfKDY2KS5nZXRXZWFrO1xuXG4gICAgdmFyIGFuT2JqZWN0ID0gX2RlcmVxXyg3KTtcblxuICAgIHZhciBpc09iamVjdCA9IF9kZXJlcV8oNTEpO1xuXG4gICAgdmFyIGFuSW5zdGFuY2UgPSBfZGVyZXFfKDYpO1xuXG4gICAgdmFyIGZvck9mID0gX2RlcmVxXygzOSk7XG5cbiAgICB2YXIgY3JlYXRlQXJyYXlNZXRob2QgPSBfZGVyZXFfKDEyKTtcblxuICAgIHZhciAkaGFzID0gX2RlcmVxXyg0MSk7XG5cbiAgICB2YXIgdmFsaWRhdGUgPSBfZGVyZXFfKDEyNSk7XG5cbiAgICB2YXIgYXJyYXlGaW5kID0gY3JlYXRlQXJyYXlNZXRob2QoNSk7XG4gICAgdmFyIGFycmF5RmluZEluZGV4ID0gY3JlYXRlQXJyYXlNZXRob2QoNik7XG4gICAgdmFyIGlkID0gMDsgLy8gZmFsbGJhY2sgZm9yIHVuY2F1Z2h0IGZyb3plbiBrZXlzXG5cbiAgICB2YXIgdW5jYXVnaHRGcm96ZW5TdG9yZSA9IGZ1bmN0aW9uIHVuY2F1Z2h0RnJvemVuU3RvcmUodGhhdCkge1xuICAgICAgcmV0dXJuIHRoYXQuX2wgfHwgKHRoYXQuX2wgPSBuZXcgVW5jYXVnaHRGcm96ZW5TdG9yZSgpKTtcbiAgICB9O1xuXG4gICAgdmFyIFVuY2F1Z2h0RnJvemVuU3RvcmUgPSBmdW5jdGlvbiBVbmNhdWdodEZyb3plblN0b3JlKCkge1xuICAgICAgdGhpcy5hID0gW107XG4gICAgfTtcblxuICAgIHZhciBmaW5kVW5jYXVnaHRGcm96ZW4gPSBmdW5jdGlvbiBmaW5kVW5jYXVnaHRGcm96ZW4oc3RvcmUsIGtleSkge1xuICAgICAgcmV0dXJuIGFycmF5RmluZChzdG9yZS5hLCBmdW5jdGlvbiAoaXQpIHtcbiAgICAgICAgcmV0dXJuIGl0WzBdID09PSBrZXk7XG4gICAgICB9KTtcbiAgICB9O1xuXG4gICAgVW5jYXVnaHRGcm96ZW5TdG9yZS5wcm90b3R5cGUgPSB7XG4gICAgICBnZXQ6IGZ1bmN0aW9uIGdldChrZXkpIHtcbiAgICAgICAgdmFyIGVudHJ5ID0gZmluZFVuY2F1Z2h0RnJvemVuKHRoaXMsIGtleSk7XG4gICAgICAgIGlmIChlbnRyeSkgcmV0dXJuIGVudHJ5WzFdO1xuICAgICAgfSxcbiAgICAgIGhhczogZnVuY3Rpb24gaGFzKGtleSkge1xuICAgICAgICByZXR1cm4gISFmaW5kVW5jYXVnaHRGcm96ZW4odGhpcywga2V5KTtcbiAgICAgIH0sXG4gICAgICBzZXQ6IGZ1bmN0aW9uIHNldChrZXksIHZhbHVlKSB7XG4gICAgICAgIHZhciBlbnRyeSA9IGZpbmRVbmNhdWdodEZyb3plbih0aGlzLCBrZXkpO1xuICAgICAgICBpZiAoZW50cnkpIGVudHJ5WzFdID0gdmFsdWU7ZWxzZSB0aGlzLmEucHVzaChba2V5LCB2YWx1ZV0pO1xuICAgICAgfSxcbiAgICAgICdkZWxldGUnOiBmdW5jdGlvbiBfZGVsZXRlKGtleSkge1xuICAgICAgICB2YXIgaW5kZXggPSBhcnJheUZpbmRJbmRleCh0aGlzLmEsIGZ1bmN0aW9uIChpdCkge1xuICAgICAgICAgIHJldHVybiBpdFswXSA9PT0ga2V5O1xuICAgICAgICB9KTtcbiAgICAgICAgaWYgKH5pbmRleCkgdGhpcy5hLnNwbGljZShpbmRleCwgMSk7XG4gICAgICAgIHJldHVybiAhIX5pbmRleDtcbiAgICAgIH1cbiAgICB9O1xuICAgIG1vZHVsZS5leHBvcnRzID0ge1xuICAgICAgZ2V0Q29uc3RydWN0b3I6IGZ1bmN0aW9uIGdldENvbnN0cnVjdG9yKHdyYXBwZXIsIE5BTUUsIElTX01BUCwgQURERVIpIHtcbiAgICAgICAgdmFyIEMgPSB3cmFwcGVyKGZ1bmN0aW9uICh0aGF0LCBpdGVyYWJsZSkge1xuICAgICAgICAgIGFuSW5zdGFuY2UodGhhdCwgQywgTkFNRSwgJ19pJyk7XG4gICAgICAgICAgdGhhdC5fdCA9IE5BTUU7IC8vIGNvbGxlY3Rpb24gdHlwZVxuXG4gICAgICAgICAgdGhhdC5faSA9IGlkKys7IC8vIGNvbGxlY3Rpb24gaWRcblxuICAgICAgICAgIHRoYXQuX2wgPSB1bmRlZmluZWQ7IC8vIGxlYWsgc3RvcmUgZm9yIHVuY2F1Z2h0IGZyb3plbiBvYmplY3RzXG5cbiAgICAgICAgICBpZiAoaXRlcmFibGUgIT0gdW5kZWZpbmVkKSBmb3JPZihpdGVyYWJsZSwgSVNfTUFQLCB0aGF0W0FEREVSXSwgdGhhdCk7XG4gICAgICAgIH0pO1xuICAgICAgICByZWRlZmluZUFsbChDLnByb3RvdHlwZSwge1xuICAgICAgICAgIC8vIDIzLjMuMy4yIFdlYWtNYXAucHJvdG90eXBlLmRlbGV0ZShrZXkpXG4gICAgICAgICAgLy8gMjMuNC4zLjMgV2Vha1NldC5wcm90b3R5cGUuZGVsZXRlKHZhbHVlKVxuICAgICAgICAgICdkZWxldGUnOiBmdW5jdGlvbiBfZGVsZXRlKGtleSkge1xuICAgICAgICAgICAgaWYgKCFpc09iamVjdChrZXkpKSByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICB2YXIgZGF0YSA9IGdldFdlYWsoa2V5KTtcbiAgICAgICAgICAgIGlmIChkYXRhID09PSB0cnVlKSByZXR1cm4gdW5jYXVnaHRGcm96ZW5TdG9yZSh2YWxpZGF0ZSh0aGlzLCBOQU1FKSlbJ2RlbGV0ZSddKGtleSk7XG4gICAgICAgICAgICByZXR1cm4gZGF0YSAmJiAkaGFzKGRhdGEsIHRoaXMuX2kpICYmIGRlbGV0ZSBkYXRhW3RoaXMuX2ldO1xuICAgICAgICAgIH0sXG4gICAgICAgICAgLy8gMjMuMy4zLjQgV2Vha01hcC5wcm90b3R5cGUuaGFzKGtleSlcbiAgICAgICAgICAvLyAyMy40LjMuNCBXZWFrU2V0LnByb3RvdHlwZS5oYXModmFsdWUpXG4gICAgICAgICAgaGFzOiBmdW5jdGlvbiBoYXMoa2V5KSB7XG4gICAgICAgICAgICBpZiAoIWlzT2JqZWN0KGtleSkpIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIHZhciBkYXRhID0gZ2V0V2VhayhrZXkpO1xuICAgICAgICAgICAgaWYgKGRhdGEgPT09IHRydWUpIHJldHVybiB1bmNhdWdodEZyb3plblN0b3JlKHZhbGlkYXRlKHRoaXMsIE5BTUUpKS5oYXMoa2V5KTtcbiAgICAgICAgICAgIHJldHVybiBkYXRhICYmICRoYXMoZGF0YSwgdGhpcy5faSk7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIEM7XG4gICAgICB9LFxuICAgICAgZGVmOiBmdW5jdGlvbiBkZWYodGhhdCwga2V5LCB2YWx1ZSkge1xuICAgICAgICB2YXIgZGF0YSA9IGdldFdlYWsoYW5PYmplY3Qoa2V5KSwgdHJ1ZSk7XG4gICAgICAgIGlmIChkYXRhID09PSB0cnVlKSB1bmNhdWdodEZyb3plblN0b3JlKHRoYXQpLnNldChrZXksIHZhbHVlKTtlbHNlIGRhdGFbdGhhdC5faV0gPSB2YWx1ZTtcbiAgICAgICAgcmV0dXJuIHRoYXQ7XG4gICAgICB9LFxuICAgICAgdWZzdG9yZTogdW5jYXVnaHRGcm96ZW5TdG9yZVxuICAgIH07XG4gIH0sIHtcbiAgICBcIjEyXCI6IDEyLFxuICAgIFwiMTI1XCI6IDEyNSxcbiAgICBcIjM5XCI6IDM5LFxuICAgIFwiNDFcIjogNDEsXG4gICAgXCI1MVwiOiA1MSxcbiAgICBcIjZcIjogNixcbiAgICBcIjY2XCI6IDY2LFxuICAgIFwiN1wiOiA3LFxuICAgIFwiOTNcIjogOTNcbiAgfV0sXG4gIDIyOiBbZnVuY3Rpb24gKF9kZXJlcV8sIG1vZHVsZSwgZXhwb3J0cykge1xuICAgICd1c2Ugc3RyaWN0JztcblxuICAgIHZhciBnbG9iYWwgPSBfZGVyZXFfKDQwKTtcblxuICAgIHZhciAkZXhwb3J0ID0gX2RlcmVxXygzMyk7XG5cbiAgICB2YXIgcmVkZWZpbmUgPSBfZGVyZXFfKDk0KTtcblxuICAgIHZhciByZWRlZmluZUFsbCA9IF9kZXJlcV8oOTMpO1xuXG4gICAgdmFyIG1ldGEgPSBfZGVyZXFfKDY2KTtcblxuICAgIHZhciBmb3JPZiA9IF9kZXJlcV8oMzkpO1xuXG4gICAgdmFyIGFuSW5zdGFuY2UgPSBfZGVyZXFfKDYpO1xuXG4gICAgdmFyIGlzT2JqZWN0ID0gX2RlcmVxXyg1MSk7XG5cbiAgICB2YXIgZmFpbHMgPSBfZGVyZXFfKDM1KTtcblxuICAgIHZhciAkaXRlckRldGVjdCA9IF9kZXJlcV8oNTYpO1xuXG4gICAgdmFyIHNldFRvU3RyaW5nVGFnID0gX2RlcmVxXygxMDEpO1xuXG4gICAgdmFyIGluaGVyaXRJZlJlcXVpcmVkID0gX2RlcmVxXyg0NSk7XG5cbiAgICBtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChOQU1FLCB3cmFwcGVyLCBtZXRob2RzLCBjb21tb24sIElTX01BUCwgSVNfV0VBSykge1xuICAgICAgdmFyIEJhc2UgPSBnbG9iYWxbTkFNRV07XG4gICAgICB2YXIgQyA9IEJhc2U7XG4gICAgICB2YXIgQURERVIgPSBJU19NQVAgPyAnc2V0JyA6ICdhZGQnO1xuICAgICAgdmFyIHByb3RvID0gQyAmJiBDLnByb3RvdHlwZTtcbiAgICAgIHZhciBPID0ge307XG5cbiAgICAgIHZhciBmaXhNZXRob2QgPSBmdW5jdGlvbiBmaXhNZXRob2QoS0VZKSB7XG4gICAgICAgIHZhciBmbiA9IHByb3RvW0tFWV07XG4gICAgICAgIHJlZGVmaW5lKHByb3RvLCBLRVksIEtFWSA9PSAnZGVsZXRlJyA/IGZ1bmN0aW9uIChhKSB7XG4gICAgICAgICAgcmV0dXJuIElTX1dFQUsgJiYgIWlzT2JqZWN0KGEpID8gZmFsc2UgOiBmbi5jYWxsKHRoaXMsIGEgPT09IDAgPyAwIDogYSk7XG4gICAgICAgIH0gOiBLRVkgPT0gJ2hhcycgPyBmdW5jdGlvbiBoYXMoYSkge1xuICAgICAgICAgIHJldHVybiBJU19XRUFLICYmICFpc09iamVjdChhKSA/IGZhbHNlIDogZm4uY2FsbCh0aGlzLCBhID09PSAwID8gMCA6IGEpO1xuICAgICAgICB9IDogS0VZID09ICdnZXQnID8gZnVuY3Rpb24gZ2V0KGEpIHtcbiAgICAgICAgICByZXR1cm4gSVNfV0VBSyAmJiAhaXNPYmplY3QoYSkgPyB1bmRlZmluZWQgOiBmbi5jYWxsKHRoaXMsIGEgPT09IDAgPyAwIDogYSk7XG4gICAgICAgIH0gOiBLRVkgPT0gJ2FkZCcgPyBmdW5jdGlvbiBhZGQoYSkge1xuICAgICAgICAgIGZuLmNhbGwodGhpcywgYSA9PT0gMCA/IDAgOiBhKTtcbiAgICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgICAgfSA6IGZ1bmN0aW9uIHNldChhLCBiKSB7XG4gICAgICAgICAgZm4uY2FsbCh0aGlzLCBhID09PSAwID8gMCA6IGEsIGIpO1xuICAgICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgICB9KTtcbiAgICAgIH07XG5cbiAgICAgIGlmICh0eXBlb2YgQyAhPSAnZnVuY3Rpb24nIHx8ICEoSVNfV0VBSyB8fCBwcm90by5mb3JFYWNoICYmICFmYWlscyhmdW5jdGlvbiAoKSB7XG4gICAgICAgIG5ldyBDKCkuZW50cmllcygpLm5leHQoKTtcbiAgICAgIH0pKSkge1xuICAgICAgICAvLyBjcmVhdGUgY29sbGVjdGlvbiBjb25zdHJ1Y3RvclxuICAgICAgICBDID0gY29tbW9uLmdldENvbnN0cnVjdG9yKHdyYXBwZXIsIE5BTUUsIElTX01BUCwgQURERVIpO1xuICAgICAgICByZWRlZmluZUFsbChDLnByb3RvdHlwZSwgbWV0aG9kcyk7XG4gICAgICAgIG1ldGEuTkVFRCA9IHRydWU7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB2YXIgaW5zdGFuY2UgPSBuZXcgQygpOyAvLyBlYXJseSBpbXBsZW1lbnRhdGlvbnMgbm90IHN1cHBvcnRzIGNoYWluaW5nXG5cbiAgICAgICAgdmFyIEhBU05UX0NIQUlOSU5HID0gaW5zdGFuY2VbQURERVJdKElTX1dFQUsgPyB7fSA6IC0wLCAxKSAhPSBpbnN0YW5jZTsgLy8gVjggfiAgQ2hyb21pdW0gNDAtIHdlYWstY29sbGVjdGlvbnMgdGhyb3dzIG9uIHByaW1pdGl2ZXMsIGJ1dCBzaG91bGQgcmV0dXJuIGZhbHNlXG5cbiAgICAgICAgdmFyIFRIUk9XU19PTl9QUklNSVRJVkVTID0gZmFpbHMoZnVuY3Rpb24gKCkge1xuICAgICAgICAgIGluc3RhbmNlLmhhcygxKTtcbiAgICAgICAgfSk7IC8vIG1vc3QgZWFybHkgaW1wbGVtZW50YXRpb25zIGRvZXNuJ3Qgc3VwcG9ydHMgaXRlcmFibGVzLCBtb3N0IG1vZGVybiAtIG5vdCBjbG9zZSBpdCBjb3JyZWN0bHlcblxuICAgICAgICB2YXIgQUNDRVBUX0lURVJBQkxFUyA9ICRpdGVyRGV0ZWN0KGZ1bmN0aW9uIChpdGVyKSB7XG4gICAgICAgICAgbmV3IEMoaXRlcik7XG4gICAgICAgIH0pOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLW5ld1xuICAgICAgICAvLyBmb3IgZWFybHkgaW1wbGVtZW50YXRpb25zIC0wIGFuZCArMCBub3QgdGhlIHNhbWVcblxuICAgICAgICB2YXIgQlVHR1lfWkVSTyA9ICFJU19XRUFLICYmIGZhaWxzKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAvLyBWOCB+IENocm9taXVtIDQyLSBmYWlscyBvbmx5IHdpdGggNSsgZWxlbWVudHNcbiAgICAgICAgICB2YXIgJGluc3RhbmNlID0gbmV3IEMoKTtcbiAgICAgICAgICB2YXIgaW5kZXggPSA1O1xuXG4gICAgICAgICAgd2hpbGUgKGluZGV4LS0pIHtcbiAgICAgICAgICAgICRpbnN0YW5jZVtBRERFUl0oaW5kZXgsIGluZGV4KTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICByZXR1cm4gISRpbnN0YW5jZS5oYXMoLTApO1xuICAgICAgICB9KTtcblxuICAgICAgICBpZiAoIUFDQ0VQVF9JVEVSQUJMRVMpIHtcbiAgICAgICAgICBDID0gd3JhcHBlcihmdW5jdGlvbiAodGFyZ2V0LCBpdGVyYWJsZSkge1xuICAgICAgICAgICAgYW5JbnN0YW5jZSh0YXJnZXQsIEMsIE5BTUUpO1xuICAgICAgICAgICAgdmFyIHRoYXQgPSBpbmhlcml0SWZSZXF1aXJlZChuZXcgQmFzZSgpLCB0YXJnZXQsIEMpO1xuICAgICAgICAgICAgaWYgKGl0ZXJhYmxlICE9IHVuZGVmaW5lZCkgZm9yT2YoaXRlcmFibGUsIElTX01BUCwgdGhhdFtBRERFUl0sIHRoYXQpO1xuICAgICAgICAgICAgcmV0dXJuIHRoYXQ7XG4gICAgICAgICAgfSk7XG4gICAgICAgICAgQy5wcm90b3R5cGUgPSBwcm90bztcbiAgICAgICAgICBwcm90by5jb25zdHJ1Y3RvciA9IEM7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoVEhST1dTX09OX1BSSU1JVElWRVMgfHwgQlVHR1lfWkVSTykge1xuICAgICAgICAgIGZpeE1ldGhvZCgnZGVsZXRlJyk7XG4gICAgICAgICAgZml4TWV0aG9kKCdoYXMnKTtcbiAgICAgICAgICBJU19NQVAgJiYgZml4TWV0aG9kKCdnZXQnKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChCVUdHWV9aRVJPIHx8IEhBU05UX0NIQUlOSU5HKSBmaXhNZXRob2QoQURERVIpOyAvLyB3ZWFrIGNvbGxlY3Rpb25zIHNob3VsZCBub3QgY29udGFpbnMgLmNsZWFyIG1ldGhvZFxuXG4gICAgICAgIGlmIChJU19XRUFLICYmIHByb3RvLmNsZWFyKSBkZWxldGUgcHJvdG8uY2xlYXI7XG4gICAgICB9XG5cbiAgICAgIHNldFRvU3RyaW5nVGFnKEMsIE5BTUUpO1xuICAgICAgT1tOQU1FXSA9IEM7XG4gICAgICAkZXhwb3J0KCRleHBvcnQuRyArICRleHBvcnQuVyArICRleHBvcnQuRiAqIChDICE9IEJhc2UpLCBPKTtcbiAgICAgIGlmICghSVNfV0VBSykgY29tbW9uLnNldFN0cm9uZyhDLCBOQU1FLCBJU19NQVApO1xuICAgICAgcmV0dXJuIEM7XG4gICAgfTtcbiAgfSwge1xuICAgIFwiMTAxXCI6IDEwMSxcbiAgICBcIjMzXCI6IDMzLFxuICAgIFwiMzVcIjogMzUsXG4gICAgXCIzOVwiOiAzOSxcbiAgICBcIjQwXCI6IDQwLFxuICAgIFwiNDVcIjogNDUsXG4gICAgXCI1MVwiOiA1MSxcbiAgICBcIjU2XCI6IDU2LFxuICAgIFwiNlwiOiA2LFxuICAgIFwiNjZcIjogNjYsXG4gICAgXCI5M1wiOiA5MyxcbiAgICBcIjk0XCI6IDk0XG4gIH1dLFxuICAyMzogW2Z1bmN0aW9uIChfZGVyZXFfLCBtb2R1bGUsIGV4cG9ydHMpIHtcbiAgICB2YXIgY29yZSA9IG1vZHVsZS5leHBvcnRzID0ge1xuICAgICAgdmVyc2lvbjogJzIuNS4wJ1xuICAgIH07XG4gICAgaWYgKHR5cGVvZiBfX2UgPT0gJ251bWJlcicpIF9fZSA9IGNvcmU7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tdW5kZWZcbiAgfSwge31dLFxuICAyNDogW2Z1bmN0aW9uIChfZGVyZXFfLCBtb2R1bGUsIGV4cG9ydHMpIHtcbiAgICAndXNlIHN0cmljdCc7XG5cbiAgICB2YXIgJGRlZmluZVByb3BlcnR5ID0gX2RlcmVxXyg3Mik7XG5cbiAgICB2YXIgY3JlYXRlRGVzYyA9IF9kZXJlcV8oOTIpO1xuXG4gICAgbW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAob2JqZWN0LCBpbmRleCwgdmFsdWUpIHtcbiAgICAgIGlmIChpbmRleCBpbiBvYmplY3QpICRkZWZpbmVQcm9wZXJ0eS5mKG9iamVjdCwgaW5kZXgsIGNyZWF0ZURlc2MoMCwgdmFsdWUpKTtlbHNlIG9iamVjdFtpbmRleF0gPSB2YWx1ZTtcbiAgICB9O1xuICB9LCB7XG4gICAgXCI3MlwiOiA3MixcbiAgICBcIjkyXCI6IDkyXG4gIH1dLFxuICAyNTogW2Z1bmN0aW9uIChfZGVyZXFfLCBtb2R1bGUsIGV4cG9ydHMpIHtcbiAgICAvLyBvcHRpb25hbCAvIHNpbXBsZSBjb250ZXh0IGJpbmRpbmdcbiAgICB2YXIgYUZ1bmN0aW9uID0gX2RlcmVxXygzKTtcblxuICAgIG1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGZuLCB0aGF0LCBsZW5ndGgpIHtcbiAgICAgIGFGdW5jdGlvbihmbik7XG4gICAgICBpZiAodGhhdCA9PT0gdW5kZWZpbmVkKSByZXR1cm4gZm47XG5cbiAgICAgIHN3aXRjaCAobGVuZ3RoKSB7XG4gICAgICAgIGNhc2UgMTpcbiAgICAgICAgICByZXR1cm4gZnVuY3Rpb24gKGEpIHtcbiAgICAgICAgICAgIHJldHVybiBmbi5jYWxsKHRoYXQsIGEpO1xuICAgICAgICAgIH07XG5cbiAgICAgICAgY2FzZSAyOlxuICAgICAgICAgIHJldHVybiBmdW5jdGlvbiAoYSwgYikge1xuICAgICAgICAgICAgcmV0dXJuIGZuLmNhbGwodGhhdCwgYSwgYik7XG4gICAgICAgICAgfTtcblxuICAgICAgICBjYXNlIDM6XG4gICAgICAgICAgcmV0dXJuIGZ1bmN0aW9uIChhLCBiLCBjKSB7XG4gICAgICAgICAgICByZXR1cm4gZm4uY2FsbCh0aGF0LCBhLCBiLCBjKTtcbiAgICAgICAgICB9O1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gZm4uYXBwbHkodGhhdCwgYXJndW1lbnRzKTtcbiAgICAgIH07XG4gICAgfTtcbiAgfSwge1xuICAgIFwiM1wiOiAzXG4gIH1dLFxuICAyNjogW2Z1bmN0aW9uIChfZGVyZXFfLCBtb2R1bGUsIGV4cG9ydHMpIHtcbiAgICAndXNlIHN0cmljdCc7IC8vIDIwLjMuNC4zNiAvIDE1LjkuNS40MyBEYXRlLnByb3RvdHlwZS50b0lTT1N0cmluZygpXG5cbiAgICB2YXIgZmFpbHMgPSBfZGVyZXFfKDM1KTtcblxuICAgIHZhciBnZXRUaW1lID0gRGF0ZS5wcm90b3R5cGUuZ2V0VGltZTtcbiAgICB2YXIgJHRvSVNPU3RyaW5nID0gRGF0ZS5wcm90b3R5cGUudG9JU09TdHJpbmc7XG5cbiAgICB2YXIgbHogPSBmdW5jdGlvbiBseihudW0pIHtcbiAgICAgIHJldHVybiBudW0gPiA5ID8gbnVtIDogJzAnICsgbnVtO1xuICAgIH07IC8vIFBoYW50b21KUyAvIG9sZCBXZWJLaXQgaGFzIGEgYnJva2VuIGltcGxlbWVudGF0aW9uc1xuXG5cbiAgICBtb2R1bGUuZXhwb3J0cyA9IGZhaWxzKGZ1bmN0aW9uICgpIHtcbiAgICAgIHJldHVybiAkdG9JU09TdHJpbmcuY2FsbChuZXcgRGF0ZSgtNWUxMyAtIDEpKSAhPSAnMDM4NS0wNy0yNVQwNzowNjozOS45OTlaJztcbiAgICB9KSB8fCAhZmFpbHMoZnVuY3Rpb24gKCkge1xuICAgICAgJHRvSVNPU3RyaW5nLmNhbGwobmV3IERhdGUoTmFOKSk7XG4gICAgfSkgPyBmdW5jdGlvbiB0b0lTT1N0cmluZygpIHtcbiAgICAgIGlmICghaXNGaW5pdGUoZ2V0VGltZS5jYWxsKHRoaXMpKSkgdGhyb3cgUmFuZ2VFcnJvcignSW52YWxpZCB0aW1lIHZhbHVlJyk7XG4gICAgICB2YXIgZCA9IHRoaXM7XG4gICAgICB2YXIgeSA9IGQuZ2V0VVRDRnVsbFllYXIoKTtcbiAgICAgIHZhciBtID0gZC5nZXRVVENNaWxsaXNlY29uZHMoKTtcbiAgICAgIHZhciBzID0geSA8IDAgPyAnLScgOiB5ID4gOTk5OSA/ICcrJyA6ICcnO1xuICAgICAgcmV0dXJuIHMgKyAoJzAwMDAwJyArIE1hdGguYWJzKHkpKS5zbGljZShzID8gLTYgOiAtNCkgKyAnLScgKyBseihkLmdldFVUQ01vbnRoKCkgKyAxKSArICctJyArIGx6KGQuZ2V0VVRDRGF0ZSgpKSArICdUJyArIGx6KGQuZ2V0VVRDSG91cnMoKSkgKyAnOicgKyBseihkLmdldFVUQ01pbnV0ZXMoKSkgKyAnOicgKyBseihkLmdldFVUQ1NlY29uZHMoKSkgKyAnLicgKyAobSA+IDk5ID8gbSA6ICcwJyArIGx6KG0pKSArICdaJztcbiAgICB9IDogJHRvSVNPU3RyaW5nO1xuICB9LCB7XG4gICAgXCIzNVwiOiAzNVxuICB9XSxcbiAgMjc6IFtmdW5jdGlvbiAoX2RlcmVxXywgbW9kdWxlLCBleHBvcnRzKSB7XG4gICAgJ3VzZSBzdHJpY3QnO1xuXG4gICAgdmFyIGFuT2JqZWN0ID0gX2RlcmVxXyg3KTtcblxuICAgIHZhciB0b1ByaW1pdGl2ZSA9IF9kZXJlcV8oMTIwKTtcblxuICAgIHZhciBOVU1CRVIgPSAnbnVtYmVyJztcblxuICAgIG1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGhpbnQpIHtcbiAgICAgIGlmIChoaW50ICE9PSAnc3RyaW5nJyAmJiBoaW50ICE9PSBOVU1CRVIgJiYgaGludCAhPT0gJ2RlZmF1bHQnKSB0aHJvdyBUeXBlRXJyb3IoJ0luY29ycmVjdCBoaW50Jyk7XG4gICAgICByZXR1cm4gdG9QcmltaXRpdmUoYW5PYmplY3QodGhpcyksIGhpbnQgIT0gTlVNQkVSKTtcbiAgICB9O1xuICB9LCB7XG4gICAgXCIxMjBcIjogMTIwLFxuICAgIFwiN1wiOiA3XG4gIH1dLFxuICAyODogW2Z1bmN0aW9uIChfZGVyZXFfLCBtb2R1bGUsIGV4cG9ydHMpIHtcbiAgICAvLyA3LjIuMSBSZXF1aXJlT2JqZWN0Q29lcmNpYmxlKGFyZ3VtZW50KVxuICAgIG1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0KSB7XG4gICAgICBpZiAoaXQgPT0gdW5kZWZpbmVkKSB0aHJvdyBUeXBlRXJyb3IoXCJDYW4ndCBjYWxsIG1ldGhvZCBvbiAgXCIgKyBpdCk7XG4gICAgICByZXR1cm4gaXQ7XG4gICAgfTtcbiAgfSwge31dLFxuICAyOTogW2Z1bmN0aW9uIChfZGVyZXFfLCBtb2R1bGUsIGV4cG9ydHMpIHtcbiAgICAvLyBUaGFuaydzIElFOCBmb3IgaGlzIGZ1bm55IGRlZmluZVByb3BlcnR5XG4gICAgbW9kdWxlLmV4cG9ydHMgPSAhX2RlcmVxXygzNSkoZnVuY3Rpb24gKCkge1xuICAgICAgcmV0dXJuIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh7fSwgJ2EnLCB7XG4gICAgICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgICAgIHJldHVybiA3O1xuICAgICAgICB9XG4gICAgICB9KS5hICE9IDc7XG4gICAgfSk7XG4gIH0sIHtcbiAgICBcIjM1XCI6IDM1XG4gIH1dLFxuICAzMDogW2Z1bmN0aW9uIChfZGVyZXFfLCBtb2R1bGUsIGV4cG9ydHMpIHtcbiAgICB2YXIgaXNPYmplY3QgPSBfZGVyZXFfKDUxKTtcblxuICAgIHZhciBkb2N1bWVudCA9IF9kZXJlcV8oNDApLmRvY3VtZW50OyAvLyB0eXBlb2YgZG9jdW1lbnQuY3JlYXRlRWxlbWVudCBpcyAnb2JqZWN0JyBpbiBvbGQgSUVcblxuXG4gICAgdmFyIGlzID0gaXNPYmplY3QoZG9jdW1lbnQpICYmIGlzT2JqZWN0KGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQpO1xuXG4gICAgbW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQpIHtcbiAgICAgIHJldHVybiBpcyA/IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoaXQpIDoge307XG4gICAgfTtcbiAgfSwge1xuICAgIFwiNDBcIjogNDAsXG4gICAgXCI1MVwiOiA1MVxuICB9XSxcbiAgMzE6IFtmdW5jdGlvbiAoX2RlcmVxXywgbW9kdWxlLCBleHBvcnRzKSB7XG4gICAgLy8gSUUgOC0gZG9uJ3QgZW51bSBidWcga2V5c1xuICAgIG1vZHVsZS5leHBvcnRzID0gJ2NvbnN0cnVjdG9yLGhhc093blByb3BlcnR5LGlzUHJvdG90eXBlT2YscHJvcGVydHlJc0VudW1lcmFibGUsdG9Mb2NhbGVTdHJpbmcsdG9TdHJpbmcsdmFsdWVPZicuc3BsaXQoJywnKTtcbiAgfSwge31dLFxuICAzMjogW2Z1bmN0aW9uIChfZGVyZXFfLCBtb2R1bGUsIGV4cG9ydHMpIHtcbiAgICAvLyBhbGwgZW51bWVyYWJsZSBvYmplY3Qga2V5cywgaW5jbHVkZXMgc3ltYm9sc1xuICAgIHZhciBnZXRLZXlzID0gX2RlcmVxXyg4MSk7XG5cbiAgICB2YXIgZ09QUyA9IF9kZXJlcV8oNzgpO1xuXG4gICAgdmFyIHBJRSA9IF9kZXJlcV8oODIpO1xuXG4gICAgbW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQpIHtcbiAgICAgIHZhciByZXN1bHQgPSBnZXRLZXlzKGl0KTtcbiAgICAgIHZhciBnZXRTeW1ib2xzID0gZ09QUy5mO1xuXG4gICAgICBpZiAoZ2V0U3ltYm9scykge1xuICAgICAgICB2YXIgc3ltYm9scyA9IGdldFN5bWJvbHMoaXQpO1xuICAgICAgICB2YXIgaXNFbnVtID0gcElFLmY7XG4gICAgICAgIHZhciBpID0gMDtcbiAgICAgICAgdmFyIGtleTtcblxuICAgICAgICB3aGlsZSAoc3ltYm9scy5sZW5ndGggPiBpKSB7XG4gICAgICAgICAgaWYgKGlzRW51bS5jYWxsKGl0LCBrZXkgPSBzeW1ib2xzW2krK10pKSByZXN1bHQucHVzaChrZXkpO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfTtcbiAgfSwge1xuICAgIFwiNzhcIjogNzgsXG4gICAgXCI4MVwiOiA4MSxcbiAgICBcIjgyXCI6IDgyXG4gIH1dLFxuICAzMzogW2Z1bmN0aW9uIChfZGVyZXFfLCBtb2R1bGUsIGV4cG9ydHMpIHtcbiAgICB2YXIgZ2xvYmFsID0gX2RlcmVxXyg0MCk7XG5cbiAgICB2YXIgY29yZSA9IF9kZXJlcV8oMjMpO1xuXG4gICAgdmFyIGhpZGUgPSBfZGVyZXFfKDQyKTtcblxuICAgIHZhciByZWRlZmluZSA9IF9kZXJlcV8oOTQpO1xuXG4gICAgdmFyIGN0eCA9IF9kZXJlcV8oMjUpO1xuXG4gICAgdmFyIFBST1RPVFlQRSA9ICdwcm90b3R5cGUnO1xuXG4gICAgdmFyICRleHBvcnQgPSBmdW5jdGlvbiAkZXhwb3J0KHR5cGUsIG5hbWUsIHNvdXJjZSkge1xuICAgICAgdmFyIElTX0ZPUkNFRCA9IHR5cGUgJiAkZXhwb3J0LkY7XG4gICAgICB2YXIgSVNfR0xPQkFMID0gdHlwZSAmICRleHBvcnQuRztcbiAgICAgIHZhciBJU19TVEFUSUMgPSB0eXBlICYgJGV4cG9ydC5TO1xuICAgICAgdmFyIElTX1BST1RPID0gdHlwZSAmICRleHBvcnQuUDtcbiAgICAgIHZhciBJU19CSU5EID0gdHlwZSAmICRleHBvcnQuQjtcbiAgICAgIHZhciB0YXJnZXQgPSBJU19HTE9CQUwgPyBnbG9iYWwgOiBJU19TVEFUSUMgPyBnbG9iYWxbbmFtZV0gfHwgKGdsb2JhbFtuYW1lXSA9IHt9KSA6IChnbG9iYWxbbmFtZV0gfHwge30pW1BST1RPVFlQRV07XG4gICAgICB2YXIgZXhwb3J0cyA9IElTX0dMT0JBTCA/IGNvcmUgOiBjb3JlW25hbWVdIHx8IChjb3JlW25hbWVdID0ge30pO1xuICAgICAgdmFyIGV4cFByb3RvID0gZXhwb3J0c1tQUk9UT1RZUEVdIHx8IChleHBvcnRzW1BST1RPVFlQRV0gPSB7fSk7XG4gICAgICB2YXIga2V5LCBvd24sIG91dCwgZXhwO1xuICAgICAgaWYgKElTX0dMT0JBTCkgc291cmNlID0gbmFtZTtcblxuICAgICAgZm9yIChrZXkgaW4gc291cmNlKSB7XG4gICAgICAgIC8vIGNvbnRhaW5zIGluIG5hdGl2ZVxuICAgICAgICBvd24gPSAhSVNfRk9SQ0VEICYmIHRhcmdldCAmJiB0YXJnZXRba2V5XSAhPT0gdW5kZWZpbmVkOyAvLyBleHBvcnQgbmF0aXZlIG9yIHBhc3NlZFxuXG4gICAgICAgIG91dCA9IChvd24gPyB0YXJnZXQgOiBzb3VyY2UpW2tleV07IC8vIGJpbmQgdGltZXJzIHRvIGdsb2JhbCBmb3IgY2FsbCBmcm9tIGV4cG9ydCBjb250ZXh0XG5cbiAgICAgICAgZXhwID0gSVNfQklORCAmJiBvd24gPyBjdHgob3V0LCBnbG9iYWwpIDogSVNfUFJPVE8gJiYgdHlwZW9mIG91dCA9PSAnZnVuY3Rpb24nID8gY3R4KEZ1bmN0aW9uLmNhbGwsIG91dCkgOiBvdXQ7IC8vIGV4dGVuZCBnbG9iYWxcblxuICAgICAgICBpZiAodGFyZ2V0KSByZWRlZmluZSh0YXJnZXQsIGtleSwgb3V0LCB0eXBlICYgJGV4cG9ydC5VKTsgLy8gZXhwb3J0XG5cbiAgICAgICAgaWYgKGV4cG9ydHNba2V5XSAhPSBvdXQpIGhpZGUoZXhwb3J0cywga2V5LCBleHApO1xuICAgICAgICBpZiAoSVNfUFJPVE8gJiYgZXhwUHJvdG9ba2V5XSAhPSBvdXQpIGV4cFByb3RvW2tleV0gPSBvdXQ7XG4gICAgICB9XG4gICAgfTtcblxuICAgIGdsb2JhbC5jb3JlID0gY29yZTsgLy8gdHlwZSBiaXRtYXBcblxuICAgICRleHBvcnQuRiA9IDE7IC8vIGZvcmNlZFxuXG4gICAgJGV4cG9ydC5HID0gMjsgLy8gZ2xvYmFsXG5cbiAgICAkZXhwb3J0LlMgPSA0OyAvLyBzdGF0aWNcblxuICAgICRleHBvcnQuUCA9IDg7IC8vIHByb3RvXG5cbiAgICAkZXhwb3J0LkIgPSAxNjsgLy8gYmluZFxuXG4gICAgJGV4cG9ydC5XID0gMzI7IC8vIHdyYXBcblxuICAgICRleHBvcnQuVSA9IDY0OyAvLyBzYWZlXG5cbiAgICAkZXhwb3J0LlIgPSAxMjg7IC8vIHJlYWwgcHJvdG8gbWV0aG9kIGZvciBgbGlicmFyeWBcblxuICAgIG1vZHVsZS5leHBvcnRzID0gJGV4cG9ydDtcbiAgfSwge1xuICAgIFwiMjNcIjogMjMsXG4gICAgXCIyNVwiOiAyNSxcbiAgICBcIjQwXCI6IDQwLFxuICAgIFwiNDJcIjogNDIsXG4gICAgXCI5NFwiOiA5NFxuICB9XSxcbiAgMzQ6IFtmdW5jdGlvbiAoX2RlcmVxXywgbW9kdWxlLCBleHBvcnRzKSB7XG4gICAgdmFyIE1BVENIID0gX2RlcmVxXygxMjgpKCdtYXRjaCcpO1xuXG4gICAgbW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoS0VZKSB7XG4gICAgICB2YXIgcmUgPSAvLi87XG5cbiAgICAgIHRyeSB7XG4gICAgICAgICcvLi8nW0tFWV0ocmUpO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgIHJlW01BVENIXSA9IGZhbHNlO1xuICAgICAgICAgIHJldHVybiAhJy8uLydbS0VZXShyZSk7XG4gICAgICAgIH0gY2F0Y2ggKGYpIHtcbiAgICAgICAgICAvKiBlbXB0eSAqL1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH07XG4gIH0sIHtcbiAgICBcIjEyOFwiOiAxMjhcbiAgfV0sXG4gIDM1OiBbZnVuY3Rpb24gKF9kZXJlcV8sIG1vZHVsZSwgZXhwb3J0cykge1xuICAgIG1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGV4ZWMpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIHJldHVybiAhIWV4ZWMoKTtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfTtcbiAgfSwge31dLFxuICAzNjogW2Z1bmN0aW9uIChfZGVyZXFfLCBtb2R1bGUsIGV4cG9ydHMpIHtcbiAgICAndXNlIHN0cmljdCc7XG5cbiAgICB2YXIgaGlkZSA9IF9kZXJlcV8oNDIpO1xuXG4gICAgdmFyIHJlZGVmaW5lID0gX2RlcmVxXyg5NCk7XG5cbiAgICB2YXIgZmFpbHMgPSBfZGVyZXFfKDM1KTtcblxuICAgIHZhciBkZWZpbmVkID0gX2RlcmVxXygyOCk7XG5cbiAgICB2YXIgd2tzID0gX2RlcmVxXygxMjgpO1xuXG4gICAgbW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoS0VZLCBsZW5ndGgsIGV4ZWMpIHtcbiAgICAgIHZhciBTWU1CT0wgPSB3a3MoS0VZKTtcbiAgICAgIHZhciBmbnMgPSBleGVjKGRlZmluZWQsIFNZTUJPTCwgJydbS0VZXSk7XG4gICAgICB2YXIgc3RyZm4gPSBmbnNbMF07XG4gICAgICB2YXIgcnhmbiA9IGZuc1sxXTtcblxuICAgICAgaWYgKGZhaWxzKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIE8gPSB7fTtcblxuICAgICAgICBPW1NZTUJPTF0gPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgcmV0dXJuIDc7XG4gICAgICAgIH07XG5cbiAgICAgICAgcmV0dXJuICcnW0tFWV0oTykgIT0gNztcbiAgICAgIH0pKSB7XG4gICAgICAgIHJlZGVmaW5lKFN0cmluZy5wcm90b3R5cGUsIEtFWSwgc3RyZm4pO1xuICAgICAgICBoaWRlKFJlZ0V4cC5wcm90b3R5cGUsIFNZTUJPTCwgbGVuZ3RoID09IDIgLy8gMjEuMi41LjggUmVnRXhwLnByb3RvdHlwZVtAQHJlcGxhY2VdKHN0cmluZywgcmVwbGFjZVZhbHVlKVxuICAgICAgICAvLyAyMS4yLjUuMTEgUmVnRXhwLnByb3RvdHlwZVtAQHNwbGl0XShzdHJpbmcsIGxpbWl0KVxuICAgICAgICA/IGZ1bmN0aW9uIChzdHJpbmcsIGFyZykge1xuICAgICAgICAgIHJldHVybiByeGZuLmNhbGwoc3RyaW5nLCB0aGlzLCBhcmcpO1xuICAgICAgICB9IC8vIDIxLjIuNS42IFJlZ0V4cC5wcm90b3R5cGVbQEBtYXRjaF0oc3RyaW5nKVxuICAgICAgICAvLyAyMS4yLjUuOSBSZWdFeHAucHJvdG90eXBlW0BAc2VhcmNoXShzdHJpbmcpXG4gICAgICAgIDogZnVuY3Rpb24gKHN0cmluZykge1xuICAgICAgICAgIHJldHVybiByeGZuLmNhbGwoc3RyaW5nLCB0aGlzKTtcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfTtcbiAgfSwge1xuICAgIFwiMTI4XCI6IDEyOCxcbiAgICBcIjI4XCI6IDI4LFxuICAgIFwiMzVcIjogMzUsXG4gICAgXCI0MlwiOiA0MixcbiAgICBcIjk0XCI6IDk0XG4gIH1dLFxuICAzNzogW2Z1bmN0aW9uIChfZGVyZXFfLCBtb2R1bGUsIGV4cG9ydHMpIHtcbiAgICAndXNlIHN0cmljdCc7IC8vIDIxLjIuNS4zIGdldCBSZWdFeHAucHJvdG90eXBlLmZsYWdzXG5cbiAgICB2YXIgYW5PYmplY3QgPSBfZGVyZXFfKDcpO1xuXG4gICAgbW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoKSB7XG4gICAgICB2YXIgdGhhdCA9IGFuT2JqZWN0KHRoaXMpO1xuICAgICAgdmFyIHJlc3VsdCA9ICcnO1xuICAgICAgaWYgKHRoYXQuZ2xvYmFsKSByZXN1bHQgKz0gJ2cnO1xuICAgICAgaWYgKHRoYXQuaWdub3JlQ2FzZSkgcmVzdWx0ICs9ICdpJztcbiAgICAgIGlmICh0aGF0Lm11bHRpbGluZSkgcmVzdWx0ICs9ICdtJztcbiAgICAgIGlmICh0aGF0LnVuaWNvZGUpIHJlc3VsdCArPSAndSc7XG4gICAgICBpZiAodGhhdC5zdGlja3kpIHJlc3VsdCArPSAneSc7XG4gICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH07XG4gIH0sIHtcbiAgICBcIjdcIjogN1xuICB9XSxcbiAgMzg6IFtmdW5jdGlvbiAoX2RlcmVxXywgbW9kdWxlLCBleHBvcnRzKSB7XG4gICAgJ3VzZSBzdHJpY3QnOyAvLyBodHRwczovL3RjMzkuZ2l0aHViLmlvL3Byb3Bvc2FsLWZsYXRNYXAvI3NlYy1GbGF0dGVuSW50b0FycmF5XG5cbiAgICB2YXIgaXNBcnJheSA9IF9kZXJlcV8oNDkpO1xuXG4gICAgdmFyIGlzT2JqZWN0ID0gX2RlcmVxXyg1MSk7XG5cbiAgICB2YXIgdG9MZW5ndGggPSBfZGVyZXFfKDExOCk7XG5cbiAgICB2YXIgY3R4ID0gX2RlcmVxXygyNSk7XG5cbiAgICB2YXIgSVNfQ09OQ0FUX1NQUkVBREFCTEUgPSBfZGVyZXFfKDEyOCkoJ2lzQ29uY2F0U3ByZWFkYWJsZScpO1xuXG4gICAgZnVuY3Rpb24gZmxhdHRlbkludG9BcnJheSh0YXJnZXQsIG9yaWdpbmFsLCBzb3VyY2UsIHNvdXJjZUxlbiwgc3RhcnQsIGRlcHRoLCBtYXBwZXIsIHRoaXNBcmcpIHtcbiAgICAgIHZhciB0YXJnZXRJbmRleCA9IHN0YXJ0O1xuICAgICAgdmFyIHNvdXJjZUluZGV4ID0gMDtcbiAgICAgIHZhciBtYXBGbiA9IG1hcHBlciA/IGN0eChtYXBwZXIsIHRoaXNBcmcsIDMpIDogZmFsc2U7XG4gICAgICB2YXIgZWxlbWVudCwgc3ByZWFkYWJsZTtcblxuICAgICAgd2hpbGUgKHNvdXJjZUluZGV4IDwgc291cmNlTGVuKSB7XG4gICAgICAgIGlmIChzb3VyY2VJbmRleCBpbiBzb3VyY2UpIHtcbiAgICAgICAgICBlbGVtZW50ID0gbWFwRm4gPyBtYXBGbihzb3VyY2Vbc291cmNlSW5kZXhdLCBzb3VyY2VJbmRleCwgb3JpZ2luYWwpIDogc291cmNlW3NvdXJjZUluZGV4XTtcbiAgICAgICAgICBzcHJlYWRhYmxlID0gZmFsc2U7XG5cbiAgICAgICAgICBpZiAoaXNPYmplY3QoZWxlbWVudCkpIHtcbiAgICAgICAgICAgIHNwcmVhZGFibGUgPSBlbGVtZW50W0lTX0NPTkNBVF9TUFJFQURBQkxFXTtcbiAgICAgICAgICAgIHNwcmVhZGFibGUgPSBzcHJlYWRhYmxlICE9PSB1bmRlZmluZWQgPyAhIXNwcmVhZGFibGUgOiBpc0FycmF5KGVsZW1lbnQpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGlmIChzcHJlYWRhYmxlICYmIGRlcHRoID4gMCkge1xuICAgICAgICAgICAgdGFyZ2V0SW5kZXggPSBmbGF0dGVuSW50b0FycmF5KHRhcmdldCwgb3JpZ2luYWwsIGVsZW1lbnQsIHRvTGVuZ3RoKGVsZW1lbnQubGVuZ3RoKSwgdGFyZ2V0SW5kZXgsIGRlcHRoIC0gMSkgLSAxO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBpZiAodGFyZ2V0SW5kZXggPj0gMHgxZmZmZmZmZmZmZmZmZikgdGhyb3cgVHlwZUVycm9yKCk7XG4gICAgICAgICAgICB0YXJnZXRbdGFyZ2V0SW5kZXhdID0gZWxlbWVudDtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICB0YXJnZXRJbmRleCsrO1xuICAgICAgICB9XG5cbiAgICAgICAgc291cmNlSW5kZXgrKztcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHRhcmdldEluZGV4O1xuICAgIH1cblxuICAgIG1vZHVsZS5leHBvcnRzID0gZmxhdHRlbkludG9BcnJheTtcbiAgfSwge1xuICAgIFwiMTE4XCI6IDExOCxcbiAgICBcIjEyOFwiOiAxMjgsXG4gICAgXCIyNVwiOiAyNSxcbiAgICBcIjQ5XCI6IDQ5LFxuICAgIFwiNTFcIjogNTFcbiAgfV0sXG4gIDM5OiBbZnVuY3Rpb24gKF9kZXJlcV8sIG1vZHVsZSwgZXhwb3J0cykge1xuICAgIHZhciBjdHggPSBfZGVyZXFfKDI1KTtcblxuICAgIHZhciBjYWxsID0gX2RlcmVxXyg1Myk7XG5cbiAgICB2YXIgaXNBcnJheUl0ZXIgPSBfZGVyZXFfKDQ4KTtcblxuICAgIHZhciBhbk9iamVjdCA9IF9kZXJlcV8oNyk7XG5cbiAgICB2YXIgdG9MZW5ndGggPSBfZGVyZXFfKDExOCk7XG5cbiAgICB2YXIgZ2V0SXRlckZuID0gX2RlcmVxXygxMjkpO1xuXG4gICAgdmFyIEJSRUFLID0ge307XG4gICAgdmFyIFJFVFVSTiA9IHt9O1xuXG4gICAgdmFyIGV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVyYWJsZSwgZW50cmllcywgZm4sIHRoYXQsIElURVJBVE9SKSB7XG4gICAgICB2YXIgaXRlckZuID0gSVRFUkFUT1IgPyBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBpdGVyYWJsZTtcbiAgICAgIH0gOiBnZXRJdGVyRm4oaXRlcmFibGUpO1xuICAgICAgdmFyIGYgPSBjdHgoZm4sIHRoYXQsIGVudHJpZXMgPyAyIDogMSk7XG4gICAgICB2YXIgaW5kZXggPSAwO1xuICAgICAgdmFyIGxlbmd0aCwgc3RlcCwgaXRlcmF0b3IsIHJlc3VsdDtcbiAgICAgIGlmICh0eXBlb2YgaXRlckZuICE9ICdmdW5jdGlvbicpIHRocm93IFR5cGVFcnJvcihpdGVyYWJsZSArICcgaXMgbm90IGl0ZXJhYmxlIScpOyAvLyBmYXN0IGNhc2UgZm9yIGFycmF5cyB3aXRoIGRlZmF1bHQgaXRlcmF0b3JcblxuICAgICAgaWYgKGlzQXJyYXlJdGVyKGl0ZXJGbikpIGZvciAobGVuZ3RoID0gdG9MZW5ndGgoaXRlcmFibGUubGVuZ3RoKTsgbGVuZ3RoID4gaW5kZXg7IGluZGV4KyspIHtcbiAgICAgICAgcmVzdWx0ID0gZW50cmllcyA/IGYoYW5PYmplY3Qoc3RlcCA9IGl0ZXJhYmxlW2luZGV4XSlbMF0sIHN0ZXBbMV0pIDogZihpdGVyYWJsZVtpbmRleF0pO1xuICAgICAgICBpZiAocmVzdWx0ID09PSBCUkVBSyB8fCByZXN1bHQgPT09IFJFVFVSTikgcmV0dXJuIHJlc3VsdDtcbiAgICAgIH0gZWxzZSBmb3IgKGl0ZXJhdG9yID0gaXRlckZuLmNhbGwoaXRlcmFibGUpOyAhKHN0ZXAgPSBpdGVyYXRvci5uZXh0KCkpLmRvbmU7KSB7XG4gICAgICAgIHJlc3VsdCA9IGNhbGwoaXRlcmF0b3IsIGYsIHN0ZXAudmFsdWUsIGVudHJpZXMpO1xuICAgICAgICBpZiAocmVzdWx0ID09PSBCUkVBSyB8fCByZXN1bHQgPT09IFJFVFVSTikgcmV0dXJuIHJlc3VsdDtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgZXhwb3J0cy5CUkVBSyA9IEJSRUFLO1xuICAgIGV4cG9ydHMuUkVUVVJOID0gUkVUVVJOO1xuICB9LCB7XG4gICAgXCIxMThcIjogMTE4LFxuICAgIFwiMTI5XCI6IDEyOSxcbiAgICBcIjI1XCI6IDI1LFxuICAgIFwiNDhcIjogNDgsXG4gICAgXCI1M1wiOiA1MyxcbiAgICBcIjdcIjogN1xuICB9XSxcbiAgNDA6IFtmdW5jdGlvbiAoX2RlcmVxXywgbW9kdWxlLCBleHBvcnRzKSB7XG4gICAgLy8gaHR0cHM6Ly9naXRodWIuY29tL3psb2lyb2NrL2NvcmUtanMvaXNzdWVzLzg2I2lzc3VlY29tbWVudC0xMTU3NTkwMjhcbiAgICB2YXIgZ2xvYmFsID0gbW9kdWxlLmV4cG9ydHMgPSB0eXBlb2Ygd2luZG93ICE9ICd1bmRlZmluZWQnICYmIHdpbmRvdy5NYXRoID09IE1hdGggPyB3aW5kb3cgOiB0eXBlb2Ygc2VsZiAhPSAndW5kZWZpbmVkJyAmJiBzZWxmLk1hdGggPT0gTWF0aCA/IHNlbGYgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLW5ldy1mdW5jXG4gICAgOiBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuICAgIGlmICh0eXBlb2YgX19nID09ICdudW1iZXInKSBfX2cgPSBnbG9iYWw7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tdW5kZWZcbiAgfSwge31dLFxuICA0MTogW2Z1bmN0aW9uIChfZGVyZXFfLCBtb2R1bGUsIGV4cG9ydHMpIHtcbiAgICB2YXIgaGFzT3duUHJvcGVydHkgPSB7fS5oYXNPd25Qcm9wZXJ0eTtcblxuICAgIG1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0LCBrZXkpIHtcbiAgICAgIHJldHVybiBoYXNPd25Qcm9wZXJ0eS5jYWxsKGl0LCBrZXkpO1xuICAgIH07XG4gIH0sIHt9XSxcbiAgNDI6IFtmdW5jdGlvbiAoX2RlcmVxXywgbW9kdWxlLCBleHBvcnRzKSB7XG4gICAgdmFyIGRQID0gX2RlcmVxXyg3Mik7XG5cbiAgICB2YXIgY3JlYXRlRGVzYyA9IF9kZXJlcV8oOTIpO1xuXG4gICAgbW9kdWxlLmV4cG9ydHMgPSBfZGVyZXFfKDI5KSA/IGZ1bmN0aW9uIChvYmplY3QsIGtleSwgdmFsdWUpIHtcbiAgICAgIHJldHVybiBkUC5mKG9iamVjdCwga2V5LCBjcmVhdGVEZXNjKDEsIHZhbHVlKSk7XG4gICAgfSA6IGZ1bmN0aW9uIChvYmplY3QsIGtleSwgdmFsdWUpIHtcbiAgICAgIG9iamVjdFtrZXldID0gdmFsdWU7XG4gICAgICByZXR1cm4gb2JqZWN0O1xuICAgIH07XG4gIH0sIHtcbiAgICBcIjI5XCI6IDI5LFxuICAgIFwiNzJcIjogNzIsXG4gICAgXCI5MlwiOiA5MlxuICB9XSxcbiAgNDM6IFtmdW5jdGlvbiAoX2RlcmVxXywgbW9kdWxlLCBleHBvcnRzKSB7XG4gICAgdmFyIGRvY3VtZW50ID0gX2RlcmVxXyg0MCkuZG9jdW1lbnQ7XG5cbiAgICBtb2R1bGUuZXhwb3J0cyA9IGRvY3VtZW50ICYmIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudDtcbiAgfSwge1xuICAgIFwiNDBcIjogNDBcbiAgfV0sXG4gIDQ0OiBbZnVuY3Rpb24gKF9kZXJlcV8sIG1vZHVsZSwgZXhwb3J0cykge1xuICAgIG1vZHVsZS5leHBvcnRzID0gIV9kZXJlcV8oMjkpICYmICFfZGVyZXFfKDM1KShmdW5jdGlvbiAoKSB7XG4gICAgICByZXR1cm4gT2JqZWN0LmRlZmluZVByb3BlcnR5KF9kZXJlcV8oMzApKCdkaXYnKSwgJ2EnLCB7XG4gICAgICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgICAgIHJldHVybiA3O1xuICAgICAgICB9XG4gICAgICB9KS5hICE9IDc7XG4gICAgfSk7XG4gIH0sIHtcbiAgICBcIjI5XCI6IDI5LFxuICAgIFwiMzBcIjogMzAsXG4gICAgXCIzNVwiOiAzNVxuICB9XSxcbiAgNDU6IFtmdW5jdGlvbiAoX2RlcmVxXywgbW9kdWxlLCBleHBvcnRzKSB7XG4gICAgdmFyIGlzT2JqZWN0ID0gX2RlcmVxXyg1MSk7XG5cbiAgICB2YXIgc2V0UHJvdG90eXBlT2YgPSBfZGVyZXFfKDk5KS5zZXQ7XG5cbiAgICBtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh0aGF0LCB0YXJnZXQsIEMpIHtcbiAgICAgIHZhciBTID0gdGFyZ2V0LmNvbnN0cnVjdG9yO1xuICAgICAgdmFyIFA7XG5cbiAgICAgIGlmIChTICE9PSBDICYmIHR5cGVvZiBTID09ICdmdW5jdGlvbicgJiYgKFAgPSBTLnByb3RvdHlwZSkgIT09IEMucHJvdG90eXBlICYmIGlzT2JqZWN0KFApICYmIHNldFByb3RvdHlwZU9mKSB7XG4gICAgICAgIHNldFByb3RvdHlwZU9mKHRoYXQsIFApO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gdGhhdDtcbiAgICB9O1xuICB9LCB7XG4gICAgXCI1MVwiOiA1MSxcbiAgICBcIjk5XCI6IDk5XG4gIH1dLFxuICA0NjogW2Z1bmN0aW9uIChfZGVyZXFfLCBtb2R1bGUsIGV4cG9ydHMpIHtcbiAgICAvLyBmYXN0IGFwcGx5LCBodHRwOi8vanNwZXJmLmxua2l0LmNvbS9mYXN0LWFwcGx5LzVcbiAgICBtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChmbiwgYXJncywgdGhhdCkge1xuICAgICAgdmFyIHVuID0gdGhhdCA9PT0gdW5kZWZpbmVkO1xuXG4gICAgICBzd2l0Y2ggKGFyZ3MubGVuZ3RoKSB7XG4gICAgICAgIGNhc2UgMDpcbiAgICAgICAgICByZXR1cm4gdW4gPyBmbigpIDogZm4uY2FsbCh0aGF0KTtcblxuICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgcmV0dXJuIHVuID8gZm4oYXJnc1swXSkgOiBmbi5jYWxsKHRoYXQsIGFyZ3NbMF0pO1xuXG4gICAgICAgIGNhc2UgMjpcbiAgICAgICAgICByZXR1cm4gdW4gPyBmbihhcmdzWzBdLCBhcmdzWzFdKSA6IGZuLmNhbGwodGhhdCwgYXJnc1swXSwgYXJnc1sxXSk7XG5cbiAgICAgICAgY2FzZSAzOlxuICAgICAgICAgIHJldHVybiB1biA/IGZuKGFyZ3NbMF0sIGFyZ3NbMV0sIGFyZ3NbMl0pIDogZm4uY2FsbCh0aGF0LCBhcmdzWzBdLCBhcmdzWzFdLCBhcmdzWzJdKTtcblxuICAgICAgICBjYXNlIDQ6XG4gICAgICAgICAgcmV0dXJuIHVuID8gZm4oYXJnc1swXSwgYXJnc1sxXSwgYXJnc1syXSwgYXJnc1szXSkgOiBmbi5jYWxsKHRoYXQsIGFyZ3NbMF0sIGFyZ3NbMV0sIGFyZ3NbMl0sIGFyZ3NbM10pO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gZm4uYXBwbHkodGhhdCwgYXJncyk7XG4gICAgfTtcbiAgfSwge31dLFxuICA0NzogW2Z1bmN0aW9uIChfZGVyZXFfLCBtb2R1bGUsIGV4cG9ydHMpIHtcbiAgICAvLyBmYWxsYmFjayBmb3Igbm9uLWFycmF5LWxpa2UgRVMzIGFuZCBub24tZW51bWVyYWJsZSBvbGQgVjggc3RyaW5nc1xuICAgIHZhciBjb2YgPSBfZGVyZXFfKDE4KTsgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXByb3RvdHlwZS1idWlsdGluc1xuXG5cbiAgICBtb2R1bGUuZXhwb3J0cyA9IE9iamVjdCgneicpLnByb3BlcnR5SXNFbnVtZXJhYmxlKDApID8gT2JqZWN0IDogZnVuY3Rpb24gKGl0KSB7XG4gICAgICByZXR1cm4gY29mKGl0KSA9PSAnU3RyaW5nJyA/IGl0LnNwbGl0KCcnKSA6IE9iamVjdChpdCk7XG4gICAgfTtcbiAgfSwge1xuICAgIFwiMThcIjogMThcbiAgfV0sXG4gIDQ4OiBbZnVuY3Rpb24gKF9kZXJlcV8sIG1vZHVsZSwgZXhwb3J0cykge1xuICAgIC8vIGNoZWNrIG9uIGRlZmF1bHQgQXJyYXkgaXRlcmF0b3JcbiAgICB2YXIgSXRlcmF0b3JzID0gX2RlcmVxXyg1OCk7XG5cbiAgICB2YXIgSVRFUkFUT1IgPSBfZGVyZXFfKDEyOCkoJ2l0ZXJhdG9yJyk7XG5cbiAgICB2YXIgQXJyYXlQcm90byA9IEFycmF5LnByb3RvdHlwZTtcblxuICAgIG1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0KSB7XG4gICAgICByZXR1cm4gaXQgIT09IHVuZGVmaW5lZCAmJiAoSXRlcmF0b3JzLkFycmF5ID09PSBpdCB8fCBBcnJheVByb3RvW0lURVJBVE9SXSA9PT0gaXQpO1xuICAgIH07XG4gIH0sIHtcbiAgICBcIjEyOFwiOiAxMjgsXG4gICAgXCI1OFwiOiA1OFxuICB9XSxcbiAgNDk6IFtmdW5jdGlvbiAoX2RlcmVxXywgbW9kdWxlLCBleHBvcnRzKSB7XG4gICAgLy8gNy4yLjIgSXNBcnJheShhcmd1bWVudClcbiAgICB2YXIgY29mID0gX2RlcmVxXygxOCk7XG5cbiAgICBtb2R1bGUuZXhwb3J0cyA9IEFycmF5LmlzQXJyYXkgfHwgZnVuY3Rpb24gaXNBcnJheShhcmcpIHtcbiAgICAgIHJldHVybiBjb2YoYXJnKSA9PSAnQXJyYXknO1xuICAgIH07XG4gIH0sIHtcbiAgICBcIjE4XCI6IDE4XG4gIH1dLFxuICA1MDogW2Z1bmN0aW9uIChfZGVyZXFfLCBtb2R1bGUsIGV4cG9ydHMpIHtcbiAgICAvLyAyMC4xLjIuMyBOdW1iZXIuaXNJbnRlZ2VyKG51bWJlcilcbiAgICB2YXIgaXNPYmplY3QgPSBfZGVyZXFfKDUxKTtcblxuICAgIHZhciBmbG9vciA9IE1hdGguZmxvb3I7XG5cbiAgICBtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGlzSW50ZWdlcihpdCkge1xuICAgICAgcmV0dXJuICFpc09iamVjdChpdCkgJiYgaXNGaW5pdGUoaXQpICYmIGZsb29yKGl0KSA9PT0gaXQ7XG4gICAgfTtcbiAgfSwge1xuICAgIFwiNTFcIjogNTFcbiAgfV0sXG4gIDUxOiBbZnVuY3Rpb24gKF9kZXJlcV8sIG1vZHVsZSwgZXhwb3J0cykge1xuICAgIG1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0KSB7XG4gICAgICByZXR1cm4gX3R5cGVvZihpdCkgPT09ICdvYmplY3QnID8gaXQgIT09IG51bGwgOiB0eXBlb2YgaXQgPT09ICdmdW5jdGlvbic7XG4gICAgfTtcbiAgfSwge31dLFxuICA1MjogW2Z1bmN0aW9uIChfZGVyZXFfLCBtb2R1bGUsIGV4cG9ydHMpIHtcbiAgICAvLyA3LjIuOCBJc1JlZ0V4cChhcmd1bWVudClcbiAgICB2YXIgaXNPYmplY3QgPSBfZGVyZXFfKDUxKTtcblxuICAgIHZhciBjb2YgPSBfZGVyZXFfKDE4KTtcblxuICAgIHZhciBNQVRDSCA9IF9kZXJlcV8oMTI4KSgnbWF0Y2gnKTtcblxuICAgIG1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0KSB7XG4gICAgICB2YXIgaXNSZWdFeHA7XG4gICAgICByZXR1cm4gaXNPYmplY3QoaXQpICYmICgoaXNSZWdFeHAgPSBpdFtNQVRDSF0pICE9PSB1bmRlZmluZWQgPyAhIWlzUmVnRXhwIDogY29mKGl0KSA9PSAnUmVnRXhwJyk7XG4gICAgfTtcbiAgfSwge1xuICAgIFwiMTI4XCI6IDEyOCxcbiAgICBcIjE4XCI6IDE4LFxuICAgIFwiNTFcIjogNTFcbiAgfV0sXG4gIDUzOiBbZnVuY3Rpb24gKF9kZXJlcV8sIG1vZHVsZSwgZXhwb3J0cykge1xuICAgIC8vIGNhbGwgc29tZXRoaW5nIG9uIGl0ZXJhdG9yIHN0ZXAgd2l0aCBzYWZlIGNsb3Npbmcgb24gZXJyb3JcbiAgICB2YXIgYW5PYmplY3QgPSBfZGVyZXFfKDcpO1xuXG4gICAgbW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlcmF0b3IsIGZuLCB2YWx1ZSwgZW50cmllcykge1xuICAgICAgdHJ5IHtcbiAgICAgICAgcmV0dXJuIGVudHJpZXMgPyBmbihhbk9iamVjdCh2YWx1ZSlbMF0sIHZhbHVlWzFdKSA6IGZuKHZhbHVlKTsgLy8gNy40LjYgSXRlcmF0b3JDbG9zZShpdGVyYXRvciwgY29tcGxldGlvbilcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgdmFyIHJldCA9IGl0ZXJhdG9yWydyZXR1cm4nXTtcbiAgICAgICAgaWYgKHJldCAhPT0gdW5kZWZpbmVkKSBhbk9iamVjdChyZXQuY2FsbChpdGVyYXRvcikpO1xuICAgICAgICB0aHJvdyBlO1xuICAgICAgfVxuICAgIH07XG4gIH0sIHtcbiAgICBcIjdcIjogN1xuICB9XSxcbiAgNTQ6IFtmdW5jdGlvbiAoX2RlcmVxXywgbW9kdWxlLCBleHBvcnRzKSB7XG4gICAgJ3VzZSBzdHJpY3QnO1xuXG4gICAgdmFyIGNyZWF0ZSA9IF9kZXJlcV8oNzEpO1xuXG4gICAgdmFyIGRlc2NyaXB0b3IgPSBfZGVyZXFfKDkyKTtcblxuICAgIHZhciBzZXRUb1N0cmluZ1RhZyA9IF9kZXJlcV8oMTAxKTtcblxuICAgIHZhciBJdGVyYXRvclByb3RvdHlwZSA9IHt9OyAvLyAyNS4xLjIuMS4xICVJdGVyYXRvclByb3RvdHlwZSVbQEBpdGVyYXRvcl0oKVxuXG4gICAgX2RlcmVxXyg0MikoSXRlcmF0b3JQcm90b3R5cGUsIF9kZXJlcV8oMTI4KSgnaXRlcmF0b3InKSwgZnVuY3Rpb24gKCkge1xuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfSk7XG5cbiAgICBtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChDb25zdHJ1Y3RvciwgTkFNRSwgbmV4dCkge1xuICAgICAgQ29uc3RydWN0b3IucHJvdG90eXBlID0gY3JlYXRlKEl0ZXJhdG9yUHJvdG90eXBlLCB7XG4gICAgICAgIG5leHQ6IGRlc2NyaXB0b3IoMSwgbmV4dClcbiAgICAgIH0pO1xuICAgICAgc2V0VG9TdHJpbmdUYWcoQ29uc3RydWN0b3IsIE5BTUUgKyAnIEl0ZXJhdG9yJyk7XG4gICAgfTtcbiAgfSwge1xuICAgIFwiMTAxXCI6IDEwMSxcbiAgICBcIjEyOFwiOiAxMjgsXG4gICAgXCI0MlwiOiA0MixcbiAgICBcIjcxXCI6IDcxLFxuICAgIFwiOTJcIjogOTJcbiAgfV0sXG4gIDU1OiBbZnVuY3Rpb24gKF9kZXJlcV8sIG1vZHVsZSwgZXhwb3J0cykge1xuICAgICd1c2Ugc3RyaWN0JztcblxuICAgIHZhciBMSUJSQVJZID0gX2RlcmVxXyg2MCk7XG5cbiAgICB2YXIgJGV4cG9ydCA9IF9kZXJlcV8oMzMpO1xuXG4gICAgdmFyIHJlZGVmaW5lID0gX2RlcmVxXyg5NCk7XG5cbiAgICB2YXIgaGlkZSA9IF9kZXJlcV8oNDIpO1xuXG4gICAgdmFyIGhhcyA9IF9kZXJlcV8oNDEpO1xuXG4gICAgdmFyIEl0ZXJhdG9ycyA9IF9kZXJlcV8oNTgpO1xuXG4gICAgdmFyICRpdGVyQ3JlYXRlID0gX2RlcmVxXyg1NCk7XG5cbiAgICB2YXIgc2V0VG9TdHJpbmdUYWcgPSBfZGVyZXFfKDEwMSk7XG5cbiAgICB2YXIgZ2V0UHJvdG90eXBlT2YgPSBfZGVyZXFfKDc5KTtcblxuICAgIHZhciBJVEVSQVRPUiA9IF9kZXJlcV8oMTI4KSgnaXRlcmF0b3InKTtcblxuICAgIHZhciBCVUdHWSA9ICEoW10ua2V5cyAmJiAnbmV4dCcgaW4gW10ua2V5cygpKTsgLy8gU2FmYXJpIGhhcyBidWdneSBpdGVyYXRvcnMgdy9vIGBuZXh0YFxuXG4gICAgdmFyIEZGX0lURVJBVE9SID0gJ0BAaXRlcmF0b3InO1xuICAgIHZhciBLRVlTID0gJ2tleXMnO1xuICAgIHZhciBWQUxVRVMgPSAndmFsdWVzJztcblxuICAgIHZhciByZXR1cm5UaGlzID0gZnVuY3Rpb24gcmV0dXJuVGhpcygpIHtcbiAgICAgIHJldHVybiB0aGlzO1xuICAgIH07XG5cbiAgICBtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChCYXNlLCBOQU1FLCBDb25zdHJ1Y3RvciwgbmV4dCwgREVGQVVMVCwgSVNfU0VULCBGT1JDRUQpIHtcbiAgICAgICRpdGVyQ3JlYXRlKENvbnN0cnVjdG9yLCBOQU1FLCBuZXh0KTtcblxuICAgICAgdmFyIGdldE1ldGhvZCA9IGZ1bmN0aW9uIGdldE1ldGhvZChraW5kKSB7XG4gICAgICAgIGlmICghQlVHR1kgJiYga2luZCBpbiBwcm90bykgcmV0dXJuIHByb3RvW2tpbmRdO1xuXG4gICAgICAgIHN3aXRjaCAoa2luZCkge1xuICAgICAgICAgIGNhc2UgS0VZUzpcbiAgICAgICAgICAgIHJldHVybiBmdW5jdGlvbiBrZXlzKCkge1xuICAgICAgICAgICAgICByZXR1cm4gbmV3IENvbnN0cnVjdG9yKHRoaXMsIGtpbmQpO1xuICAgICAgICAgICAgfTtcblxuICAgICAgICAgIGNhc2UgVkFMVUVTOlxuICAgICAgICAgICAgcmV0dXJuIGZ1bmN0aW9uIHZhbHVlcygpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIG5ldyBDb25zdHJ1Y3Rvcih0aGlzLCBraW5kKTtcbiAgICAgICAgICAgIH07XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gZnVuY3Rpb24gZW50cmllcygpIHtcbiAgICAgICAgICByZXR1cm4gbmV3IENvbnN0cnVjdG9yKHRoaXMsIGtpbmQpO1xuICAgICAgICB9O1xuICAgICAgfTtcblxuICAgICAgdmFyIFRBRyA9IE5BTUUgKyAnIEl0ZXJhdG9yJztcbiAgICAgIHZhciBERUZfVkFMVUVTID0gREVGQVVMVCA9PSBWQUxVRVM7XG4gICAgICB2YXIgVkFMVUVTX0JVRyA9IGZhbHNlO1xuICAgICAgdmFyIHByb3RvID0gQmFzZS5wcm90b3R5cGU7XG4gICAgICB2YXIgJG5hdGl2ZSA9IHByb3RvW0lURVJBVE9SXSB8fCBwcm90b1tGRl9JVEVSQVRPUl0gfHwgREVGQVVMVCAmJiBwcm90b1tERUZBVUxUXTtcbiAgICAgIHZhciAkZGVmYXVsdCA9ICRuYXRpdmUgfHwgZ2V0TWV0aG9kKERFRkFVTFQpO1xuICAgICAgdmFyICRlbnRyaWVzID0gREVGQVVMVCA/ICFERUZfVkFMVUVTID8gJGRlZmF1bHQgOiBnZXRNZXRob2QoJ2VudHJpZXMnKSA6IHVuZGVmaW5lZDtcbiAgICAgIHZhciAkYW55TmF0aXZlID0gTkFNRSA9PSAnQXJyYXknID8gcHJvdG8uZW50cmllcyB8fCAkbmF0aXZlIDogJG5hdGl2ZTtcbiAgICAgIHZhciBtZXRob2RzLCBrZXksIEl0ZXJhdG9yUHJvdG90eXBlOyAvLyBGaXggbmF0aXZlXG5cbiAgICAgIGlmICgkYW55TmF0aXZlKSB7XG4gICAgICAgIEl0ZXJhdG9yUHJvdG90eXBlID0gZ2V0UHJvdG90eXBlT2YoJGFueU5hdGl2ZS5jYWxsKG5ldyBCYXNlKCkpKTtcblxuICAgICAgICBpZiAoSXRlcmF0b3JQcm90b3R5cGUgIT09IE9iamVjdC5wcm90b3R5cGUgJiYgSXRlcmF0b3JQcm90b3R5cGUubmV4dCkge1xuICAgICAgICAgIC8vIFNldCBAQHRvU3RyaW5nVGFnIHRvIG5hdGl2ZSBpdGVyYXRvcnNcbiAgICAgICAgICBzZXRUb1N0cmluZ1RhZyhJdGVyYXRvclByb3RvdHlwZSwgVEFHLCB0cnVlKTsgLy8gZml4IGZvciBzb21lIG9sZCBlbmdpbmVzXG5cbiAgICAgICAgICBpZiAoIUxJQlJBUlkgJiYgIWhhcyhJdGVyYXRvclByb3RvdHlwZSwgSVRFUkFUT1IpKSBoaWRlKEl0ZXJhdG9yUHJvdG90eXBlLCBJVEVSQVRPUiwgcmV0dXJuVGhpcyk7XG4gICAgICAgIH1cbiAgICAgIH0gLy8gZml4IEFycmF5I3t2YWx1ZXMsIEBAaXRlcmF0b3J9Lm5hbWUgaW4gVjggLyBGRlxuXG5cbiAgICAgIGlmIChERUZfVkFMVUVTICYmICRuYXRpdmUgJiYgJG5hdGl2ZS5uYW1lICE9PSBWQUxVRVMpIHtcbiAgICAgICAgVkFMVUVTX0JVRyA9IHRydWU7XG5cbiAgICAgICAgJGRlZmF1bHQgPSBmdW5jdGlvbiB2YWx1ZXMoKSB7XG4gICAgICAgICAgcmV0dXJuICRuYXRpdmUuY2FsbCh0aGlzKTtcbiAgICAgICAgfTtcbiAgICAgIH0gLy8gRGVmaW5lIGl0ZXJhdG9yXG5cblxuICAgICAgaWYgKCghTElCUkFSWSB8fCBGT1JDRUQpICYmIChCVUdHWSB8fCBWQUxVRVNfQlVHIHx8ICFwcm90b1tJVEVSQVRPUl0pKSB7XG4gICAgICAgIGhpZGUocHJvdG8sIElURVJBVE9SLCAkZGVmYXVsdCk7XG4gICAgICB9IC8vIFBsdWcgZm9yIGxpYnJhcnlcblxuXG4gICAgICBJdGVyYXRvcnNbTkFNRV0gPSAkZGVmYXVsdDtcbiAgICAgIEl0ZXJhdG9yc1tUQUddID0gcmV0dXJuVGhpcztcblxuICAgICAgaWYgKERFRkFVTFQpIHtcbiAgICAgICAgbWV0aG9kcyA9IHtcbiAgICAgICAgICB2YWx1ZXM6IERFRl9WQUxVRVMgPyAkZGVmYXVsdCA6IGdldE1ldGhvZChWQUxVRVMpLFxuICAgICAgICAgIGtleXM6IElTX1NFVCA/ICRkZWZhdWx0IDogZ2V0TWV0aG9kKEtFWVMpLFxuICAgICAgICAgIGVudHJpZXM6ICRlbnRyaWVzXG4gICAgICAgIH07XG4gICAgICAgIGlmIChGT1JDRUQpIGZvciAoa2V5IGluIG1ldGhvZHMpIHtcbiAgICAgICAgICBpZiAoIShrZXkgaW4gcHJvdG8pKSByZWRlZmluZShwcm90bywga2V5LCBtZXRob2RzW2tleV0pO1xuICAgICAgICB9IGVsc2UgJGV4cG9ydCgkZXhwb3J0LlAgKyAkZXhwb3J0LkYgKiAoQlVHR1kgfHwgVkFMVUVTX0JVRyksIE5BTUUsIG1ldGhvZHMpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gbWV0aG9kcztcbiAgICB9O1xuICB9LCB7XG4gICAgXCIxMDFcIjogMTAxLFxuICAgIFwiMTI4XCI6IDEyOCxcbiAgICBcIjMzXCI6IDMzLFxuICAgIFwiNDFcIjogNDEsXG4gICAgXCI0MlwiOiA0MixcbiAgICBcIjU0XCI6IDU0LFxuICAgIFwiNThcIjogNTgsXG4gICAgXCI2MFwiOiA2MCxcbiAgICBcIjc5XCI6IDc5LFxuICAgIFwiOTRcIjogOTRcbiAgfV0sXG4gIDU2OiBbZnVuY3Rpb24gKF9kZXJlcV8sIG1vZHVsZSwgZXhwb3J0cykge1xuICAgIHZhciBJVEVSQVRPUiA9IF9kZXJlcV8oMTI4KSgnaXRlcmF0b3InKTtcblxuICAgIHZhciBTQUZFX0NMT1NJTkcgPSBmYWxzZTtcblxuICAgIHRyeSB7XG4gICAgICB2YXIgcml0ZXIgPSBbN11bSVRFUkFUT1JdKCk7XG5cbiAgICAgIHJpdGVyWydyZXR1cm4nXSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgU0FGRV9DTE9TSU5HID0gdHJ1ZTtcbiAgICAgIH07IC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby10aHJvdy1saXRlcmFsXG5cblxuICAgICAgQXJyYXkuZnJvbShyaXRlciwgZnVuY3Rpb24gKCkge1xuICAgICAgICB0aHJvdyAyO1xuICAgICAgfSk7XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgLyogZW1wdHkgKi9cbiAgICB9XG5cbiAgICBtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChleGVjLCBza2lwQ2xvc2luZykge1xuICAgICAgaWYgKCFza2lwQ2xvc2luZyAmJiAhU0FGRV9DTE9TSU5HKSByZXR1cm4gZmFsc2U7XG4gICAgICB2YXIgc2FmZSA9IGZhbHNlO1xuXG4gICAgICB0cnkge1xuICAgICAgICB2YXIgYXJyID0gWzddO1xuICAgICAgICB2YXIgaXRlciA9IGFycltJVEVSQVRPUl0oKTtcblxuICAgICAgICBpdGVyLm5leHQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGRvbmU6IHNhZmUgPSB0cnVlXG4gICAgICAgICAgfTtcbiAgICAgICAgfTtcblxuICAgICAgICBhcnJbSVRFUkFUT1JdID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgIHJldHVybiBpdGVyO1xuICAgICAgICB9O1xuXG4gICAgICAgIGV4ZWMoYXJyKTtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLyogZW1wdHkgKi9cbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHNhZmU7XG4gICAgfTtcbiAgfSwge1xuICAgIFwiMTI4XCI6IDEyOFxuICB9XSxcbiAgNTc6IFtmdW5jdGlvbiAoX2RlcmVxXywgbW9kdWxlLCBleHBvcnRzKSB7XG4gICAgbW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoZG9uZSwgdmFsdWUpIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHZhbHVlOiB2YWx1ZSxcbiAgICAgICAgZG9uZTogISFkb25lXG4gICAgICB9O1xuICAgIH07XG4gIH0sIHt9XSxcbiAgNTg6IFtmdW5jdGlvbiAoX2RlcmVxXywgbW9kdWxlLCBleHBvcnRzKSB7XG4gICAgbW9kdWxlLmV4cG9ydHMgPSB7fTtcbiAgfSwge31dLFxuICA1OTogW2Z1bmN0aW9uIChfZGVyZXFfLCBtb2R1bGUsIGV4cG9ydHMpIHtcbiAgICB2YXIgZ2V0S2V5cyA9IF9kZXJlcV8oODEpO1xuXG4gICAgdmFyIHRvSU9iamVjdCA9IF9kZXJlcV8oMTE3KTtcblxuICAgIG1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKG9iamVjdCwgZWwpIHtcbiAgICAgIHZhciBPID0gdG9JT2JqZWN0KG9iamVjdCk7XG4gICAgICB2YXIga2V5cyA9IGdldEtleXMoTyk7XG4gICAgICB2YXIgbGVuZ3RoID0ga2V5cy5sZW5ndGg7XG4gICAgICB2YXIgaW5kZXggPSAwO1xuICAgICAgdmFyIGtleTtcblxuICAgICAgd2hpbGUgKGxlbmd0aCA+IGluZGV4KSB7XG4gICAgICAgIGlmIChPW2tleSA9IGtleXNbaW5kZXgrK11dID09PSBlbCkgcmV0dXJuIGtleTtcbiAgICAgIH1cbiAgICB9O1xuICB9LCB7XG4gICAgXCIxMTdcIjogMTE3LFxuICAgIFwiODFcIjogODFcbiAgfV0sXG4gIDYwOiBbZnVuY3Rpb24gKF9kZXJlcV8sIG1vZHVsZSwgZXhwb3J0cykge1xuICAgIG1vZHVsZS5leHBvcnRzID0gZmFsc2U7XG4gIH0sIHt9XSxcbiAgNjE6IFtmdW5jdGlvbiAoX2RlcmVxXywgbW9kdWxlLCBleHBvcnRzKSB7XG4gICAgLy8gMjAuMi4yLjE0IE1hdGguZXhwbTEoeClcbiAgICB2YXIgJGV4cG0xID0gTWF0aC5leHBtMTtcbiAgICBtb2R1bGUuZXhwb3J0cyA9ICEkZXhwbTEgLy8gT2xkIEZGIGJ1Z1xuICAgIHx8ICRleHBtMSgxMCkgPiAyMjAyNS40NjU3OTQ4MDY3MTkgfHwgJGV4cG0xKDEwKSA8IDIyMDI1LjQ2NTc5NDgwNjcxNjUxNjggLy8gVG9yIEJyb3dzZXIgYnVnXG4gICAgfHwgJGV4cG0xKC0yZS0xNykgIT0gLTJlLTE3ID8gZnVuY3Rpb24gZXhwbTEoeCkge1xuICAgICAgcmV0dXJuICh4ID0gK3gpID09IDAgPyB4IDogeCA+IC0xZS02ICYmIHggPCAxZS02ID8geCArIHggKiB4IC8gMiA6IE1hdGguZXhwKHgpIC0gMTtcbiAgICB9IDogJGV4cG0xO1xuICB9LCB7fV0sXG4gIDYyOiBbZnVuY3Rpb24gKF9kZXJlcV8sIG1vZHVsZSwgZXhwb3J0cykge1xuICAgIC8vIDIwLjIuMi4xNiBNYXRoLmZyb3VuZCh4KVxuICAgIHZhciBzaWduID0gX2RlcmVxXyg2NSk7XG5cbiAgICB2YXIgcG93ID0gTWF0aC5wb3c7XG4gICAgdmFyIEVQU0lMT04gPSBwb3coMiwgLTUyKTtcbiAgICB2YXIgRVBTSUxPTjMyID0gcG93KDIsIC0yMyk7XG4gICAgdmFyIE1BWDMyID0gcG93KDIsIDEyNykgKiAoMiAtIEVQU0lMT04zMik7XG4gICAgdmFyIE1JTjMyID0gcG93KDIsIC0xMjYpO1xuXG4gICAgdmFyIHJvdW5kVGllc1RvRXZlbiA9IGZ1bmN0aW9uIHJvdW5kVGllc1RvRXZlbihuKSB7XG4gICAgICByZXR1cm4gbiArIDEgLyBFUFNJTE9OIC0gMSAvIEVQU0lMT047XG4gICAgfTtcblxuICAgIG1vZHVsZS5leHBvcnRzID0gTWF0aC5mcm91bmQgfHwgZnVuY3Rpb24gZnJvdW5kKHgpIHtcbiAgICAgIHZhciAkYWJzID0gTWF0aC5hYnMoeCk7XG4gICAgICB2YXIgJHNpZ24gPSBzaWduKHgpO1xuICAgICAgdmFyIGEsIHJlc3VsdDtcbiAgICAgIGlmICgkYWJzIDwgTUlOMzIpIHJldHVybiAkc2lnbiAqIHJvdW5kVGllc1RvRXZlbigkYWJzIC8gTUlOMzIgLyBFUFNJTE9OMzIpICogTUlOMzIgKiBFUFNJTE9OMzI7XG4gICAgICBhID0gKDEgKyBFUFNJTE9OMzIgLyBFUFNJTE9OKSAqICRhYnM7XG4gICAgICByZXN1bHQgPSBhIC0gKGEgLSAkYWJzKTsgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXNlbGYtY29tcGFyZVxuXG4gICAgICBpZiAocmVzdWx0ID4gTUFYMzIgfHwgcmVzdWx0ICE9IHJlc3VsdCkgcmV0dXJuICRzaWduICogSW5maW5pdHk7XG4gICAgICByZXR1cm4gJHNpZ24gKiByZXN1bHQ7XG4gICAgfTtcbiAgfSwge1xuICAgIFwiNjVcIjogNjVcbiAgfV0sXG4gIDYzOiBbZnVuY3Rpb24gKF9kZXJlcV8sIG1vZHVsZSwgZXhwb3J0cykge1xuICAgIC8vIDIwLjIuMi4yMCBNYXRoLmxvZzFwKHgpXG4gICAgbW9kdWxlLmV4cG9ydHMgPSBNYXRoLmxvZzFwIHx8IGZ1bmN0aW9uIGxvZzFwKHgpIHtcbiAgICAgIHJldHVybiAoeCA9ICt4KSA+IC0xZS04ICYmIHggPCAxZS04ID8geCAtIHggKiB4IC8gMiA6IE1hdGgubG9nKDEgKyB4KTtcbiAgICB9O1xuICB9LCB7fV0sXG4gIDY0OiBbZnVuY3Rpb24gKF9kZXJlcV8sIG1vZHVsZSwgZXhwb3J0cykge1xuICAgIC8vIGh0dHBzOi8vcndhbGRyb24uZ2l0aHViLmlvL3Byb3Bvc2FsLW1hdGgtZXh0ZW5zaW9ucy9cbiAgICBtb2R1bGUuZXhwb3J0cyA9IE1hdGguc2NhbGUgfHwgZnVuY3Rpb24gc2NhbGUoeCwgaW5Mb3csIGluSGlnaCwgb3V0TG93LCBvdXRIaWdoKSB7XG4gICAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCA9PT0gMCAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tc2VsZi1jb21wYXJlXG4gICAgICB8fCB4ICE9IHggLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXNlbGYtY29tcGFyZVxuICAgICAgfHwgaW5Mb3cgIT0gaW5Mb3cgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXNlbGYtY29tcGFyZVxuICAgICAgfHwgaW5IaWdoICE9IGluSGlnaCAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tc2VsZi1jb21wYXJlXG4gICAgICB8fCBvdXRMb3cgIT0gb3V0TG93IC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1zZWxmLWNvbXBhcmVcbiAgICAgIHx8IG91dEhpZ2ggIT0gb3V0SGlnaCkgcmV0dXJuIE5hTjtcbiAgICAgIGlmICh4ID09PSBJbmZpbml0eSB8fCB4ID09PSAtSW5maW5pdHkpIHJldHVybiB4O1xuICAgICAgcmV0dXJuICh4IC0gaW5Mb3cpICogKG91dEhpZ2ggLSBvdXRMb3cpIC8gKGluSGlnaCAtIGluTG93KSArIG91dExvdztcbiAgICB9O1xuICB9LCB7fV0sXG4gIDY1OiBbZnVuY3Rpb24gKF9kZXJlcV8sIG1vZHVsZSwgZXhwb3J0cykge1xuICAgIC8vIDIwLjIuMi4yOCBNYXRoLnNpZ24oeClcbiAgICBtb2R1bGUuZXhwb3J0cyA9IE1hdGguc2lnbiB8fCBmdW5jdGlvbiBzaWduKHgpIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1zZWxmLWNvbXBhcmVcbiAgICAgIHJldHVybiAoeCA9ICt4KSA9PSAwIHx8IHggIT0geCA/IHggOiB4IDwgMCA/IC0xIDogMTtcbiAgICB9O1xuICB9LCB7fV0sXG4gIDY2OiBbZnVuY3Rpb24gKF9kZXJlcV8sIG1vZHVsZSwgZXhwb3J0cykge1xuICAgIHZhciBNRVRBID0gX2RlcmVxXygxMjQpKCdtZXRhJyk7XG5cbiAgICB2YXIgaXNPYmplY3QgPSBfZGVyZXFfKDUxKTtcblxuICAgIHZhciBoYXMgPSBfZGVyZXFfKDQxKTtcblxuICAgIHZhciBzZXREZXNjID0gX2RlcmVxXyg3MikuZjtcblxuICAgIHZhciBpZCA9IDA7XG5cbiAgICB2YXIgaXNFeHRlbnNpYmxlID0gT2JqZWN0LmlzRXh0ZW5zaWJsZSB8fCBmdW5jdGlvbiAoKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9O1xuXG4gICAgdmFyIEZSRUVaRSA9ICFfZGVyZXFfKDM1KShmdW5jdGlvbiAoKSB7XG4gICAgICByZXR1cm4gaXNFeHRlbnNpYmxlKE9iamVjdC5wcmV2ZW50RXh0ZW5zaW9ucyh7fSkpO1xuICAgIH0pO1xuXG4gICAgdmFyIHNldE1ldGEgPSBmdW5jdGlvbiBzZXRNZXRhKGl0KSB7XG4gICAgICBzZXREZXNjKGl0LCBNRVRBLCB7XG4gICAgICAgIHZhbHVlOiB7XG4gICAgICAgICAgaTogJ08nICsgKytpZCxcbiAgICAgICAgICAvLyBvYmplY3QgSURcbiAgICAgICAgICB3OiB7fSAvLyB3ZWFrIGNvbGxlY3Rpb25zIElEc1xuXG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH07XG5cbiAgICB2YXIgZmFzdEtleSA9IGZ1bmN0aW9uIGZhc3RLZXkoaXQsIGNyZWF0ZSkge1xuICAgICAgLy8gcmV0dXJuIHByaW1pdGl2ZSB3aXRoIHByZWZpeFxuICAgICAgaWYgKCFpc09iamVjdChpdCkpIHJldHVybiBfdHlwZW9mKGl0KSA9PSAnc3ltYm9sJyA/IGl0IDogKHR5cGVvZiBpdCA9PSAnc3RyaW5nJyA/ICdTJyA6ICdQJykgKyBpdDtcblxuICAgICAgaWYgKCFoYXMoaXQsIE1FVEEpKSB7XG4gICAgICAgIC8vIGNhbid0IHNldCBtZXRhZGF0YSB0byB1bmNhdWdodCBmcm96ZW4gb2JqZWN0XG4gICAgICAgIGlmICghaXNFeHRlbnNpYmxlKGl0KSkgcmV0dXJuICdGJzsgLy8gbm90IG5lY2Vzc2FyeSB0byBhZGQgbWV0YWRhdGFcblxuICAgICAgICBpZiAoIWNyZWF0ZSkgcmV0dXJuICdFJzsgLy8gYWRkIG1pc3NpbmcgbWV0YWRhdGFcblxuICAgICAgICBzZXRNZXRhKGl0KTsgLy8gcmV0dXJuIG9iamVjdCBJRFxuICAgICAgfVxuXG4gICAgICByZXR1cm4gaXRbTUVUQV0uaTtcbiAgICB9O1xuXG4gICAgdmFyIGdldFdlYWsgPSBmdW5jdGlvbiBnZXRXZWFrKGl0LCBjcmVhdGUpIHtcbiAgICAgIGlmICghaGFzKGl0LCBNRVRBKSkge1xuICAgICAgICAvLyBjYW4ndCBzZXQgbWV0YWRhdGEgdG8gdW5jYXVnaHQgZnJvemVuIG9iamVjdFxuICAgICAgICBpZiAoIWlzRXh0ZW5zaWJsZShpdCkpIHJldHVybiB0cnVlOyAvLyBub3QgbmVjZXNzYXJ5IHRvIGFkZCBtZXRhZGF0YVxuXG4gICAgICAgIGlmICghY3JlYXRlKSByZXR1cm4gZmFsc2U7IC8vIGFkZCBtaXNzaW5nIG1ldGFkYXRhXG5cbiAgICAgICAgc2V0TWV0YShpdCk7IC8vIHJldHVybiBoYXNoIHdlYWsgY29sbGVjdGlvbnMgSURzXG4gICAgICB9XG5cbiAgICAgIHJldHVybiBpdFtNRVRBXS53O1xuICAgIH07IC8vIGFkZCBtZXRhZGF0YSBvbiBmcmVlemUtZmFtaWx5IG1ldGhvZHMgY2FsbGluZ1xuXG5cbiAgICB2YXIgb25GcmVlemUgPSBmdW5jdGlvbiBvbkZyZWV6ZShpdCkge1xuICAgICAgaWYgKEZSRUVaRSAmJiBtZXRhLk5FRUQgJiYgaXNFeHRlbnNpYmxlKGl0KSAmJiAhaGFzKGl0LCBNRVRBKSkgc2V0TWV0YShpdCk7XG4gICAgICByZXR1cm4gaXQ7XG4gICAgfTtcblxuICAgIHZhciBtZXRhID0gbW9kdWxlLmV4cG9ydHMgPSB7XG4gICAgICBLRVk6IE1FVEEsXG4gICAgICBORUVEOiBmYWxzZSxcbiAgICAgIGZhc3RLZXk6IGZhc3RLZXksXG4gICAgICBnZXRXZWFrOiBnZXRXZWFrLFxuICAgICAgb25GcmVlemU6IG9uRnJlZXplXG4gICAgfTtcbiAgfSwge1xuICAgIFwiMTI0XCI6IDEyNCxcbiAgICBcIjM1XCI6IDM1LFxuICAgIFwiNDFcIjogNDEsXG4gICAgXCI1MVwiOiA1MSxcbiAgICBcIjcyXCI6IDcyXG4gIH1dLFxuICA2NzogW2Z1bmN0aW9uIChfZGVyZXFfLCBtb2R1bGUsIGV4cG9ydHMpIHtcbiAgICB2YXIgTWFwID0gX2RlcmVxXygxNjApO1xuXG4gICAgdmFyICRleHBvcnQgPSBfZGVyZXFfKDMzKTtcblxuICAgIHZhciBzaGFyZWQgPSBfZGVyZXFfKDEwMykoJ21ldGFkYXRhJyk7XG5cbiAgICB2YXIgc3RvcmUgPSBzaGFyZWQuc3RvcmUgfHwgKHNoYXJlZC5zdG9yZSA9IG5ldyAoX2RlcmVxXygyNjYpKSgpKTtcblxuICAgIHZhciBnZXRPckNyZWF0ZU1ldGFkYXRhTWFwID0gZnVuY3Rpb24gZ2V0T3JDcmVhdGVNZXRhZGF0YU1hcCh0YXJnZXQsIHRhcmdldEtleSwgY3JlYXRlKSB7XG4gICAgICB2YXIgdGFyZ2V0TWV0YWRhdGEgPSBzdG9yZS5nZXQodGFyZ2V0KTtcblxuICAgICAgaWYgKCF0YXJnZXRNZXRhZGF0YSkge1xuICAgICAgICBpZiAoIWNyZWF0ZSkgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICAgICAgc3RvcmUuc2V0KHRhcmdldCwgdGFyZ2V0TWV0YWRhdGEgPSBuZXcgTWFwKCkpO1xuICAgICAgfVxuXG4gICAgICB2YXIga2V5TWV0YWRhdGEgPSB0YXJnZXRNZXRhZGF0YS5nZXQodGFyZ2V0S2V5KTtcblxuICAgICAgaWYgKCFrZXlNZXRhZGF0YSkge1xuICAgICAgICBpZiAoIWNyZWF0ZSkgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICAgICAgdGFyZ2V0TWV0YWRhdGEuc2V0KHRhcmdldEtleSwga2V5TWV0YWRhdGEgPSBuZXcgTWFwKCkpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4ga2V5TWV0YWRhdGE7XG4gICAgfTtcblxuICAgIHZhciBvcmRpbmFyeUhhc093bk1ldGFkYXRhID0gZnVuY3Rpb24gb3JkaW5hcnlIYXNPd25NZXRhZGF0YShNZXRhZGF0YUtleSwgTywgUCkge1xuICAgICAgdmFyIG1ldGFkYXRhTWFwID0gZ2V0T3JDcmVhdGVNZXRhZGF0YU1hcChPLCBQLCBmYWxzZSk7XG4gICAgICByZXR1cm4gbWV0YWRhdGFNYXAgPT09IHVuZGVmaW5lZCA/IGZhbHNlIDogbWV0YWRhdGFNYXAuaGFzKE1ldGFkYXRhS2V5KTtcbiAgICB9O1xuXG4gICAgdmFyIG9yZGluYXJ5R2V0T3duTWV0YWRhdGEgPSBmdW5jdGlvbiBvcmRpbmFyeUdldE93bk1ldGFkYXRhKE1ldGFkYXRhS2V5LCBPLCBQKSB7XG4gICAgICB2YXIgbWV0YWRhdGFNYXAgPSBnZXRPckNyZWF0ZU1ldGFkYXRhTWFwKE8sIFAsIGZhbHNlKTtcbiAgICAgIHJldHVybiBtZXRhZGF0YU1hcCA9PT0gdW5kZWZpbmVkID8gdW5kZWZpbmVkIDogbWV0YWRhdGFNYXAuZ2V0KE1ldGFkYXRhS2V5KTtcbiAgICB9O1xuXG4gICAgdmFyIG9yZGluYXJ5RGVmaW5lT3duTWV0YWRhdGEgPSBmdW5jdGlvbiBvcmRpbmFyeURlZmluZU93bk1ldGFkYXRhKE1ldGFkYXRhS2V5LCBNZXRhZGF0YVZhbHVlLCBPLCBQKSB7XG4gICAgICBnZXRPckNyZWF0ZU1ldGFkYXRhTWFwKE8sIFAsIHRydWUpLnNldChNZXRhZGF0YUtleSwgTWV0YWRhdGFWYWx1ZSk7XG4gICAgfTtcblxuICAgIHZhciBvcmRpbmFyeU93bk1ldGFkYXRhS2V5cyA9IGZ1bmN0aW9uIG9yZGluYXJ5T3duTWV0YWRhdGFLZXlzKHRhcmdldCwgdGFyZ2V0S2V5KSB7XG4gICAgICB2YXIgbWV0YWRhdGFNYXAgPSBnZXRPckNyZWF0ZU1ldGFkYXRhTWFwKHRhcmdldCwgdGFyZ2V0S2V5LCBmYWxzZSk7XG4gICAgICB2YXIga2V5cyA9IFtdO1xuICAgICAgaWYgKG1ldGFkYXRhTWFwKSBtZXRhZGF0YU1hcC5mb3JFYWNoKGZ1bmN0aW9uIChfLCBrZXkpIHtcbiAgICAgICAga2V5cy5wdXNoKGtleSk7XG4gICAgICB9KTtcbiAgICAgIHJldHVybiBrZXlzO1xuICAgIH07XG5cbiAgICB2YXIgdG9NZXRhS2V5ID0gZnVuY3Rpb24gdG9NZXRhS2V5KGl0KSB7XG4gICAgICByZXR1cm4gaXQgPT09IHVuZGVmaW5lZCB8fCBfdHlwZW9mKGl0KSA9PSAnc3ltYm9sJyA/IGl0IDogU3RyaW5nKGl0KTtcbiAgICB9O1xuXG4gICAgdmFyIGV4cCA9IGZ1bmN0aW9uIGV4cChPKSB7XG4gICAgICAkZXhwb3J0KCRleHBvcnQuUywgJ1JlZmxlY3QnLCBPKTtcbiAgICB9O1xuXG4gICAgbW9kdWxlLmV4cG9ydHMgPSB7XG4gICAgICBzdG9yZTogc3RvcmUsXG4gICAgICBtYXA6IGdldE9yQ3JlYXRlTWV0YWRhdGFNYXAsXG4gICAgICBoYXM6IG9yZGluYXJ5SGFzT3duTWV0YWRhdGEsXG4gICAgICBnZXQ6IG9yZGluYXJ5R2V0T3duTWV0YWRhdGEsXG4gICAgICBzZXQ6IG9yZGluYXJ5RGVmaW5lT3duTWV0YWRhdGEsXG4gICAgICBrZXlzOiBvcmRpbmFyeU93bk1ldGFkYXRhS2V5cyxcbiAgICAgIGtleTogdG9NZXRhS2V5LFxuICAgICAgZXhwOiBleHBcbiAgICB9O1xuICB9LCB7XG4gICAgXCIxMDNcIjogMTAzLFxuICAgIFwiMTYwXCI6IDE2MCxcbiAgICBcIjI2NlwiOiAyNjYsXG4gICAgXCIzM1wiOiAzM1xuICB9XSxcbiAgNjg6IFtmdW5jdGlvbiAoX2RlcmVxXywgbW9kdWxlLCBleHBvcnRzKSB7XG4gICAgdmFyIGdsb2JhbCA9IF9kZXJlcV8oNDApO1xuXG4gICAgdmFyIG1hY3JvdGFzayA9IF9kZXJlcV8oMTEzKS5zZXQ7XG5cbiAgICB2YXIgT2JzZXJ2ZXIgPSBnbG9iYWwuTXV0YXRpb25PYnNlcnZlciB8fCBnbG9iYWwuV2ViS2l0TXV0YXRpb25PYnNlcnZlcjtcbiAgICB2YXIgcHJvY2VzcyA9IGdsb2JhbC5wcm9jZXNzO1xuICAgIHZhciBQcm9taXNlID0gZ2xvYmFsLlByb21pc2U7XG4gICAgdmFyIGlzTm9kZSA9IF9kZXJlcV8oMTgpKHByb2Nlc3MpID09ICdwcm9jZXNzJztcblxuICAgIG1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKCkge1xuICAgICAgdmFyIGhlYWQsIGxhc3QsIG5vdGlmeTtcblxuICAgICAgdmFyIGZsdXNoID0gZnVuY3Rpb24gZmx1c2goKSB7XG4gICAgICAgIHZhciBwYXJlbnQsIGZuO1xuICAgICAgICBpZiAoaXNOb2RlICYmIChwYXJlbnQgPSBwcm9jZXNzLmRvbWFpbikpIHBhcmVudC5leGl0KCk7XG5cbiAgICAgICAgd2hpbGUgKGhlYWQpIHtcbiAgICAgICAgICBmbiA9IGhlYWQuZm47XG4gICAgICAgICAgaGVhZCA9IGhlYWQubmV4dDtcblxuICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICBmbigpO1xuICAgICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgIGlmIChoZWFkKSBub3RpZnkoKTtlbHNlIGxhc3QgPSB1bmRlZmluZWQ7XG4gICAgICAgICAgICB0aHJvdyBlO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGxhc3QgPSB1bmRlZmluZWQ7XG4gICAgICAgIGlmIChwYXJlbnQpIHBhcmVudC5lbnRlcigpO1xuICAgICAgfTsgLy8gTm9kZS5qc1xuXG5cbiAgICAgIGlmIChpc05vZGUpIHtcbiAgICAgICAgbm90aWZ5ID0gZnVuY3Rpb24gbm90aWZ5KCkge1xuICAgICAgICAgIHByb2Nlc3MubmV4dFRpY2soZmx1c2gpO1xuICAgICAgICB9OyAvLyBicm93c2VycyB3aXRoIE11dGF0aW9uT2JzZXJ2ZXJcblxuICAgICAgfSBlbHNlIGlmIChPYnNlcnZlcikge1xuICAgICAgICB2YXIgdG9nZ2xlID0gdHJ1ZTtcbiAgICAgICAgdmFyIG5vZGUgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZSgnJyk7XG4gICAgICAgIG5ldyBPYnNlcnZlcihmbHVzaCkub2JzZXJ2ZShub2RlLCB7XG4gICAgICAgICAgY2hhcmFjdGVyRGF0YTogdHJ1ZVxuICAgICAgICB9KTsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby1uZXdcblxuICAgICAgICBub3RpZnkgPSBmdW5jdGlvbiBub3RpZnkoKSB7XG4gICAgICAgICAgbm9kZS5kYXRhID0gdG9nZ2xlID0gIXRvZ2dsZTtcbiAgICAgICAgfTsgLy8gZW52aXJvbm1lbnRzIHdpdGggbWF5YmUgbm9uLWNvbXBsZXRlbHkgY29ycmVjdCwgYnV0IGV4aXN0ZW50IFByb21pc2VcblxuICAgICAgfSBlbHNlIGlmIChQcm9taXNlICYmIFByb21pc2UucmVzb2x2ZSkge1xuICAgICAgICB2YXIgcHJvbWlzZSA9IFByb21pc2UucmVzb2x2ZSgpO1xuXG4gICAgICAgIG5vdGlmeSA9IGZ1bmN0aW9uIG5vdGlmeSgpIHtcbiAgICAgICAgICBwcm9taXNlLnRoZW4oZmx1c2gpO1xuICAgICAgICB9OyAvLyBmb3Igb3RoZXIgZW52aXJvbm1lbnRzIC0gbWFjcm90YXNrIGJhc2VkIG9uOlxuICAgICAgICAvLyAtIHNldEltbWVkaWF0ZVxuICAgICAgICAvLyAtIE1lc3NhZ2VDaGFubmVsXG4gICAgICAgIC8vIC0gd2luZG93LnBvc3RNZXNzYWdcbiAgICAgICAgLy8gLSBvbnJlYWR5c3RhdGVjaGFuZ2VcbiAgICAgICAgLy8gLSBzZXRUaW1lb3V0XG5cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIG5vdGlmeSA9IGZ1bmN0aW9uIG5vdGlmeSgpIHtcbiAgICAgICAgICAvLyBzdHJhbmdlIElFICsgd2VicGFjayBkZXYgc2VydmVyIGJ1ZyAtIHVzZSAuY2FsbChnbG9iYWwpXG4gICAgICAgICAgbWFjcm90YXNrLmNhbGwoZ2xvYmFsLCBmbHVzaCk7XG4gICAgICAgIH07XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBmdW5jdGlvbiAoZm4pIHtcbiAgICAgICAgdmFyIHRhc2sgPSB7XG4gICAgICAgICAgZm46IGZuLFxuICAgICAgICAgIG5leHQ6IHVuZGVmaW5lZFxuICAgICAgICB9O1xuICAgICAgICBpZiAobGFzdCkgbGFzdC5uZXh0ID0gdGFzaztcblxuICAgICAgICBpZiAoIWhlYWQpIHtcbiAgICAgICAgICBoZWFkID0gdGFzaztcbiAgICAgICAgICBub3RpZnkoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGxhc3QgPSB0YXNrO1xuICAgICAgfTtcbiAgICB9O1xuICB9LCB7XG4gICAgXCIxMTNcIjogMTEzLFxuICAgIFwiMThcIjogMTgsXG4gICAgXCI0MFwiOiA0MFxuICB9XSxcbiAgNjk6IFtmdW5jdGlvbiAoX2RlcmVxXywgbW9kdWxlLCBleHBvcnRzKSB7XG4gICAgJ3VzZSBzdHJpY3QnOyAvLyAyNS40LjEuNSBOZXdQcm9taXNlQ2FwYWJpbGl0eShDKVxuXG4gICAgdmFyIGFGdW5jdGlvbiA9IF9kZXJlcV8oMyk7XG5cbiAgICBmdW5jdGlvbiBQcm9taXNlQ2FwYWJpbGl0eShDKSB7XG4gICAgICB2YXIgcmVzb2x2ZSwgcmVqZWN0O1xuICAgICAgdGhpcy5wcm9taXNlID0gbmV3IEMoZnVuY3Rpb24gKCQkcmVzb2x2ZSwgJCRyZWplY3QpIHtcbiAgICAgICAgaWYgKHJlc29sdmUgIT09IHVuZGVmaW5lZCB8fCByZWplY3QgIT09IHVuZGVmaW5lZCkgdGhyb3cgVHlwZUVycm9yKCdCYWQgUHJvbWlzZSBjb25zdHJ1Y3RvcicpO1xuICAgICAgICByZXNvbHZlID0gJCRyZXNvbHZlO1xuICAgICAgICByZWplY3QgPSAkJHJlamVjdDtcbiAgICAgIH0pO1xuICAgICAgdGhpcy5yZXNvbHZlID0gYUZ1bmN0aW9uKHJlc29sdmUpO1xuICAgICAgdGhpcy5yZWplY3QgPSBhRnVuY3Rpb24ocmVqZWN0KTtcbiAgICB9XG5cbiAgICBtb2R1bGUuZXhwb3J0cy5mID0gZnVuY3Rpb24gKEMpIHtcbiAgICAgIHJldHVybiBuZXcgUHJvbWlzZUNhcGFiaWxpdHkoQyk7XG4gICAgfTtcbiAgfSwge1xuICAgIFwiM1wiOiAzXG4gIH1dLFxuICA3MDogW2Z1bmN0aW9uIChfZGVyZXFfLCBtb2R1bGUsIGV4cG9ydHMpIHtcbiAgICAndXNlIHN0cmljdCc7IC8vIDE5LjEuMi4xIE9iamVjdC5hc3NpZ24odGFyZ2V0LCBzb3VyY2UsIC4uLilcblxuICAgIHZhciBnZXRLZXlzID0gX2RlcmVxXyg4MSk7XG5cbiAgICB2YXIgZ09QUyA9IF9kZXJlcV8oNzgpO1xuXG4gICAgdmFyIHBJRSA9IF9kZXJlcV8oODIpO1xuXG4gICAgdmFyIHRvT2JqZWN0ID0gX2RlcmVxXygxMTkpO1xuXG4gICAgdmFyIElPYmplY3QgPSBfZGVyZXFfKDQ3KTtcblxuICAgIHZhciAkYXNzaWduID0gT2JqZWN0LmFzc2lnbjsgLy8gc2hvdWxkIHdvcmsgd2l0aCBzeW1ib2xzIGFuZCBzaG91bGQgaGF2ZSBkZXRlcm1pbmlzdGljIHByb3BlcnR5IG9yZGVyIChWOCBidWcpXG5cbiAgICBtb2R1bGUuZXhwb3J0cyA9ICEkYXNzaWduIHx8IF9kZXJlcV8oMzUpKGZ1bmN0aW9uICgpIHtcbiAgICAgIHZhciBBID0ge307XG4gICAgICB2YXIgQiA9IHt9OyAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW5kZWZcblxuICAgICAgdmFyIFMgPSBTeW1ib2woKTtcbiAgICAgIHZhciBLID0gJ2FiY2RlZmdoaWprbG1ub3BxcnN0JztcbiAgICAgIEFbU10gPSA3O1xuICAgICAgSy5zcGxpdCgnJykuZm9yRWFjaChmdW5jdGlvbiAoaykge1xuICAgICAgICBCW2tdID0gaztcbiAgICAgIH0pO1xuICAgICAgcmV0dXJuICRhc3NpZ24oe30sIEEpW1NdICE9IDcgfHwgT2JqZWN0LmtleXMoJGFzc2lnbih7fSwgQikpLmpvaW4oJycpICE9IEs7XG4gICAgfSkgPyBmdW5jdGlvbiBhc3NpZ24odGFyZ2V0LCBzb3VyY2UpIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tdW51c2VkLXZhcnNcbiAgICAgIHZhciBUID0gdG9PYmplY3QodGFyZ2V0KTtcbiAgICAgIHZhciBhTGVuID0gYXJndW1lbnRzLmxlbmd0aDtcbiAgICAgIHZhciBpbmRleCA9IDE7XG4gICAgICB2YXIgZ2V0U3ltYm9scyA9IGdPUFMuZjtcbiAgICAgIHZhciBpc0VudW0gPSBwSUUuZjtcblxuICAgICAgd2hpbGUgKGFMZW4gPiBpbmRleCkge1xuICAgICAgICB2YXIgUyA9IElPYmplY3QoYXJndW1lbnRzW2luZGV4KytdKTtcbiAgICAgICAgdmFyIGtleXMgPSBnZXRTeW1ib2xzID8gZ2V0S2V5cyhTKS5jb25jYXQoZ2V0U3ltYm9scyhTKSkgOiBnZXRLZXlzKFMpO1xuICAgICAgICB2YXIgbGVuZ3RoID0ga2V5cy5sZW5ndGg7XG4gICAgICAgIHZhciBqID0gMDtcbiAgICAgICAgdmFyIGtleTtcblxuICAgICAgICB3aGlsZSAobGVuZ3RoID4gaikge1xuICAgICAgICAgIGlmIChpc0VudW0uY2FsbChTLCBrZXkgPSBrZXlzW2orK10pKSBUW2tleV0gPSBTW2tleV07XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgcmV0dXJuIFQ7XG4gICAgfSA6ICRhc3NpZ247XG4gIH0sIHtcbiAgICBcIjExOVwiOiAxMTksXG4gICAgXCIzNVwiOiAzNSxcbiAgICBcIjQ3XCI6IDQ3LFxuICAgIFwiNzhcIjogNzgsXG4gICAgXCI4MVwiOiA4MSxcbiAgICBcIjgyXCI6IDgyXG4gIH1dLFxuICA3MTogW2Z1bmN0aW9uIChfZGVyZXFfLCBtb2R1bGUsIGV4cG9ydHMpIHtcbiAgICAvLyAxOS4xLjIuMiAvIDE1LjIuMy41IE9iamVjdC5jcmVhdGUoTyBbLCBQcm9wZXJ0aWVzXSlcbiAgICB2YXIgYW5PYmplY3QgPSBfZGVyZXFfKDcpO1xuXG4gICAgdmFyIGRQcyA9IF9kZXJlcV8oNzMpO1xuXG4gICAgdmFyIGVudW1CdWdLZXlzID0gX2RlcmVxXygzMSk7XG5cbiAgICB2YXIgSUVfUFJPVE8gPSBfZGVyZXFfKDEwMikoJ0lFX1BST1RPJyk7XG5cbiAgICB2YXIgRW1wdHkgPSBmdW5jdGlvbiBFbXB0eSgpIHtcbiAgICAgIC8qIGVtcHR5ICovXG4gICAgfTtcblxuICAgIHZhciBQUk9UT1RZUEUgPSAncHJvdG90eXBlJzsgLy8gQ3JlYXRlIG9iamVjdCB3aXRoIGZha2UgYG51bGxgIHByb3RvdHlwZTogdXNlIGlmcmFtZSBPYmplY3Qgd2l0aCBjbGVhcmVkIHByb3RvdHlwZVxuXG4gICAgdmFyIF9jcmVhdGVEaWN0ID0gZnVuY3Rpb24gY3JlYXRlRGljdCgpIHtcbiAgICAgIC8vIFRocmFzaCwgd2FzdGUgYW5kIHNvZG9teTogSUUgR0MgYnVnXG4gICAgICB2YXIgaWZyYW1lID0gX2RlcmVxXygzMCkoJ2lmcmFtZScpO1xuXG4gICAgICB2YXIgaSA9IGVudW1CdWdLZXlzLmxlbmd0aDtcbiAgICAgIHZhciBsdCA9ICc8JztcbiAgICAgIHZhciBndCA9ICc+JztcbiAgICAgIHZhciBpZnJhbWVEb2N1bWVudDtcbiAgICAgIGlmcmFtZS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuXG4gICAgICBfZGVyZXFfKDQzKS5hcHBlbmRDaGlsZChpZnJhbWUpO1xuXG4gICAgICBpZnJhbWUuc3JjID0gJ2phdmFzY3JpcHQ6JzsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby1zY3JpcHQtdXJsXG4gICAgICAvLyBjcmVhdGVEaWN0ID0gaWZyYW1lLmNvbnRlbnRXaW5kb3cuT2JqZWN0O1xuICAgICAgLy8gaHRtbC5yZW1vdmVDaGlsZChpZnJhbWUpO1xuXG4gICAgICBpZnJhbWVEb2N1bWVudCA9IGlmcmFtZS5jb250ZW50V2luZG93LmRvY3VtZW50O1xuICAgICAgaWZyYW1lRG9jdW1lbnQub3BlbigpO1xuICAgICAgaWZyYW1lRG9jdW1lbnQud3JpdGUobHQgKyAnc2NyaXB0JyArIGd0ICsgJ2RvY3VtZW50LkY9T2JqZWN0JyArIGx0ICsgJy9zY3JpcHQnICsgZ3QpO1xuICAgICAgaWZyYW1lRG9jdW1lbnQuY2xvc2UoKTtcbiAgICAgIF9jcmVhdGVEaWN0ID0gaWZyYW1lRG9jdW1lbnQuRjtcblxuICAgICAgd2hpbGUgKGktLSkge1xuICAgICAgICBkZWxldGUgX2NyZWF0ZURpY3RbUFJPVE9UWVBFXVtlbnVtQnVnS2V5c1tpXV07XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBfY3JlYXRlRGljdCgpO1xuICAgIH07XG5cbiAgICBtb2R1bGUuZXhwb3J0cyA9IE9iamVjdC5jcmVhdGUgfHwgZnVuY3Rpb24gY3JlYXRlKE8sIFByb3BlcnRpZXMpIHtcbiAgICAgIHZhciByZXN1bHQ7XG5cbiAgICAgIGlmIChPICE9PSBudWxsKSB7XG4gICAgICAgIEVtcHR5W1BST1RPVFlQRV0gPSBhbk9iamVjdChPKTtcbiAgICAgICAgcmVzdWx0ID0gbmV3IEVtcHR5KCk7XG4gICAgICAgIEVtcHR5W1BST1RPVFlQRV0gPSBudWxsOyAvLyBhZGQgXCJfX3Byb3RvX19cIiBmb3IgT2JqZWN0LmdldFByb3RvdHlwZU9mIHBvbHlmaWxsXG5cbiAgICAgICAgcmVzdWx0W0lFX1BST1RPXSA9IE87XG4gICAgICB9IGVsc2UgcmVzdWx0ID0gX2NyZWF0ZURpY3QoKTtcblxuICAgICAgcmV0dXJuIFByb3BlcnRpZXMgPT09IHVuZGVmaW5lZCA/IHJlc3VsdCA6IGRQcyhyZXN1bHQsIFByb3BlcnRpZXMpO1xuICAgIH07XG4gIH0sIHtcbiAgICBcIjEwMlwiOiAxMDIsXG4gICAgXCIzMFwiOiAzMCxcbiAgICBcIjMxXCI6IDMxLFxuICAgIFwiNDNcIjogNDMsXG4gICAgXCI3XCI6IDcsXG4gICAgXCI3M1wiOiA3M1xuICB9XSxcbiAgNzI6IFtmdW5jdGlvbiAoX2RlcmVxXywgbW9kdWxlLCBleHBvcnRzKSB7XG4gICAgdmFyIGFuT2JqZWN0ID0gX2RlcmVxXyg3KTtcblxuICAgIHZhciBJRThfRE9NX0RFRklORSA9IF9kZXJlcV8oNDQpO1xuXG4gICAgdmFyIHRvUHJpbWl0aXZlID0gX2RlcmVxXygxMjApO1xuXG4gICAgdmFyIGRQID0gT2JqZWN0LmRlZmluZVByb3BlcnR5O1xuICAgIGV4cG9ydHMuZiA9IF9kZXJlcV8oMjkpID8gT2JqZWN0LmRlZmluZVByb3BlcnR5IDogZnVuY3Rpb24gZGVmaW5lUHJvcGVydHkoTywgUCwgQXR0cmlidXRlcykge1xuICAgICAgYW5PYmplY3QoTyk7XG4gICAgICBQID0gdG9QcmltaXRpdmUoUCwgdHJ1ZSk7XG4gICAgICBhbk9iamVjdChBdHRyaWJ1dGVzKTtcbiAgICAgIGlmIChJRThfRE9NX0RFRklORSkgdHJ5IHtcbiAgICAgICAgcmV0dXJuIGRQKE8sIFAsIEF0dHJpYnV0ZXMpO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvKiBlbXB0eSAqL1xuICAgICAgfVxuICAgICAgaWYgKCdnZXQnIGluIEF0dHJpYnV0ZXMgfHwgJ3NldCcgaW4gQXR0cmlidXRlcykgdGhyb3cgVHlwZUVycm9yKCdBY2Nlc3NvcnMgbm90IHN1cHBvcnRlZCEnKTtcbiAgICAgIGlmICgndmFsdWUnIGluIEF0dHJpYnV0ZXMpIE9bUF0gPSBBdHRyaWJ1dGVzLnZhbHVlO1xuICAgICAgcmV0dXJuIE87XG4gICAgfTtcbiAgfSwge1xuICAgIFwiMTIwXCI6IDEyMCxcbiAgICBcIjI5XCI6IDI5LFxuICAgIFwiNDRcIjogNDQsXG4gICAgXCI3XCI6IDdcbiAgfV0sXG4gIDczOiBbZnVuY3Rpb24gKF9kZXJlcV8sIG1vZHVsZSwgZXhwb3J0cykge1xuICAgIHZhciBkUCA9IF9kZXJlcV8oNzIpO1xuXG4gICAgdmFyIGFuT2JqZWN0ID0gX2RlcmVxXyg3KTtcblxuICAgIHZhciBnZXRLZXlzID0gX2RlcmVxXyg4MSk7XG5cbiAgICBtb2R1bGUuZXhwb3J0cyA9IF9kZXJlcV8oMjkpID8gT2JqZWN0LmRlZmluZVByb3BlcnRpZXMgOiBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0aWVzKE8sIFByb3BlcnRpZXMpIHtcbiAgICAgIGFuT2JqZWN0KE8pO1xuICAgICAgdmFyIGtleXMgPSBnZXRLZXlzKFByb3BlcnRpZXMpO1xuICAgICAgdmFyIGxlbmd0aCA9IGtleXMubGVuZ3RoO1xuICAgICAgdmFyIGkgPSAwO1xuICAgICAgdmFyIFA7XG5cbiAgICAgIHdoaWxlIChsZW5ndGggPiBpKSB7XG4gICAgICAgIGRQLmYoTywgUCA9IGtleXNbaSsrXSwgUHJvcGVydGllc1tQXSk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBPO1xuICAgIH07XG4gIH0sIHtcbiAgICBcIjI5XCI6IDI5LFxuICAgIFwiN1wiOiA3LFxuICAgIFwiNzJcIjogNzIsXG4gICAgXCI4MVwiOiA4MVxuICB9XSxcbiAgNzQ6IFtmdW5jdGlvbiAoX2RlcmVxXywgbW9kdWxlLCBleHBvcnRzKSB7XG4gICAgJ3VzZSBzdHJpY3QnOyAvLyBGb3JjZWQgcmVwbGFjZW1lbnQgcHJvdG90eXBlIGFjY2Vzc29ycyBtZXRob2RzXG5cbiAgICBtb2R1bGUuZXhwb3J0cyA9IF9kZXJlcV8oNjApIHx8ICFfZGVyZXFfKDM1KShmdW5jdGlvbiAoKSB7XG4gICAgICB2YXIgSyA9IE1hdGgucmFuZG9tKCk7IC8vIEluIEZGIHRocm93cyBvbmx5IGRlZmluZSBtZXRob2RzXG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW5kZWYsIG5vLXVzZWxlc3MtY2FsbFxuXG4gICAgICBfX2RlZmluZVNldHRlcl9fLmNhbGwobnVsbCwgSywgZnVuY3Rpb24gKCkge1xuICAgICAgICAvKiBlbXB0eSAqL1xuICAgICAgfSk7XG5cbiAgICAgIGRlbGV0ZSBfZGVyZXFfKDQwKVtLXTtcbiAgICB9KTtcbiAgfSwge1xuICAgIFwiMzVcIjogMzUsXG4gICAgXCI0MFwiOiA0MCxcbiAgICBcIjYwXCI6IDYwXG4gIH1dLFxuICA3NTogW2Z1bmN0aW9uIChfZGVyZXFfLCBtb2R1bGUsIGV4cG9ydHMpIHtcbiAgICB2YXIgcElFID0gX2RlcmVxXyg4Mik7XG5cbiAgICB2YXIgY3JlYXRlRGVzYyA9IF9kZXJlcV8oOTIpO1xuXG4gICAgdmFyIHRvSU9iamVjdCA9IF9kZXJlcV8oMTE3KTtcblxuICAgIHZhciB0b1ByaW1pdGl2ZSA9IF9kZXJlcV8oMTIwKTtcblxuICAgIHZhciBoYXMgPSBfZGVyZXFfKDQxKTtcblxuICAgIHZhciBJRThfRE9NX0RFRklORSA9IF9kZXJlcV8oNDQpO1xuXG4gICAgdmFyIGdPUEQgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yO1xuICAgIGV4cG9ydHMuZiA9IF9kZXJlcV8oMjkpID8gZ09QRCA6IGZ1bmN0aW9uIGdldE93blByb3BlcnR5RGVzY3JpcHRvcihPLCBQKSB7XG4gICAgICBPID0gdG9JT2JqZWN0KE8pO1xuICAgICAgUCA9IHRvUHJpbWl0aXZlKFAsIHRydWUpO1xuICAgICAgaWYgKElFOF9ET01fREVGSU5FKSB0cnkge1xuICAgICAgICByZXR1cm4gZ09QRChPLCBQKTtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLyogZW1wdHkgKi9cbiAgICAgIH1cbiAgICAgIGlmIChoYXMoTywgUCkpIHJldHVybiBjcmVhdGVEZXNjKCFwSUUuZi5jYWxsKE8sIFApLCBPW1BdKTtcbiAgICB9O1xuICB9LCB7XG4gICAgXCIxMTdcIjogMTE3LFxuICAgIFwiMTIwXCI6IDEyMCxcbiAgICBcIjI5XCI6IDI5LFxuICAgIFwiNDFcIjogNDEsXG4gICAgXCI0NFwiOiA0NCxcbiAgICBcIjgyXCI6IDgyLFxuICAgIFwiOTJcIjogOTJcbiAgfV0sXG4gIDc2OiBbZnVuY3Rpb24gKF9kZXJlcV8sIG1vZHVsZSwgZXhwb3J0cykge1xuICAgIC8vIGZhbGxiYWNrIGZvciBJRTExIGJ1Z2d5IE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzIHdpdGggaWZyYW1lIGFuZCB3aW5kb3dcbiAgICB2YXIgdG9JT2JqZWN0ID0gX2RlcmVxXygxMTcpO1xuXG4gICAgdmFyIGdPUE4gPSBfZGVyZXFfKDc3KS5mO1xuXG4gICAgdmFyIHRvU3RyaW5nID0ge30udG9TdHJpbmc7XG4gICAgdmFyIHdpbmRvd05hbWVzID0gKHR5cGVvZiB3aW5kb3cgPT09IFwidW5kZWZpbmVkXCIgPyBcInVuZGVmaW5lZFwiIDogX3R5cGVvZih3aW5kb3cpKSA9PSAnb2JqZWN0JyAmJiB3aW5kb3cgJiYgT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMgPyBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyh3aW5kb3cpIDogW107XG5cbiAgICB2YXIgZ2V0V2luZG93TmFtZXMgPSBmdW5jdGlvbiBnZXRXaW5kb3dOYW1lcyhpdCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgcmV0dXJuIGdPUE4oaXQpO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICByZXR1cm4gd2luZG93TmFtZXMuc2xpY2UoKTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgbW9kdWxlLmV4cG9ydHMuZiA9IGZ1bmN0aW9uIGdldE93blByb3BlcnR5TmFtZXMoaXQpIHtcbiAgICAgIHJldHVybiB3aW5kb3dOYW1lcyAmJiB0b1N0cmluZy5jYWxsKGl0KSA9PSAnW29iamVjdCBXaW5kb3ddJyA/IGdldFdpbmRvd05hbWVzKGl0KSA6IGdPUE4odG9JT2JqZWN0KGl0KSk7XG4gICAgfTtcbiAgfSwge1xuICAgIFwiMTE3XCI6IDExNyxcbiAgICBcIjc3XCI6IDc3XG4gIH1dLFxuICA3NzogW2Z1bmN0aW9uIChfZGVyZXFfLCBtb2R1bGUsIGV4cG9ydHMpIHtcbiAgICAvLyAxOS4xLjIuNyAvIDE1LjIuMy40IE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKE8pXG4gICAgdmFyICRrZXlzID0gX2RlcmVxXyg4MCk7XG5cbiAgICB2YXIgaGlkZGVuS2V5cyA9IF9kZXJlcV8oMzEpLmNvbmNhdCgnbGVuZ3RoJywgJ3Byb3RvdHlwZScpO1xuXG4gICAgZXhwb3J0cy5mID0gT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMgfHwgZnVuY3Rpb24gZ2V0T3duUHJvcGVydHlOYW1lcyhPKSB7XG4gICAgICByZXR1cm4gJGtleXMoTywgaGlkZGVuS2V5cyk7XG4gICAgfTtcbiAgfSwge1xuICAgIFwiMzFcIjogMzEsXG4gICAgXCI4MFwiOiA4MFxuICB9XSxcbiAgNzg6IFtmdW5jdGlvbiAoX2RlcmVxXywgbW9kdWxlLCBleHBvcnRzKSB7XG4gICAgZXhwb3J0cy5mID0gT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scztcbiAgfSwge31dLFxuICA3OTogW2Z1bmN0aW9uIChfZGVyZXFfLCBtb2R1bGUsIGV4cG9ydHMpIHtcbiAgICAvLyAxOS4xLjIuOSAvIDE1LjIuMy4yIE9iamVjdC5nZXRQcm90b3R5cGVPZihPKVxuICAgIHZhciBoYXMgPSBfZGVyZXFfKDQxKTtcblxuICAgIHZhciB0b09iamVjdCA9IF9kZXJlcV8oMTE5KTtcblxuICAgIHZhciBJRV9QUk9UTyA9IF9kZXJlcV8oMTAyKSgnSUVfUFJPVE8nKTtcblxuICAgIHZhciBPYmplY3RQcm90byA9IE9iamVjdC5wcm90b3R5cGU7XG5cbiAgICBtb2R1bGUuZXhwb3J0cyA9IE9iamVjdC5nZXRQcm90b3R5cGVPZiB8fCBmdW5jdGlvbiAoTykge1xuICAgICAgTyA9IHRvT2JqZWN0KE8pO1xuICAgICAgaWYgKGhhcyhPLCBJRV9QUk9UTykpIHJldHVybiBPW0lFX1BST1RPXTtcblxuICAgICAgaWYgKHR5cGVvZiBPLmNvbnN0cnVjdG9yID09ICdmdW5jdGlvbicgJiYgTyBpbnN0YW5jZW9mIE8uY29uc3RydWN0b3IpIHtcbiAgICAgICAgcmV0dXJuIE8uY29uc3RydWN0b3IucHJvdG90eXBlO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gTyBpbnN0YW5jZW9mIE9iamVjdCA/IE9iamVjdFByb3RvIDogbnVsbDtcbiAgICB9O1xuICB9LCB7XG4gICAgXCIxMDJcIjogMTAyLFxuICAgIFwiMTE5XCI6IDExOSxcbiAgICBcIjQxXCI6IDQxXG4gIH1dLFxuICA4MDogW2Z1bmN0aW9uIChfZGVyZXFfLCBtb2R1bGUsIGV4cG9ydHMpIHtcbiAgICB2YXIgaGFzID0gX2RlcmVxXyg0MSk7XG5cbiAgICB2YXIgdG9JT2JqZWN0ID0gX2RlcmVxXygxMTcpO1xuXG4gICAgdmFyIGFycmF5SW5kZXhPZiA9IF9kZXJlcV8oMTEpKGZhbHNlKTtcblxuICAgIHZhciBJRV9QUk9UTyA9IF9kZXJlcV8oMTAyKSgnSUVfUFJPVE8nKTtcblxuICAgIG1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKG9iamVjdCwgbmFtZXMpIHtcbiAgICAgIHZhciBPID0gdG9JT2JqZWN0KG9iamVjdCk7XG4gICAgICB2YXIgaSA9IDA7XG4gICAgICB2YXIgcmVzdWx0ID0gW107XG4gICAgICB2YXIga2V5O1xuXG4gICAgICBmb3IgKGtleSBpbiBPKSB7XG4gICAgICAgIGlmIChrZXkgIT0gSUVfUFJPVE8pIGhhcyhPLCBrZXkpICYmIHJlc3VsdC5wdXNoKGtleSk7XG4gICAgICB9IC8vIERvbid0IGVudW0gYnVnICYgaGlkZGVuIGtleXNcblxuXG4gICAgICB3aGlsZSAobmFtZXMubGVuZ3RoID4gaSkge1xuICAgICAgICBpZiAoaGFzKE8sIGtleSA9IG5hbWVzW2krK10pKSB7XG4gICAgICAgICAgfmFycmF5SW5kZXhPZihyZXN1bHQsIGtleSkgfHwgcmVzdWx0LnB1c2goa2V5KTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH07XG4gIH0sIHtcbiAgICBcIjEwMlwiOiAxMDIsXG4gICAgXCIxMVwiOiAxMSxcbiAgICBcIjExN1wiOiAxMTcsXG4gICAgXCI0MVwiOiA0MVxuICB9XSxcbiAgODE6IFtmdW5jdGlvbiAoX2RlcmVxXywgbW9kdWxlLCBleHBvcnRzKSB7XG4gICAgLy8gMTkuMS4yLjE0IC8gMTUuMi4zLjE0IE9iamVjdC5rZXlzKE8pXG4gICAgdmFyICRrZXlzID0gX2RlcmVxXyg4MCk7XG5cbiAgICB2YXIgZW51bUJ1Z0tleXMgPSBfZGVyZXFfKDMxKTtcblxuICAgIG1vZHVsZS5leHBvcnRzID0gT2JqZWN0LmtleXMgfHwgZnVuY3Rpb24ga2V5cyhPKSB7XG4gICAgICByZXR1cm4gJGtleXMoTywgZW51bUJ1Z0tleXMpO1xuICAgIH07XG4gIH0sIHtcbiAgICBcIjMxXCI6IDMxLFxuICAgIFwiODBcIjogODBcbiAgfV0sXG4gIDgyOiBbZnVuY3Rpb24gKF9kZXJlcV8sIG1vZHVsZSwgZXhwb3J0cykge1xuICAgIGV4cG9ydHMuZiA9IHt9LnByb3BlcnR5SXNFbnVtZXJhYmxlO1xuICB9LCB7fV0sXG4gIDgzOiBbZnVuY3Rpb24gKF9kZXJlcV8sIG1vZHVsZSwgZXhwb3J0cykge1xuICAgIC8vIG1vc3QgT2JqZWN0IG1ldGhvZHMgYnkgRVM2IHNob3VsZCBhY2NlcHQgcHJpbWl0aXZlc1xuICAgIHZhciAkZXhwb3J0ID0gX2RlcmVxXygzMyk7XG5cbiAgICB2YXIgY29yZSA9IF9kZXJlcV8oMjMpO1xuXG4gICAgdmFyIGZhaWxzID0gX2RlcmVxXygzNSk7XG5cbiAgICBtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChLRVksIGV4ZWMpIHtcbiAgICAgIHZhciBmbiA9IChjb3JlLk9iamVjdCB8fCB7fSlbS0VZXSB8fCBPYmplY3RbS0VZXTtcbiAgICAgIHZhciBleHAgPSB7fTtcbiAgICAgIGV4cFtLRVldID0gZXhlYyhmbik7XG4gICAgICAkZXhwb3J0KCRleHBvcnQuUyArICRleHBvcnQuRiAqIGZhaWxzKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgZm4oMSk7XG4gICAgICB9KSwgJ09iamVjdCcsIGV4cCk7XG4gICAgfTtcbiAgfSwge1xuICAgIFwiMjNcIjogMjMsXG4gICAgXCIzM1wiOiAzMyxcbiAgICBcIjM1XCI6IDM1XG4gIH1dLFxuICA4NDogW2Z1bmN0aW9uIChfZGVyZXFfLCBtb2R1bGUsIGV4cG9ydHMpIHtcbiAgICB2YXIgZ2V0S2V5cyA9IF9kZXJlcV8oODEpO1xuXG4gICAgdmFyIHRvSU9iamVjdCA9IF9kZXJlcV8oMTE3KTtcblxuICAgIHZhciBpc0VudW0gPSBfZGVyZXFfKDgyKS5mO1xuXG4gICAgbW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXNFbnRyaWVzKSB7XG4gICAgICByZXR1cm4gZnVuY3Rpb24gKGl0KSB7XG4gICAgICAgIHZhciBPID0gdG9JT2JqZWN0KGl0KTtcbiAgICAgICAgdmFyIGtleXMgPSBnZXRLZXlzKE8pO1xuICAgICAgICB2YXIgbGVuZ3RoID0ga2V5cy5sZW5ndGg7XG4gICAgICAgIHZhciBpID0gMDtcbiAgICAgICAgdmFyIHJlc3VsdCA9IFtdO1xuICAgICAgICB2YXIga2V5O1xuXG4gICAgICAgIHdoaWxlIChsZW5ndGggPiBpKSB7XG4gICAgICAgICAgaWYgKGlzRW51bS5jYWxsKE8sIGtleSA9IGtleXNbaSsrXSkpIHtcbiAgICAgICAgICAgIHJlc3VsdC5wdXNoKGlzRW50cmllcyA/IFtrZXksIE9ba2V5XV0gOiBPW2tleV0pO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgICB9O1xuICAgIH07XG4gIH0sIHtcbiAgICBcIjExN1wiOiAxMTcsXG4gICAgXCI4MVwiOiA4MSxcbiAgICBcIjgyXCI6IDgyXG4gIH1dLFxuICA4NTogW2Z1bmN0aW9uIChfZGVyZXFfLCBtb2R1bGUsIGV4cG9ydHMpIHtcbiAgICAvLyBhbGwgb2JqZWN0IGtleXMsIGluY2x1ZGVzIG5vbi1lbnVtZXJhYmxlIGFuZCBzeW1ib2xzXG4gICAgdmFyIGdPUE4gPSBfZGVyZXFfKDc3KTtcblxuICAgIHZhciBnT1BTID0gX2RlcmVxXyg3OCk7XG5cbiAgICB2YXIgYW5PYmplY3QgPSBfZGVyZXFfKDcpO1xuXG4gICAgdmFyIFJlZmxlY3QgPSBfZGVyZXFfKDQwKS5SZWZsZWN0O1xuXG4gICAgbW9kdWxlLmV4cG9ydHMgPSBSZWZsZWN0ICYmIFJlZmxlY3Qub3duS2V5cyB8fCBmdW5jdGlvbiBvd25LZXlzKGl0KSB7XG4gICAgICB2YXIga2V5cyA9IGdPUE4uZihhbk9iamVjdChpdCkpO1xuICAgICAgdmFyIGdldFN5bWJvbHMgPSBnT1BTLmY7XG4gICAgICByZXR1cm4gZ2V0U3ltYm9scyA/IGtleXMuY29uY2F0KGdldFN5bWJvbHMoaXQpKSA6IGtleXM7XG4gICAgfTtcbiAgfSwge1xuICAgIFwiNDBcIjogNDAsXG4gICAgXCI3XCI6IDcsXG4gICAgXCI3N1wiOiA3NyxcbiAgICBcIjc4XCI6IDc4XG4gIH1dLFxuICA4NjogW2Z1bmN0aW9uIChfZGVyZXFfLCBtb2R1bGUsIGV4cG9ydHMpIHtcbiAgICB2YXIgJHBhcnNlRmxvYXQgPSBfZGVyZXFfKDQwKS5wYXJzZUZsb2F0O1xuXG4gICAgdmFyICR0cmltID0gX2RlcmVxXygxMTEpLnRyaW07XG5cbiAgICBtb2R1bGUuZXhwb3J0cyA9IDEgLyAkcGFyc2VGbG9hdChfZGVyZXFfKDExMikgKyAnLTAnKSAhPT0gLUluZmluaXR5ID8gZnVuY3Rpb24gcGFyc2VGbG9hdChzdHIpIHtcbiAgICAgIHZhciBzdHJpbmcgPSAkdHJpbShTdHJpbmcoc3RyKSwgMyk7XG4gICAgICB2YXIgcmVzdWx0ID0gJHBhcnNlRmxvYXQoc3RyaW5nKTtcbiAgICAgIHJldHVybiByZXN1bHQgPT09IDAgJiYgc3RyaW5nLmNoYXJBdCgwKSA9PSAnLScgPyAtMCA6IHJlc3VsdDtcbiAgICB9IDogJHBhcnNlRmxvYXQ7XG4gIH0sIHtcbiAgICBcIjExMVwiOiAxMTEsXG4gICAgXCIxMTJcIjogMTEyLFxuICAgIFwiNDBcIjogNDBcbiAgfV0sXG4gIDg3OiBbZnVuY3Rpb24gKF9kZXJlcV8sIG1vZHVsZSwgZXhwb3J0cykge1xuICAgIHZhciAkcGFyc2VJbnQgPSBfZGVyZXFfKDQwKS5wYXJzZUludDtcblxuICAgIHZhciAkdHJpbSA9IF9kZXJlcV8oMTExKS50cmltO1xuXG4gICAgdmFyIHdzID0gX2RlcmVxXygxMTIpO1xuXG4gICAgdmFyIGhleCA9IC9eWy0rXT8wW3hYXS87XG4gICAgbW9kdWxlLmV4cG9ydHMgPSAkcGFyc2VJbnQod3MgKyAnMDgnKSAhPT0gOCB8fCAkcGFyc2VJbnQod3MgKyAnMHgxNicpICE9PSAyMiA/IGZ1bmN0aW9uIHBhcnNlSW50KHN0ciwgcmFkaXgpIHtcbiAgICAgIHZhciBzdHJpbmcgPSAkdHJpbShTdHJpbmcoc3RyKSwgMyk7XG4gICAgICByZXR1cm4gJHBhcnNlSW50KHN0cmluZywgcmFkaXggPj4+IDAgfHwgKGhleC50ZXN0KHN0cmluZykgPyAxNiA6IDEwKSk7XG4gICAgfSA6ICRwYXJzZUludDtcbiAgfSwge1xuICAgIFwiMTExXCI6IDExMSxcbiAgICBcIjExMlwiOiAxMTIsXG4gICAgXCI0MFwiOiA0MFxuICB9XSxcbiAgODg6IFtmdW5jdGlvbiAoX2RlcmVxXywgbW9kdWxlLCBleHBvcnRzKSB7XG4gICAgJ3VzZSBzdHJpY3QnO1xuXG4gICAgdmFyIHBhdGggPSBfZGVyZXFfKDg5KTtcblxuICAgIHZhciBpbnZva2UgPSBfZGVyZXFfKDQ2KTtcblxuICAgIHZhciBhRnVuY3Rpb24gPSBfZGVyZXFfKDMpO1xuXG4gICAgbW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoKSB7XG4gICAgICB2YXIgZm4gPSBhRnVuY3Rpb24odGhpcyk7XG4gICAgICB2YXIgbGVuZ3RoID0gYXJndW1lbnRzLmxlbmd0aDtcbiAgICAgIHZhciBwYXJncyA9IEFycmF5KGxlbmd0aCk7XG4gICAgICB2YXIgaSA9IDA7XG4gICAgICB2YXIgXyA9IHBhdGguXztcbiAgICAgIHZhciBob2xkZXIgPSBmYWxzZTtcblxuICAgICAgd2hpbGUgKGxlbmd0aCA+IGkpIHtcbiAgICAgICAgaWYgKChwYXJnc1tpXSA9IGFyZ3VtZW50c1tpKytdKSA9PT0gXykgaG9sZGVyID0gdHJ1ZTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIHRoYXQgPSB0aGlzO1xuICAgICAgICB2YXIgYUxlbiA9IGFyZ3VtZW50cy5sZW5ndGg7XG4gICAgICAgIHZhciBqID0gMDtcbiAgICAgICAgdmFyIGsgPSAwO1xuICAgICAgICB2YXIgYXJncztcbiAgICAgICAgaWYgKCFob2xkZXIgJiYgIWFMZW4pIHJldHVybiBpbnZva2UoZm4sIHBhcmdzLCB0aGF0KTtcbiAgICAgICAgYXJncyA9IHBhcmdzLnNsaWNlKCk7XG4gICAgICAgIGlmIChob2xkZXIpIGZvciAoOyBsZW5ndGggPiBqOyBqKyspIHtcbiAgICAgICAgICBpZiAoYXJnc1tqXSA9PT0gXykgYXJnc1tqXSA9IGFyZ3VtZW50c1trKytdO1xuICAgICAgICB9XG5cbiAgICAgICAgd2hpbGUgKGFMZW4gPiBrKSB7XG4gICAgICAgICAgYXJncy5wdXNoKGFyZ3VtZW50c1trKytdKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBpbnZva2UoZm4sIGFyZ3MsIHRoYXQpO1xuICAgICAgfTtcbiAgICB9O1xuICB9LCB7XG4gICAgXCIzXCI6IDMsXG4gICAgXCI0NlwiOiA0NixcbiAgICBcIjg5XCI6IDg5XG4gIH1dLFxuICA4OTogW2Z1bmN0aW9uIChfZGVyZXFfLCBtb2R1bGUsIGV4cG9ydHMpIHtcbiAgICBtb2R1bGUuZXhwb3J0cyA9IF9kZXJlcV8oNDApO1xuICB9LCB7XG4gICAgXCI0MFwiOiA0MFxuICB9XSxcbiAgOTA6IFtmdW5jdGlvbiAoX2RlcmVxXywgbW9kdWxlLCBleHBvcnRzKSB7XG4gICAgbW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoZXhlYykge1xuICAgICAgdHJ5IHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICBlOiBmYWxzZSxcbiAgICAgICAgICB2OiBleGVjKClcbiAgICAgICAgfTtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICBlOiB0cnVlLFxuICAgICAgICAgIHY6IGVcbiAgICAgICAgfTtcbiAgICAgIH1cbiAgICB9O1xuICB9LCB7fV0sXG4gIDkxOiBbZnVuY3Rpb24gKF9kZXJlcV8sIG1vZHVsZSwgZXhwb3J0cykge1xuICAgIHZhciBuZXdQcm9taXNlQ2FwYWJpbGl0eSA9IF9kZXJlcV8oNjkpO1xuXG4gICAgbW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoQywgeCkge1xuICAgICAgdmFyIHByb21pc2VDYXBhYmlsaXR5ID0gbmV3UHJvbWlzZUNhcGFiaWxpdHkuZihDKTtcbiAgICAgIHZhciByZXNvbHZlID0gcHJvbWlzZUNhcGFiaWxpdHkucmVzb2x2ZTtcbiAgICAgIHJlc29sdmUoeCk7XG4gICAgICByZXR1cm4gcHJvbWlzZUNhcGFiaWxpdHkucHJvbWlzZTtcbiAgICB9O1xuICB9LCB7XG4gICAgXCI2OVwiOiA2OVxuICB9XSxcbiAgOTI6IFtmdW5jdGlvbiAoX2RlcmVxXywgbW9kdWxlLCBleHBvcnRzKSB7XG4gICAgbW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoYml0bWFwLCB2YWx1ZSkge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgZW51bWVyYWJsZTogIShiaXRtYXAgJiAxKSxcbiAgICAgICAgY29uZmlndXJhYmxlOiAhKGJpdG1hcCAmIDIpLFxuICAgICAgICB3cml0YWJsZTogIShiaXRtYXAgJiA0KSxcbiAgICAgICAgdmFsdWU6IHZhbHVlXG4gICAgICB9O1xuICAgIH07XG4gIH0sIHt9XSxcbiAgOTM6IFtmdW5jdGlvbiAoX2RlcmVxXywgbW9kdWxlLCBleHBvcnRzKSB7XG4gICAgdmFyIHJlZGVmaW5lID0gX2RlcmVxXyg5NCk7XG5cbiAgICBtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh0YXJnZXQsIHNyYywgc2FmZSkge1xuICAgICAgZm9yICh2YXIga2V5IGluIHNyYykge1xuICAgICAgICByZWRlZmluZSh0YXJnZXQsIGtleSwgc3JjW2tleV0sIHNhZmUpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gdGFyZ2V0O1xuICAgIH07XG4gIH0sIHtcbiAgICBcIjk0XCI6IDk0XG4gIH1dLFxuICA5NDogW2Z1bmN0aW9uIChfZGVyZXFfLCBtb2R1bGUsIGV4cG9ydHMpIHtcbiAgICB2YXIgZ2xvYmFsID0gX2RlcmVxXyg0MCk7XG5cbiAgICB2YXIgaGlkZSA9IF9kZXJlcV8oNDIpO1xuXG4gICAgdmFyIGhhcyA9IF9kZXJlcV8oNDEpO1xuXG4gICAgdmFyIFNSQyA9IF9kZXJlcV8oMTI0KSgnc3JjJyk7XG5cbiAgICB2YXIgVE9fU1RSSU5HID0gJ3RvU3RyaW5nJztcbiAgICB2YXIgJHRvU3RyaW5nID0gRnVuY3Rpb25bVE9fU1RSSU5HXTtcbiAgICB2YXIgVFBMID0gKCcnICsgJHRvU3RyaW5nKS5zcGxpdChUT19TVFJJTkcpO1xuXG4gICAgX2RlcmVxXygyMykuaW5zcGVjdFNvdXJjZSA9IGZ1bmN0aW9uIChpdCkge1xuICAgICAgcmV0dXJuICR0b1N0cmluZy5jYWxsKGl0KTtcbiAgICB9O1xuXG4gICAgKG1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKE8sIGtleSwgdmFsLCBzYWZlKSB7XG4gICAgICB2YXIgaXNGdW5jdGlvbiA9IHR5cGVvZiB2YWwgPT0gJ2Z1bmN0aW9uJztcbiAgICAgIGlmIChpc0Z1bmN0aW9uKSBoYXModmFsLCAnbmFtZScpIHx8IGhpZGUodmFsLCAnbmFtZScsIGtleSk7XG4gICAgICBpZiAoT1trZXldID09PSB2YWwpIHJldHVybjtcbiAgICAgIGlmIChpc0Z1bmN0aW9uKSBoYXModmFsLCBTUkMpIHx8IGhpZGUodmFsLCBTUkMsIE9ba2V5XSA/ICcnICsgT1trZXldIDogVFBMLmpvaW4oU3RyaW5nKGtleSkpKTtcblxuICAgICAgaWYgKE8gPT09IGdsb2JhbCkge1xuICAgICAgICBPW2tleV0gPSB2YWw7XG4gICAgICB9IGVsc2UgaWYgKCFzYWZlKSB7XG4gICAgICAgIGRlbGV0ZSBPW2tleV07XG4gICAgICAgIGhpZGUoTywga2V5LCB2YWwpO1xuICAgICAgfSBlbHNlIGlmIChPW2tleV0pIHtcbiAgICAgICAgT1trZXldID0gdmFsO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaGlkZShPLCBrZXksIHZhbCk7XG4gICAgICB9IC8vIGFkZCBmYWtlIEZ1bmN0aW9uI3RvU3RyaW5nIGZvciBjb3JyZWN0IHdvcmsgd3JhcHBlZCBtZXRob2RzIC8gY29uc3RydWN0b3JzIHdpdGggbWV0aG9kcyBsaWtlIExvRGFzaCBpc05hdGl2ZVxuXG4gICAgfSkoRnVuY3Rpb24ucHJvdG90eXBlLCBUT19TVFJJTkcsIGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgICAgcmV0dXJuIHR5cGVvZiB0aGlzID09ICdmdW5jdGlvbicgJiYgdGhpc1tTUkNdIHx8ICR0b1N0cmluZy5jYWxsKHRoaXMpO1xuICAgIH0pO1xuICB9LCB7XG4gICAgXCIxMjRcIjogMTI0LFxuICAgIFwiMjNcIjogMjMsXG4gICAgXCI0MFwiOiA0MCxcbiAgICBcIjQxXCI6IDQxLFxuICAgIFwiNDJcIjogNDJcbiAgfV0sXG4gIDk1OiBbZnVuY3Rpb24gKF9kZXJlcV8sIG1vZHVsZSwgZXhwb3J0cykge1xuICAgIG1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHJlZ0V4cCwgcmVwbGFjZSkge1xuICAgICAgdmFyIHJlcGxhY2VyID0gcmVwbGFjZSA9PT0gT2JqZWN0KHJlcGxhY2UpID8gZnVuY3Rpb24gKHBhcnQpIHtcbiAgICAgICAgcmV0dXJuIHJlcGxhY2VbcGFydF07XG4gICAgICB9IDogcmVwbGFjZTtcbiAgICAgIHJldHVybiBmdW5jdGlvbiAoaXQpIHtcbiAgICAgICAgcmV0dXJuIFN0cmluZyhpdCkucmVwbGFjZShyZWdFeHAsIHJlcGxhY2VyKTtcbiAgICAgIH07XG4gICAgfTtcbiAgfSwge31dLFxuICA5NjogW2Z1bmN0aW9uIChfZGVyZXFfLCBtb2R1bGUsIGV4cG9ydHMpIHtcbiAgICAvLyA3LjIuOSBTYW1lVmFsdWUoeCwgeSlcbiAgICBtb2R1bGUuZXhwb3J0cyA9IE9iamVjdC5pcyB8fCBmdW5jdGlvbiBpcyh4LCB5KSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tc2VsZi1jb21wYXJlXG4gICAgICByZXR1cm4geCA9PT0geSA/IHggIT09IDAgfHwgMSAvIHggPT09IDEgLyB5IDogeCAhPSB4ICYmIHkgIT0geTtcbiAgICB9O1xuICB9LCB7fV0sXG4gIDk3OiBbZnVuY3Rpb24gKF9kZXJlcV8sIG1vZHVsZSwgZXhwb3J0cykge1xuICAgICd1c2Ugc3RyaWN0JzsgLy8gaHR0cHM6Ly90YzM5LmdpdGh1Yi5pby9wcm9wb3NhbC1zZXRtYXAtb2Zmcm9tL1xuXG4gICAgdmFyICRleHBvcnQgPSBfZGVyZXFfKDMzKTtcblxuICAgIHZhciBhRnVuY3Rpb24gPSBfZGVyZXFfKDMpO1xuXG4gICAgdmFyIGN0eCA9IF9kZXJlcV8oMjUpO1xuXG4gICAgdmFyIGZvck9mID0gX2RlcmVxXygzOSk7XG5cbiAgICBtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChDT0xMRUNUSU9OKSB7XG4gICAgICAkZXhwb3J0KCRleHBvcnQuUywgQ09MTEVDVElPTiwge1xuICAgICAgICBmcm9tOiBmdW5jdGlvbiBmcm9tKHNvdXJjZVxuICAgICAgICAvKiAsIG1hcEZuLCB0aGlzQXJnICovXG4gICAgICAgICkge1xuICAgICAgICAgIHZhciBtYXBGbiA9IGFyZ3VtZW50c1sxXTtcbiAgICAgICAgICB2YXIgbWFwcGluZywgQSwgbiwgY2I7XG4gICAgICAgICAgYUZ1bmN0aW9uKHRoaXMpO1xuICAgICAgICAgIG1hcHBpbmcgPSBtYXBGbiAhPT0gdW5kZWZpbmVkO1xuICAgICAgICAgIGlmIChtYXBwaW5nKSBhRnVuY3Rpb24obWFwRm4pO1xuICAgICAgICAgIGlmIChzb3VyY2UgPT0gdW5kZWZpbmVkKSByZXR1cm4gbmV3IHRoaXMoKTtcbiAgICAgICAgICBBID0gW107XG5cbiAgICAgICAgICBpZiAobWFwcGluZykge1xuICAgICAgICAgICAgbiA9IDA7XG4gICAgICAgICAgICBjYiA9IGN0eChtYXBGbiwgYXJndW1lbnRzWzJdLCAyKTtcbiAgICAgICAgICAgIGZvck9mKHNvdXJjZSwgZmFsc2UsIGZ1bmN0aW9uIChuZXh0SXRlbSkge1xuICAgICAgICAgICAgICBBLnB1c2goY2IobmV4dEl0ZW0sIG4rKykpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGZvck9mKHNvdXJjZSwgZmFsc2UsIEEucHVzaCwgQSk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgcmV0dXJuIG5ldyB0aGlzKEEpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9O1xuICB9LCB7XG4gICAgXCIyNVwiOiAyNSxcbiAgICBcIjNcIjogMyxcbiAgICBcIjMzXCI6IDMzLFxuICAgIFwiMzlcIjogMzlcbiAgfV0sXG4gIDk4OiBbZnVuY3Rpb24gKF9kZXJlcV8sIG1vZHVsZSwgZXhwb3J0cykge1xuICAgICd1c2Ugc3RyaWN0JzsgLy8gaHR0cHM6Ly90YzM5LmdpdGh1Yi5pby9wcm9wb3NhbC1zZXRtYXAtb2Zmcm9tL1xuXG4gICAgdmFyICRleHBvcnQgPSBfZGVyZXFfKDMzKTtcblxuICAgIG1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKENPTExFQ1RJT04pIHtcbiAgICAgICRleHBvcnQoJGV4cG9ydC5TLCBDT0xMRUNUSU9OLCB7XG4gICAgICAgIG9mOiBmdW5jdGlvbiBvZigpIHtcbiAgICAgICAgICB2YXIgbGVuZ3RoID0gYXJndW1lbnRzLmxlbmd0aDtcbiAgICAgICAgICB2YXIgQSA9IEFycmF5KGxlbmd0aCk7XG5cbiAgICAgICAgICB3aGlsZSAobGVuZ3RoLS0pIHtcbiAgICAgICAgICAgIEFbbGVuZ3RoXSA9IGFyZ3VtZW50c1tsZW5ndGhdO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHJldHVybiBuZXcgdGhpcyhBKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfTtcbiAgfSwge1xuICAgIFwiMzNcIjogMzNcbiAgfV0sXG4gIDk5OiBbZnVuY3Rpb24gKF9kZXJlcV8sIG1vZHVsZSwgZXhwb3J0cykge1xuICAgIC8vIFdvcmtzIHdpdGggX19wcm90b19fIG9ubHkuIE9sZCB2OCBjYW4ndCB3b3JrIHdpdGggbnVsbCBwcm90byBvYmplY3RzLlxuXG4gICAgLyogZXNsaW50LWRpc2FibGUgbm8tcHJvdG8gKi9cbiAgICB2YXIgaXNPYmplY3QgPSBfZGVyZXFfKDUxKTtcblxuICAgIHZhciBhbk9iamVjdCA9IF9kZXJlcV8oNyk7XG5cbiAgICB2YXIgY2hlY2sgPSBmdW5jdGlvbiBjaGVjayhPLCBwcm90bykge1xuICAgICAgYW5PYmplY3QoTyk7XG4gICAgICBpZiAoIWlzT2JqZWN0KHByb3RvKSAmJiBwcm90byAhPT0gbnVsbCkgdGhyb3cgVHlwZUVycm9yKHByb3RvICsgXCI6IGNhbid0IHNldCBhcyBwcm90b3R5cGUhXCIpO1xuICAgIH07XG5cbiAgICBtb2R1bGUuZXhwb3J0cyA9IHtcbiAgICAgIHNldDogT2JqZWN0LnNldFByb3RvdHlwZU9mIHx8ICgnX19wcm90b19fJyBpbiB7fSA/IC8vIGVzbGludC1kaXNhYmxlLWxpbmVcbiAgICAgIGZ1bmN0aW9uICh0ZXN0LCBidWdneSwgc2V0KSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgc2V0ID0gX2RlcmVxXygyNSkoRnVuY3Rpb24uY2FsbCwgX2RlcmVxXyg3NSkuZihPYmplY3QucHJvdG90eXBlLCAnX19wcm90b19fJykuc2V0LCAyKTtcbiAgICAgICAgICBzZXQodGVzdCwgW10pO1xuICAgICAgICAgIGJ1Z2d5ID0gISh0ZXN0IGluc3RhbmNlb2YgQXJyYXkpO1xuICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgYnVnZ3kgPSB0cnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGZ1bmN0aW9uIHNldFByb3RvdHlwZU9mKE8sIHByb3RvKSB7XG4gICAgICAgICAgY2hlY2soTywgcHJvdG8pO1xuICAgICAgICAgIGlmIChidWdneSkgTy5fX3Byb3RvX18gPSBwcm90bztlbHNlIHNldChPLCBwcm90byk7XG4gICAgICAgICAgcmV0dXJuIE87XG4gICAgICAgIH07XG4gICAgICB9KHt9LCBmYWxzZSkgOiB1bmRlZmluZWQpLFxuICAgICAgY2hlY2s6IGNoZWNrXG4gICAgfTtcbiAgfSwge1xuICAgIFwiMjVcIjogMjUsXG4gICAgXCI1MVwiOiA1MSxcbiAgICBcIjdcIjogNyxcbiAgICBcIjc1XCI6IDc1XG4gIH1dLFxuICAxMDA6IFtmdW5jdGlvbiAoX2RlcmVxXywgbW9kdWxlLCBleHBvcnRzKSB7XG4gICAgJ3VzZSBzdHJpY3QnO1xuXG4gICAgdmFyIGdsb2JhbCA9IF9kZXJlcV8oNDApO1xuXG4gICAgdmFyIGRQID0gX2RlcmVxXyg3Mik7XG5cbiAgICB2YXIgREVTQ1JJUFRPUlMgPSBfZGVyZXFfKDI5KTtcblxuICAgIHZhciBTUEVDSUVTID0gX2RlcmVxXygxMjgpKCdzcGVjaWVzJyk7XG5cbiAgICBtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChLRVkpIHtcbiAgICAgIHZhciBDID0gZ2xvYmFsW0tFWV07XG4gICAgICBpZiAoREVTQ1JJUFRPUlMgJiYgQyAmJiAhQ1tTUEVDSUVTXSkgZFAuZihDLCBTUEVDSUVTLCB7XG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH07XG4gIH0sIHtcbiAgICBcIjEyOFwiOiAxMjgsXG4gICAgXCIyOVwiOiAyOSxcbiAgICBcIjQwXCI6IDQwLFxuICAgIFwiNzJcIjogNzJcbiAgfV0sXG4gIDEwMTogW2Z1bmN0aW9uIChfZGVyZXFfLCBtb2R1bGUsIGV4cG9ydHMpIHtcbiAgICB2YXIgZGVmID0gX2RlcmVxXyg3MikuZjtcblxuICAgIHZhciBoYXMgPSBfZGVyZXFfKDQxKTtcblxuICAgIHZhciBUQUcgPSBfZGVyZXFfKDEyOCkoJ3RvU3RyaW5nVGFnJyk7XG5cbiAgICBtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCwgdGFnLCBzdGF0KSB7XG4gICAgICBpZiAoaXQgJiYgIWhhcyhpdCA9IHN0YXQgPyBpdCA6IGl0LnByb3RvdHlwZSwgVEFHKSkgZGVmKGl0LCBUQUcsIHtcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgICAgICB2YWx1ZTogdGFnXG4gICAgICB9KTtcbiAgICB9O1xuICB9LCB7XG4gICAgXCIxMjhcIjogMTI4LFxuICAgIFwiNDFcIjogNDEsXG4gICAgXCI3MlwiOiA3MlxuICB9XSxcbiAgMTAyOiBbZnVuY3Rpb24gKF9kZXJlcV8sIG1vZHVsZSwgZXhwb3J0cykge1xuICAgIHZhciBzaGFyZWQgPSBfZGVyZXFfKDEwMykoJ2tleXMnKTtcblxuICAgIHZhciB1aWQgPSBfZGVyZXFfKDEyNCk7XG5cbiAgICBtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChrZXkpIHtcbiAgICAgIHJldHVybiBzaGFyZWRba2V5XSB8fCAoc2hhcmVkW2tleV0gPSB1aWQoa2V5KSk7XG4gICAgfTtcbiAgfSwge1xuICAgIFwiMTAzXCI6IDEwMyxcbiAgICBcIjEyNFwiOiAxMjRcbiAgfV0sXG4gIDEwMzogW2Z1bmN0aW9uIChfZGVyZXFfLCBtb2R1bGUsIGV4cG9ydHMpIHtcbiAgICB2YXIgZ2xvYmFsID0gX2RlcmVxXyg0MCk7XG5cbiAgICB2YXIgU0hBUkVEID0gJ19fY29yZS1qc19zaGFyZWRfXyc7XG4gICAgdmFyIHN0b3JlID0gZ2xvYmFsW1NIQVJFRF0gfHwgKGdsb2JhbFtTSEFSRURdID0ge30pO1xuXG4gICAgbW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoa2V5KSB7XG4gICAgICByZXR1cm4gc3RvcmVba2V5XSB8fCAoc3RvcmVba2V5XSA9IHt9KTtcbiAgICB9O1xuICB9LCB7XG4gICAgXCI0MFwiOiA0MFxuICB9XSxcbiAgMTA0OiBbZnVuY3Rpb24gKF9kZXJlcV8sIG1vZHVsZSwgZXhwb3J0cykge1xuICAgIC8vIDcuMy4yMCBTcGVjaWVzQ29uc3RydWN0b3IoTywgZGVmYXVsdENvbnN0cnVjdG9yKVxuICAgIHZhciBhbk9iamVjdCA9IF9kZXJlcV8oNyk7XG5cbiAgICB2YXIgYUZ1bmN0aW9uID0gX2RlcmVxXygzKTtcblxuICAgIHZhciBTUEVDSUVTID0gX2RlcmVxXygxMjgpKCdzcGVjaWVzJyk7XG5cbiAgICBtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChPLCBEKSB7XG4gICAgICB2YXIgQyA9IGFuT2JqZWN0KE8pLmNvbnN0cnVjdG9yO1xuICAgICAgdmFyIFM7XG4gICAgICByZXR1cm4gQyA9PT0gdW5kZWZpbmVkIHx8IChTID0gYW5PYmplY3QoQylbU1BFQ0lFU10pID09IHVuZGVmaW5lZCA/IEQgOiBhRnVuY3Rpb24oUyk7XG4gICAgfTtcbiAgfSwge1xuICAgIFwiMTI4XCI6IDEyOCxcbiAgICBcIjNcIjogMyxcbiAgICBcIjdcIjogN1xuICB9XSxcbiAgMTA1OiBbZnVuY3Rpb24gKF9kZXJlcV8sIG1vZHVsZSwgZXhwb3J0cykge1xuICAgICd1c2Ugc3RyaWN0JztcblxuICAgIHZhciBmYWlscyA9IF9kZXJlcV8oMzUpO1xuXG4gICAgbW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobWV0aG9kLCBhcmcpIHtcbiAgICAgIHJldHVybiAhIW1ldGhvZCAmJiBmYWlscyhmdW5jdGlvbiAoKSB7XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11c2VsZXNzLWNhbGxcbiAgICAgICAgYXJnID8gbWV0aG9kLmNhbGwobnVsbCwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgIC8qIGVtcHR5ICovXG4gICAgICAgIH0sIDEpIDogbWV0aG9kLmNhbGwobnVsbCk7XG4gICAgICB9KTtcbiAgICB9O1xuICB9LCB7XG4gICAgXCIzNVwiOiAzNVxuICB9XSxcbiAgMTA2OiBbZnVuY3Rpb24gKF9kZXJlcV8sIG1vZHVsZSwgZXhwb3J0cykge1xuICAgIHZhciB0b0ludGVnZXIgPSBfZGVyZXFfKDExNik7XG5cbiAgICB2YXIgZGVmaW5lZCA9IF9kZXJlcV8oMjgpOyAvLyB0cnVlICAtPiBTdHJpbmcjYXRcbiAgICAvLyBmYWxzZSAtPiBTdHJpbmcjY29kZVBvaW50QXRcblxuXG4gICAgbW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoVE9fU1RSSU5HKSB7XG4gICAgICByZXR1cm4gZnVuY3Rpb24gKHRoYXQsIHBvcykge1xuICAgICAgICB2YXIgcyA9IFN0cmluZyhkZWZpbmVkKHRoYXQpKTtcbiAgICAgICAgdmFyIGkgPSB0b0ludGVnZXIocG9zKTtcbiAgICAgICAgdmFyIGwgPSBzLmxlbmd0aDtcbiAgICAgICAgdmFyIGEsIGI7XG4gICAgICAgIGlmIChpIDwgMCB8fCBpID49IGwpIHJldHVybiBUT19TVFJJTkcgPyAnJyA6IHVuZGVmaW5lZDtcbiAgICAgICAgYSA9IHMuY2hhckNvZGVBdChpKTtcbiAgICAgICAgcmV0dXJuIGEgPCAweGQ4MDAgfHwgYSA+IDB4ZGJmZiB8fCBpICsgMSA9PT0gbCB8fCAoYiA9IHMuY2hhckNvZGVBdChpICsgMSkpIDwgMHhkYzAwIHx8IGIgPiAweGRmZmYgPyBUT19TVFJJTkcgPyBzLmNoYXJBdChpKSA6IGEgOiBUT19TVFJJTkcgPyBzLnNsaWNlKGksIGkgKyAyKSA6IChhIC0gMHhkODAwIDw8IDEwKSArIChiIC0gMHhkYzAwKSArIDB4MTAwMDA7XG4gICAgICB9O1xuICAgIH07XG4gIH0sIHtcbiAgICBcIjExNlwiOiAxMTYsXG4gICAgXCIyOFwiOiAyOFxuICB9XSxcbiAgMTA3OiBbZnVuY3Rpb24gKF9kZXJlcV8sIG1vZHVsZSwgZXhwb3J0cykge1xuICAgIC8vIGhlbHBlciBmb3IgU3RyaW5nI3tzdGFydHNXaXRoLCBlbmRzV2l0aCwgaW5jbHVkZXN9XG4gICAgdmFyIGlzUmVnRXhwID0gX2RlcmVxXyg1Mik7XG5cbiAgICB2YXIgZGVmaW5lZCA9IF9kZXJlcV8oMjgpO1xuXG4gICAgbW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodGhhdCwgc2VhcmNoU3RyaW5nLCBOQU1FKSB7XG4gICAgICBpZiAoaXNSZWdFeHAoc2VhcmNoU3RyaW5nKSkgdGhyb3cgVHlwZUVycm9yKCdTdHJpbmcjJyArIE5BTUUgKyBcIiBkb2Vzbid0IGFjY2VwdCByZWdleCFcIik7XG4gICAgICByZXR1cm4gU3RyaW5nKGRlZmluZWQodGhhdCkpO1xuICAgIH07XG4gIH0sIHtcbiAgICBcIjI4XCI6IDI4LFxuICAgIFwiNTJcIjogNTJcbiAgfV0sXG4gIDEwODogW2Z1bmN0aW9uIChfZGVyZXFfLCBtb2R1bGUsIGV4cG9ydHMpIHtcbiAgICB2YXIgJGV4cG9ydCA9IF9kZXJlcV8oMzMpO1xuXG4gICAgdmFyIGZhaWxzID0gX2RlcmVxXygzNSk7XG5cbiAgICB2YXIgZGVmaW5lZCA9IF9kZXJlcV8oMjgpO1xuXG4gICAgdmFyIHF1b3QgPSAvXCIvZzsgLy8gQi4yLjMuMi4xIENyZWF0ZUhUTUwoc3RyaW5nLCB0YWcsIGF0dHJpYnV0ZSwgdmFsdWUpXG5cbiAgICB2YXIgY3JlYXRlSFRNTCA9IGZ1bmN0aW9uIGNyZWF0ZUhUTUwoc3RyaW5nLCB0YWcsIGF0dHJpYnV0ZSwgdmFsdWUpIHtcbiAgICAgIHZhciBTID0gU3RyaW5nKGRlZmluZWQoc3RyaW5nKSk7XG4gICAgICB2YXIgcDEgPSAnPCcgKyB0YWc7XG4gICAgICBpZiAoYXR0cmlidXRlICE9PSAnJykgcDEgKz0gJyAnICsgYXR0cmlidXRlICsgJz1cIicgKyBTdHJpbmcodmFsdWUpLnJlcGxhY2UocXVvdCwgJyZxdW90OycpICsgJ1wiJztcbiAgICAgIHJldHVybiBwMSArICc+JyArIFMgKyAnPC8nICsgdGFnICsgJz4nO1xuICAgIH07XG5cbiAgICBtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChOQU1FLCBleGVjKSB7XG4gICAgICB2YXIgTyA9IHt9O1xuICAgICAgT1tOQU1FXSA9IGV4ZWMoY3JlYXRlSFRNTCk7XG4gICAgICAkZXhwb3J0KCRleHBvcnQuUCArICRleHBvcnQuRiAqIGZhaWxzKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIHRlc3QgPSAnJ1tOQU1FXSgnXCInKTtcbiAgICAgICAgcmV0dXJuIHRlc3QgIT09IHRlc3QudG9Mb3dlckNhc2UoKSB8fCB0ZXN0LnNwbGl0KCdcIicpLmxlbmd0aCA+IDM7XG4gICAgICB9KSwgJ1N0cmluZycsIE8pO1xuICAgIH07XG4gIH0sIHtcbiAgICBcIjI4XCI6IDI4LFxuICAgIFwiMzNcIjogMzMsXG4gICAgXCIzNVwiOiAzNVxuICB9XSxcbiAgMTA5OiBbZnVuY3Rpb24gKF9kZXJlcV8sIG1vZHVsZSwgZXhwb3J0cykge1xuICAgIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS90YzM5L3Byb3Bvc2FsLXN0cmluZy1wYWQtc3RhcnQtZW5kXG4gICAgdmFyIHRvTGVuZ3RoID0gX2RlcmVxXygxMTgpO1xuXG4gICAgdmFyIHJlcGVhdCA9IF9kZXJlcV8oMTEwKTtcblxuICAgIHZhciBkZWZpbmVkID0gX2RlcmVxXygyOCk7XG5cbiAgICBtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh0aGF0LCBtYXhMZW5ndGgsIGZpbGxTdHJpbmcsIGxlZnQpIHtcbiAgICAgIHZhciBTID0gU3RyaW5nKGRlZmluZWQodGhhdCkpO1xuICAgICAgdmFyIHN0cmluZ0xlbmd0aCA9IFMubGVuZ3RoO1xuICAgICAgdmFyIGZpbGxTdHIgPSBmaWxsU3RyaW5nID09PSB1bmRlZmluZWQgPyAnICcgOiBTdHJpbmcoZmlsbFN0cmluZyk7XG4gICAgICB2YXIgaW50TWF4TGVuZ3RoID0gdG9MZW5ndGgobWF4TGVuZ3RoKTtcbiAgICAgIGlmIChpbnRNYXhMZW5ndGggPD0gc3RyaW5nTGVuZ3RoIHx8IGZpbGxTdHIgPT0gJycpIHJldHVybiBTO1xuICAgICAgdmFyIGZpbGxMZW4gPSBpbnRNYXhMZW5ndGggLSBzdHJpbmdMZW5ndGg7XG4gICAgICB2YXIgc3RyaW5nRmlsbGVyID0gcmVwZWF0LmNhbGwoZmlsbFN0ciwgTWF0aC5jZWlsKGZpbGxMZW4gLyBmaWxsU3RyLmxlbmd0aCkpO1xuICAgICAgaWYgKHN0cmluZ0ZpbGxlci5sZW5ndGggPiBmaWxsTGVuKSBzdHJpbmdGaWxsZXIgPSBzdHJpbmdGaWxsZXIuc2xpY2UoMCwgZmlsbExlbik7XG4gICAgICByZXR1cm4gbGVmdCA/IHN0cmluZ0ZpbGxlciArIFMgOiBTICsgc3RyaW5nRmlsbGVyO1xuICAgIH07XG4gIH0sIHtcbiAgICBcIjExMFwiOiAxMTAsXG4gICAgXCIxMThcIjogMTE4LFxuICAgIFwiMjhcIjogMjhcbiAgfV0sXG4gIDExMDogW2Z1bmN0aW9uIChfZGVyZXFfLCBtb2R1bGUsIGV4cG9ydHMpIHtcbiAgICAndXNlIHN0cmljdCc7XG5cbiAgICB2YXIgdG9JbnRlZ2VyID0gX2RlcmVxXygxMTYpO1xuXG4gICAgdmFyIGRlZmluZWQgPSBfZGVyZXFfKDI4KTtcblxuICAgIG1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gcmVwZWF0KGNvdW50KSB7XG4gICAgICB2YXIgc3RyID0gU3RyaW5nKGRlZmluZWQodGhpcykpO1xuICAgICAgdmFyIHJlcyA9ICcnO1xuICAgICAgdmFyIG4gPSB0b0ludGVnZXIoY291bnQpO1xuICAgICAgaWYgKG4gPCAwIHx8IG4gPT0gSW5maW5pdHkpIHRocm93IFJhbmdlRXJyb3IoXCJDb3VudCBjYW4ndCBiZSBuZWdhdGl2ZVwiKTtcblxuICAgICAgZm9yICg7IG4gPiAwOyAobiA+Pj49IDEpICYmIChzdHIgKz0gc3RyKSkge1xuICAgICAgICBpZiAobiAmIDEpIHJlcyArPSBzdHI7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiByZXM7XG4gICAgfTtcbiAgfSwge1xuICAgIFwiMTE2XCI6IDExNixcbiAgICBcIjI4XCI6IDI4XG4gIH1dLFxuICAxMTE6IFtmdW5jdGlvbiAoX2RlcmVxXywgbW9kdWxlLCBleHBvcnRzKSB7XG4gICAgdmFyICRleHBvcnQgPSBfZGVyZXFfKDMzKTtcblxuICAgIHZhciBkZWZpbmVkID0gX2RlcmVxXygyOCk7XG5cbiAgICB2YXIgZmFpbHMgPSBfZGVyZXFfKDM1KTtcblxuICAgIHZhciBzcGFjZXMgPSBfZGVyZXFfKDExMik7XG5cbiAgICB2YXIgc3BhY2UgPSAnWycgKyBzcGFjZXMgKyAnXSc7XG4gICAgdmFyIG5vbiA9IFwiXFx1MjAwQlxceDg1XCI7XG4gICAgdmFyIGx0cmltID0gUmVnRXhwKCdeJyArIHNwYWNlICsgc3BhY2UgKyAnKicpO1xuICAgIHZhciBydHJpbSA9IFJlZ0V4cChzcGFjZSArIHNwYWNlICsgJyokJyk7XG5cbiAgICB2YXIgZXhwb3J0ZXIgPSBmdW5jdGlvbiBleHBvcnRlcihLRVksIGV4ZWMsIEFMSUFTKSB7XG4gICAgICB2YXIgZXhwID0ge307XG4gICAgICB2YXIgRk9SQ0UgPSBmYWlscyhmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiAhIXNwYWNlc1tLRVldKCkgfHwgbm9uW0tFWV0oKSAhPSBub247XG4gICAgICB9KTtcbiAgICAgIHZhciBmbiA9IGV4cFtLRVldID0gRk9SQ0UgPyBleGVjKHRyaW0pIDogc3BhY2VzW0tFWV07XG4gICAgICBpZiAoQUxJQVMpIGV4cFtBTElBU10gPSBmbjtcbiAgICAgICRleHBvcnQoJGV4cG9ydC5QICsgJGV4cG9ydC5GICogRk9SQ0UsICdTdHJpbmcnLCBleHApO1xuICAgIH07IC8vIDEgLT4gU3RyaW5nI3RyaW1MZWZ0XG4gICAgLy8gMiAtPiBTdHJpbmcjdHJpbVJpZ2h0XG4gICAgLy8gMyAtPiBTdHJpbmcjdHJpbVxuXG5cbiAgICB2YXIgdHJpbSA9IGV4cG9ydGVyLnRyaW0gPSBmdW5jdGlvbiAoc3RyaW5nLCBUWVBFKSB7XG4gICAgICBzdHJpbmcgPSBTdHJpbmcoZGVmaW5lZChzdHJpbmcpKTtcbiAgICAgIGlmIChUWVBFICYgMSkgc3RyaW5nID0gc3RyaW5nLnJlcGxhY2UobHRyaW0sICcnKTtcbiAgICAgIGlmIChUWVBFICYgMikgc3RyaW5nID0gc3RyaW5nLnJlcGxhY2UocnRyaW0sICcnKTtcbiAgICAgIHJldHVybiBzdHJpbmc7XG4gICAgfTtcblxuICAgIG1vZHVsZS5leHBvcnRzID0gZXhwb3J0ZXI7XG4gIH0sIHtcbiAgICBcIjExMlwiOiAxMTIsXG4gICAgXCIyOFwiOiAyOCxcbiAgICBcIjMzXCI6IDMzLFxuICAgIFwiMzVcIjogMzVcbiAgfV0sXG4gIDExMjogW2Z1bmN0aW9uIChfZGVyZXFfLCBtb2R1bGUsIGV4cG9ydHMpIHtcbiAgICBtb2R1bGUuZXhwb3J0cyA9IFwiXFx0XFxuXFx4MEJcXGZcXHIgXFx4QTBcXHUxNjgwXFx1MTgwRVxcdTIwMDBcXHUyMDAxXFx1MjAwMlxcdTIwMDNcIiArIFwiXFx1MjAwNFxcdTIwMDVcXHUyMDA2XFx1MjAwN1xcdTIwMDhcXHUyMDA5XFx1MjAwQVxcdTIwMkZcXHUyMDVGXFx1MzAwMFxcdTIwMjhcXHUyMDI5XFx1RkVGRlwiO1xuICB9LCB7fV0sXG4gIDExMzogW2Z1bmN0aW9uIChfZGVyZXFfLCBtb2R1bGUsIGV4cG9ydHMpIHtcbiAgICB2YXIgY3R4ID0gX2RlcmVxXygyNSk7XG5cbiAgICB2YXIgaW52b2tlID0gX2RlcmVxXyg0Nik7XG5cbiAgICB2YXIgaHRtbCA9IF9kZXJlcV8oNDMpO1xuXG4gICAgdmFyIGNlbCA9IF9kZXJlcV8oMzApO1xuXG4gICAgdmFyIGdsb2JhbCA9IF9kZXJlcV8oNDApO1xuXG4gICAgdmFyIHByb2Nlc3MgPSBnbG9iYWwucHJvY2VzcztcbiAgICB2YXIgc2V0VGFzayA9IGdsb2JhbC5zZXRJbW1lZGlhdGU7XG4gICAgdmFyIGNsZWFyVGFzayA9IGdsb2JhbC5jbGVhckltbWVkaWF0ZTtcbiAgICB2YXIgTWVzc2FnZUNoYW5uZWwgPSBnbG9iYWwuTWVzc2FnZUNoYW5uZWw7XG4gICAgdmFyIERpc3BhdGNoID0gZ2xvYmFsLkRpc3BhdGNoO1xuICAgIHZhciBjb3VudGVyID0gMDtcbiAgICB2YXIgcXVldWUgPSB7fTtcbiAgICB2YXIgT05SRUFEWVNUQVRFQ0hBTkdFID0gJ29ucmVhZHlzdGF0ZWNoYW5nZSc7XG4gICAgdmFyIGRlZmVyLCBjaGFubmVsLCBwb3J0O1xuXG4gICAgdmFyIHJ1biA9IGZ1bmN0aW9uIHJ1bigpIHtcbiAgICAgIHZhciBpZCA9ICt0aGlzOyAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcHJvdG90eXBlLWJ1aWx0aW5zXG5cbiAgICAgIGlmIChxdWV1ZS5oYXNPd25Qcm9wZXJ0eShpZCkpIHtcbiAgICAgICAgdmFyIGZuID0gcXVldWVbaWRdO1xuICAgICAgICBkZWxldGUgcXVldWVbaWRdO1xuICAgICAgICBmbigpO1xuICAgICAgfVxuICAgIH07XG5cbiAgICB2YXIgbGlzdGVuZXIgPSBmdW5jdGlvbiBsaXN0ZW5lcihldmVudCkge1xuICAgICAgcnVuLmNhbGwoZXZlbnQuZGF0YSk7XG4gICAgfTsgLy8gTm9kZS5qcyAwLjkrICYgSUUxMCsgaGFzIHNldEltbWVkaWF0ZSwgb3RoZXJ3aXNlOlxuXG5cbiAgICBpZiAoIXNldFRhc2sgfHwgIWNsZWFyVGFzaykge1xuICAgICAgc2V0VGFzayA9IGZ1bmN0aW9uIHNldEltbWVkaWF0ZShmbikge1xuICAgICAgICB2YXIgYXJncyA9IFtdO1xuICAgICAgICB2YXIgaSA9IDE7XG5cbiAgICAgICAgd2hpbGUgKGFyZ3VtZW50cy5sZW5ndGggPiBpKSB7XG4gICAgICAgICAgYXJncy5wdXNoKGFyZ3VtZW50c1tpKytdKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHF1ZXVlWysrY291bnRlcl0gPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLW5ldy1mdW5jXG4gICAgICAgICAgaW52b2tlKHR5cGVvZiBmbiA9PSAnZnVuY3Rpb24nID8gZm4gOiBGdW5jdGlvbihmbiksIGFyZ3MpO1xuICAgICAgICB9O1xuXG4gICAgICAgIGRlZmVyKGNvdW50ZXIpO1xuICAgICAgICByZXR1cm4gY291bnRlcjtcbiAgICAgIH07XG5cbiAgICAgIGNsZWFyVGFzayA9IGZ1bmN0aW9uIGNsZWFySW1tZWRpYXRlKGlkKSB7XG4gICAgICAgIGRlbGV0ZSBxdWV1ZVtpZF07XG4gICAgICB9OyAvLyBOb2RlLmpzIDAuOC1cblxuXG4gICAgICBpZiAoX2RlcmVxXygxOCkocHJvY2VzcykgPT0gJ3Byb2Nlc3MnKSB7XG4gICAgICAgIGRlZmVyID0gZnVuY3Rpb24gZGVmZXIoaWQpIHtcbiAgICAgICAgICBwcm9jZXNzLm5leHRUaWNrKGN0eChydW4sIGlkLCAxKSk7XG4gICAgICAgIH07IC8vIFNwaGVyZSAoSlMgZ2FtZSBlbmdpbmUpIERpc3BhdGNoIEFQSVxuXG4gICAgICB9IGVsc2UgaWYgKERpc3BhdGNoICYmIERpc3BhdGNoLm5vdykge1xuICAgICAgICBkZWZlciA9IGZ1bmN0aW9uIGRlZmVyKGlkKSB7XG4gICAgICAgICAgRGlzcGF0Y2gubm93KGN0eChydW4sIGlkLCAxKSk7XG4gICAgICAgIH07IC8vIEJyb3dzZXJzIHdpdGggTWVzc2FnZUNoYW5uZWwsIGluY2x1ZGVzIFdlYldvcmtlcnNcblxuICAgICAgfSBlbHNlIGlmIChNZXNzYWdlQ2hhbm5lbCkge1xuICAgICAgICBjaGFubmVsID0gbmV3IE1lc3NhZ2VDaGFubmVsKCk7XG4gICAgICAgIHBvcnQgPSBjaGFubmVsLnBvcnQyO1xuICAgICAgICBjaGFubmVsLnBvcnQxLm9ubWVzc2FnZSA9IGxpc3RlbmVyO1xuICAgICAgICBkZWZlciA9IGN0eChwb3J0LnBvc3RNZXNzYWdlLCBwb3J0LCAxKTsgLy8gQnJvd3NlcnMgd2l0aCBwb3N0TWVzc2FnZSwgc2tpcCBXZWJXb3JrZXJzXG4gICAgICAgIC8vIElFOCBoYXMgcG9zdE1lc3NhZ2UsIGJ1dCBpdCdzIHN5bmMgJiB0eXBlb2YgaXRzIHBvc3RNZXNzYWdlIGlzICdvYmplY3QnXG4gICAgICB9IGVsc2UgaWYgKGdsb2JhbC5hZGRFdmVudExpc3RlbmVyICYmIHR5cGVvZiBwb3N0TWVzc2FnZSA9PSAnZnVuY3Rpb24nICYmICFnbG9iYWwuaW1wb3J0U2NyaXB0cykge1xuICAgICAgICBkZWZlciA9IGZ1bmN0aW9uIGRlZmVyKGlkKSB7XG4gICAgICAgICAgZ2xvYmFsLnBvc3RNZXNzYWdlKGlkICsgJycsICcqJyk7XG4gICAgICAgIH07XG5cbiAgICAgICAgZ2xvYmFsLmFkZEV2ZW50TGlzdGVuZXIoJ21lc3NhZ2UnLCBsaXN0ZW5lciwgZmFsc2UpOyAvLyBJRTgtXG4gICAgICB9IGVsc2UgaWYgKE9OUkVBRFlTVEFURUNIQU5HRSBpbiBjZWwoJ3NjcmlwdCcpKSB7XG4gICAgICAgIGRlZmVyID0gZnVuY3Rpb24gZGVmZXIoaWQpIHtcbiAgICAgICAgICBodG1sLmFwcGVuZENoaWxkKGNlbCgnc2NyaXB0JykpW09OUkVBRFlTVEFURUNIQU5HRV0gPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBodG1sLnJlbW92ZUNoaWxkKHRoaXMpO1xuICAgICAgICAgICAgcnVuLmNhbGwoaWQpO1xuICAgICAgICAgIH07XG4gICAgICAgIH07IC8vIFJlc3Qgb2xkIGJyb3dzZXJzXG5cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGRlZmVyID0gZnVuY3Rpb24gZGVmZXIoaWQpIHtcbiAgICAgICAgICBzZXRUaW1lb3V0KGN0eChydW4sIGlkLCAxKSwgMCk7XG4gICAgICAgIH07XG4gICAgICB9XG4gICAgfVxuXG4gICAgbW9kdWxlLmV4cG9ydHMgPSB7XG4gICAgICBzZXQ6IHNldFRhc2ssXG4gICAgICBjbGVhcjogY2xlYXJUYXNrXG4gICAgfTtcbiAgfSwge1xuICAgIFwiMThcIjogMTgsXG4gICAgXCIyNVwiOiAyNSxcbiAgICBcIjMwXCI6IDMwLFxuICAgIFwiNDBcIjogNDAsXG4gICAgXCI0M1wiOiA0MyxcbiAgICBcIjQ2XCI6IDQ2XG4gIH1dLFxuICAxMTQ6IFtmdW5jdGlvbiAoX2RlcmVxXywgbW9kdWxlLCBleHBvcnRzKSB7XG4gICAgdmFyIHRvSW50ZWdlciA9IF9kZXJlcV8oMTE2KTtcblxuICAgIHZhciBtYXggPSBNYXRoLm1heDtcbiAgICB2YXIgbWluID0gTWF0aC5taW47XG5cbiAgICBtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpbmRleCwgbGVuZ3RoKSB7XG4gICAgICBpbmRleCA9IHRvSW50ZWdlcihpbmRleCk7XG4gICAgICByZXR1cm4gaW5kZXggPCAwID8gbWF4KGluZGV4ICsgbGVuZ3RoLCAwKSA6IG1pbihpbmRleCwgbGVuZ3RoKTtcbiAgICB9O1xuICB9LCB7XG4gICAgXCIxMTZcIjogMTE2XG4gIH1dLFxuICAxMTU6IFtmdW5jdGlvbiAoX2RlcmVxXywgbW9kdWxlLCBleHBvcnRzKSB7XG4gICAgLy8gaHR0cHM6Ly90YzM5LmdpdGh1Yi5pby9lY21hMjYyLyNzZWMtdG9pbmRleFxuICAgIHZhciB0b0ludGVnZXIgPSBfZGVyZXFfKDExNik7XG5cbiAgICB2YXIgdG9MZW5ndGggPSBfZGVyZXFfKDExOCk7XG5cbiAgICBtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCkge1xuICAgICAgaWYgKGl0ID09PSB1bmRlZmluZWQpIHJldHVybiAwO1xuICAgICAgdmFyIG51bWJlciA9IHRvSW50ZWdlcihpdCk7XG4gICAgICB2YXIgbGVuZ3RoID0gdG9MZW5ndGgobnVtYmVyKTtcbiAgICAgIGlmIChudW1iZXIgIT09IGxlbmd0aCkgdGhyb3cgUmFuZ2VFcnJvcignV3JvbmcgbGVuZ3RoIScpO1xuICAgICAgcmV0dXJuIGxlbmd0aDtcbiAgICB9O1xuICB9LCB7XG4gICAgXCIxMTZcIjogMTE2LFxuICAgIFwiMTE4XCI6IDExOFxuICB9XSxcbiAgMTE2OiBbZnVuY3Rpb24gKF9kZXJlcV8sIG1vZHVsZSwgZXhwb3J0cykge1xuICAgIC8vIDcuMS40IFRvSW50ZWdlclxuICAgIHZhciBjZWlsID0gTWF0aC5jZWlsO1xuICAgIHZhciBmbG9vciA9IE1hdGguZmxvb3I7XG5cbiAgICBtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCkge1xuICAgICAgcmV0dXJuIGlzTmFOKGl0ID0gK2l0KSA/IDAgOiAoaXQgPiAwID8gZmxvb3IgOiBjZWlsKShpdCk7XG4gICAgfTtcbiAgfSwge31dLFxuICAxMTc6IFtmdW5jdGlvbiAoX2RlcmVxXywgbW9kdWxlLCBleHBvcnRzKSB7XG4gICAgLy8gdG8gaW5kZXhlZCBvYmplY3QsIHRvT2JqZWN0IHdpdGggZmFsbGJhY2sgZm9yIG5vbi1hcnJheS1saWtlIEVTMyBzdHJpbmdzXG4gICAgdmFyIElPYmplY3QgPSBfZGVyZXFfKDQ3KTtcblxuICAgIHZhciBkZWZpbmVkID0gX2RlcmVxXygyOCk7XG5cbiAgICBtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCkge1xuICAgICAgcmV0dXJuIElPYmplY3QoZGVmaW5lZChpdCkpO1xuICAgIH07XG4gIH0sIHtcbiAgICBcIjI4XCI6IDI4LFxuICAgIFwiNDdcIjogNDdcbiAgfV0sXG4gIDExODogW2Z1bmN0aW9uIChfZGVyZXFfLCBtb2R1bGUsIGV4cG9ydHMpIHtcbiAgICAvLyA3LjEuMTUgVG9MZW5ndGhcbiAgICB2YXIgdG9JbnRlZ2VyID0gX2RlcmVxXygxMTYpO1xuXG4gICAgdmFyIG1pbiA9IE1hdGgubWluO1xuXG4gICAgbW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQpIHtcbiAgICAgIHJldHVybiBpdCA+IDAgPyBtaW4odG9JbnRlZ2VyKGl0KSwgMHgxZmZmZmZmZmZmZmZmZikgOiAwOyAvLyBwb3coMiwgNTMpIC0gMSA9PSA5MDA3MTk5MjU0NzQwOTkxXG4gICAgfTtcbiAgfSwge1xuICAgIFwiMTE2XCI6IDExNlxuICB9XSxcbiAgMTE5OiBbZnVuY3Rpb24gKF9kZXJlcV8sIG1vZHVsZSwgZXhwb3J0cykge1xuICAgIC8vIDcuMS4xMyBUb09iamVjdChhcmd1bWVudClcbiAgICB2YXIgZGVmaW5lZCA9IF9kZXJlcV8oMjgpO1xuXG4gICAgbW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQpIHtcbiAgICAgIHJldHVybiBPYmplY3QoZGVmaW5lZChpdCkpO1xuICAgIH07XG4gIH0sIHtcbiAgICBcIjI4XCI6IDI4XG4gIH1dLFxuICAxMjA6IFtmdW5jdGlvbiAoX2RlcmVxXywgbW9kdWxlLCBleHBvcnRzKSB7XG4gICAgLy8gNy4xLjEgVG9QcmltaXRpdmUoaW5wdXQgWywgUHJlZmVycmVkVHlwZV0pXG4gICAgdmFyIGlzT2JqZWN0ID0gX2RlcmVxXyg1MSk7IC8vIGluc3RlYWQgb2YgdGhlIEVTNiBzcGVjIHZlcnNpb24sIHdlIGRpZG4ndCBpbXBsZW1lbnQgQEB0b1ByaW1pdGl2ZSBjYXNlXG4gICAgLy8gYW5kIHRoZSBzZWNvbmQgYXJndW1lbnQgLSBmbGFnIC0gcHJlZmVycmVkIHR5cGUgaXMgYSBzdHJpbmdcblxuXG4gICAgbW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQsIFMpIHtcbiAgICAgIGlmICghaXNPYmplY3QoaXQpKSByZXR1cm4gaXQ7XG4gICAgICB2YXIgZm4sIHZhbDtcbiAgICAgIGlmIChTICYmIHR5cGVvZiAoZm4gPSBpdC50b1N0cmluZykgPT0gJ2Z1bmN0aW9uJyAmJiAhaXNPYmplY3QodmFsID0gZm4uY2FsbChpdCkpKSByZXR1cm4gdmFsO1xuICAgICAgaWYgKHR5cGVvZiAoZm4gPSBpdC52YWx1ZU9mKSA9PSAnZnVuY3Rpb24nICYmICFpc09iamVjdCh2YWwgPSBmbi5jYWxsKGl0KSkpIHJldHVybiB2YWw7XG4gICAgICBpZiAoIVMgJiYgdHlwZW9mIChmbiA9IGl0LnRvU3RyaW5nKSA9PSAnZnVuY3Rpb24nICYmICFpc09iamVjdCh2YWwgPSBmbi5jYWxsKGl0KSkpIHJldHVybiB2YWw7XG4gICAgICB0aHJvdyBUeXBlRXJyb3IoXCJDYW4ndCBjb252ZXJ0IG9iamVjdCB0byBwcmltaXRpdmUgdmFsdWVcIik7XG4gICAgfTtcbiAgfSwge1xuICAgIFwiNTFcIjogNTFcbiAgfV0sXG4gIDEyMTogW2Z1bmN0aW9uIChfZGVyZXFfLCBtb2R1bGUsIGV4cG9ydHMpIHtcbiAgICAndXNlIHN0cmljdCc7XG5cbiAgICBpZiAoX2RlcmVxXygyOSkpIHtcbiAgICAgIHZhciBMSUJSQVJZID0gX2RlcmVxXyg2MCk7XG5cbiAgICAgIHZhciBnbG9iYWwgPSBfZGVyZXFfKDQwKTtcblxuICAgICAgdmFyIGZhaWxzID0gX2RlcmVxXygzNSk7XG5cbiAgICAgIHZhciAkZXhwb3J0ID0gX2RlcmVxXygzMyk7XG5cbiAgICAgIHZhciAkdHlwZWQgPSBfZGVyZXFfKDEyMyk7XG5cbiAgICAgIHZhciAkYnVmZmVyID0gX2RlcmVxXygxMjIpO1xuXG4gICAgICB2YXIgY3R4ID0gX2RlcmVxXygyNSk7XG5cbiAgICAgIHZhciBhbkluc3RhbmNlID0gX2RlcmVxXyg2KTtcblxuICAgICAgdmFyIHByb3BlcnR5RGVzYyA9IF9kZXJlcV8oOTIpO1xuXG4gICAgICB2YXIgaGlkZSA9IF9kZXJlcV8oNDIpO1xuXG4gICAgICB2YXIgcmVkZWZpbmVBbGwgPSBfZGVyZXFfKDkzKTtcblxuICAgICAgdmFyIHRvSW50ZWdlciA9IF9kZXJlcV8oMTE2KTtcblxuICAgICAgdmFyIHRvTGVuZ3RoID0gX2RlcmVxXygxMTgpO1xuXG4gICAgICB2YXIgdG9JbmRleCA9IF9kZXJlcV8oMTE1KTtcblxuICAgICAgdmFyIHRvQWJzb2x1dGVJbmRleCA9IF9kZXJlcV8oMTE0KTtcblxuICAgICAgdmFyIHRvUHJpbWl0aXZlID0gX2RlcmVxXygxMjApO1xuXG4gICAgICB2YXIgaGFzID0gX2RlcmVxXyg0MSk7XG5cbiAgICAgIHZhciBjbGFzc29mID0gX2RlcmVxXygxNyk7XG5cbiAgICAgIHZhciBpc09iamVjdCA9IF9kZXJlcV8oNTEpO1xuXG4gICAgICB2YXIgdG9PYmplY3QgPSBfZGVyZXFfKDExOSk7XG5cbiAgICAgIHZhciBpc0FycmF5SXRlciA9IF9kZXJlcV8oNDgpO1xuXG4gICAgICB2YXIgY3JlYXRlID0gX2RlcmVxXyg3MSk7XG5cbiAgICAgIHZhciBnZXRQcm90b3R5cGVPZiA9IF9kZXJlcV8oNzkpO1xuXG4gICAgICB2YXIgZ09QTiA9IF9kZXJlcV8oNzcpLmY7XG5cbiAgICAgIHZhciBnZXRJdGVyRm4gPSBfZGVyZXFfKDEyOSk7XG5cbiAgICAgIHZhciB1aWQgPSBfZGVyZXFfKDEyNCk7XG5cbiAgICAgIHZhciB3a3MgPSBfZGVyZXFfKDEyOCk7XG5cbiAgICAgIHZhciBjcmVhdGVBcnJheU1ldGhvZCA9IF9kZXJlcV8oMTIpO1xuXG4gICAgICB2YXIgY3JlYXRlQXJyYXlJbmNsdWRlcyA9IF9kZXJlcV8oMTEpO1xuXG4gICAgICB2YXIgc3BlY2llc0NvbnN0cnVjdG9yID0gX2RlcmVxXygxMDQpO1xuXG4gICAgICB2YXIgQXJyYXlJdGVyYXRvcnMgPSBfZGVyZXFfKDE0MSk7XG5cbiAgICAgIHZhciBJdGVyYXRvcnMgPSBfZGVyZXFfKDU4KTtcblxuICAgICAgdmFyICRpdGVyRGV0ZWN0ID0gX2RlcmVxXyg1Nik7XG5cbiAgICAgIHZhciBzZXRTcGVjaWVzID0gX2RlcmVxXygxMDApO1xuXG4gICAgICB2YXIgYXJyYXlGaWxsID0gX2RlcmVxXyg5KTtcblxuICAgICAgdmFyIGFycmF5Q29weVdpdGhpbiA9IF9kZXJlcV8oOCk7XG5cbiAgICAgIHZhciAkRFAgPSBfZGVyZXFfKDcyKTtcblxuICAgICAgdmFyICRHT1BEID0gX2RlcmVxXyg3NSk7XG5cbiAgICAgIHZhciBkUCA9ICREUC5mO1xuICAgICAgdmFyIGdPUEQgPSAkR09QRC5mO1xuICAgICAgdmFyIFJhbmdlRXJyb3IgPSBnbG9iYWwuUmFuZ2VFcnJvcjtcbiAgICAgIHZhciBUeXBlRXJyb3IgPSBnbG9iYWwuVHlwZUVycm9yO1xuICAgICAgdmFyIFVpbnQ4QXJyYXkgPSBnbG9iYWwuVWludDhBcnJheTtcbiAgICAgIHZhciBBUlJBWV9CVUZGRVIgPSAnQXJyYXlCdWZmZXInO1xuICAgICAgdmFyIFNIQVJFRF9CVUZGRVIgPSAnU2hhcmVkJyArIEFSUkFZX0JVRkZFUjtcbiAgICAgIHZhciBCWVRFU19QRVJfRUxFTUVOVCA9ICdCWVRFU19QRVJfRUxFTUVOVCc7XG4gICAgICB2YXIgUFJPVE9UWVBFID0gJ3Byb3RvdHlwZSc7XG4gICAgICB2YXIgQXJyYXlQcm90byA9IEFycmF5W1BST1RPVFlQRV07XG4gICAgICB2YXIgJEFycmF5QnVmZmVyID0gJGJ1ZmZlci5BcnJheUJ1ZmZlcjtcbiAgICAgIHZhciAkRGF0YVZpZXcgPSAkYnVmZmVyLkRhdGFWaWV3O1xuICAgICAgdmFyIGFycmF5Rm9yRWFjaCA9IGNyZWF0ZUFycmF5TWV0aG9kKDApO1xuICAgICAgdmFyIGFycmF5RmlsdGVyID0gY3JlYXRlQXJyYXlNZXRob2QoMik7XG4gICAgICB2YXIgYXJyYXlTb21lID0gY3JlYXRlQXJyYXlNZXRob2QoMyk7XG4gICAgICB2YXIgYXJyYXlFdmVyeSA9IGNyZWF0ZUFycmF5TWV0aG9kKDQpO1xuICAgICAgdmFyIGFycmF5RmluZCA9IGNyZWF0ZUFycmF5TWV0aG9kKDUpO1xuICAgICAgdmFyIGFycmF5RmluZEluZGV4ID0gY3JlYXRlQXJyYXlNZXRob2QoNik7XG4gICAgICB2YXIgYXJyYXlJbmNsdWRlcyA9IGNyZWF0ZUFycmF5SW5jbHVkZXModHJ1ZSk7XG4gICAgICB2YXIgYXJyYXlJbmRleE9mID0gY3JlYXRlQXJyYXlJbmNsdWRlcyhmYWxzZSk7XG4gICAgICB2YXIgYXJyYXlWYWx1ZXMgPSBBcnJheUl0ZXJhdG9ycy52YWx1ZXM7XG4gICAgICB2YXIgYXJyYXlLZXlzID0gQXJyYXlJdGVyYXRvcnMua2V5cztcbiAgICAgIHZhciBhcnJheUVudHJpZXMgPSBBcnJheUl0ZXJhdG9ycy5lbnRyaWVzO1xuICAgICAgdmFyIGFycmF5TGFzdEluZGV4T2YgPSBBcnJheVByb3RvLmxhc3RJbmRleE9mO1xuICAgICAgdmFyIGFycmF5UmVkdWNlID0gQXJyYXlQcm90by5yZWR1Y2U7XG4gICAgICB2YXIgYXJyYXlSZWR1Y2VSaWdodCA9IEFycmF5UHJvdG8ucmVkdWNlUmlnaHQ7XG4gICAgICB2YXIgYXJyYXlKb2luID0gQXJyYXlQcm90by5qb2luO1xuICAgICAgdmFyIGFycmF5U29ydCA9IEFycmF5UHJvdG8uc29ydDtcbiAgICAgIHZhciBhcnJheVNsaWNlID0gQXJyYXlQcm90by5zbGljZTtcbiAgICAgIHZhciBhcnJheVRvU3RyaW5nID0gQXJyYXlQcm90by50b1N0cmluZztcbiAgICAgIHZhciBhcnJheVRvTG9jYWxlU3RyaW5nID0gQXJyYXlQcm90by50b0xvY2FsZVN0cmluZztcbiAgICAgIHZhciBJVEVSQVRPUiA9IHdrcygnaXRlcmF0b3InKTtcbiAgICAgIHZhciBUQUcgPSB3a3MoJ3RvU3RyaW5nVGFnJyk7XG4gICAgICB2YXIgVFlQRURfQ09OU1RSVUNUT1IgPSB1aWQoJ3R5cGVkX2NvbnN0cnVjdG9yJyk7XG4gICAgICB2YXIgREVGX0NPTlNUUlVDVE9SID0gdWlkKCdkZWZfY29uc3RydWN0b3InKTtcbiAgICAgIHZhciBBTExfQ09OU1RSVUNUT1JTID0gJHR5cGVkLkNPTlNUUjtcbiAgICAgIHZhciBUWVBFRF9BUlJBWSA9ICR0eXBlZC5UWVBFRDtcbiAgICAgIHZhciBWSUVXID0gJHR5cGVkLlZJRVc7XG4gICAgICB2YXIgV1JPTkdfTEVOR1RIID0gJ1dyb25nIGxlbmd0aCEnO1xuICAgICAgdmFyICRtYXAgPSBjcmVhdGVBcnJheU1ldGhvZCgxLCBmdW5jdGlvbiAoTywgbGVuZ3RoKSB7XG4gICAgICAgIHJldHVybiBhbGxvY2F0ZShzcGVjaWVzQ29uc3RydWN0b3IoTywgT1tERUZfQ09OU1RSVUNUT1JdKSwgbGVuZ3RoKTtcbiAgICAgIH0pO1xuICAgICAgdmFyIExJVFRMRV9FTkRJQU4gPSBmYWlscyhmdW5jdGlvbiAoKSB7XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlZlxuICAgICAgICByZXR1cm4gbmV3IFVpbnQ4QXJyYXkobmV3IFVpbnQxNkFycmF5KFsxXSkuYnVmZmVyKVswXSA9PT0gMTtcbiAgICAgIH0pO1xuICAgICAgdmFyIEZPUkNFRF9TRVQgPSAhIVVpbnQ4QXJyYXkgJiYgISFVaW50OEFycmF5W1BST1RPVFlQRV0uc2V0ICYmIGZhaWxzKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgbmV3IFVpbnQ4QXJyYXkoMSkuc2V0KHt9KTtcbiAgICAgIH0pO1xuXG4gICAgICB2YXIgdG9PZmZzZXQgPSBmdW5jdGlvbiB0b09mZnNldChpdCwgQllURVMpIHtcbiAgICAgICAgdmFyIG9mZnNldCA9IHRvSW50ZWdlcihpdCk7XG4gICAgICAgIGlmIChvZmZzZXQgPCAwIHx8IG9mZnNldCAlIEJZVEVTKSB0aHJvdyBSYW5nZUVycm9yKCdXcm9uZyBvZmZzZXQhJyk7XG4gICAgICAgIHJldHVybiBvZmZzZXQ7XG4gICAgICB9O1xuXG4gICAgICB2YXIgdmFsaWRhdGUgPSBmdW5jdGlvbiB2YWxpZGF0ZShpdCkge1xuICAgICAgICBpZiAoaXNPYmplY3QoaXQpICYmIFRZUEVEX0FSUkFZIGluIGl0KSByZXR1cm4gaXQ7XG4gICAgICAgIHRocm93IFR5cGVFcnJvcihpdCArICcgaXMgbm90IGEgdHlwZWQgYXJyYXkhJyk7XG4gICAgICB9O1xuXG4gICAgICB2YXIgYWxsb2NhdGUgPSBmdW5jdGlvbiBhbGxvY2F0ZShDLCBsZW5ndGgpIHtcbiAgICAgICAgaWYgKCEoaXNPYmplY3QoQykgJiYgVFlQRURfQ09OU1RSVUNUT1IgaW4gQykpIHtcbiAgICAgICAgICB0aHJvdyBUeXBlRXJyb3IoJ0l0IGlzIG5vdCBhIHR5cGVkIGFycmF5IGNvbnN0cnVjdG9yIScpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIG5ldyBDKGxlbmd0aCk7XG4gICAgICB9O1xuXG4gICAgICB2YXIgc3BlY2llc0Zyb21MaXN0ID0gZnVuY3Rpb24gc3BlY2llc0Zyb21MaXN0KE8sIGxpc3QpIHtcbiAgICAgICAgcmV0dXJuIGZyb21MaXN0KHNwZWNpZXNDb25zdHJ1Y3RvcihPLCBPW0RFRl9DT05TVFJVQ1RPUl0pLCBsaXN0KTtcbiAgICAgIH07XG5cbiAgICAgIHZhciBmcm9tTGlzdCA9IGZ1bmN0aW9uIGZyb21MaXN0KEMsIGxpc3QpIHtcbiAgICAgICAgdmFyIGluZGV4ID0gMDtcbiAgICAgICAgdmFyIGxlbmd0aCA9IGxpc3QubGVuZ3RoO1xuICAgICAgICB2YXIgcmVzdWx0ID0gYWxsb2NhdGUoQywgbGVuZ3RoKTtcblxuICAgICAgICB3aGlsZSAobGVuZ3RoID4gaW5kZXgpIHtcbiAgICAgICAgICByZXN1bHRbaW5kZXhdID0gbGlzdFtpbmRleCsrXTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgICB9O1xuXG4gICAgICB2YXIgYWRkR2V0dGVyID0gZnVuY3Rpb24gYWRkR2V0dGVyKGl0LCBrZXksIGludGVybmFsKSB7XG4gICAgICAgIGRQKGl0LCBrZXksIHtcbiAgICAgICAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9kW2ludGVybmFsXTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgfTtcblxuICAgICAgdmFyICRmcm9tID0gZnVuY3Rpb24gZnJvbShzb3VyY2VcbiAgICAgIC8qICwgbWFwZm4sIHRoaXNBcmcgKi9cbiAgICAgICkge1xuICAgICAgICB2YXIgTyA9IHRvT2JqZWN0KHNvdXJjZSk7XG4gICAgICAgIHZhciBhTGVuID0gYXJndW1lbnRzLmxlbmd0aDtcbiAgICAgICAgdmFyIG1hcGZuID0gYUxlbiA+IDEgPyBhcmd1bWVudHNbMV0gOiB1bmRlZmluZWQ7XG4gICAgICAgIHZhciBtYXBwaW5nID0gbWFwZm4gIT09IHVuZGVmaW5lZDtcbiAgICAgICAgdmFyIGl0ZXJGbiA9IGdldEl0ZXJGbihPKTtcbiAgICAgICAgdmFyIGksIGxlbmd0aCwgdmFsdWVzLCByZXN1bHQsIHN0ZXAsIGl0ZXJhdG9yO1xuXG4gICAgICAgIGlmIChpdGVyRm4gIT0gdW5kZWZpbmVkICYmICFpc0FycmF5SXRlcihpdGVyRm4pKSB7XG4gICAgICAgICAgZm9yIChpdGVyYXRvciA9IGl0ZXJGbi5jYWxsKE8pLCB2YWx1ZXMgPSBbXSwgaSA9IDA7ICEoc3RlcCA9IGl0ZXJhdG9yLm5leHQoKSkuZG9uZTsgaSsrKSB7XG4gICAgICAgICAgICB2YWx1ZXMucHVzaChzdGVwLnZhbHVlKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBPID0gdmFsdWVzO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKG1hcHBpbmcgJiYgYUxlbiA+IDIpIG1hcGZuID0gY3R4KG1hcGZuLCBhcmd1bWVudHNbMl0sIDIpO1xuXG4gICAgICAgIGZvciAoaSA9IDAsIGxlbmd0aCA9IHRvTGVuZ3RoKE8ubGVuZ3RoKSwgcmVzdWx0ID0gYWxsb2NhdGUodGhpcywgbGVuZ3RoKTsgbGVuZ3RoID4gaTsgaSsrKSB7XG4gICAgICAgICAgcmVzdWx0W2ldID0gbWFwcGluZyA/IG1hcGZuKE9baV0sIGkpIDogT1tpXTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgICB9O1xuXG4gICAgICB2YXIgJG9mID0gZnVuY3Rpb24gb2YoKSB7XG4gICAgICAgIHZhciBpbmRleCA9IDA7XG4gICAgICAgIHZhciBsZW5ndGggPSBhcmd1bWVudHMubGVuZ3RoO1xuICAgICAgICB2YXIgcmVzdWx0ID0gYWxsb2NhdGUodGhpcywgbGVuZ3RoKTtcblxuICAgICAgICB3aGlsZSAobGVuZ3RoID4gaW5kZXgpIHtcbiAgICAgICAgICByZXN1bHRbaW5kZXhdID0gYXJndW1lbnRzW2luZGV4KytdO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICAgIH07IC8vIGlPUyBTYWZhcmkgNi54IGZhaWxzIGhlcmVcblxuXG4gICAgICB2YXIgVE9fTE9DQUxFX0JVRyA9ICEhVWludDhBcnJheSAmJiBmYWlscyhmdW5jdGlvbiAoKSB7XG4gICAgICAgIGFycmF5VG9Mb2NhbGVTdHJpbmcuY2FsbChuZXcgVWludDhBcnJheSgxKSk7XG4gICAgICB9KTtcblxuICAgICAgdmFyICR0b0xvY2FsZVN0cmluZyA9IGZ1bmN0aW9uIHRvTG9jYWxlU3RyaW5nKCkge1xuICAgICAgICByZXR1cm4gYXJyYXlUb0xvY2FsZVN0cmluZy5hcHBseShUT19MT0NBTEVfQlVHID8gYXJyYXlTbGljZS5jYWxsKHZhbGlkYXRlKHRoaXMpKSA6IHZhbGlkYXRlKHRoaXMpLCBhcmd1bWVudHMpO1xuICAgICAgfTtcblxuICAgICAgdmFyIHByb3RvID0ge1xuICAgICAgICBjb3B5V2l0aGluOiBmdW5jdGlvbiBjb3B5V2l0aGluKHRhcmdldCwgc3RhcnRcbiAgICAgICAgLyogLCBlbmQgKi9cbiAgICAgICAgKSB7XG4gICAgICAgICAgcmV0dXJuIGFycmF5Q29weVdpdGhpbi5jYWxsKHZhbGlkYXRlKHRoaXMpLCB0YXJnZXQsIHN0YXJ0LCBhcmd1bWVudHMubGVuZ3RoID4gMiA/IGFyZ3VtZW50c1syXSA6IHVuZGVmaW5lZCk7XG4gICAgICAgIH0sXG4gICAgICAgIGV2ZXJ5OiBmdW5jdGlvbiBldmVyeShjYWxsYmFja2ZuXG4gICAgICAgIC8qICwgdGhpc0FyZyAqL1xuICAgICAgICApIHtcbiAgICAgICAgICByZXR1cm4gYXJyYXlFdmVyeSh2YWxpZGF0ZSh0aGlzKSwgY2FsbGJhY2tmbiwgYXJndW1lbnRzLmxlbmd0aCA+IDEgPyBhcmd1bWVudHNbMV0gOiB1bmRlZmluZWQpO1xuICAgICAgICB9LFxuICAgICAgICBmaWxsOiBmdW5jdGlvbiBmaWxsKHZhbHVlXG4gICAgICAgIC8qICwgc3RhcnQsIGVuZCAqL1xuICAgICAgICApIHtcbiAgICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLXVudXNlZC12YXJzXG4gICAgICAgICAgcmV0dXJuIGFycmF5RmlsbC5hcHBseSh2YWxpZGF0ZSh0aGlzKSwgYXJndW1lbnRzKTtcbiAgICAgICAgfSxcbiAgICAgICAgZmlsdGVyOiBmdW5jdGlvbiBmaWx0ZXIoY2FsbGJhY2tmblxuICAgICAgICAvKiAsIHRoaXNBcmcgKi9cbiAgICAgICAgKSB7XG4gICAgICAgICAgcmV0dXJuIHNwZWNpZXNGcm9tTGlzdCh0aGlzLCBhcnJheUZpbHRlcih2YWxpZGF0ZSh0aGlzKSwgY2FsbGJhY2tmbiwgYXJndW1lbnRzLmxlbmd0aCA+IDEgPyBhcmd1bWVudHNbMV0gOiB1bmRlZmluZWQpKTtcbiAgICAgICAgfSxcbiAgICAgICAgZmluZDogZnVuY3Rpb24gZmluZChwcmVkaWNhdGVcbiAgICAgICAgLyogLCB0aGlzQXJnICovXG4gICAgICAgICkge1xuICAgICAgICAgIHJldHVybiBhcnJheUZpbmQodmFsaWRhdGUodGhpcyksIHByZWRpY2F0ZSwgYXJndW1lbnRzLmxlbmd0aCA+IDEgPyBhcmd1bWVudHNbMV0gOiB1bmRlZmluZWQpO1xuICAgICAgICB9LFxuICAgICAgICBmaW5kSW5kZXg6IGZ1bmN0aW9uIGZpbmRJbmRleChwcmVkaWNhdGVcbiAgICAgICAgLyogLCB0aGlzQXJnICovXG4gICAgICAgICkge1xuICAgICAgICAgIHJldHVybiBhcnJheUZpbmRJbmRleCh2YWxpZGF0ZSh0aGlzKSwgcHJlZGljYXRlLCBhcmd1bWVudHMubGVuZ3RoID4gMSA/IGFyZ3VtZW50c1sxXSA6IHVuZGVmaW5lZCk7XG4gICAgICAgIH0sXG4gICAgICAgIGZvckVhY2g6IGZ1bmN0aW9uIGZvckVhY2goY2FsbGJhY2tmblxuICAgICAgICAvKiAsIHRoaXNBcmcgKi9cbiAgICAgICAgKSB7XG4gICAgICAgICAgYXJyYXlGb3JFYWNoKHZhbGlkYXRlKHRoaXMpLCBjYWxsYmFja2ZuLCBhcmd1bWVudHMubGVuZ3RoID4gMSA/IGFyZ3VtZW50c1sxXSA6IHVuZGVmaW5lZCk7XG4gICAgICAgIH0sXG4gICAgICAgIGluZGV4T2Y6IGZ1bmN0aW9uIGluZGV4T2Yoc2VhcmNoRWxlbWVudFxuICAgICAgICAvKiAsIGZyb21JbmRleCAqL1xuICAgICAgICApIHtcbiAgICAgICAgICByZXR1cm4gYXJyYXlJbmRleE9mKHZhbGlkYXRlKHRoaXMpLCBzZWFyY2hFbGVtZW50LCBhcmd1bWVudHMubGVuZ3RoID4gMSA/IGFyZ3VtZW50c1sxXSA6IHVuZGVmaW5lZCk7XG4gICAgICAgIH0sXG4gICAgICAgIGluY2x1ZGVzOiBmdW5jdGlvbiBpbmNsdWRlcyhzZWFyY2hFbGVtZW50XG4gICAgICAgIC8qICwgZnJvbUluZGV4ICovXG4gICAgICAgICkge1xuICAgICAgICAgIHJldHVybiBhcnJheUluY2x1ZGVzKHZhbGlkYXRlKHRoaXMpLCBzZWFyY2hFbGVtZW50LCBhcmd1bWVudHMubGVuZ3RoID4gMSA/IGFyZ3VtZW50c1sxXSA6IHVuZGVmaW5lZCk7XG4gICAgICAgIH0sXG4gICAgICAgIGpvaW46IGZ1bmN0aW9uIGpvaW4oc2VwYXJhdG9yKSB7XG4gICAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby11bnVzZWQtdmFyc1xuICAgICAgICAgIHJldHVybiBhcnJheUpvaW4uYXBwbHkodmFsaWRhdGUodGhpcyksIGFyZ3VtZW50cyk7XG4gICAgICAgIH0sXG4gICAgICAgIGxhc3RJbmRleE9mOiBmdW5jdGlvbiBsYXN0SW5kZXhPZihzZWFyY2hFbGVtZW50XG4gICAgICAgIC8qICwgZnJvbUluZGV4ICovXG4gICAgICAgICkge1xuICAgICAgICAgIC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tdW51c2VkLXZhcnNcbiAgICAgICAgICByZXR1cm4gYXJyYXlMYXN0SW5kZXhPZi5hcHBseSh2YWxpZGF0ZSh0aGlzKSwgYXJndW1lbnRzKTtcbiAgICAgICAgfSxcbiAgICAgICAgbWFwOiBmdW5jdGlvbiBtYXAobWFwZm5cbiAgICAgICAgLyogLCB0aGlzQXJnICovXG4gICAgICAgICkge1xuICAgICAgICAgIHJldHVybiAkbWFwKHZhbGlkYXRlKHRoaXMpLCBtYXBmbiwgYXJndW1lbnRzLmxlbmd0aCA+IDEgPyBhcmd1bWVudHNbMV0gOiB1bmRlZmluZWQpO1xuICAgICAgICB9LFxuICAgICAgICByZWR1Y2U6IGZ1bmN0aW9uIHJlZHVjZShjYWxsYmFja2ZuXG4gICAgICAgIC8qICwgaW5pdGlhbFZhbHVlICovXG4gICAgICAgICkge1xuICAgICAgICAgIC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tdW51c2VkLXZhcnNcbiAgICAgICAgICByZXR1cm4gYXJyYXlSZWR1Y2UuYXBwbHkodmFsaWRhdGUodGhpcyksIGFyZ3VtZW50cyk7XG4gICAgICAgIH0sXG4gICAgICAgIHJlZHVjZVJpZ2h0OiBmdW5jdGlvbiByZWR1Y2VSaWdodChjYWxsYmFja2ZuXG4gICAgICAgIC8qICwgaW5pdGlhbFZhbHVlICovXG4gICAgICAgICkge1xuICAgICAgICAgIC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tdW51c2VkLXZhcnNcbiAgICAgICAgICByZXR1cm4gYXJyYXlSZWR1Y2VSaWdodC5hcHBseSh2YWxpZGF0ZSh0aGlzKSwgYXJndW1lbnRzKTtcbiAgICAgICAgfSxcbiAgICAgICAgcmV2ZXJzZTogZnVuY3Rpb24gcmV2ZXJzZSgpIHtcbiAgICAgICAgICB2YXIgdGhhdCA9IHRoaXM7XG4gICAgICAgICAgdmFyIGxlbmd0aCA9IHZhbGlkYXRlKHRoYXQpLmxlbmd0aDtcbiAgICAgICAgICB2YXIgbWlkZGxlID0gTWF0aC5mbG9vcihsZW5ndGggLyAyKTtcbiAgICAgICAgICB2YXIgaW5kZXggPSAwO1xuICAgICAgICAgIHZhciB2YWx1ZTtcblxuICAgICAgICAgIHdoaWxlIChpbmRleCA8IG1pZGRsZSkge1xuICAgICAgICAgICAgdmFsdWUgPSB0aGF0W2luZGV4XTtcbiAgICAgICAgICAgIHRoYXRbaW5kZXgrK10gPSB0aGF0Wy0tbGVuZ3RoXTtcbiAgICAgICAgICAgIHRoYXRbbGVuZ3RoXSA9IHZhbHVlO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHJldHVybiB0aGF0O1xuICAgICAgICB9LFxuICAgICAgICBzb21lOiBmdW5jdGlvbiBzb21lKGNhbGxiYWNrZm5cbiAgICAgICAgLyogLCB0aGlzQXJnICovXG4gICAgICAgICkge1xuICAgICAgICAgIHJldHVybiBhcnJheVNvbWUodmFsaWRhdGUodGhpcyksIGNhbGxiYWNrZm4sIGFyZ3VtZW50cy5sZW5ndGggPiAxID8gYXJndW1lbnRzWzFdIDogdW5kZWZpbmVkKTtcbiAgICAgICAgfSxcbiAgICAgICAgc29ydDogZnVuY3Rpb24gc29ydChjb21wYXJlZm4pIHtcbiAgICAgICAgICByZXR1cm4gYXJyYXlTb3J0LmNhbGwodmFsaWRhdGUodGhpcyksIGNvbXBhcmVmbik7XG4gICAgICAgIH0sXG4gICAgICAgIHN1YmFycmF5OiBmdW5jdGlvbiBzdWJhcnJheShiZWdpbiwgZW5kKSB7XG4gICAgICAgICAgdmFyIE8gPSB2YWxpZGF0ZSh0aGlzKTtcbiAgICAgICAgICB2YXIgbGVuZ3RoID0gTy5sZW5ndGg7XG4gICAgICAgICAgdmFyICRiZWdpbiA9IHRvQWJzb2x1dGVJbmRleChiZWdpbiwgbGVuZ3RoKTtcbiAgICAgICAgICByZXR1cm4gbmV3IChzcGVjaWVzQ29uc3RydWN0b3IoTywgT1tERUZfQ09OU1RSVUNUT1JdKSkoTy5idWZmZXIsIE8uYnl0ZU9mZnNldCArICRiZWdpbiAqIE8uQllURVNfUEVSX0VMRU1FTlQsIHRvTGVuZ3RoKChlbmQgPT09IHVuZGVmaW5lZCA/IGxlbmd0aCA6IHRvQWJzb2x1dGVJbmRleChlbmQsIGxlbmd0aCkpIC0gJGJlZ2luKSk7XG4gICAgICAgIH1cbiAgICAgIH07XG5cbiAgICAgIHZhciAkc2xpY2UgPSBmdW5jdGlvbiBzbGljZShzdGFydCwgZW5kKSB7XG4gICAgICAgIHJldHVybiBzcGVjaWVzRnJvbUxpc3QodGhpcywgYXJyYXlTbGljZS5jYWxsKHZhbGlkYXRlKHRoaXMpLCBzdGFydCwgZW5kKSk7XG4gICAgICB9O1xuXG4gICAgICB2YXIgJHNldCA9IGZ1bmN0aW9uIHNldChhcnJheUxpa2VcbiAgICAgIC8qICwgb2Zmc2V0ICovXG4gICAgICApIHtcbiAgICAgICAgdmFsaWRhdGUodGhpcyk7XG4gICAgICAgIHZhciBvZmZzZXQgPSB0b09mZnNldChhcmd1bWVudHNbMV0sIDEpO1xuICAgICAgICB2YXIgbGVuZ3RoID0gdGhpcy5sZW5ndGg7XG4gICAgICAgIHZhciBzcmMgPSB0b09iamVjdChhcnJheUxpa2UpO1xuICAgICAgICB2YXIgbGVuID0gdG9MZW5ndGgoc3JjLmxlbmd0aCk7XG4gICAgICAgIHZhciBpbmRleCA9IDA7XG4gICAgICAgIGlmIChsZW4gKyBvZmZzZXQgPiBsZW5ndGgpIHRocm93IFJhbmdlRXJyb3IoV1JPTkdfTEVOR1RIKTtcblxuICAgICAgICB3aGlsZSAoaW5kZXggPCBsZW4pIHtcbiAgICAgICAgICB0aGlzW29mZnNldCArIGluZGV4XSA9IHNyY1tpbmRleCsrXTtcbiAgICAgICAgfVxuICAgICAgfTtcblxuICAgICAgdmFyICRpdGVyYXRvcnMgPSB7XG4gICAgICAgIGVudHJpZXM6IGZ1bmN0aW9uIGVudHJpZXMoKSB7XG4gICAgICAgICAgcmV0dXJuIGFycmF5RW50cmllcy5jYWxsKHZhbGlkYXRlKHRoaXMpKTtcbiAgICAgICAgfSxcbiAgICAgICAga2V5czogZnVuY3Rpb24ga2V5cygpIHtcbiAgICAgICAgICByZXR1cm4gYXJyYXlLZXlzLmNhbGwodmFsaWRhdGUodGhpcykpO1xuICAgICAgICB9LFxuICAgICAgICB2YWx1ZXM6IGZ1bmN0aW9uIHZhbHVlcygpIHtcbiAgICAgICAgICByZXR1cm4gYXJyYXlWYWx1ZXMuY2FsbCh2YWxpZGF0ZSh0aGlzKSk7XG4gICAgICAgIH1cbiAgICAgIH07XG5cbiAgICAgIHZhciBpc1RBSW5kZXggPSBmdW5jdGlvbiBpc1RBSW5kZXgodGFyZ2V0LCBrZXkpIHtcbiAgICAgICAgcmV0dXJuIGlzT2JqZWN0KHRhcmdldCkgJiYgdGFyZ2V0W1RZUEVEX0FSUkFZXSAmJiBfdHlwZW9mKGtleSkgIT0gJ3N5bWJvbCcgJiYga2V5IGluIHRhcmdldCAmJiBTdHJpbmcoK2tleSkgPT0gU3RyaW5nKGtleSk7XG4gICAgICB9O1xuXG4gICAgICB2YXIgJGdldERlc2MgPSBmdW5jdGlvbiBnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IodGFyZ2V0LCBrZXkpIHtcbiAgICAgICAgcmV0dXJuIGlzVEFJbmRleCh0YXJnZXQsIGtleSA9IHRvUHJpbWl0aXZlKGtleSwgdHJ1ZSkpID8gcHJvcGVydHlEZXNjKDIsIHRhcmdldFtrZXldKSA6IGdPUEQodGFyZ2V0LCBrZXkpO1xuICAgICAgfTtcblxuICAgICAgdmFyICRzZXREZXNjID0gZnVuY3Rpb24gZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBrZXksIGRlc2MpIHtcbiAgICAgICAgaWYgKGlzVEFJbmRleCh0YXJnZXQsIGtleSA9IHRvUHJpbWl0aXZlKGtleSwgdHJ1ZSkpICYmIGlzT2JqZWN0KGRlc2MpICYmIGhhcyhkZXNjLCAndmFsdWUnKSAmJiAhaGFzKGRlc2MsICdnZXQnKSAmJiAhaGFzKGRlc2MsICdzZXQnKSAvLyBUT0RPOiBhZGQgdmFsaWRhdGlvbiBkZXNjcmlwdG9yIHcvbyBjYWxsaW5nIGFjY2Vzc29yc1xuICAgICAgICAmJiAhZGVzYy5jb25maWd1cmFibGUgJiYgKCFoYXMoZGVzYywgJ3dyaXRhYmxlJykgfHwgZGVzYy53cml0YWJsZSkgJiYgKCFoYXMoZGVzYywgJ2VudW1lcmFibGUnKSB8fCBkZXNjLmVudW1lcmFibGUpKSB7XG4gICAgICAgICAgdGFyZ2V0W2tleV0gPSBkZXNjLnZhbHVlO1xuICAgICAgICAgIHJldHVybiB0YXJnZXQ7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gZFAodGFyZ2V0LCBrZXksIGRlc2MpO1xuICAgICAgfTtcblxuICAgICAgaWYgKCFBTExfQ09OU1RSVUNUT1JTKSB7XG4gICAgICAgICRHT1BELmYgPSAkZ2V0RGVzYztcbiAgICAgICAgJERQLmYgPSAkc2V0RGVzYztcbiAgICAgIH1cblxuICAgICAgJGV4cG9ydCgkZXhwb3J0LlMgKyAkZXhwb3J0LkYgKiAhQUxMX0NPTlNUUlVDVE9SUywgJ09iamVjdCcsIHtcbiAgICAgICAgZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yOiAkZ2V0RGVzYyxcbiAgICAgICAgZGVmaW5lUHJvcGVydHk6ICRzZXREZXNjXG4gICAgICB9KTtcblxuICAgICAgaWYgKGZhaWxzKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgYXJyYXlUb1N0cmluZy5jYWxsKHt9KTtcbiAgICAgIH0pKSB7XG4gICAgICAgIGFycmF5VG9TdHJpbmcgPSBhcnJheVRvTG9jYWxlU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgICAgICAgcmV0dXJuIGFycmF5Sm9pbi5jYWxsKHRoaXMpO1xuICAgICAgICB9O1xuICAgICAgfVxuXG4gICAgICB2YXIgJFR5cGVkQXJyYXlQcm90b3R5cGUkID0gcmVkZWZpbmVBbGwoe30sIHByb3RvKTtcbiAgICAgIHJlZGVmaW5lQWxsKCRUeXBlZEFycmF5UHJvdG90eXBlJCwgJGl0ZXJhdG9ycyk7XG4gICAgICBoaWRlKCRUeXBlZEFycmF5UHJvdG90eXBlJCwgSVRFUkFUT1IsICRpdGVyYXRvcnMudmFsdWVzKTtcbiAgICAgIHJlZGVmaW5lQWxsKCRUeXBlZEFycmF5UHJvdG90eXBlJCwge1xuICAgICAgICBzbGljZTogJHNsaWNlLFxuICAgICAgICBzZXQ6ICRzZXQsXG4gICAgICAgIGNvbnN0cnVjdG9yOiBmdW5jdGlvbiBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgICAvKiBub29wICovXG4gICAgICAgIH0sXG4gICAgICAgIHRvU3RyaW5nOiBhcnJheVRvU3RyaW5nLFxuICAgICAgICB0b0xvY2FsZVN0cmluZzogJHRvTG9jYWxlU3RyaW5nXG4gICAgICB9KTtcbiAgICAgIGFkZEdldHRlcigkVHlwZWRBcnJheVByb3RvdHlwZSQsICdidWZmZXInLCAnYicpO1xuICAgICAgYWRkR2V0dGVyKCRUeXBlZEFycmF5UHJvdG90eXBlJCwgJ2J5dGVPZmZzZXQnLCAnbycpO1xuICAgICAgYWRkR2V0dGVyKCRUeXBlZEFycmF5UHJvdG90eXBlJCwgJ2J5dGVMZW5ndGgnLCAnbCcpO1xuICAgICAgYWRkR2V0dGVyKCRUeXBlZEFycmF5UHJvdG90eXBlJCwgJ2xlbmd0aCcsICdlJyk7XG4gICAgICBkUCgkVHlwZWRBcnJheVByb3RvdHlwZSQsIFRBRywge1xuICAgICAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgICAgICByZXR1cm4gdGhpc1tUWVBFRF9BUlJBWV07XG4gICAgICAgIH1cbiAgICAgIH0pOyAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbWF4LXN0YXRlbWVudHNcblxuICAgICAgbW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoS0VZLCBCWVRFUywgd3JhcHBlciwgQ0xBTVBFRCkge1xuICAgICAgICBDTEFNUEVEID0gISFDTEFNUEVEO1xuICAgICAgICB2YXIgTkFNRSA9IEtFWSArIChDTEFNUEVEID8gJ0NsYW1wZWQnIDogJycpICsgJ0FycmF5JztcbiAgICAgICAgdmFyIEdFVFRFUiA9ICdnZXQnICsgS0VZO1xuICAgICAgICB2YXIgU0VUVEVSID0gJ3NldCcgKyBLRVk7XG4gICAgICAgIHZhciBUeXBlZEFycmF5ID0gZ2xvYmFsW05BTUVdO1xuICAgICAgICB2YXIgQmFzZSA9IFR5cGVkQXJyYXkgfHwge307XG4gICAgICAgIHZhciBUQUMgPSBUeXBlZEFycmF5ICYmIGdldFByb3RvdHlwZU9mKFR5cGVkQXJyYXkpO1xuICAgICAgICB2YXIgRk9SQ0VEID0gIVR5cGVkQXJyYXkgfHwgISR0eXBlZC5BQlY7XG4gICAgICAgIHZhciBPID0ge307XG4gICAgICAgIHZhciBUeXBlZEFycmF5UHJvdG90eXBlID0gVHlwZWRBcnJheSAmJiBUeXBlZEFycmF5W1BST1RPVFlQRV07XG5cbiAgICAgICAgdmFyIGdldHRlciA9IGZ1bmN0aW9uIGdldHRlcih0aGF0LCBpbmRleCkge1xuICAgICAgICAgIHZhciBkYXRhID0gdGhhdC5fZDtcbiAgICAgICAgICByZXR1cm4gZGF0YS52W0dFVFRFUl0oaW5kZXggKiBCWVRFUyArIGRhdGEubywgTElUVExFX0VORElBTik7XG4gICAgICAgIH07XG5cbiAgICAgICAgdmFyIHNldHRlciA9IGZ1bmN0aW9uIHNldHRlcih0aGF0LCBpbmRleCwgdmFsdWUpIHtcbiAgICAgICAgICB2YXIgZGF0YSA9IHRoYXQuX2Q7XG4gICAgICAgICAgaWYgKENMQU1QRUQpIHZhbHVlID0gKHZhbHVlID0gTWF0aC5yb3VuZCh2YWx1ZSkpIDwgMCA/IDAgOiB2YWx1ZSA+IDB4ZmYgPyAweGZmIDogdmFsdWUgJiAweGZmO1xuICAgICAgICAgIGRhdGEudltTRVRURVJdKGluZGV4ICogQllURVMgKyBkYXRhLm8sIHZhbHVlLCBMSVRUTEVfRU5ESUFOKTtcbiAgICAgICAgfTtcblxuICAgICAgICB2YXIgYWRkRWxlbWVudCA9IGZ1bmN0aW9uIGFkZEVsZW1lbnQodGhhdCwgaW5kZXgpIHtcbiAgICAgICAgICBkUCh0aGF0LCBpbmRleCwge1xuICAgICAgICAgICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICAgICAgICAgIHJldHVybiBnZXR0ZXIodGhpcywgaW5kZXgpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHNldDogZnVuY3Rpb24gc2V0KHZhbHVlKSB7XG4gICAgICAgICAgICAgIHJldHVybiBzZXR0ZXIodGhpcywgaW5kZXgsIHZhbHVlKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBlbnVtZXJhYmxlOiB0cnVlXG4gICAgICAgICAgfSk7XG4gICAgICAgIH07XG5cbiAgICAgICAgaWYgKEZPUkNFRCkge1xuICAgICAgICAgIFR5cGVkQXJyYXkgPSB3cmFwcGVyKGZ1bmN0aW9uICh0aGF0LCBkYXRhLCAkb2Zmc2V0LCAkbGVuZ3RoKSB7XG4gICAgICAgICAgICBhbkluc3RhbmNlKHRoYXQsIFR5cGVkQXJyYXksIE5BTUUsICdfZCcpO1xuICAgICAgICAgICAgdmFyIGluZGV4ID0gMDtcbiAgICAgICAgICAgIHZhciBvZmZzZXQgPSAwO1xuICAgICAgICAgICAgdmFyIGJ1ZmZlciwgYnl0ZUxlbmd0aCwgbGVuZ3RoLCBrbGFzcztcblxuICAgICAgICAgICAgaWYgKCFpc09iamVjdChkYXRhKSkge1xuICAgICAgICAgICAgICBsZW5ndGggPSB0b0luZGV4KGRhdGEpO1xuICAgICAgICAgICAgICBieXRlTGVuZ3RoID0gbGVuZ3RoICogQllURVM7XG4gICAgICAgICAgICAgIGJ1ZmZlciA9IG5ldyAkQXJyYXlCdWZmZXIoYnl0ZUxlbmd0aCk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKGRhdGEgaW5zdGFuY2VvZiAkQXJyYXlCdWZmZXIgfHwgKGtsYXNzID0gY2xhc3NvZihkYXRhKSkgPT0gQVJSQVlfQlVGRkVSIHx8IGtsYXNzID09IFNIQVJFRF9CVUZGRVIpIHtcbiAgICAgICAgICAgICAgYnVmZmVyID0gZGF0YTtcbiAgICAgICAgICAgICAgb2Zmc2V0ID0gdG9PZmZzZXQoJG9mZnNldCwgQllURVMpO1xuICAgICAgICAgICAgICB2YXIgJGxlbiA9IGRhdGEuYnl0ZUxlbmd0aDtcblxuICAgICAgICAgICAgICBpZiAoJGxlbmd0aCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgaWYgKCRsZW4gJSBCWVRFUykgdGhyb3cgUmFuZ2VFcnJvcihXUk9OR19MRU5HVEgpO1xuICAgICAgICAgICAgICAgIGJ5dGVMZW5ndGggPSAkbGVuIC0gb2Zmc2V0O1xuICAgICAgICAgICAgICAgIGlmIChieXRlTGVuZ3RoIDwgMCkgdGhyb3cgUmFuZ2VFcnJvcihXUk9OR19MRU5HVEgpO1xuICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGJ5dGVMZW5ndGggPSB0b0xlbmd0aCgkbGVuZ3RoKSAqIEJZVEVTO1xuICAgICAgICAgICAgICAgIGlmIChieXRlTGVuZ3RoICsgb2Zmc2V0ID4gJGxlbikgdGhyb3cgUmFuZ2VFcnJvcihXUk9OR19MRU5HVEgpO1xuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgbGVuZ3RoID0gYnl0ZUxlbmd0aCAvIEJZVEVTO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChUWVBFRF9BUlJBWSBpbiBkYXRhKSB7XG4gICAgICAgICAgICAgIHJldHVybiBmcm9tTGlzdChUeXBlZEFycmF5LCBkYXRhKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIHJldHVybiAkZnJvbS5jYWxsKFR5cGVkQXJyYXksIGRhdGEpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBoaWRlKHRoYXQsICdfZCcsIHtcbiAgICAgICAgICAgICAgYjogYnVmZmVyLFxuICAgICAgICAgICAgICBvOiBvZmZzZXQsXG4gICAgICAgICAgICAgIGw6IGJ5dGVMZW5ndGgsXG4gICAgICAgICAgICAgIGU6IGxlbmd0aCxcbiAgICAgICAgICAgICAgdjogbmV3ICREYXRhVmlldyhidWZmZXIpXG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgd2hpbGUgKGluZGV4IDwgbGVuZ3RoKSB7XG4gICAgICAgICAgICAgIGFkZEVsZW1lbnQodGhhdCwgaW5kZXgrKyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSk7XG4gICAgICAgICAgVHlwZWRBcnJheVByb3RvdHlwZSA9IFR5cGVkQXJyYXlbUFJPVE9UWVBFXSA9IGNyZWF0ZSgkVHlwZWRBcnJheVByb3RvdHlwZSQpO1xuICAgICAgICAgIGhpZGUoVHlwZWRBcnJheVByb3RvdHlwZSwgJ2NvbnN0cnVjdG9yJywgVHlwZWRBcnJheSk7XG4gICAgICAgIH0gZWxzZSBpZiAoIWZhaWxzKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICBUeXBlZEFycmF5KDEpO1xuICAgICAgICB9KSB8fCAhZmFpbHMoZnVuY3Rpb24gKCkge1xuICAgICAgICAgIG5ldyBUeXBlZEFycmF5KC0xKTsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby1uZXdcbiAgICAgICAgfSkgfHwgISRpdGVyRGV0ZWN0KGZ1bmN0aW9uIChpdGVyKSB7XG4gICAgICAgICAgbmV3IFR5cGVkQXJyYXkoKTsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby1uZXdcblxuICAgICAgICAgIG5ldyBUeXBlZEFycmF5KG51bGwpOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLW5ld1xuXG4gICAgICAgICAgbmV3IFR5cGVkQXJyYXkoMS41KTsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby1uZXdcblxuICAgICAgICAgIG5ldyBUeXBlZEFycmF5KGl0ZXIpOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLW5ld1xuICAgICAgICB9LCB0cnVlKSkge1xuICAgICAgICAgIFR5cGVkQXJyYXkgPSB3cmFwcGVyKGZ1bmN0aW9uICh0aGF0LCBkYXRhLCAkb2Zmc2V0LCAkbGVuZ3RoKSB7XG4gICAgICAgICAgICBhbkluc3RhbmNlKHRoYXQsIFR5cGVkQXJyYXksIE5BTUUpO1xuICAgICAgICAgICAgdmFyIGtsYXNzOyAvLyBgd3NgIG1vZHVsZSBidWcsIHRlbXBvcmFyaWx5IHJlbW92ZSB2YWxpZGF0aW9uIGxlbmd0aCBmb3IgVWludDhBcnJheVxuICAgICAgICAgICAgLy8gaHR0cHM6Ly9naXRodWIuY29tL3dlYnNvY2tldHMvd3MvcHVsbC82NDVcblxuICAgICAgICAgICAgaWYgKCFpc09iamVjdChkYXRhKSkgcmV0dXJuIG5ldyBCYXNlKHRvSW5kZXgoZGF0YSkpO1xuXG4gICAgICAgICAgICBpZiAoZGF0YSBpbnN0YW5jZW9mICRBcnJheUJ1ZmZlciB8fCAoa2xhc3MgPSBjbGFzc29mKGRhdGEpKSA9PSBBUlJBWV9CVUZGRVIgfHwga2xhc3MgPT0gU0hBUkVEX0JVRkZFUikge1xuICAgICAgICAgICAgICByZXR1cm4gJGxlbmd0aCAhPT0gdW5kZWZpbmVkID8gbmV3IEJhc2UoZGF0YSwgdG9PZmZzZXQoJG9mZnNldCwgQllURVMpLCAkbGVuZ3RoKSA6ICRvZmZzZXQgIT09IHVuZGVmaW5lZCA/IG5ldyBCYXNlKGRhdGEsIHRvT2Zmc2V0KCRvZmZzZXQsIEJZVEVTKSkgOiBuZXcgQmFzZShkYXRhKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKFRZUEVEX0FSUkFZIGluIGRhdGEpIHJldHVybiBmcm9tTGlzdChUeXBlZEFycmF5LCBkYXRhKTtcbiAgICAgICAgICAgIHJldHVybiAkZnJvbS5jYWxsKFR5cGVkQXJyYXksIGRhdGEpO1xuICAgICAgICAgIH0pO1xuICAgICAgICAgIGFycmF5Rm9yRWFjaChUQUMgIT09IEZ1bmN0aW9uLnByb3RvdHlwZSA/IGdPUE4oQmFzZSkuY29uY2F0KGdPUE4oVEFDKSkgOiBnT1BOKEJhc2UpLCBmdW5jdGlvbiAoa2V5KSB7XG4gICAgICAgICAgICBpZiAoIShrZXkgaW4gVHlwZWRBcnJheSkpIGhpZGUoVHlwZWRBcnJheSwga2V5LCBCYXNlW2tleV0pO1xuICAgICAgICAgIH0pO1xuICAgICAgICAgIFR5cGVkQXJyYXlbUFJPVE9UWVBFXSA9IFR5cGVkQXJyYXlQcm90b3R5cGU7XG4gICAgICAgICAgaWYgKCFMSUJSQVJZKSBUeXBlZEFycmF5UHJvdG90eXBlLmNvbnN0cnVjdG9yID0gVHlwZWRBcnJheTtcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciAkbmF0aXZlSXRlcmF0b3IgPSBUeXBlZEFycmF5UHJvdG90eXBlW0lURVJBVE9SXTtcbiAgICAgICAgdmFyIENPUlJFQ1RfSVRFUl9OQU1FID0gISEkbmF0aXZlSXRlcmF0b3IgJiYgKCRuYXRpdmVJdGVyYXRvci5uYW1lID09ICd2YWx1ZXMnIHx8ICRuYXRpdmVJdGVyYXRvci5uYW1lID09IHVuZGVmaW5lZCk7XG4gICAgICAgIHZhciAkaXRlcmF0b3IgPSAkaXRlcmF0b3JzLnZhbHVlcztcbiAgICAgICAgaGlkZShUeXBlZEFycmF5LCBUWVBFRF9DT05TVFJVQ1RPUiwgdHJ1ZSk7XG4gICAgICAgIGhpZGUoVHlwZWRBcnJheVByb3RvdHlwZSwgVFlQRURfQVJSQVksIE5BTUUpO1xuICAgICAgICBoaWRlKFR5cGVkQXJyYXlQcm90b3R5cGUsIFZJRVcsIHRydWUpO1xuICAgICAgICBoaWRlKFR5cGVkQXJyYXlQcm90b3R5cGUsIERFRl9DT05TVFJVQ1RPUiwgVHlwZWRBcnJheSk7XG5cbiAgICAgICAgaWYgKENMQU1QRUQgPyBuZXcgVHlwZWRBcnJheSgxKVtUQUddICE9IE5BTUUgOiAhKFRBRyBpbiBUeXBlZEFycmF5UHJvdG90eXBlKSkge1xuICAgICAgICAgIGRQKFR5cGVkQXJyYXlQcm90b3R5cGUsIFRBRywge1xuICAgICAgICAgICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICAgICAgICAgIHJldHVybiBOQU1FO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgT1tOQU1FXSA9IFR5cGVkQXJyYXk7XG4gICAgICAgICRleHBvcnQoJGV4cG9ydC5HICsgJGV4cG9ydC5XICsgJGV4cG9ydC5GICogKFR5cGVkQXJyYXkgIT0gQmFzZSksIE8pO1xuICAgICAgICAkZXhwb3J0KCRleHBvcnQuUywgTkFNRSwge1xuICAgICAgICAgIEJZVEVTX1BFUl9FTEVNRU5UOiBCWVRFU1xuICAgICAgICB9KTtcbiAgICAgICAgJGV4cG9ydCgkZXhwb3J0LlMgKyAkZXhwb3J0LkYgKiBmYWlscyhmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgQmFzZS5vZi5jYWxsKFR5cGVkQXJyYXksIDEpO1xuICAgICAgICB9KSwgTkFNRSwge1xuICAgICAgICAgIGZyb206ICRmcm9tLFxuICAgICAgICAgIG9mOiAkb2ZcbiAgICAgICAgfSk7XG4gICAgICAgIGlmICghKEJZVEVTX1BFUl9FTEVNRU5UIGluIFR5cGVkQXJyYXlQcm90b3R5cGUpKSBoaWRlKFR5cGVkQXJyYXlQcm90b3R5cGUsIEJZVEVTX1BFUl9FTEVNRU5ULCBCWVRFUyk7XG4gICAgICAgICRleHBvcnQoJGV4cG9ydC5QLCBOQU1FLCBwcm90byk7XG4gICAgICAgIHNldFNwZWNpZXMoTkFNRSk7XG4gICAgICAgICRleHBvcnQoJGV4cG9ydC5QICsgJGV4cG9ydC5GICogRk9SQ0VEX1NFVCwgTkFNRSwge1xuICAgICAgICAgIHNldDogJHNldFxuICAgICAgICB9KTtcbiAgICAgICAgJGV4cG9ydCgkZXhwb3J0LlAgKyAkZXhwb3J0LkYgKiAhQ09SUkVDVF9JVEVSX05BTUUsIE5BTUUsICRpdGVyYXRvcnMpO1xuICAgICAgICBpZiAoIUxJQlJBUlkgJiYgVHlwZWRBcnJheVByb3RvdHlwZS50b1N0cmluZyAhPSBhcnJheVRvU3RyaW5nKSBUeXBlZEFycmF5UHJvdG90eXBlLnRvU3RyaW5nID0gYXJyYXlUb1N0cmluZztcbiAgICAgICAgJGV4cG9ydCgkZXhwb3J0LlAgKyAkZXhwb3J0LkYgKiBmYWlscyhmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgbmV3IFR5cGVkQXJyYXkoMSkuc2xpY2UoKTtcbiAgICAgICAgfSksIE5BTUUsIHtcbiAgICAgICAgICBzbGljZTogJHNsaWNlXG4gICAgICAgIH0pO1xuICAgICAgICAkZXhwb3J0KCRleHBvcnQuUCArICRleHBvcnQuRiAqIChmYWlscyhmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgcmV0dXJuIFsxLCAyXS50b0xvY2FsZVN0cmluZygpICE9IG5ldyBUeXBlZEFycmF5KFsxLCAyXSkudG9Mb2NhbGVTdHJpbmcoKTtcbiAgICAgICAgfSkgfHwgIWZhaWxzKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICBUeXBlZEFycmF5UHJvdG90eXBlLnRvTG9jYWxlU3RyaW5nLmNhbGwoWzEsIDJdKTtcbiAgICAgICAgfSkpLCBOQU1FLCB7XG4gICAgICAgICAgdG9Mb2NhbGVTdHJpbmc6ICR0b0xvY2FsZVN0cmluZ1xuICAgICAgICB9KTtcbiAgICAgICAgSXRlcmF0b3JzW05BTUVdID0gQ09SUkVDVF9JVEVSX05BTUUgPyAkbmF0aXZlSXRlcmF0b3IgOiAkaXRlcmF0b3I7XG4gICAgICAgIGlmICghTElCUkFSWSAmJiAhQ09SUkVDVF9JVEVSX05BTUUpIGhpZGUoVHlwZWRBcnJheVByb3RvdHlwZSwgSVRFUkFUT1IsICRpdGVyYXRvcik7XG4gICAgICB9O1xuICAgIH0gZWxzZSBtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIC8qIGVtcHR5ICovXG4gICAgfTtcbiAgfSwge1xuICAgIFwiMTAwXCI6IDEwMCxcbiAgICBcIjEwNFwiOiAxMDQsXG4gICAgXCIxMVwiOiAxMSxcbiAgICBcIjExNFwiOiAxMTQsXG4gICAgXCIxMTVcIjogMTE1LFxuICAgIFwiMTE2XCI6IDExNixcbiAgICBcIjExOFwiOiAxMTgsXG4gICAgXCIxMTlcIjogMTE5LFxuICAgIFwiMTJcIjogMTIsXG4gICAgXCIxMjBcIjogMTIwLFxuICAgIFwiMTIyXCI6IDEyMixcbiAgICBcIjEyM1wiOiAxMjMsXG4gICAgXCIxMjRcIjogMTI0LFxuICAgIFwiMTI4XCI6IDEyOCxcbiAgICBcIjEyOVwiOiAxMjksXG4gICAgXCIxNDFcIjogMTQxLFxuICAgIFwiMTdcIjogMTcsXG4gICAgXCIyNVwiOiAyNSxcbiAgICBcIjI5XCI6IDI5LFxuICAgIFwiMzNcIjogMzMsXG4gICAgXCIzNVwiOiAzNSxcbiAgICBcIjQwXCI6IDQwLFxuICAgIFwiNDFcIjogNDEsXG4gICAgXCI0MlwiOiA0MixcbiAgICBcIjQ4XCI6IDQ4LFxuICAgIFwiNTFcIjogNTEsXG4gICAgXCI1NlwiOiA1NixcbiAgICBcIjU4XCI6IDU4LFxuICAgIFwiNlwiOiA2LFxuICAgIFwiNjBcIjogNjAsXG4gICAgXCI3MVwiOiA3MSxcbiAgICBcIjcyXCI6IDcyLFxuICAgIFwiNzVcIjogNzUsXG4gICAgXCI3N1wiOiA3NyxcbiAgICBcIjc5XCI6IDc5LFxuICAgIFwiOFwiOiA4LFxuICAgIFwiOVwiOiA5LFxuICAgIFwiOTJcIjogOTIsXG4gICAgXCI5M1wiOiA5M1xuICB9XSxcbiAgMTIyOiBbZnVuY3Rpb24gKF9kZXJlcV8sIG1vZHVsZSwgZXhwb3J0cykge1xuICAgICd1c2Ugc3RyaWN0JztcblxuICAgIHZhciBnbG9iYWwgPSBfZGVyZXFfKDQwKTtcblxuICAgIHZhciBERVNDUklQVE9SUyA9IF9kZXJlcV8oMjkpO1xuXG4gICAgdmFyIExJQlJBUlkgPSBfZGVyZXFfKDYwKTtcblxuICAgIHZhciAkdHlwZWQgPSBfZGVyZXFfKDEyMyk7XG5cbiAgICB2YXIgaGlkZSA9IF9kZXJlcV8oNDIpO1xuXG4gICAgdmFyIHJlZGVmaW5lQWxsID0gX2RlcmVxXyg5Myk7XG5cbiAgICB2YXIgZmFpbHMgPSBfZGVyZXFfKDM1KTtcblxuICAgIHZhciBhbkluc3RhbmNlID0gX2RlcmVxXyg2KTtcblxuICAgIHZhciB0b0ludGVnZXIgPSBfZGVyZXFfKDExNik7XG5cbiAgICB2YXIgdG9MZW5ndGggPSBfZGVyZXFfKDExOCk7XG5cbiAgICB2YXIgdG9JbmRleCA9IF9kZXJlcV8oMTE1KTtcblxuICAgIHZhciBnT1BOID0gX2RlcmVxXyg3NykuZjtcblxuICAgIHZhciBkUCA9IF9kZXJlcV8oNzIpLmY7XG5cbiAgICB2YXIgYXJyYXlGaWxsID0gX2RlcmVxXyg5KTtcblxuICAgIHZhciBzZXRUb1N0cmluZ1RhZyA9IF9kZXJlcV8oMTAxKTtcblxuICAgIHZhciBBUlJBWV9CVUZGRVIgPSAnQXJyYXlCdWZmZXInO1xuICAgIHZhciBEQVRBX1ZJRVcgPSAnRGF0YVZpZXcnO1xuICAgIHZhciBQUk9UT1RZUEUgPSAncHJvdG90eXBlJztcbiAgICB2YXIgV1JPTkdfTEVOR1RIID0gJ1dyb25nIGxlbmd0aCEnO1xuICAgIHZhciBXUk9OR19JTkRFWCA9ICdXcm9uZyBpbmRleCEnO1xuICAgIHZhciAkQXJyYXlCdWZmZXIgPSBnbG9iYWxbQVJSQVlfQlVGRkVSXTtcbiAgICB2YXIgJERhdGFWaWV3ID0gZ2xvYmFsW0RBVEFfVklFV107XG4gICAgdmFyIE1hdGggPSBnbG9iYWwuTWF0aDtcbiAgICB2YXIgUmFuZ2VFcnJvciA9IGdsb2JhbC5SYW5nZUVycm9yOyAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tc2hhZG93LXJlc3RyaWN0ZWQtbmFtZXNcblxuICAgIHZhciBJbmZpbml0eSA9IGdsb2JhbC5JbmZpbml0eTtcbiAgICB2YXIgQmFzZUJ1ZmZlciA9ICRBcnJheUJ1ZmZlcjtcbiAgICB2YXIgYWJzID0gTWF0aC5hYnM7XG4gICAgdmFyIHBvdyA9IE1hdGgucG93O1xuICAgIHZhciBmbG9vciA9IE1hdGguZmxvb3I7XG4gICAgdmFyIGxvZyA9IE1hdGgubG9nO1xuICAgIHZhciBMTjIgPSBNYXRoLkxOMjtcbiAgICB2YXIgQlVGRkVSID0gJ2J1ZmZlcic7XG4gICAgdmFyIEJZVEVfTEVOR1RIID0gJ2J5dGVMZW5ndGgnO1xuICAgIHZhciBCWVRFX09GRlNFVCA9ICdieXRlT2Zmc2V0JztcbiAgICB2YXIgJEJVRkZFUiA9IERFU0NSSVBUT1JTID8gJ19iJyA6IEJVRkZFUjtcbiAgICB2YXIgJExFTkdUSCA9IERFU0NSSVBUT1JTID8gJ19sJyA6IEJZVEVfTEVOR1RIO1xuICAgIHZhciAkT0ZGU0VUID0gREVTQ1JJUFRPUlMgPyAnX28nIDogQllURV9PRkZTRVQ7IC8vIElFRUU3NTQgY29udmVyc2lvbnMgYmFzZWQgb24gaHR0cHM6Ly9naXRodWIuY29tL2Zlcm9zcy9pZWVlNzU0XG5cbiAgICBmdW5jdGlvbiBwYWNrSUVFRTc1NCh2YWx1ZSwgbUxlbiwgbkJ5dGVzKSB7XG4gICAgICB2YXIgYnVmZmVyID0gQXJyYXkobkJ5dGVzKTtcbiAgICAgIHZhciBlTGVuID0gbkJ5dGVzICogOCAtIG1MZW4gLSAxO1xuICAgICAgdmFyIGVNYXggPSAoMSA8PCBlTGVuKSAtIDE7XG4gICAgICB2YXIgZUJpYXMgPSBlTWF4ID4+IDE7XG4gICAgICB2YXIgcnQgPSBtTGVuID09PSAyMyA/IHBvdygyLCAtMjQpIC0gcG93KDIsIC03NykgOiAwO1xuICAgICAgdmFyIGkgPSAwO1xuICAgICAgdmFyIHMgPSB2YWx1ZSA8IDAgfHwgdmFsdWUgPT09IDAgJiYgMSAvIHZhbHVlIDwgMCA/IDEgOiAwO1xuICAgICAgdmFyIGUsIG0sIGM7XG4gICAgICB2YWx1ZSA9IGFicyh2YWx1ZSk7IC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1zZWxmLWNvbXBhcmVcblxuICAgICAgaWYgKHZhbHVlICE9IHZhbHVlIHx8IHZhbHVlID09PSBJbmZpbml0eSkge1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tc2VsZi1jb21wYXJlXG4gICAgICAgIG0gPSB2YWx1ZSAhPSB2YWx1ZSA/IDEgOiAwO1xuICAgICAgICBlID0gZU1heDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGUgPSBmbG9vcihsb2codmFsdWUpIC8gTE4yKTtcblxuICAgICAgICBpZiAodmFsdWUgKiAoYyA9IHBvdygyLCAtZSkpIDwgMSkge1xuICAgICAgICAgIGUtLTtcbiAgICAgICAgICBjICo9IDI7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoZSArIGVCaWFzID49IDEpIHtcbiAgICAgICAgICB2YWx1ZSArPSBydCAvIGM7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdmFsdWUgKz0gcnQgKiBwb3coMiwgMSAtIGVCaWFzKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh2YWx1ZSAqIGMgPj0gMikge1xuICAgICAgICAgIGUrKztcbiAgICAgICAgICBjIC89IDI7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoZSArIGVCaWFzID49IGVNYXgpIHtcbiAgICAgICAgICBtID0gMDtcbiAgICAgICAgICBlID0gZU1heDtcbiAgICAgICAgfSBlbHNlIGlmIChlICsgZUJpYXMgPj0gMSkge1xuICAgICAgICAgIG0gPSAodmFsdWUgKiBjIC0gMSkgKiBwb3coMiwgbUxlbik7XG4gICAgICAgICAgZSA9IGUgKyBlQmlhcztcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBtID0gdmFsdWUgKiBwb3coMiwgZUJpYXMgLSAxKSAqIHBvdygyLCBtTGVuKTtcbiAgICAgICAgICBlID0gMDtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBmb3IgKDsgbUxlbiA+PSA4OyBidWZmZXJbaSsrXSA9IG0gJiAyNTUsIG0gLz0gMjU2LCBtTGVuIC09IDgpIHtcbiAgICAgICAgO1xuICAgICAgfVxuXG4gICAgICBlID0gZSA8PCBtTGVuIHwgbTtcbiAgICAgIGVMZW4gKz0gbUxlbjtcblxuICAgICAgZm9yICg7IGVMZW4gPiAwOyBidWZmZXJbaSsrXSA9IGUgJiAyNTUsIGUgLz0gMjU2LCBlTGVuIC09IDgpIHtcbiAgICAgICAgO1xuICAgICAgfVxuXG4gICAgICBidWZmZXJbLS1pXSB8PSBzICogMTI4O1xuICAgICAgcmV0dXJuIGJ1ZmZlcjtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiB1bnBhY2tJRUVFNzU0KGJ1ZmZlciwgbUxlbiwgbkJ5dGVzKSB7XG4gICAgICB2YXIgZUxlbiA9IG5CeXRlcyAqIDggLSBtTGVuIC0gMTtcbiAgICAgIHZhciBlTWF4ID0gKDEgPDwgZUxlbikgLSAxO1xuICAgICAgdmFyIGVCaWFzID0gZU1heCA+PiAxO1xuICAgICAgdmFyIG5CaXRzID0gZUxlbiAtIDc7XG4gICAgICB2YXIgaSA9IG5CeXRlcyAtIDE7XG4gICAgICB2YXIgcyA9IGJ1ZmZlcltpLS1dO1xuICAgICAgdmFyIGUgPSBzICYgMTI3O1xuICAgICAgdmFyIG07XG4gICAgICBzID4+PSA3O1xuXG4gICAgICBmb3IgKDsgbkJpdHMgPiAwOyBlID0gZSAqIDI1NiArIGJ1ZmZlcltpXSwgaS0tLCBuQml0cyAtPSA4KSB7XG4gICAgICAgIDtcbiAgICAgIH1cblxuICAgICAgbSA9IGUgJiAoMSA8PCAtbkJpdHMpIC0gMTtcbiAgICAgIGUgPj49IC1uQml0cztcbiAgICAgIG5CaXRzICs9IG1MZW47XG5cbiAgICAgIGZvciAoOyBuQml0cyA+IDA7IG0gPSBtICogMjU2ICsgYnVmZmVyW2ldLCBpLS0sIG5CaXRzIC09IDgpIHtcbiAgICAgICAgO1xuICAgICAgfVxuXG4gICAgICBpZiAoZSA9PT0gMCkge1xuICAgICAgICBlID0gMSAtIGVCaWFzO1xuICAgICAgfSBlbHNlIGlmIChlID09PSBlTWF4KSB7XG4gICAgICAgIHJldHVybiBtID8gTmFOIDogcyA/IC1JbmZpbml0eSA6IEluZmluaXR5O1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgbSA9IG0gKyBwb3coMiwgbUxlbik7XG4gICAgICAgIGUgPSBlIC0gZUJpYXM7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiAocyA/IC0xIDogMSkgKiBtICogcG93KDIsIGUgLSBtTGVuKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiB1bnBhY2tJMzIoYnl0ZXMpIHtcbiAgICAgIHJldHVybiBieXRlc1szXSA8PCAyNCB8IGJ5dGVzWzJdIDw8IDE2IHwgYnl0ZXNbMV0gPDwgOCB8IGJ5dGVzWzBdO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHBhY2tJOChpdCkge1xuICAgICAgcmV0dXJuIFtpdCAmIDB4ZmZdO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHBhY2tJMTYoaXQpIHtcbiAgICAgIHJldHVybiBbaXQgJiAweGZmLCBpdCA+PiA4ICYgMHhmZl07XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gcGFja0kzMihpdCkge1xuICAgICAgcmV0dXJuIFtpdCAmIDB4ZmYsIGl0ID4+IDggJiAweGZmLCBpdCA+PiAxNiAmIDB4ZmYsIGl0ID4+IDI0ICYgMHhmZl07XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gcGFja0Y2NChpdCkge1xuICAgICAgcmV0dXJuIHBhY2tJRUVFNzU0KGl0LCA1MiwgOCk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gcGFja0YzMihpdCkge1xuICAgICAgcmV0dXJuIHBhY2tJRUVFNzU0KGl0LCAyMywgNCk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gYWRkR2V0dGVyKEMsIGtleSwgaW50ZXJuYWwpIHtcbiAgICAgIGRQKENbUFJPVE9UWVBFXSwga2V5LCB7XG4gICAgICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgICAgIHJldHVybiB0aGlzW2ludGVybmFsXTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZ2V0KHZpZXcsIGJ5dGVzLCBpbmRleCwgaXNMaXR0bGVFbmRpYW4pIHtcbiAgICAgIHZhciBudW1JbmRleCA9ICtpbmRleDtcbiAgICAgIHZhciBpbnRJbmRleCA9IHRvSW5kZXgobnVtSW5kZXgpO1xuICAgICAgaWYgKGludEluZGV4ICsgYnl0ZXMgPiB2aWV3WyRMRU5HVEhdKSB0aHJvdyBSYW5nZUVycm9yKFdST05HX0lOREVYKTtcbiAgICAgIHZhciBzdG9yZSA9IHZpZXdbJEJVRkZFUl0uX2I7XG4gICAgICB2YXIgc3RhcnQgPSBpbnRJbmRleCArIHZpZXdbJE9GRlNFVF07XG4gICAgICB2YXIgcGFjayA9IHN0b3JlLnNsaWNlKHN0YXJ0LCBzdGFydCArIGJ5dGVzKTtcbiAgICAgIHJldHVybiBpc0xpdHRsZUVuZGlhbiA/IHBhY2sgOiBwYWNrLnJldmVyc2UoKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBzZXQodmlldywgYnl0ZXMsIGluZGV4LCBjb252ZXJzaW9uLCB2YWx1ZSwgaXNMaXR0bGVFbmRpYW4pIHtcbiAgICAgIHZhciBudW1JbmRleCA9ICtpbmRleDtcbiAgICAgIHZhciBpbnRJbmRleCA9IHRvSW5kZXgobnVtSW5kZXgpO1xuICAgICAgaWYgKGludEluZGV4ICsgYnl0ZXMgPiB2aWV3WyRMRU5HVEhdKSB0aHJvdyBSYW5nZUVycm9yKFdST05HX0lOREVYKTtcbiAgICAgIHZhciBzdG9yZSA9IHZpZXdbJEJVRkZFUl0uX2I7XG4gICAgICB2YXIgc3RhcnQgPSBpbnRJbmRleCArIHZpZXdbJE9GRlNFVF07XG4gICAgICB2YXIgcGFjayA9IGNvbnZlcnNpb24oK3ZhbHVlKTtcblxuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBieXRlczsgaSsrKSB7XG4gICAgICAgIHN0b3JlW3N0YXJ0ICsgaV0gPSBwYWNrW2lzTGl0dGxlRW5kaWFuID8gaSA6IGJ5dGVzIC0gaSAtIDFdO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmICghJHR5cGVkLkFCVikge1xuICAgICAgJEFycmF5QnVmZmVyID0gZnVuY3Rpb24gQXJyYXlCdWZmZXIobGVuZ3RoKSB7XG4gICAgICAgIGFuSW5zdGFuY2UodGhpcywgJEFycmF5QnVmZmVyLCBBUlJBWV9CVUZGRVIpO1xuICAgICAgICB2YXIgYnl0ZUxlbmd0aCA9IHRvSW5kZXgobGVuZ3RoKTtcbiAgICAgICAgdGhpcy5fYiA9IGFycmF5RmlsbC5jYWxsKEFycmF5KGJ5dGVMZW5ndGgpLCAwKTtcbiAgICAgICAgdGhpc1skTEVOR1RIXSA9IGJ5dGVMZW5ndGg7XG4gICAgICB9O1xuXG4gICAgICAkRGF0YVZpZXcgPSBmdW5jdGlvbiBEYXRhVmlldyhidWZmZXIsIGJ5dGVPZmZzZXQsIGJ5dGVMZW5ndGgpIHtcbiAgICAgICAgYW5JbnN0YW5jZSh0aGlzLCAkRGF0YVZpZXcsIERBVEFfVklFVyk7XG4gICAgICAgIGFuSW5zdGFuY2UoYnVmZmVyLCAkQXJyYXlCdWZmZXIsIERBVEFfVklFVyk7XG4gICAgICAgIHZhciBidWZmZXJMZW5ndGggPSBidWZmZXJbJExFTkdUSF07XG4gICAgICAgIHZhciBvZmZzZXQgPSB0b0ludGVnZXIoYnl0ZU9mZnNldCk7XG4gICAgICAgIGlmIChvZmZzZXQgPCAwIHx8IG9mZnNldCA+IGJ1ZmZlckxlbmd0aCkgdGhyb3cgUmFuZ2VFcnJvcignV3Jvbmcgb2Zmc2V0IScpO1xuICAgICAgICBieXRlTGVuZ3RoID0gYnl0ZUxlbmd0aCA9PT0gdW5kZWZpbmVkID8gYnVmZmVyTGVuZ3RoIC0gb2Zmc2V0IDogdG9MZW5ndGgoYnl0ZUxlbmd0aCk7XG4gICAgICAgIGlmIChvZmZzZXQgKyBieXRlTGVuZ3RoID4gYnVmZmVyTGVuZ3RoKSB0aHJvdyBSYW5nZUVycm9yKFdST05HX0xFTkdUSCk7XG4gICAgICAgIHRoaXNbJEJVRkZFUl0gPSBidWZmZXI7XG4gICAgICAgIHRoaXNbJE9GRlNFVF0gPSBvZmZzZXQ7XG4gICAgICAgIHRoaXNbJExFTkdUSF0gPSBieXRlTGVuZ3RoO1xuICAgICAgfTtcblxuICAgICAgaWYgKERFU0NSSVBUT1JTKSB7XG4gICAgICAgIGFkZEdldHRlcigkQXJyYXlCdWZmZXIsIEJZVEVfTEVOR1RILCAnX2wnKTtcbiAgICAgICAgYWRkR2V0dGVyKCREYXRhVmlldywgQlVGRkVSLCAnX2InKTtcbiAgICAgICAgYWRkR2V0dGVyKCREYXRhVmlldywgQllURV9MRU5HVEgsICdfbCcpO1xuICAgICAgICBhZGRHZXR0ZXIoJERhdGFWaWV3LCBCWVRFX09GRlNFVCwgJ19vJyk7XG4gICAgICB9XG5cbiAgICAgIHJlZGVmaW5lQWxsKCREYXRhVmlld1tQUk9UT1RZUEVdLCB7XG4gICAgICAgIGdldEludDg6IGZ1bmN0aW9uIGdldEludDgoYnl0ZU9mZnNldCkge1xuICAgICAgICAgIHJldHVybiBnZXQodGhpcywgMSwgYnl0ZU9mZnNldClbMF0gPDwgMjQgPj4gMjQ7XG4gICAgICAgIH0sXG4gICAgICAgIGdldFVpbnQ4OiBmdW5jdGlvbiBnZXRVaW50OChieXRlT2Zmc2V0KSB7XG4gICAgICAgICAgcmV0dXJuIGdldCh0aGlzLCAxLCBieXRlT2Zmc2V0KVswXTtcbiAgICAgICAgfSxcbiAgICAgICAgZ2V0SW50MTY6IGZ1bmN0aW9uIGdldEludDE2KGJ5dGVPZmZzZXRcbiAgICAgICAgLyogLCBsaXR0bGVFbmRpYW4gKi9cbiAgICAgICAgKSB7XG4gICAgICAgICAgdmFyIGJ5dGVzID0gZ2V0KHRoaXMsIDIsIGJ5dGVPZmZzZXQsIGFyZ3VtZW50c1sxXSk7XG4gICAgICAgICAgcmV0dXJuIChieXRlc1sxXSA8PCA4IHwgYnl0ZXNbMF0pIDw8IDE2ID4+IDE2O1xuICAgICAgICB9LFxuICAgICAgICBnZXRVaW50MTY6IGZ1bmN0aW9uIGdldFVpbnQxNihieXRlT2Zmc2V0XG4gICAgICAgIC8qICwgbGl0dGxlRW5kaWFuICovXG4gICAgICAgICkge1xuICAgICAgICAgIHZhciBieXRlcyA9IGdldCh0aGlzLCAyLCBieXRlT2Zmc2V0LCBhcmd1bWVudHNbMV0pO1xuICAgICAgICAgIHJldHVybiBieXRlc1sxXSA8PCA4IHwgYnl0ZXNbMF07XG4gICAgICAgIH0sXG4gICAgICAgIGdldEludDMyOiBmdW5jdGlvbiBnZXRJbnQzMihieXRlT2Zmc2V0XG4gICAgICAgIC8qICwgbGl0dGxlRW5kaWFuICovXG4gICAgICAgICkge1xuICAgICAgICAgIHJldHVybiB1bnBhY2tJMzIoZ2V0KHRoaXMsIDQsIGJ5dGVPZmZzZXQsIGFyZ3VtZW50c1sxXSkpO1xuICAgICAgICB9LFxuICAgICAgICBnZXRVaW50MzI6IGZ1bmN0aW9uIGdldFVpbnQzMihieXRlT2Zmc2V0XG4gICAgICAgIC8qICwgbGl0dGxlRW5kaWFuICovXG4gICAgICAgICkge1xuICAgICAgICAgIHJldHVybiB1bnBhY2tJMzIoZ2V0KHRoaXMsIDQsIGJ5dGVPZmZzZXQsIGFyZ3VtZW50c1sxXSkpID4+PiAwO1xuICAgICAgICB9LFxuICAgICAgICBnZXRGbG9hdDMyOiBmdW5jdGlvbiBnZXRGbG9hdDMyKGJ5dGVPZmZzZXRcbiAgICAgICAgLyogLCBsaXR0bGVFbmRpYW4gKi9cbiAgICAgICAgKSB7XG4gICAgICAgICAgcmV0dXJuIHVucGFja0lFRUU3NTQoZ2V0KHRoaXMsIDQsIGJ5dGVPZmZzZXQsIGFyZ3VtZW50c1sxXSksIDIzLCA0KTtcbiAgICAgICAgfSxcbiAgICAgICAgZ2V0RmxvYXQ2NDogZnVuY3Rpb24gZ2V0RmxvYXQ2NChieXRlT2Zmc2V0XG4gICAgICAgIC8qICwgbGl0dGxlRW5kaWFuICovXG4gICAgICAgICkge1xuICAgICAgICAgIHJldHVybiB1bnBhY2tJRUVFNzU0KGdldCh0aGlzLCA4LCBieXRlT2Zmc2V0LCBhcmd1bWVudHNbMV0pLCA1MiwgOCk7XG4gICAgICAgIH0sXG4gICAgICAgIHNldEludDg6IGZ1bmN0aW9uIHNldEludDgoYnl0ZU9mZnNldCwgdmFsdWUpIHtcbiAgICAgICAgICBzZXQodGhpcywgMSwgYnl0ZU9mZnNldCwgcGFja0k4LCB2YWx1ZSk7XG4gICAgICAgIH0sXG4gICAgICAgIHNldFVpbnQ4OiBmdW5jdGlvbiBzZXRVaW50OChieXRlT2Zmc2V0LCB2YWx1ZSkge1xuICAgICAgICAgIHNldCh0aGlzLCAxLCBieXRlT2Zmc2V0LCBwYWNrSTgsIHZhbHVlKTtcbiAgICAgICAgfSxcbiAgICAgICAgc2V0SW50MTY6IGZ1bmN0aW9uIHNldEludDE2KGJ5dGVPZmZzZXQsIHZhbHVlXG4gICAgICAgIC8qICwgbGl0dGxlRW5kaWFuICovXG4gICAgICAgICkge1xuICAgICAgICAgIHNldCh0aGlzLCAyLCBieXRlT2Zmc2V0LCBwYWNrSTE2LCB2YWx1ZSwgYXJndW1lbnRzWzJdKTtcbiAgICAgICAgfSxcbiAgICAgICAgc2V0VWludDE2OiBmdW5jdGlvbiBzZXRVaW50MTYoYnl0ZU9mZnNldCwgdmFsdWVcbiAgICAgICAgLyogLCBsaXR0bGVFbmRpYW4gKi9cbiAgICAgICAgKSB7XG4gICAgICAgICAgc2V0KHRoaXMsIDIsIGJ5dGVPZmZzZXQsIHBhY2tJMTYsIHZhbHVlLCBhcmd1bWVudHNbMl0pO1xuICAgICAgICB9LFxuICAgICAgICBzZXRJbnQzMjogZnVuY3Rpb24gc2V0SW50MzIoYnl0ZU9mZnNldCwgdmFsdWVcbiAgICAgICAgLyogLCBsaXR0bGVFbmRpYW4gKi9cbiAgICAgICAgKSB7XG4gICAgICAgICAgc2V0KHRoaXMsIDQsIGJ5dGVPZmZzZXQsIHBhY2tJMzIsIHZhbHVlLCBhcmd1bWVudHNbMl0pO1xuICAgICAgICB9LFxuICAgICAgICBzZXRVaW50MzI6IGZ1bmN0aW9uIHNldFVpbnQzMihieXRlT2Zmc2V0LCB2YWx1ZVxuICAgICAgICAvKiAsIGxpdHRsZUVuZGlhbiAqL1xuICAgICAgICApIHtcbiAgICAgICAgICBzZXQodGhpcywgNCwgYnl0ZU9mZnNldCwgcGFja0kzMiwgdmFsdWUsIGFyZ3VtZW50c1syXSk7XG4gICAgICAgIH0sXG4gICAgICAgIHNldEZsb2F0MzI6IGZ1bmN0aW9uIHNldEZsb2F0MzIoYnl0ZU9mZnNldCwgdmFsdWVcbiAgICAgICAgLyogLCBsaXR0bGVFbmRpYW4gKi9cbiAgICAgICAgKSB7XG4gICAgICAgICAgc2V0KHRoaXMsIDQsIGJ5dGVPZmZzZXQsIHBhY2tGMzIsIHZhbHVlLCBhcmd1bWVudHNbMl0pO1xuICAgICAgICB9LFxuICAgICAgICBzZXRGbG9hdDY0OiBmdW5jdGlvbiBzZXRGbG9hdDY0KGJ5dGVPZmZzZXQsIHZhbHVlXG4gICAgICAgIC8qICwgbGl0dGxlRW5kaWFuICovXG4gICAgICAgICkge1xuICAgICAgICAgIHNldCh0aGlzLCA4LCBieXRlT2Zmc2V0LCBwYWNrRjY0LCB2YWx1ZSwgYXJndW1lbnRzWzJdKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmICghZmFpbHMoZnVuY3Rpb24gKCkge1xuICAgICAgICAkQXJyYXlCdWZmZXIoMSk7XG4gICAgICB9KSB8fCAhZmFpbHMoZnVuY3Rpb24gKCkge1xuICAgICAgICBuZXcgJEFycmF5QnVmZmVyKC0xKTsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby1uZXdcbiAgICAgIH0pIHx8IGZhaWxzKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgbmV3ICRBcnJheUJ1ZmZlcigpOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLW5ld1xuXG4gICAgICAgIG5ldyAkQXJyYXlCdWZmZXIoMS41KTsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby1uZXdcblxuICAgICAgICBuZXcgJEFycmF5QnVmZmVyKE5hTik7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tbmV3XG5cbiAgICAgICAgcmV0dXJuICRBcnJheUJ1ZmZlci5uYW1lICE9IEFSUkFZX0JVRkZFUjtcbiAgICAgIH0pKSB7XG4gICAgICAgICRBcnJheUJ1ZmZlciA9IGZ1bmN0aW9uIEFycmF5QnVmZmVyKGxlbmd0aCkge1xuICAgICAgICAgIGFuSW5zdGFuY2UodGhpcywgJEFycmF5QnVmZmVyKTtcbiAgICAgICAgICByZXR1cm4gbmV3IEJhc2VCdWZmZXIodG9JbmRleChsZW5ndGgpKTtcbiAgICAgICAgfTtcblxuICAgICAgICB2YXIgQXJyYXlCdWZmZXJQcm90byA9ICRBcnJheUJ1ZmZlcltQUk9UT1RZUEVdID0gQmFzZUJ1ZmZlcltQUk9UT1RZUEVdO1xuXG4gICAgICAgIGZvciAodmFyIGtleXMgPSBnT1BOKEJhc2VCdWZmZXIpLCBqID0gMCwga2V5OyBrZXlzLmxlbmd0aCA+IGo7KSB7XG4gICAgICAgICAgaWYgKCEoKGtleSA9IGtleXNbaisrXSkgaW4gJEFycmF5QnVmZmVyKSkgaGlkZSgkQXJyYXlCdWZmZXIsIGtleSwgQmFzZUJ1ZmZlcltrZXldKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICghTElCUkFSWSkgQXJyYXlCdWZmZXJQcm90by5jb25zdHJ1Y3RvciA9ICRBcnJheUJ1ZmZlcjtcbiAgICAgIH0gLy8gaU9TIFNhZmFyaSA3LnggYnVnXG5cblxuICAgICAgdmFyIHZpZXcgPSBuZXcgJERhdGFWaWV3KG5ldyAkQXJyYXlCdWZmZXIoMikpO1xuICAgICAgdmFyICRzZXRJbnQ4ID0gJERhdGFWaWV3W1BST1RPVFlQRV0uc2V0SW50ODtcbiAgICAgIHZpZXcuc2V0SW50OCgwLCAyMTQ3NDgzNjQ4KTtcbiAgICAgIHZpZXcuc2V0SW50OCgxLCAyMTQ3NDgzNjQ5KTtcbiAgICAgIGlmICh2aWV3LmdldEludDgoMCkgfHwgIXZpZXcuZ2V0SW50OCgxKSkgcmVkZWZpbmVBbGwoJERhdGFWaWV3W1BST1RPVFlQRV0sIHtcbiAgICAgICAgc2V0SW50ODogZnVuY3Rpb24gc2V0SW50OChieXRlT2Zmc2V0LCB2YWx1ZSkge1xuICAgICAgICAgICRzZXRJbnQ4LmNhbGwodGhpcywgYnl0ZU9mZnNldCwgdmFsdWUgPDwgMjQgPj4gMjQpO1xuICAgICAgICB9LFxuICAgICAgICBzZXRVaW50ODogZnVuY3Rpb24gc2V0VWludDgoYnl0ZU9mZnNldCwgdmFsdWUpIHtcbiAgICAgICAgICAkc2V0SW50OC5jYWxsKHRoaXMsIGJ5dGVPZmZzZXQsIHZhbHVlIDw8IDI0ID4+IDI0KTtcbiAgICAgICAgfVxuICAgICAgfSwgdHJ1ZSk7XG4gICAgfVxuXG4gICAgc2V0VG9TdHJpbmdUYWcoJEFycmF5QnVmZmVyLCBBUlJBWV9CVUZGRVIpO1xuICAgIHNldFRvU3RyaW5nVGFnKCREYXRhVmlldywgREFUQV9WSUVXKTtcbiAgICBoaWRlKCREYXRhVmlld1tQUk9UT1RZUEVdLCAkdHlwZWQuVklFVywgdHJ1ZSk7XG4gICAgZXhwb3J0c1tBUlJBWV9CVUZGRVJdID0gJEFycmF5QnVmZmVyO1xuICAgIGV4cG9ydHNbREFUQV9WSUVXXSA9ICREYXRhVmlldztcbiAgfSwge1xuICAgIFwiMTAxXCI6IDEwMSxcbiAgICBcIjExNVwiOiAxMTUsXG4gICAgXCIxMTZcIjogMTE2LFxuICAgIFwiMTE4XCI6IDExOCxcbiAgICBcIjEyM1wiOiAxMjMsXG4gICAgXCIyOVwiOiAyOSxcbiAgICBcIjM1XCI6IDM1LFxuICAgIFwiNDBcIjogNDAsXG4gICAgXCI0MlwiOiA0MixcbiAgICBcIjZcIjogNixcbiAgICBcIjYwXCI6IDYwLFxuICAgIFwiNzJcIjogNzIsXG4gICAgXCI3N1wiOiA3NyxcbiAgICBcIjlcIjogOSxcbiAgICBcIjkzXCI6IDkzXG4gIH1dLFxuICAxMjM6IFtmdW5jdGlvbiAoX2RlcmVxXywgbW9kdWxlLCBleHBvcnRzKSB7XG4gICAgdmFyIGdsb2JhbCA9IF9kZXJlcV8oNDApO1xuXG4gICAgdmFyIGhpZGUgPSBfZGVyZXFfKDQyKTtcblxuICAgIHZhciB1aWQgPSBfZGVyZXFfKDEyNCk7XG5cbiAgICB2YXIgVFlQRUQgPSB1aWQoJ3R5cGVkX2FycmF5Jyk7XG4gICAgdmFyIFZJRVcgPSB1aWQoJ3ZpZXcnKTtcbiAgICB2YXIgQUJWID0gISEoZ2xvYmFsLkFycmF5QnVmZmVyICYmIGdsb2JhbC5EYXRhVmlldyk7XG4gICAgdmFyIENPTlNUUiA9IEFCVjtcbiAgICB2YXIgaSA9IDA7XG4gICAgdmFyIGwgPSA5O1xuICAgIHZhciBUeXBlZDtcbiAgICB2YXIgVHlwZWRBcnJheUNvbnN0cnVjdG9ycyA9ICdJbnQ4QXJyYXksVWludDhBcnJheSxVaW50OENsYW1wZWRBcnJheSxJbnQxNkFycmF5LFVpbnQxNkFycmF5LEludDMyQXJyYXksVWludDMyQXJyYXksRmxvYXQzMkFycmF5LEZsb2F0NjRBcnJheScuc3BsaXQoJywnKTtcblxuICAgIHdoaWxlIChpIDwgbCkge1xuICAgICAgaWYgKFR5cGVkID0gZ2xvYmFsW1R5cGVkQXJyYXlDb25zdHJ1Y3RvcnNbaSsrXV0pIHtcbiAgICAgICAgaGlkZShUeXBlZC5wcm90b3R5cGUsIFRZUEVELCB0cnVlKTtcbiAgICAgICAgaGlkZShUeXBlZC5wcm90b3R5cGUsIFZJRVcsIHRydWUpO1xuICAgICAgfSBlbHNlIENPTlNUUiA9IGZhbHNlO1xuICAgIH1cblxuICAgIG1vZHVsZS5leHBvcnRzID0ge1xuICAgICAgQUJWOiBBQlYsXG4gICAgICBDT05TVFI6IENPTlNUUixcbiAgICAgIFRZUEVEOiBUWVBFRCxcbiAgICAgIFZJRVc6IFZJRVdcbiAgICB9O1xuICB9LCB7XG4gICAgXCIxMjRcIjogMTI0LFxuICAgIFwiNDBcIjogNDAsXG4gICAgXCI0MlwiOiA0MlxuICB9XSxcbiAgMTI0OiBbZnVuY3Rpb24gKF9kZXJlcV8sIG1vZHVsZSwgZXhwb3J0cykge1xuICAgIHZhciBpZCA9IDA7XG4gICAgdmFyIHB4ID0gTWF0aC5yYW5kb20oKTtcblxuICAgIG1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGtleSkge1xuICAgICAgcmV0dXJuICdTeW1ib2woJy5jb25jYXQoa2V5ID09PSB1bmRlZmluZWQgPyAnJyA6IGtleSwgJylfJywgKCsraWQgKyBweCkudG9TdHJpbmcoMzYpKTtcbiAgICB9O1xuICB9LCB7fV0sXG4gIDEyNTogW2Z1bmN0aW9uIChfZGVyZXFfLCBtb2R1bGUsIGV4cG9ydHMpIHtcbiAgICB2YXIgaXNPYmplY3QgPSBfZGVyZXFfKDUxKTtcblxuICAgIG1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0LCBUWVBFKSB7XG4gICAgICBpZiAoIWlzT2JqZWN0KGl0KSB8fCBpdC5fdCAhPT0gVFlQRSkgdGhyb3cgVHlwZUVycm9yKCdJbmNvbXBhdGlibGUgcmVjZWl2ZXIsICcgKyBUWVBFICsgJyByZXF1aXJlZCEnKTtcbiAgICAgIHJldHVybiBpdDtcbiAgICB9O1xuICB9LCB7XG4gICAgXCI1MVwiOiA1MVxuICB9XSxcbiAgMTI2OiBbZnVuY3Rpb24gKF9kZXJlcV8sIG1vZHVsZSwgZXhwb3J0cykge1xuICAgIHZhciBnbG9iYWwgPSBfZGVyZXFfKDQwKTtcblxuICAgIHZhciBjb3JlID0gX2RlcmVxXygyMyk7XG5cbiAgICB2YXIgTElCUkFSWSA9IF9kZXJlcV8oNjApO1xuXG4gICAgdmFyIHdrc0V4dCA9IF9kZXJlcV8oMTI3KTtcblxuICAgIHZhciBkZWZpbmVQcm9wZXJ0eSA9IF9kZXJlcV8oNzIpLmY7XG5cbiAgICBtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChuYW1lKSB7XG4gICAgICB2YXIgJFN5bWJvbCA9IGNvcmUuU3ltYm9sIHx8IChjb3JlLlN5bWJvbCA9IExJQlJBUlkgPyB7fSA6IGdsb2JhbC5TeW1ib2wgfHwge30pO1xuICAgICAgaWYgKG5hbWUuY2hhckF0KDApICE9ICdfJyAmJiAhKG5hbWUgaW4gJFN5bWJvbCkpIGRlZmluZVByb3BlcnR5KCRTeW1ib2wsIG5hbWUsIHtcbiAgICAgICAgdmFsdWU6IHdrc0V4dC5mKG5hbWUpXG4gICAgICB9KTtcbiAgICB9O1xuICB9LCB7XG4gICAgXCIxMjdcIjogMTI3LFxuICAgIFwiMjNcIjogMjMsXG4gICAgXCI0MFwiOiA0MCxcbiAgICBcIjYwXCI6IDYwLFxuICAgIFwiNzJcIjogNzJcbiAgfV0sXG4gIDEyNzogW2Z1bmN0aW9uIChfZGVyZXFfLCBtb2R1bGUsIGV4cG9ydHMpIHtcbiAgICBleHBvcnRzLmYgPSBfZGVyZXFfKDEyOCk7XG4gIH0sIHtcbiAgICBcIjEyOFwiOiAxMjhcbiAgfV0sXG4gIDEyODogW2Z1bmN0aW9uIChfZGVyZXFfLCBtb2R1bGUsIGV4cG9ydHMpIHtcbiAgICB2YXIgc3RvcmUgPSBfZGVyZXFfKDEwMykoJ3drcycpO1xuXG4gICAgdmFyIHVpZCA9IF9kZXJlcV8oMTI0KTtcblxuICAgIHZhciBfU3ltYm9sID0gX2RlcmVxXyg0MCkuU3ltYm9sO1xuXG4gICAgdmFyIFVTRV9TWU1CT0wgPSB0eXBlb2YgX1N5bWJvbCA9PSAnZnVuY3Rpb24nO1xuXG4gICAgdmFyICRleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobmFtZSkge1xuICAgICAgcmV0dXJuIHN0b3JlW25hbWVdIHx8IChzdG9yZVtuYW1lXSA9IFVTRV9TWU1CT0wgJiYgX1N5bWJvbFtuYW1lXSB8fCAoVVNFX1NZTUJPTCA/IF9TeW1ib2wgOiB1aWQpKCdTeW1ib2wuJyArIG5hbWUpKTtcbiAgICB9O1xuXG4gICAgJGV4cG9ydHMuc3RvcmUgPSBzdG9yZTtcbiAgfSwge1xuICAgIFwiMTAzXCI6IDEwMyxcbiAgICBcIjEyNFwiOiAxMjQsXG4gICAgXCI0MFwiOiA0MFxuICB9XSxcbiAgMTI5OiBbZnVuY3Rpb24gKF9kZXJlcV8sIG1vZHVsZSwgZXhwb3J0cykge1xuICAgIHZhciBjbGFzc29mID0gX2RlcmVxXygxNyk7XG5cbiAgICB2YXIgSVRFUkFUT1IgPSBfZGVyZXFfKDEyOCkoJ2l0ZXJhdG9yJyk7XG5cbiAgICB2YXIgSXRlcmF0b3JzID0gX2RlcmVxXyg1OCk7XG5cbiAgICBtb2R1bGUuZXhwb3J0cyA9IF9kZXJlcV8oMjMpLmdldEl0ZXJhdG9yTWV0aG9kID0gZnVuY3Rpb24gKGl0KSB7XG4gICAgICBpZiAoaXQgIT0gdW5kZWZpbmVkKSByZXR1cm4gaXRbSVRFUkFUT1JdIHx8IGl0WydAQGl0ZXJhdG9yJ10gfHwgSXRlcmF0b3JzW2NsYXNzb2YoaXQpXTtcbiAgICB9O1xuICB9LCB7XG4gICAgXCIxMjhcIjogMTI4LFxuICAgIFwiMTdcIjogMTcsXG4gICAgXCIyM1wiOiAyMyxcbiAgICBcIjU4XCI6IDU4XG4gIH1dLFxuICAxMzA6IFtmdW5jdGlvbiAoX2RlcmVxXywgbW9kdWxlLCBleHBvcnRzKSB7XG4gICAgLy8gaHR0cHM6Ly9naXRodWIuY29tL2JlbmphbWluZ3IvUmV4RXhwLmVzY2FwZVxuICAgIHZhciAkZXhwb3J0ID0gX2RlcmVxXygzMyk7XG5cbiAgICB2YXIgJHJlID0gX2RlcmVxXyg5NSkoL1tcXFxcXiQqKz8uKCl8W1xcXXt9XS9nLCAnXFxcXCQmJyk7XG5cbiAgICAkZXhwb3J0KCRleHBvcnQuUywgJ1JlZ0V4cCcsIHtcbiAgICAgIGVzY2FwZTogZnVuY3Rpb24gZXNjYXBlKGl0KSB7XG4gICAgICAgIHJldHVybiAkcmUoaXQpO1xuICAgICAgfVxuICAgIH0pO1xuICB9LCB7XG4gICAgXCIzM1wiOiAzMyxcbiAgICBcIjk1XCI6IDk1XG4gIH1dLFxuICAxMzE6IFtmdW5jdGlvbiAoX2RlcmVxXywgbW9kdWxlLCBleHBvcnRzKSB7XG4gICAgLy8gMjIuMS4zLjMgQXJyYXkucHJvdG90eXBlLmNvcHlXaXRoaW4odGFyZ2V0LCBzdGFydCwgZW5kID0gdGhpcy5sZW5ndGgpXG4gICAgdmFyICRleHBvcnQgPSBfZGVyZXFfKDMzKTtcblxuICAgICRleHBvcnQoJGV4cG9ydC5QLCAnQXJyYXknLCB7XG4gICAgICBjb3B5V2l0aGluOiBfZGVyZXFfKDgpXG4gICAgfSk7XG5cbiAgICBfZGVyZXFfKDUpKCdjb3B5V2l0aGluJyk7XG4gIH0sIHtcbiAgICBcIjMzXCI6IDMzLFxuICAgIFwiNVwiOiA1LFxuICAgIFwiOFwiOiA4XG4gIH1dLFxuICAxMzI6IFtmdW5jdGlvbiAoX2RlcmVxXywgbW9kdWxlLCBleHBvcnRzKSB7XG4gICAgJ3VzZSBzdHJpY3QnO1xuXG4gICAgdmFyICRleHBvcnQgPSBfZGVyZXFfKDMzKTtcblxuICAgIHZhciAkZXZlcnkgPSBfZGVyZXFfKDEyKSg0KTtcblxuICAgICRleHBvcnQoJGV4cG9ydC5QICsgJGV4cG9ydC5GICogIV9kZXJlcV8oMTA1KShbXS5ldmVyeSwgdHJ1ZSksICdBcnJheScsIHtcbiAgICAgIC8vIDIyLjEuMy41IC8gMTUuNC40LjE2IEFycmF5LnByb3RvdHlwZS5ldmVyeShjYWxsYmFja2ZuIFssIHRoaXNBcmddKVxuICAgICAgZXZlcnk6IGZ1bmN0aW9uIGV2ZXJ5KGNhbGxiYWNrZm5cbiAgICAgIC8qICwgdGhpc0FyZyAqL1xuICAgICAgKSB7XG4gICAgICAgIHJldHVybiAkZXZlcnkodGhpcywgY2FsbGJhY2tmbiwgYXJndW1lbnRzWzFdKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfSwge1xuICAgIFwiMTA1XCI6IDEwNSxcbiAgICBcIjEyXCI6IDEyLFxuICAgIFwiMzNcIjogMzNcbiAgfV0sXG4gIDEzMzogW2Z1bmN0aW9uIChfZGVyZXFfLCBtb2R1bGUsIGV4cG9ydHMpIHtcbiAgICAvLyAyMi4xLjMuNiBBcnJheS5wcm90b3R5cGUuZmlsbCh2YWx1ZSwgc3RhcnQgPSAwLCBlbmQgPSB0aGlzLmxlbmd0aClcbiAgICB2YXIgJGV4cG9ydCA9IF9kZXJlcV8oMzMpO1xuXG4gICAgJGV4cG9ydCgkZXhwb3J0LlAsICdBcnJheScsIHtcbiAgICAgIGZpbGw6IF9kZXJlcV8oOSlcbiAgICB9KTtcblxuICAgIF9kZXJlcV8oNSkoJ2ZpbGwnKTtcbiAgfSwge1xuICAgIFwiMzNcIjogMzMsXG4gICAgXCI1XCI6IDUsXG4gICAgXCI5XCI6IDlcbiAgfV0sXG4gIDEzNDogW2Z1bmN0aW9uIChfZGVyZXFfLCBtb2R1bGUsIGV4cG9ydHMpIHtcbiAgICAndXNlIHN0cmljdCc7XG5cbiAgICB2YXIgJGV4cG9ydCA9IF9kZXJlcV8oMzMpO1xuXG4gICAgdmFyICRmaWx0ZXIgPSBfZGVyZXFfKDEyKSgyKTtcblxuICAgICRleHBvcnQoJGV4cG9ydC5QICsgJGV4cG9ydC5GICogIV9kZXJlcV8oMTA1KShbXS5maWx0ZXIsIHRydWUpLCAnQXJyYXknLCB7XG4gICAgICAvLyAyMi4xLjMuNyAvIDE1LjQuNC4yMCBBcnJheS5wcm90b3R5cGUuZmlsdGVyKGNhbGxiYWNrZm4gWywgdGhpc0FyZ10pXG4gICAgICBmaWx0ZXI6IGZ1bmN0aW9uIGZpbHRlcihjYWxsYmFja2ZuXG4gICAgICAvKiAsIHRoaXNBcmcgKi9cbiAgICAgICkge1xuICAgICAgICByZXR1cm4gJGZpbHRlcih0aGlzLCBjYWxsYmFja2ZuLCBhcmd1bWVudHNbMV0pO1xuICAgICAgfVxuICAgIH0pO1xuICB9LCB7XG4gICAgXCIxMDVcIjogMTA1LFxuICAgIFwiMTJcIjogMTIsXG4gICAgXCIzM1wiOiAzM1xuICB9XSxcbiAgMTM1OiBbZnVuY3Rpb24gKF9kZXJlcV8sIG1vZHVsZSwgZXhwb3J0cykge1xuICAgICd1c2Ugc3RyaWN0JzsgLy8gMjIuMS4zLjkgQXJyYXkucHJvdG90eXBlLmZpbmRJbmRleChwcmVkaWNhdGUsIHRoaXNBcmcgPSB1bmRlZmluZWQpXG5cbiAgICB2YXIgJGV4cG9ydCA9IF9kZXJlcV8oMzMpO1xuXG4gICAgdmFyICRmaW5kID0gX2RlcmVxXygxMikoNik7XG5cbiAgICB2YXIgS0VZID0gJ2ZpbmRJbmRleCc7XG4gICAgdmFyIGZvcmNlZCA9IHRydWU7IC8vIFNob3VsZG4ndCBza2lwIGhvbGVzXG5cbiAgICBpZiAoS0VZIGluIFtdKSBBcnJheSgxKVtLRVldKGZ1bmN0aW9uICgpIHtcbiAgICAgIGZvcmNlZCA9IGZhbHNlO1xuICAgIH0pO1xuICAgICRleHBvcnQoJGV4cG9ydC5QICsgJGV4cG9ydC5GICogZm9yY2VkLCAnQXJyYXknLCB7XG4gICAgICBmaW5kSW5kZXg6IGZ1bmN0aW9uIGZpbmRJbmRleChjYWxsYmFja2ZuXG4gICAgICAvKiAsIHRoYXQgPSB1bmRlZmluZWQgKi9cbiAgICAgICkge1xuICAgICAgICByZXR1cm4gJGZpbmQodGhpcywgY2FsbGJhY2tmbiwgYXJndW1lbnRzLmxlbmd0aCA+IDEgPyBhcmd1bWVudHNbMV0gOiB1bmRlZmluZWQpO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgX2RlcmVxXyg1KShLRVkpO1xuICB9LCB7XG4gICAgXCIxMlwiOiAxMixcbiAgICBcIjMzXCI6IDMzLFxuICAgIFwiNVwiOiA1XG4gIH1dLFxuICAxMzY6IFtmdW5jdGlvbiAoX2RlcmVxXywgbW9kdWxlLCBleHBvcnRzKSB7XG4gICAgJ3VzZSBzdHJpY3QnOyAvLyAyMi4xLjMuOCBBcnJheS5wcm90b3R5cGUuZmluZChwcmVkaWNhdGUsIHRoaXNBcmcgPSB1bmRlZmluZWQpXG5cbiAgICB2YXIgJGV4cG9ydCA9IF9kZXJlcV8oMzMpO1xuXG4gICAgdmFyICRmaW5kID0gX2RlcmVxXygxMikoNSk7XG5cbiAgICB2YXIgS0VZID0gJ2ZpbmQnO1xuICAgIHZhciBmb3JjZWQgPSB0cnVlOyAvLyBTaG91bGRuJ3Qgc2tpcCBob2xlc1xuXG4gICAgaWYgKEtFWSBpbiBbXSkgQXJyYXkoMSlbS0VZXShmdW5jdGlvbiAoKSB7XG4gICAgICBmb3JjZWQgPSBmYWxzZTtcbiAgICB9KTtcbiAgICAkZXhwb3J0KCRleHBvcnQuUCArICRleHBvcnQuRiAqIGZvcmNlZCwgJ0FycmF5Jywge1xuICAgICAgZmluZDogZnVuY3Rpb24gZmluZChjYWxsYmFja2ZuXG4gICAgICAvKiAsIHRoYXQgPSB1bmRlZmluZWQgKi9cbiAgICAgICkge1xuICAgICAgICByZXR1cm4gJGZpbmQodGhpcywgY2FsbGJhY2tmbiwgYXJndW1lbnRzLmxlbmd0aCA+IDEgPyBhcmd1bWVudHNbMV0gOiB1bmRlZmluZWQpO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgX2RlcmVxXyg1KShLRVkpO1xuICB9LCB7XG4gICAgXCIxMlwiOiAxMixcbiAgICBcIjMzXCI6IDMzLFxuICAgIFwiNVwiOiA1XG4gIH1dLFxuICAxMzc6IFtmdW5jdGlvbiAoX2RlcmVxXywgbW9kdWxlLCBleHBvcnRzKSB7XG4gICAgJ3VzZSBzdHJpY3QnO1xuXG4gICAgdmFyICRleHBvcnQgPSBfZGVyZXFfKDMzKTtcblxuICAgIHZhciAkZm9yRWFjaCA9IF9kZXJlcV8oMTIpKDApO1xuXG4gICAgdmFyIFNUUklDVCA9IF9kZXJlcV8oMTA1KShbXS5mb3JFYWNoLCB0cnVlKTtcblxuICAgICRleHBvcnQoJGV4cG9ydC5QICsgJGV4cG9ydC5GICogIVNUUklDVCwgJ0FycmF5Jywge1xuICAgICAgLy8gMjIuMS4zLjEwIC8gMTUuNC40LjE4IEFycmF5LnByb3RvdHlwZS5mb3JFYWNoKGNhbGxiYWNrZm4gWywgdGhpc0FyZ10pXG4gICAgICBmb3JFYWNoOiBmdW5jdGlvbiBmb3JFYWNoKGNhbGxiYWNrZm5cbiAgICAgIC8qICwgdGhpc0FyZyAqL1xuICAgICAgKSB7XG4gICAgICAgIHJldHVybiAkZm9yRWFjaCh0aGlzLCBjYWxsYmFja2ZuLCBhcmd1bWVudHNbMV0pO1xuICAgICAgfVxuICAgIH0pO1xuICB9LCB7XG4gICAgXCIxMDVcIjogMTA1LFxuICAgIFwiMTJcIjogMTIsXG4gICAgXCIzM1wiOiAzM1xuICB9XSxcbiAgMTM4OiBbZnVuY3Rpb24gKF9kZXJlcV8sIG1vZHVsZSwgZXhwb3J0cykge1xuICAgICd1c2Ugc3RyaWN0JztcblxuICAgIHZhciBjdHggPSBfZGVyZXFfKDI1KTtcblxuICAgIHZhciAkZXhwb3J0ID0gX2RlcmVxXygzMyk7XG5cbiAgICB2YXIgdG9PYmplY3QgPSBfZGVyZXFfKDExOSk7XG5cbiAgICB2YXIgY2FsbCA9IF9kZXJlcV8oNTMpO1xuXG4gICAgdmFyIGlzQXJyYXlJdGVyID0gX2RlcmVxXyg0OCk7XG5cbiAgICB2YXIgdG9MZW5ndGggPSBfZGVyZXFfKDExOCk7XG5cbiAgICB2YXIgY3JlYXRlUHJvcGVydHkgPSBfZGVyZXFfKDI0KTtcblxuICAgIHZhciBnZXRJdGVyRm4gPSBfZGVyZXFfKDEyOSk7XG5cbiAgICAkZXhwb3J0KCRleHBvcnQuUyArICRleHBvcnQuRiAqICFfZGVyZXFfKDU2KShmdW5jdGlvbiAoaXRlcikge1xuICAgICAgQXJyYXkuZnJvbShpdGVyKTtcbiAgICB9KSwgJ0FycmF5Jywge1xuICAgICAgLy8gMjIuMS4yLjEgQXJyYXkuZnJvbShhcnJheUxpa2UsIG1hcGZuID0gdW5kZWZpbmVkLCB0aGlzQXJnID0gdW5kZWZpbmVkKVxuICAgICAgZnJvbTogZnVuY3Rpb24gZnJvbShhcnJheUxpa2VcbiAgICAgIC8qICwgbWFwZm4gPSB1bmRlZmluZWQsIHRoaXNBcmcgPSB1bmRlZmluZWQgKi9cbiAgICAgICkge1xuICAgICAgICB2YXIgTyA9IHRvT2JqZWN0KGFycmF5TGlrZSk7XG4gICAgICAgIHZhciBDID0gdHlwZW9mIHRoaXMgPT0gJ2Z1bmN0aW9uJyA/IHRoaXMgOiBBcnJheTtcbiAgICAgICAgdmFyIGFMZW4gPSBhcmd1bWVudHMubGVuZ3RoO1xuICAgICAgICB2YXIgbWFwZm4gPSBhTGVuID4gMSA/IGFyZ3VtZW50c1sxXSA6IHVuZGVmaW5lZDtcbiAgICAgICAgdmFyIG1hcHBpbmcgPSBtYXBmbiAhPT0gdW5kZWZpbmVkO1xuICAgICAgICB2YXIgaW5kZXggPSAwO1xuICAgICAgICB2YXIgaXRlckZuID0gZ2V0SXRlckZuKE8pO1xuICAgICAgICB2YXIgbGVuZ3RoLCByZXN1bHQsIHN0ZXAsIGl0ZXJhdG9yO1xuICAgICAgICBpZiAobWFwcGluZykgbWFwZm4gPSBjdHgobWFwZm4sIGFMZW4gPiAyID8gYXJndW1lbnRzWzJdIDogdW5kZWZpbmVkLCAyKTsgLy8gaWYgb2JqZWN0IGlzbid0IGl0ZXJhYmxlIG9yIGl0J3MgYXJyYXkgd2l0aCBkZWZhdWx0IGl0ZXJhdG9yIC0gdXNlIHNpbXBsZSBjYXNlXG5cbiAgICAgICAgaWYgKGl0ZXJGbiAhPSB1bmRlZmluZWQgJiYgIShDID09IEFycmF5ICYmIGlzQXJyYXlJdGVyKGl0ZXJGbikpKSB7XG4gICAgICAgICAgZm9yIChpdGVyYXRvciA9IGl0ZXJGbi5jYWxsKE8pLCByZXN1bHQgPSBuZXcgQygpOyAhKHN0ZXAgPSBpdGVyYXRvci5uZXh0KCkpLmRvbmU7IGluZGV4KyspIHtcbiAgICAgICAgICAgIGNyZWF0ZVByb3BlcnR5KHJlc3VsdCwgaW5kZXgsIG1hcHBpbmcgPyBjYWxsKGl0ZXJhdG9yLCBtYXBmbiwgW3N0ZXAudmFsdWUsIGluZGV4XSwgdHJ1ZSkgOiBzdGVwLnZhbHVlKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgbGVuZ3RoID0gdG9MZW5ndGgoTy5sZW5ndGgpO1xuXG4gICAgICAgICAgZm9yIChyZXN1bHQgPSBuZXcgQyhsZW5ndGgpOyBsZW5ndGggPiBpbmRleDsgaW5kZXgrKykge1xuICAgICAgICAgICAgY3JlYXRlUHJvcGVydHkocmVzdWx0LCBpbmRleCwgbWFwcGluZyA/IG1hcGZuKE9baW5kZXhdLCBpbmRleCkgOiBPW2luZGV4XSk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmVzdWx0Lmxlbmd0aCA9IGluZGV4O1xuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgICAgfVxuICAgIH0pO1xuICB9LCB7XG4gICAgXCIxMThcIjogMTE4LFxuICAgIFwiMTE5XCI6IDExOSxcbiAgICBcIjEyOVwiOiAxMjksXG4gICAgXCIyNFwiOiAyNCxcbiAgICBcIjI1XCI6IDI1LFxuICAgIFwiMzNcIjogMzMsXG4gICAgXCI0OFwiOiA0OCxcbiAgICBcIjUzXCI6IDUzLFxuICAgIFwiNTZcIjogNTZcbiAgfV0sXG4gIDEzOTogW2Z1bmN0aW9uIChfZGVyZXFfLCBtb2R1bGUsIGV4cG9ydHMpIHtcbiAgICAndXNlIHN0cmljdCc7XG5cbiAgICB2YXIgJGV4cG9ydCA9IF9kZXJlcV8oMzMpO1xuXG4gICAgdmFyICRpbmRleE9mID0gX2RlcmVxXygxMSkoZmFsc2UpO1xuXG4gICAgdmFyICRuYXRpdmUgPSBbXS5pbmRleE9mO1xuICAgIHZhciBORUdBVElWRV9aRVJPID0gISEkbmF0aXZlICYmIDEgLyBbMV0uaW5kZXhPZigxLCAtMCkgPCAwO1xuICAgICRleHBvcnQoJGV4cG9ydC5QICsgJGV4cG9ydC5GICogKE5FR0FUSVZFX1pFUk8gfHwgIV9kZXJlcV8oMTA1KSgkbmF0aXZlKSksICdBcnJheScsIHtcbiAgICAgIC8vIDIyLjEuMy4xMSAvIDE1LjQuNC4xNCBBcnJheS5wcm90b3R5cGUuaW5kZXhPZihzZWFyY2hFbGVtZW50IFssIGZyb21JbmRleF0pXG4gICAgICBpbmRleE9mOiBmdW5jdGlvbiBpbmRleE9mKHNlYXJjaEVsZW1lbnRcbiAgICAgIC8qICwgZnJvbUluZGV4ID0gMCAqL1xuICAgICAgKSB7XG4gICAgICAgIHJldHVybiBORUdBVElWRV9aRVJPIC8vIGNvbnZlcnQgLTAgdG8gKzBcbiAgICAgICAgPyAkbmF0aXZlLmFwcGx5KHRoaXMsIGFyZ3VtZW50cykgfHwgMCA6ICRpbmRleE9mKHRoaXMsIHNlYXJjaEVsZW1lbnQsIGFyZ3VtZW50c1sxXSk7XG4gICAgICB9XG4gICAgfSk7XG4gIH0sIHtcbiAgICBcIjEwNVwiOiAxMDUsXG4gICAgXCIxMVwiOiAxMSxcbiAgICBcIjMzXCI6IDMzXG4gIH1dLFxuICAxNDA6IFtmdW5jdGlvbiAoX2RlcmVxXywgbW9kdWxlLCBleHBvcnRzKSB7XG4gICAgLy8gMjIuMS4yLjIgLyAxNS40LjMuMiBBcnJheS5pc0FycmF5KGFyZylcbiAgICB2YXIgJGV4cG9ydCA9IF9kZXJlcV8oMzMpO1xuXG4gICAgJGV4cG9ydCgkZXhwb3J0LlMsICdBcnJheScsIHtcbiAgICAgIGlzQXJyYXk6IF9kZXJlcV8oNDkpXG4gICAgfSk7XG4gIH0sIHtcbiAgICBcIjMzXCI6IDMzLFxuICAgIFwiNDlcIjogNDlcbiAgfV0sXG4gIDE0MTogW2Z1bmN0aW9uIChfZGVyZXFfLCBtb2R1bGUsIGV4cG9ydHMpIHtcbiAgICAndXNlIHN0cmljdCc7XG5cbiAgICB2YXIgYWRkVG9VbnNjb3BhYmxlcyA9IF9kZXJlcV8oNSk7XG5cbiAgICB2YXIgc3RlcCA9IF9kZXJlcV8oNTcpO1xuXG4gICAgdmFyIEl0ZXJhdG9ycyA9IF9kZXJlcV8oNTgpO1xuXG4gICAgdmFyIHRvSU9iamVjdCA9IF9kZXJlcV8oMTE3KTsgLy8gMjIuMS4zLjQgQXJyYXkucHJvdG90eXBlLmVudHJpZXMoKVxuICAgIC8vIDIyLjEuMy4xMyBBcnJheS5wcm90b3R5cGUua2V5cygpXG4gICAgLy8gMjIuMS4zLjI5IEFycmF5LnByb3RvdHlwZS52YWx1ZXMoKVxuICAgIC8vIDIyLjEuMy4zMCBBcnJheS5wcm90b3R5cGVbQEBpdGVyYXRvcl0oKVxuXG5cbiAgICBtb2R1bGUuZXhwb3J0cyA9IF9kZXJlcV8oNTUpKEFycmF5LCAnQXJyYXknLCBmdW5jdGlvbiAoaXRlcmF0ZWQsIGtpbmQpIHtcbiAgICAgIHRoaXMuX3QgPSB0b0lPYmplY3QoaXRlcmF0ZWQpOyAvLyB0YXJnZXRcblxuICAgICAgdGhpcy5faSA9IDA7IC8vIG5leHQgaW5kZXhcblxuICAgICAgdGhpcy5fayA9IGtpbmQ7IC8vIGtpbmRcbiAgICAgIC8vIDIyLjEuNS4yLjEgJUFycmF5SXRlcmF0b3JQcm90b3R5cGUlLm5leHQoKVxuICAgIH0sIGZ1bmN0aW9uICgpIHtcbiAgICAgIHZhciBPID0gdGhpcy5fdDtcbiAgICAgIHZhciBraW5kID0gdGhpcy5faztcbiAgICAgIHZhciBpbmRleCA9IHRoaXMuX2krKztcblxuICAgICAgaWYgKCFPIHx8IGluZGV4ID49IE8ubGVuZ3RoKSB7XG4gICAgICAgIHRoaXMuX3QgPSB1bmRlZmluZWQ7XG4gICAgICAgIHJldHVybiBzdGVwKDEpO1xuICAgICAgfVxuXG4gICAgICBpZiAoa2luZCA9PSAna2V5cycpIHJldHVybiBzdGVwKDAsIGluZGV4KTtcbiAgICAgIGlmIChraW5kID09ICd2YWx1ZXMnKSByZXR1cm4gc3RlcCgwLCBPW2luZGV4XSk7XG4gICAgICByZXR1cm4gc3RlcCgwLCBbaW5kZXgsIE9baW5kZXhdXSk7XG4gICAgfSwgJ3ZhbHVlcycpOyAvLyBhcmd1bWVudHNMaXN0W0BAaXRlcmF0b3JdIGlzICVBcnJheVByb3RvX3ZhbHVlcyUgKDkuNC40LjYsIDkuNC40LjcpXG5cbiAgICBJdGVyYXRvcnMuQXJndW1lbnRzID0gSXRlcmF0b3JzLkFycmF5O1xuICAgIGFkZFRvVW5zY29wYWJsZXMoJ2tleXMnKTtcbiAgICBhZGRUb1Vuc2NvcGFibGVzKCd2YWx1ZXMnKTtcbiAgICBhZGRUb1Vuc2NvcGFibGVzKCdlbnRyaWVzJyk7XG4gIH0sIHtcbiAgICBcIjExN1wiOiAxMTcsXG4gICAgXCI1XCI6IDUsXG4gICAgXCI1NVwiOiA1NSxcbiAgICBcIjU3XCI6IDU3LFxuICAgIFwiNThcIjogNThcbiAgfV0sXG4gIDE0MjogW2Z1bmN0aW9uIChfZGVyZXFfLCBtb2R1bGUsIGV4cG9ydHMpIHtcbiAgICAndXNlIHN0cmljdCc7IC8vIDIyLjEuMy4xMyBBcnJheS5wcm90b3R5cGUuam9pbihzZXBhcmF0b3IpXG5cbiAgICB2YXIgJGV4cG9ydCA9IF9kZXJlcV8oMzMpO1xuXG4gICAgdmFyIHRvSU9iamVjdCA9IF9kZXJlcV8oMTE3KTtcblxuICAgIHZhciBhcnJheUpvaW4gPSBbXS5qb2luOyAvLyBmYWxsYmFjayBmb3Igbm90IGFycmF5LWxpa2Ugc3RyaW5nc1xuXG4gICAgJGV4cG9ydCgkZXhwb3J0LlAgKyAkZXhwb3J0LkYgKiAoX2RlcmVxXyg0NykgIT0gT2JqZWN0IHx8ICFfZGVyZXFfKDEwNSkoYXJyYXlKb2luKSksICdBcnJheScsIHtcbiAgICAgIGpvaW46IGZ1bmN0aW9uIGpvaW4oc2VwYXJhdG9yKSB7XG4gICAgICAgIHJldHVybiBhcnJheUpvaW4uY2FsbCh0b0lPYmplY3QodGhpcyksIHNlcGFyYXRvciA9PT0gdW5kZWZpbmVkID8gJywnIDogc2VwYXJhdG9yKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfSwge1xuICAgIFwiMTA1XCI6IDEwNSxcbiAgICBcIjExN1wiOiAxMTcsXG4gICAgXCIzM1wiOiAzMyxcbiAgICBcIjQ3XCI6IDQ3XG4gIH1dLFxuICAxNDM6IFtmdW5jdGlvbiAoX2RlcmVxXywgbW9kdWxlLCBleHBvcnRzKSB7XG4gICAgJ3VzZSBzdHJpY3QnO1xuXG4gICAgdmFyICRleHBvcnQgPSBfZGVyZXFfKDMzKTtcblxuICAgIHZhciB0b0lPYmplY3QgPSBfZGVyZXFfKDExNyk7XG5cbiAgICB2YXIgdG9JbnRlZ2VyID0gX2RlcmVxXygxMTYpO1xuXG4gICAgdmFyIHRvTGVuZ3RoID0gX2RlcmVxXygxMTgpO1xuXG4gICAgdmFyICRuYXRpdmUgPSBbXS5sYXN0SW5kZXhPZjtcbiAgICB2YXIgTkVHQVRJVkVfWkVSTyA9ICEhJG5hdGl2ZSAmJiAxIC8gWzFdLmxhc3RJbmRleE9mKDEsIC0wKSA8IDA7XG4gICAgJGV4cG9ydCgkZXhwb3J0LlAgKyAkZXhwb3J0LkYgKiAoTkVHQVRJVkVfWkVSTyB8fCAhX2RlcmVxXygxMDUpKCRuYXRpdmUpKSwgJ0FycmF5Jywge1xuICAgICAgLy8gMjIuMS4zLjE0IC8gMTUuNC40LjE1IEFycmF5LnByb3RvdHlwZS5sYXN0SW5kZXhPZihzZWFyY2hFbGVtZW50IFssIGZyb21JbmRleF0pXG4gICAgICBsYXN0SW5kZXhPZjogZnVuY3Rpb24gbGFzdEluZGV4T2Yoc2VhcmNoRWxlbWVudFxuICAgICAgLyogLCBmcm9tSW5kZXggPSBAWyotMV0gKi9cbiAgICAgICkge1xuICAgICAgICAvLyBjb252ZXJ0IC0wIHRvICswXG4gICAgICAgIGlmIChORUdBVElWRV9aRVJPKSByZXR1cm4gJG5hdGl2ZS5hcHBseSh0aGlzLCBhcmd1bWVudHMpIHx8IDA7XG4gICAgICAgIHZhciBPID0gdG9JT2JqZWN0KHRoaXMpO1xuICAgICAgICB2YXIgbGVuZ3RoID0gdG9MZW5ndGgoTy5sZW5ndGgpO1xuICAgICAgICB2YXIgaW5kZXggPSBsZW5ndGggLSAxO1xuICAgICAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCA+IDEpIGluZGV4ID0gTWF0aC5taW4oaW5kZXgsIHRvSW50ZWdlcihhcmd1bWVudHNbMV0pKTtcbiAgICAgICAgaWYgKGluZGV4IDwgMCkgaW5kZXggPSBsZW5ndGggKyBpbmRleDtcblxuICAgICAgICBmb3IgKDsgaW5kZXggPj0gMDsgaW5kZXgtLSkge1xuICAgICAgICAgIGlmIChpbmRleCBpbiBPKSBpZiAoT1tpbmRleF0gPT09IHNlYXJjaEVsZW1lbnQpIHJldHVybiBpbmRleCB8fCAwO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIC0xO1xuICAgICAgfVxuICAgIH0pO1xuICB9LCB7XG4gICAgXCIxMDVcIjogMTA1LFxuICAgIFwiMTE2XCI6IDExNixcbiAgICBcIjExN1wiOiAxMTcsXG4gICAgXCIxMThcIjogMTE4LFxuICAgIFwiMzNcIjogMzNcbiAgfV0sXG4gIDE0NDogW2Z1bmN0aW9uIChfZGVyZXFfLCBtb2R1bGUsIGV4cG9ydHMpIHtcbiAgICAndXNlIHN0cmljdCc7XG5cbiAgICB2YXIgJGV4cG9ydCA9IF9kZXJlcV8oMzMpO1xuXG4gICAgdmFyICRtYXAgPSBfZGVyZXFfKDEyKSgxKTtcblxuICAgICRleHBvcnQoJGV4cG9ydC5QICsgJGV4cG9ydC5GICogIV9kZXJlcV8oMTA1KShbXS5tYXAsIHRydWUpLCAnQXJyYXknLCB7XG4gICAgICAvLyAyMi4xLjMuMTUgLyAxNS40LjQuMTkgQXJyYXkucHJvdG90eXBlLm1hcChjYWxsYmFja2ZuIFssIHRoaXNBcmddKVxuICAgICAgbWFwOiBmdW5jdGlvbiBtYXAoY2FsbGJhY2tmblxuICAgICAgLyogLCB0aGlzQXJnICovXG4gICAgICApIHtcbiAgICAgICAgcmV0dXJuICRtYXAodGhpcywgY2FsbGJhY2tmbiwgYXJndW1lbnRzWzFdKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfSwge1xuICAgIFwiMTA1XCI6IDEwNSxcbiAgICBcIjEyXCI6IDEyLFxuICAgIFwiMzNcIjogMzNcbiAgfV0sXG4gIDE0NTogW2Z1bmN0aW9uIChfZGVyZXFfLCBtb2R1bGUsIGV4cG9ydHMpIHtcbiAgICAndXNlIHN0cmljdCc7XG5cbiAgICB2YXIgJGV4cG9ydCA9IF9kZXJlcV8oMzMpO1xuXG4gICAgdmFyIGNyZWF0ZVByb3BlcnR5ID0gX2RlcmVxXygyNCk7IC8vIFdlYktpdCBBcnJheS5vZiBpc24ndCBnZW5lcmljXG5cblxuICAgICRleHBvcnQoJGV4cG9ydC5TICsgJGV4cG9ydC5GICogX2RlcmVxXygzNSkoZnVuY3Rpb24gKCkge1xuICAgICAgZnVuY3Rpb24gRigpIHtcbiAgICAgICAgLyogZW1wdHkgKi9cbiAgICAgIH1cblxuICAgICAgcmV0dXJuICEoQXJyYXkub2YuY2FsbChGKSBpbnN0YW5jZW9mIEYpO1xuICAgIH0pLCAnQXJyYXknLCB7XG4gICAgICAvLyAyMi4xLjIuMyBBcnJheS5vZiggLi4uaXRlbXMpXG4gICAgICBvZjogZnVuY3Rpb24gb2YoKSB7XG4gICAgICAgIHZhciBpbmRleCA9IDA7XG4gICAgICAgIHZhciBhTGVuID0gYXJndW1lbnRzLmxlbmd0aDtcbiAgICAgICAgdmFyIHJlc3VsdCA9IG5ldyAodHlwZW9mIHRoaXMgPT0gJ2Z1bmN0aW9uJyA/IHRoaXMgOiBBcnJheSkoYUxlbik7XG5cbiAgICAgICAgd2hpbGUgKGFMZW4gPiBpbmRleCkge1xuICAgICAgICAgIGNyZWF0ZVByb3BlcnR5KHJlc3VsdCwgaW5kZXgsIGFyZ3VtZW50c1tpbmRleCsrXSk7XG4gICAgICAgIH1cblxuICAgICAgICByZXN1bHQubGVuZ3RoID0gYUxlbjtcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICAgIH1cbiAgICB9KTtcbiAgfSwge1xuICAgIFwiMjRcIjogMjQsXG4gICAgXCIzM1wiOiAzMyxcbiAgICBcIjM1XCI6IDM1XG4gIH1dLFxuICAxNDY6IFtmdW5jdGlvbiAoX2RlcmVxXywgbW9kdWxlLCBleHBvcnRzKSB7XG4gICAgJ3VzZSBzdHJpY3QnO1xuXG4gICAgdmFyICRleHBvcnQgPSBfZGVyZXFfKDMzKTtcblxuICAgIHZhciAkcmVkdWNlID0gX2RlcmVxXygxMyk7XG5cbiAgICAkZXhwb3J0KCRleHBvcnQuUCArICRleHBvcnQuRiAqICFfZGVyZXFfKDEwNSkoW10ucmVkdWNlUmlnaHQsIHRydWUpLCAnQXJyYXknLCB7XG4gICAgICAvLyAyMi4xLjMuMTkgLyAxNS40LjQuMjIgQXJyYXkucHJvdG90eXBlLnJlZHVjZVJpZ2h0KGNhbGxiYWNrZm4gWywgaW5pdGlhbFZhbHVlXSlcbiAgICAgIHJlZHVjZVJpZ2h0OiBmdW5jdGlvbiByZWR1Y2VSaWdodChjYWxsYmFja2ZuXG4gICAgICAvKiAsIGluaXRpYWxWYWx1ZSAqL1xuICAgICAgKSB7XG4gICAgICAgIHJldHVybiAkcmVkdWNlKHRoaXMsIGNhbGxiYWNrZm4sIGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3VtZW50c1sxXSwgdHJ1ZSk7XG4gICAgICB9XG4gICAgfSk7XG4gIH0sIHtcbiAgICBcIjEwNVwiOiAxMDUsXG4gICAgXCIxM1wiOiAxMyxcbiAgICBcIjMzXCI6IDMzXG4gIH1dLFxuICAxNDc6IFtmdW5jdGlvbiAoX2RlcmVxXywgbW9kdWxlLCBleHBvcnRzKSB7XG4gICAgJ3VzZSBzdHJpY3QnO1xuXG4gICAgdmFyICRleHBvcnQgPSBfZGVyZXFfKDMzKTtcblxuICAgIHZhciAkcmVkdWNlID0gX2RlcmVxXygxMyk7XG5cbiAgICAkZXhwb3J0KCRleHBvcnQuUCArICRleHBvcnQuRiAqICFfZGVyZXFfKDEwNSkoW10ucmVkdWNlLCB0cnVlKSwgJ0FycmF5Jywge1xuICAgICAgLy8gMjIuMS4zLjE4IC8gMTUuNC40LjIxIEFycmF5LnByb3RvdHlwZS5yZWR1Y2UoY2FsbGJhY2tmbiBbLCBpbml0aWFsVmFsdWVdKVxuICAgICAgcmVkdWNlOiBmdW5jdGlvbiByZWR1Y2UoY2FsbGJhY2tmblxuICAgICAgLyogLCBpbml0aWFsVmFsdWUgKi9cbiAgICAgICkge1xuICAgICAgICByZXR1cm4gJHJlZHVjZSh0aGlzLCBjYWxsYmFja2ZuLCBhcmd1bWVudHMubGVuZ3RoLCBhcmd1bWVudHNbMV0sIGZhbHNlKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfSwge1xuICAgIFwiMTA1XCI6IDEwNSxcbiAgICBcIjEzXCI6IDEzLFxuICAgIFwiMzNcIjogMzNcbiAgfV0sXG4gIDE0ODogW2Z1bmN0aW9uIChfZGVyZXFfLCBtb2R1bGUsIGV4cG9ydHMpIHtcbiAgICAndXNlIHN0cmljdCc7XG5cbiAgICB2YXIgJGV4cG9ydCA9IF9kZXJlcV8oMzMpO1xuXG4gICAgdmFyIGh0bWwgPSBfZGVyZXFfKDQzKTtcblxuICAgIHZhciBjb2YgPSBfZGVyZXFfKDE4KTtcblxuICAgIHZhciB0b0Fic29sdXRlSW5kZXggPSBfZGVyZXFfKDExNCk7XG5cbiAgICB2YXIgdG9MZW5ndGggPSBfZGVyZXFfKDExOCk7XG5cbiAgICB2YXIgYXJyYXlTbGljZSA9IFtdLnNsaWNlOyAvLyBmYWxsYmFjayBmb3Igbm90IGFycmF5LWxpa2UgRVMzIHN0cmluZ3MgYW5kIERPTSBvYmplY3RzXG5cbiAgICAkZXhwb3J0KCRleHBvcnQuUCArICRleHBvcnQuRiAqIF9kZXJlcV8oMzUpKGZ1bmN0aW9uICgpIHtcbiAgICAgIGlmIChodG1sKSBhcnJheVNsaWNlLmNhbGwoaHRtbCk7XG4gICAgfSksICdBcnJheScsIHtcbiAgICAgIHNsaWNlOiBmdW5jdGlvbiBzbGljZShiZWdpbiwgZW5kKSB7XG4gICAgICAgIHZhciBsZW4gPSB0b0xlbmd0aCh0aGlzLmxlbmd0aCk7XG4gICAgICAgIHZhciBrbGFzcyA9IGNvZih0aGlzKTtcbiAgICAgICAgZW5kID0gZW5kID09PSB1bmRlZmluZWQgPyBsZW4gOiBlbmQ7XG4gICAgICAgIGlmIChrbGFzcyA9PSAnQXJyYXknKSByZXR1cm4gYXJyYXlTbGljZS5jYWxsKHRoaXMsIGJlZ2luLCBlbmQpO1xuICAgICAgICB2YXIgc3RhcnQgPSB0b0Fic29sdXRlSW5kZXgoYmVnaW4sIGxlbik7XG4gICAgICAgIHZhciB1cFRvID0gdG9BYnNvbHV0ZUluZGV4KGVuZCwgbGVuKTtcbiAgICAgICAgdmFyIHNpemUgPSB0b0xlbmd0aCh1cFRvIC0gc3RhcnQpO1xuICAgICAgICB2YXIgY2xvbmVkID0gQXJyYXkoc2l6ZSk7XG4gICAgICAgIHZhciBpID0gMDtcblxuICAgICAgICBmb3IgKDsgaSA8IHNpemU7IGkrKykge1xuICAgICAgICAgIGNsb25lZFtpXSA9IGtsYXNzID09ICdTdHJpbmcnID8gdGhpcy5jaGFyQXQoc3RhcnQgKyBpKSA6IHRoaXNbc3RhcnQgKyBpXTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBjbG9uZWQ7XG4gICAgICB9XG4gICAgfSk7XG4gIH0sIHtcbiAgICBcIjExNFwiOiAxMTQsXG4gICAgXCIxMThcIjogMTE4LFxuICAgIFwiMThcIjogMTgsXG4gICAgXCIzM1wiOiAzMyxcbiAgICBcIjM1XCI6IDM1LFxuICAgIFwiNDNcIjogNDNcbiAgfV0sXG4gIDE0OTogW2Z1bmN0aW9uIChfZGVyZXFfLCBtb2R1bGUsIGV4cG9ydHMpIHtcbiAgICAndXNlIHN0cmljdCc7XG5cbiAgICB2YXIgJGV4cG9ydCA9IF9kZXJlcV8oMzMpO1xuXG4gICAgdmFyICRzb21lID0gX2RlcmVxXygxMikoMyk7XG5cbiAgICAkZXhwb3J0KCRleHBvcnQuUCArICRleHBvcnQuRiAqICFfZGVyZXFfKDEwNSkoW10uc29tZSwgdHJ1ZSksICdBcnJheScsIHtcbiAgICAgIC8vIDIyLjEuMy4yMyAvIDE1LjQuNC4xNyBBcnJheS5wcm90b3R5cGUuc29tZShjYWxsYmFja2ZuIFssIHRoaXNBcmddKVxuICAgICAgc29tZTogZnVuY3Rpb24gc29tZShjYWxsYmFja2ZuXG4gICAgICAvKiAsIHRoaXNBcmcgKi9cbiAgICAgICkge1xuICAgICAgICByZXR1cm4gJHNvbWUodGhpcywgY2FsbGJhY2tmbiwgYXJndW1lbnRzWzFdKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfSwge1xuICAgIFwiMTA1XCI6IDEwNSxcbiAgICBcIjEyXCI6IDEyLFxuICAgIFwiMzNcIjogMzNcbiAgfV0sXG4gIDE1MDogW2Z1bmN0aW9uIChfZGVyZXFfLCBtb2R1bGUsIGV4cG9ydHMpIHtcbiAgICAndXNlIHN0cmljdCc7XG5cbiAgICB2YXIgJGV4cG9ydCA9IF9kZXJlcV8oMzMpO1xuXG4gICAgdmFyIGFGdW5jdGlvbiA9IF9kZXJlcV8oMyk7XG5cbiAgICB2YXIgdG9PYmplY3QgPSBfZGVyZXFfKDExOSk7XG5cbiAgICB2YXIgZmFpbHMgPSBfZGVyZXFfKDM1KTtcblxuICAgIHZhciAkc29ydCA9IFtdLnNvcnQ7XG4gICAgdmFyIHRlc3QgPSBbMSwgMiwgM107XG4gICAgJGV4cG9ydCgkZXhwb3J0LlAgKyAkZXhwb3J0LkYgKiAoZmFpbHMoZnVuY3Rpb24gKCkge1xuICAgICAgLy8gSUU4LVxuICAgICAgdGVzdC5zb3J0KHVuZGVmaW5lZCk7XG4gICAgfSkgfHwgIWZhaWxzKGZ1bmN0aW9uICgpIHtcbiAgICAgIC8vIFY4IGJ1Z1xuICAgICAgdGVzdC5zb3J0KG51bGwpOyAvLyBPbGQgV2ViS2l0XG4gICAgfSkgfHwgIV9kZXJlcV8oMTA1KSgkc29ydCkpLCAnQXJyYXknLCB7XG4gICAgICAvLyAyMi4xLjMuMjUgQXJyYXkucHJvdG90eXBlLnNvcnQoY29tcGFyZWZuKVxuICAgICAgc29ydDogZnVuY3Rpb24gc29ydChjb21wYXJlZm4pIHtcbiAgICAgICAgcmV0dXJuIGNvbXBhcmVmbiA9PT0gdW5kZWZpbmVkID8gJHNvcnQuY2FsbCh0b09iamVjdCh0aGlzKSkgOiAkc29ydC5jYWxsKHRvT2JqZWN0KHRoaXMpLCBhRnVuY3Rpb24oY29tcGFyZWZuKSk7XG4gICAgICB9XG4gICAgfSk7XG4gIH0sIHtcbiAgICBcIjEwNVwiOiAxMDUsXG4gICAgXCIxMTlcIjogMTE5LFxuICAgIFwiM1wiOiAzLFxuICAgIFwiMzNcIjogMzMsXG4gICAgXCIzNVwiOiAzNVxuICB9XSxcbiAgMTUxOiBbZnVuY3Rpb24gKF9kZXJlcV8sIG1vZHVsZSwgZXhwb3J0cykge1xuICAgIF9kZXJlcV8oMTAwKSgnQXJyYXknKTtcbiAgfSwge1xuICAgIFwiMTAwXCI6IDEwMFxuICB9XSxcbiAgMTUyOiBbZnVuY3Rpb24gKF9kZXJlcV8sIG1vZHVsZSwgZXhwb3J0cykge1xuICAgIC8vIDIwLjMuMy4xIC8gMTUuOS40LjQgRGF0ZS5ub3coKVxuICAgIHZhciAkZXhwb3J0ID0gX2RlcmVxXygzMyk7XG5cbiAgICAkZXhwb3J0KCRleHBvcnQuUywgJ0RhdGUnLCB7XG4gICAgICBub3c6IGZ1bmN0aW9uIG5vdygpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBEYXRlKCkuZ2V0VGltZSgpO1xuICAgICAgfVxuICAgIH0pO1xuICB9LCB7XG4gICAgXCIzM1wiOiAzM1xuICB9XSxcbiAgMTUzOiBbZnVuY3Rpb24gKF9kZXJlcV8sIG1vZHVsZSwgZXhwb3J0cykge1xuICAgIC8vIDIwLjMuNC4zNiAvIDE1LjkuNS40MyBEYXRlLnByb3RvdHlwZS50b0lTT1N0cmluZygpXG4gICAgdmFyICRleHBvcnQgPSBfZGVyZXFfKDMzKTtcblxuICAgIHZhciB0b0lTT1N0cmluZyA9IF9kZXJlcV8oMjYpOyAvLyBQaGFudG9tSlMgLyBvbGQgV2ViS2l0IGhhcyBhIGJyb2tlbiBpbXBsZW1lbnRhdGlvbnNcblxuXG4gICAgJGV4cG9ydCgkZXhwb3J0LlAgKyAkZXhwb3J0LkYgKiAoRGF0ZS5wcm90b3R5cGUudG9JU09TdHJpbmcgIT09IHRvSVNPU3RyaW5nKSwgJ0RhdGUnLCB7XG4gICAgICB0b0lTT1N0cmluZzogdG9JU09TdHJpbmdcbiAgICB9KTtcbiAgfSwge1xuICAgIFwiMjZcIjogMjYsXG4gICAgXCIzM1wiOiAzM1xuICB9XSxcbiAgMTU0OiBbZnVuY3Rpb24gKF9kZXJlcV8sIG1vZHVsZSwgZXhwb3J0cykge1xuICAgICd1c2Ugc3RyaWN0JztcblxuICAgIHZhciAkZXhwb3J0ID0gX2RlcmVxXygzMyk7XG5cbiAgICB2YXIgdG9PYmplY3QgPSBfZGVyZXFfKDExOSk7XG5cbiAgICB2YXIgdG9QcmltaXRpdmUgPSBfZGVyZXFfKDEyMCk7XG5cbiAgICAkZXhwb3J0KCRleHBvcnQuUCArICRleHBvcnQuRiAqIF9kZXJlcV8oMzUpKGZ1bmN0aW9uICgpIHtcbiAgICAgIHJldHVybiBuZXcgRGF0ZShOYU4pLnRvSlNPTigpICE9PSBudWxsIHx8IERhdGUucHJvdG90eXBlLnRvSlNPTi5jYWxsKHtcbiAgICAgICAgdG9JU09TdHJpbmc6IGZ1bmN0aW9uIHRvSVNPU3RyaW5nKCkge1xuICAgICAgICAgIHJldHVybiAxO1xuICAgICAgICB9XG4gICAgICB9KSAhPT0gMTtcbiAgICB9KSwgJ0RhdGUnLCB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW51c2VkLXZhcnNcbiAgICAgIHRvSlNPTjogZnVuY3Rpb24gdG9KU09OKGtleSkge1xuICAgICAgICB2YXIgTyA9IHRvT2JqZWN0KHRoaXMpO1xuICAgICAgICB2YXIgcHYgPSB0b1ByaW1pdGl2ZShPKTtcbiAgICAgICAgcmV0dXJuIHR5cGVvZiBwdiA9PSAnbnVtYmVyJyAmJiAhaXNGaW5pdGUocHYpID8gbnVsbCA6IE8udG9JU09TdHJpbmcoKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfSwge1xuICAgIFwiMTE5XCI6IDExOSxcbiAgICBcIjEyMFwiOiAxMjAsXG4gICAgXCIzM1wiOiAzMyxcbiAgICBcIjM1XCI6IDM1XG4gIH1dLFxuICAxNTU6IFtmdW5jdGlvbiAoX2RlcmVxXywgbW9kdWxlLCBleHBvcnRzKSB7XG4gICAgdmFyIFRPX1BSSU1JVElWRSA9IF9kZXJlcV8oMTI4KSgndG9QcmltaXRpdmUnKTtcblxuICAgIHZhciBwcm90byA9IERhdGUucHJvdG90eXBlO1xuICAgIGlmICghKFRPX1BSSU1JVElWRSBpbiBwcm90bykpIF9kZXJlcV8oNDIpKHByb3RvLCBUT19QUklNSVRJVkUsIF9kZXJlcV8oMjcpKTtcbiAgfSwge1xuICAgIFwiMTI4XCI6IDEyOCxcbiAgICBcIjI3XCI6IDI3LFxuICAgIFwiNDJcIjogNDJcbiAgfV0sXG4gIDE1NjogW2Z1bmN0aW9uIChfZGVyZXFfLCBtb2R1bGUsIGV4cG9ydHMpIHtcbiAgICB2YXIgRGF0ZVByb3RvID0gRGF0ZS5wcm90b3R5cGU7XG4gICAgdmFyIElOVkFMSURfREFURSA9ICdJbnZhbGlkIERhdGUnO1xuICAgIHZhciBUT19TVFJJTkcgPSAndG9TdHJpbmcnO1xuICAgIHZhciAkdG9TdHJpbmcgPSBEYXRlUHJvdG9bVE9fU1RSSU5HXTtcbiAgICB2YXIgZ2V0VGltZSA9IERhdGVQcm90by5nZXRUaW1lO1xuXG4gICAgaWYgKG5ldyBEYXRlKE5hTikgKyAnJyAhPSBJTlZBTElEX0RBVEUpIHtcbiAgICAgIF9kZXJlcV8oOTQpKERhdGVQcm90bywgVE9fU1RSSU5HLCBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICAgICAgdmFyIHZhbHVlID0gZ2V0VGltZS5jYWxsKHRoaXMpOyAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tc2VsZi1jb21wYXJlXG5cbiAgICAgICAgcmV0dXJuIHZhbHVlID09PSB2YWx1ZSA/ICR0b1N0cmluZy5jYWxsKHRoaXMpIDogSU5WQUxJRF9EQVRFO1xuICAgICAgfSk7XG4gICAgfVxuICB9LCB7XG4gICAgXCI5NFwiOiA5NFxuICB9XSxcbiAgMTU3OiBbZnVuY3Rpb24gKF9kZXJlcV8sIG1vZHVsZSwgZXhwb3J0cykge1xuICAgIC8vIDE5LjIuMy4yIC8gMTUuMy40LjUgRnVuY3Rpb24ucHJvdG90eXBlLmJpbmQodGhpc0FyZywgYXJncy4uLilcbiAgICB2YXIgJGV4cG9ydCA9IF9kZXJlcV8oMzMpO1xuXG4gICAgJGV4cG9ydCgkZXhwb3J0LlAsICdGdW5jdGlvbicsIHtcbiAgICAgIGJpbmQ6IF9kZXJlcV8oMTYpXG4gICAgfSk7XG4gIH0sIHtcbiAgICBcIjE2XCI6IDE2LFxuICAgIFwiMzNcIjogMzNcbiAgfV0sXG4gIDE1ODogW2Z1bmN0aW9uIChfZGVyZXFfLCBtb2R1bGUsIGV4cG9ydHMpIHtcbiAgICAndXNlIHN0cmljdCc7XG5cbiAgICB2YXIgaXNPYmplY3QgPSBfZGVyZXFfKDUxKTtcblxuICAgIHZhciBnZXRQcm90b3R5cGVPZiA9IF9kZXJlcV8oNzkpO1xuXG4gICAgdmFyIEhBU19JTlNUQU5DRSA9IF9kZXJlcV8oMTI4KSgnaGFzSW5zdGFuY2UnKTtcblxuICAgIHZhciBGdW5jdGlvblByb3RvID0gRnVuY3Rpb24ucHJvdG90eXBlOyAvLyAxOS4yLjMuNiBGdW5jdGlvbi5wcm90b3R5cGVbQEBoYXNJbnN0YW5jZV0oVilcblxuICAgIGlmICghKEhBU19JTlNUQU5DRSBpbiBGdW5jdGlvblByb3RvKSkgX2RlcmVxXyg3MikuZihGdW5jdGlvblByb3RvLCBIQVNfSU5TVEFOQ0UsIHtcbiAgICAgIHZhbHVlOiBmdW5jdGlvbiB2YWx1ZShPKSB7XG4gICAgICAgIGlmICh0eXBlb2YgdGhpcyAhPSAnZnVuY3Rpb24nIHx8ICFpc09iamVjdChPKSkgcmV0dXJuIGZhbHNlO1xuICAgICAgICBpZiAoIWlzT2JqZWN0KHRoaXMucHJvdG90eXBlKSkgcmV0dXJuIE8gaW5zdGFuY2VvZiB0aGlzOyAvLyBmb3IgZW52aXJvbm1lbnQgdy9vIG5hdGl2ZSBgQEBoYXNJbnN0YW5jZWAgbG9naWMgZW5vdWdoIGBpbnN0YW5jZW9mYCwgYnV0IGFkZCB0aGlzOlxuXG4gICAgICAgIHdoaWxlIChPID0gZ2V0UHJvdG90eXBlT2YoTykpIHtcbiAgICAgICAgICBpZiAodGhpcy5wcm90b3R5cGUgPT09IE8pIHJldHVybiB0cnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgIH0pO1xuICB9LCB7XG4gICAgXCIxMjhcIjogMTI4LFxuICAgIFwiNTFcIjogNTEsXG4gICAgXCI3MlwiOiA3MixcbiAgICBcIjc5XCI6IDc5XG4gIH1dLFxuICAxNTk6IFtmdW5jdGlvbiAoX2RlcmVxXywgbW9kdWxlLCBleHBvcnRzKSB7XG4gICAgdmFyIGRQID0gX2RlcmVxXyg3MikuZjtcblxuICAgIHZhciBGUHJvdG8gPSBGdW5jdGlvbi5wcm90b3R5cGU7XG4gICAgdmFyIG5hbWVSRSA9IC9eXFxzKmZ1bmN0aW9uIChbXiAoXSopLztcbiAgICB2YXIgTkFNRSA9ICduYW1lJzsgLy8gMTkuMi40LjIgbmFtZVxuXG4gICAgTkFNRSBpbiBGUHJvdG8gfHwgX2RlcmVxXygyOSkgJiYgZFAoRlByb3RvLCBOQU1FLCB7XG4gICAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICByZXR1cm4gKCcnICsgdGhpcykubWF0Y2gobmFtZVJFKVsxXTtcbiAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgIHJldHVybiAnJztcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pO1xuICB9LCB7XG4gICAgXCIyOVwiOiAyOSxcbiAgICBcIjcyXCI6IDcyXG4gIH1dLFxuICAxNjA6IFtmdW5jdGlvbiAoX2RlcmVxXywgbW9kdWxlLCBleHBvcnRzKSB7XG4gICAgJ3VzZSBzdHJpY3QnO1xuXG4gICAgdmFyIHN0cm9uZyA9IF9kZXJlcV8oMTkpO1xuXG4gICAgdmFyIHZhbGlkYXRlID0gX2RlcmVxXygxMjUpO1xuXG4gICAgdmFyIE1BUCA9ICdNYXAnOyAvLyAyMy4xIE1hcCBPYmplY3RzXG5cbiAgICBtb2R1bGUuZXhwb3J0cyA9IF9kZXJlcV8oMjIpKE1BUCwgZnVuY3Rpb24gKGdldCkge1xuICAgICAgcmV0dXJuIGZ1bmN0aW9uIE1hcCgpIHtcbiAgICAgICAgcmV0dXJuIGdldCh0aGlzLCBhcmd1bWVudHMubGVuZ3RoID4gMCA/IGFyZ3VtZW50c1swXSA6IHVuZGVmaW5lZCk7XG4gICAgICB9O1xuICAgIH0sIHtcbiAgICAgIC8vIDIzLjEuMy42IE1hcC5wcm90b3R5cGUuZ2V0KGtleSlcbiAgICAgIGdldDogZnVuY3Rpb24gZ2V0KGtleSkge1xuICAgICAgICB2YXIgZW50cnkgPSBzdHJvbmcuZ2V0RW50cnkodmFsaWRhdGUodGhpcywgTUFQKSwga2V5KTtcbiAgICAgICAgcmV0dXJuIGVudHJ5ICYmIGVudHJ5LnY7XG4gICAgICB9LFxuICAgICAgLy8gMjMuMS4zLjkgTWFwLnByb3RvdHlwZS5zZXQoa2V5LCB2YWx1ZSlcbiAgICAgIHNldDogZnVuY3Rpb24gc2V0KGtleSwgdmFsdWUpIHtcbiAgICAgICAgcmV0dXJuIHN0cm9uZy5kZWYodmFsaWRhdGUodGhpcywgTUFQKSwga2V5ID09PSAwID8gMCA6IGtleSwgdmFsdWUpO1xuICAgICAgfVxuICAgIH0sIHN0cm9uZywgdHJ1ZSk7XG4gIH0sIHtcbiAgICBcIjEyNVwiOiAxMjUsXG4gICAgXCIxOVwiOiAxOSxcbiAgICBcIjIyXCI6IDIyXG4gIH1dLFxuICAxNjE6IFtmdW5jdGlvbiAoX2RlcmVxXywgbW9kdWxlLCBleHBvcnRzKSB7XG4gICAgLy8gMjAuMi4yLjMgTWF0aC5hY29zaCh4KVxuICAgIHZhciAkZXhwb3J0ID0gX2RlcmVxXygzMyk7XG5cbiAgICB2YXIgbG9nMXAgPSBfZGVyZXFfKDYzKTtcblxuICAgIHZhciBzcXJ0ID0gTWF0aC5zcXJ0O1xuICAgIHZhciAkYWNvc2ggPSBNYXRoLmFjb3NoO1xuICAgICRleHBvcnQoJGV4cG9ydC5TICsgJGV4cG9ydC5GICogISgkYWNvc2ggLy8gVjggYnVnOiBodHRwczovL2NvZGUuZ29vZ2xlLmNvbS9wL3Y4L2lzc3Vlcy9kZXRhaWw/aWQ9MzUwOVxuICAgICYmIE1hdGguZmxvb3IoJGFjb3NoKE51bWJlci5NQVhfVkFMVUUpKSA9PSA3MTAgLy8gVG9yIEJyb3dzZXIgYnVnOiBNYXRoLmFjb3NoKEluZmluaXR5KSAtPiBOYU5cbiAgICAmJiAkYWNvc2goSW5maW5pdHkpID09IEluZmluaXR5KSwgJ01hdGgnLCB7XG4gICAgICBhY29zaDogZnVuY3Rpb24gYWNvc2goeCkge1xuICAgICAgICByZXR1cm4gKHggPSAreCkgPCAxID8gTmFOIDogeCA+IDk0OTA2MjY1LjYyNDI1MTU2ID8gTWF0aC5sb2coeCkgKyBNYXRoLkxOMiA6IGxvZzFwKHggLSAxICsgc3FydCh4IC0gMSkgKiBzcXJ0KHggKyAxKSk7XG4gICAgICB9XG4gICAgfSk7XG4gIH0sIHtcbiAgICBcIjMzXCI6IDMzLFxuICAgIFwiNjNcIjogNjNcbiAgfV0sXG4gIDE2MjogW2Z1bmN0aW9uIChfZGVyZXFfLCBtb2R1bGUsIGV4cG9ydHMpIHtcbiAgICAvLyAyMC4yLjIuNSBNYXRoLmFzaW5oKHgpXG4gICAgdmFyICRleHBvcnQgPSBfZGVyZXFfKDMzKTtcblxuICAgIHZhciAkYXNpbmggPSBNYXRoLmFzaW5oO1xuXG4gICAgZnVuY3Rpb24gYXNpbmgoeCkge1xuICAgICAgcmV0dXJuICFpc0Zpbml0ZSh4ID0gK3gpIHx8IHggPT0gMCA/IHggOiB4IDwgMCA/IC1hc2luaCgteCkgOiBNYXRoLmxvZyh4ICsgTWF0aC5zcXJ0KHggKiB4ICsgMSkpO1xuICAgIH0gLy8gVG9yIEJyb3dzZXIgYnVnOiBNYXRoLmFzaW5oKDApIC0+IC0wXG5cblxuICAgICRleHBvcnQoJGV4cG9ydC5TICsgJGV4cG9ydC5GICogISgkYXNpbmggJiYgMSAvICRhc2luaCgwKSA+IDApLCAnTWF0aCcsIHtcbiAgICAgIGFzaW5oOiBhc2luaFxuICAgIH0pO1xuICB9LCB7XG4gICAgXCIzM1wiOiAzM1xuICB9XSxcbiAgMTYzOiBbZnVuY3Rpb24gKF9kZXJlcV8sIG1vZHVsZSwgZXhwb3J0cykge1xuICAgIC8vIDIwLjIuMi43IE1hdGguYXRhbmgoeClcbiAgICB2YXIgJGV4cG9ydCA9IF9kZXJlcV8oMzMpO1xuXG4gICAgdmFyICRhdGFuaCA9IE1hdGguYXRhbmg7IC8vIFRvciBCcm93c2VyIGJ1ZzogTWF0aC5hdGFuaCgtMCkgLT4gMFxuXG4gICAgJGV4cG9ydCgkZXhwb3J0LlMgKyAkZXhwb3J0LkYgKiAhKCRhdGFuaCAmJiAxIC8gJGF0YW5oKC0wKSA8IDApLCAnTWF0aCcsIHtcbiAgICAgIGF0YW5oOiBmdW5jdGlvbiBhdGFuaCh4KSB7XG4gICAgICAgIHJldHVybiAoeCA9ICt4KSA9PSAwID8geCA6IE1hdGgubG9nKCgxICsgeCkgLyAoMSAtIHgpKSAvIDI7XG4gICAgICB9XG4gICAgfSk7XG4gIH0sIHtcbiAgICBcIjMzXCI6IDMzXG4gIH1dLFxuICAxNjQ6IFtmdW5jdGlvbiAoX2RlcmVxXywgbW9kdWxlLCBleHBvcnRzKSB7XG4gICAgLy8gMjAuMi4yLjkgTWF0aC5jYnJ0KHgpXG4gICAgdmFyICRleHBvcnQgPSBfZGVyZXFfKDMzKTtcblxuICAgIHZhciBzaWduID0gX2RlcmVxXyg2NSk7XG5cbiAgICAkZXhwb3J0KCRleHBvcnQuUywgJ01hdGgnLCB7XG4gICAgICBjYnJ0OiBmdW5jdGlvbiBjYnJ0KHgpIHtcbiAgICAgICAgcmV0dXJuIHNpZ24oeCA9ICt4KSAqIE1hdGgucG93KE1hdGguYWJzKHgpLCAxIC8gMyk7XG4gICAgICB9XG4gICAgfSk7XG4gIH0sIHtcbiAgICBcIjMzXCI6IDMzLFxuICAgIFwiNjVcIjogNjVcbiAgfV0sXG4gIDE2NTogW2Z1bmN0aW9uIChfZGVyZXFfLCBtb2R1bGUsIGV4cG9ydHMpIHtcbiAgICAvLyAyMC4yLjIuMTEgTWF0aC5jbHozMih4KVxuICAgIHZhciAkZXhwb3J0ID0gX2RlcmVxXygzMyk7XG5cbiAgICAkZXhwb3J0KCRleHBvcnQuUywgJ01hdGgnLCB7XG4gICAgICBjbHozMjogZnVuY3Rpb24gY2x6MzIoeCkge1xuICAgICAgICByZXR1cm4gKHggPj4+PSAwKSA/IDMxIC0gTWF0aC5mbG9vcihNYXRoLmxvZyh4ICsgMC41KSAqIE1hdGguTE9HMkUpIDogMzI7XG4gICAgICB9XG4gICAgfSk7XG4gIH0sIHtcbiAgICBcIjMzXCI6IDMzXG4gIH1dLFxuICAxNjY6IFtmdW5jdGlvbiAoX2RlcmVxXywgbW9kdWxlLCBleHBvcnRzKSB7XG4gICAgLy8gMjAuMi4yLjEyIE1hdGguY29zaCh4KVxuICAgIHZhciAkZXhwb3J0ID0gX2RlcmVxXygzMyk7XG5cbiAgICB2YXIgZXhwID0gTWF0aC5leHA7XG4gICAgJGV4cG9ydCgkZXhwb3J0LlMsICdNYXRoJywge1xuICAgICAgY29zaDogZnVuY3Rpb24gY29zaCh4KSB7XG4gICAgICAgIHJldHVybiAoZXhwKHggPSAreCkgKyBleHAoLXgpKSAvIDI7XG4gICAgICB9XG4gICAgfSk7XG4gIH0sIHtcbiAgICBcIjMzXCI6IDMzXG4gIH1dLFxuICAxNjc6IFtmdW5jdGlvbiAoX2RlcmVxXywgbW9kdWxlLCBleHBvcnRzKSB7XG4gICAgLy8gMjAuMi4yLjE0IE1hdGguZXhwbTEoeClcbiAgICB2YXIgJGV4cG9ydCA9IF9kZXJlcV8oMzMpO1xuXG4gICAgdmFyICRleHBtMSA9IF9kZXJlcV8oNjEpO1xuXG4gICAgJGV4cG9ydCgkZXhwb3J0LlMgKyAkZXhwb3J0LkYgKiAoJGV4cG0xICE9IE1hdGguZXhwbTEpLCAnTWF0aCcsIHtcbiAgICAgIGV4cG0xOiAkZXhwbTFcbiAgICB9KTtcbiAgfSwge1xuICAgIFwiMzNcIjogMzMsXG4gICAgXCI2MVwiOiA2MVxuICB9XSxcbiAgMTY4OiBbZnVuY3Rpb24gKF9kZXJlcV8sIG1vZHVsZSwgZXhwb3J0cykge1xuICAgIC8vIDIwLjIuMi4xNiBNYXRoLmZyb3VuZCh4KVxuICAgIHZhciAkZXhwb3J0ID0gX2RlcmVxXygzMyk7XG5cbiAgICAkZXhwb3J0KCRleHBvcnQuUywgJ01hdGgnLCB7XG4gICAgICBmcm91bmQ6IF9kZXJlcV8oNjIpXG4gICAgfSk7XG4gIH0sIHtcbiAgICBcIjMzXCI6IDMzLFxuICAgIFwiNjJcIjogNjJcbiAgfV0sXG4gIDE2OTogW2Z1bmN0aW9uIChfZGVyZXFfLCBtb2R1bGUsIGV4cG9ydHMpIHtcbiAgICAvLyAyMC4yLjIuMTcgTWF0aC5oeXBvdChbdmFsdWUxWywgdmFsdWUyWywg4oCmIF1dXSlcbiAgICB2YXIgJGV4cG9ydCA9IF9kZXJlcV8oMzMpO1xuXG4gICAgdmFyIGFicyA9IE1hdGguYWJzO1xuICAgICRleHBvcnQoJGV4cG9ydC5TLCAnTWF0aCcsIHtcbiAgICAgIGh5cG90OiBmdW5jdGlvbiBoeXBvdCh2YWx1ZTEsIHZhbHVlMikge1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLXVudXNlZC12YXJzXG4gICAgICAgIHZhciBzdW0gPSAwO1xuICAgICAgICB2YXIgaSA9IDA7XG4gICAgICAgIHZhciBhTGVuID0gYXJndW1lbnRzLmxlbmd0aDtcbiAgICAgICAgdmFyIGxhcmcgPSAwO1xuICAgICAgICB2YXIgYXJnLCBkaXY7XG5cbiAgICAgICAgd2hpbGUgKGkgPCBhTGVuKSB7XG4gICAgICAgICAgYXJnID0gYWJzKGFyZ3VtZW50c1tpKytdKTtcblxuICAgICAgICAgIGlmIChsYXJnIDwgYXJnKSB7XG4gICAgICAgICAgICBkaXYgPSBsYXJnIC8gYXJnO1xuICAgICAgICAgICAgc3VtID0gc3VtICogZGl2ICogZGl2ICsgMTtcbiAgICAgICAgICAgIGxhcmcgPSBhcmc7XG4gICAgICAgICAgfSBlbHNlIGlmIChhcmcgPiAwKSB7XG4gICAgICAgICAgICBkaXYgPSBhcmcgLyBsYXJnO1xuICAgICAgICAgICAgc3VtICs9IGRpdiAqIGRpdjtcbiAgICAgICAgICB9IGVsc2Ugc3VtICs9IGFyZztcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBsYXJnID09PSBJbmZpbml0eSA/IEluZmluaXR5IDogbGFyZyAqIE1hdGguc3FydChzdW0pO1xuICAgICAgfVxuICAgIH0pO1xuICB9LCB7XG4gICAgXCIzM1wiOiAzM1xuICB9XSxcbiAgMTcwOiBbZnVuY3Rpb24gKF9kZXJlcV8sIG1vZHVsZSwgZXhwb3J0cykge1xuICAgIC8vIDIwLjIuMi4xOCBNYXRoLmltdWwoeCwgeSlcbiAgICB2YXIgJGV4cG9ydCA9IF9kZXJlcV8oMzMpO1xuXG4gICAgdmFyICRpbXVsID0gTWF0aC5pbXVsOyAvLyBzb21lIFdlYktpdCB2ZXJzaW9ucyBmYWlscyB3aXRoIGJpZyBudW1iZXJzLCBzb21lIGhhcyB3cm9uZyBhcml0eVxuXG4gICAgJGV4cG9ydCgkZXhwb3J0LlMgKyAkZXhwb3J0LkYgKiBfZGVyZXFfKDM1KShmdW5jdGlvbiAoKSB7XG4gICAgICByZXR1cm4gJGltdWwoMHhmZmZmZmZmZiwgNSkgIT0gLTUgfHwgJGltdWwubGVuZ3RoICE9IDI7XG4gICAgfSksICdNYXRoJywge1xuICAgICAgaW11bDogZnVuY3Rpb24gaW11bCh4LCB5KSB7XG4gICAgICAgIHZhciBVSU5UMTYgPSAweGZmZmY7XG4gICAgICAgIHZhciB4biA9ICt4O1xuICAgICAgICB2YXIgeW4gPSAreTtcbiAgICAgICAgdmFyIHhsID0gVUlOVDE2ICYgeG47XG4gICAgICAgIHZhciB5bCA9IFVJTlQxNiAmIHluO1xuICAgICAgICByZXR1cm4gMCB8IHhsICogeWwgKyAoKFVJTlQxNiAmIHhuID4+PiAxNikgKiB5bCArIHhsICogKFVJTlQxNiAmIHluID4+PiAxNikgPDwgMTYgPj4+IDApO1xuICAgICAgfVxuICAgIH0pO1xuICB9LCB7XG4gICAgXCIzM1wiOiAzMyxcbiAgICBcIjM1XCI6IDM1XG4gIH1dLFxuICAxNzE6IFtmdW5jdGlvbiAoX2RlcmVxXywgbW9kdWxlLCBleHBvcnRzKSB7XG4gICAgLy8gMjAuMi4yLjIxIE1hdGgubG9nMTAoeClcbiAgICB2YXIgJGV4cG9ydCA9IF9kZXJlcV8oMzMpO1xuXG4gICAgJGV4cG9ydCgkZXhwb3J0LlMsICdNYXRoJywge1xuICAgICAgbG9nMTA6IGZ1bmN0aW9uIGxvZzEwKHgpIHtcbiAgICAgICAgcmV0dXJuIE1hdGgubG9nKHgpICogTWF0aC5MT0cxMEU7XG4gICAgICB9XG4gICAgfSk7XG4gIH0sIHtcbiAgICBcIjMzXCI6IDMzXG4gIH1dLFxuICAxNzI6IFtmdW5jdGlvbiAoX2RlcmVxXywgbW9kdWxlLCBleHBvcnRzKSB7XG4gICAgLy8gMjAuMi4yLjIwIE1hdGgubG9nMXAoeClcbiAgICB2YXIgJGV4cG9ydCA9IF9kZXJlcV8oMzMpO1xuXG4gICAgJGV4cG9ydCgkZXhwb3J0LlMsICdNYXRoJywge1xuICAgICAgbG9nMXA6IF9kZXJlcV8oNjMpXG4gICAgfSk7XG4gIH0sIHtcbiAgICBcIjMzXCI6IDMzLFxuICAgIFwiNjNcIjogNjNcbiAgfV0sXG4gIDE3MzogW2Z1bmN0aW9uIChfZGVyZXFfLCBtb2R1bGUsIGV4cG9ydHMpIHtcbiAgICAvLyAyMC4yLjIuMjIgTWF0aC5sb2cyKHgpXG4gICAgdmFyICRleHBvcnQgPSBfZGVyZXFfKDMzKTtcblxuICAgICRleHBvcnQoJGV4cG9ydC5TLCAnTWF0aCcsIHtcbiAgICAgIGxvZzI6IGZ1bmN0aW9uIGxvZzIoeCkge1xuICAgICAgICByZXR1cm4gTWF0aC5sb2coeCkgLyBNYXRoLkxOMjtcbiAgICAgIH1cbiAgICB9KTtcbiAgfSwge1xuICAgIFwiMzNcIjogMzNcbiAgfV0sXG4gIDE3NDogW2Z1bmN0aW9uIChfZGVyZXFfLCBtb2R1bGUsIGV4cG9ydHMpIHtcbiAgICAvLyAyMC4yLjIuMjggTWF0aC5zaWduKHgpXG4gICAgdmFyICRleHBvcnQgPSBfZGVyZXFfKDMzKTtcblxuICAgICRleHBvcnQoJGV4cG9ydC5TLCAnTWF0aCcsIHtcbiAgICAgIHNpZ246IF9kZXJlcV8oNjUpXG4gICAgfSk7XG4gIH0sIHtcbiAgICBcIjMzXCI6IDMzLFxuICAgIFwiNjVcIjogNjVcbiAgfV0sXG4gIDE3NTogW2Z1bmN0aW9uIChfZGVyZXFfLCBtb2R1bGUsIGV4cG9ydHMpIHtcbiAgICAvLyAyMC4yLjIuMzAgTWF0aC5zaW5oKHgpXG4gICAgdmFyICRleHBvcnQgPSBfZGVyZXFfKDMzKTtcblxuICAgIHZhciBleHBtMSA9IF9kZXJlcV8oNjEpO1xuXG4gICAgdmFyIGV4cCA9IE1hdGguZXhwOyAvLyBWOCBuZWFyIENocm9taXVtIDM4IGhhcyBhIHByb2JsZW0gd2l0aCB2ZXJ5IHNtYWxsIG51bWJlcnNcblxuICAgICRleHBvcnQoJGV4cG9ydC5TICsgJGV4cG9ydC5GICogX2RlcmVxXygzNSkoZnVuY3Rpb24gKCkge1xuICAgICAgcmV0dXJuICFNYXRoLnNpbmgoLTJlLTE3KSAhPSAtMmUtMTc7XG4gICAgfSksICdNYXRoJywge1xuICAgICAgc2luaDogZnVuY3Rpb24gc2luaCh4KSB7XG4gICAgICAgIHJldHVybiBNYXRoLmFicyh4ID0gK3gpIDwgMSA/IChleHBtMSh4KSAtIGV4cG0xKC14KSkgLyAyIDogKGV4cCh4IC0gMSkgLSBleHAoLXggLSAxKSkgKiAoTWF0aC5FIC8gMik7XG4gICAgICB9XG4gICAgfSk7XG4gIH0sIHtcbiAgICBcIjMzXCI6IDMzLFxuICAgIFwiMzVcIjogMzUsXG4gICAgXCI2MVwiOiA2MVxuICB9XSxcbiAgMTc2OiBbZnVuY3Rpb24gKF9kZXJlcV8sIG1vZHVsZSwgZXhwb3J0cykge1xuICAgIC8vIDIwLjIuMi4zMyBNYXRoLnRhbmgoeClcbiAgICB2YXIgJGV4cG9ydCA9IF9kZXJlcV8oMzMpO1xuXG4gICAgdmFyIGV4cG0xID0gX2RlcmVxXyg2MSk7XG5cbiAgICB2YXIgZXhwID0gTWF0aC5leHA7XG4gICAgJGV4cG9ydCgkZXhwb3J0LlMsICdNYXRoJywge1xuICAgICAgdGFuaDogZnVuY3Rpb24gdGFuaCh4KSB7XG4gICAgICAgIHZhciBhID0gZXhwbTEoeCA9ICt4KTtcbiAgICAgICAgdmFyIGIgPSBleHBtMSgteCk7XG4gICAgICAgIHJldHVybiBhID09IEluZmluaXR5ID8gMSA6IGIgPT0gSW5maW5pdHkgPyAtMSA6IChhIC0gYikgLyAoZXhwKHgpICsgZXhwKC14KSk7XG4gICAgICB9XG4gICAgfSk7XG4gIH0sIHtcbiAgICBcIjMzXCI6IDMzLFxuICAgIFwiNjFcIjogNjFcbiAgfV0sXG4gIDE3NzogW2Z1bmN0aW9uIChfZGVyZXFfLCBtb2R1bGUsIGV4cG9ydHMpIHtcbiAgICAvLyAyMC4yLjIuMzQgTWF0aC50cnVuYyh4KVxuICAgIHZhciAkZXhwb3J0ID0gX2RlcmVxXygzMyk7XG5cbiAgICAkZXhwb3J0KCRleHBvcnQuUywgJ01hdGgnLCB7XG4gICAgICB0cnVuYzogZnVuY3Rpb24gdHJ1bmMoaXQpIHtcbiAgICAgICAgcmV0dXJuIChpdCA+IDAgPyBNYXRoLmZsb29yIDogTWF0aC5jZWlsKShpdCk7XG4gICAgICB9XG4gICAgfSk7XG4gIH0sIHtcbiAgICBcIjMzXCI6IDMzXG4gIH1dLFxuICAxNzg6IFtmdW5jdGlvbiAoX2RlcmVxXywgbW9kdWxlLCBleHBvcnRzKSB7XG4gICAgJ3VzZSBzdHJpY3QnO1xuXG4gICAgdmFyIGdsb2JhbCA9IF9kZXJlcV8oNDApO1xuXG4gICAgdmFyIGhhcyA9IF9kZXJlcV8oNDEpO1xuXG4gICAgdmFyIGNvZiA9IF9kZXJlcV8oMTgpO1xuXG4gICAgdmFyIGluaGVyaXRJZlJlcXVpcmVkID0gX2RlcmVxXyg0NSk7XG5cbiAgICB2YXIgdG9QcmltaXRpdmUgPSBfZGVyZXFfKDEyMCk7XG5cbiAgICB2YXIgZmFpbHMgPSBfZGVyZXFfKDM1KTtcblxuICAgIHZhciBnT1BOID0gX2RlcmVxXyg3NykuZjtcblxuICAgIHZhciBnT1BEID0gX2RlcmVxXyg3NSkuZjtcblxuICAgIHZhciBkUCA9IF9kZXJlcV8oNzIpLmY7XG5cbiAgICB2YXIgJHRyaW0gPSBfZGVyZXFfKDExMSkudHJpbTtcblxuICAgIHZhciBOVU1CRVIgPSAnTnVtYmVyJztcbiAgICB2YXIgJE51bWJlciA9IGdsb2JhbFtOVU1CRVJdO1xuICAgIHZhciBCYXNlID0gJE51bWJlcjtcbiAgICB2YXIgcHJvdG8gPSAkTnVtYmVyLnByb3RvdHlwZTsgLy8gT3BlcmEgfjEyIGhhcyBicm9rZW4gT2JqZWN0I3RvU3RyaW5nXG5cbiAgICB2YXIgQlJPS0VOX0NPRiA9IGNvZihfZGVyZXFfKDcxKShwcm90bykpID09IE5VTUJFUjtcbiAgICB2YXIgVFJJTSA9ICgndHJpbScgaW4gU3RyaW5nLnByb3RvdHlwZSk7IC8vIDcuMS4zIFRvTnVtYmVyKGFyZ3VtZW50KVxuXG4gICAgdmFyIHRvTnVtYmVyID0gZnVuY3Rpb24gdG9OdW1iZXIoYXJndW1lbnQpIHtcbiAgICAgIHZhciBpdCA9IHRvUHJpbWl0aXZlKGFyZ3VtZW50LCBmYWxzZSk7XG5cbiAgICAgIGlmICh0eXBlb2YgaXQgPT0gJ3N0cmluZycgJiYgaXQubGVuZ3RoID4gMikge1xuICAgICAgICBpdCA9IFRSSU0gPyBpdC50cmltKCkgOiAkdHJpbShpdCwgMyk7XG4gICAgICAgIHZhciBmaXJzdCA9IGl0LmNoYXJDb2RlQXQoMCk7XG4gICAgICAgIHZhciB0aGlyZCwgcmFkaXgsIG1heENvZGU7XG5cbiAgICAgICAgaWYgKGZpcnN0ID09PSA0MyB8fCBmaXJzdCA9PT0gNDUpIHtcbiAgICAgICAgICB0aGlyZCA9IGl0LmNoYXJDb2RlQXQoMik7XG4gICAgICAgICAgaWYgKHRoaXJkID09PSA4OCB8fCB0aGlyZCA9PT0gMTIwKSByZXR1cm4gTmFOOyAvLyBOdW1iZXIoJysweDEnKSBzaG91bGQgYmUgTmFOLCBvbGQgVjggZml4XG4gICAgICAgIH0gZWxzZSBpZiAoZmlyc3QgPT09IDQ4KSB7XG4gICAgICAgICAgc3dpdGNoIChpdC5jaGFyQ29kZUF0KDEpKSB7XG4gICAgICAgICAgICBjYXNlIDY2OlxuICAgICAgICAgICAgY2FzZSA5ODpcbiAgICAgICAgICAgICAgcmFkaXggPSAyO1xuICAgICAgICAgICAgICBtYXhDb2RlID0gNDk7XG4gICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgLy8gZmFzdCBlcXVhbCAvXjBiWzAxXSskL2lcblxuICAgICAgICAgICAgY2FzZSA3OTpcbiAgICAgICAgICAgIGNhc2UgMTExOlxuICAgICAgICAgICAgICByYWRpeCA9IDg7XG4gICAgICAgICAgICAgIG1heENvZGUgPSA1NTtcbiAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAvLyBmYXN0IGVxdWFsIC9eMG9bMC03XSskL2lcblxuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgcmV0dXJuICtpdDtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBmb3IgKHZhciBkaWdpdHMgPSBpdC5zbGljZSgyKSwgaSA9IDAsIGwgPSBkaWdpdHMubGVuZ3RoLCBjb2RlOyBpIDwgbDsgaSsrKSB7XG4gICAgICAgICAgICBjb2RlID0gZGlnaXRzLmNoYXJDb2RlQXQoaSk7IC8vIHBhcnNlSW50IHBhcnNlcyBhIHN0cmluZyB0byBhIGZpcnN0IHVuYXZhaWxhYmxlIHN5bWJvbFxuICAgICAgICAgICAgLy8gYnV0IFRvTnVtYmVyIHNob3VsZCByZXR1cm4gTmFOIGlmIGEgc3RyaW5nIGNvbnRhaW5zIHVuYXZhaWxhYmxlIHN5bWJvbHNcblxuICAgICAgICAgICAgaWYgKGNvZGUgPCA0OCB8fCBjb2RlID4gbWF4Q29kZSkgcmV0dXJuIE5hTjtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICByZXR1cm4gcGFyc2VJbnQoZGlnaXRzLCByYWRpeCk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgcmV0dXJuICtpdDtcbiAgICB9O1xuXG4gICAgaWYgKCEkTnVtYmVyKCcgMG8xJykgfHwgISROdW1iZXIoJzBiMScpIHx8ICROdW1iZXIoJysweDEnKSkge1xuICAgICAgJE51bWJlciA9IGZ1bmN0aW9uIE51bWJlcih2YWx1ZSkge1xuICAgICAgICB2YXIgaXQgPSBhcmd1bWVudHMubGVuZ3RoIDwgMSA/IDAgOiB2YWx1ZTtcbiAgICAgICAgdmFyIHRoYXQgPSB0aGlzO1xuICAgICAgICByZXR1cm4gdGhhdCBpbnN0YW5jZW9mICROdW1iZXIgLy8gY2hlY2sgb24gMS4uY29uc3RydWN0b3IoZm9vKSBjYXNlXG4gICAgICAgICYmIChCUk9LRU5fQ09GID8gZmFpbHMoZnVuY3Rpb24gKCkge1xuICAgICAgICAgIHByb3RvLnZhbHVlT2YuY2FsbCh0aGF0KTtcbiAgICAgICAgfSkgOiBjb2YodGhhdCkgIT0gTlVNQkVSKSA/IGluaGVyaXRJZlJlcXVpcmVkKG5ldyBCYXNlKHRvTnVtYmVyKGl0KSksIHRoYXQsICROdW1iZXIpIDogdG9OdW1iZXIoaXQpO1xuICAgICAgfTtcblxuICAgICAgZm9yICh2YXIga2V5cyA9IF9kZXJlcV8oMjkpID8gZ09QTihCYXNlKSA6ICggLy8gRVMzOlxuICAgICAgJ01BWF9WQUxVRSxNSU5fVkFMVUUsTmFOLE5FR0FUSVZFX0lORklOSVRZLFBPU0lUSVZFX0lORklOSVRZLCcgKyAvLyBFUzYgKGluIGNhc2UsIGlmIG1vZHVsZXMgd2l0aCBFUzYgTnVtYmVyIHN0YXRpY3MgcmVxdWlyZWQgYmVmb3JlKTpcbiAgICAgICdFUFNJTE9OLGlzRmluaXRlLGlzSW50ZWdlcixpc05hTixpc1NhZmVJbnRlZ2VyLE1BWF9TQUZFX0lOVEVHRVIsJyArICdNSU5fU0FGRV9JTlRFR0VSLHBhcnNlRmxvYXQscGFyc2VJbnQsaXNJbnRlZ2VyJykuc3BsaXQoJywnKSwgaiA9IDAsIGtleTsga2V5cy5sZW5ndGggPiBqOyBqKyspIHtcbiAgICAgICAgaWYgKGhhcyhCYXNlLCBrZXkgPSBrZXlzW2pdKSAmJiAhaGFzKCROdW1iZXIsIGtleSkpIHtcbiAgICAgICAgICBkUCgkTnVtYmVyLCBrZXksIGdPUEQoQmFzZSwga2V5KSk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgJE51bWJlci5wcm90b3R5cGUgPSBwcm90bztcbiAgICAgIHByb3RvLmNvbnN0cnVjdG9yID0gJE51bWJlcjtcblxuICAgICAgX2RlcmVxXyg5NCkoZ2xvYmFsLCBOVU1CRVIsICROdW1iZXIpO1xuICAgIH1cbiAgfSwge1xuICAgIFwiMTExXCI6IDExMSxcbiAgICBcIjEyMFwiOiAxMjAsXG4gICAgXCIxOFwiOiAxOCxcbiAgICBcIjI5XCI6IDI5LFxuICAgIFwiMzVcIjogMzUsXG4gICAgXCI0MFwiOiA0MCxcbiAgICBcIjQxXCI6IDQxLFxuICAgIFwiNDVcIjogNDUsXG4gICAgXCI3MVwiOiA3MSxcbiAgICBcIjcyXCI6IDcyLFxuICAgIFwiNzVcIjogNzUsXG4gICAgXCI3N1wiOiA3NyxcbiAgICBcIjk0XCI6IDk0XG4gIH1dLFxuICAxNzk6IFtmdW5jdGlvbiAoX2RlcmVxXywgbW9kdWxlLCBleHBvcnRzKSB7XG4gICAgLy8gMjAuMS4yLjEgTnVtYmVyLkVQU0lMT05cbiAgICB2YXIgJGV4cG9ydCA9IF9kZXJlcV8oMzMpO1xuXG4gICAgJGV4cG9ydCgkZXhwb3J0LlMsICdOdW1iZXInLCB7XG4gICAgICBFUFNJTE9OOiBNYXRoLnBvdygyLCAtNTIpXG4gICAgfSk7XG4gIH0sIHtcbiAgICBcIjMzXCI6IDMzXG4gIH1dLFxuICAxODA6IFtmdW5jdGlvbiAoX2RlcmVxXywgbW9kdWxlLCBleHBvcnRzKSB7XG4gICAgLy8gMjAuMS4yLjIgTnVtYmVyLmlzRmluaXRlKG51bWJlcilcbiAgICB2YXIgJGV4cG9ydCA9IF9kZXJlcV8oMzMpO1xuXG4gICAgdmFyIF9pc0Zpbml0ZSA9IF9kZXJlcV8oNDApLmlzRmluaXRlO1xuXG4gICAgJGV4cG9ydCgkZXhwb3J0LlMsICdOdW1iZXInLCB7XG4gICAgICBpc0Zpbml0ZTogZnVuY3Rpb24gaXNGaW5pdGUoaXQpIHtcbiAgICAgICAgcmV0dXJuIHR5cGVvZiBpdCA9PSAnbnVtYmVyJyAmJiBfaXNGaW5pdGUoaXQpO1xuICAgICAgfVxuICAgIH0pO1xuICB9LCB7XG4gICAgXCIzM1wiOiAzMyxcbiAgICBcIjQwXCI6IDQwXG4gIH1dLFxuICAxODE6IFtmdW5jdGlvbiAoX2RlcmVxXywgbW9kdWxlLCBleHBvcnRzKSB7XG4gICAgLy8gMjAuMS4yLjMgTnVtYmVyLmlzSW50ZWdlcihudW1iZXIpXG4gICAgdmFyICRleHBvcnQgPSBfZGVyZXFfKDMzKTtcblxuICAgICRleHBvcnQoJGV4cG9ydC5TLCAnTnVtYmVyJywge1xuICAgICAgaXNJbnRlZ2VyOiBfZGVyZXFfKDUwKVxuICAgIH0pO1xuICB9LCB7XG4gICAgXCIzM1wiOiAzMyxcbiAgICBcIjUwXCI6IDUwXG4gIH1dLFxuICAxODI6IFtmdW5jdGlvbiAoX2RlcmVxXywgbW9kdWxlLCBleHBvcnRzKSB7XG4gICAgLy8gMjAuMS4yLjQgTnVtYmVyLmlzTmFOKG51bWJlcilcbiAgICB2YXIgJGV4cG9ydCA9IF9kZXJlcV8oMzMpO1xuXG4gICAgJGV4cG9ydCgkZXhwb3J0LlMsICdOdW1iZXInLCB7XG4gICAgICBpc05hTjogZnVuY3Rpb24gaXNOYU4obnVtYmVyKSB7XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1zZWxmLWNvbXBhcmVcbiAgICAgICAgcmV0dXJuIG51bWJlciAhPSBudW1iZXI7XG4gICAgICB9XG4gICAgfSk7XG4gIH0sIHtcbiAgICBcIjMzXCI6IDMzXG4gIH1dLFxuICAxODM6IFtmdW5jdGlvbiAoX2RlcmVxXywgbW9kdWxlLCBleHBvcnRzKSB7XG4gICAgLy8gMjAuMS4yLjUgTnVtYmVyLmlzU2FmZUludGVnZXIobnVtYmVyKVxuICAgIHZhciAkZXhwb3J0ID0gX2RlcmVxXygzMyk7XG5cbiAgICB2YXIgaXNJbnRlZ2VyID0gX2RlcmVxXyg1MCk7XG5cbiAgICB2YXIgYWJzID0gTWF0aC5hYnM7XG4gICAgJGV4cG9ydCgkZXhwb3J0LlMsICdOdW1iZXInLCB7XG4gICAgICBpc1NhZmVJbnRlZ2VyOiBmdW5jdGlvbiBpc1NhZmVJbnRlZ2VyKG51bWJlcikge1xuICAgICAgICByZXR1cm4gaXNJbnRlZ2VyKG51bWJlcikgJiYgYWJzKG51bWJlcikgPD0gMHgxZmZmZmZmZmZmZmZmZjtcbiAgICAgIH1cbiAgICB9KTtcbiAgfSwge1xuICAgIFwiMzNcIjogMzMsXG4gICAgXCI1MFwiOiA1MFxuICB9XSxcbiAgMTg0OiBbZnVuY3Rpb24gKF9kZXJlcV8sIG1vZHVsZSwgZXhwb3J0cykge1xuICAgIC8vIDIwLjEuMi42IE51bWJlci5NQVhfU0FGRV9JTlRFR0VSXG4gICAgdmFyICRleHBvcnQgPSBfZGVyZXFfKDMzKTtcblxuICAgICRleHBvcnQoJGV4cG9ydC5TLCAnTnVtYmVyJywge1xuICAgICAgTUFYX1NBRkVfSU5URUdFUjogMHgxZmZmZmZmZmZmZmZmZlxuICAgIH0pO1xuICB9LCB7XG4gICAgXCIzM1wiOiAzM1xuICB9XSxcbiAgMTg1OiBbZnVuY3Rpb24gKF9kZXJlcV8sIG1vZHVsZSwgZXhwb3J0cykge1xuICAgIC8vIDIwLjEuMi4xMCBOdW1iZXIuTUlOX1NBRkVfSU5URUdFUlxuICAgIHZhciAkZXhwb3J0ID0gX2RlcmVxXygzMyk7XG5cbiAgICAkZXhwb3J0KCRleHBvcnQuUywgJ051bWJlcicsIHtcbiAgICAgIE1JTl9TQUZFX0lOVEVHRVI6IC0weDFmZmZmZmZmZmZmZmZmXG4gICAgfSk7XG4gIH0sIHtcbiAgICBcIjMzXCI6IDMzXG4gIH1dLFxuICAxODY6IFtmdW5jdGlvbiAoX2RlcmVxXywgbW9kdWxlLCBleHBvcnRzKSB7XG4gICAgdmFyICRleHBvcnQgPSBfZGVyZXFfKDMzKTtcblxuICAgIHZhciAkcGFyc2VGbG9hdCA9IF9kZXJlcV8oODYpOyAvLyAyMC4xLjIuMTIgTnVtYmVyLnBhcnNlRmxvYXQoc3RyaW5nKVxuXG5cbiAgICAkZXhwb3J0KCRleHBvcnQuUyArICRleHBvcnQuRiAqIChOdW1iZXIucGFyc2VGbG9hdCAhPSAkcGFyc2VGbG9hdCksICdOdW1iZXInLCB7XG4gICAgICBwYXJzZUZsb2F0OiAkcGFyc2VGbG9hdFxuICAgIH0pO1xuICB9LCB7XG4gICAgXCIzM1wiOiAzMyxcbiAgICBcIjg2XCI6IDg2XG4gIH1dLFxuICAxODc6IFtmdW5jdGlvbiAoX2RlcmVxXywgbW9kdWxlLCBleHBvcnRzKSB7XG4gICAgdmFyICRleHBvcnQgPSBfZGVyZXFfKDMzKTtcblxuICAgIHZhciAkcGFyc2VJbnQgPSBfZGVyZXFfKDg3KTsgLy8gMjAuMS4yLjEzIE51bWJlci5wYXJzZUludChzdHJpbmcsIHJhZGl4KVxuXG5cbiAgICAkZXhwb3J0KCRleHBvcnQuUyArICRleHBvcnQuRiAqIChOdW1iZXIucGFyc2VJbnQgIT0gJHBhcnNlSW50KSwgJ051bWJlcicsIHtcbiAgICAgIHBhcnNlSW50OiAkcGFyc2VJbnRcbiAgICB9KTtcbiAgfSwge1xuICAgIFwiMzNcIjogMzMsXG4gICAgXCI4N1wiOiA4N1xuICB9XSxcbiAgMTg4OiBbZnVuY3Rpb24gKF9kZXJlcV8sIG1vZHVsZSwgZXhwb3J0cykge1xuICAgICd1c2Ugc3RyaWN0JztcblxuICAgIHZhciAkZXhwb3J0ID0gX2RlcmVxXygzMyk7XG5cbiAgICB2YXIgdG9JbnRlZ2VyID0gX2RlcmVxXygxMTYpO1xuXG4gICAgdmFyIGFOdW1iZXJWYWx1ZSA9IF9kZXJlcV8oNCk7XG5cbiAgICB2YXIgcmVwZWF0ID0gX2RlcmVxXygxMTApO1xuXG4gICAgdmFyICR0b0ZpeGVkID0gMS4wLnRvRml4ZWQ7XG4gICAgdmFyIGZsb29yID0gTWF0aC5mbG9vcjtcbiAgICB2YXIgZGF0YSA9IFswLCAwLCAwLCAwLCAwLCAwXTtcbiAgICB2YXIgRVJST1IgPSAnTnVtYmVyLnRvRml4ZWQ6IGluY29ycmVjdCBpbnZvY2F0aW9uISc7XG4gICAgdmFyIFpFUk8gPSAnMCc7XG5cbiAgICB2YXIgbXVsdGlwbHkgPSBmdW5jdGlvbiBtdWx0aXBseShuLCBjKSB7XG4gICAgICB2YXIgaSA9IC0xO1xuICAgICAgdmFyIGMyID0gYztcblxuICAgICAgd2hpbGUgKCsraSA8IDYpIHtcbiAgICAgICAgYzIgKz0gbiAqIGRhdGFbaV07XG4gICAgICAgIGRhdGFbaV0gPSBjMiAlIDFlNztcbiAgICAgICAgYzIgPSBmbG9vcihjMiAvIDFlNyk7XG4gICAgICB9XG4gICAgfTtcblxuICAgIHZhciBkaXZpZGUgPSBmdW5jdGlvbiBkaXZpZGUobikge1xuICAgICAgdmFyIGkgPSA2O1xuICAgICAgdmFyIGMgPSAwO1xuXG4gICAgICB3aGlsZSAoLS1pID49IDApIHtcbiAgICAgICAgYyArPSBkYXRhW2ldO1xuICAgICAgICBkYXRhW2ldID0gZmxvb3IoYyAvIG4pO1xuICAgICAgICBjID0gYyAlIG4gKiAxZTc7XG4gICAgICB9XG4gICAgfTtcblxuICAgIHZhciBudW1Ub1N0cmluZyA9IGZ1bmN0aW9uIG51bVRvU3RyaW5nKCkge1xuICAgICAgdmFyIGkgPSA2O1xuICAgICAgdmFyIHMgPSAnJztcblxuICAgICAgd2hpbGUgKC0taSA+PSAwKSB7XG4gICAgICAgIGlmIChzICE9PSAnJyB8fCBpID09PSAwIHx8IGRhdGFbaV0gIT09IDApIHtcbiAgICAgICAgICB2YXIgdCA9IFN0cmluZyhkYXRhW2ldKTtcbiAgICAgICAgICBzID0gcyA9PT0gJycgPyB0IDogcyArIHJlcGVhdC5jYWxsKFpFUk8sIDcgLSB0Lmxlbmd0aCkgKyB0O1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBzO1xuICAgIH07XG5cbiAgICB2YXIgcG93ID0gZnVuY3Rpb24gcG93KHgsIG4sIGFjYykge1xuICAgICAgcmV0dXJuIG4gPT09IDAgPyBhY2MgOiBuICUgMiA9PT0gMSA/IHBvdyh4LCBuIC0gMSwgYWNjICogeCkgOiBwb3coeCAqIHgsIG4gLyAyLCBhY2MpO1xuICAgIH07XG5cbiAgICB2YXIgbG9nID0gZnVuY3Rpb24gbG9nKHgpIHtcbiAgICAgIHZhciBuID0gMDtcbiAgICAgIHZhciB4MiA9IHg7XG5cbiAgICAgIHdoaWxlICh4MiA+PSA0MDk2KSB7XG4gICAgICAgIG4gKz0gMTI7XG4gICAgICAgIHgyIC89IDQwOTY7XG4gICAgICB9XG5cbiAgICAgIHdoaWxlICh4MiA+PSAyKSB7XG4gICAgICAgIG4gKz0gMTtcbiAgICAgICAgeDIgLz0gMjtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIG47XG4gICAgfTtcblxuICAgICRleHBvcnQoJGV4cG9ydC5QICsgJGV4cG9ydC5GICogKCEhJHRvRml4ZWQgJiYgKDAuMDAwMDgudG9GaXhlZCgzKSAhPT0gJzAuMDAwJyB8fCAwLjkudG9GaXhlZCgwKSAhPT0gJzEnIHx8IDEuMjU1LnRvRml4ZWQoMikgIT09ICcxLjI1JyB8fCAxMDAwMDAwMDAwMDAwMDAwMTI4LjAudG9GaXhlZCgwKSAhPT0gJzEwMDAwMDAwMDAwMDAwMDAxMjgnKSB8fCAhX2RlcmVxXygzNSkoZnVuY3Rpb24gKCkge1xuICAgICAgLy8gVjggfiBBbmRyb2lkIDQuMy1cbiAgICAgICR0b0ZpeGVkLmNhbGwoe30pO1xuICAgIH0pKSwgJ051bWJlcicsIHtcbiAgICAgIHRvRml4ZWQ6IGZ1bmN0aW9uIHRvRml4ZWQoZnJhY3Rpb25EaWdpdHMpIHtcbiAgICAgICAgdmFyIHggPSBhTnVtYmVyVmFsdWUodGhpcywgRVJST1IpO1xuICAgICAgICB2YXIgZiA9IHRvSW50ZWdlcihmcmFjdGlvbkRpZ2l0cyk7XG4gICAgICAgIHZhciBzID0gJyc7XG4gICAgICAgIHZhciBtID0gWkVSTztcbiAgICAgICAgdmFyIGUsIHosIGosIGs7XG4gICAgICAgIGlmIChmIDwgMCB8fCBmID4gMjApIHRocm93IFJhbmdlRXJyb3IoRVJST1IpOyAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tc2VsZi1jb21wYXJlXG5cbiAgICAgICAgaWYgKHggIT0geCkgcmV0dXJuICdOYU4nO1xuICAgICAgICBpZiAoeCA8PSAtMWUyMSB8fCB4ID49IDFlMjEpIHJldHVybiBTdHJpbmcoeCk7XG5cbiAgICAgICAgaWYgKHggPCAwKSB7XG4gICAgICAgICAgcyA9ICctJztcbiAgICAgICAgICB4ID0gLXg7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoeCA+IDFlLTIxKSB7XG4gICAgICAgICAgZSA9IGxvZyh4ICogcG93KDIsIDY5LCAxKSkgLSA2OTtcbiAgICAgICAgICB6ID0gZSA8IDAgPyB4ICogcG93KDIsIC1lLCAxKSA6IHggLyBwb3coMiwgZSwgMSk7XG4gICAgICAgICAgeiAqPSAweDEwMDAwMDAwMDAwMDAwO1xuICAgICAgICAgIGUgPSA1MiAtIGU7XG5cbiAgICAgICAgICBpZiAoZSA+IDApIHtcbiAgICAgICAgICAgIG11bHRpcGx5KDAsIHopO1xuICAgICAgICAgICAgaiA9IGY7XG5cbiAgICAgICAgICAgIHdoaWxlIChqID49IDcpIHtcbiAgICAgICAgICAgICAgbXVsdGlwbHkoMWU3LCAwKTtcbiAgICAgICAgICAgICAgaiAtPSA3O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBtdWx0aXBseShwb3coMTAsIGosIDEpLCAwKTtcbiAgICAgICAgICAgIGogPSBlIC0gMTtcblxuICAgICAgICAgICAgd2hpbGUgKGogPj0gMjMpIHtcbiAgICAgICAgICAgICAgZGl2aWRlKDEgPDwgMjMpO1xuICAgICAgICAgICAgICBqIC09IDIzO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBkaXZpZGUoMSA8PCBqKTtcbiAgICAgICAgICAgIG11bHRpcGx5KDEsIDEpO1xuICAgICAgICAgICAgZGl2aWRlKDIpO1xuICAgICAgICAgICAgbSA9IG51bVRvU3RyaW5nKCk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIG11bHRpcGx5KDAsIHopO1xuICAgICAgICAgICAgbXVsdGlwbHkoMSA8PCAtZSwgMCk7XG4gICAgICAgICAgICBtID0gbnVtVG9TdHJpbmcoKSArIHJlcGVhdC5jYWxsKFpFUk8sIGYpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChmID4gMCkge1xuICAgICAgICAgIGsgPSBtLmxlbmd0aDtcbiAgICAgICAgICBtID0gcyArIChrIDw9IGYgPyAnMC4nICsgcmVwZWF0LmNhbGwoWkVSTywgZiAtIGspICsgbSA6IG0uc2xpY2UoMCwgayAtIGYpICsgJy4nICsgbS5zbGljZShrIC0gZikpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIG0gPSBzICsgbTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBtO1xuICAgICAgfVxuICAgIH0pO1xuICB9LCB7XG4gICAgXCIxMTBcIjogMTEwLFxuICAgIFwiMTE2XCI6IDExNixcbiAgICBcIjMzXCI6IDMzLFxuICAgIFwiMzVcIjogMzUsXG4gICAgXCI0XCI6IDRcbiAgfV0sXG4gIDE4OTogW2Z1bmN0aW9uIChfZGVyZXFfLCBtb2R1bGUsIGV4cG9ydHMpIHtcbiAgICAndXNlIHN0cmljdCc7XG5cbiAgICB2YXIgJGV4cG9ydCA9IF9kZXJlcV8oMzMpO1xuXG4gICAgdmFyICRmYWlscyA9IF9kZXJlcV8oMzUpO1xuXG4gICAgdmFyIGFOdW1iZXJWYWx1ZSA9IF9kZXJlcV8oNCk7XG5cbiAgICB2YXIgJHRvUHJlY2lzaW9uID0gMS4wLnRvUHJlY2lzaW9uO1xuICAgICRleHBvcnQoJGV4cG9ydC5QICsgJGV4cG9ydC5GICogKCRmYWlscyhmdW5jdGlvbiAoKSB7XG4gICAgICAvLyBJRTctXG4gICAgICByZXR1cm4gJHRvUHJlY2lzaW9uLmNhbGwoMSwgdW5kZWZpbmVkKSAhPT0gJzEnO1xuICAgIH0pIHx8ICEkZmFpbHMoZnVuY3Rpb24gKCkge1xuICAgICAgLy8gVjggfiBBbmRyb2lkIDQuMy1cbiAgICAgICR0b1ByZWNpc2lvbi5jYWxsKHt9KTtcbiAgICB9KSksICdOdW1iZXInLCB7XG4gICAgICB0b1ByZWNpc2lvbjogZnVuY3Rpb24gdG9QcmVjaXNpb24ocHJlY2lzaW9uKSB7XG4gICAgICAgIHZhciB0aGF0ID0gYU51bWJlclZhbHVlKHRoaXMsICdOdW1iZXIjdG9QcmVjaXNpb246IGluY29ycmVjdCBpbnZvY2F0aW9uIScpO1xuICAgICAgICByZXR1cm4gcHJlY2lzaW9uID09PSB1bmRlZmluZWQgPyAkdG9QcmVjaXNpb24uY2FsbCh0aGF0KSA6ICR0b1ByZWNpc2lvbi5jYWxsKHRoYXQsIHByZWNpc2lvbik7XG4gICAgICB9XG4gICAgfSk7XG4gIH0sIHtcbiAgICBcIjMzXCI6IDMzLFxuICAgIFwiMzVcIjogMzUsXG4gICAgXCI0XCI6IDRcbiAgfV0sXG4gIDE5MDogW2Z1bmN0aW9uIChfZGVyZXFfLCBtb2R1bGUsIGV4cG9ydHMpIHtcbiAgICAvLyAxOS4xLjMuMSBPYmplY3QuYXNzaWduKHRhcmdldCwgc291cmNlKVxuICAgIHZhciAkZXhwb3J0ID0gX2RlcmVxXygzMyk7XG5cbiAgICAkZXhwb3J0KCRleHBvcnQuUyArICRleHBvcnQuRiwgJ09iamVjdCcsIHtcbiAgICAgIGFzc2lnbjogX2RlcmVxXyg3MClcbiAgICB9KTtcbiAgfSwge1xuICAgIFwiMzNcIjogMzMsXG4gICAgXCI3MFwiOiA3MFxuICB9XSxcbiAgMTkxOiBbZnVuY3Rpb24gKF9kZXJlcV8sIG1vZHVsZSwgZXhwb3J0cykge1xuICAgIHZhciAkZXhwb3J0ID0gX2RlcmVxXygzMyk7IC8vIDE5LjEuMi4yIC8gMTUuMi4zLjUgT2JqZWN0LmNyZWF0ZShPIFssIFByb3BlcnRpZXNdKVxuXG5cbiAgICAkZXhwb3J0KCRleHBvcnQuUywgJ09iamVjdCcsIHtcbiAgICAgIGNyZWF0ZTogX2RlcmVxXyg3MSlcbiAgICB9KTtcbiAgfSwge1xuICAgIFwiMzNcIjogMzMsXG4gICAgXCI3MVwiOiA3MVxuICB9XSxcbiAgMTkyOiBbZnVuY3Rpb24gKF9kZXJlcV8sIG1vZHVsZSwgZXhwb3J0cykge1xuICAgIHZhciAkZXhwb3J0ID0gX2RlcmVxXygzMyk7IC8vIDE5LjEuMi4zIC8gMTUuMi4zLjcgT2JqZWN0LmRlZmluZVByb3BlcnRpZXMoTywgUHJvcGVydGllcylcblxuXG4gICAgJGV4cG9ydCgkZXhwb3J0LlMgKyAkZXhwb3J0LkYgKiAhX2RlcmVxXygyOSksICdPYmplY3QnLCB7XG4gICAgICBkZWZpbmVQcm9wZXJ0aWVzOiBfZGVyZXFfKDczKVxuICAgIH0pO1xuICB9LCB7XG4gICAgXCIyOVwiOiAyOSxcbiAgICBcIjMzXCI6IDMzLFxuICAgIFwiNzNcIjogNzNcbiAgfV0sXG4gIDE5MzogW2Z1bmN0aW9uIChfZGVyZXFfLCBtb2R1bGUsIGV4cG9ydHMpIHtcbiAgICB2YXIgJGV4cG9ydCA9IF9kZXJlcV8oMzMpOyAvLyAxOS4xLjIuNCAvIDE1LjIuMy42IE9iamVjdC5kZWZpbmVQcm9wZXJ0eShPLCBQLCBBdHRyaWJ1dGVzKVxuXG5cbiAgICAkZXhwb3J0KCRleHBvcnQuUyArICRleHBvcnQuRiAqICFfZGVyZXFfKDI5KSwgJ09iamVjdCcsIHtcbiAgICAgIGRlZmluZVByb3BlcnR5OiBfZGVyZXFfKDcyKS5mXG4gICAgfSk7XG4gIH0sIHtcbiAgICBcIjI5XCI6IDI5LFxuICAgIFwiMzNcIjogMzMsXG4gICAgXCI3MlwiOiA3MlxuICB9XSxcbiAgMTk0OiBbZnVuY3Rpb24gKF9kZXJlcV8sIG1vZHVsZSwgZXhwb3J0cykge1xuICAgIC8vIDE5LjEuMi41IE9iamVjdC5mcmVlemUoTylcbiAgICB2YXIgaXNPYmplY3QgPSBfZGVyZXFfKDUxKTtcblxuICAgIHZhciBtZXRhID0gX2RlcmVxXyg2Nikub25GcmVlemU7XG5cbiAgICBfZGVyZXFfKDgzKSgnZnJlZXplJywgZnVuY3Rpb24gKCRmcmVlemUpIHtcbiAgICAgIHJldHVybiBmdW5jdGlvbiBmcmVlemUoaXQpIHtcbiAgICAgICAgcmV0dXJuICRmcmVlemUgJiYgaXNPYmplY3QoaXQpID8gJGZyZWV6ZShtZXRhKGl0KSkgOiBpdDtcbiAgICAgIH07XG4gICAgfSk7XG4gIH0sIHtcbiAgICBcIjUxXCI6IDUxLFxuICAgIFwiNjZcIjogNjYsXG4gICAgXCI4M1wiOiA4M1xuICB9XSxcbiAgMTk1OiBbZnVuY3Rpb24gKF9kZXJlcV8sIG1vZHVsZSwgZXhwb3J0cykge1xuICAgIC8vIDE5LjEuMi42IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoTywgUClcbiAgICB2YXIgdG9JT2JqZWN0ID0gX2RlcmVxXygxMTcpO1xuXG4gICAgdmFyICRnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IgPSBfZGVyZXFfKDc1KS5mO1xuXG4gICAgX2RlcmVxXyg4MykoJ2dldE93blByb3BlcnR5RGVzY3JpcHRvcicsIGZ1bmN0aW9uICgpIHtcbiAgICAgIHJldHVybiBmdW5jdGlvbiBnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoaXQsIGtleSkge1xuICAgICAgICByZXR1cm4gJGdldE93blByb3BlcnR5RGVzY3JpcHRvcih0b0lPYmplY3QoaXQpLCBrZXkpO1xuICAgICAgfTtcbiAgICB9KTtcbiAgfSwge1xuICAgIFwiMTE3XCI6IDExNyxcbiAgICBcIjc1XCI6IDc1LFxuICAgIFwiODNcIjogODNcbiAgfV0sXG4gIDE5NjogW2Z1bmN0aW9uIChfZGVyZXFfLCBtb2R1bGUsIGV4cG9ydHMpIHtcbiAgICAvLyAxOS4xLjIuNyBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyhPKVxuICAgIF9kZXJlcV8oODMpKCdnZXRPd25Qcm9wZXJ0eU5hbWVzJywgZnVuY3Rpb24gKCkge1xuICAgICAgcmV0dXJuIF9kZXJlcV8oNzYpLmY7XG4gICAgfSk7XG4gIH0sIHtcbiAgICBcIjc2XCI6IDc2LFxuICAgIFwiODNcIjogODNcbiAgfV0sXG4gIDE5NzogW2Z1bmN0aW9uIChfZGVyZXFfLCBtb2R1bGUsIGV4cG9ydHMpIHtcbiAgICAvLyAxOS4xLjIuOSBPYmplY3QuZ2V0UHJvdG90eXBlT2YoTylcbiAgICB2YXIgdG9PYmplY3QgPSBfZGVyZXFfKDExOSk7XG5cbiAgICB2YXIgJGdldFByb3RvdHlwZU9mID0gX2RlcmVxXyg3OSk7XG5cbiAgICBfZGVyZXFfKDgzKSgnZ2V0UHJvdG90eXBlT2YnLCBmdW5jdGlvbiAoKSB7XG4gICAgICByZXR1cm4gZnVuY3Rpb24gZ2V0UHJvdG90eXBlT2YoaXQpIHtcbiAgICAgICAgcmV0dXJuICRnZXRQcm90b3R5cGVPZih0b09iamVjdChpdCkpO1xuICAgICAgfTtcbiAgICB9KTtcbiAgfSwge1xuICAgIFwiMTE5XCI6IDExOSxcbiAgICBcIjc5XCI6IDc5LFxuICAgIFwiODNcIjogODNcbiAgfV0sXG4gIDE5ODogW2Z1bmN0aW9uIChfZGVyZXFfLCBtb2R1bGUsIGV4cG9ydHMpIHtcbiAgICAvLyAxOS4xLjIuMTEgT2JqZWN0LmlzRXh0ZW5zaWJsZShPKVxuICAgIHZhciBpc09iamVjdCA9IF9kZXJlcV8oNTEpO1xuXG4gICAgX2RlcmVxXyg4MykoJ2lzRXh0ZW5zaWJsZScsIGZ1bmN0aW9uICgkaXNFeHRlbnNpYmxlKSB7XG4gICAgICByZXR1cm4gZnVuY3Rpb24gaXNFeHRlbnNpYmxlKGl0KSB7XG4gICAgICAgIHJldHVybiBpc09iamVjdChpdCkgPyAkaXNFeHRlbnNpYmxlID8gJGlzRXh0ZW5zaWJsZShpdCkgOiB0cnVlIDogZmFsc2U7XG4gICAgICB9O1xuICAgIH0pO1xuICB9LCB7XG4gICAgXCI1MVwiOiA1MSxcbiAgICBcIjgzXCI6IDgzXG4gIH1dLFxuICAxOTk6IFtmdW5jdGlvbiAoX2RlcmVxXywgbW9kdWxlLCBleHBvcnRzKSB7XG4gICAgLy8gMTkuMS4yLjEyIE9iamVjdC5pc0Zyb3plbihPKVxuICAgIHZhciBpc09iamVjdCA9IF9kZXJlcV8oNTEpO1xuXG4gICAgX2RlcmVxXyg4MykoJ2lzRnJvemVuJywgZnVuY3Rpb24gKCRpc0Zyb3plbikge1xuICAgICAgcmV0dXJuIGZ1bmN0aW9uIGlzRnJvemVuKGl0KSB7XG4gICAgICAgIHJldHVybiBpc09iamVjdChpdCkgPyAkaXNGcm96ZW4gPyAkaXNGcm96ZW4oaXQpIDogZmFsc2UgOiB0cnVlO1xuICAgICAgfTtcbiAgICB9KTtcbiAgfSwge1xuICAgIFwiNTFcIjogNTEsXG4gICAgXCI4M1wiOiA4M1xuICB9XSxcbiAgMjAwOiBbZnVuY3Rpb24gKF9kZXJlcV8sIG1vZHVsZSwgZXhwb3J0cykge1xuICAgIC8vIDE5LjEuMi4xMyBPYmplY3QuaXNTZWFsZWQoTylcbiAgICB2YXIgaXNPYmplY3QgPSBfZGVyZXFfKDUxKTtcblxuICAgIF9kZXJlcV8oODMpKCdpc1NlYWxlZCcsIGZ1bmN0aW9uICgkaXNTZWFsZWQpIHtcbiAgICAgIHJldHVybiBmdW5jdGlvbiBpc1NlYWxlZChpdCkge1xuICAgICAgICByZXR1cm4gaXNPYmplY3QoaXQpID8gJGlzU2VhbGVkID8gJGlzU2VhbGVkKGl0KSA6IGZhbHNlIDogdHJ1ZTtcbiAgICAgIH07XG4gICAgfSk7XG4gIH0sIHtcbiAgICBcIjUxXCI6IDUxLFxuICAgIFwiODNcIjogODNcbiAgfV0sXG4gIDIwMTogW2Z1bmN0aW9uIChfZGVyZXFfLCBtb2R1bGUsIGV4cG9ydHMpIHtcbiAgICAvLyAxOS4xLjMuMTAgT2JqZWN0LmlzKHZhbHVlMSwgdmFsdWUyKVxuICAgIHZhciAkZXhwb3J0ID0gX2RlcmVxXygzMyk7XG5cbiAgICAkZXhwb3J0KCRleHBvcnQuUywgJ09iamVjdCcsIHtcbiAgICAgIGlzOiBfZGVyZXFfKDk2KVxuICAgIH0pO1xuICB9LCB7XG4gICAgXCIzM1wiOiAzMyxcbiAgICBcIjk2XCI6IDk2XG4gIH1dLFxuICAyMDI6IFtmdW5jdGlvbiAoX2RlcmVxXywgbW9kdWxlLCBleHBvcnRzKSB7XG4gICAgLy8gMTkuMS4yLjE0IE9iamVjdC5rZXlzKE8pXG4gICAgdmFyIHRvT2JqZWN0ID0gX2RlcmVxXygxMTkpO1xuXG4gICAgdmFyICRrZXlzID0gX2RlcmVxXyg4MSk7XG5cbiAgICBfZGVyZXFfKDgzKSgna2V5cycsIGZ1bmN0aW9uICgpIHtcbiAgICAgIHJldHVybiBmdW5jdGlvbiBrZXlzKGl0KSB7XG4gICAgICAgIHJldHVybiAka2V5cyh0b09iamVjdChpdCkpO1xuICAgICAgfTtcbiAgICB9KTtcbiAgfSwge1xuICAgIFwiMTE5XCI6IDExOSxcbiAgICBcIjgxXCI6IDgxLFxuICAgIFwiODNcIjogODNcbiAgfV0sXG4gIDIwMzogW2Z1bmN0aW9uIChfZGVyZXFfLCBtb2R1bGUsIGV4cG9ydHMpIHtcbiAgICAvLyAxOS4xLjIuMTUgT2JqZWN0LnByZXZlbnRFeHRlbnNpb25zKE8pXG4gICAgdmFyIGlzT2JqZWN0ID0gX2RlcmVxXyg1MSk7XG5cbiAgICB2YXIgbWV0YSA9IF9kZXJlcV8oNjYpLm9uRnJlZXplO1xuXG4gICAgX2RlcmVxXyg4MykoJ3ByZXZlbnRFeHRlbnNpb25zJywgZnVuY3Rpb24gKCRwcmV2ZW50RXh0ZW5zaW9ucykge1xuICAgICAgcmV0dXJuIGZ1bmN0aW9uIHByZXZlbnRFeHRlbnNpb25zKGl0KSB7XG4gICAgICAgIHJldHVybiAkcHJldmVudEV4dGVuc2lvbnMgJiYgaXNPYmplY3QoaXQpID8gJHByZXZlbnRFeHRlbnNpb25zKG1ldGEoaXQpKSA6IGl0O1xuICAgICAgfTtcbiAgICB9KTtcbiAgfSwge1xuICAgIFwiNTFcIjogNTEsXG4gICAgXCI2NlwiOiA2NixcbiAgICBcIjgzXCI6IDgzXG4gIH1dLFxuICAyMDQ6IFtmdW5jdGlvbiAoX2RlcmVxXywgbW9kdWxlLCBleHBvcnRzKSB7XG4gICAgLy8gMTkuMS4yLjE3IE9iamVjdC5zZWFsKE8pXG4gICAgdmFyIGlzT2JqZWN0ID0gX2RlcmVxXyg1MSk7XG5cbiAgICB2YXIgbWV0YSA9IF9kZXJlcV8oNjYpLm9uRnJlZXplO1xuXG4gICAgX2RlcmVxXyg4MykoJ3NlYWwnLCBmdW5jdGlvbiAoJHNlYWwpIHtcbiAgICAgIHJldHVybiBmdW5jdGlvbiBzZWFsKGl0KSB7XG4gICAgICAgIHJldHVybiAkc2VhbCAmJiBpc09iamVjdChpdCkgPyAkc2VhbChtZXRhKGl0KSkgOiBpdDtcbiAgICAgIH07XG4gICAgfSk7XG4gIH0sIHtcbiAgICBcIjUxXCI6IDUxLFxuICAgIFwiNjZcIjogNjYsXG4gICAgXCI4M1wiOiA4M1xuICB9XSxcbiAgMjA1OiBbZnVuY3Rpb24gKF9kZXJlcV8sIG1vZHVsZSwgZXhwb3J0cykge1xuICAgIC8vIDE5LjEuMy4xOSBPYmplY3Quc2V0UHJvdG90eXBlT2YoTywgcHJvdG8pXG4gICAgdmFyICRleHBvcnQgPSBfZGVyZXFfKDMzKTtcblxuICAgICRleHBvcnQoJGV4cG9ydC5TLCAnT2JqZWN0Jywge1xuICAgICAgc2V0UHJvdG90eXBlT2Y6IF9kZXJlcV8oOTkpLnNldFxuICAgIH0pO1xuICB9LCB7XG4gICAgXCIzM1wiOiAzMyxcbiAgICBcIjk5XCI6IDk5XG4gIH1dLFxuICAyMDY6IFtmdW5jdGlvbiAoX2RlcmVxXywgbW9kdWxlLCBleHBvcnRzKSB7XG4gICAgJ3VzZSBzdHJpY3QnOyAvLyAxOS4xLjMuNiBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nKClcblxuICAgIHZhciBjbGFzc29mID0gX2RlcmVxXygxNyk7XG5cbiAgICB2YXIgdGVzdCA9IHt9O1xuICAgIHRlc3RbX2RlcmVxXygxMjgpKCd0b1N0cmluZ1RhZycpXSA9ICd6JztcblxuICAgIGlmICh0ZXN0ICsgJycgIT0gJ1tvYmplY3Qgel0nKSB7XG4gICAgICBfZGVyZXFfKDk0KShPYmplY3QucHJvdG90eXBlLCAndG9TdHJpbmcnLCBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICAgICAgcmV0dXJuICdbb2JqZWN0ICcgKyBjbGFzc29mKHRoaXMpICsgJ10nO1xuICAgICAgfSwgdHJ1ZSk7XG4gICAgfVxuICB9LCB7XG4gICAgXCIxMjhcIjogMTI4LFxuICAgIFwiMTdcIjogMTcsXG4gICAgXCI5NFwiOiA5NFxuICB9XSxcbiAgMjA3OiBbZnVuY3Rpb24gKF9kZXJlcV8sIG1vZHVsZSwgZXhwb3J0cykge1xuICAgIHZhciAkZXhwb3J0ID0gX2RlcmVxXygzMyk7XG5cbiAgICB2YXIgJHBhcnNlRmxvYXQgPSBfZGVyZXFfKDg2KTsgLy8gMTguMi40IHBhcnNlRmxvYXQoc3RyaW5nKVxuXG5cbiAgICAkZXhwb3J0KCRleHBvcnQuRyArICRleHBvcnQuRiAqIChwYXJzZUZsb2F0ICE9ICRwYXJzZUZsb2F0KSwge1xuICAgICAgcGFyc2VGbG9hdDogJHBhcnNlRmxvYXRcbiAgICB9KTtcbiAgfSwge1xuICAgIFwiMzNcIjogMzMsXG4gICAgXCI4NlwiOiA4NlxuICB9XSxcbiAgMjA4OiBbZnVuY3Rpb24gKF9kZXJlcV8sIG1vZHVsZSwgZXhwb3J0cykge1xuICAgIHZhciAkZXhwb3J0ID0gX2RlcmVxXygzMyk7XG5cbiAgICB2YXIgJHBhcnNlSW50ID0gX2RlcmVxXyg4Nyk7IC8vIDE4LjIuNSBwYXJzZUludChzdHJpbmcsIHJhZGl4KVxuXG5cbiAgICAkZXhwb3J0KCRleHBvcnQuRyArICRleHBvcnQuRiAqIChwYXJzZUludCAhPSAkcGFyc2VJbnQpLCB7XG4gICAgICBwYXJzZUludDogJHBhcnNlSW50XG4gICAgfSk7XG4gIH0sIHtcbiAgICBcIjMzXCI6IDMzLFxuICAgIFwiODdcIjogODdcbiAgfV0sXG4gIDIwOTogW2Z1bmN0aW9uIChfZGVyZXFfLCBtb2R1bGUsIGV4cG9ydHMpIHtcbiAgICAndXNlIHN0cmljdCc7XG5cbiAgICB2YXIgTElCUkFSWSA9IF9kZXJlcV8oNjApO1xuXG4gICAgdmFyIGdsb2JhbCA9IF9kZXJlcV8oNDApO1xuXG4gICAgdmFyIGN0eCA9IF9kZXJlcV8oMjUpO1xuXG4gICAgdmFyIGNsYXNzb2YgPSBfZGVyZXFfKDE3KTtcblxuICAgIHZhciAkZXhwb3J0ID0gX2RlcmVxXygzMyk7XG5cbiAgICB2YXIgaXNPYmplY3QgPSBfZGVyZXFfKDUxKTtcblxuICAgIHZhciBhRnVuY3Rpb24gPSBfZGVyZXFfKDMpO1xuXG4gICAgdmFyIGFuSW5zdGFuY2UgPSBfZGVyZXFfKDYpO1xuXG4gICAgdmFyIGZvck9mID0gX2RlcmVxXygzOSk7XG5cbiAgICB2YXIgc3BlY2llc0NvbnN0cnVjdG9yID0gX2RlcmVxXygxMDQpO1xuXG4gICAgdmFyIHRhc2sgPSBfZGVyZXFfKDExMykuc2V0O1xuXG4gICAgdmFyIG1pY3JvdGFzayA9IF9kZXJlcV8oNjgpKCk7XG5cbiAgICB2YXIgbmV3UHJvbWlzZUNhcGFiaWxpdHlNb2R1bGUgPSBfZGVyZXFfKDY5KTtcblxuICAgIHZhciBwZXJmb3JtID0gX2RlcmVxXyg5MCk7XG5cbiAgICB2YXIgcHJvbWlzZVJlc29sdmUgPSBfZGVyZXFfKDkxKTtcblxuICAgIHZhciBQUk9NSVNFID0gJ1Byb21pc2UnO1xuICAgIHZhciBUeXBlRXJyb3IgPSBnbG9iYWwuVHlwZUVycm9yO1xuICAgIHZhciBwcm9jZXNzID0gZ2xvYmFsLnByb2Nlc3M7XG4gICAgdmFyICRQcm9taXNlID0gZ2xvYmFsW1BST01JU0VdO1xuICAgIHZhciBpc05vZGUgPSBjbGFzc29mKHByb2Nlc3MpID09ICdwcm9jZXNzJztcblxuICAgIHZhciBlbXB0eSA9IGZ1bmN0aW9uIGVtcHR5KCkge1xuICAgICAgLyogZW1wdHkgKi9cbiAgICB9O1xuXG4gICAgdmFyIEludGVybmFsLCBuZXdHZW5lcmljUHJvbWlzZUNhcGFiaWxpdHksIE93blByb21pc2VDYXBhYmlsaXR5LCBXcmFwcGVyO1xuICAgIHZhciBuZXdQcm9taXNlQ2FwYWJpbGl0eSA9IG5ld0dlbmVyaWNQcm9taXNlQ2FwYWJpbGl0eSA9IG5ld1Byb21pc2VDYXBhYmlsaXR5TW9kdWxlLmY7XG4gICAgdmFyIFVTRV9OQVRJVkUgPSAhIWZ1bmN0aW9uICgpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIGNvcnJlY3Qgc3ViY2xhc3Npbmcgd2l0aCBAQHNwZWNpZXMgc3VwcG9ydFxuICAgICAgICB2YXIgcHJvbWlzZSA9ICRQcm9taXNlLnJlc29sdmUoMSk7XG5cbiAgICAgICAgdmFyIEZha2VQcm9taXNlID0gKHByb21pc2UuY29uc3RydWN0b3IgPSB7fSlbX2RlcmVxXygxMjgpKCdzcGVjaWVzJyldID0gZnVuY3Rpb24gKGV4ZWMpIHtcbiAgICAgICAgICBleGVjKGVtcHR5LCBlbXB0eSk7XG4gICAgICAgIH07IC8vIHVuaGFuZGxlZCByZWplY3Rpb25zIHRyYWNraW5nIHN1cHBvcnQsIE5vZGVKUyBQcm9taXNlIHdpdGhvdXQgaXQgZmFpbHMgQEBzcGVjaWVzIHRlc3RcblxuXG4gICAgICAgIHJldHVybiAoaXNOb2RlIHx8IHR5cGVvZiBQcm9taXNlUmVqZWN0aW9uRXZlbnQgPT0gJ2Z1bmN0aW9uJykgJiYgcHJvbWlzZS50aGVuKGVtcHR5KSBpbnN0YW5jZW9mIEZha2VQcm9taXNlO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvKiBlbXB0eSAqL1xuICAgICAgfVxuICAgIH0oKTsgLy8gaGVscGVyc1xuXG4gICAgdmFyIHNhbWVDb25zdHJ1Y3RvciA9IExJQlJBUlkgPyBmdW5jdGlvbiAoYSwgYikge1xuICAgICAgLy8gd2l0aCBsaWJyYXJ5IHdyYXBwZXIgc3BlY2lhbCBjYXNlXG4gICAgICByZXR1cm4gYSA9PT0gYiB8fCBhID09PSAkUHJvbWlzZSAmJiBiID09PSBXcmFwcGVyO1xuICAgIH0gOiBmdW5jdGlvbiAoYSwgYikge1xuICAgICAgcmV0dXJuIGEgPT09IGI7XG4gICAgfTtcblxuICAgIHZhciBpc1RoZW5hYmxlID0gZnVuY3Rpb24gaXNUaGVuYWJsZShpdCkge1xuICAgICAgdmFyIHRoZW47XG4gICAgICByZXR1cm4gaXNPYmplY3QoaXQpICYmIHR5cGVvZiAodGhlbiA9IGl0LnRoZW4pID09ICdmdW5jdGlvbicgPyB0aGVuIDogZmFsc2U7XG4gICAgfTtcblxuICAgIHZhciBub3RpZnkgPSBmdW5jdGlvbiBub3RpZnkocHJvbWlzZSwgaXNSZWplY3QpIHtcbiAgICAgIGlmIChwcm9taXNlLl9uKSByZXR1cm47XG4gICAgICBwcm9taXNlLl9uID0gdHJ1ZTtcbiAgICAgIHZhciBjaGFpbiA9IHByb21pc2UuX2M7XG4gICAgICBtaWNyb3Rhc2soZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgdmFsdWUgPSBwcm9taXNlLl92O1xuICAgICAgICB2YXIgb2sgPSBwcm9taXNlLl9zID09IDE7XG4gICAgICAgIHZhciBpID0gMDtcblxuICAgICAgICB2YXIgcnVuID0gZnVuY3Rpb24gcnVuKHJlYWN0aW9uKSB7XG4gICAgICAgICAgdmFyIGhhbmRsZXIgPSBvayA/IHJlYWN0aW9uLm9rIDogcmVhY3Rpb24uZmFpbDtcbiAgICAgICAgICB2YXIgcmVzb2x2ZSA9IHJlYWN0aW9uLnJlc29sdmU7XG4gICAgICAgICAgdmFyIHJlamVjdCA9IHJlYWN0aW9uLnJlamVjdDtcbiAgICAgICAgICB2YXIgZG9tYWluID0gcmVhY3Rpb24uZG9tYWluO1xuICAgICAgICAgIHZhciByZXN1bHQsIHRoZW47XG5cbiAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgaWYgKGhhbmRsZXIpIHtcbiAgICAgICAgICAgICAgaWYgKCFvaykge1xuICAgICAgICAgICAgICAgIGlmIChwcm9taXNlLl9oID09IDIpIG9uSGFuZGxlVW5oYW5kbGVkKHByb21pc2UpO1xuICAgICAgICAgICAgICAgIHByb21pc2UuX2ggPSAxO1xuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgaWYgKGhhbmRsZXIgPT09IHRydWUpIHJlc3VsdCA9IHZhbHVlO2Vsc2Uge1xuICAgICAgICAgICAgICAgIGlmIChkb21haW4pIGRvbWFpbi5lbnRlcigpO1xuICAgICAgICAgICAgICAgIHJlc3VsdCA9IGhhbmRsZXIodmFsdWUpO1xuICAgICAgICAgICAgICAgIGlmIChkb21haW4pIGRvbWFpbi5leGl0KCk7XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICBpZiAocmVzdWx0ID09PSByZWFjdGlvbi5wcm9taXNlKSB7XG4gICAgICAgICAgICAgICAgcmVqZWN0KFR5cGVFcnJvcignUHJvbWlzZS1jaGFpbiBjeWNsZScpKTtcbiAgICAgICAgICAgICAgfSBlbHNlIGlmICh0aGVuID0gaXNUaGVuYWJsZShyZXN1bHQpKSB7XG4gICAgICAgICAgICAgICAgdGhlbi5jYWxsKHJlc3VsdCwgcmVzb2x2ZSwgcmVqZWN0KTtcbiAgICAgICAgICAgICAgfSBlbHNlIHJlc29sdmUocmVzdWx0KTtcbiAgICAgICAgICAgIH0gZWxzZSByZWplY3QodmFsdWUpO1xuICAgICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgIHJlamVjdChlKTtcbiAgICAgICAgICB9XG4gICAgICAgIH07XG5cbiAgICAgICAgd2hpbGUgKGNoYWluLmxlbmd0aCA+IGkpIHtcbiAgICAgICAgICBydW4oY2hhaW5baSsrXSk7XG4gICAgICAgIH0gLy8gdmFyaWFibGUgbGVuZ3RoIC0gY2FuJ3QgdXNlIGZvckVhY2hcblxuXG4gICAgICAgIHByb21pc2UuX2MgPSBbXTtcbiAgICAgICAgcHJvbWlzZS5fbiA9IGZhbHNlO1xuICAgICAgICBpZiAoaXNSZWplY3QgJiYgIXByb21pc2UuX2gpIG9uVW5oYW5kbGVkKHByb21pc2UpO1xuICAgICAgfSk7XG4gICAgfTtcblxuICAgIHZhciBvblVuaGFuZGxlZCA9IGZ1bmN0aW9uIG9uVW5oYW5kbGVkKHByb21pc2UpIHtcbiAgICAgIHRhc2suY2FsbChnbG9iYWwsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIHZhbHVlID0gcHJvbWlzZS5fdjtcbiAgICAgICAgdmFyIHVuaGFuZGxlZCA9IGlzVW5oYW5kbGVkKHByb21pc2UpO1xuICAgICAgICB2YXIgcmVzdWx0LCBoYW5kbGVyLCBjb25zb2xlO1xuXG4gICAgICAgIGlmICh1bmhhbmRsZWQpIHtcbiAgICAgICAgICByZXN1bHQgPSBwZXJmb3JtKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGlmIChpc05vZGUpIHtcbiAgICAgICAgICAgICAgcHJvY2Vzcy5lbWl0KCd1bmhhbmRsZWRSZWplY3Rpb24nLCB2YWx1ZSwgcHJvbWlzZSk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKGhhbmRsZXIgPSBnbG9iYWwub251bmhhbmRsZWRyZWplY3Rpb24pIHtcbiAgICAgICAgICAgICAgaGFuZGxlcih7XG4gICAgICAgICAgICAgICAgcHJvbWlzZTogcHJvbWlzZSxcbiAgICAgICAgICAgICAgICByZWFzb246IHZhbHVlXG4gICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSBlbHNlIGlmICgoY29uc29sZSA9IGdsb2JhbC5jb25zb2xlKSAmJiBjb25zb2xlLmVycm9yKSB7XG4gICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ1VuaGFuZGxlZCBwcm9taXNlIHJlamVjdGlvbicsIHZhbHVlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KTsgLy8gQnJvd3NlcnMgc2hvdWxkIG5vdCB0cmlnZ2VyIGByZWplY3Rpb25IYW5kbGVkYCBldmVudCBpZiBpdCB3YXMgaGFuZGxlZCBoZXJlLCBOb2RlSlMgLSBzaG91bGRcblxuICAgICAgICAgIHByb21pc2UuX2ggPSBpc05vZGUgfHwgaXNVbmhhbmRsZWQocHJvbWlzZSkgPyAyIDogMTtcbiAgICAgICAgfVxuXG4gICAgICAgIHByb21pc2UuX2EgPSB1bmRlZmluZWQ7XG4gICAgICAgIGlmICh1bmhhbmRsZWQgJiYgcmVzdWx0LmUpIHRocm93IHJlc3VsdC52O1xuICAgICAgfSk7XG4gICAgfTtcblxuICAgIHZhciBpc1VuaGFuZGxlZCA9IGZ1bmN0aW9uIGlzVW5oYW5kbGVkKHByb21pc2UpIHtcbiAgICAgIGlmIChwcm9taXNlLl9oID09IDEpIHJldHVybiBmYWxzZTtcbiAgICAgIHZhciBjaGFpbiA9IHByb21pc2UuX2EgfHwgcHJvbWlzZS5fYztcbiAgICAgIHZhciBpID0gMDtcbiAgICAgIHZhciByZWFjdGlvbjtcblxuICAgICAgd2hpbGUgKGNoYWluLmxlbmd0aCA+IGkpIHtcbiAgICAgICAgcmVhY3Rpb24gPSBjaGFpbltpKytdO1xuICAgICAgICBpZiAocmVhY3Rpb24uZmFpbCB8fCAhaXNVbmhhbmRsZWQocmVhY3Rpb24ucHJvbWlzZSkpIHJldHVybiBmYWxzZTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfTtcblxuICAgIHZhciBvbkhhbmRsZVVuaGFuZGxlZCA9IGZ1bmN0aW9uIG9uSGFuZGxlVW5oYW5kbGVkKHByb21pc2UpIHtcbiAgICAgIHRhc2suY2FsbChnbG9iYWwsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIGhhbmRsZXI7XG5cbiAgICAgICAgaWYgKGlzTm9kZSkge1xuICAgICAgICAgIHByb2Nlc3MuZW1pdCgncmVqZWN0aW9uSGFuZGxlZCcsIHByb21pc2UpO1xuICAgICAgICB9IGVsc2UgaWYgKGhhbmRsZXIgPSBnbG9iYWwub25yZWplY3Rpb25oYW5kbGVkKSB7XG4gICAgICAgICAgaGFuZGxlcih7XG4gICAgICAgICAgICBwcm9taXNlOiBwcm9taXNlLFxuICAgICAgICAgICAgcmVhc29uOiBwcm9taXNlLl92XG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH07XG5cbiAgICB2YXIgJHJlamVjdCA9IGZ1bmN0aW9uICRyZWplY3QodmFsdWUpIHtcbiAgICAgIHZhciBwcm9taXNlID0gdGhpcztcbiAgICAgIGlmIChwcm9taXNlLl9kKSByZXR1cm47XG4gICAgICBwcm9taXNlLl9kID0gdHJ1ZTtcbiAgICAgIHByb21pc2UgPSBwcm9taXNlLl93IHx8IHByb21pc2U7IC8vIHVud3JhcFxuXG4gICAgICBwcm9taXNlLl92ID0gdmFsdWU7XG4gICAgICBwcm9taXNlLl9zID0gMjtcbiAgICAgIGlmICghcHJvbWlzZS5fYSkgcHJvbWlzZS5fYSA9IHByb21pc2UuX2Muc2xpY2UoKTtcbiAgICAgIG5vdGlmeShwcm9taXNlLCB0cnVlKTtcbiAgICB9O1xuXG4gICAgdmFyICRyZXNvbHZlID0gZnVuY3Rpb24gJHJlc29sdmUodmFsdWUpIHtcbiAgICAgIHZhciBwcm9taXNlID0gdGhpcztcbiAgICAgIHZhciB0aGVuO1xuICAgICAgaWYgKHByb21pc2UuX2QpIHJldHVybjtcbiAgICAgIHByb21pc2UuX2QgPSB0cnVlO1xuICAgICAgcHJvbWlzZSA9IHByb21pc2UuX3cgfHwgcHJvbWlzZTsgLy8gdW53cmFwXG5cbiAgICAgIHRyeSB7XG4gICAgICAgIGlmIChwcm9taXNlID09PSB2YWx1ZSkgdGhyb3cgVHlwZUVycm9yKFwiUHJvbWlzZSBjYW4ndCBiZSByZXNvbHZlZCBpdHNlbGZcIik7XG5cbiAgICAgICAgaWYgKHRoZW4gPSBpc1RoZW5hYmxlKHZhbHVlKSkge1xuICAgICAgICAgIG1pY3JvdGFzayhmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB2YXIgd3JhcHBlciA9IHtcbiAgICAgICAgICAgICAgX3c6IHByb21pc2UsXG4gICAgICAgICAgICAgIF9kOiBmYWxzZVxuICAgICAgICAgICAgfTsgLy8gd3JhcFxuXG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICB0aGVuLmNhbGwodmFsdWUsIGN0eCgkcmVzb2x2ZSwgd3JhcHBlciwgMSksIGN0eCgkcmVqZWN0LCB3cmFwcGVyLCAxKSk7XG4gICAgICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgICAgICRyZWplY3QuY2FsbCh3cmFwcGVyLCBlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBwcm9taXNlLl92ID0gdmFsdWU7XG4gICAgICAgICAgcHJvbWlzZS5fcyA9IDE7XG4gICAgICAgICAgbm90aWZ5KHByb21pc2UsIGZhbHNlKTtcbiAgICAgICAgfVxuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAkcmVqZWN0LmNhbGwoe1xuICAgICAgICAgIF93OiBwcm9taXNlLFxuICAgICAgICAgIF9kOiBmYWxzZVxuICAgICAgICB9LCBlKTsgLy8gd3JhcFxuICAgICAgfVxuICAgIH07IC8vIGNvbnN0cnVjdG9yIHBvbHlmaWxsXG5cblxuICAgIGlmICghVVNFX05BVElWRSkge1xuICAgICAgLy8gMjUuNC4zLjEgUHJvbWlzZShleGVjdXRvcilcbiAgICAgICRQcm9taXNlID0gZnVuY3Rpb24gUHJvbWlzZShleGVjdXRvcikge1xuICAgICAgICBhbkluc3RhbmNlKHRoaXMsICRQcm9taXNlLCBQUk9NSVNFLCAnX2gnKTtcbiAgICAgICAgYUZ1bmN0aW9uKGV4ZWN1dG9yKTtcbiAgICAgICAgSW50ZXJuYWwuY2FsbCh0aGlzKTtcblxuICAgICAgICB0cnkge1xuICAgICAgICAgIGV4ZWN1dG9yKGN0eCgkcmVzb2x2ZSwgdGhpcywgMSksIGN0eCgkcmVqZWN0LCB0aGlzLCAxKSk7XG4gICAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICAgICRyZWplY3QuY2FsbCh0aGlzLCBlcnIpO1xuICAgICAgICB9XG4gICAgICB9OyAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW51c2VkLXZhcnNcblxuXG4gICAgICBJbnRlcm5hbCA9IGZ1bmN0aW9uIFByb21pc2UoZXhlY3V0b3IpIHtcbiAgICAgICAgdGhpcy5fYyA9IFtdOyAvLyA8LSBhd2FpdGluZyByZWFjdGlvbnNcblxuICAgICAgICB0aGlzLl9hID0gdW5kZWZpbmVkOyAvLyA8LSBjaGVja2VkIGluIGlzVW5oYW5kbGVkIHJlYWN0aW9uc1xuXG4gICAgICAgIHRoaXMuX3MgPSAwOyAvLyA8LSBzdGF0ZVxuXG4gICAgICAgIHRoaXMuX2QgPSBmYWxzZTsgLy8gPC0gZG9uZVxuXG4gICAgICAgIHRoaXMuX3YgPSB1bmRlZmluZWQ7IC8vIDwtIHZhbHVlXG5cbiAgICAgICAgdGhpcy5faCA9IDA7IC8vIDwtIHJlamVjdGlvbiBzdGF0ZSwgMCAtIGRlZmF1bHQsIDEgLSBoYW5kbGVkLCAyIC0gdW5oYW5kbGVkXG5cbiAgICAgICAgdGhpcy5fbiA9IGZhbHNlOyAvLyA8LSBub3RpZnlcbiAgICAgIH07XG5cbiAgICAgIEludGVybmFsLnByb3RvdHlwZSA9IF9kZXJlcV8oOTMpKCRQcm9taXNlLnByb3RvdHlwZSwge1xuICAgICAgICAvLyAyNS40LjUuMyBQcm9taXNlLnByb3RvdHlwZS50aGVuKG9uRnVsZmlsbGVkLCBvblJlamVjdGVkKVxuICAgICAgICB0aGVuOiBmdW5jdGlvbiB0aGVuKG9uRnVsZmlsbGVkLCBvblJlamVjdGVkKSB7XG4gICAgICAgICAgdmFyIHJlYWN0aW9uID0gbmV3UHJvbWlzZUNhcGFiaWxpdHkoc3BlY2llc0NvbnN0cnVjdG9yKHRoaXMsICRQcm9taXNlKSk7XG4gICAgICAgICAgcmVhY3Rpb24ub2sgPSB0eXBlb2Ygb25GdWxmaWxsZWQgPT0gJ2Z1bmN0aW9uJyA/IG9uRnVsZmlsbGVkIDogdHJ1ZTtcbiAgICAgICAgICByZWFjdGlvbi5mYWlsID0gdHlwZW9mIG9uUmVqZWN0ZWQgPT0gJ2Z1bmN0aW9uJyAmJiBvblJlamVjdGVkO1xuICAgICAgICAgIHJlYWN0aW9uLmRvbWFpbiA9IGlzTm9kZSA/IHByb2Nlc3MuZG9tYWluIDogdW5kZWZpbmVkO1xuXG4gICAgICAgICAgdGhpcy5fYy5wdXNoKHJlYWN0aW9uKTtcblxuICAgICAgICAgIGlmICh0aGlzLl9hKSB0aGlzLl9hLnB1c2gocmVhY3Rpb24pO1xuICAgICAgICAgIGlmICh0aGlzLl9zKSBub3RpZnkodGhpcywgZmFsc2UpO1xuICAgICAgICAgIHJldHVybiByZWFjdGlvbi5wcm9taXNlO1xuICAgICAgICB9LFxuICAgICAgICAvLyAyNS40LjUuMSBQcm9taXNlLnByb3RvdHlwZS5jYXRjaChvblJlamVjdGVkKVxuICAgICAgICAnY2F0Y2gnOiBmdW5jdGlvbiBfY2F0Y2gob25SZWplY3RlZCkge1xuICAgICAgICAgIHJldHVybiB0aGlzLnRoZW4odW5kZWZpbmVkLCBvblJlamVjdGVkKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG5cbiAgICAgIE93blByb21pc2VDYXBhYmlsaXR5ID0gZnVuY3Rpb24gT3duUHJvbWlzZUNhcGFiaWxpdHkoKSB7XG4gICAgICAgIHZhciBwcm9taXNlID0gbmV3IEludGVybmFsKCk7XG4gICAgICAgIHRoaXMucHJvbWlzZSA9IHByb21pc2U7XG4gICAgICAgIHRoaXMucmVzb2x2ZSA9IGN0eCgkcmVzb2x2ZSwgcHJvbWlzZSwgMSk7XG4gICAgICAgIHRoaXMucmVqZWN0ID0gY3R4KCRyZWplY3QsIHByb21pc2UsIDEpO1xuICAgICAgfTtcblxuICAgICAgbmV3UHJvbWlzZUNhcGFiaWxpdHlNb2R1bGUuZiA9IG5ld1Byb21pc2VDYXBhYmlsaXR5ID0gZnVuY3Rpb24gbmV3UHJvbWlzZUNhcGFiaWxpdHkoQykge1xuICAgICAgICByZXR1cm4gc2FtZUNvbnN0cnVjdG9yKCRQcm9taXNlLCBDKSA/IG5ldyBPd25Qcm9taXNlQ2FwYWJpbGl0eShDKSA6IG5ld0dlbmVyaWNQcm9taXNlQ2FwYWJpbGl0eShDKTtcbiAgICAgIH07XG4gICAgfVxuXG4gICAgJGV4cG9ydCgkZXhwb3J0LkcgKyAkZXhwb3J0LlcgKyAkZXhwb3J0LkYgKiAhVVNFX05BVElWRSwge1xuICAgICAgUHJvbWlzZTogJFByb21pc2VcbiAgICB9KTtcblxuICAgIF9kZXJlcV8oMTAxKSgkUHJvbWlzZSwgUFJPTUlTRSk7XG5cbiAgICBfZGVyZXFfKDEwMCkoUFJPTUlTRSk7XG5cbiAgICBXcmFwcGVyID0gX2RlcmVxXygyMylbUFJPTUlTRV07IC8vIHN0YXRpY3NcblxuICAgICRleHBvcnQoJGV4cG9ydC5TICsgJGV4cG9ydC5GICogIVVTRV9OQVRJVkUsIFBST01JU0UsIHtcbiAgICAgIC8vIDI1LjQuNC41IFByb21pc2UucmVqZWN0KHIpXG4gICAgICByZWplY3Q6IGZ1bmN0aW9uIHJlamVjdChyKSB7XG4gICAgICAgIHZhciBjYXBhYmlsaXR5ID0gbmV3UHJvbWlzZUNhcGFiaWxpdHkodGhpcyk7XG4gICAgICAgIHZhciAkJHJlamVjdCA9IGNhcGFiaWxpdHkucmVqZWN0O1xuICAgICAgICAkJHJlamVjdChyKTtcbiAgICAgICAgcmV0dXJuIGNhcGFiaWxpdHkucHJvbWlzZTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICAkZXhwb3J0KCRleHBvcnQuUyArICRleHBvcnQuRiAqIChMSUJSQVJZIHx8ICFVU0VfTkFUSVZFKSwgUFJPTUlTRSwge1xuICAgICAgLy8gMjUuNC40LjYgUHJvbWlzZS5yZXNvbHZlKHgpXG4gICAgICByZXNvbHZlOiBmdW5jdGlvbiByZXNvbHZlKHgpIHtcbiAgICAgICAgLy8gaW5zdGFuY2VvZiBpbnN0ZWFkIG9mIGludGVybmFsIHNsb3QgY2hlY2sgYmVjYXVzZSB3ZSBzaG91bGQgZml4IGl0IHdpdGhvdXQgcmVwbGFjZW1lbnQgbmF0aXZlIFByb21pc2UgY29yZVxuICAgICAgICBpZiAoeCBpbnN0YW5jZW9mICRQcm9taXNlICYmIHNhbWVDb25zdHJ1Y3Rvcih4LmNvbnN0cnVjdG9yLCB0aGlzKSkgcmV0dXJuIHg7XG4gICAgICAgIHJldHVybiBwcm9taXNlUmVzb2x2ZSh0aGlzLCB4KTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICAkZXhwb3J0KCRleHBvcnQuUyArICRleHBvcnQuRiAqICEoVVNFX05BVElWRSAmJiBfZGVyZXFfKDU2KShmdW5jdGlvbiAoaXRlcikge1xuICAgICAgJFByb21pc2UuYWxsKGl0ZXIpWydjYXRjaCddKGVtcHR5KTtcbiAgICB9KSksIFBST01JU0UsIHtcbiAgICAgIC8vIDI1LjQuNC4xIFByb21pc2UuYWxsKGl0ZXJhYmxlKVxuICAgICAgYWxsOiBmdW5jdGlvbiBhbGwoaXRlcmFibGUpIHtcbiAgICAgICAgdmFyIEMgPSB0aGlzO1xuICAgICAgICB2YXIgY2FwYWJpbGl0eSA9IG5ld1Byb21pc2VDYXBhYmlsaXR5KEMpO1xuICAgICAgICB2YXIgcmVzb2x2ZSA9IGNhcGFiaWxpdHkucmVzb2x2ZTtcbiAgICAgICAgdmFyIHJlamVjdCA9IGNhcGFiaWxpdHkucmVqZWN0O1xuICAgICAgICB2YXIgcmVzdWx0ID0gcGVyZm9ybShmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgdmFyIHZhbHVlcyA9IFtdO1xuICAgICAgICAgIHZhciBpbmRleCA9IDA7XG4gICAgICAgICAgdmFyIHJlbWFpbmluZyA9IDE7XG4gICAgICAgICAgZm9yT2YoaXRlcmFibGUsIGZhbHNlLCBmdW5jdGlvbiAocHJvbWlzZSkge1xuICAgICAgICAgICAgdmFyICRpbmRleCA9IGluZGV4Kys7XG4gICAgICAgICAgICB2YXIgYWxyZWFkeUNhbGxlZCA9IGZhbHNlO1xuICAgICAgICAgICAgdmFsdWVzLnB1c2godW5kZWZpbmVkKTtcbiAgICAgICAgICAgIHJlbWFpbmluZysrO1xuICAgICAgICAgICAgQy5yZXNvbHZlKHByb21pc2UpLnRoZW4oZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgICAgICAgIGlmIChhbHJlYWR5Q2FsbGVkKSByZXR1cm47XG4gICAgICAgICAgICAgIGFscmVhZHlDYWxsZWQgPSB0cnVlO1xuICAgICAgICAgICAgICB2YWx1ZXNbJGluZGV4XSA9IHZhbHVlO1xuICAgICAgICAgICAgICAtLXJlbWFpbmluZyB8fCByZXNvbHZlKHZhbHVlcyk7XG4gICAgICAgICAgICB9LCByZWplY3QpO1xuICAgICAgICAgIH0pO1xuICAgICAgICAgIC0tcmVtYWluaW5nIHx8IHJlc29sdmUodmFsdWVzKTtcbiAgICAgICAgfSk7XG4gICAgICAgIGlmIChyZXN1bHQuZSkgcmVqZWN0KHJlc3VsdC52KTtcbiAgICAgICAgcmV0dXJuIGNhcGFiaWxpdHkucHJvbWlzZTtcbiAgICAgIH0sXG4gICAgICAvLyAyNS40LjQuNCBQcm9taXNlLnJhY2UoaXRlcmFibGUpXG4gICAgICByYWNlOiBmdW5jdGlvbiByYWNlKGl0ZXJhYmxlKSB7XG4gICAgICAgIHZhciBDID0gdGhpcztcbiAgICAgICAgdmFyIGNhcGFiaWxpdHkgPSBuZXdQcm9taXNlQ2FwYWJpbGl0eShDKTtcbiAgICAgICAgdmFyIHJlamVjdCA9IGNhcGFiaWxpdHkucmVqZWN0O1xuICAgICAgICB2YXIgcmVzdWx0ID0gcGVyZm9ybShmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgZm9yT2YoaXRlcmFibGUsIGZhbHNlLCBmdW5jdGlvbiAocHJvbWlzZSkge1xuICAgICAgICAgICAgQy5yZXNvbHZlKHByb21pc2UpLnRoZW4oY2FwYWJpbGl0eS5yZXNvbHZlLCByZWplY3QpO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICAgICAgaWYgKHJlc3VsdC5lKSByZWplY3QocmVzdWx0LnYpO1xuICAgICAgICByZXR1cm4gY2FwYWJpbGl0eS5wcm9taXNlO1xuICAgICAgfVxuICAgIH0pO1xuICB9LCB7XG4gICAgXCIxMDBcIjogMTAwLFxuICAgIFwiMTAxXCI6IDEwMSxcbiAgICBcIjEwNFwiOiAxMDQsXG4gICAgXCIxMTNcIjogMTEzLFxuICAgIFwiMTI4XCI6IDEyOCxcbiAgICBcIjE3XCI6IDE3LFxuICAgIFwiMjNcIjogMjMsXG4gICAgXCIyNVwiOiAyNSxcbiAgICBcIjNcIjogMyxcbiAgICBcIjMzXCI6IDMzLFxuICAgIFwiMzlcIjogMzksXG4gICAgXCI0MFwiOiA0MCxcbiAgICBcIjUxXCI6IDUxLFxuICAgIFwiNTZcIjogNTYsXG4gICAgXCI2XCI6IDYsXG4gICAgXCI2MFwiOiA2MCxcbiAgICBcIjY4XCI6IDY4LFxuICAgIFwiNjlcIjogNjksXG4gICAgXCI5MFwiOiA5MCxcbiAgICBcIjkxXCI6IDkxLFxuICAgIFwiOTNcIjogOTNcbiAgfV0sXG4gIDIxMDogW2Z1bmN0aW9uIChfZGVyZXFfLCBtb2R1bGUsIGV4cG9ydHMpIHtcbiAgICAvLyAyNi4xLjEgUmVmbGVjdC5hcHBseSh0YXJnZXQsIHRoaXNBcmd1bWVudCwgYXJndW1lbnRzTGlzdClcbiAgICB2YXIgJGV4cG9ydCA9IF9kZXJlcV8oMzMpO1xuXG4gICAgdmFyIGFGdW5jdGlvbiA9IF9kZXJlcV8oMyk7XG5cbiAgICB2YXIgYW5PYmplY3QgPSBfZGVyZXFfKDcpO1xuXG4gICAgdmFyIHJBcHBseSA9IChfZGVyZXFfKDQwKS5SZWZsZWN0IHx8IHt9KS5hcHBseTtcbiAgICB2YXIgZkFwcGx5ID0gRnVuY3Rpb24uYXBwbHk7IC8vIE1TIEVkZ2UgYXJndW1lbnRzTGlzdCBhcmd1bWVudCBpcyBvcHRpb25hbFxuXG4gICAgJGV4cG9ydCgkZXhwb3J0LlMgKyAkZXhwb3J0LkYgKiAhX2RlcmVxXygzNSkoZnVuY3Rpb24gKCkge1xuICAgICAgckFwcGx5KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgLyogZW1wdHkgKi9cbiAgICAgIH0pO1xuICAgIH0pLCAnUmVmbGVjdCcsIHtcbiAgICAgIGFwcGx5OiBmdW5jdGlvbiBhcHBseSh0YXJnZXQsIHRoaXNBcmd1bWVudCwgYXJndW1lbnRzTGlzdCkge1xuICAgICAgICB2YXIgVCA9IGFGdW5jdGlvbih0YXJnZXQpO1xuICAgICAgICB2YXIgTCA9IGFuT2JqZWN0KGFyZ3VtZW50c0xpc3QpO1xuICAgICAgICByZXR1cm4gckFwcGx5ID8gckFwcGx5KFQsIHRoaXNBcmd1bWVudCwgTCkgOiBmQXBwbHkuY2FsbChULCB0aGlzQXJndW1lbnQsIEwpO1xuICAgICAgfVxuICAgIH0pO1xuICB9LCB7XG4gICAgXCIzXCI6IDMsXG4gICAgXCIzM1wiOiAzMyxcbiAgICBcIjM1XCI6IDM1LFxuICAgIFwiNDBcIjogNDAsXG4gICAgXCI3XCI6IDdcbiAgfV0sXG4gIDIxMTogW2Z1bmN0aW9uIChfZGVyZXFfLCBtb2R1bGUsIGV4cG9ydHMpIHtcbiAgICAvLyAyNi4xLjIgUmVmbGVjdC5jb25zdHJ1Y3QodGFyZ2V0LCBhcmd1bWVudHNMaXN0IFssIG5ld1RhcmdldF0pXG4gICAgdmFyICRleHBvcnQgPSBfZGVyZXFfKDMzKTtcblxuICAgIHZhciBjcmVhdGUgPSBfZGVyZXFfKDcxKTtcblxuICAgIHZhciBhRnVuY3Rpb24gPSBfZGVyZXFfKDMpO1xuXG4gICAgdmFyIGFuT2JqZWN0ID0gX2RlcmVxXyg3KTtcblxuICAgIHZhciBpc09iamVjdCA9IF9kZXJlcV8oNTEpO1xuXG4gICAgdmFyIGZhaWxzID0gX2RlcmVxXygzNSk7XG5cbiAgICB2YXIgYmluZCA9IF9kZXJlcV8oMTYpO1xuXG4gICAgdmFyIHJDb25zdHJ1Y3QgPSAoX2RlcmVxXyg0MCkuUmVmbGVjdCB8fCB7fSkuY29uc3RydWN0OyAvLyBNUyBFZGdlIHN1cHBvcnRzIG9ubHkgMiBhcmd1bWVudHMgYW5kIGFyZ3VtZW50c0xpc3QgYXJndW1lbnQgaXMgb3B0aW9uYWxcbiAgICAvLyBGRiBOaWdodGx5IHNldHMgdGhpcmQgYXJndW1lbnQgYXMgYG5ldy50YXJnZXRgLCBidXQgZG9lcyBub3QgY3JlYXRlIGB0aGlzYCBmcm9tIGl0XG5cbiAgICB2YXIgTkVXX1RBUkdFVF9CVUcgPSBmYWlscyhmdW5jdGlvbiAoKSB7XG4gICAgICBmdW5jdGlvbiBGKCkge1xuICAgICAgICAvKiBlbXB0eSAqL1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gIShyQ29uc3RydWN0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgLyogZW1wdHkgKi9cbiAgICAgIH0sIFtdLCBGKSBpbnN0YW5jZW9mIEYpO1xuICAgIH0pO1xuICAgIHZhciBBUkdTX0JVRyA9ICFmYWlscyhmdW5jdGlvbiAoKSB7XG4gICAgICByQ29uc3RydWN0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgLyogZW1wdHkgKi9cbiAgICAgIH0pO1xuICAgIH0pO1xuICAgICRleHBvcnQoJGV4cG9ydC5TICsgJGV4cG9ydC5GICogKE5FV19UQVJHRVRfQlVHIHx8IEFSR1NfQlVHKSwgJ1JlZmxlY3QnLCB7XG4gICAgICBjb25zdHJ1Y3Q6IGZ1bmN0aW9uIGNvbnN0cnVjdChUYXJnZXQsIGFyZ3NcbiAgICAgIC8qICwgbmV3VGFyZ2V0ICovXG4gICAgICApIHtcbiAgICAgICAgYUZ1bmN0aW9uKFRhcmdldCk7XG4gICAgICAgIGFuT2JqZWN0KGFyZ3MpO1xuICAgICAgICB2YXIgbmV3VGFyZ2V0ID0gYXJndW1lbnRzLmxlbmd0aCA8IDMgPyBUYXJnZXQgOiBhRnVuY3Rpb24oYXJndW1lbnRzWzJdKTtcbiAgICAgICAgaWYgKEFSR1NfQlVHICYmICFORVdfVEFSR0VUX0JVRykgcmV0dXJuIHJDb25zdHJ1Y3QoVGFyZ2V0LCBhcmdzLCBuZXdUYXJnZXQpO1xuXG4gICAgICAgIGlmIChUYXJnZXQgPT0gbmV3VGFyZ2V0KSB7XG4gICAgICAgICAgLy8gdy9vIGFsdGVyZWQgbmV3VGFyZ2V0LCBvcHRpbWl6YXRpb24gZm9yIDAtNCBhcmd1bWVudHNcbiAgICAgICAgICBzd2l0Y2ggKGFyZ3MubGVuZ3RoKSB7XG4gICAgICAgICAgICBjYXNlIDA6XG4gICAgICAgICAgICAgIHJldHVybiBuZXcgVGFyZ2V0KCk7XG5cbiAgICAgICAgICAgIGNhc2UgMTpcbiAgICAgICAgICAgICAgcmV0dXJuIG5ldyBUYXJnZXQoYXJnc1swXSk7XG5cbiAgICAgICAgICAgIGNhc2UgMjpcbiAgICAgICAgICAgICAgcmV0dXJuIG5ldyBUYXJnZXQoYXJnc1swXSwgYXJnc1sxXSk7XG5cbiAgICAgICAgICAgIGNhc2UgMzpcbiAgICAgICAgICAgICAgcmV0dXJuIG5ldyBUYXJnZXQoYXJnc1swXSwgYXJnc1sxXSwgYXJnc1syXSk7XG5cbiAgICAgICAgICAgIGNhc2UgNDpcbiAgICAgICAgICAgICAgcmV0dXJuIG5ldyBUYXJnZXQoYXJnc1swXSwgYXJnc1sxXSwgYXJnc1syXSwgYXJnc1szXSk7XG4gICAgICAgICAgfSAvLyB3L28gYWx0ZXJlZCBuZXdUYXJnZXQsIGxvdCBvZiBhcmd1bWVudHMgY2FzZVxuXG5cbiAgICAgICAgICB2YXIgJGFyZ3MgPSBbbnVsbF07XG4gICAgICAgICAgJGFyZ3MucHVzaC5hcHBseSgkYXJncywgYXJncyk7XG4gICAgICAgICAgcmV0dXJuIG5ldyAoYmluZC5hcHBseShUYXJnZXQsICRhcmdzKSkoKTtcbiAgICAgICAgfSAvLyB3aXRoIGFsdGVyZWQgbmV3VGFyZ2V0LCBub3Qgc3VwcG9ydCBidWlsdC1pbiBjb25zdHJ1Y3RvcnNcblxuXG4gICAgICAgIHZhciBwcm90byA9IG5ld1RhcmdldC5wcm90b3R5cGU7XG4gICAgICAgIHZhciBpbnN0YW5jZSA9IGNyZWF0ZShpc09iamVjdChwcm90bykgPyBwcm90byA6IE9iamVjdC5wcm90b3R5cGUpO1xuICAgICAgICB2YXIgcmVzdWx0ID0gRnVuY3Rpb24uYXBwbHkuY2FsbChUYXJnZXQsIGluc3RhbmNlLCBhcmdzKTtcbiAgICAgICAgcmV0dXJuIGlzT2JqZWN0KHJlc3VsdCkgPyByZXN1bHQgOiBpbnN0YW5jZTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfSwge1xuICAgIFwiMTZcIjogMTYsXG4gICAgXCIzXCI6IDMsXG4gICAgXCIzM1wiOiAzMyxcbiAgICBcIjM1XCI6IDM1LFxuICAgIFwiNDBcIjogNDAsXG4gICAgXCI1MVwiOiA1MSxcbiAgICBcIjdcIjogNyxcbiAgICBcIjcxXCI6IDcxXG4gIH1dLFxuICAyMTI6IFtmdW5jdGlvbiAoX2RlcmVxXywgbW9kdWxlLCBleHBvcnRzKSB7XG4gICAgLy8gMjYuMS4zIFJlZmxlY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBwcm9wZXJ0eUtleSwgYXR0cmlidXRlcylcbiAgICB2YXIgZFAgPSBfZGVyZXFfKDcyKTtcblxuICAgIHZhciAkZXhwb3J0ID0gX2RlcmVxXygzMyk7XG5cbiAgICB2YXIgYW5PYmplY3QgPSBfZGVyZXFfKDcpO1xuXG4gICAgdmFyIHRvUHJpbWl0aXZlID0gX2RlcmVxXygxMjApOyAvLyBNUyBFZGdlIGhhcyBicm9rZW4gUmVmbGVjdC5kZWZpbmVQcm9wZXJ0eSAtIHRocm93aW5nIGluc3RlYWQgb2YgcmV0dXJuaW5nIGZhbHNlXG5cblxuICAgICRleHBvcnQoJGV4cG9ydC5TICsgJGV4cG9ydC5GICogX2RlcmVxXygzNSkoZnVuY3Rpb24gKCkge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVmXG4gICAgICBSZWZsZWN0LmRlZmluZVByb3BlcnR5KGRQLmYoe30sIDEsIHtcbiAgICAgICAgdmFsdWU6IDFcbiAgICAgIH0pLCAxLCB7XG4gICAgICAgIHZhbHVlOiAyXG4gICAgICB9KTtcbiAgICB9KSwgJ1JlZmxlY3QnLCB7XG4gICAgICBkZWZpbmVQcm9wZXJ0eTogZnVuY3Rpb24gZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBwcm9wZXJ0eUtleSwgYXR0cmlidXRlcykge1xuICAgICAgICBhbk9iamVjdCh0YXJnZXQpO1xuICAgICAgICBwcm9wZXJ0eUtleSA9IHRvUHJpbWl0aXZlKHByb3BlcnR5S2V5LCB0cnVlKTtcbiAgICAgICAgYW5PYmplY3QoYXR0cmlidXRlcyk7XG5cbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICBkUC5mKHRhcmdldCwgcHJvcGVydHlLZXksIGF0dHJpYnV0ZXMpO1xuICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSk7XG4gIH0sIHtcbiAgICBcIjEyMFwiOiAxMjAsXG4gICAgXCIzM1wiOiAzMyxcbiAgICBcIjM1XCI6IDM1LFxuICAgIFwiN1wiOiA3LFxuICAgIFwiNzJcIjogNzJcbiAgfV0sXG4gIDIxMzogW2Z1bmN0aW9uIChfZGVyZXFfLCBtb2R1bGUsIGV4cG9ydHMpIHtcbiAgICAvLyAyNi4xLjQgUmVmbGVjdC5kZWxldGVQcm9wZXJ0eSh0YXJnZXQsIHByb3BlcnR5S2V5KVxuICAgIHZhciAkZXhwb3J0ID0gX2RlcmVxXygzMyk7XG5cbiAgICB2YXIgZ09QRCA9IF9kZXJlcV8oNzUpLmY7XG5cbiAgICB2YXIgYW5PYmplY3QgPSBfZGVyZXFfKDcpO1xuXG4gICAgJGV4cG9ydCgkZXhwb3J0LlMsICdSZWZsZWN0Jywge1xuICAgICAgZGVsZXRlUHJvcGVydHk6IGZ1bmN0aW9uIGRlbGV0ZVByb3BlcnR5KHRhcmdldCwgcHJvcGVydHlLZXkpIHtcbiAgICAgICAgdmFyIGRlc2MgPSBnT1BEKGFuT2JqZWN0KHRhcmdldCksIHByb3BlcnR5S2V5KTtcbiAgICAgICAgcmV0dXJuIGRlc2MgJiYgIWRlc2MuY29uZmlndXJhYmxlID8gZmFsc2UgOiBkZWxldGUgdGFyZ2V0W3Byb3BlcnR5S2V5XTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfSwge1xuICAgIFwiMzNcIjogMzMsXG4gICAgXCI3XCI6IDcsXG4gICAgXCI3NVwiOiA3NVxuICB9XSxcbiAgMjE0OiBbZnVuY3Rpb24gKF9kZXJlcV8sIG1vZHVsZSwgZXhwb3J0cykge1xuICAgICd1c2Ugc3RyaWN0JzsgLy8gMjYuMS41IFJlZmxlY3QuZW51bWVyYXRlKHRhcmdldClcblxuICAgIHZhciAkZXhwb3J0ID0gX2RlcmVxXygzMyk7XG5cbiAgICB2YXIgYW5PYmplY3QgPSBfZGVyZXFfKDcpO1xuXG4gICAgdmFyIEVudW1lcmF0ZSA9IGZ1bmN0aW9uIEVudW1lcmF0ZShpdGVyYXRlZCkge1xuICAgICAgdGhpcy5fdCA9IGFuT2JqZWN0KGl0ZXJhdGVkKTsgLy8gdGFyZ2V0XG5cbiAgICAgIHRoaXMuX2kgPSAwOyAvLyBuZXh0IGluZGV4XG5cbiAgICAgIHZhciBrZXlzID0gdGhpcy5fayA9IFtdOyAvLyBrZXlzXG5cbiAgICAgIHZhciBrZXk7XG5cbiAgICAgIGZvciAoa2V5IGluIGl0ZXJhdGVkKSB7XG4gICAgICAgIGtleXMucHVzaChrZXkpO1xuICAgICAgfVxuICAgIH07XG5cbiAgICBfZGVyZXFfKDU0KShFbnVtZXJhdGUsICdPYmplY3QnLCBmdW5jdGlvbiAoKSB7XG4gICAgICB2YXIgdGhhdCA9IHRoaXM7XG4gICAgICB2YXIga2V5cyA9IHRoYXQuX2s7XG4gICAgICB2YXIga2V5O1xuXG4gICAgICBkbyB7XG4gICAgICAgIGlmICh0aGF0Ll9pID49IGtleXMubGVuZ3RoKSByZXR1cm4ge1xuICAgICAgICAgIHZhbHVlOiB1bmRlZmluZWQsXG4gICAgICAgICAgZG9uZTogdHJ1ZVxuICAgICAgICB9O1xuICAgICAgfSB3aGlsZSAoISgoa2V5ID0ga2V5c1t0aGF0Ll9pKytdKSBpbiB0aGF0Ll90KSk7XG5cbiAgICAgIHJldHVybiB7XG4gICAgICAgIHZhbHVlOiBrZXksXG4gICAgICAgIGRvbmU6IGZhbHNlXG4gICAgICB9O1xuICAgIH0pO1xuXG4gICAgJGV4cG9ydCgkZXhwb3J0LlMsICdSZWZsZWN0Jywge1xuICAgICAgZW51bWVyYXRlOiBmdW5jdGlvbiBlbnVtZXJhdGUodGFyZ2V0KSB7XG4gICAgICAgIHJldHVybiBuZXcgRW51bWVyYXRlKHRhcmdldCk7XG4gICAgICB9XG4gICAgfSk7XG4gIH0sIHtcbiAgICBcIjMzXCI6IDMzLFxuICAgIFwiNTRcIjogNTQsXG4gICAgXCI3XCI6IDdcbiAgfV0sXG4gIDIxNTogW2Z1bmN0aW9uIChfZGVyZXFfLCBtb2R1bGUsIGV4cG9ydHMpIHtcbiAgICAvLyAyNi4xLjcgUmVmbGVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IodGFyZ2V0LCBwcm9wZXJ0eUtleSlcbiAgICB2YXIgZ09QRCA9IF9kZXJlcV8oNzUpO1xuXG4gICAgdmFyICRleHBvcnQgPSBfZGVyZXFfKDMzKTtcblxuICAgIHZhciBhbk9iamVjdCA9IF9kZXJlcV8oNyk7XG5cbiAgICAkZXhwb3J0KCRleHBvcnQuUywgJ1JlZmxlY3QnLCB7XG4gICAgICBnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3I6IGZ1bmN0aW9uIGdldE93blByb3BlcnR5RGVzY3JpcHRvcih0YXJnZXQsIHByb3BlcnR5S2V5KSB7XG4gICAgICAgIHJldHVybiBnT1BELmYoYW5PYmplY3QodGFyZ2V0KSwgcHJvcGVydHlLZXkpO1xuICAgICAgfVxuICAgIH0pO1xuICB9LCB7XG4gICAgXCIzM1wiOiAzMyxcbiAgICBcIjdcIjogNyxcbiAgICBcIjc1XCI6IDc1XG4gIH1dLFxuICAyMTY6IFtmdW5jdGlvbiAoX2RlcmVxXywgbW9kdWxlLCBleHBvcnRzKSB7XG4gICAgLy8gMjYuMS44IFJlZmxlY3QuZ2V0UHJvdG90eXBlT2YodGFyZ2V0KVxuICAgIHZhciAkZXhwb3J0ID0gX2RlcmVxXygzMyk7XG5cbiAgICB2YXIgZ2V0UHJvdG8gPSBfZGVyZXFfKDc5KTtcblxuICAgIHZhciBhbk9iamVjdCA9IF9kZXJlcV8oNyk7XG5cbiAgICAkZXhwb3J0KCRleHBvcnQuUywgJ1JlZmxlY3QnLCB7XG4gICAgICBnZXRQcm90b3R5cGVPZjogZnVuY3Rpb24gZ2V0UHJvdG90eXBlT2YodGFyZ2V0KSB7XG4gICAgICAgIHJldHVybiBnZXRQcm90byhhbk9iamVjdCh0YXJnZXQpKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfSwge1xuICAgIFwiMzNcIjogMzMsXG4gICAgXCI3XCI6IDcsXG4gICAgXCI3OVwiOiA3OVxuICB9XSxcbiAgMjE3OiBbZnVuY3Rpb24gKF9kZXJlcV8sIG1vZHVsZSwgZXhwb3J0cykge1xuICAgIC8vIDI2LjEuNiBSZWZsZWN0LmdldCh0YXJnZXQsIHByb3BlcnR5S2V5IFssIHJlY2VpdmVyXSlcbiAgICB2YXIgZ09QRCA9IF9kZXJlcV8oNzUpO1xuXG4gICAgdmFyIGdldFByb3RvdHlwZU9mID0gX2RlcmVxXyg3OSk7XG5cbiAgICB2YXIgaGFzID0gX2RlcmVxXyg0MSk7XG5cbiAgICB2YXIgJGV4cG9ydCA9IF9kZXJlcV8oMzMpO1xuXG4gICAgdmFyIGlzT2JqZWN0ID0gX2RlcmVxXyg1MSk7XG5cbiAgICB2YXIgYW5PYmplY3QgPSBfZGVyZXFfKDcpO1xuXG4gICAgZnVuY3Rpb24gZ2V0KHRhcmdldCwgcHJvcGVydHlLZXlcbiAgICAvKiAsIHJlY2VpdmVyICovXG4gICAgKSB7XG4gICAgICB2YXIgcmVjZWl2ZXIgPSBhcmd1bWVudHMubGVuZ3RoIDwgMyA/IHRhcmdldCA6IGFyZ3VtZW50c1syXTtcbiAgICAgIHZhciBkZXNjLCBwcm90bztcbiAgICAgIGlmIChhbk9iamVjdCh0YXJnZXQpID09PSByZWNlaXZlcikgcmV0dXJuIHRhcmdldFtwcm9wZXJ0eUtleV07XG4gICAgICBpZiAoZGVzYyA9IGdPUEQuZih0YXJnZXQsIHByb3BlcnR5S2V5KSkgcmV0dXJuIGhhcyhkZXNjLCAndmFsdWUnKSA/IGRlc2MudmFsdWUgOiBkZXNjLmdldCAhPT0gdW5kZWZpbmVkID8gZGVzYy5nZXQuY2FsbChyZWNlaXZlcikgOiB1bmRlZmluZWQ7XG4gICAgICBpZiAoaXNPYmplY3QocHJvdG8gPSBnZXRQcm90b3R5cGVPZih0YXJnZXQpKSkgcmV0dXJuIGdldChwcm90bywgcHJvcGVydHlLZXksIHJlY2VpdmVyKTtcbiAgICB9XG5cbiAgICAkZXhwb3J0KCRleHBvcnQuUywgJ1JlZmxlY3QnLCB7XG4gICAgICBnZXQ6IGdldFxuICAgIH0pO1xuICB9LCB7XG4gICAgXCIzM1wiOiAzMyxcbiAgICBcIjQxXCI6IDQxLFxuICAgIFwiNTFcIjogNTEsXG4gICAgXCI3XCI6IDcsXG4gICAgXCI3NVwiOiA3NSxcbiAgICBcIjc5XCI6IDc5XG4gIH1dLFxuICAyMTg6IFtmdW5jdGlvbiAoX2RlcmVxXywgbW9kdWxlLCBleHBvcnRzKSB7XG4gICAgLy8gMjYuMS45IFJlZmxlY3QuaGFzKHRhcmdldCwgcHJvcGVydHlLZXkpXG4gICAgdmFyICRleHBvcnQgPSBfZGVyZXFfKDMzKTtcblxuICAgICRleHBvcnQoJGV4cG9ydC5TLCAnUmVmbGVjdCcsIHtcbiAgICAgIGhhczogZnVuY3Rpb24gaGFzKHRhcmdldCwgcHJvcGVydHlLZXkpIHtcbiAgICAgICAgcmV0dXJuIHByb3BlcnR5S2V5IGluIHRhcmdldDtcbiAgICAgIH1cbiAgICB9KTtcbiAgfSwge1xuICAgIFwiMzNcIjogMzNcbiAgfV0sXG4gIDIxOTogW2Z1bmN0aW9uIChfZGVyZXFfLCBtb2R1bGUsIGV4cG9ydHMpIHtcbiAgICAvLyAyNi4xLjEwIFJlZmxlY3QuaXNFeHRlbnNpYmxlKHRhcmdldClcbiAgICB2YXIgJGV4cG9ydCA9IF9kZXJlcV8oMzMpO1xuXG4gICAgdmFyIGFuT2JqZWN0ID0gX2RlcmVxXyg3KTtcblxuICAgIHZhciAkaXNFeHRlbnNpYmxlID0gT2JqZWN0LmlzRXh0ZW5zaWJsZTtcbiAgICAkZXhwb3J0KCRleHBvcnQuUywgJ1JlZmxlY3QnLCB7XG4gICAgICBpc0V4dGVuc2libGU6IGZ1bmN0aW9uIGlzRXh0ZW5zaWJsZSh0YXJnZXQpIHtcbiAgICAgICAgYW5PYmplY3QodGFyZ2V0KTtcbiAgICAgICAgcmV0dXJuICRpc0V4dGVuc2libGUgPyAkaXNFeHRlbnNpYmxlKHRhcmdldCkgOiB0cnVlO1xuICAgICAgfVxuICAgIH0pO1xuICB9LCB7XG4gICAgXCIzM1wiOiAzMyxcbiAgICBcIjdcIjogN1xuICB9XSxcbiAgMjIwOiBbZnVuY3Rpb24gKF9kZXJlcV8sIG1vZHVsZSwgZXhwb3J0cykge1xuICAgIC8vIDI2LjEuMTEgUmVmbGVjdC5vd25LZXlzKHRhcmdldClcbiAgICB2YXIgJGV4cG9ydCA9IF9kZXJlcV8oMzMpO1xuXG4gICAgJGV4cG9ydCgkZXhwb3J0LlMsICdSZWZsZWN0Jywge1xuICAgICAgb3duS2V5czogX2RlcmVxXyg4NSlcbiAgICB9KTtcbiAgfSwge1xuICAgIFwiMzNcIjogMzMsXG4gICAgXCI4NVwiOiA4NVxuICB9XSxcbiAgMjIxOiBbZnVuY3Rpb24gKF9kZXJlcV8sIG1vZHVsZSwgZXhwb3J0cykge1xuICAgIC8vIDI2LjEuMTIgUmVmbGVjdC5wcmV2ZW50RXh0ZW5zaW9ucyh0YXJnZXQpXG4gICAgdmFyICRleHBvcnQgPSBfZGVyZXFfKDMzKTtcblxuICAgIHZhciBhbk9iamVjdCA9IF9kZXJlcV8oNyk7XG5cbiAgICB2YXIgJHByZXZlbnRFeHRlbnNpb25zID0gT2JqZWN0LnByZXZlbnRFeHRlbnNpb25zO1xuICAgICRleHBvcnQoJGV4cG9ydC5TLCAnUmVmbGVjdCcsIHtcbiAgICAgIHByZXZlbnRFeHRlbnNpb25zOiBmdW5jdGlvbiBwcmV2ZW50RXh0ZW5zaW9ucyh0YXJnZXQpIHtcbiAgICAgICAgYW5PYmplY3QodGFyZ2V0KTtcblxuICAgICAgICB0cnkge1xuICAgICAgICAgIGlmICgkcHJldmVudEV4dGVuc2lvbnMpICRwcmV2ZW50RXh0ZW5zaW9ucyh0YXJnZXQpO1xuICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSk7XG4gIH0sIHtcbiAgICBcIjMzXCI6IDMzLFxuICAgIFwiN1wiOiA3XG4gIH1dLFxuICAyMjI6IFtmdW5jdGlvbiAoX2RlcmVxXywgbW9kdWxlLCBleHBvcnRzKSB7XG4gICAgLy8gMjYuMS4xNCBSZWZsZWN0LnNldFByb3RvdHlwZU9mKHRhcmdldCwgcHJvdG8pXG4gICAgdmFyICRleHBvcnQgPSBfZGVyZXFfKDMzKTtcblxuICAgIHZhciBzZXRQcm90byA9IF9kZXJlcV8oOTkpO1xuXG4gICAgaWYgKHNldFByb3RvKSAkZXhwb3J0KCRleHBvcnQuUywgJ1JlZmxlY3QnLCB7XG4gICAgICBzZXRQcm90b3R5cGVPZjogZnVuY3Rpb24gc2V0UHJvdG90eXBlT2YodGFyZ2V0LCBwcm90bykge1xuICAgICAgICBzZXRQcm90by5jaGVjayh0YXJnZXQsIHByb3RvKTtcblxuICAgICAgICB0cnkge1xuICAgICAgICAgIHNldFByb3RvLnNldCh0YXJnZXQsIHByb3RvKTtcbiAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pO1xuICB9LCB7XG4gICAgXCIzM1wiOiAzMyxcbiAgICBcIjk5XCI6IDk5XG4gIH1dLFxuICAyMjM6IFtmdW5jdGlvbiAoX2RlcmVxXywgbW9kdWxlLCBleHBvcnRzKSB7XG4gICAgLy8gMjYuMS4xMyBSZWZsZWN0LnNldCh0YXJnZXQsIHByb3BlcnR5S2V5LCBWIFssIHJlY2VpdmVyXSlcbiAgICB2YXIgZFAgPSBfZGVyZXFfKDcyKTtcblxuICAgIHZhciBnT1BEID0gX2RlcmVxXyg3NSk7XG5cbiAgICB2YXIgZ2V0UHJvdG90eXBlT2YgPSBfZGVyZXFfKDc5KTtcblxuICAgIHZhciBoYXMgPSBfZGVyZXFfKDQxKTtcblxuICAgIHZhciAkZXhwb3J0ID0gX2RlcmVxXygzMyk7XG5cbiAgICB2YXIgY3JlYXRlRGVzYyA9IF9kZXJlcV8oOTIpO1xuXG4gICAgdmFyIGFuT2JqZWN0ID0gX2RlcmVxXyg3KTtcblxuICAgIHZhciBpc09iamVjdCA9IF9kZXJlcV8oNTEpO1xuXG4gICAgZnVuY3Rpb24gc2V0KHRhcmdldCwgcHJvcGVydHlLZXksIFZcbiAgICAvKiAsIHJlY2VpdmVyICovXG4gICAgKSB7XG4gICAgICB2YXIgcmVjZWl2ZXIgPSBhcmd1bWVudHMubGVuZ3RoIDwgNCA/IHRhcmdldCA6IGFyZ3VtZW50c1szXTtcbiAgICAgIHZhciBvd25EZXNjID0gZ09QRC5mKGFuT2JqZWN0KHRhcmdldCksIHByb3BlcnR5S2V5KTtcbiAgICAgIHZhciBleGlzdGluZ0Rlc2NyaXB0b3IsIHByb3RvO1xuXG4gICAgICBpZiAoIW93bkRlc2MpIHtcbiAgICAgICAgaWYgKGlzT2JqZWN0KHByb3RvID0gZ2V0UHJvdG90eXBlT2YodGFyZ2V0KSkpIHtcbiAgICAgICAgICByZXR1cm4gc2V0KHByb3RvLCBwcm9wZXJ0eUtleSwgViwgcmVjZWl2ZXIpO1xuICAgICAgICB9XG5cbiAgICAgICAgb3duRGVzYyA9IGNyZWF0ZURlc2MoMCk7XG4gICAgICB9XG5cbiAgICAgIGlmIChoYXMob3duRGVzYywgJ3ZhbHVlJykpIHtcbiAgICAgICAgaWYgKG93bkRlc2Mud3JpdGFibGUgPT09IGZhbHNlIHx8ICFpc09iamVjdChyZWNlaXZlcikpIHJldHVybiBmYWxzZTtcbiAgICAgICAgZXhpc3RpbmdEZXNjcmlwdG9yID0gZ09QRC5mKHJlY2VpdmVyLCBwcm9wZXJ0eUtleSkgfHwgY3JlYXRlRGVzYygwKTtcbiAgICAgICAgZXhpc3RpbmdEZXNjcmlwdG9yLnZhbHVlID0gVjtcbiAgICAgICAgZFAuZihyZWNlaXZlciwgcHJvcGVydHlLZXksIGV4aXN0aW5nRGVzY3JpcHRvcik7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gb3duRGVzYy5zZXQgPT09IHVuZGVmaW5lZCA/IGZhbHNlIDogKG93bkRlc2Muc2V0LmNhbGwocmVjZWl2ZXIsIFYpLCB0cnVlKTtcbiAgICB9XG5cbiAgICAkZXhwb3J0KCRleHBvcnQuUywgJ1JlZmxlY3QnLCB7XG4gICAgICBzZXQ6IHNldFxuICAgIH0pO1xuICB9LCB7XG4gICAgXCIzM1wiOiAzMyxcbiAgICBcIjQxXCI6IDQxLFxuICAgIFwiNTFcIjogNTEsXG4gICAgXCI3XCI6IDcsXG4gICAgXCI3MlwiOiA3MixcbiAgICBcIjc1XCI6IDc1LFxuICAgIFwiNzlcIjogNzksXG4gICAgXCI5MlwiOiA5MlxuICB9XSxcbiAgMjI0OiBbZnVuY3Rpb24gKF9kZXJlcV8sIG1vZHVsZSwgZXhwb3J0cykge1xuICAgIHZhciBnbG9iYWwgPSBfZGVyZXFfKDQwKTtcblxuICAgIHZhciBpbmhlcml0SWZSZXF1aXJlZCA9IF9kZXJlcV8oNDUpO1xuXG4gICAgdmFyIGRQID0gX2RlcmVxXyg3MikuZjtcblxuICAgIHZhciBnT1BOID0gX2RlcmVxXyg3NykuZjtcblxuICAgIHZhciBpc1JlZ0V4cCA9IF9kZXJlcV8oNTIpO1xuXG4gICAgdmFyICRmbGFncyA9IF9kZXJlcV8oMzcpO1xuXG4gICAgdmFyICRSZWdFeHAgPSBnbG9iYWwuUmVnRXhwO1xuICAgIHZhciBCYXNlID0gJFJlZ0V4cDtcbiAgICB2YXIgcHJvdG8gPSAkUmVnRXhwLnByb3RvdHlwZTtcbiAgICB2YXIgcmUxID0gL2EvZztcbiAgICB2YXIgcmUyID0gL2EvZzsgLy8gXCJuZXdcIiBjcmVhdGVzIGEgbmV3IG9iamVjdCwgb2xkIHdlYmtpdCBidWdneSBoZXJlXG5cbiAgICB2YXIgQ09SUkVDVF9ORVcgPSBuZXcgJFJlZ0V4cChyZTEpICE9PSByZTE7XG5cbiAgICBpZiAoX2RlcmVxXygyOSkgJiYgKCFDT1JSRUNUX05FVyB8fCBfZGVyZXFfKDM1KShmdW5jdGlvbiAoKSB7XG4gICAgICByZTJbX2RlcmVxXygxMjgpKCdtYXRjaCcpXSA9IGZhbHNlOyAvLyBSZWdFeHAgY29uc3RydWN0b3IgY2FuIGFsdGVyIGZsYWdzIGFuZCBJc1JlZ0V4cCB3b3JrcyBjb3JyZWN0IHdpdGggQEBtYXRjaFxuXG4gICAgICByZXR1cm4gJFJlZ0V4cChyZTEpICE9IHJlMSB8fCAkUmVnRXhwKHJlMikgPT0gcmUyIHx8ICRSZWdFeHAocmUxLCAnaScpICE9ICcvYS9pJztcbiAgICB9KSkpIHtcbiAgICAgICRSZWdFeHAgPSBmdW5jdGlvbiBSZWdFeHAocCwgZikge1xuICAgICAgICB2YXIgdGlSRSA9IHRoaXMgaW5zdGFuY2VvZiAkUmVnRXhwO1xuICAgICAgICB2YXIgcGlSRSA9IGlzUmVnRXhwKHApO1xuICAgICAgICB2YXIgZmlVID0gZiA9PT0gdW5kZWZpbmVkO1xuICAgICAgICByZXR1cm4gIXRpUkUgJiYgcGlSRSAmJiBwLmNvbnN0cnVjdG9yID09PSAkUmVnRXhwICYmIGZpVSA/IHAgOiBpbmhlcml0SWZSZXF1aXJlZChDT1JSRUNUX05FVyA/IG5ldyBCYXNlKHBpUkUgJiYgIWZpVSA/IHAuc291cmNlIDogcCwgZikgOiBCYXNlKChwaVJFID0gcCBpbnN0YW5jZW9mICRSZWdFeHApID8gcC5zb3VyY2UgOiBwLCBwaVJFICYmIGZpVSA/ICRmbGFncy5jYWxsKHApIDogZiksIHRpUkUgPyB0aGlzIDogcHJvdG8sICRSZWdFeHApO1xuICAgICAgfTtcblxuICAgICAgdmFyIHByb3h5ID0gZnVuY3Rpb24gcHJveHkoa2V5KSB7XG4gICAgICAgIGtleSBpbiAkUmVnRXhwIHx8IGRQKCRSZWdFeHAsIGtleSwge1xuICAgICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICAgICAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgICAgICAgIHJldHVybiBCYXNlW2tleV07XG4gICAgICAgICAgfSxcbiAgICAgICAgICBzZXQ6IGZ1bmN0aW9uIHNldChpdCkge1xuICAgICAgICAgICAgQmFzZVtrZXldID0gaXQ7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIH07XG5cbiAgICAgIGZvciAodmFyIGtleXMgPSBnT1BOKEJhc2UpLCBpID0gMDsga2V5cy5sZW5ndGggPiBpOykge1xuICAgICAgICBwcm94eShrZXlzW2krK10pO1xuICAgICAgfVxuXG4gICAgICBwcm90by5jb25zdHJ1Y3RvciA9ICRSZWdFeHA7XG4gICAgICAkUmVnRXhwLnByb3RvdHlwZSA9IHByb3RvO1xuXG4gICAgICBfZGVyZXFfKDk0KShnbG9iYWwsICdSZWdFeHAnLCAkUmVnRXhwKTtcbiAgICB9XG5cbiAgICBfZGVyZXFfKDEwMCkoJ1JlZ0V4cCcpO1xuICB9LCB7XG4gICAgXCIxMDBcIjogMTAwLFxuICAgIFwiMTI4XCI6IDEyOCxcbiAgICBcIjI5XCI6IDI5LFxuICAgIFwiMzVcIjogMzUsXG4gICAgXCIzN1wiOiAzNyxcbiAgICBcIjQwXCI6IDQwLFxuICAgIFwiNDVcIjogNDUsXG4gICAgXCI1MlwiOiA1MixcbiAgICBcIjcyXCI6IDcyLFxuICAgIFwiNzdcIjogNzcsXG4gICAgXCI5NFwiOiA5NFxuICB9XSxcbiAgMjI1OiBbZnVuY3Rpb24gKF9kZXJlcV8sIG1vZHVsZSwgZXhwb3J0cykge1xuICAgIC8vIDIxLjIuNS4zIGdldCBSZWdFeHAucHJvdG90eXBlLmZsYWdzKClcbiAgICBpZiAoX2RlcmVxXygyOSkgJiYgLy4vZy5mbGFncyAhPSAnZycpIF9kZXJlcV8oNzIpLmYoUmVnRXhwLnByb3RvdHlwZSwgJ2ZsYWdzJywge1xuICAgICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgICAgZ2V0OiBfZGVyZXFfKDM3KVxuICAgIH0pO1xuICB9LCB7XG4gICAgXCIyOVwiOiAyOSxcbiAgICBcIjM3XCI6IDM3LFxuICAgIFwiNzJcIjogNzJcbiAgfV0sXG4gIDIyNjogW2Z1bmN0aW9uIChfZGVyZXFfLCBtb2R1bGUsIGV4cG9ydHMpIHtcbiAgICAvLyBAQG1hdGNoIGxvZ2ljXG4gICAgX2RlcmVxXygzNikoJ21hdGNoJywgMSwgZnVuY3Rpb24gKGRlZmluZWQsIE1BVENILCAkbWF0Y2gpIHtcbiAgICAgIC8vIDIxLjEuMy4xMSBTdHJpbmcucHJvdG90eXBlLm1hdGNoKHJlZ2V4cClcbiAgICAgIHJldHVybiBbZnVuY3Rpb24gbWF0Y2gocmVnZXhwKSB7XG4gICAgICAgICd1c2Ugc3RyaWN0JztcblxuICAgICAgICB2YXIgTyA9IGRlZmluZWQodGhpcyk7XG4gICAgICAgIHZhciBmbiA9IHJlZ2V4cCA9PSB1bmRlZmluZWQgPyB1bmRlZmluZWQgOiByZWdleHBbTUFUQ0hdO1xuICAgICAgICByZXR1cm4gZm4gIT09IHVuZGVmaW5lZCA/IGZuLmNhbGwocmVnZXhwLCBPKSA6IG5ldyBSZWdFeHAocmVnZXhwKVtNQVRDSF0oU3RyaW5nKE8pKTtcbiAgICAgIH0sICRtYXRjaF07XG4gICAgfSk7XG4gIH0sIHtcbiAgICBcIjM2XCI6IDM2XG4gIH1dLFxuICAyMjc6IFtmdW5jdGlvbiAoX2RlcmVxXywgbW9kdWxlLCBleHBvcnRzKSB7XG4gICAgLy8gQEByZXBsYWNlIGxvZ2ljXG4gICAgX2RlcmVxXygzNikoJ3JlcGxhY2UnLCAyLCBmdW5jdGlvbiAoZGVmaW5lZCwgUkVQTEFDRSwgJHJlcGxhY2UpIHtcbiAgICAgIC8vIDIxLjEuMy4xNCBTdHJpbmcucHJvdG90eXBlLnJlcGxhY2Uoc2VhcmNoVmFsdWUsIHJlcGxhY2VWYWx1ZSlcbiAgICAgIHJldHVybiBbZnVuY3Rpb24gcmVwbGFjZShzZWFyY2hWYWx1ZSwgcmVwbGFjZVZhbHVlKSB7XG4gICAgICAgICd1c2Ugc3RyaWN0JztcblxuICAgICAgICB2YXIgTyA9IGRlZmluZWQodGhpcyk7XG4gICAgICAgIHZhciBmbiA9IHNlYXJjaFZhbHVlID09IHVuZGVmaW5lZCA/IHVuZGVmaW5lZCA6IHNlYXJjaFZhbHVlW1JFUExBQ0VdO1xuICAgICAgICByZXR1cm4gZm4gIT09IHVuZGVmaW5lZCA/IGZuLmNhbGwoc2VhcmNoVmFsdWUsIE8sIHJlcGxhY2VWYWx1ZSkgOiAkcmVwbGFjZS5jYWxsKFN0cmluZyhPKSwgc2VhcmNoVmFsdWUsIHJlcGxhY2VWYWx1ZSk7XG4gICAgICB9LCAkcmVwbGFjZV07XG4gICAgfSk7XG4gIH0sIHtcbiAgICBcIjM2XCI6IDM2XG4gIH1dLFxuICAyMjg6IFtmdW5jdGlvbiAoX2RlcmVxXywgbW9kdWxlLCBleHBvcnRzKSB7XG4gICAgLy8gQEBzZWFyY2ggbG9naWNcbiAgICBfZGVyZXFfKDM2KSgnc2VhcmNoJywgMSwgZnVuY3Rpb24gKGRlZmluZWQsIFNFQVJDSCwgJHNlYXJjaCkge1xuICAgICAgLy8gMjEuMS4zLjE1IFN0cmluZy5wcm90b3R5cGUuc2VhcmNoKHJlZ2V4cClcbiAgICAgIHJldHVybiBbZnVuY3Rpb24gc2VhcmNoKHJlZ2V4cCkge1xuICAgICAgICAndXNlIHN0cmljdCc7XG5cbiAgICAgICAgdmFyIE8gPSBkZWZpbmVkKHRoaXMpO1xuICAgICAgICB2YXIgZm4gPSByZWdleHAgPT0gdW5kZWZpbmVkID8gdW5kZWZpbmVkIDogcmVnZXhwW1NFQVJDSF07XG4gICAgICAgIHJldHVybiBmbiAhPT0gdW5kZWZpbmVkID8gZm4uY2FsbChyZWdleHAsIE8pIDogbmV3IFJlZ0V4cChyZWdleHApW1NFQVJDSF0oU3RyaW5nKE8pKTtcbiAgICAgIH0sICRzZWFyY2hdO1xuICAgIH0pO1xuICB9LCB7XG4gICAgXCIzNlwiOiAzNlxuICB9XSxcbiAgMjI5OiBbZnVuY3Rpb24gKF9kZXJlcV8sIG1vZHVsZSwgZXhwb3J0cykge1xuICAgIC8vIEBAc3BsaXQgbG9naWNcbiAgICBfZGVyZXFfKDM2KSgnc3BsaXQnLCAyLCBmdW5jdGlvbiAoZGVmaW5lZCwgU1BMSVQsICRzcGxpdCkge1xuICAgICAgJ3VzZSBzdHJpY3QnO1xuXG4gICAgICB2YXIgaXNSZWdFeHAgPSBfZGVyZXFfKDUyKTtcblxuICAgICAgdmFyIF9zcGxpdCA9ICRzcGxpdDtcbiAgICAgIHZhciAkcHVzaCA9IFtdLnB1c2g7XG4gICAgICB2YXIgJFNQTElUID0gJ3NwbGl0JztcbiAgICAgIHZhciBMRU5HVEggPSAnbGVuZ3RoJztcbiAgICAgIHZhciBMQVNUX0lOREVYID0gJ2xhc3RJbmRleCc7XG5cbiAgICAgIGlmICgnYWJiYydbJFNQTElUXSgvKGIpKi8pWzFdID09ICdjJyB8fCAndGVzdCdbJFNQTElUXSgvKD86KS8sIC0xKVtMRU5HVEhdICE9IDQgfHwgJ2FiJ1skU1BMSVRdKC8oPzphYikqLylbTEVOR1RIXSAhPSAyIHx8ICcuJ1skU1BMSVRdKC8oLj8pKC4/KS8pW0xFTkdUSF0gIT0gNCB8fCAnLidbJFNQTElUXSgvKCkoKS8pW0xFTkdUSF0gPiAxIHx8ICcnWyRTUExJVF0oLy4/LylbTEVOR1RIXSkge1xuICAgICAgICB2YXIgTlBDRyA9IC8oKT8/Ly5leGVjKCcnKVsxXSA9PT0gdW5kZWZpbmVkOyAvLyBub25wYXJ0aWNpcGF0aW5nIGNhcHR1cmluZyBncm91cFxuICAgICAgICAvLyBiYXNlZCBvbiBlczUtc2hpbSBpbXBsZW1lbnRhdGlvbiwgbmVlZCB0byByZXdvcmsgaXRcblxuICAgICAgICAkc3BsaXQgPSBmdW5jdGlvbiAkc3BsaXQoc2VwYXJhdG9yLCBsaW1pdCkge1xuICAgICAgICAgIHZhciBzdHJpbmcgPSBTdHJpbmcodGhpcyk7XG4gICAgICAgICAgaWYgKHNlcGFyYXRvciA9PT0gdW5kZWZpbmVkICYmIGxpbWl0ID09PSAwKSByZXR1cm4gW107IC8vIElmIGBzZXBhcmF0b3JgIGlzIG5vdCBhIHJlZ2V4LCB1c2UgbmF0aXZlIHNwbGl0XG5cbiAgICAgICAgICBpZiAoIWlzUmVnRXhwKHNlcGFyYXRvcikpIHJldHVybiBfc3BsaXQuY2FsbChzdHJpbmcsIHNlcGFyYXRvciwgbGltaXQpO1xuICAgICAgICAgIHZhciBvdXRwdXQgPSBbXTtcbiAgICAgICAgICB2YXIgZmxhZ3MgPSAoc2VwYXJhdG9yLmlnbm9yZUNhc2UgPyAnaScgOiAnJykgKyAoc2VwYXJhdG9yLm11bHRpbGluZSA/ICdtJyA6ICcnKSArIChzZXBhcmF0b3IudW5pY29kZSA/ICd1JyA6ICcnKSArIChzZXBhcmF0b3Iuc3RpY2t5ID8gJ3knIDogJycpO1xuICAgICAgICAgIHZhciBsYXN0TGFzdEluZGV4ID0gMDtcbiAgICAgICAgICB2YXIgc3BsaXRMaW1pdCA9IGxpbWl0ID09PSB1bmRlZmluZWQgPyA0Mjk0OTY3Mjk1IDogbGltaXQgPj4+IDA7IC8vIE1ha2UgYGdsb2JhbGAgYW5kIGF2b2lkIGBsYXN0SW5kZXhgIGlzc3VlcyBieSB3b3JraW5nIHdpdGggYSBjb3B5XG5cbiAgICAgICAgICB2YXIgc2VwYXJhdG9yQ29weSA9IG5ldyBSZWdFeHAoc2VwYXJhdG9yLnNvdXJjZSwgZmxhZ3MgKyAnZycpO1xuICAgICAgICAgIHZhciBzZXBhcmF0b3IyLCBtYXRjaCwgbGFzdEluZGV4LCBsYXN0TGVuZ3RoLCBpOyAvLyBEb2Vzbid0IG5lZWQgZmxhZ3MgZ3ksIGJ1dCB0aGV5IGRvbid0IGh1cnRcblxuICAgICAgICAgIGlmICghTlBDRykgc2VwYXJhdG9yMiA9IG5ldyBSZWdFeHAoJ14nICsgc2VwYXJhdG9yQ29weS5zb3VyY2UgKyAnJCg/IVxcXFxzKScsIGZsYWdzKTtcblxuICAgICAgICAgIHdoaWxlIChtYXRjaCA9IHNlcGFyYXRvckNvcHkuZXhlYyhzdHJpbmcpKSB7XG4gICAgICAgICAgICAvLyBgc2VwYXJhdG9yQ29weS5sYXN0SW5kZXhgIGlzIG5vdCByZWxpYWJsZSBjcm9zcy1icm93c2VyXG4gICAgICAgICAgICBsYXN0SW5kZXggPSBtYXRjaC5pbmRleCArIG1hdGNoWzBdW0xFTkdUSF07XG5cbiAgICAgICAgICAgIGlmIChsYXN0SW5kZXggPiBsYXN0TGFzdEluZGV4KSB7XG4gICAgICAgICAgICAgIG91dHB1dC5wdXNoKHN0cmluZy5zbGljZShsYXN0TGFzdEluZGV4LCBtYXRjaC5pbmRleCkpOyAvLyBGaXggYnJvd3NlcnMgd2hvc2UgYGV4ZWNgIG1ldGhvZHMgZG9uJ3QgY29uc2lzdGVudGx5IHJldHVybiBgdW5kZWZpbmVkYCBmb3IgTlBDR1xuICAgICAgICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tbG9vcC1mdW5jXG5cbiAgICAgICAgICAgICAgaWYgKCFOUENHICYmIG1hdGNoW0xFTkdUSF0gPiAxKSBtYXRjaFswXS5yZXBsYWNlKHNlcGFyYXRvcjIsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICBmb3IgKGkgPSAxOyBpIDwgYXJndW1lbnRzW0xFTkdUSF0gLSAyOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgIGlmIChhcmd1bWVudHNbaV0gPT09IHVuZGVmaW5lZCkgbWF0Y2hbaV0gPSB1bmRlZmluZWQ7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgaWYgKG1hdGNoW0xFTkdUSF0gPiAxICYmIG1hdGNoLmluZGV4IDwgc3RyaW5nW0xFTkdUSF0pICRwdXNoLmFwcGx5KG91dHB1dCwgbWF0Y2guc2xpY2UoMSkpO1xuICAgICAgICAgICAgICBsYXN0TGVuZ3RoID0gbWF0Y2hbMF1bTEVOR1RIXTtcbiAgICAgICAgICAgICAgbGFzdExhc3RJbmRleCA9IGxhc3RJbmRleDtcbiAgICAgICAgICAgICAgaWYgKG91dHB1dFtMRU5HVEhdID49IHNwbGl0TGltaXQpIGJyZWFrO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoc2VwYXJhdG9yQ29weVtMQVNUX0lOREVYXSA9PT0gbWF0Y2guaW5kZXgpIHNlcGFyYXRvckNvcHlbTEFTVF9JTkRFWF0rKzsgLy8gQXZvaWQgYW4gaW5maW5pdGUgbG9vcFxuICAgICAgICAgIH1cblxuICAgICAgICAgIGlmIChsYXN0TGFzdEluZGV4ID09PSBzdHJpbmdbTEVOR1RIXSkge1xuICAgICAgICAgICAgaWYgKGxhc3RMZW5ndGggfHwgIXNlcGFyYXRvckNvcHkudGVzdCgnJykpIG91dHB1dC5wdXNoKCcnKTtcbiAgICAgICAgICB9IGVsc2Ugb3V0cHV0LnB1c2goc3RyaW5nLnNsaWNlKGxhc3RMYXN0SW5kZXgpKTtcblxuICAgICAgICAgIHJldHVybiBvdXRwdXRbTEVOR1RIXSA+IHNwbGl0TGltaXQgPyBvdXRwdXQuc2xpY2UoMCwgc3BsaXRMaW1pdCkgOiBvdXRwdXQ7XG4gICAgICAgIH07IC8vIENoYWtyYSwgVjhcblxuICAgICAgfSBlbHNlIGlmICgnMCdbJFNQTElUXSh1bmRlZmluZWQsIDApW0xFTkdUSF0pIHtcbiAgICAgICAgJHNwbGl0ID0gZnVuY3Rpb24gJHNwbGl0KHNlcGFyYXRvciwgbGltaXQpIHtcbiAgICAgICAgICByZXR1cm4gc2VwYXJhdG9yID09PSB1bmRlZmluZWQgJiYgbGltaXQgPT09IDAgPyBbXSA6IF9zcGxpdC5jYWxsKHRoaXMsIHNlcGFyYXRvciwgbGltaXQpO1xuICAgICAgICB9O1xuICAgICAgfSAvLyAyMS4xLjMuMTcgU3RyaW5nLnByb3RvdHlwZS5zcGxpdChzZXBhcmF0b3IsIGxpbWl0KVxuXG5cbiAgICAgIHJldHVybiBbZnVuY3Rpb24gc3BsaXQoc2VwYXJhdG9yLCBsaW1pdCkge1xuICAgICAgICB2YXIgTyA9IGRlZmluZWQodGhpcyk7XG4gICAgICAgIHZhciBmbiA9IHNlcGFyYXRvciA9PSB1bmRlZmluZWQgPyB1bmRlZmluZWQgOiBzZXBhcmF0b3JbU1BMSVRdO1xuICAgICAgICByZXR1cm4gZm4gIT09IHVuZGVmaW5lZCA/IGZuLmNhbGwoc2VwYXJhdG9yLCBPLCBsaW1pdCkgOiAkc3BsaXQuY2FsbChTdHJpbmcoTyksIHNlcGFyYXRvciwgbGltaXQpO1xuICAgICAgfSwgJHNwbGl0XTtcbiAgICB9KTtcbiAgfSwge1xuICAgIFwiMzZcIjogMzYsXG4gICAgXCI1MlwiOiA1MlxuICB9XSxcbiAgMjMwOiBbZnVuY3Rpb24gKF9kZXJlcV8sIG1vZHVsZSwgZXhwb3J0cykge1xuICAgICd1c2Ugc3RyaWN0JztcblxuICAgIF9kZXJlcV8oMjI1KTtcblxuICAgIHZhciBhbk9iamVjdCA9IF9kZXJlcV8oNyk7XG5cbiAgICB2YXIgJGZsYWdzID0gX2RlcmVxXygzNyk7XG5cbiAgICB2YXIgREVTQ1JJUFRPUlMgPSBfZGVyZXFfKDI5KTtcblxuICAgIHZhciBUT19TVFJJTkcgPSAndG9TdHJpbmcnO1xuICAgIHZhciAkdG9TdHJpbmcgPSAvLi9bVE9fU1RSSU5HXTtcblxuICAgIHZhciBkZWZpbmUgPSBmdW5jdGlvbiBkZWZpbmUoZm4pIHtcbiAgICAgIF9kZXJlcV8oOTQpKFJlZ0V4cC5wcm90b3R5cGUsIFRPX1NUUklORywgZm4sIHRydWUpO1xuICAgIH07IC8vIDIxLjIuNS4xNCBSZWdFeHAucHJvdG90eXBlLnRvU3RyaW5nKClcblxuXG4gICAgaWYgKF9kZXJlcV8oMzUpKGZ1bmN0aW9uICgpIHtcbiAgICAgIHJldHVybiAkdG9TdHJpbmcuY2FsbCh7XG4gICAgICAgIHNvdXJjZTogJ2EnLFxuICAgICAgICBmbGFnczogJ2InXG4gICAgICB9KSAhPSAnL2EvYic7XG4gICAgfSkpIHtcbiAgICAgIGRlZmluZShmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICAgICAgdmFyIFIgPSBhbk9iamVjdCh0aGlzKTtcbiAgICAgICAgcmV0dXJuICcvJy5jb25jYXQoUi5zb3VyY2UsICcvJywgJ2ZsYWdzJyBpbiBSID8gUi5mbGFncyA6ICFERVNDUklQVE9SUyAmJiBSIGluc3RhbmNlb2YgUmVnRXhwID8gJGZsYWdzLmNhbGwoUikgOiB1bmRlZmluZWQpO1xuICAgICAgfSk7IC8vIEZGNDQtIFJlZ0V4cCN0b1N0cmluZyBoYXMgYSB3cm9uZyBuYW1lXG4gICAgfSBlbHNlIGlmICgkdG9TdHJpbmcubmFtZSAhPSBUT19TVFJJTkcpIHtcbiAgICAgIGRlZmluZShmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICAgICAgcmV0dXJuICR0b1N0cmluZy5jYWxsKHRoaXMpO1xuICAgICAgfSk7XG4gICAgfVxuICB9LCB7XG4gICAgXCIyMjVcIjogMjI1LFxuICAgIFwiMjlcIjogMjksXG4gICAgXCIzNVwiOiAzNSxcbiAgICBcIjM3XCI6IDM3LFxuICAgIFwiN1wiOiA3LFxuICAgIFwiOTRcIjogOTRcbiAgfV0sXG4gIDIzMTogW2Z1bmN0aW9uIChfZGVyZXFfLCBtb2R1bGUsIGV4cG9ydHMpIHtcbiAgICAndXNlIHN0cmljdCc7XG5cbiAgICB2YXIgc3Ryb25nID0gX2RlcmVxXygxOSk7XG5cbiAgICB2YXIgdmFsaWRhdGUgPSBfZGVyZXFfKDEyNSk7XG5cbiAgICB2YXIgU0VUID0gJ1NldCc7IC8vIDIzLjIgU2V0IE9iamVjdHNcblxuICAgIG1vZHVsZS5leHBvcnRzID0gX2RlcmVxXygyMikoU0VULCBmdW5jdGlvbiAoZ2V0KSB7XG4gICAgICByZXR1cm4gZnVuY3Rpb24gU2V0KCkge1xuICAgICAgICByZXR1cm4gZ2V0KHRoaXMsIGFyZ3VtZW50cy5sZW5ndGggPiAwID8gYXJndW1lbnRzWzBdIDogdW5kZWZpbmVkKTtcbiAgICAgIH07XG4gICAgfSwge1xuICAgICAgLy8gMjMuMi4zLjEgU2V0LnByb3RvdHlwZS5hZGQodmFsdWUpXG4gICAgICBhZGQ6IGZ1bmN0aW9uIGFkZCh2YWx1ZSkge1xuICAgICAgICByZXR1cm4gc3Ryb25nLmRlZih2YWxpZGF0ZSh0aGlzLCBTRVQpLCB2YWx1ZSA9IHZhbHVlID09PSAwID8gMCA6IHZhbHVlLCB2YWx1ZSk7XG4gICAgICB9XG4gICAgfSwgc3Ryb25nKTtcbiAgfSwge1xuICAgIFwiMTI1XCI6IDEyNSxcbiAgICBcIjE5XCI6IDE5LFxuICAgIFwiMjJcIjogMjJcbiAgfV0sXG4gIDIzMjogW2Z1bmN0aW9uIChfZGVyZXFfLCBtb2R1bGUsIGV4cG9ydHMpIHtcbiAgICAndXNlIHN0cmljdCc7IC8vIEIuMi4zLjIgU3RyaW5nLnByb3RvdHlwZS5hbmNob3IobmFtZSlcblxuICAgIF9kZXJlcV8oMTA4KSgnYW5jaG9yJywgZnVuY3Rpb24gKGNyZWF0ZUhUTUwpIHtcbiAgICAgIHJldHVybiBmdW5jdGlvbiBhbmNob3IobmFtZSkge1xuICAgICAgICByZXR1cm4gY3JlYXRlSFRNTCh0aGlzLCAnYScsICduYW1lJywgbmFtZSk7XG4gICAgICB9O1xuICAgIH0pO1xuICB9LCB7XG4gICAgXCIxMDhcIjogMTA4XG4gIH1dLFxuICAyMzM6IFtmdW5jdGlvbiAoX2RlcmVxXywgbW9kdWxlLCBleHBvcnRzKSB7XG4gICAgJ3VzZSBzdHJpY3QnOyAvLyBCLjIuMy4zIFN0cmluZy5wcm90b3R5cGUuYmlnKClcblxuICAgIF9kZXJlcV8oMTA4KSgnYmlnJywgZnVuY3Rpb24gKGNyZWF0ZUhUTUwpIHtcbiAgICAgIHJldHVybiBmdW5jdGlvbiBiaWcoKSB7XG4gICAgICAgIHJldHVybiBjcmVhdGVIVE1MKHRoaXMsICdiaWcnLCAnJywgJycpO1xuICAgICAgfTtcbiAgICB9KTtcbiAgfSwge1xuICAgIFwiMTA4XCI6IDEwOFxuICB9XSxcbiAgMjM0OiBbZnVuY3Rpb24gKF9kZXJlcV8sIG1vZHVsZSwgZXhwb3J0cykge1xuICAgICd1c2Ugc3RyaWN0JzsgLy8gQi4yLjMuNCBTdHJpbmcucHJvdG90eXBlLmJsaW5rKClcblxuICAgIF9kZXJlcV8oMTA4KSgnYmxpbmsnLCBmdW5jdGlvbiAoY3JlYXRlSFRNTCkge1xuICAgICAgcmV0dXJuIGZ1bmN0aW9uIGJsaW5rKCkge1xuICAgICAgICByZXR1cm4gY3JlYXRlSFRNTCh0aGlzLCAnYmxpbmsnLCAnJywgJycpO1xuICAgICAgfTtcbiAgICB9KTtcbiAgfSwge1xuICAgIFwiMTA4XCI6IDEwOFxuICB9XSxcbiAgMjM1OiBbZnVuY3Rpb24gKF9kZXJlcV8sIG1vZHVsZSwgZXhwb3J0cykge1xuICAgICd1c2Ugc3RyaWN0JzsgLy8gQi4yLjMuNSBTdHJpbmcucHJvdG90eXBlLmJvbGQoKVxuXG4gICAgX2RlcmVxXygxMDgpKCdib2xkJywgZnVuY3Rpb24gKGNyZWF0ZUhUTUwpIHtcbiAgICAgIHJldHVybiBmdW5jdGlvbiBib2xkKCkge1xuICAgICAgICByZXR1cm4gY3JlYXRlSFRNTCh0aGlzLCAnYicsICcnLCAnJyk7XG4gICAgICB9O1xuICAgIH0pO1xuICB9LCB7XG4gICAgXCIxMDhcIjogMTA4XG4gIH1dLFxuICAyMzY6IFtmdW5jdGlvbiAoX2RlcmVxXywgbW9kdWxlLCBleHBvcnRzKSB7XG4gICAgJ3VzZSBzdHJpY3QnO1xuXG4gICAgdmFyICRleHBvcnQgPSBfZGVyZXFfKDMzKTtcblxuICAgIHZhciAkYXQgPSBfZGVyZXFfKDEwNikoZmFsc2UpO1xuXG4gICAgJGV4cG9ydCgkZXhwb3J0LlAsICdTdHJpbmcnLCB7XG4gICAgICAvLyAyMS4xLjMuMyBTdHJpbmcucHJvdG90eXBlLmNvZGVQb2ludEF0KHBvcylcbiAgICAgIGNvZGVQb2ludEF0OiBmdW5jdGlvbiBjb2RlUG9pbnRBdChwb3MpIHtcbiAgICAgICAgcmV0dXJuICRhdCh0aGlzLCBwb3MpO1xuICAgICAgfVxuICAgIH0pO1xuICB9LCB7XG4gICAgXCIxMDZcIjogMTA2LFxuICAgIFwiMzNcIjogMzNcbiAgfV0sXG4gIDIzNzogW2Z1bmN0aW9uIChfZGVyZXFfLCBtb2R1bGUsIGV4cG9ydHMpIHtcbiAgICAvLyAyMS4xLjMuNiBTdHJpbmcucHJvdG90eXBlLmVuZHNXaXRoKHNlYXJjaFN0cmluZyBbLCBlbmRQb3NpdGlvbl0pXG4gICAgJ3VzZSBzdHJpY3QnO1xuXG4gICAgdmFyICRleHBvcnQgPSBfZGVyZXFfKDMzKTtcblxuICAgIHZhciB0b0xlbmd0aCA9IF9kZXJlcV8oMTE4KTtcblxuICAgIHZhciBjb250ZXh0ID0gX2RlcmVxXygxMDcpO1xuXG4gICAgdmFyIEVORFNfV0lUSCA9ICdlbmRzV2l0aCc7XG4gICAgdmFyICRlbmRzV2l0aCA9ICcnW0VORFNfV0lUSF07XG4gICAgJGV4cG9ydCgkZXhwb3J0LlAgKyAkZXhwb3J0LkYgKiBfZGVyZXFfKDM0KShFTkRTX1dJVEgpLCAnU3RyaW5nJywge1xuICAgICAgZW5kc1dpdGg6IGZ1bmN0aW9uIGVuZHNXaXRoKHNlYXJjaFN0cmluZ1xuICAgICAgLyogLCBlbmRQb3NpdGlvbiA9IEBsZW5ndGggKi9cbiAgICAgICkge1xuICAgICAgICB2YXIgdGhhdCA9IGNvbnRleHQodGhpcywgc2VhcmNoU3RyaW5nLCBFTkRTX1dJVEgpO1xuICAgICAgICB2YXIgZW5kUG9zaXRpb24gPSBhcmd1bWVudHMubGVuZ3RoID4gMSA/IGFyZ3VtZW50c1sxXSA6IHVuZGVmaW5lZDtcbiAgICAgICAgdmFyIGxlbiA9IHRvTGVuZ3RoKHRoYXQubGVuZ3RoKTtcbiAgICAgICAgdmFyIGVuZCA9IGVuZFBvc2l0aW9uID09PSB1bmRlZmluZWQgPyBsZW4gOiBNYXRoLm1pbih0b0xlbmd0aChlbmRQb3NpdGlvbiksIGxlbik7XG4gICAgICAgIHZhciBzZWFyY2ggPSBTdHJpbmcoc2VhcmNoU3RyaW5nKTtcbiAgICAgICAgcmV0dXJuICRlbmRzV2l0aCA/ICRlbmRzV2l0aC5jYWxsKHRoYXQsIHNlYXJjaCwgZW5kKSA6IHRoYXQuc2xpY2UoZW5kIC0gc2VhcmNoLmxlbmd0aCwgZW5kKSA9PT0gc2VhcmNoO1xuICAgICAgfVxuICAgIH0pO1xuICB9LCB7XG4gICAgXCIxMDdcIjogMTA3LFxuICAgIFwiMTE4XCI6IDExOCxcbiAgICBcIjMzXCI6IDMzLFxuICAgIFwiMzRcIjogMzRcbiAgfV0sXG4gIDIzODogW2Z1bmN0aW9uIChfZGVyZXFfLCBtb2R1bGUsIGV4cG9ydHMpIHtcbiAgICAndXNlIHN0cmljdCc7IC8vIEIuMi4zLjYgU3RyaW5nLnByb3RvdHlwZS5maXhlZCgpXG5cbiAgICBfZGVyZXFfKDEwOCkoJ2ZpeGVkJywgZnVuY3Rpb24gKGNyZWF0ZUhUTUwpIHtcbiAgICAgIHJldHVybiBmdW5jdGlvbiBmaXhlZCgpIHtcbiAgICAgICAgcmV0dXJuIGNyZWF0ZUhUTUwodGhpcywgJ3R0JywgJycsICcnKTtcbiAgICAgIH07XG4gICAgfSk7XG4gIH0sIHtcbiAgICBcIjEwOFwiOiAxMDhcbiAgfV0sXG4gIDIzOTogW2Z1bmN0aW9uIChfZGVyZXFfLCBtb2R1bGUsIGV4cG9ydHMpIHtcbiAgICAndXNlIHN0cmljdCc7IC8vIEIuMi4zLjcgU3RyaW5nLnByb3RvdHlwZS5mb250Y29sb3IoY29sb3IpXG5cbiAgICBfZGVyZXFfKDEwOCkoJ2ZvbnRjb2xvcicsIGZ1bmN0aW9uIChjcmVhdGVIVE1MKSB7XG4gICAgICByZXR1cm4gZnVuY3Rpb24gZm9udGNvbG9yKGNvbG9yKSB7XG4gICAgICAgIHJldHVybiBjcmVhdGVIVE1MKHRoaXMsICdmb250JywgJ2NvbG9yJywgY29sb3IpO1xuICAgICAgfTtcbiAgICB9KTtcbiAgfSwge1xuICAgIFwiMTA4XCI6IDEwOFxuICB9XSxcbiAgMjQwOiBbZnVuY3Rpb24gKF9kZXJlcV8sIG1vZHVsZSwgZXhwb3J0cykge1xuICAgICd1c2Ugc3RyaWN0JzsgLy8gQi4yLjMuOCBTdHJpbmcucHJvdG90eXBlLmZvbnRzaXplKHNpemUpXG5cbiAgICBfZGVyZXFfKDEwOCkoJ2ZvbnRzaXplJywgZnVuY3Rpb24gKGNyZWF0ZUhUTUwpIHtcbiAgICAgIHJldHVybiBmdW5jdGlvbiBmb250c2l6ZShzaXplKSB7XG4gICAgICAgIHJldHVybiBjcmVhdGVIVE1MKHRoaXMsICdmb250JywgJ3NpemUnLCBzaXplKTtcbiAgICAgIH07XG4gICAgfSk7XG4gIH0sIHtcbiAgICBcIjEwOFwiOiAxMDhcbiAgfV0sXG4gIDI0MTogW2Z1bmN0aW9uIChfZGVyZXFfLCBtb2R1bGUsIGV4cG9ydHMpIHtcbiAgICB2YXIgJGV4cG9ydCA9IF9kZXJlcV8oMzMpO1xuXG4gICAgdmFyIHRvQWJzb2x1dGVJbmRleCA9IF9kZXJlcV8oMTE0KTtcblxuICAgIHZhciBmcm9tQ2hhckNvZGUgPSBTdHJpbmcuZnJvbUNoYXJDb2RlO1xuICAgIHZhciAkZnJvbUNvZGVQb2ludCA9IFN0cmluZy5mcm9tQ29kZVBvaW50OyAvLyBsZW5ndGggc2hvdWxkIGJlIDEsIG9sZCBGRiBwcm9ibGVtXG5cbiAgICAkZXhwb3J0KCRleHBvcnQuUyArICRleHBvcnQuRiAqICghISRmcm9tQ29kZVBvaW50ICYmICRmcm9tQ29kZVBvaW50Lmxlbmd0aCAhPSAxKSwgJ1N0cmluZycsIHtcbiAgICAgIC8vIDIxLjEuMi4yIFN0cmluZy5mcm9tQ29kZVBvaW50KC4uLmNvZGVQb2ludHMpXG4gICAgICBmcm9tQ29kZVBvaW50OiBmdW5jdGlvbiBmcm9tQ29kZVBvaW50KHgpIHtcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby11bnVzZWQtdmFyc1xuICAgICAgICB2YXIgcmVzID0gW107XG4gICAgICAgIHZhciBhTGVuID0gYXJndW1lbnRzLmxlbmd0aDtcbiAgICAgICAgdmFyIGkgPSAwO1xuICAgICAgICB2YXIgY29kZTtcblxuICAgICAgICB3aGlsZSAoYUxlbiA+IGkpIHtcbiAgICAgICAgICBjb2RlID0gK2FyZ3VtZW50c1tpKytdO1xuICAgICAgICAgIGlmICh0b0Fic29sdXRlSW5kZXgoY29kZSwgMHgxMGZmZmYpICE9PSBjb2RlKSB0aHJvdyBSYW5nZUVycm9yKGNvZGUgKyAnIGlzIG5vdCBhIHZhbGlkIGNvZGUgcG9pbnQnKTtcbiAgICAgICAgICByZXMucHVzaChjb2RlIDwgMHgxMDAwMCA/IGZyb21DaGFyQ29kZShjb2RlKSA6IGZyb21DaGFyQ29kZSgoKGNvZGUgLT0gMHgxMDAwMCkgPj4gMTApICsgMHhkODAwLCBjb2RlICUgMHg0MDAgKyAweGRjMDApKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiByZXMuam9pbignJyk7XG4gICAgICB9XG4gICAgfSk7XG4gIH0sIHtcbiAgICBcIjExNFwiOiAxMTQsXG4gICAgXCIzM1wiOiAzM1xuICB9XSxcbiAgMjQyOiBbZnVuY3Rpb24gKF9kZXJlcV8sIG1vZHVsZSwgZXhwb3J0cykge1xuICAgIC8vIDIxLjEuMy43IFN0cmluZy5wcm90b3R5cGUuaW5jbHVkZXMoc2VhcmNoU3RyaW5nLCBwb3NpdGlvbiA9IDApXG4gICAgJ3VzZSBzdHJpY3QnO1xuXG4gICAgdmFyICRleHBvcnQgPSBfZGVyZXFfKDMzKTtcblxuICAgIHZhciBjb250ZXh0ID0gX2RlcmVxXygxMDcpO1xuXG4gICAgdmFyIElOQ0xVREVTID0gJ2luY2x1ZGVzJztcbiAgICAkZXhwb3J0KCRleHBvcnQuUCArICRleHBvcnQuRiAqIF9kZXJlcV8oMzQpKElOQ0xVREVTKSwgJ1N0cmluZycsIHtcbiAgICAgIGluY2x1ZGVzOiBmdW5jdGlvbiBpbmNsdWRlcyhzZWFyY2hTdHJpbmdcbiAgICAgIC8qICwgcG9zaXRpb24gPSAwICovXG4gICAgICApIHtcbiAgICAgICAgcmV0dXJuICEhfmNvbnRleHQodGhpcywgc2VhcmNoU3RyaW5nLCBJTkNMVURFUykuaW5kZXhPZihzZWFyY2hTdHJpbmcsIGFyZ3VtZW50cy5sZW5ndGggPiAxID8gYXJndW1lbnRzWzFdIDogdW5kZWZpbmVkKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfSwge1xuICAgIFwiMTA3XCI6IDEwNyxcbiAgICBcIjMzXCI6IDMzLFxuICAgIFwiMzRcIjogMzRcbiAgfV0sXG4gIDI0MzogW2Z1bmN0aW9uIChfZGVyZXFfLCBtb2R1bGUsIGV4cG9ydHMpIHtcbiAgICAndXNlIHN0cmljdCc7IC8vIEIuMi4zLjkgU3RyaW5nLnByb3RvdHlwZS5pdGFsaWNzKClcblxuICAgIF9kZXJlcV8oMTA4KSgnaXRhbGljcycsIGZ1bmN0aW9uIChjcmVhdGVIVE1MKSB7XG4gICAgICByZXR1cm4gZnVuY3Rpb24gaXRhbGljcygpIHtcbiAgICAgICAgcmV0dXJuIGNyZWF0ZUhUTUwodGhpcywgJ2knLCAnJywgJycpO1xuICAgICAgfTtcbiAgICB9KTtcbiAgfSwge1xuICAgIFwiMTA4XCI6IDEwOFxuICB9XSxcbiAgMjQ0OiBbZnVuY3Rpb24gKF9kZXJlcV8sIG1vZHVsZSwgZXhwb3J0cykge1xuICAgICd1c2Ugc3RyaWN0JztcblxuICAgIHZhciAkYXQgPSBfZGVyZXFfKDEwNikodHJ1ZSk7IC8vIDIxLjEuMy4yNyBTdHJpbmcucHJvdG90eXBlW0BAaXRlcmF0b3JdKClcblxuXG4gICAgX2RlcmVxXyg1NSkoU3RyaW5nLCAnU3RyaW5nJywgZnVuY3Rpb24gKGl0ZXJhdGVkKSB7XG4gICAgICB0aGlzLl90ID0gU3RyaW5nKGl0ZXJhdGVkKTsgLy8gdGFyZ2V0XG5cbiAgICAgIHRoaXMuX2kgPSAwOyAvLyBuZXh0IGluZGV4XG4gICAgICAvLyAyMS4xLjUuMi4xICVTdHJpbmdJdGVyYXRvclByb3RvdHlwZSUubmV4dCgpXG4gICAgfSwgZnVuY3Rpb24gKCkge1xuICAgICAgdmFyIE8gPSB0aGlzLl90O1xuICAgICAgdmFyIGluZGV4ID0gdGhpcy5faTtcbiAgICAgIHZhciBwb2ludDtcbiAgICAgIGlmIChpbmRleCA+PSBPLmxlbmd0aCkgcmV0dXJuIHtcbiAgICAgICAgdmFsdWU6IHVuZGVmaW5lZCxcbiAgICAgICAgZG9uZTogdHJ1ZVxuICAgICAgfTtcbiAgICAgIHBvaW50ID0gJGF0KE8sIGluZGV4KTtcbiAgICAgIHRoaXMuX2kgKz0gcG9pbnQubGVuZ3RoO1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgdmFsdWU6IHBvaW50LFxuICAgICAgICBkb25lOiBmYWxzZVxuICAgICAgfTtcbiAgICB9KTtcbiAgfSwge1xuICAgIFwiMTA2XCI6IDEwNixcbiAgICBcIjU1XCI6IDU1XG4gIH1dLFxuICAyNDU6IFtmdW5jdGlvbiAoX2RlcmVxXywgbW9kdWxlLCBleHBvcnRzKSB7XG4gICAgJ3VzZSBzdHJpY3QnOyAvLyBCLjIuMy4xMCBTdHJpbmcucHJvdG90eXBlLmxpbmsodXJsKVxuXG4gICAgX2RlcmVxXygxMDgpKCdsaW5rJywgZnVuY3Rpb24gKGNyZWF0ZUhUTUwpIHtcbiAgICAgIHJldHVybiBmdW5jdGlvbiBsaW5rKHVybCkge1xuICAgICAgICByZXR1cm4gY3JlYXRlSFRNTCh0aGlzLCAnYScsICdocmVmJywgdXJsKTtcbiAgICAgIH07XG4gICAgfSk7XG4gIH0sIHtcbiAgICBcIjEwOFwiOiAxMDhcbiAgfV0sXG4gIDI0NjogW2Z1bmN0aW9uIChfZGVyZXFfLCBtb2R1bGUsIGV4cG9ydHMpIHtcbiAgICB2YXIgJGV4cG9ydCA9IF9kZXJlcV8oMzMpO1xuXG4gICAgdmFyIHRvSU9iamVjdCA9IF9kZXJlcV8oMTE3KTtcblxuICAgIHZhciB0b0xlbmd0aCA9IF9kZXJlcV8oMTE4KTtcblxuICAgICRleHBvcnQoJGV4cG9ydC5TLCAnU3RyaW5nJywge1xuICAgICAgLy8gMjEuMS4yLjQgU3RyaW5nLnJhdyhjYWxsU2l0ZSwgLi4uc3Vic3RpdHV0aW9ucylcbiAgICAgIHJhdzogZnVuY3Rpb24gcmF3KGNhbGxTaXRlKSB7XG4gICAgICAgIHZhciB0cGwgPSB0b0lPYmplY3QoY2FsbFNpdGUucmF3KTtcbiAgICAgICAgdmFyIGxlbiA9IHRvTGVuZ3RoKHRwbC5sZW5ndGgpO1xuICAgICAgICB2YXIgYUxlbiA9IGFyZ3VtZW50cy5sZW5ndGg7XG4gICAgICAgIHZhciByZXMgPSBbXTtcbiAgICAgICAgdmFyIGkgPSAwO1xuXG4gICAgICAgIHdoaWxlIChsZW4gPiBpKSB7XG4gICAgICAgICAgcmVzLnB1c2goU3RyaW5nKHRwbFtpKytdKSk7XG4gICAgICAgICAgaWYgKGkgPCBhTGVuKSByZXMucHVzaChTdHJpbmcoYXJndW1lbnRzW2ldKSk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gcmVzLmpvaW4oJycpO1xuICAgICAgfVxuICAgIH0pO1xuICB9LCB7XG4gICAgXCIxMTdcIjogMTE3LFxuICAgIFwiMTE4XCI6IDExOCxcbiAgICBcIjMzXCI6IDMzXG4gIH1dLFxuICAyNDc6IFtmdW5jdGlvbiAoX2RlcmVxXywgbW9kdWxlLCBleHBvcnRzKSB7XG4gICAgdmFyICRleHBvcnQgPSBfZGVyZXFfKDMzKTtcblxuICAgICRleHBvcnQoJGV4cG9ydC5QLCAnU3RyaW5nJywge1xuICAgICAgLy8gMjEuMS4zLjEzIFN0cmluZy5wcm90b3R5cGUucmVwZWF0KGNvdW50KVxuICAgICAgcmVwZWF0OiBfZGVyZXFfKDExMClcbiAgICB9KTtcbiAgfSwge1xuICAgIFwiMTEwXCI6IDExMCxcbiAgICBcIjMzXCI6IDMzXG4gIH1dLFxuICAyNDg6IFtmdW5jdGlvbiAoX2RlcmVxXywgbW9kdWxlLCBleHBvcnRzKSB7XG4gICAgJ3VzZSBzdHJpY3QnOyAvLyBCLjIuMy4xMSBTdHJpbmcucHJvdG90eXBlLnNtYWxsKClcblxuICAgIF9kZXJlcV8oMTA4KSgnc21hbGwnLCBmdW5jdGlvbiAoY3JlYXRlSFRNTCkge1xuICAgICAgcmV0dXJuIGZ1bmN0aW9uIHNtYWxsKCkge1xuICAgICAgICByZXR1cm4gY3JlYXRlSFRNTCh0aGlzLCAnc21hbGwnLCAnJywgJycpO1xuICAgICAgfTtcbiAgICB9KTtcbiAgfSwge1xuICAgIFwiMTA4XCI6IDEwOFxuICB9XSxcbiAgMjQ5OiBbZnVuY3Rpb24gKF9kZXJlcV8sIG1vZHVsZSwgZXhwb3J0cykge1xuICAgIC8vIDIxLjEuMy4xOCBTdHJpbmcucHJvdG90eXBlLnN0YXJ0c1dpdGgoc2VhcmNoU3RyaW5nIFssIHBvc2l0aW9uIF0pXG4gICAgJ3VzZSBzdHJpY3QnO1xuXG4gICAgdmFyICRleHBvcnQgPSBfZGVyZXFfKDMzKTtcblxuICAgIHZhciB0b0xlbmd0aCA9IF9kZXJlcV8oMTE4KTtcblxuICAgIHZhciBjb250ZXh0ID0gX2RlcmVxXygxMDcpO1xuXG4gICAgdmFyIFNUQVJUU19XSVRIID0gJ3N0YXJ0c1dpdGgnO1xuICAgIHZhciAkc3RhcnRzV2l0aCA9ICcnW1NUQVJUU19XSVRIXTtcbiAgICAkZXhwb3J0KCRleHBvcnQuUCArICRleHBvcnQuRiAqIF9kZXJlcV8oMzQpKFNUQVJUU19XSVRIKSwgJ1N0cmluZycsIHtcbiAgICAgIHN0YXJ0c1dpdGg6IGZ1bmN0aW9uIHN0YXJ0c1dpdGgoc2VhcmNoU3RyaW5nXG4gICAgICAvKiAsIHBvc2l0aW9uID0gMCAqL1xuICAgICAgKSB7XG4gICAgICAgIHZhciB0aGF0ID0gY29udGV4dCh0aGlzLCBzZWFyY2hTdHJpbmcsIFNUQVJUU19XSVRIKTtcbiAgICAgICAgdmFyIGluZGV4ID0gdG9MZW5ndGgoTWF0aC5taW4oYXJndW1lbnRzLmxlbmd0aCA+IDEgPyBhcmd1bWVudHNbMV0gOiB1bmRlZmluZWQsIHRoYXQubGVuZ3RoKSk7XG4gICAgICAgIHZhciBzZWFyY2ggPSBTdHJpbmcoc2VhcmNoU3RyaW5nKTtcbiAgICAgICAgcmV0dXJuICRzdGFydHNXaXRoID8gJHN0YXJ0c1dpdGguY2FsbCh0aGF0LCBzZWFyY2gsIGluZGV4KSA6IHRoYXQuc2xpY2UoaW5kZXgsIGluZGV4ICsgc2VhcmNoLmxlbmd0aCkgPT09IHNlYXJjaDtcbiAgICAgIH1cbiAgICB9KTtcbiAgfSwge1xuICAgIFwiMTA3XCI6IDEwNyxcbiAgICBcIjExOFwiOiAxMTgsXG4gICAgXCIzM1wiOiAzMyxcbiAgICBcIjM0XCI6IDM0XG4gIH1dLFxuICAyNTA6IFtmdW5jdGlvbiAoX2RlcmVxXywgbW9kdWxlLCBleHBvcnRzKSB7XG4gICAgJ3VzZSBzdHJpY3QnOyAvLyBCLjIuMy4xMiBTdHJpbmcucHJvdG90eXBlLnN0cmlrZSgpXG5cbiAgICBfZGVyZXFfKDEwOCkoJ3N0cmlrZScsIGZ1bmN0aW9uIChjcmVhdGVIVE1MKSB7XG4gICAgICByZXR1cm4gZnVuY3Rpb24gc3RyaWtlKCkge1xuICAgICAgICByZXR1cm4gY3JlYXRlSFRNTCh0aGlzLCAnc3RyaWtlJywgJycsICcnKTtcbiAgICAgIH07XG4gICAgfSk7XG4gIH0sIHtcbiAgICBcIjEwOFwiOiAxMDhcbiAgfV0sXG4gIDI1MTogW2Z1bmN0aW9uIChfZGVyZXFfLCBtb2R1bGUsIGV4cG9ydHMpIHtcbiAgICAndXNlIHN0cmljdCc7IC8vIEIuMi4zLjEzIFN0cmluZy5wcm90b3R5cGUuc3ViKClcblxuICAgIF9kZXJlcV8oMTA4KSgnc3ViJywgZnVuY3Rpb24gKGNyZWF0ZUhUTUwpIHtcbiAgICAgIHJldHVybiBmdW5jdGlvbiBzdWIoKSB7XG4gICAgICAgIHJldHVybiBjcmVhdGVIVE1MKHRoaXMsICdzdWInLCAnJywgJycpO1xuICAgICAgfTtcbiAgICB9KTtcbiAgfSwge1xuICAgIFwiMTA4XCI6IDEwOFxuICB9XSxcbiAgMjUyOiBbZnVuY3Rpb24gKF9kZXJlcV8sIG1vZHVsZSwgZXhwb3J0cykge1xuICAgICd1c2Ugc3RyaWN0JzsgLy8gQi4yLjMuMTQgU3RyaW5nLnByb3RvdHlwZS5zdXAoKVxuXG4gICAgX2RlcmVxXygxMDgpKCdzdXAnLCBmdW5jdGlvbiAoY3JlYXRlSFRNTCkge1xuICAgICAgcmV0dXJuIGZ1bmN0aW9uIHN1cCgpIHtcbiAgICAgICAgcmV0dXJuIGNyZWF0ZUhUTUwodGhpcywgJ3N1cCcsICcnLCAnJyk7XG4gICAgICB9O1xuICAgIH0pO1xuICB9LCB7XG4gICAgXCIxMDhcIjogMTA4XG4gIH1dLFxuICAyNTM6IFtmdW5jdGlvbiAoX2RlcmVxXywgbW9kdWxlLCBleHBvcnRzKSB7XG4gICAgJ3VzZSBzdHJpY3QnOyAvLyAyMS4xLjMuMjUgU3RyaW5nLnByb3RvdHlwZS50cmltKClcblxuICAgIF9kZXJlcV8oMTExKSgndHJpbScsIGZ1bmN0aW9uICgkdHJpbSkge1xuICAgICAgcmV0dXJuIGZ1bmN0aW9uIHRyaW0oKSB7XG4gICAgICAgIHJldHVybiAkdHJpbSh0aGlzLCAzKTtcbiAgICAgIH07XG4gICAgfSk7XG4gIH0sIHtcbiAgICBcIjExMVwiOiAxMTFcbiAgfV0sXG4gIDI1NDogW2Z1bmN0aW9uIChfZGVyZXFfLCBtb2R1bGUsIGV4cG9ydHMpIHtcbiAgICAndXNlIHN0cmljdCc7IC8vIEVDTUFTY3JpcHQgNiBzeW1ib2xzIHNoaW1cblxuICAgIHZhciBnbG9iYWwgPSBfZGVyZXFfKDQwKTtcblxuICAgIHZhciBoYXMgPSBfZGVyZXFfKDQxKTtcblxuICAgIHZhciBERVNDUklQVE9SUyA9IF9kZXJlcV8oMjkpO1xuXG4gICAgdmFyICRleHBvcnQgPSBfZGVyZXFfKDMzKTtcblxuICAgIHZhciByZWRlZmluZSA9IF9kZXJlcV8oOTQpO1xuXG4gICAgdmFyIE1FVEEgPSBfZGVyZXFfKDY2KS5LRVk7XG5cbiAgICB2YXIgJGZhaWxzID0gX2RlcmVxXygzNSk7XG5cbiAgICB2YXIgc2hhcmVkID0gX2RlcmVxXygxMDMpO1xuXG4gICAgdmFyIHNldFRvU3RyaW5nVGFnID0gX2RlcmVxXygxMDEpO1xuXG4gICAgdmFyIHVpZCA9IF9kZXJlcV8oMTI0KTtcblxuICAgIHZhciB3a3MgPSBfZGVyZXFfKDEyOCk7XG5cbiAgICB2YXIgd2tzRXh0ID0gX2RlcmVxXygxMjcpO1xuXG4gICAgdmFyIHdrc0RlZmluZSA9IF9kZXJlcV8oMTI2KTtcblxuICAgIHZhciBrZXlPZiA9IF9kZXJlcV8oNTkpO1xuXG4gICAgdmFyIGVudW1LZXlzID0gX2RlcmVxXygzMik7XG5cbiAgICB2YXIgaXNBcnJheSA9IF9kZXJlcV8oNDkpO1xuXG4gICAgdmFyIGFuT2JqZWN0ID0gX2RlcmVxXyg3KTtcblxuICAgIHZhciB0b0lPYmplY3QgPSBfZGVyZXFfKDExNyk7XG5cbiAgICB2YXIgdG9QcmltaXRpdmUgPSBfZGVyZXFfKDEyMCk7XG5cbiAgICB2YXIgY3JlYXRlRGVzYyA9IF9kZXJlcV8oOTIpO1xuXG4gICAgdmFyIF9jcmVhdGUgPSBfZGVyZXFfKDcxKTtcblxuICAgIHZhciBnT1BORXh0ID0gX2RlcmVxXyg3Nik7XG5cbiAgICB2YXIgJEdPUEQgPSBfZGVyZXFfKDc1KTtcblxuICAgIHZhciAkRFAgPSBfZGVyZXFfKDcyKTtcblxuICAgIHZhciAka2V5cyA9IF9kZXJlcV8oODEpO1xuXG4gICAgdmFyIGdPUEQgPSAkR09QRC5mO1xuICAgIHZhciBkUCA9ICREUC5mO1xuICAgIHZhciBnT1BOID0gZ09QTkV4dC5mO1xuICAgIHZhciAkU3ltYm9sID0gZ2xvYmFsLlN5bWJvbDtcbiAgICB2YXIgJEpTT04gPSBnbG9iYWwuSlNPTjtcblxuICAgIHZhciBfc3RyaW5naWZ5ID0gJEpTT04gJiYgJEpTT04uc3RyaW5naWZ5O1xuXG4gICAgdmFyIFBST1RPVFlQRSA9ICdwcm90b3R5cGUnO1xuICAgIHZhciBISURERU4gPSB3a3MoJ19oaWRkZW4nKTtcbiAgICB2YXIgVE9fUFJJTUlUSVZFID0gd2tzKCd0b1ByaW1pdGl2ZScpO1xuICAgIHZhciBpc0VudW0gPSB7fS5wcm9wZXJ0eUlzRW51bWVyYWJsZTtcbiAgICB2YXIgU3ltYm9sUmVnaXN0cnkgPSBzaGFyZWQoJ3N5bWJvbC1yZWdpc3RyeScpO1xuICAgIHZhciBBbGxTeW1ib2xzID0gc2hhcmVkKCdzeW1ib2xzJyk7XG4gICAgdmFyIE9QU3ltYm9scyA9IHNoYXJlZCgnb3Atc3ltYm9scycpO1xuICAgIHZhciBPYmplY3RQcm90byA9IE9iamVjdFtQUk9UT1RZUEVdO1xuICAgIHZhciBVU0VfTkFUSVZFID0gdHlwZW9mICRTeW1ib2wgPT0gJ2Z1bmN0aW9uJztcbiAgICB2YXIgUU9iamVjdCA9IGdsb2JhbC5RT2JqZWN0OyAvLyBEb24ndCB1c2Ugc2V0dGVycyBpbiBRdCBTY3JpcHQsIGh0dHBzOi8vZ2l0aHViLmNvbS96bG9pcm9jay9jb3JlLWpzL2lzc3Vlcy8xNzNcblxuICAgIHZhciBzZXR0ZXIgPSAhUU9iamVjdCB8fCAhUU9iamVjdFtQUk9UT1RZUEVdIHx8ICFRT2JqZWN0W1BST1RPVFlQRV0uZmluZENoaWxkOyAvLyBmYWxsYmFjayBmb3Igb2xkIEFuZHJvaWQsIGh0dHBzOi8vY29kZS5nb29nbGUuY29tL3AvdjgvaXNzdWVzL2RldGFpbD9pZD02ODdcblxuICAgIHZhciBzZXRTeW1ib2xEZXNjID0gREVTQ1JJUFRPUlMgJiYgJGZhaWxzKGZ1bmN0aW9uICgpIHtcbiAgICAgIHJldHVybiBfY3JlYXRlKGRQKHt9LCAnYScsIHtcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICAgICAgcmV0dXJuIGRQKHRoaXMsICdhJywge1xuICAgICAgICAgICAgdmFsdWU6IDdcbiAgICAgICAgICB9KS5hO1xuICAgICAgICB9XG4gICAgICB9KSkuYSAhPSA3O1xuICAgIH0pID8gZnVuY3Rpb24gKGl0LCBrZXksIEQpIHtcbiAgICAgIHZhciBwcm90b0Rlc2MgPSBnT1BEKE9iamVjdFByb3RvLCBrZXkpO1xuICAgICAgaWYgKHByb3RvRGVzYykgZGVsZXRlIE9iamVjdFByb3RvW2tleV07XG4gICAgICBkUChpdCwga2V5LCBEKTtcbiAgICAgIGlmIChwcm90b0Rlc2MgJiYgaXQgIT09IE9iamVjdFByb3RvKSBkUChPYmplY3RQcm90bywga2V5LCBwcm90b0Rlc2MpO1xuICAgIH0gOiBkUDtcblxuICAgIHZhciB3cmFwID0gZnVuY3Rpb24gd3JhcCh0YWcpIHtcbiAgICAgIHZhciBzeW0gPSBBbGxTeW1ib2xzW3RhZ10gPSBfY3JlYXRlKCRTeW1ib2xbUFJPVE9UWVBFXSk7XG5cbiAgICAgIHN5bS5fayA9IHRhZztcbiAgICAgIHJldHVybiBzeW07XG4gICAgfTtcblxuICAgIHZhciBpc1N5bWJvbCA9IFVTRV9OQVRJVkUgJiYgX3R5cGVvZigkU3ltYm9sLml0ZXJhdG9yKSA9PSAnc3ltYm9sJyA/IGZ1bmN0aW9uIChpdCkge1xuICAgICAgcmV0dXJuIF90eXBlb2YoaXQpID09ICdzeW1ib2wnO1xuICAgIH0gOiBmdW5jdGlvbiAoaXQpIHtcbiAgICAgIHJldHVybiBpdCBpbnN0YW5jZW9mICRTeW1ib2w7XG4gICAgfTtcblxuICAgIHZhciAkZGVmaW5lUHJvcGVydHkgPSBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0eShpdCwga2V5LCBEKSB7XG4gICAgICBpZiAoaXQgPT09IE9iamVjdFByb3RvKSAkZGVmaW5lUHJvcGVydHkoT1BTeW1ib2xzLCBrZXksIEQpO1xuICAgICAgYW5PYmplY3QoaXQpO1xuICAgICAga2V5ID0gdG9QcmltaXRpdmUoa2V5LCB0cnVlKTtcbiAgICAgIGFuT2JqZWN0KEQpO1xuXG4gICAgICBpZiAoaGFzKEFsbFN5bWJvbHMsIGtleSkpIHtcbiAgICAgICAgaWYgKCFELmVudW1lcmFibGUpIHtcbiAgICAgICAgICBpZiAoIWhhcyhpdCwgSElEREVOKSkgZFAoaXQsIEhJRERFTiwgY3JlYXRlRGVzYygxLCB7fSkpO1xuICAgICAgICAgIGl0W0hJRERFTl1ba2V5XSA9IHRydWU7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaWYgKGhhcyhpdCwgSElEREVOKSAmJiBpdFtISURERU5dW2tleV0pIGl0W0hJRERFTl1ba2V5XSA9IGZhbHNlO1xuICAgICAgICAgIEQgPSBfY3JlYXRlKEQsIHtcbiAgICAgICAgICAgIGVudW1lcmFibGU6IGNyZWF0ZURlc2MoMCwgZmFsc2UpXG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gc2V0U3ltYm9sRGVzYyhpdCwga2V5LCBEKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGRQKGl0LCBrZXksIEQpO1xuICAgIH07XG5cbiAgICB2YXIgJGRlZmluZVByb3BlcnRpZXMgPSBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0aWVzKGl0LCBQKSB7XG4gICAgICBhbk9iamVjdChpdCk7XG4gICAgICB2YXIga2V5cyA9IGVudW1LZXlzKFAgPSB0b0lPYmplY3QoUCkpO1xuICAgICAgdmFyIGkgPSAwO1xuICAgICAgdmFyIGwgPSBrZXlzLmxlbmd0aDtcbiAgICAgIHZhciBrZXk7XG5cbiAgICAgIHdoaWxlIChsID4gaSkge1xuICAgICAgICAkZGVmaW5lUHJvcGVydHkoaXQsIGtleSA9IGtleXNbaSsrXSwgUFtrZXldKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGl0O1xuICAgIH07XG5cbiAgICB2YXIgJGNyZWF0ZSA9IGZ1bmN0aW9uIGNyZWF0ZShpdCwgUCkge1xuICAgICAgcmV0dXJuIFAgPT09IHVuZGVmaW5lZCA/IF9jcmVhdGUoaXQpIDogJGRlZmluZVByb3BlcnRpZXMoX2NyZWF0ZShpdCksIFApO1xuICAgIH07XG5cbiAgICB2YXIgJHByb3BlcnR5SXNFbnVtZXJhYmxlID0gZnVuY3Rpb24gcHJvcGVydHlJc0VudW1lcmFibGUoa2V5KSB7XG4gICAgICB2YXIgRSA9IGlzRW51bS5jYWxsKHRoaXMsIGtleSA9IHRvUHJpbWl0aXZlKGtleSwgdHJ1ZSkpO1xuICAgICAgaWYgKHRoaXMgPT09IE9iamVjdFByb3RvICYmIGhhcyhBbGxTeW1ib2xzLCBrZXkpICYmICFoYXMoT1BTeW1ib2xzLCBrZXkpKSByZXR1cm4gZmFsc2U7XG4gICAgICByZXR1cm4gRSB8fCAhaGFzKHRoaXMsIGtleSkgfHwgIWhhcyhBbGxTeW1ib2xzLCBrZXkpIHx8IGhhcyh0aGlzLCBISURERU4pICYmIHRoaXNbSElEREVOXVtrZXldID8gRSA6IHRydWU7XG4gICAgfTtcblxuICAgIHZhciAkZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yID0gZnVuY3Rpb24gZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKGl0LCBrZXkpIHtcbiAgICAgIGl0ID0gdG9JT2JqZWN0KGl0KTtcbiAgICAgIGtleSA9IHRvUHJpbWl0aXZlKGtleSwgdHJ1ZSk7XG4gICAgICBpZiAoaXQgPT09IE9iamVjdFByb3RvICYmIGhhcyhBbGxTeW1ib2xzLCBrZXkpICYmICFoYXMoT1BTeW1ib2xzLCBrZXkpKSByZXR1cm47XG4gICAgICB2YXIgRCA9IGdPUEQoaXQsIGtleSk7XG4gICAgICBpZiAoRCAmJiBoYXMoQWxsU3ltYm9scywga2V5KSAmJiAhKGhhcyhpdCwgSElEREVOKSAmJiBpdFtISURERU5dW2tleV0pKSBELmVudW1lcmFibGUgPSB0cnVlO1xuICAgICAgcmV0dXJuIEQ7XG4gICAgfTtcblxuICAgIHZhciAkZ2V0T3duUHJvcGVydHlOYW1lcyA9IGZ1bmN0aW9uIGdldE93blByb3BlcnR5TmFtZXMoaXQpIHtcbiAgICAgIHZhciBuYW1lcyA9IGdPUE4odG9JT2JqZWN0KGl0KSk7XG4gICAgICB2YXIgcmVzdWx0ID0gW107XG4gICAgICB2YXIgaSA9IDA7XG4gICAgICB2YXIga2V5O1xuXG4gICAgICB3aGlsZSAobmFtZXMubGVuZ3RoID4gaSkge1xuICAgICAgICBpZiAoIWhhcyhBbGxTeW1ib2xzLCBrZXkgPSBuYW1lc1tpKytdKSAmJiBrZXkgIT0gSElEREVOICYmIGtleSAhPSBNRVRBKSByZXN1bHQucHVzaChrZXkpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH07XG5cbiAgICB2YXIgJGdldE93blByb3BlcnR5U3ltYm9scyA9IGZ1bmN0aW9uIGdldE93blByb3BlcnR5U3ltYm9scyhpdCkge1xuICAgICAgdmFyIElTX09QID0gaXQgPT09IE9iamVjdFByb3RvO1xuICAgICAgdmFyIG5hbWVzID0gZ09QTihJU19PUCA/IE9QU3ltYm9scyA6IHRvSU9iamVjdChpdCkpO1xuICAgICAgdmFyIHJlc3VsdCA9IFtdO1xuICAgICAgdmFyIGkgPSAwO1xuICAgICAgdmFyIGtleTtcblxuICAgICAgd2hpbGUgKG5hbWVzLmxlbmd0aCA+IGkpIHtcbiAgICAgICAgaWYgKGhhcyhBbGxTeW1ib2xzLCBrZXkgPSBuYW1lc1tpKytdKSAmJiAoSVNfT1AgPyBoYXMoT2JqZWN0UHJvdG8sIGtleSkgOiB0cnVlKSkgcmVzdWx0LnB1c2goQWxsU3ltYm9sc1trZXldKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9OyAvLyAxOS40LjEuMSBTeW1ib2woW2Rlc2NyaXB0aW9uXSlcblxuXG4gICAgaWYgKCFVU0VfTkFUSVZFKSB7XG4gICAgICAkU3ltYm9sID0gZnVuY3Rpb24gX1N5bWJvbDIoKSB7XG4gICAgICAgIGlmICh0aGlzIGluc3RhbmNlb2YgJFN5bWJvbCkgdGhyb3cgVHlwZUVycm9yKCdTeW1ib2wgaXMgbm90IGEgY29uc3RydWN0b3IhJyk7XG4gICAgICAgIHZhciB0YWcgPSB1aWQoYXJndW1lbnRzLmxlbmd0aCA+IDAgPyBhcmd1bWVudHNbMF0gOiB1bmRlZmluZWQpO1xuXG4gICAgICAgIHZhciAkc2V0ID0gZnVuY3Rpb24gJHNldCh2YWx1ZSkge1xuICAgICAgICAgIGlmICh0aGlzID09PSBPYmplY3RQcm90bykgJHNldC5jYWxsKE9QU3ltYm9scywgdmFsdWUpO1xuICAgICAgICAgIGlmIChoYXModGhpcywgSElEREVOKSAmJiBoYXModGhpc1tISURERU5dLCB0YWcpKSB0aGlzW0hJRERFTl1bdGFnXSA9IGZhbHNlO1xuICAgICAgICAgIHNldFN5bWJvbERlc2ModGhpcywgdGFnLCBjcmVhdGVEZXNjKDEsIHZhbHVlKSk7XG4gICAgICAgIH07XG5cbiAgICAgICAgaWYgKERFU0NSSVBUT1JTICYmIHNldHRlcikgc2V0U3ltYm9sRGVzYyhPYmplY3RQcm90bywgdGFnLCB7XG4gICAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgICAgICAgIHNldDogJHNldFxuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIHdyYXAodGFnKTtcbiAgICAgIH07XG5cbiAgICAgIHJlZGVmaW5lKCRTeW1ib2xbUFJPVE9UWVBFXSwgJ3RvU3RyaW5nJywgZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9rO1xuICAgICAgfSk7XG4gICAgICAkR09QRC5mID0gJGdldE93blByb3BlcnR5RGVzY3JpcHRvcjtcbiAgICAgICREUC5mID0gJGRlZmluZVByb3BlcnR5O1xuICAgICAgX2RlcmVxXyg3NykuZiA9IGdPUE5FeHQuZiA9ICRnZXRPd25Qcm9wZXJ0eU5hbWVzO1xuICAgICAgX2RlcmVxXyg4MikuZiA9ICRwcm9wZXJ0eUlzRW51bWVyYWJsZTtcbiAgICAgIF9kZXJlcV8oNzgpLmYgPSAkZ2V0T3duUHJvcGVydHlTeW1ib2xzO1xuXG4gICAgICBpZiAoREVTQ1JJUFRPUlMgJiYgIV9kZXJlcV8oNjApKSB7XG4gICAgICAgIHJlZGVmaW5lKE9iamVjdFByb3RvLCAncHJvcGVydHlJc0VudW1lcmFibGUnLCAkcHJvcGVydHlJc0VudW1lcmFibGUsIHRydWUpO1xuICAgICAgfVxuXG4gICAgICB3a3NFeHQuZiA9IGZ1bmN0aW9uIChuYW1lKSB7XG4gICAgICAgIHJldHVybiB3cmFwKHdrcyhuYW1lKSk7XG4gICAgICB9O1xuICAgIH1cblxuICAgICRleHBvcnQoJGV4cG9ydC5HICsgJGV4cG9ydC5XICsgJGV4cG9ydC5GICogIVVTRV9OQVRJVkUsIHtcbiAgICAgIFN5bWJvbDogJFN5bWJvbFxuICAgIH0pO1xuXG4gICAgZm9yICh2YXIgZXM2U3ltYm9scyA9IC8vIDE5LjQuMi4yLCAxOS40LjIuMywgMTkuNC4yLjQsIDE5LjQuMi42LCAxOS40LjIuOCwgMTkuNC4yLjksIDE5LjQuMi4xMCwgMTkuNC4yLjExLCAxOS40LjIuMTIsIDE5LjQuMi4xMywgMTkuNC4yLjE0XG4gICAgJ2hhc0luc3RhbmNlLGlzQ29uY2F0U3ByZWFkYWJsZSxpdGVyYXRvcixtYXRjaCxyZXBsYWNlLHNlYXJjaCxzcGVjaWVzLHNwbGl0LHRvUHJpbWl0aXZlLHRvU3RyaW5nVGFnLHVuc2NvcGFibGVzJy5zcGxpdCgnLCcpLCBqID0gMDsgZXM2U3ltYm9scy5sZW5ndGggPiBqOykge1xuICAgICAgd2tzKGVzNlN5bWJvbHNbaisrXSk7XG4gICAgfVxuXG4gICAgZm9yICh2YXIgd2VsbEtub3duU3ltYm9scyA9ICRrZXlzKHdrcy5zdG9yZSksIGsgPSAwOyB3ZWxsS25vd25TeW1ib2xzLmxlbmd0aCA+IGs7KSB7XG4gICAgICB3a3NEZWZpbmUod2VsbEtub3duU3ltYm9sc1trKytdKTtcbiAgICB9XG5cbiAgICAkZXhwb3J0KCRleHBvcnQuUyArICRleHBvcnQuRiAqICFVU0VfTkFUSVZFLCAnU3ltYm9sJywge1xuICAgICAgLy8gMTkuNC4yLjEgU3ltYm9sLmZvcihrZXkpXG4gICAgICAnZm9yJzogZnVuY3Rpb24gX2ZvcihrZXkpIHtcbiAgICAgICAgcmV0dXJuIGhhcyhTeW1ib2xSZWdpc3RyeSwga2V5ICs9ICcnKSA/IFN5bWJvbFJlZ2lzdHJ5W2tleV0gOiBTeW1ib2xSZWdpc3RyeVtrZXldID0gJFN5bWJvbChrZXkpO1xuICAgICAgfSxcbiAgICAgIC8vIDE5LjQuMi41IFN5bWJvbC5rZXlGb3Ioc3ltKVxuICAgICAga2V5Rm9yOiBmdW5jdGlvbiBrZXlGb3Ioa2V5KSB7XG4gICAgICAgIGlmIChpc1N5bWJvbChrZXkpKSByZXR1cm4ga2V5T2YoU3ltYm9sUmVnaXN0cnksIGtleSk7XG4gICAgICAgIHRocm93IFR5cGVFcnJvcihrZXkgKyAnIGlzIG5vdCBhIHN5bWJvbCEnKTtcbiAgICAgIH0sXG4gICAgICB1c2VTZXR0ZXI6IGZ1bmN0aW9uIHVzZVNldHRlcigpIHtcbiAgICAgICAgc2V0dGVyID0gdHJ1ZTtcbiAgICAgIH0sXG4gICAgICB1c2VTaW1wbGU6IGZ1bmN0aW9uIHVzZVNpbXBsZSgpIHtcbiAgICAgICAgc2V0dGVyID0gZmFsc2U7XG4gICAgICB9XG4gICAgfSk7XG4gICAgJGV4cG9ydCgkZXhwb3J0LlMgKyAkZXhwb3J0LkYgKiAhVVNFX05BVElWRSwgJ09iamVjdCcsIHtcbiAgICAgIC8vIDE5LjEuMi4yIE9iamVjdC5jcmVhdGUoTyBbLCBQcm9wZXJ0aWVzXSlcbiAgICAgIGNyZWF0ZTogJGNyZWF0ZSxcbiAgICAgIC8vIDE5LjEuMi40IE9iamVjdC5kZWZpbmVQcm9wZXJ0eShPLCBQLCBBdHRyaWJ1dGVzKVxuICAgICAgZGVmaW5lUHJvcGVydHk6ICRkZWZpbmVQcm9wZXJ0eSxcbiAgICAgIC8vIDE5LjEuMi4zIE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKE8sIFByb3BlcnRpZXMpXG4gICAgICBkZWZpbmVQcm9wZXJ0aWVzOiAkZGVmaW5lUHJvcGVydGllcyxcbiAgICAgIC8vIDE5LjEuMi42IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoTywgUClcbiAgICAgIGdldE93blByb3BlcnR5RGVzY3JpcHRvcjogJGdldE93blByb3BlcnR5RGVzY3JpcHRvcixcbiAgICAgIC8vIDE5LjEuMi43IE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKE8pXG4gICAgICBnZXRPd25Qcm9wZXJ0eU5hbWVzOiAkZ2V0T3duUHJvcGVydHlOYW1lcyxcbiAgICAgIC8vIDE5LjEuMi44IE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMoTylcbiAgICAgIGdldE93blByb3BlcnR5U3ltYm9sczogJGdldE93blByb3BlcnR5U3ltYm9sc1xuICAgIH0pOyAvLyAyNC4zLjIgSlNPTi5zdHJpbmdpZnkodmFsdWUgWywgcmVwbGFjZXIgWywgc3BhY2VdXSlcblxuICAgICRKU09OICYmICRleHBvcnQoJGV4cG9ydC5TICsgJGV4cG9ydC5GICogKCFVU0VfTkFUSVZFIHx8ICRmYWlscyhmdW5jdGlvbiAoKSB7XG4gICAgICB2YXIgUyA9ICRTeW1ib2woKTsgLy8gTVMgRWRnZSBjb252ZXJ0cyBzeW1ib2wgdmFsdWVzIHRvIEpTT04gYXMge31cbiAgICAgIC8vIFdlYktpdCBjb252ZXJ0cyBzeW1ib2wgdmFsdWVzIHRvIEpTT04gYXMgbnVsbFxuICAgICAgLy8gVjggdGhyb3dzIG9uIGJveGVkIHN5bWJvbHNcblxuICAgICAgcmV0dXJuIF9zdHJpbmdpZnkoW1NdKSAhPSAnW251bGxdJyB8fCBfc3RyaW5naWZ5KHtcbiAgICAgICAgYTogU1xuICAgICAgfSkgIT0gJ3t9JyB8fCBfc3RyaW5naWZ5KE9iamVjdChTKSkgIT0gJ3t9JztcbiAgICB9KSksICdKU09OJywge1xuICAgICAgc3RyaW5naWZ5OiBmdW5jdGlvbiBzdHJpbmdpZnkoaXQpIHtcbiAgICAgICAgaWYgKGl0ID09PSB1bmRlZmluZWQgfHwgaXNTeW1ib2woaXQpKSByZXR1cm47IC8vIElFOCByZXR1cm5zIHN0cmluZyBvbiB1bmRlZmluZWRcblxuICAgICAgICB2YXIgYXJncyA9IFtpdF07XG4gICAgICAgIHZhciBpID0gMTtcbiAgICAgICAgdmFyIHJlcGxhY2VyLCAkcmVwbGFjZXI7XG5cbiAgICAgICAgd2hpbGUgKGFyZ3VtZW50cy5sZW5ndGggPiBpKSB7XG4gICAgICAgICAgYXJncy5wdXNoKGFyZ3VtZW50c1tpKytdKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJlcGxhY2VyID0gYXJnc1sxXTtcbiAgICAgICAgaWYgKHR5cGVvZiByZXBsYWNlciA9PSAnZnVuY3Rpb24nKSAkcmVwbGFjZXIgPSByZXBsYWNlcjtcbiAgICAgICAgaWYgKCRyZXBsYWNlciB8fCAhaXNBcnJheShyZXBsYWNlcikpIHJlcGxhY2VyID0gZnVuY3Rpb24gcmVwbGFjZXIoa2V5LCB2YWx1ZSkge1xuICAgICAgICAgIGlmICgkcmVwbGFjZXIpIHZhbHVlID0gJHJlcGxhY2VyLmNhbGwodGhpcywga2V5LCB2YWx1ZSk7XG4gICAgICAgICAgaWYgKCFpc1N5bWJvbCh2YWx1ZSkpIHJldHVybiB2YWx1ZTtcbiAgICAgICAgfTtcbiAgICAgICAgYXJnc1sxXSA9IHJlcGxhY2VyO1xuICAgICAgICByZXR1cm4gX3N0cmluZ2lmeS5hcHBseSgkSlNPTiwgYXJncyk7XG4gICAgICB9XG4gICAgfSk7IC8vIDE5LjQuMy40IFN5bWJvbC5wcm90b3R5cGVbQEB0b1ByaW1pdGl2ZV0oaGludClcblxuICAgICRTeW1ib2xbUFJPVE9UWVBFXVtUT19QUklNSVRJVkVdIHx8IF9kZXJlcV8oNDIpKCRTeW1ib2xbUFJPVE9UWVBFXSwgVE9fUFJJTUlUSVZFLCAkU3ltYm9sW1BST1RPVFlQRV0udmFsdWVPZik7IC8vIDE5LjQuMy41IFN5bWJvbC5wcm90b3R5cGVbQEB0b1N0cmluZ1RhZ11cblxuICAgIHNldFRvU3RyaW5nVGFnKCRTeW1ib2wsICdTeW1ib2wnKTsgLy8gMjAuMi4xLjkgTWF0aFtAQHRvU3RyaW5nVGFnXVxuXG4gICAgc2V0VG9TdHJpbmdUYWcoTWF0aCwgJ01hdGgnLCB0cnVlKTsgLy8gMjQuMy4zIEpTT05bQEB0b1N0cmluZ1RhZ11cblxuICAgIHNldFRvU3RyaW5nVGFnKGdsb2JhbC5KU09OLCAnSlNPTicsIHRydWUpO1xuICB9LCB7XG4gICAgXCIxMDFcIjogMTAxLFxuICAgIFwiMTAzXCI6IDEwMyxcbiAgICBcIjExN1wiOiAxMTcsXG4gICAgXCIxMjBcIjogMTIwLFxuICAgIFwiMTI0XCI6IDEyNCxcbiAgICBcIjEyNlwiOiAxMjYsXG4gICAgXCIxMjdcIjogMTI3LFxuICAgIFwiMTI4XCI6IDEyOCxcbiAgICBcIjI5XCI6IDI5LFxuICAgIFwiMzJcIjogMzIsXG4gICAgXCIzM1wiOiAzMyxcbiAgICBcIjM1XCI6IDM1LFxuICAgIFwiNDBcIjogNDAsXG4gICAgXCI0MVwiOiA0MSxcbiAgICBcIjQyXCI6IDQyLFxuICAgIFwiNDlcIjogNDksXG4gICAgXCI1OVwiOiA1OSxcbiAgICBcIjYwXCI6IDYwLFxuICAgIFwiNjZcIjogNjYsXG4gICAgXCI3XCI6IDcsXG4gICAgXCI3MVwiOiA3MSxcbiAgICBcIjcyXCI6IDcyLFxuICAgIFwiNzVcIjogNzUsXG4gICAgXCI3NlwiOiA3NixcbiAgICBcIjc3XCI6IDc3LFxuICAgIFwiNzhcIjogNzgsXG4gICAgXCI4MVwiOiA4MSxcbiAgICBcIjgyXCI6IDgyLFxuICAgIFwiOTJcIjogOTIsXG4gICAgXCI5NFwiOiA5NFxuICB9XSxcbiAgMjU1OiBbZnVuY3Rpb24gKF9kZXJlcV8sIG1vZHVsZSwgZXhwb3J0cykge1xuICAgICd1c2Ugc3RyaWN0JztcblxuICAgIHZhciAkZXhwb3J0ID0gX2RlcmVxXygzMyk7XG5cbiAgICB2YXIgJHR5cGVkID0gX2RlcmVxXygxMjMpO1xuXG4gICAgdmFyIGJ1ZmZlciA9IF9kZXJlcV8oMTIyKTtcblxuICAgIHZhciBhbk9iamVjdCA9IF9kZXJlcV8oNyk7XG5cbiAgICB2YXIgdG9BYnNvbHV0ZUluZGV4ID0gX2RlcmVxXygxMTQpO1xuXG4gICAgdmFyIHRvTGVuZ3RoID0gX2RlcmVxXygxMTgpO1xuXG4gICAgdmFyIGlzT2JqZWN0ID0gX2RlcmVxXyg1MSk7XG5cbiAgICB2YXIgQXJyYXlCdWZmZXIgPSBfZGVyZXFfKDQwKS5BcnJheUJ1ZmZlcjtcblxuICAgIHZhciBzcGVjaWVzQ29uc3RydWN0b3IgPSBfZGVyZXFfKDEwNCk7XG5cbiAgICB2YXIgJEFycmF5QnVmZmVyID0gYnVmZmVyLkFycmF5QnVmZmVyO1xuICAgIHZhciAkRGF0YVZpZXcgPSBidWZmZXIuRGF0YVZpZXc7XG4gICAgdmFyICRpc1ZpZXcgPSAkdHlwZWQuQUJWICYmIEFycmF5QnVmZmVyLmlzVmlldztcbiAgICB2YXIgJHNsaWNlID0gJEFycmF5QnVmZmVyLnByb3RvdHlwZS5zbGljZTtcbiAgICB2YXIgVklFVyA9ICR0eXBlZC5WSUVXO1xuICAgIHZhciBBUlJBWV9CVUZGRVIgPSAnQXJyYXlCdWZmZXInO1xuICAgICRleHBvcnQoJGV4cG9ydC5HICsgJGV4cG9ydC5XICsgJGV4cG9ydC5GICogKEFycmF5QnVmZmVyICE9PSAkQXJyYXlCdWZmZXIpLCB7XG4gICAgICBBcnJheUJ1ZmZlcjogJEFycmF5QnVmZmVyXG4gICAgfSk7XG4gICAgJGV4cG9ydCgkZXhwb3J0LlMgKyAkZXhwb3J0LkYgKiAhJHR5cGVkLkNPTlNUUiwgQVJSQVlfQlVGRkVSLCB7XG4gICAgICAvLyAyNC4xLjMuMSBBcnJheUJ1ZmZlci5pc1ZpZXcoYXJnKVxuICAgICAgaXNWaWV3OiBmdW5jdGlvbiBpc1ZpZXcoaXQpIHtcbiAgICAgICAgcmV0dXJuICRpc1ZpZXcgJiYgJGlzVmlldyhpdCkgfHwgaXNPYmplY3QoaXQpICYmIFZJRVcgaW4gaXQ7XG4gICAgICB9XG4gICAgfSk7XG4gICAgJGV4cG9ydCgkZXhwb3J0LlAgKyAkZXhwb3J0LlUgKyAkZXhwb3J0LkYgKiBfZGVyZXFfKDM1KShmdW5jdGlvbiAoKSB7XG4gICAgICByZXR1cm4gIW5ldyAkQXJyYXlCdWZmZXIoMikuc2xpY2UoMSwgdW5kZWZpbmVkKS5ieXRlTGVuZ3RoO1xuICAgIH0pLCBBUlJBWV9CVUZGRVIsIHtcbiAgICAgIC8vIDI0LjEuNC4zIEFycmF5QnVmZmVyLnByb3RvdHlwZS5zbGljZShzdGFydCwgZW5kKVxuICAgICAgc2xpY2U6IGZ1bmN0aW9uIHNsaWNlKHN0YXJ0LCBlbmQpIHtcbiAgICAgICAgaWYgKCRzbGljZSAhPT0gdW5kZWZpbmVkICYmIGVuZCA9PT0gdW5kZWZpbmVkKSByZXR1cm4gJHNsaWNlLmNhbGwoYW5PYmplY3QodGhpcyksIHN0YXJ0KTsgLy8gRkYgZml4XG5cbiAgICAgICAgdmFyIGxlbiA9IGFuT2JqZWN0KHRoaXMpLmJ5dGVMZW5ndGg7XG4gICAgICAgIHZhciBmaXJzdCA9IHRvQWJzb2x1dGVJbmRleChzdGFydCwgbGVuKTtcbiAgICAgICAgdmFyIGZpbmFsID0gdG9BYnNvbHV0ZUluZGV4KGVuZCA9PT0gdW5kZWZpbmVkID8gbGVuIDogZW5kLCBsZW4pO1xuICAgICAgICB2YXIgcmVzdWx0ID0gbmV3IChzcGVjaWVzQ29uc3RydWN0b3IodGhpcywgJEFycmF5QnVmZmVyKSkodG9MZW5ndGgoZmluYWwgLSBmaXJzdCkpO1xuICAgICAgICB2YXIgdmlld1MgPSBuZXcgJERhdGFWaWV3KHRoaXMpO1xuICAgICAgICB2YXIgdmlld1QgPSBuZXcgJERhdGFWaWV3KHJlc3VsdCk7XG4gICAgICAgIHZhciBpbmRleCA9IDA7XG5cbiAgICAgICAgd2hpbGUgKGZpcnN0IDwgZmluYWwpIHtcbiAgICAgICAgICB2aWV3VC5zZXRVaW50OChpbmRleCsrLCB2aWV3Uy5nZXRVaW50OChmaXJzdCsrKSk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgX2RlcmVxXygxMDApKEFSUkFZX0JVRkZFUik7XG4gIH0sIHtcbiAgICBcIjEwMFwiOiAxMDAsXG4gICAgXCIxMDRcIjogMTA0LFxuICAgIFwiMTE0XCI6IDExNCxcbiAgICBcIjExOFwiOiAxMTgsXG4gICAgXCIxMjJcIjogMTIyLFxuICAgIFwiMTIzXCI6IDEyMyxcbiAgICBcIjMzXCI6IDMzLFxuICAgIFwiMzVcIjogMzUsXG4gICAgXCI0MFwiOiA0MCxcbiAgICBcIjUxXCI6IDUxLFxuICAgIFwiN1wiOiA3XG4gIH1dLFxuICAyNTY6IFtmdW5jdGlvbiAoX2RlcmVxXywgbW9kdWxlLCBleHBvcnRzKSB7XG4gICAgdmFyICRleHBvcnQgPSBfZGVyZXFfKDMzKTtcblxuICAgICRleHBvcnQoJGV4cG9ydC5HICsgJGV4cG9ydC5XICsgJGV4cG9ydC5GICogIV9kZXJlcV8oMTIzKS5BQlYsIHtcbiAgICAgIERhdGFWaWV3OiBfZGVyZXFfKDEyMikuRGF0YVZpZXdcbiAgICB9KTtcbiAgfSwge1xuICAgIFwiMTIyXCI6IDEyMixcbiAgICBcIjEyM1wiOiAxMjMsXG4gICAgXCIzM1wiOiAzM1xuICB9XSxcbiAgMjU3OiBbZnVuY3Rpb24gKF9kZXJlcV8sIG1vZHVsZSwgZXhwb3J0cykge1xuICAgIF9kZXJlcV8oMTIxKSgnRmxvYXQzMicsIDQsIGZ1bmN0aW9uIChpbml0KSB7XG4gICAgICByZXR1cm4gZnVuY3Rpb24gRmxvYXQzMkFycmF5KGRhdGEsIGJ5dGVPZmZzZXQsIGxlbmd0aCkge1xuICAgICAgICByZXR1cm4gaW5pdCh0aGlzLCBkYXRhLCBieXRlT2Zmc2V0LCBsZW5ndGgpO1xuICAgICAgfTtcbiAgICB9KTtcbiAgfSwge1xuICAgIFwiMTIxXCI6IDEyMVxuICB9XSxcbiAgMjU4OiBbZnVuY3Rpb24gKF9kZXJlcV8sIG1vZHVsZSwgZXhwb3J0cykge1xuICAgIF9kZXJlcV8oMTIxKSgnRmxvYXQ2NCcsIDgsIGZ1bmN0aW9uIChpbml0KSB7XG4gICAgICByZXR1cm4gZnVuY3Rpb24gRmxvYXQ2NEFycmF5KGRhdGEsIGJ5dGVPZmZzZXQsIGxlbmd0aCkge1xuICAgICAgICByZXR1cm4gaW5pdCh0aGlzLCBkYXRhLCBieXRlT2Zmc2V0LCBsZW5ndGgpO1xuICAgICAgfTtcbiAgICB9KTtcbiAgfSwge1xuICAgIFwiMTIxXCI6IDEyMVxuICB9XSxcbiAgMjU5OiBbZnVuY3Rpb24gKF9kZXJlcV8sIG1vZHVsZSwgZXhwb3J0cykge1xuICAgIF9kZXJlcV8oMTIxKSgnSW50MTYnLCAyLCBmdW5jdGlvbiAoaW5pdCkge1xuICAgICAgcmV0dXJuIGZ1bmN0aW9uIEludDE2QXJyYXkoZGF0YSwgYnl0ZU9mZnNldCwgbGVuZ3RoKSB7XG4gICAgICAgIHJldHVybiBpbml0KHRoaXMsIGRhdGEsIGJ5dGVPZmZzZXQsIGxlbmd0aCk7XG4gICAgICB9O1xuICAgIH0pO1xuICB9LCB7XG4gICAgXCIxMjFcIjogMTIxXG4gIH1dLFxuICAyNjA6IFtmdW5jdGlvbiAoX2RlcmVxXywgbW9kdWxlLCBleHBvcnRzKSB7XG4gICAgX2RlcmVxXygxMjEpKCdJbnQzMicsIDQsIGZ1bmN0aW9uIChpbml0KSB7XG4gICAgICByZXR1cm4gZnVuY3Rpb24gSW50MzJBcnJheShkYXRhLCBieXRlT2Zmc2V0LCBsZW5ndGgpIHtcbiAgICAgICAgcmV0dXJuIGluaXQodGhpcywgZGF0YSwgYnl0ZU9mZnNldCwgbGVuZ3RoKTtcbiAgICAgIH07XG4gICAgfSk7XG4gIH0sIHtcbiAgICBcIjEyMVwiOiAxMjFcbiAgfV0sXG4gIDI2MTogW2Z1bmN0aW9uIChfZGVyZXFfLCBtb2R1bGUsIGV4cG9ydHMpIHtcbiAgICBfZGVyZXFfKDEyMSkoJ0ludDgnLCAxLCBmdW5jdGlvbiAoaW5pdCkge1xuICAgICAgcmV0dXJuIGZ1bmN0aW9uIEludDhBcnJheShkYXRhLCBieXRlT2Zmc2V0LCBsZW5ndGgpIHtcbiAgICAgICAgcmV0dXJuIGluaXQodGhpcywgZGF0YSwgYnl0ZU9mZnNldCwgbGVuZ3RoKTtcbiAgICAgIH07XG4gICAgfSk7XG4gIH0sIHtcbiAgICBcIjEyMVwiOiAxMjFcbiAgfV0sXG4gIDI2MjogW2Z1bmN0aW9uIChfZGVyZXFfLCBtb2R1bGUsIGV4cG9ydHMpIHtcbiAgICBfZGVyZXFfKDEyMSkoJ1VpbnQxNicsIDIsIGZ1bmN0aW9uIChpbml0KSB7XG4gICAgICByZXR1cm4gZnVuY3Rpb24gVWludDE2QXJyYXkoZGF0YSwgYnl0ZU9mZnNldCwgbGVuZ3RoKSB7XG4gICAgICAgIHJldHVybiBpbml0KHRoaXMsIGRhdGEsIGJ5dGVPZmZzZXQsIGxlbmd0aCk7XG4gICAgICB9O1xuICAgIH0pO1xuICB9LCB7XG4gICAgXCIxMjFcIjogMTIxXG4gIH1dLFxuICAyNjM6IFtmdW5jdGlvbiAoX2RlcmVxXywgbW9kdWxlLCBleHBvcnRzKSB7XG4gICAgX2RlcmVxXygxMjEpKCdVaW50MzInLCA0LCBmdW5jdGlvbiAoaW5pdCkge1xuICAgICAgcmV0dXJuIGZ1bmN0aW9uIFVpbnQzMkFycmF5KGRhdGEsIGJ5dGVPZmZzZXQsIGxlbmd0aCkge1xuICAgICAgICByZXR1cm4gaW5pdCh0aGlzLCBkYXRhLCBieXRlT2Zmc2V0LCBsZW5ndGgpO1xuICAgICAgfTtcbiAgICB9KTtcbiAgfSwge1xuICAgIFwiMTIxXCI6IDEyMVxuICB9XSxcbiAgMjY0OiBbZnVuY3Rpb24gKF9kZXJlcV8sIG1vZHVsZSwgZXhwb3J0cykge1xuICAgIF9kZXJlcV8oMTIxKSgnVWludDgnLCAxLCBmdW5jdGlvbiAoaW5pdCkge1xuICAgICAgcmV0dXJuIGZ1bmN0aW9uIFVpbnQ4QXJyYXkoZGF0YSwgYnl0ZU9mZnNldCwgbGVuZ3RoKSB7XG4gICAgICAgIHJldHVybiBpbml0KHRoaXMsIGRhdGEsIGJ5dGVPZmZzZXQsIGxlbmd0aCk7XG4gICAgICB9O1xuICAgIH0pO1xuICB9LCB7XG4gICAgXCIxMjFcIjogMTIxXG4gIH1dLFxuICAyNjU6IFtmdW5jdGlvbiAoX2RlcmVxXywgbW9kdWxlLCBleHBvcnRzKSB7XG4gICAgX2RlcmVxXygxMjEpKCdVaW50OCcsIDEsIGZ1bmN0aW9uIChpbml0KSB7XG4gICAgICByZXR1cm4gZnVuY3Rpb24gVWludDhDbGFtcGVkQXJyYXkoZGF0YSwgYnl0ZU9mZnNldCwgbGVuZ3RoKSB7XG4gICAgICAgIHJldHVybiBpbml0KHRoaXMsIGRhdGEsIGJ5dGVPZmZzZXQsIGxlbmd0aCk7XG4gICAgICB9O1xuICAgIH0sIHRydWUpO1xuICB9LCB7XG4gICAgXCIxMjFcIjogMTIxXG4gIH1dLFxuICAyNjY6IFtmdW5jdGlvbiAoX2RlcmVxXywgbW9kdWxlLCBleHBvcnRzKSB7XG4gICAgJ3VzZSBzdHJpY3QnO1xuXG4gICAgdmFyIGVhY2ggPSBfZGVyZXFfKDEyKSgwKTtcblxuICAgIHZhciByZWRlZmluZSA9IF9kZXJlcV8oOTQpO1xuXG4gICAgdmFyIG1ldGEgPSBfZGVyZXFfKDY2KTtcblxuICAgIHZhciBhc3NpZ24gPSBfZGVyZXFfKDcwKTtcblxuICAgIHZhciB3ZWFrID0gX2RlcmVxXygyMSk7XG5cbiAgICB2YXIgaXNPYmplY3QgPSBfZGVyZXFfKDUxKTtcblxuICAgIHZhciBmYWlscyA9IF9kZXJlcV8oMzUpO1xuXG4gICAgdmFyIHZhbGlkYXRlID0gX2RlcmVxXygxMjUpO1xuXG4gICAgdmFyIFdFQUtfTUFQID0gJ1dlYWtNYXAnO1xuICAgIHZhciBnZXRXZWFrID0gbWV0YS5nZXRXZWFrO1xuICAgIHZhciBpc0V4dGVuc2libGUgPSBPYmplY3QuaXNFeHRlbnNpYmxlO1xuICAgIHZhciB1bmNhdWdodEZyb3plblN0b3JlID0gd2Vhay51ZnN0b3JlO1xuICAgIHZhciB0bXAgPSB7fTtcbiAgICB2YXIgSW50ZXJuYWxNYXA7XG5cbiAgICB2YXIgd3JhcHBlciA9IGZ1bmN0aW9uIHdyYXBwZXIoZ2V0KSB7XG4gICAgICByZXR1cm4gZnVuY3Rpb24gV2Vha01hcCgpIHtcbiAgICAgICAgcmV0dXJuIGdldCh0aGlzLCBhcmd1bWVudHMubGVuZ3RoID4gMCA/IGFyZ3VtZW50c1swXSA6IHVuZGVmaW5lZCk7XG4gICAgICB9O1xuICAgIH07XG5cbiAgICB2YXIgbWV0aG9kcyA9IHtcbiAgICAgIC8vIDIzLjMuMy4zIFdlYWtNYXAucHJvdG90eXBlLmdldChrZXkpXG4gICAgICBnZXQ6IGZ1bmN0aW9uIGdldChrZXkpIHtcbiAgICAgICAgaWYgKGlzT2JqZWN0KGtleSkpIHtcbiAgICAgICAgICB2YXIgZGF0YSA9IGdldFdlYWsoa2V5KTtcbiAgICAgICAgICBpZiAoZGF0YSA9PT0gdHJ1ZSkgcmV0dXJuIHVuY2F1Z2h0RnJvemVuU3RvcmUodmFsaWRhdGUodGhpcywgV0VBS19NQVApKS5nZXQoa2V5KTtcbiAgICAgICAgICByZXR1cm4gZGF0YSA/IGRhdGFbdGhpcy5faV0gOiB1bmRlZmluZWQ7XG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICAvLyAyMy4zLjMuNSBXZWFrTWFwLnByb3RvdHlwZS5zZXQoa2V5LCB2YWx1ZSlcbiAgICAgIHNldDogZnVuY3Rpb24gc2V0KGtleSwgdmFsdWUpIHtcbiAgICAgICAgcmV0dXJuIHdlYWsuZGVmKHZhbGlkYXRlKHRoaXMsIFdFQUtfTUFQKSwga2V5LCB2YWx1ZSk7XG4gICAgICB9XG4gICAgfTsgLy8gMjMuMyBXZWFrTWFwIE9iamVjdHNcblxuICAgIHZhciAkV2Vha01hcCA9IG1vZHVsZS5leHBvcnRzID0gX2RlcmVxXygyMikoV0VBS19NQVAsIHdyYXBwZXIsIG1ldGhvZHMsIHdlYWssIHRydWUsIHRydWUpOyAvLyBJRTExIFdlYWtNYXAgZnJvemVuIGtleXMgZml4XG5cblxuICAgIGlmIChmYWlscyhmdW5jdGlvbiAoKSB7XG4gICAgICByZXR1cm4gbmV3ICRXZWFrTWFwKCkuc2V0KChPYmplY3QuZnJlZXplIHx8IE9iamVjdCkodG1wKSwgNykuZ2V0KHRtcCkgIT0gNztcbiAgICB9KSkge1xuICAgICAgSW50ZXJuYWxNYXAgPSB3ZWFrLmdldENvbnN0cnVjdG9yKHdyYXBwZXIsIFdFQUtfTUFQKTtcbiAgICAgIGFzc2lnbihJbnRlcm5hbE1hcC5wcm90b3R5cGUsIG1ldGhvZHMpO1xuICAgICAgbWV0YS5ORUVEID0gdHJ1ZTtcbiAgICAgIGVhY2goWydkZWxldGUnLCAnaGFzJywgJ2dldCcsICdzZXQnXSwgZnVuY3Rpb24gKGtleSkge1xuICAgICAgICB2YXIgcHJvdG8gPSAkV2Vha01hcC5wcm90b3R5cGU7XG4gICAgICAgIHZhciBtZXRob2QgPSBwcm90b1trZXldO1xuICAgICAgICByZWRlZmluZShwcm90bywga2V5LCBmdW5jdGlvbiAoYSwgYikge1xuICAgICAgICAgIC8vIHN0b3JlIGZyb3plbiBvYmplY3RzIG9uIGludGVybmFsIHdlYWttYXAgc2hpbVxuICAgICAgICAgIGlmIChpc09iamVjdChhKSAmJiAhaXNFeHRlbnNpYmxlKGEpKSB7XG4gICAgICAgICAgICBpZiAoIXRoaXMuX2YpIHRoaXMuX2YgPSBuZXcgSW50ZXJuYWxNYXAoKTtcblxuICAgICAgICAgICAgdmFyIHJlc3VsdCA9IHRoaXMuX2Zba2V5XShhLCBiKTtcblxuICAgICAgICAgICAgcmV0dXJuIGtleSA9PSAnc2V0JyA/IHRoaXMgOiByZXN1bHQ7IC8vIHN0b3JlIGFsbCB0aGUgcmVzdCBvbiBuYXRpdmUgd2Vha21hcFxuICAgICAgICAgIH1cblxuICAgICAgICAgIHJldHVybiBtZXRob2QuY2FsbCh0aGlzLCBhLCBiKTtcbiAgICAgICAgfSk7XG4gICAgICB9KTtcbiAgICB9XG4gIH0sIHtcbiAgICBcIjEyXCI6IDEyLFxuICAgIFwiMTI1XCI6IDEyNSxcbiAgICBcIjIxXCI6IDIxLFxuICAgIFwiMjJcIjogMjIsXG4gICAgXCIzNVwiOiAzNSxcbiAgICBcIjUxXCI6IDUxLFxuICAgIFwiNjZcIjogNjYsXG4gICAgXCI3MFwiOiA3MCxcbiAgICBcIjk0XCI6IDk0XG4gIH1dLFxuICAyNjc6IFtmdW5jdGlvbiAoX2RlcmVxXywgbW9kdWxlLCBleHBvcnRzKSB7XG4gICAgJ3VzZSBzdHJpY3QnO1xuXG4gICAgdmFyIHdlYWsgPSBfZGVyZXFfKDIxKTtcblxuICAgIHZhciB2YWxpZGF0ZSA9IF9kZXJlcV8oMTI1KTtcblxuICAgIHZhciBXRUFLX1NFVCA9ICdXZWFrU2V0JzsgLy8gMjMuNCBXZWFrU2V0IE9iamVjdHNcblxuICAgIF9kZXJlcV8oMjIpKFdFQUtfU0VULCBmdW5jdGlvbiAoZ2V0KSB7XG4gICAgICByZXR1cm4gZnVuY3Rpb24gV2Vha1NldCgpIHtcbiAgICAgICAgcmV0dXJuIGdldCh0aGlzLCBhcmd1bWVudHMubGVuZ3RoID4gMCA/IGFyZ3VtZW50c1swXSA6IHVuZGVmaW5lZCk7XG4gICAgICB9O1xuICAgIH0sIHtcbiAgICAgIC8vIDIzLjQuMy4xIFdlYWtTZXQucHJvdG90eXBlLmFkZCh2YWx1ZSlcbiAgICAgIGFkZDogZnVuY3Rpb24gYWRkKHZhbHVlKSB7XG4gICAgICAgIHJldHVybiB3ZWFrLmRlZih2YWxpZGF0ZSh0aGlzLCBXRUFLX1NFVCksIHZhbHVlLCB0cnVlKTtcbiAgICAgIH1cbiAgICB9LCB3ZWFrLCBmYWxzZSwgdHJ1ZSk7XG4gIH0sIHtcbiAgICBcIjEyNVwiOiAxMjUsXG4gICAgXCIyMVwiOiAyMSxcbiAgICBcIjIyXCI6IDIyXG4gIH1dLFxuICAyNjg6IFtmdW5jdGlvbiAoX2RlcmVxXywgbW9kdWxlLCBleHBvcnRzKSB7XG4gICAgJ3VzZSBzdHJpY3QnOyAvLyBodHRwczovL3RjMzkuZ2l0aHViLmlvL3Byb3Bvc2FsLWZsYXRNYXAvI3NlYy1BcnJheS5wcm90b3R5cGUuZmxhdE1hcFxuXG4gICAgdmFyICRleHBvcnQgPSBfZGVyZXFfKDMzKTtcblxuICAgIHZhciBmbGF0dGVuSW50b0FycmF5ID0gX2RlcmVxXygzOCk7XG5cbiAgICB2YXIgdG9PYmplY3QgPSBfZGVyZXFfKDExOSk7XG5cbiAgICB2YXIgdG9MZW5ndGggPSBfZGVyZXFfKDExOCk7XG5cbiAgICB2YXIgYUZ1bmN0aW9uID0gX2RlcmVxXygzKTtcblxuICAgIHZhciBhcnJheVNwZWNpZXNDcmVhdGUgPSBfZGVyZXFfKDE1KTtcblxuICAgICRleHBvcnQoJGV4cG9ydC5QLCAnQXJyYXknLCB7XG4gICAgICBmbGF0TWFwOiBmdW5jdGlvbiBmbGF0TWFwKGNhbGxiYWNrZm5cbiAgICAgIC8qICwgdGhpc0FyZyAqL1xuICAgICAgKSB7XG4gICAgICAgIHZhciBPID0gdG9PYmplY3QodGhpcyk7XG4gICAgICAgIHZhciBzb3VyY2VMZW4sIEE7XG4gICAgICAgIGFGdW5jdGlvbihjYWxsYmFja2ZuKTtcbiAgICAgICAgc291cmNlTGVuID0gdG9MZW5ndGgoTy5sZW5ndGgpO1xuICAgICAgICBBID0gYXJyYXlTcGVjaWVzQ3JlYXRlKE8sIDApO1xuICAgICAgICBmbGF0dGVuSW50b0FycmF5KEEsIE8sIE8sIHNvdXJjZUxlbiwgMCwgMSwgY2FsbGJhY2tmbiwgYXJndW1lbnRzWzFdKTtcbiAgICAgICAgcmV0dXJuIEE7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICBfZGVyZXFfKDUpKCdmbGF0TWFwJyk7XG4gIH0sIHtcbiAgICBcIjExOFwiOiAxMTgsXG4gICAgXCIxMTlcIjogMTE5LFxuICAgIFwiMTVcIjogMTUsXG4gICAgXCIzXCI6IDMsXG4gICAgXCIzM1wiOiAzMyxcbiAgICBcIjM4XCI6IDM4LFxuICAgIFwiNVwiOiA1XG4gIH1dLFxuICAyNjk6IFtmdW5jdGlvbiAoX2RlcmVxXywgbW9kdWxlLCBleHBvcnRzKSB7XG4gICAgJ3VzZSBzdHJpY3QnOyAvLyBodHRwczovL3RjMzkuZ2l0aHViLmlvL3Byb3Bvc2FsLWZsYXRNYXAvI3NlYy1BcnJheS5wcm90b3R5cGUuZmxhdHRlblxuXG4gICAgdmFyICRleHBvcnQgPSBfZGVyZXFfKDMzKTtcblxuICAgIHZhciBmbGF0dGVuSW50b0FycmF5ID0gX2RlcmVxXygzOCk7XG5cbiAgICB2YXIgdG9PYmplY3QgPSBfZGVyZXFfKDExOSk7XG5cbiAgICB2YXIgdG9MZW5ndGggPSBfZGVyZXFfKDExOCk7XG5cbiAgICB2YXIgdG9JbnRlZ2VyID0gX2RlcmVxXygxMTYpO1xuXG4gICAgdmFyIGFycmF5U3BlY2llc0NyZWF0ZSA9IF9kZXJlcV8oMTUpO1xuXG4gICAgJGV4cG9ydCgkZXhwb3J0LlAsICdBcnJheScsIHtcbiAgICAgIGZsYXR0ZW46IGZ1bmN0aW9uIGZsYXR0ZW4oKSB7XG4gICAgICAgIHZhciBkZXB0aEFyZyA9IGFyZ3VtZW50c1swXTtcbiAgICAgICAgdmFyIE8gPSB0b09iamVjdCh0aGlzKTtcbiAgICAgICAgdmFyIHNvdXJjZUxlbiA9IHRvTGVuZ3RoKE8ubGVuZ3RoKTtcbiAgICAgICAgdmFyIEEgPSBhcnJheVNwZWNpZXNDcmVhdGUoTywgMCk7XG4gICAgICAgIGZsYXR0ZW5JbnRvQXJyYXkoQSwgTywgTywgc291cmNlTGVuLCAwLCBkZXB0aEFyZyA9PT0gdW5kZWZpbmVkID8gMSA6IHRvSW50ZWdlcihkZXB0aEFyZykpO1xuICAgICAgICByZXR1cm4gQTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIF9kZXJlcV8oNSkoJ2ZsYXR0ZW4nKTtcbiAgfSwge1xuICAgIFwiMTE2XCI6IDExNixcbiAgICBcIjExOFwiOiAxMTgsXG4gICAgXCIxMTlcIjogMTE5LFxuICAgIFwiMTVcIjogMTUsXG4gICAgXCIzM1wiOiAzMyxcbiAgICBcIjM4XCI6IDM4LFxuICAgIFwiNVwiOiA1XG4gIH1dLFxuICAyNzA6IFtmdW5jdGlvbiAoX2RlcmVxXywgbW9kdWxlLCBleHBvcnRzKSB7XG4gICAgJ3VzZSBzdHJpY3QnOyAvLyBodHRwczovL2dpdGh1Yi5jb20vdGMzOS9BcnJheS5wcm90b3R5cGUuaW5jbHVkZXNcblxuICAgIHZhciAkZXhwb3J0ID0gX2RlcmVxXygzMyk7XG5cbiAgICB2YXIgJGluY2x1ZGVzID0gX2RlcmVxXygxMSkodHJ1ZSk7XG5cbiAgICAkZXhwb3J0KCRleHBvcnQuUCwgJ0FycmF5Jywge1xuICAgICAgaW5jbHVkZXM6IGZ1bmN0aW9uIGluY2x1ZGVzKGVsXG4gICAgICAvKiAsIGZyb21JbmRleCA9IDAgKi9cbiAgICAgICkge1xuICAgICAgICByZXR1cm4gJGluY2x1ZGVzKHRoaXMsIGVsLCBhcmd1bWVudHMubGVuZ3RoID4gMSA/IGFyZ3VtZW50c1sxXSA6IHVuZGVmaW5lZCk7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICBfZGVyZXFfKDUpKCdpbmNsdWRlcycpO1xuICB9LCB7XG4gICAgXCIxMVwiOiAxMSxcbiAgICBcIjMzXCI6IDMzLFxuICAgIFwiNVwiOiA1XG4gIH1dLFxuICAyNzE6IFtmdW5jdGlvbiAoX2RlcmVxXywgbW9kdWxlLCBleHBvcnRzKSB7XG4gICAgLy8gaHR0cHM6Ly9naXRodWIuY29tL3J3YWxkcm9uL3RjMzktbm90ZXMvYmxvYi9tYXN0ZXIvZXM2LzIwMTQtMDkvc2VwdC0yNS5tZCM1MTAtZ2xvYmFsYXNhcC1mb3ItZW5xdWV1aW5nLWEtbWljcm90YXNrXG4gICAgdmFyICRleHBvcnQgPSBfZGVyZXFfKDMzKTtcblxuICAgIHZhciBtaWNyb3Rhc2sgPSBfZGVyZXFfKDY4KSgpO1xuXG4gICAgdmFyIHByb2Nlc3MgPSBfZGVyZXFfKDQwKS5wcm9jZXNzO1xuXG4gICAgdmFyIGlzTm9kZSA9IF9kZXJlcV8oMTgpKHByb2Nlc3MpID09ICdwcm9jZXNzJztcbiAgICAkZXhwb3J0KCRleHBvcnQuRywge1xuICAgICAgYXNhcDogZnVuY3Rpb24gYXNhcChmbikge1xuICAgICAgICB2YXIgZG9tYWluID0gaXNOb2RlICYmIHByb2Nlc3MuZG9tYWluO1xuICAgICAgICBtaWNyb3Rhc2soZG9tYWluID8gZG9tYWluLmJpbmQoZm4pIDogZm4pO1xuICAgICAgfVxuICAgIH0pO1xuICB9LCB7XG4gICAgXCIxOFwiOiAxOCxcbiAgICBcIjMzXCI6IDMzLFxuICAgIFwiNDBcIjogNDAsXG4gICAgXCI2OFwiOiA2OFxuICB9XSxcbiAgMjcyOiBbZnVuY3Rpb24gKF9kZXJlcV8sIG1vZHVsZSwgZXhwb3J0cykge1xuICAgIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9samhhcmIvcHJvcG9zYWwtaXMtZXJyb3JcbiAgICB2YXIgJGV4cG9ydCA9IF9kZXJlcV8oMzMpO1xuXG4gICAgdmFyIGNvZiA9IF9kZXJlcV8oMTgpO1xuXG4gICAgJGV4cG9ydCgkZXhwb3J0LlMsICdFcnJvcicsIHtcbiAgICAgIGlzRXJyb3I6IGZ1bmN0aW9uIGlzRXJyb3IoaXQpIHtcbiAgICAgICAgcmV0dXJuIGNvZihpdCkgPT09ICdFcnJvcic7XG4gICAgICB9XG4gICAgfSk7XG4gIH0sIHtcbiAgICBcIjE4XCI6IDE4LFxuICAgIFwiMzNcIjogMzNcbiAgfV0sXG4gIDI3MzogW2Z1bmN0aW9uIChfZGVyZXFfLCBtb2R1bGUsIGV4cG9ydHMpIHtcbiAgICAvLyBodHRwczovL2dpdGh1Yi5jb20vdGMzOS9wcm9wb3NhbC1nbG9iYWxcbiAgICB2YXIgJGV4cG9ydCA9IF9kZXJlcV8oMzMpO1xuXG4gICAgJGV4cG9ydCgkZXhwb3J0LkcsIHtcbiAgICAgIGdsb2JhbDogX2RlcmVxXyg0MClcbiAgICB9KTtcbiAgfSwge1xuICAgIFwiMzNcIjogMzMsXG4gICAgXCI0MFwiOiA0MFxuICB9XSxcbiAgMjc0OiBbZnVuY3Rpb24gKF9kZXJlcV8sIG1vZHVsZSwgZXhwb3J0cykge1xuICAgIC8vIGh0dHBzOi8vdGMzOS5naXRodWIuaW8vcHJvcG9zYWwtc2V0bWFwLW9mZnJvbS8jc2VjLW1hcC5mcm9tXG4gICAgX2RlcmVxXyg5NykoJ01hcCcpO1xuICB9LCB7XG4gICAgXCI5N1wiOiA5N1xuICB9XSxcbiAgMjc1OiBbZnVuY3Rpb24gKF9kZXJlcV8sIG1vZHVsZSwgZXhwb3J0cykge1xuICAgIC8vIGh0dHBzOi8vdGMzOS5naXRodWIuaW8vcHJvcG9zYWwtc2V0bWFwLW9mZnJvbS8jc2VjLW1hcC5vZlxuICAgIF9kZXJlcV8oOTgpKCdNYXAnKTtcbiAgfSwge1xuICAgIFwiOThcIjogOThcbiAgfV0sXG4gIDI3NjogW2Z1bmN0aW9uIChfZGVyZXFfLCBtb2R1bGUsIGV4cG9ydHMpIHtcbiAgICAvLyBodHRwczovL2dpdGh1Yi5jb20vRGF2aWRCcnVhbnQvTWFwLVNldC5wcm90b3R5cGUudG9KU09OXG4gICAgdmFyICRleHBvcnQgPSBfZGVyZXFfKDMzKTtcblxuICAgICRleHBvcnQoJGV4cG9ydC5QICsgJGV4cG9ydC5SLCAnTWFwJywge1xuICAgICAgdG9KU09OOiBfZGVyZXFfKDIwKSgnTWFwJylcbiAgICB9KTtcbiAgfSwge1xuICAgIFwiMjBcIjogMjAsXG4gICAgXCIzM1wiOiAzM1xuICB9XSxcbiAgMjc3OiBbZnVuY3Rpb24gKF9kZXJlcV8sIG1vZHVsZSwgZXhwb3J0cykge1xuICAgIC8vIGh0dHBzOi8vcndhbGRyb24uZ2l0aHViLmlvL3Byb3Bvc2FsLW1hdGgtZXh0ZW5zaW9ucy9cbiAgICB2YXIgJGV4cG9ydCA9IF9kZXJlcV8oMzMpO1xuXG4gICAgJGV4cG9ydCgkZXhwb3J0LlMsICdNYXRoJywge1xuICAgICAgY2xhbXA6IGZ1bmN0aW9uIGNsYW1wKHgsIGxvd2VyLCB1cHBlcikge1xuICAgICAgICByZXR1cm4gTWF0aC5taW4odXBwZXIsIE1hdGgubWF4KGxvd2VyLCB4KSk7XG4gICAgICB9XG4gICAgfSk7XG4gIH0sIHtcbiAgICBcIjMzXCI6IDMzXG4gIH1dLFxuICAyNzg6IFtmdW5jdGlvbiAoX2RlcmVxXywgbW9kdWxlLCBleHBvcnRzKSB7XG4gICAgLy8gaHR0cHM6Ly9yd2FsZHJvbi5naXRodWIuaW8vcHJvcG9zYWwtbWF0aC1leHRlbnNpb25zL1xuICAgIHZhciAkZXhwb3J0ID0gX2RlcmVxXygzMyk7XG5cbiAgICAkZXhwb3J0KCRleHBvcnQuUywgJ01hdGgnLCB7XG4gICAgICBERUdfUEVSX1JBRDogTWF0aC5QSSAvIDE4MFxuICAgIH0pO1xuICB9LCB7XG4gICAgXCIzM1wiOiAzM1xuICB9XSxcbiAgMjc5OiBbZnVuY3Rpb24gKF9kZXJlcV8sIG1vZHVsZSwgZXhwb3J0cykge1xuICAgIC8vIGh0dHBzOi8vcndhbGRyb24uZ2l0aHViLmlvL3Byb3Bvc2FsLW1hdGgtZXh0ZW5zaW9ucy9cbiAgICB2YXIgJGV4cG9ydCA9IF9kZXJlcV8oMzMpO1xuXG4gICAgdmFyIFJBRF9QRVJfREVHID0gMTgwIC8gTWF0aC5QSTtcbiAgICAkZXhwb3J0KCRleHBvcnQuUywgJ01hdGgnLCB7XG4gICAgICBkZWdyZWVzOiBmdW5jdGlvbiBkZWdyZWVzKHJhZGlhbnMpIHtcbiAgICAgICAgcmV0dXJuIHJhZGlhbnMgKiBSQURfUEVSX0RFRztcbiAgICAgIH1cbiAgICB9KTtcbiAgfSwge1xuICAgIFwiMzNcIjogMzNcbiAgfV0sXG4gIDI4MDogW2Z1bmN0aW9uIChfZGVyZXFfLCBtb2R1bGUsIGV4cG9ydHMpIHtcbiAgICAvLyBodHRwczovL3J3YWxkcm9uLmdpdGh1Yi5pby9wcm9wb3NhbC1tYXRoLWV4dGVuc2lvbnMvXG4gICAgdmFyICRleHBvcnQgPSBfZGVyZXFfKDMzKTtcblxuICAgIHZhciBzY2FsZSA9IF9kZXJlcV8oNjQpO1xuXG4gICAgdmFyIGZyb3VuZCA9IF9kZXJlcV8oNjIpO1xuXG4gICAgJGV4cG9ydCgkZXhwb3J0LlMsICdNYXRoJywge1xuICAgICAgZnNjYWxlOiBmdW5jdGlvbiBmc2NhbGUoeCwgaW5Mb3csIGluSGlnaCwgb3V0TG93LCBvdXRIaWdoKSB7XG4gICAgICAgIHJldHVybiBmcm91bmQoc2NhbGUoeCwgaW5Mb3csIGluSGlnaCwgb3V0TG93LCBvdXRIaWdoKSk7XG4gICAgICB9XG4gICAgfSk7XG4gIH0sIHtcbiAgICBcIjMzXCI6IDMzLFxuICAgIFwiNjJcIjogNjIsXG4gICAgXCI2NFwiOiA2NFxuICB9XSxcbiAgMjgxOiBbZnVuY3Rpb24gKF9kZXJlcV8sIG1vZHVsZSwgZXhwb3J0cykge1xuICAgIC8vIGh0dHBzOi8vZ2lzdC5naXRodWIuY29tL0JyZW5kYW5FaWNoLzQyOTRkNWMyMTJhNmQyMjU0NzAzXG4gICAgdmFyICRleHBvcnQgPSBfZGVyZXFfKDMzKTtcblxuICAgICRleHBvcnQoJGV4cG9ydC5TLCAnTWF0aCcsIHtcbiAgICAgIGlhZGRoOiBmdW5jdGlvbiBpYWRkaCh4MCwgeDEsIHkwLCB5MSkge1xuICAgICAgICB2YXIgJHgwID0geDAgPj4+IDA7XG4gICAgICAgIHZhciAkeDEgPSB4MSA+Pj4gMDtcbiAgICAgICAgdmFyICR5MCA9IHkwID4+PiAwO1xuICAgICAgICByZXR1cm4gJHgxICsgKHkxID4+PiAwKSArICgoJHgwICYgJHkwIHwgKCR4MCB8ICR5MCkgJiB+KCR4MCArICR5MCA+Pj4gMCkpID4+PiAzMSkgfCAwO1xuICAgICAgfVxuICAgIH0pO1xuICB9LCB7XG4gICAgXCIzM1wiOiAzM1xuICB9XSxcbiAgMjgyOiBbZnVuY3Rpb24gKF9kZXJlcV8sIG1vZHVsZSwgZXhwb3J0cykge1xuICAgIC8vIGh0dHBzOi8vZ2lzdC5naXRodWIuY29tL0JyZW5kYW5FaWNoLzQyOTRkNWMyMTJhNmQyMjU0NzAzXG4gICAgdmFyICRleHBvcnQgPSBfZGVyZXFfKDMzKTtcblxuICAgICRleHBvcnQoJGV4cG9ydC5TLCAnTWF0aCcsIHtcbiAgICAgIGltdWxoOiBmdW5jdGlvbiBpbXVsaCh1LCB2KSB7XG4gICAgICAgIHZhciBVSU5UMTYgPSAweGZmZmY7XG4gICAgICAgIHZhciAkdSA9ICt1O1xuICAgICAgICB2YXIgJHYgPSArdjtcbiAgICAgICAgdmFyIHUwID0gJHUgJiBVSU5UMTY7XG4gICAgICAgIHZhciB2MCA9ICR2ICYgVUlOVDE2O1xuICAgICAgICB2YXIgdTEgPSAkdSA+PiAxNjtcbiAgICAgICAgdmFyIHYxID0gJHYgPj4gMTY7XG4gICAgICAgIHZhciB0ID0gKHUxICogdjAgPj4+IDApICsgKHUwICogdjAgPj4+IDE2KTtcbiAgICAgICAgcmV0dXJuIHUxICogdjEgKyAodCA+PiAxNikgKyAoKHUwICogdjEgPj4+IDApICsgKHQgJiBVSU5UMTYpID4+IDE2KTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfSwge1xuICAgIFwiMzNcIjogMzNcbiAgfV0sXG4gIDI4MzogW2Z1bmN0aW9uIChfZGVyZXFfLCBtb2R1bGUsIGV4cG9ydHMpIHtcbiAgICAvLyBodHRwczovL2dpc3QuZ2l0aHViLmNvbS9CcmVuZGFuRWljaC80Mjk0ZDVjMjEyYTZkMjI1NDcwM1xuICAgIHZhciAkZXhwb3J0ID0gX2RlcmVxXygzMyk7XG5cbiAgICAkZXhwb3J0KCRleHBvcnQuUywgJ01hdGgnLCB7XG4gICAgICBpc3ViaDogZnVuY3Rpb24gaXN1YmgoeDAsIHgxLCB5MCwgeTEpIHtcbiAgICAgICAgdmFyICR4MCA9IHgwID4+PiAwO1xuICAgICAgICB2YXIgJHgxID0geDEgPj4+IDA7XG4gICAgICAgIHZhciAkeTAgPSB5MCA+Pj4gMDtcbiAgICAgICAgcmV0dXJuICR4MSAtICh5MSA+Pj4gMCkgLSAoKH4keDAgJiAkeTAgfCB+KCR4MCBeICR5MCkgJiAkeDAgLSAkeTAgPj4+IDApID4+PiAzMSkgfCAwO1xuICAgICAgfVxuICAgIH0pO1xuICB9LCB7XG4gICAgXCIzM1wiOiAzM1xuICB9XSxcbiAgMjg0OiBbZnVuY3Rpb24gKF9kZXJlcV8sIG1vZHVsZSwgZXhwb3J0cykge1xuICAgIC8vIGh0dHBzOi8vcndhbGRyb24uZ2l0aHViLmlvL3Byb3Bvc2FsLW1hdGgtZXh0ZW5zaW9ucy9cbiAgICB2YXIgJGV4cG9ydCA9IF9kZXJlcV8oMzMpO1xuXG4gICAgJGV4cG9ydCgkZXhwb3J0LlMsICdNYXRoJywge1xuICAgICAgUkFEX1BFUl9ERUc6IDE4MCAvIE1hdGguUElcbiAgICB9KTtcbiAgfSwge1xuICAgIFwiMzNcIjogMzNcbiAgfV0sXG4gIDI4NTogW2Z1bmN0aW9uIChfZGVyZXFfLCBtb2R1bGUsIGV4cG9ydHMpIHtcbiAgICAvLyBodHRwczovL3J3YWxkcm9uLmdpdGh1Yi5pby9wcm9wb3NhbC1tYXRoLWV4dGVuc2lvbnMvXG4gICAgdmFyICRleHBvcnQgPSBfZGVyZXFfKDMzKTtcblxuICAgIHZhciBERUdfUEVSX1JBRCA9IE1hdGguUEkgLyAxODA7XG4gICAgJGV4cG9ydCgkZXhwb3J0LlMsICdNYXRoJywge1xuICAgICAgcmFkaWFuczogZnVuY3Rpb24gcmFkaWFucyhkZWdyZWVzKSB7XG4gICAgICAgIHJldHVybiBkZWdyZWVzICogREVHX1BFUl9SQUQ7XG4gICAgICB9XG4gICAgfSk7XG4gIH0sIHtcbiAgICBcIjMzXCI6IDMzXG4gIH1dLFxuICAyODY6IFtmdW5jdGlvbiAoX2RlcmVxXywgbW9kdWxlLCBleHBvcnRzKSB7XG4gICAgLy8gaHR0cHM6Ly9yd2FsZHJvbi5naXRodWIuaW8vcHJvcG9zYWwtbWF0aC1leHRlbnNpb25zL1xuICAgIHZhciAkZXhwb3J0ID0gX2RlcmVxXygzMyk7XG5cbiAgICAkZXhwb3J0KCRleHBvcnQuUywgJ01hdGgnLCB7XG4gICAgICBzY2FsZTogX2RlcmVxXyg2NClcbiAgICB9KTtcbiAgfSwge1xuICAgIFwiMzNcIjogMzMsXG4gICAgXCI2NFwiOiA2NFxuICB9XSxcbiAgMjg3OiBbZnVuY3Rpb24gKF9kZXJlcV8sIG1vZHVsZSwgZXhwb3J0cykge1xuICAgIC8vIGh0dHA6Ly9qZmJhc3RpZW4uZ2l0aHViLmlvL3BhcGVycy9NYXRoLnNpZ25iaXQuaHRtbFxuICAgIHZhciAkZXhwb3J0ID0gX2RlcmVxXygzMyk7XG5cbiAgICAkZXhwb3J0KCRleHBvcnQuUywgJ01hdGgnLCB7XG4gICAgICBzaWduYml0OiBmdW5jdGlvbiBzaWduYml0KHgpIHtcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXNlbGYtY29tcGFyZVxuICAgICAgICByZXR1cm4gKHggPSAreCkgIT0geCA/IHggOiB4ID09IDAgPyAxIC8geCA9PSBJbmZpbml0eSA6IHggPiAwO1xuICAgICAgfVxuICAgIH0pO1xuICB9LCB7XG4gICAgXCIzM1wiOiAzM1xuICB9XSxcbiAgMjg4OiBbZnVuY3Rpb24gKF9kZXJlcV8sIG1vZHVsZSwgZXhwb3J0cykge1xuICAgIC8vIGh0dHBzOi8vZ2lzdC5naXRodWIuY29tL0JyZW5kYW5FaWNoLzQyOTRkNWMyMTJhNmQyMjU0NzAzXG4gICAgdmFyICRleHBvcnQgPSBfZGVyZXFfKDMzKTtcblxuICAgICRleHBvcnQoJGV4cG9ydC5TLCAnTWF0aCcsIHtcbiAgICAgIHVtdWxoOiBmdW5jdGlvbiB1bXVsaCh1LCB2KSB7XG4gICAgICAgIHZhciBVSU5UMTYgPSAweGZmZmY7XG4gICAgICAgIHZhciAkdSA9ICt1O1xuICAgICAgICB2YXIgJHYgPSArdjtcbiAgICAgICAgdmFyIHUwID0gJHUgJiBVSU5UMTY7XG4gICAgICAgIHZhciB2MCA9ICR2ICYgVUlOVDE2O1xuICAgICAgICB2YXIgdTEgPSAkdSA+Pj4gMTY7XG4gICAgICAgIHZhciB2MSA9ICR2ID4+PiAxNjtcbiAgICAgICAgdmFyIHQgPSAodTEgKiB2MCA+Pj4gMCkgKyAodTAgKiB2MCA+Pj4gMTYpO1xuICAgICAgICByZXR1cm4gdTEgKiB2MSArICh0ID4+PiAxNikgKyAoKHUwICogdjEgPj4+IDApICsgKHQgJiBVSU5UMTYpID4+PiAxNik7XG4gICAgICB9XG4gICAgfSk7XG4gIH0sIHtcbiAgICBcIjMzXCI6IDMzXG4gIH1dLFxuICAyODk6IFtmdW5jdGlvbiAoX2RlcmVxXywgbW9kdWxlLCBleHBvcnRzKSB7XG4gICAgJ3VzZSBzdHJpY3QnO1xuXG4gICAgdmFyICRleHBvcnQgPSBfZGVyZXFfKDMzKTtcblxuICAgIHZhciB0b09iamVjdCA9IF9kZXJlcV8oMTE5KTtcblxuICAgIHZhciBhRnVuY3Rpb24gPSBfZGVyZXFfKDMpO1xuXG4gICAgdmFyICRkZWZpbmVQcm9wZXJ0eSA9IF9kZXJlcV8oNzIpOyAvLyBCLjIuMi4yIE9iamVjdC5wcm90b3R5cGUuX19kZWZpbmVHZXR0ZXJfXyhQLCBnZXR0ZXIpXG5cblxuICAgIF9kZXJlcV8oMjkpICYmICRleHBvcnQoJGV4cG9ydC5QICsgX2RlcmVxXyg3NCksICdPYmplY3QnLCB7XG4gICAgICBfX2RlZmluZUdldHRlcl9fOiBmdW5jdGlvbiBfX2RlZmluZUdldHRlcl9fKFAsIGdldHRlcikge1xuICAgICAgICAkZGVmaW5lUHJvcGVydHkuZih0b09iamVjdCh0aGlzKSwgUCwge1xuICAgICAgICAgIGdldDogYUZ1bmN0aW9uKGdldHRlciksXG4gICAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfSk7XG4gIH0sIHtcbiAgICBcIjExOVwiOiAxMTksXG4gICAgXCIyOVwiOiAyOSxcbiAgICBcIjNcIjogMyxcbiAgICBcIjMzXCI6IDMzLFxuICAgIFwiNzJcIjogNzIsXG4gICAgXCI3NFwiOiA3NFxuICB9XSxcbiAgMjkwOiBbZnVuY3Rpb24gKF9kZXJlcV8sIG1vZHVsZSwgZXhwb3J0cykge1xuICAgICd1c2Ugc3RyaWN0JztcblxuICAgIHZhciAkZXhwb3J0ID0gX2RlcmVxXygzMyk7XG5cbiAgICB2YXIgdG9PYmplY3QgPSBfZGVyZXFfKDExOSk7XG5cbiAgICB2YXIgYUZ1bmN0aW9uID0gX2RlcmVxXygzKTtcblxuICAgIHZhciAkZGVmaW5lUHJvcGVydHkgPSBfZGVyZXFfKDcyKTsgLy8gQi4yLjIuMyBPYmplY3QucHJvdG90eXBlLl9fZGVmaW5lU2V0dGVyX18oUCwgc2V0dGVyKVxuXG5cbiAgICBfZGVyZXFfKDI5KSAmJiAkZXhwb3J0KCRleHBvcnQuUCArIF9kZXJlcV8oNzQpLCAnT2JqZWN0Jywge1xuICAgICAgX19kZWZpbmVTZXR0ZXJfXzogZnVuY3Rpb24gX19kZWZpbmVTZXR0ZXJfXyhQLCBzZXR0ZXIpIHtcbiAgICAgICAgJGRlZmluZVByb3BlcnR5LmYodG9PYmplY3QodGhpcyksIFAsIHtcbiAgICAgICAgICBzZXQ6IGFGdW5jdGlvbihzZXR0ZXIpLFxuICAgICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH0pO1xuICB9LCB7XG4gICAgXCIxMTlcIjogMTE5LFxuICAgIFwiMjlcIjogMjksXG4gICAgXCIzXCI6IDMsXG4gICAgXCIzM1wiOiAzMyxcbiAgICBcIjcyXCI6IDcyLFxuICAgIFwiNzRcIjogNzRcbiAgfV0sXG4gIDI5MTogW2Z1bmN0aW9uIChfZGVyZXFfLCBtb2R1bGUsIGV4cG9ydHMpIHtcbiAgICAvLyBodHRwczovL2dpdGh1Yi5jb20vdGMzOS9wcm9wb3NhbC1vYmplY3QtdmFsdWVzLWVudHJpZXNcbiAgICB2YXIgJGV4cG9ydCA9IF9kZXJlcV8oMzMpO1xuXG4gICAgdmFyICRlbnRyaWVzID0gX2RlcmVxXyg4NCkodHJ1ZSk7XG5cbiAgICAkZXhwb3J0KCRleHBvcnQuUywgJ09iamVjdCcsIHtcbiAgICAgIGVudHJpZXM6IGZ1bmN0aW9uIGVudHJpZXMoaXQpIHtcbiAgICAgICAgcmV0dXJuICRlbnRyaWVzKGl0KTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfSwge1xuICAgIFwiMzNcIjogMzMsXG4gICAgXCI4NFwiOiA4NFxuICB9XSxcbiAgMjkyOiBbZnVuY3Rpb24gKF9kZXJlcV8sIG1vZHVsZSwgZXhwb3J0cykge1xuICAgIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS90YzM5L3Byb3Bvc2FsLW9iamVjdC1nZXRvd25wcm9wZXJ0eWRlc2NyaXB0b3JzXG4gICAgdmFyICRleHBvcnQgPSBfZGVyZXFfKDMzKTtcblxuICAgIHZhciBvd25LZXlzID0gX2RlcmVxXyg4NSk7XG5cbiAgICB2YXIgdG9JT2JqZWN0ID0gX2RlcmVxXygxMTcpO1xuXG4gICAgdmFyIGdPUEQgPSBfZGVyZXFfKDc1KTtcblxuICAgIHZhciBjcmVhdGVQcm9wZXJ0eSA9IF9kZXJlcV8oMjQpO1xuXG4gICAgJGV4cG9ydCgkZXhwb3J0LlMsICdPYmplY3QnLCB7XG4gICAgICBnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3JzOiBmdW5jdGlvbiBnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3JzKG9iamVjdCkge1xuICAgICAgICB2YXIgTyA9IHRvSU9iamVjdChvYmplY3QpO1xuICAgICAgICB2YXIgZ2V0RGVzYyA9IGdPUEQuZjtcbiAgICAgICAgdmFyIGtleXMgPSBvd25LZXlzKE8pO1xuICAgICAgICB2YXIgcmVzdWx0ID0ge307XG4gICAgICAgIHZhciBpID0gMDtcbiAgICAgICAgdmFyIGtleSwgZGVzYztcblxuICAgICAgICB3aGlsZSAoa2V5cy5sZW5ndGggPiBpKSB7XG4gICAgICAgICAgZGVzYyA9IGdldERlc2MoTywga2V5ID0ga2V5c1tpKytdKTtcbiAgICAgICAgICBpZiAoZGVzYyAhPT0gdW5kZWZpbmVkKSBjcmVhdGVQcm9wZXJ0eShyZXN1bHQsIGtleSwgZGVzYyk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgICAgfVxuICAgIH0pO1xuICB9LCB7XG4gICAgXCIxMTdcIjogMTE3LFxuICAgIFwiMjRcIjogMjQsXG4gICAgXCIzM1wiOiAzMyxcbiAgICBcIjc1XCI6IDc1LFxuICAgIFwiODVcIjogODVcbiAgfV0sXG4gIDI5MzogW2Z1bmN0aW9uIChfZGVyZXFfLCBtb2R1bGUsIGV4cG9ydHMpIHtcbiAgICAndXNlIHN0cmljdCc7XG5cbiAgICB2YXIgJGV4cG9ydCA9IF9kZXJlcV8oMzMpO1xuXG4gICAgdmFyIHRvT2JqZWN0ID0gX2RlcmVxXygxMTkpO1xuXG4gICAgdmFyIHRvUHJpbWl0aXZlID0gX2RlcmVxXygxMjApO1xuXG4gICAgdmFyIGdldFByb3RvdHlwZU9mID0gX2RlcmVxXyg3OSk7XG5cbiAgICB2YXIgZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yID0gX2RlcmVxXyg3NSkuZjsgLy8gQi4yLjIuNCBPYmplY3QucHJvdG90eXBlLl9fbG9va3VwR2V0dGVyX18oUClcblxuXG4gICAgX2RlcmVxXygyOSkgJiYgJGV4cG9ydCgkZXhwb3J0LlAgKyBfZGVyZXFfKDc0KSwgJ09iamVjdCcsIHtcbiAgICAgIF9fbG9va3VwR2V0dGVyX186IGZ1bmN0aW9uIF9fbG9va3VwR2V0dGVyX18oUCkge1xuICAgICAgICB2YXIgTyA9IHRvT2JqZWN0KHRoaXMpO1xuICAgICAgICB2YXIgSyA9IHRvUHJpbWl0aXZlKFAsIHRydWUpO1xuICAgICAgICB2YXIgRDtcblxuICAgICAgICBkbyB7XG4gICAgICAgICAgaWYgKEQgPSBnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoTywgSykpIHJldHVybiBELmdldDtcbiAgICAgICAgfSB3aGlsZSAoTyA9IGdldFByb3RvdHlwZU9mKE8pKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfSwge1xuICAgIFwiMTE5XCI6IDExOSxcbiAgICBcIjEyMFwiOiAxMjAsXG4gICAgXCIyOVwiOiAyOSxcbiAgICBcIjMzXCI6IDMzLFxuICAgIFwiNzRcIjogNzQsXG4gICAgXCI3NVwiOiA3NSxcbiAgICBcIjc5XCI6IDc5XG4gIH1dLFxuICAyOTQ6IFtmdW5jdGlvbiAoX2RlcmVxXywgbW9kdWxlLCBleHBvcnRzKSB7XG4gICAgJ3VzZSBzdHJpY3QnO1xuXG4gICAgdmFyICRleHBvcnQgPSBfZGVyZXFfKDMzKTtcblxuICAgIHZhciB0b09iamVjdCA9IF9kZXJlcV8oMTE5KTtcblxuICAgIHZhciB0b1ByaW1pdGl2ZSA9IF9kZXJlcV8oMTIwKTtcblxuICAgIHZhciBnZXRQcm90b3R5cGVPZiA9IF9kZXJlcV8oNzkpO1xuXG4gICAgdmFyIGdldE93blByb3BlcnR5RGVzY3JpcHRvciA9IF9kZXJlcV8oNzUpLmY7IC8vIEIuMi4yLjUgT2JqZWN0LnByb3RvdHlwZS5fX2xvb2t1cFNldHRlcl9fKFApXG5cblxuICAgIF9kZXJlcV8oMjkpICYmICRleHBvcnQoJGV4cG9ydC5QICsgX2RlcmVxXyg3NCksICdPYmplY3QnLCB7XG4gICAgICBfX2xvb2t1cFNldHRlcl9fOiBmdW5jdGlvbiBfX2xvb2t1cFNldHRlcl9fKFApIHtcbiAgICAgICAgdmFyIE8gPSB0b09iamVjdCh0aGlzKTtcbiAgICAgICAgdmFyIEsgPSB0b1ByaW1pdGl2ZShQLCB0cnVlKTtcbiAgICAgICAgdmFyIEQ7XG5cbiAgICAgICAgZG8ge1xuICAgICAgICAgIGlmIChEID0gZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKE8sIEspKSByZXR1cm4gRC5zZXQ7XG4gICAgICAgIH0gd2hpbGUgKE8gPSBnZXRQcm90b3R5cGVPZihPKSk7XG4gICAgICB9XG4gICAgfSk7XG4gIH0sIHtcbiAgICBcIjExOVwiOiAxMTksXG4gICAgXCIxMjBcIjogMTIwLFxuICAgIFwiMjlcIjogMjksXG4gICAgXCIzM1wiOiAzMyxcbiAgICBcIjc0XCI6IDc0LFxuICAgIFwiNzVcIjogNzUsXG4gICAgXCI3OVwiOiA3OVxuICB9XSxcbiAgMjk1OiBbZnVuY3Rpb24gKF9kZXJlcV8sIG1vZHVsZSwgZXhwb3J0cykge1xuICAgIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS90YzM5L3Byb3Bvc2FsLW9iamVjdC12YWx1ZXMtZW50cmllc1xuICAgIHZhciAkZXhwb3J0ID0gX2RlcmVxXygzMyk7XG5cbiAgICB2YXIgJHZhbHVlcyA9IF9kZXJlcV8oODQpKGZhbHNlKTtcblxuICAgICRleHBvcnQoJGV4cG9ydC5TLCAnT2JqZWN0Jywge1xuICAgICAgdmFsdWVzOiBmdW5jdGlvbiB2YWx1ZXMoaXQpIHtcbiAgICAgICAgcmV0dXJuICR2YWx1ZXMoaXQpO1xuICAgICAgfVxuICAgIH0pO1xuICB9LCB7XG4gICAgXCIzM1wiOiAzMyxcbiAgICBcIjg0XCI6IDg0XG4gIH1dLFxuICAyOTY6IFtmdW5jdGlvbiAoX2RlcmVxXywgbW9kdWxlLCBleHBvcnRzKSB7XG4gICAgJ3VzZSBzdHJpY3QnOyAvLyBodHRwczovL2dpdGh1Yi5jb20vemVucGFyc2luZy9lcy1vYnNlcnZhYmxlXG5cbiAgICB2YXIgJGV4cG9ydCA9IF9kZXJlcV8oMzMpO1xuXG4gICAgdmFyIGdsb2JhbCA9IF9kZXJlcV8oNDApO1xuXG4gICAgdmFyIGNvcmUgPSBfZGVyZXFfKDIzKTtcblxuICAgIHZhciBtaWNyb3Rhc2sgPSBfZGVyZXFfKDY4KSgpO1xuXG4gICAgdmFyIE9CU0VSVkFCTEUgPSBfZGVyZXFfKDEyOCkoJ29ic2VydmFibGUnKTtcblxuICAgIHZhciBhRnVuY3Rpb24gPSBfZGVyZXFfKDMpO1xuXG4gICAgdmFyIGFuT2JqZWN0ID0gX2RlcmVxXyg3KTtcblxuICAgIHZhciBhbkluc3RhbmNlID0gX2RlcmVxXyg2KTtcblxuICAgIHZhciByZWRlZmluZUFsbCA9IF9kZXJlcV8oOTMpO1xuXG4gICAgdmFyIGhpZGUgPSBfZGVyZXFfKDQyKTtcblxuICAgIHZhciBmb3JPZiA9IF9kZXJlcV8oMzkpO1xuXG4gICAgdmFyIFJFVFVSTiA9IGZvck9mLlJFVFVSTjtcblxuICAgIHZhciBnZXRNZXRob2QgPSBmdW5jdGlvbiBnZXRNZXRob2QoZm4pIHtcbiAgICAgIHJldHVybiBmbiA9PSBudWxsID8gdW5kZWZpbmVkIDogYUZ1bmN0aW9uKGZuKTtcbiAgICB9O1xuXG4gICAgdmFyIGNsZWFudXBTdWJzY3JpcHRpb24gPSBmdW5jdGlvbiBjbGVhbnVwU3Vic2NyaXB0aW9uKHN1YnNjcmlwdGlvbikge1xuICAgICAgdmFyIGNsZWFudXAgPSBzdWJzY3JpcHRpb24uX2M7XG5cbiAgICAgIGlmIChjbGVhbnVwKSB7XG4gICAgICAgIHN1YnNjcmlwdGlvbi5fYyA9IHVuZGVmaW5lZDtcbiAgICAgICAgY2xlYW51cCgpO1xuICAgICAgfVxuICAgIH07XG5cbiAgICB2YXIgc3Vic2NyaXB0aW9uQ2xvc2VkID0gZnVuY3Rpb24gc3Vic2NyaXB0aW9uQ2xvc2VkKHN1YnNjcmlwdGlvbikge1xuICAgICAgcmV0dXJuIHN1YnNjcmlwdGlvbi5fbyA9PT0gdW5kZWZpbmVkO1xuICAgIH07XG5cbiAgICB2YXIgY2xvc2VTdWJzY3JpcHRpb24gPSBmdW5jdGlvbiBjbG9zZVN1YnNjcmlwdGlvbihzdWJzY3JpcHRpb24pIHtcbiAgICAgIGlmICghc3Vic2NyaXB0aW9uQ2xvc2VkKHN1YnNjcmlwdGlvbikpIHtcbiAgICAgICAgc3Vic2NyaXB0aW9uLl9vID0gdW5kZWZpbmVkO1xuICAgICAgICBjbGVhbnVwU3Vic2NyaXB0aW9uKHN1YnNjcmlwdGlvbik7XG4gICAgICB9XG4gICAgfTtcblxuICAgIHZhciBTdWJzY3JpcHRpb24gPSBmdW5jdGlvbiBTdWJzY3JpcHRpb24ob2JzZXJ2ZXIsIHN1YnNjcmliZXIpIHtcbiAgICAgIGFuT2JqZWN0KG9ic2VydmVyKTtcbiAgICAgIHRoaXMuX2MgPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLl9vID0gb2JzZXJ2ZXI7XG4gICAgICBvYnNlcnZlciA9IG5ldyBTdWJzY3JpcHRpb25PYnNlcnZlcih0aGlzKTtcblxuICAgICAgdHJ5IHtcbiAgICAgICAgdmFyIGNsZWFudXAgPSBzdWJzY3JpYmVyKG9ic2VydmVyKTtcbiAgICAgICAgdmFyIHN1YnNjcmlwdGlvbiA9IGNsZWFudXA7XG5cbiAgICAgICAgaWYgKGNsZWFudXAgIT0gbnVsbCkge1xuICAgICAgICAgIGlmICh0eXBlb2YgY2xlYW51cC51bnN1YnNjcmliZSA9PT0gJ2Z1bmN0aW9uJykgY2xlYW51cCA9IGZ1bmN0aW9uIGNsZWFudXAoKSB7XG4gICAgICAgICAgICBzdWJzY3JpcHRpb24udW5zdWJzY3JpYmUoKTtcbiAgICAgICAgICB9O2Vsc2UgYUZ1bmN0aW9uKGNsZWFudXApO1xuICAgICAgICAgIHRoaXMuX2MgPSBjbGVhbnVwO1xuICAgICAgICB9XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIG9ic2VydmVyLmVycm9yKGUpO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGlmIChzdWJzY3JpcHRpb25DbG9zZWQodGhpcykpIGNsZWFudXBTdWJzY3JpcHRpb24odGhpcyk7XG4gICAgfTtcblxuICAgIFN1YnNjcmlwdGlvbi5wcm90b3R5cGUgPSByZWRlZmluZUFsbCh7fSwge1xuICAgICAgdW5zdWJzY3JpYmU6IGZ1bmN0aW9uIHVuc3Vic2NyaWJlKCkge1xuICAgICAgICBjbG9zZVN1YnNjcmlwdGlvbih0aGlzKTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHZhciBTdWJzY3JpcHRpb25PYnNlcnZlciA9IGZ1bmN0aW9uIFN1YnNjcmlwdGlvbk9ic2VydmVyKHN1YnNjcmlwdGlvbikge1xuICAgICAgdGhpcy5fcyA9IHN1YnNjcmlwdGlvbjtcbiAgICB9O1xuXG4gICAgU3Vic2NyaXB0aW9uT2JzZXJ2ZXIucHJvdG90eXBlID0gcmVkZWZpbmVBbGwoe30sIHtcbiAgICAgIG5leHQ6IGZ1bmN0aW9uIG5leHQodmFsdWUpIHtcbiAgICAgICAgdmFyIHN1YnNjcmlwdGlvbiA9IHRoaXMuX3M7XG5cbiAgICAgICAgaWYgKCFzdWJzY3JpcHRpb25DbG9zZWQoc3Vic2NyaXB0aW9uKSkge1xuICAgICAgICAgIHZhciBvYnNlcnZlciA9IHN1YnNjcmlwdGlvbi5fbztcblxuICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICB2YXIgbSA9IGdldE1ldGhvZChvYnNlcnZlci5uZXh0KTtcbiAgICAgICAgICAgIGlmIChtKSByZXR1cm4gbS5jYWxsKG9ic2VydmVyLCB2YWx1ZSk7XG4gICAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgY2xvc2VTdWJzY3JpcHRpb24oc3Vic2NyaXB0aW9uKTtcbiAgICAgICAgICAgIH0gZmluYWxseSB7XG4gICAgICAgICAgICAgIHRocm93IGU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgZXJyb3I6IGZ1bmN0aW9uIGVycm9yKHZhbHVlKSB7XG4gICAgICAgIHZhciBzdWJzY3JpcHRpb24gPSB0aGlzLl9zO1xuICAgICAgICBpZiAoc3Vic2NyaXB0aW9uQ2xvc2VkKHN1YnNjcmlwdGlvbikpIHRocm93IHZhbHVlO1xuICAgICAgICB2YXIgb2JzZXJ2ZXIgPSBzdWJzY3JpcHRpb24uX287XG4gICAgICAgIHN1YnNjcmlwdGlvbi5fbyA9IHVuZGVmaW5lZDtcblxuICAgICAgICB0cnkge1xuICAgICAgICAgIHZhciBtID0gZ2V0TWV0aG9kKG9ic2VydmVyLmVycm9yKTtcbiAgICAgICAgICBpZiAoIW0pIHRocm93IHZhbHVlO1xuICAgICAgICAgIHZhbHVlID0gbS5jYWxsKG9ic2VydmVyLCB2YWx1ZSk7XG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgY2xlYW51cFN1YnNjcmlwdGlvbihzdWJzY3JpcHRpb24pO1xuICAgICAgICAgIH0gZmluYWxseSB7XG4gICAgICAgICAgICB0aHJvdyBlO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGNsZWFudXBTdWJzY3JpcHRpb24oc3Vic2NyaXB0aW9uKTtcbiAgICAgICAgcmV0dXJuIHZhbHVlO1xuICAgICAgfSxcbiAgICAgIGNvbXBsZXRlOiBmdW5jdGlvbiBjb21wbGV0ZSh2YWx1ZSkge1xuICAgICAgICB2YXIgc3Vic2NyaXB0aW9uID0gdGhpcy5fcztcblxuICAgICAgICBpZiAoIXN1YnNjcmlwdGlvbkNsb3NlZChzdWJzY3JpcHRpb24pKSB7XG4gICAgICAgICAgdmFyIG9ic2VydmVyID0gc3Vic2NyaXB0aW9uLl9vO1xuICAgICAgICAgIHN1YnNjcmlwdGlvbi5fbyA9IHVuZGVmaW5lZDtcblxuICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICB2YXIgbSA9IGdldE1ldGhvZChvYnNlcnZlci5jb21wbGV0ZSk7XG4gICAgICAgICAgICB2YWx1ZSA9IG0gPyBtLmNhbGwob2JzZXJ2ZXIsIHZhbHVlKSA6IHVuZGVmaW5lZDtcbiAgICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICBjbGVhbnVwU3Vic2NyaXB0aW9uKHN1YnNjcmlwdGlvbik7XG4gICAgICAgICAgICB9IGZpbmFsbHkge1xuICAgICAgICAgICAgICB0aHJvdyBlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cblxuICAgICAgICAgIGNsZWFudXBTdWJzY3JpcHRpb24oc3Vic2NyaXB0aW9uKTtcbiAgICAgICAgICByZXR1cm4gdmFsdWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHZhciAkT2JzZXJ2YWJsZSA9IGZ1bmN0aW9uIE9ic2VydmFibGUoc3Vic2NyaWJlcikge1xuICAgICAgYW5JbnN0YW5jZSh0aGlzLCAkT2JzZXJ2YWJsZSwgJ09ic2VydmFibGUnLCAnX2YnKS5fZiA9IGFGdW5jdGlvbihzdWJzY3JpYmVyKTtcbiAgICB9O1xuXG4gICAgcmVkZWZpbmVBbGwoJE9ic2VydmFibGUucHJvdG90eXBlLCB7XG4gICAgICBzdWJzY3JpYmU6IGZ1bmN0aW9uIHN1YnNjcmliZShvYnNlcnZlcikge1xuICAgICAgICByZXR1cm4gbmV3IFN1YnNjcmlwdGlvbihvYnNlcnZlciwgdGhpcy5fZik7XG4gICAgICB9LFxuICAgICAgZm9yRWFjaDogZnVuY3Rpb24gZm9yRWFjaChmbikge1xuICAgICAgICB2YXIgdGhhdCA9IHRoaXM7XG4gICAgICAgIHJldHVybiBuZXcgKGNvcmUuUHJvbWlzZSB8fCBnbG9iYWwuUHJvbWlzZSkoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICAgIGFGdW5jdGlvbihmbik7XG4gICAgICAgICAgdmFyIHN1YnNjcmlwdGlvbiA9IHRoYXQuc3Vic2NyaWJlKHtcbiAgICAgICAgICAgIG5leHQ6IGZ1bmN0aW9uIG5leHQodmFsdWUpIHtcbiAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZm4odmFsdWUpO1xuICAgICAgICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgICAgICAgcmVqZWN0KGUpO1xuICAgICAgICAgICAgICAgIHN1YnNjcmlwdGlvbi51bnN1YnNjcmliZSgpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZXJyb3I6IHJlamVjdCxcbiAgICAgICAgICAgIGNvbXBsZXRlOiByZXNvbHZlXG4gICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH0pO1xuICAgIHJlZGVmaW5lQWxsKCRPYnNlcnZhYmxlLCB7XG4gICAgICBmcm9tOiBmdW5jdGlvbiBmcm9tKHgpIHtcbiAgICAgICAgdmFyIEMgPSB0eXBlb2YgdGhpcyA9PT0gJ2Z1bmN0aW9uJyA/IHRoaXMgOiAkT2JzZXJ2YWJsZTtcbiAgICAgICAgdmFyIG1ldGhvZCA9IGdldE1ldGhvZChhbk9iamVjdCh4KVtPQlNFUlZBQkxFXSk7XG5cbiAgICAgICAgaWYgKG1ldGhvZCkge1xuICAgICAgICAgIHZhciBvYnNlcnZhYmxlID0gYW5PYmplY3QobWV0aG9kLmNhbGwoeCkpO1xuICAgICAgICAgIHJldHVybiBvYnNlcnZhYmxlLmNvbnN0cnVjdG9yID09PSBDID8gb2JzZXJ2YWJsZSA6IG5ldyBDKGZ1bmN0aW9uIChvYnNlcnZlcikge1xuICAgICAgICAgICAgcmV0dXJuIG9ic2VydmFibGUuc3Vic2NyaWJlKG9ic2VydmVyKTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBuZXcgQyhmdW5jdGlvbiAob2JzZXJ2ZXIpIHtcbiAgICAgICAgICB2YXIgZG9uZSA9IGZhbHNlO1xuICAgICAgICAgIG1pY3JvdGFzayhmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBpZiAoIWRvbmUpIHtcbiAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICBpZiAoZm9yT2YoeCwgZmFsc2UsIGZ1bmN0aW9uIChpdCkge1xuICAgICAgICAgICAgICAgICAgb2JzZXJ2ZXIubmV4dChpdCk7XG4gICAgICAgICAgICAgICAgICBpZiAoZG9uZSkgcmV0dXJuIFJFVFVSTjtcbiAgICAgICAgICAgICAgICB9KSA9PT0gUkVUVVJOKSByZXR1cm47XG4gICAgICAgICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgICAgICBpZiAoZG9uZSkgdGhyb3cgZTtcbiAgICAgICAgICAgICAgICBvYnNlcnZlci5lcnJvcihlKTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICBvYnNlcnZlci5jb21wbGV0ZSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pO1xuICAgICAgICAgIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBkb25lID0gdHJ1ZTtcbiAgICAgICAgICB9O1xuICAgICAgICB9KTtcbiAgICAgIH0sXG4gICAgICBvZjogZnVuY3Rpb24gb2YoKSB7XG4gICAgICAgIGZvciAodmFyIGkgPSAwLCBsID0gYXJndW1lbnRzLmxlbmd0aCwgaXRlbXMgPSBBcnJheShsKTsgaSA8IGw7KSB7XG4gICAgICAgICAgaXRlbXNbaV0gPSBhcmd1bWVudHNbaSsrXTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBuZXcgKHR5cGVvZiB0aGlzID09PSAnZnVuY3Rpb24nID8gdGhpcyA6ICRPYnNlcnZhYmxlKShmdW5jdGlvbiAob2JzZXJ2ZXIpIHtcbiAgICAgICAgICB2YXIgZG9uZSA9IGZhbHNlO1xuICAgICAgICAgIG1pY3JvdGFzayhmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBpZiAoIWRvbmUpIHtcbiAgICAgICAgICAgICAgZm9yICh2YXIgaiA9IDA7IGogPCBpdGVtcy5sZW5ndGg7ICsraikge1xuICAgICAgICAgICAgICAgIG9ic2VydmVyLm5leHQoaXRlbXNbal0pO1xuICAgICAgICAgICAgICAgIGlmIChkb25lKSByZXR1cm47XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICBvYnNlcnZlci5jb21wbGV0ZSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pO1xuICAgICAgICAgIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBkb25lID0gdHJ1ZTtcbiAgICAgICAgICB9O1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICBoaWRlKCRPYnNlcnZhYmxlLnByb3RvdHlwZSwgT0JTRVJWQUJMRSwgZnVuY3Rpb24gKCkge1xuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfSk7XG4gICAgJGV4cG9ydCgkZXhwb3J0LkcsIHtcbiAgICAgIE9ic2VydmFibGU6ICRPYnNlcnZhYmxlXG4gICAgfSk7XG5cbiAgICBfZGVyZXFfKDEwMCkoJ09ic2VydmFibGUnKTtcbiAgfSwge1xuICAgIFwiMTAwXCI6IDEwMCxcbiAgICBcIjEyOFwiOiAxMjgsXG4gICAgXCIyM1wiOiAyMyxcbiAgICBcIjNcIjogMyxcbiAgICBcIjMzXCI6IDMzLFxuICAgIFwiMzlcIjogMzksXG4gICAgXCI0MFwiOiA0MCxcbiAgICBcIjQyXCI6IDQyLFxuICAgIFwiNlwiOiA2LFxuICAgIFwiNjhcIjogNjgsXG4gICAgXCI3XCI6IDcsXG4gICAgXCI5M1wiOiA5M1xuICB9XSxcbiAgMjk3OiBbZnVuY3Rpb24gKF9kZXJlcV8sIG1vZHVsZSwgZXhwb3J0cykge1xuICAgIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS90YzM5L3Byb3Bvc2FsLXByb21pc2UtZmluYWxseVxuICAgICd1c2Ugc3RyaWN0JztcblxuICAgIHZhciAkZXhwb3J0ID0gX2RlcmVxXygzMyk7XG5cbiAgICB2YXIgY29yZSA9IF9kZXJlcV8oMjMpO1xuXG4gICAgdmFyIGdsb2JhbCA9IF9kZXJlcV8oNDApO1xuXG4gICAgdmFyIHNwZWNpZXNDb25zdHJ1Y3RvciA9IF9kZXJlcV8oMTA0KTtcblxuICAgIHZhciBwcm9taXNlUmVzb2x2ZSA9IF9kZXJlcV8oOTEpO1xuXG4gICAgJGV4cG9ydCgkZXhwb3J0LlAgKyAkZXhwb3J0LlIsICdQcm9taXNlJywge1xuICAgICAgJ2ZpbmFsbHknOiBmdW5jdGlvbiBfZmluYWxseShvbkZpbmFsbHkpIHtcbiAgICAgICAgdmFyIEMgPSBzcGVjaWVzQ29uc3RydWN0b3IodGhpcywgY29yZS5Qcm9taXNlIHx8IGdsb2JhbC5Qcm9taXNlKTtcbiAgICAgICAgdmFyIGlzRnVuY3Rpb24gPSB0eXBlb2Ygb25GaW5hbGx5ID09ICdmdW5jdGlvbic7XG4gICAgICAgIHJldHVybiB0aGlzLnRoZW4oaXNGdW5jdGlvbiA/IGZ1bmN0aW9uICh4KSB7XG4gICAgICAgICAgcmV0dXJuIHByb21pc2VSZXNvbHZlKEMsIG9uRmluYWxseSgpKS50aGVuKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiB4O1xuICAgICAgICAgIH0pO1xuICAgICAgICB9IDogb25GaW5hbGx5LCBpc0Z1bmN0aW9uID8gZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICByZXR1cm4gcHJvbWlzZVJlc29sdmUoQywgb25GaW5hbGx5KCkpLnRoZW4oZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdGhyb3cgZTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfSA6IG9uRmluYWxseSk7XG4gICAgICB9XG4gICAgfSk7XG4gIH0sIHtcbiAgICBcIjEwNFwiOiAxMDQsXG4gICAgXCIyM1wiOiAyMyxcbiAgICBcIjMzXCI6IDMzLFxuICAgIFwiNDBcIjogNDAsXG4gICAgXCI5MVwiOiA5MVxuICB9XSxcbiAgMjk4OiBbZnVuY3Rpb24gKF9kZXJlcV8sIG1vZHVsZSwgZXhwb3J0cykge1xuICAgICd1c2Ugc3RyaWN0JzsgLy8gaHR0cHM6Ly9naXRodWIuY29tL3RjMzkvcHJvcG9zYWwtcHJvbWlzZS10cnlcblxuICAgIHZhciAkZXhwb3J0ID0gX2RlcmVxXygzMyk7XG5cbiAgICB2YXIgbmV3UHJvbWlzZUNhcGFiaWxpdHkgPSBfZGVyZXFfKDY5KTtcblxuICAgIHZhciBwZXJmb3JtID0gX2RlcmVxXyg5MCk7XG5cbiAgICAkZXhwb3J0KCRleHBvcnQuUywgJ1Byb21pc2UnLCB7XG4gICAgICAndHJ5JzogZnVuY3Rpb24gX3RyeShjYWxsYmFja2ZuKSB7XG4gICAgICAgIHZhciBwcm9taXNlQ2FwYWJpbGl0eSA9IG5ld1Byb21pc2VDYXBhYmlsaXR5LmYodGhpcyk7XG4gICAgICAgIHZhciByZXN1bHQgPSBwZXJmb3JtKGNhbGxiYWNrZm4pO1xuICAgICAgICAocmVzdWx0LmUgPyBwcm9taXNlQ2FwYWJpbGl0eS5yZWplY3QgOiBwcm9taXNlQ2FwYWJpbGl0eS5yZXNvbHZlKShyZXN1bHQudik7XG4gICAgICAgIHJldHVybiBwcm9taXNlQ2FwYWJpbGl0eS5wcm9taXNlO1xuICAgICAgfVxuICAgIH0pO1xuICB9LCB7XG4gICAgXCIzM1wiOiAzMyxcbiAgICBcIjY5XCI6IDY5LFxuICAgIFwiOTBcIjogOTBcbiAgfV0sXG4gIDI5OTogW2Z1bmN0aW9uIChfZGVyZXFfLCBtb2R1bGUsIGV4cG9ydHMpIHtcbiAgICB2YXIgbWV0YWRhdGEgPSBfZGVyZXFfKDY3KTtcblxuICAgIHZhciBhbk9iamVjdCA9IF9kZXJlcV8oNyk7XG5cbiAgICB2YXIgdG9NZXRhS2V5ID0gbWV0YWRhdGEua2V5O1xuICAgIHZhciBvcmRpbmFyeURlZmluZU93bk1ldGFkYXRhID0gbWV0YWRhdGEuc2V0O1xuICAgIG1ldGFkYXRhLmV4cCh7XG4gICAgICBkZWZpbmVNZXRhZGF0YTogZnVuY3Rpb24gZGVmaW5lTWV0YWRhdGEobWV0YWRhdGFLZXksIG1ldGFkYXRhVmFsdWUsIHRhcmdldCwgdGFyZ2V0S2V5KSB7XG4gICAgICAgIG9yZGluYXJ5RGVmaW5lT3duTWV0YWRhdGEobWV0YWRhdGFLZXksIG1ldGFkYXRhVmFsdWUsIGFuT2JqZWN0KHRhcmdldCksIHRvTWV0YUtleSh0YXJnZXRLZXkpKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfSwge1xuICAgIFwiNjdcIjogNjcsXG4gICAgXCI3XCI6IDdcbiAgfV0sXG4gIDMwMDogW2Z1bmN0aW9uIChfZGVyZXFfLCBtb2R1bGUsIGV4cG9ydHMpIHtcbiAgICB2YXIgbWV0YWRhdGEgPSBfZGVyZXFfKDY3KTtcblxuICAgIHZhciBhbk9iamVjdCA9IF9kZXJlcV8oNyk7XG5cbiAgICB2YXIgdG9NZXRhS2V5ID0gbWV0YWRhdGEua2V5O1xuICAgIHZhciBnZXRPckNyZWF0ZU1ldGFkYXRhTWFwID0gbWV0YWRhdGEubWFwO1xuICAgIHZhciBzdG9yZSA9IG1ldGFkYXRhLnN0b3JlO1xuICAgIG1ldGFkYXRhLmV4cCh7XG4gICAgICBkZWxldGVNZXRhZGF0YTogZnVuY3Rpb24gZGVsZXRlTWV0YWRhdGEobWV0YWRhdGFLZXksIHRhcmdldFxuICAgICAgLyogLCB0YXJnZXRLZXkgKi9cbiAgICAgICkge1xuICAgICAgICB2YXIgdGFyZ2V0S2V5ID0gYXJndW1lbnRzLmxlbmd0aCA8IDMgPyB1bmRlZmluZWQgOiB0b01ldGFLZXkoYXJndW1lbnRzWzJdKTtcbiAgICAgICAgdmFyIG1ldGFkYXRhTWFwID0gZ2V0T3JDcmVhdGVNZXRhZGF0YU1hcChhbk9iamVjdCh0YXJnZXQpLCB0YXJnZXRLZXksIGZhbHNlKTtcbiAgICAgICAgaWYgKG1ldGFkYXRhTWFwID09PSB1bmRlZmluZWQgfHwgIW1ldGFkYXRhTWFwWydkZWxldGUnXShtZXRhZGF0YUtleSkpIHJldHVybiBmYWxzZTtcbiAgICAgICAgaWYgKG1ldGFkYXRhTWFwLnNpemUpIHJldHVybiB0cnVlO1xuICAgICAgICB2YXIgdGFyZ2V0TWV0YWRhdGEgPSBzdG9yZS5nZXQodGFyZ2V0KTtcbiAgICAgICAgdGFyZ2V0TWV0YWRhdGFbJ2RlbGV0ZSddKHRhcmdldEtleSk7XG4gICAgICAgIHJldHVybiAhIXRhcmdldE1ldGFkYXRhLnNpemUgfHwgc3RvcmVbJ2RlbGV0ZSddKHRhcmdldCk7XG4gICAgICB9XG4gICAgfSk7XG4gIH0sIHtcbiAgICBcIjY3XCI6IDY3LFxuICAgIFwiN1wiOiA3XG4gIH1dLFxuICAzMDE6IFtmdW5jdGlvbiAoX2RlcmVxXywgbW9kdWxlLCBleHBvcnRzKSB7XG4gICAgdmFyIFNldCA9IF9kZXJlcV8oMjMxKTtcblxuICAgIHZhciBmcm9tID0gX2RlcmVxXygxMCk7XG5cbiAgICB2YXIgbWV0YWRhdGEgPSBfZGVyZXFfKDY3KTtcblxuICAgIHZhciBhbk9iamVjdCA9IF9kZXJlcV8oNyk7XG5cbiAgICB2YXIgZ2V0UHJvdG90eXBlT2YgPSBfZGVyZXFfKDc5KTtcblxuICAgIHZhciBvcmRpbmFyeU93bk1ldGFkYXRhS2V5cyA9IG1ldGFkYXRhLmtleXM7XG4gICAgdmFyIHRvTWV0YUtleSA9IG1ldGFkYXRhLmtleTtcblxuICAgIHZhciBvcmRpbmFyeU1ldGFkYXRhS2V5cyA9IGZ1bmN0aW9uIG9yZGluYXJ5TWV0YWRhdGFLZXlzKE8sIFApIHtcbiAgICAgIHZhciBvS2V5cyA9IG9yZGluYXJ5T3duTWV0YWRhdGFLZXlzKE8sIFApO1xuICAgICAgdmFyIHBhcmVudCA9IGdldFByb3RvdHlwZU9mKE8pO1xuICAgICAgaWYgKHBhcmVudCA9PT0gbnVsbCkgcmV0dXJuIG9LZXlzO1xuICAgICAgdmFyIHBLZXlzID0gb3JkaW5hcnlNZXRhZGF0YUtleXMocGFyZW50LCBQKTtcbiAgICAgIHJldHVybiBwS2V5cy5sZW5ndGggPyBvS2V5cy5sZW5ndGggPyBmcm9tKG5ldyBTZXQob0tleXMuY29uY2F0KHBLZXlzKSkpIDogcEtleXMgOiBvS2V5cztcbiAgICB9O1xuXG4gICAgbWV0YWRhdGEuZXhwKHtcbiAgICAgIGdldE1ldGFkYXRhS2V5czogZnVuY3Rpb24gZ2V0TWV0YWRhdGFLZXlzKHRhcmdldFxuICAgICAgLyogLCB0YXJnZXRLZXkgKi9cbiAgICAgICkge1xuICAgICAgICByZXR1cm4gb3JkaW5hcnlNZXRhZGF0YUtleXMoYW5PYmplY3QodGFyZ2V0KSwgYXJndW1lbnRzLmxlbmd0aCA8IDIgPyB1bmRlZmluZWQgOiB0b01ldGFLZXkoYXJndW1lbnRzWzFdKSk7XG4gICAgICB9XG4gICAgfSk7XG4gIH0sIHtcbiAgICBcIjEwXCI6IDEwLFxuICAgIFwiMjMxXCI6IDIzMSxcbiAgICBcIjY3XCI6IDY3LFxuICAgIFwiN1wiOiA3LFxuICAgIFwiNzlcIjogNzlcbiAgfV0sXG4gIDMwMjogW2Z1bmN0aW9uIChfZGVyZXFfLCBtb2R1bGUsIGV4cG9ydHMpIHtcbiAgICB2YXIgbWV0YWRhdGEgPSBfZGVyZXFfKDY3KTtcblxuICAgIHZhciBhbk9iamVjdCA9IF9kZXJlcV8oNyk7XG5cbiAgICB2YXIgZ2V0UHJvdG90eXBlT2YgPSBfZGVyZXFfKDc5KTtcblxuICAgIHZhciBvcmRpbmFyeUhhc093bk1ldGFkYXRhID0gbWV0YWRhdGEuaGFzO1xuICAgIHZhciBvcmRpbmFyeUdldE93bk1ldGFkYXRhID0gbWV0YWRhdGEuZ2V0O1xuICAgIHZhciB0b01ldGFLZXkgPSBtZXRhZGF0YS5rZXk7XG5cbiAgICB2YXIgb3JkaW5hcnlHZXRNZXRhZGF0YSA9IGZ1bmN0aW9uIG9yZGluYXJ5R2V0TWV0YWRhdGEoTWV0YWRhdGFLZXksIE8sIFApIHtcbiAgICAgIHZhciBoYXNPd24gPSBvcmRpbmFyeUhhc093bk1ldGFkYXRhKE1ldGFkYXRhS2V5LCBPLCBQKTtcbiAgICAgIGlmIChoYXNPd24pIHJldHVybiBvcmRpbmFyeUdldE93bk1ldGFkYXRhKE1ldGFkYXRhS2V5LCBPLCBQKTtcbiAgICAgIHZhciBwYXJlbnQgPSBnZXRQcm90b3R5cGVPZihPKTtcbiAgICAgIHJldHVybiBwYXJlbnQgIT09IG51bGwgPyBvcmRpbmFyeUdldE1ldGFkYXRhKE1ldGFkYXRhS2V5LCBwYXJlbnQsIFApIDogdW5kZWZpbmVkO1xuICAgIH07XG5cbiAgICBtZXRhZGF0YS5leHAoe1xuICAgICAgZ2V0TWV0YWRhdGE6IGZ1bmN0aW9uIGdldE1ldGFkYXRhKG1ldGFkYXRhS2V5LCB0YXJnZXRcbiAgICAgIC8qICwgdGFyZ2V0S2V5ICovXG4gICAgICApIHtcbiAgICAgICAgcmV0dXJuIG9yZGluYXJ5R2V0TWV0YWRhdGEobWV0YWRhdGFLZXksIGFuT2JqZWN0KHRhcmdldCksIGFyZ3VtZW50cy5sZW5ndGggPCAzID8gdW5kZWZpbmVkIDogdG9NZXRhS2V5KGFyZ3VtZW50c1syXSkpO1xuICAgICAgfVxuICAgIH0pO1xuICB9LCB7XG4gICAgXCI2N1wiOiA2NyxcbiAgICBcIjdcIjogNyxcbiAgICBcIjc5XCI6IDc5XG4gIH1dLFxuICAzMDM6IFtmdW5jdGlvbiAoX2RlcmVxXywgbW9kdWxlLCBleHBvcnRzKSB7XG4gICAgdmFyIG1ldGFkYXRhID0gX2RlcmVxXyg2Nyk7XG5cbiAgICB2YXIgYW5PYmplY3QgPSBfZGVyZXFfKDcpO1xuXG4gICAgdmFyIG9yZGluYXJ5T3duTWV0YWRhdGFLZXlzID0gbWV0YWRhdGEua2V5cztcbiAgICB2YXIgdG9NZXRhS2V5ID0gbWV0YWRhdGEua2V5O1xuICAgIG1ldGFkYXRhLmV4cCh7XG4gICAgICBnZXRPd25NZXRhZGF0YUtleXM6IGZ1bmN0aW9uIGdldE93bk1ldGFkYXRhS2V5cyh0YXJnZXRcbiAgICAgIC8qICwgdGFyZ2V0S2V5ICovXG4gICAgICApIHtcbiAgICAgICAgcmV0dXJuIG9yZGluYXJ5T3duTWV0YWRhdGFLZXlzKGFuT2JqZWN0KHRhcmdldCksIGFyZ3VtZW50cy5sZW5ndGggPCAyID8gdW5kZWZpbmVkIDogdG9NZXRhS2V5KGFyZ3VtZW50c1sxXSkpO1xuICAgICAgfVxuICAgIH0pO1xuICB9LCB7XG4gICAgXCI2N1wiOiA2NyxcbiAgICBcIjdcIjogN1xuICB9XSxcbiAgMzA0OiBbZnVuY3Rpb24gKF9kZXJlcV8sIG1vZHVsZSwgZXhwb3J0cykge1xuICAgIHZhciBtZXRhZGF0YSA9IF9kZXJlcV8oNjcpO1xuXG4gICAgdmFyIGFuT2JqZWN0ID0gX2RlcmVxXyg3KTtcblxuICAgIHZhciBvcmRpbmFyeUdldE93bk1ldGFkYXRhID0gbWV0YWRhdGEuZ2V0O1xuICAgIHZhciB0b01ldGFLZXkgPSBtZXRhZGF0YS5rZXk7XG4gICAgbWV0YWRhdGEuZXhwKHtcbiAgICAgIGdldE93bk1ldGFkYXRhOiBmdW5jdGlvbiBnZXRPd25NZXRhZGF0YShtZXRhZGF0YUtleSwgdGFyZ2V0XG4gICAgICAvKiAsIHRhcmdldEtleSAqL1xuICAgICAgKSB7XG4gICAgICAgIHJldHVybiBvcmRpbmFyeUdldE93bk1ldGFkYXRhKG1ldGFkYXRhS2V5LCBhbk9iamVjdCh0YXJnZXQpLCBhcmd1bWVudHMubGVuZ3RoIDwgMyA/IHVuZGVmaW5lZCA6IHRvTWV0YUtleShhcmd1bWVudHNbMl0pKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfSwge1xuICAgIFwiNjdcIjogNjcsXG4gICAgXCI3XCI6IDdcbiAgfV0sXG4gIDMwNTogW2Z1bmN0aW9uIChfZGVyZXFfLCBtb2R1bGUsIGV4cG9ydHMpIHtcbiAgICB2YXIgbWV0YWRhdGEgPSBfZGVyZXFfKDY3KTtcblxuICAgIHZhciBhbk9iamVjdCA9IF9kZXJlcV8oNyk7XG5cbiAgICB2YXIgZ2V0UHJvdG90eXBlT2YgPSBfZGVyZXFfKDc5KTtcblxuICAgIHZhciBvcmRpbmFyeUhhc093bk1ldGFkYXRhID0gbWV0YWRhdGEuaGFzO1xuICAgIHZhciB0b01ldGFLZXkgPSBtZXRhZGF0YS5rZXk7XG5cbiAgICB2YXIgb3JkaW5hcnlIYXNNZXRhZGF0YSA9IGZ1bmN0aW9uIG9yZGluYXJ5SGFzTWV0YWRhdGEoTWV0YWRhdGFLZXksIE8sIFApIHtcbiAgICAgIHZhciBoYXNPd24gPSBvcmRpbmFyeUhhc093bk1ldGFkYXRhKE1ldGFkYXRhS2V5LCBPLCBQKTtcbiAgICAgIGlmIChoYXNPd24pIHJldHVybiB0cnVlO1xuICAgICAgdmFyIHBhcmVudCA9IGdldFByb3RvdHlwZU9mKE8pO1xuICAgICAgcmV0dXJuIHBhcmVudCAhPT0gbnVsbCA/IG9yZGluYXJ5SGFzTWV0YWRhdGEoTWV0YWRhdGFLZXksIHBhcmVudCwgUCkgOiBmYWxzZTtcbiAgICB9O1xuXG4gICAgbWV0YWRhdGEuZXhwKHtcbiAgICAgIGhhc01ldGFkYXRhOiBmdW5jdGlvbiBoYXNNZXRhZGF0YShtZXRhZGF0YUtleSwgdGFyZ2V0XG4gICAgICAvKiAsIHRhcmdldEtleSAqL1xuICAgICAgKSB7XG4gICAgICAgIHJldHVybiBvcmRpbmFyeUhhc01ldGFkYXRhKG1ldGFkYXRhS2V5LCBhbk9iamVjdCh0YXJnZXQpLCBhcmd1bWVudHMubGVuZ3RoIDwgMyA/IHVuZGVmaW5lZCA6IHRvTWV0YUtleShhcmd1bWVudHNbMl0pKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfSwge1xuICAgIFwiNjdcIjogNjcsXG4gICAgXCI3XCI6IDcsXG4gICAgXCI3OVwiOiA3OVxuICB9XSxcbiAgMzA2OiBbZnVuY3Rpb24gKF9kZXJlcV8sIG1vZHVsZSwgZXhwb3J0cykge1xuICAgIHZhciBtZXRhZGF0YSA9IF9kZXJlcV8oNjcpO1xuXG4gICAgdmFyIGFuT2JqZWN0ID0gX2RlcmVxXyg3KTtcblxuICAgIHZhciBvcmRpbmFyeUhhc093bk1ldGFkYXRhID0gbWV0YWRhdGEuaGFzO1xuICAgIHZhciB0b01ldGFLZXkgPSBtZXRhZGF0YS5rZXk7XG4gICAgbWV0YWRhdGEuZXhwKHtcbiAgICAgIGhhc093bk1ldGFkYXRhOiBmdW5jdGlvbiBoYXNPd25NZXRhZGF0YShtZXRhZGF0YUtleSwgdGFyZ2V0XG4gICAgICAvKiAsIHRhcmdldEtleSAqL1xuICAgICAgKSB7XG4gICAgICAgIHJldHVybiBvcmRpbmFyeUhhc093bk1ldGFkYXRhKG1ldGFkYXRhS2V5LCBhbk9iamVjdCh0YXJnZXQpLCBhcmd1bWVudHMubGVuZ3RoIDwgMyA/IHVuZGVmaW5lZCA6IHRvTWV0YUtleShhcmd1bWVudHNbMl0pKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfSwge1xuICAgIFwiNjdcIjogNjcsXG4gICAgXCI3XCI6IDdcbiAgfV0sXG4gIDMwNzogW2Z1bmN0aW9uIChfZGVyZXFfLCBtb2R1bGUsIGV4cG9ydHMpIHtcbiAgICB2YXIgJG1ldGFkYXRhID0gX2RlcmVxXyg2Nyk7XG5cbiAgICB2YXIgYW5PYmplY3QgPSBfZGVyZXFfKDcpO1xuXG4gICAgdmFyIGFGdW5jdGlvbiA9IF9kZXJlcV8oMyk7XG5cbiAgICB2YXIgdG9NZXRhS2V5ID0gJG1ldGFkYXRhLmtleTtcbiAgICB2YXIgb3JkaW5hcnlEZWZpbmVPd25NZXRhZGF0YSA9ICRtZXRhZGF0YS5zZXQ7XG4gICAgJG1ldGFkYXRhLmV4cCh7XG4gICAgICBtZXRhZGF0YTogZnVuY3Rpb24gbWV0YWRhdGEobWV0YWRhdGFLZXksIG1ldGFkYXRhVmFsdWUpIHtcbiAgICAgICAgcmV0dXJuIGZ1bmN0aW9uIGRlY29yYXRvcih0YXJnZXQsIHRhcmdldEtleSkge1xuICAgICAgICAgIG9yZGluYXJ5RGVmaW5lT3duTWV0YWRhdGEobWV0YWRhdGFLZXksIG1ldGFkYXRhVmFsdWUsICh0YXJnZXRLZXkgIT09IHVuZGVmaW5lZCA/IGFuT2JqZWN0IDogYUZ1bmN0aW9uKSh0YXJnZXQpLCB0b01ldGFLZXkodGFyZ2V0S2V5KSk7XG4gICAgICAgIH07XG4gICAgICB9XG4gICAgfSk7XG4gIH0sIHtcbiAgICBcIjNcIjogMyxcbiAgICBcIjY3XCI6IDY3LFxuICAgIFwiN1wiOiA3XG4gIH1dLFxuICAzMDg6IFtmdW5jdGlvbiAoX2RlcmVxXywgbW9kdWxlLCBleHBvcnRzKSB7XG4gICAgLy8gaHR0cHM6Ly90YzM5LmdpdGh1Yi5pby9wcm9wb3NhbC1zZXRtYXAtb2Zmcm9tLyNzZWMtc2V0LmZyb21cbiAgICBfZGVyZXFfKDk3KSgnU2V0Jyk7XG4gIH0sIHtcbiAgICBcIjk3XCI6IDk3XG4gIH1dLFxuICAzMDk6IFtmdW5jdGlvbiAoX2RlcmVxXywgbW9kdWxlLCBleHBvcnRzKSB7XG4gICAgLy8gaHR0cHM6Ly90YzM5LmdpdGh1Yi5pby9wcm9wb3NhbC1zZXRtYXAtb2Zmcm9tLyNzZWMtc2V0Lm9mXG4gICAgX2RlcmVxXyg5OCkoJ1NldCcpO1xuICB9LCB7XG4gICAgXCI5OFwiOiA5OFxuICB9XSxcbiAgMzEwOiBbZnVuY3Rpb24gKF9kZXJlcV8sIG1vZHVsZSwgZXhwb3J0cykge1xuICAgIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9EYXZpZEJydWFudC9NYXAtU2V0LnByb3RvdHlwZS50b0pTT05cbiAgICB2YXIgJGV4cG9ydCA9IF9kZXJlcV8oMzMpO1xuXG4gICAgJGV4cG9ydCgkZXhwb3J0LlAgKyAkZXhwb3J0LlIsICdTZXQnLCB7XG4gICAgICB0b0pTT046IF9kZXJlcV8oMjApKCdTZXQnKVxuICAgIH0pO1xuICB9LCB7XG4gICAgXCIyMFwiOiAyMCxcbiAgICBcIjMzXCI6IDMzXG4gIH1dLFxuICAzMTE6IFtmdW5jdGlvbiAoX2RlcmVxXywgbW9kdWxlLCBleHBvcnRzKSB7XG4gICAgJ3VzZSBzdHJpY3QnOyAvLyBodHRwczovL2dpdGh1Yi5jb20vbWF0aGlhc2J5bmVucy9TdHJpbmcucHJvdG90eXBlLmF0XG5cbiAgICB2YXIgJGV4cG9ydCA9IF9kZXJlcV8oMzMpO1xuXG4gICAgdmFyICRhdCA9IF9kZXJlcV8oMTA2KSh0cnVlKTtcblxuICAgICRleHBvcnQoJGV4cG9ydC5QLCAnU3RyaW5nJywge1xuICAgICAgYXQ6IGZ1bmN0aW9uIGF0KHBvcykge1xuICAgICAgICByZXR1cm4gJGF0KHRoaXMsIHBvcyk7XG4gICAgICB9XG4gICAgfSk7XG4gIH0sIHtcbiAgICBcIjEwNlwiOiAxMDYsXG4gICAgXCIzM1wiOiAzM1xuICB9XSxcbiAgMzEyOiBbZnVuY3Rpb24gKF9kZXJlcV8sIG1vZHVsZSwgZXhwb3J0cykge1xuICAgICd1c2Ugc3RyaWN0JzsgLy8gaHR0cHM6Ly90YzM5LmdpdGh1Yi5pby9TdHJpbmcucHJvdG90eXBlLm1hdGNoQWxsL1xuXG4gICAgdmFyICRleHBvcnQgPSBfZGVyZXFfKDMzKTtcblxuICAgIHZhciBkZWZpbmVkID0gX2RlcmVxXygyOCk7XG5cbiAgICB2YXIgdG9MZW5ndGggPSBfZGVyZXFfKDExOCk7XG5cbiAgICB2YXIgaXNSZWdFeHAgPSBfZGVyZXFfKDUyKTtcblxuICAgIHZhciBnZXRGbGFncyA9IF9kZXJlcV8oMzcpO1xuXG4gICAgdmFyIFJlZ0V4cFByb3RvID0gUmVnRXhwLnByb3RvdHlwZTtcblxuICAgIHZhciAkUmVnRXhwU3RyaW5nSXRlcmF0b3IgPSBmdW5jdGlvbiAkUmVnRXhwU3RyaW5nSXRlcmF0b3IocmVnZXhwLCBzdHJpbmcpIHtcbiAgICAgIHRoaXMuX3IgPSByZWdleHA7XG4gICAgICB0aGlzLl9zID0gc3RyaW5nO1xuICAgIH07XG5cbiAgICBfZGVyZXFfKDU0KSgkUmVnRXhwU3RyaW5nSXRlcmF0b3IsICdSZWdFeHAgU3RyaW5nJywgZnVuY3Rpb24gbmV4dCgpIHtcbiAgICAgIHZhciBtYXRjaCA9IHRoaXMuX3IuZXhlYyh0aGlzLl9zKTtcblxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgdmFsdWU6IG1hdGNoLFxuICAgICAgICBkb25lOiBtYXRjaCA9PT0gbnVsbFxuICAgICAgfTtcbiAgICB9KTtcblxuICAgICRleHBvcnQoJGV4cG9ydC5QLCAnU3RyaW5nJywge1xuICAgICAgbWF0Y2hBbGw6IGZ1bmN0aW9uIG1hdGNoQWxsKHJlZ2V4cCkge1xuICAgICAgICBkZWZpbmVkKHRoaXMpO1xuICAgICAgICBpZiAoIWlzUmVnRXhwKHJlZ2V4cCkpIHRocm93IFR5cGVFcnJvcihyZWdleHAgKyAnIGlzIG5vdCBhIHJlZ2V4cCEnKTtcbiAgICAgICAgdmFyIFMgPSBTdHJpbmcodGhpcyk7XG4gICAgICAgIHZhciBmbGFncyA9ICdmbGFncycgaW4gUmVnRXhwUHJvdG8gPyBTdHJpbmcocmVnZXhwLmZsYWdzKSA6IGdldEZsYWdzLmNhbGwocmVnZXhwKTtcbiAgICAgICAgdmFyIHJ4ID0gbmV3IFJlZ0V4cChyZWdleHAuc291cmNlLCB+ZmxhZ3MuaW5kZXhPZignZycpID8gZmxhZ3MgOiAnZycgKyBmbGFncyk7XG4gICAgICAgIHJ4Lmxhc3RJbmRleCA9IHRvTGVuZ3RoKHJlZ2V4cC5sYXN0SW5kZXgpO1xuICAgICAgICByZXR1cm4gbmV3ICRSZWdFeHBTdHJpbmdJdGVyYXRvcihyeCwgUyk7XG4gICAgICB9XG4gICAgfSk7XG4gIH0sIHtcbiAgICBcIjExOFwiOiAxMTgsXG4gICAgXCIyOFwiOiAyOCxcbiAgICBcIjMzXCI6IDMzLFxuICAgIFwiMzdcIjogMzcsXG4gICAgXCI1MlwiOiA1MixcbiAgICBcIjU0XCI6IDU0XG4gIH1dLFxuICAzMTM6IFtmdW5jdGlvbiAoX2RlcmVxXywgbW9kdWxlLCBleHBvcnRzKSB7XG4gICAgJ3VzZSBzdHJpY3QnOyAvLyBodHRwczovL2dpdGh1Yi5jb20vdGMzOS9wcm9wb3NhbC1zdHJpbmctcGFkLXN0YXJ0LWVuZFxuXG4gICAgdmFyICRleHBvcnQgPSBfZGVyZXFfKDMzKTtcblxuICAgIHZhciAkcGFkID0gX2RlcmVxXygxMDkpO1xuXG4gICAgJGV4cG9ydCgkZXhwb3J0LlAsICdTdHJpbmcnLCB7XG4gICAgICBwYWRFbmQ6IGZ1bmN0aW9uIHBhZEVuZChtYXhMZW5ndGhcbiAgICAgIC8qICwgZmlsbFN0cmluZyA9ICcgJyAqL1xuICAgICAgKSB7XG4gICAgICAgIHJldHVybiAkcGFkKHRoaXMsIG1heExlbmd0aCwgYXJndW1lbnRzLmxlbmd0aCA+IDEgPyBhcmd1bWVudHNbMV0gOiB1bmRlZmluZWQsIGZhbHNlKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfSwge1xuICAgIFwiMTA5XCI6IDEwOSxcbiAgICBcIjMzXCI6IDMzXG4gIH1dLFxuICAzMTQ6IFtmdW5jdGlvbiAoX2RlcmVxXywgbW9kdWxlLCBleHBvcnRzKSB7XG4gICAgJ3VzZSBzdHJpY3QnOyAvLyBodHRwczovL2dpdGh1Yi5jb20vdGMzOS9wcm9wb3NhbC1zdHJpbmctcGFkLXN0YXJ0LWVuZFxuXG4gICAgdmFyICRleHBvcnQgPSBfZGVyZXFfKDMzKTtcblxuICAgIHZhciAkcGFkID0gX2RlcmVxXygxMDkpO1xuXG4gICAgJGV4cG9ydCgkZXhwb3J0LlAsICdTdHJpbmcnLCB7XG4gICAgICBwYWRTdGFydDogZnVuY3Rpb24gcGFkU3RhcnQobWF4TGVuZ3RoXG4gICAgICAvKiAsIGZpbGxTdHJpbmcgPSAnICcgKi9cbiAgICAgICkge1xuICAgICAgICByZXR1cm4gJHBhZCh0aGlzLCBtYXhMZW5ndGgsIGFyZ3VtZW50cy5sZW5ndGggPiAxID8gYXJndW1lbnRzWzFdIDogdW5kZWZpbmVkLCB0cnVlKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfSwge1xuICAgIFwiMTA5XCI6IDEwOSxcbiAgICBcIjMzXCI6IDMzXG4gIH1dLFxuICAzMTU6IFtmdW5jdGlvbiAoX2RlcmVxXywgbW9kdWxlLCBleHBvcnRzKSB7XG4gICAgJ3VzZSBzdHJpY3QnOyAvLyBodHRwczovL2dpdGh1Yi5jb20vc2VibWFya2JhZ2UvZWNtYXNjcmlwdC1zdHJpbmctbGVmdC1yaWdodC10cmltXG5cbiAgICBfZGVyZXFfKDExMSkoJ3RyaW1MZWZ0JywgZnVuY3Rpb24gKCR0cmltKSB7XG4gICAgICByZXR1cm4gZnVuY3Rpb24gdHJpbUxlZnQoKSB7XG4gICAgICAgIHJldHVybiAkdHJpbSh0aGlzLCAxKTtcbiAgICAgIH07XG4gICAgfSwgJ3RyaW1TdGFydCcpO1xuICB9LCB7XG4gICAgXCIxMTFcIjogMTExXG4gIH1dLFxuICAzMTY6IFtmdW5jdGlvbiAoX2RlcmVxXywgbW9kdWxlLCBleHBvcnRzKSB7XG4gICAgJ3VzZSBzdHJpY3QnOyAvLyBodHRwczovL2dpdGh1Yi5jb20vc2VibWFya2JhZ2UvZWNtYXNjcmlwdC1zdHJpbmctbGVmdC1yaWdodC10cmltXG5cbiAgICBfZGVyZXFfKDExMSkoJ3RyaW1SaWdodCcsIGZ1bmN0aW9uICgkdHJpbSkge1xuICAgICAgcmV0dXJuIGZ1bmN0aW9uIHRyaW1SaWdodCgpIHtcbiAgICAgICAgcmV0dXJuICR0cmltKHRoaXMsIDIpO1xuICAgICAgfTtcbiAgICB9LCAndHJpbUVuZCcpO1xuICB9LCB7XG4gICAgXCIxMTFcIjogMTExXG4gIH1dLFxuICAzMTc6IFtmdW5jdGlvbiAoX2RlcmVxXywgbW9kdWxlLCBleHBvcnRzKSB7XG4gICAgX2RlcmVxXygxMjYpKCdhc3luY0l0ZXJhdG9yJyk7XG4gIH0sIHtcbiAgICBcIjEyNlwiOiAxMjZcbiAgfV0sXG4gIDMxODogW2Z1bmN0aW9uIChfZGVyZXFfLCBtb2R1bGUsIGV4cG9ydHMpIHtcbiAgICBfZGVyZXFfKDEyNikoJ29ic2VydmFibGUnKTtcbiAgfSwge1xuICAgIFwiMTI2XCI6IDEyNlxuICB9XSxcbiAgMzE5OiBbZnVuY3Rpb24gKF9kZXJlcV8sIG1vZHVsZSwgZXhwb3J0cykge1xuICAgIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS90YzM5L3Byb3Bvc2FsLWdsb2JhbFxuICAgIHZhciAkZXhwb3J0ID0gX2RlcmVxXygzMyk7XG5cbiAgICAkZXhwb3J0KCRleHBvcnQuUywgJ1N5c3RlbScsIHtcbiAgICAgIGdsb2JhbDogX2RlcmVxXyg0MClcbiAgICB9KTtcbiAgfSwge1xuICAgIFwiMzNcIjogMzMsXG4gICAgXCI0MFwiOiA0MFxuICB9XSxcbiAgMzIwOiBbZnVuY3Rpb24gKF9kZXJlcV8sIG1vZHVsZSwgZXhwb3J0cykge1xuICAgIC8vIGh0dHBzOi8vdGMzOS5naXRodWIuaW8vcHJvcG9zYWwtc2V0bWFwLW9mZnJvbS8jc2VjLXdlYWttYXAuZnJvbVxuICAgIF9kZXJlcV8oOTcpKCdXZWFrTWFwJyk7XG4gIH0sIHtcbiAgICBcIjk3XCI6IDk3XG4gIH1dLFxuICAzMjE6IFtmdW5jdGlvbiAoX2RlcmVxXywgbW9kdWxlLCBleHBvcnRzKSB7XG4gICAgLy8gaHR0cHM6Ly90YzM5LmdpdGh1Yi5pby9wcm9wb3NhbC1zZXRtYXAtb2Zmcm9tLyNzZWMtd2Vha21hcC5vZlxuICAgIF9kZXJlcV8oOTgpKCdXZWFrTWFwJyk7XG4gIH0sIHtcbiAgICBcIjk4XCI6IDk4XG4gIH1dLFxuICAzMjI6IFtmdW5jdGlvbiAoX2RlcmVxXywgbW9kdWxlLCBleHBvcnRzKSB7XG4gICAgLy8gaHR0cHM6Ly90YzM5LmdpdGh1Yi5pby9wcm9wb3NhbC1zZXRtYXAtb2Zmcm9tLyNzZWMtd2Vha3NldC5mcm9tXG4gICAgX2RlcmVxXyg5NykoJ1dlYWtTZXQnKTtcbiAgfSwge1xuICAgIFwiOTdcIjogOTdcbiAgfV0sXG4gIDMyMzogW2Z1bmN0aW9uIChfZGVyZXFfLCBtb2R1bGUsIGV4cG9ydHMpIHtcbiAgICAvLyBodHRwczovL3RjMzkuZ2l0aHViLmlvL3Byb3Bvc2FsLXNldG1hcC1vZmZyb20vI3NlYy13ZWFrc2V0Lm9mXG4gICAgX2RlcmVxXyg5OCkoJ1dlYWtTZXQnKTtcbiAgfSwge1xuICAgIFwiOThcIjogOThcbiAgfV0sXG4gIDMyNDogW2Z1bmN0aW9uIChfZGVyZXFfLCBtb2R1bGUsIGV4cG9ydHMpIHtcbiAgICB2YXIgJGl0ZXJhdG9ycyA9IF9kZXJlcV8oMTQxKTtcblxuICAgIHZhciBnZXRLZXlzID0gX2RlcmVxXyg4MSk7XG5cbiAgICB2YXIgcmVkZWZpbmUgPSBfZGVyZXFfKDk0KTtcblxuICAgIHZhciBnbG9iYWwgPSBfZGVyZXFfKDQwKTtcblxuICAgIHZhciBoaWRlID0gX2RlcmVxXyg0Mik7XG5cbiAgICB2YXIgSXRlcmF0b3JzID0gX2RlcmVxXyg1OCk7XG5cbiAgICB2YXIgd2tzID0gX2RlcmVxXygxMjgpO1xuXG4gICAgdmFyIElURVJBVE9SID0gd2tzKCdpdGVyYXRvcicpO1xuICAgIHZhciBUT19TVFJJTkdfVEFHID0gd2tzKCd0b1N0cmluZ1RhZycpO1xuICAgIHZhciBBcnJheVZhbHVlcyA9IEl0ZXJhdG9ycy5BcnJheTtcbiAgICB2YXIgRE9NSXRlcmFibGVzID0ge1xuICAgICAgQ1NTUnVsZUxpc3Q6IHRydWUsXG4gICAgICAvLyBUT0RPOiBOb3Qgc3BlYyBjb21wbGlhbnQsIHNob3VsZCBiZSBmYWxzZS5cbiAgICAgIENTU1N0eWxlRGVjbGFyYXRpb246IGZhbHNlLFxuICAgICAgQ1NTVmFsdWVMaXN0OiBmYWxzZSxcbiAgICAgIENsaWVudFJlY3RMaXN0OiBmYWxzZSxcbiAgICAgIERPTVJlY3RMaXN0OiBmYWxzZSxcbiAgICAgIERPTVN0cmluZ0xpc3Q6IGZhbHNlLFxuICAgICAgRE9NVG9rZW5MaXN0OiB0cnVlLFxuICAgICAgRGF0YVRyYW5zZmVySXRlbUxpc3Q6IGZhbHNlLFxuICAgICAgRmlsZUxpc3Q6IGZhbHNlLFxuICAgICAgSFRNTEFsbENvbGxlY3Rpb246IGZhbHNlLFxuICAgICAgSFRNTENvbGxlY3Rpb246IGZhbHNlLFxuICAgICAgSFRNTEZvcm1FbGVtZW50OiBmYWxzZSxcbiAgICAgIEhUTUxTZWxlY3RFbGVtZW50OiBmYWxzZSxcbiAgICAgIE1lZGlhTGlzdDogdHJ1ZSxcbiAgICAgIC8vIFRPRE86IE5vdCBzcGVjIGNvbXBsaWFudCwgc2hvdWxkIGJlIGZhbHNlLlxuICAgICAgTWltZVR5cGVBcnJheTogZmFsc2UsXG4gICAgICBOYW1lZE5vZGVNYXA6IGZhbHNlLFxuICAgICAgTm9kZUxpc3Q6IHRydWUsXG4gICAgICBQYWludFJlcXVlc3RMaXN0OiBmYWxzZSxcbiAgICAgIFBsdWdpbjogZmFsc2UsXG4gICAgICBQbHVnaW5BcnJheTogZmFsc2UsXG4gICAgICBTVkdMZW5ndGhMaXN0OiBmYWxzZSxcbiAgICAgIFNWR051bWJlckxpc3Q6IGZhbHNlLFxuICAgICAgU1ZHUGF0aFNlZ0xpc3Q6IGZhbHNlLFxuICAgICAgU1ZHUG9pbnRMaXN0OiBmYWxzZSxcbiAgICAgIFNWR1N0cmluZ0xpc3Q6IGZhbHNlLFxuICAgICAgU1ZHVHJhbnNmb3JtTGlzdDogZmFsc2UsXG4gICAgICBTb3VyY2VCdWZmZXJMaXN0OiBmYWxzZSxcbiAgICAgIFN0eWxlU2hlZXRMaXN0OiB0cnVlLFxuICAgICAgLy8gVE9ETzogTm90IHNwZWMgY29tcGxpYW50LCBzaG91bGQgYmUgZmFsc2UuXG4gICAgICBUZXh0VHJhY2tDdWVMaXN0OiBmYWxzZSxcbiAgICAgIFRleHRUcmFja0xpc3Q6IGZhbHNlLFxuICAgICAgVG91Y2hMaXN0OiBmYWxzZVxuICAgIH07XG5cbiAgICBmb3IgKHZhciBjb2xsZWN0aW9ucyA9IGdldEtleXMoRE9NSXRlcmFibGVzKSwgaSA9IDA7IGkgPCBjb2xsZWN0aW9ucy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIE5BTUUgPSBjb2xsZWN0aW9uc1tpXTtcbiAgICAgIHZhciBleHBsaWNpdCA9IERPTUl0ZXJhYmxlc1tOQU1FXTtcbiAgICAgIHZhciBDb2xsZWN0aW9uID0gZ2xvYmFsW05BTUVdO1xuICAgICAgdmFyIHByb3RvID0gQ29sbGVjdGlvbiAmJiBDb2xsZWN0aW9uLnByb3RvdHlwZTtcbiAgICAgIHZhciBrZXk7XG5cbiAgICAgIGlmIChwcm90bykge1xuICAgICAgICBpZiAoIXByb3RvW0lURVJBVE9SXSkgaGlkZShwcm90bywgSVRFUkFUT1IsIEFycmF5VmFsdWVzKTtcbiAgICAgICAgaWYgKCFwcm90b1tUT19TVFJJTkdfVEFHXSkgaGlkZShwcm90bywgVE9fU1RSSU5HX1RBRywgTkFNRSk7XG4gICAgICAgIEl0ZXJhdG9yc1tOQU1FXSA9IEFycmF5VmFsdWVzO1xuICAgICAgICBpZiAoZXhwbGljaXQpIGZvciAoa2V5IGluICRpdGVyYXRvcnMpIHtcbiAgICAgICAgICBpZiAoIXByb3RvW2tleV0pIHJlZGVmaW5lKHByb3RvLCBrZXksICRpdGVyYXRvcnNba2V5XSwgdHJ1ZSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH0sIHtcbiAgICBcIjEyOFwiOiAxMjgsXG4gICAgXCIxNDFcIjogMTQxLFxuICAgIFwiNDBcIjogNDAsXG4gICAgXCI0MlwiOiA0MixcbiAgICBcIjU4XCI6IDU4LFxuICAgIFwiODFcIjogODEsXG4gICAgXCI5NFwiOiA5NFxuICB9XSxcbiAgMzI1OiBbZnVuY3Rpb24gKF9kZXJlcV8sIG1vZHVsZSwgZXhwb3J0cykge1xuICAgIHZhciAkZXhwb3J0ID0gX2RlcmVxXygzMyk7XG5cbiAgICB2YXIgJHRhc2sgPSBfZGVyZXFfKDExMyk7XG5cbiAgICAkZXhwb3J0KCRleHBvcnQuRyArICRleHBvcnQuQiwge1xuICAgICAgc2V0SW1tZWRpYXRlOiAkdGFzay5zZXQsXG4gICAgICBjbGVhckltbWVkaWF0ZTogJHRhc2suY2xlYXJcbiAgICB9KTtcbiAgfSwge1xuICAgIFwiMTEzXCI6IDExMyxcbiAgICBcIjMzXCI6IDMzXG4gIH1dLFxuICAzMjY6IFtmdW5jdGlvbiAoX2RlcmVxXywgbW9kdWxlLCBleHBvcnRzKSB7XG4gICAgLy8gaWU5LSBzZXRUaW1lb3V0ICYgc2V0SW50ZXJ2YWwgYWRkaXRpb25hbCBwYXJhbWV0ZXJzIGZpeFxuICAgIHZhciBnbG9iYWwgPSBfZGVyZXFfKDQwKTtcblxuICAgIHZhciAkZXhwb3J0ID0gX2RlcmVxXygzMyk7XG5cbiAgICB2YXIgaW52b2tlID0gX2RlcmVxXyg0Nik7XG5cbiAgICB2YXIgcGFydGlhbCA9IF9kZXJlcV8oODgpO1xuXG4gICAgdmFyIG5hdmlnYXRvciA9IGdsb2JhbC5uYXZpZ2F0b3I7XG4gICAgdmFyIE1TSUUgPSAhIW5hdmlnYXRvciAmJiAvTVNJRSAuXFwuLy50ZXN0KG5hdmlnYXRvci51c2VyQWdlbnQpOyAvLyA8LSBkaXJ0eSBpZTktIGNoZWNrXG5cbiAgICB2YXIgd3JhcCA9IGZ1bmN0aW9uIHdyYXAoc2V0KSB7XG4gICAgICByZXR1cm4gTVNJRSA/IGZ1bmN0aW9uIChmbiwgdGltZVxuICAgICAgLyogLCAuLi5hcmdzICovXG4gICAgICApIHtcbiAgICAgICAgcmV0dXJuIHNldChpbnZva2UocGFydGlhbCwgW10uc2xpY2UuY2FsbChhcmd1bWVudHMsIDIpLCAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tbmV3LWZ1bmNcbiAgICAgICAgdHlwZW9mIGZuID09ICdmdW5jdGlvbicgPyBmbiA6IEZ1bmN0aW9uKGZuKSksIHRpbWUpO1xuICAgICAgfSA6IHNldDtcbiAgICB9O1xuXG4gICAgJGV4cG9ydCgkZXhwb3J0LkcgKyAkZXhwb3J0LkIgKyAkZXhwb3J0LkYgKiBNU0lFLCB7XG4gICAgICBzZXRUaW1lb3V0OiB3cmFwKGdsb2JhbC5zZXRUaW1lb3V0KSxcbiAgICAgIHNldEludGVydmFsOiB3cmFwKGdsb2JhbC5zZXRJbnRlcnZhbClcbiAgICB9KTtcbiAgfSwge1xuICAgIFwiMzNcIjogMzMsXG4gICAgXCI0MFwiOiA0MCxcbiAgICBcIjQ2XCI6IDQ2LFxuICAgIFwiODhcIjogODhcbiAgfV0sXG4gIDMyNzogW2Z1bmN0aW9uIChfZGVyZXFfLCBtb2R1bGUsIGV4cG9ydHMpIHtcbiAgICBfZGVyZXFfKDI1NCk7XG5cbiAgICBfZGVyZXFfKDE5MSk7XG5cbiAgICBfZGVyZXFfKDE5Myk7XG5cbiAgICBfZGVyZXFfKDE5Mik7XG5cbiAgICBfZGVyZXFfKDE5NSk7XG5cbiAgICBfZGVyZXFfKDE5Nyk7XG5cbiAgICBfZGVyZXFfKDIwMik7XG5cbiAgICBfZGVyZXFfKDE5Nik7XG5cbiAgICBfZGVyZXFfKDE5NCk7XG5cbiAgICBfZGVyZXFfKDIwNCk7XG5cbiAgICBfZGVyZXFfKDIwMyk7XG5cbiAgICBfZGVyZXFfKDE5OSk7XG5cbiAgICBfZGVyZXFfKDIwMCk7XG5cbiAgICBfZGVyZXFfKDE5OCk7XG5cbiAgICBfZGVyZXFfKDE5MCk7XG5cbiAgICBfZGVyZXFfKDIwMSk7XG5cbiAgICBfZGVyZXFfKDIwNSk7XG5cbiAgICBfZGVyZXFfKDIwNik7XG5cbiAgICBfZGVyZXFfKDE1Nyk7XG5cbiAgICBfZGVyZXFfKDE1OSk7XG5cbiAgICBfZGVyZXFfKDE1OCk7XG5cbiAgICBfZGVyZXFfKDIwOCk7XG5cbiAgICBfZGVyZXFfKDIwNyk7XG5cbiAgICBfZGVyZXFfKDE3OCk7XG5cbiAgICBfZGVyZXFfKDE4OCk7XG5cbiAgICBfZGVyZXFfKDE4OSk7XG5cbiAgICBfZGVyZXFfKDE3OSk7XG5cbiAgICBfZGVyZXFfKDE4MCk7XG5cbiAgICBfZGVyZXFfKDE4MSk7XG5cbiAgICBfZGVyZXFfKDE4Mik7XG5cbiAgICBfZGVyZXFfKDE4Myk7XG5cbiAgICBfZGVyZXFfKDE4NCk7XG5cbiAgICBfZGVyZXFfKDE4NSk7XG5cbiAgICBfZGVyZXFfKDE4Nik7XG5cbiAgICBfZGVyZXFfKDE4Nyk7XG5cbiAgICBfZGVyZXFfKDE2MSk7XG5cbiAgICBfZGVyZXFfKDE2Mik7XG5cbiAgICBfZGVyZXFfKDE2Myk7XG5cbiAgICBfZGVyZXFfKDE2NCk7XG5cbiAgICBfZGVyZXFfKDE2NSk7XG5cbiAgICBfZGVyZXFfKDE2Nik7XG5cbiAgICBfZGVyZXFfKDE2Nyk7XG5cbiAgICBfZGVyZXFfKDE2OCk7XG5cbiAgICBfZGVyZXFfKDE2OSk7XG5cbiAgICBfZGVyZXFfKDE3MCk7XG5cbiAgICBfZGVyZXFfKDE3MSk7XG5cbiAgICBfZGVyZXFfKDE3Mik7XG5cbiAgICBfZGVyZXFfKDE3Myk7XG5cbiAgICBfZGVyZXFfKDE3NCk7XG5cbiAgICBfZGVyZXFfKDE3NSk7XG5cbiAgICBfZGVyZXFfKDE3Nik7XG5cbiAgICBfZGVyZXFfKDE3Nyk7XG5cbiAgICBfZGVyZXFfKDI0MSk7XG5cbiAgICBfZGVyZXFfKDI0Nik7XG5cbiAgICBfZGVyZXFfKDI1Myk7XG5cbiAgICBfZGVyZXFfKDI0NCk7XG5cbiAgICBfZGVyZXFfKDIzNik7XG5cbiAgICBfZGVyZXFfKDIzNyk7XG5cbiAgICBfZGVyZXFfKDI0Mik7XG5cbiAgICBfZGVyZXFfKDI0Nyk7XG5cbiAgICBfZGVyZXFfKDI0OSk7XG5cbiAgICBfZGVyZXFfKDIzMik7XG5cbiAgICBfZGVyZXFfKDIzMyk7XG5cbiAgICBfZGVyZXFfKDIzNCk7XG5cbiAgICBfZGVyZXFfKDIzNSk7XG5cbiAgICBfZGVyZXFfKDIzOCk7XG5cbiAgICBfZGVyZXFfKDIzOSk7XG5cbiAgICBfZGVyZXFfKDI0MCk7XG5cbiAgICBfZGVyZXFfKDI0Myk7XG5cbiAgICBfZGVyZXFfKDI0NSk7XG5cbiAgICBfZGVyZXFfKDI0OCk7XG5cbiAgICBfZGVyZXFfKDI1MCk7XG5cbiAgICBfZGVyZXFfKDI1MSk7XG5cbiAgICBfZGVyZXFfKDI1Mik7XG5cbiAgICBfZGVyZXFfKDE1Mik7XG5cbiAgICBfZGVyZXFfKDE1NCk7XG5cbiAgICBfZGVyZXFfKDE1Myk7XG5cbiAgICBfZGVyZXFfKDE1Nik7XG5cbiAgICBfZGVyZXFfKDE1NSk7XG5cbiAgICBfZGVyZXFfKDE0MCk7XG5cbiAgICBfZGVyZXFfKDEzOCk7XG5cbiAgICBfZGVyZXFfKDE0NSk7XG5cbiAgICBfZGVyZXFfKDE0Mik7XG5cbiAgICBfZGVyZXFfKDE0OCk7XG5cbiAgICBfZGVyZXFfKDE1MCk7XG5cbiAgICBfZGVyZXFfKDEzNyk7XG5cbiAgICBfZGVyZXFfKDE0NCk7XG5cbiAgICBfZGVyZXFfKDEzNCk7XG5cbiAgICBfZGVyZXFfKDE0OSk7XG5cbiAgICBfZGVyZXFfKDEzMik7XG5cbiAgICBfZGVyZXFfKDE0Nyk7XG5cbiAgICBfZGVyZXFfKDE0Nik7XG5cbiAgICBfZGVyZXFfKDEzOSk7XG5cbiAgICBfZGVyZXFfKDE0Myk7XG5cbiAgICBfZGVyZXFfKDEzMSk7XG5cbiAgICBfZGVyZXFfKDEzMyk7XG5cbiAgICBfZGVyZXFfKDEzNik7XG5cbiAgICBfZGVyZXFfKDEzNSk7XG5cbiAgICBfZGVyZXFfKDE1MSk7XG5cbiAgICBfZGVyZXFfKDE0MSk7XG5cbiAgICBfZGVyZXFfKDIyNCk7XG5cbiAgICBfZGVyZXFfKDIzMCk7XG5cbiAgICBfZGVyZXFfKDIyNSk7XG5cbiAgICBfZGVyZXFfKDIyNik7XG5cbiAgICBfZGVyZXFfKDIyNyk7XG5cbiAgICBfZGVyZXFfKDIyOCk7XG5cbiAgICBfZGVyZXFfKDIyOSk7XG5cbiAgICBfZGVyZXFfKDIwOSk7XG5cbiAgICBfZGVyZXFfKDE2MCk7XG5cbiAgICBfZGVyZXFfKDIzMSk7XG5cbiAgICBfZGVyZXFfKDI2Nik7XG5cbiAgICBfZGVyZXFfKDI2Nyk7XG5cbiAgICBfZGVyZXFfKDI1NSk7XG5cbiAgICBfZGVyZXFfKDI1Nik7XG5cbiAgICBfZGVyZXFfKDI2MSk7XG5cbiAgICBfZGVyZXFfKDI2NCk7XG5cbiAgICBfZGVyZXFfKDI2NSk7XG5cbiAgICBfZGVyZXFfKDI1OSk7XG5cbiAgICBfZGVyZXFfKDI2Mik7XG5cbiAgICBfZGVyZXFfKDI2MCk7XG5cbiAgICBfZGVyZXFfKDI2Myk7XG5cbiAgICBfZGVyZXFfKDI1Nyk7XG5cbiAgICBfZGVyZXFfKDI1OCk7XG5cbiAgICBfZGVyZXFfKDIxMCk7XG5cbiAgICBfZGVyZXFfKDIxMSk7XG5cbiAgICBfZGVyZXFfKDIxMik7XG5cbiAgICBfZGVyZXFfKDIxMyk7XG5cbiAgICBfZGVyZXFfKDIxNCk7XG5cbiAgICBfZGVyZXFfKDIxNyk7XG5cbiAgICBfZGVyZXFfKDIxNSk7XG5cbiAgICBfZGVyZXFfKDIxNik7XG5cbiAgICBfZGVyZXFfKDIxOCk7XG5cbiAgICBfZGVyZXFfKDIxOSk7XG5cbiAgICBfZGVyZXFfKDIyMCk7XG5cbiAgICBfZGVyZXFfKDIyMSk7XG5cbiAgICBfZGVyZXFfKDIyMyk7XG5cbiAgICBfZGVyZXFfKDIyMik7XG5cbiAgICBfZGVyZXFfKDI3MCk7XG5cbiAgICBfZGVyZXFfKDI2OCk7XG5cbiAgICBfZGVyZXFfKDI2OSk7XG5cbiAgICBfZGVyZXFfKDMxMSk7XG5cbiAgICBfZGVyZXFfKDMxNCk7XG5cbiAgICBfZGVyZXFfKDMxMyk7XG5cbiAgICBfZGVyZXFfKDMxNSk7XG5cbiAgICBfZGVyZXFfKDMxNik7XG5cbiAgICBfZGVyZXFfKDMxMik7XG5cbiAgICBfZGVyZXFfKDMxNyk7XG5cbiAgICBfZGVyZXFfKDMxOCk7XG5cbiAgICBfZGVyZXFfKDI5Mik7XG5cbiAgICBfZGVyZXFfKDI5NSk7XG5cbiAgICBfZGVyZXFfKDI5MSk7XG5cbiAgICBfZGVyZXFfKDI4OSk7XG5cbiAgICBfZGVyZXFfKDI5MCk7XG5cbiAgICBfZGVyZXFfKDI5Myk7XG5cbiAgICBfZGVyZXFfKDI5NCk7XG5cbiAgICBfZGVyZXFfKDI3Nik7XG5cbiAgICBfZGVyZXFfKDMxMCk7XG5cbiAgICBfZGVyZXFfKDI3NSk7XG5cbiAgICBfZGVyZXFfKDMwOSk7XG5cbiAgICBfZGVyZXFfKDMyMSk7XG5cbiAgICBfZGVyZXFfKDMyMyk7XG5cbiAgICBfZGVyZXFfKDI3NCk7XG5cbiAgICBfZGVyZXFfKDMwOCk7XG5cbiAgICBfZGVyZXFfKDMyMCk7XG5cbiAgICBfZGVyZXFfKDMyMik7XG5cbiAgICBfZGVyZXFfKDI3Myk7XG5cbiAgICBfZGVyZXFfKDMxOSk7XG5cbiAgICBfZGVyZXFfKDI3Mik7XG5cbiAgICBfZGVyZXFfKDI3Nyk7XG5cbiAgICBfZGVyZXFfKDI3OCk7XG5cbiAgICBfZGVyZXFfKDI3OSk7XG5cbiAgICBfZGVyZXFfKDI4MCk7XG5cbiAgICBfZGVyZXFfKDI4MSk7XG5cbiAgICBfZGVyZXFfKDI4Myk7XG5cbiAgICBfZGVyZXFfKDI4Mik7XG5cbiAgICBfZGVyZXFfKDI4NCk7XG5cbiAgICBfZGVyZXFfKDI4NSk7XG5cbiAgICBfZGVyZXFfKDI4Nik7XG5cbiAgICBfZGVyZXFfKDI4OCk7XG5cbiAgICBfZGVyZXFfKDI4Nyk7XG5cbiAgICBfZGVyZXFfKDI5Nyk7XG5cbiAgICBfZGVyZXFfKDI5OCk7XG5cbiAgICBfZGVyZXFfKDI5OSk7XG5cbiAgICBfZGVyZXFfKDMwMCk7XG5cbiAgICBfZGVyZXFfKDMwMik7XG5cbiAgICBfZGVyZXFfKDMwMSk7XG5cbiAgICBfZGVyZXFfKDMwNCk7XG5cbiAgICBfZGVyZXFfKDMwMyk7XG5cbiAgICBfZGVyZXFfKDMwNSk7XG5cbiAgICBfZGVyZXFfKDMwNik7XG5cbiAgICBfZGVyZXFfKDMwNyk7XG5cbiAgICBfZGVyZXFfKDI3MSk7XG5cbiAgICBfZGVyZXFfKDI5Nik7XG5cbiAgICBfZGVyZXFfKDMyNik7XG5cbiAgICBfZGVyZXFfKDMyNSk7XG5cbiAgICBfZGVyZXFfKDMyNCk7XG5cbiAgICBtb2R1bGUuZXhwb3J0cyA9IF9kZXJlcV8oMjMpO1xuICB9LCB7XG4gICAgXCIxMzFcIjogMTMxLFxuICAgIFwiMTMyXCI6IDEzMixcbiAgICBcIjEzM1wiOiAxMzMsXG4gICAgXCIxMzRcIjogMTM0LFxuICAgIFwiMTM1XCI6IDEzNSxcbiAgICBcIjEzNlwiOiAxMzYsXG4gICAgXCIxMzdcIjogMTM3LFxuICAgIFwiMTM4XCI6IDEzOCxcbiAgICBcIjEzOVwiOiAxMzksXG4gICAgXCIxNDBcIjogMTQwLFxuICAgIFwiMTQxXCI6IDE0MSxcbiAgICBcIjE0MlwiOiAxNDIsXG4gICAgXCIxNDNcIjogMTQzLFxuICAgIFwiMTQ0XCI6IDE0NCxcbiAgICBcIjE0NVwiOiAxNDUsXG4gICAgXCIxNDZcIjogMTQ2LFxuICAgIFwiMTQ3XCI6IDE0NyxcbiAgICBcIjE0OFwiOiAxNDgsXG4gICAgXCIxNDlcIjogMTQ5LFxuICAgIFwiMTUwXCI6IDE1MCxcbiAgICBcIjE1MVwiOiAxNTEsXG4gICAgXCIxNTJcIjogMTUyLFxuICAgIFwiMTUzXCI6IDE1MyxcbiAgICBcIjE1NFwiOiAxNTQsXG4gICAgXCIxNTVcIjogMTU1LFxuICAgIFwiMTU2XCI6IDE1NixcbiAgICBcIjE1N1wiOiAxNTcsXG4gICAgXCIxNThcIjogMTU4LFxuICAgIFwiMTU5XCI6IDE1OSxcbiAgICBcIjE2MFwiOiAxNjAsXG4gICAgXCIxNjFcIjogMTYxLFxuICAgIFwiMTYyXCI6IDE2MixcbiAgICBcIjE2M1wiOiAxNjMsXG4gICAgXCIxNjRcIjogMTY0LFxuICAgIFwiMTY1XCI6IDE2NSxcbiAgICBcIjE2NlwiOiAxNjYsXG4gICAgXCIxNjdcIjogMTY3LFxuICAgIFwiMTY4XCI6IDE2OCxcbiAgICBcIjE2OVwiOiAxNjksXG4gICAgXCIxNzBcIjogMTcwLFxuICAgIFwiMTcxXCI6IDE3MSxcbiAgICBcIjE3MlwiOiAxNzIsXG4gICAgXCIxNzNcIjogMTczLFxuICAgIFwiMTc0XCI6IDE3NCxcbiAgICBcIjE3NVwiOiAxNzUsXG4gICAgXCIxNzZcIjogMTc2LFxuICAgIFwiMTc3XCI6IDE3NyxcbiAgICBcIjE3OFwiOiAxNzgsXG4gICAgXCIxNzlcIjogMTc5LFxuICAgIFwiMTgwXCI6IDE4MCxcbiAgICBcIjE4MVwiOiAxODEsXG4gICAgXCIxODJcIjogMTgyLFxuICAgIFwiMTgzXCI6IDE4MyxcbiAgICBcIjE4NFwiOiAxODQsXG4gICAgXCIxODVcIjogMTg1LFxuICAgIFwiMTg2XCI6IDE4NixcbiAgICBcIjE4N1wiOiAxODcsXG4gICAgXCIxODhcIjogMTg4LFxuICAgIFwiMTg5XCI6IDE4OSxcbiAgICBcIjE5MFwiOiAxOTAsXG4gICAgXCIxOTFcIjogMTkxLFxuICAgIFwiMTkyXCI6IDE5MixcbiAgICBcIjE5M1wiOiAxOTMsXG4gICAgXCIxOTRcIjogMTk0LFxuICAgIFwiMTk1XCI6IDE5NSxcbiAgICBcIjE5NlwiOiAxOTYsXG4gICAgXCIxOTdcIjogMTk3LFxuICAgIFwiMTk4XCI6IDE5OCxcbiAgICBcIjE5OVwiOiAxOTksXG4gICAgXCIyMDBcIjogMjAwLFxuICAgIFwiMjAxXCI6IDIwMSxcbiAgICBcIjIwMlwiOiAyMDIsXG4gICAgXCIyMDNcIjogMjAzLFxuICAgIFwiMjA0XCI6IDIwNCxcbiAgICBcIjIwNVwiOiAyMDUsXG4gICAgXCIyMDZcIjogMjA2LFxuICAgIFwiMjA3XCI6IDIwNyxcbiAgICBcIjIwOFwiOiAyMDgsXG4gICAgXCIyMDlcIjogMjA5LFxuICAgIFwiMjEwXCI6IDIxMCxcbiAgICBcIjIxMVwiOiAyMTEsXG4gICAgXCIyMTJcIjogMjEyLFxuICAgIFwiMjEzXCI6IDIxMyxcbiAgICBcIjIxNFwiOiAyMTQsXG4gICAgXCIyMTVcIjogMjE1LFxuICAgIFwiMjE2XCI6IDIxNixcbiAgICBcIjIxN1wiOiAyMTcsXG4gICAgXCIyMThcIjogMjE4LFxuICAgIFwiMjE5XCI6IDIxOSxcbiAgICBcIjIyMFwiOiAyMjAsXG4gICAgXCIyMjFcIjogMjIxLFxuICAgIFwiMjIyXCI6IDIyMixcbiAgICBcIjIyM1wiOiAyMjMsXG4gICAgXCIyMjRcIjogMjI0LFxuICAgIFwiMjI1XCI6IDIyNSxcbiAgICBcIjIyNlwiOiAyMjYsXG4gICAgXCIyMjdcIjogMjI3LFxuICAgIFwiMjI4XCI6IDIyOCxcbiAgICBcIjIyOVwiOiAyMjksXG4gICAgXCIyM1wiOiAyMyxcbiAgICBcIjIzMFwiOiAyMzAsXG4gICAgXCIyMzFcIjogMjMxLFxuICAgIFwiMjMyXCI6IDIzMixcbiAgICBcIjIzM1wiOiAyMzMsXG4gICAgXCIyMzRcIjogMjM0LFxuICAgIFwiMjM1XCI6IDIzNSxcbiAgICBcIjIzNlwiOiAyMzYsXG4gICAgXCIyMzdcIjogMjM3LFxuICAgIFwiMjM4XCI6IDIzOCxcbiAgICBcIjIzOVwiOiAyMzksXG4gICAgXCIyNDBcIjogMjQwLFxuICAgIFwiMjQxXCI6IDI0MSxcbiAgICBcIjI0MlwiOiAyNDIsXG4gICAgXCIyNDNcIjogMjQzLFxuICAgIFwiMjQ0XCI6IDI0NCxcbiAgICBcIjI0NVwiOiAyNDUsXG4gICAgXCIyNDZcIjogMjQ2LFxuICAgIFwiMjQ3XCI6IDI0NyxcbiAgICBcIjI0OFwiOiAyNDgsXG4gICAgXCIyNDlcIjogMjQ5LFxuICAgIFwiMjUwXCI6IDI1MCxcbiAgICBcIjI1MVwiOiAyNTEsXG4gICAgXCIyNTJcIjogMjUyLFxuICAgIFwiMjUzXCI6IDI1MyxcbiAgICBcIjI1NFwiOiAyNTQsXG4gICAgXCIyNTVcIjogMjU1LFxuICAgIFwiMjU2XCI6IDI1NixcbiAgICBcIjI1N1wiOiAyNTcsXG4gICAgXCIyNThcIjogMjU4LFxuICAgIFwiMjU5XCI6IDI1OSxcbiAgICBcIjI2MFwiOiAyNjAsXG4gICAgXCIyNjFcIjogMjYxLFxuICAgIFwiMjYyXCI6IDI2MixcbiAgICBcIjI2M1wiOiAyNjMsXG4gICAgXCIyNjRcIjogMjY0LFxuICAgIFwiMjY1XCI6IDI2NSxcbiAgICBcIjI2NlwiOiAyNjYsXG4gICAgXCIyNjdcIjogMjY3LFxuICAgIFwiMjY4XCI6IDI2OCxcbiAgICBcIjI2OVwiOiAyNjksXG4gICAgXCIyNzBcIjogMjcwLFxuICAgIFwiMjcxXCI6IDI3MSxcbiAgICBcIjI3MlwiOiAyNzIsXG4gICAgXCIyNzNcIjogMjczLFxuICAgIFwiMjc0XCI6IDI3NCxcbiAgICBcIjI3NVwiOiAyNzUsXG4gICAgXCIyNzZcIjogMjc2LFxuICAgIFwiMjc3XCI6IDI3NyxcbiAgICBcIjI3OFwiOiAyNzgsXG4gICAgXCIyNzlcIjogMjc5LFxuICAgIFwiMjgwXCI6IDI4MCxcbiAgICBcIjI4MVwiOiAyODEsXG4gICAgXCIyODJcIjogMjgyLFxuICAgIFwiMjgzXCI6IDI4MyxcbiAgICBcIjI4NFwiOiAyODQsXG4gICAgXCIyODVcIjogMjg1LFxuICAgIFwiMjg2XCI6IDI4NixcbiAgICBcIjI4N1wiOiAyODcsXG4gICAgXCIyODhcIjogMjg4LFxuICAgIFwiMjg5XCI6IDI4OSxcbiAgICBcIjI5MFwiOiAyOTAsXG4gICAgXCIyOTFcIjogMjkxLFxuICAgIFwiMjkyXCI6IDI5MixcbiAgICBcIjI5M1wiOiAyOTMsXG4gICAgXCIyOTRcIjogMjk0LFxuICAgIFwiMjk1XCI6IDI5NSxcbiAgICBcIjI5NlwiOiAyOTYsXG4gICAgXCIyOTdcIjogMjk3LFxuICAgIFwiMjk4XCI6IDI5OCxcbiAgICBcIjI5OVwiOiAyOTksXG4gICAgXCIzMDBcIjogMzAwLFxuICAgIFwiMzAxXCI6IDMwMSxcbiAgICBcIjMwMlwiOiAzMDIsXG4gICAgXCIzMDNcIjogMzAzLFxuICAgIFwiMzA0XCI6IDMwNCxcbiAgICBcIjMwNVwiOiAzMDUsXG4gICAgXCIzMDZcIjogMzA2LFxuICAgIFwiMzA3XCI6IDMwNyxcbiAgICBcIjMwOFwiOiAzMDgsXG4gICAgXCIzMDlcIjogMzA5LFxuICAgIFwiMzEwXCI6IDMxMCxcbiAgICBcIjMxMVwiOiAzMTEsXG4gICAgXCIzMTJcIjogMzEyLFxuICAgIFwiMzEzXCI6IDMxMyxcbiAgICBcIjMxNFwiOiAzMTQsXG4gICAgXCIzMTVcIjogMzE1LFxuICAgIFwiMzE2XCI6IDMxNixcbiAgICBcIjMxN1wiOiAzMTcsXG4gICAgXCIzMThcIjogMzE4LFxuICAgIFwiMzE5XCI6IDMxOSxcbiAgICBcIjMyMFwiOiAzMjAsXG4gICAgXCIzMjFcIjogMzIxLFxuICAgIFwiMzIyXCI6IDMyMixcbiAgICBcIjMyM1wiOiAzMjMsXG4gICAgXCIzMjRcIjogMzI0LFxuICAgIFwiMzI1XCI6IDMyNSxcbiAgICBcIjMyNlwiOiAzMjZcbiAgfV0sXG4gIDMyODogW2Z1bmN0aW9uIChfZGVyZXFfLCBtb2R1bGUsIGV4cG9ydHMpIHtcbiAgICAoZnVuY3Rpb24gKGdsb2JhbCkge1xuICAgICAgLyoqXG4gICAgICAgKiBDb3B5cmlnaHQgKGMpIDIwMTQsIEZhY2Vib29rLCBJbmMuXG4gICAgICAgKiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICAgICAgICpcbiAgICAgICAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIEJTRC1zdHlsZSBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICAgICAgICogaHR0cHM6Ly9yYXcuZ2l0aHViLmNvbS9mYWNlYm9vay9yZWdlbmVyYXRvci9tYXN0ZXIvTElDRU5TRSBmaWxlLiBBblxuICAgICAgICogYWRkaXRpb25hbCBncmFudCBvZiBwYXRlbnQgcmlnaHRzIGNhbiBiZSBmb3VuZCBpbiB0aGUgUEFURU5UUyBmaWxlIGluXG4gICAgICAgKiB0aGUgc2FtZSBkaXJlY3RvcnkuXG4gICAgICAgKi9cbiAgICAgICFmdW5jdGlvbiAoZ2xvYmFsKSB7XG4gICAgICAgIFwidXNlIHN0cmljdFwiO1xuXG4gICAgICAgIHZhciBPcCA9IE9iamVjdC5wcm90b3R5cGU7XG4gICAgICAgIHZhciBoYXNPd24gPSBPcC5oYXNPd25Qcm9wZXJ0eTtcbiAgICAgICAgdmFyIHVuZGVmaW5lZDsgLy8gTW9yZSBjb21wcmVzc2libGUgdGhhbiB2b2lkIDAuXG5cbiAgICAgICAgdmFyICRTeW1ib2wgPSB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgPyBTeW1ib2wgOiB7fTtcbiAgICAgICAgdmFyIGl0ZXJhdG9yU3ltYm9sID0gJFN5bWJvbC5pdGVyYXRvciB8fCBcIkBAaXRlcmF0b3JcIjtcbiAgICAgICAgdmFyIGFzeW5jSXRlcmF0b3JTeW1ib2wgPSAkU3ltYm9sLmFzeW5jSXRlcmF0b3IgfHwgXCJAQGFzeW5jSXRlcmF0b3JcIjtcbiAgICAgICAgdmFyIHRvU3RyaW5nVGFnU3ltYm9sID0gJFN5bWJvbC50b1N0cmluZ1RhZyB8fCBcIkBAdG9TdHJpbmdUYWdcIjtcbiAgICAgICAgdmFyIGluTW9kdWxlID0gX3R5cGVvZihtb2R1bGUpID09PSBcIm9iamVjdFwiO1xuICAgICAgICB2YXIgcnVudGltZSA9IGdsb2JhbC5yZWdlbmVyYXRvclJ1bnRpbWU7XG5cbiAgICAgICAgaWYgKHJ1bnRpbWUpIHtcbiAgICAgICAgICBpZiAoaW5Nb2R1bGUpIHtcbiAgICAgICAgICAgIC8vIElmIHJlZ2VuZXJhdG9yUnVudGltZSBpcyBkZWZpbmVkIGdsb2JhbGx5IGFuZCB3ZSdyZSBpbiBhIG1vZHVsZSxcbiAgICAgICAgICAgIC8vIG1ha2UgdGhlIGV4cG9ydHMgb2JqZWN0IGlkZW50aWNhbCB0byByZWdlbmVyYXRvclJ1bnRpbWUuXG4gICAgICAgICAgICBtb2R1bGUuZXhwb3J0cyA9IHJ1bnRpbWU7XG4gICAgICAgICAgfSAvLyBEb24ndCBib3RoZXIgZXZhbHVhdGluZyB0aGUgcmVzdCBvZiB0aGlzIGZpbGUgaWYgdGhlIHJ1bnRpbWUgd2FzXG4gICAgICAgICAgLy8gYWxyZWFkeSBkZWZpbmVkIGdsb2JhbGx5LlxuXG5cbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH0gLy8gRGVmaW5lIHRoZSBydW50aW1lIGdsb2JhbGx5IChhcyBleHBlY3RlZCBieSBnZW5lcmF0ZWQgY29kZSkgYXMgZWl0aGVyXG4gICAgICAgIC8vIG1vZHVsZS5leHBvcnRzIChpZiB3ZSdyZSBpbiBhIG1vZHVsZSkgb3IgYSBuZXcsIGVtcHR5IG9iamVjdC5cblxuXG4gICAgICAgIHJ1bnRpbWUgPSBnbG9iYWwucmVnZW5lcmF0b3JSdW50aW1lID0gaW5Nb2R1bGUgPyBtb2R1bGUuZXhwb3J0cyA6IHt9O1xuXG4gICAgICAgIGZ1bmN0aW9uIHdyYXAoaW5uZXJGbiwgb3V0ZXJGbiwgc2VsZiwgdHJ5TG9jc0xpc3QpIHtcbiAgICAgICAgICAvLyBJZiBvdXRlckZuIHByb3ZpZGVkIGFuZCBvdXRlckZuLnByb3RvdHlwZSBpcyBhIEdlbmVyYXRvciwgdGhlbiBvdXRlckZuLnByb3RvdHlwZSBpbnN0YW5jZW9mIEdlbmVyYXRvci5cbiAgICAgICAgICB2YXIgcHJvdG9HZW5lcmF0b3IgPSBvdXRlckZuICYmIG91dGVyRm4ucHJvdG90eXBlIGluc3RhbmNlb2YgR2VuZXJhdG9yID8gb3V0ZXJGbiA6IEdlbmVyYXRvcjtcbiAgICAgICAgICB2YXIgZ2VuZXJhdG9yID0gT2JqZWN0LmNyZWF0ZShwcm90b0dlbmVyYXRvci5wcm90b3R5cGUpO1xuICAgICAgICAgIHZhciBjb250ZXh0ID0gbmV3IENvbnRleHQodHJ5TG9jc0xpc3QgfHwgW10pOyAvLyBUaGUgLl9pbnZva2UgbWV0aG9kIHVuaWZpZXMgdGhlIGltcGxlbWVudGF0aW9ucyBvZiB0aGUgLm5leHQsXG4gICAgICAgICAgLy8gLnRocm93LCBhbmQgLnJldHVybiBtZXRob2RzLlxuXG4gICAgICAgICAgZ2VuZXJhdG9yLl9pbnZva2UgPSBtYWtlSW52b2tlTWV0aG9kKGlubmVyRm4sIHNlbGYsIGNvbnRleHQpO1xuICAgICAgICAgIHJldHVybiBnZW5lcmF0b3I7XG4gICAgICAgIH1cblxuICAgICAgICBydW50aW1lLndyYXAgPSB3cmFwOyAvLyBUcnkvY2F0Y2ggaGVscGVyIHRvIG1pbmltaXplIGRlb3B0aW1pemF0aW9ucy4gUmV0dXJucyBhIGNvbXBsZXRpb25cbiAgICAgICAgLy8gcmVjb3JkIGxpa2UgY29udGV4dC50cnlFbnRyaWVzW2ldLmNvbXBsZXRpb24uIFRoaXMgaW50ZXJmYWNlIGNvdWxkXG4gICAgICAgIC8vIGhhdmUgYmVlbiAoYW5kIHdhcyBwcmV2aW91c2x5KSBkZXNpZ25lZCB0byB0YWtlIGEgY2xvc3VyZSB0byBiZVxuICAgICAgICAvLyBpbnZva2VkIHdpdGhvdXQgYXJndW1lbnRzLCBidXQgaW4gYWxsIHRoZSBjYXNlcyB3ZSBjYXJlIGFib3V0IHdlXG4gICAgICAgIC8vIGFscmVhZHkgaGF2ZSBhbiBleGlzdGluZyBtZXRob2Qgd2Ugd2FudCB0byBjYWxsLCBzbyB0aGVyZSdzIG5vIG5lZWRcbiAgICAgICAgLy8gdG8gY3JlYXRlIGEgbmV3IGZ1bmN0aW9uIG9iamVjdC4gV2UgY2FuIGV2ZW4gZ2V0IGF3YXkgd2l0aCBhc3N1bWluZ1xuICAgICAgICAvLyB0aGUgbWV0aG9kIHRha2VzIGV4YWN0bHkgb25lIGFyZ3VtZW50LCBzaW5jZSB0aGF0IGhhcHBlbnMgdG8gYmUgdHJ1ZVxuICAgICAgICAvLyBpbiBldmVyeSBjYXNlLCBzbyB3ZSBkb24ndCBoYXZlIHRvIHRvdWNoIHRoZSBhcmd1bWVudHMgb2JqZWN0LiBUaGVcbiAgICAgICAgLy8gb25seSBhZGRpdGlvbmFsIGFsbG9jYXRpb24gcmVxdWlyZWQgaXMgdGhlIGNvbXBsZXRpb24gcmVjb3JkLCB3aGljaFxuICAgICAgICAvLyBoYXMgYSBzdGFibGUgc2hhcGUgYW5kIHNvIGhvcGVmdWxseSBzaG91bGQgYmUgY2hlYXAgdG8gYWxsb2NhdGUuXG5cbiAgICAgICAgZnVuY3Rpb24gdHJ5Q2F0Y2goZm4sIG9iaiwgYXJnKSB7XG4gICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgIHR5cGU6IFwibm9ybWFsXCIsXG4gICAgICAgICAgICAgIGFyZzogZm4uY2FsbChvYmosIGFyZylcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICB0eXBlOiBcInRocm93XCIsXG4gICAgICAgICAgICAgIGFyZzogZXJyXG4gICAgICAgICAgICB9O1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHZhciBHZW5TdGF0ZVN1c3BlbmRlZFN0YXJ0ID0gXCJzdXNwZW5kZWRTdGFydFwiO1xuICAgICAgICB2YXIgR2VuU3RhdGVTdXNwZW5kZWRZaWVsZCA9IFwic3VzcGVuZGVkWWllbGRcIjtcbiAgICAgICAgdmFyIEdlblN0YXRlRXhlY3V0aW5nID0gXCJleGVjdXRpbmdcIjtcbiAgICAgICAgdmFyIEdlblN0YXRlQ29tcGxldGVkID0gXCJjb21wbGV0ZWRcIjsgLy8gUmV0dXJuaW5nIHRoaXMgb2JqZWN0IGZyb20gdGhlIGlubmVyRm4gaGFzIHRoZSBzYW1lIGVmZmVjdCBhc1xuICAgICAgICAvLyBicmVha2luZyBvdXQgb2YgdGhlIGRpc3BhdGNoIHN3aXRjaCBzdGF0ZW1lbnQuXG5cbiAgICAgICAgdmFyIENvbnRpbnVlU2VudGluZWwgPSB7fTsgLy8gRHVtbXkgY29uc3RydWN0b3IgZnVuY3Rpb25zIHRoYXQgd2UgdXNlIGFzIHRoZSAuY29uc3RydWN0b3IgYW5kXG4gICAgICAgIC8vIC5jb25zdHJ1Y3Rvci5wcm90b3R5cGUgcHJvcGVydGllcyBmb3IgZnVuY3Rpb25zIHRoYXQgcmV0dXJuIEdlbmVyYXRvclxuICAgICAgICAvLyBvYmplY3RzLiBGb3IgZnVsbCBzcGVjIGNvbXBsaWFuY2UsIHlvdSBtYXkgd2lzaCB0byBjb25maWd1cmUgeW91clxuICAgICAgICAvLyBtaW5pZmllciBub3QgdG8gbWFuZ2xlIHRoZSBuYW1lcyBvZiB0aGVzZSB0d28gZnVuY3Rpb25zLlxuXG4gICAgICAgIGZ1bmN0aW9uIEdlbmVyYXRvcigpIHt9XG5cbiAgICAgICAgZnVuY3Rpb24gR2VuZXJhdG9yRnVuY3Rpb24oKSB7fVxuXG4gICAgICAgIGZ1bmN0aW9uIEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlKCkge30gLy8gVGhpcyBpcyBhIHBvbHlmaWxsIGZvciAlSXRlcmF0b3JQcm90b3R5cGUlIGZvciBlbnZpcm9ubWVudHMgdGhhdFxuICAgICAgICAvLyBkb24ndCBuYXRpdmVseSBzdXBwb3J0IGl0LlxuXG5cbiAgICAgICAgdmFyIEl0ZXJhdG9yUHJvdG90eXBlID0ge307XG5cbiAgICAgICAgSXRlcmF0b3JQcm90b3R5cGVbaXRlcmF0b3JTeW1ib2xdID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgICB9O1xuXG4gICAgICAgIHZhciBnZXRQcm90byA9IE9iamVjdC5nZXRQcm90b3R5cGVPZjtcbiAgICAgICAgdmFyIE5hdGl2ZUl0ZXJhdG9yUHJvdG90eXBlID0gZ2V0UHJvdG8gJiYgZ2V0UHJvdG8oZ2V0UHJvdG8odmFsdWVzKFtdKSkpO1xuXG4gICAgICAgIGlmIChOYXRpdmVJdGVyYXRvclByb3RvdHlwZSAmJiBOYXRpdmVJdGVyYXRvclByb3RvdHlwZSAhPT0gT3AgJiYgaGFzT3duLmNhbGwoTmF0aXZlSXRlcmF0b3JQcm90b3R5cGUsIGl0ZXJhdG9yU3ltYm9sKSkge1xuICAgICAgICAgIC8vIFRoaXMgZW52aXJvbm1lbnQgaGFzIGEgbmF0aXZlICVJdGVyYXRvclByb3RvdHlwZSU7IHVzZSBpdCBpbnN0ZWFkXG4gICAgICAgICAgLy8gb2YgdGhlIHBvbHlmaWxsLlxuICAgICAgICAgIEl0ZXJhdG9yUHJvdG90eXBlID0gTmF0aXZlSXRlcmF0b3JQcm90b3R5cGU7XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgR3AgPSBHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZS5wcm90b3R5cGUgPSBHZW5lcmF0b3IucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShJdGVyYXRvclByb3RvdHlwZSk7XG4gICAgICAgIEdlbmVyYXRvckZ1bmN0aW9uLnByb3RvdHlwZSA9IEdwLmNvbnN0cnVjdG9yID0gR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGU7XG4gICAgICAgIEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlLmNvbnN0cnVjdG9yID0gR2VuZXJhdG9yRnVuY3Rpb247XG4gICAgICAgIEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlW3RvU3RyaW5nVGFnU3ltYm9sXSA9IEdlbmVyYXRvckZ1bmN0aW9uLmRpc3BsYXlOYW1lID0gXCJHZW5lcmF0b3JGdW5jdGlvblwiOyAvLyBIZWxwZXIgZm9yIGRlZmluaW5nIHRoZSAubmV4dCwgLnRocm93LCBhbmQgLnJldHVybiBtZXRob2RzIG9mIHRoZVxuICAgICAgICAvLyBJdGVyYXRvciBpbnRlcmZhY2UgaW4gdGVybXMgb2YgYSBzaW5nbGUgLl9pbnZva2UgbWV0aG9kLlxuXG4gICAgICAgIGZ1bmN0aW9uIGRlZmluZUl0ZXJhdG9yTWV0aG9kcyhwcm90b3R5cGUpIHtcbiAgICAgICAgICBbXCJuZXh0XCIsIFwidGhyb3dcIiwgXCJyZXR1cm5cIl0uZm9yRWFjaChmdW5jdGlvbiAobWV0aG9kKSB7XG4gICAgICAgICAgICBwcm90b3R5cGVbbWV0aG9kXSA9IGZ1bmN0aW9uIChhcmcpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuX2ludm9rZShtZXRob2QsIGFyZyk7XG4gICAgICAgICAgICB9O1xuICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgcnVudGltZS5pc0dlbmVyYXRvckZ1bmN0aW9uID0gZnVuY3Rpb24gKGdlbkZ1bikge1xuICAgICAgICAgIHZhciBjdG9yID0gdHlwZW9mIGdlbkZ1biA9PT0gXCJmdW5jdGlvblwiICYmIGdlbkZ1bi5jb25zdHJ1Y3RvcjtcbiAgICAgICAgICByZXR1cm4gY3RvciA/IGN0b3IgPT09IEdlbmVyYXRvckZ1bmN0aW9uIHx8IC8vIEZvciB0aGUgbmF0aXZlIEdlbmVyYXRvckZ1bmN0aW9uIGNvbnN0cnVjdG9yLCB0aGUgYmVzdCB3ZSBjYW5cbiAgICAgICAgICAvLyBkbyBpcyB0byBjaGVjayBpdHMgLm5hbWUgcHJvcGVydHkuXG4gICAgICAgICAgKGN0b3IuZGlzcGxheU5hbWUgfHwgY3Rvci5uYW1lKSA9PT0gXCJHZW5lcmF0b3JGdW5jdGlvblwiIDogZmFsc2U7XG4gICAgICAgIH07XG5cbiAgICAgICAgcnVudGltZS5tYXJrID0gZnVuY3Rpb24gKGdlbkZ1bikge1xuICAgICAgICAgIGlmIChPYmplY3Quc2V0UHJvdG90eXBlT2YpIHtcbiAgICAgICAgICAgIE9iamVjdC5zZXRQcm90b3R5cGVPZihnZW5GdW4sIEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgZ2VuRnVuLl9fcHJvdG9fXyA9IEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlO1xuXG4gICAgICAgICAgICBpZiAoISh0b1N0cmluZ1RhZ1N5bWJvbCBpbiBnZW5GdW4pKSB7XG4gICAgICAgICAgICAgIGdlbkZ1blt0b1N0cmluZ1RhZ1N5bWJvbF0gPSBcIkdlbmVyYXRvckZ1bmN0aW9uXCI7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgZ2VuRnVuLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoR3ApO1xuICAgICAgICAgIHJldHVybiBnZW5GdW47XG4gICAgICAgIH07IC8vIFdpdGhpbiB0aGUgYm9keSBvZiBhbnkgYXN5bmMgZnVuY3Rpb24sIGBhd2FpdCB4YCBpcyB0cmFuc2Zvcm1lZCB0b1xuICAgICAgICAvLyBgeWllbGQgcmVnZW5lcmF0b3JSdW50aW1lLmF3cmFwKHgpYCwgc28gdGhhdCB0aGUgcnVudGltZSBjYW4gdGVzdFxuICAgICAgICAvLyBgaGFzT3duLmNhbGwodmFsdWUsIFwiX19hd2FpdFwiKWAgdG8gZGV0ZXJtaW5lIGlmIHRoZSB5aWVsZGVkIHZhbHVlIGlzXG4gICAgICAgIC8vIG1lYW50IHRvIGJlIGF3YWl0ZWQuXG5cblxuICAgICAgICBydW50aW1lLmF3cmFwID0gZnVuY3Rpb24gKGFyZykge1xuICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBfX2F3YWl0OiBhcmdcbiAgICAgICAgICB9O1xuICAgICAgICB9O1xuXG4gICAgICAgIGZ1bmN0aW9uIEFzeW5jSXRlcmF0b3IoZ2VuZXJhdG9yKSB7XG4gICAgICAgICAgZnVuY3Rpb24gaW52b2tlKG1ldGhvZCwgYXJnLCByZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgICAgIHZhciByZWNvcmQgPSB0cnlDYXRjaChnZW5lcmF0b3JbbWV0aG9kXSwgZ2VuZXJhdG9yLCBhcmcpO1xuXG4gICAgICAgICAgICBpZiAocmVjb3JkLnR5cGUgPT09IFwidGhyb3dcIikge1xuICAgICAgICAgICAgICByZWplY3QocmVjb3JkLmFyZyk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICB2YXIgcmVzdWx0ID0gcmVjb3JkLmFyZztcbiAgICAgICAgICAgICAgdmFyIHZhbHVlID0gcmVzdWx0LnZhbHVlO1xuXG4gICAgICAgICAgICAgIGlmICh2YWx1ZSAmJiBfdHlwZW9mKHZhbHVlKSA9PT0gXCJvYmplY3RcIiAmJiBoYXNPd24uY2FsbCh2YWx1ZSwgXCJfX2F3YWl0XCIpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSh2YWx1ZS5fX2F3YWl0KS50aGVuKGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICAgICAgICAgICAgaW52b2tlKFwibmV4dFwiLCB2YWx1ZSwgcmVzb2x2ZSwgcmVqZWN0KTtcbiAgICAgICAgICAgICAgICB9LCBmdW5jdGlvbiAoZXJyKSB7XG4gICAgICAgICAgICAgICAgICBpbnZva2UoXCJ0aHJvd1wiLCBlcnIsIHJlc29sdmUsIHJlamVjdCk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHZhbHVlKS50aGVuKGZ1bmN0aW9uICh1bndyYXBwZWQpIHtcbiAgICAgICAgICAgICAgICAvLyBXaGVuIGEgeWllbGRlZCBQcm9taXNlIGlzIHJlc29sdmVkLCBpdHMgZmluYWwgdmFsdWUgYmVjb21lc1xuICAgICAgICAgICAgICAgIC8vIHRoZSAudmFsdWUgb2YgdGhlIFByb21pc2U8e3ZhbHVlLGRvbmV9PiByZXN1bHQgZm9yIHRoZVxuICAgICAgICAgICAgICAgIC8vIGN1cnJlbnQgaXRlcmF0aW9uLiBJZiB0aGUgUHJvbWlzZSBpcyByZWplY3RlZCwgaG93ZXZlciwgdGhlXG4gICAgICAgICAgICAgICAgLy8gcmVzdWx0IGZvciB0aGlzIGl0ZXJhdGlvbiB3aWxsIGJlIHJlamVjdGVkIHdpdGggdGhlIHNhbWVcbiAgICAgICAgICAgICAgICAvLyByZWFzb24uIE5vdGUgdGhhdCByZWplY3Rpb25zIG9mIHlpZWxkZWQgUHJvbWlzZXMgYXJlIG5vdFxuICAgICAgICAgICAgICAgIC8vIHRocm93biBiYWNrIGludG8gdGhlIGdlbmVyYXRvciBmdW5jdGlvbiwgYXMgaXMgdGhlIGNhc2VcbiAgICAgICAgICAgICAgICAvLyB3aGVuIGFuIGF3YWl0ZWQgUHJvbWlzZSBpcyByZWplY3RlZC4gVGhpcyBkaWZmZXJlbmNlIGluXG4gICAgICAgICAgICAgICAgLy8gYmVoYXZpb3IgYmV0d2VlbiB5aWVsZCBhbmQgYXdhaXQgaXMgaW1wb3J0YW50LCBiZWNhdXNlIGl0XG4gICAgICAgICAgICAgICAgLy8gYWxsb3dzIHRoZSBjb25zdW1lciB0byBkZWNpZGUgd2hhdCB0byBkbyB3aXRoIHRoZSB5aWVsZGVkXG4gICAgICAgICAgICAgICAgLy8gcmVqZWN0aW9uIChzd2FsbG93IGl0IGFuZCBjb250aW51ZSwgbWFudWFsbHkgLnRocm93IGl0IGJhY2tcbiAgICAgICAgICAgICAgICAvLyBpbnRvIHRoZSBnZW5lcmF0b3IsIGFiYW5kb24gaXRlcmF0aW9uLCB3aGF0ZXZlcikuIFdpdGhcbiAgICAgICAgICAgICAgICAvLyBhd2FpdCwgYnkgY29udHJhc3QsIHRoZXJlIGlzIG5vIG9wcG9ydHVuaXR5IHRvIGV4YW1pbmUgdGhlXG4gICAgICAgICAgICAgICAgLy8gcmVqZWN0aW9uIHJlYXNvbiBvdXRzaWRlIHRoZSBnZW5lcmF0b3IgZnVuY3Rpb24sIHNvIHRoZVxuICAgICAgICAgICAgICAgIC8vIG9ubHkgb3B0aW9uIGlzIHRvIHRocm93IGl0IGZyb20gdGhlIGF3YWl0IGV4cHJlc3Npb24sIGFuZFxuICAgICAgICAgICAgICAgIC8vIGxldCB0aGUgZ2VuZXJhdG9yIGZ1bmN0aW9uIGhhbmRsZSB0aGUgZXhjZXB0aW9uLlxuICAgICAgICAgICAgICAgIHJlc3VsdC52YWx1ZSA9IHVud3JhcHBlZDtcbiAgICAgICAgICAgICAgICByZXNvbHZlKHJlc3VsdCk7XG4gICAgICAgICAgICAgIH0sIHJlamVjdCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaWYgKF90eXBlb2YoZ2xvYmFsLnByb2Nlc3MpID09PSBcIm9iamVjdFwiICYmIGdsb2JhbC5wcm9jZXNzLmRvbWFpbikge1xuICAgICAgICAgICAgaW52b2tlID0gZ2xvYmFsLnByb2Nlc3MuZG9tYWluLmJpbmQoaW52b2tlKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICB2YXIgcHJldmlvdXNQcm9taXNlO1xuXG4gICAgICAgICAgZnVuY3Rpb24gZW5xdWV1ZShtZXRob2QsIGFyZykge1xuICAgICAgICAgICAgZnVuY3Rpb24gY2FsbEludm9rZVdpdGhNZXRob2RBbmRBcmcoKSB7XG4gICAgICAgICAgICAgIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgICAgICAgICAgaW52b2tlKG1ldGhvZCwgYXJnLCByZXNvbHZlLCByZWplY3QpO1xuICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmV0dXJuIHByZXZpb3VzUHJvbWlzZSA9IC8vIElmIGVucXVldWUgaGFzIGJlZW4gY2FsbGVkIGJlZm9yZSwgdGhlbiB3ZSB3YW50IHRvIHdhaXQgdW50aWxcbiAgICAgICAgICAgIC8vIGFsbCBwcmV2aW91cyBQcm9taXNlcyBoYXZlIGJlZW4gcmVzb2x2ZWQgYmVmb3JlIGNhbGxpbmcgaW52b2tlLFxuICAgICAgICAgICAgLy8gc28gdGhhdCByZXN1bHRzIGFyZSBhbHdheXMgZGVsaXZlcmVkIGluIHRoZSBjb3JyZWN0IG9yZGVyLiBJZlxuICAgICAgICAgICAgLy8gZW5xdWV1ZSBoYXMgbm90IGJlZW4gY2FsbGVkIGJlZm9yZSwgdGhlbiBpdCBpcyBpbXBvcnRhbnQgdG9cbiAgICAgICAgICAgIC8vIGNhbGwgaW52b2tlIGltbWVkaWF0ZWx5LCB3aXRob3V0IHdhaXRpbmcgb24gYSBjYWxsYmFjayB0byBmaXJlLFxuICAgICAgICAgICAgLy8gc28gdGhhdCB0aGUgYXN5bmMgZ2VuZXJhdG9yIGZ1bmN0aW9uIGhhcyB0aGUgb3Bwb3J0dW5pdHkgdG8gZG9cbiAgICAgICAgICAgIC8vIGFueSBuZWNlc3Nhcnkgc2V0dXAgaW4gYSBwcmVkaWN0YWJsZSB3YXkuIFRoaXMgcHJlZGljdGFiaWxpdHlcbiAgICAgICAgICAgIC8vIGlzIHdoeSB0aGUgUHJvbWlzZSBjb25zdHJ1Y3RvciBzeW5jaHJvbm91c2x5IGludm9rZXMgaXRzXG4gICAgICAgICAgICAvLyBleGVjdXRvciBjYWxsYmFjaywgYW5kIHdoeSBhc3luYyBmdW5jdGlvbnMgc3luY2hyb25vdXNseVxuICAgICAgICAgICAgLy8gZXhlY3V0ZSBjb2RlIGJlZm9yZSB0aGUgZmlyc3QgYXdhaXQuIFNpbmNlIHdlIGltcGxlbWVudCBzaW1wbGVcbiAgICAgICAgICAgIC8vIGFzeW5jIGZ1bmN0aW9ucyBpbiB0ZXJtcyBvZiBhc3luYyBnZW5lcmF0b3JzLCBpdCBpcyBlc3BlY2lhbGx5XG4gICAgICAgICAgICAvLyBpbXBvcnRhbnQgdG8gZ2V0IHRoaXMgcmlnaHQsIGV2ZW4gdGhvdWdoIGl0IHJlcXVpcmVzIGNhcmUuXG4gICAgICAgICAgICBwcmV2aW91c1Byb21pc2UgPyBwcmV2aW91c1Byb21pc2UudGhlbihjYWxsSW52b2tlV2l0aE1ldGhvZEFuZEFyZywgLy8gQXZvaWQgcHJvcGFnYXRpbmcgZmFpbHVyZXMgdG8gUHJvbWlzZXMgcmV0dXJuZWQgYnkgbGF0ZXJcbiAgICAgICAgICAgIC8vIGludm9jYXRpb25zIG9mIHRoZSBpdGVyYXRvci5cbiAgICAgICAgICAgIGNhbGxJbnZva2VXaXRoTWV0aG9kQW5kQXJnKSA6IGNhbGxJbnZva2VXaXRoTWV0aG9kQW5kQXJnKCk7XG4gICAgICAgICAgfSAvLyBEZWZpbmUgdGhlIHVuaWZpZWQgaGVscGVyIG1ldGhvZCB0aGF0IGlzIHVzZWQgdG8gaW1wbGVtZW50IC5uZXh0LFxuICAgICAgICAgIC8vIC50aHJvdywgYW5kIC5yZXR1cm4gKHNlZSBkZWZpbmVJdGVyYXRvck1ldGhvZHMpLlxuXG5cbiAgICAgICAgICB0aGlzLl9pbnZva2UgPSBlbnF1ZXVlO1xuICAgICAgICB9XG5cbiAgICAgICAgZGVmaW5lSXRlcmF0b3JNZXRob2RzKEFzeW5jSXRlcmF0b3IucHJvdG90eXBlKTtcblxuICAgICAgICBBc3luY0l0ZXJhdG9yLnByb3RvdHlwZVthc3luY0l0ZXJhdG9yU3ltYm9sXSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgICAgfTtcblxuICAgICAgICBydW50aW1lLkFzeW5jSXRlcmF0b3IgPSBBc3luY0l0ZXJhdG9yOyAvLyBOb3RlIHRoYXQgc2ltcGxlIGFzeW5jIGZ1bmN0aW9ucyBhcmUgaW1wbGVtZW50ZWQgb24gdG9wIG9mXG4gICAgICAgIC8vIEFzeW5jSXRlcmF0b3Igb2JqZWN0czsgdGhleSBqdXN0IHJldHVybiBhIFByb21pc2UgZm9yIHRoZSB2YWx1ZSBvZlxuICAgICAgICAvLyB0aGUgZmluYWwgcmVzdWx0IHByb2R1Y2VkIGJ5IHRoZSBpdGVyYXRvci5cblxuICAgICAgICBydW50aW1lLmFzeW5jID0gZnVuY3Rpb24gKGlubmVyRm4sIG91dGVyRm4sIHNlbGYsIHRyeUxvY3NMaXN0KSB7XG4gICAgICAgICAgdmFyIGl0ZXIgPSBuZXcgQXN5bmNJdGVyYXRvcih3cmFwKGlubmVyRm4sIG91dGVyRm4sIHNlbGYsIHRyeUxvY3NMaXN0KSk7XG4gICAgICAgICAgcmV0dXJuIHJ1bnRpbWUuaXNHZW5lcmF0b3JGdW5jdGlvbihvdXRlckZuKSA/IGl0ZXIgLy8gSWYgb3V0ZXJGbiBpcyBhIGdlbmVyYXRvciwgcmV0dXJuIHRoZSBmdWxsIGl0ZXJhdG9yLlxuICAgICAgICAgIDogaXRlci5uZXh0KCkudGhlbihmdW5jdGlvbiAocmVzdWx0KSB7XG4gICAgICAgICAgICByZXR1cm4gcmVzdWx0LmRvbmUgPyByZXN1bHQudmFsdWUgOiBpdGVyLm5leHQoKTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfTtcblxuICAgICAgICBmdW5jdGlvbiBtYWtlSW52b2tlTWV0aG9kKGlubmVyRm4sIHNlbGYsIGNvbnRleHQpIHtcbiAgICAgICAgICB2YXIgc3RhdGUgPSBHZW5TdGF0ZVN1c3BlbmRlZFN0YXJ0O1xuICAgICAgICAgIHJldHVybiBmdW5jdGlvbiBpbnZva2UobWV0aG9kLCBhcmcpIHtcbiAgICAgICAgICAgIGlmIChzdGF0ZSA9PT0gR2VuU3RhdGVFeGVjdXRpbmcpIHtcbiAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiR2VuZXJhdG9yIGlzIGFscmVhZHkgcnVubmluZ1wiKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKHN0YXRlID09PSBHZW5TdGF0ZUNvbXBsZXRlZCkge1xuICAgICAgICAgICAgICBpZiAobWV0aG9kID09PSBcInRocm93XCIpIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBhcmc7XG4gICAgICAgICAgICAgIH0gLy8gQmUgZm9yZ2l2aW5nLCBwZXIgMjUuMy4zLjMuMyBvZiB0aGUgc3BlYzpcbiAgICAgICAgICAgICAgLy8gaHR0cHM6Ly9wZW9wbGUubW96aWxsYS5vcmcvfmpvcmVuZG9yZmYvZXM2LWRyYWZ0Lmh0bWwjc2VjLWdlbmVyYXRvcnJlc3VtZVxuXG5cbiAgICAgICAgICAgICAgcmV0dXJuIGRvbmVSZXN1bHQoKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgY29udGV4dC5tZXRob2QgPSBtZXRob2Q7XG4gICAgICAgICAgICBjb250ZXh0LmFyZyA9IGFyZztcblxuICAgICAgICAgICAgd2hpbGUgKHRydWUpIHtcbiAgICAgICAgICAgICAgdmFyIGRlbGVnYXRlID0gY29udGV4dC5kZWxlZ2F0ZTtcblxuICAgICAgICAgICAgICBpZiAoZGVsZWdhdGUpIHtcbiAgICAgICAgICAgICAgICB2YXIgZGVsZWdhdGVSZXN1bHQgPSBtYXliZUludm9rZURlbGVnYXRlKGRlbGVnYXRlLCBjb250ZXh0KTtcblxuICAgICAgICAgICAgICAgIGlmIChkZWxlZ2F0ZVJlc3VsdCkge1xuICAgICAgICAgICAgICAgICAgaWYgKGRlbGVnYXRlUmVzdWx0ID09PSBDb250aW51ZVNlbnRpbmVsKSBjb250aW51ZTtcbiAgICAgICAgICAgICAgICAgIHJldHVybiBkZWxlZ2F0ZVJlc3VsdDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICBpZiAoY29udGV4dC5tZXRob2QgPT09IFwibmV4dFwiKSB7XG4gICAgICAgICAgICAgICAgLy8gU2V0dGluZyBjb250ZXh0Ll9zZW50IGZvciBsZWdhY3kgc3VwcG9ydCBvZiBCYWJlbCdzXG4gICAgICAgICAgICAgICAgLy8gZnVuY3Rpb24uc2VudCBpbXBsZW1lbnRhdGlvbi5cbiAgICAgICAgICAgICAgICBjb250ZXh0LnNlbnQgPSBjb250ZXh0Ll9zZW50ID0gY29udGV4dC5hcmc7XG4gICAgICAgICAgICAgIH0gZWxzZSBpZiAoY29udGV4dC5tZXRob2QgPT09IFwidGhyb3dcIikge1xuICAgICAgICAgICAgICAgIGlmIChzdGF0ZSA9PT0gR2VuU3RhdGVTdXNwZW5kZWRTdGFydCkge1xuICAgICAgICAgICAgICAgICAgc3RhdGUgPSBHZW5TdGF0ZUNvbXBsZXRlZDtcbiAgICAgICAgICAgICAgICAgIHRocm93IGNvbnRleHQuYXJnO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGNvbnRleHQuZGlzcGF0Y2hFeGNlcHRpb24oY29udGV4dC5hcmcpO1xuICAgICAgICAgICAgICB9IGVsc2UgaWYgKGNvbnRleHQubWV0aG9kID09PSBcInJldHVyblwiKSB7XG4gICAgICAgICAgICAgICAgY29udGV4dC5hYnJ1cHQoXCJyZXR1cm5cIiwgY29udGV4dC5hcmcpO1xuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgc3RhdGUgPSBHZW5TdGF0ZUV4ZWN1dGluZztcbiAgICAgICAgICAgICAgdmFyIHJlY29yZCA9IHRyeUNhdGNoKGlubmVyRm4sIHNlbGYsIGNvbnRleHQpO1xuXG4gICAgICAgICAgICAgIGlmIChyZWNvcmQudHlwZSA9PT0gXCJub3JtYWxcIikge1xuICAgICAgICAgICAgICAgIC8vIElmIGFuIGV4Y2VwdGlvbiBpcyB0aHJvd24gZnJvbSBpbm5lckZuLCB3ZSBsZWF2ZSBzdGF0ZSA9PT1cbiAgICAgICAgICAgICAgICAvLyBHZW5TdGF0ZUV4ZWN1dGluZyBhbmQgbG9vcCBiYWNrIGZvciBhbm90aGVyIGludm9jYXRpb24uXG4gICAgICAgICAgICAgICAgc3RhdGUgPSBjb250ZXh0LmRvbmUgPyBHZW5TdGF0ZUNvbXBsZXRlZCA6IEdlblN0YXRlU3VzcGVuZGVkWWllbGQ7XG5cbiAgICAgICAgICAgICAgICBpZiAocmVjb3JkLmFyZyA9PT0gQ29udGludWVTZW50aW5lbCkge1xuICAgICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAgIHZhbHVlOiByZWNvcmQuYXJnLFxuICAgICAgICAgICAgICAgICAgZG9uZTogY29udGV4dC5kb25lXG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgfSBlbHNlIGlmIChyZWNvcmQudHlwZSA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgICAgICAgICAgc3RhdGUgPSBHZW5TdGF0ZUNvbXBsZXRlZDsgLy8gRGlzcGF0Y2ggdGhlIGV4Y2VwdGlvbiBieSBsb29waW5nIGJhY2sgYXJvdW5kIHRvIHRoZVxuICAgICAgICAgICAgICAgIC8vIGNvbnRleHQuZGlzcGF0Y2hFeGNlcHRpb24oY29udGV4dC5hcmcpIGNhbGwgYWJvdmUuXG5cbiAgICAgICAgICAgICAgICBjb250ZXh0Lm1ldGhvZCA9IFwidGhyb3dcIjtcbiAgICAgICAgICAgICAgICBjb250ZXh0LmFyZyA9IHJlY29yZC5hcmc7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9O1xuICAgICAgICB9IC8vIENhbGwgZGVsZWdhdGUuaXRlcmF0b3JbY29udGV4dC5tZXRob2RdKGNvbnRleHQuYXJnKSBhbmQgaGFuZGxlIHRoZVxuICAgICAgICAvLyByZXN1bHQsIGVpdGhlciBieSByZXR1cm5pbmcgYSB7IHZhbHVlLCBkb25lIH0gcmVzdWx0IGZyb20gdGhlXG4gICAgICAgIC8vIGRlbGVnYXRlIGl0ZXJhdG9yLCBvciBieSBtb2RpZnlpbmcgY29udGV4dC5tZXRob2QgYW5kIGNvbnRleHQuYXJnLFxuICAgICAgICAvLyBzZXR0aW5nIGNvbnRleHQuZGVsZWdhdGUgdG8gbnVsbCwgYW5kIHJldHVybmluZyB0aGUgQ29udGludWVTZW50aW5lbC5cblxuXG4gICAgICAgIGZ1bmN0aW9uIG1heWJlSW52b2tlRGVsZWdhdGUoZGVsZWdhdGUsIGNvbnRleHQpIHtcbiAgICAgICAgICB2YXIgbWV0aG9kID0gZGVsZWdhdGUuaXRlcmF0b3JbY29udGV4dC5tZXRob2RdO1xuXG4gICAgICAgICAgaWYgKG1ldGhvZCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAvLyBBIC50aHJvdyBvciAucmV0dXJuIHdoZW4gdGhlIGRlbGVnYXRlIGl0ZXJhdG9yIGhhcyBubyAudGhyb3dcbiAgICAgICAgICAgIC8vIG1ldGhvZCBhbHdheXMgdGVybWluYXRlcyB0aGUgeWllbGQqIGxvb3AuXG4gICAgICAgICAgICBjb250ZXh0LmRlbGVnYXRlID0gbnVsbDtcblxuICAgICAgICAgICAgaWYgKGNvbnRleHQubWV0aG9kID09PSBcInRocm93XCIpIHtcbiAgICAgICAgICAgICAgaWYgKGRlbGVnYXRlLml0ZXJhdG9yLnJldHVybikge1xuICAgICAgICAgICAgICAgIC8vIElmIHRoZSBkZWxlZ2F0ZSBpdGVyYXRvciBoYXMgYSByZXR1cm4gbWV0aG9kLCBnaXZlIGl0IGFcbiAgICAgICAgICAgICAgICAvLyBjaGFuY2UgdG8gY2xlYW4gdXAuXG4gICAgICAgICAgICAgICAgY29udGV4dC5tZXRob2QgPSBcInJldHVyblwiO1xuICAgICAgICAgICAgICAgIGNvbnRleHQuYXJnID0gdW5kZWZpbmVkO1xuICAgICAgICAgICAgICAgIG1heWJlSW52b2tlRGVsZWdhdGUoZGVsZWdhdGUsIGNvbnRleHQpO1xuXG4gICAgICAgICAgICAgICAgaWYgKGNvbnRleHQubWV0aG9kID09PSBcInRocm93XCIpIHtcbiAgICAgICAgICAgICAgICAgIC8vIElmIG1heWJlSW52b2tlRGVsZWdhdGUoY29udGV4dCkgY2hhbmdlZCBjb250ZXh0Lm1ldGhvZCBmcm9tXG4gICAgICAgICAgICAgICAgICAvLyBcInJldHVyblwiIHRvIFwidGhyb3dcIiwgbGV0IHRoYXQgb3ZlcnJpZGUgdGhlIFR5cGVFcnJvciBiZWxvdy5cbiAgICAgICAgICAgICAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIGNvbnRleHQubWV0aG9kID0gXCJ0aHJvd1wiO1xuICAgICAgICAgICAgICBjb250ZXh0LmFyZyA9IG5ldyBUeXBlRXJyb3IoXCJUaGUgaXRlcmF0b3IgZG9lcyBub3QgcHJvdmlkZSBhICd0aHJvdycgbWV0aG9kXCIpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICB2YXIgcmVjb3JkID0gdHJ5Q2F0Y2gobWV0aG9kLCBkZWxlZ2F0ZS5pdGVyYXRvciwgY29udGV4dC5hcmcpO1xuXG4gICAgICAgICAgaWYgKHJlY29yZC50eXBlID09PSBcInRocm93XCIpIHtcbiAgICAgICAgICAgIGNvbnRleHQubWV0aG9kID0gXCJ0aHJvd1wiO1xuICAgICAgICAgICAgY29udGV4dC5hcmcgPSByZWNvcmQuYXJnO1xuICAgICAgICAgICAgY29udGV4dC5kZWxlZ2F0ZSA9IG51bGw7XG4gICAgICAgICAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICB2YXIgaW5mbyA9IHJlY29yZC5hcmc7XG5cbiAgICAgICAgICBpZiAoIWluZm8pIHtcbiAgICAgICAgICAgIGNvbnRleHQubWV0aG9kID0gXCJ0aHJvd1wiO1xuICAgICAgICAgICAgY29udGV4dC5hcmcgPSBuZXcgVHlwZUVycm9yKFwiaXRlcmF0b3IgcmVzdWx0IGlzIG5vdCBhbiBvYmplY3RcIik7XG4gICAgICAgICAgICBjb250ZXh0LmRlbGVnYXRlID0gbnVsbDtcbiAgICAgICAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGlmIChpbmZvLmRvbmUpIHtcbiAgICAgICAgICAgIC8vIEFzc2lnbiB0aGUgcmVzdWx0IG9mIHRoZSBmaW5pc2hlZCBkZWxlZ2F0ZSB0byB0aGUgdGVtcG9yYXJ5XG4gICAgICAgICAgICAvLyB2YXJpYWJsZSBzcGVjaWZpZWQgYnkgZGVsZWdhdGUucmVzdWx0TmFtZSAoc2VlIGRlbGVnYXRlWWllbGQpLlxuICAgICAgICAgICAgY29udGV4dFtkZWxlZ2F0ZS5yZXN1bHROYW1lXSA9IGluZm8udmFsdWU7IC8vIFJlc3VtZSBleGVjdXRpb24gYXQgdGhlIGRlc2lyZWQgbG9jYXRpb24gKHNlZSBkZWxlZ2F0ZVlpZWxkKS5cblxuICAgICAgICAgICAgY29udGV4dC5uZXh0ID0gZGVsZWdhdGUubmV4dExvYzsgLy8gSWYgY29udGV4dC5tZXRob2Qgd2FzIFwidGhyb3dcIiBidXQgdGhlIGRlbGVnYXRlIGhhbmRsZWQgdGhlXG4gICAgICAgICAgICAvLyBleGNlcHRpb24sIGxldCB0aGUgb3V0ZXIgZ2VuZXJhdG9yIHByb2NlZWQgbm9ybWFsbHkuIElmXG4gICAgICAgICAgICAvLyBjb250ZXh0Lm1ldGhvZCB3YXMgXCJuZXh0XCIsIGZvcmdldCBjb250ZXh0LmFyZyBzaW5jZSBpdCBoYXMgYmVlblxuICAgICAgICAgICAgLy8gXCJjb25zdW1lZFwiIGJ5IHRoZSBkZWxlZ2F0ZSBpdGVyYXRvci4gSWYgY29udGV4dC5tZXRob2Qgd2FzXG4gICAgICAgICAgICAvLyBcInJldHVyblwiLCBhbGxvdyB0aGUgb3JpZ2luYWwgLnJldHVybiBjYWxsIHRvIGNvbnRpbnVlIGluIHRoZVxuICAgICAgICAgICAgLy8gb3V0ZXIgZ2VuZXJhdG9yLlxuXG4gICAgICAgICAgICBpZiAoY29udGV4dC5tZXRob2QgIT09IFwicmV0dXJuXCIpIHtcbiAgICAgICAgICAgICAgY29udGV4dC5tZXRob2QgPSBcIm5leHRcIjtcbiAgICAgICAgICAgICAgY29udGV4dC5hcmcgPSB1bmRlZmluZWQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIC8vIFJlLXlpZWxkIHRoZSByZXN1bHQgcmV0dXJuZWQgYnkgdGhlIGRlbGVnYXRlIG1ldGhvZC5cbiAgICAgICAgICAgIHJldHVybiBpbmZvO1xuICAgICAgICAgIH0gLy8gVGhlIGRlbGVnYXRlIGl0ZXJhdG9yIGlzIGZpbmlzaGVkLCBzbyBmb3JnZXQgaXQgYW5kIGNvbnRpbnVlIHdpdGhcbiAgICAgICAgICAvLyB0aGUgb3V0ZXIgZ2VuZXJhdG9yLlxuXG5cbiAgICAgICAgICBjb250ZXh0LmRlbGVnYXRlID0gbnVsbDtcbiAgICAgICAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgICAgICAgfSAvLyBEZWZpbmUgR2VuZXJhdG9yLnByb3RvdHlwZS57bmV4dCx0aHJvdyxyZXR1cm59IGluIHRlcm1zIG9mIHRoZVxuICAgICAgICAvLyB1bmlmaWVkIC5faW52b2tlIGhlbHBlciBtZXRob2QuXG5cblxuICAgICAgICBkZWZpbmVJdGVyYXRvck1ldGhvZHMoR3ApO1xuICAgICAgICBHcFt0b1N0cmluZ1RhZ1N5bWJvbF0gPSBcIkdlbmVyYXRvclwiOyAvLyBBIEdlbmVyYXRvciBzaG91bGQgYWx3YXlzIHJldHVybiBpdHNlbGYgYXMgdGhlIGl0ZXJhdG9yIG9iamVjdCB3aGVuIHRoZVxuICAgICAgICAvLyBAQGl0ZXJhdG9yIGZ1bmN0aW9uIGlzIGNhbGxlZCBvbiBpdC4gU29tZSBicm93c2VycycgaW1wbGVtZW50YXRpb25zIG9mIHRoZVxuICAgICAgICAvLyBpdGVyYXRvciBwcm90b3R5cGUgY2hhaW4gaW5jb3JyZWN0bHkgaW1wbGVtZW50IHRoaXMsIGNhdXNpbmcgdGhlIEdlbmVyYXRvclxuICAgICAgICAvLyBvYmplY3QgdG8gbm90IGJlIHJldHVybmVkIGZyb20gdGhpcyBjYWxsLiBUaGlzIGVuc3VyZXMgdGhhdCBkb2Vzbid0IGhhcHBlbi5cbiAgICAgICAgLy8gU2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9mYWNlYm9vay9yZWdlbmVyYXRvci9pc3N1ZXMvMjc0IGZvciBtb3JlIGRldGFpbHMuXG5cbiAgICAgICAgR3BbaXRlcmF0b3JTeW1ib2xdID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgICB9O1xuXG4gICAgICAgIEdwLnRvU3RyaW5nID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgIHJldHVybiBcIltvYmplY3QgR2VuZXJhdG9yXVwiO1xuICAgICAgICB9O1xuXG4gICAgICAgIGZ1bmN0aW9uIHB1c2hUcnlFbnRyeShsb2NzKSB7XG4gICAgICAgICAgdmFyIGVudHJ5ID0ge1xuICAgICAgICAgICAgdHJ5TG9jOiBsb2NzWzBdXG4gICAgICAgICAgfTtcblxuICAgICAgICAgIGlmICgxIGluIGxvY3MpIHtcbiAgICAgICAgICAgIGVudHJ5LmNhdGNoTG9jID0gbG9jc1sxXTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpZiAoMiBpbiBsb2NzKSB7XG4gICAgICAgICAgICBlbnRyeS5maW5hbGx5TG9jID0gbG9jc1syXTtcbiAgICAgICAgICAgIGVudHJ5LmFmdGVyTG9jID0gbG9jc1szXTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICB0aGlzLnRyeUVudHJpZXMucHVzaChlbnRyeSk7XG4gICAgICAgIH1cblxuICAgICAgICBmdW5jdGlvbiByZXNldFRyeUVudHJ5KGVudHJ5KSB7XG4gICAgICAgICAgdmFyIHJlY29yZCA9IGVudHJ5LmNvbXBsZXRpb24gfHwge307XG4gICAgICAgICAgcmVjb3JkLnR5cGUgPSBcIm5vcm1hbFwiO1xuICAgICAgICAgIGRlbGV0ZSByZWNvcmQuYXJnO1xuICAgICAgICAgIGVudHJ5LmNvbXBsZXRpb24gPSByZWNvcmQ7XG4gICAgICAgIH1cblxuICAgICAgICBmdW5jdGlvbiBDb250ZXh0KHRyeUxvY3NMaXN0KSB7XG4gICAgICAgICAgLy8gVGhlIHJvb3QgZW50cnkgb2JqZWN0IChlZmZlY3RpdmVseSBhIHRyeSBzdGF0ZW1lbnQgd2l0aG91dCBhIGNhdGNoXG4gICAgICAgICAgLy8gb3IgYSBmaW5hbGx5IGJsb2NrKSBnaXZlcyB1cyBhIHBsYWNlIHRvIHN0b3JlIHZhbHVlcyB0aHJvd24gZnJvbVxuICAgICAgICAgIC8vIGxvY2F0aW9ucyB3aGVyZSB0aGVyZSBpcyBubyBlbmNsb3NpbmcgdHJ5IHN0YXRlbWVudC5cbiAgICAgICAgICB0aGlzLnRyeUVudHJpZXMgPSBbe1xuICAgICAgICAgICAgdHJ5TG9jOiBcInJvb3RcIlxuICAgICAgICAgIH1dO1xuICAgICAgICAgIHRyeUxvY3NMaXN0LmZvckVhY2gocHVzaFRyeUVudHJ5LCB0aGlzKTtcbiAgICAgICAgICB0aGlzLnJlc2V0KHRydWUpO1xuICAgICAgICB9XG5cbiAgICAgICAgcnVudGltZS5rZXlzID0gZnVuY3Rpb24gKG9iamVjdCkge1xuICAgICAgICAgIHZhciBrZXlzID0gW107XG5cbiAgICAgICAgICBmb3IgKHZhciBrZXkgaW4gb2JqZWN0KSB7XG4gICAgICAgICAgICBrZXlzLnB1c2goa2V5KTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBrZXlzLnJldmVyc2UoKTsgLy8gUmF0aGVyIHRoYW4gcmV0dXJuaW5nIGFuIG9iamVjdCB3aXRoIGEgbmV4dCBtZXRob2QsIHdlIGtlZXBcbiAgICAgICAgICAvLyB0aGluZ3Mgc2ltcGxlIGFuZCByZXR1cm4gdGhlIG5leHQgZnVuY3Rpb24gaXRzZWxmLlxuXG4gICAgICAgICAgcmV0dXJuIGZ1bmN0aW9uIG5leHQoKSB7XG4gICAgICAgICAgICB3aGlsZSAoa2V5cy5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgdmFyIGtleSA9IGtleXMucG9wKCk7XG5cbiAgICAgICAgICAgICAgaWYgKGtleSBpbiBvYmplY3QpIHtcbiAgICAgICAgICAgICAgICBuZXh0LnZhbHVlID0ga2V5O1xuICAgICAgICAgICAgICAgIG5leHQuZG9uZSA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIHJldHVybiBuZXh0O1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IC8vIFRvIGF2b2lkIGNyZWF0aW5nIGFuIGFkZGl0aW9uYWwgb2JqZWN0LCB3ZSBqdXN0IGhhbmcgdGhlIC52YWx1ZVxuICAgICAgICAgICAgLy8gYW5kIC5kb25lIHByb3BlcnRpZXMgb2ZmIHRoZSBuZXh0IGZ1bmN0aW9uIG9iamVjdCBpdHNlbGYuIFRoaXNcbiAgICAgICAgICAgIC8vIGFsc28gZW5zdXJlcyB0aGF0IHRoZSBtaW5pZmllciB3aWxsIG5vdCBhbm9ueW1pemUgdGhlIGZ1bmN0aW9uLlxuXG5cbiAgICAgICAgICAgIG5leHQuZG9uZSA9IHRydWU7XG4gICAgICAgICAgICByZXR1cm4gbmV4dDtcbiAgICAgICAgICB9O1xuICAgICAgICB9O1xuXG4gICAgICAgIGZ1bmN0aW9uIHZhbHVlcyhpdGVyYWJsZSkge1xuICAgICAgICAgIGlmIChpdGVyYWJsZSkge1xuICAgICAgICAgICAgdmFyIGl0ZXJhdG9yTWV0aG9kID0gaXRlcmFibGVbaXRlcmF0b3JTeW1ib2xdO1xuXG4gICAgICAgICAgICBpZiAoaXRlcmF0b3JNZXRob2QpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIGl0ZXJhdG9yTWV0aG9kLmNhbGwoaXRlcmFibGUpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAodHlwZW9mIGl0ZXJhYmxlLm5leHQgPT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgICAgICAgICByZXR1cm4gaXRlcmFibGU7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmICghaXNOYU4oaXRlcmFibGUubGVuZ3RoKSkge1xuICAgICAgICAgICAgICB2YXIgaSA9IC0xLFxuICAgICAgICAgICAgICAgICAgbmV4dCA9IGZ1bmN0aW9uIG5leHQoKSB7XG4gICAgICAgICAgICAgICAgd2hpbGUgKCsraSA8IGl0ZXJhYmxlLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgICAgaWYgKGhhc093bi5jYWxsKGl0ZXJhYmxlLCBpKSkge1xuICAgICAgICAgICAgICAgICAgICBuZXh0LnZhbHVlID0gaXRlcmFibGVbaV07XG4gICAgICAgICAgICAgICAgICAgIG5leHQuZG9uZSA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gbmV4dDtcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBuZXh0LnZhbHVlID0gdW5kZWZpbmVkO1xuICAgICAgICAgICAgICAgIG5leHQuZG9uZSA9IHRydWU7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG5leHQ7XG4gICAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgICAgcmV0dXJuIG5leHQubmV4dCA9IG5leHQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSAvLyBSZXR1cm4gYW4gaXRlcmF0b3Igd2l0aCBubyB2YWx1ZXMuXG5cblxuICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBuZXh0OiBkb25lUmVzdWx0XG4gICAgICAgICAgfTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJ1bnRpbWUudmFsdWVzID0gdmFsdWVzO1xuXG4gICAgICAgIGZ1bmN0aW9uIGRvbmVSZXN1bHQoKSB7XG4gICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHZhbHVlOiB1bmRlZmluZWQsXG4gICAgICAgICAgICBkb25lOiB0cnVlXG4gICAgICAgICAgfTtcbiAgICAgICAgfVxuXG4gICAgICAgIENvbnRleHQucHJvdG90eXBlID0ge1xuICAgICAgICAgIGNvbnN0cnVjdG9yOiBDb250ZXh0LFxuICAgICAgICAgIHJlc2V0OiBmdW5jdGlvbiByZXNldChza2lwVGVtcFJlc2V0KSB7XG4gICAgICAgICAgICB0aGlzLnByZXYgPSAwO1xuICAgICAgICAgICAgdGhpcy5uZXh0ID0gMDsgLy8gUmVzZXR0aW5nIGNvbnRleHQuX3NlbnQgZm9yIGxlZ2FjeSBzdXBwb3J0IG9mIEJhYmVsJ3NcbiAgICAgICAgICAgIC8vIGZ1bmN0aW9uLnNlbnQgaW1wbGVtZW50YXRpb24uXG5cbiAgICAgICAgICAgIHRoaXMuc2VudCA9IHRoaXMuX3NlbnQgPSB1bmRlZmluZWQ7XG4gICAgICAgICAgICB0aGlzLmRvbmUgPSBmYWxzZTtcbiAgICAgICAgICAgIHRoaXMuZGVsZWdhdGUgPSBudWxsO1xuICAgICAgICAgICAgdGhpcy5tZXRob2QgPSBcIm5leHRcIjtcbiAgICAgICAgICAgIHRoaXMuYXJnID0gdW5kZWZpbmVkO1xuICAgICAgICAgICAgdGhpcy50cnlFbnRyaWVzLmZvckVhY2gocmVzZXRUcnlFbnRyeSk7XG5cbiAgICAgICAgICAgIGlmICghc2tpcFRlbXBSZXNldCkge1xuICAgICAgICAgICAgICBmb3IgKHZhciBuYW1lIGluIHRoaXMpIHtcbiAgICAgICAgICAgICAgICAvLyBOb3Qgc3VyZSBhYm91dCB0aGUgb3B0aW1hbCBvcmRlciBvZiB0aGVzZSBjb25kaXRpb25zOlxuICAgICAgICAgICAgICAgIGlmIChuYW1lLmNoYXJBdCgwKSA9PT0gXCJ0XCIgJiYgaGFzT3duLmNhbGwodGhpcywgbmFtZSkgJiYgIWlzTmFOKCtuYW1lLnNsaWNlKDEpKSkge1xuICAgICAgICAgICAgICAgICAgdGhpc1tuYW1lXSA9IHVuZGVmaW5lZDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9LFxuICAgICAgICAgIHN0b3A6IGZ1bmN0aW9uIHN0b3AoKSB7XG4gICAgICAgICAgICB0aGlzLmRvbmUgPSB0cnVlO1xuICAgICAgICAgICAgdmFyIHJvb3RFbnRyeSA9IHRoaXMudHJ5RW50cmllc1swXTtcbiAgICAgICAgICAgIHZhciByb290UmVjb3JkID0gcm9vdEVudHJ5LmNvbXBsZXRpb247XG5cbiAgICAgICAgICAgIGlmIChyb290UmVjb3JkLnR5cGUgPT09IFwidGhyb3dcIikge1xuICAgICAgICAgICAgICB0aHJvdyByb290UmVjb3JkLmFyZztcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmV0dXJuIHRoaXMucnZhbDtcbiAgICAgICAgICB9LFxuICAgICAgICAgIGRpc3BhdGNoRXhjZXB0aW9uOiBmdW5jdGlvbiBkaXNwYXRjaEV4Y2VwdGlvbihleGNlcHRpb24pIHtcbiAgICAgICAgICAgIGlmICh0aGlzLmRvbmUpIHtcbiAgICAgICAgICAgICAgdGhyb3cgZXhjZXB0aW9uO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB2YXIgY29udGV4dCA9IHRoaXM7XG5cbiAgICAgICAgICAgIGZ1bmN0aW9uIGhhbmRsZShsb2MsIGNhdWdodCkge1xuICAgICAgICAgICAgICByZWNvcmQudHlwZSA9IFwidGhyb3dcIjtcbiAgICAgICAgICAgICAgcmVjb3JkLmFyZyA9IGV4Y2VwdGlvbjtcbiAgICAgICAgICAgICAgY29udGV4dC5uZXh0ID0gbG9jO1xuXG4gICAgICAgICAgICAgIGlmIChjYXVnaHQpIHtcbiAgICAgICAgICAgICAgICAvLyBJZiB0aGUgZGlzcGF0Y2hlZCBleGNlcHRpb24gd2FzIGNhdWdodCBieSBhIGNhdGNoIGJsb2NrLFxuICAgICAgICAgICAgICAgIC8vIHRoZW4gbGV0IHRoYXQgY2F0Y2ggYmxvY2sgaGFuZGxlIHRoZSBleGNlcHRpb24gbm9ybWFsbHkuXG4gICAgICAgICAgICAgICAgY29udGV4dC5tZXRob2QgPSBcIm5leHRcIjtcbiAgICAgICAgICAgICAgICBjb250ZXh0LmFyZyA9IHVuZGVmaW5lZDtcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIHJldHVybiAhIWNhdWdodDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgZm9yICh2YXIgaSA9IHRoaXMudHJ5RW50cmllcy5sZW5ndGggLSAxOyBpID49IDA7IC0taSkge1xuICAgICAgICAgICAgICB2YXIgZW50cnkgPSB0aGlzLnRyeUVudHJpZXNbaV07XG4gICAgICAgICAgICAgIHZhciByZWNvcmQgPSBlbnRyeS5jb21wbGV0aW9uO1xuXG4gICAgICAgICAgICAgIGlmIChlbnRyeS50cnlMb2MgPT09IFwicm9vdFwiKSB7XG4gICAgICAgICAgICAgICAgLy8gRXhjZXB0aW9uIHRocm93biBvdXRzaWRlIG9mIGFueSB0cnkgYmxvY2sgdGhhdCBjb3VsZCBoYW5kbGVcbiAgICAgICAgICAgICAgICAvLyBpdCwgc28gc2V0IHRoZSBjb21wbGV0aW9uIHZhbHVlIG9mIHRoZSBlbnRpcmUgZnVuY3Rpb24gdG9cbiAgICAgICAgICAgICAgICAvLyB0aHJvdyB0aGUgZXhjZXB0aW9uLlxuICAgICAgICAgICAgICAgIHJldHVybiBoYW5kbGUoXCJlbmRcIik7XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICBpZiAoZW50cnkudHJ5TG9jIDw9IHRoaXMucHJldikge1xuICAgICAgICAgICAgICAgIHZhciBoYXNDYXRjaCA9IGhhc093bi5jYWxsKGVudHJ5LCBcImNhdGNoTG9jXCIpO1xuICAgICAgICAgICAgICAgIHZhciBoYXNGaW5hbGx5ID0gaGFzT3duLmNhbGwoZW50cnksIFwiZmluYWxseUxvY1wiKTtcblxuICAgICAgICAgICAgICAgIGlmIChoYXNDYXRjaCAmJiBoYXNGaW5hbGx5KSB7XG4gICAgICAgICAgICAgICAgICBpZiAodGhpcy5wcmV2IDwgZW50cnkuY2F0Y2hMb2MpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGhhbmRsZShlbnRyeS5jYXRjaExvYywgdHJ1ZSk7XG4gICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHRoaXMucHJldiA8IGVudHJ5LmZpbmFsbHlMb2MpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGhhbmRsZShlbnRyeS5maW5hbGx5TG9jKTtcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGhhc0NhdGNoKSB7XG4gICAgICAgICAgICAgICAgICBpZiAodGhpcy5wcmV2IDwgZW50cnkuY2F0Y2hMb2MpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGhhbmRsZShlbnRyeS5jYXRjaExvYywgdHJ1ZSk7XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChoYXNGaW5hbGx5KSB7XG4gICAgICAgICAgICAgICAgICBpZiAodGhpcy5wcmV2IDwgZW50cnkuZmluYWxseUxvYykge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gaGFuZGxlKGVudHJ5LmZpbmFsbHlMb2MpO1xuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJ0cnkgc3RhdGVtZW50IHdpdGhvdXQgY2F0Y2ggb3IgZmluYWxseVwiKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9LFxuICAgICAgICAgIGFicnVwdDogZnVuY3Rpb24gYWJydXB0KHR5cGUsIGFyZykge1xuICAgICAgICAgICAgZm9yICh2YXIgaSA9IHRoaXMudHJ5RW50cmllcy5sZW5ndGggLSAxOyBpID49IDA7IC0taSkge1xuICAgICAgICAgICAgICB2YXIgZW50cnkgPSB0aGlzLnRyeUVudHJpZXNbaV07XG5cbiAgICAgICAgICAgICAgaWYgKGVudHJ5LnRyeUxvYyA8PSB0aGlzLnByZXYgJiYgaGFzT3duLmNhbGwoZW50cnksIFwiZmluYWxseUxvY1wiKSAmJiB0aGlzLnByZXYgPCBlbnRyeS5maW5hbGx5TG9jKSB7XG4gICAgICAgICAgICAgICAgdmFyIGZpbmFsbHlFbnRyeSA9IGVudHJ5O1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChmaW5hbGx5RW50cnkgJiYgKHR5cGUgPT09IFwiYnJlYWtcIiB8fCB0eXBlID09PSBcImNvbnRpbnVlXCIpICYmIGZpbmFsbHlFbnRyeS50cnlMb2MgPD0gYXJnICYmIGFyZyA8PSBmaW5hbGx5RW50cnkuZmluYWxseUxvYykge1xuICAgICAgICAgICAgICAvLyBJZ25vcmUgdGhlIGZpbmFsbHkgZW50cnkgaWYgY29udHJvbCBpcyBub3QganVtcGluZyB0byBhXG4gICAgICAgICAgICAgIC8vIGxvY2F0aW9uIG91dHNpZGUgdGhlIHRyeS9jYXRjaCBibG9jay5cbiAgICAgICAgICAgICAgZmluYWxseUVudHJ5ID0gbnVsbDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdmFyIHJlY29yZCA9IGZpbmFsbHlFbnRyeSA/IGZpbmFsbHlFbnRyeS5jb21wbGV0aW9uIDoge307XG4gICAgICAgICAgICByZWNvcmQudHlwZSA9IHR5cGU7XG4gICAgICAgICAgICByZWNvcmQuYXJnID0gYXJnO1xuXG4gICAgICAgICAgICBpZiAoZmluYWxseUVudHJ5KSB7XG4gICAgICAgICAgICAgIHRoaXMubWV0aG9kID0gXCJuZXh0XCI7XG4gICAgICAgICAgICAgIHRoaXMubmV4dCA9IGZpbmFsbHlFbnRyeS5maW5hbGx5TG9jO1xuICAgICAgICAgICAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuY29tcGxldGUocmVjb3JkKTtcbiAgICAgICAgICB9LFxuICAgICAgICAgIGNvbXBsZXRlOiBmdW5jdGlvbiBjb21wbGV0ZShyZWNvcmQsIGFmdGVyTG9jKSB7XG4gICAgICAgICAgICBpZiAocmVjb3JkLnR5cGUgPT09IFwidGhyb3dcIikge1xuICAgICAgICAgICAgICB0aHJvdyByZWNvcmQuYXJnO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAocmVjb3JkLnR5cGUgPT09IFwiYnJlYWtcIiB8fCByZWNvcmQudHlwZSA9PT0gXCJjb250aW51ZVwiKSB7XG4gICAgICAgICAgICAgIHRoaXMubmV4dCA9IHJlY29yZC5hcmc7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKHJlY29yZC50eXBlID09PSBcInJldHVyblwiKSB7XG4gICAgICAgICAgICAgIHRoaXMucnZhbCA9IHRoaXMuYXJnID0gcmVjb3JkLmFyZztcbiAgICAgICAgICAgICAgdGhpcy5tZXRob2QgPSBcInJldHVyblwiO1xuICAgICAgICAgICAgICB0aGlzLm5leHQgPSBcImVuZFwiO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChyZWNvcmQudHlwZSA9PT0gXCJub3JtYWxcIiAmJiBhZnRlckxvYykge1xuICAgICAgICAgICAgICB0aGlzLm5leHQgPSBhZnRlckxvYztcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gICAgICAgICAgfSxcbiAgICAgICAgICBmaW5pc2g6IGZ1bmN0aW9uIGZpbmlzaChmaW5hbGx5TG9jKSB7XG4gICAgICAgICAgICBmb3IgKHZhciBpID0gdGhpcy50cnlFbnRyaWVzLmxlbmd0aCAtIDE7IGkgPj0gMDsgLS1pKSB7XG4gICAgICAgICAgICAgIHZhciBlbnRyeSA9IHRoaXMudHJ5RW50cmllc1tpXTtcblxuICAgICAgICAgICAgICBpZiAoZW50cnkuZmluYWxseUxvYyA9PT0gZmluYWxseUxvYykge1xuICAgICAgICAgICAgICAgIHRoaXMuY29tcGxldGUoZW50cnkuY29tcGxldGlvbiwgZW50cnkuYWZ0ZXJMb2MpO1xuICAgICAgICAgICAgICAgIHJlc2V0VHJ5RW50cnkoZW50cnkpO1xuICAgICAgICAgICAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSxcbiAgICAgICAgICBcImNhdGNoXCI6IGZ1bmN0aW9uIF9jYXRjaCh0cnlMb2MpIHtcbiAgICAgICAgICAgIGZvciAodmFyIGkgPSB0aGlzLnRyeUVudHJpZXMubGVuZ3RoIC0gMTsgaSA+PSAwOyAtLWkpIHtcbiAgICAgICAgICAgICAgdmFyIGVudHJ5ID0gdGhpcy50cnlFbnRyaWVzW2ldO1xuXG4gICAgICAgICAgICAgIGlmIChlbnRyeS50cnlMb2MgPT09IHRyeUxvYykge1xuICAgICAgICAgICAgICAgIHZhciByZWNvcmQgPSBlbnRyeS5jb21wbGV0aW9uO1xuXG4gICAgICAgICAgICAgICAgaWYgKHJlY29yZC50eXBlID09PSBcInRocm93XCIpIHtcbiAgICAgICAgICAgICAgICAgIHZhciB0aHJvd24gPSByZWNvcmQuYXJnO1xuICAgICAgICAgICAgICAgICAgcmVzZXRUcnlFbnRyeShlbnRyeSk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRocm93bjtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSAvLyBUaGUgY29udGV4dC5jYXRjaCBtZXRob2QgbXVzdCBvbmx5IGJlIGNhbGxlZCB3aXRoIGEgbG9jYXRpb25cbiAgICAgICAgICAgIC8vIGFyZ3VtZW50IHRoYXQgY29ycmVzcG9uZHMgdG8gYSBrbm93biBjYXRjaCBibG9jay5cblxuXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJpbGxlZ2FsIGNhdGNoIGF0dGVtcHRcIik7XG4gICAgICAgICAgfSxcbiAgICAgICAgICBkZWxlZ2F0ZVlpZWxkOiBmdW5jdGlvbiBkZWxlZ2F0ZVlpZWxkKGl0ZXJhYmxlLCByZXN1bHROYW1lLCBuZXh0TG9jKSB7XG4gICAgICAgICAgICB0aGlzLmRlbGVnYXRlID0ge1xuICAgICAgICAgICAgICBpdGVyYXRvcjogdmFsdWVzKGl0ZXJhYmxlKSxcbiAgICAgICAgICAgICAgcmVzdWx0TmFtZTogcmVzdWx0TmFtZSxcbiAgICAgICAgICAgICAgbmV4dExvYzogbmV4dExvY1xuICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgaWYgKHRoaXMubWV0aG9kID09PSBcIm5leHRcIikge1xuICAgICAgICAgICAgICAvLyBEZWxpYmVyYXRlbHkgZm9yZ2V0IHRoZSBsYXN0IHNlbnQgdmFsdWUgc28gdGhhdCB3ZSBkb24ndFxuICAgICAgICAgICAgICAvLyBhY2NpZGVudGFsbHkgcGFzcyBpdCBvbiB0byB0aGUgZGVsZWdhdGUuXG4gICAgICAgICAgICAgIHRoaXMuYXJnID0gdW5kZWZpbmVkO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICB9KCAvLyBBbW9uZyB0aGUgdmFyaW91cyB0cmlja3MgZm9yIG9idGFpbmluZyBhIHJlZmVyZW5jZSB0byB0aGUgZ2xvYmFsXG4gICAgICAvLyBvYmplY3QsIHRoaXMgc2VlbXMgdG8gYmUgdGhlIG1vc3QgcmVsaWFibGUgdGVjaG5pcXVlIHRoYXQgZG9lcyBub3RcbiAgICAgIC8vIHVzZSBpbmRpcmVjdCBldmFsICh3aGljaCB2aW9sYXRlcyBDb250ZW50IFNlY3VyaXR5IFBvbGljeSkuXG4gICAgICBfdHlwZW9mKGdsb2JhbCkgPT09IFwib2JqZWN0XCIgPyBnbG9iYWwgOiAodHlwZW9mIHdpbmRvdyA9PT0gXCJ1bmRlZmluZWRcIiA/IFwidW5kZWZpbmVkXCIgOiBfdHlwZW9mKHdpbmRvdykpID09PSBcIm9iamVjdFwiID8gd2luZG93IDogKHR5cGVvZiBzZWxmID09PSBcInVuZGVmaW5lZFwiID8gXCJ1bmRlZmluZWRcIiA6IF90eXBlb2Yoc2VsZikpID09PSBcIm9iamVjdFwiID8gc2VsZiA6IHRoaXMpO1xuICAgIH0pLmNhbGwodGhpcywgdHlwZW9mIGdsb2JhbCAhPT0gXCJ1bmRlZmluZWRcIiA/IGdsb2JhbCA6IHR5cGVvZiBzZWxmICE9PSBcInVuZGVmaW5lZFwiID8gc2VsZiA6IHR5cGVvZiB3aW5kb3cgIT09IFwidW5kZWZpbmVkXCIgPyB3aW5kb3cgOiB7fSk7XG4gIH0sIHt9XVxufSwge30sIFsxXSk7IiwiLypqc2xpbnQgbm9kZTogdHJ1ZSAqL1xuXG4vKmpzaGludCBlc3ZlcnNpb246IDYgKi9cblwidXNlIHN0cmljdFwiO1xuXG5mdW5jdGlvbiBfc2xpY2VkVG9BcnJheShhcnIsIGkpIHsgcmV0dXJuIF9hcnJheVdpdGhIb2xlcyhhcnIpIHx8IF9pdGVyYWJsZVRvQXJyYXlMaW1pdChhcnIsIGkpIHx8IF91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheShhcnIsIGkpIHx8IF9ub25JdGVyYWJsZVJlc3QoKTsgfVxuXG5mdW5jdGlvbiBfbm9uSXRlcmFibGVSZXN0KCkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiSW52YWxpZCBhdHRlbXB0IHRvIGRlc3RydWN0dXJlIG5vbi1pdGVyYWJsZSBpbnN0YW5jZS5cXG5JbiBvcmRlciB0byBiZSBpdGVyYWJsZSwgbm9uLWFycmF5IG9iamVjdHMgbXVzdCBoYXZlIGEgW1N5bWJvbC5pdGVyYXRvcl0oKSBtZXRob2QuXCIpOyB9XG5cbmZ1bmN0aW9uIF91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheShvLCBtaW5MZW4pIHsgaWYgKCFvKSByZXR1cm47IGlmICh0eXBlb2YgbyA9PT0gXCJzdHJpbmdcIikgcmV0dXJuIF9hcnJheUxpa2VUb0FycmF5KG8sIG1pbkxlbik7IHZhciBuID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKG8pLnNsaWNlKDgsIC0xKTsgaWYgKG4gPT09IFwiT2JqZWN0XCIgJiYgby5jb25zdHJ1Y3RvcikgbiA9IG8uY29uc3RydWN0b3IubmFtZTsgaWYgKG4gPT09IFwiTWFwXCIgfHwgbiA9PT0gXCJTZXRcIikgcmV0dXJuIEFycmF5LmZyb20obyk7IGlmIChuID09PSBcIkFyZ3VtZW50c1wiIHx8IC9eKD86VWl8SSludCg/Ojh8MTZ8MzIpKD86Q2xhbXBlZCk/QXJyYXkkLy50ZXN0KG4pKSByZXR1cm4gX2FycmF5TGlrZVRvQXJyYXkobywgbWluTGVuKTsgfVxuXG5mdW5jdGlvbiBfYXJyYXlMaWtlVG9BcnJheShhcnIsIGxlbikgeyBpZiAobGVuID09IG51bGwgfHwgbGVuID4gYXJyLmxlbmd0aCkgbGVuID0gYXJyLmxlbmd0aDsgZm9yICh2YXIgaSA9IDAsIGFycjIgPSBuZXcgQXJyYXkobGVuKTsgaSA8IGxlbjsgaSsrKSB7IGFycjJbaV0gPSBhcnJbaV07IH0gcmV0dXJuIGFycjI7IH1cblxuZnVuY3Rpb24gX2l0ZXJhYmxlVG9BcnJheUxpbWl0KGFyciwgaSkgeyB2YXIgX2kgPSBhcnIgPT0gbnVsbCA/IG51bGwgOiB0eXBlb2YgU3ltYm9sICE9PSBcInVuZGVmaW5lZFwiICYmIGFycltTeW1ib2wuaXRlcmF0b3JdIHx8IGFycltcIkBAaXRlcmF0b3JcIl07IGlmIChfaSA9PSBudWxsKSByZXR1cm47IHZhciBfYXJyID0gW107IHZhciBfbiA9IHRydWU7IHZhciBfZCA9IGZhbHNlOyB2YXIgX3MsIF9lOyB0cnkgeyBmb3IgKF9pID0gX2kuY2FsbChhcnIpOyAhKF9uID0gKF9zID0gX2kubmV4dCgpKS5kb25lKTsgX24gPSB0cnVlKSB7IF9hcnIucHVzaChfcy52YWx1ZSk7IGlmIChpICYmIF9hcnIubGVuZ3RoID09PSBpKSBicmVhazsgfSB9IGNhdGNoIChlcnIpIHsgX2QgPSB0cnVlOyBfZSA9IGVycjsgfSBmaW5hbGx5IHsgdHJ5IHsgaWYgKCFfbiAmJiBfaVtcInJldHVyblwiXSAhPSBudWxsKSBfaVtcInJldHVyblwiXSgpOyB9IGZpbmFsbHkgeyBpZiAoX2QpIHRocm93IF9lOyB9IH0gcmV0dXJuIF9hcnI7IH1cblxuZnVuY3Rpb24gX2FycmF5V2l0aEhvbGVzKGFycikgeyBpZiAoQXJyYXkuaXNBcnJheShhcnIpKSByZXR1cm4gYXJyOyB9XG5cbihmdW5jdGlvbiAoKSB7XG4gIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwibG9hZFwiLCBmdW5jdGlvbiAoKSB7XG4gICAgY29uc29sZS5sb2coXCJhc3Nlc21lbnQuanMgbG9hZGVkP1wiKTtcbiAgICB2YXIgZW5kcG9pbnQxID0gXCJodHRwOi8vd3d3Lm9tZGJhcGkuY29tLz9zPWJyaWRnZSZhcGlLZXk9NmMzYTJkNDVcIjtcbiAgICB2YXIgZW5kcG9pbnQyID0gXCJodHRwOi8vd3d3Lm9tZGJhcGkuY29tLz9pPXR0MzY4MjQ0OCZhcGlrZXk9NmMzYTJkNDVcIjsgLy8gY29uc3QgZW5kcG9pbnQxID0gYGRhdGEvYW1hem9uLmpzb25gO1xuICAgIC8vIGNvbnN0IGVuZHBvaW50MiA9IGBkYXRhL2FtYXpvbjIuanNvbmA7XG4gICAgLy9jb25zdCBlbmRwb2ludCA9IGBkYXRhL2FtYXpvbi5qc29uYDtcbiAgICAvL2VtcHR5IHZhciB0byBwdXQgYXJyYXkgaW50b1xuXG4gICAgdmFyIG1vdmllcyA9ICcnOyAvL2NvbW1lbnQ/P1xuXG4gICAgdmFyIHNlYXJjaF90ZXJtTkVXID0gXCJcIjtcbiAgICB2YXIgc2VhcmNoTkVXID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzZWFyY2hORVdcIik7XG4gICAgdmFyIHJlc3VsdHNORVcgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInJlc3VsdHNORVdcIik7XG4gICAgdmFyIHByZWRlZmluZWRORVcgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInByZWRlZmluZWRORVdcIik7XG5cbiAgICB2YXIgZmV0Y2hFbmRwb2ludDEgPSBmdW5jdGlvbiBmZXRjaEVuZHBvaW50MSgpIHtcbiAgICAgIGZldGNoKGVuZHBvaW50MSkudGhlbihmdW5jdGlvbiAocmVzcG9uc2UpIHtcbiAgICAgICAgcmV0dXJuIHJlc3BvbnNlLmpzb24oKTtcbiAgICAgIH0pLnRoZW4oZnVuY3Rpb24gKGFsbE1vdmllcykge1xuICAgICAgICBtb3ZpZXMgPSBhbGxNb3ZpZXM7XG4gICAgICAgIGRpc3BsYXlNb3ZpZXMoKTtcbiAgICAgIH0pLmNhdGNoKGZ1bmN0aW9uIChlcnJvcikgey8vIHJldHVybiBhbGVydChlcnJvcik7XG4gICAgICB9KTtcbiAgICB9O1xuXG4gICAgdmFyIGZldGNoRW5kcG9pbnQyID0gZnVuY3Rpb24gZmV0Y2hFbmRwb2ludDIoKSB7XG4gICAgICBmZXRjaChlbmRwb2ludDIpLnRoZW4oZnVuY3Rpb24gKHJlc3BvbnNlKSB7XG4gICAgICAgIHJldHVybiByZXNwb25zZS5qc29uKCk7XG4gICAgICB9KS50aGVuKGZ1bmN0aW9uIChwcmVkZWZpbmVkTW92aWVzKSB7XG4gICAgICAgIHByaW50cHJlZGVmaW5lZChwcmVkZWZpbmVkTW92aWVzKTtcbiAgICAgIH0pLmNhdGNoKGZ1bmN0aW9uIChlcnJvcikgey8vcmV0dXJuIGFsZXJ0KGVycm9yKTtcbiAgICAgIH0pO1xuICAgIH07IC8vY2hlY2sgaWYgc2VhcmNoIGlucHV0IGlzIG9uIHBhZ2UgIFxuXG5cbiAgICBpZiAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NlYXJjaE5FVycpICE9IG51bGwpIHtcbiAgICAgIGNvbnNvbGUubG9nKFwiU2VhcmNoIHBhZ2VcIik7XG4gICAgICBmZXRjaEVuZHBvaW50MSgpO1xuICAgICAgc2VhcmNoTkVXLmFkZEV2ZW50TGlzdGVuZXIoXCJpbnB1dFwiLCBjaGVja0lucHV0KTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc29sZS5sb2coXCJEZXRhaWwgcGFnZVwiKTtcbiAgICAgIGZldGNoRW5kcG9pbnQyKCk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gcHJpbnRwcmVkZWZpbmVkKHByZWRlZmluZWRNb3ZpZXMpIHtcbiAgICAgIC8vTG9vcGluZyB0cm91Z2ggb2JqZWN0IEVTOCBjb21waWxlIGJhYmVsLi5cbiAgICAgIGZvciAodmFyIF9pID0gMCwgX09iamVjdCRlbnRyaWVzID0gT2JqZWN0LmVudHJpZXMocHJlZGVmaW5lZE1vdmllcyk7IF9pIDwgX09iamVjdCRlbnRyaWVzLmxlbmd0aDsgX2krKykge1xuICAgICAgICB2YXIgX09iamVjdCRlbnRyaWVzJF9pID0gX3NsaWNlZFRvQXJyYXkoX09iamVjdCRlbnRyaWVzW19pXSwgMiksXG4gICAgICAgICAgICBrZXkgPSBfT2JqZWN0JGVudHJpZXMkX2lbMF0sXG4gICAgICAgICAgICB2YWx1ZSA9IF9PYmplY3QkZW50cmllcyRfaVsxXTtcblxuICAgICAgICBjb25zb2xlLmxvZyhcIlwiLmNvbmNhdChrZXksIFwiOiBcIikuY29uY2F0KHZhbHVlKSk7XG4gICAgICAgIHZhciBsaSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKTtcbiAgICAgICAgdmFyIHJhdGluZ1VsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInVsXCIpO1xuICAgICAgICB2YXIgbXlMaXN0QXJyYXkgPSBbXTtcbiAgICAgICAgdmFyIG5ld2xpc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd1bCcpO1xuICAgICAgICB2YXIgbmV3UGFyYWdyYXBoID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuXG4gICAgICAgIGlmIChrZXkgPT09ICdSYXRpbmdzJykge1xuICAgICAgICAgIGNvbnNvbGUubG9nKFwiUkFUSU5HUz8/XCIpO1xuICAgICAgICAgIGxpLmlubmVySFRNTCA9IFwiPGg0PlwiLmNvbmNhdChrZXksIFwiPC9oND5cIik7XG5cbiAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHZhbHVlLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcImxlbmd0aCByYXRpbmcgdmFsdWVcIiArIHZhbHVlLmxlbmd0aCk7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcInJhdGluZyE6IFwiLmNvbmNhdCh2YWx1ZVtpXS5Tb3VyY2UsIFwiIHZhbHVlITogXCIpLmNvbmNhdCh2YWx1ZVtpXS5WYWx1ZSkpO1xuICAgICAgICAgICAgcmF0aW5nVWwuaW5uZXJIVE1MICs9IFwiPGxpPjxpPlwiLmNvbmNhdCh2YWx1ZVtpXS5Tb3VyY2UsIFwiPC9pPjxzcGFuPlwiKS5jb25jYXQodmFsdWVbaV0uVmFsdWUsIFwiPC9zcGFuPjwvbGk+XCIpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGNvbnNvbGUubG9nKFwicmF0aW5nVWxcIiArIHJhdGluZ1VsLmlubmVySFRNTCk7XG4gICAgICAgICAgcHJlZGVmaW5lZE5FVy5hcHBlbmRDaGlsZChsaSkuYXBwZW5kQ2hpbGQocmF0aW5nVWwpLmNsYXNzTGlzdC5hZGQoJ3JhdGluZ3MnKTtcbiAgICAgICAgfSBlbHNlIGlmIChrZXkgPT09ICdQbG90Jykge1xuICAgICAgICAgIGNvbnNvbGUubG9nKFwidGl0bGVcIiArIGtleSArIFwiY291bnRpbmdcIiArIHZhbHVlLmxlbmd0aCk7XG5cbiAgICAgICAgICBpZiAodmFsdWUubGVuZ3RoID4gMjAwKSB7XG4gICAgICAgICAgICBuZXdQYXJhZ3JhcGguY2xhc3NMaXN0LmFkZCgnbmV3UGFyJyk7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIkxBTkchISFcIiArIHZhbHVlLmxlbmd0aCk7XG4gICAgICAgICAgICBsaS5pbm5lckhUTUwgPSBcIjxoND5cIi5jb25jYXQoa2V5LCBcIjwvaDQ+XCIpO1xuICAgICAgICAgICAgdmFyIHRleHQgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZSh2YWx1ZSk7XG4gICAgICAgICAgICBuZXdQYXJhZ3JhcGguYXBwZW5kQ2hpbGQodGV4dCk7XG4gICAgICAgICAgICBsaS5hcHBlbmRDaGlsZChuZXdQYXJhZ3JhcGgpO1xuICAgICAgICAgICAgbmV3UGFyYWdyYXBoLnBhcmVudEVsZW1lbnQuY2xhc3NMaXN0LmFkZCgncGxvdCcpO1xuICAgICAgICAgICAgcHJlZGVmaW5lZE5FVy5hcHBlbmRDaGlsZChsaSk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwia29ydCBnZW5vZWdcIiArIHZhbHVlLmxlbmd0aCk7XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2UgaWYgKGtleSA9PT0gJ0dlbnJlJykge1xuICAgICAgICAgIG1ha2VMaXN0cyh2YWx1ZSwga2V5LCBsaSwgbXlMaXN0QXJyYXksIG5ld2xpc3QpO1xuICAgICAgICB9IGVsc2UgaWYgKGtleSA9PT0gJ1dyaXRlcicpIHtcbiAgICAgICAgICBtYWtlTGlzdHModmFsdWUsIGtleSwgbGksIG15TGlzdEFycmF5LCBuZXdsaXN0KTtcbiAgICAgICAgfSBlbHNlIGlmIChrZXkgPT09ICdBY3RvcnMnKSB7XG4gICAgICAgICAgbWFrZUxpc3RzKHZhbHVlLCBrZXksIGxpLCBteUxpc3RBcnJheSwgbmV3bGlzdCk7XG4gICAgICAgIH0gZWxzZSBpZiAoa2V5ID09PSAnUG9zdGVyJykge1xuICAgICAgICAgIGNvbnNvbGUubG9nKFwiUG9zdGVyIHNvdXJjZTpcIi5jb25jYXQodmFsdWUpKTsgLy9wbGFjaW5nIGl0IG9uIHRvcFxuXG4gICAgICAgICAgcHJlZGVmaW5lZE5FVy5maXJzdEVsZW1lbnRDaGlsZC5uZXh0RWxlbWVudFNpYmxpbmcuaW5uZXJIVE1MID0gXCI8aW1nIHNyYz1cIi5jb25jYXQodmFsdWUsIFwiPlwiKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBsaS5pbm5lckhUTUwgPSBcIjxoND5cIi5jb25jYXQoa2V5LCBcIjwvaDQ+XCIpICsgXCI8cD5cIi5jb25jYXQodmFsdWUsIFwiPC9wPlwiKTtcbiAgICAgICAgICBwcmVkZWZpbmVkTkVXLmFwcGVuZENoaWxkKGxpKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIG1ha2VMaXN0cyh2YWx1ZSwga2V5LCBsaSwgbXlMaXN0QXJyYXksIG5ld2xpc3QpIHtcbiAgICAgIG15TGlzdEFycmF5ID0gdmFsdWUucmVwbGFjZSgvLC9nLCAnJykuc3BsaXQoXCIgXCIpO1xuICAgICAgY29uc29sZS5sb2cobXlMaXN0QXJyYXkubGVuZ3RoKTtcbiAgICAgIGNvbnNvbGUubG9nKFwiR2VucmUgbmV3IGFycmF5OlwiICsgbXlMaXN0QXJyYXlbMF0pO1xuICAgICAgbmV3bGlzdC5jbGFzc0xpc3QuYWRkKCduZXdsaXN0Jyk7XG4gICAgICBsaS5pbm5lckhUTUwgPSBcIjxoND5cIi5jb25jYXQoa2V5LCBcIjwvaDQ+XCIpO1xuXG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IG15TGlzdEFycmF5Lmxlbmd0aDsgaysrKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiaW5ob3VkOlwiICsgbXlMaXN0QXJyYXlba10pO1xuICAgICAgICBuZXdsaXN0LmlubmVySFRNTCArPSAnPGxpPicgKyBteUxpc3RBcnJheVtrXSArICc8L2xpPic7XG4gICAgICB9XG5cbiAgICAgIHByZWRlZmluZWRORVcuYXBwZW5kQ2hpbGQobGkpLmFwcGVuZENoaWxkKG5ld2xpc3QpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGRpc3BsYXlNb3ZpZXMoKSB7XG4gICAgICByZXN1bHRzTkVXLmlubmVySFRNTCA9IFwiXCI7XG4gICAgICBtb3ZpZXMuU2VhcmNoLmZpbHRlcihmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IDQ7IGkrKykge1xuICAgICAgICAgIGNvbnNvbGUubG9nKFwiaW5kZXhcIiArIGkpO1xuICAgICAgICAgIHJldHVybiBpdGVtLlRpdGxlLnRvTG93ZXJDYXNlKCkuaW5jbHVkZXMoc2VhcmNoX3Rlcm1ORVcpO1xuICAgICAgICB9XG4gICAgICB9KS5mb3JFYWNoKGZ1bmN0aW9uIChpbmRleCkge1xuICAgICAgICB2YXIgbGkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIik7XG4gICAgICAgIGxpLmlubmVySFRNTCA9IFwiPGltZyBzcmM9XCIgKyBpbmRleC5Qb3N0ZXIgKyBcIj5cIiArIFwiPHNwYW4+IFRpdGxlOlwiICsgaW5kZXguVGl0bGUgKyBcIjwvc3Bhbj4gXCIgKyBcIjxzcGFuPiBUeXBlOiBcIiArIGluZGV4LlR5cGUgKyBcIjwvc3Bhbj5cIiArIFwiPHNwYW4+IFllYXI6IFwiICsgaW5kZXguWWVhciArIFwiPC9zcGFuPlwiICsgXCI8c3Bhbj4gaW1kYklEOiBcIiArIGluZGV4LmltZGJJRCArIFwiPC9zcGFuPlwiO1xuICAgICAgICByZXN1bHRzTkVXLmFwcGVuZENoaWxkKGxpKTtcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGNoZWNrSW5wdXQoZXZlbnQpIHtcbiAgICAgIHNlYXJjaF90ZXJtTkVXID0gZXZlbnQudGFyZ2V0LnZhbHVlLnRvTG93ZXJDYXNlKCk7XG4gICAgICBjb25zb2xlLmxvZyhcInRlc3RcIiArIHNlYXJjaF90ZXJtTkVXKTtcbiAgICAgIGRpc3BsYXlNb3ZpZXMoKTtcbiAgICB9XG4gIH0pO1xufSkoKTsiLCIndXNlIHN0cmljdCc7XG4vKmpzaGludCBlc3ZlcnNpb246IDYgKi9cblxudmFyIF9pbmRleCA9IHJlcXVpcmUoXCIuLi9ub2RlX21vZHVsZXMvZ3NhcC9pbmRleC5qc1wiKTtcblxuZnVuY3Rpb24gYXN5bmNHZW5lcmF0b3JTdGVwKGdlbiwgcmVzb2x2ZSwgcmVqZWN0LCBfbmV4dCwgX3Rocm93LCBrZXksIGFyZykgeyB0cnkgeyB2YXIgaW5mbyA9IGdlbltrZXldKGFyZyk7IHZhciB2YWx1ZSA9IGluZm8udmFsdWU7IH0gY2F0Y2ggKGVycm9yKSB7IHJlamVjdChlcnJvcik7IHJldHVybjsgfSBpZiAoaW5mby5kb25lKSB7IHJlc29sdmUodmFsdWUpOyB9IGVsc2UgeyBQcm9taXNlLnJlc29sdmUodmFsdWUpLnRoZW4oX25leHQsIF90aHJvdyk7IH0gfVxuXG5mdW5jdGlvbiBfYXN5bmNUb0dlbmVyYXRvcihmbikgeyByZXR1cm4gZnVuY3Rpb24gKCkgeyB2YXIgc2VsZiA9IHRoaXMsIGFyZ3MgPSBhcmd1bWVudHM7IHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7IHZhciBnZW4gPSBmbi5hcHBseShzZWxmLCBhcmdzKTsgZnVuY3Rpb24gX25leHQodmFsdWUpIHsgYXN5bmNHZW5lcmF0b3JTdGVwKGdlbiwgcmVzb2x2ZSwgcmVqZWN0LCBfbmV4dCwgX3Rocm93LCBcIm5leHRcIiwgdmFsdWUpOyB9IGZ1bmN0aW9uIF90aHJvdyhlcnIpIHsgYXN5bmNHZW5lcmF0b3JTdGVwKGdlbiwgcmVzb2x2ZSwgcmVqZWN0LCBfbmV4dCwgX3Rocm93LCBcInRocm93XCIsIGVycik7IH0gX25leHQodW5kZWZpbmVkKTsgfSk7IH07IH1cblxuKGZ1bmN0aW9uICgpIHtcbiAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJsb2FkXCIsIGZ1bmN0aW9uICgpIHtcbiAgICBjb25zb2xlLmxvZyhcInNhbmRib3guanMgbG9hZGVkP1wiKTtcblxuICAgIHZhciBoZWxsbyA9IGZ1bmN0aW9uIGhlbGxvKCkge1xuICAgICAgcmV0dXJuIFwiSGVsbG8gV29ybGQhXCI7XG4gICAgfTtcblxuICAgIHZhciBmcnVpdHMgPSBbXCJCYW5hbmFcIiwgXCJPcmFuZ2VcIiwgXCJBcHBsZVwiLCBcIk1hbmdvXCJdO1xuICAgIGZydWl0cy5pbmNsdWRlcyhcIk1hbmdvXCIpOyAvLyBpcyB0cnVlXG5cbiAgICBmdW5jdGlvbiByZXNvbHZlQWZ0ZXIyU2Vjb25kcygpIHtcbiAgICAgIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSkge1xuICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICByZXNvbHZlKCdyZXNvbHZlZD8nKTtcbiAgICAgICAgfSwgMjAwMCk7XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBhc3luY0NhbGwoKSB7XG4gICAgICByZXR1cm4gX2FzeW5jQ2FsbC5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIF9hc3luY0NhbGwoKSB7XG4gICAgICBfYXN5bmNDYWxsID0gX2FzeW5jVG9HZW5lcmF0b3IoIC8qI19fUFVSRV9fKi9yZWdlbmVyYXRvclJ1bnRpbWUubWFyayhmdW5jdGlvbiBfY2FsbGVlKCkge1xuICAgICAgICB2YXIgcmVzdWx0O1xuICAgICAgICByZXR1cm4gcmVnZW5lcmF0b3JSdW50aW1lLndyYXAoZnVuY3Rpb24gX2NhbGxlZSQoX2NvbnRleHQpIHtcbiAgICAgICAgICB3aGlsZSAoMSkge1xuICAgICAgICAgICAgc3dpdGNoIChfY29udGV4dC5wcmV2ID0gX2NvbnRleHQubmV4dCkge1xuICAgICAgICAgICAgICBjYXNlIDA6XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ2NhbGxpbmcnKTtcbiAgICAgICAgICAgICAgICBfY29udGV4dC5uZXh0ID0gMztcbiAgICAgICAgICAgICAgICByZXR1cm4gcmVzb2x2ZUFmdGVyMlNlY29uZHMoKTtcblxuICAgICAgICAgICAgICBjYXNlIDM6XG4gICAgICAgICAgICAgICAgcmVzdWx0ID0gX2NvbnRleHQuc2VudDtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhyZXN1bHQpOyAvLyBleHBlY3RlZCBvdXRwdXQ6IFwicmVzb2x2ZWRcIlxuXG4gICAgICAgICAgICAgIGNhc2UgNTpcbiAgICAgICAgICAgICAgY2FzZSBcImVuZFwiOlxuICAgICAgICAgICAgICAgIHJldHVybiBfY29udGV4dC5zdG9wKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9LCBfY2FsbGVlKTtcbiAgICAgIH0pKTtcbiAgICAgIHJldHVybiBfYXN5bmNDYWxsLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgfVxuXG4gICAgYXN5bmNDYWxsKCk7IC8vV0lUSCBUaW1lbGluZXMgKGNsZWFuZXIsIG1vcmUgdmVyc2F0aWxlKVxuICAgIC8vIHZhciB0bCA9IGdzYXAudGltZWxpbmUoe3JlcGVhdDogMiwgcmVwZWF0RGVsYXk6IDEsIHJlcGVhdDowfSk7XG4gICAgLy8gdGwudG8oXCIuZWVuXCIsIHt4OiAtMTAwMCAsIGR1cmF0aW9uOiAxfSk7XG4gICAgLy8gdGwudG8oXCIuZWVuXCIsIHt4OiAwLCBkdXJhdGlvbjogMX0pO1xuICAgIC8vdGwudG8oXCIuZWVuXCIsIHtvcGFjaXR5OiAwLCBkdXJhdGlvbjogMX0pO1xuICAgIC8vIHRoZW4gd2UgY2FuIGNvbnRyb2wgdGhlIHdob2xlIHRoaW5nIGVhc2lseS4uLlxuICAgIC8vdGwucGF1c2UoKTtcbiAgICAvL3RsLnJlc3VtZSgpO1xuICAgIC8vdGwuc2VlaygxLjUpO1xuICAgIC8vdGwucmV2ZXJzZSgpO1xuICAgIC8vIHRsLmtpbGwoKTtcbiAgICAvLyBIVE1MIENTUyBKU1Jlc3VsdCBTa2lwIFJlc3VsdHMgSWZyYW1lXG4gICAgLy8gRURJVCBPTlxuXG4gICAgX2luZGV4LmdzYXAuZnJvbShcIi5ibG9ja2hvbGRlciB1bCBsaVwiLCB7XG4gICAgICBkdXJhdGlvbjogMixcbiAgICAgIHNjYWxlOiAwLjUsXG4gICAgICBvcGFjaXR5OiAwLFxuICAgICAgZGVsYXk6IDAuNSxcbiAgICAgIHN0YWdnZXI6IDAuNixcbiAgICAgIGVhc2U6IFwiZWxhc3RpY1wiLFxuICAgICAgZm9yY2UzRDogdHJ1ZVxuICAgIH0pOyAvLyBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmJsb2NraG9sZGVyIHVsIGxpXCIpLmZvckVhY2goZnVuY3Rpb24oYm94KSB7XG4gICAgLy8gIC8vIGJveC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24oKSB7XG4gICAgLy8gICAgIGdzYXAudG8oXCIuYmxvY2tob2xkZXIgdWwgbGlcIiwge1xuICAgIC8vICAgICAgIGR1cmF0aW9uOiAwLjUsIFxuICAgIC8vICAgICAgIC8vb3BhY2l0eTogMCwgXG4gICAgLy8gICAgICAgLy95OiAyMDAsIFxuICAgIC8vICAgICAgIHN0YWdnZXI6IDAuMixcbiAgICAvLyAgICAgICBlYXNlOiBcImJhY2suaW5cIlxuICAgIC8vICAgICB9KTtcbiAgICAvLyAgIC8vfSk7XG4gICAgLy8gfSk7XG4gICAgLy9jbGlwVHdlZW4xID0gVHdlZW5MaXRlLmZyb20oYm94MSwgMSwge2NsaXA6XCJyZWN0KDUwcHggMTAwcHggNTBweCAwcHgpXCIsIHBhdXNlZDp0cnVlfSk7XG4gICAgLy8gZ3NhcC5lZmZlY3RzLmV4cGxvZGUoXCIuYmxvY2tob2xkZXIgdWwgbGlcIiwge1xuICAgIC8vICAgZGlyZWN0aW9uOiBcInVwXCIsIC8vY2FuIHJlZmVyZW5jZSBhbnkgcHJvcGVydGllcyB0aGF0IHRoZSBhdXRob3IgZGVjaWRlcyAtIGluIHRoaXMgY2FzZSBcImRpcmVjdGlvblwiLlxuICAgIC8vICAgZHVyYXRpb246IDNcbiAgICAvLyB9KTtcblxuICB9KTtcbn0pKCk7Il19
