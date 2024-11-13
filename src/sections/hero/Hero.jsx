import React from 'react'
import {useTheme} from '../../context/ThemeContext'
import hero from '../../assets/hero.jpg'
import CV from '../../assets/Patrick_Lascano_Web_Developer.pdf'
import {
    Container,
    ProfilePicContainer,
    ProfilePicture,
    SunToggle,
    MoonToggle,
    InfoContainer,
    LinksContainer,
    Link,
    Facebook,
    Telegram,
    LinkedIn,
    Description,
    CvDownload,
} from './HeroElements'

const Hero = () => {

    const {theme, toggleTheme} = useTheme();

  return (
    <Container id="hero">
        <ProfilePicContainer>
            <ProfilePicture src={hero} alt="Profile picture of Patrick Lascano"/>
            {
                theme === 'light'
                    ?   <SunToggle onClick={toggleTheme}/>
                    :   <MoonToggle onClick={toggleTheme}/>
            }
        </ProfilePicContainer>
        <InfoContainer>
            <h1>
                Patrick 
                <br/>
                Lascano
            </h1>
            <h2>Full-stack Web Developer</h2>
            <LinksContainer>
                <Link href="https://www.facebook.com/YohanJohan10/" target="_blank">
                    <Facebook/>
                </Link>
                <Link href="https://t.me/Thatkid_patit" target="_blank">
                    <Telegram/>
                </Link>
                <Link href="https://www.linkedin.com/public-profile/settings?trk=d_flagship3_profile_self_view_public_profile" target="_blank">
                    <LinkedIn/>
                </Link>
            </LinksContainer>
            <Description>With a passion for developing modern React web apps for commercial businesses.</Description>
            <a href={CV} download>
                <CvDownload>Resume</CvDownload>
            </a>
        </InfoContainer>
    </Container>
  )
}

export default Hero