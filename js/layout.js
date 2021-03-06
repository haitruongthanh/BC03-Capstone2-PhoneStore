/*! jQuery v3.6.0 | (c) OpenJS Foundation and other contributors | jquery.org/license */
!(function (e, t) {
  "use strict";
  "object" == typeof module && "object" == typeof module.exports
    ? (module.exports = e.document
        ? t(e, !0)
        : function (e) {
            if (!e.document)
              throw new Error("jQuery requires a window with a document");
            return t(e);
          })
    : t(e);
})("undefined" != typeof window ? window : this, function (C, e) {
  "use strict";
  var t = [],
    r = Object.getPrototypeOf,
    s = t.slice,
    g = t.flat
      ? function (e) {
          return t.flat.call(e);
        }
      : function (e) {
          return t.concat.apply([], e);
        },
    u = t.push,
    i = t.indexOf,
    n = {},
    o = n.toString,
    v = n.hasOwnProperty,
    a = v.toString,
    l = a.call(Object),
    y = {},
    m = function (e) {
      return (
        "function" == typeof e &&
        "number" != typeof e.nodeType &&
        "function" != typeof e.item
      );
    },
    x = function (e) {
      return null != e && e === e.window;
    },
    E = C.document,
    c = { type: !0, src: !0, nonce: !0, noModule: !0 };
  function b(e, t, n) {
    var r,
      i,
      o = (n = n || E).createElement("script");
    if (((o.text = e), t))
      for (r in c)
        (i = t[r] || (t.getAttribute && t.getAttribute(r))) &&
          o.setAttribute(r, i);
    n.head.appendChild(o).parentNode.removeChild(o);
  }
  function w(e) {
    return null == e
      ? e + ""
      : "object" == typeof e || "function" == typeof e
      ? n[o.call(e)] || "object"
      : typeof e;
  }
  var f = "3.6.0",
    S = function (e, t) {
      return new S.fn.init(e, t);
    };
  function p(e) {
    var t = !!e && "length" in e && e.length,
      n = w(e);
    return (
      !m(e) &&
      !x(e) &&
      ("array" === n ||
        0 === t ||
        ("number" == typeof t && 0 < t && t - 1 in e))
    );
  }
  (S.fn = S.prototype =
    {
      jquery: f,
      constructor: S,
      length: 0,
      toArray: function () {
        return s.call(this);
      },
      get: function (e) {
        return null == e
          ? s.call(this)
          : e < 0
          ? this[e + this.length]
          : this[e];
      },
      pushStack: function (e) {
        var t = S.merge(this.constructor(), e);
        return (t.prevObject = this), t;
      },
      each: function (e) {
        return S.each(this, e);
      },
      map: function (n) {
        return this.pushStack(
          S.map(this, function (e, t) {
            return n.call(e, t, e);
          })
        );
      },
      slice: function () {
        return this.pushStack(s.apply(this, arguments));
      },
      first: function () {
        return this.eq(0);
      },
      last: function () {
        return this.eq(-1);
      },
      even: function () {
        return this.pushStack(
          S.grep(this, function (e, t) {
            return (t + 1) % 2;
          })
        );
      },
      odd: function () {
        return this.pushStack(
          S.grep(this, function (e, t) {
            return t % 2;
          })
        );
      },
      eq: function (e) {
        var t = this.length,
          n = +e + (e < 0 ? t : 0);
        return this.pushStack(0 <= n && n < t ? [this[n]] : []);
      },
      end: function () {
        return this.prevObject || this.constructor();
      },
      push: u,
      sort: t.sort,
      splice: t.splice,
    }),
    (S.extend = S.fn.extend =
      function () {
        var e,
          t,
          n,
          r,
          i,
          o,
          a = arguments[0] || {},
          s = 1,
          u = arguments.length,
          l = !1;
        for (
          "boolean" == typeof a && ((l = a), (a = arguments[s] || {}), s++),
            "object" == typeof a || m(a) || (a = {}),
            s === u && ((a = this), s--);
          s < u;
          s++
        )
          if (null != (e = arguments[s]))
            for (t in e)
              (r = e[t]),
                "__proto__" !== t &&
                  a !== r &&
                  (l && r && (S.isPlainObject(r) || (i = Array.isArray(r)))
                    ? ((n = a[t]),
                      (o =
                        i && !Array.isArray(n)
                          ? []
                          : i || S.isPlainObject(n)
                          ? n
                          : {}),
                      (i = !1),
                      (a[t] = S.extend(l, o, r)))
                    : void 0 !== r && (a[t] = r));
        return a;
      }),
    S.extend({
      expando: "jQuery" + (f + Math.random()).replace(/\D/g, ""),
      isReady: !0,
      error: function (e) {
        throw new Error(e);
      },
      noop: function () {},
      isPlainObject: function (e) {
        var t, n;
        return (
          !(!e || "[object Object]" !== o.call(e)) &&
          (!(t = r(e)) ||
            ("function" ==
              typeof (n = v.call(t, "constructor") && t.constructor) &&
              a.call(n) === l))
        );
      },
      isEmptyObject: function (e) {
        var t;
        for (t in e) return !1;
        return !0;
      },
      globalEval: function (e, t, n) {
        b(e, { nonce: t && t.nonce }, n);
      },
      each: function (e, t) {
        var n,
          r = 0;
        if (p(e)) {
          for (n = e.length; r < n; r++)
            if (!1 === t.call(e[r], r, e[r])) break;
        } else for (r in e) if (!1 === t.call(e[r], r, e[r])) break;
        return e;
      },
      makeArray: function (e, t) {
        var n = t || [];
        return (
          null != e &&
            (p(Object(e))
              ? S.merge(n, "string" == typeof e ? [e] : e)
              : u.call(n, e)),
          n
        );
      },
      inArray: function (e, t, n) {
        return null == t ? -1 : i.call(t, e, n);
      },
      merge: function (e, t) {
        for (var n = +t.length, r = 0, i = e.length; r < n; r++) e[i++] = t[r];
        return (e.length = i), e;
      },
      grep: function (e, t, n) {
        for (var r = [], i = 0, o = e.length, a = !n; i < o; i++)
          !t(e[i], i) !== a && r.push(e[i]);
        return r;
      },
      map: function (e, t, n) {
        var r,
          i,
          o = 0,
          a = [];
        if (p(e))
          for (r = e.length; o < r; o++)
            null != (i = t(e[o], o, n)) && a.push(i);
        else for (o in e) null != (i = t(e[o], o, n)) && a.push(i);
        return g(a);
      },
      guid: 1,
      support: y,
    }),
    "function" == typeof Symbol && (S.fn[Symbol.iterator] = t[Symbol.iterator]),
    S.each(
      "Boolean Number String Function Array Date RegExp Object Error Symbol".split(
        " "
      ),
      function (e, t) {
        n["[object " + t + "]"] = t.toLowerCase();
      }
    );
  var d = (function (n) {
    var e,
      d,
      b,
      o,
      i,
      h,
      f,
      g,
      w,
      u,
      l,
      T,
      C,
      a,
      E,
      v,
      s,
      c,
      y,
      S = "sizzle" + 1 * new Date(),
      p = n.document,
      k = 0,
      r = 0,
      m = ue(),
      x = ue(),
      A = ue(),
      N = ue(),
      j = function (e, t) {
        return e === t && (l = !0), 0;
      },
      D = {}.hasOwnProperty,
      t = [],
      q = t.pop,
      L = t.push,
      H = t.push,
      O = t.slice,
      P = function (e, t) {
        for (var n = 0, r = e.length; n < r; n++) if (e[n] === t) return n;
        return -1;
      },
      R =
        "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
      M = "[\\x20\\t\\r\\n\\f]",
      I =
        "(?:\\\\[\\da-fA-F]{1,6}" +
        M +
        "?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+",
      W =
        "\\[" +
        M +
        "*(" +
        I +
        ")(?:" +
        M +
        "*([*^$|!~]?=)" +
        M +
        "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" +
        I +
        "))|)" +
        M +
        "*\\]",
      F =
        ":(" +
        I +
        ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" +
        W +
        ")*)|.*)\\)|)",
      B = new RegExp(M + "+", "g"),
      $ = new RegExp("^" + M + "+|((?:^|[^\\\\])(?:\\\\.)*)" + M + "+$", "g"),
      _ = new RegExp("^" + M + "*," + M + "*"),
      z = new RegExp("^" + M + "*([>+~]|" + M + ")" + M + "*"),
      U = new RegExp(M + "|>"),
      X = new RegExp(F),
      V = new RegExp("^" + I + "$"),
      G = {
        ID: new RegExp("^#(" + I + ")"),
        CLASS: new RegExp("^\\.(" + I + ")"),
        TAG: new RegExp("^(" + I + "|[*])"),
        ATTR: new RegExp("^" + W),
        PSEUDO: new RegExp("^" + F),
        CHILD: new RegExp(
          "^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" +
            M +
            "*(even|odd|(([+-]|)(\\d*)n|)" +
            M +
            "*(?:([+-]|)" +
            M +
            "*(\\d+)|))" +
            M +
            "*\\)|)",
          "i"
        ),
        bool: new RegExp("^(?:" + R + ")$", "i"),
        needsContext: new RegExp(
          "^" +
            M +
            "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" +
            M +
            "*((?:-\\d)?\\d*)" +
            M +
            "*\\)|)(?=[^-]|$)",
          "i"
        ),
      },
      Y = /HTML$/i,
      Q = /^(?:input|select|textarea|button)$/i,
      J = /^h\d$/i,
      K = /^[^{]+\{\s*\[native \w/,
      Z = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
      ee = /[+~]/,
      te = new RegExp("\\\\[\\da-fA-F]{1,6}" + M + "?|\\\\([^\\r\\n\\f])", "g"),
      ne = function (e, t) {
        var n = "0x" + e.slice(1) - 65536;
        return (
          t ||
          (n < 0
            ? String.fromCharCode(n + 65536)
            : String.fromCharCode((n >> 10) | 55296, (1023 & n) | 56320))
        );
      },
      re = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
      ie = function (e, t) {
        return t
          ? "\0" === e
            ? "\ufffd"
            : e.slice(0, -1) +
              "\\" +
              e.charCodeAt(e.length - 1).toString(16) +
              " "
          : "\\" + e;
      },
      oe = function () {
        T();
      },
      ae = be(
        function (e) {
          return !0 === e.disabled && "fieldset" === e.nodeName.toLowerCase();
        },
        { dir: "parentNode", next: "legend" }
      );
    try {
      H.apply((t = O.call(p.childNodes)), p.childNodes),
        t[p.childNodes.length].nodeType;
    } catch (e) {
      H = {
        apply: t.length
          ? function (e, t) {
              L.apply(e, O.call(t));
            }
          : function (e, t) {
              var n = e.length,
                r = 0;
              while ((e[n++] = t[r++]));
              e.length = n - 1;
            },
      };
    }
    function se(t, e, n, r) {
      var i,
        o,
        a,
        s,
        u,
        l,
        c,
        f = e && e.ownerDocument,
        p = e ? e.nodeType : 9;
      if (
        ((n = n || []),
        "string" != typeof t || !t || (1 !== p && 9 !== p && 11 !== p))
      )
        return n;
      if (!r && (T(e), (e = e || C), E)) {
        if (11 !== p && (u = Z.exec(t)))
          if ((i = u[1])) {
            if (9 === p) {
              if (!(a = e.getElementById(i))) return n;
              if (a.id === i) return n.push(a), n;
            } else if (f && (a = f.getElementById(i)) && y(e, a) && a.id === i)
              return n.push(a), n;
          } else {
            if (u[2]) return H.apply(n, e.getElementsByTagName(t)), n;
            if (
              (i = u[3]) &&
              d.getElementsByClassName &&
              e.getElementsByClassName
            )
              return H.apply(n, e.getElementsByClassName(i)), n;
          }
        if (
          d.qsa &&
          !N[t + " "] &&
          (!v || !v.test(t)) &&
          (1 !== p || "object" !== e.nodeName.toLowerCase())
        ) {
          if (((c = t), (f = e), 1 === p && (U.test(t) || z.test(t)))) {
            ((f = (ee.test(t) && ye(e.parentNode)) || e) === e && d.scope) ||
              ((s = e.getAttribute("id"))
                ? (s = s.replace(re, ie))
                : e.setAttribute("id", (s = S))),
              (o = (l = h(t)).length);
            while (o--) l[o] = (s ? "#" + s : ":scope") + " " + xe(l[o]);
            c = l.join(",");
          }
          try {
            return H.apply(n, f.querySelectorAll(c)), n;
          } catch (e) {
            N(t, !0);
          } finally {
            s === S && e.removeAttribute("id");
          }
        }
      }
      return g(t.replace($, "$1"), e, n, r);
    }
    function ue() {
      var r = [];
      return function e(t, n) {
        return (
          r.push(t + " ") > b.cacheLength && delete e[r.shift()],
          (e[t + " "] = n)
        );
      };
    }
    function le(e) {
      return (e[S] = !0), e;
    }
    function ce(e) {
      var t = C.createElement("fieldset");
      try {
        return !!e(t);
      } catch (e) {
        return !1;
      } finally {
        t.parentNode && t.parentNode.removeChild(t), (t = null);
      }
    }
    function fe(e, t) {
      var n = e.split("|"),
        r = n.length;
      while (r--) b.attrHandle[n[r]] = t;
    }
    function pe(e, t) {
      var n = t && e,
        r =
          n &&
          1 === e.nodeType &&
          1 === t.nodeType &&
          e.sourceIndex - t.sourceIndex;
      if (r) return r;
      if (n) while ((n = n.nextSibling)) if (n === t) return -1;
      return e ? 1 : -1;
    }
    function de(t) {
      return function (e) {
        return "input" === e.nodeName.toLowerCase() && e.type === t;
      };
    }
    function he(n) {
      return function (e) {
        var t = e.nodeName.toLowerCase();
        return ("input" === t || "button" === t) && e.type === n;
      };
    }
    function ge(t) {
      return function (e) {
        return "form" in e
          ? e.parentNode && !1 === e.disabled
            ? "label" in e
              ? "label" in e.parentNode
                ? e.parentNode.disabled === t
                : e.disabled === t
              : e.isDisabled === t || (e.isDisabled !== !t && ae(e) === t)
            : e.disabled === t
          : "label" in e && e.disabled === t;
      };
    }
    function ve(a) {
      return le(function (o) {
        return (
          (o = +o),
          le(function (e, t) {
            var n,
              r = a([], e.length, o),
              i = r.length;
            while (i--) e[(n = r[i])] && (e[n] = !(t[n] = e[n]));
          })
        );
      });
    }
    function ye(e) {
      return e && "undefined" != typeof e.getElementsByTagName && e;
    }
    for (e in ((d = se.support = {}),
    (i = se.isXML =
      function (e) {
        var t = e && e.namespaceURI,
          n = e && (e.ownerDocument || e).documentElement;
        return !Y.test(t || (n && n.nodeName) || "HTML");
      }),
    (T = se.setDocument =
      function (e) {
        var t,
          n,
          r = e ? e.ownerDocument || e : p;
        return (
          r != C &&
            9 === r.nodeType &&
            r.documentElement &&
            ((a = (C = r).documentElement),
            (E = !i(C)),
            p != C &&
              (n = C.defaultView) &&
              n.top !== n &&
              (n.addEventListener
                ? n.addEventListener("unload", oe, !1)
                : n.attachEvent && n.attachEvent("onunload", oe)),
            (d.scope = ce(function (e) {
              return (
                a.appendChild(e).appendChild(C.createElement("div")),
                "undefined" != typeof e.querySelectorAll &&
                  !e.querySelectorAll(":scope fieldset div").length
              );
            })),
            (d.attributes = ce(function (e) {
              return (e.className = "i"), !e.getAttribute("className");
            })),
            (d.getElementsByTagName = ce(function (e) {
              return (
                e.appendChild(C.createComment("")),
                !e.getElementsByTagName("*").length
              );
            })),
            (d.getElementsByClassName = K.test(C.getElementsByClassName)),
            (d.getById = ce(function (e) {
              return (
                (a.appendChild(e).id = S),
                !C.getElementsByName || !C.getElementsByName(S).length
              );
            })),
            d.getById
              ? ((b.filter.ID = function (e) {
                  var t = e.replace(te, ne);
                  return function (e) {
                    return e.getAttribute("id") === t;
                  };
                }),
                (b.find.ID = function (e, t) {
                  if ("undefined" != typeof t.getElementById && E) {
                    var n = t.getElementById(e);
                    return n ? [n] : [];
                  }
                }))
              : ((b.filter.ID = function (e) {
                  var n = e.replace(te, ne);
                  return function (e) {
                    var t =
                      "undefined" != typeof e.getAttributeNode &&
                      e.getAttributeNode("id");
                    return t && t.value === n;
                  };
                }),
                (b.find.ID = function (e, t) {
                  if ("undefined" != typeof t.getElementById && E) {
                    var n,
                      r,
                      i,
                      o = t.getElementById(e);
                    if (o) {
                      if ((n = o.getAttributeNode("id")) && n.value === e)
                        return [o];
                      (i = t.getElementsByName(e)), (r = 0);
                      while ((o = i[r++]))
                        if ((n = o.getAttributeNode("id")) && n.value === e)
                          return [o];
                    }
                    return [];
                  }
                })),
            (b.find.TAG = d.getElementsByTagName
              ? function (e, t) {
                  return "undefined" != typeof t.getElementsByTagName
                    ? t.getElementsByTagName(e)
                    : d.qsa
                    ? t.querySelectorAll(e)
                    : void 0;
                }
              : function (e, t) {
                  var n,
                    r = [],
                    i = 0,
                    o = t.getElementsByTagName(e);
                  if ("*" === e) {
                    while ((n = o[i++])) 1 === n.nodeType && r.push(n);
                    return r;
                  }
                  return o;
                }),
            (b.find.CLASS =
              d.getElementsByClassName &&
              function (e, t) {
                if ("undefined" != typeof t.getElementsByClassName && E)
                  return t.getElementsByClassName(e);
              }),
            (s = []),
            (v = []),
            (d.qsa = K.test(C.querySelectorAll)) &&
              (ce(function (e) {
                var t;
                (a.appendChild(e).innerHTML =
                  "<a id='" +
                  S +
                  "'></a><select id='" +
                  S +
                  "-\r\\' msallowcapture=''><option selected=''></option></select>"),
                  e.querySelectorAll("[msallowcapture^='']").length &&
                    v.push("[*^$]=" + M + "*(?:''|\"\")"),
                  e.querySelectorAll("[selected]").length ||
                    v.push("\\[" + M + "*(?:value|" + R + ")"),
                  e.querySelectorAll("[id~=" + S + "-]").length || v.push("~="),
                  (t = C.createElement("input")).setAttribute("name", ""),
                  e.appendChild(t),
                  e.querySelectorAll("[name='']").length ||
                    v.push("\\[" + M + "*name" + M + "*=" + M + "*(?:''|\"\")"),
                  e.querySelectorAll(":checked").length || v.push(":checked"),
                  e.querySelectorAll("a#" + S + "+*").length ||
                    v.push(".#.+[+~]"),
                  e.querySelectorAll("\\\f"),
                  v.push("[\\r\\n\\f]");
              }),
              ce(function (e) {
                e.innerHTML =
                  "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
                var t = C.createElement("input");
                t.setAttribute("type", "hidden"),
                  e.appendChild(t).setAttribute("name", "D"),
                  e.querySelectorAll("[name=d]").length &&
                    v.push("name" + M + "*[*^$|!~]?="),
                  2 !== e.querySelectorAll(":enabled").length &&
                    v.push(":enabled", ":disabled"),
                  (a.appendChild(e).disabled = !0),
                  2 !== e.querySelectorAll(":disabled").length &&
                    v.push(":enabled", ":disabled"),
                  e.querySelectorAll("*,:x"),
                  v.push(",.*:");
              })),
            (d.matchesSelector = K.test(
              (c =
                a.matches ||
                a.webkitMatchesSelector ||
                a.mozMatchesSelector ||
                a.oMatchesSelector ||
                a.msMatchesSelector)
            )) &&
              ce(function (e) {
                (d.disconnectedMatch = c.call(e, "*")),
                  c.call(e, "[s!='']:x"),
                  s.push("!=", F);
              }),
            (v = v.length && new RegExp(v.join("|"))),
            (s = s.length && new RegExp(s.join("|"))),
            (t = K.test(a.compareDocumentPosition)),
            (y =
              t || K.test(a.contains)
                ? function (e, t) {
                    var n = 9 === e.nodeType ? e.documentElement : e,
                      r = t && t.parentNode;
                    return (
                      e === r ||
                      !(
                        !r ||
                        1 !== r.nodeType ||
                        !(n.contains
                          ? n.contains(r)
                          : e.compareDocumentPosition &&
                            16 & e.compareDocumentPosition(r))
                      )
                    );
                  }
                : function (e, t) {
                    if (t) while ((t = t.parentNode)) if (t === e) return !0;
                    return !1;
                  }),
            (j = t
              ? function (e, t) {
                  if (e === t) return (l = !0), 0;
                  var n =
                    !e.compareDocumentPosition - !t.compareDocumentPosition;
                  return (
                    n ||
                    (1 &
                      (n =
                        (e.ownerDocument || e) == (t.ownerDocument || t)
                          ? e.compareDocumentPosition(t)
                          : 1) ||
                    (!d.sortDetached && t.compareDocumentPosition(e) === n)
                      ? e == C || (e.ownerDocument == p && y(p, e))
                        ? -1
                        : t == C || (t.ownerDocument == p && y(p, t))
                        ? 1
                        : u
                        ? P(u, e) - P(u, t)
                        : 0
                      : 4 & n
                      ? -1
                      : 1)
                  );
                }
              : function (e, t) {
                  if (e === t) return (l = !0), 0;
                  var n,
                    r = 0,
                    i = e.parentNode,
                    o = t.parentNode,
                    a = [e],
                    s = [t];
                  if (!i || !o)
                    return e == C
                      ? -1
                      : t == C
                      ? 1
                      : i
                      ? -1
                      : o
                      ? 1
                      : u
                      ? P(u, e) - P(u, t)
                      : 0;
                  if (i === o) return pe(e, t);
                  n = e;
                  while ((n = n.parentNode)) a.unshift(n);
                  n = t;
                  while ((n = n.parentNode)) s.unshift(n);
                  while (a[r] === s[r]) r++;
                  return r
                    ? pe(a[r], s[r])
                    : a[r] == p
                    ? -1
                    : s[r] == p
                    ? 1
                    : 0;
                })),
          C
        );
      }),
    (se.matches = function (e, t) {
      return se(e, null, null, t);
    }),
    (se.matchesSelector = function (e, t) {
      if (
        (T(e),
        d.matchesSelector &&
          E &&
          !N[t + " "] &&
          (!s || !s.test(t)) &&
          (!v || !v.test(t)))
      )
        try {
          var n = c.call(e, t);
          if (
            n ||
            d.disconnectedMatch ||
            (e.document && 11 !== e.document.nodeType)
          )
            return n;
        } catch (e) {
          N(t, !0);
        }
      return 0 < se(t, C, null, [e]).length;
    }),
    (se.contains = function (e, t) {
      return (e.ownerDocument || e) != C && T(e), y(e, t);
    }),
    (se.attr = function (e, t) {
      (e.ownerDocument || e) != C && T(e);
      var n = b.attrHandle[t.toLowerCase()],
        r = n && D.call(b.attrHandle, t.toLowerCase()) ? n(e, t, !E) : void 0;
      return void 0 !== r
        ? r
        : d.attributes || !E
        ? e.getAttribute(t)
        : (r = e.getAttributeNode(t)) && r.specified
        ? r.value
        : null;
    }),
    (se.escape = function (e) {
      return (e + "").replace(re, ie);
    }),
    (se.error = function (e) {
      throw new Error("Syntax error, unrecognized expression: " + e);
    }),
    (se.uniqueSort = function (e) {
      var t,
        n = [],
        r = 0,
        i = 0;
      if (
        ((l = !d.detectDuplicates),
        (u = !d.sortStable && e.slice(0)),
        e.sort(j),
        l)
      ) {
        while ((t = e[i++])) t === e[i] && (r = n.push(i));
        while (r--) e.splice(n[r], 1);
      }
      return (u = null), e;
    }),
    (o = se.getText =
      function (e) {
        var t,
          n = "",
          r = 0,
          i = e.nodeType;
        if (i) {
          if (1 === i || 9 === i || 11 === i) {
            if ("string" == typeof e.textContent) return e.textContent;
            for (e = e.firstChild; e; e = e.nextSibling) n += o(e);
          } else if (3 === i || 4 === i) return e.nodeValue;
        } else while ((t = e[r++])) n += o(t);
        return n;
      }),
    ((b = se.selectors =
      {
        cacheLength: 50,
        createPseudo: le,
        match: G,
        attrHandle: {},
        find: {},
        relative: {
          ">": { dir: "parentNode", first: !0 },
          " ": { dir: "parentNode" },
          "+": { dir: "previousSibling", first: !0 },
          "~": { dir: "previousSibling" },
        },
        preFilter: {
          ATTR: function (e) {
            return (
              (e[1] = e[1].replace(te, ne)),
              (e[3] = (e[3] || e[4] || e[5] || "").replace(te, ne)),
              "~=" === e[2] && (e[3] = " " + e[3] + " "),
              e.slice(0, 4)
            );
          },
          CHILD: function (e) {
            return (
              (e[1] = e[1].toLowerCase()),
              "nth" === e[1].slice(0, 3)
                ? (e[3] || se.error(e[0]),
                  (e[4] = +(e[4]
                    ? e[5] + (e[6] || 1)
                    : 2 * ("even" === e[3] || "odd" === e[3]))),
                  (e[5] = +(e[7] + e[8] || "odd" === e[3])))
                : e[3] && se.error(e[0]),
              e
            );
          },
          PSEUDO: function (e) {
            var t,
              n = !e[6] && e[2];
            return G.CHILD.test(e[0])
              ? null
              : (e[3]
                  ? (e[2] = e[4] || e[5] || "")
                  : n &&
                    X.test(n) &&
                    (t = h(n, !0)) &&
                    (t = n.indexOf(")", n.length - t) - n.length) &&
                    ((e[0] = e[0].slice(0, t)), (e[2] = n.slice(0, t))),
                e.slice(0, 3));
          },
        },
        filter: {
          TAG: function (e) {
            var t = e.replace(te, ne).toLowerCase();
            return "*" === e
              ? function () {
                  return !0;
                }
              : function (e) {
                  return e.nodeName && e.nodeName.toLowerCase() === t;
                };
          },
          CLASS: function (e) {
            var t = m[e + " "];
            return (
              t ||
              ((t = new RegExp("(^|" + M + ")" + e + "(" + M + "|$)")) &&
                m(e, function (e) {
                  return t.test(
                    ("string" == typeof e.className && e.className) ||
                      ("undefined" != typeof e.getAttribute &&
                        e.getAttribute("class")) ||
                      ""
                  );
                }))
            );
          },
          ATTR: function (n, r, i) {
            return function (e) {
              var t = se.attr(e, n);
              return null == t
                ? "!=" === r
                : !r ||
                    ((t += ""),
                    "=" === r
                      ? t === i
                      : "!=" === r
                      ? t !== i
                      : "^=" === r
                      ? i && 0 === t.indexOf(i)
                      : "*=" === r
                      ? i && -1 < t.indexOf(i)
                      : "$=" === r
                      ? i && t.slice(-i.length) === i
                      : "~=" === r
                      ? -1 < (" " + t.replace(B, " ") + " ").indexOf(i)
                      : "|=" === r &&
                        (t === i || t.slice(0, i.length + 1) === i + "-"));
            };
          },
          CHILD: function (h, e, t, g, v) {
            var y = "nth" !== h.slice(0, 3),
              m = "last" !== h.slice(-4),
              x = "of-type" === e;
            return 1 === g && 0 === v
              ? function (e) {
                  return !!e.parentNode;
                }
              : function (e, t, n) {
                  var r,
                    i,
                    o,
                    a,
                    s,
                    u,
                    l = y !== m ? "nextSibling" : "previousSibling",
                    c = e.parentNode,
                    f = x && e.nodeName.toLowerCase(),
                    p = !n && !x,
                    d = !1;
                  if (c) {
                    if (y) {
                      while (l) {
                        a = e;
                        while ((a = a[l]))
                          if (
                            x
                              ? a.nodeName.toLowerCase() === f
                              : 1 === a.nodeType
                          )
                            return !1;
                        u = l = "only" === h && !u && "nextSibling";
                      }
                      return !0;
                    }
                    if (((u = [m ? c.firstChild : c.lastChild]), m && p)) {
                      (d =
                        (s =
                          (r =
                            (i =
                              (o = (a = c)[S] || (a[S] = {}))[a.uniqueID] ||
                              (o[a.uniqueID] = {}))[h] || [])[0] === k &&
                          r[1]) && r[2]),
                        (a = s && c.childNodes[s]);
                      while ((a = (++s && a && a[l]) || (d = s = 0) || u.pop()))
                        if (1 === a.nodeType && ++d && a === e) {
                          i[h] = [k, s, d];
                          break;
                        }
                    } else if (
                      (p &&
                        (d = s =
                          (r =
                            (i =
                              (o = (a = e)[S] || (a[S] = {}))[a.uniqueID] ||
                              (o[a.uniqueID] = {}))[h] || [])[0] === k && r[1]),
                      !1 === d)
                    )
                      while ((a = (++s && a && a[l]) || (d = s = 0) || u.pop()))
                        if (
                          (x
                            ? a.nodeName.toLowerCase() === f
                            : 1 === a.nodeType) &&
                          ++d &&
                          (p &&
                            ((i =
                              (o = a[S] || (a[S] = {}))[a.uniqueID] ||
                              (o[a.uniqueID] = {}))[h] = [k, d]),
                          a === e)
                        )
                          break;
                    return (d -= v) === g || (d % g == 0 && 0 <= d / g);
                  }
                };
          },
          PSEUDO: function (e, o) {
            var t,
              a =
                b.pseudos[e] ||
                b.setFilters[e.toLowerCase()] ||
                se.error("unsupported pseudo: " + e);
            return a[S]
              ? a(o)
              : 1 < a.length
              ? ((t = [e, e, "", o]),
                b.setFilters.hasOwnProperty(e.toLowerCase())
                  ? le(function (e, t) {
                      var n,
                        r = a(e, o),
                        i = r.length;
                      while (i--) e[(n = P(e, r[i]))] = !(t[n] = r[i]);
                    })
                  : function (e) {
                      return a(e, 0, t);
                    })
              : a;
          },
        },
        pseudos: {
          not: le(function (e) {
            var r = [],
              i = [],
              s = f(e.replace($, "$1"));
            return s[S]
              ? le(function (e, t, n, r) {
                  var i,
                    o = s(e, null, r, []),
                    a = e.length;
                  while (a--) (i = o[a]) && (e[a] = !(t[a] = i));
                })
              : function (e, t, n) {
                  return (r[0] = e), s(r, null, n, i), (r[0] = null), !i.pop();
                };
          }),
          has: le(function (t) {
            return function (e) {
              return 0 < se(t, e).length;
            };
          }),
          contains: le(function (t) {
            return (
              (t = t.replace(te, ne)),
              function (e) {
                return -1 < (e.textContent || o(e)).indexOf(t);
              }
            );
          }),
          lang: le(function (n) {
            return (
              V.test(n || "") || se.error("unsupported lang: " + n),
              (n = n.replace(te, ne).toLowerCase()),
              function (e) {
                var t;
                do {
                  if (
                    (t = E
                      ? e.lang
                      : e.getAttribute("xml:lang") || e.getAttribute("lang"))
                  )
                    return (
                      (t = t.toLowerCase()) === n || 0 === t.indexOf(n + "-")
                    );
                } while ((e = e.parentNode) && 1 === e.nodeType);
                return !1;
              }
            );
          }),
          target: function (e) {
            var t = n.location && n.location.hash;
            return t && t.slice(1) === e.id;
          },
          root: function (e) {
            return e === a;
          },
          focus: function (e) {
            return (
              e === C.activeElement &&
              (!C.hasFocus || C.hasFocus()) &&
              !!(e.type || e.href || ~e.tabIndex)
            );
          },
          enabled: ge(!1),
          disabled: ge(!0),
          checked: function (e) {
            var t = e.nodeName.toLowerCase();
            return (
              ("input" === t && !!e.checked) || ("option" === t && !!e.selected)
            );
          },
          selected: function (e) {
            return (
              e.parentNode && e.parentNode.selectedIndex, !0 === e.selected
            );
          },
          empty: function (e) {
            for (e = e.firstChild; e; e = e.nextSibling)
              if (e.nodeType < 6) return !1;
            return !0;
          },
          parent: function (e) {
            return !b.pseudos.empty(e);
          },
          header: function (e) {
            return J.test(e.nodeName);
          },
          input: function (e) {
            return Q.test(e.nodeName);
          },
          button: function (e) {
            var t = e.nodeName.toLowerCase();
            return ("input" === t && "button" === e.type) || "button" === t;
          },
          text: function (e) {
            var t;
            return (
              "input" === e.nodeName.toLowerCase() &&
              "text" === e.type &&
              (null == (t = e.getAttribute("type")) ||
                "text" === t.toLowerCase())
            );
          },
          first: ve(function () {
            return [0];
          }),
          last: ve(function (e, t) {
            return [t - 1];
          }),
          eq: ve(function (e, t, n) {
            return [n < 0 ? n + t : n];
          }),
          even: ve(function (e, t) {
            for (var n = 0; n < t; n += 2) e.push(n);
            return e;
          }),
          odd: ve(function (e, t) {
            for (var n = 1; n < t; n += 2) e.push(n);
            return e;
          }),
          lt: ve(function (e, t, n) {
            for (var r = n < 0 ? n + t : t < n ? t : n; 0 <= --r; ) e.push(r);
            return e;
          }),
          gt: ve(function (e, t, n) {
            for (var r = n < 0 ? n + t : n; ++r < t; ) e.push(r);
            return e;
          }),
        },
      }).pseudos.nth = b.pseudos.eq),
    { radio: !0, checkbox: !0, file: !0, password: !0, image: !0 }))
      b.pseudos[e] = de(e);
    for (e in { submit: !0, reset: !0 }) b.pseudos[e] = he(e);
    function me() {}
    function xe(e) {
      for (var t = 0, n = e.length, r = ""; t < n; t++) r += e[t].value;
      return r;
    }
    function be(s, e, t) {
      var u = e.dir,
        l = e.next,
        c = l || u,
        f = t && "parentNode" === c,
        p = r++;
      return e.first
        ? function (e, t, n) {
            while ((e = e[u])) if (1 === e.nodeType || f) return s(e, t, n);
            return !1;
          }
        : function (e, t, n) {
            var r,
              i,
              o,
              a = [k, p];
            if (n) {
              while ((e = e[u]))
                if ((1 === e.nodeType || f) && s(e, t, n)) return !0;
            } else
              while ((e = e[u]))
                if (1 === e.nodeType || f)
                  if (
                    ((i =
                      (o = e[S] || (e[S] = {}))[e.uniqueID] ||
                      (o[e.uniqueID] = {})),
                    l && l === e.nodeName.toLowerCase())
                  )
                    e = e[u] || e;
                  else {
                    if ((r = i[c]) && r[0] === k && r[1] === p)
                      return (a[2] = r[2]);
                    if (((i[c] = a)[2] = s(e, t, n))) return !0;
                  }
            return !1;
          };
    }
    function we(i) {
      return 1 < i.length
        ? function (e, t, n) {
            var r = i.length;
            while (r--) if (!i[r](e, t, n)) return !1;
            return !0;
          }
        : i[0];
    }
    function Te(e, t, n, r, i) {
      for (var o, a = [], s = 0, u = e.length, l = null != t; s < u; s++)
        (o = e[s]) && ((n && !n(o, r, i)) || (a.push(o), l && t.push(s)));
      return a;
    }
    function Ce(d, h, g, v, y, e) {
      return (
        v && !v[S] && (v = Ce(v)),
        y && !y[S] && (y = Ce(y, e)),
        le(function (e, t, n, r) {
          var i,
            o,
            a,
            s = [],
            u = [],
            l = t.length,
            c =
              e ||
              (function (e, t, n) {
                for (var r = 0, i = t.length; r < i; r++) se(e, t[r], n);
                return n;
              })(h || "*", n.nodeType ? [n] : n, []),
            f = !d || (!e && h) ? c : Te(c, s, d, n, r),
            p = g ? (y || (e ? d : l || v) ? [] : t) : f;
          if ((g && g(f, p, n, r), v)) {
            (i = Te(p, u)), v(i, [], n, r), (o = i.length);
            while (o--) (a = i[o]) && (p[u[o]] = !(f[u[o]] = a));
          }
          if (e) {
            if (y || d) {
              if (y) {
                (i = []), (o = p.length);
                while (o--) (a = p[o]) && i.push((f[o] = a));
                y(null, (p = []), i, r);
              }
              o = p.length;
              while (o--)
                (a = p[o]) &&
                  -1 < (i = y ? P(e, a) : s[o]) &&
                  (e[i] = !(t[i] = a));
            }
          } else (p = Te(p === t ? p.splice(l, p.length) : p)), y ? y(null, t, p, r) : H.apply(t, p);
        })
      );
    }
    function Ee(e) {
      for (
        var i,
          t,
          n,
          r = e.length,
          o = b.relative[e[0].type],
          a = o || b.relative[" "],
          s = o ? 1 : 0,
          u = be(
            function (e) {
              return e === i;
            },
            a,
            !0
          ),
          l = be(
            function (e) {
              return -1 < P(i, e);
            },
            a,
            !0
          ),
          c = [
            function (e, t, n) {
              var r =
                (!o && (n || t !== w)) ||
                ((i = t).nodeType ? u(e, t, n) : l(e, t, n));
              return (i = null), r;
            },
          ];
        s < r;
        s++
      )
        if ((t = b.relative[e[s].type])) c = [be(we(c), t)];
        else {
          if ((t = b.filter[e[s].type].apply(null, e[s].matches))[S]) {
            for (n = ++s; n < r; n++) if (b.relative[e[n].type]) break;
            return Ce(
              1 < s && we(c),
              1 < s &&
                xe(
                  e
                    .slice(0, s - 1)
                    .concat({ value: " " === e[s - 2].type ? "*" : "" })
                ).replace($, "$1"),
              t,
              s < n && Ee(e.slice(s, n)),
              n < r && Ee((e = e.slice(n))),
              n < r && xe(e)
            );
          }
          c.push(t);
        }
      return we(c);
    }
    return (
      (me.prototype = b.filters = b.pseudos),
      (b.setFilters = new me()),
      (h = se.tokenize =
        function (e, t) {
          var n,
            r,
            i,
            o,
            a,
            s,
            u,
            l = x[e + " "];
          if (l) return t ? 0 : l.slice(0);
          (a = e), (s = []), (u = b.preFilter);
          while (a) {
            for (o in ((n && !(r = _.exec(a))) ||
              (r && (a = a.slice(r[0].length) || a), s.push((i = []))),
            (n = !1),
            (r = z.exec(a)) &&
              ((n = r.shift()),
              i.push({ value: n, type: r[0].replace($, " ") }),
              (a = a.slice(n.length))),
            b.filter))
              !(r = G[o].exec(a)) ||
                (u[o] && !(r = u[o](r))) ||
                ((n = r.shift()),
                i.push({ value: n, type: o, matches: r }),
                (a = a.slice(n.length)));
            if (!n) break;
          }
          return t ? a.length : a ? se.error(e) : x(e, s).slice(0);
        }),
      (f = se.compile =
        function (e, t) {
          var n,
            v,
            y,
            m,
            x,
            r,
            i = [],
            o = [],
            a = A[e + " "];
          if (!a) {
            t || (t = h(e)), (n = t.length);
            while (n--) (a = Ee(t[n]))[S] ? i.push(a) : o.push(a);
            (a = A(
              e,
              ((v = o),
              (m = 0 < (y = i).length),
              (x = 0 < v.length),
              (r = function (e, t, n, r, i) {
                var o,
                  a,
                  s,
                  u = 0,
                  l = "0",
                  c = e && [],
                  f = [],
                  p = w,
                  d = e || (x && b.find.TAG("*", i)),
                  h = (k += null == p ? 1 : Math.random() || 0.1),
                  g = d.length;
                for (
                  i && (w = t == C || t || i);
                  l !== g && null != (o = d[l]);
                  l++
                ) {
                  if (x && o) {
                    (a = 0), t || o.ownerDocument == C || (T(o), (n = !E));
                    while ((s = v[a++]))
                      if (s(o, t || C, n)) {
                        r.push(o);
                        break;
                      }
                    i && (k = h);
                  }
                  m && ((o = !s && o) && u--, e && c.push(o));
                }
                if (((u += l), m && l !== u)) {
                  a = 0;
                  while ((s = y[a++])) s(c, f, t, n);
                  if (e) {
                    if (0 < u) while (l--) c[l] || f[l] || (f[l] = q.call(r));
                    f = Te(f);
                  }
                  H.apply(r, f),
                    i &&
                      !e &&
                      0 < f.length &&
                      1 < u + y.length &&
                      se.uniqueSort(r);
                }
                return i && ((k = h), (w = p)), c;
              }),
              m ? le(r) : r)
            )).selector = e;
          }
          return a;
        }),
      (g = se.select =
        function (e, t, n, r) {
          var i,
            o,
            a,
            s,
            u,
            l = "function" == typeof e && e,
            c = !r && h((e = l.selector || e));
          if (((n = n || []), 1 === c.length)) {
            if (
              2 < (o = c[0] = c[0].slice(0)).length &&
              "ID" === (a = o[0]).type &&
              9 === t.nodeType &&
              E &&
              b.relative[o[1].type]
            ) {
              if (!(t = (b.find.ID(a.matches[0].replace(te, ne), t) || [])[0]))
                return n;
              l && (t = t.parentNode), (e = e.slice(o.shift().value.length));
            }
            i = G.needsContext.test(e) ? 0 : o.length;
            while (i--) {
              if (((a = o[i]), b.relative[(s = a.type)])) break;
              if (
                (u = b.find[s]) &&
                (r = u(
                  a.matches[0].replace(te, ne),
                  (ee.test(o[0].type) && ye(t.parentNode)) || t
                ))
              ) {
                if ((o.splice(i, 1), !(e = r.length && xe(o))))
                  return H.apply(n, r), n;
                break;
              }
            }
          }
          return (
            (l || f(e, c))(
              r,
              t,
              !E,
              n,
              !t || (ee.test(e) && ye(t.parentNode)) || t
            ),
            n
          );
        }),
      (d.sortStable = S.split("").sort(j).join("") === S),
      (d.detectDuplicates = !!l),
      T(),
      (d.sortDetached = ce(function (e) {
        return 1 & e.compareDocumentPosition(C.createElement("fieldset"));
      })),
      ce(function (e) {
        return (
          (e.innerHTML = "<a href='#'></a>"),
          "#" === e.firstChild.getAttribute("href")
        );
      }) ||
        fe("type|href|height|width", function (e, t, n) {
          if (!n) return e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2);
        }),
      (d.attributes &&
        ce(function (e) {
          return (
            (e.innerHTML = "<input/>"),
            e.firstChild.setAttribute("value", ""),
            "" === e.firstChild.getAttribute("value")
          );
        })) ||
        fe("value", function (e, t, n) {
          if (!n && "input" === e.nodeName.toLowerCase()) return e.defaultValue;
        }),
      ce(function (e) {
        return null == e.getAttribute("disabled");
      }) ||
        fe(R, function (e, t, n) {
          var r;
          if (!n)
            return !0 === e[t]
              ? t.toLowerCase()
              : (r = e.getAttributeNode(t)) && r.specified
              ? r.value
              : null;
        }),
      se
    );
  })(C);
  (S.find = d),
    (S.expr = d.selectors),
    (S.expr[":"] = S.expr.pseudos),
    (S.uniqueSort = S.unique = d.uniqueSort),
    (S.text = d.getText),
    (S.isXMLDoc = d.isXML),
    (S.contains = d.contains),
    (S.escapeSelector = d.escape);
  var h = function (e, t, n) {
      var r = [],
        i = void 0 !== n;
      while ((e = e[t]) && 9 !== e.nodeType)
        if (1 === e.nodeType) {
          if (i && S(e).is(n)) break;
          r.push(e);
        }
      return r;
    },
    T = function (e, t) {
      for (var n = []; e; e = e.nextSibling)
        1 === e.nodeType && e !== t && n.push(e);
      return n;
    },
    k = S.expr.match.needsContext;
  function A(e, t) {
    return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase();
  }
  var N = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;
  function j(e, n, r) {
    return m(n)
      ? S.grep(e, function (e, t) {
          return !!n.call(e, t, e) !== r;
        })
      : n.nodeType
      ? S.grep(e, function (e) {
          return (e === n) !== r;
        })
      : "string" != typeof n
      ? S.grep(e, function (e) {
          return -1 < i.call(n, e) !== r;
        })
      : S.filter(n, e, r);
  }
  (S.filter = function (e, t, n) {
    var r = t[0];
    return (
      n && (e = ":not(" + e + ")"),
      1 === t.length && 1 === r.nodeType
        ? S.find.matchesSelector(r, e)
          ? [r]
          : []
        : S.find.matches(
            e,
            S.grep(t, function (e) {
              return 1 === e.nodeType;
            })
          )
    );
  }),
    S.fn.extend({
      find: function (e) {
        var t,
          n,
          r = this.length,
          i = this;
        if ("string" != typeof e)
          return this.pushStack(
            S(e).filter(function () {
              for (t = 0; t < r; t++) if (S.contains(i[t], this)) return !0;
            })
          );
        for (n = this.pushStack([]), t = 0; t < r; t++) S.find(e, i[t], n);
        return 1 < r ? S.uniqueSort(n) : n;
      },
      filter: function (e) {
        return this.pushStack(j(this, e || [], !1));
      },
      not: function (e) {
        return this.pushStack(j(this, e || [], !0));
      },
      is: function (e) {
        return !!j(this, "string" == typeof e && k.test(e) ? S(e) : e || [], !1)
          .length;
      },
    });
  var D,
    q = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
  ((S.fn.init = function (e, t, n) {
    var r, i;
    if (!e) return this;
    if (((n = n || D), "string" == typeof e)) {
      if (
        !(r =
          "<" === e[0] && ">" === e[e.length - 1] && 3 <= e.length
            ? [null, e, null]
            : q.exec(e)) ||
        (!r[1] && t)
      )
        return !t || t.jquery ? (t || n).find(e) : this.constructor(t).find(e);
      if (r[1]) {
        if (
          ((t = t instanceof S ? t[0] : t),
          S.merge(
            this,
            S.parseHTML(r[1], t && t.nodeType ? t.ownerDocument || t : E, !0)
          ),
          N.test(r[1]) && S.isPlainObject(t))
        )
          for (r in t) m(this[r]) ? this[r](t[r]) : this.attr(r, t[r]);
        return this;
      }
      return (
        (i = E.getElementById(r[2])) && ((this[0] = i), (this.length = 1)), this
      );
    }
    return e.nodeType
      ? ((this[0] = e), (this.length = 1), this)
      : m(e)
      ? void 0 !== n.ready
        ? n.ready(e)
        : e(S)
      : S.makeArray(e, this);
  }).prototype = S.fn),
    (D = S(E));
  var L = /^(?:parents|prev(?:Until|All))/,
    H = { children: !0, contents: !0, next: !0, prev: !0 };
  function O(e, t) {
    while ((e = e[t]) && 1 !== e.nodeType);
    return e;
  }
  S.fn.extend({
    has: function (e) {
      var t = S(e, this),
        n = t.length;
      return this.filter(function () {
        for (var e = 0; e < n; e++) if (S.contains(this, t[e])) return !0;
      });
    },
    closest: function (e, t) {
      var n,
        r = 0,
        i = this.length,
        o = [],
        a = "string" != typeof e && S(e);
      if (!k.test(e))
        for (; r < i; r++)
          for (n = this[r]; n && n !== t; n = n.parentNode)
            if (
              n.nodeType < 11 &&
              (a
                ? -1 < a.index(n)
                : 1 === n.nodeType && S.find.matchesSelector(n, e))
            ) {
              o.push(n);
              break;
            }
      return this.pushStack(1 < o.length ? S.uniqueSort(o) : o);
    },
    index: function (e) {
      return e
        ? "string" == typeof e
          ? i.call(S(e), this[0])
          : i.call(this, e.jquery ? e[0] : e)
        : this[0] && this[0].parentNode
        ? this.first().prevAll().length
        : -1;
    },
    add: function (e, t) {
      return this.pushStack(S.uniqueSort(S.merge(this.get(), S(e, t))));
    },
    addBack: function (e) {
      return this.add(null == e ? this.prevObject : this.prevObject.filter(e));
    },
  }),
    S.each(
      {
        parent: function (e) {
          var t = e.parentNode;
          return t && 11 !== t.nodeType ? t : null;
        },
        parents: function (e) {
          return h(e, "parentNode");
        },
        parentsUntil: function (e, t, n) {
          return h(e, "parentNode", n);
        },
        next: function (e) {
          return O(e, "nextSibling");
        },
        prev: function (e) {
          return O(e, "previousSibling");
        },
        nextAll: function (e) {
          return h(e, "nextSibling");
        },
        prevAll: function (e) {
          return h(e, "previousSibling");
        },
        nextUntil: function (e, t, n) {
          return h(e, "nextSibling", n);
        },
        prevUntil: function (e, t, n) {
          return h(e, "previousSibling", n);
        },
        siblings: function (e) {
          return T((e.parentNode || {}).firstChild, e);
        },
        children: function (e) {
          return T(e.firstChild);
        },
        contents: function (e) {
          return null != e.contentDocument && r(e.contentDocument)
            ? e.contentDocument
            : (A(e, "template") && (e = e.content || e),
              S.merge([], e.childNodes));
        },
      },
      function (r, i) {
        S.fn[r] = function (e, t) {
          var n = S.map(this, i, e);
          return (
            "Until" !== r.slice(-5) && (t = e),
            t && "string" == typeof t && (n = S.filter(t, n)),
            1 < this.length &&
              (H[r] || S.uniqueSort(n), L.test(r) && n.reverse()),
            this.pushStack(n)
          );
        };
      }
    );
  var P = /[^\x20\t\r\n\f]+/g;
  function R(e) {
    return e;
  }
  function M(e) {
    throw e;
  }
  function I(e, t, n, r) {
    var i;
    try {
      e && m((i = e.promise))
        ? i.call(e).done(t).fail(n)
        : e && m((i = e.then))
        ? i.call(e, t, n)
        : t.apply(void 0, [e].slice(r));
    } catch (e) {
      n.apply(void 0, [e]);
    }
  }
  (S.Callbacks = function (r) {
    var e, n;
    r =
      "string" == typeof r
        ? ((e = r),
          (n = {}),
          S.each(e.match(P) || [], function (e, t) {
            n[t] = !0;
          }),
          n)
        : S.extend({}, r);
    var i,
      t,
      o,
      a,
      s = [],
      u = [],
      l = -1,
      c = function () {
        for (a = a || r.once, o = i = !0; u.length; l = -1) {
          t = u.shift();
          while (++l < s.length)
            !1 === s[l].apply(t[0], t[1]) &&
              r.stopOnFalse &&
              ((l = s.length), (t = !1));
        }
        r.memory || (t = !1), (i = !1), a && (s = t ? [] : "");
      },
      f = {
        add: function () {
          return (
            s &&
              (t && !i && ((l = s.length - 1), u.push(t)),
              (function n(e) {
                S.each(e, function (e, t) {
                  m(t)
                    ? (r.unique && f.has(t)) || s.push(t)
                    : t && t.length && "string" !== w(t) && n(t);
                });
              })(arguments),
              t && !i && c()),
            this
          );
        },
        remove: function () {
          return (
            S.each(arguments, function (e, t) {
              var n;
              while (-1 < (n = S.inArray(t, s, n)))
                s.splice(n, 1), n <= l && l--;
            }),
            this
          );
        },
        has: function (e) {
          return e ? -1 < S.inArray(e, s) : 0 < s.length;
        },
        empty: function () {
          return s && (s = []), this;
        },
        disable: function () {
          return (a = u = []), (s = t = ""), this;
        },
        disabled: function () {
          return !s;
        },
        lock: function () {
          return (a = u = []), t || i || (s = t = ""), this;
        },
        locked: function () {
          return !!a;
        },
        fireWith: function (e, t) {
          return (
            a ||
              ((t = [e, (t = t || []).slice ? t.slice() : t]),
              u.push(t),
              i || c()),
            this
          );
        },
        fire: function () {
          return f.fireWith(this, arguments), this;
        },
        fired: function () {
          return !!o;
        },
      };
    return f;
  }),
    S.extend({
      Deferred: function (e) {
        var o = [
            [
              "notify",
              "progress",
              S.Callbacks("memory"),
              S.Callbacks("memory"),
              2,
            ],
            [
              "resolve",
              "done",
              S.Callbacks("once memory"),
              S.Callbacks("once memory"),
              0,
              "resolved",
            ],
            [
              "reject",
              "fail",
              S.Callbacks("once memory"),
              S.Callbacks("once memory"),
              1,
              "rejected",
            ],
          ],
          i = "pending",
          a = {
            state: function () {
              return i;
            },
            always: function () {
              return s.done(arguments).fail(arguments), this;
            },
            catch: function (e) {
              return a.then(null, e);
            },
            pipe: function () {
              var i = arguments;
              return S.Deferred(function (r) {
                S.each(o, function (e, t) {
                  var n = m(i[t[4]]) && i[t[4]];
                  s[t[1]](function () {
                    var e = n && n.apply(this, arguments);
                    e && m(e.promise)
                      ? e
                          .promise()
                          .progress(r.notify)
                          .done(r.resolve)
                          .fail(r.reject)
                      : r[t[0] + "With"](this, n ? [e] : arguments);
                  });
                }),
                  (i = null);
              }).promise();
            },
            then: function (t, n, r) {
              var u = 0;
              function l(i, o, a, s) {
                return function () {
                  var n = this,
                    r = arguments,
                    e = function () {
                      var e, t;
                      if (!(i < u)) {
                        if ((e = a.apply(n, r)) === o.promise())
                          throw new TypeError("Thenable self-resolution");
                        (t =
                          e &&
                          ("object" == typeof e || "function" == typeof e) &&
                          e.then),
                          m(t)
                            ? s
                              ? t.call(e, l(u, o, R, s), l(u, o, M, s))
                              : (u++,
                                t.call(
                                  e,
                                  l(u, o, R, s),
                                  l(u, o, M, s),
                                  l(u, o, R, o.notifyWith)
                                ))
                            : (a !== R && ((n = void 0), (r = [e])),
                              (s || o.resolveWith)(n, r));
                      }
                    },
                    t = s
                      ? e
                      : function () {
                          try {
                            e();
                          } catch (e) {
                            S.Deferred.exceptionHook &&
                              S.Deferred.exceptionHook(e, t.stackTrace),
                              u <= i + 1 &&
                                (a !== M && ((n = void 0), (r = [e])),
                                o.rejectWith(n, r));
                          }
                        };
                  i
                    ? t()
                    : (S.Deferred.getStackHook &&
                        (t.stackTrace = S.Deferred.getStackHook()),
                      C.setTimeout(t));
                };
              }
              return S.Deferred(function (e) {
                o[0][3].add(l(0, e, m(r) ? r : R, e.notifyWith)),
                  o[1][3].add(l(0, e, m(t) ? t : R)),
                  o[2][3].add(l(0, e, m(n) ? n : M));
              }).promise();
            },
            promise: function (e) {
              return null != e ? S.extend(e, a) : a;
            },
          },
          s = {};
        return (
          S.each(o, function (e, t) {
            var n = t[2],
              r = t[5];
            (a[t[1]] = n.add),
              r &&
                n.add(
                  function () {
                    i = r;
                  },
                  o[3 - e][2].disable,
                  o[3 - e][3].disable,
                  o[0][2].lock,
                  o[0][3].lock
                ),
              n.add(t[3].fire),
              (s[t[0]] = function () {
                return (
                  s[t[0] + "With"](this === s ? void 0 : this, arguments), this
                );
              }),
              (s[t[0] + "With"] = n.fireWith);
          }),
          a.promise(s),
          e && e.call(s, s),
          s
        );
      },
      when: function (e) {
        var n = arguments.length,
          t = n,
          r = Array(t),
          i = s.call(arguments),
          o = S.Deferred(),
          a = function (t) {
            return function (e) {
              (r[t] = this),
                (i[t] = 1 < arguments.length ? s.call(arguments) : e),
                --n || o.resolveWith(r, i);
            };
          };
        if (
          n <= 1 &&
          (I(e, o.done(a(t)).resolve, o.reject, !n),
          "pending" === o.state() || m(i[t] && i[t].then))
        )
          return o.then();
        while (t--) I(i[t], a(t), o.reject);
        return o.promise();
      },
    });
  var W = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
  (S.Deferred.exceptionHook = function (e, t) {
    C.console &&
      C.console.warn &&
      e &&
      W.test(e.name) &&
      C.console.warn("jQuery.Deferred exception: " + e.message, e.stack, t);
  }),
    (S.readyException = function (e) {
      C.setTimeout(function () {
        throw e;
      });
    });
  var F = S.Deferred();
  function B() {
    E.removeEventListener("DOMContentLoaded", B),
      C.removeEventListener("load", B),
      S.ready();
  }
  (S.fn.ready = function (e) {
    return (
      F.then(e)["catch"](function (e) {
        S.readyException(e);
      }),
      this
    );
  }),
    S.extend({
      isReady: !1,
      readyWait: 1,
      ready: function (e) {
        (!0 === e ? --S.readyWait : S.isReady) ||
          ((S.isReady = !0) !== e && 0 < --S.readyWait) ||
          F.resolveWith(E, [S]);
      },
    }),
    (S.ready.then = F.then),
    "complete" === E.readyState ||
    ("loading" !== E.readyState && !E.documentElement.doScroll)
      ? C.setTimeout(S.ready)
      : (E.addEventListener("DOMContentLoaded", B),
        C.addEventListener("load", B));
  var $ = function (e, t, n, r, i, o, a) {
      var s = 0,
        u = e.length,
        l = null == n;
      if ("object" === w(n))
        for (s in ((i = !0), n)) $(e, t, s, n[s], !0, o, a);
      else if (
        void 0 !== r &&
        ((i = !0),
        m(r) || (a = !0),
        l &&
          (a
            ? (t.call(e, r), (t = null))
            : ((l = t),
              (t = function (e, t, n) {
                return l.call(S(e), n);
              }))),
        t)
      )
        for (; s < u; s++) t(e[s], n, a ? r : r.call(e[s], s, t(e[s], n)));
      return i ? e : l ? t.call(e) : u ? t(e[0], n) : o;
    },
    _ = /^-ms-/,
    z = /-([a-z])/g;
  function U(e, t) {
    return t.toUpperCase();
  }
  function X(e) {
    return e.replace(_, "ms-").replace(z, U);
  }
  var V = function (e) {
    return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType;
  };
  function G() {
    this.expando = S.expando + G.uid++;
  }
  (G.uid = 1),
    (G.prototype = {
      cache: function (e) {
        var t = e[this.expando];
        return (
          t ||
            ((t = {}),
            V(e) &&
              (e.nodeType
                ? (e[this.expando] = t)
                : Object.defineProperty(e, this.expando, {
                    value: t,
                    configurable: !0,
                  }))),
          t
        );
      },
      set: function (e, t, n) {
        var r,
          i = this.cache(e);
        if ("string" == typeof t) i[X(t)] = n;
        else for (r in t) i[X(r)] = t[r];
        return i;
      },
      get: function (e, t) {
        return void 0 === t
          ? this.cache(e)
          : e[this.expando] && e[this.expando][X(t)];
      },
      access: function (e, t, n) {
        return void 0 === t || (t && "string" == typeof t && void 0 === n)
          ? this.get(e, t)
          : (this.set(e, t, n), void 0 !== n ? n : t);
      },
      remove: function (e, t) {
        var n,
          r = e[this.expando];
        if (void 0 !== r) {
          if (void 0 !== t) {
            n = (t = Array.isArray(t)
              ? t.map(X)
              : (t = X(t)) in r
              ? [t]
              : t.match(P) || []).length;
            while (n--) delete r[t[n]];
          }
          (void 0 === t || S.isEmptyObject(r)) &&
            (e.nodeType ? (e[this.expando] = void 0) : delete e[this.expando]);
        }
      },
      hasData: function (e) {
        var t = e[this.expando];
        return void 0 !== t && !S.isEmptyObject(t);
      },
    });
  var Y = new G(),
    Q = new G(),
    J = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
    K = /[A-Z]/g;
  function Z(e, t, n) {
    var r, i;
    if (void 0 === n && 1 === e.nodeType)
      if (
        ((r = "data-" + t.replace(K, "-$&").toLowerCase()),
        "string" == typeof (n = e.getAttribute(r)))
      ) {
        try {
          n =
            "true" === (i = n) ||
            ("false" !== i &&
              ("null" === i
                ? null
                : i === +i + ""
                ? +i
                : J.test(i)
                ? JSON.parse(i)
                : i));
        } catch (e) {}
        Q.set(e, t, n);
      } else n = void 0;
    return n;
  }
  S.extend({
    hasData: function (e) {
      return Q.hasData(e) || Y.hasData(e);
    },
    data: function (e, t, n) {
      return Q.access(e, t, n);
    },
    removeData: function (e, t) {
      Q.remove(e, t);
    },
    _data: function (e, t, n) {
      return Y.access(e, t, n);
    },
    _removeData: function (e, t) {
      Y.remove(e, t);
    },
  }),
    S.fn.extend({
      data: function (n, e) {
        var t,
          r,
          i,
          o = this[0],
          a = o && o.attributes;
        if (void 0 === n) {
          if (
            this.length &&
            ((i = Q.get(o)), 1 === o.nodeType && !Y.get(o, "hasDataAttrs"))
          ) {
            t = a.length;
            while (t--)
              a[t] &&
                0 === (r = a[t].name).indexOf("data-") &&
                ((r = X(r.slice(5))), Z(o, r, i[r]));
            Y.set(o, "hasDataAttrs", !0);
          }
          return i;
        }
        return "object" == typeof n
          ? this.each(function () {
              Q.set(this, n);
            })
          : $(
              this,
              function (e) {
                var t;
                if (o && void 0 === e)
                  return void 0 !== (t = Q.get(o, n))
                    ? t
                    : void 0 !== (t = Z(o, n))
                    ? t
                    : void 0;
                this.each(function () {
                  Q.set(this, n, e);
                });
              },
              null,
              e,
              1 < arguments.length,
              null,
              !0
            );
      },
      removeData: function (e) {
        return this.each(function () {
          Q.remove(this, e);
        });
      },
    }),
    S.extend({
      queue: function (e, t, n) {
        var r;
        if (e)
          return (
            (t = (t || "fx") + "queue"),
            (r = Y.get(e, t)),
            n &&
              (!r || Array.isArray(n)
                ? (r = Y.access(e, t, S.makeArray(n)))
                : r.push(n)),
            r || []
          );
      },
      dequeue: function (e, t) {
        t = t || "fx";
        var n = S.queue(e, t),
          r = n.length,
          i = n.shift(),
          o = S._queueHooks(e, t);
        "inprogress" === i && ((i = n.shift()), r--),
          i &&
            ("fx" === t && n.unshift("inprogress"),
            delete o.stop,
            i.call(
              e,
              function () {
                S.dequeue(e, t);
              },
              o
            )),
          !r && o && o.empty.fire();
      },
      _queueHooks: function (e, t) {
        var n = t + "queueHooks";
        return (
          Y.get(e, n) ||
          Y.access(e, n, {
            empty: S.Callbacks("once memory").add(function () {
              Y.remove(e, [t + "queue", n]);
            }),
          })
        );
      },
    }),
    S.fn.extend({
      queue: function (t, n) {
        var e = 2;
        return (
          "string" != typeof t && ((n = t), (t = "fx"), e--),
          arguments.length < e
            ? S.queue(this[0], t)
            : void 0 === n
            ? this
            : this.each(function () {
                var e = S.queue(this, t, n);
                S._queueHooks(this, t),
                  "fx" === t && "inprogress" !== e[0] && S.dequeue(this, t);
              })
        );
      },
      dequeue: function (e) {
        return this.each(function () {
          S.dequeue(this, e);
        });
      },
      clearQueue: function (e) {
        return this.queue(e || "fx", []);
      },
      promise: function (e, t) {
        var n,
          r = 1,
          i = S.Deferred(),
          o = this,
          a = this.length,
          s = function () {
            --r || i.resolveWith(o, [o]);
          };
        "string" != typeof e && ((t = e), (e = void 0)), (e = e || "fx");
        while (a--)
          (n = Y.get(o[a], e + "queueHooks")) &&
            n.empty &&
            (r++, n.empty.add(s));
        return s(), i.promise(t);
      },
    });
  var ee = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
    te = new RegExp("^(?:([+-])=|)(" + ee + ")([a-z%]*)$", "i"),
    ne = ["Top", "Right", "Bottom", "Left"],
    re = E.documentElement,
    ie = function (e) {
      return S.contains(e.ownerDocument, e);
    },
    oe = { composed: !0 };
  re.getRootNode &&
    (ie = function (e) {
      return (
        S.contains(e.ownerDocument, e) || e.getRootNode(oe) === e.ownerDocument
      );
    });
  var ae = function (e, t) {
    return (
      "none" === (e = t || e).style.display ||
      ("" === e.style.display && ie(e) && "none" === S.css(e, "display"))
    );
  };
  function se(e, t, n, r) {
    var i,
      o,
      a = 20,
      s = r
        ? function () {
            return r.cur();
          }
        : function () {
            return S.css(e, t, "");
          },
      u = s(),
      l = (n && n[3]) || (S.cssNumber[t] ? "" : "px"),
      c =
        e.nodeType &&
        (S.cssNumber[t] || ("px" !== l && +u)) &&
        te.exec(S.css(e, t));
    if (c && c[3] !== l) {
      (u /= 2), (l = l || c[3]), (c = +u || 1);
      while (a--)
        S.style(e, t, c + l),
          (1 - o) * (1 - (o = s() / u || 0.5)) <= 0 && (a = 0),
          (c /= o);
      (c *= 2), S.style(e, t, c + l), (n = n || []);
    }
    return (
      n &&
        ((c = +c || +u || 0),
        (i = n[1] ? c + (n[1] + 1) * n[2] : +n[2]),
        r && ((r.unit = l), (r.start = c), (r.end = i))),
      i
    );
  }
  var ue = {};
  function le(e, t) {
    for (var n, r, i, o, a, s, u, l = [], c = 0, f = e.length; c < f; c++)
      (r = e[c]).style &&
        ((n = r.style.display),
        t
          ? ("none" === n &&
              ((l[c] = Y.get(r, "display") || null),
              l[c] || (r.style.display = "")),
            "" === r.style.display &&
              ae(r) &&
              (l[c] =
                ((u = a = o = void 0),
                (a = (i = r).ownerDocument),
                (s = i.nodeName),
                (u = ue[s]) ||
                  ((o = a.body.appendChild(a.createElement(s))),
                  (u = S.css(o, "display")),
                  o.parentNode.removeChild(o),
                  "none" === u && (u = "block"),
                  (ue[s] = u)))))
          : "none" !== n && ((l[c] = "none"), Y.set(r, "display", n)));
    for (c = 0; c < f; c++) null != l[c] && (e[c].style.display = l[c]);
    return e;
  }
  S.fn.extend({
    show: function () {
      return le(this, !0);
    },
    hide: function () {
      return le(this);
    },
    toggle: function (e) {
      return "boolean" == typeof e
        ? e
          ? this.show()
          : this.hide()
        : this.each(function () {
            ae(this) ? S(this).show() : S(this).hide();
          });
    },
  });
  var ce,
    fe,
    pe = /^(?:checkbox|radio)$/i,
    de = /<([a-z][^\/\0>\x20\t\r\n\f]*)/i,
    he = /^$|^module$|\/(?:java|ecma)script/i;
  (ce = E.createDocumentFragment().appendChild(E.createElement("div"))),
    (fe = E.createElement("input")).setAttribute("type", "radio"),
    fe.setAttribute("checked", "checked"),
    fe.setAttribute("name", "t"),
    ce.appendChild(fe),
    (y.checkClone = ce.cloneNode(!0).cloneNode(!0).lastChild.checked),
    (ce.innerHTML = "<textarea>x</textarea>"),
    (y.noCloneChecked = !!ce.cloneNode(!0).lastChild.defaultValue),
    (ce.innerHTML = "<option></option>"),
    (y.option = !!ce.lastChild);
  var ge = {
    thead: [1, "<table>", "</table>"],
    col: [2, "<table><colgroup>", "</colgroup></table>"],
    tr: [2, "<table><tbody>", "</tbody></table>"],
    td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
    _default: [0, "", ""],
  };
  function ve(e, t) {
    var n;
    return (
      (n =
        "undefined" != typeof e.getElementsByTagName
          ? e.getElementsByTagName(t || "*")
          : "undefined" != typeof e.querySelectorAll
          ? e.querySelectorAll(t || "*")
          : []),
      void 0 === t || (t && A(e, t)) ? S.merge([e], n) : n
    );
  }
  function ye(e, t) {
    for (var n = 0, r = e.length; n < r; n++)
      Y.set(e[n], "globalEval", !t || Y.get(t[n], "globalEval"));
  }
  (ge.tbody = ge.tfoot = ge.colgroup = ge.caption = ge.thead),
    (ge.th = ge.td),
    y.option ||
      (ge.optgroup = ge.option =
        [1, "<select multiple='multiple'>", "</select>"]);
  var me = /<|&#?\w+;/;
  function xe(e, t, n, r, i) {
    for (
      var o,
        a,
        s,
        u,
        l,
        c,
        f = t.createDocumentFragment(),
        p = [],
        d = 0,
        h = e.length;
      d < h;
      d++
    )
      if ((o = e[d]) || 0 === o)
        if ("object" === w(o)) S.merge(p, o.nodeType ? [o] : o);
        else if (me.test(o)) {
          (a = a || f.appendChild(t.createElement("div"))),
            (s = (de.exec(o) || ["", ""])[1].toLowerCase()),
            (u = ge[s] || ge._default),
            (a.innerHTML = u[1] + S.htmlPrefilter(o) + u[2]),
            (c = u[0]);
          while (c--) a = a.lastChild;
          S.merge(p, a.childNodes), ((a = f.firstChild).textContent = "");
        } else p.push(t.createTextNode(o));
    (f.textContent = ""), (d = 0);
    while ((o = p[d++]))
      if (r && -1 < S.inArray(o, r)) i && i.push(o);
      else if (
        ((l = ie(o)), (a = ve(f.appendChild(o), "script")), l && ye(a), n)
      ) {
        c = 0;
        while ((o = a[c++])) he.test(o.type || "") && n.push(o);
      }
    return f;
  }
  var be = /^([^.]*)(?:\.(.+)|)/;
  function we() {
    return !0;
  }
  function Te() {
    return !1;
  }
  function Ce(e, t) {
    return (
      (e ===
        (function () {
          try {
            return E.activeElement;
          } catch (e) {}
        })()) ==
      ("focus" === t)
    );
  }
  function Ee(e, t, n, r, i, o) {
    var a, s;
    if ("object" == typeof t) {
      for (s in ("string" != typeof n && ((r = r || n), (n = void 0)), t))
        Ee(e, s, n, r, t[s], o);
      return e;
    }
    if (
      (null == r && null == i
        ? ((i = n), (r = n = void 0))
        : null == i &&
          ("string" == typeof n
            ? ((i = r), (r = void 0))
            : ((i = r), (r = n), (n = void 0))),
      !1 === i)
    )
      i = Te;
    else if (!i) return e;
    return (
      1 === o &&
        ((a = i),
        ((i = function (e) {
          return S().off(e), a.apply(this, arguments);
        }).guid = a.guid || (a.guid = S.guid++))),
      e.each(function () {
        S.event.add(this, t, i, r, n);
      })
    );
  }
  function Se(e, i, o) {
    o
      ? (Y.set(e, i, !1),
        S.event.add(e, i, {
          namespace: !1,
          handler: function (e) {
            var t,
              n,
              r = Y.get(this, i);
            if (1 & e.isTrigger && this[i]) {
              if (r.length)
                (S.event.special[i] || {}).delegateType && e.stopPropagation();
              else if (
                ((r = s.call(arguments)),
                Y.set(this, i, r),
                (t = o(this, i)),
                this[i](),
                r !== (n = Y.get(this, i)) || t ? Y.set(this, i, !1) : (n = {}),
                r !== n)
              )
                return (
                  e.stopImmediatePropagation(), e.preventDefault(), n && n.value
                );
            } else
              r.length &&
                (Y.set(this, i, {
                  value: S.event.trigger(
                    S.extend(r[0], S.Event.prototype),
                    r.slice(1),
                    this
                  ),
                }),
                e.stopImmediatePropagation());
          },
        }))
      : void 0 === Y.get(e, i) && S.event.add(e, i, we);
  }
  (S.event = {
    global: {},
    add: function (t, e, n, r, i) {
      var o,
        a,
        s,
        u,
        l,
        c,
        f,
        p,
        d,
        h,
        g,
        v = Y.get(t);
      if (V(t)) {
        n.handler && ((n = (o = n).handler), (i = o.selector)),
          i && S.find.matchesSelector(re, i),
          n.guid || (n.guid = S.guid++),
          (u = v.events) || (u = v.events = Object.create(null)),
          (a = v.handle) ||
            (a = v.handle =
              function (e) {
                return "undefined" != typeof S && S.event.triggered !== e.type
                  ? S.event.dispatch.apply(t, arguments)
                  : void 0;
              }),
          (l = (e = (e || "").match(P) || [""]).length);
        while (l--)
          (d = g = (s = be.exec(e[l]) || [])[1]),
            (h = (s[2] || "").split(".").sort()),
            d &&
              ((f = S.event.special[d] || {}),
              (d = (i ? f.delegateType : f.bindType) || d),
              (f = S.event.special[d] || {}),
              (c = S.extend(
                {
                  type: d,
                  origType: g,
                  data: r,
                  handler: n,
                  guid: n.guid,
                  selector: i,
                  needsContext: i && S.expr.match.needsContext.test(i),
                  namespace: h.join("."),
                },
                o
              )),
              (p = u[d]) ||
                (((p = u[d] = []).delegateCount = 0),
                (f.setup && !1 !== f.setup.call(t, r, h, a)) ||
                  (t.addEventListener && t.addEventListener(d, a))),
              f.add &&
                (f.add.call(t, c), c.handler.guid || (c.handler.guid = n.guid)),
              i ? p.splice(p.delegateCount++, 0, c) : p.push(c),
              (S.event.global[d] = !0));
      }
    },
    remove: function (e, t, n, r, i) {
      var o,
        a,
        s,
        u,
        l,
        c,
        f,
        p,
        d,
        h,
        g,
        v = Y.hasData(e) && Y.get(e);
      if (v && (u = v.events)) {
        l = (t = (t || "").match(P) || [""]).length;
        while (l--)
          if (
            ((d = g = (s = be.exec(t[l]) || [])[1]),
            (h = (s[2] || "").split(".").sort()),
            d)
          ) {
            (f = S.event.special[d] || {}),
              (p = u[(d = (r ? f.delegateType : f.bindType) || d)] || []),
              (s =
                s[2] &&
                new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)")),
              (a = o = p.length);
            while (o--)
              (c = p[o]),
                (!i && g !== c.origType) ||
                  (n && n.guid !== c.guid) ||
                  (s && !s.test(c.namespace)) ||
                  (r && r !== c.selector && ("**" !== r || !c.selector)) ||
                  (p.splice(o, 1),
                  c.selector && p.delegateCount--,
                  f.remove && f.remove.call(e, c));
            a &&
              !p.length &&
              ((f.teardown && !1 !== f.teardown.call(e, h, v.handle)) ||
                S.removeEvent(e, d, v.handle),
              delete u[d]);
          } else for (d in u) S.event.remove(e, d + t[l], n, r, !0);
        S.isEmptyObject(u) && Y.remove(e, "handle events");
      }
    },
    dispatch: function (e) {
      var t,
        n,
        r,
        i,
        o,
        a,
        s = new Array(arguments.length),
        u = S.event.fix(e),
        l = (Y.get(this, "events") || Object.create(null))[u.type] || [],
        c = S.event.special[u.type] || {};
      for (s[0] = u, t = 1; t < arguments.length; t++) s[t] = arguments[t];
      if (
        ((u.delegateTarget = this),
        !c.preDispatch || !1 !== c.preDispatch.call(this, u))
      ) {
        (a = S.event.handlers.call(this, u, l)), (t = 0);
        while ((i = a[t++]) && !u.isPropagationStopped()) {
          (u.currentTarget = i.elem), (n = 0);
          while ((o = i.handlers[n++]) && !u.isImmediatePropagationStopped())
            (u.rnamespace &&
              !1 !== o.namespace &&
              !u.rnamespace.test(o.namespace)) ||
              ((u.handleObj = o),
              (u.data = o.data),
              void 0 !==
                (r = (
                  (S.event.special[o.origType] || {}).handle || o.handler
                ).apply(i.elem, s)) &&
                !1 === (u.result = r) &&
                (u.preventDefault(), u.stopPropagation()));
        }
        return c.postDispatch && c.postDispatch.call(this, u), u.result;
      }
    },
    handlers: function (e, t) {
      var n,
        r,
        i,
        o,
        a,
        s = [],
        u = t.delegateCount,
        l = e.target;
      if (u && l.nodeType && !("click" === e.type && 1 <= e.button))
        for (; l !== this; l = l.parentNode || this)
          if (1 === l.nodeType && ("click" !== e.type || !0 !== l.disabled)) {
            for (o = [], a = {}, n = 0; n < u; n++)
              void 0 === a[(i = (r = t[n]).selector + " ")] &&
                (a[i] = r.needsContext
                  ? -1 < S(i, this).index(l)
                  : S.find(i, this, null, [l]).length),
                a[i] && o.push(r);
            o.length && s.push({ elem: l, handlers: o });
          }
      return (
        (l = this), u < t.length && s.push({ elem: l, handlers: t.slice(u) }), s
      );
    },
    addProp: function (t, e) {
      Object.defineProperty(S.Event.prototype, t, {
        enumerable: !0,
        configurable: !0,
        get: m(e)
          ? function () {
              if (this.originalEvent) return e(this.originalEvent);
            }
          : function () {
              if (this.originalEvent) return this.originalEvent[t];
            },
        set: function (e) {
          Object.defineProperty(this, t, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: e,
          });
        },
      });
    },
    fix: function (e) {
      return e[S.expando] ? e : new S.Event(e);
    },
    special: {
      load: { noBubble: !0 },
      click: {
        setup: function (e) {
          var t = this || e;
          return (
            pe.test(t.type) && t.click && A(t, "input") && Se(t, "click", we),
            !1
          );
        },
        trigger: function (e) {
          var t = this || e;
          return (
            pe.test(t.type) && t.click && A(t, "input") && Se(t, "click"), !0
          );
        },
        _default: function (e) {
          var t = e.target;
          return (
            (pe.test(t.type) &&
              t.click &&
              A(t, "input") &&
              Y.get(t, "click")) ||
            A(t, "a")
          );
        },
      },
      beforeunload: {
        postDispatch: function (e) {
          void 0 !== e.result &&
            e.originalEvent &&
            (e.originalEvent.returnValue = e.result);
        },
      },
    },
  }),
    (S.removeEvent = function (e, t, n) {
      e.removeEventListener && e.removeEventListener(t, n);
    }),
    (S.Event = function (e, t) {
      if (!(this instanceof S.Event)) return new S.Event(e, t);
      e && e.type
        ? ((this.originalEvent = e),
          (this.type = e.type),
          (this.isDefaultPrevented =
            e.defaultPrevented ||
            (void 0 === e.defaultPrevented && !1 === e.returnValue)
              ? we
              : Te),
          (this.target =
            e.target && 3 === e.target.nodeType
              ? e.target.parentNode
              : e.target),
          (this.currentTarget = e.currentTarget),
          (this.relatedTarget = e.relatedTarget))
        : (this.type = e),
        t && S.extend(this, t),
        (this.timeStamp = (e && e.timeStamp) || Date.now()),
        (this[S.expando] = !0);
    }),
    (S.Event.prototype = {
      constructor: S.Event,
      isDefaultPrevented: Te,
      isPropagationStopped: Te,
      isImmediatePropagationStopped: Te,
      isSimulated: !1,
      preventDefault: function () {
        var e = this.originalEvent;
        (this.isDefaultPrevented = we),
          e && !this.isSimulated && e.preventDefault();
      },
      stopPropagation: function () {
        var e = this.originalEvent;
        (this.isPropagationStopped = we),
          e && !this.isSimulated && e.stopPropagation();
      },
      stopImmediatePropagation: function () {
        var e = this.originalEvent;
        (this.isImmediatePropagationStopped = we),
          e && !this.isSimulated && e.stopImmediatePropagation(),
          this.stopPropagation();
      },
    }),
    S.each(
      {
        altKey: !0,
        bubbles: !0,
        cancelable: !0,
        changedTouches: !0,
        ctrlKey: !0,
        detail: !0,
        eventPhase: !0,
        metaKey: !0,
        pageX: !0,
        pageY: !0,
        shiftKey: !0,
        view: !0,
        char: !0,
        code: !0,
        charCode: !0,
        key: !0,
        keyCode: !0,
        button: !0,
        buttons: !0,
        clientX: !0,
        clientY: !0,
        offsetX: !0,
        offsetY: !0,
        pointerId: !0,
        pointerType: !0,
        screenX: !0,
        screenY: !0,
        targetTouches: !0,
        toElement: !0,
        touches: !0,
        which: !0,
      },
      S.event.addProp
    ),
    S.each({ focus: "focusin", blur: "focusout" }, function (e, t) {
      S.event.special[e] = {
        setup: function () {
          return Se(this, e, Ce), !1;
        },
        trigger: function () {
          return Se(this, e), !0;
        },
        _default: function () {
          return !0;
        },
        delegateType: t,
      };
    }),
    S.each(
      {
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout",
      },
      function (e, i) {
        S.event.special[e] = {
          delegateType: i,
          bindType: i,
          handle: function (e) {
            var t,
              n = e.relatedTarget,
              r = e.handleObj;
            return (
              (n && (n === this || S.contains(this, n))) ||
                ((e.type = r.origType),
                (t = r.handler.apply(this, arguments)),
                (e.type = i)),
              t
            );
          },
        };
      }
    ),
    S.fn.extend({
      on: function (e, t, n, r) {
        return Ee(this, e, t, n, r);
      },
      one: function (e, t, n, r) {
        return Ee(this, e, t, n, r, 1);
      },
      off: function (e, t, n) {
        var r, i;
        if (e && e.preventDefault && e.handleObj)
          return (
            (r = e.handleObj),
            S(e.delegateTarget).off(
              r.namespace ? r.origType + "." + r.namespace : r.origType,
              r.selector,
              r.handler
            ),
            this
          );
        if ("object" == typeof e) {
          for (i in e) this.off(i, t, e[i]);
          return this;
        }
        return (
          (!1 !== t && "function" != typeof t) || ((n = t), (t = void 0)),
          !1 === n && (n = Te),
          this.each(function () {
            S.event.remove(this, e, n, t);
          })
        );
      },
    });
  var ke = /<script|<style|<link/i,
    Ae = /checked\s*(?:[^=]|=\s*.checked.)/i,
    Ne = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;
  function je(e, t) {
    return (
      (A(e, "table") &&
        A(11 !== t.nodeType ? t : t.firstChild, "tr") &&
        S(e).children("tbody")[0]) ||
      e
    );
  }
  function De(e) {
    return (e.type = (null !== e.getAttribute("type")) + "/" + e.type), e;
  }
  function qe(e) {
    return (
      "true/" === (e.type || "").slice(0, 5)
        ? (e.type = e.type.slice(5))
        : e.removeAttribute("type"),
      e
    );
  }
  function Le(e, t) {
    var n, r, i, o, a, s;
    if (1 === t.nodeType) {
      if (Y.hasData(e) && (s = Y.get(e).events))
        for (i in (Y.remove(t, "handle events"), s))
          for (n = 0, r = s[i].length; n < r; n++) S.event.add(t, i, s[i][n]);
      Q.hasData(e) && ((o = Q.access(e)), (a = S.extend({}, o)), Q.set(t, a));
    }
  }
  function He(n, r, i, o) {
    r = g(r);
    var e,
      t,
      a,
      s,
      u,
      l,
      c = 0,
      f = n.length,
      p = f - 1,
      d = r[0],
      h = m(d);
    if (h || (1 < f && "string" == typeof d && !y.checkClone && Ae.test(d)))
      return n.each(function (e) {
        var t = n.eq(e);
        h && (r[0] = d.call(this, e, t.html())), He(t, r, i, o);
      });
    if (
      f &&
      ((t = (e = xe(r, n[0].ownerDocument, !1, n, o)).firstChild),
      1 === e.childNodes.length && (e = t),
      t || o)
    ) {
      for (s = (a = S.map(ve(e, "script"), De)).length; c < f; c++)
        (u = e),
          c !== p &&
            ((u = S.clone(u, !0, !0)), s && S.merge(a, ve(u, "script"))),
          i.call(n[c], u, c);
      if (s)
        for (l = a[a.length - 1].ownerDocument, S.map(a, qe), c = 0; c < s; c++)
          (u = a[c]),
            he.test(u.type || "") &&
              !Y.access(u, "globalEval") &&
              S.contains(l, u) &&
              (u.src && "module" !== (u.type || "").toLowerCase()
                ? S._evalUrl &&
                  !u.noModule &&
                  S._evalUrl(
                    u.src,
                    { nonce: u.nonce || u.getAttribute("nonce") },
                    l
                  )
                : b(u.textContent.replace(Ne, ""), u, l));
    }
    return n;
  }
  function Oe(e, t, n) {
    for (var r, i = t ? S.filter(t, e) : e, o = 0; null != (r = i[o]); o++)
      n || 1 !== r.nodeType || S.cleanData(ve(r)),
        r.parentNode &&
          (n && ie(r) && ye(ve(r, "script")), r.parentNode.removeChild(r));
    return e;
  }
  S.extend({
    htmlPrefilter: function (e) {
      return e;
    },
    clone: function (e, t, n) {
      var r,
        i,
        o,
        a,
        s,
        u,
        l,
        c = e.cloneNode(!0),
        f = ie(e);
      if (
        !(
          y.noCloneChecked ||
          (1 !== e.nodeType && 11 !== e.nodeType) ||
          S.isXMLDoc(e)
        )
      )
        for (a = ve(c), r = 0, i = (o = ve(e)).length; r < i; r++)
          (s = o[r]),
            (u = a[r]),
            void 0,
            "input" === (l = u.nodeName.toLowerCase()) && pe.test(s.type)
              ? (u.checked = s.checked)
              : ("input" !== l && "textarea" !== l) ||
                (u.defaultValue = s.defaultValue);
      if (t)
        if (n)
          for (o = o || ve(e), a = a || ve(c), r = 0, i = o.length; r < i; r++)
            Le(o[r], a[r]);
        else Le(e, c);
      return (
        0 < (a = ve(c, "script")).length && ye(a, !f && ve(e, "script")), c
      );
    },
    cleanData: function (e) {
      for (var t, n, r, i = S.event.special, o = 0; void 0 !== (n = e[o]); o++)
        if (V(n)) {
          if ((t = n[Y.expando])) {
            if (t.events)
              for (r in t.events)
                i[r] ? S.event.remove(n, r) : S.removeEvent(n, r, t.handle);
            n[Y.expando] = void 0;
          }
          n[Q.expando] && (n[Q.expando] = void 0);
        }
    },
  }),
    S.fn.extend({
      detach: function (e) {
        return Oe(this, e, !0);
      },
      remove: function (e) {
        return Oe(this, e);
      },
      text: function (e) {
        return $(
          this,
          function (e) {
            return void 0 === e
              ? S.text(this)
              : this.empty().each(function () {
                  (1 !== this.nodeType &&
                    11 !== this.nodeType &&
                    9 !== this.nodeType) ||
                    (this.textContent = e);
                });
          },
          null,
          e,
          arguments.length
        );
      },
      append: function () {
        return He(this, arguments, function (e) {
          (1 !== this.nodeType &&
            11 !== this.nodeType &&
            9 !== this.nodeType) ||
            je(this, e).appendChild(e);
        });
      },
      prepend: function () {
        return He(this, arguments, function (e) {
          if (
            1 === this.nodeType ||
            11 === this.nodeType ||
            9 === this.nodeType
          ) {
            var t = je(this, e);
            t.insertBefore(e, t.firstChild);
          }
        });
      },
      before: function () {
        return He(this, arguments, function (e) {
          this.parentNode && this.parentNode.insertBefore(e, this);
        });
      },
      after: function () {
        return He(this, arguments, function (e) {
          this.parentNode && this.parentNode.insertBefore(e, this.nextSibling);
        });
      },
      empty: function () {
        for (var e, t = 0; null != (e = this[t]); t++)
          1 === e.nodeType && (S.cleanData(ve(e, !1)), (e.textContent = ""));
        return this;
      },
      clone: function (e, t) {
        return (
          (e = null != e && e),
          (t = null == t ? e : t),
          this.map(function () {
            return S.clone(this, e, t);
          })
        );
      },
      html: function (e) {
        return $(
          this,
          function (e) {
            var t = this[0] || {},
              n = 0,
              r = this.length;
            if (void 0 === e && 1 === t.nodeType) return t.innerHTML;
            if (
              "string" == typeof e &&
              !ke.test(e) &&
              !ge[(de.exec(e) || ["", ""])[1].toLowerCase()]
            ) {
              e = S.htmlPrefilter(e);
              try {
                for (; n < r; n++)
                  1 === (t = this[n] || {}).nodeType &&
                    (S.cleanData(ve(t, !1)), (t.innerHTML = e));
                t = 0;
              } catch (e) {}
            }
            t && this.empty().append(e);
          },
          null,
          e,
          arguments.length
        );
      },
      replaceWith: function () {
        var n = [];
        return He(
          this,
          arguments,
          function (e) {
            var t = this.parentNode;
            S.inArray(this, n) < 0 &&
              (S.cleanData(ve(this)), t && t.replaceChild(e, this));
          },
          n
        );
      },
    }),
    S.each(
      {
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith",
      },
      function (e, a) {
        S.fn[e] = function (e) {
          for (var t, n = [], r = S(e), i = r.length - 1, o = 0; o <= i; o++)
            (t = o === i ? this : this.clone(!0)),
              S(r[o])[a](t),
              u.apply(n, t.get());
          return this.pushStack(n);
        };
      }
    );
  var Pe = new RegExp("^(" + ee + ")(?!px)[a-z%]+$", "i"),
    Re = function (e) {
      var t = e.ownerDocument.defaultView;
      return (t && t.opener) || (t = C), t.getComputedStyle(e);
    },
    Me = function (e, t, n) {
      var r,
        i,
        o = {};
      for (i in t) (o[i] = e.style[i]), (e.style[i] = t[i]);
      for (i in ((r = n.call(e)), t)) e.style[i] = o[i];
      return r;
    },
    Ie = new RegExp(ne.join("|"), "i");
  function We(e, t, n) {
    var r,
      i,
      o,
      a,
      s = e.style;
    return (
      (n = n || Re(e)) &&
        ("" !== (a = n.getPropertyValue(t) || n[t]) ||
          ie(e) ||
          (a = S.style(e, t)),
        !y.pixelBoxStyles() &&
          Pe.test(a) &&
          Ie.test(t) &&
          ((r = s.width),
          (i = s.minWidth),
          (o = s.maxWidth),
          (s.minWidth = s.maxWidth = s.width = a),
          (a = n.width),
          (s.width = r),
          (s.minWidth = i),
          (s.maxWidth = o))),
      void 0 !== a ? a + "" : a
    );
  }
  function Fe(e, t) {
    return {
      get: function () {
        if (!e()) return (this.get = t).apply(this, arguments);
        delete this.get;
      },
    };
  }
  !(function () {
    function e() {
      if (l) {
        (u.style.cssText =
          "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0"),
          (l.style.cssText =
            "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%"),
          re.appendChild(u).appendChild(l);
        var e = C.getComputedStyle(l);
        (n = "1%" !== e.top),
          (s = 12 === t(e.marginLeft)),
          (l.style.right = "60%"),
          (o = 36 === t(e.right)),
          (r = 36 === t(e.width)),
          (l.style.position = "absolute"),
          (i = 12 === t(l.offsetWidth / 3)),
          re.removeChild(u),
          (l = null);
      }
    }
    function t(e) {
      return Math.round(parseFloat(e));
    }
    var n,
      r,
      i,
      o,
      a,
      s,
      u = E.createElement("div"),
      l = E.createElement("div");
    l.style &&
      ((l.style.backgroundClip = "content-box"),
      (l.cloneNode(!0).style.backgroundClip = ""),
      (y.clearCloneStyle = "content-box" === l.style.backgroundClip),
      S.extend(y, {
        boxSizingReliable: function () {
          return e(), r;
        },
        pixelBoxStyles: function () {
          return e(), o;
        },
        pixelPosition: function () {
          return e(), n;
        },
        reliableMarginLeft: function () {
          return e(), s;
        },
        scrollboxSize: function () {
          return e(), i;
        },
        reliableTrDimensions: function () {
          var e, t, n, r;
          return (
            null == a &&
              ((e = E.createElement("table")),
              (t = E.createElement("tr")),
              (n = E.createElement("div")),
              (e.style.cssText =
                "position:absolute;left:-11111px;border-collapse:separate"),
              (t.style.cssText = "border:1px solid"),
              (t.style.height = "1px"),
              (n.style.height = "9px"),
              (n.style.display = "block"),
              re.appendChild(e).appendChild(t).appendChild(n),
              (r = C.getComputedStyle(t)),
              (a =
                parseInt(r.height, 10) +
                  parseInt(r.borderTopWidth, 10) +
                  parseInt(r.borderBottomWidth, 10) ===
                t.offsetHeight),
              re.removeChild(e)),
            a
          );
        },
      }));
  })();
  var Be = ["Webkit", "Moz", "ms"],
    $e = E.createElement("div").style,
    _e = {};
  function ze(e) {
    var t = S.cssProps[e] || _e[e];
    return (
      t ||
      (e in $e
        ? e
        : (_e[e] =
            (function (e) {
              var t = e[0].toUpperCase() + e.slice(1),
                n = Be.length;
              while (n--) if ((e = Be[n] + t) in $e) return e;
            })(e) || e))
    );
  }
  var Ue = /^(none|table(?!-c[ea]).+)/,
    Xe = /^--/,
    Ve = { position: "absolute", visibility: "hidden", display: "block" },
    Ge = { letterSpacing: "0", fontWeight: "400" };
  function Ye(e, t, n) {
    var r = te.exec(t);
    return r ? Math.max(0, r[2] - (n || 0)) + (r[3] || "px") : t;
  }
  function Qe(e, t, n, r, i, o) {
    var a = "width" === t ? 1 : 0,
      s = 0,
      u = 0;
    if (n === (r ? "border" : "content")) return 0;
    for (; a < 4; a += 2)
      "margin" === n && (u += S.css(e, n + ne[a], !0, i)),
        r
          ? ("content" === n && (u -= S.css(e, "padding" + ne[a], !0, i)),
            "margin" !== n &&
              (u -= S.css(e, "border" + ne[a] + "Width", !0, i)))
          : ((u += S.css(e, "padding" + ne[a], !0, i)),
            "padding" !== n
              ? (u += S.css(e, "border" + ne[a] + "Width", !0, i))
              : (s += S.css(e, "border" + ne[a] + "Width", !0, i)));
    return (
      !r &&
        0 <= o &&
        (u +=
          Math.max(
            0,
            Math.ceil(
              e["offset" + t[0].toUpperCase() + t.slice(1)] - o - u - s - 0.5
            )
          ) || 0),
      u
    );
  }
  function Je(e, t, n) {
    var r = Re(e),
      i =
        (!y.boxSizingReliable() || n) &&
        "border-box" === S.css(e, "boxSizing", !1, r),
      o = i,
      a = We(e, t, r),
      s = "offset" + t[0].toUpperCase() + t.slice(1);
    if (Pe.test(a)) {
      if (!n) return a;
      a = "auto";
    }
    return (
      ((!y.boxSizingReliable() && i) ||
        (!y.reliableTrDimensions() && A(e, "tr")) ||
        "auto" === a ||
        (!parseFloat(a) && "inline" === S.css(e, "display", !1, r))) &&
        e.getClientRects().length &&
        ((i = "border-box" === S.css(e, "boxSizing", !1, r)),
        (o = s in e) && (a = e[s])),
      (a = parseFloat(a) || 0) +
        Qe(e, t, n || (i ? "border" : "content"), o, r, a) +
        "px"
    );
  }
  function Ke(e, t, n, r, i) {
    return new Ke.prototype.init(e, t, n, r, i);
  }
  S.extend({
    cssHooks: {
      opacity: {
        get: function (e, t) {
          if (t) {
            var n = We(e, "opacity");
            return "" === n ? "1" : n;
          }
        },
      },
    },
    cssNumber: {
      animationIterationCount: !0,
      columnCount: !0,
      fillOpacity: !0,
      flexGrow: !0,
      flexShrink: !0,
      fontWeight: !0,
      gridArea: !0,
      gridColumn: !0,
      gridColumnEnd: !0,
      gridColumnStart: !0,
      gridRow: !0,
      gridRowEnd: !0,
      gridRowStart: !0,
      lineHeight: !0,
      opacity: !0,
      order: !0,
      orphans: !0,
      widows: !0,
      zIndex: !0,
      zoom: !0,
    },
    cssProps: {},
    style: function (e, t, n, r) {
      if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
        var i,
          o,
          a,
          s = X(t),
          u = Xe.test(t),
          l = e.style;
        if (
          (u || (t = ze(s)), (a = S.cssHooks[t] || S.cssHooks[s]), void 0 === n)
        )
          return a && "get" in a && void 0 !== (i = a.get(e, !1, r)) ? i : l[t];
        "string" === (o = typeof n) &&
          (i = te.exec(n)) &&
          i[1] &&
          ((n = se(e, t, i)), (o = "number")),
          null != n &&
            n == n &&
            ("number" !== o ||
              u ||
              (n += (i && i[3]) || (S.cssNumber[s] ? "" : "px")),
            y.clearCloneStyle ||
              "" !== n ||
              0 !== t.indexOf("background") ||
              (l[t] = "inherit"),
            (a && "set" in a && void 0 === (n = a.set(e, n, r))) ||
              (u ? l.setProperty(t, n) : (l[t] = n)));
      }
    },
    css: function (e, t, n, r) {
      var i,
        o,
        a,
        s = X(t);
      return (
        Xe.test(t) || (t = ze(s)),
        (a = S.cssHooks[t] || S.cssHooks[s]) &&
          "get" in a &&
          (i = a.get(e, !0, n)),
        void 0 === i && (i = We(e, t, r)),
        "normal" === i && t in Ge && (i = Ge[t]),
        "" === n || n
          ? ((o = parseFloat(i)), !0 === n || isFinite(o) ? o || 0 : i)
          : i
      );
    },
  }),
    S.each(["height", "width"], function (e, u) {
      S.cssHooks[u] = {
        get: function (e, t, n) {
          if (t)
            return !Ue.test(S.css(e, "display")) ||
              (e.getClientRects().length && e.getBoundingClientRect().width)
              ? Je(e, u, n)
              : Me(e, Ve, function () {
                  return Je(e, u, n);
                });
        },
        set: function (e, t, n) {
          var r,
            i = Re(e),
            o = !y.scrollboxSize() && "absolute" === i.position,
            a = (o || n) && "border-box" === S.css(e, "boxSizing", !1, i),
            s = n ? Qe(e, u, n, a, i) : 0;
          return (
            a &&
              o &&
              (s -= Math.ceil(
                e["offset" + u[0].toUpperCase() + u.slice(1)] -
                  parseFloat(i[u]) -
                  Qe(e, u, "border", !1, i) -
                  0.5
              )),
            s &&
              (r = te.exec(t)) &&
              "px" !== (r[3] || "px") &&
              ((e.style[u] = t), (t = S.css(e, u))),
            Ye(0, t, s)
          );
        },
      };
    }),
    (S.cssHooks.marginLeft = Fe(y.reliableMarginLeft, function (e, t) {
      if (t)
        return (
          (parseFloat(We(e, "marginLeft")) ||
            e.getBoundingClientRect().left -
              Me(e, { marginLeft: 0 }, function () {
                return e.getBoundingClientRect().left;
              })) + "px"
        );
    })),
    S.each({ margin: "", padding: "", border: "Width" }, function (i, o) {
      (S.cssHooks[i + o] = {
        expand: function (e) {
          for (
            var t = 0, n = {}, r = "string" == typeof e ? e.split(" ") : [e];
            t < 4;
            t++
          )
            n[i + ne[t] + o] = r[t] || r[t - 2] || r[0];
          return n;
        },
      }),
        "margin" !== i && (S.cssHooks[i + o].set = Ye);
    }),
    S.fn.extend({
      css: function (e, t) {
        return $(
          this,
          function (e, t, n) {
            var r,
              i,
              o = {},
              a = 0;
            if (Array.isArray(t)) {
              for (r = Re(e), i = t.length; a < i; a++)
                o[t[a]] = S.css(e, t[a], !1, r);
              return o;
            }
            return void 0 !== n ? S.style(e, t, n) : S.css(e, t);
          },
          e,
          t,
          1 < arguments.length
        );
      },
    }),
    (((S.Tween = Ke).prototype = {
      constructor: Ke,
      init: function (e, t, n, r, i, o) {
        (this.elem = e),
          (this.prop = n),
          (this.easing = i || S.easing._default),
          (this.options = t),
          (this.start = this.now = this.cur()),
          (this.end = r),
          (this.unit = o || (S.cssNumber[n] ? "" : "px"));
      },
      cur: function () {
        var e = Ke.propHooks[this.prop];
        return e && e.get ? e.get(this) : Ke.propHooks._default.get(this);
      },
      run: function (e) {
        var t,
          n = Ke.propHooks[this.prop];
        return (
          this.options.duration
            ? (this.pos = t =
                S.easing[this.easing](
                  e,
                  this.options.duration * e,
                  0,
                  1,
                  this.options.duration
                ))
            : (this.pos = t = e),
          (this.now = (this.end - this.start) * t + this.start),
          this.options.step &&
            this.options.step.call(this.elem, this.now, this),
          n && n.set ? n.set(this) : Ke.propHooks._default.set(this),
          this
        );
      },
    }).init.prototype = Ke.prototype),
    ((Ke.propHooks = {
      _default: {
        get: function (e) {
          var t;
          return 1 !== e.elem.nodeType ||
            (null != e.elem[e.prop] && null == e.elem.style[e.prop])
            ? e.elem[e.prop]
            : (t = S.css(e.elem, e.prop, "")) && "auto" !== t
            ? t
            : 0;
        },
        set: function (e) {
          S.fx.step[e.prop]
            ? S.fx.step[e.prop](e)
            : 1 !== e.elem.nodeType ||
              (!S.cssHooks[e.prop] && null == e.elem.style[ze(e.prop)])
            ? (e.elem[e.prop] = e.now)
            : S.style(e.elem, e.prop, e.now + e.unit);
        },
      },
    }).scrollTop = Ke.propHooks.scrollLeft =
      {
        set: function (e) {
          e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now);
        },
      }),
    (S.easing = {
      linear: function (e) {
        return e;
      },
      swing: function (e) {
        return 0.5 - Math.cos(e * Math.PI) / 2;
      },
      _default: "swing",
    }),
    (S.fx = Ke.prototype.init),
    (S.fx.step = {});
  var Ze,
    et,
    tt,
    nt,
    rt = /^(?:toggle|show|hide)$/,
    it = /queueHooks$/;
  function ot() {
    et &&
      (!1 === E.hidden && C.requestAnimationFrame
        ? C.requestAnimationFrame(ot)
        : C.setTimeout(ot, S.fx.interval),
      S.fx.tick());
  }
  function at() {
    return (
      C.setTimeout(function () {
        Ze = void 0;
      }),
      (Ze = Date.now())
    );
  }
  function st(e, t) {
    var n,
      r = 0,
      i = { height: e };
    for (t = t ? 1 : 0; r < 4; r += 2 - t)
      i["margin" + (n = ne[r])] = i["padding" + n] = e;
    return t && (i.opacity = i.width = e), i;
  }
  function ut(e, t, n) {
    for (
      var r,
        i = (lt.tweeners[t] || []).concat(lt.tweeners["*"]),
        o = 0,
        a = i.length;
      o < a;
      o++
    )
      if ((r = i[o].call(n, t, e))) return r;
  }
  function lt(o, e, t) {
    var n,
      a,
      r = 0,
      i = lt.prefilters.length,
      s = S.Deferred().always(function () {
        delete u.elem;
      }),
      u = function () {
        if (a) return !1;
        for (
          var e = Ze || at(),
            t = Math.max(0, l.startTime + l.duration - e),
            n = 1 - (t / l.duration || 0),
            r = 0,
            i = l.tweens.length;
          r < i;
          r++
        )
          l.tweens[r].run(n);
        return (
          s.notifyWith(o, [l, n, t]),
          n < 1 && i
            ? t
            : (i || s.notifyWith(o, [l, 1, 0]), s.resolveWith(o, [l]), !1)
        );
      },
      l = s.promise({
        elem: o,
        props: S.extend({}, e),
        opts: S.extend(!0, { specialEasing: {}, easing: S.easing._default }, t),
        originalProperties: e,
        originalOptions: t,
        startTime: Ze || at(),
        duration: t.duration,
        tweens: [],
        createTween: function (e, t) {
          var n = S.Tween(
            o,
            l.opts,
            e,
            t,
            l.opts.specialEasing[e] || l.opts.easing
          );
          return l.tweens.push(n), n;
        },
        stop: function (e) {
          var t = 0,
            n = e ? l.tweens.length : 0;
          if (a) return this;
          for (a = !0; t < n; t++) l.tweens[t].run(1);
          return (
            e
              ? (s.notifyWith(o, [l, 1, 0]), s.resolveWith(o, [l, e]))
              : s.rejectWith(o, [l, e]),
            this
          );
        },
      }),
      c = l.props;
    for (
      !(function (e, t) {
        var n, r, i, o, a;
        for (n in e)
          if (
            ((i = t[(r = X(n))]),
            (o = e[n]),
            Array.isArray(o) && ((i = o[1]), (o = e[n] = o[0])),
            n !== r && ((e[r] = o), delete e[n]),
            (a = S.cssHooks[r]) && ("expand" in a))
          )
            for (n in ((o = a.expand(o)), delete e[r], o))
              (n in e) || ((e[n] = o[n]), (t[n] = i));
          else t[r] = i;
      })(c, l.opts.specialEasing);
      r < i;
      r++
    )
      if ((n = lt.prefilters[r].call(l, o, c, l.opts)))
        return (
          m(n.stop) &&
            (S._queueHooks(l.elem, l.opts.queue).stop = n.stop.bind(n)),
          n
        );
    return (
      S.map(c, ut, l),
      m(l.opts.start) && l.opts.start.call(o, l),
      l
        .progress(l.opts.progress)
        .done(l.opts.done, l.opts.complete)
        .fail(l.opts.fail)
        .always(l.opts.always),
      S.fx.timer(S.extend(u, { elem: o, anim: l, queue: l.opts.queue })),
      l
    );
  }
  (S.Animation = S.extend(lt, {
    tweeners: {
      "*": [
        function (e, t) {
          var n = this.createTween(e, t);
          return se(n.elem, e, te.exec(t), n), n;
        },
      ],
    },
    tweener: function (e, t) {
      m(e) ? ((t = e), (e = ["*"])) : (e = e.match(P));
      for (var n, r = 0, i = e.length; r < i; r++)
        (n = e[r]),
          (lt.tweeners[n] = lt.tweeners[n] || []),
          lt.tweeners[n].unshift(t);
    },
    prefilters: [
      function (e, t, n) {
        var r,
          i,
          o,
          a,
          s,
          u,
          l,
          c,
          f = "width" in t || "height" in t,
          p = this,
          d = {},
          h = e.style,
          g = e.nodeType && ae(e),
          v = Y.get(e, "fxshow");
        for (r in (n.queue ||
          (null == (a = S._queueHooks(e, "fx")).unqueued &&
            ((a.unqueued = 0),
            (s = a.empty.fire),
            (a.empty.fire = function () {
              a.unqueued || s();
            })),
          a.unqueued++,
          p.always(function () {
            p.always(function () {
              a.unqueued--, S.queue(e, "fx").length || a.empty.fire();
            });
          })),
        t))
          if (((i = t[r]), rt.test(i))) {
            if (
              (delete t[r],
              (o = o || "toggle" === i),
              i === (g ? "hide" : "show"))
            ) {
              if ("show" !== i || !v || void 0 === v[r]) continue;
              g = !0;
            }
            d[r] = (v && v[r]) || S.style(e, r);
          }
        if ((u = !S.isEmptyObject(t)) || !S.isEmptyObject(d))
          for (r in (f &&
            1 === e.nodeType &&
            ((n.overflow = [h.overflow, h.overflowX, h.overflowY]),
            null == (l = v && v.display) && (l = Y.get(e, "display")),
            "none" === (c = S.css(e, "display")) &&
              (l
                ? (c = l)
                : (le([e], !0),
                  (l = e.style.display || l),
                  (c = S.css(e, "display")),
                  le([e]))),
            ("inline" === c || ("inline-block" === c && null != l)) &&
              "none" === S.css(e, "float") &&
              (u ||
                (p.done(function () {
                  h.display = l;
                }),
                null == l && ((c = h.display), (l = "none" === c ? "" : c))),
              (h.display = "inline-block"))),
          n.overflow &&
            ((h.overflow = "hidden"),
            p.always(function () {
              (h.overflow = n.overflow[0]),
                (h.overflowX = n.overflow[1]),
                (h.overflowY = n.overflow[2]);
            })),
          (u = !1),
          d))
            u ||
              (v
                ? "hidden" in v && (g = v.hidden)
                : (v = Y.access(e, "fxshow", { display: l })),
              o && (v.hidden = !g),
              g && le([e], !0),
              p.done(function () {
                for (r in (g || le([e]), Y.remove(e, "fxshow"), d))
                  S.style(e, r, d[r]);
              })),
              (u = ut(g ? v[r] : 0, r, p)),
              r in v ||
                ((v[r] = u.start), g && ((u.end = u.start), (u.start = 0)));
      },
    ],
    prefilter: function (e, t) {
      t ? lt.prefilters.unshift(e) : lt.prefilters.push(e);
    },
  })),
    (S.speed = function (e, t, n) {
      var r =
        e && "object" == typeof e
          ? S.extend({}, e)
          : {
              complete: n || (!n && t) || (m(e) && e),
              duration: e,
              easing: (n && t) || (t && !m(t) && t),
            };
      return (
        S.fx.off
          ? (r.duration = 0)
          : "number" != typeof r.duration &&
            (r.duration in S.fx.speeds
              ? (r.duration = S.fx.speeds[r.duration])
              : (r.duration = S.fx.speeds._default)),
        (null != r.queue && !0 !== r.queue) || (r.queue = "fx"),
        (r.old = r.complete),
        (r.complete = function () {
          m(r.old) && r.old.call(this), r.queue && S.dequeue(this, r.queue);
        }),
        r
      );
    }),
    S.fn.extend({
      fadeTo: function (e, t, n, r) {
        return this.filter(ae)
          .css("opacity", 0)
          .show()
          .end()
          .animate({ opacity: t }, e, n, r);
      },
      animate: function (t, e, n, r) {
        var i = S.isEmptyObject(t),
          o = S.speed(e, n, r),
          a = function () {
            var e = lt(this, S.extend({}, t), o);
            (i || Y.get(this, "finish")) && e.stop(!0);
          };
        return (
          (a.finish = a),
          i || !1 === o.queue ? this.each(a) : this.queue(o.queue, a)
        );
      },
      stop: function (i, e, o) {
        var a = function (e) {
          var t = e.stop;
          delete e.stop, t(o);
        };
        return (
          "string" != typeof i && ((o = e), (e = i), (i = void 0)),
          e && this.queue(i || "fx", []),
          this.each(function () {
            var e = !0,
              t = null != i && i + "queueHooks",
              n = S.timers,
              r = Y.get(this);
            if (t) r[t] && r[t].stop && a(r[t]);
            else for (t in r) r[t] && r[t].stop && it.test(t) && a(r[t]);
            for (t = n.length; t--; )
              n[t].elem !== this ||
                (null != i && n[t].queue !== i) ||
                (n[t].anim.stop(o), (e = !1), n.splice(t, 1));
            (!e && o) || S.dequeue(this, i);
          })
        );
      },
      finish: function (a) {
        return (
          !1 !== a && (a = a || "fx"),
          this.each(function () {
            var e,
              t = Y.get(this),
              n = t[a + "queue"],
              r = t[a + "queueHooks"],
              i = S.timers,
              o = n ? n.length : 0;
            for (
              t.finish = !0,
                S.queue(this, a, []),
                r && r.stop && r.stop.call(this, !0),
                e = i.length;
              e--;

            )
              i[e].elem === this &&
                i[e].queue === a &&
                (i[e].anim.stop(!0), i.splice(e, 1));
            for (e = 0; e < o; e++)
              n[e] && n[e].finish && n[e].finish.call(this);
            delete t.finish;
          })
        );
      },
    }),
    S.each(["toggle", "show", "hide"], function (e, r) {
      var i = S.fn[r];
      S.fn[r] = function (e, t, n) {
        return null == e || "boolean" == typeof e
          ? i.apply(this, arguments)
          : this.animate(st(r, !0), e, t, n);
      };
    }),
    S.each(
      {
        slideDown: st("show"),
        slideUp: st("hide"),
        slideToggle: st("toggle"),
        fadeIn: { opacity: "show" },
        fadeOut: { opacity: "hide" },
        fadeToggle: { opacity: "toggle" },
      },
      function (e, r) {
        S.fn[e] = function (e, t, n) {
          return this.animate(r, e, t, n);
        };
      }
    ),
    (S.timers = []),
    (S.fx.tick = function () {
      var e,
        t = 0,
        n = S.timers;
      for (Ze = Date.now(); t < n.length; t++)
        (e = n[t])() || n[t] !== e || n.splice(t--, 1);
      n.length || S.fx.stop(), (Ze = void 0);
    }),
    (S.fx.timer = function (e) {
      S.timers.push(e), S.fx.start();
    }),
    (S.fx.interval = 13),
    (S.fx.start = function () {
      et || ((et = !0), ot());
    }),
    (S.fx.stop = function () {
      et = null;
    }),
    (S.fx.speeds = { slow: 600, fast: 200, _default: 400 }),
    (S.fn.delay = function (r, e) {
      return (
        (r = (S.fx && S.fx.speeds[r]) || r),
        (e = e || "fx"),
        this.queue(e, function (e, t) {
          var n = C.setTimeout(e, r);
          t.stop = function () {
            C.clearTimeout(n);
          };
        })
      );
    }),
    (tt = E.createElement("input")),
    (nt = E.createElement("select").appendChild(E.createElement("option"))),
    (tt.type = "checkbox"),
    (y.checkOn = "" !== tt.value),
    (y.optSelected = nt.selected),
    ((tt = E.createElement("input")).value = "t"),
    (tt.type = "radio"),
    (y.radioValue = "t" === tt.value);
  var ct,
    ft = S.expr.attrHandle;
  S.fn.extend({
    attr: function (e, t) {
      return $(this, S.attr, e, t, 1 < arguments.length);
    },
    removeAttr: function (e) {
      return this.each(function () {
        S.removeAttr(this, e);
      });
    },
  }),
    S.extend({
      attr: function (e, t, n) {
        var r,
          i,
          o = e.nodeType;
        if (3 !== o && 8 !== o && 2 !== o)
          return "undefined" == typeof e.getAttribute
            ? S.prop(e, t, n)
            : ((1 === o && S.isXMLDoc(e)) ||
                (i =
                  S.attrHooks[t.toLowerCase()] ||
                  (S.expr.match.bool.test(t) ? ct : void 0)),
              void 0 !== n
                ? null === n
                  ? void S.removeAttr(e, t)
                  : i && "set" in i && void 0 !== (r = i.set(e, n, t))
                  ? r
                  : (e.setAttribute(t, n + ""), n)
                : i && "get" in i && null !== (r = i.get(e, t))
                ? r
                : null == (r = S.find.attr(e, t))
                ? void 0
                : r);
      },
      attrHooks: {
        type: {
          set: function (e, t) {
            if (!y.radioValue && "radio" === t && A(e, "input")) {
              var n = e.value;
              return e.setAttribute("type", t), n && (e.value = n), t;
            }
          },
        },
      },
      removeAttr: function (e, t) {
        var n,
          r = 0,
          i = t && t.match(P);
        if (i && 1 === e.nodeType) while ((n = i[r++])) e.removeAttribute(n);
      },
    }),
    (ct = {
      set: function (e, t, n) {
        return !1 === t ? S.removeAttr(e, n) : e.setAttribute(n, n), n;
      },
    }),
    S.each(S.expr.match.bool.source.match(/\w+/g), function (e, t) {
      var a = ft[t] || S.find.attr;
      ft[t] = function (e, t, n) {
        var r,
          i,
          o = t.toLowerCase();
        return (
          n ||
            ((i = ft[o]),
            (ft[o] = r),
            (r = null != a(e, t, n) ? o : null),
            (ft[o] = i)),
          r
        );
      };
    });
  var pt = /^(?:input|select|textarea|button)$/i,
    dt = /^(?:a|area)$/i;
  function ht(e) {
    return (e.match(P) || []).join(" ");
  }
  function gt(e) {
    return (e.getAttribute && e.getAttribute("class")) || "";
  }
  function vt(e) {
    return Array.isArray(e) ? e : ("string" == typeof e && e.match(P)) || [];
  }
  S.fn.extend({
    prop: function (e, t) {
      return $(this, S.prop, e, t, 1 < arguments.length);
    },
    removeProp: function (e) {
      return this.each(function () {
        delete this[S.propFix[e] || e];
      });
    },
  }),
    S.extend({
      prop: function (e, t, n) {
        var r,
          i,
          o = e.nodeType;
        if (3 !== o && 8 !== o && 2 !== o)
          return (
            (1 === o && S.isXMLDoc(e)) ||
              ((t = S.propFix[t] || t), (i = S.propHooks[t])),
            void 0 !== n
              ? i && "set" in i && void 0 !== (r = i.set(e, n, t))
                ? r
                : (e[t] = n)
              : i && "get" in i && null !== (r = i.get(e, t))
              ? r
              : e[t]
          );
      },
      propHooks: {
        tabIndex: {
          get: function (e) {
            var t = S.find.attr(e, "tabindex");
            return t
              ? parseInt(t, 10)
              : pt.test(e.nodeName) || (dt.test(e.nodeName) && e.href)
              ? 0
              : -1;
          },
        },
      },
      propFix: { for: "htmlFor", class: "className" },
    }),
    y.optSelected ||
      (S.propHooks.selected = {
        get: function (e) {
          var t = e.parentNode;
          return t && t.parentNode && t.parentNode.selectedIndex, null;
        },
        set: function (e) {
          var t = e.parentNode;
          t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex);
        },
      }),
    S.each(
      [
        "tabIndex",
        "readOnly",
        "maxLength",
        "cellSpacing",
        "cellPadding",
        "rowSpan",
        "colSpan",
        "useMap",
        "frameBorder",
        "contentEditable",
      ],
      function () {
        S.propFix[this.toLowerCase()] = this;
      }
    ),
    S.fn.extend({
      addClass: function (t) {
        var e,
          n,
          r,
          i,
          o,
          a,
          s,
          u = 0;
        if (m(t))
          return this.each(function (e) {
            S(this).addClass(t.call(this, e, gt(this)));
          });
        if ((e = vt(t)).length)
          while ((n = this[u++]))
            if (((i = gt(n)), (r = 1 === n.nodeType && " " + ht(i) + " "))) {
              a = 0;
              while ((o = e[a++]))
                r.indexOf(" " + o + " ") < 0 && (r += o + " ");
              i !== (s = ht(r)) && n.setAttribute("class", s);
            }
        return this;
      },
      removeClass: function (t) {
        var e,
          n,
          r,
          i,
          o,
          a,
          s,
          u = 0;
        if (m(t))
          return this.each(function (e) {
            S(this).removeClass(t.call(this, e, gt(this)));
          });
        if (!arguments.length) return this.attr("class", "");
        if ((e = vt(t)).length)
          while ((n = this[u++]))
            if (((i = gt(n)), (r = 1 === n.nodeType && " " + ht(i) + " "))) {
              a = 0;
              while ((o = e[a++]))
                while (-1 < r.indexOf(" " + o + " "))
                  r = r.replace(" " + o + " ", " ");
              i !== (s = ht(r)) && n.setAttribute("class", s);
            }
        return this;
      },
      toggleClass: function (i, t) {
        var o = typeof i,
          a = "string" === o || Array.isArray(i);
        return "boolean" == typeof t && a
          ? t
            ? this.addClass(i)
            : this.removeClass(i)
          : m(i)
          ? this.each(function (e) {
              S(this).toggleClass(i.call(this, e, gt(this), t), t);
            })
          : this.each(function () {
              var e, t, n, r;
              if (a) {
                (t = 0), (n = S(this)), (r = vt(i));
                while ((e = r[t++]))
                  n.hasClass(e) ? n.removeClass(e) : n.addClass(e);
              } else (void 0 !== i && "boolean" !== o) || ((e = gt(this)) && Y.set(this, "__className__", e), this.setAttribute && this.setAttribute("class", e || !1 === i ? "" : Y.get(this, "__className__") || ""));
            });
      },
      hasClass: function (e) {
        var t,
          n,
          r = 0;
        t = " " + e + " ";
        while ((n = this[r++]))
          if (1 === n.nodeType && -1 < (" " + ht(gt(n)) + " ").indexOf(t))
            return !0;
        return !1;
      },
    });
  var yt = /\r/g;
  S.fn.extend({
    val: function (n) {
      var r,
        e,
        i,
        t = this[0];
      return arguments.length
        ? ((i = m(n)),
          this.each(function (e) {
            var t;
            1 === this.nodeType &&
              (null == (t = i ? n.call(this, e, S(this).val()) : n)
                ? (t = "")
                : "number" == typeof t
                ? (t += "")
                : Array.isArray(t) &&
                  (t = S.map(t, function (e) {
                    return null == e ? "" : e + "";
                  })),
              ((r =
                S.valHooks[this.type] ||
                S.valHooks[this.nodeName.toLowerCase()]) &&
                "set" in r &&
                void 0 !== r.set(this, t, "value")) ||
                (this.value = t));
          }))
        : t
        ? (r = S.valHooks[t.type] || S.valHooks[t.nodeName.toLowerCase()]) &&
          "get" in r &&
          void 0 !== (e = r.get(t, "value"))
          ? e
          : "string" == typeof (e = t.value)
          ? e.replace(yt, "")
          : null == e
          ? ""
          : e
        : void 0;
    },
  }),
    S.extend({
      valHooks: {
        option: {
          get: function (e) {
            var t = S.find.attr(e, "value");
            return null != t ? t : ht(S.text(e));
          },
        },
        select: {
          get: function (e) {
            var t,
              n,
              r,
              i = e.options,
              o = e.selectedIndex,
              a = "select-one" === e.type,
              s = a ? null : [],
              u = a ? o + 1 : i.length;
            for (r = o < 0 ? u : a ? o : 0; r < u; r++)
              if (
                ((n = i[r]).selected || r === o) &&
                !n.disabled &&
                (!n.parentNode.disabled || !A(n.parentNode, "optgroup"))
              ) {
                if (((t = S(n).val()), a)) return t;
                s.push(t);
              }
            return s;
          },
          set: function (e, t) {
            var n,
              r,
              i = e.options,
              o = S.makeArray(t),
              a = i.length;
            while (a--)
              ((r = i[a]).selected =
                -1 < S.inArray(S.valHooks.option.get(r), o)) && (n = !0);
            return n || (e.selectedIndex = -1), o;
          },
        },
      },
    }),
    S.each(["radio", "checkbox"], function () {
      (S.valHooks[this] = {
        set: function (e, t) {
          if (Array.isArray(t))
            return (e.checked = -1 < S.inArray(S(e).val(), t));
        },
      }),
        y.checkOn ||
          (S.valHooks[this].get = function (e) {
            return null === e.getAttribute("value") ? "on" : e.value;
          });
    }),
    (y.focusin = "onfocusin" in C);
  var mt = /^(?:focusinfocus|focusoutblur)$/,
    xt = function (e) {
      e.stopPropagation();
    };
  S.extend(S.event, {
    trigger: function (e, t, n, r) {
      var i,
        o,
        a,
        s,
        u,
        l,
        c,
        f,
        p = [n || E],
        d = v.call(e, "type") ? e.type : e,
        h = v.call(e, "namespace") ? e.namespace.split(".") : [];
      if (
        ((o = f = a = n = n || E),
        3 !== n.nodeType &&
          8 !== n.nodeType &&
          !mt.test(d + S.event.triggered) &&
          (-1 < d.indexOf(".") && ((d = (h = d.split(".")).shift()), h.sort()),
          (u = d.indexOf(":") < 0 && "on" + d),
          ((e = e[S.expando]
            ? e
            : new S.Event(d, "object" == typeof e && e)).isTrigger = r ? 2 : 3),
          (e.namespace = h.join(".")),
          (e.rnamespace = e.namespace
            ? new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)")
            : null),
          (e.result = void 0),
          e.target || (e.target = n),
          (t = null == t ? [e] : S.makeArray(t, [e])),
          (c = S.event.special[d] || {}),
          r || !c.trigger || !1 !== c.trigger.apply(n, t)))
      ) {
        if (!r && !c.noBubble && !x(n)) {
          for (
            s = c.delegateType || d, mt.test(s + d) || (o = o.parentNode);
            o;
            o = o.parentNode
          )
            p.push(o), (a = o);
          a === (n.ownerDocument || E) &&
            p.push(a.defaultView || a.parentWindow || C);
        }
        i = 0;
        while ((o = p[i++]) && !e.isPropagationStopped())
          (f = o),
            (e.type = 1 < i ? s : c.bindType || d),
            (l =
              (Y.get(o, "events") || Object.create(null))[e.type] &&
              Y.get(o, "handle")) && l.apply(o, t),
            (l = u && o[u]) &&
              l.apply &&
              V(o) &&
              ((e.result = l.apply(o, t)),
              !1 === e.result && e.preventDefault());
        return (
          (e.type = d),
          r ||
            e.isDefaultPrevented() ||
            (c._default && !1 !== c._default.apply(p.pop(), t)) ||
            !V(n) ||
            (u &&
              m(n[d]) &&
              !x(n) &&
              ((a = n[u]) && (n[u] = null),
              (S.event.triggered = d),
              e.isPropagationStopped() && f.addEventListener(d, xt),
              n[d](),
              e.isPropagationStopped() && f.removeEventListener(d, xt),
              (S.event.triggered = void 0),
              a && (n[u] = a))),
          e.result
        );
      }
    },
    simulate: function (e, t, n) {
      var r = S.extend(new S.Event(), n, { type: e, isSimulated: !0 });
      S.event.trigger(r, null, t);
    },
  }),
    S.fn.extend({
      trigger: function (e, t) {
        return this.each(function () {
          S.event.trigger(e, t, this);
        });
      },
      triggerHandler: function (e, t) {
        var n = this[0];
        if (n) return S.event.trigger(e, t, n, !0);
      },
    }),
    y.focusin ||
      S.each({ focus: "focusin", blur: "focusout" }, function (n, r) {
        var i = function (e) {
          S.event.simulate(r, e.target, S.event.fix(e));
        };
        S.event.special[r] = {
          setup: function () {
            var e = this.ownerDocument || this.document || this,
              t = Y.access(e, r);
            t || e.addEventListener(n, i, !0), Y.access(e, r, (t || 0) + 1);
          },
          teardown: function () {
            var e = this.ownerDocument || this.document || this,
              t = Y.access(e, r) - 1;
            t
              ? Y.access(e, r, t)
              : (e.removeEventListener(n, i, !0), Y.remove(e, r));
          },
        };
      });
  var bt = C.location,
    wt = { guid: Date.now() },
    Tt = /\?/;
  S.parseXML = function (e) {
    var t, n;
    if (!e || "string" != typeof e) return null;
    try {
      t = new C.DOMParser().parseFromString(e, "text/xml");
    } catch (e) {}
    return (
      (n = t && t.getElementsByTagName("parsererror")[0]),
      (t && !n) ||
        S.error(
          "Invalid XML: " +
            (n
              ? S.map(n.childNodes, function (e) {
                  return e.textContent;
                }).join("\n")
              : e)
        ),
      t
    );
  };
  var Ct = /\[\]$/,
    Et = /\r?\n/g,
    St = /^(?:submit|button|image|reset|file)$/i,
    kt = /^(?:input|select|textarea|keygen)/i;
  function At(n, e, r, i) {
    var t;
    if (Array.isArray(e))
      S.each(e, function (e, t) {
        r || Ct.test(n)
          ? i(n, t)
          : At(
              n + "[" + ("object" == typeof t && null != t ? e : "") + "]",
              t,
              r,
              i
            );
      });
    else if (r || "object" !== w(e)) i(n, e);
    else for (t in e) At(n + "[" + t + "]", e[t], r, i);
  }
  (S.param = function (e, t) {
    var n,
      r = [],
      i = function (e, t) {
        var n = m(t) ? t() : t;
        r[r.length] =
          encodeURIComponent(e) + "=" + encodeURIComponent(null == n ? "" : n);
      };
    if (null == e) return "";
    if (Array.isArray(e) || (e.jquery && !S.isPlainObject(e)))
      S.each(e, function () {
        i(this.name, this.value);
      });
    else for (n in e) At(n, e[n], t, i);
    return r.join("&");
  }),
    S.fn.extend({
      serialize: function () {
        return S.param(this.serializeArray());
      },
      serializeArray: function () {
        return this.map(function () {
          var e = S.prop(this, "elements");
          return e ? S.makeArray(e) : this;
        })
          .filter(function () {
            var e = this.type;
            return (
              this.name &&
              !S(this).is(":disabled") &&
              kt.test(this.nodeName) &&
              !St.test(e) &&
              (this.checked || !pe.test(e))
            );
          })
          .map(function (e, t) {
            var n = S(this).val();
            return null == n
              ? null
              : Array.isArray(n)
              ? S.map(n, function (e) {
                  return { name: t.name, value: e.replace(Et, "\r\n") };
                })
              : { name: t.name, value: n.replace(Et, "\r\n") };
          })
          .get();
      },
    });
  var Nt = /%20/g,
    jt = /#.*$/,
    Dt = /([?&])_=[^&]*/,
    qt = /^(.*?):[ \t]*([^\r\n]*)$/gm,
    Lt = /^(?:GET|HEAD)$/,
    Ht = /^\/\//,
    Ot = {},
    Pt = {},
    Rt = "*/".concat("*"),
    Mt = E.createElement("a");
  function It(o) {
    return function (e, t) {
      "string" != typeof e && ((t = e), (e = "*"));
      var n,
        r = 0,
        i = e.toLowerCase().match(P) || [];
      if (m(t))
        while ((n = i[r++]))
          "+" === n[0]
            ? ((n = n.slice(1) || "*"), (o[n] = o[n] || []).unshift(t))
            : (o[n] = o[n] || []).push(t);
    };
  }
  function Wt(t, i, o, a) {
    var s = {},
      u = t === Pt;
    function l(e) {
      var r;
      return (
        (s[e] = !0),
        S.each(t[e] || [], function (e, t) {
          var n = t(i, o, a);
          return "string" != typeof n || u || s[n]
            ? u
              ? !(r = n)
              : void 0
            : (i.dataTypes.unshift(n), l(n), !1);
        }),
        r
      );
    }
    return l(i.dataTypes[0]) || (!s["*"] && l("*"));
  }
  function Ft(e, t) {
    var n,
      r,
      i = S.ajaxSettings.flatOptions || {};
    for (n in t) void 0 !== t[n] && ((i[n] ? e : r || (r = {}))[n] = t[n]);
    return r && S.extend(!0, e, r), e;
  }
  (Mt.href = bt.href),
    S.extend({
      active: 0,
      lastModified: {},
      etag: {},
      ajaxSettings: {
        url: bt.href,
        type: "GET",
        isLocal:
          /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(
            bt.protocol
          ),
        global: !0,
        processData: !0,
        async: !0,
        contentType: "application/x-www-form-urlencoded; charset=UTF-8",
        accepts: {
          "*": Rt,
          text: "text/plain",
          html: "text/html",
          xml: "application/xml, text/xml",
          json: "application/json, text/javascript",
        },
        contents: { xml: /\bxml\b/, html: /\bhtml/, json: /\bjson\b/ },
        responseFields: {
          xml: "responseXML",
          text: "responseText",
          json: "responseJSON",
        },
        converters: {
          "* text": String,
          "text html": !0,
          "text json": JSON.parse,
          "text xml": S.parseXML,
        },
        flatOptions: { url: !0, context: !0 },
      },
      ajaxSetup: function (e, t) {
        return t ? Ft(Ft(e, S.ajaxSettings), t) : Ft(S.ajaxSettings, e);
      },
      ajaxPrefilter: It(Ot),
      ajaxTransport: It(Pt),
      ajax: function (e, t) {
        "object" == typeof e && ((t = e), (e = void 0)), (t = t || {});
        var c,
          f,
          p,
          n,
          d,
          r,
          h,
          g,
          i,
          o,
          v = S.ajaxSetup({}, t),
          y = v.context || v,
          m = v.context && (y.nodeType || y.jquery) ? S(y) : S.event,
          x = S.Deferred(),
          b = S.Callbacks("once memory"),
          w = v.statusCode || {},
          a = {},
          s = {},
          u = "canceled",
          T = {
            readyState: 0,
            getResponseHeader: function (e) {
              var t;
              if (h) {
                if (!n) {
                  n = {};
                  while ((t = qt.exec(p)))
                    n[t[1].toLowerCase() + " "] = (
                      n[t[1].toLowerCase() + " "] || []
                    ).concat(t[2]);
                }
                t = n[e.toLowerCase() + " "];
              }
              return null == t ? null : t.join(", ");
            },
            getAllResponseHeaders: function () {
              return h ? p : null;
            },
            setRequestHeader: function (e, t) {
              return (
                null == h &&
                  ((e = s[e.toLowerCase()] = s[e.toLowerCase()] || e),
                  (a[e] = t)),
                this
              );
            },
            overrideMimeType: function (e) {
              return null == h && (v.mimeType = e), this;
            },
            statusCode: function (e) {
              var t;
              if (e)
                if (h) T.always(e[T.status]);
                else for (t in e) w[t] = [w[t], e[t]];
              return this;
            },
            abort: function (e) {
              var t = e || u;
              return c && c.abort(t), l(0, t), this;
            },
          };
        if (
          (x.promise(T),
          (v.url = ((e || v.url || bt.href) + "").replace(
            Ht,
            bt.protocol + "//"
          )),
          (v.type = t.method || t.type || v.method || v.type),
          (v.dataTypes = (v.dataType || "*").toLowerCase().match(P) || [""]),
          null == v.crossDomain)
        ) {
          r = E.createElement("a");
          try {
            (r.href = v.url),
              (r.href = r.href),
              (v.crossDomain =
                Mt.protocol + "//" + Mt.host != r.protocol + "//" + r.host);
          } catch (e) {
            v.crossDomain = !0;
          }
        }
        if (
          (v.data &&
            v.processData &&
            "string" != typeof v.data &&
            (v.data = S.param(v.data, v.traditional)),
          Wt(Ot, v, t, T),
          h)
        )
          return T;
        for (i in ((g = S.event && v.global) &&
          0 == S.active++ &&
          S.event.trigger("ajaxStart"),
        (v.type = v.type.toUpperCase()),
        (v.hasContent = !Lt.test(v.type)),
        (f = v.url.replace(jt, "")),
        v.hasContent
          ? v.data &&
            v.processData &&
            0 ===
              (v.contentType || "").indexOf(
                "application/x-www-form-urlencoded"
              ) &&
            (v.data = v.data.replace(Nt, "+"))
          : ((o = v.url.slice(f.length)),
            v.data &&
              (v.processData || "string" == typeof v.data) &&
              ((f += (Tt.test(f) ? "&" : "?") + v.data), delete v.data),
            !1 === v.cache &&
              ((f = f.replace(Dt, "$1")),
              (o = (Tt.test(f) ? "&" : "?") + "_=" + wt.guid++ + o)),
            (v.url = f + o)),
        v.ifModified &&
          (S.lastModified[f] &&
            T.setRequestHeader("If-Modified-Since", S.lastModified[f]),
          S.etag[f] && T.setRequestHeader("If-None-Match", S.etag[f])),
        ((v.data && v.hasContent && !1 !== v.contentType) || t.contentType) &&
          T.setRequestHeader("Content-Type", v.contentType),
        T.setRequestHeader(
          "Accept",
          v.dataTypes[0] && v.accepts[v.dataTypes[0]]
            ? v.accepts[v.dataTypes[0]] +
                ("*" !== v.dataTypes[0] ? ", " + Rt + "; q=0.01" : "")
            : v.accepts["*"]
        ),
        v.headers))
          T.setRequestHeader(i, v.headers[i]);
        if (v.beforeSend && (!1 === v.beforeSend.call(y, T, v) || h))
          return T.abort();
        if (
          ((u = "abort"),
          b.add(v.complete),
          T.done(v.success),
          T.fail(v.error),
          (c = Wt(Pt, v, t, T)))
        ) {
          if (((T.readyState = 1), g && m.trigger("ajaxSend", [T, v]), h))
            return T;
          v.async &&
            0 < v.timeout &&
            (d = C.setTimeout(function () {
              T.abort("timeout");
            }, v.timeout));
          try {
            (h = !1), c.send(a, l);
          } catch (e) {
            if (h) throw e;
            l(-1, e);
          }
        } else l(-1, "No Transport");
        function l(e, t, n, r) {
          var i,
            o,
            a,
            s,
            u,
            l = t;
          h ||
            ((h = !0),
            d && C.clearTimeout(d),
            (c = void 0),
            (p = r || ""),
            (T.readyState = 0 < e ? 4 : 0),
            (i = (200 <= e && e < 300) || 304 === e),
            n &&
              (s = (function (e, t, n) {
                var r,
                  i,
                  o,
                  a,
                  s = e.contents,
                  u = e.dataTypes;
                while ("*" === u[0])
                  u.shift(),
                    void 0 === r &&
                      (r = e.mimeType || t.getResponseHeader("Content-Type"));
                if (r)
                  for (i in s)
                    if (s[i] && s[i].test(r)) {
                      u.unshift(i);
                      break;
                    }
                if (u[0] in n) o = u[0];
                else {
                  for (i in n) {
                    if (!u[0] || e.converters[i + " " + u[0]]) {
                      o = i;
                      break;
                    }
                    a || (a = i);
                  }
                  o = o || a;
                }
                if (o) return o !== u[0] && u.unshift(o), n[o];
              })(v, T, n)),
            !i &&
              -1 < S.inArray("script", v.dataTypes) &&
              S.inArray("json", v.dataTypes) < 0 &&
              (v.converters["text script"] = function () {}),
            (s = (function (e, t, n, r) {
              var i,
                o,
                a,
                s,
                u,
                l = {},
                c = e.dataTypes.slice();
              if (c[1])
                for (a in e.converters) l[a.toLowerCase()] = e.converters[a];
              o = c.shift();
              while (o)
                if (
                  (e.responseFields[o] && (n[e.responseFields[o]] = t),
                  !u && r && e.dataFilter && (t = e.dataFilter(t, e.dataType)),
                  (u = o),
                  (o = c.shift()))
                )
                  if ("*" === o) o = u;
                  else if ("*" !== u && u !== o) {
                    if (!(a = l[u + " " + o] || l["* " + o]))
                      for (i in l)
                        if (
                          (s = i.split(" "))[1] === o &&
                          (a = l[u + " " + s[0]] || l["* " + s[0]])
                        ) {
                          !0 === a
                            ? (a = l[i])
                            : !0 !== l[i] && ((o = s[0]), c.unshift(s[1]));
                          break;
                        }
                    if (!0 !== a)
                      if (a && e["throws"]) t = a(t);
                      else
                        try {
                          t = a(t);
                        } catch (e) {
                          return {
                            state: "parsererror",
                            error: a
                              ? e
                              : "No conversion from " + u + " to " + o,
                          };
                        }
                  }
              return { state: "success", data: t };
            })(v, s, T, i)),
            i
              ? (v.ifModified &&
                  ((u = T.getResponseHeader("Last-Modified")) &&
                    (S.lastModified[f] = u),
                  (u = T.getResponseHeader("etag")) && (S.etag[f] = u)),
                204 === e || "HEAD" === v.type
                  ? (l = "nocontent")
                  : 304 === e
                  ? (l = "notmodified")
                  : ((l = s.state), (o = s.data), (i = !(a = s.error))))
              : ((a = l), (!e && l) || ((l = "error"), e < 0 && (e = 0))),
            (T.status = e),
            (T.statusText = (t || l) + ""),
            i ? x.resolveWith(y, [o, l, T]) : x.rejectWith(y, [T, l, a]),
            T.statusCode(w),
            (w = void 0),
            g && m.trigger(i ? "ajaxSuccess" : "ajaxError", [T, v, i ? o : a]),
            b.fireWith(y, [T, l]),
            g &&
              (m.trigger("ajaxComplete", [T, v]),
              --S.active || S.event.trigger("ajaxStop")));
        }
        return T;
      },
      getJSON: function (e, t, n) {
        return S.get(e, t, n, "json");
      },
      getScript: function (e, t) {
        return S.get(e, void 0, t, "script");
      },
    }),
    S.each(["get", "post"], function (e, i) {
      S[i] = function (e, t, n, r) {
        return (
          m(t) && ((r = r || n), (n = t), (t = void 0)),
          S.ajax(
            S.extend(
              { url: e, type: i, dataType: r, data: t, success: n },
              S.isPlainObject(e) && e
            )
          )
        );
      };
    }),
    S.ajaxPrefilter(function (e) {
      var t;
      for (t in e.headers)
        "content-type" === t.toLowerCase() &&
          (e.contentType = e.headers[t] || "");
    }),
    (S._evalUrl = function (e, t, n) {
      return S.ajax({
        url: e,
        type: "GET",
        dataType: "script",
        cache: !0,
        async: !1,
        global: !1,
        converters: { "text script": function () {} },
        dataFilter: function (e) {
          S.globalEval(e, t, n);
        },
      });
    }),
    S.fn.extend({
      wrapAll: function (e) {
        var t;
        return (
          this[0] &&
            (m(e) && (e = e.call(this[0])),
            (t = S(e, this[0].ownerDocument).eq(0).clone(!0)),
            this[0].parentNode && t.insertBefore(this[0]),
            t
              .map(function () {
                var e = this;
                while (e.firstElementChild) e = e.firstElementChild;
                return e;
              })
              .append(this)),
          this
        );
      },
      wrapInner: function (n) {
        return m(n)
          ? this.each(function (e) {
              S(this).wrapInner(n.call(this, e));
            })
          : this.each(function () {
              var e = S(this),
                t = e.contents();
              t.length ? t.wrapAll(n) : e.append(n);
            });
      },
      wrap: function (t) {
        var n = m(t);
        return this.each(function (e) {
          S(this).wrapAll(n ? t.call(this, e) : t);
        });
      },
      unwrap: function (e) {
        return (
          this.parent(e)
            .not("body")
            .each(function () {
              S(this).replaceWith(this.childNodes);
            }),
          this
        );
      },
    }),
    (S.expr.pseudos.hidden = function (e) {
      return !S.expr.pseudos.visible(e);
    }),
    (S.expr.pseudos.visible = function (e) {
      return !!(e.offsetWidth || e.offsetHeight || e.getClientRects().length);
    }),
    (S.ajaxSettings.xhr = function () {
      try {
        return new C.XMLHttpRequest();
      } catch (e) {}
    });
  var Bt = { 0: 200, 1223: 204 },
    $t = S.ajaxSettings.xhr();
  (y.cors = !!$t && "withCredentials" in $t),
    (y.ajax = $t = !!$t),
    S.ajaxTransport(function (i) {
      var o, a;
      if (y.cors || ($t && !i.crossDomain))
        return {
          send: function (e, t) {
            var n,
              r = i.xhr();
            if (
              (r.open(i.type, i.url, i.async, i.username, i.password),
              i.xhrFields)
            )
              for (n in i.xhrFields) r[n] = i.xhrFields[n];
            for (n in (i.mimeType &&
              r.overrideMimeType &&
              r.overrideMimeType(i.mimeType),
            i.crossDomain ||
              e["X-Requested-With"] ||
              (e["X-Requested-With"] = "XMLHttpRequest"),
            e))
              r.setRequestHeader(n, e[n]);
            (o = function (e) {
              return function () {
                o &&
                  ((o =
                    a =
                    r.onload =
                    r.onerror =
                    r.onabort =
                    r.ontimeout =
                    r.onreadystatechange =
                      null),
                  "abort" === e
                    ? r.abort()
                    : "error" === e
                    ? "number" != typeof r.status
                      ? t(0, "error")
                      : t(r.status, r.statusText)
                    : t(
                        Bt[r.status] || r.status,
                        r.statusText,
                        "text" !== (r.responseType || "text") ||
                          "string" != typeof r.responseText
                          ? { binary: r.response }
                          : { text: r.responseText },
                        r.getAllResponseHeaders()
                      ));
              };
            }),
              (r.onload = o()),
              (a = r.onerror = r.ontimeout = o("error")),
              void 0 !== r.onabort
                ? (r.onabort = a)
                : (r.onreadystatechange = function () {
                    4 === r.readyState &&
                      C.setTimeout(function () {
                        o && a();
                      });
                  }),
              (o = o("abort"));
            try {
              r.send((i.hasContent && i.data) || null);
            } catch (e) {
              if (o) throw e;
            }
          },
          abort: function () {
            o && o();
          },
        };
    }),
    S.ajaxPrefilter(function (e) {
      e.crossDomain && (e.contents.script = !1);
    }),
    S.ajaxSetup({
      accepts: {
        script:
          "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript",
      },
      contents: { script: /\b(?:java|ecma)script\b/ },
      converters: {
        "text script": function (e) {
          return S.globalEval(e), e;
        },
      },
    }),
    S.ajaxPrefilter("script", function (e) {
      void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = "GET");
    }),
    S.ajaxTransport("script", function (n) {
      var r, i;
      if (n.crossDomain || n.scriptAttrs)
        return {
          send: function (e, t) {
            (r = S("<script>")
              .attr(n.scriptAttrs || {})
              .prop({ charset: n.scriptCharset, src: n.url })
              .on(
                "load error",
                (i = function (e) {
                  r.remove(),
                    (i = null),
                    e && t("error" === e.type ? 404 : 200, e.type);
                })
              )),
              E.head.appendChild(r[0]);
          },
          abort: function () {
            i && i();
          },
        };
    });
  var _t,
    zt = [],
    Ut = /(=)\?(?=&|$)|\?\?/;
  S.ajaxSetup({
    jsonp: "callback",
    jsonpCallback: function () {
      var e = zt.pop() || S.expando + "_" + wt.guid++;
      return (this[e] = !0), e;
    },
  }),
    S.ajaxPrefilter("json jsonp", function (e, t, n) {
      var r,
        i,
        o,
        a =
          !1 !== e.jsonp &&
          (Ut.test(e.url)
            ? "url"
            : "string" == typeof e.data &&
              0 ===
                (e.contentType || "").indexOf(
                  "application/x-www-form-urlencoded"
                ) &&
              Ut.test(e.data) &&
              "data");
      if (a || "jsonp" === e.dataTypes[0])
        return (
          (r = e.jsonpCallback =
            m(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback),
          a
            ? (e[a] = e[a].replace(Ut, "$1" + r))
            : !1 !== e.jsonp &&
              (e.url += (Tt.test(e.url) ? "&" : "?") + e.jsonp + "=" + r),
          (e.converters["script json"] = function () {
            return o || S.error(r + " was not called"), o[0];
          }),
          (e.dataTypes[0] = "json"),
          (i = C[r]),
          (C[r] = function () {
            o = arguments;
          }),
          n.always(function () {
            void 0 === i ? S(C).removeProp(r) : (C[r] = i),
              e[r] && ((e.jsonpCallback = t.jsonpCallback), zt.push(r)),
              o && m(i) && i(o[0]),
              (o = i = void 0);
          }),
          "script"
        );
    }),
    (y.createHTMLDocument =
      (((_t = E.implementation.createHTMLDocument("").body).innerHTML =
        "<form></form><form></form>"),
      2 === _t.childNodes.length)),
    (S.parseHTML = function (e, t, n) {
      return "string" != typeof e
        ? []
        : ("boolean" == typeof t && ((n = t), (t = !1)),
          t ||
            (y.createHTMLDocument
              ? (((r = (t =
                  E.implementation.createHTMLDocument("")).createElement(
                  "base"
                )).href = E.location.href),
                t.head.appendChild(r))
              : (t = E)),
          (o = !n && []),
          (i = N.exec(e))
            ? [t.createElement(i[1])]
            : ((i = xe([e], t, o)),
              o && o.length && S(o).remove(),
              S.merge([], i.childNodes)));
      var r, i, o;
    }),
    (S.fn.load = function (e, t, n) {
      var r,
        i,
        o,
        a = this,
        s = e.indexOf(" ");
      return (
        -1 < s && ((r = ht(e.slice(s))), (e = e.slice(0, s))),
        m(t)
          ? ((n = t), (t = void 0))
          : t && "object" == typeof t && (i = "POST"),
        0 < a.length &&
          S.ajax({ url: e, type: i || "GET", dataType: "html", data: t })
            .done(function (e) {
              (o = arguments),
                a.html(r ? S("<div>").append(S.parseHTML(e)).find(r) : e);
            })
            .always(
              n &&
                function (e, t) {
                  a.each(function () {
                    n.apply(this, o || [e.responseText, t, e]);
                  });
                }
            ),
        this
      );
    }),
    (S.expr.pseudos.animated = function (t) {
      return S.grep(S.timers, function (e) {
        return t === e.elem;
      }).length;
    }),
    (S.offset = {
      setOffset: function (e, t, n) {
        var r,
          i,
          o,
          a,
          s,
          u,
          l = S.css(e, "position"),
          c = S(e),
          f = {};
        "static" === l && (e.style.position = "relative"),
          (s = c.offset()),
          (o = S.css(e, "top")),
          (u = S.css(e, "left")),
          ("absolute" === l || "fixed" === l) && -1 < (o + u).indexOf("auto")
            ? ((a = (r = c.position()).top), (i = r.left))
            : ((a = parseFloat(o) || 0), (i = parseFloat(u) || 0)),
          m(t) && (t = t.call(e, n, S.extend({}, s))),
          null != t.top && (f.top = t.top - s.top + a),
          null != t.left && (f.left = t.left - s.left + i),
          "using" in t ? t.using.call(e, f) : c.css(f);
      },
    }),
    S.fn.extend({
      offset: function (t) {
        if (arguments.length)
          return void 0 === t
            ? this
            : this.each(function (e) {
                S.offset.setOffset(this, t, e);
              });
        var e,
          n,
          r = this[0];
        return r
          ? r.getClientRects().length
            ? ((e = r.getBoundingClientRect()),
              (n = r.ownerDocument.defaultView),
              { top: e.top + n.pageYOffset, left: e.left + n.pageXOffset })
            : { top: 0, left: 0 }
          : void 0;
      },
      position: function () {
        if (this[0]) {
          var e,
            t,
            n,
            r = this[0],
            i = { top: 0, left: 0 };
          if ("fixed" === S.css(r, "position")) t = r.getBoundingClientRect();
          else {
            (t = this.offset()),
              (n = r.ownerDocument),
              (e = r.offsetParent || n.documentElement);
            while (
              e &&
              (e === n.body || e === n.documentElement) &&
              "static" === S.css(e, "position")
            )
              e = e.parentNode;
            e &&
              e !== r &&
              1 === e.nodeType &&
              (((i = S(e).offset()).top += S.css(e, "borderTopWidth", !0)),
              (i.left += S.css(e, "borderLeftWidth", !0)));
          }
          return {
            top: t.top - i.top - S.css(r, "marginTop", !0),
            left: t.left - i.left - S.css(r, "marginLeft", !0),
          };
        }
      },
      offsetParent: function () {
        return this.map(function () {
          var e = this.offsetParent;
          while (e && "static" === S.css(e, "position")) e = e.offsetParent;
          return e || re;
        });
      },
    }),
    S.each(
      { scrollLeft: "pageXOffset", scrollTop: "pageYOffset" },
      function (t, i) {
        var o = "pageYOffset" === i;
        S.fn[t] = function (e) {
          return $(
            this,
            function (e, t, n) {
              var r;
              if (
                (x(e) ? (r = e) : 9 === e.nodeType && (r = e.defaultView),
                void 0 === n)
              )
                return r ? r[i] : e[t];
              r
                ? r.scrollTo(o ? r.pageXOffset : n, o ? n : r.pageYOffset)
                : (e[t] = n);
            },
            t,
            e,
            arguments.length
          );
        };
      }
    ),
    S.each(["top", "left"], function (e, n) {
      S.cssHooks[n] = Fe(y.pixelPosition, function (e, t) {
        if (t)
          return (t = We(e, n)), Pe.test(t) ? S(e).position()[n] + "px" : t;
      });
    }),
    S.each({ Height: "height", Width: "width" }, function (a, s) {
      S.each(
        { padding: "inner" + a, content: s, "": "outer" + a },
        function (r, o) {
          S.fn[o] = function (e, t) {
            var n = arguments.length && (r || "boolean" != typeof e),
              i = r || (!0 === e || !0 === t ? "margin" : "border");
            return $(
              this,
              function (e, t, n) {
                var r;
                return x(e)
                  ? 0 === o.indexOf("outer")
                    ? e["inner" + a]
                    : e.document.documentElement["client" + a]
                  : 9 === e.nodeType
                  ? ((r = e.documentElement),
                    Math.max(
                      e.body["scroll" + a],
                      r["scroll" + a],
                      e.body["offset" + a],
                      r["offset" + a],
                      r["client" + a]
                    ))
                  : void 0 === n
                  ? S.css(e, t, i)
                  : S.style(e, t, n, i);
              },
              s,
              n ? e : void 0,
              n
            );
          };
        }
      );
    }),
    S.each(
      [
        "ajaxStart",
        "ajaxStop",
        "ajaxComplete",
        "ajaxError",
        "ajaxSuccess",
        "ajaxSend",
      ],
      function (e, t) {
        S.fn[t] = function (e) {
          return this.on(t, e);
        };
      }
    ),
    S.fn.extend({
      bind: function (e, t, n) {
        return this.on(e, null, t, n);
      },
      unbind: function (e, t) {
        return this.off(e, null, t);
      },
      delegate: function (e, t, n, r) {
        return this.on(t, e, n, r);
      },
      undelegate: function (e, t, n) {
        return 1 === arguments.length
          ? this.off(e, "**")
          : this.off(t, e || "**", n);
      },
      hover: function (e, t) {
        return this.mouseenter(e).mouseleave(t || e);
      },
    }),
    S.each(
      "blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(
        " "
      ),
      function (e, n) {
        S.fn[n] = function (e, t) {
          return 0 < arguments.length
            ? this.on(n, null, e, t)
            : this.trigger(n);
        };
      }
    );
  var Xt = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
  (S.proxy = function (e, t) {
    var n, r, i;
    if (("string" == typeof t && ((n = e[t]), (t = e), (e = n)), m(e)))
      return (
        (r = s.call(arguments, 2)),
        ((i = function () {
          return e.apply(t || this, r.concat(s.call(arguments)));
        }).guid = e.guid =
          e.guid || S.guid++),
        i
      );
  }),
    (S.holdReady = function (e) {
      e ? S.readyWait++ : S.ready(!0);
    }),
    (S.isArray = Array.isArray),
    (S.parseJSON = JSON.parse),
    (S.nodeName = A),
    (S.isFunction = m),
    (S.isWindow = x),
    (S.camelCase = X),
    (S.type = w),
    (S.now = Date.now),
    (S.isNumeric = function (e) {
      var t = S.type(e);
      return ("number" === t || "string" === t) && !isNaN(e - parseFloat(e));
    }),
    (S.trim = function (e) {
      return null == e ? "" : (e + "").replace(Xt, "");
    }),
    "function" == typeof define &&
      define.amd &&
      define("jquery", [], function () {
        return S;
      });
  var Vt = C.jQuery,
    Gt = C.$;
  return (
    (S.noConflict = function (e) {
      return C.$ === S && (C.$ = Gt), e && C.jQuery === S && (C.jQuery = Vt), S;
    }),
    "undefined" == typeof e && (C.jQuery = C.$ = S),
    S
  );
});
jQuery.noConflict();
/*! jQuery Migrate v3.3.2 | (c) OpenJS Foundation and other contributors | jquery.org/license */
"undefined" == typeof jQuery.migrateMute && (jQuery.migrateMute = !0),
  (function (t) {
    "use strict";
    "function" == typeof define && define.amd
      ? define(["jquery"], function (e) {
          return t(e, window);
        })
      : "object" == typeof module && module.exports
      ? (module.exports = t(require("jquery"), window))
      : t(jQuery, window);
  })(function (s, n) {
    "use strict";
    function e(e) {
      return (
        0 <=
        (function (e, t) {
          for (
            var r = /^(\d+)\.(\d+)\.(\d+)/,
              n = r.exec(e) || [],
              o = r.exec(t) || [],
              i = 1;
            i <= 3;
            i++
          ) {
            if (+o[i] < +n[i]) return 1;
            if (+n[i] < +o[i]) return -1;
          }
          return 0;
        })(s.fn.jquery, e)
      );
    }
    (s.migrateVersion = "3.3.2"),
      n.console &&
        n.console.log &&
        ((s && e("3.0.0")) ||
          //   n.console.log("JQMIGRATE: jQuery 3.0.0+ REQUIRED"),
          (s.migrateWarnings &&
            //   n.console.log("JQMIGRATE: Migrate plugin loaded multiple times"),
            n.console.log(
              "JQMIGRATE: Migrate is installed" +
                (s.migrateMute ? "" : " with logging active") +
                ", version " +
                s.migrateVersion
            )));
    var r = {};
    function u(e) {
      var t = n.console;
      (s.migrateDeduplicateWarnings && r[e]) ||
        ((r[e] = !0),
        s.migrateWarnings.push(e),
        t &&
          t.warn &&
          !s.migrateMute &&
          (t.warn("JQMIGRATE: " + e), s.migrateTrace && t.trace && t.trace()));
    }
    function t(e, t, r, n) {
      Object.defineProperty(e, t, {
        configurable: !0,
        enumerable: !0,
        get: function () {
          return u(n), r;
        },
        set: function (e) {
          u(n), (r = e);
        },
      });
    }
    function o(e, t, r, n) {
      e[t] = function () {
        return u(n), r.apply(this, arguments);
      };
    }
    (s.migrateDeduplicateWarnings = !0),
      (s.migrateWarnings = []),
      void 0 === s.migrateTrace && (s.migrateTrace = !0),
      (s.migrateReset = function () {
        (r = {}), (s.migrateWarnings.length = 0);
      }),
      "BackCompat" === n.document.compatMode &&
        u("jQuery is not compatible with Quirks Mode");
    var i,
      a,
      c,
      d = {},
      l = s.fn.init,
      p = s.find,
      f = /\[(\s*[-\w]+\s*)([~|^$*]?=)\s*([-\w#]*?#[-\w#]*)\s*\]/,
      y = /\[(\s*[-\w]+\s*)([~|^$*]?=)\s*([-\w#]*?#[-\w#]*)\s*\]/g,
      m = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
    for (i in ((s.fn.init = function (e) {
      var t = Array.prototype.slice.call(arguments);
      return (
        "string" == typeof e &&
          "#" === e &&
          (u("jQuery( '#' ) is not a valid selector"), (t[0] = [])),
        l.apply(this, t)
      );
    }),
    (s.fn.init.prototype = s.fn),
    (s.find = function (t) {
      var r = Array.prototype.slice.call(arguments);
      if ("string" == typeof t && f.test(t))
        try {
          n.document.querySelector(t);
        } catch (e) {
          t = t.replace(y, function (e, t, r, n) {
            return "[" + t + r + '"' + n + '"]';
          });
          try {
            n.document.querySelector(t),
              u("Attribute selector with '#' must be quoted: " + r[0]),
              (r[0] = t);
          } catch (e) {
            u("Attribute selector with '#' was not fixed: " + r[0]);
          }
        }
      return p.apply(this, r);
    }),
    p))
      Object.prototype.hasOwnProperty.call(p, i) && (s.find[i] = p[i]);
    o(
      s.fn,
      "size",
      function () {
        return this.length;
      },
      "jQuery.fn.size() is deprecated and removed; use the .length property"
    ),
      o(
        s,
        "parseJSON",
        function () {
          return JSON.parse.apply(null, arguments);
        },
        "jQuery.parseJSON is deprecated; use JSON.parse"
      ),
      o(s, "holdReady", s.holdReady, "jQuery.holdReady is deprecated"),
      o(
        s,
        "unique",
        s.uniqueSort,
        "jQuery.unique is deprecated; use jQuery.uniqueSort"
      ),
      t(
        s.expr,
        "filters",
        s.expr.pseudos,
        "jQuery.expr.filters is deprecated; use jQuery.expr.pseudos"
      ),
      t(
        s.expr,
        ":",
        s.expr.pseudos,
        "jQuery.expr[':'] is deprecated; use jQuery.expr.pseudos"
      ),
      e("3.1.1") &&
        o(
          s,
          "trim",
          function (e) {
            return null == e ? "" : (e + "").replace(m, "");
          },
          "jQuery.trim is deprecated; use String.prototype.trim"
        ),
      e("3.2.0") &&
        (o(
          s,
          "nodeName",
          function (e, t) {
            return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase();
          },
          "jQuery.nodeName is deprecated"
        ),
        o(
          s,
          "isArray",
          Array.isArray,
          "jQuery.isArray is deprecated; use Array.isArray"
        )),
      e("3.3.0") &&
        (o(
          s,
          "isNumeric",
          function (e) {
            var t = typeof e;
            return (
              ("number" == t || "string" == t) && !isNaN(e - parseFloat(e))
            );
          },
          "jQuery.isNumeric() is deprecated"
        ),
        s.each(
          "Boolean Number String Function Array Date RegExp Object Error Symbol".split(
            " "
          ),
          function (e, t) {
            d["[object " + t + "]"] = t.toLowerCase();
          }
        ),
        o(
          s,
          "type",
          function (e) {
            return null == e
              ? e + ""
              : "object" == typeof e || "function" == typeof e
              ? d[Object.prototype.toString.call(e)] || "object"
              : typeof e;
          },
          "jQuery.type is deprecated"
        ),
        o(
          s,
          "isFunction",
          function (e) {
            return "function" == typeof e;
          },
          "jQuery.isFunction() is deprecated"
        ),
        o(
          s,
          "isWindow",
          function (e) {
            return null != e && e === e.window;
          },
          "jQuery.isWindow() is deprecated"
        )),
      s.ajax &&
        ((a = s.ajax),
        (c = /(=)\?(?=&|$)|\?\?/),
        (s.ajax = function () {
          var e = a.apply(this, arguments);
          return (
            e.promise &&
              (o(
                e,
                "success",
                e.done,
                "jQXHR.success is deprecated and removed"
              ),
              o(e, "error", e.fail, "jQXHR.error is deprecated and removed"),
              o(
                e,
                "complete",
                e.always,
                "jQXHR.complete is deprecated and removed"
              )),
            e
          );
        }),
        e("4.0.0") ||
          s.ajaxPrefilter("+json", function (e) {
            !1 !== e.jsonp &&
              (c.test(e.url) ||
                ("string" == typeof e.data &&
                  0 ===
                    (e.contentType || "").indexOf(
                      "application/x-www-form-urlencoded"
                    ) &&
                  c.test(e.data))) &&
              u("JSON-to-JSONP auto-promotion is deprecated");
          }));
    var g = s.fn.removeAttr,
      h = s.fn.toggleClass,
      v = /\S+/g;
    function j(e) {
      return e.replace(/-([a-z])/g, function (e, t) {
        return t.toUpperCase();
      });
    }
    s.fn.removeAttr = function (e) {
      var r = this;
      return (
        s.each(e.match(v), function (e, t) {
          s.expr.match.bool.test(t) &&
            (u("jQuery.fn.removeAttr no longer sets boolean properties: " + t),
            r.prop(t, !1));
        }),
        g.apply(this, arguments)
      );
    };
    var Q,
      b = !(s.fn.toggleClass = function (t) {
        return void 0 !== t && "boolean" != typeof t
          ? h.apply(this, arguments)
          : (u("jQuery.fn.toggleClass( boolean ) is deprecated"),
            this.each(function () {
              var e = (this.getAttribute && this.getAttribute("class")) || "";
              e && s.data(this, "__className__", e),
                this.setAttribute &&
                  this.setAttribute(
                    "class",
                    (!e && !1 !== t && s.data(this, "__className__")) || ""
                  );
            }));
      }),
      w = /^[a-z]/,
      x =
        /^(?:Border(?:Top|Right|Bottom|Left)?(?:Width|)|(?:Margin|Padding)?(?:Top|Right|Bottom|Left)?|(?:Min|Max)?(?:Width|Height))$/;
    s.swap &&
      s.each(["height", "width", "reliableMarginRight"], function (e, t) {
        var r = s.cssHooks[t] && s.cssHooks[t].get;
        r &&
          (s.cssHooks[t].get = function () {
            var e;
            return (b = !0), (e = r.apply(this, arguments)), (b = !1), e;
          });
      }),
      (s.swap = function (e, t, r, n) {
        var o,
          i,
          a = {};
        for (i in (b || u("jQuery.swap() is undocumented and deprecated"), t))
          (a[i] = e.style[i]), (e.style[i] = t[i]);
        for (i in ((o = r.apply(e, n || [])), t)) e.style[i] = a[i];
        return o;
      }),
      e("3.4.0") &&
        "undefined" != typeof Proxy &&
        (s.cssProps = new Proxy(s.cssProps || {}, {
          set: function () {
            return (
              u("JQMIGRATE: jQuery.cssProps is deprecated"),
              Reflect.set.apply(this, arguments)
            );
          },
        })),
      s.cssNumber || (s.cssNumber = {}),
      (Q = s.fn.css),
      (s.fn.css = function (e, t) {
        var r,
          n,
          o = this;
        return e && "object" == typeof e && !Array.isArray(e)
          ? (s.each(e, function (e, t) {
              s.fn.css.call(o, e, t);
            }),
            this)
          : ("number" == typeof t &&
              ((r = j(e)),
              (n = r),
              (w.test(n) && x.test(n[0].toUpperCase() + n.slice(1))) ||
                s.cssNumber[r] ||
                u(
                  'Number-typed values are deprecated for jQuery.fn.css( "' +
                    e +
                    '", value )'
                )),
            Q.apply(this, arguments));
      });
    var A,
      k,
      S,
      M,
      N = s.data;
    (s.data = function (e, t, r) {
      var n, o, i;
      if (t && "object" == typeof t && 2 === arguments.length) {
        for (i in ((n = s.hasData(e) && N.call(this, e)), (o = {}), t))
          i !== j(i)
            ? (u("jQuery.data() always sets/gets camelCased names: " + i),
              (n[i] = t[i]))
            : (o[i] = t[i]);
        return N.call(this, e, o), t;
      }
      return t &&
        "string" == typeof t &&
        t !== j(t) &&
        (n = s.hasData(e) && N.call(this, e)) &&
        t in n
        ? (u("jQuery.data() always sets/gets camelCased names: " + t),
          2 < arguments.length && (n[t] = r),
          n[t])
        : N.apply(this, arguments);
    }),
      s.fx &&
        ((S = s.Tween.prototype.run),
        (M = function (e) {
          return e;
        }),
        (s.Tween.prototype.run = function () {
          1 < s.easing[this.easing].length &&
            (u(
              "'jQuery.easing." +
                this.easing.toString() +
                "' should use only one argument"
            ),
            (s.easing[this.easing] = M)),
            S.apply(this, arguments);
        }),
        (A = s.fx.interval || 13),
        (k = "jQuery.fx.interval is deprecated"),
        n.requestAnimationFrame &&
          Object.defineProperty(s.fx, "interval", {
            configurable: !0,
            enumerable: !0,
            get: function () {
              return n.document.hidden || u(k), A;
            },
            set: function (e) {
              u(k), (A = e);
            },
          }));
    var R = s.fn.load,
      H = s.event.add,
      C = s.event.fix;
    (s.event.props = []),
      (s.event.fixHooks = {}),
      t(
        s.event.props,
        "concat",
        s.event.props.concat,
        "jQuery.event.props.concat() is deprecated and removed"
      ),
      (s.event.fix = function (e) {
        var t,
          r = e.type,
          n = this.fixHooks[r],
          o = s.event.props;
        if (o.length) {
          u("jQuery.event.props are deprecated and removed: " + o.join());
          while (o.length) s.event.addProp(o.pop());
        }
        if (
          n &&
          !n._migrated_ &&
          ((n._migrated_ = !0),
          u("jQuery.event.fixHooks are deprecated and removed: " + r),
          (o = n.props) && o.length)
        )
          while (o.length) s.event.addProp(o.pop());
        return (t = C.call(this, e)), n && n.filter ? n.filter(t, e) : t;
      }),
      (s.event.add = function (e, t) {
        return (
          e === n &&
            "load" === t &&
            "complete" === n.document.readyState &&
            u("jQuery(window).on('load'...) called after load event occurred"),
          H.apply(this, arguments)
        );
      }),
      s.each(["load", "unload", "error"], function (e, t) {
        s.fn[t] = function () {
          var e = Array.prototype.slice.call(arguments, 0);
          return "load" === t && "string" == typeof e[0]
            ? R.apply(this, e)
            : (u("jQuery.fn." + t + "() is deprecated"),
              e.splice(0, 0, t),
              arguments.length
                ? this.on.apply(this, e)
                : (this.triggerHandler.apply(this, e), this));
        };
      }),
      s.each(
        "blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(
          " "
        ),
        function (e, r) {
          s.fn[r] = function (e, t) {
            return (
              u("jQuery.fn." + r + "() event shorthand is deprecated"),
              0 < arguments.length ? this.on(r, null, e, t) : this.trigger(r)
            );
          };
        }
      ),
      s(function () {
        s(n.document).triggerHandler("ready");
      }),
      (s.event.special.ready = {
        setup: function () {
          this === n.document && u("'ready' event is deprecated");
        },
      }),
      s.fn.extend({
        bind: function (e, t, r) {
          return u("jQuery.fn.bind() is deprecated"), this.on(e, null, t, r);
        },
        unbind: function (e, t) {
          return u("jQuery.fn.unbind() is deprecated"), this.off(e, null, t);
        },
        delegate: function (e, t, r, n) {
          return u("jQuery.fn.delegate() is deprecated"), this.on(t, e, r, n);
        },
        undelegate: function (e, t, r) {
          return (
            u("jQuery.fn.undelegate() is deprecated"),
            1 === arguments.length
              ? this.off(e, "**")
              : this.off(t, e || "**", r)
          );
        },
        hover: function (e, t) {
          return (
            u("jQuery.fn.hover() is deprecated"),
            this.on("mouseenter", e).on("mouseleave", t || e)
          );
        },
      });
    function T(e) {
      var t = n.document.implementation.createHTMLDocument("");
      return (t.body.innerHTML = e), t.body && t.body.innerHTML;
    }
    function P(e) {
      var t = e.replace(O, "<$1></$2>");
      t !== e &&
        T(e) !== T(t) &&
        u("HTML tags must be properly nested and closed: " + e);
    }
    var O =
        /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,
      q = s.htmlPrefilter;
    (s.UNSAFE_restoreLegacyHtmlPrefilter = function () {
      s.htmlPrefilter = function (e) {
        return P(e), e.replace(O, "<$1></$2>");
      };
    }),
      (s.htmlPrefilter = function (e) {
        return P(e), q(e);
      });
    var D,
      _ = s.fn.offset;
    (s.fn.offset = function () {
      var e = this[0];
      return !e || (e.nodeType && e.getBoundingClientRect)
        ? _.apply(this, arguments)
        : (u("jQuery.fn.offset() requires a valid DOM element"),
          arguments.length ? this : void 0);
    }),
      s.ajax &&
        ((D = s.param),
        (s.param = function (e, t) {
          var r = s.ajaxSettings && s.ajaxSettings.traditional;
          return (
            void 0 === t &&
              r &&
              (u(
                "jQuery.param() no longer uses jQuery.ajaxSettings.traditional"
              ),
              (t = r)),
            D.call(this, e, t)
          );
        }));
    var E,
      F,
      J = s.fn.andSelf || s.fn.addBack;
    return (
      (s.fn.andSelf = function () {
        return (
          u(
            "jQuery.fn.andSelf() is deprecated and removed, use jQuery.fn.addBack()"
          ),
          J.apply(this, arguments)
        );
      }),
      s.Deferred &&
        ((E = s.Deferred),
        (F = [
          [
            "resolve",
            "done",
            s.Callbacks("once memory"),
            s.Callbacks("once memory"),
            "resolved",
          ],
          [
            "reject",
            "fail",
            s.Callbacks("once memory"),
            s.Callbacks("once memory"),
            "rejected",
          ],
          ["notify", "progress", s.Callbacks("memory"), s.Callbacks("memory")],
        ]),
        (s.Deferred = function (e) {
          var i = E(),
            a = i.promise();
          return (
            (i.pipe = a.pipe =
              function () {
                var o = arguments;
                return (
                  u("deferred.pipe() is deprecated"),
                  s
                    .Deferred(function (n) {
                      s.each(F, function (e, t) {
                        var r = "function" == typeof o[e] && o[e];
                        i[t[1]](function () {
                          var e = r && r.apply(this, arguments);
                          e && "function" == typeof e.promise
                            ? e
                                .promise()
                                .done(n.resolve)
                                .fail(n.reject)
                                .progress(n.notify)
                            : n[t[0] + "With"](
                                this === a ? n.promise() : this,
                                r ? [e] : arguments
                              );
                        });
                      }),
                        (o = null);
                    })
                    .promise()
                );
              }),
            e && e.call(i, i),
            i
          );
        }),
        (s.Deferred.exceptionHook = E.exceptionHook)),
      s
    );
  });
!(function (v) {
  var a = !0;
  (v.flexslider = function (p, e) {
    var m = v(p);
    "undefined" == typeof e.rtl &&
      "rtl" == v("html").attr("dir") &&
      (e.rtl = !0),
      (m.vars = v.extend({}, v.flexslider.defaults, e));
    var t,
      s = m.vars.namespace,
      f =
        window.navigator &&
        window.navigator.msPointerEnabled &&
        window.MSGesture,
      o =
        ("ontouchstart" in window ||
          f ||
          (window.DocumentTouch && document instanceof DocumentTouch)) &&
        m.vars.touch,
      l = "click touchend MSPointerUp keyup",
      c = "",
      g = "vertical" === m.vars.direction,
      h = m.vars.reverse,
      S = 0 < m.vars.itemWidth,
      x = "fade" === m.vars.animation,
      d = "" !== m.vars.asNavFor,
      u = {};
    v.data(p, "flexslider", m),
      (u = {
        init: function () {
          (m.animating = !1),
            (m.currentSlide = parseInt(
              m.vars.startAt ? m.vars.startAt : 0,
              10
            )),
            isNaN(m.currentSlide) && (m.currentSlide = 0),
            (m.animatingTo = m.currentSlide),
            (m.atEnd = 0 === m.currentSlide || m.currentSlide === m.last),
            (m.containerSelector = m.vars.selector.substr(
              0,
              m.vars.selector.search(" ")
            )),
            (m.slides = v(m.vars.selector, m)),
            (m.container = v(m.containerSelector, m)),
            (m.count = m.slides.length),
            (m.syncExists = 0 < v(m.vars.sync).length),
            "slide" === m.vars.animation && (m.vars.animation = "swing"),
            (m.prop = g ? "top" : m.vars.rtl ? "marginRight" : "marginLeft"),
            (m.args = {}),
            (m.manualPause = !1),
            (m.stopped = !1),
            (m.started = !1),
            (m.startTimeout = null),
            (m.transitions =
              !m.vars.video &&
              !x &&
              m.vars.useCSS &&
              (function () {
                var e,
                  t = document.createElement("div"),
                  a = [
                    "perspectiveProperty",
                    "WebkitPerspective",
                    "MozPerspective",
                    "OPerspective",
                    "msPerspective",
                  ];
                for (e in a)
                  if (t.style[a[e]] !== undefined)
                    return (
                      (m.pfx = a[e].replace("Perspective", "").toLowerCase()),
                      (m.prop = "-" + m.pfx + "-transform"),
                      !0
                    );
                return !1;
              })()),
            (m.isFirefox =
              -1 < navigator.userAgent.toLowerCase().indexOf("firefox")),
            (m.ensureAnimationEnd = "") !== m.vars.controlsContainer &&
              (m.controlsContainer =
                0 < v(m.vars.controlsContainer).length &&
                v(m.vars.controlsContainer)),
            "" !== m.vars.manualControls &&
              (m.manualControls =
                0 < v(m.vars.manualControls).length &&
                v(m.vars.manualControls)),
            "" !== m.vars.customDirectionNav &&
              (m.customDirectionNav =
                2 === v(m.vars.customDirectionNav).length &&
                v(m.vars.customDirectionNav)),
            m.vars.randomize &&
              (m.slides.sort(function () {
                return Math.round(Math.random()) - 0.5;
              }),
              m.container.empty().append(m.slides)),
            m.doMath(),
            m.setup("init"),
            m.vars.controlNav && u.controlNav.setup(),
            m.vars.directionNav && u.directionNav.setup(),
            m.vars.keyboard &&
              (1 === v(m.containerSelector).length ||
                m.vars.multipleKeyboard) &&
              v(document).on("keyup", function (e) {
                e = e.keyCode;
                m.animating ||
                  (39 !== e && 37 !== e) ||
                  ((e = m.vars.rtl
                    ? 37 === e
                      ? m.getTarget("next")
                      : 39 === e && m.getTarget("prev")
                    : 39 === e
                    ? m.getTarget("next")
                    : 37 === e && m.getTarget("prev")),
                  m.flexAnimate(e, m.vars.pauseOnAction));
              }),
            m.vars.mousewheel &&
              m.on("mousewheel", function (e, t, a, n) {
                e.preventDefault();
                t = t < 0 ? m.getTarget("next") : m.getTarget("prev");
                m.flexAnimate(t, m.vars.pauseOnAction);
              }),
            m.vars.pausePlay && u.pausePlay.setup(),
            m.vars.slideshow &&
              m.vars.pauseInvisible &&
              u.pauseInvisible.init(),
            m.vars.slideshow &&
              (m.vars.pauseOnHover &&
                m
                  .on("mouseenter", function () {
                    m.manualPlay || m.manualPause || m.pause();
                  })
                  .on("mouseleave", function () {
                    m.manualPause || m.manualPlay || m.stopped || m.play();
                  }),
              (m.vars.pauseInvisible && u.pauseInvisible.isHidden()) ||
                (0 < m.vars.initDelay
                  ? (m.startTimeout = setTimeout(m.play, m.vars.initDelay))
                  : m.play())),
            d && u.asNav.setup(),
            o && m.vars.touch && u.touch(),
            (!x || (x && m.vars.smoothHeight)) &&
              v(window).on("resize orientationchange focus", u.resize),
            m.find("img").attr("draggable", "false"),
            setTimeout(function () {
              m.vars.start(m);
            }, 200);
        },
        asNav: {
          setup: function () {
            (m.asNav = !0),
              (m.animatingTo = Math.floor(m.currentSlide / m.move)),
              (m.currentItem = m.currentSlide),
              m.slides
                .removeClass(s + "active-slide")
                .eq(m.currentItem)
                .addClass(s + "active-slide"),
              f
                ? (p._slider = m).slides.each(function () {
                    var e = this;
                    (e._gesture = new MSGesture()),
                      (e._gesture.target = e).addEventListener(
                        "MSPointerDown",
                        function (e) {
                          e.preventDefault(),
                            e.currentTarget._gesture &&
                              e.currentTarget._gesture.addPointer(e.pointerId);
                        },
                        !1
                      ),
                      e.addEventListener("MSGestureTap", function (e) {
                        e.preventDefault();
                        var t = v(this),
                          e = t.index();
                        v(m.vars.asNavFor).data("flexslider").animating ||
                          t.hasClass("active") ||
                          ((m.direction = m.currentItem < e ? "next" : "prev"),
                          m.flexAnimate(e, m.vars.pauseOnAction, !1, !0, !0));
                      });
                  })
                : m.slides.on(l, function (e) {
                    e.preventDefault();
                    var t = v(this),
                      a = t.index(),
                      e = m.vars.rtl
                        ? -1 * (t.offset().right - v(m).scrollLeft())
                        : t.offset().left - v(m).scrollLeft();
                    e <= 0 && t.hasClass(s + "active-slide")
                      ? m.flexAnimate(m.getTarget("prev"), !0)
                      : v(m.vars.asNavFor).data("flexslider").animating ||
                        t.hasClass(s + "active-slide") ||
                        ((m.direction = m.currentItem < a ? "next" : "prev"),
                        m.flexAnimate(a, m.vars.pauseOnAction, !1, !0, !0));
                  });
          },
        },
        controlNav: {
          setup: function () {
            m.manualControls
              ? u.controlNav.setupManual()
              : u.controlNav.setupPaging();
          },
          setupPaging: function () {
            var e,
              t =
                "thumbnails" === m.vars.controlNav
                  ? "control-thumbs"
                  : "control-paging",
              a = 1;
            if (
              ((m.controlNavScaffold = v(
                '<ol class="' + s + "control-nav " + s + t + '"></ol>'
              )),
              1 < m.pagingCount)
            )
              for (var n = 0; n < m.pagingCount; n++) {
                var i = m.slides.eq(n);
                undefined === i.attr("data-thumb-alt") &&
                  i.attr("data-thumb-alt", ""),
                  (e = v("<a></a>").attr("href", "#").text(a)),
                  "thumbnails" === m.vars.controlNav &&
                    (e = v("<img/>").attr("src", i.attr("data-thumb"))),
                  "" !== i.attr("data-thumb-alt") &&
                    e.attr("alt", i.attr("data-thumb-alt")),
                  "thumbnails" !== m.vars.controlNav ||
                    !0 !== m.vars.thumbCaptions ||
                    ("" !== (i = i.attr("data-thumbcaption")) &&
                      undefined !== i &&
                      ((r = v("<span></span>")
                        .addClass(s + "caption")
                        .text(i)),
                      e.append(r)));
                var r = v("<li>");
                e.appendTo(r),
                  r.append("</li>"),
                  m.controlNavScaffold.append(r),
                  a++;
              }
            (m.controlsContainer ? v(m.controlsContainer) : m).append(
              m.controlNavScaffold
            ),
              u.controlNav.set(),
              u.controlNav.active(),
              m.controlNavScaffold.on(l, "a, img", function (e) {
                var t, a;
                e.preventDefault(),
                  ("" !== c && c !== e.type) ||
                    ((t = v(this)),
                    (a = m.controlNav.index(t)),
                    t.hasClass(s + "active") ||
                      ((m.direction = a > m.currentSlide ? "next" : "prev"),
                      m.flexAnimate(a, m.vars.pauseOnAction))),
                  "" === c && (c = e.type),
                  u.setToClearWatchedEvent();
              });
          },
          setupManual: function () {
            (m.controlNav = m.manualControls),
              u.controlNav.active(),
              m.controlNav.on(l, function (e) {
                var t, a;
                e.preventDefault(),
                  ("" !== c && c !== e.type) ||
                    ((t = v(this)),
                    (a = m.controlNav.index(t)),
                    t.hasClass(s + "active") ||
                      (a > m.currentSlide
                        ? (m.direction = "next")
                        : (m.direction = "prev"),
                      m.flexAnimate(a, m.vars.pauseOnAction))),
                  "" === c && (c = e.type),
                  u.setToClearWatchedEvent();
              });
          },
          set: function () {
            var e = "thumbnails" === m.vars.controlNav ? "img" : "a";
            m.controlNav = v(
              "." + s + "control-nav li " + e,
              m.controlsContainer ? m.controlsContainer : m
            );
          },
          active: function () {
            m.controlNav
              .removeClass(s + "active")
              .eq(m.animatingTo)
              .addClass(s + "active");
          },
          update: function (e, t) {
            1 < m.pagingCount && "add" === e
              ? m.controlNavScaffold.append(
                  v('<li><a href="#">' + m.count + "</a></li>")
                )
              : (1 === m.pagingCount
                  ? m.controlNavScaffold.find("li")
                  : m.controlNav.eq(t).closest("li")
                ).remove(),
              u.controlNav.set(),
              1 < m.pagingCount && m.pagingCount !== m.controlNav.length
                ? m.update(t, e)
                : u.controlNav.active();
          },
        },
        directionNav: {
          setup: function () {
            var e = v(
              '<ul class="' +
                s +
                'direction-nav"><li class="' +
                s +
                'nav-prev"><a class="' +
                s +
                'prev" href="#">' +
                m.vars.prevText +
                '</a></li><li class="' +
                s +
                'nav-next"><a class="' +
                s +
                'next" href="#">' +
                m.vars.nextText +
                "</a></li></ul>"
            );
            m.customDirectionNav
              ? (m.directionNav = m.customDirectionNav)
              : m.controlsContainer
              ? (v(m.controlsContainer).append(e),
                (m.directionNav = v(
                  "." + s + "direction-nav li a",
                  m.controlsContainer
                )))
              : (m.append(e),
                (m.directionNav = v("." + s + "direction-nav li a", m))),
              u.directionNav.update(),
              m.directionNav.on(l, function (e) {
                var t;
                e.preventDefault(),
                  ("" !== c && c !== e.type) ||
                    ((t = v(this).hasClass(s + "next")
                      ? m.getTarget("next")
                      : m.getTarget("prev")),
                    m.flexAnimate(t, m.vars.pauseOnAction)),
                  "" === c && (c = e.type),
                  u.setToClearWatchedEvent();
              });
          },
          update: function () {
            console.log("updating...");
            var e = s + "disabled";
            1 === m.pagingCount
              ? m.directionNav.addClass(e).attr("tabindex", "-1")
              : m.vars.animationLoop
              ? m.directionNav.removeClass(e).prop("tabindex", "-1")
              : 0 === m.animatingTo
              ? m.directionNav
                  .removeClass(e)
                  .filter("." + s + "prev")
                  .addClass(e)
                  .attr("tabindex", "-1")
              : m.animatingTo === m.last
              ? m.directionNav
                  .removeClass(e)
                  .filter("." + s + "next")
                  .addClass(e)
                  .attr("tabindex", "-1")
              : m.directionNav.removeClass(e).prop("tabindex", "-1");
          },
        },
        pausePlay: {
          setup: function () {
            var e = v('<div class="' + s + 'pauseplay"><a href="#"></a></div>');
            m.controlsContainer
              ? (m.controlsContainer.append(e),
                (m.pausePlay = v("." + s + "pauseplay a", m.controlsContainer)))
              : (m.append(e), (m.pausePlay = v("." + s + "pauseplay a", m))),
              u.pausePlay.update(m.vars.slideshow ? s + "pause" : s + "play"),
              m.pausePlay.on(l, function (e) {
                e.preventDefault(),
                  ("" !== c && c !== e.type) ||
                    (v(this).hasClass(s + "pause")
                      ? ((m.manualPause = !0), (m.manualPlay = !1), m.pause())
                      : ((m.manualPause = !1), (m.manualPlay = !0), m.play())),
                  "" === c && (c = e.type),
                  u.setToClearWatchedEvent();
              });
          },
          update: function (e) {
            "play" === e
              ? m.pausePlay
                  .removeClass(s + "pause")
                  .addClass(s + "play")
                  .html(m.vars.playText)
              : m.pausePlay
                  .removeClass(s + "play")
                  .addClass(s + "pause")
                  .html(m.vars.pauseText);
          },
        },
        touch: function () {
          var n,
            i,
            r,
            s,
            o,
            l,
            e,
            c,
            d,
            u = !1,
            t = 0,
            a = 0,
            v = 0;
          f
            ? ((p.style.msTouchAction = "none"),
              (p._gesture = new MSGesture()),
              (p._gesture.target = p).addEventListener(
                "MSPointerDown",
                function (e) {
                  e.stopPropagation(),
                    m.animating
                      ? e.preventDefault()
                      : (m.pause(),
                        p._gesture.addPointer(e.pointerId),
                        (v = 0),
                        (s = g ? m.h : m.w),
                        (l = Number(new Date())),
                        (r =
                          S && h && m.animatingTo === m.last
                            ? 0
                            : S && h
                            ? m.limit -
                              (m.itemW + m.vars.itemMargin) *
                                m.move *
                                m.animatingTo
                            : S && m.currentSlide === m.last
                            ? m.limit
                            : S
                            ? (m.itemW + m.vars.itemMargin) *
                              m.move *
                              m.currentSlide
                            : h
                            ? (m.last - m.currentSlide + m.cloneOffset) * s
                            : (m.currentSlide + m.cloneOffset) * s));
                },
                !1
              ),
              (p._slider = m),
              p.addEventListener(
                "MSGestureChange",
                function (e) {
                  e.stopPropagation();
                  var t = e.target._slider;
                  if (!t) return;
                  var a = -e.translationX,
                    n = -e.translationY;
                  if (
                    ((v += g ? n : a),
                    (o = (t.vars.rtl ? -1 : 1) * v),
                    (u = g
                      ? Math.abs(v) < Math.abs(-a)
                      : Math.abs(v) < Math.abs(-n)),
                    e.detail === e.MSGESTURE_FLAG_INERTIA)
                  )
                    return void setImmediate(function () {
                      p._gesture.stop();
                    });
                  (!u || 500 < Number(new Date()) - l) &&
                    (e.preventDefault(),
                    !x &&
                      t.transitions &&
                      (t.vars.animationLoop ||
                        (o =
                          v /
                          ((0 === t.currentSlide && v < 0) ||
                          (t.currentSlide === t.last && 0 < v)
                            ? Math.abs(v) / s + 2
                            : 1)),
                      t.setProps(r + o, "setTouch")));
                },
                !1
              ),
              p.addEventListener(
                "MSGestureEnd",
                function (e) {
                  e.stopPropagation();
                  var t = e.target._slider;
                  if (!t) return;
                  {
                    var a;
                    t.animatingTo !== t.currentSlide ||
                      u ||
                      null === o ||
                      ((e =
                        0 < (a = h ? -o : o)
                          ? t.getTarget("next")
                          : t.getTarget("prev")),
                      t.canAdvance(e) &&
                      ((Number(new Date()) - l < 550 && 50 < Math.abs(a)) ||
                        Math.abs(a) > s / 2)
                        ? t.flexAnimate(e, t.vars.pauseOnAction)
                        : x ||
                          t.flexAnimate(
                            t.currentSlide,
                            t.vars.pauseOnAction,
                            !0
                          ));
                  }
                  (r = o = i = n = null), (v = 0);
                },
                !1
              ))
            : ((e = function (e) {
                m.animating
                  ? e.preventDefault()
                  : (!window.navigator.msPointerEnabled &&
                      1 !== e.touches.length) ||
                    (m.pause(),
                    (s = g ? m.h : m.w),
                    (l = Number(new Date())),
                    (t = e.touches[0].pageX),
                    (a = e.touches[0].pageY),
                    (r =
                      S && h && m.animatingTo === m.last
                        ? 0
                        : S && h
                        ? m.limit -
                          (m.itemW + m.vars.itemMargin) * m.move * m.animatingTo
                        : S && m.currentSlide === m.last
                        ? m.limit
                        : S
                        ? (m.itemW + m.vars.itemMargin) *
                          m.move *
                          m.currentSlide
                        : h
                        ? (m.last - m.currentSlide + m.cloneOffset) * s
                        : (m.currentSlide + m.cloneOffset) * s),
                    (n = g ? a : t),
                    (i = g ? t : a),
                    p.addEventListener("touchmove", c, !1),
                    p.addEventListener("touchend", d, !1));
              }),
              (c = function (e) {
                (t = e.touches[0].pageX),
                  (a = e.touches[0].pageY),
                  (o = g ? n - a : (m.vars.rtl ? -1 : 1) * (n - t));
                (!(u = g
                  ? Math.abs(o) < Math.abs(t - i)
                  : Math.abs(o) < Math.abs(a - i)) ||
                  500 < Number(new Date()) - l) &&
                  (e.preventDefault(),
                  !x &&
                    m.transitions &&
                    (m.vars.animationLoop ||
                      (o /=
                        (0 === m.currentSlide && o < 0) ||
                        (m.currentSlide === m.last && 0 < o)
                          ? Math.abs(o) / s + 2
                          : 1),
                    m.setProps(r + o, "setTouch")));
              }),
              (d = function (e) {
                var t, a;
                p.removeEventListener("touchmove", c, !1),
                  m.animatingTo !== m.currentSlide ||
                    u ||
                    null === o ||
                    ((a =
                      0 < (t = h ? -o : o)
                        ? m.getTarget("next")
                        : m.getTarget("prev")),
                    m.canAdvance(a) &&
                    ((Number(new Date()) - l < 550 && 50 < Math.abs(t)) ||
                      Math.abs(t) > s / 2)
                      ? m.flexAnimate(a, m.vars.pauseOnAction)
                      : x ||
                        m.flexAnimate(
                          m.currentSlide,
                          m.vars.pauseOnAction,
                          !0
                        )),
                  p.removeEventListener("touchend", d, !1),
                  (r = o = i = n = null);
              }),
              p.addEventListener("touchstart", e, !1));
        },
        resize: function () {
          !m.animating &&
            m.is(":visible") &&
            (S || m.doMath(),
            x
              ? u.smoothHeight()
              : S
              ? (m.slides.width(m.computedW),
                m.update(m.pagingCount),
                m.setProps())
              : g
              ? (m.viewport.height(m.h), m.setProps(m.h, "setTotal"))
              : (m.vars.smoothHeight && u.smoothHeight(),
                m.newSlides.width(m.computedW),
                m.setProps(m.computedW, "setTotal")));
        },
        smoothHeight: function (e) {
          var t;
          (g && !x) ||
            ((t = x ? m : m.viewport),
            e
              ? t.animate(
                  { height: m.slides.eq(m.animatingTo).innerHeight() },
                  e
                )
              : t.innerHeight(m.slides.eq(m.animatingTo).innerHeight()));
        },
        sync: function (e) {
          var t = v(m.vars.sync).data("flexslider"),
            a = m.animatingTo;
          switch (e) {
            case "animate":
              t.flexAnimate(a, m.vars.pauseOnAction, !1, !0);
              break;
            case "play":
              t.playing || t.asNav || t.play();
              break;
            case "pause":
              t.pause();
          }
        },
        uniqueID: function (e) {
          return (
            e
              .filter("[id]")
              .add(e.find("[id]"))
              .each(function () {
                var e = v(this);
                e.attr("id", e.attr("id") + "_clone");
              }),
            e
          );
        },
        pauseInvisible: {
          visProp: null,
          init: function () {
            var e = u.pauseInvisible.getHiddenProp();
            e &&
              ((e = e.replace(/[H|h]idden/, "") + "visibilitychange"),
              document.addEventListener(e, function () {
                u.pauseInvisible.isHidden()
                  ? m.startTimeout
                    ? clearTimeout(m.startTimeout)
                    : m.pause()
                  : !m.started && 0 < m.vars.initDelay
                  ? setTimeout(m.play, m.vars.initDelay)
                  : m.play();
              }));
          },
          isHidden: function () {
            var e = u.pauseInvisible.getHiddenProp();
            return !!e && document[e];
          },
          getHiddenProp: function () {
            var e = ["webkit", "moz", "ms", "o"];
            if ("hidden" in document) return "hidden";
            for (var t = 0; t < e.length; t++)
              if (e[t] + "Hidden" in document) return e[t] + "Hidden";
            return null;
          },
        },
        setToClearWatchedEvent: function () {
          clearTimeout(t),
            (t = setTimeout(function () {
              c = "";
            }, 3e3));
        },
      }),
      (m.flexAnimate = function (e, t, a, n, i) {
        if (
          (m.vars.animationLoop ||
            e === m.currentSlide ||
            (m.direction = e > m.currentSlide ? "next" : "prev"),
          d &&
            1 === m.pagingCount &&
            (m.direction = m.currentItem < e ? "next" : "prev"),
          !m.animating && (m.canAdvance(e, i) || a) && m.is(":visible"))
        ) {
          if (d && n) {
            n = v(m.vars.asNavFor).data("flexslider");
            if (
              ((m.atEnd = 0 === e || e === m.count - 1),
              n.flexAnimate(e, !0, !1, !0, i),
              (m.direction = m.currentItem < e ? "next" : "prev"),
              (n.direction = m.direction),
              Math.ceil((e + 1) / m.visible) - 1 === m.currentSlide || 0 === e)
            )
              return (
                (m.currentItem = e),
                m.slides
                  .removeClass(s + "active-slide")
                  .eq(e)
                  .addClass(s + "active-slide"),
                !1
              );
            (m.currentItem = e),
              m.slides
                .removeClass(s + "active-slide")
                .eq(e)
                .addClass(s + "active-slide"),
              (e = Math.floor(e / m.visible));
          }
          var r;
          (m.animating = !0),
            (m.animatingTo = e),
            t && m.pause(),
            m.vars.before(m),
            m.syncExists && !i && u.sync("animate"),
            m.vars.controlNav && u.controlNav.active(),
            S ||
              m.slides
                .removeClass(s + "active-slide")
                .eq(e)
                .addClass(s + "active-slide"),
            (m.atEnd = 0 === e || e === m.last),
            m.vars.directionNav && u.directionNav.update(),
            e === m.last && (m.vars.end(m), m.vars.animationLoop || m.pause()),
            x
              ? o
                ? (m.slides.eq(m.currentSlide).css({ opacity: 0, zIndex: 1 }),
                  m.slides.eq(e).css({ opacity: 1, zIndex: 2 }),
                  m.wrapup(r))
                : (m.slides
                    .eq(m.currentSlide)
                    .css({ zIndex: 1 })
                    .animate(
                      { opacity: 0 },
                      m.vars.animationSpeed,
                      m.vars.easing
                    ),
                  m.slides
                    .eq(e)
                    .css({ zIndex: 2 })
                    .animate(
                      { opacity: 1 },
                      m.vars.animationSpeed,
                      m.vars.easing,
                      m.wrapup
                    ))
              : ((r = g ? m.slides.filter(":first").height() : m.computedW),
                (e = S
                  ? ((i = m.vars.itemMargin),
                    (i = (m.itemW + i) * m.move * m.animatingTo) > m.limit &&
                    1 !== m.visible
                      ? m.limit
                      : i)
                  : 0 === m.currentSlide &&
                    e === m.count - 1 &&
                    m.vars.animationLoop &&
                    "next" !== m.direction
                  ? h
                    ? (m.count + m.cloneOffset) * r
                    : 0
                  : m.currentSlide === m.last &&
                    0 === e &&
                    m.vars.animationLoop &&
                    "prev" !== m.direction
                  ? h
                    ? 0
                    : (m.count + 1) * r
                  : h
                  ? (m.count - 1 - e + m.cloneOffset) * r
                  : (e + m.cloneOffset) * r),
                m.setProps(e, "", m.vars.animationSpeed),
                m.transitions
                  ? ((m.vars.animationLoop && m.atEnd) ||
                      ((m.animating = !1), (m.currentSlide = m.animatingTo)),
                    m.container.off("webkitTransitionEnd transitionend"),
                    m.container.on(
                      "webkitTransitionEnd transitionend",
                      function () {
                        clearTimeout(m.ensureAnimationEnd), m.wrapup(r);
                      }
                    ),
                    clearTimeout(m.ensureAnimationEnd),
                    (m.ensureAnimationEnd = setTimeout(function () {
                      m.wrapup(r);
                    }, m.vars.animationSpeed + 100)))
                  : m.container.animate(
                      m.args,
                      m.vars.animationSpeed,
                      m.vars.easing,
                      function () {
                        m.wrapup(r);
                      }
                    )),
            m.vars.smoothHeight && u.smoothHeight(m.vars.animationSpeed);
        }
      }),
      (m.wrapup = function (e) {
        x ||
          S ||
          (0 === m.currentSlide &&
          m.animatingTo === m.last &&
          m.vars.animationLoop
            ? m.setProps(e, "jumpEnd")
            : m.currentSlide === m.last &&
              0 === m.animatingTo &&
              m.vars.animationLoop &&
              m.setProps(e, "jumpStart")),
          (m.animating = !1),
          (m.currentSlide = m.animatingTo),
          m.vars.after(m);
      }),
      (m.animateSlides = function () {
        !m.animating && a && m.flexAnimate(m.getTarget("next"));
      }),
      (m.pause = function () {
        clearInterval(m.animatedSlides),
          (m.animatedSlides = null),
          (m.playing = !1),
          m.vars.pausePlay && u.pausePlay.update("play"),
          m.syncExists && u.sync("pause");
      }),
      (m.play = function () {
        m.playing && clearInterval(m.animatedSlides),
          (m.animatedSlides =
            m.animatedSlides ||
            setInterval(m.animateSlides, m.vars.slideshowSpeed)),
          (m.started = m.playing = !0),
          m.vars.pausePlay && u.pausePlay.update("pause"),
          m.syncExists && u.sync("play");
      }),
      (m.stop = function () {
        m.pause(), (m.stopped = !0);
      }),
      (m.canAdvance = function (e, t) {
        var a = d ? m.pagingCount - 1 : m.last;
        return (
          !!t ||
          (d &&
            m.currentItem === m.count - 1 &&
            0 === e &&
            "prev" === m.direction) ||
          ((!d ||
            0 !== m.currentItem ||
            e !== m.pagingCount - 1 ||
            "next" === m.direction) &&
            (e !== m.currentSlide || d) &&
            (!!m.vars.animationLoop ||
              ((!m.atEnd ||
                0 !== m.currentSlide ||
                e !== a ||
                "next" === m.direction) &&
                (!m.atEnd ||
                  m.currentSlide !== a ||
                  0 !== e ||
                  "next" !== m.direction))))
        );
      }),
      (m.getTarget = function (e) {
        return "next" === (m.direction = e)
          ? m.currentSlide === m.last
            ? 0
            : m.currentSlide + 1
          : 0 === m.currentSlide
          ? m.last
          : m.currentSlide - 1;
      }),
      (m.setProps = function (e, t, a) {
        var n,
          i =
            ((n = e || (m.itemW + m.vars.itemMargin) * m.move * m.animatingTo),
            (function () {
              if (S)
                return "setTouch" === t
                  ? e
                  : h && m.animatingTo === m.last
                  ? 0
                  : h
                  ? m.limit -
                    (m.itemW + m.vars.itemMargin) * m.move * m.animatingTo
                  : m.animatingTo === m.last
                  ? m.limit
                  : n;
              switch (t) {
                case "setTotal":
                  return h
                    ? (m.count - 1 - m.currentSlide + m.cloneOffset) * e
                    : (m.currentSlide + m.cloneOffset) * e;
                case "setTouch":
                  return e;
                case "jumpEnd":
                  return h ? e : m.count * e;
                case "jumpStart":
                  return h ? m.count * e : e;
                default:
                  return e;
              }
            })() *
              (m.vars.rtl ? 1 : -1) +
              "px");
        m.transitions &&
          ((i = g
            ? "translate3d(0," + i + ",0)"
            : "translate3d(" + parseInt(i) + "px,0,0)"),
          (a = a !== undefined ? a / 1e3 + "s" : "0s"),
          m.container.css("-" + m.pfx + "-transition-duration", a),
          m.container.css("transition-duration", a)),
          (m.args[m.prop] = i),
          (!m.transitions && a !== undefined) || m.container.css(m.args),
          m.container.css("transform", i);
      }),
      (m.setup = function (e) {
        var t, a;
        x
          ? (m.vars.rtl
              ? m.slides.css({
                  width: "100%",
                  float: "right",
                  marginLeft: "-100%",
                  position: "relative",
                })
              : m.slides.css({
                  width: "100%",
                  float: "left",
                  marginRight: "-100%",
                  position: "relative",
                }),
            "init" === e &&
              (o
                ? m.slides
                    .css({
                      opacity: 0,
                      display: "block",
                      webkitTransition:
                        "opacity " + m.vars.animationSpeed / 1e3 + "s ease",
                      zIndex: 1,
                    })
                    .eq(m.currentSlide)
                    .css({ opacity: 1, zIndex: 2 })
                : 0 == m.vars.fadeFirstSlide
                ? m.slides
                    .css({ opacity: 0, display: "block", zIndex: 1 })
                    .eq(m.currentSlide)
                    .css({ zIndex: 2 })
                    .css({ opacity: 1 })
                : m.slides
                    .css({ opacity: 0, display: "block", zIndex: 1 })
                    .eq(m.currentSlide)
                    .css({ zIndex: 2 })
                    .animate(
                      { opacity: 1 },
                      m.vars.animationSpeed,
                      m.vars.easing
                    )),
            m.vars.smoothHeight && u.smoothHeight())
          : ("init" === e &&
              ((m.viewport = v('<div class="' + s + 'viewport"></div>')
                .css({ overflow: "hidden", position: "relative" })
                .appendTo(m)
                .append(m.container)),
              (m.cloneCount = 0),
              (m.cloneOffset = 0),
              h &&
                ((a = v.makeArray(m.slides).reverse()),
                (m.slides = v(a)),
                m.container.empty().append(m.slides))),
            m.vars.animationLoop &&
              !S &&
              ((m.cloneCount = 2),
              (m.cloneOffset = 1),
              "init" !== e && m.container.find(".clone").remove(),
              m.container
                .append(
                  u
                    .uniqueID(m.slides.first().clone().addClass("clone"))
                    .attr("aria-hidden", "true")
                )
                .prepend(
                  u
                    .uniqueID(m.slides.last().clone().addClass("clone"))
                    .attr("aria-hidden", "true")
                )),
            (m.newSlides = v(m.vars.selector, m)),
            (t = h
              ? m.count - 1 - m.currentSlide + m.cloneOffset
              : m.currentSlide + m.cloneOffset),
            g && !S
              ? (m.container
                  .height(200 * (m.count + m.cloneCount) + "%")
                  .css("position", "absolute")
                  .width("100%"),
                setTimeout(
                  function () {
                    m.newSlides.css({ display: "block" }),
                      m.doMath(),
                      m.viewport.height(m.h),
                      m.setProps(t * m.h, "init");
                  },
                  "init" === e ? 100 : 0
                ))
              : (m.container.width(200 * (m.count + m.cloneCount) + "%"),
                m.setProps(t * m.computedW, "init"),
                setTimeout(
                  function () {
                    m.doMath(),
                      m.vars.rtl
                        ? m.newSlides.css({
                            width: m.computedW,
                            marginRight: m.computedM,
                            float: "right",
                            display: "block",
                          })
                        : m.newSlides.css({
                            width: m.computedW,
                            marginRight: m.computedM,
                            float: "left",
                            display: "block",
                          }),
                      m.vars.smoothHeight && u.smoothHeight();
                  },
                  "init" === e ? 100 : 0
                ))),
          S ||
            m.slides
              .removeClass(s + "active-slide")
              .eq(m.currentSlide)
              .addClass(s + "active-slide"),
          m.vars.init(m);
      }),
      (m.doMath = function () {
        var e = m.slides.first(),
          t = m.vars.itemMargin,
          a = m.vars.minItems,
          n = m.vars.maxItems;
        (m.w = (m.viewport === undefined ? m : m.viewport).width()),
          m.isFirefox && (m.w = m.width()),
          (m.h = e.height()),
          (m.boxPadding = e.outerWidth() - e.width()),
          S
            ? ((m.itemT = m.vars.itemWidth + t),
              (m.itemM = t),
              (m.minW = a ? a * m.itemT : m.w),
              (m.maxW = n ? n * m.itemT - t : m.w),
              (m.itemW =
                m.minW > m.w
                  ? (m.w - t * (a - 1)) / a
                  : m.maxW < m.w
                  ? (m.w - t * (n - 1)) / n
                  : m.vars.itemWidth > m.w
                  ? m.w
                  : m.vars.itemWidth),
              (m.visible = Math.floor(m.w / m.itemW)),
              (m.move =
                0 < m.vars.move && m.vars.move < m.visible
                  ? m.vars.move
                  : m.visible),
              (m.pagingCount = Math.ceil((m.count - m.visible) / m.move + 1)),
              (m.last = m.pagingCount - 1),
              (m.limit =
                1 === m.pagingCount
                  ? 0
                  : m.vars.itemWidth > m.w
                  ? m.itemW * (m.count - 1) + t * (m.count - 1)
                  : (m.itemW + t) * m.count - m.w - t))
            : ((m.itemW = m.w),
              (m.itemM = t),
              (m.pagingCount = m.count),
              (m.last = m.count - 1)),
          (m.computedW = m.itemW - m.boxPadding),
          (m.computedM = m.itemM);
      }),
      (m.update = function (e, t) {
        m.doMath(),
          S ||
            (e < m.currentSlide
              ? (m.currentSlide += 1)
              : e <= m.currentSlide && 0 !== e && --m.currentSlide,
            (m.animatingTo = m.currentSlide)),
          m.vars.controlNav &&
            !m.manualControls &&
            (("add" === t && !S) || m.pagingCount > m.controlNav.length
              ? u.controlNav.update("add")
              : (("remove" === t && !S) ||
                  m.pagingCount < m.controlNav.length) &&
                (S &&
                  m.currentSlide > m.last &&
                  (--m.currentSlide, --m.animatingTo),
                u.controlNav.update("remove", m.last))),
          m.vars.directionNav && u.directionNav.update();
      }),
      (m.addSlide = function (e, t) {
        e = v(e);
        (m.count += 1),
          (m.last = m.count - 1),
          g && h
            ? t !== undefined
              ? m.slides.eq(m.count - t).after(e)
              : m.container.prepend(e)
            : t !== undefined
            ? m.slides.eq(t).before(e)
            : m.container.append(e),
          m.update(t, "add"),
          (m.slides = v(m.vars.selector + ":not(.clone)", m)),
          m.setup(),
          m.vars.added(m);
      }),
      (m.removeSlide = function (e) {
        var t = isNaN(e) ? m.slides.index(v(e)) : e;
        --m.count,
          (m.last = m.count - 1),
          (isNaN(e)
            ? v(e, m.slides)
            : g && h
            ? m.slides.eq(m.last)
            : m.slides.eq(e)
          ).remove(),
          m.doMath(),
          m.update(t, "remove"),
          (m.slides = v(m.vars.selector + ":not(.clone)", m)),
          m.setup(),
          m.vars.removed(m);
      }),
      u.init();
  }),
    v(window)
      .on("blur", function (e) {
        a = !1;
      })
      .on("focus", function (e) {
        a = !0;
      }),
    (v.flexslider.defaults = {
      namespace: "flex-",
      selector: ".slides > li",
      animation: "fade",
      easing: "swing",
      direction: "horizontal",
      reverse: !1,
      animationLoop: !0,
      smoothHeight: !1,
      startAt: 0,
      slideshow: !0,
      slideshowSpeed: 7e3,
      animationSpeed: 600,
      initDelay: 0,
      randomize: !1,
      fadeFirstSlide: !0,
      thumbCaptions: !1,
      pauseOnAction: !0,
      pauseOnHover: !1,
      pauseInvisible: !0,
      useCSS: !0,
      touch: !0,
      video: !1,
      controlNav: !0,
      directionNav: !0,
      prevText: "Previous",
      nextText: "Next",
      keyboard: !0,
      multipleKeyboard: !1,
      mousewheel: !1,
      pausePlay: !1,
      pauseText: "Pause",
      playText: "Play",
      controlsContainer: "",
      manualControls: "",
      customDirectionNav: "",
      sync: "",
      asNavFor: "",
      itemWidth: 0,
      itemMargin: 0,
      minItems: 1,
      maxItems: 0,
      move: 0,
      allowOneSlide: !0,
      isFirefox: !1,
      start: function () {},
      before: function () {},
      after: function () {},
      end: function () {},
      added: function () {},
      removed: function () {},
      init: function () {},
      rtl: !1,
    }),
    (v.fn.flexslider = function (a) {
      if ((a === undefined && (a = {}), "object" == typeof a))
        return this.each(function () {
          var e = v(this),
            t = a.selector ? a.selector : ".slides > li",
            t = e.find(t);
          (1 === t.length && !1 === a.allowOneSlide) || 0 === t.length
            ? (t.fadeIn(400), a.start && a.start(e))
            : e.data("flexslider") === undefined && new v.flexslider(this, a);
        });
      var e = v(this).data("flexslider");
      switch (a) {
        case "play":
          e.play();
          break;
        case "pause":
          e.pause();
          break;
        case "stop":
          e.stop();
          break;
        case "next":
          e.flexAnimate(e.getTarget("next"), !0);
          break;
        case "prev":
        case "previous":
          e.flexAnimate(e.getTarget("prev"), !0);
          break;
        default:
          "number" == typeof a && e.flexAnimate(a, !0);
      }
    });
})(jQuery);
/*! PhotoSwipe - v4.1.3 - 2019-01-08
 * http://photoswipe.com
 * Copyright (c) 2019 Dmitry Semenov; */
!(function (e, t) {
  "function" == typeof define && define.amd
    ? define(t)
    : "object" == typeof exports
    ? (module.exports = t())
    : (e.PhotoSwipe = t());
})(this, function () {
  "use strict";
  return function (m, n, e, t) {
    var f = {
      features: null,
      bind: function (e, t, n, i) {
        var o = (i ? "remove" : "add") + "EventListener";
        t = t.split(" ");
        for (var a = 0; a < t.length; a++) t[a] && e[o](t[a], n, !1);
      },
      isArray: function (e) {
        return e instanceof Array;
      },
      createEl: function (e, t) {
        t = document.createElement(t || "div");
        return e && (t.className = e), t;
      },
      getScrollY: function () {
        var e = window.pageYOffset;
        return e !== undefined ? e : document.documentElement.scrollTop;
      },
      unbind: function (e, t, n) {
        f.bind(e, t, n, !0);
      },
      removeClass: function (e, t) {
        t = new RegExp("(\\s|^)" + t + "(\\s|$)");
        e.className = e.className
          .replace(t, " ")
          .replace(/^\s\s*/, "")
          .replace(/\s\s*$/, "");
      },
      addClass: function (e, t) {
        f.hasClass(e, t) || (e.className += (e.className ? " " : "") + t);
      },
      hasClass: function (e, t) {
        return (
          e.className && new RegExp("(^|\\s)" + t + "(\\s|$)").test(e.className)
        );
      },
      getChildByClass: function (e, t) {
        for (var n = e.firstChild; n; ) {
          if (f.hasClass(n, t)) return n;
          n = n.nextSibling;
        }
      },
      arraySearch: function (e, t, n) {
        for (var i = e.length; i--; ) if (e[i][n] === t) return i;
        return -1;
      },
      extend: function (e, t, n) {
        for (var i in t)
          t.hasOwnProperty(i) && ((n && e.hasOwnProperty(i)) || (e[i] = t[i]));
      },
      easing: {
        sine: {
          out: function (e) {
            return Math.sin(e * (Math.PI / 2));
          },
          inOut: function (e) {
            return -(Math.cos(Math.PI * e) - 1) / 2;
          },
        },
        cubic: {
          out: function (e) {
            return --e * e * e + 1;
          },
        },
      },
      detectFeatures: function () {
        if (f.features) return f.features;
        var e,
          t,
          n = f.createEl().style,
          i = "",
          o = {};
        (o.oldIE = document.all && !document.addEventListener),
          (o.touch = "ontouchstart" in window),
          window.requestAnimationFrame &&
            ((o.raf = window.requestAnimationFrame),
            (o.caf = window.cancelAnimationFrame)),
          (o.pointerEvent =
            !!window.PointerEvent || navigator.msPointerEnabled),
          o.pointerEvent ||
            ((e = navigator.userAgent),
            !/iP(hone|od)/.test(navigator.platform) ||
              ((t = navigator.appVersion.match(/OS (\d+)_(\d+)_?(\d+)?/)) &&
                0 < t.length &&
                1 <= (t = parseInt(t[1], 10)) &&
                t < 8 &&
                (o.isOldIOSPhone = !0)),
            (t = (t = e.match(/Android\s([0-9\.]*)/)) ? t[1] : 0),
            1 <= (t = parseFloat(t)) &&
              (t < 4.4 && (o.isOldAndroid = !0), (o.androidVersion = t)),
            (o.isMobileOpera = /opera mini|opera mobi/i.test(e)));
        for (
          var a,
            r,
            l,
            s = ["transform", "perspective", "animationName"],
            u = ["", "webkit", "Moz", "ms", "O"],
            c = 0;
          c < 4;
          c++
        ) {
          i = u[c];
          for (var d = 0; d < 3; d++)
            (a = s[d]),
              (r = i + (i ? a.charAt(0).toUpperCase() + a.slice(1) : a)),
              !o[a] && r in n && (o[a] = r);
          i &&
            !o.raf &&
            ((i = i.toLowerCase()),
            (o.raf = window[i + "RequestAnimationFrame"]),
            o.raf &&
              (o.caf =
                window[i + "CancelAnimationFrame"] ||
                window[i + "CancelRequestAnimationFrame"]));
        }
        return (
          o.raf ||
            ((l = 0),
            (o.raf = function (e) {
              var t = new Date().getTime(),
                n = Math.max(0, 16 - (t - l)),
                i = window.setTimeout(function () {
                  e(t + n);
                }, n);
              return (l = t + n), i;
            }),
            (o.caf = function (e) {
              clearTimeout(e);
            })),
          (o.svg =
            !!document.createElementNS &&
            !!document.createElementNS("http://www.w3.org/2000/svg", "svg")
              .createSVGRect),
          (f.features = o)
        );
      },
    };
    f.detectFeatures(),
      f.features.oldIE &&
        (f.bind = function (e, t, n, i) {
          t = t.split(" ");
          for (
            var o,
              a = (i ? "detach" : "attach") + "Event",
              r = function () {
                n.handleEvent.call(n);
              },
              l = 0;
            l < t.length;
            l++
          )
            if ((o = t[l]))
              if ("object" == typeof n && n.handleEvent) {
                if (i) {
                  if (!n["oldIE" + o]) return !1;
                } else n["oldIE" + o] = r;
                e[a]("on" + o, n["oldIE" + o]);
              } else e[a]("on" + o, n);
        });
    var h = this,
      y = {
        allowPanToNext: !0,
        spacing: 0.12,
        bgOpacity: 1,
        mouseUsed: !1,
        loop: !0,
        pinchToClose: !0,
        closeOnScroll: !0,
        closeOnVerticalDrag: !0,
        verticalDragRange: 0.75,
        hideAnimationDuration: 333,
        showAnimationDuration: 333,
        showHideOpacity: !1,
        focus: !0,
        escKey: !0,
        arrowKeys: !0,
        mainScrollEndFriction: 0.35,
        panEndFriction: 0.35,
        isClickableElement: function (e) {
          return "A" === e.tagName;
        },
        getDoubleTapZoom: function (e, t) {
          return e || t.initialZoomLevel < 0.7 ? 1 : 1.33;
        },
        maxSpreadZoom: 1.33,
        modal: !0,
        scaleMode: "fit",
      };
    f.extend(y, t);
    var r,
      i,
      o,
      x,
      a,
      l,
      s,
      u,
      c,
      g,
      d,
      p,
      v,
      w,
      b,
      I,
      C,
      D,
      T,
      M,
      S,
      A,
      E,
      O,
      k,
      R,
      P,
      Z,
      F,
      L,
      z,
      _,
      N,
      U,
      H,
      Y,
      W,
      B,
      G,
      X,
      V,
      K,
      q,
      $,
      j,
      J,
      Q,
      ee,
      te,
      ne,
      ie,
      oe,
      ae,
      re,
      le,
      se,
      ue = function () {
        return { x: 0, y: 0 };
      },
      ce = ue(),
      de = ue(),
      pe = ue(),
      me = {},
      fe = 0,
      he = {},
      ye = ue(),
      xe = 0,
      ge = !0,
      ve = [],
      we = {},
      be = !1,
      Ie = function (e, t) {
        f.extend(h, t.publicMethods), ve.push(e);
      },
      Ce = function (e) {
        var t = Ht();
        return t - 1 < e ? e - t : e < 0 ? t + e : e;
      },
      De = {},
      Te = function (e, t) {
        return De[e] || (De[e] = []), De[e].push(t);
      },
      Me = function (e) {
        var t = De[e];
        if (t) {
          var n = Array.prototype.slice.call(arguments);
          n.shift();
          for (var i = 0; i < t.length; i++) t[i].apply(h, n);
        }
      },
      Se = function () {
        return new Date().getTime();
      },
      Ae = function (e) {
        (re = e), (h.bg.style.opacity = e * y.bgOpacity);
      },
      Ee = function (e, t, n, i, o) {
        (!be || (o && o !== h.currItem)) && (i /= (o || h.currItem).fitRatio),
          (e[A] = p + t + "px, " + n + "px" + v + " scale(" + i + ")");
      },
      Oe = function (e) {
        te &&
          (e &&
            (g > h.currItem.fitRatio
              ? be || (jt(h.currItem, !1, !0), (be = !0))
              : be && (jt(h.currItem), (be = !1))),
          Ee(te, pe.x, pe.y, g));
      },
      ke = function (e) {
        e.container &&
          Ee(
            e.container.style,
            e.initialPosition.x,
            e.initialPosition.y,
            e.initialZoomLevel,
            e
          );
      },
      Re = function (e, t) {
        t[A] = p + e + "px, 0px" + v;
      },
      Pe = function (e, t) {
        var n;
        !y.loop &&
          t &&
          ((n = x + (ye.x * fe - e) / ye.x),
          (t = Math.round(e - ct.x)),
          ((n < 0 && 0 < t) || (n >= Ht() - 1 && t < 0)) &&
            (e = ct.x + t * y.mainScrollEndFriction)),
          (ct.x = e),
          Re(e, a);
      },
      Ze = function (e, t) {
        var n = dt[e] - he[e];
        return de[e] + ce[e] + n - (t / d) * n;
      },
      Fe = function (e, t) {
        (e.x = t.x), (e.y = t.y), t.id && (e.id = t.id);
      },
      Le = function (e) {
        (e.x = Math.round(e.x)), (e.y = Math.round(e.y));
      },
      ze = null,
      _e = function () {
        ze &&
          (f.unbind(document, "mousemove", _e),
          f.addClass(m, "pswp--has_mouse"),
          (y.mouseUsed = !0),
          Me("mouseUsed")),
          (ze = setTimeout(function () {
            ze = null;
          }, 100));
      },
      Ne = function (e, t) {
        e = Vt(h.currItem, me, e);
        return t && (ee = e), e;
      },
      Ue = function (e) {
        return (e = e || h.currItem).initialZoomLevel;
      },
      He = function (e) {
        return 0 < (e = e || h.currItem).w ? y.maxSpreadZoom : 1;
      },
      Ye = function (e, t, n, i) {
        return i === h.currItem.initialZoomLevel
          ? ((n[e] = h.currItem.initialPosition[e]), !0)
          : ((n[e] = Ze(e, i)),
            n[e] > t.min[e]
              ? ((n[e] = t.min[e]), !0)
              : n[e] < t.max[e] && ((n[e] = t.max[e]), !0));
      },
      We = function (e) {
        var t = "";
        y.escKey && 27 === e.keyCode
          ? (t = "close")
          : y.arrowKeys &&
            (37 === e.keyCode
              ? (t = "prev")
              : 39 === e.keyCode && (t = "next")),
          t &&
            (e.ctrlKey ||
              e.altKey ||
              e.shiftKey ||
              e.metaKey ||
              (e.preventDefault ? e.preventDefault() : (e.returnValue = !1),
              h[t]()));
      },
      Be = function (e) {
        e && (K || V || ne || W) && (e.preventDefault(), e.stopPropagation());
      },
      Ge = function () {
        h.setScrollOffset(0, f.getScrollY());
      },
      Xe = {},
      Ve = 0,
      Ke = function (e) {
        Xe[e] && (Xe[e].raf && R(Xe[e].raf), Ve--, delete Xe[e]);
      },
      qe = function (e) {
        Xe[e] && Ke(e), Xe[e] || (Ve++, (Xe[e] = {}));
      },
      $e = function () {
        for (var e in Xe) Xe.hasOwnProperty(e) && Ke(e);
      },
      je = function (e, t, n, i, o, a, r) {
        var l,
          s = Se();
        qe(e);
        var u = function () {
          if (Xe[e]) {
            if (((l = Se() - s), i <= l)) return Ke(e), a(n), void (r && r());
            a((n - t) * o(l / i) + t), (Xe[e].raf = k(u));
          }
        };
        u();
      },
      t = {
        shout: Me,
        listen: Te,
        viewportSize: me,
        options: y,
        isMainScrollAnimating: function () {
          return ne;
        },
        getZoomLevel: function () {
          return g;
        },
        getCurrentIndex: function () {
          return x;
        },
        isDragging: function () {
          return G;
        },
        isZooming: function () {
          return J;
        },
        setScrollOffset: function (e, t) {
          (he.x = e), (L = he.y = t), Me("updateScrollOffset", he);
        },
        applyZoomPan: function (e, t, n, i) {
          (pe.x = t), (pe.y = n), (g = e), Oe(i);
        },
        init: function () {
          if (!r && !i) {
            var e;
            (h.framework = f),
              (h.template = m),
              (h.bg = f.getChildByClass(m, "pswp__bg")),
              (P = m.className),
              (r = !0),
              (z = f.detectFeatures()),
              (k = z.raf),
              (R = z.caf),
              (A = z.transform),
              (F = z.oldIE),
              (h.scrollWrap = f.getChildByClass(m, "pswp__scroll-wrap")),
              (h.container = f.getChildByClass(
                h.scrollWrap,
                "pswp__container"
              )),
              (a = h.container.style),
              (h.itemHolders = I =
                [
                  { el: h.container.children[0], wrap: 0, index: -1 },
                  { el: h.container.children[1], wrap: 0, index: -1 },
                  { el: h.container.children[2], wrap: 0, index: -1 },
                ]),
              (I[0].el.style.display = I[2].el.style.display = "none"),
              (function () {
                if (A) {
                  var e = z.perspective && !O;
                  return (
                    (p = "translate" + (e ? "3d(" : "(")),
                    (v = z.perspective ? ", 0px)" : ")")
                  );
                }
                (A = "left"),
                  f.addClass(m, "pswp--ie"),
                  (Re = function (e, t) {
                    t.left = e + "px";
                  }),
                  (ke = function (e) {
                    var t = 1 < e.fitRatio ? 1 : e.fitRatio,
                      n = e.container.style,
                      i = t * e.w,
                      t = t * e.h;
                    (n.width = i + "px"),
                      (n.height = t + "px"),
                      (n.left = e.initialPosition.x + "px"),
                      (n.top = e.initialPosition.y + "px");
                  }),
                  (Oe = function () {
                    var e, t, n, i;
                    te &&
                      ((e = te),
                      (n =
                        (t = 1 < (i = h.currItem).fitRatio ? 1 : i.fitRatio) *
                        i.w),
                      (i = t * i.h),
                      (e.width = n + "px"),
                      (e.height = i + "px"),
                      (e.left = pe.x + "px"),
                      (e.top = pe.y + "px"));
                  });
              })(),
              (c = {
                resize: h.updateSize,
                orientationchange: function () {
                  clearTimeout(_),
                    (_ = setTimeout(function () {
                      me.x !== h.scrollWrap.clientWidth && h.updateSize();
                    }, 500));
                },
                scroll: Ge,
                keydown: We,
                click: Be,
              });
            var t = z.isOldIOSPhone || z.isOldAndroid || z.isMobileOpera;
            for (
              (z.animationName && z.transform && !t) ||
                (y.showAnimationDuration = y.hideAnimationDuration = 0),
                e = 0;
              e < ve.length;
              e++
            )
              h["init" + ve[e]]();
            n && (h.ui = new n(h, f)).init(),
              Me("firstUpdate"),
              (x = x || y.index || 0),
              (isNaN(x) || x < 0 || x >= Ht()) && (x = 0),
              (h.currItem = Ut(x)),
              (z.isOldIOSPhone || z.isOldAndroid) && (ge = !1),
              m.setAttribute("aria-hidden", "false"),
              y.modal &&
                (ge
                  ? (m.style.position = "fixed")
                  : ((m.style.position = "absolute"),
                    (m.style.top = f.getScrollY() + "px"))),
              L === undefined &&
                (Me("initialLayout"), (L = Z = f.getScrollY()));
            t = "pswp--open ";
            for (
              y.mainClass && (t += y.mainClass + " "),
                y.showHideOpacity && (t += "pswp--animate_opacity "),
                t += O ? "pswp--touch" : "pswp--notouch",
                t += z.animationName ? " pswp--css_animation" : "",
                t += z.svg ? " pswp--svg" : "",
                f.addClass(m, t),
                h.updateSize(),
                l = -1,
                xe = null,
                e = 0;
              e < 3;
              e++
            )
              Re((e + l) * ye.x, I[e].el.style);
            F || f.bind(h.scrollWrap, u, h),
              Te("initialZoomInEnd", function () {
                h.setContent(I[0], x - 1),
                  h.setContent(I[2], x + 1),
                  (I[0].el.style.display = I[2].el.style.display = "block"),
                  y.focus && m.focus(),
                  f.bind(document, "keydown", h),
                  z.transform && f.bind(h.scrollWrap, "click", h),
                  y.mouseUsed || f.bind(document, "mousemove", _e),
                  f.bind(window, "resize scroll orientationchange", h),
                  Me("bindEvents");
              }),
              h.setContent(I[1], x),
              h.updateCurrItem(),
              Me("afterInit"),
              ge ||
                (w = setInterval(function () {
                  Ve ||
                    G ||
                    J ||
                    g !== h.currItem.initialZoomLevel ||
                    h.updateSize();
                }, 1e3)),
              f.addClass(m, "pswp--visible");
          }
        },
        close: function () {
          r &&
            ((i = !(r = !1)),
            Me("close"),
            f.unbind(window, "resize scroll orientationchange", h),
            f.unbind(window, "scroll", c.scroll),
            f.unbind(document, "keydown", h),
            f.unbind(document, "mousemove", _e),
            z.transform && f.unbind(h.scrollWrap, "click", h),
            G && f.unbind(window, s, h),
            clearTimeout(_),
            Me("unbindEvents"),
            Yt(h.currItem, null, !0, h.destroy));
        },
        destroy: function () {
          Me("destroy"),
            Lt && clearTimeout(Lt),
            m.setAttribute("aria-hidden", "true"),
            (m.className = P),
            w && clearInterval(w),
            f.unbind(h.scrollWrap, u, h),
            f.unbind(window, "scroll", h),
            ft(),
            $e(),
            (De = null);
        },
        panTo: function (e, t, n) {
          n ||
            (e > ee.min.x ? (e = ee.min.x) : e < ee.max.x && (e = ee.max.x),
            t > ee.min.y ? (t = ee.min.y) : t < ee.max.y && (t = ee.max.y)),
            (pe.x = e),
            (pe.y = t),
            Oe();
        },
        handleEvent: function (e) {
          (e = e || window.event), c[e.type] && c[e.type](e);
        },
        goTo: function (e) {
          var t = (e = Ce(e)) - x;
          (xe = t),
            (x = e),
            (h.currItem = Ut(x)),
            (fe -= t),
            Pe(ye.x * fe),
            $e(),
            (ne = !1),
            h.updateCurrItem();
        },
        next: function () {
          h.goTo(x + 1);
        },
        prev: function () {
          h.goTo(x - 1);
        },
        updateCurrZoomItem: function (e) {
          var t;
          e && Me("beforeChange", 0),
            (te = I[1].el.children.length
              ? ((t = I[1].el.children[0]),
                f.hasClass(t, "pswp__zoom-wrap") ? t.style : null)
              : null),
            (ee = h.currItem.bounds),
            (d = g = h.currItem.initialZoomLevel),
            (pe.x = ee.center.x),
            (pe.y = ee.center.y),
            e && Me("afterChange");
        },
        invalidateCurrItems: function () {
          b = !0;
          for (var e = 0; e < 3; e++) I[e].item && (I[e].item.needsUpdate = !0);
        },
        updateCurrItem: function (e) {
          if (0 !== xe) {
            var t,
              n = Math.abs(xe);
            if (!(e && n < 2)) {
              (h.currItem = Ut(x)),
                (be = !1),
                Me("beforeChange", xe),
                3 <= n && ((l += xe + (0 < xe ? -3 : 3)), (n = 3));
              for (var i = 0; i < n; i++)
                0 < xe
                  ? ((t = I.shift()),
                    (I[2] = t),
                    Re((++l + 2) * ye.x, t.el.style),
                    h.setContent(t, x - n + i + 1 + 1))
                  : ((t = I.pop()),
                    I.unshift(t),
                    Re(--l * ye.x, t.el.style),
                    h.setContent(t, x + n - i - 1 - 1));
              !te ||
                1 !== Math.abs(xe) ||
                ((e = Ut(C)).initialZoomLevel !== g &&
                  (Vt(e, me), jt(e), ke(e))),
                (xe = 0),
                h.updateCurrZoomItem(),
                (C = x),
                Me("afterChange");
            }
          }
        },
        updateSize: function (e) {
          if (!ge && y.modal) {
            var t = f.getScrollY();
            if (
              (L !== t && ((m.style.top = t + "px"), (L = t)),
              !e && we.x === window.innerWidth && we.y === window.innerHeight)
            )
              return;
            (we.x = window.innerWidth),
              (we.y = window.innerHeight),
              (m.style.height = we.y + "px");
          }
          if (
            ((me.x = h.scrollWrap.clientWidth),
            (me.y = h.scrollWrap.clientHeight),
            Ge(),
            (ye.x = me.x + Math.round(me.x * y.spacing)),
            (ye.y = me.y),
            Pe(ye.x * fe),
            Me("beforeResize"),
            l !== undefined)
          ) {
            for (var n, i, o, a = 0; a < 3; a++)
              (n = I[a]),
                Re((a + l) * ye.x, n.el.style),
                (o = x + a - 1),
                y.loop && 2 < Ht() && (o = Ce(o)),
                (i = Ut(o)) && (b || i.needsUpdate || !i.bounds)
                  ? (h.cleanSlide(i),
                    h.setContent(n, o),
                    1 === a && ((h.currItem = i), h.updateCurrZoomItem(!0)),
                    (i.needsUpdate = !1))
                  : -1 === n.index && 0 <= o && h.setContent(n, o),
                i && i.container && (Vt(i, me), jt(i), ke(i));
            b = !1;
          }
          (d = g = h.currItem.initialZoomLevel),
            (ee = h.currItem.bounds) &&
              ((pe.x = ee.center.x), (pe.y = ee.center.y), Oe(!0)),
            Me("resize");
        },
        zoomTo: function (t, e, n, i, o) {
          e &&
            ((d = g),
            (dt.x = Math.abs(e.x) - pe.x),
            (dt.y = Math.abs(e.y) - pe.y),
            Fe(de, pe));
          var e = Ne(t, !1),
            a = {};
          Ye("x", e, a, t), Ye("y", e, a, t);
          var r = g,
            l = pe.x,
            s = pe.y;
          Le(a);
          e = function (e) {
            1 === e
              ? ((g = t), (pe.x = a.x), (pe.y = a.y))
              : ((g = (t - r) * e + r),
                (pe.x = (a.x - l) * e + l),
                (pe.y = (a.y - s) * e + s)),
              o && o(e),
              Oe(1 === e);
          };
          n ? je("customZoomTo", 0, 1, n, i || f.easing.sine.inOut, e) : e(1);
        },
      },
      Je = {},
      Qe = {},
      et = {},
      tt = {},
      nt = {},
      it = [],
      ot = {},
      at = [],
      rt = {},
      lt = 0,
      st = ue(),
      ut = 0,
      ct = ue(),
      dt = ue(),
      pt = ue(),
      mt = function (e, t) {
        return (
          (rt.x = Math.abs(e.x - t.x)),
          (rt.y = Math.abs(e.y - t.y)),
          Math.sqrt(rt.x * rt.x + rt.y * rt.y)
        );
      },
      ft = function () {
        q && (R(q), (q = null));
      },
      ht = function () {
        G && ((q = k(ht)), Et());
      },
      yt = function (e, t) {
        return (
          !(!e || e === document) &&
          !(
            e.getAttribute("class") &&
            -1 < e.getAttribute("class").indexOf("pswp__scroll-wrap")
          ) &&
          (t(e) ? e : yt(e.parentNode, t))
        );
      },
      xt = {},
      gt = function (e, t) {
        return (
          (xt.prevent = !yt(e.target, y.isClickableElement)),
          Me("preventDragEvent", e, t, xt),
          xt.prevent
        );
      },
      vt = function (e, t) {
        return (t.x = e.pageX), (t.y = e.pageY), (t.id = e.identifier), t;
      },
      wt = function (e, t, n) {
        (n.x = 0.5 * (e.x + t.x)), (n.y = 0.5 * (e.y + t.y));
      },
      bt = function () {
        var e = pe.y - h.currItem.initialPosition.y;
        return 1 - Math.abs(e / (me.y / 2));
      },
      It = {},
      Ct = {},
      Dt = [],
      Tt = function (e) {
        for (; 0 < Dt.length; ) Dt.pop();
        return (
          E
            ? ((se = 0),
              it.forEach(function (e) {
                0 === se ? (Dt[0] = e) : 1 === se && (Dt[1] = e), se++;
              }))
            : -1 < e.type.indexOf("touch")
            ? e.touches &&
              0 < e.touches.length &&
              ((Dt[0] = vt(e.touches[0], It)),
              1 < e.touches.length && (Dt[1] = vt(e.touches[1], Ct)))
            : ((It.x = e.pageX), (It.y = e.pageY), (It.id = ""), (Dt[0] = It)),
          Dt
        );
      },
      Mt = function (e, t) {
        var n,
          i,
          o,
          a = pe[e] + t[e],
          r = 0 < t[e],
          l = ct.x + t.x,
          s = ct.x - ot.x,
          u = a > ee.min[e] || a < ee.max[e] ? y.panEndFriction : 1,
          a = pe[e] + t[e] * u;
        if (
          (y.allowPanToNext || g === h.currItem.initialZoomLevel) &&
          (te
            ? "h" !== ie ||
              "x" !== e ||
              V ||
              (r
                ? (a > ee.min[e] &&
                    ((u = y.panEndFriction),
                    ee.min[e],
                    (n = ee.min[e] - de[e])),
                  (n <= 0 || s < 0) && 1 < Ht()
                    ? ((o = l), s < 0 && l > ot.x && (o = ot.x))
                    : ee.min.x !== ee.max.x && (i = a))
                : (a < ee.max[e] &&
                    ((u = y.panEndFriction),
                    ee.max[e],
                    (n = de[e] - ee.max[e])),
                  (n <= 0 || 0 < s) && 1 < Ht()
                    ? ((o = l), 0 < s && l < ot.x && (o = ot.x))
                    : ee.min.x !== ee.max.x && (i = a)))
            : (o = l),
          "x" === e)
        )
          return (
            o !== undefined && (Pe(o, !0), ($ = o !== ot.x)),
            ee.min.x !== ee.max.x &&
              (i !== undefined ? (pe.x = i) : $ || (pe.x += t.x * u)),
            o !== undefined
          );
        ne || $ || (g > h.currItem.fitRatio && (pe[e] += t[e] * u));
      },
      St = function (e) {
        var t;
        ("mousedown" === e.type && 0 < e.button) ||
          (Nt
            ? e.preventDefault()
            : (B && "mousedown" === e.type) ||
              (gt(e, !0) && e.preventDefault(),
              Me("pointerDown"),
              E &&
                ((t = f.arraySearch(it, e.pointerId, "id")) < 0 &&
                  (t = it.length),
                (it[t] = { x: e.pageX, y: e.pageY, id: e.pointerId })),
              (e = (t = Tt(e)).length),
              (j = null),
              $e(),
              (G && 1 !== e) ||
                ((G = oe = !0),
                f.bind(window, s, h),
                (Y = le = ae = W = $ = K = X = V = !1),
                (ie = null),
                Me("firstTouchStart", t),
                Fe(de, pe),
                (ce.x = ce.y = 0),
                Fe(tt, t[0]),
                Fe(nt, tt),
                (ot.x = ye.x * fe),
                (at = [{ x: tt.x, y: tt.y }]),
                (U = N = Se()),
                Ne(g, !0),
                ft(),
                ht()),
              !J &&
                1 < e &&
                !ne &&
                !$ &&
                ((d = g),
                (J = X = !(V = !1)),
                (ce.y = ce.x = 0),
                Fe(de, pe),
                Fe(Je, t[0]),
                Fe(Qe, t[1]),
                wt(Je, Qe, pt),
                (dt.x = Math.abs(pt.x) - pe.x),
                (dt.y = Math.abs(pt.y) - pe.y),
                (Q = mt(Je, Qe)))));
      },
      At = function (e) {
        var t, n;
        e.preventDefault(),
          !E ||
            (-1 < (t = f.arraySearch(it, e.pointerId, "id")) &&
              (((n = it[t]).x = e.pageX), (n.y = e.pageY))),
          G &&
            ((n = Tt(e)),
            ie || K || J
              ? (j = n)
              : ct.x !== ye.x * fe
              ? (ie = "h")
              : ((e = Math.abs(n[0].x - tt.x) - Math.abs(n[0].y - tt.y)),
                10 <= Math.abs(e) && ((ie = 0 < e ? "h" : "v"), (j = n))));
      },
      Et = function () {
        if (j) {
          var e,
            t,
            n,
            i,
            o,
            a = j.length;
          if (0 !== a)
            if (
              (Fe(Je, j[0]),
              (et.x = Je.x - tt.x),
              (et.y = Je.y - tt.y),
              J && 1 < a)
            )
              (tt.x = Je.x),
                (tt.y = Je.y),
                (et.x ||
                  et.y ||
                  ((i = j[1]), (o = Qe), i.x !== o.x || i.y !== o.y)) &&
                  (Fe(Qe, j[1]),
                  V || ((V = !0), Me("zoomGestureStarted")),
                  (t = mt(Je, Qe)),
                  (n = Zt(t)) >
                    h.currItem.initialZoomLevel +
                      h.currItem.initialZoomLevel / 15 && (le = !0),
                  (e = 1),
                  (a = Ue()),
                  (i = He()),
                  n < a
                    ? y.pinchToClose && !le && d <= h.currItem.initialZoomLevel
                      ? (Ae((o = 1 - (a - n) / (a / 1.2))),
                        Me("onPinchClose", o),
                        (ae = !0))
                      : (1 < (e = (a - n) / a) && (e = 1),
                        (n = a - e * (a / 3)))
                    : i < n &&
                      (1 < (e = (n - i) / (6 * a)) && (e = 1), (n = i + e * a)),
                  e < 0 && (e = 0),
                  wt(Je, Qe, st),
                  (ce.x += st.x - pt.x),
                  (ce.y += st.y - pt.y),
                  Fe(pt, st),
                  (pe.x = Ze("x", n)),
                  (pe.y = Ze("y", n)),
                  (Y = g < n),
                  (g = n),
                  Oe());
            else if (
              ie &&
              (oe &&
                ((oe = !1),
                10 <= Math.abs(et.x) && (et.x -= j[0].x - nt.x),
                10 <= Math.abs(et.y) && (et.y -= j[0].y - nt.y)),
              (tt.x = Je.x),
              (tt.y = Je.y),
              0 !== et.x || 0 !== et.y)
            ) {
              if (
                "v" === ie &&
                y.closeOnVerticalDrag &&
                "fit" === y.scaleMode &&
                g === h.currItem.initialZoomLevel
              ) {
                (ce.y += et.y), (pe.y += et.y);
                var r = bt();
                return (W = !0), Me("onVerticalDrag", r), Ae(r), void Oe();
              }
              (e = Se()),
                (t = Je.x),
                (n = Je.y),
                50 < e - U &&
                  (((r = 2 < at.length ? at.shift() : {}).x = t),
                  (r.y = n),
                  at.push(r),
                  (U = e)),
                (K = !0),
                (ee = h.currItem.bounds),
                Mt("x", et) || (Mt("y", et), Le(pe), Oe());
            }
        }
      },
      Ot = function (e) {
        if (z.isOldAndroid) {
          if (B && "mouseup" === e.type) return;
          -1 < e.type.indexOf("touch") &&
            (clearTimeout(B),
            (B = setTimeout(function () {
              B = 0;
            }, 600)));
        }
        Me("pointerUp"),
          gt(e, !1) && e.preventDefault(),
          !E ||
            (-1 < (n = f.arraySearch(it, e.pointerId, "id")) &&
              ((a = it.splice(n, 1)[0]),
              navigator.msPointerEnabled
                ? ((a.type = { 4: "mouse", 2: "touch", 3: "pen" }[
                    e.pointerType
                  ]),
                  a.type || (a.type = e.pointerType || "mouse"))
                : (a.type = e.pointerType || "mouse")));
        var t = Tt(e),
          n = t.length;
        if (("mouseup" === e.type && (n = 0), 2 === n)) return !(j = null);
        1 === n && Fe(nt, t[0]),
          0 !== n ||
            ie ||
            ne ||
            (a ||
              ("mouseup" === e.type
                ? (a = { x: e.pageX, y: e.pageY, type: "mouse" })
                : e.changedTouches &&
                  e.changedTouches[0] &&
                  (a = {
                    x: e.changedTouches[0].pageX,
                    y: e.changedTouches[0].pageY,
                    type: "touch",
                  })),
            Me("touchRelease", e, a));
        var i,
          o,
          a = -1;
        if (
          (0 === n &&
            ((G = !1),
            f.unbind(window, s, h),
            ft(),
            J ? (a = 0) : -1 !== ut && (a = Se() - ut)),
          (ut = 1 === n ? Se() : -1),
          (a = -1 !== a && a < 150 ? "zoom" : "swipe"),
          J &&
            n < 2 &&
            ((J = !1),
            1 === n && (a = "zoomPointerUp"),
            Me("zoomGestureEnded")),
          (j = null),
          K || V || ne || W)
        )
          if (($e(), (H = H || kt()).calculateSwipeSpeed("x"), W)) {
            bt() < y.verticalDragRange
              ? h.close()
              : ((i = pe.y),
                (o = re),
                je("verticalDrag", 0, 1, 300, f.easing.cubic.out, function (e) {
                  (pe.y = (h.currItem.initialPosition.y - i) * e + i),
                    Ae((1 - o) * e + o),
                    Oe();
                }),
                Me("onVerticalDrag", 1));
          } else {
            if (($ || ne) && 0 === n) {
              if (Pt(a, H)) return;
              a = "zoomPointerUp";
            }
            ne ||
              ("swipe" === a ? !$ && g > h.currItem.fitRatio && Rt(H) : Ft());
          }
      },
      kt = function () {
        var t,
          n,
          i = {
            lastFlickOffset: {},
            lastFlickDist: {},
            lastFlickSpeed: {},
            slowDownRatio: {},
            slowDownRatioReverse: {},
            speedDecelerationRatio: {},
            speedDecelerationRatioAbs: {},
            distanceOffset: {},
            backAnimDestination: {},
            backAnimStarted: {},
            calculateSwipeSpeed: function (e) {
              (n =
                1 < at.length
                  ? ((t = Se() - U + 50), at[at.length - 2][e])
                  : ((t = Se() - N), nt[e])),
                (i.lastFlickOffset[e] = tt[e] - n),
                (i.lastFlickDist[e] = Math.abs(i.lastFlickOffset[e])),
                20 < i.lastFlickDist[e]
                  ? (i.lastFlickSpeed[e] = i.lastFlickOffset[e] / t)
                  : (i.lastFlickSpeed[e] = 0),
                Math.abs(i.lastFlickSpeed[e]) < 0.1 &&
                  (i.lastFlickSpeed[e] = 0),
                (i.slowDownRatio[e] = 0.95),
                (i.slowDownRatioReverse[e] = 1 - i.slowDownRatio[e]),
                (i.speedDecelerationRatio[e] = 1);
            },
            calculateOverBoundsAnimOffset: function (t, e) {
              i.backAnimStarted[t] ||
                (pe[t] > ee.min[t]
                  ? (i.backAnimDestination[t] = ee.min[t])
                  : pe[t] < ee.max[t] && (i.backAnimDestination[t] = ee.max[t]),
                i.backAnimDestination[t] !== undefined &&
                  ((i.slowDownRatio[t] = 0.7),
                  (i.slowDownRatioReverse[t] = 1 - i.slowDownRatio[t]),
                  i.speedDecelerationRatioAbs[t] < 0.05 &&
                    ((i.lastFlickSpeed[t] = 0),
                    (i.backAnimStarted[t] = !0),
                    je(
                      "bounceZoomPan" + t,
                      pe[t],
                      i.backAnimDestination[t],
                      e || 300,
                      f.easing.sine.out,
                      function (e) {
                        (pe[t] = e), Oe();
                      }
                    ))));
            },
            calculateAnimOffset: function (e) {
              i.backAnimStarted[e] ||
                ((i.speedDecelerationRatio[e] =
                  i.speedDecelerationRatio[e] *
                  (i.slowDownRatio[e] +
                    i.slowDownRatioReverse[e] -
                    (i.slowDownRatioReverse[e] * i.timeDiff) / 10)),
                (i.speedDecelerationRatioAbs[e] = Math.abs(
                  i.lastFlickSpeed[e] * i.speedDecelerationRatio[e]
                )),
                (i.distanceOffset[e] =
                  i.lastFlickSpeed[e] *
                  i.speedDecelerationRatio[e] *
                  i.timeDiff),
                (pe[e] += i.distanceOffset[e]));
            },
            panAnimLoop: function () {
              Xe.zoomPan &&
                ((Xe.zoomPan.raf = k(i.panAnimLoop)),
                (i.now = Se()),
                (i.timeDiff = i.now - i.lastNow),
                (i.lastNow = i.now),
                i.calculateAnimOffset("x"),
                i.calculateAnimOffset("y"),
                Oe(),
                i.calculateOverBoundsAnimOffset("x"),
                i.calculateOverBoundsAnimOffset("y"),
                i.speedDecelerationRatioAbs.x < 0.05 &&
                  i.speedDecelerationRatioAbs.y < 0.05 &&
                  ((pe.x = Math.round(pe.x)),
                  (pe.y = Math.round(pe.y)),
                  Oe(),
                  Ke("zoomPan")));
            },
          };
        return i;
      },
      Rt = function (e) {
        if (
          (e.calculateSwipeSpeed("y"),
          (ee = h.currItem.bounds),
          (e.backAnimDestination = {}),
          (e.backAnimStarted = {}),
          Math.abs(e.lastFlickSpeed.x) <= 0.05 &&
            Math.abs(e.lastFlickSpeed.y) <= 0.05)
        )
          return (
            (e.speedDecelerationRatioAbs.x = e.speedDecelerationRatioAbs.y = 0),
            e.calculateOverBoundsAnimOffset("x"),
            e.calculateOverBoundsAnimOffset("y"),
            !0
          );
        qe("zoomPan"), (e.lastNow = Se()), e.panAnimLoop();
      },
      Pt = function (e, t) {
        var n, i;
        ne || (lt = x),
          "swipe" === e &&
            ((i = tt.x - nt.x),
            (e = t.lastFlickDist.x < 10),
            30 < i && (e || 20 < t.lastFlickOffset.x)
              ? (a = -1)
              : i < -30 && (e || t.lastFlickOffset.x < -20) && (a = 1)),
          a &&
            ((x += a) < 0
              ? ((x = y.loop ? Ht() - 1 : 0), (o = !0))
              : x >= Ht() && ((x = y.loop ? 0 : Ht() - 1), (o = !0)),
            (o && !y.loop) || ((xe += a), (fe -= a), (n = !0)));
        var o = ye.x * fe,
          a = Math.abs(o - ct.x),
          r =
            n || o > ct.x == 0 < t.lastFlickSpeed.x
              ? ((r =
                  0 < Math.abs(t.lastFlickSpeed.x)
                    ? a / Math.abs(t.lastFlickSpeed.x)
                    : 333),
                (r = Math.min(r, 400)),
                Math.max(r, 250))
              : 333;
        return (
          lt === x && (n = !1),
          (ne = !0),
          Me("mainScrollAnimStart"),
          je("mainScroll", ct.x, o, r, f.easing.cubic.out, Pe, function () {
            $e(),
              (ne = !1),
              (lt = -1),
              (!n && lt === x) || h.updateCurrItem(),
              Me("mainScrollAnimComplete");
          }),
          n && h.updateCurrItem(!0),
          n
        );
      },
      Zt = function (e) {
        return (1 / Q) * e * d;
      },
      Ft = function () {
        var e = g,
          t = Ue(),
          n = He();
        g < t ? (e = t) : n < g && (e = n);
        var i,
          o = re;
        return (
          ae && !Y && !le && g < t
            ? h.close()
            : (ae &&
                (i = function (e) {
                  Ae((1 - o) * e + o);
                }),
              h.zoomTo(e, 0, 200, f.easing.cubic.out, i)),
          !0
        );
      };
    Ie("Gestures", {
      publicMethods: {
        initGestures: function () {
          var e = function (e, t, n, i, o) {
            (D = e + t), (T = e + n), (M = e + i), (S = o ? e + o : "");
          };
          (E = z.pointerEvent) && z.touch && (z.touch = !1),
            E
              ? navigator.msPointerEnabled
                ? e("MSPointer", "Down", "Move", "Up", "Cancel")
                : e("pointer", "down", "move", "up", "cancel")
              : z.touch
              ? (e("touch", "start", "move", "end", "cancel"), (O = !0))
              : e("mouse", "down", "move", "up"),
            (s = T + " " + M + " " + S),
            (u = D),
            E &&
              !O &&
              (O =
                1 < navigator.maxTouchPoints || 1 < navigator.msMaxTouchPoints),
            (h.likelyTouchDevice = O),
            (c[D] = St),
            (c[T] = At),
            (c[M] = Ot),
            S && (c[S] = c[M]),
            z.touch &&
              ((u += " mousedown"),
              (s += " mousemove mouseup"),
              (c.mousedown = c[D]),
              (c.mousemove = c[T]),
              (c.mouseup = c[M])),
            O || (y.allowPanToNext = !1);
        },
      },
    });
    var Lt,
      zt,
      _t,
      Nt,
      Ut,
      Ht,
      Yt = function (r, e, l, t) {
        var s;
        Lt && clearTimeout(Lt),
          (_t = Nt = !0),
          r.initialLayout
            ? ((s = r.initialLayout), (r.initialLayout = null))
            : (s = y.getThumbBoundsFn && y.getThumbBoundsFn(x));
        var u = l ? y.hideAnimationDuration : y.showAnimationDuration,
          c = function () {
            Ke("initialZoom"),
              l
                ? (h.template.removeAttribute("style"),
                  h.bg.removeAttribute("style"))
                : (Ae(1),
                  e && (e.style.display = "block"),
                  f.addClass(m, "pswp--animated-in"),
                  Me("initialZoom" + (l ? "OutEnd" : "InEnd"))),
              t && t(),
              (Nt = !1);
          };
        if (!u || !s || s.x === undefined)
          return (
            Me("initialZoom" + (l ? "Out" : "In")),
            (g = r.initialZoomLevel),
            Fe(pe, r.initialPosition),
            Oe(),
            (m.style.opacity = l ? 0 : 1),
            Ae(1),
            void (u
              ? setTimeout(function () {
                  c();
                }, u)
              : c())
          );
        var d, p;
        (d = o),
          (p = !h.currItem.src || h.currItem.loadError || y.showHideOpacity),
          r.miniImg && (r.miniImg.style.webkitBackfaceVisibility = "hidden"),
          l ||
            ((g = s.w / r.w),
            (pe.x = s.x),
            (pe.y = s.y - Z),
            (h[p ? "template" : "bg"].style.opacity = 0.001),
            Oe()),
          qe("initialZoom"),
          l && !d && f.removeClass(m, "pswp--animated-in"),
          p &&
            (l
              ? f[(d ? "remove" : "add") + "Class"](m, "pswp--animate_opacity")
              : setTimeout(function () {
                  f.addClass(m, "pswp--animate_opacity");
                }, 30)),
          (Lt = setTimeout(
            function () {
              var t, n, i, o, a, e;
              Me("initialZoom" + (l ? "Out" : "In")),
                l
                  ? ((t = s.w / r.w),
                    (n = pe.x),
                    (i = pe.y),
                    (o = g),
                    (a = re),
                    (e = function (e) {
                      1 === e
                        ? ((g = t), (pe.x = s.x), (pe.y = s.y - L))
                        : ((g = (t - o) * e + o),
                          (pe.x = (s.x - n) * e + n),
                          (pe.y = (s.y - L - i) * e + i)),
                        Oe(),
                        p ? (m.style.opacity = 1 - e) : Ae(a - e * a);
                    }),
                    d
                      ? je("initialZoom", 0, 1, u, f.easing.cubic.out, e, c)
                      : (e(1), (Lt = setTimeout(c, u + 20))))
                  : ((g = r.initialZoomLevel),
                    Fe(pe, r.initialPosition),
                    Oe(),
                    Ae(1),
                    p ? (m.style.opacity = 1) : Ae(1),
                    (Lt = setTimeout(c, u + 20)));
            },
            l ? 25 : 90
          ));
      },
      Wt = {},
      Bt = [],
      Gt = {
        index: 0,
        errorMsg:
          '<div class="pswp__error-msg"><a href="%url%" target="_blank">The image</a> could not be loaded.</div>',
        forceProgressiveLoading: !1,
        preload: [1, 1],
        getNumItemsFn: function () {
          return zt.length;
        },
      },
      Xt = function () {
        return {
          center: { x: 0, y: 0 },
          max: { x: 0, y: 0 },
          min: { x: 0, y: 0 },
        };
      },
      Vt = function (e, t, n) {
        if (!e.src || e.loadError)
          return (
            (e.w = e.h = 0),
            (e.initialZoomLevel = e.fitRatio = 1),
            (e.bounds = Xt()),
            (e.initialPosition = e.bounds.center),
            e.bounds
          );
        var i,
          o,
          a,
          r = !n;
        return (
          r &&
            (e.vGap || (e.vGap = { top: 0, bottom: 0 }),
            Me("parseVerticalMargin", e)),
          (Wt.x = t.x),
          (Wt.y = t.y - e.vGap.top - e.vGap.bottom),
          r &&
            ((i = Wt.x / e.w),
            (o = Wt.y / e.h),
            (e.fitRatio = i < o ? i : o),
            "orig" === (a = y.scaleMode)
              ? (n = 1)
              : "fit" === a && (n = e.fitRatio),
            1 < n && (n = 1),
            (e.initialZoomLevel = n),
            e.bounds || (e.bounds = Xt())),
          n
            ? ((i = (t = e).w * n),
              (o = e.h * n),
              ((a = t.bounds).center.x = Math.round((Wt.x - i) / 2)),
              (a.center.y = Math.round((Wt.y - o) / 2) + t.vGap.top),
              (a.max.x = i > Wt.x ? Math.round(Wt.x - i) : a.center.x),
              (a.max.y =
                o > Wt.y ? Math.round(Wt.y - o) + t.vGap.top : a.center.y),
              (a.min.x = i > Wt.x ? 0 : a.center.x),
              (a.min.y = o > Wt.y ? t.vGap.top : a.center.y),
              r &&
                n === e.initialZoomLevel &&
                (e.initialPosition = e.bounds.center),
              e.bounds)
            : void 0
        );
      },
      Kt = function (e, t, n, i, o, a) {
        t.loadError ||
          (i &&
            ((t.imageAppended = !0),
            jt(t, i, t === h.currItem && be),
            n.appendChild(i),
            a &&
              setTimeout(function () {
                t &&
                  t.loaded &&
                  t.placeholder &&
                  ((t.placeholder.style.display = "none"),
                  (t.placeholder = null));
              }, 500)));
      },
      qt = function (e) {
        (e.loading = !0), (e.loaded = !1);
        var t = (e.img = f.createEl("pswp__img", "img")),
          n = function () {
            (e.loading = !1),
              (e.loaded = !0),
              e.loadComplete ? e.loadComplete(e) : (e.img = null),
              (t.onload = t.onerror = null),
              (t = null);
          };
        return (
          (t.onload = n),
          (t.onerror = function () {
            (e.loadError = !0), n();
          }),
          (t.src = e.src),
          (t.alt = e.alt || ""),
          t
        );
      },
      $t = function (e, t) {
        if (e.src && e.loadError && e.container)
          return (
            t && (e.container.innerHTML = ""),
            (e.container.innerHTML = y.errorMsg.replace("%url%", e.src)),
            !0
          );
      },
      jt = function (e, t, n) {
        var i;
        e.src &&
          ((t = t || e.container.lastChild),
          (i = n ? e.w : Math.round(e.w * e.fitRatio)),
          (n = n ? e.h : Math.round(e.h * e.fitRatio)),
          e.placeholder &&
            !e.loaded &&
            ((e.placeholder.style.width = i + "px"),
            (e.placeholder.style.height = n + "px")),
          (t.style.width = i + "px"),
          (t.style.height = n + "px"));
      },
      Jt = function () {
        if (Bt.length) {
          for (var e, t = 0; t < Bt.length; t++)
            (e = Bt[t]).holder.index === e.index &&
              Kt(e.index, e.item, e.baseDiv, e.img, 0, e.clearPlaceholder);
          Bt = [];
        }
      };
    Ie("Controller", {
      publicMethods: {
        lazyLoadItem: function (e) {
          e = Ce(e);
          var t = Ut(e);
          t &&
            ((!t.loaded && !t.loading) || b) &&
            (Me("gettingData", e, t), t.src && qt(t));
        },
        initController: function () {
          f.extend(y, Gt, !0),
            (h.items = zt = e),
            (Ut = h.getItemAt),
            (Ht = y.getNumItemsFn),
            y.loop,
            Ht() < 3 && (y.loop = !1),
            Te("beforeChange", function (e) {
              for (
                var t = y.preload,
                  n = null === e || 0 <= e,
                  i = Math.min(t[0], Ht()),
                  o = Math.min(t[1], Ht()),
                  a = 1;
                a <= (n ? o : i);
                a++
              )
                h.lazyLoadItem(x + a);
              for (a = 1; a <= (n ? i : o); a++) h.lazyLoadItem(x - a);
            }),
            Te("initialLayout", function () {
              h.currItem.initialLayout =
                y.getThumbBoundsFn && y.getThumbBoundsFn(x);
            }),
            Te("mainScrollAnimComplete", Jt),
            Te("initialZoomInEnd", Jt),
            Te("destroy", function () {
              for (var e, t = 0; t < zt.length; t++)
                (e = zt[t]).container && (e.container = null),
                  e.placeholder && (e.placeholder = null),
                  e.img && (e.img = null),
                  e.preloader && (e.preloader = null),
                  e.loadError && (e.loaded = e.loadError = !1);
              Bt = null;
            });
        },
        getItemAt: function (e) {
          return 0 <= e && zt[e] !== undefined && zt[e];
        },
        allowProgressiveImg: function () {
          return (
            y.forceProgressiveLoading ||
            !O ||
            y.mouseUsed ||
            1200 < screen.width
          );
        },
        setContent: function (t, n) {
          y.loop && (n = Ce(n));
          var e = h.getItemAt(t.index);
          e && (e.container = null);
          var i,
            o,
            a = h.getItemAt(n);
          a
            ? (Me("gettingData", n, a),
              (t.index = n),
              (o = (t.item = a).container = f.createEl("pswp__zoom-wrap")),
              !a.src &&
                a.html &&
                (a.html.tagName
                  ? o.appendChild(a.html)
                  : (o.innerHTML = a.html)),
              $t(a),
              Vt(a, me),
              !a.src || a.loadError || a.loaded
                ? a.src &&
                  !a.loadError &&
                  (((i = f.createEl("pswp__img", "img")).style.opacity = 1),
                  (i.src = a.src),
                  jt(a, i),
                  Kt(0, a, o, i))
                : ((a.loadComplete = function (e) {
                    if (r) {
                      if (t && t.index === n) {
                        if ($t(e, !0))
                          return (
                            (e.loadComplete = e.img = null),
                            Vt(e, me),
                            ke(e),
                            void (t.index === x && h.updateCurrZoomItem())
                          );
                        e.imageAppended
                          ? !Nt &&
                            e.placeholder &&
                            ((e.placeholder.style.display = "none"),
                            (e.placeholder = null))
                          : z.transform && (ne || Nt)
                          ? Bt.push({
                              item: e,
                              baseDiv: o,
                              img: e.img,
                              index: n,
                              holder: t,
                              clearPlaceholder: !0,
                            })
                          : Kt(0, e, o, e.img, 0, !0);
                      }
                      (e.loadComplete = null),
                        (e.img = null),
                        Me("imageLoadComplete", n, e);
                    }
                  }),
                  f.features.transform &&
                    ((e = "pswp__img pswp__img--placeholder"),
                    (e += a.msrc ? "" : " pswp__img--placeholder--blank"),
                    (e = f.createEl(e, a.msrc ? "img" : "")),
                    a.msrc && (e.src = a.msrc),
                    jt(a, e),
                    o.appendChild(e),
                    (a.placeholder = e)),
                  a.loading || qt(a),
                  h.allowProgressiveImg() &&
                    (!_t && z.transform
                      ? Bt.push({
                          item: a,
                          baseDiv: o,
                          img: a.img,
                          index: n,
                          holder: t,
                        })
                      : Kt(0, a, o, a.img, 0, !0))),
              _t || n !== x ? ke(a) : ((te = o.style), Yt(a, i || a.img)),
              (t.el.innerHTML = ""),
              t.el.appendChild(o))
            : (t.el.innerHTML = "");
        },
        cleanSlide: function (e) {
          e.img && (e.img.onload = e.img.onerror = null),
            (e.loaded = e.loading = e.img = e.imageAppended = !1);
        },
      },
    });
    var Qt,
      en,
      tn = {},
      nn = function (e, t, n) {
        var i = document.createEvent("CustomEvent"),
          n = {
            origEvent: e,
            target: e.target,
            releasePoint: t,
            pointerType: n || "touch",
          };
        i.initCustomEvent("pswpTap", !0, !0, n), e.target.dispatchEvent(i);
      };
    Ie("Tap", {
      publicMethods: {
        initTap: function () {
          Te("firstTouchStart", h.onTapStart),
            Te("touchRelease", h.onTapRelease),
            Te("destroy", function () {
              (tn = {}), (Qt = null);
            });
        },
        onTapStart: function (e) {
          1 < e.length && (clearTimeout(Qt), (Qt = null));
        },
        onTapRelease: function (e, t) {
          var n, i, o;
          t &&
            (K ||
              X ||
              Ve ||
              ((n = t),
              Qt &&
              (clearTimeout(Qt),
              (Qt = null),
              (i = n),
              (o = tn),
              Math.abs(i.x - o.x) < 25 && Math.abs(i.y - o.y) < 25)
                ? Me("doubleTap", n)
                : "mouse" !== t.type
                ? "BUTTON" === e.target.tagName.toUpperCase() ||
                  f.hasClass(e.target, "pswp__single-tap")
                  ? nn(e, t)
                  : (Fe(tn, n),
                    (Qt = setTimeout(function () {
                      nn(e, t), (Qt = null);
                    }, 300)))
                : nn(e, t, "mouse")));
        },
      },
    }),
      Ie("DesktopZoom", {
        publicMethods: {
          initDesktopZoom: function () {
            F ||
              (O
                ? Te("mouseUsed", function () {
                    h.setupDesktopZoom();
                  })
                : h.setupDesktopZoom(!0));
          },
          setupDesktopZoom: function (e) {
            en = {};
            var t = "wheel mousewheel DOMMouseScroll";
            Te("bindEvents", function () {
              f.bind(m, t, h.handleMouseWheel);
            }),
              Te("unbindEvents", function () {
                en && f.unbind(m, t, h.handleMouseWheel);
              }),
              (h.mouseZoomedIn = !1);
            var n,
              i = function () {
                h.mouseZoomedIn &&
                  (f.removeClass(m, "pswp--zoomed-in"), (h.mouseZoomedIn = !1)),
                  g < 1
                    ? f.addClass(m, "pswp--zoom-allowed")
                    : f.removeClass(m, "pswp--zoom-allowed"),
                  o();
              },
              o = function () {
                n && (f.removeClass(m, "pswp--dragging"), (n = !1));
              };
            Te("resize", i),
              Te("afterChange", i),
              Te("pointerDown", function () {
                h.mouseZoomedIn && ((n = !0), f.addClass(m, "pswp--dragging"));
              }),
              Te("pointerUp", o),
              e || i();
          },
          handleMouseWheel: function (e) {
            if (g <= h.currItem.fitRatio)
              return (
                y.modal &&
                  (!y.closeOnScroll || Ve || G
                    ? e.preventDefault()
                    : A && 2 < Math.abs(e.deltaY) && ((o = !0), h.close())),
                !0
              );
            if ((e.stopPropagation(), (en.x = 0), "deltaX" in e))
              1 === e.deltaMode
                ? ((en.x = 18 * e.deltaX), (en.y = 18 * e.deltaY))
                : ((en.x = e.deltaX), (en.y = e.deltaY));
            else if ("wheelDelta" in e)
              e.wheelDeltaX && (en.x = -0.16 * e.wheelDeltaX),
                e.wheelDeltaY
                  ? (en.y = -0.16 * e.wheelDeltaY)
                  : (en.y = -0.16 * e.wheelDelta);
            else {
              if (!("detail" in e)) return;
              en.y = e.detail;
            }
            Ne(g, !0);
            var t = pe.x - en.x,
              n = pe.y - en.y;
            (y.modal ||
              (t <= ee.min.x &&
                t >= ee.max.x &&
                n <= ee.min.y &&
                n >= ee.max.y)) &&
              e.preventDefault(),
              h.panTo(t, n);
          },
          toggleDesktopZoom: function (e) {
            e = e || { x: me.x / 2 + he.x, y: me.y / 2 + he.y };
            var t = y.getDoubleTapZoom(!0, h.currItem),
              n = g === t;
            (h.mouseZoomedIn = !n),
              h.zoomTo(n ? h.currItem.initialZoomLevel : t, e, 333),
              f[(n ? "remove" : "add") + "Class"](m, "pswp--zoomed-in");
          },
        },
      });
    var on,
      an,
      rn,
      ln,
      sn,
      un,
      cn,
      dn,
      pn,
      mn,
      fn,
      hn,
      yn = { history: !0, galleryUID: 1 },
      xn = function () {
        return fn.hash.substring(1);
      },
      gn = function () {
        on && clearTimeout(on), rn && clearTimeout(rn);
      },
      vn = function () {
        var e = xn(),
          t = {};
        if (e.length < 5) return t;
        var n,
          i = e.split("&");
        for (a = 0; a < i.length; a++) {
          i[a] && ((n = i[a].split("=")).length < 2 || (t[n[0]] = n[1]));
        }
        if (y.galleryPIDs) {
          for (var o = t.pid, a = (t.pid = 0); a < zt.length; a++)
            if (zt[a].pid === o) {
              t.pid = a;
              break;
            }
        } else t.pid = parseInt(t.pid, 10) - 1;
        return t.pid < 0 && (t.pid = 0), t;
      },
      wn = function () {
        var e, t;
        rn && clearTimeout(rn),
          Ve || G
            ? (rn = setTimeout(wn, 500))
            : (ln ? clearTimeout(an) : (ln = !0),
              (t = x + 1),
              (e = Ut(x)).hasOwnProperty("pid") && (t = e.pid),
              (e = cn + "&gid=" + y.galleryUID + "&pid=" + t),
              dn || (-1 === fn.hash.indexOf(e) && (mn = !0)),
              (t = fn.href.split("#")[0] + "#" + e),
              hn
                ? "#" + e !== window.location.hash &&
                  history[dn ? "replaceState" : "pushState"](
                    "",
                    document.title,
                    t
                  )
                : dn
                ? fn.replace(t)
                : (fn.hash = e),
              (dn = !0),
              (an = setTimeout(function () {
                ln = !1;
              }, 60)));
      };
    Ie("History", {
      publicMethods: {
        initHistory: function () {
          var e, t;
          f.extend(y, yn, !0),
            y.history &&
              ((fn = window.location),
              (dn = pn = mn = !1),
              (cn = xn()),
              (hn = "pushState" in history),
              -1 < cn.indexOf("gid=") &&
                (cn = (cn = cn.split("&gid=")[0]).split("?gid=")[0]),
              Te("afterChange", h.updateURL),
              Te("unbindEvents", function () {
                f.unbind(window, "hashchange", h.onHashChange);
              }),
              (e = function () {
                (un = !0),
                  pn ||
                    (mn
                      ? history.back()
                      : cn
                      ? (fn.hash = cn)
                      : hn
                      ? history.pushState(
                          "",
                          document.title,
                          fn.pathname + fn.search
                        )
                      : (fn.hash = "")),
                  gn();
              }),
              Te("unbindEvents", function () {
                o && e();
              }),
              Te("destroy", function () {
                un || e();
              }),
              Te("firstUpdate", function () {
                x = vn().pid;
              }),
              -1 < (t = cn.indexOf("pid=")) &&
                "&" === (cn = cn.substring(0, t)).slice(-1) &&
                (cn = cn.slice(0, -1)),
              setTimeout(function () {
                r && f.bind(window, "hashchange", h.onHashChange);
              }, 40));
        },
        onHashChange: function () {
          if (xn() === cn) return (pn = !0), void h.close();
          ln || ((sn = !0), h.goTo(vn().pid), (sn = !1));
        },
        updateURL: function () {
          gn(), sn || (dn ? (on = setTimeout(wn, 800)) : wn());
        },
      },
    }),
      f.extend(h, t);
  };
});
/*! PhotoSwipe Default UI - 4.1.3 - 2019-01-08
 * http://photoswipe.com
 * Copyright (c) 2019 Dmitry Semenov; */
!(function (e, t) {
  "function" == typeof define && define.amd
    ? define(t)
    : "object" == typeof exports
    ? (module.exports = t())
    : (e.PhotoSwipeUI_Default = t());
})(this, function () {
  "use strict";
  return function (o, s) {
    var n,
      a,
      l,
      r,
      t,
      i,
      u,
      c,
      p,
      e,
      d,
      m,
      f,
      h,
      w,
      g,
      b,
      v,
      _ = this,
      C = !1,
      T = !0,
      I = !0,
      E = {
        barsSize: { top: 44, bottom: "auto" },
        closeElClasses: ["item", "caption", "zoom-wrap", "ui", "top-bar"],
        timeToIdle: 4e3,
        timeToIdleOutside: 1e3,
        loadingIndicatorDelay: 1e3,
        addCaptionHTMLFn: function (e, t) {
          return e.title
            ? ((t.children[0].innerHTML = e.title), !0)
            : ((t.children[0].innerHTML = ""), !1);
        },
        closeEl: !0,
        captionEl: !0,
        fullscreenEl: !0,
        zoomEl: !0,
        shareEl: !0,
        counterEl: !0,
        arrowEl: !0,
        preloaderEl: !0,
        tapToClose: !1,
        tapToToggleControls: !0,
        clickToCloseNonZoomable: !0,
        shareButtons: [
          {
            id: "facebook",
            label: "Share on Facebook",
            url: "https://www.facebook.com/sharer/sharer.php?u={{url}}",
          },
          {
            id: "twitter",
            label: "Tweet",
            url: "https://twitter.com/intent/tweet?text={{text}}&url={{url}}",
          },
          {
            id: "pinterest",
            label: "Pin it",
            url: "http://www.pinterest.com/pin/create/button/?url={{url}}&media={{image_url}}&description={{text}}",
          },
          {
            id: "download",
            label: "Download image",
            url: "{{raw_image_url}}",
            download: !0,
          },
        ],
        getImageURLForShare: function () {
          return o.currItem.src || "";
        },
        getPageURLForShare: function () {
          return window.location.href;
        },
        getTextForShare: function () {
          return o.currItem.title || "";
        },
        indexIndicatorSep: " / ",
        fitControlsWidth: 1200,
      },
      F = function (e) {
        if (g) return !0;
        (e = e || window.event), w.timeToIdle && w.mouseUsed && !p && z();
        for (
          var t,
            n,
            o = (e.target || e.srcElement).getAttribute("class") || "",
            l = 0;
          l < P.length;
          l++
        )
          (t = P[l]).onTap &&
            -1 < o.indexOf("pswp__" + t.name) &&
            (t.onTap(), (n = !0));
        n &&
          (e.stopPropagation && e.stopPropagation(),
          (g = !0),
          (e = s.features.isOldAndroid ? 600 : 30),
          setTimeout(function () {
            g = !1;
          }, e));
      },
      x = function (e, t, n) {
        s[(n ? "add" : "remove") + "Class"](e, "pswp__" + t);
      },
      S = function () {
        var e = 1 === w.getNumItemsFn();
        e !== h && (x(a, "ui--one-slide", e), (h = e));
      },
      k = function () {
        x(u, "share-modal--hidden", I);
      },
      K = function () {
        return (
          (I = !I)
            ? (s.removeClass(u, "pswp__share-modal--fade-in"),
              setTimeout(function () {
                I && k();
              }, 300))
            : (k(),
              setTimeout(function () {
                I || s.addClass(u, "pswp__share-modal--fade-in");
              }, 30)),
          I || O(),
          !1
        );
      },
      L = function (e) {
        var t = (e = e || window.event).target || e.srcElement;
        return (
          o.shout("shareLinkClick", e, t),
          !!t.href &&
            (!!t.hasAttribute("download") ||
              (window.open(
                t.href,
                "pswp_share",
                "scrollbars=yes,resizable=yes,toolbar=no,location=yes,width=550,height=420,top=100,left=" +
                  (window.screen ? Math.round(screen.width / 2 - 275) : 100)
              ),
              I || K(),
              !1))
        );
      },
      O = function () {
        for (var e, t, n, o, l = "", r = 0; r < w.shareButtons.length; r++)
          (e = w.shareButtons[r]),
            (t = w.getImageURLForShare(e)),
            (n = w.getPageURLForShare(e)),
            (o = w.getTextForShare(e)),
            (l +=
              '<a href="' +
              e.url
                .replace("{{url}}", encodeURIComponent(n))
                .replace("{{image_url}}", encodeURIComponent(t))
                .replace("{{raw_image_url}}", t)
                .replace("{{text}}", encodeURIComponent(o)) +
              '" target="_blank" class="pswp__share--' +
              e.id +
              '"' +
              (e.download ? "download" : "") +
              ">" +
              e.label +
              "</a>"),
            w.parseShareButtonOut && (l = w.parseShareButtonOut(e, l));
        (u.children[0].innerHTML = l), (u.children[0].onclick = L);
      },
      R = function (e) {
        for (var t = 0; t < w.closeElClasses.length; t++)
          if (s.hasClass(e, "pswp__" + w.closeElClasses[t])) return !0;
      },
      y = 0,
      z = function () {
        clearTimeout(v), (y = 0), p && _.setIdle(!1);
      },
      M = function (e) {
        e = (e = e || window.event).relatedTarget || e.toElement;
        (e && "HTML" !== e.nodeName) ||
          (clearTimeout(v),
          (v = setTimeout(function () {
            _.setIdle(!0);
          }, w.timeToIdleOutside)));
      },
      D = function (e) {
        m !== e && (x(d, "preloader--active", !e), (m = e));
      },
      A = function (e) {
        var t,
          n = e.vGap;
        !o.likelyTouchDevice || w.mouseUsed || screen.width > w.fitControlsWidth
          ? ((t = w.barsSize),
            w.captionEl && "auto" === t.bottom
              ? (r ||
                  ((r = s.createEl(
                    "pswp__caption pswp__caption--fake"
                  )).appendChild(s.createEl("pswp__caption__center")),
                  a.insertBefore(r, l),
                  s.addClass(a, "pswp__ui--fit")),
                w.addCaptionHTMLFn(e, r, !0)
                  ? ((e = r.clientHeight), (n.bottom = parseInt(e, 10) || 44))
                  : (n.bottom = t.top))
              : (n.bottom = "auto" === t.bottom ? 0 : t.bottom),
            (n.top = t.top))
          : (n.top = n.bottom = 0);
      },
      P = [
        {
          name: "caption",
          option: "captionEl",
          onInit: function (e) {
            l = e;
          },
        },
        {
          name: "share-modal",
          option: "shareEl",
          onInit: function (e) {
            u = e;
          },
          onTap: function () {
            K();
          },
        },
        {
          name: "button--share",
          option: "shareEl",
          onInit: function (e) {
            i = e;
          },
          onTap: function () {
            K();
          },
        },
        { name: "button--zoom", option: "zoomEl", onTap: o.toggleDesktopZoom },
        {
          name: "counter",
          option: "counterEl",
          onInit: function (e) {
            t = e;
          },
        },
        { name: "button--close", option: "closeEl", onTap: o.close },
        { name: "button--arrow--left", option: "arrowEl", onTap: o.prev },
        { name: "button--arrow--right", option: "arrowEl", onTap: o.next },
        {
          name: "button--fs",
          option: "fullscreenEl",
          onTap: function () {
            n.isFullscreen() ? n.exit() : n.enter();
          },
        },
        {
          name: "preloader",
          option: "preloaderEl",
          onInit: function (e) {
            d = e;
          },
        },
      ];
    (_.init = function () {
      var t;
      s.extend(o.options, E, !0),
        (w = o.options),
        (a = s.getChildByClass(o.scrollWrap, "pswp__ui")),
        (e = o.listen)("onVerticalDrag", function (e) {
          T && e < 0.95
            ? _.hideControls()
            : !T && 0.95 <= e && _.showControls();
        }),
        e("onPinchClose", function (e) {
          T && e < 0.9
            ? (_.hideControls(), (t = !0))
            : t && !T && 0.9 < e && _.showControls();
        }),
        e("zoomGestureEnded", function () {
          (t = !1) && !T && _.showControls();
        }),
        e("beforeChange", _.update),
        e("doubleTap", function (e) {
          var t = o.currItem.initialZoomLevel;
          o.getZoomLevel() !== t
            ? o.zoomTo(t, e, 333)
            : o.zoomTo(w.getDoubleTapZoom(!1, o.currItem), e, 333);
        }),
        e("preventDragEvent", function (e, t, n) {
          var o = e.target || e.srcElement;
          o &&
            o.getAttribute("class") &&
            -1 < e.type.indexOf("mouse") &&
            (0 < o.getAttribute("class").indexOf("__caption") ||
              /(SMALL|STRONG|EM)/i.test(o.tagName)) &&
            (n.prevent = !1);
        }),
        e("bindEvents", function () {
          s.bind(a, "pswpTap click", F),
            s.bind(o.scrollWrap, "pswpTap", _.onGlobalTap),
            o.likelyTouchDevice ||
              s.bind(o.scrollWrap, "mouseover", _.onMouseOver);
        }),
        e("unbindEvents", function () {
          I || K(),
            b && clearInterval(b),
            s.unbind(document, "mouseout", M),
            s.unbind(document, "mousemove", z),
            s.unbind(a, "pswpTap click", F),
            s.unbind(o.scrollWrap, "pswpTap", _.onGlobalTap),
            s.unbind(o.scrollWrap, "mouseover", _.onMouseOver),
            n &&
              (s.unbind(document, n.eventK, _.updateFullscreen),
              n.isFullscreen() && ((w.hideAnimationDuration = 0), n.exit()),
              (n = null));
        }),
        e("destroy", function () {
          w.captionEl &&
            (r && a.removeChild(r), s.removeClass(l, "pswp__caption--empty")),
            u && (u.children[0].onclick = null),
            s.removeClass(a, "pswp__ui--over-close"),
            s.addClass(a, "pswp__ui--hidden"),
            _.setIdle(!1);
        }),
        w.showAnimationDuration || s.removeClass(a, "pswp__ui--hidden"),
        e("initialZoomIn", function () {
          w.showAnimationDuration && s.removeClass(a, "pswp__ui--hidden");
        }),
        e("initialZoomOut", function () {
          s.addClass(a, "pswp__ui--hidden");
        }),
        e("parseVerticalMargin", A),
        (function () {
          var l,
            r,
            i,
            e = function (e) {
              if (e)
                for (var t = e.length, n = 0; n < t; n++) {
                  (l = e[n]), (r = l.className);
                  for (var o = 0; o < P.length; o++)
                    (i = P[o]),
                      -1 < r.indexOf("pswp__" + i.name) &&
                        (w[i.option]
                          ? (s.removeClass(l, "pswp__element--disabled"),
                            i.onInit && i.onInit(l))
                          : s.addClass(l, "pswp__element--disabled"));
                }
            };
          e(a.children);
          var t = s.getChildByClass(a, "pswp__top-bar");
          t && e(t.children);
        })(),
        w.shareEl && i && u && (I = !0),
        S(),
        w.timeToIdle &&
          e("mouseUsed", function () {
            s.bind(document, "mousemove", z),
              s.bind(document, "mouseout", M),
              (b = setInterval(function () {
                2 === ++y && _.setIdle(!0);
              }, w.timeToIdle / 2));
          }),
        w.fullscreenEl &&
          !s.features.isOldAndroid &&
          ((n = n || _.getFullscreenAPI())
            ? (s.bind(document, n.eventK, _.updateFullscreen),
              _.updateFullscreen(),
              s.addClass(o.template, "pswp--supports-fs"))
            : s.removeClass(o.template, "pswp--supports-fs")),
        w.preloaderEl &&
          (D(!0),
          e("beforeChange", function () {
            clearTimeout(f),
              (f = setTimeout(function () {
                o.currItem && o.currItem.loading
                  ? (o.allowProgressiveImg() &&
                      (!o.currItem.img || o.currItem.img.naturalWidth)) ||
                    D(!1)
                  : D(!0);
              }, w.loadingIndicatorDelay));
          }),
          e("imageLoadComplete", function (e, t) {
            o.currItem === t && D(!0);
          }));
    }),
      (_.setIdle = function (e) {
        x(a, "ui--idle", (p = e));
      }),
      (_.update = function () {
        (C =
          !(!T || !o.currItem) &&
          (_.updateIndexIndicator(),
          w.captionEl &&
            (w.addCaptionHTMLFn(o.currItem, l),
            x(l, "caption--empty", !o.currItem.title)),
          !0)),
          I || K(),
          S();
      }),
      (_.updateFullscreen = function (e) {
        e &&
          setTimeout(function () {
            o.setScrollOffset(0, s.getScrollY());
          }, 50),
          s[(n.isFullscreen() ? "add" : "remove") + "Class"](
            o.template,
            "pswp--fs"
          );
      }),
      (_.updateIndexIndicator = function () {
        w.counterEl &&
          (t.innerHTML =
            o.getCurrentIndex() + 1 + w.indexIndicatorSep + w.getNumItemsFn());
      }),
      (_.onGlobalTap = function (e) {
        var t = (e = e || window.event).target || e.srcElement;
        g ||
          (e.detail && "mouse" === e.detail.pointerType
            ? R(t)
              ? o.close()
              : s.hasClass(t, "pswp__img") &&
                (1 === o.getZoomLevel() &&
                o.getZoomLevel() <= o.currItem.fitRatio
                  ? w.clickToCloseNonZoomable && o.close()
                  : o.toggleDesktopZoom(e.detail.releasePoint))
            : (w.tapToToggleControls &&
                (T ? _.hideControls() : _.showControls()),
              w.tapToClose &&
                (s.hasClass(t, "pswp__img") || R(t)) &&
                o.close()));
      }),
      (_.onMouseOver = function (e) {
        e = (e = e || window.event).target || e.srcElement;
        x(a, "ui--over-close", R(e));
      }),
      (_.hideControls = function () {
        s.addClass(a, "pswp__ui--hidden"), (T = !1);
      }),
      (_.showControls = function () {
        (T = !0), C || _.update(), s.removeClass(a, "pswp__ui--hidden");
      }),
      (_.supportsFullscreen = function () {
        var e = document;
        return !!(
          e.exitFullscreen ||
          e.mozCancelFullScreen ||
          e.webkitExitFullscreen ||
          e.msExitFullscreen
        );
      }),
      (_.getFullscreenAPI = function () {
        var e,
          t = document.documentElement,
          n = "fullscreenchange";
        return (
          t.requestFullscreen
            ? (e = {
                enterK: "requestFullscreen",
                exitK: "exitFullscreen",
                elementK: "fullscreenElement",
                eventK: n,
              })
            : t.mozRequestFullScreen
            ? (e = {
                enterK: "mozRequestFullScreen",
                exitK: "mozCancelFullScreen",
                elementK: "mozFullScreenElement",
                eventK: "moz" + n,
              })
            : t.webkitRequestFullscreen
            ? (e = {
                enterK: "webkitRequestFullscreen",
                exitK: "webkitExitFullscreen",
                elementK: "webkitFullscreenElement",
                eventK: "webkit" + n,
              })
            : t.msRequestFullscreen &&
              (e = {
                enterK: "msRequestFullscreen",
                exitK: "msExitFullscreen",
                elementK: "msFullscreenElement",
                eventK: "MSFullscreenChange",
              }),
          e &&
            ((e.enter = function () {
              if (
                ((c = w.closeOnScroll),
                (w.closeOnScroll = !1),
                "webkitRequestFullscreen" !== this.enterK)
              )
                return o.template[this.enterK]();
              o.template[this.enterK](Element.ALLOW_KEYBOARD_INPUT);
            }),
            (e.exit = function () {
              return (w.closeOnScroll = c), document[this.exitK]();
            }),
            (e.isFullscreen = function () {
              return document[this.elementK];
            })),
          e
        );
      });
  };
});
jQuery(function (s) {
  if ("undefined" == typeof wc_single_product_params) return !1;
  s("body")
    .on("init", ".wc-tabs-wrapper, .woocommerce-tabs", function () {
      s(this)
        .find(".wc-tab, .woocommerce-tabs .panel:not(.panel .panel)")
        .hide();
      var t = window.location.hash,
        e = window.location.href,
        i = s(this).find(".wc-tabs, ul.tabs").first();
      (0 <= t.toLowerCase().indexOf("comment-") ||
      "#reviews" === t ||
      "#tab-reviews" === t ||
      0 < e.indexOf("comment-page-") ||
      0 < e.indexOf("cpage=")
        ? i.find("li.reviews_tab a")
        : "#tab-additional_information" === t
        ? i.find("li.additional_information_tab a")
        : i.find("li:first a")
      ).trigger("click");
    })
    .on("click", ".wc-tabs li a, ul.tabs li a", function (t) {
      t.preventDefault();
      var e = s(this),
        t = e.closest(".wc-tabs-wrapper, .woocommerce-tabs");
      t.find(".wc-tabs, ul.tabs").find("li").removeClass("active"),
        t.find(".wc-tab, .panel:not(.panel .panel)").hide(),
        e.closest("li").addClass("active"),
        t.find(e.attr("href")).show();
    })
    .on("click", "a.woocommerce-review-link", function () {
      return s(".reviews_tab a").trigger("click"), !0;
    })
    .on("init", "#rating", function () {
      s("#rating")
        .hide()
        .before(
          '<p class="stars">\t\t\t\t\t\t<span>\t\t\t\t\t\t\t<a class="star-1" href="#">1</a>\t\t\t\t\t\t\t<a class="star-2" href="#">2</a>\t\t\t\t\t\t\t<a class="star-3" href="#">3</a>\t\t\t\t\t\t\t<a class="star-4" href="#">4</a>\t\t\t\t\t\t\t<a class="star-5" href="#">5</a>\t\t\t\t\t\t</span>\t\t\t\t\t</p>'
        );
    })
    .on("click", "#respond p.stars a", function () {
      var t = s(this),
        e = s(this).closest("#respond").find("#rating"),
        i = s(this).closest(".stars");
      return (
        e.val(t.text()),
        t.siblings("a").removeClass("active"),
        t.addClass("active"),
        i.addClass("selected"),
        !1
      );
    })
    .on("click", "#respond #submit", function () {
      var t = s(this).closest("#respond").find("#rating"),
        e = t.val();
      if (
        0 < t.length &&
        !e &&
        "yes" === wc_single_product_params.review_rating_required
      )
        return (
          window.alert(wc_single_product_params.i18n_required_rating_text), !1
        );
    }),
    s(".wc-tabs-wrapper, .woocommerce-tabs, #rating").trigger("init");
  var e = function (t, e) {
    (this.$target = t),
      (this.$images = s(".woocommerce-product-gallery__image", t)),
      0 !== this.$images.length
        ? (t.data("product_gallery", this),
          (this.flexslider_enabled =
            "function" == typeof s.fn.flexslider &&
            wc_single_product_params.flexslider_enabled),
          (this.zoom_enabled =
            "function" == typeof s.fn.zoom &&
            wc_single_product_params.zoom_enabled),
          (this.photoswipe_enabled =
            "undefined" != typeof PhotoSwipe &&
            wc_single_product_params.photoswipe_enabled),
          e &&
            ((this.flexslider_enabled =
              !1 !== e.flexslider_enabled && this.flexslider_enabled),
            (this.zoom_enabled = !1 !== e.zoom_enabled && this.zoom_enabled),
            (this.photoswipe_enabled =
              !1 !== e.photoswipe_enabled && this.photoswipe_enabled)),
          1 === this.$images.length && (this.flexslider_enabled = !1),
          (this.initFlexslider = this.initFlexslider.bind(this)),
          (this.initZoom = this.initZoom.bind(this)),
          (this.initZoomForTarget = this.initZoomForTarget.bind(this)),
          (this.initPhotoswipe = this.initPhotoswipe.bind(this)),
          (this.onResetSlidePosition = this.onResetSlidePosition.bind(this)),
          (this.getGalleryItems = this.getGalleryItems.bind(this)),
          (this.openPhotoswipe = this.openPhotoswipe.bind(this)),
          this.flexslider_enabled
            ? (this.initFlexslider(e.flexslider),
              t.on(
                "woocommerce_gallery_reset_slide_position",
                this.onResetSlidePosition
              ))
            : this.$target.css("opacity", 1),
          this.zoom_enabled &&
            (this.initZoom(),
            t.on("woocommerce_gallery_init_zoom", this.initZoom)),
          this.photoswipe_enabled && this.initPhotoswipe())
        : this.$target.css("opacity", 1);
  };
  (e.prototype.initFlexslider = function (t) {
    var e = this.$target,
      i = this,
      t = s.extend(
        {
          selector:
            ".woocommerce-product-gallery__wrapper > .woocommerce-product-gallery__image",
          start: function () {
            e.css("opacity", 1);
          },
          after: function (t) {
            i.initZoomForTarget(i.$images.eq(t.currentSlide));
          },
        },
        t
      );
    e.flexslider(t),
      s(
        ".woocommerce-product-gallery__wrapper .woocommerce-product-gallery__image:eq(0) .wp-post-image"
      )
        .one("load", function () {
          var i = s(this);
          i &&
            setTimeout(function () {
              var t = i.closest(".woocommerce-product-gallery__image").height(),
                e = i.closest(".flex-viewport");
              t && e && e.height(t);
            }, 100);
        })
        .each(function () {
          this.complete && s(this).trigger("load");
        });
  }),
    (e.prototype.initZoom = function () {
      this.initZoomForTarget(this.$images.first());
    }),
    (e.prototype.initZoomForTarget = function (t) {
      if (!this.zoom_enabled) return !1;
      var e,
        i = this.$target.width(),
        o = !1;
      s(t).each(function (t, e) {
        if (s(e).find("img").data("large_image_width") > i) return !(o = !0);
      }),
        o &&
          ((e = s.extend({ touch: !1 }, wc_single_product_params.zoom_options)),
          "ontouchstart" in document.documentElement && (e.on = "click"),
          t.trigger("zoom.destroy"),
          t.zoom(e),
          setTimeout(function () {
            t.find(":hover").length && t.trigger("mouseover");
          }, 100));
    }),
    (e.prototype.initPhotoswipe = function () {
      this.zoom_enabled && 0 < this.$images.length
        ? (this.$target.prepend(
            '<a href="#" class="woocommerce-product-gallery__trigger">????</a>'
          ),
          this.$target.on(
            "click",
            ".woocommerce-product-gallery__trigger",
            this.openPhotoswipe
          ),
          this.$target.on(
            "click",
            ".woocommerce-product-gallery__image a",
            function (t) {
              t.preventDefault();
            }
          ),
          this.flexslider_enabled ||
            this.$target.on(
              "click",
              ".woocommerce-product-gallery__image a",
              this.openPhotoswipe
            ))
        : this.$target.on(
            "click",
            ".woocommerce-product-gallery__image a",
            this.openPhotoswipe
          );
    }),
    (e.prototype.onResetSlidePosition = function () {
      this.$target.flexslider(0);
    }),
    (e.prototype.getGalleryItems = function () {
      var t = this.$images,
        a = [];
      return (
        0 < t.length &&
          t.each(function (t, e) {
            var i,
              o,
              r = s(e).find("img");
            r.length &&
              ((i = r.attr("data-large_image")),
              (o = r.attr("data-large_image_width")),
              (e = r.attr("data-large_image_height")),
              (r = {
                alt: r.attr("alt"),
                src: i,
                w: o,
                h: e,
                title: r.attr("data-caption")
                  ? r.attr("data-caption")
                  : r.attr("title"),
              }),
              a.push(r));
          }),
        a
      );
    }),
    (e.prototype.openPhotoswipe = function (t) {
      t.preventDefault();
      var e = s(".pswp")[0],
        i = this.getGalleryItems(),
        t = s(t.target),
        t =
          t.is(".woocommerce-product-gallery__trigger") ||
          t.is(".woocommerce-product-gallery__trigger img")
            ? this.$target.find(".flex-active-slide")
            : t.closest(".woocommerce-product-gallery__image"),
        t = s.extend(
          {
            index: s(t).index(),
            addCaptionHTMLFn: function (t, e) {
              return t.title
                ? ((e.children[0].textContent = t.title), !0)
                : ((e.children[0].textContent = ""), !1);
            },
          },
          wc_single_product_params.photoswipe_options
        );
      new PhotoSwipe(e, PhotoSwipeUI_Default, i, t).init();
    }),
    (s.fn.wc_product_gallery = function (t) {
      return new e(this, t || wc_single_product_params), this;
    }),
    s(".woocommerce-product-gallery").each(function () {
      s(this).trigger("wc-product-gallery-before-init", [
        this,
        wc_single_product_params,
      ]),
        s(this).wc_product_gallery(wc_single_product_params),
        s(this).trigger("wc-product-gallery-after-init", [
          this,
          wc_single_product_params,
        ]);
    });
});
/*!
	Zoom 1.7.21
	license: MIT
	http://www.jacklmoore.com/zoom
*/
!(function (d) {
  var n = {
    url: !1,
    callback: !1,
    target: !1,
    duration: 120,
    on: "mouseover",
    touch: !0,
    onZoomIn: !1,
    onZoomOut: !1,
    magnify: 1,
  };
  (d.zoom = function (o, t, e, n) {
    var i,
      u,
      a,
      c,
      r,
      l,
      m,
      f = d(o),
      s = f.css("position"),
      h = d(t);
    return (
      (o.style.position = /(absolute|fixed)/.test(s) ? s : "relative"),
      (o.style.overflow = "hidden"),
      (e.style.width = e.style.height = ""),
      d(e)
        .addClass("zoomImg")
        .css({
          position: "absolute",
          top: 0,
          left: 0,
          opacity: 0,
          width: e.width * n,
          height: e.height * n,
          border: "none",
          maxWidth: "none",
          maxHeight: "none",
        })
        .appendTo(o),
      {
        init: function () {
          (u = f.outerWidth()),
            (i = f.outerHeight()),
            (a =
              t === o ? ((c = u), i) : ((c = h.outerWidth()), h.outerHeight())),
            (r = (e.width - u) / c),
            (l = (e.height - i) / a),
            (m = h.offset());
        },
        move: function (o) {
          var t = o.pageX - m.left,
            o = o.pageY - m.top,
            o = Math.max(Math.min(o, a), 0),
            t = Math.max(Math.min(t, c), 0);
          (e.style.left = t * -r + "px"), (e.style.top = o * -l + "px");
        },
      }
    );
  }),
    (d.fn.zoom = function (e) {
      return this.each(function () {
        var i = d.extend({}, n, e || {}),
          u = (i.target && d(i.target)[0]) || this,
          o = this,
          a = d(o),
          c = document.createElement("img"),
          r = d(c),
          l = "mousemove.zoom",
          m = !1,
          f = !1;
        if (!i.url) {
          var t = o.querySelector("img");
          if (
            (t &&
              ((i.url = t.getAttribute("data-src") || t.currentSrc || t.src),
              (i.alt = t.getAttribute("data-alt") || t.alt)),
            !i.url)
          )
            return;
        }
        a.one(
          "zoom.destroy",
          function (o, t) {
            a.off(".zoom"),
              (u.style.position = o),
              (u.style.overflow = t),
              (c.onload = null),
              r.remove();
          }.bind(this, u.style.position, u.style.overflow)
        ),
          (c.onload = function () {
            var t = d.zoom(u, o, c, i.magnify);
            function e(o) {
              t.init(),
                t.move(o),
                r
                  .stop()
                  .fadeTo(
                    d.support.opacity ? i.duration : 0,
                    1,
                    "function" == typeof i.onZoomIn && i.onZoomIn.call(c)
                  );
            }
            function n() {
              r.stop().fadeTo(
                i.duration,
                0,
                "function" == typeof i.onZoomOut && i.onZoomOut.call(c)
              );
            }
            "grab" === i.on
              ? a.on("mousedown.zoom", function (o) {
                  1 === o.which &&
                    (d(document).one("mouseup.zoom", function () {
                      n(), d(document).off(l, t.move);
                    }),
                    e(o),
                    d(document).on(l, t.move),
                    o.preventDefault());
                })
              : "click" === i.on
              ? a.on("click.zoom", function (o) {
                  if (!m)
                    return (
                      (m = !0),
                      e(o),
                      d(document).on(l, t.move),
                      d(document).one("click.zoom", function () {
                        n(), (m = !1), d(document).off(l, t.move);
                      }),
                      !1
                    );
                })
              : "toggle" === i.on
              ? a.on("click.zoom", function (o) {
                  m ? n() : e(o), (m = !m);
                })
              : "mouseover" === i.on &&
                (t.init(),
                a
                  .on("mouseenter.zoom", e)
                  .on("mouseleave.zoom", n)
                  .on(l, t.move)),
              i.touch &&
                a
                  .on("touchstart.zoom", function (o) {
                    o.preventDefault(),
                      f
                        ? ((f = !1), n())
                        : ((f = !0),
                          e(
                            o.originalEvent.touches[0] ||
                              o.originalEvent.changedTouches[0]
                          ));
                  })
                  .on("touchmove.zoom", function (o) {
                    o.preventDefault(),
                      t.move(
                        o.originalEvent.touches[0] ||
                          o.originalEvent.changedTouches[0]
                      );
                  })
                  .on("touchend.zoom", function (o) {
                    o.preventDefault(), f && ((f = !1), n());
                  }),
              "function" == typeof i.callback && i.callback.call(c);
          }),
          c.setAttribute("role", "presentation"),
          (c.alt = i.alt || ""),
          (c.src = i.url);
      });
    }),
    (d.fn.zoom.defaults = n);
})(window.jQuery);
/*!
 * JavaScript Cookie v2.1.4
 * https://github.com/js-cookie/js-cookie
 *
 * Copyright 2006, 2015 Klaus Hartl & Fagner Brack
 * Released under the MIT license
 */
!(function (e) {
  var n,
    o,
    t = !1;
  "function" == typeof define && define.amd && (define(e), (t = !0)),
    "object" == typeof exports && ((module.exports = e()), (t = !0)),
    t ||
      ((n = window.Cookies),
      ((o = window.Cookies = e()).noConflict = function () {
        return (window.Cookies = n), o;
      }));
})(function () {
  function m() {
    for (var e = 0, n = {}; e < arguments.length; e++) {
      var o,
        t = arguments[e];
      for (o in t) n[o] = t[o];
    }
    return n;
  }
  return (function e(C) {
    function g(e, n, o) {
      var t, r;
      if ("undefined" != typeof document) {
        if (1 < arguments.length) {
          "number" == typeof (o = m({ path: "/" }, g.defaults, o)).expires &&
            ((r = new Date()).setMilliseconds(
              r.getMilliseconds() + 864e5 * o.expires
            ),
            (o.expires = r)),
            (o.expires = o.expires ? o.expires.toUTCString() : "");
          try {
            (t = JSON.stringify(n)), /^[\{\[]/.test(t) && (n = t);
          } catch (l) {}
          (n = C.write
            ? C.write(n, e)
            : encodeURIComponent(String(n)).replace(
                /%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g,
                decodeURIComponent
              )),
            (e = (e = (e = encodeURIComponent(String(e))).replace(
              /%(23|24|26|2B|5E|60|7C)/g,
              decodeURIComponent
            )).replace(/[\(\)]/g, escape));
          var i,
            c = "";
          for (i in o)
            o[i] && ((c += "; " + i), !0 !== o[i] && (c += "=" + o[i]));
          return (document.cookie = e + "=" + n + c);
        }
        e || (t = {});
        for (
          var s = document.cookie ? document.cookie.split("; ") : [],
            f = /(%[0-9A-Z]{2})+/g,
            p = 0;
          p < s.length;
          p++
        ) {
          var a = s[p].split("=");
          '"' === (u = a.slice(1).join("=")).charAt(0) && (u = u.slice(1, -1));
          try {
            var d = a[0].replace(f, decodeURIComponent),
              u = C.read
                ? C.read(u, d)
                : C(u, d) || u.replace(f, decodeURIComponent);
            if (this.json)
              try {
                u = JSON.parse(u);
              } catch (l) {}
            if (e === d) {
              t = u;
              break;
            }
            e || (t[d] = u);
          } catch (l) {}
        }
        return t;
      }
    }
    return (
      ((g.set = g).get = function (e) {
        return g.call(g, e);
      }),
      (g.getJSON = function () {
        return g.apply({ json: !0 }, [].slice.call(arguments));
      }),
      (g.defaults = {}),
      (g.remove = function (e, n) {
        g(e, "", m(n, { expires: -1 }));
      }),
      (g.withConverter = e),
      g
    );
  })(function () {});
});
jQuery(function (r) {
  if ("undefined" == typeof wc_cart_fragments_params) return !1;
  var t = !0,
    o = wc_cart_fragments_params.cart_hash_key;
  try {
    (t = "sessionStorage" in window && null !== window.sessionStorage),
      window.sessionStorage.setItem("wc", "test"),
      window.sessionStorage.removeItem("wc"),
      window.localStorage.setItem("wc", "test"),
      window.localStorage.removeItem("wc");
  } catch (w) {
    t = !1;
  }
  function a() {
    t && sessionStorage.setItem("wc_cart_created", new Date().getTime());
  }
  function s(e) {
    t && (localStorage.setItem(o, e), sessionStorage.setItem(o, e));
  }
  var e = {
    url: wc_cart_fragments_params.wc_ajax_url
      .toString()
      .replace("%%endpoint%%", "get_refreshed_fragments"),
    type: "POST",
    data: { time: new Date().getTime() },
    timeout: wc_cart_fragments_params.request_timeout,
    success: function (e) {
      e &&
        e.fragments &&
        (r.each(e.fragments, function (e, t) {
          r(e).replaceWith(t);
        }),
        t &&
          (sessionStorage.setItem(
            wc_cart_fragments_params.fragment_name,
            JSON.stringify(e.fragments)
          ),
          s(e.cart_hash),
          e.cart_hash && a()),
        r(document.body).trigger("wc_fragments_refreshed"));
    },
    error: function () {
      r(document.body).trigger("wc_fragments_ajax_error");
    },
  };
  function n() {
    r.ajax(e);
  }
  if (t) {
    var i = null;
    r(document.body).on("wc_fragment_refresh updated_wc_div", function () {
      n();
    }),
      r(document.body).on(
        "added_to_cart removed_from_cart",
        function (e, t, r) {
          var n = sessionStorage.getItem(o);
          (null !== n && n !== undefined && "" !== n) || a(),
            sessionStorage.setItem(
              wc_cart_fragments_params.fragment_name,
              JSON.stringify(t)
            ),
            s(r);
        }
      ),
      r(document.body).on("wc_fragments_refreshed", function () {
        clearTimeout(i), (i = setTimeout(n, 864e5));
      }),
      r(window).on("storage onstorage", function (e) {
        o === e.originalEvent.key &&
          localStorage.getItem(o) !== sessionStorage.getItem(o) &&
          n();
      }),
      r(window).on("pageshow", function (e) {
        e.originalEvent.persisted &&
          (r(".widget_shopping_cart_content").empty(),
          r(document.body).trigger("wc_fragment_refresh"));
      });
    try {
      var c = JSON.parse(
          sessionStorage.getItem(wc_cart_fragments_params.fragment_name)
        ),
        _ = sessionStorage.getItem(o),
        g = Cookies.get("woocommerce_cart_hash"),
        m = sessionStorage.getItem("wc_cart_created");
      if (
        ((null !== _ && _ !== undefined && "" !== _) || (_ = ""),
        (null !== g && g !== undefined && "" !== g) || (g = ""),
        _ && (null === m || m === undefined || "" === m))
      )
        throw "No cart_created";
      if (m) {
        var d = +m + 864e5,
          m = new Date().getTime();
        if (d < m) throw "Fragment expired";
        i = setTimeout(n, d - m);
      }
      if (!c || !c["div.widget_shopping_cart_content"] || _ !== g)
        throw "No fragment";
      r.each(c, function (e, t) {
        r(e).replaceWith(t);
      }),
        r(document.body).trigger("wc_fragments_loaded");
    } catch (w) {
      n();
    }
  } else n();
  0 < Cookies.get("woocommerce_items_in_cart")
    ? r(".hide_cart_widget_if_empty").closest(".widget_shopping_cart").show()
    : r(".hide_cart_widget_if_empty").closest(".widget_shopping_cart").hide(),
    r(document.body).on("adding_to_cart", function () {
      r(".hide_cart_widget_if_empty").closest(".widget_shopping_cart").show();
    }),
    "undefined" != typeof wp &&
      wp.customize &&
      wp.customize.selectiveRefresh &&
      wp.customize.widgetsPreview &&
      wp.customize.widgetsPreview.WidgetPartial &&
      wp.customize.selectiveRefresh.bind(
        "partial-content-rendered",
        function () {
          n();
        }
      );
});
("use strict");
function _typeof(e) {
  return (_typeof =
    "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
      ? function (e) {
          return typeof e;
        }
      : function (e) {
          return e &&
            "function" == typeof Symbol &&
            e.constructor === Symbol &&
            e !== Symbol.prototype
            ? "symbol"
            : typeof e;
        })(e);
}
function _createForOfIteratorHelper(e, t) {
  var a =
    ("undefined" != typeof Symbol && e[Symbol.iterator]) || e["@@iterator"];
  if (!a) {
    if (
      Array.isArray(e) ||
      (a = _unsupportedIterableToArray(e)) ||
      (t && e && "number" == typeof e.length)
    ) {
      a && (e = a);
      var o = 0,
        t = function () {};
      return {
        s: t,
        n: function () {
          return o >= e.length ? { done: !0 } : { done: !1, value: e[o++] };
        },
        e: function (e) {
          throw e;
        },
        f: t,
      };
    }
    throw new TypeError(
      "Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
    );
  }
  var i,
    n = !0,
    r = !1;
  return {
    s: function () {
      a = a.call(e);
    },
    n: function () {
      var e = a.next();
      return (n = e.done), e;
    },
    e: function (e) {
      (r = !0), (i = e);
    },
    f: function () {
      try {
        n || null == a.return || a.return();
      } finally {
        if (r) throw i;
      }
    },
  };
}
function _unsupportedIterableToArray(e, t) {
  if (e) {
    if ("string" == typeof e) return _arrayLikeToArray(e, t);
    var a = Object.prototype.toString.call(e).slice(8, -1);
    return "Map" ===
      (a = "Object" === a && e.constructor ? e.constructor.name : a) ||
      "Set" === a
      ? Array.from(e)
      : "Arguments" === a || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a)
      ? _arrayLikeToArray(e, t)
      : void 0;
  }
}
function _arrayLikeToArray(e, t) {
  (null == t || t > e.length) && (t = e.length);
  for (var a = 0, o = new Array(t); a < t; a++) o[a] = e[a];
  return o;
}
var botiga = botiga || {};
(botiga.helpers = {
  botigaDomReady: function (e) {
    if ("function" == typeof e)
      return "interactive" === document.readyState ||
        "complete" === document.readyState
        ? e()
        : void document.addEventListener("DOMContentLoaded", e, !1);
  },
  ajax: function (e, t, a, o) {
    var i;
    (i = new XMLHttpRequest()).open("POST", botiga.ajaxurl, !0),
      i.setRequestHeader("Content-type", "application/x-www-form-urlencoded"),
      (i.onload = function () {
        200 <= this.status && this.status < 400 && o.apply(this);
      });
    var n = "";
    a = Object.entries(a);
    for (var r = 0; r < a.length; r++) n += "&" + a[r].join("=");
    i.send("action=" + e + "&nonce=" + t + n);
  },
  setCookie: function (e, t, a) {
    var o = new Date();
    o.setTime(o.getTime() + 24 * a * 60 * 60 * 1e3);
    o = "expires=" + o.toUTCString();
    document.cookie = e + "=" + t + ";" + o + ";path=/";
  },
  getCookie: function (e) {
    for (
      var t = e + "=", a = document.cookie.split(";"), o = 0;
      o < a.length;
      o++
    ) {
      for (var i = a[o]; " " == i.charAt(0); ) i = i.substring(1);
      if (0 == i.indexOf(t)) return i.substring(t.length, i.length);
    }
    return "";
  },
}),
  (botiga.navigation = {
    init: function () {
      var e = document.getElementById("site-navigation"),
        i = document.getElementsByClassName("botiga-offcanvas-menu")[0];
      if (e) {
        var n = document.getElementsByClassName("menu-toggle")[0],
          t = document.getElementsByClassName("mobile-menu-close")[0];
        if (void 0 !== n) {
          var a = e.getElementsByTagName("ul")[0];
          e.getElementsByClassName("mobile-menu-close")[0];
          if (void 0 !== a) {
            a.classList.contains("nav-menu") || a.classList.add("nav-menu");
            var r = (e = i.querySelectorAll(
              "a[href]:not([disabled]):not(.mobile-menu-close)"
            ))[0];
            n.addEventListener("click", function (e) {
              e.preventDefault(),
                n.classList.add("open"),
                i.classList.add("toggled"),
                document.body.classList.add("mobile-menu-visible");
              var t,
                a = _createForOfIteratorHelper(
                  i.querySelectorAll(
                    '.dropdown-symbol, .menu-item-has-children > a[href="#"]'
                  )
                );
              try {
                for (a.s(); !(t = a.n()).done; ) {
                  var o = t.value;
                  o.addEventListener("touchstart", u),
                    o.addEventListener("click", u),
                    o.addEventListener("keydown", function (e) {
                      ("Enter" !== e.key && 13 !== e.keyCode) ||
                        (e.preventDefault(),
                        o.parentNode.parentNode
                          .getElementsByClassName("sub-menu")[0]
                          .classList.toggle("toggled"));
                    });
                }
              } catch (e) {
                a.e(e);
              } finally {
                a.f();
              }
              r.focus();
            });
            (r = (e = i.querySelectorAll("a[href]:not([disabled])"))[0]),
              (e = e[e.length - 1]);
            e.addEventListener("keydown", function (e) {
              ("Tab" !== e.key && 9 !== e.keyCode) || e.shiftKey || r.focus();
            }),
              t.addEventListener("click", function (e) {
                e.preventDefault(),
                  n.focus(),
                  n.classList.remove("open"),
                  i.classList.remove("toggled"),
                  document.body.classList.remove("mobile-menu-visible");
              }),
              document.addEventListener("click", function (e) {
                null !== e.target.closest(".botiga-offcanvas-menu") ||
                  e.target.classList.contains("menu-toggle") ||
                  null !== e.target.closest(".menu-toggle") ||
                  (n.classList.remove("open"),
                  i.classList.remove("toggled"),
                  document.body.classList.remove("mobile-menu-visible"));
              });
            var o,
              t = a.getElementsByTagName("a"),
              a = a.querySelectorAll(
                ".menu-item-has-children > a, .page_item_has_children > a"
              ),
              s = _createForOfIteratorHelper(t);
            try {
              for (s.s(); !(o = s.n()).done; ) {
                var c = o.value;
                c.addEventListener("focus", v, !0),
                  c.addEventListener("blur", v, !0);
              }
            } catch (e) {
              s.e(e);
            } finally {
              s.f();
            }
            var l,
              d = _createForOfIteratorHelper(a);
            try {
              for (d.s(); !(l = d.n()).done; )
                l.value.addEventListener("touchstart", v, !1);
            } catch (e) {
              d.e(e);
            } finally {
              d.f();
            }
            this.checkMenuReverse();
          } else n.style.display = "none";
        }
      }
      function u(e) {
        e.preventDefault(),
          e.target
            .closest("li")
            .querySelector(".sub-menu")
            .classList.toggle("toggled");
      }
      function v() {
        if ("focus" === event.type || "blur" === event.type)
          for (var e = this; !e.classList.contains("nav-menu"); )
            "li" === e.tagName.toLowerCase() && e.classList.toggle("focus"),
              (e = e.parentNode);
        if ("touchstart" === event.type) {
          var t = this.parentNode;
          event.preventDefault();
          var a,
            o = _createForOfIteratorHelper(t.parentNode.children);
          try {
            for (o.s(); !(a = o.n()).done; ) {
              var i = a.value;
              t !== i && i.classList.remove("focus");
            }
          } catch (e) {
            o.e(e);
          } finally {
            o.f();
          }
          t.classList.toggle("focus");
        }
      }
    },
    checkMenuReverse: function () {
      for (
        var e = document.querySelectorAll(
            ".header-login-register, .top-bar-login-register"
          ),
          t = 0;
        t < e.length;
        t++
      )
        e[t].removeEventListener("mouseover", this.menuReverseEventHandler),
          e[t].addEventListener("mouseover", this.menuReverseEventHandler);
    },
    menuReverseEventHandler: function () {
      for (
        var e = event.currentTarget.querySelectorAll(
            ".header-login-register>nav, .top-bar-login-register>nav"
          ),
          t = 0;
        t < e.length;
        t++
      )
        0 ==
          (function (e) {
            e = e.getBoundingClientRect();
            return (
              0 <= e.top &&
              0 <= e.left &&
              e.bottom <=
                (window.innerHeight || document.documentElement.clientHeight) &&
              e.right <=
                (window.innerWidth || document.documentElement.clientWidth)
            );
          })(e[t]) && e[t].classList.add("sub-menu-reverse");
    },
  }),
  (botiga.desktopOffcanvasNav = {
    init: function () {
      var e = document.querySelectorAll(".desktop-menu-toggle"),
        t = document.getElementsByClassName("desktop-menu-close")[0],
        a = document.getElementsByClassName("botiga-desktop-offcanvas")[0];
      if (!e.length) return !1;
      for (var o = 0; o < e.length; o++)
        e[o].addEventListener("click", function (e) {
          e.preventDefault(),
            a.classList.contains("botiga-desktop-offcanvas-show")
              ? a.classList.remove("botiga-desktop-offcanvas-show")
              : a.classList.add("botiga-desktop-offcanvas-show");
        });
      t.addEventListener("click", function (e) {
        e.preventDefault(), a.classList.remove("botiga-desktop-offcanvas-show");
      });
    },
  }),
  (botiga.headerSearch = {
    init: function () {
      var t = this,
        o = document.querySelectorAll(".header-search"),
        i = window.matchMedia("(max-width: 1024px)").matches
          ? document.querySelector("#masthead-mobile .header-search-form")
          : document.querySelector("#masthead .header-search-form"),
        n = document.getElementsByClassName("search-overlay")[0],
        r = i.getElementsByClassName("search-field")[0],
        e = i.getElementsByClassName("search-submit")[0];
      if (0 !== o.length) {
        var a,
          s = _createForOfIteratorHelper(o);
        try {
          for (s.s(); !(a = s.n()).done; )
            a.value.addEventListener("click", function (e) {
              if ((e.preventDefault(), 1 < o.length)) {
                var t,
                  a = _createForOfIteratorHelper(o);
                try {
                  for (a.s(); !(t = a.n()).done; )
                    t.value.classList.toggle("hide");
                } catch (e) {
                  a.e(e);
                } finally {
                  a.f();
                }
              }
              i.classList.toggle("active"),
                n.classList.toggle("active"),
                document.body.classList.toggle("header-search-form-active"),
                e.target
                  .closest(".header-search")
                  .getElementsByClassName("icon-search")[0]
                  .classList.toggle("active"),
                e.target
                  .closest(".header-search")
                  .getElementsByClassName("icon-cancel")[0]
                  .classList.toggle("active"),
                e.target.closest(".header-search").classList.add("active"),
                e.target.closest(".header-search").classList.remove("hide"),
                void 0 !== r && r.focus(),
                null !== e.target.closest(".botiga-offcanvas-menu") &&
                  e.target
                    .closest(".botiga-offcanvas-menu")
                    .classList.remove("toggled");
            });
        } catch (e) {
          s.e(e);
        } finally {
          s.f();
        }
        n.addEventListener("click", function () {
          i.classList.remove("active"),
            n.classList.remove("active"),
            document.body.classList.remove("header-search-form-active"),
            t.backButtonsToDefaultState(o);
        }),
          void 0 !== e &&
            e.addEventListener("keydown", function (e) {
              ("Tab" !== e.key && e.keyCode !== KEYCODE_TAB) ||
                (i.classList.remove("active"),
                n.classList.remove("active"),
                document.body.classList.remove("header-search-form-active"),
                t.backButtonsToDefaultState(o),
                o.focus());
            });
        e =
          null !==
            document.getElementsByClassName(
              "header-desktop-offcanvas-layout2"
            )[0] &&
          document.getElementsByClassName("botiga-desktop-offcanvas")[0];
        return (
          e &&
            e.addEventListener("click", function (e) {
              null === e.target.closest(".header-search") &&
                (i.classList.remove("active"),
                n.classList.remove("active"),
                document.body.classList.remove("header-search-form-active"),
                t.backButtonsToDefaultState(o));
            }),
          this
        );
      }
    },
    backButtonsToDefaultState: function (e) {
      var t,
        a = _createForOfIteratorHelper(e);
      try {
        for (a.s(); !(t = a.n()).done; ) {
          var o = t.value;
          o.classList.remove("hide"),
            o.querySelector(".icon-cancel").classList.remove("active"),
            o.querySelector(".icon-search").classList.add("active");
        }
      } catch (e) {
        a.e(e);
      } finally {
        a.f();
      }
    },
  }),
  (botiga.stickyHeader = {
    init: function () {
      var t = document.getElementsByClassName("sticky-header")[0],
        a = document.getElementsByTagName("body")[0],
        e = !1;
      if (void 0 !== t) {
        if (
          window.matchMedia("screen and (min-width: 1024px)").matches &&
          "undefined" != typeof botiga_sticky_header_logo
        ) {
          var o = document.querySelector(".sticky-header .site-branding img"),
            i = o.getAttribute("src"),
            n = o.clientHeight;
          if (null === o) return !1;
          window.addEventListener(
            "botiga.sticky.header.activated",
            function () {
              return (
                !e &&
                (o.setAttribute("src", botiga_sticky_header_logo[0]),
                o.setAttribute("style", "max-height: " + n + "px;"),
                void (e = !0))
              );
            }
          ),
            window.addEventListener(
              "botiga.sticky.header.deactivated",
              function () {
                return !!e && (o.setAttribute("src", i), void (e = !1));
              }
            );
        }
        10 < (window.pageYOffset || document.documentElement.scrollTop) &&
          (t.classList.add("is-sticky"),
          a.classList.add("sticky-header-active"),
          window.dispatchEvent(new Event("botiga.sticky.header.activated")));
        var r,
          s = document
            .querySelector(".sticky-header")
            .getBoundingClientRect().y;
        document.body.classList.contains("admin-bar") && (s -= 32),
          t.classList.contains("sticky-scrolltop")
            ? ((r = 0),
              window.addEventListener(
                "scroll",
                function () {
                  var e =
                    window.pageYOffset || document.documentElement.scrollTop;
                  r < e || e < 10
                    ? (t.classList.remove("is-sticky"),
                      a.classList.remove("sticky-header-active"),
                      window.dispatchEvent(
                        new Event("botiga.sticky.header.deactivated")
                      ))
                    : (t.classList.add("is-sticky"),
                      a.classList.add("sticky-header-active"),
                      window.dispatchEvent(
                        new Event("botiga.sticky.header.activated")
                      )),
                    (r = e <= 0 ? 0 : e);
                },
                !1
              ))
            : window.addEventListener(
                "scroll",
                function () {
                  var e = window.scrollY;
                  s < e
                    ? (t.classList.add("sticky-shadow"),
                      a.classList.add("sticky-header-active"),
                      window.dispatchEvent(
                        new Event("botiga.sticky.header.activated")
                      ))
                    : (t.classList.remove("sticky-shadow"),
                      a.classList.remove("sticky-header-active"),
                      window.dispatchEvent(
                        new Event("botiga.sticky.header.deactivated")
                      ));
                },
                !1
              );
      }
    },
  }),
  (botiga.scrollDirection = {
    init: function () {
      var t,
        e = document.querySelectorAll(
          ".botiga-single-sticky-add-to-cart-wrapper.hide-when-scroll"
        ),
        a = document.getElementsByTagName("body")[0];
      "null" != typeof e &&
        ((t = 0),
        window.addEventListener(
          "scroll",
          function () {
            var e = window.pageYOffset || document.documentElement.scrollTop;
            t < e
              ? (a.classList.remove("botiga-scrolling-up"),
                a.classList.add("botiga-scrolling-down"))
              : (a.classList.remove("botiga-scrolling-down"),
                a.classList.add("botiga-scrolling-up")),
              (t = e <= 0 ? 0 : e);
          },
          !1
        ));
    },
  }),
  (botiga.wishList = {
    init: function () {
      this.build(), this.events();
    },
    build: function () {
      var e = document.querySelectorAll(
        ".botiga-wishlist-button, .botiga-wishlist-remove-item"
      );
      if (!e.length) return !1;
      for (var t = 0; t < e.length; t++)
        e[t].addEventListener("click", function (e) {
          e.preventDefault();
          var i = this,
            t = this.getAttribute("data-product-id"),
            a = this.getAttribute("data-wishlist-link"),
            n = this.getAttribute("data-type"),
            e = this.getAttribute("data-nonce");
          if (i.classList.contains("active")) return (window.location = a), !1;
          a = new XMLHttpRequest();
          a.open("POST", botiga.ajaxurl, !0),
            a.setRequestHeader(
              "Content-type",
              "application/x-www-form-urlencoded"
            ),
            "remove" === n &&
              (i.closest("tr").classList.add("removing"),
              i.classList.add("botigaAnimRotate"),
              i.classList.add("botiga-anim-infinite")),
            (a.onload = function () {
              if (200 <= this.status && this.status < 400) {
                var e = JSON.parse(this.response),
                  t = document.querySelectorAll(".header-wishlist-icon"),
                  a = e.qty;
                if (
                  ("add" === n
                    ? (i.classList.add("active"),
                      null !== i.closest(".single-product") &&
                        ((e = i.querySelector(
                          ".botiga-wishlist-text"
                        )).innerHTML = e.getAttribute(
                          "data-wishlist-view-text"
                        )))
                    : (i.closest("tr").classList.add("removing"),
                      setTimeout(function () {
                        i.closest("tr").remove();
                      }, 800)),
                  t.length)
                )
                  for (var o = 0; o < t.length; o++)
                    t[o].querySelector(".count-number").innerHTML = a;
                window.dispatchEvent(new Event("botiga.wishlist.ajax.loaded"));
              }
            }),
            a.send(
              "action=botiga_button_wishlist&product_id=" +
                t +
                "&nonce=" +
                e +
                "&type=" +
                n
            );
        });
    },
    events: function () {
      var e = this;
      window.addEventListener("botiga.carousel.initialized", function () {
        e.build();
      });
    },
  }),
  (botiga.customAddToCartButton = {
    init: function () {
      var e = document.querySelectorAll(".botiga-custom-addtocart");
      if (!e.length) return !1;
      for (var t = 0; t < e.length; t++)
        e[t].addEventListener("click", function (e) {
          e.preventDefault();
          var t = this,
            a = this.getAttribute("data-product-id"),
            o = this.innerHTML,
            i = this.getAttribute("data-loading-text"),
            n = this.getAttribute("data-added-text"),
            r = this.getAttribute("data-nonce"),
            e = new XMLHttpRequest();
          e.open("POST", botiga.ajaxurl, !0),
            e.setRequestHeader(
              "Content-type",
              "application/x-www-form-urlencoded"
            ),
            (t.innerHTML = i),
            (e.onload = function () {
              200 <= this.status &&
                this.status < 400 &&
                ((t.innerHTML = n),
                setTimeout(function () {
                  t.innerHTML = o;
                }, 1500),
                jQuery(document.body).trigger("wc_fragment_refresh"),
                jQuery(document.body).trigger("added_to_cart"),
                document.body.dispatchEvent(
                  new Event("botiga.custom_added_to_cart")
                ));
            }),
            e.send(
              "action=botiga_custom_addtocart&product_id=" + a + "&nonce=" + r
            );
        });
    },
  }),
  (botiga.quickView = {
    init: function () {
      this.build(), this.events();
    },
    build: function () {
      var e = document.querySelectorAll(".botiga-quick-view"),
        o = document.querySelector(".botiga-quick-view-popup"),
        t = document.querySelector(".botiga-quick-view-popup-close-button"),
        i = document.querySelector(".botiga-quick-view-popup-content-ajax");
      if (null === o) return !1;
      t.addEventListener("click", function (e) {
        e.preventDefault();
      }),
        o.addEventListener("click", function (e) {
          null === e.target.closest(".botiga-quick-view-popup-content-ajax") &&
            o.classList.remove("opened");
        });
      for (var a = 0; a < e.length; a++)
        e[a].addEventListener("click", function (e) {
          e.preventDefault();
          var t = e.target.getAttribute("data-product-id"),
            a = e.target.getAttribute("data-nonce");
          o.classList.add("opened"), o.classList.add("loading");
          e = new XMLHttpRequest();
          e.open("POST", botiga.ajaxurl, !0),
            e.setRequestHeader(
              "Content-type",
              "application/x-www-form-urlencoded"
            ),
            (e.onload = function () {
              var e;
              200 <= this.status &&
                this.status < 400 &&
                ((i.innerHTML = this.response),
                void 0 !==
                  (e = document.querySelector(
                    ".woocommerce-product-gallery"
                  )) &&
                  (e.dispatchEvent(new Event("wc-product-gallery-before-init")),
                  jQuery(e).wc_product_gallery(wc_single_product_params),
                  e.dispatchEvent(new Event("wc-product-gallery-after-init"))),
                (e = document.querySelector(
                  ".botiga-quick-view-summary .variations_form"
                )),
                "undefined" != typeof wc_add_to_cart_variation_params &&
                  jQuery(e).wc_variation_form(),
                botiga.qtyButton.init("quick-view"),
                botiga.wishList.init(),
                botiga.productSwatch.init(),
                o.classList.remove("loading"),
                window.dispatchEvent(
                  new Event("botiga.quickview.ajax.loaded")
                ));
            }),
            e.send(
              "action=botiga_quick_view_content&product_id=" + t + "&nonce=" + a
            );
        });
    },
    events: function () {
      var e = this;
      window.addEventListener("botiga.carousel.initialized", function () {
        e.build();
      });
    },
  }),
  (botiga.backToTop = {
    init: function () {
      this.backToTop(),
        window.addEventListener(
          "scroll",
          function () {
            this.backToTop();
          }.bind(this)
        );
    },
    backToTop: function () {
      var e = document.getElementsByClassName("back-to-top")[0];
      void 0 !== e &&
        (300 < window.scrollY
          ? e.classList.add("display")
          : e.classList.remove("display"),
        e.addEventListener("click", function () {
          window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
        }));
    },
  }),
  (botiga.qtyButton = {
    init: function (e) {
      this.events(e), this.wooEvents();
    },
    events: function (e) {
      var t = document.querySelectorAll(
        "form.cart .quantity, .botiga-quick-view-popup .quantity, .woocommerce-cart-form__cart-item.cart_item .quantity, .botiga-single-sticky-add-to-cart-wrapper-content .quantity"
      );
      if (
        (t =
          "quick-view" === e
            ? document.querySelectorAll(".botiga-quick-view-popup .quantity")
            : t).length < 1
      )
        return !1;
      for (var a = 0; a < t.length; a++) {
        if (t[a].classList.contains("hidden")) return !1;
        var o = t[a].querySelector(".botiga-quantity-plus"),
          i = t[a].querySelector(".botiga-quantity-minus");
        o.classList.add("show"),
          i.classList.add("show"),
          o.addEventListener("click", function (e) {
            var t = this.parentNode.querySelector(".qty"),
              a = document.createEvent("HTMLEvents");
            e.preventDefault(),
              (t.value = "" === t.value ? 0 : parseInt(t.value) + 1),
              a.initEvent("change", !0, !1),
              t.dispatchEvent(a);
          }),
          i.addEventListener("click", function (e) {
            var t = this.parentNode.querySelector(".qty"),
              a = document.createEvent("HTMLEvents");
            e.preventDefault(),
              (t.value = 0 < parseInt(t.value) ? parseInt(t.value) - 1 : 0),
              a.initEvent("change", !0, !1),
              t.dispatchEvent(a);
          });
      }
    },
    wooEvents: function () {
      var e = this;
      "undefined" != typeof jQuery &&
        jQuery("body").on("updated_cart_totals", function () {
          e.events();
        });
    },
  }),
  (botiga.carousel = {
    init: function () {
      this.build(), this.events();
    },
    build: function () {
      if (
        null === document.querySelector(".botiga-carousel") &&
        null === document.querySelector(".has-cross-sells-carousel") &&
        null ===
          document.querySelector(".botiga-woocommerce-mini-cart__cross-sell")
      )
        return !1;
      var e,
        t = _createForOfIteratorHelper(
          document.querySelectorAll(
            ".botiga-carousel, #masthead .cross-sells, .botiga-side-mini-cart .cross-sells, .cart-collaterals .cross-sells"
          )
        );
      try {
        for (t.s(); !(e = t.n()).done; ) {
          var a,
            o,
            i,
            n,
            r = e.value;
          null === r.querySelector(".botiga-carousel-stage") &&
            r.querySelector(".products").classList.add("botiga-carousel-stage"),
            "true" !== r.getAttribute("data-initialized") &&
              (null === (a = r.getAttribute("data-per-page")) &&
                0 <
                  r
                    .querySelector(".products")
                    .classList.value.indexOf("columns-4") &&
                (a = 4),
              (o = document.createElement("div")),
              (i = r.querySelector(".botiga-carousel-stage")),
              (o.className = "botiga-carousel-wrapper"),
              (o.innerHTML = i.outerHTML),
              i.remove(),
              r.append(o),
              (n = 30),
              "undefined" != typeof botiga_carousel
                ? (n = parseInt(botiga_carousel.margin_desktop))
                : null !==
                    r.closest(".botiga-woocommerce-mini-cart__cross-sell") &&
                  (n = 15),
              new Siema({
                parentSelector: r,
                selector: ".botiga-carousel-stage",
                duration: 200,
                easing: "ease-out",
                perPage: null !== a ? { 0: 1, 768: 2, 1025: parseInt(a) } : 2,
                startIndex: 0,
                draggable: !0,
                multipleDrag: !1,
                threshold: 20,
                loop: !0,
                rtl: !1,
                margin: n,
                onInit: function () {
                  window.dispatchEvent(
                    new Event("botiga.carousel.initialized")
                  );
                },
              }));
        }
      } catch (e) {
        t.e(e);
      } finally {
        t.f();
      }
    },
    events: function () {
      var a,
        o = this;
      "undefined" != typeof jQuery &&
        ((a = !0),
        jQuery(document.body).on(
          "wc_fragment_refresh added_to_cart removed_from_cart",
          function () {
            setTimeout(
              function () {
                var e = document.getElementById("site-header-cart"),
                  t = e.querySelector(".cart_list");
                null !== t &&
                  (2 < t.children.length
                    ? (e.classList.remove("mini-cart-has-no-scroll"),
                      e.classList.add("mini-cart-has-scroll"))
                    : (e.classList.remove("mini-cart-has-scroll"),
                      e.classList.add("mini-cart-has-no-scroll"))),
                  o.build(),
                  (a = !1);
              },
              a ? 1e3 : 0
            );
          }
        ));
    },
  }),
  (botiga.copyLinkToClipboard = {
    init: function (e, t) {
      e.preventDefault(),
        navigator.clipboard.writeText(window.location.href),
        t.classList.add("copied"),
        t.setAttribute(
          "data-botiga-tooltip",
          botiga.i18n.botiga_sharebox_copy_link_copied
        ),
        setTimeout(function () {
          t.setAttribute(
            "data-botiga-tooltip",
            botiga.i18n.botiga_sharebox_copy_link
          ),
            t.classList.remove("copied");
        }, 1e3);
    },
  }),
  (botiga.toggleClass = {
    init: function (e, t, a) {
      e.preventDefault(), e.stopPropagation();
      var o = document.querySelector(t.getAttribute("data-botiga-selector")),
        e = t.getAttribute("data-botiga-toggle-class-remove"),
        t = t.getAttribute("data-botiga-toggle-class"),
        o = o.classList;
      "string" == typeof e && o.remove(e),
        o.toggle(t),
        a &&
          ((t = document.createEvent("HTMLEvents")).initEvent(a, !0, !1),
          window.dispatchEvent(t));
    },
  }),
  (botiga.productSwatch = {
    init: function () {
      var e = document.querySelectorAll(".botiga-variations-wrapper");
      if (!e.length) return !1;
      for (var t = 0; t < e.length; t++) this.variations(e[t]);
      this.resetVariationsEvent();
    },
    variations: function (e) {
      for (
        var t,
          a = this,
          o = e.querySelector("select"),
          i = e.querySelectorAll(".botiga-variation-item"),
          n = 0;
        n < i.length;
        n++
      )
        o.value &&
          ((t = e.querySelector(
            '.botiga-variation-item[value="' + o.value + '"]'
          )).classList.add("active"),
          t.dispatchEvent(new Event("botiga.variations.selected"))),
          i[n].addEventListener("click", function (e) {
            e.preventDefault();
            e = this.getAttribute("value");
            jQuery(o).val(e).trigger("change"),
              a.removeActiveClass(this),
              this.classList.add("active"),
              a.matchVariations(this);
          }),
          i[n].addEventListener("botiga.variations.selected", function (e) {
            var t = this;
            setTimeout(function () {
              a.matchVariations(t);
            }, 300);
          });
    },
    matchVariations: function (e) {
      for (
        var t = e
            .closest(".variations")
            .querySelectorAll(".botiga-variations-wrapper"),
          a = [],
          o = 0;
        o < t.length;
        o++
      ) {
        for (
          var i = t[o].querySelectorAll(".botiga-variation-item"),
            n = t[o].querySelector("select").options,
            r = 0;
          r < n.length;
          r++
        )
          a.push(n[r].value);
        for (
          var a = a.filter(function (e) {
              return e;
            }),
            s = 0;
          s < i.length;
          s++
        )
          a.includes(i[s].getAttribute("value"))
            ? i[s].classList.remove("disabled")
            : i[s].classList.add("disabled");
      }
    },
    removeActiveClass: function (e) {
      for (
        var t =
            void 0 !== e
              ? e.closest("div").querySelectorAll(".botiga-variation-item")
              : document.querySelectorAll(
                  ".botiga-variations-wrapper .botiga-variation-item"
                ),
          a = 0;
        a < t.length;
        a++
      )
        t[a].classList.remove("active"), t[a].classList.remove("disabled");
    },
    resetVariationsEvent: function () {
      for (
        var e = this, t = document.querySelectorAll(".reset_variations"), a = 0;
        a < t.length;
        a++
      )
        t[a].addEventListener("click", function () {
          e.removeActiveClass(this);
        });
    },
  }),
  (botiga.collapse = {
    init: function () {
      var o = document.querySelectorAll("[data-botiga-collapse]");
      if (!o.length) return !1;
      for (var i = this, e = 0; e < o.length; e++) {
        var t = (function (t) {
          var e = o[t].getAttribute("data-botiga-collapse"),
            a = JSON.parse(e.replace(/'/g, '"').replace(";", ""));
          if (!a.enable) return { v: !1 };
          i.expand(o[t], a, !0),
            o[t].addEventListener("click", function (e) {
              e.preventDefault(),
                this.dispatchEvent(new Event("botiga.collapse.before.expand")),
                o[t].classList.contains("active")
                  ? i.collapse(o[t], a)
                  : i.expand(o[t], a),
                this.dispatchEvent(new Event("botiga.collapse.after.collapse"));
            }),
            a.options.oneAtTime &&
              o[t].addEventListener(
                "botiga.collapse.before.expand",
                function () {
                  for (
                    var e = document.querySelectorAll(
                        a.options.oneAtTimeParentSelector +
                          " [data-botiga-collapse]"
                      ),
                      t = 0;
                    t < e.length;
                    t++
                  )
                    i.collapseAll(e[t], a);
                }
              );
        })(e);
        if ("object" === _typeof(t)) return t.v;
      }
    },
    expand: function (e, t, a) {
      if (a && !e.classList.contains("active")) return !1;
      (a = t.id),
        (t = document.getElementById(a)),
        (a = t.querySelector(".botiga-collapse__content"));
      (t.style = "max-height: " + a.clientHeight + "px;"),
        e.classList.add("active"),
        t.classList.add("active"),
        e.dispatchEvent(new Event("botiga.collapse.expanded"));
    },
    collapse: function (e, t, a) {
      (t = t.id), (t = document.getElementById(t));
      (t.style = "max-height: 0px;"),
        e.classList.remove("active"),
        t.classList.remove("active"),
        e.dispatchEvent(new Event("botiga.collapse.collapsed"));
    },
    collapseAll: function (e, t) {
      e.classList.remove("active"),
        e.nextElementSibling.classList.remove("active"),
        (e.nextElementSibling.style = "max-height: 0px;");
    },
  }),
  (botiga.misc = {
    init: function () {
      this.wcExpressPayButtons(), this.checkout();
    },
    wcExpressPayButtons: function () {
      var e,
        t = document.querySelector("body.woocommerce-checkout"),
        a = document.querySelector("body.woocommerce-cart");
      if (
        null === document.querySelector("body.single-product") &&
        null === t &&
        null === a
      )
        return !1;
      "function" == typeof jQuery &&
        void 0 !==
          (e = jQuery)(
            "#wc-stripe-payment-request-button-separator, #wcpay-payment-request-wrapper"
          ).get(0) &&
        null === t &&
        (e(
          "#wc-stripe-payment-request-button-separator, #wcpay-payment-request-button-separator"
        ).appendTo("form.cart"),
        e(
          "#wc-stripe-payment-request-wrapper, #wcpay-payment-request-wrapper"
        ).appendTo("form.cart"),
        e(window).trigger("botiga.wcexpresspaybtns.appended"));
    },
    checkout: function () {
      if (null === document.querySelector("body.woocommerce-checkout"))
        return !1;
      "function" == typeof jQuery &&
        jQuery(document).on("updated_checkout", function () {
          null !==
            document.querySelector(
              "#order_review .woocommerce-shipping-totals > td"
            ) &&
            document
              .querySelector("#order_review .woocommerce-shipping-totals > td")
              .setAttribute("colspan", 2);
        });
    },
  }),
  botiga.helpers.botigaDomReady(function () {
    botiga.navigation.init(),
      botiga.desktopOffcanvasNav.init(),
      botiga.headerSearch.init(),
      botiga.customAddToCartButton.init(),
      botiga.wishList.init(),
      botiga.quickView.init(),
      botiga.stickyHeader.init(),
      botiga.scrollDirection.init(),
      botiga.backToTop.init(),
      botiga.qtyButton.init(),
      botiga.carousel.init(),
      botiga.productSwatch.init(),
      botiga.collapse.init(),
      botiga.misc.init();
  }),
  (window.onload = function () {
    document.querySelectorAll(".cart-count").length &&
      jQuery(document.body).trigger("wc_fragment_refresh");
  });
