import { useEffect, useState } from "react"


const Countdown = () => {
    const [time, setTime] = useState(calculateTime())

    useEffect(() => {
        const timer = setTimeout(() => {
            setTime(calculateTime())
        }, 1000)
        return () => clearTimeout(timer)
    })

    function calculateTime() {
        const difference = +new Date('2025-09-15') - +new Date()
        let timeLeft = {}

        if (difference > 0) {
            timeLeft = {
                days: Math.floor(difference / (1000 * 60 * 60 * 24)),
                hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
                minutes: Math.floor((difference / 1000 / 60) % 60),
                seconds: Math.floor((difference / 1000) % 60)
            }
        }
        return timeLeft
    }

    const timerComponent = Object.keys(time).map((interval) => {
        if (!time[interval]) {
            return null
        }

        return (
            <span className="text-[16px] font-semibold text-slate-900">
                { time[interval] } { time[interval] > 1 ? interval : interval.substring(0, interval.length - 1) } { ' ' }
            </span>
        )
    })

    return (
        <div>
            { timerComponent.length ? timerComponent : <span className="text-[16px] font-semibold text-slate-900">Event Ended</span> }
        </div>
    )
}

export default Countdown