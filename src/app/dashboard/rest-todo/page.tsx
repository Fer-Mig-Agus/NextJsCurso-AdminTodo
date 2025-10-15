export const dynamic = "force-dynamic";
export const revalidate = 0;
import prisma from "@/lib/prisma";
import { TodosGridPage } from "@/todos";
import { NewTodo } from "../../../todos/components/NewTodo";
import { getUserSessionServer } from "@/auth/actions/auth-actions";
import { redirect } from "next/navigation";

export const metadata = {
  title: "Listado de tareas",
  description: "Listado de tareas",
};

export default async function RestTodoPage() {
  const user = await getUserSessionServer();

  if (!user) redirect("/api/auth/signin");

  const todos = await prisma.todo.findMany({
    where: { userId: user.id },
    orderBy: { description: "asc" },
  });

  return (
    <div>
      <div className="w-full px-3 mx-5 mb-5">
        <NewTodo />
      </div>
      <div>
        <TodosGridPage todos={todos} />
      </div>
    </div>
  );
}
