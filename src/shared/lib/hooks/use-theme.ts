import { useCallback, useEffect, useState } from 'react'

const useTheme = () => {
    const setting = JSON.parse(JSON.stringify(localStorage.getItem('theme'))) || 'dark'

    const [theme, setTheme] = useState<string>('dark')

    useEffect(() => {
        if (!setting) {
            if (!document.documentElement.getAttribute('data-theme')) {
                document.documentElement.setAttribute('data-theme', setting)
                setTheme(setting)
            }
        } else {
            document.documentElement.setAttribute('data-theme', setting)
            setTheme(setting)
        }
    }, [setting])

    const switchTheme = useCallback((state) => {
        setTheme(() => {
            const newTheme = state ? 'dark' : 'light'

            document.documentElement.setAttribute('data-theme', newTheme)
            localStorage.setItem('theme', newTheme)

            return newTheme
        })
    }, [])

    return { theme, switchTheme }
}

export default useTheme
