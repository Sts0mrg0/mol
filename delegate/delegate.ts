namespace $ {

	/**
	 * Proxy that delegates all to lazy returned target.
	 * 
	 * 	$mol_delegate( Array.prototype , ()=> fetch_array() )
	 */
    export function $mol_delegate< Value extends object >(
		proto : Value ,
		target : ()=> Value ,
	) {

		return new Proxy( proto , {

			get: ( _ , field )=> Reflect.get( target() , field ),
			has: ( _ , field )=> Reflect.has( target(), field ),
			set: ( _ , field , value )=> Reflect.set( target() , field , value ),
			
			getOwnPropertyDescriptor: ( _ , field )=> Reflect.getOwnPropertyDescriptor( target() , field ),
			ownKeys: ()=> Reflect.ownKeys( target() ),
			
			getPrototypeOf: ()=> Reflect.getPrototypeOf( target() ),
			setPrototypeOf: ( _ , donor )=> Reflect.setPrototypeOf( target() , donor ),
			
			isExtensible: ()=> Reflect.isExtensible( target() ),
			preventExtensions: ()=> Reflect.preventExtensions( target() ),
			
			apply: ( _ , self , args )=> Reflect.apply( target() as Function , self , args ),
			construct: ( _ , args , retarget )=> Reflect.construct( target() as Function , args , retarget ),
			
			defineProperty: ( _ , field , descr )=> Reflect.defineProperty( target() , field , descr ),
			deleteProperty: ( _ , field )=> Reflect.deleteProperty( target() , field ),

		} )

	}

}