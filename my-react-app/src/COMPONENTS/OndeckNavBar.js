import Logo from '../img/Logo.png';
import './OndeckNavBar.css';
import OndeckDropDown from './OndeckDropDown';


const OndeckNavBar=()=> {

    return (
        <div className='NavBar'>
            <img src={Logo} alt='OndeckLogo'/>
            <OndeckDropDown/>
            <div className='challenges'>Challenges</div>
            <div className='resources'>Resources</div>
            <div className='otherlinks'>Other links</div>
            <div className='signIn'>Sign in</div>
            <div className='TryForFree'>Try for free</div>
            </div>
    )
}

export default OndeckNavBar;