import OndeckNavBar from "./COMPONENTS/OndeckNavBar";
import OndeckMain from "./COMPONENTS/OndeckMain";
import OndeckFooter from './COMPONENTS/OndeckFooter';
import './Ondeck.css';
const Ondeck =()=> {
return (
    <div className='Ondeck'>
<OndeckNavBar/>
<OndeckMain/>
<OndeckFooter/>
</div>
)
}

export default Ondeck;