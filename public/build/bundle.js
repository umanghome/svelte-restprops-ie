var app = (function () {
  'use strict';

  /* eslint-disable */

  /* jshint ignore:start */

  /**
   * Polyfill for Custom Elements v1
   * Source: https://cdnjs.cloudflare.com/ajax/libs/custom-elements/1.3.0/custom-elements.min.js
   */
  (function () {

    var n = window.Document.prototype.createElement,
        p = window.Document.prototype.createElementNS,
        aa = window.Document.prototype.importNode,
        ba = window.Document.prototype.prepend,
        ca = window.Document.prototype.append,
        da = window.DocumentFragment.prototype.prepend,
        ea = window.DocumentFragment.prototype.append,
        q = window.Node.prototype.cloneNode,
        r = window.Node.prototype.appendChild,
        t = window.Node.prototype.insertBefore,
        u = window.Node.prototype.removeChild,
        v = window.Node.prototype.replaceChild,
        x = Object.getOwnPropertyDescriptor(window.Node.prototype, 'textContent'),
        y = window.Element.prototype.attachShadow,
        z = Object.getOwnPropertyDescriptor(window.Element.prototype, 'innerHTML'),
        A = window.Element.prototype.getAttribute,
        B = window.Element.prototype.setAttribute,
        C = window.Element.prototype.removeAttribute,
        D = window.Element.prototype.getAttributeNS,
        E = window.Element.prototype.setAttributeNS,
        F = window.Element.prototype.removeAttributeNS,
        G = window.Element.prototype.insertAdjacentElement,
        fa = window.Element.prototype.insertAdjacentHTML,
        ha = window.Element.prototype.prepend,
        ia = window.Element.prototype.append,
        ja = window.Element.prototype.before,
        ka = window.Element.prototype.after,
        la = window.Element.prototype.replaceWith,
        ma = window.Element.prototype.remove,
        na = window.HTMLElement,
        H = Object.getOwnPropertyDescriptor(window.HTMLElement.prototype, 'innerHTML'),
        oa = window.HTMLElement.prototype.insertAdjacentElement,
        pa = window.HTMLElement.prototype.insertAdjacentHTML;
    var qa = new Set();
    'annotation-xml color-profile font-face font-face-src font-face-uri font-face-format font-face-name missing-glyph'.split(' ').forEach(function (a) {
      return qa.add(a);
    });

    function ra(a) {
      var b = qa.has(a);
      a = /^[a-z][.0-9_a-z]*-[\-.0-9_a-z]*$/.test(a);
      return !b && a;
    }

    var sa = document.contains ? document.contains.bind(document) : document.documentElement.contains.bind(document.documentElement);

    function I(a) {
      var b = a.isConnected;
      if (void 0 !== b) return b;
      if (sa(a)) return !0;

      for (; a && !(a.__CE_isImportDocument || a instanceof Document);) {
        a = a.parentNode || (window.ShadowRoot && a instanceof ShadowRoot ? a.host : void 0);
      }

      return !(!a || !(a.__CE_isImportDocument || a instanceof Document));
    }

    function J(a) {
      var b = a.children;
      if (b) return Array.prototype.slice.call(b);
      b = [];

      for (a = a.firstChild; a; a = a.nextSibling) {
        a.nodeType === Node.ELEMENT_NODE && b.push(a);
      }

      return b;
    }

    function K(a, b) {
      for (; b && b !== a && !b.nextSibling;) {
        b = b.parentNode;
      }

      return b && b !== a ? b.nextSibling : null;
    }

    function L(a, b, c) {
      for (var f = a; f;) {
        if (f.nodeType === Node.ELEMENT_NODE) {
          var d = f;
          b(d);
          var e = d.localName;

          if ('link' === e && 'import' === d.getAttribute('rel')) {
            f = d.import;
            void 0 === c && (c = new Set());
            if (f instanceof Node && !c.has(f)) for (c.add(f), f = f.firstChild; f; f = f.nextSibling) {
              L(f, b, c);
            }
            f = K(a, d);
            continue;
          } else if ('template' === e) {
            f = K(a, d);
            continue;
          }

          if (d = d.__CE_shadowRoot) for (d = d.firstChild; d; d = d.nextSibling) {
            L(d, b, c);
          }
        }

        f = f.firstChild ? f.firstChild : K(a, f);
      }
    }

    function M(a, b, c) {
      a[b] = c;
    }

    function ta(a) {
      var b = document;
      this.c = a;
      this.a = b;
      this.b = void 0;
      N(this.c, this.a);
      'loading' === this.a.readyState && (this.b = new MutationObserver(this.f.bind(this)), this.b.observe(this.a, {
        childList: !0,
        subtree: !0
      }));
    }

    function ua(a) {
      a.b && a.b.disconnect();
    }

    ta.prototype.f = function (a) {
      var b = this.a.readyState;
      'interactive' !== b && 'complete' !== b || ua(this);

      for (b = 0; b < a.length; b++) {
        for (var c = a[b].addedNodes, f = 0; f < c.length; f++) {
          N(this.c, c[f]);
        }
      }
    };

    function va() {
      var a = this;
      this.b = this.a = void 0;
      this.c = new Promise(function (b) {
        a.b = b;
        a.a && b(a.a);
      });
    }

    function wa(a) {
      if (a.a) throw Error('Already resolved.');
      a.a = void 0;
      a.b && a.b(void 0);
    }

    function O(a) {
      this.f = new Map();
      this.g = new Map();
      this.l = new Map();
      this.i = !1;
      this.b = a;
      this.j = new Map();

      this.c = function (b) {
        return b();
      };

      this.a = !1;
      this.h = [];
      this.m = a.f ? new ta(a) : void 0;
    }

    O.prototype.o = function (a, b) {
      var c = this;
      if (!(b instanceof Function)) throw new TypeError('Custom element constructor getters must be functions.');
      xa(this, a);
      this.f.set(a, b);
      this.h.push(a);
      this.a || (this.a = !0, this.c(function () {
        return ya(c);
      }));
    };

    O.prototype.define = function (a, b) {
      var c = this;
      if (!(b instanceof Function)) throw new TypeError('Custom element constructors must be functions.');
      xa(this, a);
      za(this, a, b);
      this.h.push(a);
      this.a || (this.a = !0, this.c(function () {
        return ya(c);
      }));
    };

    function xa(a, b) {
      if (!ra(b)) throw new SyntaxError("The element name '" + b + "' is not valid.");
      if (P(a, b)) throw Error("A custom element with name '" + b + "' has already been defined.");
      if (a.i) throw Error('A custom element is already being defined.');
    }

    function za(a, b, c) {
      a.i = !0;
      var f;

      try {
        var d = function d(m) {
          var w = e[m];
          if (void 0 !== w && !(w instanceof Function)) throw Error("The '" + m + "' callback must be a function.");
          return w;
        },
            e = c.prototype;

        if (!(e instanceof Object)) throw new TypeError("The custom element constructor's prototype is not an object.");
        var g = d('connectedCallback');
        var h = d('disconnectedCallback');
        var k = d('adoptedCallback');
        var l = (f = d('attributeChangedCallback')) && c.observedAttributes || [];
      } catch (m) {
        throw m;
      } finally {
        a.i = !1;
      }

      c = {
        localName: b,
        constructorFunction: c,
        connectedCallback: g,
        disconnectedCallback: h,
        adoptedCallback: k,
        attributeChangedCallback: f,
        observedAttributes: l,
        constructionStack: []
      };
      a.g.set(b, c);
      a.l.set(c.constructorFunction, c);
      return c;
    }

    O.prototype.upgrade = function (a) {
      N(this.b, a);
    };

    function ya(a) {
      if (!1 !== a.a) {
        a.a = !1;

        for (var b = [], c = a.h, f = new Map(), d = 0; d < c.length; d++) {
          f.set(c[d], []);
        }

        N(a.b, document, {
          upgrade: function upgrade(k) {
            if (void 0 === k.__CE_state) {
              var l = k.localName,
                  m = f.get(l);
              m ? m.push(k) : a.g.has(l) && b.push(k);
            }
          }
        });

        for (d = 0; d < b.length; d++) {
          Q(a.b, b[d]);
        }

        for (d = 0; d < c.length; d++) {
          for (var e = c[d], g = f.get(e), h = 0; h < g.length; h++) {
            Q(a.b, g[h]);
          }

          (e = a.j.get(e)) && wa(e);
        }

        c.length = 0;
      }
    }

    O.prototype.get = function (a) {
      if (a = P(this, a)) return a.constructorFunction;
    };

    O.prototype.whenDefined = function (a) {
      if (!ra(a)) return Promise.reject(new SyntaxError("'" + a + "' is not a valid custom element name."));
      var b = this.j.get(a);
      if (b) return b.c;
      b = new va();
      this.j.set(a, b);
      var c = this.g.has(a) || this.f.has(a);
      a = -1 === this.h.indexOf(a);
      c && a && wa(b);
      return b.c;
    };

    O.prototype.polyfillWrapFlushCallback = function (a) {
      this.m && ua(this.m);
      var b = this.c;

      this.c = function (c) {
        return a(function () {
          return b(c);
        });
      };
    };

    function P(a, b) {
      var c = a.g.get(b);
      if (c) return c;

      if (c = a.f.get(b)) {
        a.f.delete(b);

        try {
          return za(a, b, c());
        } catch (f) {
          R(f);
        }
      }
    }

    window.CustomElementRegistry = O;
    O.prototype.define = O.prototype.define;
    O.prototype.upgrade = O.prototype.upgrade;
    O.prototype.get = O.prototype.get;
    O.prototype.whenDefined = O.prototype.whenDefined;
    O.prototype.polyfillDefineLazy = O.prototype.o;
    O.prototype.polyfillWrapFlushCallback = O.prototype.polyfillWrapFlushCallback;

    function S() {
      var a = T && T.noDocumentConstructionObserver,
          b = T && T.shadyDomFastWalk;
      this.b = [];
      this.c = [];
      this.a = !1;
      this.shadyDomFastWalk = b;
      this.f = !a;
    }

    function U(a, b, c, f) {
      var d = window.ShadyDOM;

      if (a.shadyDomFastWalk && d && d.inUse) {
        if (b.nodeType === Node.ELEMENT_NODE && c(b), b.querySelectorAll) for (a = d.nativeMethods.querySelectorAll.call(b, '*'), b = 0; b < a.length; b++) {
          c(a[b]);
        }
      } else L(b, c, f);
    }

    function Aa(a, b) {
      a.a = !0;
      a.b.push(b);
    }

    function Ba(a, b) {
      a.a = !0;
      a.c.push(b);
    }

    function V(a, b) {
      a.a && U(a, b, function (c) {
        return W(a, c);
      });
    }

    function W(a, b) {
      if (a.a && !b.__CE_patched) {
        b.__CE_patched = !0;

        for (var c = 0; c < a.b.length; c++) {
          a.b[c](b);
        }

        for (c = 0; c < a.c.length; c++) {
          a.c[c](b);
        }
      }
    }

    function X(a, b) {
      var c = [];
      U(a, b, function (d) {
        return c.push(d);
      });

      for (b = 0; b < c.length; b++) {
        var f = c[b];
        1 === f.__CE_state ? a.connectedCallback(f) : Q(a, f);
      }
    }

    function Y(a, b) {
      var c = [];
      U(a, b, function (d) {
        return c.push(d);
      });

      for (b = 0; b < c.length; b++) {
        var f = c[b];
        1 === f.__CE_state && a.disconnectedCallback(f);
      }
    }

    function N(a, b, c) {
      c = void 0 === c ? {} : c;

      var f = c.s,
          d = c.upgrade || function (g) {
        return Q(a, g);
      },
          e = [];

      U(a, b, function (g) {
        a.a && W(a, g);

        if ('link' === g.localName && 'import' === g.getAttribute('rel')) {
          var h = g.import;
          h instanceof Node && (h.__CE_isImportDocument = !0, h.__CE_registry = document.__CE_registry);
          h && 'complete' === h.readyState ? h.__CE_documentLoadHandled = !0 : g.addEventListener('load', function () {
            var k = g.import;

            if (!k.__CE_documentLoadHandled) {
              k.__CE_documentLoadHandled = !0;
              var l = new Set();
              f && (f.forEach(function (m) {
                return l.add(m);
              }), l.delete(k));
              N(a, k, {
                s: l,
                upgrade: d
              });
            }
          });
        } else e.push(g);
      }, f);

      for (b = 0; b < e.length; b++) {
        d(e[b]);
      }
    }

    function Q(a, b) {
      try {
        var c = b.ownerDocument,
            f = c.__CE_registry;
        var d = f && (c.defaultView || c.__CE_isImportDocument) ? P(f, b.localName) : void 0;

        if (d && void 0 === b.__CE_state) {
          d.constructionStack.push(b);

          try {
            try {
              if (new d.constructorFunction() !== b) throw Error('The custom element constructor did not produce the element being upgraded.');
            } finally {
              d.constructionStack.pop();
            }
          } catch (k) {
            throw b.__CE_state = 2, k;
          }

          b.__CE_state = 1;
          b.__CE_definition = d;

          if (d.attributeChangedCallback && b.hasAttributes()) {
            var e = d.observedAttributes;

            for (d = 0; d < e.length; d++) {
              var g = e[d],
                  h = b.getAttribute(g);
              null !== h && a.attributeChangedCallback(b, g, null, h, null);
            }
          }

          I(b) && a.connectedCallback(b);
        }
      } catch (k) {
        R(k);
      }
    }

    S.prototype.connectedCallback = function (a) {
      var b = a.__CE_definition;
      if (b.connectedCallback) try {
        b.connectedCallback.call(a);
      } catch (c) {
        R(c);
      }
    };

    S.prototype.disconnectedCallback = function (a) {
      var b = a.__CE_definition;
      if (b.disconnectedCallback) try {
        b.disconnectedCallback.call(a);
      } catch (c) {
        R(c);
      }
    };

    S.prototype.attributeChangedCallback = function (a, b, c, f, d) {
      var e = a.__CE_definition;
      if (e.attributeChangedCallback && -1 < e.observedAttributes.indexOf(b)) try {
        e.attributeChangedCallback.call(a, b, c, f, d);
      } catch (g) {
        R(g);
      }
    };

    function Ca(a, b, c, f) {
      var d = b.__CE_registry;
      if (d && (null === f || 'http://www.w3.org/1999/xhtml' === f) && (d = P(d, c))) try {
        var e = new d.constructorFunction();
        if (void 0 === e.__CE_state || void 0 === e.__CE_definition) throw Error("Failed to construct '" + c + "': The returned value was not constructed with the HTMLElement constructor.");
        if ('http://www.w3.org/1999/xhtml' !== e.namespaceURI) throw Error("Failed to construct '" + c + "': The constructed element's namespace must be the HTML namespace.");
        if (e.hasAttributes()) throw Error("Failed to construct '" + c + "': The constructed element must not have any attributes.");
        if (null !== e.firstChild) throw Error("Failed to construct '" + c + "': The constructed element must not have any children.");
        if (null !== e.parentNode) throw Error("Failed to construct '" + c + "': The constructed element must not have a parent node.");
        if (e.ownerDocument !== b) throw Error("Failed to construct '" + c + "': The constructed element's owner document is incorrect.");
        if (e.localName !== c) throw Error("Failed to construct '" + c + "': The constructed element's local name is incorrect.");
        return e;
      } catch (g) {
        return R(g), b = null === f ? n.call(b, c) : p.call(b, f, c), Object.setPrototypeOf(b, HTMLUnknownElement.prototype), b.__CE_state = 2, b.__CE_definition = void 0, W(a, b), b;
      }
      b = null === f ? n.call(b, c) : p.call(b, f, c);
      W(a, b);
      return b;
    }

    function R(a) {
      var b = a.message,
          c = a.sourceURL || a.fileName || '',
          f = a.line || a.lineNumber || 0,
          d = a.column || a.columnNumber || 0,
          e = void 0;
      void 0 === ErrorEvent.prototype.initErrorEvent ? e = new ErrorEvent('error', {
        cancelable: !0,
        message: b,
        filename: c,
        lineno: f,
        colno: d,
        error: a
      }) : (e = document.createEvent('ErrorEvent'), e.initErrorEvent('error', !1, !0, b, c, f), e.preventDefault = function () {
        Object.defineProperty(this, 'defaultPrevented', {
          configurable: !0,
          get: function get() {
            return !0;
          }
        });
      });
      void 0 === e.error && Object.defineProperty(e, 'error', {
        configurable: !0,
        enumerable: !0,
        get: function get() {
          return a;
        }
      });
      window.dispatchEvent(e);
      e.defaultPrevented || console.error(a);
    }

    var Da = new function () {}();

    function Ea(a) {
      window.HTMLElement = function () {
        function b() {
          var c = this.constructor;

          var f = document.__CE_registry.l.get(c);

          if (!f) throw Error('Failed to construct a custom element: The constructor was not registered with `customElements`.');
          var d = f.constructionStack;
          if (0 === d.length) return d = n.call(document, f.localName), Object.setPrototypeOf(d, c.prototype), d.__CE_state = 1, d.__CE_definition = f, W(a, d), d;
          var e = d.length - 1,
              g = d[e];
          if (g === Da) throw Error("Failed to construct '" + f.localName + "': This element was already constructed.");
          d[e] = Da;
          Object.setPrototypeOf(g, c.prototype);
          W(a, g);
          return g;
        }

        b.prototype = na.prototype;
        Object.defineProperty(b.prototype, 'constructor', {
          writable: !0,
          configurable: !0,
          enumerable: !1,
          value: b
        });
        return b;
      }();
    }

    function Z(a, b, c) {
      function f(d) {
        return function (e) {
          for (var g = [], h = 0; h < arguments.length; ++h) {
            g[h] = arguments[h];
          }

          h = [];

          for (var k = [], l = 0; l < g.length; l++) {
            var m = g[l];
            m instanceof Element && I(m) && k.push(m);
            if (m instanceof DocumentFragment) for (m = m.firstChild; m; m = m.nextSibling) {
              h.push(m);
            } else h.push(m);
          }

          d.apply(this, g);

          for (g = 0; g < k.length; g++) {
            Y(a, k[g]);
          }

          if (I(this)) for (g = 0; g < h.length; g++) {
            k = h[g], k instanceof Element && X(a, k);
          }
        };
      }

      void 0 !== c.prepend && M(b, 'prepend', f(c.prepend));
      void 0 !== c.append && M(b, 'append', f(c.append));
    }

    function Fa(a) {
      M(Document.prototype, 'createElement', function (b) {
        return Ca(a, this, b, null);
      });
      M(Document.prototype, 'importNode', function (b, c) {
        b = aa.call(this, b, !!c);
        this.__CE_registry ? N(a, b) : V(a, b);
        return b;
      });
      M(Document.prototype, 'createElementNS', function (b, c) {
        return Ca(a, this, c, b);
      });
      Z(a, Document.prototype, {
        prepend: ba,
        append: ca
      });
    }

    function Ga(a) {
      function b(c, f) {
        Object.defineProperty(c, 'textContent', {
          enumerable: f.enumerable,
          configurable: !0,
          get: f.get,
          set: function set(d) {
            if (this.nodeType === Node.TEXT_NODE) f.set.call(this, d);else {
              var e = void 0;

              if (this.firstChild) {
                var g = this.childNodes,
                    h = g.length;

                if (0 < h && I(this)) {
                  e = Array(h);

                  for (var k = 0; k < h; k++) {
                    e[k] = g[k];
                  }
                }
              }

              f.set.call(this, d);
              if (e) for (d = 0; d < e.length; d++) {
                Y(a, e[d]);
              }
            }
          }
        });
      }

      M(Node.prototype, 'insertBefore', function (c, f) {
        if (c instanceof DocumentFragment) {
          var d = J(c);
          c = t.call(this, c, f);
          if (I(this)) for (f = 0; f < d.length; f++) {
            X(a, d[f]);
          }
          return c;
        }

        d = c instanceof Element && I(c);
        f = t.call(this, c, f);
        d && Y(a, c);
        I(this) && X(a, c);
        return f;
      });
      M(Node.prototype, 'appendChild', function (c) {
        if (c instanceof DocumentFragment) {
          var f = J(c);
          c = r.call(this, c);
          if (I(this)) for (var d = 0; d < f.length; d++) {
            X(a, f[d]);
          }
          return c;
        }

        f = c instanceof Element && I(c);
        d = r.call(this, c);
        f && Y(a, c);
        I(this) && X(a, c);
        return d;
      });
      M(Node.prototype, 'cloneNode', function (c) {
        c = q.call(this, !!c);
        this.ownerDocument.__CE_registry ? N(a, c) : V(a, c);
        return c;
      });
      M(Node.prototype, 'removeChild', function (c) {
        var f = c instanceof Element && I(c),
            d = u.call(this, c);
        f && Y(a, c);
        return d;
      });
      M(Node.prototype, 'replaceChild', function (c, f) {
        if (c instanceof DocumentFragment) {
          var d = J(c);
          c = v.call(this, c, f);
          if (I(this)) for (Y(a, f), f = 0; f < d.length; f++) {
            X(a, d[f]);
          }
          return c;
        }

        d = c instanceof Element && I(c);
        var e = v.call(this, c, f),
            g = I(this);
        g && Y(a, f);
        d && Y(a, c);
        g && X(a, c);
        return e;
      });
      x && x.get ? b(Node.prototype, x) : Aa(a, function (c) {
        b(c, {
          enumerable: !0,
          configurable: !0,
          get: function get() {
            for (var f = [], d = this.firstChild; d; d = d.nextSibling) {
              d.nodeType !== Node.COMMENT_NODE && f.push(d.textContent);
            }

            return f.join('');
          },
          set: function set(f) {
            for (; this.firstChild;) {
              u.call(this, this.firstChild);
            }

            null != f && '' !== f && r.call(this, document.createTextNode(f));
          }
        });
      });
    }

    function Ha(a) {
      function b(f) {
        return function (d) {
          for (var e = [], g = 0; g < arguments.length; ++g) {
            e[g] = arguments[g];
          }

          g = [];

          for (var h = [], k = 0; k < e.length; k++) {
            var l = e[k];
            l instanceof Element && I(l) && h.push(l);
            if (l instanceof DocumentFragment) for (l = l.firstChild; l; l = l.nextSibling) {
              g.push(l);
            } else g.push(l);
          }

          f.apply(this, e);

          for (e = 0; e < h.length; e++) {
            Y(a, h[e]);
          }

          if (I(this)) for (e = 0; e < g.length; e++) {
            h = g[e], h instanceof Element && X(a, h);
          }
        };
      }

      var c = Element.prototype;
      void 0 !== ja && M(c, 'before', b(ja));
      void 0 !== ka && M(c, 'after', b(ka));
      void 0 !== la && M(c, 'replaceWith', function (f) {
        for (var d = [], e = 0; e < arguments.length; ++e) {
          d[e] = arguments[e];
        }

        e = [];

        for (var g = [], h = 0; h < d.length; h++) {
          var k = d[h];
          k instanceof Element && I(k) && g.push(k);
          if (k instanceof DocumentFragment) for (k = k.firstChild; k; k = k.nextSibling) {
            e.push(k);
          } else e.push(k);
        }

        h = I(this);
        la.apply(this, d);

        for (d = 0; d < g.length; d++) {
          Y(a, g[d]);
        }

        if (h) for (Y(a, this), d = 0; d < e.length; d++) {
          g = e[d], g instanceof Element && X(a, g);
        }
      });
      void 0 !== ma && M(c, 'remove', function () {
        var f = I(this);
        ma.call(this);
        f && Y(a, this);
      });
    }

    function Ia(a) {
      function b(d, e) {
        Object.defineProperty(d, 'innerHTML', {
          enumerable: e.enumerable,
          configurable: !0,
          get: e.get,
          set: function set(g) {
            var h = this,
                k = void 0;
            I(this) && (k = [], U(a, this, function (w) {
              w !== h && k.push(w);
            }));
            e.set.call(this, g);
            if (k) for (var l = 0; l < k.length; l++) {
              var m = k[l];
              1 === m.__CE_state && a.disconnectedCallback(m);
            }
            this.ownerDocument.__CE_registry ? N(a, this) : V(a, this);
            return g;
          }
        });
      }

      function c(d, e) {
        M(d, 'insertAdjacentElement', function (g, h) {
          var k = I(h);
          g = e.call(this, g, h);
          k && Y(a, h);
          I(g) && X(a, h);
          return g;
        });
      }

      function f(d, e) {
        function g(h, k) {
          for (var l = []; h !== k; h = h.nextSibling) {
            l.push(h);
          }

          for (k = 0; k < l.length; k++) {
            N(a, l[k]);
          }
        }

        M(d, 'insertAdjacentHTML', function (h, k) {
          h = h.toLowerCase();

          if ('beforebegin' === h) {
            var l = this.previousSibling;
            e.call(this, h, k);
            g(l || this.parentNode.firstChild, this);
          } else if ('afterbegin' === h) l = this.firstChild, e.call(this, h, k), g(this.firstChild, l);else if ('beforeend' === h) l = this.lastChild, e.call(this, h, k), g(l || this.firstChild, null);else if ('afterend' === h) l = this.nextSibling, e.call(this, h, k), g(this.nextSibling, l);else throw new SyntaxError('The value provided (' + String(h) + ") is not one of 'beforebegin', 'afterbegin', 'beforeend', or 'afterend'.");
        });
      }

      y && M(Element.prototype, 'attachShadow', function (d) {
        d = y.call(this, d);

        if (a.a && !d.__CE_patched) {
          d.__CE_patched = !0;

          for (var e = 0; e < a.b.length; e++) {
            a.b[e](d);
          }
        }

        return this.__CE_shadowRoot = d;
      });
      z && z.get ? b(Element.prototype, z) : H && H.get ? b(HTMLElement.prototype, H) : Ba(a, function (d) {
        b(d, {
          enumerable: !0,
          configurable: !0,
          get: function get() {
            return q.call(this, !0).innerHTML;
          },
          set: function set(e) {
            var g = 'template' === this.localName,
                h = g ? this.content : this,
                k = p.call(document, this.namespaceURI, this.localName);

            for (k.innerHTML = e; 0 < h.childNodes.length;) {
              u.call(h, h.childNodes[0]);
            }

            for (e = g ? k.content : k; 0 < e.childNodes.length;) {
              r.call(h, e.childNodes[0]);
            }
          }
        });
      });
      M(Element.prototype, 'setAttribute', function (d, e) {
        if (1 !== this.__CE_state) return B.call(this, d, e);
        var g = A.call(this, d);
        B.call(this, d, e);
        e = A.call(this, d);
        a.attributeChangedCallback(this, d, g, e, null);
      });
      M(Element.prototype, 'setAttributeNS', function (d, e, g) {
        if (1 !== this.__CE_state) return E.call(this, d, e, g);
        var h = D.call(this, d, e);
        E.call(this, d, e, g);
        g = D.call(this, d, e);
        a.attributeChangedCallback(this, e, h, g, d);
      });
      M(Element.prototype, 'removeAttribute', function (d) {
        if (1 !== this.__CE_state) return C.call(this, d);
        var e = A.call(this, d);
        C.call(this, d);
        null !== e && a.attributeChangedCallback(this, d, e, null, null);
      });
      M(Element.prototype, 'removeAttributeNS', function (d, e) {
        if (1 !== this.__CE_state) return F.call(this, d, e);
        var g = D.call(this, d, e);
        F.call(this, d, e);
        var h = D.call(this, d, e);
        g !== h && a.attributeChangedCallback(this, e, g, h, d);
      });
      oa ? c(HTMLElement.prototype, oa) : G ? c(Element.prototype, G) : console.warn('Custom Elements: `Element#insertAdjacentElement` was not patched.');
      pa ? f(HTMLElement.prototype, pa) : fa ? f(Element.prototype, fa) : console.warn('Custom Elements: `Element#insertAdjacentHTML` was not patched.');
      Z(a, Element.prototype, {
        prepend: ha,
        append: ia
      });
      Ha(a);
    }

    var T = window.customElements;

    function Ja() {
      var a = new S();
      Ea(a);
      Fa(a);
      Z(a, DocumentFragment.prototype, {
        prepend: da,
        append: ea
      });
      Ga(a);
      Ia(a);
      a = new O(a);
      document.__CE_registry = a;
      Object.defineProperty(window, 'customElements', {
        configurable: !0,
        enumerable: !0,
        value: a
      });
    }

    T && !T.forcePolyfill && 'function' == typeof T.define && 'function' == typeof T.get || Ja();
    window.__CE_installPolyfill = Ja;
  }).call(self);
  /* jshint ignore:end */

  /* eslint-enable */

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  function _assertThisInitialized(self) {
    if (self === void 0) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }

    return self;
  }

  function _setPrototypeOf(o, p) {
    _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
      o.__proto__ = p;
      return o;
    };

    return _setPrototypeOf(o, p);
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

  function _typeof(obj) {
    "@babel/helpers - typeof";

    if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
      _typeof = function _typeof(obj) {
        return typeof obj;
      };
    } else {
      _typeof = function _typeof(obj) {
        return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
      };
    }

    return _typeof(obj);
  }

  function _possibleConstructorReturn(self, call) {
    if (call && (_typeof(call) === "object" || typeof call === "function")) {
      return call;
    }

    return _assertThisInitialized(self);
  }

  function _getPrototypeOf(o) {
    _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
      return o.__proto__ || Object.getPrototypeOf(o);
    };
    return _getPrototypeOf(o);
  }

  function _arrayWithHoles(arr) {
    if (Array.isArray(arr)) return arr;
  }

  function _iterableToArrayLimit(arr, i) {
    if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return;
    var _arr = [];
    var _n = true;
    var _d = false;
    var _e = undefined;

    try {
      for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
        _arr.push(_s.value);

        if (i && _arr.length === i) break;
      }
    } catch (err) {
      _d = true;
      _e = err;
    } finally {
      try {
        if (!_n && _i["return"] != null) _i["return"]();
      } finally {
        if (_d) throw _e;
      }
    }

    return _arr;
  }

  function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;

    for (var i = 0, arr2 = new Array(len); i < len; i++) {
      arr2[i] = arr[i];
    }

    return arr2;
  }

  function _unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(n);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
  }

  function _nonIterableRest() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }

  function _slicedToArray(arr, i) {
    return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
  }

  function _arrayWithoutHoles(arr) {
    if (Array.isArray(arr)) return _arrayLikeToArray(arr);
  }

  function _iterableToArray(iter) {
    if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter);
  }

  function _nonIterableSpread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }

  function _toConsumableArray(arr) {
    return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
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

  function noop() {}

  function assign(tar, src) {
    // @ts-ignore
    for (var k in src) {
      tar[k] = src[k];
    }

    return tar;
  }

  function run(fn) {
    return fn();
  }

  function blank_object() {
    return Object.create(null);
  }

  function run_all(fns) {
    fns.forEach(run);
  }

  function is_function(thing) {
    return typeof thing === 'function';
  }

  function safe_not_equal(a, b) {
    return a != a ? b == b : a !== b || a && _typeof(a) === 'object' || typeof a === 'function';
  }

  function create_slot(definition, ctx, $$scope, fn) {
    if (definition) {
      var slot_ctx = get_slot_context(definition, ctx, $$scope, fn);
      return definition[0](slot_ctx);
    }
  }

  function get_slot_context(definition, ctx, $$scope, fn) {
    return definition[1] && fn ? assign($$scope.ctx.slice(), definition[1](fn(ctx))) : $$scope.ctx;
  }

  function get_slot_changes(definition, $$scope, dirty, fn) {
    if (definition[2] && fn) {
      var lets = definition[2](fn(dirty));

      if ($$scope.dirty === undefined) {
        return lets;
      }

      if (_typeof(lets) === 'object') {
        var merged = [];
        var len = Math.max($$scope.dirty.length, lets.length);

        for (var i = 0; i < len; i += 1) {
          merged[i] = $$scope.dirty[i] | lets[i];
        }

        return merged;
      }

      return $$scope.dirty | lets;
    }

    return $$scope.dirty;
  }

  function exclude_internal_props(props) {
    var result = {};

    for (var k in props) {
      if (k[0] !== '$') result[k] = props[k];
    }

    return result;
  }

  function compute_rest_props(props, keys) {
    var rest = {};
    keys = new Set(keys);

    for (var k in props) {
      if (!keys.has(k) && k[0] !== '$') rest[k] = props[k];
    }

    return rest;
  }

  function append(target, node) {
    target.appendChild(node);
  }

  function insert(target, node, anchor) {
    target.insertBefore(node, anchor || null);
  }

  function detach(node) {
    node.parentNode.removeChild(node);
  }

  function element(name) {
    return document.createElement(name);
  }

  function text(data) {
    return document.createTextNode(data);
  }

  function space() {
    return text(' ');
  }

  function listen(node, event, handler, options) {
    node.addEventListener(event, handler, options);
    return function () {
      return node.removeEventListener(event, handler, options);
    };
  }

  function attr(node, attribute, value) {
    if (value == null) node.removeAttribute(attribute);else if (node.getAttribute(attribute) !== value) node.setAttribute(attribute, value);
  }

  function set_attributes(node, attributes) {
    // @ts-ignore
    var descriptors = Object.getOwnPropertyDescriptors(node.__proto__);

    for (var key in attributes) {
      if (attributes[key] == null) {
        node.removeAttribute(key);
      } else if (key === 'style') {
        node.style.cssText = attributes[key];
      } else if (key === '__value' || descriptors[key] && descriptors[key].set) {
        node[key] = attributes[key];
      } else {
        attr(node, key, attributes[key]);
      }
    }
  }

  function children(element) {
    return Array.from(element.childNodes);
  }

  var current_component;

  function set_current_component(component) {
    current_component = component;
  }
  // shorthand events, or if we want to implement
  // a real bubbling mechanism


  function bubble(component, event) {
    var callbacks = component.$$.callbacks[event.type];

    if (callbacks) {
      callbacks.slice().forEach(function (fn) {
        return fn(event);
      });
    }
  }

  var dirty_components = [];
  var binding_callbacks = [];
  var render_callbacks = [];
  var flush_callbacks = [];
  var resolved_promise = Promise.resolve();
  var update_scheduled = false;

  function schedule_update() {
    if (!update_scheduled) {
      update_scheduled = true;
      resolved_promise.then(flush);
    }
  }

  function add_render_callback(fn) {
    render_callbacks.push(fn);
  }

  var flushing = false;
  var seen_callbacks = new Set();

  function flush() {
    if (flushing) return;
    flushing = true;

    do {
      // first, call beforeUpdate functions
      // and update components
      for (var i = 0; i < dirty_components.length; i += 1) {
        var component = dirty_components[i];
        set_current_component(component);
        update(component.$$);
      }

      dirty_components.length = 0;

      while (binding_callbacks.length) {
        binding_callbacks.pop()();
      } // then, once components are updated, call
      // afterUpdate functions. This may cause
      // subsequent updates...


      for (var _i = 0; _i < render_callbacks.length; _i += 1) {
        var callback = render_callbacks[_i];

        if (!seen_callbacks.has(callback)) {
          // ...so guard against infinite loops
          seen_callbacks.add(callback);
          callback();
        }
      }

      render_callbacks.length = 0;
    } while (dirty_components.length);

    while (flush_callbacks.length) {
      flush_callbacks.pop()();
    }

    update_scheduled = false;
    flushing = false;
    seen_callbacks.clear();
  }

  function update($$) {
    if ($$.fragment !== null) {
      $$.update();
      run_all($$.before_update);
      var dirty = $$.dirty;
      $$.dirty = [-1];
      $$.fragment && $$.fragment.p($$.ctx, dirty);
      $$.after_update.forEach(add_render_callback);
    }
  }

  var outroing = new Set();
  var outros;

  function transition_in(block, local) {
    if (block && block.i) {
      outroing.delete(block);
      block.i(local);
    }
  }

  function transition_out(block, local, detach, callback) {
    if (block && block.o) {
      if (outroing.has(block)) return;
      outroing.add(block);
      outros.c.push(function () {
        outroing.delete(block);

        if (callback) {
          if (detach) block.d(1);
          callback();
        }
      });
      block.o(local);
    }
  }

  function get_spread_update(levels, updates) {
    var update = {};
    var to_null_out = {};
    var accounted_for = {
      $$scope: 1
    };
    var i = levels.length;

    while (i--) {
      var o = levels[i];
      var n = updates[i];

      if (n) {
        for (var key in o) {
          if (!(key in n)) to_null_out[key] = 1;
        }

        for (var _key3 in n) {
          if (!accounted_for[_key3]) {
            update[_key3] = n[_key3];
            accounted_for[_key3] = 1;
          }
        }

        levels[i] = n;
      } else {
        for (var _key4 in o) {
          accounted_for[_key4] = 1;
        }
      }
    }

    for (var _key5 in to_null_out) {
      if (!(_key5 in update)) update[_key5] = undefined;
    }

    return update;
  }

  function create_component(block) {
    block && block.c();
  }

  function mount_component(component, target, anchor) {
    var _component$$$ = component.$$,
        fragment = _component$$$.fragment,
        on_mount = _component$$$.on_mount,
        on_destroy = _component$$$.on_destroy,
        after_update = _component$$$.after_update;
    fragment && fragment.m(target, anchor); // onMount happens before the initial afterUpdate

    add_render_callback(function () {
      var new_on_destroy = on_mount.map(run).filter(is_function);

      if (on_destroy) {
        on_destroy.push.apply(on_destroy, _toConsumableArray(new_on_destroy));
      } else {
        // Edge case - component was destroyed immediately,
        // most likely as a result of a binding initialising
        run_all(new_on_destroy);
      }

      component.$$.on_mount = [];
    });
    after_update.forEach(add_render_callback);
  }

  function destroy_component(component, detaching) {
    var $$ = component.$$;

    if ($$.fragment !== null) {
      run_all($$.on_destroy);
      $$.fragment && $$.fragment.d(detaching); // TODO null out other refs, including component.$$ (but need to
      // preserve final state?)

      $$.on_destroy = $$.fragment = null;
      $$.ctx = [];
    }
  }

  function make_dirty(component, i) {
    if (component.$$.dirty[0] === -1) {
      dirty_components.push(component);
      schedule_update();
      component.$$.dirty.fill(0);
    }

    component.$$.dirty[i / 31 | 0] |= 1 << i % 31;
  }

  function init(component, options, instance, create_fragment, not_equal, props) {
    var dirty = arguments.length > 6 && arguments[6] !== undefined ? arguments[6] : [-1];
    var parent_component = current_component;
    set_current_component(component);
    var prop_values = options.props || {};
    var $$ = component.$$ = {
      fragment: null,
      ctx: null,
      // state
      props: props,
      update: noop,
      not_equal: not_equal,
      bound: blank_object(),
      // lifecycle
      on_mount: [],
      on_destroy: [],
      before_update: [],
      after_update: [],
      context: new Map(parent_component ? parent_component.$$.context : []),
      // everything else
      callbacks: blank_object(),
      dirty: dirty
    };
    var ready = false;
    $$.ctx = instance ? instance(component, prop_values, function (i, ret) {
      var value = (arguments.length <= 2 ? 0 : arguments.length - 2) ? arguments.length <= 2 ? undefined : arguments[2] : ret;

      if ($$.ctx && not_equal($$.ctx[i], $$.ctx[i] = value)) {
        if ($$.bound[i]) $$.bound[i](value);
        if (ready) make_dirty(component, i);
      }

      return ret;
    }) : [];
    $$.update();
    ready = true;
    run_all($$.before_update); // `false` as a special case of no DOM component

    $$.fragment = create_fragment ? create_fragment($$.ctx) : false;

    if (options.target) {
      if (options.hydrate) {
        var nodes = children(options.target); // eslint-disable-next-line @typescript-eslint/no-non-null-assertion

        $$.fragment && $$.fragment.l(nodes);
        nodes.forEach(detach);
      } else {
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        $$.fragment && $$.fragment.c();
      }

      if (options.intro) transition_in(component.$$.fragment);
      mount_component(component, options.target, options.anchor);
      flush();
    }

    set_current_component(parent_component);
  }

  var SvelteComponent = /*#__PURE__*/function () {
    function SvelteComponent() {
      _classCallCheck(this, SvelteComponent);
    }

    _createClass(SvelteComponent, [{
      key: "$destroy",
      value: function $destroy() {
        destroy_component(this, 1);
        this.$destroy = noop;
      }
    }, {
      key: "$on",
      value: function $on(type, callback) {
        var callbacks = this.$$.callbacks[type] || (this.$$.callbacks[type] = []);
        callbacks.push(callback);
        return function () {
          var index = callbacks.indexOf(callback);
          if (index !== -1) callbacks.splice(index, 1);
        };
      }
    }, {
      key: "$set",
      value: function $set() {// overridden by instance, if it has props
      }
    }]);

    return SvelteComponent;
  }();

  function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

  function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

  function create_fragment(ctx) {
    var button;
    var current;
    var dispose;
    var default_slot_template =
    /*$$slots*/
    ctx[3].default;
    var default_slot = create_slot(default_slot_template, ctx,
    /*$$scope*/
    ctx[2], null);
    return {
      c: function c() {
        button = element("button");
        if (default_slot) default_slot.c();
        attr(button, "type", "button");
        attr(button, "id",
        /*id*/
        ctx[0]);
        button.disabled =
        /*disabled*/
        ctx[1];
      },
      m: function m(target, anchor, remount) {
        insert(target, button, anchor);

        if (default_slot) {
          default_slot.m(button, null);
        }

        current = true;
        if (remount) dispose();
        dispose = listen(button, "click",
        /*click_handler*/
        ctx[4]);
      },
      p: function p(ctx, _ref) {
        var _ref2 = _slicedToArray(_ref, 1),
            dirty = _ref2[0];

        if (default_slot) {
          if (default_slot.p && dirty &
          /*$$scope*/
          4) {
            default_slot.p(get_slot_context(default_slot_template, ctx,
            /*$$scope*/
            ctx[2], null), get_slot_changes(default_slot_template,
            /*$$scope*/
            ctx[2], dirty, null));
          }
        }

        if (!current || dirty &
        /*id*/
        1) {
          attr(button, "id",
          /*id*/
          ctx[0]);
        }

        if (!current || dirty &
        /*disabled*/
        2) {
          button.disabled =
          /*disabled*/
          ctx[1];
        }
      },
      i: function i(local) {
        if (current) return;
        transition_in(default_slot, local);
        current = true;
      },
      o: function o(local) {
        transition_out(default_slot, local);
        current = false;
      },
      d: function d(detaching) {
        if (detaching) detach(button);
        if (default_slot) default_slot.d(detaching);
        dispose();
      }
    };
  }

  function instance($$self, $$props, $$invalidate) {
    var id = $$props.id;
    var _$$props$disabled = $$props.disabled,
        disabled = _$$props$disabled === void 0 ? false : _$$props$disabled;
    var _$$props$$$slots = $$props.$$slots,
        $$slots = _$$props$$$slots === void 0 ? {} : _$$props$$$slots,
        $$scope = $$props.$$scope;

    function click_handler(event) {
      bubble($$self, event);
    }

    $$self.$set = function ($$props) {
      if ("id" in $$props) $$invalidate(0, id = $$props.id);
      if ("disabled" in $$props) $$invalidate(1, disabled = $$props.disabled);
      if ("$$scope" in $$props) $$invalidate(2, $$scope = $$props.$$scope);
    };

    return [id, disabled, $$scope, $$slots, click_handler];
  }

  var Button = /*#__PURE__*/function (_SvelteComponent) {
    _inherits(Button, _SvelteComponent);

    var _super = _createSuper(Button);

    function Button(options) {
      var _this;

      _classCallCheck(this, Button);

      _this = _super.call(this);
      init(_assertThisInitialized(_this), options, instance, create_fragment, safe_not_equal, {
        id: 0,
        disabled: 1
      });
      return _this;
    }

    return Button;
  }(SvelteComponent);

  function _createSuper$1(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct$1()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

  function _isNativeReflectConstruct$1() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

  function create_fragment$1(ctx) {
    var button;
    var current;
    var dispose;
    var default_slot_template =
    /*$$slots*/
    ctx[4].default;
    var default_slot = create_slot(default_slot_template, ctx,
    /*$$scope*/
    ctx[3], null);
    var button_levels = [{
      type: "button"
    }, {
      id:
      /*id*/
      ctx[0]
    }, {
      disabled:
      /*disabled*/
      ctx[1]
    },
    /*$$restProps*/
    ctx[2]];
    var button_data = {};

    for (var i = 0; i < button_levels.length; i += 1) {
      button_data = assign(button_data, button_levels[i]);
    }

    return {
      c: function c() {
        button = element("button");
        if (default_slot) default_slot.c();
        set_attributes(button, button_data);
      },
      m: function m(target, anchor, remount) {
        insert(target, button, anchor);

        if (default_slot) {
          default_slot.m(button, null);
        }

        current = true;
        if (remount) dispose();
        dispose = listen(button, "click",
        /*click_handler*/
        ctx[5]);
      },
      p: function p(ctx, _ref) {
        var _ref2 = _slicedToArray(_ref, 1),
            dirty = _ref2[0];

        if (default_slot) {
          if (default_slot.p && dirty &
          /*$$scope*/
          8) {
            default_slot.p(get_slot_context(default_slot_template, ctx,
            /*$$scope*/
            ctx[3], null), get_slot_changes(default_slot_template,
            /*$$scope*/
            ctx[3], dirty, null));
          }
        }

        set_attributes(button, get_spread_update(button_levels, [{
          type: "button"
        }, dirty &
        /*id*/
        1 && {
          id:
          /*id*/
          ctx[0]
        }, dirty &
        /*disabled*/
        2 && {
          disabled:
          /*disabled*/
          ctx[1]
        }, dirty &
        /*$$restProps*/
        4 &&
        /*$$restProps*/
        ctx[2]]));
      },
      i: function i(local) {
        if (current) return;
        transition_in(default_slot, local);
        current = true;
      },
      o: function o(local) {
        transition_out(default_slot, local);
        current = false;
      },
      d: function d(detaching) {
        if (detaching) detach(button);
        if (default_slot) default_slot.d(detaching);
        dispose();
      }
    };
  }

  function instance$1($$self, $$props, $$invalidate) {
    var omit_props_names = ["id", "disabled"];
    var $$restProps = compute_rest_props($$props, omit_props_names);
    var _$$props = $$props,
        id = _$$props.id;
    var _$$props2 = $$props,
        _$$props2$disabled = _$$props2.disabled,
        disabled = _$$props2$disabled === void 0 ? false : _$$props2$disabled;
    var _$$props3 = $$props,
        _$$props3$$$slots = _$$props3.$$slots,
        $$slots = _$$props3$$$slots === void 0 ? {} : _$$props3$$$slots,
        $$scope = _$$props3.$$scope;

    function click_handler(event) {
      bubble($$self, event);
    }

    $$self.$set = function ($$new_props) {
      $$props = assign(assign({}, $$props), exclude_internal_props($$new_props));
      $$invalidate(2, $$restProps = compute_rest_props($$props, omit_props_names));
      if ("id" in $$new_props) $$invalidate(0, id = $$new_props.id);
      if ("disabled" in $$new_props) $$invalidate(1, disabled = $$new_props.disabled);
      if ("$$scope" in $$new_props) $$invalidate(3, $$scope = $$new_props.$$scope);
    };

    return [id, disabled, $$restProps, $$scope, $$slots, click_handler];
  }

  var ButtonWithRestProps = /*#__PURE__*/function (_SvelteComponent) {
    _inherits(ButtonWithRestProps, _SvelteComponent);

    var _super = _createSuper$1(ButtonWithRestProps);

    function ButtonWithRestProps(options) {
      var _this;

      _classCallCheck(this, ButtonWithRestProps);

      _this = _super.call(this);
      init(_assertThisInitialized(_this), options, instance$1, create_fragment$1, safe_not_equal, {
        id: 0,
        disabled: 1
      });
      return _this;
    }

    return ButtonWithRestProps;
  }(SvelteComponent);

  function _createSuper$2(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct$2()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

  function _isNativeReflectConstruct$2() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

  function create_fragment$2(ctx) {
    var button;
    var current;
    var dispose;
    var default_slot_template =
    /*$$slots*/
    ctx[4].default;
    var default_slot = create_slot(default_slot_template, ctx,
    /*$$scope*/
    ctx[3], null);
    var button_levels = [{
      type: "button"
    }, {
      id:
      /*id*/
      ctx[0]
    }, {
      disabled:
      /*disabled*/
      ctx[1]
    },
    /*attributes*/
    ctx[2]];
    var button_data = {};

    for (var i = 0; i < button_levels.length; i += 1) {
      button_data = assign(button_data, button_levels[i]);
    }

    return {
      c: function c() {
        button = element("button");
        if (default_slot) default_slot.c();
        set_attributes(button, button_data);
      },
      m: function m(target, anchor, remount) {
        insert(target, button, anchor);

        if (default_slot) {
          default_slot.m(button, null);
        }

        current = true;
        if (remount) dispose();
        dispose = listen(button, "click",
        /*click_handler*/
        ctx[5]);
      },
      p: function p(ctx, _ref) {
        var _ref2 = _slicedToArray(_ref, 1),
            dirty = _ref2[0];

        if (default_slot) {
          if (default_slot.p && dirty &
          /*$$scope*/
          8) {
            default_slot.p(get_slot_context(default_slot_template, ctx,
            /*$$scope*/
            ctx[3], null), get_slot_changes(default_slot_template,
            /*$$scope*/
            ctx[3], dirty, null));
          }
        }

        set_attributes(button, get_spread_update(button_levels, [{
          type: "button"
        }, dirty &
        /*id*/
        1 && {
          id:
          /*id*/
          ctx[0]
        }, dirty &
        /*disabled*/
        2 && {
          disabled:
          /*disabled*/
          ctx[1]
        }, dirty &
        /*attributes*/
        4 &&
        /*attributes*/
        ctx[2]]));
      },
      i: function i(local) {
        if (current) return;
        transition_in(default_slot, local);
        current = true;
      },
      o: function o(local) {
        transition_out(default_slot, local);
        current = false;
      },
      d: function d(detaching) {
        if (detaching) detach(button);
        if (default_slot) default_slot.d(detaching);
        dispose();
      }
    };
  }

  function instance$2($$self, $$props, $$invalidate) {
    var id = $$props.id;
    var _$$props$disabled = $$props.disabled,
        disabled = _$$props$disabled === void 0 ? false : _$$props$disabled;
    var _$$props$attributes = $$props.attributes,
        attributes = _$$props$attributes === void 0 ? {} : _$$props$attributes;
    var _$$props$$$slots = $$props.$$slots,
        $$slots = _$$props$$$slots === void 0 ? {} : _$$props$$$slots,
        $$scope = $$props.$$scope;

    function click_handler(event) {
      bubble($$self, event);
    }

    $$self.$set = function ($$props) {
      if ("id" in $$props) $$invalidate(0, id = $$props.id);
      if ("disabled" in $$props) $$invalidate(1, disabled = $$props.disabled);
      if ("attributes" in $$props) $$invalidate(2, attributes = $$props.attributes);
      if ("$$scope" in $$props) $$invalidate(3, $$scope = $$props.$$scope);
    };

    return [id, disabled, attributes, $$scope, $$slots, click_handler];
  }

  var ButtonWithSpreadAttributes = /*#__PURE__*/function (_SvelteComponent) {
    _inherits(ButtonWithSpreadAttributes, _SvelteComponent);

    var _super = _createSuper$2(ButtonWithSpreadAttributes);

    function ButtonWithSpreadAttributes(options) {
      var _this;

      _classCallCheck(this, ButtonWithSpreadAttributes);

      _this = _super.call(this);
      init(_assertThisInitialized(_this), options, instance$2, create_fragment$2, safe_not_equal, {
        id: 0,
        disabled: 1,
        attributes: 2
      });
      return _this;
    }

    return ButtonWithSpreadAttributes;
  }(SvelteComponent);

  function _createSuper$3(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct$3()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

  function _isNativeReflectConstruct$3() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

  function create_default_slot_2(ctx) {
    var t;
    return {
      c: function c() {
        t = text("This is a regular button");
      },
      m: function m(target, anchor) {
        insert(target, t, anchor);
      },
      d: function d(detaching) {
        if (detaching) detach(t);
      }
    };
  } // (21:1) <ButtonWithRestProps   {disabled}   id="my-button"   method="random"  >


  function create_default_slot_1(ctx) {
    var t;
    return {
      c: function c() {
        t = text("This is a button with $$restProps");
      },
      m: function m(target, anchor) {
        insert(target, t, anchor);
      },
      d: function d(detaching) {
        if (detaching) detach(t);
      }
    };
  } // (27:1) <ButtonWithSpreadAttributes   {disabled}   id="my-button"   attributes={{ method: 'random' }}  >


  function create_default_slot(ctx) {
    var t;
    return {
      c: function c() {
        t = text("This is a button with spread attributes props");
      },
      m: function m(target, anchor) {
        insert(target, t, anchor);
      },
      d: function d(detaching) {
        if (detaching) detach(t);
      }
    };
  }

  function create_fragment$3(ctx) {
    var main;
    var div;
    var input;
    var t0;
    var label;
    var t2;
    var t3;
    var t4;
    var current;
    var dispose;
    var button = new Button({
      props: {
        disabled:
        /*disabled*/
        ctx[0],
        id: "my-button",
        method: "random",
        $$slots: {
          default: [create_default_slot_2]
        },
        $$scope: {
          ctx: ctx
        }
      }
    });
    var buttonwithrestprops = new ButtonWithRestProps({
      props: {
        disabled:
        /*disabled*/
        ctx[0],
        id: "my-button",
        method: "random",
        $$slots: {
          default: [create_default_slot_1]
        },
        $$scope: {
          ctx: ctx
        }
      }
    });
    var buttonwithspreadattributes = new ButtonWithSpreadAttributes({
      props: {
        disabled:
        /*disabled*/
        ctx[0],
        id: "my-button",
        attributes: {
          method: "random"
        },
        $$slots: {
          default: [create_default_slot]
        },
        $$scope: {
          ctx: ctx
        }
      }
    });
    return {
      c: function c() {
        main = element("main");
        div = element("div");
        input = element("input");
        t0 = space();
        label = element("label");
        label.textContent = "Disabled?";
        t2 = space();
        create_component(button.$$.fragment);
        t3 = space();
        create_component(buttonwithrestprops.$$.fragment);
        t4 = space();
        create_component(buttonwithspreadattributes.$$.fragment);
        attr(input, "type", "checkbox");
        attr(input, "id", "disabled-checkbox");
        attr(label, "for", "disabled-checkbox");
        attr(label, "class", "svelte-3poekp");
      },
      m: function m(target, anchor, remount) {
        insert(target, main, anchor);
        append(main, div);
        append(div, input);
        input.checked =
        /*disabled*/
        ctx[0];
        append(div, t0);
        append(div, label);
        append(main, t2);
        mount_component(button, main, null);
        append(main, t3);
        mount_component(buttonwithrestprops, main, null);
        append(main, t4);
        mount_component(buttonwithspreadattributes, main, null);
        current = true;
        if (remount) dispose();
        dispose = listen(input, "change",
        /*input_change_handler*/
        ctx[1]);
      },
      p: function p(ctx, _ref) {
        var _ref2 = _slicedToArray(_ref, 1),
            dirty = _ref2[0];

        if (dirty &
        /*disabled*/
        1) {
          input.checked =
          /*disabled*/
          ctx[0];
        }

        var button_changes = {};
        if (dirty &
        /*disabled*/
        1) button_changes.disabled =
        /*disabled*/
        ctx[0];

        if (dirty &
        /*$$scope*/
        4) {
          button_changes.$$scope = {
            dirty: dirty,
            ctx: ctx
          };
        }

        button.$set(button_changes);
        var buttonwithrestprops_changes = {};
        if (dirty &
        /*disabled*/
        1) buttonwithrestprops_changes.disabled =
        /*disabled*/
        ctx[0];

        if (dirty &
        /*$$scope*/
        4) {
          buttonwithrestprops_changes.$$scope = {
            dirty: dirty,
            ctx: ctx
          };
        }

        buttonwithrestprops.$set(buttonwithrestprops_changes);
        var buttonwithspreadattributes_changes = {};
        if (dirty &
        /*disabled*/
        1) buttonwithspreadattributes_changes.disabled =
        /*disabled*/
        ctx[0];

        if (dirty &
        /*$$scope*/
        4) {
          buttonwithspreadattributes_changes.$$scope = {
            dirty: dirty,
            ctx: ctx
          };
        }

        buttonwithspreadattributes.$set(buttonwithspreadattributes_changes);
      },
      i: function i(local) {
        if (current) return;
        transition_in(button.$$.fragment, local);
        transition_in(buttonwithrestprops.$$.fragment, local);
        transition_in(buttonwithspreadattributes.$$.fragment, local);
        current = true;
      },
      o: function o(local) {
        transition_out(button.$$.fragment, local);
        transition_out(buttonwithrestprops.$$.fragment, local);
        transition_out(buttonwithspreadattributes.$$.fragment, local);
        current = false;
      },
      d: function d(detaching) {
        if (detaching) detach(main);
        destroy_component(button);
        destroy_component(buttonwithrestprops);
        destroy_component(buttonwithspreadattributes);
        dispose();
      }
    };
  }

  function instance$3($$self, $$props, $$invalidate) {
    var disabled = false;

    function input_change_handler() {
      disabled = this.checked;
      $$invalidate(0, disabled);
    }

    return [disabled, input_change_handler];
  }

  var App = /*#__PURE__*/function (_SvelteComponent) {
    _inherits(App, _SvelteComponent);

    var _super = _createSuper$3(App);

    function App(options) {
      var _this;

      _classCallCheck(this, App);

      _this = _super.call(this);
      init(_assertThisInitialized(_this), options, instance$3, create_fragment$3, safe_not_equal, {});
      return _this;
    }

    return App;
  }(SvelteComponent);

  var app = new App({
    target: document.body,
    props: {
      name: 'world'
    }
  });

  return app;

}());
//# sourceMappingURL=bundle.js.map
