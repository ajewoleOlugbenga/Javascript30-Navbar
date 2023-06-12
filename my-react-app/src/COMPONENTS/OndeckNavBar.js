import Logo from '../img/Logo.png';
import './OndeckNavBar.css';

const OndeckNavBar=()=> {

    return (
        <div className='NavBar'>
            <img src={Logo} alt='OndeckLogo'/>
            <div>Products</div>
            <div>Challenges</div>
            <div>Resources</div>
            <div>Other links</div>
            <div>Sign in</div>
            <div>Try for free</div>
        </div>
    )
}

export default OndeckNavBar;