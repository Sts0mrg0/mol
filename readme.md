# $mol [![Build Status](https://travis-ci.org/eigenmethod/mol.svg?branch=master)](https://travis-ci.org/eigenmethod/mol)

Reactive micro-modular ui framework. Very simple, but very powerful!

# Features

* [Zero configuration](#zero-configuration). Just checkout and use it. 
* [Lazy rendering/evaluating/loading etc](#lazyness).
* [Full reactivity](#reactivity) in all application layers. Not only between View and ViewModel.
* [Automatic dependency tracking](#reactivity) between reactive containers. No need to manual (un)subscribe and streams routing.
* [Effective state synchronization](atom) in right way. 
* Automatic include modules in package at compile time. No need to manual import them. [Just use it](#zero-configuration).
* Very small modules. [All of them are optional](#zero-configuration).
* Cross platform. [Support any environment](#zero-configuration) (NodeJS, Web, Cordova).
* Static typing ([TypeScript](https://www.typescriptlang.org/)). Full IDE support.
* Full customization. No implementation hiding. [All aspects are overridable](#lego-components).
* [Lifecycle management](#reactivity). Automatic destroy of unnecessary objects.
* [Easy debugging](#debugging). No exception catching. User readable id's of all objects. Quick access to all objects from console.
* Easy [user friendly logging](#debugging) of all state changes.
* Pseudosynchronous code. [Asynchrony is abstracted by reactivity](#reactivity). No callbacks/promises/streams hell. No async/awiat/yield virus.
* Automatic [BEM](https://en.bem.info/methodology/naming-convention/)-attributes generation for elements.

# [Demo applications](demo)

* [$mol_app_hello](app/hello) - very simple application ([online](https://eigenmethod.github.io/mol/app/hello/))
* [$mol_app_demo](app/demo) - demonstrates all components ([online](http://eigenmethod.github.io/mol/))
* [$mol_app_todomvc](app/todomvc) - [ToDoMVC](http://todomvc.com/) implementation ([online](http://eigenmethod.github.io/mol/#demo=mol_app_todomvc), [benchmark](https://github.com/nin-jin/todomvc/tree/master/benchmark), [video comparison](https://www.webpagetest.org/video/view.php?id=160515_4f193e07f4c37dc3b72dd3799dd27397551690a2))
* [$mol_app_supplies](app/supplies) - Supplies management tool ([online](https://eigenmethod.github.io/mol/app/supplies/))
* [$mol_app_signup](app/signup) - simple form with persistence ([online](http://eigenmethod.github.io/mol/#demo=mol_app_signup))
* [$mol_app_users](app/users) - GitHub user "management" tool ([online](http://eigenmethod.github.io/mol/#demo=mol_app_users))

# [Benchmarks](perf)

* [$mol_perf_render](perf/render) - simple benchmark of rendering ([online](http://eigenmethod.github.io/mol/perf/render/))
* [ToDoMVC benchmark](https://github.com/nin-jin/todomvc/tree/master/benchmark)

# Quick start

**Create MAM project**

Easy way is checkout [this preconfigured MAM repository](http://github.com/eigenmethod/mam) and start dev server:

```sh
git clone https://github.com/nin-jin/mam.git ./mam && cd mam
npm start
```

**Create your application component**

In examples we will use namespace `my` and application name `hello`, but you must use your own namespace and application name.

Add **web entry point** at `./my/hello/index.html`:

```html
<!doctype html>
<head>
	<!-- page title -->
	<title>Hello World!</title>
	
	<!-- Force utf-8 dencoding -->
	<meta charset="utf-8" />
	
	<!-- Disable modile browser auto zoom, $mol is adaptive -->
	<meta name="viewport" content="width=device-width" />
	
	<!-- link to autogenerated css bundle -->
	<link rel="stylesheet" href="-/web.css" />
</head>
<body>
	<!-- autobind component to element on load -->
	<div mol_viewer_root="$my_hello"></div>
	
	<!-- links to autogenerated realease and test js bundles -->
	<script src="-/web.js"></script>
	<script src="-/web.test.js"></script>
</body>
```

Your application will be served at **`http://localhost:8080/my/hello/`**.

Add **declarative component description** at `./my/hello/hello.view.tree` with string input field and greeting message:

```tree
$my_hello $mol_viewer childs /
	< namer $mol_stringer
		hint \Name
		value > name \
	< message \
```

That will be compiled to typescript code like this:

```typescript
module $ { export class $my_hello extends $mol_viewer {

	/// name \
	@ $mol_prop()
	name( ...diff : any[] ) {
		return ( diff[0] !== void 0 ) ? diff[0] : ""
	}

	/// input $mol_stringer 
	/// 	hint \Name
	/// 	value > name
	@ $mol_prop()
	namer( ...diff : any[] ) {
		return ( diff[0] !== void 0 ) ? diff[0] : new $mol_stringer().setup( __ => { 
			__.hint = () => "Name"
			__.value = ( ...diff : any[] ) => this.name(  ...diff )
		} )
	}

	/// message \
	message() {
		return ""
	}

	/// childs / 
	/// 	< input 
	/// 	< message
	childs() {
		return [].concat( this.namer() , this.message() )
	}

} }
```

Add **your behaviour** at `./my/hello/hello.view.ts` by extending generated class:

```typescript
module $.$mol {
	export class $my_hello extends $.$my_hello {
		
		message() {
			let name = this.name()
			return name && `Hello, ${name}!`
		}
		
	}
}
```

Add **styles** at `./my/hello/hello.view.css`:

```css
/* Styling BEM-block by autogenerated attribute */
[my_hello] {
	margin: auto;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	font: 1.5rem/1 sans-serif;
}

/* Styling BEM-element by autogenerated attribute */
[my_hello_namer] {
	flex-grow: 0;
	margin: 1rem;
}
```

[That is all!](https://eigenmethod.github.io/mol/app/hello/)

# Rationale

## Zero configuration
Instead of ensuring configurable under any wanting, we better concentrate on, that all would worked good directly from the box and does not bother $mol's developer by a typical configure. (But, nevertheless it does not excludes setup for your needs if it is required)

For example if you download **[base MAM-project](http://github.com/eigenmethod/mam)** you'd have got that:

**Building of JS and CSS bundles for different platforms.** A bundle can be built for any module. In this bundle would be sources of that module and sources all other modules from which the module depends on. Also there would not redundant modules in the bundle.  

There are the full set of supports bundles:

* `-/web.js` - JS for browser
* `-/web.test.js` - JS with tests for a browser
* `-/web.css` - CSS styles for a browser
* `-/web.deps.json` - a map of dependencies modules for browser
* `-/web.locale=en.json` - strings pulled from view.tree sources
* `-/node.js` - JS for NodeJS
* `-/node.test.js` - JS with tests for NodeJS
* `-/node.deps.json` - a map of dependencies modules for NodeJS

**Support of Source Maps**. Sources are compiled and integrate to maps, they are fully self-sufficient.

**Development server**, witch would be compile bundles as needed. For example, when requested `http://localhost:8080/mol/app/todomvc/-/web.js` the `js` bundle is being built of `mol/app/todomvc` for `web` environment. Rebuilding would be occur only if some source file would be changed.

**Transpilling of modern CSS into CSS supported by browsers** ([postcss-cssnext](https://github.com/MoOx/postcss-cssnext)): vendor prefixes and variables etc.

**Transpilling [TypeScript](https://github.com/Microsoft/TypeScript) into JS**. 
In TS configuration enabled support decorators and disabled implicit `any` type, for prevent missing typing by change.

**Watching dependencies by fact of using** and inclusion the needed modules automatically at further bundle. You don't need to write `include` and `require` everything you need is to refer for essence by full name like `$mol_state_arg` and `$mol.state.arg` (looking at its definition) in `*.ts`, `*.view.ts`, `*.view.tree` and `*.jam.js` files. At CSS files its dependencies are looked for by entries like `[mol_checker_checked]` , `[mol_checker_checked=` and `.mol_checker_checked`.

## Lego components

At $mol is used the component approach to the building of interface, however **every component is self-sufficient** and can be used as the self-sufficient application. Small components are aggregated inside of larger components etc.

Unlike another frameworks the $mol does not seek to isolate the insides of the components. Vice versa, there is comfortable mechanism is provided for developers for configuration them, it is not required from the creator of the component to do any additional gestures.

For example, to set the list of childs components you need to redefine `childs` property in view.tree

```tree
$mol_viewer childs /
	< button1
	< button2
```

Or the same code through TypeScript would be:

```typescript
new $mol_viewer().setup( obj => {
	obj.childs = ()=> [ this.button1() , this.button2() ]
} )
```

In both variants the compiler would verify existence of the property and accordance of the signature. In normal mode you don't need to work with fields of the object directly, so all definable properties 
are public and can be safely overloaded.

Details about viewers and `view.tree` language: [$mol_viewer](viewer).

## Lazyness
[$mol_viewer](viewer) implements lazy rendering. [$mol_scroller](scroller) is watching scroll's position and suggest to the embedded components about the view height. [$mol_lister](lister) knowing about the view height and minimal sizes of the embedded components, it excludes from rendering process the components that is not got into viewport for sure. And all other components can suggest it about their minimal size through `heightMinimal` property.

```
$my_icon $mol_viewer
	heightMinimal 16
```

At the result it come out than opening any window occur while instant time. It's independent of output data size. And since data would not be rendered, then any requests would not be proceeded. It's allowed us to download them partly, when they are needed. That features are possible due to reactive architecture, that are penetrated all layers of application.

## Reactivity
Unlike the control-flow architectures, in $mol was implemented the data-flow architecture. All applications are described as a set of classes, having properties. Every property is described as some function from another property (and properties of another classes too). Properties, to which were appealed while function processing were saved as dependencies of our property. In case of changing their values, all dependant on them properties would be invalidated cascaded. And appealing to non relevant property would lead to its pre-actualization.

In this way the whole application at the execution stage represents a huge tree of dependencies, at the root of the tree is located the special property, which in case of invalidation would actualize itself automatically. And as any property always knows, whether something depends from it or not, then it is given a simple and reliable mechanism of controlling lifecycle of objects - they creates if the dependence appears and are destroyed when nothing depend from it. It's solved two fundamental problem: resources leaks and cache invalidation. 

Besides, the reactive architecture allows us to abstract code elegantly from asynchronous operations. If the function can't return value at once, it can throws the exception `$mol_atom_wait`, it is marked part of the tree of states as "waiting of results". When the result would be retrieved - it could be inserted into property directly and application would be reconstructed for the new state.

```typescript
module $ {
	export class $my_greeter {
		
		// Define memoized property with push support
		@ $mol_prop()
		greeting( ...diff : string[] ) : string {
			
			// Defered push value to property
			setTimeout( () => {
				this.greeting( void 0 , 'Hello!' )
			} , 1000 )
			
			// throw special error to notify about waiting
			throw new $mol_atom_wait( 'Wait!' )
		}
		
		// Define memoized property without push support
		@ $mol_prop()
		greetingLength() {
			// Using other properties in synchronous style
			return this.greeting().length
		}
		
	}
}
```

Details: [$mol_prop](prop), [$mol_atom](atom).

## Debugging
A special attention is payed while developing $mol to debugging possibilities and researching of code's working process. For example for handling exceptions we don't using (`try-catch-throw`),
 because it masks the true place where exceptions were thrown, it complicates debugging. 

For every DOM-element is formed a people friendly `id` automatically like `$mol_app_todomvc.root(0).taskRow(0).titler()`, which is valid javascript code, this one could be executed at a console, received a link to the component, whom the component is corresponds to. Unfolding the content of the component you'd see names and values its fields like:

```
$mol_app_todomvc
    DOMNode() : div#$mol_app_todomvc.root(0)
    task(1474385802391) : Object
    task(1474386443175) : Object
    taskRow(0) : $mol_app_todomvc_taskRow
    taskRow(1) : $mol_app_todomvc_taskRow
    taskRows() : Array[2]
```

The name of the field corresponds to calling the property, the content of the field would be available through. And thanks to naming classes and functions through underscoring you'd always get to know which class instance in front of you and could briefly find it at code by default searching by the substring.

# Modules

## Flow

* **[$mol_defer](defer)** - deferred but immediate execution
* **[$mol_atom](atom)** - reactive container
* **[$mol_log](log)** - logging

## Object model

* **[$mol_prop](prop)** - reactive property decorator
* **[$mol_object](object)** - components base class
* **[$mol_model](model)** - reactive model base class

## Functions

* **[$mol_const](const)** - const value returning function

## Collections

* **[$mol_range](range)** - lazy array
* **[$mol_set](set)** - [Set API](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set)
* **[$mol_dict](dict)** - [Map API](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map)
* **[$mol_maybe](maybe)** - [maybe monad](https://en.wikipedia.org/wiki/Monad_(functional_programming)#The_Maybe_monad)

## [State modules](state)

* **[$mol_state_arg](state/arg)** - arguments state (location/argv)
* **[$mol_state_local](state/local)** - persistent local state (localStorage)
* **[$mol_state_session](state/session)** - session temporary state (sessionStorage)
* **[$mol_state_history](state/history)** - browser history bound state
* **[$mol_state_stack](state/stack)** - state of current stack of execution

## Communication modules

* **[$mol_http_resource](http/resource)** - Reactive REST HTTP resource
* **[$mol_http_request](http/request)** - Reactive HTTP Request

## Simple components

* **[$mol_viewer](viewer)** - reactive view model base class with lazy error-proof renderer
* **[$mol_filler](filler)** - lorem ipsum
* **[$mol_svg](svg)** - svg base components

## Simple controls

* **[$mol_linker](linker)** - navigation link
* **[$mol_clicker](clicker)** - button
* **[$mol_checker](checker)** - check box
* **[$mol_switcher](switcher)** - radio buttons
* **[$mol_stringer](stringer)** - one string input control
* **[$mol_number](number)** - one number input control
* **[$mol_coder](coder)** - bar code scanner
* **[$mol_portioner](portioner)** - portion visualizer

## Layout components

* **[$mol_scroller](scroller)** - scroll pane with position saving
* **[$mol_tiler](tiler)** - items in row with balanced wrapping
* **[$mol_rower](rower)** - items in row with wrapping and padding between
* **[$mol_barer](barer)** - group of controls as own control
* **[$mol_lister](lister)** - vertical list of rows
* **[$mol_labeler](labeler)** - labeled content
* **[$mol_sectioner](sectioner)** - section with header
* **[$mol_stacker](stacker)** - horizontal stack of panels
* **[$mol_pager](pager)** - page with header, body and footer
* **[$mol_decker](decker)** - deck of panels with tab bar
* **[$mol_carder](carder)** - card whit content

## Complex components

* **[$mol_form](form)** - forms with validators
* **[$mol_demo](demo)** - demonstrates widget in various screens
* **[$mol_attacher](attacher)** - preview list and attach button
* **[$mol_coster](coster)** - prints currency values

## Data formats

* **[$mol_tree](tree)** - [tree format](https://github.com/nin-jin/tree.d) (`view.tree` language descripted at [$mol_viewer](viewer))

## Math

* **[$mol_graph](graph)** - graph algorithms
* **[$mol_unit](unit)** - typed number value
* **[$mol_merge_dict](merge/dict)** - merge two dictionaries to new one

## Resources

* **[$mol_logo](logo)** - $mol logotypes
* **[$mol_icon](icon)** - css styled icons
* **[$mol_skin](skin)** - theming

## Testing

* **[$mol_test](test)** - unit testing
* **[$mol_stub](stub)** - stub data generators

## API

* **[$mol_cordova](cordova)** - [Apache Cordova](https://cordova.apache.org) API
* **[$mol_exec](exec)** - synchronous execute of system command
* **[$mol_file](file)** - reactive file system wrapper
* **[$mol_window](window)** - reactive view port configuration

## Building

* **[$mol_build](build)** - MAM builder
* **[$mol_build_server](build/server)** - MAM developer server

# Cool stuff

* **[Commits visualization](http://ghv.artzub.com/#repo=mol&user=eigenmethod&climit=100000)**
* **[Sources visualization](http://veniversum.me/git-visualizer/?owner=eigenmethod&repo=mol)**
