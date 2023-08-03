import logo from '../assets/react.svg'

const Page1 = ({ onRouteChange }) => (
    <div>
        <header>
            <img src={logo} alt="" />
            <h1>Welcome to react</h1>
        </header>
        <button disabled>Page1</button>
        <button onClick={() => onRouteChange('page2')}>Page2</button>
        <button onClick={() => onRouteChange('page3')}>Page3</button>
    </div>
)

export default Page1
