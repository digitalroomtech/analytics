'use strict';
var xu = Object.create;
var Ur = Object.defineProperty;
var bu = Object.getOwnPropertyDescriptor;
var wu = Object.getOwnPropertyNames;
var Eu = Object.getPrototypeOf,
  Pu = Object.prototype.hasOwnProperty;
var K = (e, t) => () => (t || e((t = { exports: {} }).exports, t), t.exports),
  Pt = (e, t) => {
    for (var r in t) Ur(e, r, { get: t[r], enumerable: !0 });
  },
  No = (e, t, r, n) => {
    if ((t && typeof t == 'object') || typeof t == 'function')
      for (let i of wu(t))
        !Pu.call(e, i) &&
          i !== r &&
          Ur(e, i, { get: () => t[i], enumerable: !(n = bu(t, i)) || n.enumerable });
    return e;
  };
var I = (e, t, r) => (
    (r = e != null ? xu(Eu(e)) : {}),
    No(t || !e || !e.__esModule ? Ur(r, 'default', { value: e, enumerable: !0 }) : r, e)
  ),
  vu = (e) => No(Ur({}, '__esModule', { value: !0 }), e);
var Go = K((Lf, Qo) => {
  'use strict';
  var vt = 1e3,
    Tt = vt * 60,
    Ct = Tt * 60,
    ut = Ct * 24,
    Tu = ut * 7,
    Cu = ut * 365.25;
  Qo.exports = function (e, t) {
    t = t || {};
    var r = typeof e;
    if (r === 'string' && e.length > 0) return _u(e);
    if (r === 'number' && isFinite(e)) return t.long ? Ru(e) : Au(e);
    throw new Error('val is not a non-empty string or a valid number. val=' + JSON.stringify(e));
  };
  function _u(e) {
    if (((e = String(e)), !(e.length > 100))) {
      var t =
        /^(-?(?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|weeks?|w|years?|yrs?|y)?$/i.exec(
          e,
        );
      if (t) {
        var r = parseFloat(t[1]),
          n = (t[2] || 'ms').toLowerCase();
        switch (n) {
          case 'years':
          case 'year':
          case 'yrs':
          case 'yr':
          case 'y':
            return r * Cu;
          case 'weeks':
          case 'week':
          case 'w':
            return r * Tu;
          case 'days':
          case 'day':
          case 'd':
            return r * ut;
          case 'hours':
          case 'hour':
          case 'hrs':
          case 'hr':
          case 'h':
            return r * Ct;
          case 'minutes':
          case 'minute':
          case 'mins':
          case 'min':
          case 'm':
            return r * Tt;
          case 'seconds':
          case 'second':
          case 'secs':
          case 'sec':
          case 's':
            return r * vt;
          case 'milliseconds':
          case 'millisecond':
          case 'msecs':
          case 'msec':
          case 'ms':
            return r;
          default:
            return;
        }
      }
    }
  }
  function Au(e) {
    var t = Math.abs(e);
    return t >= ut
      ? Math.round(e / ut) + 'd'
      : t >= Ct
      ? Math.round(e / Ct) + 'h'
      : t >= Tt
      ? Math.round(e / Tt) + 'm'
      : t >= vt
      ? Math.round(e / vt) + 's'
      : e + 'ms';
  }
  function Ru(e) {
    var t = Math.abs(e);
    return t >= ut
      ? Qr(e, t, ut, 'day')
      : t >= Ct
      ? Qr(e, t, Ct, 'hour')
      : t >= Tt
      ? Qr(e, t, Tt, 'minute')
      : t >= vt
      ? Qr(e, t, vt, 'second')
      : e + ' ms';
  }
  function Qr(e, t, r, n) {
    var i = t >= r * 1.5;
    return Math.round(e / r) + ' ' + n + (i ? 's' : '');
  }
});
var ui = K(($f, Jo) => {
  'use strict';
  function Mu(e) {
    (r.debug = r),
      (r.default = r),
      (r.coerce = l),
      (r.disable = o),
      (r.enable = i),
      (r.enabled = s),
      (r.humanize = Go()),
      (r.destroy = u),
      Object.keys(e).forEach((c) => {
        r[c] = e[c];
      }),
      (r.names = []),
      (r.skips = []),
      (r.formatters = {});
    function t(c) {
      let p = 0;
      for (let d = 0; d < c.length; d++) (p = (p << 5) - p + c.charCodeAt(d)), (p |= 0);
      return r.colors[Math.abs(p) % r.colors.length];
    }
    r.selectColor = t;
    function r(c) {
      let p,
        d = null,
        f,
        y;
      function g(...v) {
        if (!g.enabled) return;
        let C = g,
          _ = Number(new Date()),
          b = _ - (p || _);
        (C.diff = b),
          (C.prev = p),
          (C.curr = _),
          (p = _),
          (v[0] = r.coerce(v[0])),
          typeof v[0] != 'string' && v.unshift('%O');
        let M = 0;
        (v[0] = v[0].replace(/%([a-zA-Z%])/g, (X, lt) => {
          if (X === '%%') return '%';
          M++;
          let U = r.formatters[lt];
          if (typeof U == 'function') {
            let ne = v[M];
            (X = U.call(C, ne)), v.splice(M, 1), M--;
          }
          return X;
        })),
          r.formatArgs.call(C, v),
          (C.log || r.log).apply(C, v);
      }
      return (
        (g.namespace = c),
        (g.useColors = r.useColors()),
        (g.color = r.selectColor(c)),
        (g.extend = n),
        (g.destroy = r.destroy),
        Object.defineProperty(g, 'enabled', {
          enumerable: !0,
          configurable: !1,
          get: () =>
            d !== null ? d : (f !== r.namespaces && ((f = r.namespaces), (y = r.enabled(c))), y),
          set: (v) => {
            d = v;
          },
        }),
        typeof r.init == 'function' && r.init(g),
        g
      );
    }
    function n(c, p) {
      let d = r(this.namespace + (typeof p > 'u' ? ':' : p) + c);
      return (d.log = this.log), d;
    }
    function i(c) {
      r.save(c), (r.namespaces = c), (r.names = []), (r.skips = []);
      let p,
        d = (typeof c == 'string' ? c : '').split(/[\s,]+/),
        f = d.length;
      for (p = 0; p < f; p++)
        d[p] &&
          ((c = d[p].replace(/\*/g, '.*?')),
          c[0] === '-'
            ? r.skips.push(new RegExp('^' + c.slice(1) + '$'))
            : r.names.push(new RegExp('^' + c + '$')));
    }
    function o() {
      let c = [...r.names.map(a), ...r.skips.map(a).map((p) => '-' + p)].join(',');
      return r.enable(''), c;
    }
    function s(c) {
      if (c[c.length - 1] === '*') return !0;
      let p, d;
      for (p = 0, d = r.skips.length; p < d; p++) if (r.skips[p].test(c)) return !1;
      for (p = 0, d = r.names.length; p < d; p++) if (r.names[p].test(c)) return !0;
      return !1;
    }
    function a(c) {
      return c
        .toString()
        .substring(2, c.toString().length - 2)
        .replace(/\.\*\?$/, '*');
    }
    function l(c) {
      return c instanceof Error ? c.stack || c.message : c;
    }
    function u() {
      console.warn(
        'Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`.',
      );
    }
    return r.enable(r.load()), r;
  }
  Jo.exports = Mu;
});
var Ho = K((ye, Gr) => {
  'use strict';
  ye.formatArgs = ku;
  ye.save = Iu;
  ye.load = Fu;
  ye.useColors = Su;
  ye.storage = Du();
  ye.destroy = (() => {
    let e = !1;
    return () => {
      e ||
        ((e = !0),
        console.warn(
          'Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`.',
        ));
    };
  })();
  ye.colors = [
    '#0000CC',
    '#0000FF',
    '#0033CC',
    '#0033FF',
    '#0066CC',
    '#0066FF',
    '#0099CC',
    '#0099FF',
    '#00CC00',
    '#00CC33',
    '#00CC66',
    '#00CC99',
    '#00CCCC',
    '#00CCFF',
    '#3300CC',
    '#3300FF',
    '#3333CC',
    '#3333FF',
    '#3366CC',
    '#3366FF',
    '#3399CC',
    '#3399FF',
    '#33CC00',
    '#33CC33',
    '#33CC66',
    '#33CC99',
    '#33CCCC',
    '#33CCFF',
    '#6600CC',
    '#6600FF',
    '#6633CC',
    '#6633FF',
    '#66CC00',
    '#66CC33',
    '#9900CC',
    '#9900FF',
    '#9933CC',
    '#9933FF',
    '#99CC00',
    '#99CC33',
    '#CC0000',
    '#CC0033',
    '#CC0066',
    '#CC0099',
    '#CC00CC',
    '#CC00FF',
    '#CC3300',
    '#CC3333',
    '#CC3366',
    '#CC3399',
    '#CC33CC',
    '#CC33FF',
    '#CC6600',
    '#CC6633',
    '#CC9900',
    '#CC9933',
    '#CCCC00',
    '#CCCC33',
    '#FF0000',
    '#FF0033',
    '#FF0066',
    '#FF0099',
    '#FF00CC',
    '#FF00FF',
    '#FF3300',
    '#FF3333',
    '#FF3366',
    '#FF3399',
    '#FF33CC',
    '#FF33FF',
    '#FF6600',
    '#FF6633',
    '#FF9900',
    '#FF9933',
    '#FFCC00',
    '#FFCC33',
  ];
  function Su() {
    return typeof window < 'u' &&
      window.process &&
      (window.process.type === 'renderer' || window.process.__nwjs)
      ? !0
      : typeof navigator < 'u' &&
        navigator.userAgent &&
        navigator.userAgent.toLowerCase().match(/(edge|trident)\/(\d+)/)
      ? !1
      : (typeof document < 'u' &&
          document.documentElement &&
          document.documentElement.style &&
          document.documentElement.style.WebkitAppearance) ||
        (typeof window < 'u' &&
          window.console &&
          (window.console.firebug || (window.console.exception && window.console.table))) ||
        (typeof navigator < 'u' &&
          navigator.userAgent &&
          navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/) &&
          parseInt(RegExp.$1, 10) >= 31) ||
        (typeof navigator < 'u' &&
          navigator.userAgent &&
          navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/));
  }
  function ku(e) {
    if (
      ((e[0] =
        (this.useColors ? '%c' : '') +
        this.namespace +
        (this.useColors ? ' %c' : ' ') +
        e[0] +
        (this.useColors ? '%c ' : ' ') +
        '+' +
        Gr.exports.humanize(this.diff)),
      !this.useColors)
    )
      return;
    let t = 'color: ' + this.color;
    e.splice(1, 0, t, 'color: inherit');
    let r = 0,
      n = 0;
    e[0].replace(/%[a-zA-Z%]/g, (i) => {
      i !== '%%' && (r++, i === '%c' && (n = r));
    }),
      e.splice(n, 0, t);
  }
  ye.log = console.debug || console.log || (() => {});
  function Iu(e) {
    try {
      e ? ye.storage.setItem('debug', e) : ye.storage.removeItem('debug');
    } catch {}
  }
  function Fu() {
    let e;
    try {
      e = ye.storage.getItem('debug');
    } catch {}
    return !e && typeof process < 'u' && 'env' in process && (e = process.env.DEBUG), e;
  }
  function Du() {
    try {
      return localStorage;
    } catch {}
  }
  Gr.exports = ui()(ye);
  var { formatters: Ou } = Gr.exports;
  Ou.j = function (e) {
    try {
      return JSON.stringify(e);
    } catch (t) {
      return '[UnexpectedJSONParseError]: ' + t.message;
    }
  };
});
var ci = K((qf, Wo) => {
  'use strict';
  Wo.exports = (e, t = process.argv) => {
    let r = e.startsWith('-') ? '' : e.length === 1 ? '-' : '--',
      n = t.indexOf(r + e),
      i = t.indexOf('--');
    return n !== -1 && (i === -1 || n < i);
  };
});
var mi = K((jf, Yo) => {
  'use strict';
  var Nu = require('os'),
    zo = require('tty'),
    Ee = ci(),
    { env: H } = process,
    Ge;
  Ee('no-color') || Ee('no-colors') || Ee('color=false') || Ee('color=never')
    ? (Ge = 0)
    : (Ee('color') || Ee('colors') || Ee('color=true') || Ee('color=always')) && (Ge = 1);
  'FORCE_COLOR' in H &&
    (H.FORCE_COLOR === 'true'
      ? (Ge = 1)
      : H.FORCE_COLOR === 'false'
      ? (Ge = 0)
      : (Ge = H.FORCE_COLOR.length === 0 ? 1 : Math.min(parseInt(H.FORCE_COLOR, 10), 3)));
  function pi(e) {
    return e === 0 ? !1 : { level: e, hasBasic: !0, has256: e >= 2, has16m: e >= 3 };
  }
  function di(e, t) {
    if (Ge === 0) return 0;
    if (Ee('color=16m') || Ee('color=full') || Ee('color=truecolor')) return 3;
    if (Ee('color=256')) return 2;
    if (e && !t && Ge === void 0) return 0;
    let r = Ge || 0;
    if (H.TERM === 'dumb') return r;
    if (process.platform === 'win32') {
      let n = Nu.release().split('.');
      return Number(n[0]) >= 10 && Number(n[2]) >= 10586 ? (Number(n[2]) >= 14931 ? 3 : 2) : 1;
    }
    if ('CI' in H)
      return ['TRAVIS', 'CIRCLECI', 'APPVEYOR', 'GITLAB_CI', 'GITHUB_ACTIONS', 'BUILDKITE'].some(
        (n) => n in H,
      ) || H.CI_NAME === 'codeship'
        ? 1
        : r;
    if ('TEAMCITY_VERSION' in H)
      return /^(9\.(0*[1-9]\d*)\.|\d{2,}\.)/.test(H.TEAMCITY_VERSION) ? 1 : 0;
    if (H.COLORTERM === 'truecolor') return 3;
    if ('TERM_PROGRAM' in H) {
      let n = parseInt((H.TERM_PROGRAM_VERSION || '').split('.')[0], 10);
      switch (H.TERM_PROGRAM) {
        case 'iTerm.app':
          return n >= 3 ? 3 : 2;
        case 'Apple_Terminal':
          return 2;
      }
    }
    return /-256(color)?$/i.test(H.TERM)
      ? 2
      : /^screen|^xterm|^vt100|^vt220|^rxvt|color|ansi|cygwin|linux/i.test(H.TERM) ||
        'COLORTERM' in H
      ? 1
      : r;
  }
  function Lu(e) {
    let t = di(e, e && e.isTTY);
    return pi(t);
  }
  Yo.exports = {
    supportsColor: Lu,
    stdout: pi(di(!0, zo.isatty(1))),
    stderr: pi(di(!0, zo.isatty(2))),
  };
});
var Xo = K((ee, Hr) => {
  'use strict';
  var $u = require('tty'),
    Jr = require('util');
  ee.init = Qu;
  ee.log = Bu;
  ee.formatArgs = ju;
  ee.save = Uu;
  ee.load = Ku;
  ee.useColors = qu;
  ee.destroy = Jr.deprecate(
    () => {},
    'Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`.',
  );
  ee.colors = [6, 2, 3, 4, 5, 1];
  try {
    let e = mi();
    e &&
      (e.stderr || e).level >= 2 &&
      (ee.colors = [
        20, 21, 26, 27, 32, 33, 38, 39, 40, 41, 42, 43, 44, 45, 56, 57, 62, 63, 68, 69, 74, 75, 76,
        77, 78, 79, 80, 81, 92, 93, 98, 99, 112, 113, 128, 129, 134, 135, 148, 149, 160, 161, 162,
        163, 164, 165, 166, 167, 168, 169, 170, 171, 172, 173, 178, 179, 184, 185, 196, 197, 198,
        199, 200, 201, 202, 203, 204, 205, 206, 207, 208, 209, 214, 215, 220, 221,
      ]);
  } catch {}
  ee.inspectOpts = Object.keys(process.env)
    .filter((e) => /^debug_/i.test(e))
    .reduce((e, t) => {
      let r = t
          .substring(6)
          .toLowerCase()
          .replace(/_([a-z])/g, (i, o) => o.toUpperCase()),
        n = process.env[t];
      return (
        /^(yes|on|true|enabled)$/i.test(n)
          ? (n = !0)
          : /^(no|off|false|disabled)$/i.test(n)
          ? (n = !1)
          : n === 'null'
          ? (n = null)
          : (n = Number(n)),
        (e[r] = n),
        e
      );
    }, {});
  function qu() {
    return 'colors' in ee.inspectOpts ? !!ee.inspectOpts.colors : $u.isatty(process.stderr.fd);
  }
  function ju(e) {
    let { namespace: t, useColors: r } = this;
    if (r) {
      let n = this.color,
        i = '\x1B[3' + (n < 8 ? n : '8;5;' + n),
        o = `  ${i};1m${t} \x1B[0m`;
      (e[0] =
        o +
        e[0]
          .split(
            `
`,
          )
          .join(
            `
` + o,
          )),
        e.push(i + 'm+' + Hr.exports.humanize(this.diff) + '\x1B[0m');
    } else e[0] = Vu() + t + ' ' + e[0];
  }
  function Vu() {
    return ee.inspectOpts.hideDate ? '' : new Date().toISOString() + ' ';
  }
  function Bu(...e) {
    return process.stderr.write(
      Jr.format(...e) +
        `
`,
    );
  }
  function Uu(e) {
    e ? (process.env.DEBUG = e) : delete process.env.DEBUG;
  }
  function Ku() {
    return process.env.DEBUG;
  }
  function Qu(e) {
    e.inspectOpts = {};
    let t = Object.keys(ee.inspectOpts);
    for (let r = 0; r < t.length; r++) e.inspectOpts[t[r]] = ee.inspectOpts[t[r]];
  }
  Hr.exports = ui()(ee);
  var { formatters: Zo } = Hr.exports;
  Zo.o = function (e) {
    return (
      (this.inspectOpts.colors = this.useColors),
      Jr.inspect(e, this.inspectOpts)
        .split(
          `
`,
        )
        .map((t) => t.trim())
        .join(' ')
    );
  };
  Zo.O = function (e) {
    return (this.inspectOpts.colors = this.useColors), Jr.inspect(e, this.inspectOpts);
  };
});
var es = K((Vf, fi) => {
  'use strict';
  typeof process > 'u' || process.type === 'renderer' || process.browser === !0 || process.__nwjs
    ? (fi.exports = Ho())
    : (fi.exports = Xo());
});
var cs = K((bg, Pi) => {
  'use strict';
  var R = Pi.exports;
  Pi.exports.default = R;
  var D = '\x1B[',
    Xt = '\x1B]',
    Rt = '\x07',
    en = ';',
    us = process.env.TERM_PROGRAM === 'Apple_Terminal';
  R.cursorTo = (e, t) => {
    if (typeof e != 'number') throw new TypeError('The `x` argument is required');
    return typeof t != 'number' ? D + (e + 1) + 'G' : D + (t + 1) + ';' + (e + 1) + 'H';
  };
  R.cursorMove = (e, t) => {
    if (typeof e != 'number') throw new TypeError('The `x` argument is required');
    let r = '';
    return (
      e < 0 ? (r += D + -e + 'D') : e > 0 && (r += D + e + 'C'),
      t < 0 ? (r += D + -t + 'A') : t > 0 && (r += D + t + 'B'),
      r
    );
  };
  R.cursorUp = (e = 1) => D + e + 'A';
  R.cursorDown = (e = 1) => D + e + 'B';
  R.cursorForward = (e = 1) => D + e + 'C';
  R.cursorBackward = (e = 1) => D + e + 'D';
  R.cursorLeft = D + 'G';
  R.cursorSavePosition = us ? '\x1B7' : D + 's';
  R.cursorRestorePosition = us ? '\x1B8' : D + 'u';
  R.cursorGetPosition = D + '6n';
  R.cursorNextLine = D + 'E';
  R.cursorPrevLine = D + 'F';
  R.cursorHide = D + '?25l';
  R.cursorShow = D + '?25h';
  R.eraseLines = (e) => {
    let t = '';
    for (let r = 0; r < e; r++) t += R.eraseLine + (r < e - 1 ? R.cursorUp() : '');
    return e && (t += R.cursorLeft), t;
  };
  R.eraseEndLine = D + 'K';
  R.eraseStartLine = D + '1K';
  R.eraseLine = D + '2K';
  R.eraseDown = D + 'J';
  R.eraseUp = D + '1J';
  R.eraseScreen = D + '2J';
  R.scrollUp = D + 'S';
  R.scrollDown = D + 'T';
  R.clearScreen = '\x1Bc';
  R.clearTerminal =
    process.platform === 'win32' ? `${R.eraseScreen}${D}0f` : `${R.eraseScreen}${D}3J${D}H`;
  R.beep = Rt;
  R.link = (e, t) => [Xt, '8', en, en, t, Rt, e, Xt, '8', en, en, Rt].join('');
  R.image = (e, t = {}) => {
    let r = `${Xt}1337;File=inline=1`;
    return (
      t.width && (r += `;width=${t.width}`),
      t.height && (r += `;height=${t.height}`),
      t.preserveAspectRatio === !1 && (r += ';preserveAspectRatio=0'),
      r + ':' + e.toString('base64') + Rt
    );
  };
  R.iTerm = {
    setCwd: (e = process.cwd()) => `${Xt}50;CurrentDir=${e}${Rt}`,
    annotation: (e, t = {}) => {
      let r = `${Xt}1337;`,
        n = typeof t.x < 'u',
        i = typeof t.y < 'u';
      if ((n || i) && !(n && i && typeof t.length < 'u'))
        throw new Error('`x`, `y` and `length` must be defined when `x` or `y` is defined');
      return (
        (e = e.replace(/\|/g, '')),
        (r += t.isHidden ? 'AddHiddenAnnotation=' : 'AddAnnotation='),
        t.length > 0 ? (r += (n ? [e, t.length, t.x, t.y] : [t.length, e]).join('|')) : (r += e),
        r + Rt
      );
    },
  };
});
var ms = K((wg, ds) => {
  'use strict';
  var Zu = mi(),
    Mt = ci();
  function ps(e) {
    if (/^\d{3,4}$/.test(e)) {
      let r = /(\d{1,2})(\d{2})/.exec(e);
      return { major: 0, minor: parseInt(r[1], 10), patch: parseInt(r[2], 10) };
    }
    let t = (e || '').split('.').map((r) => parseInt(r, 10));
    return { major: t[0], minor: t[1], patch: t[2] };
  }
  function vi(e) {
    let { env: t } = process;
    if ('FORCE_HYPERLINK' in t)
      return !(t.FORCE_HYPERLINK.length > 0 && parseInt(t.FORCE_HYPERLINK, 10) === 0);
    if (Mt('no-hyperlink') || Mt('no-hyperlinks') || Mt('hyperlink=false') || Mt('hyperlink=never'))
      return !1;
    if (Mt('hyperlink=true') || Mt('hyperlink=always') || 'NETLIFY' in t) return !0;
    if (
      !Zu.supportsColor(e) ||
      (e && !e.isTTY) ||
      process.platform === 'win32' ||
      'CI' in t ||
      'TEAMCITY_VERSION' in t
    )
      return !1;
    if ('TERM_PROGRAM' in t) {
      let r = ps(t.TERM_PROGRAM_VERSION);
      switch (t.TERM_PROGRAM) {
        case 'iTerm.app':
          return r.major === 3 ? r.minor >= 1 : r.major > 3;
        case 'WezTerm':
          return r.major >= 20200620;
        case 'vscode':
          return r.major > 1 || (r.major === 1 && r.minor >= 72);
      }
    }
    if ('VTE_VERSION' in t) {
      if (t.VTE_VERSION === '0.50.0') return !1;
      let r = ps(t.VTE_VERSION);
      return r.major > 0 || r.minor >= 50;
    }
    return !1;
  }
  ds.exports = { supportsHyperlink: vi, stdout: vi(process.stdout), stderr: vi(process.stderr) };
});
var gs = K((Eg, er) => {
  'use strict';
  var Xu = cs(),
    Ti = ms(),
    fs = (e, t, { target: r = 'stdout', ...n } = {}) =>
      Ti[r]
        ? Xu.link(e, t)
        : n.fallback === !1
        ? e
        : typeof n.fallback == 'function'
        ? n.fallback(e, t)
        : `${e} (\u200B${t}\u200B)`;
  er.exports = (e, t, r = {}) => fs(e, t, r);
  er.exports.stderr = (e, t, r = {}) => fs(e, t, { target: 'stderr', ...r });
  er.exports.isSupported = Ti.stdout;
  er.exports.stderr.isSupported = Ti.stderr;
});
var Cs = K((qg, fc) => {
  fc.exports = {
    name: 'dotenv',
    version: '16.0.3',
    description: 'Loads environment variables from .env file',
    main: 'lib/main.js',
    types: 'lib/main.d.ts',
    exports: {
      '.': { require: './lib/main.js', types: './lib/main.d.ts', default: './lib/main.js' },
      './config': './config.js',
      './config.js': './config.js',
      './lib/env-options': './lib/env-options.js',
      './lib/env-options.js': './lib/env-options.js',
      './lib/cli-options': './lib/cli-options.js',
      './lib/cli-options.js': './lib/cli-options.js',
      './package.json': './package.json',
    },
    scripts: {
      'dts-check': 'tsc --project tests/types/tsconfig.json',
      lint: 'standard',
      'lint-readme': 'standard-markdown',
      pretest: 'npm run lint && npm run dts-check',
      test: 'tap tests/*.js --100 -Rspec',
      prerelease: 'npm test',
      release: 'standard-version',
    },
    repository: { type: 'git', url: 'git://github.com/motdotla/dotenv.git' },
    keywords: ['dotenv', 'env', '.env', 'environment', 'variables', 'config', 'settings'],
    readmeFilename: 'README.md',
    license: 'BSD-2-Clause',
    devDependencies: {
      '@types/node': '^17.0.9',
      decache: '^4.6.1',
      dtslint: '^3.7.0',
      sinon: '^12.0.1',
      standard: '^16.0.4',
      'standard-markdown': '^7.1.0',
      'standard-version': '^9.3.2',
      tap: '^15.1.6',
      tar: '^6.1.11',
      typescript: '^4.5.4',
    },
    engines: { node: '>=12' },
  };
});
var As = K((jg, sn) => {
  'use strict';
  var gc = require('fs'),
    _s = require('path'),
    yc = require('os'),
    hc = Cs(),
    xc = hc.version,
    bc =
      /(?:^|^)\s*(?:export\s+)?([\w.-]+)(?:\s*=\s*?|:\s+?)(\s*'(?:\\'|[^'])*'|\s*"(?:\\"|[^"])*"|\s*`(?:\\`|[^`])*`|[^#\r\n]+)?\s*(?:#.*)?(?:$|$)/gm;
  function wc(e) {
    let t = {},
      r = e.toString();
    r = r.replace(
      /\r\n?/gm,
      `
`,
    );
    let n;
    for (; (n = bc.exec(r)) != null; ) {
      let i = n[1],
        o = n[2] || '';
      o = o.trim();
      let s = o[0];
      (o = o.replace(/^(['"`])([\s\S]*)\1$/gm, '$2')),
        s === '"' &&
          ((o = o.replace(
            /\\n/g,
            `
`,
          )),
          (o = o.replace(/\\r/g, '\r'))),
        (t[i] = o);
    }
    return t;
  }
  function Ri(e) {
    console.log(`[dotenv@${xc}][DEBUG] ${e}`);
  }
  function Ec(e) {
    return e[0] === '~' ? _s.join(yc.homedir(), e.slice(1)) : e;
  }
  function Pc(e) {
    let t = _s.resolve(process.cwd(), '.env'),
      r = 'utf8',
      n = !!(e && e.debug),
      i = !!(e && e.override);
    e && (e.path != null && (t = Ec(e.path)), e.encoding != null && (r = e.encoding));
    try {
      let o = on.parse(gc.readFileSync(t, { encoding: r }));
      return (
        Object.keys(o).forEach(function (s) {
          Object.prototype.hasOwnProperty.call(process.env, s)
            ? (i === !0 && (process.env[s] = o[s]),
              n &&
                Ri(
                  i === !0
                    ? `"${s}" is already defined in \`process.env\` and WAS overwritten`
                    : `"${s}" is already defined in \`process.env\` and was NOT overwritten`,
                ))
            : (process.env[s] = o[s]);
        }),
        { parsed: o }
      );
    } catch (o) {
      return n && Ri(`Failed to load ${t} ${o.message}`), { error: o };
    }
  }
  var on = { config: Pc, parse: wc };
  sn.exports.config = on.config;
  sn.exports.parse = on.parse;
  sn.exports = on;
});
var Fs = K((Jg, Is) => {
  'use strict';
  Is.exports = (e) => {
    let t = e.match(/^[ \t]*(?=\S)/gm);
    return t ? t.reduce((r, n) => Math.min(r, n.length), 1 / 0) : 0;
  };
});
var Os = K((Hg, Ds) => {
  'use strict';
  var _c = Fs();
  Ds.exports = (e) => {
    let t = _c(e);
    if (t === 0) return e;
    let r = new RegExp(`^[ \\t]{${t}}`, 'gm');
    return e.replace(r, '');
  };
});
var Ns = K((Wg, Ac) => {
  Ac.exports = {
    name: '@prisma/engines-version',
    version: '5.6.0-32.e95e739751f42d8ca026f6b910f5a2dc5adeaeee',
    main: 'index.js',
    types: 'index.d.ts',
    license: 'Apache-2.0',
    author: 'Tim Suchanek <suchanek@prisma.io>',
    prisma: { enginesVersion: 'e95e739751f42d8ca026f6b910f5a2dc5adeaeee' },
    repository: {
      type: 'git',
      url: 'https://github.com/prisma/engines-wrapper.git',
      directory: 'packages/engines-version',
    },
    devDependencies: { '@types/node': '18.18.9', typescript: '4.9.5' },
    files: ['index.js', 'index.d.ts'],
    scripts: { build: 'tsc -d' },
  };
});
var ki = K((ln) => {
  'use strict';
  Object.defineProperty(ln, '__esModule', { value: !0 });
  ln.enginesVersion = void 0;
  ln.enginesVersion = Ns().prisma.enginesVersion;
});
var Ni = K((ly, qs) => {
  'use strict';
  qs.exports = (e, t = 1, r) => {
    if (((r = { indent: ' ', includeEmptyLines: !1, ...r }), typeof e != 'string'))
      throw new TypeError(`Expected \`input\` to be a \`string\`, got \`${typeof e}\``);
    if (typeof t != 'number')
      throw new TypeError(`Expected \`count\` to be a \`number\`, got \`${typeof t}\``);
    if (typeof r.indent != 'string')
      throw new TypeError(
        `Expected \`options.indent\` to be a \`string\`, got \`${typeof r.indent}\``,
      );
    if (t === 0) return e;
    let n = r.includeEmptyLines ? /^/gm : /^(?!\s*$)/gm;
    return e.replace(n, r.indent.repeat(t));
  };
});
var Us = K((py, Bs) => {
  'use strict';
  Bs.exports = ({ onlyFirst: e = !1 } = {}) => {
    let t = [
      '[\\u001B\\u009B][[\\]()#;?]*(?:(?:(?:(?:;[-a-zA-Z\\d\\/#&.:=?%@~_]+)*|[a-zA-Z\\d]+(?:;[-a-zA-Z\\d\\/#&.:=?%@~_]*)*)?\\u0007)',
      '(?:(?:\\d{1,4}(?:;\\d{0,4})*)?[\\dA-PR-TZcf-ntqry=><~]))',
    ].join('|');
    return new RegExp(t, e ? void 0 : 'g');
  };
});
var ji = K((dy, Ks) => {
  'use strict';
  var Lc = Us();
  Ks.exports = (e) => (typeof e == 'string' ? e.replace(Lc(), '') : e);
});
var Qs = K((gy, cn) => {
  'use strict';
  cn.exports = (e = {}) => {
    let t;
    if (e.repoUrl) t = e.repoUrl;
    else if (e.user && e.repo) t = `https://github.com/${e.user}/${e.repo}`;
    else
      throw new Error(
        'You need to specify either the `repoUrl` option or both the `user` and `repo` options',
      );
    let r = new URL(`${t}/issues/new`),
      n = ['body', 'title', 'labels', 'template', 'milestone', 'assignee', 'projects'];
    for (let i of n) {
      let o = e[i];
      if (o !== void 0) {
        if (i === 'labels' || i === 'projects') {
          if (!Array.isArray(o)) throw new TypeError(`The \`${i}\` option should be an array`);
          o = o.join(',');
        }
        r.searchParams.set(i, o);
      }
    }
    return r.toString();
  };
  cn.exports.default = cn.exports;
});
var _o = K((Y0, Cl) => {
  'use strict';
  Cl.exports = (function () {
    function e(t, r, n, i, o) {
      return t < r || n < r ? (t > n ? n + 1 : t + 1) : i === o ? r : r + 1;
    }
    return function (t, r) {
      if (t === r) return 0;
      if (t.length > r.length) {
        var n = t;
        (t = r), (r = n);
      }
      for (var i = t.length, o = r.length; i > 0 && t.charCodeAt(i - 1) === r.charCodeAt(o - 1); )
        i--, o--;
      for (var s = 0; s < i && t.charCodeAt(s) === r.charCodeAt(s); ) s++;
      if (((i -= s), (o -= s), i === 0 || o < 3)) return o;
      var a = 0,
        l,
        u,
        c,
        p,
        d,
        f,
        y,
        g,
        v,
        C,
        _,
        b,
        M = [];
      for (l = 0; l < i; l++) M.push(l + 1), M.push(t.charCodeAt(s + l));
      for (var be = M.length - 1; a < o - 3; )
        for (
          v = r.charCodeAt(s + (u = a)),
            C = r.charCodeAt(s + (c = a + 1)),
            _ = r.charCodeAt(s + (p = a + 2)),
            b = r.charCodeAt(s + (d = a + 3)),
            f = a += 4,
            l = 0;
          l < be;
          l += 2
        )
          (y = M[l]),
            (g = M[l + 1]),
            (u = e(y, u, c, v, g)),
            (c = e(u, c, p, C, g)),
            (p = e(c, p, d, _, g)),
            (f = e(p, d, f, b, g)),
            (M[l] = f),
            (d = p),
            (p = c),
            (c = u),
            (u = y);
      for (; a < o; )
        for (v = r.charCodeAt(s + (u = a)), f = ++a, l = 0; l < be; l += 2)
          (y = M[l]), (M[l] = f = e(y, u, f, v, M[l + 1])), (u = y);
      return f;
    };
  })();
});
var Cf = {};
Pt(Cf, {
  DMMF: () => we,
  DMMFClass: () => Kr,
  Debug: () => gi,
  Decimal: () => Oe,
  Extensions: () => oi,
  MetricsClient: () => Ft,
  NotFoundError: () => Ve,
  ObjectEnumValue: () => ke,
  PrismaClientInitializationError: () => k,
  PrismaClientKnownRequestError: () => W,
  PrismaClientRustPanicError: () => he,
  PrismaClientUnknownRequestError: () => z,
  PrismaClientValidationError: () => se,
  Public: () => si,
  Sql: () => me,
  Types: () => ai,
  defineDmmfProperty: () => Js,
  empty: () => Ws,
  getPrismaClient: () => gu,
  itxClientDenyList: () => Fo,
  join: () => Hs,
  makeStrictEnum: () => yu,
  objectEnumNames: () => qc,
  objectEnumValues: () => dn,
  raw: () => Wi,
  sqltag: () => zi,
  warnEnvConflicts: () => hu,
  warnOnce: () => ar,
});
module.exports = vu(Cf);
var oi = {};
Pt(oi, { defineExtension: () => Lo, getExtensionContext: () => $o });
function Lo(e) {
  return typeof e == 'function' ? e : (t) => t.$extends(e);
}
function $o(e) {
  return e;
}
var si = {};
Pt(si, { validator: () => qo });
function qo(...e) {
  return (t) => t;
}
var ai = {};
Pt(ai, { Extensions: () => jo, Public: () => Vo, Result: () => Bo, Utils: () => Uo });
var jo = {};
var Vo = {};
var Bo = {};
var Uo = {};
var Qe = (e, t) => {
  let r = {};
  for (let n of e) {
    let i = n[t];
    r[i] = n;
  }
  return r;
};
function Ko(e) {
  return e.substring(0, 1).toLowerCase() + e.substring(1);
}
var Kr = class {
  constructor(t) {
    this.document = t;
    (this.compositeNames = new Set(this.datamodel.types.map((r) => r.name))),
      (this.typeAndModelMap = this.buildTypeModelMap()),
      (this.mappingsMap = this.buildMappingsMap()),
      (this.outputTypeMap = this.buildMergedOutputTypeMap()),
      (this.rootFieldMap = this.buildRootFieldMap()),
      (this.inputTypesByName = this.buildInputTypesMap());
  }
  get datamodel() {
    return this.document.datamodel;
  }
  get mappings() {
    return this.document.mappings;
  }
  get schema() {
    return this.document.schema;
  }
  get inputObjectTypes() {
    return this.schema.inputObjectTypes;
  }
  get outputObjectTypes() {
    return this.schema.outputObjectTypes;
  }
  isComposite(t) {
    return this.compositeNames.has(t);
  }
  getOtherOperationNames() {
    return [
      Object.values(this.mappings.otherOperations.write),
      Object.values(this.mappings.otherOperations.read),
    ].flat();
  }
  hasEnumInNamespace(t, r) {
    return this.schema.enumTypes[r]?.find((n) => n.name === t) !== void 0;
  }
  resolveInputObjectType(t) {
    return this.inputTypesByName.get(li(t.type, t.namespace));
  }
  resolveOutputObjectType(t) {
    if (t.location === 'outputObjectTypes')
      return this.outputObjectTypes[t.namespace ?? 'prisma'].find((r) => r.name === t.type);
  }
  buildModelMap() {
    return Qe(this.datamodel.models, 'name');
  }
  buildTypeMap() {
    return Qe(this.datamodel.types, 'name');
  }
  buildTypeModelMap() {
    return { ...this.buildTypeMap(), ...this.buildModelMap() };
  }
  buildMappingsMap() {
    return Qe(this.mappings.modelOperations, 'model');
  }
  buildMergedOutputTypeMap() {
    return {
      model: Qe(this.schema.outputObjectTypes.model, 'name'),
      prisma: Qe(this.schema.outputObjectTypes.prisma, 'name'),
    };
  }
  buildRootFieldMap() {
    return {
      ...Qe(this.outputTypeMap.prisma.Query.fields, 'name'),
      ...Qe(this.outputTypeMap.prisma.Mutation.fields, 'name'),
    };
  }
  buildInputTypesMap() {
    let t = new Map();
    for (let r of this.inputObjectTypes.prisma) t.set(li(r.name, 'prisma'), r);
    if (!this.inputObjectTypes.model) return t;
    for (let r of this.inputObjectTypes.model) t.set(li(r.name, 'model'), r);
    return t;
  }
};
function li(e, t) {
  return t ? `${t}.${e}` : e;
}
var we;
((t) => {
  let e;
  ((b) => (
    (b.findUnique = 'findUnique'),
    (b.findUniqueOrThrow = 'findUniqueOrThrow'),
    (b.findFirst = 'findFirst'),
    (b.findFirstOrThrow = 'findFirstOrThrow'),
    (b.findMany = 'findMany'),
    (b.create = 'create'),
    (b.createMany = 'createMany'),
    (b.update = 'update'),
    (b.updateMany = 'updateMany'),
    (b.upsert = 'upsert'),
    (b.delete = 'delete'),
    (b.deleteMany = 'deleteMany'),
    (b.groupBy = 'groupBy'),
    (b.count = 'count'),
    (b.aggregate = 'aggregate'),
    (b.findRaw = 'findRaw'),
    (b.aggregateRaw = 'aggregateRaw')
  ))((e = t.ModelAction || (t.ModelAction = {})));
})(we || (we = {}));
var Wr = I(es()),
  Gu = 100,
  Yt = [];
typeof process < 'u' &&
  typeof process.stderr?.write != 'function' &&
  (Wr.default.log = console.debug ?? console.log);
function Ju(e) {
  let t = (0, Wr.default)(e),
    r = Object.assign(
      (...n) => (
        (t.log = r.log),
        n.length !== 0 && Yt.push([e, ...n]),
        Yt.length > Gu && Yt.shift(),
        t('', ...n)
      ),
      t,
    );
  return r;
}
var gi = Object.assign(Ju, Wr.default);
function ts(e = 7500) {
  let t = Yt.map((r) => r.map((n) => (typeof n == 'string' ? n : JSON.stringify(n))).join(' '))
    .join(`
`);
  return t.length < e ? t : t.slice(-e);
}
function rs() {
  Yt.length = 0;
}
var L = gi;
var yi,
  ns,
  is,
  os,
  ss = !0;
typeof process < 'u' &&
  (({ FORCE_COLOR: yi, NODE_DISABLE_COLORS: ns, NO_COLOR: is, TERM: os } = process.env || {}),
  (ss = process.stdout && process.stdout.isTTY));
var Hu = { enabled: !ns && is == null && os !== 'dumb' && ((yi != null && yi !== '0') || ss) };
function $(e, t) {
  let r = new RegExp(`\\x1b\\[${t}m`, 'g'),
    n = `\x1B[${e}m`,
    i = `\x1B[${t}m`;
  return function (o) {
    return !Hu.enabled || o == null ? o : n + (~('' + o).indexOf(i) ? o.replace(r, i + n) : o) + i;
  };
}
var Uf = $(0, 0),
  pe = $(1, 22),
  Je = $(2, 22),
  Kf = $(3, 23),
  le = $(4, 24),
  Qf = $(7, 27),
  Gf = $(8, 28),
  Jf = $(9, 29),
  Hf = $(30, 39),
  Pe = $(31, 39),
  ct = $(32, 39),
  Ae = $(33, 39),
  _t = $(34, 39),
  Wf = $(35, 39),
  He = $(36, 39),
  zf = $(37, 39),
  zr = $(90, 39),
  Yf = $(90, 39),
  Zf = $(40, 49),
  Xf = $(41, 49),
  eg = $(42, 49),
  tg = $(43, 49),
  rg = $(44, 49),
  ng = $(45, 49),
  ig = $(46, 49),
  og = $(47, 49);
var as = I(require('fs'));
function hi() {
  let e = process.env.PRISMA_QUERY_ENGINE_LIBRARY;
  if (!(e && as.default.existsSync(e)) && process.arch === 'ia32')
    throw new Error(
      'The default query engine type (Node-API, "library") is currently not supported for 32bit Node. Please set `engineType = "binary"` in the "generator" block of your "schema.prisma" file (or use the environment variables "PRISMA_CLIENT_ENGINE_TYPE=binary" and/or "PRISMA_CLI_QUERY_ENGINE_TYPE=binary".)',
    );
}
var Yr = 'libquery_engine';
function xi(e, t) {
  let r = t === 'url';
  return e.includes('windows')
    ? r
      ? 'query_engine.dll.node'
      : `query_engine-${e}.dll.node`
    : e.includes('darwin')
    ? r
      ? `${Yr}.dylib.node`
      : `${Yr}-${e}.dylib.node`
    : r
    ? `${Yr}.so.node`
    : `${Yr}-${e}.so.node`;
}
var bs = I(require('child_process')),
  Ci = I(require('fs/promises')),
  rn = I(require('os'));
var je = Symbol.for('@ts-pattern/matcher'),
  Wu = Symbol.for('@ts-pattern/isVariadic'),
  Xr = '@ts-pattern/anonymous-select-key',
  bi = (e) => !!(e && typeof e == 'object'),
  Zr = (e) => e && !!e[je],
  Se = (e, t, r) => {
    if (Zr(e)) {
      let n = e[je](),
        { matched: i, selections: o } = n.match(t);
      return i && o && Object.keys(o).forEach((s) => r(s, o[s])), i;
    }
    if (bi(e)) {
      if (!bi(t)) return !1;
      if (Array.isArray(e)) {
        if (!Array.isArray(t)) return !1;
        let n = [],
          i = [],
          o = [];
        for (let s of e.keys()) {
          let a = e[s];
          Zr(a) && a[Wu] ? o.push(a) : o.length ? i.push(a) : n.push(a);
        }
        if (o.length) {
          if (o.length > 1)
            throw new Error(
              'Pattern error: Using `...P.array(...)` several times in a single pattern is not allowed.',
            );
          if (t.length < n.length + i.length) return !1;
          let s = t.slice(0, n.length),
            a = i.length === 0 ? [] : t.slice(-i.length),
            l = t.slice(n.length, i.length === 0 ? 1 / 0 : -i.length);
          return (
            n.every((u, c) => Se(u, s[c], r)) &&
            i.every((u, c) => Se(u, a[c], r)) &&
            (o.length === 0 || Se(o[0], l, r))
          );
        }
        return e.length === t.length && e.every((s, a) => Se(s, t[a], r));
      }
      return Object.keys(e).every((n) => {
        let i = e[n];
        return (n in t || (Zr((o = i)) && o[je]().matcherType === 'optional')) && Se(i, t[n], r);
        var o;
      });
    }
    return Object.is(t, e);
  },
  Ye = (e) => {
    var t, r, n;
    return bi(e)
      ? Zr(e)
        ? (t = (r = (n = e[je]()).getSelectionKeys) == null ? void 0 : r.call(n)) != null
          ? t
          : []
        : Array.isArray(e)
        ? Zt(e, Ye)
        : Zt(Object.values(e), Ye)
      : [];
  },
  Zt = (e, t) => e.reduce((r, n) => r.concat(t(n)), []);
function ve(e) {
  return Object.assign(e, {
    optional: () => zu(e),
    and: (t) => V(e, t),
    or: (t) => Yu(e, t),
    select: (t) => (t === void 0 ? ls(e) : ls(t, e)),
  });
}
function zu(e) {
  return ve({
    [je]: () => ({
      match: (t) => {
        let r = {},
          n = (i, o) => {
            r[i] = o;
          };
        return t === void 0
          ? (Ye(e).forEach((i) => n(i, void 0)), { matched: !0, selections: r })
          : { matched: Se(e, t, n), selections: r };
      },
      getSelectionKeys: () => Ye(e),
      matcherType: 'optional',
    }),
  });
}
function V(...e) {
  return ve({
    [je]: () => ({
      match: (t) => {
        let r = {},
          n = (i, o) => {
            r[i] = o;
          };
        return { matched: e.every((i) => Se(i, t, n)), selections: r };
      },
      getSelectionKeys: () => Zt(e, Ye),
      matcherType: 'and',
    }),
  });
}
function Yu(...e) {
  return ve({
    [je]: () => ({
      match: (t) => {
        let r = {},
          n = (i, o) => {
            r[i] = o;
          };
        return (
          Zt(e, Ye).forEach((i) => n(i, void 0)),
          { matched: e.some((i) => Se(i, t, n)), selections: r }
        );
      },
      getSelectionKeys: () => Zt(e, Ye),
      matcherType: 'or',
    }),
  });
}
function F(e) {
  return { [je]: () => ({ match: (t) => ({ matched: !!e(t) }) }) };
}
function ls(...e) {
  let t = typeof e[0] == 'string' ? e[0] : void 0,
    r = e.length === 2 ? e[1] : typeof e[0] == 'string' ? void 0 : e[0];
  return ve({
    [je]: () => ({
      match: (n) => {
        let i = { [t ?? Xr]: n };
        return {
          matched:
            r === void 0 ||
            Se(r, n, (o, s) => {
              i[o] = s;
            }),
          selections: i,
        };
      },
      getSelectionKeys: () => [t ?? Xr].concat(r === void 0 ? [] : Ye(r)),
    }),
  });
}
function Re(e) {
  return typeof e == 'number';
}
function pt(e) {
  return typeof e == 'string';
}
function We(e) {
  return typeof e == 'bigint';
}
var pg = ve(
  F(function (e) {
    return !0;
  }),
);
var dt = (e) =>
    Object.assign(ve(e), {
      startsWith: (t) => {
        return dt(V(e, ((r = t), F((n) => pt(n) && n.startsWith(r)))));
        var r;
      },
      endsWith: (t) => {
        return dt(V(e, ((r = t), F((n) => pt(n) && n.endsWith(r)))));
        var r;
      },
      minLength: (t) => dt(V(e, ((r) => F((n) => pt(n) && n.length >= r))(t))),
      maxLength: (t) => dt(V(e, ((r) => F((n) => pt(n) && n.length <= r))(t))),
      includes: (t) => {
        return dt(V(e, ((r = t), F((n) => pt(n) && n.includes(r)))));
        var r;
      },
      regex: (t) => {
        return dt(V(e, ((r = t), F((n) => pt(n) && !!n.match(r)))));
        var r;
      },
    }),
  dg = dt(F(pt)),
  Me = (e) =>
    Object.assign(ve(e), {
      between: (t, r) => Me(V(e, ((n, i) => F((o) => Re(o) && n <= o && i >= o))(t, r))),
      lt: (t) => Me(V(e, ((r) => F((n) => Re(n) && n < r))(t))),
      gt: (t) => Me(V(e, ((r) => F((n) => Re(n) && n > r))(t))),
      lte: (t) => Me(V(e, ((r) => F((n) => Re(n) && n <= r))(t))),
      gte: (t) => Me(V(e, ((r) => F((n) => Re(n) && n >= r))(t))),
      int: () =>
        Me(
          V(
            e,
            F((t) => Re(t) && Number.isInteger(t)),
          ),
        ),
      finite: () =>
        Me(
          V(
            e,
            F((t) => Re(t) && Number.isFinite(t)),
          ),
        ),
      positive: () =>
        Me(
          V(
            e,
            F((t) => Re(t) && t > 0),
          ),
        ),
      negative: () =>
        Me(
          V(
            e,
            F((t) => Re(t) && t < 0),
          ),
        ),
    }),
  mg = Me(F(Re)),
  ze = (e) =>
    Object.assign(ve(e), {
      between: (t, r) => ze(V(e, ((n, i) => F((o) => We(o) && n <= o && i >= o))(t, r))),
      lt: (t) => ze(V(e, ((r) => F((n) => We(n) && n < r))(t))),
      gt: (t) => ze(V(e, ((r) => F((n) => We(n) && n > r))(t))),
      lte: (t) => ze(V(e, ((r) => F((n) => We(n) && n <= r))(t))),
      gte: (t) => ze(V(e, ((r) => F((n) => We(n) && n >= r))(t))),
      positive: () =>
        ze(
          V(
            e,
            F((t) => We(t) && t > 0),
          ),
        ),
      negative: () =>
        ze(
          V(
            e,
            F((t) => We(t) && t < 0),
          ),
        ),
    }),
  fg = ze(F(We)),
  gg = ve(
    F(function (e) {
      return typeof e == 'boolean';
    }),
  ),
  yg = ve(
    F(function (e) {
      return typeof e == 'symbol';
    }),
  ),
  hg = ve(
    F(function (e) {
      return e == null;
    }),
  );
var wi = { matched: !1, value: void 0 };
function At(e) {
  return new Ei(e, wi);
}
var Ei = class e {
  constructor(t, r) {
    (this.input = void 0), (this.state = void 0), (this.input = t), (this.state = r);
  }
  with(...t) {
    if (this.state.matched) return this;
    let r = t[t.length - 1],
      n = [t[0]],
      i;
    t.length === 3 && typeof t[1] == 'function'
      ? (n.push(t[0]), (i = t[1]))
      : t.length > 2 && n.push(...t.slice(1, t.length - 1));
    let o = !1,
      s = {},
      a = (u, c) => {
        (o = !0), (s[u] = c);
      },
      l =
        !n.some((u) => Se(u, this.input, a)) || (i && !i(this.input))
          ? wi
          : { matched: !0, value: r(o ? (Xr in s ? s[Xr] : s) : this.input, this.input) };
    return new e(this.input, l);
  }
  when(t, r) {
    if (this.state.matched) return this;
    let n = !!t(this.input);
    return new e(this.input, n ? { matched: !0, value: r(this.input, this.input) } : wi);
  }
  otherwise(t) {
    return this.state.matched ? this.state.value : t(this.input);
  }
  exhaustive() {
    return this.run();
  }
  run() {
    if (this.state.matched) return this.state.value;
    let t;
    try {
      t = JSON.stringify(this.input);
    } catch {
      t = this.input;
    }
    throw new Error(`Pattern matching error: no pattern matches value ${t}`);
  }
  returnType() {
    return this;
  }
};
var ws = require('util');
var ys = I(gs());
function tr(e) {
  return (0, ys.default)(e, e, { fallback: le });
}
var ec = { warn: Ae('prisma:warn') },
  tc = { warn: () => !process.env.PRISMA_DISABLE_WARNINGS };
function rr(e, ...t) {
  tc.warn() && console.warn(`${ec.warn} ${e}`, ...t);
}
var rc = (0, ws.promisify)(bs.default.exec),
  de = L('prisma:get-platform'),
  nc = ['1.0.x', '1.1.x', '3.0.x'];
async function Es() {
  let e = rn.default.platform(),
    t = process.arch;
  if (e === 'freebsd') {
    let s = await nn('freebsd-version');
    if (s && s.trim().length > 0) {
      let l = /^(\d+)\.?/.exec(s);
      if (l) return { platform: 'freebsd', targetDistro: `freebsd${l[1]}`, arch: t };
    }
  }
  if (e !== 'linux') return { platform: e, arch: t };
  let r = await oc(),
    n = await mc(),
    i = ac({ arch: t, archFromUname: n, familyDistro: r.familyDistro }),
    { libssl: o } = await lc(i);
  return { platform: 'linux', libssl: o, arch: t, archFromUname: n, ...r };
}
function ic(e) {
  let t = /^ID="?([^"\n]*)"?$/im,
    r = /^ID_LIKE="?([^"\n]*)"?$/im,
    n = t.exec(e),
    i = (n && n[1] && n[1].toLowerCase()) || '',
    o = r.exec(e),
    s = (o && o[1] && o[1].toLowerCase()) || '',
    a = At({ id: i, idLike: s })
      .with({ id: 'alpine' }, ({ id: l }) => ({
        targetDistro: 'musl',
        familyDistro: l,
        originalDistro: l,
      }))
      .with({ id: 'raspbian' }, ({ id: l }) => ({
        targetDistro: 'arm',
        familyDistro: 'debian',
        originalDistro: l,
      }))
      .with({ id: 'nixos' }, ({ id: l }) => ({
        targetDistro: 'nixos',
        originalDistro: l,
        familyDistro: 'nixos',
      }))
      .with({ id: 'debian' }, { id: 'ubuntu' }, ({ id: l }) => ({
        targetDistro: 'debian',
        familyDistro: 'debian',
        originalDistro: l,
      }))
      .with({ id: 'rhel' }, { id: 'centos' }, { id: 'fedora' }, ({ id: l }) => ({
        targetDistro: 'rhel',
        familyDistro: 'rhel',
        originalDistro: l,
      }))
      .when(
        ({ idLike: l }) => l.includes('debian') || l.includes('ubuntu'),
        ({ id: l }) => ({ targetDistro: 'debian', familyDistro: 'debian', originalDistro: l }),
      )
      .when(
        ({ idLike: l }) => i === 'arch' || l.includes('arch'),
        ({ id: l }) => ({ targetDistro: 'debian', familyDistro: 'arch', originalDistro: l }),
      )
      .when(
        ({ idLike: l }) =>
          l.includes('centos') || l.includes('fedora') || l.includes('rhel') || l.includes('suse'),
        ({ id: l }) => ({ targetDistro: 'rhel', familyDistro: 'rhel', originalDistro: l }),
      )
      .otherwise(({ id: l }) => ({
        targetDistro: void 0,
        familyDistro: void 0,
        originalDistro: l,
      }));
  return (
    de(`Found distro info:
${JSON.stringify(a, null, 2)}`),
    a
  );
}
async function oc() {
  let e = '/etc/os-release';
  try {
    let t = await Ci.default.readFile(e, { encoding: 'utf-8' });
    return ic(t);
  } catch {
    return { targetDistro: void 0, familyDistro: void 0, originalDistro: void 0 };
  }
}
function sc(e) {
  let t = /^OpenSSL\s(\d+\.\d+)\.\d+/.exec(e);
  if (t) {
    let r = `${t[1]}.x`;
    return Ps(r);
  }
}
function hs(e) {
  let t = /libssl\.so\.(\d)(\.\d)?/.exec(e);
  if (t) {
    let r = `${t[1]}${t[2] ?? '.0'}.x`;
    return Ps(r);
  }
}
function Ps(e) {
  let t = (() => {
    if (Ts(e)) return e;
    let r = e.split('.');
    return (r[1] = '0'), r.join('.');
  })();
  if (nc.includes(t)) return t;
}
function ac(e) {
  return At(e)
    .with(
      { familyDistro: 'musl' },
      () => (de('Trying platform-specific paths for "alpine"'), ['/lib']),
    )
    .with(
      { familyDistro: 'debian' },
      ({ archFromUname: t }) => (
        de('Trying platform-specific paths for "debian" (and "ubuntu")'),
        [`/usr/lib/${t}-linux-gnu`, `/lib/${t}-linux-gnu`]
      ),
    )
    .with(
      { familyDistro: 'rhel' },
      () => (de('Trying platform-specific paths for "rhel"'), ['/lib64', '/usr/lib64']),
    )
    .otherwise(
      ({ familyDistro: t, arch: r, archFromUname: n }) => (
        de(`Don't know any platform-specific paths for "${t}" on ${r} (${n})`), []
      ),
    );
}
async function lc(e) {
  let t = 'grep -v "libssl.so.0"',
    r = await xs(e);
  if (r) {
    de(`Found libssl.so file using platform-specific paths: ${r}`);
    let o = hs(r);
    if ((de(`The parsed libssl version is: ${o}`), o))
      return { libssl: o, strategy: 'libssl-specific-path' };
  }
  de('Falling back to "ldconfig" and other generic paths');
  let n = await nn(`ldconfig -p | sed "s/.*=>s*//" | sed "s|.*/||" | grep libssl | sort | ${t}`);
  if ((n || (n = await xs(['/lib64', '/usr/lib64', '/lib'])), n)) {
    de(`Found libssl.so file using "ldconfig" or other generic paths: ${n}`);
    let o = hs(n);
    if ((de(`The parsed libssl version is: ${o}`), o)) return { libssl: o, strategy: 'ldconfig' };
  }
  let i = await nn('openssl version -v');
  if (i) {
    de(`Found openssl binary with version: ${i}`);
    let o = sc(i);
    if ((de(`The parsed openssl version is: ${o}`), o))
      return { libssl: o, strategy: 'openssl-binary' };
  }
  return de("Couldn't find any version of libssl or OpenSSL in the system"), {};
}
async function xs(e) {
  for (let t of e) {
    let r = await uc(t);
    if (r) return r;
  }
}
async function uc(e) {
  try {
    return (await Ci.default.readdir(e)).find(
      (r) => r.startsWith('libssl.so.') && !r.startsWith('libssl.so.0'),
    );
  } catch (t) {
    if (t.code === 'ENOENT') return;
    throw t;
  }
}
async function St() {
  let { binaryTarget: e } = await vs();
  return e;
}
function cc(e) {
  return e.binaryTarget !== void 0;
}
async function _i() {
  let { memoized: e, ...t } = await vs();
  return t;
}
var tn = {};
async function vs() {
  if (cc(tn)) return Promise.resolve({ ...tn, memoized: !0 });
  let e = await Es(),
    t = pc(e);
  return (tn = { ...e, binaryTarget: t }), { ...tn, memoized: !1 };
}
function pc(e) {
  let {
    platform: t,
    arch: r,
    archFromUname: n,
    libssl: i,
    targetDistro: o,
    familyDistro: s,
    originalDistro: a,
  } = e;
  t === 'linux' &&
    !['x64', 'arm64'].includes(r) &&
    rr(
      `Prisma only officially supports Linux on amd64 (x86_64) and arm64 (aarch64) system architectures. If you are using your own custom Prisma engines, you can ignore this warning, as long as you've compiled the engines for your system architecture "${n}".`,
    );
  let l = '1.1.x';
  if (t === 'linux' && i === void 0) {
    let c = At({ familyDistro: s })
      .with(
        { familyDistro: 'debian' },
        () =>
          "Please manually install OpenSSL via `apt-get update -y && apt-get install -y openssl` and try installing Prisma again. If you're running Prisma on Docker, add this command to your Dockerfile, or switch to an image that already has OpenSSL installed.",
      )
      .otherwise(() => 'Please manually install OpenSSL and try installing Prisma again.');
    rr(`Prisma failed to detect the libssl/openssl version to use, and may not work as expected. Defaulting to "openssl-${l}".
${c}`);
  }
  let u = 'debian';
  if (
    (t === 'linux' &&
      o === void 0 &&
      rr(`Prisma doesn't know which engines to download for the Linux distro "${a}". Falling back to Prisma engines built "${u}".
Please report your experience by creating an issue at ${tr(
        'https://github.com/prisma/prisma/issues',
      )} so we can add your distro to the list of known supported distros.`),
    t === 'darwin' && r === 'arm64')
  )
    return 'darwin-arm64';
  if (t === 'darwin') return 'darwin';
  if (t === 'win32') return 'windows';
  if (t === 'freebsd') return o;
  if (t === 'openbsd') return 'openbsd';
  if (t === 'netbsd') return 'netbsd';
  if (t === 'linux' && o === 'nixos') return 'linux-nixos';
  if (t === 'linux' && r === 'arm64')
    return `${o === 'musl' ? 'linux-musl-arm64' : 'linux-arm64'}-openssl-${i || l}`;
  if (t === 'linux' && r === 'arm') return `linux-arm-openssl-${i || l}`;
  if (t === 'linux' && o === 'musl') {
    let c = 'linux-musl';
    return !i || Ts(i) ? c : `${c}-openssl-${i}`;
  }
  return t === 'linux' && o && i
    ? `${o}-openssl-${i}`
    : (t !== 'linux' &&
        rr(
          `Prisma detected unknown OS "${t}" and may not work as expected. Defaulting to "linux".`,
        ),
      i ? `${u}-openssl-${i}` : o ? `${o}-openssl-${l}` : `${u}-openssl-${l}`);
}
async function dc(e) {
  try {
    return await e();
  } catch {
    return;
  }
}
function nn(e) {
  return dc(async () => {
    let t = await rc(e);
    return de(`Command "${e}" successfully returned "${t.stdout}"`), t.stdout;
  });
}
async function mc() {
  return typeof rn.default.machine == 'function'
    ? rn.default.machine()
    : (await nn('uname -m'))?.trim();
}
function Ts(e) {
  return e.startsWith('1.');
}
var Ai = [
  'darwin',
  'darwin-arm64',
  'debian-openssl-1.0.x',
  'debian-openssl-1.1.x',
  'debian-openssl-3.0.x',
  'rhel-openssl-1.0.x',
  'rhel-openssl-1.1.x',
  'rhel-openssl-3.0.x',
  'linux-arm64-openssl-1.1.x',
  'linux-arm64-openssl-1.0.x',
  'linux-arm64-openssl-3.0.x',
  'linux-arm-openssl-1.1.x',
  'linux-arm-openssl-1.0.x',
  'linux-arm-openssl-3.0.x',
  'linux-musl',
  'linux-musl-openssl-3.0.x',
  'linux-musl-arm64-openssl-1.1.x',
  'linux-musl-arm64-openssl-3.0.x',
  'linux-nixos',
  'linux-static-x64',
  'linux-static-arm64',
  'windows',
  'freebsd11',
  'freebsd12',
  'freebsd13',
  'openbsd',
  'netbsd',
  'arm',
];
var Si = I(As()),
  an = I(require('fs'));
var kt = I(require('path'));
function Rs(e) {
  let t = e.ignoreProcessEnv ? {} : process.env,
    r = (n) =>
      n.match(/(.?\${(?:[a-zA-Z0-9_]+)?})/g)?.reduce(function (o, s) {
        let a = /(.?)\${([a-zA-Z0-9_]+)?}/g.exec(s);
        if (!a) return o;
        let l = a[1],
          u,
          c;
        if (l === '\\') (c = a[0]), (u = c.replace('\\$', '$'));
        else {
          let p = a[2];
          (c = a[0].substring(l.length)),
            (u = Object.hasOwnProperty.call(t, p) ? t[p] : e.parsed[p] || ''),
            (u = r(u));
        }
        return o.replace(c, u);
      }, n) ?? n;
  for (let n in e.parsed) {
    let i = Object.hasOwnProperty.call(t, n) ? t[n] : e.parsed[n];
    e.parsed[n] = r(i);
  }
  for (let n in e.parsed) t[n] = e.parsed[n];
  return e;
}
var Mi = L('prisma:tryLoadEnv');
function nr({ rootEnvPath: e, schemaEnvPath: t }, r = { conflictCheck: 'none' }) {
  let n = Ms(e);
  r.conflictCheck !== 'none' && vc(n, t, r.conflictCheck);
  let i = null;
  return (
    Ss(n?.path, t) || (i = Ms(t)),
    !n && !i && Mi('No Environment variables loaded'),
    i?.dotenvResult.error
      ? console.error(Pe(pe('Schema Env Error: ')) + i.dotenvResult.error)
      : {
          message: [n?.message, i?.message].filter(Boolean).join(`
`),
          parsed: { ...n?.dotenvResult?.parsed, ...i?.dotenvResult?.parsed },
        }
  );
}
function vc(e, t, r) {
  let n = e?.dotenvResult.parsed,
    i = !Ss(e?.path, t);
  if (n && t && i && an.default.existsSync(t)) {
    let o = Si.default.parse(an.default.readFileSync(t)),
      s = [];
    for (let a in o) n[a] === o[a] && s.push(a);
    if (s.length > 0) {
      let a = kt.default.relative(process.cwd(), e.path),
        l = kt.default.relative(process.cwd(), t);
      if (r === 'error') {
        let u = `There is a conflict between env var${s.length > 1 ? 's' : ''} in ${le(a)} and ${le(
          l,
        )}
Conflicting env vars:
${s.map((c) => `  ${pe(c)}`).join(`
`)}

We suggest to move the contents of ${le(l)} to ${le(a)} to consolidate your env vars.
`;
        throw new Error(u);
      } else if (r === 'warn') {
        let u = `Conflict for env var${s.length > 1 ? 's' : ''} ${s
          .map((c) => pe(c))
          .join(', ')} in ${le(a)} and ${le(l)}
Env vars from ${le(l)} overwrite the ones from ${le(a)}
      `;
        console.warn(`${Ae('warn(prisma)')} ${u}`);
      }
    }
  }
}
function Ms(e) {
  return Tc(e)
    ? (Mi(`Environment variables loaded from ${e}`),
      {
        dotenvResult: Rs(
          Si.default.config({ path: e, debug: process.env.DOTENV_CONFIG_DEBUG ? !0 : void 0 }),
        ),
        message: Je(`Environment variables loaded from ${kt.default.relative(process.cwd(), e)}`),
        path: e,
      })
    : (Mi(`Environment variables not found at ${e}`), null);
}
function Ss(e, t) {
  return e && t && kt.default.resolve(e) === kt.default.resolve(t);
}
function Tc(e) {
  return !!(e && an.default.existsSync(e));
}
var ks = 'library';
function mt(e) {
  let t = Cc();
  return (
    t ||
    (e?.config.engineType === 'library'
      ? 'library'
      : e?.config.engineType === 'binary'
      ? 'binary'
      : e?.config.engineType === 'wasm'
      ? 'wasm'
      : ks)
  );
}
function Cc() {
  let e = process.env.PRISMA_CLIENT_ENGINE_TYPE;
  return e === 'library' ? 'library' : e === 'binary' ? 'binary' : e === 'wasm' ? 'wasm' : void 0;
}
var Rc = I(ki());
var q = I(require('path')),
  Mc = I(ki()),
  Zg = L('prisma:engines');
function Ls() {
  return q.default.join(__dirname, '../');
}
var Xg = 'libquery-engine';
q.default.join(__dirname, '../query-engine-darwin');
q.default.join(__dirname, '../query-engine-darwin-arm64');
q.default.join(__dirname, '../query-engine-debian-openssl-1.0.x');
q.default.join(__dirname, '../query-engine-debian-openssl-1.1.x');
q.default.join(__dirname, '../query-engine-debian-openssl-3.0.x');
q.default.join(__dirname, '../query-engine-linux-static-x64');
q.default.join(__dirname, '../query-engine-linux-static-arm64');
q.default.join(__dirname, '../query-engine-rhel-openssl-1.0.x');
q.default.join(__dirname, '../query-engine-rhel-openssl-1.1.x');
q.default.join(__dirname, '../query-engine-rhel-openssl-3.0.x');
q.default.join(__dirname, '../libquery_engine-darwin.dylib.node');
q.default.join(__dirname, '../libquery_engine-darwin-arm64.dylib.node');
q.default.join(__dirname, '../libquery_engine-debian-openssl-1.0.x.so.node');
q.default.join(__dirname, '../libquery_engine-debian-openssl-1.1.x.so.node');
q.default.join(__dirname, '../libquery_engine-debian-openssl-3.0.x.so.node');
q.default.join(__dirname, '../libquery_engine-linux-arm64-openssl-1.0.x.so.node');
q.default.join(__dirname, '../libquery_engine-linux-arm64-openssl-1.1.x.so.node');
q.default.join(__dirname, '../libquery_engine-linux-arm64-openssl-3.0.x.so.node');
q.default.join(__dirname, '../libquery_engine-linux-musl.so.node');
q.default.join(__dirname, '../libquery_engine-linux-musl-openssl-3.0.x.so.node');
q.default.join(__dirname, '../libquery_engine-rhel-openssl-1.0.x.so.node');
q.default.join(__dirname, '../libquery_engine-rhel-openssl-1.1.x.so.node');
q.default.join(__dirname, '../libquery_engine-rhel-openssl-3.0.x.so.node');
q.default.join(__dirname, '../query_engine-windows.dll.node');
var Ii = I(require('fs')),
  $s = L('chmodPlusX');
function Fi(e) {
  if (process.platform === 'win32') return;
  let t = Ii.default.statSync(e),
    r = t.mode | 64 | 8 | 1;
  if (t.mode === r) {
    $s(`Execution permissions of ${e} are fine`);
    return;
  }
  let n = r.toString(8).slice(-3);
  $s(`Have to call chmodPlusX on ${e}`), Ii.default.chmodSync(e, n);
}
function Di(e) {
  let t = e.e,
    r = (a) => `Prisma cannot find the required \`${a}\` system library in your system`,
    n = t.message.includes('cannot open shared object file'),
    i = `Please refer to the documentation about Prisma's system requirements: ${tr(
      'https://pris.ly/d/system-requirements',
    )}`,
    o = `Unable to require(\`${Je(e.id)}\`).`,
    s = At({ message: t.message, code: t.code })
      .with({ code: 'ENOENT' }, () => 'File does not exist.')
      .when(
        ({ message: a }) => n && a.includes('libz'),
        () => `${r('libz')}. Please install it and try again.`,
      )
      .when(
        ({ message: a }) => n && a.includes('libgcc_s'),
        () => `${r('libgcc_s')}. Please install it and try again.`,
      )
      .when(
        ({ message: a }) => n && a.includes('libssl'),
        () => {
          let a = e.platformInfo.libssl ? `openssl-${e.platformInfo.libssl}` : 'openssl';
          return `${r('libssl')}. Please install ${a} and try again.`;
        },
      )
      .when(
        ({ message: a }) => a.includes('GLIBC'),
        () =>
          `Prisma has detected an incompatible version of the \`glibc\` C standard library installed in your system. This probably means your system may be too old to run Prisma. ${i}`,
      )
      .when(
        ({ message: a }) => e.platformInfo.platform === 'linux' && a.includes('symbol not found'),
        () =>
          `The Prisma engines are not compatible with your system ${e.platformInfo.originalDistro} on (${e.platformInfo.archFromUname}) which uses the \`${e.platformInfo.binaryTarget}\` binaryTarget by default. ${i}`,
      )
      .otherwise(() => `The Prisma engines do not seem to be compatible with your system. ${i}`);
  return `${o}
${s}

Details: ${t.message}`;
}
var ir = I(require('path'));
function Oi(e) {
  return ir.default.sep === ir.default.posix.sep
    ? e
    : e.split(ir.default.sep).join(ir.default.posix.sep);
}
var js = I(Ni());
function $i(e) {
  return String(new Li(e));
}
var Li = class {
  constructor(t) {
    this.config = t;
  }
  toString() {
    let { config: t } = this,
      r = t.provider.fromEnvVar ? `env("${t.provider.fromEnvVar}")` : t.provider.value,
      n = JSON.parse(JSON.stringify({ provider: r, binaryTargets: Sc(t.binaryTargets) }));
    return `generator ${t.name} {
${(0, js.default)(kc(n), 2)}
}`;
  }
};
function Sc(e) {
  let t;
  if (e.length > 0) {
    let r = e.find((n) => n.fromEnvVar !== null);
    r ? (t = `env("${r.fromEnvVar}")`) : (t = e.map((n) => (n.native ? 'native' : n.value)));
  } else t = void 0;
  return t;
}
function kc(e) {
  let t = Object.keys(e).reduce((r, n) => Math.max(r, n.length), 0);
  return Object.entries(e).map(([r, n]) => `${r.padEnd(t)} = ${Ic(n)}`).join(`
`);
}
function Ic(e) {
  return JSON.parse(
    JSON.stringify(e, (t, r) =>
      Array.isArray(r) ? `[${r.map((n) => JSON.stringify(n)).join(', ')}]` : JSON.stringify(r),
    ),
  );
}
var sr = {};
Pt(sr, {
  error: () => Oc,
  info: () => Dc,
  log: () => Fc,
  query: () => Nc,
  should: () => Vs,
  tags: () => or,
  warn: () => qi,
});
var or = {
    error: Pe('prisma:error'),
    warn: Ae('prisma:warn'),
    info: He('prisma:info'),
    query: _t('prisma:query'),
  },
  Vs = { warn: () => !process.env.PRISMA_DISABLE_WARNINGS };
function Fc(...e) {
  console.log(...e);
}
function qi(e, ...t) {
  Vs.warn() && console.warn(`${or.warn} ${e}`, ...t);
}
function Dc(e, ...t) {
  console.info(`${or.info} ${e}`, ...t);
}
function Oc(e, ...t) {
  console.error(`${or.error} ${e}`, ...t);
}
function Nc(e, ...t) {
  console.log(`${or.query} ${e}`, ...t);
}
function un(e, t) {
  if (!e)
    throw new Error(
      `${t}. This should never happen. If you see this error, please, open an issue at https://github.com/prisma/prisma/issues/new?assignees=&labels=kind%2Fbug&projects=&template=bug_report.yml`,
    );
}
function ft(e, t) {
  throw new Error(t);
}
function Vi(e, t) {
  return Object.prototype.hasOwnProperty.call(e, t);
}
var Bi = (e, t) => e.reduce((r, n) => ((r[t(n)] = n), r), {});
function It(e, t) {
  let r = {};
  for (let n of Object.keys(e)) r[n] = t(e[n], n);
  return r;
}
function Ui(e, t) {
  if (e.length === 0) return;
  let r = e[0];
  for (let n = 1; n < e.length; n++) t(r, e[n]) < 0 && (r = e[n]);
  return r;
}
function E(e, t) {
  Object.defineProperty(e, 'name', { value: t, configurable: !0 });
}
var Gs = new Set(),
  ar = (e, t, ...r) => {
    Gs.has(e) || (Gs.add(e), qi(t, ...r));
  };
var W = class extends Error {
  constructor(r, { code: n, clientVersion: i, meta: o, batchRequestIdx: s }) {
    super(r);
    (this.name = 'PrismaClientKnownRequestError'),
      (this.code = n),
      (this.clientVersion = i),
      (this.meta = o),
      Object.defineProperty(this, 'batchRequestIdx', { value: s, enumerable: !1, writable: !0 });
  }
  get [Symbol.toStringTag]() {
    return 'PrismaClientKnownRequestError';
  }
};
E(W, 'PrismaClientKnownRequestError');
var Ve = class extends W {
  constructor(t, r) {
    super(t, { code: 'P2025', clientVersion: r }), (this.name = 'NotFoundError');
  }
};
E(Ve, 'NotFoundError');
var k = class e extends Error {
  constructor(r, n, i) {
    super(r);
    (this.name = 'PrismaClientInitializationError'),
      (this.clientVersion = n),
      (this.errorCode = i),
      Error.captureStackTrace(e);
  }
  get [Symbol.toStringTag]() {
    return 'PrismaClientInitializationError';
  }
};
E(k, 'PrismaClientInitializationError');
var he = class extends Error {
  constructor(r, n) {
    super(r);
    (this.name = 'PrismaClientRustPanicError'), (this.clientVersion = n);
  }
  get [Symbol.toStringTag]() {
    return 'PrismaClientRustPanicError';
  }
};
E(he, 'PrismaClientRustPanicError');
var z = class extends Error {
  constructor(r, { clientVersion: n, batchRequestIdx: i }) {
    super(r);
    (this.name = 'PrismaClientUnknownRequestError'),
      (this.clientVersion = n),
      Object.defineProperty(this, 'batchRequestIdx', { value: i, writable: !0, enumerable: !1 });
  }
  get [Symbol.toStringTag]() {
    return 'PrismaClientUnknownRequestError';
  }
};
E(z, 'PrismaClientUnknownRequestError');
var se = class extends Error {
  constructor(r, { clientVersion: n }) {
    super(r);
    this.name = 'PrismaClientValidationError';
    this.clientVersion = n;
  }
  get [Symbol.toStringTag]() {
    return 'PrismaClientValidationError';
  }
};
E(se, 'PrismaClientValidationError');
var Ft = class {
  constructor(t) {
    this._engine = t;
  }
  prometheus(t) {
    return this._engine.metrics({ format: 'prometheus', ...t });
  }
  json(t) {
    return this._engine.metrics({ format: 'json', ...t });
  }
};
function ur(e) {
  let t;
  return {
    get() {
      return t || (t = { value: e() }), t.value;
    },
  };
}
function Js(e, t) {
  let r = ur(() => $c(t));
  Object.defineProperty(e, 'dmmf', { get: () => r.get() });
}
function $c(e) {
  return { datamodel: { models: Ki(e.models), enums: Ki(e.enums), types: Ki(e.types) } };
}
function Ki(e) {
  return Object.entries(e).map(([t, r]) => ({ name: t, ...r }));
}
var qc = ['JsonNullValueInput', 'NullableJsonNullValueInput', 'JsonNullValueFilter'],
  pn = Symbol(),
  Qi = new WeakMap(),
  ke = class {
    constructor(t) {
      t === pn
        ? Qi.set(this, `Prisma.${this._getName()}`)
        : Qi.set(this, `new Prisma.${this._getNamespace()}.${this._getName()}()`);
    }
    _getName() {
      return this.constructor.name;
    }
    toString() {
      return Qi.get(this);
    }
  },
  cr = class extends ke {
    _getNamespace() {
      return 'NullTypes';
    }
  },
  pr = class extends cr {};
Gi(pr, 'DbNull');
var dr = class extends cr {};
Gi(dr, 'JsonNull');
var mr = class extends cr {};
Gi(mr, 'AnyNull');
var dn = {
  classes: { DbNull: pr, JsonNull: dr, AnyNull: mr },
  instances: { DbNull: new pr(pn), JsonNull: new dr(pn), AnyNull: new mr(pn) },
};
function Gi(e, t) {
  Object.defineProperty(e, 'name', { value: t, configurable: !0 });
}
function fr(e) {
  return {
    ok: !1,
    error: e,
    map() {
      return fr(e);
    },
    flatMap() {
      return fr(e);
    },
  };
}
var Ji = class {
    constructor() {
      this.registeredErrors = [];
    }
    consumeError(t) {
      return this.registeredErrors[t];
    }
    registerNewError(t) {
      let r = 0;
      for (; this.registeredErrors[r] !== void 0; ) r++;
      return (this.registeredErrors[r] = { error: t }), r;
    }
  },
  Hi = (e) => {
    let t = new Ji(),
      r = Ze(t, e.startTransaction.bind(e));
    return {
      errorRegistry: t,
      queryRaw: Ze(t, e.queryRaw.bind(e)),
      executeRaw: Ze(t, e.executeRaw.bind(e)),
      flavour: e.flavour,
      startTransaction: async (...n) => (await r(...n)).map((o) => jc(t, o)),
      close: Ze(t, e.close.bind(e)),
    };
  },
  jc = (e, t) => ({
    flavour: t.flavour,
    options: t.options,
    queryRaw: Ze(e, t.queryRaw.bind(t)),
    executeRaw: Ze(e, t.executeRaw.bind(t)),
    commit: Ze(e, t.commit.bind(t)),
    rollback: Ze(e, t.rollback.bind(t)),
    dispose: Vc(e, t.dispose.bind(t)),
  });
function Ze(e, t) {
  return async (...r) => {
    try {
      return await t(...r);
    } catch (n) {
      let i = e.registerNewError(n);
      return fr({ kind: 'GenericJs', id: i });
    }
  };
}
function Vc(e, t) {
  return (...r) => {
    try {
      return t(...r);
    } catch (n) {
      let i = e.registerNewError(n);
      return fr({ kind: 'GenericJs', id: i });
    }
  };
}
var du = require('async_hooks'),
  mu = require('events'),
  fu = I(require('fs')),
  Vr = I(require('path'));
var me = class e {
  constructor(t, r) {
    if (t.length - 1 !== r.length)
      throw t.length === 0
        ? new TypeError('Expected at least 1 string')
        : new TypeError(`Expected ${t.length} strings to have ${t.length - 1} values`);
    let n = r.reduce((s, a) => s + (a instanceof e ? a.values.length : 1), 0);
    (this.values = new Array(n)), (this.strings = new Array(n + 1)), (this.strings[0] = t[0]);
    let i = 0,
      o = 0;
    for (; i < r.length; ) {
      let s = r[i++],
        a = t[i];
      if (s instanceof e) {
        this.strings[o] += s.strings[0];
        let l = 0;
        for (; l < s.values.length; )
          (this.values[o++] = s.values[l++]), (this.strings[o] = s.strings[l]);
        this.strings[o] += a;
      } else (this.values[o++] = s), (this.strings[o] = a);
    }
  }
  get text() {
    let t = 1,
      r = this.strings[0];
    for (; t < this.strings.length; ) r += `$${t}${this.strings[t++]}`;
    return r;
  }
  get sql() {
    let t = 1,
      r = this.strings[0];
    for (; t < this.strings.length; ) r += `?${this.strings[t++]}`;
    return r;
  }
  inspect() {
    return { text: this.text, sql: this.sql, values: this.values };
  }
};
function Hs(e, t = ',', r = '', n = '') {
  if (e.length === 0)
    throw new TypeError(
      'Expected `join([])` to be called with an array of multiple elements, but got an empty array',
    );
  return new me([r, ...Array(e.length - 1).fill(t), n], e);
}
function Wi(e) {
  return new me([e], []);
}
var Ws = Wi('');
function zi(e, ...t) {
  return new me(e, t);
}
function gr(e) {
  return {
    getKeys() {
      return Object.keys(e);
    },
    getPropertyValue(t) {
      return e[t];
    },
  };
}
function ue(e, t) {
  return {
    getKeys() {
      return [e];
    },
    getPropertyValue() {
      return t();
    },
  };
}
var Ie = class {
  constructor() {
    this._map = new Map();
  }
  get(t) {
    return this._map.get(t)?.value;
  }
  set(t, r) {
    this._map.set(t, { value: r });
  }
  getOrCreate(t, r) {
    let n = this._map.get(t);
    if (n) return n.value;
    let i = r();
    return this.set(t, i), i;
  }
};
function gt(e) {
  let t = new Ie();
  return {
    getKeys() {
      return e.getKeys();
    },
    getPropertyValue(r) {
      return t.getOrCreate(r, () => e.getPropertyValue(r));
    },
    getPropertyDescriptor(r) {
      return e.getPropertyDescriptor?.(r);
    },
  };
}
var Zs = require('util');
var mn = { enumerable: !0, configurable: !0, writable: !0 };
function fn(e) {
  let t = new Set(e);
  return {
    getOwnPropertyDescriptor: () => mn,
    has: (r, n) => t.has(n),
    set: (r, n, i) => t.add(n) && Reflect.set(r, n, i),
    ownKeys: () => [...t],
  };
}
var zs = Symbol.for('nodejs.util.inspect.custom');
function Fe(e, t) {
  let r = Bc(t),
    n = new Set(),
    i = new Proxy(e, {
      get(o, s) {
        if (n.has(s)) return o[s];
        let a = r.get(s);
        return a ? a.getPropertyValue(s) : o[s];
      },
      has(o, s) {
        if (n.has(s)) return !0;
        let a = r.get(s);
        return a ? a.has?.(s) ?? !0 : Reflect.has(o, s);
      },
      ownKeys(o) {
        let s = Ys(Reflect.ownKeys(o), r),
          a = Ys(Array.from(r.keys()), r);
        return [...new Set([...s, ...a, ...n])];
      },
      set(o, s, a) {
        return r.get(s)?.getPropertyDescriptor?.(s)?.writable === !1
          ? !1
          : (n.add(s), Reflect.set(o, s, a));
      },
      getOwnPropertyDescriptor(o, s) {
        let a = Reflect.getOwnPropertyDescriptor(o, s);
        if (a && !a.configurable) return a;
        let l = r.get(s);
        return l ? (l.getPropertyDescriptor ? { ...mn, ...l?.getPropertyDescriptor(s) } : mn) : a;
      },
      defineProperty(o, s, a) {
        return n.add(s), Reflect.defineProperty(o, s, a);
      },
    });
  return (
    (i[zs] = function (o, s, a = Zs.inspect) {
      let l = { ...this };
      return delete l[zs], a(l, s);
    }),
    i
  );
}
function Bc(e) {
  let t = new Map();
  for (let r of e) {
    let n = r.getKeys();
    for (let i of n) t.set(i, r);
  }
  return t;
}
function Ys(e, t) {
  return e.filter((r) => t.get(r)?.has?.(r) ?? !0);
}
function yr(e) {
  return {
    getKeys() {
      return e;
    },
    has() {
      return !1;
    },
    getPropertyValue() {},
  };
}
var Dt = class {
  constructor(t = 0, r) {
    this.context = r;
    this.lines = [];
    this.currentLine = '';
    this.currentIndent = 0;
    this.currentIndent = t;
  }
  write(t) {
    return typeof t == 'string' ? (this.currentLine += t) : t.write(this), this;
  }
  writeJoined(t, r) {
    let n = r.length - 1;
    for (let i = 0; i < r.length; i++) this.write(r[i]), i !== n && this.write(t);
    return this;
  }
  writeLine(t) {
    return this.write(t).newLine();
  }
  newLine() {
    this.lines.push(this.indentedCurrentLine()),
      (this.currentLine = ''),
      (this.marginSymbol = void 0);
    let t = this.afterNextNewLineCallback;
    return (this.afterNextNewLineCallback = void 0), t?.(), this;
  }
  withIndent(t) {
    return this.indent(), t(this), this.unindent(), this;
  }
  afterNextNewline(t) {
    return (this.afterNextNewLineCallback = t), this;
  }
  indent() {
    return this.currentIndent++, this;
  }
  unindent() {
    return this.currentIndent > 0 && this.currentIndent--, this;
  }
  addMarginSymbol(t) {
    return (this.marginSymbol = t), this;
  }
  toString() {
    return this.lines.concat(this.indentedCurrentLine()).join(`
`);
  }
  getCurrentLineLength() {
    return this.currentLine.length;
  }
  indentedCurrentLine() {
    let t = this.currentLine.padStart(this.currentLine.length + 2 * this.currentIndent);
    return this.marginSymbol ? this.marginSymbol + t.slice(1) : t;
  }
};
function Ot(e) {
  return e instanceof Date || Object.prototype.toString.call(e) === '[object Date]';
}
function gn(e) {
  return e.toString() !== 'Invalid Date';
}
var Nt = 9e15,
  rt = 1e9,
  Yi = '0123456789abcdef',
  hn =
    '2.3025850929940456840179914546843642076011014886287729760333279009675726096773524802359972050895982983419677840422862486334095254650828067566662873690987816894829072083255546808437998948262331985283935053089653777326288461633662222876982198867465436674744042432743651550489343149393914796194044002221051017141748003688084012647080685567743216228355220114804663715659121373450747856947683463616792101806445070648000277502684916746550586856935673420670581136429224554405758925724208241314695689016758940256776311356919292033376587141660230105703089634572075440370847469940168269282808481184289314848524948644871927809676271275775397027668605952496716674183485704422507197965004714951050492214776567636938662976979522110718264549734772662425709429322582798502585509785265383207606726317164309505995087807523710333101197857547331541421808427543863591778117054309827482385045648019095610299291824318237525357709750539565187697510374970888692180205189339507238539205144634197265287286965110862571492198849978748873771345686209167058',
  xn =
    '3.1415926535897932384626433832795028841971693993751058209749445923078164062862089986280348253421170679821480865132823066470938446095505822317253594081284811174502841027019385211055596446229489549303819644288109756659334461284756482337867831652712019091456485669234603486104543266482133936072602491412737245870066063155881748815209209628292540917153643678925903600113305305488204665213841469519415116094330572703657595919530921861173819326117931051185480744623799627495673518857527248912279381830119491298336733624406566430860213949463952247371907021798609437027705392171762931767523846748184676694051320005681271452635608277857713427577896091736371787214684409012249534301465495853710507922796892589235420199561121290219608640344181598136297747713099605187072113499999983729780499510597317328160963185950244594553469083026425223082533446850352619311881710100031378387528865875332083814206171776691473035982534904287554687311595628638823537875937519577818577805321712268066130019278766111959092164201989380952572010654858632789',
  Zi = {
    precision: 20,
    rounding: 4,
    modulo: 1,
    toExpNeg: -7,
    toExpPos: 21,
    minE: -Nt,
    maxE: Nt,
    crypto: !1,
  },
  ra,
  Be,
  P = !0,
  wn = '[DecimalError] ',
  tt = wn + 'Invalid argument: ',
  na = wn + 'Precision limit exceeded',
  ia = wn + 'crypto unavailable',
  oa = '[object Decimal]',
  ae = Math.floor,
  Q = Math.pow,
  Uc = /^0b([01]+(\.[01]*)?|\.[01]+)(p[+-]?\d+)?$/i,
  Kc = /^0x([0-9a-f]+(\.[0-9a-f]*)?|\.[0-9a-f]+)(p[+-]?\d+)?$/i,
  Qc = /^0o([0-7]+(\.[0-7]*)?|\.[0-7]+)(p[+-]?\d+)?$/i,
  sa = /^(\d+(\.\d*)?|\.\d+)(e[+-]?\d+)?$/i,
  Ce = 1e7,
  w = 7,
  Gc = 9007199254740991,
  Jc = hn.length - 1,
  Xi = xn.length - 1,
  m = { toStringTag: oa };
m.absoluteValue = m.abs = function () {
  var e = new this.constructor(this);
  return e.s < 0 && (e.s = 1), x(e);
};
m.ceil = function () {
  return x(new this.constructor(this), this.e + 1, 2);
};
m.clampedTo = m.clamp = function (e, t) {
  var r,
    n = this,
    i = n.constructor;
  if (((e = new i(e)), (t = new i(t)), !e.s || !t.s)) return new i(NaN);
  if (e.gt(t)) throw Error(tt + t);
  return (r = n.cmp(e)), r < 0 ? e : n.cmp(t) > 0 ? t : new i(n);
};
m.comparedTo = m.cmp = function (e) {
  var t,
    r,
    n,
    i,
    o = this,
    s = o.d,
    a = (e = new o.constructor(e)).d,
    l = o.s,
    u = e.s;
  if (!s || !a) return !l || !u ? NaN : l !== u ? l : s === a ? 0 : !s ^ (l < 0) ? 1 : -1;
  if (!s[0] || !a[0]) return s[0] ? l : a[0] ? -u : 0;
  if (l !== u) return l;
  if (o.e !== e.e) return (o.e > e.e) ^ (l < 0) ? 1 : -1;
  for (n = s.length, i = a.length, t = 0, r = n < i ? n : i; t < r; ++t)
    if (s[t] !== a[t]) return (s[t] > a[t]) ^ (l < 0) ? 1 : -1;
  return n === i ? 0 : (n > i) ^ (l < 0) ? 1 : -1;
};
m.cosine = m.cos = function () {
  var e,
    t,
    r = this,
    n = r.constructor;
  return r.d
    ? r.d[0]
      ? ((e = n.precision),
        (t = n.rounding),
        (n.precision = e + Math.max(r.e, r.sd()) + w),
        (n.rounding = 1),
        (r = Hc(n, pa(n, r))),
        (n.precision = e),
        (n.rounding = t),
        x(Be == 2 || Be == 3 ? r.neg() : r, e, t, !0))
      : new n(1)
    : new n(NaN);
};
m.cubeRoot = m.cbrt = function () {
  var e,
    t,
    r,
    n,
    i,
    o,
    s,
    a,
    l,
    u,
    c = this,
    p = c.constructor;
  if (!c.isFinite() || c.isZero()) return new p(c);
  for (
    P = !1,
      o = c.s * Q(c.s * c, 1 / 3),
      !o || Math.abs(o) == 1 / 0
        ? ((r = te(c.d)),
          (e = c.e),
          (o = (e - r.length + 1) % 3) && (r += o == 1 || o == -2 ? '0' : '00'),
          (o = Q(r, 1 / 3)),
          (e = ae((e + 1) / 3) - (e % 3 == (e < 0 ? -1 : 2))),
          o == 1 / 0
            ? (r = '5e' + e)
            : ((r = o.toExponential()), (r = r.slice(0, r.indexOf('e') + 1) + e)),
          (n = new p(r)),
          (n.s = c.s))
        : (n = new p(o.toString())),
      s = (e = p.precision) + 3;
    ;

  )
    if (
      ((a = n),
      (l = a.times(a).times(a)),
      (u = l.plus(c)),
      (n = N(u.plus(c).times(a), u.plus(l), s + 2, 1)),
      te(a.d).slice(0, s) === (r = te(n.d)).slice(0, s))
    )
      if (((r = r.slice(s - 3, s + 1)), r == '9999' || (!i && r == '4999'))) {
        if (!i && (x(a, e + 1, 0), a.times(a).times(a).eq(c))) {
          n = a;
          break;
        }
        (s += 4), (i = 1);
      } else {
        (!+r || (!+r.slice(1) && r.charAt(0) == '5')) &&
          (x(n, e + 1, 1), (t = !n.times(n).times(n).eq(c)));
        break;
      }
  return (P = !0), x(n, e, p.rounding, t);
};
m.decimalPlaces = m.dp = function () {
  var e,
    t = this.d,
    r = NaN;
  if (t) {
    if (((e = t.length - 1), (r = (e - ae(this.e / w)) * w), (e = t[e]), e))
      for (; e % 10 == 0; e /= 10) r--;
    r < 0 && (r = 0);
  }
  return r;
};
m.dividedBy = m.div = function (e) {
  return N(this, new this.constructor(e));
};
m.dividedToIntegerBy = m.divToInt = function (e) {
  var t = this,
    r = t.constructor;
  return x(N(t, new r(e), 0, 1, 1), r.precision, r.rounding);
};
m.equals = m.eq = function (e) {
  return this.cmp(e) === 0;
};
m.floor = function () {
  return x(new this.constructor(this), this.e + 1, 3);
};
m.greaterThan = m.gt = function (e) {
  return this.cmp(e) > 0;
};
m.greaterThanOrEqualTo = m.gte = function (e) {
  var t = this.cmp(e);
  return t == 1 || t === 0;
};
m.hyperbolicCosine = m.cosh = function () {
  var e,
    t,
    r,
    n,
    i,
    o = this,
    s = o.constructor,
    a = new s(1);
  if (!o.isFinite()) return new s(o.s ? 1 / 0 : NaN);
  if (o.isZero()) return a;
  (r = s.precision),
    (n = s.rounding),
    (s.precision = r + Math.max(o.e, o.sd()) + 4),
    (s.rounding = 1),
    (i = o.d.length),
    i < 32
      ? ((e = Math.ceil(i / 3)), (t = (1 / Pn(4, e)).toString()))
      : ((e = 16), (t = '2.3283064365386962890625e-10')),
    (o = Lt(s, 1, o.times(t), new s(1), !0));
  for (var l, u = e, c = new s(8); u--; )
    (l = o.times(o)), (o = a.minus(l.times(c.minus(l.times(c)))));
  return x(o, (s.precision = r), (s.rounding = n), !0);
};
m.hyperbolicSine = m.sinh = function () {
  var e,
    t,
    r,
    n,
    i = this,
    o = i.constructor;
  if (!i.isFinite() || i.isZero()) return new o(i);
  if (
    ((t = o.precision),
    (r = o.rounding),
    (o.precision = t + Math.max(i.e, i.sd()) + 4),
    (o.rounding = 1),
    (n = i.d.length),
    n < 3)
  )
    i = Lt(o, 2, i, i, !0);
  else {
    (e = 1.4 * Math.sqrt(n)),
      (e = e > 16 ? 16 : e | 0),
      (i = i.times(1 / Pn(5, e))),
      (i = Lt(o, 2, i, i, !0));
    for (var s, a = new o(5), l = new o(16), u = new o(20); e--; )
      (s = i.times(i)), (i = i.times(a.plus(s.times(l.times(s).plus(u)))));
  }
  return (o.precision = t), (o.rounding = r), x(i, t, r, !0);
};
m.hyperbolicTangent = m.tanh = function () {
  var e,
    t,
    r = this,
    n = r.constructor;
  return r.isFinite()
    ? r.isZero()
      ? new n(r)
      : ((e = n.precision),
        (t = n.rounding),
        (n.precision = e + 7),
        (n.rounding = 1),
        N(r.sinh(), r.cosh(), (n.precision = e), (n.rounding = t)))
    : new n(r.s);
};
m.inverseCosine = m.acos = function () {
  var e,
    t = this,
    r = t.constructor,
    n = t.abs().cmp(1),
    i = r.precision,
    o = r.rounding;
  return n !== -1
    ? n === 0
      ? t.isNeg()
        ? Te(r, i, o)
        : new r(0)
      : new r(NaN)
    : t.isZero()
    ? Te(r, i + 4, o).times(0.5)
    : ((r.precision = i + 6),
      (r.rounding = 1),
      (t = t.asin()),
      (e = Te(r, i + 4, o).times(0.5)),
      (r.precision = i),
      (r.rounding = o),
      e.minus(t));
};
m.inverseHyperbolicCosine = m.acosh = function () {
  var e,
    t,
    r = this,
    n = r.constructor;
  return r.lte(1)
    ? new n(r.eq(1) ? 0 : NaN)
    : r.isFinite()
    ? ((e = n.precision),
      (t = n.rounding),
      (n.precision = e + Math.max(Math.abs(r.e), r.sd()) + 4),
      (n.rounding = 1),
      (P = !1),
      (r = r.times(r).minus(1).sqrt().plus(r)),
      (P = !0),
      (n.precision = e),
      (n.rounding = t),
      r.ln())
    : new n(r);
};
m.inverseHyperbolicSine = m.asinh = function () {
  var e,
    t,
    r = this,
    n = r.constructor;
  return !r.isFinite() || r.isZero()
    ? new n(r)
    : ((e = n.precision),
      (t = n.rounding),
      (n.precision = e + 2 * Math.max(Math.abs(r.e), r.sd()) + 6),
      (n.rounding = 1),
      (P = !1),
      (r = r.times(r).plus(1).sqrt().plus(r)),
      (P = !0),
      (n.precision = e),
      (n.rounding = t),
      r.ln());
};
m.inverseHyperbolicTangent = m.atanh = function () {
  var e,
    t,
    r,
    n,
    i = this,
    o = i.constructor;
  return i.isFinite()
    ? i.e >= 0
      ? new o(i.abs().eq(1) ? i.s / 0 : i.isZero() ? i : NaN)
      : ((e = o.precision),
        (t = o.rounding),
        (n = i.sd()),
        Math.max(n, e) < 2 * -i.e - 1
          ? x(new o(i), e, t, !0)
          : ((o.precision = r = n - i.e),
            (i = N(i.plus(1), new o(1).minus(i), r + e, 1)),
            (o.precision = e + 4),
            (o.rounding = 1),
            (i = i.ln()),
            (o.precision = e),
            (o.rounding = t),
            i.times(0.5)))
    : new o(NaN);
};
m.inverseSine = m.asin = function () {
  var e,
    t,
    r,
    n,
    i = this,
    o = i.constructor;
  return i.isZero()
    ? new o(i)
    : ((t = i.abs().cmp(1)),
      (r = o.precision),
      (n = o.rounding),
      t !== -1
        ? t === 0
          ? ((e = Te(o, r + 4, n).times(0.5)), (e.s = i.s), e)
          : new o(NaN)
        : ((o.precision = r + 6),
          (o.rounding = 1),
          (i = i.div(new o(1).minus(i.times(i)).sqrt().plus(1)).atan()),
          (o.precision = r),
          (o.rounding = n),
          i.times(2)));
};
m.inverseTangent = m.atan = function () {
  var e,
    t,
    r,
    n,
    i,
    o,
    s,
    a,
    l,
    u = this,
    c = u.constructor,
    p = c.precision,
    d = c.rounding;
  if (u.isFinite()) {
    if (u.isZero()) return new c(u);
    if (u.abs().eq(1) && p + 4 <= Xi) return (s = Te(c, p + 4, d).times(0.25)), (s.s = u.s), s;
  } else {
    if (!u.s) return new c(NaN);
    if (p + 4 <= Xi) return (s = Te(c, p + 4, d).times(0.5)), (s.s = u.s), s;
  }
  for (c.precision = a = p + 10, c.rounding = 1, r = Math.min(28, (a / w + 2) | 0), e = r; e; --e)
    u = u.div(u.times(u).plus(1).sqrt().plus(1));
  for (P = !1, t = Math.ceil(a / w), n = 1, l = u.times(u), s = new c(u), i = u; e !== -1; )
    if (
      ((i = i.times(l)),
      (o = s.minus(i.div((n += 2)))),
      (i = i.times(l)),
      (s = o.plus(i.div((n += 2)))),
      s.d[t] !== void 0)
    )
      for (e = t; s.d[e] === o.d[e] && e--; );
  return r && (s = s.times(2 << (r - 1))), (P = !0), x(s, (c.precision = p), (c.rounding = d), !0);
};
m.isFinite = function () {
  return !!this.d;
};
m.isInteger = m.isInt = function () {
  return !!this.d && ae(this.e / w) > this.d.length - 2;
};
m.isNaN = function () {
  return !this.s;
};
m.isNegative = m.isNeg = function () {
  return this.s < 0;
};
m.isPositive = m.isPos = function () {
  return this.s > 0;
};
m.isZero = function () {
  return !!this.d && this.d[0] === 0;
};
m.lessThan = m.lt = function (e) {
  return this.cmp(e) < 0;
};
m.lessThanOrEqualTo = m.lte = function (e) {
  return this.cmp(e) < 1;
};
m.logarithm = m.log = function (e) {
  var t,
    r,
    n,
    i,
    o,
    s,
    a,
    l,
    u = this,
    c = u.constructor,
    p = c.precision,
    d = c.rounding,
    f = 5;
  if (e == null) (e = new c(10)), (t = !0);
  else {
    if (((e = new c(e)), (r = e.d), e.s < 0 || !r || !r[0] || e.eq(1))) return new c(NaN);
    t = e.eq(10);
  }
  if (((r = u.d), u.s < 0 || !r || !r[0] || u.eq(1)))
    return new c(r && !r[0] ? -1 / 0 : u.s != 1 ? NaN : r ? 0 : 1 / 0);
  if (t)
    if (r.length > 1) o = !0;
    else {
      for (i = r[0]; i % 10 === 0; ) i /= 10;
      o = i !== 1;
    }
  if (
    ((P = !1),
    (a = p + f),
    (s = et(u, a)),
    (n = t ? bn(c, a + 10) : et(e, a)),
    (l = N(s, n, a, 1)),
    hr(l.d, (i = p), d))
  )
    do
      if (
        ((a += 10), (s = et(u, a)), (n = t ? bn(c, a + 10) : et(e, a)), (l = N(s, n, a, 1)), !o)
      ) {
        +te(l.d).slice(i + 1, i + 15) + 1 == 1e14 && (l = x(l, p + 1, 0));
        break;
      }
    while (hr(l.d, (i += 10), d));
  return (P = !0), x(l, p, d);
};
m.minus = m.sub = function (e) {
  var t,
    r,
    n,
    i,
    o,
    s,
    a,
    l,
    u,
    c,
    p,
    d,
    f = this,
    y = f.constructor;
  if (((e = new y(e)), !f.d || !e.d))
    return (
      !f.s || !e.s
        ? (e = new y(NaN))
        : f.d
        ? (e.s = -e.s)
        : (e = new y(e.d || f.s !== e.s ? f : NaN)),
      e
    );
  if (f.s != e.s) return (e.s = -e.s), f.plus(e);
  if (((u = f.d), (d = e.d), (a = y.precision), (l = y.rounding), !u[0] || !d[0])) {
    if (d[0]) e.s = -e.s;
    else if (u[0]) e = new y(f);
    else return new y(l === 3 ? -0 : 0);
    return P ? x(e, a, l) : e;
  }
  if (((r = ae(e.e / w)), (c = ae(f.e / w)), (u = u.slice()), (o = c - r), o)) {
    for (
      p = o < 0,
        p ? ((t = u), (o = -o), (s = d.length)) : ((t = d), (r = c), (s = u.length)),
        n = Math.max(Math.ceil(a / w), s) + 2,
        o > n && ((o = n), (t.length = 1)),
        t.reverse(),
        n = o;
      n--;

    )
      t.push(0);
    t.reverse();
  } else {
    for (n = u.length, s = d.length, p = n < s, p && (s = n), n = 0; n < s; n++)
      if (u[n] != d[n]) {
        p = u[n] < d[n];
        break;
      }
    o = 0;
  }
  for (p && ((t = u), (u = d), (d = t), (e.s = -e.s)), s = u.length, n = d.length - s; n > 0; --n)
    u[s++] = 0;
  for (n = d.length; n > o; ) {
    if (u[--n] < d[n]) {
      for (i = n; i && u[--i] === 0; ) u[i] = Ce - 1;
      --u[i], (u[n] += Ce);
    }
    u[n] -= d[n];
  }
  for (; u[--s] === 0; ) u.pop();
  for (; u[0] === 0; u.shift()) --r;
  return u[0] ? ((e.d = u), (e.e = En(u, r)), P ? x(e, a, l) : e) : new y(l === 3 ? -0 : 0);
};
m.modulo = m.mod = function (e) {
  var t,
    r = this,
    n = r.constructor;
  return (
    (e = new n(e)),
    !r.d || !e.s || (e.d && !e.d[0])
      ? new n(NaN)
      : !e.d || (r.d && !r.d[0])
      ? x(new n(r), n.precision, n.rounding)
      : ((P = !1),
        n.modulo == 9
          ? ((t = N(r, e.abs(), 0, 3, 1)), (t.s *= e.s))
          : (t = N(r, e, 0, n.modulo, 1)),
        (t = t.times(e)),
        (P = !0),
        r.minus(t))
  );
};
m.naturalExponential = m.exp = function () {
  return eo(this);
};
m.naturalLogarithm = m.ln = function () {
  return et(this);
};
m.negated = m.neg = function () {
  var e = new this.constructor(this);
  return (e.s = -e.s), x(e);
};
m.plus = m.add = function (e) {
  var t,
    r,
    n,
    i,
    o,
    s,
    a,
    l,
    u,
    c,
    p = this,
    d = p.constructor;
  if (((e = new d(e)), !p.d || !e.d))
    return !p.s || !e.s ? (e = new d(NaN)) : p.d || (e = new d(e.d || p.s === e.s ? p : NaN)), e;
  if (p.s != e.s) return (e.s = -e.s), p.minus(e);
  if (((u = p.d), (c = e.d), (a = d.precision), (l = d.rounding), !u[0] || !c[0]))
    return c[0] || (e = new d(p)), P ? x(e, a, l) : e;
  if (((o = ae(p.e / w)), (n = ae(e.e / w)), (u = u.slice()), (i = o - n), i)) {
    for (
      i < 0 ? ((r = u), (i = -i), (s = c.length)) : ((r = c), (n = o), (s = u.length)),
        o = Math.ceil(a / w),
        s = o > s ? o + 1 : s + 1,
        i > s && ((i = s), (r.length = 1)),
        r.reverse();
      i--;

    )
      r.push(0);
    r.reverse();
  }
  for (s = u.length, i = c.length, s - i < 0 && ((i = s), (r = c), (c = u), (u = r)), t = 0; i; )
    (t = ((u[--i] = u[i] + c[i] + t) / Ce) | 0), (u[i] %= Ce);
  for (t && (u.unshift(t), ++n), s = u.length; u[--s] == 0; ) u.pop();
  return (e.d = u), (e.e = En(u, n)), P ? x(e, a, l) : e;
};
m.precision = m.sd = function (e) {
  var t,
    r = this;
  if (e !== void 0 && e !== !!e && e !== 1 && e !== 0) throw Error(tt + e);
  return r.d ? ((t = aa(r.d)), e && r.e + 1 > t && (t = r.e + 1)) : (t = NaN), t;
};
m.round = function () {
  var e = this,
    t = e.constructor;
  return x(new t(e), e.e + 1, t.rounding);
};
m.sine = m.sin = function () {
  var e,
    t,
    r = this,
    n = r.constructor;
  return r.isFinite()
    ? r.isZero()
      ? new n(r)
      : ((e = n.precision),
        (t = n.rounding),
        (n.precision = e + Math.max(r.e, r.sd()) + w),
        (n.rounding = 1),
        (r = zc(n, pa(n, r))),
        (n.precision = e),
        (n.rounding = t),
        x(Be > 2 ? r.neg() : r, e, t, !0))
    : new n(NaN);
};
m.squareRoot = m.sqrt = function () {
  var e,
    t,
    r,
    n,
    i,
    o,
    s = this,
    a = s.d,
    l = s.e,
    u = s.s,
    c = s.constructor;
  if (u !== 1 || !a || !a[0]) return new c(!u || (u < 0 && (!a || a[0])) ? NaN : a ? s : 1 / 0);
  for (
    P = !1,
      u = Math.sqrt(+s),
      u == 0 || u == 1 / 0
        ? ((t = te(a)),
          (t.length + l) % 2 == 0 && (t += '0'),
          (u = Math.sqrt(t)),
          (l = ae((l + 1) / 2) - (l < 0 || l % 2)),
          u == 1 / 0
            ? (t = '5e' + l)
            : ((t = u.toExponential()), (t = t.slice(0, t.indexOf('e') + 1) + l)),
          (n = new c(t)))
        : (n = new c(u.toString())),
      r = (l = c.precision) + 3;
    ;

  )
    if (
      ((o = n),
      (n = o.plus(N(s, o, r + 2, 1)).times(0.5)),
      te(o.d).slice(0, r) === (t = te(n.d)).slice(0, r))
    )
      if (((t = t.slice(r - 3, r + 1)), t == '9999' || (!i && t == '4999'))) {
        if (!i && (x(o, l + 1, 0), o.times(o).eq(s))) {
          n = o;
          break;
        }
        (r += 4), (i = 1);
      } else {
        (!+t || (!+t.slice(1) && t.charAt(0) == '5')) && (x(n, l + 1, 1), (e = !n.times(n).eq(s)));
        break;
      }
  return (P = !0), x(n, l, c.rounding, e);
};
m.tangent = m.tan = function () {
  var e,
    t,
    r = this,
    n = r.constructor;
  return r.isFinite()
    ? r.isZero()
      ? new n(r)
      : ((e = n.precision),
        (t = n.rounding),
        (n.precision = e + 10),
        (n.rounding = 1),
        (r = r.sin()),
        (r.s = 1),
        (r = N(r, new n(1).minus(r.times(r)).sqrt(), e + 10, 0)),
        (n.precision = e),
        (n.rounding = t),
        x(Be == 2 || Be == 4 ? r.neg() : r, e, t, !0))
    : new n(NaN);
};
m.times = m.mul = function (e) {
  var t,
    r,
    n,
    i,
    o,
    s,
    a,
    l,
    u,
    c = this,
    p = c.constructor,
    d = c.d,
    f = (e = new p(e)).d;
  if (((e.s *= c.s), !d || !d[0] || !f || !f[0]))
    return new p(
      !e.s || (d && !d[0] && !f) || (f && !f[0] && !d) ? NaN : !d || !f ? e.s / 0 : e.s * 0,
    );
  for (
    r = ae(c.e / w) + ae(e.e / w),
      l = d.length,
      u = f.length,
      l < u && ((o = d), (d = f), (f = o), (s = l), (l = u), (u = s)),
      o = [],
      s = l + u,
      n = s;
    n--;

  )
    o.push(0);
  for (n = u; --n >= 0; ) {
    for (t = 0, i = l + n; i > n; )
      (a = o[i] + f[n] * d[i - n - 1] + t), (o[i--] = a % Ce | 0), (t = (a / Ce) | 0);
    o[i] = (o[i] + t) % Ce | 0;
  }
  for (; !o[--s]; ) o.pop();
  return t ? ++r : o.shift(), (e.d = o), (e.e = En(o, r)), P ? x(e, p.precision, p.rounding) : e;
};
m.toBinary = function (e, t) {
  return ro(this, 2, e, t);
};
m.toDecimalPlaces = m.toDP = function (e, t) {
  var r = this,
    n = r.constructor;
  return (
    (r = new n(r)),
    e === void 0
      ? r
      : (fe(e, 0, rt), t === void 0 ? (t = n.rounding) : fe(t, 0, 8), x(r, e + r.e + 1, t))
  );
};
m.toExponential = function (e, t) {
  var r,
    n = this,
    i = n.constructor;
  return (
    e === void 0
      ? (r = De(n, !0))
      : (fe(e, 0, rt),
        t === void 0 ? (t = i.rounding) : fe(t, 0, 8),
        (n = x(new i(n), e + 1, t)),
        (r = De(n, !0, e + 1))),
    n.isNeg() && !n.isZero() ? '-' + r : r
  );
};
m.toFixed = function (e, t) {
  var r,
    n,
    i = this,
    o = i.constructor;
  return (
    e === void 0
      ? (r = De(i))
      : (fe(e, 0, rt),
        t === void 0 ? (t = o.rounding) : fe(t, 0, 8),
        (n = x(new o(i), e + i.e + 1, t)),
        (r = De(n, !1, e + n.e + 1))),
    i.isNeg() && !i.isZero() ? '-' + r : r
  );
};
m.toFraction = function (e) {
  var t,
    r,
    n,
    i,
    o,
    s,
    a,
    l,
    u,
    c,
    p,
    d,
    f = this,
    y = f.d,
    g = f.constructor;
  if (!y) return new g(f);
  if (
    ((u = r = new g(1)),
    (n = l = new g(0)),
    (t = new g(n)),
    (o = t.e = aa(y) - f.e - 1),
    (s = o % w),
    (t.d[0] = Q(10, s < 0 ? w + s : s)),
    e == null)
  )
    e = o > 0 ? t : u;
  else {
    if (((a = new g(e)), !a.isInt() || a.lt(u))) throw Error(tt + a);
    e = a.gt(t) ? (o > 0 ? t : u) : a;
  }
  for (
    P = !1, a = new g(te(y)), c = g.precision, g.precision = o = y.length * w * 2;
    (p = N(a, t, 0, 1, 1)), (i = r.plus(p.times(n))), i.cmp(e) != 1;

  )
    (r = n),
      (n = i),
      (i = u),
      (u = l.plus(p.times(i))),
      (l = i),
      (i = t),
      (t = a.minus(p.times(i))),
      (a = i);
  return (
    (i = N(e.minus(r), n, 0, 1, 1)),
    (l = l.plus(i.times(u))),
    (r = r.plus(i.times(n))),
    (l.s = u.s = f.s),
    (d =
      N(u, n, o, 1)
        .minus(f)
        .abs()
        .cmp(N(l, r, o, 1).minus(f).abs()) < 1
        ? [u, n]
        : [l, r]),
    (g.precision = c),
    (P = !0),
    d
  );
};
m.toHexadecimal = m.toHex = function (e, t) {
  return ro(this, 16, e, t);
};
m.toNearest = function (e, t) {
  var r = this,
    n = r.constructor;
  if (((r = new n(r)), e == null)) {
    if (!r.d) return r;
    (e = new n(1)), (t = n.rounding);
  } else {
    if (((e = new n(e)), t === void 0 ? (t = n.rounding) : fe(t, 0, 8), !r.d)) return e.s ? r : e;
    if (!e.d) return e.s && (e.s = r.s), e;
  }
  return (
    e.d[0] ? ((P = !1), (r = N(r, e, 0, t, 1).times(e)), (P = !0), x(r)) : ((e.s = r.s), (r = e)), r
  );
};
m.toNumber = function () {
  return +this;
};
m.toOctal = function (e, t) {
  return ro(this, 8, e, t);
};
m.toPower = m.pow = function (e) {
  var t,
    r,
    n,
    i,
    o,
    s,
    a = this,
    l = a.constructor,
    u = +(e = new l(e));
  if (!a.d || !e.d || !a.d[0] || !e.d[0]) return new l(Q(+a, u));
  if (((a = new l(a)), a.eq(1))) return a;
  if (((n = l.precision), (o = l.rounding), e.eq(1))) return x(a, n, o);
  if (((t = ae(e.e / w)), t >= e.d.length - 1 && (r = u < 0 ? -u : u) <= Gc))
    return (i = la(l, a, r, n)), e.s < 0 ? new l(1).div(i) : x(i, n, o);
  if (((s = a.s), s < 0)) {
    if (t < e.d.length - 1) return new l(NaN);
    if ((e.d[t] & 1 || (s = 1), a.e == 0 && a.d[0] == 1 && a.d.length == 1)) return (a.s = s), a;
  }
  return (
    (r = Q(+a, u)),
    (t =
      r == 0 || !isFinite(r)
        ? ae(u * (Math.log('0.' + te(a.d)) / Math.LN10 + a.e + 1))
        : new l(r + '').e),
    t > l.maxE + 1 || t < l.minE - 1
      ? new l(t > 0 ? s / 0 : 0)
      : ((P = !1),
        (l.rounding = a.s = 1),
        (r = Math.min(12, (t + '').length)),
        (i = eo(e.times(et(a, n + r)), n)),
        i.d &&
          ((i = x(i, n + 5, 1)),
          hr(i.d, n, o) &&
            ((t = n + 10),
            (i = x(eo(e.times(et(a, t + r)), t), t + 5, 1)),
            +te(i.d).slice(n + 1, n + 15) + 1 == 1e14 && (i = x(i, n + 1, 0)))),
        (i.s = s),
        (P = !0),
        (l.rounding = o),
        x(i, n, o))
  );
};
m.toPrecision = function (e, t) {
  var r,
    n = this,
    i = n.constructor;
  return (
    e === void 0
      ? (r = De(n, n.e <= i.toExpNeg || n.e >= i.toExpPos))
      : (fe(e, 1, rt),
        t === void 0 ? (t = i.rounding) : fe(t, 0, 8),
        (n = x(new i(n), e, t)),
        (r = De(n, e <= n.e || n.e <= i.toExpNeg, e))),
    n.isNeg() && !n.isZero() ? '-' + r : r
  );
};
m.toSignificantDigits = m.toSD = function (e, t) {
  var r = this,
    n = r.constructor;
  return (
    e === void 0
      ? ((e = n.precision), (t = n.rounding))
      : (fe(e, 1, rt), t === void 0 ? (t = n.rounding) : fe(t, 0, 8)),
    x(new n(r), e, t)
  );
};
m.toString = function () {
  var e = this,
    t = e.constructor,
    r = De(e, e.e <= t.toExpNeg || e.e >= t.toExpPos);
  return e.isNeg() && !e.isZero() ? '-' + r : r;
};
m.truncated = m.trunc = function () {
  return x(new this.constructor(this), this.e + 1, 1);
};
m.valueOf = m.toJSON = function () {
  var e = this,
    t = e.constructor,
    r = De(e, e.e <= t.toExpNeg || e.e >= t.toExpPos);
  return e.isNeg() ? '-' + r : r;
};
function te(e) {
  var t,
    r,
    n,
    i = e.length - 1,
    o = '',
    s = e[0];
  if (i > 0) {
    for (o += s, t = 1; t < i; t++)
      (n = e[t] + ''), (r = w - n.length), r && (o += Xe(r)), (o += n);
    (s = e[t]), (n = s + ''), (r = w - n.length), r && (o += Xe(r));
  } else if (s === 0) return '0';
  for (; s % 10 === 0; ) s /= 10;
  return o + s;
}
function fe(e, t, r) {
  if (e !== ~~e || e < t || e > r) throw Error(tt + e);
}
function hr(e, t, r, n) {
  var i, o, s, a;
  for (o = e[0]; o >= 10; o /= 10) --t;
  return (
    --t < 0 ? ((t += w), (i = 0)) : ((i = Math.ceil((t + 1) / w)), (t %= w)),
    (o = Q(10, w - t)),
    (a = e[i] % o | 0),
    n == null
      ? t < 3
        ? (t == 0 ? (a = (a / 100) | 0) : t == 1 && (a = (a / 10) | 0),
          (s = (r < 4 && a == 99999) || (r > 3 && a == 49999) || a == 5e4 || a == 0))
        : (s =
            (((r < 4 && a + 1 == o) || (r > 3 && a + 1 == o / 2)) &&
              ((e[i + 1] / o / 100) | 0) == Q(10, t - 2) - 1) ||
            ((a == o / 2 || a == 0) && ((e[i + 1] / o / 100) | 0) == 0))
      : t < 4
      ? (t == 0 ? (a = (a / 1e3) | 0) : t == 1 ? (a = (a / 100) | 0) : t == 2 && (a = (a / 10) | 0),
        (s = ((n || r < 4) && a == 9999) || (!n && r > 3 && a == 4999)))
      : (s =
          (((n || r < 4) && a + 1 == o) || (!n && r > 3 && a + 1 == o / 2)) &&
          ((e[i + 1] / o / 1e3) | 0) == Q(10, t - 3) - 1),
    s
  );
}
function yn(e, t, r) {
  for (var n, i = [0], o, s = 0, a = e.length; s < a; ) {
    for (o = i.length; o--; ) i[o] *= t;
    for (i[0] += Yi.indexOf(e.charAt(s++)), n = 0; n < i.length; n++)
      i[n] > r - 1 &&
        (i[n + 1] === void 0 && (i[n + 1] = 0), (i[n + 1] += (i[n] / r) | 0), (i[n] %= r));
  }
  return i.reverse();
}
function Hc(e, t) {
  var r, n, i;
  if (t.isZero()) return t;
  (n = t.d.length),
    n < 32
      ? ((r = Math.ceil(n / 3)), (i = (1 / Pn(4, r)).toString()))
      : ((r = 16), (i = '2.3283064365386962890625e-10')),
    (e.precision += r),
    (t = Lt(e, 1, t.times(i), new e(1)));
  for (var o = r; o--; ) {
    var s = t.times(t);
    t = s.times(s).minus(s).times(8).plus(1);
  }
  return (e.precision -= r), t;
}
var N = (function () {
  function e(n, i, o) {
    var s,
      a = 0,
      l = n.length;
    for (n = n.slice(); l--; ) (s = n[l] * i + a), (n[l] = s % o | 0), (a = (s / o) | 0);
    return a && n.unshift(a), n;
  }
  function t(n, i, o, s) {
    var a, l;
    if (o != s) l = o > s ? 1 : -1;
    else
      for (a = l = 0; a < o; a++)
        if (n[a] != i[a]) {
          l = n[a] > i[a] ? 1 : -1;
          break;
        }
    return l;
  }
  function r(n, i, o, s) {
    for (var a = 0; o--; ) (n[o] -= a), (a = n[o] < i[o] ? 1 : 0), (n[o] = a * s + n[o] - i[o]);
    for (; !n[0] && n.length > 1; ) n.shift();
  }
  return function (n, i, o, s, a, l) {
    var u,
      c,
      p,
      d,
      f,
      y,
      g,
      v,
      C,
      _,
      b,
      M,
      be,
      X,
      lt,
      U,
      ne,
      qe,
      ie,
      Et,
      Br = n.constructor,
      ii = n.s == i.s ? 1 : -1,
      oe = n.d,
      O = i.d;
    if (!oe || !oe[0] || !O || !O[0])
      return new Br(
        !n.s || !i.s || (oe ? O && oe[0] == O[0] : !O)
          ? NaN
          : (oe && oe[0] == 0) || !O
          ? ii * 0
          : ii / 0,
      );
    for (
      l ? ((f = 1), (c = n.e - i.e)) : ((l = Ce), (f = w), (c = ae(n.e / f) - ae(i.e / f))),
        ie = O.length,
        ne = oe.length,
        C = new Br(ii),
        _ = C.d = [],
        p = 0;
      O[p] == (oe[p] || 0);
      p++
    );
    if (
      (O[p] > (oe[p] || 0) && c--,
      o == null
        ? ((X = o = Br.precision), (s = Br.rounding))
        : a
        ? (X = o + (n.e - i.e) + 1)
        : (X = o),
      X < 0)
    )
      _.push(1), (y = !0);
    else {
      if (((X = (X / f + 2) | 0), (p = 0), ie == 1)) {
        for (d = 0, O = O[0], X++; (p < ne || d) && X--; p++)
          (lt = d * l + (oe[p] || 0)), (_[p] = (lt / O) | 0), (d = lt % O | 0);
        y = d || p < ne;
      } else {
        for (
          d = (l / (O[0] + 1)) | 0,
            d > 1 && ((O = e(O, d, l)), (oe = e(oe, d, l)), (ie = O.length), (ne = oe.length)),
            U = ie,
            b = oe.slice(0, ie),
            M = b.length;
          M < ie;

        )
          b[M++] = 0;
        (Et = O.slice()), Et.unshift(0), (qe = O[0]), O[1] >= l / 2 && ++qe;
        do
          (d = 0),
            (u = t(O, b, ie, M)),
            u < 0
              ? ((be = b[0]),
                ie != M && (be = be * l + (b[1] || 0)),
                (d = (be / qe) | 0),
                d > 1
                  ? (d >= l && (d = l - 1),
                    (g = e(O, d, l)),
                    (v = g.length),
                    (M = b.length),
                    (u = t(g, b, v, M)),
                    u == 1 && (d--, r(g, ie < v ? Et : O, v, l)))
                  : (d == 0 && (u = d = 1), (g = O.slice())),
                (v = g.length),
                v < M && g.unshift(0),
                r(b, g, M, l),
                u == -1 &&
                  ((M = b.length),
                  (u = t(O, b, ie, M)),
                  u < 1 && (d++, r(b, ie < M ? Et : O, M, l))),
                (M = b.length))
              : u === 0 && (d++, (b = [0])),
            (_[p++] = d),
            u && b[0] ? (b[M++] = oe[U] || 0) : ((b = [oe[U]]), (M = 1));
        while ((U++ < ne || b[0] !== void 0) && X--);
        y = b[0] !== void 0;
      }
      _[0] || _.shift();
    }
    if (f == 1) (C.e = c), (ra = y);
    else {
      for (p = 1, d = _[0]; d >= 10; d /= 10) p++;
      (C.e = p + c * f - 1), x(C, a ? o + C.e + 1 : o, s, y);
    }
    return C;
  };
})();
function x(e, t, r, n) {
  var i,
    o,
    s,
    a,
    l,
    u,
    c,
    p,
    d,
    f = e.constructor;
  e: if (t != null) {
    if (((p = e.d), !p)) return e;
    for (i = 1, a = p[0]; a >= 10; a /= 10) i++;
    if (((o = t - i), o < 0))
      (o += w), (s = t), (c = p[(d = 0)]), (l = (c / Q(10, i - s - 1)) % 10 | 0);
    else if (((d = Math.ceil((o + 1) / w)), (a = p.length), d >= a))
      if (n) {
        for (; a++ <= d; ) p.push(0);
        (c = l = 0), (i = 1), (o %= w), (s = o - w + 1);
      } else break e;
    else {
      for (c = a = p[d], i = 1; a >= 10; a /= 10) i++;
      (o %= w), (s = o - w + i), (l = s < 0 ? 0 : (c / Q(10, i - s - 1)) % 10 | 0);
    }
    if (
      ((n = n || t < 0 || p[d + 1] !== void 0 || (s < 0 ? c : c % Q(10, i - s - 1))),
      (u =
        r < 4
          ? (l || n) && (r == 0 || r == (e.s < 0 ? 3 : 2))
          : l > 5 ||
            (l == 5 &&
              (r == 4 ||
                n ||
                (r == 6 && (o > 0 ? (s > 0 ? c / Q(10, i - s) : 0) : p[d - 1]) % 10 & 1) ||
                r == (e.s < 0 ? 8 : 7)))),
      t < 1 || !p[0])
    )
      return (
        (p.length = 0),
        u ? ((t -= e.e + 1), (p[0] = Q(10, (w - (t % w)) % w)), (e.e = -t || 0)) : (p[0] = e.e = 0),
        e
      );
    if (
      (o == 0
        ? ((p.length = d), (a = 1), d--)
        : ((p.length = d + 1),
          (a = Q(10, w - o)),
          (p[d] = s > 0 ? ((c / Q(10, i - s)) % Q(10, s) | 0) * a : 0)),
      u)
    )
      for (;;)
        if (d == 0) {
          for (o = 1, s = p[0]; s >= 10; s /= 10) o++;
          for (s = p[0] += a, a = 1; s >= 10; s /= 10) a++;
          o != a && (e.e++, p[0] == Ce && (p[0] = 1));
          break;
        } else {
          if (((p[d] += a), p[d] != Ce)) break;
          (p[d--] = 0), (a = 1);
        }
    for (o = p.length; p[--o] === 0; ) p.pop();
  }
  return (
    P && (e.e > f.maxE ? ((e.d = null), (e.e = NaN)) : e.e < f.minE && ((e.e = 0), (e.d = [0]))), e
  );
}
function De(e, t, r) {
  if (!e.isFinite()) return ca(e);
  var n,
    i = e.e,
    o = te(e.d),
    s = o.length;
  return (
    t
      ? (r && (n = r - s) > 0
          ? (o = o.charAt(0) + '.' + o.slice(1) + Xe(n))
          : s > 1 && (o = o.charAt(0) + '.' + o.slice(1)),
        (o = o + (e.e < 0 ? 'e' : 'e+') + e.e))
      : i < 0
      ? ((o = '0.' + Xe(-i - 1) + o), r && (n = r - s) > 0 && (o += Xe(n)))
      : i >= s
      ? ((o += Xe(i + 1 - s)), r && (n = r - i - 1) > 0 && (o = o + '.' + Xe(n)))
      : ((n = i + 1) < s && (o = o.slice(0, n) + '.' + o.slice(n)),
        r && (n = r - s) > 0 && (i + 1 === s && (o += '.'), (o += Xe(n)))),
    o
  );
}
function En(e, t) {
  var r = e[0];
  for (t *= w; r >= 10; r /= 10) t++;
  return t;
}
function bn(e, t, r) {
  if (t > Jc) throw ((P = !0), r && (e.precision = r), Error(na));
  return x(new e(hn), t, 1, !0);
}
function Te(e, t, r) {
  if (t > Xi) throw Error(na);
  return x(new e(xn), t, r, !0);
}
function aa(e) {
  var t = e.length - 1,
    r = t * w + 1;
  if (((t = e[t]), t)) {
    for (; t % 10 == 0; t /= 10) r--;
    for (t = e[0]; t >= 10; t /= 10) r++;
  }
  return r;
}
function Xe(e) {
  for (var t = ''; e--; ) t += '0';
  return t;
}
function la(e, t, r, n) {
  var i,
    o = new e(1),
    s = Math.ceil(n / w + 4);
  for (P = !1; ; ) {
    if ((r % 2 && ((o = o.times(t)), ea(o.d, s) && (i = !0)), (r = ae(r / 2)), r === 0)) {
      (r = o.d.length - 1), i && o.d[r] === 0 && ++o.d[r];
      break;
    }
    (t = t.times(t)), ea(t.d, s);
  }
  return (P = !0), o;
}
function Xs(e) {
  return e.d[e.d.length - 1] & 1;
}
function ua(e, t, r) {
  for (var n, i = new e(t[0]), o = 0; ++o < t.length; )
    if (((n = new e(t[o])), n.s)) i[r](n) && (i = n);
    else {
      i = n;
      break;
    }
  return i;
}
function eo(e, t) {
  var r,
    n,
    i,
    o,
    s,
    a,
    l,
    u = 0,
    c = 0,
    p = 0,
    d = e.constructor,
    f = d.rounding,
    y = d.precision;
  if (!e.d || !e.d[0] || e.e > 17)
    return new d(e.d ? (e.d[0] ? (e.s < 0 ? 0 : 1 / 0) : 1) : e.s ? (e.s < 0 ? 0 : e) : 0 / 0);
  for (t == null ? ((P = !1), (l = y)) : (l = t), a = new d(0.03125); e.e > -2; )
    (e = e.times(a)), (p += 5);
  for (
    n = ((Math.log(Q(2, p)) / Math.LN10) * 2 + 5) | 0,
      l += n,
      r = o = s = new d(1),
      d.precision = l;
    ;

  ) {
    if (
      ((o = x(o.times(e), l, 1)),
      (r = r.times(++c)),
      (a = s.plus(N(o, r, l, 1))),
      te(a.d).slice(0, l) === te(s.d).slice(0, l))
    ) {
      for (i = p; i--; ) s = x(s.times(s), l, 1);
      if (t == null)
        if (u < 3 && hr(s.d, l - n, f, u))
          (d.precision = l += 10), (r = o = a = new d(1)), (c = 0), u++;
        else return x(s, (d.precision = y), f, (P = !0));
      else return (d.precision = y), s;
    }
    s = a;
  }
}
function et(e, t) {
  var r,
    n,
    i,
    o,
    s,
    a,
    l,
    u,
    c,
    p,
    d,
    f = 1,
    y = 10,
    g = e,
    v = g.d,
    C = g.constructor,
    _ = C.rounding,
    b = C.precision;
  if (g.s < 0 || !v || !v[0] || (!g.e && v[0] == 1 && v.length == 1))
    return new C(v && !v[0] ? -1 / 0 : g.s != 1 ? NaN : v ? 0 : g);
  if (
    (t == null ? ((P = !1), (c = b)) : (c = t),
    (C.precision = c += y),
    (r = te(v)),
    (n = r.charAt(0)),
    Math.abs((o = g.e)) < 15e14)
  ) {
    for (; (n < 7 && n != 1) || (n == 1 && r.charAt(1) > 3); )
      (g = g.times(e)), (r = te(g.d)), (n = r.charAt(0)), f++;
    (o = g.e), n > 1 ? ((g = new C('0.' + r)), o++) : (g = new C(n + '.' + r.slice(1)));
  } else
    return (
      (u = bn(C, c + 2, b).times(o + '')),
      (g = et(new C(n + '.' + r.slice(1)), c - y).plus(u)),
      (C.precision = b),
      t == null ? x(g, b, _, (P = !0)) : g
    );
  for (p = g, l = s = g = N(g.minus(1), g.plus(1), c, 1), d = x(g.times(g), c, 1), i = 3; ; ) {
    if (
      ((s = x(s.times(d), c, 1)),
      (u = l.plus(N(s, new C(i), c, 1))),
      te(u.d).slice(0, c) === te(l.d).slice(0, c))
    )
      if (
        ((l = l.times(2)),
        o !== 0 && (l = l.plus(bn(C, c + 2, b).times(o + ''))),
        (l = N(l, new C(f), c, 1)),
        t == null)
      )
        if (hr(l.d, c - y, _, a))
          (C.precision = c += y),
            (u = s = g = N(p.minus(1), p.plus(1), c, 1)),
            (d = x(g.times(g), c, 1)),
            (i = a = 1);
        else return x(l, (C.precision = b), _, (P = !0));
      else return (C.precision = b), l;
    (l = u), (i += 2);
  }
}
function ca(e) {
  return String((e.s * e.s) / 0);
}
function to(e, t) {
  var r, n, i;
  for (
    (r = t.indexOf('.')) > -1 && (t = t.replace('.', '')),
      (n = t.search(/e/i)) > 0
        ? (r < 0 && (r = n), (r += +t.slice(n + 1)), (t = t.substring(0, n)))
        : r < 0 && (r = t.length),
      n = 0;
    t.charCodeAt(n) === 48;
    n++
  );
  for (i = t.length; t.charCodeAt(i - 1) === 48; --i);
  if (((t = t.slice(n, i)), t)) {
    if (
      ((i -= n), (e.e = r = r - n - 1), (e.d = []), (n = (r + 1) % w), r < 0 && (n += w), n < i)
    ) {
      for (n && e.d.push(+t.slice(0, n)), i -= w; n < i; ) e.d.push(+t.slice(n, (n += w)));
      (t = t.slice(n)), (n = w - t.length);
    } else n -= i;
    for (; n--; ) t += '0';
    e.d.push(+t),
      P &&
        (e.e > e.constructor.maxE
          ? ((e.d = null), (e.e = NaN))
          : e.e < e.constructor.minE && ((e.e = 0), (e.d = [0])));
  } else (e.e = 0), (e.d = [0]);
  return e;
}
function Wc(e, t) {
  var r, n, i, o, s, a, l, u, c;
  if (t.indexOf('_') > -1) {
    if (((t = t.replace(/(\d)_(?=\d)/g, '$1')), sa.test(t))) return to(e, t);
  } else if (t === 'Infinity' || t === 'NaN')
    return +t || (e.s = NaN), (e.e = NaN), (e.d = null), e;
  if (Kc.test(t)) (r = 16), (t = t.toLowerCase());
  else if (Uc.test(t)) r = 2;
  else if (Qc.test(t)) r = 8;
  else throw Error(tt + t);
  for (
    o = t.search(/p/i),
      o > 0 ? ((l = +t.slice(o + 1)), (t = t.substring(2, o))) : (t = t.slice(2)),
      o = t.indexOf('.'),
      s = o >= 0,
      n = e.constructor,
      s && ((t = t.replace('.', '')), (a = t.length), (o = a - o), (i = la(n, new n(r), o, o * 2))),
      u = yn(t, r, Ce),
      c = u.length - 1,
      o = c;
    u[o] === 0;
    --o
  )
    u.pop();
  return o < 0
    ? new n(e.s * 0)
    : ((e.e = En(u, c)),
      (e.d = u),
      (P = !1),
      s && (e = N(e, i, a * 4)),
      l && (e = e.times(Math.abs(l) < 54 ? Q(2, l) : yt.pow(2, l))),
      (P = !0),
      e);
}
function zc(e, t) {
  var r,
    n = t.d.length;
  if (n < 3) return t.isZero() ? t : Lt(e, 2, t, t);
  (r = 1.4 * Math.sqrt(n)),
    (r = r > 16 ? 16 : r | 0),
    (t = t.times(1 / Pn(5, r))),
    (t = Lt(e, 2, t, t));
  for (var i, o = new e(5), s = new e(16), a = new e(20); r--; )
    (i = t.times(t)), (t = t.times(o.plus(i.times(s.times(i).minus(a)))));
  return t;
}
function Lt(e, t, r, n, i) {
  var o,
    s,
    a,
    l,
    u = 1,
    c = e.precision,
    p = Math.ceil(c / w);
  for (P = !1, l = r.times(r), a = new e(n); ; ) {
    if (
      ((s = N(a.times(l), new e(t++ * t++), c, 1)),
      (a = i ? n.plus(s) : n.minus(s)),
      (n = N(s.times(l), new e(t++ * t++), c, 1)),
      (s = a.plus(n)),
      s.d[p] !== void 0)
    ) {
      for (o = p; s.d[o] === a.d[o] && o--; );
      if (o == -1) break;
    }
    (o = a), (a = n), (n = s), (s = o), u++;
  }
  return (P = !0), (s.d.length = p + 1), s;
}
function Pn(e, t) {
  for (var r = e; --t; ) r *= e;
  return r;
}
function pa(e, t) {
  var r,
    n = t.s < 0,
    i = Te(e, e.precision, 1),
    o = i.times(0.5);
  if (((t = t.abs()), t.lte(o))) return (Be = n ? 4 : 1), t;
  if (((r = t.divToInt(i)), r.isZero())) Be = n ? 3 : 2;
  else {
    if (((t = t.minus(r.times(i))), t.lte(o))) return (Be = Xs(r) ? (n ? 2 : 3) : n ? 4 : 1), t;
    Be = Xs(r) ? (n ? 1 : 4) : n ? 3 : 2;
  }
  return t.minus(i).abs();
}
function ro(e, t, r, n) {
  var i,
    o,
    s,
    a,
    l,
    u,
    c,
    p,
    d,
    f = e.constructor,
    y = r !== void 0;
  if (
    (y
      ? (fe(r, 1, rt), n === void 0 ? (n = f.rounding) : fe(n, 0, 8))
      : ((r = f.precision), (n = f.rounding)),
    !e.isFinite())
  )
    c = ca(e);
  else {
    for (
      c = De(e),
        s = c.indexOf('.'),
        y ? ((i = 2), t == 16 ? (r = r * 4 - 3) : t == 8 && (r = r * 3 - 2)) : (i = t),
        s >= 0 &&
          ((c = c.replace('.', '')),
          (d = new f(1)),
          (d.e = c.length - s),
          (d.d = yn(De(d), 10, i)),
          (d.e = d.d.length)),
        p = yn(c, 10, i),
        o = l = p.length;
      p[--l] == 0;

    )
      p.pop();
    if (!p[0]) c = y ? '0p+0' : '0';
    else {
      if (
        (s < 0
          ? o--
          : ((e = new f(e)),
            (e.d = p),
            (e.e = o),
            (e = N(e, d, r, n, 0, i)),
            (p = e.d),
            (o = e.e),
            (u = ra)),
        (s = p[r]),
        (a = i / 2),
        (u = u || p[r + 1] !== void 0),
        (u =
          n < 4
            ? (s !== void 0 || u) && (n === 0 || n === (e.s < 0 ? 3 : 2))
            : s > a ||
              (s === a && (n === 4 || u || (n === 6 && p[r - 1] & 1) || n === (e.s < 0 ? 8 : 7)))),
        (p.length = r),
        u)
      )
        for (; ++p[--r] > i - 1; ) (p[r] = 0), r || (++o, p.unshift(1));
      for (l = p.length; !p[l - 1]; --l);
      for (s = 0, c = ''; s < l; s++) c += Yi.charAt(p[s]);
      if (y) {
        if (l > 1)
          if (t == 16 || t == 8) {
            for (s = t == 16 ? 4 : 3, --l; l % s; l++) c += '0';
            for (p = yn(c, i, t), l = p.length; !p[l - 1]; --l);
            for (s = 1, c = '1.'; s < l; s++) c += Yi.charAt(p[s]);
          } else c = c.charAt(0) + '.' + c.slice(1);
        c = c + (o < 0 ? 'p' : 'p+') + o;
      } else if (o < 0) {
        for (; ++o; ) c = '0' + c;
        c = '0.' + c;
      } else if (++o > l) for (o -= l; o--; ) c += '0';
      else o < l && (c = c.slice(0, o) + '.' + c.slice(o));
    }
    c = (t == 16 ? '0x' : t == 2 ? '0b' : t == 8 ? '0o' : '') + c;
  }
  return e.s < 0 ? '-' + c : c;
}
function ea(e, t) {
  if (e.length > t) return (e.length = t), !0;
}
function Yc(e) {
  return new this(e).abs();
}
function Zc(e) {
  return new this(e).acos();
}
function Xc(e) {
  return new this(e).acosh();
}
function ep(e, t) {
  return new this(e).plus(t);
}
function tp(e) {
  return new this(e).asin();
}
function rp(e) {
  return new this(e).asinh();
}
function np(e) {
  return new this(e).atan();
}
function ip(e) {
  return new this(e).atanh();
}
function op(e, t) {
  (e = new this(e)), (t = new this(t));
  var r,
    n = this.precision,
    i = this.rounding,
    o = n + 4;
  return (
    !e.s || !t.s
      ? (r = new this(NaN))
      : !e.d && !t.d
      ? ((r = Te(this, o, 1).times(t.s > 0 ? 0.25 : 0.75)), (r.s = e.s))
      : !t.d || e.isZero()
      ? ((r = t.s < 0 ? Te(this, n, i) : new this(0)), (r.s = e.s))
      : !e.d || t.isZero()
      ? ((r = Te(this, o, 1).times(0.5)), (r.s = e.s))
      : t.s < 0
      ? ((this.precision = o),
        (this.rounding = 1),
        (r = this.atan(N(e, t, o, 1))),
        (t = Te(this, o, 1)),
        (this.precision = n),
        (this.rounding = i),
        (r = e.s < 0 ? r.minus(t) : r.plus(t)))
      : (r = this.atan(N(e, t, o, 1))),
    r
  );
}
function sp(e) {
  return new this(e).cbrt();
}
function ap(e) {
  return x((e = new this(e)), e.e + 1, 2);
}
function lp(e, t, r) {
  return new this(e).clamp(t, r);
}
function up(e) {
  if (!e || typeof e != 'object') throw Error(wn + 'Object expected');
  var t,
    r,
    n,
    i = e.defaults === !0,
    o = [
      'precision',
      1,
      rt,
      'rounding',
      0,
      8,
      'toExpNeg',
      -Nt,
      0,
      'toExpPos',
      0,
      Nt,
      'maxE',
      0,
      Nt,
      'minE',
      -Nt,
      0,
      'modulo',
      0,
      9,
    ];
  for (t = 0; t < o.length; t += 3)
    if (((r = o[t]), i && (this[r] = Zi[r]), (n = e[r]) !== void 0))
      if (ae(n) === n && n >= o[t + 1] && n <= o[t + 2]) this[r] = n;
      else throw Error(tt + r + ': ' + n);
  if (((r = 'crypto'), i && (this[r] = Zi[r]), (n = e[r]) !== void 0))
    if (n === !0 || n === !1 || n === 0 || n === 1)
      if (n)
        if (typeof crypto < 'u' && crypto && (crypto.getRandomValues || crypto.randomBytes))
          this[r] = !0;
        else throw Error(ia);
      else this[r] = !1;
    else throw Error(tt + r + ': ' + n);
  return this;
}
function cp(e) {
  return new this(e).cos();
}
function pp(e) {
  return new this(e).cosh();
}
function da(e) {
  var t, r, n;
  function i(o) {
    var s,
      a,
      l,
      u = this;
    if (!(u instanceof i)) return new i(o);
    if (((u.constructor = i), ta(o))) {
      (u.s = o.s),
        P
          ? !o.d || o.e > i.maxE
            ? ((u.e = NaN), (u.d = null))
            : o.e < i.minE
            ? ((u.e = 0), (u.d = [0]))
            : ((u.e = o.e), (u.d = o.d.slice()))
          : ((u.e = o.e), (u.d = o.d ? o.d.slice() : o.d));
      return;
    }
    if (((l = typeof o), l === 'number')) {
      if (o === 0) {
        (u.s = 1 / o < 0 ? -1 : 1), (u.e = 0), (u.d = [0]);
        return;
      }
      if ((o < 0 ? ((o = -o), (u.s = -1)) : (u.s = 1), o === ~~o && o < 1e7)) {
        for (s = 0, a = o; a >= 10; a /= 10) s++;
        P
          ? s > i.maxE
            ? ((u.e = NaN), (u.d = null))
            : s < i.minE
            ? ((u.e = 0), (u.d = [0]))
            : ((u.e = s), (u.d = [o]))
          : ((u.e = s), (u.d = [o]));
        return;
      } else if (o * 0 !== 0) {
        o || (u.s = NaN), (u.e = NaN), (u.d = null);
        return;
      }
      return to(u, o.toString());
    } else if (l !== 'string') throw Error(tt + o);
    return (
      (a = o.charCodeAt(0)) === 45
        ? ((o = o.slice(1)), (u.s = -1))
        : (a === 43 && (o = o.slice(1)), (u.s = 1)),
      sa.test(o) ? to(u, o) : Wc(u, o)
    );
  }
  if (
    ((i.prototype = m),
    (i.ROUND_UP = 0),
    (i.ROUND_DOWN = 1),
    (i.ROUND_CEIL = 2),
    (i.ROUND_FLOOR = 3),
    (i.ROUND_HALF_UP = 4),
    (i.ROUND_HALF_DOWN = 5),
    (i.ROUND_HALF_EVEN = 6),
    (i.ROUND_HALF_CEIL = 7),
    (i.ROUND_HALF_FLOOR = 8),
    (i.EUCLID = 9),
    (i.config = i.set = up),
    (i.clone = da),
    (i.isDecimal = ta),
    (i.abs = Yc),
    (i.acos = Zc),
    (i.acosh = Xc),
    (i.add = ep),
    (i.asin = tp),
    (i.asinh = rp),
    (i.atan = np),
    (i.atanh = ip),
    (i.atan2 = op),
    (i.cbrt = sp),
    (i.ceil = ap),
    (i.clamp = lp),
    (i.cos = cp),
    (i.cosh = pp),
    (i.div = dp),
    (i.exp = mp),
    (i.floor = fp),
    (i.hypot = gp),
    (i.ln = yp),
    (i.log = hp),
    (i.log10 = bp),
    (i.log2 = xp),
    (i.max = wp),
    (i.min = Ep),
    (i.mod = Pp),
    (i.mul = vp),
    (i.pow = Tp),
    (i.random = Cp),
    (i.round = _p),
    (i.sign = Ap),
    (i.sin = Rp),
    (i.sinh = Mp),
    (i.sqrt = Sp),
    (i.sub = kp),
    (i.sum = Ip),
    (i.tan = Fp),
    (i.tanh = Dp),
    (i.trunc = Op),
    e === void 0 && (e = {}),
    e && e.defaults !== !0)
  )
    for (
      n = ['precision', 'rounding', 'toExpNeg', 'toExpPos', 'maxE', 'minE', 'modulo', 'crypto'],
        t = 0;
      t < n.length;

    )
      e.hasOwnProperty((r = n[t++])) || (e[r] = this[r]);
  return i.config(e), i;
}
function dp(e, t) {
  return new this(e).div(t);
}
function mp(e) {
  return new this(e).exp();
}
function fp(e) {
  return x((e = new this(e)), e.e + 1, 3);
}
function gp() {
  var e,
    t,
    r = new this(0);
  for (P = !1, e = 0; e < arguments.length; )
    if (((t = new this(arguments[e++])), t.d)) r.d && (r = r.plus(t.times(t)));
    else {
      if (t.s) return (P = !0), new this(1 / 0);
      r = t;
    }
  return (P = !0), r.sqrt();
}
function ta(e) {
  return e instanceof yt || (e && e.toStringTag === oa) || !1;
}
function yp(e) {
  return new this(e).ln();
}
function hp(e, t) {
  return new this(e).log(t);
}
function xp(e) {
  return new this(e).log(2);
}
function bp(e) {
  return new this(e).log(10);
}
function wp() {
  return ua(this, arguments, 'lt');
}
function Ep() {
  return ua(this, arguments, 'gt');
}
function Pp(e, t) {
  return new this(e).mod(t);
}
function vp(e, t) {
  return new this(e).mul(t);
}
function Tp(e, t) {
  return new this(e).pow(t);
}
function Cp(e) {
  var t,
    r,
    n,
    i,
    o = 0,
    s = new this(1),
    a = [];
  if ((e === void 0 ? (e = this.precision) : fe(e, 1, rt), (n = Math.ceil(e / w)), this.crypto))
    if (crypto.getRandomValues)
      for (t = crypto.getRandomValues(new Uint32Array(n)); o < n; )
        (i = t[o]),
          i >= 429e7 ? (t[o] = crypto.getRandomValues(new Uint32Array(1))[0]) : (a[o++] = i % 1e7);
    else if (crypto.randomBytes) {
      for (t = crypto.randomBytes((n *= 4)); o < n; )
        (i = t[o] + (t[o + 1] << 8) + (t[o + 2] << 16) + ((t[o + 3] & 127) << 24)),
          i >= 214e7 ? crypto.randomBytes(4).copy(t, o) : (a.push(i % 1e7), (o += 4));
      o = n / 4;
    } else throw Error(ia);
  else for (; o < n; ) a[o++] = (Math.random() * 1e7) | 0;
  for (
    n = a[--o], e %= w, n && e && ((i = Q(10, w - e)), (a[o] = ((n / i) | 0) * i));
    a[o] === 0;
    o--
  )
    a.pop();
  if (o < 0) (r = 0), (a = [0]);
  else {
    for (r = -1; a[0] === 0; r -= w) a.shift();
    for (n = 1, i = a[0]; i >= 10; i /= 10) n++;
    n < w && (r -= w - n);
  }
  return (s.e = r), (s.d = a), s;
}
function _p(e) {
  return x((e = new this(e)), e.e + 1, this.rounding);
}
function Ap(e) {
  return (e = new this(e)), e.d ? (e.d[0] ? e.s : 0 * e.s) : e.s || NaN;
}
function Rp(e) {
  return new this(e).sin();
}
function Mp(e) {
  return new this(e).sinh();
}
function Sp(e) {
  return new this(e).sqrt();
}
function kp(e, t) {
  return new this(e).sub(t);
}
function Ip() {
  var e = 0,
    t = arguments,
    r = new this(t[e]);
  for (P = !1; r.s && ++e < t.length; ) r = r.plus(t[e]);
  return (P = !0), x(r, this.precision, this.rounding);
}
function Fp(e) {
  return new this(e).tan();
}
function Dp(e) {
  return new this(e).tanh();
}
function Op(e) {
  return x((e = new this(e)), e.e + 1, 1);
}
m[Symbol.for('nodejs.util.inspect.custom')] = m.toString;
m[Symbol.toStringTag] = 'Decimal';
var yt = (m.constructor = da(Zi));
hn = new yt(hn);
xn = new yt(xn);
var Oe = yt;
function $t(e) {
  return yt.isDecimal(e)
    ? !0
    : e !== null &&
        typeof e == 'object' &&
        typeof e.s == 'number' &&
        typeof e.e == 'number' &&
        typeof e.toFixed == 'function' &&
        Array.isArray(e.d);
}
var xr = class {
  constructor(t, r, n, i, o) {
    (this.modelName = t),
      (this.name = r),
      (this.typeName = n),
      (this.isList = i),
      (this.isEnum = o);
  }
  _toGraphQLInputType() {
    let t = this.isList ? 'List' : '',
      r = this.isEnum ? 'Enum' : '';
    return `${t}${r}${this.typeName}FieldRefInput<${this.modelName}>`;
  }
};
function qt(e) {
  return e instanceof xr;
}
var vn = class {
  constructor(t) {
    this.value = t;
  }
  write(t) {
    t.write(this.value);
  }
  markAsError() {
    this.value.markAsError();
  }
};
var Tn = (e) => e,
  Cn = { bold: Tn, red: Tn, green: Tn, dim: Tn, enabled: !1 },
  ma = { bold: pe, red: Pe, green: ct, dim: Je, enabled: !0 },
  jt = {
    write(e) {
      e.writeLine(',');
    },
  };
var Ne = class {
  constructor(t) {
    this.contents = t;
    this.isUnderlined = !1;
    this.color = (t) => t;
  }
  underline() {
    return (this.isUnderlined = !0), this;
  }
  setColor(t) {
    return (this.color = t), this;
  }
  write(t) {
    let r = t.getCurrentLineLength();
    t.write(this.color(this.contents)),
      this.isUnderlined &&
        t.afterNextNewline(() => {
          t.write(' '.repeat(r)).writeLine(this.color('~'.repeat(this.contents.length)));
        });
  }
};
var nt = class {
  constructor() {
    this.hasError = !1;
  }
  markAsError() {
    return (this.hasError = !0), this;
  }
};
var Vt = class extends nt {
  constructor() {
    super(...arguments);
    this.items = [];
  }
  addItem(r) {
    return this.items.push(new vn(r)), this;
  }
  getField(r) {
    return this.items[r];
  }
  getPrintWidth() {
    return this.items.length === 0
      ? 2
      : Math.max(...this.items.map((n) => n.value.getPrintWidth())) + 2;
  }
  write(r) {
    if (this.items.length === 0) {
      this.writeEmpty(r);
      return;
    }
    this.writeWithItems(r);
  }
  writeEmpty(r) {
    let n = new Ne('[]');
    this.hasError && n.setColor(r.context.colors.red).underline(), r.write(n);
  }
  writeWithItems(r) {
    let { colors: n } = r.context;
    r
      .writeLine('[')
      .withIndent(() => r.writeJoined(jt, this.items).newLine())
      .write(']'),
      this.hasError &&
        r.afterNextNewline(() => {
          r.writeLine(n.red('~'.repeat(this.getPrintWidth())));
        });
  }
};
var fa = ': ',
  _n = class {
    constructor(t, r) {
      this.name = t;
      this.value = r;
      this.hasError = !1;
    }
    markAsError() {
      this.hasError = !0;
    }
    getPrintWidth() {
      return this.name.length + this.value.getPrintWidth() + fa.length;
    }
    write(t) {
      let r = new Ne(this.name);
      this.hasError && r.underline().setColor(t.context.colors.red),
        t.write(r).write(fa).write(this.value);
    }
  };
var Y = class e extends nt {
  constructor() {
    super(...arguments);
    this.fields = {};
    this.suggestions = [];
  }
  addField(r) {
    this.fields[r.name] = r;
  }
  addSuggestion(r) {
    this.suggestions.push(r);
  }
  getField(r) {
    return this.fields[r];
  }
  getDeepField(r) {
    let [n, ...i] = r,
      o = this.getField(n);
    if (!o) return;
    let s = o;
    for (let a of i) {
      let l;
      if (
        (s.value instanceof e
          ? (l = s.value.getField(a))
          : s.value instanceof Vt && (l = s.value.getField(Number(a))),
        !l)
      )
        return;
      s = l;
    }
    return s;
  }
  getDeepFieldValue(r) {
    return r.length === 0 ? this : this.getDeepField(r)?.value;
  }
  hasField(r) {
    return !!this.getField(r);
  }
  removeAllFields() {
    this.fields = {};
  }
  removeField(r) {
    delete this.fields[r];
  }
  getFields() {
    return this.fields;
  }
  isEmpty() {
    return Object.keys(this.fields).length === 0;
  }
  getFieldValue(r) {
    return this.getField(r)?.value;
  }
  getDeepSubSelectionValue(r) {
    let n = this;
    for (let i of r) {
      if (!(n instanceof e)) return;
      let o = n.getSubSelectionValue(i);
      if (!o) return;
      n = o;
    }
    return n;
  }
  getDeepSelectionParent(r) {
    let n = this.getSelectionParent();
    if (!n) return;
    let i = n;
    for (let o of r) {
      let s = i.value.getFieldValue(o);
      if (!s || !(s instanceof e)) return;
      let a = s.getSelectionParent();
      if (!a) return;
      i = a;
    }
    return i;
  }
  getSelectionParent() {
    let r = this.getField('select');
    if (r?.value instanceof e) return { kind: 'select', value: r.value };
    let n = this.getField('include');
    if (n?.value instanceof e) return { kind: 'include', value: n.value };
  }
  getSubSelectionValue(r) {
    return this.getSelectionParent()?.value.fields[r].value;
  }
  getPrintWidth() {
    let r = Object.values(this.fields);
    return r.length == 0 ? 2 : Math.max(...r.map((i) => i.getPrintWidth())) + 2;
  }
  write(r) {
    let n = Object.values(this.fields);
    if (n.length === 0 && this.suggestions.length === 0) {
      this.writeEmpty(r);
      return;
    }
    this.writeWithContents(r, n);
  }
  writeEmpty(r) {
    let n = new Ne('{}');
    this.hasError && n.setColor(r.context.colors.red).underline(), r.write(n);
  }
  writeWithContents(r, n) {
    r.writeLine('{').withIndent(() => {
      r.writeJoined(jt, [...n, ...this.suggestions]).newLine();
    }),
      r.write('}'),
      this.hasError &&
        r.afterNextNewline(() => {
          r.writeLine(r.context.colors.red('~'.repeat(this.getPrintWidth())));
        });
  }
};
var Z = class extends nt {
  constructor(r) {
    super();
    this.text = r;
  }
  getPrintWidth() {
    return this.text.length;
  }
  write(r) {
    let n = new Ne(this.text);
    this.hasError && n.underline().setColor(r.context.colors.red), r.write(n);
  }
};
var no = class {
  constructor(t) {
    this.errorMessages = [];
    this.arguments = t;
  }
  write(t) {
    t.write(this.arguments);
  }
  addErrorMessage(t) {
    this.errorMessages.push(t);
  }
  renderAllMessages(t) {
    return this.errorMessages.map((r) => r(t)).join(`
`);
  }
};
function An(e) {
  return new no(ga(e));
}
function ga(e) {
  let t = new Y();
  for (let [r, n] of Object.entries(e)) {
    let i = new _n(r, ya(n));
    t.addField(i);
  }
  return t;
}
function ya(e) {
  if (typeof e == 'string') return new Z(JSON.stringify(e));
  if (typeof e == 'number' || typeof e == 'boolean') return new Z(String(e));
  if (typeof e == 'bigint') return new Z(`${e}n`);
  if (e === null) return new Z('null');
  if (e === void 0) return new Z('undefined');
  if ($t(e)) return new Z(`new Prisma.Decimal("${e.toFixed()}")`);
  if (e instanceof Uint8Array)
    return Buffer.isBuffer(e)
      ? new Z(`Buffer.alloc(${e.byteLength})`)
      : new Z(`new Uint8Array(${e.byteLength})`);
  if (e instanceof Date) {
    let t = gn(e) ? e.toISOString() : 'Invalid Date';
    return new Z(`new Date("${t}")`);
  }
  return e instanceof ke
    ? new Z(`Prisma.${e._getName()}`)
    : qt(e)
    ? new Z(`prisma.${Ko(e.modelName)}.$fields.${e.name}`)
    : Array.isArray(e)
    ? Lp(e)
    : typeof e == 'object'
    ? ga(e)
    : new Z(Object.prototype.toString.call(e));
}
function Lp(e) {
  let t = new Vt();
  for (let r of e) t.addItem(ya(r));
  return t;
}
function ha(e) {
  if (e === void 0) return '';
  let t = An(e);
  return new Dt(0, { colors: Cn }).write(t).toString();
}
var br = '<unknown>';
function xa(e) {
  var t = e.split(`
`);
  return t.reduce(function (r, n) {
    var i = jp(n) || Bp(n) || Qp(n) || Wp(n) || Jp(n);
    return i && r.push(i), r;
  }, []);
}
var $p =
    /^\s*at (.*?) ?\(((?:file|https?|blob|chrome-extension|native|eval|webpack|<anonymous>|\/|[a-z]:\\|\\\\).*?)(?::(\d+))?(?::(\d+))?\)?\s*$/i,
  qp = /\((\S*)(?::(\d+))(?::(\d+))\)/;
function jp(e) {
  var t = $p.exec(e);
  if (!t) return null;
  var r = t[2] && t[2].indexOf('native') === 0,
    n = t[2] && t[2].indexOf('eval') === 0,
    i = qp.exec(t[2]);
  return (
    n && i != null && ((t[2] = i[1]), (t[3] = i[2]), (t[4] = i[3])),
    {
      file: r ? null : t[2],
      methodName: t[1] || br,
      arguments: r ? [t[2]] : [],
      lineNumber: t[3] ? +t[3] : null,
      column: t[4] ? +t[4] : null,
    }
  );
}
var Vp =
  /^\s*at (?:((?:\[object object\])?.+) )?\(?((?:file|ms-appx|https?|webpack|blob):.*?):(\d+)(?::(\d+))?\)?\s*$/i;
function Bp(e) {
  var t = Vp.exec(e);
  return t
    ? {
        file: t[2],
        methodName: t[1] || br,
        arguments: [],
        lineNumber: +t[3],
        column: t[4] ? +t[4] : null,
      }
    : null;
}
var Up =
    /^\s*(.*?)(?:\((.*?)\))?(?:^|@)((?:file|https?|blob|chrome|webpack|resource|\[native).*?|[^@]*bundle)(?::(\d+))?(?::(\d+))?\s*$/i,
  Kp = /(\S+) line (\d+)(?: > eval line \d+)* > eval/i;
function Qp(e) {
  var t = Up.exec(e);
  if (!t) return null;
  var r = t[3] && t[3].indexOf(' > eval') > -1,
    n = Kp.exec(t[3]);
  return (
    r && n != null && ((t[3] = n[1]), (t[4] = n[2]), (t[5] = null)),
    {
      file: t[3],
      methodName: t[1] || br,
      arguments: t[2] ? t[2].split(',') : [],
      lineNumber: t[4] ? +t[4] : null,
      column: t[5] ? +t[5] : null,
    }
  );
}
var Gp = /^\s*(?:([^@]*)(?:\((.*?)\))?@)?(\S.*?):(\d+)(?::(\d+))?\s*$/i;
function Jp(e) {
  var t = Gp.exec(e);
  return t
    ? {
        file: t[3],
        methodName: t[1] || br,
        arguments: [],
        lineNumber: +t[4],
        column: t[5] ? +t[5] : null,
      }
    : null;
}
var Hp =
  /^\s*at (?:((?:\[object object\])?[^\\/]+(?: \[as \S+\])?) )?\(?(.*?):(\d+)(?::(\d+))?\)?\s*$/i;
function Wp(e) {
  var t = Hp.exec(e);
  return t
    ? {
        file: t[2],
        methodName: t[1] || br,
        arguments: [],
        lineNumber: +t[3],
        column: t[4] ? +t[4] : null,
      }
    : null;
}
var io = class {
    getLocation() {
      return null;
    }
  },
  oo = class {
    constructor() {
      this._error = new Error();
    }
    getLocation() {
      let t = this._error.stack;
      if (!t) return null;
      let n = xa(t).find((i) => {
        if (!i.file) return !1;
        let o = Oi(i.file);
        return (
          o !== '<anonymous>' &&
          !o.includes('@prisma') &&
          !o.includes('/packages/client/src/runtime/') &&
          !o.endsWith('/runtime/binary.js') &&
          !o.endsWith('/runtime/library.js') &&
          !o.endsWith('/runtime/edge.js') &&
          !o.endsWith('/runtime/edge-esm.js') &&
          !o.startsWith('internal/') &&
          !i.methodName.includes('new ') &&
          !i.methodName.includes('getCallSite') &&
          !i.methodName.includes('Proxy.') &&
          i.methodName.split('.').length < 4
        );
      });
      return !n || !n.file
        ? null
        : { fileName: n.file, lineNumber: n.lineNumber, columnNumber: n.column };
    }
  };
function it(e) {
  return e === 'minimal' ? new io() : new oo();
}
var ba = { _avg: !0, _count: !0, _sum: !0, _min: !0, _max: !0 };
function Bt(e = {}) {
  let t = Yp(e);
  return Object.entries(t).reduce(
    (n, [i, o]) => (ba[i] !== void 0 ? (n.select[i] = { select: o }) : (n[i] = o), n),
    { select: {} },
  );
}
function Yp(e = {}) {
  return typeof e._count == 'boolean' ? { ...e, _count: { _all: e._count } } : e;
}
function Rn(e = {}) {
  return (t) => (typeof e._count == 'boolean' && (t._count = t._count._all), t);
}
function wa(e, t) {
  let r = Rn(e);
  return t({ action: 'aggregate', unpacker: r, argsMapper: Bt })(e);
}
function Zp(e = {}) {
  let { select: t, ...r } = e;
  return typeof t == 'object' ? Bt({ ...r, _count: t }) : Bt({ ...r, _count: { _all: !0 } });
}
function Xp(e = {}) {
  return typeof e.select == 'object' ? (t) => Rn(e)(t)._count : (t) => Rn(e)(t)._count._all;
}
function Ea(e, t) {
  return t({ action: 'count', unpacker: Xp(e), argsMapper: Zp })(e);
}
function ed(e = {}) {
  let t = Bt(e);
  if (Array.isArray(t.by)) for (let r of t.by) typeof r == 'string' && (t.select[r] = !0);
  else typeof t.by == 'string' && (t.select[t.by] = !0);
  return t;
}
function td(e = {}) {
  return (t) => (
    typeof e?._count == 'boolean' &&
      t.forEach((r) => {
        r._count = r._count._all;
      }),
    t
  );
}
function Pa(e, t) {
  return t({ action: 'groupBy', unpacker: td(e), argsMapper: ed })(e);
}
function va(e, t, r) {
  if (t === 'aggregate') return (n) => wa(n, r);
  if (t === 'count') return (n) => Ea(n, r);
  if (t === 'groupBy') return (n) => Pa(n, r);
}
function Ta(e, t) {
  let r = t.fields.filter((i) => !i.relationName),
    n = Bi(r, (i) => i.name);
  return new Proxy(
    {},
    {
      get(i, o) {
        if (o in i || typeof o == 'symbol') return i[o];
        let s = n[o];
        if (s) return new xr(e, o, s.type, s.isList, s.kind === 'enum');
      },
      ...fn(Object.keys(n)),
    },
  );
}
var Ca = (e) => (Array.isArray(e) ? e : e.split('.')),
  so = (e, t) => Ca(t).reduce((r, n) => r && r[n], e),
  _a = (e, t, r) =>
    Ca(t).reduceRight((n, i, o, s) => Object.assign({}, so(e, s.slice(0, o)), { [i]: n }), r);
function rd(e, t) {
  return e === void 0 || t === void 0 ? [] : [...t, 'select', e];
}
function nd(e, t, r) {
  return t === void 0 ? e ?? {} : _a(t, r, e || !0);
}
function ao(e, t, r, n, i, o) {
  let a = e._runtimeDataModel.models[t].fields.reduce((l, u) => ({ ...l, [u.name]: u }), {});
  return (l) => {
    let u = it(e._errorFormat),
      c = rd(n, i),
      p = nd(l, o, c),
      d = r({ dataPath: c, callsite: u })(p),
      f = id(e, t);
    return new Proxy(d, {
      get(y, g) {
        if (!f.includes(g)) return y[g];
        let C = [a[g].type, r, g],
          _ = [c, p];
        return ao(e, ...C, ..._);
      },
      ...fn([...f, ...Object.getOwnPropertyNames(d)]),
    });
  };
}
function id(e, t) {
  return e._runtimeDataModel.models[t].fields.filter((r) => r.kind === 'object').map((r) => r.name);
}
var Ia = I(Ni());
var ka = I(require('fs'));
var Aa = {
  keyword: He,
  entity: He,
  value: (e) => pe(_t(e)),
  punctuation: _t,
  directive: He,
  function: He,
  variable: (e) => pe(_t(e)),
  string: (e) => pe(ct(e)),
  boolean: Ae,
  number: He,
  comment: zr,
};
var od = (e) => e,
  Mn = {},
  sd = 0,
  T = {
    manual: Mn.Prism && Mn.Prism.manual,
    disableWorkerMessageHandler: Mn.Prism && Mn.Prism.disableWorkerMessageHandler,
    util: {
      encode: function (e) {
        if (e instanceof _e) {
          let t = e;
          return new _e(t.type, T.util.encode(t.content), t.alias);
        } else
          return Array.isArray(e)
            ? e.map(T.util.encode)
            : e
                .replace(/&/g, '&amp;')
                .replace(/</g, '&lt;')
                .replace(/\u00a0/g, ' ');
      },
      type: function (e) {
        return Object.prototype.toString.call(e).slice(8, -1);
      },
      objId: function (e) {
        return e.__id || Object.defineProperty(e, '__id', { value: ++sd }), e.__id;
      },
      clone: function e(t, r) {
        let n,
          i,
          o = T.util.type(t);
        switch (((r = r || {}), o)) {
          case 'Object':
            if (((i = T.util.objId(t)), r[i])) return r[i];
            (n = {}), (r[i] = n);
            for (let s in t) t.hasOwnProperty(s) && (n[s] = e(t[s], r));
            return n;
          case 'Array':
            return (
              (i = T.util.objId(t)),
              r[i]
                ? r[i]
                : ((n = []),
                  (r[i] = n),
                  t.forEach(function (s, a) {
                    n[a] = e(s, r);
                  }),
                  n)
            );
          default:
            return t;
        }
      },
    },
    languages: {
      extend: function (e, t) {
        let r = T.util.clone(T.languages[e]);
        for (let n in t) r[n] = t[n];
        return r;
      },
      insertBefore: function (e, t, r, n) {
        n = n || T.languages;
        let i = n[e],
          o = {};
        for (let a in i)
          if (i.hasOwnProperty(a)) {
            if (a == t) for (let l in r) r.hasOwnProperty(l) && (o[l] = r[l]);
            r.hasOwnProperty(a) || (o[a] = i[a]);
          }
        let s = n[e];
        return (
          (n[e] = o),
          T.languages.DFS(T.languages, function (a, l) {
            l === s && a != e && (this[a] = o);
          }),
          o
        );
      },
      DFS: function e(t, r, n, i) {
        i = i || {};
        let o = T.util.objId;
        for (let s in t)
          if (t.hasOwnProperty(s)) {
            r.call(t, s, t[s], n || s);
            let a = t[s],
              l = T.util.type(a);
            l === 'Object' && !i[o(a)]
              ? ((i[o(a)] = !0), e(a, r, null, i))
              : l === 'Array' && !i[o(a)] && ((i[o(a)] = !0), e(a, r, s, i));
          }
      },
    },
    plugins: {},
    highlight: function (e, t, r) {
      let n = { code: e, grammar: t, language: r };
      return (
        T.hooks.run('before-tokenize', n),
        (n.tokens = T.tokenize(n.code, n.grammar)),
        T.hooks.run('after-tokenize', n),
        _e.stringify(T.util.encode(n.tokens), n.language)
      );
    },
    matchGrammar: function (e, t, r, n, i, o, s) {
      for (let g in r) {
        if (!r.hasOwnProperty(g) || !r[g]) continue;
        if (g == s) return;
        let v = r[g];
        v = T.util.type(v) === 'Array' ? v : [v];
        for (let C = 0; C < v.length; ++C) {
          let _ = v[C],
            b = _.inside,
            M = !!_.lookbehind,
            be = !!_.greedy,
            X = 0,
            lt = _.alias;
          if (be && !_.pattern.global) {
            let U = _.pattern.toString().match(/[imuy]*$/)[0];
            _.pattern = RegExp(_.pattern.source, U + 'g');
          }
          _ = _.pattern || _;
          for (let U = n, ne = i; U < t.length; ne += t[U].length, ++U) {
            let qe = t[U];
            if (t.length > e.length) return;
            if (qe instanceof _e) continue;
            if (be && U != t.length - 1) {
              _.lastIndex = ne;
              var p = _.exec(e);
              if (!p) break;
              var c = p.index + (M ? p[1].length : 0),
                d = p.index + p[0].length,
                a = U,
                l = ne;
              for (let O = t.length; a < O && (l < d || (!t[a].type && !t[a - 1].greedy)); ++a)
                (l += t[a].length), c >= l && (++U, (ne = l));
              if (t[U] instanceof _e) continue;
              (u = a - U), (qe = e.slice(ne, l)), (p.index -= ne);
            } else {
              _.lastIndex = 0;
              var p = _.exec(qe),
                u = 1;
            }
            if (!p) {
              if (o) break;
              continue;
            }
            M && (X = p[1] ? p[1].length : 0);
            var c = p.index + X,
              p = p[0].slice(X),
              d = c + p.length,
              f = qe.slice(0, c),
              y = qe.slice(d);
            let ie = [U, u];
            f && (++U, (ne += f.length), ie.push(f));
            let Et = new _e(g, b ? T.tokenize(p, b) : p, lt, p, be);
            if (
              (ie.push(Et),
              y && ie.push(y),
              Array.prototype.splice.apply(t, ie),
              u != 1 && T.matchGrammar(e, t, r, U, ne, !0, g),
              o)
            )
              break;
          }
        }
      }
    },
    tokenize: function (e, t) {
      let r = [e],
        n = t.rest;
      if (n) {
        for (let i in n) t[i] = n[i];
        delete t.rest;
      }
      return T.matchGrammar(e, r, t, 0, 0, !1), r;
    },
    hooks: {
      all: {},
      add: function (e, t) {
        let r = T.hooks.all;
        (r[e] = r[e] || []), r[e].push(t);
      },
      run: function (e, t) {
        let r = T.hooks.all[e];
        if (!(!r || !r.length)) for (var n = 0, i; (i = r[n++]); ) i(t);
      },
    },
    Token: _e,
  };
T.languages.clike = {
  comment: [
    { pattern: /(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/, lookbehind: !0 },
    { pattern: /(^|[^\\:])\/\/.*/, lookbehind: !0, greedy: !0 },
  ],
  string: { pattern: /(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/, greedy: !0 },
  'class-name': {
    pattern:
      /((?:\b(?:class|interface|extends|implements|trait|instanceof|new)\s+)|(?:catch\s+\())[\w.\\]+/i,
    lookbehind: !0,
    inside: { punctuation: /[.\\]/ },
  },
  keyword:
    /\b(?:if|else|while|do|for|return|in|instanceof|function|new|try|throw|catch|finally|null|break|continue)\b/,
  boolean: /\b(?:true|false)\b/,
  function: /\w+(?=\()/,
  number: /\b0x[\da-f]+\b|(?:\b\d+\.?\d*|\B\.\d+)(?:e[+-]?\d+)?/i,
  operator: /--?|\+\+?|!=?=?|<=?|>=?|==?=?|&&?|\|\|?|\?|\*|\/|~|\^|%/,
  punctuation: /[{}[\];(),.:]/,
};
T.languages.javascript = T.languages.extend('clike', {
  'class-name': [
    T.languages.clike['class-name'],
    {
      pattern:
        /(^|[^$\w\xA0-\uFFFF])[_$A-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\.(?:prototype|constructor))/,
      lookbehind: !0,
    },
  ],
  keyword: [
    { pattern: /((?:^|})\s*)(?:catch|finally)\b/, lookbehind: !0 },
    {
      pattern:
        /(^|[^.])\b(?:as|async(?=\s*(?:function\b|\(|[$\w\xA0-\uFFFF]|$))|await|break|case|class|const|continue|debugger|default|delete|do|else|enum|export|extends|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)\b/,
      lookbehind: !0,
    },
  ],
  number:
    /\b(?:(?:0[xX](?:[\dA-Fa-f](?:_[\dA-Fa-f])?)+|0[bB](?:[01](?:_[01])?)+|0[oO](?:[0-7](?:_[0-7])?)+)n?|(?:\d(?:_\d)?)+n|NaN|Infinity)\b|(?:\b(?:\d(?:_\d)?)+\.?(?:\d(?:_\d)?)*|\B\.(?:\d(?:_\d)?)+)(?:[Ee][+-]?(?:\d(?:_\d)?)+)?/,
  function: /[_$a-zA-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\s*(?:\.\s*(?:apply|bind|call)\s*)?\()/,
  operator:
    /-[-=]?|\+[+=]?|!=?=?|<<?=?|>>?>?=?|=(?:==?|>)?|&[&=]?|\|[|=]?|\*\*?=?|\/=?|~|\^=?|%=?|\?|\.{3}/,
});
T.languages.javascript['class-name'][0].pattern =
  /(\b(?:class|interface|extends|implements|instanceof|new)\s+)[\w.\\]+/;
T.languages.insertBefore('javascript', 'keyword', {
  regex: {
    pattern:
      /((?:^|[^$\w\xA0-\uFFFF."'\])\s])\s*)\/(\[(?:[^\]\\\r\n]|\\.)*]|\\.|[^/\\\[\r\n])+\/[gimyus]{0,6}(?=\s*($|[\r\n,.;})\]]))/,
    lookbehind: !0,
    greedy: !0,
  },
  'function-variable': {
    pattern:
      /[_$a-zA-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\s*[=:]\s*(?:async\s*)?(?:\bfunction\b|(?:\((?:[^()]|\([^()]*\))*\)|[_$a-zA-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*)\s*=>))/,
    alias: 'function',
  },
  parameter: [
    {
      pattern:
        /(function(?:\s+[_$A-Za-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*)?\s*\(\s*)(?!\s)(?:[^()]|\([^()]*\))+?(?=\s*\))/,
      lookbehind: !0,
      inside: T.languages.javascript,
    },
    { pattern: /[_$a-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\s*=>)/i, inside: T.languages.javascript },
    {
      pattern: /(\(\s*)(?!\s)(?:[^()]|\([^()]*\))+?(?=\s*\)\s*=>)/,
      lookbehind: !0,
      inside: T.languages.javascript,
    },
    {
      pattern:
        /((?:\b|\s|^)(?!(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)(?![$\w\xA0-\uFFFF]))(?:[_$A-Za-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*\s*)\(\s*)(?!\s)(?:[^()]|\([^()]*\))+?(?=\s*\)\s*\{)/,
      lookbehind: !0,
      inside: T.languages.javascript,
    },
  ],
  constant: /\b[A-Z](?:[A-Z_]|\dx?)*\b/,
});
T.languages.markup && T.languages.markup.tag.addInlined('script', 'javascript');
T.languages.js = T.languages.javascript;
T.languages.typescript = T.languages.extend('javascript', {
  keyword:
    /\b(?:abstract|as|async|await|break|case|catch|class|const|constructor|continue|debugger|declare|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|is|keyof|let|module|namespace|new|null|of|package|private|protected|public|readonly|return|require|set|static|super|switch|this|throw|try|type|typeof|var|void|while|with|yield)\b/,
  builtin: /\b(?:string|Function|any|number|boolean|Array|symbol|console|Promise|unknown|never)\b/,
});
T.languages.ts = T.languages.typescript;
function _e(e, t, r, n, i) {
  (this.type = e),
    (this.content = t),
    (this.alias = r),
    (this.length = (n || '').length | 0),
    (this.greedy = !!i);
}
_e.stringify = function (e, t) {
  return typeof e == 'string'
    ? e
    : Array.isArray(e)
    ? e
        .map(function (r) {
          return _e.stringify(r, t);
        })
        .join('')
    : ad(e.type)(e.content);
};
function ad(e) {
  return Aa[e] || od;
}
function Ra(e) {
  return ld(e, T.languages.javascript);
}
function ld(e, t) {
  return T.tokenize(e, t)
    .map((n) => _e.stringify(n))
    .join('');
}
var Ma = I(Os());
function Sa(e) {
  return (0, Ma.default)(e);
}
var Sn = class e {
  static read(t) {
    let r;
    try {
      r = ka.default.readFileSync(t, 'utf-8');
    } catch {
      return null;
    }
    return e.fromContent(r);
  }
  static fromContent(t) {
    let r = t.split(/\r?\n/);
    return new e(1, r);
  }
  constructor(t, r) {
    (this.firstLineNumber = t), (this.lines = r);
  }
  get lastLineNumber() {
    return this.firstLineNumber + this.lines.length - 1;
  }
  mapLineAt(t, r) {
    if (t < this.firstLineNumber || t > this.lines.length + this.firstLineNumber) return this;
    let n = t - this.firstLineNumber,
      i = [...this.lines];
    return (i[n] = r(i[n])), new e(this.firstLineNumber, i);
  }
  mapLines(t) {
    return new e(
      this.firstLineNumber,
      this.lines.map((r, n) => t(r, this.firstLineNumber + n)),
    );
  }
  lineAt(t) {
    return this.lines[t - this.firstLineNumber];
  }
  prependSymbolAt(t, r) {
    return this.mapLines((n, i) => (i === t ? `${r} ${n}` : `  ${n}`));
  }
  slice(t, r) {
    let n = this.lines.slice(t - 1, r).join(`
`);
    return new e(
      t,
      Sa(n).split(`
`),
    );
  }
  highlight() {
    let t = Ra(this.toString());
    return new e(
      this.firstLineNumber,
      t.split(`
`),
    );
  }
  toString() {
    return this.lines.join(`
`);
  }
};
var ud = {
    red: Pe,
    gray: zr,
    dim: Je,
    bold: pe,
    underline: le,
    highlightSource: (e) => e.highlight(),
  },
  cd = {
    red: (e) => e,
    gray: (e) => e,
    dim: (e) => e,
    bold: (e) => e,
    underline: (e) => e,
    highlightSource: (e) => e,
  };
function pd({ callsite: e, message: t, originalMethod: r, isPanic: n, callArguments: i }, o) {
  let s = { functionName: `prisma.${r}()`, message: t, isPanic: n ?? !1, callArguments: i };
  if (!e || typeof window < 'u' || process.env.NODE_ENV === 'production') return s;
  let a = e.getLocation();
  if (!a || !a.lineNumber || !a.columnNumber) return s;
  let l = Math.max(1, a.lineNumber - 3),
    u = Sn.read(a.fileName)?.slice(l, a.lineNumber),
    c = u?.lineAt(a.lineNumber);
  if (u && c) {
    let p = md(c),
      d = dd(c);
    if (!d) return s;
    (s.functionName = `${d.code})`),
      (s.location = a),
      n || (u = u.mapLineAt(a.lineNumber, (y) => y.slice(0, d.openingBraceIndex))),
      (u = o.highlightSource(u));
    let f = String(u.lastLineNumber).length;
    if (
      ((s.contextLines = u
        .mapLines((y, g) => o.gray(String(g).padStart(f)) + ' ' + y)
        .mapLines((y) => o.dim(y))
        .prependSymbolAt(a.lineNumber, o.bold(o.red('\u2192')))),
      i)
    ) {
      let y = p + f + 1;
      (y += 2), (s.callArguments = (0, Ia.default)(i, y).slice(y));
    }
  }
  return s;
}
function dd(e) {
  let t = Object.keys(we.ModelAction).join('|'),
    n = new RegExp(String.raw`\.(${t})\(`).exec(e);
  if (n) {
    let i = n.index + n[0].length,
      o = e.lastIndexOf(' ', n.index) + 1;
    return { code: e.slice(o, i), openingBraceIndex: i };
  }
  return null;
}
function md(e) {
  let t = 0;
  for (let r = 0; r < e.length; r++) {
    if (e.charAt(r) !== ' ') return t;
    t++;
  }
  return t;
}
function fd(
  { functionName: e, location: t, message: r, isPanic: n, contextLines: i, callArguments: o },
  s,
) {
  let a = [''],
    l = t ? ' in' : ':';
  if (
    (n
      ? (a.push(
          s.red(
            `Oops, an unknown error occurred! This is ${s.bold('on us')}, you did nothing wrong.`,
          ),
        ),
        a.push(s.red(`It occurred in the ${s.bold(`\`${e}\``)} invocation${l}`)))
      : a.push(s.red(`Invalid ${s.bold(`\`${e}\``)} invocation${l}`)),
    t && a.push(s.underline(gd(t))),
    i)
  ) {
    a.push('');
    let u = [i.toString()];
    o && (u.push(o), u.push(s.dim(')'))), a.push(u.join('')), o && a.push('');
  } else a.push(''), o && a.push(o), a.push('');
  return (
    a.push(r),
    a.join(`
`)
  );
}
function gd(e) {
  let t = [e.fileName];
  return (
    e.lineNumber && t.push(String(e.lineNumber)),
    e.columnNumber && t.push(String(e.columnNumber)),
    t.join(':')
  );
}
function Ut(e) {
  let t = e.showColors ? ud : cd,
    r = pd(e, t);
  return fd(r, t);
}
function Fa(e, t, r, n) {
  return e === we.ModelAction.findFirstOrThrow || e === we.ModelAction.findUniqueOrThrow
    ? yd(t, r, n)
    : n;
}
function yd(e, t, r) {
  return async (n) => {
    if ('rejectOnNotFound' in n.args) {
      let o = Ut({
        originalMethod: n.clientMethod,
        callsite: n.callsite,
        message: "'rejectOnNotFound' option is not supported",
      });
      throw new se(o, { clientVersion: t });
    }
    return await r(n).catch((o) => {
      throw o instanceof W && o.code === 'P2025' ? new Ve(`No ${e} found`, t) : o;
    });
  };
}
function Le(e) {
  return e.replace(/^./, (t) => t.toLowerCase());
}
var hd = [
    'findUnique',
    'findUniqueOrThrow',
    'findFirst',
    'findFirstOrThrow',
    'create',
    'update',
    'upsert',
    'delete',
  ],
  xd = ['aggregate', 'count', 'groupBy'];
function lo(e, t) {
  let r = e._extensions.getAllModelExtensions(t) ?? {},
    n = [
      bd(e, t),
      Ed(e, t),
      gr(r),
      ue('name', () => t),
      ue('$name', () => t),
      ue('$parent', () => e._appliedParent),
    ];
  return Fe({}, n);
}
function bd(e, t) {
  let r = Le(t),
    n = Object.keys(we.ModelAction).concat('count');
  return {
    getKeys() {
      return n;
    },
    getPropertyValue(i) {
      let o = i,
        s = (l) => e._request(l);
      s = Fa(o, t, e._clientVersion, s);
      let a = (l) => (u) => {
        let c = it(e._errorFormat);
        return e._createPrismaPromise((p) => {
          let d = {
            args: u,
            dataPath: [],
            action: o,
            model: t,
            clientMethod: `${r}.${i}`,
            jsModelName: r,
            transaction: p,
            callsite: c,
          };
          return s({ ...d, ...l });
        });
      };
      return hd.includes(o) ? ao(e, t, a) : wd(i) ? va(e, i, a) : a({});
    },
  };
}
function wd(e) {
  return xd.includes(e);
}
function Ed(e, t) {
  return gt(
    ue('fields', () => {
      let r = e._runtimeDataModel.models[t];
      return Ta(t, r);
    }),
  );
}
function Da(e) {
  return e.replace(/^./, (t) => t.toUpperCase());
}
var uo = Symbol();
function wr(e) {
  let t = [Pd(e), ue(uo, () => e), ue('$parent', () => e._appliedParent)],
    r = e._extensions.getAllClientExtensions();
  return r && t.push(gr(r)), Fe(e, t);
}
function Pd(e) {
  let t = Object.keys(e._runtimeDataModel.models),
    r = t.map(Le),
    n = [...new Set(t.concat(r))];
  return gt({
    getKeys() {
      return n;
    },
    getPropertyValue(i) {
      let o = Da(i);
      if (e._runtimeDataModel.models[o] !== void 0) return lo(e, o);
      if (e._runtimeDataModel.models[i] !== void 0) return lo(e, i);
    },
    getPropertyDescriptor(i) {
      if (!r.includes(i)) return { enumerable: !1 };
    },
  });
}
function kn(e) {
  return e[uo] ? e[uo] : e;
}
function Oa(e) {
  if (typeof e == 'function') return e(this);
  let t = kn(this),
    r = Object.create(t, {
      _extensions: { value: this._extensions.append(e) },
      _appliedParent: { value: this, configurable: !0 },
      $use: { value: void 0 },
      $on: { value: void 0 },
    });
  return wr(r);
}
function Na({ result: e, modelName: t, select: r, extensions: n }) {
  let i = n.getAllComputedFields(t);
  if (!i) return e;
  let o = [],
    s = [];
  for (let a of Object.values(i)) {
    if (r) {
      if (!r[a.name]) continue;
      let l = a.needs.filter((u) => !r[u]);
      l.length > 0 && s.push(yr(l));
    }
    vd(e, a.needs) && o.push(Td(a, Fe(e, o)));
  }
  return o.length > 0 || s.length > 0 ? Fe(e, [...o, ...s]) : e;
}
function vd(e, t) {
  return t.every((r) => Vi(e, r));
}
function Td(e, t) {
  return gt(ue(e.name, () => e.compute(t)));
}
function In({ visitor: e, result: t, args: r, runtimeDataModel: n, modelName: i }) {
  if (Array.isArray(t)) {
    for (let s = 0; s < t.length; s++)
      t[s] = In({ result: t[s], args: r, modelName: i, runtimeDataModel: n, visitor: e });
    return t;
  }
  let o = e(t, i, r) ?? t;
  return (
    r.include &&
      La({
        includeOrSelect: r.include,
        result: o,
        parentModelName: i,
        runtimeDataModel: n,
        visitor: e,
      }),
    r.select &&
      La({
        includeOrSelect: r.select,
        result: o,
        parentModelName: i,
        runtimeDataModel: n,
        visitor: e,
      }),
    o
  );
}
function La({
  includeOrSelect: e,
  result: t,
  parentModelName: r,
  runtimeDataModel: n,
  visitor: i,
}) {
  for (let [o, s] of Object.entries(e)) {
    if (!s || t[o] == null) continue;
    let l = n.models[r].fields.find((c) => c.name === o);
    if (!l || l.kind !== 'object' || !l.relationName) continue;
    let u = typeof s == 'object' ? s : {};
    t[o] = In({ visitor: i, result: t[o], args: u, modelName: l.type, runtimeDataModel: n });
  }
}
function $a({ result: e, modelName: t, args: r, extensions: n, runtimeDataModel: i }) {
  return n.isEmpty() || e == null || typeof e != 'object' || !i.models[t]
    ? e
    : In({
        result: e,
        args: r ?? {},
        modelName: t,
        runtimeDataModel: i,
        visitor: (s, a, l) => Na({ result: s, modelName: Le(a), select: l.select, extensions: n }),
      });
}
function qa(e) {
  if (e instanceof me) return Cd(e);
  if (Array.isArray(e)) {
    let r = [e[0]];
    for (let n = 1; n < e.length; n++) r[n] = Er(e[n]);
    return r;
  }
  let t = {};
  for (let r in e) t[r] = Er(e[r]);
  return t;
}
function Cd(e) {
  return new me(e.strings, e.values);
}
function Er(e) {
  if (typeof e != 'object' || e == null || e instanceof ke || qt(e)) return e;
  if ($t(e)) return new Oe(e.toFixed());
  if (Ot(e)) return new Date(+e);
  if (ArrayBuffer.isView(e)) return e.slice(0);
  if (Array.isArray(e)) {
    let t = e.length,
      r;
    for (r = Array(t); t--; ) r[t] = Er(e[t]);
    return r;
  }
  if (typeof e == 'object') {
    let t = {};
    for (let r in e)
      r === '__proto__'
        ? Object.defineProperty(t, r, {
            value: Er(e[r]),
            configurable: !0,
            enumerable: !0,
            writable: !0,
          })
        : (t[r] = Er(e[r]));
    return t;
  }
  ft(e, 'Unknown value');
}
function Va(e, t, r, n = 0) {
  return e._createPrismaPromise((i) => {
    let o = t.customDataProxyFetch;
    return (
      'transaction' in t &&
        i !== void 0 &&
        (t.transaction?.kind === 'batch' && t.transaction.lock.then(), (t.transaction = i)),
      n === r.length
        ? e._executeRequest(t)
        : r[n]({
            model: t.model,
            operation: t.model ? t.action : t.clientMethod,
            args: qa(t.args ?? {}),
            __internalParams: t,
            query: (s, a = t) => {
              let l = a.customDataProxyFetch;
              return (a.customDataProxyFetch = Qa(o, l)), (a.args = s), Va(e, a, r, n + 1);
            },
          })
    );
  });
}
function Ba(e, t) {
  let { jsModelName: r, action: n, clientMethod: i } = t,
    o = r ? n : i;
  if (e._extensions.isEmpty()) return e._executeRequest(t);
  let s = e._extensions.getAllQueryCallbacks(r ?? '$none', o);
  return Va(e, t, s);
}
function Ua(e) {
  return (t) => {
    let r = { requests: t },
      n = t[0].extensions.getAllBatchQueryCallbacks();
    return n.length ? Ka(r, n, 0, e) : e(r);
  };
}
function Ka(e, t, r, n) {
  if (r === t.length) return n(e);
  let i = e.customDataProxyFetch,
    o = e.requests[0].transaction;
  return t[r]({
    args: {
      queries: e.requests.map((s) => ({ model: s.modelName, operation: s.action, args: s.args })),
      transaction: o ? { isolationLevel: o.kind === 'batch' ? o.isolationLevel : void 0 } : void 0,
    },
    __internalParams: e,
    query(s, a = e) {
      let l = a.customDataProxyFetch;
      return (a.customDataProxyFetch = Qa(i, l)), Ka(a, t, r + 1, n);
    },
  });
}
var ja = (e) => e;
function Qa(e = ja, t = ja) {
  return (r) => e(t(r));
}
function Ja(e, t, r) {
  let n = Le(r);
  return !t.result || !(t.result.$allModels || t.result[n])
    ? e
    : _d({ ...e, ...Ga(t.name, e, t.result.$allModels), ...Ga(t.name, e, t.result[n]) });
}
function _d(e) {
  let t = new Ie(),
    r = (n, i) =>
      t.getOrCreate(n, () =>
        i.has(n) ? [n] : (i.add(n), e[n] ? e[n].needs.flatMap((o) => r(o, i)) : [n]),
      );
  return It(e, (n) => ({ ...n, needs: r(n.name, new Set()) }));
}
function Ga(e, t, r) {
  return r
    ? It(r, ({ needs: n, compute: i }, o) => ({
        name: o,
        needs: n ? Object.keys(n).filter((s) => n[s]) : [],
        compute: Ad(t, o, i),
      }))
    : {};
}
function Ad(e, t, r) {
  let n = e?.[t]?.compute;
  return n ? (i) => r({ ...i, [t]: n(i) }) : r;
}
function Ha(e, t) {
  if (!t) return e;
  let r = { ...e };
  for (let n of Object.values(t)) if (e[n.name]) for (let i of n.needs) r[i] = !0;
  return r;
}
var Fn = class {
    constructor(t, r) {
      this.extension = t;
      this.previous = r;
      this.computedFieldsCache = new Ie();
      this.modelExtensionsCache = new Ie();
      this.queryCallbacksCache = new Ie();
      this.clientExtensions = ur(() =>
        this.extension.client
          ? { ...this.previous?.getAllClientExtensions(), ...this.extension.client }
          : this.previous?.getAllClientExtensions(),
      );
      this.batchCallbacks = ur(() => {
        let t = this.previous?.getAllBatchQueryCallbacks() ?? [],
          r = this.extension.query?.$__internalBatch;
        return r ? t.concat(r) : t;
      });
    }
    getAllComputedFields(t) {
      return this.computedFieldsCache.getOrCreate(t, () =>
        Ja(this.previous?.getAllComputedFields(t), this.extension, t),
      );
    }
    getAllClientExtensions() {
      return this.clientExtensions.get();
    }
    getAllModelExtensions(t) {
      return this.modelExtensionsCache.getOrCreate(t, () => {
        let r = Le(t);
        return !this.extension.model ||
          !(this.extension.model[r] || this.extension.model.$allModels)
          ? this.previous?.getAllModelExtensions(t)
          : {
              ...this.previous?.getAllModelExtensions(t),
              ...this.extension.model.$allModels,
              ...this.extension.model[r],
            };
      });
    }
    getAllQueryCallbacks(t, r) {
      return this.queryCallbacksCache.getOrCreate(`${t}:${r}`, () => {
        let n = this.previous?.getAllQueryCallbacks(t, r) ?? [],
          i = [],
          o = this.extension.query;
        return !o || !(o[t] || o.$allModels || o[r] || o.$allOperations)
          ? n
          : (o[t] !== void 0 &&
              (o[t][r] !== void 0 && i.push(o[t][r]),
              o[t].$allOperations !== void 0 && i.push(o[t].$allOperations)),
            t !== '$none' &&
              o.$allModels !== void 0 &&
              (o.$allModels[r] !== void 0 && i.push(o.$allModels[r]),
              o.$allModels.$allOperations !== void 0 && i.push(o.$allModels.$allOperations)),
            o[r] !== void 0 && i.push(o[r]),
            o.$allOperations !== void 0 && i.push(o.$allOperations),
            n.concat(i));
      });
    }
    getAllBatchQueryCallbacks() {
      return this.batchCallbacks.get();
    }
  },
  Dn = class e {
    constructor(t) {
      this.head = t;
    }
    static empty() {
      return new e();
    }
    static single(t) {
      return new e(new Fn(t));
    }
    isEmpty() {
      return this.head === void 0;
    }
    append(t) {
      return new e(new Fn(t, this.head));
    }
    getAllComputedFields(t) {
      return this.head?.getAllComputedFields(t);
    }
    getAllClientExtensions() {
      return this.head?.getAllClientExtensions();
    }
    getAllModelExtensions(t) {
      return this.head?.getAllModelExtensions(t);
    }
    getAllQueryCallbacks(t, r) {
      return this.head?.getAllQueryCallbacks(t, r) ?? [];
    }
    getAllBatchQueryCallbacks() {
      return this.head?.getAllBatchQueryCallbacks() ?? [];
    }
  };
var Wa = L('prisma:client'),
  za = { Vercel: 'vercel', 'Netlify CI': 'netlify' };
function Ya({ postinstall: e, ciName: t, clientVersion: r }) {
  if (
    (Wa('checkPlatformCaching:postinstall', e),
    Wa('checkPlatformCaching:ciName', t),
    e === !0 && t && t in za)
  ) {
    let n = `Prisma has detected that this project was built on ${t}, which caches dependencies. This leads to an outdated Prisma Client because Prisma's auto-generation isn't triggered. To fix this, make sure to run the \`prisma generate\` command during the build process.

Learn how: https://pris.ly/d/${za[t]}-build`;
    throw (console.error(n), new k(n, r));
  }
}
function Za(e, t) {
  return e
    ? e.datasources
      ? e.datasources
      : e.datasourceUrl
      ? { [t[0]]: { url: e.datasourceUrl } }
      : {}
    : {};
}
function Pr({ error: e, user_facing_error: t }, r) {
  return t.error_code
    ? new W(t.message, {
        code: t.error_code,
        clientVersion: r,
        meta: t.meta,
        batchRequestIdx: t.batch_request_idx,
      })
    : new z(e, { clientVersion: r, batchRequestIdx: t.batch_request_idx });
}
var Kt = class {};
var nl = I(require('fs')),
  vr = I(require('path'));
function On(e) {
  let { runtimeBinaryTarget: t } = e;
  return `Add "${t}" to \`binaryTargets\` in the "schema.prisma" file and run \`prisma generate\` after saving it:

${Rd(e)}`;
}
function Rd(e) {
  let { generator: t, generatorBinaryTargets: r, runtimeBinaryTarget: n } = e,
    i = { fromEnvVar: null, value: n },
    o = [...r, i];
  return $i({ ...t, binaryTargets: o });
}
function ot(e) {
  let { runtimeBinaryTarget: t } = e;
  return `Prisma Client could not locate the Query Engine for runtime "${t}".`;
}
function st(e) {
  let { searchedLocations: t } = e;
  return `The following locations have been searched:
${[...new Set(t)].map((i) => `  ${i}`).join(`
`)}`;
}
function Xa(e) {
  let { runtimeBinaryTarget: t } = e;
  return `${ot(e)}

This happened because \`binaryTargets\` have been pinned, but the actual deployment also required "${t}".
${On(e)}

${st(e)}`;
}
function Nn(e) {
  return `We would appreciate if you could take the time to share some information with us.
Please help us by answering a few questions: https://pris.ly/${e}`;
}
function Ln(e) {
  let { errorStack: t } = e;
  return t?.match(/\/\.next|\/next@|\/next\//)
    ? `

We detected that you are using Next.js, learn how to fix this: https://pris.ly/d/engine-not-found-nextjs.`
    : '';
}
function el(e) {
  let { queryEngineName: t } = e;
  return `${ot(e)}${Ln(e)}

This is likely caused by a bundler that has not copied "${t}" next to the resulting bundle.
Ensure that "${t}" has been copied next to the bundle or in "${e.expectedLocation}".

${Nn('engine-not-found-bundler-investigation')}

${st(e)}`;
}
function tl(e) {
  let { runtimeBinaryTarget: t, generatorBinaryTargets: r } = e,
    n = r.find((i) => i.native);
  return `${ot(e)}

This happened because Prisma Client was generated for "${
    n?.value ?? 'unknown'
  }", but the actual deployment required "${t}".
${On(e)}

${st(e)}`;
}
function rl(e) {
  let { queryEngineName: t } = e;
  return `${ot(e)}${Ln(e)}

This is likely caused by tooling that has not copied "${t}" to the deployment folder.
Ensure that you ran \`prisma generate\` and that "${t}" has been copied to "${e.expectedLocation}".

${Nn('engine-not-found-tooling-investigation')}

${st(e)}`;
}
var Md = L('prisma:client:engines:resolveEnginePath'),
  Sd = () => new RegExp('runtime[\\\\/]library\\.m?js$');
async function il(e, t) {
  let r =
    {
      binary: process.env.PRISMA_QUERY_ENGINE_BINARY,
      library: process.env.PRISMA_QUERY_ENGINE_LIBRARY,
    }[e] ?? t.prismaPath;
  if (r !== void 0) return r;
  let { enginePath: n, searchedLocations: i } = await kd(e, t);
  if ((Md('enginePath', n), n !== void 0 && e === 'binary' && Fi(n), n !== void 0))
    return (t.prismaPath = n);
  let o = await St(),
    s = t.generator?.binaryTargets ?? [],
    a = s.some((d) => d.native),
    l = !s.some((d) => d.value === o),
    u = __filename.match(Sd()) === null,
    c = {
      searchedLocations: i,
      generatorBinaryTargets: s,
      generator: t.generator,
      runtimeBinaryTarget: o,
      queryEngineName: ol(e, o),
      expectedLocation: vr.default.relative(process.cwd(), t.dirname),
      errorStack: new Error().stack,
    },
    p;
  throw (
    (a && l ? (p = tl(c)) : l ? (p = Xa(c)) : u ? (p = el(c)) : (p = rl(c)),
    new k(p, t.clientVersion))
  );
}
async function kd(engineType, config) {
  let binaryTarget = await St(),
    searchedLocations = [],
    dirname = eval('__dirname'),
    searchLocations = [
      config.dirname,
      vr.default.resolve(dirname, '..'),
      config.generator?.output?.value ?? dirname,
      vr.default.resolve(dirname, '../../../.prisma/client'),
      '/tmp/prisma-engines',
      config.cwd,
    ];
  __filename.includes('resolveEnginePath') && searchLocations.push(Ls());
  for (let e of searchLocations) {
    let t = ol(engineType, binaryTarget),
      r = vr.default.join(e, t);
    if ((searchedLocations.push(e), nl.default.existsSync(r)))
      return { enginePath: r, searchedLocations };
  }
  return { enginePath: void 0, searchedLocations };
}
function ol(e, t) {
  return e === 'library' ? xi(t, 'fs') : `query-engine-${t}${t === 'windows' ? '.exe' : ''}`;
}
function $n(e, t) {
  return {
    batch: e,
    transaction: t?.kind === 'batch' ? { isolationLevel: t.options.isolationLevel } : void 0,
  };
}
var co = I(ji());
function sl(e) {
  return e
    ? e.replace(/".*"/g, '"X"').replace(/[\s:\[]([+-]?([0-9]*[.])?[0-9]+)/g, (t) => `${t[0]}5`)
    : '';
}
function al(e) {
  return e
    .split(
      `
`,
    )
    .map((t) =>
      t
        .replace(/^\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d\.\d+([+-][0-2]\d:[0-5]\d|Z)\s*/, '')
        .replace(/\+\d+\s*ms$/, ''),
    ).join(`
`);
}
var ll = I(Qs());
function ul({
  title: e,
  user: t = 'prisma',
  repo: r = 'prisma',
  template: n = 'bug_report.md',
  body: i,
}) {
  return (0, ll.default)({ user: t, repo: r, template: n, title: e, body: i });
}
function cl({
  version: e,
  platform: t,
  title: r,
  description: n,
  engineVersion: i,
  database: o,
  query: s,
}) {
  let a = ts(6e3 - (s?.length ?? 0)),
    l = al((0, co.default)(a)),
    u = n
      ? `# Description
\`\`\`
${n}
\`\`\``
      : '',
    c = (0, co.default)(`Hi Prisma Team! My Prisma Client just crashed. This is the report:
## Versions

| Name            | Version            |
|-----------------|--------------------|
| Node            | ${process.version?.padEnd(19)}| 
| OS              | ${t?.padEnd(19)}|
| Prisma Client   | ${e?.padEnd(19)}|
| Query Engine    | ${i?.padEnd(19)}|
| Database        | ${o?.padEnd(19)}|

${u}

## Logs
\`\`\`
${l}
\`\`\`

## Client Snippet
\`\`\`ts
// PLEASE FILL YOUR CODE SNIPPET HERE
\`\`\`

## Schema
\`\`\`prisma
// PLEASE ADD YOUR SCHEMA HERE IF POSSIBLE
\`\`\`

## Prisma Engine Query
\`\`\`
${s ? sl(s) : ''}
\`\`\`
`),
    p = ul({ title: r, body: c });
  return `${r}

This is a non-recoverable error which probably happens when the Prisma Query Engine has a panic.

${le(p)}

If you want the Prisma team to look into it, please open the link above \u{1F64F}
To increase the chance of success, please post your schema and a snippet of
how you used Prisma Client in the issue. 
`;
}
function qn({ inlineDatasources: e, overrideDatasources: t, env: r, clientVersion: n }) {
  let i,
    o = Object.keys(e)[0],
    s = e[o]?.url,
    a = t[o]?.url;
  if (
    (o === void 0
      ? (i = void 0)
      : a
      ? (i = a)
      : s?.value
      ? (i = s.value)
      : s?.fromEnvVar && (i = r[s.fromEnvVar]),
    s?.fromEnvVar !== void 0 && i === void 0)
  )
    throw new k(`error: Environment variable not found: ${s.fromEnvVar}.`, n);
  if (i === void 0) throw new k('error: Missing URL environment variable, value, or override.', n);
  return i;
}
var jn = class extends Error {
  constructor(r, n) {
    super(r);
    (this.clientVersion = n.clientVersion), (this.cause = n.cause);
  }
  get [Symbol.toStringTag]() {
    return this.name;
  }
};
var ge = class extends jn {
  constructor(r, n) {
    super(r, n);
    this.isRetryable = n.isRetryable ?? !0;
  }
};
function S(e, t) {
  return { ...e, isRetryable: t };
}
var Qt = class extends ge {
  constructor(r) {
    super('This request must be retried', S(r, !0));
    this.name = 'ForcedRetryError';
    this.code = 'P5001';
  }
};
E(Qt, 'ForcedRetryError');
var ht = class extends ge {
  constructor(r, n) {
    super(r, S(n, !1));
    this.name = 'InvalidDatasourceError';
    this.code = 'P5002';
  }
};
E(ht, 'InvalidDatasourceError');
var xt = class extends ge {
  constructor(r, n) {
    super(r, S(n, !1));
    this.name = 'NotImplementedYetError';
    this.code = 'P5004';
  }
};
E(xt, 'NotImplementedYetError');
var j = class extends ge {
  constructor(r, n) {
    super(r, n);
    this.response = n.response;
    let i = this.response.headers.get('prisma-request-id');
    if (i) {
      let o = `(The request id was: ${i})`;
      this.message = this.message + ' ' + o;
    }
  }
};
var bt = class extends j {
  constructor(r) {
    super('Schema needs to be uploaded', S(r, !0));
    this.name = 'SchemaMissingError';
    this.code = 'P5005';
  }
};
E(bt, 'SchemaMissingError');
var po = 'This request could not be understood by the server',
  Tr = class extends j {
    constructor(r, n, i) {
      super(n || po, S(r, !1));
      this.name = 'BadRequestError';
      this.code = 'P5000';
      i && (this.code = i);
    }
  };
E(Tr, 'BadRequestError');
var Cr = class extends j {
  constructor(r, n) {
    super('Engine not started: healthcheck timeout', S(r, !0));
    this.name = 'HealthcheckTimeoutError';
    this.code = 'P5013';
    this.logs = n;
  }
};
E(Cr, 'HealthcheckTimeoutError');
var _r = class extends j {
  constructor(r, n, i) {
    super(n, S(r, !0));
    this.name = 'EngineStartupError';
    this.code = 'P5014';
    this.logs = i;
  }
};
E(_r, 'EngineStartupError');
var Ar = class extends j {
  constructor(r) {
    super('Engine version is not supported', S(r, !1));
    this.name = 'EngineVersionNotSupportedError';
    this.code = 'P5012';
  }
};
E(Ar, 'EngineVersionNotSupportedError');
var mo = 'Request timed out',
  Rr = class extends j {
    constructor(r, n = mo) {
      super(n, S(r, !1));
      this.name = 'GatewayTimeoutError';
      this.code = 'P5009';
    }
  };
E(Rr, 'GatewayTimeoutError');
var Id = 'Interactive transaction error',
  Mr = class extends j {
    constructor(r, n = Id) {
      super(n, S(r, !1));
      this.name = 'InteractiveTransactionError';
      this.code = 'P5015';
    }
  };
E(Mr, 'InteractiveTransactionError');
var Fd = 'Request parameters are invalid',
  Sr = class extends j {
    constructor(r, n = Fd) {
      super(n, S(r, !1));
      this.name = 'InvalidRequestError';
      this.code = 'P5011';
    }
  };
E(Sr, 'InvalidRequestError');
var fo = 'Requested resource does not exist',
  kr = class extends j {
    constructor(r, n = fo) {
      super(n, S(r, !1));
      this.name = 'NotFoundError';
      this.code = 'P5003';
    }
  };
E(kr, 'NotFoundError');
var go = 'Unknown server error',
  Gt = class extends j {
    constructor(r, n, i) {
      super(n || go, S(r, !0));
      this.name = 'ServerError';
      this.code = 'P5006';
      this.logs = i;
    }
  };
E(Gt, 'ServerError');
var yo = 'Unauthorized, check your connection string',
  Ir = class extends j {
    constructor(r, n = yo) {
      super(n, S(r, !1));
      this.name = 'UnauthorizedError';
      this.code = 'P5007';
    }
  };
E(Ir, 'UnauthorizedError');
var ho = 'Usage exceeded, retry again later',
  Fr = class extends j {
    constructor(r, n = ho) {
      super(n, S(r, !0));
      this.name = 'UsageExceededError';
      this.code = 'P5008';
    }
  };
E(Fr, 'UsageExceededError');
async function Dd(e) {
  let t;
  try {
    t = await e.text();
  } catch {
    return { type: 'EmptyError' };
  }
  try {
    let r = JSON.parse(t);
    if (typeof r == 'string')
      switch (r) {
        case 'InternalDataProxyError':
          return { type: 'DataProxyError', body: r };
        default:
          return { type: 'UnknownTextError', body: r };
      }
    if (typeof r == 'object' && r !== null) {
      if ('is_panic' in r && 'message' in r && 'error_code' in r)
        return { type: 'QueryEngineError', body: r };
      if (
        'EngineNotStarted' in r ||
        'InteractiveTransactionMisrouted' in r ||
        'InvalidRequestError' in r
      ) {
        let n = Object.values(r)[0].reason;
        return typeof n == 'string' && !['SchemaMissing', 'EngineVersionNotSupported'].includes(n)
          ? { type: 'UnknownJsonError', body: r }
          : { type: 'DataProxyError', body: r };
      }
    }
    return { type: 'UnknownJsonError', body: r };
  } catch {
    return t === '' ? { type: 'EmptyError' } : { type: 'UnknownTextError', body: t };
  }
}
async function Dr(e, t) {
  if (e.ok) return;
  let r = { clientVersion: t, response: e },
    n = await Dd(e);
  if (n.type === 'QueryEngineError')
    throw new W(n.body.message, { code: n.body.error_code, clientVersion: t });
  if (n.type === 'DataProxyError') {
    if (n.body === 'InternalDataProxyError') throw new Gt(r, 'Internal Data Proxy error');
    if ('EngineNotStarted' in n.body) {
      if (n.body.EngineNotStarted.reason === 'SchemaMissing') return new bt(r);
      if (n.body.EngineNotStarted.reason === 'EngineVersionNotSupported') throw new Ar(r);
      if ('EngineStartupError' in n.body.EngineNotStarted.reason) {
        let { msg: i, logs: o } = n.body.EngineNotStarted.reason.EngineStartupError;
        throw new _r(r, i, o);
      }
      if ('KnownEngineStartupError' in n.body.EngineNotStarted.reason) {
        let { msg: i, error_code: o } = n.body.EngineNotStarted.reason.KnownEngineStartupError;
        throw new k(i, t, o);
      }
      if ('HealthcheckTimeout' in n.body.EngineNotStarted.reason) {
        let { logs: i } = n.body.EngineNotStarted.reason.HealthcheckTimeout;
        throw new Cr(r, i);
      }
    }
    if ('InteractiveTransactionMisrouted' in n.body) {
      let i = {
        IDParseError: 'Could not parse interactive transaction ID',
        NoQueryEngineFoundError:
          'Could not find Query Engine for the specified host and transaction ID',
        TransactionStartError: 'Could not start interactive transaction',
      };
      throw new Mr(r, i[n.body.InteractiveTransactionMisrouted.reason]);
    }
    if ('InvalidRequestError' in n.body) throw new Sr(r, n.body.InvalidRequestError.reason);
  }
  if (e.status === 401 || e.status === 403) throw new Ir(r, Jt(yo, n));
  if (e.status === 404) return new kr(r, Jt(fo, n));
  if (e.status === 429) throw new Fr(r, Jt(ho, n));
  if (e.status === 504) throw new Rr(r, Jt(mo, n));
  if (e.status >= 500) throw new Gt(r, Jt(go, n));
  if (e.status >= 400) throw new Tr(r, Jt(po, n));
}
function Jt(e, t) {
  return t.type === 'EmptyError' ? e : `${e}: ${JSON.stringify(t)}`;
}
function pl(e) {
  let t = Math.pow(2, e) * 50,
    r = Math.ceil(Math.random() * t) - Math.ceil(t / 2),
    n = t + r;
  return new Promise((i) => setTimeout(() => i(n), n));
}
function dl(e) {
  if (!!e.generator?.previewFeatures.some((r) => r.toLowerCase().includes('metrics')))
    throw new k(
      'The `metrics` preview feature is not yet available with Accelerate.\nPlease remove `metrics` from the `previewFeatures` in your schema.\n\nMore information about Accelerate: https://pris.ly/d/accelerate',
      e.clientVersion,
    );
}
var ml = {
  '@prisma/debug': 'workspace:*',
  '@prisma/engines-version': '5.6.0-32.e95e739751f42d8ca026f6b910f5a2dc5adeaeee',
  '@prisma/fetch-engine': 'workspace:*',
  '@prisma/get-platform': 'workspace:*',
  '@swc/core': '1.3.96',
  '@swc/jest': '0.2.29',
  '@types/jest': '29.5.8',
  '@types/node': '18.18.9',
  execa: '5.1.1',
  jest: '29.7.0',
  typescript: '5.2.2',
};
var Or = class extends ge {
  constructor(r, n) {
    super(
      `Cannot fetch data from service:
${r}`,
      S(n, !0),
    );
    this.name = 'RequestError';
    this.code = 'P5010';
  }
};
E(Or, 'RequestError');
async function wt(e, t, r = (n) => n) {
  let n = t.clientVersion;
  try {
    return typeof fetch == 'function' ? await r(fetch)(e, t) : await r(xo)(e, t);
  } catch (i) {
    let o = i.message ?? 'Unknown error';
    throw new Or(o, { clientVersion: n });
  }
}
function Nd(e) {
  return { ...e.headers, 'Content-Type': 'application/json' };
}
function Ld(e) {
  return { method: e.method, headers: Nd(e) };
}
function $d(e, t) {
  return {
    text: () => Promise.resolve(Buffer.concat(e).toString()),
    json: () => Promise.resolve().then(() => JSON.parse(Buffer.concat(e).toString())),
    ok: t.statusCode >= 200 && t.statusCode <= 299,
    status: t.statusCode,
    url: t.url,
    headers: new bo(t.headers),
  };
}
async function xo(e, t = {}) {
  let r = qd('https'),
    n = Ld(t),
    i = [],
    { origin: o } = new URL(e);
  return new Promise((s, a) => {
    let l = r.request(e, n, (u) => {
      let {
        statusCode: c,
        headers: { location: p },
      } = u;
      c >= 301 &&
        c <= 399 &&
        p &&
        (p.startsWith('http') === !1 ? s(xo(`${o}${p}`, t)) : s(xo(p, t))),
        u.on('data', (d) => i.push(d)),
        u.on('end', () => s($d(i, u))),
        u.on('error', a);
    });
    l.on('error', a), l.end(t.body ?? '');
  });
}
var qd = typeof require < 'u' ? require : () => {},
  bo = class {
    constructor(t = {}) {
      this.headers = new Map();
      for (let [r, n] of Object.entries(t))
        if (typeof n == 'string') this.headers.set(r, n);
        else if (Array.isArray(n)) for (let i of n) this.headers.set(r, i);
    }
    append(t, r) {
      this.headers.set(t, r);
    }
    delete(t) {
      this.headers.delete(t);
    }
    get(t) {
      return this.headers.get(t) ?? null;
    }
    has(t) {
      return this.headers.has(t);
    }
    set(t, r) {
      this.headers.set(t, r);
    }
    forEach(t, r) {
      for (let [n, i] of this.headers) t.call(r, i, n, this);
    }
  };
var jd = /^[1-9][0-9]*\.[0-9]+\.[0-9]+$/,
  fl = L('prisma:client:dataproxyEngine');
async function Vd(e, t) {
  let r = ml['@prisma/engines-version'],
    n = t.clientVersion ?? 'unknown';
  if (process.env.PRISMA_CLIENT_DATA_PROXY_CLIENT_VERSION)
    return process.env.PRISMA_CLIENT_DATA_PROXY_CLIENT_VERSION;
  if (e.includes('accelerate') && n !== '0.0.0' && n !== 'in-memory') return n;
  let [i, o] = n?.split('-') ?? [];
  if (o === void 0 && jd.test(i)) return i;
  if (o !== void 0 || n === '0.0.0' || n === 'in-memory') {
    if (e.startsWith('localhost') || e.startsWith('127.0.0.1')) return '0.0.0';
    let [s] = r.split('-') ?? [],
      [a, l, u] = s.split('.'),
      c = Bd(`<=${a}.${l}.${u}`),
      p = await wt(c, { clientVersion: n });
    if (!p.ok)
      throw new Error(
        `Failed to fetch stable Prisma version, unpkg.com status ${p.status} ${
          p.statusText
        }, response body: ${(await p.text()) || '<empty body>'}`,
      );
    let d = await p.text();
    fl('length of body fetched from unpkg.com', d.length);
    let f;
    try {
      f = JSON.parse(d);
    } catch (y) {
      throw (console.error('JSON.parse error: body fetched from unpkg.com: ', d), y);
    }
    return f.version;
  }
  throw new xt('Only `major.minor.patch` versions are supported by Accelerate.', {
    clientVersion: n,
  });
}
async function gl(e, t) {
  let r = await Vd(e, t);
  return fl('version', r), r;
}
function Bd(e) {
  return encodeURI(`https://unpkg.com/prisma@${e}/package.json`);
}
var yl = 3,
  wo = L('prisma:client:dataproxyEngine'),
  Eo = class {
    constructor({ apiKey: t, tracingHelper: r, logLevel: n, logQueries: i, engineHash: o }) {
      (this.apiKey = t),
        (this.tracingHelper = r),
        (this.logLevel = n),
        (this.logQueries = i),
        (this.engineHash = o);
    }
    build({ traceparent: t, interactiveTransaction: r } = {}) {
      let n = { Authorization: `Bearer ${this.apiKey}`, 'Prisma-Engine-Hash': this.engineHash };
      this.tracingHelper.isEnabled() && (n.traceparent = t ?? this.tracingHelper.getTraceParent()),
        r && (n['X-transaction-id'] = r.id);
      let i = this.buildCaptureSettings();
      return i.length > 0 && (n['X-capture-telemetry'] = i.join(', ')), n;
    }
    buildCaptureSettings() {
      let t = [];
      return (
        this.tracingHelper.isEnabled() && t.push('tracing'),
        this.logLevel && t.push(this.logLevel),
        this.logQueries && t.push('query'),
        t
      );
    }
  },
  Nr = class extends Kt {
    constructor(r) {
      super();
      dl(r),
        (this.config = r),
        (this.env = { ...this.config.env, ...process.env }),
        (this.inlineSchema = r.inlineSchema),
        (this.inlineDatasources = r.inlineDatasources),
        (this.inlineSchemaHash = r.inlineSchemaHash),
        (this.clientVersion = r.clientVersion),
        (this.engineHash = r.engineVersion),
        (this.logEmitter = r.logEmitter),
        (this.tracingHelper = this.config.tracingHelper);
    }
    apiKey() {
      return this.headerBuilder.apiKey;
    }
    version() {
      return this.engineHash;
    }
    async start() {
      this.startPromise !== void 0 && (await this.startPromise),
        (this.startPromise = (async () => {
          let [r, n] = this.extractHostAndApiKey();
          (this.host = r),
            (this.headerBuilder = new Eo({
              apiKey: n,
              tracingHelper: this.tracingHelper,
              logLevel: this.config.logLevel,
              logQueries: this.config.logQueries,
              engineHash: this.engineHash,
            })),
            (this.remoteClientVersion = await gl(r, this.config)),
            wo('host', this.host);
        })()),
        await this.startPromise;
    }
    async stop() {}
    propagateResponseExtensions(r) {
      r?.logs?.length &&
        r.logs.forEach((n) => {
          switch (n.level) {
            case 'debug':
            case 'error':
            case 'trace':
            case 'warn':
            case 'info':
              break;
            case 'query': {
              let i = typeof n.attributes.query == 'string' ? n.attributes.query : '';
              if (!this.tracingHelper.isEnabled()) {
                let [o] = i.split('/* traceparent');
                i = o;
              }
              this.logEmitter.emit('query', {
                query: i,
                timestamp: n.timestamp,
                duration: n.attributes.duration_ms,
                params: n.attributes.params,
                target: n.attributes.target,
              });
            }
          }
        }),
        r?.traces?.length && this.tracingHelper.createEngineSpan({ span: !0, spans: r.traces });
    }
    on(r, n) {
      if (r === 'beforeExit')
        throw new Error('"beforeExit" hook is not applicable to the remote query engine');
      this.logEmitter.on(r, n);
    }
    async url(r) {
      return (
        await this.start(),
        `https://${this.host}/${this.remoteClientVersion}/${this.inlineSchemaHash}/${r}`
      );
    }
    async uploadSchema() {
      let r = { name: 'schemaUpload', internal: !0 };
      return this.tracingHelper.runInChildSpan(r, async () => {
        let n = await wt(await this.url('schema'), {
          method: 'PUT',
          headers: this.headerBuilder.build(),
          body: this.inlineSchema,
          clientVersion: this.clientVersion,
        });
        n.ok || wo('schema response status', n.status);
        let i = await Dr(n, this.clientVersion);
        if (i)
          throw (
            (this.logEmitter.emit('warn', {
              message: `Error while uploading schema: ${i.message}`,
            }),
            i)
          );
        this.logEmitter.emit('info', {
          message: `Schema (re)uploaded (hash: ${this.inlineSchemaHash})`,
        });
      });
    }
    request(r, { traceparent: n, interactiveTransaction: i, customDataProxyFetch: o }) {
      return this.requestInternal({
        body: r,
        traceparent: n,
        interactiveTransaction: i,
        customDataProxyFetch: o,
      });
    }
    async requestBatch(r, { traceparent: n, transaction: i, customDataProxyFetch: o }) {
      let s = i?.kind === 'itx' ? i.options : void 0,
        a = $n(r, i),
        { batchResult: l, elapsed: u } = await this.requestInternal({
          body: a,
          customDataProxyFetch: o,
          interactiveTransaction: s,
          traceparent: n,
        });
      return l.map((c) =>
        'errors' in c && c.errors.length > 0
          ? Pr(c.errors[0], this.clientVersion)
          : { data: c, elapsed: u },
      );
    }
    requestInternal({
      body: r,
      traceparent: n,
      customDataProxyFetch: i,
      interactiveTransaction: o,
    }) {
      return this.withRetry({
        actionGerund: 'querying',
        callback: async ({ logHttpCall: s }) => {
          let a = o ? `${o.payload.endpoint}/graphql` : await this.url('graphql');
          s(a);
          let l = await wt(
            a,
            {
              method: 'POST',
              headers: this.headerBuilder.build({ traceparent: n, interactiveTransaction: o }),
              body: JSON.stringify(r),
              clientVersion: this.clientVersion,
            },
            i,
          );
          l.ok || wo('graphql response status', l.status),
            await this.handleError(await Dr(l, this.clientVersion));
          let u = await l.json(),
            c = u.extensions;
          if ((c && this.propagateResponseExtensions(c), u.errors))
            throw u.errors.length === 1
              ? Pr(u.errors[0], this.config.clientVersion)
              : new z(u.errors, { clientVersion: this.config.clientVersion });
          return u;
        },
      });
    }
    async transaction(r, n, i) {
      let o = { start: 'starting', commit: 'committing', rollback: 'rolling back' };
      return this.withRetry({
        actionGerund: `${o[r]} transaction`,
        callback: async ({ logHttpCall: s }) => {
          if (r === 'start') {
            let a = JSON.stringify({
                max_wait: i?.maxWait ?? 2e3,
                timeout: i?.timeout ?? 5e3,
                isolation_level: i?.isolationLevel,
              }),
              l = await this.url('transaction/start');
            s(l);
            let u = await wt(l, {
              method: 'POST',
              headers: this.headerBuilder.build({ traceparent: n.traceparent }),
              body: a,
              clientVersion: this.clientVersion,
            });
            await this.handleError(await Dr(u, this.clientVersion));
            let c = await u.json(),
              p = c.extensions;
            p && this.propagateResponseExtensions(p);
            let d = c.id,
              f = c['data-proxy'].endpoint;
            return { id: d, payload: { endpoint: f } };
          } else {
            let a = `${i.payload.endpoint}/${r}`;
            s(a);
            let l = await wt(a, {
              method: 'POST',
              headers: this.headerBuilder.build({ traceparent: n.traceparent }),
              clientVersion: this.clientVersion,
            });
            await this.handleError(await Dr(l, this.clientVersion));
            let c = (await l.json()).extensions;
            c && this.propagateResponseExtensions(c);
            return;
          }
        },
      });
    }
    extractHostAndApiKey() {
      let r = { clientVersion: this.clientVersion },
        n = Object.keys(this.inlineDatasources)[0],
        i = qn({
          inlineDatasources: this.inlineDatasources,
          overrideDatasources: this.config.overrideDatasources,
          clientVersion: this.clientVersion,
          env: this.env,
        }),
        o;
      try {
        o = new URL(i);
      } catch {
        throw new ht(
          `Error validating datasource \`${n}\`: the URL must start with the protocol \`prisma://\``,
          r,
        );
      }
      let { protocol: s, host: a, searchParams: l } = o;
      if (s !== 'prisma:')
        throw new ht(
          `Error validating datasource \`${n}\`: the URL must start with the protocol \`prisma://\``,
          r,
        );
      let u = l.get('api_key');
      if (u === null || u.length < 1)
        throw new ht(
          `Error validating datasource \`${n}\`: the URL must contain a valid API key`,
          r,
        );
      return [a, u];
    }
    metrics() {
      throw new xt('Metrics are not yet supported for Accelerate', {
        clientVersion: this.clientVersion,
      });
    }
    async withRetry(r) {
      for (let n = 0; ; n++) {
        let i = (o) => {
          this.logEmitter.emit('info', { message: `Calling ${o} (n=${n})` });
        };
        try {
          return await r.callback({ logHttpCall: i });
        } catch (o) {
          if (!(o instanceof ge) || !o.isRetryable) throw o;
          if (n >= yl) throw o instanceof Qt ? o.cause : o;
          this.logEmitter.emit('warn', {
            message: `Attempt ${n + 1}/${yl} failed for ${r.actionGerund}: ${
              o.message ?? '(unknown)'
            }`,
          });
          let s = await pl(n);
          this.logEmitter.emit('warn', { message: `Retrying after ${s}ms` });
        }
      }
    }
    async handleError(r) {
      if (r instanceof bt)
        throw (await this.uploadSchema(), new Qt({ clientVersion: this.clientVersion, cause: r }));
      if (r) throw r;
    }
  };
function hl(e) {
  if (e?.kind === 'itx') return e.options.id;
}
var vo = I(require('os')),
  xl = I(require('path'));
var Po = Symbol('PrismaLibraryEngineCache');
function Ud() {
  let e = globalThis;
  return e[Po] === void 0 && (e[Po] = {}), e[Po];
}
function Kd(e) {
  let t = Ud();
  if (t[e] !== void 0) return t[e];
  let r = xl.default.toNamespacedPath(e),
    n = { exports: {} },
    i = 0;
  return (
    process.platform !== 'win32' &&
      (i = vo.default.constants.dlopen.RTLD_LAZY | vo.default.constants.dlopen.RTLD_DEEPBIND),
    process.dlopen(n, r, i),
    (t[e] = n.exports),
    n.exports
  );
}
var bl = {
  async loadLibrary(e) {
    let t = await _i(),
      r = await il('library', e);
    try {
      return e.tracingHelper.runInChildSpan({ name: 'loadLibrary', internal: !0 }, () => Kd(r));
    } catch (n) {
      let i = Di({ e: n, platformInfo: t, id: r });
      throw new k(i, e.clientVersion);
    }
  },
};
var Co = {};
Pt(Co, {
  QueryEngine: () => $r,
  __wbg_call_9495de66fdbe016b: () => nm,
  __wbg_debug_7960d327fd96f71a: () => Am,
  __wbg_error_f851667af71bcfc6: () => xm,
  __wbg_error_fd84ca2a8a977774: () => vm,
  __wbg_error_fe807da27c4a4ced: () => gm,
  __wbg_get_baf4855f9a986186: () => um,
  __wbg_info_5566be377f5b52ae: () => Cm,
  __wbg_log_7b690f184ae4519b: () => _m,
  __wbg_new_9d3a9ce4282a18a8: () => mm,
  __wbg_new_abda76e883ba8a5f: () => ym,
  __wbg_parse_3ac95b51fc312db8: () => fm,
  __wbg_resolve_fd40f858d9db1a04: () => Pm,
  __wbg_set_wasm: () => To,
  __wbg_stack_658279fe44541cf6: () => hm,
  __wbg_stringify_029a979dfb73aa17: () => lm,
  __wbg_then_ec5db6d509eb475f: () => Em,
  __wbg_warn_48cbddced45e5414: () => Tm,
  __wbindgen_cb_drop: () => wm,
  __wbindgen_closure_wrapper2989: () => Rm,
  __wbindgen_error_new: () => om,
  __wbindgen_is_function: () => cm,
  __wbindgen_is_string: () => pm,
  __wbindgen_is_undefined: () => am,
  __wbindgen_object_clone_ref: () => sm,
  __wbindgen_object_drop_ref: () => im,
  __wbindgen_string_get: () => dm,
  __wbindgen_string_new: () => rm,
  __wbindgen_throw: () => bm,
  debug_panic: () => Xd,
  dmmf: () => Zd,
  getBuildTimeInfo: () => Yd,
  init: () => em,
});
var h;
function To(e) {
  h = e;
}
var Qd = typeof TextDecoder > 'u' ? (0, module.require)('util').TextDecoder : TextDecoder,
  wl = new Qd('utf-8', { ignoreBOM: !0, fatal: !0 });
wl.decode();
var Vn = null;
function Un() {
  return (Vn === null || Vn.byteLength === 0) && (Vn = new Uint8Array(h.memory.buffer)), Vn;
}
function Ht(e, t) {
  return (e = e >>> 0), wl.decode(Un().subarray(e, e + t));
}
var Ue = new Array(128).fill(void 0);
Ue.push(void 0, null, !0, !1);
var Lr = Ue.length;
function J(e) {
  Lr === Ue.length && Ue.push(Ue.length + 1);
  let t = Lr;
  return (Lr = Ue[t]), (Ue[t] = e), t;
}
function A(e) {
  return Ue[e];
}
function Gd(e) {
  e < 132 || ((Ue[e] = Lr), (Lr = e));
}
function ce(e) {
  let t = A(e);
  return Gd(e), t;
}
var G = 0,
  Jd = typeof TextEncoder > 'u' ? (0, module.require)('util').TextEncoder : TextEncoder,
  Kn = new Jd('utf-8'),
  Hd =
    typeof Kn.encodeInto == 'function'
      ? function (e, t) {
          return Kn.encodeInto(e, t);
        }
      : function (e, t) {
          let r = Kn.encode(e);
          return t.set(r), { read: e.length, written: r.length };
        };
function re(e, t, r) {
  if (r === void 0) {
    let a = Kn.encode(e),
      l = t(a.length, 1) >>> 0;
    return (
      Un()
        .subarray(l, l + a.length)
        .set(a),
      (G = a.length),
      l
    );
  }
  let n = e.length,
    i = t(n, 1) >>> 0,
    o = Un(),
    s = 0;
  for (; s < n; s++) {
    let a = e.charCodeAt(s);
    if (a > 127) break;
    o[i + s] = a;
  }
  if (s !== n) {
    s !== 0 && (e = e.slice(s)), (i = r(i, n, (n = s + e.length * 3), 1) >>> 0);
    let a = Un().subarray(i + s, i + n),
      l = Hd(e, a);
    s += l.written;
  }
  return (G = s), i;
}
function Qn(e) {
  return e == null;
}
var Bn = null;
function xe() {
  return (Bn === null || Bn.byteLength === 0) && (Bn = new Int32Array(h.memory.buffer)), Bn;
}
function Wd(e, t, r, n) {
  let i = { a: e, b: t, cnt: 1, dtor: r },
    o = (...s) => {
      i.cnt++;
      let a = i.a;
      i.a = 0;
      try {
        return n(a, i.b, ...s);
      } finally {
        --i.cnt === 0 ? h.__wbindgen_export_2.get(i.dtor)(a, i.b) : (i.a = a);
      }
    };
  return (o.original = i), o;
}
function zd(e, t, r) {
  h.wasm_bindgen__convert__closures__invoke1_mut__hc8730847d9f9e207(e, t, J(r));
}
function Yd() {
  let e = h.getBuildTimeInfo();
  return ce(e);
}
function Zd(e) {
  let t, r;
  try {
    let u = h.__wbindgen_add_to_stack_pointer(-16),
      c = re(e, h.__wbindgen_malloc, h.__wbindgen_realloc),
      p = G;
    h.dmmf(u, c, p);
    var n = xe()[u / 4 + 0],
      i = xe()[u / 4 + 1],
      o = xe()[u / 4 + 2],
      s = xe()[u / 4 + 3],
      a = n,
      l = i;
    if (s) throw ((a = 0), (l = 0), ce(o));
    return (t = a), (r = l), Ht(a, l);
  } finally {
    h.__wbindgen_add_to_stack_pointer(16), h.__wbindgen_free(t, r, 1);
  }
}
function Xd(e) {
  try {
    let o = h.__wbindgen_add_to_stack_pointer(-16);
    var t = Qn(e) ? 0 : re(e, h.__wbindgen_malloc, h.__wbindgen_realloc),
      r = G;
    h.debug_panic(o, t, r);
    var n = xe()[o / 4 + 0],
      i = xe()[o / 4 + 1];
    if (i) throw ce(n);
  } finally {
    h.__wbindgen_add_to_stack_pointer(16);
  }
}
function em() {
  h.init();
}
function Gn(e, t) {
  try {
    return e.apply(this, t);
  } catch (r) {
    h.__wbindgen_exn_store(J(r));
  }
}
function tm(e, t, r, n) {
  h.wasm_bindgen__convert__closures__invoke2_mut__h0a290c7e33a927ff(e, t, J(r), J(n));
}
var $r = class e {
  static __wrap(t) {
    t = t >>> 0;
    let r = Object.create(e.prototype);
    return (r.__wbg_ptr = t), r;
  }
  __destroy_into_raw() {
    let t = this.__wbg_ptr;
    return (this.__wbg_ptr = 0), t;
  }
  free() {
    let t = this.__destroy_into_raw();
    h.__wbg_queryengine_free(t);
  }
  constructor(t, r, n) {
    try {
      let a = h.__wbindgen_add_to_stack_pointer(-16);
      h.queryengine_new(a, J(t), J(r), Qn(n) ? 0 : J(n));
      var i = xe()[a / 4 + 0],
        o = xe()[a / 4 + 1],
        s = xe()[a / 4 + 2];
      if (s) throw ce(o);
      return e.__wrap(i);
    } finally {
      h.__wbindgen_add_to_stack_pointer(16);
    }
  }
  connect(t) {
    let r = re(t, h.__wbindgen_malloc, h.__wbindgen_realloc),
      n = G,
      i = h.queryengine_connect(this.__wbg_ptr, r, n);
    return ce(i);
  }
  disconnect(t) {
    let r = re(t, h.__wbindgen_malloc, h.__wbindgen_realloc),
      n = G,
      i = h.queryengine_disconnect(this.__wbg_ptr, r, n);
    return ce(i);
  }
  query(t, r, n) {
    let i = re(t, h.__wbindgen_malloc, h.__wbindgen_realloc),
      o = G,
      s = re(r, h.__wbindgen_malloc, h.__wbindgen_realloc),
      a = G;
    var l = Qn(n) ? 0 : re(n, h.__wbindgen_malloc, h.__wbindgen_realloc),
      u = G;
    let c = h.queryengine_query(this.__wbg_ptr, i, o, s, a, l, u);
    return ce(c);
  }
  startTransaction(t, r) {
    let n = re(t, h.__wbindgen_malloc, h.__wbindgen_realloc),
      i = G,
      o = re(r, h.__wbindgen_malloc, h.__wbindgen_realloc),
      s = G,
      a = h.queryengine_startTransaction(this.__wbg_ptr, n, i, o, s);
    return ce(a);
  }
  commitTransaction(t, r) {
    let n = re(t, h.__wbindgen_malloc, h.__wbindgen_realloc),
      i = G,
      o = re(r, h.__wbindgen_malloc, h.__wbindgen_realloc),
      s = G,
      a = h.queryengine_commitTransaction(this.__wbg_ptr, n, i, o, s);
    return ce(a);
  }
  dmmf(t) {
    let r = re(t, h.__wbindgen_malloc, h.__wbindgen_realloc),
      n = G,
      i = h.queryengine_dmmf(this.__wbg_ptr, r, n);
    return ce(i);
  }
  rollbackTransaction(t, r) {
    let n = re(t, h.__wbindgen_malloc, h.__wbindgen_realloc),
      i = G,
      o = re(r, h.__wbindgen_malloc, h.__wbindgen_realloc),
      s = G,
      a = h.queryengine_rollbackTransaction(this.__wbg_ptr, n, i, o, s);
    return ce(a);
  }
  sdlSchema() {
    let t = h.queryengine_sdlSchema(this.__wbg_ptr);
    return ce(t);
  }
  metrics(t) {
    let r = re(t, h.__wbindgen_malloc, h.__wbindgen_realloc),
      n = G,
      i = h.queryengine_metrics(this.__wbg_ptr, r, n);
    return ce(i);
  }
};
function rm(e, t) {
  let r = Ht(e, t);
  return J(r);
}
function nm() {
  return Gn(function (e, t, r) {
    let n = A(e).call(A(t), A(r));
    return J(n);
  }, arguments);
}
function im(e) {
  ce(e);
}
function om(e, t) {
  let r = new Error(Ht(e, t));
  return J(r);
}
function sm(e) {
  let t = A(e);
  return J(t);
}
function am(e) {
  return A(e) === void 0;
}
function lm() {
  return Gn(function (e) {
    let t = JSON.stringify(A(e));
    return J(t);
  }, arguments);
}
function um() {
  return Gn(function (e, t) {
    let r = Reflect.get(A(e), A(t));
    return J(r);
  }, arguments);
}
function cm(e) {
  return typeof A(e) == 'function';
}
function pm(e) {
  return typeof A(e) == 'string';
}
function dm(e, t) {
  let r = A(t),
    n = typeof r == 'string' ? r : void 0;
  var i = Qn(n) ? 0 : re(n, h.__wbindgen_malloc, h.__wbindgen_realloc),
    o = G;
  (xe()[e / 4 + 1] = o), (xe()[e / 4 + 0] = i);
}
function mm(e, t) {
  try {
    var r = { a: e, b: t },
      n = (o, s) => {
        let a = r.a;
        r.a = 0;
        try {
          return tm(a, r.b, o, s);
        } finally {
          r.a = a;
        }
      };
    let i = new Promise(n);
    return J(i);
  } finally {
    r.a = r.b = 0;
  }
}
function fm() {
  return Gn(function (e, t) {
    let r = JSON.parse(Ht(e, t));
    return J(r);
  }, arguments);
}
function gm(e) {
  console.error(A(e));
}
function ym() {
  let e = new Error();
  return J(e);
}
function hm(e, t) {
  let r = A(t).stack,
    n = re(r, h.__wbindgen_malloc, h.__wbindgen_realloc),
    i = G;
  (xe()[e / 4 + 1] = i), (xe()[e / 4 + 0] = n);
}
function xm(e, t) {
  let r, n;
  try {
    (r = e), (n = t), console.error(Ht(e, t));
  } finally {
    h.__wbindgen_free(r, n, 1);
  }
}
function bm(e, t) {
  throw new Error(Ht(e, t));
}
function wm(e) {
  let t = ce(e).original;
  return t.cnt-- == 1 ? ((t.a = 0), !0) : !1;
}
function Em(e, t) {
  let r = A(e).then(A(t));
  return J(r);
}
function Pm(e) {
  let t = Promise.resolve(A(e));
  return J(t);
}
function vm(e, t, r, n) {
  console.error(A(e), A(t), A(r), A(n));
}
function Tm(e, t, r, n) {
  console.warn(A(e), A(t), A(r), A(n));
}
function Cm(e, t, r, n) {
  console.info(A(e), A(t), A(r), A(n));
}
function _m(e, t, r, n) {
  console.log(A(e), A(t), A(r), A(n));
}
function Am(e, t, r, n) {
  console.debug(A(e), A(t), A(r), A(n));
}
function Rm(e, t, r) {
  let n = Wd(e, t, 138, zd);
  return J(n);
}
var El = {
  async loadLibrary(e) {
    let { generator: t, clientVersion: r, adapter: n } = e,
      i = await e.getQueryEngineWasmModule?.();
    if (t?.previewFeatures.includes('driverAdapters') === void 0)
      throw new k('The `driverAdapters` preview feature is required with `engineType="wasm"`', r);
    if (n === void 0)
      throw new k(
        'The `adapter` option for `PrismaClient` is required with `engineType="wasm"`',
        r,
      );
    if (i == null)
      throw new k('The loaded wasm module was unexpectedly `undefined` or `null` once loaded', r);
    let o = new WebAssembly.Instance(i, { './query_engine_bg.js': Co });
    return (
      To(o.exports),
      {
        debugPanic() {
          return Promise.reject('{}');
        },
        dmmf() {
          return Promise.resolve('{}');
        },
        version() {
          return { commit: 'unknown', version: 'unknown' };
        },
        QueryEngine: $r,
      }
    );
  },
};
var Mm = 'P2036',
  $e = L('prisma:client:libraryEngine');
function Sm(e) {
  return e.item_type === 'query' && 'query' in e;
}
function km(e) {
  return 'level' in e ? e.level === 'error' && e.message === 'PANIC' : !1;
}
var Pl = [...Ai, 'native'],
  vl = 0,
  Wt = class extends Kt {
    constructor(r, n) {
      super();
      mt(r.generator) === 'wasm' ? (this.libraryLoader = n ?? El) : (this.libraryLoader = n ?? bl),
        (this.config = r),
        (this.libraryStarted = !1),
        (this.logQueries = r.logQueries ?? !1),
        (this.logLevel = r.logLevel ?? 'error'),
        (this.logEmitter = r.logEmitter),
        (this.datamodel = atob(r.inlineSchema)),
        r.enableDebugLogs && (this.logLevel = 'debug');
      let o = Object.keys(r.overrideDatasources)[0],
        s = r.overrideDatasources[o]?.url;
      o !== void 0 && s !== void 0 && (this.datasourceOverrides = { [o]: s }),
        (this.libraryInstantiationPromise = this.instantiateLibrary()),
        this.checkForTooManyEngines();
    }
    checkForTooManyEngines() {
      vl === 10 &&
        console.warn(
          `${Ae(
            'warn(prisma-client)',
          )} This is the 10th instance of Prisma Client being started. Make sure this is intentional.`,
        );
    }
    async transaction(r, n, i) {
      await this.start();
      let o = JSON.stringify(n),
        s;
      if (r === 'start') {
        let l = JSON.stringify({
          max_wait: i?.maxWait ?? 2e3,
          timeout: i?.timeout ?? 5e3,
          isolation_level: i?.isolationLevel,
        });
        s = await this.engine?.startTransaction(l, o);
      } else
        r === 'commit'
          ? (s = await this.engine?.commitTransaction(i.id, o))
          : r === 'rollback' && (s = await this.engine?.rollbackTransaction(i.id, o));
      let a = this.parseEngineResponse(s);
      if (Im(a)) {
        let l = this.getExternalAdapterError(a);
        throw l
          ? l.error
          : new W(a.message, {
              code: a.error_code,
              clientVersion: this.config.clientVersion,
              meta: a.meta,
            });
      }
      return a;
    }
    async instantiateLibrary() {
      if (($e('internalSetup'), this.libraryInstantiationPromise))
        return this.libraryInstantiationPromise;
      hi(), (this.platform = await this.getPlatform()), await this.loadEngine(), this.version();
    }
    async getPlatform() {
      {
        if (this.platform) return this.platform;
        let r = await St();
        if (!Pl.includes(r))
          throw new k(
            `Unknown ${Pe('PRISMA_QUERY_ENGINE_LIBRARY')} ${Pe(
              pe(r),
            )}. Possible binaryTargets: ${ct(Pl.join(', '))} or a path to the query engine library.
You may have to run ${ct('prisma generate')} for your changes to take effect.`,
            this.config.clientVersion,
          );
        return r;
      }
    }
    parseEngineResponse(r) {
      if (!r)
        throw new z('Response from the Engine was empty', {
          clientVersion: this.config.clientVersion,
        });
      try {
        return JSON.parse(r);
      } catch {
        throw new z('Unable to JSON.parse response from engine', {
          clientVersion: this.config.clientVersion,
        });
      }
    }
    async loadEngine() {
      if (!this.engine) {
        this.QueryEngineConstructor ||
          ((this.library = await this.libraryLoader.loadLibrary(this.config)),
          (this.QueryEngineConstructor = this.library.QueryEngine));
        try {
          let r = new WeakRef(this),
            { adapter: n } = this.config;
          n && $e('Using driver adapter: %O', n),
            (this.engine = new this.QueryEngineConstructor(
              {
                datamodel: this.datamodel,
                env: process.env,
                logQueries: this.config.logQueries ?? !1,
                ignoreEnvVarErrors: !0,
                datasourceOverrides: this.datasourceOverrides ?? {},
                logLevel: this.logLevel,
                configDir: this.config.cwd,
                engineProtocol: 'json',
              },
              (i) => {
                r.deref()?.logger(i);
              },
              n,
            )),
            vl++;
        } catch (r) {
          let n = r,
            i = this.parseInitError(n.message);
          throw typeof i == 'string'
            ? n
            : new k(i.message, this.config.clientVersion, i.error_code);
        }
      }
    }
    logger(r) {
      let n = this.parseEngineResponse(r);
      if (n) {
        if ('span' in n) {
          this.config.tracingHelper.createEngineSpan(n);
          return;
        }
        (n.level = n?.level.toLowerCase() ?? 'unknown'),
          Sm(n)
            ? this.logEmitter.emit('query', {
                timestamp: new Date(),
                query: n.query,
                params: n.params,
                duration: Number(n.duration_ms),
                target: n.module_path,
              })
            : km(n)
            ? (this.loggerRustPanic = new he(
                this.getErrorMessageWithLink(
                  `${n.message}: ${n.reason} in ${n.file}:${n.line}:${n.column}`,
                ),
                this.config.clientVersion,
              ))
            : this.logEmitter.emit(n.level, {
                timestamp: new Date(),
                message: n.message,
                target: n.module_path,
              });
      }
    }
    getErrorMessageWithLink(r) {
      return cl({
        platform: this.platform,
        title: r,
        version: this.config.clientVersion,
        engineVersion: this.versionInfo?.commit,
        database: this.config.activeProvider,
        query: this.lastQuery,
      });
    }
    parseInitError(r) {
      try {
        return JSON.parse(r);
      } catch {}
      return r;
    }
    parseRequestError(r) {
      try {
        return JSON.parse(r);
      } catch {}
      return r;
    }
    on(r, n) {
      if (r === 'beforeExit')
        throw new Error(
          '"beforeExit" hook is not applicable to the library engine since Prisma 5.0.0, it is only relevant and implemented for the binary engine. Please add your event listener to the `process` object directly instead.',
        );
      this.logEmitter.on(r, n);
    }
    async start() {
      if (
        (await this.libraryInstantiationPromise,
        await this.libraryStoppingPromise,
        this.libraryStartingPromise)
      )
        return (
          $e(`library already starting, this.libraryStarted: ${this.libraryStarted}`),
          this.libraryStartingPromise
        );
      if (this.libraryStarted) return;
      let r = async () => {
        $e('library starting');
        try {
          let n = { traceparent: this.config.tracingHelper.getTraceParent() };
          await this.engine?.connect(JSON.stringify(n)),
            (this.libraryStarted = !0),
            $e('library started');
        } catch (n) {
          let i = this.parseInitError(n.message);
          throw typeof i == 'string'
            ? n
            : new k(i.message, this.config.clientVersion, i.error_code);
        } finally {
          this.libraryStartingPromise = void 0;
        }
      };
      return (
        (this.libraryStartingPromise = this.config.tracingHelper.runInChildSpan('connect', r)),
        this.libraryStartingPromise
      );
    }
    async stop() {
      if (
        (await this.libraryStartingPromise,
        await this.executingQueryPromise,
        this.libraryStoppingPromise)
      )
        return $e('library is already stopping'), this.libraryStoppingPromise;
      if (!this.libraryStarted) return;
      let r = async () => {
        await new Promise((i) => setTimeout(i, 5)), $e('library stopping');
        let n = { traceparent: this.config.tracingHelper.getTraceParent() };
        await this.engine?.disconnect(JSON.stringify(n)),
          (this.libraryStarted = !1),
          (this.libraryStoppingPromise = void 0),
          $e('library stopped');
      };
      return (
        (this.libraryStoppingPromise = this.config.tracingHelper.runInChildSpan('disconnect', r)),
        this.libraryStoppingPromise
      );
    }
    version() {
      return (this.versionInfo = this.library?.version()), this.versionInfo?.version ?? 'unknown';
    }
    debugPanic(r) {
      return this.library?.debugPanic(r);
    }
    async request(r, { traceparent: n, interactiveTransaction: i }) {
      $e(`sending request, this.libraryStarted: ${this.libraryStarted}`);
      let o = JSON.stringify({ traceparent: n }),
        s = JSON.stringify(r);
      try {
        await this.start(),
          (this.executingQueryPromise = this.engine?.query(s, o, i?.id)),
          (this.lastQuery = s);
        let a = this.parseEngineResponse(await this.executingQueryPromise);
        if (a.errors)
          throw a.errors.length === 1
            ? this.buildQueryError(a.errors[0])
            : new z(JSON.stringify(a.errors), { clientVersion: this.config.clientVersion });
        if (this.loggerRustPanic) throw this.loggerRustPanic;
        return { data: a, elapsed: 0 };
      } catch (a) {
        if (a instanceof k) throw a;
        if (a.code === 'GenericFailure' && a.message?.startsWith('PANIC:'))
          throw new he(this.getErrorMessageWithLink(a.message), this.config.clientVersion);
        let l = this.parseRequestError(a.message);
        throw typeof l == 'string'
          ? a
          : new z(
              `${l.message}
${l.backtrace}`,
              { clientVersion: this.config.clientVersion },
            );
      }
    }
    async requestBatch(r, { transaction: n, traceparent: i }) {
      $e('requestBatch');
      let o = $n(r, n);
      await this.start(),
        (this.lastQuery = JSON.stringify(o)),
        (this.executingQueryPromise = this.engine.query(
          this.lastQuery,
          JSON.stringify({ traceparent: i }),
          hl(n),
        ));
      let s = await this.executingQueryPromise,
        a = this.parseEngineResponse(s);
      if (a.errors)
        throw a.errors.length === 1
          ? this.buildQueryError(a.errors[0])
          : new z(JSON.stringify(a.errors), { clientVersion: this.config.clientVersion });
      let { batchResult: l, errors: u } = a;
      if (Array.isArray(l))
        return l.map((c) =>
          c.errors && c.errors.length > 0
            ? this.loggerRustPanic ?? this.buildQueryError(c.errors[0])
            : { data: c, elapsed: 0 },
        );
      throw u && u.length === 1 ? new Error(u[0].error) : new Error(JSON.stringify(a));
    }
    buildQueryError(r) {
      if (r.user_facing_error.is_panic)
        return new he(
          this.getErrorMessageWithLink(r.user_facing_error.message),
          this.config.clientVersion,
        );
      let n = this.getExternalAdapterError(r.user_facing_error);
      return n ? n.error : Pr(r, this.config.clientVersion);
    }
    getExternalAdapterError(r) {
      if (r.error_code === Mm && this.config.adapter) {
        let n = r.meta?.id;
        un(typeof n == 'number', 'Malformed external JS error received from the engine');
        let i = this.config.adapter.errorRegistry.consumeError(n);
        return un(i, 'External error with reported id was not registered'), i;
      }
    }
    async metrics(r) {
      await this.start();
      let n = await this.engine.metrics(JSON.stringify(r));
      return r.format === 'prometheus' ? n : this.parseEngineResponse(n);
    }
  };
function Im(e) {
  return typeof e == 'object' && e !== null && e.error_code !== void 0;
}
function Tl(e, t) {
  let r;
  try {
    r = qn({
      inlineDatasources: t.inlineDatasources,
      overrideDatasources: t.overrideDatasources,
      env: { ...t.env, ...process.env },
      clientVersion: t.clientVersion,
    });
  } catch {}
  e.noEngine !== !0 &&
    r?.startsWith('prisma://') &&
    ar(
      'recommend--no-engine',
      'In production, we recommend using `prisma generate --no-engine` (See: `prisma generate --help`)',
    );
  let n = mt(t.generator);
  if (n === 'wasm' && t.adapter !== void 0) return new Wt(t);
  if (r?.startsWith('prisma://') || e.noEngine) return new Nr(t);
  if (n === 'library') return new Wt(t);
  throw (
    ('binary',
    new se('Invalid client engine type, please use `library` or `binary`', {
      clientVersion: t.clientVersion,
    }))
  );
}
function Jn({ generator: e }) {
  return e?.previewFeatures ?? [];
}
var Sl = I(_o());
function Rl(e, t) {
  let r = Ml(e),
    n = Fm(r),
    i = Om(n);
  i ? Hn(i, t) : t.addErrorMessage(() => 'Unknown error');
}
function Ml(e) {
  return e.errors.flatMap((t) => (t.kind === 'Union' ? Ml(t) : [t]));
}
function Fm(e) {
  let t = new Map(),
    r = [];
  for (let n of e) {
    if (n.kind !== 'InvalidArgumentType') {
      r.push(n);
      continue;
    }
    let i = `${n.selectionPath.join('.')}:${n.argumentPath.join('.')}`,
      o = t.get(i);
    o
      ? t.set(i, {
          ...n,
          argument: { ...n.argument, typeNames: Dm(o.argument.typeNames, n.argument.typeNames) },
        })
      : t.set(i, n);
  }
  return r.push(...t.values()), r;
}
function Dm(e, t) {
  return [...new Set(e.concat(t))];
}
function Om(e) {
  return Ui(e, (t, r) => {
    let n = _l(t),
      i = _l(r);
    return n !== i ? n - i : Al(t) - Al(r);
  });
}
function _l(e) {
  let t = 0;
  return (
    Array.isArray(e.selectionPath) && (t += e.selectionPath.length),
    Array.isArray(e.argumentPath) && (t += e.argumentPath.length),
    t
  );
}
function Al(e) {
  switch (e.kind) {
    case 'InvalidArgumentValue':
    case 'ValueTooLarge':
      return 20;
    case 'InvalidArgumentType':
      return 10;
    case 'RequiredArgumentMissing':
      return -10;
    default:
      return 0;
  }
}
var Ke = class {
  constructor(t, r) {
    this.name = t;
    this.value = r;
    this.isRequired = !1;
  }
  makeRequired() {
    return (this.isRequired = !0), this;
  }
  write(t) {
    let {
      colors: { green: r },
    } = t.context;
    t.addMarginSymbol(r(this.isRequired ? '+' : '?')),
      t.write(r(this.name)),
      this.isRequired || t.write(r('?')),
      t.write(r(': ')),
      typeof this.value == 'string' ? t.write(r(this.value)) : t.write(this.value);
  }
};
var Wn = class {
  constructor() {
    this.fields = [];
  }
  addField(t, r) {
    return (
      this.fields.push({
        write(n) {
          let { green: i, dim: o } = n.context.colors;
          n.write(i(o(`${t}: ${r}`))).addMarginSymbol(i(o('+')));
        },
      }),
      this
    );
  }
  write(t) {
    let {
      colors: { green: r },
    } = t.context;
    t.writeLine(r('{'))
      .withIndent(() => {
        t.writeJoined(jt, this.fields).newLine();
      })
      .write(r('}'))
      .addMarginSymbol(r('+'));
  }
};
function Hn(e, t) {
  switch (e.kind) {
    case 'IncludeAndSelect':
      Nm(e, t);
      break;
    case 'IncludeOnScalar':
      Lm(e, t);
      break;
    case 'EmptySelection':
      $m(e, t);
      break;
    case 'UnknownSelectionField':
      qm(e, t);
      break;
    case 'UnknownArgument':
      jm(e, t);
      break;
    case 'UnknownInputField':
      Vm(e, t);
      break;
    case 'RequiredArgumentMissing':
      Bm(e, t);
      break;
    case 'InvalidArgumentType':
      Um(e, t);
      break;
    case 'InvalidArgumentValue':
      Km(e, t);
      break;
    case 'ValueTooLarge':
      Qm(e, t);
      break;
    case 'SomeFieldsMissing':
      Gm(e, t);
      break;
    case 'TooManyFieldsGiven':
      Jm(e, t);
      break;
    case 'Union':
      Rl(e, t);
      break;
    default:
      throw new Error('not implemented: ' + e.kind);
  }
}
function Nm(e, t) {
  let r = t.arguments.getDeepSubSelectionValue(e.selectionPath);
  r &&
    r instanceof Y &&
    (r.getField('include')?.markAsError(), r.getField('select')?.markAsError()),
    t.addErrorMessage(
      (n) =>
        `Please ${n.bold('either')} use ${n.green('`include`')} or ${n.green(
          '`select`',
        )}, but ${n.red('not both')} at the same time.`,
    );
}
function Lm(e, t) {
  let [r, n] = zn(e.selectionPath),
    i = e.outputType,
    o = t.arguments.getDeepSelectionParent(r)?.value;
  if (o && (o.getField(n)?.markAsError(), i))
    for (let s of i.fields) s.isRelation && o.addSuggestion(new Ke(s.name, 'true'));
  t.addErrorMessage((s) => {
    let a = `Invalid scalar field ${s.red(`\`${n}\``)} for ${s.bold('include')} statement`;
    return (
      i ? (a += ` on model ${s.bold(i.name)}. ${qr(s)}`) : (a += '.'),
      (a += `
Note that ${s.bold('include')} statements only accept relation fields.`),
      a
    );
  });
}
function $m(e, t) {
  let r = e.outputType,
    n = t.arguments.getDeepSelectionParent(e.selectionPath)?.value,
    i = n?.isEmpty() ?? !1;
  n && (n.removeAllFields(), Fl(n, r)),
    t.addErrorMessage((o) =>
      i
        ? `The ${o.red('`select`')} statement for type ${o.bold(r.name)} must not be empty. ${qr(
            o,
          )}`
        : `The ${o.red('`select`')} statement for type ${o.bold(r.name)} needs ${o.bold(
            'at least one truthy value',
          )}.`,
    );
}
function qm(e, t) {
  let [r, n] = zn(e.selectionPath),
    i = t.arguments.getDeepSelectionParent(r);
  i && (i.value.getField(n)?.markAsError(), Fl(i.value, e.outputType)),
    t.addErrorMessage((o) => {
      let s = [`Unknown field ${o.red(`\`${n}\``)}`];
      return (
        i && s.push(`for ${o.bold(i.kind)} statement`),
        s.push(`on model ${o.bold(`\`${e.outputType.name}\``)}.`),
        s.push(qr(o)),
        s.join(' ')
      );
    });
}
function jm(e, t) {
  let r = e.argumentPath[0],
    n = t.arguments.getDeepSubSelectionValue(e.selectionPath);
  n instanceof Y && (n.getField(r)?.markAsError(), Hm(n, e.arguments)),
    t.addErrorMessage((i) =>
      kl(
        i,
        r,
        e.arguments.map((o) => o.name),
      ),
    );
}
function Vm(e, t) {
  let [r, n] = zn(e.argumentPath),
    i = t.arguments.getDeepSubSelectionValue(e.selectionPath);
  if (i instanceof Y) {
    i.getDeepField(e.argumentPath)?.markAsError();
    let o = i.getDeepFieldValue(r);
    o instanceof Y && Dl(o, e.inputType);
  }
  t.addErrorMessage((o) =>
    kl(
      o,
      n,
      e.inputType.fields.map((s) => s.name),
    ),
  );
}
function kl(e, t, r) {
  let n = [`Unknown argument \`${e.red(t)}\`.`],
    i = zm(t, r);
  return i && n.push(`Did you mean \`${e.green(i)}\`?`), r.length > 0 && n.push(qr(e)), n.join(' ');
}
function Bm(e, t) {
  let r;
  t.addErrorMessage((l) =>
    r?.value instanceof Z && r.value.text === 'null'
      ? `Argument \`${l.green(o)}\` must not be ${l.red('null')}.`
      : `Argument \`${l.green(o)}\` is missing.`,
  );
  let n = t.arguments.getDeepSubSelectionValue(e.selectionPath);
  if (!(n instanceof Y)) return;
  let [i, o] = zn(e.argumentPath),
    s = new Wn(),
    a = n.getDeepFieldValue(i);
  if (a instanceof Y)
    if (
      ((r = a.getField(o)),
      r && a.removeField(o),
      e.inputTypes.length === 1 && e.inputTypes[0].kind === 'object')
    ) {
      for (let l of e.inputTypes[0].fields) s.addField(l.name, l.typeNames.join(' | '));
      a.addSuggestion(new Ke(o, s).makeRequired());
    } else {
      let l = e.inputTypes.map(Il).join(' | ');
      a.addSuggestion(new Ke(o, l).makeRequired());
    }
}
function Il(e) {
  return e.kind === 'list' ? `${Il(e.elementType)}[]` : e.name;
}
function Um(e, t) {
  let r = e.argument.name,
    n = t.arguments.getDeepSubSelectionValue(e.selectionPath);
  n instanceof Y && n.getDeepFieldValue(e.argumentPath)?.markAsError(),
    t.addErrorMessage((i) => {
      let o = Yn(
        'or',
        e.argument.typeNames.map((s) => i.green(s)),
      );
      return `Argument \`${i.bold(r)}\`: Invalid value provided. Expected ${o}, provided ${i.red(
        e.inferredType,
      )}.`;
    });
}
function Km(e, t) {
  let r = e.argument.name,
    n = t.arguments.getDeepSubSelectionValue(e.selectionPath);
  n instanceof Y && n.getDeepFieldValue(e.argumentPath)?.markAsError(),
    t.addErrorMessage((i) => {
      let o = [`Invalid value for argument \`${i.bold(r)}\``];
      if (
        (e.underlyingError && o.push(`: ${e.underlyingError}`),
        o.push('.'),
        e.argument.typeNames.length > 0)
      ) {
        let s = Yn(
          'or',
          e.argument.typeNames.map((a) => i.green(a)),
        );
        o.push(` Expected ${s}.`);
      }
      return o.join('');
    });
}
function Qm(e, t) {
  let r = e.argument.name,
    n = t.arguments.getDeepSubSelectionValue(e.selectionPath),
    i;
  if (n instanceof Y) {
    let s = n.getDeepField(e.argumentPath)?.value;
    s?.markAsError(), s instanceof Z && (i = s.text);
  }
  t.addErrorMessage((o) => {
    let s = ['Unable to fit value'];
    return (
      i && s.push(o.red(i)),
      s.push(`into a 64-bit signed integer for field \`${o.bold(r)}\``),
      s.join(' ')
    );
  });
}
function Gm(e, t) {
  let r = e.argumentPath[e.argumentPath.length - 1],
    n = t.arguments.getDeepSubSelectionValue(e.selectionPath);
  if (n instanceof Y) {
    let i = n.getDeepFieldValue(e.argumentPath);
    i instanceof Y && Dl(i, e.inputType);
  }
  t.addErrorMessage((i) => {
    let o = [`Argument \`${i.bold(r)}\` of type ${i.bold(e.inputType.name)} needs`];
    return (
      e.constraints.minFieldCount === 1
        ? e.constraints.requiredFields
          ? o.push(
              `${i.green('at least one of')} ${Yn(
                'or',
                e.constraints.requiredFields.map((s) => `\`${i.bold(s)}\``),
              )} arguments.`,
            )
          : o.push(`${i.green('at least one')} argument.`)
        : o.push(`${i.green(`at least ${e.constraints.minFieldCount}`)} arguments.`),
      o.push(qr(i)),
      o.join(' ')
    );
  });
}
function Jm(e, t) {
  let r = e.argumentPath[e.argumentPath.length - 1],
    n = t.arguments.getDeepSubSelectionValue(e.selectionPath),
    i = [];
  if (n instanceof Y) {
    let o = n.getDeepFieldValue(e.argumentPath);
    o instanceof Y && (o.markAsError(), (i = Object.keys(o.getFields())));
  }
  t.addErrorMessage((o) => {
    let s = [`Argument \`${o.bold(r)}\` of type ${o.bold(e.inputType.name)} needs`];
    return (
      e.constraints.minFieldCount === 1 && e.constraints.maxFieldCount == 1
        ? s.push(`${o.green('exactly one')} argument,`)
        : e.constraints.maxFieldCount == 1
        ? s.push(`${o.green('at most one')} argument,`)
        : s.push(`${o.green(`at most ${e.constraints.maxFieldCount}`)} arguments,`),
      s.push(
        `but you provided ${Yn(
          'and',
          i.map((a) => o.red(a)),
        )}. Please choose`,
      ),
      e.constraints.maxFieldCount === 1
        ? s.push('one.')
        : s.push(`${e.constraints.maxFieldCount}.`),
      s.join(' ')
    );
  });
}
function Fl(e, t) {
  for (let r of t.fields) e.hasField(r.name) || e.addSuggestion(new Ke(r.name, 'true'));
}
function Hm(e, t) {
  for (let r of t) e.hasField(r.name) || e.addSuggestion(new Ke(r.name, r.typeNames.join(' | ')));
}
function Dl(e, t) {
  if (t.kind === 'object')
    for (let r of t.fields)
      e.hasField(r.name) || e.addSuggestion(new Ke(r.name, r.typeNames.join(' | ')));
}
function zn(e) {
  let t = [...e],
    r = t.pop();
  if (!r) throw new Error('unexpected empty path');
  return [t, r];
}
function qr({ green: e, enabled: t }) {
  return 'Available options are ' + (t ? `listed in ${e('green')}` : 'marked with ?') + '.';
}
function Yn(e, t) {
  if (t.length === 1) return t[0];
  let r = [...t],
    n = r.pop();
  return `${r.join(', ')} ${e} ${n}`;
}
var Wm = 3;
function zm(e, t) {
  let r = 1 / 0,
    n;
  for (let i of t) {
    let o = (0, Sl.default)(e, i);
    o > Wm || (o < r && ((r = o), (n = i)));
  }
  return n;
}
function Zn({
  args: e,
  errors: t,
  errorFormat: r,
  callsite: n,
  originalMethod: i,
  clientVersion: o,
}) {
  let s = An(e);
  for (let p of t) Hn(p, s);
  let a = r === 'pretty' ? ma : Cn,
    l = s.renderAllMessages(a),
    u = new Dt(0, { colors: a }).write(s).toString(),
    c = Ut({
      message: l,
      callsite: n,
      originalMethod: i,
      showColors: r === 'pretty',
      callArguments: u,
    });
  throw new se(c, { clientVersion: o });
}
var Ym = {
  findUnique: 'findUnique',
  findUniqueOrThrow: 'findUniqueOrThrow',
  findFirst: 'findFirst',
  findFirstOrThrow: 'findFirstOrThrow',
  findMany: 'findMany',
  count: 'aggregate',
  create: 'createOne',
  createMany: 'createMany',
  update: 'updateOne',
  updateMany: 'updateMany',
  upsert: 'upsertOne',
  delete: 'deleteOne',
  deleteMany: 'deleteMany',
  executeRaw: 'executeRaw',
  queryRaw: 'queryRaw',
  aggregate: 'aggregate',
  groupBy: 'groupBy',
  runCommandRaw: 'runCommandRaw',
  findRaw: 'findRaw',
  aggregateRaw: 'aggregateRaw',
};
function Ol({
  modelName: e,
  action: t,
  args: r,
  runtimeDataModel: n,
  extensions: i,
  callsite: o,
  clientMethod: s,
  errorFormat: a,
  clientVersion: l,
}) {
  let u = new Ao({
    runtimeDataModel: n,
    modelName: e,
    action: t,
    rootArgs: r,
    callsite: o,
    extensions: i,
    selectionPath: [],
    argumentPath: [],
    originalMethod: s,
    errorFormat: a,
    clientVersion: l,
  });
  return { modelName: e, action: Ym[t], query: Ro(r, u) };
}
function Ro({ select: e, include: t, ...r } = {}, n) {
  return { arguments: Ll(r, n), selection: Zm(e, t, n) };
}
function Zm(e, t, r) {
  return (
    e &&
      t &&
      r.throwValidationError({ kind: 'IncludeAndSelect', selectionPath: r.getSelectionPath() }),
    e ? tf(e, r) : Xm(r, t)
  );
}
function Xm(e, t) {
  let r = {};
  return (
    e.model && !e.isRawAction() && ((r.$composites = !0), (r.$scalars = !0)), t && ef(r, t, e), r
  );
}
function ef(e, t, r) {
  for (let [n, i] of Object.entries(t)) {
    let o = r.findField(n);
    o &&
      o?.kind !== 'object' &&
      r.throwValidationError({
        kind: 'IncludeOnScalar',
        selectionPath: r.getSelectionPath().concat(n),
        outputType: r.getOutputTypeDescription(),
      }),
      i === !0 ? (e[n] = !0) : typeof i == 'object' && (e[n] = Ro(i, r.nestSelection(n)));
  }
}
function tf(e, t) {
  let r = {},
    n = t.getComputedFields(),
    i = Ha(e, n);
  for (let [o, s] of Object.entries(i)) {
    let a = t.findField(o);
    (n?.[o] && !a) ||
      (s === !0 ? (r[o] = !0) : typeof s == 'object' && (r[o] = Ro(s, t.nestSelection(o))));
  }
  return r;
}
function Nl(e, t) {
  if (e === null) return null;
  if (typeof e == 'string' || typeof e == 'number' || typeof e == 'boolean') return e;
  if (typeof e == 'bigint') return { $type: 'BigInt', value: String(e) };
  if (Ot(e)) {
    if (gn(e)) return { $type: 'DateTime', value: e.toISOString() };
    t.throwValidationError({
      kind: 'InvalidArgumentValue',
      selectionPath: t.getSelectionPath(),
      argumentPath: t.getArgumentPath(),
      argument: { name: t.getArgumentName(), typeNames: ['Date'] },
      underlyingError: 'Provided Date object is invalid',
    });
  }
  if (qt(e)) return { $type: 'FieldRef', value: { _ref: e.name, _container: e.modelName } };
  if (Array.isArray(e)) return rf(e, t);
  if (ArrayBuffer.isView(e)) return { $type: 'Bytes', value: Buffer.from(e).toString('base64') };
  if (nf(e)) return e.values;
  if ($t(e)) return { $type: 'Decimal', value: e.toFixed() };
  if (e instanceof ke) {
    if (e !== dn.instances[e._getName()]) throw new Error('Invalid ObjectEnumValue');
    return { $type: 'Enum', value: e._getName() };
  }
  if (of(e)) return e.toJSON();
  if (typeof e == 'object') return Ll(e, t);
  t.throwValidationError({
    kind: 'InvalidArgumentValue',
    selectionPath: t.getSelectionPath(),
    argumentPath: t.getArgumentPath(),
    argument: { name: t.getArgumentName(), typeNames: [] },
    underlyingError: `We could not serialize ${Object.prototype.toString.call(
      e,
    )} value. Serialize the object to JSON or implement a ".toJSON()" method on it`,
  });
}
function Ll(e, t) {
  if (e.$type) return { $type: 'Json', value: JSON.stringify(e) };
  let r = {};
  for (let n in e) {
    let i = e[n];
    i !== void 0 && (r[n] = Nl(i, t.nestArgument(n)));
  }
  return r;
}
function rf(e, t) {
  let r = [];
  for (let n = 0; n < e.length; n++) {
    let i = t.nestArgument(String(n)),
      o = e[n];
    o === void 0 &&
      t.throwValidationError({
        kind: 'InvalidArgumentValue',
        selectionPath: i.getSelectionPath(),
        argumentPath: i.getArgumentPath(),
        argument: { name: `${t.getArgumentName()}[${n}]`, typeNames: [] },
        underlyingError:
          'Can not use `undefined` value within array. Use `null` or filter out `undefined` values',
      }),
      r.push(Nl(o, i));
  }
  return r;
}
function nf(e) {
  return typeof e == 'object' && e !== null && e.__prismaRawParameters__ === !0;
}
function of(e) {
  return typeof e == 'object' && e !== null && typeof e.toJSON == 'function';
}
var Ao = class e {
  constructor(t) {
    this.params = t;
    this.params.modelName &&
      (this.model = this.params.runtimeDataModel.models[this.params.modelName]);
  }
  throwValidationError(t) {
    Zn({
      errors: [t],
      originalMethod: this.params.originalMethod,
      args: this.params.rootArgs ?? {},
      callsite: this.params.callsite,
      errorFormat: this.params.errorFormat,
      clientVersion: this.params.clientVersion,
    });
  }
  getSelectionPath() {
    return this.params.selectionPath;
  }
  getArgumentPath() {
    return this.params.argumentPath;
  }
  getArgumentName() {
    return this.params.argumentPath[this.params.argumentPath.length - 1];
  }
  getOutputTypeDescription() {
    if (!(!this.params.modelName || !this.model))
      return {
        name: this.params.modelName,
        fields: this.model.fields.map((t) => ({
          name: t.name,
          typeName: 'boolean',
          isRelation: t.kind === 'object',
        })),
      };
  }
  isRawAction() {
    return ['executeRaw', 'queryRaw', 'runCommandRaw', 'findRaw', 'aggregateRaw'].includes(
      this.params.action,
    );
  }
  getComputedFields() {
    if (this.params.modelName)
      return this.params.extensions.getAllComputedFields(this.params.modelName);
  }
  findField(t) {
    return this.model?.fields.find((r) => r.name === t);
  }
  nestSelection(t) {
    let r = this.findField(t),
      n = r?.kind === 'object' ? r.type : void 0;
    return new e({
      ...this.params,
      modelName: n,
      selectionPath: this.params.selectionPath.concat(t),
    });
  }
  nestArgument(t) {
    return new e({ ...this.params, argumentPath: this.params.argumentPath.concat(t) });
  }
};
var $l = (e) => ({ command: e });
var ql = (e) => e.strings.reduce((t, r, n) => `${t}@P${n}${r}`);
function jr(e) {
  try {
    return jl(e, 'fast');
  } catch {
    return jl(e, 'slow');
  }
}
function jl(e, t) {
  return JSON.stringify(e.map((r) => sf(r, t)));
}
function sf(e, t) {
  return typeof e == 'bigint'
    ? { prisma__type: 'bigint', prisma__value: e.toString() }
    : Ot(e)
    ? { prisma__type: 'date', prisma__value: e.toJSON() }
    : Oe.isDecimal(e)
    ? { prisma__type: 'decimal', prisma__value: e.toJSON() }
    : Buffer.isBuffer(e)
    ? { prisma__type: 'bytes', prisma__value: e.toString('base64') }
    : af(e) || ArrayBuffer.isView(e)
    ? { prisma__type: 'bytes', prisma__value: Buffer.from(e).toString('base64') }
    : typeof e == 'object' && t === 'slow'
    ? Bl(e)
    : e;
}
function af(e) {
  return e instanceof ArrayBuffer || e instanceof SharedArrayBuffer
    ? !0
    : typeof e == 'object' && e !== null
    ? e[Symbol.toStringTag] === 'ArrayBuffer' || e[Symbol.toStringTag] === 'SharedArrayBuffer'
    : !1;
}
function Bl(e) {
  if (typeof e != 'object' || e === null) return e;
  if (typeof e.toJSON == 'function') return e.toJSON();
  if (Array.isArray(e)) return e.map(Vl);
  let t = {};
  for (let r of Object.keys(e)) t[r] = Vl(e[r]);
  return t;
}
function Vl(e) {
  return typeof e == 'bigint' ? e.toString() : Bl(e);
}
var lf = /^(\s*alter\s)/i,
  Ul = L('prisma:client');
function Mo(e, t, r, n) {
  if (!(e !== 'postgresql' && e !== 'cockroachdb') && r.length > 0 && lf.exec(t))
    throw new Error(`Running ALTER using ${n} is not supported
Using the example below you can still execute your query with Prisma, but please note that it is vulnerable to SQL injection attacks and requires you to take care of input sanitization.

Example:
  await prisma.$executeRawUnsafe(\`ALTER USER prisma WITH PASSWORD '\${password}'\`)

More Information: https://pris.ly/d/execute-raw
`);
}
var So =
    ({ clientMethod: e, activeProvider: t, activeProviderFlavour: r }) =>
    (n) => {
      r !== void 0 && (t = r);
      let i = '',
        o;
      if (Array.isArray(n)) {
        let [s, ...a] = n;
        (i = s), (o = { values: jr(a || []), __prismaRawParameters__: !0 });
      } else
        switch (t) {
          case 'sqlite':
          case 'mysql': {
            (i = n.sql), (o = { values: jr(n.values), __prismaRawParameters__: !0 });
            break;
          }
          case 'cockroachdb':
          case 'postgresql':
          case 'postgres': {
            (i = n.text), (o = { values: jr(n.values), __prismaRawParameters__: !0 });
            break;
          }
          case 'sqlserver': {
            (i = ql(n)), (o = { values: jr(n.values), __prismaRawParameters__: !0 });
            break;
          }
          default:
            throw new Error(`The ${t} provider does not support ${e}`);
        }
      return (
        o?.values ? Ul(`prisma.${e}(${i}, ${o.values})`) : Ul(`prisma.${e}(${i})`),
        { query: i, parameters: o }
      );
    },
  Kl = {
    requestArgsToMiddlewareArgs(e) {
      return [e.strings, ...e.values];
    },
    middlewareArgsToRequestArgs(e) {
      let [t, ...r] = e;
      return new me(t, r);
    },
  },
  Ql = {
    requestArgsToMiddlewareArgs(e) {
      return [e];
    },
    middlewareArgsToRequestArgs(e) {
      return e[0];
    },
  };
function ko(e) {
  return function (r) {
    let n,
      i = (o = e) => {
        try {
          return o === void 0 || o?.kind === 'itx' ? n ?? (n = Gl(r(o))) : Gl(r(o));
        } catch (s) {
          return Promise.reject(s);
        }
      };
    return {
      then(o, s) {
        return i().then(o, s);
      },
      catch(o) {
        return i().catch(o);
      },
      finally(o) {
        return i().finally(o);
      },
      requestTransaction(o) {
        let s = i(o);
        return s.requestTransaction ? s.requestTransaction(o) : s;
      },
      [Symbol.toStringTag]: 'PrismaPromise',
    };
  };
}
function Gl(e) {
  return typeof e.then == 'function' ? e : Promise.resolve(e);
}
var Jl = {
    isEnabled() {
      return !1;
    },
    getTraceParent() {
      return '00-10-10-00';
    },
    async createEngineSpan() {},
    getActiveContext() {},
    runInChildSpan(e, t) {
      return t();
    },
  },
  Io = class {
    isEnabled() {
      return this.getGlobalTracingHelper().isEnabled();
    }
    getTraceParent(t) {
      return this.getGlobalTracingHelper().getTraceParent(t);
    }
    createEngineSpan(t) {
      return this.getGlobalTracingHelper().createEngineSpan(t);
    }
    getActiveContext() {
      return this.getGlobalTracingHelper().getActiveContext();
    }
    runInChildSpan(t, r) {
      return this.getGlobalTracingHelper().runInChildSpan(t, r);
    }
    getGlobalTracingHelper() {
      return globalThis.PRISMA_INSTRUMENTATION?.helper ?? Jl;
    }
  };
function Hl(e) {
  return e.includes('tracing') ? new Io() : Jl;
}
function Wl(e, t = () => {}) {
  let r,
    n = new Promise((i) => (r = i));
  return {
    then(i) {
      return --e === 0 && r(t()), i?.(n);
    },
  };
}
var uf = ['$connect', '$disconnect', '$on', '$transaction', '$use', '$extends'],
  Fo = uf;
function zl(e) {
  return typeof e == 'string'
    ? e
    : e.reduce(
        (t, r) => {
          let n = typeof r == 'string' ? r : r.level;
          return n === 'query' ? t : t && (r === 'info' || t === 'info') ? 'info' : n;
        },
        void 0,
      );
}
var Xn = class {
  constructor() {
    this._middlewares = [];
  }
  use(t) {
    this._middlewares.push(t);
  }
  get(t) {
    return this._middlewares[t];
  }
  has(t) {
    return !!this._middlewares[t];
  }
  length() {
    return this._middlewares.length;
  }
};
var Zl = I(ji());
function ei(e) {
  return typeof e.batchRequestIdx == 'number';
}
function ti(e) {
  return e === null
    ? e
    : Array.isArray(e)
    ? e.map(ti)
    : typeof e == 'object'
    ? cf(e)
      ? pf(e)
      : It(e, ti)
    : e;
}
function cf(e) {
  return e !== null && typeof e == 'object' && typeof e.$type == 'string';
}
function pf({ $type: e, value: t }) {
  switch (e) {
    case 'BigInt':
      return BigInt(t);
    case 'Bytes':
      return Buffer.from(t, 'base64');
    case 'DateTime':
      return new Date(t);
    case 'Decimal':
      return new Oe(t);
    case 'Json':
      return JSON.parse(t);
    default:
      ft(t, 'Unknown tagged value');
  }
}
function Yl(e) {
  if (e.action !== 'findUnique' && e.action !== 'findUniqueOrThrow') return;
  let t = [];
  return (
    e.modelName && t.push(e.modelName),
    e.query.arguments && t.push(Do(e.query.arguments)),
    t.push(Do(e.query.selection)),
    t.join('')
  );
}
function Do(e) {
  return `(${Object.keys(e)
    .sort()
    .map((r) => {
      let n = e[r];
      return typeof n == 'object' && n !== null ? `(${r} ${Do(n)})` : r;
    })
    .join(' ')})`;
}
var df = {
  aggregate: !1,
  aggregateRaw: !1,
  createMany: !0,
  createOne: !0,
  deleteMany: !0,
  deleteOne: !0,
  executeRaw: !0,
  findFirst: !1,
  findFirstOrThrow: !1,
  findMany: !1,
  findRaw: !1,
  findUnique: !1,
  findUniqueOrThrow: !1,
  groupBy: !1,
  queryRaw: !1,
  runCommandRaw: !0,
  updateMany: !0,
  updateOne: !0,
  upsertOne: !0,
};
function Oo(e) {
  return df[e];
}
var ri = class {
  constructor(t) {
    this.options = t;
    this.tickActive = !1;
    this.batches = {};
  }
  request(t) {
    let r = this.options.batchBy(t);
    return r
      ? (this.batches[r] ||
          ((this.batches[r] = []),
          this.tickActive ||
            ((this.tickActive = !0),
            process.nextTick(() => {
              this.dispatchBatches(), (this.tickActive = !1);
            }))),
        new Promise((n, i) => {
          this.batches[r].push({ request: t, resolve: n, reject: i });
        }))
      : this.options.singleLoader(t);
  }
  dispatchBatches() {
    for (let t in this.batches) {
      let r = this.batches[t];
      delete this.batches[t],
        r.length === 1
          ? this.options
              .singleLoader(r[0].request)
              .then((n) => {
                n instanceof Error ? r[0].reject(n) : r[0].resolve(n);
              })
              .catch((n) => {
                r[0].reject(n);
              })
          : (r.sort((n, i) => this.options.batchOrder(n.request, i.request)),
            this.options
              .batchLoader(r.map((n) => n.request))
              .then((n) => {
                if (n instanceof Error) for (let i = 0; i < r.length; i++) r[i].reject(n);
                else
                  for (let i = 0; i < r.length; i++) {
                    let o = n[i];
                    o instanceof Error ? r[i].reject(o) : r[i].resolve(o);
                  }
              })
              .catch((n) => {
                for (let i = 0; i < r.length; i++) r[i].reject(n);
              }));
    }
  }
  get [Symbol.toStringTag]() {
    return 'DataLoader';
  }
};
var mf = L('prisma:client:request_handler'),
  ni = class {
    constructor(t, r) {
      (this.logEmitter = r),
        (this.client = t),
        (this.dataloader = new ri({
          batchLoader: Ua(async ({ requests: n, customDataProxyFetch: i }) => {
            let { transaction: o, otelParentCtx: s } = n[0],
              a = n.map((p) => p.protocolQuery),
              l = this.client._tracingHelper.getTraceParent(s),
              u = n.some((p) => Oo(p.protocolQuery.action));
            return (
              await this.client._engine.requestBatch(a, {
                traceparent: l,
                transaction: ff(o),
                containsWrite: u,
                customDataProxyFetch: i,
              })
            ).map((p, d) => {
              if (p instanceof Error) return p;
              try {
                return this.mapQueryEngineResult(n[d], p);
              } catch (f) {
                return f;
              }
            });
          }),
          singleLoader: async (n) => {
            let i = n.transaction?.kind === 'itx' ? Xl(n.transaction) : void 0,
              o = await this.client._engine.request(n.protocolQuery, {
                traceparent: this.client._tracingHelper.getTraceParent(),
                interactiveTransaction: i,
                isWrite: Oo(n.protocolQuery.action),
                customDataProxyFetch: n.customDataProxyFetch,
              });
            return this.mapQueryEngineResult(n, o);
          },
          batchBy: (n) =>
            n.transaction?.id ? `transaction-${n.transaction.id}` : Yl(n.protocolQuery),
          batchOrder(n, i) {
            return n.transaction?.kind === 'batch' && i.transaction?.kind === 'batch'
              ? n.transaction.index - i.transaction.index
              : 0;
          },
        }));
    }
    async request(t) {
      try {
        return await this.dataloader.request(t);
      } catch (r) {
        let { clientMethod: n, callsite: i, transaction: o, args: s } = t;
        this.handleAndLogRequestError({
          error: r,
          clientMethod: n,
          callsite: i,
          transaction: o,
          args: s,
        });
      }
    }
    mapQueryEngineResult({ dataPath: t, unpacker: r }, n) {
      let i = n?.data,
        o = n?.elapsed,
        s = this.unpack(i, t, r);
      return process.env.PRISMA_CLIENT_GET_TIME ? { data: s, elapsed: o } : s;
    }
    handleAndLogRequestError(t) {
      try {
        this.handleRequestError(t);
      } catch (r) {
        throw (
          (this.logEmitter &&
            this.logEmitter.emit('error', {
              message: r.message,
              target: t.clientMethod,
              timestamp: new Date(),
            }),
          r)
        );
      }
    }
    handleRequestError({ error: t, clientMethod: r, callsite: n, transaction: i, args: o }) {
      if ((mf(t), gf(t, i) || t instanceof Ve)) throw t;
      if (t instanceof W && yf(t)) {
        let a = eu(t.meta);
        Zn({
          args: o,
          errors: [a],
          callsite: n,
          errorFormat: this.client._errorFormat,
          originalMethod: r,
          clientVersion: this.client._clientVersion,
        });
      }
      let s = t.message;
      throw (
        (n &&
          (s = Ut({
            callsite: n,
            originalMethod: r,
            isPanic: t.isPanic,
            showColors: this.client._errorFormat === 'pretty',
            message: s,
          })),
        (s = this.sanitizeMessage(s)),
        t.code
          ? new W(s, {
              code: t.code,
              clientVersion: this.client._clientVersion,
              meta: t.meta,
              batchRequestIdx: t.batchRequestIdx,
            })
          : t.isPanic
          ? new he(s, this.client._clientVersion)
          : t instanceof z
          ? new z(s, {
              clientVersion: this.client._clientVersion,
              batchRequestIdx: t.batchRequestIdx,
            })
          : t instanceof k
          ? new k(s, this.client._clientVersion)
          : t instanceof he
          ? new he(s, this.client._clientVersion)
          : ((t.clientVersion = this.client._clientVersion), t))
      );
    }
    sanitizeMessage(t) {
      return this.client._errorFormat && this.client._errorFormat !== 'pretty'
        ? (0, Zl.default)(t)
        : t;
    }
    unpack(t, r, n) {
      if (!t || (t.data && (t = t.data), !t)) return t;
      let i = Object.values(t)[0],
        o = r.filter((a) => a !== 'select' && a !== 'include'),
        s = ti(so(i, o));
      return n ? n(s) : s;
    }
    get [Symbol.toStringTag]() {
      return 'RequestHandler';
    }
  };
function ff(e) {
  if (e) {
    if (e.kind === 'batch') return { kind: 'batch', options: { isolationLevel: e.isolationLevel } };
    if (e.kind === 'itx') return { kind: 'itx', options: Xl(e) };
    ft(e, 'Unknown transaction kind');
  }
}
function Xl(e) {
  return { id: e.id, payload: e.payload };
}
function gf(e, t) {
  return ei(e) && t?.kind === 'batch' && e.batchRequestIdx !== t.index;
}
function yf(e) {
  return e.code === 'P2009' || e.code === 'P2012';
}
function eu(e) {
  if (e.kind === 'Union') return { kind: 'Union', errors: e.errors.map(eu) };
  if (Array.isArray(e.selectionPath)) {
    let [, ...t] = e.selectionPath;
    return { ...e, selectionPath: t };
  }
  return e;
}
var tu = '5.6.0';
var ru = tu;
function nu(e) {
  return e.map((t) => {
    let r = {};
    for (let n of Object.keys(t)) r[n] = iu(t[n]);
    return r;
  });
}
function iu({ prisma__type: e, prisma__value: t }) {
  switch (e) {
    case 'bigint':
      return BigInt(t);
    case 'bytes':
      return Buffer.from(t, 'base64');
    case 'decimal':
      return new Oe(t);
    case 'datetime':
    case 'date':
      return new Date(t);
    case 'time':
      return new Date(`1970-01-01T${t}Z`);
    case 'array':
      return t.map(iu);
    default:
      return t;
  }
}
var lu = I(_o());
var B = class extends Error {
  constructor(t) {
    super(
      t +
        `
Read more at https://pris.ly/d/client-constructor`,
    ),
      (this.name = 'PrismaClientConstructorValidationError');
  }
  get [Symbol.toStringTag]() {
    return 'PrismaClientConstructorValidationError';
  }
};
E(B, 'PrismaClientConstructorValidationError');
var ou = ['datasources', 'datasourceUrl', 'errorFormat', 'adapter', 'log', '__internal'],
  su = ['pretty', 'colorless', 'minimal'],
  au = ['info', 'query', 'warn', 'error'],
  xf = {
    datasources: (e, { datasourceNames: t }) => {
      if (e) {
        if (typeof e != 'object' || Array.isArray(e))
          throw new B(
            `Invalid value ${JSON.stringify(
              e,
            )} for "datasources" provided to PrismaClient constructor`,
          );
        for (let [r, n] of Object.entries(e)) {
          if (!t.includes(r)) {
            let i = zt(r, t) || ` Available datasources: ${t.join(', ')}`;
            throw new B(`Unknown datasource ${r} provided to PrismaClient constructor.${i}`);
          }
          if (typeof n != 'object' || Array.isArray(n))
            throw new B(`Invalid value ${JSON.stringify(
              e,
            )} for datasource "${r}" provided to PrismaClient constructor.
It should have this form: { url: "CONNECTION_STRING" }`);
          if (n && typeof n == 'object')
            for (let [i, o] of Object.entries(n)) {
              if (i !== 'url')
                throw new B(`Invalid value ${JSON.stringify(
                  e,
                )} for datasource "${r}" provided to PrismaClient constructor.
It should have this form: { url: "CONNECTION_STRING" }`);
              if (typeof o != 'string')
                throw new B(`Invalid value ${JSON.stringify(
                  o,
                )} for datasource "${r}" provided to PrismaClient constructor.
It should have this form: { url: "CONNECTION_STRING" }`);
            }
        }
      }
    },
    adapter: (e, t) => {
      if (e === null) return;
      if (e === void 0)
        throw new B(
          '"adapter" property must not be undefined, use null to conditionally disable driver adapters.',
        );
      if (!Jn(t).includes('driverAdapters'))
        throw new B(
          '"adapter" property can only be provided to PrismaClient constructor when "driverAdapters" preview feature is enabled.',
        );
      if (mt() === 'binary')
        throw new B(
          'Cannot use a driver adapter with the "binary" Query Engine. Please use the "library" Query Engine.',
        );
    },
    datasourceUrl: (e) => {
      if (typeof e < 'u' && typeof e != 'string')
        throw new B(`Invalid value ${JSON.stringify(
          e,
        )} for "datasourceUrl" provided to PrismaClient constructor.
Expected string or undefined.`);
    },
    errorFormat: (e) => {
      if (e) {
        if (typeof e != 'string')
          throw new B(
            `Invalid value ${JSON.stringify(
              e,
            )} for "errorFormat" provided to PrismaClient constructor.`,
          );
        if (!su.includes(e)) {
          let t = zt(e, su);
          throw new B(`Invalid errorFormat ${e} provided to PrismaClient constructor.${t}`);
        }
      }
    },
    log: (e) => {
      if (!e) return;
      if (!Array.isArray(e))
        throw new B(
          `Invalid value ${JSON.stringify(e)} for "log" provided to PrismaClient constructor.`,
        );
      function t(r) {
        if (typeof r == 'string' && !au.includes(r)) {
          let n = zt(r, au);
          throw new B(`Invalid log level "${r}" provided to PrismaClient constructor.${n}`);
        }
      }
      for (let r of e) {
        t(r);
        let n = {
          level: t,
          emit: (i) => {
            let o = ['stdout', 'event'];
            if (!o.includes(i)) {
              let s = zt(i, o);
              throw new B(
                `Invalid value ${JSON.stringify(
                  i,
                )} for "emit" in logLevel provided to PrismaClient constructor.${s}`,
              );
            }
          },
        };
        if (r && typeof r == 'object')
          for (let [i, o] of Object.entries(r))
            if (n[i]) n[i](o);
            else
              throw new B(`Invalid property ${i} for "log" provided to PrismaClient constructor`);
      }
    },
    __internal: (e) => {
      if (!e) return;
      let t = ['debug', 'hooks', 'engine', 'measurePerformance'];
      if (typeof e != 'object')
        throw new B(
          `Invalid value ${JSON.stringify(e)} for "__internal" to PrismaClient constructor`,
        );
      for (let [r] of Object.entries(e))
        if (!t.includes(r)) {
          let n = zt(r, t);
          throw new B(
            `Invalid property ${JSON.stringify(
              r,
            )} for "__internal" provided to PrismaClient constructor.${n}`,
          );
        }
    },
  };
function uu(e, t) {
  for (let [r, n] of Object.entries(e)) {
    if (!ou.includes(r)) {
      let i = zt(r, ou);
      throw new B(`Unknown property ${r} provided to PrismaClient constructor.${i}`);
    }
    xf[r](n, t);
  }
  if (e.datasourceUrl && e.datasources)
    throw new B(
      'Can not use "datasourceUrl" and "datasources" options at the same time. Pick one of them',
    );
}
function zt(e, t) {
  if (t.length === 0 || typeof e != 'string') return '';
  let r = bf(e, t);
  return r ? ` Did you mean "${r}"?` : '';
}
function bf(e, t) {
  if (t.length === 0) return null;
  let r = t.map((i) => ({ value: i, distance: (0, lu.default)(e, i) }));
  r.sort((i, o) => (i.distance < o.distance ? -1 : 1));
  let n = r[0];
  return n.distance < 3 ? n.value : null;
}
function cu(e) {
  return e.length === 0
    ? Promise.resolve([])
    : new Promise((t, r) => {
        let n = new Array(e.length),
          i = null,
          o = !1,
          s = 0,
          a = () => {
            o || (s++, s === e.length && ((o = !0), i ? r(i) : t(n)));
          },
          l = (u) => {
            o || ((o = !0), r(u));
          };
        for (let u = 0; u < e.length; u++)
          e[u].then(
            (c) => {
              (n[u] = c), a();
            },
            (c) => {
              if (!ei(c)) {
                l(c);
                return;
              }
              c.batchRequestIdx === u ? l(c) : (i || (i = c), a());
            },
          );
      });
}
var at = L('prisma:client');
typeof globalThis == 'object' && (globalThis.NODE_CLIENT = !0);
var wf = { requestArgsToMiddlewareArgs: (e) => e, middlewareArgsToRequestArgs: (e) => e },
  Ef = Symbol.for('prisma.client.transaction.id'),
  Pf = {
    id: 0,
    nextId() {
      return ++this.id;
    },
  };
function gu(e) {
  class t {
    constructor(n) {
      this._middlewares = new Xn();
      this._createPrismaPromise = ko();
      this.$extends = Oa;
      Ya(e), n && uu(n, e);
      let i = n?.adapter ? Hi(n.adapter) : void 0,
        o = new mu.EventEmitter().on('error', () => {});
      (this._extensions = Dn.empty()),
        (this._previewFeatures = Jn(e)),
        (this._clientVersion = e.clientVersion ?? ru),
        (this._activeProvider = e.activeProvider),
        (this._tracingHelper = Hl(this._previewFeatures));
      let s = {
          rootEnvPath:
            e.relativeEnvPaths.rootEnvPath &&
            Vr.default.resolve(e.dirname, e.relativeEnvPaths.rootEnvPath),
          schemaEnvPath:
            e.relativeEnvPaths.schemaEnvPath &&
            Vr.default.resolve(e.dirname, e.relativeEnvPaths.schemaEnvPath),
        },
        a = (!i && nr(s, { conflictCheck: 'none' })) || e.injectableEdgeEnv?.();
      try {
        let l = n ?? {},
          u = l.__internal ?? {},
          c = u.debug === !0;
        c && L.enable('prisma:client');
        let p = Vr.default.resolve(e.dirname, e.relativePath);
        fu.default.existsSync(p) || (p = e.dirname),
          at('dirname', e.dirname),
          at('relativePath', e.relativePath),
          at('cwd', p);
        let d = u.engine || {};
        if (
          (l.errorFormat
            ? (this._errorFormat = l.errorFormat)
            : process.env.NODE_ENV === 'production'
            ? (this._errorFormat = 'minimal')
            : process.env.NO_COLOR
            ? (this._errorFormat = 'colorless')
            : (this._errorFormat = 'colorless'),
          (this._runtimeDataModel = e.runtimeDataModel),
          (this._engineConfig = {
            cwd: p,
            dirname: e.dirname,
            enableDebugLogs: c,
            allowTriggerPanic: d.allowTriggerPanic,
            datamodelPath: Vr.default.join(e.dirname, e.filename ?? 'schema.prisma'),
            prismaPath: d.binaryPath ?? void 0,
            engineEndpoint: d.endpoint,
            generator: e.generator,
            showColors: this._errorFormat === 'pretty',
            logLevel: l.log && zl(l.log),
            logQueries:
              l.log &&
              !!(typeof l.log == 'string'
                ? l.log === 'query'
                : l.log.find((f) => (typeof f == 'string' ? f === 'query' : f.level === 'query'))),
            env: a?.parsed ?? {},
            flags: [],
            getQueryEngineWasmModule: e.getQueryEngineWasmModule,
            clientVersion: e.clientVersion,
            engineVersion: e.engineVersion,
            previewFeatures: this._previewFeatures,
            activeProvider: e.activeProvider,
            inlineSchema: e.inlineSchema,
            overrideDatasources: Za(l, e.datasourceNames),
            inlineDatasources: e.inlineDatasources,
            inlineSchemaHash: e.inlineSchemaHash,
            tracingHelper: this._tracingHelper,
            logEmitter: o,
            isBundled: e.isBundled,
            adapter: i,
          }),
          at('clientVersion', e.clientVersion),
          (this._engine = Tl(e, this._engineConfig)),
          (this._requestHandler = new ni(this, o)),
          l.log)
        )
          for (let f of l.log) {
            let y = typeof f == 'string' ? f : f.emit === 'stdout' ? f.level : null;
            y &&
              this.$on(y, (g) => {
                sr.log(`${sr.tags[y] ?? ''}`, g.message || g.query);
              });
          }
        this._metrics = new Ft(this._engine);
      } catch (l) {
        throw ((l.clientVersion = this._clientVersion), l);
      }
      return (this._appliedParent = wr(this));
    }
    get [Symbol.toStringTag]() {
      return 'PrismaClient';
    }
    $use(n) {
      this._middlewares.use(n);
    }
    $on(n, i) {
      n === 'beforeExit'
        ? this._engine.on('beforeExit', i)
        : this._engine.on(n, (o) => {
            let s = o.fields;
            return i(
              n === 'query'
                ? {
                    timestamp: o.timestamp,
                    query: s?.query ?? o.query,
                    params: s?.params ?? o.params,
                    duration: s?.duration_ms ?? o.duration,
                    target: o.target,
                  }
                : { timestamp: o.timestamp, message: s?.message ?? o.message, target: o.target },
            );
          });
    }
    $connect() {
      try {
        return this._engine.start();
      } catch (n) {
        throw ((n.clientVersion = this._clientVersion), n);
      }
    }
    async $disconnect() {
      try {
        await this._engine.stop();
      } catch (n) {
        throw ((n.clientVersion = this._clientVersion), n);
      } finally {
        rs();
      }
    }
    $executeRawInternal(n, i, o, s) {
      let a = this._activeProvider,
        l = this._engineConfig.adapter?.flavour;
      return this._request({
        action: 'executeRaw',
        args: o,
        transaction: n,
        clientMethod: i,
        argsMapper: So({ clientMethod: i, activeProvider: a, activeProviderFlavour: l }),
        callsite: it(this._errorFormat),
        dataPath: [],
        middlewareArgsMapper: s,
      });
    }
    $executeRaw(n, ...i) {
      return this._createPrismaPromise((o) => {
        if (n.raw !== void 0 || n.sql !== void 0) {
          let [s, a] = pu(n, i);
          return (
            Mo(
              this._activeProvider,
              s.text,
              s.values,
              Array.isArray(n) ? 'prisma.$executeRaw`<SQL>`' : 'prisma.$executeRaw(sql`<SQL>`)',
            ),
            this.$executeRawInternal(o, '$executeRaw', s, a)
          );
        }
        throw new se(
          "`$executeRaw` is a tag function, please use it like the following:\n```\nconst result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`\n```\n\nOr read our docs at https://www.prisma.io/docs/concepts/components/prisma-client/raw-database-access#executeraw\n",
          { clientVersion: this._clientVersion },
        );
      });
    }
    $executeRawUnsafe(n, ...i) {
      return this._createPrismaPromise(
        (o) => (
          Mo(this._activeProvider, n, i, 'prisma.$executeRawUnsafe(<SQL>, [...values])'),
          this.$executeRawInternal(o, '$executeRawUnsafe', [n, ...i])
        ),
      );
    }
    $runCommandRaw(n) {
      if (e.activeProvider !== 'mongodb')
        throw new se(
          `The ${e.activeProvider} provider does not support $runCommandRaw. Use the mongodb provider.`,
          { clientVersion: this._clientVersion },
        );
      return this._createPrismaPromise((i) =>
        this._request({
          args: n,
          clientMethod: '$runCommandRaw',
          dataPath: [],
          action: 'runCommandRaw',
          argsMapper: $l,
          callsite: it(this._errorFormat),
          transaction: i,
        }),
      );
    }
    async $queryRawInternal(n, i, o, s) {
      let a = this._activeProvider,
        l = this._engineConfig.adapter?.flavour;
      return this._request({
        action: 'queryRaw',
        args: o,
        transaction: n,
        clientMethod: i,
        argsMapper: So({ clientMethod: i, activeProvider: a, activeProviderFlavour: l }),
        callsite: it(this._errorFormat),
        dataPath: [],
        middlewareArgsMapper: s,
      }).then(nu);
    }
    $queryRaw(n, ...i) {
      return this._createPrismaPromise((o) => {
        if (n.raw !== void 0 || n.sql !== void 0)
          return this.$queryRawInternal(o, '$queryRaw', ...pu(n, i));
        throw new se(
          "`$queryRaw` is a tag function, please use it like the following:\n```\nconst result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`\n```\n\nOr read our docs at https://www.prisma.io/docs/concepts/components/prisma-client/raw-database-access#queryraw\n",
          { clientVersion: this._clientVersion },
        );
      });
    }
    $queryRawUnsafe(n, ...i) {
      return this._createPrismaPromise((o) =>
        this.$queryRawInternal(o, '$queryRawUnsafe', [n, ...i]),
      );
    }
    _transactionWithArray({ promises: n, options: i }) {
      let o = Pf.nextId(),
        s = Wl(n.length),
        a = n.map((l, u) => {
          if (l?.[Symbol.toStringTag] !== 'PrismaPromise')
            throw new Error(
              'All elements of the array need to be Prisma Client promises. Hint: Please make sure you are not awaiting the Prisma client calls you intended to pass in the $transaction function.',
            );
          let c = i?.isolationLevel,
            p = { kind: 'batch', id: o, index: u, isolationLevel: c, lock: s };
          return l.requestTransaction?.(p) ?? l;
        });
      return cu(a);
    }
    async _transactionWithCallback({ callback: n, options: i }) {
      let o = { traceparent: this._tracingHelper.getTraceParent() },
        s = await this._engine.transaction('start', o, i),
        a;
      try {
        let l = { kind: 'itx', ...s };
        (a = await n(this._createItxClient(l))), await this._engine.transaction('commit', o, s);
      } catch (l) {
        throw (await this._engine.transaction('rollback', o, s).catch(() => {}), l);
      }
      return a;
    }
    _createItxClient(n) {
      return wr(
        Fe(kn(this), [
          ue('_appliedParent', () => this._appliedParent._createItxClient(n)),
          ue('_createPrismaPromise', () => ko(n)),
          ue(Ef, () => n.id),
          yr(Fo),
        ]),
      );
    }
    $transaction(n, i) {
      let o;
      typeof n == 'function'
        ? (o = () => this._transactionWithCallback({ callback: n, options: i }))
        : (o = () => this._transactionWithArray({ promises: n, options: i }));
      let s = { name: 'transaction', attributes: { method: '$transaction' } };
      return this._tracingHelper.runInChildSpan(s, o);
    }
    _request(n) {
      n.otelParentCtx = this._tracingHelper.getActiveContext();
      let i = n.middlewareArgsMapper ?? wf,
        o = {
          args: i.requestArgsToMiddlewareArgs(n.args),
          dataPath: n.dataPath,
          runInTransaction: !!n.transaction,
          action: n.action,
          model: n.model,
        },
        s = {
          middleware: {
            name: 'middleware',
            middleware: !0,
            attributes: { method: '$use' },
            active: !1,
          },
          operation: {
            name: 'operation',
            attributes: {
              method: o.action,
              model: o.model,
              name: o.model ? `${o.model}.${o.action}` : o.action,
            },
          },
        },
        a = -1,
        l = async (u) => {
          let c = this._middlewares.get(++a);
          if (c)
            return this._tracingHelper.runInChildSpan(s.middleware, (v) =>
              c(u, (C) => (v?.end(), l(C))),
            );
          let { runInTransaction: p, args: d, ...f } = u,
            y = { ...n, ...f };
          d && (y.args = i.middlewareArgsToRequestArgs(d)),
            n.transaction !== void 0 && p === !1 && delete y.transaction;
          let g = await Ba(this, y);
          return y.model
            ? $a({
                result: g,
                modelName: y.model,
                args: y.args,
                extensions: this._extensions,
                runtimeDataModel: this._runtimeDataModel,
              })
            : g;
        };
      return this._tracingHelper.runInChildSpan(s.operation, () =>
        new du.AsyncResource('prisma-client-request').runInAsyncScope(() => l(o)),
      );
    }
    async _executeRequest({
      args: n,
      clientMethod: i,
      dataPath: o,
      callsite: s,
      action: a,
      model: l,
      argsMapper: u,
      transaction: c,
      unpacker: p,
      otelParentCtx: d,
      customDataProxyFetch: f,
    }) {
      try {
        n = u ? u(n) : n;
        let y = { name: 'serialize' },
          g = this._tracingHelper.runInChildSpan(y, () =>
            Ol({
              modelName: l,
              runtimeDataModel: this._runtimeDataModel,
              action: a,
              args: n,
              clientMethod: i,
              callsite: s,
              extensions: this._extensions,
              errorFormat: this._errorFormat,
              clientVersion: this._clientVersion,
            }),
          );
        return (
          L.enabled('prisma:client') &&
            (at('Prisma Client call:'),
            at(`prisma.${i}(${ha(n)})`),
            at('Generated request:'),
            at(
              JSON.stringify(g, null, 2) +
                `
`,
            )),
          c?.kind === 'batch' && (await c.lock),
          this._requestHandler.request({
            protocolQuery: g,
            modelName: l,
            action: a,
            clientMethod: i,
            dataPath: o,
            callsite: s,
            args: n,
            extensions: this._extensions,
            transaction: c,
            unpacker: p,
            otelParentCtx: d,
            otelChildCtx: this._tracingHelper.getActiveContext(),
            customDataProxyFetch: f,
          })
        );
      } catch (y) {
        throw ((y.clientVersion = this._clientVersion), y);
      }
    }
    get $metrics() {
      if (!this._hasPreviewFlag('metrics'))
        throw new se('`metrics` preview feature must be enabled in order to access metrics API', {
          clientVersion: this._clientVersion,
        });
      return this._metrics;
    }
    _hasPreviewFlag(n) {
      return !!this._engineConfig.previewFeatures?.includes(n);
    }
  }
  return t;
}
function pu(e, t) {
  return vf(e) ? [new me(e, t), Kl] : [e, Ql];
}
function vf(e) {
  return Array.isArray(e) && Array.isArray(e.raw);
}
var Tf = new Set([
  'toJSON',
  '$$typeof',
  'asymmetricMatch',
  Symbol.iterator,
  Symbol.toStringTag,
  Symbol.isConcatSpreadable,
  Symbol.toPrimitive,
]);
function yu(e) {
  return new Proxy(e, {
    get(t, r) {
      if (r in t) return t[r];
      if (!Tf.has(r)) throw new TypeError(`Invalid enum value: ${String(r)}`);
    },
  });
}
function hu(e) {
  nr(e, { conflictCheck: 'warn' });
}
0 &&
  (module.exports = {
    DMMF,
    DMMFClass,
    Debug,
    Decimal,
    Extensions,
    MetricsClient,
    NotFoundError,
    ObjectEnumValue,
    PrismaClientInitializationError,
    PrismaClientKnownRequestError,
    PrismaClientRustPanicError,
    PrismaClientUnknownRequestError,
    PrismaClientValidationError,
    Public,
    Sql,
    Types,
    defineDmmfProperty,
    empty,
    getPrismaClient,
    itxClientDenyList,
    join,
    makeStrictEnum,
    objectEnumNames,
    objectEnumValues,
    raw,
    sqltag,
    warnEnvConflicts,
    warnOnce,
  });
/*! Bundled license information:

decimal.js/decimal.mjs:
  (*!
   *  decimal.js v10.4.3
   *  An arbitrary-precision Decimal type for JavaScript.
   *  https://github.com/MikeMcl/decimal.js
   *  Copyright (c) 2022 Michael Mclaughlin <M8ch88l@gmail.com>
   *  MIT Licence
   *)
*/
//# sourceMappingURL=library.js.map