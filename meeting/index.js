const express = require('express');
const { Eureka } = require('eureka-js-client');

const app = express();
const PORT = Number(process.env.PORT) || 8083;

app.get('/api/meetings/hello', (req, res) => {
  res.send(`Hello from Meeting on port ${PORT}`);
});

const client = new Eureka({
  instance: {
    app: 'MEETING',
    instanceId: `meeting:${PORT}`,
    hostName: 'localhost',
    ipAddr: '127.0.0.1',
    port: { '$': PORT, '@enabled': true },
    vipAddress: 'meeting',
    statusPageUrl: `http://localhost:${PORT}/api/meetings/hello`,
    dataCenterInfo: {
      '@class': 'com.netflix.appinfo.InstanceInfo$DefaultDataCenterInfo',
      name: 'MyOwn',
    },
  },
  eureka: { host: 'localhost', port: 8761, servicePath: '/eureka/apps/' },
});

app.listen(PORT, () => {
  console.log(`Meeting running on ${PORT}`);
  client.start((err) => console.log(err || 'Registered in Eureka'));
});

process.on('SIGINT', () => client.stop(() => process.exit()));