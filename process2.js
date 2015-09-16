var bus = require('servicebus').bus({
  url: 'amqp://localhost'
});

bus.subscribe('broadcast', function (msg) {
  console.log(msg);
  if(msg.command === 'heartbeat') {
    bus.send('process.manager', {
      id: 'process2',
      status: 'online'
    });
  }
});
