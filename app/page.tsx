import { redirect } from "next/navigation";

import { checkIsDockerInstalledAction } from "./_actions/checkIsDockerInstalledAction";

export default async function Home() {
  if ((await checkIsDockerInstalledAction()) !== true) {
    redirect("/docker-isnt-installed");
  }

  return (
    <div className="mx-auto w-full max-w-[800px] p-4">
      <header>
        <h1 className="text-4xl">Docker Deploy Manager</h1>
        <p>dockerのアプリデプロイを自動化</p>
      </header>

      <div className="flex flex-col gap-2 py-4"></div>
    </div>
  );
}
