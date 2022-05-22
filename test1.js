(function() {
	'use strict';

	var JT = window.Utils.JustTest, suite;

	suite = JT.createSuite({ name: 'Suite object APIs' });

	suite.addTest({						//	options list described in API section below
		name: 'JustTest namespace created okay'
	}, function (pass, fail) {
		if ('your internal validation logic fails') fail(new Error('error notice'));
		if ('another fail') throw new Error('calling "fail" and throwing have the same effect');
		pass();
	});
	
	suite.run();
})();
