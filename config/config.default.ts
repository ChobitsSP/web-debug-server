import { EggAppConfig, EggAppInfo, PowerPartial } from "egg";
import * as path from "path";

export default (appInfo: EggAppInfo) => {
  const config = {} as PowerPartial<EggAppConfig>;

  // override config from framework / plugin
  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + "_1567582038734_5170";

  // add your egg config in here
  config.middleware = [];

  // add your special config in here
  const bizConfig = {
    sourceUrl: `https://github.com/eggjs/examples/tree/master/${appInfo.name}`
  };

  config.io = {
    init: {}, // passed to engine.io
    // // cluster 模式下，通过 redis 实现数据共享
    // redis: {
    //   host: "127.0.0.1",
    //   port: 6379
    // },
    namespace: {
      "/": {
        connectionMiddleware: [],
        packetMiddleware: [] // 针对消息的处理暂时不实现
      }
    }
  };

  config.logger = {
    dir: path.join(appInfo.baseDir, "logs")
  };

  // if any files need rotate by file size, config here
  config.logrotator = {
    filesRotateByHour: [], // list of files that will be rotated by hour
    hourDelimiter: "-", // rotate the file by hour use specified delimiter
    filesRotateBySize: [], // list of files that will be rotated by size
    maxFileSize: 50 * 1024 * 1024, // Max file size to judge if any file need rotate
    maxFiles: 10, // pieces rotate by size
    rotateDuration: 60000, // time interval to judge if any file need rotate
    maxDays: 3 // keep max days log files, default is `31`. Set `0` to keep all logs
  };

  // the return config will combines to EggAppConfig
  return {
    ...config,
    ...bizConfig
  };
};
