import { Controller } from "egg";

export default class HomeController extends Controller {
  public async index() {
    const { ctx } = this;
    ctx.body = await ctx.service.test.sayHi("egg");
  }
  public async exchange() {
    const { ctx, app } = this;
    const data = ctx.request.body;
    const nsp = app.io.of("/");

    try {
      nsp.emit("global", data);
    } catch (error) {
      app.logger.error(error);
    }

    ctx.body = { code: 0 };
  }
}
