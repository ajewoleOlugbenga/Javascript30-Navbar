import './OndeckFooter.css'
import LogoNetflix from '../img/Netflix Logo.png'
import ShopifyLogo from '../img/Shopify Logo.png'
import SpotifyLogo from '../img/Spotify Logo.png'
import Walmart from '../img/Walmart Logo.png'
const OndeckFooter= ()=> {
    return (
        <div>
            <small>Trusted by 3+ million people at companies like</small>
            <div>
                <img src={LogoNetflix} alt='Netflix'/>
                <img src={ShopifyLogo} alt='Shopify'/>
                <img src={SpotifyLogo} alt='Spotify'/>
                <img src={Walmart} alt='Walmart'/>
            </div>
        </div>
    )
}

export default OndeckFooter;