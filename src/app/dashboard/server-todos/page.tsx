export const dynamic = 'force-dynamic';
export const revalidate = 0;

import prisma from "@/lib/prisma";
import { TodosGridPage } from "@/todos";
import { NewTodo } from "../../../todos/components/NewTodo";


export const metadata = {
  title: "Listado de tareas",
  description: "Listado de tareas",
};

export default async function ServerTodoPage() {
  const todos = await prisma.todo.findMany({ orderBy: { description: "asc" } });

  return (
    <div>
      <span className="text-3xl mb-10">Server Actions</span>
      <div className="w-full px-3 mx-5 mb-5">
        <NewTodo  />
      </div>
      <div>
        <TodosGridPage todos={todos}  />
      </div>
    </div>
  );
}
