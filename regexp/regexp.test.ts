namespace $ {

	$mol_test({

		'escape' () {

			const escaped = $mol_regexp.escape( '.*+?^${}()|[]\\' )
			$mol_assert_like( escaped , '\\.\\*\\+\\?\\^\\$\\{\\}\\(\\)\\|\\[\\]\\\\' )

		},

		'repeat fixed'() {

			const year = $mol_regexp.digit.repeat( 4 , 4 )
			$mol_assert_equal( year.exec( '#2020#' )![0] , '2020' )

		},

		'repeat range'() {

			const year = $mol_regexp.digit.repeat( 2 , 4 )
			
			$mol_assert_equal( year.exec( '#2#' ) , null )
			$mol_assert_equal( year.exec( '#20#' )![0] , '20' )
			$mol_assert_equal( year.exec( '#2020#' )![0] , '2020' )
			$mol_assert_equal( year.exec( '#20201#' )![0] , '2020' )

		},

		'repeat from'() {

			const name = $mol_regexp.letter.repeat( 2 )

			$mol_assert_equal( name.exec( '##' ) , null )
			$mol_assert_equal( name.exec( '#a#' ) , null )
			$mol_assert_equal( name.exec( '#ab#' )![0] , 'ab' )
			$mol_assert_equal( name.exec( '#abc#' )![0] , 'abc' )

		},

		'from string'() {

			const regexp = $mol_regexp.from( '[\\d]' )
			
			$mol_assert_equal( regexp.source , '\\[\\\\d\\]' )
			$mol_assert_equal( regexp.flags , '' )

		},

		'from regexp'() {
			
			const regexp = $mol_regexp.from( /[\d]/i )
			
			$mol_assert_equal( regexp.source , '[\\d]' )
			$mol_assert_equal( regexp.flags , 'i' )

		},

		'sequence'() {

			const year = $mol_regexp.digit.repeat( 4 , 4 )
			const dash = '-'
			const month = $mol_regexp.digit.repeat( 2 , 2 )
			const day = $mol_regexp.digit.repeat( 2 , 2 )

			const date = $mol_regexp.from( [ year , dash , month , dash , day ] , 'i' )

			$mol_assert_like( date.exec( '2020-01-02' )![0] , '2020-01-02' )
			$mol_assert_like( date.flags , 'i' )

		},

		'only groups'() {

			const first = $mol_regexp.letter.repeat( 1 )
			const last = $mol_regexp.letter.repeat( 1 )

			const regexp = $mol_regexp.from({ first , space : ' ' , last })
			const found = regexp.parse( 'nin jin' )

			$mol_assert_equal( found!.first , 'nin' )
			$mol_assert_equal( found!.space , ' ' )
			$mol_assert_equal( found!.last , 'jin' )

		},

		'recursive only groups'() {

			const first = $mol_regexp.letter.repeat( 1 )
			const last = $mol_regexp.letter.repeat( 1 )
			const space = ' '

			const regexp = $mol_regexp.from({ first , suffix : { space , last } })
			const found = regexp.parse( 'nin jin' )

			$mol_assert_equal( found!.first , 'nin' )
			$mol_assert_equal( found!.suffix , ' jin' )
			$mol_assert_equal( found!.space , ' ' )
			$mol_assert_equal( found!.last , 'jin' )

		},

		'sequence with groups'() {

			const year = $mol_regexp.digit.repeat( 4 , 4 )
			const dash = '-'
			const month = $mol_regexp.digit.repeat( 2 , 2 )
			const day = $mol_regexp.digit.repeat( 2 , 2 )

			const regexp = $mol_regexp.from([ {year} , dash , {month} , dash , {day} ])
			const found = regexp.parse( '2020-01-02' )

			$mol_assert_equal( found!.year , '2020' )
			$mol_assert_equal( found!.month , '01' )
			$mol_assert_equal( found!.day , '02' )

		},

		'recursive sequence with groups'() {

			const year = /\d\d\d\d/
			const dash = /-/
			const month = /\d\d/
			const day = /\d\d/

			const regexp = $mol_regexp.from([ { date : [ {year} , dash , {month} ] } , dash , {day} ])
			const found = regexp.parse( '#2020-01-02#' )

			$mol_assert_equal( found!.date , '2020-01' )
			$mol_assert_equal( found!.year , '2020' )
			$mol_assert_equal( found!.month , '01' )
			$mol_assert_equal( found!.day , '02' )

		},

	})

}
