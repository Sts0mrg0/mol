namespace $.$$ {

	const { per , rem , px } = $mol_style_unit

	$mol_style_define( $mol_scroll , {

		display: 'flex',
		overflow: 'auto',
		flex: {
			direction: 'column',
			grow: 1,
			shrink: 1,
			basis: 0,
		},
		outline: 'none',
		alignSelf: 'stretch',
		boxSizing: 'border-box',
		willChange: 'scroll-position',
		maxHeight: per(100),
		maxWidth: per(100),
		webkitOverflowScrolling: 'touch',
		contain: 'content',

		'>': {
			$mol_view: {
				transform: 'translateZ(0)', // enforce gpu scroll in all agents
			},
		},

		scrollbar: {
			color: [ $mol_theme.line , 'transparent' ],
		},
	
		'::-webkit-scrollbar': {
			width: rem(.5),
			height: rem(.5),
		},
		
		'::-webkit-scrollbar-corner': {
			background: {
				color: $mol_theme.line,
			},
		},

		'::-webkit-scrollbar-track': {
			background: {
				color: 'transparent',
			},
		},

		'::-webkit-scrollbar-thumb': {
			background: {
				color: $mol_theme.line,
			},
		},

		'@media' : {
			'print' : {
				overflow: 'visible',
			},
		},

	})

}
