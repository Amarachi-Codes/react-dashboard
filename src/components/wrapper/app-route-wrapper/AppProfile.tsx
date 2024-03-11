import './styles.css';
import profilePix from './../../../assets/profilePix.png'
const AppProfile = () => {
  return (
    <>
    <div className='profileWrapper'>
        <img src={profilePix} className='profile' alt="" />
      <p className='name'>Md Shimul Hassain</p>
      <p className='email'>mdshimulhassain11@gmail.com</p>
      <button className='mybtn'>My Overview</button>
    </div>
    </>
  )
}

export default AppProfile
