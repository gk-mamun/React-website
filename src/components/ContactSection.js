import React from 'react'
import styled from 'styled-components'
import SiteButton from './Button'

const ContactSection = () => {
    return (
        <ContactContainer id="contact">
            <ContactWrapper>
                <ContactSectionTitle>Contact Us</ContactSectionTitle>
                <ContactForm>
                    <InputGroup>
                        <Input placeholder="Your name" type="text" />
                    </InputGroup>
                    <InputGroup>
                        <Input placeholder="Subject" type="text" />
                    </InputGroup>
                    <InputGroup>
                        <Input placeholder="Your Email" type="email" />
                    </InputGroup>
                    <InputGroup>
                        <InputTextarea></InputTextarea>
                    </InputGroup>
                    <SiteButton primary={1} dark={0} buttonLabel="Send" />
                </ContactForm>
            </ContactWrapper>
        </ContactContainer>
    )
}

export default ContactSection


const ContactContainer = styled.div`
    background-color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 100px 0 150px 0;
`

const ContactWrapper = styled.div`
    max-width: 1100px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    @media screen and (max-width: 768px) {
        padding: 0 15px;
        width: 100%
    }
`

const ContactSectionTitle = styled.h1`
    color: #2e22e2;
    font-size: 2.5rem;
    margin-bottom: 64px;
`

const ContactForm = styled.form`
    width: 440px;
    padding: 50px 30px;
    background-color: #101522;
    border-radius: 10px;

    @media screen and (max-width: 480px) {
        width: 100%
    }
`

const InputGroup = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    margin-bottom: 30px;
`

const Input = styled.input`
    padding: 8px 15px;
    background: #fff;
    outline: none;
    border: none;
    font-size: 16px;
    border-radius: 5px;
`

const InputTextarea = styled.textarea`
    padding: 8px 15px;
    background: #fff;
    outline: none;
    border: none;
    font-size: 16px;
    border-radius: 5px;
    min-height: 150px;
`