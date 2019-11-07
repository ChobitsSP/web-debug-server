import { Controller } from "egg";

export default class HomeController extends Controller {
  public async index() {
    const { ctx } = this;
    ctx.body = await ctx.service.test.sayHi("egg");
  }
  public async exchange() {
    const { ctx, app } = this;
    const body = ctx.request.body;
    const nsp = app.io.of("/");

    ctx.validate(
      {
        id: "string"
      },
      body
    );

    try {
      nsp.emit(body.id, body.data);
    } catch (error) {
      app.logger.error(error);
    }

    ctx.body = { code: 0 };
  }
}
