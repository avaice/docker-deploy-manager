"use server";

import { spawnSync } from "child_process";

export const checkIsDockerInstalledAction = async () => {
  const result = spawnSync("docker", ["--version"]);

  if (result.error) {
    return false;
  }

  return true;
};
