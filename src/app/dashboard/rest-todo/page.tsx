import prisma from "@/lib/prisma";
import { TodosGridPage } from "@/todos";
import { NewTodo } from "../../../todos/components/NewTodo";


export const metadata = {
  title: "Listado de tareas",
  description: "Listado de tareas",
};

export default async function RestTodoPage() {
  const todos = await prisma.todo.findMany({ orderBy: { description: "asc" } });

  return (
    <div>
      <div className="w-full px-3 mx-5 mb-5">
        <NewTodo  />
      </div>
      <div>
        <TodosGridPage todos={todos}  />
      </div>
    </div>
  );
}
