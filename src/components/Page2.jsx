import logo from '../assets/react.svg'

const Page2 = ({ onRouteChange }) => (
    <div>
        <header>
            <img src={logo} alt="" />
            <h1>Welcome to react</h1>
        </header>
        <button onClick={() => onRouteChange('page1')}>Page1</button>
        <button disabled>Page2</button>
        <button onClick={() => onRouteChange('page3')}>Page3</button>
    </div>
)

export default Page2
