import { EggPlugin } from "egg";

const plugin: EggPlugin = {
  // static: true,
  // nunjucks: {
  //   enable: true,
  //   package: 'egg-view-nunjucks',
  // },
  logrotator: {
    enable: true,
    package: "egg-logrotator"
  },
  validate: {
    enable: true,
    package: "egg-validate"
  },
  io: {
    enable: true,
    package: "egg-socket.io"
  },
  redis: {
    enable: false,
    package: "egg-redis"
  }
};

export default plugin;
