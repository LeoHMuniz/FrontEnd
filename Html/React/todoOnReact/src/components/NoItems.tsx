import React from 'react'
import { PiClipboardTextLight } from "react-icons/pi";

export default function NoItems() {
    return (
        <div className="flex flex-col items-center justify-center align-middle text-gray-400">
            <PiClipboardTextLight 
            className="mt-20 align-middle"
            size={80} />
            <h2>Não há tarefas criadas</h2>
        </div>
    )
}
