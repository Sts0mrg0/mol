require( "source-map-support" ).install(); var exports = void 0;
;
process.on( 'unhandledRejection' , up => { throw up } );

var $node = $node || {}
void function( module ) { var exports = module.exports = this; function require( id ) { return $node[ id.replace( /^.\// , "../mol/" ) ] }; 
;
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
Error.stackTraceLimit = Infinity;
module.exports;
//mol.js.map
;

$node[ "../mol/mol" ] = $node[ "../mol/mol.js" ] = module.exports }.call( {} , {} )
;
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

;
"use strict"
/// Fake namespace for optional overrides
///
/// 	namespace $ { export var x = 1 , y = 1 } // defaults
/// 	namespace $.$$ { export var x = 2 } // overrides
/// 	namespace $.$$ { console.log( x , y ) } // usage
///
var $ = ( typeof module === 'object' ) ? Object.setPrototypeOf( module['export'+'s'] , global ) : global
$.$$ = $

$.$mol = $  // deprecated

;
"use strict";
var $;
(function ($) {
    function $mol_fail(error) {
        throw error;
    }
    $.$mol_fail = $mol_fail;
})($ || ($ = {}));
//fail.js.map
;
"use strict";
var $;
(function ($) {
    function $mol_fail_hidden(error) {
        throw error;
    }
    $.$mol_fail_hidden = $mol_fail_hidden;
})($ || ($ = {}));
//hidden.js.map
;
"use strict";
var $;
(function ($) {
    let $$;
    (function ($$_1) {
    })($$ = $.$$ || ($.$$ = {}));
    $.$mol_ambient_ref = Symbol('$mol_ambient_ref');
    function $mol_ambient(overrides) {
        return Object.setPrototypeOf(overrides, this || $);
    }
    $.$mol_ambient = $mol_ambient;
})($ || ($ = {}));
//ambient.js.map
;
"use strict";
var $;
(function ($) {
    $.$mol_owning_map = new WeakMap();
    function $mol_owning_allow(having) {
        if (!having)
            return false;
        if (typeof having !== 'object')
            return false;
        if (typeof having['destructor'] !== 'function')
            return false;
        return true;
    }
    $.$mol_owning_allow = $mol_owning_allow;
    function $mol_owning_get(having, Owner) {
        if (!$mol_owning_allow(having))
            return null;
        while (true) {
            const owner = $.$mol_owning_map.get(having);
            if (!owner)
                return owner;
            if (!Owner)
                return owner;
            if (owner instanceof Owner)
                return owner;
            having = owner;
        }
    }
    $.$mol_owning_get = $mol_owning_get;
    function $mol_owning_check(owner, having) {
        if (!$mol_owning_allow(having))
            return false;
        if ($.$mol_owning_map.get(having) !== owner)
            return false;
        return true;
    }
    $.$mol_owning_check = $mol_owning_check;
    function $mol_owning_catch(owner, having) {
        if (!$mol_owning_allow(having))
            return false;
        if ($.$mol_owning_map.get(having))
            return false;
        $.$mol_owning_map.set(having, owner);
        return true;
    }
    $.$mol_owning_catch = $mol_owning_catch;
})($ || ($ = {}));
//owning.js.map
;
"use strict";
var $;
(function ($) {
    var _a;
    class $mol_object2 {
        constructor(init) {
            this[_a] = null;
            if (init)
                init(this);
        }
        get $() {
            if (this[$.$mol_ambient_ref])
                return this[$.$mol_ambient_ref];
            const owner = $.$mol_owning_get(this);
            return this[$.$mol_ambient_ref] = (owner === null || owner === void 0 ? void 0 : owner.$) || $mol_object2.$;
        }
        set $(next) {
            if (this[$.$mol_ambient_ref])
                $.$mol_fail_hidden(new Error('Context already defined'));
            this[$.$mol_ambient_ref] = next;
        }
        static create(init) {
            return new this(init);
        }
        static toString() { return this[Symbol.toStringTag] || this.name; }
        destructor() { }
        toString() {
            return this[Symbol.toStringTag] || this.constructor.name + '()';
        }
        toJSON() {
            return this.toString();
        }
    }
    _a = $.$mol_ambient_ref;
    $mol_object2.$ = $;
    $.$mol_object2 = $mol_object2;
})($ || ($ = {}));
//object2.js.map
;
"use strict";
var $;
(function ($) {
    class $mol_wrapper extends $.$mol_object2 {
        static run(task) {
            return this.func(task)();
        }
        static func(func) {
            return this.wrap(func);
        }
        static get class() {
            return (Class) => {
                const construct = (target, args) => new Class(...args);
                const handler = {
                    construct: this.func(construct)
                };
                handler[Symbol.toStringTag] = Class.name + '#';
                return new Proxy(Class, handler);
            };
        }
        static get method() {
            return (obj, name, descr) => {
                descr.value = this.func(descr.value);
                return descr;
            };
        }
        static get field() {
            return (obj, name, descr) => {
                descr.get = descr.set = this.func(descr.get);
                return descr;
            };
        }
    }
    $.$mol_wrapper = $mol_wrapper;
})($ || ($ = {}));
//wrapper.js.map
;
"use strict";
var $;
(function ($) {
    $['devtoolsFormatters'] = $['devtoolsFormatters'] || [];
    function $mol_dev_format_register(config) {
        $['devtoolsFormatters'].push(config);
    }
    $.$mol_dev_format_register = $mol_dev_format_register;
    $.$mol_dev_format_head = Symbol('$mol_dev_format_head');
    $.$mol_dev_format_body = Symbol('$mol_dev_format_body');
    $mol_dev_format_register({
        header: (val, config = false) => {
            if (config)
                return null;
            if (!val)
                return null;
            if ($.$mol_dev_format_head in val) {
                return val[$.$mol_dev_format_head]();
            }
            return null;
        },
        hasBody: val => val[$.$mol_dev_format_body],
        body: val => val[$.$mol_dev_format_body](),
    });
    function $mol_dev_format_native(obj) {
        if (typeof obj === 'undefined')
            return $.$mol_dev_format_shade('undefined');
        if (typeof obj !== 'object')
            return obj;
        return [
            'object',
            {
                object: obj,
                config: true,
            },
        ];
    }
    $.$mol_dev_format_native = $mol_dev_format_native;
    function $mol_dev_format_auto(obj) {
        if (obj == null)
            return $.$mol_dev_format_shade(String(obj));
        if (typeof obj === 'object' && $.$mol_dev_format_head in obj) {
            return obj[$.$mol_dev_format_head]();
        }
        return [
            'object',
            {
                object: obj,
                config: false,
            },
        ];
    }
    $.$mol_dev_format_auto = $mol_dev_format_auto;
    function $mol_dev_format_element(element, style, ...content) {
        const styles = [];
        for (let key in style)
            styles.push(`${key} : ${style[key]}`);
        return [
            element,
            {
                style: styles.join(' ; '),
            },
            ...content,
        ];
    }
    $.$mol_dev_format_element = $mol_dev_format_element;
    function $mol_dev_format_span(style, ...content) {
        return $mol_dev_format_element('span', Object.assign({ 'vertical-align': '8%' }, style), ...content);
    }
    $.$mol_dev_format_span = $mol_dev_format_span;
    $.$mol_dev_format_div = $mol_dev_format_element.bind(null, 'div');
    $.$mol_dev_format_ol = $mol_dev_format_element.bind(null, 'ol');
    $.$mol_dev_format_li = $mol_dev_format_element.bind(null, 'li');
    $.$mol_dev_format_table = $mol_dev_format_element.bind(null, 'table');
    $.$mol_dev_format_tr = $mol_dev_format_element.bind(null, 'tr');
    $.$mol_dev_format_td = $mol_dev_format_element.bind(null, 'td');
    $.$mol_dev_format_accent = $mol_dev_format_span.bind(null, {
        'color': 'magenta',
    });
    $.$mol_dev_format_strong = $mol_dev_format_span.bind(null, {
        'font-weight': 'bold',
    });
    $.$mol_dev_format_string = $mol_dev_format_span.bind(null, {
        'color': 'green',
    });
    $.$mol_dev_format_shade = $mol_dev_format_span.bind(null, {
        'color': 'gray',
    });
    $.$mol_dev_format_indent = $.$mol_dev_format_div.bind(null, {
        'margin-left': '13px'
    });
})($ || ($ = {}));
//format.js.map
;
"use strict";
var $;
(function ($) {
    function $mol_maybe(value) {
        return (value == null) ? [] : [value];
    }
    $.$mol_maybe = $mol_maybe;
})($ || ($ = {}));
//maybe.js.map
;
"use strict";
var $;
(function ($) {
    function $mol_log(path, ...values) {
        if ($.$mol_log_filter() == null)
            return;
        path = String(path);
        if (path.indexOf($.$mol_log_filter()) === -1)
            return;
        const context = $.$mol_log_context();
        if (context)
            context();
        console.debug(path, ...values);
        if ($.$mol_log_debug() == null)
            return;
        if (path.indexOf($.$mol_log_debug()) === -1)
            return;
        debugger;
    }
    $.$mol_log = $mol_log;
})($ || ($ = {}));
//log.js.map
;
"use strict";
var $;
(function ($) {
    function $mol_log_group(name, task) {
        const filter = $.$mol_log_filter();
        if (filter == null)
            return task;
        return function $mol_log_group_wrapper(...args) {
            let started = false;
            let prev = $.$mol_log_context();
            $.$mol_log_context(() => {
                if (prev)
                    prev();
                started = true;
                if (filter || prev)
                    console.group(name);
                else
                    console.groupCollapsed(name);
                $.$mol_log_context(prev = null);
            });
            try {
                return task.apply(this, args);
            }
            finally {
                if (started)
                    console.groupEnd();
                $.$mol_log_context(prev);
            }
        };
    }
    $.$mol_log_group = $mol_log_group;
})($ || ($ = {}));
//log_group.js.map
;
"use strict";
var $;
(function ($) {
    let context = null;
    function $mol_log_context(next = context) {
        return context = next;
    }
    $.$mol_log_context = $mol_log_context;
})($ || ($ = {}));
//log_context.js.map
;
"use strict";
var $;
(function ($) {
    let debug;
    function $mol_log_debug(next = debug) {
        return debug = next;
    }
    $.$mol_log_debug = $mol_log_debug;
})($ || ($ = {}));
//log_debug.node.js.map
;
"use strict";
var $;
(function ($) {
    let filter;
    $.$mol_log_filter = function $mol_log_filter(next = filter) {
        return filter = next;
    };
})($ || ($ = {}));
//log_filter.node.js.map
;
"use strict";
var $;
(function ($) {
    class $mol_log2 extends $.$mol_wrapper {
        constructor(host, id, args) {
            super();
            this.host = host;
            this.id = id;
            this.args = args;
            this.stream = [];
            this[Symbol.toStringTag] = host ? `${host}.${id}` : id;
        }
        static wrap(task) {
            const Inner = this;
            const wrapped = function (...args) {
                const outer = $mol_log2.current;
                const inner = $mol_log2.current = new Inner(this, task.name, args);
                try {
                    return task.call(this, ...args);
                }
                finally {
                    $mol_log2.current = outer;
                    inner.flush();
                }
            };
            return wrapped;
        }
        flush() {
            if (this.stream.length === 0)
                return;
            console.debug(this);
        }
        info(...values) {
            this.stream.push(new $mol_log2_line(...$mol_log2.prefix, ...values));
        }
        [$.$mol_dev_format_head]() {
            return $.$mol_dev_format_span({}, ...$.$mol_maybe(this.host).map($.$mol_dev_format_auto), '.', $.$mol_dev_format_strong(this.id), '(', ...this.args.map($.$mol_dev_format_auto), ') ', $.$mol_dev_format_auto(this.stream));
        }
        static info(...values) {
            const excludes = $mol_log2.excludes;
            if (!excludes)
                return;
            const skip = excludes.some((regexp, index) => {
                return regexp && regexp.test(String(values[index])) || false;
            });
            if (skip)
                return;
            if (!$mol_log2.current) {
                console.warn(new Error(`$mol_log.current is not defined. Wrap entry point to $mol_log!`));
                $mol_log2.current = new $mol_log2(null, '$mol_log2_default', []);
                console.debug($mol_log2.current);
            }
            $mol_log2.current.info(...values);
        }
    }
    $mol_log2.current = null;
    $mol_log2.excludes = null;
    $mol_log2.prefix = [];
    $.$mol_log2 = $mol_log2;
    class $mol_log2_indent extends $.$mol_wrapper {
        static wrap(task) {
            const Inner = this;
            const wrapped = function (...args) {
                try {
                    $mol_log2.prefix.push($.$mol_log2_token_indent);
                    return task.call(this, ...args);
                }
                finally {
                    $mol_log2.prefix.pop();
                }
            };
            return wrapped;
        }
    }
    $.$mol_log2_indent = $mol_log2_indent;
    class $mol_log2_table extends $mol_log2 {
        [$.$mol_dev_format_head]() {
            return $.$mol_dev_format_span({}, $.$mol_dev_format_strong(`${this}(`), ...this.args.map($.$mol_dev_format_auto), $.$mol_dev_format_strong(`) `));
        }
        [$.$mol_dev_format_body]() {
            return $.$mol_dev_format_table({}, ...this.stream.map($.$mol_dev_format_auto));
        }
    }
    $.$mol_log2_table = $mol_log2_table;
    class $mol_log2_hidden extends $mol_log2 {
        flush() { }
    }
    $.$mol_log2_hidden = $mol_log2_hidden;
    class $mol_log2_line extends Array {
        constructor(...items) {
            super(...items);
        }
        [$.$mol_dev_format_head]() {
            return $.$mol_dev_format_tr({}, ...this.map(item => $.$mol_dev_format_td({}, $.$mol_dev_format_auto(item))));
        }
    }
    $.$mol_log2_line = $mol_log2_line;
    class $mol_log2_token extends Array {
        constructor(...items) {
            super(...items);
        }
        [$.$mol_dev_format_head]() {
            return $.$mol_dev_format_accent(...this);
        }
    }
    $.$mol_log2_token = $mol_log2_token;
    $.$mol_log2_token_empty = new $mol_log2_token('');
    $.$mol_log2_token_indent = new $mol_log2_token('\t');
    $.$mol_log2_legend = new $mol_log2_table(null, '$mol_log2_legend', []);
    if (!$mol_log2.excludes)
        $.$mol_log2_legend.info($.$mol_log2_token_empty, 'Use `$mol_log2.excludes : null | RegExp[]` to toggle logs');
})($ || ($ = {}));
//log2.js.map
;
"use strict";
var $;
(function ($) {
    class $mol_after_tick extends $.$mol_object2 {
        constructor(task) {
            super();
            this.task = task;
            this.cancelled = false;
            this.promise = Promise.resolve().then(() => {
                if (this.cancelled)
                    return;
                task();
            });
        }
        destructor() {
            this.cancelled = true;
        }
    }
    $.$mol_after_tick = $mol_after_tick;
})($ || ($ = {}));
//tick.js.map
;
"use strict";
var $;
(function ($) {
    function $mol_compare_any(a, b) {
        if (a === b)
            return true;
        if (!Number.isNaN(a))
            return false;
        if (!Number.isNaN(b))
            return false;
        return true;
    }
    $.$mol_compare_any = $mol_compare_any;
})($ || ($ = {}));
//any.js.map
;
"use strict";
var $;
(function ($) {
    const cache = new WeakMap();
    $.$mol_conform_stack = [];
    function $mol_conform(target, source) {
        if ($.$mol_compare_any(target, source))
            return source;
        if (!target || typeof target !== 'object')
            return target;
        if (!source || typeof source !== 'object')
            return target;
        if (target instanceof Error)
            return target;
        if (source instanceof Error)
            return target;
        if (target['constructor'] !== source['constructor'])
            return target;
        if (cache.get(target))
            return target;
        cache.set(target, true);
        const conform = $.$mol_conform_handlers.get(target['constructor']);
        if (!conform)
            return target;
        if ($.$mol_conform_stack.indexOf(target) !== -1)
            return target;
        $.$mol_conform_stack.push(target);
        try {
            return conform(target, source);
        }
        finally {
            $.$mol_conform_stack.pop();
        }
    }
    $.$mol_conform = $mol_conform;
    $.$mol_conform_handlers = new WeakMap();
    function $mol_conform_handler(cl, handler) {
        $.$mol_conform_handlers.set(cl, handler);
    }
    $.$mol_conform_handler = $mol_conform_handler;
    function $mol_conform_array(target, source) {
        if (source.length !== target.length)
            return target;
        for (let i = 0; i < target.length; ++i) {
            if (!$.$mol_compare_any(source[i], target[i]))
                return target;
        }
        return source;
    }
    $mol_conform_handler(Array, $mol_conform_array);
    $mol_conform_handler(Uint8Array, $mol_conform_array);
    $mol_conform_handler(Uint16Array, $mol_conform_array);
    $mol_conform_handler(Uint32Array, $mol_conform_array);
    $mol_conform_handler(Object, (target, source) => {
        let count = 0;
        let equal = true;
        for (let key in target) {
            const conformed = $mol_conform(target[key], source[key]);
            if (conformed !== target[key]) {
                try {
                    target[key] = conformed;
                }
                catch (error) { }
                if (!$.$mol_compare_any(conformed, target[key]))
                    equal = false;
            }
            if (!$.$mol_compare_any(conformed, source[key]))
                equal = false;
            ++count;
        }
        for (let key in source)
            if (--count < 0)
                break;
        return (equal && count === 0) ? source : target;
    });
    $mol_conform_handler(Date, (target, source) => {
        if (target.getTime() === source.getTime())
            return source;
        return target;
    });
    $mol_conform_handler(RegExp, (target, source) => {
        if (target.toString() === source.toString())
            return source;
        return target;
    });
})($ || ($ = {}));
//conform.js.map
;
"use strict";
var $;
(function ($) {
    function $mol_array_trim(array) {
        let last = array.length;
        while (last > 0) {
            --last;
            const value = array[last];
            if (value === undefined)
                array.pop();
            else
                break;
        }
        return array;
    }
    $.$mol_array_trim = $mol_array_trim;
})($ || ($ = {}));
//trim.js.map
;
"use strict";
var $;
(function ($) {
    function $mol_fiber_defer(calculate) {
        const fiber = new $mol_fiber;
        fiber.calculate = calculate;
        fiber[Symbol.toStringTag] = calculate.name;
        fiber.schedule();
        return fiber;
    }
    $.$mol_fiber_defer = $mol_fiber_defer;
    function $mol_fiber_func(calculate) {
        console.warn('$mol_fiber_func is deprecated. Use $mol_fiber.func instead.');
        return $mol_fiber.func(calculate);
    }
    $.$mol_fiber_func = $mol_fiber_func;
    function $mol_fiber_root(calculate) {
        const wrapper = function (...args) {
            const fiber = new $mol_fiber();
            fiber.calculate = calculate.bind(this, ...args);
            return fiber.wake();
        };
        wrapper[Symbol.toStringTag] = calculate.name;
        return wrapper;
    }
    $.$mol_fiber_root = $mol_fiber_root;
    function $mol_fiber_method(obj, name, descr) {
        console.warn('$mol_fiber_method is deprecated. Use $mol_fiber.method instead.');
        return $mol_fiber.method(obj, name, descr);
    }
    $.$mol_fiber_method = $mol_fiber_method;
    function $mol_fiber_async(task) {
        return (...args) => new Promise($mol_fiber_root((done, fail) => {
            try {
                done(task(...args));
            }
            catch (error) {
                if ('then' in error)
                    return $.$mol_fail_hidden(error);
                fail(error);
            }
        }));
    }
    $.$mol_fiber_async = $mol_fiber_async;
    function $mol_fiber_sync(request) {
        return function $mol_fiber_sync_wrapper(...args) {
            const slave = $mol_fiber.current;
            let master = slave && slave.master;
            if (!master || master.constructor !== $mol_fiber) {
                master = new $mol_fiber;
                master.cursor = -3;
                master.error = request.call(this, ...args).then($.$mol_log2.func(master.push).bind(master), $.$mol_log2.func(master.fail).bind(master));
                const prefix = slave ? `${slave}/${slave.cursor / 2}:` : '/';
                master[Symbol.toStringTag] = prefix + (request.name || $mol_fiber_sync.name);
            }
            return master.get();
        };
    }
    $.$mol_fiber_sync = $mol_fiber_sync;
    async function $mol_fiber_warp() {
        const deadline = $mol_fiber.deadline;
        try {
            $mol_fiber.deadline = Number.POSITIVE_INFINITY;
            while ($mol_fiber.queue.length)
                await $mol_fiber.tick();
            return Promise.resolve();
        }
        finally {
            $mol_fiber.deadline = deadline;
        }
    }
    $.$mol_fiber_warp = $mol_fiber_warp;
    function $mol_fiber_fence(func) {
        const prev = $mol_fiber.current;
        try {
            $mol_fiber.current = null;
            return func();
        }
        finally {
            $mol_fiber.current = prev;
        }
    }
    $.$mol_fiber_fence = $mol_fiber_fence;
    function $mol_fiber_unlimit(task) {
        const deadline = $mol_fiber.deadline;
        try {
            $mol_fiber.deadline = Number.POSITIVE_INFINITY;
            return task();
        }
        finally {
            $mol_fiber.deadline = deadline;
        }
    }
    $.$mol_fiber_unlimit = $mol_fiber_unlimit;
    class $mol_fiber_solid extends $.$mol_wrapper {
        static func(task) {
            function wrapped(...args) {
                const deadline = $mol_fiber.deadline;
                try {
                    $mol_fiber.deadline = Number.POSITIVE_INFINITY;
                    return task.call(this, ...args);
                }
                catch (error) {
                    if ('then' in error)
                        $.$mol_fail(new Error('Solid fiber can not be suspended.'));
                    return $.$mol_fail_hidden(error);
                }
                finally {
                    $mol_fiber.deadline = deadline;
                }
            }
            return $mol_fiber.func(wrapped);
        }
    }
    $.$mol_fiber_solid = $mol_fiber_solid;
    class $mol_fiber extends $.$mol_wrapper {
        constructor() {
            super(...arguments);
            this.value = undefined;
            this.error = null;
            this.cursor = 0;
            this.masters = [];
        }
        static wrap(task) {
            return function $mol_fiber_wrapper(...args) {
                const slave = $mol_fiber.current;
                let master = slave && slave.master;
                if (!master || master.constructor !== $mol_fiber) {
                    master = new $mol_fiber;
                    master.calculate = task.bind(this, ...args);
                    const prefix = slave ? `${slave}/${slave.cursor / 2}:` : '/';
                    master[Symbol.toStringTag] = `${prefix}${task.name}`;
                }
                return master.get();
            };
        }
        static async tick() {
            while ($mol_fiber.queue.length > 0) {
                const now = Date.now();
                if (now >= $mol_fiber.deadline) {
                    $mol_fiber.schedule();
                    $mol_fiber.liveline = now;
                    return;
                }
                const task = $mol_fiber.queue.shift();
                await task();
            }
        }
        static schedule() {
            if (!$mol_fiber.scheduled) {
                $mol_fiber.scheduled = new $.$mol_after_tick(async () => {
                    const now = Date.now();
                    let quant = $mol_fiber.quant;
                    if ($mol_fiber.liveline) {
                        quant = Math.max(quant, Math.floor((now - $mol_fiber.liveline) / 2));
                        $mol_fiber.liveline = 0;
                    }
                    $mol_fiber.deadline = now + quant;
                    $mol_fiber.scheduled = null;
                    await $mol_fiber.tick();
                });
            }
            const promise = new this.$.Promise(done => this.queue.push(() => (done(), promise)));
            return promise;
        }
        schedule() {
            $mol_fiber.schedule().then(() => this.wake());
        }
        wake() {
            try {
                if (this.cursor > -2)
                    return this.get();
            }
            catch (error) {
                if ('then' in error)
                    return;
                $.$mol_fail_hidden(error);
            }
        }
        push(value) {
            value = this.$.$mol_conform(value, this.value);
            if (this.error || !Object.is(this.value, value)) {
                this.$.$mol_log2.info(this, $.$mol_fiber_token_changed1, value, $.$mol_fiber_token_changed2, this.error || this.value);
                this.obsolete_slaves();
                this.forget();
            }
            else {
                this.$.$mol_log2.info(this, $.$mol_fiber_token_actualized, value);
            }
            this.error = null;
            this.value = value;
            this.complete();
            return value;
        }
        fail(error) {
            this.complete();
            this.$.$mol_log2.info(this, $.$mol_fiber_token_failed, error);
            this.error = error;
            this.obsolete_slaves();
            return error;
        }
        wait(promise) {
            this.error = promise;
            this.$.$mol_log2.info(this, $.$mol_fiber_token_sleeped, promise);
            this.cursor = 0;
            return promise;
        }
        complete() {
            if (this.cursor <= -2)
                return;
            for (let index = 0; index < this.masters.length; index += 2) {
                this.complete_master(index);
            }
            this.cursor = -2;
        }
        complete_master(master_index) {
            this.disobey(master_index);
        }
        pull() {
            this.push(this.calculate());
        }
        update() {
            const slave = $mol_fiber.current;
            try {
                $mol_fiber.current = this;
                this.$.$mol_log2.info(this, $.$mol_fiber_token_runned);
                this.pull();
            }
            catch (error) {
                if ('then' in error) {
                    if (!slave) {
                        const listener = () => this.wake();
                        error = error.then(listener, listener);
                    }
                    this.wait(error);
                }
                else {
                    this.fail(error);
                }
            }
            finally {
                $mol_fiber.current = slave;
            }
        }
        get() {
            if (this.cursor > 0) {
                this.$.$mol_fail(new Error(`Cyclic dependency at ${this}`));
            }
            const slave = $mol_fiber.current;
            if (slave)
                slave.master = this;
            if (this.cursor > -2)
                this.update();
            if (this.error)
                return this.$.$mol_fail_hidden(this.error);
            return this.value;
        }
        limit() {
            if (!$mol_fiber.deadline)
                return;
            if (!$mol_fiber.current)
                return;
            if (Date.now() < $mol_fiber.deadline)
                return;
            this.$.$mol_fail_hidden($mol_fiber.schedule());
        }
        get master() {
            return this.masters[this.cursor];
        }
        set master(next) {
            if (this.cursor === -1)
                return;
            const cursor = this.cursor;
            const prev = this.masters[this.cursor];
            if (prev !== next) {
                if (prev)
                    this.rescue(prev, cursor);
                this.masters[cursor] = next;
                this.masters[cursor + 1] = this.obey(next, cursor);
            }
            this.cursor = cursor + 2;
        }
        rescue(master, master_index) { }
        obey(master, master_index) { return -1; }
        lead(slave, master_index) { return -1; }
        dislead(slave_index) {
            this.destructor();
        }
        disobey(master_index) {
            const master = this.masters[master_index];
            if (!master)
                return;
            master.dislead(this.masters[master_index + 1]);
            this.masters[master_index] = undefined;
            this.masters[master_index + 1] = undefined;
            this.$.$mol_array_trim(this.masters);
        }
        obsolete_slaves() { }
        obsolete(master_index) { }
        forget() {
            this.value = undefined;
        }
        abort() {
            this.forget();
            return true;
        }
        destructor() {
            if (!this.abort())
                return;
            this.$.$mol_log2.info(this, $.$mol_fiber_token_destructed);
            this.complete();
        }
        [$.$mol_dev_format_head]() {
            return $.$mol_dev_format_native(this);
        }
    }
    $mol_fiber.quant = 16;
    $mol_fiber.deadline = 0;
    $mol_fiber.liveline = 0;
    $mol_fiber.current = null;
    $mol_fiber.scheduled = null;
    $mol_fiber.queue = [];
    __decorate([
        $.$mol_log2.method
    ], $mol_fiber.prototype, "wake", null);
    __decorate([
        $.$mol_log2_indent.method
    ], $mol_fiber.prototype, "update", null);
    $.$mol_fiber = $mol_fiber;
    $.$mol_fiber_token_runned = new $.$mol_log2_token(' ► ');
    $.$mol_fiber_token_changed1 = new $.$mol_log2_token(' ˸ ');
    $.$mol_fiber_token_changed2 = new $.$mol_log2_token(' 🠈 ');
    $.$mol_fiber_token_actualized = new $.$mol_log2_token(' ✓ ');
    $.$mol_fiber_token_sleeped = new $.$mol_log2_token(' 💤 ');
    $.$mol_fiber_token_failed = new $.$mol_log2_token(' 🔥 ');
    $.$mol_fiber_token_destructed = new $.$mol_log2_token(' 🕱 ');
    $.$mol_log2_legend.info($.$mol_fiber_token_runned, '$mol_fiber starts execution');
    $.$mol_log2_legend.info(new $.$mol_log2_line($.$mol_fiber_token_changed1, $.$mol_fiber_token_changed2), '$mol_fiber value is changed to different value');
    $.$mol_log2_legend.info($.$mol_fiber_token_actualized, 'Actual $mol_fiber value is same as before');
    $.$mol_log2_legend.info($.$mol_fiber_token_sleeped, '$mol_fiber can not run now and awaits on promise');
    $.$mol_log2_legend.info($.$mol_fiber_token_failed, '$mol_fiber is failed and will be throw an Error or Promise');
    $.$mol_log2_legend.info($.$mol_fiber_token_destructed, '$mol_fiber fully destructed');
})($ || ($ = {}));
//fiber.js.map
;
"use strict";
var $;
(function ($_1) {
    let $$;
    (function ($$) {
        let $;
    })($$ = $_1.$$ || ($_1.$$ = {}));
    $_1.$mol_object_field = Symbol('$mol_object_field');
    class $mol_object extends $_1.$mol_object2 {
        static make(config) {
            return super.create(obj => {
                for (let key in config)
                    obj[key] = config[key];
            });
        }
    }
    $_1.$mol_object = $mol_object;
})($ || ($ = {}));
//object.js.map
;
"use strict";
var $;
(function ($) {
    function $mol_atom2_value(task) {
        const cached = $mol_atom2.cached;
        try {
            $mol_atom2.cached = true;
            return task();
        }
        finally {
            $mol_atom2.cached = cached;
        }
    }
    $.$mol_atom2_value = $mol_atom2_value;
    class $mol_atom2 extends $.$mol_fiber {
        constructor() {
            super(...arguments);
            this.slaves = [];
            this._value = undefined;
            this._error = null;
        }
        static get current() {
            const atom = $.$mol_fiber.current;
            if (atom instanceof $mol_atom2)
                return atom;
            return null;
        }
        static reap(atom) {
            this.reap_queue.push(atom);
            if (this.reap_task)
                return;
            this.reap_task = $.$mol_fiber_defer(() => {
                this.reap_task = null;
                while (true) {
                    const atom = this.reap_queue.pop();
                    if (!atom)
                        break;
                    if (!atom.alone)
                        continue;
                    atom.destructor();
                }
            });
        }
        rescue(master, cursor) {
            if (!(master instanceof $mol_atom2))
                return;
            const master_index = this.masters.length;
            const slave_index = this.masters[cursor + 1] + 1;
            master.slaves[slave_index] = master_index;
            this.masters.push(master, this.masters[cursor + 1]);
        }
        get() {
            if ($mol_atom2.cached)
                return this.value;
            const value = super.get();
            if (value === undefined)
                $.$mol_fail(new Error(`Not defined: ${this}`));
            return value;
        }
        pull() {
            if (this.cursor === 0)
                return super.pull();
            this.$.$mol_log2.info(this, $.$mol_atom2_token_revalidation);
            const masters = this.masters;
            for (let index = 0; index < masters.length; index += 2) {
                const master = masters[index];
                if (!master)
                    continue;
                try {
                    master.get();
                }
                catch (error) {
                    if ('then' in error)
                        $.$mol_fail_hidden(error);
                    this.cursor = 0;
                }
                if (this.cursor !== 0)
                    continue;
                this.$.$mol_log2.info(this, $.$mol_atom2_token_stumbled, this._error || this._value);
                return super.pull();
            }
            this.$.$mol_log2.info(this, $.$mol_atom2_token_revalidated, this._error || this._value);
            this.cursor = -2;
        }
        get value() { return this._value; }
        set value(next) {
            const prev = this._value;
            if (prev && this.$.$mol_owning_check(this, prev))
                prev.destructor();
            if (next && this.$.$mol_owning_catch(this, next)) {
                next[Symbol.toStringTag] = this[Symbol.toStringTag];
                next[$.$mol_object_field] = this[$.$mol_object_field];
            }
            this._value = next;
        }
        get error() { return this._error; }
        set error(next) {
            const prev = this._error;
            if (prev && this.$.$mol_owning_check(this, prev))
                prev.destructor();
            if (next && this.$.$mol_owning_catch(this, next)) {
                next[Symbol.toStringTag] = this[Symbol.toStringTag];
                next[$.$mol_object_field] = this[$.$mol_object_field];
            }
            this._error = next;
        }
        put(next) {
            this.cursor = this.masters.length;
            next = this.push(next);
            this.cursor = -3;
            return next;
        }
        complete_master(master_index) {
            if (this.masters[master_index] instanceof $mol_atom2) {
                if (master_index >= this.cursor)
                    this.disobey(master_index);
            }
            else {
                this.disobey(master_index);
            }
        }
        obey(master, master_index) {
            return master.lead(this, master_index);
        }
        lead(slave, master_index) {
            this.$.$mol_log2.info(this, $.$mol_atom2_token_leaded, slave);
            const slave_index = this.slaves.length;
            this.slaves[slave_index] = slave;
            this.slaves[slave_index + 1] = master_index;
            return slave_index;
        }
        dislead(slave_index) {
            if (slave_index < 0)
                return;
            this.$.$mol_log2.info(this, $.$mol_atom2_token_disleaded, this.slaves[slave_index]);
            this.slaves[slave_index] = undefined;
            this.slaves[slave_index + 1] = undefined;
            $.$mol_array_trim(this.slaves);
            if (this.cursor > -3 && this.alone)
                $mol_atom2.reap(this);
        }
        obsolete(master_index = -1) {
            if (this.cursor > 0) {
                if (master_index >= this.cursor - 2)
                    return;
                const path = [];
                let current = this;
                collect: while (current) {
                    path.push(current);
                    current = current.masters[current.cursor - 2];
                }
                this.$.$mol_fail(new Error(`Obsoleted while calculation \n\n${path.join('\n')}\n`));
            }
            if (this.cursor === 0)
                return;
            this.$.$mol_log2.info(this, $.$mol_atom2_token_obsoleted, this._error || this._value);
            if (this.cursor !== -1)
                this.doubt_slaves();
            this.cursor = 0;
        }
        doubt(master_index = -1) {
            if (this.cursor > 0) {
                if (master_index >= this.cursor - 2)
                    return;
                const path = [];
                let current = this;
                collect: while (current) {
                    path.push(current);
                    current = current.masters[current.cursor - 2];
                }
                this.$.$mol_fail(new Error(`Doubted while calculation \n\n${path.join('\n')}\n`));
            }
            if (this.cursor >= -1)
                return;
            this.$.$mol_log2.info(this, $.$mol_atom2_token_doubted, this._error || this._value);
            this.cursor = -1;
            this.doubt_slaves();
        }
        obsolete_slaves() {
            for (let index = 0; index < this.slaves.length; index += 2) {
                const slave = this.slaves[index];
                if (slave)
                    slave.obsolete(this.slaves[index + 1]);
            }
        }
        doubt_slaves() {
            for (let index = 0; index < this.slaves.length; index += 2) {
                const slave = this.slaves[index];
                if (slave)
                    slave.doubt(this.slaves[index + 1]);
            }
        }
        get fresh() {
            return $.$mol_log2_hidden.func(() => {
                if (this.cursor !== -2)
                    return;
                this.cursor = 0;
                $.$mol_fiber_solid.run(() => this.update());
            });
        }
        get alone() {
            return this.slaves.length === 0;
        }
        get derived() {
            for (let index = 0; index < this.masters.length; index += 2) {
                if (this.masters[index])
                    return true;
            }
            return false;
        }
        destructor() {
            if (!this.abort())
                return;
            this.$.$mol_log2.info(this, $.$mol_fiber_token_destructed);
            this.cursor = -3;
            for (let index = 0; index < this.masters.length; index += 2) {
                this.complete_master(index);
            }
        }
    }
    $mol_atom2.cached = false;
    $mol_atom2.reap_task = null;
    $mol_atom2.reap_queue = [];
    __decorate([
        $.$mol_log2_indent.method
    ], $mol_atom2.prototype, "obsolete_slaves", null);
    __decorate([
        $.$mol_log2_indent.method
    ], $mol_atom2.prototype, "doubt_slaves", null);
    $.$mol_atom2 = $mol_atom2;
    $.$mol_atom2_token_revalidation = new $.$mol_log2_token(' ⏭ ');
    $.$mol_atom2_token_stumbled = new $.$mol_log2_token(' ⏯ ');
    $.$mol_atom2_token_revalidated = new $.$mol_log2_token(' ✔ ');
    $.$mol_atom2_token_leaded = new $.$mol_log2_token(' ☍ ');
    $.$mol_atom2_token_disleaded = new $.$mol_log2_token(' ☌ ');
    $.$mol_atom2_token_obsoleted = new $.$mol_log2_token(' ✘ ');
    $.$mol_atom2_token_doubted = new $.$mol_log2_token(' � ');
    $.$mol_log2_legend.info($.$mol_atom2_token_revalidation, '$mol_atom2 starts masters cheking for changes');
    $.$mol_log2_legend.info($.$mol_atom2_token_stumbled, '$mol_atom2 is obsoleted while masters checking');
    $.$mol_log2_legend.info($.$mol_atom2_token_revalidated, '$mol_atom2 is actual becasue there is no changed masters');
    $.$mol_log2_legend.info($.$mol_atom2_token_leaded, '$mol_atom2 leads some slave');
    $.$mol_log2_legend.info($.$mol_atom2_token_disleaded, '$mol_atom2 disleads some slave');
    $.$mol_log2_legend.info($.$mol_atom2_token_obsoleted, '$mol_atom2 is obsoleted because some master is changed');
    $.$mol_log2_legend.info($.$mol_atom2_token_doubted, '$mol_atom2 is doubted because some master is doubted or obsoleted');
})($ || ($ = {}));
//atom2.js.map
;
"use strict";
var $;
(function ($) {
    class $mol_mem_force extends Object {
        constructor() {
            super();
            this.$mol_mem_force = true;
        }
        static toString() { return this.name; }
    }
    $mol_mem_force.$mol_mem_force = true;
    $.$mol_mem_force = $mol_mem_force;
    class $mol_mem_force_cache extends $mol_mem_force {
    }
    $.$mol_mem_force_cache = $mol_mem_force_cache;
    class $mol_mem_force_update extends $mol_mem_force {
    }
    $.$mol_mem_force_update = $mol_mem_force_update;
    class $mol_mem_force_fail extends $mol_mem_force_cache {
    }
    $.$mol_mem_force_fail = $mol_mem_force_fail;
})($ || ($ = {}));
//force.js.map
;
"use strict";
var $;
(function ($) {
    $.$mol_mem_cached = $.$mol_atom2_value;
    function $mol_mem_persist() {
        const atom = $.$mol_atom2.current;
        if (!atom)
            return;
        if (atom.hasOwnProperty('destructor'))
            return;
        atom.destructor = () => { };
    }
    $.$mol_mem_persist = $mol_mem_persist;
    function $mol_mem(proto, name, descr) {
        const value = descr.value;
        const store = new WeakMap();
        Object.defineProperty(proto, name + "()", {
            get: function () {
                return store.get(this);
            }
        });
        const get_cache = (host) => {
            let cache = store.get(host);
            if (cache)
                return cache;
            let cache2 = new $.$mol_atom2;
            cache2.calculate = value.bind(host);
            cache2[Symbol.toStringTag] = `${host}.${name}()`;
            cache2.abort = () => {
                store.delete(host);
                cache2.forget();
                return true;
            };
            $.$mol_owning_catch(host, cache2);
            cache2[$.$mol_object_field] = name;
            store.set(host, cache2);
            return cache2;
        };
        return Object.assign(Object.assign({}, descr || {}), { value(next, force) {
                if (next === undefined) {
                    const cache = get_cache(this);
                    if (force === $.$mol_mem_force_cache)
                        cache.obsolete(Number.NaN);
                    if ($.$mol_atom2.current)
                        return cache.get();
                    else
                        return $.$mol_fiber.run(() => cache.get());
                }
                return $.$mol_fiber.run(() => {
                    if (force === $.$mol_mem_force_fail)
                        return get_cache(this).fail(next);
                    if (force !== $.$mol_mem_force_cache)
                        next = value.call(this, next);
                    return get_cache(this).put(next);
                });
            } });
    }
    $.$mol_mem = $mol_mem;
})($ || ($ = {}));
//mem.js.map
;
"use strict";
var $;
(function ($) {
    function $mol_dict_key(value) {
        if (!value)
            return value;
        if (typeof value !== 'object')
            return value;
        if (Array.isArray(value))
            return value.join(' , ');
        if (Object.getPrototypeOf(Object.getPrototypeOf(value)) === null)
            return JSON.stringify(value);
        return value;
    }
    $.$mol_dict_key = $mol_dict_key;
    class $mol_dict extends Map {
        get(key) {
            return super.get($mol_dict_key(key));
        }
        has(key) {
            return super.has($mol_dict_key(key));
        }
        set(key, value) {
            return super.set($mol_dict_key(key), value);
        }
        delete(key) {
            return super.delete($mol_dict_key(key));
        }
        forEach(back, context) {
            return super.forEach((val, key, dict) => {
                if (typeof key === 'string')
                    key = JSON.parse(key);
                return back.call(this, val, key, dict);
            }, context);
        }
        [Symbol.iterator]() {
            const iterator = super[Symbol.iterator]();
            return {
                [Symbol.iterator]() {
                    return this;
                },
                next() {
                    const iteration = iterator.next();
                    if (!iteration.done) {
                        const key = iteration.value[0];
                        if (typeof key === 'string')
                            iteration.value[0] = JSON.parse(key);
                    }
                    return iteration;
                }
            };
        }
    }
    $.$mol_dict = $mol_dict;
})($ || ($ = {}));
//dict.js.map
;
"use strict";
var $;
(function ($) {
    function $mol_mem_key(proto, name, descr) {
        const value = descr.value;
        const store = new WeakMap();
        Object.defineProperty(proto, name + "()", {
            get: function () {
                return store.get(this);
            }
        });
        const get_cache = (host, key) => {
            let dict = store.get(host);
            if (!dict)
                store.set(host, dict = new $.$mol_dict);
            let cache = dict.get(key);
            if (cache)
                return cache;
            let cache2 = new $.$mol_atom2;
            cache2[Symbol.toStringTag] = `${host}.${name}(${JSON.stringify(key)})`;
            cache2.calculate = value.bind(host, key);
            cache2.abort = () => {
                dict.delete(key);
                if (dict.size === 0)
                    store.delete(host);
                cache2.forget();
                return true;
            };
            $.$mol_owning_catch(host, cache2);
            cache2[$.$mol_object_field] = name;
            dict.set(key, cache2);
            return cache2;
        };
        return {
            value(key, next, force) {
                if (next === undefined) {
                    const cache = get_cache(this, key);
                    if (force === $.$mol_mem_force_cache)
                        cache.obsolete();
                    if ($.$mol_atom2.current)
                        return cache.get();
                    else
                        return $.$mol_fiber.run(() => cache.get());
                }
                return $.$mol_fiber.run(() => {
                    if (force === $.$mol_mem_force_fail)
                        return get_cache(this, key).fail(next);
                    if (force !== $.$mol_mem_force_cache)
                        next = value.call(this, key, next);
                    return get_cache(this, key).put(next);
                });
            }
        };
    }
    $.$mol_mem_key = $mol_mem_key;
})($ || ($ = {}));
//key.js.map
;
"use strict";
var $node = new Proxy({}, { get(target, name, wrapper) {
        const path = require('path');
        const fs = require('fs');
        const mod = require('module');
        if (mod.builtinModules.indexOf(name) >= 0)
            return require(name);
        let dir = path.resolve('.');
        const suffix = `./node_modules/${name}`;
        while (!fs.existsSync(path.join(dir, suffix))) {
            const parent = path.resolve(dir, '..');
            if (parent === dir) {
                $.$mol_exec('.', 'npm', 'install', name);
                try {
                    $.$mol_exec('.', 'npm', 'install', '@types/' + name);
                }
                catch (_a) { }
                break;
            }
            else {
                dir = parent;
            }
        }
        return require(name);
    } });
//node.node.js.map
;
"use strict";
var $;
(function ($) {
})($ || ($ = {}));
//context.js.map
;
"use strict";
var $;
(function ($) {
    $.$mol_dom_context = new $node.jsdom.JSDOM('', { url: 'https://localhost/' }).window;
})($ || ($ = {}));
//context.node.js.map
;
"use strict";
var $;
(function ($) {
    function $mol_dom_parse(text, type = 'application/xhtml+xml') {
        const parser = new $.$mol_dom_context.DOMParser();
        const doc = parser.parseFromString(text, type);
        const error = doc.getElementsByTagName('parsererror')[0];
        if (error)
            throw new Error(error.textContent);
        return doc;
    }
    $.$mol_dom_parse = $mol_dom_parse;
})($ || ($ = {}));
//parse.js.map
;
"use strict";
var $;
(function ($) {
    class $mol_fetch_response extends $.$mol_object2 {
        constructor(native) {
            super();
            this.native = native;
        }
        headers() {
            return this.native.headers;
        }
        mime() {
            return this.headers().get('content-type');
        }
        stream() {
            return this.native.body;
        }
        text() {
            const buffer = this.buffer();
            const native = this.native;
            const mime = native.headers.get('content-type') || '';
            const [, charset] = /charset=(.*)/.exec(mime) || [, 'utf-8'];
            const decoder = new TextDecoder(charset);
            return decoder.decode(buffer);
        }
        json() {
            const response = this.native;
            const parse = $.$mol_fiber_sync(response.json);
            return parse.call(response);
        }
        buffer() {
            const response = this.native;
            const parse = $.$mol_fiber_sync(response.arrayBuffer);
            return parse.call(response);
        }
        xml() {
            return $.$mol_dom_parse(this.text(), 'application/xml');
        }
        xhtml() {
            return $.$mol_dom_parse(this.text(), 'application/xhtml+xml');
        }
        html() {
            return $.$mol_dom_parse(this.text(), 'text/html');
        }
    }
    __decorate([
        $.$mol_fiber.method
    ], $mol_fetch_response.prototype, "stream", null);
    __decorate([
        $.$mol_fiber.method
    ], $mol_fetch_response.prototype, "text", null);
    __decorate([
        $.$mol_fiber.method
    ], $mol_fetch_response.prototype, "json", null);
    __decorate([
        $.$mol_fiber.method
    ], $mol_fetch_response.prototype, "buffer", null);
    __decorate([
        $.$mol_fiber.method
    ], $mol_fetch_response.prototype, "xml", null);
    __decorate([
        $.$mol_fiber.method
    ], $mol_fetch_response.prototype, "xhtml", null);
    __decorate([
        $.$mol_fiber.method
    ], $mol_fetch_response.prototype, "html", null);
    $.$mol_fetch_response = $mol_fetch_response;
    class $mol_fetch extends $.$mol_object2 {
        static response(input, init) {
            const response = this.request(input, init);
            if (Math.floor(response.status / 100) === 2)
                return new $mol_fetch_response(response);
            throw new Error(response.statusText || `HTTP Error ${response.status}`);
        }
        static stream(input, init) {
            return this.response(input, init).stream();
        }
        static text(input, init) {
            return this.response(input, init).text();
        }
        static json(input, init) {
            return this.response(input, init).json();
        }
        static buffer(input, init) {
            this.response(input, init).buffer();
        }
        static xml(input, init) {
            return this.response(input, init).xml();
        }
        static xhtml(input, init) {
            return this.response(input, init).xhtml();
        }
        static html(input, init) {
            return this.response(input, init).html();
        }
    }
    $mol_fetch.request = $.$mol_fiber_sync((input, init = {}) => {
        if (typeof AbortController === 'function') {
            var controller = new AbortController();
            init.signal = controller.signal;
            const fiber = $.$mol_fiber.current;
            fiber.abort = () => {
                if (fiber.cursor === -2)
                    return true;
                controller.abort();
                return true;
            };
        }
        let native = $.$mol_dom_context.fetch;
        if (!native)
            native = $node['node-fetch'];
        return native(input, init);
    });
    __decorate([
        $.$mol_fiber.method
    ], $mol_fetch, "response", null);
    __decorate([
        $.$mol_fiber.method
    ], $mol_fetch, "stream", null);
    __decorate([
        $.$mol_fiber.method
    ], $mol_fetch, "text", null);
    __decorate([
        $.$mol_fiber.method
    ], $mol_fetch, "json", null);
    __decorate([
        $.$mol_fiber.method
    ], $mol_fetch, "buffer", null);
    __decorate([
        $.$mol_fiber.method
    ], $mol_fetch, "xml", null);
    __decorate([
        $.$mol_fiber.method
    ], $mol_fetch, "xhtml", null);
    __decorate([
        $.$mol_fiber.method
    ], $mol_fetch, "html", null);
    $.$mol_fetch = $mol_fetch;
})($ || ($ = {}));
//fetch.js.map
;
"use strict";
var $;
(function ($) {
    function $mol_const(value) {
        var getter = (() => value);
        getter['()'] = value;
        getter[Symbol.toStringTag] = value;
        return getter;
    }
    $.$mol_const = $mol_const;
})($ || ($ = {}));
//const.js.map
;
"use strict";
var $;
(function ($) {
    console.warn('$mol_http is deprecated. Use $mol_fetch instead.');
    class $mol_http extends $.$mol_object {
        static resource(uri) {
            const resolver = $.$mol_dom_context.document.createElement('a');
            resolver.href = uri;
            return this.resource_absolute(resolver.href);
        }
        static resource_absolute(uri) {
            return $mol_http.make({
                uri: $.$mol_const(uri)
            });
        }
        uri() { return ''; }
        method_get() { return 'Get'; }
        method_put() { return 'Put'; }
        credentials() {
            return null;
        }
        headers() {
            return {};
        }
        response_type() {
            return '';
        }
        response(next, force) {
            const creds = this.credentials();
            const method = (next === void 0) ? this.method_get() : this.method_put();
            const uri = this.uri();
            const headers = this.headers();
            return $.$mol_fetch.response(uri, {
                credentials: creds ? 'include' : undefined,
                method,
                headers,
                body: next
            });
        }
        text(next, force) {
            return this.response(next, force).text();
        }
        xml(next, force) {
            return this.response(next, force).xml();
        }
        json(next, force) {
            const next2 = next && JSON.stringify(next, null, '\t');
            return this.response(next2, force).json();
        }
    }
    __decorate([
        $.$mol_mem
    ], $mol_http.prototype, "json", null);
    __decorate([
        $.$mol_mem_key
    ], $mol_http, "resource_absolute", null);
    $.$mol_http = $mol_http;
})($ || ($ = {}));
//http.js.map
;
"use strict";
var $;
(function ($) {
    function $mol_deprecated(message) {
        return (host, field, descr) => {
            const value = descr.value;
            descr.value = function $mol_deprecated_wrapper(...args) {
                console.warn(`${host.constructor.name}::${field} is deprecated. ${message}`);
                return value.call(this, ...args);
            };
        };
    }
    $.$mol_deprecated = $mol_deprecated;
})($ || ($ = {}));
//deprecated.js.map
;
"use strict";
var $;
(function ($) {
    class $mol_http_resource extends $.$mol_http {
        static item(uri) {
            return $.$mol_http.resource(uri);
        }
    }
    __decorate([
        $.$mol_deprecated('Use $mol_http.resource insted.')
    ], $mol_http_resource, "item", null);
    $.$mol_http_resource = $mol_http_resource;
    class $mol_http_resource_json {
        static item(uri) {
            return $.$mol_http.resource(uri);
        }
    }
    __decorate([
        $.$mol_deprecated('Use $mol_http.resource insted.')
    ], $mol_http_resource_json, "item", null);
    $.$mol_http_resource_json = $mol_http_resource_json;
})($ || ($ = {}));
//resource.js.map
;
"use strict";
var $;
(function ($) {
    function $mol_merge_dict(target, source) {
        let result = {};
        for (let key in target)
            result[key] = target[key];
        for (let key in source)
            result[key] = source[key];
        return result;
    }
    $.$mol_merge_dict = $mol_merge_dict;
})($ || ($ = {}));
//dict.js.map
;
"use strict";
var $;
(function ($) {
    class $mol_model extends $.$mol_object {
        static item(uri) {
            const instance = new this;
            instance.uri = () => uri;
            return instance;
        }
        static cache() {
            return {};
        }
        uri() {
            return '';
        }
        resource_url() {
            return this.uri();
        }
        method_put() {
            return 'Put';
        }
        json(next, force) {
            let json;
            let uri = this.uri();
            const cache = $mol_model.cache();
            if (!next && !force) {
                json = cache[uri];
                if (json != undefined)
                    return json;
            }
            cache[uri] = undefined;
            const resource = $.$mol_http.resource(this.resource_url());
            resource.method_put = $.$mol_const(this.method_put());
            return this.json_update(resource.json(next, force));
        }
        json_update(patch) {
            const uri = this.uri();
            const cache = $mol_model.cache();
            return cache[uri] = $.$mol_merge_dict(cache[uri] || {}, patch);
        }
    }
    __decorate([
        $.$mol_mem
    ], $mol_model.prototype, "json", null);
    __decorate([
        $.$mol_mem_key
    ], $mol_model, "item", null);
    __decorate([
        $.$mol_mem
    ], $mol_model, "cache", null);
    $.$mol_model = $mol_model;
    function $mol_model_prop(field, make) {
        return (host, prop, descr) => {
            if (field)
                field = prop;
            const value = descr.value;
            descr.value = function (next) {
                const val = this.json(next === undefined ? undefined : Object.assign(Object.assign({}, this.json()), { [field]: next }))[field];
                if (val === undefined)
                    return value();
                if (make)
                    return make(val);
                return val;
            };
        };
    }
    $.$mol_model_prop = $mol_model_prop;
})($ || ($ = {}));
//model.js.map
;
"use strict";
var $;
(function ($) {
    class $mol_time_base {
        static formatter(pattern) {
            if (this.patterns[pattern])
                return this.patterns[pattern];
            var tokens = Object.keys(this.patterns)
                .sort()
                .reverse()
                .map((token) => token.replace(/([-+*.\[\]()\^])/g, '\\$1'));
            var lexer = RegExp('(.*?)(' + tokens.join('|') + '|$)', 'g');
            var funcs = [];
            pattern.replace(lexer, (str, text, token) => {
                if (text)
                    funcs.push(() => text);
                if (token)
                    funcs.push(this.patterns[token]);
                return str;
            });
            return this.patterns[pattern] = (arg) => {
                return funcs.reduce((res, func) => res + func(arg), '');
            };
        }
        toString(pattern) {
            var Base = this.constructor;
            var formatter = Base.formatter(pattern);
            return formatter.call(Base, this);
        }
    }
    $mol_time_base.patterns = {};
    $.$mol_time_base = $mol_time_base;
})($ || ($ = {}));
//base.js.map
;
"use strict";
var $;
(function ($) {
    class $mol_time_duration extends $.$mol_time_base {
        constructor(config = 0) {
            super();
            this.year = 0;
            this.month = 0;
            this.day = 0;
            this.hour = 0;
            this.minute = 0;
            this.second = 0;
            if (typeof config === 'number') {
                this.second = config / 1000;
                return;
            }
            if (typeof config === 'string') {
                if (config === 'Z') {
                    this.hour = 0;
                    this.minute = 0;
                    return;
                }
                duration: {
                    const parser = /^P(?:([+-]?\d+(?:\.\d+)?)Y)?(?:([+-]?\d+(?:\.\d+)?)M)?(?:([+-]?\d+(?:\.\d+)?)D)?(?:T(?:([+-]?\d+(?:\.\d+)?)h)?(?:([+-]?\d+(?:\.\d+)?)m)?(?:([+-]?\d+(?:\.\d+)?)s)?)?$/i;
                    const found = parser.exec(config);
                    if (!found)
                        break duration;
                    if (found[1])
                        this.year = Number(found[1]);
                    if (found[2])
                        this.month = Number(found[2]);
                    if (found[3])
                        this.day = Number(found[3]);
                    if (found[4])
                        this.hour = Number(found[4]);
                    if (found[5])
                        this.minute = Number(found[5]);
                    if (found[6])
                        this.second = Number(found[6]);
                    return;
                }
                offset: {
                    var parser = /^[+-](\d\d)(?::?(\d\d))?$/i;
                    var found = parser.exec(config);
                    if (!found)
                        break offset;
                    if (found[1])
                        this.hour = Number(found[1]);
                    if (found[2])
                        this.minute = Number(found[2]);
                    return;
                }
                throw new Error(`Can not parse time duration (${config})`);
            }
            this.year = config.year || 0;
            this.month = config.month || 0;
            this.day = config.day || 0;
            this.hour = config.hour || 0;
            this.minute = config.minute || 0;
            this.second = config.second || 0;
        }
        summ(config) {
            const duration = new $mol_time_duration(config);
            return new $mol_time_duration({
                year: this.year + duration.year,
                month: this.month + duration.month,
                day: this.day + duration.day,
                hour: this.hour + duration.hour,
                minute: this.minute + duration.minute,
                second: this.second + duration.second,
            });
        }
        mult(numb) {
            return new $mol_time_duration({
                year: this.year && this.year * numb,
                month: this.month && this.month * numb,
                day: this.day && this.day * numb,
                hour: this.hour && this.hour * numb,
                minute: this.minute && this.minute * numb,
                second: this.second && this.second * numb,
            });
        }
        count(config) {
            const duration = new $mol_time_duration(config);
            return this.valueOf() / duration.valueOf();
        }
        valueOf() {
            var day = this.year * 365 + this.month * 30.4 + this.day;
            var second = ((day * 24 + this.hour) * 60 + this.minute) * 60 + this.second;
            return second * 1000;
        }
        toJSON() { return this.toString(); }
        toString(pattern = 'P#Y#M#DT#h#m#s') {
            return super.toString(pattern);
        }
    }
    $mol_time_duration.patterns = {
        '#Y': (duration) => {
            if (!duration.year)
                return '';
            return duration.year + 'Y';
        },
        '#M': (duration) => {
            if (!duration.month)
                return '';
            return duration.month + 'M';
        },
        '#D': (duration) => {
            if (!duration.day)
                return '';
            return duration.day + 'D';
        },
        '#h': (duration) => {
            if (!duration.hour)
                return '';
            return duration.hour + 'H';
        },
        '#m': (duration) => {
            if (!duration.minute)
                return '';
            return duration.minute + 'M';
        },
        '#s': (duration) => {
            if (!duration.second)
                return '';
            return duration.second + 'S';
        },
        '+hh': (duration) => {
            var hour = duration.hour;
            var sign = '+';
            if (hour < 0) {
                sign = '-';
                hour = -hour;
            }
            return (hour < 10)
                ? (sign + '0' + hour)
                : (sign + hour);
        },
        'mm': (duration) => {
            return (duration.minute < 10)
                ? ('0' + duration.minute)
                : String(duration.minute);
        },
    };
    $.$mol_time_duration = $mol_time_duration;
})($ || ($ = {}));
//duration.js.map
;
"use strict";
var $;
(function ($) {
    class $mol_time_moment extends $.$mol_time_base {
        constructor(config = new Date) {
            super();
            if (typeof config === 'number')
                config = new Date(config);
            if (typeof config === 'string') {
                var parsed = /^(?:(\d\d\d\d)(?:-?(\d\d)(?:-?(\d\d))?)?)?(?:[T ](\d\d)(?::?(\d\d)(?::?(\d\d(?:\.\d+)?))?)?(Z|[\+\-]\d\d(?::?(?:\d\d)?)?)?)?$/.exec(config);
                if (!parsed)
                    throw new Error(`Can not parse time moment (${config})`);
                if (parsed[1])
                    this.year = Number(parsed[1]);
                if (parsed[2])
                    this.month = Number(parsed[2]) - 1;
                if (parsed[3])
                    this.day = Number(parsed[3]) - 1;
                if (parsed[4])
                    this.hour = Number(parsed[4]);
                if (parsed[5])
                    this.minute = Number(parsed[5]);
                if (parsed[6])
                    this.second = Number(parsed[6]);
                if (parsed[7])
                    this.offset = new $.$mol_time_duration(parsed[7]);
                return;
            }
            if (config instanceof Date) {
                this.year = config.getFullYear();
                this.month = config.getMonth();
                this.day = config.getDate() - 1;
                this.hour = config.getHours();
                this.minute = config.getMinutes();
                this.second = config.getSeconds() + config.getMilliseconds() / 1000;
                var offset = -config.getTimezoneOffset();
                this.offset = new $.$mol_time_duration({
                    hour: (offset < 0) ? Math.ceil(offset / 60) : Math.floor(offset / 60),
                    minute: offset % 60
                });
                return;
            }
            this.year = config.year;
            this.month = config.month;
            this.day = config.day;
            this.hour = config.hour;
            this.minute = config.minute;
            this.second = config.second;
            this.offset = config.offset == null ? config.offset : new $.$mol_time_duration(config.offset);
        }
        get weekday() {
            return (this.native.getDay() + 6) % 7;
        }
        get native() {
            if (this._native)
                return this._native;
            var utc = this.toOffset('Z');
            return this._native = new Date(Date.UTC((utc.year || 0), (utc.month || 0), (utc.day || 0) + 1, (utc.hour || 0), (utc.minute || 0), (utc.second && Math.floor(utc.second) || 0), (utc.second && Math.floor((utc.second - Math.floor(utc.second)) * 1000) || 0)));
        }
        get normal() {
            if (this._normal)
                return this._normal;
            const moment = new $mol_time_moment(this.native);
            return this._normal = new $mol_time_moment({
                year: (this.year === undefined) ? undefined : moment.year,
                month: (this.month === undefined) ? undefined : moment.month,
                day: (this.day === undefined) ? undefined : moment.day,
                hour: (this.hour === undefined) ? undefined : moment.hour,
                minute: (this.minute === undefined) ? undefined : moment.minute,
                second: (this.second === undefined) ? undefined : moment.second,
                offset: (this.offset === undefined) ? undefined : moment.offset,
            });
        }
        merge(config) {
            var moment = new $mol_time_moment(config);
            return new $mol_time_moment({
                year: (moment.year === undefined) ? this.year : moment.year,
                month: (moment.month === undefined) ? this.month : moment.month,
                day: (moment.day === undefined) ? this.day : moment.day,
                hour: (moment.hour === undefined) ? this.hour : moment.hour,
                minute: (moment.minute === undefined) ? this.minute : moment.minute,
                second: (moment.second === undefined) ? this.second : moment.second,
                offset: (moment.offset === undefined) ? this.offset : moment.offset,
            });
        }
        shift(config) {
            var duration = new $.$mol_time_duration(config);
            var moment = new $mol_time_moment().merge(this);
            var second = (moment.second) + (duration.second || 0);
            var native = new Date((moment.year) + (duration.year || 0), (moment.month) + (duration.month || 0), (moment.day) + 1 + (duration.day || 0), (moment.hour) + (duration.hour || 0), (moment.minute) + (duration.minute || 0), Math.floor(second), (second - Math.floor(second)) * 1000);
            if (isNaN(native.valueOf()))
                throw new Error('Wrong time');
            return new $mol_time_moment({
                year: (this.year === undefined) ? undefined : native.getFullYear(),
                month: (this.month === undefined) ? undefined : native.getMonth(),
                day: (this.day === undefined) ? undefined : native.getDate() - 1,
                hour: (this.hour === undefined) ? undefined : native.getHours(),
                minute: (this.minute === undefined) ? undefined : native.getMinutes(),
                second: (this.second === undefined) ? undefined : native.getSeconds() + native.getMilliseconds() / 1000,
                offset: this.offset,
            });
        }
        toOffset(config) {
            const duration = new $.$mol_time_duration(config);
            const offset = this.offset || new $mol_time_moment().offset;
            const moment = this.shift(duration.summ(offset.mult(-1)));
            return moment.merge({ offset: duration });
        }
        valueOf() { return this.native.getTime(); }
        toJSON() { return this.toString(); }
        toString(pattern = 'YYYY-MM-DDThh:mm:ss.sssZ') {
            return super.toString(pattern);
        }
    }
    $mol_time_moment.patterns = {
        'YYYY': (moment) => {
            if (moment.year == null)
                return '';
            return String(moment.year);
        },
        'AD': (moment) => {
            if (moment.year == null)
                return '';
            return String(Math.floor(moment.year / 100) + 1);
        },
        'YY': (moment) => {
            if (moment.year == null)
                return '';
            return String(moment.year % 100);
        },
        'Month': (moment) => {
            if (moment.month == null)
                return '';
            return moment.native.toLocaleString(undefined, { month: 'long' });
        },
        'DD Month': (moment) => {
            return moment.native.toLocaleString(undefined, { day: '2-digit', month: 'long' });
        },
        'D Month': (moment) => {
            return moment.native.toLocaleString(undefined, { day: 'numeric', month: 'long' });
        },
        'Mon': (moment) => {
            if (moment.month == null)
                return '';
            return moment.native.toLocaleString(undefined, { month: 'short' });
        },
        'DD Mon': (moment) => {
            return moment.native.toLocaleString(undefined, { day: '2-digit', month: 'short' });
        },
        'D Mon': (moment) => {
            return moment.native.toLocaleString(undefined, { day: 'numeric', month: 'short' });
        },
        '-MM': (moment) => {
            if (moment.month == null)
                return '';
            return '-' + $mol_time_moment.patterns['MM'](moment);
        },
        'MM': (moment) => {
            if (moment.month == null)
                return '';
            var month = moment.month + 1;
            return (month < 10)
                ? ('0' + month)
                : ('' + month);
        },
        'M': (moment) => {
            if (moment.month == null)
                return '';
            return String(moment.month + 1);
        },
        'WeekDay': (moment) => {
            if (moment.weekday == null)
                return '';
            return moment.native.toLocaleString(undefined, { weekday: 'long' });
        },
        'WD': (moment) => {
            if (moment.weekday == null)
                return '';
            return moment.native.toLocaleString(undefined, { weekday: 'short' });
        },
        '-DD': (moment) => {
            if (moment.day == null)
                return '';
            return '-' + $mol_time_moment.patterns['DD'](moment);
        },
        'DD': (moment) => {
            if (moment.day == null)
                return '';
            var day = moment.day + 1;
            return (day < 10)
                ? ('0' + day)
                : String(day);
        },
        'D': (moment) => {
            if (moment.day == null)
                return '';
            return String(moment.day + 1);
        },
        'Thh': (moment) => {
            if (moment.hour == null)
                return '';
            return 'T' + $mol_time_moment.patterns['hh'](moment);
        },
        'hh': (moment) => {
            if (moment.hour == null)
                return '';
            return (moment.hour < 10)
                ? ('0' + moment.hour)
                : String(moment.hour);
        },
        'h': (moment) => {
            if (moment.hour == null)
                return '';
            return String(moment.hour);
        },
        ':mm': (moment) => {
            if (moment.minute == null)
                return '';
            return ':' + $mol_time_moment.patterns['mm'](moment);
        },
        'mm': (moment) => {
            if (moment.minute == null)
                return '';
            return (moment.minute < 10)
                ? ('0' + moment.minute)
                : String(moment.minute);
        },
        'm': (moment) => {
            if (moment.minute == null)
                return '';
            return String(moment.minute);
        },
        ':ss': (moment) => {
            if (moment.second == null)
                return '';
            return ':' + $mol_time_moment.patterns['ss'](moment);
        },
        'ss': (moment) => {
            if (moment.second == null)
                return '';
            var second = Math.floor(moment.second);
            return (second < 10)
                ? ('0' + second)
                : String(second);
        },
        's': (moment) => {
            if (moment.second == null)
                return '';
            return String(Math.floor(moment.second));
        },
        '.sss': (moment) => {
            if (moment.second == null)
                return '';
            if (moment.second - Math.floor(moment.second) === 0)
                return '';
            return '.' + $mol_time_moment.patterns['sss'](moment);
        },
        'sss': (moment) => {
            if (moment.second == null)
                return '';
            var millisecond = Math.floor((moment.second - Math.floor(moment.second)) * 1000);
            return (millisecond < 10)
                ? ('00' + millisecond)
                : (millisecond < 100)
                    ? ('0' + millisecond)
                    : String(millisecond);
        },
        'Z': (moment) => {
            var offset = moment.offset;
            if (!offset)
                return '';
            return offset.toString('+hh:mm');
        }
    };
    $.$mol_time_moment = $mol_time_moment;
})($ || ($ = {}));
//moment.js.map
;
"use strict";
var $;
(function ($) {
    class $mol_state_local extends $.$mol_object {
        static native() {
            if (this['native()'])
                return this['native()'];
            check: try {
                const native = $.$mol_dom_context.localStorage;
                if (!native)
                    break check;
                native.setItem('', '');
                native.removeItem('');
                return this['native()'] = native;
            }
            catch (error) {
                console.warn(error);
            }
            return this['native()'] = {
                getItem(key) {
                    return this[':' + key];
                },
                setItem(key, value) {
                    this[':' + key] = value;
                },
                removeItem(key) {
                    this[':' + key] = void 0;
                }
            };
        }
        static value(key, next, force) {
            if (next === void 0)
                return JSON.parse(this.native().getItem(key) || 'null');
            if (next === null)
                this.native().removeItem(key);
            else
                this.native().setItem(key, JSON.stringify(next));
            return next;
        }
        prefix() { return ''; }
        value(key, next) {
            return $mol_state_local.value(this.prefix() + '.' + key, next);
        }
    }
    __decorate([
        $.$mol_mem_key
    ], $mol_state_local, "value", null);
    $.$mol_state_local = $mol_state_local;
})($ || ($ = {}));
//local.js.map
;
"use strict";
var $;
(function ($) {
    console.warn('$mol_atom_wait is deprecated. Use $mol_fiber_sync instead.');
    class $mol_atom_wait extends Promise {
        constructor(message = 'Wait...') {
            super(() => { });
            this.message = message;
        }
    }
    $.$mol_atom_wait = $mol_atom_wait;
    $mol_atom_wait.prototype.constructor = Promise;
})($ || ($ = {}));
//wait.js.map
;
"use strict";
var $;
(function ($) {
    class $mol_github_auth extends $.$mol_object {
        static id() { return '07c88ba2782884016182'; }
        static secret() { return '5874d66181f987a8bb2dc07bd431aad1c7a5cb38'; }
        static code_uri() { return 'https://github.com/login/oauth/authorize'; }
        static token_uri() { return 'http://cors.hyoo.ru/https://github.com/login/oauth/access_token'; }
        static cache(next) {
            return $.$mol_state_local.value(`${this}.cache()`, next) || { scopes: [], token: '' };
        }
        static scopes(next) {
            let cache = this.cache();
            let scopes = cache.scopes;
            for (let scope of next || []) {
                if (scopes.indexOf(scope) >= 0)
                    continue;
                scopes = scopes.concat(scope);
                this.cache({ scopes, token: '' });
            }
            return scopes;
        }
        static code(next, force) {
            const win = $.$mol_dom_context.open(`${this.code_uri()}?client_id=${this.id()}&scope=${this.scopes()}`, '$mol_github');
            win.focus();
            const timer = setInterval(() => {
                try {
                    win.location.href;
                }
                catch (error) {
                    return;
                }
                const search = win.location.search;
                if (search !== undefined) {
                    const found = search.match(/\bcode=([^&]+)/);
                    if (!found)
                        return;
                    this.code(found[1], $.$mol_mem_force_cache);
                }
                else {
                    this.code(new Error('Can not get auth code'), $.$mol_mem_force_cache);
                }
                clearInterval(timer);
                win.close();
                $.$mol_dom_context.focus();
            }, 16);
            throw new $.$mol_atom_wait('Request auth code...');
        }
        static token_last(next, force) {
            const cache = this.cache();
            if (force)
                this.cache(Object.assign(Object.assign({}, cache), { token: '' }));
            if (!force && cache.token)
                return cache.token;
            const auth_uri = `${this.token_uri()}?code=${this.code(undefined, force)}&client_id=${this.id()}&client_secret=${this.secret()}`;
            const resource = $.$mol_http.resource(auth_uri);
            resource.headers = () => ({ 'Accept': 'application/json' });
            const response = resource.json();
            if (response.error_description)
                throw new Error(response.error_description);
            const token = response.access_token;
            this.cache(Object.assign(Object.assign({}, cache), { token }));
            return token;
        }
        static token(scopes) {
            this.scopes(scopes);
            return this.token_last();
        }
    }
    __decorate([
        $.$mol_mem
    ], $mol_github_auth, "cache", null);
    __decorate([
        $.$mol_mem
    ], $mol_github_auth, "scopes", null);
    __decorate([
        $.$mol_mem
    ], $mol_github_auth, "code", null);
    __decorate([
        $.$mol_mem
    ], $mol_github_auth, "token_last", null);
    $.$mol_github_auth = $mol_github_auth;
})($ || ($ = {}));
//auth.js.map
;
"use strict";
var $;
(function ($) {
    class $mol_github_entity extends $.$mol_model {
        link() {
            return this.json().html_url;
        }
        id() {
            return this.json().id;
        }
        moment_created() {
            return new $.$mol_time_moment(this.json().created_at);
        }
        moment_updated() {
            return new $.$mol_time_moment(this.json().updated_at);
        }
        method_put() {
            return 'PATCH';
        }
        resource_url() {
            const auth = this.$.$mol_github_auth;
            return `${this.uri()}?client_id=${auth.id()}&client_secret=${auth.secret()}`;
        }
    }
    __decorate([
        $.$mol_mem
    ], $mol_github_entity.prototype, "moment_created", null);
    __decorate([
        $.$mol_mem
    ], $mol_github_entity.prototype, "moment_updated", null);
    $.$mol_github_entity = $mol_github_entity;
})($ || ($ = {}));
//entity.js.map
;
"use strict";
var $;
(function ($) {
    class $mol_github_user extends $.$mol_github_entity {
        name() {
            return this.json().login;
        }
        avatar() {
            return this.json().avatar_url;
        }
    }
    $.$mol_github_user = $mol_github_user;
})($ || ($ = {}));
//user.js.map
;
"use strict";
var $;
(function ($) {
    class $mol_github_label extends $.$mol_github_entity {
        name() {
            return this.json().name;
        }
        color() {
            return this.json().color;
        }
        default() {
            return this.json().default;
        }
    }
    $.$mol_github_label = $mol_github_label;
})($ || ($ = {}));
//label.js.map
;
"use strict";
var $;
(function ($) {
    class $mol_github_comment extends $.$mol_github_entity {
        json_update(patch) {
            if (patch.user)
                $.$mol_github_user.item(patch.user.url).json_update(patch.user);
            return super.json_update(patch);
        }
        issue() {
            return $.$mol_github_issue.item(this.json().issue_url);
        }
        user() {
            return $.$mol_github_user.item(this.json().user.url);
        }
        text(next) {
            return this.json($.$mol_maybe(next).map(next => ({ body: next }))[0]).body;
        }
    }
    $.$mol_github_comment = $mol_github_comment;
})($ || ($ = {}));
//comment.js.map
;
"use strict";
var $;
(function ($) {
    class $mol_github_issue extends $.$mol_model {
        json_update(patch) {
            if (patch.user)
                $.$mol_github_user.item(patch.user.url).json_update(patch.user);
            if (patch.closed_by)
                $.$mol_github_user.item(patch.closed_by.url).json_update(patch.closed_by);
            if (patch.assignees) {
                for (let assignee of patch.assignees) {
                    $.$mol_github_user.item(assignee.url).json_update(assignee);
                }
            }
            if (patch.labels) {
                for (let label of patch.labels) {
                    $.$mol_github_label.item(label.url).json_update(label);
                }
            }
            return super.json_update(patch);
        }
        repository() {
            return $.$mol_github_repository.item(this.uri().replace(/\/[^\/]*\/[^\/]*$/, ''));
        }
        author() {
            return $.$mol_github_user.item(this.json().user.url);
        }
        title() {
            return this.json().title;
        }
        text() {
            return this.json().body;
        }
        closer() {
            return $.$mol_maybe(this.json().closed_by).map(json => $.$mol_github_user.item(json.url))[0] || null;
        }
        assignees() {
            return this.json().assignees.map(json => $.$mol_github_user.item(json.url));
        }
        labels() {
            return this.json().labels.map(json => $.$mol_github_label.item(json.url));
        }
        moment_closed() {
            return new $.$mol_time_moment(this.json().updated_at);
        }
        comments() {
            return $mol_github_issue_comments.item(`${this.uri()}/comments`);
        }
    }
    __decorate([
        $.$mol_mem
    ], $mol_github_issue.prototype, "assignees", null);
    __decorate([
        $.$mol_mem
    ], $mol_github_issue.prototype, "labels", null);
    __decorate([
        $.$mol_mem
    ], $mol_github_issue.prototype, "moment_closed", null);
    __decorate([
        $.$mol_mem
    ], $mol_github_issue.prototype, "comments", null);
    $.$mol_github_issue = $mol_github_issue;
    class $mol_github_issue_comments extends $.$mol_model {
        json_update(patch) {
            if (patch) {
                for (let comment of patch) {
                    $.$mol_github_comment.item(comment.url).json_update(comment);
                }
            }
            const cache = $.$mol_model.cache();
            return cache[this.uri()] = patch;
        }
        items(next, force) {
            return this.json(undefined, force).map(json => $.$mol_github_comment.item(json.url));
        }
        add(config, next, force) {
            if (!config)
                return;
            const resource = $.$mol_http.resource(this.uri() + '?');
            resource.method_put = $.$mol_const('POST');
            resource.headers = $.$mol_const({
                'Authorization': `token ${$.$mol_github_auth.token(['public_repo'])}`
            });
            try {
                const json = resource.json({ body: config.text }, force);
                const comment = $.$mol_github_comment.item(json.url);
                comment.json_update(json);
                this.json(undefined, $.$mol_mem_force_cache);
                return comment;
            }
            catch (error) {
                if (error.message === 'Unauthorized') {
                    $.$mol_github_auth.token_last(undefined, $.$mol_mem_force_update).valueOf();
                }
                throw error;
            }
        }
    }
    __decorate([
        $.$mol_mem
    ], $mol_github_issue_comments.prototype, "items", null);
    __decorate([
        $.$mol_mem_key
    ], $mol_github_issue_comments.prototype, "add", null);
    $.$mol_github_issue_comments = $mol_github_issue_comments;
})($ || ($ = {}));
//issue.js.map
;
"use strict";
var $;
(function ($) {
    class $mol_github_repository extends $.$mol_github_entity {
        json_update(patch) {
            if (patch.owner)
                $.$mol_github_user.item(patch.owner.url).json_update(patch.owner);
            return super.json_update(patch);
        }
        owner() {
            return $.$mol_github_user.item(this.json().owner.url);
        }
        name() {
            return this.uri().match(/[^\/]+$/)[0];
        }
        name_full() {
            return this.uri().match(/[^\/]+\/[^\/]+$/)[0];
        }
        issues() {
            return $mol_github_repository_issues.item(`${this.uri()}/issues`);
        }
    }
    __decorate([
        $.$mol_mem
    ], $mol_github_repository.prototype, "issues", null);
    $.$mol_github_repository = $mol_github_repository;
    class $mol_github_repository_issues extends $.$mol_model {
        json_update(patch) {
            if (patch) {
                for (let issue of patch) {
                    $.$mol_github_issue.item(issue.url).json_update(issue);
                }
            }
            const cache = $.$mol_model.cache();
            return cache[this.uri()] = patch;
        }
        items(next, force) {
            return this.json(undefined, force).map(json => $.$mol_github_issue.item(json.url));
        }
        add(config, next, force) {
            if (!config)
                return;
            const resource = $.$mol_http.resource(this.uri() + '?');
            resource.method_put = $.$mol_const('POST');
            resource.headers = $.$mol_const({
                'Authorization': `token ${$.$mol_github_auth.token(['public_repo'])}`
            });
            try {
                const json = resource.json({ title: config.title, body: config.text }, force);
                const comment = $.$mol_github_issue.item(json.url);
                comment.json_update(json);
                this.json(undefined, $.$mol_mem_force_cache);
                return comment;
            }
            catch (error) {
                if (error.message === 'Unauthorized') {
                    $.$mol_github_auth.token_last(undefined, $.$mol_mem_force_update).valueOf();
                }
                throw error;
            }
        }
    }
    __decorate([
        $.$mol_mem
    ], $mol_github_repository_issues.prototype, "items", null);
    __decorate([
        $.$mol_mem_key
    ], $mol_github_repository_issues.prototype, "add", null);
    $.$mol_github_repository_issues = $mol_github_repository_issues;
})($ || ($ = {}));
//repository.js.map
;
"use strict";
var $;
(function ($) {
    class $mol_github_search_issues extends $.$mol_model {
        json_update(patch) {
            if (patch) {
                for (let issue of patch.items) {
                    $.$mol_github_issue.item(issue.url).json_update(issue);
                }
            }
            return super.json_update(patch);
        }
        items(next, force) {
            return this.json(undefined, force).items.map(json => $.$mol_github_issue.item(json.url));
        }
        resource_url() {
            const auth = this.$.$mol_github_auth;
            return `${this.uri()}&client_id=${auth.id()}&client_secret=${auth.secret()}`;
        }
    }
    __decorate([
        $.$mol_mem
    ], $mol_github_search_issues.prototype, "items", null);
    $.$mol_github_search_issues = $mol_github_search_issues;
})($ || ($ = {}));
//issues.js.map
;
"use strict";
var $;
(function ($) {
    class $mol_rpc_client_frame extends $.$mol_object {
        static item(uri) {
            return this.make({ uri: $.$mol_const(uri) });
        }
        uri() {
            return '';
        }
        frame() {
            return $.$mol_fiber_sync(() => new Promise((done, fail) => {
                const frame = this.$.$mol_dom_context.document.createElement('iframe');
                frame.src = this.uri();
                frame.onload = $.$mol_fiber_root($.$mol_log_group(`${this}.frame() load`, event => done(frame)));
                frame.style.display = 'none';
                this.$.$mol_dom_context.document.documentElement.appendChild(frame);
            }))();
        }
        call({ name, args }) {
            return $.$mol_fiber_sync(() => new Promise((done, fail) => {
                const id = `$mol_rpc_client_frame:${Date.now().toString(16)}`;
                this.frame().contentWindow.postMessage({ id, name, args }, '*');
                const handle = $.$mol_log_group(`${this}.call(${JSON.stringify({ name, args })}) message`, (event) => {
                    if (event.data.id !== id)
                        return;
                    this.$.$mol_dom_context.removeEventListener('message', handle);
                    if (event.data.error)
                        fail(new Error(event.data.error));
                    else
                        done(event.data.result);
                });
                this.$.$mol_dom_context.addEventListener('message', $.$mol_fiber_root(handle));
            }))();
        }
        proxy() {
            return new Proxy({}, {
                get: (target, name) => {
                    return (...args) => this.call({ name, args });
                }
            });
        }
    }
    __decorate([
        $.$mol_mem
    ], $mol_rpc_client_frame.prototype, "frame", null);
    __decorate([
        $.$mol_mem_key
    ], $mol_rpc_client_frame.prototype, "call", null);
    __decorate([
        $.$mol_mem
    ], $mol_rpc_client_frame.prototype, "proxy", null);
    __decorate([
        $.$mol_mem_key
    ], $mol_rpc_client_frame, "item", null);
    $.$mol_rpc_client_frame = $mol_rpc_client_frame;
})($ || ($ = {}));
//frame.js.map
;
"use strict";
var $;
(function ($) {
    let all = [];
    let el = null;
    let timer = null;
    function $mol_style_attach(id, text) {
        all.push(`/* ${id} */\n\n${text}`);
        if (timer)
            return el;
        const doc = $.$mol_dom_context.document;
        if (!doc)
            return null;
        el = doc.createElement('style');
        el.id = `$mol_style_attach`;
        doc.head.appendChild(el);
        timer = new $.$mol_after_tick(() => {
            el.innerHTML = '\n' + all.join('\n\n');
            all = [];
            el = null;
            timer = null;
        });
        return el;
    }
    $.$mol_style_attach = $mol_style_attach;
})($ || ($ = {}));
//attach.js.map
;
"use strict";
//theme.js.map
;
"use strict";
var $;
(function ($) {
    $.$mol_style_attach("mol/theme/theme.css", "[mol_theme] , :root {\n\tbackground-color: var(--mol_theme_back);\n\tcolor: var(--mol_theme_text);\n\tfill: var(--mol_theme_text);\n}\n\n@media (prefers-color-scheme: light) {\n\t[mol_theme=\"$mol_theme_auto\"] {\n\t\t--mol_theme_back: hsl( 210 , 50% , 99% );\n\t\t--mol_theme_hover: rgba( 0 , 0 , 0 , .05 );\n\t\t--mol_theme_current: hsl( 210 , 100% , 80% );\n\t\t--mol_theme_text: rgba( 0 , 0 , 0 , .9 );\n\t\t--mol_theme_control: hsla( 210 , 60% , 35% , 1 );\n\t\t--mol_theme_shade: rgba( 0 , 0 , 0 , .5 );\n\t\t--mol_theme_line: rgba( 220 , 220 , 220 , 1 );\n\t\t--mol_theme_focus: hsla( 0 , 60% , 50% , 0.75 );\n\t\t--mol_theme_field: white;\n\t}\n}\n\n@media (prefers-color-scheme: dark) {\n\t[mol_theme=\"$mol_theme_auto\"] {\n\t\t--mol_theme_back: hsl( 210 , 50% , 10% );\n\t\t--mol_theme_hover: #333;\n\t\t--mol_theme_current: hsl( 210 , 100% , 20% );\n\t\t--mol_theme_text: rgba( 255 , 255 , 255 , .8 );\n\t\t--mol_theme_control: hsla( 210 , 60% , 70% , 1 );\n\t\t--mol_theme_shade: rgba( 255 , 255 , 255 , .5 );\n\t\t--mol_theme_line: rgba( 50 , 50 , 50 , 1 );\n\t\t--mol_theme_focus: rgba( 204 , 68 , 50 , .75 );\n\t\t--mol_theme_field: black;\n\t}\n}\n\n[mol_theme=\"$mol_theme_light\"] , :root {\n\t--mol_theme_back: hsl( 210 , 50% , 99% );\n\t--mol_theme_hover: rgba( 0 , 0 , 0 , .05 );\n\t--mol_theme_current: hsl( 210 , 100% , 80% );\n\t--mol_theme_text: rgba( 0 , 0 , 0 , .9 );\n\t--mol_theme_control: hsla( 210 , 60% , 35% , 1 );\n\t--mol_theme_shade: rgba( 0 , 0 , 0 , .5 );\n\t--mol_theme_line: rgba( 220 , 220 , 220 , 1 );\n\t--mol_theme_focus: hsla( 0 , 60% , 50% , 0.75 );\n\t--mol_theme_field: white;\n}\n\n[mol_theme=\"$mol_theme_dark\"] {\n\t--mol_theme_back: hsl( 210 , 50% , 10% );\n\t--mol_theme_hover: #333;\n\t--mol_theme_current: hsl( 210 , 100% , 20% );\n\t--mol_theme_text: rgba( 255 , 255 , 255 , .8 );\n\t--mol_theme_control: hsla( 210 , 60% , 70% , 1 );\n\t--mol_theme_shade: rgba( 255 , 255 , 255 , .5 );\n\t--mol_theme_line: rgba( 50 , 50 , 50 , 1 );\n\t--mol_theme_focus: rgba( 204 , 68 , 50 , .75 );\n\t--mol_theme_field: black;\n}\n\n[mol_theme=\"$mol_theme_base\"] {\n\t--mol_theme_back: hsla( 210 , 60% , 35% , 1 );\n\t--mol_theme_hover: rgba( 0 , 0 , 0 , .05 );\n\t--mol_theme_current: hsl( 210 , 100% , 20% );\n\t--mol_theme_text: white;\n\t--mol_theme_line: white;\n\t--mol_theme_control: white;\n}\n\n[mol_theme=\"$mol_theme_accent\"] {\n\t--mol_theme_back: rgb(204, 68, 50);\n\t--mol_theme_hover: rgb(165, 56, 42);\n\t--mol_theme_text: white;\n\t--mol_theme_line: rgba( 50 , 50 , 50 , 1 );\n\t--mol_theme_control: white;\n}\n");
})($ || ($ = {}));
//theme.css.js.map
;
"use strict";
var $;
(function ($) {
    $.$mol_style_attach("mol/skin/skin.css", ":root {\n\t--mol_skin_font: 1rem/1.5 \"-apple-system\", BlinkMacSystemFont, \"Segoe UI\", Roboto, Helvetica, Arial, sans-serif;\n\t--mol_skin_font_monospace: Monaco, monospace;\n}\n\n/* Deprecated, use mol_theme instead */\n:root {\n\n\t--mol_skin_outline: 0 0 0 1px var(--mol_theme_line);\n\t\n\t--mol_skin_base: #3a8ccb;\n\t--mol_skin_base_text: white;\n\t\n\t--mol_skin_current: var(--mol_skin_base);\n\t--mol_skin_current_text: white;\n\t--mol_skin_current_line: #1471b8;\n\t\n\t--mol_skin_button: var(--mol_skin_card);\n\t--mol_skin_hover: rgba( 0 , 0 , 0 , .05 );\n\t\n\t--mol_skin_round: 0px;\n\t\n\t--mol_skin_focus_line: rgba( 0 , 0 , 0 , .2 );\n\t--mol_skin_focus_outline: 0 0 0 1px var(--mol_skin_focus_line);\n\t\n\t--mol_skin_float: var(--mol_skin_focus_outline);\n\n\t--mol_skin_passive: #eee;\n\t--mol_skin_passive_text: rgba( 0 , 0 , 0 , .5 );\n\t\n\t--mol_skin_light: #fcfcfc;\n\t--mol_skin_light_line: rgba( 230 , 230 , 230 , .75 );\n\t--mol_skin_light_text: rgba( 0 , 0 , 0 , .9 );\n\t--mol_skin_light_hover: #f7f7f7;\n\t--mol_skin_light_outline: 0 0 0 1px var(--mol_theme_line);\n\n\t--mol_skin_card: var(--mol_theme_back);\n\t--mol_skin_card_text: var(--mol_theme_text);\n\t\n\t--mol_skin_accent: #dd0e3e;\n\t--mol_skin_accent_text: white;\n\t--mol_skin_accent_hover: #c50d37;\n\n\t--mol_skin_warn: rgba( 255 , 50 , 50 , 0.75 );\n\t--mol_skin_warn_text: white;\n\t--mol_skin_warn_hover: color( var(--mol_skin_warn) lightness(-5%) );\n\n\t--mol_skin_good: #96DAA9;\n\t--mol_skin_good_text: black;\n\n\t--mol_skin_bad: #CC5252;\n\t--mol_skin_bad_text: white;\n}\n");
})($ || ($ = {}));
//skin.css.js.map
;
"use strict";
var $;
(function ($) {
    class $mol_window extends $.$mol_object {
        static size(next) {
            return next || {
                width: 1024,
                height: 768,
            };
        }
    }
    $.$mol_window = $mol_window;
})($ || ($ = {}));
//window.node.js.map
;
"use strict";
var $;
(function ($) {
    function $mol_atom2_autorun(calculate) {
        return $.$mol_atom2.create(atom => {
            atom.calculate = calculate;
            atom.obsolete_slaves = atom.schedule;
            atom.doubt_slaves = atom.schedule;
            atom[Symbol.toStringTag] = calculate[Symbol.toStringTag] || calculate.name || '$mol_atom2_autorun';
            atom.schedule();
        });
    }
    $.$mol_atom2_autorun = $mol_atom2_autorun;
})($ || ($ = {}));
//autorun.js.map
;
"use strict";
var $;
(function ($) {
    class $mol_defer extends $.$mol_object {
        constructor(run) {
            super();
            this.run = run;
            $mol_defer.add(this);
        }
        destructor() {
            $mol_defer.drop(this);
        }
        static schedule() {
            if (this.timer)
                return;
            this.timer = this.scheduleNative(() => {
                this.timer = null;
                this.run();
            });
        }
        static unschedule() {
            if (!this.timer)
                return;
            cancelAnimationFrame(this.timer);
            this.timer = null;
        }
        static add(defer) {
            this.all.push(defer);
            this.schedule();
        }
        static drop(defer) {
            var index = this.all.indexOf(defer);
            if (index >= 0)
                this.all.splice(index, 1);
        }
        static run() {
            if (this.all.length === 0)
                return;
            this.schedule();
            for (var defer; defer = this.all.shift();)
                defer.run();
        }
    }
    $mol_defer.all = [];
    $mol_defer.timer = null;
    $mol_defer.scheduleNative = (typeof requestAnimationFrame == 'function')
        ? handler => requestAnimationFrame(handler)
        : handler => setTimeout(handler, 16);
    $.$mol_defer = $mol_defer;
})($ || ($ = {}));
//defer.js.map
;
"use strict";
var $;
(function ($) {
    class $mol_view_selection extends $.$mol_object {
        static focused(next) {
            if (next === undefined)
                return [];
            const parents = [];
            let element = next[0];
            while (element) {
                parents.push(element);
                element = element.parentNode;
            }
            new $.$mol_defer($.$mol_log2.func(() => {
                const element = $.$mol_mem_cached(() => this.focused())[0];
                if (element)
                    element.focus();
                else
                    $.$mol_dom_context.blur();
            }));
            return parents;
        }
        static focus(event) {
            this.focused([event.target]);
        }
        static blur(event) {
            const element = $.$mol_mem_cached(() => this.focused())[0];
            if (element === event.target)
                this.focused([]);
        }
    }
    __decorate([
        $.$mol_mem
    ], $mol_view_selection, "focused", null);
    __decorate([
        $.$mol_log2.method
    ], $mol_view_selection, "focus", null);
    __decorate([
        $.$mol_log2.method
    ], $mol_view_selection, "blur", null);
    $.$mol_view_selection = $mol_view_selection;
})($ || ($ = {}));
//selection.js.map
;
"use strict";
var $;
(function ($) {
    function $mol_dom_render_attributes(el, attrs) {
        for (let name in attrs) {
            let val = attrs[name];
            if (val === null || val === false) {
                if (!el.hasAttribute(name))
                    continue;
                el.removeAttribute(name);
            }
            else {
                const str = String(val);
                if (el.getAttribute(name) === str)
                    continue;
                el.setAttribute(name, str);
            }
        }
    }
    $.$mol_dom_render_attributes = $mol_dom_render_attributes;
})($ || ($ = {}));
//attributes.js.map
;
"use strict";
var $;
(function ($) {
    const cacthed = new WeakMap();
    function $mol_fail_catch(error) {
        if (cacthed.get(error))
            return false;
        cacthed.set(error, true);
        return true;
    }
    $.$mol_fail_catch = $mol_fail_catch;
})($ || ($ = {}));
//catch.js.map
;
"use strict";
var $;
(function ($) {
    function $mol_dom_render_styles(el, styles) {
        for (let name in styles) {
            let val = styles[name];
            const style = el.style;
            const cur = style[name];
            if (typeof val === 'number') {
                if (parseFloat(cur) == val)
                    continue;
                style[name] = `${val}px`;
            }
            if (cur !== val)
                style[name] = val;
        }
    }
    $.$mol_dom_render_styles = $mol_dom_render_styles;
})($ || ($ = {}));
//styles.js.map
;
"use strict";
var $;
(function ($) {
    function $mol_dom_render_fields(el, fields) {
        for (let key in fields) {
            const val = fields[key];
            if (val === undefined)
                continue;
            el[key] = val;
        }
    }
    $.$mol_dom_render_fields = $mol_dom_render_fields;
})($ || ($ = {}));
//fields.js.map
;
"use strict";
var $;
(function ($) {
    function $mol_dom_render_children(el, childNodes) {
        const node_set = new Set(childNodes);
        let nextNode = el.firstChild;
        for (let view of childNodes) {
            if (view == null)
                continue;
            if (view instanceof $.$mol_dom_context.Node) {
                while (true) {
                    if (!nextNode) {
                        el.appendChild(view);
                        break;
                    }
                    if (nextNode == view) {
                        nextNode = nextNode.nextSibling;
                        break;
                    }
                    else {
                        if (node_set.has(nextNode)) {
                            el.insertBefore(view, nextNode);
                            break;
                        }
                        else {
                            const nn = nextNode.nextSibling;
                            el.removeChild(nextNode);
                            nextNode = nn;
                        }
                    }
                }
            }
            else {
                if (nextNode && nextNode.nodeName === '#text') {
                    const str = String(view);
                    if (nextNode.nodeValue !== str)
                        nextNode.nodeValue = str;
                    nextNode = nextNode.nextSibling;
                }
                else {
                    const textNode = $.$mol_dom_context.document.createTextNode(String(view));
                    el.insertBefore(textNode, nextNode);
                }
            }
        }
        while (nextNode) {
            const currNode = nextNode;
            nextNode = currNode.nextSibling;
            el.removeChild(currNode);
        }
    }
    $.$mol_dom_render_children = $mol_dom_render_children;
})($ || ($ = {}));
//children.js.map
;
"use strict";
var $;
(function ($) {
    function $mol_func_name(func) {
        return func.name;
    }
    $.$mol_func_name = $mol_func_name;
    function $mol_func_name_from(target, source) {
        Object.defineProperty(target, 'name', { value: source.name });
        return target;
    }
    $.$mol_func_name_from = $mol_func_name_from;
})($ || ($ = {}));
//name.js.map
;
"use strict";
//extract.js.map
;
"use strict";
var $;
(function ($) {
    function $mol_view_visible_width() {
        return $.$mol_window.size().width;
    }
    $.$mol_view_visible_width = $mol_view_visible_width;
    function $mol_view_visible_height() {
        return $.$mol_window.size().height;
    }
    $.$mol_view_visible_height = $mol_view_visible_height;
    function $mol_view_state_key(suffix) {
        return suffix;
    }
    $.$mol_view_state_key = $mol_view_state_key;
    class $mol_view extends $.$mol_object {
        static Root(id) {
            return new this;
        }
        autorun() {
            return $.$mol_atom2_autorun(() => {
                this.dom_tree();
                document.title = this.title();
                return this;
            });
        }
        static autobind() {
            const nodes = $.$mol_dom_context.document.querySelectorAll('[mol_view_root]');
            for (let i = nodes.length - 1; i >= 0; --i) {
                const name = nodes.item(i).getAttribute('mol_view_root');
                const View = $[name];
                if (!View) {
                    console.error(`Can not attach view. Class not found: ${name}`);
                    continue;
                }
                const view = View.Root(i);
                view.dom_node(nodes.item(i));
                view.autorun();
            }
        }
        title() {
            return this.constructor.toString();
        }
        focused(next) {
            let node = this.dom_node();
            const value = $.$mol_view_selection.focused(next === undefined ? undefined : (next ? [node] : []));
            return value.indexOf(node) !== -1;
        }
        state_key(suffix = '') {
            return this.$.$mol_view_state_key(suffix);
        }
        dom_name() {
            return this.constructor.toString().replace('$', '') || 'div';
        }
        dom_name_space() { return 'http://www.w3.org/1999/xhtml'; }
        sub() {
            return [];
        }
        sub_visible() {
            return this.sub();
        }
        minimal_width() {
            const sub = this.sub();
            if (!sub)
                return 0;
            let min = 0;
            sub.forEach(view => {
                if (view instanceof $mol_view) {
                    min = Math.max(min, view.minimal_width());
                }
            });
            return min;
        }
        minimal_height() {
            let min = 0;
            try {
                for (const view of this.sub()) {
                    if (view instanceof $mol_view) {
                        min = Math.max(min, view.minimal_height());
                    }
                }
            }
            catch (error) {
                if ('then' in error)
                    $.$mol_fail_hidden(error);
            }
            return min;
        }
        view_rect() {
            if ($.$mol_atom2.current)
                this.view_rect_watcher();
            return this.view_rect_cache();
        }
        view_rect_cache(next = null) {
            return next;
        }
        view_rect_watcher() {
            $mol_view.watchers.add(this);
            return { destructor: () => $mol_view.watchers.delete(this) };
        }
        dom_id() {
            return this.toString();
        }
        dom_node(next) {
            const node = next || $.$mol_dom_context.document.createElementNS(this.dom_name_space(), this.dom_name());
            const id = this.dom_id();
            node.setAttribute('id', id);
            node.toString = $.$mol_const('<#' + id + '>');
            $.$mol_dom_render_attributes(node, this.attr_static());
            const events = this.event();
            for (let event_name in events) {
                node.addEventListener(event_name, $.$mol_log2.func($.$mol_fiber_root(events[event_name])), { passive: false });
            }
            return node;
        }
        dom_tree(next) {
            const node = this.dom_node(next);
            try {
                $.$mol_dom_render_attributes(node, { mol_view_error: null });
                for (let plugin of this.plugins()) {
                    if (plugin instanceof $.$mol_plugin) {
                        plugin.render();
                    }
                }
                this.render();
            }
            catch (error) {
                const need_catch = $.$mol_fail_catch(error);
                if (need_catch) {
                    $.$mol_dom_render_attributes(node, { mol_view_error: error.name || error.constructor.name });
                }
                if (error instanceof Promise)
                    $.$mol_fail_hidden(error);
                if (need_catch) {
                    try {
                        void (node.innerText = error.message);
                    }
                    catch (e) { }
                    console.error(error);
                }
            }
            return node;
        }
        dom_node_actual() {
            const node = this.dom_node();
            const attr = this.attr();
            const style = this.style();
            const fields = this.field();
            $.$mol_dom_render_attributes(node, attr);
            $.$mol_dom_render_styles(node, style);
            $.$mol_dom_render_fields(node, fields);
            return node;
        }
        render() {
            const node = this.dom_node_actual();
            const sub = this.sub_visible();
            const nodes = sub.map(child => {
                if (child == null)
                    return null;
                return (child instanceof $mol_view) ? child.dom_node_actual() : String(child);
            });
            $.$mol_dom_render_children(node, nodes);
            for (const el of sub)
                if (el && typeof el === 'object' && 'dom_tree' in el)
                    el['dom_tree']();
        }
        static view_classes() {
            const proto = this.prototype;
            let current = proto;
            const classes = [];
            while (current) {
                classes.push(current.constructor);
                if (!(current instanceof $mol_view))
                    break;
                current = Object.getPrototypeOf(current);
            }
            return classes;
        }
        view_names_owned() {
            const names = [];
            let owner = $.$mol_owning_get(this, $mol_view);
            if (owner instanceof $mol_view) {
                const suffix = this[$.$mol_object_field];
                const suffix2 = '_' + suffix[0].toLowerCase() + suffix.substring(1);
                for (let Class of owner.constructor.view_classes()) {
                    if (suffix in Class.prototype)
                        names.push($.$mol_func_name(Class) + suffix2);
                    else
                        break;
                }
                for (let prefix of owner.view_names_owned()) {
                    names.push(prefix + suffix2);
                }
            }
            return names;
        }
        view_names() {
            const names = [];
            for (let name of this.view_names_owned()) {
                if (names.indexOf(name) < 0)
                    names.push(name);
            }
            for (let Class of this.constructor.view_classes()) {
                const name = $.$mol_func_name(Class);
                if (!name)
                    continue;
                if (names.indexOf(name) < 0)
                    names.push(name);
            }
            return names;
        }
        attr_static() {
            let attrs = {};
            for (let name of this.view_names())
                attrs[name.replace(/\$/g, '').replace(/^(?=\d)/, '_').toLowerCase()] = '';
            return attrs;
        }
        attr() {
            return {};
        }
        style() {
            return {};
        }
        field() {
            return {};
        }
        event() {
            return {};
        }
        event_async() {
            return {};
        }
        plugins() {
            return [];
        }
        [$.$mol_dev_format_head]() {
            return $.$mol_dev_format_span({}, $.$mol_dev_format_native(this), $.$mol_dev_format_shade('/'), $.$mol_dev_format_auto($.$mol_mem_cached(() => this.sub())));
        }
    }
    $mol_view.watchers = new Set();
    __decorate([
        $.$mol_mem
    ], $mol_view.prototype, "autorun", null);
    __decorate([
        $.$mol_mem
    ], $mol_view.prototype, "focused", null);
    __decorate([
        $.$mol_mem
    ], $mol_view.prototype, "minimal_width", null);
    __decorate([
        $.$mol_mem
    ], $mol_view.prototype, "minimal_height", null);
    __decorate([
        $.$mol_mem
    ], $mol_view.prototype, "view_rect", null);
    __decorate([
        $.$mol_mem
    ], $mol_view.prototype, "view_rect_cache", null);
    __decorate([
        $.$mol_mem
    ], $mol_view.prototype, "view_rect_watcher", null);
    __decorate([
        $.$mol_mem
    ], $mol_view.prototype, "dom_node", null);
    __decorate([
        $.$mol_mem
    ], $mol_view.prototype, "dom_tree", null);
    __decorate([
        $.$mol_mem
    ], $mol_view.prototype, "dom_node_actual", null);
    __decorate([
        $.$mol_mem
    ], $mol_view.prototype, "view_names", null);
    __decorate([
        $.$mol_deprecated('Use $mol_view::event instead.')
    ], $mol_view.prototype, "event_async", null);
    __decorate([
        $.$mol_mem_key
    ], $mol_view, "Root", null);
    __decorate([
        $.$mol_mem
    ], $mol_view, "view_classes", null);
    $.$mol_view = $mol_view;
})($ || ($ = {}));
//view.js.map
;
"use strict";
var $;
(function ($) {
    $.$mol_style_attach("mol/view/view.css", "[mol_view] {\n\ttransition-property: background-color, height, width, min-height, min-width, max-width, max-height, transform;\n\ttransition-duration: .2s;\n\ttransition-timing-function: ease-out;\n\t-webkit-appearance: none;\n\tword-break: break-word;\n\tbox-sizing: border-box;\n}\n\n[mol_view] > * {\n\tword-break: inherit;\n}\n\n[mol_view_root] {\n\tmargin: 0;\n\tpadding: 0;\n\twidth: 100%;\n\theight: 100%;\n\tbox-sizing: border-box;\n\tfont: var(--mol_skin_font);\n\tbackground: var(--mol_theme_back);\n\tcolor: var(--mol_theme_text);\n}\n\n[mol_view][mol_view_error]:not([mol_view_error=\"Promise\"]) {\n\tbackground-image: repeating-linear-gradient(\n\t\t135deg,\n\t\trgba(255,220,220,1),\n\t\trgba(255,220,220,1) 11px,\n\t\trgba(255,255,220,1) 10px,\n\t\trgba(255,255,220,1) 20px\n\t);\n\tbackground-size: 28px 28px;\n\tcolor: black;\n}\n\n@keyframes mol_view_wait_move {\n\tfrom {\n\t\tbackground-position: 0 0;\n\t}\n\tto {\n\t\tbackground-position: 200vmax 0;\n\t}\n}\n\n@keyframes mol_view_wait_show {\n\tto {\n\t\tbackground-image: repeating-linear-gradient(\n\t\t\t45deg,\n\t\t\thsla( 0 , 0% , 50% , .1 ) 0% ,\n\t\t\thsla( 0 , 0% , 50% , 0 ) 5% ,\n\t\t\thsla( 0 , 0% , 50% , 0 ) 45% ,\n\t\t\thsla( 0 , 0% , 50% , .1 ) 50% ,\n\t\t\thsla( 0 , 0% , 50% , 0 ) 55% ,\n\t\t\thsla( 0 , 0% , 50% , 0 ) 95% ,\n\t\t\thsla( 0 , 0% , 50% , .1 ) 100%\n\t\t);\n\t\tbackground-size: 200vmax 200vmax;\n\t}\n}\n\n[mol_view][mol_view_error=\"Promise\"] {\n\tanimation: mol_view_wait_show .5s .5s linear forwards , mol_view_wait_move 1s linear infinite;\n}\n");
})($ || ($ = {}));
//view.css.js.map
;
"use strict";
var $;
(function ($) {
    class $mol_list extends $.$mol_view {
        render_visible_only() {
            return true;
        }
        render_over() {
            return 0;
        }
        sub() {
            return this.rows();
        }
        rows() {
            return [];
        }
        Empty() {
            return ((obj) => {
                return obj;
            })(new this.$.$mol_view());
        }
        Gap_before() {
            return ((obj) => {
                obj.style = () => ({
                    "paddingTop": this.gap_before(),
                });
                return obj;
            })(new this.$.$mol_view());
        }
        gap_before() {
            return 0;
        }
        Gap_after() {
            return ((obj) => {
                obj.style = () => ({
                    "paddingTop": this.gap_after(),
                });
                return obj;
            })(new this.$.$mol_view());
        }
        gap_after() {
            return 0;
        }
        view_window() {
            return [0, 0];
        }
    }
    __decorate([
        $.$mol_mem
    ], $mol_list.prototype, "Empty", null);
    __decorate([
        $.$mol_mem
    ], $mol_list.prototype, "Gap_before", null);
    __decorate([
        $.$mol_mem
    ], $mol_list.prototype, "Gap_after", null);
    $.$mol_list = $mol_list;
})($ || ($ = {}));
//list.view.tree.js.map
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mol_list extends $.$mol_list {
            sub() {
                const rows = this.rows();
                return (rows.length === 0) ? [this.Empty()] : rows;
            }
            render_visible_only() {
                if (!$.$mol_dom_context.CSS)
                    return false;
                return $.$mol_dom_context.CSS.supports('overflow-anchor:auto');
            }
            view_window() {
                var _a, _b, _c, _d, _e, _f;
                const kids = this.sub();
                if (kids.length < 3)
                    return [0, kids.length];
                let [min, max] = (_a = $.$mol_mem_cached(() => this.view_window())) !== null && _a !== void 0 ? _a : [0, 0];
                let max2 = max = Math.min(max, kids.length);
                let min2 = min = Math.max(0, Math.min(min, max - 1));
                const anchoring = this.render_visible_only();
                const window_height = this.$.$mol_window.size().height;
                const over = Math.ceil(window_height * this.render_over());
                const limit_top = -over;
                const limit_bottom = window_height + over;
                const rect = this.view_rect();
                const gap_before = (_b = $.$mol_mem_cached(() => this.gap_before())) !== null && _b !== void 0 ? _b : 0;
                const gap_after = (_c = $.$mol_mem_cached(() => this.gap_after())) !== null && _c !== void 0 ? _c : 0;
                let top = ((_d = rect === null || rect === void 0 ? void 0 : rect.top) !== null && _d !== void 0 ? _d : 0) + gap_before;
                let bottom = ((_e = rect === null || rect === void 0 ? void 0 : rect.bottom) !== null && _e !== void 0 ? _e : 0) - gap_after;
                if (top <= limit_top && bottom >= limit_bottom) {
                    return [min2, max2];
                }
                if (anchoring && ((bottom < limit_top) || (top > limit_bottom))) {
                    min = 0;
                    top = ((_f = rect === null || rect === void 0 ? void 0 : rect.top) !== null && _f !== void 0 ? _f : 0);
                    while (min < (kids.length - 1)) {
                        const height = kids[min].minimal_height();
                        if (top + height >= limit_top)
                            break;
                        top += height;
                        ++min;
                    }
                    min2 = min;
                    max2 = max = min;
                    bottom = top;
                }
                let top2 = top;
                let bottom2 = bottom;
                if (anchoring && (top <= limit_top)) {
                    min2 = max;
                    top2 = bottom;
                }
                if (bottom >= limit_bottom) {
                    max2 = min;
                    bottom2 = top;
                }
                while (bottom2 < limit_bottom && max2 < kids.length) {
                    bottom2 += kids[max2].minimal_height();
                    ++max2;
                }
                while (anchoring && ((top2 >= limit_top) && (min2 > 0))) {
                    --min2;
                    top2 -= kids[min2].minimal_height();
                }
                return [min2, max2];
            }
            gap_before() {
                const skipped = this.sub().slice(0, this.view_window()[0]);
                return Math.max(0, skipped.reduce((sum, view) => sum + view.minimal_height(), 0));
            }
            gap_after() {
                const skipped = this.sub().slice(this.view_window()[1]);
                return Math.max(0, skipped.reduce((sum, view) => sum + view.minimal_height(), 0));
            }
            sub_visible() {
                var sub = this.sub();
                const next = sub.slice(...this.view_window());
                if (this.gap_before())
                    next.unshift(this.Gap_before());
                if (this.gap_after())
                    next.push(this.Gap_after());
                return next;
            }
            minimal_height() {
                return this.sub().reduce((sum, view) => sum + view.minimal_height(), 0);
            }
        }
        __decorate([
            $.$mol_mem
        ], $mol_list.prototype, "sub", null);
        __decorate([
            $.$mol_mem
        ], $mol_list.prototype, "view_window", null);
        __decorate([
            $.$mol_mem
        ], $mol_list.prototype, "gap_before", null);
        __decorate([
            $.$mol_mem
        ], $mol_list.prototype, "gap_after", null);
        __decorate([
            $.$mol_mem
        ], $mol_list.prototype, "sub_visible", null);
        __decorate([
            $.$mol_mem
        ], $mol_list.prototype, "minimal_height", null);
        $$.$mol_list = $mol_list;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//list.view.js.map
;
"use strict";
var $;
(function ($) {
    $.$mol_style_attach("mol/list/list.view.css", "[mol_list] {\n\twill-change: contents;\n\tdisplay: block;\n\t/* display: flex;\n\tflex-direction: column;\n\talign-items: stretch;\n\talign-content: stretch; */\n\ttransition: none;\n}\n\n[mol_list_gap_before] ,\n[mol_list_gap_after] {\n\tdisplay: block !important;\n\tflex: none;\n\ttransition: none;\n\toverflow-anchor: none;\n}\n\n[mol_list] > * {\n\tdisplay: block;\n}\n");
})($ || ($ = {}));
//list.view.css.js.map
;
"use strict";
var $;
(function ($) {
    class $mol_status extends $.$mol_view {
        status() {
            return null;
        }
        minimal_height() {
            return 24;
        }
        minimal_width() {
            return 0;
        }
        sub() {
            return [this.message()];
        }
        message() {
            return "";
        }
    }
    $.$mol_status = $mol_status;
})($ || ($ = {}));
//status.view.tree.js.map
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mol_status extends $.$mol_status {
            message() {
                try {
                    let status = this.status();
                    if (status)
                        status.valueOf();
                    return null;
                }
                catch (error) {
                    if (error instanceof Promise)
                        $.$mol_fail_hidden(error);
                    return error.message;
                }
            }
        }
        $$.$mol_status = $mol_status;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//status.view.js.map
;
"use strict";
var $;
(function ($) {
    $.$mol_style_attach("mol/status/status.view.css", "[mol_status] {\n\ttext-align: center;\n\tpadding: .5rem;\n\tborder-radius: var(--mol_skin_round);\n\tdisplay: block;\n}\n\n[mol_status]:not([mol_view_error=\"Promise\"]) {\n\tbackground: var(--mol_skin_warn);\n\tcolor: var(--mol_skin_warn_text);\n}\n\n[mol_status]:not([mol_view_error=\"Promise\"]):empty {\n\tdisplay: none;\n}\n");
})($ || ($ = {}));
//status.view.css.js.map
;
"use strict";
var $;
(function ($) {
    $.$mol_style_attach("mol/bar/bar.view.css", "[mol_bar] {\n\tdisplay: flex;\n\tbox-shadow: inset 0 0 0 .5px var(--mol_theme_line);\n\tborder-radius: var(--mol_skin_round);\n}\n\n[mol_bar] > * {\n\tborder-radius: 0;\n}\n\n[mol_bar] > *:first-child {\n\tborder-top-left-radius: var(--mol_skin_round);\n\tborder-bottom-left-radius: var(--mol_skin_round);\n}\n\n[mol_bar] > *:not(:first-child) {\n\tmargin-left: 1px;\n}\n\n[mol_bar] > *:last-child {\n\tborder-top-right-radius: var(--mol_skin_round);\n\tborder-bottom-right-radius: var(--mol_skin_round);\n}\n");
})($ || ($ = {}));
//bar.view.css.js.map
;
"use strict";
var $;
(function ($) {
    class $mol_bar extends $.$mol_view {
    }
    $.$mol_bar = $mol_bar;
})($ || ($ = {}));
//bar.view.tree.js.map
;
"use strict";
var $;
(function ($) {
    let $mol_keyboard_code;
    (function ($mol_keyboard_code) {
        $mol_keyboard_code[$mol_keyboard_code["backspace"] = 8] = "backspace";
        $mol_keyboard_code[$mol_keyboard_code["tab"] = 9] = "tab";
        $mol_keyboard_code[$mol_keyboard_code["enter"] = 13] = "enter";
        $mol_keyboard_code[$mol_keyboard_code["shift"] = 16] = "shift";
        $mol_keyboard_code[$mol_keyboard_code["ctrl"] = 17] = "ctrl";
        $mol_keyboard_code[$mol_keyboard_code["alt"] = 18] = "alt";
        $mol_keyboard_code[$mol_keyboard_code["pause"] = 19] = "pause";
        $mol_keyboard_code[$mol_keyboard_code["capsLock"] = 20] = "capsLock";
        $mol_keyboard_code[$mol_keyboard_code["escape"] = 27] = "escape";
        $mol_keyboard_code[$mol_keyboard_code["space"] = 32] = "space";
        $mol_keyboard_code[$mol_keyboard_code["pageUp"] = 33] = "pageUp";
        $mol_keyboard_code[$mol_keyboard_code["pageDown"] = 34] = "pageDown";
        $mol_keyboard_code[$mol_keyboard_code["end"] = 35] = "end";
        $mol_keyboard_code[$mol_keyboard_code["home"] = 36] = "home";
        $mol_keyboard_code[$mol_keyboard_code["left"] = 37] = "left";
        $mol_keyboard_code[$mol_keyboard_code["up"] = 38] = "up";
        $mol_keyboard_code[$mol_keyboard_code["right"] = 39] = "right";
        $mol_keyboard_code[$mol_keyboard_code["down"] = 40] = "down";
        $mol_keyboard_code[$mol_keyboard_code["insert"] = 45] = "insert";
        $mol_keyboard_code[$mol_keyboard_code["delete"] = 46] = "delete";
        $mol_keyboard_code[$mol_keyboard_code["key0"] = 48] = "key0";
        $mol_keyboard_code[$mol_keyboard_code["key1"] = 49] = "key1";
        $mol_keyboard_code[$mol_keyboard_code["key2"] = 50] = "key2";
        $mol_keyboard_code[$mol_keyboard_code["key3"] = 51] = "key3";
        $mol_keyboard_code[$mol_keyboard_code["key4"] = 52] = "key4";
        $mol_keyboard_code[$mol_keyboard_code["key5"] = 53] = "key5";
        $mol_keyboard_code[$mol_keyboard_code["key6"] = 54] = "key6";
        $mol_keyboard_code[$mol_keyboard_code["key7"] = 55] = "key7";
        $mol_keyboard_code[$mol_keyboard_code["key8"] = 56] = "key8";
        $mol_keyboard_code[$mol_keyboard_code["key9"] = 57] = "key9";
        $mol_keyboard_code[$mol_keyboard_code["A"] = 65] = "A";
        $mol_keyboard_code[$mol_keyboard_code["B"] = 66] = "B";
        $mol_keyboard_code[$mol_keyboard_code["C"] = 67] = "C";
        $mol_keyboard_code[$mol_keyboard_code["D"] = 68] = "D";
        $mol_keyboard_code[$mol_keyboard_code["E"] = 69] = "E";
        $mol_keyboard_code[$mol_keyboard_code["F"] = 70] = "F";
        $mol_keyboard_code[$mol_keyboard_code["G"] = 71] = "G";
        $mol_keyboard_code[$mol_keyboard_code["H"] = 72] = "H";
        $mol_keyboard_code[$mol_keyboard_code["I"] = 73] = "I";
        $mol_keyboard_code[$mol_keyboard_code["J"] = 74] = "J";
        $mol_keyboard_code[$mol_keyboard_code["K"] = 75] = "K";
        $mol_keyboard_code[$mol_keyboard_code["L"] = 76] = "L";
        $mol_keyboard_code[$mol_keyboard_code["M"] = 77] = "M";
        $mol_keyboard_code[$mol_keyboard_code["N"] = 78] = "N";
        $mol_keyboard_code[$mol_keyboard_code["O"] = 79] = "O";
        $mol_keyboard_code[$mol_keyboard_code["P"] = 80] = "P";
        $mol_keyboard_code[$mol_keyboard_code["Q"] = 81] = "Q";
        $mol_keyboard_code[$mol_keyboard_code["R"] = 82] = "R";
        $mol_keyboard_code[$mol_keyboard_code["S"] = 83] = "S";
        $mol_keyboard_code[$mol_keyboard_code["T"] = 84] = "T";
        $mol_keyboard_code[$mol_keyboard_code["U"] = 85] = "U";
        $mol_keyboard_code[$mol_keyboard_code["V"] = 86] = "V";
        $mol_keyboard_code[$mol_keyboard_code["W"] = 87] = "W";
        $mol_keyboard_code[$mol_keyboard_code["X"] = 88] = "X";
        $mol_keyboard_code[$mol_keyboard_code["Y"] = 89] = "Y";
        $mol_keyboard_code[$mol_keyboard_code["Z"] = 90] = "Z";
        $mol_keyboard_code[$mol_keyboard_code["metaLeft"] = 91] = "metaLeft";
        $mol_keyboard_code[$mol_keyboard_code["metaRight"] = 92] = "metaRight";
        $mol_keyboard_code[$mol_keyboard_code["select"] = 93] = "select";
        $mol_keyboard_code[$mol_keyboard_code["numpad0"] = 96] = "numpad0";
        $mol_keyboard_code[$mol_keyboard_code["numpad1"] = 97] = "numpad1";
        $mol_keyboard_code[$mol_keyboard_code["numpad2"] = 98] = "numpad2";
        $mol_keyboard_code[$mol_keyboard_code["numpad3"] = 99] = "numpad3";
        $mol_keyboard_code[$mol_keyboard_code["numpad4"] = 100] = "numpad4";
        $mol_keyboard_code[$mol_keyboard_code["numpad5"] = 101] = "numpad5";
        $mol_keyboard_code[$mol_keyboard_code["numpad6"] = 102] = "numpad6";
        $mol_keyboard_code[$mol_keyboard_code["numpad7"] = 103] = "numpad7";
        $mol_keyboard_code[$mol_keyboard_code["numpad8"] = 104] = "numpad8";
        $mol_keyboard_code[$mol_keyboard_code["numpad9"] = 105] = "numpad9";
        $mol_keyboard_code[$mol_keyboard_code["multiply"] = 106] = "multiply";
        $mol_keyboard_code[$mol_keyboard_code["add"] = 107] = "add";
        $mol_keyboard_code[$mol_keyboard_code["subtract"] = 109] = "subtract";
        $mol_keyboard_code[$mol_keyboard_code["decimal"] = 110] = "decimal";
        $mol_keyboard_code[$mol_keyboard_code["divide"] = 111] = "divide";
        $mol_keyboard_code[$mol_keyboard_code["F1"] = 112] = "F1";
        $mol_keyboard_code[$mol_keyboard_code["F2"] = 113] = "F2";
        $mol_keyboard_code[$mol_keyboard_code["F3"] = 114] = "F3";
        $mol_keyboard_code[$mol_keyboard_code["F4"] = 115] = "F4";
        $mol_keyboard_code[$mol_keyboard_code["F5"] = 116] = "F5";
        $mol_keyboard_code[$mol_keyboard_code["F6"] = 117] = "F6";
        $mol_keyboard_code[$mol_keyboard_code["F7"] = 118] = "F7";
        $mol_keyboard_code[$mol_keyboard_code["F8"] = 119] = "F8";
        $mol_keyboard_code[$mol_keyboard_code["F9"] = 120] = "F9";
        $mol_keyboard_code[$mol_keyboard_code["F10"] = 121] = "F10";
        $mol_keyboard_code[$mol_keyboard_code["F11"] = 122] = "F11";
        $mol_keyboard_code[$mol_keyboard_code["F12"] = 123] = "F12";
        $mol_keyboard_code[$mol_keyboard_code["numLock"] = 144] = "numLock";
        $mol_keyboard_code[$mol_keyboard_code["scrollLock"] = 145] = "scrollLock";
        $mol_keyboard_code[$mol_keyboard_code["semicolon"] = 186] = "semicolon";
        $mol_keyboard_code[$mol_keyboard_code["equals"] = 187] = "equals";
        $mol_keyboard_code[$mol_keyboard_code["comma"] = 188] = "comma";
        $mol_keyboard_code[$mol_keyboard_code["dash"] = 189] = "dash";
        $mol_keyboard_code[$mol_keyboard_code["period"] = 190] = "period";
        $mol_keyboard_code[$mol_keyboard_code["forwardSlash"] = 191] = "forwardSlash";
        $mol_keyboard_code[$mol_keyboard_code["graveAccent"] = 192] = "graveAccent";
        $mol_keyboard_code[$mol_keyboard_code["bracketOpen"] = 219] = "bracketOpen";
        $mol_keyboard_code[$mol_keyboard_code["slashBack"] = 220] = "slashBack";
        $mol_keyboard_code[$mol_keyboard_code["slashBackLeft"] = 226] = "slashBackLeft";
        $mol_keyboard_code[$mol_keyboard_code["bracketClose"] = 221] = "bracketClose";
        $mol_keyboard_code[$mol_keyboard_code["quoteSingle"] = 222] = "quoteSingle";
    })($mol_keyboard_code = $.$mol_keyboard_code || ($.$mol_keyboard_code = {}));
})($ || ($ = {}));
//code.js.map
;
"use strict";
var $;
(function ($) {
    class $mol_string extends $.$mol_view {
        dom_name() {
            return "input";
        }
        enabled() {
            return true;
        }
        debounce() {
            return 0;
        }
        minimal_height() {
            return 40;
        }
        autocomplete() {
            return false;
        }
        field() {
            return (Object.assign(Object.assign({}, super.field()), { "disabled": this.disabled(), "value": this.value_changed(), "placeholder": this.hint(), "type": this.type(), "spellcheck": this.spellcheck(), "autocomplete": this.autocomplete_native() }));
        }
        disabled() {
            return false;
        }
        value_changed(val, force) {
            return this.value(val);
        }
        value(val, force) {
            return (val !== void 0) ? val : "";
        }
        hint() {
            return "";
        }
        type(val, force) {
            return (val !== void 0) ? val : "text";
        }
        spellcheck() {
            return false;
        }
        autocomplete_native() {
            return "";
        }
        attr() {
            return (Object.assign(Object.assign({}, super.attr()), { "maxlength": this.length_max() }));
        }
        length_max() {
            return Infinity;
        }
        event() {
            return (Object.assign(Object.assign({}, super.event()), { "input": (event) => this.event_change(event), "keydown": (event) => this.event_key_press(event) }));
        }
        event_change(event, force) {
            return (event !== void 0) ? event : null;
        }
        event_key_press(event, force) {
            return (event !== void 0) ? event : null;
        }
    }
    __decorate([
        $.$mol_mem
    ], $mol_string.prototype, "value_changed", null);
    __decorate([
        $.$mol_mem
    ], $mol_string.prototype, "value", null);
    __decorate([
        $.$mol_mem
    ], $mol_string.prototype, "type", null);
    __decorate([
        $.$mol_mem
    ], $mol_string.prototype, "event_change", null);
    __decorate([
        $.$mol_mem
    ], $mol_string.prototype, "event_key_press", null);
    $.$mol_string = $mol_string;
})($ || ($ = {}));
//string.view.tree.js.map
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mol_string extends $.$mol_string {
            event_change(next) {
                if (!next)
                    return;
                this.value(next.target.value);
            }
            event_key_press(next) {
                if (!next)
                    return;
                if (next.keyCode === $.$mol_keyboard_code.enter) {
                    this.value(next.target.value);
                }
            }
            disabled() {
                return !this.enabled();
            }
            autocomplete_native() {
                return this.autocomplete() ? 'on' : 'off';
            }
        }
        $$.$mol_string = $mol_string;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//string.view.js.map
;
"use strict";
var $;
(function ($) {
    $.$mol_style_attach("mol/string/string.view.css", "[mol_string] {\n\tbox-sizing: border-box;\n\toutline-offset: 0;\n\tborder: none;\n\tborder-radius: var(--mol_skin_round);\n\twhite-space: nowrap;\n\toverflow: hidden;\n\tpadding: .5rem 1rem;\n\ttext-align: left;\n\tposition: relative;\n\tz-index: 0;\n\tfont: inherit;\n\tflex: 0 1 auto;\n\twidth: 100%;\n\tbackground: var(--mol_theme_field);\n\tcolor: var(--mol_theme_text);\n\tbox-shadow: inset 0 0 0 .5px var(--mol_theme_line);\n\tmargin: 0;\n}\n\n[mol_string]:disabled {\n\tbackground-color: transparent;\n}\n\n[mol_string]:focus {\n\toutline: none;\n\tz-index: 1;\n\tbox-shadow: inset 0 0 0 .5px var(--mol_theme_focus);\n}\n\n[mol_string]::-ms-clear {\n\tdisplay: none;\n}\n");
})($ || ($ = {}));
//string.view.css.js.map
;
"use strict";
var $;
(function ($) {
    class $mol_file extends $.$mol_object {
        static absolute(path) {
            return $mol_file.make({
                path: $.$mol_const(path)
            });
        }
        static relative(path) {
            return $mol_file.absolute($node.path.resolve(path).replace(/\\/g, '/'));
        }
        path() {
            return '.';
        }
        watcher() {
            const watcher = $node.chokidar.watch(this.path(), {
                persistent: true,
                ignored: /(^\.|___$)/,
                depth: 0,
                ignoreInitial: true,
            });
            watcher.on('all', (type, path) => $.$mol_fiber_unlimit(() => {
                const file = $mol_file.relative(path.replace(/\\/g, '/'));
                file.stat(undefined, $.$mol_mem_force_cache);
                if (type === 'change')
                    return;
                file.parent().stat(undefined, $.$mol_mem_force_cache);
            }));
            watcher.on('error', (error) => {
                this.stat(error, $.$mol_mem_force_cache);
            });
            return watcher;
        }
        stat(next, force) {
            const path = this.path();
            let stat;
            stat = next !== null && next !== void 0 ? next : $node.fs.statSync(path);
            this.parent().watcher();
            return stat;
        }
        version() {
            return this.stat().mtime.getTime().toString(36).toUpperCase();
        }
        exists(next) {
            let exists = true;
            try {
                this.stat();
            }
            catch (error) {
                if (error.code === 'ENOENT')
                    exists = false;
                else
                    return $.$mol_fail_hidden(error);
            }
            if (next === undefined) {
                return exists;
            }
            else {
                if (next === exists)
                    return exists;
                if (next) {
                    this.parent().exists(true);
                    $node.fs.mkdirSync(this.path());
                }
                else {
                    $node.fs.unlinkSync(this.path());
                }
                this.stat(undefined, $.$mol_mem_force_cache);
                return next;
            }
        }
        parent() {
            return this.resolve('..');
        }
        type() {
            const stat = this.stat();
            if (stat.isFile())
                return 'file';
            if (stat.isDirectory())
                return 'dir';
            if (stat.isBlockDevice())
                return 'blocks';
            if (stat.isCharacterDevice())
                return 'chars';
            if (stat.isSymbolicLink())
                return 'link';
            if (stat.isFIFO())
                return 'fifo';
            if (stat.isSocket())
                return 'socket';
            throw new Error(`Unknown file type ${this.path()}`);
        }
        name() {
            return $node.path.basename(this.path());
        }
        ext() {
            const match = /((?:\.\w+)+)$/.exec(this.path());
            return match ? match[1].substring(1) : '';
        }
        content(next, force) {
            if (next === undefined) {
                this.stat();
                return $node.fs.readFileSync(this.path());
            }
            this.parent().exists(true);
            $node.fs.writeFileSync(this.path(), next);
            return next;
        }
        reader() {
            return $node.fs.createReadStream(this.path());
        }
        writer() {
            return $node.fs.createWriteStream(this.path());
        }
        sub() {
            if (!this.exists())
                return [];
            if (this.type() !== 'dir')
                return [];
            return $node.fs.readdirSync(this.path())
                .filter(name => !/^\.+$/.test(name))
                .map(name => this.resolve(name));
        }
        resolve(path) {
            return this.constructor.relative($node.path.join(this.path(), path));
        }
        relate(base = this.constructor.relative('.')) {
            return $node.path.relative(base.path(), this.path()).replace(/\\/g, '/');
        }
        append(next) {
            $node.fs.appendFileSync(this.path(), next);
        }
        find(include, exclude) {
            let found = [];
            this.sub().forEach(child => {
                if (exclude && child.path().match(exclude))
                    return;
                if (!include || child.path().match(include))
                    found.push(child);
                if (child.type() === 'dir')
                    found = found.concat(child.find(include, exclude));
            });
            return found;
        }
    }
    __decorate([
        $.$mol_mem
    ], $mol_file.prototype, "watcher", null);
    __decorate([
        $.$mol_mem
    ], $mol_file.prototype, "stat", null);
    __decorate([
        $.$mol_mem
    ], $mol_file.prototype, "version", null);
    __decorate([
        $.$mol_mem
    ], $mol_file.prototype, "type", null);
    __decorate([
        $.$mol_mem
    ], $mol_file.prototype, "content", null);
    __decorate([
        $.$mol_mem
    ], $mol_file.prototype, "sub", null);
    __decorate([
        $.$mol_mem_key
    ], $mol_file, "absolute", null);
    $.$mol_file = $mol_file;
})($ || ($ = {}));
//file.node.js.map
;
"use strict";
var $;
(function ($) {
    class $mol_locale extends $.$mol_object {
        static lang_default() {
            return 'en';
        }
        static lang(next) {
            return $.$mol_state_local.value('locale', next) || $.$mol_dom_context.navigator.language.replace(/-.*/, '') || this.lang_default();
        }
        static source(lang) {
            return JSON.parse($.$mol_file.relative(`web.locale=${lang}.json`).content().toString());
        }
        static texts(lang, next) {
            if (next)
                return next;
            try {
                return this.source(lang).valueOf();
            }
            catch (error) {
                if ('then' in error)
                    $.$mol_fail_hidden(error);
                const def = this.lang_default();
                if (lang === def)
                    throw error;
                return this.source(def);
            }
        }
        static text(key) {
            for (let lang of [this.lang(), 'en']) {
                const text = this.texts(lang)[key];
                if (text)
                    return text;
                console.warn(`Not translated to "${lang}": ${key}`);
            }
            return `<${key}>`;
        }
    }
    __decorate([
        $.$mol_mem
    ], $mol_locale, "lang_default", null);
    __decorate([
        $.$mol_mem
    ], $mol_locale, "lang", null);
    __decorate([
        $.$mol_mem_key
    ], $mol_locale, "source", null);
    __decorate([
        $.$mol_mem_key
    ], $mol_locale, "texts", null);
    __decorate([
        $.$mol_mem_key
    ], $mol_locale, "text", null);
    $.$mol_locale = $mol_locale;
})($ || ($ = {}));
//locale.js.map
;
"use strict";
var $;
(function ($) {
    class $mol_button extends $.$mol_view {
        enabled() {
            return true;
        }
        minimal_height() {
            return 40;
        }
        click(event, force) {
            return (event !== void 0) ? event : null;
        }
        event_click(event, force) {
            return (event !== void 0) ? event : null;
        }
        event() {
            return (Object.assign(Object.assign({}, super.event()), { "click": (event) => this.event_activate(event), "keypress": (event) => this.event_key_press(event) }));
        }
        event_activate(event, force) {
            return (event !== void 0) ? event : null;
        }
        event_key_press(event, force) {
            return (event !== void 0) ? event : null;
        }
        attr() {
            return (Object.assign(Object.assign({}, super.attr()), { "disabled": this.disabled(), "role": "button", "tabindex": this.tab_index(), "title": this.hint() }));
        }
        disabled() {
            return false;
        }
        tab_index() {
            return 0;
        }
        hint() {
            return "";
        }
        sub() {
            return [this.title()];
        }
    }
    __decorate([
        $.$mol_mem
    ], $mol_button.prototype, "click", null);
    __decorate([
        $.$mol_mem
    ], $mol_button.prototype, "event_click", null);
    __decorate([
        $.$mol_mem
    ], $mol_button.prototype, "event_activate", null);
    __decorate([
        $.$mol_mem
    ], $mol_button.prototype, "event_key_press", null);
    $.$mol_button = $mol_button;
})($ || ($ = {}));
//button.view.tree.js.map
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mol_button extends $.$mol_button {
            disabled() {
                return !this.enabled();
            }
            event_activate(next) {
                if (!next)
                    return;
                if (!this.enabled())
                    return;
                this.event_click(next);
                this.click(next);
            }
            event_key_press(event) {
                if (event.keyCode === $.$mol_keyboard_code.enter) {
                    return this.event_activate(event);
                }
            }
            tab_index() {
                return this.enabled() ? super.tab_index() : -1;
            }
        }
        $$.$mol_button = $mol_button;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//button.view.js.map
;
"use strict";
var $;
(function ($) {
    $.$mol_style_attach("mol/button/button.view.css", "[mol_button] {\n\tborder: none;\n\tfont: inherit;\n\tbackground-color: none;\n\tdisplay: inline-flex;\n\tflex-shrink: 0;\n\ttext-decoration: inherit;\n\tcursor: inherit;\n\tposition: relative;\n\tbox-sizing: border-box;\n\tword-break: normal;\n\tcursor: default;\n}\n[mol_button]:focus {\n\toutline: none;\n}\n\n[mol_button_typed] {\n\tjustify-content: center;\n\talign-content: center;\n\talign-items: center;\n\tvertical-align: middle;\n\ttext-align: center;\n\tpadding: .5rem 1rem;\n\tborder-radius: var(--mol_skin_round);\n}\n\n[mol_button_typed][disabled] {\n\tcolor: var(--mol_theme_text);\n\tpointer-events: none;\n}\n\n[mol_button_major] {\n\tbox-shadow: 0 0 0 1px var(--mol_theme_back);\n}\n\n[mol_button_minor] {\n\tcolor: var(--mol_theme_control);\n}\n\n[mol_button_major][disabled] {\n\topacity: .5;\n}\n\n[mol_button_typed]:hover ,\n[mol_button_typed]:focus {\n\tcursor: pointer;\n\tbackground-color: var(--mol_theme_hover);\n}\n");
})($ || ($ = {}));
//button.view.css.js.map
;
"use strict";
var $;
(function ($) {
    class $mol_button_typed extends $.$mol_button {
    }
    $.$mol_button_typed = $mol_button_typed;
})($ || ($ = {}));
(function ($) {
    class $mol_button_major extends $.$mol_button_typed {
        attr() {
            return (Object.assign(Object.assign({}, super.attr()), { "mol_theme": "$mol_theme_accent" }));
        }
    }
    $.$mol_button_major = $mol_button_major;
})($ || ($ = {}));
(function ($) {
    class $mol_button_minor extends $.$mol_button_typed {
    }
    $.$mol_button_minor = $mol_button_minor;
})($ || ($ = {}));
//button_types.view.tree.js.map
;
"use strict";
var $;
(function ($) {
    $.$mol_style_attach("mol/row/row.view.css", "[mol_row] {\n\tdisplay: flex;\n\tflex-wrap: wrap;\n\talign-items: flex-start;\n\talign-content: flex-start;\n\tjustify-content: flex-start;\n\tpadding: .5rem;\n\tflex: 1 0 auto;\n\t/* box-shadow: 0 0 0 1px var(--mol_theme_line); */\n\t/* border-radius: var(--mol_skin_round); */\n\tbox-sizing: border-box;\n\tmax-width: 100%;\n}\n\n[mol_row] > * {\n\tmargin: .5rem;\n\tmax-width: 100%;\n}\n");
})($ || ($ = {}));
//row.view.css.js.map
;
"use strict";
var $;
(function ($) {
    class $mol_row extends $.$mol_view {
    }
    $.$mol_row = $mol_row;
})($ || ($ = {}));
//row.view.tree.js.map
;
"use strict";
var $;
(function ($) {
    class $mol_state_arg extends $.$mol_object {
        constructor(prefix = '') {
            super();
            this.prefix = prefix;
        }
        static href(next) {
            return next || process.argv.slice(2).join(' ');
        }
        static dict(next) {
            if (next !== void 0)
                this.href(this.make_link(next));
            var href = this.href();
            var chunks = href.split(' ');
            var params = {};
            chunks.forEach(chunk => {
                if (!chunk)
                    return;
                var vals = chunk.split('=').map(decodeURIComponent);
                params[vals.shift()] = vals.join('=');
            });
            return params;
        }
        static value(key, next) {
            if (next === void 0)
                return this.dict()[key] || null;
            this.href(this.link({ [key]: next }));
            return next;
        }
        static link(next) {
            var params = {};
            var prev = this.dict();
            for (var key in prev) {
                params[key] = prev[key];
            }
            for (var key in next) {
                params[key] = next[key];
            }
            return this.make_link(params);
        }
        static make_link(next) {
            var chunks = [];
            for (var key in next) {
                if (null == next[key])
                    continue;
                chunks.push([key].concat(next[key]).map(encodeURIComponent).join('='));
            }
            return chunks.join(' ');
        }
        value(key, next) {
            return this.constructor.value(this.prefix + key, next);
        }
        sub(postfix) {
            return new this.constructor(this.prefix + postfix + '.');
        }
        link(next) {
            var prefix = this.prefix;
            var dict = {};
            for (var key in next) {
                dict[prefix + key] = next[key];
            }
            return this.constructor.link(dict);
        }
    }
    __decorate([
        $.$mol_mem
    ], $mol_state_arg, "href", null);
    __decorate([
        $.$mol_mem
    ], $mol_state_arg, "dict", null);
    __decorate([
        $.$mol_mem_key
    ], $mol_state_arg, "value", null);
    $.$mol_state_arg = $mol_state_arg;
})($ || ($ = {}));
//arg.node.js.map
;
"use strict";
//exclude.js.map
;
"use strict";
//omit.js.map
;
"use strict";
//class.js.map
;
"use strict";
//element.js.map
;
"use strict";
//properties.js.map
;
"use strict";
//definition.js.map
;
"use strict";
var $;
(function ($) {
    function $mol_style_sheet(Component, config) {
        let rules = [];
        const make_class = (prefix, suffix, config) => {
            const props = [];
            for (const key of Object.keys(config).reverse()) {
                if (/^[a-z]/.test(key)) {
                    const name = key.replace(/[A-Z]/g, letter => '-' + letter.toLowerCase());
                    const val = config[key];
                    props.push(`\t${name}: ${val};\n`);
                }
                else if (/^[A-Z]/.test(key)) {
                    make_class(prefix + '_' + key.toLowerCase(), suffix, config[key]);
                }
                else if (key[0] === '$') {
                    make_class(prefix + '] ' + key.replace('$', '['), suffix, config[key]);
                }
                else if (key === '>') {
                    const types = config[key];
                    for (let type in types) {
                        make_class(prefix + '] > ' + type.replace('$', '['), suffix, types[type]);
                    }
                }
                else if (key === '@') {
                    const attrs = config[key];
                    for (let name in attrs) {
                        for (let val in attrs[name]) {
                            make_class(prefix, suffix + '[' + name + '=' + JSON.stringify(val) + ']', attrs[name][val]);
                        }
                    }
                }
                else if (key === '@media') {
                    const media = config[key];
                    for (let query in media) {
                        rules.push('}\n');
                        make_class(prefix, suffix, media[query]);
                        rules.push(`${key} ${query} {\n`);
                    }
                }
                else {
                    make_class(prefix, suffix + key, config[key]);
                }
            }
            if (props.length) {
                rules.push(`${prefix}${suffix} {\n${props.reverse().join('')}}\n`);
            }
        };
        make_class(Component.name.replace('$', '['), ']', config);
        return rules.reverse().join('');
    }
    $.$mol_style_sheet = $mol_style_sheet;
})($ || ($ = {}));
//sheet.js.map
;
"use strict";
var $;
(function ($) {
    function $mol_style_define(Component, config) {
        return $.$mol_style_attach(Component.name, $.$mol_style_sheet(Component, config));
    }
    $.$mol_style_define = $mol_style_define;
})($ || ($ = {}));
//define.js.map
;
"use strict";
var $;
(function ($) {
    class $mol_link extends $.$mol_view {
        dom_name() {
            return "a";
        }
        attr() {
            return (Object.assign(Object.assign({}, super.attr()), { "href": this.uri(), "title": this.hint(), "target": this.target(), "download": this.file_name(), "mol_link_current": this.current() }));
        }
        uri() {
            return "";
        }
        hint() {
            return "";
        }
        target() {
            return "_self";
        }
        file_name() {
            return "";
        }
        current() {
            return false;
        }
        sub() {
            return [this.title()];
        }
        arg() {
            return ({});
        }
        event() {
            return (Object.assign(Object.assign({}, super.event()), { "click": (event) => this.click(event) }));
        }
        click(event, force) {
            return this.event_click(event);
        }
        event_click(event, force) {
            return (event !== void 0) ? event : null;
        }
    }
    __decorate([
        $.$mol_mem
    ], $mol_link.prototype, "click", null);
    __decorate([
        $.$mol_mem
    ], $mol_link.prototype, "event_click", null);
    $.$mol_link = $mol_link;
})($ || ($ = {}));
//link.view.tree.js.map
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mol_link extends $.$mol_link {
            uri() {
                return new this.$.$mol_state_arg(this.state_key()).link(this.arg());
            }
            current() {
                if (this.uri() === this.$.$mol_state_arg.href())
                    return true;
                const args = this.arg();
                const keys = Object.keys(args).filter(key => args[key] != null);
                if (keys.length === 0)
                    return false;
                for (const key of keys) {
                    if (this.$.$mol_state_arg.value(key) !== args[key])
                        return false;
                }
                return true;
            }
            event_click(event) {
                if (!event || event.defaultPrevented)
                    return;
                this.focused(false);
            }
            file_name() {
                return null;
            }
            minimal_height() {
                return Math.max(super.minimal_height() || 40);
            }
        }
        __decorate([
            $.$mol_mem
        ], $mol_link.prototype, "uri", null);
        __decorate([
            $.$mol_mem
        ], $mol_link.prototype, "current", null);
        $$.$mol_link = $mol_link;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//link.view.js.map
;
"use strict";
var $;
(function ($) {
    $.$mol_style_define($.$mol_link, {
        textDecoration: 'none',
        color: "var(--mol_theme_control)",
        stroke: 'currentColor',
        cursor: 'pointer',
        padding: '.5rem',
        boxSizing: 'border-box',
        position: 'relative',
        ':hover': {
            backgroundColor: "var(--mol_theme_hover)",
        },
        ':focus': {
            outline: 'none',
            backgroundColor: "var(--mol_theme_hover)",
        },
        '@': {
            mol_link_current: {
                'true': {
                    backgroundColor: "var(--mol_theme_current)",
                    color: "var(--mol_theme_text)",
                }
            }
        },
    });
})($ || ($ = {}));
//link.view.css.js.map
;
"use strict";
var $;
(function ($) {
    $.$mol_style_attach("mol/image/image.view.css", "[mol_image] {\n\tbox-shadow: 0 0 0 1px var(--mol_theme_line);\n\tborder-radius: var(--mol_skin_round);\n\toverflow: hidden;\n\tflex: 0 1 auto;\n\tmax-width: 100%;\n}\n");
})($ || ($ = {}));
//image.view.css.js.map
;
"use strict";
var $;
(function ($) {
    class $mol_image extends $.$mol_view {
        dom_name() {
            return "img";
        }
        field() {
            return (Object.assign(Object.assign({}, super.field()), { "src": this.uri(), "alt": this.title() }));
        }
        uri() {
            return "";
        }
    }
    $.$mol_image = $mol_image;
})($ || ($ = {}));
//image.view.tree.js.map
;
"use strict";
var $;
(function ($) {
    class $mol_syntax {
        constructor(lexems) {
            this['lexems()'] = lexems;
        }
        lexems() {
            return this['lexems()'];
        }
        rules() {
            let rules = this['rules()'];
            if (rules)
                return rules;
            rules = [];
            let lexems = this.lexems();
            for (let name in lexems) {
                rules.push({
                    name: name,
                    regExp: lexems[name],
                    size: RegExp('^$|' + lexems[name].source).exec('').length - 1,
                });
            }
            return this['rules()'] = rules;
        }
        regExp() {
            let regExp = this['regExp()'];
            if (regExp)
                return regExp;
            const parts = '(' + this.rules().map(rule => rule.regExp.source).join(')|(') + ')';
            regExp = RegExp(`([^]*?)(?:(${parts})|$(?![^]))`, 'gm');
            return this['regExp()'] = regExp;
        }
        tokenize(text) {
            const tokens = [];
            const rules = this.rules();
            const regExp = this.regExp();
            const regExpSize = RegExp('^$|' + regExp.source).exec('').length - 1;
            let position = 0;
            parsing: while (position < text.length) {
                regExp.lastIndex = position;
                var found = regExp.exec(text);
                if (position === regExp.lastIndex)
                    throw new Error('Empty token');
                position = regExp.lastIndex;
                var prefix = found[1];
                if (prefix) {
                    tokens.push({
                        name: '',
                        found: prefix,
                        chunks: [],
                    });
                }
                var suffix = found[2];
                if (suffix) {
                    let offset = 4;
                    for (let rule of rules) {
                        if (found[offset - 1]) {
                            tokens.push({
                                name: rule.name,
                                found: suffix,
                                chunks: found.slice(offset, offset + rule.size)
                            });
                            continue parsing;
                        }
                        offset += rule.size + 1;
                    }
                    throw new Error('Something wrong');
                }
            }
            return tokens;
        }
    }
    $.$mol_syntax = $mol_syntax;
})($ || ($ = {}));
//syntax.js.map
;
"use strict";
var $;
(function ($) {
    $.$mol_syntax_md_flow = new $.$mol_syntax({
        'quote': /^((?:(?:> )(?:[^]*?)$(\r?\n?))+)([\n\r]*)/,
        'header': /^(#+)(\s*)(.*?)$([\n\r]*)/,
        'list': /^((?:(?:\s?[*+-]|\d+\.)\s+(?:[^]*?)$(?:\r?\n?))+)((?:\r?\n)*)/,
        'code': /^(```\s*)(\w*)[\r\n]+([^]*?)^(```)$([\n\r]*)/,
        'code-indent': /^((?:(?:  |\t)(?:[^]*?)$([\n\r]*))+)/,
        'table': /((?:^\|.+?$\r?\n)+)([\n\r]*)/,
        'block': /^(.*?(?:\r?\n.+?)*)$((?:\r?\n)*)/,
    });
    $.$mol_syntax_md_line = new $.$mol_syntax({
        'strong': /\*\*(.+?)\*\*/,
        'emphasis': /\*(?!\s)(.+?)\*/,
        'code3': /```(.+?)```/,
        'code': /`(.+?)`/,
        'strike': /~~(.+?)~~/,
        'text-link': /\[(.*?(?:\[.*?\].*?)*)\]\((.*?)\)/,
        'image-link': /!\[([^\[\]]*?)\]\((.*?)\)/,
    });
    $.$mol_syntax_md_code = new $.$mol_syntax({
        'code-docs': /\/\/\/.*?$/,
        'code-comment-block': /(?:\/\*[^]*?\*\/|\/\+[^]*?\+\/|<![^]*?>)/,
        'code-link': /\w+:\/\/\S*/,
        'code-comment-inline': /\/\/.*?$/,
        'code-string': /(?:".*?"|'.*?'|`.*?`|\/.+?\/[gmi]*|(?:^|[ \t])\\[^\n]*\n)/,
        'code-number': /[+-]?(?:\d*\.)?\d+\w*/,
        'code-call': /\.?\w+(?=\()/,
        'code-field': /(?:\.\w+|[\w-]+\??\s*:(?!\/\/))/,
        'code-keyword': /\b(class|interface|type|function|extends|implements|module|namespace|import|export|include|require|var|let|const|for|do|while|until|in|of|new|if|then|else|switch|case|this|return|async|await|try|catch|break|continue|get|set|public|private|protected|string|boolean|number|null|undefined|true|false|void)\b/,
        'code-global': /[$]\w*/,
        'code-decorator': /@\s*\S+/,
        'code-tag': /<\/?[\w-]+\/?>?/,
        'code-punctuation': /[\-\[\]\{\}\(\)<=>`~!\?@#\$%&\*_\+\\\/\|'";:\.,\^]/,
    });
})($ || ($ = {}));
//md.js.map
;
"use strict";
var $;
(function ($) {
    class $mol_state_session extends $.$mol_object {
        static native() {
            if (this['native()'])
                return this['native()'];
            check: try {
                const native = $.$mol_dom_context.sessionStorage;
                if (!native)
                    break check;
                native.setItem('', '');
                native.removeItem('');
                return this['native()'] = native;
            }
            catch (error) {
                console.warn(error);
            }
            return this['native()'] = {
                getItem(key) {
                    return this[':' + key];
                },
                setItem(key, value) {
                    this[':' + key] = value;
                },
                removeItem(key) {
                    this[':' + key] = void 0;
                }
            };
        }
        static value(key, next) {
            if (next === void 0)
                return JSON.parse(this.native().getItem(key) || 'null');
            if (next === null)
                this.native().removeItem(key);
            else
                this.native().setItem(key, JSON.stringify(next));
            return next;
        }
        prefix() { return ''; }
        value(key, next) {
            return $mol_state_session.value(this.prefix() + '.' + key, next);
        }
    }
    __decorate([
        $.$mol_mem_key
    ], $mol_state_session, "value", null);
    $.$mol_state_session = $mol_state_session;
})($ || ($ = {}));
//session.js.map
;
"use strict";
var $;
(function ($) {
    class $mol_memo extends $.$mol_wrapper {
        static wrap(task) {
            const store = new WeakMap();
            return function (next) {
                var _a;
                if (next === undefined && store.has(this))
                    return store.get(this);
                const val = (_a = task.call(this, next)) !== null && _a !== void 0 ? _a : next;
                store.set(this, val);
                return val;
            };
        }
    }
    $.$mol_memo = $mol_memo;
})($ || ($ = {}));
//memo.js.map
;
"use strict";
var $;
(function ($) {
    class $mol_after_timeout extends $.$mol_object2 {
        constructor(delay, task) {
            super();
            this.delay = delay;
            this.task = task;
            this.id = setTimeout(task, delay);
        }
        destructor() {
            clearTimeout(this.id);
        }
    }
    $.$mol_after_timeout = $mol_after_timeout;
})($ || ($ = {}));
//timeout.js.map
;
"use strict";
var $;
(function ($) {
    class $mol_after_frame extends $.$mol_after_timeout {
        constructor(task) {
            super(16, task);
            this.task = task;
        }
    }
    $.$mol_after_frame = $mol_after_frame;
})($ || ($ = {}));
//frame.node.js.map
;
"use strict";
var $;
(function ($) {
    class $mol_scroll extends $.$mol_view {
        minimal_height() {
            return 0;
        }
        _event_scroll_timer(val, force) {
            return (val !== void 0) ? val : null;
        }
        field() {
            return (Object.assign(Object.assign({}, super.field()), { "scrollTop": this.scroll_top(), "scrollLeft": this.scroll_left() }));
        }
        scroll_top(val, force) {
            return (val !== void 0) ? val : 0;
        }
        scroll_left(val, force) {
            return (val !== void 0) ? val : 0;
        }
        event() {
            return (Object.assign(Object.assign({}, super.event()), { "scroll": (event) => this.event_scroll(event) }));
        }
        event_scroll(event, force) {
            return (event !== void 0) ? event : null;
        }
    }
    __decorate([
        $.$mol_mem
    ], $mol_scroll.prototype, "_event_scroll_timer", null);
    __decorate([
        $.$mol_mem
    ], $mol_scroll.prototype, "scroll_top", null);
    __decorate([
        $.$mol_mem
    ], $mol_scroll.prototype, "scroll_left", null);
    __decorate([
        $.$mol_mem
    ], $mol_scroll.prototype, "event_scroll", null);
    $.$mol_scroll = $mol_scroll;
})($ || ($ = {}));
//scroll.view.tree.js.map
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mol_scroll extends $.$mol_scroll {
            scroll_top(next) {
                return $.$mol_state_session.value(`${this}.scroll_top()`, next) || 0;
            }
            scroll_left(next) {
                return $.$mol_state_session.value(`${this}.scroll_left()`, next) || 0;
            }
            _event_scroll_timer(next) {
                return next;
            }
            event_scroll(next) {
                if (this._event_scroll_timer())
                    this._event_scroll_timer().destructor();
                const el = this.dom_node();
                this._event_scroll_timer(new $.$mol_after_frame($.$mol_fiber_solid.func(() => {
                    this.scroll_top(Math.max(0, el.scrollTop));
                    this.scroll_left(Math.max(0, el.scrollLeft));
                })));
            }
        }
        __decorate([
            $.$mol_mem
        ], $mol_scroll.prototype, "scroll_top", null);
        __decorate([
            $.$mol_mem
        ], $mol_scroll.prototype, "scroll_left", null);
        __decorate([
            $.$mol_memo.method
        ], $mol_scroll.prototype, "_event_scroll_timer", null);
        $$.$mol_scroll = $mol_scroll;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//scroll.view.js.map
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        $.$mol_style_define($$.$mol_scroll, {
            display: 'block',
            overflow: 'auto',
            flex: '1 1 auto',
            alignSelf: 'stretch',
            boxSizing: 'border-box',
            willChange: 'scroll-position',
            transform: 'translateZ(0)',
            boxShadow: `inset 0 0 0 .5px ${"var(--mol_theme_line)"}`,
            maxHeight: '100%',
            maxWidth: '100%',
            webkitOverflowScrolling: 'touch',
            '::-webkit-scrollbar': {
                width: '.5rem',
                height: '.5rem',
            },
            '::-webkit-scrollbar-corner': {
                background: "var(--mol_theme_line)",
            },
            '::-webkit-scrollbar-track': {
                background: "var(--mol_theme_line)",
            },
            '::-webkit-scrollbar-thumb': {
                background: "var(--mol_theme_control)",
            },
            '@media': {
                'print': {
                    overflow: 'visible',
                }
            }
        });
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//scroll.view.css.js.map
;
"use strict";
var $;
(function ($) {
    $.$mol_style_attach("mol/float/float.view.css", "[mol_float] {\n\tposition: sticky;\n\ttop: 0;\n\tleft: 0;\n\tz-index: 1;\n\topacity: 1;\n\ttransition: opacity .25s ease-in;\n\tdisplay: block;\n}\n\n[mol_float_scrolling] {\n\topacity: 0;\n\ttransition-duration: 0;\n}\n");
})($ || ($ = {}));
//float.view.css.js.map
;
"use strict";
var $;
(function ($) {
    class $mol_float extends $.$mol_view {
    }
    $.$mol_float = $mol_float;
})($ || ($ = {}));
//float.view.tree.js.map
;
"use strict";
var $;
(function ($) {
    $.$mol_style_attach("mol/check/check.css", "[mol_check] {\n\tflex: 0 0 auto;\n\tjustify-content: flex-start;\n\talign-content: center;\n\talign-items: flex-start;\n\tborder: none;\n\tfont-weight: inherit;\n\tbox-shadow: none;\n\ttext-align: left;\n\tpadding: .5rem;\n\tdisplay: inline-flex;\n\tflex-wrap: nowrap;\n}\n");
})($ || ($ = {}));
//check.css.js.map
;
"use strict";
var $;
(function ($) {
    class $mol_check extends $.$mol_button_minor {
        attr() {
            return (Object.assign(Object.assign({}, super.attr()), { "mol_check_checked": this.checked(), "aria-checked": this.checked(), "role": "checkbox" }));
        }
        checked(val, force) {
            return (val !== void 0) ? val : false;
        }
        sub() {
            return [this.Icon(), this.label()];
        }
        Icon() {
            return null;
        }
        label() {
            return [this.Title()];
        }
        Title() {
            return ((obj) => {
                obj.sub = () => [this.title()];
                return obj;
            })(new this.$.$mol_view());
        }
        title() {
            return "";
        }
    }
    __decorate([
        $.$mol_mem
    ], $mol_check.prototype, "checked", null);
    __decorate([
        $.$mol_mem
    ], $mol_check.prototype, "Title", null);
    $.$mol_check = $mol_check;
})($ || ($ = {}));
//check.view.tree.js.map
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mol_check extends $.$mol_check {
            event_click(next) {
                this.checked(!this.checked());
                if (next)
                    next.preventDefault();
            }
            sub() {
                return [
                    ...$.$mol_maybe(this.Icon()),
                    ...this.label(),
                ];
            }
        }
        $$.$mol_check = $mol_check;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//check.view.js.map
;
"use strict";
var $;
(function ($) {
    class $mol_state_time extends $.$mol_object {
        static now(precision = 0, next) {
            if (precision > 0) {
                new $.$mol_after_timeout(precision, $.$mol_atom2.current.fresh);
            }
            else {
                new $.$mol_after_frame($.$mol_atom2.current.fresh);
            }
            return Date.now();
        }
    }
    __decorate([
        $.$mol_mem_key
    ], $mol_state_time, "now", null);
    $.$mol_state_time = $mol_state_time;
})($ || ($ = {}));
//time.js.map
;
"use strict";
var $;
(function ($) {
    let canvas;
    function $mol_font_canvas(next = canvas) {
        if (!next)
            next = $.$mol_dom_context.document.createElement('canvas').getContext('2d');
        return canvas = next;
    }
    $.$mol_font_canvas = $mol_font_canvas;
})($ || ($ = {}));
//canvas.js.map
;
"use strict";
var $;
(function ($) {
    function $mol_font_measure(size, face, text) {
        const canvas = $.$mol_font_canvas();
        canvas.font = size + 'px ' + face;
        return canvas.measureText(text).width;
    }
    $.$mol_font_measure = $mol_font_measure;
})($ || ($ = {}));
//measure.js.map
;
"use strict";
var $;
(function ($) {
    class $mol_svg extends $.$mol_view {
        dom_name() {
            return "svg";
        }
        dom_name_space() {
            return "http://www.w3.org/2000/svg";
        }
        text_width(text, force) {
            return (text !== void 0) ? text : 0;
        }
        font_size() {
            return 16;
        }
        font_family() {
            return "";
        }
    }
    __decorate([
        $.$mol_mem
    ], $mol_svg.prototype, "text_width", null);
    $.$mol_svg = $mol_svg;
})($ || ($ = {}));
//svg.view.tree.js.map
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mol_svg extends $.$mol_svg {
            computed_style() {
                const win = this.$.$mol_dom_context;
                const style = win.getComputedStyle(this.dom_node());
                if (!style['font-size'])
                    $.$mol_state_time.now();
                return style;
            }
            font_size() {
                return parseInt(this.computed_style()['font-size']) || 16;
            }
            font_family() {
                return this.computed_style()['font-family'];
            }
            text_width(text) {
                return $.$mol_font_measure(this.font_size(), this.font_family(), text);
            }
        }
        __decorate([
            $.$mol_mem
        ], $mol_svg.prototype, "computed_style", null);
        __decorate([
            $.$mol_mem
        ], $mol_svg.prototype, "font_size", null);
        __decorate([
            $.$mol_mem
        ], $mol_svg.prototype, "font_family", null);
        $$.$mol_svg = $mol_svg;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//svg.view.js.map
;
"use strict";
var $;
(function ($) {
    $.$mol_style_attach("mol/svg/root/root.view.css", "[mol_svg_root] {\n\toverflow: hidden;\n}\n");
})($ || ($ = {}));
//root.view.css.js.map
;
"use strict";
var $;
(function ($) {
    class $mol_svg_root extends $.$mol_svg {
        dom_name() {
            return "svg";
        }
        attr() {
            return (Object.assign(Object.assign({}, super.attr()), { "viewBox": this.view_box(), "preserveAspectRatio": this.aspect() }));
        }
        view_box() {
            return "0 0 100 100";
        }
        aspect() {
            return "xMidYMid";
        }
    }
    $.$mol_svg_root = $mol_svg_root;
})($ || ($ = {}));
//root.view.tree.js.map
;
"use strict";
var $;
(function ($) {
    class $mol_svg_path extends $.$mol_svg {
        dom_name() {
            return "path";
        }
        attr() {
            return (Object.assign(Object.assign({}, super.attr()), { "d": this.geometry() }));
        }
        geometry() {
            return "";
        }
    }
    $.$mol_svg_path = $mol_svg_path;
})($ || ($ = {}));
//path.view.tree.js.map
;
"use strict";
var $;
(function ($) {
    $.$mol_style_attach("mol/icon/icon.view.css", "[mol_icon] {\n\tfill: currentColor;\n\tstroke: none;\n\twidth: 1em;\n\theight: 1em;\n\tflex: 0 0 auto;\n\tvertical-align: -.1em;\n\twill-change: transform;\n}\n");
})($ || ($ = {}));
//icon.view.css.js.map
;
"use strict";
var $;
(function ($) {
    class $mol_icon extends $.$mol_svg_root {
        view_box() {
            return "0 0 24 24";
        }
        minimal_width() {
            return 16;
        }
        minimal_height() {
            return 16;
        }
        sub() {
            return [this.Path()];
        }
        Path() {
            return ((obj) => {
                obj.geometry = () => this.path();
                return obj;
            })(new this.$.$mol_svg_path());
        }
        path() {
            return "";
        }
    }
    __decorate([
        $.$mol_mem
    ], $mol_icon.prototype, "Path", null);
    $.$mol_icon = $mol_icon;
})($ || ($ = {}));
//icon.view.tree.js.map
;
"use strict";
var $;
(function ($) {
    class $mol_icon_tick extends $.$mol_icon {
        path() {
            return "M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z";
        }
    }
    $.$mol_icon_tick = $mol_icon_tick;
})($ || ($ = {}));
//tick.view.tree.js.map
;
"use strict";
var $;
(function ($) {
    $.$mol_style_attach("mol/check/box/box.view.css", "[mol_check_box_icon] {\n\tmargin: .25rem;\n\tborder-radius: var(--mol_skin_round);\n\tbox-shadow: 0 0 0 1px var(--mol_theme_line);\n}\n\n[mol_check]:not([mol_check_checked]) > [mol_check_box_icon] {\n\tfill: transparent;\n}\n\n[mol_check]:not([disabled]) > [mol_check_box_icon] {\n\tbackground: var(--mol_theme_field);\n\tcolor: var(--mol_theme_text);\n}\n");
})($ || ($ = {}));
//box.view.css.js.map
;
"use strict";
var $;
(function ($) {
    class $mol_check_box extends $.$mol_check {
        Icon() {
            return ((obj) => {
                return obj;
            })(new this.$.$mol_icon_tick());
        }
    }
    __decorate([
        $.$mol_mem
    ], $mol_check_box.prototype, "Icon", null);
    $.$mol_check_box = $mol_check_box;
})($ || ($ = {}));
//box.view.tree.js.map
;
"use strict";
var $;
(function ($) {
    class $mol_icon_chevron extends $.$mol_icon {
        path() {
            return "M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z";
        }
    }
    $.$mol_icon_chevron = $mol_icon_chevron;
})($ || ($ = {}));
//chevron.view.tree.js.map
;
"use strict";
var $;
(function ($) {
    class $mol_check_expand extends $.$mol_check {
        minimal_height() {
            return 40;
        }
        Icon() {
            return ((obj) => {
                return obj;
            })(new this.$.$mol_icon_chevron());
        }
        level() {
            return 0;
        }
        style() {
            return (Object.assign(Object.assign({}, super.style()), { "paddingLeft": this.level_style() }));
        }
        level_style() {
            return "0px";
        }
        checked(val, force) {
            return this.expanded(val);
        }
        expanded(val, force) {
            return (val !== void 0) ? val : false;
        }
        enabled() {
            return this.expandable();
        }
        expandable() {
            return false;
        }
    }
    __decorate([
        $.$mol_mem
    ], $mol_check_expand.prototype, "Icon", null);
    __decorate([
        $.$mol_mem
    ], $mol_check_expand.prototype, "checked", null);
    __decorate([
        $.$mol_mem
    ], $mol_check_expand.prototype, "expanded", null);
    $.$mol_check_expand = $mol_check_expand;
})($ || ($ = {}));
//expand.view.tree.js.map
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mol_check_expand extends $.$mol_check_expand {
            level_style() {
                return `${this.level() * 1.25 - 1}rem`;
            }
            expandable() {
                return this.expanded() !== null;
            }
        }
        $$.$mol_check_expand = $mol_check_expand;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//expand.view.js.map
;
"use strict";
var $;
(function ($) {
    $.$mol_style_attach("mol/check/expand/expand.view.css", "[mol_check_expand] {\n}\n\n[mol_check_expand][disabled] [mol_check_expand_icon] {\n\tvisibility: hidden;\n}\n\n[mol_check_expand_icon] {\n\tbox-shadow: none;\n\tmargin: .25rem 0;\n}\n[mol_check_expand]:not([mol_check_checked]) > [mol_check_expand_icon] {\n\ttransform: rotateZ(0deg);\n}\n\n[mol_check_expand][mol_check_checked] > [mol_check_expand_icon] {\n\ttransform: rotateZ(90deg);\n}\n\n[mol_check_expand]:hover > [mol_check_expand_icon] {\n\ttransform: scale(1.25);\n}\n\n[mol_check_expand][mol_check_checked]:hover > [mol_check_expand_icon] {\n\ttransform: rotateZ(90deg) scale(1.25);\n}\n\n[mol_check_box_icon] + div:not(:empty) {\n}\n\n[mol_check_expand_icon] {\n\tvertical-align: text-top;\n}\n\n[mol_check_expand_label] {\n\tmargin-left: 0;\n}\n");
})($ || ($ = {}));
//expand.view.css.js.map
;
"use strict";
var $;
(function ($) {
    class $mol_dimmer extends $.$mol_view {
        haystack() {
            return "";
        }
        needle() {
            return "";
        }
        sub() {
            return this.parts();
        }
        parts() {
            return [];
        }
        Low(id) {
            return ((obj) => {
                obj.sub = () => [this.string(id)];
                return obj;
            })(new this.$.$mol_view());
        }
        string(id) {
            return "";
        }
    }
    __decorate([
        $.$mol_mem_key
    ], $mol_dimmer.prototype, "Low", null);
    $.$mol_dimmer = $mol_dimmer;
})($ || ($ = {}));
//dimmer.view.tree.js.map
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mol_dimmer extends $.$mol_dimmer {
            parts() {
                const needle = this.needle();
                if (!needle)
                    return [this.haystack()];
                let chunks = [];
                let strings = this.strings();
                for (let index = 0; index < strings.length; index++) {
                    if (strings[index] === '')
                        continue;
                    chunks.push((index % 2) ? strings[index] : this.Low(index));
                }
                return chunks;
            }
            strings() {
                return this.haystack().split(new RegExp(`(${this.needle()})`, 'gi'));
            }
            string(index) {
                return this.strings()[index];
            }
        }
        __decorate([
            $.$mol_mem
        ], $mol_dimmer.prototype, "strings", null);
        $$.$mol_dimmer = $mol_dimmer;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//dimmer.view.js.map
;
"use strict";
var $;
(function ($) {
    $.$mol_style_attach("mol/dimmer/dimmer.view.css", "[mol_dimmer_low] {\n\topacity: 0.66;\n}\n");
})($ || ($ = {}));
//dimmer.view.css.js.map
;
"use strict";
var $;
(function ($) {
    class $mol_grid extends $.$mol_scroll {
        row_height() {
            return 40;
        }
        row_ids() {
            return [];
        }
        row_id(index) {
            return null;
        }
        col_ids() {
            return [];
        }
        records() {
            return ({});
        }
        record(id) {
            return null;
        }
        hierarchy() {
            return null;
        }
        hierarchy_col() {
            return "";
        }
        sub() {
            return [this.Head(), this.Table()];
        }
        Table() {
            return ((obj) => {
                obj.sub = () => this.rows();
                return obj;
            })(new this.$.$mol_grid_table());
        }
        rows() {
            return [];
        }
        Head() {
            return ((obj) => {
                obj.cells = () => this.head_cells();
                return obj;
            })(new this.$.$mol_grid_row());
        }
        head_cells() {
            return [];
        }
        Row(id) {
            return ((obj) => {
                obj.minimal_height = () => this.row_height();
                obj.cells = () => this.cells(id);
                return obj;
            })(new this.$.$mol_grid_row());
        }
        cells(id) {
            return [];
        }
        Cell(id) {
            return ((obj) => {
                return obj;
            })(new this.$.$mol_view());
        }
        cell(id) {
            return null;
        }
        Cell_text(id) {
            return ((obj) => {
                obj.sub = () => this.cell_content_text(id);
                return obj;
            })(new this.$.$mol_grid_cell());
        }
        cell_content_text(id) {
            return this.cell_content(id);
        }
        cell_content(id) {
            return [];
        }
        Cell_number(id) {
            return ((obj) => {
                obj.sub = () => this.cell_content_number(id);
                return obj;
            })(new this.$.$mol_grid_number());
        }
        cell_content_number(id) {
            return this.cell_content(id);
        }
        Col_head(id) {
            return ((obj) => {
                obj.dom_name = () => "th";
                obj.sub = () => this.col_head_content(id);
                return obj;
            })(new this.$.$mol_float());
        }
        col_head_content(id) {
            return [];
        }
        Cell_branch(id) {
            return ((obj) => {
                obj.level = () => this.cell_level(id);
                obj.label = () => this.cell_content(id);
                obj.expanded = (val) => this.cell_expanded(id, val);
                return obj;
            })(new this.$.$mol_check_expand());
        }
        cell_level(id) {
            return 0;
        }
        cell_expanded(id, val, force) {
            return (val !== void 0) ? val : false;
        }
        Cell_content(id) {
            return [this.Cell_dimmer(id)];
        }
        Cell_dimmer(id) {
            return ((obj) => {
                obj.needle = () => this.needle();
                obj.haystack = () => this.cell_value(id);
                return obj;
            })(new this.$.$mol_dimmer());
        }
        needle() {
            return "";
        }
        cell_value(id) {
            return "";
        }
    }
    __decorate([
        $.$mol_mem
    ], $mol_grid.prototype, "Table", null);
    __decorate([
        $.$mol_mem
    ], $mol_grid.prototype, "Head", null);
    __decorate([
        $.$mol_mem_key
    ], $mol_grid.prototype, "Row", null);
    __decorate([
        $.$mol_mem_key
    ], $mol_grid.prototype, "Cell", null);
    __decorate([
        $.$mol_mem_key
    ], $mol_grid.prototype, "Cell_text", null);
    __decorate([
        $.$mol_mem_key
    ], $mol_grid.prototype, "Cell_number", null);
    __decorate([
        $.$mol_mem_key
    ], $mol_grid.prototype, "Col_head", null);
    __decorate([
        $.$mol_mem_key
    ], $mol_grid.prototype, "Cell_branch", null);
    __decorate([
        $.$mol_mem_key
    ], $mol_grid.prototype, "cell_expanded", null);
    __decorate([
        $.$mol_mem_key
    ], $mol_grid.prototype, "Cell_dimmer", null);
    $.$mol_grid = $mol_grid;
})($ || ($ = {}));
(function ($) {
    class $mol_grid_table extends $.$mol_list {
        dom_name() {
            return "table";
        }
    }
    $.$mol_grid_table = $mol_grid_table;
})($ || ($ = {}));
(function ($) {
    class $mol_grid_row extends $.$mol_view {
        dom_name() {
            return "tr";
        }
        sub() {
            return this.cells();
        }
        cells() {
            return [];
        }
    }
    $.$mol_grid_row = $mol_grid_row;
})($ || ($ = {}));
(function ($) {
    class $mol_grid_cell extends $.$mol_view {
        dom_name() {
            return "td";
        }
        minimal_height() {
            return 40;
        }
    }
    $.$mol_grid_cell = $mol_grid_cell;
})($ || ($ = {}));
(function ($) {
    class $mol_grid_number extends $.$mol_grid_cell {
    }
    $.$mol_grid_number = $mol_grid_number;
})($ || ($ = {}));
//grid.view.tree.js.map
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mol_grid extends $.$mol_grid {
            head_cells() {
                return this.col_ids().map(colId => this.Col_head(colId));
            }
            col_head_content(colId) {
                return [colId];
            }
            rows() {
                return this.row_ids().map(id => this.Row(id));
            }
            cells(row_id) {
                return this.col_ids().map(col_id => this.Cell({ row: row_id, col: col_id }));
            }
            col_type(col_id) {
                if (col_id === this.hierarchy_col())
                    return 'branch';
                const rowFirst = this.row_id(0);
                const val = this.record(rowFirst[rowFirst.length - 1])[col_id];
                if (typeof val === 'number')
                    return 'number';
                return 'text';
            }
            Cell(id) {
                switch (this.col_type(id.col).valueOf()) {
                    case 'branch': return this.Cell_branch(id);
                    case 'number': return this.Cell_number(id);
                }
                return this.Cell_text(id);
            }
            cell_content(id) {
                return [this.record(id.row[id.row.length - 1])[id.col]];
            }
            records() {
                return [];
            }
            record(id) {
                return this.records()[id];
            }
            record_ids() {
                return Object.keys(this.records());
            }
            row_id(index) {
                return this.row_ids().slice(index, index + 1).valueOf()[0];
            }
            col_ids() {
                const rowFirst = this.row_id(0);
                if (rowFirst === void 0)
                    return [];
                const record = this.record(rowFirst[rowFirst.length - 1]);
                if (!record)
                    return [];
                return Object.keys(record);
            }
            hierarchy() {
                const hierarchy = {};
                const root = hierarchy[''] = {
                    id: '',
                    parent: null,
                    sub: [],
                };
                this.record_ids().map(id => {
                    root.sub.push(hierarchy[id] = {
                        id,
                        parent: root,
                        sub: [],
                    });
                });
                return hierarchy;
            }
            row_sub_ids(row) {
                return this.hierarchy()[row[row.length - 1]].sub.map(child => row.concat(child.id));
            }
            row_root_id() {
                return [''];
            }
            cell_level(id) {
                return id.row.length - 1;
            }
            row_ids() {
                const next = [];
                const add = (row) => {
                    next.push(row);
                    if (this.row_expanded(row)) {
                        this.row_sub_ids(row).forEach(child => add(child));
                    }
                };
                this.row_sub_ids(this.row_root_id()).forEach(child => add(child));
                return next;
            }
            row_expanded(row_id, next) {
                if (!this.row_sub_ids(row_id).length)
                    return null;
                const key = `row_expanded(${JSON.stringify(row_id)})`;
                const next2 = $.$mol_state_session.value(key, next);
                return (next2 == null) ? this.row_expanded_default(row_id) : next2;
            }
            row_expanded_default(row_id) {
                return row_id.length < 3;
            }
            cell_expanded(id, next) {
                return this.row_expanded(id.row, next);
            }
        }
        __decorate([
            $.$mol_mem
        ], $mol_grid.prototype, "head_cells", null);
        __decorate([
            $.$mol_mem
        ], $mol_grid.prototype, "rows", null);
        __decorate([
            $.$mol_mem_key
        ], $mol_grid.prototype, "col_type", null);
        __decorate([
            $.$mol_mem
        ], $mol_grid.prototype, "record_ids", null);
        __decorate([
            $.$mol_mem
        ], $mol_grid.prototype, "hierarchy", null);
        __decorate([
            $.$mol_mem
        ], $mol_grid.prototype, "row_ids", null);
        $$.$mol_grid = $mol_grid;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//grid.view.js.map
;
"use strict";
var $;
(function ($) {
    $.$mol_style_attach("mol/grid/grid.view.css", "[mol_grid] {\n\tdisplay: block;\n\tflex: 1 1 auto;\n\tposition: relative;\n\tbackground: var(--mol_theme_back);\n}\n\n[mol_grid_gap] {\n\tposition: absolute;\n\tpadding: .1px;\n\ttop: 0;\n\ttransform: translateZ(0);\n}\n\n[mol_grid_table] {\n\tborder-spacing: 0;\n\tdisplay: table-row-group;\n\tposition: relative;\n\tbox-shadow: inset 0 0 0 .5px var(--mol_theme_line);\n}\n\n[mol_grid_table] > * {\n\tdisplay: table-row;\n\ttransition: none;\n}\n\n[mol_grid_head] > * ,\n[mol_grid_table] > * > * {\n\tdisplay: table-cell;\n\ttransform: translateZ(0);\n\tpadding: .5rem 1rem;\n\twhite-space: nowrap;\n\tvertical-align: middle;\n\tbox-shadow: inset 0 0 0 .5px var(--mol_theme_line);\n}\n\n[mol_grid_head] {\n\ttransform: none;\n}\n\n[mol_grid_head] > * {\n\tbackground: var(--mol_theme_back);\n}\n\n[mol_grid_cell_number] {\n\ttext-align: right;\n}\n\n[mol_grid_col_head] {\n\tfont-weight: inherit;\n\ttext-align: inherit;\n\tdisplay: table-cell;\n}\n\n[mol_grid_cell_dimmer] {\n\tdisplay: inline-block;\n\tvertical-align: inherit;\n}\n");
})($ || ($ = {}));
//grid.view.css.js.map
;
"use strict";
var $;
(function ($) {
    class $mol_text extends $.$mol_list {
        uri_base() {
            return "";
        }
        text() {
            return "";
        }
        tokens() {
            return [];
        }
        Quote(id) {
            return ((obj) => {
                obj.text = () => this.quote_text(id);
                return obj;
            })(new this.$.$mol_text());
        }
        quote_text(id) {
            return "";
        }
        Row(id) {
            return ((obj) => {
                obj.sub = () => this.block_content(id);
                obj.type = () => this.block_type(id);
                return obj;
            })(new this.$.$mol_text_row());
        }
        block_content(id) {
            return [];
        }
        block_type(id) {
            return "";
        }
        Span(id) {
            return ((obj) => {
                return obj;
            })(new this.$.$mol_text_span());
        }
        Link(id) {
            return ((obj) => {
                return obj;
            })(new this.$.$mol_text_link());
        }
        Image(id) {
            return ((obj) => {
                return obj;
            })(new this.$.$mol_text_image());
        }
        Header(id) {
            return ((obj) => {
                obj.level = () => this.header_level(id);
                obj.content = () => this.header_content(id);
                return obj;
            })(new this.$.$mol_text_header());
        }
        header_level(id) {
            return 0;
        }
        header_content(id) {
            return [];
        }
        Table(id) {
            return ((obj) => {
                obj.head_cells = () => this.table_head_cells(id);
                obj.rows = () => this.table_rows(id);
                return obj;
            })(new this.$.$mol_grid());
        }
        table_head_cells(id) {
            return [];
        }
        table_rows(id) {
            return [];
        }
        Table_row(id) {
            return ((obj) => {
                obj.cells = () => this.table_cells(id);
                return obj;
            })(new this.$.$mol_grid_row());
        }
        table_cells(id) {
            return [];
        }
        Table_cell(id) {
            return ((obj) => {
                obj.sub = () => this.table_cell_content(id);
                return obj;
            })(new this.$.$mol_grid_cell());
        }
        table_cell_content(id) {
            return [];
        }
        Table_cell_head(id) {
            return ((obj) => {
                obj.sub = () => this.table_cell_content(id);
                return obj;
            })(new this.$.$mol_float());
        }
    }
    __decorate([
        $.$mol_mem_key
    ], $mol_text.prototype, "Quote", null);
    __decorate([
        $.$mol_mem_key
    ], $mol_text.prototype, "Row", null);
    __decorate([
        $.$mol_mem_key
    ], $mol_text.prototype, "Span", null);
    __decorate([
        $.$mol_mem_key
    ], $mol_text.prototype, "Link", null);
    __decorate([
        $.$mol_mem_key
    ], $mol_text.prototype, "Image", null);
    __decorate([
        $.$mol_mem_key
    ], $mol_text.prototype, "Header", null);
    __decorate([
        $.$mol_mem_key
    ], $mol_text.prototype, "Table", null);
    __decorate([
        $.$mol_mem_key
    ], $mol_text.prototype, "Table_row", null);
    __decorate([
        $.$mol_mem_key
    ], $mol_text.prototype, "Table_cell", null);
    __decorate([
        $.$mol_mem_key
    ], $mol_text.prototype, "Table_cell_head", null);
    $.$mol_text = $mol_text;
})($ || ($ = {}));
(function ($) {
    class $mol_text_row extends $.$mol_view {
        minimal_height() {
            return 40;
        }
        attr() {
            return (Object.assign(Object.assign({}, super.attr()), { "mol_text_type": this.type() }));
        }
        type() {
            return "";
        }
    }
    $.$mol_text_row = $mol_text_row;
})($ || ($ = {}));
(function ($) {
    class $mol_text_header extends $.$mol_view {
        dom_name() {
            return "h";
        }
        minimal_height() {
            return 50;
        }
        attr() {
            return (Object.assign(Object.assign({}, super.attr()), { "mol_text_header_level": this.level() }));
        }
        level(val, force) {
            return (val !== void 0) ? val : 0;
        }
        sub() {
            return this.content();
        }
        content() {
            return [];
        }
    }
    __decorate([
        $.$mol_mem
    ], $mol_text_header.prototype, "level", null);
    $.$mol_text_header = $mol_text_header;
})($ || ($ = {}));
(function ($) {
    class $mol_text_span extends $.$mol_view {
        dom_name() {
            return "span";
        }
        attr() {
            return (Object.assign(Object.assign({}, super.attr()), { "mol_text_type": this.type() }));
        }
        type(val, force) {
            return (val !== void 0) ? val : "";
        }
        sub() {
            return this.content();
        }
        content(val, force) {
            return (val !== void 0) ? val : [];
        }
    }
    __decorate([
        $.$mol_mem
    ], $mol_text_span.prototype, "type", null);
    __decorate([
        $.$mol_mem
    ], $mol_text_span.prototype, "content", null);
    $.$mol_text_span = $mol_text_span;
})($ || ($ = {}));
(function ($) {
    class $mol_text_link extends $.$mol_link {
        attr() {
            return (Object.assign(Object.assign({}, super.attr()), { "mol_text_type": this.type() }));
        }
        type(val, force) {
            return (val !== void 0) ? val : "";
        }
        uri() {
            return this.link();
        }
        link(val, force) {
            return (val !== void 0) ? val : "";
        }
        sub() {
            return this.content();
        }
        content(val, force) {
            return (val !== void 0) ? val : [];
        }
    }
    __decorate([
        $.$mol_mem
    ], $mol_text_link.prototype, "type", null);
    __decorate([
        $.$mol_mem
    ], $mol_text_link.prototype, "link", null);
    __decorate([
        $.$mol_mem
    ], $mol_text_link.prototype, "content", null);
    $.$mol_text_link = $mol_text_link;
})($ || ($ = {}));
(function ($) {
    class $mol_text_image extends $.$mol_view {
        dom_name() {
            return "object";
        }
        attr() {
            return (Object.assign(Object.assign({}, super.attr()), { "allowfullscreen": true, "mol_text_type": this.type(), "data": this.link() }));
        }
        type(val, force) {
            return (val !== void 0) ? val : "";
        }
        link(val, force) {
            return (val !== void 0) ? val : "";
        }
        sub() {
            return [this.title()];
        }
        title(val, force) {
            return (val !== void 0) ? val : "";
        }
    }
    __decorate([
        $.$mol_mem
    ], $mol_text_image.prototype, "type", null);
    __decorate([
        $.$mol_mem
    ], $mol_text_image.prototype, "link", null);
    __decorate([
        $.$mol_mem
    ], $mol_text_image.prototype, "title", null);
    $.$mol_text_image = $mol_text_image;
})($ || ($ = {}));
//text.view.tree.js.map
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mol_text extends $.$mol_text {
            tokens() {
                return this.$.$mol_syntax_md_flow.tokenize(this.text());
            }
            rows() {
                return this.tokens().map((token, index) => {
                    switch (token.name) {
                        case 'table': return this.Table(index);
                        case 'header': return this.Header(index);
                        case 'quote': return this.Quote(index);
                    }
                    return this.Row(index);
                });
            }
            header_level(index) {
                return this.tokens()[index].chunks[0].length;
            }
            header_content(index) {
                return this.text2spans(`${index}`, this.tokens()[index].chunks[2]);
            }
            quote_text(index) {
                return this.tokens()[index].chunks[0].replace(/^> /mg, '');
            }
            block_type(index) {
                return this.tokens()[index].name;
            }
            cell_contents(indexBlock) {
                return this.tokens()[indexBlock].chunks[0]
                    .split(/\r?\n/g)
                    .filter(row => row && !/\|--/.test(row))
                    .map((row, rowId) => {
                    return row.split(/\|/g)
                        .filter(cell => cell)
                        .map((cell, cellId) => cell.trim());
                });
            }
            table_rows(blockId) {
                return this.cell_contents(blockId)
                    .slice(1)
                    .map((row, rowId) => this.Table_row({ block: blockId, row: rowId + 1 }));
            }
            table_head_cells(blockId) {
                return this.cell_contents(blockId)[0]
                    .map((cell, cellId) => this.Table_cell_head({ block: blockId, row: 0, cell: cellId }));
            }
            table_cells(id) {
                return this.cell_contents(id.block)[id.row]
                    .map((cell, cellId) => this.Table_cell({ block: id.block, row: id.row, cell: cellId }));
            }
            table_cell_content(id) {
                return this.text2spans(`${id.block}/${id.row}/${id.cell}`, this.cell_contents(id.block)[id.row][id.cell]);
            }
            uri_base() {
                return $.$mol_dom_context.document.location.href;
            }
            uri_resolve(uri) {
                const url = new URL(uri, this.uri_base());
                return url.toString();
            }
            text2spans(prefix, text) {
                return this.$.$mol_syntax_md_line.tokenize(text).map((token, index) => {
                    const id = `${prefix}/${index}`;
                    switch (token.name) {
                        case 'text-link': {
                            if (/^(\w+script+:)+/.test(token.chunks[1])) {
                                const span = this.Span(id);
                                span.content(this.text2spans(id, token.chunks[0]));
                                return span;
                            }
                            else {
                                const span = this.Link(id);
                                span.type(token.name);
                                span.link(this.uri_resolve(token.chunks[1]));
                                span.content(this.text2spans(id, token.chunks[0]));
                                return span;
                            }
                        }
                        case 'image-link': {
                            const span = this.Image(token.chunks[1]);
                            span.type(token.name);
                            span.link(this.uri_resolve(token.chunks[1]));
                            span.title(token.chunks[0]);
                            return span;
                        }
                        case 'code3':
                        case 'code': {
                            const span = this.Span(id);
                            span.type('code');
                            span.content(this.code2spans(id, token.chunks[0]));
                            return span;
                        }
                    }
                    const span = this.Span(id);
                    span.type(token.name);
                    span.content(token.name
                        ? [].concat.apply([], token.chunks.map((text, index) => this.text2spans(`${id}/${index}`, text)))
                        : [token.found]);
                    return span;
                });
            }
            code2spans(prefix, text) {
                return this.$.$mol_syntax_md_code.tokenize(text).map((token, index) => {
                    const id = `${prefix}/${index}`;
                    const span = this.Span(id);
                    span.type(token.name);
                    switch (token.name) {
                        case 'code-docs': {
                            span.content(this.text2spans(`${id}/${index}`, token.found));
                            return span;
                        }
                        case 'code-string': {
                            span.content([token.found[0], ...this.code2spans(`${id}/${index}`, token.found.slice(1, token.found.length - 1)), token.found[token.found.length - 1]]);
                            return span;
                        }
                        default: {
                            span.content([token.found]);
                            return span;
                        }
                    }
                });
            }
            block_content(indexBlock) {
                const token = this.tokens()[indexBlock];
                switch (token.name) {
                    case 'header': return this.text2spans(`${indexBlock}`, token.chunks[2]);
                    case 'list': return this.text2spans(`${indexBlock}`, token.chunks[0]);
                    case 'code': return this.code2spans(`${indexBlock}`, token.chunks[2]);
                    case 'code-indent': return this.code2spans(`${indexBlock}`, token.chunks[0].replace(/[\n\r]*$/, '\n').replace(/^\t/gm, ''));
                }
                return this.text2spans(`${indexBlock}`, token.chunks[0]);
            }
        }
        __decorate([
            $.$mol_mem
        ], $mol_text.prototype, "tokens", null);
        __decorate([
            $.$mol_mem
        ], $mol_text.prototype, "rows", null);
        __decorate([
            $.$mol_mem_key
        ], $mol_text.prototype, "cell_contents", null);
        __decorate([
            $.$mol_mem_key
        ], $mol_text.prototype, "table_rows", null);
        __decorate([
            $.$mol_mem_key
        ], $mol_text.prototype, "table_head_cells", null);
        __decorate([
            $.$mol_mem_key
        ], $mol_text.prototype, "table_cells", null);
        __decorate([
            $.$mol_mem_key
        ], $mol_text.prototype, "table_cell_content", null);
        __decorate([
            $.$mol_fiber.method
        ], $mol_text.prototype, "text2spans", null);
        __decorate([
            $.$mol_fiber.method
        ], $mol_text.prototype, "code2spans", null);
        __decorate([
            $.$mol_mem_key
        ], $mol_text.prototype, "block_content", null);
        $$.$mol_text = $mol_text;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//text.view.js.map
;
"use strict";
var $;
(function ($) {
    $.$mol_style_attach("mol/text/text.view.css", "[mol_text] {\n\tline-height: 1.5;\n\tbox-sizing: border-box;\n\tmax-width: 60rem;\n\tbox-shadow: 0 0 0 1px var(--mol_theme_line);\n\tpadding: .5rem;\n\tborder-radius: var(--mol_skin_round);\n\twhite-space: pre-line;\n\tdisplay: flex;\n\tflex-direction: column;\n\tflex: 0 0 auto;\n\ttab-size: 4;\n}\n\n[mol_text_row] {\n\tmargin: .5rem;\n\toverflow: auto;\n\tmax-width: 100%;\n}\n\n[mol_text_type=\"block\"] {\n}\n\n[mol_text_header] {\n\tdisplay: block;\n\tpadding: .5rem;\n\tfont-weight: 500;\n\tmargin: 0;\n}\n\n[mol_text_header_level=\"1\"] {\n\tfont-size: 1.5em;\n}\n\n[mol_text_header_level=\"2\"] {\n\tfont-size: 1.3em;\n}\n\n[mol_text_header_level=\"3\"] {\n\tfont-size: 1.1em;\n}\n\n[mol_text_header_level=\"4\"] {\n\tfont-size: 1.1em;\n\tfont-style: italic;\n}\n\n[mol_text_header_level=\"5\"] {\n\tfont-size: 1.1em;\n\tfont-weight: normal;\n\tfont-style: italic;\n}\n\n[mol_text_type=\"list-item\"] {\n\tdisplay: list-item;\n}\n\n[mol_text_type=\"list-item\"]:before {\n\tcontent: '•';\n\tmargin-right: 1ch;\n}\n\n[mol_text_table] {\n\tmax-width: 100%;\n\tmax-height: 75vh;\n\toverflow: auto;\n\tmargin: .5rem;\n\tflex-grow: 0;\n}\n\n[mol_text_type=\"code-indent\"] ,\n[mol_text_type=\"code\"] {\n\tfont-family: var(--mol_skin_font_monospace);\n\twhite-space: pre-wrap;\n\tborder-radius: var(--mol_skin_round);\n}\n\n[mol_text_type=\"text-link\"] {\n\tcolor: var(--mol_theme_control);\n\ttext-decoration: none;\n\tpadding: 0;\n}\n\n[mol_text_link]:hover ,\n[mol_text_link]:focus {\n\toutline: none;\n}\n\n[mol_text_image] {\n\tmax-width: 100%;\n\tmax-height: 75vh;\n\tobject-fit: scale-down;\n}\n\n[mol_text_type=\"strong\"] {\n\tfont-weight: bolder;\n}\n\n[mol_text_type=\"emphasis\"] {\n\tfont-style: italic;\n}\n\n[mol_text_type=\"strike\"] {\n\ttext-decoration: line-through;\n\tcolor: var(--mol_theme_shade);\n}\n\n[mol_text_type=\"code-keyword\"] {\n\tcolor: hsl(0, 70%, 60%);\n}\n\n[mol_text_type=\"code-field\"] {\n\tcolor: hsl(300, 70%, 60%);\n}\n\n[mol_text_type=\"code-tag\"] {\n\tcolor: hsl(330, 70%, 60%);\n}\n\n[mol_text_type=\"code-global\"] {\n\tcolor: hsl(210, 80%, 60%);\n}\n\n[mol_text_type=\"code-decorator\"] {\n\tcolor: hsl(180, 40%, 60%);\n}\n\n[mol_text_type=\"code-punctuation\"] {\n\topacity: .5;\n}\n\n[mol_text_type=\"code-string\"] {\n\tcolor: hsl(90, 40%, 50%);\n}\n\n[mol_text_type=\"code-number\"] {\n\tcolor: hsl(60, 70%, 30%);\n}\n\n[mol_text_type=\"code-call\"] {\n\tcolor: hsl(270, 60%, 60%);\n}\n\n[mol_text_type=\"code-link\"] {\n\tcolor: hsl(240, 60%, 60%);\n}\n\n[mol_text_type=\"code-comment-inline\"] ,\n[mol_text_type=\"code-comment-block\"] {\n\topacity: .5;\n}\n\n[mol_text_type=\"code-docs\"] {\n\topacity: .75;\n}\n");
})($ || ($ = {}));
//text.view.css.js.map
;
"use strict";
var $;
(function ($) {
    class $mol_message extends $.$mol_view {
        moment() {
            return ((obj) => {
                return obj;
            })(new this.$.$mol_time_moment());
        }
        sub() {
            return [this.Info(), this.Avatar_link(), this.Text()];
        }
        Info() {
            return ((obj) => {
                obj.sub = () => [this.Name(), this.Moment()];
                return obj;
            })(new this.$.$mol_row());
        }
        Name() {
            return ((obj) => {
                obj.sub = () => [this.name()];
                return obj;
            })(new this.$.$mol_view());
        }
        name() {
            return " ";
        }
        Moment() {
            return ((obj) => {
                obj.sub = () => [this.moment_string()];
                return obj;
            })(new this.$.$mol_view());
        }
        moment_string() {
            return "";
        }
        Avatar_link() {
            return ((obj) => {
                obj.uri = () => this.avatar_link();
                obj.sub = () => [this.Avatar()];
                return obj;
            })(new this.$.$mol_link());
        }
        avatar_link() {
            return "";
        }
        Avatar() {
            return ((obj) => {
                obj.title = () => "";
                obj.uri = () => this.avatar();
                return obj;
            })(new this.$.$mol_image());
        }
        avatar() {
            return "";
        }
        Text() {
            return ((obj) => {
                obj.text = () => this.text();
                return obj;
            })(new this.$.$mol_text());
        }
        text() {
            return "";
        }
    }
    __decorate([
        $.$mol_mem
    ], $mol_message.prototype, "moment", null);
    __decorate([
        $.$mol_mem
    ], $mol_message.prototype, "Info", null);
    __decorate([
        $.$mol_mem
    ], $mol_message.prototype, "Name", null);
    __decorate([
        $.$mol_mem
    ], $mol_message.prototype, "Moment", null);
    __decorate([
        $.$mol_mem
    ], $mol_message.prototype, "Avatar_link", null);
    __decorate([
        $.$mol_mem
    ], $mol_message.prototype, "Avatar", null);
    __decorate([
        $.$mol_mem
    ], $mol_message.prototype, "Text", null);
    $.$mol_message = $mol_message;
})($ || ($ = {}));
//message.view.tree.js.map
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mol_message extends $.$mol_message {
            moment_string() {
                return this.moment().toString('YYYY-MM-DD hh:mm:ss');
            }
        }
        $$.$mol_message = $mol_message;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//message.view.js.map
;
"use strict";
var $;
(function ($) {
    $.$mol_style_attach("mol/message/message.view.css", "[mol_message] {\n\tmax-width: 58rem;\n\tdisplay: flex;\n\tflex-wrap: wrap;\n\talign-items: flex-start;\n}\n\n[mol_message_avatar_link] {\n\tdisplay: flex;\n\tflex-direction: column;\n\tflex: none;\n\tpadding: 0;\n}\n\n[mol_message_avatar] {\n\twidth: 3.5rem;\n\theight: 3.5rem;\n}\n\n[mol_message_text] {\n\tflex: 1000 1 10rem;\n}\n\n[mol_message_info] {\n\tflex: 1 1 100%;\n\tpadding: 0;\n\tbox-shadow: none;\n\tdisplay: flex;\n\talign-items: baseline;\n\tjustify-content: space-between;\n\tfont-size: .75rem;\n\tline-height: 1rem;\n}\n\n[mol_message_info] > * {\n\tmargin: 0;\n}\n\n[mol_message_name] {\n\tfont-weight: bolder;\n}\n");
})($ || ($ = {}));
//message.view.css.js.map
;
"use strict";
var $;
(function ($) {
    class $mol_chat extends $.$mol_list {
        rows() {
            return [this.posts(), this.Add_status(), this.Add()];
        }
        posts() {
            return [];
        }
        Add_status() {
            return ((obj) => {
                obj.status = () => this.adding();
                return obj;
            })(new this.$.$mol_status());
        }
        adding(next, force) {
            return (next !== void 0) ? next : null;
        }
        Add() {
            return ((obj) => {
                obj.sub = () => [this.Add_body(), this.Add_submit()];
                return obj;
            })(new this.$.$mol_bar());
        }
        Add_body() {
            return ((obj) => {
                obj.hint = () => this.add_hint();
                obj.value = (val) => this.add_body(val);
                return obj;
            })(new this.$.$mol_string());
        }
        add_hint() {
            return this.$.$mol_locale.text("$mol_chat_add_hint");
        }
        add_body(val, force) {
            return (val !== void 0) ? val : "";
        }
        Add_submit() {
            return ((obj) => {
                obj.enabled = () => this.add_submit_enabled();
                obj.title = () => this.add_submit_label();
                obj.event_click = (event) => this.add(event);
                return obj;
            })(new this.$.$mol_button_major());
        }
        add_submit_enabled() {
            return false;
        }
        add_submit_label() {
            return this.$.$mol_locale.text("$mol_chat_add_submit_label");
        }
        add(event, force) {
            return (event !== void 0) ? event : null;
        }
        Post(index) {
            return ((obj) => {
                obj.name = () => this.post_user_name(index);
                obj.moment = () => this.post_updated(index);
                obj.avatar_link = () => this.post_user_link(index);
                obj.avatar = () => this.post_user_ava(index);
                obj.text = () => this.post_body(index);
                return obj;
            })(new this.$.$mol_message());
        }
        post_user_name(index) {
            return "";
        }
        post_updated(index) {
            return ((obj) => {
                return obj;
            })(new this.$.$mol_time_moment());
        }
        post_user_link(index) {
            return "";
        }
        post_user_ava(index) {
            return "";
        }
        post_body(index) {
            return "";
        }
        repository() {
            return ((obj) => {
                return obj;
            })(new this.$.$mol_github_repository());
        }
        repository_name() {
            return "";
        }
        link() {
            return "";
        }
        seed() {
            return "";
        }
        teaser() {
            return "";
        }
        issue() {
            return ((obj) => {
                return obj;
            })(new this.$.$mol_github_issue());
        }
    }
    __decorate([
        $.$mol_mem
    ], $mol_chat.prototype, "Add_status", null);
    __decorate([
        $.$mol_mem
    ], $mol_chat.prototype, "adding", null);
    __decorate([
        $.$mol_mem
    ], $mol_chat.prototype, "Add", null);
    __decorate([
        $.$mol_mem
    ], $mol_chat.prototype, "Add_body", null);
    __decorate([
        $.$mol_mem
    ], $mol_chat.prototype, "add_body", null);
    __decorate([
        $.$mol_mem
    ], $mol_chat.prototype, "Add_submit", null);
    __decorate([
        $.$mol_mem
    ], $mol_chat.prototype, "add", null);
    __decorate([
        $.$mol_mem_key
    ], $mol_chat.prototype, "Post", null);
    __decorate([
        $.$mol_mem_key
    ], $mol_chat.prototype, "post_updated", null);
    __decorate([
        $.$mol_mem
    ], $mol_chat.prototype, "repository", null);
    __decorate([
        $.$mol_mem
    ], $mol_chat.prototype, "issue", null);
    $.$mol_chat = $mol_chat;
})($ || ($ = {}));
//chat.view.tree.js.map
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mol_chat extends $.$mol_chat {
            repository() {
                return $.$mol_github_repository.item(`https://api.github.com/repos/${this.repository_name()}`);
            }
            issue(next, force) {
                const repo_name = this.repository().name_full();
                const search_uri = `https://api.github.com/search/issues?q=repo:${repo_name} ${this.seed()} in:body type:issue`;
                if (next)
                    return next;
                const issues = $.$mol_github_search_issues.item(search_uri).items(undefined, force);
                return issues[0] || null;
            }
            issue_ensured() {
                let issue = this.issue();
                if (issue)
                    return issue;
                const issue_json = this.service().issue_add(this.repository().uri(), this.title(), this.teaser());
                issue = $.$mol_github_issue.item(issue_json.url);
                issue.json_update(issue_json);
                return this.issue(issue);
            }
            seed() {
                return btoa(this.link());
            }
            teaser() {
                return `[${this.seed()}](${this.link()})`;
            }
            posts_data() {
                const issue = this.issue();
                if (!issue)
                    return [];
                const comments_json = this.service().comment_list(issue.uri());
                issue.comments().json_update(comments_json);
                return issue.comments().items();
            }
            posts() {
                return this.posts_data().map((_, index) => this.Post(index));
            }
            post_user_ava(index) {
                return this.posts_data()[index].user().avatar();
            }
            post_user_name(index) {
                return this.posts_data()[index].user().name();
            }
            post_user_link(index) {
                return this.posts_data()[index].user().link();
            }
            post_body(index) {
                return this.posts_data()[index].text();
            }
            post_updated(index) {
                return this.posts_data()[index].moment_updated();
            }
            add_submit_enabled() {
                return this.add_body().trim().length > 0;
            }
            service() {
                return this.$.$mol_rpc_client_frame.item('//mol.js.org/chat/service/').proxy();
            }
            adding(text, force) {
                if (!text)
                    return;
                const comment_json = this.service().comment_add(this.issue_ensured().uri(), text);
                const comment = $.$mol_github_comment.item(comment_json.url);
                comment.json_update(comment_json);
                this.issue_ensured().comments().items([...this.issue_ensured().comments().items(), comment], $.$mol_mem_force_cache);
                this.add_body('');
                return text;
            }
            add() {
                this.adding(this.add_body(), $.$mol_mem_force_update);
            }
        }
        __decorate([
            $.$mol_mem
        ], $mol_chat.prototype, "repository", null);
        __decorate([
            $.$mol_mem
        ], $mol_chat.prototype, "issue", null);
        __decorate([
            $.$mol_mem
        ], $mol_chat.prototype, "issue_ensured", null);
        __decorate([
            $.$mol_mem
        ], $mol_chat.prototype, "posts_data", null);
        __decorate([
            $.$mol_mem
        ], $mol_chat.prototype, "adding", null);
        $$.$mol_chat = $mol_chat;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//chat.view.js.map
;
"use strict";
var $;
(function ($) {
    $.$mol_style_attach("mol/chat/chat.view.css", "[mol_chat] {\n\tbox-shadow: var(--mol_skin_light_outline);\n\tmin-height: 1rem;\n}\n\n[mol_chat_post] {\n\tmargin: 1rem;\n}\n\n[mol_chat_add_status] {\n\tmargin: 1rem;\n\tmax-width: 58rem;\n\tbox-sizing: border-box;\n}\n\n[mol_chat_add] {\n\tmargin: 1rem;\n\tmax-width: 58rem;\n}\n");
})($ || ($ = {}));
//chat.view.css.js.map
;
"use strict";
var $;
(function ($) {
    class $mol_dom_listener extends $.$mol_object {
        constructor(_node, _event, _handler, _config = { passive: true }) {
            super();
            this._node = _node;
            this._event = _event;
            this._handler = _handler;
            this._config = _config;
            this._node.addEventListener(this._event, this._handler, this._config);
        }
        destructor() {
            this._node.removeEventListener(this._event, this._handler, this._config);
            super.destructor();
        }
    }
    $.$mol_dom_listener = $mol_dom_listener;
})($ || ($ = {}));
//listener.js.map
;
"use strict";
var $;
(function ($) {
    class $mol_rpc_server extends $.$mol_object {
        listener() {
            return new this.$.$mol_dom_listener(this.$.$mol_dom_context, 'message', (event) => this.handle(event.data));
        }
        handle({ id, name, args }) {
            const handler = this.handlers()[name] || this.handlers()[''];
            if (!handler)
                return;
            try {
                const result = handler(...args);
                this.$.$mol_dom_context.parent.postMessage({ id, result }, '*');
            }
            catch (error) {
                this.$.$mol_dom_context.parent.postMessage({ id, error: error.message }, '*');
            }
        }
        handlers() {
            return {};
        }
    }
    __decorate([
        $.$mol_mem
    ], $mol_rpc_server.prototype, "listener", null);
    __decorate([
        $.$mol_fiber_method
    ], $mol_rpc_server.prototype, "handle", null);
    $.$mol_rpc_server = $mol_rpc_server;
})($ || ($ = {}));
//server.js.map
;
"use strict";
var $;
(function ($) {
    class $mol_chat_service extends $.$mol_rpc_server {
        handlers() {
            return {
                issue_add: (repo_uri, title, text) => {
                    this.guard_repo(repo_uri).valueOf();
                    const repo = $.$mol_github_repository.item(repo_uri);
                    const issue = repo.issues().add({ title, text });
                    return issue.json();
                },
                comment_add: (issue_uri, text) => {
                    this.guard_issue(issue_uri).valueOf();
                    return $.$mol_github_issue.item(issue_uri).comments().add({ text }).json();
                },
                comment_list: (issue_uri) => {
                    return $.$mol_github_issue.item(issue_uri).comments().items().map(comment => comment.json());
                },
            };
        }
        guard_issue(issue_uri) {
            const issue = $.$mol_github_issue.item(issue_uri);
            const repo = issue.repository();
            return this.guard_repo(repo.uri());
        }
        guard_repo(repo_uri) {
            const origin = new URL(this.$.$mol_dom_context.document.referrer).hostname;
            const label = $.$mol_github_label.item(`${repo_uri}/labels/$mol_chat:${origin}`);
            return label.id();
        }
    }
    __decorate([
        $.$mol_mem_key
    ], $mol_chat_service.prototype, "guard_repo", null);
    $.$mol_chat_service = $mol_chat_service;
})($ || ($ = {}));
//service.js.map
;
"use strict";
var $;
(function ($) {
    function $mol_exec(dir, command, ...args) {
        let [app, ...args0] = command.split(' ');
        args = [...args0, ...args];
        console.info(`${$node.colorette.gray($node.path.relative('', dir))}> ${$node.colorette.blue(app)} ${$node.colorette.cyan(args.join(' '))}`);
        var res = $node['child_process'].spawnSync(app, args, {
            cwd: $node.path.resolve(dir),
            shell: true,
        });
        if (res.status || res.error)
            return $.$mol_fail(res.error || new Error(res.stderr.toString()));
        if (!res.stdout)
            res.stdout = new Buffer('');
        return res;
    }
    $.$mol_exec = $mol_exec;
})($ || ($ = {}));
//exec.node.js.map
;
"use strict";
var $;
(function ($) {
    class $mol_plugin extends $.$mol_view {
        dom_node(next) {
            const node = next || $.$mol_owning_get(this, $.$mol_view).dom_node();
            $.$mol_dom_render_attributes(node, this.attr_static());
            const events = this.event();
            for (let event_name in events) {
                node.addEventListener(event_name, $.$mol_log2.func($.$mol_fiber_root(events[event_name])), { passive: false });
            }
            return node;
        }
        attr_static() {
            return {};
        }
        event() {
            return {};
        }
        render() {
            this.dom_node_actual();
        }
    }
    __decorate([
        $.$mol_mem
    ], $mol_plugin.prototype, "dom_node", null);
    $.$mol_plugin = $mol_plugin;
})($ || ($ = {}));
//plugin.js.map

//# sourceMappingURL=node.js.map