import MainPics from '../img/HeroImage.png';
import AlternatePics from '../img/AlternativeTo Logo.png';
import FirstAlternatePics from '../img/Capterra Logo.png';
import LastAlternatePics from '../img/shopifyLogo.png';
import './OndeckMain.css';


const OndeckMain =()=>{
    return(
        <div className="MainDisplay">
              <div>
                 <h2> Ondeck is your remote <br/><span className="conference">Conference calling tool</span></h2>
                <div>
                    Ondeck is a service that allows you to create beautiful, online, and encrypted video calls for
                     you and your remote teams
                </div>
                <div className='TryFor'>Try for free</div>
                <div className='Rating'>5.0 Rating based on review: 
                    <img src={FirstAlternatePics} alt='FirstReview'/>
                    <img src={AlternatePics} alt='Review'/>
                    <img src={LastAlternatePics} alt='LastReview'/>
                </div>
              </div>
            <img className='MainPics' src={MainPics} alt='OndeckMain'/>
        </div>
    )
}

export default OndeckMain;