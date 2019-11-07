import { EggAppConfig, PowerPartial } from "egg";

export default () => {
  const config: PowerPartial<EggAppConfig> = {};

  config.cluster = {
    listen: {
      port: 7001,
      hostname: "127.0.0.1"
      // path: '/var/run/egg.sock',
    }
  };

  config.logger = {
    // level: "WARN"
  };

  return config;
};
