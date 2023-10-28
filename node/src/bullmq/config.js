const IORedis = require("ioredis");

const redisConnection = new IORedis({
  port: 6379,
  host: "redis",
});

const DEFAULT_REMOVE_CONFIG = {
  removeOnComplete: {
    age: 3600,
  },
  removeOnFail: {
    age: 24 * 3600,
  },
};
module.exports = { DEFAULT_REMOVE_CONFIG, redisConnection };
