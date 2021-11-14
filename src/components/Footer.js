import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <FooterContainer>
            <FooterWrap>
                <FooterLinksContainer>
                    <FooterLinksWrapper>
                        <FooterLinkItems>
                            <FooterLinkTitle>About Us</FooterLinkTitle>
                            <FooterLink to="/signin">How it works</FooterLink>
                            <FooterLink to="/signin">Testimonials</FooterLink>
                            <FooterLink to="/signin">Careers</FooterLink>
                            <FooterLink to="/signin">Investors</FooterLink>
                            <FooterLink to="/signin">Terms of Services</FooterLink>
                        </FooterLinkItems>
                        <FooterLinkItems>
                            <FooterLinkTitle>Videos</FooterLinkTitle>
                            <FooterLink to="/signin">General Video</FooterLink>
                            <FooterLink to="/signin">Ambassadors</FooterLink>
                            <FooterLink to="/signin">Agency</FooterLink>
                            <FooterLink to="/signin">Influencer</FooterLink>
                        </FooterLinkItems>
                        <FooterLinkItems>
                            <FooterLinkTitle>Contact Us</FooterLinkTitle>
                            <FooterLink to="/signin">Contact</FooterLink>
                            <FooterLink to="/signin">Support</FooterLink>
                            <FooterLink to="/signin">Destination</FooterLink>
                            <FooterLink to="/signin">Sponsorship</FooterLink>
                        </FooterLinkItems>
                        <FooterLinkItems>
                            <FooterLinkTitle>Social Media</FooterLinkTitle>
                            <FooterLink to="/signin">Instagram</FooterLink>
                            <FooterLink to="/signin">Facebook</FooterLink>
                            <FooterLink to="/signin">Youtube</FooterLink>
                            <FooterLink to="/signin">Twitter</FooterLink>
                        </FooterLinkItems>
                    </FooterLinksWrapper>
                </FooterLinksContainer>
                
            </FooterWrap>
            <FooterTextContainer>
                <SiteRight>Lazer &copy; { new Date().getFullYear() } All rights reserved</SiteRight>
            </FooterTextContainer>
        </FooterContainer>
    )
}

export default Footer


const FooterContainer = styled.footer`
    background-color: #101522;
`

const FooterWrap = styled.div`
    padding:  48px 24px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    max-width: 1100px;
    margin: 0 auto;
`

const FooterLinksContainer = styled.div`
    width: 100%;
`

const FooterLinksWrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);

    @media screen and (max-width: 850px) {
        grid-template-columns: repeat(2, 1fr);
    }

    @media screen and (max-width: 480px) {
        grid-template-columns: 1fr;
    }
`

const FooterLinkItems = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin: 16px;
    text-align: left;
    width: 160px;
    box-sizing: border-box;
    color: #fff;

    @media screen and (max-width: 420px) {
        margin: 0;
        padding: 10px;
        width: 100%;
    }
`

const FooterLinkTitle = styled.h1`
    font-size: 14px;
    margin-bottom: 16px;
`

const FooterLink = styled(Link)`
    color: #fff;
    text-decoration: none;
    margin-bottom: 0.5rem;
    font-size: 14px;
    display: block;
    transition: all 0.3s ease-out;

    &:hover {
        color: #2e22e2;
    }
`

const FooterTextContainer = styled.div`
    display: flex; 
    justify-content: center;
    align-items: center;
    padding: 20px 15px;
    background-color: #000;
    color: #fff;
`

const SiteRight = styled.p`
    font-size: 14px;
`