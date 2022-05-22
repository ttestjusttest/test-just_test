(function() {
	'use strict';

	var JT = window.Utils.JustTest, suite;
	
	suite = JT.createSuite();

	suite.addTest(function (pass, fail) {		//	can skip the options, defaults will be used
		...
	});
	
	suite.run();
})();
