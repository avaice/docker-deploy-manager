import { redirect } from "next/navigation";

import { checkIsDockerInstalledAction } from "../_actions/checkIsDockerInstalledAction";

export default async function DockerIsntInstalled() {
  if ((await checkIsDockerInstalledAction()) === true) {
    redirect("/");
  }

  return (
    <div className="mx-auto w-full max-w-[800px] p-4">
      <header>
        <h1 className="text-4xl">Dockerが読み込めませんでした</h1>
      </header>

      <div className="flex flex-col gap-2 py-4">
        <p>
          Dockerが読み込めませんでした。インストールされていないか、起動していない可能性があります。
        </p>
      </div>
    </div>
  );
}
