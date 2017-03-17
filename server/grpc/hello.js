// GRPC
const grpc = require('grpc');
const proto = grpc.load(__dirname + '/pb/hello.proto').hello;
const client = new proto.HelloService('localhost:8085', grpc.credentials.createInsecure());
const grpcHello = name => new Promise((resolve, reject) => {
  client.sayHello({ Name: name }, (err, response) => {
    if (err) {
      reject(err);
    }
    resolve(response);
  });
});
