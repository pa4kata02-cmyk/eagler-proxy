const EaglerProxy = require("eaglerproxy");

const proxy = new EaglerProxy({
  port: process.env.PORT || 10000,
  target: {
    host: process.env.TARGET_HOST || "localhost",
    port: parseInt(process.env.TARGET_PORT || "25565", 10)
  }
});

proxy.init();
