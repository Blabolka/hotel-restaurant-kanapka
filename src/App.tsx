import React from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'

import Loading from '@components/Loading'
import PageBackgroundDecoration from '@components/PageBackgroundDecoration'
import { createTheme, ThemeProvider } from '@mui/material'

const MainPage = React.lazy(() => import('@pages/MainPage/MainPage'))

const AdminPage = React.lazy(() => import('@pages/AdminPage/AdminPage'))
import MenuBlock from '@pages/AdminPage/MenuBlock/MenuBlock'
import OrdersBlock from '@pages/AdminPage/OrdersBlock/OrdersBlock'
import StatisticsBlock from '@pages/AdminPage/StatisticsBlock/StatisticsBlock'

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
                            <Route path="/admin" element={<AdminPage />}>
                                <Route index element={<MenuBlock />} />
                                <Route path="orders" element={<OrdersBlock />} />
                                <Route path="statistics" element={<StatisticsBlock />} />
                            </Route>
                            <Route path="*" element={<Navigate to="/" />} />
                        </Routes>
                    </React.Suspense>
                </div>
                <PageBackgroundDecoration />
            </BrowserRouter>
        </ThemeProvider>
    )
}

export default App
