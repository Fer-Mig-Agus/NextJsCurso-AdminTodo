import WidgetItemPage from "@/components/WidgetItem";
import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";
import Image from "next/image";

export default async function DashboardPage() {
  const session = await getServerSession(authOptions);

  if (!session) {
    redirect("/api/auth/signin");
  }

  return (
    <>
      <div className="grid gap-6 sm:grid-cols-2 grid-cols-1">
        {/* TODO: src/components <WidgetItem /> */}
        <WidgetItemPage title="Usuario Conectado S-Side">
          <div className="flex flex-wrap justify-center items-center gap-2">
            <div>
              <h3>{session.user?.name}</h3>
              <span>{session.user?.email}</span>

            </div>
           
              <span>{session.user?.image}</span>
          </div>
        </WidgetItemPage>
        {/* TODO: Fin <WidgetItem /> */}
      </div>
    </>
  );
}
