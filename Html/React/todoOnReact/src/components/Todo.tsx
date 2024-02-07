import { AiOutlinePlusCircle } from "react-icons/ai";
import { useState } from "react"
import List from './List'

export default function Todo() {
  const [task, setTask] = useState<ITask[]>([])
  const [taskText, setTaskText] = useState<string>("")

  function getTask(e: React.MouseEvent<HTMLButtonElement>) {
    e.preventDefault()

    if (taskText == "") return;

    setTask((prevstate) => [
      ...prevstate,
      { id: task.length, isCompleted: false, name: taskText },
    ]);

    setTaskText("");
  }

  return (
    <main className="w-1/2 mx-auto">
      <form
        className="-mt-8 flex flex-row">
        <input
          className=" text-gray-400 p-4 w-full rounded-lg flex-1 bg-[var(--gray-500)] border border-black border-solid"
          type="text"
          onChange={(e) => setTaskText(e.target.value)}
          value={taskText}
          placeholder="Adicione uma nova tarefa"
        />
        <button
          onClick={(e) => getTask(e)}
          className="mx-2 p-4 bg-[var(--blue-dark)] rounded-lg text-white flex items-center justify-center gap-2">
          Criar <AiOutlinePlusCircle size={20} />
        </button>
      </form>
      <List tasks={task} />
    </main>
  )
}
