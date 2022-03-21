import {
    d as T,
    u as W,
    c as y,
    i as _,
    s as k,
    a as R,
    t as f,
    l as $,
    v as I,
    n as A,
    b as d,
    S,
    e as B,
    r as D,
    R as H,
    h as M,
} from './vendor.68a93192.js';
const U = function () {
    const i = document.createElement('link').relList;
    if (i && i.supports && i.supports('modulepreload')) return;
    for (const t of document.querySelectorAll('link[rel="modulepreload"]'))
        n(t);
    new MutationObserver((t) => {
        for (const o of t)
            if (o.type === 'childList')
                for (const e of o.addedNodes)
                    e.tagName === 'LINK' && e.rel === 'modulepreload' && n(e);
    }).observe(document, { childList: !0, subtree: !0 });
    function l(t) {
        const o = {};
        return (
            t.integrity && (o.integrity = t.integrity),
            t.referrerpolicy && (o.referrerPolicy = t.referrerpolicy),
            t.crossorigin === 'use-credentials'
                ? (o.credentials = 'include')
                : t.crossorigin === 'anonymous'
                ? (o.credentials = 'omit')
                : (o.credentials = 'same-origin'),
            o
        );
    }
    function n(t) {
        if (t.ep) return;
        t.ep = !0;
        const o = l(t);
        fetch(t.href, o);
    }
};
U();
const V = 'modulepreload',
    x = {},
    q = '/social/',
    b = function (i, l) {
        return !l || l.length === 0
            ? i()
            : Promise.all(
                  l.map((n) => {
                      if (((n = `${q}${n}`), n in x)) return;
                      x[n] = !0;
                      const t = n.endsWith('.css'),
                          o = t ? '[rel="stylesheet"]' : '';
                      if (document.querySelector(`link[href="${n}"]${o}`))
                          return;
                      const e = document.createElement('link');
                      if (
                          ((e.rel = t ? 'stylesheet' : V),
                          t || ((e.as = 'script'), (e.crossOrigin = '')),
                          (e.href = n),
                          document.head.appendChild(e),
                          t)
                      )
                          return new Promise((r, c) => {
                              e.addEventListener('load', r),
                                  e.addEventListener('error', () =>
                                      c(
                                          new Error(
                                              `Unable to preload CSS for ${n}`,
                                          ),
                                      ),
                                  );
                          });
                  }),
              ).then(() => i());
    },
    j = '_Home_usvqu_1';
var G = { Home: j };
const L = String('/social/'),
    K = f(
        `<div><p><button type="button">count is: </button></p><br><form><input type="text" aria-label="What's your name?" placeholder="What's your name?"><button type="submit">GO</button></form><br><a>About</a><br><br><a>abc</a><br></div>`,
    );
function z() {
    const u = W(),
        [i, l] = y(0),
        [n, t] = y(''),
        o = (r) => {
            t(r.target.value || '');
        },
        e = (r) => {
            r.preventDefault();
            const c = n();
            c && c.trim().length > 0 && u(`/hi/${c}`);
        };
    return (() => {
        const r = K.cloneNode(!0),
            c = r.firstChild,
            s = c.firstChild;
        s.firstChild;
        const a = c.nextSibling,
            m = a.nextSibling,
            v = m.firstChild,
            p = m.nextSibling,
            E = p.nextSibling,
            C = E.nextSibling,
            O = C.nextSibling,
            P = O.nextSibling;
        return (
            (s.$$click = () => l(i() + 1)),
            _(s, i, null),
            m.addEventListener('submit', e),
            v.addEventListener('change', o),
            k(E, 'href', `${L}/about`),
            k(P, 'href', `${L}/test/abc`),
            R(
                (g) => {
                    const N = G.Home,
                        w = n();
                    return (
                        N !== g._v$ && (r.className = g._v$ = N),
                        w !== g._v$2 && (v.value = g._v$2 = w),
                        g
                    );
                },
                { _v$: void 0, _v$2: void 0 },
            ),
            r
        );
    })();
}
T(['click']);
const F = (u) => {
        const i = u.params.name || '';
        return { name: decodeURI(i) };
    },
    J = [
        { path: '/', component: z },
        {
            path: '/about',
            component: $(() =>
                b(
                    () => import('./about.3d1d4908.js'),
                    ['assets/about.3d1d4908.js', 'assets/vendor.68a93192.js'],
                ),
            ),
        },
        {
            path: '/hi/:name',
            component: $(() =>
                b(
                    () => import('./_name_.86ed49ca.js'),
                    ['assets/_name_.86ed49ca.js', 'assets/vendor.68a93192.js'],
                ),
            ),
            data: F,
        },
        {
            path: '/test/:id',
            component: $(() =>
                b(
                    () => import('./abc.80256bc9.js'),
                    ['assets/abc.80256bc9.js', 'assets/vendor.68a93192.js'],
                ),
            ),
        },
        {
            path: '**',
            component: $(() =>
                b(
                    () => import('./404.8a8df44a.js'),
                    ['assets/404.8a8df44a.js', 'assets/vendor.68a93192.js'],
                ),
            ),
        },
    ];
