import './styles.css';
import profilePix from './../../../assets/profilePix.png'
import { IoHomeSharp} from "react-icons/io5";
import { GoProject } from "react-icons/go";
const AppProfile = () => {
  return (
    <>
    <div className='profileWrapper'>
        <img src={profilePix} className='profile' alt="" />
      <p className='name'>Md Shimul Hassain</p>
      <p className='email'>mdshimulhassain11@gmail.com</p>
      <button className='mybtn'>My Overview</button>
      <div>
      <IoHomeSharp/>
      <GoProject />
      </div>
    </div>
    </>
  )
}

export default AppProfile
