import React from 'react';
import styled from 'styled-components';
import Video from '../video/video.mp4';
import SiteButton from './Button';


const HeroSection = () => {

    return (
        <HeroContainer id="home">
            <HeroBg>
                <VideoBg autoPlay loop muted src={Video} type="video/mp4" />
            </HeroBg>
            <HeroContent>
                <HeroTitle>Virtual Wallet For Everyone</HeroTitle>
                <HeroText>Sign up for a new account today and receive $250 in credit towards your next payment.</HeroText>
                <HeroBtnWrapper>
                    <SiteButton 
                        withArrow="true"
                        to="signup"
                        smooth={true}
                        duration={500}
                        spy={true}
                        exact="true"
                        offset={-80}
                        primary={1}
                        dark={0}
                        buttonLabel="Get Started" 
                    />
                </HeroBtnWrapper>
            </HeroContent>
        </HeroContainer>
    )
}

export default HeroSection


const HeroContainer = styled.div`
    background: #0c0c0c;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 30px;
    height: 100vh;
    position: relative;

    :before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: linear-gradient(180deg, rgba(0, 0, 0, 0.2) 0%, rgba(0, 0, 0, 0.6) 100%);
        z-index: 2;
    }
`

const HeroBg = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
`

const VideoBg = styled.video`
    width: 100%;
    height: 100%;
    -o-object-fit: cover;
    object-fit: cover;
    background: #232a34;
`

const HeroContent = styled.div`
    z-index: 3;
    max-width: 1200px;
    position: absolute;
    padding: 8px 24px;
    display: flex;
    flex-direction: column;
    align-items: center;
`

const HeroTitle = styled.h1`
    color: #fff;
    font-size: 48px;
    text-align: center;

    @media screen and (max-width: 768px) {
        font-size: 40px;
    }

    @media screen and (max-width: 480px) {
        font-size: 32px;
    }
`

const HeroText = styled.p`
    margin-top: 24px;
    color: #fff;
    font-size: 24px;
    text-align: center;
    max-width: 600px;

    @media screen and (max-width: 480px) {
        font-size: 18px;
    }
`

const HeroBtnWrapper = styled.div`
    margin-top: 32px;
    display: flex;
    flex-direction: column;
    align-items: center;
`

