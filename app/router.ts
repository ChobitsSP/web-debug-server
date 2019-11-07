import { Application } from "egg";

export default (app: Application) => {
  const { router, controller, io } = app;

  router.get("/", controller.home.index);
  router.post("/api/log/send", controller.home.exchange);

  // socket.io
  io.of("/").route("exchange", io.controller.nsp.exchange);
};
