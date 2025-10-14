"use client";
import { Todo } from "@/generated/prisma/client";
import { startTransition, useOptimistic } from "react";

import { IoCheckboxOutline, IoSquareOutline } from "react-icons/io5";
import { boolean } from "yup";

interface Props {
  todo: Todo;
  toggleTodo: (id: string, complete: boolean) => Promise<Todo | void>;
}

export function TodosItemsPage({ todo, toggleTodo }: Props) {
  const [todoOptimistic, toggleTodoOptimistic] = useOptimistic(
    todo,
    (state, newCompleteValue: boolean) => ({
      ...state,
      complete: newCompleteValue,
    })
  );

  const onToggleTodo = async () => {
    try {
      startTransition(()=>toggleTodoOptimistic(!todoOptimistic.complete))
      //toggleTodoOptimistic(!todoOptimistic.complete);
      await toggleTodo(todoOptimistic.id, !todoOptimistic.complete);
    } catch (error) {
      startTransition(()=>toggleTodoOptimistic(!todoOptimistic.complete))
    }
  };

  return (
    // <div className={todo.complete ? styles.todoDone : styles.tdoPending}>
    <div
      className={`${
        todoOptimistic.complete
          ? "line-through bg-blue-50 rounded-lg shadow-sm p-5 border-dashed border border-blue-500 flex flex-col sm:flex-row justify-between items-center gap-2 sm:gap-0"
          : "bg-red-50 rounded-lg shadow-sm p-5 border-dashed border border-red-500 flex flex-col sm:flex-row justify-between items-center gap-2 sm:gap-0"
      }`}
    >
      <div className="flex flex-col sm:flex-row justify-start items-center gap-4">
        <div
//          onClick={() =>toggleTodo(todoOptimistic.id, !todoOptimistic.complete)}
          onClick={onToggleTodo}

          className={`
            flex p-2 rounded-md cursor-pointer hover:bg-opacity-60 ${
              todoOptimistic.complete ? "bg-blue-1000" : "bg-red-100"
            }`}
        >
          {todoOptimistic.complete ? (
            <IoCheckboxOutline size={30} />
          ) : (
            <IoSquareOutline size={30} />
          )}
        </div>

        <div className="text-center sm:text-left">{todo.description}</div>
      </div>
    </div>
  );
}
