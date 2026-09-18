import { useEffect, useRef, useState } from 'react';
import { Slider } from '@mui/material';

type Props = {
    value: [number, number];
    onChange: (value: [number, number]) => void;
};

export function RatingRangeFilter({ value, onChange }: Props) {
    const [localValue, setLocalValue] = useState(value);
    const [prevValue, setPrevValue] = useState(value);
    const timeoutRef = useRef<ReturnType<typeof setTimeout> | undefined>(
        undefined
    );

    // Всегда актуальный onChange для колбэка внутри setTimeout — иначе
    // отложенный вызов унёс бы с собой устаревшее замыкание (и вместе с ним
    // устаревшие соседние фильтры типа жанров, которые могли поменяться,
    // пока тикал debounce)
    const onChangeRef = useRef(onChange);
    useEffect(() => {
        onChangeRef.current = onChange;
    });

    if (value[0] !== prevValue[0] || value[1] !== prevValue[1]) {
        setPrevValue(value);
        setLocalValue(value);
    }

    useEffect(() => {
        return () => clearTimeout(timeoutRef.current);
    }, []);

    function handleChange(_event: Event, newValue: number | number[]) {
        const next = newValue as [number, number];
        setLocalValue(next);
        clearTimeout(timeoutRef.current);
        timeoutRef.current = setTimeout(() => onChangeRef.current(next), 200);
    }

    return (
        <div>
            <p>
                Рейтинг: {localValue[0]} – {localValue[1]}
            </p>
            <Slider
                value={localValue}
                onChange={handleChange}
                min={0}
                max={10}
                step={0.1}
                valueLabelDisplay="auto"
            />
        </div>
    );
}
