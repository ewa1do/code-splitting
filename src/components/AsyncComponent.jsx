import { useEffect, useState } from 'react'

export default function asyncComponent(importComponent) {
    const AsyncComponent = (props) => {
        const [router, setRouter] = useState({
            Component: null,
        })

        const changeComponent = async () => {
            const module = await importComponent()
            return module.default
        }

        useEffect(() => {
            async function component() {
                const Component = await changeComponent()
                setRouter({ ...router, Component })
            }

            component()
        }, [])

        const { Component } = router

        return Component ? <Component {...props} /> : null
    }

    return AsyncComponent
}
