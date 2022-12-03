import { redirect } from "react-router-dom";
import { ValueOf } from "../types";

export const Path = {
  ROOT: "/",
  LESSON: "/lesson",
  SELECTED_LESSON: "/lesson/selected",
};

export const redirectTo = (path: ValueOf<typeof Path>) => {
  redirect(path);
};
