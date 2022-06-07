import { useState, useEffect } from 'react'

export const useDebounce = (value, delay) => {
    const [debouncedValue, setDebouncedValue] = useState(value)

    useEffect(() => {
        // Update debounced value after delay
        const handler = setTimeout(() => {
            setDebouncedValue(value)
        }, delay)

        // Clear timeout after component unmount and setTimeout will not fire
        return () => {
            clearTimeout(handler)
        }
    }, [value, delay])

    return debouncedValue
}
