(() => {"use strict";
var b = (h, u) => () => (u || h((u = { exports: {} }).exports, u), u.exports);
var J = b((pf, Gr) => {
  var vt = function (h) {
    return h && h.Math == Math && h;
  };
  Gr.exports =
    vt(typeof globalThis == "object" && globalThis) ||
    vt(typeof window == "object" && window) ||
    vt(typeof self == "object" && self) ||
    vt(typeof global == "object" && global) ||
    (function () {
      return this;
    })() ||
    Function("return this")();
});
var be = b((ff, Xr) => {
  Xr.exports = function (h) {
    try {
      return !!h();
    } catch {
      return !0;
    }
  };
});
var Me = b((df, Jr) => {
  var Yh = be();
  Jr.exports = !Yh(function () {
    return (
      Object.defineProperty({}, 1, {
        get: function () {
          return 7;
        },
      })[1] != 7
    );
  });
});
var St = b((mf, Yr) => {
  var $h = be();
  Yr.exports = !$h(function () {
    var h = function () {}.bind();
    return typeof h != "function" || h.hasOwnProperty("prototype");
  });
});
var Nt = b((yf, $r) => {
  var Qh = St(),
    wt = Function.prototype.call;
  $r.exports = Qh
    ? wt.bind(wt)
    : function () {
        return wt.apply(wt, arguments);
      };
});
var ti = b((ei) => {
  "use strict";
  var Qr = {}.propertyIsEnumerable,
    Zr = Object.getOwnPropertyDescriptor,
    Zh = Zr && !Qr.call({ 1: 2 }, 1);
  ei.f = Zh
    ? function (u) {
        var p = Zr(this, u);
        return !!p && p.enumerable;
      }
    : Qr;
});
var ds = b((gf, si) => {
  si.exports = function (h, u) {
    return {
      enumerable: !(h & 1),
      configurable: !(h & 2),
      writable: !(h & 4),
      value: u,
    };
  };
});
var le = b((Af, ai) => {
  var ri = St(),
    ii = Function.prototype,
    el = ii.bind,
    ms = ii.call,
    tl = ri && el.bind(ms, ms);
  ai.exports = ri
    ? function (h) {
        return h && tl(h);
      }
    : function (h) {
        return (
          h &&
          function () {
            return ms.apply(h, arguments);
          }
        );
      };
});
var It = b((Pf, oi) => {
  var ni = le(),
    sl = ni({}.toString),
    rl = ni("".slice);
  oi.exports = function (h) {
    return rl(sl(h), 8, -1);
  };
});
var li = b((Tf, hi) => {
  var il = J(),
    al = le(),
    nl = be(),
    ol = It(),
    ys = il.Object,
    hl = al("".split);
  hi.exports = nl(function () {
    return !ys("z").propertyIsEnumerable(0);
  })
    ? function (h) {
        return ol(h) == "String" ? hl(h, "") : ys(h);
      }
    : ys;
});
var xs = b((Ef, ui) => {
  var ll = J(),
    ul = ll.TypeError;
  ui.exports = function (h) {
    if (h == null) throw ul("Can't call method on " + h);
    return h;
  };
});
var kt = b((bf, ci) => {
  var cl = li(),
    pl = xs();
  ci.exports = function (h) {
    return cl(pl(h));
  };
});
var ue = b((Cf, pi) => {
  pi.exports = function (h) {
    return typeof h == "function";
  };
});
var Re = b((vf, fi) => {
  var fl = ue();
  fi.exports = function (h) {
    return typeof h == "object" ? h !== null : fl(h);
  };
});
var rt = b((Sf, di) => {
  var gs = J(),
    dl = ue(),
    ml = function (h) {
      return dl(h) ? h : void 0;
    };
  di.exports = function (h, u) {
    return arguments.length < 2 ? ml(gs[h]) : gs[h] && gs[h][u];
  };
});
var yi = b((wf, mi) => {
  var yl = le();
  mi.exports = yl({}.isPrototypeOf);
});
var gi = b((Nf, xi) => {
  var xl = rt();
  xi.exports = xl("navigator", "userAgent") || "";
});
var vi = b((If, Ci) => {
  var bi = J(),
    As = gi(),
    Ai = bi.process,
    Pi = bi.Deno,
    Ti = (Ai && Ai.versions) || (Pi && Pi.version),
    Ei = Ti && Ti.v8,
    fe,
    Dt;
  Ei &&
    ((fe = Ei.split(".")),
    (Dt = fe[0] > 0 && fe[0] < 4 ? 1 : +(fe[0] + fe[1])));
  !Dt &&
    As &&
    ((fe = As.match(/Edge\/(\d+)/)),
    (!fe || fe[1] >= 74) &&
      ((fe = As.match(/Chrome\/(\d+)/)), fe && (Dt = +fe[1])));
  Ci.exports = Dt;
});
var Ps = b((kf, wi) => {
  var Si = vi(),
    gl = be();
  wi.exports =
    !!Object.getOwnPropertySymbols &&
    !gl(function () {
      var h = Symbol();
      return (
        !String(h) ||
        !(Object(h) instanceof Symbol) ||
        (!Symbol.sham && Si && Si < 41)
      );
    });
});
var Ts = b((Df, Ni) => {
  var Al = Ps();
  Ni.exports = Al && !Symbol.sham && typeof Symbol.iterator == "symbol";
});
var Es = b((Ff, Ii) => {
  var Pl = J(),
    Tl = rt(),
    El = ue(),
    bl = yi(),
    Cl = Ts(),
    vl = Pl.Object;
  Ii.exports = Cl
    ? function (h) {
        return typeof h == "symbol";
      }
    : function (h) {
        var u = Tl("Symbol");
        return El(u) && bl(u.prototype, vl(h));
      };
});
var Di = b((Lf, ki) => {
  var Sl = J(),
    wl = Sl.String;
  ki.exports = function (h) {
    try {
      return wl(h);
    } catch {
      return "Object";
    }
  };
});
var Ft = b((Of, Fi) => {
  var Nl = J(),
    Il = ue(),
    kl = Di(),
    Dl = Nl.TypeError;
  Fi.exports = function (h) {
    if (Il(h)) return h;
    throw Dl(kl(h) + " is not a function");
  };
});
var Oi = b((Bf, Li) => {
  var Fl = Ft();
  Li.exports = function (h, u) {
    var p = h[u];
    return p == null ? void 0 : Fl(p);
  };
});
var Mi = b((Mf, Bi) => {
  var Ll = J(),
    bs = Nt(),
    Cs = ue(),
    vs = Re(),
    Ol = Ll.TypeError;
  Bi.exports = function (h, u) {
    var p, d;
    if (
      (u === "string" && Cs((p = h.toString)) && !vs((d = bs(p, h)))) ||
      (Cs((p = h.valueOf)) && !vs((d = bs(p, h)))) ||
      (u !== "string" && Cs((p = h.toString)) && !vs((d = bs(p, h))))
    )
      return d;
    throw Ol("Can't convert object to primitive value");
  };
});
var ji = b((Rf, Ri) => {
  Ri.exports = !1;
});
var Lt = b((jf, Ui) => {
  var qi = J(),
    Bl = Object.defineProperty;
  Ui.exports = function (h, u) {
    try {
      Bl(qi, h, { value: u, configurable: !0, writable: !0 });
    } catch {
      qi[h] = u;
    }
    return u;
  };
});
var Ot = b((qf, zi) => {
  var Ml = J(),
    Rl = Lt(),
    _i = "__core-js_shared__",
    jl = Ml[_i] || Rl(_i, {});
  zi.exports = jl;
});
var Ss = b((Uf, Vi) => {
  var ql = ji(),
    Ki = Ot();
  (Vi.exports = function (h, u) {
    return Ki[h] || (Ki[h] = u !== void 0 ? u : {});
  })("versions", []).push({
    version: "3.22.2",
    mode: ql ? "pure" : "global",
    copyright: "\xA9 2014-2022 Denis Pushkarev (zloirock.ru)",
    license: "https://github.com/zloirock/core-js/blob/v3.22.2/LICENSE",
    source: "https://github.com/zloirock/core-js",
  });
});
var ws = b((_f, Hi) => {
  var Ul = J(),
    _l = xs(),
    zl = Ul.Object;
  Hi.exports = function (h) {
    return zl(_l(h));
  };
});
var Ie = b((zf, Wi) => {
  var Kl = le(),
    Vl = ws(),
    Hl = Kl({}.hasOwnProperty);
  Wi.exports =
    Object.hasOwn ||
    function (u, p) {
      return Hl(Vl(u), p);
    };
});
var Ns = b((Kf, Gi) => {
  var Wl = le(),
    Gl = 0,
    Xl = Math.random(),
    Jl = Wl((1).toString);
  Gi.exports = function (h) {
    return "Symbol(" + (h === void 0 ? "" : h) + ")_" + Jl(++Gl + Xl, 36);
  };
});
var it = b((Vf, Qi) => {
  var Yl = J(),
    $l = Ss(),
    Xi = Ie(),
    Ql = Ns(),
    Ji = Ps(),
    $i = Ts(),
    Xe = $l("wks"),
    je = Yl.Symbol,
    Yi = je && je.for,
    Zl = $i ? je : (je && je.withoutSetter) || Ql;
  Qi.exports = function (h) {
    if (!Xi(Xe, h) || !(Ji || typeof Xe[h] == "string")) {
      var u = "Symbol." + h;
      Ji && Xi(je, h)
        ? (Xe[h] = je[h])
        : $i && Yi
        ? (Xe[h] = Yi(u))
        : (Xe[h] = Zl(u));
    }
    return Xe[h];
  };
});
var sa = b((Hf, ta) => {
  var eu = J(),
    tu = Nt(),
    Zi = Re(),
    ea = Es(),
    su = Oi(),
    ru = Mi(),
    iu = it(),
    au = eu.TypeError,
    nu = iu("toPrimitive");
  ta.exports = function (h, u) {
    if (!Zi(h) || ea(h)) return h;
    var p = su(h, nu),
      d;
    if (p) {
      if ((u === void 0 && (u = "default"), (d = tu(p, h, u)), !Zi(d) || ea(d)))
        return d;
      throw au("Can't convert object to primitive value");
    }
    return u === void 0 && (u = "number"), ru(h, u);
  };
});
var Is = b((Wf, ra) => {
  var ou = sa(),
    hu = Es();
  ra.exports = function (h) {
    var u = ou(h, "string");
    return hu(u) ? u : u + "";
  };
});
var na = b((Gf, aa) => {
  var lu = J(),
    ia = Re(),
    ks = lu.document,
    uu = ia(ks) && ia(ks.createElement);
  aa.exports = function (h) {
    return uu ? ks.createElement(h) : {};
  };
});
var Ds = b((Xf, oa) => {
  var cu = Me(),
    pu = be(),
    fu = na();
  oa.exports =
    !cu &&
    !pu(function () {
      return (
        Object.defineProperty(fu("div"), "a", {
          get: function () {
            return 7;
          },
        }).a != 7
      );
    });
});
var Fs = b((la) => {
  var du = Me(),
    mu = Nt(),
    yu = ti(),
    xu = ds(),
    gu = kt(),
    Au = Is(),
    Pu = Ie(),
    Tu = Ds(),
    ha = Object.getOwnPropertyDescriptor;
  la.f = du
    ? ha
    : function (u, p) {
        if (((u = gu(u)), (p = Au(p)), Tu))
          try {
            return ha(u, p);
          } catch {}
        if (Pu(u, p)) return xu(!mu(yu.f, u, p), u[p]);
      };
});
var ca = b((Yf, ua) => {
  var Eu = Me(),
    bu = be();
  ua.exports =
    Eu &&
    bu(function () {
      return (
        Object.defineProperty(function () {}, "prototype", {
          value: 42,
          writable: !1,
        }).prototype != 42
      );
    });
});
var Ls = b(($f, fa) => {
  var pa = J(),
    Cu = Re(),
    vu = pa.String,
    Su = pa.TypeError;
  fa.exports = function (h) {
    if (Cu(h)) return h;
    throw Su(vu(h) + " is not an object");
  };
});
var js = b((ma) => {
  var wu = J(),
    Nu = Me(),
    Iu = Ds(),
    ku = ca(),
    Bt = Ls(),
    da = Is(),
    Du = wu.TypeError,
    Os = Object.defineProperty,
    Fu = Object.getOwnPropertyDescriptor,
    Bs = "enumerable",
    Ms = "configurable",
    Rs = "writable";
  ma.f = Nu
    ? ku
      ? function (u, p, d) {
          if (
            (Bt(u),
            (p = da(p)),
            Bt(d),
            typeof u == "function" &&
              p === "prototype" &&
              "value" in d &&
              Rs in d &&
              !d[Rs])
          ) {
            var m = Fu(u, p);
            m &&
              m[Rs] &&
              ((u[p] = d.value),
              (d = {
                configurable: Ms in d ? d[Ms] : m[Ms],
                enumerable: Bs in d ? d[Bs] : m[Bs],
                writable: !1,
              }));
          }
          return Os(u, p, d);
        }
      : Os
    : function (u, p, d) {
        if ((Bt(u), (p = da(p)), Bt(d), Iu))
          try {
            return Os(u, p, d);
          } catch {}
        if ("get" in d || "set" in d) throw Du("Accessors not supported");
        return "value" in d && (u[p] = d.value), u;
      };
});
var Mt = b((Zf, ya) => {
  var Lu = Me(),
    Ou = js(),
    Bu = ds();
  ya.exports = Lu
    ? function (h, u, p) {
        return Ou.f(h, u, Bu(1, p));
      }
    : function (h, u, p) {
        return (h[u] = p), h;
      };
});
var Rt = b((ed, xa) => {
  var Mu = le(),
    Ru = ue(),
    qs = Ot(),
    ju = Mu(Function.toString);
  Ru(qs.inspectSource) ||
    (qs.inspectSource = function (h) {
      return ju(h);
    });
  xa.exports = qs.inspectSource;
});
var Pa = b((td, Aa) => {
  var qu = J(),
    Uu = ue(),
    _u = Rt(),
    ga = qu.WeakMap;
  Aa.exports = Uu(ga) && /native code/.test(_u(ga));
});
var ba = b((sd, Ea) => {
  var zu = Ss(),
    Ku = Ns(),
    Ta = zu("keys");
  Ea.exports = function (h) {
    return Ta[h] || (Ta[h] = Ku(h));
  };
});
var Us = b((rd, Ca) => {
  Ca.exports = {};
});
var ka = b((id, Ia) => {
  var Vu = Pa(),
    Na = J(),
    _s = le(),
    Hu = Re(),
    Wu = Mt(),
    zs = Ie(),
    Ks = Ot(),
    Gu = ba(),
    Xu = Us(),
    va = "Object already initialized",
    Hs = Na.TypeError,
    Ju = Na.WeakMap,
    jt,
    at,
    qt,
    Yu = function (h) {
      return qt(h) ? at(h) : jt(h, {});
    },
    $u = function (h) {
      return function (u) {
        var p;
        if (!Hu(u) || (p = at(u)).type !== h)
          throw Hs("Incompatible receiver, " + h + " required");
        return p;
      };
    };
  Vu || Ks.state
    ? ((ke = Ks.state || (Ks.state = new Ju())),
      (Sa = _s(ke.get)),
      (Vs = _s(ke.has)),
      (wa = _s(ke.set)),
      (jt = function (h, u) {
        if (Vs(ke, h)) throw new Hs(va);
        return (u.facade = h), wa(ke, h, u), u;
      }),
      (at = function (h) {
        return Sa(ke, h) || {};
      }),
      (qt = function (h) {
        return Vs(ke, h);
      }))
    : ((qe = Gu("state")),
      (Xu[qe] = !0),
      (jt = function (h, u) {
        if (zs(h, qe)) throw new Hs(va);
        return (u.facade = h), Wu(h, qe, u), u;
      }),
      (at = function (h) {
        return zs(h, qe) ? h[qe] : {};
      }),
      (qt = function (h) {
        return zs(h, qe);
      }));
  var ke, Sa, Vs, wa, qe;
  Ia.exports = { set: jt, get: at, has: qt, enforce: Yu, getterFor: $u };
});
var La = b((ad, Fa) => {
  var Ws = Me(),
    Qu = Ie(),
    Da = Function.prototype,
    Zu = Ws && Object.getOwnPropertyDescriptor,
    Gs = Qu(Da, "name"),
    ec = Gs && function () {}.name === "something",
    tc = Gs && (!Ws || (Ws && Zu(Da, "name").configurable));
  Fa.exports = { EXISTS: Gs, PROPER: ec, CONFIGURABLE: tc };
});
var ja = b((nd, Ra) => {
  var sc = J(),
    Oa = ue(),
    rc = Ie(),
    Ba = Mt(),
    ic = Lt(),
    ac = Rt(),
    Ma = ka(),
    nc = La().CONFIGURABLE,
    oc = Ma.get,
    hc = Ma.enforce,
    lc = String(String).split("String");
  (Ra.exports = function (h, u, p, d) {
    var m = d ? !!d.unsafe : !1,
      x = d ? !!d.enumerable : !1,
      A = d ? !!d.noTargetGet : !1,
      g = d && d.name !== void 0 ? d.name : u,
      E;
    if (
      (Oa(p) &&
        (String(g).slice(0, 7) === "Symbol(" &&
          (g = "[" + String(g).replace(/^Symbol\(([^)]*)\)/, "$1") + "]"),
        (!rc(p, "name") || (nc && p.name !== g)) && Ba(p, "name", g),
        (E = hc(p)),
        E.source || (E.source = lc.join(typeof g == "string" ? g : ""))),
      h === sc)
    ) {
      x ? (h[u] = p) : ic(u, p);
      return;
    } else m ? !A && h[u] && (x = !0) : delete h[u];
    x ? (h[u] = p) : Ba(h, u, p);
  })(Function.prototype, "toString", function () {
    return (Oa(this) && oc(this).source) || ac(this);
  });
});
var Xs = b((od, qa) => {
  var uc = Math.ceil,
    cc = Math.floor;
  qa.exports = function (h) {
    var u = +h;
    return u !== u || u === 0 ? 0 : (u > 0 ? cc : uc)(u);
  };
});
var _a = b((hd, Ua) => {
  var pc = Xs(),
    fc = Math.max,
    dc = Math.min;
  Ua.exports = function (h, u) {
    var p = pc(h);
    return p < 0 ? fc(p + u, 0) : dc(p, u);
  };
});
var Ka = b((ld, za) => {
  var mc = Xs(),
    yc = Math.min;
  za.exports = function (h) {
    return h > 0 ? yc(mc(h), 9007199254740991) : 0;
  };
});
var Ut = b((ud, Va) => {
  var xc = Ka();
  Va.exports = function (h) {
    return xc(h.length);
  };
});
var Ga = b((cd, Wa) => {
  var gc = kt(),
    Ac = _a(),
    Pc = Ut(),
    Ha = function (h) {
      return function (u, p, d) {
        var m = gc(u),
          x = Pc(m),
          A = Ac(d, x),
          g;
        if (h && p != p) {
          for (; x > A; ) if (((g = m[A++]), g != g)) return !0;
        } else
          for (; x > A; A++)
            if ((h || A in m) && m[A] === p) return h || A || 0;
        return !h && -1;
      };
    };
  Wa.exports = { includes: Ha(!0), indexOf: Ha(!1) };
});
var Ya = b((pd, Ja) => {
  var Tc = le(),
    Js = Ie(),
    Ec = kt(),
    bc = Ga().indexOf,
    Cc = Us(),
    Xa = Tc([].push);
  Ja.exports = function (h, u) {
    var p = Ec(h),
      d = 0,
      m = [],
      x;
    for (x in p) !Js(Cc, x) && Js(p, x) && Xa(m, x);
    for (; u.length > d; ) Js(p, (x = u[d++])) && (~bc(m, x) || Xa(m, x));
    return m;
  };
});
var Qa = b((fd, $a) => {
  $a.exports = [
    "constructor",
    "hasOwnProperty",
    "isPrototypeOf",
    "propertyIsEnumerable",
    "toLocaleString",
    "toString",
    "valueOf",
  ];
});
var en = b((Za) => {
  var vc = Ya(),
    Sc = Qa(),
    wc = Sc.concat("length", "prototype");
  Za.f =
    Object.getOwnPropertyNames ||
    function (u) {
      return vc(u, wc);
    };
});
var sn = b((tn) => {
  tn.f = Object.getOwnPropertySymbols;
});
var an = b((yd, rn) => {
  var Nc = rt(),
    Ic = le(),
    kc = en(),
    Dc = sn(),
    Fc = Ls(),
    Lc = Ic([].concat);
  rn.exports =
    Nc("Reflect", "ownKeys") ||
    function (u) {
      var p = kc.f(Fc(u)),
        d = Dc.f;
      return d ? Lc(p, d(u)) : p;
    };
});
var hn = b((xd, on) => {
  var nn = Ie(),
    Oc = an(),
    Bc = Fs(),
    Mc = js();
  on.exports = function (h, u, p) {
    for (var d = Oc(u), m = Mc.f, x = Bc.f, A = 0; A < d.length; A++) {
      var g = d[A];
      !nn(h, g) && !(p && nn(p, g)) && m(h, g, x(u, g));
    }
  };
});
var un = b((gd, ln) => {
  var Rc = be(),
    jc = ue(),
    qc = /#|\.prototype\./,
    nt = function (h, u) {
      var p = _c[Uc(h)];
      return p == Kc ? !0 : p == zc ? !1 : jc(u) ? Rc(u) : !!u;
    },
    Uc = (nt.normalize = function (h) {
      return String(h).replace(qc, ".").toLowerCase();
    }),
    _c = (nt.data = {}),
    zc = (nt.NATIVE = "N"),
    Kc = (nt.POLYFILL = "P");
  ln.exports = nt;
});
var $s = b((Ad, cn) => {
  var Ys = J(),
    Vc = Fs().f,
    Hc = Mt(),
    Wc = ja(),
    Gc = Lt(),
    Xc = hn(),
    Jc = un();
  cn.exports = function (h, u) {
    var p = h.target,
      d = h.global,
      m = h.stat,
      x,
      A,
      g,
      E,
      F,
      D;
    if (
      (d
        ? (A = Ys)
        : m
        ? (A = Ys[p] || Gc(p, {}))
        : (A = (Ys[p] || {}).prototype),
      A)
    )
      for (g in u) {
        if (
          ((F = u[g]),
          h.noTargetGet ? ((D = Vc(A, g)), (E = D && D.value)) : (E = A[g]),
          (x = Jc(d ? g : p + (m ? "." : "#") + g, h.forced)),
          !x && E !== void 0)
        ) {
          if (typeof F == typeof E) continue;
          Xc(F, E);
        }
        (h.sham || (E && E.sham)) && Hc(F, "sham", !0), Wc(A, g, F, h);
      }
  };
});
var pn = b(() => {
  var Yc = $s(),
    $c = J();
  Yc({ global: !0 }, { globalThis: $c });
});
var Qs = b((Ed, fn) => {
  var Qc = It();
  fn.exports =
    Array.isArray ||
    function (u) {
      return Qc(u) == "Array";
    };
});
var yn = b((bd, mn) => {
  var dn = le(),
    Zc = Ft(),
    ep = St(),
    tp = dn(dn.bind);
  mn.exports = function (h, u) {
    return (
      Zc(h),
      u === void 0
        ? h
        : ep
        ? tp(h, u)
        : function () {
            return h.apply(u, arguments);
          }
    );
  };
});
var An = b((Cd, gn) => {
  "use strict";
  var sp = J(),
    rp = Qs(),
    ip = Ut(),
    ap = yn(),
    np = sp.TypeError,
    xn = function (h, u, p, d, m, x, A, g) {
      for (var E = m, F = 0, D = A ? ap(A, g) : !1, C, M; F < d; ) {
        if (F in p) {
          if (((C = D ? D(p[F], F, u) : p[F]), x > 0 && rp(C)))
            (M = ip(C)), (E = xn(h, u, C, M, E, x - 1) - 1);
          else {
            if (E >= 9007199254740991)
              throw np("Exceed the acceptable array length");
            h[E] = C;
          }
          E++;
        }
        F++;
      }
      return E;
    };
  gn.exports = xn;
});
var En = b((vd, Tn) => {
  var op = it(),
    hp = op("toStringTag"),
    Pn = {};
  Pn[hp] = "z";
  Tn.exports = String(Pn) === "[object z]";
});
var Cn = b((Sd, bn) => {
  var lp = J(),
    up = En(),
    cp = ue(),
    _t = It(),
    pp = it(),
    fp = pp("toStringTag"),
    dp = lp.Object,
    mp =
      _t(
        (function () {
          return arguments;
        })()
      ) == "Arguments",
    yp = function (h, u) {
      try {
        return h[u];
      } catch {}
    };
  bn.exports = up
    ? _t
    : function (h) {
        var u, p, d;
        return h === void 0
          ? "Undefined"
          : h === null
          ? "Null"
          : typeof (p = yp((u = dp(h)), fp)) == "string"
          ? p
          : mp
          ? _t(u)
          : (d = _t(u)) == "Object" && cp(u.callee)
          ? "Arguments"
          : d;
      };
});
var kn = b((wd, In) => {
  var xp = le(),
    gp = be(),
    vn = ue(),
    Ap = Cn(),
    Pp = rt(),
    Tp = Rt(),
    Sn = function () {},
    Ep = [],
    wn = Pp("Reflect", "construct"),
    Zs = /^\s*(?:class|function)\b/,
    bp = xp(Zs.exec),
    Cp = !Zs.exec(Sn),
    ot = function (u) {
      if (!vn(u)) return !1;
      try {
        return wn(Sn, Ep, u), !0;
      } catch {
        return !1;
      }
    },
    Nn = function (u) {
      if (!vn(u)) return !1;
      switch (Ap(u)) {
        case "AsyncFunction":
        case "GeneratorFunction":
        case "AsyncGeneratorFunction":
          return !1;
      }
      try {
        return Cp || !!bp(Zs, Tp(u));
      } catch {
        return !0;
      }
    };
  Nn.sham = !0;
  In.exports =
    !wn ||
    gp(function () {
      var h;
      return (
        ot(ot.call) ||
        !ot(Object) ||
        !ot(function () {
          h = !0;
        }) ||
        h
      );
    })
      ? Nn
      : ot;
});
var On = b((Nd, Ln) => {
  var vp = J(),
    Dn = Qs(),
    Sp = kn(),
    wp = Re(),
    Np = it(),
    Ip = Np("species"),
    Fn = vp.Array;
  Ln.exports = function (h) {
    var u;
    return (
      Dn(h) &&
        ((u = h.constructor),
        Sp(u) && (u === Fn || Dn(u.prototype))
          ? (u = void 0)
          : wp(u) && ((u = u[Ip]), u === null && (u = void 0))),
      u === void 0 ? Fn : u
    );
  };
});
var Mn = b((Id, Bn) => {
  var kp = On();
  Bn.exports = function (h, u) {
    return new (kp(h))(u === 0 ? 0 : u);
  };
});
pn();
var Dp = $s(),
  Fp = An(),
  Lp = Ft(),
  Op = ws(),
  Bp = Ut(),
  Mp = Mn();
Dp(
  { target: "Array", proto: !0 },
  {
    flatMap: function (u) {
      var p = Op(this),
        d = Bp(p),
        m;
      return (
        Lp(u),
        (m = Mp(p, 0)),
        (m.length = Fp(
          m,
          p,
          p,
          d,
          0,
          1,
          u,
          arguments.length > 1 ? arguments[1] : void 0
        )),
        m
      );
    },
  }
);
var Rn, jn, qn, Un, _n;
function ht(h, u) {
  return (
    u || (u = h.slice(0)),
    Object.freeze(
      Object.defineProperties(h, { raw: { value: Object.freeze(u) } })
    )
  );
}
var rr = Object.defineProperty,
  Rp = Object.getOwnPropertyDescriptor,
  ir = Object.getOwnPropertyNames,
  jp = Object.prototype.hasOwnProperty,
  zn = (h, u) =>
    function () {
      return h && (u = (0, h[ir(h)[0]])((h = 0))), u;
    },
  W = (h, u) =>
    function () {
      return u || (0, h[ir(h)[0]])((u = { exports: {} }).exports, u), u.exports;
    },
  qp = (h, u) => {
    for (var p in u) rr(h, p, { get: u[p], enumerable: !0 });
  },
  Up = (h, u, p, d) => {
    if ((u && typeof u == "object") || typeof u == "function")
      for (let m of ir(u))
        !jp.call(h, m) &&
          m !== p &&
          rr(h, m, {
            get: () => u[m],
            enumerable: !(d = Rp(u, m)) || d.enumerable,
          });
    return h;
  },
  _p = (h) => Up(rr({}, "__esModule", { value: !0 }), h),
  H = zn({ "<define:process>"() {} }),
  zp = W({
    "src/utils/try-combinations.js"(h, u) {
      "use strict";
      H();
      function p() {
        let d;
        for (var m = arguments.length, x = new Array(m), A = 0; A < m; A++)
          x[A] = arguments[A];
        for (let [g, E] of x.entries())
          try {
            return { result: E() };
          } catch (F) {
            g === 0 && (d = F);
          }
        return { error: d };
      }
      u.exports = p;
    },
  }),
  Kn = W({
    "src/language-js/utils/get-shebang.js"(h, u) {
      "use strict";
      H();
      function p(d) {
        if (!d.startsWith("#!")) return "";
        let m = d.indexOf(`
`);
        return m === -1 ? d : d.slice(0, m);
      }
      u.exports = p;
    },
  }),
  Kp = W({
    "src/utils/text/skip-inline-comment.js"(h, u) {
      "use strict";
      H();
      function p(d, m) {
        if (m === !1) return !1;
        if (d.charAt(m) === "/" && d.charAt(m + 1) === "*") {
          for (let x = m + 2; x < d.length; ++x)
            if (d.charAt(x) === "*" && d.charAt(x + 1) === "/") return x + 2;
        }
        return m;
      }
      u.exports = p;
    },
  }),
  Vp = W({
    "src/utils/text/skip-newline.js"(h, u) {
      "use strict";
      H();
      function p(d, m, x) {
        let A = x && x.backwards;
        if (m === !1) return !1;
        let g = d.charAt(m);
        if (A) {
          if (
            d.charAt(m - 1) === "\r" &&
            g ===
              `
`
          )
            return m - 2;
          if (
            g ===
              `
` ||
            g === "\r" ||
            g === "\u2028" ||
            g === "\u2029"
          )
            return m - 1;
        } else {
          if (
            g === "\r" &&
            d.charAt(m + 1) ===
              `
`
          )
            return m + 2;
          if (
            g ===
              `
` ||
            g === "\r" ||
            g === "\u2028" ||
            g === "\u2029"
          )
            return m + 1;
        }
        return m;
      }
      u.exports = p;
    },
  }),
  Vn = W({
    "src/utils/text/skip.js"(h, u) {
      "use strict";
      H();
      function p(g) {
        return (E, F, D) => {
          let C = D && D.backwards;
          if (F === !1) return !1;
          let { length: M } = E,
            L = F;
          for (; L >= 0 && L < M; ) {
            let k = E.charAt(L);
            if (g instanceof RegExp) {
              if (!g.test(k)) return L;
            } else if (!g.includes(k)) return L;
            C ? L-- : L++;
          }
          return L === -1 || L === M ? L : !1;
        };
      }
      var d = p(/\s/),
        m = p(" 	"),
        x = p(",; 	"),
        A = p(/[^\n\r]/);
      u.exports = {
        skipWhitespace: d,
        skipSpaces: m,
        skipToLineEnd: x,
        skipEverythingButNewLine: A,
      };
    },
  }),
  Hp = W({
    "src/utils/text/skip-trailing-comment.js"(h, u) {
      "use strict";
      H();
      var { skipEverythingButNewLine: p } = Vn();
      function d(m, x) {
        return x === !1
          ? !1
          : m.charAt(x) === "/" && m.charAt(x + 1) === "/"
          ? p(m, x)
          : x;
      }
      u.exports = d;
    },
  }),
  Wp = W({
    "src/utils/text/get-next-non-space-non-comment-character-index-with-start-index.js"(
      h,
      u
    ) {
      "use strict";
      H();
      var p = Kp(),
        d = Vp(),
        m = Hp(),
        { skipSpaces: x } = Vn();
      function A(g, E) {
        let F = null,
          D = E;
        for (; D !== F; )
          (F = D), (D = x(g, D)), (D = p(g, D)), (D = m(g, D)), (D = d(g, D));
        return D;
      }
      u.exports = A;
    },
  }),
  Hn = {};
qp(Hn, {
  EOL: () => sr,
  arch: () => Gp,
  cpus: () => Qn,
  default: () => ro,
  endianness: () => Wn,
  freemem: () => Yn,
  getNetworkInterfaces: () => so,
  hostname: () => Gn,
  loadavg: () => Xn,
  networkInterfaces: () => to,
  platform: () => Xp,
  release: () => eo,
  tmpDir: () => er,
  tmpdir: () => tr,
  totalmem: () => $n,
  type: () => Zn,
  uptime: () => Jn,
});
function Wn() {
  if (typeof zt > "u") {
    var h = new ArrayBuffer(2),
      u = new Uint8Array(h),
      p = new Uint16Array(h);
    if (((u[0] = 1), (u[1] = 2), p[0] === 258)) zt = "BE";
    else if (p[0] === 513) zt = "LE";
    else throw new Error("unable to figure out endianess");
  }
  return zt;
}
function Gn() {
  return typeof globalThis.location < "u" ? globalThis.location.hostname : "";
}
function Xn() {
  return [];
}
function Jn() {
  return 0;
}
function Yn() {
  return Number.MAX_VALUE;
}
function $n() {
  return Number.MAX_VALUE;
}
function Qn() {
  return [];
}
function Zn() {
  return "Browser";
}
function eo() {
  return typeof globalThis.navigator < "u"
    ? globalThis.navigator.appVersion
    : "";
}
function to() {}
function so() {}
function Gp() {
  return "javascript";
}
function Xp() {
  return "browser";
}
function er() {
  return "/tmp";
}
var zt,
  tr,
  sr,
  ro,
  Jp = zn({
    "node-modules-polyfills:os"() {
      H(),
        (tr = er),
        (sr = `
`),
        (ro = {
          EOL: sr,
          tmpdir: tr,
          tmpDir: er,
          networkInterfaces: to,
          getNetworkInterfaces: so,
          release: eo,
          type: Zn,
          cpus: Qn,
          totalmem: $n,
          freemem: Yn,
          uptime: Jn,
          loadavg: Xn,
          hostname: Gn,
          endianness: Wn,
        });
    },
  }),
  Yp = W({
    "node-modules-polyfills-commonjs:os"(h, u) {
      H();
      var p = (Jp(), _p(Hn));
      if (p && p.default) {
        u.exports = p.default;
        for (let d in p) u.exports[d] = p[d];
      } else p && (u.exports = p);
    },
  }),
  $p = W({
    "node_modules/detect-newline/index.js"(h, u) {
      "use strict";
      H();
      var p = (d) => {
        if (typeof d != "string") throw new TypeError("Expected a string");
        let m = d.match(/(?:\r?\n)/g) || [];
        if (m.length === 0) return;
        let x = m.filter(
            (g) =>
              g ===
              `\r
`
          ).length,
          A = m.length - x;
        return x > A
          ? `\r
`
          : `
`;
      };
      (u.exports = p),
        (u.exports.graceful = (d) =>
          (typeof d == "string" && p(d)) ||
          `
`);
    },
  }),
  Qp = W({
    "node_modules/jest-docblock/build/index.js"(h) {
      "use strict";
      H(),
        Object.defineProperty(h, "__esModule", { value: !0 }),
        (h.extract = L),
        (h.parse = G),
        (h.parseWithComments = Z),
        (h.print = B),
        (h.strip = k);
      function u() {
        let l = Yp();
        return (
          (u = function () {
            return l;
          }),
          l
        );
      }
      function p() {
        let l = d($p());
        return (
          (p = function () {
            return l;
          }),
          l
        );
      }
      function d(l) {
        return l && l.__esModule ? l : { default: l };
      }
      var m = /\*\/$/,
        x = /^\/\*\*/,
        A = /^\s*(\/\*\*?(.|\r?\n)*?\*\/)/,
        g = /(^|\s+)\/\/([^\r\n]*)/g,
        E = /^(\r?\n)+/,
        F =
          /(?:^|\r?\n) *(@[^\r\n]*?) *\r?\n *(?![^@\r\n]*\/\/[^]*)([^@\r\n\s][^@\r\n]+?) *\r?\n/g,
        D = /(?:^|\r?\n) *@(\S+) *([^\r\n]*)/g,
        C = /(\r?\n|^) *\* ?/g,
        M = [];
      function L(l) {
        let Y = l.match(A);
        return Y ? Y[0].trimLeft() : "";
      }
      function k(l) {
        let Y = l.match(A);
        return Y && Y[0] ? l.substring(Y[0].length) : l;
      }
      function G(l) {
        return Z(l).pragmas;
      }
      function Z(l) {
        let Y = (0, p().default)(l) || u().EOL;
        l = l.replace(x, "").replace(m, "").replace(C, "$1");
        let ie = "";
        for (; ie !== l; )
          (ie = l), (l = l.replace(F, "".concat(Y, "$1 $2").concat(Y)));
        l = l.replace(E, "").trimRight();
        let Q = Object.create(null),
          Ce = l.replace(D, "").replace(E, "").trimRight(),
          ee;
        for (; (ee = D.exec(l)); ) {
          let U = ee[2].replace(g, "");
          typeof Q[ee[1]] == "string" || Array.isArray(Q[ee[1]])
            ? (Q[ee[1]] = M.concat(Q[ee[1]], U))
            : (Q[ee[1]] = U);
        }
        return { comments: Ce, pragmas: Q };
      }
      function B(l) {
        let { comments: Y = "", pragmas: ie = {} } = l,
          Q = (0, p().default)(Y) || u().EOL,
          Ce = "/**",
          ee = " *",
          U = " */",
          O = Object.keys(ie),
          P = O.map((V) => j(V, ie[V]))
            .reduce((V, $) => V.concat($), [])
            .map((V) => ee + " " + V + Q)
            .join("");
        if (!Y) {
          if (O.length === 0) return "";
          if (O.length === 1 && !Array.isArray(ie[O[0]])) {
            let V = ie[O[0]];
            return "".concat(Ce, " ").concat(j(O[0], V)[0]).concat(U);
          }
        }
        let De =
          Y.split(Q)
            .map((V) => "".concat(ee, " ").concat(V))
            .join(Q) + Q;
        return Ce + Q + (Y ? De : "") + (Y && O.length ? ee + Q : "") + P + U;
      }
      function j(l, Y) {
        return M.concat(Y).map((ie) => "@".concat(l, " ").concat(ie).trim());
      }
    },
  }),
  Zp = W({
    "src/common/end-of-line.js"(h, u) {
      "use strict";
      H();
      function p(A) {
        let g = A.indexOf("\r");
        return g >= 0
          ? A.charAt(g + 1) ===
            `
`
            ? "crlf"
            : "cr"
          : "lf";
      }
      function d(A) {
        switch (A) {
          case "cr":
            return "\r";
          case "crlf":
            return `\r
`;
          default:
            return `
`;
        }
      }
      function m(A, g) {
        let E;
        switch (g) {
          case `
`:
            E = /\n/g;
            break;
          case "\r":
            E = /\r/g;
            break;
          case `\r
`:
            E = /\r\n/g;
            break;
          default:
            throw new Error('Unexpected "eol" '.concat(JSON.stringify(g), "."));
        }
        let F = A.match(E);
        return F ? F.length : 0;
      }
      function x(A) {
        return A.replace(
          /\r\n?/g,
          `
`
        );
      }
      u.exports = {
        guessEndOfLine: p,
        convertEndOfLineToChars: d,
        countEndOfLineChars: m,
        normalizeEndOfLine: x,
      };
    },
  }),
  ef = W({
    "src/language-js/pragma.js"(h, u) {
      "use strict";
      H();
      var { parseWithComments: p, strip: d, extract: m, print: x } = Qp(),
        { normalizeEndOfLine: A } = Zp(),
        g = Kn();
      function E(C) {
        let M = g(C);
        M && (C = C.slice(M.length + 1));
        let L = m(C),
          { pragmas: k, comments: G } = p(L);
        return { shebang: M, text: C, pragmas: k, comments: G };
      }
      function F(C) {
        let M = Object.keys(E(C).pragmas);
        return M.includes("prettier") || M.includes("format");
      }
      function D(C) {
        let { shebang: M, text: L, pragmas: k, comments: G } = E(C),
          Z = d(L),
          B = x({
            pragmas: Object.assign({ format: "" }, k),
            comments: G.trimStart(),
          });
        return (
          (M
            ? "".concat(
                M,
                `
`
              )
            : "") +
          A(B) +
          (Z.startsWith(`
`)
            ? `
`
            : `

`) +
          Z
        );
      }
      u.exports = { hasPragma: F, insertPragma: D };
    },
  }),
  io = W({
    "src/utils/is-non-empty-array.js"(h, u) {
      "use strict";
      H();
      function p(d) {
        return Array.isArray(d) && d.length > 0;
      }
      u.exports = p;
    },
  }),
  ao = W({
    "src/language-js/loc.js"(h, u) {
      "use strict";
      H();
      var p = io();
      function d(E, F) {
        let { ignoreDecorators: D } = F || {};
        if (!D) {
          let C = (E.declaration && E.declaration.decorators) || E.decorators;
          if (p(C)) return d(C[0]);
        }
        return E.range ? E.range[0] : E.start;
      }
      function m(E) {
        return E.range ? E.range[1] : E.end;
      }
      function x(E, F) {
        let D = d(E);
        return Number.isInteger(D) && D === d(F);
      }
      function A(E, F) {
        let D = m(E);
        return Number.isInteger(D) && D === m(F);
      }
      function g(E, F) {
        return x(E, F) && A(E, F);
      }
      u.exports = { locStart: d, locEnd: m, hasSameLocStart: x, hasSameLoc: g };
    },
  }),
  no = W({
    "src/language-js/parse/utils/create-parser.js"(h, u) {
      "use strict";
      H();
      var { hasPragma: p } = ef(),
        { locStart: d, locEnd: m } = ao();
      function x(A) {
        return (
          (A = typeof A == "function" ? { parse: A } : A),
          Object.assign(
            { astFormat: "estree", hasPragma: p, locStart: d, locEnd: m },
            A
          )
        );
      }
      u.exports = x;
    },
  }),
  ar = W({
    "src/common/parser-create-error.js"(h, u) {
      "use strict";
      H();
      function p(d, m) {
        let x = new SyntaxError(
          d + " (" + m.start.line + ":" + m.start.column + ")"
        );
        return (x.loc = m), x;
      }
      u.exports = p;
    },
  }),
  oo = W({
    "src/language-js/parse/utils/create-babel-parse-error.js"(h, u) {
      "use strict";
      H();
      var p = ar();
      function d(m) {
        let { message: x, loc: A } = m;
        return p(x.replace(/ \(.*\)/, ""), {
          start: { line: A ? A.line : 0, column: A ? A.column + 1 : 0 },
        });
      }
      u.exports = d;
    },
  }),
  tf = W({
    "src/language-js/utils/is-ts-keyword-type.js"(h, u) {
      "use strict";
      H();
      function p(d) {
        let { type: m } = d;
        return m.startsWith("TS") && m.endsWith("Keyword");
      }
      u.exports = p;
    },
  }),
  sf = W({
    "src/language-js/utils/is-block-comment.js"(h, u) {
      "use strict";
      H();
      var p = new Set(["Block", "CommentBlock", "MultiLine"]),
        d = (m) => p.has(m == null ? void 0 : m.type);
      u.exports = d;
    },
  }),
  rf = W({
    "src/language-js/utils/is-type-cast-comment.js"(h, u) {
      "use strict";
      H();
      var p = sf();
      function d(m) {
        return p(m) && m.value[0] === "*" && /@type\b/.test(m.value);
      }
      u.exports = d;
    },
  }),
  af = W({
    "src/utils/get-last.js"(h, u) {
      "use strict";
      H();
      var p = (d) => d[d.length - 1];
      u.exports = p;
    },
  }),
  ho = W({
    "src/language-js/parse/postprocess/visit-node.js"(h, u) {
      "use strict";
      H();
      function p(d, m) {
        if (Array.isArray(d)) {
          for (let x = 0; x < d.length; x++) d[x] = p(d[x], m);
          return d;
        }
        if (d && typeof d == "object" && typeof d.type == "string") {
          let x = Object.keys(d);
          for (let A = 0; A < x.length; A++) d[x[A]] = p(d[x[A]], m);
          return m(d) || d;
        }
        return d;
      }
      u.exports = p;
    },
  }),
  lo = W({
    "src/language-js/parse/postprocess/throw-syntax-error.js"(h, u) {
      "use strict";
      H();
      var p = ar();
      function d(m, x) {
        let { start: A, end: g } = m.loc;
        throw p(x, {
          start: { line: A.line, column: A.column + 1 },
          end: { line: g.line, column: g.column + 1 },
        });
      }
      u.exports = d;
    },
  }),
  nf = W({
    "src/language-js/parse/postprocess/typescript.js"(h, u) {
      "use strict";
      H();
      var p = ho(),
        d = lo();
      function m(g, E, F) {
        let D = g.decorators;
        if (!Array.isArray(D)) return;
        let C = E.decorators;
        (!Array.isArray(C) ||
          C.length !== D.length ||
          D.some((M) => {
            let L = F.get(M);
            return !L || !C.includes(L);
          })) &&
          d(E, "Leading decorators must be attached to a class declaration");
      }
      function x(g, E) {
        g.kind !== 167 ||
          (g.modifiers && !g.modifiers.some((C) => C.kind === 126)) ||
          (g.initializer &&
            E.value === null &&
            d(E, "Abstract property cannot have an initializer"));
      }
      function A(g, E) {
        let { esTreeNodeToTSNodeMap: F, tsNodeToESTreeNodeMap: D } =
          E.tsParseResult;
        p(g, (C) => {
          let M = F.get(C);
          if (!M) return;
          let L = D.get(M);
          L === C && (m(M, L, D), x(M, L));
        });
      }
      u.exports = { throwErrorForInvalidNodes: A };
    },
  }),
  of = W({
    "src/language-js/parse/postprocess/index.js"(h, u) {
      "use strict";
      H();
      var { locStart: p, locEnd: d } = ao(),
        m = tf(),
        x = rf(),
        A = af(),
        g = ho(),
        { throwErrorForInvalidNodes: E } = nf(),
        F = lo();
      function D(k, G) {
        if (
          (G.parser === "typescript" &&
            /@|abstract/.test(G.originalText) &&
            E(k, G),
          G.parser !== "typescript" &&
            G.parser !== "flow" &&
            G.parser !== "acorn" &&
            G.parser !== "espree" &&
            G.parser !== "meriyah")
        ) {
          let B = new Set();
          (k = g(k, (j) => {
            j.leadingComments && j.leadingComments.some(x) && B.add(p(j));
          })),
            (k = g(k, (j) => {
              if (j.type === "ParenthesizedExpression") {
                let { expression: l } = j;
                if (l.type === "TypeCastExpression")
                  return (l.range = j.range), l;
                let Y = p(j);
                if (!B.has(Y))
                  return (
                    (l.extra = Object.assign(
                      Object.assign({}, l.extra),
                      {},
                      { parenthesized: !0 }
                    )),
                    l
                  );
              }
            }));
        }
        return (
          (k = g(k, (B) => {
            switch (B.type) {
              case "ChainExpression":
                return C(B.expression);
              case "LogicalExpression": {
                if (M(B)) return L(B);
                break;
              }
              case "VariableDeclaration": {
                let j = A(B.declarations);
                j && j.init && Z(B, j);
                break;
              }
              case "TSParenthesizedType":
                return (
                  m(B.typeAnnotation) ||
                    B.typeAnnotation.type === "TSThisType" ||
                    (B.typeAnnotation.range = [p(B), d(B)]),
                  B.typeAnnotation
                );
              case "TSTypeParameter":
                if (typeof B.name == "string") {
                  let j = p(B);
                  B.name = {
                    type: "Identifier",
                    name: B.name,
                    range: [j, j + B.name.length],
                  };
                }
                break;
              case "ObjectExpression":
                if (G.parser === "typescript") {
                  let j = B.properties.find(
                    (l) =>
                      l.type === "Property" &&
                      l.value.type === "TSEmptyBodyFunctionExpression"
                  );
                  j && F(j.value, "Unexpected token.");
                }
                break;
              case "SequenceExpression": {
                let j = A(B.expressions);
                B.range = [p(B), Math.min(d(j), d(B))];
                break;
              }
              case "TopicReference":
                G.__isUsingHackPipeline = !0;
                break;
              case "ExportAllDeclaration": {
                let { exported: j } = B;
                if (G.parser === "meriyah" && j && j.type === "Identifier") {
                  let l = G.originalText.slice(p(j), d(j));
                  (l.startsWith('"') || l.startsWith("'")) &&
                    (B.exported = Object.assign(
                      Object.assign({}, B.exported),
                      {},
                      { type: "Literal", value: B.exported.name, raw: l }
                    ));
                }
                break;
              }
            }
          })),
          k
        );
        function Z(B, j) {
          G.originalText[d(j)] !== ";" && (B.range = [p(B), d(j)]);
        }
      }
      function C(k) {
        switch (k.type) {
          case "CallExpression":
            (k.type = "OptionalCallExpression"), (k.callee = C(k.callee));
            break;
          case "MemberExpression":
            (k.type = "OptionalMemberExpression"), (k.object = C(k.object));
            break;
          case "TSNonNullExpression":
            k.expression = C(k.expression);
            break;
        }
        return k;
      }
      function M(k) {
        return (
          k.type === "LogicalExpression" &&
          k.right.type === "LogicalExpression" &&
          k.operator === k.right.operator
        );
      }
      function L(k) {
        return M(k)
          ? L({
              type: "LogicalExpression",
              operator: k.operator,
              left: L({
                type: "LogicalExpression",
                operator: k.operator,
                left: k.left,
                right: k.right.left,
                range: [p(k.left), d(k.right.left)],
              }),
              right: k.right.right,
              range: [p(k), d(k)],
            })
          : k;
      }
      u.exports = D;
    },
  }),
  uo = W({
    "node_modules/@babel/parser/lib/index.js"(h) {
      "use strict";
      H(), Object.defineProperty(h, "__esModule", { value: !0 });
      function u(t, e) {
        if (t == null) return {};
        var s = {},
          r = Object.keys(t),
          i,
          a;
        for (a = 0; a < r.length; a++)
          (i = r[a]), !(e.indexOf(i) >= 0) && (s[i] = t[i]);
        return s;
      }
      var p = class {
          constructor(t, e, s) {
            (this.line = void 0),
              (this.column = void 0),
              (this.index = void 0),
              (this.line = t),
              (this.column = e),
              (this.index = s);
          }
        },
        d = class {
          constructor(t, e) {
            (this.start = void 0),
              (this.end = void 0),
              (this.filename = void 0),
              (this.identifierName = void 0),
              (this.start = t),
              (this.end = e);
          }
        };
      function m(t, e) {
        let { line: s, column: r, index: i } = t;
        return new p(s, r + e, i + e);
      }
      var x = Object.freeze({
          SyntaxError: "BABEL_PARSER_SYNTAX_ERROR",
          SourceTypeModuleError: "BABEL_PARSER_SOURCETYPE_MODULE_REQUIRED",
        }),
        A = function (t) {
          let e =
            arguments.length > 1 && arguments[1] !== void 0
              ? arguments[1]
              : t.length - 1;
          return {
            get() {
              return t.reduce((s, r) => s[r], this);
            },
            set(s) {
              t.reduce((r, i, a) => (a === e ? (r[i] = s) : r[i]), this);
            },
          };
        },
        g = (t, e, s) =>
          Object.keys(s)
            .map((r) => [r, s[r]])
            .filter((r) => {
              let [, i] = r;
              return !!i;
            })
            .map((r) => {
              let [i, a] = r;
              return [
                i,
                typeof a == "function"
                  ? { value: a, enumerable: !1 }
                  : typeof a.reflect == "string"
                  ? Object.assign({}, a, A(a.reflect.split(".")))
                  : a,
              ];
            })
            .reduce((r, i) => {
              let [a, n] = i;
              return Object.defineProperty(
                r,
                a,
                Object.assign({ configurable: !0 }, n)
              );
            }, Object.assign(new t(), e)),
        E = (t) => ({
          ImportMetaOutsideModule: t(
            `import.meta may appear only with 'sourceType: "module"'`,
            { code: x.SourceTypeModuleError }
          ),
          ImportOutsideModule: t(
            `'import' and 'export' may appear only with 'sourceType: "module"'`,
            { code: x.SourceTypeModuleError }
          ),
        }),
        F = {
          ArrayPattern: "array destructuring pattern",
          AssignmentExpression: "assignment expression",
          AssignmentPattern: "assignment expression",
          ArrowFunctionExpression: "arrow function expression",
          ConditionalExpression: "conditional expression",
          ForOfStatement: "for-of statement",
          ForInStatement: "for-in statement",
          ForStatement: "for-loop",
          FormalParameters: "function parameter list",
          Identifier: "identifier",
          ObjectPattern: "object destructuring pattern",
          ParenthesizedExpression: "parenthesized expression",
          RestElement: "rest element",
          UpdateExpression: {
            true: "prefix operation",
            false: "postfix operation",
          },
          VariableDeclarator: "variable declaration",
          YieldExpression: "yield expression",
        },
        D = (t) => {
          let { type: e, prefix: s } = t;
          return e === "UpdateExpression"
            ? F.UpdateExpression[String(s)]
            : F[e];
        },
        C = (t) => ({
          AccessorIsGenerator: t((e) => {
            let { kind: s } = e;
            return "A ".concat(s, "ter cannot be a generator.");
          }),
          ArgumentsInClass: t(
            "'arguments' is only allowed in functions and class methods."
          ),
          AsyncFunctionInSingleStatementContext: t(
            "Async functions can only be declared at the top level or inside a block."
          ),
          AwaitBindingIdentifier: t(
            "Can not use 'await' as identifier inside an async function."
          ),
          AwaitBindingIdentifierInStaticBlock: t(
            "Can not use 'await' as identifier inside a static block."
          ),
          AwaitExpressionFormalParameter: t(
            "'await' is not allowed in async function parameters."
          ),
          AwaitNotInAsyncContext: t(
            "'await' is only allowed within async functions and at the top levels of modules."
          ),
          AwaitNotInAsyncFunction: t(
            "'await' is only allowed within async functions."
          ),
          BadGetterArity: t(
            "A 'get' accesor must not have any formal parameters."
          ),
          BadSetterArity: t(
            "A 'set' accesor must have exactly one formal parameter."
          ),
          BadSetterRestParameter: t(
            "A 'set' accesor function argument must not be a rest parameter."
          ),
          ConstructorClassField: t(
            "Classes may not have a field named 'constructor'."
          ),
          ConstructorClassPrivateField: t(
            "Classes may not have a private field named '#constructor'."
          ),
          ConstructorIsAccessor: t("Class constructor may not be an accessor."),
          ConstructorIsAsync: t("Constructor can't be an async function."),
          ConstructorIsGenerator: t("Constructor can't be a generator."),
          DeclarationMissingInitializer: t((e) => {
            let { kind: s } = e;
            return "Missing initializer in ".concat(s, " declaration.");
          }),
          DecoratorBeforeExport: t(
            "Decorators must be placed *before* the 'export' keyword. You can set the 'decoratorsBeforeExport' option to false to use the 'export @decorator class {}' syntax."
          ),
          DecoratorConstructor: t(
            "Decorators can't be used with a constructor. Did you mean '@dec class { ... }'?"
          ),
          DecoratorExportClass: t(
            "Using the export keyword between a decorator and a class is not allowed. Please use `export @dec class` instead."
          ),
          DecoratorSemicolon: t(
            "Decorators must not be followed by a semicolon."
          ),
          DecoratorStaticBlock: t(
            "Decorators can't be used with a static block."
          ),
          DeletePrivateField: t("Deleting a private field is not allowed."),
          DestructureNamedImport: t(
            "ES2015 named imports do not destructure. Use another statement for destructuring after the import."
          ),
          DuplicateConstructor: t("Duplicate constructor in the same class."),
          DuplicateDefaultExport: t(
            "Only one default export allowed per module."
          ),
          DuplicateExport: t((e) => {
            let { exportName: s } = e;
            return "`".concat(
              s,
              "` has already been exported. Exported identifiers must be unique."
            );
          }),
          DuplicateProto: t("Redefinition of __proto__ property."),
          DuplicateRegExpFlags: t("Duplicate regular expression flag."),
          ElementAfterRest: t("Rest element must be last element."),
          EscapedCharNotAnIdentifier: t("Invalid Unicode escape."),
          ExportBindingIsString: t((e) => {
            let { localName: s, exportName: r } = e;
            return "A string literal cannot be used as an exported binding without `from`.\n- Did you mean `export { '"
              .concat(s, "' as '")
              .concat(r, "' } from 'some-module'`?");
          }),
          ExportDefaultFromAsIdentifier: t(
            "'from' is not allowed as an identifier after 'export default'."
          ),
          ForInOfLoopInitializer: t((e) => {
            let { type: s } = e;
            return "'".concat(
              s === "ForInStatement" ? "for-in" : "for-of",
              "' loop variable declaration may not have an initializer."
            );
          }),
          ForOfAsync: t(
            "The left-hand side of a for-of loop may not be 'async'."
          ),
          ForOfLet: t(
            "The left-hand side of a for-of loop may not start with 'let'."
          ),
          GeneratorInSingleStatementContext: t(
            "Generators can only be declared at the top level or inside a block."
          ),
          IllegalBreakContinue: t((e) => {
            let { type: s } = e;
            return "Unsyntactic ".concat(
              s === "BreakStatement" ? "break" : "continue",
              "."
            );
          }),
          IllegalLanguageModeDirective: t(
            "Illegal 'use strict' directive in function with non-simple parameter list."
          ),
          IllegalReturn: t("'return' outside of function."),
          ImportBindingIsString: t((e) => {
            let { importName: s } = e;
            return 'A string literal cannot be used as an imported binding.\n- Did you mean `import { "'.concat(
              s,
              '" as foo }`?'
            );
          }),
          ImportCallArgumentTrailingComma: t(
            "Trailing comma is disallowed inside import(...) arguments."
          ),
          ImportCallArity: t((e) => {
            let { maxArgumentCount: s } = e;
            return "`import()` requires exactly ".concat(
              s === 1 ? "one argument" : "one or two arguments",
              "."
            );
          }),
          ImportCallNotNewExpression: t("Cannot use new with import(...)."),
          ImportCallSpreadArgument: t("`...` is not allowed in `import()`."),
          IncompatibleRegExpUVFlags: t(
            "The 'u' and 'v' regular expression flags cannot be enabled at the same time."
          ),
          InvalidBigIntLiteral: t("Invalid BigIntLiteral."),
          InvalidCodePoint: t("Code point out of bounds."),
          InvalidCoverInitializedName: t(
            "Invalid shorthand property initializer."
          ),
          InvalidDecimal: t("Invalid decimal."),
          InvalidDigit: t((e) => {
            let { radix: s } = e;
            return "Expected number in radix ".concat(s, ".");
          }),
          InvalidEscapeSequence: t("Bad character escape sequence."),
          InvalidEscapeSequenceTemplate: t(
            "Invalid escape sequence in template."
          ),
          InvalidEscapedReservedWord: t((e) => {
            let { reservedWord: s } = e;
            return "Escape sequence in keyword ".concat(s, ".");
          }),
          InvalidIdentifier: t((e) => {
            let { identifierName: s } = e;
            return "Invalid identifier ".concat(s, ".");
          }),
          InvalidLhs: t((e) => {
            let { ancestor: s } = e;
            return "Invalid left-hand side in ".concat(D(s), ".");
          }),
          InvalidLhsBinding: t((e) => {
            let { ancestor: s } = e;
            return "Binding invalid left-hand side in ".concat(D(s), ".");
          }),
          InvalidNumber: t("Invalid number."),
          InvalidOrMissingExponent: t(
            "Floating-point numbers require a valid exponent after the 'e'."
          ),
          InvalidOrUnexpectedToken: t((e) => {
            let { unexpected: s } = e;
            return "Unexpected character '".concat(s, "'.");
          }),
          InvalidParenthesizedAssignment: t(
            "Invalid parenthesized assignment pattern."
          ),
          InvalidPrivateFieldResolution: t((e) => {
            let { identifierName: s } = e;
            return "Private name #".concat(s, " is not defined.");
          }),
          InvalidPropertyBindingPattern: t("Binding member expression."),
          InvalidRecordProperty: t(
            "Only properties and spread elements are allowed in record definitions."
          ),
          InvalidRestAssignmentPattern: t("Invalid rest operator's argument."),
          LabelRedeclaration: t((e) => {
            let { labelName: s } = e;
            return "Label '".concat(s, "' is already declared.");
          }),
          LetInLexicalBinding: t(
            "'let' is not allowed to be used as a name in 'let' or 'const' declarations."
          ),
          LineTerminatorBeforeArrow: t("No line break is allowed before '=>'."),
          MalformedRegExpFlags: t("Invalid regular expression flag."),
          MissingClassName: t("A class name is required."),
          MissingEqInAssignment: t(
            "Only '=' operator can be used for specifying default value."
          ),
          MissingSemicolon: t("Missing semicolon."),
          MissingPlugin: t((e) => {
            let { missingPlugin: s } = e;
            return "This experimental syntax requires enabling the parser plugin: ".concat(
              s.map((r) => JSON.stringify(r)).join(", "),
              "."
            );
          }),
          MissingOneOfPlugins: t((e) => {
            let { missingPlugin: s } = e;
            return "This experimental syntax requires enabling one of the following parser plugin(s): ".concat(
              s.map((r) => JSON.stringify(r)).join(", "),
              "."
            );
          }),
          MissingUnicodeEscape: t("Expecting Unicode escape sequence \\uXXXX."),
          MixingCoalesceWithLogical: t(
            "Nullish coalescing operator(??) requires parens when mixing with logical operators."
          ),
          ModuleAttributeDifferentFromType: t(
            "The only accepted module attribute is `type`."
          ),
          ModuleAttributeInvalidValue: t(
            "Only string literals are allowed as module attribute values."
          ),
          ModuleAttributesWithDuplicateKeys: t((e) => {
            let { key: s } = e;
            return 'Duplicate key "'.concat(
              s,
              '" is not allowed in module attributes.'
            );
          }),
          ModuleExportNameHasLoneSurrogate: t((e) => {
            let { surrogateCharCode: s } = e;
            return "An export name cannot include a lone surrogate, found '\\u".concat(
              s.toString(16),
              "'."
            );
          }),
          ModuleExportUndefined: t((e) => {
            let { localName: s } = e;
            return "Export '".concat(s, "' is not defined.");
          }),
          MultipleDefaultsInSwitch: t("Multiple default clauses."),
          NewlineAfterThrow: t("Illegal newline after throw."),
          NoCatchOrFinally: t("Missing catch or finally clause."),
          NumberIdentifier: t("Identifier directly after number."),
          NumericSeparatorInEscapeSequence: t(
            "Numeric separators are not allowed inside unicode escape sequences or hex escape sequences."
          ),
          ObsoleteAwaitStar: t(
            "'await*' has been removed from the async functions proposal. Use Promise.all() instead."
          ),
          OptionalChainingNoNew: t(
            "Constructors in/after an Optional Chain are not allowed."
          ),
          OptionalChainingNoTemplate: t(
            "Tagged Template Literals are not allowed in optionalChain."
          ),
          OverrideOnConstructor: t(
            "'override' modifier cannot appear on a constructor declaration."
          ),
          ParamDupe: t("Argument name clash."),
          PatternHasAccessor: t(
            "Object pattern can't contain getter or setter."
          ),
          PatternHasMethod: t("Object pattern can't contain methods."),
          PrivateInExpectedIn: t((e) => {
            let { identifierName: s } = e;
            return "Private names are only allowed in property accesses (`obj.#"
              .concat(s, "`) or in `in` expressions (`#")
              .concat(s, " in obj`).");
          }),
          PrivateNameRedeclaration: t((e) => {
            let { identifierName: s } = e;
            return "Duplicate private name #".concat(s, ".");
          }),
          RecordExpressionBarIncorrectEndSyntaxType: t(
            "Record expressions ending with '|}' are only allowed when the 'syntaxType' option of the 'recordAndTuple' plugin is set to 'bar'."
          ),
          RecordExpressionBarIncorrectStartSyntaxType: t(
            "Record expressions starting with '{|' are only allowed when the 'syntaxType' option of the 'recordAndTuple' plugin is set to 'bar'."
          ),
          RecordExpressionHashIncorrectStartSyntaxType: t(
            "Record expressions starting with '#{' are only allowed when the 'syntaxType' option of the 'recordAndTuple' plugin is set to 'hash'."
          ),
          RecordNoProto: t("'__proto__' is not allowed in Record expressions."),
          RestTrailingComma: t("Unexpected trailing comma after rest element."),
          SloppyFunction: t(
            "In non-strict mode code, functions can only be declared at top level, inside a block, or as the body of an if statement."
          ),
          StaticPrototype: t(
            "Classes may not have static property named prototype."
          ),
          SuperNotAllowed: t(
            "`super()` is only valid inside a class constructor of a subclass. Maybe a typo in the method name ('constructor') or not extending another class?"
          ),
          SuperPrivateField: t("Private fields can't be accessed on super."),
          TrailingDecorator: t(
            "Decorators must be attached to a class element."
          ),
          TupleExpressionBarIncorrectEndSyntaxType: t(
            "Tuple expressions ending with '|]' are only allowed when the 'syntaxType' option of the 'recordAndTuple' plugin is set to 'bar'."
          ),
          TupleExpressionBarIncorrectStartSyntaxType: t(
            "Tuple expressions starting with '[|' are only allowed when the 'syntaxType' option of the 'recordAndTuple' plugin is set to 'bar'."
          ),
          TupleExpressionHashIncorrectStartSyntaxType: t(
            "Tuple expressions starting with '#[' are only allowed when the 'syntaxType' option of the 'recordAndTuple' plugin is set to 'hash'."
          ),
          UnexpectedArgumentPlaceholder: t("Unexpected argument placeholder."),
          UnexpectedAwaitAfterPipelineBody: t(
            'Unexpected "await" after pipeline body; await must have parentheses in minimal proposal.'
          ),
          UnexpectedDigitAfterHash: t("Unexpected digit after hash token."),
          UnexpectedImportExport: t(
            "'import' and 'export' may only appear at the top level."
          ),
          UnexpectedKeyword: t((e) => {
            let { keyword: s } = e;
            return "Unexpected keyword '".concat(s, "'.");
          }),
          UnexpectedLeadingDecorator: t(
            "Leading decorators must be attached to a class declaration."
          ),
          UnexpectedLexicalDeclaration: t(
            "Lexical declaration cannot appear in a single-statement context."
          ),
          UnexpectedNewTarget: t(
            "`new.target` can only be used in functions or class properties."
          ),
          UnexpectedNumericSeparator: t(
            "A numeric separator is only allowed between two digits."
          ),
          UnexpectedPrivateField: t("Unexpected private name."),
          UnexpectedReservedWord: t((e) => {
            let { reservedWord: s } = e;
            return "Unexpected reserved word '".concat(s, "'.");
          }),
          UnexpectedSuper: t(
            "'super' is only allowed in object methods and classes."
          ),
          UnexpectedToken: t((e) => {
            let { expected: s, unexpected: r } = e;
            return "Unexpected token"
              .concat(r ? " '".concat(r, "'.") : "")
              .concat(s ? ', expected "'.concat(s, '"') : "");
          }),
          UnexpectedTokenUnaryExponentiation: t(
            "Illegal expression. Wrap left hand side or entire exponentiation in parentheses."
          ),
          UnsupportedBind: t("Binding should be performed on object property."),
          UnsupportedDecoratorExport: t(
            "A decorated export must export a class declaration."
          ),
          UnsupportedDefaultExport: t(
            "Only expressions, functions or classes are allowed as the `default` export."
          ),
          UnsupportedImport: t(
            "`import` can only be used in `import()` or `import.meta`."
          ),
          UnsupportedMetaProperty: t((e) => {
            let { target: s, onlyValidPropertyName: r } = e;
            return "The only valid meta property for "
              .concat(s, " is ")
              .concat(s, ".")
              .concat(r, ".");
          }),
          UnsupportedParameterDecorator: t(
            "Decorators cannot be used to decorate parameters."
          ),
          UnsupportedPropertyDecorator: t(
            "Decorators cannot be used to decorate object literal properties."
          ),
          UnsupportedSuper: t(
            "'super' can only be used with function calls (i.e. super()) or in property accesses (i.e. super.prop or super[prop])."
          ),
          UnterminatedComment: t("Unterminated comment."),
          UnterminatedRegExp: t("Unterminated regular expression."),
          UnterminatedString: t("Unterminated string constant."),
          UnterminatedTemplate: t("Unterminated template."),
          VarRedeclaration: t((e) => {
            let { identifierName: s } = e;
            return "Identifier '".concat(s, "' has already been declared.");
          }),
          YieldBindingIdentifier: t(
            "Can not use 'yield' as identifier inside a generator."
          ),
          YieldInParameter: t(
            "Yield expression is not allowed in formal parameters."
          ),
          ZeroDigitNumericSeparator: t(
            "Numeric separator can not be used after leading 0."
          ),
        }),
        M = (t) => ({
          StrictDelete: t("Deleting local variable in strict mode."),
          StrictEvalArguments: t((e) => {
            let { referenceName: s } = e;
            return "Assigning to '".concat(s, "' in strict mode.");
          }),
          StrictEvalArgumentsBinding: t((e) => {
            let { bindingName: s } = e;
            return "Binding '".concat(s, "' in strict mode.");
          }),
          StrictFunction: t(
            "In strict mode code, functions can only be declared at top level or inside a block."
          ),
          StrictNumericEscape: t(
            "The only valid numeric escape in strict mode is '\\0'."
          ),
          StrictOctalLiteral: t(
            "Legacy octal literals are not allowed in strict mode."
          ),
          StrictWith: t("'with' in strict mode."),
        }),
        L = new Set([
          "ArrowFunctionExpression",
          "AssignmentExpression",
          "ConditionalExpression",
          "YieldExpression",
        ]),
        k = (t) => ({
          PipeBodyIsTighter: t(
            "Unexpected yield after pipeline body; any yield expression acting as Hack-style pipe body must be parenthesized due to its loose operator precedence."
          ),
          PipeTopicRequiresHackPipes: t(
            'Topic reference is used, but the pipelineOperator plugin was not passed a "proposal": "hack" or "smart" option.'
          ),
          PipeTopicUnbound: t(
            "Topic reference is unbound; it must be inside a pipe body."
          ),
          PipeTopicUnconfiguredToken: t((e) => {
            let { token: s } = e;
            return "Invalid topic token "
              .concat(s, ". In order to use ")
              .concat(
                s,
                ' as a topic reference, the pipelineOperator plugin must be configured with { "proposal": "hack", "topicToken": "'
              )
              .concat(s, '" }.');
          }),
          PipeTopicUnused: t(
            "Hack-style pipe body does not contain a topic reference; Hack-style pipes must use topic at least once."
          ),
          PipeUnparenthesizedBody: t((e) => {
            let { type: s } = e;
            return "Hack-style pipe body cannot be an unparenthesized ".concat(
              D({ type: s }),
              "; please wrap it in parentheses."
            );
          }),
          PipelineBodyNoArrow: t(
            'Unexpected arrow "=>" after pipeline body; arrow function in pipeline body must be parenthesized.'
          ),
          PipelineBodySequenceExpression: t(
            "Pipeline body may not be a comma-separated sequence expression."
          ),
          PipelineHeadSequenceExpression: t(
            "Pipeline head should not be a comma-separated sequence expression."
          ),
          PipelineTopicUnused: t(
            "Pipeline is in topic style but does not use topic reference."
          ),
          PrimaryTopicNotAllowed: t(
            "Topic reference was used in a lexical context without topic binding."
          ),
          PrimaryTopicRequiresSmartPipeline: t(
            'Topic reference is used, but the pipelineOperator plugin was not passed a "proposal": "hack" or "smart" option.'
          ),
        }),
        G = ["toMessage"];
      function Z(t) {
        let { toMessage: e } = t,
          s = u(t, G);
        return function r(i) {
          let { loc: a, details: n } = i;
          return g(SyntaxError, Object.assign({}, s, { loc: a }), {
            clone() {
              let o =
                  arguments.length > 0 && arguments[0] !== void 0
                    ? arguments[0]
                    : {},
                c = o.loc || {};
              return r({
                loc: new p(
                  "line" in c ? c.line : this.loc.line,
                  "column" in c ? c.column : this.loc.column,
                  "index" in c ? c.index : this.loc.index
                ),
                details: Object.assign({}, this.details, o.details),
              });
            },
            details: { value: n, enumerable: !1 },
            message: {
              get() {
                return ""
                  .concat(e(this.details), " (")
                  .concat(this.loc.line, ":")
                  .concat(this.loc.column, ")");
              },
              set(o) {
                Object.defineProperty(this, "message", { value: o });
              },
            },
            pos: { reflect: "loc.index", enumerable: !0 },
            missingPlugin: "missingPlugin" in n && {
              reflect: "details.missingPlugin",
              enumerable: !0,
            },
          });
        };
      }
      function B(t, e) {
        return Object.assign(
          { toMessage: typeof t == "string" ? () => t : t },
          e
        );
      }
      function j(t, e) {
        if (Array.isArray(t)) return (i) => j(i, t[0]);
        let s = t(B),
          r = {};
        for (let i of Object.keys(s))
          r[i] = Z(
            Object.assign(
              { code: x.SyntaxError, reasonCode: i },
              e ? { syntaxPlugin: e } : {},
              s[i]
            )
          );
        return r;
      }
      var l = Object.assign(
          {},
          j(E),
          j(C),
          j(M),
          j(Rn || (Rn = ht(["pipelineOperator"])))(k)
        ),
        { defineProperty: Y } = Object,
        ie = (t, e) => Y(t, e, { enumerable: !1, value: t[e] });
      function Q(t) {
        return ie(t.loc.start, "index"), ie(t.loc.end, "index"), t;
      }
      var Ce = (t) =>
          class extends t {
            parse() {
              let e = Q(super.parse());
              return this.options.tokens && (e.tokens = e.tokens.map(Q)), e;
            }
            parseRegExpLiteral(e) {
              let { pattern: s, flags: r } = e,
                i = null;
              try {
                i = new RegExp(s, r);
              } catch {}
              let a = this.estreeParseLiteral(i);
              return (a.regex = { pattern: s, flags: r }), a;
            }
            parseBigIntLiteral(e) {
              let s;
              try {
                s = BigInt(e);
              } catch {
                s = null;
              }
              let r = this.estreeParseLiteral(s);
              return (r.bigint = String(r.value || e)), r;
            }
            parseDecimalLiteral(e) {
              let r = this.estreeParseLiteral(null);
              return (r.decimal = String(r.value || e)), r;
            }
            estreeParseLiteral(e) {
              return this.parseLiteral(e, "Literal");
            }
            parseStringLiteral(e) {
              return this.estreeParseLiteral(e);
            }
            parseNumericLiteral(e) {
              return this.estreeParseLiteral(e);
            }
            parseNullLiteral() {
              return this.estreeParseLiteral(null);
            }
            parseBooleanLiteral(e) {
              return this.estreeParseLiteral(e);
            }
            directiveToStmt(e) {
              let s = e.value,
                r = this.startNodeAt(e.start, e.loc.start),
                i = this.startNodeAt(s.start, s.loc.start);
              return (
                (i.value = s.extra.expressionValue),
                (i.raw = s.extra.raw),
                (r.expression = this.finishNodeAt(i, "Literal", s.loc.end)),
                (r.directive = s.extra.raw.slice(1, -1)),
                this.finishNodeAt(r, "ExpressionStatement", e.loc.end)
              );
            }
            initFunction(e, s) {
              super.initFunction(e, s), (e.expression = !1);
            }
            checkDeclaration(e) {
              e != null && this.isObjectProperty(e)
                ? this.checkDeclaration(e.value)
                : super.checkDeclaration(e);
            }
            getObjectOrClassMethodParams(e) {
              return e.value.params;
            }
            isValidDirective(e) {
              var s;
              return (
                e.type === "ExpressionStatement" &&
                e.expression.type === "Literal" &&
                typeof e.expression.value == "string" &&
                !((s = e.expression.extra) != null && s.parenthesized)
              );
            }
            parseBlockBody(e) {
              for (
                var s = arguments.length,
                  r = new Array(s > 1 ? s - 1 : 0),
                  i = 1;
                i < s;
                i++
              )
                r[i - 1] = arguments[i];
              super.parseBlockBody(e, ...r);
              let a = e.directives.map((n) => this.directiveToStmt(n));
              (e.body = a.concat(e.body)), delete e.directives;
            }
            pushClassMethod(e, s, r, i, a, n) {
              this.parseMethod(s, r, i, a, n, "ClassMethod", !0),
                s.typeParameters &&
                  ((s.value.typeParameters = s.typeParameters),
                  delete s.typeParameters),
                e.body.push(s);
            }
            parsePrivateName() {
              let e = super.parsePrivateName();
              return this.getPluginOption("estree", "classFeatures")
                ? this.convertPrivateNameToPrivateIdentifier(e)
                : e;
            }
            convertPrivateNameToPrivateIdentifier(e) {
              let s = super.getPrivateNameSV(e);
              return (
                (e = e),
                delete e.id,
                (e.name = s),
                (e.type = "PrivateIdentifier"),
                e
              );
            }
            isPrivateName(e) {
              return this.getPluginOption("estree", "classFeatures")
                ? e.type === "PrivateIdentifier"
                : super.isPrivateName(e);
            }
            getPrivateNameSV(e) {
              return this.getPluginOption("estree", "classFeatures")
                ? e.name
                : super.getPrivateNameSV(e);
            }
            parseLiteral(e, s) {
              let r = super.parseLiteral(e, s);
              return (r.raw = r.extra.raw), delete r.extra, r;
            }
            parseFunctionBody(e, s) {
              let r =
                arguments.length > 2 && arguments[2] !== void 0
                  ? arguments[2]
                  : !1;
              super.parseFunctionBody(e, s, r),
                (e.expression = e.body.type !== "BlockStatement");
            }
            parseMethod(e, s, r, i, a, n) {
              let o =
                  arguments.length > 6 && arguments[6] !== void 0
                    ? arguments[6]
                    : !1,
                c = this.startNode();
              return (
                (c.kind = e.kind),
                (c = super.parseMethod(c, s, r, i, a, n, o)),
                (c.type = "FunctionExpression"),
                delete c.kind,
                (e.value = c),
                n === "ClassPrivateMethod" && (e.computed = !1),
                (n = "MethodDefinition"),
                this.finishNode(e, n)
              );
            }
            parseClassProperty() {
              let e = super.parseClassProperty(...arguments);
              return (
                this.getPluginOption("estree", "classFeatures") &&
                  (e.type = "PropertyDefinition"),
                e
              );
            }
            parseClassPrivateProperty() {
              let e = super.parseClassPrivateProperty(...arguments);
              return (
                this.getPluginOption("estree", "classFeatures") &&
                  ((e.type = "PropertyDefinition"), (e.computed = !1)),
                e
              );
            }
            parseObjectMethod(e, s, r, i, a) {
              let n = super.parseObjectMethod(e, s, r, i, a);
              return (
                n &&
                  ((n.type = "Property"),
                  n.kind === "method" && (n.kind = "init"),
                  (n.shorthand = !1)),
                n
              );
            }
            parseObjectProperty(e, s, r, i, a) {
              let n = super.parseObjectProperty(e, s, r, i, a);
              return n && ((n.kind = "init"), (n.type = "Property")), n;
            }
            isValidLVal(e) {
              for (
                var s = arguments.length,
                  r = new Array(s > 1 ? s - 1 : 0),
                  i = 1;
                i < s;
                i++
              )
                r[i - 1] = arguments[i];
              return e === "Property" ? "value" : super.isValidLVal(e, ...r);
            }
            isAssignable(e, s) {
              return e != null && this.isObjectProperty(e)
                ? this.isAssignable(e.value, s)
                : super.isAssignable(e, s);
            }
            toAssignable(e) {
              let s =
                arguments.length > 1 && arguments[1] !== void 0
                  ? arguments[1]
                  : !1;
              if (e != null && this.isObjectProperty(e)) {
                let { key: r, value: i } = e;
                this.isPrivateName(r) &&
                  this.classScope.usePrivateName(
                    this.getPrivateNameSV(r),
                    r.loc.start
                  ),
                  this.toAssignable(i, s);
              } else super.toAssignable(e, s);
            }
            toAssignableObjectExpressionProp(e) {
              e.kind === "get" || e.kind === "set"
                ? this.raise(l.PatternHasAccessor, { at: e.key })
                : e.method
                ? this.raise(l.PatternHasMethod, { at: e.key })
                : super.toAssignableObjectExpressionProp(...arguments);
            }
            finishCallExpression(e, s) {
              if (
                (super.finishCallExpression(e, s), e.callee.type === "Import")
              ) {
                if (
                  ((e.type = "ImportExpression"),
                  (e.source = e.arguments[0]),
                  this.hasPlugin("importAssertions"))
                ) {
                  var r;
                  e.attributes = (r = e.arguments[1]) != null ? r : null;
                }
                delete e.arguments, delete e.callee;
              }
              return e;
            }
            toReferencedArguments(e) {
              e.type !== "ImportExpression" && super.toReferencedArguments(e);
            }
            parseExport(e) {
              switch ((super.parseExport(e), e.type)) {
                case "ExportAllDeclaration":
                  e.exported = null;
                  break;
                case "ExportNamedDeclaration":
                  e.specifiers.length === 1 &&
                    e.specifiers[0].type === "ExportNamespaceSpecifier" &&
                    ((e.type = "ExportAllDeclaration"),
                    (e.exported = e.specifiers[0].exported),
                    delete e.specifiers);
                  break;
              }
              return e;
            }
            parseSubscript(e, s, r, i, a) {
              let n = super.parseSubscript(e, s, r, i, a);
              if (a.optionalChainMember) {
                if (
                  ((n.type === "OptionalMemberExpression" ||
                    n.type === "OptionalCallExpression") &&
                    (n.type = n.type.substring(8)),
                  a.stop)
                ) {
                  let o = this.startNodeAtNode(n);
                  return (
                    (o.expression = n), this.finishNode(o, "ChainExpression")
                  );
                }
              } else
                (n.type === "MemberExpression" ||
                  n.type === "CallExpression") &&
                  (n.optional = !1);
              return n;
            }
            hasPropertyAsPrivateName(e) {
              return (
                e.type === "ChainExpression" && (e = e.expression),
                super.hasPropertyAsPrivateName(e)
              );
            }
            isOptionalChain(e) {
              return e.type === "ChainExpression";
            }
            isObjectProperty(e) {
              return e.type === "Property" && e.kind === "init" && !e.method;
            }
            isObjectMethod(e) {
              return e.method || e.kind === "get" || e.kind === "set";
            }
            finishNodeAt(e, s, r) {
              return Q(super.finishNodeAt(e, s, r));
            }
            resetEndLocation(e) {
              let s =
                arguments.length > 1 && arguments[1] !== void 0
                  ? arguments[1]
                  : this.state.lastTokEndLoc;
              super.resetEndLocation(e, s), Q(e);
            }
          },
        ee = class {
          constructor(t, e) {
            (this.token = void 0),
              (this.preserveSpace = void 0),
              (this.token = t),
              (this.preserveSpace = !!e);
          }
        },
        U = {
          brace: new ee("{"),
          j_oTag: new ee("<tag"),
          j_cTag: new ee("</tag"),
          j_expr: new ee("<tag>...</tag>", !0),
        };
      U.template = new ee("`", !0);
      var O = !0,
        P = !0,
        De = !0,
        V = !0,
        $ = !0,
        me = !0,
        ce = class {
          constructor(t) {
            let e =
              arguments.length > 1 && arguments[1] !== void 0
                ? arguments[1]
                : {};
            (this.label = void 0),
              (this.keyword = void 0),
              (this.beforeExpr = void 0),
              (this.startsExpr = void 0),
              (this.rightAssociative = void 0),
              (this.isLoop = void 0),
              (this.isAssign = void 0),
              (this.prefix = void 0),
              (this.postfix = void 0),
              (this.binop = void 0),
              (this.label = t),
              (this.keyword = e.keyword),
              (this.beforeExpr = !!e.beforeExpr),
              (this.startsExpr = !!e.startsExpr),
              (this.rightAssociative = !!e.rightAssociative),
              (this.isLoop = !!e.isLoop),
              (this.isAssign = !!e.isAssign),
              (this.prefix = !!e.prefix),
              (this.postfix = !!e.postfix),
              (this.binop = e.binop != null ? e.binop : null),
              (this.updateContext = null);
          }
        },
        ae = new Map();
      function q(t) {
        let e =
          arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
        e.keyword = t;
        let s = w(t, e);
        return ae.set(t, s), s;
      }
      function X(t, e) {
        return w(t, { beforeExpr: O, binop: e });
      }
      var re = -1,
        ne = [],
        Ue = [],
        _e = [],
        oe = [],
        Je = [],
        Ye = [];
      function w(t) {
        let e =
          arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
        var s, r, i, a;
        return (
          ++re,
          Ue.push(t),
          _e.push((s = e.binop) != null ? s : -1),
          oe.push((r = e.beforeExpr) != null ? r : !1),
          Je.push((i = e.startsExpr) != null ? i : !1),
          Ye.push((a = e.prefix) != null ? a : !1),
          ne.push(new ce(t, e)),
          re
        );
      }
      function _(t) {
        let e =
          arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
        var s, r, i, a;
        return (
          ++re,
          ae.set(t, re),
          Ue.push(t),
          _e.push((s = e.binop) != null ? s : -1),
          oe.push((r = e.beforeExpr) != null ? r : !1),
          Je.push((i = e.startsExpr) != null ? i : !1),
          Ye.push((a = e.prefix) != null ? a : !1),
          ne.push(new ce("name", e)),
          re
        );
      }
      var co = {
        bracketL: w("[", { beforeExpr: O, startsExpr: P }),
        bracketHashL: w("#[", { beforeExpr: O, startsExpr: P }),
        bracketBarL: w("[|", { beforeExpr: O, startsExpr: P }),
        bracketR: w("]"),
        bracketBarR: w("|]"),
        braceL: w("{", { beforeExpr: O, startsExpr: P }),
        braceBarL: w("{|", { beforeExpr: O, startsExpr: P }),
        braceHashL: w("#{", { beforeExpr: O, startsExpr: P }),
        braceR: w("}"),
        braceBarR: w("|}"),
        parenL: w("(", { beforeExpr: O, startsExpr: P }),
        parenR: w(")"),
        comma: w(",", { beforeExpr: O }),
        semi: w(";", { beforeExpr: O }),
        colon: w(":", { beforeExpr: O }),
        doubleColon: w("::", { beforeExpr: O }),
        dot: w("."),
        question: w("?", { beforeExpr: O }),
        questionDot: w("?."),
        arrow: w("=>", { beforeExpr: O }),
        template: w("template"),
        ellipsis: w("...", { beforeExpr: O }),
        backQuote: w("`", { startsExpr: P }),
        dollarBraceL: w("${", { beforeExpr: O, startsExpr: P }),
        templateTail: w("...`", { startsExpr: P }),
        templateNonTail: w("...${", { beforeExpr: O, startsExpr: P }),
        at: w("@"),
        hash: w("#", { startsExpr: P }),
        interpreterDirective: w("#!..."),
        eq: w("=", { beforeExpr: O, isAssign: V }),
        assign: w("_=", { beforeExpr: O, isAssign: V }),
        slashAssign: w("_=", { beforeExpr: O, isAssign: V }),
        xorAssign: w("_=", { beforeExpr: O, isAssign: V }),
        moduloAssign: w("_=", { beforeExpr: O, isAssign: V }),
        incDec: w("++/--", { prefix: $, postfix: me, startsExpr: P }),
        bang: w("!", { beforeExpr: O, prefix: $, startsExpr: P }),
        tilde: w("~", { beforeExpr: O, prefix: $, startsExpr: P }),
        doubleCaret: w("^^", { startsExpr: P }),
        doubleAt: w("@@", { startsExpr: P }),
        pipeline: X("|>", 0),
        nullishCoalescing: X("??", 1),
        logicalOR: X("||", 1),
        logicalAND: X("&&", 2),
        bitwiseOR: X("|", 3),
        bitwiseXOR: X("^", 4),
        bitwiseAND: X("&", 5),
        equality: X("==/!=/===/!==", 6),
        lt: X("</>/<=/>=", 7),
        gt: X("</>/<=/>=", 7),
        relational: X("</>/<=/>=", 7),
        bitShift: X("<</>>/>>>", 8),
        bitShiftL: X("<</>>/>>>", 8),
        bitShiftR: X("<</>>/>>>", 8),
        plusMin: w("+/-", {
          beforeExpr: O,
          binop: 9,
          prefix: $,
          startsExpr: P,
        }),
        modulo: w("%", { binop: 10, startsExpr: P }),
        star: w("*", { binop: 10 }),
        slash: X("/", 10),
        exponent: w("**", { beforeExpr: O, binop: 11, rightAssociative: !0 }),
        _in: q("in", { beforeExpr: O, binop: 7 }),
        _instanceof: q("instanceof", { beforeExpr: O, binop: 7 }),
        _break: q("break"),
        _case: q("case", { beforeExpr: O }),
        _catch: q("catch"),
        _continue: q("continue"),
        _debugger: q("debugger"),
        _default: q("default", { beforeExpr: O }),
        _else: q("else", { beforeExpr: O }),
        _finally: q("finally"),
        _function: q("function", { startsExpr: P }),
        _if: q("if"),
        _return: q("return", { beforeExpr: O }),
        _switch: q("switch"),
        _throw: q("throw", { beforeExpr: O, prefix: $, startsExpr: P }),
        _try: q("try"),
        _var: q("var"),
        _const: q("const"),
        _with: q("with"),
        _new: q("new", { beforeExpr: O, startsExpr: P }),
        _this: q("this", { startsExpr: P }),
        _super: q("super", { startsExpr: P }),
        _class: q("class", { startsExpr: P }),
        _extends: q("extends", { beforeExpr: O }),
        _export: q("export"),
        _import: q("import", { startsExpr: P }),
        _null: q("null", { startsExpr: P }),
        _true: q("true", { startsExpr: P }),
        _false: q("false", { startsExpr: P }),
        _typeof: q("typeof", { beforeExpr: O, prefix: $, startsExpr: P }),
        _void: q("void", { beforeExpr: O, prefix: $, startsExpr: P }),
        _delete: q("delete", { beforeExpr: O, prefix: $, startsExpr: P }),
        _do: q("do", { isLoop: De, beforeExpr: O }),
        _for: q("for", { isLoop: De }),
        _while: q("while", { isLoop: De }),
        _as: _("as", { startsExpr: P }),
        _assert: _("assert", { startsExpr: P }),
        _async: _("async", { startsExpr: P }),
        _await: _("await", { startsExpr: P }),
        _from: _("from", { startsExpr: P }),
        _get: _("get", { startsExpr: P }),
        _let: _("let", { startsExpr: P }),
        _meta: _("meta", { startsExpr: P }),
        _of: _("of", { startsExpr: P }),
        _sent: _("sent", { startsExpr: P }),
        _set: _("set", { startsExpr: P }),
        _static: _("static", { startsExpr: P }),
        _yield: _("yield", { startsExpr: P }),
        _asserts: _("asserts", { startsExpr: P }),
        _checks: _("checks", { startsExpr: P }),
        _exports: _("exports", { startsExpr: P }),
        _global: _("global", { startsExpr: P }),
        _implements: _("implements", { startsExpr: P }),
        _intrinsic: _("intrinsic", { startsExpr: P }),
        _infer: _("infer", { startsExpr: P }),
        _is: _("is", { startsExpr: P }),
        _mixins: _("mixins", { startsExpr: P }),
        _proto: _("proto", { startsExpr: P }),
        _require: _("require", { startsExpr: P }),
        _keyof: _("keyof", { startsExpr: P }),
        _readonly: _("readonly", { startsExpr: P }),
        _unique: _("unique", { startsExpr: P }),
        _abstract: _("abstract", { startsExpr: P }),
        _declare: _("declare", { startsExpr: P }),
        _enum: _("enum", { startsExpr: P }),
        _module: _("module", { startsExpr: P }),
        _namespace: _("namespace", { startsExpr: P }),
        _interface: _("interface", { startsExpr: P }),
        _type: _("type", { startsExpr: P }),
        _opaque: _("opaque", { startsExpr: P }),
        name: w("name", { startsExpr: P }),
        string: w("string", { startsExpr: P }),
        num: w("num", { startsExpr: P }),
        bigint: w("bigint", { startsExpr: P }),
        decimal: w("decimal", { startsExpr: P }),
        regexp: w("regexp", { startsExpr: P }),
        privateName: w("#name", { startsExpr: P }),
        eof: w("eof"),
        jsxName: w("jsxName"),
        jsxText: w("jsxText", { beforeExpr: !0 }),
        jsxTagStart: w("jsxTagStart", { startsExpr: !0 }),
        jsxTagEnd: w("jsxTagEnd"),
        placeholder: w("%%", { startsExpr: !0 }),
      };
      function K(t) {
        return t >= 93 && t <= 128;
      }
      function po(t) {
        return t <= 92;
      }
      function ye(t) {
        return t >= 58 && t <= 128;
      }
      function nr(t) {
        return t >= 58 && t <= 132;
      }
      function fo(t) {
        return oe[t];
      }
      function Kt(t) {
        return Je[t];
      }
      function mo(t) {
        return t >= 29 && t <= 33;
      }
      function or(t) {
        return t >= 125 && t <= 127;
      }
      function yo(t) {
        return t >= 90 && t <= 92;
      }
      function Vt(t) {
        return t >= 58 && t <= 92;
      }
      function xo(t) {
        return t >= 39 && t <= 59;
      }
      function go(t) {
        return t === 34;
      }
      function Ao(t) {
        return Ye[t];
      }
      function Po(t) {
        return t >= 117 && t <= 119;
      }
      function To(t) {
        return t >= 120 && t <= 126;
      }
      function ve(t) {
        return Ue[t];
      }
      function lt(t) {
        return _e[t];
      }
      function Eo(t) {
        return _e[t] !== -1;
      }
      function bo(t) {
        return t === 57;
      }
      function ut(t) {
        return t >= 24 && t <= 25;
      }
      function xe(t) {
        return ne[t];
      }
      (ne[8].updateContext = (t) => {
        t.pop();
      }),
        (ne[5].updateContext =
          ne[7].updateContext =
          ne[23].updateContext =
            (t) => {
              t.push(U.brace);
            }),
        (ne[22].updateContext = (t) => {
          t[t.length - 1] === U.template ? t.pop() : t.push(U.template);
        }),
        (ne[138].updateContext = (t) => {
          t.push(U.j_expr, U.j_oTag);
        });
      var Ht =
          "\xAA\xB5\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0370-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u048A-\u052F\u0531-\u0556\u0559\u0560-\u0588\u05D0-\u05EA\u05EF-\u05F2\u0620-\u064A\u066E\u066F\u0671-\u06D3\u06D5\u06E5\u06E6\u06EE\u06EF\u06FA-\u06FC\u06FF\u0710\u0712-\u072F\u074D-\u07A5\u07B1\u07CA-\u07EA\u07F4\u07F5\u07FA\u0800-\u0815\u081A\u0824\u0828\u0840-\u0858\u0860-\u086A\u0870-\u0887\u0889-\u088E\u08A0-\u08C9\u0904-\u0939\u093D\u0950\u0958-\u0961\u0971-\u0980\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BD\u09CE\u09DC\u09DD\u09DF-\u09E1\u09F0\u09F1\u09FC\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A59-\u0A5C\u0A5E\u0A72-\u0A74\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABD\u0AD0\u0AE0\u0AE1\u0AF9\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3D\u0B5C\u0B5D\u0B5F-\u0B61\u0B71\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BD0\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D\u0C58-\u0C5A\u0C5D\u0C60\u0C61\u0C80\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBD\u0CDD\u0CDE\u0CE0\u0CE1\u0CF1\u0CF2\u0D04-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D\u0D4E\u0D54-\u0D56\u0D5F-\u0D61\u0D7A-\u0D7F\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0E01-\u0E30\u0E32\u0E33\u0E40-\u0E46\u0E81\u0E82\u0E84\u0E86-\u0E8A\u0E8C-\u0EA3\u0EA5\u0EA7-\u0EB0\u0EB2\u0EB3\u0EBD\u0EC0-\u0EC4\u0EC6\u0EDC-\u0EDF\u0F00\u0F40-\u0F47\u0F49-\u0F6C\u0F88-\u0F8C\u1000-\u102A\u103F\u1050-\u1055\u105A-\u105D\u1061\u1065\u1066\u106E-\u1070\u1075-\u1081\u108E\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16EE-\u16F8\u1700-\u1711\u171F-\u1731\u1740-\u1751\u1760-\u176C\u176E-\u1770\u1780-\u17B3\u17D7\u17DC\u1820-\u1878\u1880-\u18A8\u18AA\u18B0-\u18F5\u1900-\u191E\u1950-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u1A00-\u1A16\u1A20-\u1A54\u1AA7\u1B05-\u1B33\u1B45-\u1B4C\u1B83-\u1BA0\u1BAE\u1BAF\u1BBA-\u1BE5\u1C00-\u1C23\u1C4D-\u1C4F\u1C5A-\u1C7D\u1C80-\u1C88\u1C90-\u1CBA\u1CBD-\u1CBF\u1CE9-\u1CEC\u1CEE-\u1CF3\u1CF5\u1CF6\u1CFA\u1D00-\u1DBF\u1E00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u2071\u207F\u2090-\u209C\u2102\u2107\u210A-\u2113\u2115\u2118-\u211D\u2124\u2126\u2128\u212A-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2160-\u2188\u2C00-\u2CE4\u2CEB-\u2CEE\u2CF2\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D80-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u3005-\u3007\u3021-\u3029\u3031-\u3035\u3038-\u303C\u3041-\u3096\u309B-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312F\u3131-\u318E\u31A0-\u31BF\u31F0-\u31FF\u3400-\u4DBF\u4E00-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA61F\uA62A\uA62B\uA640-\uA66E\uA67F-\uA69D\uA6A0-\uA6EF\uA717-\uA71F\uA722-\uA788\uA78B-\uA7CA\uA7D0\uA7D1\uA7D3\uA7D5-\uA7D9\uA7F2-\uA801\uA803-\uA805\uA807-\uA80A\uA80C-\uA822\uA840-\uA873\uA882-\uA8B3\uA8F2-\uA8F7\uA8FB\uA8FD\uA8FE\uA90A-\uA925\uA930-\uA946\uA960-\uA97C\uA984-\uA9B2\uA9CF\uA9E0-\uA9E4\uA9E6-\uA9EF\uA9FA-\uA9FE\uAA00-\uAA28\uAA40-\uAA42\uAA44-\uAA4B\uAA60-\uAA76\uAA7A\uAA7E-\uAAAF\uAAB1\uAAB5\uAAB6\uAAB9-\uAABD\uAAC0\uAAC2\uAADB-\uAADD\uAAE0-\uAAEA\uAAF2-\uAAF4\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB69\uAB70-\uABE2\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D\uFB1F-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE70-\uFE74\uFE76-\uFEFC\uFF21-\uFF3A\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC",
        hr =
          "\u200C\u200D\xB7\u0300-\u036F\u0387\u0483-\u0487\u0591-\u05BD\u05BF\u05C1\u05C2\u05C4\u05C5\u05C7\u0610-\u061A\u064B-\u0669\u0670\u06D6-\u06DC\u06DF-\u06E4\u06E7\u06E8\u06EA-\u06ED\u06F0-\u06F9\u0711\u0730-\u074A\u07A6-\u07B0\u07C0-\u07C9\u07EB-\u07F3\u07FD\u0816-\u0819\u081B-\u0823\u0825-\u0827\u0829-\u082D\u0859-\u085B\u0898-\u089F\u08CA-\u08E1\u08E3-\u0903\u093A-\u093C\u093E-\u094F\u0951-\u0957\u0962\u0963\u0966-\u096F\u0981-\u0983\u09BC\u09BE-\u09C4\u09C7\u09C8\u09CB-\u09CD\u09D7\u09E2\u09E3\u09E6-\u09EF\u09FE\u0A01-\u0A03\u0A3C\u0A3E-\u0A42\u0A47\u0A48\u0A4B-\u0A4D\u0A51\u0A66-\u0A71\u0A75\u0A81-\u0A83\u0ABC\u0ABE-\u0AC5\u0AC7-\u0AC9\u0ACB-\u0ACD\u0AE2\u0AE3\u0AE6-\u0AEF\u0AFA-\u0AFF\u0B01-\u0B03\u0B3C\u0B3E-\u0B44\u0B47\u0B48\u0B4B-\u0B4D\u0B55-\u0B57\u0B62\u0B63\u0B66-\u0B6F\u0B82\u0BBE-\u0BC2\u0BC6-\u0BC8\u0BCA-\u0BCD\u0BD7\u0BE6-\u0BEF\u0C00-\u0C04\u0C3C\u0C3E-\u0C44\u0C46-\u0C48\u0C4A-\u0C4D\u0C55\u0C56\u0C62\u0C63\u0C66-\u0C6F\u0C81-\u0C83\u0CBC\u0CBE-\u0CC4\u0CC6-\u0CC8\u0CCA-\u0CCD\u0CD5\u0CD6\u0CE2\u0CE3\u0CE6-\u0CEF\u0D00-\u0D03\u0D3B\u0D3C\u0D3E-\u0D44\u0D46-\u0D48\u0D4A-\u0D4D\u0D57\u0D62\u0D63\u0D66-\u0D6F\u0D81-\u0D83\u0DCA\u0DCF-\u0DD4\u0DD6\u0DD8-\u0DDF\u0DE6-\u0DEF\u0DF2\u0DF3\u0E31\u0E34-\u0E3A\u0E47-\u0E4E\u0E50-\u0E59\u0EB1\u0EB4-\u0EBC\u0EC8-\u0ECD\u0ED0-\u0ED9\u0F18\u0F19\u0F20-\u0F29\u0F35\u0F37\u0F39\u0F3E\u0F3F\u0F71-\u0F84\u0F86\u0F87\u0F8D-\u0F97\u0F99-\u0FBC\u0FC6\u102B-\u103E\u1040-\u1049\u1056-\u1059\u105E-\u1060\u1062-\u1064\u1067-\u106D\u1071-\u1074\u1082-\u108D\u108F-\u109D\u135D-\u135F\u1369-\u1371\u1712-\u1715\u1732-\u1734\u1752\u1753\u1772\u1773\u17B4-\u17D3\u17DD\u17E0-\u17E9\u180B-\u180D\u180F-\u1819\u18A9\u1920-\u192B\u1930-\u193B\u1946-\u194F\u19D0-\u19DA\u1A17-\u1A1B\u1A55-\u1A5E\u1A60-\u1A7C\u1A7F-\u1A89\u1A90-\u1A99\u1AB0-\u1ABD\u1ABF-\u1ACE\u1B00-\u1B04\u1B34-\u1B44\u1B50-\u1B59\u1B6B-\u1B73\u1B80-\u1B82\u1BA1-\u1BAD\u1BB0-\u1BB9\u1BE6-\u1BF3\u1C24-\u1C37\u1C40-\u1C49\u1C50-\u1C59\u1CD0-\u1CD2\u1CD4-\u1CE8\u1CED\u1CF4\u1CF7-\u1CF9\u1DC0-\u1DFF\u203F\u2040\u2054\u20D0-\u20DC\u20E1\u20E5-\u20F0\u2CEF-\u2CF1\u2D7F\u2DE0-\u2DFF\u302A-\u302F\u3099\u309A\uA620-\uA629\uA66F\uA674-\uA67D\uA69E\uA69F\uA6F0\uA6F1\uA802\uA806\uA80B\uA823-\uA827\uA82C\uA880\uA881\uA8B4-\uA8C5\uA8D0-\uA8D9\uA8E0-\uA8F1\uA8FF-\uA909\uA926-\uA92D\uA947-\uA953\uA980-\uA983\uA9B3-\uA9C0\uA9D0-\uA9D9\uA9E5\uA9F0-\uA9F9\uAA29-\uAA36\uAA43\uAA4C\uAA4D\uAA50-\uAA59\uAA7B-\uAA7D\uAAB0\uAAB2-\uAAB4\uAAB7\uAAB8\uAABE\uAABF\uAAC1\uAAEB-\uAAEF\uAAF5\uAAF6\uABE3-\uABEA\uABEC\uABED\uABF0-\uABF9\uFB1E\uFE00-\uFE0F\uFE20-\uFE2F\uFE33\uFE34\uFE4D-\uFE4F\uFF10-\uFF19\uFF3F",
        Co = new RegExp("[" + Ht + "]"),
        vo = new RegExp("[" + Ht + hr + "]");
      Ht = hr = null;
      var lr = [
          0, 11, 2, 25, 2, 18, 2, 1, 2, 14, 3, 13, 35, 122, 70, 52, 268, 28, 4,
          48, 48, 31, 14, 29, 6, 37, 11, 29, 3, 35, 5, 7, 2, 4, 43, 157, 19, 35,
          5, 35, 5, 39, 9, 51, 13, 10, 2, 14, 2, 6, 2, 1, 2, 10, 2, 14, 2, 6, 2,
          1, 68, 310, 10, 21, 11, 7, 25, 5, 2, 41, 2, 8, 70, 5, 3, 0, 2, 43, 2,
          1, 4, 0, 3, 22, 11, 22, 10, 30, 66, 18, 2, 1, 11, 21, 11, 25, 71, 55,
          7, 1, 65, 0, 16, 3, 2, 2, 2, 28, 43, 28, 4, 28, 36, 7, 2, 27, 28, 53,
          11, 21, 11, 18, 14, 17, 111, 72, 56, 50, 14, 50, 14, 35, 349, 41, 7,
          1, 79, 28, 11, 0, 9, 21, 43, 17, 47, 20, 28, 22, 13, 52, 58, 1, 3, 0,
          14, 44, 33, 24, 27, 35, 30, 0, 3, 0, 9, 34, 4, 0, 13, 47, 15, 3, 22,
          0, 2, 0, 36, 17, 2, 24, 85, 6, 2, 0, 2, 3, 2, 14, 2, 9, 8, 46, 39, 7,
          3, 1, 3, 21, 2, 6, 2, 1, 2, 4, 4, 0, 19, 0, 13, 4, 159, 52, 19, 3, 21,
          2, 31, 47, 21, 1, 2, 0, 185, 46, 42, 3, 37, 47, 21, 0, 60, 42, 14, 0,
          72, 26, 38, 6, 186, 43, 117, 63, 32, 7, 3, 0, 3, 7, 2, 1, 2, 23, 16,
          0, 2, 0, 95, 7, 3, 38, 17, 0, 2, 0, 29, 0, 11, 39, 8, 0, 22, 0, 12,
          45, 20, 0, 19, 72, 264, 8, 2, 36, 18, 0, 50, 29, 113, 6, 2, 1, 2, 37,
          22, 0, 26, 5, 2, 1, 2, 31, 15, 0, 328, 18, 190, 0, 80, 921, 103, 110,
          18, 195, 2637, 96, 16, 1070, 4050, 582, 8634, 568, 8, 30, 18, 78, 18,
          29, 19, 47, 17, 3, 32, 20, 6, 18, 689, 63, 129, 74, 6, 0, 67, 12, 65,
          1, 2, 0, 29, 6135, 9, 1237, 43, 8, 8936, 3, 2, 6, 2, 1, 2, 290, 46, 2,
          18, 3, 9, 395, 2309, 106, 6, 12, 4, 8, 8, 9, 5991, 84, 2, 70, 2, 1, 3,
          0, 3, 1, 3, 3, 2, 11, 2, 0, 2, 6, 2, 64, 2, 3, 3, 7, 2, 6, 2, 27, 2,
          3, 2, 4, 2, 0, 4, 6, 2, 339, 3, 24, 2, 24, 2, 30, 2, 24, 2, 30, 2, 24,
          2, 30, 2, 24, 2, 30, 2, 24, 2, 7, 1845, 30, 482, 44, 11, 6, 17, 0,
          322, 29, 19, 43, 1269, 6, 2, 3, 2, 1, 2, 14, 2, 196, 60, 67, 8, 0,
          1205, 3, 2, 26, 2, 1, 2, 0, 3, 0, 2, 9, 2, 3, 2, 0, 2, 0, 7, 0, 5, 0,
          2, 0, 2, 0, 2, 2, 2, 1, 2, 0, 3, 0, 2, 0, 2, 0, 2, 0, 2, 0, 2, 1, 2,
          0, 3, 3, 2, 6, 2, 3, 2, 3, 2, 0, 2, 9, 2, 16, 6, 2, 2, 4, 2, 16, 4421,
          42719, 33, 4152, 8, 221, 3, 5761, 15, 7472, 3104, 541, 1507, 4938,
        ],
        So = [
          509, 0, 227, 0, 150, 4, 294, 9, 1368, 2, 2, 1, 6, 3, 41, 2, 5, 0, 166,
          1, 574, 3, 9, 9, 370, 1, 154, 10, 50, 3, 123, 2, 54, 14, 32, 10, 3, 1,
          11, 3, 46, 10, 8, 0, 46, 9, 7, 2, 37, 13, 2, 9, 6, 1, 45, 0, 13, 2,
          49, 13, 9, 3, 2, 11, 83, 11, 7, 0, 161, 11, 6, 9, 7, 3, 56, 1, 2, 6,
          3, 1, 3, 2, 10, 0, 11, 1, 3, 6, 4, 4, 193, 17, 10, 9, 5, 0, 82, 19,
          13, 9, 214, 6, 3, 8, 28, 1, 83, 16, 16, 9, 82, 12, 9, 9, 84, 14, 5, 9,
          243, 14, 166, 9, 71, 5, 2, 1, 3, 3, 2, 0, 2, 1, 13, 9, 120, 6, 3, 6,
          4, 0, 29, 9, 41, 6, 2, 3, 9, 0, 10, 10, 47, 15, 406, 7, 2, 7, 17, 9,
          57, 21, 2, 13, 123, 5, 4, 0, 2, 1, 2, 6, 2, 0, 9, 9, 49, 4, 2, 1, 2,
          4, 9, 9, 330, 3, 19306, 9, 87, 9, 39, 4, 60, 6, 26, 9, 1014, 0, 2, 54,
          8, 3, 82, 0, 12, 1, 19628, 1, 4706, 45, 3, 22, 543, 4, 4, 5, 9, 7, 3,
          6, 31, 3, 149, 2, 1418, 49, 513, 54, 5, 49, 9, 0, 15, 0, 23, 4, 2, 14,
          1361, 6, 2, 16, 3, 6, 2, 1, 2, 4, 262, 6, 10, 9, 357, 0, 62, 13, 1495,
          6, 110, 6, 6, 9, 4759, 9, 787719, 239,
        ];
      function Wt(t, e) {
        let s = 65536;
        for (let r = 0, i = e.length; r < i; r += 2) {
          if (((s += e[r]), s > t)) return !1;
          if (((s += e[r + 1]), s >= t)) return !0;
        }
        return !1;
      }
      function ge(t) {
        return t < 65
          ? t === 36
          : t <= 90
          ? !0
          : t < 97
          ? t === 95
          : t <= 122
          ? !0
          : t <= 65535
          ? t >= 170 && Co.test(String.fromCharCode(t))
          : Wt(t, lr);
      }
      function ze(t) {
        return t < 48
          ? t === 36
          : t < 58
          ? !0
          : t < 65
          ? !1
          : t <= 90
          ? !0
          : t < 97
          ? t === 95
          : t <= 122
          ? !0
          : t <= 65535
          ? t >= 170 && vo.test(String.fromCharCode(t))
          : Wt(t, lr) || Wt(t, So);
      }
      var Gt = {
          keyword: [
            "break",
            "case",
            "catch",
            "continue",
            "debugger",
            "default",
            "do",
            "else",
            "finally",
            "for",
            "function",
            "if",
            "return",
            "switch",
            "throw",
            "try",
            "var",
            "const",
            "while",
            "with",
            "new",
            "this",
            "super",
            "class",
            "extends",
            "export",
            "import",
            "null",
            "true",
            "false",
            "in",
            "instanceof",
            "typeof",
            "void",
            "delete",
          ],
          strict: [
            "implements",
            "interface",
            "let",
            "package",
            "private",
            "protected",
            "public",
            "static",
            "yield",
          ],
          strictBind: ["eval", "arguments"],
        },
        wo = new Set(Gt.keyword),
        No = new Set(Gt.strict),
        Io = new Set(Gt.strictBind);
      function ur(t, e) {
        return (e && t === "await") || t === "enum";
      }
      function cr(t, e) {
        return ur(t, e) || No.has(t);
      }
      function pr(t) {
        return Io.has(t);
      }
      function fr(t, e) {
        return cr(t, e) || pr(t);
      }
      function ko(t) {
        return wo.has(t);
      }
      function Do(t, e, s) {
        return t === 64 && e === 64 && ge(s);
      }
      var Fo = new Set([
        "break",
        "case",
        "catch",
        "continue",
        "debugger",
        "default",
        "do",
        "else",
        "finally",
        "for",
        "function",
        "if",
        "return",
        "switch",
        "throw",
        "try",
        "var",
        "const",
        "while",
        "with",
        "new",
        "this",
        "super",
        "class",
        "extends",
        "export",
        "import",
        "null",
        "true",
        "false",
        "in",
        "instanceof",
        "typeof",
        "void",
        "delete",
        "implements",
        "interface",
        "let",
        "package",
        "private",
        "protected",
        "public",
        "static",
        "yield",
        "eval",
        "arguments",
        "enum",
        "await",
      ]);
      function Lo(t) {
        return Fo.has(t);
      }
      var Ke = 0,
        $e = 1,
        Ae = 2,
        Xt = 4,
        dr = 8,
        ct = 16,
        mr = 32,
        Fe = 64,
        Jt = 128,
        pt = 256,
        ft = $e | Ae | pt,
        Pe = 1,
        Ve = 2,
        yr = 4,
        Se = 8,
        dt = 16,
        xr = 64,
        mt = 128,
        Yt = 256,
        $t = 512,
        Qt = 1024,
        Zt = 2048,
        gr = Pe | Ve | Se | mt,
        Te = Pe | 0 | Se | 0,
        yt = Pe | 0 | yr | 0,
        Ar = Pe | 0 | dt | 0,
        Oo = 0 | Ve | 0 | mt,
        Bo = 0 | Ve | 0 | 0,
        Pr = Pe | Ve | Se | Yt,
        Tr = 0 | Qt,
        Le = 0 | xr,
        Mo = Pe | 0 | 0 | xr,
        Ro = Pr | $t,
        jo = 0 | Qt,
        qo = Zt,
        xt = 4,
        es = 2,
        ts = 1,
        ss = es | ts,
        Uo = es | xt,
        _o = ts | xt,
        zo = es,
        Ko = ts,
        rs = 0,
        Vo = class {
          constructor() {
            (this.sawUnambiguousESM = !1),
              (this.ambiguousScriptDifferentAst = !1);
          }
          hasPlugin(t) {
            if (typeof t == "string") return this.plugins.has(t);
            {
              let [e, s] = t;
              if (!this.hasPlugin(e)) return !1;
              let r = this.plugins.get(e);
              for (let i of Object.keys(s))
                if ((r == null ? void 0 : r[i]) !== s[i]) return !1;
              return !0;
            }
          }
          getPluginOption(t, e) {
            var s;
            return (s = this.plugins.get(t)) == null ? void 0 : s[e];
          }
        };
      function Er(t, e) {
        t.trailingComments === void 0
          ? (t.trailingComments = e)
          : t.trailingComments.unshift(...e);
      }
      function Ho(t, e) {
        t.leadingComments === void 0
          ? (t.leadingComments = e)
          : t.leadingComments.unshift(...e);
      }
      function Qe(t, e) {
        t.innerComments === void 0
          ? (t.innerComments = e)
          : t.innerComments.unshift(...e);
      }
      function Ze(t, e, s) {
        let r = null,
          i = e.length;
        for (; r === null && i > 0; ) r = e[--i];
        r === null || r.start > s.start ? Qe(t, s.comments) : Er(r, s.comments);
      }
      var Wo = class extends Vo {
          addComment(t) {
            this.filename && (t.loc.filename = this.filename),
              this.state.comments.push(t);
          }
          processComment(t) {
            let { commentStack: e } = this.state,
              s = e.length;
            if (s === 0) return;
            let r = s - 1,
              i = e[r];
            i.start === t.end && ((i.leadingNode = t), r--);
            let { start: a } = t;
            for (; r >= 0; r--) {
              let n = e[r],
                o = n.end;
              if (o > a)
                (n.containingNode = t), this.finalizeComment(n), e.splice(r, 1);
              else {
                o === a && (n.trailingNode = t);
                break;
              }
            }
          }
          finalizeComment(t) {
            let { comments: e } = t;
            if (t.leadingNode !== null || t.trailingNode !== null)
              t.leadingNode !== null && Er(t.leadingNode, e),
                t.trailingNode !== null && Ho(t.trailingNode, e);
            else {
              let { containingNode: s, start: r } = t;
              if (this.input.charCodeAt(r - 1) === 44)
                switch (s.type) {
                  case "ObjectExpression":
                  case "ObjectPattern":
                  case "RecordExpression":
                    Ze(s, s.properties, t);
                    break;
                  case "CallExpression":
                  case "OptionalCallExpression":
                    Ze(s, s.arguments, t);
                    break;
                  case "FunctionDeclaration":
                  case "FunctionExpression":
                  case "ArrowFunctionExpression":
                  case "ObjectMethod":
                  case "ClassMethod":
                  case "ClassPrivateMethod":
                    Ze(s, s.params, t);
                    break;
                  case "ArrayExpression":
                  case "ArrayPattern":
                  case "TupleExpression":
                    Ze(s, s.elements, t);
                    break;
                  case "ExportNamedDeclaration":
                  case "ImportDeclaration":
                    Ze(s, s.specifiers, t);
                    break;
                  default:
                    Qe(s, e);
                }
              else Qe(s, e);
            }
          }
          finalizeRemainingComments() {
            let { commentStack: t } = this.state;
            for (let e = t.length - 1; e >= 0; e--) this.finalizeComment(t[e]);
            this.state.commentStack = [];
          }
          resetPreviousNodeTrailingComments(t) {
            let { commentStack: e } = this.state,
              { length: s } = e;
            if (s === 0) return;
            let r = e[s - 1];
            r.leadingNode === t && (r.leadingNode = null);
          }
          takeSurroundingComments(t, e, s) {
            let { commentStack: r } = this.state,
              i = r.length;
            if (i === 0) return;
            let a = i - 1;
            for (; a >= 0; a--) {
              let n = r[a],
                o = n.end;
              if (n.start === s) n.leadingNode = t;
              else if (o === e) n.trailingNode = t;
              else if (o < e) break;
            }
          }
        },
        is = /\r\n?|[\n\u2028\u2029]/,
        gt = new RegExp(is.source, "g");
      function Oe(t) {
        switch (t) {
          case 10:
          case 13:
          case 8232:
          case 8233:
            return !0;
          default:
            return !1;
        }
      }
      var as = /(?:\s|\/\/.*|\/\*[^]*?\*\/)*/g,
        Go = /(?:[^\S\n\r\u2028\u2029]|\/\/.*|\/\*.*?\*\/)*/y,
        br = new RegExp(
          "(?=(" +
            Go.source +
            "))\\1" +
            /(?=[\n\r\u2028\u2029]|\/\*(?!.*?\*\/)|$)/.source,
          "y"
        );
      function Xo(t) {
        switch (t) {
          case 9:
          case 11:
          case 12:
          case 32:
          case 160:
          case 5760:
          case 8192:
          case 8193:
          case 8194:
          case 8195:
          case 8196:
          case 8197:
          case 8198:
          case 8199:
          case 8200:
          case 8201:
          case 8202:
          case 8239:
          case 8287:
          case 12288:
          case 65279:
            return !0;
          default:
            return !1;
        }
      }
      var Cr = class {
          constructor() {
            (this.strict = void 0),
              (this.curLine = void 0),
              (this.lineStart = void 0),
              (this.startLoc = void 0),
              (this.endLoc = void 0),
              (this.errors = []),
              (this.potentialArrowAt = -1),
              (this.noArrowAt = []),
              (this.noArrowParamsConversionAt = []),
              (this.maybeInArrowParameters = !1),
              (this.inType = !1),
              (this.noAnonFunctionType = !1),
              (this.hasFlowComment = !1),
              (this.isAmbientContext = !1),
              (this.inAbstractClass = !1),
              (this.inDisallowConditionalTypesContext = !1),
              (this.topicContext = {
                maxNumOfResolvableTopics: 0,
                maxTopicIndex: null,
              }),
              (this.soloAwait = !1),
              (this.inFSharpPipelineDirectBody = !1),
              (this.labels = []),
              (this.decoratorStack = [[]]),
              (this.comments = []),
              (this.commentStack = []),
              (this.pos = 0),
              (this.type = 135),
              (this.value = null),
              (this.start = 0),
              (this.end = 0),
              (this.lastTokEndLoc = null),
              (this.lastTokStartLoc = null),
              (this.lastTokStart = 0),
              (this.context = [U.brace]),
              (this.canStartJSXElement = !0),
              (this.containsEsc = !1),
              (this.strictErrors = new Map()),
              (this.tokensLength = 0);
          }
          init(t) {
            let {
              strictMode: e,
              sourceType: s,
              startLine: r,
              startColumn: i,
            } = t;
            (this.strict = e === !1 ? !1 : e === !0 ? !0 : s === "module"),
              (this.curLine = r),
              (this.lineStart = -i),
              (this.startLoc = this.endLoc = new p(r, i, 0));
          }
          curPosition() {
            return new p(this.curLine, this.pos - this.lineStart, this.pos);
          }
          clone(t) {
            let e = new Cr(),
              s = Object.keys(this);
            for (let r = 0, i = s.length; r < i; r++) {
              let a = s[r],
                n = this[a];
              !t && Array.isArray(n) && (n = n.slice()), (e[a] = n);
            }
            return e;
          }
        },
        Jo = ["at"],
        Yo = ["at"],
        $o = function (e) {
          return e >= 48 && e <= 57;
        },
        Qo = new Set([103, 109, 115, 105, 121, 117, 100, 118]),
        vr = {
          decBinOct: new Set([46, 66, 69, 79, 95, 98, 101, 111]),
          hex: new Set([46, 88, 95, 120]),
        },
        At = {
          bin: (t) => t === 48 || t === 49,
          oct: (t) => t >= 48 && t <= 55,
          dec: (t) => t >= 48 && t <= 57,
          hex: (t) =>
            (t >= 48 && t <= 57) ||
            (t >= 65 && t <= 70) ||
            (t >= 97 && t <= 102),
        },
        we = class {
          constructor(t) {
            (this.type = t.type),
              (this.value = t.value),
              (this.start = t.start),
              (this.end = t.end),
              (this.loc = new d(t.startLoc, t.endLoc));
          }
        },
        Zo = class extends Wo {
          constructor(t, e) {
            super(),
              (this.isLookahead = void 0),
              (this.tokens = []),
              (this.state = new Cr()),
              this.state.init(t),
              (this.input = e),
              (this.length = e.length),
              (this.isLookahead = !1);
          }
          pushToken(t) {
            (this.tokens.length = this.state.tokensLength),
              this.tokens.push(t),
              ++this.state.tokensLength;
          }
          next() {
            this.checkKeywordEscapes(),
              this.options.tokens && this.pushToken(new we(this.state)),
              (this.state.lastTokStart = this.state.start),
              (this.state.lastTokEndLoc = this.state.endLoc),
              (this.state.lastTokStartLoc = this.state.startLoc),
              this.nextToken();
          }
          eat(t) {
            return this.match(t) ? (this.next(), !0) : !1;
          }
          match(t) {
            return this.state.type === t;
          }
          createLookaheadState(t) {
            return {
              pos: t.pos,
              value: null,
              type: t.type,
              start: t.start,
              end: t.end,
              context: [this.curContext()],
              inType: t.inType,
              startLoc: t.startLoc,
              lastTokEndLoc: t.lastTokEndLoc,
              curLine: t.curLine,
              lineStart: t.lineStart,
              curPosition: t.curPosition,
            };
          }
          lookahead() {
            let t = this.state;
            (this.state = this.createLookaheadState(t)),
              (this.isLookahead = !0),
              this.nextToken(),
              (this.isLookahead = !1);
            let e = this.state;
            return (this.state = t), e;
          }
          nextTokenStart() {
            return this.nextTokenStartSince(this.state.pos);
          }
          nextTokenStartSince(t) {
            return (as.lastIndex = t), as.test(this.input) ? as.lastIndex : t;
          }
          lookaheadCharCode() {
            return this.input.charCodeAt(this.nextTokenStart());
          }
          codePointAtPos(t) {
            let e = this.input.charCodeAt(t);
            if ((e & 64512) === 55296 && ++t < this.input.length) {
              let s = this.input.charCodeAt(t);
              (s & 64512) === 56320 &&
                (e = 65536 + ((e & 1023) << 10) + (s & 1023));
            }
            return e;
          }
          setStrict(t) {
            (this.state.strict = t),
              t &&
                (this.state.strictErrors.forEach((e) => {
                  let [s, r] = e;
                  return this.raise(s, { at: r });
                }),
                this.state.strictErrors.clear());
          }
          curContext() {
            return this.state.context[this.state.context.length - 1];
          }
          nextToken() {
            if (
              (this.skipSpace(),
              (this.state.start = this.state.pos),
              this.isLookahead ||
                (this.state.startLoc = this.state.curPosition()),
              this.state.pos >= this.length)
            ) {
              this.finishToken(135);
              return;
            }
            this.getTokenFromCode(this.codePointAtPos(this.state.pos));
          }
          skipBlockComment() {
            let t;
            this.isLookahead || (t = this.state.curPosition());
            let e = this.state.pos,
              s = this.input.indexOf("*/", e + 2);
            if (s === -1)
              throw this.raise(l.UnterminatedComment, {
                at: this.state.curPosition(),
              });
            for (
              this.state.pos = s + 2, gt.lastIndex = e + 2;
              gt.test(this.input) && gt.lastIndex <= s;

            )
              ++this.state.curLine, (this.state.lineStart = gt.lastIndex);
            if (this.isLookahead) return;
            let r = {
              type: "CommentBlock",
              value: this.input.slice(e + 2, s),
              start: e,
              end: s + 2,
              loc: new d(t, this.state.curPosition()),
            };
            return this.options.tokens && this.pushToken(r), r;
          }
          skipLineComment(t) {
            let e = this.state.pos,
              s;
            this.isLookahead || (s = this.state.curPosition());
            let r = this.input.charCodeAt((this.state.pos += t));
            if (this.state.pos < this.length)
              for (; !Oe(r) && ++this.state.pos < this.length; )
                r = this.input.charCodeAt(this.state.pos);
            if (this.isLookahead) return;
            let i = this.state.pos,
              a = this.input.slice(e + t, i),
              n = {
                type: "CommentLine",
                value: a,
                start: e,
                end: i,
                loc: new d(s, this.state.curPosition()),
              };
            return this.options.tokens && this.pushToken(n), n;
          }
          skipSpace() {
            let t = this.state.pos,
              e = [];
            e: for (; this.state.pos < this.length; ) {
              let s = this.input.charCodeAt(this.state.pos);
              switch (s) {
                case 32:
                case 160:
                case 9:
                  ++this.state.pos;
                  break;
                case 13:
                  this.input.charCodeAt(this.state.pos + 1) === 10 &&
                    ++this.state.pos;
                case 10:
                case 8232:
                case 8233:
                  ++this.state.pos,
                    ++this.state.curLine,
                    (this.state.lineStart = this.state.pos);
                  break;
                case 47:
                  switch (this.input.charCodeAt(this.state.pos + 1)) {
                    case 42: {
                      let r = this.skipBlockComment();
                      r !== void 0 &&
                        (this.addComment(r),
                        this.options.attachComment && e.push(r));
                      break;
                    }
                    case 47: {
                      let r = this.skipLineComment(2);
                      r !== void 0 &&
                        (this.addComment(r),
                        this.options.attachComment && e.push(r));
                      break;
                    }
                    default:
                      break e;
                  }
                  break;
                default:
                  if (Xo(s)) ++this.state.pos;
                  else if (s === 45 && !this.inModule) {
                    let r = this.state.pos;
                    if (
                      this.input.charCodeAt(r + 1) === 45 &&
                      this.input.charCodeAt(r + 2) === 62 &&
                      (t === 0 || this.state.lineStart > t)
                    ) {
                      let i = this.skipLineComment(3);
                      i !== void 0 &&
                        (this.addComment(i),
                        this.options.attachComment && e.push(i));
                    } else break e;
                  } else if (s === 60 && !this.inModule) {
                    let r = this.state.pos;
                    if (
                      this.input.charCodeAt(r + 1) === 33 &&
                      this.input.charCodeAt(r + 2) === 45 &&
                      this.input.charCodeAt(r + 3) === 45
                    ) {
                      let i = this.skipLineComment(4);
                      i !== void 0 &&
                        (this.addComment(i),
                        this.options.attachComment && e.push(i));
                    } else break e;
                  } else break e;
              }
            }
            if (e.length > 0) {
              let s = this.state.pos,
                r = {
                  start: t,
                  end: s,
                  comments: e,
                  leadingNode: null,
                  trailingNode: null,
                  containingNode: null,
                };
              this.state.commentStack.push(r);
            }
          }
          finishToken(t, e) {
            (this.state.end = this.state.pos),
              (this.state.endLoc = this.state.curPosition());
            let s = this.state.type;
            (this.state.type = t),
              (this.state.value = e),
              this.isLookahead || this.updateContext(s);
          }
          replaceToken(t) {
            (this.state.type = t), this.updateContext();
          }
          readToken_numberSign() {
            if (this.state.pos === 0 && this.readToken_interpreter()) return;
            let t = this.state.pos + 1,
              e = this.codePointAtPos(t);
            if (e >= 48 && e <= 57)
              throw this.raise(l.UnexpectedDigitAfterHash, {
                at: this.state.curPosition(),
              });
            if (e === 123 || (e === 91 && this.hasPlugin("recordAndTuple"))) {
              if (
                (this.expectPlugin("recordAndTuple"),
                this.getPluginOption("recordAndTuple", "syntaxType") !== "hash")
              )
                throw this.raise(
                  e === 123
                    ? l.RecordExpressionHashIncorrectStartSyntaxType
                    : l.TupleExpressionHashIncorrectStartSyntaxType,
                  { at: this.state.curPosition() }
                );
              (this.state.pos += 2),
                e === 123 ? this.finishToken(7) : this.finishToken(1);
            } else
              ge(e)
                ? (++this.state.pos, this.finishToken(134, this.readWord1(e)))
                : e === 92
                ? (++this.state.pos, this.finishToken(134, this.readWord1()))
                : this.finishOp(27, 1);
          }
          readToken_dot() {
            let t = this.input.charCodeAt(this.state.pos + 1);
            if (t >= 48 && t <= 57) {
              this.readNumber(!0);
              return;
            }
            t === 46 && this.input.charCodeAt(this.state.pos + 2) === 46
              ? ((this.state.pos += 3), this.finishToken(21))
              : (++this.state.pos, this.finishToken(16));
          }
          readToken_slash() {
            this.input.charCodeAt(this.state.pos + 1) === 61
              ? this.finishOp(31, 2)
              : this.finishOp(56, 1);
          }
          readToken_interpreter() {
            if (this.state.pos !== 0 || this.length < 2) return !1;
            let t = this.input.charCodeAt(this.state.pos + 1);
            if (t !== 33) return !1;
            let e = this.state.pos;
            for (
              this.state.pos += 1;
              !Oe(t) && ++this.state.pos < this.length;

            )
              t = this.input.charCodeAt(this.state.pos);
            let s = this.input.slice(e + 2, this.state.pos);
            return this.finishToken(28, s), !0;
          }
          readToken_mult_modulo(t) {
            let e = t === 42 ? 55 : 54,
              s = 1,
              r = this.input.charCodeAt(this.state.pos + 1);
            t === 42 &&
              r === 42 &&
              (s++, (r = this.input.charCodeAt(this.state.pos + 2)), (e = 57)),
              r === 61 && !this.state.inType && (s++, (e = t === 37 ? 33 : 30)),
              this.finishOp(e, s);
          }
          readToken_pipe_amp(t) {
            let e = this.input.charCodeAt(this.state.pos + 1);
            if (e === t) {
              this.input.charCodeAt(this.state.pos + 2) === 61
                ? this.finishOp(30, 3)
                : this.finishOp(t === 124 ? 41 : 42, 2);
              return;
            }
            if (t === 124) {
              if (e === 62) {
                this.finishOp(39, 2);
                return;
              }
              if (this.hasPlugin("recordAndTuple") && e === 125) {
                if (
                  this.getPluginOption("recordAndTuple", "syntaxType") !== "bar"
                )
                  throw this.raise(
                    l.RecordExpressionBarIncorrectEndSyntaxType,
                    { at: this.state.curPosition() }
                  );
                (this.state.pos += 2), this.finishToken(9);
                return;
              }
              if (this.hasPlugin("recordAndTuple") && e === 93) {
                if (
                  this.getPluginOption("recordAndTuple", "syntaxType") !== "bar"
                )
                  throw this.raise(l.TupleExpressionBarIncorrectEndSyntaxType, {
                    at: this.state.curPosition(),
                  });
                (this.state.pos += 2), this.finishToken(4);
                return;
              }
            }
            if (e === 61) {
              this.finishOp(30, 2);
              return;
            }
            this.finishOp(t === 124 ? 43 : 45, 1);
          }
          readToken_caret() {
            let t = this.input.charCodeAt(this.state.pos + 1);
            if (t === 61 && !this.state.inType) this.finishOp(32, 2);
            else if (
              t === 94 &&
              this.hasPlugin([
                "pipelineOperator",
                { proposal: "hack", topicToken: "^^" },
              ])
            ) {
              if (
                (this.finishOp(37, 2),
                this.input.codePointAt(this.state.pos) === 94)
              )
                throw this.unexpected();
            } else this.finishOp(44, 1);
          }
          readToken_atSign() {
            this.input.charCodeAt(this.state.pos + 1) === 64 &&
            this.hasPlugin([
              "pipelineOperator",
              { proposal: "hack", topicToken: "@@" },
            ])
              ? this.finishOp(38, 2)
              : this.finishOp(26, 1);
          }
          readToken_plus_min(t) {
            let e = this.input.charCodeAt(this.state.pos + 1);
            if (e === t) {
              this.finishOp(34, 2);
              return;
            }
            e === 61 ? this.finishOp(30, 2) : this.finishOp(53, 1);
          }
          readToken_lt() {
            let { pos: t } = this.state,
              e = this.input.charCodeAt(t + 1);
            if (e === 60) {
              if (this.input.charCodeAt(t + 2) === 61) {
                this.finishOp(30, 3);
                return;
              }
              this.finishOp(51, 2);
              return;
            }
            if (e === 61) {
              this.finishOp(49, 2);
              return;
            }
            this.finishOp(47, 1);
          }
          readToken_gt() {
            let { pos: t } = this.state,
              e = this.input.charCodeAt(t + 1);
            if (e === 62) {
              let s = this.input.charCodeAt(t + 2) === 62 ? 3 : 2;
              if (this.input.charCodeAt(t + s) === 61) {
                this.finishOp(30, s + 1);
                return;
              }
              this.finishOp(52, s);
              return;
            }
            if (e === 61) {
              this.finishOp(49, 2);
              return;
            }
            this.finishOp(48, 1);
          }
          readToken_eq_excl(t) {
            let e = this.input.charCodeAt(this.state.pos + 1);
            if (e === 61) {
              this.finishOp(
                46,
                this.input.charCodeAt(this.state.pos + 2) === 61 ? 3 : 2
              );
              return;
            }
            if (t === 61 && e === 62) {
              (this.state.pos += 2), this.finishToken(19);
              return;
            }
            this.finishOp(t === 61 ? 29 : 35, 1);
          }
          readToken_question() {
            let t = this.input.charCodeAt(this.state.pos + 1),
              e = this.input.charCodeAt(this.state.pos + 2);
            t === 63
              ? e === 61
                ? this.finishOp(30, 3)
                : this.finishOp(40, 2)
              : t === 46 && !(e >= 48 && e <= 57)
              ? ((this.state.pos += 2), this.finishToken(18))
              : (++this.state.pos, this.finishToken(17));
          }
          getTokenFromCode(t) {
            switch (t) {
              case 46:
                this.readToken_dot();
                return;
              case 40:
                ++this.state.pos, this.finishToken(10);
                return;
              case 41:
                ++this.state.pos, this.finishToken(11);
                return;
              case 59:
                ++this.state.pos, this.finishToken(13);
                return;
              case 44:
                ++this.state.pos, this.finishToken(12);
                return;
              case 91:
                if (
                  this.hasPlugin("recordAndTuple") &&
                  this.input.charCodeAt(this.state.pos + 1) === 124
                ) {
                  if (
                    this.getPluginOption("recordAndTuple", "syntaxType") !==
                    "bar"
                  )
                    throw this.raise(
                      l.TupleExpressionBarIncorrectStartSyntaxType,
                      { at: this.state.curPosition() }
                    );
                  (this.state.pos += 2), this.finishToken(2);
                } else ++this.state.pos, this.finishToken(0);
                return;
              case 93:
                ++this.state.pos, this.finishToken(3);
                return;
              case 123:
                if (
                  this.hasPlugin("recordAndTuple") &&
                  this.input.charCodeAt(this.state.pos + 1) === 124
                ) {
                  if (
                    this.getPluginOption("recordAndTuple", "syntaxType") !==
                    "bar"
                  )
                    throw this.raise(
                      l.RecordExpressionBarIncorrectStartSyntaxType,
                      { at: this.state.curPosition() }
                    );
                  (this.state.pos += 2), this.finishToken(6);
                } else ++this.state.pos, this.finishToken(5);
                return;
              case 125:
                ++this.state.pos, this.finishToken(8);
                return;
              case 58:
                this.hasPlugin("functionBind") &&
                this.input.charCodeAt(this.state.pos + 1) === 58
                  ? this.finishOp(15, 2)
                  : (++this.state.pos, this.finishToken(14));
                return;
              case 63:
                this.readToken_question();
                return;
              case 96:
                this.readTemplateToken();
                return;
              case 48: {
                let e = this.input.charCodeAt(this.state.pos + 1);
                if (e === 120 || e === 88) {
                  this.readRadixNumber(16);
                  return;
                }
                if (e === 111 || e === 79) {
                  this.readRadixNumber(8);
                  return;
                }
                if (e === 98 || e === 66) {
                  this.readRadixNumber(2);
                  return;
                }
              }
              case 49:
              case 50:
              case 51:
              case 52:
              case 53:
              case 54:
              case 55:
              case 56:
              case 57:
                this.readNumber(!1);
                return;
              case 34:
              case 39:
                this.readString(t);
                return;
              case 47:
                this.readToken_slash();
                return;
              case 37:
              case 42:
                this.readToken_mult_modulo(t);
                return;
              case 124:
              case 38:
                this.readToken_pipe_amp(t);
                return;
              case 94:
                this.readToken_caret();
                return;
              case 43:
              case 45:
                this.readToken_plus_min(t);
                return;
              case 60:
                this.readToken_lt();
                return;
              case 62:
                this.readToken_gt();
                return;
              case 61:
              case 33:
                this.readToken_eq_excl(t);
                return;
              case 126:
                this.finishOp(36, 1);
                return;
              case 64:
                this.readToken_atSign();
                return;
              case 35:
                this.readToken_numberSign();
                return;
              case 92:
                this.readWord();
                return;
              default:
                if (ge(t)) {
                  this.readWord(t);
                  return;
                }
            }
            throw this.raise(l.InvalidOrUnexpectedToken, {
              at: this.state.curPosition(),
              unexpected: String.fromCodePoint(t),
            });
          }
          finishOp(t, e) {
            let s = this.input.slice(this.state.pos, this.state.pos + e);
            (this.state.pos += e), this.finishToken(t, s);
          }
          readRegexp() {
            let t = this.state.startLoc,
              e = this.state.start + 1,
              s,
              r,
              { pos: i } = this.state;
            for (; ; ++i) {
              if (i >= this.length)
                throw this.raise(l.UnterminatedRegExp, { at: m(t, 1) });
              let c = this.input.charCodeAt(i);
              if (Oe(c))
                throw this.raise(l.UnterminatedRegExp, { at: m(t, 1) });
              if (s) s = !1;
              else {
                if (c === 91) r = !0;
                else if (c === 93 && r) r = !1;
                else if (c === 47 && !r) break;
                s = c === 92;
              }
            }
            let a = this.input.slice(e, i);
            ++i;
            let n = "",
              o = () => m(t, i + 2 - e);
            for (; i < this.length; ) {
              let c = this.codePointAtPos(i),
                f = String.fromCharCode(c);
              if (Qo.has(c))
                c === 118
                  ? (this.expectPlugin("regexpUnicodeSets", o()),
                    n.includes("u") &&
                      this.raise(l.IncompatibleRegExpUVFlags, { at: o() }))
                  : c === 117 &&
                    n.includes("v") &&
                    this.raise(l.IncompatibleRegExpUVFlags, { at: o() }),
                  n.includes(f) &&
                    this.raise(l.DuplicateRegExpFlags, { at: o() });
              else if (ze(c) || c === 92)
                this.raise(l.MalformedRegExpFlags, { at: o() });
              else break;
              ++i, (n += f);
            }
            (this.state.pos = i),
              this.finishToken(133, { pattern: a, flags: n });
          }
          readInt(t, e, s) {
            let r =
                arguments.length > 3 && arguments[3] !== void 0
                  ? arguments[3]
                  : !0,
              i = this.state.pos,
              a = t === 16 ? vr.hex : vr.decBinOct,
              n =
                t === 16
                  ? At.hex
                  : t === 10
                  ? At.dec
                  : t === 8
                  ? At.oct
                  : At.bin,
              o = !1,
              c = 0;
            for (let f = 0, y = e == null ? 1 / 0 : e; f < y; ++f) {
              let T = this.input.charCodeAt(this.state.pos),
                v;
              if (T === 95 && r !== "bail") {
                let N = this.input.charCodeAt(this.state.pos - 1),
                  R = this.input.charCodeAt(this.state.pos + 1);
                r
                  ? (Number.isNaN(R) || !n(R) || a.has(N) || a.has(R)) &&
                    this.raise(l.UnexpectedNumericSeparator, {
                      at: this.state.curPosition(),
                    })
                  : this.raise(l.NumericSeparatorInEscapeSequence, {
                      at: this.state.curPosition(),
                    }),
                  ++this.state.pos;
                continue;
              }
              if (
                (T >= 97
                  ? (v = T - 97 + 10)
                  : T >= 65
                  ? (v = T - 65 + 10)
                  : $o(T)
                  ? (v = T - 48)
                  : (v = 1 / 0),
                v >= t)
              )
                if (this.options.errorRecovery && v <= 9)
                  (v = 0),
                    this.raise(l.InvalidDigit, {
                      at: this.state.curPosition(),
                      radix: t,
                    });
                else if (s) (v = 0), (o = !0);
                else break;
              ++this.state.pos, (c = c * t + v);
            }
            return this.state.pos === i ||
              (e != null && this.state.pos - i !== e) ||
              o
              ? null
              : c;
          }
          readRadixNumber(t) {
            let e = this.state.curPosition(),
              s = !1;
            this.state.pos += 2;
            let r = this.readInt(t);
            r == null && this.raise(l.InvalidDigit, { at: m(e, 2), radix: t });
            let i = this.input.charCodeAt(this.state.pos);
            if (i === 110) ++this.state.pos, (s = !0);
            else if (i === 109) throw this.raise(l.InvalidDecimal, { at: e });
            if (ge(this.codePointAtPos(this.state.pos)))
              throw this.raise(l.NumberIdentifier, {
                at: this.state.curPosition(),
              });
            if (s) {
              let a = this.input
                .slice(e.index, this.state.pos)
                .replace(/[_n]/g, "");
              this.finishToken(131, a);
              return;
            }
            this.finishToken(130, r);
          }
          readNumber(t) {
            let e = this.state.pos,
              s = this.state.curPosition(),
              r = !1,
              i = !1,
              a = !1,
              n = !1,
              o = !1;
            !t &&
              this.readInt(10) === null &&
              this.raise(l.InvalidNumber, { at: this.state.curPosition() });
            let c = this.state.pos - e >= 2 && this.input.charCodeAt(e) === 48;
            if (c) {
              let v = this.input.slice(e, this.state.pos);
              if (
                (this.recordStrictModeErrors(l.StrictOctalLiteral, { at: s }),
                !this.state.strict)
              ) {
                let N = v.indexOf("_");
                N > 0 &&
                  this.raise(l.ZeroDigitNumericSeparator, { at: m(s, N) });
              }
              o = c && !/[89]/.test(v);
            }
            let f = this.input.charCodeAt(this.state.pos);
            if (
              (f === 46 &&
                !o &&
                (++this.state.pos,
                this.readInt(10),
                (r = !0),
                (f = this.input.charCodeAt(this.state.pos))),
              (f === 69 || f === 101) &&
                !o &&
                ((f = this.input.charCodeAt(++this.state.pos)),
                (f === 43 || f === 45) && ++this.state.pos,
                this.readInt(10) === null &&
                  this.raise(l.InvalidOrMissingExponent, { at: s }),
                (r = !0),
                (n = !0),
                (f = this.input.charCodeAt(this.state.pos))),
              f === 110 &&
                ((r || c) && this.raise(l.InvalidBigIntLiteral, { at: s }),
                ++this.state.pos,
                (i = !0)),
              f === 109 &&
                (this.expectPlugin("decimal", this.state.curPosition()),
                (n || c) && this.raise(l.InvalidDecimal, { at: s }),
                ++this.state.pos,
                (a = !0)),
              ge(this.codePointAtPos(this.state.pos)))
            )
              throw this.raise(l.NumberIdentifier, {
                at: this.state.curPosition(),
              });
            let y = this.input.slice(e, this.state.pos).replace(/[_mn]/g, "");
            if (i) {
              this.finishToken(131, y);
              return;
            }
            if (a) {
              this.finishToken(132, y);
              return;
            }
            let T = o ? parseInt(y, 8) : parseFloat(y);
            this.finishToken(130, T);
          }
          readCodePoint(t) {
            let e = this.input.charCodeAt(this.state.pos),
              s;
            if (e === 123) {
              if (
                (++this.state.pos,
                (s = this.readHexChar(
                  this.input.indexOf("}", this.state.pos) - this.state.pos,
                  !0,
                  t
                )),
                ++this.state.pos,
                s !== null && s > 1114111)
              )
                if (t)
                  this.raise(l.InvalidCodePoint, {
                    at: this.state.curPosition(),
                  });
                else return null;
            } else s = this.readHexChar(4, !1, t);
            return s;
          }
          readString(t) {
            let e = "",
              s = ++this.state.pos;
            for (;;) {
              if (this.state.pos >= this.length)
                throw this.raise(l.UnterminatedString, {
                  at: this.state.startLoc,
                });
              let r = this.input.charCodeAt(this.state.pos);
              if (r === t) break;
              if (r === 92)
                (e += this.input.slice(s, this.state.pos)),
                  (e += this.readEscapedChar(!1)),
                  (s = this.state.pos);
              else if (r === 8232 || r === 8233)
                ++this.state.pos,
                  ++this.state.curLine,
                  (this.state.lineStart = this.state.pos);
              else {
                if (Oe(r))
                  throw this.raise(l.UnterminatedString, {
                    at: this.state.startLoc,
                  });
                ++this.state.pos;
              }
            }
            (e += this.input.slice(s, this.state.pos++)),
              this.finishToken(129, e);
          }
          readTemplateContinuation() {
            this.match(8) || this.unexpected(null, 8),
              this.state.pos--,
              this.readTemplateToken();
          }
          readTemplateToken() {
            let t = "",
              e = this.state.pos,
              s = !1;
            for (++this.state.pos; ; ) {
              if (this.state.pos >= this.length)
                throw this.raise(l.UnterminatedTemplate, {
                  at: m(this.state.startLoc, 1),
                });
              let r = this.input.charCodeAt(this.state.pos);
              if (r === 96) {
                ++this.state.pos,
                  (t += this.input.slice(e, this.state.pos)),
                  this.finishToken(24, s ? null : t);
                return;
              }
              if (
                r === 36 &&
                this.input.charCodeAt(this.state.pos + 1) === 123
              ) {
                (this.state.pos += 2),
                  (t += this.input.slice(e, this.state.pos)),
                  this.finishToken(25, s ? null : t);
                return;
              }
              if (r === 92) {
                t += this.input.slice(e, this.state.pos);
                let i = this.readEscapedChar(!0);
                i === null ? (s = !0) : (t += i), (e = this.state.pos);
              } else if (Oe(r)) {
                switch (
                  ((t += this.input.slice(e, this.state.pos)),
                  ++this.state.pos,
                  r)
                ) {
                  case 13:
                    this.input.charCodeAt(this.state.pos) === 10 &&
                      ++this.state.pos;
                  case 10:
                    t += `
`;
                    break;
                  default:
                    t += String.fromCharCode(r);
                    break;
                }
                ++this.state.curLine,
                  (this.state.lineStart = this.state.pos),
                  (e = this.state.pos);
              } else ++this.state.pos;
            }
          }
          recordStrictModeErrors(t, e) {
            let { at: s } = e,
              r = s.index;
            this.state.strict && !this.state.strictErrors.has(r)
              ? this.raise(t, { at: s })
              : this.state.strictErrors.set(r, [t, s]);
          }
          readEscapedChar(t) {
            let e = !t,
              s = this.input.charCodeAt(++this.state.pos);
            switch ((++this.state.pos, s)) {
              case 110:
                return `
`;
              case 114:
                return "\r";
              case 120: {
                let r = this.readHexChar(2, !1, e);
                return r === null ? null : String.fromCharCode(r);
              }
              case 117: {
                let r = this.readCodePoint(e);
                return r === null ? null : String.fromCodePoint(r);
              }
              case 116:
                return "	";
              case 98:
                return "\b";
              case 118:
                return "\v";
              case 102:
                return "\f";
              case 13:
                this.input.charCodeAt(this.state.pos) === 10 &&
                  ++this.state.pos;
              case 10:
                (this.state.lineStart = this.state.pos), ++this.state.curLine;
              case 8232:
              case 8233:
                return "";
              case 56:
              case 57:
                if (t) return null;
                this.recordStrictModeErrors(l.StrictNumericEscape, {
                  at: m(this.state.curPosition(), -1),
                });
              default:
                if (s >= 48 && s <= 55) {
                  let r = m(this.state.curPosition(), -1),
                    a = this.input
                      .slice(this.state.pos - 1, this.state.pos + 2)
                      .match(/^[0-7]+/)[0],
                    n = parseInt(a, 8);
                  n > 255 && ((a = a.slice(0, -1)), (n = parseInt(a, 8))),
                    (this.state.pos += a.length - 1);
                  let o = this.input.charCodeAt(this.state.pos);
                  if (a !== "0" || o === 56 || o === 57) {
                    if (t) return null;
                    this.recordStrictModeErrors(l.StrictNumericEscape, {
                      at: r,
                    });
                  }
                  return String.fromCharCode(n);
                }
                return String.fromCharCode(s);
            }
          }
          readHexChar(t, e, s) {
            let r = this.state.curPosition(),
              i = this.readInt(16, t, e, !1);
            return (
              i === null &&
                (s
                  ? this.raise(l.InvalidEscapeSequence, { at: r })
                  : (this.state.pos = r.index - 1)),
              i
            );
          }
          readWord1(t) {
            this.state.containsEsc = !1;
            let e = "",
              s = this.state.pos,
              r = this.state.pos;
            for (
              t !== void 0 && (this.state.pos += t <= 65535 ? 1 : 2);
              this.state.pos < this.length;

            ) {
              let i = this.codePointAtPos(this.state.pos);
              if (ze(i)) this.state.pos += i <= 65535 ? 1 : 2;
              else if (i === 92) {
                (this.state.containsEsc = !0),
                  (e += this.input.slice(r, this.state.pos));
                let a = this.state.curPosition(),
                  n = this.state.pos === s ? ge : ze;
                if (this.input.charCodeAt(++this.state.pos) !== 117) {
                  this.raise(l.MissingUnicodeEscape, {
                    at: this.state.curPosition(),
                  }),
                    (r = this.state.pos - 1);
                  continue;
                }
                ++this.state.pos;
                let o = this.readCodePoint(!0);
                o !== null &&
                  (n(o) || this.raise(l.EscapedCharNotAnIdentifier, { at: a }),
                  (e += String.fromCodePoint(o))),
                  (r = this.state.pos);
              } else break;
            }
            return e + this.input.slice(r, this.state.pos);
          }
          readWord(t) {
            let e = this.readWord1(t),
              s = ae.get(e);
            s !== void 0
              ? this.finishToken(s, ve(s))
              : this.finishToken(128, e);
          }
          checkKeywordEscapes() {
            let { type: t } = this.state;
            Vt(t) &&
              this.state.containsEsc &&
              this.raise(l.InvalidEscapedReservedWord, {
                at: this.state.startLoc,
                reservedWord: ve(t),
              });
          }
          raise(t, e) {
            let { at: s } = e,
              r = u(e, Jo),
              i = s instanceof p ? s : s.loc.start,
              a = t({ loc: i, details: r });
            if (!this.options.errorRecovery) throw a;
            return this.isLookahead || this.state.errors.push(a), a;
          }
          raiseOverwrite(t, e) {
            let { at: s } = e,
              r = u(e, Yo),
              i = s instanceof p ? s : s.loc.start,
              a = i.index,
              n = this.state.errors;
            for (let o = n.length - 1; o >= 0; o--) {
              let c = n[o];
              if (c.loc.index === a) return (n[o] = t({ loc: i, details: r }));
              if (c.loc.index < a) break;
            }
            return this.raise(t, e);
          }
          updateContext(t) {}
          unexpected(t, e) {
            throw this.raise(l.UnexpectedToken, {
              expected: e ? ve(e) : null,
              at: t != null ? t : this.state.startLoc,
            });
          }
          expectPlugin(t, e) {
            if (this.hasPlugin(t)) return !0;
            throw this.raise(l.MissingPlugin, {
              at: e != null ? e : this.state.startLoc,
              missingPlugin: [t],
            });
          }
          expectOnePlugin(t) {
            if (!t.some((e) => this.hasPlugin(e)))
              throw this.raise(l.MissingOneOfPlugins, {
                at: this.state.startLoc,
                missingPlugin: t,
              });
          }
        },
        ns = class {
          constructor(t) {
            (this.var = new Set()),
              (this.lexical = new Set()),
              (this.functions = new Set()),
              (this.flags = t);
          }
        },
        os = class {
          constructor(t, e) {
            (this.parser = void 0),
              (this.scopeStack = []),
              (this.inModule = void 0),
              (this.undefinedExports = new Map()),
              (this.parser = t),
              (this.inModule = e);
          }
          get inFunction() {
            return (this.currentVarScopeFlags() & Ae) > 0;
          }
          get allowSuper() {
            return (this.currentThisScopeFlags() & ct) > 0;
          }
          get allowDirectSuper() {
            return (this.currentThisScopeFlags() & mr) > 0;
          }
          get inClass() {
            return (this.currentThisScopeFlags() & Fe) > 0;
          }
          get inClassAndNotInNonArrowFunction() {
            let t = this.currentThisScopeFlags();
            return (t & Fe) > 0 && (t & Ae) === 0;
          }
          get inStaticBlock() {
            for (let t = this.scopeStack.length - 1; ; t--) {
              let { flags: e } = this.scopeStack[t];
              if (e & Jt) return !0;
              if (e & (ft | Fe)) return !1;
            }
          }
          get inNonArrowFunction() {
            return (this.currentThisScopeFlags() & Ae) > 0;
          }
          get treatFunctionsAsVar() {
            return this.treatFunctionsAsVarInScope(this.currentScope());
          }
          createScope(t) {
            return new ns(t);
          }
          enter(t) {
            this.scopeStack.push(this.createScope(t));
          }
          exit() {
            this.scopeStack.pop();
          }
          treatFunctionsAsVarInScope(t) {
            return !!(
              t.flags & (Ae | Jt) ||
              (!this.parser.inModule && t.flags & $e)
            );
          }
          declareName(t, e, s) {
            let r = this.currentScope();
            if (e & Se || e & dt)
              this.checkRedeclarationInScope(r, t, e, s),
                e & dt ? r.functions.add(t) : r.lexical.add(t),
                e & Se && this.maybeExportDefined(r, t);
            else if (e & yr)
              for (
                let i = this.scopeStack.length - 1;
                i >= 0 &&
                ((r = this.scopeStack[i]),
                this.checkRedeclarationInScope(r, t, e, s),
                r.var.add(t),
                this.maybeExportDefined(r, t),
                !(r.flags & ft));
                --i
              );
            this.parser.inModule &&
              r.flags & $e &&
              this.undefinedExports.delete(t);
          }
          maybeExportDefined(t, e) {
            this.parser.inModule &&
              t.flags & $e &&
              this.undefinedExports.delete(e);
          }
          checkRedeclarationInScope(t, e, s, r) {
            this.isRedeclaredInScope(t, e, s) &&
              this.parser.raise(l.VarRedeclaration, {
                at: r,
                identifierName: e,
              });
          }
          isRedeclaredInScope(t, e, s) {
            return s & Pe
              ? s & Se
                ? t.lexical.has(e) || t.functions.has(e) || t.var.has(e)
                : s & dt
                ? t.lexical.has(e) ||
                  (!this.treatFunctionsAsVarInScope(t) && t.var.has(e))
                : (t.lexical.has(e) &&
                    !(t.flags & dr && t.lexical.values().next().value === e)) ||
                  (!this.treatFunctionsAsVarInScope(t) && t.functions.has(e))
              : !1;
          }
          checkLocalExport(t) {
            let { name: e } = t,
              s = this.scopeStack[0];
            !s.lexical.has(e) &&
              !s.var.has(e) &&
              !s.functions.has(e) &&
              this.undefinedExports.set(e, t.loc.start);
          }
          currentScope() {
            return this.scopeStack[this.scopeStack.length - 1];
          }
          currentVarScopeFlags() {
            for (let t = this.scopeStack.length - 1; ; t--) {
              let { flags: e } = this.scopeStack[t];
              if (e & ft) return e;
            }
          }
          currentThisScopeFlags() {
            for (let t = this.scopeStack.length - 1; ; t--) {
              let { flags: e } = this.scopeStack[t];
              if (e & (ft | Fe) && !(e & Xt)) return e;
            }
          }
        },
        eh = class extends ns {
          constructor() {
            super(...arguments), (this.declareFunctions = new Set());
          }
        },
        th = class extends os {
          createScope(t) {
            return new eh(t);
          }
          declareName(t, e, s) {
            let r = this.currentScope();
            if (e & Zt) {
              this.checkRedeclarationInScope(r, t, e, s),
                this.maybeExportDefined(r, t),
                r.declareFunctions.add(t);
              return;
            }
            super.declareName(...arguments);
          }
          isRedeclaredInScope(t, e, s) {
            return super.isRedeclaredInScope(...arguments)
              ? !0
              : s & Zt
              ? !t.declareFunctions.has(e) &&
                (t.lexical.has(e) || t.functions.has(e))
              : !1;
          }
          checkLocalExport(t) {
            this.scopeStack[0].declareFunctions.has(t.name) ||
              super.checkLocalExport(t);
          }
        },
        sh = class {
          constructor() {
            (this.privateNames = new Set()),
              (this.loneAccessors = new Map()),
              (this.undefinedPrivateNames = new Map());
          }
        },
        rh = class {
          constructor(t) {
            (this.parser = void 0),
              (this.stack = []),
              (this.undefinedPrivateNames = new Map()),
              (this.parser = t);
          }
          current() {
            return this.stack[this.stack.length - 1];
          }
          enter() {
            this.stack.push(new sh());
          }
          exit() {
            let t = this.stack.pop(),
              e = this.current();
            for (let [s, r] of Array.from(t.undefinedPrivateNames))
              e
                ? e.undefinedPrivateNames.has(s) ||
                  e.undefinedPrivateNames.set(s, r)
                : this.parser.raise(l.InvalidPrivateFieldResolution, {
                    at: r,
                    identifierName: s,
                  });
          }
          declarePrivateName(t, e, s) {
            let {
                privateNames: r,
                loneAccessors: i,
                undefinedPrivateNames: a,
              } = this.current(),
              n = r.has(t);
            if (e & ss) {
              let o = n && i.get(t);
              if (o) {
                let c = o & xt,
                  f = e & xt,
                  y = o & ss,
                  T = e & ss;
                (n = y === T || c !== f), n || i.delete(t);
              } else n || i.set(t, e);
            }
            n &&
              this.parser.raise(l.PrivateNameRedeclaration, {
                at: s,
                identifierName: t,
              }),
              r.add(t),
              a.delete(t);
          }
          usePrivateName(t, e) {
            let s;
            for (s of this.stack) if (s.privateNames.has(t)) return;
            s
              ? s.undefinedPrivateNames.set(t, e)
              : this.parser.raise(l.InvalidPrivateFieldResolution, {
                  at: e,
                  identifierName: t,
                });
          }
        },
        ih = 0,
        Sr = 1,
        hs = 2,
        wr = 3,
        Pt = class {
          constructor() {
            let t =
              arguments.length > 0 && arguments[0] !== void 0
                ? arguments[0]
                : ih;
            (this.type = void 0), (this.type = t);
          }
          canBeArrowParameterDeclaration() {
            return this.type === hs || this.type === Sr;
          }
          isCertainlyParameterDeclaration() {
            return this.type === wr;
          }
        },
        Nr = class extends Pt {
          constructor(t) {
            super(t), (this.declarationErrors = new Map());
          }
          recordDeclarationError(t, e) {
            let { at: s } = e,
              r = s.index;
            this.declarationErrors.set(r, [t, s]);
          }
          clearDeclarationError(t) {
            this.declarationErrors.delete(t);
          }
          iterateErrors(t) {
            this.declarationErrors.forEach(t);
          }
        },
        ah = class {
          constructor(t) {
            (this.parser = void 0),
              (this.stack = [new Pt()]),
              (this.parser = t);
          }
          enter(t) {
            this.stack.push(t);
          }
          exit() {
            this.stack.pop();
          }
          recordParameterInitializerError(t, e) {
            let { at: s } = e,
              r = { at: s.loc.start },
              { stack: i } = this,
              a = i.length - 1,
              n = i[a];
            for (; !n.isCertainlyParameterDeclaration(); ) {
              if (n.canBeArrowParameterDeclaration())
                n.recordDeclarationError(t, r);
              else return;
              n = i[--a];
            }
            this.parser.raise(t, r);
          }
          recordArrowParemeterBindingError(t, e) {
            let { at: s } = e,
              { stack: r } = this,
              i = r[r.length - 1],
              a = { at: s.loc.start };
            if (i.isCertainlyParameterDeclaration()) this.parser.raise(t, a);
            else if (i.canBeArrowParameterDeclaration())
              i.recordDeclarationError(t, a);
            else return;
          }
          recordAsyncArrowParametersError(t) {
            let { at: e } = t,
              { stack: s } = this,
              r = s.length - 1,
              i = s[r];
            for (; i.canBeArrowParameterDeclaration(); )
              i.type === hs &&
                i.recordDeclarationError(l.AwaitBindingIdentifier, { at: e }),
                (i = s[--r]);
          }
          validateAsPattern() {
            let { stack: t } = this,
              e = t[t.length - 1];
            !e.canBeArrowParameterDeclaration() ||
              e.iterateErrors((s) => {
                let [r, i] = s;
                this.parser.raise(r, { at: i });
                let a = t.length - 2,
                  n = t[a];
                for (; n.canBeArrowParameterDeclaration(); )
                  n.clearDeclarationError(i.index), (n = t[--a]);
              });
          }
        };
      function nh() {
        return new Pt(wr);
      }
      function oh() {
        return new Nr(Sr);
      }
      function hh() {
        return new Nr(hs);
      }
      function Ir() {
        return new Pt();
      }
      var He = 0,
        kr = 1,
        Tt = 2,
        Dr = 4,
        We = 8,
        lh = class {
          constructor() {
            this.stacks = [];
          }
          enter(t) {
            this.stacks.push(t);
          }
          exit() {
            this.stacks.pop();
          }
          currentFlags() {
            return this.stacks[this.stacks.length - 1];
          }
          get hasAwait() {
            return (this.currentFlags() & Tt) > 0;
          }
          get hasYield() {
            return (this.currentFlags() & kr) > 0;
          }
          get hasReturn() {
            return (this.currentFlags() & Dr) > 0;
          }
          get hasIn() {
            return (this.currentFlags() & We) > 0;
          }
        };
      function Et(t, e) {
        return (t ? Tt : 0) | (e ? kr : 0);
      }
      var uh = class extends Zo {
          addExtra(t, e, s) {
            let r =
              arguments.length > 3 && arguments[3] !== void 0
                ? arguments[3]
                : !0;
            if (!t) return;
            let i = (t.extra = t.extra || {});
            r
              ? (i[e] = s)
              : Object.defineProperty(i, e, { enumerable: r, value: s });
          }
          isContextual(t) {
            return this.state.type === t && !this.state.containsEsc;
          }
          isUnparsedContextual(t, e) {
            let s = t + e.length;
            if (this.input.slice(t, s) === e) {
              let r = this.input.charCodeAt(s);
              return !(ze(r) || (r & 64512) === 55296);
            }
            return !1;
          }
          isLookaheadContextual(t) {
            let e = this.nextTokenStart();
            return this.isUnparsedContextual(e, t);
          }
          eatContextual(t) {
            return this.isContextual(t) ? (this.next(), !0) : !1;
          }
          expectContextual(t, e) {
            if (!this.eatContextual(t))
              throw e != null
                ? this.raise(e, { at: this.state.startLoc })
                : this.unexpected(null, t);
          }
          canInsertSemicolon() {
            return (
              this.match(135) || this.match(8) || this.hasPrecedingLineBreak()
            );
          }
          hasPrecedingLineBreak() {
            return is.test(
              this.input.slice(this.state.lastTokEndLoc.index, this.state.start)
            );
          }
          hasFollowingLineBreak() {
            return (br.lastIndex = this.state.end), br.test(this.input);
          }
          isLineTerminator() {
            return this.eat(13) || this.canInsertSemicolon();
          }
          semicolon() {
            ((
              arguments.length > 0 && arguments[0] !== void 0
                ? arguments[0]
                : !0
            )
              ? this.isLineTerminator()
              : this.eat(13)) ||
              this.raise(l.MissingSemicolon, { at: this.state.lastTokEndLoc });
          }
          expect(t, e) {
            this.eat(t) || this.unexpected(e, t);
          }
          tryParse(t) {
            let e =
                arguments.length > 1 && arguments[1] !== void 0
                  ? arguments[1]
                  : this.state.clone(),
              s = { node: null };
            try {
              let r = t(function () {
                let i =
                  arguments.length > 0 && arguments[0] !== void 0
                    ? arguments[0]
                    : null;
                throw ((s.node = i), s);
              });
              if (this.state.errors.length > e.errors.length) {
                let i = this.state;
                return (
                  (this.state = e),
                  (this.state.tokensLength = i.tokensLength),
                  {
                    node: r,
                    error: i.errors[e.errors.length],
                    thrown: !1,
                    aborted: !1,
                    failState: i,
                  }
                );
              }
              return {
                node: r,
                error: null,
                thrown: !1,
                aborted: !1,
                failState: null,
              };
            } catch (r) {
              let i = this.state;
              if (((this.state = e), r instanceof SyntaxError))
                return {
                  node: null,
                  error: r,
                  thrown: !0,
                  aborted: !1,
                  failState: i,
                };
              if (r === s)
                return {
                  node: s.node,
                  error: null,
                  thrown: !1,
                  aborted: !0,
                  failState: i,
                };
              throw r;
            }
          }
          checkExpressionErrors(t, e) {
            if (!t) return !1;
            let {
                shorthandAssignLoc: s,
                doubleProtoLoc: r,
                privateKeyLoc: i,
                optionalParametersLoc: a,
              } = t,
              n = !!s || !!r || !!a || !!i;
            if (!e) return n;
            s != null && this.raise(l.InvalidCoverInitializedName, { at: s }),
              r != null && this.raise(l.DuplicateProto, { at: r }),
              i != null && this.raise(l.UnexpectedPrivateField, { at: i }),
              a != null && this.unexpected(a);
          }
          isLiteralPropertyName() {
            return nr(this.state.type);
          }
          isPrivateName(t) {
            return t.type === "PrivateName";
          }
          getPrivateNameSV(t) {
            return t.id.name;
          }
          hasPropertyAsPrivateName(t) {
            return (
              (t.type === "MemberExpression" ||
                t.type === "OptionalMemberExpression") &&
              this.isPrivateName(t.property)
            );
          }
          isOptionalChain(t) {
            return (
              t.type === "OptionalMemberExpression" ||
              t.type === "OptionalCallExpression"
            );
          }
          isObjectProperty(t) {
            return t.type === "ObjectProperty";
          }
          isObjectMethod(t) {
            return t.type === "ObjectMethod";
          }
          initializeScopes() {
            let t =
                arguments.length > 0 && arguments[0] !== void 0
                  ? arguments[0]
                  : this.options.sourceType === "module",
              e = this.state.labels;
            this.state.labels = [];
            let s = this.exportedIdentifiers;
            this.exportedIdentifiers = new Set();
            let r = this.inModule;
            this.inModule = t;
            let i = this.scope,
              a = this.getScopeHandler();
            this.scope = new a(this, t);
            let n = this.prodParam;
            this.prodParam = new lh();
            let o = this.classScope;
            this.classScope = new rh(this);
            let c = this.expressionScope;
            return (
              (this.expressionScope = new ah(this)),
              () => {
                (this.state.labels = e),
                  (this.exportedIdentifiers = s),
                  (this.inModule = r),
                  (this.scope = i),
                  (this.prodParam = n),
                  (this.classScope = o),
                  (this.expressionScope = c);
              }
            );
          }
          enterInitialScopes() {
            let t = He;
            this.inModule && (t |= Tt),
              this.scope.enter($e),
              this.prodParam.enter(t);
          }
          checkDestructuringPrivate(t) {
            let { privateKeyLoc: e } = t;
            e !== null && this.expectPlugin("destructuringPrivate", e);
          }
        },
        bt = class {
          constructor() {
            (this.shorthandAssignLoc = null),
              (this.doubleProtoLoc = null),
              (this.privateKeyLoc = null),
              (this.optionalParametersLoc = null);
          }
        },
        Ct = class {
          constructor(t, e, s) {
            (this.type = ""),
              (this.start = e),
              (this.end = 0),
              (this.loc = new d(s)),
              t != null && t.options.ranges && (this.range = [e, 0]),
              t != null && t.filename && (this.loc.filename = t.filename);
          }
        },
        ls = Ct.prototype;
      ls.__clone = function () {
        let t = new Ct(),
          e = Object.keys(this);
        for (let s = 0, r = e.length; s < r; s++) {
          let i = e[s];
          i !== "leadingComments" &&
            i !== "trailingComments" &&
            i !== "innerComments" &&
            (t[i] = this[i]);
        }
        return t;
      };
      function ch(t) {
        return Ee(t);
      }
      function Ee(t) {
        let {
            type: e,
            start: s,
            end: r,
            loc: i,
            range: a,
            extra: n,
            name: o,
          } = t,
          c = Object.create(ls);
        return (
          (c.type = e),
          (c.start = s),
          (c.end = r),
          (c.loc = i),
          (c.range = a),
          (c.extra = n),
          (c.name = o),
          e === "Placeholder" && (c.expectedNode = t.expectedNode),
          c
        );
      }
      function ph(t) {
        let { type: e, start: s, end: r, loc: i, range: a, extra: n } = t;
        if (e === "Placeholder") return ch(t);
        let o = Object.create(ls);
        return (
          (o.type = e),
          (o.start = s),
          (o.end = r),
          (o.loc = i),
          (o.range = a),
          t.raw !== void 0 ? (o.raw = t.raw) : (o.extra = n),
          (o.value = t.value),
          o
        );
      }
      var fh = class extends uh {
          startNode() {
            return new Ct(this, this.state.start, this.state.startLoc);
          }
          startNodeAt(t, e) {
            return new Ct(this, t, e);
          }
          startNodeAtNode(t) {
            return this.startNodeAt(t.start, t.loc.start);
          }
          finishNode(t, e) {
            return this.finishNodeAt(t, e, this.state.lastTokEndLoc);
          }
          finishNodeAt(t, e, s) {
            return (
              (t.type = e),
              (t.end = s.index),
              (t.loc.end = s),
              this.options.ranges && (t.range[1] = s.index),
              this.options.attachComment && this.processComment(t),
              t
            );
          }
          resetStartLocation(t, e, s) {
            (t.start = e),
              (t.loc.start = s),
              this.options.ranges && (t.range[0] = e);
          }
          resetEndLocation(t) {
            let e =
              arguments.length > 1 && arguments[1] !== void 0
                ? arguments[1]
                : this.state.lastTokEndLoc;
            (t.end = e.index),
              (t.loc.end = e),
              this.options.ranges && (t.range[1] = e.index);
          }
          resetStartLocationFromNode(t, e) {
            this.resetStartLocation(t, e.start, e.loc.start);
          }
        },
        dh = new Set([
          "_",
          "any",
          "bool",
          "boolean",
          "empty",
          "extends",
          "false",
          "interface",
          "mixed",
          "null",
          "number",
          "static",
          "string",
          "true",
          "typeof",
          "void",
        ]),
        I = j(jn || (jn = ht(["flow"])))((t) => ({
          AmbiguousConditionalArrow: t(
            "Ambiguous expression: wrap the arrow functions in parentheses to disambiguate."
          ),
          AmbiguousDeclareModuleKind: t(
            "Found both `declare module.exports` and `declare export` in the same module. Modules can only have 1 since they are either an ES module or they are a CommonJS module."
          ),
          AssignReservedType: t((e) => {
            let { reservedType: s } = e;
            return "Cannot overwrite reserved type ".concat(s, ".");
          }),
          DeclareClassElement: t(
            "The `declare` modifier can only appear on class fields."
          ),
          DeclareClassFieldInitializer: t(
            "Initializers are not allowed in fields with the `declare` modifier."
          ),
          DuplicateDeclareModuleExports: t(
            "Duplicate `declare module.exports` statement."
          ),
          EnumBooleanMemberNotInitialized: t((e) => {
            let { memberName: s, enumName: r } = e;
            return "Boolean enum members need to be initialized. Use either `"
              .concat(s, " = true,` or `")
              .concat(s, " = false,` in enum `")
              .concat(r, "`.");
          }),
          EnumDuplicateMemberName: t((e) => {
            let { memberName: s, enumName: r } = e;
            return "Enum member names need to be unique, but the name `"
              .concat(s, "` has already been used before in enum `")
              .concat(r, "`.");
          }),
          EnumInconsistentMemberValues: t((e) => {
            let { enumName: s } = e;
            return "Enum `".concat(
              s,
              "` has inconsistent member initializers. Either use no initializers, or consistently use literals (either booleans, numbers, or strings) for all member initializers."
            );
          }),
          EnumInvalidExplicitType: t((e) => {
            let { invalidEnumType: s, enumName: r } = e;
            return "Enum type `"
              .concat(
                s,
                "` is not valid. Use one of `boolean`, `number`, `string`, or `symbol` in enum `"
              )
              .concat(r, "`.");
          }),
          EnumInvalidExplicitTypeUnknownSupplied: t((e) => {
            let { enumName: s } = e;
            return "Supplied enum type is not valid. Use one of `boolean`, `number`, `string`, or `symbol` in enum `".concat(
              s,
              "`."
            );
          }),
          EnumInvalidMemberInitializerPrimaryType: t((e) => {
            let { enumName: s, memberName: r, explicitType: i } = e;
            return "Enum `"
              .concat(s, "` has type `")
              .concat(i, "`, so the initializer of `")
              .concat(r, "` needs to be a ")
              .concat(i, " literal.");
          }),
          EnumInvalidMemberInitializerSymbolType: t((e) => {
            let { enumName: s, memberName: r } = e;
            return "Symbol enum members cannot be initialized. Use `"
              .concat(r, ",` in enum `")
              .concat(s, "`.");
          }),
          EnumInvalidMemberInitializerUnknownType: t((e) => {
            let { enumName: s, memberName: r } = e;
            return "The enum member initializer for `"
              .concat(
                r,
                "` needs to be a literal (either a boolean, number, or string) in enum `"
              )
              .concat(s, "`.");
          }),
          EnumInvalidMemberName: t((e) => {
            let { enumName: s, memberName: r, suggestion: i } = e;
            return "Enum member names cannot start with lowercase 'a' through 'z'. Instead of using `"
              .concat(r, "`, consider using `")
              .concat(i, "`, in enum `")
              .concat(s, "`.");
          }),
          EnumNumberMemberNotInitialized: t((e) => {
            let { enumName: s, memberName: r } = e;
            return "Number enum members need to be initialized, e.g. `"
              .concat(r, " = 1` in enum `")
              .concat(s, "`.");
          }),
          EnumStringMemberInconsistentlyInitailized: t((e) => {
            let { enumName: s } = e;
            return "String enum members need to consistently either all use initializers, or use no initializers, in enum `".concat(
              s,
              "`."
            );
          }),
          GetterMayNotHaveThisParam: t(
            "A getter cannot have a `this` parameter."
          ),
          ImportTypeShorthandOnlyInPureImport: t(
            "The `type` and `typeof` keywords on named imports can only be used on regular `import` statements. It cannot be used with `import type` or `import typeof` statements."
          ),
          InexactInsideExact: t(
            "Explicit inexact syntax cannot appear inside an explicit exact object type."
          ),
          InexactInsideNonObject: t(
            "Explicit inexact syntax cannot appear in class or interface definitions."
          ),
          InexactVariance: t("Explicit inexact syntax cannot have variance."),
          InvalidNonTypeImportInDeclareModule: t(
            "Imports within a `declare module` body must always be `import type` or `import typeof`."
          ),
          MissingTypeParamDefault: t(
            "Type parameter declaration needs a default, since a preceding type parameter declaration has a default."
          ),
          NestedDeclareModule: t(
            "`declare module` cannot be used inside another `declare module`."
          ),
          NestedFlowComment: t(
            "Cannot have a flow comment inside another flow comment."
          ),
          PatternIsOptional: t(
            "A binding pattern parameter cannot be optional in an implementation signature.",
            { reasonCode: "OptionalBindingPattern" }
          ),
          SetterMayNotHaveThisParam: t(
            "A setter cannot have a `this` parameter."
          ),
          SpreadVariance: t("Spread properties cannot have variance."),
          ThisParamAnnotationRequired: t(
            "A type annotation is required for the `this` parameter."
          ),
          ThisParamBannedInConstructor: t(
            "Constructors cannot have a `this` parameter; constructors don't bind `this` like other functions."
          ),
          ThisParamMayNotBeOptional: t(
            "The `this` parameter cannot be optional."
          ),
          ThisParamMustBeFirst: t(
            "The `this` parameter must be the first function parameter."
          ),
          ThisParamNoDefault: t(
            "The `this` parameter may not have a default value."
          ),
          TypeBeforeInitializer: t(
            "Type annotations must come before default assignments, e.g. instead of `age = 25: number` use `age: number = 25`."
          ),
          TypeCastInPattern: t(
            "The type cast expression is expected to be wrapped with parenthesis."
          ),
          UnexpectedExplicitInexactInObject: t(
            "Explicit inexact syntax must appear at the end of an inexact object."
          ),
          UnexpectedReservedType: t((e) => {
            let { reservedType: s } = e;
            return "Unexpected reserved type ".concat(s, ".");
          }),
          UnexpectedReservedUnderscore: t(
            "`_` is only allowed as a type argument to call or new."
          ),
          UnexpectedSpaceBetweenModuloChecks: t(
            "Spaces between `%` and `checks` are not allowed here."
          ),
          UnexpectedSpreadType: t(
            "Spread operator cannot appear in class or interface definitions."
          ),
          UnexpectedSubtractionOperand: t(
            'Unexpected token, expected "number" or "bigint".'
          ),
          UnexpectedTokenAfterTypeParameter: t(
            "Expected an arrow function after this type parameter declaration."
          ),
          UnexpectedTypeParameterBeforeAsyncArrowFunction: t(
            "Type parameters must come after the async keyword, e.g. instead of `<T> async () => {}`, use `async <T>() => {}`."
          ),
          UnsupportedDeclareExportKind: t((e) => {
            let { unsupportedExportKind: s, suggestion: r } = e;
            return "`declare export "
              .concat(s, "` is not supported. Use `")
              .concat(r, "` instead.");
          }),
          UnsupportedStatementInDeclareModule: t(
            "Only declares and type imports are allowed inside declare module."
          ),
          UnterminatedFlowComment: t("Unterminated flow-comment."),
        }));
      function mh(t) {
        return (
          t.type === "DeclareExportAllDeclaration" ||
          (t.type === "DeclareExportDeclaration" &&
            (!t.declaration ||
              (t.declaration.type !== "TypeAlias" &&
                t.declaration.type !== "InterfaceDeclaration")))
        );
      }
      function us(t) {
        return t.importKind === "type" || t.importKind === "typeof";
      }
      function Fr(t) {
        return ye(t) && t !== 97;
      }
      var yh = {
        const: "declare export var",
        let: "declare export var",
        type: "export type",
        interface: "export interface",
      };
      function xh(t, e) {
        let s = [],
          r = [];
        for (let i = 0; i < t.length; i++) (e(t[i], i, t) ? s : r).push(t[i]);
        return [s, r];
      }
      var gh = /\*?\s*@((?:no)?flow)\b/,
        Ah = (t) =>
          class extends t {
            constructor() {
              super(...arguments), (this.flowPragma = void 0);
            }
            getScopeHandler() {
              return th;
            }
            shouldParseTypes() {
              return (
                this.getPluginOption("flow", "all") ||
                this.flowPragma === "flow"
              );
            }
            shouldParseEnums() {
              return !!this.getPluginOption("flow", "enums");
            }
            finishToken(e, s) {
              return (
                e !== 129 &&
                  e !== 13 &&
                  e !== 28 &&
                  this.flowPragma === void 0 &&
                  (this.flowPragma = null),
                super.finishToken(e, s)
              );
            }
            addComment(e) {
              if (this.flowPragma === void 0) {
                let s = gh.exec(e.value);
                if (s)
                  if (s[1] === "flow") this.flowPragma = "flow";
                  else if (s[1] === "noflow") this.flowPragma = "noflow";
                  else throw new Error("Unexpected flow pragma");
              }
              return super.addComment(e);
            }
            flowParseTypeInitialiser(e) {
              let s = this.state.inType;
              (this.state.inType = !0), this.expect(e || 14);
              let r = this.flowParseType();
              return (this.state.inType = s), r;
            }
            flowParsePredicate() {
              let e = this.startNode(),
                s = this.state.startLoc;
              return (
                this.next(),
                this.expectContextual(107),
                this.state.lastTokStart > s.index + 1 &&
                  this.raise(I.UnexpectedSpaceBetweenModuloChecks, { at: s }),
                this.eat(10)
                  ? ((e.value = this.parseExpression()),
                    this.expect(11),
                    this.finishNode(e, "DeclaredPredicate"))
                  : this.finishNode(e, "InferredPredicate")
              );
            }
            flowParseTypeAndPredicateInitialiser() {
              let e = this.state.inType;
              (this.state.inType = !0), this.expect(14);
              let s = null,
                r = null;
              return (
                this.match(54)
                  ? ((this.state.inType = e), (r = this.flowParsePredicate()))
                  : ((s = this.flowParseType()),
                    (this.state.inType = e),
                    this.match(54) && (r = this.flowParsePredicate())),
                [s, r]
              );
            }
            flowParseDeclareClass(e) {
              return (
                this.next(),
                this.flowParseInterfaceish(e, !0),
                this.finishNode(e, "DeclareClass")
              );
            }
            flowParseDeclareFunction(e) {
              this.next();
              let s = (e.id = this.parseIdentifier()),
                r = this.startNode(),
                i = this.startNode();
              this.match(47)
                ? (r.typeParameters = this.flowParseTypeParameterDeclaration())
                : (r.typeParameters = null),
                this.expect(10);
              let a = this.flowParseFunctionTypeParams();
              return (
                (r.params = a.params),
                (r.rest = a.rest),
                (r.this = a._this),
                this.expect(11),
                ([r.returnType, e.predicate] =
                  this.flowParseTypeAndPredicateInitialiser()),
                (i.typeAnnotation = this.finishNode(
                  r,
                  "FunctionTypeAnnotation"
                )),
                (s.typeAnnotation = this.finishNode(i, "TypeAnnotation")),
                this.resetEndLocation(s),
                this.semicolon(),
                this.scope.declareName(e.id.name, qo, e.id.loc.start),
                this.finishNode(e, "DeclareFunction")
              );
            }
            flowParseDeclare(e, s) {
              if (this.match(80)) return this.flowParseDeclareClass(e);
              if (this.match(68)) return this.flowParseDeclareFunction(e);
              if (this.match(74)) return this.flowParseDeclareVariable(e);
              if (this.eatContextual(123))
                return this.match(16)
                  ? this.flowParseDeclareModuleExports(e)
                  : (s &&
                      this.raise(I.NestedDeclareModule, {
                        at: this.state.lastTokStartLoc,
                      }),
                    this.flowParseDeclareModule(e));
              if (this.isContextual(126))
                return this.flowParseDeclareTypeAlias(e);
              if (this.isContextual(127))
                return this.flowParseDeclareOpaqueType(e);
              if (this.isContextual(125))
                return this.flowParseDeclareInterface(e);
              if (this.match(82))
                return this.flowParseDeclareExportDeclaration(e, s);
              throw this.unexpected();
            }
            flowParseDeclareVariable(e) {
              return (
                this.next(),
                (e.id = this.flowParseTypeAnnotatableIdentifier(!0)),
                this.scope.declareName(e.id.name, yt, e.id.loc.start),
                this.semicolon(),
                this.finishNode(e, "DeclareVariable")
              );
            }
            flowParseDeclareModule(e) {
              this.scope.enter(Ke),
                this.match(129)
                  ? (e.id = this.parseExprAtom())
                  : (e.id = this.parseIdentifier());
              let s = (e.body = this.startNode()),
                r = (s.body = []);
              for (this.expect(5); !this.match(8); ) {
                let n = this.startNode();
                this.match(83)
                  ? (this.next(),
                    !this.isContextual(126) &&
                      !this.match(87) &&
                      this.raise(I.InvalidNonTypeImportInDeclareModule, {
                        at: this.state.lastTokStartLoc,
                      }),
                    this.parseImport(n))
                  : (this.expectContextual(
                      121,
                      I.UnsupportedStatementInDeclareModule
                    ),
                    (n = this.flowParseDeclare(n, !0))),
                  r.push(n);
              }
              this.scope.exit(),
                this.expect(8),
                this.finishNode(s, "BlockStatement");
              let i = null,
                a = !1;
              return (
                r.forEach((n) => {
                  mh(n)
                    ? (i === "CommonJS" &&
                        this.raise(I.AmbiguousDeclareModuleKind, { at: n }),
                      (i = "ES"))
                    : n.type === "DeclareModuleExports" &&
                      (a &&
                        this.raise(I.DuplicateDeclareModuleExports, { at: n }),
                      i === "ES" &&
                        this.raise(I.AmbiguousDeclareModuleKind, { at: n }),
                      (i = "CommonJS"),
                      (a = !0));
                }),
                (e.kind = i || "CommonJS"),
                this.finishNode(e, "DeclareModule")
              );
            }
            flowParseDeclareExportDeclaration(e, s) {
              if ((this.expect(82), this.eat(65)))
                return (
                  this.match(68) || this.match(80)
                    ? (e.declaration = this.flowParseDeclare(this.startNode()))
                    : ((e.declaration = this.flowParseType()),
                      this.semicolon()),
                  (e.default = !0),
                  this.finishNode(e, "DeclareExportDeclaration")
                );
              if (
                this.match(75) ||
                this.isLet() ||
                ((this.isContextual(126) || this.isContextual(125)) && !s)
              ) {
                let r = this.state.value;
                throw this.raise(I.UnsupportedDeclareExportKind, {
                  at: this.state.startLoc,
                  unsupportedExportKind: r,
                  suggestion: yh[r],
                });
              }
              if (
                this.match(74) ||
                this.match(68) ||
                this.match(80) ||
                this.isContextual(127)
              )
                return (
                  (e.declaration = this.flowParseDeclare(this.startNode())),
                  (e.default = !1),
                  this.finishNode(e, "DeclareExportDeclaration")
                );
              if (
                this.match(55) ||
                this.match(5) ||
                this.isContextual(125) ||
                this.isContextual(126) ||
                this.isContextual(127)
              )
                return (
                  (e = this.parseExport(e)),
                  e.type === "ExportNamedDeclaration" &&
                    ((e.type = "ExportDeclaration"),
                    (e.default = !1),
                    delete e.exportKind),
                  (e.type = "Declare" + e.type),
                  e
                );
              throw this.unexpected();
            }
            flowParseDeclareModuleExports(e) {
              return (
                this.next(),
                this.expectContextual(108),
                (e.typeAnnotation = this.flowParseTypeAnnotation()),
                this.semicolon(),
                this.finishNode(e, "DeclareModuleExports")
              );
            }
            flowParseDeclareTypeAlias(e) {
              return (
                this.next(),
                this.flowParseTypeAlias(e),
                (e.type = "DeclareTypeAlias"),
                e
              );
            }
            flowParseDeclareOpaqueType(e) {
              return (
                this.next(),
                this.flowParseOpaqueType(e, !0),
                (e.type = "DeclareOpaqueType"),
                e
              );
            }
            flowParseDeclareInterface(e) {
              return (
                this.next(),
                this.flowParseInterfaceish(e),
                this.finishNode(e, "DeclareInterface")
              );
            }
            flowParseInterfaceish(e) {
              let s =
                arguments.length > 1 && arguments[1] !== void 0
                  ? arguments[1]
                  : !1;
              if (
                ((e.id = this.flowParseRestrictedIdentifier(!s, !0)),
                this.scope.declareName(e.id.name, s ? Ar : Te, e.id.loc.start),
                this.match(47)
                  ? (e.typeParameters =
                      this.flowParseTypeParameterDeclaration())
                  : (e.typeParameters = null),
                (e.extends = []),
                (e.implements = []),
                (e.mixins = []),
                this.eat(81))
              )
                do e.extends.push(this.flowParseInterfaceExtends());
                while (!s && this.eat(12));
              if (this.isContextual(114)) {
                this.next();
                do e.mixins.push(this.flowParseInterfaceExtends());
                while (this.eat(12));
              }
              if (this.isContextual(110)) {
                this.next();
                do e.implements.push(this.flowParseInterfaceExtends());
                while (this.eat(12));
              }
              e.body = this.flowParseObjectType({
                allowStatic: s,
                allowExact: !1,
                allowSpread: !1,
                allowProto: s,
                allowInexact: !1,
              });
            }
            flowParseInterfaceExtends() {
              let e = this.startNode();
              return (
                (e.id = this.flowParseQualifiedTypeIdentifier()),
                this.match(47)
                  ? (e.typeParameters =
                      this.flowParseTypeParameterInstantiation())
                  : (e.typeParameters = null),
                this.finishNode(e, "InterfaceExtends")
              );
            }
            flowParseInterface(e) {
              return (
                this.flowParseInterfaceish(e),
                this.finishNode(e, "InterfaceDeclaration")
              );
            }
            checkNotUnderscore(e) {
              e === "_" &&
                this.raise(I.UnexpectedReservedUnderscore, {
                  at: this.state.startLoc,
                });
            }
            checkReservedType(e, s, r) {
              !dh.has(e) ||
                this.raise(
                  r ? I.AssignReservedType : I.UnexpectedReservedType,
                  { at: s, reservedType: e }
                );
            }
            flowParseRestrictedIdentifier(e, s) {
              return (
                this.checkReservedType(
                  this.state.value,
                  this.state.startLoc,
                  s
                ),
                this.parseIdentifier(e)
              );
            }
            flowParseTypeAlias(e) {
              return (
                (e.id = this.flowParseRestrictedIdentifier(!1, !0)),
                this.scope.declareName(e.id.name, Te, e.id.loc.start),
                this.match(47)
                  ? (e.typeParameters =
                      this.flowParseTypeParameterDeclaration())
                  : (e.typeParameters = null),
                (e.right = this.flowParseTypeInitialiser(29)),
                this.semicolon(),
                this.finishNode(e, "TypeAlias")
              );
            }
            flowParseOpaqueType(e, s) {
              return (
                this.expectContextual(126),
                (e.id = this.flowParseRestrictedIdentifier(!0, !0)),
                this.scope.declareName(e.id.name, Te, e.id.loc.start),
                this.match(47)
                  ? (e.typeParameters =
                      this.flowParseTypeParameterDeclaration())
                  : (e.typeParameters = null),
                (e.supertype = null),
                this.match(14) &&
                  (e.supertype = this.flowParseTypeInitialiser(14)),
                (e.impltype = null),
                s || (e.impltype = this.flowParseTypeInitialiser(29)),
                this.semicolon(),
                this.finishNode(e, "OpaqueType")
              );
            }
            flowParseTypeParameter() {
              let e =
                  arguments.length > 0 && arguments[0] !== void 0
                    ? arguments[0]
                    : !1,
                s = this.state.startLoc,
                r = this.startNode(),
                i = this.flowParseVariance(),
                a = this.flowParseTypeAnnotatableIdentifier();
              return (
                (r.name = a.name),
                (r.variance = i),
                (r.bound = a.typeAnnotation),
                this.match(29)
                  ? (this.eat(29), (r.default = this.flowParseType()))
                  : e && this.raise(I.MissingTypeParamDefault, { at: s }),
                this.finishNode(r, "TypeParameter")
              );
            }
            flowParseTypeParameterDeclaration() {
              let e = this.state.inType,
                s = this.startNode();
              (s.params = []),
                (this.state.inType = !0),
                this.match(47) || this.match(138)
                  ? this.next()
                  : this.unexpected();
              let r = !1;
              do {
                let i = this.flowParseTypeParameter(r);
                s.params.push(i),
                  i.default && (r = !0),
                  this.match(48) || this.expect(12);
              } while (!this.match(48));
              return (
                this.expect(48),
                (this.state.inType = e),
                this.finishNode(s, "TypeParameterDeclaration")
              );
            }
            flowParseTypeParameterInstantiation() {
              let e = this.startNode(),
                s = this.state.inType;
              (e.params = []), (this.state.inType = !0), this.expect(47);
              let r = this.state.noAnonFunctionType;
              for (this.state.noAnonFunctionType = !1; !this.match(48); )
                e.params.push(this.flowParseType()),
                  this.match(48) || this.expect(12);
              return (
                (this.state.noAnonFunctionType = r),
                this.expect(48),
                (this.state.inType = s),
                this.finishNode(e, "TypeParameterInstantiation")
              );
            }
            flowParseTypeParameterInstantiationCallOrNew() {
              let e = this.startNode(),
                s = this.state.inType;
              for (
                e.params = [], this.state.inType = !0, this.expect(47);
                !this.match(48);

              )
                e.params.push(this.flowParseTypeOrImplicitInstantiation()),
                  this.match(48) || this.expect(12);
              return (
                this.expect(48),
                (this.state.inType = s),
                this.finishNode(e, "TypeParameterInstantiation")
              );
            }
            flowParseInterfaceType() {
              let e = this.startNode();
              if ((this.expectContextual(125), (e.extends = []), this.eat(81)))
                do e.extends.push(this.flowParseInterfaceExtends());
                while (this.eat(12));
              return (
                (e.body = this.flowParseObjectType({
                  allowStatic: !1,
                  allowExact: !1,
                  allowSpread: !1,
                  allowProto: !1,
                  allowInexact: !1,
                })),
                this.finishNode(e, "InterfaceTypeAnnotation")
              );
            }
            flowParseObjectPropertyKey() {
              return this.match(130) || this.match(129)
                ? this.parseExprAtom()
                : this.parseIdentifier(!0);
            }
            flowParseObjectTypeIndexer(e, s, r) {
              return (
                (e.static = s),
                this.lookahead().type === 14
                  ? ((e.id = this.flowParseObjectPropertyKey()),
                    (e.key = this.flowParseTypeInitialiser()))
                  : ((e.id = null), (e.key = this.flowParseType())),
                this.expect(3),
                (e.value = this.flowParseTypeInitialiser()),
                (e.variance = r),
                this.finishNode(e, "ObjectTypeIndexer")
              );
            }
            flowParseObjectTypeInternalSlot(e, s) {
              return (
                (e.static = s),
                (e.id = this.flowParseObjectPropertyKey()),
                this.expect(3),
                this.expect(3),
                this.match(47) || this.match(10)
                  ? ((e.method = !0),
                    (e.optional = !1),
                    (e.value = this.flowParseObjectTypeMethodish(
                      this.startNodeAt(e.start, e.loc.start)
                    )))
                  : ((e.method = !1),
                    this.eat(17) && (e.optional = !0),
                    (e.value = this.flowParseTypeInitialiser())),
                this.finishNode(e, "ObjectTypeInternalSlot")
              );
            }
            flowParseObjectTypeMethodish(e) {
              for (
                e.params = [],
                  e.rest = null,
                  e.typeParameters = null,
                  e.this = null,
                  this.match(47) &&
                    (e.typeParameters =
                      this.flowParseTypeParameterDeclaration()),
                  this.expect(10),
                  this.match(78) &&
                    ((e.this = this.flowParseFunctionTypeParam(!0)),
                    (e.this.name = null),
                    this.match(11) || this.expect(12));
                !this.match(11) && !this.match(21);

              )
                e.params.push(this.flowParseFunctionTypeParam(!1)),
                  this.match(11) || this.expect(12);
              return (
                this.eat(21) && (e.rest = this.flowParseFunctionTypeParam(!1)),
                this.expect(11),
                (e.returnType = this.flowParseTypeInitialiser()),
                this.finishNode(e, "FunctionTypeAnnotation")
              );
            }
            flowParseObjectTypeCallProperty(e, s) {
              let r = this.startNode();
              return (
                (e.static = s),
                (e.value = this.flowParseObjectTypeMethodish(r)),
                this.finishNode(e, "ObjectTypeCallProperty")
              );
            }
            flowParseObjectType(e) {
              let {
                  allowStatic: s,
                  allowExact: r,
                  allowSpread: i,
                  allowProto: a,
                  allowInexact: n,
                } = e,
                o = this.state.inType;
              this.state.inType = !0;
              let c = this.startNode();
              (c.callProperties = []),
                (c.properties = []),
                (c.indexers = []),
                (c.internalSlots = []);
              let f,
                y,
                T = !1;
              for (
                r && this.match(6)
                  ? (this.expect(6), (f = 9), (y = !0))
                  : (this.expect(5), (f = 8), (y = !1)),
                  c.exact = y;
                !this.match(f);

              ) {
                let N = !1,
                  R = null,
                  z = null,
                  te = this.startNode();
                if (a && this.isContextual(115)) {
                  let pe = this.lookahead();
                  pe.type !== 14 &&
                    pe.type !== 17 &&
                    (this.next(), (R = this.state.startLoc), (s = !1));
                }
                if (s && this.isContextual(104)) {
                  let pe = this.lookahead();
                  pe.type !== 14 && pe.type !== 17 && (this.next(), (N = !0));
                }
                let he = this.flowParseVariance();
                if (this.eat(0))
                  R != null && this.unexpected(R),
                    this.eat(0)
                      ? (he && this.unexpected(he.loc.start),
                        c.internalSlots.push(
                          this.flowParseObjectTypeInternalSlot(te, N)
                        ))
                      : c.indexers.push(
                          this.flowParseObjectTypeIndexer(te, N, he)
                        );
                else if (this.match(10) || this.match(47))
                  R != null && this.unexpected(R),
                    he && this.unexpected(he.loc.start),
                    c.callProperties.push(
                      this.flowParseObjectTypeCallProperty(te, N)
                    );
                else {
                  let pe = "init";
                  if (this.isContextual(98) || this.isContextual(103)) {
                    let de = this.lookahead();
                    nr(de.type) && ((pe = this.state.value), this.next());
                  }
                  let st = this.flowParseObjectTypeProperty(
                    te,
                    N,
                    R,
                    he,
                    pe,
                    i,
                    n != null ? n : !y
                  );
                  st === null
                    ? ((T = !0), (z = this.state.lastTokStartLoc))
                    : c.properties.push(st);
                }
                this.flowObjectTypeSemicolon(),
                  z &&
                    !this.match(8) &&
                    !this.match(9) &&
                    this.raise(I.UnexpectedExplicitInexactInObject, { at: z });
              }
              this.expect(f), i && (c.inexact = T);
              let v = this.finishNode(c, "ObjectTypeAnnotation");
              return (this.state.inType = o), v;
            }
            flowParseObjectTypeProperty(e, s, r, i, a, n, o) {
              if (this.eat(21))
                return this.match(12) ||
                  this.match(13) ||
                  this.match(8) ||
                  this.match(9)
                  ? (n
                      ? o ||
                        this.raise(I.InexactInsideExact, {
                          at: this.state.lastTokStartLoc,
                        })
                      : this.raise(I.InexactInsideNonObject, {
                          at: this.state.lastTokStartLoc,
                        }),
                    i && this.raise(I.InexactVariance, { at: i }),
                    null)
                  : (n ||
                      this.raise(I.UnexpectedSpreadType, {
                        at: this.state.lastTokStartLoc,
                      }),
                    r != null && this.unexpected(r),
                    i && this.raise(I.SpreadVariance, { at: i }),
                    (e.argument = this.flowParseType()),
                    this.finishNode(e, "ObjectTypeSpreadProperty"));
              {
                (e.key = this.flowParseObjectPropertyKey()),
                  (e.static = s),
                  (e.proto = r != null),
                  (e.kind = a);
                let c = !1;
                return (
                  this.match(47) || this.match(10)
                    ? ((e.method = !0),
                      r != null && this.unexpected(r),
                      i && this.unexpected(i.loc.start),
                      (e.value = this.flowParseObjectTypeMethodish(
                        this.startNodeAt(e.start, e.loc.start)
                      )),
                      (a === "get" || a === "set") &&
                        this.flowCheckGetterSetterParams(e),
                      !n &&
                        e.key.name === "constructor" &&
                        e.value.this &&
                        this.raise(I.ThisParamBannedInConstructor, {
                          at: e.value.this,
                        }))
                    : (a !== "init" && this.unexpected(),
                      (e.method = !1),
                      this.eat(17) && (c = !0),
                      (e.value = this.flowParseTypeInitialiser()),
                      (e.variance = i)),
                  (e.optional = c),
                  this.finishNode(e, "ObjectTypeProperty")
                );
              }
            }
            flowCheckGetterSetterParams(e) {
              let s = e.kind === "get" ? 0 : 1,
                r = e.value.params.length + (e.value.rest ? 1 : 0);
              e.value.this &&
                this.raise(
                  e.kind === "get"
                    ? I.GetterMayNotHaveThisParam
                    : I.SetterMayNotHaveThisParam,
                  { at: e.value.this }
                ),
                r !== s &&
                  this.raise(
                    e.kind === "get" ? l.BadGetterArity : l.BadSetterArity,
                    { at: e }
                  ),
                e.kind === "set" &&
                  e.value.rest &&
                  this.raise(l.BadSetterRestParameter, { at: e });
            }
            flowObjectTypeSemicolon() {
              !this.eat(13) &&
                !this.eat(12) &&
                !this.match(8) &&
                !this.match(9) &&
                this.unexpected();
            }
            flowParseQualifiedTypeIdentifier(e, s, r) {
              (e = e || this.state.start), (s = s || this.state.startLoc);
              let i = r || this.flowParseRestrictedIdentifier(!0);
              for (; this.eat(16); ) {
                let a = this.startNodeAt(e, s);
                (a.qualification = i),
                  (a.id = this.flowParseRestrictedIdentifier(!0)),
                  (i = this.finishNode(a, "QualifiedTypeIdentifier"));
              }
              return i;
            }
            flowParseGenericType(e, s, r) {
              let i = this.startNodeAt(e, s);
              return (
                (i.typeParameters = null),
                (i.id = this.flowParseQualifiedTypeIdentifier(e, s, r)),
                this.match(47) &&
                  (i.typeParameters =
                    this.flowParseTypeParameterInstantiation()),
                this.finishNode(i, "GenericTypeAnnotation")
              );
            }
            flowParseTypeofType() {
              let e = this.startNode();
              return (
                this.expect(87),
                (e.argument = this.flowParsePrimaryType()),
                this.finishNode(e, "TypeofTypeAnnotation")
              );
            }
            flowParseTupleType() {
              let e = this.startNode();
              for (
                e.types = [], this.expect(0);
                this.state.pos < this.length &&
                !this.match(3) &&
                (e.types.push(this.flowParseType()), !this.match(3));

              )
                this.expect(12);
              return this.expect(3), this.finishNode(e, "TupleTypeAnnotation");
            }
            flowParseFunctionTypeParam(e) {
              let s = null,
                r = !1,
                i = null,
                a = this.startNode(),
                n = this.lookahead(),
                o = this.state.type === 78;
              return (
                n.type === 14 || n.type === 17
                  ? (o && !e && this.raise(I.ThisParamMustBeFirst, { at: a }),
                    (s = this.parseIdentifier(o)),
                    this.eat(17) &&
                      ((r = !0),
                      o && this.raise(I.ThisParamMayNotBeOptional, { at: a })),
                    (i = this.flowParseTypeInitialiser()))
                  : (i = this.flowParseType()),
                (a.name = s),
                (a.optional = r),
                (a.typeAnnotation = i),
                this.finishNode(a, "FunctionTypeParam")
              );
            }
            reinterpretTypeAsFunctionTypeParam(e) {
              let s = this.startNodeAt(e.start, e.loc.start);
              return (
                (s.name = null),
                (s.optional = !1),
                (s.typeAnnotation = e),
                this.finishNode(s, "FunctionTypeParam")
              );
            }
            flowParseFunctionTypeParams() {
              let e =
                  arguments.length > 0 && arguments[0] !== void 0
                    ? arguments[0]
                    : [],
                s = null,
                r = null;
              for (
                this.match(78) &&
                ((r = this.flowParseFunctionTypeParam(!0)),
                (r.name = null),
                this.match(11) || this.expect(12));
                !this.match(11) && !this.match(21);

              )
                e.push(this.flowParseFunctionTypeParam(!1)),
                  this.match(11) || this.expect(12);
              return (
                this.eat(21) && (s = this.flowParseFunctionTypeParam(!1)),
                { params: e, rest: s, _this: r }
              );
            }
            flowIdentToTypeAnnotation(e, s, r, i) {
              switch (i.name) {
                case "any":
                  return this.finishNode(r, "AnyTypeAnnotation");
                case "bool":
                case "boolean":
                  return this.finishNode(r, "BooleanTypeAnnotation");
                case "mixed":
                  return this.finishNode(r, "MixedTypeAnnotation");
                case "empty":
                  return this.finishNode(r, "EmptyTypeAnnotation");
                case "number":
                  return this.finishNode(r, "NumberTypeAnnotation");
                case "string":
                  return this.finishNode(r, "StringTypeAnnotation");
                case "symbol":
                  return this.finishNode(r, "SymbolTypeAnnotation");
                default:
                  return (
                    this.checkNotUnderscore(i.name),
                    this.flowParseGenericType(e, s, i)
                  );
              }
            }
            flowParsePrimaryType() {
              let e = this.state.start,
                s = this.state.startLoc,
                r = this.startNode(),
                i,
                a,
                n = !1,
                o = this.state.noAnonFunctionType;
              switch (this.state.type) {
                case 5:
                  return this.flowParseObjectType({
                    allowStatic: !1,
                    allowExact: !1,
                    allowSpread: !0,
                    allowProto: !1,
                    allowInexact: !0,
                  });
                case 6:
                  return this.flowParseObjectType({
                    allowStatic: !1,
                    allowExact: !0,
                    allowSpread: !0,
                    allowProto: !1,
                    allowInexact: !1,
                  });
                case 0:
                  return (
                    (this.state.noAnonFunctionType = !1),
                    (a = this.flowParseTupleType()),
                    (this.state.noAnonFunctionType = o),
                    a
                  );
                case 47:
                  return (
                    (r.typeParameters =
                      this.flowParseTypeParameterDeclaration()),
                    this.expect(10),
                    (i = this.flowParseFunctionTypeParams()),
                    (r.params = i.params),
                    (r.rest = i.rest),
                    (r.this = i._this),
                    this.expect(11),
                    this.expect(19),
                    (r.returnType = this.flowParseType()),
                    this.finishNode(r, "FunctionTypeAnnotation")
                  );
                case 10:
                  if ((this.next(), !this.match(11) && !this.match(21)))
                    if (K(this.state.type) || this.match(78)) {
                      let c = this.lookahead().type;
                      n = c !== 17 && c !== 14;
                    } else n = !0;
                  if (n) {
                    if (
                      ((this.state.noAnonFunctionType = !1),
                      (a = this.flowParseType()),
                      (this.state.noAnonFunctionType = o),
                      this.state.noAnonFunctionType ||
                        !(
                          this.match(12) ||
                          (this.match(11) && this.lookahead().type === 19)
                        ))
                    )
                      return this.expect(11), a;
                    this.eat(12);
                  }
                  return (
                    a
                      ? (i = this.flowParseFunctionTypeParams([
                          this.reinterpretTypeAsFunctionTypeParam(a),
                        ]))
                      : (i = this.flowParseFunctionTypeParams()),
                    (r.params = i.params),
                    (r.rest = i.rest),
                    (r.this = i._this),
                    this.expect(11),
                    this.expect(19),
                    (r.returnType = this.flowParseType()),
                    (r.typeParameters = null),
                    this.finishNode(r, "FunctionTypeAnnotation")
                  );
                case 129:
                  return this.parseLiteral(
                    this.state.value,
                    "StringLiteralTypeAnnotation"
                  );
                case 85:
                case 86:
                  return (
                    (r.value = this.match(85)),
                    this.next(),
                    this.finishNode(r, "BooleanLiteralTypeAnnotation")
                  );
                case 53:
                  if (this.state.value === "-") {
                    if ((this.next(), this.match(130)))
                      return this.parseLiteralAtNode(
                        -this.state.value,
                        "NumberLiteralTypeAnnotation",
                        r
                      );
                    if (this.match(131))
                      return this.parseLiteralAtNode(
                        -this.state.value,
                        "BigIntLiteralTypeAnnotation",
                        r
                      );
                    throw this.raise(I.UnexpectedSubtractionOperand, {
                      at: this.state.startLoc,
                    });
                  }
                  throw this.unexpected();
                case 130:
                  return this.parseLiteral(
                    this.state.value,
                    "NumberLiteralTypeAnnotation"
                  );
                case 131:
                  return this.parseLiteral(
                    this.state.value,
                    "BigIntLiteralTypeAnnotation"
                  );
                case 88:
                  return this.next(), this.finishNode(r, "VoidTypeAnnotation");
                case 84:
                  return (
                    this.next(), this.finishNode(r, "NullLiteralTypeAnnotation")
                  );
                case 78:
                  return this.next(), this.finishNode(r, "ThisTypeAnnotation");
                case 55:
                  return (
                    this.next(), this.finishNode(r, "ExistsTypeAnnotation")
                  );
                case 87:
                  return this.flowParseTypeofType();
                default:
                  if (Vt(this.state.type)) {
                    let c = ve(this.state.type);
                    return this.next(), super.createIdentifier(r, c);
                  } else if (K(this.state.type))
                    return this.isContextual(125)
                      ? this.flowParseInterfaceType()
                      : this.flowIdentToTypeAnnotation(
                          e,
                          s,
                          r,
                          this.parseIdentifier()
                        );
              }
              throw this.unexpected();
            }
            flowParsePostfixType() {
              let e = this.state.start,
                s = this.state.startLoc,
                r = this.flowParsePrimaryType(),
                i = !1;
              for (
                ;
                (this.match(0) || this.match(18)) && !this.canInsertSemicolon();

              ) {
                let a = this.startNodeAt(e, s),
                  n = this.eat(18);
                (i = i || n),
                  this.expect(0),
                  !n && this.match(3)
                    ? ((a.elementType = r),
                      this.next(),
                      (r = this.finishNode(a, "ArrayTypeAnnotation")))
                    : ((a.objectType = r),
                      (a.indexType = this.flowParseType()),
                      this.expect(3),
                      i
                        ? ((a.optional = n),
                          (r = this.finishNode(a, "OptionalIndexedAccessType")))
                        : (r = this.finishNode(a, "IndexedAccessType")));
              }
              return r;
            }
            flowParsePrefixType() {
              let e = this.startNode();
              return this.eat(17)
                ? ((e.typeAnnotation = this.flowParsePrefixType()),
                  this.finishNode(e, "NullableTypeAnnotation"))
                : this.flowParsePostfixType();
            }
            flowParseAnonFunctionWithoutParens() {
              let e = this.flowParsePrefixType();
              if (!this.state.noAnonFunctionType && this.eat(19)) {
                let s = this.startNodeAt(e.start, e.loc.start);
                return (
                  (s.params = [this.reinterpretTypeAsFunctionTypeParam(e)]),
                  (s.rest = null),
                  (s.this = null),
                  (s.returnType = this.flowParseType()),
                  (s.typeParameters = null),
                  this.finishNode(s, "FunctionTypeAnnotation")
                );
              }
              return e;
            }
            flowParseIntersectionType() {
              let e = this.startNode();
              this.eat(45);
              let s = this.flowParseAnonFunctionWithoutParens();
              for (e.types = [s]; this.eat(45); )
                e.types.push(this.flowParseAnonFunctionWithoutParens());
              return e.types.length === 1
                ? s
                : this.finishNode(e, "IntersectionTypeAnnotation");
            }
            flowParseUnionType() {
              let e = this.startNode();
              this.eat(43);
              let s = this.flowParseIntersectionType();
              for (e.types = [s]; this.eat(43); )
                e.types.push(this.flowParseIntersectionType());
              return e.types.length === 1
                ? s
                : this.finishNode(e, "UnionTypeAnnotation");
            }
            flowParseType() {
              let e = this.state.inType;
              this.state.inType = !0;
              let s = this.flowParseUnionType();
              return (this.state.inType = e), s;
            }
            flowParseTypeOrImplicitInstantiation() {
              if (this.state.type === 128 && this.state.value === "_") {
                let e = this.state.start,
                  s = this.state.startLoc,
                  r = this.parseIdentifier();
                return this.flowParseGenericType(e, s, r);
              } else return this.flowParseType();
            }
            flowParseTypeAnnotation() {
              let e = this.startNode();
              return (
                (e.typeAnnotation = this.flowParseTypeInitialiser()),
                this.finishNode(e, "TypeAnnotation")
              );
            }
            flowParseTypeAnnotatableIdentifier(e) {
              let s = e
                ? this.parseIdentifier()
                : this.flowParseRestrictedIdentifier();
              return (
                this.match(14) &&
                  ((s.typeAnnotation = this.flowParseTypeAnnotation()),
                  this.resetEndLocation(s)),
                s
              );
            }
            typeCastToParameter(e) {
              return (
                (e.expression.typeAnnotation = e.typeAnnotation),
                this.resetEndLocation(e.expression, e.typeAnnotation.loc.end),
                e.expression
              );
            }
            flowParseVariance() {
              let e = null;
              return (
                this.match(53) &&
                  ((e = this.startNode()),
                  this.state.value === "+"
                    ? (e.kind = "plus")
                    : (e.kind = "minus"),
                  this.next(),
                  this.finishNode(e, "Variance")),
                e
              );
            }
            parseFunctionBody(e, s) {
              let r =
                arguments.length > 2 && arguments[2] !== void 0
                  ? arguments[2]
                  : !1;
              return s
                ? this.forwardNoArrowParamsConversionAt(e, () =>
                    super.parseFunctionBody(e, !0, r)
                  )
                : super.parseFunctionBody(e, !1, r);
            }
            parseFunctionBodyAndFinish(e, s) {
              let r =
                arguments.length > 2 && arguments[2] !== void 0
                  ? arguments[2]
                  : !1;
              if (this.match(14)) {
                let i = this.startNode();
                ([i.typeAnnotation, e.predicate] =
                  this.flowParseTypeAndPredicateInitialiser()),
                  (e.returnType = i.typeAnnotation
                    ? this.finishNode(i, "TypeAnnotation")
                    : null);
              }
              super.parseFunctionBodyAndFinish(e, s, r);
            }
            parseStatement(e, s) {
              if (this.state.strict && this.isContextual(125)) {
                let i = this.lookahead();
                if (ye(i.type)) {
                  let a = this.startNode();
                  return this.next(), this.flowParseInterface(a);
                }
              } else if (this.shouldParseEnums() && this.isContextual(122)) {
                let i = this.startNode();
                return this.next(), this.flowParseEnumDeclaration(i);
              }
              let r = super.parseStatement(e, s);
              return (
                this.flowPragma === void 0 &&
                  !this.isValidDirective(r) &&
                  (this.flowPragma = null),
                r
              );
            }
            parseExpressionStatement(e, s) {
              if (s.type === "Identifier") {
                if (s.name === "declare") {
                  if (
                    this.match(80) ||
                    K(this.state.type) ||
                    this.match(68) ||
                    this.match(74) ||
                    this.match(82)
                  )
                    return this.flowParseDeclare(e);
                } else if (K(this.state.type)) {
                  if (s.name === "interface") return this.flowParseInterface(e);
                  if (s.name === "type") return this.flowParseTypeAlias(e);
                  if (s.name === "opaque")
                    return this.flowParseOpaqueType(e, !1);
                }
              }
              return super.parseExpressionStatement(e, s);
            }
            shouldParseExportDeclaration() {
              let { type: e } = this.state;
              return or(e) || (this.shouldParseEnums() && e === 122)
                ? !this.state.containsEsc
                : super.shouldParseExportDeclaration();
            }
            isExportDefaultSpecifier() {
              let { type: e } = this.state;
              return or(e) || (this.shouldParseEnums() && e === 122)
                ? this.state.containsEsc
                : super.isExportDefaultSpecifier();
            }
            parseExportDefaultExpression() {
              if (this.shouldParseEnums() && this.isContextual(122)) {
                let e = this.startNode();
                return this.next(), this.flowParseEnumDeclaration(e);
              }
              return super.parseExportDefaultExpression();
            }
            parseConditional(e, s, r, i) {
              if (!this.match(17)) return e;
              if (this.state.maybeInArrowParameters) {
                let v = this.lookaheadCharCode();
                if (v === 44 || v === 61 || v === 58 || v === 41)
                  return this.setOptionalParametersError(i), e;
              }
              this.expect(17);
              let a = this.state.clone(),
                n = this.state.noArrowAt,
                o = this.startNodeAt(s, r),
                { consequent: c, failed: f } =
                  this.tryParseConditionalConsequent(),
                [y, T] = this.getArrowLikeExpressions(c);
              if (f || T.length > 0) {
                let v = [...n];
                if (T.length > 0) {
                  (this.state = a), (this.state.noArrowAt = v);
                  for (let N = 0; N < T.length; N++) v.push(T[N].start);
                  ({ consequent: c, failed: f } =
                    this.tryParseConditionalConsequent()),
                    ([y, T] = this.getArrowLikeExpressions(c));
                }
                f &&
                  y.length > 1 &&
                  this.raise(I.AmbiguousConditionalArrow, { at: a.startLoc }),
                  f &&
                    y.length === 1 &&
                    ((this.state = a),
                    v.push(y[0].start),
                    (this.state.noArrowAt = v),
                    ({ consequent: c, failed: f } =
                      this.tryParseConditionalConsequent()));
              }
              return (
                this.getArrowLikeExpressions(c, !0),
                (this.state.noArrowAt = n),
                this.expect(14),
                (o.test = e),
                (o.consequent = c),
                (o.alternate = this.forwardNoArrowParamsConversionAt(o, () =>
                  this.parseMaybeAssign(void 0, void 0)
                )),
                this.finishNode(o, "ConditionalExpression")
              );
            }
            tryParseConditionalConsequent() {
              this.state.noArrowParamsConversionAt.push(this.state.start);
              let e = this.parseMaybeAssignAllowIn(),
                s = !this.match(14);
              return (
                this.state.noArrowParamsConversionAt.pop(),
                { consequent: e, failed: s }
              );
            }
            getArrowLikeExpressions(e, s) {
              let r = [e],
                i = [];
              for (; r.length !== 0; ) {
                let a = r.pop();
                a.type === "ArrowFunctionExpression"
                  ? (a.typeParameters || !a.returnType
                      ? this.finishArrowValidation(a)
                      : i.push(a),
                    r.push(a.body))
                  : a.type === "ConditionalExpression" &&
                    (r.push(a.consequent), r.push(a.alternate));
              }
              return s
                ? (i.forEach((a) => this.finishArrowValidation(a)), [i, []])
                : xh(i, (a) => a.params.every((n) => this.isAssignable(n, !0)));
            }
            finishArrowValidation(e) {
              var s;
              this.toAssignableList(
                e.params,
                (s = e.extra) == null ? void 0 : s.trailingCommaLoc,
                !1
              ),
                this.scope.enter(Ae | Xt),
                super.checkParams(e, !1, !0),
                this.scope.exit();
            }
            forwardNoArrowParamsConversionAt(e, s) {
              let r;
              return (
                this.state.noArrowParamsConversionAt.indexOf(e.start) !== -1
                  ? (this.state.noArrowParamsConversionAt.push(
                      this.state.start
                    ),
                    (r = s()),
                    this.state.noArrowParamsConversionAt.pop())
                  : (r = s()),
                r
              );
            }
            parseParenItem(e, s, r) {
              if (
                ((e = super.parseParenItem(e, s, r)),
                this.eat(17) && ((e.optional = !0), this.resetEndLocation(e)),
                this.match(14))
              ) {
                let i = this.startNodeAt(s, r);
                return (
                  (i.expression = e),
                  (i.typeAnnotation = this.flowParseTypeAnnotation()),
                  this.finishNode(i, "TypeCastExpression")
                );
              }
              return e;
            }
            assertModuleNodeAllowed(e) {
              (e.type === "ImportDeclaration" &&
                (e.importKind === "type" || e.importKind === "typeof")) ||
                (e.type === "ExportNamedDeclaration" &&
                  e.exportKind === "type") ||
                (e.type === "ExportAllDeclaration" &&
                  e.exportKind === "type") ||
                super.assertModuleNodeAllowed(e);
            }
            parseExport(e) {
              let s = super.parseExport(e);
              return (
                (s.type === "ExportNamedDeclaration" ||
                  s.type === "ExportAllDeclaration") &&
                  (s.exportKind = s.exportKind || "value"),
                s
              );
            }
            parseExportDeclaration(e) {
              if (this.isContextual(126)) {
                e.exportKind = "type";
                let s = this.startNode();
                return (
                  this.next(),
                  this.match(5)
                    ? ((e.specifiers = this.parseExportSpecifiers(!0)),
                      this.parseExportFrom(e),
                      null)
                    : this.flowParseTypeAlias(s)
                );
              } else if (this.isContextual(127)) {
                e.exportKind = "type";
                let s = this.startNode();
                return this.next(), this.flowParseOpaqueType(s, !1);
              } else if (this.isContextual(125)) {
                e.exportKind = "type";
                let s = this.startNode();
                return this.next(), this.flowParseInterface(s);
              } else if (this.shouldParseEnums() && this.isContextual(122)) {
                e.exportKind = "value";
                let s = this.startNode();
                return this.next(), this.flowParseEnumDeclaration(s);
              } else return super.parseExportDeclaration(e);
            }
            eatExportStar(e) {
              return super.eatExportStar(...arguments)
                ? !0
                : this.isContextual(126) && this.lookahead().type === 55
                ? ((e.exportKind = "type"), this.next(), this.next(), !0)
                : !1;
            }
            maybeParseExportNamespaceSpecifier(e) {
              let { startLoc: s } = this.state,
                r = super.maybeParseExportNamespaceSpecifier(e);
              return r && e.exportKind === "type" && this.unexpected(s), r;
            }
            parseClassId(e, s, r) {
              super.parseClassId(e, s, r),
                this.match(47) &&
                  (e.typeParameters = this.flowParseTypeParameterDeclaration());
            }
            parseClassMember(e, s, r) {
              let { startLoc: i } = this.state;
              if (this.isContextual(121)) {
                if (this.parseClassMemberFromModifier(e, s)) return;
                s.declare = !0;
              }
              super.parseClassMember(e, s, r),
                s.declare &&
                  (s.type !== "ClassProperty" &&
                  s.type !== "ClassPrivateProperty" &&
                  s.type !== "PropertyDefinition"
                    ? this.raise(I.DeclareClassElement, { at: i })
                    : s.value &&
                      this.raise(I.DeclareClassFieldInitializer, {
                        at: s.value,
                      }));
            }
            isIterator(e) {
              return e === "iterator" || e === "asyncIterator";
            }
            readIterator() {
              let e = super.readWord1(),
                s = "@@" + e;
              (!this.isIterator(e) || !this.state.inType) &&
                this.raise(l.InvalidIdentifier, {
                  at: this.state.curPosition(),
                  identifierName: s,
                }),
                this.finishToken(128, s);
            }
            getTokenFromCode(e) {
              let s = this.input.charCodeAt(this.state.pos + 1);
              return e === 123 && s === 124
                ? this.finishOp(6, 2)
                : this.state.inType && (e === 62 || e === 60)
                ? this.finishOp(e === 62 ? 48 : 47, 1)
                : this.state.inType && e === 63
                ? s === 46
                  ? this.finishOp(18, 2)
                  : this.finishOp(17, 1)
                : Do(e, s, this.input.charCodeAt(this.state.pos + 2))
                ? ((this.state.pos += 2), this.readIterator())
                : super.getTokenFromCode(e);
            }
            isAssignable(e, s) {
              return e.type === "TypeCastExpression"
                ? this.isAssignable(e.expression, s)
                : super.isAssignable(e, s);
            }
            toAssignable(e) {
              !(arguments.length > 1 && arguments[1] !== void 0
                ? arguments[1]
                : !1) &&
                e.type === "AssignmentExpression" &&
                e.left.type === "TypeCastExpression" &&
                (e.left = this.typeCastToParameter(e.left)),
                super.toAssignable(...arguments);
            }
            toAssignableList(e, s, r) {
              for (let i = 0; i < e.length; i++) {
                let a = e[i];
                (a == null ? void 0 : a.type) === "TypeCastExpression" &&
                  (e[i] = this.typeCastToParameter(a));
              }
              super.toAssignableList(e, s, r);
            }
            toReferencedList(e, s) {
              for (let i = 0; i < e.length; i++) {
                var r;
                let a = e[i];
                a &&
                  a.type === "TypeCastExpression" &&
                  !((r = a.extra) != null && r.parenthesized) &&
                  (e.length > 1 || !s) &&
                  this.raise(I.TypeCastInPattern, { at: a.typeAnnotation });
              }
              return e;
            }
            parseArrayLike(e, s, r, i) {
              let a = super.parseArrayLike(e, s, r, i);
              return (
                s &&
                  !this.state.maybeInArrowParameters &&
                  this.toReferencedList(a.elements),
                a
              );
            }
            isValidLVal(e) {
              for (
                var s = arguments.length,
                  r = new Array(s > 1 ? s - 1 : 0),
                  i = 1;
                i < s;
                i++
              )
                r[i - 1] = arguments[i];
              return e === "TypeCastExpression" || super.isValidLVal(e, ...r);
            }
            parseClassProperty(e) {
              return (
                this.match(14) &&
                  (e.typeAnnotation = this.flowParseTypeAnnotation()),
                super.parseClassProperty(e)
              );
            }
            parseClassPrivateProperty(e) {
              return (
                this.match(14) &&
                  (e.typeAnnotation = this.flowParseTypeAnnotation()),
                super.parseClassPrivateProperty(e)
              );
            }
            isClassMethod() {
              return this.match(47) || super.isClassMethod();
            }
            isClassProperty() {
              return this.match(14) || super.isClassProperty();
            }
            isNonstaticConstructor(e) {
              return !this.match(14) && super.isNonstaticConstructor(e);
            }
            pushClassMethod(e, s, r, i, a, n) {
              if (
                (s.variance && this.unexpected(s.variance.loc.start),
                delete s.variance,
                this.match(47) &&
                  (s.typeParameters = this.flowParseTypeParameterDeclaration()),
                super.pushClassMethod(e, s, r, i, a, n),
                s.params && a)
              ) {
                let o = s.params;
                o.length > 0 &&
                  this.isThisParam(o[0]) &&
                  this.raise(I.ThisParamBannedInConstructor, { at: s });
              } else if (s.type === "MethodDefinition" && a && s.value.params) {
                let o = s.value.params;
                o.length > 0 &&
                  this.isThisParam(o[0]) &&
                  this.raise(I.ThisParamBannedInConstructor, { at: s });
              }
            }
            pushClassPrivateMethod(e, s, r, i) {
              s.variance && this.unexpected(s.variance.loc.start),
                delete s.variance,
                this.match(47) &&
                  (s.typeParameters = this.flowParseTypeParameterDeclaration()),
                super.pushClassPrivateMethod(e, s, r, i);
            }
            parseClassSuper(e) {
              if (
                (super.parseClassSuper(e),
                e.superClass &&
                  this.match(47) &&
                  (e.superTypeParameters =
                    this.flowParseTypeParameterInstantiation()),
                this.isContextual(110))
              ) {
                this.next();
                let s = (e.implements = []);
                do {
                  let r = this.startNode();
                  (r.id = this.flowParseRestrictedIdentifier(!0)),
                    this.match(47)
                      ? (r.typeParameters =
                          this.flowParseTypeParameterInstantiation())
                      : (r.typeParameters = null),
                    s.push(this.finishNode(r, "ClassImplements"));
                } while (this.eat(12));
              }
            }
            checkGetterSetterParams(e) {
              super.checkGetterSetterParams(e);
              let s = this.getObjectOrClassMethodParams(e);
              if (s.length > 0) {
                let r = s[0];
                this.isThisParam(r) && e.kind === "get"
                  ? this.raise(I.GetterMayNotHaveThisParam, { at: r })
                  : this.isThisParam(r) &&
                    this.raise(I.SetterMayNotHaveThisParam, { at: r });
              }
            }
            parsePropertyNamePrefixOperator(e) {
              e.variance = this.flowParseVariance();
            }
            parseObjPropValue(e, s, r, i, a, n, o, c) {
              e.variance && this.unexpected(e.variance.loc.start),
                delete e.variance;
              let f;
              this.match(47) &&
                !o &&
                ((f = this.flowParseTypeParameterDeclaration()),
                this.match(10) || this.unexpected()),
                super.parseObjPropValue(e, s, r, i, a, n, o, c),
                f && ((e.value || e).typeParameters = f);
            }
            parseAssignableListItemTypes(e) {
              return (
                this.eat(17) &&
                  (e.type !== "Identifier" &&
                    this.raise(I.PatternIsOptional, { at: e }),
                  this.isThisParam(e) &&
                    this.raise(I.ThisParamMayNotBeOptional, { at: e }),
                  (e.optional = !0)),
                this.match(14)
                  ? (e.typeAnnotation = this.flowParseTypeAnnotation())
                  : this.isThisParam(e) &&
                    this.raise(I.ThisParamAnnotationRequired, { at: e }),
                this.match(29) &&
                  this.isThisParam(e) &&
                  this.raise(I.ThisParamNoDefault, { at: e }),
                this.resetEndLocation(e),
                e
              );
            }
            parseMaybeDefault(e, s, r) {
              let i = super.parseMaybeDefault(e, s, r);
              return (
                i.type === "AssignmentPattern" &&
                  i.typeAnnotation &&
                  i.right.start < i.typeAnnotation.start &&
                  this.raise(I.TypeBeforeInitializer, { at: i.typeAnnotation }),
                i
              );
            }
            shouldParseDefaultImport(e) {
              return us(e)
                ? Fr(this.state.type)
                : super.shouldParseDefaultImport(e);
            }
            parseImportSpecifierLocal(e, s, r) {
              (s.local = us(e)
                ? this.flowParseRestrictedIdentifier(!0, !0)
                : this.parseIdentifier()),
                e.specifiers.push(this.finishImportSpecifier(s, r));
            }
            maybeParseDefaultImportSpecifier(e) {
              e.importKind = "value";
              let s = null;
              if (
                (this.match(87)
                  ? (s = "typeof")
                  : this.isContextual(126) && (s = "type"),
                s)
              ) {
                let r = this.lookahead(),
                  { type: i } = r;
                s === "type" && i === 55 && this.unexpected(null, r.type),
                  (Fr(i) || i === 5 || i === 55) &&
                    (this.next(), (e.importKind = s));
              }
              return super.maybeParseDefaultImportSpecifier(e);
            }
            parseImportSpecifier(e, s, r, i) {
              let a = e.imported,
                n = null;
              a.type === "Identifier" &&
                (a.name === "type"
                  ? (n = "type")
                  : a.name === "typeof" && (n = "typeof"));
              let o = !1;
              if (this.isContextual(93) && !this.isLookaheadContextual("as")) {
                let f = this.parseIdentifier(!0);
                n !== null && !ye(this.state.type)
                  ? ((e.imported = f), (e.importKind = n), (e.local = Ee(f)))
                  : ((e.imported = a),
                    (e.importKind = null),
                    (e.local = this.parseIdentifier()));
              } else {
                if (n !== null && ye(this.state.type))
                  (e.imported = this.parseIdentifier(!0)), (e.importKind = n);
                else {
                  if (s)
                    throw this.raise(l.ImportBindingIsString, {
                      at: e,
                      importName: a.value,
                    });
                  (e.imported = a), (e.importKind = null);
                }
                this.eatContextual(93)
                  ? (e.local = this.parseIdentifier())
                  : ((o = !0), (e.local = Ee(e.imported)));
              }
              let c = us(e);
              return (
                r &&
                  c &&
                  this.raise(I.ImportTypeShorthandOnlyInPureImport, { at: e }),
                (r || c) &&
                  this.checkReservedType(e.local.name, e.local.loc.start, !0),
                o &&
                  !r &&
                  !c &&
                  this.checkReservedWord(e.local.name, e.loc.start, !0, !0),
                this.finishImportSpecifier(e, "ImportSpecifier")
              );
            }
            parseBindingAtom() {
              switch (this.state.type) {
                case 78:
                  return this.parseIdentifier(!0);
                default:
                  return super.parseBindingAtom();
              }
            }
            parseFunctionParams(e, s) {
              let r = e.kind;
              r !== "get" &&
                r !== "set" &&
                this.match(47) &&
                (e.typeParameters = this.flowParseTypeParameterDeclaration()),
                super.parseFunctionParams(e, s);
            }
            parseVarId(e, s) {
              super.parseVarId(e, s),
                this.match(14) &&
                  ((e.id.typeAnnotation = this.flowParseTypeAnnotation()),
                  this.resetEndLocation(e.id));
            }
            parseAsyncArrowFromCallExpression(e, s) {
              if (this.match(14)) {
                let r = this.state.noAnonFunctionType;
                (this.state.noAnonFunctionType = !0),
                  (e.returnType = this.flowParseTypeAnnotation()),
                  (this.state.noAnonFunctionType = r);
              }
              return super.parseAsyncArrowFromCallExpression(e, s);
            }
            shouldParseAsyncArrow() {
              return this.match(14) || super.shouldParseAsyncArrow();
            }
            parseMaybeAssign(e, s) {
              var r;
              let i = null,
                a;
              if (
                this.hasPlugin("jsx") &&
                (this.match(138) || this.match(47))
              ) {
                if (
                  ((i = this.state.clone()),
                  (a = this.tryParse(() => super.parseMaybeAssign(e, s), i)),
                  !a.error)
                )
                  return a.node;
                let { context: c } = this.state,
                  f = c[c.length - 1];
                (f === U.j_oTag || f === U.j_expr) && c.pop();
              }
              if (((r = a) != null && r.error) || this.match(47)) {
                var n, o;
                i = i || this.state.clone();
                let c,
                  f = this.tryParse((T) => {
                    var v;
                    c = this.flowParseTypeParameterDeclaration();
                    let N = this.forwardNoArrowParamsConversionAt(c, () => {
                      let z = super.parseMaybeAssign(e, s);
                      return this.resetStartLocationFromNode(z, c), z;
                    });
                    (v = N.extra) != null && v.parenthesized && T();
                    let R = this.maybeUnwrapTypeCastExpression(N);
                    return (
                      R.type !== "ArrowFunctionExpression" && T(),
                      (R.typeParameters = c),
                      this.resetStartLocationFromNode(R, c),
                      N
                    );
                  }, i),
                  y = null;
                if (
                  f.node &&
                  this.maybeUnwrapTypeCastExpression(f.node).type ===
                    "ArrowFunctionExpression"
                ) {
                  if (!f.error && !f.aborted)
                    return (
                      f.node.async &&
                        this.raise(
                          I.UnexpectedTypeParameterBeforeAsyncArrowFunction,
                          { at: c }
                        ),
                      f.node
                    );
                  y = f.node;
                }
                if ((n = a) != null && n.node)
                  return (this.state = a.failState), a.node;
                if (y) return (this.state = f.failState), y;
                throw (o = a) != null && o.thrown
                  ? a.error
                  : f.thrown
                  ? f.error
                  : this.raise(I.UnexpectedTokenAfterTypeParameter, { at: c });
              }
              return super.parseMaybeAssign(e, s);
            }
            parseArrow(e) {
              if (this.match(14)) {
                let s = this.tryParse(() => {
                  let r = this.state.noAnonFunctionType;
                  this.state.noAnonFunctionType = !0;
                  let i = this.startNode();
                  return (
                    ([i.typeAnnotation, e.predicate] =
                      this.flowParseTypeAndPredicateInitialiser()),
                    (this.state.noAnonFunctionType = r),
                    this.canInsertSemicolon() && this.unexpected(),
                    this.match(19) || this.unexpected(),
                    i
                  );
                });
                if (s.thrown) return null;
                s.error && (this.state = s.failState),
                  (e.returnType = s.node.typeAnnotation
                    ? this.finishNode(s.node, "TypeAnnotation")
                    : null);
              }
              return super.parseArrow(e);
            }
            shouldParseArrow(e) {
              return this.match(14) || super.shouldParseArrow(e);
            }
            setArrowFunctionParameters(e, s) {
              this.state.noArrowParamsConversionAt.indexOf(e.start) !== -1
                ? (e.params = s)
                : super.setArrowFunctionParameters(e, s);
            }
            checkParams(e, s, r) {
              if (
                !(
                  r &&
                  this.state.noArrowParamsConversionAt.indexOf(e.start) !== -1
                )
              ) {
                for (let i = 0; i < e.params.length; i++)
                  this.isThisParam(e.params[i]) &&
                    i > 0 &&
                    this.raise(I.ThisParamMustBeFirst, { at: e.params[i] });
                return super.checkParams(...arguments);
              }
            }
            parseParenAndDistinguishExpression(e) {
              return super.parseParenAndDistinguishExpression(
                e && this.state.noArrowAt.indexOf(this.state.start) === -1
              );
            }
            parseSubscripts(e, s, r, i) {
              if (
                e.type === "Identifier" &&
                e.name === "async" &&
                this.state.noArrowAt.indexOf(s) !== -1
              ) {
                this.next();
                let a = this.startNodeAt(s, r);
                (a.callee = e),
                  (a.arguments = this.parseCallExpressionArguments(11, !1)),
                  (e = this.finishNode(a, "CallExpression"));
              } else if (
                e.type === "Identifier" &&
                e.name === "async" &&
                this.match(47)
              ) {
                let a = this.state.clone(),
                  n = this.tryParse(
                    (c) => this.parseAsyncArrowWithTypeParameters(s, r) || c(),
                    a
                  );
                if (!n.error && !n.aborted) return n.node;
                let o = this.tryParse(
                  () => super.parseSubscripts(e, s, r, i),
                  a
                );
                if (o.node && !o.error) return o.node;
                if (n.node) return (this.state = n.failState), n.node;
                if (o.node) return (this.state = o.failState), o.node;
                throw n.error || o.error;
              }
              return super.parseSubscripts(e, s, r, i);
            }
            parseSubscript(e, s, r, i, a) {
              if (this.match(18) && this.isLookaheadToken_lt()) {
                if (((a.optionalChainMember = !0), i)) return (a.stop = !0), e;
                this.next();
                let n = this.startNodeAt(s, r);
                return (
                  (n.callee = e),
                  (n.typeArguments =
                    this.flowParseTypeParameterInstantiation()),
                  this.expect(10),
                  (n.arguments = this.parseCallExpressionArguments(11, !1)),
                  (n.optional = !0),
                  this.finishCallExpression(n, !0)
                );
              } else if (!i && this.shouldParseTypes() && this.match(47)) {
                let n = this.startNodeAt(s, r);
                n.callee = e;
                let o = this.tryParse(
                  () => (
                    (n.typeArguments =
                      this.flowParseTypeParameterInstantiationCallOrNew()),
                    this.expect(10),
                    (n.arguments = this.parseCallExpressionArguments(11, !1)),
                    a.optionalChainMember && (n.optional = !1),
                    this.finishCallExpression(n, a.optionalChainMember)
                  )
                );
                if (o.node)
                  return o.error && (this.state = o.failState), o.node;
              }
              return super.parseSubscript(e, s, r, i, a);
            }
            parseNewCallee(e) {
              super.parseNewCallee(e);
              let s = null;
              this.shouldParseTypes() &&
                this.match(47) &&
                (s = this.tryParse(() =>
                  this.flowParseTypeParameterInstantiationCallOrNew()
                ).node),
                (e.typeArguments = s);
            }
            parseAsyncArrowWithTypeParameters(e, s) {
              let r = this.startNodeAt(e, s);
              if ((this.parseFunctionParams(r), !!this.parseArrow(r)))
                return this.parseArrowExpression(r, void 0, !0);
            }
            readToken_mult_modulo(e) {
              let s = this.input.charCodeAt(this.state.pos + 1);
              if (e === 42 && s === 47 && this.state.hasFlowComment) {
                (this.state.hasFlowComment = !1),
                  (this.state.pos += 2),
                  this.nextToken();
                return;
              }
              super.readToken_mult_modulo(e);
            }
            readToken_pipe_amp(e) {
              let s = this.input.charCodeAt(this.state.pos + 1);
              if (e === 124 && s === 125) {
                this.finishOp(9, 2);
                return;
              }
              super.readToken_pipe_amp(e);
            }
            parseTopLevel(e, s) {
              let r = super.parseTopLevel(e, s);
              return (
                this.state.hasFlowComment &&
                  this.raise(I.UnterminatedFlowComment, {
                    at: this.state.curPosition(),
                  }),
                r
              );
            }
            skipBlockComment() {
              if (this.hasPlugin("flowComments") && this.skipFlowComment()) {
                if (this.state.hasFlowComment)
                  throw this.raise(I.NestedFlowComment, {
                    at: this.state.startLoc,
                  });
                this.hasFlowCommentCompletion(),
                  (this.state.pos += this.skipFlowComment()),
                  (this.state.hasFlowComment = !0);
                return;
              }
              if (this.state.hasFlowComment) {
                let e = this.input.indexOf("*-/", this.state.pos + 2);
                if (e === -1)
                  throw this.raise(l.UnterminatedComment, {
                    at: this.state.curPosition(),
                  });
                this.state.pos = e + 2 + 3;
                return;
              }
              return super.skipBlockComment();
            }
            skipFlowComment() {
              let { pos: e } = this.state,
                s = 2;
              for (; [32, 9].includes(this.input.charCodeAt(e + s)); ) s++;
              let r = this.input.charCodeAt(s + e),
                i = this.input.charCodeAt(s + e + 1);
              return r === 58 && i === 58
                ? s + 2
                : this.input.slice(s + e, s + e + 12) === "flow-include"
                ? s + 12
                : r === 58 && i !== 58
                ? s
                : !1;
            }
            hasFlowCommentCompletion() {
              if (this.input.indexOf("*/", this.state.pos) === -1)
                throw this.raise(l.UnterminatedComment, {
                  at: this.state.curPosition(),
                });
            }
            flowEnumErrorBooleanMemberNotInitialized(e, s) {
              let { enumName: r, memberName: i } = s;
              this.raise(I.EnumBooleanMemberNotInitialized, {
                at: e,
                memberName: i,
                enumName: r,
              });
            }
            flowEnumErrorInvalidMemberInitializer(e, s) {
              return this.raise(
                s.explicitType
                  ? s.explicitType === "symbol"
                    ? I.EnumInvalidMemberInitializerSymbolType
                    : I.EnumInvalidMemberInitializerPrimaryType
                  : I.EnumInvalidMemberInitializerUnknownType,
                Object.assign({ at: e }, s)
              );
            }
            flowEnumErrorNumberMemberNotInitialized(e, s) {
              let { enumName: r, memberName: i } = s;
              this.raise(I.EnumNumberMemberNotInitialized, {
                at: e,
                enumName: r,
                memberName: i,
              });
            }
            flowEnumErrorStringMemberInconsistentlyInitailized(e, s) {
              let { enumName: r } = s;
              this.raise(I.EnumStringMemberInconsistentlyInitailized, {
                at: e,
                enumName: r,
              });
            }
            flowEnumMemberInit() {
              let e = this.state.startLoc,
                s = () => this.match(12) || this.match(8);
              switch (this.state.type) {
                case 130: {
                  let r = this.parseNumericLiteral(this.state.value);
                  return s()
                    ? { type: "number", loc: r.loc.start, value: r }
                    : { type: "invalid", loc: e };
                }
                case 129: {
                  let r = this.parseStringLiteral(this.state.value);
                  return s()
                    ? { type: "string", loc: r.loc.start, value: r }
                    : { type: "invalid", loc: e };
                }
                case 85:
                case 86: {
                  let r = this.parseBooleanLiteral(this.match(85));
                  return s()
                    ? { type: "boolean", loc: r.loc.start, value: r }
                    : { type: "invalid", loc: e };
                }
                default:
                  return { type: "invalid", loc: e };
              }
            }
            flowEnumMemberRaw() {
              let e = this.state.startLoc,
                s = this.parseIdentifier(!0),
                r = this.eat(29)
                  ? this.flowEnumMemberInit()
                  : { type: "none", loc: e };
              return { id: s, init: r };
            }
            flowEnumCheckExplicitTypeMismatch(e, s, r) {
              let { explicitType: i } = s;
              i !== null &&
                i !== r &&
                this.flowEnumErrorInvalidMemberInitializer(e, s);
            }
            flowEnumMembers(e) {
              let { enumName: s, explicitType: r } = e,
                i = new Set(),
                a = {
                  booleanMembers: [],
                  numberMembers: [],
                  stringMembers: [],
                  defaultedMembers: [],
                },
                n = !1;
              for (; !this.match(8); ) {
                if (this.eat(21)) {
                  n = !0;
                  break;
                }
                let o = this.startNode(),
                  { id: c, init: f } = this.flowEnumMemberRaw(),
                  y = c.name;
                if (y === "") continue;
                /^[a-z]/.test(y) &&
                  this.raise(I.EnumInvalidMemberName, {
                    at: c,
                    memberName: y,
                    suggestion: y[0].toUpperCase() + y.slice(1),
                    enumName: s,
                  }),
                  i.has(y) &&
                    this.raise(I.EnumDuplicateMemberName, {
                      at: c,
                      memberName: y,
                      enumName: s,
                    }),
                  i.add(y);
                let T = { enumName: s, explicitType: r, memberName: y };
                switch (((o.id = c), f.type)) {
                  case "boolean": {
                    this.flowEnumCheckExplicitTypeMismatch(f.loc, T, "boolean"),
                      (o.init = f.value),
                      a.booleanMembers.push(
                        this.finishNode(o, "EnumBooleanMember")
                      );
                    break;
                  }
                  case "number": {
                    this.flowEnumCheckExplicitTypeMismatch(f.loc, T, "number"),
                      (o.init = f.value),
                      a.numberMembers.push(
                        this.finishNode(o, "EnumNumberMember")
                      );
                    break;
                  }
                  case "string": {
                    this.flowEnumCheckExplicitTypeMismatch(f.loc, T, "string"),
                      (o.init = f.value),
                      a.stringMembers.push(
                        this.finishNode(o, "EnumStringMember")
                      );
                    break;
                  }
                  case "invalid":
                    throw this.flowEnumErrorInvalidMemberInitializer(f.loc, T);
                  case "none":
                    switch (r) {
                      case "boolean":
                        this.flowEnumErrorBooleanMemberNotInitialized(f.loc, T);
                        break;
                      case "number":
                        this.flowEnumErrorNumberMemberNotInitialized(f.loc, T);
                        break;
                      default:
                        a.defaultedMembers.push(
                          this.finishNode(o, "EnumDefaultedMember")
                        );
                    }
                }
                this.match(8) || this.expect(12);
              }
              return { members: a, hasUnknownMembers: n };
            }
            flowEnumStringMembers(e, s, r) {
              let { enumName: i } = r;
              if (e.length === 0) return s;
              if (s.length === 0) return e;
              if (s.length > e.length) {
                for (let a of e)
                  this.flowEnumErrorStringMemberInconsistentlyInitailized(a, {
                    enumName: i,
                  });
                return s;
              } else {
                for (let a of s)
                  this.flowEnumErrorStringMemberInconsistentlyInitailized(a, {
                    enumName: i,
                  });
                return e;
              }
            }
            flowEnumParseExplicitType(e) {
              let { enumName: s } = e;
              if (!this.eatContextual(101)) return null;
              if (!K(this.state.type))
                throw this.raise(I.EnumInvalidExplicitTypeUnknownSupplied, {
                  at: this.state.startLoc,
                  enumName: s,
                });
              let { value: r } = this.state;
              return (
                this.next(),
                r !== "boolean" &&
                  r !== "number" &&
                  r !== "string" &&
                  r !== "symbol" &&
                  this.raise(I.EnumInvalidExplicitType, {
                    at: this.state.startLoc,
                    enumName: s,
                    invalidEnumType: r,
                  }),
                r
              );
            }
            flowEnumBody(e, s) {
              let r = s.name,
                i = s.loc.start,
                a = this.flowEnumParseExplicitType({ enumName: r });
              this.expect(5);
              let { members: n, hasUnknownMembers: o } = this.flowEnumMembers({
                enumName: r,
                explicitType: a,
              });
              switch (((e.hasUnknownMembers = o), a)) {
                case "boolean":
                  return (
                    (e.explicitType = !0),
                    (e.members = n.booleanMembers),
                    this.expect(8),
                    this.finishNode(e, "EnumBooleanBody")
                  );
                case "number":
                  return (
                    (e.explicitType = !0),
                    (e.members = n.numberMembers),
                    this.expect(8),
                    this.finishNode(e, "EnumNumberBody")
                  );
                case "string":
                  return (
                    (e.explicitType = !0),
                    (e.members = this.flowEnumStringMembers(
                      n.stringMembers,
                      n.defaultedMembers,
                      { enumName: r }
                    )),
                    this.expect(8),
                    this.finishNode(e, "EnumStringBody")
                  );
                case "symbol":
                  return (
                    (e.members = n.defaultedMembers),
                    this.expect(8),
                    this.finishNode(e, "EnumSymbolBody")
                  );
                default: {
                  let c = () => (
                    (e.members = []),
                    this.expect(8),
                    this.finishNode(e, "EnumStringBody")
                  );
                  e.explicitType = !1;
                  let f = n.booleanMembers.length,
                    y = n.numberMembers.length,
                    T = n.stringMembers.length,
                    v = n.defaultedMembers.length;
                  if (!f && !y && !T && !v) return c();
                  if (!f && !y)
                    return (
                      (e.members = this.flowEnumStringMembers(
                        n.stringMembers,
                        n.defaultedMembers,
                        { enumName: r }
                      )),
                      this.expect(8),
                      this.finishNode(e, "EnumStringBody")
                    );
                  if (!y && !T && f >= v) {
                    for (let N of n.defaultedMembers)
                      this.flowEnumErrorBooleanMemberNotInitialized(
                        N.loc.start,
                        { enumName: r, memberName: N.id.name }
                      );
                    return (
                      (e.members = n.booleanMembers),
                      this.expect(8),
                      this.finishNode(e, "EnumBooleanBody")
                    );
                  } else if (!f && !T && y >= v) {
                    for (let N of n.defaultedMembers)
                      this.flowEnumErrorNumberMemberNotInitialized(
                        N.loc.start,
                        { enumName: r, memberName: N.id.name }
                      );
                    return (
                      (e.members = n.numberMembers),
                      this.expect(8),
                      this.finishNode(e, "EnumNumberBody")
                    );
                  } else
                    return (
                      this.raise(I.EnumInconsistentMemberValues, {
                        at: i,
                        enumName: r,
                      }),
                      c()
                    );
                }
              }
            }
            flowParseEnumDeclaration(e) {
              let s = this.parseIdentifier();
              return (
                (e.id = s),
                (e.body = this.flowEnumBody(this.startNode(), s)),
                this.finishNode(e, "EnumDeclaration")
              );
            }
            isLookaheadToken_lt() {
              let e = this.nextTokenStart();
              if (this.input.charCodeAt(e) === 60) {
                let s = this.input.charCodeAt(e + 1);
                return s !== 60 && s !== 61;
              }
              return !1;
            }
            maybeUnwrapTypeCastExpression(e) {
              return e.type === "TypeCastExpression" ? e.expression : e;
            }
          },
        Ph = {
          __proto__: null,
          quot: '"',
          amp: "&",
          apos: "'",
          lt: "<",
          gt: ">",
          nbsp: "\xA0",
          iexcl: "\xA1",
          cent: "\xA2",
          pound: "\xA3",
          curren: "\xA4",
          yen: "\xA5",
          brvbar: "\xA6",
          sect: "\xA7",
          uml: "\xA8",
          copy: "\xA9",
          ordf: "\xAA",
          laquo: "\xAB",
          not: "\xAC",
          shy: "\xAD",
          reg: "\xAE",
          macr: "\xAF",
          deg: "\xB0",
          plusmn: "\xB1",
          sup2: "\xB2",
          sup3: "\xB3",
          acute: "\xB4",
          micro: "\xB5",
          para: "\xB6",
          middot: "\xB7",
          cedil: "\xB8",
          sup1: "\xB9",
          ordm: "\xBA",
          raquo: "\xBB",
          frac14: "\xBC",
          frac12: "\xBD",
          frac34: "\xBE",
          iquest: "\xBF",
          Agrave: "\xC0",
          Aacute: "\xC1",
          Acirc: "\xC2",
          Atilde: "\xC3",
          Auml: "\xC4",
          Aring: "\xC5",
          AElig: "\xC6",
          Ccedil: "\xC7",
          Egrave: "\xC8",
          Eacute: "\xC9",
          Ecirc: "\xCA",
          Euml: "\xCB",
          Igrave: "\xCC",
          Iacute: "\xCD",
          Icirc: "\xCE",
          Iuml: "\xCF",
          ETH: "\xD0",
          Ntilde: "\xD1",
          Ograve: "\xD2",
          Oacute: "\xD3",
          Ocirc: "\xD4",
          Otilde: "\xD5",
          Ouml: "\xD6",
          times: "\xD7",
          Oslash: "\xD8",
          Ugrave: "\xD9",
          Uacute: "\xDA",
          Ucirc: "\xDB",
          Uuml: "\xDC",
          Yacute: "\xDD",
          THORN: "\xDE",
          szlig: "\xDF",
          agrave: "\xE0",
          aacute: "\xE1",
          acirc: "\xE2",
          atilde: "\xE3",
          auml: "\xE4",
          aring: "\xE5",
          aelig: "\xE6",
          ccedil: "\xE7",
          egrave: "\xE8",
          eacute: "\xE9",
          ecirc: "\xEA",
          euml: "\xEB",
          igrave: "\xEC",
          iacute: "\xED",
          icirc: "\xEE",
          iuml: "\xEF",
          eth: "\xF0",
          ntilde: "\xF1",
          ograve: "\xF2",
          oacute: "\xF3",
          ocirc: "\xF4",
          otilde: "\xF5",
          ouml: "\xF6",
          divide: "\xF7",
          oslash: "\xF8",
          ugrave: "\xF9",
          uacute: "\xFA",
          ucirc: "\xFB",
          uuml: "\xFC",
          yacute: "\xFD",
          thorn: "\xFE",
          yuml: "\xFF",
          OElig: "\u0152",
          oelig: "\u0153",
          Scaron: "\u0160",
          scaron: "\u0161",
          Yuml: "\u0178",
          fnof: "\u0192",
          circ: "\u02C6",
          tilde: "\u02DC",
          Alpha: "\u0391",
          Beta: "\u0392",
          Gamma: "\u0393",
          Delta: "\u0394",
          Epsilon: "\u0395",
          Zeta: "\u0396",
          Eta: "\u0397",
          Theta: "\u0398",
          Iota: "\u0399",
          Kappa: "\u039A",
          Lambda: "\u039B",
          Mu: "\u039C",
          Nu: "\u039D",
          Xi: "\u039E",
          Omicron: "\u039F",
          Pi: "\u03A0",
          Rho: "\u03A1",
          Sigma: "\u03A3",
          Tau: "\u03A4",
          Upsilon: "\u03A5",
          Phi: "\u03A6",
          Chi: "\u03A7",
          Psi: "\u03A8",
          Omega: "\u03A9",
          alpha: "\u03B1",
          beta: "\u03B2",
          gamma: "\u03B3",
          delta: "\u03B4",
          epsilon: "\u03B5",
          zeta: "\u03B6",
          eta: "\u03B7",
          theta: "\u03B8",
          iota: "\u03B9",
          kappa: "\u03BA",
          lambda: "\u03BB",
          mu: "\u03BC",
          nu: "\u03BD",
          xi: "\u03BE",
          omicron: "\u03BF",
          pi: "\u03C0",
          rho: "\u03C1",
          sigmaf: "\u03C2",
          sigma: "\u03C3",
          tau: "\u03C4",
          upsilon: "\u03C5",
          phi: "\u03C6",
          chi: "\u03C7",
          psi: "\u03C8",
          omega: "\u03C9",
          thetasym: "\u03D1",
          upsih: "\u03D2",
          piv: "\u03D6",
          ensp: "\u2002",
          emsp: "\u2003",
          thinsp: "\u2009",
          zwnj: "\u200C",
          zwj: "\u200D",
          lrm: "\u200E",
          rlm: "\u200F",
          ndash: "\u2013",
          mdash: "\u2014",
          lsquo: "\u2018",
          rsquo: "\u2019",
          sbquo: "\u201A",
          ldquo: "\u201C",
          rdquo: "\u201D",
          bdquo: "\u201E",
          dagger: "\u2020",
          Dagger: "\u2021",
          bull: "\u2022",
          hellip: "\u2026",
          permil: "\u2030",
          prime: "\u2032",
          Prime: "\u2033",
          lsaquo: "\u2039",
          rsaquo: "\u203A",
          oline: "\u203E",
          frasl: "\u2044",
          euro: "\u20AC",
          image: "\u2111",
          weierp: "\u2118",
          real: "\u211C",
          trade: "\u2122",
          alefsym: "\u2135",
          larr: "\u2190",
          uarr: "\u2191",
          rarr: "\u2192",
          darr: "\u2193",
          harr: "\u2194",
          crarr: "\u21B5",
          lArr: "\u21D0",
          uArr: "\u21D1",
          rArr: "\u21D2",
          dArr: "\u21D3",
          hArr: "\u21D4",
          forall: "\u2200",
          part: "\u2202",
          exist: "\u2203",
          empty: "\u2205",
          nabla: "\u2207",
          isin: "\u2208",
          notin: "\u2209",
          ni: "\u220B",
          prod: "\u220F",
          sum: "\u2211",
          minus: "\u2212",
          lowast: "\u2217",
          radic: "\u221A",
          prop: "\u221D",
          infin: "\u221E",
          ang: "\u2220",
          and: "\u2227",
          or: "\u2228",
          cap: "\u2229",
          cup: "\u222A",
          int: "\u222B",
          there4: "\u2234",
          sim: "\u223C",
          cong: "\u2245",
          asymp: "\u2248",
          ne: "\u2260",
          equiv: "\u2261",
          le: "\u2264",
          ge: "\u2265",
          sub: "\u2282",
          sup: "\u2283",
          nsub: "\u2284",
          sube: "\u2286",
          supe: "\u2287",
          oplus: "\u2295",
          otimes: "\u2297",
          perp: "\u22A5",
          sdot: "\u22C5",
          lceil: "\u2308",
          rceil: "\u2309",
          lfloor: "\u230A",
          rfloor: "\u230B",
          lang: "\u2329",
          rang: "\u232A",
          loz: "\u25CA",
          spades: "\u2660",
          clubs: "\u2663",
          hearts: "\u2665",
          diams: "\u2666",
        },
        Be = j(qn || (qn = ht(["jsx"])))((t) => ({
          AttributeIsEmpty: t(
            "JSX attributes must only be assigned a non-empty expression."
          ),
          MissingClosingTagElement: t((e) => {
            let { openingTagName: s } = e;
            return "Expected corresponding JSX closing tag for <".concat(
              s,
              ">."
            );
          }),
          MissingClosingTagFragment: t(
            "Expected corresponding JSX closing tag for <>."
          ),
          UnexpectedSequenceExpression: t(
            "Sequence expressions cannot be directly nested inside JSX. Did you mean to wrap it in parentheses (...)?"
          ),
          UnexpectedToken: t((e) => {
            let { unexpected: s, HTMLEntity: r } = e;
            return "Unexpected token `"
              .concat(s, "`. Did you mean `")
              .concat(r, "` or `{'")
              .concat(s, "'}`?");
          }),
          UnsupportedJsxValue: t(
            "JSX value should be either an expression or a quoted JSX text."
          ),
          UnterminatedJsxContent: t("Unterminated JSX contents."),
          UnwrappedAdjacentJSXElements: t(
            "Adjacent JSX elements must be wrapped in an enclosing tag. Did you want a JSX fragment <>...</>?"
          ),
        }));
      function Ne(t) {
        return t
          ? t.type === "JSXOpeningFragment" || t.type === "JSXClosingFragment"
          : !1;
      }
      function Ge(t) {
        if (t.type === "JSXIdentifier") return t.name;
        if (t.type === "JSXNamespacedName")
          return t.namespace.name + ":" + t.name.name;
        if (t.type === "JSXMemberExpression")
          return Ge(t.object) + "." + Ge(t.property);
        throw new Error("Node had unexpected type: " + t.type);
      }
      var Th = (t) =>
          class extends t {
            jsxReadToken() {
              let e = "",
                s = this.state.pos;
              for (;;) {
                if (this.state.pos >= this.length)
                  throw this.raise(Be.UnterminatedJsxContent, {
                    at: this.state.startLoc,
                  });
                let r = this.input.charCodeAt(this.state.pos);
                switch (r) {
                  case 60:
                  case 123:
                    return this.state.pos === this.state.start
                      ? r === 60 && this.state.canStartJSXElement
                        ? (++this.state.pos, this.finishToken(138))
                        : super.getTokenFromCode(r)
                      : ((e += this.input.slice(s, this.state.pos)),
                        this.finishToken(137, e));
                  case 38:
                    (e += this.input.slice(s, this.state.pos)),
                      (e += this.jsxReadEntity()),
                      (s = this.state.pos);
                    break;
                  case 62:
                  case 125:
                  default:
                    Oe(r)
                      ? ((e += this.input.slice(s, this.state.pos)),
                        (e += this.jsxReadNewLine(!0)),
                        (s = this.state.pos))
                      : ++this.state.pos;
                }
              }
            }
            jsxReadNewLine(e) {
              let s = this.input.charCodeAt(this.state.pos),
                r;
              return (
                ++this.state.pos,
                s === 13 && this.input.charCodeAt(this.state.pos) === 10
                  ? (++this.state.pos,
                    (r = e
                      ? `
`
                      : `\r
`))
                  : (r = String.fromCharCode(s)),
                ++this.state.curLine,
                (this.state.lineStart = this.state.pos),
                r
              );
            }
            jsxReadString(e) {
              let s = "",
                r = ++this.state.pos;
              for (;;) {
                if (this.state.pos >= this.length)
                  throw this.raise(l.UnterminatedString, {
                    at: this.state.startLoc,
                  });
                let i = this.input.charCodeAt(this.state.pos);
                if (i === e) break;
                i === 38
                  ? ((s += this.input.slice(r, this.state.pos)),
                    (s += this.jsxReadEntity()),
                    (r = this.state.pos))
                  : Oe(i)
                  ? ((s += this.input.slice(r, this.state.pos)),
                    (s += this.jsxReadNewLine(!1)),
                    (r = this.state.pos))
                  : ++this.state.pos;
              }
              return (
                (s += this.input.slice(r, this.state.pos++)),
                this.finishToken(129, s)
              );
            }
            jsxReadEntity() {
              let e = ++this.state.pos;
              if (this.codePointAtPos(this.state.pos) === 35) {
                ++this.state.pos;
                let s = 10;
                this.codePointAtPos(this.state.pos) === 120 &&
                  ((s = 16), ++this.state.pos);
                let r = this.readInt(s, void 0, !1, "bail");
                if (r !== null && this.codePointAtPos(this.state.pos) === 59)
                  return ++this.state.pos, String.fromCodePoint(r);
              } else {
                let s = 0,
                  r = !1;
                for (
                  ;
                  s++ < 10 &&
                  this.state.pos < this.length &&
                  !(r = this.codePointAtPos(this.state.pos) == 59);

                )
                  ++this.state.pos;
                if (r) {
                  let i = this.input.slice(e, this.state.pos),
                    a = Ph[i];
                  if ((++this.state.pos, a)) return a;
                }
              }
              return (this.state.pos = e), "&";
            }
            jsxReadWord() {
              let e,
                s = this.state.pos;
              do e = this.input.charCodeAt(++this.state.pos);
              while (ze(e) || e === 45);
              return this.finishToken(136, this.input.slice(s, this.state.pos));
            }
            jsxParseIdentifier() {
              let e = this.startNode();
              return (
                this.match(136)
                  ? (e.name = this.state.value)
                  : Vt(this.state.type)
                  ? (e.name = ve(this.state.type))
                  : this.unexpected(),
                this.next(),
                this.finishNode(e, "JSXIdentifier")
              );
            }
            jsxParseNamespacedName() {
              let e = this.state.start,
                s = this.state.startLoc,
                r = this.jsxParseIdentifier();
              if (!this.eat(14)) return r;
              let i = this.startNodeAt(e, s);
              return (
                (i.namespace = r),
                (i.name = this.jsxParseIdentifier()),
                this.finishNode(i, "JSXNamespacedName")
              );
            }
            jsxParseElementName() {
              let e = this.state.start,
                s = this.state.startLoc,
                r = this.jsxParseNamespacedName();
              if (r.type === "JSXNamespacedName") return r;
              for (; this.eat(16); ) {
                let i = this.startNodeAt(e, s);
                (i.object = r),
                  (i.property = this.jsxParseIdentifier()),
                  (r = this.finishNode(i, "JSXMemberExpression"));
              }
              return r;
            }
            jsxParseAttributeValue() {
              let e;
              switch (this.state.type) {
                case 5:
                  return (
                    (e = this.startNode()),
                    this.setContext(U.brace),
                    this.next(),
                    (e = this.jsxParseExpressionContainer(e, U.j_oTag)),
                    e.expression.type === "JSXEmptyExpression" &&
                      this.raise(Be.AttributeIsEmpty, { at: e }),
                    e
                  );
                case 138:
                case 129:
                  return this.parseExprAtom();
                default:
                  throw this.raise(Be.UnsupportedJsxValue, {
                    at: this.state.startLoc,
                  });
              }
            }
            jsxParseEmptyExpression() {
              let e = this.startNodeAt(
                this.state.lastTokEndLoc.index,
                this.state.lastTokEndLoc
              );
              return this.finishNodeAt(
                e,
                "JSXEmptyExpression",
                this.state.startLoc
              );
            }
            jsxParseSpreadChild(e) {
              return (
                this.next(),
                (e.expression = this.parseExpression()),
                this.setContext(U.j_oTag),
                (this.state.canStartJSXElement = !0),
                this.expect(8),
                this.finishNode(e, "JSXSpreadChild")
              );
            }
            jsxParseExpressionContainer(e, s) {
              if (this.match(8)) e.expression = this.jsxParseEmptyExpression();
              else {
                let r = this.parseExpression();
                e.expression = r;
              }
              return (
                this.setContext(s),
                (this.state.canStartJSXElement = !0),
                this.expect(8),
                this.finishNode(e, "JSXExpressionContainer")
              );
            }
            jsxParseAttribute() {
              let e = this.startNode();
              return this.match(5)
                ? (this.setContext(U.brace),
                  this.next(),
                  this.expect(21),
                  (e.argument = this.parseMaybeAssignAllowIn()),
                  this.setContext(U.j_oTag),
                  (this.state.canStartJSXElement = !0),
                  this.expect(8),
                  this.finishNode(e, "JSXSpreadAttribute"))
                : ((e.name = this.jsxParseNamespacedName()),
                  (e.value = this.eat(29)
                    ? this.jsxParseAttributeValue()
                    : null),
                  this.finishNode(e, "JSXAttribute"));
            }
            jsxParseOpeningElementAt(e, s) {
              let r = this.startNodeAt(e, s);
              return this.eat(139)
                ? this.finishNode(r, "JSXOpeningFragment")
                : ((r.name = this.jsxParseElementName()),
                  this.jsxParseOpeningElementAfterName(r));
            }
            jsxParseOpeningElementAfterName(e) {
              let s = [];
              for (; !this.match(56) && !this.match(139); )
                s.push(this.jsxParseAttribute());
              return (
                (e.attributes = s),
                (e.selfClosing = this.eat(56)),
                this.expect(139),
                this.finishNode(e, "JSXOpeningElement")
              );
            }
            jsxParseClosingElementAt(e, s) {
              let r = this.startNodeAt(e, s);
              return this.eat(139)
                ? this.finishNode(r, "JSXClosingFragment")
                : ((r.name = this.jsxParseElementName()),
                  this.expect(139),
                  this.finishNode(r, "JSXClosingElement"));
            }
            jsxParseElementAt(e, s) {
              let r = this.startNodeAt(e, s),
                i = [],
                a = this.jsxParseOpeningElementAt(e, s),
                n = null;
              if (!a.selfClosing) {
                e: for (;;)
                  switch (this.state.type) {
                    case 138:
                      if (
                        ((e = this.state.start),
                        (s = this.state.startLoc),
                        this.next(),
                        this.eat(56))
                      ) {
                        n = this.jsxParseClosingElementAt(e, s);
                        break e;
                      }
                      i.push(this.jsxParseElementAt(e, s));
                      break;
                    case 137:
                      i.push(this.parseExprAtom());
                      break;
                    case 5: {
                      let o = this.startNode();
                      this.setContext(U.brace),
                        this.next(),
                        this.match(21)
                          ? i.push(this.jsxParseSpreadChild(o))
                          : i.push(
                              this.jsxParseExpressionContainer(o, U.j_expr)
                            );
                      break;
                    }
                    default:
                      throw this.unexpected();
                  }
                Ne(a) && !Ne(n) && n !== null
                  ? this.raise(Be.MissingClosingTagFragment, { at: n })
                  : !Ne(a) && Ne(n)
                  ? this.raise(Be.MissingClosingTagElement, {
                      at: n,
                      openingTagName: Ge(a.name),
                    })
                  : !Ne(a) &&
                    !Ne(n) &&
                    Ge(n.name) !== Ge(a.name) &&
                    this.raise(Be.MissingClosingTagElement, {
                      at: n,
                      openingTagName: Ge(a.name),
                    });
              }
              if (
                (Ne(a)
                  ? ((r.openingFragment = a), (r.closingFragment = n))
                  : ((r.openingElement = a), (r.closingElement = n)),
                (r.children = i),
                this.match(47))
              )
                throw this.raise(Be.UnwrappedAdjacentJSXElements, {
                  at: this.state.startLoc,
                });
              return Ne(a)
                ? this.finishNode(r, "JSXFragment")
                : this.finishNode(r, "JSXElement");
            }
            jsxParseElement() {
              let e = this.state.start,
                s = this.state.startLoc;
              return this.next(), this.jsxParseElementAt(e, s);
            }
            setContext(e) {
              let { context: s } = this.state;
              s[s.length - 1] = e;
            }
            parseExprAtom(e) {
              return this.match(137)
                ? this.parseLiteral(this.state.value, "JSXText")
                : this.match(138)
                ? this.jsxParseElement()
                : this.match(47) && this.input.charCodeAt(this.state.pos) !== 33
                ? (this.replaceToken(138), this.jsxParseElement())
                : super.parseExprAtom(e);
            }
            skipSpace() {
              this.curContext().preserveSpace || super.skipSpace();
            }
            getTokenFromCode(e) {
              let s = this.curContext();
              if (s === U.j_expr) return this.jsxReadToken();
              if (s === U.j_oTag || s === U.j_cTag) {
                if (ge(e)) return this.jsxReadWord();
                if (e === 62) return ++this.state.pos, this.finishToken(139);
                if ((e === 34 || e === 39) && s === U.j_oTag)
                  return this.jsxReadString(e);
              }
              return e === 60 &&
                this.state.canStartJSXElement &&
                this.input.charCodeAt(this.state.pos + 1) !== 33
                ? (++this.state.pos, this.finishToken(138))
                : super.getTokenFromCode(e);
            }
            updateContext(e) {
              let { context: s, type: r } = this.state;
              if (r === 56 && e === 138)
                s.splice(-2, 2, U.j_cTag), (this.state.canStartJSXElement = !1);
              else if (r === 138) s.push(U.j_oTag);
              else if (r === 139) {
                let i = s[s.length - 1];
                (i === U.j_oTag && e === 56) || i === U.j_cTag
                  ? (s.pop(),
                    (this.state.canStartJSXElement =
                      s[s.length - 1] === U.j_expr))
                  : (this.setContext(U.j_expr),
                    (this.state.canStartJSXElement = !0));
              } else this.state.canStartJSXElement = fo(r);
            }
          },
        Eh = class extends ns {
          constructor() {
            super(...arguments),
              (this.types = new Set()),
              (this.enums = new Set()),
              (this.constEnums = new Set()),
              (this.classes = new Set()),
              (this.exportOnlyBindings = new Set());
          }
        },
        bh = class extends os {
          createScope(t) {
            return new Eh(t);
          }
          declareName(t, e, s) {
            let r = this.currentScope();
            if (e & Qt) {
              this.maybeExportDefined(r, t), r.exportOnlyBindings.add(t);
              return;
            }
            super.declareName(...arguments),
              e & Ve &&
                (e & Pe ||
                  (this.checkRedeclarationInScope(r, t, e, s),
                  this.maybeExportDefined(r, t)),
                r.types.add(t)),
              e & Yt && r.enums.add(t),
              e & $t && r.constEnums.add(t),
              e & mt && r.classes.add(t);
          }
          isRedeclaredInScope(t, e, s) {
            if (t.enums.has(e)) {
              if (s & Yt) {
                let r = !!(s & $t),
                  i = t.constEnums.has(e);
                return r !== i;
              }
              return !0;
            }
            return s & mt && t.classes.has(e)
              ? t.lexical.has(e)
                ? !!(s & Pe)
                : !1
              : s & Ve && t.types.has(e)
              ? !0
              : super.isRedeclaredInScope(...arguments);
          }
          checkLocalExport(t) {
            let e = this.scopeStack[0],
              { name: s } = t;
            !e.types.has(s) &&
              !e.exportOnlyBindings.has(s) &&
              super.checkLocalExport(t);
          }
        },
        Ch = (t, e) => Object.hasOwnProperty.call(t, e) && t[e];
      function vh(t) {
        if (t == null) throw new Error("Unexpected ".concat(t, " value."));
        return t;
      }
      function Lr(t) {
        if (!t) throw new Error("Assert fail");
      }
      function Sh(t) {
        return Kt(t) || Eo(t);
      }
      var S = j(Un || (Un = ht(["typescript"])))((t) => ({
        AbstractMethodHasImplementation: t((e) => {
          let { methodName: s } = e;
          return "Method '".concat(
            s,
            "' cannot have an implementation because it is marked abstract."
          );
        }),
        AbstractPropertyHasInitializer: t((e) => {
          let { propertyName: s } = e;
          return "Property '".concat(
            s,
            "' cannot have an initializer because it is marked abstract."
          );
        }),
        AccesorCannotDeclareThisParameter: t(
          "'get' and 'set' accessors cannot declare 'this' parameters."
        ),
        AccesorCannotHaveTypeParameters: t(
          "An accessor cannot have type parameters."
        ),
        CannotFindName: t((e) => {
          let { name: s } = e;
          return "Cannot find name '".concat(s, "'.");
        }),
        ClassMethodHasDeclare: t(
          "Class methods cannot have the 'declare' modifier."
        ),
        ClassMethodHasReadonly: t(
          "Class methods cannot have the 'readonly' modifier."
        ),
        ConstInitiailizerMustBeStringOrNumericLiteralOrLiteralEnumReference: t(
          "A 'const' initializer in an ambient context must be a string or numeric literal or literal enum reference."
        ),
        ConstructorHasTypeParameters: t(
          "Type parameters cannot appear on a constructor declaration."
        ),
        DeclareAccessor: t((e) => {
          let { kind: s } = e;
          return "'declare' is not allowed in ".concat(s, "ters.");
        }),
        DeclareClassFieldHasInitializer: t(
          "Initializers are not allowed in ambient contexts."
        ),
        DeclareFunctionHasImplementation: t(
          "An implementation cannot be declared in ambient contexts."
        ),
        DuplicateAccessibilityModifier: t((e) => {
          let { modifier: s } = e;
          return "Accessibility modifier already seen.";
        }),
        DuplicateModifier: t((e) => {
          let { modifier: s } = e;
          return "Duplicate modifier: '".concat(s, "'.");
        }),
        EmptyHeritageClauseType: t((e) => {
          let { token: s } = e;
          return "'".concat(s, "' list cannot be empty.");
        }),
        EmptyTypeArguments: t("Type argument list cannot be empty."),
        EmptyTypeParameters: t("Type parameter list cannot be empty."),
        ExpectedAmbientAfterExportDeclare: t(
          "'export declare' must be followed by an ambient declaration."
        ),
        ImportAliasHasImportType: t(
          "An import alias can not use 'import type'."
        ),
        IncompatibleModifiers: t((e) => {
          let { modifiers: s } = e;
          return "'"
            .concat(s[0], "' modifier cannot be used with '")
            .concat(s[1], "' modifier.");
        }),
        IndexSignatureHasAbstract: t(
          "Index signatures cannot have the 'abstract' modifier."
        ),
        IndexSignatureHasAccessibility: t((e) => {
          let { modifier: s } = e;
          return "Index signatures cannot have an accessibility modifier ('".concat(
            s,
            "')."
          );
        }),
        IndexSignatureHasDeclare: t(
          "Index signatures cannot have the 'declare' modifier."
        ),
        IndexSignatureHasOverride: t(
          "'override' modifier cannot appear on an index signature."
        ),
        IndexSignatureHasStatic: t(
          "Index signatures cannot have the 'static' modifier."
        ),
        InitializerNotAllowedInAmbientContext: t(
          "Initializers are not allowed in ambient contexts."
        ),
        InvalidModifierOnTypeMember: t((e) => {
          let { modifier: s } = e;
          return "'".concat(s, "' modifier cannot appear on a type member.");
        }),
        InvalidModifierOnTypeParameter: t((e) => {
          let { modifier: s } = e;
          return "'".concat(s, "' modifier cannot appear on a type parameter.");
        }),
        InvalidModifierOnTypeParameterPositions: t((e) => {
          let { modifier: s } = e;
          return "'".concat(
            s,
            "' modifier can only appear on a type parameter of a class, interface or type alias."
          );
        }),
        InvalidModifiersOrder: t((e) => {
          let { orderedModifiers: s } = e;
          return "'"
            .concat(s[0], "' modifier must precede '")
            .concat(s[1], "' modifier.");
        }),
        InvalidTupleMemberLabel: t(
          "Tuple members must be labeled with a simple identifier."
        ),
        MissingInterfaceName: t(
          "'interface' declarations must be followed by an identifier."
        ),
        MixedLabeledAndUnlabeledElements: t(
          "Tuple members must all have names or all not have names."
        ),
        NonAbstractClassHasAbstractMethod: t(
          "Abstract methods can only appear within an abstract class."
        ),
        NonClassMethodPropertyHasAbstractModifer: t(
          "'abstract' modifier can only appear on a class, method, or property declaration."
        ),
        OptionalTypeBeforeRequired: t(
          "A required element cannot follow an optional element."
        ),
        OverrideNotInSubClass: t(
          "This member cannot have an 'override' modifier because its containing class does not extend another class."
        ),
        PatternIsOptional: t(
          "A binding pattern parameter cannot be optional in an implementation signature."
        ),
        PrivateElementHasAbstract: t(
          "Private elements cannot have the 'abstract' modifier."
        ),
        PrivateElementHasAccessibility: t((e) => {
          let { modifier: s } = e;
          return "Private elements cannot have an accessibility modifier ('".concat(
            s,
            "')."
          );
        }),
        ReadonlyForMethodSignature: t(
          "'readonly' modifier can only appear on a property declaration or index signature."
        ),
        ReservedArrowTypeParam: t(
          "This syntax is reserved in files with the .mts or .cts extension. Add a trailing comma, as in `<T,>() => ...`."
        ),
        ReservedTypeAssertion: t(
          "This syntax is reserved in files with the .mts or .cts extension. Use an `as` expression instead."
        ),
        SetAccesorCannotHaveOptionalParameter: t(
          "A 'set' accessor cannot have an optional parameter."
        ),
        SetAccesorCannotHaveRestParameter: t(
          "A 'set' accessor cannot have rest parameter."
        ),
        SetAccesorCannotHaveReturnType: t(
          "A 'set' accessor cannot have a return type annotation."
        ),
        SingleTypeParameterWithoutTrailingComma: t((e) => {
          let { typeParameterName: s } = e;
          return "Single type parameter "
            .concat(s, " should have a trailing comma. Example usage: <")
            .concat(s, ",>.");
        }),
        StaticBlockCannotHaveModifier: t(
          "Static class blocks cannot have any modifier."
        ),
        TypeAnnotationAfterAssign: t(
          "Type annotations must come before default assignments, e.g. instead of `age = 25: number` use `age: number = 25`."
        ),
        TypeImportCannotSpecifyDefaultAndNamed: t(
          "A type-only import can specify a default import or named bindings, but not both."
        ),
        TypeModifierIsUsedInTypeExports: t(
          "The 'type' modifier cannot be used on a named export when 'export type' is used on its export statement."
        ),
        TypeModifierIsUsedInTypeImports: t(
          "The 'type' modifier cannot be used on a named import when 'import type' is used on its import statement."
        ),
        UnexpectedParameterModifier: t(
          "A parameter property is only allowed in a constructor implementation."
        ),
        UnexpectedReadonly: t(
          "'readonly' type modifier is only permitted on array and tuple literal types."
        ),
        UnexpectedTypeAnnotation: t("Did not expect a type annotation here."),
        UnexpectedTypeCastInParameter: t(
          "Unexpected type cast in parameter position."
        ),
        UnsupportedImportTypeArgument: t(
          "Argument in a type import must be a string literal."
        ),
        UnsupportedParameterPropertyKind: t(
          "A parameter property may not be declared using a binding pattern."
        ),
        UnsupportedSignatureParameterKind: t((e) => {
          let { type: s } = e;
          return "Name in a signature must be an Identifier, ObjectPattern or ArrayPattern, instead got ".concat(
            s,
            "."
          );
        }),
      }));
      function wh(t) {
        switch (t) {
          case "any":
            return "TSAnyKeyword";
          case "boolean":
            return "TSBooleanKeyword";
          case "bigint":
            return "TSBigIntKeyword";
          case "never":
            return "TSNeverKeyword";
          case "number":
            return "TSNumberKeyword";
          case "object":
            return "TSObjectKeyword";
          case "string":
            return "TSStringKeyword";
          case "symbol":
            return "TSSymbolKeyword";
          case "undefined":
            return "TSUndefinedKeyword";
          case "unknown":
            return "TSUnknownKeyword";
          default:
            return;
        }
      }
      function Or(t) {
        return t === "private" || t === "public" || t === "protected";
      }
      function Nh(t) {
        return t === "in" || t === "out";
      }
      var Ih = (t) =>
        class extends t {
          getScopeHandler() {
            return bh;
          }
          tsIsIdentifier() {
            return K(this.state.type);
          }
          tsTokenCanFollowModifier() {
            return (
              (this.match(0) ||
                this.match(5) ||
                this.match(55) ||
                this.match(21) ||
                this.match(134) ||
                this.isLiteralPropertyName()) &&
              !this.hasPrecedingLineBreak()
            );
          }
          tsNextTokenCanFollowModifier() {
            return this.next(), this.tsTokenCanFollowModifier();
          }
          tsParseModifier(e, s) {
            if (!K(this.state.type) && this.state.type !== 58) return;
            let r = this.state.value;
            if (e.indexOf(r) !== -1) {
              if (s && this.tsIsStartOfStaticBlocks()) return;
              if (this.tsTryParse(this.tsNextTokenCanFollowModifier.bind(this)))
                return r;
            }
          }
          tsParseModifiers(e) {
            let {
                modified: s,
                allowedModifiers: r,
                disallowedModifiers: i,
                stopOnStartOfClassStaticBlock: a,
                errorTemplate: n = S.InvalidModifierOnTypeMember,
              } = e,
              o = (f, y, T, v) => {
                y === T &&
                  s[v] &&
                  this.raise(S.InvalidModifiersOrder, {
                    at: f,
                    orderedModifiers: [T, v],
                  });
              },
              c = (f, y, T, v) => {
                ((s[T] && y === v) || (s[v] && y === T)) &&
                  this.raise(S.IncompatibleModifiers, {
                    at: f,
                    modifiers: [T, v],
                  });
              };
            for (;;) {
              let { startLoc: f } = this.state,
                y = this.tsParseModifier(r.concat(i != null ? i : []), a);
              if (!y) break;
              Or(y)
                ? s.accessibility
                  ? this.raise(S.DuplicateAccessibilityModifier, {
                      at: f,
                      modifier: y,
                    })
                  : (o(f, y, y, "override"),
                    o(f, y, y, "static"),
                    o(f, y, y, "readonly"),
                    (s.accessibility = y))
                : Nh(y)
                ? (s[y] &&
                    this.raise(S.DuplicateModifier, { at: f, modifier: y }),
                  (s[y] = !0),
                  o(f, y, "in", "out"))
                : (Object.hasOwnProperty.call(s, y)
                    ? this.raise(S.DuplicateModifier, { at: f, modifier: y })
                    : (o(f, y, "static", "readonly"),
                      o(f, y, "static", "override"),
                      o(f, y, "override", "readonly"),
                      o(f, y, "abstract", "override"),
                      c(f, y, "declare", "override"),
                      c(f, y, "static", "abstract")),
                  (s[y] = !0)),
                i != null &&
                  i.includes(y) &&
                  this.raise(n, { at: f, modifier: y });
            }
          }
          tsIsListTerminator(e) {
            switch (e) {
              case "EnumMembers":
              case "TypeMembers":
                return this.match(8);
              case "HeritageClauseElement":
                return this.match(5);
              case "TupleElementTypes":
                return this.match(3);
              case "TypeParametersOrArguments":
                return this.match(48);
            }
            throw new Error("Unreachable");
          }
          tsParseList(e, s) {
            let r = [];
            for (; !this.tsIsListTerminator(e); ) r.push(s());
            return r;
          }
          tsParseDelimitedList(e, s, r) {
            return vh(this.tsParseDelimitedListWorker(e, s, !0, r));
          }
          tsParseDelimitedListWorker(e, s, r, i) {
            let a = [],
              n = -1;
            for (; !this.tsIsListTerminator(e); ) {
              n = -1;
              let o = s();
              if (o == null) return;
              if ((a.push(o), this.eat(12))) {
                n = this.state.lastTokStart;
                continue;
              }
              if (this.tsIsListTerminator(e)) break;
              r && this.expect(12);
              return;
            }
            return i && (i.value = n), a;
          }
          tsParseBracketedList(e, s, r, i, a) {
            i || (r ? this.expect(0) : this.expect(47));
            let n = this.tsParseDelimitedList(e, s, a);
            return r ? this.expect(3) : this.expect(48), n;
          }
          tsParseImportType() {
            let e = this.startNode();
            return (
              this.expect(83),
              this.expect(10),
              this.match(129) ||
                this.raise(S.UnsupportedImportTypeArgument, {
                  at: this.state.startLoc,
                }),
              (e.argument = this.parseExprAtom()),
              this.expect(11),
              this.eat(16) && (e.qualifier = this.tsParseEntityName()),
              this.match(47) &&
                (e.typeParameters = this.tsParseTypeArguments()),
              this.finishNode(e, "TSImportType")
            );
          }
          tsParseEntityName() {
            let e =
                arguments.length > 0 && arguments[0] !== void 0
                  ? arguments[0]
                  : !0,
              s = this.parseIdentifier(e);
            for (; this.eat(16); ) {
              let r = this.startNodeAtNode(s);
              (r.left = s),
                (r.right = this.parseIdentifier(e)),
                (s = this.finishNode(r, "TSQualifiedName"));
            }
            return s;
          }
          tsParseTypeReference() {
            let e = this.startNode();
            return (
              (e.typeName = this.tsParseEntityName()),
              !this.hasPrecedingLineBreak() &&
                this.match(47) &&
                (e.typeParameters = this.tsParseTypeArguments()),
              this.finishNode(e, "TSTypeReference")
            );
          }
          tsParseThisTypePredicate(e) {
            this.next();
            let s = this.startNodeAtNode(e);
            return (
              (s.parameterName = e),
              (s.typeAnnotation = this.tsParseTypeAnnotation(!1)),
              (s.asserts = !1),
              this.finishNode(s, "TSTypePredicate")
            );
          }
          tsParseThisTypeNode() {
            let e = this.startNode();
            return this.next(), this.finishNode(e, "TSThisType");
          }
          tsParseTypeQuery() {
            let e = this.startNode();
            return (
              this.expect(87),
              this.match(83)
                ? (e.exprName = this.tsParseImportType())
                : (e.exprName = this.tsParseEntityName()),
              !this.hasPrecedingLineBreak() &&
                this.match(47) &&
                (e.typeParameters = this.tsParseTypeArguments()),
              this.finishNode(e, "TSTypeQuery")
            );
          }
          tsParseInOutModifiers(e) {
            this.tsParseModifiers({
              modified: e,
              allowedModifiers: ["in", "out"],
              disallowedModifiers: [
                "public",
                "private",
                "protected",
                "readonly",
                "declare",
                "abstract",
                "override",
              ],
              errorTemplate: S.InvalidModifierOnTypeParameter,
            });
          }
          tsParseNoneModifiers(e) {
            this.tsParseModifiers({
              modified: e,
              allowedModifiers: [],
              disallowedModifiers: ["in", "out"],
              errorTemplate: S.InvalidModifierOnTypeParameterPositions,
            });
          }
          tsParseTypeParameter() {
            let e =
                arguments.length > 0 && arguments[0] !== void 0
                  ? arguments[0]
                  : this.tsParseNoneModifiers.bind(this),
              s = this.startNode();
            return (
              e(s),
              (s.name = this.tsParseTypeParameterName()),
              (s.constraint = this.tsEatThenParseType(81)),
              (s.default = this.tsEatThenParseType(29)),
              this.finishNode(s, "TSTypeParameter")
            );
          }
          tsTryParseTypeParameters(e) {
            if (this.match(47)) return this.tsParseTypeParameters(e);
          }
          tsParseTypeParameters(e) {
            let s = this.startNode();
            this.match(47) || this.match(138) ? this.next() : this.unexpected();
            let r = { value: -1 };
            return (
              (s.params = this.tsParseBracketedList(
                "TypeParametersOrArguments",
                this.tsParseTypeParameter.bind(this, e),
                !1,
                !0,
                r
              )),
              s.params.length === 0 &&
                this.raise(S.EmptyTypeParameters, { at: s }),
              r.value !== -1 && this.addExtra(s, "trailingComma", r.value),
              this.finishNode(s, "TSTypeParameterDeclaration")
            );
          }
          tsTryNextParseConstantContext() {
            if (this.lookahead().type !== 75) return null;
            this.next();
            let e = this.tsParseTypeReference();
            return (
              e.typeParameters &&
                this.raise(S.CannotFindName, { at: e.typeName, name: "const" }),
              e
            );
          }
          tsFillSignature(e, s) {
            let r = e === 19,
              i = "parameters",
              a = "typeAnnotation";
            (s.typeParameters = this.tsTryParseTypeParameters()),
              this.expect(10),
              (s[i] = this.tsParseBindingListForSignature()),
              r
                ? (s[a] = this.tsParseTypeOrTypePredicateAnnotation(e))
                : this.match(e) &&
                  (s[a] = this.tsParseTypeOrTypePredicateAnnotation(e));
          }
          tsParseBindingListForSignature() {
            return this.parseBindingList(11, 41).map(
              (e) => (
                e.type !== "Identifier" &&
                  e.type !== "RestElement" &&
                  e.type !== "ObjectPattern" &&
                  e.type !== "ArrayPattern" &&
                  this.raise(S.UnsupportedSignatureParameterKind, {
                    at: e,
                    type: e.type,
                  }),
                e
              )
            );
          }
          tsParseTypeMemberSemicolon() {
            !this.eat(12) && !this.isLineTerminator() && this.expect(13);
          }
          tsParseSignatureMember(e, s) {
            return (
              this.tsFillSignature(14, s),
              this.tsParseTypeMemberSemicolon(),
              this.finishNode(s, e)
            );
          }
          tsIsUnambiguouslyIndexSignature() {
            return (
              this.next(),
              K(this.state.type) ? (this.next(), this.match(14)) : !1
            );
          }
          tsTryParseIndexSignature(e) {
            if (
              !(
                this.match(0) &&
                this.tsLookAhead(
                  this.tsIsUnambiguouslyIndexSignature.bind(this)
                )
              )
            )
              return;
            this.expect(0);
            let s = this.parseIdentifier();
            (s.typeAnnotation = this.tsParseTypeAnnotation()),
              this.resetEndLocation(s),
              this.expect(3),
              (e.parameters = [s]);
            let r = this.tsTryParseTypeAnnotation();
            return (
              r && (e.typeAnnotation = r),
              this.tsParseTypeMemberSemicolon(),
              this.finishNode(e, "TSIndexSignature")
            );
          }
          tsParsePropertyOrMethodSignature(e, s) {
            this.eat(17) && (e.optional = !0);
            let r = e;
            if (this.match(10) || this.match(47)) {
              s && this.raise(S.ReadonlyForMethodSignature, { at: e });
              let i = r;
              i.kind &&
                this.match(47) &&
                this.raise(S.AccesorCannotHaveTypeParameters, {
                  at: this.state.curPosition(),
                }),
                this.tsFillSignature(14, i),
                this.tsParseTypeMemberSemicolon();
              let a = "parameters",
                n = "typeAnnotation";
              if (i.kind === "get")
                i[a].length > 0 &&
                  (this.raise(l.BadGetterArity, {
                    at: this.state.curPosition(),
                  }),
                  this.isThisParam(i[a][0]) &&
                    this.raise(S.AccesorCannotDeclareThisParameter, {
                      at: this.state.curPosition(),
                    }));
              else if (i.kind === "set") {
                if (i[a].length !== 1)
                  this.raise(l.BadSetterArity, {
                    at: this.state.curPosition(),
                  });
                else {
                  let o = i[a][0];
                  this.isThisParam(o) &&
                    this.raise(S.AccesorCannotDeclareThisParameter, {
                      at: this.state.curPosition(),
                    }),
                    o.type === "Identifier" &&
                      o.optional &&
                      this.raise(S.SetAccesorCannotHaveOptionalParameter, {
                        at: this.state.curPosition(),
                      }),
                    o.type === "RestElement" &&
                      this.raise(S.SetAccesorCannotHaveRestParameter, {
                        at: this.state.curPosition(),
                      });
                }
                i[n] &&
                  this.raise(S.SetAccesorCannotHaveReturnType, { at: i[n] });
              } else i.kind = "method";
              return this.finishNode(i, "TSMethodSignature");
            } else {
              let i = r;
              s && (i.readonly = !0);
              let a = this.tsTryParseTypeAnnotation();
              return (
                a && (i.typeAnnotation = a),
                this.tsParseTypeMemberSemicolon(),
                this.finishNode(i, "TSPropertySignature")
              );
            }
          }
          tsParseTypeMember() {
            let e = this.startNode();
            if (this.match(10) || this.match(47))
              return this.tsParseSignatureMember(
                "TSCallSignatureDeclaration",
                e
              );
            if (this.match(77)) {
              let r = this.startNode();
              return (
                this.next(),
                this.match(10) || this.match(47)
                  ? this.tsParseSignatureMember(
                      "TSConstructSignatureDeclaration",
                      e
                    )
                  : ((e.key = this.createIdentifier(r, "new")),
                    this.tsParsePropertyOrMethodSignature(e, !1))
              );
            }
            this.tsParseModifiers({
              modified: e,
              allowedModifiers: ["readonly"],
              disallowedModifiers: [
                "declare",
                "abstract",
                "private",
                "protected",
                "public",
                "static",
                "override",
              ],
            });
            let s = this.tsTryParseIndexSignature(e);
            return (
              s ||
              (this.parsePropertyName(e),
              !e.computed &&
                e.key.type === "Identifier" &&
                (e.key.name === "get" || e.key.name === "set") &&
                this.tsTokenCanFollowModifier() &&
                ((e.kind = e.key.name), this.parsePropertyName(e)),
              this.tsParsePropertyOrMethodSignature(e, !!e.readonly))
            );
          }
          tsParseTypeLiteral() {
            let e = this.startNode();
            return (
              (e.members = this.tsParseObjectTypeMembers()),
              this.finishNode(e, "TSTypeLiteral")
            );
          }
          tsParseObjectTypeMembers() {
            this.expect(5);
            let e = this.tsParseList(
              "TypeMembers",
              this.tsParseTypeMember.bind(this)
            );
            return this.expect(8), e;
          }
          tsIsStartOfMappedType() {
            return (
              this.next(),
              this.eat(53)
                ? this.isContextual(118)
                : (this.isContextual(118) && this.next(),
                  !this.match(0) || (this.next(), !this.tsIsIdentifier())
                    ? !1
                    : (this.next(), this.match(58)))
            );
          }
          tsParseMappedTypeParameter() {
            let e = this.startNode();
            return (
              (e.name = this.tsParseTypeParameterName()),
              (e.constraint = this.tsExpectThenParseType(58)),
              this.finishNode(e, "TSTypeParameter")
            );
          }
          tsParseMappedType() {
            let e = this.startNode();
            return (
              this.expect(5),
              this.match(53)
                ? ((e.readonly = this.state.value),
                  this.next(),
                  this.expectContextual(118))
                : this.eatContextual(118) && (e.readonly = !0),
              this.expect(0),
              (e.typeParameter = this.tsParseMappedTypeParameter()),
              (e.nameType = this.eatContextual(93) ? this.tsParseType() : null),
              this.expect(3),
              this.match(53)
                ? ((e.optional = this.state.value),
                  this.next(),
                  this.expect(17))
                : this.eat(17) && (e.optional = !0),
              (e.typeAnnotation = this.tsTryParseType()),
              this.semicolon(),
              this.expect(8),
              this.finishNode(e, "TSMappedType")
            );
          }
          tsParseTupleType() {
            let e = this.startNode();
            e.elementTypes = this.tsParseBracketedList(
              "TupleElementTypes",
              this.tsParseTupleElementType.bind(this),
              !0,
              !1
            );
            let s = !1,
              r = null;
            return (
              e.elementTypes.forEach((i) => {
                var a;
                let { type: n } = i;
                s &&
                  n !== "TSRestType" &&
                  n !== "TSOptionalType" &&
                  !(n === "TSNamedTupleMember" && i.optional) &&
                  this.raise(S.OptionalTypeBeforeRequired, { at: i }),
                  (s =
                    s ||
                    (n === "TSNamedTupleMember" && i.optional) ||
                    n === "TSOptionalType"),
                  n === "TSRestType" && ((i = i.typeAnnotation), (n = i.type));
                let o = n === "TSNamedTupleMember";
                (r = (a = r) != null ? a : o),
                  r !== o &&
                    this.raise(S.MixedLabeledAndUnlabeledElements, { at: i });
              }),
              this.finishNode(e, "TSTupleType")
            );
          }
          tsParseTupleElementType() {
            let { start: e, startLoc: s } = this.state,
              r = this.eat(21),
              i = this.tsParseType(),
              a = this.eat(17);
            if (this.eat(14)) {
              let o = this.startNodeAtNode(i);
              (o.optional = a),
                i.type === "TSTypeReference" &&
                !i.typeParameters &&
                i.typeName.type === "Identifier"
                  ? (o.label = i.typeName)
                  : (this.raise(S.InvalidTupleMemberLabel, { at: i }),
                    (o.label = i)),
                (o.elementType = this.tsParseType()),
                (i = this.finishNode(o, "TSNamedTupleMember"));
            } else if (a) {
              let o = this.startNodeAtNode(i);
              (o.typeAnnotation = i),
                (i = this.finishNode(o, "TSOptionalType"));
            }
            if (r) {
              let o = this.startNodeAt(e, s);
              (o.typeAnnotation = i), (i = this.finishNode(o, "TSRestType"));
            }
            return i;
          }
          tsParseParenthesizedType() {
            let e = this.startNode();
            return (
              this.expect(10),
              (e.typeAnnotation = this.tsParseType()),
              this.expect(11),
              this.finishNode(e, "TSParenthesizedType")
            );
          }
          tsParseFunctionOrConstructorType(e, s) {
            let r = this.startNode();
            return (
              e === "TSConstructorType" &&
                ((r.abstract = !!s), s && this.next(), this.next()),
              this.tsFillSignature(19, r),
              this.finishNode(r, e)
            );
          }
          tsParseLiteralTypeNode() {
            let e = this.startNode();
            return (
              (e.literal = (() => {
                switch (this.state.type) {
                  case 130:
                  case 131:
                  case 129:
                  case 85:
                  case 86:
                    return this.parseExprAtom();
                  default:
                    throw this.unexpected();
                }
              })()),
              this.finishNode(e, "TSLiteralType")
            );
          }
          tsParseTemplateLiteralType() {
            let e = this.startNode();
            return (
              (e.literal = this.parseTemplate(!1)),
              this.finishNode(e, "TSLiteralType")
            );
          }
          parseTemplateSubstitution() {
            return this.state.inType
              ? this.tsParseType()
              : super.parseTemplateSubstitution();
          }
          tsParseThisTypeOrThisTypePredicate() {
            let e = this.tsParseThisTypeNode();
            return this.isContextual(113) && !this.hasPrecedingLineBreak()
              ? this.tsParseThisTypePredicate(e)
              : e;
          }
          tsParseNonArrayType() {
            switch (this.state.type) {
              case 129:
              case 130:
              case 131:
              case 85:
              case 86:
                return this.tsParseLiteralTypeNode();
              case 53:
                if (this.state.value === "-") {
                  let e = this.startNode(),
                    s = this.lookahead();
                  if (s.type !== 130 && s.type !== 131) throw this.unexpected();
                  return (
                    (e.literal = this.parseMaybeUnary()),
                    this.finishNode(e, "TSLiteralType")
                  );
                }
                break;
              case 78:
                return this.tsParseThisTypeOrThisTypePredicate();
              case 87:
                return this.tsParseTypeQuery();
              case 83:
                return this.tsParseImportType();
              case 5:
                return this.tsLookAhead(this.tsIsStartOfMappedType.bind(this))
                  ? this.tsParseMappedType()
                  : this.tsParseTypeLiteral();
              case 0:
                return this.tsParseTupleType();
              case 10:
                return this.tsParseParenthesizedType();
              case 25:
              case 24:
                return this.tsParseTemplateLiteralType();
              default: {
                let { type: e } = this.state;
                if (K(e) || e === 88 || e === 84) {
                  let s =
                    e === 88
                      ? "TSVoidKeyword"
                      : e === 84
                      ? "TSNullKeyword"
                      : wh(this.state.value);
                  if (s !== void 0 && this.lookaheadCharCode() !== 46) {
                    let r = this.startNode();
                    return this.next(), this.finishNode(r, s);
                  }
                  return this.tsParseTypeReference();
                }
              }
            }
            throw this.unexpected();
          }
          tsParseArrayTypeOrHigher() {
            let e = this.tsParseNonArrayType();
            for (; !this.hasPrecedingLineBreak() && this.eat(0); )
              if (this.match(3)) {
                let s = this.startNodeAtNode(e);
                (s.elementType = e),
                  this.expect(3),
                  (e = this.finishNode(s, "TSArrayType"));
              } else {
                let s = this.startNodeAtNode(e);
                (s.objectType = e),
                  (s.indexType = this.tsParseType()),
                  this.expect(3),
                  (e = this.finishNode(s, "TSIndexedAccessType"));
              }
            return e;
          }
          tsParseTypeOperator() {
            let e = this.startNode(),
              s = this.state.value;
            return (
              this.next(),
              (e.operator = s),
              (e.typeAnnotation = this.tsParseTypeOperatorOrHigher()),
              s === "readonly" && this.tsCheckTypeAnnotationForReadOnly(e),
              this.finishNode(e, "TSTypeOperator")
            );
          }
          tsCheckTypeAnnotationForReadOnly(e) {
            switch (e.typeAnnotation.type) {
              case "TSTupleType":
              case "TSArrayType":
                return;
              default:
                this.raise(S.UnexpectedReadonly, { at: e });
            }
          }
          tsParseInferType() {
            let e = this.startNode();
            this.expectContextual(112);
            let s = this.startNode();
            return (
              (s.name = this.tsParseTypeParameterName()),
              (s.constraint = this.tsTryParse(() =>
                this.tsParseConstraintForInferType()
              )),
              (e.typeParameter = this.finishNode(s, "TSTypeParameter")),
              this.finishNode(e, "TSInferType")
            );
          }
          tsParseConstraintForInferType() {
            if (this.eat(81)) {
              let e = this.tsInDisallowConditionalTypesContext(() =>
                this.tsParseType()
              );
              if (
                this.state.inDisallowConditionalTypesContext ||
                !this.match(17)
              )
                return e;
            }
          }
          tsParseTypeOperatorOrHigher() {
            return Po(this.state.type) && !this.state.containsEsc
              ? this.tsParseTypeOperator()
              : this.isContextual(112)
              ? this.tsParseInferType()
              : this.tsInAllowConditionalTypesContext(() =>
                  this.tsParseArrayTypeOrHigher()
                );
          }
          tsParseUnionOrIntersectionType(e, s, r) {
            let i = this.startNode(),
              a = this.eat(r),
              n = [];
            do n.push(s());
            while (this.eat(r));
            return n.length === 1 && !a
              ? n[0]
              : ((i.types = n), this.finishNode(i, e));
          }
          tsParseIntersectionTypeOrHigher() {
            return this.tsParseUnionOrIntersectionType(
              "TSIntersectionType",
              this.tsParseTypeOperatorOrHigher.bind(this),
              45
            );
          }
          tsParseUnionTypeOrHigher() {
            return this.tsParseUnionOrIntersectionType(
              "TSUnionType",
              this.tsParseIntersectionTypeOrHigher.bind(this),
              43
            );
          }
          tsIsStartOfFunctionType() {
            return this.match(47)
              ? !0
              : this.match(10) &&
                  this.tsLookAhead(
                    this.tsIsUnambiguouslyStartOfFunctionType.bind(this)
                  );
          }
          tsSkipParameterStart() {
            if (K(this.state.type) || this.match(78)) return this.next(), !0;
            if (this.match(5)) {
              let { errors: e } = this.state,
                s = e.length;
              try {
                return this.parseObjectLike(8, !0), e.length === s;
              } catch {
                return !1;
              }
            }
            if (this.match(0)) {
              this.next();
              let { errors: e } = this.state,
                s = e.length;
              try {
                return this.parseBindingList(3, 93, !0), e.length === s;
              } catch {
                return !1;
              }
            }
            return !1;
          }
          tsIsUnambiguouslyStartOfFunctionType() {
            return (
              this.next(),
              !!(
                this.match(11) ||
                this.match(21) ||
                (this.tsSkipParameterStart() &&
                  (this.match(14) ||
                    this.match(12) ||
                    this.match(17) ||
                    this.match(29) ||
                    (this.match(11) && (this.next(), this.match(19)))))
              )
            );
          }
          tsParseTypeOrTypePredicateAnnotation(e) {
            return this.tsInType(() => {
              let s = this.startNode();
              this.expect(e);
              let r = this.startNode(),
                i = !!this.tsTryParse(
                  this.tsParseTypePredicateAsserts.bind(this)
                );
              if (i && this.match(78)) {
                let o = this.tsParseThisTypeOrThisTypePredicate();
                return (
                  o.type === "TSThisType"
                    ? ((r.parameterName = o),
                      (r.asserts = !0),
                      (r.typeAnnotation = null),
                      (o = this.finishNode(r, "TSTypePredicate")))
                    : (this.resetStartLocationFromNode(o, r), (o.asserts = !0)),
                  (s.typeAnnotation = o),
                  this.finishNode(s, "TSTypeAnnotation")
                );
              }
              let a =
                this.tsIsIdentifier() &&
                this.tsTryParse(this.tsParseTypePredicatePrefix.bind(this));
              if (!a)
                return i
                  ? ((r.parameterName = this.parseIdentifier()),
                    (r.asserts = i),
                    (r.typeAnnotation = null),
                    (s.typeAnnotation = this.finishNode(r, "TSTypePredicate")),
                    this.finishNode(s, "TSTypeAnnotation"))
                  : this.tsParseTypeAnnotation(!1, s);
              let n = this.tsParseTypeAnnotation(!1);
              return (
                (r.parameterName = a),
                (r.typeAnnotation = n),
                (r.asserts = i),
                (s.typeAnnotation = this.finishNode(r, "TSTypePredicate")),
                this.finishNode(s, "TSTypeAnnotation")
              );
            });
          }
          tsTryParseTypeOrTypePredicateAnnotation() {
            return this.match(14)
              ? this.tsParseTypeOrTypePredicateAnnotation(14)
              : void 0;
          }
          tsTryParseTypeAnnotation() {
            return this.match(14) ? this.tsParseTypeAnnotation() : void 0;
          }
          tsTryParseType() {
            return this.tsEatThenParseType(14);
          }
          tsParseTypePredicatePrefix() {
            let e = this.parseIdentifier();
            if (this.isContextual(113) && !this.hasPrecedingLineBreak())
              return this.next(), e;
          }
          tsParseTypePredicateAsserts() {
            if (this.state.type !== 106) return !1;
            let e = this.state.containsEsc;
            return (
              this.next(),
              !K(this.state.type) && !this.match(78)
                ? !1
                : (e &&
                    this.raise(l.InvalidEscapedReservedWord, {
                      at: this.state.lastTokStartLoc,
                      reservedWord: "asserts",
                    }),
                  !0)
            );
          }
          tsParseTypeAnnotation() {
            let e =
                arguments.length > 0 && arguments[0] !== void 0
                  ? arguments[0]
                  : !0,
              s =
                arguments.length > 1 && arguments[1] !== void 0
                  ? arguments[1]
                  : this.startNode();
            return (
              this.tsInType(() => {
                e && this.expect(14), (s.typeAnnotation = this.tsParseType());
              }),
              this.finishNode(s, "TSTypeAnnotation")
            );
          }
          tsParseType() {
            Lr(this.state.inType);
            let e = this.tsParseNonConditionalType();
            if (
              this.state.inDisallowConditionalTypesContext ||
              this.hasPrecedingLineBreak() ||
              !this.eat(81)
            )
              return e;
            let s = this.startNodeAtNode(e);
            return (
              (s.checkType = e),
              (s.extendsType = this.tsInDisallowConditionalTypesContext(() =>
                this.tsParseNonConditionalType()
              )),
              this.expect(17),
              (s.trueType = this.tsInAllowConditionalTypesContext(() =>
                this.tsParseType()
              )),
              this.expect(14),
              (s.falseType = this.tsInAllowConditionalTypesContext(() =>
                this.tsParseType()
              )),
              this.finishNode(s, "TSConditionalType")
            );
          }
          isAbstractConstructorSignature() {
            return this.isContextual(120) && this.lookahead().type === 77;
          }
          tsParseNonConditionalType() {
            return this.tsIsStartOfFunctionType()
              ? this.tsParseFunctionOrConstructorType("TSFunctionType")
              : this.match(77)
              ? this.tsParseFunctionOrConstructorType("TSConstructorType")
              : this.isAbstractConstructorSignature()
              ? this.tsParseFunctionOrConstructorType("TSConstructorType", !0)
              : this.tsParseUnionTypeOrHigher();
          }
          tsParseTypeAssertion() {
            this.getPluginOption("typescript", "disallowAmbiguousJSXLike") &&
              this.raise(S.ReservedTypeAssertion, { at: this.state.startLoc });
            let e = this.startNode(),
              s = this.tsTryNextParseConstantContext();
            return (
              (e.typeAnnotation = s || this.tsNextThenParseType()),
              this.expect(48),
              (e.expression = this.parseMaybeUnary()),
              this.finishNode(e, "TSTypeAssertion")
            );
          }
          tsParseHeritageClause(e) {
            let s = this.state.startLoc,
              r = this.tsParseDelimitedList("HeritageClauseElement", () => {
                let i = this.startNode();
                return (
                  (i.expression = this.tsParseEntityName()),
                  this.match(47) &&
                    (i.typeParameters = this.tsParseTypeArguments()),
                  this.finishNode(i, "TSExpressionWithTypeArguments")
                );
              });
            return (
              r.length ||
                this.raise(S.EmptyHeritageClauseType, { at: s, token: e }),
              r
            );
          }
          tsParseInterfaceDeclaration(e) {
            let s =
              arguments.length > 1 && arguments[1] !== void 0
                ? arguments[1]
                : {};
            if (this.hasFollowingLineBreak()) return null;
            this.expectContextual(125),
              s.declare && (e.declare = !0),
              K(this.state.type)
                ? ((e.id = this.parseIdentifier()),
                  this.checkIdentifier(e.id, Oo))
                : ((e.id = null),
                  this.raise(S.MissingInterfaceName, {
                    at: this.state.startLoc,
                  })),
              (e.typeParameters = this.tsTryParseTypeParameters(
                this.tsParseInOutModifiers.bind(this)
              )),
              this.eat(81) &&
                (e.extends = this.tsParseHeritageClause("extends"));
            let r = this.startNode();
            return (
              (r.body = this.tsInType(
                this.tsParseObjectTypeMembers.bind(this)
              )),
              (e.body = this.finishNode(r, "TSInterfaceBody")),
              this.finishNode(e, "TSInterfaceDeclaration")
            );
          }
          tsParseTypeAliasDeclaration(e) {
            return (
              (e.id = this.parseIdentifier()),
              this.checkIdentifier(e.id, Bo),
              (e.typeAnnotation = this.tsInType(() => {
                if (
                  ((e.typeParameters = this.tsTryParseTypeParameters(
                    this.tsParseInOutModifiers.bind(this)
                  )),
                  this.expect(29),
                  this.isContextual(111) && this.lookahead().type !== 16)
                ) {
                  let s = this.startNode();
                  return this.next(), this.finishNode(s, "TSIntrinsicKeyword");
                }
                return this.tsParseType();
              })),
              this.semicolon(),
              this.finishNode(e, "TSTypeAliasDeclaration")
            );
          }
          tsInNoContext(e) {
            let s = this.state.context;
            this.state.context = [s[0]];
            try {
              return e();
            } finally {
              this.state.context = s;
            }
          }
          tsInType(e) {
            let s = this.state.inType;
            this.state.inType = !0;
            try {
              return e();
            } finally {
              this.state.inType = s;
            }
          }
          tsInDisallowConditionalTypesContext(e) {
            let s = this.state.inDisallowConditionalTypesContext;
            this.state.inDisallowConditionalTypesContext = !0;
            try {
              return e();
            } finally {
              this.state.inDisallowConditionalTypesContext = s;
            }
          }
          tsInAllowConditionalTypesContext(e) {
            let s = this.state.inDisallowConditionalTypesContext;
            this.state.inDisallowConditionalTypesContext = !1;
            try {
              return e();
            } finally {
              this.state.inDisallowConditionalTypesContext = s;
            }
          }
          tsEatThenParseType(e) {
            return this.match(e) ? this.tsNextThenParseType() : void 0;
          }
          tsExpectThenParseType(e) {
            return this.tsDoThenParseType(() => this.expect(e));
          }
          tsNextThenParseType() {
            return this.tsDoThenParseType(() => this.next());
          }
          tsDoThenParseType(e) {
            return this.tsInType(() => (e(), this.tsParseType()));
          }
          tsParseEnumMember() {
            let e = this.startNode();
            return (
              (e.id = this.match(129)
                ? this.parseExprAtom()
                : this.parseIdentifier(!0)),
              this.eat(29) && (e.initializer = this.parseMaybeAssignAllowIn()),
              this.finishNode(e, "TSEnumMember")
            );
          }
          tsParseEnumDeclaration(e) {
            let s =
              arguments.length > 1 && arguments[1] !== void 0
                ? arguments[1]
                : {};
            return (
              s.const && (e.const = !0),
              s.declare && (e.declare = !0),
              this.expectContextual(122),
              (e.id = this.parseIdentifier()),
              this.checkIdentifier(e.id, e.const ? Ro : Pr),
              this.expect(5),
              (e.members = this.tsParseDelimitedList(
                "EnumMembers",
                this.tsParseEnumMember.bind(this)
              )),
              this.expect(8),
              this.finishNode(e, "TSEnumDeclaration")
            );
          }
          tsParseModuleBlock() {
            let e = this.startNode();
            return (
              this.scope.enter(Ke),
              this.expect(5),
              this.parseBlockOrModuleBlockBody((e.body = []), void 0, !0, 8),
              this.scope.exit(),
              this.finishNode(e, "TSModuleBlock")
            );
          }
          tsParseModuleOrNamespaceDeclaration(e) {
            let s =
              arguments.length > 1 && arguments[1] !== void 0
                ? arguments[1]
                : !1;
            if (
              ((e.id = this.parseIdentifier()),
              s || this.checkIdentifier(e.id, jo),
              this.eat(16))
            ) {
              let r = this.startNode();
              this.tsParseModuleOrNamespaceDeclaration(r, !0), (e.body = r);
            } else
              this.scope.enter(pt),
                this.prodParam.enter(He),
                (e.body = this.tsParseModuleBlock()),
                this.prodParam.exit(),
                this.scope.exit();
            return this.finishNode(e, "TSModuleDeclaration");
          }
          tsParseAmbientExternalModuleDeclaration(e) {
            return (
              this.isContextual(109)
                ? ((e.global = !0), (e.id = this.parseIdentifier()))
                : this.match(129)
                ? (e.id = this.parseExprAtom())
                : this.unexpected(),
              this.match(5)
                ? (this.scope.enter(pt),
                  this.prodParam.enter(He),
                  (e.body = this.tsParseModuleBlock()),
                  this.prodParam.exit(),
                  this.scope.exit())
                : this.semicolon(),
              this.finishNode(e, "TSModuleDeclaration")
            );
          }
          tsParseImportEqualsDeclaration(e, s) {
            (e.isExport = s || !1),
              (e.id = this.parseIdentifier()),
              this.checkIdentifier(e.id, Te),
              this.expect(29);
            let r = this.tsParseModuleReference();
            return (
              e.importKind === "type" &&
                r.type !== "TSExternalModuleReference" &&
                this.raise(S.ImportAliasHasImportType, { at: r }),
              (e.moduleReference = r),
              this.semicolon(),
              this.finishNode(e, "TSImportEqualsDeclaration")
            );
          }
          tsIsExternalModuleReference() {
            return this.isContextual(116) && this.lookaheadCharCode() === 40;
          }
          tsParseModuleReference() {
            return this.tsIsExternalModuleReference()
              ? this.tsParseExternalModuleReference()
              : this.tsParseEntityName(!1);
          }
          tsParseExternalModuleReference() {
            let e = this.startNode();
            if ((this.expectContextual(116), this.expect(10), !this.match(129)))
              throw this.unexpected();
            return (
              (e.expression = this.parseExprAtom()),
              this.expect(11),
              this.finishNode(e, "TSExternalModuleReference")
            );
          }
          tsLookAhead(e) {
            let s = this.state.clone(),
              r = e();
            return (this.state = s), r;
          }
          tsTryParseAndCatch(e) {
            let s = this.tryParse((r) => e() || r());
            if (!(s.aborted || !s.node))
              return s.error && (this.state = s.failState), s.node;
          }
          tsTryParse(e) {
            let s = this.state.clone(),
              r = e();
            if (r !== void 0 && r !== !1) return r;
            this.state = s;
          }
          tsTryParseDeclare(e) {
            if (this.isLineTerminator()) return;
            let s = this.state.type,
              r;
            return (
              this.isContextual(99) && ((s = 74), (r = "let")),
              this.tsInAmbientContext(() => {
                if (s === 68)
                  return (
                    (e.declare = !0), this.parseFunctionStatement(e, !1, !0)
                  );
                if (s === 80)
                  return (e.declare = !0), this.parseClass(e, !0, !1);
                if (s === 122)
                  return this.tsParseEnumDeclaration(e, { declare: !0 });
                if (s === 109)
                  return this.tsParseAmbientExternalModuleDeclaration(e);
                if (s === 75 || s === 74)
                  return !this.match(75) || !this.isLookaheadContextual("enum")
                    ? ((e.declare = !0),
                      this.parseVarStatement(e, r || this.state.value, !0))
                    : (this.expect(75),
                      this.tsParseEnumDeclaration(e, {
                        const: !0,
                        declare: !0,
                      }));
                if (s === 125) {
                  let i = this.tsParseInterfaceDeclaration(e, { declare: !0 });
                  if (i) return i;
                }
                if (K(s))
                  return this.tsParseDeclaration(e, this.state.value, !0);
              })
            );
          }
          tsTryParseExportDeclaration() {
            return this.tsParseDeclaration(
              this.startNode(),
              this.state.value,
              !0
            );
          }
          tsParseExpressionStatement(e, s) {
            switch (s.name) {
              case "declare": {
                let r = this.tsTryParseDeclare(e);
                if (r) return (r.declare = !0), r;
                break;
              }
              case "global":
                if (this.match(5)) {
                  this.scope.enter(pt), this.prodParam.enter(He);
                  let r = e;
                  return (
                    (r.global = !0),
                    (r.id = s),
                    (r.body = this.tsParseModuleBlock()),
                    this.scope.exit(),
                    this.prodParam.exit(),
                    this.finishNode(r, "TSModuleDeclaration")
                  );
                }
                break;
              default:
                return this.tsParseDeclaration(e, s.name, !1);
            }
          }
          tsParseDeclaration(e, s, r) {
            switch (s) {
              case "abstract":
                if (
                  this.tsCheckLineTerminator(r) &&
                  (this.match(80) || K(this.state.type))
                )
                  return this.tsParseAbstractDeclaration(e);
                break;
              case "module":
                if (this.tsCheckLineTerminator(r)) {
                  if (this.match(129))
                    return this.tsParseAmbientExternalModuleDeclaration(e);
                  if (K(this.state.type))
                    return this.tsParseModuleOrNamespaceDeclaration(e);
                }
                break;
              case "namespace":
                if (this.tsCheckLineTerminator(r) && K(this.state.type))
                  return this.tsParseModuleOrNamespaceDeclaration(e);
                break;
              case "type":
                if (this.tsCheckLineTerminator(r) && K(this.state.type))
                  return this.tsParseTypeAliasDeclaration(e);
                break;
            }
          }
          tsCheckLineTerminator(e) {
            return e
              ? this.hasFollowingLineBreak()
                ? !1
                : (this.next(), !0)
              : !this.isLineTerminator();
          }
          tsTryParseGenericAsyncArrowFunction(e, s) {
            if (!this.match(47)) return;
            let r = this.state.maybeInArrowParameters;
            this.state.maybeInArrowParameters = !0;
            let i = this.tsTryParseAndCatch(() => {
              let a = this.startNodeAt(e, s);
              return (
                (a.typeParameters = this.tsParseTypeParameters()),
                super.parseFunctionParams(a),
                (a.returnType = this.tsTryParseTypeOrTypePredicateAnnotation()),
                this.expect(19),
                a
              );
            });
            if (((this.state.maybeInArrowParameters = r), !!i))
              return this.parseArrowExpression(i, null, !0);
          }
          tsParseTypeArgumentsInExpression() {
            if (this.reScan_lt() === 47) return this.tsParseTypeArguments();
          }
          tsParseTypeArguments() {
            let e = this.startNode();
            return (
              (e.params = this.tsInType(() =>
                this.tsInNoContext(
                  () => (
                    this.expect(47),
                    this.tsParseDelimitedList(
                      "TypeParametersOrArguments",
                      this.tsParseType.bind(this)
                    )
                  )
                )
              )),
              e.params.length === 0 &&
                this.raise(S.EmptyTypeArguments, { at: e }),
              this.expect(48),
              this.finishNode(e, "TSTypeParameterInstantiation")
            );
          }
          tsIsDeclarationStart() {
            return To(this.state.type);
          }
          isExportDefaultSpecifier() {
            return this.tsIsDeclarationStart()
              ? !1
              : super.isExportDefaultSpecifier();
          }
          parseAssignableListItem(e, s) {
            let r = this.state.start,
              i = this.state.startLoc,
              a,
              n = !1,
              o = !1;
            if (e !== void 0) {
              let y = {};
              this.tsParseModifiers({
                modified: y,
                allowedModifiers: [
                  "public",
                  "private",
                  "protected",
                  "override",
                  "readonly",
                ],
              }),
                (a = y.accessibility),
                (o = y.override),
                (n = y.readonly),
                e === !1 &&
                  (a || n || o) &&
                  this.raise(S.UnexpectedParameterModifier, { at: i });
            }
            let c = this.parseMaybeDefault();
            this.parseAssignableListItemTypes(c);
            let f = this.parseMaybeDefault(c.start, c.loc.start, c);
            if (a || n || o) {
              let y = this.startNodeAt(r, i);
              return (
                s.length && (y.decorators = s),
                a && (y.accessibility = a),
                n && (y.readonly = n),
                o && (y.override = o),
                f.type !== "Identifier" &&
                  f.type !== "AssignmentPattern" &&
                  this.raise(S.UnsupportedParameterPropertyKind, { at: y }),
                (y.parameter = f),
                this.finishNode(y, "TSParameterProperty")
              );
            }
            return s.length && (c.decorators = s), f;
          }
          isSimpleParameter(e) {
            return (
              (e.type === "TSParameterProperty" &&
                super.isSimpleParameter(e.parameter)) ||
              super.isSimpleParameter(e)
            );
          }
          parseFunctionBodyAndFinish(e, s) {
            let r =
              arguments.length > 2 && arguments[2] !== void 0
                ? arguments[2]
                : !1;
            this.match(14) &&
              (e.returnType = this.tsParseTypeOrTypePredicateAnnotation(14));
            let i =
              s === "FunctionDeclaration"
                ? "TSDeclareFunction"
                : s === "ClassMethod" || s === "ClassPrivateMethod"
                ? "TSDeclareMethod"
                : void 0;
            if (i && !this.match(5) && this.isLineTerminator()) {
              this.finishNode(e, i);
              return;
            }
            if (
              i === "TSDeclareFunction" &&
              this.state.isAmbientContext &&
              (this.raise(S.DeclareFunctionHasImplementation, { at: e }),
              e.declare)
            ) {
              super.parseFunctionBodyAndFinish(e, i, r);
              return;
            }
            super.parseFunctionBodyAndFinish(e, s, r);
          }
          registerFunctionStatementId(e) {
            !e.body && e.id
              ? this.checkIdentifier(e.id, Tr)
              : super.registerFunctionStatementId(...arguments);
          }
          tsCheckForInvalidTypeCasts(e) {
            e.forEach((s) => {
              (s == null ? void 0 : s.type) === "TSTypeCastExpression" &&
                this.raise(S.UnexpectedTypeAnnotation, {
                  at: s.typeAnnotation,
                });
            });
          }
          toReferencedList(e, s) {
            return this.tsCheckForInvalidTypeCasts(e), e;
          }
          parseArrayLike() {
            let e = super.parseArrayLike(...arguments);
            return (
              e.type === "ArrayExpression" &&
                this.tsCheckForInvalidTypeCasts(e.elements),
              e
            );
          }
          parseSubscript(e, s, r, i, a) {
            if (!this.hasPrecedingLineBreak() && this.match(35)) {
              (this.state.canStartJSXElement = !1), this.next();
              let o = this.startNodeAt(s, r);
              return (
                (o.expression = e), this.finishNode(o, "TSNonNullExpression")
              );
            }
            let n = !1;
            if (this.match(18) && this.lookaheadCharCode() === 60) {
              if (i) return (a.stop = !0), e;
              (a.optionalChainMember = n = !0), this.next();
            }
            if (this.match(47) || this.match(51)) {
              let o,
                c = this.tsTryParseAndCatch(() => {
                  if (!i && this.atPossibleAsyncArrow(e)) {
                    let T = this.tsTryParseGenericAsyncArrowFunction(s, r);
                    if (T) return T;
                  }
                  let f = this.tsParseTypeArgumentsInExpression();
                  if (!f) throw this.unexpected();
                  if (n && !this.match(10))
                    throw ((o = this.state.curPosition()), this.unexpected());
                  if (ut(this.state.type)) {
                    let T = this.parseTaggedTemplateExpression(e, s, r, a);
                    return (T.typeParameters = f), T;
                  }
                  if (!i && this.eat(10)) {
                    let T = this.startNodeAt(s, r);
                    return (
                      (T.callee = e),
                      (T.arguments = this.parseCallExpressionArguments(11, !1)),
                      this.tsCheckForInvalidTypeCasts(T.arguments),
                      (T.typeParameters = f),
                      a.optionalChainMember && (T.optional = n),
                      this.finishCallExpression(T, a.optionalChainMember)
                    );
                  }
                  if (Sh(this.state.type) && this.state.type !== 10)
                    throw this.unexpected();
                  let y = this.startNodeAt(s, r);
                  return (
                    (y.expression = e),
                    (y.typeParameters = f),
                    this.finishNode(y, "TSInstantiationExpression")
                  );
                });
              if ((o && this.unexpected(o, 10), c)) return c;
            }
            return super.parseSubscript(e, s, r, i, a);
          }
          parseNewCallee(e) {
            var s;
            super.parseNewCallee(e);
            let { callee: r } = e;
            r.type === "TSInstantiationExpression" &&
              !((s = r.extra) != null && s.parenthesized) &&
              ((e.typeParameters = r.typeParameters),
              (e.callee = r.expression));
          }
          parseExprOp(e, s, r, i) {
            if (
              lt(58) > i &&
              !this.hasPrecedingLineBreak() &&
              this.isContextual(93)
            ) {
              let a = this.startNodeAt(s, r);
              a.expression = e;
              let n = this.tsTryNextParseConstantContext();
              return (
                n
                  ? (a.typeAnnotation = n)
                  : (a.typeAnnotation = this.tsNextThenParseType()),
                this.finishNode(a, "TSAsExpression"),
                this.reScan_lt_gt(),
                this.parseExprOp(a, s, r, i)
              );
            }
            return super.parseExprOp(e, s, r, i);
          }
          checkReservedWord(e, s, r, i) {
            this.state.isAmbientContext || super.checkReservedWord(e, s, r, i);
          }
          checkDuplicateExports() {}
          parseImport(e) {
            if (
              ((e.importKind = "value"),
              K(this.state.type) || this.match(55) || this.match(5))
            ) {
              let r = this.lookahead();
              if (
                (this.isContextual(126) &&
                  r.type !== 12 &&
                  r.type !== 97 &&
                  r.type !== 29 &&
                  ((e.importKind = "type"),
                  this.next(),
                  (r = this.lookahead())),
                K(this.state.type) && r.type === 29)
              )
                return this.tsParseImportEqualsDeclaration(e);
            }
            let s = super.parseImport(e);
            return (
              s.importKind === "type" &&
                s.specifiers.length > 1 &&
                s.specifiers[0].type === "ImportDefaultSpecifier" &&
                this.raise(S.TypeImportCannotSpecifyDefaultAndNamed, { at: s }),
              s
            );
          }
          parseExport(e) {
            if (this.match(83))
              return (
                this.next(),
                this.isContextual(126) && this.lookaheadCharCode() !== 61
                  ? ((e.importKind = "type"), this.next())
                  : (e.importKind = "value"),
                this.tsParseImportEqualsDeclaration(e, !0)
              );
            if (this.eat(29)) {
              let s = e;
              return (
                (s.expression = this.parseExpression()),
                this.semicolon(),
                this.finishNode(s, "TSExportAssignment")
              );
            } else if (this.eatContextual(93)) {
              let s = e;
              return (
                this.expectContextual(124),
                (s.id = this.parseIdentifier()),
                this.semicolon(),
                this.finishNode(s, "TSNamespaceExportDeclaration")
              );
            } else
              return (
                this.isContextual(126) && this.lookahead().type === 5
                  ? (this.next(), (e.exportKind = "type"))
                  : (e.exportKind = "value"),
                super.parseExport(e)
              );
          }
          isAbstractClass() {
            return this.isContextual(120) && this.lookahead().type === 80;
          }
          parseExportDefaultExpression() {
            if (this.isAbstractClass()) {
              let e = this.startNode();
              return (
                this.next(), (e.abstract = !0), this.parseClass(e, !0, !0), e
              );
            }
            if (this.match(125)) {
              let e = this.tsParseInterfaceDeclaration(this.startNode());
              if (e) return e;
            }
            return super.parseExportDefaultExpression();
          }
          parseVarStatement(e, s) {
            let r =
                arguments.length > 2 && arguments[2] !== void 0
                  ? arguments[2]
                  : !1,
              { isAmbientContext: i } = this.state,
              a = super.parseVarStatement(e, s, r || i);
            if (!i) return a;
            for (let { id: n, init: o } of a.declarations)
              !o ||
                (s !== "const" || !!n.typeAnnotation
                  ? this.raise(S.InitializerNotAllowedInAmbientContext, {
                      at: o,
                    })
                  : o.type !== "StringLiteral" &&
                    o.type !== "BooleanLiteral" &&
                    o.type !== "NumericLiteral" &&
                    o.type !== "BigIntLiteral" &&
                    (o.type !== "TemplateLiteral" ||
                      o.expressions.length > 0) &&
                    !kh(o) &&
                    this.raise(
                      S.ConstInitiailizerMustBeStringOrNumericLiteralOrLiteralEnumReference,
                      { at: o }
                    ));
            return a;
          }
          parseStatementContent(e, s) {
            if (this.match(75) && this.isLookaheadContextual("enum")) {
              let r = this.startNode();
              return (
                this.expect(75), this.tsParseEnumDeclaration(r, { const: !0 })
              );
            }
            if (this.isContextual(122))
              return this.tsParseEnumDeclaration(this.startNode());
            if (this.isContextual(125)) {
              let r = this.tsParseInterfaceDeclaration(this.startNode());
              if (r) return r;
            }
            return super.parseStatementContent(e, s);
          }
          parseAccessModifier() {
            return this.tsParseModifier(["public", "protected", "private"]);
          }
          tsHasSomeModifiers(e, s) {
            return s.some((r) => (Or(r) ? e.accessibility === r : !!e[r]));
          }
          tsIsStartOfStaticBlocks() {
            return this.isContextual(104) && this.lookaheadCharCode() === 123;
          }
          parseClassMember(e, s, r) {
            let i = [
              "declare",
              "private",
              "public",
              "protected",
              "override",
              "abstract",
              "readonly",
              "static",
            ];
            this.tsParseModifiers({
              modified: s,
              allowedModifiers: i,
              disallowedModifiers: ["in", "out"],
              stopOnStartOfClassStaticBlock: !0,
              errorTemplate: S.InvalidModifierOnTypeParameterPositions,
            });
            let a = () => {
              this.tsIsStartOfStaticBlocks()
                ? (this.next(),
                  this.next(),
                  this.tsHasSomeModifiers(s, i) &&
                    this.raise(S.StaticBlockCannotHaveModifier, {
                      at: this.state.curPosition(),
                    }),
                  this.parseClassStaticBlock(e, s))
                : this.parseClassMemberWithIsStatic(e, s, r, !!s.static);
            };
            s.declare ? this.tsInAmbientContext(a) : a();
          }
          parseClassMemberWithIsStatic(e, s, r, i) {
            let a = this.tsTryParseIndexSignature(s);
            if (a) {
              e.body.push(a),
                s.abstract &&
                  this.raise(S.IndexSignatureHasAbstract, { at: s }),
                s.accessibility &&
                  this.raise(S.IndexSignatureHasAccessibility, {
                    at: s,
                    modifier: s.accessibility,
                  }),
                s.declare && this.raise(S.IndexSignatureHasDeclare, { at: s }),
                s.override &&
                  this.raise(S.IndexSignatureHasOverride, { at: s });
              return;
            }
            !this.state.inAbstractClass &&
              s.abstract &&
              this.raise(S.NonAbstractClassHasAbstractMethod, { at: s }),
              s.override &&
                (r.hadSuperClass ||
                  this.raise(S.OverrideNotInSubClass, { at: s })),
              super.parseClassMemberWithIsStatic(e, s, r, i);
          }
          parsePostMemberNameModifiers(e) {
            this.eat(17) && (e.optional = !0),
              e.readonly &&
                this.match(10) &&
                this.raise(S.ClassMethodHasReadonly, { at: e }),
              e.declare &&
                this.match(10) &&
                this.raise(S.ClassMethodHasDeclare, { at: e });
          }
          parseExpressionStatement(e, s) {
            return (
              (s.type === "Identifier"
                ? this.tsParseExpressionStatement(e, s)
                : void 0) || super.parseExpressionStatement(e, s)
            );
          }
          shouldParseExportDeclaration() {
            return this.tsIsDeclarationStart()
              ? !0
              : super.shouldParseExportDeclaration();
          }
          parseConditional(e, s, r, i) {
            if (!this.state.maybeInArrowParameters || !this.match(17))
              return super.parseConditional(e, s, r, i);
            let a = this.tryParse(() => super.parseConditional(e, s, r));
            return a.node
              ? (a.error && (this.state = a.failState), a.node)
              : (a.error && super.setOptionalParametersError(i, a.error), e);
          }
          parseParenItem(e, s, r) {
            if (
              ((e = super.parseParenItem(e, s, r)),
              this.eat(17) && ((e.optional = !0), this.resetEndLocation(e)),
              this.match(14))
            ) {
              let i = this.startNodeAt(s, r);
              return (
                (i.expression = e),
                (i.typeAnnotation = this.tsParseTypeAnnotation()),
                this.finishNode(i, "TSTypeCastExpression")
              );
            }
            return e;
          }
          parseExportDeclaration(e) {
            if (!this.state.isAmbientContext && this.isContextual(121))
              return this.tsInAmbientContext(() =>
                this.parseExportDeclaration(e)
              );
            let s = this.state.start,
              r = this.state.startLoc,
              i = this.eatContextual(121);
            if (
              i &&
              (this.isContextual(121) || !this.shouldParseExportDeclaration())
            )
              throw this.raise(S.ExpectedAmbientAfterExportDeclare, {
                at: this.state.startLoc,
              });
            let n =
              (K(this.state.type) && this.tsTryParseExportDeclaration()) ||
              super.parseExportDeclaration(e);
            return n
              ? ((n.type === "TSInterfaceDeclaration" ||
                  n.type === "TSTypeAliasDeclaration" ||
                  i) &&
                  (e.exportKind = "type"),
                i && (this.resetStartLocation(n, s, r), (n.declare = !0)),
                n)
              : null;
          }
          parseClassId(e, s, r) {
            if ((!s || r) && this.isContextual(110)) return;
            super.parseClassId(e, s, r, e.declare ? Tr : gr);
            let i = this.tsTryParseTypeParameters(
              this.tsParseInOutModifiers.bind(this)
            );
            i && (e.typeParameters = i);
          }
          parseClassPropertyAnnotation(e) {
            !e.optional && this.eat(35) && (e.definite = !0);
            let s = this.tsTryParseTypeAnnotation();
            s && (e.typeAnnotation = s);
          }
          parseClassProperty(e) {
            if (
              (this.parseClassPropertyAnnotation(e),
              this.state.isAmbientContext &&
                this.match(29) &&
                this.raise(S.DeclareClassFieldHasInitializer, {
                  at: this.state.startLoc,
                }),
              e.abstract && this.match(29))
            ) {
              let { key: s } = e;
              this.raise(S.AbstractPropertyHasInitializer, {
                at: this.state.startLoc,
                propertyName:
                  s.type === "Identifier" && !e.computed
                    ? s.name
                    : "[".concat(this.input.slice(s.start, s.end), "]"),
              });
            }
            return super.parseClassProperty(e);
          }
          parseClassPrivateProperty(e) {
            return (
              e.abstract && this.raise(S.PrivateElementHasAbstract, { at: e }),
              e.accessibility &&
                this.raise(S.PrivateElementHasAccessibility, {
                  at: e,
                  modifier: e.accessibility,
                }),
              this.parseClassPropertyAnnotation(e),
              super.parseClassPrivateProperty(e)
            );
          }
          pushClassMethod(e, s, r, i, a, n) {
            let o = this.tsTryParseTypeParameters();
            o && a && this.raise(S.ConstructorHasTypeParameters, { at: o });
            let { declare: c = !1, kind: f } = s;
            c &&
              (f === "get" || f === "set") &&
              this.raise(S.DeclareAccessor, { at: s, kind: f }),
              o && (s.typeParameters = o),
              super.pushClassMethod(e, s, r, i, a, n);
          }
          pushClassPrivateMethod(e, s, r, i) {
            let a = this.tsTryParseTypeParameters();
            a && (s.typeParameters = a),
              super.pushClassPrivateMethod(e, s, r, i);
          }
          declareClassPrivateMethodInScope(e, s) {
            e.type !== "TSDeclareMethod" &&
              ((e.type === "MethodDefinition" && !e.value.body) ||
                super.declareClassPrivateMethodInScope(e, s));
          }
          parseClassSuper(e) {
            super.parseClassSuper(e),
              e.superClass &&
                (this.match(47) || this.match(51)) &&
                (e.superTypeParameters =
                  this.tsParseTypeArgumentsInExpression()),
              this.eatContextual(110) &&
                (e.implements = this.tsParseHeritageClause("implements"));
          }
          parseObjPropValue(e) {
            let s = this.tsTryParseTypeParameters();
            s && (e.typeParameters = s);
            for (
              var r = arguments.length, i = new Array(r > 1 ? r - 1 : 0), a = 1;
              a < r;
              a++
            )
              i[a - 1] = arguments[a];
            super.parseObjPropValue(e, ...i);
          }
          parseFunctionParams(e, s) {
            let r = this.tsTryParseTypeParameters();
            r && (e.typeParameters = r), super.parseFunctionParams(e, s);
          }
          parseVarId(e, s) {
            super.parseVarId(e, s),
              e.id.type === "Identifier" &&
                !this.hasPrecedingLineBreak() &&
                this.eat(35) &&
                (e.definite = !0);
            let r = this.tsTryParseTypeAnnotation();
            r && ((e.id.typeAnnotation = r), this.resetEndLocation(e.id));
          }
          parseAsyncArrowFromCallExpression(e, s) {
            return (
              this.match(14) && (e.returnType = this.tsParseTypeAnnotation()),
              super.parseAsyncArrowFromCallExpression(e, s)
            );
          }
          parseMaybeAssign() {
            for (var e = arguments.length, s = new Array(e), r = 0; r < e; r++)
              s[r] = arguments[r];
            var i, a, n, o, c, f, y;
            let T, v, N;
            if (this.hasPlugin("jsx") && (this.match(138) || this.match(47))) {
              if (
                ((T = this.state.clone()),
                (v = this.tryParse(() => super.parseMaybeAssign(...s), T)),
                !v.error)
              )
                return v.node;
              let { context: te } = this.state,
                he = te[te.length - 1];
              (he === U.j_oTag || he === U.j_expr) && te.pop();
            }
            if (!((i = v) != null && i.error) && !this.match(47))
              return super.parseMaybeAssign(...s);
            let R;
            T = T || this.state.clone();
            let z = this.tryParse((te) => {
              var he, pe, st;
              R = this.tsParseTypeParameters();
              let de = super.parseMaybeAssign(...s);
              return (
                (de.type !== "ArrowFunctionExpression" ||
                  ((he = de.extra) != null && he.parenthesized)) &&
                  te(),
                ((pe = R) == null ? void 0 : pe.params.length) !== 0 &&
                  this.resetStartLocationFromNode(de, R),
                (de.typeParameters = R),
                this.hasPlugin("jsx") &&
                  de.typeParameters.params.length === 1 &&
                  !(
                    (st = de.typeParameters.extra) != null && st.trailingComma
                  ) &&
                  de.typeParameters.params[0].constraint,
                de
              );
            }, T);
            if (!z.error && !z.aborted)
              return R && this.reportReservedArrowTypeParam(R), z.node;
            if (
              !v &&
              (Lr(!this.hasPlugin("jsx")),
              (N = this.tryParse(() => super.parseMaybeAssign(...s), T)),
              !N.error)
            )
              return N.node;
            if ((a = v) != null && a.node)
              return (this.state = v.failState), v.node;
            if (z.node)
              return (
                (this.state = z.failState),
                R && this.reportReservedArrowTypeParam(R),
                z.node
              );
            if ((n = N) != null && n.node)
              return (this.state = N.failState), N.node;
            throw (o = v) != null && o.thrown
              ? v.error
              : z.thrown
              ? z.error
              : (c = N) != null && c.thrown
              ? N.error
              : ((f = v) == null ? void 0 : f.error) ||
                z.error ||
                ((y = N) == null ? void 0 : y.error);
          }
          reportReservedArrowTypeParam(e) {
            var s;
            e.params.length === 1 &&
              !((s = e.extra) != null && s.trailingComma) &&
              this.getPluginOption("typescript", "disallowAmbiguousJSXLike") &&
              this.raise(S.ReservedArrowTypeParam, { at: e });
          }
          parseMaybeUnary(e) {
            return !this.hasPlugin("jsx") && this.match(47)
              ? this.tsParseTypeAssertion()
              : super.parseMaybeUnary(e);
          }
          parseArrow(e) {
            if (this.match(14)) {
              let s = this.tryParse((r) => {
                let i = this.tsParseTypeOrTypePredicateAnnotation(14);
                return (this.canInsertSemicolon() || !this.match(19)) && r(), i;
              });
              if (s.aborted) return;
              s.thrown ||
                (s.error && (this.state = s.failState),
                (e.returnType = s.node));
            }
            return super.parseArrow(e);
          }
          parseAssignableListItemTypes(e) {
            this.eat(17) &&
              (e.type !== "Identifier" &&
                !this.state.isAmbientContext &&
                !this.state.inType &&
                this.raise(S.PatternIsOptional, { at: e }),
              (e.optional = !0));
            let s = this.tsTryParseTypeAnnotation();
            return s && (e.typeAnnotation = s), this.resetEndLocation(e), e;
          }
          isAssignable(e, s) {
            switch (e.type) {
              case "TSTypeCastExpression":
                return this.isAssignable(e.expression, s);
              case "TSParameterProperty":
                return !0;
              default:
                return super.isAssignable(e, s);
            }
          }
          toAssignable(e) {
            let s =
              arguments.length > 1 && arguments[1] !== void 0
                ? arguments[1]
                : !1;
            switch (e.type) {
              case "ParenthesizedExpression":
                this.toAssignableParenthesizedExpression(e, s);
                break;
              case "TSAsExpression":
              case "TSNonNullExpression":
              case "TSTypeAssertion":
                s
                  ? this.expressionScope.recordArrowParemeterBindingError(
                      S.UnexpectedTypeCastInParameter,
                      { at: e }
                    )
                  : this.raise(S.UnexpectedTypeCastInParameter, { at: e }),
                  this.toAssignable(e.expression, s);
                break;
              case "AssignmentExpression":
                !s &&
                  e.left.type === "TSTypeCastExpression" &&
                  (e.left = this.typeCastToParameter(e.left));
              default:
                super.toAssignable(e, s);
            }
          }
          toAssignableParenthesizedExpression(e, s) {
            switch (e.expression.type) {
              case "TSAsExpression":
              case "TSNonNullExpression":
              case "TSTypeAssertion":
              case "ParenthesizedExpression":
                this.toAssignable(e.expression, s);
                break;
              default:
                super.toAssignable(e, s);
            }
          }
          checkToRestConversion(e, s) {
            switch (e.type) {
              case "TSAsExpression":
              case "TSTypeAssertion":
              case "TSNonNullExpression":
                this.checkToRestConversion(e.expression, !1);
                break;
              default:
                super.checkToRestConversion(e, s);
            }
          }
          isValidLVal(e, s, r) {
            return (
              Ch(
                {
                  TSTypeCastExpression: !0,
                  TSParameterProperty: "parameter",
                  TSNonNullExpression: "expression",
                  TSAsExpression: (r !== Le || !s) && ["expression", !0],
                  TSTypeAssertion: (r !== Le || !s) && ["expression", !0],
                },
                e
              ) || super.isValidLVal(e, s, r)
            );
          }
          parseBindingAtom() {
            switch (this.state.type) {
              case 78:
                return this.parseIdentifier(!0);
              default:
                return super.parseBindingAtom();
            }
          }
          parseMaybeDecoratorArguments(e) {
            if (this.match(47) || this.match(51)) {
              let s = this.tsParseTypeArgumentsInExpression();
              if (this.match(10)) {
                let r = super.parseMaybeDecoratorArguments(e);
                return (r.typeParameters = s), r;
              }
              this.unexpected(null, 10);
            }
            return super.parseMaybeDecoratorArguments(e);
          }
          checkCommaAfterRest(e) {
            return this.state.isAmbientContext &&
              this.match(12) &&
              this.lookaheadCharCode() === e
              ? (this.next(), !1)
              : super.checkCommaAfterRest(e);
          }
          isClassMethod() {
            return this.match(47) || super.isClassMethod();
          }
          isClassProperty() {
            return this.match(35) || this.match(14) || super.isClassProperty();
          }
          parseMaybeDefault() {
            let e = super.parseMaybeDefault(...arguments);
            return (
              e.type === "AssignmentPattern" &&
                e.typeAnnotation &&
                e.right.start < e.typeAnnotation.start &&
                this.raise(S.TypeAnnotationAfterAssign, {
                  at: e.typeAnnotation,
                }),
              e
            );
          }
          getTokenFromCode(e) {
            if (this.state.inType) {
              if (e === 62) return this.finishOp(48, 1);
              if (e === 60) return this.finishOp(47, 1);
            }
            return super.getTokenFromCode(e);
          }
          reScan_lt_gt() {
            let { type: e } = this.state;
            e === 47
              ? ((this.state.pos -= 1), this.readToken_lt())
              : e === 48 && ((this.state.pos -= 1), this.readToken_gt());
          }
          reScan_lt() {
            let { type: e } = this.state;
            return e === 51
              ? ((this.state.pos -= 2), this.finishOp(47, 1), 47)
              : e;
          }
          toAssignableList(e) {
            for (let s = 0; s < e.length; s++) {
              let r = e[s];
              (r == null ? void 0 : r.type) === "TSTypeCastExpression" &&
                (e[s] = this.typeCastToParameter(r));
            }
            super.toAssignableList(...arguments);
          }
          typeCastToParameter(e) {
            return (
              (e.expression.typeAnnotation = e.typeAnnotation),
              this.resetEndLocation(e.expression, e.typeAnnotation.loc.end),
              e.expression
            );
          }
          shouldParseArrow(e) {
            return this.match(14)
              ? e.every((s) => this.isAssignable(s, !0))
              : super.shouldParseArrow(e);
          }
          shouldParseAsyncArrow() {
            return this.match(14) || super.shouldParseAsyncArrow();
          }
          canHaveLeadingDecorator() {
            return super.canHaveLeadingDecorator() || this.isAbstractClass();
          }
          jsxParseOpeningElementAfterName(e) {
            if (this.match(47) || this.match(51)) {
              let s = this.tsTryParseAndCatch(() =>
                this.tsParseTypeArgumentsInExpression()
              );
              s && (e.typeParameters = s);
            }
            return super.jsxParseOpeningElementAfterName(e);
          }
          getGetterSetterExpectedParamCount(e) {
            let s = super.getGetterSetterExpectedParamCount(e),
              i = this.getObjectOrClassMethodParams(e)[0];
            return i && this.isThisParam(i) ? s + 1 : s;
          }
          parseCatchClauseParam() {
            let e = super.parseCatchClauseParam(),
              s = this.tsTryParseTypeAnnotation();
            return s && ((e.typeAnnotation = s), this.resetEndLocation(e)), e;
          }
          tsInAmbientContext(e) {
            let s = this.state.isAmbientContext;
            this.state.isAmbientContext = !0;
            try {
              return e();
            } finally {
              this.state.isAmbientContext = s;
            }
          }
          parseClass(e) {
            let s = this.state.inAbstractClass;
            this.state.inAbstractClass = !!e.abstract;
            try {
              for (
                var r = arguments.length,
                  i = new Array(r > 1 ? r - 1 : 0),
                  a = 1;
                a < r;
                a++
              )
                i[a - 1] = arguments[a];
              return super.parseClass(e, ...i);
            } finally {
              this.state.inAbstractClass = s;
            }
          }
          tsParseAbstractDeclaration(e) {
            if (this.match(80))
              return (e.abstract = !0), this.parseClass(e, !0, !1);
            if (this.isContextual(125)) {
              if (!this.hasFollowingLineBreak())
                return (
                  (e.abstract = !0),
                  this.raise(S.NonClassMethodPropertyHasAbstractModifer, {
                    at: e,
                  }),
                  this.tsParseInterfaceDeclaration(e)
                );
            } else this.unexpected(null, 80);
          }
          parseMethod() {
            let e = super.parseMethod(...arguments);
            if (
              e.abstract &&
              (this.hasPlugin("estree") ? !!e.value.body : !!e.body)
            ) {
              let { key: r } = e;
              this.raise(S.AbstractMethodHasImplementation, {
                at: e,
                methodName:
                  r.type === "Identifier" && !e.computed
                    ? r.name
                    : "[".concat(this.input.slice(r.start, r.end), "]"),
              });
            }
            return e;
          }
          tsParseTypeParameterName() {
            return this.parseIdentifier().name;
          }
          shouldParseAsAmbientContext() {
            return !!this.getPluginOption("typescript", "dts");
          }
          parse() {
            return (
              this.shouldParseAsAmbientContext() &&
                (this.state.isAmbientContext = !0),
              super.parse()
            );
          }
          getExpression() {
            return (
              this.shouldParseAsAmbientContext() &&
                (this.state.isAmbientContext = !0),
              super.getExpression()
            );
          }
          parseExportSpecifier(e, s, r, i) {
            return !s && i
              ? (this.parseTypeOnlyImportExportSpecifier(e, !1, r),
                this.finishNode(e, "ExportSpecifier"))
              : ((e.exportKind = "value"),
                super.parseExportSpecifier(e, s, r, i));
          }
          parseImportSpecifier(e, s, r, i) {
            return !s && i
              ? (this.parseTypeOnlyImportExportSpecifier(e, !0, r),
                this.finishNode(e, "ImportSpecifier"))
              : ((e.importKind = "value"),
                super.parseImportSpecifier(e, s, r, i));
          }
          parseTypeOnlyImportExportSpecifier(e, s, r) {
            let i = s ? "imported" : "local",
              a = s ? "local" : "exported",
              n = e[i],
              o,
              c = !1,
              f = !0,
              y = n.loc.start;
            if (this.isContextual(93)) {
              let v = this.parseIdentifier();
              if (this.isContextual(93)) {
                let N = this.parseIdentifier();
                ye(this.state.type)
                  ? ((c = !0),
                    (n = v),
                    (o = s
                      ? this.parseIdentifier()
                      : this.parseModuleExportName()),
                    (f = !1))
                  : ((o = N), (f = !1));
              } else
                ye(this.state.type)
                  ? ((f = !1),
                    (o = s
                      ? this.parseIdentifier()
                      : this.parseModuleExportName()))
                  : ((c = !0), (n = v));
            } else
              ye(this.state.type) &&
                ((c = !0),
                s
                  ? ((n = this.parseIdentifier(!0)),
                    this.isContextual(93) ||
                      this.checkReservedWord(n.name, n.loc.start, !0, !0))
                  : (n = this.parseModuleExportName()));
            c &&
              r &&
              this.raise(
                s
                  ? S.TypeModifierIsUsedInTypeImports
                  : S.TypeModifierIsUsedInTypeExports,
                { at: y }
              ),
              (e[i] = n),
              (e[a] = o);
            let T = s ? "importKind" : "exportKind";
            (e[T] = c ? "type" : "value"),
              f &&
                this.eatContextual(93) &&
                (e[a] = s
                  ? this.parseIdentifier()
                  : this.parseModuleExportName()),
              e[a] || (e[a] = Ee(e[i])),
              s && this.checkIdentifier(e[a], Te);
          }
        };
      function kh(t) {
        if (t.type !== "MemberExpression") return !1;
        let { computed: e, property: s } = t;
        return e &&
          s.type !== "StringLiteral" &&
          (s.type !== "TemplateLiteral" || s.expressions.length > 0)
          ? !1
          : Br(t.object);
      }
      function Br(t) {
        return t.type === "Identifier"
          ? !0
          : t.type !== "MemberExpression" || t.computed
          ? !1
          : Br(t.object);
      }
      var Mr = j(_n || (_n = ht(["placeholders"])))((t) => ({
          ClassNameIsRequired: t("A class name is required."),
          UnexpectedSpace: t("Unexpected space in placeholder."),
        })),
        Dh = (t) =>
          class extends t {
            parsePlaceholder(e) {
              if (this.match(140)) {
                let s = this.startNode();
                return (
                  this.next(),
                  this.assertNoSpace(),
                  (s.name = super.parseIdentifier(!0)),
                  this.assertNoSpace(),
                  this.expect(140),
                  this.finishPlaceholder(s, e)
                );
              }
            }
            finishPlaceholder(e, s) {
              let r = !!(e.expectedNode && e.type === "Placeholder");
              return (
                (e.expectedNode = s), r ? e : this.finishNode(e, "Placeholder")
              );
            }
            getTokenFromCode(e) {
              return e === 37 &&
                this.input.charCodeAt(this.state.pos + 1) === 37
                ? this.finishOp(140, 2)
                : super.getTokenFromCode(...arguments);
            }
            parseExprAtom() {
              return (
                this.parsePlaceholder("Expression") ||
                super.parseExprAtom(...arguments)
              );
            }
            parseIdentifier() {
              return (
                this.parsePlaceholder("Identifier") ||
                super.parseIdentifier(...arguments)
              );
            }
            checkReservedWord(e) {
              e !== void 0 && super.checkReservedWord(...arguments);
            }
            parseBindingAtom() {
              return (
                this.parsePlaceholder("Pattern") ||
                super.parseBindingAtom(...arguments)
              );
            }
            isValidLVal(e) {
              for (
                var s = arguments.length,
                  r = new Array(s > 1 ? s - 1 : 0),
                  i = 1;
                i < s;
                i++
              )
                r[i - 1] = arguments[i];
              return e === "Placeholder" || super.isValidLVal(e, ...r);
            }
            toAssignable(e) {
              e && e.type === "Placeholder" && e.expectedNode === "Expression"
                ? (e.expectedNode = "Pattern")
                : super.toAssignable(...arguments);
            }
            isLet(e) {
              return super.isLet(e)
                ? !0
                : !this.isContextual(99) || e
                ? !1
                : this.lookahead().type === 140;
            }
            verifyBreakContinue(e) {
              (e.label && e.label.type === "Placeholder") ||
                super.verifyBreakContinue(...arguments);
            }
            parseExpressionStatement(e, s) {
              if (
                s.type !== "Placeholder" ||
                (s.extra && s.extra.parenthesized)
              )
                return super.parseExpressionStatement(...arguments);
              if (this.match(14)) {
                let r = e;
                return (
                  (r.label = this.finishPlaceholder(s, "Identifier")),
                  this.next(),
                  (r.body = this.parseStatement("label")),
                  this.finishNode(r, "LabeledStatement")
                );
              }
              return (
                this.semicolon(),
                (e.name = s.name),
                this.finishPlaceholder(e, "Statement")
              );
            }
            parseBlock() {
              return (
                this.parsePlaceholder("BlockStatement") ||
                super.parseBlock(...arguments)
              );
            }
            parseFunctionId() {
              return (
                this.parsePlaceholder("Identifier") ||
                super.parseFunctionId(...arguments)
              );
            }
            parseClass(e, s, r) {
              let i = s ? "ClassDeclaration" : "ClassExpression";
              this.next(), this.takeDecorators(e);
              let a = this.state.strict,
                n = this.parsePlaceholder("Identifier");
              if (n)
                if (this.match(81) || this.match(140) || this.match(5))
                  e.id = n;
                else {
                  if (r || !s)
                    return (
                      (e.id = null),
                      (e.body = this.finishPlaceholder(n, "ClassBody")),
                      this.finishNode(e, i)
                    );
                  throw this.raise(Mr.ClassNameIsRequired, {
                    at: this.state.startLoc,
                  });
                }
              else this.parseClassId(e, s, r);
              return (
                this.parseClassSuper(e),
                (e.body =
                  this.parsePlaceholder("ClassBody") ||
                  this.parseClassBody(!!e.superClass, a)),
                this.finishNode(e, i)
              );
            }
            parseExport(e) {
              let s = this.parsePlaceholder("Identifier");
              if (!s) return super.parseExport(...arguments);
              if (!this.isContextual(97) && !this.match(12))
                return (
                  (e.specifiers = []),
                  (e.source = null),
                  (e.declaration = this.finishPlaceholder(s, "Declaration")),
                  this.finishNode(e, "ExportNamedDeclaration")
                );
              this.expectPlugin("exportDefaultFrom");
              let r = this.startNode();
              return (
                (r.exported = s),
                (e.specifiers = [this.finishNode(r, "ExportDefaultSpecifier")]),
                super.parseExport(e)
              );
            }
            isExportDefaultSpecifier() {
              if (this.match(65)) {
                let e = this.nextTokenStart();
                if (
                  this.isUnparsedContextual(e, "from") &&
                  this.input.startsWith(
                    ve(140),
                    this.nextTokenStartSince(e + 4)
                  )
                )
                  return !0;
              }
              return super.isExportDefaultSpecifier();
            }
            maybeParseExportDefaultSpecifier(e) {
              return e.specifiers && e.specifiers.length > 0
                ? !0
                : super.maybeParseExportDefaultSpecifier(...arguments);
            }
            checkExport(e) {
              let { specifiers: s } = e;
              s != null &&
                s.length &&
                (e.specifiers = s.filter(
                  (r) => r.exported.type === "Placeholder"
                )),
                super.checkExport(e),
                (e.specifiers = s);
            }
            parseImport(e) {
              let s = this.parsePlaceholder("Identifier");
              if (!s) return super.parseImport(...arguments);
              if (
                ((e.specifiers = []), !this.isContextual(97) && !this.match(12))
              )
                return (
                  (e.source = this.finishPlaceholder(s, "StringLiteral")),
                  this.semicolon(),
                  this.finishNode(e, "ImportDeclaration")
                );
              let r = this.startNodeAtNode(s);
              return (
                (r.local = s),
                this.finishNode(r, "ImportDefaultSpecifier"),
                e.specifiers.push(r),
                this.eat(12) &&
                  (this.maybeParseStarImportSpecifier(e) ||
                    this.parseNamedImportSpecifiers(e)),
                this.expectContextual(97),
                (e.source = this.parseImportSource()),
                this.semicolon(),
                this.finishNode(e, "ImportDeclaration")
              );
            }
            parseImportSource() {
              return (
                this.parsePlaceholder("StringLiteral") ||
                super.parseImportSource(...arguments)
              );
            }
            assertNoSpace() {
              this.state.start > this.state.lastTokEndLoc.index &&
                this.raise(Mr.UnexpectedSpace, {
                  at: this.state.lastTokEndLoc,
                });
            }
          },
        Fh = (t) =>
          class extends t {
            parseV8Intrinsic() {
              if (this.match(54)) {
                let e = this.state.startLoc,
                  s = this.startNode();
                if ((this.next(), K(this.state.type))) {
                  let r = this.parseIdentifierName(this.state.start),
                    i = this.createIdentifier(s, r);
                  if (((i.type = "V8IntrinsicIdentifier"), this.match(10)))
                    return i;
                }
                this.unexpected(e);
              }
            }
            parseExprAtom() {
              return (
                this.parseV8Intrinsic() || super.parseExprAtom(...arguments)
              );
            }
          };
      function se(t, e) {
        let [s, r] = typeof e == "string" ? [e, {}] : e,
          i = Object.keys(r),
          a = i.length === 0;
        return t.some((n) => {
          if (typeof n == "string") return a && n === s;
          {
            let [o, c] = n;
            if (o !== s) return !1;
            for (let f of i) if (c[f] !== r[f]) return !1;
            return !0;
          }
        });
      }
      function et(t, e, s) {
        let r = t.find((i) => (Array.isArray(i) ? i[0] === e : i === e));
        return r && Array.isArray(r) ? r[1][s] : null;
      }
      var Rr = ["minimal", "fsharp", "hack", "smart"],
        jr = ["^^", "@@", "^", "%", "#"],
        qr = ["hash", "bar"];
      function Lh(t) {
        if (se(t, "decorators")) {
          if (se(t, "decorators-legacy"))
            throw new Error(
              "Cannot use the decorators and decorators-legacy plugin together"
            );
          let e = et(t, "decorators", "decoratorsBeforeExport");
          if (e == null)
            throw new Error(
              "The 'decorators' plugin requires a 'decoratorsBeforeExport' option, whose value must be a boolean. If you are migrating from Babylon/Babel 6 or want to use the old decorators proposal, you should use the 'decorators-legacy' plugin instead of 'decorators'."
            );
          if (typeof e != "boolean")
            throw new Error("'decoratorsBeforeExport' must be a boolean.");
        }
        if (se(t, "flow") && se(t, "typescript"))
          throw new Error("Cannot combine flow and typescript plugins.");
        if (se(t, "placeholders") && se(t, "v8intrinsic"))
          throw new Error(
            "Cannot combine placeholders and v8intrinsic plugins."
          );
        if (se(t, "pipelineOperator")) {
          let e = et(t, "pipelineOperator", "proposal");
          if (!Rr.includes(e)) {
            let r = Rr.map((i) => '"'.concat(i, '"')).join(", ");
            throw new Error(
              '"pipelineOperator" requires "proposal" option whose value must be one of: '.concat(
                r,
                "."
              )
            );
          }
          let s = se(t, ["recordAndTuple", { syntaxType: "hash" }]);
          if (e === "hack") {
            if (se(t, "placeholders"))
              throw new Error(
                "Cannot combine placeholders plugin and Hack-style pipes."
              );
            if (se(t, "v8intrinsic"))
              throw new Error(
                "Cannot combine v8intrinsic plugin and Hack-style pipes."
              );
            let r = et(t, "pipelineOperator", "topicToken");
            if (!jr.includes(r)) {
              let i = jr.map((a) => '"'.concat(a, '"')).join(", ");
              throw new Error(
                '"pipelineOperator" in "proposal": "hack" mode also requires a "topicToken" option whose value must be one of: '.concat(
                  i,
                  "."
                )
              );
            }
            if (r === "#" && s)
              throw new Error(
                'Plugin conflict between `["pipelineOperator", { proposal: "hack", topicToken: "#" }]` and `["recordAndtuple", { syntaxType: "hash"}]`.'
              );
          } else if (e === "smart" && s)
            throw new Error(
              'Plugin conflict between `["pipelineOperator", { proposal: "smart" }]` and `["recordAndtuple", { syntaxType: "hash"}]`.'
            );
        }
        if (se(t, "moduleAttributes")) {
          if (se(t, "importAssertions"))
            throw new Error(
              "Cannot combine importAssertions and moduleAttributes plugins."
            );
          if (et(t, "moduleAttributes", "version") !== "may-2020")
            throw new Error(
              "The 'moduleAttributes' plugin requires a 'version' option, representing the last proposal update. Currently, the only supported value is 'may-2020'."
            );
        }
        if (
          se(t, "recordAndTuple") &&
          !qr.includes(et(t, "recordAndTuple", "syntaxType"))
        )
          throw new Error(
            "'recordAndTuple' requires 'syntaxType' option whose value should be one of: " +
              qr.map((e) => "'".concat(e, "'")).join(", ")
          );
        if (se(t, "asyncDoExpressions") && !se(t, "doExpressions")) {
          let e = new Error(
            "'asyncDoExpressions' requires 'doExpressions', please add 'doExpressions' to parser plugins."
          );
          throw ((e.missingPlugins = "doExpressions"), e);
        }
      }
      var Ur = {
          estree: Ce,
          jsx: Th,
          flow: Ah,
          typescript: Ih,
          v8intrinsic: Fh,
          placeholders: Dh,
        },
        Oh = Object.keys(Ur),
        _r = {
          sourceType: "script",
          sourceFilename: void 0,
          startColumn: 0,
          startLine: 1,
          allowAwaitOutsideFunction: !1,
          allowReturnOutsideFunction: !1,
          allowImportExportEverywhere: !1,
          allowSuperOutsideMethod: !1,
          allowUndeclaredExports: !1,
          plugins: [],
          strictMode: null,
          ranges: !1,
          tokens: !1,
          createParenthesizedExpressions: !1,
          errorRecovery: !1,
          attachComment: !0,
        };
      function Bh(t) {
        let e = {};
        for (let s of Object.keys(_r)) e[s] = t && t[s] != null ? t[s] : _r[s];
        return e;
      }
      var Mh = (t, e) => Object.hasOwnProperty.call(t, e) && t[e],
        zr = (t) =>
          t.type === "ParenthesizedExpression" ? zr(t.expression) : t,
        Rh = class extends fh {
          toAssignable(t) {
            let e =
              arguments.length > 1 && arguments[1] !== void 0
                ? arguments[1]
                : !1;
            var s, r;
            let i;
            switch (
              ((t.type === "ParenthesizedExpression" ||
                ((s = t.extra) != null && s.parenthesized)) &&
                ((i = zr(t)),
                e
                  ? i.type === "Identifier"
                    ? this.expressionScope.recordArrowParemeterBindingError(
                        l.InvalidParenthesizedAssignment,
                        { at: t }
                      )
                    : i.type !== "MemberExpression" &&
                      this.raise(l.InvalidParenthesizedAssignment, { at: t })
                  : this.raise(l.InvalidParenthesizedAssignment, { at: t })),
              t.type)
            ) {
              case "Identifier":
              case "ObjectPattern":
              case "ArrayPattern":
              case "AssignmentPattern":
              case "RestElement":
                break;
              case "ObjectExpression":
                t.type = "ObjectPattern";
                for (
                  let n = 0, o = t.properties.length, c = o - 1;
                  n < o;
                  n++
                ) {
                  var a;
                  let f = t.properties[n],
                    y = n === c;
                  this.toAssignableObjectExpressionProp(f, y, e),
                    y &&
                      f.type === "RestElement" &&
                      (a = t.extra) != null &&
                      a.trailingCommaLoc &&
                      this.raise(l.RestTrailingComma, {
                        at: t.extra.trailingCommaLoc,
                      });
                }
                break;
              case "ObjectProperty": {
                let { key: n, value: o } = t;
                this.isPrivateName(n) &&
                  this.classScope.usePrivateName(
                    this.getPrivateNameSV(n),
                    n.loc.start
                  ),
                  this.toAssignable(o, e);
                break;
              }
              case "SpreadElement":
                throw new Error(
                  "Internal @babel/parser error (this is a bug, please report it). SpreadElement should be converted by .toAssignable's caller."
                );
              case "ArrayExpression":
                (t.type = "ArrayPattern"),
                  this.toAssignableList(
                    t.elements,
                    (r = t.extra) == null ? void 0 : r.trailingCommaLoc,
                    e
                  );
                break;
              case "AssignmentExpression":
                t.operator !== "=" &&
                  this.raise(l.MissingEqInAssignment, { at: t.left.loc.end }),
                  (t.type = "AssignmentPattern"),
                  delete t.operator,
                  this.toAssignable(t.left, e);
                break;
              case "ParenthesizedExpression":
                this.toAssignable(i, e);
                break;
            }
          }
          toAssignableObjectExpressionProp(t, e, s) {
            if (t.type === "ObjectMethod")
              this.raise(
                t.kind === "get" || t.kind === "set"
                  ? l.PatternHasAccessor
                  : l.PatternHasMethod,
                { at: t.key }
              );
            else if (t.type === "SpreadElement") {
              t.type = "RestElement";
              let r = t.argument;
              this.checkToRestConversion(r, !1),
                this.toAssignable(r, s),
                e || this.raise(l.RestTrailingComma, { at: t });
            } else this.toAssignable(t, s);
          }
          toAssignableList(t, e, s) {
            let r = t.length - 1;
            for (let i = 0; i <= r; i++) {
              let a = t[i];
              if (!!a) {
                if (a.type === "SpreadElement") {
                  a.type = "RestElement";
                  let n = a.argument;
                  this.checkToRestConversion(n, !0), this.toAssignable(n, s);
                } else this.toAssignable(a, s);
                a.type === "RestElement" &&
                  (i < r
                    ? this.raise(l.RestTrailingComma, { at: a })
                    : e && this.raise(l.RestTrailingComma, { at: e }));
              }
            }
          }
          isAssignable(t, e) {
            switch (t.type) {
              case "Identifier":
              case "ObjectPattern":
              case "ArrayPattern":
              case "AssignmentPattern":
              case "RestElement":
                return !0;
              case "ObjectExpression": {
                let s = t.properties.length - 1;
                return t.properties.every(
                  (r, i) =>
                    r.type !== "ObjectMethod" &&
                    (i === s || r.type !== "SpreadElement") &&
                    this.isAssignable(r)
                );
              }
              case "ObjectProperty":
                return this.isAssignable(t.value);
              case "SpreadElement":
                return this.isAssignable(t.argument);
              case "ArrayExpression":
                return t.elements.every(
                  (s) => s === null || this.isAssignable(s)
                );
              case "AssignmentExpression":
                return t.operator === "=";
              case "ParenthesizedExpression":
                return this.isAssignable(t.expression);
              case "MemberExpression":
              case "OptionalMemberExpression":
                return !e;
              default:
                return !1;
            }
          }
          toReferencedList(t, e) {
            return t;
          }
          toReferencedListDeep(t, e) {
            this.toReferencedList(t, e);
            for (let s of t)
              (s == null ? void 0 : s.type) === "ArrayExpression" &&
                this.toReferencedListDeep(s.elements);
          }
          parseSpread(t, e) {
            let s = this.startNode();
            return (
              this.next(),
              (s.argument = this.parseMaybeAssignAllowIn(t, void 0, e)),
              this.finishNode(s, "SpreadElement")
            );
          }
          parseRestBinding() {
            let t = this.startNode();
            return (
              this.next(),
              (t.argument = this.parseBindingAtom()),
              this.finishNode(t, "RestElement")
            );
          }
          parseBindingAtom() {
            switch (this.state.type) {
              case 0: {
                let t = this.startNode();
                return (
                  this.next(),
                  (t.elements = this.parseBindingList(3, 93, !0)),
                  this.finishNode(t, "ArrayPattern")
                );
              }
              case 5:
                return this.parseObjectLike(8, !0);
            }
            return this.parseIdentifier();
          }
          parseBindingList(t, e, s, r) {
            let i = [],
              a = !0;
            for (; !this.eat(t); )
              if ((a ? (a = !1) : this.expect(12), s && this.match(12)))
                i.push(null);
              else {
                if (this.eat(t)) break;
                if (this.match(21)) {
                  if (
                    (i.push(
                      this.parseAssignableListItemTypes(this.parseRestBinding())
                    ),
                    !this.checkCommaAfterRest(e))
                  ) {
                    this.expect(t);
                    break;
                  }
                } else {
                  let n = [];
                  for (
                    this.match(26) &&
                    this.hasPlugin("decorators") &&
                    this.raise(l.UnsupportedParameterDecorator, {
                      at: this.state.startLoc,
                    });
                    this.match(26);

                  )
                    n.push(this.parseDecorator());
                  i.push(this.parseAssignableListItem(r, n));
                }
              }
            return i;
          }
          parseBindingRestProperty(t) {
            return (
              this.next(),
              (t.argument = this.parseIdentifier()),
              this.checkCommaAfterRest(125),
              this.finishNode(t, "RestElement")
            );
          }
          parseBindingProperty() {
            let t = this.startNode(),
              { type: e, start: s, startLoc: r } = this.state;
            return e === 21
              ? this.parseBindingRestProperty(t)
              : (e === 134
                  ? (this.expectPlugin("destructuringPrivate", r),
                    this.classScope.usePrivateName(this.state.value, r),
                    (t.key = this.parsePrivateName()))
                  : this.parsePropertyName(t),
                (t.method = !1),
                this.parseObjPropValue(t, s, r, !1, !1, !0, !1),
                t);
          }
          parseAssignableListItem(t, e) {
            let s = this.parseMaybeDefault();
            this.parseAssignableListItemTypes(s);
            let r = this.parseMaybeDefault(s.start, s.loc.start, s);
            return e.length && (s.decorators = e), r;
          }
          parseAssignableListItemTypes(t) {
            return t;
          }
          parseMaybeDefault(t, e, s) {
            var r, i, a;
            if (
              ((e = (r = e) != null ? r : this.state.startLoc),
              (t = (i = t) != null ? i : this.state.start),
              (s = (a = s) != null ? a : this.parseBindingAtom()),
              !this.eat(29))
            )
              return s;
            let n = this.startNodeAt(t, e);
            return (
              (n.left = s),
              (n.right = this.parseMaybeAssignAllowIn()),
              this.finishNode(n, "AssignmentPattern")
            );
          }
          isValidLVal(t, e, s) {
            return Mh(
              {
                AssignmentPattern: "left",
                RestElement: "argument",
                ObjectProperty: "value",
                ParenthesizedExpression: "expression",
                ArrayPattern: "elements",
                ObjectPattern: "properties",
              },
              t
            );
          }
          checkLVal(t, e) {
            let {
              in: s,
              binding: r = Le,
              checkClashes: i = !1,
              strictModeChanged: a = !1,
              allowingSloppyLetBinding: n = !(r & Se),
              hasParenthesizedAncestor: o = !1,
            } = e;
            var c;
            let f = t.type;
            if (this.isObjectMethod(t)) return;
            if (f === "MemberExpression") {
              r !== Le &&
                this.raise(l.InvalidPropertyBindingPattern, { at: t });
              return;
            }
            if (t.type === "Identifier") {
              this.checkIdentifier(t, r, a, n);
              let { name: R } = t;
              i && (i.has(R) ? this.raise(l.ParamDupe, { at: t }) : i.add(R));
              return;
            }
            let y = this.isValidLVal(
              t.type,
              !(o || ((c = t.extra) != null && c.parenthesized)) &&
                s.type === "AssignmentExpression",
              r
            );
            if (y === !0) return;
            if (y === !1) {
              let R = r === Le ? l.InvalidLhs : l.InvalidLhsBinding;
              this.raise(R, {
                at: t,
                ancestor:
                  s.type === "UpdateExpression"
                    ? { type: "UpdateExpression", prefix: s.prefix }
                    : { type: s.type },
              });
              return;
            }
            let [T, v] = Array.isArray(y)
                ? y
                : [y, f === "ParenthesizedExpression"],
              N =
                t.type === "ArrayPattern" ||
                t.type === "ObjectPattern" ||
                t.type === "ParenthesizedExpression"
                  ? t
                  : s;
            for (let R of [].concat(t[T]))
              R &&
                this.checkLVal(R, {
                  in: N,
                  binding: r,
                  checkClashes: i,
                  allowingSloppyLetBinding: n,
                  strictModeChanged: a,
                  hasParenthesizedAncestor: v,
                });
          }
          checkIdentifier(t, e) {
            let s =
                arguments.length > 2 && arguments[2] !== void 0
                  ? arguments[2]
                  : !1,
              r =
                arguments.length > 3 && arguments[3] !== void 0
                  ? arguments[3]
                  : !(e & Se);
            this.state.strict &&
              (s ? fr(t.name, this.inModule) : pr(t.name)) &&
              (e === Le
                ? this.raise(l.StrictEvalArguments, {
                    at: t,
                    referenceName: t.name,
                  })
                : this.raise(l.StrictEvalArgumentsBinding, {
                    at: t,
                    bindingName: t.name,
                  })),
              !r &&
                t.name === "let" &&
                this.raise(l.LetInLexicalBinding, { at: t }),
              e & Le || this.declareNameFromIdentifier(t, e);
          }
          declareNameFromIdentifier(t, e) {
            this.scope.declareName(t.name, e, t.loc.start);
          }
          checkToRestConversion(t, e) {
            switch (t.type) {
              case "ParenthesizedExpression":
                this.checkToRestConversion(t.expression, e);
                break;
              case "Identifier":
              case "MemberExpression":
                break;
              case "ArrayExpression":
              case "ObjectExpression":
                if (e) break;
              default:
                this.raise(l.InvalidRestAssignmentPattern, { at: t });
            }
          }
          checkCommaAfterRest(t) {
            return this.match(12)
              ? (this.raise(
                  this.lookaheadCharCode() === t
                    ? l.RestTrailingComma
                    : l.ElementAfterRest,
                  { at: this.state.startLoc }
                ),
                !0)
              : !1;
          }
        },
        jh = class extends Rh {
          checkProto(t, e, s, r) {
            if (
              t.type === "SpreadElement" ||
              this.isObjectMethod(t) ||
              t.computed ||
              t.shorthand
            )
              return;
            let i = t.key;
            if ((i.type === "Identifier" ? i.name : i.value) === "__proto__") {
              if (e) {
                this.raise(l.RecordNoProto, { at: i });
                return;
              }
              s.used &&
                (r
                  ? r.doubleProtoLoc === null &&
                    (r.doubleProtoLoc = i.loc.start)
                  : this.raise(l.DuplicateProto, { at: i })),
                (s.used = !0);
            }
          }
          shouldExitDescending(t, e) {
            return t.type === "ArrowFunctionExpression" && t.start === e;
          }
          getExpression() {
            this.enterInitialScopes(), this.nextToken();
            let t = this.parseExpression();
            return (
              this.match(135) || this.unexpected(),
              this.finalizeRemainingComments(),
              (t.comments = this.state.comments),
              (t.errors = this.state.errors),
              this.options.tokens && (t.tokens = this.tokens),
              t
            );
          }
          parseExpression(t, e) {
            return t
              ? this.disallowInAnd(() => this.parseExpressionBase(e))
              : this.allowInAnd(() => this.parseExpressionBase(e));
          }
          parseExpressionBase(t) {
            let e = this.state.start,
              s = this.state.startLoc,
              r = this.parseMaybeAssign(t);
            if (this.match(12)) {
              let i = this.startNodeAt(e, s);
              for (i.expressions = [r]; this.eat(12); )
                i.expressions.push(this.parseMaybeAssign(t));
              return (
                this.toReferencedList(i.expressions),
                this.finishNode(i, "SequenceExpression")
              );
            }
            return r;
          }
          parseMaybeAssignDisallowIn(t, e) {
            return this.disallowInAnd(() => this.parseMaybeAssign(t, e));
          }
          parseMaybeAssignAllowIn(t, e) {
            return this.allowInAnd(() => this.parseMaybeAssign(t, e));
          }
          setOptionalParametersError(t, e) {
            var s;
            t.optionalParametersLoc =
              (s = e == null ? void 0 : e.loc) != null
                ? s
                : this.state.startLoc;
          }
          parseMaybeAssign(t, e) {
            let s = this.state.start,
              r = this.state.startLoc;
            if (this.isContextual(105) && this.prodParam.hasYield) {
              let o = this.parseYield();
              return e && (o = e.call(this, o, s, r)), o;
            }
            let i;
            t ? (i = !1) : ((t = new bt()), (i = !0));
            let { type: a } = this.state;
            (a === 10 || K(a)) &&
              (this.state.potentialArrowAt = this.state.start);
            let n = this.parseMaybeConditional(t);
            if ((e && (n = e.call(this, n, s, r)), mo(this.state.type))) {
              let o = this.startNodeAt(s, r),
                c = this.state.value;
              return (
                (o.operator = c),
                this.match(29)
                  ? (this.toAssignable(n, !0),
                    (o.left = n),
                    t.doubleProtoLoc != null &&
                      t.doubleProtoLoc.index >= s &&
                      (t.doubleProtoLoc = null),
                    t.shorthandAssignLoc != null &&
                      t.shorthandAssignLoc.index >= s &&
                      (t.shorthandAssignLoc = null),
                    t.privateKeyLoc != null &&
                      t.privateKeyLoc.index >= s &&
                      (this.checkDestructuringPrivate(t),
                      (t.privateKeyLoc = null)))
                  : (o.left = n),
                this.next(),
                (o.right = this.parseMaybeAssign()),
                this.checkLVal(n, {
                  in: this.finishNode(o, "AssignmentExpression"),
                }),
                o
              );
            } else i && this.checkExpressionErrors(t, !0);
            return n;
          }
          parseMaybeConditional(t) {
            let e = this.state.start,
              s = this.state.startLoc,
              r = this.state.potentialArrowAt,
              i = this.parseExprOps(t);
            return this.shouldExitDescending(i, r)
              ? i
              : this.parseConditional(i, e, s, t);
          }
          parseConditional(t, e, s, r) {
            if (this.eat(17)) {
              let i = this.startNodeAt(e, s);
              return (
                (i.test = t),
                (i.consequent = this.parseMaybeAssignAllowIn()),
                this.expect(14),
                (i.alternate = this.parseMaybeAssign()),
                this.finishNode(i, "ConditionalExpression")
              );
            }
            return t;
          }
          parseMaybeUnaryOrPrivate(t) {
            return this.match(134)
              ? this.parsePrivateName()
              : this.parseMaybeUnary(t);
          }
          parseExprOps(t) {
            let e = this.state.start,
              s = this.state.startLoc,
              r = this.state.potentialArrowAt,
              i = this.parseMaybeUnaryOrPrivate(t);
            return this.shouldExitDescending(i, r)
              ? i
              : this.parseExprOp(i, e, s, -1);
          }
          parseExprOp(t, e, s, r) {
            if (this.isPrivateName(t)) {
              let a = this.getPrivateNameSV(t);
              (r >= lt(58) || !this.prodParam.hasIn || !this.match(58)) &&
                this.raise(l.PrivateInExpectedIn, { at: t, identifierName: a }),
                this.classScope.usePrivateName(a, t.loc.start);
            }
            let i = this.state.type;
            if (xo(i) && (this.prodParam.hasIn || !this.match(58))) {
              let a = lt(i);
              if (a > r) {
                if (i === 39) {
                  if (
                    (this.expectPlugin("pipelineOperator"),
                    this.state.inFSharpPipelineDirectBody)
                  )
                    return t;
                  this.checkPipelineAtInfixOperator(t, s);
                }
                let n = this.startNodeAt(e, s);
                (n.left = t), (n.operator = this.state.value);
                let o = i === 41 || i === 42,
                  c = i === 40;
                if (
                  (c && (a = lt(42)),
                  this.next(),
                  i === 39 &&
                    this.hasPlugin([
                      "pipelineOperator",
                      { proposal: "minimal" },
                    ]) &&
                    this.state.type === 96 &&
                    this.prodParam.hasAwait)
                )
                  throw this.raise(l.UnexpectedAwaitAfterPipelineBody, {
                    at: this.state.startLoc,
                  });
                (n.right = this.parseExprOpRightExpr(i, a)),
                  this.finishNode(
                    n,
                    o || c ? "LogicalExpression" : "BinaryExpression"
                  );
                let f = this.state.type;
                if ((c && (f === 41 || f === 42)) || (o && f === 40))
                  throw this.raise(l.MixingCoalesceWithLogical, {
                    at: this.state.startLoc,
                  });
                return this.parseExprOp(n, e, s, r);
              }
            }
            return t;
          }
          parseExprOpRightExpr(t, e) {
            let s = this.state.start,
              r = this.state.startLoc;
            switch (t) {
              case 39:
                switch (this.getPluginOption("pipelineOperator", "proposal")) {
                  case "hack":
                    return this.withTopicBindingContext(() =>
                      this.parseHackPipeBody()
                    );
                  case "smart":
                    return this.withTopicBindingContext(() => {
                      if (this.prodParam.hasYield && this.isContextual(105))
                        throw this.raise(l.PipeBodyIsTighter, {
                          at: this.state.startLoc,
                        });
                      return this.parseSmartPipelineBodyInStyle(
                        this.parseExprOpBaseRightExpr(t, e),
                        s,
                        r
                      );
                    });
                  case "fsharp":
                    return this.withSoloAwaitPermittingContext(() =>
                      this.parseFSharpPipelineBody(e)
                    );
                }
              default:
                return this.parseExprOpBaseRightExpr(t, e);
            }
          }
          parseExprOpBaseRightExpr(t, e) {
            let s = this.state.start,
              r = this.state.startLoc;
            return this.parseExprOp(
              this.parseMaybeUnaryOrPrivate(),
              s,
              r,
              bo(t) ? e - 1 : e
            );
          }
          parseHackPipeBody() {
            var t;
            let { startLoc: e } = this.state,
              s = this.parseMaybeAssign();
            return (
              L.has(s.type) &&
                !((t = s.extra) != null && t.parenthesized) &&
                this.raise(l.PipeUnparenthesizedBody, { at: e, type: s.type }),
              this.topicReferenceWasUsedInCurrentContext() ||
                this.raise(l.PipeTopicUnused, { at: e }),
              s
            );
          }
          checkExponentialAfterUnary(t) {
            this.match(57) &&
              this.raise(l.UnexpectedTokenUnaryExponentiation, {
                at: t.argument,
              });
          }
          parseMaybeUnary(t, e) {
            let s = this.state.start,
              r = this.state.startLoc,
              i = this.isContextual(96);
            if (i && this.isAwaitAllowed()) {
              this.next();
              let c = this.parseAwait(s, r);
              return e || this.checkExponentialAfterUnary(c), c;
            }
            let a = this.match(34),
              n = this.startNode();
            if (Ao(this.state.type)) {
              (n.operator = this.state.value),
                (n.prefix = !0),
                this.match(72) && this.expectPlugin("throwExpressions");
              let c = this.match(89);
              if (
                (this.next(),
                (n.argument = this.parseMaybeUnary(null, !0)),
                this.checkExpressionErrors(t, !0),
                this.state.strict && c)
              ) {
                let f = n.argument;
                f.type === "Identifier"
                  ? this.raise(l.StrictDelete, { at: n })
                  : this.hasPropertyAsPrivateName(f) &&
                    this.raise(l.DeletePrivateField, { at: n });
              }
              if (!a)
                return (
                  e || this.checkExponentialAfterUnary(n),
                  this.finishNode(n, "UnaryExpression")
                );
            }
            let o = this.parseUpdate(n, a, t);
            if (i) {
              let { type: c } = this.state;
              if (
                (this.hasPlugin("v8intrinsic")
                  ? Kt(c)
                  : Kt(c) && !this.match(54)) &&
                !this.isAmbiguousAwait()
              )
                return (
                  this.raiseOverwrite(l.AwaitNotInAsyncContext, { at: r }),
                  this.parseAwait(s, r)
                );
            }
            return o;
          }
          parseUpdate(t, e, s) {
            if (e)
              return (
                this.checkLVal(t.argument, {
                  in: this.finishNode(t, "UpdateExpression"),
                }),
                t
              );
            let r = this.state.start,
              i = this.state.startLoc,
              a = this.parseExprSubscripts(s);
            if (this.checkExpressionErrors(s, !1)) return a;
            for (; go(this.state.type) && !this.canInsertSemicolon(); ) {
              let n = this.startNodeAt(r, i);
              (n.operator = this.state.value),
                (n.prefix = !1),
                (n.argument = a),
                this.next(),
                this.checkLVal(a, {
                  in: (a = this.finishNode(n, "UpdateExpression")),
                });
            }
            return a;
          }
          parseExprSubscripts(t) {
            let e = this.state.start,
              s = this.state.startLoc,
              r = this.state.potentialArrowAt,
              i = this.parseExprAtom(t);
            return this.shouldExitDescending(i, r)
              ? i
              : this.parseSubscripts(i, e, s);
          }
          parseSubscripts(t, e, s, r) {
            let i = {
              optionalChainMember: !1,
              maybeAsyncArrow: this.atPossibleAsyncArrow(t),
              stop: !1,
            };
            do
              (t = this.parseSubscript(t, e, s, r, i)),
                (i.maybeAsyncArrow = !1);
            while (!i.stop);
            return t;
          }
          parseSubscript(t, e, s, r, i) {
            let { type: a } = this.state;
            if (!r && a === 15) return this.parseBind(t, e, s, r, i);
            if (ut(a)) return this.parseTaggedTemplateExpression(t, e, s, i);
            let n = !1;
            if (a === 18) {
              if (r && this.lookaheadCharCode() === 40) return (i.stop = !0), t;
              (i.optionalChainMember = n = !0), this.next();
            }
            if (!r && this.match(10))
              return this.parseCoverCallAndAsyncArrowHead(t, e, s, i, n);
            {
              let o = this.eat(0);
              return o || n || this.eat(16)
                ? this.parseMember(t, e, s, i, o, n)
                : ((i.stop = !0), t);
            }
          }
          parseMember(t, e, s, r, i, a) {
            let n = this.startNodeAt(e, s);
            return (
              (n.object = t),
              (n.computed = i),
              i
                ? ((n.property = this.parseExpression()), this.expect(3))
                : this.match(134)
                ? (t.type === "Super" &&
                    this.raise(l.SuperPrivateField, { at: s }),
                  this.classScope.usePrivateName(
                    this.state.value,
                    this.state.startLoc
                  ),
                  (n.property = this.parsePrivateName()))
                : (n.property = this.parseIdentifier(!0)),
              r.optionalChainMember
                ? ((n.optional = a),
                  this.finishNode(n, "OptionalMemberExpression"))
                : this.finishNode(n, "MemberExpression")
            );
          }
          parseBind(t, e, s, r, i) {
            let a = this.startNodeAt(e, s);
            return (
              (a.object = t),
              this.next(),
              (a.callee = this.parseNoCallExpr()),
              (i.stop = !0),
              this.parseSubscripts(
                this.finishNode(a, "BindExpression"),
                e,
                s,
                r
              )
            );
          }
          parseCoverCallAndAsyncArrowHead(t, e, s, r, i) {
            let a = this.state.maybeInArrowParameters,
              n = null;
            (this.state.maybeInArrowParameters = !0), this.next();
            let o = this.startNodeAt(e, s);
            o.callee = t;
            let { maybeAsyncArrow: c, optionalChainMember: f } = r;
            return (
              c && (this.expressionScope.enter(hh()), (n = new bt())),
              f && (o.optional = i),
              i
                ? (o.arguments = this.parseCallExpressionArguments(11))
                : (o.arguments = this.parseCallExpressionArguments(
                    11,
                    t.type === "Import",
                    t.type !== "Super",
                    o,
                    n
                  )),
              this.finishCallExpression(o, f),
              c && this.shouldParseAsyncArrow() && !i
                ? ((r.stop = !0),
                  this.checkDestructuringPrivate(n),
                  this.expressionScope.validateAsPattern(),
                  this.expressionScope.exit(),
                  (o = this.parseAsyncArrowFromCallExpression(
                    this.startNodeAt(e, s),
                    o
                  )))
                : (c &&
                    (this.checkExpressionErrors(n, !0),
                    this.expressionScope.exit()),
                  this.toReferencedArguments(o)),
              (this.state.maybeInArrowParameters = a),
              o
            );
          }
          toReferencedArguments(t, e) {
            this.toReferencedListDeep(t.arguments, e);
          }
          parseTaggedTemplateExpression(t, e, s, r) {
            let i = this.startNodeAt(e, s);
            return (
              (i.tag = t),
              (i.quasi = this.parseTemplate(!0)),
              r.optionalChainMember &&
                this.raise(l.OptionalChainingNoTemplate, { at: s }),
              this.finishNode(i, "TaggedTemplateExpression")
            );
          }
          atPossibleAsyncArrow(t) {
            return (
              t.type === "Identifier" &&
              t.name === "async" &&
              this.state.lastTokEndLoc.index === t.end &&
              !this.canInsertSemicolon() &&
              t.end - t.start === 5 &&
              t.start === this.state.potentialArrowAt
            );
          }
          finishCallExpression(t, e) {
            if (t.callee.type === "Import")
              if (
                (t.arguments.length === 2 &&
                  (this.hasPlugin("moduleAttributes") ||
                    this.expectPlugin("importAssertions")),
                t.arguments.length === 0 || t.arguments.length > 2)
              )
                this.raise(l.ImportCallArity, {
                  at: t,
                  maxArgumentCount:
                    this.hasPlugin("importAssertions") ||
                    this.hasPlugin("moduleAttributes")
                      ? 2
                      : 1,
                });
              else
                for (let s of t.arguments)
                  s.type === "SpreadElement" &&
                    this.raise(l.ImportCallSpreadArgument, { at: s });
            return this.finishNode(
              t,
              e ? "OptionalCallExpression" : "CallExpression"
            );
          }
          parseCallExpressionArguments(t, e, s, r, i) {
            let a = [],
              n = !0,
              o = this.state.inFSharpPipelineDirectBody;
            for (this.state.inFSharpPipelineDirectBody = !1; !this.eat(t); ) {
              if (n) n = !1;
              else if ((this.expect(12), this.match(t))) {
                e &&
                  !this.hasPlugin("importAssertions") &&
                  !this.hasPlugin("moduleAttributes") &&
                  this.raise(l.ImportCallArgumentTrailingComma, {
                    at: this.state.lastTokStartLoc,
                  }),
                  r && this.addTrailingCommaExtraToNode(r),
                  this.next();
                break;
              }
              a.push(this.parseExprListItem(!1, i, s));
            }
            return (this.state.inFSharpPipelineDirectBody = o), a;
          }
          shouldParseAsyncArrow() {
            return this.match(19) && !this.canInsertSemicolon();
          }
          parseAsyncArrowFromCallExpression(t, e) {
            var s;
            return (
              this.resetPreviousNodeTrailingComments(e),
              this.expect(19),
              this.parseArrowExpression(
                t,
                e.arguments,
                !0,
                (s = e.extra) == null ? void 0 : s.trailingCommaLoc
              ),
              e.innerComments && Qe(t, e.innerComments),
              e.callee.trailingComments && Qe(t, e.callee.trailingComments),
              t
            );
          }
          parseNoCallExpr() {
            let t = this.state.start,
              e = this.state.startLoc;
            return this.parseSubscripts(this.parseExprAtom(), t, e, !0);
          }
          parseExprAtom(t) {
            let e,
              { type: s } = this.state;
            switch (s) {
              case 79:
                return this.parseSuper();
              case 83:
                return (
                  (e = this.startNode()),
                  this.next(),
                  this.match(16)
                    ? this.parseImportMetaProperty(e)
                    : (this.match(10) ||
                        this.raise(l.UnsupportedImport, {
                          at: this.state.lastTokStartLoc,
                        }),
                      this.finishNode(e, "Import"))
                );
              case 78:
                return (
                  (e = this.startNode()),
                  this.next(),
                  this.finishNode(e, "ThisExpression")
                );
              case 90:
                return this.parseDo(this.startNode(), !1);
              case 56:
              case 31:
                return (
                  this.readRegexp(), this.parseRegExpLiteral(this.state.value)
                );
              case 130:
                return this.parseNumericLiteral(this.state.value);
              case 131:
                return this.parseBigIntLiteral(this.state.value);
              case 132:
                return this.parseDecimalLiteral(this.state.value);
              case 129:
                return this.parseStringLiteral(this.state.value);
              case 84:
                return this.parseNullLiteral();
              case 85:
                return this.parseBooleanLiteral(!0);
              case 86:
                return this.parseBooleanLiteral(!1);
              case 10: {
                let r = this.state.potentialArrowAt === this.state.start;
                return this.parseParenAndDistinguishExpression(r);
              }
              case 2:
              case 1:
                return this.parseArrayLike(
                  this.state.type === 2 ? 4 : 3,
                  !1,
                  !0
                );
              case 0:
                return this.parseArrayLike(3, !0, !1, t);
              case 6:
              case 7:
                return this.parseObjectLike(
                  this.state.type === 6 ? 9 : 8,
                  !1,
                  !0
                );
              case 5:
                return this.parseObjectLike(8, !1, !1, t);
              case 68:
                return this.parseFunctionOrFunctionSent();
              case 26:
                this.parseDecorators();
              case 80:
                return (
                  (e = this.startNode()),
                  this.takeDecorators(e),
                  this.parseClass(e, !1)
                );
              case 77:
                return this.parseNewOrNewTarget();
              case 25:
              case 24:
                return this.parseTemplate(!1);
              case 15: {
                (e = this.startNode()), this.next(), (e.object = null);
                let r = (e.callee = this.parseNoCallExpr());
                if (r.type === "MemberExpression")
                  return this.finishNode(e, "BindExpression");
                throw this.raise(l.UnsupportedBind, { at: r });
              }
              case 134:
                return (
                  this.raise(l.PrivateInExpectedIn, {
                    at: this.state.startLoc,
                    identifierName: this.state.value,
                  }),
                  this.parsePrivateName()
                );
              case 33:
                return this.parseTopicReferenceThenEqualsSign(54, "%");
              case 32:
                return this.parseTopicReferenceThenEqualsSign(44, "^");
              case 37:
              case 38:
                return this.parseTopicReference("hack");
              case 44:
              case 54:
              case 27: {
                let r = this.getPluginOption("pipelineOperator", "proposal");
                if (r) return this.parseTopicReference(r);
                throw this.unexpected();
              }
              case 47: {
                let r = this.input.codePointAt(this.nextTokenStart());
                if (ge(r) || r === 62) {
                  this.expectOnePlugin(["jsx", "flow", "typescript"]);
                  break;
                } else throw this.unexpected();
              }
              default:
                if (K(s)) {
                  if (
                    this.isContextual(123) &&
                    this.lookaheadCharCode() === 123 &&
                    !this.hasFollowingLineBreak()
                  )
                    return this.parseModuleExpression();
                  let r = this.state.potentialArrowAt === this.state.start,
                    i = this.state.containsEsc,
                    a = this.parseIdentifier();
                  if (!i && a.name === "async" && !this.canInsertSemicolon()) {
                    let { type: n } = this.state;
                    if (n === 68)
                      return (
                        this.resetPreviousNodeTrailingComments(a),
                        this.next(),
                        this.parseFunction(this.startNodeAtNode(a), void 0, !0)
                      );
                    if (K(n))
                      return this.lookaheadCharCode() === 61
                        ? this.parseAsyncArrowUnaryFunction(
                            this.startNodeAtNode(a)
                          )
                        : a;
                    if (n === 90)
                      return (
                        this.resetPreviousNodeTrailingComments(a),
                        this.parseDo(this.startNodeAtNode(a), !0)
                      );
                  }
                  return r && this.match(19) && !this.canInsertSemicolon()
                    ? (this.next(),
                      this.parseArrowExpression(
                        this.startNodeAtNode(a),
                        [a],
                        !1
                      ))
                    : a;
                } else throw this.unexpected();
            }
          }
          parseTopicReferenceThenEqualsSign(t, e) {
            let s = this.getPluginOption("pipelineOperator", "proposal");
            if (s)
              return (
                (this.state.type = t),
                (this.state.value = e),
                this.state.pos--,
                this.state.end--,
                (this.state.endLoc = m(this.state.endLoc, -1)),
                this.parseTopicReference(s)
              );
            throw this.unexpected();
          }
          parseTopicReference(t) {
            let e = this.startNode(),
              s = this.state.startLoc,
              r = this.state.type;
            return this.next(), this.finishTopicReference(e, s, t, r);
          }
          finishTopicReference(t, e, s, r) {
            if (this.testTopicReferenceConfiguration(s, e, r)) {
              let i =
                s === "smart"
                  ? "PipelinePrimaryTopicReference"
                  : "TopicReference";
              return (
                this.topicReferenceIsAllowedInCurrentContext() ||
                  this.raise(
                    s === "smart"
                      ? l.PrimaryTopicNotAllowed
                      : l.PipeTopicUnbound,
                    { at: e }
                  ),
                this.registerTopicReference(),
                this.finishNode(t, i)
              );
            } else
              throw this.raise(l.PipeTopicUnconfiguredToken, {
                at: e,
                token: ve(r),
              });
          }
          testTopicReferenceConfiguration(t, e, s) {
            switch (t) {
              case "hack":
                return this.hasPlugin([
                  "pipelineOperator",
                  { topicToken: ve(s) },
                ]);
              case "smart":
                return s === 27;
              default:
                throw this.raise(l.PipeTopicRequiresHackPipes, { at: e });
            }
          }
          parseAsyncArrowUnaryFunction(t) {
            this.prodParam.enter(Et(!0, this.prodParam.hasYield));
            let e = [this.parseIdentifier()];
            return (
              this.prodParam.exit(),
              this.hasPrecedingLineBreak() &&
                this.raise(l.LineTerminatorBeforeArrow, {
                  at: this.state.curPosition(),
                }),
              this.expect(19),
              this.parseArrowExpression(t, e, !0),
              t
            );
          }
          parseDo(t, e) {
            this.expectPlugin("doExpressions"),
              e && this.expectPlugin("asyncDoExpressions"),
              (t.async = e),
              this.next();
            let s = this.state.labels;
            return (
              (this.state.labels = []),
              e
                ? (this.prodParam.enter(Tt),
                  (t.body = this.parseBlock()),
                  this.prodParam.exit())
                : (t.body = this.parseBlock()),
              (this.state.labels = s),
              this.finishNode(t, "DoExpression")
            );
          }
          parseSuper() {
            let t = this.startNode();
            return (
              this.next(),
              this.match(10) &&
              !this.scope.allowDirectSuper &&
              !this.options.allowSuperOutsideMethod
                ? this.raise(l.SuperNotAllowed, { at: t })
                : !this.scope.allowSuper &&
                  !this.options.allowSuperOutsideMethod &&
                  this.raise(l.UnexpectedSuper, { at: t }),
              !this.match(10) &&
                !this.match(0) &&
                !this.match(16) &&
                this.raise(l.UnsupportedSuper, { at: t }),
              this.finishNode(t, "Super")
            );
          }
          parsePrivateName() {
            let t = this.startNode(),
              e = this.startNodeAt(
                this.state.start + 1,
                new p(
                  this.state.curLine,
                  this.state.start + 1 - this.state.lineStart,
                  this.state.start + 1
                )
              ),
              s = this.state.value;
            return (
              this.next(),
              (t.id = this.createIdentifier(e, s)),
              this.finishNode(t, "PrivateName")
            );
          }
          parseFunctionOrFunctionSent() {
            let t = this.startNode();
            if ((this.next(), this.prodParam.hasYield && this.match(16))) {
              let e = this.createIdentifier(
                this.startNodeAtNode(t),
                "function"
              );
              return (
                this.next(),
                this.match(102)
                  ? this.expectPlugin("functionSent")
                  : this.hasPlugin("functionSent") || this.unexpected(),
                this.parseMetaProperty(t, e, "sent")
              );
            }
            return this.parseFunction(t);
          }
          parseMetaProperty(t, e, s) {
            t.meta = e;
            let r = this.state.containsEsc;
            return (
              (t.property = this.parseIdentifier(!0)),
              (t.property.name !== s || r) &&
                this.raise(l.UnsupportedMetaProperty, {
                  at: t.property,
                  target: e.name,
                  onlyValidPropertyName: s,
                }),
              this.finishNode(t, "MetaProperty")
            );
          }
          parseImportMetaProperty(t) {
            let e = this.createIdentifier(this.startNodeAtNode(t), "import");
            return (
              this.next(),
              this.isContextual(100) &&
                (this.inModule ||
                  this.raise(l.ImportMetaOutsideModule, { at: e }),
                (this.sawUnambiguousESM = !0)),
              this.parseMetaProperty(t, e, "meta")
            );
          }
          parseLiteralAtNode(t, e, s) {
            return (
              this.addExtra(s, "rawValue", t),
              this.addExtra(
                s,
                "raw",
                this.input.slice(s.start, this.state.end)
              ),
              (s.value = t),
              this.next(),
              this.finishNode(s, e)
            );
          }
          parseLiteral(t, e) {
            let s = this.startNode();
            return this.parseLiteralAtNode(t, e, s);
          }
          parseStringLiteral(t) {
            return this.parseLiteral(t, "StringLiteral");
          }
          parseNumericLiteral(t) {
            return this.parseLiteral(t, "NumericLiteral");
          }
          parseBigIntLiteral(t) {
            return this.parseLiteral(t, "BigIntLiteral");
          }
          parseDecimalLiteral(t) {
            return this.parseLiteral(t, "DecimalLiteral");
          }
          parseRegExpLiteral(t) {
            let e = this.parseLiteral(t.value, "RegExpLiteral");
            return (e.pattern = t.pattern), (e.flags = t.flags), e;
          }
          parseBooleanLiteral(t) {
            let e = this.startNode();
            return (
              (e.value = t), this.next(), this.finishNode(e, "BooleanLiteral")
            );
          }
          parseNullLiteral() {
            let t = this.startNode();
            return this.next(), this.finishNode(t, "NullLiteral");
          }
          parseParenAndDistinguishExpression(t) {
            let e = this.state.start,
              s = this.state.startLoc,
              r;
            this.next(), this.expressionScope.enter(oh());
            let i = this.state.maybeInArrowParameters,
              a = this.state.inFSharpPipelineDirectBody;
            (this.state.maybeInArrowParameters = !0),
              (this.state.inFSharpPipelineDirectBody = !1);
            let n = this.state.start,
              o = this.state.startLoc,
              c = [],
              f = new bt(),
              y = !0,
              T,
              v;
            for (; !this.match(11); ) {
              if (y) y = !1;
              else if (
                (this.expect(
                  12,
                  f.optionalParametersLoc === null
                    ? null
                    : f.optionalParametersLoc
                ),
                this.match(11))
              ) {
                v = this.state.startLoc;
                break;
              }
              if (this.match(21)) {
                let z = this.state.start,
                  te = this.state.startLoc;
                if (
                  ((T = this.state.startLoc),
                  c.push(this.parseParenItem(this.parseRestBinding(), z, te)),
                  !this.checkCommaAfterRest(41))
                )
                  break;
              } else
                c.push(this.parseMaybeAssignAllowIn(f, this.parseParenItem));
            }
            let N = this.state.lastTokEndLoc;
            this.expect(11),
              (this.state.maybeInArrowParameters = i),
              (this.state.inFSharpPipelineDirectBody = a);
            let R = this.startNodeAt(e, s);
            return t && this.shouldParseArrow(c) && (R = this.parseArrow(R))
              ? (this.checkDestructuringPrivate(f),
                this.expressionScope.validateAsPattern(),
                this.expressionScope.exit(),
                this.parseArrowExpression(R, c, !1),
                R)
              : (this.expressionScope.exit(),
                c.length || this.unexpected(this.state.lastTokStartLoc),
                v && this.unexpected(v),
                T && this.unexpected(T),
                this.checkExpressionErrors(f, !0),
                this.toReferencedListDeep(c, !0),
                c.length > 1
                  ? ((r = this.startNodeAt(n, o)),
                    (r.expressions = c),
                    this.finishNode(r, "SequenceExpression"),
                    this.resetEndLocation(r, N))
                  : (r = c[0]),
                this.wrapParenthesis(e, s, r));
          }
          wrapParenthesis(t, e, s) {
            if (!this.options.createParenthesizedExpressions)
              return (
                this.addExtra(s, "parenthesized", !0),
                this.addExtra(s, "parenStart", t),
                this.takeSurroundingComments(
                  s,
                  t,
                  this.state.lastTokEndLoc.index
                ),
                s
              );
            let r = this.startNodeAt(t, e);
            return (
              (r.expression = s),
              this.finishNode(r, "ParenthesizedExpression"),
              r
            );
          }
          shouldParseArrow(t) {
            return !this.canInsertSemicolon();
          }
          parseArrow(t) {
            if (this.eat(19)) return t;
          }
          parseParenItem(t, e, s) {
            return t;
          }
          parseNewOrNewTarget() {
            let t = this.startNode();
            if ((this.next(), this.match(16))) {
              let e = this.createIdentifier(this.startNodeAtNode(t), "new");
              this.next();
              let s = this.parseMetaProperty(t, e, "target");
              return (
                !this.scope.inNonArrowFunction &&
                  !this.scope.inClass &&
                  this.raise(l.UnexpectedNewTarget, { at: s }),
                s
              );
            }
            return this.parseNew(t);
          }
          parseNew(t) {
            if ((this.parseNewCallee(t), this.eat(10))) {
              let e = this.parseExprList(11);
              this.toReferencedList(e), (t.arguments = e);
            } else t.arguments = [];
            return this.finishNode(t, "NewExpression");
          }
          parseNewCallee(t) {
            (t.callee = this.parseNoCallExpr()),
              t.callee.type === "Import"
                ? this.raise(l.ImportCallNotNewExpression, { at: t.callee })
                : this.isOptionalChain(t.callee)
                ? this.raise(l.OptionalChainingNoNew, {
                    at: this.state.lastTokEndLoc,
                  })
                : this.eat(18) &&
                  this.raise(l.OptionalChainingNoNew, {
                    at: this.state.startLoc,
                  });
          }
          parseTemplateElement(t) {
            let { start: e, startLoc: s, end: r, value: i } = this.state,
              a = e + 1,
              n = this.startNodeAt(a, m(s, 1));
            i === null &&
              (t ||
                this.raise(l.InvalidEscapeSequenceTemplate, { at: m(s, 2) }));
            let o = this.match(24),
              c = o ? -1 : -2,
              f = r + c;
            return (
              (n.value = {
                raw: this.input.slice(a, f).replace(
                  /\r\n?/g,
                  `
`
                ),
                cooked: i === null ? null : i.slice(1, c),
              }),
              (n.tail = o),
              this.next(),
              this.finishNode(n, "TemplateElement"),
              this.resetEndLocation(n, m(this.state.lastTokEndLoc, c)),
              n
            );
          }
          parseTemplate(t) {
            let e = this.startNode();
            e.expressions = [];
            let s = this.parseTemplateElement(t);
            for (e.quasis = [s]; !s.tail; )
              e.expressions.push(this.parseTemplateSubstitution()),
                this.readTemplateContinuation(),
                e.quasis.push((s = this.parseTemplateElement(t)));
            return this.finishNode(e, "TemplateLiteral");
          }
          parseTemplateSubstitution() {
            return this.parseExpression();
          }
          parseObjectLike(t, e, s, r) {
            s && this.expectPlugin("recordAndTuple");
            let i = this.state.inFSharpPipelineDirectBody;
            this.state.inFSharpPipelineDirectBody = !1;
            let a = Object.create(null),
              n = !0,
              o = this.startNode();
            for (o.properties = [], this.next(); !this.match(t); ) {
              if (n) n = !1;
              else if ((this.expect(12), this.match(t))) {
                this.addTrailingCommaExtraToNode(o);
                break;
              }
              let f;
              e
                ? (f = this.parseBindingProperty())
                : ((f = this.parsePropertyDefinition(r)),
                  this.checkProto(f, s, a, r)),
                s &&
                  !this.isObjectProperty(f) &&
                  f.type !== "SpreadElement" &&
                  this.raise(l.InvalidRecordProperty, { at: f }),
                f.shorthand && this.addExtra(f, "shorthand", !0),
                o.properties.push(f);
            }
            this.next(), (this.state.inFSharpPipelineDirectBody = i);
            let c = "ObjectExpression";
            return (
              e ? (c = "ObjectPattern") : s && (c = "RecordExpression"),
              this.finishNode(o, c)
            );
          }
          addTrailingCommaExtraToNode(t) {
            this.addExtra(t, "trailingComma", this.state.lastTokStart),
              this.addExtra(
                t,
                "trailingCommaLoc",
                this.state.lastTokStartLoc,
                !1
              );
          }
          maybeAsyncOrAccessorProp(t) {
            return (
              !t.computed &&
              t.key.type === "Identifier" &&
              (this.isLiteralPropertyName() || this.match(0) || this.match(55))
            );
          }
          parsePropertyDefinition(t) {
            let e = [];
            if (this.match(26))
              for (
                this.hasPlugin("decorators") &&
                this.raise(l.UnsupportedPropertyDecorator, {
                  at: this.state.startLoc,
                });
                this.match(26);

              )
                e.push(this.parseDecorator());
            let s = this.startNode(),
              r = !1,
              i = !1,
              a,
              n;
            if (this.match(21))
              return e.length && this.unexpected(), this.parseSpread();
            e.length && ((s.decorators = e), (e = [])),
              (s.method = !1),
              t && ((a = this.state.start), (n = this.state.startLoc));
            let o = this.eat(55);
            this.parsePropertyNamePrefixOperator(s);
            let c = this.state.containsEsc,
              f = this.parsePropertyName(s, t);
            if (!o && !c && this.maybeAsyncOrAccessorProp(s)) {
              let y = f.name;
              y === "async" &&
                !this.hasPrecedingLineBreak() &&
                ((r = !0),
                this.resetPreviousNodeTrailingComments(f),
                (o = this.eat(55)),
                this.parsePropertyName(s)),
                (y === "get" || y === "set") &&
                  ((i = !0),
                  this.resetPreviousNodeTrailingComments(f),
                  (s.kind = y),
                  this.match(55) &&
                    ((o = !0),
                    this.raise(l.AccessorIsGenerator, {
                      at: this.state.curPosition(),
                      kind: y,
                    }),
                    this.next()),
                  this.parsePropertyName(s));
            }
            return this.parseObjPropValue(s, a, n, o, r, !1, i, t), s;
          }
          getGetterSetterExpectedParamCount(t) {
            return t.kind === "get" ? 0 : 1;
          }
          getObjectOrClassMethodParams(t) {
            return t.params;
          }
          checkGetterSetterParams(t) {
            var e;
            let s = this.getGetterSetterExpectedParamCount(t),
              r = this.getObjectOrClassMethodParams(t);
            r.length !== s &&
              this.raise(
                t.kind === "get" ? l.BadGetterArity : l.BadSetterArity,
                { at: t }
              ),
              t.kind === "set" &&
                ((e = r[r.length - 1]) == null ? void 0 : e.type) ===
                  "RestElement" &&
                this.raise(l.BadSetterRestParameter, { at: t });
          }
          parseObjectMethod(t, e, s, r, i) {
            if (i)
              return (
                this.parseMethod(t, e, !1, !1, !1, "ObjectMethod"),
                this.checkGetterSetterParams(t),
                t
              );
            if (s || e || this.match(10))
              return (
                r && this.unexpected(),
                (t.kind = "method"),
                (t.method = !0),
                this.parseMethod(t, e, s, !1, !1, "ObjectMethod")
              );
          }
          parseObjectProperty(t, e, s, r, i) {
            if (((t.shorthand = !1), this.eat(14)))
              return (
                (t.value = r
                  ? this.parseMaybeDefault(
                      this.state.start,
                      this.state.startLoc
                    )
                  : this.parseMaybeAssignAllowIn(i)),
                this.finishNode(t, "ObjectProperty")
              );
            if (!t.computed && t.key.type === "Identifier") {
              if (
                (this.checkReservedWord(t.key.name, t.key.loc.start, !0, !1), r)
              )
                t.value = this.parseMaybeDefault(e, s, Ee(t.key));
              else if (this.match(29)) {
                let a = this.state.startLoc;
                i != null
                  ? i.shorthandAssignLoc === null && (i.shorthandAssignLoc = a)
                  : this.raise(l.InvalidCoverInitializedName, { at: a }),
                  (t.value = this.parseMaybeDefault(e, s, Ee(t.key)));
              } else t.value = Ee(t.key);
              return (t.shorthand = !0), this.finishNode(t, "ObjectProperty");
            }
          }
          parseObjPropValue(t, e, s, r, i, a, n, o) {
            let c =
              this.parseObjectMethod(t, r, i, a, n) ||
              this.parseObjectProperty(t, e, s, a, o);
            return c || this.unexpected(), c;
          }
          parsePropertyName(t, e) {
            if (this.eat(0))
              (t.computed = !0),
                (t.key = this.parseMaybeAssignAllowIn()),
                this.expect(3);
            else {
              let { type: s, value: r } = this.state,
                i;
              if (ye(s)) i = this.parseIdentifier(!0);
              else
                switch (s) {
                  case 130:
                    i = this.parseNumericLiteral(r);
                    break;
                  case 129:
                    i = this.parseStringLiteral(r);
                    break;
                  case 131:
                    i = this.parseBigIntLiteral(r);
                    break;
                  case 132:
                    i = this.parseDecimalLiteral(r);
                    break;
                  case 134: {
                    let a = this.state.startLoc;
                    e != null
                      ? e.privateKeyLoc === null && (e.privateKeyLoc = a)
                      : this.raise(l.UnexpectedPrivateField, { at: a }),
                      (i = this.parsePrivateName());
                    break;
                  }
                  default:
                    throw this.unexpected();
                }
              (t.key = i), s !== 134 && (t.computed = !1);
            }
            return t.key;
          }
          initFunction(t, e) {
            (t.id = null), (t.generator = !1), (t.async = !!e);
          }
          parseMethod(t, e, s, r, i, a) {
            let n =
              arguments.length > 6 && arguments[6] !== void 0
                ? arguments[6]
                : !1;
            this.initFunction(t, s), (t.generator = !!e);
            let o = r;
            return (
              this.scope.enter(Ae | ct | (n ? Fe : 0) | (i ? mr : 0)),
              this.prodParam.enter(Et(s, t.generator)),
              this.parseFunctionParams(t, o),
              this.parseFunctionBodyAndFinish(t, a, !0),
              this.prodParam.exit(),
              this.scope.exit(),
              t
            );
          }
          parseArrayLike(t, e, s, r) {
            s && this.expectPlugin("recordAndTuple");
            let i = this.state.inFSharpPipelineDirectBody;
            this.state.inFSharpPipelineDirectBody = !1;
            let a = this.startNode();
            return (
              this.next(),
              (a.elements = this.parseExprList(t, !s, r, a)),
              (this.state.inFSharpPipelineDirectBody = i),
              this.finishNode(a, s ? "TupleExpression" : "ArrayExpression")
            );
          }
          parseArrowExpression(t, e, s, r) {
            this.scope.enter(Ae | Xt);
            let i = Et(s, !1);
            !this.match(5) && this.prodParam.hasIn && (i |= We),
              this.prodParam.enter(i),
              this.initFunction(t, s);
            let a = this.state.maybeInArrowParameters;
            return (
              e &&
                ((this.state.maybeInArrowParameters = !0),
                this.setArrowFunctionParameters(t, e, r)),
              (this.state.maybeInArrowParameters = !1),
              this.parseFunctionBody(t, !0),
              this.prodParam.exit(),
              this.scope.exit(),
              (this.state.maybeInArrowParameters = a),
              this.finishNode(t, "ArrowFunctionExpression")
            );
          }
          setArrowFunctionParameters(t, e, s) {
            this.toAssignableList(e, s, !1), (t.params = e);
          }
          parseFunctionBodyAndFinish(t, e) {
            let s =
              arguments.length > 2 && arguments[2] !== void 0
                ? arguments[2]
                : !1;
            this.parseFunctionBody(t, !1, s), this.finishNode(t, e);
          }
          parseFunctionBody(t, e) {
            let s =
                arguments.length > 2 && arguments[2] !== void 0
                  ? arguments[2]
                  : !1,
              r = e && !this.match(5);
            if ((this.expressionScope.enter(Ir()), r))
              (t.body = this.parseMaybeAssign()),
                this.checkParams(t, !1, e, !1);
            else {
              let i = this.state.strict,
                a = this.state.labels;
              (this.state.labels = []),
                this.prodParam.enter(this.prodParam.currentFlags() | Dr),
                (t.body = this.parseBlock(!0, !1, (n) => {
                  let o = !this.isSimpleParamList(t.params);
                  n &&
                    o &&
                    this.raise(l.IllegalLanguageModeDirective, {
                      at:
                        (t.kind === "method" || t.kind === "constructor") &&
                        !!t.key
                          ? t.key.loc.end
                          : t,
                    });
                  let c = !i && this.state.strict;
                  this.checkParams(
                    t,
                    !this.state.strict && !e && !s && !o,
                    e,
                    c
                  ),
                    this.state.strict &&
                      t.id &&
                      this.checkIdentifier(t.id, Mo, c);
                })),
                this.prodParam.exit(),
                (this.state.labels = a);
            }
            this.expressionScope.exit();
          }
          isSimpleParameter(t) {
            return t.type === "Identifier";
          }
          isSimpleParamList(t) {
            for (let e = 0, s = t.length; e < s; e++)
              if (!this.isSimpleParameter(t[e])) return !1;
            return !0;
          }
          checkParams(t, e, s) {
            let r =
                arguments.length > 3 && arguments[3] !== void 0
                  ? arguments[3]
                  : !0,
              i = !e && new Set(),
              a = { type: "FormalParameters" };
            for (let n of t.params)
              this.checkLVal(n, {
                in: a,
                binding: yt,
                checkClashes: i,
                strictModeChanged: r,
              });
          }
          parseExprList(t, e, s, r) {
            let i = [],
              a = !0;
            for (; !this.eat(t); ) {
              if (a) a = !1;
              else if ((this.expect(12), this.match(t))) {
                r && this.addTrailingCommaExtraToNode(r), this.next();
                break;
              }
              i.push(this.parseExprListItem(e, s));
            }
            return i;
          }
          parseExprListItem(t, e, s) {
            let r;
            if (this.match(12))
              t ||
                this.raise(l.UnexpectedToken, {
                  at: this.state.curPosition(),
                  unexpected: ",",
                }),
                (r = null);
            else if (this.match(21)) {
              let i = this.state.start,
                a = this.state.startLoc;
              r = this.parseParenItem(this.parseSpread(e), i, a);
            } else if (this.match(17)) {
              this.expectPlugin("partialApplication"),
                s ||
                  this.raise(l.UnexpectedArgumentPlaceholder, {
                    at: this.state.startLoc,
                  });
              let i = this.startNode();
              this.next(), (r = this.finishNode(i, "ArgumentPlaceholder"));
            } else r = this.parseMaybeAssignAllowIn(e, this.parseParenItem);
            return r;
          }
          parseIdentifier(t) {
            let e = this.startNode(),
              s = this.parseIdentifierName(e.start, t);
            return this.createIdentifier(e, s);
          }
          createIdentifier(t, e) {
            return (
              (t.name = e),
              (t.loc.identifierName = e),
              this.finishNode(t, "Identifier")
            );
          }
          parseIdentifierName(t, e) {
            let s,
              { startLoc: r, type: i } = this.state;
            if (ye(i)) s = this.state.value;
            else throw this.unexpected();
            let a = po(i);
            return (
              e
                ? a && this.replaceToken(128)
                : this.checkReservedWord(s, r, a, !1),
              this.next(),
              s
            );
          }
          checkReservedWord(t, e, s, r) {
            if (t.length > 10 || !Lo(t)) return;
            if (t === "yield") {
              if (this.prodParam.hasYield) {
                this.raise(l.YieldBindingIdentifier, { at: e });
                return;
              }
            } else if (t === "await") {
              if (this.prodParam.hasAwait) {
                this.raise(l.AwaitBindingIdentifier, { at: e });
                return;
              }
              if (this.scope.inStaticBlock) {
                this.raise(l.AwaitBindingIdentifierInStaticBlock, { at: e });
                return;
              }
              this.expressionScope.recordAsyncArrowParametersError({ at: e });
            } else if (
              t === "arguments" &&
              this.scope.inClassAndNotInNonArrowFunction
            ) {
              this.raise(l.ArgumentsInClass, { at: e });
              return;
            }
            if (s && ko(t)) {
              this.raise(l.UnexpectedKeyword, { at: e, keyword: t });
              return;
            }
            (this.state.strict ? (r ? fr : cr) : ur)(t, this.inModule) &&
              this.raise(l.UnexpectedReservedWord, { at: e, reservedWord: t });
          }
          isAwaitAllowed() {
            return !!(
              this.prodParam.hasAwait ||
              (this.options.allowAwaitOutsideFunction && !this.scope.inFunction)
            );
          }
          parseAwait(t, e) {
            let s = this.startNodeAt(t, e);
            return (
              this.expressionScope.recordParameterInitializerError(
                l.AwaitExpressionFormalParameter,
                { at: s }
              ),
              this.eat(55) && this.raise(l.ObsoleteAwaitStar, { at: s }),
              !this.scope.inFunction &&
                !this.options.allowAwaitOutsideFunction &&
                (this.isAmbiguousAwait()
                  ? (this.ambiguousScriptDifferentAst = !0)
                  : (this.sawUnambiguousESM = !0)),
              this.state.soloAwait ||
                (s.argument = this.parseMaybeUnary(null, !0)),
              this.finishNode(s, "AwaitExpression")
            );
          }
          isAmbiguousAwait() {
            if (this.hasPrecedingLineBreak()) return !0;
            let { type: t } = this.state;
            return (
              t === 53 ||
              t === 10 ||
              t === 0 ||
              ut(t) ||
              t === 133 ||
              t === 56 ||
              (this.hasPlugin("v8intrinsic") && t === 54)
            );
          }
          parseYield() {
            let t = this.startNode();
            this.expressionScope.recordParameterInitializerError(
              l.YieldInParameter,
              { at: t }
            ),
              this.next();
            let e = !1,
              s = null;
            if (!this.hasPrecedingLineBreak())
              switch (((e = this.eat(55)), this.state.type)) {
                case 13:
                case 135:
                case 8:
                case 11:
                case 3:
                case 9:
                case 14:
                case 12:
                  if (!e) break;
                default:
                  s = this.parseMaybeAssign();
              }
            return (
              (t.delegate = e),
              (t.argument = s),
              this.finishNode(t, "YieldExpression")
            );
          }
          checkPipelineAtInfixOperator(t, e) {
            this.hasPlugin(["pipelineOperator", { proposal: "smart" }]) &&
              t.type === "SequenceExpression" &&
              this.raise(l.PipelineHeadSequenceExpression, { at: e });
          }
          parseSmartPipelineBodyInStyle(t, e, s) {
            let r = this.startNodeAt(e, s);
            return this.isSimpleReference(t)
              ? ((r.callee = t), this.finishNode(r, "PipelineBareFunction"))
              : (this.checkSmartPipeTopicBodyEarlyErrors(s),
                (r.expression = t),
                this.finishNode(r, "PipelineTopicExpression"));
          }
          isSimpleReference(t) {
            switch (t.type) {
              case "MemberExpression":
                return !t.computed && this.isSimpleReference(t.object);
              case "Identifier":
                return !0;
              default:
                return !1;
            }
          }
          checkSmartPipeTopicBodyEarlyErrors(t) {
            if (this.match(19))
              throw this.raise(l.PipelineBodyNoArrow, {
                at: this.state.startLoc,
              });
            this.topicReferenceWasUsedInCurrentContext() ||
              this.raise(l.PipelineTopicUnused, { at: t });
          }
          withTopicBindingContext(t) {
            let e = this.state.topicContext;
            this.state.topicContext = {
              maxNumOfResolvableTopics: 1,
              maxTopicIndex: null,
            };
            try {
              return t();
            } finally {
              this.state.topicContext = e;
            }
          }
          withSmartMixTopicForbiddingContext(t) {
            if (this.hasPlugin(["pipelineOperator", { proposal: "smart" }])) {
              let e = this.state.topicContext;
              this.state.topicContext = {
                maxNumOfResolvableTopics: 0,
                maxTopicIndex: null,
              };
              try {
                return t();
              } finally {
                this.state.topicContext = e;
              }
            } else return t();
          }
          withSoloAwaitPermittingContext(t) {
            let e = this.state.soloAwait;
            this.state.soloAwait = !0;
            try {
              return t();
            } finally {
              this.state.soloAwait = e;
            }
          }
          allowInAnd(t) {
            let e = this.prodParam.currentFlags();
            if (We & ~e) {
              this.prodParam.enter(e | We);
              try {
                return t();
              } finally {
                this.prodParam.exit();
              }
            }
            return t();
          }
          disallowInAnd(t) {
            let e = this.prodParam.currentFlags();
            if (We & e) {
              this.prodParam.enter(e & ~We);
              try {
                return t();
              } finally {
                this.prodParam.exit();
              }
            }
            return t();
          }
          registerTopicReference() {
            this.state.topicContext.maxTopicIndex = 0;
          }
          topicReferenceIsAllowedInCurrentContext() {
            return this.state.topicContext.maxNumOfResolvableTopics >= 1;
          }
          topicReferenceWasUsedInCurrentContext() {
            return (
              this.state.topicContext.maxTopicIndex != null &&
              this.state.topicContext.maxTopicIndex >= 0
            );
          }
          parseFSharpPipelineBody(t) {
            let e = this.state.start,
              s = this.state.startLoc;
            this.state.potentialArrowAt = this.state.start;
            let r = this.state.inFSharpPipelineDirectBody;
            this.state.inFSharpPipelineDirectBody = !0;
            let i = this.parseExprOp(this.parseMaybeUnaryOrPrivate(), e, s, t);
            return (this.state.inFSharpPipelineDirectBody = r), i;
          }
          parseModuleExpression() {
            this.expectPlugin("moduleBlocks");
            let t = this.startNode();
            this.next(), this.eat(5);
            let e = this.initializeScopes(!0);
            this.enterInitialScopes();
            let s = this.startNode();
            try {
              t.body = this.parseProgram(s, 8, "module");
            } finally {
              e();
            }
            return this.eat(8), this.finishNode(t, "ModuleExpression");
          }
          parsePropertyNamePrefixOperator(t) {}
        },
        cs = { kind: "loop" },
        qh = { kind: "switch" },
        Uh = 0,
        ps = 1,
        Kr = 2,
        Vr = 4,
        _h = /[\uD800-\uDFFF]/u,
        fs = /in(?:stanceof)?/y;
      function zh(t, e) {
        for (let s = 0; s < t.length; s++) {
          let r = t[s],
            { type: i } = r;
          if (typeof i == "number") {
            {
              if (i === 134) {
                let { loc: a, start: n, value: o, end: c } = r,
                  f = n + 1,
                  y = m(a.start, 1);
                t.splice(
                  s,
                  1,
                  new we({
                    type: xe(27),
                    value: "#",
                    start: n,
                    end: f,
                    startLoc: a.start,
                    endLoc: y,
                  }),
                  new we({
                    type: xe(128),
                    value: o,
                    start: f,
                    end: c,
                    startLoc: y,
                    endLoc: a.end,
                  })
                ),
                  s++;
                continue;
              }
              if (ut(i)) {
                let { loc: a, start: n, value: o, end: c } = r,
                  f = n + 1,
                  y = m(a.start, 1),
                  T;
                e.charCodeAt(n) === 96
                  ? (T = new we({
                      type: xe(22),
                      value: "`",
                      start: n,
                      end: f,
                      startLoc: a.start,
                      endLoc: y,
                    }))
                  : (T = new we({
                      type: xe(8),
                      value: "}",
                      start: n,
                      end: f,
                      startLoc: a.start,
                      endLoc: y,
                    }));
                let v, N, R, z;
                i === 24
                  ? ((N = c - 1),
                    (R = m(a.end, -1)),
                    (v = o === null ? null : o.slice(1, -1)),
                    (z = new we({
                      type: xe(22),
                      value: "`",
                      start: N,
                      end: c,
                      startLoc: R,
                      endLoc: a.end,
                    })))
                  : ((N = c - 2),
                    (R = m(a.end, -2)),
                    (v = o === null ? null : o.slice(1, -2)),
                    (z = new we({
                      type: xe(23),
                      value: "${",
                      start: N,
                      end: c,
                      startLoc: R,
                      endLoc: a.end,
                    }))),
                  t.splice(
                    s,
                    1,
                    T,
                    new we({
                      type: xe(20),
                      value: v,
                      start: f,
                      end: N,
                      startLoc: y,
                      endLoc: R,
                    }),
                    z
                  ),
                  (s += 2);
                continue;
              }
            }
            r.type = xe(i);
          }
        }
        return t;
      }
      var Kh = class extends jh {
          parseTopLevel(t, e) {
            return (
              (t.program = this.parseProgram(e)),
              (t.comments = this.state.comments),
              this.options.tokens && (t.tokens = zh(this.tokens, this.input)),
              this.finishNode(t, "File")
            );
          }
          parseProgram(t) {
            let e =
                arguments.length > 1 && arguments[1] !== void 0
                  ? arguments[1]
                  : 135,
              s =
                arguments.length > 2 && arguments[2] !== void 0
                  ? arguments[2]
                  : this.options.sourceType;
            if (
              ((t.sourceType = s),
              (t.interpreter = this.parseInterpreterDirective()),
              this.parseBlockBody(t, !0, !0, e),
              this.inModule &&
                !this.options.allowUndeclaredExports &&
                this.scope.undefinedExports.size > 0)
            )
              for (let [r, i] of Array.from(this.scope.undefinedExports))
                this.raise(l.ModuleExportUndefined, { at: i, localName: r });
            return this.finishNode(t, "Program");
          }
          stmtToDirective(t) {
            let e = t;
            (e.type = "Directive"),
              (e.value = e.expression),
              delete e.expression;
            let s = e.value,
              r = s.value,
              i = this.input.slice(s.start, s.end),
              a = (s.value = i.slice(1, -1));
            return (
              this.addExtra(s, "raw", i),
              this.addExtra(s, "rawValue", a),
              this.addExtra(s, "expressionValue", r),
              (s.type = "DirectiveLiteral"),
              e
            );
          }
          parseInterpreterDirective() {
            if (!this.match(28)) return null;
            let t = this.startNode();
            return (
              (t.value = this.state.value),
              this.next(),
              this.finishNode(t, "InterpreterDirective")
            );
          }
          isLet(t) {
            return this.isContextual(99) ? this.isLetKeyword(t) : !1;
          }
          isLetKeyword(t) {
            let e = this.nextTokenStart(),
              s = this.codePointAtPos(e);
            if (s === 92 || s === 91) return !0;
            if (t) return !1;
            if (s === 123) return !0;
            if (ge(s)) {
              if (((fs.lastIndex = e), fs.test(this.input))) {
                let r = this.codePointAtPos(fs.lastIndex);
                if (!ze(r) && r !== 92) return !1;
              }
              return !0;
            }
            return !1;
          }
          parseStatement(t, e) {
            return (
              this.match(26) && this.parseDecorators(!0),
              this.parseStatementContent(t, e)
            );
          }
          parseStatementContent(t, e) {
            let s = this.state.type,
              r = this.startNode(),
              i;
            switch ((this.isLet(t) && ((s = 74), (i = "let")), s)) {
              case 60:
                return this.parseBreakContinueStatement(r, !0);
              case 63:
                return this.parseBreakContinueStatement(r, !1);
              case 64:
                return this.parseDebuggerStatement(r);
              case 90:
                return this.parseDoStatement(r);
              case 91:
                return this.parseForStatement(r);
              case 68:
                if (this.lookaheadCharCode() === 46) break;
                return (
                  t &&
                    (this.state.strict
                      ? this.raise(l.StrictFunction, {
                          at: this.state.startLoc,
                        })
                      : t !== "if" &&
                        t !== "label" &&
                        this.raise(l.SloppyFunction, {
                          at: this.state.startLoc,
                        })),
                  this.parseFunctionStatement(r, !1, !t)
                );
              case 80:
                return t && this.unexpected(), this.parseClass(r, !0);
              case 69:
                return this.parseIfStatement(r);
              case 70:
                return this.parseReturnStatement(r);
              case 71:
                return this.parseSwitchStatement(r);
              case 72:
                return this.parseThrowStatement(r);
              case 73:
                return this.parseTryStatement(r);
              case 75:
              case 74:
                return (
                  (i = i || this.state.value),
                  t &&
                    i !== "var" &&
                    this.raise(l.UnexpectedLexicalDeclaration, {
                      at: this.state.startLoc,
                    }),
                  this.parseVarStatement(r, i)
                );
              case 92:
                return this.parseWhileStatement(r);
              case 76:
                return this.parseWithStatement(r);
              case 5:
                return this.parseBlock();
              case 13:
                return this.parseEmptyStatement(r);
              case 83: {
                let o = this.lookaheadCharCode();
                if (o === 40 || o === 46) break;
              }
              case 82: {
                !this.options.allowImportExportEverywhere &&
                  !e &&
                  this.raise(l.UnexpectedImportExport, {
                    at: this.state.startLoc,
                  }),
                  this.next();
                let o;
                return (
                  s === 83
                    ? ((o = this.parseImport(r)),
                      o.type === "ImportDeclaration" &&
                        (!o.importKind || o.importKind === "value") &&
                        (this.sawUnambiguousESM = !0))
                    : ((o = this.parseExport(r)),
                      ((o.type === "ExportNamedDeclaration" &&
                        (!o.exportKind || o.exportKind === "value")) ||
                        (o.type === "ExportAllDeclaration" &&
                          (!o.exportKind || o.exportKind === "value")) ||
                        o.type === "ExportDefaultDeclaration") &&
                        (this.sawUnambiguousESM = !0)),
                  this.assertModuleNodeAllowed(r),
                  o
                );
              }
              default:
                if (this.isAsyncFunction())
                  return (
                    t &&
                      this.raise(l.AsyncFunctionInSingleStatementContext, {
                        at: this.state.startLoc,
                      }),
                    this.next(),
                    this.parseFunctionStatement(r, !0, !t)
                  );
            }
            let a = this.state.value,
              n = this.parseExpression();
            return K(s) && n.type === "Identifier" && this.eat(14)
              ? this.parseLabeledStatement(r, a, n, t)
              : this.parseExpressionStatement(r, n);
          }
          assertModuleNodeAllowed(t) {
            !this.options.allowImportExportEverywhere &&
              !this.inModule &&
              this.raise(l.ImportOutsideModule, { at: t });
          }
          takeDecorators(t) {
            let e =
              this.state.decoratorStack[this.state.decoratorStack.length - 1];
            e.length &&
              ((t.decorators = e),
              this.resetStartLocationFromNode(t, e[0]),
              (this.state.decoratorStack[this.state.decoratorStack.length - 1] =
                []));
          }
          canHaveLeadingDecorator() {
            return this.match(80);
          }
          parseDecorators(t) {
            let e =
              this.state.decoratorStack[this.state.decoratorStack.length - 1];
            for (; this.match(26); ) {
              let s = this.parseDecorator();
              e.push(s);
            }
            if (this.match(82))
              t || this.unexpected(),
                this.hasPlugin("decorators") &&
                  !this.getPluginOption(
                    "decorators",
                    "decoratorsBeforeExport"
                  ) &&
                  this.raise(l.DecoratorExportClass, {
                    at: this.state.startLoc,
                  });
            else if (!this.canHaveLeadingDecorator())
              throw this.raise(l.UnexpectedLeadingDecorator, {
                at: this.state.startLoc,
              });
          }
          parseDecorator() {
            this.expectOnePlugin(["decorators-legacy", "decorators"]);
            let t = this.startNode();
            if ((this.next(), this.hasPlugin("decorators"))) {
              this.state.decoratorStack.push([]);
              let e = this.state.start,
                s = this.state.startLoc,
                r;
              if (this.match(10)) {
                let i = this.state.start,
                  a = this.state.startLoc;
                this.next(),
                  (r = this.parseExpression()),
                  this.expect(11),
                  (r = this.wrapParenthesis(i, a, r));
              } else
                for (r = this.parseIdentifier(!1); this.eat(16); ) {
                  let i = this.startNodeAt(e, s);
                  (i.object = r),
                    (i.property = this.parseIdentifier(!0)),
                    (i.computed = !1),
                    (r = this.finishNode(i, "MemberExpression"));
                }
              (t.expression = this.parseMaybeDecoratorArguments(r)),
                this.state.decoratorStack.pop();
            } else t.expression = this.parseExprSubscripts();
            return this.finishNode(t, "Decorator");
          }
          parseMaybeDecoratorArguments(t) {
            if (this.eat(10)) {
              let e = this.startNodeAtNode(t);
              return (
                (e.callee = t),
                (e.arguments = this.parseCallExpressionArguments(11, !1)),
                this.toReferencedList(e.arguments),
                this.finishNode(e, "CallExpression")
              );
            }
            return t;
          }
          parseBreakContinueStatement(t, e) {
            return (
              this.next(),
              this.isLineTerminator()
                ? (t.label = null)
                : ((t.label = this.parseIdentifier()), this.semicolon()),
              this.verifyBreakContinue(t, e),
              this.finishNode(t, e ? "BreakStatement" : "ContinueStatement")
            );
          }
          verifyBreakContinue(t, e) {
            let s;
            for (s = 0; s < this.state.labels.length; ++s) {
              let r = this.state.labels[s];
              if (
                (t.label == null || r.name === t.label.name) &&
                ((r.kind != null && (e || r.kind === "loop")) || (t.label && e))
              )
                break;
            }
            if (s === this.state.labels.length) {
              let r = e ? "BreakStatement" : "ContinueStatement";
              this.raise(l.IllegalBreakContinue, { at: t, type: r });
            }
          }
          parseDebuggerStatement(t) {
            return (
              this.next(),
              this.semicolon(),
              this.finishNode(t, "DebuggerStatement")
            );
          }
          parseHeaderExpression() {
            this.expect(10);
            let t = this.parseExpression();
            return this.expect(11), t;
          }
          parseDoStatement(t) {
            return (
              this.next(),
              this.state.labels.push(cs),
              (t.body = this.withSmartMixTopicForbiddingContext(() =>
                this.parseStatement("do")
              )),
              this.state.labels.pop(),
              this.expect(92),
              (t.test = this.parseHeaderExpression()),
              this.eat(13),
              this.finishNode(t, "DoWhileStatement")
            );
          }
          parseForStatement(t) {
            this.next(), this.state.labels.push(cs);
            let e = null;
            if (
              (this.isAwaitAllowed() &&
                this.eatContextual(96) &&
                (e = this.state.lastTokStartLoc),
              this.scope.enter(Ke),
              this.expect(10),
              this.match(13))
            )
              return e !== null && this.unexpected(e), this.parseFor(t, null);
            let s = this.isContextual(99),
              r = s && this.isLetKeyword();
            if (this.match(74) || this.match(75) || r) {
              let c = this.startNode(),
                f = r ? "let" : this.state.value;
              return (
                this.next(),
                this.parseVar(c, !0, f),
                this.finishNode(c, "VariableDeclaration"),
                (this.match(58) || this.isContextual(101)) &&
                c.declarations.length === 1
                  ? this.parseForIn(t, c, e)
                  : (e !== null && this.unexpected(e), this.parseFor(t, c))
              );
            }
            let i = this.isContextual(95),
              a = new bt(),
              n = this.parseExpression(!0, a),
              o = this.isContextual(101);
            if (
              (o &&
                (s && this.raise(l.ForOfLet, { at: n }),
                e === null &&
                  i &&
                  n.type === "Identifier" &&
                  this.raise(l.ForOfAsync, { at: n })),
              o || this.match(58))
            ) {
              this.checkDestructuringPrivate(a), this.toAssignable(n, !0);
              let c = o ? "ForOfStatement" : "ForInStatement";
              return (
                this.checkLVal(n, { in: { type: c } }), this.parseForIn(t, n, e)
              );
            } else this.checkExpressionErrors(a, !0);
            return e !== null && this.unexpected(e), this.parseFor(t, n);
          }
          parseFunctionStatement(t, e, s) {
            return this.next(), this.parseFunction(t, ps | (s ? 0 : Kr), e);
          }
          parseIfStatement(t) {
            return (
              this.next(),
              (t.test = this.parseHeaderExpression()),
              (t.consequent = this.parseStatement("if")),
              (t.alternate = this.eat(66) ? this.parseStatement("if") : null),
              this.finishNode(t, "IfStatement")
            );
          }
          parseReturnStatement(t) {
            return (
              !this.prodParam.hasReturn &&
                !this.options.allowReturnOutsideFunction &&
                this.raise(l.IllegalReturn, { at: this.state.startLoc }),
              this.next(),
              this.isLineTerminator()
                ? (t.argument = null)
                : ((t.argument = this.parseExpression()), this.semicolon()),
              this.finishNode(t, "ReturnStatement")
            );
          }
          parseSwitchStatement(t) {
            this.next(), (t.discriminant = this.parseHeaderExpression());
            let e = (t.cases = []);
            this.expect(5), this.state.labels.push(qh), this.scope.enter(Ke);
            let s;
            for (let r; !this.match(8); )
              if (this.match(61) || this.match(65)) {
                let i = this.match(61);
                s && this.finishNode(s, "SwitchCase"),
                  e.push((s = this.startNode())),
                  (s.consequent = []),
                  this.next(),
                  i
                    ? (s.test = this.parseExpression())
                    : (r &&
                        this.raise(l.MultipleDefaultsInSwitch, {
                          at: this.state.lastTokStartLoc,
                        }),
                      (r = !0),
                      (s.test = null)),
                  this.expect(14);
              } else
                s
                  ? s.consequent.push(this.parseStatement(null))
                  : this.unexpected();
            return (
              this.scope.exit(),
              s && this.finishNode(s, "SwitchCase"),
              this.next(),
              this.state.labels.pop(),
              this.finishNode(t, "SwitchStatement")
            );
          }
          parseThrowStatement(t) {
            return (
              this.next(),
              this.hasPrecedingLineBreak() &&
                this.raise(l.NewlineAfterThrow, {
                  at: this.state.lastTokEndLoc,
                }),
              (t.argument = this.parseExpression()),
              this.semicolon(),
              this.finishNode(t, "ThrowStatement")
            );
          }
          parseCatchClauseParam() {
            let t = this.parseBindingAtom(),
              e = t.type === "Identifier";
            return (
              this.scope.enter(e ? dr : 0),
              this.checkLVal(t, {
                in: { type: "CatchClause" },
                binding: Te,
                allowingSloppyLetBinding: !0,
              }),
              t
            );
          }
          parseTryStatement(t) {
            if (
              (this.next(),
              (t.block = this.parseBlock()),
              (t.handler = null),
              this.match(62))
            ) {
              let e = this.startNode();
              this.next(),
                this.match(10)
                  ? (this.expect(10),
                    (e.param = this.parseCatchClauseParam()),
                    this.expect(11))
                  : ((e.param = null), this.scope.enter(Ke)),
                (e.body = this.withSmartMixTopicForbiddingContext(() =>
                  this.parseBlock(!1, !1)
                )),
                this.scope.exit(),
                (t.handler = this.finishNode(e, "CatchClause"));
            }
            return (
              (t.finalizer = this.eat(67) ? this.parseBlock() : null),
              !t.handler &&
                !t.finalizer &&
                this.raise(l.NoCatchOrFinally, { at: t }),
              this.finishNode(t, "TryStatement")
            );
          }
          parseVarStatement(t, e) {
            let s =
              arguments.length > 2 && arguments[2] !== void 0
                ? arguments[2]
                : !1;
            return (
              this.next(),
              this.parseVar(t, !1, e, s),
              this.semicolon(),
              this.finishNode(t, "VariableDeclaration")
            );
          }
          parseWhileStatement(t) {
            return (
              this.next(),
              (t.test = this.parseHeaderExpression()),
              this.state.labels.push(cs),
              (t.body = this.withSmartMixTopicForbiddingContext(() =>
                this.parseStatement("while")
              )),
              this.state.labels.pop(),
              this.finishNode(t, "WhileStatement")
            );
          }
          parseWithStatement(t) {
            return (
              this.state.strict &&
                this.raise(l.StrictWith, { at: this.state.startLoc }),
              this.next(),
              (t.object = this.parseHeaderExpression()),
              (t.body = this.withSmartMixTopicForbiddingContext(() =>
                this.parseStatement("with")
              )),
              this.finishNode(t, "WithStatement")
            );
          }
          parseEmptyStatement(t) {
            return this.next(), this.finishNode(t, "EmptyStatement");
          }
          parseLabeledStatement(t, e, s, r) {
            for (let a of this.state.labels)
              a.name === e &&
                this.raise(l.LabelRedeclaration, { at: s, labelName: e });
            let i = yo(this.state.type)
              ? "loop"
              : this.match(71)
              ? "switch"
              : null;
            for (let a = this.state.labels.length - 1; a >= 0; a--) {
              let n = this.state.labels[a];
              if (n.statementStart === t.start)
                (n.statementStart = this.state.start), (n.kind = i);
              else break;
            }
            return (
              this.state.labels.push({
                name: e,
                kind: i,
                statementStart: this.state.start,
              }),
              (t.body = this.parseStatement(
                r ? (r.indexOf("label") === -1 ? r + "label" : r) : "label"
              )),
              this.state.labels.pop(),
              (t.label = s),
              this.finishNode(t, "LabeledStatement")
            );
          }
          parseExpressionStatement(t, e) {
            return (
              (t.expression = e),
              this.semicolon(),
              this.finishNode(t, "ExpressionStatement")
            );
          }
          parseBlock() {
            let t =
                arguments.length > 0 && arguments[0] !== void 0
                  ? arguments[0]
                  : !1,
              e =
                arguments.length > 1 && arguments[1] !== void 0
                  ? arguments[1]
                  : !0,
              s = arguments.length > 2 ? arguments[2] : void 0,
              r = this.startNode();
            return (
              t && this.state.strictErrors.clear(),
              this.expect(5),
              e && this.scope.enter(Ke),
              this.parseBlockBody(r, t, !1, 8, s),
              e && this.scope.exit(),
              this.finishNode(r, "BlockStatement")
            );
          }
          isValidDirective(t) {
            return (
              t.type === "ExpressionStatement" &&
              t.expression.type === "StringLiteral" &&
              !t.expression.extra.parenthesized
            );
          }
          parseBlockBody(t, e, s, r, i) {
            let a = (t.body = []),
              n = (t.directives = []);
            this.parseBlockOrModuleBlockBody(a, e ? n : void 0, s, r, i);
          }
          parseBlockOrModuleBlockBody(t, e, s, r, i) {
            let a = this.state.strict,
              n = !1,
              o = !1;
            for (; !this.match(r); ) {
              let c = this.parseStatement(null, s);
              if (e && !o) {
                if (this.isValidDirective(c)) {
                  let f = this.stmtToDirective(c);
                  e.push(f),
                    !n &&
                      f.value.value === "use strict" &&
                      ((n = !0), this.setStrict(!0));
                  continue;
                }
                (o = !0), this.state.strictErrors.clear();
              }
              t.push(c);
            }
            i && i.call(this, n), a || this.setStrict(!1), this.next();
          }
          parseFor(t, e) {
            return (
              (t.init = e),
              this.semicolon(!1),
              (t.test = this.match(13) ? null : this.parseExpression()),
              this.semicolon(!1),
              (t.update = this.match(11) ? null : this.parseExpression()),
              this.expect(11),
              (t.body = this.withSmartMixTopicForbiddingContext(() =>
                this.parseStatement("for")
              )),
              this.scope.exit(),
              this.state.labels.pop(),
              this.finishNode(t, "ForStatement")
            );
          }
          parseForIn(t, e, s) {
            let r = this.match(58);
            return (
              this.next(),
              r ? s !== null && this.unexpected(s) : (t.await = s !== null),
              e.type === "VariableDeclaration" &&
                e.declarations[0].init != null &&
                (!r ||
                  this.state.strict ||
                  e.kind !== "var" ||
                  e.declarations[0].id.type !== "Identifier") &&
                this.raise(l.ForInOfLoopInitializer, {
                  at: e,
                  type: r ? "ForInStatement" : "ForOfStatement",
                }),
              e.type === "AssignmentPattern" &&
                this.raise(l.InvalidLhs, {
                  at: e,
                  ancestor: { type: "ForStatement" },
                }),
              (t.left = e),
              (t.right = r
                ? this.parseExpression()
                : this.parseMaybeAssignAllowIn()),
              this.expect(11),
              (t.body = this.withSmartMixTopicForbiddingContext(() =>
                this.parseStatement("for")
              )),
              this.scope.exit(),
              this.state.labels.pop(),
              this.finishNode(t, r ? "ForInStatement" : "ForOfStatement")
            );
          }
          parseVar(t, e, s) {
            let r =
                arguments.length > 3 && arguments[3] !== void 0
                  ? arguments[3]
                  : !1,
              i = (t.declarations = []);
            for (t.kind = s; ; ) {
              let a = this.startNode();
              if (
                (this.parseVarId(a, s),
                (a.init = this.eat(29)
                  ? e
                    ? this.parseMaybeAssignDisallowIn()
                    : this.parseMaybeAssignAllowIn()
                  : null),
                a.init === null &&
                  !r &&
                  (a.id.type !== "Identifier" &&
                  !(e && (this.match(58) || this.isContextual(101)))
                    ? this.raise(l.DeclarationMissingInitializer, {
                        at: this.state.lastTokEndLoc,
                        kind: "destructuring",
                      })
                    : s === "const" &&
                      !(this.match(58) || this.isContextual(101)) &&
                      this.raise(l.DeclarationMissingInitializer, {
                        at: this.state.lastTokEndLoc,
                        kind: "const",
                      })),
                i.push(this.finishNode(a, "VariableDeclarator")),
                !this.eat(12))
              )
                break;
            }
            return t;
          }
          parseVarId(t, e) {
            (t.id = this.parseBindingAtom()),
              this.checkLVal(t.id, {
                in: { type: "VariableDeclarator" },
                binding: e === "var" ? yt : Te,
              });
          }
          parseFunction(t) {
            let e =
                arguments.length > 1 && arguments[1] !== void 0
                  ? arguments[1]
                  : Uh,
              s =
                arguments.length > 2 && arguments[2] !== void 0
                  ? arguments[2]
                  : !1,
              r = e & ps,
              i = e & Kr,
              a = !!r && !(e & Vr);
            this.initFunction(t, s),
              this.match(55) &&
                i &&
                this.raise(l.GeneratorInSingleStatementContext, {
                  at: this.state.startLoc,
                }),
              (t.generator = this.eat(55)),
              r && (t.id = this.parseFunctionId(a));
            let n = this.state.maybeInArrowParameters;
            return (
              (this.state.maybeInArrowParameters = !1),
              this.scope.enter(Ae),
              this.prodParam.enter(Et(s, t.generator)),
              r || (t.id = this.parseFunctionId()),
              this.parseFunctionParams(t, !1),
              this.withSmartMixTopicForbiddingContext(() => {
                this.parseFunctionBodyAndFinish(
                  t,
                  r ? "FunctionDeclaration" : "FunctionExpression"
                );
              }),
              this.prodParam.exit(),
              this.scope.exit(),
              r && !i && this.registerFunctionStatementId(t),
              (this.state.maybeInArrowParameters = n),
              t
            );
          }
          parseFunctionId(t) {
            return t || K(this.state.type) ? this.parseIdentifier() : null;
          }
          parseFunctionParams(t, e) {
            this.expect(10),
              this.expressionScope.enter(nh()),
              (t.params = this.parseBindingList(11, 41, !1, e)),
              this.expressionScope.exit();
          }
          registerFunctionStatementId(t) {
            !t.id ||
              this.scope.declareName(
                t.id.name,
                this.state.strict || t.generator || t.async
                  ? this.scope.treatFunctionsAsVar
                    ? yt
                    : Te
                  : Ar,
                t.id.loc.start
              );
          }
          parseClass(t, e, s) {
            this.next(), this.takeDecorators(t);
            let r = this.state.strict;
            return (
              (this.state.strict = !0),
              this.parseClassId(t, e, s),
              this.parseClassSuper(t),
              (t.body = this.parseClassBody(!!t.superClass, r)),
              this.finishNode(t, e ? "ClassDeclaration" : "ClassExpression")
            );
          }
          isClassProperty() {
            return this.match(29) || this.match(13) || this.match(8);
          }
          isClassMethod() {
            return this.match(10);
          }
          isNonstaticConstructor(t) {
            return (
              !t.computed &&
              !t.static &&
              (t.key.name === "constructor" || t.key.value === "constructor")
            );
          }
          parseClassBody(t, e) {
            this.classScope.enter();
            let s = { hadConstructor: !1, hadSuperClass: t },
              r = [],
              i = this.startNode();
            if (
              ((i.body = []),
              this.expect(5),
              this.withSmartMixTopicForbiddingContext(() => {
                for (; !this.match(8); ) {
                  if (this.eat(13)) {
                    if (r.length > 0)
                      throw this.raise(l.DecoratorSemicolon, {
                        at: this.state.lastTokEndLoc,
                      });
                    continue;
                  }
                  if (this.match(26)) {
                    r.push(this.parseDecorator());
                    continue;
                  }
                  let a = this.startNode();
                  r.length &&
                    ((a.decorators = r),
                    this.resetStartLocationFromNode(a, r[0]),
                    (r = [])),
                    this.parseClassMember(i, a, s),
                    a.kind === "constructor" &&
                      a.decorators &&
                      a.decorators.length > 0 &&
                      this.raise(l.DecoratorConstructor, { at: a });
                }
              }),
              (this.state.strict = e),
              this.next(),
              r.length)
            )
              throw this.raise(l.TrailingDecorator, {
                at: this.state.startLoc,
              });
            return this.classScope.exit(), this.finishNode(i, "ClassBody");
          }
          parseClassMemberFromModifier(t, e) {
            let s = this.parseIdentifier(!0);
            if (this.isClassMethod()) {
              let r = e;
              return (
                (r.kind = "method"),
                (r.computed = !1),
                (r.key = s),
                (r.static = !1),
                this.pushClassMethod(t, r, !1, !1, !1, !1),
                !0
              );
            } else if (this.isClassProperty()) {
              let r = e;
              return (
                (r.computed = !1),
                (r.key = s),
                (r.static = !1),
                t.body.push(this.parseClassProperty(r)),
                !0
              );
            }
            return this.resetPreviousNodeTrailingComments(s), !1;
          }
          parseClassMember(t, e, s) {
            let r = this.isContextual(104);
            if (r) {
              if (this.parseClassMemberFromModifier(t, e)) return;
              if (this.eat(5)) {
                this.parseClassStaticBlock(t, e);
                return;
              }
            }
            this.parseClassMemberWithIsStatic(t, e, s, r);
          }
          parseClassMemberWithIsStatic(t, e, s, r) {
            let i = e,
              a = e,
              n = e,
              o = e,
              c = e,
              f = i,
              y = i;
            if (
              ((e.static = r),
              this.parsePropertyNamePrefixOperator(e),
              this.eat(55))
            ) {
              f.kind = "method";
              let z = this.match(134);
              if ((this.parseClassElementName(f), z)) {
                this.pushClassPrivateMethod(t, a, !0, !1);
                return;
              }
              this.isNonstaticConstructor(i) &&
                this.raise(l.ConstructorIsGenerator, { at: i.key }),
                this.pushClassMethod(t, i, !0, !1, !1, !1);
              return;
            }
            let T = K(this.state.type) && !this.state.containsEsc,
              v = this.match(134),
              N = this.parseClassElementName(e),
              R = this.state.startLoc;
            if ((this.parsePostMemberNameModifiers(y), this.isClassMethod())) {
              if (((f.kind = "method"), v)) {
                this.pushClassPrivateMethod(t, a, !1, !1);
                return;
              }
              let z = this.isNonstaticConstructor(i),
                te = !1;
              z &&
                ((i.kind = "constructor"),
                s.hadConstructor &&
                  !this.hasPlugin("typescript") &&
                  this.raise(l.DuplicateConstructor, { at: N }),
                z &&
                  this.hasPlugin("typescript") &&
                  e.override &&
                  this.raise(l.OverrideOnConstructor, { at: N }),
                (s.hadConstructor = !0),
                (te = s.hadSuperClass)),
                this.pushClassMethod(t, i, !1, !1, z, te);
            } else if (this.isClassProperty())
              v
                ? this.pushClassPrivateProperty(t, o)
                : this.pushClassProperty(t, n);
            else if (T && N.name === "async" && !this.isLineTerminator()) {
              this.resetPreviousNodeTrailingComments(N);
              let z = this.eat(55);
              y.optional && this.unexpected(R), (f.kind = "method");
              let te = this.match(134);
              this.parseClassElementName(f),
                this.parsePostMemberNameModifiers(y),
                te
                  ? this.pushClassPrivateMethod(t, a, z, !0)
                  : (this.isNonstaticConstructor(i) &&
                      this.raise(l.ConstructorIsAsync, { at: i.key }),
                    this.pushClassMethod(t, i, z, !0, !1, !1));
            } else if (
              T &&
              (N.name === "get" || N.name === "set") &&
              !(this.match(55) && this.isLineTerminator())
            ) {
              this.resetPreviousNodeTrailingComments(N), (f.kind = N.name);
              let z = this.match(134);
              this.parseClassElementName(i),
                z
                  ? this.pushClassPrivateMethod(t, a, !1, !1)
                  : (this.isNonstaticConstructor(i) &&
                      this.raise(l.ConstructorIsAccessor, { at: i.key }),
                    this.pushClassMethod(t, i, !1, !1, !1, !1)),
                this.checkGetterSetterParams(i);
            } else if (T && N.name === "accessor" && !this.isLineTerminator()) {
              this.expectPlugin("decoratorAutoAccessors"),
                this.resetPreviousNodeTrailingComments(N);
              let z = this.match(134);
              this.parseClassElementName(n),
                this.pushClassAccessorProperty(t, c, z);
            } else
              this.isLineTerminator()
                ? v
                  ? this.pushClassPrivateProperty(t, o)
                  : this.pushClassProperty(t, n)
                : this.unexpected();
          }
          parseClassElementName(t) {
            let { type: e, value: s } = this.state;
            if (
              ((e === 128 || e === 129) &&
                t.static &&
                s === "prototype" &&
                this.raise(l.StaticPrototype, { at: this.state.startLoc }),
              e === 134)
            ) {
              s === "constructor" &&
                this.raise(l.ConstructorClassPrivateField, {
                  at: this.state.startLoc,
                });
              let r = this.parsePrivateName();
              return (t.key = r), r;
            }
            return this.parsePropertyName(t);
          }
          parseClassStaticBlock(t, e) {
            var s;
            this.scope.enter(Fe | Jt | ct);
            let r = this.state.labels;
            (this.state.labels = []), this.prodParam.enter(He);
            let i = (e.body = []);
            this.parseBlockOrModuleBlockBody(i, void 0, !1, 8),
              this.prodParam.exit(),
              this.scope.exit(),
              (this.state.labels = r),
              t.body.push(this.finishNode(e, "StaticBlock")),
              (s = e.decorators) != null &&
                s.length &&
                this.raise(l.DecoratorStaticBlock, { at: e });
          }
          pushClassProperty(t, e) {
            !e.computed &&
              (e.key.name === "constructor" || e.key.value === "constructor") &&
              this.raise(l.ConstructorClassField, { at: e.key }),
              t.body.push(this.parseClassProperty(e));
          }
          pushClassPrivateProperty(t, e) {
            let s = this.parseClassPrivateProperty(e);
            t.body.push(s),
              this.classScope.declarePrivateName(
                this.getPrivateNameSV(s.key),
                rs,
                s.key.loc.start
              );
          }
          pushClassAccessorProperty(t, e, s) {
            if (!s && !e.computed) {
              let i = e.key;
              (i.name === "constructor" || i.value === "constructor") &&
                this.raise(l.ConstructorClassField, { at: i });
            }
            let r = this.parseClassAccessorProperty(e);
            t.body.push(r),
              s &&
                this.classScope.declarePrivateName(
                  this.getPrivateNameSV(r.key),
                  rs,
                  r.key.loc.start
                );
          }
          pushClassMethod(t, e, s, r, i, a) {
            t.body.push(this.parseMethod(e, s, r, i, a, "ClassMethod", !0));
          }
          pushClassPrivateMethod(t, e, s, r) {
            let i = this.parseMethod(e, s, r, !1, !1, "ClassPrivateMethod", !0);
            t.body.push(i);
            let a =
              i.kind === "get"
                ? i.static
                  ? Uo
                  : zo
                : i.kind === "set"
                ? i.static
                  ? _o
                  : Ko
                : rs;
            this.declareClassPrivateMethodInScope(i, a);
          }
          declareClassPrivateMethodInScope(t, e) {
            this.classScope.declarePrivateName(
              this.getPrivateNameSV(t.key),
              e,
              t.key.loc.start
            );
          }
          parsePostMemberNameModifiers(t) {}
          parseClassPrivateProperty(t) {
            return (
              this.parseInitializer(t),
              this.semicolon(),
              this.finishNode(t, "ClassPrivateProperty")
            );
          }
          parseClassProperty(t) {
            return (
              this.parseInitializer(t),
              this.semicolon(),
              this.finishNode(t, "ClassProperty")
            );
          }
          parseClassAccessorProperty(t) {
            return (
              this.parseInitializer(t),
              this.semicolon(),
              this.finishNode(t, "ClassAccessorProperty")
            );
          }
          parseInitializer(t) {
            this.scope.enter(Fe | ct),
              this.expressionScope.enter(Ir()),
              this.prodParam.enter(He),
              (t.value = this.eat(29) ? this.parseMaybeAssignAllowIn() : null),
              this.expressionScope.exit(),
              this.prodParam.exit(),
              this.scope.exit();
          }
          parseClassId(t, e, s) {
            let r =
              arguments.length > 3 && arguments[3] !== void 0
                ? arguments[3]
                : gr;
            if (K(this.state.type))
              (t.id = this.parseIdentifier()),
                e && this.declareNameFromIdentifier(t.id, r);
            else if (s || !e) t.id = null;
            else
              throw this.raise(l.MissingClassName, { at: this.state.startLoc });
          }
          parseClassSuper(t) {
            t.superClass = this.eat(81) ? this.parseExprSubscripts() : null;
          }
          parseExport(t) {
            let e = this.maybeParseExportDefaultSpecifier(t),
              s = !e || this.eat(12),
              r = s && this.eatExportStar(t),
              i = r && this.maybeParseExportNamespaceSpecifier(t),
              a = s && (!i || this.eat(12)),
              n = e || r;
            if (r && !i)
              return (
                e && this.unexpected(),
                this.parseExportFrom(t, !0),
                this.finishNode(t, "ExportAllDeclaration")
              );
            let o = this.maybeParseExportNamedSpecifiers(t);
            if ((e && s && !r && !o) || (i && a && !o))
              throw this.unexpected(null, 5);
            let c;
            if (
              (n || o
                ? ((c = !1), this.parseExportFrom(t, n))
                : (c = this.maybeParseExportDeclaration(t)),
              n || o || c)
            )
              return (
                this.checkExport(t, !0, !1, !!t.source),
                this.finishNode(t, "ExportNamedDeclaration")
              );
            if (this.eat(65))
              return (
                (t.declaration = this.parseExportDefaultExpression()),
                this.checkExport(t, !0, !0),
                this.finishNode(t, "ExportDefaultDeclaration")
              );
            throw this.unexpected(null, 5);
          }
          eatExportStar(t) {
            return this.eat(55);
          }
          maybeParseExportDefaultSpecifier(t) {
            if (this.isExportDefaultSpecifier()) {
              this.expectPlugin("exportDefaultFrom");
              let e = this.startNode();
              return (
                (e.exported = this.parseIdentifier(!0)),
                (t.specifiers = [this.finishNode(e, "ExportDefaultSpecifier")]),
                !0
              );
            }
            return !1;
          }
          maybeParseExportNamespaceSpecifier(t) {
            if (this.isContextual(93)) {
              t.specifiers || (t.specifiers = []);
              let e = this.startNodeAt(
                this.state.lastTokStart,
                this.state.lastTokStartLoc
              );
              return (
                this.next(),
                (e.exported = this.parseModuleExportName()),
                t.specifiers.push(
                  this.finishNode(e, "ExportNamespaceSpecifier")
                ),
                !0
              );
            }
            return !1;
          }
          maybeParseExportNamedSpecifiers(t) {
            if (this.match(5)) {
              t.specifiers || (t.specifiers = []);
              let e = t.exportKind === "type";
              return (
                t.specifiers.push(...this.parseExportSpecifiers(e)),
                (t.source = null),
                (t.declaration = null),
                this.hasPlugin("importAssertions") && (t.assertions = []),
                !0
              );
            }
            return !1;
          }
          maybeParseExportDeclaration(t) {
            return this.shouldParseExportDeclaration()
              ? ((t.specifiers = []),
                (t.source = null),
                this.hasPlugin("importAssertions") && (t.assertions = []),
                (t.declaration = this.parseExportDeclaration(t)),
                !0)
              : !1;
          }
          isAsyncFunction() {
            if (!this.isContextual(95)) return !1;
            let t = this.nextTokenStart();
            return (
              !is.test(this.input.slice(this.state.pos, t)) &&
              this.isUnparsedContextual(t, "function")
            );
          }
          parseExportDefaultExpression() {
            let t = this.startNode(),
              e = this.isAsyncFunction();
            if (this.match(68) || e)
              return (
                this.next(), e && this.next(), this.parseFunction(t, ps | Vr, e)
              );
            if (this.match(80)) return this.parseClass(t, !0, !0);
            if (this.match(26))
              return (
                this.hasPlugin("decorators") &&
                  this.getPluginOption(
                    "decorators",
                    "decoratorsBeforeExport"
                  ) &&
                  this.raise(l.DecoratorBeforeExport, {
                    at: this.state.startLoc,
                  }),
                this.parseDecorators(!1),
                this.parseClass(t, !0, !0)
              );
            if (this.match(75) || this.match(74) || this.isLet())
              throw this.raise(l.UnsupportedDefaultExport, {
                at: this.state.startLoc,
              });
            let s = this.parseMaybeAssignAllowIn();
            return this.semicolon(), s;
          }
          parseExportDeclaration(t) {
            return this.parseStatement(null);
          }
          isExportDefaultSpecifier() {
            let { type: t } = this.state;
            if (K(t)) {
              if ((t === 95 && !this.state.containsEsc) || t === 99) return !1;
              if ((t === 126 || t === 125) && !this.state.containsEsc) {
                let { type: r } = this.lookahead();
                if ((K(r) && r !== 97) || r === 5)
                  return this.expectOnePlugin(["flow", "typescript"]), !1;
              }
            } else if (!this.match(65)) return !1;
            let e = this.nextTokenStart(),
              s = this.isUnparsedContextual(e, "from");
            if (this.input.charCodeAt(e) === 44 || (K(this.state.type) && s))
              return !0;
            if (this.match(65) && s) {
              let r = this.input.charCodeAt(this.nextTokenStartSince(e + 4));
              return r === 34 || r === 39;
            }
            return !1;
          }
          parseExportFrom(t, e) {
            if (this.eatContextual(97)) {
              (t.source = this.parseImportSource()), this.checkExport(t);
              let s = this.maybeParseImportAssertions();
              s && (t.assertions = s);
            } else e && this.unexpected();
            this.semicolon();
          }
          shouldParseExportDeclaration() {
            let { type: t } = this.state;
            if (
              t === 26 &&
              (this.expectOnePlugin(["decorators", "decorators-legacy"]),
              this.hasPlugin("decorators"))
            ) {
              if (this.getPluginOption("decorators", "decoratorsBeforeExport"))
                throw this.raise(l.DecoratorBeforeExport, {
                  at: this.state.startLoc,
                });
              return !0;
            }
            return (
              t === 74 ||
              t === 75 ||
              t === 68 ||
              t === 80 ||
              this.isLet() ||
              this.isAsyncFunction()
            );
          }
          checkExport(t, e, s, r) {
            if (e) {
              if (s) {
                if (
                  (this.checkDuplicateExports(t, "default"),
                  this.hasPlugin("exportDefaultFrom"))
                ) {
                  var i;
                  let n = t.declaration;
                  n.type === "Identifier" &&
                    n.name === "from" &&
                    n.end - n.start === 4 &&
                    !((i = n.extra) != null && i.parenthesized) &&
                    this.raise(l.ExportDefaultFromAsIdentifier, { at: n });
                }
              } else if (t.specifiers && t.specifiers.length)
                for (let n of t.specifiers) {
                  let { exported: o } = n,
                    c = o.type === "Identifier" ? o.name : o.value;
                  if ((this.checkDuplicateExports(n, c), !r && n.local)) {
                    let { local: f } = n;
                    f.type !== "Identifier"
                      ? this.raise(l.ExportBindingIsString, {
                          at: n,
                          localName: f.value,
                          exportName: c,
                        })
                      : (this.checkReservedWord(f.name, f.loc.start, !0, !1),
                        this.scope.checkLocalExport(f));
                  }
                }
              else if (t.declaration) {
                if (
                  t.declaration.type === "FunctionDeclaration" ||
                  t.declaration.type === "ClassDeclaration"
                ) {
                  let n = t.declaration.id;
                  if (!n) throw new Error("Assertion failure");
                  this.checkDuplicateExports(t, n.name);
                } else if (t.declaration.type === "VariableDeclaration")
                  for (let n of t.declaration.declarations)
                    this.checkDeclaration(n.id);
              }
            }
            if (
              this.state.decoratorStack[this.state.decoratorStack.length - 1]
                .length
            )
              throw this.raise(l.UnsupportedDecoratorExport, { at: t });
          }
          checkDeclaration(t) {
            if (t.type === "Identifier") this.checkDuplicateExports(t, t.name);
            else if (t.type === "ObjectPattern")
              for (let e of t.properties) this.checkDeclaration(e);
            else if (t.type === "ArrayPattern")
              for (let e of t.elements) e && this.checkDeclaration(e);
            else
              t.type === "ObjectProperty"
                ? this.checkDeclaration(t.value)
                : t.type === "RestElement"
                ? this.checkDeclaration(t.argument)
                : t.type === "AssignmentPattern" &&
                  this.checkDeclaration(t.left);
          }
          checkDuplicateExports(t, e) {
            this.exportedIdentifiers.has(e) &&
              (e === "default"
                ? this.raise(l.DuplicateDefaultExport, { at: t })
                : this.raise(l.DuplicateExport, { at: t, exportName: e })),
              this.exportedIdentifiers.add(e);
          }
          parseExportSpecifiers(t) {
            let e = [],
              s = !0;
            for (this.expect(5); !this.eat(8); ) {
              if (s) s = !1;
              else if ((this.expect(12), this.eat(8))) break;
              let r = this.isContextual(126),
                i = this.match(129),
                a = this.startNode();
              (a.local = this.parseModuleExportName()),
                e.push(this.parseExportSpecifier(a, i, t, r));
            }
            return e;
          }
          parseExportSpecifier(t, e, s, r) {
            return (
              this.eatContextual(93)
                ? (t.exported = this.parseModuleExportName())
                : e
                ? (t.exported = ph(t.local))
                : t.exported || (t.exported = Ee(t.local)),
              this.finishNode(t, "ExportSpecifier")
            );
          }
          parseModuleExportName() {
            if (this.match(129)) {
              let t = this.parseStringLiteral(this.state.value),
                e = t.value.match(_h);
              return (
                e &&
                  this.raise(l.ModuleExportNameHasLoneSurrogate, {
                    at: t,
                    surrogateCharCode: e[0].charCodeAt(0),
                  }),
                t
              );
            }
            return this.parseIdentifier(!0);
          }
          parseImport(t) {
            if (((t.specifiers = []), !this.match(129))) {
              let r = !this.maybeParseDefaultImportSpecifier(t) || this.eat(12),
                i = r && this.maybeParseStarImportSpecifier(t);
              r && !i && this.parseNamedImportSpecifiers(t),
                this.expectContextual(97);
            }
            t.source = this.parseImportSource();
            let e = this.maybeParseImportAssertions();
            if (e) t.assertions = e;
            else {
              let s = this.maybeParseModuleAttributes();
              s && (t.attributes = s);
            }
            return this.semicolon(), this.finishNode(t, "ImportDeclaration");
          }
          parseImportSource() {
            return this.match(129) || this.unexpected(), this.parseExprAtom();
          }
          shouldParseDefaultImport(t) {
            return K(this.state.type);
          }
          parseImportSpecifierLocal(t, e, s) {
            (e.local = this.parseIdentifier()),
              t.specifiers.push(this.finishImportSpecifier(e, s));
          }
          finishImportSpecifier(t, e) {
            return (
              this.checkLVal(t.local, { in: t, binding: Te }),
              this.finishNode(t, e)
            );
          }
          parseAssertEntries() {
            let t = [],
              e = new Set();
            do {
              if (this.match(8)) break;
              let s = this.startNode(),
                r = this.state.value;
              if (
                (e.has(r) &&
                  this.raise(l.ModuleAttributesWithDuplicateKeys, {
                    at: this.state.startLoc,
                    key: r,
                  }),
                e.add(r),
                this.match(129)
                  ? (s.key = this.parseStringLiteral(r))
                  : (s.key = this.parseIdentifier(!0)),
                this.expect(14),
                !this.match(129))
              )
                throw this.raise(l.ModuleAttributeInvalidValue, {
                  at: this.state.startLoc,
                });
              (s.value = this.parseStringLiteral(this.state.value)),
                this.finishNode(s, "ImportAttribute"),
                t.push(s);
            } while (this.eat(12));
            return t;
          }
          maybeParseModuleAttributes() {
            if (this.match(76) && !this.hasPrecedingLineBreak())
              this.expectPlugin("moduleAttributes"), this.next();
            else return this.hasPlugin("moduleAttributes") ? [] : null;
            let t = [],
              e = new Set();
            do {
              let s = this.startNode();
              if (
                ((s.key = this.parseIdentifier(!0)),
                s.key.name !== "type" &&
                  this.raise(l.ModuleAttributeDifferentFromType, { at: s.key }),
                e.has(s.key.name) &&
                  this.raise(l.ModuleAttributesWithDuplicateKeys, {
                    at: s.key,
                    key: s.key.name,
                  }),
                e.add(s.key.name),
                this.expect(14),
                !this.match(129))
              )
                throw this.raise(l.ModuleAttributeInvalidValue, {
                  at: this.state.startLoc,
                });
              (s.value = this.parseStringLiteral(this.state.value)),
                this.finishNode(s, "ImportAttribute"),
                t.push(s);
            } while (this.eat(12));
            return t;
          }
          maybeParseImportAssertions() {
            if (this.isContextual(94) && !this.hasPrecedingLineBreak())
              this.expectPlugin("importAssertions"), this.next();
            else return this.hasPlugin("importAssertions") ? [] : null;
            this.eat(5);
            let t = this.parseAssertEntries();
            return this.eat(8), t;
          }
          maybeParseDefaultImportSpecifier(t) {
            return this.shouldParseDefaultImport(t)
              ? (this.parseImportSpecifierLocal(
                  t,
                  this.startNode(),
                  "ImportDefaultSpecifier"
                ),
                !0)
              : !1;
          }
          maybeParseStarImportSpecifier(t) {
            if (this.match(55)) {
              let e = this.startNode();
              return (
                this.next(),
                this.expectContextual(93),
                this.parseImportSpecifierLocal(
                  t,
                  e,
                  "ImportNamespaceSpecifier"
                ),
                !0
              );
            }
            return !1;
          }
          parseNamedImportSpecifiers(t) {
            let e = !0;
            for (this.expect(5); !this.eat(8); ) {
              if (e) e = !1;
              else {
                if (this.eat(14))
                  throw this.raise(l.DestructureNamedImport, {
                    at: this.state.startLoc,
                  });
                if ((this.expect(12), this.eat(8))) break;
              }
              let s = this.startNode(),
                r = this.match(129),
                i = this.isContextual(126);
              s.imported = this.parseModuleExportName();
              let a = this.parseImportSpecifier(
                s,
                r,
                t.importKind === "type" || t.importKind === "typeof",
                i
              );
              t.specifiers.push(a);
            }
          }
          parseImportSpecifier(t, e, s, r) {
            if (this.eatContextual(93)) t.local = this.parseIdentifier();
            else {
              let { imported: i } = t;
              if (e)
                throw this.raise(l.ImportBindingIsString, {
                  at: t,
                  importName: i.value,
                });
              this.checkReservedWord(i.name, t.loc.start, !0, !0),
                t.local || (t.local = Ee(i));
            }
            return this.finishImportSpecifier(t, "ImportSpecifier");
          }
          isThisParam(t) {
            return t.type === "Identifier" && t.name === "this";
          }
        },
        Hr = class extends Kh {
          constructor(t, e) {
            (t = Bh(t)),
              super(t, e),
              (this.options = t),
              this.initializeScopes(),
              (this.plugins = Vh(this.options.plugins)),
              (this.filename = t.sourceFilename);
          }
          getScopeHandler() {
            return os;
          }
          parse() {
            this.enterInitialScopes();
            let t = this.startNode(),
              e = this.startNode();
            return (
              this.nextToken(),
              (t.errors = null),
              this.parseTopLevel(t, e),
              (t.errors = this.state.errors),
              t
            );
          }
        };
      function Vh(t) {
        let e = new Map();
        for (let s of t) {
          let [r, i] = Array.isArray(s) ? s : [s, {}];
          e.has(r) || e.set(r, i || {});
        }
        return e;
      }
      function Hh(t, e) {
        var s;
        if (((s = e) == null ? void 0 : s.sourceType) === "unambiguous") {
          e = Object.assign({}, e);
          try {
            e.sourceType = "module";
            let r = tt(e, t),
              i = r.parse();
            if (r.sawUnambiguousESM) return i;
            if (r.ambiguousScriptDifferentAst)
              try {
                return (e.sourceType = "script"), tt(e, t).parse();
              } catch {}
            else i.program.sourceType = "script";
            return i;
          } catch (r) {
            try {
              return (e.sourceType = "script"), tt(e, t).parse();
            } catch {}
            throw r;
          }
        } else return tt(e, t).parse();
      }
      function Wh(t, e) {
        let s = tt(e, t);
        return s.options.strictMode && (s.state.strict = !0), s.getExpression();
      }
      function Gh(t) {
        let e = {};
        for (let s of Object.keys(t)) e[s] = xe(t[s]);
        return e;
      }
      var Xh = Gh(co);
      function tt(t, e) {
        let s = Hr;
        return (
          t != null && t.plugins && (Lh(t.plugins), (s = Jh(t.plugins))),
          new s(t, e)
        );
      }
      var Wr = {};
      function Jh(t) {
        let e = Oh.filter((i) => se(t, i)),
          s = e.join("/"),
          r = Wr[s];
        if (!r) {
          r = Hr;
          for (let i of e) r = Ur[i](r);
          Wr[s] = r;
        }
        return r;
      }
      (h.parse = Hh), (h.parseExpression = Wh), (h.tokTypes = Xh);
    },
  }),
  hf = W({
    "src/language-js/parse/json.js"(h, u) {
      "use strict";
      H();
      var p = io(),
        d = ar(),
        m = no(),
        x = oo();
      function A() {
        let C =
            arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {},
          { allowComments: M = !0 } = C;
        return function (k) {
          let { parseExpression: G } = uo(),
            Z;
          try {
            Z = G(k, { tokens: !0, ranges: !0 });
          } catch (B) {
            throw x(B);
          }
          if (!M && p(Z.comments)) throw g(Z.comments[0], "Comment");
          return E(Z), Z;
        };
      }
      function g(C, M) {
        let [L, k] = [C.loc.start, C.loc.end].map((G) => {
          let { line: Z, column: B } = G;
          return { line: Z, column: B + 1 };
        });
        return d("".concat(M, " is not allowed in JSON."), {
          start: L,
          end: k,
        });
      }
      function E(C) {
        switch (C.type) {
          case "ArrayExpression":
            for (let M of C.elements) M !== null && E(M);
            return;
          case "ObjectExpression":
            for (let M of C.properties) E(M);
            return;
          case "ObjectProperty":
            if (C.computed) throw g(C.key, "Computed key");
            if (C.shorthand) throw g(C.key, "Shorthand property");
            C.key.type !== "Identifier" && E(C.key), E(C.value);
            return;
          case "UnaryExpression": {
            let { operator: M, argument: L } = C;
            if (M !== "+" && M !== "-")
              throw g(C, "Operator '".concat(C.operator, "'"));
            if (
              L.type === "NumericLiteral" ||
              (L.type === "Identifier" &&
                (L.name === "Infinity" || L.name === "NaN"))
            )
              return;
            throw g(
              L,
              "Operator '".concat(M, "' before '").concat(L.type, "'")
            );
          }
          case "Identifier":
            if (
              C.name !== "Infinity" &&
              C.name !== "NaN" &&
              C.name !== "undefined"
            )
              throw g(C, "Identifier '".concat(C.name, "'"));
            return;
          case "TemplateLiteral":
            if (p(C.expressions))
              throw g(C.expressions[0], "'TemplateLiteral' with expression");
            for (let M of C.quasis) E(M);
            return;
          case "NullLiteral":
          case "BooleanLiteral":
          case "NumericLiteral":
          case "StringLiteral":
          case "TemplateElement":
            return;
          default:
            throw g(C, "'".concat(C.type, "'"));
        }
      }
      var F = A(),
        D = {
          json: m({
            parse: F,
            hasPragma() {
              return !0;
            },
          }),
          json5: m(F),
          "json-stringify": m({
            parse: A({ allowComments: !1 }),
            astFormat: "estree-json",
          }),
        };
      u.exports = D;
    },
  }),
  lf = W({
    "src/language-js/parse/babel.js"(h, u) {
      H();
      var p = zp(),
        d = Kn(),
        m = Wp(),
        x = no(),
        A = oo(),
        g = of(),
        E = hf(),
        F = {
          sourceType: "module",
          allowImportExportEverywhere: !0,
          allowReturnOutsideFunction: !0,
          allowSuperOutsideMethod: !0,
          allowUndeclaredExports: !0,
          errorRecovery: !0,
          createParenthesizedExpressions: !0,
          plugins: [
            "doExpressions",
            "exportDefaultFrom",
            "functionBind",
            "functionSent",
            "throwExpressions",
            "partialApplication",
            ["decorators", { decoratorsBeforeExport: !1 }],
            "importAssertions",
            "decimal",
            "moduleBlocks",
            "asyncDoExpressions",
            "regexpUnicodeSets",
            "destructuringPrivate",
            "decoratorAutoAccessors",
          ],
          tokens: !0,
          ranges: !0,
        },
        D = ["recordAndTuple", { syntaxType: "hash" }],
        C = "v8intrinsic",
        M = [
          ["pipelineOperator", { proposal: "hack", topicToken: "%" }],
          ["pipelineOperator", { proposal: "minimal" }],
          ["pipelineOperator", { proposal: "fsharp" }],
        ],
        L = function (V) {
          let $ =
            arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : F;
          return Object.assign(
            Object.assign({}, $),
            {},
            { plugins: [...$.plugins, ...V] }
          );
        },
        k = /@(?:no)?flow\b/;
      function G(V, $) {
        if ($.filepath && $.filepath.endsWith(".js.flow")) return !0;
        let me = d(V);
        me && (V = V.slice(me.length));
        let ce = m(V, 0);
        return ce !== !1 && (V = V.slice(0, ce)), k.test(V);
      }
      function Z(V, $, me) {
        let ae = uo()[V]($, me),
          q = ae.errors.find((X) => !ee.has(X.reasonCode));
        if (q) throw q;
        return ae;
      }
      function B(V) {
        for (
          var $ = arguments.length, me = new Array($ > 1 ? $ - 1 : 0), ce = 1;
          ce < $;
          ce++
        )
          me[ce - 1] = arguments[ce];
        return function (ae, q) {
          let X =
            arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
          if (
            (X.parser === "babel" || X.parser === "__babel_estree") &&
            G(ae, X)
          )
            return (X.parser = "babel-flow"), l(ae, q, X);
          let re = me;
          X.__babelSourceType === "script" &&
            (re = re.map((oe) =>
              Object.assign(Object.assign({}, oe), {}, { sourceType: "script" })
            )),
            /#[[{]/.test(ae) && (re = re.map((oe) => L([D], oe)));
          let ne = /%[A-Z]/.test(ae);
          ae.includes("|>")
            ? (re = (ne ? [...M, C] : M).flatMap((Je) =>
                re.map((Ye) => L([Je], Ye))
              ))
            : ne && (re = re.map((oe) => L([C], oe)));
          let { result: Ue, error: _e } = p(
            ...re.map((oe) => () => Z(V, ae, oe))
          );
          if (!Ue) throw A(_e);
          return (X.originalText = ae), g(Ue, X);
        };
      }
      var j = B("parse", L(["jsx", "flow"])),
        l = B("parse", L(["jsx", ["flow", { all: !0, enums: !0 }]])),
        Y = B("parse", L(["jsx", "typescript"]), L(["typescript"])),
        ie = B("parse", L(["jsx", "flow", "estree"])),
        Q = B("parseExpression", L(["jsx"])),
        Ce = B("parseExpression", L(["typescript"])),
        ee = new Set([
          "StrictNumericEscape",
          "StrictWith",
          "StrictOctalLiteral",
          "StrictDelete",
          "StrictEvalArguments",
          "StrictEvalArgumentsBinding",
          "StrictFunction",
          "EmptyTypeArguments",
          "EmptyTypeParameters",
          "ConstructorHasTypeParameters",
          "UnsupportedParameterPropertyKind",
          "UnexpectedParameterModifier",
          "MixedLabeledAndUnlabeledElements",
          "InvalidTupleMemberLabel",
          "NonClassMethodPropertyHasAbstractModifer",
          "ReadonlyForMethodSignature",
          "ClassMethodHasDeclare",
          "ClassMethodHasReadonly",
          "InvalidModifierOnTypeMember",
          "DuplicateAccessibilityModifier",
          "IndexSignatureHasDeclare",
          "DecoratorExportClass",
          "ParamDupe",
          "InvalidDecimal",
          "RestTrailingComma",
          "UnsupportedParameterDecorator",
          "UnterminatedJsxContent",
          "UnexpectedReservedWord",
          "ModuleAttributesWithDuplicateKeys",
          "LineTerminatorBeforeArrow",
          "InvalidEscapeSequenceTemplate",
          "NonAbstractClassHasAbstractMethod",
          "UnsupportedPropertyDecorator",
          "OptionalTypeBeforeRequired",
          "PatternIsOptional",
          "OptionalBindingPattern",
          "DeclareClassFieldHasInitializer",
          "TypeImportCannotSpecifyDefaultAndNamed",
          "DeclareFunctionHasImplementation",
          "ConstructorClassField",
          "VarRedeclaration",
          "InvalidPrivateFieldResolution",
          "DuplicateExport",
        ]),
        U = x(j),
        O = x(Y),
        P = x(Q),
        De = x(Ce);
      u.exports = {
        parsers: Object.assign(
          Object.assign({ babel: U, "babel-flow": x(l), "babel-ts": O }, E),
          {},
          {
            __js_expression: P,
            __vue_expression: P,
            __vue_ts_expression: De,
            __vue_event_binding: U,
            __vue_ts_event_binding: O,
            __babel_estree: x(ie),
          }
        ),
      };
    },
  }),
  Fd = lf();
  require.addMod("@prettier/parserBabel",{
      parserBabel:Fd
  });
})();
