import "egg";
import { Socket } from "socket.io";

declare module "egg" {
  interface Application {
    io: any;
    redis: any;
  }

  interface Context {
    socket: Socket;
  }
}
