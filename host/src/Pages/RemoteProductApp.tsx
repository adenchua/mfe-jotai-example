import { lazy } from "react";

const RemoteProductApp = lazy(
  // @ts-expect-error import remote app
  async () => import("remote/remote-1"),
);

export default RemoteProductApp;
