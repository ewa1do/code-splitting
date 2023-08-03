import { useState } from 'react'
import Page1 from './components/Page1'

import './App.css'

// * CODE SPLITTING REACT
function App() {
    const [router, setRouter] = useState({
        route: 'page1',
        Component: Page1,
    })

    const changeComponent = async (path = '') => {
        const module = await import(path)
        return module.default
    }

    changeComponent('./components/Page2.jsx')

    const onRouteChange = async (route) => {
        // no Code Splitting
        //* setRouter({ route: route })

        // * with code splitting

        if (router.route === 'page1') {
            setRouter({ ...router, route })
        } else if (router.route === 'page2') {
            const Page2 = await changeComponent('./components/Page2.jsx')
            setRouter({ ...router, route, Component: Page2 })
        } else if (router.route === 'page3') {
            const Page3 = await changeComponent('./components/Page3.jsx')
            setRouter({ ...router, route, Component: Page3 })
        }
    }

    if (router.route === 'page1') {
        return <Page1 onRouteChange={onRouteChange} />
    } else if (router.route === 'page2') {
        return <router.Component onRouteChange={onRouteChange} />
    } else if (router.route === 'page3') {
        return <router.Component onRouteChange={onRouteChange} />
    }

    return null
}

export default App
