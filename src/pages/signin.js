import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import SiteButton from '../components/Button'

const SigninPage = () => {
    return (
        <>
            <SigninContainer>
                <SigninHeader>
                    <SigninHeaderWrapper>
                        <SigninTitle>Sign In</SigninTitle>
                        <GohomeBtn to="/">Back</GohomeBtn>
                    </SigninHeaderWrapper>
                </SigninHeader>
                <SigninContent>
                    <SigninForm>
                        <InputGroup>
                            <Label>Email</Label>
                            <Input type="email" />
                        </InputGroup>
                        <InputGroup>
                            <Label>Password</Label>
                            <Input type="password" />
                        </InputGroup>
                        <SiteButton primary={1} dark={0} buttonLabel="Sign in"  />
                    </SigninForm>
                </SigninContent>
            </SigninContainer>

        </>
    )
}

export default SigninPage


const SigninContainer = styled.div`
    min-height: 100vh;
    background-color: #010606;
`

const SigninHeader = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 80px;
`

const SigninHeaderWrapper = styled.div`
    max-width: 1110px;
    width: 100%;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
`

const SigninTitle = styled.h1`
    color: #fff;
`

const GohomeBtn = styled(Link)`
    position: absolute;
    top: 5px;
    right: 0;
    background-color: #2e22e2;
    font-size: 16px;
    padding: 12px 30px;
    text-decoration: none;
    font-weight: 600;
    color: #fff;
    border-radius: 50px;

    &:hover {
        background-color: #fff;
        color: #2e22e2;

    }

    @media screen and (max-width: 1100px) {
        right: 15px;
        top: 0px;
    }
`

const SigninContent = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: calc(100vh - 80px);
`

const SigninForm = styled.form`
    width: 440px;
    padding: 50px 30px;
    background-color: #101522;
    border-radius: 10px;
`

const InputGroup = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    margin-bottom: 30px;
`

const Label = styled.label`
    font-size: 16px;
    margin-bottom: 10px;
    color: #fff;
`

const Input = styled.input`
    padding: 8px 15px;
    background: #fff;
    outline: none;
    border: none;
    font-size: 16px;
    border-radius: 5px;
`

