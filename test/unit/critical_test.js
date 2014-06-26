/*
	======== A Handy Little Nodeunit Reference ========
	https://github.com/caolan/nodeunit

	Test methods:
		test.expect(numAssertions)
		test.done()
	Test assertions:
		test.ok(value, [message])
		test.equal(actual, expected, [message])
		test.notEqual(actual, expected, [message])
		test.deepEqual(actual, expected, [message])
		test.notDeepEqual(actual, expected, [message])
		test.strictEqual(actual, expected, [message])
		test.notStrictEqual(actual, expected, [message])
		test.throws(block, [error], [message])
		test.doesNotThrow(block, [error], [message])
		test.ifError(value)
*/

/*global require:true*/
/*global __dirname:true*/
(function( exports ){
	'use strict';

	var path = require( 'path' );
	var critical = require(path.join( "..", "..", "critical.js") );


	exports.findCritical = {
		setUp: function(done) {
			// setup here
			done();
		},
		tearDown: function( done ){
			done();
		},
		'no args': function(test) {
			test.expect(1);
			// tests here
			test.throws( function(){
				critical.findCritical();
			}, TypeError, "Should throw type error if there is no url" );
			test.done();
		},
		'url given but is not string': function( test ){
			test.expect(1);
			// tests here
			test.throws( function(){
				critical.findCritical(5);
			}, TypeError, "Should throw type error if there is no url" );
			test.done();
		},
		'url given': function( test ){
			test.expect(1);

			critical.findCritical( path.resolve( path.join( __dirname, '..', 'files', 'test-site.html' ) ), function( err, content ){
				if( err ){
					throw new Error( err );
				} else {
					test.equal( content, "h1{ font-size: 2em; }\np{ font-size: 1.5em; font-weight: bold; }\n", "Content should match" );
				}
				test.done();
			});

		}
	};
}(typeof exports === 'object' && exports || this));
