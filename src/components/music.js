import React, { useState, useRef, useEffect } from 'react'
import './styles/music.css'
import { FaPlay, FaPause, FaStepBackward, FaStepForward } from 'react-icons/fa'

const Music = () => {
    const [currentTrackIndex, setCurrentTrackIndex] = useState(0)
    const [isPlaying, setIsPlaying] = useState(false)
    const [duration, setDuration] = useState(0)
    const [currentTime, setCurrentTime] = useState(0)
    const audioRef = useRef(null)

    const musicData = [
        {
            id: 1,
            title: "Kali Uchis - Telepatia",
            img: "https://i.ytimg.com/vi/Dwzk-XZxZ4k/maxresdefault.jpg",
            url: "/music/1.mp3",
        },
        {
            id: 2,
            title: "Oberon.MSY - Жалгыз Океан",
            img: "https://is1-ssl.mzstatic.com/image/thumb/Music116/v4/3a/b4/75/3ab4758a-4187-6bd6-42e2-3747f7b481a7/cover.jpg/600x600bf-60.jpg",
            url: "/music/2.mp3"
        },
        {
            id: 3,
            title: "BlackDear - idfc(Tarro remix)",
            img: "https://i1.sndcdn.com/artworks-000189779037-neunc5-t500x500.jpg",
            url: "/music/3.mp3"
        },
        {
            id: 4,
            title: "Скриптонит - Мистер718",
            img: "https://images.genius.com/f2c0421ef6dbcd06eb568d9937b40eac.1000x1000x1.png",
            url: "/music/4.mp3"
        },
        {
            id: 5,
            title: "Kali Uchis - Moonlight",
            img: "https://upload.wikimedia.org/wikipedia/en/thumb/0/0b/Kali_Uchis_Moonlight.png/220px-Kali_Uchis_Moonlight.png",
            url: "/music/5.mp3"
        }
    ]

    const playPauseMusic = () => {
        setIsPlaying(!isPlaying)
        if (isPlaying) {
            audioRef.current.pause()
        } else {
            audioRef.current.play()
        }
    }

    const skipTrack = (direction) => {
        setIsPlaying(false)
        if (direction === 'forward') {
            setCurrentTrackIndex((prevIndex) => (prevIndex + 1) % musicData.length)
        } else if (direction === 'backward') {
            setCurrentTrackIndex((prevIndex) => (prevIndex - 1 + musicData.length) % musicData.length)
        }
    }

    const updateTime = () => {
        setCurrentTime(audioRef.current.currentTime)
    }

    useEffect(() => {
        const updateDuration = () => {
            setDuration(audioRef.current.duration)
        }

        const handleEnded = () => {
            setCurrentTime(0)
            setCurrentTrackIndex((prevIndex) => (prevIndex + 1) % musicData.length)
        }

        return () => {
            if (audioRef.current) {
                audioRef.current.removeEventListener('timeupdate', updateTime);
            }
        }
    }, [currentTrackIndex])


    useEffect(() => {
        if (isPlaying) {
            audioRef.current.play()
        } else {
            audioRef.current.pause()
        }
    }, [isPlaying])

    return (
        <div>
            <h1>Топ моего плейлиста:</h1>
            <div className="music">
                <div className="music-container">
                    <img className="album-cover" src={musicData[currentTrackIndex].img} alt={musicData[currentTrackIndex].title} />
                    <div className="track-info">
                        <h2>{musicData[currentTrackIndex].title}</h2>
                        <div className="progress-container">
                            <progress value={currentTime} max={duration}></progress>
                        </div>
                        <div className="controls">
                            <button className="icon-button" onClick={() => skipTrack('backward')}>
                                <FaStepBackward />
                            </button>
                            <button className="icon-button" onClick={playPauseMusic}>
                                {isPlaying ? <FaPause /> : <FaPlay />}
                            </button>
                            <button className="icon-button" onClick={() => skipTrack('forward')}>
                                <FaStepForward />
                            </button>
                        </div>
                        <audio ref={audioRef} src={musicData[currentTrackIndex].url}></audio>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Music


