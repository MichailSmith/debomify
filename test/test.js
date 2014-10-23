var assert = require('assert');
var sut = require('../index');

describe('debomifier', function () {
	it('should return through stream', function () {
		assert.equal('object', typeof sut());
	});
});