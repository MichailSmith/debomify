var through = require('through');
var stripBom = require('strip-bom');

module.exports = function(file){
	var data = '';
	return through(write, end);
	function write (buf) {
		data+=buf
	}

	function end () {
		this.queue(stripBom(data));
		this.queue(null);
	}
}
