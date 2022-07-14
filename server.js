var BUN_RUNTIME = (() => {
	var fr = Object.create;
	var G = Object.defineProperty;
	var cr = Object.getOwnPropertyDescriptor;
	var sr = Object.getOwnPropertyNames;
	var lr = Object.getPrototypeOf,
		hr = Object.prototype.hasOwnProperty;
	var pr = (e, o) => () => (o || e((o = { exports: {} }).exports, o), o.exports),
		vr = (e, o) => {
			for (var i in o) G(e, i, { get: o[i], enumerable: !0 });
		},
		H = (e, o, i, f) => {
			if ((o && typeof o == 'object') || typeof o == 'function')
				for (let p of sr(o))
					!hr.call(e, p) &&
						p !== i &&
						G(e, p, { get: () => o[p], enumerable: !(f = cr(o, p)) || f.enumerable });
			return e;
		};
	var yr = (e, o, i) => (
			(i = e != null ? fr(lr(e)) : {}),
			H(o || !e || !e.__esModule ? G(i, 'default', { value: e, enumerable: !0 }) : i, e)
		),
		gr = (e) => H(G({}, '__esModule', { value: !0 }), e);
	var nr = pr(($r, q) => {
		var R = (function (e) {
			'use strict';
			var o = Object.prototype,
				i = o.hasOwnProperty,
				f,
				p = typeof Symbol == 'function' ? Symbol : {},
				O = p.iterator || '@@iterator',
				L = p.asyncIterator || '@@asyncIterator',
				_ = p.toStringTag || '@@toStringTag';
			function v(t, r, n) {
				return Object.defineProperty(t, r, { value: n, enumerable: !0, configurable: !0, writable: !0 }), t[r];
			}
			try {
				v({}, '');
			} catch {
				v = function (r, n, u) {
					return (r[n] = u);
				};
			}
			function Y(t, r, n, u) {
				var a = r && r.prototype instanceof N ? r : N,
					c = Object.create(a.prototype),
					s = new $(u || []);
				return (c._invoke = ar(t, n, s)), c;
			}
			e.wrap = Y;
			function x(t, r, n) {
				try {
					return { type: 'normal', arg: t.call(r, n) };
				} catch (u) {
					return { type: 'throw', arg: u };
				}
			}
			var z = 'suspendedStart',
				ir = 'suspendedYield',
				V = 'executing',
				j = 'completed',
				g = {};
			function N() {}
			function E() {}
			function d() {}
			var T = {};
			v(T, O, function () {
				return this;
			});
			var I = Object.getPrototypeOf,
				k = I && I(I(A([])));
			k && k !== o && i.call(k, O) && (T = k);
			var w = (d.prototype = N.prototype = Object.create(T));
			(E.prototype = d),
				v(w, 'constructor', d),
				v(d, 'constructor', E),
				(E.displayName = v(d, _, 'GeneratorFunction'));
			function W(t) {
				['next', 'throw', 'return'].forEach(function (r) {
					v(t, r, function (n) {
						return this._invoke(r, n);
					});
				});
			}
			(e.isGeneratorFunction = function (t) {
				var r = typeof t == 'function' && t.constructor;
				return r ? r === E || (r.displayName || r.name) === 'GeneratorFunction' : !1;
			}),
				(e.mark = function (t) {
					return (
						Object.setPrototypeOf
							? Object.setPrototypeOf(t, d)
							: ((t.__proto__ = d), v(t, _, 'GeneratorFunction')),
						(t.prototype = Object.create(w)),
						t
					);
				}),
				(e.awrap = function (t) {
					return { __await: t };
				});
			function P(t, r) {
				function n(c, s, l, y) {
					var h = x(t[c], t, s);
					if (h.type === 'throw') y(h.arg);
					else {
						var C = h.arg,
							S = C.value;
						return S && typeof S == 'object' && i.call(S, '__await')
							? r.resolve(S.__await).then(
									function (m) {
										n('next', m, l, y);
									},
									function (m) {
										n('throw', m, l, y);
									}
							  )
							: r.resolve(S).then(
									function (m) {
										(C.value = m), l(C);
									},
									function (m) {
										return n('throw', m, l, y);
									}
							  );
					}
				}
				var u;
				function a(c, s) {
					function l() {
						return new r(function (y, h) {
							n(c, s, y, h);
						});
					}
					return (u = u ? u.then(l, l) : l());
				}
				this._invoke = a;
			}
			W(P.prototype),
				v(P.prototype, L, function () {
					return this;
				}),
				(e.AsyncIterator = P),
				(e.async = function (t, r, n, u, a) {
					a === void 0 && (a = Promise);
					var c = new P(Y(t, r, n, u), a);
					return e.isGeneratorFunction(r)
						? c
						: c.next().then(function (s) {
								return s.done ? s.value : c.next();
						  });
				});
			function ar(t, r, n) {
				var u = z;
				return function (c, s) {
					if (u === V) throw new Error('Generator is already running');
					if (u === j) {
						if (c === 'throw') throw s;
						return F();
					}
					for (n.method = c, n.arg = s; ; ) {
						var l = n.delegate;
						if (l) {
							var y = B(l, n);
							if (y) {
								if (y === g) continue;
								return y;
							}
						}
						if (n.method === 'next') n.sent = n._sent = n.arg;
						else if (n.method === 'throw') {
							if (u === z) throw ((u = j), n.arg);
							n.dispatchException(n.arg);
						} else n.method === 'return' && n.abrupt('return', n.arg);
						u = V;
						var h = x(t, r, n);
						if (h.type === 'normal') {
							if (((u = n.done ? j : ir), h.arg === g)) continue;
							return { value: h.arg, done: n.done };
						} else h.type === 'throw' && ((u = j), (n.method = 'throw'), (n.arg = h.arg));
					}
				};
			}
			function B(t, r) {
				var n = t.iterator[r.method];
				if (n === f) {
					if (((r.delegate = null), r.method === 'throw')) {
						if (t.iterator.return && ((r.method = 'return'), (r.arg = f), B(t, r), r.method === 'throw'))
							return g;
						(r.method = 'throw'), (r.arg = new TypeError("The iterator does not provide a 'throw' method"));
					}
					return g;
				}
				var u = x(n, t.iterator, r.arg);
				if (u.type === 'throw') return (r.method = 'throw'), (r.arg = u.arg), (r.delegate = null), g;
				var a = u.arg;
				if (!a)
					return (
						(r.method = 'throw'),
						(r.arg = new TypeError('iterator result is not an object')),
						(r.delegate = null),
						g
					);
				if (a.done)
					(r[t.resultName] = a.value),
						(r.next = t.nextLoc),
						r.method !== 'return' && ((r.method = 'next'), (r.arg = f));
				else return a;
				return (r.delegate = null), g;
			}
			W(w),
				v(w, _, 'Generator'),
				v(w, O, function () {
					return this;
				}),
				v(w, 'toString', function () {
					return '[object Generator]';
				});
			function ur(t) {
				var r = { tryLoc: t[0] };
				1 in t && (r.catchLoc = t[1]),
					2 in t && ((r.finallyLoc = t[2]), (r.afterLoc = t[3])),
					this.tryEntries.push(r);
			}
			function M(t) {
				var r = t.completion || {};
				(r.type = 'normal'), delete r.arg, (t.completion = r);
			}
			function $(t) {
				(this.tryEntries = [{ tryLoc: 'root' }]), t.forEach(ur, this), this.reset(!0);
			}
			e.keys = function (t) {
				var r = [];
				for (var n in t) r.push(n);
				return (
					r.reverse(),
					function u() {
						for (; r.length; ) {
							var a = r.pop();
							if (a in t) return (u.value = a), (u.done = !1), u;
						}
						return (u.done = !0), u;
					}
				);
			};
			function A(t) {
				if (t) {
					var r = t[O];
					if (r) return r.call(t);
					if (typeof t.next == 'function') return t;
					if (!isNaN(t.length)) {
						var n = -1,
							u = function a() {
								for (; ++n < t.length; ) if (i.call(t, n)) return (a.value = t[n]), (a.done = !1), a;
								return (a.value = f), (a.done = !0), a;
							};
						return (u.next = u);
					}
				}
				return { next: F };
			}
			e.values = A;
			function F() {
				return { value: f, done: !0 };
			}
			return (
				($.prototype = {
					constructor: $,
					reset: function (t) {
						if (
							((this.prev = 0),
							(this.next = 0),
							(this.sent = this._sent = f),
							(this.done = !1),
							(this.delegate = null),
							(this.method = 'next'),
							(this.arg = f),
							this.tryEntries.forEach(M),
							!t)
						)
							for (var r in this)
								r.charAt(0) === 't' && i.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = f);
					},
					stop: function () {
						this.done = !0;
						var t = this.tryEntries[0],
							r = t.completion;
						if (r.type === 'throw') throw r.arg;
						return this.rval;
					},
					dispatchException: function (t) {
						if (this.done) throw t;
						var r = this;
						function n(y, h) {
							return (
								(c.type = 'throw'),
								(c.arg = t),
								(r.next = y),
								h && ((r.method = 'next'), (r.arg = f)),
								!!h
							);
						}
						for (var u = this.tryEntries.length - 1; u >= 0; --u) {
							var a = this.tryEntries[u],
								c = a.completion;
							if (a.tryLoc === 'root') return n('end');
							if (a.tryLoc <= this.prev) {
								var s = i.call(a, 'catchLoc'),
									l = i.call(a, 'finallyLoc');
								if (s && l) {
									if (this.prev < a.catchLoc) return n(a.catchLoc, !0);
									if (this.prev < a.finallyLoc) return n(a.finallyLoc);
								} else if (s) {
									if (this.prev < a.catchLoc) return n(a.catchLoc, !0);
								} else if (l) {
									if (this.prev < a.finallyLoc) return n(a.finallyLoc);
								} else throw new Error('try statement without catch or finally');
							}
						}
					},
					abrupt: function (t, r) {
						for (var n = this.tryEntries.length - 1; n >= 0; --n) {
							var u = this.tryEntries[n];
							if (u.tryLoc <= this.prev && i.call(u, 'finallyLoc') && this.prev < u.finallyLoc) {
								var a = u;
								break;
							}
						}
						a && (t === 'break' || t === 'continue') && a.tryLoc <= r && r <= a.finallyLoc && (a = null);
						var c = a ? a.completion : {};
						return (
							(c.type = t),
							(c.arg = r),
							a ? ((this.method = 'next'), (this.next = a.finallyLoc), g) : this.complete(c)
						);
					},
					complete: function (t, r) {
						if (t.type === 'throw') throw t.arg;
						return (
							t.type === 'break' || t.type === 'continue'
								? (this.next = t.arg)
								: t.type === 'return'
								? ((this.rval = this.arg = t.arg), (this.method = 'return'), (this.next = 'end'))
								: t.type === 'normal' && r && (this.next = r),
							g
						);
					},
					finish: function (t) {
						for (var r = this.tryEntries.length - 1; r >= 0; --r) {
							var n = this.tryEntries[r];
							if (n.finallyLoc === t) return this.complete(n.completion, n.afterLoc), M(n), g;
						}
					},
					catch: function (t) {
						for (var r = this.tryEntries.length - 1; r >= 0; --r) {
							var n = this.tryEntries[r];
							if (n.tryLoc === t) {
								var u = n.completion;
								if (u.type === 'throw') {
									var a = u.arg;
									M(n);
								}
								return a;
							}
						}
						throw new Error('illegal catch attempt');
					},
					delegateYield: function (t, r, n) {
						return (
							(this.delegate = { iterator: A(t), resultName: r, nextLoc: n }),
							this.method === 'next' && (this.arg = f),
							g
						);
					},
				}),
				e
			);
		})(typeof q == 'object' ? q.exports : {});
		try {
			regeneratorRuntime = R;
		} catch {
			typeof globalThis == 'object'
				? (globalThis.regeneratorRuntime = R)
				: Function('r', 'regeneratorRuntime = r')(R);
		}
	});
	var Nr = {};
	vr(Nr, {
		$$lzy: () => wr,
		$$m: () => Lr,
		__cJS2eSM: () => Sr,
		__commonJS: () => J,
		__export: () => Er,
		__exportDefault: () => Pr,
		__exportValue: () => kr,
		__internalIsCommonJSNamespace: () => rr,
		__markAsModule: () => Z,
		__merge: () => xr,
		__name: () => jr,
		__reExport: () => er,
		__require: () => tr,
		__toModule: () => Or,
		regeneratorRuntime: () => or.default,
	});
	var Ir = Symbol.for,
		U = Object.create,
		dr = Object.getOwnPropertyDescriptors,
		b = Object.defineProperty,
		mr = Object.getPrototypeOf,
		X = Object.prototype.hasOwnProperty,
		br = Object.getOwnPropertyNames,
		_r = Object.getOwnPropertyDescriptor,
		Z = (e) => b(e, '__esModule', { value: !0, configurable: !0 }),
		wr = (e, o, i) => {
			for (let f in i) X.call(e, f) || b(e, f, { get: () => o()[i[f]], enumerable: !0, configurable: !0 });
			return e;
		},
		Or = (e) =>
			er(
				Z(
					b(
						e != null ? U(mr(e)) : {},
						'default',
						e && e.__esModule && 'default' in e
							? { get: () => e.default, enumerable: !0, configurable: !0 }
							: { value: e, enumerable: !0, configurable: !0 }
					)
				),
				e
			),
		K = Symbol.for('CommonJSTransformed'),
		D = Symbol.for('CommonJS'),
		J = (e, o) => {
			var i,
				f = !1;
			let p = function () {
				if (f) return i.exports;
				(f = !0), e(((i = { exports: {} }), i), i.exports);
				let L = typeof i.exports;
				return (
					(L === 'object' || L === 'function') &&
						!i.exports[K] &&
						Object.isExtensible(i.exports) &&
						(Object.defineProperty(i.exports, K, { value: !0, enumerable: !1, configurable: !1 }),
						'default' in i.exports ||
							Object.defineProperty(i.exports, 'default', {
								get() {
									return i.exports;
								},
								set(_) {
									if (_ !== i.exports) return (i.exports = _), !0;
								},
								enumerable: !1,
								configurable: !0,
							})),
					i.exports
				);
			};
			return (p[D] = !0), p;
		},
		Sr = J,
		rr = (e) => e != null && typeof e == 'object' && ((e.default && e.default[D]) || e[D]),
		tr = (e) => (rr(e) ? e.default() : e);
	tr.d = (e) => e;
	var Lr = J,
		jr = (e, o) => (Object.defineProperty(e, 'name', { value: o, enumerable: !1, configurable: !0 }), e),
		Er = (e, o) => {
			for (var i in o) b(e, i, { get: o[i], enumerable: !0, configurable: !0, set: (f) => (o[i] = () => f) });
		},
		kr = (e, o) => {
			for (var i in o) b(e, i, { get: () => o[i], set: (f) => (o[i] = f), enumerable: !0, configurable: !0 });
		},
		Pr = (e, o) => {
			b(e, 'default', { get: () => o, set: (i) => (o = i), enumerable: !0, configurable: !0 });
		},
		er = (e, o, i) => {
			if ((o && typeof o == 'object') || typeof o == 'function')
				for (let f of br(o))
					!X.call(e, f) &&
						f !== 'default' &&
						b(e, f, { get: () => o[f], configurable: !0, enumerable: !(i = _r(o, f)) || i.enumerable });
			return e;
		};
	function Q(e) {
		for (let o in e) return !0;
		return !1;
	}
	function Gr(e, o) {
		var i = U(o, dr(e));
		for (let f in o) i[f] === void 0 && (i[f] = o[f]);
		return i;
	}
	var xr = (e, o) => (Q(o) ? (Q(e) ? Gr(e, o) : o) : e);
	var or = yr(nr());
	return gr(Nr);
})();
export var $$m = BUN_RUNTIME.$$m;
export var __markAsModule = BUN_RUNTIME.__markAsModule;
export var $$lzy = BUN_RUNTIME.$$lzy;
export var __toModule = BUN_RUNTIME.__toModule;
export var __commonJS = BUN_RUNTIME.__commonJS;
export var __require = BUN_RUNTIME.__require;
export var __name = BUN_RUNTIME.__name;
export var __export = BUN_RUNTIME.__export;
export var __reExport = BUN_RUNTIME.__reExport;
export var __cJS2eSM = BUN_RUNTIME.__cJS2eSM;
export var regeneratorRuntime = BUN_RUNTIME.regeneratorRuntime;
export var __exportValue = BUN_RUNTIME.__exportValue;
export var __exportDefault = BUN_RUNTIME.__exportDefault;
export var __merge = BUN_RUNTIME.__merge;
export var $$bun_runtime_json_parse = JSON.parse;
export var __internalIsCommonJSNamespace = BUN_RUNTIME.__internalIsCommonJSNamespace;

globalThis.require ||= function (moduleId) {
	if (typeof moduleId === 'string') {
		return import.meta.require(moduleId);
	}

	return BUN_RUNTIME.__require(moduleId);
};
globalThis.__internalIsCommonJSNamespace ||= BUN_RUNTIME.__internalIsCommonJSNamespace;

// react/jsx-dev-runtime.js
export var $74af56c6 = $$m(
	{
		'react/jsx-dev-runtime.js': (module, exports) => {
			module.exports = __require.d($11b94749());
		},
	}['react/jsx-dev-runtime.js']
);

// bun-framework-next/server.development.tsx
export var $7f177b3d = $$m(
	{
		'bun-framework-next/server.development.tsx': (module, exports) => {
			$28cc2fda();
			var $$8fe7b146 = $8fe7b146();
			var $$7353f888 = $7353f888(),
				packagejson = $$7353f888 && 'default' in $$7353f888 ? $$7353f888.default : $$7353f888;
			const version = packagejson.version;
			if (
				(!version.startsWith('11.1') && !version.startsWith('12.0') && !version.startsWith('12.1')) ||
				version === '11.1.0' ||
				version === '11.1.1'
			)
				console.warn(
					'Possibly incompatible Next.js version: ',
					version,
					'. Please upgrade to Next.js 11.1.2 or Next.js 12.0.2+.\n'
				);
			let buildId = 0;
			let DocumentLoaded = false;
			let DocumentNamespace;
			import(Bun.routesDir + '_document').then(
				(doc) => {
					DocumentNamespace = doc;
					DocumentLoaded = true;
				},
				(err) => {
					if (err instanceof ResolveError) DocumentLoaded = true;
					else console.error(err);
				}
			);
			addEventListener('fetch', async (event) => {
				const route = Bun.match(event);
				let PageNamespace;
				try {
					PageNamespace = await import(route.filePath);
				} catch (exception) {
					console.error('Error loading page:', route.filePath);
					throw exception;
				}
				const pageStylesheets = Bun.getImportedStyles().slice();
				let appRoute;
				try {
					appRoute = await import(Bun.routesDir + '_app');
				} catch (exception) {
					if (exception && !(exception instanceof ResolveError)) {
						console.error('Error loading app:', Bun.routesDir + '_app');
						throw exception;
					}
				}
				const appStylesheets = Bun.getImportedStyles().slice();
				let response;
				try {
					response = await $$8fe7b146.render({
						route,
						PageNamespace,
						appStylesheets,
						pageStylesheets,
						DocumentNamespace,
						AppNamespace: appRoute,
						buildId,
						routePaths: Bun.getRouteFiles(),
						routeNames: Bun.getRouteNames(),
						request: event.request,
					});
				} catch (exception) {
					console.error('Error rendering route', route.filePath);
					throw exception;
				}
				event.respondWith(response);
				buildId++;
			});
		},
	}['bun-framework-next/server.development.tsx']
);

// next/image.js
export var $edeef3d4 = $$m(
	{
		'next/image.js': (module, exports) => {
			module.exports = __require.d($c7751970());
		},
	}['next/image.js']
);

// react/index.js
export var $a85977a5 = $$m(
	{
		'react/index.js': (module, exports) => {
			module.exports = __require.d($36508365());
		},
	}['react/index.js']
);

// bun-framework-next/server-polyfills.tsx
export var $28cc2fda = $$m(
	{
		'bun-framework-next/server-polyfills.tsx': (module, exports) => {
			var $$d6cb1a1f = $d6cb1a1f();
			globalThis.Buffer ||= $$d6cb1a1f.Buffer;
			if (!('URL' in globalThis)) {
				class Outdated extends Error {
					constructor(message) {
						super(message);
						this.name = 'Outdated';
					}
				}
				throw new Outdated(
					'Missing "URL", please run \'bun upgrade\' to update to the latest version of Bun (added in v0.0.74)'
				);
			}
		},
	}['bun-framework-next/server-polyfills.tsx']
);

// @googlemaps/js-api-loader/dist/index.esm.js
export var $d8aafe0d = $$m(
	{
		'@googlemaps/js-api-loader/dist/index.esm.js': (module, exports) => {
			var fastDeepEqual = function equal(a, b) {
				if (a === b) return true;
				if (a && b && typeof a == 'object' && typeof b == 'object') {
					if (a.constructor !== b.constructor) return false;
					var length, i, keys;
					if (Array.isArray(a)) {
						length = a.length;
						if (length != b.length) return false;
						for (i = length; i-- !== 0; ) if (!equal(a[i], b[i])) return false;
						return true;
					}
					if (a.constructor === RegExp) return a.source === b.source && a.flags === b.flags;
					if (a.valueOf !== Object.prototype.valueOf) return a.valueOf() === b.valueOf();
					if (a.toString !== Object.prototype.toString) return a.toString() === b.toString();
					keys = Object.keys(a);
					length = keys.length;
					if (length !== Object.keys(b).length) return false;
					for (i = length; i-- !== 0; ) if (!Object.prototype.hasOwnProperty.call(b, keys[i])) return false;
					for (i = length; i-- !== 0; ) {
						var key = keys[i];
						if (!equal(a[key], b[key])) return false;
					}
					return true;
				}
				return a !== a && b !== b;
			};
			const DEFAULT_ID = '__googleMapsScriptId';
			var LoaderStatus;
			(function (LoaderStatus) {
				LoaderStatus[(LoaderStatus['INITIALIZED'] = 0)] = 'INITIALIZED';
				LoaderStatus[(LoaderStatus['LOADING'] = 1)] = 'LOADING';
				LoaderStatus[(LoaderStatus['SUCCESS'] = 2)] = 'SUCCESS';
				LoaderStatus[(LoaderStatus['FAILURE'] = 3)] = 'FAILURE';
			})(LoaderStatus || (LoaderStatus = {}));

			class Loader {
				constructor({
					apiKey,
					authReferrerPolicy,
					channel,
					client,
					id = DEFAULT_ID,
					language,
					libraries = [],
					mapIds,
					nonce,
					region,
					retries = 3,
					url = 'https://maps.googleapis.com/maps/api/js',
					version,
				}) {
					this.CALLBACK = '__googleMapsCallback';
					this.callbacks = [];
					this.done = false;
					this.loading = false;
					this.errors = [];
					this.apiKey = apiKey;
					this.authReferrerPolicy = authReferrerPolicy;
					this.channel = channel;
					this.client = client;
					this.id = id || DEFAULT_ID;
					this.language = language;
					this.libraries = libraries;
					this.mapIds = mapIds;
					this.nonce = nonce;
					this.region = region;
					this.retries = retries;
					this.url = url;
					this.version = version;
					if (Loader.instance) {
						if (!fastDeepEqual(this.options, Loader.instance.options))
							throw new Error(
								`Loader must not be called again with different options. ${JSON.stringify(
									this.options
								)} !== ${JSON.stringify(Loader.instance.options)}`
							);
						return Loader.instance;
					}
					Loader.instance = this;
				}
				get options() {
					return {
						version: this.version,
						apiKey: this.apiKey,
						channel: this.channel,
						client: this.client,
						id: this.id,
						libraries: this.libraries,
						language: this.language,
						region: this.region,
						mapIds: this.mapIds,
						nonce: this.nonce,
						url: this.url,
						authReferrerPolicy: this.authReferrerPolicy,
					};
				}
				get status() {
					if (this.errors.length) return LoaderStatus.FAILURE;
					if (this.done) return LoaderStatus.SUCCESS;
					if (this.loading) return LoaderStatus.LOADING;
					return LoaderStatus.INITIALIZED;
				}
				get failed() {
					return this.done && !this.loading && this.errors.length >= this.retries + 1;
				}
				createUrl() {
					let url = this.url;
					url += `?callback=${this.CALLBACK}`;
					if (this.apiKey) url += `&key=${this.apiKey}`;
					if (this.channel) url += `&channel=${this.channel}`;
					if (this.client) url += `&client=${this.client}`;
					if (this.libraries.length > 0) url += `&libraries=${this.libraries.join(',')}`;
					if (this.language) url += `&language=${this.language}`;
					if (this.region) url += `&region=${this.region}`;
					if (this.version) url += `&v=${this.version}`;
					if (this.mapIds) url += `&map_ids=${this.mapIds.join(',')}`;
					if (this.authReferrerPolicy) url += `&auth_referrer_policy=${this.authReferrerPolicy}`;
					return url;
				}
				deleteScript() {
					const script = document.getElementById(this.id);
					if (script) script.remove();
				}
				load() {
					return this.loadPromise();
				}
				loadPromise() {
					return new Promise((resolve, reject) => {
						this.loadCallback((err) => {
							if (!err) resolve(window.google);
							else reject(err.error);
						});
					});
				}
				loadCallback(fn) {
					this.callbacks.push(fn);
					this.execute();
				}
				setScript() {
					if (document.getElementById(this.id)) {
						this.callback();
						return;
					}
					const url = this.createUrl();
					const script = document.createElement('script');
					script.id = this.id;
					script.type = 'text/javascript';
					script.src = url;
					script.onerror = this.loadErrorCallback.bind(this);
					script.defer = true;
					script.async = true;
					if (this.nonce) script.nonce = this.nonce;
					document.head.appendChild(script);
				}
				reset() {
					this.deleteScript();
					this.done = false;
					this.loading = false;
					this.errors = [];
					this.onerrorEvent = null;
				}
				resetIfRetryingFailed() {
					if (this.failed) this.reset();
				}
				loadErrorCallback(e) {
					this.errors.push(e);
					if (this.errors.length <= this.retries) {
						const delay = this.errors.length * Math.pow(2, this.errors.length);
						console.log(`Failed to load Google Maps script, retrying in ${delay} ms.`);
						setTimeout(() => {
							this.deleteScript();
							this.setScript();
						}, delay);
					} else {
						this.onerrorEvent = e;
						this.callback();
					}
				}
				setCallback() {
					window.__googleMapsCallback = this.callback.bind(this);
				}
				callback() {
					this.done = true;
					this.loading = false;
					this.callbacks.forEach((cb) => {
						cb(this.onerrorEvent);
					});
					this.callbacks = [];
				}
				execute() {
					this.resetIfRetryingFailed();
					if (this.done) this.callback();
					else {
						if (window.google && window.google.maps && window.google.maps.version) {
							console.warn(
								'Google Maps already loaded outside @googlemaps/js-api-loader.This may result in undesirable behavior as options and script parameters may not match.'
							);
							this.callback();
							return;
						}
						if (this.loading);
						else {
							this.loading = true;
							this.setCallback();
							this.setScript();
						}
					}
				}
			}
			__export(module.exports, {
				DEFAULT_ID: () => DEFAULT_ID,
				Loader: () => Loader,
				LoaderStatus: () => LoaderStatus,
			});
		},
	}['@googlemaps/js-api-loader/dist/index.esm.js']
);

// next/dist/client/image.js
export var $c7751970 = $$m(
	{
		'next/dist/client/image.js': (module, exports) => {
			var JSX = $74af56c6();
			var jsx = JSX.jsxDEV;
			function NextImagePolyfill({ src, width, height, objectFit, style, layout, ...otherProps }) {
				var _style = style;
				if (layout === 'fit') objectFit = 'contain';
				else if (layout === 'fill') objectFit = 'cover';
				if (objectFit)
					if (!_style) _style = { objectFit };
					else _style.objectFit = objectFit;
				return jsx(
					'img',
					{
						src,
						width,
						height,
						style: _style,
						...otherProps,
					},
					undefined,
					false,
					undefined,
					this
				);
			}
			__exportDefault(module.exports, NextImagePolyfill);
		},
	}['next/dist/client/image.js']
);

// next/package.json
export var $7353f888 = $$m(
	{
		'next/package.json': (module, exports) => {
			module.exports = $$bun_runtime_json_parse(`{
  "name": "next",
  "version": "12.1.3",
  "description": "The React Framework",
  "main": "./dist/server/next.js",
  "license": "MIT",
  "repository": "vercel/next.js",
  "bugs": "https://github.com/vercel/next.js/issues",
  "homepage": "https://nextjs.org",
  "types": "index.d.ts",
  "files": [
    "dist",
    "app.js",
    "app.d.ts",
    "babel.js",
    "babel.d.ts",
    "client.js",
    "client.d.ts",
    "config.js",
    "config.d.ts",
    "constants.js",
    "constants.d.ts",
    "data.js",
    "data.d.ts",
    "document.js",
    "document.d.ts",
    "dynamic.js",
    "dynamic.d.ts",
    "error.js",
    "error.d.ts",
    "script.js",
    "script.d.ts",
    "server.js",
    "server.d.ts",
    "head.js",
    "head.d.ts",
    "image.js",
    "image.d.ts",
    "link.js",
    "link.d.ts",
    "router.js",
    "router.d.ts",
    "jest.js",
    "jest.d.ts",
    "amp.js",
    "amp.d.ts",
    "streaming.js",
    "streaming.d.ts",
    "index.d.ts",
    "types/index.d.ts",
    "types/global.d.ts",
    "image-types/global.d.ts"
  ],
  "bin": {
    "next": "./dist/bin/next"
  },
  "scripts": {
    "dev": "taskr",
    "release": "taskr release",
    "prepublish": "npm run release && yarn types",
    "types": "tsc --declaration --emitDeclarationOnly --declarationDir dist",
    "typescript": "tsec --noEmit",
    "ncc-compiled": "ncc cache clean && taskr ncc"
  },
  "taskr": {
    "requires": [
      "./taskfile-ncc.js",
      "./taskfile-swc.js"
    ]
  },
  "dependencies": {
    "@next/env": "12.1.3",
    "caniuse-lite": "^1.0.30001283",
    "postcss": "8.4.5",
    "styled-jsx": "5.0.1"
  },
  "peerDependencies": {
    "fibers": ">= 3.1.0",
    "node-sass": "^6.0.0 || ^7.0.0",
    "react": "^17.0.2 || ^18.0.0-0",
    "react-dom": "^17.0.2 || ^18.0.0-0",
    "sass": "^1.3.0"
  },
  "peerDependenciesMeta": {
    "node-sass": {
      "optional": true
    },
    "sass": {
      "optional": true
    },
    "fibers": {
      "optional": true
    }
  },
  "devDependencies": {
    "@ampproject/toolbox-optimizer": "2.7.1-alpha.0",
    "@babel/code-frame": "7.12.11",
    "@babel/core": "7.15.0",
    "@babel/eslint-parser": "7.15.0",
    "@babel/generator": "7.15.0",
    "@babel/plugin-proposal-class-properties": "7.14.5",
    "@babel/plugin-proposal-export-namespace-from": "7.14.5",
    "@babel/plugin-proposal-numeric-separator": "7.14.5",
    "@babel/plugin-proposal-object-rest-spread": "7.14.7",
    "@babel/plugin-syntax-bigint": "7.8.3",
    "@babel/plugin-syntax-dynamic-import": "7.8.3",
    "@babel/plugin-syntax-import-assertions": "7.16.7",
    "@babel/plugin-syntax-jsx": "7.14.5",
    "@babel/plugin-transform-modules-commonjs": "7.15.0",
    "@babel/plugin-transform-runtime": "7.15.0",
    "@babel/preset-env": "7.15.0",
    "@babel/preset-react": "7.14.5",
    "@babel/preset-typescript": "7.15.0",
    "@babel/runtime": "7.15.4",
    "@babel/traverse": "7.15.0",
    "@babel/types": "7.15.0",
    "@hapi/accept": "5.0.2",
    "@napi-rs/cli": "2.4.4",
    "@napi-rs/triples": "1.1.0",
    "@next/polyfill-module": "12.1.3",
    "@next/polyfill-nomodule": "12.1.3",
    "@next/react-dev-overlay": "12.1.3",
    "@next/react-refresh-utils": "12.1.3",
    "@next/swc": "12.1.3",
    "@peculiar/webcrypto": "1.3.1",
    "@taskr/clear": "1.1.0",
    "@taskr/esnext": "1.1.0",
    "@taskr/watch": "1.1.0",
    "@types/amphtml-validator": "1.0.0",
    "@types/babel__code-frame": "7.0.2",
    "@types/babel__core": "7.1.12",
    "@types/babel__generator": "7.6.2",
    "@types/babel__template": "7.4.0",
    "@types/babel__traverse": "7.11.0",
    "@types/bytes": "3.1.1",
    "@types/ci-info": "2.0.0",
    "@types/compression": "0.0.36",
    "@types/content-disposition": "0.5.4",
    "@types/content-type": "1.1.3",
    "@types/cookie": "0.3.3",
    "@types/cross-spawn": "6.0.0",
    "@types/debug": "4.1.5",
    "@types/etag": "1.8.0",
    "@types/fresh": "0.5.0",
    "@types/jsonwebtoken": "8.3.7",
    "@types/lodash.curry": "4.1.6",
    "@types/lru-cache": "5.1.0",
    "@types/micromatch": "4.0.2",
    "@types/node-fetch": "2.3.4",
    "@types/path-to-regexp": "1.7.0",
    "@types/react": "16.9.17",
    "@types/react-dom": "16.9.4",
    "@types/react-is": "16.7.1",
    "@types/semver": "7.3.1",
    "@types/send": "0.14.4",
    "@types/styled-jsx": "2.2.8",
    "@types/text-table": "0.2.1",
    "@types/ua-parser-js": "0.7.36",
    "@types/uuid": "8.3.1",
    "@types/webpack-sources1": "npm:@types/webpack-sources@0.1.5",
    "@types/ws": "8.2.0",
    "@vercel/ncc": "0.33.1",
    "@vercel/nft": "0.18.0",
    "acorn": "8.5.0",
    "amphtml-validator": "1.0.35",
    "arg": "4.1.0",
    "assert": "2.0.0",
    "async-retry": "1.2.3",
    "async-sema": "3.0.0",
    "babel-plugin-transform-define": "2.0.0",
    "babel-plugin-transform-react-remove-prop-types": "0.4.24",
    "browserify-zlib": "0.2.0",
    "browserslist": "4.18.1",
    "buffer": "5.6.0",
    "bytes": "3.1.1",
    "chalk": "2.4.2",
    "ci-info": "watson/ci-info#f43f6a1cefff47fb361c88cf4b943fdbcaafe540",
    "cli-select": "1.1.2",
    "comment-json": "3.0.3",
    "compression": "1.7.4",
    "conf": "5.0.0",
    "constants-browserify": "1.0.0",
    "content-disposition": "0.5.3",
    "content-type": "1.0.4",
    "cookie": "0.4.1",
    "cross-spawn": "6.0.5",
    "crypto-browserify": "3.12.0",
    "cssnano-simple": "3.0.1",
    "debug": "4.1.1",
    "devalue": "2.0.1",
    "domain-browser": "4.19.0",
    "etag": "1.8.1",
    "events": "3.3.0",
    "find-cache-dir": "3.3.1",
    "find-up": "4.1.0",
    "formdata-node": "4.3.0",
    "fresh": "0.5.2",
    "get-orientation": "1.1.2",
    "glob": "7.1.7",
    "gzip-size": "5.1.1",
    "http-proxy": "1.18.1",
    "https-browserify": "1.0.0",
    "icss-utils": "5.1.0",
    "ignore-loader": "0.1.2",
    "image-size": "1.0.0",
    "is-docker": "2.0.0",
    "is-wsl": "2.2.0",
    "jest-worker": "27.0.0-next.5",
    "json5": "2.2.0",
    "jsonwebtoken": "8.5.1",
    "loader-utils2": "npm:loader-utils@2.0.0",
    "loader-utils3": "npm:loader-utils@3.1.3",
    "lodash.curry": "4.1.1",
    "lru-cache": "5.1.1",
    "micromatch": "4.0.4",
    "mini-css-extract-plugin": "2.4.3",
    "nanoid": "3.1.30",
    "native-url": "0.3.4",
    "neo-async": "2.6.1",
    "node-fetch": "2.6.7",
    "node-html-parser": "1.4.9",
    "ora": "4.0.4",
    "os-browserify": "0.3.0",
    "p-limit": "3.1.0",
    "path-browserify": "1.0.1",
    "path-to-regexp": "6.1.0",
    "postcss-flexbugs-fixes": "5.0.2",
    "postcss-modules-extract-imports": "3.0.0",
    "postcss-modules-local-by-default": "4.0.0",
    "postcss-modules-scope": "3.0.0",
    "postcss-modules-values": "4.0.0",
    "postcss-preset-env": "6.7.0",
    "postcss-safe-parser": "6.0.0",
    "postcss-scss": "3.0.5",
    "postcss-value-parser": "4.1.0",
    "process": "0.11.10",
    "punycode": "2.1.1",
    "querystring-es3": "0.2.1",
    "raw-body": "2.4.1",
    "react-is": "17.0.2",
    "react-refresh": "0.12.0",
    "react-server-dom-webpack": "0.0.0-experimental-577f2de46-20220320",
    "regenerator-runtime": "0.13.4",
    "sass-loader": "12.4.0",
    "schema-utils2": "npm:schema-utils@2.7.1",
    "schema-utils3": "npm:schema-utils@3.0.0",
    "semver": "7.3.2",
    "send": "0.17.1",
    "setimmediate": "1.0.5",
    "source-map": "0.6.1",
    "stream-browserify": "3.0.0",
    "stream-http": "3.1.1",
    "string-hash": "1.1.3",
    "string_decoder": "1.3.0",
    "strip-ansi": "6.0.0",
    "taskr": "1.1.0",
    "terser": "5.10.0",
    "text-table": "0.2.0",
    "timers-browserify": "2.0.12",
    "tty-browserify": "0.0.1",
    "ua-parser-js": "0.7.28",
    "unistore": "3.4.1",
    "use-subscription": "1.5.1",
    "util": "0.12.4",
    "uuid": "8.3.2",
    "vm-browserify": "1.1.2",
    "watchpack": "2.3.1",
    "web-streams-polyfill": "3.0.3",
    "web-vitals": "2.1.0",
    "webpack-sources1": "npm:webpack-sources@1.4.3",
    "webpack-sources3": "npm:webpack-sources@3.2.3",
    "webpack4": "npm:webpack@4.44.1",
    "webpack5": "npm:webpack@5.69.1",
    "ws": "8.2.3"
  },
  "resolutions": {
    "browserslist": "4.18.1",
    "caniuse-lite": "1.0.30001283"
  },
  "engines": {
    "node": ">=12.22.0"
  },
  "optionalDependencies": {
    "@next/swc-android-arm-eabi": "12.1.3",
    "@next/swc-android-arm64": "12.1.3",
    "@next/swc-darwin-arm64": "12.1.3",
    "@next/swc-darwin-x64": "12.1.3",
    "@next/swc-linux-arm-gnueabihf": "12.1.3",
    "@next/swc-linux-arm64-gnu": "12.1.3",
    "@next/swc-linux-arm64-musl": "12.1.3",
    "@next/swc-linux-x64-gnu": "12.1.3",
    "@next/swc-linux-x64-musl": "12.1.3",
    "@next/swc-win32-arm64-msvc": "12.1.3",
    "@next/swc-win32-ia32-msvc": "12.1.3",
    "@next/swc-win32-x64-msvc": "12.1.3"
  },
  "gitHead": "7eee27f9ed39385afc8b2e36fbcab042196fc2be"
}
`);
		},
	}['next/package.json']
);

// react/cjs/react-jsx-dev-runtime.development.js
export var $11b94749 = $$m(
	{
		'react/cjs/react-jsx-dev-runtime.development.js': (module, exports) => {
			(function () {
				var React = __require.d($a85977a5());
				var REACT_ELEMENT_TYPE = Symbol.for('react.element');
				var REACT_PORTAL_TYPE = Symbol.for('react.portal');
				var REACT_FRAGMENT_TYPE = Symbol.for('react.fragment');
				var REACT_STRICT_MODE_TYPE = Symbol.for('react.strict_mode');
				var REACT_PROFILER_TYPE = Symbol.for('react.profiler');
				var REACT_PROVIDER_TYPE = Symbol.for('react.provider');
				var REACT_CONTEXT_TYPE = Symbol.for('react.context');
				var REACT_FORWARD_REF_TYPE = Symbol.for('react.forward_ref');
				var REACT_SUSPENSE_TYPE = Symbol.for('react.suspense');
				var REACT_SUSPENSE_LIST_TYPE = Symbol.for('react.suspense_list');
				var REACT_MEMO_TYPE = Symbol.for('react.memo');
				var REACT_LAZY_TYPE = Symbol.for('react.lazy');
				var REACT_OFFSCREEN_TYPE = Symbol.for('react.offscreen');
				var MAYBE_ITERATOR_SYMBOL = Symbol.iterator;
				var FAUX_ITERATOR_SYMBOL = '@@iterator';
				function getIteratorFn(maybeIterable) {
					if (maybeIterable === null || typeof maybeIterable !== 'object') return null;
					var maybeIterator =
						(MAYBE_ITERATOR_SYMBOL && maybeIterable[MAYBE_ITERATOR_SYMBOL]) ||
						maybeIterable[FAUX_ITERATOR_SYMBOL];
					if (typeof maybeIterator === 'function') return maybeIterator;
					return null;
				}
				var ReactSharedInternals = React.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
				function error(format) {
					{
						for (
							var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1;
							_key2 < _len2;
							_key2++
						)
							args[_key2 - 1] = arguments[_key2];
						printWarning('error', format, args);
					}
				}
				function printWarning(level, format, args) {
					{
						var ReactDebugCurrentFrame = ReactSharedInternals.ReactDebugCurrentFrame;
						var stack = ReactDebugCurrentFrame.getStackAddendum();
						if (stack !== '') {
							format += '%s';
							args = args.concat([stack]);
						}
						var argsWithFormat = args.map(function (item) {
							return String(item);
						});
						argsWithFormat.unshift('Warning: ' + format);
						Function.prototype.apply.call(console[level], console, argsWithFormat);
					}
				}
				var enableScopeAPI = false;
				var enableCacheElement = false;
				var enableTransitionTracing = false;
				var enableLegacyHidden = false;
				var enableDebugTracing = false;
				var REACT_MODULE_REFERENCE;
				REACT_MODULE_REFERENCE = Symbol.for('react.module.reference');
				function isValidElementType(type) {
					if (typeof type === 'string' || typeof type === 'function') return true;
					if (
						type === REACT_FRAGMENT_TYPE ||
						type === REACT_PROFILER_TYPE ||
						enableDebugTracing ||
						type === REACT_STRICT_MODE_TYPE ||
						type === REACT_SUSPENSE_TYPE ||
						type === REACT_SUSPENSE_LIST_TYPE ||
						enableLegacyHidden ||
						type === REACT_OFFSCREEN_TYPE ||
						enableScopeAPI ||
						enableCacheElement ||
						enableTransitionTracing
					)
						return true;
					if (typeof type === 'object' && type !== null) {
						if (
							type.$$typeof === REACT_LAZY_TYPE ||
							type.$$typeof === REACT_MEMO_TYPE ||
							type.$$typeof === REACT_PROVIDER_TYPE ||
							type.$$typeof === REACT_CONTEXT_TYPE ||
							type.$$typeof === REACT_FORWARD_REF_TYPE ||
							type.$$typeof === REACT_MODULE_REFERENCE ||
							type.getModuleId !== undefined
						)
							return true;
					}
					return false;
				}
				function getWrappedName(outerType, innerType, wrapperName) {
					var displayName = outerType.displayName;
					if (displayName) return displayName;
					var functionName = innerType.displayName || innerType.name || '';
					return functionName !== '' ? wrapperName + '(' + functionName + ')' : wrapperName;
				}
				function getContextName(type) {
					return type.displayName || 'Context';
				}
				function getComponentNameFromType(type) {
					if (type == null) return null;
					if (typeof type.tag === 'number')
						error(
							'Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue.'
						);
					if (typeof type === 'function') return type.displayName || type.name || null;
					if (typeof type === 'string') return type;
					switch (type) {
						case REACT_FRAGMENT_TYPE:
							return 'Fragment';
						case REACT_PORTAL_TYPE:
							return 'Portal';
						case REACT_PROFILER_TYPE:
							return 'Profiler';
						case REACT_STRICT_MODE_TYPE:
							return 'StrictMode';
						case REACT_SUSPENSE_TYPE:
							return 'Suspense';
						case REACT_SUSPENSE_LIST_TYPE:
							return 'SuspenseList';
					}
					if (typeof type === 'object')
						switch (type.$$typeof) {
							case REACT_CONTEXT_TYPE:
								var context = type;
								return getContextName(context) + '.Consumer';
							case REACT_PROVIDER_TYPE:
								var provider = type;
								return getContextName(provider._context) + '.Provider';
							case REACT_FORWARD_REF_TYPE:
								return getWrappedName(type, type.render, 'ForwardRef');
							case REACT_MEMO_TYPE:
								var outerName = type.displayName || null;
								if (outerName !== null) return outerName;
								return getComponentNameFromType(type.type) || 'Memo';
							case REACT_LAZY_TYPE: {
								var lazyComponent = type;
								var payload = lazyComponent._payload;
								var init = lazyComponent._init;
								try {
									return getComponentNameFromType(init(payload));
								} catch (x) {
									return null;
								}
							}
						}
					return null;
				}
				var assign = Object.assign;
				var disabledDepth = 0;
				var prevLog;
				var prevInfo;
				var prevWarn;
				var prevError;
				var prevGroup;
				var prevGroupCollapsed;
				var prevGroupEnd;
				function disabledLog() {}
				disabledLog.__reactDisabledLog = true;
				function disableLogs() {
					{
						if (disabledDepth === 0) {
							prevLog = console.log;
							prevInfo = console.info;
							prevWarn = console.warn;
							prevError = console.error;
							prevGroup = console.group;
							prevGroupCollapsed = console.groupCollapsed;
							prevGroupEnd = console.groupEnd;
							var props = {
								configurable: true,
								enumerable: true,
								value: disabledLog,
								writable: true,
							};
							Object.defineProperties(console, {
								info: props,
								log: props,
								warn: props,
								error: props,
								group: props,
								groupCollapsed: props,
								groupEnd: props,
							});
						}
						disabledDepth++;
					}
				}
				function reenableLogs() {
					{
						disabledDepth--;
						if (disabledDepth === 0) {
							var props = {
								configurable: true,
								enumerable: true,
								writable: true,
							};
							Object.defineProperties(console, {
								log: assign({}, props, {
									value: prevLog,
								}),
								info: assign({}, props, {
									value: prevInfo,
								}),
								warn: assign({}, props, {
									value: prevWarn,
								}),
								error: assign({}, props, {
									value: prevError,
								}),
								group: assign({}, props, {
									value: prevGroup,
								}),
								groupCollapsed: assign({}, props, {
									value: prevGroupCollapsed,
								}),
								groupEnd: assign({}, props, {
									value: prevGroupEnd,
								}),
							});
						}
						if (disabledDepth < 0)
							error('disabledDepth fell below zero. This is a bug in React. Please file an issue.');
					}
				}
				var ReactCurrentDispatcher = ReactSharedInternals.ReactCurrentDispatcher;
				var prefix;
				function describeBuiltInComponentFrame(name, source, ownerFn) {
					{
						if (prefix === undefined)
							try {
								throw Error();
							} catch (x) {
								var match = x.stack.trim().match(/\n( *(at )?)/);
								prefix = (match && match[1]) || '';
							}
						return '\n' + prefix + name;
					}
				}
				var reentry = false;
				var componentFrameCache;
				{
					var PossiblyWeakMap = typeof WeakMap === 'function' ? WeakMap : Map;
					componentFrameCache = new PossiblyWeakMap();
				}
				function describeNativeComponentFrame(fn, construct) {
					if (!fn || reentry) return '';
					{
						var frame = componentFrameCache.get(fn);
						if (frame !== undefined) return frame;
					}
					var control;
					reentry = true;
					var previousPrepareStackTrace = Error.prepareStackTrace;
					Error.prepareStackTrace = undefined;
					var previousDispatcher;
					{
						previousDispatcher = ReactCurrentDispatcher.current;
						ReactCurrentDispatcher.current = null;
						disableLogs();
					}
					try {
						if (construct) {
							var Fake = function () {
								throw Error();
							};
							Object.defineProperty(Fake.prototype, 'props', {
								set: function () {
									throw Error();
								},
							});
							if (typeof Reflect === 'object' && Reflect.construct) {
								try {
									Reflect.construct(Fake, []);
								} catch (x) {
									control = x;
								}
								Reflect.construct(fn, [], Fake);
							} else {
								try {
									Fake.call();
								} catch (x) {
									control = x;
								}
								fn.call(Fake.prototype);
							}
						} else {
							try {
								throw Error();
							} catch (x) {
								control = x;
							}
							fn();
						}
					} catch (sample) {
						if (sample && control && typeof sample.stack === 'string') {
							var sampleLines = sample.stack.split('\n');
							var controlLines = control.stack.split('\n');
							var s = sampleLines.length - 1;
							var c = controlLines.length - 1;
							while (s >= 1 && c >= 0 && sampleLines[s] !== controlLines[c]) c--;
							for (; s >= 1 && c >= 0; s--, c--)
								if (sampleLines[s] !== controlLines[c]) {
									if (s !== 1 || c !== 1)
										do {
											s--;
											c--;
											if (c < 0 || sampleLines[s] !== controlLines[c]) {
												var _frame = '\n' + sampleLines[s].replace(' at new ', ' at ');
												if (fn.displayName && _frame.includes('<anonymous>'))
													_frame = _frame.replace('<anonymous>', fn.displayName);
												if (typeof fn === 'function') componentFrameCache.set(fn, _frame);
												return _frame;
											}
										} while (s >= 1 && c >= 0);
									break;
								}
						}
					} finally {
						reentry = false;
						{
							ReactCurrentDispatcher.current = previousDispatcher;
							reenableLogs();
						}
						Error.prepareStackTrace = previousPrepareStackTrace;
					}
					var name = fn ? fn.displayName || fn.name : '';
					var syntheticFrame = name ? describeBuiltInComponentFrame(name) : '';
					if (typeof fn === 'function') componentFrameCache.set(fn, syntheticFrame);
					return syntheticFrame;
				}
				function describeFunctionComponentFrame(fn, source, ownerFn) {
					return describeNativeComponentFrame(fn, false);
				}
				function shouldConstruct(Component) {
					var prototype = Component.prototype;
					return !!(prototype && prototype.isReactComponent);
				}
				function describeUnknownElementTypeFrameInDEV(type, source, ownerFn) {
					if (type == null) return '';
					if (typeof type === 'function') return describeNativeComponentFrame(type, shouldConstruct(type));
					if (typeof type === 'string') return describeBuiltInComponentFrame(type);
					switch (type) {
						case REACT_SUSPENSE_TYPE:
							return describeBuiltInComponentFrame('Suspense');
						case REACT_SUSPENSE_LIST_TYPE:
							return describeBuiltInComponentFrame('SuspenseList');
					}
					if (typeof type === 'object')
						switch (type.$$typeof) {
							case REACT_FORWARD_REF_TYPE:
								return describeFunctionComponentFrame(type.render);
							case REACT_MEMO_TYPE:
								return describeUnknownElementTypeFrameInDEV(type.type, source, ownerFn);
							case REACT_LAZY_TYPE: {
								var lazyComponent = type;
								var payload = lazyComponent._payload;
								var init = lazyComponent._init;
								try {
									return describeUnknownElementTypeFrameInDEV(init(payload), source, ownerFn);
								} catch (x) {}
							}
						}
					return '';
				}
				var hasOwnProperty = Object.prototype.hasOwnProperty;
				var loggedTypeFailures = {};
				var ReactDebugCurrentFrame = ReactSharedInternals.ReactDebugCurrentFrame;
				function setCurrentlyValidatingElement(element) {
					if (element) {
						var owner = element._owner;
						var stack = describeUnknownElementTypeFrameInDEV(
							element.type,
							element._source,
							owner ? owner.type : null
						);
						ReactDebugCurrentFrame.setExtraStackFrame(stack);
					} else ReactDebugCurrentFrame.setExtraStackFrame(null);
				}
				function checkPropTypes(typeSpecs, values, location, componentName, element) {
					{
						var has = Function.call.bind(hasOwnProperty);
						for (var typeSpecName in typeSpecs)
							if (has(typeSpecs, typeSpecName)) {
								var error$1 = undefined;
								try {
									if (typeof typeSpecs[typeSpecName] !== 'function') {
										var err = Error(
											(componentName || 'React class') +
												': ' +
												location +
												' type `' +
												typeSpecName +
												'` is invalid; it must be a function, usually from the `prop-types` package, but received `' +
												typeof typeSpecs[typeSpecName] +
												'`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.'
										);
										err.name = 'Invariant Violation';
										throw err;
									}
									error$1 = typeSpecs[typeSpecName](
										values,
										typeSpecName,
										componentName,
										location,
										null,
										'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED'
									);
								} catch (ex) {
									error$1 = ex;
								}
								if (error$1 && !(error$1 instanceof Error)) {
									setCurrentlyValidatingElement(element);
									error(
										'%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).',
										componentName || 'React class',
										location,
										typeSpecName,
										typeof error$1
									);
									setCurrentlyValidatingElement(null);
								}
								if (error$1 instanceof Error && !(error$1.message in loggedTypeFailures)) {
									loggedTypeFailures[error$1.message] = true;
									setCurrentlyValidatingElement(element);
									error('Failed %s type: %s', location, error$1.message);
									setCurrentlyValidatingElement(null);
								}
							}
					}
				}
				var isArrayImpl = Array.isArray;
				function isArray(a) {
					return isArrayImpl(a);
				}
				function typeName(value) {
					{
						var hasToStringTag = typeof Symbol === 'function' && Symbol.toStringTag;
						var type = (hasToStringTag && value[Symbol.toStringTag]) || value.constructor.name || 'Object';
						return type;
					}
				}
				function willCoercionThrow(value) {
					try {
						testStringCoercion(value);
						return false;
					} catch (e) {
						return true;
					}
				}
				function testStringCoercion(value) {
					return '' + value;
				}
				function checkKeyStringCoercion(value) {
					if (willCoercionThrow(value)) {
						error(
							'The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.',
							typeName(value)
						);
						return testStringCoercion(value);
					}
				}
				var ReactCurrentOwner = ReactSharedInternals.ReactCurrentOwner;
				var RESERVED_PROPS = {
					key: true,
					ref: true,
					__self: true,
					__source: true,
				};
				var specialPropKeyWarningShown;
				var specialPropRefWarningShown;
				var didWarnAboutStringRefs;
				didWarnAboutStringRefs = {};
				function hasValidRef(config) {
					if (hasOwnProperty.call(config, 'ref')) {
						var getter = Object.getOwnPropertyDescriptor(config, 'ref').get;
						if (getter && getter.isReactWarning) return false;
					}
					return config.ref !== undefined;
				}
				function hasValidKey(config) {
					if (hasOwnProperty.call(config, 'key')) {
						var getter = Object.getOwnPropertyDescriptor(config, 'key').get;
						if (getter && getter.isReactWarning) return false;
					}
					return config.key !== undefined;
				}
				function warnIfStringRefCannotBeAutoConverted(config, self) {
					if (
						typeof config.ref === 'string' &&
						ReactCurrentOwner.current &&
						self &&
						ReactCurrentOwner.current.stateNode !== self
					) {
						var componentName = getComponentNameFromType(ReactCurrentOwner.current.type);
						if (!didWarnAboutStringRefs[componentName]) {
							error(
								'Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref',
								getComponentNameFromType(ReactCurrentOwner.current.type),
								config.ref
							);
							didWarnAboutStringRefs[componentName] = true;
						}
					}
				}
				function defineKeyPropWarningGetter(props, displayName) {
					{
						var warnAboutAccessingKey = function () {
							if (!specialPropKeyWarningShown) {
								specialPropKeyWarningShown = true;
								error(
									'%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)',
									displayName
								);
							}
						};
						warnAboutAccessingKey.isReactWarning = true;
						Object.defineProperty(props, 'key', {
							get: warnAboutAccessingKey,
							configurable: true,
						});
					}
				}
				function defineRefPropWarningGetter(props, displayName) {
					{
						var warnAboutAccessingRef = function () {
							if (!specialPropRefWarningShown) {
								specialPropRefWarningShown = true;
								error(
									'%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)',
									displayName
								);
							}
						};
						warnAboutAccessingRef.isReactWarning = true;
						Object.defineProperty(props, 'ref', {
							get: warnAboutAccessingRef,
							configurable: true,
						});
					}
				}
				var ReactElement = function (type, key, ref, self, source, owner, props) {
					var element = {
						$$typeof: REACT_ELEMENT_TYPE,
						type,
						key,
						ref,
						props,
						_owner: owner,
					};
					{
						element._store = {};
						Object.defineProperty(element._store, 'validated', {
							configurable: false,
							enumerable: false,
							writable: true,
							value: false,
						});
						Object.defineProperty(element, '_self', {
							configurable: false,
							enumerable: false,
							writable: false,
							value: self,
						});
						Object.defineProperty(element, '_source', {
							configurable: false,
							enumerable: false,
							writable: false,
							value: source,
						});
						if (Object.freeze) {
							Object.freeze(element.props);
							Object.freeze(element);
						}
					}
					return element;
				};
				function jsxDEV(type, config, maybeKey, source, self) {
					{
						var propName;
						var props = {};
						var key = null;
						var ref = null;
						if (maybeKey !== undefined) {
							checkKeyStringCoercion(maybeKey);
							key = '' + maybeKey;
						}
						if (hasValidKey(config)) {
							checkKeyStringCoercion(config.key);
							key = '' + config.key;
						}
						if (hasValidRef(config)) {
							ref = config.ref;
							warnIfStringRefCannotBeAutoConverted(config, self);
						}
						for (propName in config)
							if (hasOwnProperty.call(config, propName) && !RESERVED_PROPS.hasOwnProperty(propName))
								props[propName] = config[propName];
						if (type && type.defaultProps) {
							var defaultProps = type.defaultProps;
							for (propName in defaultProps)
								if (props[propName] === undefined) props[propName] = defaultProps[propName];
						}
						if (key || ref) {
							var displayName =
								typeof type === 'function' ? type.displayName || type.name || 'Unknown' : type;
							if (key) defineKeyPropWarningGetter(props, displayName);
							if (ref) defineRefPropWarningGetter(props, displayName);
						}
						return ReactElement(type, key, ref, self, source, ReactCurrentOwner.current, props);
					}
				}
				var ReactCurrentOwner$1 = ReactSharedInternals.ReactCurrentOwner;
				var ReactDebugCurrentFrame$1 = ReactSharedInternals.ReactDebugCurrentFrame;
				function setCurrentlyValidatingElement$1(element) {
					if (element) {
						var owner = element._owner;
						var stack = describeUnknownElementTypeFrameInDEV(
							element.type,
							element._source,
							owner ? owner.type : null
						);
						ReactDebugCurrentFrame$1.setExtraStackFrame(stack);
					} else ReactDebugCurrentFrame$1.setExtraStackFrame(null);
				}
				var propTypesMisspellWarningShown;
				propTypesMisspellWarningShown = false;
				function isValidElement(object) {
					return typeof object === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
				}
				function getDeclarationErrorAddendum() {
					{
						if (ReactCurrentOwner$1.current) {
							var name = getComponentNameFromType(ReactCurrentOwner$1.current.type);
							if (name) return '\n\nCheck the render method of `' + name + '`.';
						}
						return '';
					}
				}
				function getSourceInfoErrorAddendum(source) {
					{
						if (source !== undefined) {
							var fileName = source.fileName.replace(/^.*[\\\/]/, '');
							var lineNumber = source.lineNumber;
							return '\n\nCheck your code at ' + fileName + ':' + lineNumber + '.';
						}
						return '';
					}
				}
				var ownerHasKeyUseWarning = {};
				function getCurrentComponentErrorInfo(parentType) {
					{
						var info = getDeclarationErrorAddendum();
						if (!info) {
							var parentName =
								typeof parentType === 'string' ? parentType : parentType.displayName || parentType.name;
							if (parentName) info = '\n\nCheck the top-level render call using <' + parentName + '>.';
						}
						return info;
					}
				}
				function validateExplicitKey(element, parentType) {
					{
						if (!element._store || element._store.validated || element.key != null) return;
						element._store.validated = true;
						var currentComponentErrorInfo = getCurrentComponentErrorInfo(parentType);
						if (ownerHasKeyUseWarning[currentComponentErrorInfo]) return;
						ownerHasKeyUseWarning[currentComponentErrorInfo] = true;
						var childOwner = '';
						if (element && element._owner && element._owner !== ReactCurrentOwner$1.current)
							childOwner =
								' It was passed a child from ' + getComponentNameFromType(element._owner.type) + '.';
						setCurrentlyValidatingElement$1(element);
						error(
							'Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.',
							currentComponentErrorInfo,
							childOwner
						);
						setCurrentlyValidatingElement$1(null);
					}
				}
				function validateChildKeys(node, parentType) {
					{
						if (typeof node !== 'object') return;
						if (isArray(node))
							for (var i = 0; i < node.length; i++) {
								var child = node[i];
								if (isValidElement(child)) validateExplicitKey(child, parentType);
							}
						else if (isValidElement(node)) {
							if (node._store) node._store.validated = true;
						} else if (node) {
							var iteratorFn = getIteratorFn(node);
							if (typeof iteratorFn === 'function') {
								if (iteratorFn !== node.entries) {
									var iterator = iteratorFn.call(node);
									var step;
									while (!(step = iterator.next()).done)
										if (isValidElement(step.value)) validateExplicitKey(step.value, parentType);
								}
							}
						}
					}
				}
				function validatePropTypes(element) {
					{
						var type = element.type;
						if (type === null || type === undefined || typeof type === 'string') return;
						var propTypes;
						if (typeof type === 'function') propTypes = type.propTypes;
						else if (
							typeof type === 'object' &&
							(type.$$typeof === REACT_FORWARD_REF_TYPE || type.$$typeof === REACT_MEMO_TYPE)
						)
							propTypes = type.propTypes;
						else return;
						if (propTypes) {
							var name = getComponentNameFromType(type);
							checkPropTypes(propTypes, element.props, 'prop', name, element);
						} else if (type.PropTypes !== undefined && !propTypesMisspellWarningShown) {
							propTypesMisspellWarningShown = true;
							var _name = getComponentNameFromType(type);
							error(
								'Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?',
								_name || 'Unknown'
							);
						}
						if (typeof type.getDefaultProps === 'function' && !type.getDefaultProps.isReactClassApproved)
							error(
								'getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.'
							);
					}
				}
				function validateFragmentProps(fragment) {
					{
						var keys = Object.keys(fragment.props);
						for (var i = 0; i < keys.length; i++) {
							var key = keys[i];
							if (key !== 'children' && key !== 'key') {
								setCurrentlyValidatingElement$1(fragment);
								error(
									'Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.',
									key
								);
								setCurrentlyValidatingElement$1(null);
								break;
							}
						}
						if (fragment.ref !== null) {
							setCurrentlyValidatingElement$1(fragment);
							error('Invalid attribute `ref` supplied to `React.Fragment`.');
							setCurrentlyValidatingElement$1(null);
						}
					}
				}
				function jsxWithValidation(type, props, key, isStaticChildren, source, self) {
					{
						var validType = isValidElementType(type);
						if (!validType) {
							var info = '';
							if (
								type === undefined ||
								(typeof type === 'object' && type !== null && Object.keys(type).length === 0)
							)
								info +=
									" You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.";
							var sourceInfo = getSourceInfoErrorAddendum(source);
							if (sourceInfo) info += sourceInfo;
							else info += getDeclarationErrorAddendum();
							var typeString;
							if (type === null) typeString = 'null';
							else if (isArray(type)) typeString = 'array';
							else if (type !== undefined && type.$$typeof === REACT_ELEMENT_TYPE) {
								typeString = '<' + (getComponentNameFromType(type.type) || 'Unknown') + ' />';
								info = ' Did you accidentally export a JSX literal instead of a component?';
							} else typeString = typeof type;
							error(
								'React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s',
								typeString,
								info
							);
						}
						var element = jsxDEV(type, props, key, source, self);
						if (element == null) return element;
						if (validType) {
							var children = props.children;
							if (children !== undefined)
								if (isStaticChildren)
									if (isArray(children)) {
										for (var i = 0; i < children.length; i++) validateChildKeys(children[i], type);
										if (Object.freeze) Object.freeze(children);
									} else
										error(
											'React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.'
										);
								else validateChildKeys(children, type);
						}
						if (type === REACT_FRAGMENT_TYPE) validateFragmentProps(element);
						else validatePropTypes(element);
						return element;
					}
				}
				var jsxDEV$1 = jsxWithValidation;
				exports.Fragment = REACT_FRAGMENT_TYPE;
				exports.jsxDEV = jsxDEV$1;
			})();
		},
	}['react/cjs/react-jsx-dev-runtime.development.js']
);

// bun-framework-next/renderDocument.tsx
export var $8fe7b146 = $$m(
	{
		'bun-framework-next/renderDocument.tsx': (module, exports) => {
			var JSX = $74af56c6();
			var jsx = JSX.jsxDEV;
			var $$f3f4e1d6 = $f3f4e1d6(),
				App = $$f3f4e1d6 && 'default' in $$f3f4e1d6 ? $$f3f4e1d6.default : $$f3f4e1d6;
			var $$d3ff0f54 = $d3ff0f54();
			var $$db29be3a = $db29be3a();
			var $$6c2a3c6b = $6c2a3c6b(),
				Loadable = $$6c2a3c6b && 'default' in $$6c2a3c6b ? $$6c2a3c6b.default : $$6c2a3c6b;
			var $$c4530628 = $c4530628();
			var $$d53ca603 = $d53ca603();
			var $$8496d550 = $8496d550();
			var NextUtils = $8496d550();
			var NextDocument = $fd10597b();
			var ReactDOMServer = $aaba5847();
			var ReactIs = $eb327d71();
			var $$7353f888 = $7353f888(),
				packageJson = $$7353f888 && 'default' in $$7353f888 ? $$7353f888.default : $$7353f888;
			const nextVersion = packageJson.version;
			var HtmlContext;
			if ('HtmlContext' in NextUtils) HtmlContext = NextUtils.HtmlContext;
			else
				try {
					HtmlContext = __require.d($7866eaa1()).HtmlContext;
				} catch (err) {
					throw err;
				}
			function appendNextBody(documentHTML, pageContent) {
				if (nextVersion.startsWith('12.0')) {
					const NEXT_12_0_BODY_RENDER_TARGET = '__NEXT_BODY_RENDER_TARGET__';
					const bodyRenderIdx = documentHTML.indexOf(NEXT_12_0_BODY_RENDER_TARGET);
					if (!documentHTML.startsWith('<!DOCTYPE html>')) documentHTML = '<!DOCTYPE html>' + documentHTML;
					return (
						documentHTML.substring(0, bodyRenderIdx) +
						pageContent +
						documentHTML.substring(bodyRenderIdx + NEXT_12_0_BODY_RENDER_TARGET.length)
					);
				} else {
					var [renderTargetPrefix, renderTargetSuffix] = documentHTML.split(
						'<next-js-internal-body-render-target></next-js-internal-body-render-target>'
					);
					if (!renderTargetPrefix || !renderTargetSuffix)
						throw new Error(
							"Can't find where your <App /> starts or where the <Document /> ends. \nThis is probably a version incompatibility. Please mention this error in Bun's discord\n\n" +
								documentHTML
						);
					if (!renderTargetPrefix.startsWith('<!DOCTYPE html>'))
						renderTargetPrefix = '<!DOCTYPE html>' + renderTargetPrefix;
					return renderTargetPrefix + `<div id="__next">${pageContent || ''}</div>` + renderTargetSuffix;
				}
			}
			const dev = true;
			const isJSFile = (file) =>
				file.endsWith('.js') ||
				file.endsWith('.jsx') ||
				file.endsWith('.mjs') ||
				file.endsWith('.ts') ||
				file.endsWith('.tsx');
			function getScripts(files) {
				const { context, props } = this;
				const { assetPrefix, buildManifest, isDevelopment, devOnlyCacheBusterQueryString } = context;
				const normalScripts = files?.allFiles?.filter(isJSFile) ?? [];
				const lowPriorityScripts = buildManifest?.lowPriorityFiles?.filter(isJSFile) ?? [];
				var entryPointIndex = -1;
				const scripts = [...normalScripts, ...lowPriorityScripts].map((file, index) => {
					return jsx(
						'script',
						{
							src: `${encodeURI(file)}${devOnlyCacheBusterQueryString}`,
							nonce: props.nonce,
							async: true,
							crossOrigin: props.crossOrigin || process.env.__NEXT_CROSS_ORIGIN,
							type: 'module',
						},
						file,
						false,
						undefined,
						this
					);
				});
				return scripts;
			}
			function renderDocument(
				Document,
				{
					buildManifest,
					docComponentsRendered,
					props,
					docProps,
					pathname,
					query,
					buildId,
					page,
					canonicalBase,
					assetPrefix,
					runtimeConfig,
					nextExport,
					autoExport,
					isFallback,
					dynamicImportsIds,
					dangerousAsPath,
					err,
					dev,
					ampPath,
					ampState,
					inAmpMode,
					hybridAmp,
					dynamicImports,
					headTags,
					gsp,
					gssp,
					customServer,
					gip,
					appGip,
					unstable_runtimeJS,
					unstable_JsPreload,
					devOnlyCacheBusterQueryString,
					scriptLoader,
					locale,
					locales,
					defaultLocale,
					domainLocales,
					isPreview,
					disableOptimizedLoading,
				}
			) {
				const htmlProps = {
					__NEXT_DATA__: {
						props,
						page,
						query,
						buildId,
						assetPrefix: assetPrefix === '' ? undefined : assetPrefix,
						runtimeConfig,
						nextExport,
						autoExport,
						isFallback,
						dynamicIds: dynamicImportsIds.length === 0 ? undefined : dynamicImportsIds,
						err: err || undefined,
						gsp,
						gssp,
						customServer,
						gip,
						appGip,
						locale,
						locales,
						defaultLocale,
						domainLocales,
						isPreview,
						pages: buildManifest.pages,
					},
					buildManifest,
					docComponentsRendered,
					dangerousAsPath,
					canonicalBase,
					ampPath,
					inAmpMode,
					isDevelopment: !!dev,
					hybridAmp,
					dynamicImports,
					assetPrefix,
					headTags,
					unstable_runtimeJS,
					unstable_JsPreload,
					devOnlyCacheBusterQueryString,
					scriptLoader,
					locale,
					disableOptimizedLoading,
					useMaybeDeferContent,
					...docProps,
				};
				return ReactDOMServer.renderToStaticMarkup(
					jsx(
						$$d3ff0f54.AmpStateContext.Provider,
						{
							value: ampState,
							children: jsx(
								HtmlContext.Provider,
								{
									value: htmlProps,
									children: jsx(
										Document,
										{
											...htmlProps,
											...docProps,
										},
										undefined,
										false,
										undefined,
										this
									),
								},
								undefined,
								false,
								undefined,
								this
							),
						},
						undefined,
						false,
						undefined,
						this
					)
				);
			}

			class ServerRouter {
				route;
				pathname;
				query;
				asPath;
				basePath;
				events;
				isFallback;
				locale;
				isReady;
				locales;
				defaultLocale;
				domainLocales;
				isPreview;
				isLocaleDomain;
				constructor(
					pathname,
					query,
					as,
					{ isFallback },
					isReady,
					basePath,
					locale,
					locales,
					defaultLocale,
					domainLocales,
					isPreview,
					isLocaleDomain
				) {
					this.route = pathname.replace(/\/$/, '') || '/';
					this.pathname = new URL(pathname || '/', Bun.origin || 'http://localhost:3000').href;
					this.query = query;
					this.asPath = new URL(as || '/', Bun.origin || 'http://localhost:3000').href;
					this.isFallback = isFallback;
					this.basePath = basePath;
					this.locale = locale;
					this.locales = locales;
					this.defaultLocale = defaultLocale;
					this.isReady = isReady;
					this.domainLocales = domainLocales;
					this.isPreview = !!isPreview;
					this.isLocaleDomain = !!isLocaleDomain;
				}
				push() {
					noRouter();
				}
				replace() {
					noRouter();
				}
				reload() {
					noRouter();
				}
				back() {
					noRouter();
				}
				prefetch() {
					noRouter();
				}
				beforePopState() {
					noRouter();
				}
			}
			function noRouter() {
				const message =
					'No router instance found. you should only use "next/router" inside the client side of your app. https://nextjs.org/docs/messages/no-router-instance';
				throw new Error(message);
			}
			function enhanceComponents(options, App, Component) {
				if (typeof options === 'function')
					return {
						App,
						Component: options(Component),
					};
				return {
					App: options.enhanceApp ? options.enhanceApp(App) : App,
					Component: options.enhanceComponent ? options.enhanceComponent(Component) : Component,
				};
			}
			const scriptsGetter = {
				get() {
					return getScripts;
				},
			};
			Object.defineProperty(NextDocument.Head.prototype, 'getScripts', scriptsGetter);
			Object.defineProperty(NextDocument.NextScript.prototype, 'getScripts', scriptsGetter);
			try {
				Object.defineProperty(NextDocument.default.prototype, 'getScripts', scriptsGetter);
			} catch {}
			try {
				Object.defineProperty(NextDocument.default, 'getScripts', scriptsGetter);
			} catch {}
			async function render({
				route,
				request,
				PageNamespace,
				AppNamespace,
				appStylesheets = [],
				pageStylesheets = [],
				DocumentNamespace = null,
				buildId,
				routePaths = [],
				routeNames = [],
			}) {
				const { default: Component } = PageNamespace || {};
				const getStaticProps = PageNamespace?.getStaticProps || null;
				const { default: AppComponent_ } = AppNamespace || {};
				var query = Object.assign({}, route.query);
				const origin = Bun.origin;
				const pathname = route.name;
				var asPath = route.pathname;
				const pages = {};
				for (let i = 0; i < routeNames.length; i++) {
					const filePath = routePaths[i];
					const name = routeNames[i];
					pages[name] = [filePath];
				}
				if (appStylesheets.length > 0)
					if (pages['/_app']) pages['/_app'].push(...appStylesheets);
					else pages['/_app'] = appStylesheets;
				pages[pathname] = [route.scriptSrc, ...pageStylesheets];
				if (!('/_app' in pages)) pages['/_app'] = [];
				const AppComponent = AppComponent_ || App;
				const Document = DocumentNamespace?.default || NextDocument.default;
				const callMiddleware = async (method, args, props = false) => {
					let results = props ? {} : [];
					if (Document[`${method}Middleware`]) {
						let middlewareFunc = await Document[`${method}Middleware`];
						middlewareFunc = middlewareFunc.default || middlewareFunc;
						const curResults = await middlewareFunc(...args);
						if (props)
							for (const result of curResults)
								results = {
									...results,
									...result,
								};
						else results = curResults;
					}
					return results;
				};
				const headTags = (...args) => callMiddleware('headTags', args);
				if (!ReactIs.isValidElementType(Component)) {
					const exportNames = Object.keys(PageNamespace || {});
					const reactComponents = exportNames.filter(ReactIs.isValidElementType);
					if (reactComponents.length > 2)
						throw new Error(
							`\"export default\" missing in ${
								route.filePath
							}.\nTry exporting one of ${reactComponents.join(', ')}\n`
						);
					else if (reactComponents.length === 2)
						throw new Error(
							`\"export default\" missing in ${route.filePath}.\n\nTry exporting <${reactComponents[0]} /> or <${reactComponents[1]} />\n`
						);
					else if (reactComponents.length == 1)
						throw new Error(
							`\"export default\" missing in ${route.filePath}. Try adding this to the bottom of the file:\n\n        export default ${reactComponents[0]};\n`
						);
					else if (reactComponents.length == 0)
						throw new Error(
							`\"export default\" missing in ${route.filePath}. Try exporting a React component.\n`
						);
				}
				const isFallback = !!query.__nextFallback;
				delete query.__nextFallback;
				delete query.__nextLocale;
				delete query.__nextDefaultLocale;
				const defaultAppGetInitialProps = App.getInitialProps === App.origGetInitialProps;
				const hasPageGetInitialProps = !!Component.getInitialProps;
				const pageIsDynamic = route.kind === 'dynamic';
				const isPreview = false;
				const isAutoExport = false;
				const nextExport = isAutoExport || isFallback;
				if (isAutoExport || isFallback)
					asPath = `${asPath}${asPath.endsWith('/') && asPath !== '/' && !pageIsDynamic ? '/' : ''}`;
				let head = [
					jsx(
						'meta',
						{
							charSet: 'utf-8',
						},
						undefined,
						false,
						undefined,
						this
					),
					jsx(
						'meta',
						{
							name: 'viewport',
							content: 'width=device-width',
						},
						undefined,
						false,
						undefined,
						this
					),
				];
				const reactLoadableModules = [];
				var scriptLoader = {};
				const AppContainer = ({ children }) =>
					jsx(
						$$d53ca603.RouterContext.Provider,
						{
							value: router,
							children: jsx(
								$$db29be3a.HeadManagerContext.Provider,
								{
									value: {
										updateHead: (state) => {
											head = state;
										},
										updateScripts: (scripts) => {
											scriptLoader = scripts;
										},
										scripts: {},
										mountedInstances: new Set(),
									},
									children: jsx(
										$$c4530628.LoadableContext.Provider,
										{
											value: (moduleName) => reactLoadableModules.push(moduleName),
											children,
										},
										undefined,
										false,
										undefined,
										this
									),
								},
								undefined,
								false,
								undefined,
								this
							),
						},
						undefined,
						false,
						undefined,
						this
					);
				await Loadable.preloadAll();
				const router = new ServerRouter(
					pathname,
					query,
					asPath,
					{
						isFallback,
					},
					true,
					origin,
					null,
					[],
					null,
					[],
					false,
					false
				);
				const ctx = {
					err: null,
					req: undefined,
					res: undefined,
					pathname,
					query,
					asPath,
					locale: null,
					locales: [],
					defaultLocale: null,
					AppTree: (props) => {
						return jsx(
							AppContainer,
							{
								children: jsx(
									App,
									{
										...props,
										Component,
										router,
									},
									undefined,
									false,
									undefined,
									this
								),
							},
							undefined,
							false,
							undefined,
							this
						);
					},
					defaultGetInitialProps: async (docCtx) => {
						const enhanceApp = (AppComp) => {
							return (props) =>
								jsx(
									AppComp,
									{
										...props,
									},
									undefined,
									false,
									undefined,
									this
								);
						};
						const { html, head } = await docCtx.renderPage({ enhanceApp });
						return { html, head };
					},
				};
				var props = await $$8496d550.loadGetInitialProps(AppComponent, {
					AppTree: ctx.AppTree,
					Component,
					router,
					ctx,
				});
				const pageProps = Object.assign({}, props.pageProps || {});
				const getServerSideProps = PageNamespace.getServerSideProps;
				var responseHeaders;
				if (typeof getServerSideProps === 'function') {
					const result = await getServerSideProps({
						params: route.params,
						query: route.query,
						req: {
							destroy() {},
							method: request.method,
							httpVersion: '1.1',
							rawHeaders: [],
							rawTrailers: [],
							socket: null,
							statusCode: 200,
							statusMessage: 'OK',
							trailers: {},
							url: request.url,
							headers: new Proxy(
								{},
								{
									get(target, name) {
										return request.headers.get(name);
									},
									has(target, name) {
										return request.headers.has(name);
									},
								}
							),
						},
						res: {
							getHeaders() {
								return {};
							},
							getHeaderNames() {
								return {};
							},
							flushHeaders() {},
							getHeader(name) {
								if (!responseHeaders) return;
								return responseHeaders.get(name);
							},
							hasHeader(name) {
								if (!responseHeaders) return;
								return responseHeaders.has(name);
							},
							headersSent: false,
							setHeader(name, value) {
								responseHeaders = responseHeaders || new Headers();
								responseHeaders.set(name, String(value));
							},
							cork() {},
							end() {},
							finished: false,
						},
						resolvedUrl: route.pathname,
						preview: false,
						previewData: null,
						locale: null,
						locales: [],
						defaultLocale: null,
					});
					if (result) {
						if ('props' in result) {
							if (typeof result.props === 'object') Object.assign(pageProps, result.props);
						}
					}
				} else if (typeof getStaticProps === 'function') {
					const result = await getStaticProps({
						params: route.params,
						query: route.query,
						req: null,
						res: null,
						resolvedUrl: route.pathname,
						preview: false,
						previewData: null,
						locale: null,
						locales: [],
						defaultLocale: null,
					});
					if (result) {
						if ('props' in result) {
							if (typeof result.props === 'object') Object.assign(pageProps, result.props);
						}
					}
				}
				const renderToString = ReactDOMServer.renderToString;
				const ErrorDebug = null;
				props.pageProps = pageProps;
				const renderPage = (options = {}) => {
					if (ctx.err && ErrorDebug) {
						const htmlOrPromise = renderToString(
							jsx(
								ErrorDebug,
								{
									error: ctx.err,
								},
								undefined,
								false,
								undefined,
								this
							)
						);
						return { html: htmlOrPromise, head };
					}
					if (dev && (props.router || props.Component))
						throw new Error(
							`'router' and 'Component' can not be returned in getInitialProps from _app.js https://nextjs.org/docs/messages/cant-override-next-props`
						);
					const { App: EnhancedApp, Component: EnhancedComponent } = enhanceComponents(
						options,
						AppComponent,
						Component
					);
					const htmlOrPromise = renderToString(
						jsx(
							AppContainer,
							{
								children: jsx(
									EnhancedApp,
									{
										Component: EnhancedComponent,
										router,
										...props,
										pageProps,
									},
									undefined,
									false,
									undefined,
									this
								),
							},
							undefined,
							false,
							undefined,
							this
						)
					);
					return { html: htmlOrPromise, head };
				};
				const documentCtx = { ...ctx, renderPage };
				const docProps = await $$8496d550.loadGetInitialProps(Document, documentCtx);
				if (!docProps || typeof docProps.html !== 'string') {
					const message = `"${$$8496d550.getDisplayName(
						Document
					)}.getInitialProps()" should resolve to an object with a "html" prop set with a valid html string`;
					throw new Error(message);
				}
				const renderOpts = {
					params: route.params,
				};
				const docComponentsRendered = {};
				let html = renderDocument(Document, {
					docComponentsRendered,
					...renderOpts,
					disableOptimizedLoading: false,
					canonicalBase: origin,
					buildManifest: {
						devFiles: [],
						allFiles: [],
						polyfillFiles: [],
						lowPriorityFiles: [],
						pages,
					},
					unstable_runtimeJS: true,
					unstable_JsPreload: true,
					dangerousAsPath: router.asPath,
					ampState: undefined,
					props,
					assetPrefix: '',
					headTags: await headTags(documentCtx),
					isFallback,
					docProps,
					page: pathname,
					pathname,
					ampPath: undefined,
					query,
					inAmpMode: false,
					hybridAmp: undefined,
					dynamicImportsIds: [],
					dynamicImports: [],
					gsp: getStaticProps ? true : undefined,
					gssp: getServerSideProps ? true : undefined,
					gip: hasPageGetInitialProps ? true : undefined,
					appGip: !defaultAppGetInitialProps ? true : undefined,
					devOnlyCacheBusterQueryString: '',
					scriptLoader,
					isPreview,
					autoExport: nextExport === true ? true : undefined,
					nextExport,
					useMaybeDeferContent,
				});
				html = appendNextBody(html, docProps.html);
				html = html.replaceAll('"/_next/http://', '"http://').replaceAll('"/_next/https://', '"https://');
				if (responseHeaders) return new Response(html, { headers: responseHeaders });
				else return new Response(html);
			}
			Object.defineProperty(module.exports, 'render', {
				get: () => render,
				enumerable: true,
				configurable: true,
			});
			function useMaybeDeferContent(_name, contentFn) {
				return [false, contentFn()];
			}
			Object.defineProperty(module.exports, 'useMaybeDeferContent', {
				get: () => useMaybeDeferContent,
				enumerable: true,
				configurable: true,
			});
		},
	}['bun-framework-next/renderDocument.tsx']
);

// next/dist/shared/lib/loadable-context.js
export var $c4530628 = $$m(
	{
		'next/dist/shared/lib/loadable-context.js': (module, exports) => {
			Object.defineProperty(exports, '__esModule', {
				value: true,
			});
			exports.LoadableContext = undefined;
			var _react = _interopRequireDefault(__require.d($a85977a5()));
			function _interopRequireDefault(obj) {
				return obj && obj.__esModule
					? obj
					: {
							default: obj,
					  };
			}
			const LoadableContext = _react.default.createContext(null);
			exports.LoadableContext = LoadableContext;
			LoadableContext.displayName = 'LoadableContext';
		},
	}['next/dist/shared/lib/loadable-context.js']
);

// next/dist/shared/lib/utils.js
export var $8496d550 = $$m(
	{
		'next/dist/shared/lib/utils.js': (module, exports) => {
			Object.defineProperty(exports, '__esModule', {
				value: true,
			});
			exports.execOnce = execOnce;
			exports.getLocationOrigin = getLocationOrigin;
			exports.getURL = getURL;
			exports.getDisplayName = getDisplayName;
			exports.isResSent = isResSent;
			exports.normalizeRepeatedSlashes = normalizeRepeatedSlashes;
			exports.loadGetInitialProps = loadGetInitialProps;
			exports.ST = exports.SP = exports.warnOnce = undefined;
			function execOnce(fn) {
				let used = false;
				let result;
				return (...args) => {
					if (!used) {
						used = true;
						result = fn(...args);
					}
					return result;
				};
			}
			function getLocationOrigin() {
				const { protocol, hostname, port } = window.location;
				return `${protocol}//${hostname}${port ? ':' + port : ''}`;
			}
			function getURL() {
				const { href } = window.location;
				const origin = getLocationOrigin();
				return href.substring(origin.length);
			}
			function getDisplayName(Component) {
				return typeof Component === 'string' ? Component : Component.displayName || Component.name || 'Unknown';
			}
			function isResSent(res) {
				return res.finished || res.headersSent;
			}
			function normalizeRepeatedSlashes(url) {
				const urlParts = url.split('?');
				const urlNoQuery = urlParts[0];
				return (
					urlNoQuery.replace(/\\/g, '/').replace(/\/\/+/g, '/') +
					(urlParts[1] ? `?${urlParts.slice(1).join('?')}` : '')
				);
			}
			async function loadGetInitialProps(App, ctx) {
				var ref;
				if ((ref = App.prototype) === null || ref === undefined ? undefined : ref.getInitialProps) {
					const message = `"${getDisplayName(
						App
					)}.getInitialProps()" is defined as an instance method - visit https://nextjs.org/docs/messages/get-initial-props-as-an-instance-method for more information.`;
					throw new Error(message);
				}
				const res = ctx.res || (ctx.ctx && ctx.ctx.res);
				if (!App.getInitialProps) {
					if (ctx.ctx && ctx.Component)
						return {
							pageProps: await loadGetInitialProps(ctx.Component, ctx.ctx),
						};
					return {};
				}
				const props = await App.getInitialProps(ctx);
				if (res && isResSent(res)) return props;
				if (!props) {
					const message = `"${getDisplayName(
						App
					)}.getInitialProps()" should resolve to an object. But found "${props}" instead.`;
					throw new Error(message);
				}
				if (Object.keys(props).length === 0 && !ctx.ctx)
					console.warn(
						`${getDisplayName(
							App
						)} returned an empty object from \`getInitialProps\`. This de-optimizes and prevents automatic static optimization. https://nextjs.org/docs/messages/empty-object-getInitialProps`
					);
				return props;
			}
			let warnOnce = (_) => {};
			exports.warnOnce = warnOnce;
			{
				const warnings = new Set();
				exports.warnOnce = warnOnce = (msg) => {
					if (!warnings.has(msg)) console.warn(msg);
					warnings.add(msg);
				};
			}
			const SP = typeof performance !== 'undefined';
			exports.SP = SP;
			const ST = SP && typeof performance.mark === 'function' && typeof performance.measure === 'function';
			exports.ST = ST;

			class DecodeError extends Error {}
			exports.DecodeError = DecodeError;
		},
	}['next/dist/shared/lib/utils.js']
);

// react/cjs/react.development.js
export var $36508365 = $$m(
	{
		'react/cjs/react.development.js': (module, exports) => {
			(function () {
				if (
					typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ !== 'undefined' &&
					typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart === 'function'
				)
					__REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
				var ReactVersion = '18.2.0';
				var REACT_ELEMENT_TYPE = Symbol.for('react.element');
				var REACT_PORTAL_TYPE = Symbol.for('react.portal');
				var REACT_FRAGMENT_TYPE = Symbol.for('react.fragment');
				var REACT_STRICT_MODE_TYPE = Symbol.for('react.strict_mode');
				var REACT_PROFILER_TYPE = Symbol.for('react.profiler');
				var REACT_PROVIDER_TYPE = Symbol.for('react.provider');
				var REACT_CONTEXT_TYPE = Symbol.for('react.context');
				var REACT_FORWARD_REF_TYPE = Symbol.for('react.forward_ref');
				var REACT_SUSPENSE_TYPE = Symbol.for('react.suspense');
				var REACT_SUSPENSE_LIST_TYPE = Symbol.for('react.suspense_list');
				var REACT_MEMO_TYPE = Symbol.for('react.memo');
				var REACT_LAZY_TYPE = Symbol.for('react.lazy');
				var REACT_OFFSCREEN_TYPE = Symbol.for('react.offscreen');
				var MAYBE_ITERATOR_SYMBOL = Symbol.iterator;
				var FAUX_ITERATOR_SYMBOL = '@@iterator';
				function getIteratorFn(maybeIterable) {
					if (maybeIterable === null || typeof maybeIterable !== 'object') return null;
					var maybeIterator =
						(MAYBE_ITERATOR_SYMBOL && maybeIterable[MAYBE_ITERATOR_SYMBOL]) ||
						maybeIterable[FAUX_ITERATOR_SYMBOL];
					if (typeof maybeIterator === 'function') return maybeIterator;
					return null;
				}
				var ReactCurrentDispatcher = {
					current: null,
				};
				var ReactCurrentBatchConfig = {
					transition: null,
				};
				var ReactCurrentActQueue = {
					current: null,
					isBatchingLegacy: false,
					didScheduleLegacyUpdate: false,
				};
				var ReactCurrentOwner = {
					current: null,
				};
				var ReactDebugCurrentFrame = {};
				var currentExtraStackFrame = null;
				function setExtraStackFrame(stack) {
					currentExtraStackFrame = stack;
				}
				{
					ReactDebugCurrentFrame.setExtraStackFrame = function (stack) {
						currentExtraStackFrame = stack;
					};
					ReactDebugCurrentFrame.getCurrentStack = null;
					ReactDebugCurrentFrame.getStackAddendum = function () {
						var stack = '';
						if (currentExtraStackFrame) stack += currentExtraStackFrame;
						var impl = ReactDebugCurrentFrame.getCurrentStack;
						if (impl) stack += impl() || '';
						return stack;
					};
				}
				var enableScopeAPI = false;
				var enableCacheElement = false;
				var enableTransitionTracing = false;
				var enableLegacyHidden = false;
				var enableDebugTracing = false;
				var ReactSharedInternals = {
					ReactCurrentDispatcher,
					ReactCurrentBatchConfig,
					ReactCurrentOwner,
				};
				{
					ReactSharedInternals.ReactDebugCurrentFrame = ReactDebugCurrentFrame;
					ReactSharedInternals.ReactCurrentActQueue = ReactCurrentActQueue;
				}
				function warn(format) {
					{
						for (
							var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1;
							_key < _len;
							_key++
						)
							args[_key - 1] = arguments[_key];
						printWarning('warn', format, args);
					}
				}
				function error(format) {
					{
						for (
							var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1;
							_key2 < _len2;
							_key2++
						)
							args[_key2 - 1] = arguments[_key2];
						printWarning('error', format, args);
					}
				}
				function printWarning(level, format, args) {
					{
						var ReactDebugCurrentFrame = ReactSharedInternals.ReactDebugCurrentFrame;
						var stack = ReactDebugCurrentFrame.getStackAddendum();
						if (stack !== '') {
							format += '%s';
							args = args.concat([stack]);
						}
						var argsWithFormat = args.map(function (item) {
							return String(item);
						});
						argsWithFormat.unshift('Warning: ' + format);
						Function.prototype.apply.call(console[level], console, argsWithFormat);
					}
				}
				var didWarnStateUpdateForUnmountedComponent = {};
				function warnNoop(publicInstance, callerName) {
					{
						var _constructor = publicInstance.constructor;
						var componentName =
							(_constructor && (_constructor.displayName || _constructor.name)) || 'ReactClass';
						var warningKey = componentName + '.' + callerName;
						if (didWarnStateUpdateForUnmountedComponent[warningKey]) return;
						error(
							"Can't call %s on a component that is not yet mounted. This is a no-op, but it might indicate a bug in your application. Instead, assign to `this.state` directly or define a `state = {};` class property with the desired state in the %s component.",
							callerName,
							componentName
						);
						didWarnStateUpdateForUnmountedComponent[warningKey] = true;
					}
				}
				var ReactNoopUpdateQueue = {
					isMounted: function (publicInstance) {
						return false;
					},
					enqueueForceUpdate: function (publicInstance, callback, callerName) {
						warnNoop(publicInstance, 'forceUpdate');
					},
					enqueueReplaceState: function (publicInstance, completeState, callback, callerName) {
						warnNoop(publicInstance, 'replaceState');
					},
					enqueueSetState: function (publicInstance, partialState, callback, callerName) {
						warnNoop(publicInstance, 'setState');
					},
				};
				var assign = Object.assign;
				var emptyObject = {};
				Object.freeze(emptyObject);
				function Component(props, context, updater) {
					this.props = props;
					this.context = context;
					this.refs = emptyObject;
					this.updater = updater || ReactNoopUpdateQueue;
				}
				Component.prototype.isReactComponent = {};
				Component.prototype.setState = function (partialState, callback) {
					if (typeof partialState !== 'object' && typeof partialState !== 'function' && partialState != null)
						throw new Error(
							'setState(...): takes an object of state variables to update or a function which returns an object of state variables.'
						);
					this.updater.enqueueSetState(this, partialState, callback, 'setState');
				};
				Component.prototype.forceUpdate = function (callback) {
					this.updater.enqueueForceUpdate(this, callback, 'forceUpdate');
				};
				{
					var deprecatedAPIs = {
						isMounted: [
							'isMounted',
							'Instead, make sure to clean up subscriptions and pending requests in componentWillUnmount to prevent memory leaks.',
						],
						replaceState: [
							'replaceState',
							'Refactor your code to use setState instead (see https://github.com/facebook/react/issues/3236).',
						],
					};
					var defineDeprecationWarning = function (methodName, info) {
						Object.defineProperty(Component.prototype, methodName, {
							get: function () {
								warn('%s(...) is deprecated in plain JavaScript React classes. %s', info[0], info[1]);
								return;
							},
						});
					};
					for (var fnName in deprecatedAPIs)
						if (deprecatedAPIs.hasOwnProperty(fnName))
							defineDeprecationWarning(fnName, deprecatedAPIs[fnName]);
				}
				function ComponentDummy() {}
				ComponentDummy.prototype = Component.prototype;
				function PureComponent(props, context, updater) {
					this.props = props;
					this.context = context;
					this.refs = emptyObject;
					this.updater = updater || ReactNoopUpdateQueue;
				}
				var pureComponentPrototype = (PureComponent.prototype = new ComponentDummy());
				pureComponentPrototype.constructor = PureComponent;
				assign(pureComponentPrototype, Component.prototype);
				pureComponentPrototype.isPureReactComponent = true;
				function createRef() {
					var refObject = {
						current: null,
					};
					Object.seal(refObject);
					return refObject;
				}
				var isArrayImpl = Array.isArray;
				function isArray(a) {
					return isArrayImpl(a);
				}
				function typeName(value) {
					{
						var hasToStringTag = typeof Symbol === 'function' && Symbol.toStringTag;
						var type = (hasToStringTag && value[Symbol.toStringTag]) || value.constructor.name || 'Object';
						return type;
					}
				}
				function willCoercionThrow(value) {
					try {
						testStringCoercion(value);
						return false;
					} catch (e) {
						return true;
					}
				}
				function testStringCoercion(value) {
					return '' + value;
				}
				function checkKeyStringCoercion(value) {
					if (willCoercionThrow(value)) {
						error(
							'The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.',
							typeName(value)
						);
						return testStringCoercion(value);
					}
				}
				function getWrappedName(outerType, innerType, wrapperName) {
					var displayName = outerType.displayName;
					if (displayName) return displayName;
					var functionName = innerType.displayName || innerType.name || '';
					return functionName !== '' ? wrapperName + '(' + functionName + ')' : wrapperName;
				}
				function getContextName(type) {
					return type.displayName || 'Context';
				}
				function getComponentNameFromType(type) {
					if (type == null) return null;
					if (typeof type.tag === 'number')
						error(
							'Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue.'
						);
					if (typeof type === 'function') return type.displayName || type.name || null;
					if (typeof type === 'string') return type;
					switch (type) {
						case REACT_FRAGMENT_TYPE:
							return 'Fragment';
						case REACT_PORTAL_TYPE:
							return 'Portal';
						case REACT_PROFILER_TYPE:
							return 'Profiler';
						case REACT_STRICT_MODE_TYPE:
							return 'StrictMode';
						case REACT_SUSPENSE_TYPE:
							return 'Suspense';
						case REACT_SUSPENSE_LIST_TYPE:
							return 'SuspenseList';
					}
					if (typeof type === 'object')
						switch (type.$$typeof) {
							case REACT_CONTEXT_TYPE:
								var context = type;
								return getContextName(context) + '.Consumer';
							case REACT_PROVIDER_TYPE:
								var provider = type;
								return getContextName(provider._context) + '.Provider';
							case REACT_FORWARD_REF_TYPE:
								return getWrappedName(type, type.render, 'ForwardRef');
							case REACT_MEMO_TYPE:
								var outerName = type.displayName || null;
								if (outerName !== null) return outerName;
								return getComponentNameFromType(type.type) || 'Memo';
							case REACT_LAZY_TYPE: {
								var lazyComponent = type;
								var payload = lazyComponent._payload;
								var init = lazyComponent._init;
								try {
									return getComponentNameFromType(init(payload));
								} catch (x) {
									return null;
								}
							}
						}
					return null;
				}
				var hasOwnProperty = Object.prototype.hasOwnProperty;
				var RESERVED_PROPS = {
					key: true,
					ref: true,
					__self: true,
					__source: true,
				};
				var specialPropKeyWarningShown, specialPropRefWarningShown, didWarnAboutStringRefs;
				didWarnAboutStringRefs = {};
				function hasValidRef(config) {
					if (hasOwnProperty.call(config, 'ref')) {
						var getter = Object.getOwnPropertyDescriptor(config, 'ref').get;
						if (getter && getter.isReactWarning) return false;
					}
					return config.ref !== undefined;
				}
				function hasValidKey(config) {
					if (hasOwnProperty.call(config, 'key')) {
						var getter = Object.getOwnPropertyDescriptor(config, 'key').get;
						if (getter && getter.isReactWarning) return false;
					}
					return config.key !== undefined;
				}
				function defineKeyPropWarningGetter(props, displayName) {
					var warnAboutAccessingKey = function () {
						if (!specialPropKeyWarningShown) {
							specialPropKeyWarningShown = true;
							error(
								'%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)',
								displayName
							);
						}
					};
					warnAboutAccessingKey.isReactWarning = true;
					Object.defineProperty(props, 'key', {
						get: warnAboutAccessingKey,
						configurable: true,
					});
				}
				function defineRefPropWarningGetter(props, displayName) {
					var warnAboutAccessingRef = function () {
						if (!specialPropRefWarningShown) {
							specialPropRefWarningShown = true;
							error(
								'%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)',
								displayName
							);
						}
					};
					warnAboutAccessingRef.isReactWarning = true;
					Object.defineProperty(props, 'ref', {
						get: warnAboutAccessingRef,
						configurable: true,
					});
				}
				function warnIfStringRefCannotBeAutoConverted(config) {
					if (
						typeof config.ref === 'string' &&
						ReactCurrentOwner.current &&
						config.__self &&
						ReactCurrentOwner.current.stateNode !== config.__self
					) {
						var componentName = getComponentNameFromType(ReactCurrentOwner.current.type);
						if (!didWarnAboutStringRefs[componentName]) {
							error(
								'Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref',
								componentName,
								config.ref
							);
							didWarnAboutStringRefs[componentName] = true;
						}
					}
				}
				var ReactElement = function (type, key, ref, self, source, owner, props) {
					var element = {
						$$typeof: REACT_ELEMENT_TYPE,
						type,
						key,
						ref,
						props,
						_owner: owner,
					};
					{
						element._store = {};
						Object.defineProperty(element._store, 'validated', {
							configurable: false,
							enumerable: false,
							writable: true,
							value: false,
						});
						Object.defineProperty(element, '_self', {
							configurable: false,
							enumerable: false,
							writable: false,
							value: self,
						});
						Object.defineProperty(element, '_source', {
							configurable: false,
							enumerable: false,
							writable: false,
							value: source,
						});
						if (Object.freeze) {
							Object.freeze(element.props);
							Object.freeze(element);
						}
					}
					return element;
				};
				function createElement(type, config, children) {
					var propName;
					var props = {};
					var key = null;
					var ref = null;
					var self = null;
					var source = null;
					if (config != null) {
						if (hasValidRef(config)) {
							ref = config.ref;
							warnIfStringRefCannotBeAutoConverted(config);
						}
						if (hasValidKey(config)) {
							checkKeyStringCoercion(config.key);
							key = '' + config.key;
						}
						self = config.__self === undefined ? null : config.__self;
						source = config.__source === undefined ? null : config.__source;
						for (propName in config)
							if (hasOwnProperty.call(config, propName) && !RESERVED_PROPS.hasOwnProperty(propName))
								props[propName] = config[propName];
					}
					var childrenLength = arguments.length - 2;
					if (childrenLength === 1) props.children = children;
					else if (childrenLength > 1) {
						var childArray = Array(childrenLength);
						for (var i = 0; i < childrenLength; i++) childArray[i] = arguments[i + 2];
						if (Object.freeze) Object.freeze(childArray);
						props.children = childArray;
					}
					if (type && type.defaultProps) {
						var defaultProps = type.defaultProps;
						for (propName in defaultProps)
							if (props[propName] === undefined) props[propName] = defaultProps[propName];
					}
					if (key || ref) {
						var displayName =
							typeof type === 'function' ? type.displayName || type.name || 'Unknown' : type;
						if (key) defineKeyPropWarningGetter(props, displayName);
						if (ref) defineRefPropWarningGetter(props, displayName);
					}
					return ReactElement(type, key, ref, self, source, ReactCurrentOwner.current, props);
				}
				function cloneAndReplaceKey(oldElement, newKey) {
					var newElement = ReactElement(
						oldElement.type,
						newKey,
						oldElement.ref,
						oldElement._self,
						oldElement._source,
						oldElement._owner,
						oldElement.props
					);
					return newElement;
				}
				function cloneElement(element, config, children) {
					if (element === null || element === undefined)
						throw new Error(
							'React.cloneElement(...): The argument must be a React element, but you passed ' +
								element +
								'.'
						);
					var propName;
					var props = assign({}, element.props);
					var key = element.key;
					var ref = element.ref;
					var self = element._self;
					var source = element._source;
					var owner = element._owner;
					if (config != null) {
						if (hasValidRef(config)) {
							ref = config.ref;
							owner = ReactCurrentOwner.current;
						}
						if (hasValidKey(config)) {
							checkKeyStringCoercion(config.key);
							key = '' + config.key;
						}
						var defaultProps;
						if (element.type && element.type.defaultProps) defaultProps = element.type.defaultProps;
						for (propName in config)
							if (hasOwnProperty.call(config, propName) && !RESERVED_PROPS.hasOwnProperty(propName))
								if (config[propName] === undefined && defaultProps !== undefined)
									props[propName] = defaultProps[propName];
								else props[propName] = config[propName];
					}
					var childrenLength = arguments.length - 2;
					if (childrenLength === 1) props.children = children;
					else if (childrenLength > 1) {
						var childArray = Array(childrenLength);
						for (var i = 0; i < childrenLength; i++) childArray[i] = arguments[i + 2];
						props.children = childArray;
					}
					return ReactElement(element.type, key, ref, self, source, owner, props);
				}
				function isValidElement(object) {
					return typeof object === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
				}
				var SEPARATOR = '.';
				var SUBSEPARATOR = ':';
				function escape(key) {
					var escapeRegex = /[=:]/g;
					var escaperLookup = {
						'=': '=0',
						':': '=2',
					};
					var escapedString = key.replace(escapeRegex, function (match) {
						return escaperLookup[match];
					});
					return '$' + escapedString;
				}
				var didWarnAboutMaps = false;
				var userProvidedKeyEscapeRegex = /\/+/g;
				function escapeUserProvidedKey(text) {
					return text.replace(userProvidedKeyEscapeRegex, '$&/');
				}
				function getElementKey(element, index) {
					if (typeof element === 'object' && element !== null && element.key != null) {
						checkKeyStringCoercion(element.key);
						return escape('' + element.key);
					}
					return index.toString(36);
				}
				function mapIntoArray(children, array, escapedPrefix, nameSoFar, callback) {
					var type = typeof children;
					if (type === 'undefined' || type === 'boolean') children = null;
					var invokeCallback = false;
					if (children === null) invokeCallback = true;
					else
						switch (type) {
							case 'string':
							case 'number':
								invokeCallback = true;
								break;
							case 'object':
								switch (children.$$typeof) {
									case REACT_ELEMENT_TYPE:
									case REACT_PORTAL_TYPE:
										invokeCallback = true;
								}
						}
					if (invokeCallback) {
						var _child = children;
						var mappedChild = callback(_child);
						var childKey = nameSoFar === '' ? SEPARATOR + getElementKey(_child, 0) : nameSoFar;
						if (isArray(mappedChild)) {
							var escapedChildKey = '';
							if (childKey != null) escapedChildKey = escapeUserProvidedKey(childKey) + '/';
							mapIntoArray(mappedChild, array, escapedChildKey, '', function (c) {
								return c;
							});
						} else if (mappedChild != null) {
							if (isValidElement(mappedChild)) {
								if (mappedChild.key && (!_child || _child.key !== mappedChild.key))
									checkKeyStringCoercion(mappedChild.key);
								mappedChild = cloneAndReplaceKey(
									mappedChild,
									escapedPrefix +
										(mappedChild.key && (!_child || _child.key !== mappedChild.key)
											? escapeUserProvidedKey('' + mappedChild.key) + '/'
											: '') +
										childKey
								);
							}
							array.push(mappedChild);
						}
						return 1;
					}
					var child;
					var nextName;
					var subtreeCount = 0;
					var nextNamePrefix = nameSoFar === '' ? SEPARATOR : nameSoFar + SUBSEPARATOR;
					if (isArray(children))
						for (var i = 0; i < children.length; i++) {
							child = children[i];
							nextName = nextNamePrefix + getElementKey(child, i);
							subtreeCount += mapIntoArray(child, array, escapedPrefix, nextName, callback);
						}
					else {
						var iteratorFn = getIteratorFn(children);
						if (typeof iteratorFn === 'function') {
							var iterableChildren = children;
							if (iteratorFn === iterableChildren.entries) {
								if (!didWarnAboutMaps)
									warn(
										'Using Maps as children is not supported. Use an array of keyed ReactElements instead.'
									);
								didWarnAboutMaps = true;
							}
							var iterator = iteratorFn.call(iterableChildren);
							var step;
							var ii = 0;
							while (!(step = iterator.next()).done) {
								child = step.value;
								nextName = nextNamePrefix + getElementKey(child, ii++);
								subtreeCount += mapIntoArray(child, array, escapedPrefix, nextName, callback);
							}
						} else if (type === 'object') {
							var childrenString = String(children);
							throw new Error(
								'Objects are not valid as a React child (found: ' +
									(childrenString === '[object Object]'
										? 'object with keys {' + Object.keys(children).join(', ') + '}'
										: childrenString) +
									'). If you meant to render a collection of children, use an array instead.'
							);
						}
					}
					return subtreeCount;
				}
				function mapChildren(children, func, context) {
					if (children == null) return children;
					var result = [];
					var count = 0;
					mapIntoArray(children, result, '', '', function (child) {
						return func.call(context, child, count++);
					});
					return result;
				}
				function countChildren(children) {
					var n = 0;
					mapChildren(children, function () {
						n++;
					});
					return n;
				}
				function forEachChildren(children, forEachFunc, forEachContext) {
					mapChildren(
						children,
						function () {
							forEachFunc.apply(this, arguments);
						},
						forEachContext
					);
				}
				function toArray(children) {
					return (
						mapChildren(children, function (child) {
							return child;
						}) || []
					);
				}
				function onlyChild(children) {
					if (!isValidElement(children))
						throw new Error('React.Children.only expected to receive a single React element child.');
					return children;
				}
				function createContext(defaultValue) {
					var context = {
						$$typeof: REACT_CONTEXT_TYPE,
						_currentValue: defaultValue,
						_currentValue2: defaultValue,
						_threadCount: 0,
						Provider: null,
						Consumer: null,
						_defaultValue: null,
						_globalName: null,
					};
					context.Provider = {
						$$typeof: REACT_PROVIDER_TYPE,
						_context: context,
					};
					var hasWarnedAboutUsingNestedContextConsumers = false;
					var hasWarnedAboutUsingConsumerProvider = false;
					var hasWarnedAboutDisplayNameOnConsumer = false;
					{
						var Consumer = {
							$$typeof: REACT_CONTEXT_TYPE,
							_context: context,
						};
						Object.defineProperties(Consumer, {
							Provider: {
								get: function () {
									if (!hasWarnedAboutUsingConsumerProvider) {
										hasWarnedAboutUsingConsumerProvider = true;
										error(
											'Rendering <Context.Consumer.Provider> is not supported and will be removed in a future major release. Did you mean to render <Context.Provider> instead?'
										);
									}
									return context.Provider;
								},
								set: function (_Provider) {
									context.Provider = _Provider;
								},
							},
							_currentValue: {
								get: function () {
									return context._currentValue;
								},
								set: function (_currentValue) {
									context._currentValue = _currentValue;
								},
							},
							_currentValue2: {
								get: function () {
									return context._currentValue2;
								},
								set: function (_currentValue2) {
									context._currentValue2 = _currentValue2;
								},
							},
							_threadCount: {
								get: function () {
									return context._threadCount;
								},
								set: function (_threadCount) {
									context._threadCount = _threadCount;
								},
							},
							Consumer: {
								get: function () {
									if (!hasWarnedAboutUsingNestedContextConsumers) {
										hasWarnedAboutUsingNestedContextConsumers = true;
										error(
											'Rendering <Context.Consumer.Consumer> is not supported and will be removed in a future major release. Did you mean to render <Context.Consumer> instead?'
										);
									}
									return context.Consumer;
								},
							},
							displayName: {
								get: function () {
									return context.displayName;
								},
								set: function (displayName) {
									if (!hasWarnedAboutDisplayNameOnConsumer) {
										warn(
											"Setting `displayName` on Context.Consumer has no effect. You should set it directly on the context with Context.displayName = '%s'.",
											displayName
										);
										hasWarnedAboutDisplayNameOnConsumer = true;
									}
								},
							},
						});
						context.Consumer = Consumer;
					}
					{
						context._currentRenderer = null;
						context._currentRenderer2 = null;
					}
					return context;
				}
				var Uninitialized = -1;
				var Pending = 0;
				var Resolved = 1;
				var Rejected = 2;
				function lazyInitializer(payload) {
					if (payload._status === Uninitialized) {
						var ctor = payload._result;
						var thenable = ctor();
						thenable.then(
							function (moduleObject) {
								if (payload._status === Pending || payload._status === Uninitialized) {
									var resolved = payload;
									resolved._status = Resolved;
									resolved._result = moduleObject;
								}
							},
							function (error) {
								if (payload._status === Pending || payload._status === Uninitialized) {
									var rejected = payload;
									rejected._status = Rejected;
									rejected._result = error;
								}
							}
						);
						if (payload._status === Uninitialized) {
							var pending = payload;
							pending._status = Pending;
							pending._result = thenable;
						}
					}
					if (payload._status === Resolved) {
						var moduleObject = payload._result;
						if (moduleObject === undefined)
							error(
								"lazy: Expected the result of a dynamic import() call. Instead received: %s\n\nYour code should look like: \n  const MyComponent = lazy(() => import('./MyComponent'))\n\nDid you accidentally put curly braces around the import?",
								moduleObject
							);
						if (!('default' in moduleObject))
							error(
								"lazy: Expected the result of a dynamic import() call. Instead received: %s\n\nYour code should look like: \n  const MyComponent = lazy(() => import('./MyComponent'))",
								moduleObject
							);
						return moduleObject.default;
					} else throw payload._result;
				}
				function lazy(ctor) {
					var payload = {
						_status: Uninitialized,
						_result: ctor,
					};
					var lazyType = {
						$$typeof: REACT_LAZY_TYPE,
						_payload: payload,
						_init: lazyInitializer,
					};
					{
						var defaultProps;
						var propTypes;
						Object.defineProperties(lazyType, {
							defaultProps: {
								configurable: true,
								get: function () {
									return defaultProps;
								},
								set: function (newDefaultProps) {
									error(
										'React.lazy(...): It is not supported to assign `defaultProps` to a lazy component import. Either specify them where the component is defined, or create a wrapping component around it.'
									);
									defaultProps = newDefaultProps;
									Object.defineProperty(lazyType, 'defaultProps', {
										enumerable: true,
									});
								},
							},
							propTypes: {
								configurable: true,
								get: function () {
									return propTypes;
								},
								set: function (newPropTypes) {
									error(
										'React.lazy(...): It is not supported to assign `propTypes` to a lazy component import. Either specify them where the component is defined, or create a wrapping component around it.'
									);
									propTypes = newPropTypes;
									Object.defineProperty(lazyType, 'propTypes', {
										enumerable: true,
									});
								},
							},
						});
					}
					return lazyType;
				}
				function forwardRef(render) {
					{
						if (render != null && render.$$typeof === REACT_MEMO_TYPE)
							error(
								'forwardRef requires a render function but received a `memo` component. Instead of forwardRef(memo(...)), use memo(forwardRef(...)).'
							);
						else if (typeof render !== 'function')
							error(
								'forwardRef requires a render function but was given %s.',
								render === null ? 'null' : typeof render
							);
						else if (render.length !== 0 && render.length !== 2)
							error(
								'forwardRef render functions accept exactly two parameters: props and ref. %s',
								render.length === 1
									? 'Did you forget to use the ref parameter?'
									: 'Any additional parameter will be undefined.'
							);
						if (render != null) {
							if (render.defaultProps != null || render.propTypes != null)
								error(
									'forwardRef render functions do not support propTypes or defaultProps. Did you accidentally pass a React component?'
								);
						}
					}
					var elementType = {
						$$typeof: REACT_FORWARD_REF_TYPE,
						render,
					};
					{
						var ownName;
						Object.defineProperty(elementType, 'displayName', {
							enumerable: false,
							configurable: true,
							get: function () {
								return ownName;
							},
							set: function (name) {
								ownName = name;
								if (!render.name && !render.displayName) render.displayName = name;
							},
						});
					}
					return elementType;
				}
				var REACT_MODULE_REFERENCE;
				REACT_MODULE_REFERENCE = Symbol.for('react.module.reference');
				function isValidElementType(type) {
					if (typeof type === 'string' || typeof type === 'function') return true;
					if (
						type === REACT_FRAGMENT_TYPE ||
						type === REACT_PROFILER_TYPE ||
						enableDebugTracing ||
						type === REACT_STRICT_MODE_TYPE ||
						type === REACT_SUSPENSE_TYPE ||
						type === REACT_SUSPENSE_LIST_TYPE ||
						enableLegacyHidden ||
						type === REACT_OFFSCREEN_TYPE ||
						enableScopeAPI ||
						enableCacheElement ||
						enableTransitionTracing
					)
						return true;
					if (typeof type === 'object' && type !== null) {
						if (
							type.$$typeof === REACT_LAZY_TYPE ||
							type.$$typeof === REACT_MEMO_TYPE ||
							type.$$typeof === REACT_PROVIDER_TYPE ||
							type.$$typeof === REACT_CONTEXT_TYPE ||
							type.$$typeof === REACT_FORWARD_REF_TYPE ||
							type.$$typeof === REACT_MODULE_REFERENCE ||
							type.getModuleId !== undefined
						)
							return true;
					}
					return false;
				}
				function memo(type, compare) {
					if (!isValidElementType(type))
						error(
							'memo: The first argument must be a component. Instead received: %s',
							type === null ? 'null' : typeof type
						);
					var elementType = {
						$$typeof: REACT_MEMO_TYPE,
						type,
						compare: compare === undefined ? null : compare,
					};
					{
						var ownName;
						Object.defineProperty(elementType, 'displayName', {
							enumerable: false,
							configurable: true,
							get: function () {
								return ownName;
							},
							set: function (name) {
								ownName = name;
								if (!type.name && !type.displayName) type.displayName = name;
							},
						});
					}
					return elementType;
				}
				function resolveDispatcher() {
					var dispatcher = ReactCurrentDispatcher.current;
					if (dispatcher === null)
						error(
							'Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:\n1. You might have mismatching versions of React and the renderer (such as React DOM)\n2. You might be breaking the Rules of Hooks\n3. You might have more than one copy of React in the same app\nSee https://reactjs.org/link/invalid-hook-call for tips about how to debug and fix this problem.'
						);
					return dispatcher;
				}
				function useContext(Context) {
					var dispatcher = resolveDispatcher();
					if (Context._context !== undefined) {
						var realContext = Context._context;
						if (realContext.Consumer === Context)
							error(
								'Calling useContext(Context.Consumer) is not supported, may cause bugs, and will be removed in a future major release. Did you mean to call useContext(Context) instead?'
							);
						else if (realContext.Provider === Context)
							error(
								'Calling useContext(Context.Provider) is not supported. Did you mean to call useContext(Context) instead?'
							);
					}
					return dispatcher.useContext(Context);
				}
				function useState(initialState) {
					var dispatcher = resolveDispatcher();
					return dispatcher.useState(initialState);
				}
				function useReducer(reducer, initialArg, init) {
					var dispatcher = resolveDispatcher();
					return dispatcher.useReducer(reducer, initialArg, init);
				}
				function useRef(initialValue) {
					var dispatcher = resolveDispatcher();
					return dispatcher.useRef(initialValue);
				}
				function useEffect(create, deps) {
					var dispatcher = resolveDispatcher();
					return dispatcher.useEffect(create, deps);
				}
				function useInsertionEffect(create, deps) {
					var dispatcher = resolveDispatcher();
					return dispatcher.useInsertionEffect(create, deps);
				}
				function useLayoutEffect(create, deps) {
					var dispatcher = resolveDispatcher();
					return dispatcher.useLayoutEffect(create, deps);
				}
				function useCallback(callback, deps) {
					var dispatcher = resolveDispatcher();
					return dispatcher.useCallback(callback, deps);
				}
				function useMemo(create, deps) {
					var dispatcher = resolveDispatcher();
					return dispatcher.useMemo(create, deps);
				}
				function useImperativeHandle(ref, create, deps) {
					var dispatcher = resolveDispatcher();
					return dispatcher.useImperativeHandle(ref, create, deps);
				}
				function useDebugValue(value, formatterFn) {
					{
						var dispatcher = resolveDispatcher();
						return dispatcher.useDebugValue(value, formatterFn);
					}
				}
				function useTransition() {
					var dispatcher = resolveDispatcher();
					return dispatcher.useTransition();
				}
				function useDeferredValue(value) {
					var dispatcher = resolveDispatcher();
					return dispatcher.useDeferredValue(value);
				}
				function useId() {
					var dispatcher = resolveDispatcher();
					return dispatcher.useId();
				}
				function useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot) {
					var dispatcher = resolveDispatcher();
					return dispatcher.useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
				}
				var disabledDepth = 0;
				var prevLog;
				var prevInfo;
				var prevWarn;
				var prevError;
				var prevGroup;
				var prevGroupCollapsed;
				var prevGroupEnd;
				function disabledLog() {}
				disabledLog.__reactDisabledLog = true;
				function disableLogs() {
					{
						if (disabledDepth === 0) {
							prevLog = console.log;
							prevInfo = console.info;
							prevWarn = console.warn;
							prevError = console.error;
							prevGroup = console.group;
							prevGroupCollapsed = console.groupCollapsed;
							prevGroupEnd = console.groupEnd;
							var props = {
								configurable: true,
								enumerable: true,
								value: disabledLog,
								writable: true,
							};
							Object.defineProperties(console, {
								info: props,
								log: props,
								warn: props,
								error: props,
								group: props,
								groupCollapsed: props,
								groupEnd: props,
							});
						}
						disabledDepth++;
					}
				}
				function reenableLogs() {
					{
						disabledDepth--;
						if (disabledDepth === 0) {
							var props = {
								configurable: true,
								enumerable: true,
								writable: true,
							};
							Object.defineProperties(console, {
								log: assign({}, props, {
									value: prevLog,
								}),
								info: assign({}, props, {
									value: prevInfo,
								}),
								warn: assign({}, props, {
									value: prevWarn,
								}),
								error: assign({}, props, {
									value: prevError,
								}),
								group: assign({}, props, {
									value: prevGroup,
								}),
								groupCollapsed: assign({}, props, {
									value: prevGroupCollapsed,
								}),
								groupEnd: assign({}, props, {
									value: prevGroupEnd,
								}),
							});
						}
						if (disabledDepth < 0)
							error('disabledDepth fell below zero. This is a bug in React. Please file an issue.');
					}
				}
				var ReactCurrentDispatcher$1 = ReactSharedInternals.ReactCurrentDispatcher;
				var prefix;
				function describeBuiltInComponentFrame(name, source, ownerFn) {
					{
						if (prefix === undefined)
							try {
								throw Error();
							} catch (x) {
								var match = x.stack.trim().match(/\n( *(at )?)/);
								prefix = (match && match[1]) || '';
							}
						return '\n' + prefix + name;
					}
				}
				var reentry = false;
				var componentFrameCache;
				{
					var PossiblyWeakMap = typeof WeakMap === 'function' ? WeakMap : Map;
					componentFrameCache = new PossiblyWeakMap();
				}
				function describeNativeComponentFrame(fn, construct) {
					if (!fn || reentry) return '';
					{
						var frame = componentFrameCache.get(fn);
						if (frame !== undefined) return frame;
					}
					var control;
					reentry = true;
					var previousPrepareStackTrace = Error.prepareStackTrace;
					Error.prepareStackTrace = undefined;
					var previousDispatcher;
					{
						previousDispatcher = ReactCurrentDispatcher$1.current;
						ReactCurrentDispatcher$1.current = null;
						disableLogs();
					}
					try {
						if (construct) {
							var Fake = function () {
								throw Error();
							};
							Object.defineProperty(Fake.prototype, 'props', {
								set: function () {
									throw Error();
								},
							});
							if (typeof Reflect === 'object' && Reflect.construct) {
								try {
									Reflect.construct(Fake, []);
								} catch (x) {
									control = x;
								}
								Reflect.construct(fn, [], Fake);
							} else {
								try {
									Fake.call();
								} catch (x) {
									control = x;
								}
								fn.call(Fake.prototype);
							}
						} else {
							try {
								throw Error();
							} catch (x) {
								control = x;
							}
							fn();
						}
					} catch (sample) {
						if (sample && control && typeof sample.stack === 'string') {
							var sampleLines = sample.stack.split('\n');
							var controlLines = control.stack.split('\n');
							var s = sampleLines.length - 1;
							var c = controlLines.length - 1;
							while (s >= 1 && c >= 0 && sampleLines[s] !== controlLines[c]) c--;
							for (; s >= 1 && c >= 0; s--, c--)
								if (sampleLines[s] !== controlLines[c]) {
									if (s !== 1 || c !== 1)
										do {
											s--;
											c--;
											if (c < 0 || sampleLines[s] !== controlLines[c]) {
												var _frame = '\n' + sampleLines[s].replace(' at new ', ' at ');
												if (fn.displayName && _frame.includes('<anonymous>'))
													_frame = _frame.replace('<anonymous>', fn.displayName);
												if (typeof fn === 'function') componentFrameCache.set(fn, _frame);
												return _frame;
											}
										} while (s >= 1 && c >= 0);
									break;
								}
						}
					} finally {
						reentry = false;
						{
							ReactCurrentDispatcher$1.current = previousDispatcher;
							reenableLogs();
						}
						Error.prepareStackTrace = previousPrepareStackTrace;
					}
					var name = fn ? fn.displayName || fn.name : '';
					var syntheticFrame = name ? describeBuiltInComponentFrame(name) : '';
					if (typeof fn === 'function') componentFrameCache.set(fn, syntheticFrame);
					return syntheticFrame;
				}
				function describeFunctionComponentFrame(fn, source, ownerFn) {
					return describeNativeComponentFrame(fn, false);
				}
				function shouldConstruct(Component) {
					var prototype = Component.prototype;
					return !!(prototype && prototype.isReactComponent);
				}
				function describeUnknownElementTypeFrameInDEV(type, source, ownerFn) {
					if (type == null) return '';
					if (typeof type === 'function') return describeNativeComponentFrame(type, shouldConstruct(type));
					if (typeof type === 'string') return describeBuiltInComponentFrame(type);
					switch (type) {
						case REACT_SUSPENSE_TYPE:
							return describeBuiltInComponentFrame('Suspense');
						case REACT_SUSPENSE_LIST_TYPE:
							return describeBuiltInComponentFrame('SuspenseList');
					}
					if (typeof type === 'object')
						switch (type.$$typeof) {
							case REACT_FORWARD_REF_TYPE:
								return describeFunctionComponentFrame(type.render);
							case REACT_MEMO_TYPE:
								return describeUnknownElementTypeFrameInDEV(type.type, source, ownerFn);
							case REACT_LAZY_TYPE: {
								var lazyComponent = type;
								var payload = lazyComponent._payload;
								var init = lazyComponent._init;
								try {
									return describeUnknownElementTypeFrameInDEV(init(payload), source, ownerFn);
								} catch (x) {}
							}
						}
					return '';
				}
				var loggedTypeFailures = {};
				var ReactDebugCurrentFrame$1 = ReactSharedInternals.ReactDebugCurrentFrame;
				function setCurrentlyValidatingElement(element) {
					if (element) {
						var owner = element._owner;
						var stack = describeUnknownElementTypeFrameInDEV(
							element.type,
							element._source,
							owner ? owner.type : null
						);
						ReactDebugCurrentFrame$1.setExtraStackFrame(stack);
					} else ReactDebugCurrentFrame$1.setExtraStackFrame(null);
				}
				function checkPropTypes(typeSpecs, values, location, componentName, element) {
					{
						var has = Function.call.bind(hasOwnProperty);
						for (var typeSpecName in typeSpecs)
							if (has(typeSpecs, typeSpecName)) {
								var error$1 = undefined;
								try {
									if (typeof typeSpecs[typeSpecName] !== 'function') {
										var err = Error(
											(componentName || 'React class') +
												': ' +
												location +
												' type `' +
												typeSpecName +
												'` is invalid; it must be a function, usually from the `prop-types` package, but received `' +
												typeof typeSpecs[typeSpecName] +
												'`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.'
										);
										err.name = 'Invariant Violation';
										throw err;
									}
									error$1 = typeSpecs[typeSpecName](
										values,
										typeSpecName,
										componentName,
										location,
										null,
										'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED'
									);
								} catch (ex) {
									error$1 = ex;
								}
								if (error$1 && !(error$1 instanceof Error)) {
									setCurrentlyValidatingElement(element);
									error(
										'%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).',
										componentName || 'React class',
										location,
										typeSpecName,
										typeof error$1
									);
									setCurrentlyValidatingElement(null);
								}
								if (error$1 instanceof Error && !(error$1.message in loggedTypeFailures)) {
									loggedTypeFailures[error$1.message] = true;
									setCurrentlyValidatingElement(element);
									error('Failed %s type: %s', location, error$1.message);
									setCurrentlyValidatingElement(null);
								}
							}
					}
				}
				function setCurrentlyValidatingElement$1(element) {
					if (element) {
						var owner = element._owner;
						var stack = describeUnknownElementTypeFrameInDEV(
							element.type,
							element._source,
							owner ? owner.type : null
						);
						setExtraStackFrame(stack);
					} else setExtraStackFrame(null);
				}
				var propTypesMisspellWarningShown;
				propTypesMisspellWarningShown = false;
				function getDeclarationErrorAddendum() {
					if (ReactCurrentOwner.current) {
						var name = getComponentNameFromType(ReactCurrentOwner.current.type);
						if (name) return '\n\nCheck the render method of `' + name + '`.';
					}
					return '';
				}
				function getSourceInfoErrorAddendum(source) {
					if (source !== undefined) {
						var fileName = source.fileName.replace(/^.*[\\\/]/, '');
						var lineNumber = source.lineNumber;
						return '\n\nCheck your code at ' + fileName + ':' + lineNumber + '.';
					}
					return '';
				}
				function getSourceInfoErrorAddendumForProps(elementProps) {
					if (elementProps !== null && elementProps !== undefined)
						return getSourceInfoErrorAddendum(elementProps.__source);
					return '';
				}
				var ownerHasKeyUseWarning = {};
				function getCurrentComponentErrorInfo(parentType) {
					var info = getDeclarationErrorAddendum();
					if (!info) {
						var parentName =
							typeof parentType === 'string' ? parentType : parentType.displayName || parentType.name;
						if (parentName) info = '\n\nCheck the top-level render call using <' + parentName + '>.';
					}
					return info;
				}
				function validateExplicitKey(element, parentType) {
					if (!element._store || element._store.validated || element.key != null) return;
					element._store.validated = true;
					var currentComponentErrorInfo = getCurrentComponentErrorInfo(parentType);
					if (ownerHasKeyUseWarning[currentComponentErrorInfo]) return;
					ownerHasKeyUseWarning[currentComponentErrorInfo] = true;
					var childOwner = '';
					if (element && element._owner && element._owner !== ReactCurrentOwner.current)
						childOwner =
							' It was passed a child from ' + getComponentNameFromType(element._owner.type) + '.';
					{
						setCurrentlyValidatingElement$1(element);
						error(
							'Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.',
							currentComponentErrorInfo,
							childOwner
						);
						setCurrentlyValidatingElement$1(null);
					}
				}
				function validateChildKeys(node, parentType) {
					if (typeof node !== 'object') return;
					if (isArray(node))
						for (var i = 0; i < node.length; i++) {
							var child = node[i];
							if (isValidElement(child)) validateExplicitKey(child, parentType);
						}
					else if (isValidElement(node)) {
						if (node._store) node._store.validated = true;
					} else if (node) {
						var iteratorFn = getIteratorFn(node);
						if (typeof iteratorFn === 'function') {
							if (iteratorFn !== node.entries) {
								var iterator = iteratorFn.call(node);
								var step;
								while (!(step = iterator.next()).done)
									if (isValidElement(step.value)) validateExplicitKey(step.value, parentType);
							}
						}
					}
				}
				function validatePropTypes(element) {
					{
						var type = element.type;
						if (type === null || type === undefined || typeof type === 'string') return;
						var propTypes;
						if (typeof type === 'function') propTypes = type.propTypes;
						else if (
							typeof type === 'object' &&
							(type.$$typeof === REACT_FORWARD_REF_TYPE || type.$$typeof === REACT_MEMO_TYPE)
						)
							propTypes = type.propTypes;
						else return;
						if (propTypes) {
							var name = getComponentNameFromType(type);
							checkPropTypes(propTypes, element.props, 'prop', name, element);
						} else if (type.PropTypes !== undefined && !propTypesMisspellWarningShown) {
							propTypesMisspellWarningShown = true;
							var _name = getComponentNameFromType(type);
							error(
								'Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?',
								_name || 'Unknown'
							);
						}
						if (typeof type.getDefaultProps === 'function' && !type.getDefaultProps.isReactClassApproved)
							error(
								'getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.'
							);
					}
				}
				function validateFragmentProps(fragment) {
					{
						var keys = Object.keys(fragment.props);
						for (var i = 0; i < keys.length; i++) {
							var key = keys[i];
							if (key !== 'children' && key !== 'key') {
								setCurrentlyValidatingElement$1(fragment);
								error(
									'Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.',
									key
								);
								setCurrentlyValidatingElement$1(null);
								break;
							}
						}
						if (fragment.ref !== null) {
							setCurrentlyValidatingElement$1(fragment);
							error('Invalid attribute `ref` supplied to `React.Fragment`.');
							setCurrentlyValidatingElement$1(null);
						}
					}
				}
				function createElementWithValidation(type, props, children) {
					var validType = isValidElementType(type);
					if (!validType) {
						var info = '';
						if (
							type === undefined ||
							(typeof type === 'object' && type !== null && Object.keys(type).length === 0)
						)
							info +=
								" You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.";
						var sourceInfo = getSourceInfoErrorAddendumForProps(props);
						if (sourceInfo) info += sourceInfo;
						else info += getDeclarationErrorAddendum();
						var typeString;
						if (type === null) typeString = 'null';
						else if (isArray(type)) typeString = 'array';
						else if (type !== undefined && type.$$typeof === REACT_ELEMENT_TYPE) {
							typeString = '<' + (getComponentNameFromType(type.type) || 'Unknown') + ' />';
							info = ' Did you accidentally export a JSX literal instead of a component?';
						} else typeString = typeof type;
						error(
							'React.createElement: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s',
							typeString,
							info
						);
					}
					var element = createElement.apply(this, arguments);
					if (element == null) return element;
					if (validType) for (var i = 2; i < arguments.length; i++) validateChildKeys(arguments[i], type);
					if (type === REACT_FRAGMENT_TYPE) validateFragmentProps(element);
					else validatePropTypes(element);
					return element;
				}
				var didWarnAboutDeprecatedCreateFactory = false;
				function createFactoryWithValidation(type) {
					var validatedFactory = createElementWithValidation.bind(null, type);
					validatedFactory.type = type;
					{
						if (!didWarnAboutDeprecatedCreateFactory) {
							didWarnAboutDeprecatedCreateFactory = true;
							warn(
								'React.createFactory() is deprecated and will be removed in a future major release. Consider using JSX or use React.createElement() directly instead.'
							);
						}
						Object.defineProperty(validatedFactory, 'type', {
							enumerable: false,
							get: function () {
								warn(
									'Factory.type is deprecated. Access the class directly before passing it to createFactory.'
								);
								Object.defineProperty(this, 'type', {
									value: type,
								});
								return type;
							},
						});
					}
					return validatedFactory;
				}
				function cloneElementWithValidation(element, props, children) {
					var newElement = cloneElement.apply(this, arguments);
					for (var i = 2; i < arguments.length; i++) validateChildKeys(arguments[i], newElement.type);
					validatePropTypes(newElement);
					return newElement;
				}
				function startTransition(scope, options) {
					var prevTransition = ReactCurrentBatchConfig.transition;
					ReactCurrentBatchConfig.transition = {};
					var currentTransition = ReactCurrentBatchConfig.transition;
					ReactCurrentBatchConfig.transition._updatedFibers = new Set();
					try {
						scope();
					} finally {
						ReactCurrentBatchConfig.transition = prevTransition;
						if (prevTransition === null && currentTransition._updatedFibers) {
							var updatedFibersCount = currentTransition._updatedFibers.size;
							if (updatedFibersCount > 10)
								warn(
									'Detected a large number of updates inside startTransition. If this is due to a subscription please re-write it to use React provided hooks. Otherwise concurrent mode guarantees are off the table.'
								);
							currentTransition._updatedFibers.clear();
						}
					}
				}
				var didWarnAboutMessageChannel = false;
				var enqueueTaskImpl = null;
				function enqueueTask(task) {
					if (enqueueTaskImpl === null)
						try {
							var requireString = ('require' + Math.random()).slice(0, 7);
							var nodeRequire = module && module[requireString];
							enqueueTaskImpl = nodeRequire.call(module, 'timers').setImmediate;
						} catch (_err) {
							enqueueTaskImpl = function (callback) {
								if (didWarnAboutMessageChannel === false) {
									didWarnAboutMessageChannel = true;
									if (typeof MessageChannel === 'undefined')
										error(
											'This browser does not have a MessageChannel implementation, so enqueuing tasks via await act(async () => ...) will fail. Please file an issue at https://github.com/facebook/react/issues if you encounter this warning.'
										);
								}
								var channel = new MessageChannel();
								channel.port1.onmessage = callback;
								channel.port2.postMessage(undefined);
							};
						}
					return enqueueTaskImpl(task);
				}
				var actScopeDepth = 0;
				var didWarnNoAwaitAct = false;
				function act(callback) {
					{
						var prevActScopeDepth = actScopeDepth;
						actScopeDepth++;
						if (ReactCurrentActQueue.current === null) ReactCurrentActQueue.current = [];
						var prevIsBatchingLegacy = ReactCurrentActQueue.isBatchingLegacy;
						var result;
						try {
							ReactCurrentActQueue.isBatchingLegacy = true;
							result = callback();
							if (!prevIsBatchingLegacy && ReactCurrentActQueue.didScheduleLegacyUpdate) {
								var queue = ReactCurrentActQueue.current;
								if (queue !== null) {
									ReactCurrentActQueue.didScheduleLegacyUpdate = false;
									flushActQueue(queue);
								}
							}
						} catch (error) {
							popActScope(prevActScopeDepth);
							throw error;
						} finally {
							ReactCurrentActQueue.isBatchingLegacy = prevIsBatchingLegacy;
						}
						if (result !== null && typeof result === 'object' && typeof result.then === 'function') {
							var thenableResult = result;
							var wasAwaited = false;
							var thenable = {
								then: function (resolve, reject) {
									wasAwaited = true;
									thenableResult.then(
										function (returnValue) {
											popActScope(prevActScopeDepth);
											if (actScopeDepth === 0)
												recursivelyFlushAsyncActWork(returnValue, resolve, reject);
											else resolve(returnValue);
										},
										function (error) {
											popActScope(prevActScopeDepth);
											reject(error);
										}
									);
								},
							};
							if (!didWarnNoAwaitAct && typeof Promise !== 'undefined')
								Promise.resolve()
									.then(function () {})
									.then(function () {
										if (!wasAwaited) {
											didWarnNoAwaitAct = true;
											error(
												'You called act(async () => ...) without await. This could lead to unexpected testing behaviour, interleaving multiple act calls and mixing their scopes. You should - await act(async () => ...);'
											);
										}
									});
							return thenable;
						} else {
							var returnValue = result;
							popActScope(prevActScopeDepth);
							if (actScopeDepth === 0) {
								var _queue = ReactCurrentActQueue.current;
								if (_queue !== null) {
									flushActQueue(_queue);
									ReactCurrentActQueue.current = null;
								}
								var _thenable = {
									then: function (resolve, reject) {
										if (ReactCurrentActQueue.current === null) {
											ReactCurrentActQueue.current = [];
											recursivelyFlushAsyncActWork(returnValue, resolve, reject);
										} else resolve(returnValue);
									},
								};
								return _thenable;
							} else {
								var _thenable2 = {
									then: function (resolve, reject) {
										resolve(returnValue);
									},
								};
								return _thenable2;
							}
						}
					}
				}
				function popActScope(prevActScopeDepth) {
					{
						if (prevActScopeDepth !== actScopeDepth - 1)
							error(
								'You seem to have overlapping act() calls, this is not supported. Be sure to await previous act() calls before making a new one. '
							);
						actScopeDepth = prevActScopeDepth;
					}
				}
				function recursivelyFlushAsyncActWork(returnValue, resolve, reject) {
					{
						var queue = ReactCurrentActQueue.current;
						if (queue !== null)
							try {
								flushActQueue(queue);
								enqueueTask(function () {
									if (queue.length === 0) {
										ReactCurrentActQueue.current = null;
										resolve(returnValue);
									} else recursivelyFlushAsyncActWork(returnValue, resolve, reject);
								});
							} catch (error) {
								reject(error);
							}
						else resolve(returnValue);
					}
				}
				var isFlushing = false;
				function flushActQueue(queue) {
					if (!isFlushing) {
						isFlushing = true;
						var i = 0;
						try {
							for (; i < queue.length; i++) {
								var callback = queue[i];
								do callback = callback(true);
								while (callback !== null);
							}
							queue.length = 0;
						} catch (error) {
							queue = queue.slice(i + 1);
							throw error;
						} finally {
							isFlushing = false;
						}
					}
				}
				var createElement$1 = createElementWithValidation;
				var cloneElement$1 = cloneElementWithValidation;
				var createFactory = createFactoryWithValidation;
				var Children = {
					map: mapChildren,
					forEach: forEachChildren,
					count: countChildren,
					toArray,
					only: onlyChild,
				};
				exports.Children = Children;
				exports.Component = Component;
				exports.Fragment = REACT_FRAGMENT_TYPE;
				exports.Profiler = REACT_PROFILER_TYPE;
				exports.PureComponent = PureComponent;
				exports.StrictMode = REACT_STRICT_MODE_TYPE;
				exports.Suspense = REACT_SUSPENSE_TYPE;
				exports.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = ReactSharedInternals;
				exports.cloneElement = cloneElement$1;
				exports.createContext = createContext;
				exports.createElement = createElement$1;
				exports.createFactory = createFactory;
				exports.createRef = createRef;
				exports.forwardRef = forwardRef;
				exports.isValidElement = isValidElement;
				exports.lazy = lazy;
				exports.memo = memo;
				exports.startTransition = startTransition;
				exports.unstable_act = act;
				exports.useCallback = useCallback;
				exports.useContext = useContext;
				exports.useDebugValue = useDebugValue;
				exports.useDeferredValue = useDeferredValue;
				exports.useEffect = useEffect;
				exports.useId = useId;
				exports.useImperativeHandle = useImperativeHandle;
				exports.useInsertionEffect = useInsertionEffect;
				exports.useLayoutEffect = useLayoutEffect;
				exports.useMemo = useMemo;
				exports.useReducer = useReducer;
				exports.useRef = useRef;
				exports.useState = useState;
				exports.useSyncExternalStore = useSyncExternalStore;
				exports.useTransition = useTransition;
				exports.version = ReactVersion;
				if (
					typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ !== 'undefined' &&
					typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop === 'function'
				)
					__REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
			})();
		},
	}['react/cjs/react.development.js']
);

// buffer/index.js
export var $d6cb1a1f = $$m(
	{
		'buffer/index.js': (module, exports) => {
			var xr = Object.create;
			var D = Object.defineProperty;
			var Br = Object.getOwnPropertyDescriptor;
			var Er = Object.getOwnPropertyNames;
			var dr = Object.getPrototypeOf;
			var gr = Object.prototype.hasOwnProperty;
			var X = (i) => D(i, '__esModule', { value: true });
			var $ = (i, r) => () => (r || i((r = { exports: {} }).exports, r), r.exports);
			var C = (i, r, t, n) => {
				if ((r && typeof r == 'object') || typeof r == 'function')
					for (let e of Er(r))
						!gr.call(i, e) &&
							(t || e !== 'default') &&
							D(i, e, { get: () => r[e], enumerable: !(n = Br(r, e)) || n.enumerable });
				return i;
			};
			var mr = (i, r) =>
				C(
					X(
						D(
							i != null ? xr(dr(i)) : {},
							'default',
							!r && i && i.__esModule
								? { get: () => i.default, enumerable: true }
								: { value: i, enumerable: true }
						)
					),
					i
				);
			var Ir = (
				(i) => (r, t) =>
					(i && i.get(r)) || ((t = C(X({}), r, 1)), i && i.set(r, t), t)
			)(typeof WeakMap != 'undefined' ? new WeakMap() : 0);
			var K = $((_) => {
				_.byteLength = Ar;
				_.toByteArray = Rr;
				_.fromByteArray = Sr;
				var B = [],
					w = [],
					Fr = typeof Uint8Array != 'undefined' ? Uint8Array : Array,
					b = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/';
				for (m = 0, z = b.length; m < z; ++m) (B[m] = b[m]), (w[b.charCodeAt(m)] = m);
				var m, z;
				w['-'.charCodeAt(0)] = 62;
				w['_'.charCodeAt(0)] = 63;
				function J(i) {
					var r = i.length;
					if (r % 4 > 0) throw new Error('Invalid string. Length must be a multiple of 4');
					var t = i.indexOf('=');
					t === -1 && (t = r);
					var n = t === r ? 0 : 4 - (t % 4);
					return [t, n];
				}
				function Ar(i) {
					var r = J(i),
						t = r[0],
						n = r[1];
					return ((t + n) * 3) / 4 - n;
				}
				function Ur(i, r, t) {
					return ((r + t) * 3) / 4 - t;
				}
				function Rr(i) {
					var r,
						t = J(i),
						n = t[0],
						e = t[1],
						o = new Fr(Ur(i, n, e)),
						u = 0,
						f = e > 0 ? n - 4 : n,
						c;
					for (c = 0; c < f; c += 4)
						(r =
							(w[i.charCodeAt(c)] << 18) |
							(w[i.charCodeAt(c + 1)] << 12) |
							(w[i.charCodeAt(c + 2)] << 6) |
							w[i.charCodeAt(c + 3)]),
							(o[u++] = (r >> 16) & 255),
							(o[u++] = (r >> 8) & 255),
							(o[u++] = r & 255);
					return (
						e === 2 &&
							((r = (w[i.charCodeAt(c)] << 2) | (w[i.charCodeAt(c + 1)] >> 4)), (o[u++] = r & 255)),
						e === 1 &&
							((r =
								(w[i.charCodeAt(c)] << 10) |
								(w[i.charCodeAt(c + 1)] << 4) |
								(w[i.charCodeAt(c + 2)] >> 2)),
							(o[u++] = (r >> 8) & 255),
							(o[u++] = r & 255)),
						o
					);
				}
				function Tr(i) {
					return B[(i >> 18) & 63] + B[(i >> 12) & 63] + B[(i >> 6) & 63] + B[i & 63];
				}
				function Cr(i, r, t) {
					for (var n, e = [], o = r; o < t; o += 3)
						(n = ((i[o] << 16) & 16711680) + ((i[o + 1] << 8) & 65280) + (i[o + 2] & 255)), e.push(Tr(n));
					return e.join('');
				}
				function Sr(i) {
					for (var r, t = i.length, n = t % 3, e = [], o = 16383, u = 0, f = t - n; u < f; u += o)
						e.push(Cr(i, u, u + o > f ? f : u + o));
					return (
						n === 1
							? ((r = i[t - 1]), e.push(B[r >> 2] + B[(r << 4) & 63] + '=='))
							: n === 2 &&
							  ((r = (i[t - 2] << 8) + i[t - 1]),
							  e.push(B[r >> 10] + B[(r >> 4) & 63] + B[(r << 2) & 63] + '=')),
						e.join('')
					);
				}
			});
			var Z = $((P) => {
				P.read = function (i, r, t, n, e) {
					var o,
						u,
						f = e * 8 - n - 1,
						c = (1 << f) - 1,
						l = c >> 1,
						s = -7,
						p = t ? e - 1 : 0,
						F = t ? -1 : 1,
						x = i[r + p];
					for (
						p += F, o = x & ((1 << -s) - 1), x >>= -s, s += f;
						s > 0;
						o = o * 256 + i[r + p], p += F, s -= 8
					) {}
					for (u = o & ((1 << -s) - 1), o >>= -s, s += n; s > 0; u = u * 256 + i[r + p], p += F, s -= 8) {}
					if (o === 0) o = 1 - l;
					else {
						if (o === c) return u ? NaN : (x ? -1 : 1) * (1 / 0);
						(u = u + Math.pow(2, n)), (o = o - l);
					}
					return (x ? -1 : 1) * u * Math.pow(2, o - n);
				};
				P.write = function (i, r, t, n, e, o) {
					var u,
						f,
						c,
						l = o * 8 - e - 1,
						s = (1 << l) - 1,
						p = s >> 1,
						F = e === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0,
						x = n ? 0 : o - 1,
						k = n ? 1 : -1,
						wr = r < 0 || (r === 0 && 1 / r < 0) ? 1 : 0;
					for (
						r = Math.abs(r),
							isNaN(r) || r === 1 / 0
								? ((f = isNaN(r) ? 1 : 0), (u = s))
								: ((u = Math.floor(Math.log(r) / Math.LN2)),
								  r * (c = Math.pow(2, -u)) < 1 && (u--, (c *= 2)),
								  u + p >= 1 ? (r += F / c) : (r += F * Math.pow(2, 1 - p)),
								  r * c >= 2 && (u++, (c /= 2)),
								  u + p >= s
										? ((f = 0), (u = s))
										: u + p >= 1
										? ((f = (r * c - 1) * Math.pow(2, e)), (u = u + p))
										: ((f = r * Math.pow(2, p - 1) * Math.pow(2, e)), (u = 0)));
						e >= 8;
						i[t + x] = f & 255, x += k, f /= 256, e -= 8
					) {}
					for (u = (u << e) | f, l += e; l > 0; i[t + x] = u & 255, x += k, u /= 256, l -= 8) {}
					i[t + x - k] |= wr * 128;
				};
			});
			var yr = $((T) => {
				var O = K(),
					A = Z(),
					Q =
						typeof Symbol == 'function' && typeof Symbol.for == 'function'
							? Symbol.for('nodejs.util.inspect.custom')
							: null;
				T.Buffer = h;
				T.SlowBuffer = Dr;
				T.INSPECT_MAX_BYTES = 50;
				var L = 2147483647;
				T.kMaxLength = L;
				h.TYPED_ARRAY_SUPPORT = _r();
				!h.TYPED_ARRAY_SUPPORT &&
					typeof console != 'undefined' &&
					typeof console.error == 'function' &&
					console.error(
						'This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support.'
					);
				function _r() {
					try {
						let i = new Uint8Array(1),
							r = {
								foo: function () {
									return 42;
								},
							};
						return (
							Object.setPrototypeOf(r, Uint8Array.prototype), Object.setPrototypeOf(i, r), i.foo() === 42
						);
					} catch {
						return false;
					}
				}
				Object.defineProperty(h.prototype, 'parent', {
					enumerable: true,
					get: function () {
						if (h.isBuffer(this)) return this.buffer;
					},
				});
				Object.defineProperty(h.prototype, 'offset', {
					enumerable: true,
					get: function () {
						if (h.isBuffer(this)) return this.byteOffset;
					},
				});
				function d(i) {
					if (i > L) throw new RangeError('The value "' + i + '" is invalid for option "size"');
					let r = new Uint8Array(i);
					return Object.setPrototypeOf(r, h.prototype), r;
				}
				function h(i, r, t) {
					if (typeof i == 'number') {
						if (typeof r == 'string')
							throw new TypeError('The "string" argument must be of type string. Received type number');
						return G(i);
					}
					return v(i, r, t);
				}
				h.poolSize = 8192;
				function v(i, r, t) {
					if (typeof i == 'string') return Nr(i, r);
					if (ArrayBuffer.isView(i)) return Mr(i);
					if (i == null)
						throw new TypeError(
							'The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type ' +
								typeof i
						);
					if (
						E(i, ArrayBuffer) ||
						(i && E(i.buffer, ArrayBuffer)) ||
						(typeof SharedArrayBuffer != 'undefined' &&
							(E(i, SharedArrayBuffer) || (i && E(i.buffer, SharedArrayBuffer))))
					)
						return q(i, r, t);
					if (typeof i == 'number')
						throw new TypeError('The "value" argument must not be of type number. Received type number');
					let n = i.valueOf && i.valueOf();
					if (n != null && n !== i) return h.from(n, r, t);
					let e = kr(i);
					if (e) return e;
					if (
						typeof Symbol != 'undefined' &&
						Symbol.toPrimitive != null &&
						typeof i[Symbol.toPrimitive] == 'function'
					)
						return h.from(i[Symbol.toPrimitive]('string'), r, t);
					throw new TypeError(
						'The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type ' +
							typeof i
					);
				}
				h.from = function (i, r, t) {
					return v(i, r, t);
				};
				Object.setPrototypeOf(h.prototype, Uint8Array.prototype);
				Object.setPrototypeOf(h, Uint8Array);
				function rr(i) {
					if (typeof i != 'number') throw new TypeError('"size" argument must be of type number');
					if (i < 0) throw new RangeError('The value "' + i + '" is invalid for option "size"');
				}
				function Lr(i, r, t) {
					return (
						rr(i),
						i <= 0 ? d(i) : r !== undefined ? (typeof t == 'string' ? d(i).fill(r, t) : d(i).fill(r)) : d(i)
					);
				}
				h.alloc = function (i, r, t) {
					return Lr(i, r, t);
				};
				function G(i) {
					return rr(i), d(i < 0 ? 0 : W(i) | 0);
				}
				h.allocUnsafe = function (i) {
					return G(i);
				};
				h.allocUnsafeSlow = function (i) {
					return G(i);
				};
				function Nr(i, r) {
					if (((typeof r != 'string' || r === '') && (r = 'utf8'), !h.isEncoding(r)))
						throw new TypeError('Unknown encoding: ' + r);
					let t = tr(i, r) | 0,
						n = d(t),
						e = n.write(i, r);
					return e !== t && (n = n.slice(0, e)), n;
				}
				function Y(i) {
					let r = i.length < 0 ? 0 : W(i.length) | 0,
						t = d(r);
					for (let n = 0; n < r; n += 1) t[n] = i[n] & 255;
					return t;
				}
				function Mr(i) {
					if (E(i, Uint8Array)) {
						let r = new Uint8Array(i);
						return q(r.buffer, r.byteOffset, r.byteLength);
					}
					return Y(i);
				}
				function q(i, r, t) {
					if (r < 0 || i.byteLength < r) throw new RangeError('"offset" is outside of buffer bounds');
					if (i.byteLength < r + (t || 0)) throw new RangeError('"length" is outside of buffer bounds');
					let n;
					return (
						r === undefined && t === undefined
							? (n = new Uint8Array(i))
							: t === undefined
							? (n = new Uint8Array(i, r))
							: (n = new Uint8Array(i, r, t)),
						Object.setPrototypeOf(n, h.prototype),
						n
					);
				}
				function kr(i) {
					if (h.isBuffer(i)) {
						let r = W(i.length) | 0,
							t = d(r);
						return t.length === 0 || i.copy(t, 0, 0, r), t;
					}
					if (i.length !== undefined) return typeof i.length != 'number' || V(i.length) ? d(0) : Y(i);
					if (i.type === 'Buffer' && Array.isArray(i.data)) return Y(i.data);
				}
				function W(i) {
					if (i >= L)
						throw new RangeError(
							'Attempt to allocate Buffer larger than maximum size: 0x' + L.toString(16) + ' bytes'
						);
					return i | 0;
				}
				function Dr(i) {
					return +i != i && (i = 0), h.alloc(+i);
				}
				h.isBuffer = function (r) {
					return r != null && r._isBuffer === true && r !== h.prototype;
				};
				h.compare = function (r, t) {
					if (
						(E(r, Uint8Array) && (r = h.from(r, r.offset, r.byteLength)),
						E(t, Uint8Array) && (t = h.from(t, t.offset, t.byteLength)),
						!h.isBuffer(r) || !h.isBuffer(t))
					)
						throw new TypeError('The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array');
					if (r === t) return 0;
					let n = r.length,
						e = t.length;
					for (let o = 0, u = Math.min(n, e); o < u; ++o)
						if (r[o] !== t[o]) {
							(n = r[o]), (e = t[o]);
							break;
						}
					return n < e ? -1 : e < n ? 1 : 0;
				};
				h.isEncoding = function (r) {
					switch (String(r).toLowerCase()) {
						case 'hex':
						case 'utf8':
						case 'utf-8':
						case 'ascii':
						case 'latin1':
						case 'binary':
						case 'base64':
						case 'ucs2':
						case 'ucs-2':
						case 'utf16le':
						case 'utf-16le':
							return true;
						default:
							return false;
					}
				};
				h.concat = function (r, t) {
					if (!Array.isArray(r)) throw new TypeError('"list" argument must be an Array of Buffers');
					if (r.length === 0) return h.alloc(0);
					let n;
					if (t === undefined) for (t = 0, n = 0; n < r.length; ++n) t += r[n].length;
					let e = h.allocUnsafe(t),
						o = 0;
					for (n = 0; n < r.length; ++n) {
						let u = r[n];
						if (E(u, Uint8Array))
							o + u.length > e.length
								? (h.isBuffer(u) || (u = h.from(u)), u.copy(e, o))
								: Uint8Array.prototype.set.call(e, u, o);
						else if (h.isBuffer(u)) u.copy(e, o);
						else throw new TypeError('"list" argument must be an Array of Buffers');
						o += u.length;
					}
					return e;
				};
				function tr(i, r) {
					if (h.isBuffer(i)) return i.length;
					if (ArrayBuffer.isView(i) || E(i, ArrayBuffer)) return i.byteLength;
					if (typeof i != 'string')
						throw new TypeError(
							'The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type ' +
								typeof i
						);
					let t = i.length,
						n = arguments.length > 2 && arguments[2] === true;
					if (!n && t === 0) return 0;
					let e = false;
					for (;;)
						switch (r) {
							case 'ascii':
							case 'latin1':
							case 'binary':
								return t;
							case 'utf8':
							case 'utf-8':
								return H(i).length;
							case 'ucs2':
							case 'ucs-2':
							case 'utf16le':
							case 'utf-16le':
								return t * 2;
							case 'hex':
								return t >>> 1;
							case 'base64':
								return ar(i).length;
							default:
								if (e) return n ? -1 : H(i).length;
								(r = ('' + r).toLowerCase()), (e = true);
						}
				}
				h.byteLength = tr;
				function $r(i, r, t) {
					let n = false;
					if (
						((r === undefined || r < 0) && (r = 0),
						r > this.length ||
							((t === undefined || t > this.length) && (t = this.length), t <= 0) ||
							((t >>>= 0), (r >>>= 0), t <= r))
					)
						return '';
					for (i || (i = 'utf8'); ; )
						switch (i) {
							case 'hex':
								return Vr(this, r, t);
							case 'utf8':
							case 'utf-8':
								return er(this, r, t);
							case 'ascii':
								return jr(this, r, t);
							case 'latin1':
							case 'binary':
								return Hr(this, r, t);
							case 'base64':
								return qr(this, r, t);
							case 'ucs2':
							case 'ucs-2':
							case 'utf16le':
							case 'utf-16le':
								return Xr(this, r, t);
							default:
								if (n) throw new TypeError('Unknown encoding: ' + i);
								(i = (i + '').toLowerCase()), (n = true);
						}
				}
				h.prototype._isBuffer = true;
				function I(i, r, t) {
					let n = i[r];
					(i[r] = i[t]), (i[t] = n);
				}
				h.prototype.swap16 = function () {
					let r = this.length;
					if (r % 2 !== 0) throw new RangeError('Buffer size must be a multiple of 16-bits');
					for (let t = 0; t < r; t += 2) I(this, t, t + 1);
					return this;
				};
				h.prototype.swap32 = function () {
					let r = this.length;
					if (r % 4 !== 0) throw new RangeError('Buffer size must be a multiple of 32-bits');
					for (let t = 0; t < r; t += 4) I(this, t, t + 3), I(this, t + 1, t + 2);
					return this;
				};
				h.prototype.swap64 = function () {
					let r = this.length;
					if (r % 8 !== 0) throw new RangeError('Buffer size must be a multiple of 64-bits');
					for (let t = 0; t < r; t += 8)
						I(this, t, t + 7), I(this, t + 1, t + 6), I(this, t + 2, t + 5), I(this, t + 3, t + 4);
					return this;
				};
				h.prototype.toString = function () {
					let r = this.length;
					return r === 0 ? '' : arguments.length === 0 ? er(this, 0, r) : $r.apply(this, arguments);
				};
				h.prototype.toLocaleString = h.prototype.toString;
				h.prototype.equals = function (r) {
					if (!h.isBuffer(r)) throw new TypeError('Argument must be a Buffer');
					return this === r ? true : h.compare(this, r) === 0;
				};
				h.prototype.inspect = function () {
					let r = '',
						t = T.INSPECT_MAX_BYTES;
					return (
						(r = this.toString('hex', 0, t)
							.replace(/(.{2})/g, '$1 ')
							.trim()),
						this.length > t && (r += ' ... '),
						'<Buffer ' + r + '>'
					);
				};
				Q && (h.prototype[Q] = h.prototype.inspect);
				h.prototype.compare = function (r, t, n, e, o) {
					if ((E(r, Uint8Array) && (r = h.from(r, r.offset, r.byteLength)), !h.isBuffer(r)))
						throw new TypeError(
							'The "target" argument must be one of type Buffer or Uint8Array. Received type ' + typeof r
						);
					if (
						(t === undefined && (t = 0),
						n === undefined && (n = r ? r.length : 0),
						e === undefined && (e = 0),
						o === undefined && (o = this.length),
						t < 0 || n > r.length || e < 0 || o > this.length)
					)
						throw new RangeError('out of range index');
					if (e >= o && t >= n) return 0;
					if (e >= o) return -1;
					if (t >= n) return 1;
					if (((t >>>= 0), (n >>>= 0), (e >>>= 0), (o >>>= 0), this === r)) return 0;
					let u = o - e,
						f = n - t,
						c = Math.min(u, f),
						l = this.slice(e, o),
						s = r.slice(t, n);
					for (let p = 0; p < c; ++p)
						if (l[p] !== s[p]) {
							(u = l[p]), (f = s[p]);
							break;
						}
					return u < f ? -1 : f < u ? 1 : 0;
				};
				function ir(i, r, t, n, e) {
					if (i.length === 0) return -1;
					if (
						(typeof t == 'string'
							? ((n = t), (t = 0))
							: t > 2147483647
							? (t = 2147483647)
							: t < -2147483648 && (t = -2147483648),
						(t = +t),
						V(t) && (t = e ? 0 : i.length - 1),
						t < 0 && (t = i.length + t),
						t >= i.length)
					) {
						if (e) return -1;
						t = i.length - 1;
					} else if (t < 0)
						if (e) t = 0;
						else return -1;
					if ((typeof r == 'string' && (r = h.from(r, n)), h.isBuffer(r)))
						return r.length === 0 ? -1 : nr(i, r, t, n, e);
					if (typeof r == 'number')
						return (
							(r = r & 255),
							typeof Uint8Array.prototype.indexOf == 'function'
								? e
									? Uint8Array.prototype.indexOf.call(i, r, t)
									: Uint8Array.prototype.lastIndexOf.call(i, r, t)
								: nr(i, [r], t, n, e)
						);
					throw new TypeError('val must be string, number or Buffer');
				}
				function nr(i, r, t, n, e) {
					let o = 1,
						u = i.length,
						f = r.length;
					if (
						n !== undefined &&
						((n = String(n).toLowerCase()),
						n === 'ucs2' || n === 'ucs-2' || n === 'utf16le' || n === 'utf-16le')
					) {
						if (i.length < 2 || r.length < 2) return -1;
						(o = 2), (u /= 2), (f /= 2), (t /= 2);
					}
					function c(s, p) {
						return o === 1 ? s[p] : s.readUInt16BE(p * o);
					}
					let l;
					if (e) {
						let s = -1;
						for (l = t; l < u; l++)
							if (c(i, l) === c(r, s === -1 ? 0 : l - s)) {
								if ((s === -1 && (s = l), l - s + 1 === f)) return s * o;
							} else s !== -1 && (l -= l - s), (s = -1);
					} else
						for (t + f > u && (t = u - f), l = t; l >= 0; l--) {
							let s = true;
							for (let p = 0; p < f; p++)
								if (c(i, l + p) !== c(r, p)) {
									s = false;
									break;
								}
							if (s) return l;
						}
					return -1;
				}
				h.prototype.includes = function (r, t, n) {
					return this.indexOf(r, t, n) !== -1;
				};
				h.prototype.indexOf = function (r, t, n) {
					return ir(this, r, t, n, true);
				};
				h.prototype.lastIndexOf = function (r, t, n) {
					return ir(this, r, t, n, false);
				};
				function br(i, r, t, n) {
					t = Number(t) || 0;
					let e = i.length - t;
					n ? ((n = Number(n)), n > e && (n = e)) : (n = e);
					let o = r.length;
					n > o / 2 && (n = o / 2);
					let u;
					for (u = 0; u < n; ++u) {
						let f = parseInt(r.substr(u * 2, 2), 16);
						if (V(f)) return u;
						i[t + u] = f;
					}
					return u;
				}
				function Pr(i, r, t, n) {
					return N(H(r, i.length - t), i, t, n);
				}
				function Or(i, r, t, n) {
					return N(Zr(r), i, t, n);
				}
				function Gr(i, r, t, n) {
					return N(ar(r), i, t, n);
				}
				function Yr(i, r, t, n) {
					return N(Qr(r, i.length - t), i, t, n);
				}
				h.prototype.write = function (r, t, n, e) {
					if (t === undefined) (e = 'utf8'), (n = this.length), (t = 0);
					else if (n === undefined && typeof t == 'string') (e = t), (n = this.length), (t = 0);
					else if (isFinite(t))
						(t = t >>> 0),
							isFinite(n) ? ((n = n >>> 0), e === undefined && (e = 'utf8')) : ((e = n), (n = undefined));
					else throw new Error('Buffer.write(string, encoding, offset[, length]) is no longer supported');
					let o = this.length - t;
					if (((n === undefined || n > o) && (n = o), (r.length > 0 && (n < 0 || t < 0)) || t > this.length))
						throw new RangeError('Attempt to write outside buffer bounds');
					e || (e = 'utf8');
					let u = false;
					for (;;)
						switch (e) {
							case 'hex':
								return br(this, r, t, n);
							case 'utf8':
							case 'utf-8':
								return Pr(this, r, t, n);
							case 'ascii':
							case 'latin1':
							case 'binary':
								return Or(this, r, t, n);
							case 'base64':
								return Gr(this, r, t, n);
							case 'ucs2':
							case 'ucs-2':
							case 'utf16le':
							case 'utf-16le':
								return Yr(this, r, t, n);
							default:
								if (u) throw new TypeError('Unknown encoding: ' + e);
								(e = ('' + e).toLowerCase()), (u = true);
						}
				};
				h.prototype.toJSON = function () {
					return { type: 'Buffer', data: Array.prototype.slice.call(this._arr || this, 0) };
				};
				function qr(i, r, t) {
					return r === 0 && t === i.length ? O.fromByteArray(i) : O.fromByteArray(i.slice(r, t));
				}
				function er(i, r, t) {
					t = Math.min(i.length, t);
					let n = [],
						e = r;
					for (; e < t; ) {
						let o = i[e],
							u = null,
							f = o > 239 ? 4 : o > 223 ? 3 : o > 191 ? 2 : 1;
						if (e + f <= t) {
							let c, l, s, p;
							switch (f) {
								case 1:
									o < 128 && (u = o);
									break;
								case 2:
									(c = i[e + 1]),
										(c & 192) === 128 && ((p = ((o & 31) << 6) | (c & 63)), p > 127 && (u = p));
									break;
								case 3:
									(c = i[e + 1]),
										(l = i[e + 2]),
										(c & 192) === 128 &&
											(l & 192) === 128 &&
											((p = ((o & 15) << 12) | ((c & 63) << 6) | (l & 63)),
											p > 2047 && (p < 55296 || p > 57343) && (u = p));
									break;
								case 4:
									(c = i[e + 1]),
										(l = i[e + 2]),
										(s = i[e + 3]),
										(c & 192) === 128 &&
											(l & 192) === 128 &&
											(s & 192) === 128 &&
											((p = ((o & 15) << 18) | ((c & 63) << 12) | ((l & 63) << 6) | (s & 63)),
											p > 65535 && p < 1114112 && (u = p));
							}
						}
						u === null
							? ((u = 65533), (f = 1))
							: u > 65535 &&
							  ((u -= 65536), n.push(((u >>> 10) & 1023) | 55296), (u = 56320 | (u & 1023))),
							n.push(u),
							(e += f);
					}
					return Wr(n);
				}
				var or = 4096;
				function Wr(i) {
					let r = i.length;
					if (r <= or) return String.fromCharCode.apply(String, i);
					let t = '',
						n = 0;
					for (; n < r; ) t += String.fromCharCode.apply(String, i.slice(n, (n += or)));
					return t;
				}
				function jr(i, r, t) {
					let n = '';
					t = Math.min(i.length, t);
					for (let e = r; e < t; ++e) n += String.fromCharCode(i[e] & 127);
					return n;
				}
				function Hr(i, r, t) {
					let n = '';
					t = Math.min(i.length, t);
					for (let e = r; e < t; ++e) n += String.fromCharCode(i[e]);
					return n;
				}
				function Vr(i, r, t) {
					let n = i.length;
					(!r || r < 0) && (r = 0), (!t || t < 0 || t > n) && (t = n);
					let e = '';
					for (let o = r; o < t; ++o) e += vr[i[o]];
					return e;
				}
				function Xr(i, r, t) {
					let n = i.slice(r, t),
						e = '';
					for (let o = 0; o < n.length - 1; o += 2) e += String.fromCharCode(n[o] + n[o + 1] * 256);
					return e;
				}
				h.prototype.slice = function (r, t) {
					let n = this.length;
					(r = ~~r),
						(t = t === undefined ? n : ~~t),
						r < 0 ? ((r += n), r < 0 && (r = 0)) : r > n && (r = n),
						t < 0 ? ((t += n), t < 0 && (t = 0)) : t > n && (t = n),
						t < r && (t = r);
					let e = this.subarray(r, t);
					return Object.setPrototypeOf(e, h.prototype), e;
				};
				function a(i, r, t) {
					if (i % 1 !== 0 || i < 0) throw new RangeError('offset is not uint');
					if (i + r > t) throw new RangeError('Trying to access beyond buffer length');
				}
				h.prototype.readUintLE = h.prototype.readUIntLE = function (r, t, n) {
					(r = r >>> 0), (t = t >>> 0), n || a(r, t, this.length);
					let e = this[r],
						o = 1,
						u = 0;
					for (; ++u < t && (o *= 256); ) e += this[r + u] * o;
					return e;
				};
				h.prototype.readUintBE = h.prototype.readUIntBE = function (r, t, n) {
					(r = r >>> 0), (t = t >>> 0), n || a(r, t, this.length);
					let e = this[r + --t],
						o = 1;
					for (; t > 0 && (o *= 256); ) e += this[r + --t] * o;
					return e;
				};
				h.prototype.readUint8 = h.prototype.readUInt8 = function (r, t) {
					return (r = r >>> 0), t || a(r, 1, this.length), this[r];
				};
				h.prototype.readUint16LE = h.prototype.readUInt16LE = function (r, t) {
					return (r = r >>> 0), t || a(r, 2, this.length), this[r] | (this[r + 1] << 8);
				};
				h.prototype.readUint16BE = h.prototype.readUInt16BE = function (r, t) {
					return (r = r >>> 0), t || a(r, 2, this.length), (this[r] << 8) | this[r + 1];
				};
				h.prototype.readUint32LE = h.prototype.readUInt32LE = function (r, t) {
					return (
						(r = r >>> 0),
						t || a(r, 4, this.length),
						(this[r] | (this[r + 1] << 8) | (this[r + 2] << 16)) + this[r + 3] * 16777216
					);
				};
				h.prototype.readUint32BE = h.prototype.readUInt32BE = function (r, t) {
					return (
						(r = r >>> 0),
						t || a(r, 4, this.length),
						this[r] * 16777216 + ((this[r + 1] << 16) | (this[r + 2] << 8) | this[r + 3])
					);
				};
				h.prototype.readBigUInt64LE = g(function (r) {
					(r = r >>> 0), R(r, 'offset');
					let t = this[r],
						n = this[r + 7];
					(t === undefined || n === undefined) && S(r, this.length - 8);
					let e = t + this[++r] * 2 ** 8 + this[++r] * 2 ** 16 + this[++r] * 2 ** 24,
						o = this[++r] + this[++r] * 2 ** 8 + this[++r] * 2 ** 16 + n * 2 ** 24;
					return BigInt(e) + (BigInt(o) << BigInt(32));
				});
				h.prototype.readBigUInt64BE = g(function (r) {
					(r = r >>> 0), R(r, 'offset');
					let t = this[r],
						n = this[r + 7];
					(t === undefined || n === undefined) && S(r, this.length - 8);
					let e = t * 2 ** 24 + this[++r] * 2 ** 16 + this[++r] * 2 ** 8 + this[++r],
						o = this[++r] * 2 ** 24 + this[++r] * 2 ** 16 + this[++r] * 2 ** 8 + n;
					return (BigInt(e) << BigInt(32)) + BigInt(o);
				});
				h.prototype.readIntLE = function (r, t, n) {
					(r = r >>> 0), (t = t >>> 0), n || a(r, t, this.length);
					let e = this[r],
						o = 1,
						u = 0;
					for (; ++u < t && (o *= 256); ) e += this[r + u] * o;
					return (o *= 128), e >= o && (e -= Math.pow(2, 8 * t)), e;
				};
				h.prototype.readIntBE = function (r, t, n) {
					(r = r >>> 0), (t = t >>> 0), n || a(r, t, this.length);
					let e = t,
						o = 1,
						u = this[r + --e];
					for (; e > 0 && (o *= 256); ) u += this[r + --e] * o;
					return (o *= 128), u >= o && (u -= Math.pow(2, 8 * t)), u;
				};
				h.prototype.readInt8 = function (r, t) {
					return (r = r >>> 0), t || a(r, 1, this.length), this[r] & 128 ? (255 - this[r] + 1) * -1 : this[r];
				};
				h.prototype.readInt16LE = function (r, t) {
					(r = r >>> 0), t || a(r, 2, this.length);
					let n = this[r] | (this[r + 1] << 8);
					return n & 32768 ? n | 4294901760 : n;
				};
				h.prototype.readInt16BE = function (r, t) {
					(r = r >>> 0), t || a(r, 2, this.length);
					let n = this[r + 1] | (this[r] << 8);
					return n & 32768 ? n | 4294901760 : n;
				};
				h.prototype.readInt32LE = function (r, t) {
					return (
						(r = r >>> 0),
						t || a(r, 4, this.length),
						this[r] | (this[r + 1] << 8) | (this[r + 2] << 16) | (this[r + 3] << 24)
					);
				};
				h.prototype.readInt32BE = function (r, t) {
					return (
						(r = r >>> 0),
						t || a(r, 4, this.length),
						(this[r] << 24) | (this[r + 1] << 16) | (this[r + 2] << 8) | this[r + 3]
					);
				};
				h.prototype.readBigInt64LE = g(function (r) {
					(r = r >>> 0), R(r, 'offset');
					let t = this[r],
						n = this[r + 7];
					(t === undefined || n === undefined) && S(r, this.length - 8);
					let e = this[r + 4] + this[r + 5] * 2 ** 8 + this[r + 6] * 2 ** 16 + (n << 24);
					return (
						(BigInt(e) << BigInt(32)) +
						BigInt(t + this[++r] * 2 ** 8 + this[++r] * 2 ** 16 + this[++r] * 2 ** 24)
					);
				});
				h.prototype.readBigInt64BE = g(function (r) {
					(r = r >>> 0), R(r, 'offset');
					let t = this[r],
						n = this[r + 7];
					(t === undefined || n === undefined) && S(r, this.length - 8);
					let e = (t << 24) + this[++r] * 2 ** 16 + this[++r] * 2 ** 8 + this[++r];
					return (
						(BigInt(e) << BigInt(32)) +
						BigInt(this[++r] * 2 ** 24 + this[++r] * 2 ** 16 + this[++r] * 2 ** 8 + n)
					);
				});
				h.prototype.readFloatLE = function (r, t) {
					return (r = r >>> 0), t || a(r, 4, this.length), A.read(this, r, true, 23, 4);
				};
				h.prototype.readFloatBE = function (r, t) {
					return (r = r >>> 0), t || a(r, 4, this.length), A.read(this, r, false, 23, 4);
				};
				h.prototype.readDoubleLE = function (r, t) {
					return (r = r >>> 0), t || a(r, 8, this.length), A.read(this, r, true, 52, 8);
				};
				h.prototype.readDoubleBE = function (r, t) {
					return (r = r >>> 0), t || a(r, 8, this.length), A.read(this, r, false, 52, 8);
				};
				function y(i, r, t, n, e, o) {
					if (!h.isBuffer(i)) throw new TypeError('"buffer" argument must be a Buffer instance');
					if (r > e || r < o) throw new RangeError('"value" argument is out of bounds');
					if (t + n > i.length) throw new RangeError('Index out of range');
				}
				h.prototype.writeUintLE = h.prototype.writeUIntLE = function (r, t, n, e) {
					if (((r = +r), (t = t >>> 0), (n = n >>> 0), !e)) {
						let f = Math.pow(2, 8 * n) - 1;
						y(this, r, t, n, f, 0);
					}
					let o = 1,
						u = 0;
					for (this[t] = r & 255; ++u < n && (o *= 256); ) this[t + u] = (r / o) & 255;
					return t + n;
				};
				h.prototype.writeUintBE = h.prototype.writeUIntBE = function (r, t, n, e) {
					if (((r = +r), (t = t >>> 0), (n = n >>> 0), !e)) {
						let f = Math.pow(2, 8 * n) - 1;
						y(this, r, t, n, f, 0);
					}
					let o = n - 1,
						u = 1;
					for (this[t + o] = r & 255; --o >= 0 && (u *= 256); ) this[t + o] = (r / u) & 255;
					return t + n;
				};
				h.prototype.writeUint8 = h.prototype.writeUInt8 = function (r, t, n) {
					return (r = +r), (t = t >>> 0), n || y(this, r, t, 1, 255, 0), (this[t] = r & 255), t + 1;
				};
				h.prototype.writeUint16LE = h.prototype.writeUInt16LE = function (r, t, n) {
					return (
						(r = +r),
						(t = t >>> 0),
						n || y(this, r, t, 2, 65535, 0),
						(this[t] = r & 255),
						(this[t + 1] = r >>> 8),
						t + 2
					);
				};
				h.prototype.writeUint16BE = h.prototype.writeUInt16BE = function (r, t, n) {
					return (
						(r = +r),
						(t = t >>> 0),
						n || y(this, r, t, 2, 65535, 0),
						(this[t] = r >>> 8),
						(this[t + 1] = r & 255),
						t + 2
					);
				};
				h.prototype.writeUint32LE = h.prototype.writeUInt32LE = function (r, t, n) {
					return (
						(r = +r),
						(t = t >>> 0),
						n || y(this, r, t, 4, 4294967295, 0),
						(this[t + 3] = r >>> 24),
						(this[t + 2] = r >>> 16),
						(this[t + 1] = r >>> 8),
						(this[t] = r & 255),
						t + 4
					);
				};
				h.prototype.writeUint32BE = h.prototype.writeUInt32BE = function (r, t, n) {
					return (
						(r = +r),
						(t = t >>> 0),
						n || y(this, r, t, 4, 4294967295, 0),
						(this[t] = r >>> 24),
						(this[t + 1] = r >>> 16),
						(this[t + 2] = r >>> 8),
						(this[t + 3] = r & 255),
						t + 4
					);
				};
				function ur(i, r, t, n, e) {
					lr(r, n, e, i, t, 7);
					let o = Number(r & BigInt(4294967295));
					(i[t++] = o), (o = o >> 8), (i[t++] = o), (o = o >> 8), (i[t++] = o), (o = o >> 8), (i[t++] = o);
					let u = Number((r >> BigInt(32)) & BigInt(4294967295));
					return (
						(i[t++] = u),
						(u = u >> 8),
						(i[t++] = u),
						(u = u >> 8),
						(i[t++] = u),
						(u = u >> 8),
						(i[t++] = u),
						t
					);
				}
				function hr(i, r, t, n, e) {
					lr(r, n, e, i, t, 7);
					let o = Number(r & BigInt(4294967295));
					(i[t + 7] = o),
						(o = o >> 8),
						(i[t + 6] = o),
						(o = o >> 8),
						(i[t + 5] = o),
						(o = o >> 8),
						(i[t + 4] = o);
					let u = Number((r >> BigInt(32)) & BigInt(4294967295));
					return (
						(i[t + 3] = u),
						(u = u >> 8),
						(i[t + 2] = u),
						(u = u >> 8),
						(i[t + 1] = u),
						(u = u >> 8),
						(i[t] = u),
						t + 8
					);
				}
				h.prototype.writeBigUInt64LE = g(function (r, t = 0) {
					return ur(this, r, t, BigInt(0), BigInt('0xffffffffffffffff'));
				});
				h.prototype.writeBigUInt64BE = g(function (r, t = 0) {
					return hr(this, r, t, BigInt(0), BigInt('0xffffffffffffffff'));
				});
				h.prototype.writeIntLE = function (r, t, n, e) {
					if (((r = +r), (t = t >>> 0), !e)) {
						let c = Math.pow(2, 8 * n - 1);
						y(this, r, t, n, c - 1, -c);
					}
					let o = 0,
						u = 1,
						f = 0;
					for (this[t] = r & 255; ++o < n && (u *= 256); )
						r < 0 && f === 0 && this[t + o - 1] !== 0 && (f = 1),
							(this[t + o] = (((r / u) >> 0) - f) & 255);
					return t + n;
				};
				h.prototype.writeIntBE = function (r, t, n, e) {
					if (((r = +r), (t = t >>> 0), !e)) {
						let c = Math.pow(2, 8 * n - 1);
						y(this, r, t, n, c - 1, -c);
					}
					let o = n - 1,
						u = 1,
						f = 0;
					for (this[t + o] = r & 255; --o >= 0 && (u *= 256); )
						r < 0 && f === 0 && this[t + o + 1] !== 0 && (f = 1),
							(this[t + o] = (((r / u) >> 0) - f) & 255);
					return t + n;
				};
				h.prototype.writeInt8 = function (r, t, n) {
					return (
						(r = +r),
						(t = t >>> 0),
						n || y(this, r, t, 1, 127, -128),
						r < 0 && (r = 255 + r + 1),
						(this[t] = r & 255),
						t + 1
					);
				};
				h.prototype.writeInt16LE = function (r, t, n) {
					return (
						(r = +r),
						(t = t >>> 0),
						n || y(this, r, t, 2, 32767, -32768),
						(this[t] = r & 255),
						(this[t + 1] = r >>> 8),
						t + 2
					);
				};
				h.prototype.writeInt16BE = function (r, t, n) {
					return (
						(r = +r),
						(t = t >>> 0),
						n || y(this, r, t, 2, 32767, -32768),
						(this[t] = r >>> 8),
						(this[t + 1] = r & 255),
						t + 2
					);
				};
				h.prototype.writeInt32LE = function (r, t, n) {
					return (
						(r = +r),
						(t = t >>> 0),
						n || y(this, r, t, 4, 2147483647, -2147483648),
						(this[t] = r & 255),
						(this[t + 1] = r >>> 8),
						(this[t + 2] = r >>> 16),
						(this[t + 3] = r >>> 24),
						t + 4
					);
				};
				h.prototype.writeInt32BE = function (r, t, n) {
					return (
						(r = +r),
						(t = t >>> 0),
						n || y(this, r, t, 4, 2147483647, -2147483648),
						r < 0 && (r = 4294967295 + r + 1),
						(this[t] = r >>> 24),
						(this[t + 1] = r >>> 16),
						(this[t + 2] = r >>> 8),
						(this[t + 3] = r & 255),
						t + 4
					);
				};
				h.prototype.writeBigInt64LE = g(function (r, t = 0) {
					return ur(this, r, t, -BigInt('0x8000000000000000'), BigInt('0x7fffffffffffffff'));
				});
				h.prototype.writeBigInt64BE = g(function (r, t = 0) {
					return hr(this, r, t, -BigInt('0x8000000000000000'), BigInt('0x7fffffffffffffff'));
				});
				function fr(i, r, t, n, e, o) {
					if (t + n > i.length) throw new RangeError('Index out of range');
					if (t < 0) throw new RangeError('Index out of range');
				}
				function cr(i, r, t, n, e) {
					return (
						(r = +r),
						(t = t >>> 0),
						e ||
							fr(
								i,
								r,
								t,
								4,
								340282346638528860000000000000000000000,
								-340282346638528860000000000000000000000
							),
						A.write(i, r, t, n, 23, 4),
						t + 4
					);
				}
				h.prototype.writeFloatLE = function (r, t, n) {
					return cr(this, r, t, true, n);
				};
				h.prototype.writeFloatBE = function (r, t, n) {
					return cr(this, r, t, false, n);
				};
				function pr(i, r, t, n, e) {
					return (
						(r = +r),
						(t = t >>> 0),
						e ||
							fr(
								i,
								r,
								t,
								8,
								179769313486231570000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000,
								-179769313486231570000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000
							),
						A.write(i, r, t, n, 52, 8),
						t + 8
					);
				}
				h.prototype.writeDoubleLE = function (r, t, n) {
					return pr(this, r, t, true, n);
				};
				h.prototype.writeDoubleBE = function (r, t, n) {
					return pr(this, r, t, false, n);
				};
				h.prototype.copy = function (r, t, n, e) {
					if (!h.isBuffer(r)) throw new TypeError('argument should be a Buffer');
					if (
						(n || (n = 0),
						!e && e !== 0 && (e = this.length),
						t >= r.length && (t = r.length),
						t || (t = 0),
						e > 0 && e < n && (e = n),
						e === n || r.length === 0 || this.length === 0)
					)
						return 0;
					if (t < 0) throw new RangeError('targetStart out of bounds');
					if (n < 0 || n >= this.length) throw new RangeError('Index out of range');
					if (e < 0) throw new RangeError('sourceEnd out of bounds');
					e > this.length && (e = this.length), r.length - t < e - n && (e = r.length - t + n);
					let o = e - n;
					return (
						this === r && typeof Uint8Array.prototype.copyWithin == 'function'
							? this.copyWithin(t, n, e)
							: Uint8Array.prototype.set.call(r, this.subarray(n, e), t),
						o
					);
				};
				h.prototype.fill = function (r, t, n, e) {
					if (typeof r == 'string') {
						if (
							(typeof t == 'string'
								? ((e = t), (t = 0), (n = this.length))
								: typeof n == 'string' && ((e = n), (n = this.length)),
							e !== undefined && typeof e != 'string')
						)
							throw new TypeError('encoding must be a string');
						if (typeof e == 'string' && !h.isEncoding(e)) throw new TypeError('Unknown encoding: ' + e);
						if (r.length === 1) {
							let u = r.charCodeAt(0);
							((e === 'utf8' && u < 128) || e === 'latin1') && (r = u);
						}
					} else typeof r == 'number' ? (r = r & 255) : typeof r == 'boolean' && (r = Number(r));
					if (t < 0 || this.length < t || this.length < n) throw new RangeError('Out of range index');
					if (n <= t) return this;
					(t = t >>> 0), (n = n === undefined ? this.length : n >>> 0), r || (r = 0);
					let o;
					if (typeof r == 'number') for (o = t; o < n; ++o) this[o] = r;
					else {
						let u = h.isBuffer(r) ? r : h.from(r, e),
							f = u.length;
						if (f === 0) throw new TypeError('The value "' + r + '" is invalid for argument "value"');
						for (o = 0; o < n - t; ++o) this[o + t] = u[o % f];
					}
					return this;
				};
				var U = {};
				function j(i, r, t) {
					U[i] = class extends t {
						constructor() {
							super();
							Object.defineProperty(this, 'message', {
								value: r.apply(this, arguments),
								writable: true,
								configurable: true,
							}),
								(this.name = `${this.name} [${i}]`),
								this.stack,
								delete this.name;
						}
						get code() {
							return i;
						}
						set code(e) {
							Object.defineProperty(this, 'code', {
								configurable: true,
								enumerable: true,
								value: e,
								writable: true,
							});
						}
						toString() {
							return `${this.name} [${i}]: ${this.message}`;
						}
					};
				}
				j(
					'ERR_BUFFER_OUT_OF_BOUNDS',
					function (i) {
						return i
							? `${i} is outside of buffer bounds`
							: 'Attempt to access memory outside buffer bounds';
					},
					RangeError
				);
				j(
					'ERR_INVALID_ARG_TYPE',
					function (i, r) {
						return `The "${i}" argument must be of type number. Received type ${typeof r}`;
					},
					TypeError
				);
				j(
					'ERR_OUT_OF_RANGE',
					function (i, r, t) {
						let n = `The value of "${i}" is out of range.`,
							e = t;
						return (
							Number.isInteger(t) && Math.abs(t) > 2 ** 32
								? (e = sr(String(t)))
								: typeof t == 'bigint' &&
								  ((e = String(t)),
								  (t > BigInt(2) ** BigInt(32) || t < -(BigInt(2) ** BigInt(32))) && (e = sr(e)),
								  (e += 'n')),
							(n += ` It must be ${r}. Received ${e}`),
							n
						);
					},
					RangeError
				);
				function sr(i) {
					let r = '',
						t = i.length,
						n = i[0] === '-' ? 1 : 0;
					for (; t >= n + 4; t -= 3) r = `_${i.slice(t - 3, t)}${r}`;
					return `${i.slice(0, t)}${r}`;
				}
				function zr(i, r, t) {
					R(r, 'offset'), (i[r] === undefined || i[r + t] === undefined) && S(r, i.length - (t + 1));
				}
				function lr(i, r, t, n, e, o) {
					if (i > t || i < r) {
						let u = typeof r == 'bigint' ? 'n' : '',
							f;
						throw (
							(o > 3
								? r === 0 || r === BigInt(0)
									? (f = `>= 0${u} and < 2${u} ** ${(o + 1) * 8}${u}`)
									: (f = `>= -(2${u} ** ${(o + 1) * 8 - 1}${u}) and < 2 ** ${(o + 1) * 8 - 1}${u}`)
								: (f = `>= ${r}${u} and <= ${t}${u}`),
							new U.ERR_OUT_OF_RANGE('value', f, i))
						);
					}
					zr(n, e, o);
				}
				function R(i, r) {
					if (typeof i != 'number') throw new U.ERR_INVALID_ARG_TYPE(r, 'number', i);
				}
				function S(i, r, t) {
					throw Math.floor(i) !== i
						? (R(i, t), new U.ERR_OUT_OF_RANGE(t || 'offset', 'an integer', i))
						: r < 0
						? new U.ERR_BUFFER_OUT_OF_BOUNDS()
						: new U.ERR_OUT_OF_RANGE(t || 'offset', `>= ${t ? 1 : 0} and <= ${r}`, i);
				}
				var Jr = /[^+/0-9A-Za-z-_]/g;
				function Kr(i) {
					if (((i = i.split('=')[0]), (i = i.trim().replace(Jr, '')), i.length < 2)) return '';
					for (; i.length % 4 !== 0; ) i = i + '=';
					return i;
				}
				function H(i, r) {
					r = r || 1 / 0;
					let t,
						n = i.length,
						e = null,
						o = [];
					for (let u = 0; u < n; ++u) {
						if (((t = i.charCodeAt(u)), t > 55295 && t < 57344)) {
							if (!e) {
								if (t > 56319) {
									(r -= 3) > -1 && o.push(239, 191, 189);
									continue;
								} else if (u + 1 === n) {
									(r -= 3) > -1 && o.push(239, 191, 189);
									continue;
								}
								e = t;
								continue;
							}
							if (t < 56320) {
								(r -= 3) > -1 && o.push(239, 191, 189), (e = t);
								continue;
							}
							t = (((e - 55296) << 10) | (t - 56320)) + 65536;
						} else e && (r -= 3) > -1 && o.push(239, 191, 189);
						if (((e = null), t < 128)) {
							if ((r -= 1) < 0) break;
							o.push(t);
						} else if (t < 2048) {
							if ((r -= 2) < 0) break;
							o.push((t >> 6) | 192, (t & 63) | 128);
						} else if (t < 65536) {
							if ((r -= 3) < 0) break;
							o.push((t >> 12) | 224, ((t >> 6) & 63) | 128, (t & 63) | 128);
						} else if (t < 1114112) {
							if ((r -= 4) < 0) break;
							o.push((t >> 18) | 240, ((t >> 12) & 63) | 128, ((t >> 6) & 63) | 128, (t & 63) | 128);
						} else throw new Error('Invalid code point');
					}
					return o;
				}
				function Zr(i) {
					let r = [];
					for (let t = 0; t < i.length; ++t) r.push(i.charCodeAt(t) & 255);
					return r;
				}
				function Qr(i, r) {
					let t,
						n,
						e,
						o = [];
					for (let u = 0; u < i.length && !((r -= 2) < 0); ++u)
						(t = i.charCodeAt(u)), (n = t >> 8), (e = t % 256), o.push(e), o.push(n);
					return o;
				}
				function ar(i) {
					return O.toByteArray(Kr(i));
				}
				function N(i, r, t, n) {
					let e;
					for (e = 0; e < n && !(e + t >= r.length || e >= i.length); ++e) r[e + t] = i[e];
					return e;
				}
				function E(i, r) {
					return (
						i instanceof r ||
						(i != null &&
							i.constructor != null &&
							i.constructor.name != null &&
							i.constructor.name === r.name)
					);
				}
				function V(i) {
					return i !== i;
				}
				var vr = (function () {
					let i = '0123456789abcdef',
						r = new Array(256);
					for (let t = 0; t < 16; ++t) {
						let n = t * 16;
						for (let e = 0; e < 16; ++e) r[n + e] = i[t] + i[e];
					}
					return r;
				})();
				function g(i) {
					return typeof BigInt == 'undefined' ? rt : i;
				}
				function rt() {
					throw new Error('BigInt not supported');
				}
			});
			var M = {};
			C(M, mr(yr()));
			module.exports = Ir(M);
			/*!
			 * The buffer module from node.js, for the browser.
			 *
			 * @author   Feross Aboukhadijeh <https://feross.org>
			 * @license  MIT
			 */
			/*! ieee754. BSD-3-Clause License. Feross Aboukhadijeh <https://feross.org/opensource> */
		},
	}['buffer/index.js']
);

// next/app.js
export var $f3f4e1d6 = $$m(
	{
		'next/app.js': (module, exports) => {
			module.exports = __require.d($db5cfa0f());
		},
	}['next/app.js']
);

// next/dist/shared/lib/amp-context.js
export var $d3ff0f54 = $$m(
	{
		'next/dist/shared/lib/amp-context.js': (module, exports) => {
			Object.defineProperty(exports, '__esModule', {
				value: true,
			});
			exports.AmpStateContext = undefined;
			var _react = _interopRequireDefault(__require.d($a85977a5()));
			function _interopRequireDefault(obj) {
				return obj && obj.__esModule
					? obj
					: {
							default: obj,
					  };
			}
			const AmpStateContext = _react.default.createContext({});
			exports.AmpStateContext = AmpStateContext;
			AmpStateContext.displayName = 'AmpStateContext';
		},
	}['next/dist/shared/lib/amp-context.js']
);

// next/dist/pages/_app.js
export var $db5cfa0f = $$m(
	{
		'next/dist/pages/_app.js': (module, exports) => {
			Object.defineProperty(exports, '__esModule', {
				value: true,
			});
			Object.defineProperty(exports, 'AppInitialProps', {
				enumerable: true,
				get: function () {
					return _utils.AppInitialProps;
				},
			});
			Object.defineProperty(exports, 'NextWebVitalsMetric', {
				enumerable: true,
				get: function () {
					return _utils.NextWebVitalsMetric;
				},
			});
			exports.default = undefined;
			var _react = _interopRequireDefault(__require.d($a85977a5()));
			var _utils = __require.d($8496d550());
			function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
				try {
					var info = gen[key](arg);
					var value = info.value;
				} catch (error) {
					reject(error);
					return;
				}
				if (info.done) resolve(value);
				else Promise.resolve(value).then(_next, _throw);
			}
			function _asyncToGenerator(fn) {
				return function () {
					var self = this,
						args = arguments;
					return new Promise(function (resolve, reject) {
						var gen = fn.apply(self, args);
						function _next(value) {
							asyncGeneratorStep(gen, resolve, reject, _next, _throw, 'next', value);
						}
						function _throw(err) {
							asyncGeneratorStep(gen, resolve, reject, _next, _throw, 'throw', err);
						}
						_next(undefined);
					});
				};
			}
			function _interopRequireDefault(obj) {
				return obj && obj.__esModule
					? obj
					: {
							default: obj,
					  };
			}
			function appGetInitialProps(_) {
				return _appGetInitialProps.apply(this, arguments);
			}
			function _appGetInitialProps() {
				_appGetInitialProps = _asyncToGenerator(function* ({ Component, ctx }) {
					const pageProps = yield (0, _utils).loadGetInitialProps(Component, ctx);
					return {
						pageProps,
					};
				});
				return _appGetInitialProps.apply(this, arguments);
			}

			class App extends _react.default.Component {
				render() {
					const { Component, pageProps } = this.props;
					return _react.default.createElement(Component, Object.assign({}, pageProps));
				}
			}
			exports.default = App;
			App.origGetInitialProps = appGetInitialProps;
			App.getInitialProps = appGetInitialProps;
		},
	}['next/dist/pages/_app.js']
);

// react-dom/server.browser.js
export var $aaba5847 = $$m(
	{
		'react-dom/server.browser.js': (module, exports) => {
			var l;
			var s;
			l = __require.d($20732e82());
			s = __require.d($51dde4b5());
			exports.version = l.version;
			exports.renderToString = l.renderToString;
			exports.renderToStaticMarkup = l.renderToStaticMarkup;
			exports.renderToNodeStream = l.renderToNodeStream;
			exports.renderToStaticNodeStream = l.renderToStaticNodeStream;
			exports.renderToReadableStream = s.renderToReadableStream;
		},
	}['react-dom/server.browser.js']
);

// next/dist/shared/lib/head-manager-context.js
export var $db29be3a = $$m(
	{
		'next/dist/shared/lib/head-manager-context.js': (module, exports) => {
			Object.defineProperty(exports, '__esModule', {
				value: true,
			});
			exports.HeadManagerContext = undefined;
			var _react = _interopRequireDefault(__require.d($a85977a5()));
			function _interopRequireDefault(obj) {
				return obj && obj.__esModule
					? obj
					: {
							default: obj,
					  };
			}
			const HeadManagerContext = _react.default.createContext({});
			exports.HeadManagerContext = HeadManagerContext;
			HeadManagerContext.displayName = 'HeadManagerContext';
		},
	}['next/dist/shared/lib/head-manager-context.js']
);

// next/document.js
export var $fd10597b = $$m(
	{
		'next/document.js': (module, exports) => {
			module.exports = __require.d($65e0d031());
		},
	}['next/document.js']
);

// react-is/index.js
export var $eb327d71 = $$m(
	{
		'react-is/index.js': (module, exports) => {
			module.exports = __require.d($38778415());
		},
	}['react-is/index.js']
);

// next/dist/shared/lib/router-context.js
export var $d53ca603 = $$m(
	{
		'next/dist/shared/lib/router-context.js': (module, exports) => {
			Object.defineProperty(exports, '__esModule', {
				value: true,
			});
			exports.RouterContext = undefined;
			var _react = _interopRequireDefault(__require.d($a85977a5()));
			function _interopRequireDefault(obj) {
				return obj && obj.__esModule
					? obj
					: {
							default: obj,
					  };
			}
			const RouterContext = _react.default.createContext(null);
			exports.RouterContext = RouterContext;
			RouterContext.displayName = 'RouterContext';
		},
	}['next/dist/shared/lib/router-context.js']
);

// next/dist/shared/lib/html-context.js
export var $7866eaa1 = $$m(
	{
		'next/dist/shared/lib/html-context.js': (module, exports) => {
			Object.defineProperty(exports, '__esModule', {
				value: true,
			});
			exports.HtmlContext = undefined;
			var _react = __require.d($a85977a5());
			const HtmlContext = (0, _react).createContext(null);
			exports.HtmlContext = HtmlContext;
			HtmlContext.displayName = 'HtmlContext';
		},
	}['next/dist/shared/lib/html-context.js']
);

// next/dist/shared/lib/loadable.js
export var $6c2a3c6b = $$m(
	{
		'next/dist/shared/lib/loadable.js': (module, exports) => {
			Object.defineProperty(exports, '__esModule', {
				value: true,
			});
			exports.default = undefined;
			var _react = _interopRequireDefault(__require.d($a85977a5()));
			var _useSubscription = __require.d($bdd8967f());
			var _loadableContext = __require.d($c4530628());
			function _interopRequireDefault(obj) {
				return obj && obj.__esModule
					? obj
					: {
							default: obj,
					  };
			}
			const ALL_INITIALIZERS = [];
			const READY_INITIALIZERS = [];
			let initialized = false;
			function load(loader) {
				let promise = loader();
				let state = {
					loading: true,
					loaded: null,
					error: null,
				};
				state.promise = promise
					.then((loaded) => {
						state.loading = false;
						state.loaded = loaded;
						return loaded;
					})
					.catch((err) => {
						state.loading = false;
						state.error = err;
						throw err;
					});
				return state;
			}
			function resolve(obj) {
				return obj && obj.__esModule ? obj.default : obj;
			}
			function createLoadableComponent(loadFn, options) {
				let opts = Object.assign(
					{
						loader: null,
						loading: null,
						delay: 200,
						timeout: null,
						webpack: null,
						modules: null,
						suspense: false,
					},
					options
				);
				if (opts.suspense) opts.lazy = _react.default.lazy(opts.loader);
				let subscription = null;
				function init() {
					if (!subscription) {
						const sub = new LoadableSubscription(loadFn, opts);
						subscription = {
							getCurrentValue: sub.getCurrentValue.bind(sub),
							subscribe: sub.subscribe.bind(sub),
							retry: sub.retry.bind(sub),
							promise: sub.promise.bind(sub),
						};
					}
					return subscription.promise();
				}
				if (typeof window === 'undefined' && !opts.suspense) ALL_INITIALIZERS.push(init);
				if (!initialized && typeof window !== 'undefined' && !opts.suspense) {
					const moduleIds =
						opts.webpack && typeof require.resolveWeak === 'function' ? opts.webpack() : opts.modules;
					if (moduleIds)
						READY_INITIALIZERS.push((ids) => {
							for (const moduleId of moduleIds) if (ids.indexOf(moduleId) !== -1) return init();
						});
				}
				function LoadableImpl(props, ref) {
					init();
					const context = _react.default.useContext(_loadableContext.LoadableContext);
					const state = (0, _useSubscription).useSubscription(subscription);
					_react.default.useImperativeHandle(
						ref,
						() => ({
							retry: subscription.retry,
						}),
						[]
					);
					if (context && Array.isArray(opts.modules))
						opts.modules.forEach((moduleName) => {
							context(moduleName);
						});
					return _react.default.useMemo(() => {
						if (state.loading || state.error)
							return _react.default.createElement(opts.loading, {
								isLoading: state.loading,
								pastDelay: state.pastDelay,
								timedOut: state.timedOut,
								error: state.error,
								retry: subscription.retry,
							});
						else if (state.loaded) return _react.default.createElement(resolve(state.loaded), props);
						else return null;
					}, [props, state]);
				}
				function LazyImpl(props, ref) {
					return _react.default.createElement(opts.lazy, {
						...props,
						ref,
					});
				}
				const LoadableComponent = opts.suspense ? LazyImpl : LoadableImpl;
				LoadableComponent.preload = () => !opts.suspense && init();
				LoadableComponent.displayName = 'LoadableComponent';
				return _react.default.forwardRef(LoadableComponent);
			}

			class LoadableSubscription {
				constructor(loadFn, opts) {
					this._loadFn = loadFn;
					this._opts = opts;
					this._callbacks = new Set();
					this._delay = null;
					this._timeout = null;
					this.retry();
				}
				promise() {
					return this._res.promise;
				}
				retry() {
					this._clearTimeouts();
					this._res = this._loadFn(this._opts.loader);
					this._state = {
						pastDelay: false,
						timedOut: false,
					};
					const { _res: res, _opts: opts } = this;
					if (res.loading) {
						if (typeof opts.delay === 'number')
							if (opts.delay === 0) this._state.pastDelay = true;
							else
								this._delay = setTimeout(() => {
									this._update({
										pastDelay: true,
									});
								}, opts.delay);
						if (typeof opts.timeout === 'number')
							this._timeout = setTimeout(() => {
								this._update({
									timedOut: true,
								});
							}, opts.timeout);
					}
					this._res.promise
						.then(() => {
							this._update({});
							this._clearTimeouts();
						})
						.catch((_err) => {
							this._update({});
							this._clearTimeouts();
						});
					this._update({});
				}
				_update(partial) {
					this._state = {
						...this._state,
						error: this._res.error,
						loaded: this._res.loaded,
						loading: this._res.loading,
						...partial,
					};
					this._callbacks.forEach((callback) => callback());
				}
				_clearTimeouts() {
					clearTimeout(this._delay);
					clearTimeout(this._timeout);
				}
				getCurrentValue() {
					return this._state;
				}
				subscribe(callback) {
					this._callbacks.add(callback);
					return () => {
						this._callbacks.delete(callback);
					};
				}
			}
			function Loadable(opts) {
				return createLoadableComponent(load, opts);
			}
			function flushInitializers(initializers, ids) {
				let promises = [];
				while (initializers.length) {
					let init = initializers.pop();
					promises.push(init(ids));
				}
				return Promise.all(promises).then(() => {
					if (initializers.length) return flushInitializers(initializers, ids);
				});
			}
			Loadable.preloadAll = () => {
				return new Promise((resolveInitializers, reject) => {
					flushInitializers(ALL_INITIALIZERS).then(resolveInitializers, reject);
				});
			};
			Loadable.preloadReady = (ids = []) => {
				return new Promise((resolvePreload) => {
					const res = () => {
						initialized = true;
						return resolvePreload();
					};
					flushInitializers(READY_INITIALIZERS, ids).then(res, res);
				});
			};
			if (typeof window !== 'undefined') window.__NEXT_PRELOADREADY = Loadable.preloadReady;
			var _default = Loadable;
			exports.default = _default;
		},
	}['next/dist/shared/lib/loadable.js']
);

// react-is/cjs/react-is.development.js
export var $38778415 = $$m(
	{
		'react-is/cjs/react-is.development.js': (module, exports) => {
			(function () {
				var REACT_ELEMENT_TYPE = 60103;
				var REACT_PORTAL_TYPE = 60106;
				var REACT_FRAGMENT_TYPE = 60107;
				var REACT_STRICT_MODE_TYPE = 60108;
				var REACT_PROFILER_TYPE = 60114;
				var REACT_PROVIDER_TYPE = 60109;
				var REACT_CONTEXT_TYPE = 60110;
				var REACT_FORWARD_REF_TYPE = 60112;
				var REACT_SUSPENSE_TYPE = 60113;
				var REACT_SUSPENSE_LIST_TYPE = 60120;
				var REACT_MEMO_TYPE = 60115;
				var REACT_LAZY_TYPE = 60116;
				var REACT_BLOCK_TYPE = 60121;
				var REACT_SERVER_BLOCK_TYPE = 60122;
				var REACT_FUNDAMENTAL_TYPE = 60117;
				var REACT_SCOPE_TYPE = 60119;
				var REACT_OPAQUE_ID_TYPE = 60128;
				var REACT_DEBUG_TRACING_MODE_TYPE = 60129;
				var REACT_OFFSCREEN_TYPE = 60130;
				var REACT_LEGACY_HIDDEN_TYPE = 60131;
				if (typeof Symbol === 'function' && Symbol.for) {
					var symbolFor = Symbol.for;
					REACT_ELEMENT_TYPE = symbolFor('react.element');
					REACT_PORTAL_TYPE = symbolFor('react.portal');
					REACT_FRAGMENT_TYPE = symbolFor('react.fragment');
					REACT_STRICT_MODE_TYPE = symbolFor('react.strict_mode');
					REACT_PROFILER_TYPE = symbolFor('react.profiler');
					REACT_PROVIDER_TYPE = symbolFor('react.provider');
					REACT_CONTEXT_TYPE = symbolFor('react.context');
					REACT_FORWARD_REF_TYPE = symbolFor('react.forward_ref');
					REACT_SUSPENSE_TYPE = symbolFor('react.suspense');
					REACT_SUSPENSE_LIST_TYPE = symbolFor('react.suspense_list');
					REACT_MEMO_TYPE = symbolFor('react.memo');
					REACT_LAZY_TYPE = symbolFor('react.lazy');
					REACT_BLOCK_TYPE = symbolFor('react.block');
					REACT_SERVER_BLOCK_TYPE = symbolFor('react.server.block');
					REACT_FUNDAMENTAL_TYPE = symbolFor('react.fundamental');
					REACT_SCOPE_TYPE = symbolFor('react.scope');
					REACT_OPAQUE_ID_TYPE = symbolFor('react.opaque.id');
					REACT_DEBUG_TRACING_MODE_TYPE = symbolFor('react.debug_trace_mode');
					REACT_OFFSCREEN_TYPE = symbolFor('react.offscreen');
					REACT_LEGACY_HIDDEN_TYPE = symbolFor('react.legacy_hidden');
				}
				var enableScopeAPI = false;
				function isValidElementType(type) {
					if (typeof type === 'string' || typeof type === 'function') return true;
					if (
						type === REACT_FRAGMENT_TYPE ||
						type === REACT_PROFILER_TYPE ||
						type === REACT_DEBUG_TRACING_MODE_TYPE ||
						type === REACT_STRICT_MODE_TYPE ||
						type === REACT_SUSPENSE_TYPE ||
						type === REACT_SUSPENSE_LIST_TYPE ||
						type === REACT_LEGACY_HIDDEN_TYPE ||
						enableScopeAPI
					)
						return true;
					if (typeof type === 'object' && type !== null) {
						if (
							type.$$typeof === REACT_LAZY_TYPE ||
							type.$$typeof === REACT_MEMO_TYPE ||
							type.$$typeof === REACT_PROVIDER_TYPE ||
							type.$$typeof === REACT_CONTEXT_TYPE ||
							type.$$typeof === REACT_FORWARD_REF_TYPE ||
							type.$$typeof === REACT_FUNDAMENTAL_TYPE ||
							type.$$typeof === REACT_BLOCK_TYPE ||
							type[0] === REACT_SERVER_BLOCK_TYPE
						)
							return true;
					}
					return false;
				}
				function typeOf(object) {
					if (typeof object === 'object' && object !== null) {
						var $$typeof = object.$$typeof;
						switch ($$typeof) {
							case REACT_ELEMENT_TYPE:
								var type = object.type;
								switch (type) {
									case REACT_FRAGMENT_TYPE:
									case REACT_PROFILER_TYPE:
									case REACT_STRICT_MODE_TYPE:
									case REACT_SUSPENSE_TYPE:
									case REACT_SUSPENSE_LIST_TYPE:
										return type;
									default:
										var $$typeofType = type && type.$$typeof;
										switch ($$typeofType) {
											case REACT_CONTEXT_TYPE:
											case REACT_FORWARD_REF_TYPE:
											case REACT_LAZY_TYPE:
											case REACT_MEMO_TYPE:
											case REACT_PROVIDER_TYPE:
												return $$typeofType;
											default:
												return $$typeof;
										}
								}
							case REACT_PORTAL_TYPE:
								return $$typeof;
						}
					}
					return;
				}
				var ContextConsumer = REACT_CONTEXT_TYPE;
				var ContextProvider = REACT_PROVIDER_TYPE;
				var Element = REACT_ELEMENT_TYPE;
				var ForwardRef = REACT_FORWARD_REF_TYPE;
				var Fragment = REACT_FRAGMENT_TYPE;
				var Lazy = REACT_LAZY_TYPE;
				var Memo = REACT_MEMO_TYPE;
				var Portal = REACT_PORTAL_TYPE;
				var Profiler = REACT_PROFILER_TYPE;
				var StrictMode = REACT_STRICT_MODE_TYPE;
				var Suspense = REACT_SUSPENSE_TYPE;
				var hasWarnedAboutDeprecatedIsAsyncMode = false;
				var hasWarnedAboutDeprecatedIsConcurrentMode = false;
				function isAsyncMode(object) {
					if (!hasWarnedAboutDeprecatedIsAsyncMode) {
						hasWarnedAboutDeprecatedIsAsyncMode = true;
						console['warn'](
							'The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 18+.'
						);
					}
					return false;
				}
				function isConcurrentMode(object) {
					if (!hasWarnedAboutDeprecatedIsConcurrentMode) {
						hasWarnedAboutDeprecatedIsConcurrentMode = true;
						console['warn'](
							'The ReactIs.isConcurrentMode() alias has been deprecated, and will be removed in React 18+.'
						);
					}
					return false;
				}
				function isContextConsumer(object) {
					return typeOf(object) === REACT_CONTEXT_TYPE;
				}
				function isContextProvider(object) {
					return typeOf(object) === REACT_PROVIDER_TYPE;
				}
				function isElement(object) {
					return typeof object === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
				}
				function isForwardRef(object) {
					return typeOf(object) === REACT_FORWARD_REF_TYPE;
				}
				function isFragment(object) {
					return typeOf(object) === REACT_FRAGMENT_TYPE;
				}
				function isLazy(object) {
					return typeOf(object) === REACT_LAZY_TYPE;
				}
				function isMemo(object) {
					return typeOf(object) === REACT_MEMO_TYPE;
				}
				function isPortal(object) {
					return typeOf(object) === REACT_PORTAL_TYPE;
				}
				function isProfiler(object) {
					return typeOf(object) === REACT_PROFILER_TYPE;
				}
				function isStrictMode(object) {
					return typeOf(object) === REACT_STRICT_MODE_TYPE;
				}
				function isSuspense(object) {
					return typeOf(object) === REACT_SUSPENSE_TYPE;
				}
				exports.ContextConsumer = ContextConsumer;
				exports.ContextProvider = ContextProvider;
				exports.Element = Element;
				exports.ForwardRef = ForwardRef;
				exports.Fragment = Fragment;
				exports.Lazy = Lazy;
				exports.Memo = Memo;
				exports.Portal = Portal;
				exports.Profiler = Profiler;
				exports.StrictMode = StrictMode;
				exports.Suspense = Suspense;
				exports.isAsyncMode = isAsyncMode;
				exports.isConcurrentMode = isConcurrentMode;
				exports.isContextConsumer = isContextConsumer;
				exports.isContextProvider = isContextProvider;
				exports.isElement = isElement;
				exports.isForwardRef = isForwardRef;
				exports.isFragment = isFragment;
				exports.isLazy = isLazy;
				exports.isMemo = isMemo;
				exports.isPortal = isPortal;
				exports.isProfiler = isProfiler;
				exports.isStrictMode = isStrictMode;
				exports.isSuspense = isSuspense;
				exports.isValidElementType = isValidElementType;
				exports.typeOf = typeOf;
			})();
		},
	}['react-is/cjs/react-is.development.js']
);

// next/dist/compiled/use-subscription/index.js
export var $bdd8967f = $$m(
	{
		'next/dist/compiled/use-subscription/index.js': (module, exports) => {
			var __dirname = '/home/yt/projects/eonet/node_modules/next/dist/compiled/use-subscription';
			(() => {
				var e = {
					800: (e) => {
						var r = Object.getOwnPropertySymbols;
						var t = Object.prototype.hasOwnProperty;
						var u = Object.prototype.propertyIsEnumerable;
						function toObject(e) {
							if (e === null || e === undefined)
								throw new TypeError('Object.assign cannot be called with null or undefined');
							return Object(e);
						}
						function shouldUseNative() {
							try {
								if (!Object.assign) return false;
								var e = new String('abc');
								e[5] = 'de';
								if (Object.getOwnPropertyNames(e)[0] === '5') return false;
								var r = {};
								for (var t = 0; t < 10; t++) r['_' + String.fromCharCode(t)] = t;
								var u = Object.getOwnPropertyNames(r).map(function (e) {
									return r[e];
								});
								if (u.join('') !== '0123456789') return false;
								var n = {};
								'abcdefghijklmnopqrst'.split('').forEach(function (e) {
									n[e] = e;
								});
								if (Object.keys(Object.assign({}, n)).join('') !== 'abcdefghijklmnopqrst') return false;
								return true;
							} catch (e) {
								return false;
							}
						}
						e.exports = shouldUseNative()
							? Object.assign
							: function (e, n) {
									var a;
									var i = toObject(e);
									var s;
									for (var c = 1; c < arguments.length; c++) {
										a = Object(arguments[c]);
										for (var o in a) if (t.call(a, o)) i[o] = a[o];
										if (r) {
											s = r(a);
											for (var f = 0; f < s.length; f++) if (u.call(a, s[f])) i[s[f]] = a[s[f]];
										}
									}
									return i;
							  };
					},
					569: (e, r, t) => {
						(function () {
							var e = t(800);
							var u = t(522);
							function useSubscription(r) {
								var t = r.getCurrentValue,
									n = r.subscribe;
								var a = u.useState(function () {
										return { getCurrentValue: t, subscribe: n, value: t() };
									}),
									i = a[0],
									s = a[1];
								var c = i.value;
								if (i.getCurrentValue !== t || i.subscribe !== n) {
									c = t();
									s({ getCurrentValue: t, subscribe: n, value: c });
								}
								u.useDebugValue(c);
								u.useEffect(
									function () {
										var r = false;
										var checkForUpdates = function () {
											if (r) return;
											var u = t();
											s(function (r) {
												if (r.getCurrentValue !== t || r.subscribe !== n) return r;
												if (r.value === u) return r;
												return e({}, r, { value: u });
											});
										};
										var u = n(checkForUpdates);
										checkForUpdates();
										return function () {
											r = true;
											u();
										};
									},
									[t, n]
								);
								return c;
							}
							r.useSubscription = useSubscription;
						})();
					},
					403: (e, r, t) => {
						var u = t(800),
							n = t(522);
						r.useSubscription = function (e) {
							var r = e.getCurrentValue,
								t = e.subscribe,
								a = n.useState(function () {
									return { getCurrentValue: r, subscribe: t, value: r() };
								});
							e = a[0];
							var i = a[1];
							a = e.value;
							if (e.getCurrentValue !== r || e.subscribe !== t)
								(a = r()), i({ getCurrentValue: r, subscribe: t, value: a });
							n.useDebugValue(a);
							n.useEffect(
								function () {
									function b() {
										if (!e) {
											var n = r();
											i(function (e) {
												return e.getCurrentValue !== r || e.subscribe !== t || e.value === n
													? e
													: u({}, e, { value: n });
											});
										}
									}
									var e = false,
										n = t(b);
									b();
									return function () {
										e = true;
										n();
									};
								},
								[r, t]
							);
							return a;
						};
					},
					138: (e, r, t) => {
						e.exports = t(569);
					},
					522: (e) => {
						e.exports = __require.d($a85977a5());
					},
				};
				var r = {};
				function __nccwpck_require__(t) {
					var u = r[t];
					if (u !== undefined) return u.exports;
					var n = (r[t] = { exports: {} });
					var a = true;
					try {
						e[t](n, n.exports, __nccwpck_require__);
						a = false;
					} finally {
						if (a) delete r[t];
					}
					return n.exports;
				}
				if (typeof __nccwpck_require__ !== 'undefined') __nccwpck_require__.ab = __dirname + '/';
				var t = __nccwpck_require__(138);
				module.exports = t;
			})();
		},
	}['next/dist/compiled/use-subscription/index.js']
);

// next/dist/pages/_document.js
export var $65e0d031 = $$m(
	{
		'next/dist/pages/_document.js': (module, exports) => {
			Object.defineProperty(exports, '__esModule', {
				value: true,
			});
			exports.Html = Html;
			exports.Main = Main;
			exports.default = undefined;
			var _react = _interopRequireWildcard(__require.d($a85977a5()));
			var _constants = __require.d($c824af17());
			var _getPageFiles = __require.d($d741c725());
			var _utils = __require.d($498ce1bd());
			var _htmlescape = __require.d($5c369c3e());
			var _script = _interopRequireDefault(__require.d($9c41992e()));
			var _isError = _interopRequireDefault(__require.d($3c40c5e6()));
			var _htmlContext = __require.d($7866eaa1());
			function _interopRequireDefault(obj) {
				return obj && obj.__esModule
					? obj
					: {
							default: obj,
					  };
			}
			function _interopRequireWildcard(obj) {
				if (obj && obj.__esModule) return obj;
				else {
					var newObj = {};
					if (obj != null) {
						for (var key in obj)
							if (Object.prototype.hasOwnProperty.call(obj, key)) {
								var desc =
									Object.defineProperty && Object.getOwnPropertyDescriptor
										? Object.getOwnPropertyDescriptor(obj, key)
										: {};
								if (desc.get || desc.set) Object.defineProperty(newObj, key, desc);
								else newObj[key] = obj[key];
							}
					}
					newObj.default = obj;
					return newObj;
				}
			}
			function getDocumentFiles(buildManifest, pathname, inAmpMode) {
				const sharedFiles = (0, _getPageFiles).getPageFiles(buildManifest, '/_app');
				const pageFiles = inAmpMode ? [] : (0, _getPageFiles).getPageFiles(buildManifest, pathname);
				return {
					sharedFiles,
					pageFiles,
					allFiles: [...new Set([...sharedFiles, ...pageFiles])],
				};
			}
			function getPolyfillScripts(context, props) {
				const {
					assetPrefix,
					buildManifest,
					devOnlyCacheBusterQueryString,
					disableOptimizedLoading,
					crossOrigin,
				} = context;
				return buildManifest.polyfillFiles
					.filter((polyfill) => polyfill.endsWith('.js') && !polyfill.endsWith('.module.js'))
					.map((polyfill) =>
						_react.default.createElement('script', {
							key: polyfill,
							defer: !disableOptimizedLoading,
							nonce: props.nonce,
							crossOrigin: props.crossOrigin || crossOrigin,
							noModule: true,
							src: `${assetPrefix}/_next/${polyfill}${devOnlyCacheBusterQueryString}`,
						})
					);
			}
			function hasComponentProps(child) {
				return !!child && !!child.props;
			}
			function getPreNextWorkerScripts(context, props) {
				const { assetPrefix, scriptLoader, crossOrigin, nextScriptWorkers } = context;
				if (!nextScriptWorkers) return null;
				try {
					let { partytownSnippet } = (() => {
						throw new Error(`Cannot require module "@builder.io/partytown/integration"`);
					})();
					const children = Array.isArray(props.children) ? props.children : [props.children];
					const userDefinedConfig = children.find((child) => {
						var ref, ref1;
						return (
							hasComponentProps(child) &&
							(child === null || child === undefined
								? undefined
								: (ref = child.props) === null || ref === undefined
								? undefined
								: (ref1 = ref.dangerouslySetInnerHTML) === null || ref1 === undefined
								? undefined
								: ref1.__html.length) &&
							'data-partytown-config' in child.props
						);
					});
					return _react.default.createElement(
						_react.default.Fragment,
						null,
						!userDefinedConfig &&
							_react.default.createElement('script', {
								'data-partytown-config': '',
								dangerouslySetInnerHTML: {
									__html: `
            partytown = {
              lib: "${assetPrefix}/_next/static/~partytown/"
            };
          `,
								},
							}),
						_react.default.createElement('script', {
							'data-partytown': '',
							dangerouslySetInnerHTML: {
								__html: partytownSnippet(),
							},
						}),
						(scriptLoader.worker || []).map((file, index) => {
							const { strategy, ...scriptProps } = file;
							return _react.default.createElement(
								'script',
								Object.assign({}, scriptProps, {
									type: 'text/partytown',
									key: scriptProps.src || index,
									nonce: props.nonce,
									'data-nscript': 'worker',
									crossOrigin: props.crossOrigin || crossOrigin,
								})
							);
						})
					);
				} catch (err) {
					console.warn(
						`Warning: Partytown could not be instantiated in your application due to an error. ${err}`
					);
					return null;
				}
			}
			function getPreNextScripts(context, props) {
				const { scriptLoader, disableOptimizedLoading, crossOrigin } = context;
				const webWorkerScripts = getPreNextWorkerScripts(context, props);
				const beforeInteractiveScripts = (scriptLoader.beforeInteractive || []).map((file, index) => {
					const { strategy, ...scriptProps } = file;
					var _defer;
					return _react.default.createElement(
						'script',
						Object.assign({}, scriptProps, {
							key: scriptProps.src || index,
							defer:
								(_defer = scriptProps.defer) !== null && _defer !== undefined
									? _defer
									: !disableOptimizedLoading,
							nonce: props.nonce,
							'data-nscript': 'beforeInteractive',
							crossOrigin: props.crossOrigin || crossOrigin,
						})
					);
				});
				return _react.default.createElement(
					_react.default.Fragment,
					null,
					webWorkerScripts,
					beforeInteractiveScripts
				);
			}
			function getDynamicChunks(context, props, files) {
				const {
					dynamicImports,
					assetPrefix,
					isDevelopment,
					devOnlyCacheBusterQueryString,
					disableOptimizedLoading,
					crossOrigin,
				} = context;
				return dynamicImports.map((file) => {
					if (!file.endsWith('.js') || files.allFiles.includes(file)) return null;
					return _react.default.createElement('script', {
						async: !isDevelopment && disableOptimizedLoading,
						defer: !disableOptimizedLoading,
						key: file,
						src: `${assetPrefix}/_next/${encodeURI(file)}${devOnlyCacheBusterQueryString}`,
						nonce: props.nonce,
						crossOrigin: props.crossOrigin || crossOrigin,
					});
				});
			}
			function getScripts(context, props, files) {
				var ref;
				const {
					assetPrefix,
					buildManifest,
					isDevelopment,
					devOnlyCacheBusterQueryString,
					disableOptimizedLoading,
					crossOrigin,
				} = context;
				const normalScripts = files.allFiles.filter((file) => file.endsWith('.js'));
				const lowPriorityScripts =
					(ref = buildManifest.lowPriorityFiles) === null || ref === undefined
						? undefined
						: ref.filter((file) => file.endsWith('.js'));
				return [...normalScripts, ...lowPriorityScripts].map((file) => {
					return _react.default.createElement('script', {
						key: file,
						src: `${assetPrefix}/_next/${encodeURI(file)}${devOnlyCacheBusterQueryString}`,
						nonce: props.nonce,
						async: !isDevelopment && disableOptimizedLoading,
						defer: !disableOptimizedLoading,
						crossOrigin: props.crossOrigin || crossOrigin,
					});
				});
			}

			class Document extends _react.Component {
				static getInitialProps(ctx) {
					return ctx.defaultGetInitialProps(ctx);
				}
				render() {
					return _react.default.createElement(
						Html,
						null,
						_react.default.createElement(Head, null),
						_react.default.createElement(
							'body',
							null,
							_react.default.createElement(Main, null),
							_react.default.createElement(NextScript, null)
						)
					);
				}
			}
			exports.default = Document;
			Document.__next_internal_document = function InternalFunctionDocument() {
				return _react.default.createElement(
					Html,
					null,
					_react.default.createElement(Head, null),
					_react.default.createElement(
						'body',
						null,
						_react.default.createElement(Main, null),
						_react.default.createElement(NextScript, null)
					)
				);
			};
			function Html(props) {
				const { inAmpMode, docComponentsRendered, locale } = (0, _react).useContext(_htmlContext.HtmlContext);
				docComponentsRendered.Html = true;
				return _react.default.createElement(
					'html',
					Object.assign({}, props, {
						lang: props.lang || locale || undefined,
						amp: inAmpMode ? '' : undefined,
						'data-ampdevmode': inAmpMode ? '' : undefined,
					})
				);
			}
			function AmpStyles({ styles }) {
				if (!styles) return null;
				const curStyles = Array.isArray(styles) ? styles : [];
				if (styles.props && Array.isArray(styles.props.children)) {
					const hasStyles = (el) => {
						var ref, ref2;
						return el === null || el === undefined
							? undefined
							: (ref = el.props) === null || ref === undefined
							? undefined
							: (ref2 = ref.dangerouslySetInnerHTML) === null || ref2 === undefined
							? undefined
							: ref2.__html;
					};
					styles.props.children.forEach((child) => {
						if (Array.isArray(child)) child.forEach((el) => hasStyles(el) && curStyles.push(el));
						else if (hasStyles(child)) curStyles.push(child);
					});
				}
				return _react.default.createElement('style', {
					'amp-custom': '',
					dangerouslySetInnerHTML: {
						__html: curStyles
							.map((style) => style.props.dangerouslySetInnerHTML.__html)
							.join('')
							.replace(/\/\*# sourceMappingURL=.*\*\//g, '')
							.replace(/\/\*@ sourceURL=.*?\*\//g, ''),
					},
				});
			}

			class Head extends _react.Component {
				getCssLinks(files) {
					const {
						assetPrefix,
						devOnlyCacheBusterQueryString,
						dynamicImports,
						crossOrigin,
						optimizeCss,
						optimizeFonts,
					} = this.context;
					const cssFiles = files.allFiles.filter((f) => f.endsWith('.css'));
					const sharedFiles = new Set(files.sharedFiles);
					let unmangedFiles = new Set([]);
					let dynamicCssFiles = Array.from(new Set(dynamicImports.filter((file) => file.endsWith('.css'))));
					if (dynamicCssFiles.length) {
						const existing = new Set(cssFiles);
						dynamicCssFiles = dynamicCssFiles.filter((f) => !(existing.has(f) || sharedFiles.has(f)));
						unmangedFiles = new Set(dynamicCssFiles);
						cssFiles.push(...dynamicCssFiles);
					}
					let cssLinkElements = [];
					cssFiles.forEach((file) => {
						const isSharedFile = sharedFiles.has(file);
						if (!optimizeCss)
							cssLinkElements.push(
								_react.default.createElement('link', {
									key: `${file}-preload`,
									nonce: this.props.nonce,
									rel: 'preload',
									href: `${assetPrefix}/_next/${encodeURI(file)}${devOnlyCacheBusterQueryString}`,
									as: 'style',
									crossOrigin: this.props.crossOrigin || crossOrigin,
								})
							);
						const isUnmanagedFile = unmangedFiles.has(file);
						cssLinkElements.push(
							_react.default.createElement('link', {
								key: file,
								nonce: this.props.nonce,
								rel: 'stylesheet',
								href: `${assetPrefix}/_next/${encodeURI(file)}${devOnlyCacheBusterQueryString}`,
								crossOrigin: this.props.crossOrigin || crossOrigin,
								'data-n-g': isUnmanagedFile ? undefined : isSharedFile ? '' : undefined,
								'data-n-p': isUnmanagedFile ? undefined : isSharedFile ? undefined : '',
							})
						);
					});
					return cssLinkElements.length === 0 ? null : cssLinkElements;
				}
				getPreloadDynamicChunks() {
					const { dynamicImports, assetPrefix, devOnlyCacheBusterQueryString, crossOrigin } = this.context;
					return dynamicImports
						.map((file) => {
							if (!file.endsWith('.js')) return null;
							return _react.default.createElement('link', {
								rel: 'preload',
								key: file,
								href: `${assetPrefix}/_next/${encodeURI(file)}${devOnlyCacheBusterQueryString}`,
								as: 'script',
								nonce: this.props.nonce,
								crossOrigin: this.props.crossOrigin || crossOrigin,
							});
						})
						.filter(Boolean);
				}
				getPreloadMainLinks(files) {
					const { assetPrefix, devOnlyCacheBusterQueryString, scriptLoader, crossOrigin } = this.context;
					const preloadFiles = files.allFiles.filter((file) => {
						return file.endsWith('.js');
					});
					return [
						...(scriptLoader.beforeInteractive || []).map((file) =>
							_react.default.createElement('link', {
								key: file.src,
								nonce: this.props.nonce,
								rel: 'preload',
								href: file.src,
								as: 'script',
								crossOrigin: this.props.crossOrigin || crossOrigin,
							})
						),
						...preloadFiles.map((file) =>
							_react.default.createElement('link', {
								key: file,
								nonce: this.props.nonce,
								rel: 'preload',
								href: `${assetPrefix}/_next/${encodeURI(file)}${devOnlyCacheBusterQueryString}`,
								as: 'script',
								crossOrigin: this.props.crossOrigin || crossOrigin,
							})
						),
					];
				}
				getDynamicChunks(files) {
					return getDynamicChunks(this.context, this.props, files);
				}
				getPreNextScripts() {
					return getPreNextScripts(this.context, this.props);
				}
				getScripts(files) {
					return getScripts(this.context, this.props, files);
				}
				getPolyfillScripts() {
					return getPolyfillScripts(this.context, this.props);
				}
				handleDocumentScriptLoaderItems(children) {
					const { scriptLoader } = this.context;
					const scriptLoaderItems = [];
					const filteredChildren = [];
					_react.default.Children.forEach(children, (child) => {
						if (child.type === _script.default) {
							if (child.props.strategy === 'beforeInteractive') {
								scriptLoader.beforeInteractive = (scriptLoader.beforeInteractive || []).concat([
									{
										...child.props,
									},
								]);
								return;
							} else if (['lazyOnload', 'afterInteractive', 'worker'].includes(child.props.strategy)) {
								scriptLoaderItems.push(child.props);
								return;
							}
						}
						filteredChildren.push(child);
					});
					this.context.__NEXT_DATA__.scriptLoader = scriptLoaderItems;
					return filteredChildren;
				}
				makeStylesheetInert(node) {
					return _react.default.Children.map(node, (c) => {
						var ref5, ref3;
						if (
							(c === null || c === undefined ? undefined : c.type) === 'link' &&
							(c === null || c === undefined
								? undefined
								: (ref5 = c.props) === null || ref5 === undefined
								? undefined
								: ref5.href) &&
							_constants.OPTIMIZED_FONT_PROVIDERS.some(({ url }) => {
								var ref, ref4;
								return c === null || c === undefined
									? undefined
									: (ref = c.props) === null || ref === undefined
									? undefined
									: (ref4 = ref.href) === null || ref4 === undefined
									? undefined
									: ref4.startsWith(url);
							})
						) {
							const newProps = {
								...(c.props || {}),
								'data-href': c.props.href,
								href: undefined,
							};
							return _react.default.cloneElement(c, newProps);
						} else if (
							c === null || c === undefined
								? undefined
								: (ref3 = c.props) === null || ref3 === undefined
								? undefined
								: ref3.children
						) {
							const newProps = {
								...(c.props || {}),
								children: this.makeStylesheetInert(c.props.children),
							};
							return _react.default.cloneElement(c, newProps);
						}
						return c;
					}).filter(Boolean);
				}
				render() {
					const {
						styles,
						ampPath,
						inAmpMode,
						hybridAmp,
						canonicalBase,
						__NEXT_DATA__,
						dangerousAsPath,
						headTags,
						unstable_runtimeJS,
						unstable_JsPreload,
						disableOptimizedLoading,
						optimizeCss,
						optimizeFonts,
					} = this.context;
					const disableRuntimeJS = unstable_runtimeJS === false;
					const disableJsPreload = unstable_JsPreload === false || !disableOptimizedLoading;
					this.context.docComponentsRendered.Head = true;
					let { head } = this.context;
					let cssPreloads = [];
					let otherHeadElements = [];
					if (head) {
						head.forEach((c) => {
							if (c && c.type === 'link' && c.props['rel'] === 'preload' && c.props['as'] === 'style')
								cssPreloads.push(c);
							else c && otherHeadElements.push(c);
						});
						head = cssPreloads.concat(otherHeadElements);
					}
					let children = _react.default.Children.toArray(this.props.children).filter(Boolean);
					children = _react.default.Children.map(children, (child) => {
						var ref;
						const isReactHelmet =
							child === null || child === undefined
								? undefined
								: (ref = child.props) === null || ref === undefined
								? undefined
								: ref['data-react-helmet'];
						if (!isReactHelmet) {
							var ref6;
							if ((child === null || child === undefined ? undefined : child.type) === 'title')
								console.warn(
									"Warning: <title> should not be used in _document.js's <Head>. https://nextjs.org/docs/messages/no-document-title"
								);
							else if (
								(child === null || child === undefined ? undefined : child.type) === 'meta' &&
								(child === null || child === undefined
									? undefined
									: (ref6 = child.props) === null || ref6 === undefined
									? undefined
									: ref6.name) === 'viewport'
							)
								console.warn(
									"Warning: viewport meta tags should not be used in _document.js's <Head>. https://nextjs.org/docs/messages/no-document-viewport-meta"
								);
						}
						return child;
					});
					if (this.props.crossOrigin)
						console.warn(
							'Warning: `Head` attribute `crossOrigin` is deprecated. https://nextjs.org/docs/messages/doc-crossorigin-deprecated'
						);
					children = this.handleDocumentScriptLoaderItems(children);
					let hasAmphtmlRel = false;
					let hasCanonicalRel = false;
					head = _react.default.Children.map(head || [], (child) => {
						if (!child) return child;
						const { type, props } = child;
						if (inAmpMode) {
							let badProp = '';
							if (type === 'meta' && props.name === 'viewport') badProp = 'name="viewport"';
							else if (type === 'link' && props.rel === 'canonical') hasCanonicalRel = true;
							else if (type === 'script') {
								if (
									(props.src && props.src.indexOf('ampproject') < -1) ||
									(props.dangerouslySetInnerHTML && (!props.type || props.type === 'text/javascript'))
								) {
									badProp = '<script';
									Object.keys(props).forEach((prop) => {
										badProp += ` ${prop}="${props[prop]}"`;
									});
									badProp += '/>';
								}
							}
							if (badProp) {
								console.warn(
									`Found conflicting amp tag "${child.type}" with conflicting prop ${badProp} in ${__NEXT_DATA__.page}. https://nextjs.org/docs/messages/conflicting-amp-tag`
								);
								return null;
							}
						} else if (type === 'link' && props.rel === 'amphtml') hasAmphtmlRel = true;
						return child;
					});
					const files = getDocumentFiles(
						this.context.buildManifest,
						this.context.__NEXT_DATA__.page,
						inAmpMode
					);
					var _nonce, _nonce1;
					return _react.default.createElement(
						'head',
						Object.assign({}, this.props),
						this.context.isDevelopment &&
							_react.default.createElement(
								_react.default.Fragment,
								null,
								_react.default.createElement('style', {
									'data-next-hide-fouc': true,
									'data-ampdevmode': inAmpMode ? 'true' : undefined,
									dangerouslySetInnerHTML: {
										__html: `body{display:none}`,
									},
								}),
								_react.default.createElement(
									'noscript',
									{
										'data-next-hide-fouc': true,
										'data-ampdevmode': inAmpMode ? 'true' : undefined,
									},
									_react.default.createElement('style', {
										dangerouslySetInnerHTML: {
											__html: `body{display:block}`,
										},
									})
								)
							),
						head,
						_react.default.createElement('meta', {
							name: 'next-head-count',
							content: _react.default.Children.count(head || []).toString(),
						}),
						children,
						optimizeFonts &&
							_react.default.createElement('meta', {
								name: 'next-font-preconnect',
							}),
						inAmpMode &&
							_react.default.createElement(
								_react.default.Fragment,
								null,
								_react.default.createElement('meta', {
									name: 'viewport',
									content: 'width=device-width,minimum-scale=1,initial-scale=1',
								}),
								!hasCanonicalRel &&
									_react.default.createElement('link', {
										rel: 'canonical',
										href: canonicalBase + (0, _utils).cleanAmpPath(dangerousAsPath),
									}),
								_react.default.createElement('link', {
									rel: 'preload',
									as: 'script',
									href: 'https://cdn.ampproject.org/v0.js',
								}),
								_react.default.createElement(AmpStyles, {
									styles,
								}),
								_react.default.createElement('style', {
									'amp-boilerplate': '',
									dangerouslySetInnerHTML: {
										__html: `body{-webkit-animation:-amp-start 8s steps(1,end) 0s 1 normal both;-moz-animation:-amp-start 8s steps(1,end) 0s 1 normal both;-ms-animation:-amp-start 8s steps(1,end) 0s 1 normal both;animation:-amp-start 8s steps(1,end) 0s 1 normal both}@-webkit-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@-moz-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@-ms-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@-o-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}`,
									},
								}),
								_react.default.createElement(
									'noscript',
									null,
									_react.default.createElement('style', {
										'amp-boilerplate': '',
										dangerouslySetInnerHTML: {
											__html: `body{-webkit-animation:none;-moz-animation:none;-ms-animation:none;animation:none}`,
										},
									})
								),
								_react.default.createElement('script', {
									async: true,
									src: 'https://cdn.ampproject.org/v0.js',
								})
							),
						!inAmpMode &&
							_react.default.createElement(
								_react.default.Fragment,
								null,
								!hasAmphtmlRel &&
									hybridAmp &&
									_react.default.createElement('link', {
										rel: 'amphtml',
										href: canonicalBase + getAmpPath(ampPath, dangerousAsPath),
									}),
								!optimizeCss && this.getCssLinks(files),
								!optimizeCss &&
									_react.default.createElement('noscript', {
										'data-n-css':
											(_nonce = this.props.nonce) !== null && _nonce !== undefined ? _nonce : '',
									}),
								!disableRuntimeJS && !disableJsPreload && this.getPreloadDynamicChunks(),
								!disableRuntimeJS && !disableJsPreload && this.getPreloadMainLinks(files),
								!disableOptimizedLoading && !disableRuntimeJS && this.getPolyfillScripts(),
								!disableOptimizedLoading && !disableRuntimeJS && this.getPreNextScripts(),
								!disableOptimizedLoading && !disableRuntimeJS && this.getDynamicChunks(files),
								!disableOptimizedLoading && !disableRuntimeJS && this.getScripts(files),
								optimizeCss && this.getCssLinks(files),
								optimizeCss &&
									_react.default.createElement('noscript', {
										'data-n-css':
											(_nonce1 = this.props.nonce) !== null && _nonce1 !== undefined
												? _nonce1
												: '',
									}),
								this.context.isDevelopment &&
									_react.default.createElement('noscript', {
										id: '__next_css__DO_NOT_USE__',
									}),
								styles || null
							),
						_react.default.createElement(_react.default.Fragment, {}, ...(headTags || []))
					);
				}
			}
			exports.Head = Head;
			Head.contextType = _htmlContext.HtmlContext;
			function Main() {
				const { docComponentsRendered } = (0, _react).useContext(_htmlContext.HtmlContext);
				docComponentsRendered.Main = true;
				return _react.default.createElement('next-js-internal-body-render-target', null);
			}

			class NextScript extends _react.Component {
				getDynamicChunks(files) {
					return getDynamicChunks(this.context, this.props, files);
				}
				getPreNextScripts() {
					return getPreNextScripts(this.context, this.props);
				}
				getScripts(files) {
					return getScripts(this.context, this.props, files);
				}
				getPolyfillScripts() {
					return getPolyfillScripts(this.context, this.props);
				}
				static getInlineScriptSource(context) {
					const { __NEXT_DATA__ } = context;
					try {
						const data = JSON.stringify(__NEXT_DATA__);
						{
							const bytes = Buffer.from(data).byteLength;
							const prettyBytes = __require.d($3b6c4dd8()).default;
							if (bytes > 128 * 1000)
								console.warn(
									`Warning: data for page "${__NEXT_DATA__.page}" is ${prettyBytes(
										bytes
									)}, this amount of data can reduce performance.\nSee more info here: https://nextjs.org/docs/messages/large-page-data`
								);
						}
						return (0, _htmlescape).htmlEscapeJsonString(data);
					} catch (err) {
						if ((0, _isError).default(err) && err.message.indexOf('circular structure') !== -1)
							throw new Error(
								`Circular structure in "getInitialProps" result of page "${__NEXT_DATA__.page}". https://nextjs.org/docs/messages/circular-structure`
							);
						throw err;
					}
				}
				render() {
					const {
						assetPrefix,
						inAmpMode,
						buildManifest,
						unstable_runtimeJS,
						docComponentsRendered,
						devOnlyCacheBusterQueryString,
						disableOptimizedLoading,
						crossOrigin,
					} = this.context;
					const disableRuntimeJS = unstable_runtimeJS === false;
					docComponentsRendered.NextScript = true;
					if (inAmpMode) {
						const ampDevFiles = [
							...buildManifest.devFiles,
							...buildManifest.polyfillFiles,
							...buildManifest.ampDevFiles,
						];
						return _react.default.createElement(
							_react.default.Fragment,
							null,
							disableRuntimeJS
								? null
								: _react.default.createElement('script', {
										id: '__NEXT_DATA__',
										type: 'application/json',
										nonce: this.props.nonce,
										crossOrigin: this.props.crossOrigin || crossOrigin,
										dangerouslySetInnerHTML: {
											__html: NextScript.getInlineScriptSource(this.context),
										},
										'data-ampdevmode': true,
								  }),
							ampDevFiles.map((file) =>
								_react.default.createElement('script', {
									key: file,
									src: `${assetPrefix}/_next/${file}${devOnlyCacheBusterQueryString}`,
									nonce: this.props.nonce,
									crossOrigin: this.props.crossOrigin || crossOrigin,
									'data-ampdevmode': true,
								})
							)
						);
					}
					if (this.props.crossOrigin)
						console.warn(
							'Warning: `NextScript` attribute `crossOrigin` is deprecated. https://nextjs.org/docs/messages/doc-crossorigin-deprecated'
						);
					const files = getDocumentFiles(
						this.context.buildManifest,
						this.context.__NEXT_DATA__.page,
						inAmpMode
					);
					return _react.default.createElement(
						_react.default.Fragment,
						null,
						!disableRuntimeJS && buildManifest.devFiles
							? buildManifest.devFiles.map((file) =>
									_react.default.createElement('script', {
										key: file,
										src: `${assetPrefix}/_next/${encodeURI(file)}${devOnlyCacheBusterQueryString}`,
										nonce: this.props.nonce,
										crossOrigin: this.props.crossOrigin || crossOrigin,
									})
							  )
							: null,
						disableRuntimeJS
							? null
							: _react.default.createElement('script', {
									id: '__NEXT_DATA__',
									type: 'application/json',
									nonce: this.props.nonce,
									crossOrigin: this.props.crossOrigin || crossOrigin,
									dangerouslySetInnerHTML: {
										__html: NextScript.getInlineScriptSource(this.context),
									},
							  }),
						disableOptimizedLoading && !disableRuntimeJS && this.getPolyfillScripts(),
						disableOptimizedLoading && !disableRuntimeJS && this.getPreNextScripts(),
						disableOptimizedLoading && !disableRuntimeJS && this.getDynamicChunks(files),
						disableOptimizedLoading && !disableRuntimeJS && this.getScripts(files)
					);
				}
			}
			exports.NextScript = NextScript;
			NextScript.contextType = _htmlContext.HtmlContext;
			NextScript.safariNomoduleFix =
				'!function(){var e=document,t=e.createElement("script");if(!("noModule"in t)&&"onbeforeload"in t){var n=!1;e.addEventListener("beforeload",function(e){if(e.target===t)n=!0;else if(!e.target.hasAttribute("nomodule")||!n)return;e.preventDefault()},!0),t.type="module",t.src=".",e.head.appendChild(t),t.remove()}}();';
			function getAmpPath(ampPath, asPath) {
				return ampPath || `${asPath}${asPath.includes('?') ? '&' : '?'}amp=1`;
			}
		},
	}['next/dist/pages/_document.js']
);

// next/dist/server/utils.js
export var $498ce1bd = $$m(
	{
		'next/dist/server/utils.js': (module, exports) => {
			Object.defineProperty(exports, '__esModule', {
				value: true,
			});
			exports.isBlockedPage = isBlockedPage;
			exports.cleanAmpPath = cleanAmpPath;
			exports.isBot = isBot;
			exports.isTargetLikeServerless = isTargetLikeServerless;
			var _constants = __require.d($c824af17());
			function isBlockedPage(pathname) {
				return _constants.BLOCKED_PAGES.includes(pathname);
			}
			function cleanAmpPath(pathname) {
				if (pathname.match(/\?amp=(y|yes|true|1)/)) pathname = pathname.replace(/\?amp=(y|yes|true|1)&?/, '?');
				if (pathname.match(/&amp=(y|yes|true|1)/)) pathname = pathname.replace(/&amp=(y|yes|true|1)/, '');
				pathname = pathname.replace(/\?$/, '');
				return pathname;
			}
			function isBot(userAgent) {
				return /Googlebot|Mediapartners-Google|AdsBot-Google|googleweblight|Storebot-Google|Google-PageRenderer|Bingbot|BingPreview|Slurp|DuckDuckBot|baiduspider|yandex|sogou|LinkedInBot|bitlybot|tumblr|vkShare|quora link preview|facebookexternalhit|facebookcatalog|Twitterbot|applebot|redditbot|Slackbot|Discordbot|WhatsApp|SkypeUriPreview|ia_archiver/i.test(
					userAgent
				);
			}
			function isTargetLikeServerless(target) {
				const isServerless = target === 'serverless';
				const isServerlessTrace = target === 'experimental-serverless-trace';
				return isServerless || isServerlessTrace;
			}
		},
	}['next/dist/server/utils.js']
);

// next/dist/server/get-page-files.js
export var $d741c725 = $$m(
	{
		'next/dist/server/get-page-files.js': (module, exports) => {
			Object.defineProperty(exports, '__esModule', {
				value: true,
			});
			exports.getPageFiles = getPageFiles;
			var _normalizePagePath = __require.d($26f1cdf7());
			function getPageFiles(buildManifest, page) {
				const normalizedPage = (0, _normalizePagePath).denormalizePagePath(
					(0, _normalizePagePath).normalizePagePath(page)
				);
				let files = buildManifest.pages[normalizedPage];
				if (!files) {
					console.warn(`Could not find files for ${normalizedPage} in .next/build-manifest.json`);
					return [];
				}
				return files;
			}
		},
	}['next/dist/server/get-page-files.js']
);

// next/dist/server/htmlescape.js
export var $5c369c3e = $$m(
	{
		'next/dist/server/htmlescape.js': (module, exports) => {
			Object.defineProperty(exports, '__esModule', {
				value: true,
			});
			exports.htmlEscapeJsonString = htmlEscapeJsonString;
			const ESCAPE_LOOKUP = {
				'&': '\\u0026',
				'>': '\\u003e',
				'<': '\\u003c',
				'\u2028': '\\u2028',
				'\u2029': '\\u2029',
			};
			const ESCAPE_REGEX = /[&><\u2028\u2029]/g;
			function htmlEscapeJsonString(str) {
				return str.replace(ESCAPE_REGEX, (match) => ESCAPE_LOOKUP[match]);
			}
		},
	}['next/dist/server/htmlescape.js']
);

// next/dist/lib/pretty-bytes.js
export var $3b6c4dd8 = $$m(
	{
		'next/dist/lib/pretty-bytes.js': (module, exports) => {
			Object.defineProperty(exports, '__esModule', {
				value: true,
			});
			exports.default = prettyBytes;
			function prettyBytes(number, options) {
				if (!Number.isFinite(number))
					throw new TypeError(`Expected a finite number, got ${typeof number}: ${number}`);
				options = Object.assign({}, options);
				if (options.signed && number === 0) return ' 0 B';
				const isNegative = number < 0;
				const prefix = isNegative ? '-' : options.signed ? '+' : '';
				if (isNegative) number = -number;
				if (number < 1) {
					const numberString = toLocaleString(number, options.locale);
					return prefix + numberString + ' B';
				}
				const exponent = Math.min(Math.floor(Math.log10(number) / 3), UNITS.length - 1);
				number = Number((number / Math.pow(1000, exponent)).toPrecision(3));
				const numberString = toLocaleString(number, options.locale);
				const unit = UNITS[exponent];
				return prefix + numberString + ' ' + unit;
			}
			const UNITS = ['B', 'kB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];
			const toLocaleString = (number, locale) => {
				let result = number;
				if (typeof locale === 'string') result = number.toLocaleString(locale);
				else if (locale === true) result = number.toLocaleString();
				return result;
			};
		},
	}['next/dist/lib/pretty-bytes.js']
);

// next/dist/lib/is-error.js
export var $3c40c5e6 = $$m(
	{
		'next/dist/lib/is-error.js': (module, exports) => {
			Object.defineProperty(exports, '__esModule', {
				value: true,
			});
			exports.default = isError;
			exports.getProperError = getProperError;
			var _isPlainObject = __require.d($8153fe77());
			function isError(err) {
				return typeof err === 'object' && err !== null && 'name' in err && 'message' in err;
			}
			function getProperError(err) {
				if (isError(err)) return err;
				if (typeof err === 'undefined')
					return new Error(
						'An undefined error was thrown, see here for more info: https://nextjs.org/docs/messages/threw-undefined'
					);
				if (err === null)
					return new Error(
						'A null error was thrown, see here for more info: https://nextjs.org/docs/messages/threw-undefined'
					);
				return new Error((0, _isPlainObject).isPlainObject(err) ? JSON.stringify(err) : err + '');
			}
		},
	}['next/dist/lib/is-error.js']
);

// next/dist/shared/lib/is-plain-object.js
export var $8153fe77 = $$m(
	{
		'next/dist/shared/lib/is-plain-object.js': (module, exports) => {
			Object.defineProperty(exports, '__esModule', {
				value: true,
			});
			exports.getObjectClassLabel = getObjectClassLabel;
			exports.isPlainObject = isPlainObject;
			function getObjectClassLabel(value) {
				return Object.prototype.toString.call(value);
			}
			function isPlainObject(value) {
				if (getObjectClassLabel(value) !== '[object Object]') return false;
				const prototype = Object.getPrototypeOf(value);
				return prototype === null || prototype === Object.prototype;
			}
		},
	}['next/dist/shared/lib/is-plain-object.js']
);

// next/dist/server/normalize-page-path.js
export var $26f1cdf7 = $$m(
	{
		'next/dist/server/normalize-page-path.js': (module, exports) => {
			Object.defineProperty(exports, '__esModule', {
				value: true,
			});
			Object.defineProperty(exports, 'normalizePathSep', {
				enumerable: true,
				get: function () {
					return _denormalizePagePath.normalizePathSep;
				},
			});
			Object.defineProperty(exports, 'denormalizePagePath', {
				enumerable: true,
				get: function () {
					return _denormalizePagePath.denormalizePagePath;
				},
			});
			exports.normalizePagePath = normalizePagePath;
			var _path = require('node:path');
			var _utils = __require.d($22bcb556());
			var _denormalizePagePath = __require.d($b62913c8());
			function normalizePagePath(page) {
				if (page === '/') page = '/index';
				else if (/^\/index(\/|$)/.test(page) && !(0, _utils).isDynamicRoute(page)) page = `/index${page}`;
				if (!page.startsWith('/')) page = `/${page}`;
				const resolvedPage = _path.posix.normalize(page);
				if (page !== resolvedPage)
					throw new Error(`Requested and resolved page mismatch: ${page} ${resolvedPage}`);
				return page;
			}
		},
	}['next/dist/server/normalize-page-path.js']
);

// next/dist/server/denormalize-page-path.js
export var $b62913c8 = $$m(
	{
		'next/dist/server/denormalize-page-path.js': (module, exports) => {
			Object.defineProperty(exports, '__esModule', {
				value: true,
			});
			exports.normalizePathSep = normalizePathSep;
			exports.denormalizePagePath = denormalizePagePath;
			var _utils = __require.d($22bcb556());
			function normalizePathSep(path) {
				return path.replace(/\\/g, '/');
			}
			function denormalizePagePath(page) {
				page = normalizePathSep(page);
				if (page.startsWith('/index/') && !(0, _utils).isDynamicRoute(page)) page = page.slice(6);
				else if (page === '/index') page = '/';
				return page;
			}
		},
	}['next/dist/server/denormalize-page-path.js']
);

// next/dist/shared/lib/constants.js
export var $c824af17 = $$m(
	{
		'next/dist/shared/lib/constants.js': (module, exports) => {
			Object.defineProperty(exports, '__esModule', {
				value: true,
			});
			exports.TRACE_OUTPUT_VERSION =
				exports.STATIC_STATUS_PAGES =
				exports.OPTIMIZED_FONT_PROVIDERS =
				exports.GOOGLE_FONT_PROVIDER =
				exports.FLIGHT_PROPS_ID =
				exports.SERVER_PROPS_ID =
				exports.STATIC_PROPS_ID =
				exports.PERMANENT_REDIRECT_STATUS =
				exports.TEMPORARY_REDIRECT_STATUS =
				exports.MIDDLEWARE_RUNTIME_WEBPACK =
				exports.MIDDLEWARE_SSR_RUNTIME_WEBPACK =
				exports.CLIENT_STATIC_FILES_RUNTIME_POLYFILLS_SYMBOL =
				exports.CLIENT_STATIC_FILES_RUNTIME_WEBPACK =
				exports.CLIENT_STATIC_FILES_RUNTIME_AMP =
				exports.CLIENT_STATIC_FILES_RUNTIME_REACT_REFRESH =
				exports.CLIENT_STATIC_FILES_RUNTIME_MAIN =
				exports.MIDDLEWARE_REACT_LOADABLE_MANIFEST =
				exports.MIDDLEWARE_BUILD_MANIFEST =
				exports.MIDDLEWARE_FLIGHT_MANIFEST =
				exports.STRING_LITERAL_DROP_BUNDLE =
				exports.CLIENT_STATIC_FILES_RUNTIME =
				exports.CLIENT_STATIC_FILES_PATH =
				exports.CLIENT_PUBLIC_FILES_PATH =
				exports.BLOCKED_PAGES =
				exports.BUILD_ID_FILE =
				exports.CONFIG_FILES =
				exports.SERVERLESS_DIRECTORY =
				exports.SERVER_DIRECTORY =
				exports.FONT_MANIFEST =
				exports.REACT_LOADABLE_MANIFEST =
				exports.DEV_MIDDLEWARE_MANIFEST =
				exports.MIDDLEWARE_MANIFEST =
				exports.FUNCTIONS_MANIFEST =
				exports.DEV_CLIENT_PAGES_MANIFEST =
				exports.SERVER_FILES_MANIFEST =
				exports.IMAGES_MANIFEST =
				exports.ROUTES_MANIFEST =
				exports.PRERENDER_MANIFEST =
				exports.EXPORT_DETAIL =
				exports.EXPORT_MARKER =
				exports.BUILD_MANIFEST =
				exports.PAGES_MANIFEST =
				exports.PHASE_TEST =
				exports.PHASE_DEVELOPMENT_SERVER =
				exports.PHASE_PRODUCTION_SERVER =
				exports.PHASE_PRODUCTION_BUILD =
				exports.PHASE_EXPORT =
					undefined;
			const PHASE_EXPORT = 'phase-export';
			exports.PHASE_EXPORT = PHASE_EXPORT;
			const PHASE_PRODUCTION_BUILD = 'phase-production-build';
			exports.PHASE_PRODUCTION_BUILD = PHASE_PRODUCTION_BUILD;
			const PHASE_PRODUCTION_SERVER = 'phase-production-server';
			exports.PHASE_PRODUCTION_SERVER = PHASE_PRODUCTION_SERVER;
			const PHASE_DEVELOPMENT_SERVER = 'phase-development-server';
			exports.PHASE_DEVELOPMENT_SERVER = PHASE_DEVELOPMENT_SERVER;
			const PHASE_TEST = 'phase-test';
			exports.PHASE_TEST = PHASE_TEST;
			const PAGES_MANIFEST = 'pages-manifest.json';
			exports.PAGES_MANIFEST = PAGES_MANIFEST;
			const BUILD_MANIFEST = 'build-manifest.json';
			exports.BUILD_MANIFEST = BUILD_MANIFEST;
			const EXPORT_MARKER = 'export-marker.json';
			exports.EXPORT_MARKER = EXPORT_MARKER;
			const EXPORT_DETAIL = 'export-detail.json';
			exports.EXPORT_DETAIL = EXPORT_DETAIL;
			const PRERENDER_MANIFEST = 'prerender-manifest.json';
			exports.PRERENDER_MANIFEST = PRERENDER_MANIFEST;
			const ROUTES_MANIFEST = 'routes-manifest.json';
			exports.ROUTES_MANIFEST = ROUTES_MANIFEST;
			const IMAGES_MANIFEST = 'images-manifest.json';
			exports.IMAGES_MANIFEST = IMAGES_MANIFEST;
			const SERVER_FILES_MANIFEST = 'required-server-files.json';
			exports.SERVER_FILES_MANIFEST = SERVER_FILES_MANIFEST;
			const DEV_CLIENT_PAGES_MANIFEST = '_devPagesManifest.json';
			exports.DEV_CLIENT_PAGES_MANIFEST = DEV_CLIENT_PAGES_MANIFEST;
			const FUNCTIONS_MANIFEST = 'functions-manifest.json';
			exports.FUNCTIONS_MANIFEST = FUNCTIONS_MANIFEST;
			const MIDDLEWARE_MANIFEST = 'middleware-manifest.json';
			exports.MIDDLEWARE_MANIFEST = MIDDLEWARE_MANIFEST;
			const DEV_MIDDLEWARE_MANIFEST = '_devMiddlewareManifest.json';
			exports.DEV_MIDDLEWARE_MANIFEST = DEV_MIDDLEWARE_MANIFEST;
			const REACT_LOADABLE_MANIFEST = 'react-loadable-manifest.json';
			exports.REACT_LOADABLE_MANIFEST = REACT_LOADABLE_MANIFEST;
			const FONT_MANIFEST = 'font-manifest.json';
			exports.FONT_MANIFEST = FONT_MANIFEST;
			const SERVER_DIRECTORY = 'server';
			exports.SERVER_DIRECTORY = SERVER_DIRECTORY;
			const SERVERLESS_DIRECTORY = 'serverless';
			exports.SERVERLESS_DIRECTORY = SERVERLESS_DIRECTORY;
			const CONFIG_FILES = ['next.config.js', 'next.config.mjs'];
			exports.CONFIG_FILES = CONFIG_FILES;
			const BUILD_ID_FILE = 'BUILD_ID';
			exports.BUILD_ID_FILE = BUILD_ID_FILE;
			const BLOCKED_PAGES = ['/_document', '/_app', '/_error'];
			exports.BLOCKED_PAGES = BLOCKED_PAGES;
			const CLIENT_PUBLIC_FILES_PATH = 'public';
			exports.CLIENT_PUBLIC_FILES_PATH = CLIENT_PUBLIC_FILES_PATH;
			const CLIENT_STATIC_FILES_PATH = 'static';
			exports.CLIENT_STATIC_FILES_PATH = CLIENT_STATIC_FILES_PATH;
			const CLIENT_STATIC_FILES_RUNTIME = 'runtime';
			exports.CLIENT_STATIC_FILES_RUNTIME = CLIENT_STATIC_FILES_RUNTIME;
			const STRING_LITERAL_DROP_BUNDLE = '__NEXT_DROP_CLIENT_FILE__';
			exports.STRING_LITERAL_DROP_BUNDLE = STRING_LITERAL_DROP_BUNDLE;
			const MIDDLEWARE_FLIGHT_MANIFEST = 'middleware-flight-manifest';
			exports.MIDDLEWARE_FLIGHT_MANIFEST = MIDDLEWARE_FLIGHT_MANIFEST;
			const MIDDLEWARE_BUILD_MANIFEST = 'middleware-build-manifest';
			exports.MIDDLEWARE_BUILD_MANIFEST = MIDDLEWARE_BUILD_MANIFEST;
			const MIDDLEWARE_REACT_LOADABLE_MANIFEST = 'middleware-react-loadable-manifest';
			exports.MIDDLEWARE_REACT_LOADABLE_MANIFEST = MIDDLEWARE_REACT_LOADABLE_MANIFEST;
			const CLIENT_STATIC_FILES_RUNTIME_MAIN = `main`;
			exports.CLIENT_STATIC_FILES_RUNTIME_MAIN = CLIENT_STATIC_FILES_RUNTIME_MAIN;
			const CLIENT_STATIC_FILES_RUNTIME_REACT_REFRESH = `react-refresh`;
			exports.CLIENT_STATIC_FILES_RUNTIME_REACT_REFRESH = CLIENT_STATIC_FILES_RUNTIME_REACT_REFRESH;
			const CLIENT_STATIC_FILES_RUNTIME_AMP = `amp`;
			exports.CLIENT_STATIC_FILES_RUNTIME_AMP = CLIENT_STATIC_FILES_RUNTIME_AMP;
			const CLIENT_STATIC_FILES_RUNTIME_WEBPACK = `webpack`;
			exports.CLIENT_STATIC_FILES_RUNTIME_WEBPACK = CLIENT_STATIC_FILES_RUNTIME_WEBPACK;
			const CLIENT_STATIC_FILES_RUNTIME_POLYFILLS_SYMBOL = Symbol(`polyfills`);
			exports.CLIENT_STATIC_FILES_RUNTIME_POLYFILLS_SYMBOL = CLIENT_STATIC_FILES_RUNTIME_POLYFILLS_SYMBOL;
			const MIDDLEWARE_SSR_RUNTIME_WEBPACK = 'middleware-ssr-runtime';
			exports.MIDDLEWARE_SSR_RUNTIME_WEBPACK = MIDDLEWARE_SSR_RUNTIME_WEBPACK;
			const MIDDLEWARE_RUNTIME_WEBPACK = 'middleware-runtime';
			exports.MIDDLEWARE_RUNTIME_WEBPACK = MIDDLEWARE_RUNTIME_WEBPACK;
			const TEMPORARY_REDIRECT_STATUS = 307;
			exports.TEMPORARY_REDIRECT_STATUS = TEMPORARY_REDIRECT_STATUS;
			const PERMANENT_REDIRECT_STATUS = 308;
			exports.PERMANENT_REDIRECT_STATUS = PERMANENT_REDIRECT_STATUS;
			const STATIC_PROPS_ID = '__N_SSG';
			exports.STATIC_PROPS_ID = STATIC_PROPS_ID;
			const SERVER_PROPS_ID = '__N_SSP';
			exports.SERVER_PROPS_ID = SERVER_PROPS_ID;
			const FLIGHT_PROPS_ID = '__N_RSC';
			exports.FLIGHT_PROPS_ID = FLIGHT_PROPS_ID;
			const GOOGLE_FONT_PROVIDER = 'https://fonts.googleapis.com/';
			exports.GOOGLE_FONT_PROVIDER = GOOGLE_FONT_PROVIDER;
			const OPTIMIZED_FONT_PROVIDERS = [
				{
					url: GOOGLE_FONT_PROVIDER,
					preconnect: 'https://fonts.gstatic.com',
				},
				{
					url: 'https://use.typekit.net',
					preconnect: 'https://use.typekit.net',
				},
			];
			exports.OPTIMIZED_FONT_PROVIDERS = OPTIMIZED_FONT_PROVIDERS;
			const STATIC_STATUS_PAGES = ['/500'];
			exports.STATIC_STATUS_PAGES = STATIC_STATUS_PAGES;
			const TRACE_OUTPUT_VERSION = 1;
			exports.TRACE_OUTPUT_VERSION = TRACE_OUTPUT_VERSION;
		},
	}['next/dist/shared/lib/constants.js']
);

// next/dist/shared/lib/router/utils/index.js
export var $22bcb556 = $$m(
	{
		'next/dist/shared/lib/router/utils/index.js': (module, exports) => {
			Object.defineProperty(exports, '__esModule', {
				value: true,
			});
			Object.defineProperty(exports, 'getMiddlewareRegex', {
				enumerable: true,
				get: function () {
					return _getMiddlewareRegex.getMiddlewareRegex;
				},
			});
			Object.defineProperty(exports, 'getRouteMatcher', {
				enumerable: true,
				get: function () {
					return _routeMatcher.getRouteMatcher;
				},
			});
			Object.defineProperty(exports, 'getRouteRegex', {
				enumerable: true,
				get: function () {
					return _routeRegex.getRouteRegex;
				},
			});
			Object.defineProperty(exports, 'getRoutingItems', {
				enumerable: true,
				get: function () {
					return _routingItems.getRoutingItems;
				},
			});
			Object.defineProperty(exports, 'RoutingItem', {
				enumerable: true,
				get: function () {
					return _routingItems.RoutingItem;
				},
			});
			Object.defineProperty(exports, 'getSortedRoutes', {
				enumerable: true,
				get: function () {
					return _sortedRoutes.getSortedRoutes;
				},
			});
			Object.defineProperty(exports, 'isDynamicRoute', {
				enumerable: true,
				get: function () {
					return _isDynamic.isDynamicRoute;
				},
			});
			var _getMiddlewareRegex = __require.d($2ccbcbda());
			var _routeMatcher = __require.d($fbbf23a7());
			var _routeRegex = __require.d($b865482d());
			var _routingItems = __require.d($6e0de08a());
			var _sortedRoutes = __require.d($a20df8ee());
			var _isDynamic = __require.d($cc3b5d48());
		},
	}['next/dist/shared/lib/router/utils/index.js']
);

// next/dist/shared/lib/router/utils/is-dynamic.js
export var $cc3b5d48 = $$m(
	{
		'next/dist/shared/lib/router/utils/is-dynamic.js': (module, exports) => {
			Object.defineProperty(exports, '__esModule', {
				value: true,
			});
			exports.isDynamicRoute = isDynamicRoute;
			const TEST_ROUTE = /\/\[[^/]+?\](?=\/|$)/;
			function isDynamicRoute(route) {
				return TEST_ROUTE.test(route);
			}
		},
	}['next/dist/shared/lib/router/utils/is-dynamic.js']
);

// next/dist/client/script.js
export var $9c41992e = $$m(
	{
		'next/dist/client/script.js': (module, exports) => {
			Object.defineProperty(exports, '__esModule', {
				value: true,
			});
			exports.initScriptLoader = initScriptLoader;
			exports.default = undefined;
			var _react = _interopRequireWildcard(__require.d($a85977a5()));
			var _headManagerContext = __require.d($db29be3a());
			var _headManager = __require.d($64a4b1ba());
			var _requestIdleCallback = __require.d($a7a09795());
			function _defineProperty(obj, key, value) {
				if (key in obj)
					Object.defineProperty(obj, key, {
						value,
						enumerable: true,
						configurable: true,
						writable: true,
					});
				else obj[key] = value;
				return obj;
			}
			function _interopRequireWildcard(obj) {
				if (obj && obj.__esModule) return obj;
				else {
					var newObj = {};
					if (obj != null) {
						for (var key in obj)
							if (Object.prototype.hasOwnProperty.call(obj, key)) {
								var desc =
									Object.defineProperty && Object.getOwnPropertyDescriptor
										? Object.getOwnPropertyDescriptor(obj, key)
										: {};
								if (desc.get || desc.set) Object.defineProperty(newObj, key, desc);
								else newObj[key] = obj[key];
							}
					}
					newObj.default = obj;
					return newObj;
				}
			}
			function _objectSpread(target) {
				for (var i = 1; i < arguments.length; i++) {
					var source = arguments[i] != null ? arguments[i] : {};
					var ownKeys = Object.keys(source);
					if (typeof Object.getOwnPropertySymbols === 'function')
						ownKeys = ownKeys.concat(
							Object.getOwnPropertySymbols(source).filter(function (sym) {
								return Object.getOwnPropertyDescriptor(source, sym).enumerable;
							})
						);
					ownKeys.forEach(function (key) {
						_defineProperty(target, key, source[key]);
					});
				}
				return target;
			}
			function _objectWithoutProperties(source, excluded) {
				if (source == null) return {};
				var target = _objectWithoutPropertiesLoose(source, excluded);
				var key, i;
				if (Object.getOwnPropertySymbols) {
					var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
					for (i = 0; i < sourceSymbolKeys.length; i++) {
						key = sourceSymbolKeys[i];
						if (excluded.indexOf(key) >= 0) continue;
						if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
						target[key] = source[key];
					}
				}
				return target;
			}
			function _objectWithoutPropertiesLoose(source, excluded) {
				if (source == null) return {};
				var target = {};
				var sourceKeys = Object.keys(source);
				var key, i;
				for (i = 0; i < sourceKeys.length; i++) {
					key = sourceKeys[i];
					if (excluded.indexOf(key) >= 0) continue;
					target[key] = source[key];
				}
				return target;
			}
			const ScriptCache = new Map();
			const LoadCache = new Set();
			const ignoreProps = ['onLoad', 'dangerouslySetInnerHTML', 'children', 'onError', 'strategy'];
			const loadScript = (props) => {
				const {
					src,
					id,
					onLoad = () => {},
					dangerouslySetInnerHTML,
					children = '',
					strategy = 'afterInteractive',
					onError,
				} = props;
				const cacheKey = id || src;
				if (cacheKey && LoadCache.has(cacheKey)) return;
				if (ScriptCache.has(src)) {
					LoadCache.add(cacheKey);
					ScriptCache.get(src).then(onLoad, onError);
					return;
				}
				const el = document.createElement('script');
				const loadPromise = new Promise((resolve, reject) => {
					el.addEventListener('load', function (e) {
						resolve();
						if (onLoad) onLoad.call(this, e);
					});
					el.addEventListener('error', function (e) {
						reject(e);
					});
				}).catch(function (e) {
					if (onError) onError(e);
				});
				if (src) ScriptCache.set(src, loadPromise);
				LoadCache.add(cacheKey);
				if (dangerouslySetInnerHTML) el.innerHTML = dangerouslySetInnerHTML.__html || '';
				else if (children)
					el.textContent =
						typeof children === 'string' ? children : Array.isArray(children) ? children.join('') : '';
				else if (src) el.src = src;
				for (const [k, value] of Object.entries(props)) {
					if (value === undefined || ignoreProps.includes(k)) continue;
					const attr = _headManager.DOMAttributeNames[k] || k.toLowerCase();
					el.setAttribute(attr, value);
				}
				if (strategy === 'worker') el.setAttribute('type', 'text/partytown');
				el.setAttribute('data-nscript', strategy);
				document.body.appendChild(el);
			};
			function handleClientScriptLoad(props) {
				const { strategy = 'afterInteractive' } = props;
				if (strategy === 'afterInteractive') loadScript(props);
				else if (strategy === 'lazyOnload')
					window.addEventListener('load', () => {
						(0, _requestIdleCallback).requestIdleCallback(() => loadScript(props));
					});
			}
			function loadLazyScript(props) {
				if (document.readyState === 'complete')
					(0, _requestIdleCallback).requestIdleCallback(() => loadScript(props));
				else
					window.addEventListener('load', () => {
						(0, _requestIdleCallback).requestIdleCallback(() => loadScript(props));
					});
			}
			function initScriptLoader(scriptLoaderItems) {
				scriptLoaderItems.forEach(handleClientScriptLoad);
			}
			function Script(props) {
				const {
						src = '',
						onLoad = () => {},
						dangerouslySetInnerHTML,
						strategy = 'afterInteractive',
						onError,
					} = props,
					restProps = _objectWithoutProperties(props, [
						'src',
						'onLoad',
						'dangerouslySetInnerHTML',
						'strategy',
						'onError',
					]);
				const { updateScripts, scripts, getIsSsr } = (0, _react).useContext(
					_headManagerContext.HeadManagerContext
				);
				(0, _react).useEffect(() => {
					if (strategy === 'afterInteractive') loadScript(props);
					else if (strategy === 'lazyOnload') loadLazyScript(props);
				}, [props, strategy]);
				if (strategy === 'beforeInteractive' || strategy === 'worker') {
					if (updateScripts) {
						scripts[strategy] = (scripts[strategy] || []).concat([
							_objectSpread(
								{
									src,
									onLoad,
									onError,
								},
								restProps
							),
						]);
						updateScripts(scripts);
					} else if (getIsSsr && getIsSsr()) LoadCache.add(restProps.id || src);
					else if (getIsSsr && !getIsSsr()) loadScript(props);
				}
				return null;
			}
			var _default = Script;
			exports.default = _default;
		},
	}['next/dist/client/script.js']
);

// next/dist/client/request-idle-callback.js
export var $a7a09795 = $$m(
	{
		'next/dist/client/request-idle-callback.js': (module, exports) => {
			Object.defineProperty(exports, '__esModule', {
				value: true,
			});
			exports.cancelIdleCallback = exports.requestIdleCallback = undefined;
			const requestIdleCallback =
				(typeof self !== 'undefined' && self.requestIdleCallback && self.requestIdleCallback.bind(window)) ||
				function (cb) {
					let start = Date.now();
					return setTimeout(function () {
						cb({
							didTimeout: false,
							timeRemaining: function () {
								return Math.max(0, 50 - (Date.now() - start));
							},
						});
					}, 1);
				};
			exports.requestIdleCallback = requestIdleCallback;
			const cancelIdleCallback =
				(typeof self !== 'undefined' && self.cancelIdleCallback && self.cancelIdleCallback.bind(window)) ||
				function (id) {
					return clearTimeout(id);
				};
			exports.cancelIdleCallback = cancelIdleCallback;
		},
	}['next/dist/client/request-idle-callback.js']
);

// next/dist/shared/lib/router/utils/get-middleware-regex.js
export var $2ccbcbda = $$m(
	{
		'next/dist/shared/lib/router/utils/get-middleware-regex.js': (module, exports) => {
			Object.defineProperty(exports, '__esModule', {
				value: true,
			});
			exports.getMiddlewareRegex = getMiddlewareRegex;
			var _routeRegex = __require.d($b865482d());
			const FIRST_SEGMENT_DYNAMIC = /^\/\[[^/]+?\](?=\/|$)/;
			const NOT_API_ROUTE = '(?!/api(?:/|$))';
			function getMiddlewareRegex(normalizedRoute, catchAll = true) {
				const result = (0, _routeRegex).getParametrizedRoute(normalizedRoute);
				const notApiRegex = FIRST_SEGMENT_DYNAMIC.test(normalizedRoute) ? NOT_API_ROUTE : '';
				let catchAllRegex = catchAll ? '(?!_next($|/)).*' : '';
				let catchAllGroupedRegex = catchAll ? '(?:(/.*)?)' : '';
				if ('routeKeys' in result) {
					if (result.parameterizedRoute === '/')
						return {
							groups: {},
							namedRegex: `^/${catchAllRegex}\$`,
							re: new RegExp(`^/${catchAllRegex}\$`),
							routeKeys: {},
						};
					return {
						groups: result.groups,
						namedRegex: `^${notApiRegex}${result.namedParameterizedRoute}${catchAllGroupedRegex}\$`,
						re: new RegExp(`^${notApiRegex}${result.parameterizedRoute}${catchAllGroupedRegex}\$`),
						routeKeys: result.routeKeys,
					};
				}
				if (result.parameterizedRoute === '/')
					return {
						groups: {},
						re: new RegExp(`^/${catchAllRegex}\$`),
					};
				return {
					groups: {},
					re: new RegExp(`^${notApiRegex}${result.parameterizedRoute}${catchAllGroupedRegex}\$`),
				};
			}
		},
	}['next/dist/shared/lib/router/utils/get-middleware-regex.js']
);

// next/dist/shared/lib/router/utils/routing-items.js
export var $6e0de08a = $$m(
	{
		'next/dist/shared/lib/router/utils/routing-items.js': (module, exports) => {
			Object.defineProperty(exports, '__esModule', {
				value: true,
			});
			exports.getRoutingItems = getRoutingItems;
			var _getMiddlewareRegex = __require.d($2ccbcbda());
			var _routeMatcher = __require.d($fbbf23a7());
			var _routeRegex = __require.d($b865482d());
			var _sortedRoutes = __require.d($a20df8ee());
			const MIDDLEWARE_SUFFIX = '/_middleware';
			function getRoutingItems(pages, middleware) {
				const middlewarePages = middleware.map((m) => `${m.page}${MIDDLEWARE_SUFFIX}`);
				const middlewareMap = new Map(middleware.map((m) => [m.page, m]));
				const sortedRoutes = (0, _sortedRoutes).getSortedRoutes([...pages, ...middlewarePages]);
				return sortedRoutes.map((page) => {
					if (page.endsWith(MIDDLEWARE_SUFFIX)) {
						const p = page.slice(0, -MIDDLEWARE_SUFFIX.length) || '/';
						const { ssr } = middlewareMap.get(p);
						return {
							match: (0, _routeMatcher).getRouteMatcher(
								(0, _getMiddlewareRegex).getMiddlewareRegex(p, !ssr)
							),
							page: p,
							ssr,
							isMiddleware: true,
						};
					} else
						return {
							match: (0, _routeMatcher).getRouteMatcher((0, _routeRegex).getRouteRegex(page)),
							page,
						};
				});
			}
		},
	}['next/dist/shared/lib/router/utils/routing-items.js']
);

// next/dist/shared/lib/router/utils/route-matcher.js
export var $fbbf23a7 = $$m(
	{
		'next/dist/shared/lib/router/utils/route-matcher.js': (module, exports) => {
			Object.defineProperty(exports, '__esModule', {
				value: true,
			});
			exports.getRouteMatcher = getRouteMatcher;
			var _utils = __require.d($8496d550());
			function getRouteMatcher(routeRegex) {
				const { re, groups } = routeRegex;
				return (pathname) => {
					const routeMatch = re.exec(pathname);
					if (!routeMatch) return false;
					const decode = (param) => {
						try {
							return decodeURIComponent(param);
						} catch (_) {
							throw new _utils.DecodeError('failed to decode param');
						}
					};
					const params = {};
					Object.keys(groups).forEach((slugName) => {
						const g = groups[slugName];
						const m = routeMatch[g.pos];
						if (m !== undefined)
							params[slugName] = ~m.indexOf('/')
								? m.split('/').map((entry) => decode(entry))
								: g.repeat
								? [decode(m)]
								: decode(m);
					});
					return params;
				};
			}
		},
	}['next/dist/shared/lib/router/utils/route-matcher.js']
);

// next/dist/shared/lib/router/utils/route-regex.js
export var $b865482d = $$m(
	{
		'next/dist/shared/lib/router/utils/route-regex.js': (module, exports) => {
			Object.defineProperty(exports, '__esModule', {
				value: true,
			});
			exports.getParametrizedRoute = getParametrizedRoute;
			exports.getRouteRegex = getRouteRegex;
			var _escapeRegexp = __require.d($4cd706f5());
			function parseParameter(param) {
				const optional = param.startsWith('[') && param.endsWith(']');
				if (optional) param = param.slice(1, -1);
				const repeat = param.startsWith('...');
				if (repeat) param = param.slice(3);
				return {
					key: param,
					repeat,
					optional,
				};
			}
			function getParametrizedRoute(route) {
				const segments = (route.replace(/\/$/, '') || '/').slice(1).split('/');
				const groups = {};
				let groupIndex = 1;
				const parameterizedRoute = segments
					.map((segment) => {
						if (segment.startsWith('[') && segment.endsWith(']')) {
							const { key, optional, repeat } = parseParameter(segment.slice(1, -1));
							groups[key] = {
								pos: groupIndex++,
								repeat,
								optional,
							};
							return repeat ? (optional ? '(?:/(.+?))?' : '/(.+?)') : '/([^/]+?)';
						} else return `/${(0, _escapeRegexp).escapeStringRegexp(segment)}`;
					})
					.join('');
				if (typeof window === 'undefined') {
					let routeKeyCharCode = 97;
					let routeKeyCharLength = 1;
					const getSafeRouteKey = () => {
						let routeKey = '';
						for (let i = 0; i < routeKeyCharLength; i++) {
							routeKey += String.fromCharCode(routeKeyCharCode);
							routeKeyCharCode++;
							if (routeKeyCharCode > 122) {
								routeKeyCharLength++;
								routeKeyCharCode = 97;
							}
						}
						return routeKey;
					};
					const routeKeys = {};
					let namedParameterizedRoute = segments
						.map((segment) => {
							if (segment.startsWith('[') && segment.endsWith(']')) {
								const { key, optional, repeat } = parseParameter(segment.slice(1, -1));
								let cleanedKey = key.replace(/\W/g, '');
								let invalidKey = false;
								if (cleanedKey.length === 0 || cleanedKey.length > 30) invalidKey = true;
								if (!isNaN(parseInt(cleanedKey.slice(0, 1)))) invalidKey = true;
								if (invalidKey) cleanedKey = getSafeRouteKey();
								routeKeys[cleanedKey] = key;
								return repeat
									? optional
										? `(?:/(?<${cleanedKey}>.+?))?`
										: `/(?<${cleanedKey}>.+?)`
									: `/(?<${cleanedKey}>[^/]+?)`;
							} else return `/${(0, _escapeRegexp).escapeStringRegexp(segment)}`;
						})
						.join('');
					return {
						parameterizedRoute,
						namedParameterizedRoute,
						groups,
						routeKeys,
					};
				}
				return {
					parameterizedRoute,
					groups,
				};
			}
			function getRouteRegex(normalizedRoute) {
				const result = getParametrizedRoute(normalizedRoute);
				if ('routeKeys' in result)
					return {
						re: new RegExp(`^${result.parameterizedRoute}(?:/)?\$`),
						groups: result.groups,
						routeKeys: result.routeKeys,
						namedRegex: `^${result.namedParameterizedRoute}(?:/)?\$`,
					};
				return {
					re: new RegExp(`^${result.parameterizedRoute}(?:/)?\$`),
					groups: result.groups,
				};
			}
		},
	}['next/dist/shared/lib/router/utils/route-regex.js']
);

// next/dist/shared/lib/escape-regexp.js
export var $4cd706f5 = $$m(
	{
		'next/dist/shared/lib/escape-regexp.js': (module, exports) => {
			Object.defineProperty(exports, '__esModule', {
				value: true,
			});
			exports.escapeStringRegexp = escapeStringRegexp;
			function escapeStringRegexp(str) {
				return str.replace(/[|\\{}()[\]^$+*?.-]/g, '\\$&');
			}
		},
	}['next/dist/shared/lib/escape-regexp.js']
);

// next/dist/shared/lib/router/utils/sorted-routes.js
export var $a20df8ee = $$m(
	{
		'next/dist/shared/lib/router/utils/sorted-routes.js': (module, exports) => {
			Object.defineProperty(exports, '__esModule', {
				value: true,
			});
			exports.getSortedRoutes = getSortedRoutes;

			class UrlNode {
				insert(urlPath) {
					this._insert(urlPath.split('/').filter(Boolean), [], false);
				}
				smoosh() {
					return this._smoosh();
				}
				_smoosh(prefix = '/') {
					const childrenPaths = [...this.children.keys()].sort();
					if (this.slugName !== null) childrenPaths.splice(childrenPaths.indexOf('[]'), 1);
					if (this.restSlugName !== null) childrenPaths.splice(childrenPaths.indexOf('[...]'), 1);
					if (this.optionalRestSlugName !== null) childrenPaths.splice(childrenPaths.indexOf('[[...]]'), 1);
					if (this.isMiddleware) childrenPaths.splice(childrenPaths.indexOf('_middleware'), 1);
					const routes = childrenPaths
						.map((c) => this.children.get(c)._smoosh(`${prefix}${c}/`))
						.reduce((prev, curr) => [...prev, ...curr], []);
					if (this.slugName !== null)
						routes.push(...this.children.get('[]')._smoosh(`${prefix}[${this.slugName}]/`));
					if (!this.placeholder) {
						const r = prefix === '/' ? '/' : prefix.slice(0, -1);
						if (this.optionalRestSlugName != null)
							throw new Error(
								`You cannot define a route with the same specificity as a optional catch-all route ("${r}" and "${r}[[...${this.optionalRestSlugName}]]").`
							);
						routes.unshift(r);
					}
					if (this.isMiddleware)
						routes.unshift(...this.children.get('_middleware')._smoosh(`${prefix}_middleware/`));
					if (this.restSlugName !== null)
						routes.push(...this.children.get('[...]')._smoosh(`${prefix}[...${this.restSlugName}]/`));
					if (this.optionalRestSlugName !== null)
						routes.push(
							...this.children.get('[[...]]')._smoosh(`${prefix}[[...${this.optionalRestSlugName}]]/`)
						);
					return routes;
				}
				_insert(urlPaths, slugNames, isCatchAll) {
					if (urlPaths.length === 0) {
						this.placeholder = false;
						return;
					}
					if (isCatchAll) throw new Error(`Catch-all must be the last part of the URL.`);
					let nextSegment = urlPaths[0];
					if (nextSegment.startsWith('[') && nextSegment.endsWith(']')) {
						function handleSlug(previousSlug, nextSlug) {
							if (previousSlug !== null) {
								if (previousSlug !== nextSlug)
									throw new Error(
										`You cannot use different slug names for the same dynamic path ('${previousSlug}' !== '${nextSlug}').`
									);
							}
							slugNames.forEach((slug) => {
								if (slug === nextSlug)
									throw new Error(
										`You cannot have the same slug name "${nextSlug}" repeat within a single dynamic path`
									);
								if (slug.replace(/\W/g, '') === nextSegment.replace(/\W/g, ''))
									throw new Error(
										`You cannot have the slug names "${slug}" and "${nextSlug}" differ only by non-word symbols within a single dynamic path`
									);
							});
							slugNames.push(nextSlug);
						}
						let segmentName = nextSegment.slice(1, -1);
						let isOptional = false;
						if (segmentName.startsWith('[') && segmentName.endsWith(']')) {
							segmentName = segmentName.slice(1, -1);
							isOptional = true;
						}
						if (segmentName.startsWith('...')) {
							segmentName = segmentName.substring(3);
							isCatchAll = true;
						}
						if (segmentName.startsWith('[') || segmentName.endsWith(']'))
							throw new Error(
								`Segment names may not start or end with extra brackets ('${segmentName}').`
							);
						if (segmentName.startsWith('.'))
							throw new Error(`Segment names may not start with erroneous periods ('${segmentName}').`);
						if (isCatchAll)
							if (isOptional) {
								if (this.restSlugName != null)
									throw new Error(
										`You cannot use both an required and optional catch-all route at the same level ("[...${this.restSlugName}]" and "${urlPaths[0]}" ).`
									);
								handleSlug(this.optionalRestSlugName, segmentName);
								this.optionalRestSlugName = segmentName;
								nextSegment = '[[...]]';
							} else {
								if (this.optionalRestSlugName != null)
									throw new Error(
										`You cannot use both an optional and required catch-all route at the same level ("[[...${this.optionalRestSlugName}]]" and "${urlPaths[0]}").`
									);
								handleSlug(this.restSlugName, segmentName);
								this.restSlugName = segmentName;
								nextSegment = '[...]';
							}
						else {
							if (isOptional)
								throw new Error(`Optional route parameters are not yet supported ("${urlPaths[0]}").`);
							handleSlug(this.slugName, segmentName);
							this.slugName = segmentName;
							nextSegment = '[]';
						}
					} else if (nextSegment === '_middleware' && urlPaths.length === 1) this.isMiddleware = true;
					if (!this.children.has(nextSegment)) this.children.set(nextSegment, new UrlNode());
					this.children.get(nextSegment)._insert(urlPaths.slice(1), slugNames, isCatchAll);
				}
				constructor() {
					this.placeholder = true;
					this.children = new Map();
					this.slugName = null;
					this.restSlugName = null;
					this.optionalRestSlugName = null;
					this.isMiddleware = false;
				}
			}
			function getSortedRoutes(normalizedPages) {
				const root = new UrlNode();
				normalizedPages.forEach((pagePath) => root.insert(pagePath));
				return root.smoosh();
			}
		},
	}['next/dist/shared/lib/router/utils/sorted-routes.js']
);

// next/dist/client/head-manager.js
export var $64a4b1ba = $$m(
	{
		'next/dist/client/head-manager.js': (module, exports) => {
			Object.defineProperty(exports, '__esModule', {
				value: true,
			});
			exports.default = initHeadManager;
			exports.isEqualNode = isEqualNode;
			exports.DOMAttributeNames = undefined;
			function initHeadManager() {
				let updatePromise = null;
				return {
					mountedInstances: new Set(),
					updateHead: (head) => {
						const promise = (updatePromise = Promise.resolve().then(() => {
							if (promise !== updatePromise) return;
							updatePromise = null;
							const tags = {};
							head.forEach((h) => {
								if (h.type === 'link' && h.props['data-optimized-fonts'])
									if (document.querySelector(`style[data-href="${h.props['data-href']}"]`)) return;
									else {
										h.props.href = h.props['data-href'];
										h.props['data-href'] = undefined;
									}
								const components = tags[h.type] || [];
								components.push(h);
								tags[h.type] = components;
							});
							const titleComponent = tags.title ? tags.title[0] : null;
							let title = '';
							if (titleComponent) {
								const { children } = titleComponent.props;
								title =
									typeof children === 'string'
										? children
										: Array.isArray(children)
										? children.join('')
										: '';
							}
							if (title !== document.title) document.title = title;
							['meta', 'base', 'link', 'style', 'script'].forEach((type) => {
								updateElements(type, tags[type] || []);
							});
						}));
					},
				};
			}
			const DOMAttributeNames = {
				acceptCharset: 'accept-charset',
				className: 'class',
				htmlFor: 'for',
				httpEquiv: 'http-equiv',
				noModule: 'noModule',
			};
			exports.DOMAttributeNames = DOMAttributeNames;
			function reactElementToDOM({ type, props }) {
				const el = document.createElement(type);
				for (const p in props) {
					if (!props.hasOwnProperty(p)) continue;
					if (p === 'children' || p === 'dangerouslySetInnerHTML') continue;
					if (props[p] === undefined) continue;
					const attr = DOMAttributeNames[p] || p.toLowerCase();
					if (type === 'script' && (attr === 'async' || attr === 'defer' || attr === 'noModule'))
						el[attr] = !!props[p];
					else el.setAttribute(attr, props[p]);
				}
				const { children, dangerouslySetInnerHTML } = props;
				if (dangerouslySetInnerHTML) el.innerHTML = dangerouslySetInnerHTML.__html || '';
				else if (children)
					el.textContent =
						typeof children === 'string' ? children : Array.isArray(children) ? children.join('') : '';
				return el;
			}
			function isEqualNode(oldTag, newTag) {
				if (oldTag instanceof HTMLElement && newTag instanceof HTMLElement) {
					const nonce = newTag.getAttribute('nonce');
					if (nonce && !oldTag.getAttribute('nonce')) {
						const cloneTag = newTag.cloneNode(true);
						cloneTag.setAttribute('nonce', '');
						cloneTag.nonce = nonce;
						return nonce === oldTag.nonce && oldTag.isEqualNode(cloneTag);
					}
				}
				return oldTag.isEqualNode(newTag);
			}
			function updateElements(type, components) {
				const headEl = document.getElementsByTagName('head')[0];
				const headCountEl = headEl.querySelector('meta[name=next-head-count]');
				if (!headCountEl) {
					console.error(
						'Warning: next-head-count is missing. https://nextjs.org/docs/messages/next-head-count-missing'
					);
					return;
				}
				const headCount = Number(headCountEl.content);
				const oldTags = [];
				for (
					let i = 0, j = headCountEl.previousElementSibling;
					i < headCount;
					i++, j = (j === null || j === undefined ? undefined : j.previousElementSibling) || null
				) {
					var ref;
					if (
						(j === null || j === undefined
							? undefined
							: (ref = j.tagName) === null || ref === undefined
							? undefined
							: ref.toLowerCase()) === type
					)
						oldTags.push(j);
				}
				const newTags = components.map(reactElementToDOM).filter((newTag) => {
					for (let k = 0, len = oldTags.length; k < len; k++) {
						const oldTag = oldTags[k];
						if (isEqualNode(oldTag, newTag)) {
							oldTags.splice(k, 1);
							return false;
						}
					}
					return true;
				});
				oldTags.forEach((t) => {
					var ref;
					return (ref = t.parentNode) === null || ref === undefined ? undefined : ref.removeChild(t);
				});
				newTags.forEach((t) => headEl.insertBefore(t, headCountEl));
				headCountEl.content = (headCount - oldTags.length + newTags.length).toString();
			}
		},
	}['next/dist/client/head-manager.js']
);

// react-dom/cjs/react-dom-server.browser.development.js
export var $51dde4b5 = $$m(
	{
		'react-dom/cjs/react-dom-server.browser.development.js': (module, exports) => {
			(function () {
				var React = __require.d($a85977a5());
				var ReactVersion = '18.2.0';
				var ReactSharedInternals = React.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
				function warn(format) {
					{
						for (
							var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1;
							_key < _len;
							_key++
						)
							args[_key - 1] = arguments[_key];
						printWarning('warn', format, args);
					}
				}
				function error(format) {
					{
						for (
							var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1;
							_key2 < _len2;
							_key2++
						)
							args[_key2 - 1] = arguments[_key2];
						printWarning('error', format, args);
					}
				}
				function printWarning(level, format, args) {
					{
						var ReactDebugCurrentFrame = ReactSharedInternals.ReactDebugCurrentFrame;
						var stack = ReactDebugCurrentFrame.getStackAddendum();
						if (stack !== '') {
							format += '%s';
							args = args.concat([stack]);
						}
						var argsWithFormat = args.map(function (item) {
							return String(item);
						});
						argsWithFormat.unshift('Warning: ' + format);
						Function.prototype.apply.call(console[level], console, argsWithFormat);
					}
				}
				function scheduleWork(callback) {
					callback();
				}
				var VIEW_SIZE = 512;
				var currentView = null;
				var writtenBytes = 0;
				function beginWriting(destination) {
					currentView = new Uint8Array(VIEW_SIZE);
					writtenBytes = 0;
				}
				function writeChunk(destination, chunk) {
					if (chunk.length === 0) return;
					if (chunk.length > VIEW_SIZE) {
						if (writtenBytes > 0) {
							destination.enqueue(new Uint8Array(currentView.buffer, 0, writtenBytes));
							currentView = new Uint8Array(VIEW_SIZE);
							writtenBytes = 0;
						}
						destination.enqueue(chunk);
						return;
					}
					var bytesToWrite = chunk;
					var allowableBytes = currentView.length - writtenBytes;
					if (allowableBytes < bytesToWrite.length) {
						if (allowableBytes === 0) destination.enqueue(currentView);
						else {
							currentView.set(bytesToWrite.subarray(0, allowableBytes), writtenBytes);
							destination.enqueue(currentView);
							bytesToWrite = bytesToWrite.subarray(allowableBytes);
						}
						currentView = new Uint8Array(VIEW_SIZE);
						writtenBytes = 0;
					}
					currentView.set(bytesToWrite, writtenBytes);
					writtenBytes += bytesToWrite.length;
				}
				function writeChunkAndReturn(destination, chunk) {
					writeChunk(destination, chunk);
					return true;
				}
				function completeWriting(destination) {
					if (currentView && writtenBytes > 0) {
						destination.enqueue(new Uint8Array(currentView.buffer, 0, writtenBytes));
						currentView = null;
						writtenBytes = 0;
					}
				}
				function close(destination) {
					destination.close();
				}
				var textEncoder = new TextEncoder();
				function stringToChunk(content) {
					return textEncoder.encode(content);
				}
				function stringToPrecomputedChunk(content) {
					return textEncoder.encode(content);
				}
				function closeWithError(destination, error) {
					if (typeof destination.error === 'function') destination.error(error);
					else destination.close();
				}
				function typeName(value) {
					{
						var hasToStringTag = typeof Symbol === 'function' && Symbol.toStringTag;
						var type = (hasToStringTag && value[Symbol.toStringTag]) || value.constructor.name || 'Object';
						return type;
					}
				}
				function willCoercionThrow(value) {
					try {
						testStringCoercion(value);
						return false;
					} catch (e) {
						return true;
					}
				}
				function testStringCoercion(value) {
					return '' + value;
				}
				function checkAttributeStringCoercion(value, attributeName) {
					if (willCoercionThrow(value)) {
						error(
							'The provided `%s` attribute is an unsupported type %s. This value must be coerced to a string before before using it here.',
							attributeName,
							typeName(value)
						);
						return testStringCoercion(value);
					}
				}
				function checkCSSPropertyStringCoercion(value, propName) {
					if (willCoercionThrow(value)) {
						error(
							'The provided `%s` CSS property is an unsupported type %s. This value must be coerced to a string before before using it here.',
							propName,
							typeName(value)
						);
						return testStringCoercion(value);
					}
				}
				function checkHtmlStringCoercion(value) {
					if (willCoercionThrow(value)) {
						error(
							'The provided HTML markup uses a value of unsupported type %s. This value must be coerced to a string before before using it here.',
							typeName(value)
						);
						return testStringCoercion(value);
					}
				}
				var hasOwnProperty = Object.prototype.hasOwnProperty;
				var RESERVED = 0;
				var STRING = 1;
				var BOOLEANISH_STRING = 2;
				var BOOLEAN = 3;
				var OVERLOADED_BOOLEAN = 4;
				var NUMERIC = 5;
				var POSITIVE_NUMERIC = 6;
				var ATTRIBUTE_NAME_START_CHAR =
					':A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD';
				var ATTRIBUTE_NAME_CHAR = ATTRIBUTE_NAME_START_CHAR + '\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040';
				var VALID_ATTRIBUTE_NAME_REGEX = new RegExp(
					'^[' + ATTRIBUTE_NAME_START_CHAR + '][' + ATTRIBUTE_NAME_CHAR + ']*$'
				);
				var illegalAttributeNameCache = {};
				var validatedAttributeNameCache = {};
				function isAttributeNameSafe(attributeName) {
					if (hasOwnProperty.call(validatedAttributeNameCache, attributeName)) return true;
					if (hasOwnProperty.call(illegalAttributeNameCache, attributeName)) return false;
					if (VALID_ATTRIBUTE_NAME_REGEX.test(attributeName)) {
						validatedAttributeNameCache[attributeName] = true;
						return true;
					}
					illegalAttributeNameCache[attributeName] = true;
					error('Invalid attribute name: `%s`', attributeName);
					return false;
				}
				function shouldRemoveAttributeWithWarning(name, value, propertyInfo, isCustomComponentTag) {
					if (propertyInfo !== null && propertyInfo.type === RESERVED) return false;
					switch (typeof value) {
						case 'function':
						case 'symbol':
							return true;
						case 'boolean': {
							if (isCustomComponentTag) return false;
							if (propertyInfo !== null) return !propertyInfo.acceptsBooleans;
							else {
								var prefix = name.toLowerCase().slice(0, 5);
								return prefix !== 'data-' && prefix !== 'aria-';
							}
						}
						default:
							return false;
					}
				}
				function getPropertyInfo(name) {
					return properties.hasOwnProperty(name) ? properties[name] : null;
				}
				function PropertyInfoRecord(
					name,
					type,
					mustUseProperty,
					attributeName,
					attributeNamespace,
					sanitizeURL,
					removeEmptyString
				) {
					this.acceptsBooleans =
						type === BOOLEANISH_STRING || type === BOOLEAN || type === OVERLOADED_BOOLEAN;
					this.attributeName = attributeName;
					this.attributeNamespace = attributeNamespace;
					this.mustUseProperty = mustUseProperty;
					this.propertyName = name;
					this.type = type;
					this.sanitizeURL = sanitizeURL;
					this.removeEmptyString = removeEmptyString;
				}
				var properties = {};
				var reservedProps = [
					'children',
					'dangerouslySetInnerHTML',
					'defaultValue',
					'defaultChecked',
					'innerHTML',
					'suppressContentEditableWarning',
					'suppressHydrationWarning',
					'style',
				];
				reservedProps.forEach(function (name) {
					properties[name] = new PropertyInfoRecord(name, RESERVED, false, name, null, false, false);
				});
				[
					['acceptCharset', 'accept-charset'],
					['className', 'class'],
					['htmlFor', 'for'],
					['httpEquiv', 'http-equiv'],
				].forEach(function (_ref) {
					var name = _ref[0],
						attributeName = _ref[1];
					properties[name] = new PropertyInfoRecord(name, STRING, false, attributeName, null, false, false);
				});
				['contentEditable', 'draggable', 'spellCheck', 'value'].forEach(function (name) {
					properties[name] = new PropertyInfoRecord(
						name,
						BOOLEANISH_STRING,
						false,
						name.toLowerCase(),
						null,
						false,
						false
					);
				});
				['autoReverse', 'externalResourcesRequired', 'focusable', 'preserveAlpha'].forEach(function (name) {
					properties[name] = new PropertyInfoRecord(name, BOOLEANISH_STRING, false, name, null, false, false);
				});
				[
					'allowFullScreen',
					'async',
					'autoFocus',
					'autoPlay',
					'controls',
					'default',
					'defer',
					'disabled',
					'disablePictureInPicture',
					'disableRemotePlayback',
					'formNoValidate',
					'hidden',
					'loop',
					'noModule',
					'noValidate',
					'open',
					'playsInline',
					'readOnly',
					'required',
					'reversed',
					'scoped',
					'seamless',
					'itemScope',
				].forEach(function (name) {
					properties[name] = new PropertyInfoRecord(
						name,
						BOOLEAN,
						false,
						name.toLowerCase(),
						null,
						false,
						false
					);
				});
				['checked', 'multiple', 'muted', 'selected'].forEach(function (name) {
					properties[name] = new PropertyInfoRecord(name, BOOLEAN, true, name, null, false, false);
				});
				['capture', 'download'].forEach(function (name) {
					properties[name] = new PropertyInfoRecord(
						name,
						OVERLOADED_BOOLEAN,
						false,
						name,
						null,
						false,
						false
					);
				});
				['cols', 'rows', 'size', 'span'].forEach(function (name) {
					properties[name] = new PropertyInfoRecord(name, POSITIVE_NUMERIC, false, name, null, false, false);
				});
				['rowSpan', 'start'].forEach(function (name) {
					properties[name] = new PropertyInfoRecord(
						name,
						NUMERIC,
						false,
						name.toLowerCase(),
						null,
						false,
						false
					);
				});
				var CAMELIZE = /[\-\:]([a-z])/g;
				var capitalize = function (token) {
					return token[1].toUpperCase();
				};
				[
					'accent-height',
					'alignment-baseline',
					'arabic-form',
					'baseline-shift',
					'cap-height',
					'clip-path',
					'clip-rule',
					'color-interpolation',
					'color-interpolation-filters',
					'color-profile',
					'color-rendering',
					'dominant-baseline',
					'enable-background',
					'fill-opacity',
					'fill-rule',
					'flood-color',
					'flood-opacity',
					'font-family',
					'font-size',
					'font-size-adjust',
					'font-stretch',
					'font-style',
					'font-variant',
					'font-weight',
					'glyph-name',
					'glyph-orientation-horizontal',
					'glyph-orientation-vertical',
					'horiz-adv-x',
					'horiz-origin-x',
					'image-rendering',
					'letter-spacing',
					'lighting-color',
					'marker-end',
					'marker-mid',
					'marker-start',
					'overline-position',
					'overline-thickness',
					'paint-order',
					'panose-1',
					'pointer-events',
					'rendering-intent',
					'shape-rendering',
					'stop-color',
					'stop-opacity',
					'strikethrough-position',
					'strikethrough-thickness',
					'stroke-dasharray',
					'stroke-dashoffset',
					'stroke-linecap',
					'stroke-linejoin',
					'stroke-miterlimit',
					'stroke-opacity',
					'stroke-width',
					'text-anchor',
					'text-decoration',
					'text-rendering',
					'underline-position',
					'underline-thickness',
					'unicode-bidi',
					'unicode-range',
					'units-per-em',
					'v-alphabetic',
					'v-hanging',
					'v-ideographic',
					'v-mathematical',
					'vector-effect',
					'vert-adv-y',
					'vert-origin-x',
					'vert-origin-y',
					'word-spacing',
					'writing-mode',
					'xmlns:xlink',
					'x-height',
				].forEach(function (attributeName) {
					var name = attributeName.replace(CAMELIZE, capitalize);
					properties[name] = new PropertyInfoRecord(name, STRING, false, attributeName, null, false, false);
				});
				['xlink:actuate', 'xlink:arcrole', 'xlink:role', 'xlink:show', 'xlink:title', 'xlink:type'].forEach(
					function (attributeName) {
						var name = attributeName.replace(CAMELIZE, capitalize);
						properties[name] = new PropertyInfoRecord(
							name,
							STRING,
							false,
							attributeName,
							'http://www.w3.org/1999/xlink',
							false,
							false
						);
					}
				);
				['xml:base', 'xml:lang', 'xml:space'].forEach(function (attributeName) {
					var name = attributeName.replace(CAMELIZE, capitalize);
					properties[name] = new PropertyInfoRecord(
						name,
						STRING,
						false,
						attributeName,
						'http://www.w3.org/XML/1998/namespace',
						false,
						false
					);
				});
				['tabIndex', 'crossOrigin'].forEach(function (attributeName) {
					properties[attributeName] = new PropertyInfoRecord(
						attributeName,
						STRING,
						false,
						attributeName.toLowerCase(),
						null,
						false,
						false
					);
				});
				var xlinkHref = 'xlinkHref';
				properties[xlinkHref] = new PropertyInfoRecord(
					'xlinkHref',
					STRING,
					false,
					'xlink:href',
					'http://www.w3.org/1999/xlink',
					true,
					false
				);
				['src', 'href', 'action', 'formAction'].forEach(function (attributeName) {
					properties[attributeName] = new PropertyInfoRecord(
						attributeName,
						STRING,
						false,
						attributeName.toLowerCase(),
						null,
						true,
						true
					);
				});
				var isUnitlessNumber = {
					animationIterationCount: true,
					aspectRatio: true,
					borderImageOutset: true,
					borderImageSlice: true,
					borderImageWidth: true,
					boxFlex: true,
					boxFlexGroup: true,
					boxOrdinalGroup: true,
					columnCount: true,
					columns: true,
					flex: true,
					flexGrow: true,
					flexPositive: true,
					flexShrink: true,
					flexNegative: true,
					flexOrder: true,
					gridArea: true,
					gridRow: true,
					gridRowEnd: true,
					gridRowSpan: true,
					gridRowStart: true,
					gridColumn: true,
					gridColumnEnd: true,
					gridColumnSpan: true,
					gridColumnStart: true,
					fontWeight: true,
					lineClamp: true,
					lineHeight: true,
					opacity: true,
					order: true,
					orphans: true,
					tabSize: true,
					widows: true,
					zIndex: true,
					zoom: true,
					fillOpacity: true,
					floodOpacity: true,
					stopOpacity: true,
					strokeDasharray: true,
					strokeDashoffset: true,
					strokeMiterlimit: true,
					strokeOpacity: true,
					strokeWidth: true,
				};
				function prefixKey(prefix, key) {
					return prefix + key.charAt(0).toUpperCase() + key.substring(1);
				}
				var prefixes = ['Webkit', 'ms', 'Moz', 'O'];
				Object.keys(isUnitlessNumber).forEach(function (prop) {
					prefixes.forEach(function (prefix) {
						isUnitlessNumber[prefixKey(prefix, prop)] = isUnitlessNumber[prop];
					});
				});
				var hasReadOnlyValue = {
					button: true,
					checkbox: true,
					image: true,
					hidden: true,
					radio: true,
					reset: true,
					submit: true,
				};
				function checkControlledValueProps(tagName, props) {
					{
						if (
							!(
								hasReadOnlyValue[props.type] ||
								props.onChange ||
								props.onInput ||
								props.readOnly ||
								props.disabled ||
								props.value == null
							)
						)
							error(
								'You provided a `value` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultValue`. Otherwise, set either `onChange` or `readOnly`.'
							);
						if (!(props.onChange || props.readOnly || props.disabled || props.checked == null))
							error(
								'You provided a `checked` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultChecked`. Otherwise, set either `onChange` or `readOnly`.'
							);
					}
				}
				function isCustomComponent(tagName, props) {
					if (tagName.indexOf('-') === -1) return typeof props.is === 'string';
					switch (tagName) {
						case 'annotation-xml':
						case 'color-profile':
						case 'font-face':
						case 'font-face-src':
						case 'font-face-uri':
						case 'font-face-format':
						case 'font-face-name':
						case 'missing-glyph':
							return false;
						default:
							return true;
					}
				}
				var ariaProperties = {
					'aria-current': 0,
					'aria-description': 0,
					'aria-details': 0,
					'aria-disabled': 0,
					'aria-hidden': 0,
					'aria-invalid': 0,
					'aria-keyshortcuts': 0,
					'aria-label': 0,
					'aria-roledescription': 0,
					'aria-autocomplete': 0,
					'aria-checked': 0,
					'aria-expanded': 0,
					'aria-haspopup': 0,
					'aria-level': 0,
					'aria-modal': 0,
					'aria-multiline': 0,
					'aria-multiselectable': 0,
					'aria-orientation': 0,
					'aria-placeholder': 0,
					'aria-pressed': 0,
					'aria-readonly': 0,
					'aria-required': 0,
					'aria-selected': 0,
					'aria-sort': 0,
					'aria-valuemax': 0,
					'aria-valuemin': 0,
					'aria-valuenow': 0,
					'aria-valuetext': 0,
					'aria-atomic': 0,
					'aria-busy': 0,
					'aria-live': 0,
					'aria-relevant': 0,
					'aria-dropeffect': 0,
					'aria-grabbed': 0,
					'aria-activedescendant': 0,
					'aria-colcount': 0,
					'aria-colindex': 0,
					'aria-colspan': 0,
					'aria-controls': 0,
					'aria-describedby': 0,
					'aria-errormessage': 0,
					'aria-flowto': 0,
					'aria-labelledby': 0,
					'aria-owns': 0,
					'aria-posinset': 0,
					'aria-rowcount': 0,
					'aria-rowindex': 0,
					'aria-rowspan': 0,
					'aria-setsize': 0,
				};
				var warnedProperties = {};
				var rARIA = new RegExp('^(aria)-[' + ATTRIBUTE_NAME_CHAR + ']*$');
				var rARIACamel = new RegExp('^(aria)[A-Z][' + ATTRIBUTE_NAME_CHAR + ']*$');
				function validateProperty(tagName, name) {
					{
						if (hasOwnProperty.call(warnedProperties, name) && warnedProperties[name]) return true;
						if (rARIACamel.test(name)) {
							var ariaName = 'aria-' + name.slice(4).toLowerCase();
							var correctName = ariaProperties.hasOwnProperty(ariaName) ? ariaName : null;
							if (correctName == null) {
								error(
									'Invalid ARIA attribute `%s`. ARIA attributes follow the pattern aria-* and must be lowercase.',
									name
								);
								warnedProperties[name] = true;
								return true;
							}
							if (name !== correctName) {
								error('Invalid ARIA attribute `%s`. Did you mean `%s`?', name, correctName);
								warnedProperties[name] = true;
								return true;
							}
						}
						if (rARIA.test(name)) {
							var lowerCasedName = name.toLowerCase();
							var standardName = ariaProperties.hasOwnProperty(lowerCasedName) ? lowerCasedName : null;
							if (standardName == null) {
								warnedProperties[name] = true;
								return false;
							}
							if (name !== standardName) {
								error('Unknown ARIA attribute `%s`. Did you mean `%s`?', name, standardName);
								warnedProperties[name] = true;
								return true;
							}
						}
					}
					return true;
				}
				function warnInvalidARIAProps(type, props) {
					{
						var invalidProps = [];
						for (var key in props) {
							var isValid = validateProperty(type, key);
							if (!isValid) invalidProps.push(key);
						}
						var unknownPropString = invalidProps
							.map(function (prop) {
								return '`' + prop + '`';
							})
							.join(', ');
						if (invalidProps.length === 1)
							error(
								'Invalid aria prop %s on <%s> tag. For details, see https://reactjs.org/link/invalid-aria-props',
								unknownPropString,
								type
							);
						else if (invalidProps.length > 1)
							error(
								'Invalid aria props %s on <%s> tag. For details, see https://reactjs.org/link/invalid-aria-props',
								unknownPropString,
								type
							);
					}
				}
				function validateProperties(type, props) {
					if (isCustomComponent(type, props)) return;
					warnInvalidARIAProps(type, props);
				}
				var didWarnValueNull = false;
				function validateProperties$1(type, props) {
					{
						if (type !== 'input' && type !== 'textarea' && type !== 'select') return;
						if (props != null && props.value === null && !didWarnValueNull) {
							didWarnValueNull = true;
							if (type === 'select' && props.multiple)
								error(
									'`value` prop on `%s` should not be null. Consider using an empty array when `multiple` is set to `true` to clear the component or `undefined` for uncontrolled components.',
									type
								);
							else
								error(
									'`value` prop on `%s` should not be null. Consider using an empty string to clear the component or `undefined` for uncontrolled components.',
									type
								);
						}
					}
				}
				var possibleStandardNames = {
					accept: 'accept',
					acceptcharset: 'acceptCharset',
					'accept-charset': 'acceptCharset',
					accesskey: 'accessKey',
					action: 'action',
					allowfullscreen: 'allowFullScreen',
					alt: 'alt',
					as: 'as',
					async: 'async',
					autocapitalize: 'autoCapitalize',
					autocomplete: 'autoComplete',
					autocorrect: 'autoCorrect',
					autofocus: 'autoFocus',
					autoplay: 'autoPlay',
					autosave: 'autoSave',
					capture: 'capture',
					cellpadding: 'cellPadding',
					cellspacing: 'cellSpacing',
					challenge: 'challenge',
					charset: 'charSet',
					checked: 'checked',
					children: 'children',
					cite: 'cite',
					class: 'className',
					classid: 'classID',
					classname: 'className',
					cols: 'cols',
					colspan: 'colSpan',
					content: 'content',
					contenteditable: 'contentEditable',
					contextmenu: 'contextMenu',
					controls: 'controls',
					controlslist: 'controlsList',
					coords: 'coords',
					crossorigin: 'crossOrigin',
					dangerouslysetinnerhtml: 'dangerouslySetInnerHTML',
					data: 'data',
					datetime: 'dateTime',
					default: 'default',
					defaultchecked: 'defaultChecked',
					defaultvalue: 'defaultValue',
					defer: 'defer',
					dir: 'dir',
					disabled: 'disabled',
					disablepictureinpicture: 'disablePictureInPicture',
					disableremoteplayback: 'disableRemotePlayback',
					download: 'download',
					draggable: 'draggable',
					enctype: 'encType',
					enterkeyhint: 'enterKeyHint',
					for: 'htmlFor',
					form: 'form',
					formmethod: 'formMethod',
					formaction: 'formAction',
					formenctype: 'formEncType',
					formnovalidate: 'formNoValidate',
					formtarget: 'formTarget',
					frameborder: 'frameBorder',
					headers: 'headers',
					height: 'height',
					hidden: 'hidden',
					high: 'high',
					href: 'href',
					hreflang: 'hrefLang',
					htmlfor: 'htmlFor',
					httpequiv: 'httpEquiv',
					'http-equiv': 'httpEquiv',
					icon: 'icon',
					id: 'id',
					imagesizes: 'imageSizes',
					imagesrcset: 'imageSrcSet',
					innerhtml: 'innerHTML',
					inputmode: 'inputMode',
					integrity: 'integrity',
					is: 'is',
					itemid: 'itemID',
					itemprop: 'itemProp',
					itemref: 'itemRef',
					itemscope: 'itemScope',
					itemtype: 'itemType',
					keyparams: 'keyParams',
					keytype: 'keyType',
					kind: 'kind',
					label: 'label',
					lang: 'lang',
					list: 'list',
					loop: 'loop',
					low: 'low',
					manifest: 'manifest',
					marginwidth: 'marginWidth',
					marginheight: 'marginHeight',
					max: 'max',
					maxlength: 'maxLength',
					media: 'media',
					mediagroup: 'mediaGroup',
					method: 'method',
					min: 'min',
					minlength: 'minLength',
					multiple: 'multiple',
					muted: 'muted',
					name: 'name',
					nomodule: 'noModule',
					nonce: 'nonce',
					novalidate: 'noValidate',
					open: 'open',
					optimum: 'optimum',
					pattern: 'pattern',
					placeholder: 'placeholder',
					playsinline: 'playsInline',
					poster: 'poster',
					preload: 'preload',
					profile: 'profile',
					radiogroup: 'radioGroup',
					readonly: 'readOnly',
					referrerpolicy: 'referrerPolicy',
					rel: 'rel',
					required: 'required',
					reversed: 'reversed',
					role: 'role',
					rows: 'rows',
					rowspan: 'rowSpan',
					sandbox: 'sandbox',
					scope: 'scope',
					scoped: 'scoped',
					scrolling: 'scrolling',
					seamless: 'seamless',
					selected: 'selected',
					shape: 'shape',
					size: 'size',
					sizes: 'sizes',
					span: 'span',
					spellcheck: 'spellCheck',
					src: 'src',
					srcdoc: 'srcDoc',
					srclang: 'srcLang',
					srcset: 'srcSet',
					start: 'start',
					step: 'step',
					style: 'style',
					summary: 'summary',
					tabindex: 'tabIndex',
					target: 'target',
					title: 'title',
					type: 'type',
					usemap: 'useMap',
					value: 'value',
					width: 'width',
					wmode: 'wmode',
					wrap: 'wrap',
					about: 'about',
					accentheight: 'accentHeight',
					'accent-height': 'accentHeight',
					accumulate: 'accumulate',
					additive: 'additive',
					alignmentbaseline: 'alignmentBaseline',
					'alignment-baseline': 'alignmentBaseline',
					allowreorder: 'allowReorder',
					alphabetic: 'alphabetic',
					amplitude: 'amplitude',
					arabicform: 'arabicForm',
					'arabic-form': 'arabicForm',
					ascent: 'ascent',
					attributename: 'attributeName',
					attributetype: 'attributeType',
					autoreverse: 'autoReverse',
					azimuth: 'azimuth',
					basefrequency: 'baseFrequency',
					baselineshift: 'baselineShift',
					'baseline-shift': 'baselineShift',
					baseprofile: 'baseProfile',
					bbox: 'bbox',
					begin: 'begin',
					bias: 'bias',
					by: 'by',
					calcmode: 'calcMode',
					capheight: 'capHeight',
					'cap-height': 'capHeight',
					clip: 'clip',
					clippath: 'clipPath',
					'clip-path': 'clipPath',
					clippathunits: 'clipPathUnits',
					cliprule: 'clipRule',
					'clip-rule': 'clipRule',
					color: 'color',
					colorinterpolation: 'colorInterpolation',
					'color-interpolation': 'colorInterpolation',
					colorinterpolationfilters: 'colorInterpolationFilters',
					'color-interpolation-filters': 'colorInterpolationFilters',
					colorprofile: 'colorProfile',
					'color-profile': 'colorProfile',
					colorrendering: 'colorRendering',
					'color-rendering': 'colorRendering',
					contentscripttype: 'contentScriptType',
					contentstyletype: 'contentStyleType',
					cursor: 'cursor',
					cx: 'cx',
					cy: 'cy',
					d: 'd',
					datatype: 'datatype',
					decelerate: 'decelerate',
					descent: 'descent',
					diffuseconstant: 'diffuseConstant',
					direction: 'direction',
					display: 'display',
					divisor: 'divisor',
					dominantbaseline: 'dominantBaseline',
					'dominant-baseline': 'dominantBaseline',
					dur: 'dur',
					dx: 'dx',
					dy: 'dy',
					edgemode: 'edgeMode',
					elevation: 'elevation',
					enablebackground: 'enableBackground',
					'enable-background': 'enableBackground',
					end: 'end',
					exponent: 'exponent',
					externalresourcesrequired: 'externalResourcesRequired',
					fill: 'fill',
					fillopacity: 'fillOpacity',
					'fill-opacity': 'fillOpacity',
					fillrule: 'fillRule',
					'fill-rule': 'fillRule',
					filter: 'filter',
					filterres: 'filterRes',
					filterunits: 'filterUnits',
					floodopacity: 'floodOpacity',
					'flood-opacity': 'floodOpacity',
					floodcolor: 'floodColor',
					'flood-color': 'floodColor',
					focusable: 'focusable',
					fontfamily: 'fontFamily',
					'font-family': 'fontFamily',
					fontsize: 'fontSize',
					'font-size': 'fontSize',
					fontsizeadjust: 'fontSizeAdjust',
					'font-size-adjust': 'fontSizeAdjust',
					fontstretch: 'fontStretch',
					'font-stretch': 'fontStretch',
					fontstyle: 'fontStyle',
					'font-style': 'fontStyle',
					fontvariant: 'fontVariant',
					'font-variant': 'fontVariant',
					fontweight: 'fontWeight',
					'font-weight': 'fontWeight',
					format: 'format',
					from: 'from',
					fx: 'fx',
					fy: 'fy',
					g1: 'g1',
					g2: 'g2',
					glyphname: 'glyphName',
					'glyph-name': 'glyphName',
					glyphorientationhorizontal: 'glyphOrientationHorizontal',
					'glyph-orientation-horizontal': 'glyphOrientationHorizontal',
					glyphorientationvertical: 'glyphOrientationVertical',
					'glyph-orientation-vertical': 'glyphOrientationVertical',
					glyphref: 'glyphRef',
					gradienttransform: 'gradientTransform',
					gradientunits: 'gradientUnits',
					hanging: 'hanging',
					horizadvx: 'horizAdvX',
					'horiz-adv-x': 'horizAdvX',
					horizoriginx: 'horizOriginX',
					'horiz-origin-x': 'horizOriginX',
					ideographic: 'ideographic',
					imagerendering: 'imageRendering',
					'image-rendering': 'imageRendering',
					in2: 'in2',
					in: 'in',
					inlist: 'inlist',
					intercept: 'intercept',
					k1: 'k1',
					k2: 'k2',
					k3: 'k3',
					k4: 'k4',
					k: 'k',
					kernelmatrix: 'kernelMatrix',
					kernelunitlength: 'kernelUnitLength',
					kerning: 'kerning',
					keypoints: 'keyPoints',
					keysplines: 'keySplines',
					keytimes: 'keyTimes',
					lengthadjust: 'lengthAdjust',
					letterspacing: 'letterSpacing',
					'letter-spacing': 'letterSpacing',
					lightingcolor: 'lightingColor',
					'lighting-color': 'lightingColor',
					limitingconeangle: 'limitingConeAngle',
					local: 'local',
					markerend: 'markerEnd',
					'marker-end': 'markerEnd',
					markerheight: 'markerHeight',
					markermid: 'markerMid',
					'marker-mid': 'markerMid',
					markerstart: 'markerStart',
					'marker-start': 'markerStart',
					markerunits: 'markerUnits',
					markerwidth: 'markerWidth',
					mask: 'mask',
					maskcontentunits: 'maskContentUnits',
					maskunits: 'maskUnits',
					mathematical: 'mathematical',
					mode: 'mode',
					numoctaves: 'numOctaves',
					offset: 'offset',
					opacity: 'opacity',
					operator: 'operator',
					order: 'order',
					orient: 'orient',
					orientation: 'orientation',
					origin: 'origin',
					overflow: 'overflow',
					overlineposition: 'overlinePosition',
					'overline-position': 'overlinePosition',
					overlinethickness: 'overlineThickness',
					'overline-thickness': 'overlineThickness',
					paintorder: 'paintOrder',
					'paint-order': 'paintOrder',
					panose1: 'panose1',
					'panose-1': 'panose1',
					pathlength: 'pathLength',
					patterncontentunits: 'patternContentUnits',
					patterntransform: 'patternTransform',
					patternunits: 'patternUnits',
					pointerevents: 'pointerEvents',
					'pointer-events': 'pointerEvents',
					points: 'points',
					pointsatx: 'pointsAtX',
					pointsaty: 'pointsAtY',
					pointsatz: 'pointsAtZ',
					prefix: 'prefix',
					preservealpha: 'preserveAlpha',
					preserveaspectratio: 'preserveAspectRatio',
					primitiveunits: 'primitiveUnits',
					property: 'property',
					r: 'r',
					radius: 'radius',
					refx: 'refX',
					refy: 'refY',
					renderingintent: 'renderingIntent',
					'rendering-intent': 'renderingIntent',
					repeatcount: 'repeatCount',
					repeatdur: 'repeatDur',
					requiredextensions: 'requiredExtensions',
					requiredfeatures: 'requiredFeatures',
					resource: 'resource',
					restart: 'restart',
					result: 'result',
					results: 'results',
					rotate: 'rotate',
					rx: 'rx',
					ry: 'ry',
					scale: 'scale',
					security: 'security',
					seed: 'seed',
					shaperendering: 'shapeRendering',
					'shape-rendering': 'shapeRendering',
					slope: 'slope',
					spacing: 'spacing',
					specularconstant: 'specularConstant',
					specularexponent: 'specularExponent',
					speed: 'speed',
					spreadmethod: 'spreadMethod',
					startoffset: 'startOffset',
					stddeviation: 'stdDeviation',
					stemh: 'stemh',
					stemv: 'stemv',
					stitchtiles: 'stitchTiles',
					stopcolor: 'stopColor',
					'stop-color': 'stopColor',
					stopopacity: 'stopOpacity',
					'stop-opacity': 'stopOpacity',
					strikethroughposition: 'strikethroughPosition',
					'strikethrough-position': 'strikethroughPosition',
					strikethroughthickness: 'strikethroughThickness',
					'strikethrough-thickness': 'strikethroughThickness',
					string: 'string',
					stroke: 'stroke',
					strokedasharray: 'strokeDasharray',
					'stroke-dasharray': 'strokeDasharray',
					strokedashoffset: 'strokeDashoffset',
					'stroke-dashoffset': 'strokeDashoffset',
					strokelinecap: 'strokeLinecap',
					'stroke-linecap': 'strokeLinecap',
					strokelinejoin: 'strokeLinejoin',
					'stroke-linejoin': 'strokeLinejoin',
					strokemiterlimit: 'strokeMiterlimit',
					'stroke-miterlimit': 'strokeMiterlimit',
					strokewidth: 'strokeWidth',
					'stroke-width': 'strokeWidth',
					strokeopacity: 'strokeOpacity',
					'stroke-opacity': 'strokeOpacity',
					suppresscontenteditablewarning: 'suppressContentEditableWarning',
					suppresshydrationwarning: 'suppressHydrationWarning',
					surfacescale: 'surfaceScale',
					systemlanguage: 'systemLanguage',
					tablevalues: 'tableValues',
					targetx: 'targetX',
					targety: 'targetY',
					textanchor: 'textAnchor',
					'text-anchor': 'textAnchor',
					textdecoration: 'textDecoration',
					'text-decoration': 'textDecoration',
					textlength: 'textLength',
					textrendering: 'textRendering',
					'text-rendering': 'textRendering',
					to: 'to',
					transform: 'transform',
					typeof: 'typeof',
					u1: 'u1',
					u2: 'u2',
					underlineposition: 'underlinePosition',
					'underline-position': 'underlinePosition',
					underlinethickness: 'underlineThickness',
					'underline-thickness': 'underlineThickness',
					unicode: 'unicode',
					unicodebidi: 'unicodeBidi',
					'unicode-bidi': 'unicodeBidi',
					unicoderange: 'unicodeRange',
					'unicode-range': 'unicodeRange',
					unitsperem: 'unitsPerEm',
					'units-per-em': 'unitsPerEm',
					unselectable: 'unselectable',
					valphabetic: 'vAlphabetic',
					'v-alphabetic': 'vAlphabetic',
					values: 'values',
					vectoreffect: 'vectorEffect',
					'vector-effect': 'vectorEffect',
					version: 'version',
					vertadvy: 'vertAdvY',
					'vert-adv-y': 'vertAdvY',
					vertoriginx: 'vertOriginX',
					'vert-origin-x': 'vertOriginX',
					vertoriginy: 'vertOriginY',
					'vert-origin-y': 'vertOriginY',
					vhanging: 'vHanging',
					'v-hanging': 'vHanging',
					videographic: 'vIdeographic',
					'v-ideographic': 'vIdeographic',
					viewbox: 'viewBox',
					viewtarget: 'viewTarget',
					visibility: 'visibility',
					vmathematical: 'vMathematical',
					'v-mathematical': 'vMathematical',
					vocab: 'vocab',
					widths: 'widths',
					wordspacing: 'wordSpacing',
					'word-spacing': 'wordSpacing',
					writingmode: 'writingMode',
					'writing-mode': 'writingMode',
					x1: 'x1',
					x2: 'x2',
					x: 'x',
					xchannelselector: 'xChannelSelector',
					xheight: 'xHeight',
					'x-height': 'xHeight',
					xlinkactuate: 'xlinkActuate',
					'xlink:actuate': 'xlinkActuate',
					xlinkarcrole: 'xlinkArcrole',
					'xlink:arcrole': 'xlinkArcrole',
					xlinkhref: 'xlinkHref',
					'xlink:href': 'xlinkHref',
					xlinkrole: 'xlinkRole',
					'xlink:role': 'xlinkRole',
					xlinkshow: 'xlinkShow',
					'xlink:show': 'xlinkShow',
					xlinktitle: 'xlinkTitle',
					'xlink:title': 'xlinkTitle',
					xlinktype: 'xlinkType',
					'xlink:type': 'xlinkType',
					xmlbase: 'xmlBase',
					'xml:base': 'xmlBase',
					xmllang: 'xmlLang',
					'xml:lang': 'xmlLang',
					xmlns: 'xmlns',
					'xml:space': 'xmlSpace',
					xmlnsxlink: 'xmlnsXlink',
					'xmlns:xlink': 'xmlnsXlink',
					xmlspace: 'xmlSpace',
					y1: 'y1',
					y2: 'y2',
					y: 'y',
					ychannelselector: 'yChannelSelector',
					z: 'z',
					zoomandpan: 'zoomAndPan',
				};
				var validateProperty$1 = function () {};
				{
					var warnedProperties$1 = {};
					var EVENT_NAME_REGEX = /^on./;
					var INVALID_EVENT_NAME_REGEX = /^on[^A-Z]/;
					var rARIA$1 = new RegExp('^(aria)-[' + ATTRIBUTE_NAME_CHAR + ']*$');
					var rARIACamel$1 = new RegExp('^(aria)[A-Z][' + ATTRIBUTE_NAME_CHAR + ']*$');
					validateProperty$1 = function (tagName, name, value, eventRegistry) {
						if (hasOwnProperty.call(warnedProperties$1, name) && warnedProperties$1[name]) return true;
						var lowerCasedName = name.toLowerCase();
						if (lowerCasedName === 'onfocusin' || lowerCasedName === 'onfocusout') {
							error(
								'React uses onFocus and onBlur instead of onFocusIn and onFocusOut. All React events are normalized to bubble, so onFocusIn and onFocusOut are not needed/supported by React.'
							);
							warnedProperties$1[name] = true;
							return true;
						}
						if (eventRegistry != null) {
							var registrationNameDependencies = eventRegistry.registrationNameDependencies,
								possibleRegistrationNames = eventRegistry.possibleRegistrationNames;
							if (registrationNameDependencies.hasOwnProperty(name)) return true;
							var registrationName = possibleRegistrationNames.hasOwnProperty(lowerCasedName)
								? possibleRegistrationNames[lowerCasedName]
								: null;
							if (registrationName != null) {
								error(
									'Invalid event handler property `%s`. Did you mean `%s`?',
									name,
									registrationName
								);
								warnedProperties$1[name] = true;
								return true;
							}
							if (EVENT_NAME_REGEX.test(name)) {
								error('Unknown event handler property `%s`. It will be ignored.', name);
								warnedProperties$1[name] = true;
								return true;
							}
						} else if (EVENT_NAME_REGEX.test(name)) {
							if (INVALID_EVENT_NAME_REGEX.test(name))
								error(
									'Invalid event handler property `%s`. React events use the camelCase naming convention, for example `onClick`.',
									name
								);
							warnedProperties$1[name] = true;
							return true;
						}
						if (rARIA$1.test(name) || rARIACamel$1.test(name)) return true;
						if (lowerCasedName === 'innerhtml') {
							error(
								'Directly setting property `innerHTML` is not permitted. For more information, lookup documentation on `dangerouslySetInnerHTML`.'
							);
							warnedProperties$1[name] = true;
							return true;
						}
						if (lowerCasedName === 'aria') {
							error(
								'The `aria` attribute is reserved for future use in React. Pass individual `aria-` attributes instead.'
							);
							warnedProperties$1[name] = true;
							return true;
						}
						if (
							lowerCasedName === 'is' &&
							value !== null &&
							value !== undefined &&
							typeof value !== 'string'
						) {
							error(
								'Received a `%s` for a string attribute `is`. If this is expected, cast the value to a string.',
								typeof value
							);
							warnedProperties$1[name] = true;
							return true;
						}
						if (typeof value === 'number' && isNaN(value)) {
							error(
								'Received NaN for the `%s` attribute. If this is expected, cast the value to a string.',
								name
							);
							warnedProperties$1[name] = true;
							return true;
						}
						var propertyInfo = getPropertyInfo(name);
						var isReserved = propertyInfo !== null && propertyInfo.type === RESERVED;
						if (possibleStandardNames.hasOwnProperty(lowerCasedName)) {
							var standardName = possibleStandardNames[lowerCasedName];
							if (standardName !== name) {
								error('Invalid DOM property `%s`. Did you mean `%s`?', name, standardName);
								warnedProperties$1[name] = true;
								return true;
							}
						} else if (!isReserved && name !== lowerCasedName) {
							error(
								'React does not recognize the `%s` prop on a DOM element. If you intentionally want it to appear in the DOM as a custom attribute, spell it as lowercase `%s` instead. If you accidentally passed it from a parent component, remove it from the DOM element.',
								name,
								lowerCasedName
							);
							warnedProperties$1[name] = true;
							return true;
						}
						if (
							typeof value === 'boolean' &&
							shouldRemoveAttributeWithWarning(name, value, propertyInfo, false)
						) {
							if (value)
								error(
									'Received `%s` for a non-boolean attribute `%s`.\n\nIf you want to write it to the DOM, pass a string instead: %s="%s" or %s={value.toString()}.',
									value,
									name,
									name,
									value,
									name
								);
							else
								error(
									'Received `%s` for a non-boolean attribute `%s`.\n\nIf you want to write it to the DOM, pass a string instead: %s="%s" or %s={value.toString()}.\n\nIf you used to conditionally omit it with %s={condition && value}, pass %s={condition ? value : undefined} instead.',
									value,
									name,
									name,
									value,
									name,
									name,
									name
								);
							warnedProperties$1[name] = true;
							return true;
						}
						if (isReserved) return true;
						if (shouldRemoveAttributeWithWarning(name, value, propertyInfo, false)) {
							warnedProperties$1[name] = true;
							return false;
						}
						if (
							(value === 'false' || value === 'true') &&
							propertyInfo !== null &&
							propertyInfo.type === BOOLEAN
						) {
							error(
								'Received the string `%s` for the boolean attribute `%s`. %s Did you mean %s={%s}?',
								value,
								name,
								value === 'false'
									? 'The browser will interpret it as a truthy value.'
									: 'Although this works, it will not work as expected if you pass the string "false".',
								name,
								value
							);
							warnedProperties$1[name] = true;
							return true;
						}
						return true;
					};
				}
				var warnUnknownProperties = function (type, props, eventRegistry) {
					{
						var unknownProps = [];
						for (var key in props) {
							var isValid = validateProperty$1(type, key, props[key], eventRegistry);
							if (!isValid) unknownProps.push(key);
						}
						var unknownPropString = unknownProps
							.map(function (prop) {
								return '`' + prop + '`';
							})
							.join(', ');
						if (unknownProps.length === 1)
							error(
								'Invalid value for prop %s on <%s> tag. Either remove it from the element, or pass a string or number value to keep it in the DOM. For details, see https://reactjs.org/link/attribute-behavior ',
								unknownPropString,
								type
							);
						else if (unknownProps.length > 1)
							error(
								'Invalid values for props %s on <%s> tag. Either remove them from the element, or pass a string or number value to keep them in the DOM. For details, see https://reactjs.org/link/attribute-behavior ',
								unknownPropString,
								type
							);
					}
				};
				function validateProperties$2(type, props, eventRegistry) {
					if (isCustomComponent(type, props)) return;
					warnUnknownProperties(type, props, eventRegistry);
				}
				var warnValidStyle = function () {};
				{
					var badVendoredStyleNamePattern = /^(?:webkit|moz|o)[A-Z]/;
					var msPattern = /^-ms-/;
					var hyphenPattern = /-(.)/g;
					var badStyleValueWithSemicolonPattern = /;\s*$/;
					var warnedStyleNames = {};
					var warnedStyleValues = {};
					var warnedForNaNValue = false;
					var warnedForInfinityValue = false;
					var camelize = function (string) {
						return string.replace(hyphenPattern, function (_, character) {
							return character.toUpperCase();
						});
					};
					var warnHyphenatedStyleName = function (name) {
						if (warnedStyleNames.hasOwnProperty(name) && warnedStyleNames[name]) return;
						warnedStyleNames[name] = true;
						error(
							'Unsupported style property %s. Did you mean %s?',
							name,
							camelize(name.replace(msPattern, 'ms-'))
						);
					};
					var warnBadVendoredStyleName = function (name) {
						if (warnedStyleNames.hasOwnProperty(name) && warnedStyleNames[name]) return;
						warnedStyleNames[name] = true;
						error(
							'Unsupported vendor-prefixed style property %s. Did you mean %s?',
							name,
							name.charAt(0).toUpperCase() + name.slice(1)
						);
					};
					var warnStyleValueWithSemicolon = function (name, value) {
						if (warnedStyleValues.hasOwnProperty(value) && warnedStyleValues[value]) return;
						warnedStyleValues[value] = true;
						error(
							`Style property values shouldn't contain a semicolon. Try "%s: %s" instead.`,
							name,
							value.replace(badStyleValueWithSemicolonPattern, '')
						);
					};
					var warnStyleValueIsNaN = function (name, value) {
						if (warnedForNaNValue) return;
						warnedForNaNValue = true;
						error('`NaN` is an invalid value for the `%s` css style property.', name);
					};
					var warnStyleValueIsInfinity = function (name, value) {
						if (warnedForInfinityValue) return;
						warnedForInfinityValue = true;
						error('`Infinity` is an invalid value for the `%s` css style property.', name);
					};
					warnValidStyle = function (name, value) {
						if (name.indexOf('-') > -1) warnHyphenatedStyleName(name);
						else if (badVendoredStyleNamePattern.test(name)) warnBadVendoredStyleName(name);
						else if (badStyleValueWithSemicolonPattern.test(value))
							warnStyleValueWithSemicolon(name, value);
						if (typeof value === 'number') {
							if (isNaN(value)) warnStyleValueIsNaN(name, value);
							else if (!isFinite(value)) warnStyleValueIsInfinity(name, value);
						}
					};
				}
				var warnValidStyle$1 = warnValidStyle;
				var matchHtmlRegExp = /["'&<>]/;
				function escapeHtml(string) {
					checkHtmlStringCoercion(string);
					var str = '' + string;
					var match = matchHtmlRegExp.exec(str);
					if (!match) return str;
					var escape;
					var html = '';
					var index;
					var lastIndex = 0;
					for (index = match.index; index < str.length; index++) {
						switch (str.charCodeAt(index)) {
							case 34:
								escape = '&quot;';
								break;
							case 38:
								escape = '&amp;';
								break;
							case 39:
								escape = '&#x27;';
								break;
							case 60:
								escape = '&lt;';
								break;
							case 62:
								escape = '&gt;';
								break;
							default:
								continue;
						}
						if (lastIndex !== index) html += str.substring(lastIndex, index);
						lastIndex = index + 1;
						html += escape;
					}
					return lastIndex !== index ? html + str.substring(lastIndex, index) : html;
				}
				function escapeTextForBrowser(text) {
					if (typeof text === 'boolean' || typeof text === 'number') return '' + text;
					return escapeHtml(text);
				}
				var uppercasePattern = /([A-Z])/g;
				var msPattern$1 = /^ms-/;
				function hyphenateStyleName(name) {
					return name.replace(uppercasePattern, '-$1').toLowerCase().replace(msPattern$1, '-ms-');
				}
				var isJavaScriptProtocol =
					/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*\:/i;
				var didWarn = false;
				function sanitizeURL(url) {
					if (!didWarn && isJavaScriptProtocol.test(url)) {
						didWarn = true;
						error(
							'A future version of React will block javascript: URLs as a security precaution. Use event handlers instead if you can. If you need to generate unsafe HTML try using dangerouslySetInnerHTML instead. React was passed %s.',
							JSON.stringify(url)
						);
					}
				}
				var isArrayImpl = Array.isArray;
				function isArray(a) {
					return isArrayImpl(a);
				}
				var startInlineScript = stringToPrecomputedChunk('<script>');
				var endInlineScript = stringToPrecomputedChunk('</script>');
				var startScriptSrc = stringToPrecomputedChunk('<script src="');
				var startModuleSrc = stringToPrecomputedChunk('<script type="module" src="');
				var endAsyncScript = stringToPrecomputedChunk('" async=""></script>');
				function escapeBootstrapScriptContent(scriptText) {
					checkHtmlStringCoercion(scriptText);
					return ('' + scriptText).replace(scriptRegex, scriptReplacer);
				}
				var scriptRegex = /(<\/|<)(s)(cript)/gi;
				var scriptReplacer = function (match, prefix, s, suffix) {
					return '' + prefix + (s === 's' ? '\\u0073' : '\\u0053') + suffix;
				};
				function createResponseState(
					identifierPrefix,
					nonce,
					bootstrapScriptContent,
					bootstrapScripts,
					bootstrapModules
				) {
					var idPrefix = identifierPrefix === undefined ? '' : identifierPrefix;
					var inlineScriptWithNonce =
						nonce === undefined
							? startInlineScript
							: stringToPrecomputedChunk('<script nonce="' + escapeTextForBrowser(nonce) + '">');
					var bootstrapChunks = [];
					if (bootstrapScriptContent !== undefined)
						bootstrapChunks.push(
							inlineScriptWithNonce,
							stringToChunk(escapeBootstrapScriptContent(bootstrapScriptContent)),
							endInlineScript
						);
					if (bootstrapScripts !== undefined)
						for (var i = 0; i < bootstrapScripts.length; i++)
							bootstrapChunks.push(
								startScriptSrc,
								stringToChunk(escapeTextForBrowser(bootstrapScripts[i])),
								endAsyncScript
							);
					if (bootstrapModules !== undefined)
						for (var _i = 0; _i < bootstrapModules.length; _i++)
							bootstrapChunks.push(
								startModuleSrc,
								stringToChunk(escapeTextForBrowser(bootstrapModules[_i])),
								endAsyncScript
							);
					return {
						bootstrapChunks,
						startInlineScript: inlineScriptWithNonce,
						placeholderPrefix: stringToPrecomputedChunk(idPrefix + 'P:'),
						segmentPrefix: stringToPrecomputedChunk(idPrefix + 'S:'),
						boundaryPrefix: idPrefix + 'B:',
						idPrefix,
						nextSuspenseID: 0,
						sentCompleteSegmentFunction: false,
						sentCompleteBoundaryFunction: false,
						sentClientRenderFunction: false,
					};
				}
				var ROOT_HTML_MODE = 0;
				var HTML_MODE = 1;
				var SVG_MODE = 2;
				var MATHML_MODE = 3;
				var HTML_TABLE_MODE = 4;
				var HTML_TABLE_BODY_MODE = 5;
				var HTML_TABLE_ROW_MODE = 6;
				var HTML_COLGROUP_MODE = 7;
				function createFormatContext(insertionMode, selectedValue) {
					return {
						insertionMode,
						selectedValue,
					};
				}
				function createRootFormatContext(namespaceURI) {
					var insertionMode =
						namespaceURI === 'http://www.w3.org/2000/svg'
							? SVG_MODE
							: namespaceURI === 'http://www.w3.org/1998/Math/MathML'
							? MATHML_MODE
							: ROOT_HTML_MODE;
					return createFormatContext(insertionMode, null);
				}
				function getChildFormatContext(parentContext, type, props) {
					switch (type) {
						case 'select':
							return createFormatContext(
								HTML_MODE,
								props.value != null ? props.value : props.defaultValue
							);
						case 'svg':
							return createFormatContext(SVG_MODE, null);
						case 'math':
							return createFormatContext(MATHML_MODE, null);
						case 'foreignObject':
							return createFormatContext(HTML_MODE, null);
						case 'table':
							return createFormatContext(HTML_TABLE_MODE, null);
						case 'thead':
						case 'tbody':
						case 'tfoot':
							return createFormatContext(HTML_TABLE_BODY_MODE, null);
						case 'colgroup':
							return createFormatContext(HTML_COLGROUP_MODE, null);
						case 'tr':
							return createFormatContext(HTML_TABLE_ROW_MODE, null);
					}
					if (parentContext.insertionMode >= HTML_TABLE_MODE) return createFormatContext(HTML_MODE, null);
					if (parentContext.insertionMode === ROOT_HTML_MODE) return createFormatContext(HTML_MODE, null);
					return parentContext;
				}
				var UNINITIALIZED_SUSPENSE_BOUNDARY_ID = null;
				function assignSuspenseBoundaryID(responseState) {
					var generatedID = responseState.nextSuspenseID++;
					return stringToPrecomputedChunk(responseState.boundaryPrefix + generatedID.toString(16));
				}
				function makeId(responseState, treeId, localId) {
					var idPrefix = responseState.idPrefix;
					var id = ':' + idPrefix + 'R' + treeId;
					if (localId > 0) id += 'H' + localId.toString(32);
					return id + ':';
				}
				function encodeHTMLTextNode(text) {
					return escapeTextForBrowser(text);
				}
				var textSeparator = stringToPrecomputedChunk('<!-- -->');
				function pushTextInstance(target, text, responseState, textEmbedded) {
					if (text === '') return textEmbedded;
					if (textEmbedded) target.push(textSeparator);
					target.push(stringToChunk(encodeHTMLTextNode(text)));
					return true;
				}
				function pushSegmentFinale(target, responseState, lastPushedText, textEmbedded) {
					if (lastPushedText && textEmbedded) target.push(textSeparator);
				}
				var styleNameCache = new Map();
				function processStyleName(styleName) {
					var chunk = styleNameCache.get(styleName);
					if (chunk !== undefined) return chunk;
					var result = stringToPrecomputedChunk(escapeTextForBrowser(hyphenateStyleName(styleName)));
					styleNameCache.set(styleName, result);
					return result;
				}
				var styleAttributeStart = stringToPrecomputedChunk(' style="');
				var styleAssign = stringToPrecomputedChunk(':');
				var styleSeparator = stringToPrecomputedChunk(';');
				function pushStyle(target, responseState, style) {
					if (typeof style !== 'object')
						throw new Error(
							"The `style` prop expects a mapping from style properties to values, not a string. For example, style={{marginRight: spacing + 'em'}} when using JSX."
						);
					var isFirst = true;
					for (var styleName in style) {
						if (!hasOwnProperty.call(style, styleName)) continue;
						var styleValue = style[styleName];
						if (styleValue == null || typeof styleValue === 'boolean' || styleValue === '') continue;
						var nameChunk = undefined;
						var valueChunk = undefined;
						var isCustomProperty = styleName.indexOf('--') === 0;
						if (isCustomProperty) {
							nameChunk = stringToChunk(escapeTextForBrowser(styleName));
							checkCSSPropertyStringCoercion(styleValue, styleName);
							valueChunk = stringToChunk(escapeTextForBrowser(('' + styleValue).trim()));
						} else {
							warnValidStyle$1(styleName, styleValue);
							nameChunk = processStyleName(styleName);
							if (typeof styleValue === 'number')
								if (styleValue !== 0 && !hasOwnProperty.call(isUnitlessNumber, styleName))
									valueChunk = stringToChunk(styleValue + 'px');
								else valueChunk = stringToChunk('' + styleValue);
							else {
								checkCSSPropertyStringCoercion(styleValue, styleName);
								valueChunk = stringToChunk(escapeTextForBrowser(('' + styleValue).trim()));
							}
						}
						if (isFirst) {
							isFirst = false;
							target.push(styleAttributeStart, nameChunk, styleAssign, valueChunk);
						} else target.push(styleSeparator, nameChunk, styleAssign, valueChunk);
					}
					if (!isFirst) target.push(attributeEnd);
				}
				var attributeSeparator = stringToPrecomputedChunk(' ');
				var attributeAssign = stringToPrecomputedChunk('="');
				var attributeEnd = stringToPrecomputedChunk('"');
				var attributeEmptyString = stringToPrecomputedChunk('=""');
				function pushAttribute(target, responseState, name, value) {
					switch (name) {
						case 'style': {
							pushStyle(target, responseState, value);
							return;
						}
						case 'defaultValue':
						case 'defaultChecked':
						case 'innerHTML':
						case 'suppressContentEditableWarning':
						case 'suppressHydrationWarning':
							return;
					}
					if (name.length > 2 && (name[0] === 'o' || name[0] === 'O') && (name[1] === 'n' || name[1] === 'N'))
						return;
					var propertyInfo = getPropertyInfo(name);
					if (propertyInfo !== null) {
						switch (typeof value) {
							case 'function':
							case 'symbol':
								return;
							case 'boolean':
								if (!propertyInfo.acceptsBooleans) return;
						}
						var attributeName = propertyInfo.attributeName;
						var attributeNameChunk = stringToChunk(attributeName);
						switch (propertyInfo.type) {
							case BOOLEAN:
								if (value) target.push(attributeSeparator, attributeNameChunk, attributeEmptyString);
								return;
							case OVERLOADED_BOOLEAN:
								if (value === true)
									target.push(attributeSeparator, attributeNameChunk, attributeEmptyString);
								else if (value === false);
								else
									target.push(
										attributeSeparator,
										attributeNameChunk,
										attributeAssign,
										stringToChunk(escapeTextForBrowser(value)),
										attributeEnd
									);
								return;
							case NUMERIC:
								if (!isNaN(value))
									target.push(
										attributeSeparator,
										attributeNameChunk,
										attributeAssign,
										stringToChunk(escapeTextForBrowser(value)),
										attributeEnd
									);
								break;
							case POSITIVE_NUMERIC:
								if (!isNaN(value) && value >= 1)
									target.push(
										attributeSeparator,
										attributeNameChunk,
										attributeAssign,
										stringToChunk(escapeTextForBrowser(value)),
										attributeEnd
									);
								break;
							default:
								if (propertyInfo.sanitizeURL) {
									checkAttributeStringCoercion(value, attributeName);
									value = '' + value;
									sanitizeURL(value);
								}
								target.push(
									attributeSeparator,
									attributeNameChunk,
									attributeAssign,
									stringToChunk(escapeTextForBrowser(value)),
									attributeEnd
								);
						}
					} else if (isAttributeNameSafe(name)) {
						switch (typeof value) {
							case 'function':
							case 'symbol':
								return;
							case 'boolean': {
								var prefix = name.toLowerCase().slice(0, 5);
								if (prefix !== 'data-' && prefix !== 'aria-') return;
							}
						}
						target.push(
							attributeSeparator,
							stringToChunk(name),
							attributeAssign,
							stringToChunk(escapeTextForBrowser(value)),
							attributeEnd
						);
					}
				}
				var endOfStartTag = stringToPrecomputedChunk('>');
				var endOfStartTagSelfClosing = stringToPrecomputedChunk('/>');
				function pushInnerHTML(target, innerHTML, children) {
					if (innerHTML != null) {
						if (children != null)
							throw new Error('Can only set one of `children` or `props.dangerouslySetInnerHTML`.');
						if (typeof innerHTML !== 'object' || !('__html' in innerHTML))
							throw new Error(
								'`props.dangerouslySetInnerHTML` must be in the form `{__html: ...}`. Please visit https://reactjs.org/link/dangerously-set-inner-html for more information.'
							);
						var html = innerHTML.__html;
						if (html !== null && html !== undefined) {
							checkHtmlStringCoercion(html);
							target.push(stringToChunk('' + html));
						}
					}
				}
				var didWarnDefaultInputValue = false;
				var didWarnDefaultChecked = false;
				var didWarnDefaultSelectValue = false;
				var didWarnDefaultTextareaValue = false;
				var didWarnInvalidOptionChildren = false;
				var didWarnInvalidOptionInnerHTML = false;
				var didWarnSelectedSetOnOption = false;
				function checkSelectProp(props, propName) {
					{
						var value = props[propName];
						if (value != null) {
							var array = isArray(value);
							if (props.multiple && !array)
								error(
									'The `%s` prop supplied to <select> must be an array if `multiple` is true.',
									propName
								);
							else if (!props.multiple && array)
								error(
									'The `%s` prop supplied to <select> must be a scalar value if `multiple` is false.',
									propName
								);
						}
					}
				}
				function pushStartSelect(target, props, responseState) {
					{
						checkControlledValueProps('select', props);
						checkSelectProp(props, 'value');
						checkSelectProp(props, 'defaultValue');
						if (
							props.value !== undefined &&
							props.defaultValue !== undefined &&
							!didWarnDefaultSelectValue
						) {
							error(
								'Select elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled select element and remove one of these props. More info: https://reactjs.org/link/controlled-components'
							);
							didWarnDefaultSelectValue = true;
						}
					}
					target.push(startChunkForTag('select'));
					var children = null;
					var innerHTML = null;
					for (var propKey in props)
						if (hasOwnProperty.call(props, propKey)) {
							var propValue = props[propKey];
							if (propValue == null) continue;
							switch (propKey) {
								case 'children':
									children = propValue;
									break;
								case 'dangerouslySetInnerHTML':
									innerHTML = propValue;
									break;
								case 'defaultValue':
								case 'value':
									break;
								default:
									pushAttribute(target, responseState, propKey, propValue);
									break;
							}
						}
					target.push(endOfStartTag);
					pushInnerHTML(target, innerHTML, children);
					return children;
				}
				function flattenOptionChildren(children) {
					var content = '';
					React.Children.forEach(children, function (child) {
						if (child == null) return;
						content += child;
						if (!didWarnInvalidOptionChildren && typeof child !== 'string' && typeof child !== 'number') {
							didWarnInvalidOptionChildren = true;
							error(
								'Cannot infer the option value of complex children. Pass a `value` prop or use a plain string as children to <option>.'
							);
						}
					});
					return content;
				}
				var selectedMarkerAttribute = stringToPrecomputedChunk(' selected=""');
				function pushStartOption(target, props, responseState, formatContext) {
					var selectedValue = formatContext.selectedValue;
					target.push(startChunkForTag('option'));
					var children = null;
					var value = null;
					var selected = null;
					var innerHTML = null;
					for (var propKey in props)
						if (hasOwnProperty.call(props, propKey)) {
							var propValue = props[propKey];
							if (propValue == null) continue;
							switch (propKey) {
								case 'children':
									children = propValue;
									break;
								case 'selected':
									selected = propValue;
									if (!didWarnSelectedSetOnOption) {
										error(
											'Use the `defaultValue` or `value` props on <select> instead of setting `selected` on <option>.'
										);
										didWarnSelectedSetOnOption = true;
									}
									break;
								case 'dangerouslySetInnerHTML':
									innerHTML = propValue;
									break;
								case 'value':
									value = propValue;
								default:
									pushAttribute(target, responseState, propKey, propValue);
									break;
							}
						}
					if (selectedValue != null) {
						var stringValue;
						if (value !== null) {
							checkAttributeStringCoercion(value, 'value');
							stringValue = '' + value;
						} else {
							if (innerHTML !== null) {
								if (!didWarnInvalidOptionInnerHTML) {
									didWarnInvalidOptionInnerHTML = true;
									error(
										'Pass a `value` prop if you set dangerouslyInnerHTML so React knows which value should be selected.'
									);
								}
							}
							stringValue = flattenOptionChildren(children);
						}
						if (isArray(selectedValue))
							for (var i = 0; i < selectedValue.length; i++) {
								checkAttributeStringCoercion(selectedValue[i], 'value');
								var v = '' + selectedValue[i];
								if (v === stringValue) {
									target.push(selectedMarkerAttribute);
									break;
								}
							}
						else {
							checkAttributeStringCoercion(selectedValue, 'select.value');
							if ('' + selectedValue === stringValue) target.push(selectedMarkerAttribute);
						}
					} else if (selected) target.push(selectedMarkerAttribute);
					target.push(endOfStartTag);
					pushInnerHTML(target, innerHTML, children);
					return children;
				}
				function pushInput(target, props, responseState) {
					{
						checkControlledValueProps('input', props);
						if (
							props.checked !== undefined &&
							props.defaultChecked !== undefined &&
							!didWarnDefaultChecked
						) {
							error(
								'%s contains an input of type %s with both checked and defaultChecked props. Input elements must be either controlled or uncontrolled (specify either the checked prop, or the defaultChecked prop, but not both). Decide between using a controlled or uncontrolled input element and remove one of these props. More info: https://reactjs.org/link/controlled-components',
								'A component',
								props.type
							);
							didWarnDefaultChecked = true;
						}
						if (
							props.value !== undefined &&
							props.defaultValue !== undefined &&
							!didWarnDefaultInputValue
						) {
							error(
								'%s contains an input of type %s with both value and defaultValue props. Input elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled input element and remove one of these props. More info: https://reactjs.org/link/controlled-components',
								'A component',
								props.type
							);
							didWarnDefaultInputValue = true;
						}
					}
					target.push(startChunkForTag('input'));
					var value = null;
					var defaultValue = null;
					var checked = null;
					var defaultChecked = null;
					for (var propKey in props)
						if (hasOwnProperty.call(props, propKey)) {
							var propValue = props[propKey];
							if (propValue == null) continue;
							switch (propKey) {
								case 'children':
								case 'dangerouslySetInnerHTML':
									throw new Error(
										'input is a self-closing tag and must neither have `children` nor use `dangerouslySetInnerHTML`.'
									);
								case 'defaultChecked':
									defaultChecked = propValue;
									break;
								case 'defaultValue':
									defaultValue = propValue;
									break;
								case 'checked':
									checked = propValue;
									break;
								case 'value':
									value = propValue;
									break;
								default:
									pushAttribute(target, responseState, propKey, propValue);
									break;
							}
						}
					if (checked !== null) pushAttribute(target, responseState, 'checked', checked);
					else if (defaultChecked !== null) pushAttribute(target, responseState, 'checked', defaultChecked);
					if (value !== null) pushAttribute(target, responseState, 'value', value);
					else if (defaultValue !== null) pushAttribute(target, responseState, 'value', defaultValue);
					target.push(endOfStartTagSelfClosing);
					return null;
				}
				function pushStartTextArea(target, props, responseState) {
					{
						checkControlledValueProps('textarea', props);
						if (
							props.value !== undefined &&
							props.defaultValue !== undefined &&
							!didWarnDefaultTextareaValue
						) {
							error(
								'Textarea elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled textarea and remove one of these props. More info: https://reactjs.org/link/controlled-components'
							);
							didWarnDefaultTextareaValue = true;
						}
					}
					target.push(startChunkForTag('textarea'));
					var value = null;
					var defaultValue = null;
					var children = null;
					for (var propKey in props)
						if (hasOwnProperty.call(props, propKey)) {
							var propValue = props[propKey];
							if (propValue == null) continue;
							switch (propKey) {
								case 'children':
									children = propValue;
									break;
								case 'value':
									value = propValue;
									break;
								case 'defaultValue':
									defaultValue = propValue;
									break;
								case 'dangerouslySetInnerHTML':
									throw new Error('`dangerouslySetInnerHTML` does not make sense on <textarea>.');
								default:
									pushAttribute(target, responseState, propKey, propValue);
									break;
							}
						}
					if (value === null && defaultValue !== null) value = defaultValue;
					target.push(endOfStartTag);
					if (children != null) {
						error('Use the `defaultValue` or `value` props instead of setting children on <textarea>.');
						if (value != null)
							throw new Error('If you supply `defaultValue` on a <textarea>, do not pass children.');
						if (isArray(children)) {
							if (children.length > 1) throw new Error('<textarea> can only have at most one child.');
							checkHtmlStringCoercion(children[0]);
							value = '' + children[0];
						}
						checkHtmlStringCoercion(children);
						value = '' + children;
					}
					if (typeof value === 'string' && value[0] === '\n') target.push(leadingNewline);
					if (value !== null) {
						checkAttributeStringCoercion(value, 'value');
						target.push(stringToChunk(encodeHTMLTextNode('' + value)));
					}
					return null;
				}
				function pushSelfClosing(target, props, tag, responseState) {
					target.push(startChunkForTag(tag));
					for (var propKey in props)
						if (hasOwnProperty.call(props, propKey)) {
							var propValue = props[propKey];
							if (propValue == null) continue;
							switch (propKey) {
								case 'children':
								case 'dangerouslySetInnerHTML':
									throw new Error(
										tag +
											' is a self-closing tag and must neither have `children` nor use `dangerouslySetInnerHTML`.'
									);
								default:
									pushAttribute(target, responseState, propKey, propValue);
									break;
							}
						}
					target.push(endOfStartTagSelfClosing);
					return null;
				}
				function pushStartMenuItem(target, props, responseState) {
					target.push(startChunkForTag('menuitem'));
					for (var propKey in props)
						if (hasOwnProperty.call(props, propKey)) {
							var propValue = props[propKey];
							if (propValue == null) continue;
							switch (propKey) {
								case 'children':
								case 'dangerouslySetInnerHTML':
									throw new Error('menuitems cannot have `children` nor `dangerouslySetInnerHTML`.');
								default:
									pushAttribute(target, responseState, propKey, propValue);
									break;
							}
						}
					target.push(endOfStartTag);
					return null;
				}
				function pushStartTitle(target, props, responseState) {
					target.push(startChunkForTag('title'));
					var children = null;
					for (var propKey in props)
						if (hasOwnProperty.call(props, propKey)) {
							var propValue = props[propKey];
							if (propValue == null) continue;
							switch (propKey) {
								case 'children':
									children = propValue;
									break;
								case 'dangerouslySetInnerHTML':
									throw new Error('`dangerouslySetInnerHTML` does not make sense on <title>.');
								default:
									pushAttribute(target, responseState, propKey, propValue);
									break;
							}
						}
					target.push(endOfStartTag);
					{
						var child = Array.isArray(children) && children.length < 2 ? children[0] || null : children;
						if (Array.isArray(children) && children.length > 1)
							error(
								'A title element received an array with more than 1 element as children. In browsers title Elements can only have Text Nodes as children. If the children being rendered output more than a single text node in aggregate the browser will display markup and comments as text in the title and hydration will likely fail and fall back to client rendering'
							);
						else if (child != null && child.$$typeof != null)
							error(
								'A title element received a React element for children. In the browser title Elements can only have Text Nodes as children. If the children being rendered output more than a single text node in aggregate the browser will display markup and comments as text in the title and hydration will likely fail and fall back to client rendering'
							);
						else if (child != null && typeof child !== 'string' && typeof child !== 'number')
							error(
								'A title element received a value that was not a string or number for children. In the browser title Elements can only have Text Nodes as children. If the children being rendered output more than a single text node in aggregate the browser will display markup and comments as text in the title and hydration will likely fail and fall back to client rendering'
							);
					}
					return children;
				}
				function pushStartGenericElement(target, props, tag, responseState) {
					target.push(startChunkForTag(tag));
					var children = null;
					var innerHTML = null;
					for (var propKey in props)
						if (hasOwnProperty.call(props, propKey)) {
							var propValue = props[propKey];
							if (propValue == null) continue;
							switch (propKey) {
								case 'children':
									children = propValue;
									break;
								case 'dangerouslySetInnerHTML':
									innerHTML = propValue;
									break;
								default:
									pushAttribute(target, responseState, propKey, propValue);
									break;
							}
						}
					target.push(endOfStartTag);
					pushInnerHTML(target, innerHTML, children);
					if (typeof children === 'string') {
						target.push(stringToChunk(encodeHTMLTextNode(children)));
						return null;
					}
					return children;
				}
				function pushStartCustomElement(target, props, tag, responseState) {
					target.push(startChunkForTag(tag));
					var children = null;
					var innerHTML = null;
					for (var propKey in props)
						if (hasOwnProperty.call(props, propKey)) {
							var propValue = props[propKey];
							if (propValue == null) continue;
							switch (propKey) {
								case 'children':
									children = propValue;
									break;
								case 'dangerouslySetInnerHTML':
									innerHTML = propValue;
									break;
								case 'style':
									pushStyle(target, responseState, propValue);
									break;
								case 'suppressContentEditableWarning':
								case 'suppressHydrationWarning':
									break;
								default:
									if (
										isAttributeNameSafe(propKey) &&
										typeof propValue !== 'function' &&
										typeof propValue !== 'symbol'
									)
										target.push(
											attributeSeparator,
											stringToChunk(propKey),
											attributeAssign,
											stringToChunk(escapeTextForBrowser(propValue)),
											attributeEnd
										);
									break;
							}
						}
					target.push(endOfStartTag);
					pushInnerHTML(target, innerHTML, children);
					return children;
				}
				var leadingNewline = stringToPrecomputedChunk('\n');
				function pushStartPreformattedElement(target, props, tag, responseState) {
					target.push(startChunkForTag(tag));
					var children = null;
					var innerHTML = null;
					for (var propKey in props)
						if (hasOwnProperty.call(props, propKey)) {
							var propValue = props[propKey];
							if (propValue == null) continue;
							switch (propKey) {
								case 'children':
									children = propValue;
									break;
								case 'dangerouslySetInnerHTML':
									innerHTML = propValue;
									break;
								default:
									pushAttribute(target, responseState, propKey, propValue);
									break;
							}
						}
					target.push(endOfStartTag);
					if (innerHTML != null) {
						if (children != null)
							throw new Error('Can only set one of `children` or `props.dangerouslySetInnerHTML`.');
						if (typeof innerHTML !== 'object' || !('__html' in innerHTML))
							throw new Error(
								'`props.dangerouslySetInnerHTML` must be in the form `{__html: ...}`. Please visit https://reactjs.org/link/dangerously-set-inner-html for more information.'
							);
						var html = innerHTML.__html;
						if (html !== null && html !== undefined)
							if (typeof html === 'string' && html.length > 0 && html[0] === '\n')
								target.push(leadingNewline, stringToChunk(html));
							else {
								checkHtmlStringCoercion(html);
								target.push(stringToChunk('' + html));
							}
					}
					if (typeof children === 'string' && children[0] === '\n') target.push(leadingNewline);
					return children;
				}
				var VALID_TAG_REGEX = /^[a-zA-Z][a-zA-Z:_\.\-\d]*$/;
				var validatedTagCache = new Map();
				function startChunkForTag(tag) {
					var tagStartChunk = validatedTagCache.get(tag);
					if (tagStartChunk === undefined) {
						if (!VALID_TAG_REGEX.test(tag)) throw new Error('Invalid tag: ' + tag);
						tagStartChunk = stringToPrecomputedChunk('<' + tag);
						validatedTagCache.set(tag, tagStartChunk);
					}
					return tagStartChunk;
				}
				var DOCTYPE = stringToPrecomputedChunk('<!DOCTYPE html>');
				function pushStartInstance(target, type, props, responseState, formatContext) {
					{
						validateProperties(type, props);
						validateProperties$1(type, props);
						validateProperties$2(type, props, null);
						if (!props.suppressContentEditableWarning && props.contentEditable && props.children != null)
							error(
								'A component is `contentEditable` and contains `children` managed by React. It is now your responsibility to guarantee that none of those nodes are unexpectedly modified or duplicated. This is probably not intentional.'
							);
						if (formatContext.insertionMode !== SVG_MODE && formatContext.insertionMode !== MATHML_MODE) {
							if (type.indexOf('-') === -1 && typeof props.is !== 'string' && type.toLowerCase() !== type)
								error(
									'<%s /> is using incorrect casing. Use PascalCase for React components, or lowercase for HTML elements.',
									type
								);
						}
					}
					switch (type) {
						case 'select':
							return pushStartSelect(target, props, responseState);
						case 'option':
							return pushStartOption(target, props, responseState, formatContext);
						case 'textarea':
							return pushStartTextArea(target, props, responseState);
						case 'input':
							return pushInput(target, props, responseState);
						case 'menuitem':
							return pushStartMenuItem(target, props, responseState);
						case 'title':
							return pushStartTitle(target, props, responseState);
						case 'listing':
						case 'pre':
							return pushStartPreformattedElement(target, props, type, responseState);
						case 'area':
						case 'base':
						case 'br':
						case 'col':
						case 'embed':
						case 'hr':
						case 'img':
						case 'keygen':
						case 'link':
						case 'meta':
						case 'param':
						case 'source':
						case 'track':
						case 'wbr':
							return pushSelfClosing(target, props, type, responseState);
						case 'annotation-xml':
						case 'color-profile':
						case 'font-face':
						case 'font-face-src':
						case 'font-face-uri':
						case 'font-face-format':
						case 'font-face-name':
						case 'missing-glyph':
							return pushStartGenericElement(target, props, type, responseState);
						case 'html': {
							if (formatContext.insertionMode === ROOT_HTML_MODE) target.push(DOCTYPE);
							return pushStartGenericElement(target, props, type, responseState);
						}
						default:
							if (type.indexOf('-') === -1 && typeof props.is !== 'string')
								return pushStartGenericElement(target, props, type, responseState);
							else return pushStartCustomElement(target, props, type, responseState);
					}
				}
				var endTag1 = stringToPrecomputedChunk('</');
				var endTag2 = stringToPrecomputedChunk('>');
				function pushEndInstance(target, type, props) {
					switch (type) {
						case 'area':
						case 'base':
						case 'br':
						case 'col':
						case 'embed':
						case 'hr':
						case 'img':
						case 'input':
						case 'keygen':
						case 'link':
						case 'meta':
						case 'param':
						case 'source':
						case 'track':
						case 'wbr':
							break;
						default:
							target.push(endTag1, stringToChunk(type), endTag2);
					}
				}
				function writeCompletedRoot(destination, responseState) {
					var bootstrapChunks = responseState.bootstrapChunks;
					var i = 0;
					for (; i < bootstrapChunks.length - 1; i++) writeChunk(destination, bootstrapChunks[i]);
					if (i < bootstrapChunks.length) return writeChunkAndReturn(destination, bootstrapChunks[i]);
					return true;
				}
				var placeholder1 = stringToPrecomputedChunk('<template id="');
				var placeholder2 = stringToPrecomputedChunk('"></template>');
				function writePlaceholder(destination, responseState, id) {
					writeChunk(destination, placeholder1);
					writeChunk(destination, responseState.placeholderPrefix);
					var formattedID = stringToChunk(id.toString(16));
					writeChunk(destination, formattedID);
					return writeChunkAndReturn(destination, placeholder2);
				}
				var startCompletedSuspenseBoundary = stringToPrecomputedChunk('<!--$-->');
				var startPendingSuspenseBoundary1 = stringToPrecomputedChunk('<!--$?--><template id="');
				var startPendingSuspenseBoundary2 = stringToPrecomputedChunk('"></template>');
				var startClientRenderedSuspenseBoundary = stringToPrecomputedChunk('<!--$!-->');
				var endSuspenseBoundary = stringToPrecomputedChunk('<!--/$-->');
				var clientRenderedSuspenseBoundaryError1 = stringToPrecomputedChunk('<template');
				var clientRenderedSuspenseBoundaryErrorAttrInterstitial = stringToPrecomputedChunk('"');
				var clientRenderedSuspenseBoundaryError1A = stringToPrecomputedChunk(' data-dgst="');
				var clientRenderedSuspenseBoundaryError1B = stringToPrecomputedChunk(' data-msg="');
				var clientRenderedSuspenseBoundaryError1C = stringToPrecomputedChunk(' data-stck="');
				var clientRenderedSuspenseBoundaryError2 = stringToPrecomputedChunk('></template>');
				function writeStartCompletedSuspenseBoundary(destination, responseState) {
					return writeChunkAndReturn(destination, startCompletedSuspenseBoundary);
				}
				function writeStartPendingSuspenseBoundary(destination, responseState, id) {
					writeChunk(destination, startPendingSuspenseBoundary1);
					if (id === null)
						throw new Error('An ID must have been assigned before we can complete the boundary.');
					writeChunk(destination, id);
					return writeChunkAndReturn(destination, startPendingSuspenseBoundary2);
				}
				function writeStartClientRenderedSuspenseBoundary(
					destination,
					responseState,
					errorDigest,
					errorMesssage,
					errorComponentStack
				) {
					var result;
					result = writeChunkAndReturn(destination, startClientRenderedSuspenseBoundary);
					writeChunk(destination, clientRenderedSuspenseBoundaryError1);
					if (errorDigest) {
						writeChunk(destination, clientRenderedSuspenseBoundaryError1A);
						writeChunk(destination, stringToChunk(escapeTextForBrowser(errorDigest)));
						writeChunk(destination, clientRenderedSuspenseBoundaryErrorAttrInterstitial);
					}
					{
						if (errorMesssage) {
							writeChunk(destination, clientRenderedSuspenseBoundaryError1B);
							writeChunk(destination, stringToChunk(escapeTextForBrowser(errorMesssage)));
							writeChunk(destination, clientRenderedSuspenseBoundaryErrorAttrInterstitial);
						}
						if (errorComponentStack) {
							writeChunk(destination, clientRenderedSuspenseBoundaryError1C);
							writeChunk(destination, stringToChunk(escapeTextForBrowser(errorComponentStack)));
							writeChunk(destination, clientRenderedSuspenseBoundaryErrorAttrInterstitial);
						}
					}
					result = writeChunkAndReturn(destination, clientRenderedSuspenseBoundaryError2);
					return result;
				}
				function writeEndCompletedSuspenseBoundary(destination, responseState) {
					return writeChunkAndReturn(destination, endSuspenseBoundary);
				}
				function writeEndPendingSuspenseBoundary(destination, responseState) {
					return writeChunkAndReturn(destination, endSuspenseBoundary);
				}
				function writeEndClientRenderedSuspenseBoundary(destination, responseState) {
					return writeChunkAndReturn(destination, endSuspenseBoundary);
				}
				var startSegmentHTML = stringToPrecomputedChunk('<div hidden id="');
				var startSegmentHTML2 = stringToPrecomputedChunk('">');
				var endSegmentHTML = stringToPrecomputedChunk('</div>');
				var startSegmentSVG = stringToPrecomputedChunk('<svg aria-hidden="true" style="display:none" id="');
				var startSegmentSVG2 = stringToPrecomputedChunk('">');
				var endSegmentSVG = stringToPrecomputedChunk('</svg>');
				var startSegmentMathML = stringToPrecomputedChunk('<math aria-hidden="true" style="display:none" id="');
				var startSegmentMathML2 = stringToPrecomputedChunk('">');
				var endSegmentMathML = stringToPrecomputedChunk('</math>');
				var startSegmentTable = stringToPrecomputedChunk('<table hidden id="');
				var startSegmentTable2 = stringToPrecomputedChunk('">');
				var endSegmentTable = stringToPrecomputedChunk('</table>');
				var startSegmentTableBody = stringToPrecomputedChunk('<table hidden><tbody id="');
				var startSegmentTableBody2 = stringToPrecomputedChunk('">');
				var endSegmentTableBody = stringToPrecomputedChunk('</tbody></table>');
				var startSegmentTableRow = stringToPrecomputedChunk('<table hidden><tr id="');
				var startSegmentTableRow2 = stringToPrecomputedChunk('">');
				var endSegmentTableRow = stringToPrecomputedChunk('</tr></table>');
				var startSegmentColGroup = stringToPrecomputedChunk('<table hidden><colgroup id="');
				var startSegmentColGroup2 = stringToPrecomputedChunk('">');
				var endSegmentColGroup = stringToPrecomputedChunk('</colgroup></table>');
				function writeStartSegment(destination, responseState, formatContext, id) {
					switch (formatContext.insertionMode) {
						case ROOT_HTML_MODE:
						case HTML_MODE: {
							writeChunk(destination, startSegmentHTML);
							writeChunk(destination, responseState.segmentPrefix);
							writeChunk(destination, stringToChunk(id.toString(16)));
							return writeChunkAndReturn(destination, startSegmentHTML2);
						}
						case SVG_MODE: {
							writeChunk(destination, startSegmentSVG);
							writeChunk(destination, responseState.segmentPrefix);
							writeChunk(destination, stringToChunk(id.toString(16)));
							return writeChunkAndReturn(destination, startSegmentSVG2);
						}
						case MATHML_MODE: {
							writeChunk(destination, startSegmentMathML);
							writeChunk(destination, responseState.segmentPrefix);
							writeChunk(destination, stringToChunk(id.toString(16)));
							return writeChunkAndReturn(destination, startSegmentMathML2);
						}
						case HTML_TABLE_MODE: {
							writeChunk(destination, startSegmentTable);
							writeChunk(destination, responseState.segmentPrefix);
							writeChunk(destination, stringToChunk(id.toString(16)));
							return writeChunkAndReturn(destination, startSegmentTable2);
						}
						case HTML_TABLE_BODY_MODE: {
							writeChunk(destination, startSegmentTableBody);
							writeChunk(destination, responseState.segmentPrefix);
							writeChunk(destination, stringToChunk(id.toString(16)));
							return writeChunkAndReturn(destination, startSegmentTableBody2);
						}
						case HTML_TABLE_ROW_MODE: {
							writeChunk(destination, startSegmentTableRow);
							writeChunk(destination, responseState.segmentPrefix);
							writeChunk(destination, stringToChunk(id.toString(16)));
							return writeChunkAndReturn(destination, startSegmentTableRow2);
						}
						case HTML_COLGROUP_MODE: {
							writeChunk(destination, startSegmentColGroup);
							writeChunk(destination, responseState.segmentPrefix);
							writeChunk(destination, stringToChunk(id.toString(16)));
							return writeChunkAndReturn(destination, startSegmentColGroup2);
						}
						default:
							throw new Error('Unknown insertion mode. This is a bug in React.');
					}
				}
				function writeEndSegment(destination, formatContext) {
					switch (formatContext.insertionMode) {
						case ROOT_HTML_MODE:
						case HTML_MODE:
							return writeChunkAndReturn(destination, endSegmentHTML);
						case SVG_MODE:
							return writeChunkAndReturn(destination, endSegmentSVG);
						case MATHML_MODE:
							return writeChunkAndReturn(destination, endSegmentMathML);
						case HTML_TABLE_MODE:
							return writeChunkAndReturn(destination, endSegmentTable);
						case HTML_TABLE_BODY_MODE:
							return writeChunkAndReturn(destination, endSegmentTableBody);
						case HTML_TABLE_ROW_MODE:
							return writeChunkAndReturn(destination, endSegmentTableRow);
						case HTML_COLGROUP_MODE:
							return writeChunkAndReturn(destination, endSegmentColGroup);
						default:
							throw new Error('Unknown insertion mode. This is a bug in React.');
					}
				}
				var completeSegmentFunction =
					'function $RS(a,b){a=document.getElementById(a);b=document.getElementById(b);for(a.parentNode.removeChild(a);a.firstChild;)b.parentNode.insertBefore(a.firstChild,b);b.parentNode.removeChild(b)}';
				var completeBoundaryFunction =
					'function $RC(a,b){a=document.getElementById(a);b=document.getElementById(b);b.parentNode.removeChild(b);if(a){a=a.previousSibling;var f=a.parentNode,c=a.nextSibling,e=0;do{if(c&&8===c.nodeType){var d=c.data;if("/$"===d)if(0===e)break;else e--;else"$"!==d&&"$?"!==d&&"$!"!==d||e++}d=c.nextSibling;f.removeChild(c);c=d}while(c);for(;b.firstChild;)f.insertBefore(b.firstChild,c);a.data="$";a._reactRetry&&a._reactRetry()}}';
				var clientRenderFunction =
					'function $RX(b,c,d,e){var a=document.getElementById(b);a&&(b=a.previousSibling,b.data="$!",a=a.dataset,c&&(a.dgst=c),d&&(a.msg=d),e&&(a.stck=e),b._reactRetry&&b._reactRetry())}';
				var completeSegmentScript1Full = stringToPrecomputedChunk(completeSegmentFunction + ';$RS("');
				var completeSegmentScript1Partial = stringToPrecomputedChunk('$RS("');
				var completeSegmentScript2 = stringToPrecomputedChunk('","');
				var completeSegmentScript3 = stringToPrecomputedChunk('")</script>');
				function writeCompletedSegmentInstruction(destination, responseState, contentSegmentID) {
					writeChunk(destination, responseState.startInlineScript);
					if (!responseState.sentCompleteSegmentFunction) {
						responseState.sentCompleteSegmentFunction = true;
						writeChunk(destination, completeSegmentScript1Full);
					} else writeChunk(destination, completeSegmentScript1Partial);
					writeChunk(destination, responseState.segmentPrefix);
					var formattedID = stringToChunk(contentSegmentID.toString(16));
					writeChunk(destination, formattedID);
					writeChunk(destination, completeSegmentScript2);
					writeChunk(destination, responseState.placeholderPrefix);
					writeChunk(destination, formattedID);
					return writeChunkAndReturn(destination, completeSegmentScript3);
				}
				var completeBoundaryScript1Full = stringToPrecomputedChunk(completeBoundaryFunction + ';$RC("');
				var completeBoundaryScript1Partial = stringToPrecomputedChunk('$RC("');
				var completeBoundaryScript2 = stringToPrecomputedChunk('","');
				var completeBoundaryScript3 = stringToPrecomputedChunk('")</script>');
				function writeCompletedBoundaryInstruction(destination, responseState, boundaryID, contentSegmentID) {
					writeChunk(destination, responseState.startInlineScript);
					if (!responseState.sentCompleteBoundaryFunction) {
						responseState.sentCompleteBoundaryFunction = true;
						writeChunk(destination, completeBoundaryScript1Full);
					} else writeChunk(destination, completeBoundaryScript1Partial);
					if (boundaryID === null)
						throw new Error('An ID must have been assigned before we can complete the boundary.');
					var formattedContentID = stringToChunk(contentSegmentID.toString(16));
					writeChunk(destination, boundaryID);
					writeChunk(destination, completeBoundaryScript2);
					writeChunk(destination, responseState.segmentPrefix);
					writeChunk(destination, formattedContentID);
					return writeChunkAndReturn(destination, completeBoundaryScript3);
				}
				var clientRenderScript1Full = stringToPrecomputedChunk(clientRenderFunction + ';$RX("');
				var clientRenderScript1Partial = stringToPrecomputedChunk('$RX("');
				var clientRenderScript1A = stringToPrecomputedChunk('"');
				var clientRenderScript2 = stringToPrecomputedChunk(')</script>');
				var clientRenderErrorScriptArgInterstitial = stringToPrecomputedChunk(',');
				function writeClientRenderBoundaryInstruction(
					destination,
					responseState,
					boundaryID,
					errorDigest,
					errorMessage,
					errorComponentStack
				) {
					writeChunk(destination, responseState.startInlineScript);
					if (!responseState.sentClientRenderFunction) {
						responseState.sentClientRenderFunction = true;
						writeChunk(destination, clientRenderScript1Full);
					} else writeChunk(destination, clientRenderScript1Partial);
					if (boundaryID === null)
						throw new Error('An ID must have been assigned before we can complete the boundary.');
					writeChunk(destination, boundaryID);
					writeChunk(destination, clientRenderScript1A);
					if (errorDigest || errorMessage || errorComponentStack) {
						writeChunk(destination, clientRenderErrorScriptArgInterstitial);
						writeChunk(destination, stringToChunk(escapeJSStringsForInstructionScripts(errorDigest || '')));
					}
					if (errorMessage || errorComponentStack) {
						writeChunk(destination, clientRenderErrorScriptArgInterstitial);
						writeChunk(
							destination,
							stringToChunk(escapeJSStringsForInstructionScripts(errorMessage || ''))
						);
					}
					if (errorComponentStack) {
						writeChunk(destination, clientRenderErrorScriptArgInterstitial);
						writeChunk(
							destination,
							stringToChunk(escapeJSStringsForInstructionScripts(errorComponentStack))
						);
					}
					return writeChunkAndReturn(destination, clientRenderScript2);
				}
				var regexForJSStringsInScripts = /[<\u2028\u2029]/g;
				function escapeJSStringsForInstructionScripts(input) {
					var escaped = JSON.stringify(input);
					return escaped.replace(regexForJSStringsInScripts, function (match) {
						switch (match) {
							case '<':
								return '\\u003c';
							case '\u2028':
								return '\\u2028';
							case '\u2029':
								return '\\u2029';
							default:
								throw new Error(
									'escapeJSStringsForInstructionScripts encountered a match it does not know how to replace. this means the match regex and the replacement characters are no longer in sync. This is a bug in React'
								);
						}
					});
				}
				var assign = Object.assign;
				var REACT_ELEMENT_TYPE = Symbol.for('react.element');
				var REACT_PORTAL_TYPE = Symbol.for('react.portal');
				var REACT_FRAGMENT_TYPE = Symbol.for('react.fragment');
				var REACT_STRICT_MODE_TYPE = Symbol.for('react.strict_mode');
				var REACT_PROFILER_TYPE = Symbol.for('react.profiler');
				var REACT_PROVIDER_TYPE = Symbol.for('react.provider');
				var REACT_CONTEXT_TYPE = Symbol.for('react.context');
				var REACT_FORWARD_REF_TYPE = Symbol.for('react.forward_ref');
				var REACT_SUSPENSE_TYPE = Symbol.for('react.suspense');
				var REACT_SUSPENSE_LIST_TYPE = Symbol.for('react.suspense_list');
				var REACT_MEMO_TYPE = Symbol.for('react.memo');
				var REACT_LAZY_TYPE = Symbol.for('react.lazy');
				var REACT_SCOPE_TYPE = Symbol.for('react.scope');
				var REACT_DEBUG_TRACING_MODE_TYPE = Symbol.for('react.debug_trace_mode');
				var REACT_LEGACY_HIDDEN_TYPE = Symbol.for('react.legacy_hidden');
				var REACT_SERVER_CONTEXT_DEFAULT_VALUE_NOT_LOADED = Symbol.for('react.default_value');
				var MAYBE_ITERATOR_SYMBOL = Symbol.iterator;
				var FAUX_ITERATOR_SYMBOL = '@@iterator';
				function getIteratorFn(maybeIterable) {
					if (maybeIterable === null || typeof maybeIterable !== 'object') return null;
					var maybeIterator =
						(MAYBE_ITERATOR_SYMBOL && maybeIterable[MAYBE_ITERATOR_SYMBOL]) ||
						maybeIterable[FAUX_ITERATOR_SYMBOL];
					if (typeof maybeIterator === 'function') return maybeIterator;
					return null;
				}
				function getWrappedName(outerType, innerType, wrapperName) {
					var displayName = outerType.displayName;
					if (displayName) return displayName;
					var functionName = innerType.displayName || innerType.name || '';
					return functionName !== '' ? wrapperName + '(' + functionName + ')' : wrapperName;
				}
				function getContextName(type) {
					return type.displayName || 'Context';
				}
				function getComponentNameFromType(type) {
					if (type == null) return null;
					if (typeof type.tag === 'number')
						error(
							'Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue.'
						);
					if (typeof type === 'function') return type.displayName || type.name || null;
					if (typeof type === 'string') return type;
					switch (type) {
						case REACT_FRAGMENT_TYPE:
							return 'Fragment';
						case REACT_PORTAL_TYPE:
							return 'Portal';
						case REACT_PROFILER_TYPE:
							return 'Profiler';
						case REACT_STRICT_MODE_TYPE:
							return 'StrictMode';
						case REACT_SUSPENSE_TYPE:
							return 'Suspense';
						case REACT_SUSPENSE_LIST_TYPE:
							return 'SuspenseList';
					}
					if (typeof type === 'object')
						switch (type.$$typeof) {
							case REACT_CONTEXT_TYPE:
								var context = type;
								return getContextName(context) + '.Consumer';
							case REACT_PROVIDER_TYPE:
								var provider = type;
								return getContextName(provider._context) + '.Provider';
							case REACT_FORWARD_REF_TYPE:
								return getWrappedName(type, type.render, 'ForwardRef');
							case REACT_MEMO_TYPE:
								var outerName = type.displayName || null;
								if (outerName !== null) return outerName;
								return getComponentNameFromType(type.type) || 'Memo';
							case REACT_LAZY_TYPE: {
								var lazyComponent = type;
								var payload = lazyComponent._payload;
								var init = lazyComponent._init;
								try {
									return getComponentNameFromType(init(payload));
								} catch (x) {
									return null;
								}
							}
						}
					return null;
				}
				var disabledDepth = 0;
				var prevLog;
				var prevInfo;
				var prevWarn;
				var prevError;
				var prevGroup;
				var prevGroupCollapsed;
				var prevGroupEnd;
				function disabledLog() {}
				disabledLog.__reactDisabledLog = true;
				function disableLogs() {
					{
						if (disabledDepth === 0) {
							prevLog = console.log;
							prevInfo = console.info;
							prevWarn = console.warn;
							prevError = console.error;
							prevGroup = console.group;
							prevGroupCollapsed = console.groupCollapsed;
							prevGroupEnd = console.groupEnd;
							var props = {
								configurable: true,
								enumerable: true,
								value: disabledLog,
								writable: true,
							};
							Object.defineProperties(console, {
								info: props,
								log: props,
								warn: props,
								error: props,
								group: props,
								groupCollapsed: props,
								groupEnd: props,
							});
						}
						disabledDepth++;
					}
				}
				function reenableLogs() {
					{
						disabledDepth--;
						if (disabledDepth === 0) {
							var props = {
								configurable: true,
								enumerable: true,
								writable: true,
							};
							Object.defineProperties(console, {
								log: assign({}, props, {
									value: prevLog,
								}),
								info: assign({}, props, {
									value: prevInfo,
								}),
								warn: assign({}, props, {
									value: prevWarn,
								}),
								error: assign({}, props, {
									value: prevError,
								}),
								group: assign({}, props, {
									value: prevGroup,
								}),
								groupCollapsed: assign({}, props, {
									value: prevGroupCollapsed,
								}),
								groupEnd: assign({}, props, {
									value: prevGroupEnd,
								}),
							});
						}
						if (disabledDepth < 0)
							error('disabledDepth fell below zero. This is a bug in React. Please file an issue.');
					}
				}
				var ReactCurrentDispatcher = ReactSharedInternals.ReactCurrentDispatcher;
				var prefix;
				function describeBuiltInComponentFrame(name, source, ownerFn) {
					{
						if (prefix === undefined)
							try {
								throw Error();
							} catch (x) {
								var match = x.stack.trim().match(/\n( *(at )?)/);
								prefix = (match && match[1]) || '';
							}
						return '\n' + prefix + name;
					}
				}
				var reentry = false;
				var componentFrameCache;
				{
					var PossiblyWeakMap = typeof WeakMap === 'function' ? WeakMap : Map;
					componentFrameCache = new PossiblyWeakMap();
				}
				function describeNativeComponentFrame(fn, construct) {
					if (!fn || reentry) return '';
					{
						var frame = componentFrameCache.get(fn);
						if (frame !== undefined) return frame;
					}
					var control;
					reentry = true;
					var previousPrepareStackTrace = Error.prepareStackTrace;
					Error.prepareStackTrace = undefined;
					var previousDispatcher;
					{
						previousDispatcher = ReactCurrentDispatcher.current;
						ReactCurrentDispatcher.current = null;
						disableLogs();
					}
					try {
						if (construct) {
							var Fake = function () {
								throw Error();
							};
							Object.defineProperty(Fake.prototype, 'props', {
								set: function () {
									throw Error();
								},
							});
							if (typeof Reflect === 'object' && Reflect.construct) {
								try {
									Reflect.construct(Fake, []);
								} catch (x) {
									control = x;
								}
								Reflect.construct(fn, [], Fake);
							} else {
								try {
									Fake.call();
								} catch (x) {
									control = x;
								}
								fn.call(Fake.prototype);
							}
						} else {
							try {
								throw Error();
							} catch (x) {
								control = x;
							}
							fn();
						}
					} catch (sample) {
						if (sample && control && typeof sample.stack === 'string') {
							var sampleLines = sample.stack.split('\n');
							var controlLines = control.stack.split('\n');
							var s = sampleLines.length - 1;
							var c = controlLines.length - 1;
							while (s >= 1 && c >= 0 && sampleLines[s] !== controlLines[c]) c--;
							for (; s >= 1 && c >= 0; s--, c--)
								if (sampleLines[s] !== controlLines[c]) {
									if (s !== 1 || c !== 1)
										do {
											s--;
											c--;
											if (c < 0 || sampleLines[s] !== controlLines[c]) {
												var _frame = '\n' + sampleLines[s].replace(' at new ', ' at ');
												if (fn.displayName && _frame.includes('<anonymous>'))
													_frame = _frame.replace('<anonymous>', fn.displayName);
												if (typeof fn === 'function') componentFrameCache.set(fn, _frame);
												return _frame;
											}
										} while (s >= 1 && c >= 0);
									break;
								}
						}
					} finally {
						reentry = false;
						{
							ReactCurrentDispatcher.current = previousDispatcher;
							reenableLogs();
						}
						Error.prepareStackTrace = previousPrepareStackTrace;
					}
					var name = fn ? fn.displayName || fn.name : '';
					var syntheticFrame = name ? describeBuiltInComponentFrame(name) : '';
					if (typeof fn === 'function') componentFrameCache.set(fn, syntheticFrame);
					return syntheticFrame;
				}
				function describeClassComponentFrame(ctor, source, ownerFn) {
					return describeNativeComponentFrame(ctor, true);
				}
				function describeFunctionComponentFrame(fn, source, ownerFn) {
					return describeNativeComponentFrame(fn, false);
				}
				function shouldConstruct(Component) {
					var prototype = Component.prototype;
					return !!(prototype && prototype.isReactComponent);
				}
				function describeUnknownElementTypeFrameInDEV(type, source, ownerFn) {
					if (type == null) return '';
					if (typeof type === 'function') return describeNativeComponentFrame(type, shouldConstruct(type));
					if (typeof type === 'string') return describeBuiltInComponentFrame(type);
					switch (type) {
						case REACT_SUSPENSE_TYPE:
							return describeBuiltInComponentFrame('Suspense');
						case REACT_SUSPENSE_LIST_TYPE:
							return describeBuiltInComponentFrame('SuspenseList');
					}
					if (typeof type === 'object')
						switch (type.$$typeof) {
							case REACT_FORWARD_REF_TYPE:
								return describeFunctionComponentFrame(type.render);
							case REACT_MEMO_TYPE:
								return describeUnknownElementTypeFrameInDEV(type.type, source, ownerFn);
							case REACT_LAZY_TYPE: {
								var lazyComponent = type;
								var payload = lazyComponent._payload;
								var init = lazyComponent._init;
								try {
									return describeUnknownElementTypeFrameInDEV(init(payload), source, ownerFn);
								} catch (x) {}
							}
						}
					return '';
				}
				var loggedTypeFailures = {};
				var ReactDebugCurrentFrame = ReactSharedInternals.ReactDebugCurrentFrame;
				function setCurrentlyValidatingElement(element) {
					if (element) {
						var owner = element._owner;
						var stack = describeUnknownElementTypeFrameInDEV(
							element.type,
							element._source,
							owner ? owner.type : null
						);
						ReactDebugCurrentFrame.setExtraStackFrame(stack);
					} else ReactDebugCurrentFrame.setExtraStackFrame(null);
				}
				function checkPropTypes(typeSpecs, values, location, componentName, element) {
					{
						var has = Function.call.bind(hasOwnProperty);
						for (var typeSpecName in typeSpecs)
							if (has(typeSpecs, typeSpecName)) {
								var error$1 = undefined;
								try {
									if (typeof typeSpecs[typeSpecName] !== 'function') {
										var err = Error(
											(componentName || 'React class') +
												': ' +
												location +
												' type `' +
												typeSpecName +
												'` is invalid; it must be a function, usually from the `prop-types` package, but received `' +
												typeof typeSpecs[typeSpecName] +
												'`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.'
										);
										err.name = 'Invariant Violation';
										throw err;
									}
									error$1 = typeSpecs[typeSpecName](
										values,
										typeSpecName,
										componentName,
										location,
										null,
										'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED'
									);
								} catch (ex) {
									error$1 = ex;
								}
								if (error$1 && !(error$1 instanceof Error)) {
									setCurrentlyValidatingElement(element);
									error(
										'%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).',
										componentName || 'React class',
										location,
										typeSpecName,
										typeof error$1
									);
									setCurrentlyValidatingElement(null);
								}
								if (error$1 instanceof Error && !(error$1.message in loggedTypeFailures)) {
									loggedTypeFailures[error$1.message] = true;
									setCurrentlyValidatingElement(element);
									error('Failed %s type: %s', location, error$1.message);
									setCurrentlyValidatingElement(null);
								}
							}
					}
				}
				var warnedAboutMissingGetChildContext;
				warnedAboutMissingGetChildContext = {};
				var emptyContextObject = {};
				Object.freeze(emptyContextObject);
				function getMaskedContext(type, unmaskedContext) {
					{
						var contextTypes = type.contextTypes;
						if (!contextTypes) return emptyContextObject;
						var context = {};
						for (var key in contextTypes) context[key] = unmaskedContext[key];
						{
							var name = getComponentNameFromType(type) || 'Unknown';
							checkPropTypes(contextTypes, context, 'context', name);
						}
						return context;
					}
				}
				function processChildContext(instance, type, parentContext, childContextTypes) {
					{
						if (typeof instance.getChildContext !== 'function') {
							{
								var componentName = getComponentNameFromType(type) || 'Unknown';
								if (!warnedAboutMissingGetChildContext[componentName]) {
									warnedAboutMissingGetChildContext[componentName] = true;
									error(
										'%s.childContextTypes is specified but there is no getChildContext() method on the instance. You can either define getChildContext() on %s or remove childContextTypes from it.',
										componentName,
										componentName
									);
								}
							}
							return parentContext;
						}
						var childContext = instance.getChildContext();
						for (var contextKey in childContext)
							if (!(contextKey in childContextTypes))
								throw new Error(
									(getComponentNameFromType(type) || 'Unknown') +
										'.getChildContext(): key "' +
										contextKey +
										'" is not defined in childContextTypes.'
								);
						{
							var name = getComponentNameFromType(type) || 'Unknown';
							checkPropTypes(childContextTypes, childContext, 'child context', name);
						}
						return assign({}, parentContext, childContext);
					}
				}
				var rendererSigil;
				rendererSigil = {};
				var rootContextSnapshot = null;
				var currentActiveSnapshot = null;
				function popNode(prev) {
					prev.context._currentValue = prev.parentValue;
				}
				function pushNode(next) {
					next.context._currentValue = next.value;
				}
				function popToNearestCommonAncestor(prev, next) {
					if (prev === next);
					else {
						popNode(prev);
						var parentPrev = prev.parent;
						var parentNext = next.parent;
						if (parentPrev === null) {
							if (parentNext !== null)
								throw new Error(
									'The stacks must reach the root at the same time. This is a bug in React.'
								);
						} else {
							if (parentNext === null)
								throw new Error(
									'The stacks must reach the root at the same time. This is a bug in React.'
								);
							popToNearestCommonAncestor(parentPrev, parentNext);
						}
						pushNode(next);
					}
				}
				function popAllPrevious(prev) {
					popNode(prev);
					var parentPrev = prev.parent;
					if (parentPrev !== null) popAllPrevious(parentPrev);
				}
				function pushAllNext(next) {
					var parentNext = next.parent;
					if (parentNext !== null) pushAllNext(parentNext);
					pushNode(next);
				}
				function popPreviousToCommonLevel(prev, next) {
					popNode(prev);
					var parentPrev = prev.parent;
					if (parentPrev === null)
						throw new Error(
							'The depth must equal at least at zero before reaching the root. This is a bug in React.'
						);
					if (parentPrev.depth === next.depth) popToNearestCommonAncestor(parentPrev, next);
					else popPreviousToCommonLevel(parentPrev, next);
				}
				function popNextToCommonLevel(prev, next) {
					var parentNext = next.parent;
					if (parentNext === null)
						throw new Error(
							'The depth must equal at least at zero before reaching the root. This is a bug in React.'
						);
					if (prev.depth === parentNext.depth) popToNearestCommonAncestor(prev, parentNext);
					else popNextToCommonLevel(prev, parentNext);
					pushNode(next);
				}
				function switchContext(newSnapshot) {
					var prev = currentActiveSnapshot;
					var next = newSnapshot;
					if (prev !== next) {
						if (prev === null) pushAllNext(next);
						else if (next === null) popAllPrevious(prev);
						else if (prev.depth === next.depth) popToNearestCommonAncestor(prev, next);
						else if (prev.depth > next.depth) popPreviousToCommonLevel(prev, next);
						else popNextToCommonLevel(prev, next);
						currentActiveSnapshot = next;
					}
				}
				function pushProvider(context, nextValue) {
					var prevValue;
					{
						prevValue = context._currentValue;
						context._currentValue = nextValue;
						{
							if (
								context._currentRenderer !== undefined &&
								context._currentRenderer !== null &&
								context._currentRenderer !== rendererSigil
							)
								error(
									'Detected multiple renderers concurrently rendering the same context provider. This is currently unsupported.'
								);
							context._currentRenderer = rendererSigil;
						}
					}
					var prevNode = currentActiveSnapshot;
					var newNode = {
						parent: prevNode,
						depth: prevNode === null ? 0 : prevNode.depth + 1,
						context,
						parentValue: prevValue,
						value: nextValue,
					};
					currentActiveSnapshot = newNode;
					return newNode;
				}
				function popProvider(context) {
					var prevSnapshot = currentActiveSnapshot;
					if (prevSnapshot === null)
						throw new Error('Tried to pop a Context at the root of the app. This is a bug in React.');
					if (prevSnapshot.context !== context)
						error('The parent context is not the expected context. This is probably a bug in React.');
					{
						var value = prevSnapshot.parentValue;
						if (value === REACT_SERVER_CONTEXT_DEFAULT_VALUE_NOT_LOADED)
							prevSnapshot.context._currentValue = prevSnapshot.context._defaultValue;
						else prevSnapshot.context._currentValue = value;
						{
							if (
								context._currentRenderer !== undefined &&
								context._currentRenderer !== null &&
								context._currentRenderer !== rendererSigil
							)
								error(
									'Detected multiple renderers concurrently rendering the same context provider. This is currently unsupported.'
								);
							context._currentRenderer = rendererSigil;
						}
					}
					return (currentActiveSnapshot = prevSnapshot.parent);
				}
				function getActiveContext() {
					return currentActiveSnapshot;
				}
				function readContext(context) {
					var value = context._currentValue;
					return value;
				}
				function get(key) {
					return key._reactInternals;
				}
				function set(key, value) {
					key._reactInternals = value;
				}
				var didWarnAboutNoopUpdateForComponent = {};
				var didWarnAboutDeprecatedWillMount = {};
				var didWarnAboutUninitializedState;
				var didWarnAboutGetSnapshotBeforeUpdateWithoutDidUpdate;
				var didWarnAboutLegacyLifecyclesAndDerivedState;
				var didWarnAboutUndefinedDerivedState;
				var warnOnUndefinedDerivedState;
				var warnOnInvalidCallback;
				var didWarnAboutDirectlyAssigningPropsToState;
				var didWarnAboutContextTypeAndContextTypes;
				var didWarnAboutInvalidateContextType;
				{
					didWarnAboutUninitializedState = new Set();
					didWarnAboutGetSnapshotBeforeUpdateWithoutDidUpdate = new Set();
					didWarnAboutLegacyLifecyclesAndDerivedState = new Set();
					didWarnAboutDirectlyAssigningPropsToState = new Set();
					didWarnAboutUndefinedDerivedState = new Set();
					didWarnAboutContextTypeAndContextTypes = new Set();
					didWarnAboutInvalidateContextType = new Set();
					var didWarnOnInvalidCallback = new Set();
					warnOnInvalidCallback = function (callback, callerName) {
						if (callback === null || typeof callback === 'function') return;
						var key = callerName + '_' + callback;
						if (!didWarnOnInvalidCallback.has(key)) {
							didWarnOnInvalidCallback.add(key);
							error(
								'%s(...): Expected the last optional `callback` argument to be a function. Instead received: %s.',
								callerName,
								callback
							);
						}
					};
					warnOnUndefinedDerivedState = function (type, partialState) {
						if (partialState === undefined) {
							var componentName = getComponentNameFromType(type) || 'Component';
							if (!didWarnAboutUndefinedDerivedState.has(componentName)) {
								didWarnAboutUndefinedDerivedState.add(componentName);
								error(
									'%s.getDerivedStateFromProps(): A valid state object (or null) must be returned. You have returned undefined.',
									componentName
								);
							}
						}
					};
				}
				function warnNoop(publicInstance, callerName) {
					{
						var _constructor = publicInstance.constructor;
						var componentName = (_constructor && getComponentNameFromType(_constructor)) || 'ReactClass';
						var warningKey = componentName + '.' + callerName;
						if (didWarnAboutNoopUpdateForComponent[warningKey]) return;
						error(
							'%s(...): Can only update a mounting component. This usually means you called %s() outside componentWillMount() on the server. This is a no-op.\n\nPlease check the code for the %s component.',
							callerName,
							callerName,
							componentName
						);
						didWarnAboutNoopUpdateForComponent[warningKey] = true;
					}
				}
				var classComponentUpdater = {
					isMounted: function (inst) {
						return false;
					},
					enqueueSetState: function (inst, payload, callback) {
						var internals = get(inst);
						if (internals.queue === null) warnNoop(inst, 'setState');
						else {
							internals.queue.push(payload);
							if (callback !== undefined && callback !== null)
								warnOnInvalidCallback(callback, 'setState');
						}
					},
					enqueueReplaceState: function (inst, payload, callback) {
						var internals = get(inst);
						internals.replace = true;
						internals.queue = [payload];
						if (callback !== undefined && callback !== null) warnOnInvalidCallback(callback, 'setState');
					},
					enqueueForceUpdate: function (inst, callback) {
						var internals = get(inst);
						if (internals.queue === null) warnNoop(inst, 'forceUpdate');
						else if (callback !== undefined && callback !== null)
							warnOnInvalidCallback(callback, 'setState');
					},
				};
				function applyDerivedStateFromProps(instance, ctor, getDerivedStateFromProps, prevState, nextProps) {
					var partialState = getDerivedStateFromProps(nextProps, prevState);
					warnOnUndefinedDerivedState(ctor, partialState);
					var newState =
						partialState === null || partialState === undefined
							? prevState
							: assign({}, prevState, partialState);
					return newState;
				}
				function constructClassInstance(ctor, props, maskedLegacyContext) {
					var context = emptyContextObject;
					var contextType = ctor.contextType;
					if ('contextType' in ctor) {
						var isValid =
							contextType === null ||
							(contextType !== undefined &&
								contextType.$$typeof === REACT_CONTEXT_TYPE &&
								contextType._context === undefined);
						if (!isValid && !didWarnAboutInvalidateContextType.has(ctor)) {
							didWarnAboutInvalidateContextType.add(ctor);
							var addendum = '';
							if (contextType === undefined)
								addendum =
									' However, it is set to undefined. This can be caused by a typo or by mixing up named and default imports. This can also happen due to a circular dependency, so try moving the createContext() call to a separate file.';
							else if (typeof contextType !== 'object')
								addendum = ' However, it is set to a ' + typeof contextType + '.';
							else if (contextType.$$typeof === REACT_PROVIDER_TYPE)
								addendum = ' Did you accidentally pass the Context.Provider instead?';
							else if (contextType._context !== undefined)
								addendum = ' Did you accidentally pass the Context.Consumer instead?';
							else
								addendum =
									' However, it is set to an object with keys {' +
									Object.keys(contextType).join(', ') +
									'}.';
							error(
								'%s defines an invalid contextType. contextType should point to the Context object returned by React.createContext().%s',
								getComponentNameFromType(ctor) || 'Component',
								addendum
							);
						}
					}
					if (typeof contextType === 'object' && contextType !== null) context = readContext(contextType);
					else context = maskedLegacyContext;
					var instance = new ctor(props, context);
					{
						if (
							typeof ctor.getDerivedStateFromProps === 'function' &&
							(instance.state === null || instance.state === undefined)
						) {
							var componentName = getComponentNameFromType(ctor) || 'Component';
							if (!didWarnAboutUninitializedState.has(componentName)) {
								didWarnAboutUninitializedState.add(componentName);
								error(
									'`%s` uses `getDerivedStateFromProps` but its initial state is %s. This is not recommended. Instead, define the initial state by assigning an object to `this.state` in the constructor of `%s`. This ensures that `getDerivedStateFromProps` arguments have a consistent shape.',
									componentName,
									instance.state === null ? 'null' : 'undefined',
									componentName
								);
							}
						}
						if (
							typeof ctor.getDerivedStateFromProps === 'function' ||
							typeof instance.getSnapshotBeforeUpdate === 'function'
						) {
							var foundWillMountName = null;
							var foundWillReceivePropsName = null;
							var foundWillUpdateName = null;
							if (
								typeof instance.componentWillMount === 'function' &&
								instance.componentWillMount.__suppressDeprecationWarning !== true
							)
								foundWillMountName = 'componentWillMount';
							else if (typeof instance.UNSAFE_componentWillMount === 'function')
								foundWillMountName = 'UNSAFE_componentWillMount';
							if (
								typeof instance.componentWillReceiveProps === 'function' &&
								instance.componentWillReceiveProps.__suppressDeprecationWarning !== true
							)
								foundWillReceivePropsName = 'componentWillReceiveProps';
							else if (typeof instance.UNSAFE_componentWillReceiveProps === 'function')
								foundWillReceivePropsName = 'UNSAFE_componentWillReceiveProps';
							if (
								typeof instance.componentWillUpdate === 'function' &&
								instance.componentWillUpdate.__suppressDeprecationWarning !== true
							)
								foundWillUpdateName = 'componentWillUpdate';
							else if (typeof instance.UNSAFE_componentWillUpdate === 'function')
								foundWillUpdateName = 'UNSAFE_componentWillUpdate';
							if (
								foundWillMountName !== null ||
								foundWillReceivePropsName !== null ||
								foundWillUpdateName !== null
							) {
								var _componentName = getComponentNameFromType(ctor) || 'Component';
								var newApiName =
									typeof ctor.getDerivedStateFromProps === 'function'
										? 'getDerivedStateFromProps()'
										: 'getSnapshotBeforeUpdate()';
								if (!didWarnAboutLegacyLifecyclesAndDerivedState.has(_componentName)) {
									didWarnAboutLegacyLifecyclesAndDerivedState.add(_componentName);
									error(
										'Unsafe legacy lifecycles will not be called for components using new component APIs.\n\n%s uses %s but also contains the following legacy lifecycles:%s%s%s\n\nThe above lifecycles should be removed. Learn more about this warning here:\nhttps://reactjs.org/link/unsafe-component-lifecycles',
										_componentName,
										newApiName,
										foundWillMountName !== null ? '\n  ' + foundWillMountName : '',
										foundWillReceivePropsName !== null ? '\n  ' + foundWillReceivePropsName : '',
										foundWillUpdateName !== null ? '\n  ' + foundWillUpdateName : ''
									);
								}
							}
						}
					}
					return instance;
				}
				function checkClassInstance(instance, ctor, newProps) {
					{
						var name = getComponentNameFromType(ctor) || 'Component';
						var renderPresent = instance.render;
						if (!renderPresent)
							if (ctor.prototype && typeof ctor.prototype.render === 'function')
								error(
									'%s(...): No `render` method found on the returned component instance: did you accidentally return an object from the constructor?',
									name
								);
							else
								error(
									'%s(...): No `render` method found on the returned component instance: you may have forgotten to define `render`.',
									name
								);
						if (
							instance.getInitialState &&
							!instance.getInitialState.isReactClassApproved &&
							!instance.state
						)
							error(
								'getInitialState was defined on %s, a plain JavaScript class. This is only supported for classes created using React.createClass. Did you mean to define a state property instead?',
								name
							);
						if (instance.getDefaultProps && !instance.getDefaultProps.isReactClassApproved)
							error(
								'getDefaultProps was defined on %s, a plain JavaScript class. This is only supported for classes created using React.createClass. Use a static property to define defaultProps instead.',
								name
							);
						if (instance.propTypes)
							error(
								'propTypes was defined as an instance property on %s. Use a static property to define propTypes instead.',
								name
							);
						if (instance.contextType)
							error(
								'contextType was defined as an instance property on %s. Use a static property to define contextType instead.',
								name
							);
						{
							if (instance.contextTypes)
								error(
									'contextTypes was defined as an instance property on %s. Use a static property to define contextTypes instead.',
									name
								);
							if (
								ctor.contextType &&
								ctor.contextTypes &&
								!didWarnAboutContextTypeAndContextTypes.has(ctor)
							) {
								didWarnAboutContextTypeAndContextTypes.add(ctor);
								error(
									'%s declares both contextTypes and contextType static properties. The legacy contextTypes property will be ignored.',
									name
								);
							}
						}
						if (typeof instance.componentShouldUpdate === 'function')
							error(
								'%s has a method called componentShouldUpdate(). Did you mean shouldComponentUpdate()? The name is phrased as a question because the function is expected to return a value.',
								name
							);
						if (
							ctor.prototype &&
							ctor.prototype.isPureReactComponent &&
							typeof instance.shouldComponentUpdate !== 'undefined'
						)
							error(
								'%s has a method called shouldComponentUpdate(). shouldComponentUpdate should not be used when extending React.PureComponent. Please extend React.Component if shouldComponentUpdate is used.',
								getComponentNameFromType(ctor) || 'A pure component'
							);
						if (typeof instance.componentDidUnmount === 'function')
							error(
								'%s has a method called componentDidUnmount(). But there is no such lifecycle method. Did you mean componentWillUnmount()?',
								name
							);
						if (typeof instance.componentDidReceiveProps === 'function')
							error(
								'%s has a method called componentDidReceiveProps(). But there is no such lifecycle method. If you meant to update the state in response to changing props, use componentWillReceiveProps(). If you meant to fetch data or run side-effects or mutations after React has updated the UI, use componentDidUpdate().',
								name
							);
						if (typeof instance.componentWillRecieveProps === 'function')
							error(
								'%s has a method called componentWillRecieveProps(). Did you mean componentWillReceiveProps()?',
								name
							);
						if (typeof instance.UNSAFE_componentWillRecieveProps === 'function')
							error(
								'%s has a method called UNSAFE_componentWillRecieveProps(). Did you mean UNSAFE_componentWillReceiveProps()?',
								name
							);
						var hasMutatedProps = instance.props !== newProps;
						if (instance.props !== undefined && hasMutatedProps)
							error(
								"%s(...): When calling super() in `%s`, make sure to pass up the same props that your component's constructor was passed.",
								name,
								name
							);
						if (instance.defaultProps)
							error(
								'Setting defaultProps as an instance property on %s is not supported and will be ignored. Instead, define defaultProps as a static property on %s.',
								name,
								name
							);
						if (
							typeof instance.getSnapshotBeforeUpdate === 'function' &&
							typeof instance.componentDidUpdate !== 'function' &&
							!didWarnAboutGetSnapshotBeforeUpdateWithoutDidUpdate.has(ctor)
						) {
							didWarnAboutGetSnapshotBeforeUpdateWithoutDidUpdate.add(ctor);
							error(
								'%s: getSnapshotBeforeUpdate() should be used with componentDidUpdate(). This component defines getSnapshotBeforeUpdate() only.',
								getComponentNameFromType(ctor)
							);
						}
						if (typeof instance.getDerivedStateFromProps === 'function')
							error(
								'%s: getDerivedStateFromProps() is defined as an instance method and will be ignored. Instead, declare it as a static method.',
								name
							);
						if (typeof instance.getDerivedStateFromError === 'function')
							error(
								'%s: getDerivedStateFromError() is defined as an instance method and will be ignored. Instead, declare it as a static method.',
								name
							);
						if (typeof ctor.getSnapshotBeforeUpdate === 'function')
							error(
								'%s: getSnapshotBeforeUpdate() is defined as a static method and will be ignored. Instead, declare it as an instance method.',
								name
							);
						var _state = instance.state;
						if (_state && (typeof _state !== 'object' || isArray(_state)))
							error('%s.state: must be set to an object or null', name);
						if (
							typeof instance.getChildContext === 'function' &&
							typeof ctor.childContextTypes !== 'object'
						)
							error(
								'%s.getChildContext(): childContextTypes must be defined in order to use getChildContext().',
								name
							);
					}
				}
				function callComponentWillMount(type, instance) {
					var oldState = instance.state;
					if (typeof instance.componentWillMount === 'function') {
						if (instance.componentWillMount.__suppressDeprecationWarning !== true) {
							var componentName = getComponentNameFromType(type) || 'Unknown';
							if (!didWarnAboutDeprecatedWillMount[componentName]) {
								warn(
									'componentWillMount has been renamed, and is not recommended for use. See https://reactjs.org/link/unsafe-component-lifecycles for details.\n\n* Move code from componentWillMount to componentDidMount (preferred in most cases) or the constructor.\n\nPlease update the following components: %s',
									componentName
								);
								didWarnAboutDeprecatedWillMount[componentName] = true;
							}
						}
						instance.componentWillMount();
					}
					if (typeof instance.UNSAFE_componentWillMount === 'function') instance.UNSAFE_componentWillMount();
					if (oldState !== instance.state) {
						error(
							"%s.componentWillMount(): Assigning directly to this.state is deprecated (except inside a component's constructor). Use setState instead.",
							getComponentNameFromType(type) || 'Component'
						);
						classComponentUpdater.enqueueReplaceState(instance, instance.state, null);
					}
				}
				function processUpdateQueue(internalInstance, inst, props, maskedLegacyContext) {
					if (internalInstance.queue !== null && internalInstance.queue.length > 0) {
						var oldQueue = internalInstance.queue;
						var oldReplace = internalInstance.replace;
						internalInstance.queue = null;
						internalInstance.replace = false;
						if (oldReplace && oldQueue.length === 1) inst.state = oldQueue[0];
						else {
							var nextState = oldReplace ? oldQueue[0] : inst.state;
							var dontMutate = true;
							for (var i = oldReplace ? 1 : 0; i < oldQueue.length; i++) {
								var partial = oldQueue[i];
								var partialState =
									typeof partial === 'function'
										? partial.call(inst, nextState, props, maskedLegacyContext)
										: partial;
								if (partialState != null)
									if (dontMutate) {
										dontMutate = false;
										nextState = assign({}, nextState, partialState);
									} else assign(nextState, partialState);
							}
							inst.state = nextState;
						}
					} else internalInstance.queue = null;
				}
				function mountClassInstance(instance, ctor, newProps, maskedLegacyContext) {
					checkClassInstance(instance, ctor, newProps);
					var initialState = instance.state !== undefined ? instance.state : null;
					instance.updater = classComponentUpdater;
					instance.props = newProps;
					instance.state = initialState;
					var internalInstance = {
						queue: [],
						replace: false,
					};
					set(instance, internalInstance);
					var contextType = ctor.contextType;
					if (typeof contextType === 'object' && contextType !== null)
						instance.context = readContext(contextType);
					else instance.context = maskedLegacyContext;
					if (instance.state === newProps) {
						var componentName = getComponentNameFromType(ctor) || 'Component';
						if (!didWarnAboutDirectlyAssigningPropsToState.has(componentName)) {
							didWarnAboutDirectlyAssigningPropsToState.add(componentName);
							error(
								"%s: It is not recommended to assign props directly to state because updates to props won't be reflected in state. In most cases, it is better to use props directly.",
								componentName
							);
						}
					}
					var getDerivedStateFromProps = ctor.getDerivedStateFromProps;
					if (typeof getDerivedStateFromProps === 'function')
						instance.state = applyDerivedStateFromProps(
							instance,
							ctor,
							getDerivedStateFromProps,
							initialState,
							newProps
						);
					if (
						typeof ctor.getDerivedStateFromProps !== 'function' &&
						typeof instance.getSnapshotBeforeUpdate !== 'function' &&
						(typeof instance.UNSAFE_componentWillMount === 'function' ||
							typeof instance.componentWillMount === 'function')
					) {
						callComponentWillMount(ctor, instance);
						processUpdateQueue(internalInstance, instance, newProps, maskedLegacyContext);
					}
				}
				var emptyTreeContext = {
					id: 1,
					overflow: '',
				};
				function getTreeId(context) {
					var overflow = context.overflow;
					var idWithLeadingBit = context.id;
					var id = idWithLeadingBit & ~getLeadingBit(idWithLeadingBit);
					return id.toString(32) + overflow;
				}
				function pushTreeContext(baseContext, totalChildren, index) {
					var baseIdWithLeadingBit = baseContext.id;
					var baseOverflow = baseContext.overflow;
					var baseLength = getBitLength(baseIdWithLeadingBit) - 1;
					var baseId = baseIdWithLeadingBit & ~(1 << baseLength);
					var slot = index + 1;
					var length = getBitLength(totalChildren) + baseLength;
					if (length > 30) {
						var numberOfOverflowBits = baseLength - (baseLength % 5);
						var newOverflowBits = (1 << numberOfOverflowBits) - 1;
						var newOverflow = (baseId & newOverflowBits).toString(32);
						var restOfBaseId = baseId >> numberOfOverflowBits;
						var restOfBaseLength = baseLength - numberOfOverflowBits;
						var restOfLength = getBitLength(totalChildren) + restOfBaseLength;
						var restOfNewBits = slot << restOfBaseLength;
						var id = restOfNewBits | restOfBaseId;
						var overflow = newOverflow + baseOverflow;
						return {
							id: (1 << restOfLength) | id,
							overflow,
						};
					} else {
						var newBits = slot << baseLength;
						var _id = newBits | baseId;
						var _overflow = baseOverflow;
						return {
							id: (1 << length) | _id,
							overflow: _overflow,
						};
					}
				}
				function getBitLength(number) {
					return 32 - clz32(number);
				}
				function getLeadingBit(id) {
					return 1 << (getBitLength(id) - 1);
				}
				var clz32 = Math.clz32 ? Math.clz32 : clz32Fallback;
				var log = Math.log;
				var LN2 = Math.LN2;
				function clz32Fallback(x) {
					var asUint = x >>> 0;
					if (asUint === 0) return 32;
					return (31 - ((log(asUint) / LN2) | 0)) | 0;
				}
				function is(x, y) {
					return (x === y && (x !== 0 || 1 / x === 1 / y)) || (x !== x && y !== y);
				}
				var objectIs = typeof Object.is === 'function' ? Object.is : is;
				var currentlyRenderingComponent = null;
				var currentlyRenderingTask = null;
				var firstWorkInProgressHook = null;
				var workInProgressHook = null;
				var isReRender = false;
				var didScheduleRenderPhaseUpdate = false;
				var localIdCounter = 0;
				var renderPhaseUpdates = null;
				var numberOfReRenders = 0;
				var RE_RENDER_LIMIT = 25;
				var isInHookUserCodeInDev = false;
				var currentHookNameInDev;
				function resolveCurrentlyRenderingComponent() {
					if (currentlyRenderingComponent === null)
						throw new Error(
							'Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:\n1. You might have mismatching versions of React and the renderer (such as React DOM)\n2. You might be breaking the Rules of Hooks\n3. You might have more than one copy of React in the same app\nSee https://reactjs.org/link/invalid-hook-call for tips about how to debug and fix this problem.'
						);
					if (isInHookUserCodeInDev)
						error(
							'Do not call Hooks inside useEffect(...), useMemo(...), or other built-in Hooks. You can only call Hooks at the top level of your React function. For more information, see https://reactjs.org/link/rules-of-hooks'
						);
					return currentlyRenderingComponent;
				}
				function areHookInputsEqual(nextDeps, prevDeps) {
					if (prevDeps === null) {
						error(
							'%s received a final argument during this render, but not during the previous render. Even though the final argument is optional, its type cannot change between renders.',
							currentHookNameInDev
						);
						return false;
					}
					if (nextDeps.length !== prevDeps.length)
						error(
							'The final argument passed to %s changed size between renders. The order and size of this array must remain constant.\n\nPrevious: %s\nIncoming: %s',
							currentHookNameInDev,
							'[' + nextDeps.join(', ') + ']',
							'[' + prevDeps.join(', ') + ']'
						);
					for (var i = 0; i < prevDeps.length && i < nextDeps.length; i++) {
						if (objectIs(nextDeps[i], prevDeps[i])) continue;
						return false;
					}
					return true;
				}
				function createHook() {
					if (numberOfReRenders > 0) throw new Error('Rendered more hooks than during the previous render');
					return {
						memoizedState: null,
						queue: null,
						next: null,
					};
				}
				function createWorkInProgressHook() {
					if (workInProgressHook === null)
						if (firstWorkInProgressHook === null) {
							isReRender = false;
							firstWorkInProgressHook = workInProgressHook = createHook();
						} else {
							isReRender = true;
							workInProgressHook = firstWorkInProgressHook;
						}
					else if (workInProgressHook.next === null) {
						isReRender = false;
						workInProgressHook = workInProgressHook.next = createHook();
					} else {
						isReRender = true;
						workInProgressHook = workInProgressHook.next;
					}
					return workInProgressHook;
				}
				function prepareToUseHooks(task, componentIdentity) {
					currentlyRenderingComponent = componentIdentity;
					currentlyRenderingTask = task;
					isInHookUserCodeInDev = false;
					localIdCounter = 0;
				}
				function finishHooks(Component, props, children, refOrContext) {
					while (didScheduleRenderPhaseUpdate) {
						didScheduleRenderPhaseUpdate = false;
						localIdCounter = 0;
						numberOfReRenders += 1;
						workInProgressHook = null;
						children = Component(props, refOrContext);
					}
					resetHooksState();
					return children;
				}
				function checkDidRenderIdHook() {
					var didRenderIdHook = localIdCounter !== 0;
					return didRenderIdHook;
				}
				function resetHooksState() {
					isInHookUserCodeInDev = false;
					currentlyRenderingComponent = null;
					currentlyRenderingTask = null;
					didScheduleRenderPhaseUpdate = false;
					firstWorkInProgressHook = null;
					numberOfReRenders = 0;
					renderPhaseUpdates = null;
					workInProgressHook = null;
				}
				function readContext$1(context) {
					if (isInHookUserCodeInDev)
						error(
							'Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo().'
						);
					return readContext(context);
				}
				function useContext(context) {
					currentHookNameInDev = 'useContext';
					resolveCurrentlyRenderingComponent();
					return readContext(context);
				}
				function basicStateReducer(state, action) {
					return typeof action === 'function' ? action(state) : action;
				}
				function useState(initialState) {
					currentHookNameInDev = 'useState';
					return useReducer(basicStateReducer, initialState);
				}
				function useReducer(reducer, initialArg, init) {
					if (reducer !== basicStateReducer) currentHookNameInDev = 'useReducer';
					currentlyRenderingComponent = resolveCurrentlyRenderingComponent();
					workInProgressHook = createWorkInProgressHook();
					if (isReRender) {
						var queue = workInProgressHook.queue;
						var dispatch = queue.dispatch;
						if (renderPhaseUpdates !== null) {
							var firstRenderPhaseUpdate = renderPhaseUpdates.get(queue);
							if (firstRenderPhaseUpdate !== undefined) {
								renderPhaseUpdates.delete(queue);
								var newState = workInProgressHook.memoizedState;
								var update = firstRenderPhaseUpdate;
								do {
									var action = update.action;
									isInHookUserCodeInDev = true;
									newState = reducer(newState, action);
									isInHookUserCodeInDev = false;
									update = update.next;
								} while (update !== null);
								workInProgressHook.memoizedState = newState;
								return [newState, dispatch];
							}
						}
						return [workInProgressHook.memoizedState, dispatch];
					} else {
						isInHookUserCodeInDev = true;
						var initialState;
						if (reducer === basicStateReducer)
							initialState = typeof initialArg === 'function' ? initialArg() : initialArg;
						else initialState = init !== undefined ? init(initialArg) : initialArg;
						isInHookUserCodeInDev = false;
						workInProgressHook.memoizedState = initialState;
						var _queue = (workInProgressHook.queue = {
							last: null,
							dispatch: null,
						});
						var _dispatch = (_queue.dispatch = dispatchAction.bind(
							null,
							currentlyRenderingComponent,
							_queue
						));
						return [workInProgressHook.memoizedState, _dispatch];
					}
				}
				function useMemo(nextCreate, deps) {
					currentlyRenderingComponent = resolveCurrentlyRenderingComponent();
					workInProgressHook = createWorkInProgressHook();
					var nextDeps = deps === undefined ? null : deps;
					if (workInProgressHook !== null) {
						var prevState = workInProgressHook.memoizedState;
						if (prevState !== null) {
							if (nextDeps !== null) {
								var prevDeps = prevState[1];
								if (areHookInputsEqual(nextDeps, prevDeps)) return prevState[0];
							}
						}
					}
					isInHookUserCodeInDev = true;
					var nextValue = nextCreate();
					isInHookUserCodeInDev = false;
					workInProgressHook.memoizedState = [nextValue, nextDeps];
					return nextValue;
				}
				function useRef(initialValue) {
					currentlyRenderingComponent = resolveCurrentlyRenderingComponent();
					workInProgressHook = createWorkInProgressHook();
					var previousRef = workInProgressHook.memoizedState;
					if (previousRef === null) {
						var ref = {
							current: initialValue,
						};
						Object.seal(ref);
						workInProgressHook.memoizedState = ref;
						return ref;
					} else return previousRef;
				}
				function useLayoutEffect(create, inputs) {
					{
						currentHookNameInDev = 'useLayoutEffect';
						error(
							"useLayoutEffect does nothing on the server, because its effect cannot be encoded into the server renderer's output format. This will lead to a mismatch between the initial, non-hydrated UI and the intended UI. To avoid this, useLayoutEffect should only be used in components that render exclusively on the client. See https://reactjs.org/link/uselayouteffect-ssr for common fixes."
						);
					}
				}
				function dispatchAction(componentIdentity, queue, action) {
					if (numberOfReRenders >= RE_RENDER_LIMIT)
						throw new Error(
							'Too many re-renders. React limits the number of renders to prevent an infinite loop.'
						);
					if (componentIdentity === currentlyRenderingComponent) {
						didScheduleRenderPhaseUpdate = true;
						var update = {
							action,
							next: null,
						};
						if (renderPhaseUpdates === null) renderPhaseUpdates = new Map();
						var firstRenderPhaseUpdate = renderPhaseUpdates.get(queue);
						if (firstRenderPhaseUpdate === undefined) renderPhaseUpdates.set(queue, update);
						else {
							var lastRenderPhaseUpdate = firstRenderPhaseUpdate;
							while (lastRenderPhaseUpdate.next !== null)
								lastRenderPhaseUpdate = lastRenderPhaseUpdate.next;
							lastRenderPhaseUpdate.next = update;
						}
					}
				}
				function useCallback(callback, deps) {
					return useMemo(function () {
						return callback;
					}, deps);
				}
				function useMutableSource(source, getSnapshot, subscribe) {
					resolveCurrentlyRenderingComponent();
					return getSnapshot(source._source);
				}
				function useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot) {
					if (getServerSnapshot === undefined)
						throw new Error(
							'Missing getServerSnapshot, which is required for server-rendered content. Will revert to client rendering.'
						);
					return getServerSnapshot();
				}
				function useDeferredValue(value) {
					resolveCurrentlyRenderingComponent();
					return value;
				}
				function unsupportedStartTransition() {
					throw new Error('startTransition cannot be called during server rendering.');
				}
				function useTransition() {
					resolveCurrentlyRenderingComponent();
					return [false, unsupportedStartTransition];
				}
				function useId() {
					var task = currentlyRenderingTask;
					var treeId = getTreeId(task.treeContext);
					var responseState = currentResponseState;
					if (responseState === null)
						throw new Error(
							'Invalid hook call. Hooks can only be called inside of the body of a function component.'
						);
					var localId = localIdCounter++;
					return makeId(responseState, treeId, localId);
				}
				function noop() {}
				var Dispatcher = {
					readContext: readContext$1,
					useContext,
					useMemo,
					useReducer,
					useRef,
					useState,
					useInsertionEffect: noop,
					useLayoutEffect,
					useCallback,
					useImperativeHandle: noop,
					useEffect: noop,
					useDebugValue: noop,
					useDeferredValue,
					useTransition,
					useId,
					useMutableSource,
					useSyncExternalStore,
				};
				var currentResponseState = null;
				function setCurrentResponseState(responseState) {
					currentResponseState = responseState;
				}
				function getStackByComponentStackNode(componentStack) {
					try {
						var info = '';
						var node = componentStack;
						do {
							switch (node.tag) {
								case 0:
									info += describeBuiltInComponentFrame(node.type, null, null);
									break;
								case 1:
									info += describeFunctionComponentFrame(node.type, null, null);
									break;
								case 2:
									info += describeClassComponentFrame(node.type, null, null);
									break;
							}
							node = node.parent;
						} while (node);
						return info;
					} catch (x) {
						return '\nError generating stack: ' + x.message + '\n' + x.stack;
					}
				}
				var ReactCurrentDispatcher$1 = ReactSharedInternals.ReactCurrentDispatcher;
				var ReactDebugCurrentFrame$1 = ReactSharedInternals.ReactDebugCurrentFrame;
				var PENDING = 0;
				var COMPLETED = 1;
				var FLUSHED = 2;
				var ABORTED = 3;
				var ERRORED = 4;
				var OPEN = 0;
				var CLOSING = 1;
				var CLOSED = 2;
				var DEFAULT_PROGRESSIVE_CHUNK_SIZE = 12800;
				function defaultErrorHandler(error) {
					console['error'](error);
					return null;
				}
				function noop$1() {}
				function createRequest(
					children,
					responseState,
					rootFormatContext,
					progressiveChunkSize,
					onError,
					onAllReady,
					onShellReady,
					onShellError,
					onFatalError
				) {
					var pingedTasks = [];
					var abortSet = new Set();
					var request = {
						destination: null,
						responseState,
						progressiveChunkSize:
							progressiveChunkSize === undefined ? DEFAULT_PROGRESSIVE_CHUNK_SIZE : progressiveChunkSize,
						status: OPEN,
						fatalError: null,
						nextSegmentId: 0,
						allPendingTasks: 0,
						pendingRootTasks: 0,
						completedRootSegment: null,
						abortableTasks: abortSet,
						pingedTasks,
						clientRenderedBoundaries: [],
						completedBoundaries: [],
						partialBoundaries: [],
						onError: onError === undefined ? defaultErrorHandler : onError,
						onAllReady: onAllReady === undefined ? noop$1 : onAllReady,
						onShellReady: onShellReady === undefined ? noop$1 : onShellReady,
						onShellError: onShellError === undefined ? noop$1 : onShellError,
						onFatalError: onFatalError === undefined ? noop$1 : onFatalError,
					};
					var rootSegment = createPendingSegment(request, 0, null, rootFormatContext, false, false);
					rootSegment.parentFlushed = true;
					var rootTask = createTask(
						request,
						children,
						null,
						rootSegment,
						abortSet,
						emptyContextObject,
						rootContextSnapshot,
						emptyTreeContext
					);
					pingedTasks.push(rootTask);
					return request;
				}
				function pingTask(request, task) {
					var pingedTasks = request.pingedTasks;
					pingedTasks.push(task);
					if (pingedTasks.length === 1)
						scheduleWork(function () {
							return performWork(request);
						});
				}
				function createSuspenseBoundary(request, fallbackAbortableTasks) {
					return {
						id: UNINITIALIZED_SUSPENSE_BOUNDARY_ID,
						rootSegmentID: -1,
						parentFlushed: false,
						pendingTasks: 0,
						forceClientRender: false,
						completedSegments: [],
						byteSize: 0,
						fallbackAbortableTasks,
						errorDigest: null,
					};
				}
				function createTask(
					request,
					node,
					blockedBoundary,
					blockedSegment,
					abortSet,
					legacyContext,
					context,
					treeContext
				) {
					request.allPendingTasks++;
					if (blockedBoundary === null) request.pendingRootTasks++;
					else blockedBoundary.pendingTasks++;
					var task = {
						node,
						ping: function () {
							return pingTask(request, task);
						},
						blockedBoundary,
						blockedSegment,
						abortSet,
						legacyContext,
						context,
						treeContext,
					};
					task.componentStack = null;
					abortSet.add(task);
					return task;
				}
				function createPendingSegment(request, index, boundary, formatContext, lastPushedText, textEmbedded) {
					return {
						status: PENDING,
						id: -1,
						index,
						parentFlushed: false,
						chunks: [],
						children: [],
						formatContext,
						boundary,
						lastPushedText,
						textEmbedded,
					};
				}
				var currentTaskInDEV = null;
				function getCurrentStackInDEV() {
					{
						if (currentTaskInDEV === null || currentTaskInDEV.componentStack === null) return '';
						return getStackByComponentStackNode(currentTaskInDEV.componentStack);
					}
				}
				function pushBuiltInComponentStackInDEV(task, type) {
					task.componentStack = {
						tag: 0,
						parent: task.componentStack,
						type,
					};
				}
				function pushFunctionComponentStackInDEV(task, type) {
					task.componentStack = {
						tag: 1,
						parent: task.componentStack,
						type,
					};
				}
				function pushClassComponentStackInDEV(task, type) {
					task.componentStack = {
						tag: 2,
						parent: task.componentStack,
						type,
					};
				}
				function popComponentStackInDEV(task) {
					if (task.componentStack === null)
						error('Unexpectedly popped too many stack frames. This is a bug in React.');
					else task.componentStack = task.componentStack.parent;
				}
				var lastBoundaryErrorComponentStackDev = null;
				function captureBoundaryErrorDetailsDev(boundary, error) {
					{
						var errorMessage;
						if (typeof error === 'string') errorMessage = error;
						else if (error && typeof error.message === 'string') errorMessage = error.message;
						else errorMessage = String(error);
						var errorComponentStack = lastBoundaryErrorComponentStackDev || getCurrentStackInDEV();
						lastBoundaryErrorComponentStackDev = null;
						boundary.errorMessage = errorMessage;
						boundary.errorComponentStack = errorComponentStack;
					}
				}
				function logRecoverableError(request, error) {
					var errorDigest = request.onError(error);
					if (errorDigest != null && typeof errorDigest !== 'string')
						throw new Error(
							'onError returned something with a type other than "string". onError should return a string and may return null or undefined but must not return anything else. It received something of type "' +
								typeof errorDigest +
								'" instead'
						);
					return errorDigest;
				}
				function fatalError(request, error) {
					var onShellError = request.onShellError;
					onShellError(error);
					var onFatalError = request.onFatalError;
					onFatalError(error);
					if (request.destination !== null) {
						request.status = CLOSED;
						closeWithError(request.destination, error);
					} else {
						request.status = CLOSING;
						request.fatalError = error;
					}
				}
				function renderSuspenseBoundary(request, task, props) {
					pushBuiltInComponentStackInDEV(task, 'Suspense');
					var parentBoundary = task.blockedBoundary;
					var parentSegment = task.blockedSegment;
					var fallback = props.fallback;
					var content = props.children;
					var fallbackAbortSet = new Set();
					var newBoundary = createSuspenseBoundary(request, fallbackAbortSet);
					var insertionIndex = parentSegment.chunks.length;
					var boundarySegment = createPendingSegment(
						request,
						insertionIndex,
						newBoundary,
						parentSegment.formatContext,
						false,
						false
					);
					parentSegment.children.push(boundarySegment);
					parentSegment.lastPushedText = false;
					var contentRootSegment = createPendingSegment(
						request,
						0,
						null,
						parentSegment.formatContext,
						false,
						false
					);
					contentRootSegment.parentFlushed = true;
					task.blockedBoundary = newBoundary;
					task.blockedSegment = contentRootSegment;
					try {
						renderNode(request, task, content);
						pushSegmentFinale(
							contentRootSegment.chunks,
							request.responseState,
							contentRootSegment.lastPushedText,
							contentRootSegment.textEmbedded
						);
						contentRootSegment.status = COMPLETED;
						queueCompletedSegment(newBoundary, contentRootSegment);
						if (newBoundary.pendingTasks === 0) {
							popComponentStackInDEV(task);
							return;
						}
					} catch (error) {
						contentRootSegment.status = ERRORED;
						newBoundary.forceClientRender = true;
						newBoundary.errorDigest = logRecoverableError(request, error);
						captureBoundaryErrorDetailsDev(newBoundary, error);
					} finally {
						task.blockedBoundary = parentBoundary;
						task.blockedSegment = parentSegment;
					}
					var suspendedFallbackTask = createTask(
						request,
						fallback,
						parentBoundary,
						boundarySegment,
						fallbackAbortSet,
						task.legacyContext,
						task.context,
						task.treeContext
					);
					suspendedFallbackTask.componentStack = task.componentStack;
					request.pingedTasks.push(suspendedFallbackTask);
					popComponentStackInDEV(task);
				}
				function renderHostElement(request, task, type, props) {
					pushBuiltInComponentStackInDEV(task, type);
					var segment = task.blockedSegment;
					var children = pushStartInstance(
						segment.chunks,
						type,
						props,
						request.responseState,
						segment.formatContext
					);
					segment.lastPushedText = false;
					var prevContext = segment.formatContext;
					segment.formatContext = getChildFormatContext(prevContext, type, props);
					renderNode(request, task, children);
					segment.formatContext = prevContext;
					pushEndInstance(segment.chunks, type);
					segment.lastPushedText = false;
					popComponentStackInDEV(task);
				}
				function shouldConstruct$1(Component) {
					return Component.prototype && Component.prototype.isReactComponent;
				}
				function renderWithHooks(request, task, Component, props, secondArg) {
					var componentIdentity = {};
					prepareToUseHooks(task, componentIdentity);
					var result = Component(props, secondArg);
					return finishHooks(Component, props, result, secondArg);
				}
				function finishClassComponent(request, task, instance, Component, props) {
					var nextChildren = instance.render();
					if (instance.props !== props) {
						if (!didWarnAboutReassigningProps)
							error(
								'It looks like %s is reassigning its own `this.props` while rendering. This is not supported and can lead to confusing bugs.',
								getComponentNameFromType(Component) || 'a component'
							);
						didWarnAboutReassigningProps = true;
					}
					{
						var childContextTypes = Component.childContextTypes;
						if (childContextTypes !== null && childContextTypes !== undefined) {
							var previousContext = task.legacyContext;
							var mergedContext = processChildContext(
								instance,
								Component,
								previousContext,
								childContextTypes
							);
							task.legacyContext = mergedContext;
							renderNodeDestructive(request, task, nextChildren);
							task.legacyContext = previousContext;
							return;
						}
					}
					renderNodeDestructive(request, task, nextChildren);
				}
				function renderClassComponent(request, task, Component, props) {
					pushClassComponentStackInDEV(task, Component);
					var maskedContext = getMaskedContext(Component, task.legacyContext);
					var instance = constructClassInstance(Component, props, maskedContext);
					mountClassInstance(instance, Component, props, maskedContext);
					finishClassComponent(request, task, instance, Component, props);
					popComponentStackInDEV(task);
				}
				var didWarnAboutBadClass = {};
				var didWarnAboutModulePatternComponent = {};
				var didWarnAboutContextTypeOnFunctionComponent = {};
				var didWarnAboutGetDerivedStateOnFunctionComponent = {};
				var didWarnAboutReassigningProps = false;
				var didWarnAboutGenerators = false;
				var didWarnAboutMaps = false;
				var hasWarnedAboutUsingContextAsConsumer = false;
				function renderIndeterminateComponent(request, task, Component, props) {
					var legacyContext;
					legacyContext = getMaskedContext(Component, task.legacyContext);
					pushFunctionComponentStackInDEV(task, Component);
					if (Component.prototype && typeof Component.prototype.render === 'function') {
						var componentName = getComponentNameFromType(Component) || 'Unknown';
						if (!didWarnAboutBadClass[componentName]) {
							error(
								"The <%s /> component appears to have a render method, but doesn't extend React.Component. This is likely to cause errors. Change %s to extend React.Component instead.",
								componentName,
								componentName
							);
							didWarnAboutBadClass[componentName] = true;
						}
					}
					var value = renderWithHooks(request, task, Component, props, legacyContext);
					var hasId = checkDidRenderIdHook();
					if (
						typeof value === 'object' &&
						value !== null &&
						typeof value.render === 'function' &&
						value.$$typeof === undefined
					) {
						var _componentName = getComponentNameFromType(Component) || 'Unknown';
						if (!didWarnAboutModulePatternComponent[_componentName]) {
							error(
								"The <%s /> component appears to be a function component that returns a class instance. Change %s to a class that extends React.Component instead. If you can't use a class try assigning the prototype on the function as a workaround. `%s.prototype = React.Component.prototype`. Don't use an arrow function since it cannot be called with `new` by React.",
								_componentName,
								_componentName,
								_componentName
							);
							didWarnAboutModulePatternComponent[_componentName] = true;
						}
					}
					if (
						typeof value === 'object' &&
						value !== null &&
						typeof value.render === 'function' &&
						value.$$typeof === undefined
					) {
						{
							var _componentName2 = getComponentNameFromType(Component) || 'Unknown';
							if (!didWarnAboutModulePatternComponent[_componentName2]) {
								error(
									"The <%s /> component appears to be a function component that returns a class instance. Change %s to a class that extends React.Component instead. If you can't use a class try assigning the prototype on the function as a workaround. `%s.prototype = React.Component.prototype`. Don't use an arrow function since it cannot be called with `new` by React.",
									_componentName2,
									_componentName2,
									_componentName2
								);
								didWarnAboutModulePatternComponent[_componentName2] = true;
							}
						}
						mountClassInstance(value, Component, props, legacyContext);
						finishClassComponent(request, task, value, Component, props);
					} else {
						validateFunctionComponentInDev(Component);
						if (hasId) {
							var prevTreeContext = task.treeContext;
							var totalChildren = 1;
							var index = 0;
							task.treeContext = pushTreeContext(prevTreeContext, totalChildren, index);
							try {
								renderNodeDestructive(request, task, value);
							} finally {
								task.treeContext = prevTreeContext;
							}
						} else renderNodeDestructive(request, task, value);
					}
					popComponentStackInDEV(task);
				}
				function validateFunctionComponentInDev(Component) {
					{
						if (Component) {
							if (Component.childContextTypes)
								error(
									'%s(...): childContextTypes cannot be defined on a function component.',
									Component.displayName || Component.name || 'Component'
								);
						}
						if (typeof Component.getDerivedStateFromProps === 'function') {
							var _componentName3 = getComponentNameFromType(Component) || 'Unknown';
							if (!didWarnAboutGetDerivedStateOnFunctionComponent[_componentName3]) {
								error(
									'%s: Function components do not support getDerivedStateFromProps.',
									_componentName3
								);
								didWarnAboutGetDerivedStateOnFunctionComponent[_componentName3] = true;
							}
						}
						if (typeof Component.contextType === 'object' && Component.contextType !== null) {
							var _componentName4 = getComponentNameFromType(Component) || 'Unknown';
							if (!didWarnAboutContextTypeOnFunctionComponent[_componentName4]) {
								error('%s: Function components do not support contextType.', _componentName4);
								didWarnAboutContextTypeOnFunctionComponent[_componentName4] = true;
							}
						}
					}
				}
				function resolveDefaultProps(Component, baseProps) {
					if (Component && Component.defaultProps) {
						var props = assign({}, baseProps);
						var defaultProps = Component.defaultProps;
						for (var propName in defaultProps)
							if (props[propName] === undefined) props[propName] = defaultProps[propName];
						return props;
					}
					return baseProps;
				}
				function renderForwardRef(request, task, type, props, ref) {
					pushFunctionComponentStackInDEV(task, type.render);
					var children = renderWithHooks(request, task, type.render, props, ref);
					var hasId = checkDidRenderIdHook();
					if (hasId) {
						var prevTreeContext = task.treeContext;
						var totalChildren = 1;
						var index = 0;
						task.treeContext = pushTreeContext(prevTreeContext, totalChildren, index);
						try {
							renderNodeDestructive(request, task, children);
						} finally {
							task.treeContext = prevTreeContext;
						}
					} else renderNodeDestructive(request, task, children);
					popComponentStackInDEV(task);
				}
				function renderMemo(request, task, type, props, ref) {
					var innerType = type.type;
					var resolvedProps = resolveDefaultProps(innerType, props);
					renderElement(request, task, innerType, resolvedProps, ref);
				}
				function renderContextConsumer(request, task, context, props) {
					if (context._context === undefined) {
						if (context !== context.Consumer) {
							if (!hasWarnedAboutUsingContextAsConsumer) {
								hasWarnedAboutUsingContextAsConsumer = true;
								error(
									'Rendering <Context> directly is not supported and will be removed in a future major release. Did you mean to render <Context.Consumer> instead?'
								);
							}
						}
					} else context = context._context;
					var render = props.children;
					if (typeof render !== 'function')
						error(
							"A context consumer was rendered with multiple children, or a child that isn't a function. A context consumer expects a single child that is a function. If you did pass a function, make sure there is no trailing or leading whitespace around it."
						);
					var newValue = readContext(context);
					var newChildren = render(newValue);
					renderNodeDestructive(request, task, newChildren);
				}
				function renderContextProvider(request, task, type, props) {
					var context = type._context;
					var value = props.value;
					var children = props.children;
					var prevSnapshot;
					prevSnapshot = task.context;
					task.context = pushProvider(context, value);
					renderNodeDestructive(request, task, children);
					task.context = popProvider(context);
					if (prevSnapshot !== task.context)
						error(
							'Popping the context provider did not return back to the original snapshot. This is a bug in React.'
						);
				}
				function renderLazyComponent(request, task, lazyComponent, props, ref) {
					pushBuiltInComponentStackInDEV(task, 'Lazy');
					var payload = lazyComponent._payload;
					var init = lazyComponent._init;
					var Component = init(payload);
					var resolvedProps = resolveDefaultProps(Component, props);
					renderElement(request, task, Component, resolvedProps, ref);
					popComponentStackInDEV(task);
				}
				function renderElement(request, task, type, props, ref) {
					if (typeof type === 'function')
						if (shouldConstruct$1(type)) {
							renderClassComponent(request, task, type, props);
							return;
						} else {
							renderIndeterminateComponent(request, task, type, props);
							return;
						}
					if (typeof type === 'string') {
						renderHostElement(request, task, type, props);
						return;
					}
					switch (type) {
						case REACT_LEGACY_HIDDEN_TYPE:
						case REACT_DEBUG_TRACING_MODE_TYPE:
						case REACT_STRICT_MODE_TYPE:
						case REACT_PROFILER_TYPE:
						case REACT_FRAGMENT_TYPE: {
							renderNodeDestructive(request, task, props.children);
							return;
						}
						case REACT_SUSPENSE_LIST_TYPE: {
							pushBuiltInComponentStackInDEV(task, 'SuspenseList');
							renderNodeDestructive(request, task, props.children);
							popComponentStackInDEV(task);
							return;
						}
						case REACT_SCOPE_TYPE:
							throw new Error('ReactDOMServer does not yet support scope components.');
						case REACT_SUSPENSE_TYPE: {
							renderSuspenseBoundary(request, task, props);
							return;
						}
					}
					if (typeof type === 'object' && type !== null)
						switch (type.$$typeof) {
							case REACT_FORWARD_REF_TYPE: {
								renderForwardRef(request, task, type, props, ref);
								return;
							}
							case REACT_MEMO_TYPE: {
								renderMemo(request, task, type, props, ref);
								return;
							}
							case REACT_PROVIDER_TYPE: {
								renderContextProvider(request, task, type, props);
								return;
							}
							case REACT_CONTEXT_TYPE: {
								renderContextConsumer(request, task, type, props);
								return;
							}
							case REACT_LAZY_TYPE: {
								renderLazyComponent(request, task, type, props);
								return;
							}
						}
					var info = '';
					if (
						type === undefined ||
						(typeof type === 'object' && type !== null && Object.keys(type).length === 0)
					)
						info +=
							" You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.";
					throw new Error(
						'Element type is invalid: expected a string (for built-in components) or a class/function (for composite components) ' +
							('but got: ' + (type == null ? type : typeof type) + '.' + info)
					);
				}
				function validateIterable(iterable, iteratorFn) {
					{
						if (typeof Symbol === 'function' && iterable[Symbol.toStringTag] === 'Generator') {
							if (!didWarnAboutGenerators)
								error(
									'Using Generators as children is unsupported and will likely yield unexpected results because enumerating a generator mutates it. You may convert it to an array with `Array.from()` or the `[...spread]` operator before rendering. Keep in mind you might need to polyfill these features for older browsers.'
								);
							didWarnAboutGenerators = true;
						}
						if (iterable.entries === iteratorFn) {
							if (!didWarnAboutMaps)
								error(
									'Using Maps as children is not supported. Use an array of keyed ReactElements instead.'
								);
							didWarnAboutMaps = true;
						}
					}
				}
				function renderNodeDestructive(request, task, node) {
					try {
						return renderNodeDestructiveImpl(request, task, node);
					} catch (x) {
						if (typeof x === 'object' && x !== null && typeof x.then === 'function');
						else
							lastBoundaryErrorComponentStackDev =
								lastBoundaryErrorComponentStackDev !== null
									? lastBoundaryErrorComponentStackDev
									: getCurrentStackInDEV();
						throw x;
					}
				}
				function renderNodeDestructiveImpl(request, task, node) {
					task.node = node;
					if (typeof node === 'object' && node !== null) {
						switch (node.$$typeof) {
							case REACT_ELEMENT_TYPE: {
								var element = node;
								var type = element.type;
								var props = element.props;
								var ref = element.ref;
								renderElement(request, task, type, props, ref);
								return;
							}
							case REACT_PORTAL_TYPE:
								throw new Error(
									'Portals are not currently supported by the server renderer. Render them conditionally so that they only appear on the client render.'
								);
							case REACT_LAZY_TYPE: {
								var lazyNode = node;
								var payload = lazyNode._payload;
								var init = lazyNode._init;
								var resolvedNode;
								try {
									resolvedNode = init(payload);
								} catch (x) {
									if (typeof x === 'object' && x !== null && typeof x.then === 'function')
										pushBuiltInComponentStackInDEV(task, 'Lazy');
									throw x;
								}
								renderNodeDestructive(request, task, resolvedNode);
								return;
							}
						}
						if (isArray(node)) {
							renderChildrenArray(request, task, node);
							return;
						}
						var iteratorFn = getIteratorFn(node);
						if (iteratorFn) {
							validateIterable(node, iteratorFn);
							var iterator = iteratorFn.call(node);
							if (iterator) {
								var step = iterator.next();
								if (!step.done) {
									var children = [];
									do {
										children.push(step.value);
										step = iterator.next();
									} while (!step.done);
									renderChildrenArray(request, task, children);
									return;
								}
								return;
							}
						}
						var childString = Object.prototype.toString.call(node);
						throw new Error(
							'Objects are not valid as a React child (found: ' +
								(childString === '[object Object]'
									? 'object with keys {' + Object.keys(node).join(', ') + '}'
									: childString) +
								'). If you meant to render a collection of children, use an array instead.'
						);
					}
					if (typeof node === 'string') {
						var segment = task.blockedSegment;
						segment.lastPushedText = pushTextInstance(
							task.blockedSegment.chunks,
							node,
							request.responseState,
							segment.lastPushedText
						);
						return;
					}
					if (typeof node === 'number') {
						var _segment = task.blockedSegment;
						_segment.lastPushedText = pushTextInstance(
							task.blockedSegment.chunks,
							'' + node,
							request.responseState,
							_segment.lastPushedText
						);
						return;
					}
					if (typeof node === 'function')
						error(
							'Functions are not valid as a React child. This may happen if you return a Component instead of <Component /> from render. Or maybe you meant to call this function rather than return it.'
						);
				}
				function renderChildrenArray(request, task, children) {
					var totalChildren = children.length;
					for (var i = 0; i < totalChildren; i++) {
						var prevTreeContext = task.treeContext;
						task.treeContext = pushTreeContext(prevTreeContext, totalChildren, i);
						try {
							renderNode(request, task, children[i]);
						} finally {
							task.treeContext = prevTreeContext;
						}
					}
				}
				function spawnNewSuspendedTask(request, task, x) {
					var segment = task.blockedSegment;
					var insertionIndex = segment.chunks.length;
					var newSegment = createPendingSegment(
						request,
						insertionIndex,
						null,
						segment.formatContext,
						segment.lastPushedText,
						true
					);
					segment.children.push(newSegment);
					segment.lastPushedText = false;
					var newTask = createTask(
						request,
						task.node,
						task.blockedBoundary,
						newSegment,
						task.abortSet,
						task.legacyContext,
						task.context,
						task.treeContext
					);
					if (task.componentStack !== null) newTask.componentStack = task.componentStack.parent;
					var ping = newTask.ping;
					x.then(ping, ping);
				}
				function renderNode(request, task, node) {
					var previousFormatContext = task.blockedSegment.formatContext;
					var previousLegacyContext = task.legacyContext;
					var previousContext = task.context;
					var previousComponentStack = null;
					previousComponentStack = task.componentStack;
					try {
						return renderNodeDestructive(request, task, node);
					} catch (x) {
						resetHooksState();
						if (typeof x === 'object' && x !== null && typeof x.then === 'function') {
							spawnNewSuspendedTask(request, task, x);
							task.blockedSegment.formatContext = previousFormatContext;
							task.legacyContext = previousLegacyContext;
							task.context = previousContext;
							switchContext(previousContext);
							task.componentStack = previousComponentStack;
							return;
						} else {
							task.blockedSegment.formatContext = previousFormatContext;
							task.legacyContext = previousLegacyContext;
							task.context = previousContext;
							switchContext(previousContext);
							task.componentStack = previousComponentStack;
							throw x;
						}
					}
				}
				function erroredTask(request, boundary, segment, error) {
					var errorDigest = logRecoverableError(request, error);
					if (boundary === null) fatalError(request, error);
					else {
						boundary.pendingTasks--;
						if (!boundary.forceClientRender) {
							boundary.forceClientRender = true;
							boundary.errorDigest = errorDigest;
							captureBoundaryErrorDetailsDev(boundary, error);
							if (boundary.parentFlushed) request.clientRenderedBoundaries.push(boundary);
						}
					}
					request.allPendingTasks--;
					if (request.allPendingTasks === 0) {
						var onAllReady = request.onAllReady;
						onAllReady();
					}
				}
				function abortTaskSoft(task) {
					var request = this;
					var boundary = task.blockedBoundary;
					var segment = task.blockedSegment;
					segment.status = ABORTED;
					finishedTask(request, boundary, segment);
				}
				function abortTask(task, request, reason) {
					var boundary = task.blockedBoundary;
					var segment = task.blockedSegment;
					segment.status = ABORTED;
					if (boundary === null) {
						request.allPendingTasks--;
						if (request.status !== CLOSED) {
							request.status = CLOSED;
							if (request.destination !== null) close(request.destination);
						}
					} else {
						boundary.pendingTasks--;
						if (!boundary.forceClientRender) {
							boundary.forceClientRender = true;
							var _error =
								reason === undefined
									? new Error('The render was aborted by the server without a reason.')
									: reason;
							boundary.errorDigest = request.onError(_error);
							{
								var errorPrefix = 'The server did not finish this Suspense boundary: ';
								if (_error && typeof _error.message === 'string') _error = errorPrefix + _error.message;
								else _error = errorPrefix + String(_error);
								var previousTaskInDev = currentTaskInDEV;
								currentTaskInDEV = task;
								try {
									captureBoundaryErrorDetailsDev(boundary, _error);
								} finally {
									currentTaskInDEV = previousTaskInDev;
								}
							}
							if (boundary.parentFlushed) request.clientRenderedBoundaries.push(boundary);
						}
						boundary.fallbackAbortableTasks.forEach(function (fallbackTask) {
							return abortTask(fallbackTask, request, reason);
						});
						boundary.fallbackAbortableTasks.clear();
						request.allPendingTasks--;
						if (request.allPendingTasks === 0) {
							var onAllReady = request.onAllReady;
							onAllReady();
						}
					}
				}
				function queueCompletedSegment(boundary, segment) {
					if (
						segment.chunks.length === 0 &&
						segment.children.length === 1 &&
						segment.children[0].boundary === null
					) {
						var childSegment = segment.children[0];
						childSegment.id = segment.id;
						childSegment.parentFlushed = true;
						if (childSegment.status === COMPLETED) queueCompletedSegment(boundary, childSegment);
					} else {
						var completedSegments = boundary.completedSegments;
						completedSegments.push(segment);
					}
				}
				function finishedTask(request, boundary, segment) {
					if (boundary === null) {
						if (segment.parentFlushed) {
							if (request.completedRootSegment !== null)
								throw new Error('There can only be one root segment. This is a bug in React.');
							request.completedRootSegment = segment;
						}
						request.pendingRootTasks--;
						if (request.pendingRootTasks === 0) {
							request.onShellError = noop$1;
							var onShellReady = request.onShellReady;
							onShellReady();
						}
					} else {
						boundary.pendingTasks--;
						if (boundary.forceClientRender);
						else if (boundary.pendingTasks === 0) {
							if (segment.parentFlushed) {
								if (segment.status === COMPLETED) queueCompletedSegment(boundary, segment);
							}
							if (boundary.parentFlushed) request.completedBoundaries.push(boundary);
							boundary.fallbackAbortableTasks.forEach(abortTaskSoft, request);
							boundary.fallbackAbortableTasks.clear();
						} else if (segment.parentFlushed) {
							if (segment.status === COMPLETED) {
								queueCompletedSegment(boundary, segment);
								var completedSegments = boundary.completedSegments;
								if (completedSegments.length === 1) {
									if (boundary.parentFlushed) request.partialBoundaries.push(boundary);
								}
							}
						}
					}
					request.allPendingTasks--;
					if (request.allPendingTasks === 0) {
						var onAllReady = request.onAllReady;
						onAllReady();
					}
				}
				function retryTask(request, task) {
					var segment = task.blockedSegment;
					if (segment.status !== PENDING) return;
					switchContext(task.context);
					var prevTaskInDEV = null;
					{
						prevTaskInDEV = currentTaskInDEV;
						currentTaskInDEV = task;
					}
					try {
						renderNodeDestructive(request, task, task.node);
						pushSegmentFinale(
							segment.chunks,
							request.responseState,
							segment.lastPushedText,
							segment.textEmbedded
						);
						task.abortSet.delete(task);
						segment.status = COMPLETED;
						finishedTask(request, task.blockedBoundary, segment);
					} catch (x) {
						resetHooksState();
						if (typeof x === 'object' && x !== null && typeof x.then === 'function') {
							var ping = task.ping;
							x.then(ping, ping);
						} else {
							task.abortSet.delete(task);
							segment.status = ERRORED;
							erroredTask(request, task.blockedBoundary, segment, x);
						}
					} finally {
						currentTaskInDEV = prevTaskInDEV;
					}
				}
				function performWork(request) {
					if (request.status === CLOSED) return;
					var prevContext = getActiveContext();
					var prevDispatcher = ReactCurrentDispatcher$1.current;
					ReactCurrentDispatcher$1.current = Dispatcher;
					var prevGetCurrentStackImpl;
					{
						prevGetCurrentStackImpl = ReactDebugCurrentFrame$1.getCurrentStack;
						ReactDebugCurrentFrame$1.getCurrentStack = getCurrentStackInDEV;
					}
					var prevResponseState = currentResponseState;
					setCurrentResponseState(request.responseState);
					try {
						var pingedTasks = request.pingedTasks;
						var i;
						for (i = 0; i < pingedTasks.length; i++) {
							var task = pingedTasks[i];
							retryTask(request, task);
						}
						pingedTasks.splice(0, i);
						if (request.destination !== null) flushCompletedQueues(request, request.destination);
					} catch (error) {
						logRecoverableError(request, error);
						fatalError(request, error);
					} finally {
						setCurrentResponseState(prevResponseState);
						ReactCurrentDispatcher$1.current = prevDispatcher;
						ReactDebugCurrentFrame$1.getCurrentStack = prevGetCurrentStackImpl;
						if (prevDispatcher === Dispatcher) switchContext(prevContext);
					}
				}
				function flushSubtree(request, destination, segment) {
					segment.parentFlushed = true;
					switch (segment.status) {
						case PENDING: {
							var segmentID = (segment.id = request.nextSegmentId++);
							segment.lastPushedText = false;
							segment.textEmbedded = false;
							return writePlaceholder(destination, request.responseState, segmentID);
						}
						case COMPLETED: {
							segment.status = FLUSHED;
							var r = true;
							var chunks = segment.chunks;
							var chunkIdx = 0;
							var children = segment.children;
							for (var childIdx = 0; childIdx < children.length; childIdx++) {
								var nextChild = children[childIdx];
								for (; chunkIdx < nextChild.index; chunkIdx++)
									writeChunk(destination, chunks[chunkIdx]);
								r = flushSegment(request, destination, nextChild);
							}
							for (; chunkIdx < chunks.length - 1; chunkIdx++) writeChunk(destination, chunks[chunkIdx]);
							if (chunkIdx < chunks.length) r = writeChunkAndReturn(destination, chunks[chunkIdx]);
							return r;
						}
						default:
							throw new Error(
								'Aborted, errored or already flushed boundaries should not be flushed again. This is a bug in React.'
							);
					}
				}
				function flushSegment(request, destination, segment) {
					var boundary = segment.boundary;
					if (boundary === null) return flushSubtree(request, destination, segment);
					boundary.parentFlushed = true;
					if (boundary.forceClientRender) {
						writeStartClientRenderedSuspenseBoundary(
							destination,
							request.responseState,
							boundary.errorDigest,
							boundary.errorMessage,
							boundary.errorComponentStack
						);
						flushSubtree(request, destination, segment);
						return writeEndClientRenderedSuspenseBoundary(destination, request.responseState);
					} else if (boundary.pendingTasks > 0) {
						boundary.rootSegmentID = request.nextSegmentId++;
						if (boundary.completedSegments.length > 0) request.partialBoundaries.push(boundary);
						var id = (boundary.id = assignSuspenseBoundaryID(request.responseState));
						writeStartPendingSuspenseBoundary(destination, request.responseState, id);
						flushSubtree(request, destination, segment);
						return writeEndPendingSuspenseBoundary(destination, request.responseState);
					} else if (boundary.byteSize > request.progressiveChunkSize) {
						boundary.rootSegmentID = request.nextSegmentId++;
						request.completedBoundaries.push(boundary);
						writeStartPendingSuspenseBoundary(destination, request.responseState, boundary.id);
						flushSubtree(request, destination, segment);
						return writeEndPendingSuspenseBoundary(destination, request.responseState);
					} else {
						writeStartCompletedSuspenseBoundary(destination, request.responseState);
						var completedSegments = boundary.completedSegments;
						if (completedSegments.length !== 1)
							throw new Error(
								'A previously unvisited boundary must have exactly one root segment. This is a bug in React.'
							);
						var contentSegment = completedSegments[0];
						flushSegment(request, destination, contentSegment);
						return writeEndCompletedSuspenseBoundary(destination, request.responseState);
					}
				}
				function flushClientRenderedBoundary(request, destination, boundary) {
					return writeClientRenderBoundaryInstruction(
						destination,
						request.responseState,
						boundary.id,
						boundary.errorDigest,
						boundary.errorMessage,
						boundary.errorComponentStack
					);
				}
				function flushSegmentContainer(request, destination, segment) {
					writeStartSegment(destination, request.responseState, segment.formatContext, segment.id);
					flushSegment(request, destination, segment);
					return writeEndSegment(destination, segment.formatContext);
				}
				function flushCompletedBoundary(request, destination, boundary) {
					var completedSegments = boundary.completedSegments;
					var i = 0;
					for (; i < completedSegments.length; i++) {
						var segment = completedSegments[i];
						flushPartiallyCompletedSegment(request, destination, boundary, segment);
					}
					completedSegments.length = 0;
					return writeCompletedBoundaryInstruction(
						destination,
						request.responseState,
						boundary.id,
						boundary.rootSegmentID
					);
				}
				function flushPartialBoundary(request, destination, boundary) {
					var completedSegments = boundary.completedSegments;
					var i = 0;
					for (; i < completedSegments.length; i++) {
						var segment = completedSegments[i];
						if (!flushPartiallyCompletedSegment(request, destination, boundary, segment)) {
							i++;
							completedSegments.splice(0, i);
							return false;
						}
					}
					completedSegments.splice(0, i);
					return true;
				}
				function flushPartiallyCompletedSegment(request, destination, boundary, segment) {
					if (segment.status === FLUSHED) return true;
					var segmentID = segment.id;
					if (segmentID === -1) {
						var rootSegmentID = (segment.id = boundary.rootSegmentID);
						if (rootSegmentID === -1)
							throw new Error(
								'A root segment ID must have been assigned by now. This is a bug in React.'
							);
						return flushSegmentContainer(request, destination, segment);
					} else {
						flushSegmentContainer(request, destination, segment);
						return writeCompletedSegmentInstruction(destination, request.responseState, segmentID);
					}
				}
				function flushCompletedQueues(request, destination) {
					beginWriting();
					try {
						var completedRootSegment = request.completedRootSegment;
						if (completedRootSegment !== null && request.pendingRootTasks === 0) {
							flushSegment(request, destination, completedRootSegment);
							request.completedRootSegment = null;
							writeCompletedRoot(destination, request.responseState);
						}
						var clientRenderedBoundaries = request.clientRenderedBoundaries;
						var i;
						for (i = 0; i < clientRenderedBoundaries.length; i++) {
							var boundary = clientRenderedBoundaries[i];
							if (!flushClientRenderedBoundary(request, destination, boundary)) {
								request.destination = null;
								i++;
								clientRenderedBoundaries.splice(0, i);
								return;
							}
						}
						clientRenderedBoundaries.splice(0, i);
						var completedBoundaries = request.completedBoundaries;
						for (i = 0; i < completedBoundaries.length; i++) {
							var _boundary = completedBoundaries[i];
							if (!flushCompletedBoundary(request, destination, _boundary)) {
								request.destination = null;
								i++;
								completedBoundaries.splice(0, i);
								return;
							}
						}
						completedBoundaries.splice(0, i);
						completeWriting(destination);
						beginWriting(destination);
						var partialBoundaries = request.partialBoundaries;
						for (i = 0; i < partialBoundaries.length; i++) {
							var _boundary2 = partialBoundaries[i];
							if (!flushPartialBoundary(request, destination, _boundary2)) {
								request.destination = null;
								i++;
								partialBoundaries.splice(0, i);
								return;
							}
						}
						partialBoundaries.splice(0, i);
						var largeBoundaries = request.completedBoundaries;
						for (i = 0; i < largeBoundaries.length; i++) {
							var _boundary3 = largeBoundaries[i];
							if (!flushCompletedBoundary(request, destination, _boundary3)) {
								request.destination = null;
								i++;
								largeBoundaries.splice(0, i);
								return;
							}
						}
						largeBoundaries.splice(0, i);
					} finally {
						completeWriting(destination);
						if (
							request.allPendingTasks === 0 &&
							request.pingedTasks.length === 0 &&
							request.clientRenderedBoundaries.length === 0 &&
							request.completedBoundaries.length === 0
						) {
							if (request.abortableTasks.size !== 0)
								error(
									'There was still abortable task at the root when we closed. This is a bug in React.'
								);
							close(destination);
						}
					}
				}
				function startWork(request) {
					scheduleWork(function () {
						return performWork(request);
					});
				}
				function startFlowing(request, destination) {
					if (request.status === CLOSING) {
						request.status = CLOSED;
						closeWithError(destination, request.fatalError);
						return;
					}
					if (request.status === CLOSED) return;
					if (request.destination !== null) return;
					request.destination = destination;
					try {
						flushCompletedQueues(request, destination);
					} catch (error) {
						logRecoverableError(request, error);
						fatalError(request, error);
					}
				}
				function abort(request, reason) {
					try {
						var abortableTasks = request.abortableTasks;
						abortableTasks.forEach(function (task) {
							return abortTask(task, request, reason);
						});
						abortableTasks.clear();
						if (request.destination !== null) flushCompletedQueues(request, request.destination);
					} catch (error) {
						logRecoverableError(request, error);
						fatalError(request, error);
					}
				}
				function renderToReadableStream(children, options) {
					return new Promise(function (resolve, reject) {
						var onFatalError;
						var onAllReady;
						var allReady = new Promise(function (res, rej) {
							onAllReady = res;
							onFatalError = rej;
						});
						function onShellReady() {
							var stream = new ReadableStream(
								{
									type: 'bytes',
									pull: function (controller) {
										startFlowing(request, controller);
									},
									cancel: function (reason) {
										abort(request);
									},
								},
								{
									highWaterMark: 0,
								}
							);
							stream.allReady = allReady;
							resolve(stream);
						}
						function onShellError(error) {
							allReady.catch(function () {});
							reject(error);
						}
						var request = createRequest(
							children,
							createResponseState(
								options ? options.identifierPrefix : undefined,
								options ? options.nonce : undefined,
								options ? options.bootstrapScriptContent : undefined,
								options ? options.bootstrapScripts : undefined,
								options ? options.bootstrapModules : undefined
							),
							createRootFormatContext(options ? options.namespaceURI : undefined),
							options ? options.progressiveChunkSize : undefined,
							options ? options.onError : undefined,
							onAllReady,
							onShellReady,
							onShellError,
							onFatalError
						);
						if (options && options.signal) {
							var signal = options.signal;
							var listener = function () {
								abort(request, signal.reason);
								signal.removeEventListener('abort', listener);
							};
							signal.addEventListener('abort', listener);
						}
						startWork(request);
					});
				}
				exports.renderToReadableStream = renderToReadableStream;
				exports.version = ReactVersion;
			})();
		},
	}['react-dom/cjs/react-dom-server.browser.development.js']
);

// react-dom/cjs/react-dom-server-legacy.browser.development.js
export var $20732e82 = $$m(
	{
		'react-dom/cjs/react-dom-server-legacy.browser.development.js': (module, exports) => {
			(function () {
				var React = __require.d($a85977a5());
				var ReactVersion = '18.2.0';
				var ReactSharedInternals = React.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
				function warn(format) {
					{
						for (
							var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1;
							_key < _len;
							_key++
						)
							args[_key - 1] = arguments[_key];
						printWarning('warn', format, args);
					}
				}
				function error(format) {
					{
						for (
							var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1;
							_key2 < _len2;
							_key2++
						)
							args[_key2 - 1] = arguments[_key2];
						printWarning('error', format, args);
					}
				}
				function printWarning(level, format, args) {
					{
						var ReactDebugCurrentFrame = ReactSharedInternals.ReactDebugCurrentFrame;
						var stack = ReactDebugCurrentFrame.getStackAddendum();
						if (stack !== '') {
							format += '%s';
							args = args.concat([stack]);
						}
						var argsWithFormat = args.map(function (item) {
							return String(item);
						});
						argsWithFormat.unshift('Warning: ' + format);
						Function.prototype.apply.call(console[level], console, argsWithFormat);
					}
				}
				function scheduleWork(callback) {
					callback();
				}
				function beginWriting(destination) {}
				function writeChunk(destination, chunk) {
					writeChunkAndReturn(destination, chunk);
				}
				function writeChunkAndReturn(destination, chunk) {
					return destination.push(chunk);
				}
				function completeWriting(destination) {}
				function close(destination) {
					destination.push(null);
				}
				function stringToChunk(content) {
					return content;
				}
				function stringToPrecomputedChunk(content) {
					return content;
				}
				function closeWithError(destination, error) {
					destination.destroy(error);
				}
				function typeName(value) {
					{
						var hasToStringTag = typeof Symbol === 'function' && Symbol.toStringTag;
						var type = (hasToStringTag && value[Symbol.toStringTag]) || value.constructor.name || 'Object';
						return type;
					}
				}
				function willCoercionThrow(value) {
					try {
						testStringCoercion(value);
						return false;
					} catch (e) {
						return true;
					}
				}
				function testStringCoercion(value) {
					return '' + value;
				}
				function checkAttributeStringCoercion(value, attributeName) {
					if (willCoercionThrow(value)) {
						error(
							'The provided `%s` attribute is an unsupported type %s. This value must be coerced to a string before before using it here.',
							attributeName,
							typeName(value)
						);
						return testStringCoercion(value);
					}
				}
				function checkCSSPropertyStringCoercion(value, propName) {
					if (willCoercionThrow(value)) {
						error(
							'The provided `%s` CSS property is an unsupported type %s. This value must be coerced to a string before before using it here.',
							propName,
							typeName(value)
						);
						return testStringCoercion(value);
					}
				}
				function checkHtmlStringCoercion(value) {
					if (willCoercionThrow(value)) {
						error(
							'The provided HTML markup uses a value of unsupported type %s. This value must be coerced to a string before before using it here.',
							typeName(value)
						);
						return testStringCoercion(value);
					}
				}
				var hasOwnProperty = Object.prototype.hasOwnProperty;
				var RESERVED = 0;
				var STRING = 1;
				var BOOLEANISH_STRING = 2;
				var BOOLEAN = 3;
				var OVERLOADED_BOOLEAN = 4;
				var NUMERIC = 5;
				var POSITIVE_NUMERIC = 6;
				var ATTRIBUTE_NAME_START_CHAR =
					':A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD';
				var ATTRIBUTE_NAME_CHAR = ATTRIBUTE_NAME_START_CHAR + '\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040';
				var VALID_ATTRIBUTE_NAME_REGEX = new RegExp(
					'^[' + ATTRIBUTE_NAME_START_CHAR + '][' + ATTRIBUTE_NAME_CHAR + ']*$'
				);
				var illegalAttributeNameCache = {};
				var validatedAttributeNameCache = {};
				function isAttributeNameSafe(attributeName) {
					if (hasOwnProperty.call(validatedAttributeNameCache, attributeName)) return true;
					if (hasOwnProperty.call(illegalAttributeNameCache, attributeName)) return false;
					if (VALID_ATTRIBUTE_NAME_REGEX.test(attributeName)) {
						validatedAttributeNameCache[attributeName] = true;
						return true;
					}
					illegalAttributeNameCache[attributeName] = true;
					error('Invalid attribute name: `%s`', attributeName);
					return false;
				}
				function shouldRemoveAttributeWithWarning(name, value, propertyInfo, isCustomComponentTag) {
					if (propertyInfo !== null && propertyInfo.type === RESERVED) return false;
					switch (typeof value) {
						case 'function':
						case 'symbol':
							return true;
						case 'boolean': {
							if (isCustomComponentTag) return false;
							if (propertyInfo !== null) return !propertyInfo.acceptsBooleans;
							else {
								var prefix = name.toLowerCase().slice(0, 5);
								return prefix !== 'data-' && prefix !== 'aria-';
							}
						}
						default:
							return false;
					}
				}
				function getPropertyInfo(name) {
					return properties.hasOwnProperty(name) ? properties[name] : null;
				}
				function PropertyInfoRecord(
					name,
					type,
					mustUseProperty,
					attributeName,
					attributeNamespace,
					sanitizeURL,
					removeEmptyString
				) {
					this.acceptsBooleans =
						type === BOOLEANISH_STRING || type === BOOLEAN || type === OVERLOADED_BOOLEAN;
					this.attributeName = attributeName;
					this.attributeNamespace = attributeNamespace;
					this.mustUseProperty = mustUseProperty;
					this.propertyName = name;
					this.type = type;
					this.sanitizeURL = sanitizeURL;
					this.removeEmptyString = removeEmptyString;
				}
				var properties = {};
				var reservedProps = [
					'children',
					'dangerouslySetInnerHTML',
					'defaultValue',
					'defaultChecked',
					'innerHTML',
					'suppressContentEditableWarning',
					'suppressHydrationWarning',
					'style',
				];
				reservedProps.forEach(function (name) {
					properties[name] = new PropertyInfoRecord(name, RESERVED, false, name, null, false, false);
				});
				[
					['acceptCharset', 'accept-charset'],
					['className', 'class'],
					['htmlFor', 'for'],
					['httpEquiv', 'http-equiv'],
				].forEach(function (_ref) {
					var name = _ref[0],
						attributeName = _ref[1];
					properties[name] = new PropertyInfoRecord(name, STRING, false, attributeName, null, false, false);
				});
				['contentEditable', 'draggable', 'spellCheck', 'value'].forEach(function (name) {
					properties[name] = new PropertyInfoRecord(
						name,
						BOOLEANISH_STRING,
						false,
						name.toLowerCase(),
						null,
						false,
						false
					);
				});
				['autoReverse', 'externalResourcesRequired', 'focusable', 'preserveAlpha'].forEach(function (name) {
					properties[name] = new PropertyInfoRecord(name, BOOLEANISH_STRING, false, name, null, false, false);
				});
				[
					'allowFullScreen',
					'async',
					'autoFocus',
					'autoPlay',
					'controls',
					'default',
					'defer',
					'disabled',
					'disablePictureInPicture',
					'disableRemotePlayback',
					'formNoValidate',
					'hidden',
					'loop',
					'noModule',
					'noValidate',
					'open',
					'playsInline',
					'readOnly',
					'required',
					'reversed',
					'scoped',
					'seamless',
					'itemScope',
				].forEach(function (name) {
					properties[name] = new PropertyInfoRecord(
						name,
						BOOLEAN,
						false,
						name.toLowerCase(),
						null,
						false,
						false
					);
				});
				['checked', 'multiple', 'muted', 'selected'].forEach(function (name) {
					properties[name] = new PropertyInfoRecord(name, BOOLEAN, true, name, null, false, false);
				});
				['capture', 'download'].forEach(function (name) {
					properties[name] = new PropertyInfoRecord(
						name,
						OVERLOADED_BOOLEAN,
						false,
						name,
						null,
						false,
						false
					);
				});
				['cols', 'rows', 'size', 'span'].forEach(function (name) {
					properties[name] = new PropertyInfoRecord(name, POSITIVE_NUMERIC, false, name, null, false, false);
				});
				['rowSpan', 'start'].forEach(function (name) {
					properties[name] = new PropertyInfoRecord(
						name,
						NUMERIC,
						false,
						name.toLowerCase(),
						null,
						false,
						false
					);
				});
				var CAMELIZE = /[\-\:]([a-z])/g;
				var capitalize = function (token) {
					return token[1].toUpperCase();
				};
				[
					'accent-height',
					'alignment-baseline',
					'arabic-form',
					'baseline-shift',
					'cap-height',
					'clip-path',
					'clip-rule',
					'color-interpolation',
					'color-interpolation-filters',
					'color-profile',
					'color-rendering',
					'dominant-baseline',
					'enable-background',
					'fill-opacity',
					'fill-rule',
					'flood-color',
					'flood-opacity',
					'font-family',
					'font-size',
					'font-size-adjust',
					'font-stretch',
					'font-style',
					'font-variant',
					'font-weight',
					'glyph-name',
					'glyph-orientation-horizontal',
					'glyph-orientation-vertical',
					'horiz-adv-x',
					'horiz-origin-x',
					'image-rendering',
					'letter-spacing',
					'lighting-color',
					'marker-end',
					'marker-mid',
					'marker-start',
					'overline-position',
					'overline-thickness',
					'paint-order',
					'panose-1',
					'pointer-events',
					'rendering-intent',
					'shape-rendering',
					'stop-color',
					'stop-opacity',
					'strikethrough-position',
					'strikethrough-thickness',
					'stroke-dasharray',
					'stroke-dashoffset',
					'stroke-linecap',
					'stroke-linejoin',
					'stroke-miterlimit',
					'stroke-opacity',
					'stroke-width',
					'text-anchor',
					'text-decoration',
					'text-rendering',
					'underline-position',
					'underline-thickness',
					'unicode-bidi',
					'unicode-range',
					'units-per-em',
					'v-alphabetic',
					'v-hanging',
					'v-ideographic',
					'v-mathematical',
					'vector-effect',
					'vert-adv-y',
					'vert-origin-x',
					'vert-origin-y',
					'word-spacing',
					'writing-mode',
					'xmlns:xlink',
					'x-height',
				].forEach(function (attributeName) {
					var name = attributeName.replace(CAMELIZE, capitalize);
					properties[name] = new PropertyInfoRecord(name, STRING, false, attributeName, null, false, false);
				});
				['xlink:actuate', 'xlink:arcrole', 'xlink:role', 'xlink:show', 'xlink:title', 'xlink:type'].forEach(
					function (attributeName) {
						var name = attributeName.replace(CAMELIZE, capitalize);
						properties[name] = new PropertyInfoRecord(
							name,
							STRING,
							false,
							attributeName,
							'http://www.w3.org/1999/xlink',
							false,
							false
						);
					}
				);
				['xml:base', 'xml:lang', 'xml:space'].forEach(function (attributeName) {
					var name = attributeName.replace(CAMELIZE, capitalize);
					properties[name] = new PropertyInfoRecord(
						name,
						STRING,
						false,
						attributeName,
						'http://www.w3.org/XML/1998/namespace',
						false,
						false
					);
				});
				['tabIndex', 'crossOrigin'].forEach(function (attributeName) {
					properties[attributeName] = new PropertyInfoRecord(
						attributeName,
						STRING,
						false,
						attributeName.toLowerCase(),
						null,
						false,
						false
					);
				});
				var xlinkHref = 'xlinkHref';
				properties[xlinkHref] = new PropertyInfoRecord(
					'xlinkHref',
					STRING,
					false,
					'xlink:href',
					'http://www.w3.org/1999/xlink',
					true,
					false
				);
				['src', 'href', 'action', 'formAction'].forEach(function (attributeName) {
					properties[attributeName] = new PropertyInfoRecord(
						attributeName,
						STRING,
						false,
						attributeName.toLowerCase(),
						null,
						true,
						true
					);
				});
				var isUnitlessNumber = {
					animationIterationCount: true,
					aspectRatio: true,
					borderImageOutset: true,
					borderImageSlice: true,
					borderImageWidth: true,
					boxFlex: true,
					boxFlexGroup: true,
					boxOrdinalGroup: true,
					columnCount: true,
					columns: true,
					flex: true,
					flexGrow: true,
					flexPositive: true,
					flexShrink: true,
					flexNegative: true,
					flexOrder: true,
					gridArea: true,
					gridRow: true,
					gridRowEnd: true,
					gridRowSpan: true,
					gridRowStart: true,
					gridColumn: true,
					gridColumnEnd: true,
					gridColumnSpan: true,
					gridColumnStart: true,
					fontWeight: true,
					lineClamp: true,
					lineHeight: true,
					opacity: true,
					order: true,
					orphans: true,
					tabSize: true,
					widows: true,
					zIndex: true,
					zoom: true,
					fillOpacity: true,
					floodOpacity: true,
					stopOpacity: true,
					strokeDasharray: true,
					strokeDashoffset: true,
					strokeMiterlimit: true,
					strokeOpacity: true,
					strokeWidth: true,
				};
				function prefixKey(prefix, key) {
					return prefix + key.charAt(0).toUpperCase() + key.substring(1);
				}
				var prefixes = ['Webkit', 'ms', 'Moz', 'O'];
				Object.keys(isUnitlessNumber).forEach(function (prop) {
					prefixes.forEach(function (prefix) {
						isUnitlessNumber[prefixKey(prefix, prop)] = isUnitlessNumber[prop];
					});
				});
				var hasReadOnlyValue = {
					button: true,
					checkbox: true,
					image: true,
					hidden: true,
					radio: true,
					reset: true,
					submit: true,
				};
				function checkControlledValueProps(tagName, props) {
					{
						if (
							!(
								hasReadOnlyValue[props.type] ||
								props.onChange ||
								props.onInput ||
								props.readOnly ||
								props.disabled ||
								props.value == null
							)
						)
							error(
								'You provided a `value` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultValue`. Otherwise, set either `onChange` or `readOnly`.'
							);
						if (!(props.onChange || props.readOnly || props.disabled || props.checked == null))
							error(
								'You provided a `checked` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultChecked`. Otherwise, set either `onChange` or `readOnly`.'
							);
					}
				}
				function isCustomComponent(tagName, props) {
					if (tagName.indexOf('-') === -1) return typeof props.is === 'string';
					switch (tagName) {
						case 'annotation-xml':
						case 'color-profile':
						case 'font-face':
						case 'font-face-src':
						case 'font-face-uri':
						case 'font-face-format':
						case 'font-face-name':
						case 'missing-glyph':
							return false;
						default:
							return true;
					}
				}
				var ariaProperties = {
					'aria-current': 0,
					'aria-description': 0,
					'aria-details': 0,
					'aria-disabled': 0,
					'aria-hidden': 0,
					'aria-invalid': 0,
					'aria-keyshortcuts': 0,
					'aria-label': 0,
					'aria-roledescription': 0,
					'aria-autocomplete': 0,
					'aria-checked': 0,
					'aria-expanded': 0,
					'aria-haspopup': 0,
					'aria-level': 0,
					'aria-modal': 0,
					'aria-multiline': 0,
					'aria-multiselectable': 0,
					'aria-orientation': 0,
					'aria-placeholder': 0,
					'aria-pressed': 0,
					'aria-readonly': 0,
					'aria-required': 0,
					'aria-selected': 0,
					'aria-sort': 0,
					'aria-valuemax': 0,
					'aria-valuemin': 0,
					'aria-valuenow': 0,
					'aria-valuetext': 0,
					'aria-atomic': 0,
					'aria-busy': 0,
					'aria-live': 0,
					'aria-relevant': 0,
					'aria-dropeffect': 0,
					'aria-grabbed': 0,
					'aria-activedescendant': 0,
					'aria-colcount': 0,
					'aria-colindex': 0,
					'aria-colspan': 0,
					'aria-controls': 0,
					'aria-describedby': 0,
					'aria-errormessage': 0,
					'aria-flowto': 0,
					'aria-labelledby': 0,
					'aria-owns': 0,
					'aria-posinset': 0,
					'aria-rowcount': 0,
					'aria-rowindex': 0,
					'aria-rowspan': 0,
					'aria-setsize': 0,
				};
				var warnedProperties = {};
				var rARIA = new RegExp('^(aria)-[' + ATTRIBUTE_NAME_CHAR + ']*$');
				var rARIACamel = new RegExp('^(aria)[A-Z][' + ATTRIBUTE_NAME_CHAR + ']*$');
				function validateProperty(tagName, name) {
					{
						if (hasOwnProperty.call(warnedProperties, name) && warnedProperties[name]) return true;
						if (rARIACamel.test(name)) {
							var ariaName = 'aria-' + name.slice(4).toLowerCase();
							var correctName = ariaProperties.hasOwnProperty(ariaName) ? ariaName : null;
							if (correctName == null) {
								error(
									'Invalid ARIA attribute `%s`. ARIA attributes follow the pattern aria-* and must be lowercase.',
									name
								);
								warnedProperties[name] = true;
								return true;
							}
							if (name !== correctName) {
								error('Invalid ARIA attribute `%s`. Did you mean `%s`?', name, correctName);
								warnedProperties[name] = true;
								return true;
							}
						}
						if (rARIA.test(name)) {
							var lowerCasedName = name.toLowerCase();
							var standardName = ariaProperties.hasOwnProperty(lowerCasedName) ? lowerCasedName : null;
							if (standardName == null) {
								warnedProperties[name] = true;
								return false;
							}
							if (name !== standardName) {
								error('Unknown ARIA attribute `%s`. Did you mean `%s`?', name, standardName);
								warnedProperties[name] = true;
								return true;
							}
						}
					}
					return true;
				}
				function warnInvalidARIAProps(type, props) {
					{
						var invalidProps = [];
						for (var key in props) {
							var isValid = validateProperty(type, key);
							if (!isValid) invalidProps.push(key);
						}
						var unknownPropString = invalidProps
							.map(function (prop) {
								return '`' + prop + '`';
							})
							.join(', ');
						if (invalidProps.length === 1)
							error(
								'Invalid aria prop %s on <%s> tag. For details, see https://reactjs.org/link/invalid-aria-props',
								unknownPropString,
								type
							);
						else if (invalidProps.length > 1)
							error(
								'Invalid aria props %s on <%s> tag. For details, see https://reactjs.org/link/invalid-aria-props',
								unknownPropString,
								type
							);
					}
				}
				function validateProperties(type, props) {
					if (isCustomComponent(type, props)) return;
					warnInvalidARIAProps(type, props);
				}
				var didWarnValueNull = false;
				function validateProperties$1(type, props) {
					{
						if (type !== 'input' && type !== 'textarea' && type !== 'select') return;
						if (props != null && props.value === null && !didWarnValueNull) {
							didWarnValueNull = true;
							if (type === 'select' && props.multiple)
								error(
									'`value` prop on `%s` should not be null. Consider using an empty array when `multiple` is set to `true` to clear the component or `undefined` for uncontrolled components.',
									type
								);
							else
								error(
									'`value` prop on `%s` should not be null. Consider using an empty string to clear the component or `undefined` for uncontrolled components.',
									type
								);
						}
					}
				}
				var possibleStandardNames = {
					accept: 'accept',
					acceptcharset: 'acceptCharset',
					'accept-charset': 'acceptCharset',
					accesskey: 'accessKey',
					action: 'action',
					allowfullscreen: 'allowFullScreen',
					alt: 'alt',
					as: 'as',
					async: 'async',
					autocapitalize: 'autoCapitalize',
					autocomplete: 'autoComplete',
					autocorrect: 'autoCorrect',
					autofocus: 'autoFocus',
					autoplay: 'autoPlay',
					autosave: 'autoSave',
					capture: 'capture',
					cellpadding: 'cellPadding',
					cellspacing: 'cellSpacing',
					challenge: 'challenge',
					charset: 'charSet',
					checked: 'checked',
					children: 'children',
					cite: 'cite',
					class: 'className',
					classid: 'classID',
					classname: 'className',
					cols: 'cols',
					colspan: 'colSpan',
					content: 'content',
					contenteditable: 'contentEditable',
					contextmenu: 'contextMenu',
					controls: 'controls',
					controlslist: 'controlsList',
					coords: 'coords',
					crossorigin: 'crossOrigin',
					dangerouslysetinnerhtml: 'dangerouslySetInnerHTML',
					data: 'data',
					datetime: 'dateTime',
					default: 'default',
					defaultchecked: 'defaultChecked',
					defaultvalue: 'defaultValue',
					defer: 'defer',
					dir: 'dir',
					disabled: 'disabled',
					disablepictureinpicture: 'disablePictureInPicture',
					disableremoteplayback: 'disableRemotePlayback',
					download: 'download',
					draggable: 'draggable',
					enctype: 'encType',
					enterkeyhint: 'enterKeyHint',
					for: 'htmlFor',
					form: 'form',
					formmethod: 'formMethod',
					formaction: 'formAction',
					formenctype: 'formEncType',
					formnovalidate: 'formNoValidate',
					formtarget: 'formTarget',
					frameborder: 'frameBorder',
					headers: 'headers',
					height: 'height',
					hidden: 'hidden',
					high: 'high',
					href: 'href',
					hreflang: 'hrefLang',
					htmlfor: 'htmlFor',
					httpequiv: 'httpEquiv',
					'http-equiv': 'httpEquiv',
					icon: 'icon',
					id: 'id',
					imagesizes: 'imageSizes',
					imagesrcset: 'imageSrcSet',
					innerhtml: 'innerHTML',
					inputmode: 'inputMode',
					integrity: 'integrity',
					is: 'is',
					itemid: 'itemID',
					itemprop: 'itemProp',
					itemref: 'itemRef',
					itemscope: 'itemScope',
					itemtype: 'itemType',
					keyparams: 'keyParams',
					keytype: 'keyType',
					kind: 'kind',
					label: 'label',
					lang: 'lang',
					list: 'list',
					loop: 'loop',
					low: 'low',
					manifest: 'manifest',
					marginwidth: 'marginWidth',
					marginheight: 'marginHeight',
					max: 'max',
					maxlength: 'maxLength',
					media: 'media',
					mediagroup: 'mediaGroup',
					method: 'method',
					min: 'min',
					minlength: 'minLength',
					multiple: 'multiple',
					muted: 'muted',
					name: 'name',
					nomodule: 'noModule',
					nonce: 'nonce',
					novalidate: 'noValidate',
					open: 'open',
					optimum: 'optimum',
					pattern: 'pattern',
					placeholder: 'placeholder',
					playsinline: 'playsInline',
					poster: 'poster',
					preload: 'preload',
					profile: 'profile',
					radiogroup: 'radioGroup',
					readonly: 'readOnly',
					referrerpolicy: 'referrerPolicy',
					rel: 'rel',
					required: 'required',
					reversed: 'reversed',
					role: 'role',
					rows: 'rows',
					rowspan: 'rowSpan',
					sandbox: 'sandbox',
					scope: 'scope',
					scoped: 'scoped',
					scrolling: 'scrolling',
					seamless: 'seamless',
					selected: 'selected',
					shape: 'shape',
					size: 'size',
					sizes: 'sizes',
					span: 'span',
					spellcheck: 'spellCheck',
					src: 'src',
					srcdoc: 'srcDoc',
					srclang: 'srcLang',
					srcset: 'srcSet',
					start: 'start',
					step: 'step',
					style: 'style',
					summary: 'summary',
					tabindex: 'tabIndex',
					target: 'target',
					title: 'title',
					type: 'type',
					usemap: 'useMap',
					value: 'value',
					width: 'width',
					wmode: 'wmode',
					wrap: 'wrap',
					about: 'about',
					accentheight: 'accentHeight',
					'accent-height': 'accentHeight',
					accumulate: 'accumulate',
					additive: 'additive',
					alignmentbaseline: 'alignmentBaseline',
					'alignment-baseline': 'alignmentBaseline',
					allowreorder: 'allowReorder',
					alphabetic: 'alphabetic',
					amplitude: 'amplitude',
					arabicform: 'arabicForm',
					'arabic-form': 'arabicForm',
					ascent: 'ascent',
					attributename: 'attributeName',
					attributetype: 'attributeType',
					autoreverse: 'autoReverse',
					azimuth: 'azimuth',
					basefrequency: 'baseFrequency',
					baselineshift: 'baselineShift',
					'baseline-shift': 'baselineShift',
					baseprofile: 'baseProfile',
					bbox: 'bbox',
					begin: 'begin',
					bias: 'bias',
					by: 'by',
					calcmode: 'calcMode',
					capheight: 'capHeight',
					'cap-height': 'capHeight',
					clip: 'clip',
					clippath: 'clipPath',
					'clip-path': 'clipPath',
					clippathunits: 'clipPathUnits',
					cliprule: 'clipRule',
					'clip-rule': 'clipRule',
					color: 'color',
					colorinterpolation: 'colorInterpolation',
					'color-interpolation': 'colorInterpolation',
					colorinterpolationfilters: 'colorInterpolationFilters',
					'color-interpolation-filters': 'colorInterpolationFilters',
					colorprofile: 'colorProfile',
					'color-profile': 'colorProfile',
					colorrendering: 'colorRendering',
					'color-rendering': 'colorRendering',
					contentscripttype: 'contentScriptType',
					contentstyletype: 'contentStyleType',
					cursor: 'cursor',
					cx: 'cx',
					cy: 'cy',
					d: 'd',
					datatype: 'datatype',
					decelerate: 'decelerate',
					descent: 'descent',
					diffuseconstant: 'diffuseConstant',
					direction: 'direction',
					display: 'display',
					divisor: 'divisor',
					dominantbaseline: 'dominantBaseline',
					'dominant-baseline': 'dominantBaseline',
					dur: 'dur',
					dx: 'dx',
					dy: 'dy',
					edgemode: 'edgeMode',
					elevation: 'elevation',
					enablebackground: 'enableBackground',
					'enable-background': 'enableBackground',
					end: 'end',
					exponent: 'exponent',
					externalresourcesrequired: 'externalResourcesRequired',
					fill: 'fill',
					fillopacity: 'fillOpacity',
					'fill-opacity': 'fillOpacity',
					fillrule: 'fillRule',
					'fill-rule': 'fillRule',
					filter: 'filter',
					filterres: 'filterRes',
					filterunits: 'filterUnits',
					floodopacity: 'floodOpacity',
					'flood-opacity': 'floodOpacity',
					floodcolor: 'floodColor',
					'flood-color': 'floodColor',
					focusable: 'focusable',
					fontfamily: 'fontFamily',
					'font-family': 'fontFamily',
					fontsize: 'fontSize',
					'font-size': 'fontSize',
					fontsizeadjust: 'fontSizeAdjust',
					'font-size-adjust': 'fontSizeAdjust',
					fontstretch: 'fontStretch',
					'font-stretch': 'fontStretch',
					fontstyle: 'fontStyle',
					'font-style': 'fontStyle',
					fontvariant: 'fontVariant',
					'font-variant': 'fontVariant',
					fontweight: 'fontWeight',
					'font-weight': 'fontWeight',
					format: 'format',
					from: 'from',
					fx: 'fx',
					fy: 'fy',
					g1: 'g1',
					g2: 'g2',
					glyphname: 'glyphName',
					'glyph-name': 'glyphName',
					glyphorientationhorizontal: 'glyphOrientationHorizontal',
					'glyph-orientation-horizontal': 'glyphOrientationHorizontal',
					glyphorientationvertical: 'glyphOrientationVertical',
					'glyph-orientation-vertical': 'glyphOrientationVertical',
					glyphref: 'glyphRef',
					gradienttransform: 'gradientTransform',
					gradientunits: 'gradientUnits',
					hanging: 'hanging',
					horizadvx: 'horizAdvX',
					'horiz-adv-x': 'horizAdvX',
					horizoriginx: 'horizOriginX',
					'horiz-origin-x': 'horizOriginX',
					ideographic: 'ideographic',
					imagerendering: 'imageRendering',
					'image-rendering': 'imageRendering',
					in2: 'in2',
					in: 'in',
					inlist: 'inlist',
					intercept: 'intercept',
					k1: 'k1',
					k2: 'k2',
					k3: 'k3',
					k4: 'k4',
					k: 'k',
					kernelmatrix: 'kernelMatrix',
					kernelunitlength: 'kernelUnitLength',
					kerning: 'kerning',
					keypoints: 'keyPoints',
					keysplines: 'keySplines',
					keytimes: 'keyTimes',
					lengthadjust: 'lengthAdjust',
					letterspacing: 'letterSpacing',
					'letter-spacing': 'letterSpacing',
					lightingcolor: 'lightingColor',
					'lighting-color': 'lightingColor',
					limitingconeangle: 'limitingConeAngle',
					local: 'local',
					markerend: 'markerEnd',
					'marker-end': 'markerEnd',
					markerheight: 'markerHeight',
					markermid: 'markerMid',
					'marker-mid': 'markerMid',
					markerstart: 'markerStart',
					'marker-start': 'markerStart',
					markerunits: 'markerUnits',
					markerwidth: 'markerWidth',
					mask: 'mask',
					maskcontentunits: 'maskContentUnits',
					maskunits: 'maskUnits',
					mathematical: 'mathematical',
					mode: 'mode',
					numoctaves: 'numOctaves',
					offset: 'offset',
					opacity: 'opacity',
					operator: 'operator',
					order: 'order',
					orient: 'orient',
					orientation: 'orientation',
					origin: 'origin',
					overflow: 'overflow',
					overlineposition: 'overlinePosition',
					'overline-position': 'overlinePosition',
					overlinethickness: 'overlineThickness',
					'overline-thickness': 'overlineThickness',
					paintorder: 'paintOrder',
					'paint-order': 'paintOrder',
					panose1: 'panose1',
					'panose-1': 'panose1',
					pathlength: 'pathLength',
					patterncontentunits: 'patternContentUnits',
					patterntransform: 'patternTransform',
					patternunits: 'patternUnits',
					pointerevents: 'pointerEvents',
					'pointer-events': 'pointerEvents',
					points: 'points',
					pointsatx: 'pointsAtX',
					pointsaty: 'pointsAtY',
					pointsatz: 'pointsAtZ',
					prefix: 'prefix',
					preservealpha: 'preserveAlpha',
					preserveaspectratio: 'preserveAspectRatio',
					primitiveunits: 'primitiveUnits',
					property: 'property',
					r: 'r',
					radius: 'radius',
					refx: 'refX',
					refy: 'refY',
					renderingintent: 'renderingIntent',
					'rendering-intent': 'renderingIntent',
					repeatcount: 'repeatCount',
					repeatdur: 'repeatDur',
					requiredextensions: 'requiredExtensions',
					requiredfeatures: 'requiredFeatures',
					resource: 'resource',
					restart: 'restart',
					result: 'result',
					results: 'results',
					rotate: 'rotate',
					rx: 'rx',
					ry: 'ry',
					scale: 'scale',
					security: 'security',
					seed: 'seed',
					shaperendering: 'shapeRendering',
					'shape-rendering': 'shapeRendering',
					slope: 'slope',
					spacing: 'spacing',
					specularconstant: 'specularConstant',
					specularexponent: 'specularExponent',
					speed: 'speed',
					spreadmethod: 'spreadMethod',
					startoffset: 'startOffset',
					stddeviation: 'stdDeviation',
					stemh: 'stemh',
					stemv: 'stemv',
					stitchtiles: 'stitchTiles',
					stopcolor: 'stopColor',
					'stop-color': 'stopColor',
					stopopacity: 'stopOpacity',
					'stop-opacity': 'stopOpacity',
					strikethroughposition: 'strikethroughPosition',
					'strikethrough-position': 'strikethroughPosition',
					strikethroughthickness: 'strikethroughThickness',
					'strikethrough-thickness': 'strikethroughThickness',
					string: 'string',
					stroke: 'stroke',
					strokedasharray: 'strokeDasharray',
					'stroke-dasharray': 'strokeDasharray',
					strokedashoffset: 'strokeDashoffset',
					'stroke-dashoffset': 'strokeDashoffset',
					strokelinecap: 'strokeLinecap',
					'stroke-linecap': 'strokeLinecap',
					strokelinejoin: 'strokeLinejoin',
					'stroke-linejoin': 'strokeLinejoin',
					strokemiterlimit: 'strokeMiterlimit',
					'stroke-miterlimit': 'strokeMiterlimit',
					strokewidth: 'strokeWidth',
					'stroke-width': 'strokeWidth',
					strokeopacity: 'strokeOpacity',
					'stroke-opacity': 'strokeOpacity',
					suppresscontenteditablewarning: 'suppressContentEditableWarning',
					suppresshydrationwarning: 'suppressHydrationWarning',
					surfacescale: 'surfaceScale',
					systemlanguage: 'systemLanguage',
					tablevalues: 'tableValues',
					targetx: 'targetX',
					targety: 'targetY',
					textanchor: 'textAnchor',
					'text-anchor': 'textAnchor',
					textdecoration: 'textDecoration',
					'text-decoration': 'textDecoration',
					textlength: 'textLength',
					textrendering: 'textRendering',
					'text-rendering': 'textRendering',
					to: 'to',
					transform: 'transform',
					typeof: 'typeof',
					u1: 'u1',
					u2: 'u2',
					underlineposition: 'underlinePosition',
					'underline-position': 'underlinePosition',
					underlinethickness: 'underlineThickness',
					'underline-thickness': 'underlineThickness',
					unicode: 'unicode',
					unicodebidi: 'unicodeBidi',
					'unicode-bidi': 'unicodeBidi',
					unicoderange: 'unicodeRange',
					'unicode-range': 'unicodeRange',
					unitsperem: 'unitsPerEm',
					'units-per-em': 'unitsPerEm',
					unselectable: 'unselectable',
					valphabetic: 'vAlphabetic',
					'v-alphabetic': 'vAlphabetic',
					values: 'values',
					vectoreffect: 'vectorEffect',
					'vector-effect': 'vectorEffect',
					version: 'version',
					vertadvy: 'vertAdvY',
					'vert-adv-y': 'vertAdvY',
					vertoriginx: 'vertOriginX',
					'vert-origin-x': 'vertOriginX',
					vertoriginy: 'vertOriginY',
					'vert-origin-y': 'vertOriginY',
					vhanging: 'vHanging',
					'v-hanging': 'vHanging',
					videographic: 'vIdeographic',
					'v-ideographic': 'vIdeographic',
					viewbox: 'viewBox',
					viewtarget: 'viewTarget',
					visibility: 'visibility',
					vmathematical: 'vMathematical',
					'v-mathematical': 'vMathematical',
					vocab: 'vocab',
					widths: 'widths',
					wordspacing: 'wordSpacing',
					'word-spacing': 'wordSpacing',
					writingmode: 'writingMode',
					'writing-mode': 'writingMode',
					x1: 'x1',
					x2: 'x2',
					x: 'x',
					xchannelselector: 'xChannelSelector',
					xheight: 'xHeight',
					'x-height': 'xHeight',
					xlinkactuate: 'xlinkActuate',
					'xlink:actuate': 'xlinkActuate',
					xlinkarcrole: 'xlinkArcrole',
					'xlink:arcrole': 'xlinkArcrole',
					xlinkhref: 'xlinkHref',
					'xlink:href': 'xlinkHref',
					xlinkrole: 'xlinkRole',
					'xlink:role': 'xlinkRole',
					xlinkshow: 'xlinkShow',
					'xlink:show': 'xlinkShow',
					xlinktitle: 'xlinkTitle',
					'xlink:title': 'xlinkTitle',
					xlinktype: 'xlinkType',
					'xlink:type': 'xlinkType',
					xmlbase: 'xmlBase',
					'xml:base': 'xmlBase',
					xmllang: 'xmlLang',
					'xml:lang': 'xmlLang',
					xmlns: 'xmlns',
					'xml:space': 'xmlSpace',
					xmlnsxlink: 'xmlnsXlink',
					'xmlns:xlink': 'xmlnsXlink',
					xmlspace: 'xmlSpace',
					y1: 'y1',
					y2: 'y2',
					y: 'y',
					ychannelselector: 'yChannelSelector',
					z: 'z',
					zoomandpan: 'zoomAndPan',
				};
				var validateProperty$1 = function () {};
				{
					var warnedProperties$1 = {};
					var EVENT_NAME_REGEX = /^on./;
					var INVALID_EVENT_NAME_REGEX = /^on[^A-Z]/;
					var rARIA$1 = new RegExp('^(aria)-[' + ATTRIBUTE_NAME_CHAR + ']*$');
					var rARIACamel$1 = new RegExp('^(aria)[A-Z][' + ATTRIBUTE_NAME_CHAR + ']*$');
					validateProperty$1 = function (tagName, name, value, eventRegistry) {
						if (hasOwnProperty.call(warnedProperties$1, name) && warnedProperties$1[name]) return true;
						var lowerCasedName = name.toLowerCase();
						if (lowerCasedName === 'onfocusin' || lowerCasedName === 'onfocusout') {
							error(
								'React uses onFocus and onBlur instead of onFocusIn and onFocusOut. All React events are normalized to bubble, so onFocusIn and onFocusOut are not needed/supported by React.'
							);
							warnedProperties$1[name] = true;
							return true;
						}
						if (eventRegistry != null) {
							var registrationNameDependencies = eventRegistry.registrationNameDependencies,
								possibleRegistrationNames = eventRegistry.possibleRegistrationNames;
							if (registrationNameDependencies.hasOwnProperty(name)) return true;
							var registrationName = possibleRegistrationNames.hasOwnProperty(lowerCasedName)
								? possibleRegistrationNames[lowerCasedName]
								: null;
							if (registrationName != null) {
								error(
									'Invalid event handler property `%s`. Did you mean `%s`?',
									name,
									registrationName
								);
								warnedProperties$1[name] = true;
								return true;
							}
							if (EVENT_NAME_REGEX.test(name)) {
								error('Unknown event handler property `%s`. It will be ignored.', name);
								warnedProperties$1[name] = true;
								return true;
							}
						} else if (EVENT_NAME_REGEX.test(name)) {
							if (INVALID_EVENT_NAME_REGEX.test(name))
								error(
									'Invalid event handler property `%s`. React events use the camelCase naming convention, for example `onClick`.',
									name
								);
							warnedProperties$1[name] = true;
							return true;
						}
						if (rARIA$1.test(name) || rARIACamel$1.test(name)) return true;
						if (lowerCasedName === 'innerhtml') {
							error(
								'Directly setting property `innerHTML` is not permitted. For more information, lookup documentation on `dangerouslySetInnerHTML`.'
							);
							warnedProperties$1[name] = true;
							return true;
						}
						if (lowerCasedName === 'aria') {
							error(
								'The `aria` attribute is reserved for future use in React. Pass individual `aria-` attributes instead.'
							);
							warnedProperties$1[name] = true;
							return true;
						}
						if (
							lowerCasedName === 'is' &&
							value !== null &&
							value !== undefined &&
							typeof value !== 'string'
						) {
							error(
								'Received a `%s` for a string attribute `is`. If this is expected, cast the value to a string.',
								typeof value
							);
							warnedProperties$1[name] = true;
							return true;
						}
						if (typeof value === 'number' && isNaN(value)) {
							error(
								'Received NaN for the `%s` attribute. If this is expected, cast the value to a string.',
								name
							);
							warnedProperties$1[name] = true;
							return true;
						}
						var propertyInfo = getPropertyInfo(name);
						var isReserved = propertyInfo !== null && propertyInfo.type === RESERVED;
						if (possibleStandardNames.hasOwnProperty(lowerCasedName)) {
							var standardName = possibleStandardNames[lowerCasedName];
							if (standardName !== name) {
								error('Invalid DOM property `%s`. Did you mean `%s`?', name, standardName);
								warnedProperties$1[name] = true;
								return true;
							}
						} else if (!isReserved && name !== lowerCasedName) {
							error(
								'React does not recognize the `%s` prop on a DOM element. If you intentionally want it to appear in the DOM as a custom attribute, spell it as lowercase `%s` instead. If you accidentally passed it from a parent component, remove it from the DOM element.',
								name,
								lowerCasedName
							);
							warnedProperties$1[name] = true;
							return true;
						}
						if (
							typeof value === 'boolean' &&
							shouldRemoveAttributeWithWarning(name, value, propertyInfo, false)
						) {
							if (value)
								error(
									'Received `%s` for a non-boolean attribute `%s`.\n\nIf you want to write it to the DOM, pass a string instead: %s="%s" or %s={value.toString()}.',
									value,
									name,
									name,
									value,
									name
								);
							else
								error(
									'Received `%s` for a non-boolean attribute `%s`.\n\nIf you want to write it to the DOM, pass a string instead: %s="%s" or %s={value.toString()}.\n\nIf you used to conditionally omit it with %s={condition && value}, pass %s={condition ? value : undefined} instead.',
									value,
									name,
									name,
									value,
									name,
									name,
									name
								);
							warnedProperties$1[name] = true;
							return true;
						}
						if (isReserved) return true;
						if (shouldRemoveAttributeWithWarning(name, value, propertyInfo, false)) {
							warnedProperties$1[name] = true;
							return false;
						}
						if (
							(value === 'false' || value === 'true') &&
							propertyInfo !== null &&
							propertyInfo.type === BOOLEAN
						) {
							error(
								'Received the string `%s` for the boolean attribute `%s`. %s Did you mean %s={%s}?',
								value,
								name,
								value === 'false'
									? 'The browser will interpret it as a truthy value.'
									: 'Although this works, it will not work as expected if you pass the string "false".',
								name,
								value
							);
							warnedProperties$1[name] = true;
							return true;
						}
						return true;
					};
				}
				var warnUnknownProperties = function (type, props, eventRegistry) {
					{
						var unknownProps = [];
						for (var key in props) {
							var isValid = validateProperty$1(type, key, props[key], eventRegistry);
							if (!isValid) unknownProps.push(key);
						}
						var unknownPropString = unknownProps
							.map(function (prop) {
								return '`' + prop + '`';
							})
							.join(', ');
						if (unknownProps.length === 1)
							error(
								'Invalid value for prop %s on <%s> tag. Either remove it from the element, or pass a string or number value to keep it in the DOM. For details, see https://reactjs.org/link/attribute-behavior ',
								unknownPropString,
								type
							);
						else if (unknownProps.length > 1)
							error(
								'Invalid values for props %s on <%s> tag. Either remove them from the element, or pass a string or number value to keep them in the DOM. For details, see https://reactjs.org/link/attribute-behavior ',
								unknownPropString,
								type
							);
					}
				};
				function validateProperties$2(type, props, eventRegistry) {
					if (isCustomComponent(type, props)) return;
					warnUnknownProperties(type, props, eventRegistry);
				}
				var warnValidStyle = function () {};
				{
					var badVendoredStyleNamePattern = /^(?:webkit|moz|o)[A-Z]/;
					var msPattern = /^-ms-/;
					var hyphenPattern = /-(.)/g;
					var badStyleValueWithSemicolonPattern = /;\s*$/;
					var warnedStyleNames = {};
					var warnedStyleValues = {};
					var warnedForNaNValue = false;
					var warnedForInfinityValue = false;
					var camelize = function (string) {
						return string.replace(hyphenPattern, function (_, character) {
							return character.toUpperCase();
						});
					};
					var warnHyphenatedStyleName = function (name) {
						if (warnedStyleNames.hasOwnProperty(name) && warnedStyleNames[name]) return;
						warnedStyleNames[name] = true;
						error(
							'Unsupported style property %s. Did you mean %s?',
							name,
							camelize(name.replace(msPattern, 'ms-'))
						);
					};
					var warnBadVendoredStyleName = function (name) {
						if (warnedStyleNames.hasOwnProperty(name) && warnedStyleNames[name]) return;
						warnedStyleNames[name] = true;
						error(
							'Unsupported vendor-prefixed style property %s. Did you mean %s?',
							name,
							name.charAt(0).toUpperCase() + name.slice(1)
						);
					};
					var warnStyleValueWithSemicolon = function (name, value) {
						if (warnedStyleValues.hasOwnProperty(value) && warnedStyleValues[value]) return;
						warnedStyleValues[value] = true;
						error(
							`Style property values shouldn't contain a semicolon. Try "%s: %s" instead.`,
							name,
							value.replace(badStyleValueWithSemicolonPattern, '')
						);
					};
					var warnStyleValueIsNaN = function (name, value) {
						if (warnedForNaNValue) return;
						warnedForNaNValue = true;
						error('`NaN` is an invalid value for the `%s` css style property.', name);
					};
					var warnStyleValueIsInfinity = function (name, value) {
						if (warnedForInfinityValue) return;
						warnedForInfinityValue = true;
						error('`Infinity` is an invalid value for the `%s` css style property.', name);
					};
					warnValidStyle = function (name, value) {
						if (name.indexOf('-') > -1) warnHyphenatedStyleName(name);
						else if (badVendoredStyleNamePattern.test(name)) warnBadVendoredStyleName(name);
						else if (badStyleValueWithSemicolonPattern.test(value))
							warnStyleValueWithSemicolon(name, value);
						if (typeof value === 'number') {
							if (isNaN(value)) warnStyleValueIsNaN(name, value);
							else if (!isFinite(value)) warnStyleValueIsInfinity(name, value);
						}
					};
				}
				var warnValidStyle$1 = warnValidStyle;
				var matchHtmlRegExp = /["'&<>]/;
				function escapeHtml(string) {
					checkHtmlStringCoercion(string);
					var str = '' + string;
					var match = matchHtmlRegExp.exec(str);
					if (!match) return str;
					var escape;
					var html = '';
					var index;
					var lastIndex = 0;
					for (index = match.index; index < str.length; index++) {
						switch (str.charCodeAt(index)) {
							case 34:
								escape = '&quot;';
								break;
							case 38:
								escape = '&amp;';
								break;
							case 39:
								escape = '&#x27;';
								break;
							case 60:
								escape = '&lt;';
								break;
							case 62:
								escape = '&gt;';
								break;
							default:
								continue;
						}
						if (lastIndex !== index) html += str.substring(lastIndex, index);
						lastIndex = index + 1;
						html += escape;
					}
					return lastIndex !== index ? html + str.substring(lastIndex, index) : html;
				}
				function escapeTextForBrowser(text) {
					if (typeof text === 'boolean' || typeof text === 'number') return '' + text;
					return escapeHtml(text);
				}
				var uppercasePattern = /([A-Z])/g;
				var msPattern$1 = /^ms-/;
				function hyphenateStyleName(name) {
					return name.replace(uppercasePattern, '-$1').toLowerCase().replace(msPattern$1, '-ms-');
				}
				var isJavaScriptProtocol =
					/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*\:/i;
				var didWarn = false;
				function sanitizeURL(url) {
					if (!didWarn && isJavaScriptProtocol.test(url)) {
						didWarn = true;
						error(
							'A future version of React will block javascript: URLs as a security precaution. Use event handlers instead if you can. If you need to generate unsafe HTML try using dangerouslySetInnerHTML instead. React was passed %s.',
							JSON.stringify(url)
						);
					}
				}
				var isArrayImpl = Array.isArray;
				function isArray(a) {
					return isArrayImpl(a);
				}
				var startInlineScript = stringToPrecomputedChunk('<script>');
				var endInlineScript = stringToPrecomputedChunk('</script>');
				var startScriptSrc = stringToPrecomputedChunk('<script src="');
				var startModuleSrc = stringToPrecomputedChunk('<script type="module" src="');
				var endAsyncScript = stringToPrecomputedChunk('" async=""></script>');
				function escapeBootstrapScriptContent(scriptText) {
					checkHtmlStringCoercion(scriptText);
					return ('' + scriptText).replace(scriptRegex, scriptReplacer);
				}
				var scriptRegex = /(<\/|<)(s)(cript)/gi;
				var scriptReplacer = function (match, prefix, s, suffix) {
					return '' + prefix + (s === 's' ? '\\u0073' : '\\u0053') + suffix;
				};
				function createResponseState(
					identifierPrefix,
					nonce,
					bootstrapScriptContent,
					bootstrapScripts,
					bootstrapModules
				) {
					var idPrefix = identifierPrefix === undefined ? '' : identifierPrefix;
					var inlineScriptWithNonce =
						nonce === undefined
							? startInlineScript
							: stringToPrecomputedChunk('<script nonce="' + escapeTextForBrowser(nonce) + '">');
					var bootstrapChunks = [];
					if (bootstrapScriptContent !== undefined)
						bootstrapChunks.push(
							inlineScriptWithNonce,
							stringToChunk(escapeBootstrapScriptContent(bootstrapScriptContent)),
							endInlineScript
						);
					if (bootstrapScripts !== undefined)
						for (var i = 0; i < bootstrapScripts.length; i++)
							bootstrapChunks.push(
								startScriptSrc,
								stringToChunk(escapeTextForBrowser(bootstrapScripts[i])),
								endAsyncScript
							);
					if (bootstrapModules !== undefined)
						for (var _i = 0; _i < bootstrapModules.length; _i++)
							bootstrapChunks.push(
								startModuleSrc,
								stringToChunk(escapeTextForBrowser(bootstrapModules[_i])),
								endAsyncScript
							);
					return {
						bootstrapChunks,
						startInlineScript: inlineScriptWithNonce,
						placeholderPrefix: stringToPrecomputedChunk(idPrefix + 'P:'),
						segmentPrefix: stringToPrecomputedChunk(idPrefix + 'S:'),
						boundaryPrefix: idPrefix + 'B:',
						idPrefix,
						nextSuspenseID: 0,
						sentCompleteSegmentFunction: false,
						sentCompleteBoundaryFunction: false,
						sentClientRenderFunction: false,
					};
				}
				var ROOT_HTML_MODE = 0;
				var HTML_MODE = 1;
				var SVG_MODE = 2;
				var MATHML_MODE = 3;
				var HTML_TABLE_MODE = 4;
				var HTML_TABLE_BODY_MODE = 5;
				var HTML_TABLE_ROW_MODE = 6;
				var HTML_COLGROUP_MODE = 7;
				function createFormatContext(insertionMode, selectedValue) {
					return {
						insertionMode,
						selectedValue,
					};
				}
				function getChildFormatContext(parentContext, type, props) {
					switch (type) {
						case 'select':
							return createFormatContext(
								HTML_MODE,
								props.value != null ? props.value : props.defaultValue
							);
						case 'svg':
							return createFormatContext(SVG_MODE, null);
						case 'math':
							return createFormatContext(MATHML_MODE, null);
						case 'foreignObject':
							return createFormatContext(HTML_MODE, null);
						case 'table':
							return createFormatContext(HTML_TABLE_MODE, null);
						case 'thead':
						case 'tbody':
						case 'tfoot':
							return createFormatContext(HTML_TABLE_BODY_MODE, null);
						case 'colgroup':
							return createFormatContext(HTML_COLGROUP_MODE, null);
						case 'tr':
							return createFormatContext(HTML_TABLE_ROW_MODE, null);
					}
					if (parentContext.insertionMode >= HTML_TABLE_MODE) return createFormatContext(HTML_MODE, null);
					if (parentContext.insertionMode === ROOT_HTML_MODE) return createFormatContext(HTML_MODE, null);
					return parentContext;
				}
				var UNINITIALIZED_SUSPENSE_BOUNDARY_ID = null;
				function assignSuspenseBoundaryID(responseState) {
					var generatedID = responseState.nextSuspenseID++;
					return stringToPrecomputedChunk(responseState.boundaryPrefix + generatedID.toString(16));
				}
				function makeId(responseState, treeId, localId) {
					var idPrefix = responseState.idPrefix;
					var id = ':' + idPrefix + 'R' + treeId;
					if (localId > 0) id += 'H' + localId.toString(32);
					return id + ':';
				}
				function encodeHTMLTextNode(text) {
					return escapeTextForBrowser(text);
				}
				var textSeparator = stringToPrecomputedChunk('<!-- -->');
				function pushTextInstance(target, text, responseState, textEmbedded) {
					if (text === '') return textEmbedded;
					if (textEmbedded) target.push(textSeparator);
					target.push(stringToChunk(encodeHTMLTextNode(text)));
					return true;
				}
				function pushSegmentFinale(target, responseState, lastPushedText, textEmbedded) {
					if (lastPushedText && textEmbedded) target.push(textSeparator);
				}
				var styleNameCache = new Map();
				function processStyleName(styleName) {
					var chunk = styleNameCache.get(styleName);
					if (chunk !== undefined) return chunk;
					var result = stringToPrecomputedChunk(escapeTextForBrowser(hyphenateStyleName(styleName)));
					styleNameCache.set(styleName, result);
					return result;
				}
				var styleAttributeStart = stringToPrecomputedChunk(' style="');
				var styleAssign = stringToPrecomputedChunk(':');
				var styleSeparator = stringToPrecomputedChunk(';');
				function pushStyle(target, responseState, style) {
					if (typeof style !== 'object')
						throw new Error(
							"The `style` prop expects a mapping from style properties to values, not a string. For example, style={{marginRight: spacing + 'em'}} when using JSX."
						);
					var isFirst = true;
					for (var styleName in style) {
						if (!hasOwnProperty.call(style, styleName)) continue;
						var styleValue = style[styleName];
						if (styleValue == null || typeof styleValue === 'boolean' || styleValue === '') continue;
						var nameChunk = undefined;
						var valueChunk = undefined;
						var isCustomProperty = styleName.indexOf('--') === 0;
						if (isCustomProperty) {
							nameChunk = stringToChunk(escapeTextForBrowser(styleName));
							checkCSSPropertyStringCoercion(styleValue, styleName);
							valueChunk = stringToChunk(escapeTextForBrowser(('' + styleValue).trim()));
						} else {
							warnValidStyle$1(styleName, styleValue);
							nameChunk = processStyleName(styleName);
							if (typeof styleValue === 'number')
								if (styleValue !== 0 && !hasOwnProperty.call(isUnitlessNumber, styleName))
									valueChunk = stringToChunk(styleValue + 'px');
								else valueChunk = stringToChunk('' + styleValue);
							else {
								checkCSSPropertyStringCoercion(styleValue, styleName);
								valueChunk = stringToChunk(escapeTextForBrowser(('' + styleValue).trim()));
							}
						}
						if (isFirst) {
							isFirst = false;
							target.push(styleAttributeStart, nameChunk, styleAssign, valueChunk);
						} else target.push(styleSeparator, nameChunk, styleAssign, valueChunk);
					}
					if (!isFirst) target.push(attributeEnd);
				}
				var attributeSeparator = stringToPrecomputedChunk(' ');
				var attributeAssign = stringToPrecomputedChunk('="');
				var attributeEnd = stringToPrecomputedChunk('"');
				var attributeEmptyString = stringToPrecomputedChunk('=""');
				function pushAttribute(target, responseState, name, value) {
					switch (name) {
						case 'style': {
							pushStyle(target, responseState, value);
							return;
						}
						case 'defaultValue':
						case 'defaultChecked':
						case 'innerHTML':
						case 'suppressContentEditableWarning':
						case 'suppressHydrationWarning':
							return;
					}
					if (name.length > 2 && (name[0] === 'o' || name[0] === 'O') && (name[1] === 'n' || name[1] === 'N'))
						return;
					var propertyInfo = getPropertyInfo(name);
					if (propertyInfo !== null) {
						switch (typeof value) {
							case 'function':
							case 'symbol':
								return;
							case 'boolean':
								if (!propertyInfo.acceptsBooleans) return;
						}
						var attributeName = propertyInfo.attributeName;
						var attributeNameChunk = stringToChunk(attributeName);
						switch (propertyInfo.type) {
							case BOOLEAN:
								if (value) target.push(attributeSeparator, attributeNameChunk, attributeEmptyString);
								return;
							case OVERLOADED_BOOLEAN:
								if (value === true)
									target.push(attributeSeparator, attributeNameChunk, attributeEmptyString);
								else if (value === false);
								else
									target.push(
										attributeSeparator,
										attributeNameChunk,
										attributeAssign,
										stringToChunk(escapeTextForBrowser(value)),
										attributeEnd
									);
								return;
							case NUMERIC:
								if (!isNaN(value))
									target.push(
										attributeSeparator,
										attributeNameChunk,
										attributeAssign,
										stringToChunk(escapeTextForBrowser(value)),
										attributeEnd
									);
								break;
							case POSITIVE_NUMERIC:
								if (!isNaN(value) && value >= 1)
									target.push(
										attributeSeparator,
										attributeNameChunk,
										attributeAssign,
										stringToChunk(escapeTextForBrowser(value)),
										attributeEnd
									);
								break;
							default:
								if (propertyInfo.sanitizeURL) {
									checkAttributeStringCoercion(value, attributeName);
									value = '' + value;
									sanitizeURL(value);
								}
								target.push(
									attributeSeparator,
									attributeNameChunk,
									attributeAssign,
									stringToChunk(escapeTextForBrowser(value)),
									attributeEnd
								);
						}
					} else if (isAttributeNameSafe(name)) {
						switch (typeof value) {
							case 'function':
							case 'symbol':
								return;
							case 'boolean': {
								var prefix = name.toLowerCase().slice(0, 5);
								if (prefix !== 'data-' && prefix !== 'aria-') return;
							}
						}
						target.push(
							attributeSeparator,
							stringToChunk(name),
							attributeAssign,
							stringToChunk(escapeTextForBrowser(value)),
							attributeEnd
						);
					}
				}
				var endOfStartTag = stringToPrecomputedChunk('>');
				var endOfStartTagSelfClosing = stringToPrecomputedChunk('/>');
				function pushInnerHTML(target, innerHTML, children) {
					if (innerHTML != null) {
						if (children != null)
							throw new Error('Can only set one of `children` or `props.dangerouslySetInnerHTML`.');
						if (typeof innerHTML !== 'object' || !('__html' in innerHTML))
							throw new Error(
								'`props.dangerouslySetInnerHTML` must be in the form `{__html: ...}`. Please visit https://reactjs.org/link/dangerously-set-inner-html for more information.'
							);
						var html = innerHTML.__html;
						if (html !== null && html !== undefined) {
							checkHtmlStringCoercion(html);
							target.push(stringToChunk('' + html));
						}
					}
				}
				var didWarnDefaultInputValue = false;
				var didWarnDefaultChecked = false;
				var didWarnDefaultSelectValue = false;
				var didWarnDefaultTextareaValue = false;
				var didWarnInvalidOptionChildren = false;
				var didWarnInvalidOptionInnerHTML = false;
				var didWarnSelectedSetOnOption = false;
				function checkSelectProp(props, propName) {
					{
						var value = props[propName];
						if (value != null) {
							var array = isArray(value);
							if (props.multiple && !array)
								error(
									'The `%s` prop supplied to <select> must be an array if `multiple` is true.',
									propName
								);
							else if (!props.multiple && array)
								error(
									'The `%s` prop supplied to <select> must be a scalar value if `multiple` is false.',
									propName
								);
						}
					}
				}
				function pushStartSelect(target, props, responseState) {
					{
						checkControlledValueProps('select', props);
						checkSelectProp(props, 'value');
						checkSelectProp(props, 'defaultValue');
						if (
							props.value !== undefined &&
							props.defaultValue !== undefined &&
							!didWarnDefaultSelectValue
						) {
							error(
								'Select elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled select element and remove one of these props. More info: https://reactjs.org/link/controlled-components'
							);
							didWarnDefaultSelectValue = true;
						}
					}
					target.push(startChunkForTag('select'));
					var children = null;
					var innerHTML = null;
					for (var propKey in props)
						if (hasOwnProperty.call(props, propKey)) {
							var propValue = props[propKey];
							if (propValue == null) continue;
							switch (propKey) {
								case 'children':
									children = propValue;
									break;
								case 'dangerouslySetInnerHTML':
									innerHTML = propValue;
									break;
								case 'defaultValue':
								case 'value':
									break;
								default:
									pushAttribute(target, responseState, propKey, propValue);
									break;
							}
						}
					target.push(endOfStartTag);
					pushInnerHTML(target, innerHTML, children);
					return children;
				}
				function flattenOptionChildren(children) {
					var content = '';
					React.Children.forEach(children, function (child) {
						if (child == null) return;
						content += child;
						if (!didWarnInvalidOptionChildren && typeof child !== 'string' && typeof child !== 'number') {
							didWarnInvalidOptionChildren = true;
							error(
								'Cannot infer the option value of complex children. Pass a `value` prop or use a plain string as children to <option>.'
							);
						}
					});
					return content;
				}
				var selectedMarkerAttribute = stringToPrecomputedChunk(' selected=""');
				function pushStartOption(target, props, responseState, formatContext) {
					var selectedValue = formatContext.selectedValue;
					target.push(startChunkForTag('option'));
					var children = null;
					var value = null;
					var selected = null;
					var innerHTML = null;
					for (var propKey in props)
						if (hasOwnProperty.call(props, propKey)) {
							var propValue = props[propKey];
							if (propValue == null) continue;
							switch (propKey) {
								case 'children':
									children = propValue;
									break;
								case 'selected':
									selected = propValue;
									if (!didWarnSelectedSetOnOption) {
										error(
											'Use the `defaultValue` or `value` props on <select> instead of setting `selected` on <option>.'
										);
										didWarnSelectedSetOnOption = true;
									}
									break;
								case 'dangerouslySetInnerHTML':
									innerHTML = propValue;
									break;
								case 'value':
									value = propValue;
								default:
									pushAttribute(target, responseState, propKey, propValue);
									break;
							}
						}
					if (selectedValue != null) {
						var stringValue;
						if (value !== null) {
							checkAttributeStringCoercion(value, 'value');
							stringValue = '' + value;
						} else {
							if (innerHTML !== null) {
								if (!didWarnInvalidOptionInnerHTML) {
									didWarnInvalidOptionInnerHTML = true;
									error(
										'Pass a `value` prop if you set dangerouslyInnerHTML so React knows which value should be selected.'
									);
								}
							}
							stringValue = flattenOptionChildren(children);
						}
						if (isArray(selectedValue))
							for (var i = 0; i < selectedValue.length; i++) {
								checkAttributeStringCoercion(selectedValue[i], 'value');
								var v = '' + selectedValue[i];
								if (v === stringValue) {
									target.push(selectedMarkerAttribute);
									break;
								}
							}
						else {
							checkAttributeStringCoercion(selectedValue, 'select.value');
							if ('' + selectedValue === stringValue) target.push(selectedMarkerAttribute);
						}
					} else if (selected) target.push(selectedMarkerAttribute);
					target.push(endOfStartTag);
					pushInnerHTML(target, innerHTML, children);
					return children;
				}
				function pushInput(target, props, responseState) {
					{
						checkControlledValueProps('input', props);
						if (
							props.checked !== undefined &&
							props.defaultChecked !== undefined &&
							!didWarnDefaultChecked
						) {
							error(
								'%s contains an input of type %s with both checked and defaultChecked props. Input elements must be either controlled or uncontrolled (specify either the checked prop, or the defaultChecked prop, but not both). Decide between using a controlled or uncontrolled input element and remove one of these props. More info: https://reactjs.org/link/controlled-components',
								'A component',
								props.type
							);
							didWarnDefaultChecked = true;
						}
						if (
							props.value !== undefined &&
							props.defaultValue !== undefined &&
							!didWarnDefaultInputValue
						) {
							error(
								'%s contains an input of type %s with both value and defaultValue props. Input elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled input element and remove one of these props. More info: https://reactjs.org/link/controlled-components',
								'A component',
								props.type
							);
							didWarnDefaultInputValue = true;
						}
					}
					target.push(startChunkForTag('input'));
					var value = null;
					var defaultValue = null;
					var checked = null;
					var defaultChecked = null;
					for (var propKey in props)
						if (hasOwnProperty.call(props, propKey)) {
							var propValue = props[propKey];
							if (propValue == null) continue;
							switch (propKey) {
								case 'children':
								case 'dangerouslySetInnerHTML':
									throw new Error(
										'input is a self-closing tag and must neither have `children` nor use `dangerouslySetInnerHTML`.'
									);
								case 'defaultChecked':
									defaultChecked = propValue;
									break;
								case 'defaultValue':
									defaultValue = propValue;
									break;
								case 'checked':
									checked = propValue;
									break;
								case 'value':
									value = propValue;
									break;
								default:
									pushAttribute(target, responseState, propKey, propValue);
									break;
							}
						}
					if (checked !== null) pushAttribute(target, responseState, 'checked', checked);
					else if (defaultChecked !== null) pushAttribute(target, responseState, 'checked', defaultChecked);
					if (value !== null) pushAttribute(target, responseState, 'value', value);
					else if (defaultValue !== null) pushAttribute(target, responseState, 'value', defaultValue);
					target.push(endOfStartTagSelfClosing);
					return null;
				}
				function pushStartTextArea(target, props, responseState) {
					{
						checkControlledValueProps('textarea', props);
						if (
							props.value !== undefined &&
							props.defaultValue !== undefined &&
							!didWarnDefaultTextareaValue
						) {
							error(
								'Textarea elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled textarea and remove one of these props. More info: https://reactjs.org/link/controlled-components'
							);
							didWarnDefaultTextareaValue = true;
						}
					}
					target.push(startChunkForTag('textarea'));
					var value = null;
					var defaultValue = null;
					var children = null;
					for (var propKey in props)
						if (hasOwnProperty.call(props, propKey)) {
							var propValue = props[propKey];
							if (propValue == null) continue;
							switch (propKey) {
								case 'children':
									children = propValue;
									break;
								case 'value':
									value = propValue;
									break;
								case 'defaultValue':
									defaultValue = propValue;
									break;
								case 'dangerouslySetInnerHTML':
									throw new Error('`dangerouslySetInnerHTML` does not make sense on <textarea>.');
								default:
									pushAttribute(target, responseState, propKey, propValue);
									break;
							}
						}
					if (value === null && defaultValue !== null) value = defaultValue;
					target.push(endOfStartTag);
					if (children != null) {
						error('Use the `defaultValue` or `value` props instead of setting children on <textarea>.');
						if (value != null)
							throw new Error('If you supply `defaultValue` on a <textarea>, do not pass children.');
						if (isArray(children)) {
							if (children.length > 1) throw new Error('<textarea> can only have at most one child.');
							checkHtmlStringCoercion(children[0]);
							value = '' + children[0];
						}
						checkHtmlStringCoercion(children);
						value = '' + children;
					}
					if (typeof value === 'string' && value[0] === '\n') target.push(leadingNewline);
					if (value !== null) {
						checkAttributeStringCoercion(value, 'value');
						target.push(stringToChunk(encodeHTMLTextNode('' + value)));
					}
					return null;
				}
				function pushSelfClosing(target, props, tag, responseState) {
					target.push(startChunkForTag(tag));
					for (var propKey in props)
						if (hasOwnProperty.call(props, propKey)) {
							var propValue = props[propKey];
							if (propValue == null) continue;
							switch (propKey) {
								case 'children':
								case 'dangerouslySetInnerHTML':
									throw new Error(
										tag +
											' is a self-closing tag and must neither have `children` nor use `dangerouslySetInnerHTML`.'
									);
								default:
									pushAttribute(target, responseState, propKey, propValue);
									break;
							}
						}
					target.push(endOfStartTagSelfClosing);
					return null;
				}
				function pushStartMenuItem(target, props, responseState) {
					target.push(startChunkForTag('menuitem'));
					for (var propKey in props)
						if (hasOwnProperty.call(props, propKey)) {
							var propValue = props[propKey];
							if (propValue == null) continue;
							switch (propKey) {
								case 'children':
								case 'dangerouslySetInnerHTML':
									throw new Error('menuitems cannot have `children` nor `dangerouslySetInnerHTML`.');
								default:
									pushAttribute(target, responseState, propKey, propValue);
									break;
							}
						}
					target.push(endOfStartTag);
					return null;
				}
				function pushStartTitle(target, props, responseState) {
					target.push(startChunkForTag('title'));
					var children = null;
					for (var propKey in props)
						if (hasOwnProperty.call(props, propKey)) {
							var propValue = props[propKey];
							if (propValue == null) continue;
							switch (propKey) {
								case 'children':
									children = propValue;
									break;
								case 'dangerouslySetInnerHTML':
									throw new Error('`dangerouslySetInnerHTML` does not make sense on <title>.');
								default:
									pushAttribute(target, responseState, propKey, propValue);
									break;
							}
						}
					target.push(endOfStartTag);
					{
						var child = Array.isArray(children) && children.length < 2 ? children[0] || null : children;
						if (Array.isArray(children) && children.length > 1)
							error(
								'A title element received an array with more than 1 element as children. In browsers title Elements can only have Text Nodes as children. If the children being rendered output more than a single text node in aggregate the browser will display markup and comments as text in the title and hydration will likely fail and fall back to client rendering'
							);
						else if (child != null && child.$$typeof != null)
							error(
								'A title element received a React element for children. In the browser title Elements can only have Text Nodes as children. If the children being rendered output more than a single text node in aggregate the browser will display markup and comments as text in the title and hydration will likely fail and fall back to client rendering'
							);
						else if (child != null && typeof child !== 'string' && typeof child !== 'number')
							error(
								'A title element received a value that was not a string or number for children. In the browser title Elements can only have Text Nodes as children. If the children being rendered output more than a single text node in aggregate the browser will display markup and comments as text in the title and hydration will likely fail and fall back to client rendering'
							);
					}
					return children;
				}
				function pushStartGenericElement(target, props, tag, responseState) {
					target.push(startChunkForTag(tag));
					var children = null;
					var innerHTML = null;
					for (var propKey in props)
						if (hasOwnProperty.call(props, propKey)) {
							var propValue = props[propKey];
							if (propValue == null) continue;
							switch (propKey) {
								case 'children':
									children = propValue;
									break;
								case 'dangerouslySetInnerHTML':
									innerHTML = propValue;
									break;
								default:
									pushAttribute(target, responseState, propKey, propValue);
									break;
							}
						}
					target.push(endOfStartTag);
					pushInnerHTML(target, innerHTML, children);
					if (typeof children === 'string') {
						target.push(stringToChunk(encodeHTMLTextNode(children)));
						return null;
					}
					return children;
				}
				function pushStartCustomElement(target, props, tag, responseState) {
					target.push(startChunkForTag(tag));
					var children = null;
					var innerHTML = null;
					for (var propKey in props)
						if (hasOwnProperty.call(props, propKey)) {
							var propValue = props[propKey];
							if (propValue == null) continue;
							switch (propKey) {
								case 'children':
									children = propValue;
									break;
								case 'dangerouslySetInnerHTML':
									innerHTML = propValue;
									break;
								case 'style':
									pushStyle(target, responseState, propValue);
									break;
								case 'suppressContentEditableWarning':
								case 'suppressHydrationWarning':
									break;
								default:
									if (
										isAttributeNameSafe(propKey) &&
										typeof propValue !== 'function' &&
										typeof propValue !== 'symbol'
									)
										target.push(
											attributeSeparator,
											stringToChunk(propKey),
											attributeAssign,
											stringToChunk(escapeTextForBrowser(propValue)),
											attributeEnd
										);
									break;
							}
						}
					target.push(endOfStartTag);
					pushInnerHTML(target, innerHTML, children);
					return children;
				}
				var leadingNewline = stringToPrecomputedChunk('\n');
				function pushStartPreformattedElement(target, props, tag, responseState) {
					target.push(startChunkForTag(tag));
					var children = null;
					var innerHTML = null;
					for (var propKey in props)
						if (hasOwnProperty.call(props, propKey)) {
							var propValue = props[propKey];
							if (propValue == null) continue;
							switch (propKey) {
								case 'children':
									children = propValue;
									break;
								case 'dangerouslySetInnerHTML':
									innerHTML = propValue;
									break;
								default:
									pushAttribute(target, responseState, propKey, propValue);
									break;
							}
						}
					target.push(endOfStartTag);
					if (innerHTML != null) {
						if (children != null)
							throw new Error('Can only set one of `children` or `props.dangerouslySetInnerHTML`.');
						if (typeof innerHTML !== 'object' || !('__html' in innerHTML))
							throw new Error(
								'`props.dangerouslySetInnerHTML` must be in the form `{__html: ...}`. Please visit https://reactjs.org/link/dangerously-set-inner-html for more information.'
							);
						var html = innerHTML.__html;
						if (html !== null && html !== undefined)
							if (typeof html === 'string' && html.length > 0 && html[0] === '\n')
								target.push(leadingNewline, stringToChunk(html));
							else {
								checkHtmlStringCoercion(html);
								target.push(stringToChunk('' + html));
							}
					}
					if (typeof children === 'string' && children[0] === '\n') target.push(leadingNewline);
					return children;
				}
				var VALID_TAG_REGEX = /^[a-zA-Z][a-zA-Z:_\.\-\d]*$/;
				var validatedTagCache = new Map();
				function startChunkForTag(tag) {
					var tagStartChunk = validatedTagCache.get(tag);
					if (tagStartChunk === undefined) {
						if (!VALID_TAG_REGEX.test(tag)) throw new Error('Invalid tag: ' + tag);
						tagStartChunk = stringToPrecomputedChunk('<' + tag);
						validatedTagCache.set(tag, tagStartChunk);
					}
					return tagStartChunk;
				}
				var DOCTYPE = stringToPrecomputedChunk('<!DOCTYPE html>');
				function pushStartInstance(target, type, props, responseState, formatContext) {
					{
						validateProperties(type, props);
						validateProperties$1(type, props);
						validateProperties$2(type, props, null);
						if (!props.suppressContentEditableWarning && props.contentEditable && props.children != null)
							error(
								'A component is `contentEditable` and contains `children` managed by React. It is now your responsibility to guarantee that none of those nodes are unexpectedly modified or duplicated. This is probably not intentional.'
							);
						if (formatContext.insertionMode !== SVG_MODE && formatContext.insertionMode !== MATHML_MODE) {
							if (type.indexOf('-') === -1 && typeof props.is !== 'string' && type.toLowerCase() !== type)
								error(
									'<%s /> is using incorrect casing. Use PascalCase for React components, or lowercase for HTML elements.',
									type
								);
						}
					}
					switch (type) {
						case 'select':
							return pushStartSelect(target, props, responseState);
						case 'option':
							return pushStartOption(target, props, responseState, formatContext);
						case 'textarea':
							return pushStartTextArea(target, props, responseState);
						case 'input':
							return pushInput(target, props, responseState);
						case 'menuitem':
							return pushStartMenuItem(target, props, responseState);
						case 'title':
							return pushStartTitle(target, props, responseState);
						case 'listing':
						case 'pre':
							return pushStartPreformattedElement(target, props, type, responseState);
						case 'area':
						case 'base':
						case 'br':
						case 'col':
						case 'embed':
						case 'hr':
						case 'img':
						case 'keygen':
						case 'link':
						case 'meta':
						case 'param':
						case 'source':
						case 'track':
						case 'wbr':
							return pushSelfClosing(target, props, type, responseState);
						case 'annotation-xml':
						case 'color-profile':
						case 'font-face':
						case 'font-face-src':
						case 'font-face-uri':
						case 'font-face-format':
						case 'font-face-name':
						case 'missing-glyph':
							return pushStartGenericElement(target, props, type, responseState);
						case 'html': {
							if (formatContext.insertionMode === ROOT_HTML_MODE) target.push(DOCTYPE);
							return pushStartGenericElement(target, props, type, responseState);
						}
						default:
							if (type.indexOf('-') === -1 && typeof props.is !== 'string')
								return pushStartGenericElement(target, props, type, responseState);
							else return pushStartCustomElement(target, props, type, responseState);
					}
				}
				var endTag1 = stringToPrecomputedChunk('</');
				var endTag2 = stringToPrecomputedChunk('>');
				function pushEndInstance(target, type, props) {
					switch (type) {
						case 'area':
						case 'base':
						case 'br':
						case 'col':
						case 'embed':
						case 'hr':
						case 'img':
						case 'input':
						case 'keygen':
						case 'link':
						case 'meta':
						case 'param':
						case 'source':
						case 'track':
						case 'wbr':
							break;
						default:
							target.push(endTag1, stringToChunk(type), endTag2);
					}
				}
				function writeCompletedRoot(destination, responseState) {
					var bootstrapChunks = responseState.bootstrapChunks;
					var i = 0;
					for (; i < bootstrapChunks.length - 1; i++) writeChunk(destination, bootstrapChunks[i]);
					if (i < bootstrapChunks.length) return writeChunkAndReturn(destination, bootstrapChunks[i]);
					return true;
				}
				var placeholder1 = stringToPrecomputedChunk('<template id="');
				var placeholder2 = stringToPrecomputedChunk('"></template>');
				function writePlaceholder(destination, responseState, id) {
					writeChunk(destination, placeholder1);
					writeChunk(destination, responseState.placeholderPrefix);
					var formattedID = stringToChunk(id.toString(16));
					writeChunk(destination, formattedID);
					return writeChunkAndReturn(destination, placeholder2);
				}
				var startCompletedSuspenseBoundary = stringToPrecomputedChunk('<!--$-->');
				var startPendingSuspenseBoundary1 = stringToPrecomputedChunk('<!--$?--><template id="');
				var startPendingSuspenseBoundary2 = stringToPrecomputedChunk('"></template>');
				var startClientRenderedSuspenseBoundary = stringToPrecomputedChunk('<!--$!-->');
				var endSuspenseBoundary = stringToPrecomputedChunk('<!--/$-->');
				var clientRenderedSuspenseBoundaryError1 = stringToPrecomputedChunk('<template');
				var clientRenderedSuspenseBoundaryErrorAttrInterstitial = stringToPrecomputedChunk('"');
				var clientRenderedSuspenseBoundaryError1A = stringToPrecomputedChunk(' data-dgst="');
				var clientRenderedSuspenseBoundaryError1B = stringToPrecomputedChunk(' data-msg="');
				var clientRenderedSuspenseBoundaryError1C = stringToPrecomputedChunk(' data-stck="');
				var clientRenderedSuspenseBoundaryError2 = stringToPrecomputedChunk('></template>');
				function writeStartCompletedSuspenseBoundary(destination, responseState) {
					return writeChunkAndReturn(destination, startCompletedSuspenseBoundary);
				}
				function writeStartPendingSuspenseBoundary(destination, responseState, id) {
					writeChunk(destination, startPendingSuspenseBoundary1);
					if (id === null)
						throw new Error('An ID must have been assigned before we can complete the boundary.');
					writeChunk(destination, id);
					return writeChunkAndReturn(destination, startPendingSuspenseBoundary2);
				}
				function writeStartClientRenderedSuspenseBoundary(
					destination,
					responseState,
					errorDigest,
					errorMesssage,
					errorComponentStack
				) {
					var result;
					result = writeChunkAndReturn(destination, startClientRenderedSuspenseBoundary);
					writeChunk(destination, clientRenderedSuspenseBoundaryError1);
					if (errorDigest) {
						writeChunk(destination, clientRenderedSuspenseBoundaryError1A);
						writeChunk(destination, stringToChunk(escapeTextForBrowser(errorDigest)));
						writeChunk(destination, clientRenderedSuspenseBoundaryErrorAttrInterstitial);
					}
					{
						if (errorMesssage) {
							writeChunk(destination, clientRenderedSuspenseBoundaryError1B);
							writeChunk(destination, stringToChunk(escapeTextForBrowser(errorMesssage)));
							writeChunk(destination, clientRenderedSuspenseBoundaryErrorAttrInterstitial);
						}
						if (errorComponentStack) {
							writeChunk(destination, clientRenderedSuspenseBoundaryError1C);
							writeChunk(destination, stringToChunk(escapeTextForBrowser(errorComponentStack)));
							writeChunk(destination, clientRenderedSuspenseBoundaryErrorAttrInterstitial);
						}
					}
					result = writeChunkAndReturn(destination, clientRenderedSuspenseBoundaryError2);
					return result;
				}
				function writeEndCompletedSuspenseBoundary(destination, responseState) {
					return writeChunkAndReturn(destination, endSuspenseBoundary);
				}
				function writeEndPendingSuspenseBoundary(destination, responseState) {
					return writeChunkAndReturn(destination, endSuspenseBoundary);
				}
				function writeEndClientRenderedSuspenseBoundary(destination, responseState) {
					return writeChunkAndReturn(destination, endSuspenseBoundary);
				}
				var startSegmentHTML = stringToPrecomputedChunk('<div hidden id="');
				var startSegmentHTML2 = stringToPrecomputedChunk('">');
				var endSegmentHTML = stringToPrecomputedChunk('</div>');
				var startSegmentSVG = stringToPrecomputedChunk('<svg aria-hidden="true" style="display:none" id="');
				var startSegmentSVG2 = stringToPrecomputedChunk('">');
				var endSegmentSVG = stringToPrecomputedChunk('</svg>');
				var startSegmentMathML = stringToPrecomputedChunk('<math aria-hidden="true" style="display:none" id="');
				var startSegmentMathML2 = stringToPrecomputedChunk('">');
				var endSegmentMathML = stringToPrecomputedChunk('</math>');
				var startSegmentTable = stringToPrecomputedChunk('<table hidden id="');
				var startSegmentTable2 = stringToPrecomputedChunk('">');
				var endSegmentTable = stringToPrecomputedChunk('</table>');
				var startSegmentTableBody = stringToPrecomputedChunk('<table hidden><tbody id="');
				var startSegmentTableBody2 = stringToPrecomputedChunk('">');
				var endSegmentTableBody = stringToPrecomputedChunk('</tbody></table>');
				var startSegmentTableRow = stringToPrecomputedChunk('<table hidden><tr id="');
				var startSegmentTableRow2 = stringToPrecomputedChunk('">');
				var endSegmentTableRow = stringToPrecomputedChunk('</tr></table>');
				var startSegmentColGroup = stringToPrecomputedChunk('<table hidden><colgroup id="');
				var startSegmentColGroup2 = stringToPrecomputedChunk('">');
				var endSegmentColGroup = stringToPrecomputedChunk('</colgroup></table>');
				function writeStartSegment(destination, responseState, formatContext, id) {
					switch (formatContext.insertionMode) {
						case ROOT_HTML_MODE:
						case HTML_MODE: {
							writeChunk(destination, startSegmentHTML);
							writeChunk(destination, responseState.segmentPrefix);
							writeChunk(destination, stringToChunk(id.toString(16)));
							return writeChunkAndReturn(destination, startSegmentHTML2);
						}
						case SVG_MODE: {
							writeChunk(destination, startSegmentSVG);
							writeChunk(destination, responseState.segmentPrefix);
							writeChunk(destination, stringToChunk(id.toString(16)));
							return writeChunkAndReturn(destination, startSegmentSVG2);
						}
						case MATHML_MODE: {
							writeChunk(destination, startSegmentMathML);
							writeChunk(destination, responseState.segmentPrefix);
							writeChunk(destination, stringToChunk(id.toString(16)));
							return writeChunkAndReturn(destination, startSegmentMathML2);
						}
						case HTML_TABLE_MODE: {
							writeChunk(destination, startSegmentTable);
							writeChunk(destination, responseState.segmentPrefix);
							writeChunk(destination, stringToChunk(id.toString(16)));
							return writeChunkAndReturn(destination, startSegmentTable2);
						}
						case HTML_TABLE_BODY_MODE: {
							writeChunk(destination, startSegmentTableBody);
							writeChunk(destination, responseState.segmentPrefix);
							writeChunk(destination, stringToChunk(id.toString(16)));
							return writeChunkAndReturn(destination, startSegmentTableBody2);
						}
						case HTML_TABLE_ROW_MODE: {
							writeChunk(destination, startSegmentTableRow);
							writeChunk(destination, responseState.segmentPrefix);
							writeChunk(destination, stringToChunk(id.toString(16)));
							return writeChunkAndReturn(destination, startSegmentTableRow2);
						}
						case HTML_COLGROUP_MODE: {
							writeChunk(destination, startSegmentColGroup);
							writeChunk(destination, responseState.segmentPrefix);
							writeChunk(destination, stringToChunk(id.toString(16)));
							return writeChunkAndReturn(destination, startSegmentColGroup2);
						}
						default:
							throw new Error('Unknown insertion mode. This is a bug in React.');
					}
				}
				function writeEndSegment(destination, formatContext) {
					switch (formatContext.insertionMode) {
						case ROOT_HTML_MODE:
						case HTML_MODE:
							return writeChunkAndReturn(destination, endSegmentHTML);
						case SVG_MODE:
							return writeChunkAndReturn(destination, endSegmentSVG);
						case MATHML_MODE:
							return writeChunkAndReturn(destination, endSegmentMathML);
						case HTML_TABLE_MODE:
							return writeChunkAndReturn(destination, endSegmentTable);
						case HTML_TABLE_BODY_MODE:
							return writeChunkAndReturn(destination, endSegmentTableBody);
						case HTML_TABLE_ROW_MODE:
							return writeChunkAndReturn(destination, endSegmentTableRow);
						case HTML_COLGROUP_MODE:
							return writeChunkAndReturn(destination, endSegmentColGroup);
						default:
							throw new Error('Unknown insertion mode. This is a bug in React.');
					}
				}
				var completeSegmentFunction =
					'function $RS(a,b){a=document.getElementById(a);b=document.getElementById(b);for(a.parentNode.removeChild(a);a.firstChild;)b.parentNode.insertBefore(a.firstChild,b);b.parentNode.removeChild(b)}';
				var completeBoundaryFunction =
					'function $RC(a,b){a=document.getElementById(a);b=document.getElementById(b);b.parentNode.removeChild(b);if(a){a=a.previousSibling;var f=a.parentNode,c=a.nextSibling,e=0;do{if(c&&8===c.nodeType){var d=c.data;if("/$"===d)if(0===e)break;else e--;else"$"!==d&&"$?"!==d&&"$!"!==d||e++}d=c.nextSibling;f.removeChild(c);c=d}while(c);for(;b.firstChild;)f.insertBefore(b.firstChild,c);a.data="$";a._reactRetry&&a._reactRetry()}}';
				var clientRenderFunction =
					'function $RX(b,c,d,e){var a=document.getElementById(b);a&&(b=a.previousSibling,b.data="$!",a=a.dataset,c&&(a.dgst=c),d&&(a.msg=d),e&&(a.stck=e),b._reactRetry&&b._reactRetry())}';
				var completeSegmentScript1Full = stringToPrecomputedChunk(completeSegmentFunction + ';$RS("');
				var completeSegmentScript1Partial = stringToPrecomputedChunk('$RS("');
				var completeSegmentScript2 = stringToPrecomputedChunk('","');
				var completeSegmentScript3 = stringToPrecomputedChunk('")</script>');
				function writeCompletedSegmentInstruction(destination, responseState, contentSegmentID) {
					writeChunk(destination, responseState.startInlineScript);
					if (!responseState.sentCompleteSegmentFunction) {
						responseState.sentCompleteSegmentFunction = true;
						writeChunk(destination, completeSegmentScript1Full);
					} else writeChunk(destination, completeSegmentScript1Partial);
					writeChunk(destination, responseState.segmentPrefix);
					var formattedID = stringToChunk(contentSegmentID.toString(16));
					writeChunk(destination, formattedID);
					writeChunk(destination, completeSegmentScript2);
					writeChunk(destination, responseState.placeholderPrefix);
					writeChunk(destination, formattedID);
					return writeChunkAndReturn(destination, completeSegmentScript3);
				}
				var completeBoundaryScript1Full = stringToPrecomputedChunk(completeBoundaryFunction + ';$RC("');
				var completeBoundaryScript1Partial = stringToPrecomputedChunk('$RC("');
				var completeBoundaryScript2 = stringToPrecomputedChunk('","');
				var completeBoundaryScript3 = stringToPrecomputedChunk('")</script>');
				function writeCompletedBoundaryInstruction(destination, responseState, boundaryID, contentSegmentID) {
					writeChunk(destination, responseState.startInlineScript);
					if (!responseState.sentCompleteBoundaryFunction) {
						responseState.sentCompleteBoundaryFunction = true;
						writeChunk(destination, completeBoundaryScript1Full);
					} else writeChunk(destination, completeBoundaryScript1Partial);
					if (boundaryID === null)
						throw new Error('An ID must have been assigned before we can complete the boundary.');
					var formattedContentID = stringToChunk(contentSegmentID.toString(16));
					writeChunk(destination, boundaryID);
					writeChunk(destination, completeBoundaryScript2);
					writeChunk(destination, responseState.segmentPrefix);
					writeChunk(destination, formattedContentID);
					return writeChunkAndReturn(destination, completeBoundaryScript3);
				}
				var clientRenderScript1Full = stringToPrecomputedChunk(clientRenderFunction + ';$RX("');
				var clientRenderScript1Partial = stringToPrecomputedChunk('$RX("');
				var clientRenderScript1A = stringToPrecomputedChunk('"');
				var clientRenderScript2 = stringToPrecomputedChunk(')</script>');
				var clientRenderErrorScriptArgInterstitial = stringToPrecomputedChunk(',');
				function writeClientRenderBoundaryInstruction(
					destination,
					responseState,
					boundaryID,
					errorDigest,
					errorMessage,
					errorComponentStack
				) {
					writeChunk(destination, responseState.startInlineScript);
					if (!responseState.sentClientRenderFunction) {
						responseState.sentClientRenderFunction = true;
						writeChunk(destination, clientRenderScript1Full);
					} else writeChunk(destination, clientRenderScript1Partial);
					if (boundaryID === null)
						throw new Error('An ID must have been assigned before we can complete the boundary.');
					writeChunk(destination, boundaryID);
					writeChunk(destination, clientRenderScript1A);
					if (errorDigest || errorMessage || errorComponentStack) {
						writeChunk(destination, clientRenderErrorScriptArgInterstitial);
						writeChunk(destination, stringToChunk(escapeJSStringsForInstructionScripts(errorDigest || '')));
					}
					if (errorMessage || errorComponentStack) {
						writeChunk(destination, clientRenderErrorScriptArgInterstitial);
						writeChunk(
							destination,
							stringToChunk(escapeJSStringsForInstructionScripts(errorMessage || ''))
						);
					}
					if (errorComponentStack) {
						writeChunk(destination, clientRenderErrorScriptArgInterstitial);
						writeChunk(
							destination,
							stringToChunk(escapeJSStringsForInstructionScripts(errorComponentStack))
						);
					}
					return writeChunkAndReturn(destination, clientRenderScript2);
				}
				var regexForJSStringsInScripts = /[<\u2028\u2029]/g;
				function escapeJSStringsForInstructionScripts(input) {
					var escaped = JSON.stringify(input);
					return escaped.replace(regexForJSStringsInScripts, function (match) {
						switch (match) {
							case '<':
								return '\\u003c';
							case '\u2028':
								return '\\u2028';
							case '\u2029':
								return '\\u2029';
							default:
								throw new Error(
									'escapeJSStringsForInstructionScripts encountered a match it does not know how to replace. this means the match regex and the replacement characters are no longer in sync. This is a bug in React'
								);
						}
					});
				}
				function createResponseState$1(generateStaticMarkup, identifierPrefix) {
					var responseState = createResponseState(identifierPrefix, undefined);
					return {
						bootstrapChunks: responseState.bootstrapChunks,
						startInlineScript: responseState.startInlineScript,
						placeholderPrefix: responseState.placeholderPrefix,
						segmentPrefix: responseState.segmentPrefix,
						boundaryPrefix: responseState.boundaryPrefix,
						idPrefix: responseState.idPrefix,
						nextSuspenseID: responseState.nextSuspenseID,
						sentCompleteSegmentFunction: responseState.sentCompleteSegmentFunction,
						sentCompleteBoundaryFunction: responseState.sentCompleteBoundaryFunction,
						sentClientRenderFunction: responseState.sentClientRenderFunction,
						generateStaticMarkup,
					};
				}
				function createRootFormatContext() {
					return {
						insertionMode: HTML_MODE,
						selectedValue: null,
					};
				}
				function pushTextInstance$1(target, text, responseState, textEmbedded) {
					if (responseState.generateStaticMarkup) {
						target.push(stringToChunk(escapeTextForBrowser(text)));
						return false;
					} else return pushTextInstance(target, text, responseState, textEmbedded);
				}
				function pushSegmentFinale$1(target, responseState, lastPushedText, textEmbedded) {
					if (responseState.generateStaticMarkup) return;
					else return pushSegmentFinale(target, responseState, lastPushedText, textEmbedded);
				}
				function writeStartCompletedSuspenseBoundary$1(destination, responseState) {
					if (responseState.generateStaticMarkup) return true;
					return writeStartCompletedSuspenseBoundary(destination);
				}
				function writeStartClientRenderedSuspenseBoundary$1(
					destination,
					responseState,
					errorDigest,
					errorMessage,
					errorComponentStack
				) {
					if (responseState.generateStaticMarkup) return true;
					return writeStartClientRenderedSuspenseBoundary(
						destination,
						responseState,
						errorDigest,
						errorMessage,
						errorComponentStack
					);
				}
				function writeEndCompletedSuspenseBoundary$1(destination, responseState) {
					if (responseState.generateStaticMarkup) return true;
					return writeEndCompletedSuspenseBoundary(destination);
				}
				function writeEndClientRenderedSuspenseBoundary$1(destination, responseState) {
					if (responseState.generateStaticMarkup) return true;
					return writeEndClientRenderedSuspenseBoundary(destination);
				}
				var assign = Object.assign;
				var REACT_ELEMENT_TYPE = Symbol.for('react.element');
				var REACT_PORTAL_TYPE = Symbol.for('react.portal');
				var REACT_FRAGMENT_TYPE = Symbol.for('react.fragment');
				var REACT_STRICT_MODE_TYPE = Symbol.for('react.strict_mode');
				var REACT_PROFILER_TYPE = Symbol.for('react.profiler');
				var REACT_PROVIDER_TYPE = Symbol.for('react.provider');
				var REACT_CONTEXT_TYPE = Symbol.for('react.context');
				var REACT_FORWARD_REF_TYPE = Symbol.for('react.forward_ref');
				var REACT_SUSPENSE_TYPE = Symbol.for('react.suspense');
				var REACT_SUSPENSE_LIST_TYPE = Symbol.for('react.suspense_list');
				var REACT_MEMO_TYPE = Symbol.for('react.memo');
				var REACT_LAZY_TYPE = Symbol.for('react.lazy');
				var REACT_SCOPE_TYPE = Symbol.for('react.scope');
				var REACT_DEBUG_TRACING_MODE_TYPE = Symbol.for('react.debug_trace_mode');
				var REACT_LEGACY_HIDDEN_TYPE = Symbol.for('react.legacy_hidden');
				var REACT_SERVER_CONTEXT_DEFAULT_VALUE_NOT_LOADED = Symbol.for('react.default_value');
				var MAYBE_ITERATOR_SYMBOL = Symbol.iterator;
				var FAUX_ITERATOR_SYMBOL = '@@iterator';
				function getIteratorFn(maybeIterable) {
					if (maybeIterable === null || typeof maybeIterable !== 'object') return null;
					var maybeIterator =
						(MAYBE_ITERATOR_SYMBOL && maybeIterable[MAYBE_ITERATOR_SYMBOL]) ||
						maybeIterable[FAUX_ITERATOR_SYMBOL];
					if (typeof maybeIterator === 'function') return maybeIterator;
					return null;
				}
				function getWrappedName(outerType, innerType, wrapperName) {
					var displayName = outerType.displayName;
					if (displayName) return displayName;
					var functionName = innerType.displayName || innerType.name || '';
					return functionName !== '' ? wrapperName + '(' + functionName + ')' : wrapperName;
				}
				function getContextName(type) {
					return type.displayName || 'Context';
				}
				function getComponentNameFromType(type) {
					if (type == null) return null;
					if (typeof type.tag === 'number')
						error(
							'Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue.'
						);
					if (typeof type === 'function') return type.displayName || type.name || null;
					if (typeof type === 'string') return type;
					switch (type) {
						case REACT_FRAGMENT_TYPE:
							return 'Fragment';
						case REACT_PORTAL_TYPE:
							return 'Portal';
						case REACT_PROFILER_TYPE:
							return 'Profiler';
						case REACT_STRICT_MODE_TYPE:
							return 'StrictMode';
						case REACT_SUSPENSE_TYPE:
							return 'Suspense';
						case REACT_SUSPENSE_LIST_TYPE:
							return 'SuspenseList';
					}
					if (typeof type === 'object')
						switch (type.$$typeof) {
							case REACT_CONTEXT_TYPE:
								var context = type;
								return getContextName(context) + '.Consumer';
							case REACT_PROVIDER_TYPE:
								var provider = type;
								return getContextName(provider._context) + '.Provider';
							case REACT_FORWARD_REF_TYPE:
								return getWrappedName(type, type.render, 'ForwardRef');
							case REACT_MEMO_TYPE:
								var outerName = type.displayName || null;
								if (outerName !== null) return outerName;
								return getComponentNameFromType(type.type) || 'Memo';
							case REACT_LAZY_TYPE: {
								var lazyComponent = type;
								var payload = lazyComponent._payload;
								var init = lazyComponent._init;
								try {
									return getComponentNameFromType(init(payload));
								} catch (x) {
									return null;
								}
							}
						}
					return null;
				}
				var disabledDepth = 0;
				var prevLog;
				var prevInfo;
				var prevWarn;
				var prevError;
				var prevGroup;
				var prevGroupCollapsed;
				var prevGroupEnd;
				function disabledLog() {}
				disabledLog.__reactDisabledLog = true;
				function disableLogs() {
					{
						if (disabledDepth === 0) {
							prevLog = console.log;
							prevInfo = console.info;
							prevWarn = console.warn;
							prevError = console.error;
							prevGroup = console.group;
							prevGroupCollapsed = console.groupCollapsed;
							prevGroupEnd = console.groupEnd;
							var props = {
								configurable: true,
								enumerable: true,
								value: disabledLog,
								writable: true,
							};
							Object.defineProperties(console, {
								info: props,
								log: props,
								warn: props,
								error: props,
								group: props,
								groupCollapsed: props,
								groupEnd: props,
							});
						}
						disabledDepth++;
					}
				}
				function reenableLogs() {
					{
						disabledDepth--;
						if (disabledDepth === 0) {
							var props = {
								configurable: true,
								enumerable: true,
								writable: true,
							};
							Object.defineProperties(console, {
								log: assign({}, props, {
									value: prevLog,
								}),
								info: assign({}, props, {
									value: prevInfo,
								}),
								warn: assign({}, props, {
									value: prevWarn,
								}),
								error: assign({}, props, {
									value: prevError,
								}),
								group: assign({}, props, {
									value: prevGroup,
								}),
								groupCollapsed: assign({}, props, {
									value: prevGroupCollapsed,
								}),
								groupEnd: assign({}, props, {
									value: prevGroupEnd,
								}),
							});
						}
						if (disabledDepth < 0)
							error('disabledDepth fell below zero. This is a bug in React. Please file an issue.');
					}
				}
				var ReactCurrentDispatcher = ReactSharedInternals.ReactCurrentDispatcher;
				var prefix;
				function describeBuiltInComponentFrame(name, source, ownerFn) {
					{
						if (prefix === undefined)
							try {
								throw Error();
							} catch (x) {
								var match = x.stack.trim().match(/\n( *(at )?)/);
								prefix = (match && match[1]) || '';
							}
						return '\n' + prefix + name;
					}
				}
				var reentry = false;
				var componentFrameCache;
				{
					var PossiblyWeakMap = typeof WeakMap === 'function' ? WeakMap : Map;
					componentFrameCache = new PossiblyWeakMap();
				}
				function describeNativeComponentFrame(fn, construct) {
					if (!fn || reentry) return '';
					{
						var frame = componentFrameCache.get(fn);
						if (frame !== undefined) return frame;
					}
					var control;
					reentry = true;
					var previousPrepareStackTrace = Error.prepareStackTrace;
					Error.prepareStackTrace = undefined;
					var previousDispatcher;
					{
						previousDispatcher = ReactCurrentDispatcher.current;
						ReactCurrentDispatcher.current = null;
						disableLogs();
					}
					try {
						if (construct) {
							var Fake = function () {
								throw Error();
							};
							Object.defineProperty(Fake.prototype, 'props', {
								set: function () {
									throw Error();
								},
							});
							if (typeof Reflect === 'object' && Reflect.construct) {
								try {
									Reflect.construct(Fake, []);
								} catch (x) {
									control = x;
								}
								Reflect.construct(fn, [], Fake);
							} else {
								try {
									Fake.call();
								} catch (x) {
									control = x;
								}
								fn.call(Fake.prototype);
							}
						} else {
							try {
								throw Error();
							} catch (x) {
								control = x;
							}
							fn();
						}
					} catch (sample) {
						if (sample && control && typeof sample.stack === 'string') {
							var sampleLines = sample.stack.split('\n');
							var controlLines = control.stack.split('\n');
							var s = sampleLines.length - 1;
							var c = controlLines.length - 1;
							while (s >= 1 && c >= 0 && sampleLines[s] !== controlLines[c]) c--;
							for (; s >= 1 && c >= 0; s--, c--)
								if (sampleLines[s] !== controlLines[c]) {
									if (s !== 1 || c !== 1)
										do {
											s--;
											c--;
											if (c < 0 || sampleLines[s] !== controlLines[c]) {
												var _frame = '\n' + sampleLines[s].replace(' at new ', ' at ');
												if (fn.displayName && _frame.includes('<anonymous>'))
													_frame = _frame.replace('<anonymous>', fn.displayName);
												if (typeof fn === 'function') componentFrameCache.set(fn, _frame);
												return _frame;
											}
										} while (s >= 1 && c >= 0);
									break;
								}
						}
					} finally {
						reentry = false;
						{
							ReactCurrentDispatcher.current = previousDispatcher;
							reenableLogs();
						}
						Error.prepareStackTrace = previousPrepareStackTrace;
					}
					var name = fn ? fn.displayName || fn.name : '';
					var syntheticFrame = name ? describeBuiltInComponentFrame(name) : '';
					if (typeof fn === 'function') componentFrameCache.set(fn, syntheticFrame);
					return syntheticFrame;
				}
				function describeClassComponentFrame(ctor, source, ownerFn) {
					return describeNativeComponentFrame(ctor, true);
				}
				function describeFunctionComponentFrame(fn, source, ownerFn) {
					return describeNativeComponentFrame(fn, false);
				}
				function shouldConstruct(Component) {
					var prototype = Component.prototype;
					return !!(prototype && prototype.isReactComponent);
				}
				function describeUnknownElementTypeFrameInDEV(type, source, ownerFn) {
					if (type == null) return '';
					if (typeof type === 'function') return describeNativeComponentFrame(type, shouldConstruct(type));
					if (typeof type === 'string') return describeBuiltInComponentFrame(type);
					switch (type) {
						case REACT_SUSPENSE_TYPE:
							return describeBuiltInComponentFrame('Suspense');
						case REACT_SUSPENSE_LIST_TYPE:
							return describeBuiltInComponentFrame('SuspenseList');
					}
					if (typeof type === 'object')
						switch (type.$$typeof) {
							case REACT_FORWARD_REF_TYPE:
								return describeFunctionComponentFrame(type.render);
							case REACT_MEMO_TYPE:
								return describeUnknownElementTypeFrameInDEV(type.type, source, ownerFn);
							case REACT_LAZY_TYPE: {
								var lazyComponent = type;
								var payload = lazyComponent._payload;
								var init = lazyComponent._init;
								try {
									return describeUnknownElementTypeFrameInDEV(init(payload), source, ownerFn);
								} catch (x) {}
							}
						}
					return '';
				}
				var loggedTypeFailures = {};
				var ReactDebugCurrentFrame = ReactSharedInternals.ReactDebugCurrentFrame;
				function setCurrentlyValidatingElement(element) {
					if (element) {
						var owner = element._owner;
						var stack = describeUnknownElementTypeFrameInDEV(
							element.type,
							element._source,
							owner ? owner.type : null
						);
						ReactDebugCurrentFrame.setExtraStackFrame(stack);
					} else ReactDebugCurrentFrame.setExtraStackFrame(null);
				}
				function checkPropTypes(typeSpecs, values, location, componentName, element) {
					{
						var has = Function.call.bind(hasOwnProperty);
						for (var typeSpecName in typeSpecs)
							if (has(typeSpecs, typeSpecName)) {
								var error$1 = undefined;
								try {
									if (typeof typeSpecs[typeSpecName] !== 'function') {
										var err = Error(
											(componentName || 'React class') +
												': ' +
												location +
												' type `' +
												typeSpecName +
												'` is invalid; it must be a function, usually from the `prop-types` package, but received `' +
												typeof typeSpecs[typeSpecName] +
												'`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.'
										);
										err.name = 'Invariant Violation';
										throw err;
									}
									error$1 = typeSpecs[typeSpecName](
										values,
										typeSpecName,
										componentName,
										location,
										null,
										'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED'
									);
								} catch (ex) {
									error$1 = ex;
								}
								if (error$1 && !(error$1 instanceof Error)) {
									setCurrentlyValidatingElement(element);
									error(
										'%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).',
										componentName || 'React class',
										location,
										typeSpecName,
										typeof error$1
									);
									setCurrentlyValidatingElement(null);
								}
								if (error$1 instanceof Error && !(error$1.message in loggedTypeFailures)) {
									loggedTypeFailures[error$1.message] = true;
									setCurrentlyValidatingElement(element);
									error('Failed %s type: %s', location, error$1.message);
									setCurrentlyValidatingElement(null);
								}
							}
					}
				}
				var warnedAboutMissingGetChildContext;
				warnedAboutMissingGetChildContext = {};
				var emptyContextObject = {};
				Object.freeze(emptyContextObject);
				function getMaskedContext(type, unmaskedContext) {
					{
						var contextTypes = type.contextTypes;
						if (!contextTypes) return emptyContextObject;
						var context = {};
						for (var key in contextTypes) context[key] = unmaskedContext[key];
						{
							var name = getComponentNameFromType(type) || 'Unknown';
							checkPropTypes(contextTypes, context, 'context', name);
						}
						return context;
					}
				}
				function processChildContext(instance, type, parentContext, childContextTypes) {
					{
						if (typeof instance.getChildContext !== 'function') {
							{
								var componentName = getComponentNameFromType(type) || 'Unknown';
								if (!warnedAboutMissingGetChildContext[componentName]) {
									warnedAboutMissingGetChildContext[componentName] = true;
									error(
										'%s.childContextTypes is specified but there is no getChildContext() method on the instance. You can either define getChildContext() on %s or remove childContextTypes from it.',
										componentName,
										componentName
									);
								}
							}
							return parentContext;
						}
						var childContext = instance.getChildContext();
						for (var contextKey in childContext)
							if (!(contextKey in childContextTypes))
								throw new Error(
									(getComponentNameFromType(type) || 'Unknown') +
										'.getChildContext(): key "' +
										contextKey +
										'" is not defined in childContextTypes.'
								);
						{
							var name = getComponentNameFromType(type) || 'Unknown';
							checkPropTypes(childContextTypes, childContext, 'child context', name);
						}
						return assign({}, parentContext, childContext);
					}
				}
				var rendererSigil;
				rendererSigil = {};
				var rootContextSnapshot = null;
				var currentActiveSnapshot = null;
				function popNode(prev) {
					prev.context._currentValue2 = prev.parentValue;
				}
				function pushNode(next) {
					next.context._currentValue2 = next.value;
				}
				function popToNearestCommonAncestor(prev, next) {
					if (prev === next);
					else {
						popNode(prev);
						var parentPrev = prev.parent;
						var parentNext = next.parent;
						if (parentPrev === null) {
							if (parentNext !== null)
								throw new Error(
									'The stacks must reach the root at the same time. This is a bug in React.'
								);
						} else {
							if (parentNext === null)
								throw new Error(
									'The stacks must reach the root at the same time. This is a bug in React.'
								);
							popToNearestCommonAncestor(parentPrev, parentNext);
						}
						pushNode(next);
					}
				}
				function popAllPrevious(prev) {
					popNode(prev);
					var parentPrev = prev.parent;
					if (parentPrev !== null) popAllPrevious(parentPrev);
				}
				function pushAllNext(next) {
					var parentNext = next.parent;
					if (parentNext !== null) pushAllNext(parentNext);
					pushNode(next);
				}
				function popPreviousToCommonLevel(prev, next) {
					popNode(prev);
					var parentPrev = prev.parent;
					if (parentPrev === null)
						throw new Error(
							'The depth must equal at least at zero before reaching the root. This is a bug in React.'
						);
					if (parentPrev.depth === next.depth) popToNearestCommonAncestor(parentPrev, next);
					else popPreviousToCommonLevel(parentPrev, next);
				}
				function popNextToCommonLevel(prev, next) {
					var parentNext = next.parent;
					if (parentNext === null)
						throw new Error(
							'The depth must equal at least at zero before reaching the root. This is a bug in React.'
						);
					if (prev.depth === parentNext.depth) popToNearestCommonAncestor(prev, parentNext);
					else popNextToCommonLevel(prev, parentNext);
					pushNode(next);
				}
				function switchContext(newSnapshot) {
					var prev = currentActiveSnapshot;
					var next = newSnapshot;
					if (prev !== next) {
						if (prev === null) pushAllNext(next);
						else if (next === null) popAllPrevious(prev);
						else if (prev.depth === next.depth) popToNearestCommonAncestor(prev, next);
						else if (prev.depth > next.depth) popPreviousToCommonLevel(prev, next);
						else popNextToCommonLevel(prev, next);
						currentActiveSnapshot = next;
					}
				}
				function pushProvider(context, nextValue) {
					var prevValue;
					{
						prevValue = context._currentValue2;
						context._currentValue2 = nextValue;
						{
							if (
								context._currentRenderer2 !== undefined &&
								context._currentRenderer2 !== null &&
								context._currentRenderer2 !== rendererSigil
							)
								error(
									'Detected multiple renderers concurrently rendering the same context provider. This is currently unsupported.'
								);
							context._currentRenderer2 = rendererSigil;
						}
					}
					var prevNode = currentActiveSnapshot;
					var newNode = {
						parent: prevNode,
						depth: prevNode === null ? 0 : prevNode.depth + 1,
						context,
						parentValue: prevValue,
						value: nextValue,
					};
					currentActiveSnapshot = newNode;
					return newNode;
				}
				function popProvider(context) {
					var prevSnapshot = currentActiveSnapshot;
					if (prevSnapshot === null)
						throw new Error('Tried to pop a Context at the root of the app. This is a bug in React.');
					if (prevSnapshot.context !== context)
						error('The parent context is not the expected context. This is probably a bug in React.');
					{
						var _value = prevSnapshot.parentValue;
						if (_value === REACT_SERVER_CONTEXT_DEFAULT_VALUE_NOT_LOADED)
							prevSnapshot.context._currentValue2 = prevSnapshot.context._defaultValue;
						else prevSnapshot.context._currentValue2 = _value;
						{
							if (
								context._currentRenderer2 !== undefined &&
								context._currentRenderer2 !== null &&
								context._currentRenderer2 !== rendererSigil
							)
								error(
									'Detected multiple renderers concurrently rendering the same context provider. This is currently unsupported.'
								);
							context._currentRenderer2 = rendererSigil;
						}
					}
					return (currentActiveSnapshot = prevSnapshot.parent);
				}
				function getActiveContext() {
					return currentActiveSnapshot;
				}
				function readContext(context) {
					var value = context._currentValue2;
					return value;
				}
				function get(key) {
					return key._reactInternals;
				}
				function set(key, value) {
					key._reactInternals = value;
				}
				var didWarnAboutNoopUpdateForComponent = {};
				var didWarnAboutDeprecatedWillMount = {};
				var didWarnAboutUninitializedState;
				var didWarnAboutGetSnapshotBeforeUpdateWithoutDidUpdate;
				var didWarnAboutLegacyLifecyclesAndDerivedState;
				var didWarnAboutUndefinedDerivedState;
				var warnOnUndefinedDerivedState;
				var warnOnInvalidCallback;
				var didWarnAboutDirectlyAssigningPropsToState;
				var didWarnAboutContextTypeAndContextTypes;
				var didWarnAboutInvalidateContextType;
				{
					didWarnAboutUninitializedState = new Set();
					didWarnAboutGetSnapshotBeforeUpdateWithoutDidUpdate = new Set();
					didWarnAboutLegacyLifecyclesAndDerivedState = new Set();
					didWarnAboutDirectlyAssigningPropsToState = new Set();
					didWarnAboutUndefinedDerivedState = new Set();
					didWarnAboutContextTypeAndContextTypes = new Set();
					didWarnAboutInvalidateContextType = new Set();
					var didWarnOnInvalidCallback = new Set();
					warnOnInvalidCallback = function (callback, callerName) {
						if (callback === null || typeof callback === 'function') return;
						var key = callerName + '_' + callback;
						if (!didWarnOnInvalidCallback.has(key)) {
							didWarnOnInvalidCallback.add(key);
							error(
								'%s(...): Expected the last optional `callback` argument to be a function. Instead received: %s.',
								callerName,
								callback
							);
						}
					};
					warnOnUndefinedDerivedState = function (type, partialState) {
						if (partialState === undefined) {
							var componentName = getComponentNameFromType(type) || 'Component';
							if (!didWarnAboutUndefinedDerivedState.has(componentName)) {
								didWarnAboutUndefinedDerivedState.add(componentName);
								error(
									'%s.getDerivedStateFromProps(): A valid state object (or null) must be returned. You have returned undefined.',
									componentName
								);
							}
						}
					};
				}
				function warnNoop(publicInstance, callerName) {
					{
						var _constructor = publicInstance.constructor;
						var componentName = (_constructor && getComponentNameFromType(_constructor)) || 'ReactClass';
						var warningKey = componentName + '.' + callerName;
						if (didWarnAboutNoopUpdateForComponent[warningKey]) return;
						error(
							'%s(...): Can only update a mounting component. This usually means you called %s() outside componentWillMount() on the server. This is a no-op.\n\nPlease check the code for the %s component.',
							callerName,
							callerName,
							componentName
						);
						didWarnAboutNoopUpdateForComponent[warningKey] = true;
					}
				}
				var classComponentUpdater = {
					isMounted: function (inst) {
						return false;
					},
					enqueueSetState: function (inst, payload, callback) {
						var internals = get(inst);
						if (internals.queue === null) warnNoop(inst, 'setState');
						else {
							internals.queue.push(payload);
							if (callback !== undefined && callback !== null)
								warnOnInvalidCallback(callback, 'setState');
						}
					},
					enqueueReplaceState: function (inst, payload, callback) {
						var internals = get(inst);
						internals.replace = true;
						internals.queue = [payload];
						if (callback !== undefined && callback !== null) warnOnInvalidCallback(callback, 'setState');
					},
					enqueueForceUpdate: function (inst, callback) {
						var internals = get(inst);
						if (internals.queue === null) warnNoop(inst, 'forceUpdate');
						else if (callback !== undefined && callback !== null)
							warnOnInvalidCallback(callback, 'setState');
					},
				};
				function applyDerivedStateFromProps(instance, ctor, getDerivedStateFromProps, prevState, nextProps) {
					var partialState = getDerivedStateFromProps(nextProps, prevState);
					warnOnUndefinedDerivedState(ctor, partialState);
					var newState =
						partialState === null || partialState === undefined
							? prevState
							: assign({}, prevState, partialState);
					return newState;
				}
				function constructClassInstance(ctor, props, maskedLegacyContext) {
					var context = emptyContextObject;
					var contextType = ctor.contextType;
					if ('contextType' in ctor) {
						var isValid =
							contextType === null ||
							(contextType !== undefined &&
								contextType.$$typeof === REACT_CONTEXT_TYPE &&
								contextType._context === undefined);
						if (!isValid && !didWarnAboutInvalidateContextType.has(ctor)) {
							didWarnAboutInvalidateContextType.add(ctor);
							var addendum = '';
							if (contextType === undefined)
								addendum =
									' However, it is set to undefined. This can be caused by a typo or by mixing up named and default imports. This can also happen due to a circular dependency, so try moving the createContext() call to a separate file.';
							else if (typeof contextType !== 'object')
								addendum = ' However, it is set to a ' + typeof contextType + '.';
							else if (contextType.$$typeof === REACT_PROVIDER_TYPE)
								addendum = ' Did you accidentally pass the Context.Provider instead?';
							else if (contextType._context !== undefined)
								addendum = ' Did you accidentally pass the Context.Consumer instead?';
							else
								addendum =
									' However, it is set to an object with keys {' +
									Object.keys(contextType).join(', ') +
									'}.';
							error(
								'%s defines an invalid contextType. contextType should point to the Context object returned by React.createContext().%s',
								getComponentNameFromType(ctor) || 'Component',
								addendum
							);
						}
					}
					if (typeof contextType === 'object' && contextType !== null) context = readContext(contextType);
					else context = maskedLegacyContext;
					var instance = new ctor(props, context);
					{
						if (
							typeof ctor.getDerivedStateFromProps === 'function' &&
							(instance.state === null || instance.state === undefined)
						) {
							var componentName = getComponentNameFromType(ctor) || 'Component';
							if (!didWarnAboutUninitializedState.has(componentName)) {
								didWarnAboutUninitializedState.add(componentName);
								error(
									'`%s` uses `getDerivedStateFromProps` but its initial state is %s. This is not recommended. Instead, define the initial state by assigning an object to `this.state` in the constructor of `%s`. This ensures that `getDerivedStateFromProps` arguments have a consistent shape.',
									componentName,
									instance.state === null ? 'null' : 'undefined',
									componentName
								);
							}
						}
						if (
							typeof ctor.getDerivedStateFromProps === 'function' ||
							typeof instance.getSnapshotBeforeUpdate === 'function'
						) {
							var foundWillMountName = null;
							var foundWillReceivePropsName = null;
							var foundWillUpdateName = null;
							if (
								typeof instance.componentWillMount === 'function' &&
								instance.componentWillMount.__suppressDeprecationWarning !== true
							)
								foundWillMountName = 'componentWillMount';
							else if (typeof instance.UNSAFE_componentWillMount === 'function')
								foundWillMountName = 'UNSAFE_componentWillMount';
							if (
								typeof instance.componentWillReceiveProps === 'function' &&
								instance.componentWillReceiveProps.__suppressDeprecationWarning !== true
							)
								foundWillReceivePropsName = 'componentWillReceiveProps';
							else if (typeof instance.UNSAFE_componentWillReceiveProps === 'function')
								foundWillReceivePropsName = 'UNSAFE_componentWillReceiveProps';
							if (
								typeof instance.componentWillUpdate === 'function' &&
								instance.componentWillUpdate.__suppressDeprecationWarning !== true
							)
								foundWillUpdateName = 'componentWillUpdate';
							else if (typeof instance.UNSAFE_componentWillUpdate === 'function')
								foundWillUpdateName = 'UNSAFE_componentWillUpdate';
							if (
								foundWillMountName !== null ||
								foundWillReceivePropsName !== null ||
								foundWillUpdateName !== null
							) {
								var _componentName = getComponentNameFromType(ctor) || 'Component';
								var newApiName =
									typeof ctor.getDerivedStateFromProps === 'function'
										? 'getDerivedStateFromProps()'
										: 'getSnapshotBeforeUpdate()';
								if (!didWarnAboutLegacyLifecyclesAndDerivedState.has(_componentName)) {
									didWarnAboutLegacyLifecyclesAndDerivedState.add(_componentName);
									error(
										'Unsafe legacy lifecycles will not be called for components using new component APIs.\n\n%s uses %s but also contains the following legacy lifecycles:%s%s%s\n\nThe above lifecycles should be removed. Learn more about this warning here:\nhttps://reactjs.org/link/unsafe-component-lifecycles',
										_componentName,
										newApiName,
										foundWillMountName !== null ? '\n  ' + foundWillMountName : '',
										foundWillReceivePropsName !== null ? '\n  ' + foundWillReceivePropsName : '',
										foundWillUpdateName !== null ? '\n  ' + foundWillUpdateName : ''
									);
								}
							}
						}
					}
					return instance;
				}
				function checkClassInstance(instance, ctor, newProps) {
					{
						var name = getComponentNameFromType(ctor) || 'Component';
						var renderPresent = instance.render;
						if (!renderPresent)
							if (ctor.prototype && typeof ctor.prototype.render === 'function')
								error(
									'%s(...): No `render` method found on the returned component instance: did you accidentally return an object from the constructor?',
									name
								);
							else
								error(
									'%s(...): No `render` method found on the returned component instance: you may have forgotten to define `render`.',
									name
								);
						if (
							instance.getInitialState &&
							!instance.getInitialState.isReactClassApproved &&
							!instance.state
						)
							error(
								'getInitialState was defined on %s, a plain JavaScript class. This is only supported for classes created using React.createClass. Did you mean to define a state property instead?',
								name
							);
						if (instance.getDefaultProps && !instance.getDefaultProps.isReactClassApproved)
							error(
								'getDefaultProps was defined on %s, a plain JavaScript class. This is only supported for classes created using React.createClass. Use a static property to define defaultProps instead.',
								name
							);
						if (instance.propTypes)
							error(
								'propTypes was defined as an instance property on %s. Use a static property to define propTypes instead.',
								name
							);
						if (instance.contextType)
							error(
								'contextType was defined as an instance property on %s. Use a static property to define contextType instead.',
								name
							);
						{
							if (instance.contextTypes)
								error(
									'contextTypes was defined as an instance property on %s. Use a static property to define contextTypes instead.',
									name
								);
							if (
								ctor.contextType &&
								ctor.contextTypes &&
								!didWarnAboutContextTypeAndContextTypes.has(ctor)
							) {
								didWarnAboutContextTypeAndContextTypes.add(ctor);
								error(
									'%s declares both contextTypes and contextType static properties. The legacy contextTypes property will be ignored.',
									name
								);
							}
						}
						if (typeof instance.componentShouldUpdate === 'function')
							error(
								'%s has a method called componentShouldUpdate(). Did you mean shouldComponentUpdate()? The name is phrased as a question because the function is expected to return a value.',
								name
							);
						if (
							ctor.prototype &&
							ctor.prototype.isPureReactComponent &&
							typeof instance.shouldComponentUpdate !== 'undefined'
						)
							error(
								'%s has a method called shouldComponentUpdate(). shouldComponentUpdate should not be used when extending React.PureComponent. Please extend React.Component if shouldComponentUpdate is used.',
								getComponentNameFromType(ctor) || 'A pure component'
							);
						if (typeof instance.componentDidUnmount === 'function')
							error(
								'%s has a method called componentDidUnmount(). But there is no such lifecycle method. Did you mean componentWillUnmount()?',
								name
							);
						if (typeof instance.componentDidReceiveProps === 'function')
							error(
								'%s has a method called componentDidReceiveProps(). But there is no such lifecycle method. If you meant to update the state in response to changing props, use componentWillReceiveProps(). If you meant to fetch data or run side-effects or mutations after React has updated the UI, use componentDidUpdate().',
								name
							);
						if (typeof instance.componentWillRecieveProps === 'function')
							error(
								'%s has a method called componentWillRecieveProps(). Did you mean componentWillReceiveProps()?',
								name
							);
						if (typeof instance.UNSAFE_componentWillRecieveProps === 'function')
							error(
								'%s has a method called UNSAFE_componentWillRecieveProps(). Did you mean UNSAFE_componentWillReceiveProps()?',
								name
							);
						var hasMutatedProps = instance.props !== newProps;
						if (instance.props !== undefined && hasMutatedProps)
							error(
								"%s(...): When calling super() in `%s`, make sure to pass up the same props that your component's constructor was passed.",
								name,
								name
							);
						if (instance.defaultProps)
							error(
								'Setting defaultProps as an instance property on %s is not supported and will be ignored. Instead, define defaultProps as a static property on %s.',
								name,
								name
							);
						if (
							typeof instance.getSnapshotBeforeUpdate === 'function' &&
							typeof instance.componentDidUpdate !== 'function' &&
							!didWarnAboutGetSnapshotBeforeUpdateWithoutDidUpdate.has(ctor)
						) {
							didWarnAboutGetSnapshotBeforeUpdateWithoutDidUpdate.add(ctor);
							error(
								'%s: getSnapshotBeforeUpdate() should be used with componentDidUpdate(). This component defines getSnapshotBeforeUpdate() only.',
								getComponentNameFromType(ctor)
							);
						}
						if (typeof instance.getDerivedStateFromProps === 'function')
							error(
								'%s: getDerivedStateFromProps() is defined as an instance method and will be ignored. Instead, declare it as a static method.',
								name
							);
						if (typeof instance.getDerivedStateFromError === 'function')
							error(
								'%s: getDerivedStateFromError() is defined as an instance method and will be ignored. Instead, declare it as a static method.',
								name
							);
						if (typeof ctor.getSnapshotBeforeUpdate === 'function')
							error(
								'%s: getSnapshotBeforeUpdate() is defined as a static method and will be ignored. Instead, declare it as an instance method.',
								name
							);
						var _state = instance.state;
						if (_state && (typeof _state !== 'object' || isArray(_state)))
							error('%s.state: must be set to an object or null', name);
						if (
							typeof instance.getChildContext === 'function' &&
							typeof ctor.childContextTypes !== 'object'
						)
							error(
								'%s.getChildContext(): childContextTypes must be defined in order to use getChildContext().',
								name
							);
					}
				}
				function callComponentWillMount(type, instance) {
					var oldState = instance.state;
					if (typeof instance.componentWillMount === 'function') {
						if (instance.componentWillMount.__suppressDeprecationWarning !== true) {
							var componentName = getComponentNameFromType(type) || 'Unknown';
							if (!didWarnAboutDeprecatedWillMount[componentName]) {
								warn(
									'componentWillMount has been renamed, and is not recommended for use. See https://reactjs.org/link/unsafe-component-lifecycles for details.\n\n* Move code from componentWillMount to componentDidMount (preferred in most cases) or the constructor.\n\nPlease update the following components: %s',
									componentName
								);
								didWarnAboutDeprecatedWillMount[componentName] = true;
							}
						}
						instance.componentWillMount();
					}
					if (typeof instance.UNSAFE_componentWillMount === 'function') instance.UNSAFE_componentWillMount();
					if (oldState !== instance.state) {
						error(
							"%s.componentWillMount(): Assigning directly to this.state is deprecated (except inside a component's constructor). Use setState instead.",
							getComponentNameFromType(type) || 'Component'
						);
						classComponentUpdater.enqueueReplaceState(instance, instance.state, null);
					}
				}
				function processUpdateQueue(internalInstance, inst, props, maskedLegacyContext) {
					if (internalInstance.queue !== null && internalInstance.queue.length > 0) {
						var oldQueue = internalInstance.queue;
						var oldReplace = internalInstance.replace;
						internalInstance.queue = null;
						internalInstance.replace = false;
						if (oldReplace && oldQueue.length === 1) inst.state = oldQueue[0];
						else {
							var nextState = oldReplace ? oldQueue[0] : inst.state;
							var dontMutate = true;
							for (var i = oldReplace ? 1 : 0; i < oldQueue.length; i++) {
								var partial = oldQueue[i];
								var partialState =
									typeof partial === 'function'
										? partial.call(inst, nextState, props, maskedLegacyContext)
										: partial;
								if (partialState != null)
									if (dontMutate) {
										dontMutate = false;
										nextState = assign({}, nextState, partialState);
									} else assign(nextState, partialState);
							}
							inst.state = nextState;
						}
					} else internalInstance.queue = null;
				}
				function mountClassInstance(instance, ctor, newProps, maskedLegacyContext) {
					checkClassInstance(instance, ctor, newProps);
					var initialState = instance.state !== undefined ? instance.state : null;
					instance.updater = classComponentUpdater;
					instance.props = newProps;
					instance.state = initialState;
					var internalInstance = {
						queue: [],
						replace: false,
					};
					set(instance, internalInstance);
					var contextType = ctor.contextType;
					if (typeof contextType === 'object' && contextType !== null)
						instance.context = readContext(contextType);
					else instance.context = maskedLegacyContext;
					if (instance.state === newProps) {
						var componentName = getComponentNameFromType(ctor) || 'Component';
						if (!didWarnAboutDirectlyAssigningPropsToState.has(componentName)) {
							didWarnAboutDirectlyAssigningPropsToState.add(componentName);
							error(
								"%s: It is not recommended to assign props directly to state because updates to props won't be reflected in state. In most cases, it is better to use props directly.",
								componentName
							);
						}
					}
					var getDerivedStateFromProps = ctor.getDerivedStateFromProps;
					if (typeof getDerivedStateFromProps === 'function')
						instance.state = applyDerivedStateFromProps(
							instance,
							ctor,
							getDerivedStateFromProps,
							initialState,
							newProps
						);
					if (
						typeof ctor.getDerivedStateFromProps !== 'function' &&
						typeof instance.getSnapshotBeforeUpdate !== 'function' &&
						(typeof instance.UNSAFE_componentWillMount === 'function' ||
							typeof instance.componentWillMount === 'function')
					) {
						callComponentWillMount(ctor, instance);
						processUpdateQueue(internalInstance, instance, newProps, maskedLegacyContext);
					}
				}
				var emptyTreeContext = {
					id: 1,
					overflow: '',
				};
				function getTreeId(context) {
					var overflow = context.overflow;
					var idWithLeadingBit = context.id;
					var id = idWithLeadingBit & ~getLeadingBit(idWithLeadingBit);
					return id.toString(32) + overflow;
				}
				function pushTreeContext(baseContext, totalChildren, index) {
					var baseIdWithLeadingBit = baseContext.id;
					var baseOverflow = baseContext.overflow;
					var baseLength = getBitLength(baseIdWithLeadingBit) - 1;
					var baseId = baseIdWithLeadingBit & ~(1 << baseLength);
					var slot = index + 1;
					var length = getBitLength(totalChildren) + baseLength;
					if (length > 30) {
						var numberOfOverflowBits = baseLength - (baseLength % 5);
						var newOverflowBits = (1 << numberOfOverflowBits) - 1;
						var newOverflow = (baseId & newOverflowBits).toString(32);
						var restOfBaseId = baseId >> numberOfOverflowBits;
						var restOfBaseLength = baseLength - numberOfOverflowBits;
						var restOfLength = getBitLength(totalChildren) + restOfBaseLength;
						var restOfNewBits = slot << restOfBaseLength;
						var id = restOfNewBits | restOfBaseId;
						var overflow = newOverflow + baseOverflow;
						return {
							id: (1 << restOfLength) | id,
							overflow,
						};
					} else {
						var newBits = slot << baseLength;
						var _id = newBits | baseId;
						var _overflow = baseOverflow;
						return {
							id: (1 << length) | _id,
							overflow: _overflow,
						};
					}
				}
				function getBitLength(number) {
					return 32 - clz32(number);
				}
				function getLeadingBit(id) {
					return 1 << (getBitLength(id) - 1);
				}
				var clz32 = Math.clz32 ? Math.clz32 : clz32Fallback;
				var log = Math.log;
				var LN2 = Math.LN2;
				function clz32Fallback(x) {
					var asUint = x >>> 0;
					if (asUint === 0) return 32;
					return (31 - ((log(asUint) / LN2) | 0)) | 0;
				}
				function is(x, y) {
					return (x === y && (x !== 0 || 1 / x === 1 / y)) || (x !== x && y !== y);
				}
				var objectIs = typeof Object.is === 'function' ? Object.is : is;
				var currentlyRenderingComponent = null;
				var currentlyRenderingTask = null;
				var firstWorkInProgressHook = null;
				var workInProgressHook = null;
				var isReRender = false;
				var didScheduleRenderPhaseUpdate = false;
				var localIdCounter = 0;
				var renderPhaseUpdates = null;
				var numberOfReRenders = 0;
				var RE_RENDER_LIMIT = 25;
				var isInHookUserCodeInDev = false;
				var currentHookNameInDev;
				function resolveCurrentlyRenderingComponent() {
					if (currentlyRenderingComponent === null)
						throw new Error(
							'Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:\n1. You might have mismatching versions of React and the renderer (such as React DOM)\n2. You might be breaking the Rules of Hooks\n3. You might have more than one copy of React in the same app\nSee https://reactjs.org/link/invalid-hook-call for tips about how to debug and fix this problem.'
						);
					if (isInHookUserCodeInDev)
						error(
							'Do not call Hooks inside useEffect(...), useMemo(...), or other built-in Hooks. You can only call Hooks at the top level of your React function. For more information, see https://reactjs.org/link/rules-of-hooks'
						);
					return currentlyRenderingComponent;
				}
				function areHookInputsEqual(nextDeps, prevDeps) {
					if (prevDeps === null) {
						error(
							'%s received a final argument during this render, but not during the previous render. Even though the final argument is optional, its type cannot change between renders.',
							currentHookNameInDev
						);
						return false;
					}
					if (nextDeps.length !== prevDeps.length)
						error(
							'The final argument passed to %s changed size between renders. The order and size of this array must remain constant.\n\nPrevious: %s\nIncoming: %s',
							currentHookNameInDev,
							'[' + nextDeps.join(', ') + ']',
							'[' + prevDeps.join(', ') + ']'
						);
					for (var i = 0; i < prevDeps.length && i < nextDeps.length; i++) {
						if (objectIs(nextDeps[i], prevDeps[i])) continue;
						return false;
					}
					return true;
				}
				function createHook() {
					if (numberOfReRenders > 0) throw new Error('Rendered more hooks than during the previous render');
					return {
						memoizedState: null,
						queue: null,
						next: null,
					};
				}
				function createWorkInProgressHook() {
					if (workInProgressHook === null)
						if (firstWorkInProgressHook === null) {
							isReRender = false;
							firstWorkInProgressHook = workInProgressHook = createHook();
						} else {
							isReRender = true;
							workInProgressHook = firstWorkInProgressHook;
						}
					else if (workInProgressHook.next === null) {
						isReRender = false;
						workInProgressHook = workInProgressHook.next = createHook();
					} else {
						isReRender = true;
						workInProgressHook = workInProgressHook.next;
					}
					return workInProgressHook;
				}
				function prepareToUseHooks(task, componentIdentity) {
					currentlyRenderingComponent = componentIdentity;
					currentlyRenderingTask = task;
					isInHookUserCodeInDev = false;
					localIdCounter = 0;
				}
				function finishHooks(Component, props, children, refOrContext) {
					while (didScheduleRenderPhaseUpdate) {
						didScheduleRenderPhaseUpdate = false;
						localIdCounter = 0;
						numberOfReRenders += 1;
						workInProgressHook = null;
						children = Component(props, refOrContext);
					}
					resetHooksState();
					return children;
				}
				function checkDidRenderIdHook() {
					var didRenderIdHook = localIdCounter !== 0;
					return didRenderIdHook;
				}
				function resetHooksState() {
					isInHookUserCodeInDev = false;
					currentlyRenderingComponent = null;
					currentlyRenderingTask = null;
					didScheduleRenderPhaseUpdate = false;
					firstWorkInProgressHook = null;
					numberOfReRenders = 0;
					renderPhaseUpdates = null;
					workInProgressHook = null;
				}
				function readContext$1(context) {
					if (isInHookUserCodeInDev)
						error(
							'Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo().'
						);
					return readContext(context);
				}
				function useContext(context) {
					currentHookNameInDev = 'useContext';
					resolveCurrentlyRenderingComponent();
					return readContext(context);
				}
				function basicStateReducer(state, action) {
					return typeof action === 'function' ? action(state) : action;
				}
				function useState(initialState) {
					currentHookNameInDev = 'useState';
					return useReducer(basicStateReducer, initialState);
				}
				function useReducer(reducer, initialArg, init) {
					if (reducer !== basicStateReducer) currentHookNameInDev = 'useReducer';
					currentlyRenderingComponent = resolveCurrentlyRenderingComponent();
					workInProgressHook = createWorkInProgressHook();
					if (isReRender) {
						var queue = workInProgressHook.queue;
						var dispatch = queue.dispatch;
						if (renderPhaseUpdates !== null) {
							var firstRenderPhaseUpdate = renderPhaseUpdates.get(queue);
							if (firstRenderPhaseUpdate !== undefined) {
								renderPhaseUpdates.delete(queue);
								var newState = workInProgressHook.memoizedState;
								var update = firstRenderPhaseUpdate;
								do {
									var action = update.action;
									isInHookUserCodeInDev = true;
									newState = reducer(newState, action);
									isInHookUserCodeInDev = false;
									update = update.next;
								} while (update !== null);
								workInProgressHook.memoizedState = newState;
								return [newState, dispatch];
							}
						}
						return [workInProgressHook.memoizedState, dispatch];
					} else {
						isInHookUserCodeInDev = true;
						var initialState;
						if (reducer === basicStateReducer)
							initialState = typeof initialArg === 'function' ? initialArg() : initialArg;
						else initialState = init !== undefined ? init(initialArg) : initialArg;
						isInHookUserCodeInDev = false;
						workInProgressHook.memoizedState = initialState;
						var _queue = (workInProgressHook.queue = {
							last: null,
							dispatch: null,
						});
						var _dispatch = (_queue.dispatch = dispatchAction.bind(
							null,
							currentlyRenderingComponent,
							_queue
						));
						return [workInProgressHook.memoizedState, _dispatch];
					}
				}
				function useMemo(nextCreate, deps) {
					currentlyRenderingComponent = resolveCurrentlyRenderingComponent();
					workInProgressHook = createWorkInProgressHook();
					var nextDeps = deps === undefined ? null : deps;
					if (workInProgressHook !== null) {
						var prevState = workInProgressHook.memoizedState;
						if (prevState !== null) {
							if (nextDeps !== null) {
								var prevDeps = prevState[1];
								if (areHookInputsEqual(nextDeps, prevDeps)) return prevState[0];
							}
						}
					}
					isInHookUserCodeInDev = true;
					var nextValue = nextCreate();
					isInHookUserCodeInDev = false;
					workInProgressHook.memoizedState = [nextValue, nextDeps];
					return nextValue;
				}
				function useRef(initialValue) {
					currentlyRenderingComponent = resolveCurrentlyRenderingComponent();
					workInProgressHook = createWorkInProgressHook();
					var previousRef = workInProgressHook.memoizedState;
					if (previousRef === null) {
						var ref = {
							current: initialValue,
						};
						Object.seal(ref);
						workInProgressHook.memoizedState = ref;
						return ref;
					} else return previousRef;
				}
				function useLayoutEffect(create, inputs) {
					{
						currentHookNameInDev = 'useLayoutEffect';
						error(
							"useLayoutEffect does nothing on the server, because its effect cannot be encoded into the server renderer's output format. This will lead to a mismatch between the initial, non-hydrated UI and the intended UI. To avoid this, useLayoutEffect should only be used in components that render exclusively on the client. See https://reactjs.org/link/uselayouteffect-ssr for common fixes."
						);
					}
				}
				function dispatchAction(componentIdentity, queue, action) {
					if (numberOfReRenders >= RE_RENDER_LIMIT)
						throw new Error(
							'Too many re-renders. React limits the number of renders to prevent an infinite loop.'
						);
					if (componentIdentity === currentlyRenderingComponent) {
						didScheduleRenderPhaseUpdate = true;
						var update = {
							action,
							next: null,
						};
						if (renderPhaseUpdates === null) renderPhaseUpdates = new Map();
						var firstRenderPhaseUpdate = renderPhaseUpdates.get(queue);
						if (firstRenderPhaseUpdate === undefined) renderPhaseUpdates.set(queue, update);
						else {
							var lastRenderPhaseUpdate = firstRenderPhaseUpdate;
							while (lastRenderPhaseUpdate.next !== null)
								lastRenderPhaseUpdate = lastRenderPhaseUpdate.next;
							lastRenderPhaseUpdate.next = update;
						}
					}
				}
				function useCallback(callback, deps) {
					return useMemo(function () {
						return callback;
					}, deps);
				}
				function useMutableSource(source, getSnapshot, subscribe) {
					resolveCurrentlyRenderingComponent();
					return getSnapshot(source._source);
				}
				function useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot) {
					if (getServerSnapshot === undefined)
						throw new Error(
							'Missing getServerSnapshot, which is required for server-rendered content. Will revert to client rendering.'
						);
					return getServerSnapshot();
				}
				function useDeferredValue(value) {
					resolveCurrentlyRenderingComponent();
					return value;
				}
				function unsupportedStartTransition() {
					throw new Error('startTransition cannot be called during server rendering.');
				}
				function useTransition() {
					resolveCurrentlyRenderingComponent();
					return [false, unsupportedStartTransition];
				}
				function useId() {
					var task = currentlyRenderingTask;
					var treeId = getTreeId(task.treeContext);
					var responseState = currentResponseState;
					if (responseState === null)
						throw new Error(
							'Invalid hook call. Hooks can only be called inside of the body of a function component.'
						);
					var localId = localIdCounter++;
					return makeId(responseState, treeId, localId);
				}
				function noop() {}
				var Dispatcher = {
					readContext: readContext$1,
					useContext,
					useMemo,
					useReducer,
					useRef,
					useState,
					useInsertionEffect: noop,
					useLayoutEffect,
					useCallback,
					useImperativeHandle: noop,
					useEffect: noop,
					useDebugValue: noop,
					useDeferredValue,
					useTransition,
					useId,
					useMutableSource,
					useSyncExternalStore,
				};
				var currentResponseState = null;
				function setCurrentResponseState(responseState) {
					currentResponseState = responseState;
				}
				function getStackByComponentStackNode(componentStack) {
					try {
						var info = '';
						var node = componentStack;
						do {
							switch (node.tag) {
								case 0:
									info += describeBuiltInComponentFrame(node.type, null, null);
									break;
								case 1:
									info += describeFunctionComponentFrame(node.type, null, null);
									break;
								case 2:
									info += describeClassComponentFrame(node.type, null, null);
									break;
							}
							node = node.parent;
						} while (node);
						return info;
					} catch (x) {
						return '\nError generating stack: ' + x.message + '\n' + x.stack;
					}
				}
				var ReactCurrentDispatcher$1 = ReactSharedInternals.ReactCurrentDispatcher;
				var ReactDebugCurrentFrame$1 = ReactSharedInternals.ReactDebugCurrentFrame;
				var PENDING = 0;
				var COMPLETED = 1;
				var FLUSHED = 2;
				var ABORTED = 3;
				var ERRORED = 4;
				var OPEN = 0;
				var CLOSING = 1;
				var CLOSED = 2;
				var DEFAULT_PROGRESSIVE_CHUNK_SIZE = 12800;
				function defaultErrorHandler(error) {
					console['error'](error);
					return null;
				}
				function noop$1() {}
				function createRequest(
					children,
					responseState,
					rootFormatContext,
					progressiveChunkSize,
					onError,
					onAllReady,
					onShellReady,
					onShellError,
					onFatalError
				) {
					var pingedTasks = [];
					var abortSet = new Set();
					var request = {
						destination: null,
						responseState,
						progressiveChunkSize:
							progressiveChunkSize === undefined ? DEFAULT_PROGRESSIVE_CHUNK_SIZE : progressiveChunkSize,
						status: OPEN,
						fatalError: null,
						nextSegmentId: 0,
						allPendingTasks: 0,
						pendingRootTasks: 0,
						completedRootSegment: null,
						abortableTasks: abortSet,
						pingedTasks,
						clientRenderedBoundaries: [],
						completedBoundaries: [],
						partialBoundaries: [],
						onError: onError === undefined ? defaultErrorHandler : onError,
						onAllReady: onAllReady === undefined ? noop$1 : onAllReady,
						onShellReady: onShellReady === undefined ? noop$1 : onShellReady,
						onShellError: onShellError === undefined ? noop$1 : onShellError,
						onFatalError: onFatalError === undefined ? noop$1 : onFatalError,
					};
					var rootSegment = createPendingSegment(request, 0, null, rootFormatContext, false, false);
					rootSegment.parentFlushed = true;
					var rootTask = createTask(
						request,
						children,
						null,
						rootSegment,
						abortSet,
						emptyContextObject,
						rootContextSnapshot,
						emptyTreeContext
					);
					pingedTasks.push(rootTask);
					return request;
				}
				function pingTask(request, task) {
					var pingedTasks = request.pingedTasks;
					pingedTasks.push(task);
					if (pingedTasks.length === 1)
						scheduleWork(function () {
							return performWork(request);
						});
				}
				function createSuspenseBoundary(request, fallbackAbortableTasks) {
					return {
						id: UNINITIALIZED_SUSPENSE_BOUNDARY_ID,
						rootSegmentID: -1,
						parentFlushed: false,
						pendingTasks: 0,
						forceClientRender: false,
						completedSegments: [],
						byteSize: 0,
						fallbackAbortableTasks,
						errorDigest: null,
					};
				}
				function createTask(
					request,
					node,
					blockedBoundary,
					blockedSegment,
					abortSet,
					legacyContext,
					context,
					treeContext
				) {
					request.allPendingTasks++;
					if (blockedBoundary === null) request.pendingRootTasks++;
					else blockedBoundary.pendingTasks++;
					var task = {
						node,
						ping: function () {
							return pingTask(request, task);
						},
						blockedBoundary,
						blockedSegment,
						abortSet,
						legacyContext,
						context,
						treeContext,
					};
					task.componentStack = null;
					abortSet.add(task);
					return task;
				}
				function createPendingSegment(request, index, boundary, formatContext, lastPushedText, textEmbedded) {
					return {
						status: PENDING,
						id: -1,
						index,
						parentFlushed: false,
						chunks: [],
						children: [],
						formatContext,
						boundary,
						lastPushedText,
						textEmbedded,
					};
				}
				var currentTaskInDEV = null;
				function getCurrentStackInDEV() {
					{
						if (currentTaskInDEV === null || currentTaskInDEV.componentStack === null) return '';
						return getStackByComponentStackNode(currentTaskInDEV.componentStack);
					}
				}
				function pushBuiltInComponentStackInDEV(task, type) {
					task.componentStack = {
						tag: 0,
						parent: task.componentStack,
						type,
					};
				}
				function pushFunctionComponentStackInDEV(task, type) {
					task.componentStack = {
						tag: 1,
						parent: task.componentStack,
						type,
					};
				}
				function pushClassComponentStackInDEV(task, type) {
					task.componentStack = {
						tag: 2,
						parent: task.componentStack,
						type,
					};
				}
				function popComponentStackInDEV(task) {
					if (task.componentStack === null)
						error('Unexpectedly popped too many stack frames. This is a bug in React.');
					else task.componentStack = task.componentStack.parent;
				}
				var lastBoundaryErrorComponentStackDev = null;
				function captureBoundaryErrorDetailsDev(boundary, error) {
					{
						var errorMessage;
						if (typeof error === 'string') errorMessage = error;
						else if (error && typeof error.message === 'string') errorMessage = error.message;
						else errorMessage = String(error);
						var errorComponentStack = lastBoundaryErrorComponentStackDev || getCurrentStackInDEV();
						lastBoundaryErrorComponentStackDev = null;
						boundary.errorMessage = errorMessage;
						boundary.errorComponentStack = errorComponentStack;
					}
				}
				function logRecoverableError(request, error) {
					var errorDigest = request.onError(error);
					if (errorDigest != null && typeof errorDigest !== 'string')
						throw new Error(
							'onError returned something with a type other than "string". onError should return a string and may return null or undefined but must not return anything else. It received something of type "' +
								typeof errorDigest +
								'" instead'
						);
					return errorDigest;
				}
				function fatalError(request, error) {
					var onShellError = request.onShellError;
					onShellError(error);
					var onFatalError = request.onFatalError;
					onFatalError(error);
					if (request.destination !== null) {
						request.status = CLOSED;
						closeWithError(request.destination, error);
					} else {
						request.status = CLOSING;
						request.fatalError = error;
					}
				}
				function renderSuspenseBoundary(request, task, props) {
					pushBuiltInComponentStackInDEV(task, 'Suspense');
					var parentBoundary = task.blockedBoundary;
					var parentSegment = task.blockedSegment;
					var fallback = props.fallback;
					var content = props.children;
					var fallbackAbortSet = new Set();
					var newBoundary = createSuspenseBoundary(request, fallbackAbortSet);
					var insertionIndex = parentSegment.chunks.length;
					var boundarySegment = createPendingSegment(
						request,
						insertionIndex,
						newBoundary,
						parentSegment.formatContext,
						false,
						false
					);
					parentSegment.children.push(boundarySegment);
					parentSegment.lastPushedText = false;
					var contentRootSegment = createPendingSegment(
						request,
						0,
						null,
						parentSegment.formatContext,
						false,
						false
					);
					contentRootSegment.parentFlushed = true;
					task.blockedBoundary = newBoundary;
					task.blockedSegment = contentRootSegment;
					try {
						renderNode(request, task, content);
						pushSegmentFinale$1(
							contentRootSegment.chunks,
							request.responseState,
							contentRootSegment.lastPushedText,
							contentRootSegment.textEmbedded
						);
						contentRootSegment.status = COMPLETED;
						queueCompletedSegment(newBoundary, contentRootSegment);
						if (newBoundary.pendingTasks === 0) {
							popComponentStackInDEV(task);
							return;
						}
					} catch (error) {
						contentRootSegment.status = ERRORED;
						newBoundary.forceClientRender = true;
						newBoundary.errorDigest = logRecoverableError(request, error);
						captureBoundaryErrorDetailsDev(newBoundary, error);
					} finally {
						task.blockedBoundary = parentBoundary;
						task.blockedSegment = parentSegment;
					}
					var suspendedFallbackTask = createTask(
						request,
						fallback,
						parentBoundary,
						boundarySegment,
						fallbackAbortSet,
						task.legacyContext,
						task.context,
						task.treeContext
					);
					suspendedFallbackTask.componentStack = task.componentStack;
					request.pingedTasks.push(suspendedFallbackTask);
					popComponentStackInDEV(task);
				}
				function renderHostElement(request, task, type, props) {
					pushBuiltInComponentStackInDEV(task, type);
					var segment = task.blockedSegment;
					var children = pushStartInstance(
						segment.chunks,
						type,
						props,
						request.responseState,
						segment.formatContext
					);
					segment.lastPushedText = false;
					var prevContext = segment.formatContext;
					segment.formatContext = getChildFormatContext(prevContext, type, props);
					renderNode(request, task, children);
					segment.formatContext = prevContext;
					pushEndInstance(segment.chunks, type);
					segment.lastPushedText = false;
					popComponentStackInDEV(task);
				}
				function shouldConstruct$1(Component) {
					return Component.prototype && Component.prototype.isReactComponent;
				}
				function renderWithHooks(request, task, Component, props, secondArg) {
					var componentIdentity = {};
					prepareToUseHooks(task, componentIdentity);
					var result = Component(props, secondArg);
					return finishHooks(Component, props, result, secondArg);
				}
				function finishClassComponent(request, task, instance, Component, props) {
					var nextChildren = instance.render();
					if (instance.props !== props) {
						if (!didWarnAboutReassigningProps)
							error(
								'It looks like %s is reassigning its own `this.props` while rendering. This is not supported and can lead to confusing bugs.',
								getComponentNameFromType(Component) || 'a component'
							);
						didWarnAboutReassigningProps = true;
					}
					{
						var childContextTypes = Component.childContextTypes;
						if (childContextTypes !== null && childContextTypes !== undefined) {
							var previousContext = task.legacyContext;
							var mergedContext = processChildContext(
								instance,
								Component,
								previousContext,
								childContextTypes
							);
							task.legacyContext = mergedContext;
							renderNodeDestructive(request, task, nextChildren);
							task.legacyContext = previousContext;
							return;
						}
					}
					renderNodeDestructive(request, task, nextChildren);
				}
				function renderClassComponent(request, task, Component, props) {
					pushClassComponentStackInDEV(task, Component);
					var maskedContext = getMaskedContext(Component, task.legacyContext);
					var instance = constructClassInstance(Component, props, maskedContext);
					mountClassInstance(instance, Component, props, maskedContext);
					finishClassComponent(request, task, instance, Component, props);
					popComponentStackInDEV(task);
				}
				var didWarnAboutBadClass = {};
				var didWarnAboutModulePatternComponent = {};
				var didWarnAboutContextTypeOnFunctionComponent = {};
				var didWarnAboutGetDerivedStateOnFunctionComponent = {};
				var didWarnAboutReassigningProps = false;
				var didWarnAboutGenerators = false;
				var didWarnAboutMaps = false;
				var hasWarnedAboutUsingContextAsConsumer = false;
				function renderIndeterminateComponent(request, task, Component, props) {
					var legacyContext;
					legacyContext = getMaskedContext(Component, task.legacyContext);
					pushFunctionComponentStackInDEV(task, Component);
					if (Component.prototype && typeof Component.prototype.render === 'function') {
						var componentName = getComponentNameFromType(Component) || 'Unknown';
						if (!didWarnAboutBadClass[componentName]) {
							error(
								"The <%s /> component appears to have a render method, but doesn't extend React.Component. This is likely to cause errors. Change %s to extend React.Component instead.",
								componentName,
								componentName
							);
							didWarnAboutBadClass[componentName] = true;
						}
					}
					var value = renderWithHooks(request, task, Component, props, legacyContext);
					var hasId = checkDidRenderIdHook();
					if (
						typeof value === 'object' &&
						value !== null &&
						typeof value.render === 'function' &&
						value.$$typeof === undefined
					) {
						var _componentName = getComponentNameFromType(Component) || 'Unknown';
						if (!didWarnAboutModulePatternComponent[_componentName]) {
							error(
								"The <%s /> component appears to be a function component that returns a class instance. Change %s to a class that extends React.Component instead. If you can't use a class try assigning the prototype on the function as a workaround. `%s.prototype = React.Component.prototype`. Don't use an arrow function since it cannot be called with `new` by React.",
								_componentName,
								_componentName,
								_componentName
							);
							didWarnAboutModulePatternComponent[_componentName] = true;
						}
					}
					if (
						typeof value === 'object' &&
						value !== null &&
						typeof value.render === 'function' &&
						value.$$typeof === undefined
					) {
						{
							var _componentName2 = getComponentNameFromType(Component) || 'Unknown';
							if (!didWarnAboutModulePatternComponent[_componentName2]) {
								error(
									"The <%s /> component appears to be a function component that returns a class instance. Change %s to a class that extends React.Component instead. If you can't use a class try assigning the prototype on the function as a workaround. `%s.prototype = React.Component.prototype`. Don't use an arrow function since it cannot be called with `new` by React.",
									_componentName2,
									_componentName2,
									_componentName2
								);
								didWarnAboutModulePatternComponent[_componentName2] = true;
							}
						}
						mountClassInstance(value, Component, props, legacyContext);
						finishClassComponent(request, task, value, Component, props);
					} else {
						validateFunctionComponentInDev(Component);
						if (hasId) {
							var prevTreeContext = task.treeContext;
							var totalChildren = 1;
							var index = 0;
							task.treeContext = pushTreeContext(prevTreeContext, totalChildren, index);
							try {
								renderNodeDestructive(request, task, value);
							} finally {
								task.treeContext = prevTreeContext;
							}
						} else renderNodeDestructive(request, task, value);
					}
					popComponentStackInDEV(task);
				}
				function validateFunctionComponentInDev(Component) {
					{
						if (Component) {
							if (Component.childContextTypes)
								error(
									'%s(...): childContextTypes cannot be defined on a function component.',
									Component.displayName || Component.name || 'Component'
								);
						}
						if (typeof Component.getDerivedStateFromProps === 'function') {
							var _componentName3 = getComponentNameFromType(Component) || 'Unknown';
							if (!didWarnAboutGetDerivedStateOnFunctionComponent[_componentName3]) {
								error(
									'%s: Function components do not support getDerivedStateFromProps.',
									_componentName3
								);
								didWarnAboutGetDerivedStateOnFunctionComponent[_componentName3] = true;
							}
						}
						if (typeof Component.contextType === 'object' && Component.contextType !== null) {
							var _componentName4 = getComponentNameFromType(Component) || 'Unknown';
							if (!didWarnAboutContextTypeOnFunctionComponent[_componentName4]) {
								error('%s: Function components do not support contextType.', _componentName4);
								didWarnAboutContextTypeOnFunctionComponent[_componentName4] = true;
							}
						}
					}
				}
				function resolveDefaultProps(Component, baseProps) {
					if (Component && Component.defaultProps) {
						var props = assign({}, baseProps);
						var defaultProps = Component.defaultProps;
						for (var propName in defaultProps)
							if (props[propName] === undefined) props[propName] = defaultProps[propName];
						return props;
					}
					return baseProps;
				}
				function renderForwardRef(request, task, type, props, ref) {
					pushFunctionComponentStackInDEV(task, type.render);
					var children = renderWithHooks(request, task, type.render, props, ref);
					var hasId = checkDidRenderIdHook();
					if (hasId) {
						var prevTreeContext = task.treeContext;
						var totalChildren = 1;
						var index = 0;
						task.treeContext = pushTreeContext(prevTreeContext, totalChildren, index);
						try {
							renderNodeDestructive(request, task, children);
						} finally {
							task.treeContext = prevTreeContext;
						}
					} else renderNodeDestructive(request, task, children);
					popComponentStackInDEV(task);
				}
				function renderMemo(request, task, type, props, ref) {
					var innerType = type.type;
					var resolvedProps = resolveDefaultProps(innerType, props);
					renderElement(request, task, innerType, resolvedProps, ref);
				}
				function renderContextConsumer(request, task, context, props) {
					if (context._context === undefined) {
						if (context !== context.Consumer) {
							if (!hasWarnedAboutUsingContextAsConsumer) {
								hasWarnedAboutUsingContextAsConsumer = true;
								error(
									'Rendering <Context> directly is not supported and will be removed in a future major release. Did you mean to render <Context.Consumer> instead?'
								);
							}
						}
					} else context = context._context;
					var render = props.children;
					if (typeof render !== 'function')
						error(
							"A context consumer was rendered with multiple children, or a child that isn't a function. A context consumer expects a single child that is a function. If you did pass a function, make sure there is no trailing or leading whitespace around it."
						);
					var newValue = readContext(context);
					var newChildren = render(newValue);
					renderNodeDestructive(request, task, newChildren);
				}
				function renderContextProvider(request, task, type, props) {
					var context = type._context;
					var value = props.value;
					var children = props.children;
					var prevSnapshot;
					prevSnapshot = task.context;
					task.context = pushProvider(context, value);
					renderNodeDestructive(request, task, children);
					task.context = popProvider(context);
					if (prevSnapshot !== task.context)
						error(
							'Popping the context provider did not return back to the original snapshot. This is a bug in React.'
						);
				}
				function renderLazyComponent(request, task, lazyComponent, props, ref) {
					pushBuiltInComponentStackInDEV(task, 'Lazy');
					var payload = lazyComponent._payload;
					var init = lazyComponent._init;
					var Component = init(payload);
					var resolvedProps = resolveDefaultProps(Component, props);
					renderElement(request, task, Component, resolvedProps, ref);
					popComponentStackInDEV(task);
				}
				function renderElement(request, task, type, props, ref) {
					if (typeof type === 'function')
						if (shouldConstruct$1(type)) {
							renderClassComponent(request, task, type, props);
							return;
						} else {
							renderIndeterminateComponent(request, task, type, props);
							return;
						}
					if (typeof type === 'string') {
						renderHostElement(request, task, type, props);
						return;
					}
					switch (type) {
						case REACT_LEGACY_HIDDEN_TYPE:
						case REACT_DEBUG_TRACING_MODE_TYPE:
						case REACT_STRICT_MODE_TYPE:
						case REACT_PROFILER_TYPE:
						case REACT_FRAGMENT_TYPE: {
							renderNodeDestructive(request, task, props.children);
							return;
						}
						case REACT_SUSPENSE_LIST_TYPE: {
							pushBuiltInComponentStackInDEV(task, 'SuspenseList');
							renderNodeDestructive(request, task, props.children);
							popComponentStackInDEV(task);
							return;
						}
						case REACT_SCOPE_TYPE:
							throw new Error('ReactDOMServer does not yet support scope components.');
						case REACT_SUSPENSE_TYPE: {
							renderSuspenseBoundary(request, task, props);
							return;
						}
					}
					if (typeof type === 'object' && type !== null)
						switch (type.$$typeof) {
							case REACT_FORWARD_REF_TYPE: {
								renderForwardRef(request, task, type, props, ref);
								return;
							}
							case REACT_MEMO_TYPE: {
								renderMemo(request, task, type, props, ref);
								return;
							}
							case REACT_PROVIDER_TYPE: {
								renderContextProvider(request, task, type, props);
								return;
							}
							case REACT_CONTEXT_TYPE: {
								renderContextConsumer(request, task, type, props);
								return;
							}
							case REACT_LAZY_TYPE: {
								renderLazyComponent(request, task, type, props);
								return;
							}
						}
					var info = '';
					if (
						type === undefined ||
						(typeof type === 'object' && type !== null && Object.keys(type).length === 0)
					)
						info +=
							" You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.";
					throw new Error(
						'Element type is invalid: expected a string (for built-in components) or a class/function (for composite components) ' +
							('but got: ' + (type == null ? type : typeof type) + '.' + info)
					);
				}
				function validateIterable(iterable, iteratorFn) {
					{
						if (typeof Symbol === 'function' && iterable[Symbol.toStringTag] === 'Generator') {
							if (!didWarnAboutGenerators)
								error(
									'Using Generators as children is unsupported and will likely yield unexpected results because enumerating a generator mutates it. You may convert it to an array with `Array.from()` or the `[...spread]` operator before rendering. Keep in mind you might need to polyfill these features for older browsers.'
								);
							didWarnAboutGenerators = true;
						}
						if (iterable.entries === iteratorFn) {
							if (!didWarnAboutMaps)
								error(
									'Using Maps as children is not supported. Use an array of keyed ReactElements instead.'
								);
							didWarnAboutMaps = true;
						}
					}
				}
				function renderNodeDestructive(request, task, node) {
					try {
						return renderNodeDestructiveImpl(request, task, node);
					} catch (x) {
						if (typeof x === 'object' && x !== null && typeof x.then === 'function');
						else
							lastBoundaryErrorComponentStackDev =
								lastBoundaryErrorComponentStackDev !== null
									? lastBoundaryErrorComponentStackDev
									: getCurrentStackInDEV();
						throw x;
					}
				}
				function renderNodeDestructiveImpl(request, task, node) {
					task.node = node;
					if (typeof node === 'object' && node !== null) {
						switch (node.$$typeof) {
							case REACT_ELEMENT_TYPE: {
								var element = node;
								var type = element.type;
								var props = element.props;
								var ref = element.ref;
								renderElement(request, task, type, props, ref);
								return;
							}
							case REACT_PORTAL_TYPE:
								throw new Error(
									'Portals are not currently supported by the server renderer. Render them conditionally so that they only appear on the client render.'
								);
							case REACT_LAZY_TYPE: {
								var lazyNode = node;
								var payload = lazyNode._payload;
								var init = lazyNode._init;
								var resolvedNode;
								try {
									resolvedNode = init(payload);
								} catch (x) {
									if (typeof x === 'object' && x !== null && typeof x.then === 'function')
										pushBuiltInComponentStackInDEV(task, 'Lazy');
									throw x;
								}
								renderNodeDestructive(request, task, resolvedNode);
								return;
							}
						}
						if (isArray(node)) {
							renderChildrenArray(request, task, node);
							return;
						}
						var iteratorFn = getIteratorFn(node);
						if (iteratorFn) {
							validateIterable(node, iteratorFn);
							var iterator = iteratorFn.call(node);
							if (iterator) {
								var step = iterator.next();
								if (!step.done) {
									var children = [];
									do {
										children.push(step.value);
										step = iterator.next();
									} while (!step.done);
									renderChildrenArray(request, task, children);
									return;
								}
								return;
							}
						}
						var childString = Object.prototype.toString.call(node);
						throw new Error(
							'Objects are not valid as a React child (found: ' +
								(childString === '[object Object]'
									? 'object with keys {' + Object.keys(node).join(', ') + '}'
									: childString) +
								'). If you meant to render a collection of children, use an array instead.'
						);
					}
					if (typeof node === 'string') {
						var segment = task.blockedSegment;
						segment.lastPushedText = pushTextInstance$1(
							task.blockedSegment.chunks,
							node,
							request.responseState,
							segment.lastPushedText
						);
						return;
					}
					if (typeof node === 'number') {
						var _segment = task.blockedSegment;
						_segment.lastPushedText = pushTextInstance$1(
							task.blockedSegment.chunks,
							'' + node,
							request.responseState,
							_segment.lastPushedText
						);
						return;
					}
					if (typeof node === 'function')
						error(
							'Functions are not valid as a React child. This may happen if you return a Component instead of <Component /> from render. Or maybe you meant to call this function rather than return it.'
						);
				}
				function renderChildrenArray(request, task, children) {
					var totalChildren = children.length;
					for (var i = 0; i < totalChildren; i++) {
						var prevTreeContext = task.treeContext;
						task.treeContext = pushTreeContext(prevTreeContext, totalChildren, i);
						try {
							renderNode(request, task, children[i]);
						} finally {
							task.treeContext = prevTreeContext;
						}
					}
				}
				function spawnNewSuspendedTask(request, task, x) {
					var segment = task.blockedSegment;
					var insertionIndex = segment.chunks.length;
					var newSegment = createPendingSegment(
						request,
						insertionIndex,
						null,
						segment.formatContext,
						segment.lastPushedText,
						true
					);
					segment.children.push(newSegment);
					segment.lastPushedText = false;
					var newTask = createTask(
						request,
						task.node,
						task.blockedBoundary,
						newSegment,
						task.abortSet,
						task.legacyContext,
						task.context,
						task.treeContext
					);
					if (task.componentStack !== null) newTask.componentStack = task.componentStack.parent;
					var ping = newTask.ping;
					x.then(ping, ping);
				}
				function renderNode(request, task, node) {
					var previousFormatContext = task.blockedSegment.formatContext;
					var previousLegacyContext = task.legacyContext;
					var previousContext = task.context;
					var previousComponentStack = null;
					previousComponentStack = task.componentStack;
					try {
						return renderNodeDestructive(request, task, node);
					} catch (x) {
						resetHooksState();
						if (typeof x === 'object' && x !== null && typeof x.then === 'function') {
							spawnNewSuspendedTask(request, task, x);
							task.blockedSegment.formatContext = previousFormatContext;
							task.legacyContext = previousLegacyContext;
							task.context = previousContext;
							switchContext(previousContext);
							task.componentStack = previousComponentStack;
							return;
						} else {
							task.blockedSegment.formatContext = previousFormatContext;
							task.legacyContext = previousLegacyContext;
							task.context = previousContext;
							switchContext(previousContext);
							task.componentStack = previousComponentStack;
							throw x;
						}
					}
				}
				function erroredTask(request, boundary, segment, error) {
					var errorDigest = logRecoverableError(request, error);
					if (boundary === null) fatalError(request, error);
					else {
						boundary.pendingTasks--;
						if (!boundary.forceClientRender) {
							boundary.forceClientRender = true;
							boundary.errorDigest = errorDigest;
							captureBoundaryErrorDetailsDev(boundary, error);
							if (boundary.parentFlushed) request.clientRenderedBoundaries.push(boundary);
						}
					}
					request.allPendingTasks--;
					if (request.allPendingTasks === 0) {
						var onAllReady = request.onAllReady;
						onAllReady();
					}
				}
				function abortTaskSoft(task) {
					var request = this;
					var boundary = task.blockedBoundary;
					var segment = task.blockedSegment;
					segment.status = ABORTED;
					finishedTask(request, boundary, segment);
				}
				function abortTask(task, request, reason) {
					var boundary = task.blockedBoundary;
					var segment = task.blockedSegment;
					segment.status = ABORTED;
					if (boundary === null) {
						request.allPendingTasks--;
						if (request.status !== CLOSED) {
							request.status = CLOSED;
							if (request.destination !== null) close(request.destination);
						}
					} else {
						boundary.pendingTasks--;
						if (!boundary.forceClientRender) {
							boundary.forceClientRender = true;
							var _error =
								reason === undefined
									? new Error('The render was aborted by the server without a reason.')
									: reason;
							boundary.errorDigest = request.onError(_error);
							{
								var errorPrefix = 'The server did not finish this Suspense boundary: ';
								if (_error && typeof _error.message === 'string') _error = errorPrefix + _error.message;
								else _error = errorPrefix + String(_error);
								var previousTaskInDev = currentTaskInDEV;
								currentTaskInDEV = task;
								try {
									captureBoundaryErrorDetailsDev(boundary, _error);
								} finally {
									currentTaskInDEV = previousTaskInDev;
								}
							}
							if (boundary.parentFlushed) request.clientRenderedBoundaries.push(boundary);
						}
						boundary.fallbackAbortableTasks.forEach(function (fallbackTask) {
							return abortTask(fallbackTask, request, reason);
						});
						boundary.fallbackAbortableTasks.clear();
						request.allPendingTasks--;
						if (request.allPendingTasks === 0) {
							var onAllReady = request.onAllReady;
							onAllReady();
						}
					}
				}
				function queueCompletedSegment(boundary, segment) {
					if (
						segment.chunks.length === 0 &&
						segment.children.length === 1 &&
						segment.children[0].boundary === null
					) {
						var childSegment = segment.children[0];
						childSegment.id = segment.id;
						childSegment.parentFlushed = true;
						if (childSegment.status === COMPLETED) queueCompletedSegment(boundary, childSegment);
					} else {
						var completedSegments = boundary.completedSegments;
						completedSegments.push(segment);
					}
				}
				function finishedTask(request, boundary, segment) {
					if (boundary === null) {
						if (segment.parentFlushed) {
							if (request.completedRootSegment !== null)
								throw new Error('There can only be one root segment. This is a bug in React.');
							request.completedRootSegment = segment;
						}
						request.pendingRootTasks--;
						if (request.pendingRootTasks === 0) {
							request.onShellError = noop$1;
							var onShellReady = request.onShellReady;
							onShellReady();
						}
					} else {
						boundary.pendingTasks--;
						if (boundary.forceClientRender);
						else if (boundary.pendingTasks === 0) {
							if (segment.parentFlushed) {
								if (segment.status === COMPLETED) queueCompletedSegment(boundary, segment);
							}
							if (boundary.parentFlushed) request.completedBoundaries.push(boundary);
							boundary.fallbackAbortableTasks.forEach(abortTaskSoft, request);
							boundary.fallbackAbortableTasks.clear();
						} else if (segment.parentFlushed) {
							if (segment.status === COMPLETED) {
								queueCompletedSegment(boundary, segment);
								var completedSegments = boundary.completedSegments;
								if (completedSegments.length === 1) {
									if (boundary.parentFlushed) request.partialBoundaries.push(boundary);
								}
							}
						}
					}
					request.allPendingTasks--;
					if (request.allPendingTasks === 0) {
						var onAllReady = request.onAllReady;
						onAllReady();
					}
				}
				function retryTask(request, task) {
					var segment = task.blockedSegment;
					if (segment.status !== PENDING) return;
					switchContext(task.context);
					var prevTaskInDEV = null;
					{
						prevTaskInDEV = currentTaskInDEV;
						currentTaskInDEV = task;
					}
					try {
						renderNodeDestructive(request, task, task.node);
						pushSegmentFinale$1(
							segment.chunks,
							request.responseState,
							segment.lastPushedText,
							segment.textEmbedded
						);
						task.abortSet.delete(task);
						segment.status = COMPLETED;
						finishedTask(request, task.blockedBoundary, segment);
					} catch (x) {
						resetHooksState();
						if (typeof x === 'object' && x !== null && typeof x.then === 'function') {
							var ping = task.ping;
							x.then(ping, ping);
						} else {
							task.abortSet.delete(task);
							segment.status = ERRORED;
							erroredTask(request, task.blockedBoundary, segment, x);
						}
					} finally {
						currentTaskInDEV = prevTaskInDEV;
					}
				}
				function performWork(request) {
					if (request.status === CLOSED) return;
					var prevContext = getActiveContext();
					var prevDispatcher = ReactCurrentDispatcher$1.current;
					ReactCurrentDispatcher$1.current = Dispatcher;
					var prevGetCurrentStackImpl;
					{
						prevGetCurrentStackImpl = ReactDebugCurrentFrame$1.getCurrentStack;
						ReactDebugCurrentFrame$1.getCurrentStack = getCurrentStackInDEV;
					}
					var prevResponseState = currentResponseState;
					setCurrentResponseState(request.responseState);
					try {
						var pingedTasks = request.pingedTasks;
						var i;
						for (i = 0; i < pingedTasks.length; i++) {
							var task = pingedTasks[i];
							retryTask(request, task);
						}
						pingedTasks.splice(0, i);
						if (request.destination !== null) flushCompletedQueues(request, request.destination);
					} catch (error) {
						logRecoverableError(request, error);
						fatalError(request, error);
					} finally {
						setCurrentResponseState(prevResponseState);
						ReactCurrentDispatcher$1.current = prevDispatcher;
						ReactDebugCurrentFrame$1.getCurrentStack = prevGetCurrentStackImpl;
						if (prevDispatcher === Dispatcher) switchContext(prevContext);
					}
				}
				function flushSubtree(request, destination, segment) {
					segment.parentFlushed = true;
					switch (segment.status) {
						case PENDING: {
							var segmentID = (segment.id = request.nextSegmentId++);
							segment.lastPushedText = false;
							segment.textEmbedded = false;
							return writePlaceholder(destination, request.responseState, segmentID);
						}
						case COMPLETED: {
							segment.status = FLUSHED;
							var r = true;
							var chunks = segment.chunks;
							var chunkIdx = 0;
							var children = segment.children;
							for (var childIdx = 0; childIdx < children.length; childIdx++) {
								var nextChild = children[childIdx];
								for (; chunkIdx < nextChild.index; chunkIdx++)
									writeChunk(destination, chunks[chunkIdx]);
								r = flushSegment(request, destination, nextChild);
							}
							for (; chunkIdx < chunks.length - 1; chunkIdx++) writeChunk(destination, chunks[chunkIdx]);
							if (chunkIdx < chunks.length) r = writeChunkAndReturn(destination, chunks[chunkIdx]);
							return r;
						}
						default:
							throw new Error(
								'Aborted, errored or already flushed boundaries should not be flushed again. This is a bug in React.'
							);
					}
				}
				function flushSegment(request, destination, segment) {
					var boundary = segment.boundary;
					if (boundary === null) return flushSubtree(request, destination, segment);
					boundary.parentFlushed = true;
					if (boundary.forceClientRender) {
						writeStartClientRenderedSuspenseBoundary$1(
							destination,
							request.responseState,
							boundary.errorDigest,
							boundary.errorMessage,
							boundary.errorComponentStack
						);
						flushSubtree(request, destination, segment);
						return writeEndClientRenderedSuspenseBoundary$1(destination, request.responseState);
					} else if (boundary.pendingTasks > 0) {
						boundary.rootSegmentID = request.nextSegmentId++;
						if (boundary.completedSegments.length > 0) request.partialBoundaries.push(boundary);
						var id = (boundary.id = assignSuspenseBoundaryID(request.responseState));
						writeStartPendingSuspenseBoundary(destination, request.responseState, id);
						flushSubtree(request, destination, segment);
						return writeEndPendingSuspenseBoundary(destination, request.responseState);
					} else if (boundary.byteSize > request.progressiveChunkSize) {
						boundary.rootSegmentID = request.nextSegmentId++;
						request.completedBoundaries.push(boundary);
						writeStartPendingSuspenseBoundary(destination, request.responseState, boundary.id);
						flushSubtree(request, destination, segment);
						return writeEndPendingSuspenseBoundary(destination, request.responseState);
					} else {
						writeStartCompletedSuspenseBoundary$1(destination, request.responseState);
						var completedSegments = boundary.completedSegments;
						if (completedSegments.length !== 1)
							throw new Error(
								'A previously unvisited boundary must have exactly one root segment. This is a bug in React.'
							);
						var contentSegment = completedSegments[0];
						flushSegment(request, destination, contentSegment);
						return writeEndCompletedSuspenseBoundary$1(destination, request.responseState);
					}
				}
				function flushClientRenderedBoundary(request, destination, boundary) {
					return writeClientRenderBoundaryInstruction(
						destination,
						request.responseState,
						boundary.id,
						boundary.errorDigest,
						boundary.errorMessage,
						boundary.errorComponentStack
					);
				}
				function flushSegmentContainer(request, destination, segment) {
					writeStartSegment(destination, request.responseState, segment.formatContext, segment.id);
					flushSegment(request, destination, segment);
					return writeEndSegment(destination, segment.formatContext);
				}
				function flushCompletedBoundary(request, destination, boundary) {
					var completedSegments = boundary.completedSegments;
					var i = 0;
					for (; i < completedSegments.length; i++) {
						var segment = completedSegments[i];
						flushPartiallyCompletedSegment(request, destination, boundary, segment);
					}
					completedSegments.length = 0;
					return writeCompletedBoundaryInstruction(
						destination,
						request.responseState,
						boundary.id,
						boundary.rootSegmentID
					);
				}
				function flushPartialBoundary(request, destination, boundary) {
					var completedSegments = boundary.completedSegments;
					var i = 0;
					for (; i < completedSegments.length; i++) {
						var segment = completedSegments[i];
						if (!flushPartiallyCompletedSegment(request, destination, boundary, segment)) {
							i++;
							completedSegments.splice(0, i);
							return false;
						}
					}
					completedSegments.splice(0, i);
					return true;
				}
				function flushPartiallyCompletedSegment(request, destination, boundary, segment) {
					if (segment.status === FLUSHED) return true;
					var segmentID = segment.id;
					if (segmentID === -1) {
						var rootSegmentID = (segment.id = boundary.rootSegmentID);
						if (rootSegmentID === -1)
							throw new Error(
								'A root segment ID must have been assigned by now. This is a bug in React.'
							);
						return flushSegmentContainer(request, destination, segment);
					} else {
						flushSegmentContainer(request, destination, segment);
						return writeCompletedSegmentInstruction(destination, request.responseState, segmentID);
					}
				}
				function flushCompletedQueues(request, destination) {
					try {
						var completedRootSegment = request.completedRootSegment;
						if (completedRootSegment !== null && request.pendingRootTasks === 0) {
							flushSegment(request, destination, completedRootSegment);
							request.completedRootSegment = null;
							writeCompletedRoot(destination, request.responseState);
						}
						var clientRenderedBoundaries = request.clientRenderedBoundaries;
						var i;
						for (i = 0; i < clientRenderedBoundaries.length; i++) {
							var boundary = clientRenderedBoundaries[i];
							if (!flushClientRenderedBoundary(request, destination, boundary)) {
								request.destination = null;
								i++;
								clientRenderedBoundaries.splice(0, i);
								return;
							}
						}
						clientRenderedBoundaries.splice(0, i);
						var completedBoundaries = request.completedBoundaries;
						for (i = 0; i < completedBoundaries.length; i++) {
							var _boundary = completedBoundaries[i];
							if (!flushCompletedBoundary(request, destination, _boundary)) {
								request.destination = null;
								i++;
								completedBoundaries.splice(0, i);
								return;
							}
						}
						completedBoundaries.splice(0, i);
						completeWriting(destination);
						beginWriting(destination);
						var partialBoundaries = request.partialBoundaries;
						for (i = 0; i < partialBoundaries.length; i++) {
							var _boundary2 = partialBoundaries[i];
							if (!flushPartialBoundary(request, destination, _boundary2)) {
								request.destination = null;
								i++;
								partialBoundaries.splice(0, i);
								return;
							}
						}
						partialBoundaries.splice(0, i);
						var largeBoundaries = request.completedBoundaries;
						for (i = 0; i < largeBoundaries.length; i++) {
							var _boundary3 = largeBoundaries[i];
							if (!flushCompletedBoundary(request, destination, _boundary3)) {
								request.destination = null;
								i++;
								largeBoundaries.splice(0, i);
								return;
							}
						}
						largeBoundaries.splice(0, i);
					} finally {
						if (
							request.allPendingTasks === 0 &&
							request.pingedTasks.length === 0 &&
							request.clientRenderedBoundaries.length === 0 &&
							request.completedBoundaries.length === 0
						) {
							if (request.abortableTasks.size !== 0)
								error(
									'There was still abortable task at the root when we closed. This is a bug in React.'
								);
							close(destination);
						}
					}
				}
				function startWork(request) {
					scheduleWork(function () {
						return performWork(request);
					});
				}
				function startFlowing(request, destination) {
					if (request.status === CLOSING) {
						request.status = CLOSED;
						closeWithError(destination, request.fatalError);
						return;
					}
					if (request.status === CLOSED) return;
					if (request.destination !== null) return;
					request.destination = destination;
					try {
						flushCompletedQueues(request, destination);
					} catch (error) {
						logRecoverableError(request, error);
						fatalError(request, error);
					}
				}
				function abort(request, reason) {
					try {
						var abortableTasks = request.abortableTasks;
						abortableTasks.forEach(function (task) {
							return abortTask(task, request, reason);
						});
						abortableTasks.clear();
						if (request.destination !== null) flushCompletedQueues(request, request.destination);
					} catch (error) {
						logRecoverableError(request, error);
						fatalError(request, error);
					}
				}
				function onError() {}
				function renderToStringImpl(children, options, generateStaticMarkup, abortReason) {
					var didFatal = false;
					var fatalError = null;
					var result = '';
					var destination = {
						push: function (chunk) {
							if (chunk !== null) result += chunk;
							return true;
						},
						destroy: function (error) {
							didFatal = true;
							fatalError = error;
						},
					};
					var readyToStream = false;
					function onShellReady() {
						readyToStream = true;
					}
					var request = createRequest(
						children,
						createResponseState$1(generateStaticMarkup, options ? options.identifierPrefix : undefined),
						createRootFormatContext(),
						Infinity,
						onError,
						undefined,
						onShellReady,
						undefined,
						undefined
					);
					startWork(request);
					abort(request, abortReason);
					startFlowing(request, destination);
					if (didFatal) throw fatalError;
					if (!readyToStream)
						throw new Error(
							'A component suspended while responding to synchronous input. This will cause the UI to be replaced with a loading indicator. To fix, updates that suspend should be wrapped with startTransition.'
						);
					return result;
				}
				function renderToString(children, options) {
					return renderToStringImpl(
						children,
						options,
						false,
						'The server used "renderToString" which does not support Suspense. If you intended for this Suspense boundary to render the fallback content on the server consider throwing an Error somewhere within the Suspense boundary. If you intended to have the server wait for the suspended component please switch to "renderToReadableStream" which supports Suspense on the server'
					);
				}
				function renderToStaticMarkup(children, options) {
					return renderToStringImpl(
						children,
						options,
						true,
						'The server used "renderToStaticMarkup" which does not support Suspense. If you intended to have the server wait for the suspended component please switch to "renderToReadableStream" which supports Suspense on the server'
					);
				}
				function renderToNodeStream() {
					throw new Error(
						'ReactDOMServer.renderToNodeStream(): The streaming API is not available in the browser. Use ReactDOMServer.renderToString() instead.'
					);
				}
				function renderToStaticNodeStream() {
					throw new Error(
						'ReactDOMServer.renderToStaticNodeStream(): The streaming API is not available in the browser. Use ReactDOMServer.renderToStaticMarkup() instead.'
					);
				}
				exports.renderToNodeStream = renderToNodeStream;
				exports.renderToStaticMarkup = renderToStaticMarkup;
				exports.renderToStaticNodeStream = renderToStaticNodeStream;
				exports.renderToString = renderToString;
				exports.version = ReactVersion;
			})();
		},
	}['react-dom/cjs/react-dom-server-legacy.browser.development.js']
);
