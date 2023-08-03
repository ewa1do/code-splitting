import { useState, lazy, Suspense } from 'react'

import Page1 from './components/Page1'

const Page2Lazy = lazy(() => import('./components/Page2.jsx'))
const Page3Lazy = lazy(() => import('./components/Page3.jsx'))

import './App.css'

// * CODE SPLITTING REACT WITH Lazy Loading
function App() {
    const [router, setRouter] = useState({
        route: 'page1',
        Component: Page1,
    })

    const onRouteChange = async (route) => {
        if (router.route === 'page1') {
            setRouter({ ...router, route: route })
        } else if (router.route === 'page2') {
            setRouter({ ...router, route, Component: Page2Lazy })
        } else if (router.route === 'page3') {
            setRouter({ ...router, route, Component: Page3Lazy })
        }
    }

    if (router.route === 'page1') {
        return <Page1 onRouteChange={onRouteChange} />
    } else if (router.route === 'page2') {
        const { Component } = router

        return (
            <Suspense fallback={<div>Loading...</div>}>
                <Component onRouteChange={onRouteChange} />
            </Suspense>
        )
    } else if (router.route === 'page3') {
        const { Component } = router

        return (
            <Suspense fallback={<div>Loading...</div>}>
                <Component onRouteChange={onRouteChange} />
            </Suspense>
        )
    }
}

export default App
