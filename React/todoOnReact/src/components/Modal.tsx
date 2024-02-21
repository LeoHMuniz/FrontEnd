interface Modal {
    title: string;
    message: string;
    isDeleting: () => void;
    setModalOff: () => void;
}

export default function Modal({ title, message, isDeleting, setModalOff }: Modal) {

    function result(bool: boolean) {
        if (bool) {
            isDeleting()
            setModalOff()
        }
        setModalOff();
    }

    return (
        <div className="absolute align-middle top-0 left-0 flex justify-center backdrop-blur h-screen w-full z-10">
            <div className='relative align-middle flex flex-col justify-between w-[420px] m-auto bg-[var(--gray-600)] border border-[var(--gray-400)] border-solid px-8 py-6 rounded-xl z-20 shadow-[2px_4px_8px_0_#0000007c]'>
                <h1 className='text-3xl top-0 font-extrabold'>{title}</h1>
                <p className="mt-2 text-lg">{message}</p>
                <div className="flex justify-end gap-4 w-full ml-auto mr-4 mt-8">
                    <button
                        className="transition-all  px-4 py-1 font-bold rounded hover:underline hover:text-[var(--purple)]"
                        onClick={() => setModalOff()}>Cancelar</button>
                    <button
                        className="transition-all px-4 py-1 bg-[var(--purple)] font-bold rounded hover:brightness-125"
                        onClick={() => result(true)}>Confirmar</button>
                </div>
            </div>
        </div>
    )
}
