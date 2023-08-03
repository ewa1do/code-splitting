import { useState } from 'react'
import AsyncComponent from './components/AsyncComponent'

import './App.css'

// * CODE SPLITTING REACT WITH Higher Order Component
function App() {
    const [router, setRouter] = useState({
        route: 'page1',
        Component: null,
    })

    const onRouteChange = async (route) => {
        setRouter({ route: route })
    }

    if (router.route === 'page1') {
        const AsyncPage1 = AsyncComponent(() =>
            import('./components/Page1.jsx')
        )
        return <AsyncPage1 onRouteChange={onRouteChange} />
    } else if (router.route === 'page2') {
        const AsyncPage2 = AsyncComponent(() =>
            import('./components/Page2.jsx')
        )
        return <AsyncPage2 onRouteChange={onRouteChange} />
    } else if (router.route === 'page3') {
        const AsyncPage3 = AsyncComponent(() =>
            import('./components/Page3.jsx')
        )

        return <AsyncPage3 onRouteChange={onRouteChange} />
    }

    return null
}

export default App
