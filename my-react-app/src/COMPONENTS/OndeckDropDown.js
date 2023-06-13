import './OndeckDropDown.css';
import Spense from '../img/Spense_Icon.png';
import Fiber from '../img/Fiber_Icon.png';
import Gradie from '../img/Gradie_Icon.png';

const OndeckDropDown=()=> {
    return(
        <div className='dropdown'>
            <button className='dropbtn'>Product</button>
            <div className='dropdown-content'>
            <a href='#'>
                <img src={Spense} alt='Spense'/> <b>Spense</b>
                <br/>
                <span>Spense is a landing page for writers. Great for practicing absolute positioning and flex layouts</span>
            </a>
            <a href='#'>
                <img src={Fiber} alt='Fiber'/> <b>Fiber Landing Page</b>
                <br/>
                An online portfolio generator. Great to practice flex/grid layouts,and absolute positioning
            </a>
            <a href='#'>
                <img src={Gradie} alt='Gradie'/> <b>Gradie Sign Up Page</b>
                <br/>
                Gradie is a simple sign up page, great to practice centering layouts
            </a>
            </div>
        </div>
    )

}
export default OndeckDropDown;