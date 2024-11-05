import React from 'react'
import './Profile.css'
import bell from '../../assets/Bell.png'
import photo from '../../assets/profilePhoto.png'
import profile from '../../assets/profile.jpeg'

const Profile = () => {
  return (
    <div className='profile'>
        <div className="notification">
            <img src={bell} alt="" />
        </div>
        <div className="profileimg">
            <img  src={profile} alt="" />
        </div>
    </div>
  )
}

export default Profile