function Q(u = {}) {
    const {
        immediate: i = !1,
        onNeedRefresh: l,
        onOfflineReady: n,
        onRegistered: t,
        onRegisterError: o,
    } = u;
    let e, r;
    const c = async (s = !0) => {
        s &&
            (e == null ||
                e.addEventListener('controlling', (a) => {
                    a.isUpdate && window.location.reload();
                })),
            r && r.waiting && (await A(r.waiting, { type: 'SKIP_WAITING' }));
    };
    if ('serviceWorker' in navigator) {
        (e = new I('/social/prompt-sw.js', {
            scope: '/social/',
            type: 'classic',
        })),
            e.addEventListener('activated', (s) => {
                s.isUpdate || n == null || n();
            });
        {
            const s = () => {
                l == null || l();
            };
            e.addEventListener('waiting', s),
                e.addEventListener('externalwaiting', s);
        }
        e.register({ immediate: i })
            .then((s) => {
                (r = s), t == null || t(s);
            })
            .catch((s) => {
                o == null || o(s);
            });
    }
    return c;
}
function X(u = {}) {
    const {
            immediate: i = !0,
            onNeedRefresh: l,
            onOfflineReady: n,
            onRegistered: t,
            onRegisterError: o,
        } = u,
        [e, r] = y(!1),
        [c, s] = y(!1),
        a = Q({
            immediate: i,
            onOfflineReady() {
                s(!0), n == null || n();
            },
            onNeedRefresh() {
                r(!0), l == null || l();
            },
            onRegistered: t,
            onRegisterError: o,
        });
    return {
        needRefresh: [e, r],
        offlineReady: [c, s],
        updateServiceWorker: a,
    };
}
const Y = '_Container_1xfhp_1',
    Z = '_Toast_1xfhp_7',
    ee = '_ToastMessage_1xfhp_20',
    te = '_ToastButton_1xfhp_23';
var h = { Container: Y, Toast: Z, ToastMessage: ee, ToastButton: te };
const ne = f('<span>App ready to work offline</span>'),
    oe = f('<button>Reload</button>'),
    re = f('<div><div></div><button>Close</button></div>'),
    se = f('<div></div>'),
    ie = f(
        '<span>New content available, click on reload button to update.</span>',
    ),
    ae = () => {
        const {
                needRefresh: [u, i],
                offlineReady: [l, n],
                updateServiceWorker: t,
            } = X({
                immediate: !0,
                onRegistered(e) {
                    console.log(`SW Registered: ${e}`);
                },
                onRegisterError(e) {
                    console.error('SW registration error', e);
                },
            }),
            o = () => {
                n(!1), i(!1);
            };
        return (() => {
            const e = se.cloneNode(!0);
            return (
                _(
                    e,
                    d(S, {
                        get when() {
                            return l() || u();
                        },
                        get children() {
                            const r = re.cloneNode(!0),
                                c = r.firstChild,
                                s = c.nextSibling;
                            return (
                                _(
                                    c,
                                    d(S, {
                                        get fallback() {
                                            return ie.cloneNode(!0);
                                        },
                                        get when() {
                                            return l();
                                        },
                                        get children() {
                                            return ne.cloneNode(!0);
                                        },
                                    }),
                                ),
                                _(
                                    r,
                                    d(S, {
                                        get when() {
                                            return u();
                                        },
                                        get children() {
                                            const a = oe.cloneNode(!0);
                                            return (
                                                (a.$$click = () => t(!0)),
                                                R(
                                                    () =>
                                                        (a.className =
                                                            h.ToastButton),
                                                ),
                                                a
                                            );
                                        },
                                    }),
                                    s,
                                ),
                                (s.$$click = () => o()),
                                R(
                                    (a) => {
                                        const m = h.Toast,
                                            v = h.Message,
                                            p = h.ToastButton;
                                        return (
                                            m !== a._v$ &&
                                                (r.className = a._v$ = m),
                                            v !== a._v$2 &&
                                                (c.className = a._v$2 = v),
                                            p !== a._v$3 &&
                                                (s.className = a._v$3 = p),
                                            a
                                        );
                                    },
                                    { _v$: void 0, _v$2: void 0, _v$3: void 0 },
                                ),
                                r
                            );
                        },
                    }),
                ),
                R(() => (e.className = h.Container)),
                e
            );
        })();
    };
T(['click']);
const le = f(
        '<main class="flex items-center justify-center bg-gradient-to-l from-sky-400 to-indigo-600 min-h-screen"></main>',
    ),
    ce = () => {
        const u = B(J);
        return (() => {
            const i = le.cloneNode(!0);
            return _(i, d(u, {}), null), _(i, d(ae, {}), null), i;
        })();
    };
D(
    () =>
        d(H, {
            get source() {
                return M();
            },
            get base() {
                return String('/social/');
            },
            get children() {
                return d(ce, {});
            },
        }),
    document.getElementById('app'),
);
export { L as p };
//# sourceMappingURL=index.91670525.js.map
