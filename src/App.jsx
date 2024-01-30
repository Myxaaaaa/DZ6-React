import React, { useState, useEffect, lazy, Suspense } from "react"
import { createConnection } from "./chat"
import "./App.css"
const Skills = lazy(() => import("./components/skills"))
const Music = lazy(() => import("./components/music"))
const Films = lazy(() => import("./components/films"))
export default function App() {
    const [roomId, setRoomId] = useState("general")
    const [show, setShow] = useState(false)

    const renderComponent = () => {
        switch (roomId) {
            case "skills":
                return <Skills />
            case "music":
                return <Music/>
            case "films":
                return <Films/>
            default:
                return null
        }
    }

    return (
        <div className="choose">
            <label>
                <select value={roomId} onChange={(e) => setRoomId(e.target.value)}>
                    <option value="main">Выберите комнату</option>
                    <option value="skills">Что я изучаю</option>
                    <option value="music">Моя музыка</option>
                    <option value="films">Фильмы/сериалы</option>
                </select>
            </label>
            <button onClick={() => setShow(!show)}>
                {show ? "Закрыть чат" : "Открыть чат"}
            </button>
            {show && <hr />}
            {show && (
                <Suspense fallback={<div>Загрузка...</div>}>
                    {renderComponent()}
                </Suspense>
            )}
        </div>
    )
}
