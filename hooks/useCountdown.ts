import { useEffect, useRef, useState } from 'react';

export const useCountdown = (date: string) => {
    // COUNTDOWN
    const [timerDays, setTimerDays] = useState(null);
    const [timerHours, setTimerHours] = useState(null);
    const [timerMinutes, setTimerMinutes] = useState(null);
    const [timerSeconds, setTimerSeconds] = useState(null);

    let interval = useRef();

    const startTimer = () => {
        const countdownDate = new Date(date).getTime();

        // @ts-ignore
        interval = setInterval(() => {
            const now = new Date().getTime();
            const distance = countdownDate - now;

            const days = Math.floor(distance / (1000 * 60 * 60 * 24));
            const hours = Math.floor(
                (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60),
            );
            const minutes = Math.floor(
                (distance % (1000 * 60 * 60)) / (1000 * 60),
            );
            const seconds = Math.floor((distance % (1000 * 60)) / 1000);

            if (distance < 0) {
                // Stop
                clearInterval(interval.current);
            } else {
                // Update
                // @ts-ignore
                setTimerDays(String(days).padStart(2, '0'));
                // @ts-ignore
                setTimerHours(String(hours).padStart(2, '0'));
                // @ts-ignore
                setTimerMinutes(String(minutes).padStart(2, '0'));
                // @ts-ignore
                setTimerSeconds(String(seconds).padStart(2, '0'));
            }
        }, 1000);
    };

    useEffect(() => {
        startTimer();
        return () => {
            // eslint-disable-next-line
            clearInterval(interval.current);
        };
    });
    // Logic
    return {
        days: timerDays,
        hours: timerHours,
        minutes: timerMinutes,
        seconds: timerSeconds,
    };
};
