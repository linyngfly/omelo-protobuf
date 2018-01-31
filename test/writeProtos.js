let protobuf = require('../lib/protobuf');
let fs = require('fs');

let protoFile = "./rootMsg.json";
let protoTarget = "./rootProtos.json";
let msgFile = "./rootMsgTC";
let msgTarget = "./rootMsg.json";

let protos = protobuf.parse(require(protoFile));

console.log(protos);
fs.writeFile(protoTarget, JSON.stringify(protos, null ,2));

fs.writeFile(msgTarget, JSON.stringify(require(msgFile), null ,2));

