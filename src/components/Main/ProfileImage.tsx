import React from 'react'
import styled from 'styled-components'

const PROFILE_IMAGE_LINK = 'https://avatars.githubusercontent.com/u/60732590?v=4'

const ProfileImage = () => {
  return (
    <ProfileImageWrapper src={PROFILE_IMAGE_LINK} alt="profileImage" />
  )
}

const ProfileImageWrapper = styled.img`
    width: 120px;
    height: 120px;
    margin-bottom: 30px;
    border-radius: 50%;
`

export default ProfileImage