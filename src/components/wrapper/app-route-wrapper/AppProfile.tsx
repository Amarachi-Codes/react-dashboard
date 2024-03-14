import './styles.css';
// import profilePix from './../../../assets/profilePix.png'
import { IoHomeSharp} from "react-icons/io5";
import { GoProject } from "react-icons/go";
import profImg from './../../../assets/profImg.jpg'
const AppProfile = () => {
  return (
    <>
    <div className='profileWrapper'>
        <img src={profImg} className='profile' alt="" />
      <p className='name'>Md Shimul Hassain</p>
      <p className='email'>mdshimulhassain11@gmail.com</p>
      <button className='mybtn'>My Overview</button>
      <div >
      <IoHomeSharp/><span className='icons'></span>
      <GoProject />
      </div>
    </div>
    </>
  )
}

export default AppProfile
