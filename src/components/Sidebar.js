import React from 'react'
import styled from 'styled-components';
import { Link as LinkR } from 'react-router-dom';
import { Link as LinkS } from 'react-scroll';
import { FaTimes } from 'react-icons/fa';

function Sidebar({ isOpen, toggle }) {
    return (
        <SidebarContainer isOpen={ isOpen }>
            <Icon onClick={ toggle }>
                <CloseIcon />
            </Icon>
            <SidebarWrapper>
                <SidebarMenu>
                    <SidebarLink to="about" onClick={ toggle }>About</SidebarLink>
                    <SidebarLink to="discover" onClick={ toggle }>Discover</SidebarLink>
                    <SidebarLink to="services" onClick={ toggle }>Services</SidebarLink>
                    <SidebarLink to="signup" onClick={ toggle }>Sign Up</SidebarLink>
                </SidebarMenu>
                <SideBtnWrap>
                    <SidebarRoute to="/signin" onClick={ toggle }>Sign In</SidebarRoute>
                </SideBtnWrap>
            </SidebarWrapper>
        </SidebarContainer>
    )
}

export default Sidebar


const SidebarContainer = styled.aside`
    position: fixed;
    z-index: 99;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: #0d0d0d;
    display: grid;
    align-items: center;
    transition: all 0.3s ease-in-out;
    opacity: ${({ isOpen}) => (isOpen ? '100%' : '0')};
    left: ${({ isOpen }) => isOpen ? '0' : '-100%'};
`

const Icon = styled.div`
    position: absolute;
    top: 18px;
    right: 24px;
    background: transparent;
    font-size: 24px;
    cursor: pointer;
    outline: none;
`

const CloseIcon = styled(FaTimes)`
    color: #fff;
`

const SidebarWrapper = styled.div`
    color: #fff;
`

const SidebarMenu = styled.div`
    margin-bottom: 150px;
`

const SidebarLink = styled(LinkS)`
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 24px;
    text-decoration: none;
    list-style: none;
    transition: all 0.2s ease-in-out;
    margin-bottom: 36px;
    text-decoration: none;
    cursor: pointer;

    &:hover {
        color: #01bf71;
    }
`

const SideBtnWrap = styled.div`
    display: flex;
    justify-content: center;
`

const SidebarRoute = styled(LinkR)`
    border-radius: 50px;
    background-color: #2e22e2;
    white-space: nowrap;
    padding: 16px 64px;
    color: #fff;
    outline: none;
    cursor: pointer;
    font-size: 16px;
    text-decoration: none;
    transition: all 0.2s ease-in-out;

    &:hover {
        background-color: #fff;
        color: #2e22e2;
    }
`