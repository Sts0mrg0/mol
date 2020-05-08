namespace $ { export class $mol_plot_graph extends $mol_svg_group {

	/**
	 *  ```
	 *  series_x /number
	 *  ```
	 **/
	series_x() {
		return [] as readonly ( number )[]
	}

	/**
	 *  ```
	 *  series_y /number
	 *  ```
	 **/
	series_y() {
		return [] as readonly ( number )[]
	}

	/**
	 *  ```
	 *  attr *
	 *  	^
	 *  	mol_plot_graph_type <= type
	 *  ```
	 **/
	attr() {
		return ({
			...super.attr() ,
			"mol_plot_graph_type" :  this.type() ,
		})
	}

	/**
	 *  ```
	 *  type \solid
	 *  ```
	 **/
	type() {
		return "solid"
	}

	/**
	 *  ```
	 *  style *
	 *  	^
	 *  	color <= color
	 *  ```
	 **/
	style() {
		return ({
			...super.style() ,
			"color" :  this.color() ,
		})
	}

	/**
	 *  ```
	 *  color \
	 *  ```
	 **/
	color() {
		return ""
	}

	/**
	 *  ```
	 *  viewport $mol_vector_2d /
	 *  	<= viewport_x
	 *  	<= viewport_y
	 *  ```
	 **/
	@ $mol_mem
	viewport() {
		return (( obj )=>{
			return obj
		})( new this.$.$mol_vector_2d( this.viewport_x() , this.viewport_y() ) )
	}

	/**
	 *  ```
	 *  viewport_x $mol_vector_range /
	 *  	Infinity
	 *  	-Infinity
	 *  ```
	 **/
	@ $mol_mem
	viewport_x() {
		return (( obj )=>{
			return obj
		})( new this.$.$mol_vector_range( Infinity , -Infinity ) )
	}

	/**
	 *  ```
	 *  viewport_y $mol_vector_range /
	 *  	Infinity
	 *  	-Infinity
	 *  ```
	 **/
	@ $mol_mem
	viewport_y() {
		return (( obj )=>{
			return obj
		})( new this.$.$mol_vector_range( Infinity , -Infinity ) )
	}

	/**
	 *  ```
	 *  shift /number
	 *  	0
	 *  	0
	 *  ```
	 **/
	shift() {
		return [0 , 0] as readonly ( number )[]
	}

	/**
	 *  ```
	 *  scale /number
	 *  	1
	 *  	1
	 *  ```
	 **/
	scale() {
		return [1 , 1] as readonly ( number )[]
	}

	/**
	 *  ```
	 *  cursor_position $mol_vector_2d /
	 *  	NaN
	 *  	NaN
	 *  ```
	 **/
	@ $mol_mem
	cursor_position() {
		return (( obj )=>{
			return obj
		})( new this.$.$mol_vector_2d( NaN , NaN ) )
	}

	/**
	 *  ```
	 *  dimensions_pane $mol_vector_2d /
	 *  	<= dimensions_pane_x
	 *  	<= dimensions_pane_y
	 *  ```
	 **/
	@ $mol_mem
	dimensions_pane() {
		return (( obj )=>{
			return obj
		})( new this.$.$mol_vector_2d( this.dimensions_pane_x() , this.dimensions_pane_y() ) )
	}

	/**
	 *  ```
	 *  dimensions_pane_x $mol_vector_range /
	 *  	Infinity
	 *  	-Infinity
	 *  ```
	 **/
	@ $mol_mem
	dimensions_pane_x() {
		return (( obj )=>{
			return obj
		})( new this.$.$mol_vector_range( Infinity , -Infinity ) )
	}

	/**
	 *  ```
	 *  dimensions_pane_y $mol_vector_range /
	 *  	Infinity
	 *  	-Infinity
	 *  ```
	 **/
	@ $mol_mem
	dimensions_pane_y() {
		return (( obj )=>{
			return obj
		})( new this.$.$mol_vector_range( Infinity , -Infinity ) )
	}

	/**
	 *  ```
	 *  dimensions $mol_vector_2d /
	 *  	<= dimensions_x
	 *  	<= dimensions_y
	 *  ```
	 **/
	@ $mol_mem
	dimensions() {
		return (( obj )=>{
			return obj
		})( new this.$.$mol_vector_2d( this.dimensions_x() , this.dimensions_y() ) )
	}

	/**
	 *  ```
	 *  dimensions_x $mol_vector_range /
	 *  	Infinity
	 *  	-Infinity
	 *  ```
	 **/
	@ $mol_mem
	dimensions_x() {
		return (( obj )=>{
			return obj
		})( new this.$.$mol_vector_range( Infinity , -Infinity ) )
	}

	/**
	 *  ```
	 *  dimensions_y $mol_vector_range /
	 *  	Infinity
	 *  	-Infinity
	 *  ```
	 **/
	@ $mol_mem
	dimensions_y() {
		return (( obj )=>{
			return obj
		})( new this.$.$mol_vector_range( Infinity , -Infinity ) )
	}

	/**
	 *  ```
	 *  size_real $mol_vector_2d /
	 *  	0
	 *  	0
	 *  ```
	 **/
	@ $mol_mem
	size_real() {
		return (( obj )=>{
			return obj
		})( new this.$.$mol_vector_2d( 0 , 0 ) )
	}

	/**
	 *  ```
	 *  gap $mol_vector_2d /
	 *  	<= gap_x
	 *  	<= gap_y
	 *  ```
	 **/
	@ $mol_mem
	gap() {
		return (( obj )=>{
			return obj
		})( new this.$.$mol_vector_2d( this.gap_x() , this.gap_y() ) )
	}

	/**
	 *  ```
	 *  gap_x $mol_vector_range /
	 *  	0
	 *  	0
	 *  ```
	 **/
	@ $mol_mem
	gap_x() {
		return (( obj )=>{
			return obj
		})( new this.$.$mol_vector_range( 0 , 0 ) )
	}

	/**
	 *  ```
	 *  gap_y $mol_vector_range /
	 *  	0
	 *  	0
	 *  ```
	 **/
	@ $mol_mem
	gap_y() {
		return (( obj )=>{
			return obj
		})( new this.$.$mol_vector_range( 0 , 0 ) )
	}

	/**
	 *  ```
	 *  indexes /number
	 *  ```
	 **/
	indexes() {
		return [] as readonly ( number )[]
	}

	/**
	 *  ```
	 *  points /readonly(number)[]
	 *  ```
	 **/
	points() {
		return [] as readonly ( readonly(number)[] )[]
	}

	/**
	 *  ```
	 *  front /$mol_svg
	 *  ```
	 **/
	front() {
		return [] as readonly ( $mol_svg )[]
	}

	/**
	 *  ```
	 *  back /$mol_svg
	 *  ```
	 **/
	back() {
		return [] as readonly ( $mol_svg )[]
	}

	/**
	 *  ```
	 *  hue NaN
	 *  ```
	 **/
	hue() {
		return NaN
	}

	/**
	 *  ```
	 *  Sample null
	 *  ```
	 **/
	Sample() {
		return null as any
	}

} }
namespace $ { export class $mol_plot_graph_sample extends $mol_view {

	/**
	 *  ```
	 *  attr *
	 *  	^
	 *  	mol_plot_graph_type <= type
	 *  ```
	 **/
	attr() {
		return ({
			...super.attr() ,
			"mol_plot_graph_type" :  this.type() ,
		})
	}

	/**
	 *  ```
	 *  type \solid
	 *  ```
	 **/
	type() {
		return "solid"
	}

	/**
	 *  ```
	 *  style *
	 *  	^
	 *  	color <= color
	 *  ```
	 **/
	style() {
		return ({
			...super.style() ,
			"color" :  this.color() ,
		})
	}

	/**
	 *  ```
	 *  color \black
	 *  ```
	 **/
	color() {
		return "black"
	}

} }
