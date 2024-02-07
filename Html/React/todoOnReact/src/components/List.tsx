import { useEffect, useState } from "react"
import { FaRegTrashAlt } from "react-icons/fa"
import Modal from "./Modal"
import NoItems from "./NoItems"

interface ITaskList {
    tasks: ITask[]
}

export default function List({ tasks }: ITaskList) {

    const [check, setCheck] = useState(false)
    const [taskSize, setTaskSize] = useState(0)
    const [deletedTask, setDeletedTask] = useState<ITask[]>()
    const [taskToBeDeleted, setTaskToBeDeleted] = useState<number>(-1)
    const [modal, setModal] = useState<boolean>(false)

    function handleCheck(task: ITask) {
        setCheck(!check)
        task.isCompleted = !task.isCompleted
        handleCounting()
    }

    function handleCounting() {
        return tasks.reduce((acc: number, cur: ITask) => {
            const completedTask = cur.isCompleted ? acc + 1 : acc;

            return completedTask;
        }, 0);
    }


    function handleDelete(index: number) {
        const updatedTasks = tasks.splice(index, 1)
        setDeletedTask(updatedTasks)
        handleCounting()
    }

    useEffect(() => {
        setTaskSize(tasks.length)


    }, [deletedTask, tasks])

    function showModal(index: number) {
        setTaskToBeDeleted(index)
        setModal(true)

    }


    return (


        <main className="w-full mt-24 text-gray-300">
            {modal && (
                <Modal
                    title="Aviso"
                    message="Você realmente deseja excluir esta tarefa?"
                    isDeleting={() => handleDelete(taskToBeDeleted)}
                    setModalOff={() => setModal(!modal)}
                />
            )}
            <div className="justify-between flex flex-row mb-8 [&_h2]:text-lg [&_span]:text-base">
                <h2 className="text-[var(--blue)] font-bold flex flex-row">
                    Tarefas criadas
                    <span className="text-gray-50 bg-[var(--gray-400)] ml-2 rounded-md px-2 py-0 my-0 flex items-center justify-center">
                        {`${tasks.length}`}
                    </span>
                </h2>
                <h2 className="flex flex-row text-[var(--purple)] font-bold">
                    Concluídas <span className="flex items-center justify-center ml-2 rounded-md px-2 py-0 text-gray-50 bg-[var(--gray-400)] font-bold">{handleCounting()} de {taskSize}</span>
                </h2>
            </div>
            {
                tasks.length <= 0 ?
                    <NoItems />
                    : ""
            }
            <ul>
                {
                    tasks.map((task: ITask, index: number) => {
                        return (
                            <li
                                key={index}
                                id={`li${task.id}`}
                                className="bg-[var(--gray-500)] p-4 rounded-lg my-4 flex flex-row justify-between">
                                <div className="flex h-6">
                                    <input
                                        className={`border-none h-0 m-0 overflow-hidden p-0 absolute w-0`}
                                        type="checkbox"
                                        id={`task${task.id}`}
                                        readOnly
                                        checked={task.isCompleted}

                                    />
                                    <label
                                        htmlFor={`task${task.id}`}
                                        onClick={() => handleCheck(task)}
                                        className={`relative pl-6 inline-block cursor-pointer before:content-[''] before:inline-block  before:align-middle before:ease-linear before:h-5 before:w-5 before:top-[0.15rem] before:bg-transparent before:mr-2 before:border-2 before:border-solid  before:border-[var(--blue)] before:shadow-sm before:transition-all before:absolute before:rounded-2xl before:left-0 after:content-[var(--check-sign)] after:absolute after:top-[0] after:left-[0.6rem] after:-translate-x-1/2 after:translate-y-0 after:text-white after:text-base after:opacity-0 after:transition-all after:ease-linear hover:before:bg-[var(--gray-400)] ${task.isCompleted ? `text-[var(--gray-300)] before:bg-[var(--purple)] hover:before:bg-[var(--purple)] after:opacity-100` : ``}`}>
                                        <span className={`transition-all ml-2 ${task.isCompleted ? `line-through` : ``}`}>
                                            {task.name}
                                        </span>
                                    </label>
                                </div>

                                <button
                                    onClick={() => showModal(tasks.indexOf(task))}
                                    className="hover:text-red-500 transition-all ease-in-out"><FaRegTrashAlt /></button>
                            </li>
                        )
                    })
                }
            </ul>
        </main>
    );
}
