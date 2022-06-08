import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Loading from '@components/Loading'
import PageBackgroundDecoration from '@components/PageBackgroundDecoration'
import { createTheme, ThemeProvider } from '@mui/material'

const MainPage = React.lazy(() => import('@pages/MainPage/MainPage'))

const theme = createTheme({
    typography: {
        fontFamily: 'Rubik',
    },
})

const App = () => {
    return (
        <ThemeProvider theme={theme}>
            <BrowserRouter>
                <div className="page__wrapper">
                    <React.Suspense fallback={<Loading />}>
                        <Routes>
                            <Route path="/" element={<MainPage />} />
                        </Routes>
                    </React.Suspense>
                </div>
                <PageBackgroundDecoration />
            </BrowserRouter>
        </ThemeProvider>
    )
}

export default App
