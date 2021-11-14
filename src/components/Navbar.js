import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Link as LinkR } from 'react-router-dom';
import { Link as LinkS } from 'react-scroll';
import { FaBars } from 'react-icons/fa';
import { animateScroll as scroll } from 'react-scroll';

const Navbar = ({ toggle }) => {
    
    const [scrollNav, setScrollNav] = useState(false);

    const changeNavBg = () => {
        if(window.scrollY >= 80) {
            setScrollNav(true)
        } else {
            setScrollNav(false)
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', changeNavBg);
    }, [])

    const toggleHome = () => {
        scroll.scrollToTop();
    }

    return (
        <div>
            <Nav scrollNav={scrollNav}>
                <NavbarContainer>
                    <NavLogo to="/" onClick={toggleHome}>Lazer</NavLogo>
                    <MobileIcon onClick={toggle}>
                        <FaBars />
                    </MobileIcon>
                    <NavMenu>
                        <NavItem>
                            <NavLink 
                                to='about'
                                smooth={true}
                                duration={500}
                                spy={true}
                                exact='true'
                                offset={-80}
                                activeClass="active"
                                >
                                About
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink 
                                to='discover'
                                smooth={true}
                                duration={500}
                                spy={true}
                                exact='true'
                                offset={-80}
                                activeClass="active"
                            >Discover</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink 
                                to='services'
                                smooth={true}
                                duration={500}
                                spy={true}
                                exact='true'
                                offset={-80}
                                activeClass="active"
                            >Services</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink 
                                to='signup'
                                smooth={true}
                                duration={500}
                                spy={true}
                                exact='true'
                                offset={-80}
                                activeClass="active"
                            >Sign Up</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink 
                                to='contact'
                                smooth={true}
                                duration={500}
                                spy={true}
                                exact='true'
                                offset={-80}
                                activeClass="active"
                            >Contact</NavLink>
                        </NavItem>
                    </NavMenu>
                    <NavBtn>
                        <NavBtnLink to="/signin">Sign In</NavBtnLink>
                    </NavBtn>
                </NavbarContainer>
            </Nav>
        </div>
    )
}

export default Navbar

const Nav = styled.nav`
    background: ${({scrollNav}) => (scrollNav ? '#000' : 'transparent')};
    height: 80px;
    /* margin-top: -80px; */
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 16px;
    position: fixed;
    width: 100%;
    top: 0;
    z-index: 10;
    transition: all 0.3s ease-in;


    @media screen and (max-width: 960px) {
        transition: 0.8s all ease;
    }
`

const NavbarContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 80px;
    z-index: 1;
    width: 100%;
    padding: 0 24px;
    max-width: 1100px;
`

const NavLogo = styled(LinkR)`
    color: #fff;
    justify-self: flex-start;
    cursor: pointer;
    font-size: 24px;
    align-items: center;
    margin-left: 24px;
    font-weight: bold;
    text-decoration: none;
`

const MobileIcon = styled.div`
    display: none;

    @media screen and (max-width: 768px) {
        display: block;
        position: absolute;
        top: 0;
        right: 0;
        transform: translate(-100%, 60%);
        font-size: 28px;
        cursor: pointer;
        color: #fff;
    }

`

const NavMenu = styled.div`
    display: flex;
    align-items: center;
    list-style: none;
    text-align: center;
    margin-right: -22px;

    @media screen and (max-width: 768px) {
        display: none;
    }
`

const NavItem = styled.li`
    height: 80px;
`

const NavLink = styled(LinkS)`
    color: #fff;
    display: flex;
    align-items: center;
    text-decoration: none;
    padding: 0 16px;
    cursor: pointer;
    height:100%;

    &.active {
        border-bottom: 3px solid #2e22e2;
    }
`

const NavBtn = styled.nav`
    display: flex;
    align-items: center;

    @media screen and (max-width: 768px) {
        display: none;
    }
`

const NavBtnLink = styled(LinkR)`
    border-radius: 50px;
    background: #2e22e2;
    white-space: none;
    padding: 10px 22px;
    color: #fff;
    font-size: 16px;
    outline: none;
    border: none;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    text-decoration: none;

    &:hover {
        background-color: #fff;
        color: #2e22e2;
    }
`