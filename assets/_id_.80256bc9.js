import { f as s, i as a, b as n, L as i, t as l } from './vendor.68a93192.js';
import { p } from './index.91670525.js';
const r = l(
    '<div class="p-4 rounded-lg bg-indigo-900 bg-opacity-25 flex flex-col space-y-4"><span class="text-2xl text-white font-sans">Welcome to <span class="bg-white bg-opacity-25 font-mono p-2 rounded m-1">Page de</span>!</span><div class="flex flex-col space-y-1"></div></div>',
);
function f() {
    return (
        s(),
        (() => {
            const e = r.cloneNode(!0),
                t = e.firstChild,
                o = t.nextSibling;
            return (
                a(
                    o,
                    n(i, {
                        href: `${p}/`,
                        class: 'text-white underline bg-white bg-opacity-25 rounded px-2 py-1',
                        children: 'Go to home',
                    }),
                ),
                e
            );
        })()
    );
}
export { f as default };
//# sourceMappingURL=abc.80256bc9.js.map
