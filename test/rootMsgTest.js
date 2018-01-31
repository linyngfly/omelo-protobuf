let protobuf = require('../lib/protobuf');
let util = require('../lib/util');
let should = require('should');
let tc = require('./rootMsgTC');
let fs = require('fs');
fs.writeFileSync('rootMSG.json', JSON.stringify(tc));

describe('msgEncoderTest', function(){
	let protos = protobuf.parse(require('./rootMsg.json'));
	// console.log(protos);

	protobuf.init({encoderProtos:protos, decoderProtos:protos});

	describe('encodeTest', function(){
		// console.log('%j', tc);

		for(let route in tc){
			let msg = tc[route];

			console.log('====================');
			console.log(route);
			let buffer = protobuf.encode(route, msg);

			console.log(msg);
			console.log(buffer.length);
			// console.log(buffer);

			let decodeMsg = protobuf.decode(route, buffer);

			console.log(decodeMsg);
			console.log('====================');

			util.equal(msg, decodeMsg).should.equal(true);
		}
	});
});