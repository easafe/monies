(() => {
  // output/Data.Show/foreign.js
  var showIntImpl = function(n) {
    return n.toString();
  };
  var showNumberImpl = function(n) {
    var str = n.toString();
    return isNaN(str + ".0") ? str : str + ".0";
  };
  var showStringImpl = function(s) {
    var l = s.length;
    return '"' + s.replace(
      /[\0-\x1F\x7F"\\]/g,
      // eslint-disable-line no-control-regex
      function(c, i) {
        switch (c) {
          case '"':
          case "\\":
            return "\\" + c;
          case "\x07":
            return "\\a";
          case "\b":
            return "\\b";
          case "\f":
            return "\\f";
          case "\n":
            return "\\n";
          case "\r":
            return "\\r";
          case "	":
            return "\\t";
          case "\v":
            return "\\v";
        }
        var k = i + 1;
        var empty5 = k < l && s[k] >= "0" && s[k] <= "9" ? "\\&" : "";
        return "\\" + c.charCodeAt(0).toString(10) + empty5;
      }
    ) + '"';
  };

  // output/Type.Proxy/index.js
  var $$Proxy = /* @__PURE__ */ function() {
    function $$Proxy2() {
    }
    ;
    $$Proxy2.value = new $$Proxy2();
    return $$Proxy2;
  }();

  // output/Data.Symbol/index.js
  var reflectSymbol = function(dict) {
    return dict.reflectSymbol;
  };

  // output/Data.Show/index.js
  var showString = {
    show: showStringImpl
  };
  var showNumber = {
    show: showNumberImpl
  };
  var showInt = {
    show: showIntImpl
  };
  var show = function(dict) {
    return dict.show;
  };

  // output/Data.Unit/foreign.js
  var unit = void 0;

  // output/Data.Bounded/foreign.js
  var topChar = String.fromCharCode(65535);
  var bottomChar = String.fromCharCode(0);
  var topNumber = Number.POSITIVE_INFINITY;
  var bottomNumber = Number.NEGATIVE_INFINITY;

  // output/Data.Ord/foreign.js
  var unsafeCompareImpl = function(lt) {
    return function(eq6) {
      return function(gt) {
        return function(x) {
          return function(y) {
            return x < y ? lt : x === y ? eq6 : gt;
          };
        };
      };
    };
  };
  var ordIntImpl = unsafeCompareImpl;
  var ordCharImpl = unsafeCompareImpl;

  // output/Data.Eq/foreign.js
  var refEq = function(r1) {
    return function(r2) {
      return r1 === r2;
    };
  };
  var eqBooleanImpl = refEq;
  var eqIntImpl = refEq;
  var eqNumberImpl = refEq;
  var eqCharImpl = refEq;
  var eqStringImpl = refEq;

  // output/Data.Eq/index.js
  var eqString = {
    eq: eqStringImpl
  };
  var eqNumber = {
    eq: eqNumberImpl
  };
  var eqInt = {
    eq: eqIntImpl
  };
  var eqChar = {
    eq: eqCharImpl
  };
  var eqBoolean = {
    eq: eqBooleanImpl
  };
  var eq = function(dict) {
    return dict.eq;
  };
  var eq2 = /* @__PURE__ */ eq(eqBoolean);
  var notEq = function(dictEq) {
    var eq32 = eq(dictEq);
    return function(x) {
      return function(y) {
        return eq2(eq32(x)(y))(false);
      };
    };
  };

  // output/Data.Ordering/index.js
  var LT = /* @__PURE__ */ function() {
    function LT2() {
    }
    ;
    LT2.value = new LT2();
    return LT2;
  }();
  var GT = /* @__PURE__ */ function() {
    function GT2() {
    }
    ;
    GT2.value = new GT2();
    return GT2;
  }();
  var EQ = /* @__PURE__ */ function() {
    function EQ2() {
    }
    ;
    EQ2.value = new EQ2();
    return EQ2;
  }();

  // output/Data.Ring/foreign.js
  var intSub = function(x) {
    return function(y) {
      return x - y | 0;
    };
  };

  // output/Data.Semiring/foreign.js
  var intAdd = function(x) {
    return function(y) {
      return x + y | 0;
    };
  };
  var intMul = function(x) {
    return function(y) {
      return x * y | 0;
    };
  };

  // output/Data.Semiring/index.js
  var semiringInt = {
    add: intAdd,
    zero: 0,
    mul: intMul,
    one: 1
  };

  // output/Data.Ring/index.js
  var ringInt = {
    sub: intSub,
    Semiring0: function() {
      return semiringInt;
    }
  };

  // output/Data.Ord/index.js
  var ordInt = /* @__PURE__ */ function() {
    return {
      compare: ordIntImpl(LT.value)(EQ.value)(GT.value),
      Eq0: function() {
        return eqInt;
      }
    };
  }();
  var ordChar = /* @__PURE__ */ function() {
    return {
      compare: ordCharImpl(LT.value)(EQ.value)(GT.value),
      Eq0: function() {
        return eqChar;
      }
    };
  }();

  // output/Data.Bounded/index.js
  var top = function(dict) {
    return dict.top;
  };
  var boundedChar = {
    top: topChar,
    bottom: bottomChar,
    Ord0: function() {
      return ordChar;
    }
  };
  var bottom = function(dict) {
    return dict.bottom;
  };

  // output/Data.Functor/foreign.js
  var arrayMap = function(f) {
    return function(arr) {
      var l = arr.length;
      var result = new Array(l);
      for (var i = 0; i < l; i++) {
        result[i] = f(arr[i]);
      }
      return result;
    };
  };

  // output/Control.Semigroupoid/index.js
  var semigroupoidFn = {
    compose: function(f) {
      return function(g) {
        return function(x) {
          return f(g(x));
        };
      };
    }
  };

  // output/Control.Category/index.js
  var identity = function(dict) {
    return dict.identity;
  };
  var categoryFn = {
    identity: function(x) {
      return x;
    },
    Semigroupoid0: function() {
      return semigroupoidFn;
    }
  };

  // output/Data.Boolean/index.js
  var otherwise = true;

  // output/Data.Function/index.js
  var flip = function(f) {
    return function(b) {
      return function(a) {
        return f(a)(b);
      };
    };
  };
  var $$const = function(a) {
    return function(v) {
      return a;
    };
  };

  // output/Data.Functor/index.js
  var map = function(dict) {
    return dict.map;
  };
  var $$void = function(dictFunctor) {
    return map(dictFunctor)($$const(unit));
  };
  var functorArray = {
    map: arrayMap
  };

  // output/Data.EuclideanRing/foreign.js
  var intDegree = function(x) {
    return Math.min(Math.abs(x), 2147483647);
  };
  var intDiv = function(x) {
    return function(y) {
      if (y === 0) return 0;
      return y > 0 ? Math.floor(x / y) : -Math.floor(x / -y);
    };
  };
  var intMod = function(x) {
    return function(y) {
      if (y === 0) return 0;
      var yy = Math.abs(y);
      return (x % yy + yy) % yy;
    };
  };

  // output/Data.CommutativeRing/index.js
  var commutativeRingInt = {
    Ring0: function() {
      return ringInt;
    }
  };

  // output/Data.EuclideanRing/index.js
  var mod = function(dict) {
    return dict.mod;
  };
  var euclideanRingInt = {
    degree: intDegree,
    div: intDiv,
    mod: intMod,
    CommutativeRing0: function() {
      return commutativeRingInt;
    }
  };
  var div = function(dict) {
    return dict.div;
  };

  // output/Data.Semigroup/foreign.js
  var concatArray = function(xs) {
    return function(ys) {
      if (xs.length === 0) return ys;
      if (ys.length === 0) return xs;
      return xs.concat(ys);
    };
  };

  // output/Data.Semigroup/index.js
  var semigroupArray = {
    append: concatArray
  };
  var append = function(dict) {
    return dict.append;
  };

  // output/Data.Monoid/index.js
  var mempty = function(dict) {
    return dict.mempty;
  };

  // output/Data.Tuple/index.js
  var Tuple = /* @__PURE__ */ function() {
    function Tuple2(value0, value1) {
      this.value0 = value0;
      this.value1 = value1;
    }
    ;
    Tuple2.create = function(value0) {
      return function(value1) {
        return new Tuple2(value0, value1);
      };
    };
    return Tuple2;
  }();
  var snd = function(v) {
    return v.value1;
  };
  var fst = function(v) {
    return v.value0;
  };

  // output/Control.Apply/foreign.js
  var arrayApply = function(fs) {
    return function(xs) {
      var l = fs.length;
      var k = xs.length;
      var result = new Array(l * k);
      var n = 0;
      for (var i = 0; i < l; i++) {
        var f = fs[i];
        for (var j = 0; j < k; j++) {
          result[n++] = f(xs[j]);
        }
      }
      return result;
    };
  };

  // output/Control.Apply/index.js
  var identity2 = /* @__PURE__ */ identity(categoryFn);
  var applyArray = {
    apply: arrayApply,
    Functor0: function() {
      return functorArray;
    }
  };
  var apply = function(dict) {
    return dict.apply;
  };
  var applySecond = function(dictApply) {
    var apply1 = apply(dictApply);
    var map10 = map(dictApply.Functor0());
    return function(a) {
      return function(b) {
        return apply1(map10($$const(identity2))(a))(b);
      };
    };
  };

  // output/Control.Applicative/index.js
  var pure = function(dict) {
    return dict.pure;
  };
  var when = function(dictApplicative) {
    var pure1 = pure(dictApplicative);
    return function(v) {
      return function(v1) {
        if (v) {
          return v1;
        }
        ;
        if (!v) {
          return pure1(unit);
        }
        ;
        throw new Error("Failed pattern match at Control.Applicative (line 63, column 1 - line 63, column 63): " + [v.constructor.name, v1.constructor.name]);
      };
    };
  };
  var liftA1 = function(dictApplicative) {
    var apply3 = apply(dictApplicative.Apply0());
    var pure1 = pure(dictApplicative);
    return function(f) {
      return function(a) {
        return apply3(pure1(f))(a);
      };
    };
  };

  // output/Data.Maybe/index.js
  var identity3 = /* @__PURE__ */ identity(categoryFn);
  var Nothing = /* @__PURE__ */ function() {
    function Nothing2() {
    }
    ;
    Nothing2.value = new Nothing2();
    return Nothing2;
  }();
  var Just = /* @__PURE__ */ function() {
    function Just2(value0) {
      this.value0 = value0;
    }
    ;
    Just2.create = function(value0) {
      return new Just2(value0);
    };
    return Just2;
  }();
  var maybe = function(v) {
    return function(v1) {
      return function(v2) {
        if (v2 instanceof Nothing) {
          return v;
        }
        ;
        if (v2 instanceof Just) {
          return v1(v2.value0);
        }
        ;
        throw new Error("Failed pattern match at Data.Maybe (line 237, column 1 - line 237, column 51): " + [v.constructor.name, v1.constructor.name, v2.constructor.name]);
      };
    };
  };
  var isNothing = /* @__PURE__ */ maybe(true)(/* @__PURE__ */ $$const(false));
  var functorMaybe = {
    map: function(v) {
      return function(v1) {
        if (v1 instanceof Just) {
          return new Just(v(v1.value0));
        }
        ;
        return Nothing.value;
      };
    }
  };
  var map2 = /* @__PURE__ */ map(functorMaybe);
  var fromMaybe = function(a) {
    return maybe(a)(identity3);
  };
  var fromJust = function() {
    return function(v) {
      if (v instanceof Just) {
        return v.value0;
      }
      ;
      throw new Error("Failed pattern match at Data.Maybe (line 288, column 1 - line 288, column 46): " + [v.constructor.name]);
    };
  };
  var eqMaybe = function(dictEq) {
    var eq6 = eq(dictEq);
    return {
      eq: function(x) {
        return function(y) {
          if (x instanceof Nothing && y instanceof Nothing) {
            return true;
          }
          ;
          if (x instanceof Just && y instanceof Just) {
            return eq6(x.value0)(y.value0);
          }
          ;
          return false;
        };
      }
    };
  };
  var applyMaybe = {
    apply: function(v) {
      return function(v1) {
        if (v instanceof Just) {
          return map2(v.value0)(v1);
        }
        ;
        if (v instanceof Nothing) {
          return Nothing.value;
        }
        ;
        throw new Error("Failed pattern match at Data.Maybe (line 67, column 1 - line 69, column 30): " + [v.constructor.name, v1.constructor.name]);
      };
    },
    Functor0: function() {
      return functorMaybe;
    }
  };
  var bindMaybe = {
    bind: function(v) {
      return function(v1) {
        if (v instanceof Just) {
          return v1(v.value0);
        }
        ;
        if (v instanceof Nothing) {
          return Nothing.value;
        }
        ;
        throw new Error("Failed pattern match at Data.Maybe (line 125, column 1 - line 127, column 28): " + [v.constructor.name, v1.constructor.name]);
      };
    },
    Apply0: function() {
      return applyMaybe;
    }
  };

  // output/Data.Either/index.js
  var Left = /* @__PURE__ */ function() {
    function Left2(value0) {
      this.value0 = value0;
    }
    ;
    Left2.create = function(value0) {
      return new Left2(value0);
    };
    return Left2;
  }();
  var Right = /* @__PURE__ */ function() {
    function Right2(value0) {
      this.value0 = value0;
    }
    ;
    Right2.create = function(value0) {
      return new Right2(value0);
    };
    return Right2;
  }();

  // output/Data.Foldable/foreign.js
  var foldrArray = function(f) {
    return function(init4) {
      return function(xs) {
        var acc = init4;
        var len = xs.length;
        for (var i = len - 1; i >= 0; i--) {
          acc = f(xs[i])(acc);
        }
        return acc;
      };
    };
  };
  var foldlArray = function(f) {
    return function(init4) {
      return function(xs) {
        var acc = init4;
        var len = xs.length;
        for (var i = 0; i < len; i++) {
          acc = f(acc)(xs[i]);
        }
        return acc;
      };
    };
  };

  // output/Control.Bind/foreign.js
  var arrayBind = function(arr) {
    return function(f) {
      var result = [];
      for (var i = 0, l = arr.length; i < l; i++) {
        Array.prototype.push.apply(result, f(arr[i]));
      }
      return result;
    };
  };

  // output/Control.Bind/index.js
  var identity4 = /* @__PURE__ */ identity(categoryFn);
  var bindArray = {
    bind: arrayBind,
    Apply0: function() {
      return applyArray;
    }
  };
  var bind = function(dict) {
    return dict.bind;
  };
  var bindFlipped = function(dictBind) {
    return flip(bind(dictBind));
  };
  var join = function(dictBind) {
    var bind1 = bind(dictBind);
    return function(m) {
      return bind1(m)(identity4);
    };
  };

  // output/Unsafe.Coerce/foreign.js
  var unsafeCoerce2 = function(x) {
    return x;
  };

  // output/Safe.Coerce/index.js
  var coerce = function() {
    return unsafeCoerce2;
  };

  // output/Data.Newtype/index.js
  var coerce2 = /* @__PURE__ */ coerce();
  var unwrap = function() {
    return coerce2;
  };
  var over = function() {
    return function() {
      return function(v) {
        return coerce2;
      };
    };
  };

  // output/Data.Foldable/index.js
  var foldr = function(dict) {
    return dict.foldr;
  };
  var traverse_ = function(dictApplicative) {
    var applySecond2 = applySecond(dictApplicative.Apply0());
    var pure4 = pure(dictApplicative);
    return function(dictFoldable) {
      var foldr2 = foldr(dictFoldable);
      return function(f) {
        return foldr2(function($454) {
          return applySecond2(f($454));
        })(pure4(unit));
      };
    };
  };
  var for_ = function(dictApplicative) {
    var traverse_1 = traverse_(dictApplicative);
    return function(dictFoldable) {
      return flip(traverse_1(dictFoldable));
    };
  };
  var foldl = function(dict) {
    return dict.foldl;
  };
  var foldMapDefaultR = function(dictFoldable) {
    var foldr2 = foldr(dictFoldable);
    return function(dictMonoid) {
      var append2 = append(dictMonoid.Semigroup0());
      var mempty2 = mempty(dictMonoid);
      return function(f) {
        return foldr2(function(x) {
          return function(acc) {
            return append2(f(x))(acc);
          };
        })(mempty2);
      };
    };
  };
  var foldableArray = {
    foldr: foldrArray,
    foldl: foldlArray,
    foldMap: function(dictMonoid) {
      return foldMapDefaultR(foldableArray)(dictMonoid);
    }
  };

  // output/Effect/foreign.js
  var pureE = function(a) {
    return function() {
      return a;
    };
  };
  var bindE = function(a) {
    return function(f) {
      return function() {
        return f(a())();
      };
    };
  };

  // output/Control.Monad/index.js
  var ap = function(dictMonad) {
    var bind5 = bind(dictMonad.Bind1());
    var pure4 = pure(dictMonad.Applicative0());
    return function(f) {
      return function(a) {
        return bind5(f)(function(f$prime) {
          return bind5(a)(function(a$prime) {
            return pure4(f$prime(a$prime));
          });
        });
      };
    };
  };

  // output/Effect/index.js
  var $runtime_lazy = function(name2, moduleName, init4) {
    var state2 = 0;
    var val;
    return function(lineNumber) {
      if (state2 === 2) return val;
      if (state2 === 1) throw new ReferenceError(name2 + " was needed before it finished initializing (module " + moduleName + ", line " + lineNumber + ")", moduleName, lineNumber);
      state2 = 1;
      val = init4();
      state2 = 2;
      return val;
    };
  };
  var monadEffect = {
    Applicative0: function() {
      return applicativeEffect;
    },
    Bind1: function() {
      return bindEffect;
    }
  };
  var bindEffect = {
    bind: bindE,
    Apply0: function() {
      return $lazy_applyEffect(0);
    }
  };
  var applicativeEffect = {
    pure: pureE,
    Apply0: function() {
      return $lazy_applyEffect(0);
    }
  };
  var $lazy_functorEffect = /* @__PURE__ */ $runtime_lazy("functorEffect", "Effect", function() {
    return {
      map: liftA1(applicativeEffect)
    };
  });
  var $lazy_applyEffect = /* @__PURE__ */ $runtime_lazy("applyEffect", "Effect", function() {
    return {
      apply: ap(monadEffect),
      Functor0: function() {
        return $lazy_functorEffect(0);
      }
    };
  });
  var functorEffect = /* @__PURE__ */ $lazy_functorEffect(20);

  // output/Effect.Aff/foreign.js
  var Aff = function() {
    var EMPTY = {};
    var PURE = "Pure";
    var THROW = "Throw";
    var CATCH = "Catch";
    var SYNC = "Sync";
    var ASYNC = "Async";
    var BIND = "Bind";
    var BRACKET = "Bracket";
    var FORK = "Fork";
    var SEQ = "Sequential";
    var MAP = "Map";
    var APPLY = "Apply";
    var ALT = "Alt";
    var CONS = "Cons";
    var RESUME = "Resume";
    var RELEASE = "Release";
    var FINALIZER = "Finalizer";
    var FINALIZED = "Finalized";
    var FORKED = "Forked";
    var FIBER = "Fiber";
    var THUNK = "Thunk";
    function Aff2(tag, _1, _2, _3) {
      this.tag = tag;
      this._1 = _1;
      this._2 = _2;
      this._3 = _3;
    }
    function AffCtr(tag) {
      var fn = function(_1, _2, _3) {
        return new Aff2(tag, _1, _2, _3);
      };
      fn.tag = tag;
      return fn;
    }
    function nonCanceler(error3) {
      return new Aff2(PURE, void 0);
    }
    function runEff(eff) {
      try {
        eff();
      } catch (error3) {
        setTimeout(function() {
          throw error3;
        }, 0);
      }
    }
    function runSync(left, right, eff) {
      try {
        return right(eff());
      } catch (error3) {
        return left(error3);
      }
    }
    function runAsync(left, eff, k) {
      try {
        return eff(k)();
      } catch (error3) {
        k(left(error3))();
        return nonCanceler;
      }
    }
    var Scheduler = function() {
      var limit = 1024;
      var size4 = 0;
      var ix = 0;
      var queue = new Array(limit);
      var draining = false;
      function drain() {
        var thunk;
        draining = true;
        while (size4 !== 0) {
          size4--;
          thunk = queue[ix];
          queue[ix] = void 0;
          ix = (ix + 1) % limit;
          thunk();
        }
        draining = false;
      }
      return {
        isDraining: function() {
          return draining;
        },
        enqueue: function(cb) {
          var i, tmp;
          if (size4 === limit) {
            tmp = draining;
            drain();
            draining = tmp;
          }
          queue[(ix + size4) % limit] = cb;
          size4++;
          if (!draining) {
            drain();
          }
        }
      };
    }();
    function Supervisor(util) {
      var fibers = {};
      var fiberId = 0;
      var count = 0;
      return {
        register: function(fiber) {
          var fid = fiberId++;
          fiber.onComplete({
            rethrow: true,
            handler: function(result) {
              return function() {
                count--;
                delete fibers[fid];
              };
            }
          })();
          fibers[fid] = fiber;
          count++;
        },
        isEmpty: function() {
          return count === 0;
        },
        killAll: function(killError, cb) {
          return function() {
            if (count === 0) {
              return cb();
            }
            var killCount = 0;
            var kills = {};
            function kill(fid) {
              kills[fid] = fibers[fid].kill(killError, function(result) {
                return function() {
                  delete kills[fid];
                  killCount--;
                  if (util.isLeft(result) && util.fromLeft(result)) {
                    setTimeout(function() {
                      throw util.fromLeft(result);
                    }, 0);
                  }
                  if (killCount === 0) {
                    cb();
                  }
                };
              })();
            }
            for (var k in fibers) {
              if (fibers.hasOwnProperty(k)) {
                killCount++;
                kill(k);
              }
            }
            fibers = {};
            fiberId = 0;
            count = 0;
            return function(error3) {
              return new Aff2(SYNC, function() {
                for (var k2 in kills) {
                  if (kills.hasOwnProperty(k2)) {
                    kills[k2]();
                  }
                }
              });
            };
          };
        }
      };
    }
    var SUSPENDED = 0;
    var CONTINUE = 1;
    var STEP_BIND = 2;
    var STEP_RESULT = 3;
    var PENDING = 4;
    var RETURN = 5;
    var COMPLETED = 6;
    function Fiber(util, supervisor, aff) {
      var runTick = 0;
      var status = SUSPENDED;
      var step = aff;
      var fail = null;
      var interrupt = null;
      var bhead = null;
      var btail = null;
      var attempts = null;
      var bracketCount = 0;
      var joinId = 0;
      var joins = null;
      var rethrow = true;
      function run4(localRunTick) {
        var tmp, result, attempt;
        while (true) {
          tmp = null;
          result = null;
          attempt = null;
          switch (status) {
            case STEP_BIND:
              status = CONTINUE;
              try {
                step = bhead(step);
                if (btail === null) {
                  bhead = null;
                } else {
                  bhead = btail._1;
                  btail = btail._2;
                }
              } catch (e) {
                status = RETURN;
                fail = util.left(e);
                step = null;
              }
              break;
            case STEP_RESULT:
              if (util.isLeft(step)) {
                status = RETURN;
                fail = step;
                step = null;
              } else if (bhead === null) {
                status = RETURN;
              } else {
                status = STEP_BIND;
                step = util.fromRight(step);
              }
              break;
            case CONTINUE:
              switch (step.tag) {
                case BIND:
                  if (bhead) {
                    btail = new Aff2(CONS, bhead, btail);
                  }
                  bhead = step._2;
                  status = CONTINUE;
                  step = step._1;
                  break;
                case PURE:
                  if (bhead === null) {
                    status = RETURN;
                    step = util.right(step._1);
                  } else {
                    status = STEP_BIND;
                    step = step._1;
                  }
                  break;
                case SYNC:
                  status = STEP_RESULT;
                  step = runSync(util.left, util.right, step._1);
                  break;
                case ASYNC:
                  status = PENDING;
                  step = runAsync(util.left, step._1, function(result2) {
                    return function() {
                      if (runTick !== localRunTick) {
                        return;
                      }
                      runTick++;
                      Scheduler.enqueue(function() {
                        if (runTick !== localRunTick + 1) {
                          return;
                        }
                        status = STEP_RESULT;
                        step = result2;
                        run4(runTick);
                      });
                    };
                  });
                  return;
                case THROW:
                  status = RETURN;
                  fail = util.left(step._1);
                  step = null;
                  break;
                case CATCH:
                  if (bhead === null) {
                    attempts = new Aff2(CONS, step, attempts, interrupt);
                  } else {
                    attempts = new Aff2(CONS, step, new Aff2(CONS, new Aff2(RESUME, bhead, btail), attempts, interrupt), interrupt);
                  }
                  bhead = null;
                  btail = null;
                  status = CONTINUE;
                  step = step._1;
                  break;
                case BRACKET:
                  bracketCount++;
                  if (bhead === null) {
                    attempts = new Aff2(CONS, step, attempts, interrupt);
                  } else {
                    attempts = new Aff2(CONS, step, new Aff2(CONS, new Aff2(RESUME, bhead, btail), attempts, interrupt), interrupt);
                  }
                  bhead = null;
                  btail = null;
                  status = CONTINUE;
                  step = step._1;
                  break;
                case FORK:
                  status = STEP_RESULT;
                  tmp = Fiber(util, supervisor, step._2);
                  if (supervisor) {
                    supervisor.register(tmp);
                  }
                  if (step._1) {
                    tmp.run();
                  }
                  step = util.right(tmp);
                  break;
                case SEQ:
                  status = CONTINUE;
                  step = sequential2(util, supervisor, step._1);
                  break;
              }
              break;
            case RETURN:
              bhead = null;
              btail = null;
              if (attempts === null) {
                status = COMPLETED;
                step = interrupt || fail || step;
              } else {
                tmp = attempts._3;
                attempt = attempts._1;
                attempts = attempts._2;
                switch (attempt.tag) {
                  case CATCH:
                    if (interrupt && interrupt !== tmp && bracketCount === 0) {
                      status = RETURN;
                    } else if (fail) {
                      status = CONTINUE;
                      step = attempt._2(util.fromLeft(fail));
                      fail = null;
                    }
                    break;
                  case RESUME:
                    if (interrupt && interrupt !== tmp && bracketCount === 0 || fail) {
                      status = RETURN;
                    } else {
                      bhead = attempt._1;
                      btail = attempt._2;
                      status = STEP_BIND;
                      step = util.fromRight(step);
                    }
                    break;
                  case BRACKET:
                    bracketCount--;
                    if (fail === null) {
                      result = util.fromRight(step);
                      attempts = new Aff2(CONS, new Aff2(RELEASE, attempt._2, result), attempts, tmp);
                      if (interrupt === tmp || bracketCount > 0) {
                        status = CONTINUE;
                        step = attempt._3(result);
                      }
                    }
                    break;
                  case RELEASE:
                    attempts = new Aff2(CONS, new Aff2(FINALIZED, step, fail), attempts, interrupt);
                    status = CONTINUE;
                    if (interrupt && interrupt !== tmp && bracketCount === 0) {
                      step = attempt._1.killed(util.fromLeft(interrupt))(attempt._2);
                    } else if (fail) {
                      step = attempt._1.failed(util.fromLeft(fail))(attempt._2);
                    } else {
                      step = attempt._1.completed(util.fromRight(step))(attempt._2);
                    }
                    fail = null;
                    bracketCount++;
                    break;
                  case FINALIZER:
                    bracketCount++;
                    attempts = new Aff2(CONS, new Aff2(FINALIZED, step, fail), attempts, interrupt);
                    status = CONTINUE;
                    step = attempt._1;
                    break;
                  case FINALIZED:
                    bracketCount--;
                    status = RETURN;
                    step = attempt._1;
                    fail = attempt._2;
                    break;
                }
              }
              break;
            case COMPLETED:
              for (var k in joins) {
                if (joins.hasOwnProperty(k)) {
                  rethrow = rethrow && joins[k].rethrow;
                  runEff(joins[k].handler(step));
                }
              }
              joins = null;
              if (interrupt && fail) {
                setTimeout(function() {
                  throw util.fromLeft(fail);
                }, 0);
              } else if (util.isLeft(step) && rethrow) {
                setTimeout(function() {
                  if (rethrow) {
                    throw util.fromLeft(step);
                  }
                }, 0);
              }
              return;
            case SUSPENDED:
              status = CONTINUE;
              break;
            case PENDING:
              return;
          }
        }
      }
      function onComplete(join4) {
        return function() {
          if (status === COMPLETED) {
            rethrow = rethrow && join4.rethrow;
            join4.handler(step)();
            return function() {
            };
          }
          var jid = joinId++;
          joins = joins || {};
          joins[jid] = join4;
          return function() {
            if (joins !== null) {
              delete joins[jid];
            }
          };
        };
      }
      function kill(error3, cb) {
        return function() {
          if (status === COMPLETED) {
            cb(util.right(void 0))();
            return function() {
            };
          }
          var canceler = onComplete({
            rethrow: false,
            handler: function() {
              return cb(util.right(void 0));
            }
          })();
          switch (status) {
            case SUSPENDED:
              interrupt = util.left(error3);
              status = COMPLETED;
              step = interrupt;
              run4(runTick);
              break;
            case PENDING:
              if (interrupt === null) {
                interrupt = util.left(error3);
              }
              if (bracketCount === 0) {
                if (status === PENDING) {
                  attempts = new Aff2(CONS, new Aff2(FINALIZER, step(error3)), attempts, interrupt);
                }
                status = RETURN;
                step = null;
                fail = null;
                run4(++runTick);
              }
              break;
            default:
              if (interrupt === null) {
                interrupt = util.left(error3);
              }
              if (bracketCount === 0) {
                status = RETURN;
                step = null;
                fail = null;
              }
          }
          return canceler;
        };
      }
      function join3(cb) {
        return function() {
          var canceler = onComplete({
            rethrow: false,
            handler: cb
          })();
          if (status === SUSPENDED) {
            run4(runTick);
          }
          return canceler;
        };
      }
      return {
        kill,
        join: join3,
        onComplete,
        isSuspended: function() {
          return status === SUSPENDED;
        },
        run: function() {
          if (status === SUSPENDED) {
            if (!Scheduler.isDraining()) {
              Scheduler.enqueue(function() {
                run4(runTick);
              });
            } else {
              run4(runTick);
            }
          }
        }
      };
    }
    function runPar(util, supervisor, par, cb) {
      var fiberId = 0;
      var fibers = {};
      var killId = 0;
      var kills = {};
      var early = new Error("[ParAff] Early exit");
      var interrupt = null;
      var root = EMPTY;
      function kill(error3, par2, cb2) {
        var step = par2;
        var head2 = null;
        var tail2 = null;
        var count = 0;
        var kills2 = {};
        var tmp, kid;
        loop: while (true) {
          tmp = null;
          switch (step.tag) {
            case FORKED:
              if (step._3 === EMPTY) {
                tmp = fibers[step._1];
                kills2[count++] = tmp.kill(error3, function(result) {
                  return function() {
                    count--;
                    if (count === 0) {
                      cb2(result)();
                    }
                  };
                });
              }
              if (head2 === null) {
                break loop;
              }
              step = head2._2;
              if (tail2 === null) {
                head2 = null;
              } else {
                head2 = tail2._1;
                tail2 = tail2._2;
              }
              break;
            case MAP:
              step = step._2;
              break;
            case APPLY:
            case ALT:
              if (head2) {
                tail2 = new Aff2(CONS, head2, tail2);
              }
              head2 = step;
              step = step._1;
              break;
          }
        }
        if (count === 0) {
          cb2(util.right(void 0))();
        } else {
          kid = 0;
          tmp = count;
          for (; kid < tmp; kid++) {
            kills2[kid] = kills2[kid]();
          }
        }
        return kills2;
      }
      function join3(result, head2, tail2) {
        var fail, step, lhs, rhs, tmp, kid;
        if (util.isLeft(result)) {
          fail = result;
          step = null;
        } else {
          step = result;
          fail = null;
        }
        loop: while (true) {
          lhs = null;
          rhs = null;
          tmp = null;
          kid = null;
          if (interrupt !== null) {
            return;
          }
          if (head2 === null) {
            cb(fail || step)();
            return;
          }
          if (head2._3 !== EMPTY) {
            return;
          }
          switch (head2.tag) {
            case MAP:
              if (fail === null) {
                head2._3 = util.right(head2._1(util.fromRight(step)));
                step = head2._3;
              } else {
                head2._3 = fail;
              }
              break;
            case APPLY:
              lhs = head2._1._3;
              rhs = head2._2._3;
              if (fail) {
                head2._3 = fail;
                tmp = true;
                kid = killId++;
                kills[kid] = kill(early, fail === lhs ? head2._2 : head2._1, function() {
                  return function() {
                    delete kills[kid];
                    if (tmp) {
                      tmp = false;
                    } else if (tail2 === null) {
                      join3(fail, null, null);
                    } else {
                      join3(fail, tail2._1, tail2._2);
                    }
                  };
                });
                if (tmp) {
                  tmp = false;
                  return;
                }
              } else if (lhs === EMPTY || rhs === EMPTY) {
                return;
              } else {
                step = util.right(util.fromRight(lhs)(util.fromRight(rhs)));
                head2._3 = step;
              }
              break;
            case ALT:
              lhs = head2._1._3;
              rhs = head2._2._3;
              if (lhs === EMPTY && util.isLeft(rhs) || rhs === EMPTY && util.isLeft(lhs)) {
                return;
              }
              if (lhs !== EMPTY && util.isLeft(lhs) && rhs !== EMPTY && util.isLeft(rhs)) {
                fail = step === lhs ? rhs : lhs;
                step = null;
                head2._3 = fail;
              } else {
                head2._3 = step;
                tmp = true;
                kid = killId++;
                kills[kid] = kill(early, step === lhs ? head2._2 : head2._1, function() {
                  return function() {
                    delete kills[kid];
                    if (tmp) {
                      tmp = false;
                    } else if (tail2 === null) {
                      join3(step, null, null);
                    } else {
                      join3(step, tail2._1, tail2._2);
                    }
                  };
                });
                if (tmp) {
                  tmp = false;
                  return;
                }
              }
              break;
          }
          if (tail2 === null) {
            head2 = null;
          } else {
            head2 = tail2._1;
            tail2 = tail2._2;
          }
        }
      }
      function resolve(fiber) {
        return function(result) {
          return function() {
            delete fibers[fiber._1];
            fiber._3 = result;
            join3(result, fiber._2._1, fiber._2._2);
          };
        };
      }
      function run4() {
        var status = CONTINUE;
        var step = par;
        var head2 = null;
        var tail2 = null;
        var tmp, fid;
        loop: while (true) {
          tmp = null;
          fid = null;
          switch (status) {
            case CONTINUE:
              switch (step.tag) {
                case MAP:
                  if (head2) {
                    tail2 = new Aff2(CONS, head2, tail2);
                  }
                  head2 = new Aff2(MAP, step._1, EMPTY, EMPTY);
                  step = step._2;
                  break;
                case APPLY:
                  if (head2) {
                    tail2 = new Aff2(CONS, head2, tail2);
                  }
                  head2 = new Aff2(APPLY, EMPTY, step._2, EMPTY);
                  step = step._1;
                  break;
                case ALT:
                  if (head2) {
                    tail2 = new Aff2(CONS, head2, tail2);
                  }
                  head2 = new Aff2(ALT, EMPTY, step._2, EMPTY);
                  step = step._1;
                  break;
                default:
                  fid = fiberId++;
                  status = RETURN;
                  tmp = step;
                  step = new Aff2(FORKED, fid, new Aff2(CONS, head2, tail2), EMPTY);
                  tmp = Fiber(util, supervisor, tmp);
                  tmp.onComplete({
                    rethrow: false,
                    handler: resolve(step)
                  })();
                  fibers[fid] = tmp;
                  if (supervisor) {
                    supervisor.register(tmp);
                  }
              }
              break;
            case RETURN:
              if (head2 === null) {
                break loop;
              }
              if (head2._1 === EMPTY) {
                head2._1 = step;
                status = CONTINUE;
                step = head2._2;
                head2._2 = EMPTY;
              } else {
                head2._2 = step;
                step = head2;
                if (tail2 === null) {
                  head2 = null;
                } else {
                  head2 = tail2._1;
                  tail2 = tail2._2;
                }
              }
          }
        }
        root = step;
        for (fid = 0; fid < fiberId; fid++) {
          fibers[fid].run();
        }
      }
      function cancel(error3, cb2) {
        interrupt = util.left(error3);
        var innerKills;
        for (var kid in kills) {
          if (kills.hasOwnProperty(kid)) {
            innerKills = kills[kid];
            for (kid in innerKills) {
              if (innerKills.hasOwnProperty(kid)) {
                innerKills[kid]();
              }
            }
          }
        }
        kills = null;
        var newKills = kill(error3, root, cb2);
        return function(killError) {
          return new Aff2(ASYNC, function(killCb) {
            return function() {
              for (var kid2 in newKills) {
                if (newKills.hasOwnProperty(kid2)) {
                  newKills[kid2]();
                }
              }
              return nonCanceler;
            };
          });
        };
      }
      run4();
      return function(killError) {
        return new Aff2(ASYNC, function(killCb) {
          return function() {
            return cancel(killError, killCb);
          };
        });
      };
    }
    function sequential2(util, supervisor, par) {
      return new Aff2(ASYNC, function(cb) {
        return function() {
          return runPar(util, supervisor, par, cb);
        };
      });
    }
    Aff2.EMPTY = EMPTY;
    Aff2.Pure = AffCtr(PURE);
    Aff2.Throw = AffCtr(THROW);
    Aff2.Catch = AffCtr(CATCH);
    Aff2.Sync = AffCtr(SYNC);
    Aff2.Async = AffCtr(ASYNC);
    Aff2.Bind = AffCtr(BIND);
    Aff2.Bracket = AffCtr(BRACKET);
    Aff2.Fork = AffCtr(FORK);
    Aff2.Seq = AffCtr(SEQ);
    Aff2.ParMap = AffCtr(MAP);
    Aff2.ParApply = AffCtr(APPLY);
    Aff2.ParAlt = AffCtr(ALT);
    Aff2.Fiber = Fiber;
    Aff2.Supervisor = Supervisor;
    Aff2.Scheduler = Scheduler;
    Aff2.nonCanceler = nonCanceler;
    return Aff2;
  }();
  var _pure = Aff.Pure;
  var _throwError = Aff.Throw;
  function _catchError(aff) {
    return function(k) {
      return Aff.Catch(aff, k);
    };
  }
  function _map(f) {
    return function(aff) {
      if (aff.tag === Aff.Pure.tag) {
        return Aff.Pure(f(aff._1));
      } else {
        return Aff.Bind(aff, function(value2) {
          return Aff.Pure(f(value2));
        });
      }
    };
  }
  function _bind(aff) {
    return function(k) {
      return Aff.Bind(aff, k);
    };
  }
  var _liftEffect = Aff.Sync;
  var makeAff = Aff.Async;
  function _makeFiber(util, aff) {
    return function() {
      return Aff.Fiber(util, null, aff);
    };
  }
  var _sequential = Aff.Seq;

  // output/Effect.Exception/foreign.js
  function error(msg) {
    return new Error(msg);
  }
  function message(e) {
    return e.message;
  }
  function throwException(e) {
    return function() {
      throw e;
    };
  }

  // output/Effect.Exception/index.js
  var $$throw = function($4) {
    return throwException(error($4));
  };

  // output/Control.Monad.Error.Class/index.js
  var catchError = function(dict) {
    return dict.catchError;
  };
  var $$try = function(dictMonadError) {
    var catchError1 = catchError(dictMonadError);
    var Monad0 = dictMonadError.MonadThrow0().Monad0();
    var map10 = map(Monad0.Bind1().Apply0().Functor0());
    var pure4 = pure(Monad0.Applicative0());
    return function(a) {
      return catchError1(map10(Right.create)(a))(function($52) {
        return pure4(Left.create($52));
      });
    };
  };

  // output/Effect.Ref/foreign.js
  var _new = function(val) {
    return function() {
      return { value: val };
    };
  };
  var read = function(ref) {
    return function() {
      return ref.value;
    };
  };
  var write = function(val) {
    return function(ref) {
      return function() {
        ref.value = val;
      };
    };
  };

  // output/Effect.Ref/index.js
  var $$new = _new;

  // output/Control.Monad.ST.Internal/foreign.js
  var map_ = function(f) {
    return function(a) {
      return function() {
        return f(a());
      };
    };
  };
  var foreach = function(as) {
    return function(f) {
      return function() {
        for (var i = 0, l = as.length; i < l; i++) {
          f(as[i])();
        }
      };
    };
  };

  // output/Control.Monad.ST.Internal/index.js
  var functorST = {
    map: map_
  };

  // output/Effect.Class/index.js
  var liftEffect = function(dict) {
    return dict.liftEffect;
  };

  // output/Data.Time.Duration/index.js
  var over2 = /* @__PURE__ */ over()();
  var Milliseconds = function(x) {
    return x;
  };
  var Days = function(x) {
    return x;
  };
  var toDuration = function(dict) {
    return dict.toDuration;
  };
  var fromDuration = function(dict) {
    return dict.fromDuration;
  };
  var durationDays = {
    fromDuration: /* @__PURE__ */ over2(Days)(function(v) {
      return v * 864e5;
    }),
    toDuration: /* @__PURE__ */ over2(Milliseconds)(function(v) {
      return v / 864e5;
    })
  };

  // output/Effect.Unsafe/foreign.js
  var unsafePerformEffect = function(f) {
    return f();
  };

  // output/Partial.Unsafe/foreign.js
  var _unsafePartial = function(f) {
    return f();
  };

  // output/Partial/foreign.js
  var _crashWith = function(msg) {
    throw new Error(msg);
  };

  // output/Partial/index.js
  var crashWith = function() {
    return _crashWith;
  };

  // output/Partial.Unsafe/index.js
  var crashWith2 = /* @__PURE__ */ crashWith();
  var unsafePartial = _unsafePartial;
  var unsafeCrashWith = function(msg) {
    return unsafePartial(function() {
      return crashWith2(msg);
    });
  };

  // output/Effect.Aff/index.js
  var $runtime_lazy2 = function(name2, moduleName, init4) {
    var state2 = 0;
    var val;
    return function(lineNumber) {
      if (state2 === 2) return val;
      if (state2 === 1) throw new ReferenceError(name2 + " was needed before it finished initializing (module " + moduleName + ", line " + lineNumber + ")", moduleName, lineNumber);
      state2 = 1;
      val = init4();
      state2 = 2;
      return val;
    };
  };
  var $$void2 = /* @__PURE__ */ $$void(functorEffect);
  var functorAff = {
    map: _map
  };
  var ffiUtil = /* @__PURE__ */ function() {
    var unsafeFromRight = function(v) {
      if (v instanceof Right) {
        return v.value0;
      }
      ;
      if (v instanceof Left) {
        return unsafeCrashWith("unsafeFromRight: Left");
      }
      ;
      throw new Error("Failed pattern match at Effect.Aff (line 412, column 21 - line 414, column 54): " + [v.constructor.name]);
    };
    var unsafeFromLeft = function(v) {
      if (v instanceof Left) {
        return v.value0;
      }
      ;
      if (v instanceof Right) {
        return unsafeCrashWith("unsafeFromLeft: Right");
      }
      ;
      throw new Error("Failed pattern match at Effect.Aff (line 407, column 20 - line 409, column 55): " + [v.constructor.name]);
    };
    var isLeft = function(v) {
      if (v instanceof Left) {
        return true;
      }
      ;
      if (v instanceof Right) {
        return false;
      }
      ;
      throw new Error("Failed pattern match at Effect.Aff (line 402, column 12 - line 404, column 21): " + [v.constructor.name]);
    };
    return {
      isLeft,
      fromLeft: unsafeFromLeft,
      fromRight: unsafeFromRight,
      left: Left.create,
      right: Right.create
    };
  }();
  var makeFiber = function(aff) {
    return _makeFiber(ffiUtil, aff);
  };
  var launchAff = function(aff) {
    return function __do() {
      var fiber = makeFiber(aff)();
      fiber.run();
      return fiber;
    };
  };
  var monadAff = {
    Applicative0: function() {
      return applicativeAff;
    },
    Bind1: function() {
      return bindAff;
    }
  };
  var bindAff = {
    bind: _bind,
    Apply0: function() {
      return $lazy_applyAff(0);
    }
  };
  var applicativeAff = {
    pure: _pure,
    Apply0: function() {
      return $lazy_applyAff(0);
    }
  };
  var $lazy_applyAff = /* @__PURE__ */ $runtime_lazy2("applyAff", "Effect.Aff", function() {
    return {
      apply: ap(monadAff),
      Functor0: function() {
        return functorAff;
      }
    };
  });
  var bindFlipped2 = /* @__PURE__ */ bindFlipped(bindAff);
  var monadEffectAff = {
    liftEffect: _liftEffect,
    Monad0: function() {
      return monadAff;
    }
  };
  var liftEffect2 = /* @__PURE__ */ liftEffect(monadEffectAff);
  var monadThrowAff = {
    throwError: _throwError,
    Monad0: function() {
      return monadAff;
    }
  };
  var monadErrorAff = {
    catchError: _catchError,
    MonadThrow0: function() {
      return monadThrowAff;
    }
  };
  var $$try2 = /* @__PURE__ */ $$try(monadErrorAff);
  var runAff = function(k) {
    return function(aff) {
      return launchAff(bindFlipped2(function($83) {
        return liftEffect2(k($83));
      })($$try2(aff)));
    };
  };
  var runAff_ = function(k) {
    return function(aff) {
      return $$void2(runAff(k)(aff));
    };
  };

  // output/Effect.Console/foreign.js
  var log = function(s) {
    return function() {
      console.log(s);
    };
  };

  // output/Flame.Application.Internal.Dom/foreign.js
  function querySelector_(selector) {
    return document.querySelector(selector);
  }
  function createWindowListener_(eventName, updater) {
    window.addEventListener(eventName, function(event) {
      updater(event)();
    });
  }
  function createDocumentListener_(eventName, updater) {
    document.addEventListener(eventName, function(event) {
      updater(event)();
    });
  }
  function createCustomListener_(eventName, updater) {
    document.addEventListener(eventName, function(event) {
      updater(event.detail)();
    });
  }

  // output/Data.Nullable/foreign.js
  function nullable(a, r, f) {
    return a == null ? r : f(a);
  }

  // output/Data.Nullable/index.js
  var toMaybe = function(n) {
    return nullable(n, Nothing.value, Just.create);
  };

  // output/Effect.Uncurried/foreign.js
  var runEffectFn1 = function runEffectFn12(fn) {
    return function(a) {
      return function() {
        return fn(a);
      };
    };
  };
  var runEffectFn2 = function runEffectFn22(fn) {
    return function(a) {
      return function(b) {
        return function() {
          return fn(a, b);
        };
      };
    };
  };
  var runEffectFn4 = function runEffectFn42(fn) {
    return function(a) {
      return function(b) {
        return function(c) {
          return function(d) {
            return function() {
              return fn(a, b, c, d);
            };
          };
        };
      };
    };
  };

  // output/Flame.Application.Internal.Dom/index.js
  var querySelector = function(selector) {
    return function __do() {
      var selected = querySelector_(selector);
      return toMaybe(selected);
    };
  };
  var createWindowListener = /* @__PURE__ */ runEffectFn2(createWindowListener_);
  var createDocumentListener = /* @__PURE__ */ runEffectFn2(createDocumentListener_);
  var createCustomListener = /* @__PURE__ */ runEffectFn2(createCustomListener_);

  // output/Data.String.Regex/foreign.js
  var regexImpl = function(left) {
    return function(right) {
      return function(s1) {
        return function(s2) {
          try {
            return right(new RegExp(s1, s2));
          } catch (e) {
            return left(e.message);
          }
        };
      };
    };
  };
  var _replaceBy = function(just) {
    return function(nothing) {
      return function(r) {
        return function(f) {
          return function(s) {
            return s.replace(r, function(match) {
              var groups = [];
              var group4, i = 1;
              while (typeof (group4 = arguments[i++]) !== "number") {
                groups.push(group4 == null ? nothing : just(group4));
              }
              return f(match)(groups);
            });
          };
        };
      };
    };
  };

  // output/Data.String.CodeUnits/foreign.js
  var singleton = function(c) {
    return c;
  };
  var length = function(s) {
    return s.length;
  };
  var drop = function(n) {
    return function(s) {
      return s.substring(n);
    };
  };

  // output/Data.String.Unsafe/foreign.js
  var charAt = function(i) {
    return function(s) {
      if (i >= 0 && i < s.length) return s.charAt(i);
      throw new Error("Data.String.Unsafe.charAt: Invalid index.");
    };
  };

  // output/Data.String.Common/foreign.js
  var toLower = function(s) {
    return s.toLowerCase();
  };
  var toUpper = function(s) {
    return s.toUpperCase();
  };

  // output/Data.String.Regex.Flags/index.js
  var global = {
    global: true,
    ignoreCase: false,
    multiline: false,
    dotAll: false,
    sticky: false,
    unicode: false
  };

  // output/Data.String.Regex/index.js
  var replace$prime = /* @__PURE__ */ function() {
    return _replaceBy(Just.create)(Nothing.value);
  }();
  var renderFlags = function(v) {
    return function() {
      if (v.global) {
        return "g";
      }
      ;
      return "";
    }() + (function() {
      if (v.ignoreCase) {
        return "i";
      }
      ;
      return "";
    }() + (function() {
      if (v.multiline) {
        return "m";
      }
      ;
      return "";
    }() + (function() {
      if (v.dotAll) {
        return "s";
      }
      ;
      return "";
    }() + (function() {
      if (v.sticky) {
        return "y";
      }
      ;
      return "";
    }() + function() {
      if (v.unicode) {
        return "u";
      }
      ;
      return "";
    }()))));
  };
  var regex = function(s) {
    return function(f) {
      return regexImpl(Left.create)(Right.create)(s)(renderFlags(f));
    };
  };

  // output/Flame.Html.Attribute.Internal/foreign.js
  var styleData = 1;
  var propertyData = 3;
  var attributeData = 4;
  function createProperty(name2) {
    return function(value2) {
      return [propertyData, name2, value2];
    };
  }
  function createAttribute(name2) {
    return function(value2) {
      return [attributeData, name2, value2];
    };
  }
  function createStyle(object) {
    return [styleData, object];
  }

  // output/Data.Array/foreign.js
  var replicateFill = function(count, value2) {
    if (count < 1) {
      return [];
    }
    var result = new Array(count);
    return result.fill(value2);
  };
  var replicatePolyfill = function(count, value2) {
    var result = [];
    var n = 0;
    for (var i = 0; i < count; i++) {
      result[n++] = value2;
    }
    return result;
  };
  var replicateImpl = typeof Array.prototype.fill === "function" ? replicateFill : replicatePolyfill;
  var fromFoldableImpl = /* @__PURE__ */ function() {
    function Cons2(head2, tail2) {
      this.head = head2;
      this.tail = tail2;
    }
    var emptyList = {};
    function curryCons(head2) {
      return function(tail2) {
        return new Cons2(head2, tail2);
      };
    }
    function listToArray(list) {
      var result = [];
      var count = 0;
      var xs = list;
      while (xs !== emptyList) {
        result[count++] = xs.head;
        xs = xs.tail;
      }
      return result;
    }
    return function(foldr2, xs) {
      return listToArray(foldr2(curryCons)(emptyList)(xs));
    };
  }();
  var length2 = function(xs) {
    return xs.length;
  };
  var unsafeIndexImpl = function(xs, n) {
    return xs[n];
  };

  // output/Data.Function.Uncurried/foreign.js
  var runFn2 = function(fn) {
    return function(a) {
      return function(b) {
        return fn(a, b);
      };
    };
  };

  // output/Data.Unfoldable/foreign.js
  var unfoldrArrayImpl = function(isNothing2) {
    return function(fromJust7) {
      return function(fst2) {
        return function(snd2) {
          return function(f) {
            return function(b) {
              var result = [];
              var value2 = b;
              while (true) {
                var maybe2 = f(value2);
                if (isNothing2(maybe2)) return result;
                var tuple = fromJust7(maybe2);
                result.push(fst2(tuple));
                value2 = snd2(tuple);
              }
            };
          };
        };
      };
    };
  };

  // output/Data.Unfoldable1/foreign.js
  var unfoldr1ArrayImpl = function(isNothing2) {
    return function(fromJust7) {
      return function(fst2) {
        return function(snd2) {
          return function(f) {
            return function(b) {
              var result = [];
              var value2 = b;
              while (true) {
                var tuple = f(value2);
                result.push(fst2(tuple));
                var maybe2 = snd2(tuple);
                if (isNothing2(maybe2)) return result;
                value2 = fromJust7(maybe2);
              }
            };
          };
        };
      };
    };
  };

  // output/Data.Unfoldable1/index.js
  var fromJust2 = /* @__PURE__ */ fromJust();
  var unfoldable1Array = {
    unfoldr1: /* @__PURE__ */ unfoldr1ArrayImpl(isNothing)(fromJust2)(fst)(snd)
  };

  // output/Data.Unfoldable/index.js
  var fromJust3 = /* @__PURE__ */ fromJust();
  var unfoldr = function(dict) {
    return dict.unfoldr;
  };
  var unfoldableArray = {
    unfoldr: /* @__PURE__ */ unfoldrArrayImpl(isNothing)(fromJust3)(fst)(snd),
    Unfoldable10: function() {
      return unfoldable1Array;
    }
  };

  // output/Data.Array/index.js
  var unsafeIndex = function() {
    return runFn2(unsafeIndexImpl);
  };
  var unsafeIndex1 = /* @__PURE__ */ unsafeIndex();
  var toUnfoldable = function(dictUnfoldable) {
    var unfoldr2 = unfoldr(dictUnfoldable);
    return function(xs) {
      var len = length2(xs);
      var f = function(i) {
        if (i < len) {
          return new Just(new Tuple(unsafeIndex1(xs)(i), i + 1 | 0));
        }
        ;
        if (otherwise) {
          return Nothing.value;
        }
        ;
        throw new Error("Failed pattern match at Data.Array (line 163, column 3 - line 165, column 26): " + [i.constructor.name]);
      };
      return unfoldr2(f)(0);
    };
  };
  var singleton3 = function(a) {
    return [a];
  };
  var fromFoldable = function(dictFoldable) {
    return runFn2(fromFoldableImpl)(foldr(dictFoldable));
  };
  var concatMap = /* @__PURE__ */ flip(/* @__PURE__ */ bind(bindArray));

  // output/Data.String.CodePoints/foreign.js
  var hasArrayFrom = typeof Array.from === "function";
  var hasStringIterator = typeof Symbol !== "undefined" && Symbol != null && typeof Symbol.iterator !== "undefined" && typeof String.prototype[Symbol.iterator] === "function";
  var hasFromCodePoint = typeof String.prototype.fromCodePoint === "function";
  var hasCodePointAt = typeof String.prototype.codePointAt === "function";
  var _singleton = function(fallback) {
    return hasFromCodePoint ? String.fromCodePoint : fallback;
  };

  // output/Data.Enum/foreign.js
  function toCharCode(c) {
    return c.charCodeAt(0);
  }
  function fromCharCode(c) {
    return String.fromCharCode(c);
  }

  // output/Data.Enum/index.js
  var bottom1 = /* @__PURE__ */ bottom(boundedChar);
  var top1 = /* @__PURE__ */ top(boundedChar);
  var toEnum = function(dict) {
    return dict.toEnum;
  };
  var fromEnum = function(dict) {
    return dict.fromEnum;
  };
  var toEnumWithDefaults = function(dictBoundedEnum) {
    var toEnum12 = toEnum(dictBoundedEnum);
    var fromEnum12 = fromEnum(dictBoundedEnum);
    var bottom2 = bottom(dictBoundedEnum.Bounded0());
    return function(low) {
      return function(high) {
        return function(x) {
          var v = toEnum12(x);
          if (v instanceof Just) {
            return v.value0;
          }
          ;
          if (v instanceof Nothing) {
            var $140 = x < fromEnum12(bottom2);
            if ($140) {
              return low;
            }
            ;
            return high;
          }
          ;
          throw new Error("Failed pattern match at Data.Enum (line 158, column 33 - line 160, column 62): " + [v.constructor.name]);
        };
      };
    };
  };
  var defaultSucc = function(toEnum$prime) {
    return function(fromEnum$prime) {
      return function(a) {
        return toEnum$prime(fromEnum$prime(a) + 1 | 0);
      };
    };
  };
  var defaultPred = function(toEnum$prime) {
    return function(fromEnum$prime) {
      return function(a) {
        return toEnum$prime(fromEnum$prime(a) - 1 | 0);
      };
    };
  };
  var charToEnum = function(v) {
    if (v >= toCharCode(bottom1) && v <= toCharCode(top1)) {
      return new Just(fromCharCode(v));
    }
    ;
    return Nothing.value;
  };
  var enumChar = {
    succ: /* @__PURE__ */ defaultSucc(charToEnum)(toCharCode),
    pred: /* @__PURE__ */ defaultPred(charToEnum)(toCharCode),
    Ord0: function() {
      return ordChar;
    }
  };
  var boundedEnumChar = /* @__PURE__ */ function() {
    return {
      cardinality: toCharCode(top1) - toCharCode(bottom1) | 0,
      toEnum: charToEnum,
      fromEnum: toCharCode,
      Bounded0: function() {
        return boundedChar;
      },
      Enum1: function() {
        return enumChar;
      }
    };
  }();

  // output/Data.Int/foreign.js
  var toNumber = function(n) {
    return n;
  };
  var fromStringAsImpl = function(just) {
    return function(nothing) {
      return function(radix) {
        var digits;
        if (radix < 11) {
          digits = "[0-" + (radix - 1).toString() + "]";
        } else if (radix === 11) {
          digits = "[0-9a]";
        } else {
          digits = "[0-9a-" + String.fromCharCode(86 + radix) + "]";
        }
        var pattern = new RegExp("^[\\+\\-]?" + digits + "+$", "i");
        return function(s) {
          if (pattern.test(s)) {
            var i = parseInt(s, radix);
            return (i | 0) === i ? just(i) : nothing;
          } else {
            return nothing;
          }
        };
      };
    };
  };

  // output/Data.Number/foreign.js
  var isFiniteImpl = isFinite;
  function fromStringImpl(str, isFinite2, just, nothing) {
    var num = parseFloat(str);
    if (isFinite2(num)) {
      return just(num);
    } else {
      return nothing;
    }
  }
  var floor = Math.floor;

  // output/Data.Number/index.js
  var fromString = function(str) {
    return fromStringImpl(str, isFiniteImpl, Just.create, Nothing.value);
  };

  // output/Data.Int/index.js
  var fromStringAs = /* @__PURE__ */ function() {
    return fromStringAsImpl(Just.create)(Nothing.value);
  }();
  var fromString2 = /* @__PURE__ */ fromStringAs(10);

  // output/Data.String.CodePoints/index.js
  var fromEnum2 = /* @__PURE__ */ fromEnum(boundedEnumChar);
  var div2 = /* @__PURE__ */ div(euclideanRingInt);
  var mod2 = /* @__PURE__ */ mod(euclideanRingInt);
  var unsurrogate = function(lead) {
    return function(trail) {
      return (((lead - 55296 | 0) * 1024 | 0) + (trail - 56320 | 0) | 0) + 65536 | 0;
    };
  };
  var isTrail = function(cu) {
    return 56320 <= cu && cu <= 57343;
  };
  var isLead = function(cu) {
    return 55296 <= cu && cu <= 56319;
  };
  var uncons = function(s) {
    var v = length(s);
    if (v === 0) {
      return Nothing.value;
    }
    ;
    if (v === 1) {
      return new Just({
        head: fromEnum2(charAt(0)(s)),
        tail: ""
      });
    }
    ;
    var cu1 = fromEnum2(charAt(1)(s));
    var cu0 = fromEnum2(charAt(0)(s));
    var $43 = isLead(cu0) && isTrail(cu1);
    if ($43) {
      return new Just({
        head: unsurrogate(cu0)(cu1),
        tail: drop(2)(s)
      });
    }
    ;
    return new Just({
      head: cu0,
      tail: drop(1)(s)
    });
  };
  var fromCharCode2 = /* @__PURE__ */ function() {
    var $75 = toEnumWithDefaults(boundedEnumChar)(bottom(boundedChar))(top(boundedChar));
    return function($76) {
      return singleton($75($76));
    };
  }();
  var singletonFallback = function(v) {
    if (v <= 65535) {
      return fromCharCode2(v);
    }
    ;
    var lead = div2(v - 65536 | 0)(1024) + 55296 | 0;
    var trail = mod2(v - 65536 | 0)(1024) + 56320 | 0;
    return fromCharCode2(lead) + fromCharCode2(trail);
  };
  var singleton4 = /* @__PURE__ */ _singleton(singletonFallback);

  // output/Foreign.Object/foreign.js
  function runST(f) {
    return f();
  }
  function toArrayWithKey(f) {
    return function(m) {
      var r = [];
      for (var k in m) {
        if (hasOwnProperty.call(m, k)) {
          r.push(f(k)(m[k]));
        }
      }
      return r;
    };
  }
  var keys = Object.keys || toArrayWithKey(function(k) {
    return function() {
      return k;
    };
  });

  // output/Foreign.Object.ST/foreign.js
  var newImpl = function() {
    return {};
  };
  function poke2(k) {
    return function(v) {
      return function(m) {
        return function() {
          m[k] = v;
          return m;
        };
      };
    };
  }

  // output/Foreign.Object/index.js
  var $$void3 = /* @__PURE__ */ $$void(functorST);
  var toUnfoldable2 = function(dictUnfoldable) {
    var $89 = toUnfoldable(dictUnfoldable);
    var $90 = toArrayWithKey(Tuple.create);
    return function($91) {
      return $89($90($91));
    };
  };
  var fromHomogeneous = function() {
    return unsafeCoerce2;
  };
  var fromFoldable2 = function(dictFoldable) {
    var fromFoldable1 = fromFoldable(dictFoldable);
    return function(l) {
      return runST(function __do() {
        var s = newImpl();
        foreach(fromFoldable1(l))(function(v) {
          return $$void3(poke2(v.value0)(v.value1)(s));
        })();
        return s;
      });
    };
  };

  // output/Flame.Html.Attribute.Internal/index.js
  var fromHomogeneous2 = /* @__PURE__ */ fromHomogeneous();
  var crashWith3 = /* @__PURE__ */ crashWith();
  var show2 = /* @__PURE__ */ show(showString);
  var fromJust4 = /* @__PURE__ */ fromJust();
  var toUnfoldable3 = /* @__PURE__ */ toUnfoldable2(unfoldableArray);
  var fromFoldable3 = /* @__PURE__ */ fromFoldable2(foldableArray);
  var map3 = /* @__PURE__ */ map(functorArray);
  var value = /* @__PURE__ */ createProperty("value");
  var type$prime = /* @__PURE__ */ createProperty("type");
  var toStyleList = function(dict) {
    return dict.toStyleList;
  };
  var style = function(dictToStyleList) {
    var toStyleList1 = toStyleList(dictToStyleList);
    return function(record) {
      return createStyle(toStyleList1(record));
    };
  };
  var src = /* @__PURE__ */ createProperty("src");
  var replacer = function($89) {
    return $$const(function(v) {
      return "-" + v;
    }(toLower($89)));
  };
  var regex2 = /* @__PURE__ */ function() {
    var v = regex("[A-Z]")(global);
    if (v instanceof Right) {
      return v.value0;
    }
    ;
    if (v instanceof Left) {
      return crashWith3(show2(v.value0));
    }
    ;
    throw new Error("Failed pattern match at Flame.Html.Attribute.Internal (line 94, column 26 - line 96, column 43): " + [v.constructor.name]);
  }();
  var id = /* @__PURE__ */ createProperty("id");
  var $$for = /* @__PURE__ */ createAttribute("for");
  var caseify = function(name$prime) {
    if (name$prime === toUpper(name$prime)) {
      return toLower(name$prime);
    }
    ;
    if (otherwise) {
      var v = fromJust4(uncons(name$prime));
      var hyphenated = replace$prime(regex2)(replacer)(v.tail);
      return toLower(singleton4(v.head)) + hyphenated;
    }
    ;
    throw new Error("Failed pattern match at Flame.Html.Attribute.Internal (line 84, column 1 - line 84, column 26): " + [name$prime.constructor.name]);
  };
  var toStyleListRecord = function() {
    return {
      toStyleList: function() {
        var toArray3 = function($136) {
          return toUnfoldable3(fromHomogeneous2($136));
        };
        var go = function(v) {
          return new Tuple(caseify(v.value0), v.value1);
        };
        var $137 = map3(go);
        return function($138) {
          return fromFoldable3($137(toArray3($138)));
        };
      }()
    };
  };
  var booleanToFalsyString = function(v) {
    if (v) {
      return "true";
    }
    ;
    if (!v) {
      return "";
    }
    ;
    throw new Error("Failed pattern match at Flame.Html.Attribute.Internal (line 67, column 7 - line 69, column 23): " + [v.constructor.name]);
  };
  var disabled = /* @__PURE__ */ function() {
    var $147 = createProperty("disabled");
    return function($148) {
      return $147(booleanToFalsyString($148));
    };
  }();

  // output/Flame.Html.Element/foreign.js
  var textNode = 1;
  var elementNode = 2;
  var svgNode = 3;
  var styleData2 = 1;
  var classData = 2;
  var propertyData2 = 3;
  var attributeData2 = 4;
  var keyData = 7;
  function createElementNode(tag) {
    return function(nodeData) {
      return function(potentialChildren) {
        let children = potentialChildren, text2 = void 0;
        if (potentialChildren.length === 1 && potentialChildren[0].nodeType == textNode) {
          children = void 0;
          text2 = potentialChildren[0].text;
        }
        return {
          nodeType: elementNode,
          node: void 0,
          tag,
          nodeData: fromNodeData(nodeData),
          children,
          text: text2
        };
      };
    };
  }
  function createDatalessElementNode(tag) {
    return function(potentialChildren) {
      let children = potentialChildren, text2 = void 0;
      if (potentialChildren.length === 1 && potentialChildren[0].nodeType == textNode) {
        children = void 0;
        text2 = potentialChildren[0].text;
      }
      return {
        nodeType: elementNode,
        node: void 0,
        tag,
        nodeData: {},
        children,
        text: text2
      };
    };
  }
  function createSingleElementNode(tag) {
    return function(nodeData) {
      return {
        nodeType: elementNode,
        node: void 0,
        tag,
        nodeData: fromNodeData(nodeData)
      };
    };
  }
  function createEmptyElement(tag) {
    return {
      nodeType: tag.trim().toLowerCase() === "svg" ? svgNode : elementNode,
      node: void 0,
      tag,
      nodeData: {}
    };
  }
  function text(value2) {
    return {
      nodeType: textNode,
      node: void 0,
      text: value2
    };
  }
  function fromNodeData(allData) {
    let nodeData = {};
    if (allData !== void 0)
      for (let data of allData) {
        let dataOne = data[1];
        switch (data[0]) {
          case styleData2:
            if (nodeData.styles === void 0)
              nodeData.styles = {};
            for (let key in dataOne)
              nodeData.styles[key] = dataOne[key];
            break;
          case classData:
            if (nodeData.classes === void 0)
              nodeData.classes = [];
            nodeData.classes = nodeData.classes.concat(dataOne);
            break;
          case propertyData2:
            if (nodeData.properties === void 0)
              nodeData.properties = {};
            nodeData.properties[dataOne] = data[2];
            break;
          case attributeData2:
            if (nodeData.attributes === void 0)
              nodeData.attributes = {};
            nodeData.attributes[dataOne] = data[2];
            break;
          case keyData:
            nodeData.key = dataOne;
            break;
          default:
            if (nodeData.events === void 0)
              nodeData.events = {};
            if (nodeData.events[dataOne] === void 0)
              nodeData.events[dataOne] = [];
            nodeData.events[dataOne].push(data[2]);
        }
      }
    return nodeData;
  }

  // output/Flame.Html.Element/index.js
  var toNodeStringHtml = {
    toNode: function($777) {
      return singleton3(text($777));
    }
  };
  var toNodeNodeDataNodeData = {
    toNode: singleton3
  };
  var toNodeHtmlHtml = {
    toNode: singleton3
  };
  var toNode = function(dict) {
    return dict.toNode;
  };
  var toNodeArray = function(dictToNode) {
    return {
      toNode: concatMap(toNode(dictToNode))
    };
  };
  var createElement_ = function(tag) {
    return function(dictToNode) {
      var toNode1 = toNode(dictToNode);
      return function(children) {
        return createDatalessElementNode(tag)(toNode1(children));
      };
    };
  };
  var div_ = function(dictToNode) {
    return createElement_("div")(dictToNode);
  };
  var label_ = function(dictToNode) {
    return createElement_("label")(dictToNode);
  };
  var table_ = function(dictToNode) {
    return createElement_("table")(dictToNode);
  };
  var td_ = function(dictToNode) {
    return createElement_("td")(dictToNode);
  };
  var tr_ = function(dictToNode) {
    return createElement_("tr")(dictToNode);
  };
  var createElement$prime = function(tag) {
    return function(dictToNode) {
      var toNode1 = toNode(dictToNode);
      return function(nodeData) {
        return createSingleElementNode(tag)(toNode1(nodeData));
      };
    };
  };
  var img = function(dictToNode) {
    return createElement$prime("img")(dictToNode);
  };
  var input = function(dictToNode) {
    return createElement$prime("input")(dictToNode);
  };
  var createElement = function(tag) {
    return function(dictToNode) {
      var toNode1 = toNode(dictToNode);
      return function(dictToNode1) {
        var toNode2 = toNode(dictToNode1);
        return function(nodeData) {
          return function(children) {
            return createElementNode(tag)(toNode1(nodeData))(toNode2(children));
          };
        };
      };
    };
  };
  var label = function(dictToNode) {
    return function(dictToNode1) {
      return createElement("label")(dictToNode)(dictToNode1);
    };
  };
  var br = /* @__PURE__ */ createEmptyElement("br");

  // output/Flame.Renderer.String/foreign.js
  var reUnescapedHtml = /[&<>"']/g;
  var reHasUnescapedHtml = RegExp(reUnescapedHtml.source);

  // output/Data.List.Types/index.js
  var Nil = /* @__PURE__ */ function() {
    function Nil2() {
    }
    ;
    Nil2.value = new Nil2();
    return Nil2;
  }();
  var Cons = /* @__PURE__ */ function() {
    function Cons2(value0, value1) {
      this.value0 = value0;
      this.value1 = value1;
    }
    ;
    Cons2.create = function(value0) {
      return function(value1) {
        return new Cons2(value0, value1);
      };
    };
    return Cons2;
  }();
  var listMap = function(f) {
    var chunkedRevMap = function($copy_v) {
      return function($copy_v1) {
        var $tco_var_v = $copy_v;
        var $tco_done = false;
        var $tco_result;
        function $tco_loop(v, v1) {
          if (v1 instanceof Cons && (v1.value1 instanceof Cons && v1.value1.value1 instanceof Cons)) {
            $tco_var_v = new Cons(v1, v);
            $copy_v1 = v1.value1.value1.value1;
            return;
          }
          ;
          var unrolledMap = function(v2) {
            if (v2 instanceof Cons && (v2.value1 instanceof Cons && v2.value1.value1 instanceof Nil)) {
              return new Cons(f(v2.value0), new Cons(f(v2.value1.value0), Nil.value));
            }
            ;
            if (v2 instanceof Cons && v2.value1 instanceof Nil) {
              return new Cons(f(v2.value0), Nil.value);
            }
            ;
            return Nil.value;
          };
          var reverseUnrolledMap = function($copy_v2) {
            return function($copy_v3) {
              var $tco_var_v2 = $copy_v2;
              var $tco_done1 = false;
              var $tco_result2;
              function $tco_loop2(v2, v3) {
                if (v2 instanceof Cons && (v2.value0 instanceof Cons && (v2.value0.value1 instanceof Cons && v2.value0.value1.value1 instanceof Cons))) {
                  $tco_var_v2 = v2.value1;
                  $copy_v3 = new Cons(f(v2.value0.value0), new Cons(f(v2.value0.value1.value0), new Cons(f(v2.value0.value1.value1.value0), v3)));
                  return;
                }
                ;
                $tco_done1 = true;
                return v3;
              }
              ;
              while (!$tco_done1) {
                $tco_result2 = $tco_loop2($tco_var_v2, $copy_v3);
              }
              ;
              return $tco_result2;
            };
          };
          $tco_done = true;
          return reverseUnrolledMap(v)(unrolledMap(v1));
        }
        ;
        while (!$tco_done) {
          $tco_result = $tco_loop($tco_var_v, $copy_v1);
        }
        ;
        return $tco_result;
      };
    };
    return chunkedRevMap(Nil.value);
  };
  var functorList = {
    map: listMap
  };
  var foldableList = {
    foldr: function(f) {
      return function(b) {
        var rev = function() {
          var go = function($copy_v) {
            return function($copy_v1) {
              var $tco_var_v = $copy_v;
              var $tco_done = false;
              var $tco_result;
              function $tco_loop(v, v1) {
                if (v1 instanceof Nil) {
                  $tco_done = true;
                  return v;
                }
                ;
                if (v1 instanceof Cons) {
                  $tco_var_v = new Cons(v1.value0, v);
                  $copy_v1 = v1.value1;
                  return;
                }
                ;
                throw new Error("Failed pattern match at Data.List.Types (line 107, column 7 - line 107, column 23): " + [v.constructor.name, v1.constructor.name]);
              }
              ;
              while (!$tco_done) {
                $tco_result = $tco_loop($tco_var_v, $copy_v1);
              }
              ;
              return $tco_result;
            };
          };
          return go(Nil.value);
        }();
        var $284 = foldl(foldableList)(flip(f))(b);
        return function($285) {
          return $284(rev($285));
        };
      };
    },
    foldl: function(f) {
      var go = function($copy_b) {
        return function($copy_v) {
          var $tco_var_b = $copy_b;
          var $tco_done1 = false;
          var $tco_result;
          function $tco_loop(b, v) {
            if (v instanceof Nil) {
              $tco_done1 = true;
              return b;
            }
            ;
            if (v instanceof Cons) {
              $tco_var_b = f(b)(v.value0);
              $copy_v = v.value1;
              return;
            }
            ;
            throw new Error("Failed pattern match at Data.List.Types (line 111, column 12 - line 113, column 30): " + [v.constructor.name]);
          }
          ;
          while (!$tco_done1) {
            $tco_result = $tco_loop($tco_var_b, $copy_v);
          }
          ;
          return $tco_result;
        };
      };
      return go;
    },
    foldMap: function(dictMonoid) {
      var append2 = append(dictMonoid.Semigroup0());
      var mempty2 = mempty(dictMonoid);
      return function(f) {
        return foldl(foldableList)(function(acc) {
          var $286 = append2(acc);
          return function($287) {
            return $286(f($287));
          };
        })(mempty2);
      };
    }
  };

  // output/Data.List/index.js
  var map4 = /* @__PURE__ */ map(functorMaybe);
  var uncons3 = function(v) {
    if (v instanceof Nil) {
      return Nothing.value;
    }
    ;
    if (v instanceof Cons) {
      return new Just({
        head: v.value0,
        tail: v.value1
      });
    }
    ;
    throw new Error("Failed pattern match at Data.List (line 259, column 1 - line 259, column 66): " + [v.constructor.name]);
  };
  var toUnfoldable4 = function(dictUnfoldable) {
    return unfoldr(dictUnfoldable)(function(xs) {
      return map4(function(rec) {
        return new Tuple(rec.head, rec.tail);
      })(uncons3(xs));
    });
  };
  var reverse2 = /* @__PURE__ */ function() {
    var go = function($copy_v) {
      return function($copy_v1) {
        var $tco_var_v = $copy_v;
        var $tco_done = false;
        var $tco_result;
        function $tco_loop(v, v1) {
          if (v1 instanceof Nil) {
            $tco_done = true;
            return v;
          }
          ;
          if (v1 instanceof Cons) {
            $tco_var_v = new Cons(v1.value0, v);
            $copy_v1 = v1.value1;
            return;
          }
          ;
          throw new Error("Failed pattern match at Data.List (line 368, column 3 - line 368, column 19): " + [v.constructor.name, v1.constructor.name]);
        }
        ;
        while (!$tco_done) {
          $tco_result = $tco_loop($tco_var_v, $copy_v1);
        }
        ;
        return $tco_result;
      };
    };
    return go(Nil.value);
  }();
  var filter2 = function(p) {
    var go = function($copy_v) {
      return function($copy_v1) {
        var $tco_var_v = $copy_v;
        var $tco_done = false;
        var $tco_result;
        function $tco_loop(v, v1) {
          if (v1 instanceof Nil) {
            $tco_done = true;
            return reverse2(v);
          }
          ;
          if (v1 instanceof Cons) {
            if (p(v1.value0)) {
              $tco_var_v = new Cons(v1.value0, v);
              $copy_v1 = v1.value1;
              return;
            }
            ;
            if (otherwise) {
              $tco_var_v = v;
              $copy_v1 = v1.value1;
              return;
            }
            ;
          }
          ;
          throw new Error("Failed pattern match at Data.List (line 390, column 3 - line 390, column 27): " + [v.constructor.name, v1.constructor.name]);
        }
        ;
        while (!$tco_done) {
          $tco_result = $tco_loop($tco_var_v, $copy_v1);
        }
        ;
        return $tco_result;
      };
    };
    return go(Nil.value);
  };

  // output/Flame.Internal.Equality/foreign.js
  function compareReference(a) {
    return function(b) {
      return a === b;
    };
  }

  // output/Flame.Internal.Equality/index.js
  var modelHasChanged = function(old) {
    return function($$new2) {
      return !compareReference(old)($$new2);
    };
  };

  // output/Flame.Renderer.Internal.Dom/foreign.js
  var namespace = "http://www.w3.org/2000/svg";
  var eventPrefix = "__flame_";
  var eventPostfix = "updater";
  var textNode2 = 1;
  var elementNode2 = 2;
  var svgNode2 = 3;
  var fragmentNode = 4;
  var lazyNode = 5;
  var managedNode = 6;
  var nonBubblingEvents = ["focus", "blur", "scroll", "load", "unload"];
  function start_(eventWrapper, root, updater, html) {
    return new F(eventWrapper, root, updater, html, false);
  }
  function startFrom_(eventWrapper, root, updater, html) {
    return new F(eventWrapper, root, updater, html, true);
  }
  function resume_(f, html) {
    f.resume(html);
  }
  function F(eventWrapper, root, updater, html, isDry) {
    this.eventWrapper = eventWrapper;
    this.applicationEvents = /* @__PURE__ */ new Map();
    this.root = root;
    this.updater = updater;
    this.cachedHtml = html.node === void 0 ? html : shallowCopy(html);
    if (isDry)
      this.hydrate(this.root, this.cachedHtml);
    else
      this.createAllNodes(this.root, this.cachedHtml);
  }
  F.prototype.hydrate = function(parent, html, referenceNode) {
    switch (html.nodeType) {
      case lazyNode:
        html.node = parent;
        html.rendered = html.render(html.arg);
        html.render = void 0;
        this.hydrate(parent, html.rendered);
        break;
      case textNode2:
        html.node = parent;
        break;
      case managedNode:
        this.createAllNodes(parent, html, referenceNode);
        break;
      default:
        if (html.nodeType === fragmentNode)
          html.node = document.createDocumentFragment();
        else {
          html.node = parent;
          if (html.nodeData.events !== void 0)
            this.createAllEvents(parent, html);
        }
        let htmlChildrenLength;
        if (html.text === void 0 && html.children !== void 0 && (htmlChildrenLength = html.children.length) > 0) {
          let childNodes = parent.childNodes;
          for (let i = 0, cni = 0; i < htmlChildrenLength; ++i, ++cni) {
            let c = html.children[i] = html.children[i].node === void 0 ? html.children[i] : shallowCopy(html.children[i]);
            if (childNodes[cni] === void 0)
              this.createAllNodes(parent, c);
            else {
              if (c.nodeType === fragmentNode) {
                let fragmentChildrenLength = c.children.length;
                c.node = document.createDocumentFragment();
                for (let j = 0; j < fragmentChildrenLength; ++j) {
                  let cf = c.children[j] = c.children[j].node === void 0 ? c.children[j] : shallowCopy(c.children[j]);
                  this.hydrate(childNodes[cni++], cf);
                }
                cni--;
              } else if (c.nodeType === managedNode)
                this.hydrate(parent, c, childNodes[cni]);
              else
                this.hydrate(childNodes[cni], c);
            }
          }
        }
    }
  };
  function shallowCopy(origin) {
    switch (origin.nodeType) {
      case textNode2:
        return {
          nodeType: textNode2,
          node: void 0,
          text: origin.text
        };
      case fragmentNode:
        return {
          nodeType: fragmentNode,
          node: void 0,
          children: origin.children
        };
      case lazyNode:
        return {
          nodeType: lazyNode,
          node: void 0,
          nodeData: origin.nodeData,
          render: origin.render,
          arg: origin.arg,
          rendered: void 0,
          messageMapper: origin.messageMapper
        };
      case managedNode:
        return {
          nodeType: managedNode,
          node: void 0,
          nodeData: origin.nodeData,
          createNode: origin.createNode,
          updateNode: origin.updateNode,
          arg: origin.arg,
          messageMapper: origin.messageMapper
        };
      default:
        return {
          nodeType: origin.nodeType,
          node: void 0,
          tag: origin.tag,
          nodeData: origin.nodeData,
          children: origin.children,
          text: origin.text,
          messageMapper: origin.messageMapper
        };
    }
  }
  F.prototype.createAllNodes = function(parent, html, referenceNode) {
    let node = this.createNode(html);
    if (html.text !== void 0)
      node.textContent = html.text;
    else {
      if (html.children !== void 0)
        this.createChildrenNodes(node, html.children);
      else if (html.rendered !== void 0) {
        if (html.messageMapper !== void 0)
          lazyMessageMap(html.messageMapper, html.rendered);
        if (html.rendered.text !== void 0) {
          node.textContent = html.rendered.text;
        } else if (html.rendered.children !== void 0)
          this.createChildrenNodes(node, html.rendered.children);
      }
    }
    parent.insertBefore(node, referenceNode);
  };
  F.prototype.checkCreateAllNodes = function(parent, html, referenceNode) {
    if (html.node !== void 0)
      html = shallowCopy(html);
    this.createAllNodes(parent, html, referenceNode);
    return html;
  };
  F.prototype.createChildrenNodes = function(parent, children) {
    let childrenLength = children.length;
    for (let i = 0; i < childrenLength; ++i) {
      let html = children[i] = children[i].node === void 0 ? children[i] : shallowCopy(children[i]);
      this.checkCreateAllNodes(parent, html, null);
    }
  };
  F.prototype.createNode = function(html) {
    switch (html.nodeType) {
      case lazyNode:
        html.rendered = html.render(html.arg);
        html.render = void 0;
        return html.node = this.createNode(html.rendered);
      case textNode2:
        return html.node = document.createTextNode(html.text);
      case elementNode2:
        return html.node = this.createElement(html);
      case svgNode2:
        return html.node = this.createSvg(html);
      case fragmentNode:
        return html.node = document.createDocumentFragment();
      case managedNode:
        return html.node = this.createManagedNode(html);
    }
  };
  F.prototype.createElement = function(html) {
    let element = document.createElement(html.tag);
    this.createNodeData(element, html, false);
    return element;
  };
  F.prototype.createSvg = function(html) {
    let svg = document.createElementNS(namespace, html.tag);
    this.createNodeData(svg, html, true);
    return svg;
  };
  F.prototype.createManagedNode = function(html) {
    let node = html.createNode(html.arg)();
    html.createNode = void 0;
    this.createNodeData(node, html, node instanceof SVGElement || node.nodeName.toLowerCase() === "svg");
    return node;
  };
  F.prototype.createNodeData = function(node, html, isSvg) {
    if (html.nodeData.styles !== void 0)
      createStyles(node, html.nodeData.styles);
    if (html.nodeData.classes !== void 0 && html.nodeData.classes.length > 0)
      createClasses(node, html.nodeData.classes, isSvg);
    if (html.nodeData.attributes !== void 0)
      createAttributes(node, html.nodeData.attributes);
    if (html.nodeData.properties !== void 0)
      for (let key in html.nodeData.properties)
        node[key] = html.nodeData.properties[key];
    if (html.nodeData.events !== void 0)
      this.createAllEvents(node, html);
  };
  function createStyles(node, styles2) {
    for (let key in styles2)
      node.style.setProperty(key, styles2[key]);
  }
  function createClasses(node, classes, isSvg) {
    let joined = classes.join(" ");
    if (isSvg)
      node.setAttribute("class", joined);
    else
      node.className = joined;
  }
  function createAttributes(node, attributes) {
    for (let key in attributes)
      node.setAttribute(key, attributes[key]);
  }
  F.prototype.createAllEvents = function(node, html) {
    for (let key in html.nodeData.events)
      this.createEvent(node, key, html);
  };
  F.prototype.createEvent = function(node, name2, html) {
    let handlers = html.nodeData.events[name2], eventKey = eventPrefix + name2;
    if (nonBubblingEvents.includes(name2)) {
      let runNonBubblingEvent = this.runNonBubblingEvent(handlers, html.messageMapper);
      node[eventKey] = runNonBubblingEvent;
      node.addEventListener(name2, runNonBubblingEvent, false);
    } else {
      node[eventKey] = handlers;
      if (html.messageMapper !== void 0)
        node[eventKey + eventPostfix] = html.messageMapper;
      let synthetic = this.applicationEvents.get(name2);
      if (synthetic === void 0) {
        let runEvent = this.runEvent.bind(this);
        this.root.addEventListener(name2, runEvent, false);
        this.applicationEvents.set(name2, {
          count: 1,
          handler: runEvent
        });
      } else
        synthetic.count++;
    }
  };
  F.prototype.runNonBubblingEvent = function(handlers, messageMapper2) {
    return function(event) {
      this.runHandlers(handlers, messageMapper2, event);
    }.bind(this);
  };
  F.prototype.runEvent = function(event) {
    let node = event.target, eventKey = eventPrefix + event.type;
    while (node !== this.root) {
      let handlers = node[eventKey];
      if (handlers !== void 0) {
        this.runHandlers(handlers, node[eventKey + eventPostfix], event);
        return;
      }
      node = node.parentNode;
    }
  };
  F.prototype.runHandlers = function(handlers, messageMapper2, event) {
    let handlersLength = handlers.length;
    for (let i = 0; i < handlersLength; ++i) {
      let h = handlers[i], maybeMessage = typeof h === "function" ? h(event)() : this.eventWrapper(h);
      this.updater(messageMapper2 === void 0 ? maybeMessage : messageMapper2(maybeMessage))();
    }
    event.stopPropagation();
  };
  F.prototype.resume = function(updatedHtml) {
    this.cachedHtml = this.updateAllNodes(this.root, this.cachedHtml, updatedHtml);
  };
  F.prototype.updateAllNodes = function(parent, currentHtml2, updatedHtml) {
    if (updatedHtml.node !== void 0)
      updatedHtml = shallowCopy(updatedHtml);
    if (currentHtml2.tag !== updatedHtml.tag || currentHtml2.nodeType !== updatedHtml.nodeType) {
      if (currentHtml2.nodeType === fragmentNode) {
        this.createAllNodes(parent, updatedHtml, firstFragmentChildNode(currentHtml2.children));
        removeFragmentChildren(parent, currentHtml2.children);
      } else {
        this.createAllNodes(parent, updatedHtml, currentHtml2.node);
        parent.removeChild(currentHtml2.node);
      }
    } else {
      updatedHtml.node = currentHtml2.node;
      switch (updatedHtml.nodeType) {
        case lazyNode:
          if (updatedHtml.arg !== currentHtml2.arg) {
            updatedHtml.rendered = updatedHtml.render(updatedHtml.arg);
            if (updatedHtml.messageMapper !== void 0)
              lazyMessageMap(updatedHtml.messageMapper, updatedHtml.rendered);
            this.updateAllNodes(parent, currentHtml2.rendered, updatedHtml.rendered);
          } else
            updatedHtml.rendered = currentHtml2.rendered;
          updatedHtml.render = void 0;
          break;
        case managedNode:
          let node = updatedHtml.updateNode(currentHtml2.node)(currentHtml2.arg)(updatedHtml.arg)(), isSvg = node instanceof SVGElement || node.nodeName.toLowerCase() === "svg";
          if (node !== currentHtml2.node || node.nodeType !== currentHtml2.node.nodeType || node.nodeName !== currentHtml2.node.nodeName) {
            this.createNodeData(node, updatedHtml, isSvg);
            parent.insertBefore(node, currentHtml2.node);
            parent.removeChild(currentHtml2.node);
          } else
            this.updateNodeData(node, currentHtml2.nodeData, updatedHtml, isSvg);
          updatedHtml.node = node;
          break;
        case textNode2:
          if (updatedHtml.text !== currentHtml2.text)
            updatedHtml.node.textContent = updatedHtml.text;
          break;
        case fragmentNode:
          this.updateChildrenNodes(parent, currentHtml2, updatedHtml);
          break;
        default:
          this.updateNodeData(currentHtml2.node, currentHtml2.nodeData, updatedHtml, updatedHtml.nodeType == svgNode2);
          if ((updatedHtml.text !== void 0 || updatedHtml.children === void 0 && currentHtml2.text != void 0) && !hasInnerHtml(updatedHtml.nodeData) && updatedHtml.text != currentHtml2.node.textContent)
            currentHtml2.node.textContent = updatedHtml.text;
          else
            this.updateChildrenNodes(currentHtml2.node, currentHtml2, updatedHtml);
      }
    }
    return updatedHtml;
  };
  function firstFragmentChildNode(children) {
    let childrenLength = children.length;
    for (let i = 0; i < childrenLength; ++i) {
      if (children[i].nodeType === fragmentNode)
        return firstFragmentChildNode(children[i].children);
      return children[i].node;
    }
    return void 0;
  }
  function removeFragmentChildren(parent, children) {
    let childrenLength = children.length;
    for (let i = 0; i < childrenLength; ++i)
      if (children[i].nodeType === fragmentNode)
        removeFragmentChildren(children[i].children);
      else
        parent.removeChild(children[i].node);
  }
  function clearNode(node) {
    node.textContent = "";
  }
  F.prototype.updateChildrenNodes = function(parent, currentHtml2, updatedHtml) {
    let currentChildren = currentHtml2.children, updatedChildren = updatedHtml.children;
    if (currentChildren === void 0 || currentChildren.length === 0) {
      let updatedChildrenLength;
      if (updatedChildren !== void 0 && (updatedChildrenLength = updatedChildren.length) > 0) {
        if (currentHtml2.text !== void 0 || hasInnerHtml(currentHtml2.nodeData))
          clearNode(parent);
        for (let i = 0; i < updatedChildrenLength; ++i)
          updatedChildren[i] = this.checkCreateAllNodes(parent, updatedChildren[i]);
      }
    } else if (updatedChildren === void 0 || updatedChildren.length === 0) {
      if (currentChildren !== void 0 && (currentChildren.length > 0 || currentHtml2.text !== void 0) && !hasInnerHtml(updatedHtml.nodeData))
        clearNode(parent);
    } else if (currentChildren[0].nodeData !== void 0 && currentChildren[0].nodeData.key !== void 0 && updatedChildren[0].nodeData !== void 0 && updatedChildren[0].nodeData.key !== void 0)
      this.updateKeyedChildrenNodes(parent, currentChildren, updatedChildren);
    else
      this.updateNonKeyedChildrenNodes(parent, currentChildren, updatedChildren);
  };
  function hasInnerHtml(parentNodeData) {
    return parentNodeData !== void 0 && parentNodeData.properties !== void 0 && parentNodeData.properties.innerHTML !== void 0;
  }
  F.prototype.updateKeyedChildrenNodes = function(parent, currentChildren, updatedChildren) {
    let currentStart = 0, updatedStart = 0, currentEnd = currentChildren.length - 1, updatedEnd = updatedChildren.length - 1;
    let afterNode, currentStartNode = currentChildren[currentStart].node, updatedStartNode = currentStartNode, currentEndNode = currentChildren[currentEnd].node;
    let loop = true;
    fixes: while (loop) {
      loop = false;
      let currentHtml2 = currentChildren[currentStart], updatedHtml = updatedChildren[updatedStart];
      while (currentHtml2.nodeData.key === updatedHtml.nodeData.key) {
        updatedHtml = this.updateAllNodes(parent, currentHtml2, updatedHtml);
        updatedStartNode = currentStartNode = currentHtml2.node.nextSibling;
        currentStart++;
        updatedStart++;
        if (currentEnd < currentStart || updatedEnd < updatedStart)
          break fixes;
        currentHtml2 = currentChildren[currentStart];
        updatedHtml = updatedChildren[updatedStart];
      }
      currentHtml2 = currentChildren[currentEnd];
      updatedHtml = updatedChildren[updatedEnd];
      while (currentHtml2.nodeData.key === updatedHtml.nodeData.key) {
        updatedHtml = this.updateAllNodes(parent, currentHtml2, updatedHtml);
        afterNode = currentEndNode;
        currentEndNode = currentEndNode.previousSibling;
        currentEnd--;
        updatedEnd--;
        if (currentEnd < currentStart || updatedEnd < updatedStart)
          break fixes;
        currentHtml2 = currentChildren[currentEnd];
        updatedHtml = updatedChildren[updatedEnd];
      }
      currentHtml2 = currentChildren[currentEnd];
      updatedHtml = updatedChildren[updatedStart];
      while (currentHtml2.nodeData.key === updatedHtml.nodeData.key) {
        loop = true;
        updatedHtml = this.updateAllNodes(parent, currentHtml2, updatedHtml);
        currentEndNode = currentHtml2.node.previousSibling;
        parent.insertBefore(currentHtml2.node, updatedStartNode);
        updatedStart++;
        currentEnd--;
        if (currentEnd < currentStart || updatedEnd < updatedStart)
          break fixes;
        currentHtml2 = currentChildren[currentEnd];
        updatedHtml = updatedChildren[updatedStart];
      }
      currentHtml2 = currentChildren[currentStart];
      updatedHtml = updatedChildren[updatedEnd];
      while (currentHtml2.nodeData.key === updatedHtml.nodeData.key) {
        loop = true;
        updatedHtml = this.updateAllNodes(parent, currentHtml2, updatedHtml);
        parent.insertBefore(currentHtml2.node, afterNode);
        afterNode = currentHtml2.node;
        currentStart++;
        updatedEnd--;
        if (currentEnd < currentStart || updatedEnd < updatedStart)
          break fixes;
        currentHtml2 = currentChildren[currentStart];
        updatedHtml = updatedChildren[updatedEnd];
      }
    }
    if (updatedEnd < updatedStart)
      while (currentStart <= currentEnd) {
        parent.removeChild(currentChildren[currentEnd].node);
        currentEnd--;
      }
    else if (currentEnd < currentStart)
      while (updatedStart <= updatedEnd) {
        updatedChildren[updatedStart] = this.checkCreateAllNodes(parent, updatedChildren[updatedStart], afterNode);
        updatedStart++;
      }
    else {
      let P = new Int32Array(updatedEnd + 1 - updatedStart);
      let I = /* @__PURE__ */ new Map();
      for (let i = updatedStart; i <= updatedEnd; i++) {
        P[i] = -1;
        I.set(updatedChildren[i].nodeData.key, i);
      }
      let reusingNodes = updatedStart + updatedChildren.length - 1 - updatedEnd, toRemove = [];
      for (let i = currentStart; i <= currentEnd; i++)
        if (I.has(currentChildren[i].nodeData.key)) {
          P[I.get(currentChildren[i].nodeData.key)] = i;
          reusingNodes++;
        } else
          toRemove.push(i);
      if (reusingNodes === 0) {
        parent.textContent = "";
        for (let i = updatedStart; i <= updatedEnd; i++)
          updatedChildren[i] = this.checkCreateAllNodes(parent, updatedChildren[i]);
      } else {
        let toRemoveLength = toRemove.length;
        for (let i = 0; i < toRemoveLength; i++)
          parent.removeChild(currentChildren[toRemove[i]].node);
        let longestSeq = longestSubsequence(P, updatedStart), seqIndex = longestSeq.length - 1;
        for (let i = updatedEnd; i >= updatedStart; i--) {
          if (longestSeq[seqIndex] === i) {
            currentHtml = currentChildren[P[longestSeq[seqIndex]]];
            updatedChildren[i] = this.updateAllNodes(parent, currentHtml, updatedChildren[i]);
            afterNode = currentHtml.node;
            seqIndex--;
          } else {
            if (P[i] === -1) {
              updatedChildren[i] = this.checkCreateAllNodes(parent, updatedChildren[i], afterNode);
              afterNode = updatedChildren[i].node;
            } else {
              currentHtml = currentChildren[P[i]];
              updatedChildren[i] = this.updateAllNodes(parent, currentHtml, updatedChildren[i]);
              parent.insertBefore(currentHtml.node, afterNode);
              afterNode = currentHtml.node;
            }
          }
        }
      }
    }
  };
  function longestSubsequence(ns, updatedStart) {
    let seq = [], is = [], l = -1, i, len, pre = new Int32Array(ns.length);
    for (i = updatedStart, len = ns.length; i < len; i++) {
      let n = ns[i];
      if (n < 0)
        continue;
      let j = findGreatestIndex(seq, n);
      if (j !== -1)
        pre[i] = is[j];
      if (j === l) {
        l++;
        seq[l] = n;
        is[l] = i;
      } else if (n < seq[j + 1]) {
        seq[j + 1] = n;
        is[j + 1] = i;
      }
    }
    for (i = is[l]; l >= 0; i = pre[i], l--)
      seq[l] = i;
    return seq;
  }
  function findGreatestIndex(seq, n) {
    let lo = -1, hi = seq.length;
    if (hi > 0 && seq[hi - 1] <= n)
      return hi - 1;
    while (hi - lo > 1) {
      let mid = Math.floor((lo + hi) / 2);
      if (seq[mid] > n)
        hi = mid;
      else
        lo = mid;
    }
    return lo;
  }
  F.prototype.updateNonKeyedChildrenNodes = function(parent, currentChildren, updatedChildren) {
    let currentChildrenLength = currentChildren.length, updatedChildrenLength = updatedChildren.length, commonLength = Math.min(currentChildrenLength, updatedChildrenLength);
    for (let i = 0; i < commonLength; ++i)
      updatedChildren[i] = this.updateAllNodes(parent, currentChildren[i], updatedChildren[i]);
    if (currentChildrenLength < updatedChildrenLength)
      for (let i = commonLength; i < updatedChildrenLength; ++i)
        updatedChildren[i] = this.checkCreateAllNodes(parent, updatedChildren[i]);
    else if (currentChildrenLength > updatedChildrenLength)
      for (let i = commonLength; i < currentChildrenLength; ++i)
        parent.removeChild(currentChildren[i].node);
  };
  F.prototype.updateNodeData = function(node, currentNodeData, updatedHtml, isSvg) {
    updateStyles(node, currentNodeData.styles, updatedHtml.nodeData.styles);
    updateAttributes(node, currentNodeData.attributes, updatedHtml.nodeData.attributes);
    updateClasses(node, currentNodeData.classes, updatedHtml.nodeData.classes, isSvg);
    updateProperties(node, currentNodeData.properties, updatedHtml.nodeData.properties);
    this.updateEvents(node, currentNodeData.events, updatedHtml);
  };
  function updateStyles(node, currentStyles, updatedStyles) {
    if (currentStyles === void 0) {
      if (updatedStyles !== void 0)
        createStyles(node, updatedStyles);
    } else if (updatedStyles === void 0) {
      if (currentStyles !== void 0)
        node.removeAttribute("style");
    } else {
      let matchCount = 0;
      for (let key in currentStyles) {
        let current = currentStyles[key], updated = updatedStyles[key], hasUpdated = updatedStyles[key] !== void 0;
        if (hasUpdated)
          matchCount++;
        if (current !== updated)
          if (hasUpdated)
            node.style.setProperty(key, updated);
          else
            node.style.removeProperty(key);
      }
      let newKeys = Object.keys(updatedStyles), newKeysLength = newKeys.length;
      for (let i = 0; matchCount < newKeysLength && i < newKeysLength; ++i) {
        let key = newKeys[i];
        if (currentStyles[key] === void 0) {
          let updated = updatedStyles[key];
          ++matchCount;
          node.style.setProperty(key, updated);
        }
      }
    }
  }
  function updateClasses(node, currentClasses, updatedClasses, isSvg) {
    let classUpdated = updatedClasses !== void 0 && updatedClasses.length > 0;
    if (currentClasses !== void 0 && currentClasses.length > 0 && !classUpdated)
      createClasses(node, [], isSvg);
    else if (classUpdated)
      createClasses(node, updatedClasses, isSvg);
  }
  function updateAttributes(node, currentAttributes, updatedAttributes) {
    if (currentAttributes === void 0) {
      if (updatedAttributes !== void 0)
        createAttributes(node, updatedAttributes);
    } else if (updatedAttributes === void 0) {
      if (currentAttributes !== void 0)
        for (let key in currentAttributes)
          node.removeAttribute(key);
    } else {
      let matchCount = 0;
      for (let key in currentAttributes) {
        let current = currentAttributes[key], updated = updatedAttributes[key], hasUpdated = updated !== void 0;
        if (hasUpdated)
          matchCount++;
        if (current !== updated)
          if (hasUpdated)
            node.setAttribute(key, updated);
          else
            node.removeAttribute(key);
      }
      let newKeys = Object.keys(updatedAttributes), newKeysLength = newKeys.length;
      for (let i = 0; matchCount < newKeysLength && i < newKeysLength; ++i) {
        let key = newKeys[i];
        if (currentAttributes[key] === void 0) {
          let updated = updatedAttributes[key];
          ++matchCount;
          node.setAttribute(key, updated);
        }
      }
    }
  }
  function updateProperties(node, currentProperties, updatedProperties) {
    let addAll = currentProperties === void 0, removeAll = updatedProperties === void 0;
    if (addAll) {
      if (!removeAll)
        for (let key in updatedProperties)
          node[key] = updatedProperties[key];
    } else if (removeAll) {
      if (!addAll)
        for (let key in currentProperties)
          node.removeAttribute(key);
    } else {
      let matchCount = 0;
      for (let key in currentProperties) {
        let current = currentProperties[key], updated = updatedProperties[key], hasUpdated = updated !== void 0;
        if (hasUpdated)
          matchCount++;
        if (current !== updated)
          if (hasUpdated)
            node[key] = updated;
          else
            node.removeAttribute(key);
      }
      let newKeys = Object.keys(updatedProperties), newKeysLength = newKeys.length;
      for (let i = 0; matchCount < newKeysLength && i < newKeysLength; ++i) {
        let key = newKeys[i];
        if (currentProperties[key] === void 0) {
          let updated = updatedProperties[key];
          ++matchCount;
          node[key] = updated;
        }
      }
    }
  }
  F.prototype.updateEvents = function(node, currentEvents, updatedHtml) {
    let updatedEvents = updatedHtml.nodeData.events;
    if (currentEvents === void 0) {
      if (updatedEvents !== void 0)
        this.createAllEvents(node, updatedHtml);
    } else if (updatedEvents === void 0) {
      if (currentEvents !== void 0)
        for (let key in currentEvents)
          this.removeEvent(node, key);
    } else {
      let matchCount = 0;
      for (let key in currentEvents) {
        let current = currentEvents[key], updated = updatedEvents[key], hasUpdated = false;
        if (updated === void 0)
          this.removeEvent(node, key);
        else {
          let currentLength = current.length, updatedLength = updated.length;
          if (currentLength != updatedLength)
            hasUpdated = true;
          else {
            for (let i = 0; i < currentLength; ++i)
              if (current[i] != updated[i]) {
                hasUpdated = true;
                break;
              }
          }
        }
        if (hasUpdated) {
          matchCount++;
          this.removeEvent(node, key);
          this.createEvent(node, key, updatedHtml);
        }
      }
      let newKeys = Object.keys(updatedEvents), newKeysLength = newKeys.length;
      for (let i = 0; matchCount < newKeysLength && i < newKeysLength; ++i) {
        let key = newKeys[i];
        if (currentEvents[key] === void 0) {
          ++matchCount;
          this.createEvent(node, key, updatedHtml);
        }
      }
    }
  };
  F.prototype.removeEvent = function(node, name2) {
    let eventKey = eventPrefix + name2;
    if (nonBubblingEvents.includes(name2)) {
      let runNonBubblingEvent = node[eventKey];
      node.removeEventListener(name2, runNonBubblingEvent, false);
    } else {
      let count = --this.applicationEvents.get(name2).count;
      if (count === 0) {
        this.root.removeEventListener(name2, this.applicationEvents.get(name2).handler, false);
        this.applicationEvents.delete(name2);
      }
    }
    node[eventKey + eventPostfix] = void 0;
    node[eventKey] = void 0;
  };
  function lazyMessageMap(mapper, html) {
    html.messageMapper = mapper;
    if (html.children !== void 0 && html.children.length > 0)
      for (let i = 0; i < html.children.length; ++i)
        lazyMessageMap(mapper, html.children[i]);
  }

  // output/Flame.Renderer.Internal.Dom/index.js
  var pure2 = /* @__PURE__ */ pure(applicativeEffect);
  var resume = /* @__PURE__ */ runEffectFn2(resume_);
  var maybeUpdater = function(updater) {
    return function(v) {
      if (v instanceof Just) {
        return updater(v.value0);
      }
      ;
      return pure2(unit);
    };
  };
  var start = function(parent) {
    return function(updater) {
      return runEffectFn4(start_)(Just.create)(parent)(maybeUpdater(updater));
    };
  };
  var startFrom = function(parent) {
    return function(updater) {
      return runEffectFn4(startFrom_)(Just.create)(parent)(maybeUpdater(updater));
    };
  };

  // output/Flame.Subscription.Internal.Listener/foreign.js
  var applicationIds = /* @__PURE__ */ new Set();
  function checkApplicationId_(id3) {
    if (applicationIds.has(id3))
      throw `Error mounting application: id ${id3} already registered!`;
    applicationIds.add(id3);
  }

  // output/Flame.Types/index.js
  var Window = /* @__PURE__ */ function() {
    function Window2() {
    }
    ;
    Window2.value = new Window2();
    return Window2;
  }();
  var Document = /* @__PURE__ */ function() {
    function Document2() {
    }
    ;
    Document2.value = new Document2();
    return Document2;
  }();
  var Custom = /* @__PURE__ */ function() {
    function Custom2() {
    }
    ;
    Custom2.value = new Custom2();
    return Custom2;
  }();

  // output/Foreign/foreign.js
  var isArray = Array.isArray || function(value2) {
    return Object.prototype.toString.call(value2) === "[object Array]";
  };

  // output/Foreign/index.js
  var unsafeFromForeign = unsafeCoerce2;

  // output/Flame.Subscription.Internal.Listener/index.js
  var createSubscription = function(updater) {
    return function(v) {
      if (v.value0 instanceof Window) {
        return createWindowListener(v.value1.value0)(function($13) {
          return updater(v.value1.value1.value0($13));
        });
      }
      ;
      if (v.value0 instanceof Document) {
        return createDocumentListener(v.value1.value0)(function($14) {
          return updater(v.value1.value1.value0($14));
        });
      }
      ;
      if (v.value0 instanceof Custom) {
        return createCustomListener(v.value1.value0)(function($15) {
          return updater(v.value1.value1.value0($15));
        });
      }
      ;
      throw new Error("Failed pattern match at Flame.Subscription.Internal.Listener (line 31, column 83 - line 34, column 75): " + [v.value0.constructor.name]);
    };
  };
  var checkApplicationId = /* @__PURE__ */ runEffectFn1(checkApplicationId_);
  var createMessageListener = function(appId) {
    return function(updater) {
      return function __do() {
        checkApplicationId(appId)();
        return createCustomListener(appId)(function($16) {
          return updater(unsafeFromForeign($16));
        })();
      };
    };
  };

  // output/Flame.Application.EffectList/index.js
  var when2 = /* @__PURE__ */ when(applicativeEffect);
  var for_2 = /* @__PURE__ */ for_(applicativeEffect)(foldableArray);
  var pure3 = /* @__PURE__ */ pure(applicativeEffect);
  var traverse_2 = /* @__PURE__ */ traverse_(applicativeEffect)(foldableArray);
  var map5 = /* @__PURE__ */ map(functorMaybe);
  var showId = function(dictShow) {
    var show4 = show(dictShow);
    return function(v) {
      return show4(v);
    };
  };
  var run3 = function(parent) {
    return function(isResumed) {
      return function(appId) {
        return function(v) {
          return function __do() {
            var modelState = $$new(v.init.value0)();
            var renderingState = $$new(21)();
            var render2 = function(model) {
              return function __do2() {
                var rendering2 = read(renderingState)();
                resume(rendering2)(v.view(model))();
                return write(model)(modelState)();
              };
            };
            var runUpdate = function(message2) {
              return function __do2() {
                var currentModel = read(modelState)();
                var v1 = v.update(currentModel)(message2);
                when2(modelHasChanged(currentModel)(v1.value0))(render2(v1.value0))();
                return runMessages(v1.value1)();
              };
            };
            var runMessages = function(affs) {
              return for_2(affs)(runAff_(function(v1) {
                if (v1 instanceof Left) {
                  return log(message(v1.value0));
                }
                ;
                if (v1 instanceof Right && v1.value0 instanceof Just) {
                  return runUpdate(v1.value0.value0);
                }
                ;
                return pure3(unit);
              }));
            };
            var rendering = function() {
              if (isResumed) {
                return startFrom(parent)(runUpdate)(v.view(v.init.value0))();
              }
              ;
              return start(parent)(runUpdate)(v.view(v.init.value0))();
            }();
            write(rendering)(renderingState)();
            runMessages(v.init.value1)();
            (function() {
              if (appId instanceof Nothing) {
                return unit;
              }
              ;
              if (appId instanceof Just) {
                return createMessageListener(appId.value0)(runUpdate)();
              }
              ;
              throw new Error("Failed pattern match at Flame.Application.EffectList (line 142, column 7 - line 144, column 62): " + [appId.constructor.name]);
            })();
            return traverse_2(createSubscription(runUpdate))(v.subscribe)();
          };
        };
      };
    };
  };
  var mountWith = function(dictShow) {
    var showId1 = showId(dictShow);
    return function(v) {
      return function(appId) {
        return function(application) {
          return function __do() {
            var maybeElement = querySelector(v)();
            if (maybeElement instanceof Just) {
              return run3(maybeElement.value0)(false)(map5(showId1)(appId))(application)();
            }
            ;
            if (maybeElement instanceof Nothing) {
              return $$throw("Error mounting application")();
            }
            ;
            throw new Error("Failed pattern match at Flame.Application.EffectList (line 101, column 7 - line 103, column 62): " + [maybeElement.constructor.name]);
          };
        };
      };
    };
  };
  var mount = function(dictShow) {
    var mountWith2 = mountWith(dictShow);
    return function(selector) {
      return function(appId) {
        return mountWith2(selector)(new Just(appId));
      };
    };
  };

  // output/Data.DateTime/foreign.js
  var createUTC = function(y, mo, d, h, m, s, ms) {
    var date2 = new Date(Date.UTC(y, mo, d, h, m, s, ms));
    if (y >= 0 && y < 100) {
      date2.setUTCFullYear(y);
    }
    return date2.getTime();
  };
  function adjustImpl(just) {
    return function(nothing) {
      return function(offset) {
        return function(rec) {
          var msUTC = createUTC(rec.year, rec.month - 1, rec.day, rec.hour, rec.minute, rec.second, rec.millisecond);
          var dt = new Date(msUTC + offset);
          return isNaN(dt.getTime()) ? nothing : just({
            year: dt.getUTCFullYear(),
            month: dt.getUTCMonth() + 1,
            day: dt.getUTCDate(),
            hour: dt.getUTCHours(),
            minute: dt.getUTCMinutes(),
            second: dt.getUTCSeconds(),
            millisecond: dt.getUTCMilliseconds()
          });
        };
      };
    };
  }

  // output/Data.Date/foreign.js
  var createDate = function(y, m, d) {
    var date2 = new Date(Date.UTC(y, m, d));
    if (y >= 0 && y < 100) {
      date2.setUTCFullYear(y);
    }
    return date2;
  };
  function canonicalDateImpl(ctor, y, m, d) {
    var date2 = createDate(y, m - 1, d);
    return ctor(date2.getUTCFullYear())(date2.getUTCMonth() + 1)(date2.getUTCDate());
  }
  function calcDiff(y1, m1, d1, y2, m2, d2) {
    var dt1 = createDate(y1, m1 - 1, d1);
    var dt2 = createDate(y2, m2 - 1, d2);
    return dt1.getTime() - dt2.getTime();
  }

  // output/Data.Date.Component/index.js
  var $runtime_lazy3 = function(name2, moduleName, init4) {
    var state2 = 0;
    var val;
    return function(lineNumber) {
      if (state2 === 2) return val;
      if (state2 === 1) throw new ReferenceError(name2 + " was needed before it finished initializing (module " + moduleName + ", line " + lineNumber + ")", moduleName, lineNumber);
      state2 = 1;
      val = init4();
      state2 = 2;
      return val;
    };
  };
  var January = /* @__PURE__ */ function() {
    function January2() {
    }
    ;
    January2.value = new January2();
    return January2;
  }();
  var February = /* @__PURE__ */ function() {
    function February2() {
    }
    ;
    February2.value = new February2();
    return February2;
  }();
  var March = /* @__PURE__ */ function() {
    function March2() {
    }
    ;
    March2.value = new March2();
    return March2;
  }();
  var April = /* @__PURE__ */ function() {
    function April2() {
    }
    ;
    April2.value = new April2();
    return April2;
  }();
  var May = /* @__PURE__ */ function() {
    function May2() {
    }
    ;
    May2.value = new May2();
    return May2;
  }();
  var June = /* @__PURE__ */ function() {
    function June2() {
    }
    ;
    June2.value = new June2();
    return June2;
  }();
  var July = /* @__PURE__ */ function() {
    function July2() {
    }
    ;
    July2.value = new July2();
    return July2;
  }();
  var August = /* @__PURE__ */ function() {
    function August2() {
    }
    ;
    August2.value = new August2();
    return August2;
  }();
  var September = /* @__PURE__ */ function() {
    function September2() {
    }
    ;
    September2.value = new September2();
    return September2;
  }();
  var October = /* @__PURE__ */ function() {
    function October2() {
    }
    ;
    October2.value = new October2();
    return October2;
  }();
  var November = /* @__PURE__ */ function() {
    function November2() {
    }
    ;
    November2.value = new November2();
    return November2;
  }();
  var December = /* @__PURE__ */ function() {
    function December2() {
    }
    ;
    December2.value = new December2();
    return December2;
  }();
  var ordYear = ordInt;
  var ordDay = ordInt;
  var eqYear = eqInt;
  var eqMonth = {
    eq: function(x) {
      return function(y) {
        if (x instanceof January && y instanceof January) {
          return true;
        }
        ;
        if (x instanceof February && y instanceof February) {
          return true;
        }
        ;
        if (x instanceof March && y instanceof March) {
          return true;
        }
        ;
        if (x instanceof April && y instanceof April) {
          return true;
        }
        ;
        if (x instanceof May && y instanceof May) {
          return true;
        }
        ;
        if (x instanceof June && y instanceof June) {
          return true;
        }
        ;
        if (x instanceof July && y instanceof July) {
          return true;
        }
        ;
        if (x instanceof August && y instanceof August) {
          return true;
        }
        ;
        if (x instanceof September && y instanceof September) {
          return true;
        }
        ;
        if (x instanceof October && y instanceof October) {
          return true;
        }
        ;
        if (x instanceof November && y instanceof November) {
          return true;
        }
        ;
        if (x instanceof December && y instanceof December) {
          return true;
        }
        ;
        return false;
      };
    }
  };
  var ordMonth = {
    compare: function(x) {
      return function(y) {
        if (x instanceof January && y instanceof January) {
          return EQ.value;
        }
        ;
        if (x instanceof January) {
          return LT.value;
        }
        ;
        if (y instanceof January) {
          return GT.value;
        }
        ;
        if (x instanceof February && y instanceof February) {
          return EQ.value;
        }
        ;
        if (x instanceof February) {
          return LT.value;
        }
        ;
        if (y instanceof February) {
          return GT.value;
        }
        ;
        if (x instanceof March && y instanceof March) {
          return EQ.value;
        }
        ;
        if (x instanceof March) {
          return LT.value;
        }
        ;
        if (y instanceof March) {
          return GT.value;
        }
        ;
        if (x instanceof April && y instanceof April) {
          return EQ.value;
        }
        ;
        if (x instanceof April) {
          return LT.value;
        }
        ;
        if (y instanceof April) {
          return GT.value;
        }
        ;
        if (x instanceof May && y instanceof May) {
          return EQ.value;
        }
        ;
        if (x instanceof May) {
          return LT.value;
        }
        ;
        if (y instanceof May) {
          return GT.value;
        }
        ;
        if (x instanceof June && y instanceof June) {
          return EQ.value;
        }
        ;
        if (x instanceof June) {
          return LT.value;
        }
        ;
        if (y instanceof June) {
          return GT.value;
        }
        ;
        if (x instanceof July && y instanceof July) {
          return EQ.value;
        }
        ;
        if (x instanceof July) {
          return LT.value;
        }
        ;
        if (y instanceof July) {
          return GT.value;
        }
        ;
        if (x instanceof August && y instanceof August) {
          return EQ.value;
        }
        ;
        if (x instanceof August) {
          return LT.value;
        }
        ;
        if (y instanceof August) {
          return GT.value;
        }
        ;
        if (x instanceof September && y instanceof September) {
          return EQ.value;
        }
        ;
        if (x instanceof September) {
          return LT.value;
        }
        ;
        if (y instanceof September) {
          return GT.value;
        }
        ;
        if (x instanceof October && y instanceof October) {
          return EQ.value;
        }
        ;
        if (x instanceof October) {
          return LT.value;
        }
        ;
        if (y instanceof October) {
          return GT.value;
        }
        ;
        if (x instanceof November && y instanceof November) {
          return EQ.value;
        }
        ;
        if (x instanceof November) {
          return LT.value;
        }
        ;
        if (y instanceof November) {
          return GT.value;
        }
        ;
        if (x instanceof December && y instanceof December) {
          return EQ.value;
        }
        ;
        throw new Error("Failed pattern match at Data.Date.Component (line 0, column 0 - line 0, column 0): " + [x.constructor.name, y.constructor.name]);
      };
    },
    Eq0: function() {
      return eqMonth;
    }
  };
  var eqDay = eqInt;
  var boundedYear = /* @__PURE__ */ function() {
    return {
      bottom: -271820 | 0,
      top: 275759,
      Ord0: function() {
        return ordYear;
      }
    };
  }();
  var boundedMonth = /* @__PURE__ */ function() {
    return {
      bottom: January.value,
      top: December.value,
      Ord0: function() {
        return ordMonth;
      }
    };
  }();
  var boundedEnumYear = {
    cardinality: 547580,
    toEnum: function(n) {
      if (n >= (-271820 | 0) && n <= 275759) {
        return new Just(n);
      }
      ;
      if (otherwise) {
        return Nothing.value;
      }
      ;
      throw new Error("Failed pattern match at Data.Date.Component (line 35, column 1 - line 40, column 24): " + [n.constructor.name]);
    },
    fromEnum: function(v) {
      return v;
    },
    Bounded0: function() {
      return boundedYear;
    },
    Enum1: function() {
      return $lazy_enumYear(0);
    }
  };
  var $lazy_enumYear = /* @__PURE__ */ $runtime_lazy3("enumYear", "Data.Date.Component", function() {
    return {
      succ: function() {
        var $55 = toEnum(boundedEnumYear);
        var $56 = fromEnum(boundedEnumYear);
        return function($57) {
          return $55(function(v) {
            return v + 1 | 0;
          }($56($57)));
        };
      }(),
      pred: function() {
        var $58 = toEnum(boundedEnumYear);
        var $59 = fromEnum(boundedEnumYear);
        return function($60) {
          return $58(function(v) {
            return v - 1 | 0;
          }($59($60)));
        };
      }(),
      Ord0: function() {
        return ordYear;
      }
    };
  });
  var boundedEnumMonth = {
    cardinality: 12,
    toEnum: function(v) {
      if (v === 1) {
        return new Just(January.value);
      }
      ;
      if (v === 2) {
        return new Just(February.value);
      }
      ;
      if (v === 3) {
        return new Just(March.value);
      }
      ;
      if (v === 4) {
        return new Just(April.value);
      }
      ;
      if (v === 5) {
        return new Just(May.value);
      }
      ;
      if (v === 6) {
        return new Just(June.value);
      }
      ;
      if (v === 7) {
        return new Just(July.value);
      }
      ;
      if (v === 8) {
        return new Just(August.value);
      }
      ;
      if (v === 9) {
        return new Just(September.value);
      }
      ;
      if (v === 10) {
        return new Just(October.value);
      }
      ;
      if (v === 11) {
        return new Just(November.value);
      }
      ;
      if (v === 12) {
        return new Just(December.value);
      }
      ;
      return Nothing.value;
    },
    fromEnum: function(v) {
      if (v instanceof January) {
        return 1;
      }
      ;
      if (v instanceof February) {
        return 2;
      }
      ;
      if (v instanceof March) {
        return 3;
      }
      ;
      if (v instanceof April) {
        return 4;
      }
      ;
      if (v instanceof May) {
        return 5;
      }
      ;
      if (v instanceof June) {
        return 6;
      }
      ;
      if (v instanceof July) {
        return 7;
      }
      ;
      if (v instanceof August) {
        return 8;
      }
      ;
      if (v instanceof September) {
        return 9;
      }
      ;
      if (v instanceof October) {
        return 10;
      }
      ;
      if (v instanceof November) {
        return 11;
      }
      ;
      if (v instanceof December) {
        return 12;
      }
      ;
      throw new Error("Failed pattern match at Data.Date.Component (line 87, column 14 - line 99, column 19): " + [v.constructor.name]);
    },
    Bounded0: function() {
      return boundedMonth;
    },
    Enum1: function() {
      return $lazy_enumMonth(0);
    }
  };
  var $lazy_enumMonth = /* @__PURE__ */ $runtime_lazy3("enumMonth", "Data.Date.Component", function() {
    return {
      succ: function() {
        var $67 = toEnum(boundedEnumMonth);
        var $68 = fromEnum(boundedEnumMonth);
        return function($69) {
          return $67(function(v) {
            return v + 1 | 0;
          }($68($69)));
        };
      }(),
      pred: function() {
        var $70 = toEnum(boundedEnumMonth);
        var $71 = fromEnum(boundedEnumMonth);
        return function($72) {
          return $70(function(v) {
            return v - 1 | 0;
          }($71($72)));
        };
      }(),
      Ord0: function() {
        return ordMonth;
      }
    };
  });
  var boundedDay = {
    bottom: 1,
    top: 31,
    Ord0: function() {
      return ordDay;
    }
  };
  var boundedEnumDay = {
    cardinality: 31,
    toEnum: function(n) {
      if (n >= 1 && n <= 31) {
        return new Just(n);
      }
      ;
      if (otherwise) {
        return Nothing.value;
      }
      ;
      throw new Error("Failed pattern match at Data.Date.Component (line 133, column 1 - line 138, column 23): " + [n.constructor.name]);
    },
    fromEnum: function(v) {
      return v;
    },
    Bounded0: function() {
      return boundedDay;
    },
    Enum1: function() {
      return $lazy_enumDay(0);
    }
  };
  var $lazy_enumDay = /* @__PURE__ */ $runtime_lazy3("enumDay", "Data.Date.Component", function() {
    return {
      succ: function() {
        var $73 = toEnum(boundedEnumDay);
        var $74 = fromEnum(boundedEnumDay);
        return function($75) {
          return $73(function(v) {
            return v + 1 | 0;
          }($74($75)));
        };
      }(),
      pred: function() {
        var $76 = toEnum(boundedEnumDay);
        var $77 = fromEnum(boundedEnumDay);
        return function($78) {
          return $76(function(v) {
            return v - 1 | 0;
          }($77($78)));
        };
      }(),
      Ord0: function() {
        return ordDay;
      }
    };
  });

  // output/Data.Date/index.js
  var fromEnum3 = /* @__PURE__ */ fromEnum(boundedEnumMonth);
  var fromJust5 = /* @__PURE__ */ fromJust();
  var eq12 = /* @__PURE__ */ eq(eqYear);
  var eq22 = /* @__PURE__ */ eq(eqMonth);
  var eq3 = /* @__PURE__ */ eq(eqDay);
  var toEnum2 = /* @__PURE__ */ toEnum(boundedEnumMonth);
  var $$Date = /* @__PURE__ */ function() {
    function $$Date2(value0, value1, value2) {
      this.value0 = value0;
      this.value1 = value1;
      this.value2 = value2;
    }
    ;
    $$Date2.create = function(value0) {
      return function(value1) {
        return function(value2) {
          return new $$Date2(value0, value1, value2);
        };
      };
    };
    return $$Date2;
  }();
  var year = function(v) {
    return v.value0;
  };
  var month = function(v) {
    return v.value1;
  };
  var eqDate = {
    eq: function(x) {
      return function(y) {
        return eq12(x.value0)(y.value0) && eq22(x.value1)(y.value1) && eq3(x.value2)(y.value2);
      };
    }
  };
  var eq4 = /* @__PURE__ */ eq(eqDate);
  var diff = function(dictDuration) {
    var toDuration2 = toDuration(dictDuration);
    return function(v) {
      return function(v1) {
        return toDuration2(calcDiff(v.value0, fromEnum3(v.value1), v.value2, v1.value0, fromEnum3(v1.value1), v1.value2));
      };
    };
  };
  var day = function(v) {
    return v.value2;
  };
  var canonicalDate = function(y) {
    return function(m) {
      return function(d) {
        var mkDate = function(y$prime) {
          return function(m$prime) {
            return function(d$prime) {
              return new $$Date(y$prime, fromJust5(toEnum2(m$prime)), d$prime);
            };
          };
        };
        return canonicalDateImpl(mkDate, y, fromEnum3(m), d);
      };
    };
  };
  var exactDate = function(y) {
    return function(m) {
      return function(d) {
        var dt = new $$Date(y, m, d);
        var $144 = eq4(canonicalDate(y)(m)(d))(dt);
        if ($144) {
          return new Just(dt);
        }
        ;
        return Nothing.value;
      };
    };
  };

  // output/Data.Time.Component/index.js
  var $runtime_lazy4 = function(name2, moduleName, init4) {
    var state2 = 0;
    var val;
    return function(lineNumber) {
      if (state2 === 2) return val;
      if (state2 === 1) throw new ReferenceError(name2 + " was needed before it finished initializing (module " + moduleName + ", line " + lineNumber + ")", moduleName, lineNumber);
      state2 = 1;
      val = init4();
      state2 = 2;
      return val;
    };
  };
  var ordSecond = ordInt;
  var ordMinute = ordInt;
  var ordMillisecond = ordInt;
  var ordHour = ordInt;
  var boundedSecond = {
    bottom: 0,
    top: 59,
    Ord0: function() {
      return ordSecond;
    }
  };
  var boundedMinute = {
    bottom: 0,
    top: 59,
    Ord0: function() {
      return ordMinute;
    }
  };
  var boundedMillisecond = {
    bottom: 0,
    top: 999,
    Ord0: function() {
      return ordMillisecond;
    }
  };
  var boundedHour = {
    bottom: 0,
    top: 23,
    Ord0: function() {
      return ordHour;
    }
  };
  var boundedEnumSecond = {
    cardinality: 60,
    toEnum: function(n) {
      if (n >= 0 && n <= 59) {
        return new Just(n);
      }
      ;
      if (otherwise) {
        return Nothing.value;
      }
      ;
      throw new Error("Failed pattern match at Data.Time.Component (line 90, column 1 - line 95, column 26): " + [n.constructor.name]);
    },
    fromEnum: function(v) {
      return v;
    },
    Bounded0: function() {
      return boundedSecond;
    },
    Enum1: function() {
      return $lazy_enumSecond(0);
    }
  };
  var $lazy_enumSecond = /* @__PURE__ */ $runtime_lazy4("enumSecond", "Data.Time.Component", function() {
    return {
      succ: function() {
        var $36 = toEnum(boundedEnumSecond);
        var $37 = fromEnum(boundedEnumSecond);
        return function($38) {
          return $36(function(v) {
            return v + 1 | 0;
          }($37($38)));
        };
      }(),
      pred: function() {
        var $39 = toEnum(boundedEnumSecond);
        var $40 = fromEnum(boundedEnumSecond);
        return function($41) {
          return $39(function(v) {
            return v - 1 | 0;
          }($40($41)));
        };
      }(),
      Ord0: function() {
        return ordSecond;
      }
    };
  });
  var boundedEnumMinute = {
    cardinality: 60,
    toEnum: function(n) {
      if (n >= 0 && n <= 59) {
        return new Just(n);
      }
      ;
      if (otherwise) {
        return Nothing.value;
      }
      ;
      throw new Error("Failed pattern match at Data.Time.Component (line 61, column 1 - line 66, column 26): " + [n.constructor.name]);
    },
    fromEnum: function(v) {
      return v;
    },
    Bounded0: function() {
      return boundedMinute;
    },
    Enum1: function() {
      return $lazy_enumMinute(0);
    }
  };
  var $lazy_enumMinute = /* @__PURE__ */ $runtime_lazy4("enumMinute", "Data.Time.Component", function() {
    return {
      succ: function() {
        var $42 = toEnum(boundedEnumMinute);
        var $43 = fromEnum(boundedEnumMinute);
        return function($44) {
          return $42(function(v) {
            return v + 1 | 0;
          }($43($44)));
        };
      }(),
      pred: function() {
        var $45 = toEnum(boundedEnumMinute);
        var $46 = fromEnum(boundedEnumMinute);
        return function($47) {
          return $45(function(v) {
            return v - 1 | 0;
          }($46($47)));
        };
      }(),
      Ord0: function() {
        return ordMinute;
      }
    };
  });
  var boundedEnumMillisecond = {
    cardinality: 1e3,
    toEnum: function(n) {
      if (n >= 0 && n <= 999) {
        return new Just(n);
      }
      ;
      if (otherwise) {
        return Nothing.value;
      }
      ;
      throw new Error("Failed pattern match at Data.Time.Component (line 120, column 1 - line 125, column 31): " + [n.constructor.name]);
    },
    fromEnum: function(v) {
      return v;
    },
    Bounded0: function() {
      return boundedMillisecond;
    },
    Enum1: function() {
      return $lazy_enumMillisecond(0);
    }
  };
  var $lazy_enumMillisecond = /* @__PURE__ */ $runtime_lazy4("enumMillisecond", "Data.Time.Component", function() {
    return {
      succ: function() {
        var $48 = toEnum(boundedEnumMillisecond);
        var $49 = fromEnum(boundedEnumMillisecond);
        return function($50) {
          return $48(function(v) {
            return v + 1 | 0;
          }($49($50)));
        };
      }(),
      pred: function() {
        var $51 = toEnum(boundedEnumMillisecond);
        var $52 = fromEnum(boundedEnumMillisecond);
        return function($53) {
          return $51(function(v) {
            return v - 1 | 0;
          }($52($53)));
        };
      }(),
      Ord0: function() {
        return ordMillisecond;
      }
    };
  });
  var boundedEnumHour = {
    cardinality: 24,
    toEnum: function(n) {
      if (n >= 0 && n <= 23) {
        return new Just(n);
      }
      ;
      if (otherwise) {
        return Nothing.value;
      }
      ;
      throw new Error("Failed pattern match at Data.Time.Component (line 32, column 1 - line 37, column 24): " + [n.constructor.name]);
    },
    fromEnum: function(v) {
      return v;
    },
    Bounded0: function() {
      return boundedHour;
    },
    Enum1: function() {
      return $lazy_enumHour(0);
    }
  };
  var $lazy_enumHour = /* @__PURE__ */ $runtime_lazy4("enumHour", "Data.Time.Component", function() {
    return {
      succ: function() {
        var $54 = toEnum(boundedEnumHour);
        var $55 = fromEnum(boundedEnumHour);
        return function($56) {
          return $54(function(v) {
            return v + 1 | 0;
          }($55($56)));
        };
      }(),
      pred: function() {
        var $57 = toEnum(boundedEnumHour);
        var $58 = fromEnum(boundedEnumHour);
        return function($59) {
          return $57(function(v) {
            return v - 1 | 0;
          }($58($59)));
        };
      }(),
      Ord0: function() {
        return ordHour;
      }
    };
  });

  // output/Data.Time/index.js
  var Time = /* @__PURE__ */ function() {
    function Time2(value0, value1, value2, value3) {
      this.value0 = value0;
      this.value1 = value1;
      this.value2 = value2;
      this.value3 = value3;
    }
    ;
    Time2.create = function(value0) {
      return function(value1) {
        return function(value2) {
          return function(value3) {
            return new Time2(value0, value1, value2, value3);
          };
        };
      };
    };
    return Time2;
  }();
  var second = function(v) {
    return v.value2;
  };
  var minute = function(v) {
    return v.value1;
  };
  var millisecond = function(v) {
    return v.value3;
  };
  var hour = function(v) {
    return v.value0;
  };

  // output/Data.DateTime/index.js
  var fromEnum4 = /* @__PURE__ */ fromEnum(boundedEnumYear);
  var fromEnum1 = /* @__PURE__ */ fromEnum(boundedEnumMonth);
  var fromEnum22 = /* @__PURE__ */ fromEnum(boundedEnumDay);
  var fromEnum32 = /* @__PURE__ */ fromEnum(boundedEnumHour);
  var fromEnum42 = /* @__PURE__ */ fromEnum(boundedEnumMinute);
  var fromEnum5 = /* @__PURE__ */ fromEnum(boundedEnumSecond);
  var fromEnum6 = /* @__PURE__ */ fromEnum(boundedEnumMillisecond);
  var bind2 = /* @__PURE__ */ bind(bindMaybe);
  var apply2 = /* @__PURE__ */ apply(applyMaybe);
  var map6 = /* @__PURE__ */ map(functorMaybe);
  var join2 = /* @__PURE__ */ join(bindMaybe);
  var toEnum3 = /* @__PURE__ */ toEnum(boundedEnumYear);
  var toEnum1 = /* @__PURE__ */ toEnum(boundedEnumMonth);
  var toEnum22 = /* @__PURE__ */ toEnum(boundedEnumDay);
  var toEnum32 = /* @__PURE__ */ toEnum(boundedEnumHour);
  var toEnum4 = /* @__PURE__ */ toEnum(boundedEnumMinute);
  var toEnum5 = /* @__PURE__ */ toEnum(boundedEnumSecond);
  var toEnum6 = /* @__PURE__ */ toEnum(boundedEnumMillisecond);
  var DateTime = /* @__PURE__ */ function() {
    function DateTime2(value0, value1) {
      this.value0 = value0;
      this.value1 = value1;
    }
    ;
    DateTime2.create = function(value0) {
      return function(value1) {
        return new DateTime2(value0, value1);
      };
    };
    return DateTime2;
  }();
  var toRecord = function(v) {
    return {
      year: fromEnum4(year(v.value0)),
      month: fromEnum1(month(v.value0)),
      day: fromEnum22(day(v.value0)),
      hour: fromEnum32(hour(v.value1)),
      minute: fromEnum42(minute(v.value1)),
      second: fromEnum5(second(v.value1)),
      millisecond: fromEnum6(millisecond(v.value1))
    };
  };
  var date = function(v) {
    return v.value0;
  };
  var adjust = function(dictDuration) {
    var fromDuration2 = fromDuration(dictDuration);
    return function(d) {
      return function(dt) {
        return bind2(adjustImpl(Just.create)(Nothing.value)(fromDuration2(d))(toRecord(dt)))(function(rec) {
          return apply2(map6(DateTime.create)(join2(apply2(apply2(map6(exactDate)(toEnum3(rec.year)))(toEnum1(rec.month)))(toEnum22(rec.day)))))(apply2(apply2(apply2(map6(Time.create)(toEnum32(rec.hour)))(toEnum4(rec.minute)))(toEnum5(rec.second)))(toEnum6(rec.millisecond)));
        });
      };
    };
  };

  // output/Data.HashMap/foreign.js
  function MapNode(datamap, nodemap, content) {
    this.datamap = datamap;
    this.nodemap = nodemap;
    this.content = content;
  }
  MapNode.prototype.lookup = function lookup2(Nothing2, Just2, keyEquals, key, keyHash, shift) {
    var bit = mask(keyHash, shift);
    if ((this.datamap & bit) !== 0) {
      var i = index3(this.datamap, bit);
      if (keyEquals(key)(this.content[i * 2]))
        return Just2(this.content[i * 2 + 1]);
      return Nothing2;
    }
    if ((this.nodemap & bit) !== 0) {
      return this.content[this.content.length - 1 - index3(this.nodemap, bit)].lookup(Nothing2, Just2, keyEquals, key, keyHash, shift + 5);
    }
    return Nothing2;
  };
  function remove2insert1Mut(a, removeIndex, insertIndex, v1) {
    for (var i = removeIndex; i < insertIndex; i++) a[i] = a[i + 2];
    a[i++] = v1;
    for (; i < a.length - 1; i++) a[i] = a[i + 1];
    a.length = a.length - 1;
  }
  MapNode.prototype.insertMut = function insertMut(keyEquals, hashFunction, key, keyHash, value2, shift) {
    var bit = mask(keyHash, shift);
    var i = index3(this.datamap, bit);
    if ((this.datamap & bit) !== 0) {
      var k = this.content[i * 2];
      if (keyEquals(k)(key)) {
        this.content[i * 2 + 1] = value2;
      } else {
        var newNode = binaryNode(k, hashFunction(k), this.content[i * 2 + 1], key, keyHash, value2, shift + 5);
        this.datamap = this.datamap ^ bit;
        this.nodemap = this.nodemap | bit;
        remove2insert1Mut(this.content, i * 2, this.content.length - index3(this.nodemap, bit) - 2, newNode);
      }
    } else if ((this.nodemap & bit) !== 0) {
      var n = this.content.length - 1 - index3(this.nodemap, bit);
      this.content[n].insertMut(keyEquals, hashFunction, key, keyHash, value2, shift + 5);
    } else {
      this.datamap = this.datamap | bit;
      this.content.splice(i * 2, 0, key, value2);
    }
  };
  MapNode.prototype.insert = function insert5(keyEquals, hashFunction, key, keyHash, value2, shift) {
    var bit = mask(keyHash, shift);
    var i = index3(this.datamap, bit);
    if ((this.datamap & bit) !== 0) {
      var k = this.content[i * 2];
      if (keyEquals(k)(key))
        return new MapNode(this.datamap, this.nodemap, overwriteTwoElements(this.content, i * 2, key, value2));
      var newNode = binaryNode(k, hashFunction(k), this.content[i * 2 + 1], key, keyHash, value2, shift + 5);
      return new MapNode(this.datamap ^ bit, this.nodemap | bit, remove2insert1(this.content, i * 2, this.content.length - index3(this.nodemap, bit) - 2, newNode));
    }
    if ((this.nodemap & bit) !== 0) {
      var n = this.content.length - 1 - index3(this.nodemap, bit);
      return new MapNode(
        this.datamap,
        this.nodemap,
        copyAndOverwriteOrExtend1(
          this.content,
          n,
          this.content[n].insert(keyEquals, hashFunction, key, keyHash, value2, shift + 5)
        )
      );
    }
    return new MapNode(this.datamap | bit, this.nodemap, insert22(this.content, i * 2, key, value2));
  };
  MapNode.prototype.insertWith = function insertWith(keyEquals, hashFunction, f, key, keyHash, value2, shift) {
    var bit = mask(keyHash, shift);
    var i = index3(this.datamap, bit);
    if ((this.datamap & bit) !== 0) {
      var k = this.content[i * 2];
      if (keyEquals(k)(key))
        return new MapNode(this.datamap, this.nodemap, overwriteTwoElements(this.content, i * 2, key, f(this.content[i * 2 + 1])(value2)));
      var newNode = binaryNode(k, hashFunction(k), this.content[i * 2 + 1], key, keyHash, value2, shift + 5);
      return new MapNode(this.datamap ^ bit, this.nodemap | bit, remove2insert1(this.content, i * 2, this.content.length - index3(this.nodemap, bit) - 2, newNode));
    }
    if ((this.nodemap & bit) !== 0) {
      var n = this.content.length - 1 - index3(this.nodemap, bit);
      return new MapNode(
        this.datamap,
        this.nodemap,
        copyAndOverwriteOrExtend1(
          this.content,
          n,
          this.content[n].insertWith(keyEquals, hashFunction, f, key, keyHash, value2, shift + 5)
        )
      );
    }
    return new MapNode(this.datamap | bit, this.nodemap, insert22(this.content, i * 2, key, value2));
  };
  MapNode.prototype.delet = function delet(keyEquals, key, keyHash, shift) {
    var bit = mask(keyHash, shift);
    if ((this.datamap & bit) !== 0) {
      var dataIndex = index3(this.datamap, bit);
      if (keyEquals(this.content[dataIndex * 2])(key)) {
        if (this.nodemap === 0 && this.content.length === 2) return empty4;
        return new MapNode(this.datamap ^ bit, this.nodemap, remove2(this.content, dataIndex * 2));
      }
      return this;
    }
    if ((this.nodemap & bit) !== 0) {
      var nodeIndex = index3(this.nodemap, bit);
      var recNode = this.content[this.content.length - 1 - nodeIndex];
      var recRes = recNode.delet(keyEquals, key, keyHash, shift + 5);
      if (recNode === recRes) return this;
      if (recRes.isSingleton()) {
        if (this.content.length === 1) {
          recRes.datamap = this.nodemap;
          return recRes;
        }
        return new MapNode(
          this.datamap | bit,
          this.nodemap ^ bit,
          insert2remove1(this.content, 2 * index3(this.datamap, bit), recRes.content[0], recRes.content[1], this.content.length - 1 - nodeIndex)
        );
      }
      return new MapNode(this.datamap, this.nodemap, copyAndOverwriteOrExtend1(this.content, this.content.length - 1 - nodeIndex, recRes));
    }
    return this;
  };
  MapNode.prototype.toArrayBy = function(f, res) {
    for (var i = 0; i < popCount(this.datamap) * 2; ) {
      var k = this.content[i++];
      var v = this.content[i++];
      res.push(f(k)(v));
    }
    for (; i < this.content.length; i++)
      this.content[i].toArrayBy(f, res);
  };
  MapNode.prototype.isSingleton = function() {
    return this.nodemap === 0 && this.content.length === 2;
  };
  MapNode.prototype.eq = function(kf, vf, that) {
    if (this === that) return true;
    if (this.constructor !== that.constructor || this.nodemap !== that.nodemap || this.datamap !== that.datamap) return false;
    for (var i = 0; i < popCount(this.datamap) * 2; ) {
      if (kf(this.content[i])(that.content[i])) i++;
      else return false;
      if (vf(this.content[i])(that.content[i])) i++;
      else return false;
    }
    for (; i < this.content.length; i++)
      if (!this.content[i].eq(kf, vf, that.content[i])) return false;
    return true;
  };
  MapNode.prototype.hash = function(vhash) {
    var h = this.datamap;
    for (var i = 0; i < popCount(this.datamap); i++)
      h = h * 31 + vhash(this.content[i * 2 + 1]) | 0;
    for (var j = 0; j < popCount(this.nodemap); j++)
      h = h * 31 + this.content[this.content.length - j - 1].hash(vhash) | 0;
    return h;
  };
  MapNode.prototype.size = function() {
    var res = popCount(this.datamap);
    for (var i = res * 2; i < this.content.length; i++) res += this.content[i].size();
    return res;
  };
  MapNode.prototype.imap = function(f) {
    var newContent = this.content.slice();
    for (var i = 0; i < popCount(this.datamap) * 2; ) {
      var k = this.content[i++];
      var v = this.content[i++];
      newContent[i - 2] = k;
      newContent[i - 1] = f(k)(v);
    }
    for (; i < this.content.length; i++)
      newContent[i] = this.content[i].imap(f);
    return new MapNode(this.datamap, this.nodemap, newContent);
  };
  MapNode.prototype.ifoldMap = function(m, mappend, f) {
    for (var i = 0; i < popCount(this.datamap) * 2; ) {
      var k = this.content[i++];
      var v = this.content[i++];
      m = mappend(m)(f(k)(v));
    }
    for (; i < this.content.length; i++)
      m = this.content[i].ifoldMap(m, mappend, f);
    return m;
  };
  function lowestBit(n) {
    return n & -n;
  }
  function mergeState(bit, thisnode, thisdata, thatnode, thatdata) {
    var state2 = 0;
    state2 |= (bit & thisnode) !== 0 ? 1 : 0;
    state2 |= (bit & thisdata) !== 0 ? 2 : 0;
    state2 |= (bit & thatnode) !== 0 ? 4 : 0;
    state2 |= (bit & thatdata) !== 0 ? 8 : 0;
    return state2;
  }
  MapNode.prototype.unionWith = function(eq6, hash2, f, that, shift) {
    if (this.constructor !== that.constructor)
      throw "Trying to union a MapNode with something else";
    var thisDataIndex, thatDataIndex, thisNodeIndex, thatNodeIndex;
    var datamap = 0;
    var nodemap = 0;
    var data = [];
    var nodes = [];
    var skipmap = this.datamap | this.nodemap | that.datamap | that.nodemap;
    while (skipmap !== 0) {
      var bit = lowestBit(skipmap);
      skipmap &= ~bit;
      switch (mergeState(bit, this.nodemap, this.datamap, that.nodemap, that.datamap)) {
        case 1:
          thisNodeIndex = index3(this.nodemap, bit);
          nodemap |= bit;
          nodes.push(this.content[this.content.length - thisNodeIndex - 1]);
          break;
        case 2:
          thisDataIndex = index3(this.datamap, bit);
          datamap |= bit;
          data.push(this.content[thisDataIndex * 2], this.content[thisDataIndex * 2 + 1]);
          break;
        case 4:
          thatNodeIndex = index3(that.nodemap, bit);
          nodemap |= bit;
          nodes.push(that.content[that.content.length - thatNodeIndex - 1]);
          break;
        case 5:
          thisNodeIndex = index3(this.nodemap, bit);
          thatNodeIndex = index3(that.nodemap, bit);
          nodemap |= bit;
          nodes.push(
            this.content[this.content.length - thisNodeIndex - 1].unionWith(eq6, hash2, f, that.content[that.content.length - thatNodeIndex - 1], shift + 5)
          );
          break;
        case 6:
          thisDataIndex = index3(this.datamap, bit);
          thatNodeIndex = index3(that.nodemap, bit);
          var k = this.content[thisDataIndex * 2];
          var v = this.content[thisDataIndex * 2 + 1];
          var hk = hash2(k);
          var flippedF = function(a) {
            return function(b) {
              return f(b)(a);
            };
          };
          nodemap |= bit;
          nodes.push(that.content[that.content.length - thatNodeIndex - 1].insertWith(eq6, hash2, flippedF, k, hk, v, shift + 5));
          break;
        case 8:
          thatDataIndex = index3(that.datamap, bit);
          datamap |= bit;
          data.push(that.content[thatDataIndex * 2], that.content[thatDataIndex * 2 + 1]);
          break;
        case 9:
          thatDataIndex = index3(that.datamap, bit);
          thisNodeIndex = index3(this.nodemap, bit);
          var k = that.content[thatDataIndex * 2];
          var v = that.content[thatDataIndex * 2 + 1];
          var hk = hash2(k);
          nodemap |= bit;
          nodes.push(this.content[this.content.length - thisNodeIndex - 1].insertWith(eq6, hash2, f, k, hk, v, shift + 5));
          break;
        case 10:
          thisDataIndex = index3(this.datamap, bit);
          thatDataIndex = index3(that.datamap, bit);
          if (eq6(this.content[thisDataIndex * 2])(that.content[thatDataIndex * 2])) {
            datamap |= bit;
            data.push(this.content[thisDataIndex * 2], f(this.content[thisDataIndex * 2 + 1])(that.content[thatDataIndex * 2 + 1]));
          } else {
            nodemap |= bit;
            nodes.push(binaryNode(
              this.content[thisDataIndex * 2],
              hash2(this.content[thisDataIndex * 2]),
              this.content[thisDataIndex * 2 + 1],
              that.content[thatDataIndex * 2],
              hash2(that.content[thatDataIndex * 2]),
              that.content[thatDataIndex * 2 + 1],
              shift + 5
            ));
          }
          break;
      }
    }
    return new MapNode(datamap, nodemap, data.concat(nodes.reverse()));
  };
  MapNode.prototype.intersectionWith = function(Nothing2, Just2, eq6, hash2, f, that, shift) {
    if (this.constructor !== that.constructor)
      throw "Trying to intersect a MapNode with something else";
    var thisDataIndex, thatDataIndex, thisNodeIndex, thatNodeIndex;
    var datamap = 0;
    var nodemap = 0;
    var data = [];
    var nodes = [];
    var skipmap = (this.datamap | this.nodemap) & (that.datamap | that.nodemap);
    while (skipmap !== 0) {
      var bit = lowestBit(skipmap);
      skipmap &= ~bit;
      switch (mergeState(bit, this.nodemap, this.datamap, that.nodemap, that.datamap)) {
        case 5:
          thisNodeIndex = index3(this.nodemap, bit);
          thatNodeIndex = index3(that.nodemap, bit);
          var recRes = this.content[this.content.length - thisNodeIndex - 1].intersectionWith(Nothing2, Just2, eq6, hash2, f, that.content[that.content.length - thatNodeIndex - 1], shift + 5);
          if (isEmpty2(recRes)) continue;
          if (recRes.isSingleton()) {
            datamap |= bit;
            data.push(recRes.content[0], recRes.content[1]);
          } else {
            nodemap |= bit;
            nodes.push(recRes);
          }
          break;
        case 6:
          thisDataIndex = index3(this.datamap, bit);
          thatNodeIndex = index3(that.nodemap, bit);
          var k = this.content[thisDataIndex * 2];
          var v = this.content[thisDataIndex * 2 + 1];
          var hk = hash2(k);
          var res = that.content[that.content.length - thatNodeIndex - 1].lookup(Nothing2, Just2, eq6, k, hk, shift + 5);
          if (res !== Nothing2) {
            datamap |= bit;
            data.push(k, f(v)(res.value0));
          }
          break;
        case 9:
          thatDataIndex = index3(that.datamap, bit);
          thisNodeIndex = index3(this.nodemap, bit);
          var k = that.content[thatDataIndex * 2];
          var v = that.content[thatDataIndex * 2 + 1];
          var hk = hash2(k);
          var res = this.content[this.content.length - thisNodeIndex - 1].lookup(Nothing2, Just2, eq6, k, hk, shift + 5);
          if (res !== Nothing2) {
            datamap |= bit;
            data.push(k, f(res.value0)(v));
          }
          break;
        case 10:
          thisDataIndex = index3(this.datamap, bit);
          thatDataIndex = index3(that.datamap, bit);
          if (eq6(this.content[thisDataIndex * 2])(that.content[thatDataIndex * 2])) {
            datamap |= bit;
            data.push(this.content[thisDataIndex * 2], f(this.content[thisDataIndex * 2 + 1])(that.content[thatDataIndex * 2 + 1]));
          }
          break;
      }
    }
    return new MapNode(datamap, nodemap, data.concat(nodes.reverse()));
  };
  MapNode.prototype.filterWithKey = function filterWithKey2(f) {
    var datamap = 0;
    var nodemap = 0;
    var data = [];
    var nodes = [];
    var skipmap = this.datamap | this.nodemap;
    while (skipmap !== 0) {
      var bit = lowestBit(skipmap);
      skipmap &= ~bit;
      if ((this.datamap & bit) !== 0) {
        var dataIndex = index3(this.datamap, bit);
        var k = this.content[dataIndex * 2];
        var v = this.content[dataIndex * 2 + 1];
        if (f(k)(v)) {
          datamap |= bit;
          data.push(k, v);
        }
      } else {
        var nodeIndex = index3(this.nodemap, bit);
        var node = this.content[this.content.length - nodeIndex - 1].filterWithKey(f);
        if (isEmpty2(node)) continue;
        if (node.isSingleton()) {
          datamap |= bit;
          data.push(node.content[0], node.content[1]);
        } else {
          nodemap |= bit;
          nodes.push(node);
        }
      }
    }
    return new MapNode(datamap, nodemap, data.concat(nodes.reverse()));
  };
  MapNode.prototype.travHelper = function() {
    function go(vi, vm2, ni, nm, copy) {
      if (vi < vm2)
        return function(v) {
          return go(vi + 1, vm2, ni, nm, function() {
            var res = copy();
            res.content[vi * 2 + 1] = v;
            return res;
          });
        };
      if (ni < nm)
        return function(n) {
          return go(vi, vm2, ni + 1, nm, function() {
            var res = copy();
            res.content[vm2 * 2 + ni] = n;
            return res;
          });
        };
      return copy();
    }
    var vm = popCount(this.datamap);
    var self = this;
    return go(0, vm, 0, this.content.length - vm * 2, function() {
      return new MapNode(self.datamap, self.nodemap, self.content.slice());
    });
  };
  MapNode.prototype.ifoldMap = function(m, mappend, f) {
    for (var i = 0; i < popCount(this.datamap) * 2; ) {
      var k = this.content[i++];
      var v = this.content[i++];
      m = mappend(m)(f(k)(v));
    }
    for (; i < this.content.length; i++)
      m = this.content[i].ifoldMap(m, mappend, f);
    return m;
  };
  MapNode.prototype.itraverse = function(pure4, apply3, f) {
    var m = pure4(this.travHelper());
    for (var i = 0; i < popCount(this.datamap) * 2; ) {
      var k = this.content[i++];
      var v = this.content[i++];
      m = apply3(m)(f(k)(v));
    }
    for (; i < this.content.length; i++)
      m = apply3(m)(this.content[i].itraverse(pure4, apply3, f));
    return m;
  };
  MapNode.prototype.any = function(predicate) {
    for (var i = 1; i < popCount(this.datamap) * 2; i = i + 2) {
      var v = this.content[i];
      if (predicate(v)) {
        return true;
      }
    }
    i--;
    for (; i < this.content.length; i++) {
      if (this.content[i].any(predicate)) {
        return true;
      }
    }
    return false;
  };
  function Collision(keys3, values) {
    this.keys = keys3;
    this.values = values;
  }
  Collision.prototype.lookup = function collisionLookup(Nothing2, Just2, keyEquals, key, keyHash, shift) {
    for (var i = 0; i < this.keys.length; i++)
      if (keyEquals(key)(this.keys[i]))
        return Just2(this.values[i]);
    return Nothing2;
  };
  Collision.prototype.insert = function collisionInsert(keyEquals, hashFunction, key, keyHash, value2, shift) {
    var i = 0;
    for (; i < this.keys.length; i++)
      if (keyEquals(key)(this.keys[i]))
        break;
    return new Collision(
      copyAndOverwriteOrExtend1(this.keys, i, key),
      copyAndOverwriteOrExtend1(this.values, i, value2)
    );
  };
  Collision.prototype.insertMut = function collisionInsertMut(keyEquals, hashFunction, key, keyHash, value2, shift) {
    var i = 0;
    for (; i < this.keys.length; i++)
      if (keyEquals(key)(this.keys[i]))
        break;
    this.keys[i] = key;
    this.values[i] = value2;
  };
  Collision.prototype.insertWith = function collisionInsert2(keyEquals, hashFunction, f, key, keyHash, value2, shift) {
    var i = 0;
    for (; i < this.keys.length; i++)
      if (keyEquals(key)(this.keys[i]))
        return new Collision(
          copyAndOverwriteOrExtend1(this.keys, i, key),
          copyAndOverwriteOrExtend1(this.values, i, f(this.values[i])(value2))
        );
    return new Collision(
      copyAndOverwriteOrExtend1(this.keys, i, key),
      copyAndOverwriteOrExtend1(this.values, i, value2)
    );
  };
  Collision.prototype.delet = function collisionDelete(keyEquals, key, keyHash, shift) {
    var i = 0;
    for (; i < this.keys.length; i++)
      if (keyEquals(key)(this.keys[i]))
        break;
    if (i === this.keys.length) return this;
    if (this.keys.length === 2)
      return new MapNode(1 << (keyHash & 31), 0, [this.keys[1 - i], this.values[1 - i]]);
    return new Collision(remove1(this.keys, i), remove1(this.values, i));
  };
  Collision.prototype.toArrayBy = function(f, res) {
    for (var i = 0; i < this.keys.length; i++)
      res.push(f(this.keys[i])(this.values[i]));
  };
  Collision.prototype.isSingleton = function() {
    return false;
  };
  Collision.prototype.eq = function(kf, vf, that) {
    if (this.constructor !== that.constructor || this.keys.length !== that.keys.length) return false;
    outer:
      for (var i = 0; i < this.keys.length; i++) {
        for (var j = 0; j < that.keys.length; j++) {
          if (kf(this.keys[i])(that.keys[j])) {
            if (vf(this.values[i])(that.values[j]))
              continue outer;
            else
              return false;
          }
        }
      }
    return true;
  };
  Collision.prototype.hash = function(vhash) {
    var h = 0;
    for (var i = 0; i < this.values.length; i++)
      h += vhash(this.values[i]);
    return h;
  };
  Collision.prototype.size = function() {
    return this.keys.length;
  };
  Collision.prototype.imap = function(f) {
    var newValues = this.values.slice();
    for (var i = 0; i < this.values.length; i++)
      newValues[i] = f(this.keys[i])(this.values[i]);
    return new Collision(this.keys, newValues);
  };
  Collision.prototype.ifoldMap = function(m, mappend, f) {
    for (var i = 0; i < this.keys.length; i++)
      m = mappend(m)(f(this.keys[i])(this.values[i]));
    return m;
  };
  Collision.prototype.travHelper = function() {
    function go(i, m, copy) {
      if (i < m)
        return function(v) {
          return go(i + 1, m, function() {
            var res = copy();
            res.values[i] = v;
            return res;
          });
        };
      return copy();
    }
    var self = this;
    return go(0, this.keys.length, function() {
      return new Collision(self.keys, self.values.slice());
    });
  };
  Collision.prototype.itraverse = function(pure4, apply3, f) {
    var m = pure4(this.travHelper());
    for (var i = 0; i < this.keys.length; i++)
      m = apply3(m)(f(this.keys[i])(this.values[i]));
    return m;
  };
  Collision.prototype.unionWith = function(eq6, hash2, f, that, shift) {
    if (that.constructor !== Collision)
      throw "Trying to union a Collision with something else";
    var keys3 = [];
    var values = [];
    var added = Array(that.keys.length).fill(false);
    outer:
      for (var i = 0; i < this.keys.length; i++) {
        for (var j = 0; j < that.keys.length; j++) {
          if (eq6(this.keys[i])(that.keys[j])) {
            keys3.push(this.keys[i]);
            values.push(f(this.values[i])(that.values[j]));
            added[j] = true;
            continue outer;
          }
        }
        keys3.push(this.keys[i]);
        values.push(this.values[i]);
        added[j] = true;
      }
    for (var k = 0; k < that.keys.length; k++) {
      if (!added[k]) {
        keys3.push(that.keys[k]);
        values.push(that.values[k]);
      }
    }
    return new Collision(keys3, values);
  };
  Collision.prototype.intersectionWith = function(Nothing2, Just2, eq6, hash2, f, that, shift) {
    if (that.constructor !== Collision)
      throw "Trying to intersect a Collision with something else";
    var keys3 = [];
    var values = [];
    outer:
      for (var i = 0; i < this.keys.length; i++) {
        for (var j = 0; j < that.keys.length; j++) {
          if (eq6(this.keys[i])(that.keys[j])) {
            keys3.push(this.keys[i]);
            values.push(f(this.values[i])(that.values[j]));
            continue outer;
          }
        }
      }
    if (keys3.length === 0)
      return empty4;
    if (keys3.length === 1)
      return new MapNode(1, 0, [keys3[0], values[0]]);
    return new Collision(keys3, values);
  };
  Collision.prototype.filterWithKey = function collisionFilterWithKey(f) {
    var keys3 = [];
    var values = [];
    for (var i = 0; i < this.keys.length; i++) {
      var k = this.keys[i];
      var v = this.values[i];
      if (f(k)(v)) {
        keys3.push(k);
        values.push(v);
      }
    }
    if (keys3.length === 0) return empty4;
    if (keys3.length === 1) return new MapNode(1, 0, [keys3[0], values[0]]);
    return new Collision(keys3, values);
  };
  Collision.prototype.any = function(predicate) {
    for (var i = 0; i < this.keys.length; i++) {
      if (predicate(this.values[i])) {
        return true;
      }
    }
    return false;
  };
  function mask(keyHash, shift) {
    return 1 << (keyHash >>> shift & 31);
  }
  function index3(map10, bit) {
    return popCount(map10 & bit - 1);
  }
  function popCount(n) {
    n = n - (n >> 1 & 1431655765);
    n = (n & 858993459) + (n >> 2 & 858993459);
    return (n + (n >> 4) & 252645135) * 16843009 >> 24;
  }
  function binaryNode(k1, kh1, v1, k2, kh2, v2, s) {
    if (s >= 32) return new Collision([k1, k2], [v1, v2]);
    var b1 = kh1 >>> s & 31;
    var b2 = kh2 >>> s & 31;
    if (b1 !== b2) return new MapNode(1 << b1 | 1 << b2, 0, b1 >>> 0 < b2 >>> 0 ? [k1, v1, k2, v2] : [k2, v2, k1, v1]);
    return new MapNode(0, 1 << b1, [binaryNode(k1, kh1, v1, k2, kh2, v2, s + 5)]);
  }
  function overwriteTwoElements(a, index4, v1, v2) {
    var res = a.slice();
    res[index4] = v1;
    res[index4 + 1] = v2;
    return res;
  }
  function remove2(a, index4) {
    var res = a.slice();
    res.splice(index4, 2);
    return res;
  }
  function remove1(a, index4) {
    var res = a.slice();
    res.splice(index4, 1);
    return res;
  }
  function copyAndOverwriteOrExtend1(a, index4, v) {
    var res = a.slice();
    res[index4] = v;
    return res;
  }
  function remove2insert1(a, removeIndex, insertIndex, v1) {
    var res = new Array(a.length - 1);
    for (var i = 0; i < removeIndex; i++) res[i] = a[i];
    for (; i < insertIndex; i++) res[i] = a[i + 2];
    res[i++] = v1;
    for (; i < res.length; i++) res[i] = a[i + 1];
    return res;
  }
  function insert22(a, index4, v1, v2) {
    var res = new Array(a.length + 2);
    for (var i = 0; i < index4; i++) res[i] = a[i];
    res[i++] = v1;
    res[i++] = v2;
    for (; i < res.length; i++) res[i] = a[i - 2];
    return res;
  }
  function insert2remove1(a, insertIndex, v1, v2, removeIndex) {
    var res = new Array(a.length + 1);
    for (var i = 0; i < insertIndex; i++) res[i] = a[i];
    res[i++] = v1;
    res[i++] = v2;
    for (; i < removeIndex + 2; i++) res[i] = a[i - 2];
    for (; i < res.length; i++) res[i] = a[i - 1];
    return res;
  }
  var empty4 = new MapNode(0, 0, []);
  function lookupPurs(Nothing2, Just2, keyEquals, key, keyHash) {
    return function(m) {
      return m.lookup(Nothing2, Just2, keyEquals, key, keyHash, 0);
    };
  }
  function insertPurs(keyEquals, hashFunction) {
    return function(key) {
      return function(value2) {
        return function(m) {
          return m.insert(keyEquals, hashFunction, key, hashFunction(key), value2, 0);
        };
      };
    };
  }
  function isEmpty2(m) {
    return m.datamap === 0 && m.nodemap === 0;
  }

  // output/Data.Hashable/foreign.js
  function hashString(s) {
    var h = 0;
    for (var i = 0; i < s.length; i++) {
      h = 31 * h + s.charCodeAt(i) | 0;
    }
    return h;
  }

  // output/Data.Hashable/index.js
  var hashableString = {
    hash: hashString,
    Eq0: function() {
      return eqString;
    }
  };
  var hash = function(dict) {
    return dict.hash;
  };

  // output/Data.HashMap/index.js
  var lookup3 = function(dictHashable) {
    var eq6 = eq(dictHashable.Eq0());
    var hash2 = hash(dictHashable);
    return function(k) {
      return lookupPurs(Nothing.value, Just.create, eq6, k, hash2(k));
    };
  };
  var insert6 = function(dictHashable) {
    return insertPurs(eq(dictHashable.Eq0()), hash(dictHashable));
  };

  // output/Effect.Now/foreign.js
  function now() {
    return Date.now();
  }

  // output/Data.DateTime.Instant/foreign.js
  var createDateTime = function(y, m, d, h, mi, s, ms) {
    var dateTime = new Date(Date.UTC(y, m, d, h, mi, s, ms));
    if (y >= 0 && y < 100) {
      dateTime.setUTCFullYear(y);
    }
    return dateTime;
  };
  function fromDateTimeImpl(y, mo, d, h, mi, s, ms) {
    return createDateTime(y, mo - 1, d, h, mi, s, ms).getTime();
  }
  function toDateTimeImpl(ctor) {
    return function(instant) {
      var dt = new Date(instant);
      return ctor(dt.getUTCFullYear())(dt.getUTCMonth() + 1)(dt.getUTCDate())(dt.getUTCHours())(dt.getUTCMinutes())(dt.getUTCSeconds())(dt.getUTCMilliseconds());
    };
  }

  // output/Data.DateTime.Instant/index.js
  var fromJust6 = /* @__PURE__ */ fromJust();
  var toEnum7 = /* @__PURE__ */ toEnum(boundedEnumMonth);
  var fromEnum7 = /* @__PURE__ */ fromEnum(boundedEnumMonth);
  var unInstant = function(v) {
    return v;
  };
  var toDateTime = /* @__PURE__ */ function() {
    var mkDateTime = function(y) {
      return function(mo) {
        return function(d) {
          return function(h) {
            return function(mi) {
              return function(s) {
                return function(ms) {
                  return new DateTime(canonicalDate(y)(fromJust6(toEnum7(mo)))(d), new Time(h, mi, s, ms));
                };
              };
            };
          };
        };
      };
    };
    return toDateTimeImpl(mkDateTime);
  }();
  var fromDateTime = function(v) {
    return fromDateTimeImpl(year(v.value0), fromEnum7(month(v.value0)), day(v.value0), hour(v.value1), minute(v.value1), second(v.value1), millisecond(v.value1));
  };

  // output/Effect.Now/index.js
  var map7 = /* @__PURE__ */ map(functorEffect);
  var nowDateTime = /* @__PURE__ */ map7(toDateTime)(now);
  var nowDate = /* @__PURE__ */ map7(function($3) {
    return date(toDateTime($3));
  })(now);

  // output/Model/index.js
  var lookup4 = /* @__PURE__ */ lookup3(hashableString);
  var adjust2 = /* @__PURE__ */ adjust(durationDays);
  var StartBudget = /* @__PURE__ */ function() {
    function StartBudget2() {
    }
    ;
    StartBudget2.value = new StartBudget2();
    return StartBudget2;
  }();
  var SetInput = /* @__PURE__ */ function() {
    function SetInput2(value0, value1) {
      this.value0 = value0;
      this.value1 = value1;
    }
    ;
    SetInput2.create = function(value0) {
      return function(value1) {
        return new SetInput2(value0, value1);
      };
    };
    return SetInput2;
  }();
  var Spend = /* @__PURE__ */ function() {
    function Spend2() {
    }
    ;
    Spend2.value = new Spend2();
    return Spend2;
  }();
  var tagInput = /* @__PURE__ */ function() {
    return $$Proxy.value;
  }();
  var setInput = function(dictIsSymbol) {
    var reflectSymbol2 = reflectSymbol(dictIsSymbol);
    return function() {
      return function(p) {
        return SetInput.create(reflectSymbol2(p));
      };
    };
  };
  var maxBudgetInput = /* @__PURE__ */ function() {
    return $$Proxy.value;
  }();
  var lookupInput = function(dictIsSymbol) {
    var reflectSymbol2 = reflectSymbol(dictIsSymbol);
    return function(p) {
      return lookup4(reflectSymbol2(p));
    };
  };
  var init3 = /* @__PURE__ */ function() {
    var today = unsafePerformEffect(nowDateTime);
    var yesterday = fromMaybe(today)(adjust2(-1)(today));
    var beforeYesterday = fromMaybe(today)(adjust2(-2)(today));
    return {
      budgets: Nil.value,
      inputs: empty4
    };
  }();
  var daysInput = /* @__PURE__ */ function() {
    return $$Proxy.value;
  }();
  var amountInput = /* @__PURE__ */ function() {
    return $$Proxy.value;
  }();

  // output/Update/index.js
  var insert7 = /* @__PURE__ */ insert6(hashableString);
  var bind3 = /* @__PURE__ */ bind(bindMaybe);
  var lookupInput2 = /* @__PURE__ */ lookupInput({
    reflectSymbol: function() {
      return "max";
    }
  });
  var lookupInput1 = /* @__PURE__ */ lookupInput({
    reflectSymbol: function() {
      return "days";
    }
  });
  var lookupInput22 = /* @__PURE__ */ lookupInput({
    reflectSymbol: function() {
      return "amount";
    }
  });
  var lookupInput3 = /* @__PURE__ */ lookupInput({
    reflectSymbol: function() {
      return "tag";
    }
  });
  var updateInputs = function(field) {
    return function(value2) {
      return function(model) {
        return {
          budgets: model.budgets,
          inputs: insert7(field)(value2)(model.inputs)
        };
      };
    };
  };
  var startBudget = function(model) {
    var newBudget = function() {
      var m = fromMaybe(0)(bind3(lookupInput2(maxBudgetInput)(model.inputs))(fromString));
      var d = fromMaybe(0)(bind3(lookupInput1(daysInput)(model.inputs))(fromString2));
      return {
        max: m,
        days: d,
        start: unsafePerformEffect(nowDateTime),
        expenses: Nil.value
      };
    }();
    return {
      budgets: new Cons(newBudget, model.budgets),
      inputs: empty4
    };
  };
  var spend = function(model) {
    var addExpense = function(budget) {
      var newExpense = {
        amount: fromMaybe(0)(bind3(lookupInput22(amountInput)(model.inputs))(fromString)),
        tag: lookupInput3(tagInput)(model.inputs),
        time: unsafePerformEffect(nowDateTime)
      };
      return {
        days: budget.days,
        max: budget.max,
        start: budget.start,
        expenses: new Cons(newExpense, budget.expenses)
      };
    };
    return {
      budgets: function() {
        if (model.budgets instanceof Cons) {
          return new Cons(addExpense(model.budgets.value0), model.budgets.value1);
        }
        ;
        if (model.budgets instanceof Nil) {
          return model.budgets;
        }
        ;
        throw new Error("Failed pattern match at Update (line 49, column 19 - line 51, column 34): " + [model.budgets.constructor.name]);
      }(),
      inputs: empty4
    };
  };
  var update = function(model) {
    return function(v) {
      if (v instanceof SetInput) {
        return new Tuple(updateInputs(v.value0)(v.value1)(model), []);
      }
      ;
      if (v instanceof StartBudget) {
        return new Tuple(startBudget(model), []);
      }
      ;
      if (v instanceof Spend) {
        return new Tuple(spend(model), []);
      }
      ;
      throw new Error("Failed pattern match at Update (line 20, column 16 - line 23, column 32): " + [v.constructor.name]);
    };
  };

  // output/View/foreign.js
  var localDateFormat = new Intl.DateTimeFormat([], { dateStyle: "short", hourCycle: "h23" });
  var localWeekDayFormat = new Intl.DateTimeFormat([], { weekday: "short", hourCycle: "h23" });
  var localTimeFormat = new Intl.DateTimeFormat([], { timeStyle: "short", hourCycle: "h23" });
  function formatTime(ms) {
    return localTimeFormat.format(new Date(ms));
  }

  // output/Flame.Html.Event/foreign.js
  var messageEventData = 5;
  var rawEventData = 6;
  function createEvent_(name2) {
    return function(message2) {
      return [messageEventData, name2, message2];
    };
  }
  function createRawEvent_(name2) {
    return function(handler) {
      return [rawEventData, name2, handler];
    };
  }
  function nodeValue_(event) {
    if (event.target.contentEditable === true || event.target.contentEditable === "true" || event.target.contentEditable === "")
      return event.target.innerText;
    return event.target.value;
  }

  // output/Flame.Html.Event/index.js
  var map8 = /* @__PURE__ */ map(functorEffect);
  var nodeValue = /* @__PURE__ */ runEffectFn1(nodeValue_);
  var createRawEvent = function(name2) {
    return function(handler) {
      return createRawEvent_(name2)(handler);
    };
  };
  var onInput = function(constructor) {
    var handler = function(event) {
      return map8(function($6) {
        return Just.create(constructor($6));
      })(nodeValue(event));
    };
    return createRawEvent("input")(handler);
  };
  var createEvent = function(name2) {
    return function(message2) {
      return createEvent_(name2)(message2);
    };
  };
  var onClick = /* @__PURE__ */ createEvent("click");

  // output/Flame.Native.Attribute.Internal/foreign.js
  var propertyData3 = 3;
  function createProperty2(name2) {
    return function(value2) {
      return [propertyData3, name2, value2];
    };
  }

  // output/Flame.Native.Attribute.Internal/index.js
  var keyboardType = /* @__PURE__ */ createProperty2("keyboardType");

  // output/Target.Resource/index.js
  var logoSmall = "./static/image/logo_small.png";

  // output/Target.Style/index.js
  var create = function(a) {
    return a;
  };

  // output/View/index.js
  var notEq2 = /* @__PURE__ */ notEq(/* @__PURE__ */ eqMaybe(eqNumber));
  var bind4 = /* @__PURE__ */ bind(bindMaybe);
  var toNodeArray2 = /* @__PURE__ */ toNodeArray(toNodeHtmlHtml);
  var div_2 = /* @__PURE__ */ div_(toNodeArray2);
  var label2 = /* @__PURE__ */ label(toNodeNodeDataNodeData)(toNodeStringHtml);
  var input2 = /* @__PURE__ */ input(/* @__PURE__ */ toNodeArray(toNodeNodeDataNodeData));
  var style2 = /* @__PURE__ */ style(/* @__PURE__ */ toStyleListRecord());
  var maxIsSymbol = {
    reflectSymbol: function() {
      return "max";
    }
  };
  var setInput2 = /* @__PURE__ */ setInput(maxIsSymbol)();
  var daysIsSymbol = {
    reflectSymbol: function() {
      return "days";
    }
  };
  var setInput1 = /* @__PURE__ */ setInput(daysIsSymbol)();
  var foldl2 = /* @__PURE__ */ foldl(foldableList);
  var unwrap2 = /* @__PURE__ */ unwrap();
  var tr_2 = /* @__PURE__ */ tr_(toNodeArray2);
  var td_2 = /* @__PURE__ */ td_(toNodeStringHtml);
  var show3 = /* @__PURE__ */ show(showNumber);
  var eq5 = /* @__PURE__ */ eq(eqDate);
  var diff2 = /* @__PURE__ */ diff(durationDays);
  var show1 = /* @__PURE__ */ show(showInt);
  var label_2 = /* @__PURE__ */ label_(toNodeStringHtml);
  var amountIsSymbol = {
    reflectSymbol: function() {
      return "amount";
    }
  };
  var setInput22 = /* @__PURE__ */ setInput(amountIsSymbol)();
  var setInput3 = /* @__PURE__ */ setInput({
    reflectSymbol: function() {
      return "tag";
    }
  })();
  var table_2 = /* @__PURE__ */ table_(toNodeArray2);
  var append1 = /* @__PURE__ */ append(semigroupArray);
  var toUnfoldable7 = /* @__PURE__ */ toUnfoldable4(unfoldableArray);
  var map9 = /* @__PURE__ */ map(functorList);
  var img2 = /* @__PURE__ */ img(toNodeNodeDataNodeData);
  var styles = /* @__PURE__ */ create({
    input: {
      borderRadius: "5px",
      border: "1px solid gray",
      padding: "5px"
    },
    button: {
      color: "white",
      backgroundColor: "#008e4b",
      borderRadius: "5px",
      border: "1px solid gray",
      padding: "5px"
    }
  });
  var isNumber = function(dictIsSymbol) {
    var lookupInput4 = lookupInput(dictIsSymbol);
    return function(inputs) {
      return function(p) {
        return notEq2(bind4(lookupInput4(p)(inputs))(fromString))(Nothing.value);
      };
    };
  };
  var isNumber1 = /* @__PURE__ */ isNumber(maxIsSymbol);
  var isNumber2 = /* @__PURE__ */ isNumber(daysIsSymbol);
  var isNumber3 = /* @__PURE__ */ isNumber(amountIsSymbol);
  var inputValue = function(dictIsSymbol) {
    var lookupInput4 = lookupInput(dictIsSymbol);
    return function(p) {
      return function(inputs) {
        return fromMaybe("")(lookupInput4(p)(inputs));
      };
    };
  };
  var inputValue1 = /* @__PURE__ */ inputValue(maxIsSymbol);
  var inputValue2 = /* @__PURE__ */ inputValue(daysIsSymbol);
  var inputValue3 = /* @__PURE__ */ inputValue(amountIsSymbol);
  var newBudgetForm = function(inputs) {
    return div_2([label2($$for("max-budget"))("Max budget"), input2([id("max-budget"), style2(styles.input), type$prime("text"), keyboardType("numeric"), onInput(setInput2(maxBudgetInput)), value(inputValue1(maxBudgetInput)(inputs))]), label2($$for("days"))("Days"), input2([id("days"), style2(styles.input), keyboardType("numeric"), type$prime("text"), onInput(setInput1(daysInput)), value(inputValue2(daysInput)(inputs))]), input2([type$prime("button"), style2(styles.button), disabled(!isNumber1(inputs)(maxBudgetInput) || !isNumber2(inputs)(daysInput)), value("Start"), onClick(StartBudget.value)])]);
  };
  var currentBudgetForm = function(inputs) {
    return function(budget) {
      var totalExpenses = foldl2(function(c) {
        return function(e) {
          return c + e.amount;
        };
      })(0)(budget.expenses);
      var today = unsafePerformEffect(nowDate);
      var showHour2 = function(dt) {
        return formatTime(unwrap2(unInstant(fromDateTime(dt))));
      };
      var listExpenses = function(expense) {
        return tr_2([td_2(show3(expense.amount)), td_2(fromMaybe("")(expense.tag)), td_2(showHour2(expense.time))]);
      };
      var isToday = function(v) {
        return eq5(v.value0)(today);
      };
      var todaysExpenses = filter2(function(e) {
        return isToday(e.time);
      })(budget.expenses);
      var daysElapsed = floor(unwrap2(diff2(today)(date(budget.start))));
      var remaining = budget.max / toNumber(budget.days) * (daysElapsed + 1) - totalExpenses;
      return div_2([text("Max budget: " + show3(budget.max)), text("Days: " + show1(budget.days)), text("Todays' budget " + show3(remaining)), br, label_2("Amount"), input2([keyboardType("numeric"), style2(styles.input), type$prime("text"), onInput(setInput22(amountInput)), value(inputValue3(amountInput)(inputs))]), label_2("Tag"), input2([type$prime("text"), style2(styles.input), onInput(setInput3(tagInput))]), input2([type$prime("button"), style2(styles.button), disabled(!isNumber3(inputs)(amountInput)), value("Add"), onClick(Spend.value)]), table_2(append1([tr_2([td_2("Amount"), td_2("Tag"), td_2("Time")])])(toUnfoldable7(map9(listExpenses)(todaysExpenses))))]);
    };
  };
  var view = function(model) {
    return div_2([img2(src(logoSmall)), function() {
      if (model.budgets instanceof Nil) {
        return newBudgetForm(model.inputs);
      }
      ;
      if (model.budgets instanceof Cons) {
        return currentBudgetForm(model.inputs)(model.budgets.value0);
      }
      ;
      throw new Error("Failed pattern match at View (line 45, column 9 - line 47, column 58): " + [model.budgets.constructor.name]);
    }()]);
  };

  // output/Main/index.js
  var main = /* @__PURE__ */ function() {
    return mount(showString)("#app")("monies")({
      init: new Tuple(init3, []),
      subscribe: [],
      update,
      view
    });
  }();

  // <stdin>
  main();
})();
