import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Loading from '@components/Loading'
import PageBackgroundDecoration from '@components/PageBackgroundDecoration'

const MainPage = React.lazy(() => import('@pages/MainPage/MainPage'))

const App = () => {
    return (
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
    )
}

export default App
