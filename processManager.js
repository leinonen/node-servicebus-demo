var bus = require('servicebus').bus({
  url: 'amqp://localhost'
});

bus.listen('process.manager', function(msg) {
  /*console.log(
    msg.data.id +
    ' is status ' +
    msg.data.status
  );*/
  console.log(msg);
});

setInterval(function() {
  console.log('broadcasting heartbeat');

  bus.publish('broadcast', {
    command: 'heartbeat'
  });
}, 1000);
