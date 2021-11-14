import React from 'react'
import styled from 'styled-components'
import Icon1 from '../images/svg-4.svg'
import Icon2 from '../images/svg-5.svg'
import Icon3 from '../images/svg-6.svg'

const Services = () => {
    return (
        <ServicesContainer id="services">
            <ServicesSectionTitle>Our Services</ServicesSectionTitle>
            <ServicesWrapper>
                <ServiceCard>
                    <ServiceIcon src={Icon1}/>
                    <ServiceTitle>Reduce expenses</ServiceTitle>
                    <ServiceDesc>We help reduce your fees and increase your overall revenue.</ServiceDesc>
                </ServiceCard>
                <ServiceCard>
                    <ServiceIcon src={Icon2}/>
                    <ServiceTitle>Virtual Offices</ServiceTitle>
                    <ServiceDesc>You can access to our platform online from anywhere in the world.</ServiceDesc>
                </ServiceCard>
                <ServiceCard>
                    <ServiceIcon src={Icon3}/>
                    <ServiceTitle>Premium Benefits</ServiceTitle>
                    <ServiceDesc>Unlock our special membership card that returns 5%.</ServiceDesc>
                </ServiceCard>
            </ServicesWrapper>
        </ServicesContainer>
    )
}

export default Services


const ServicesContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: #010606;
    padding: 150px 0 180px 0;

    @media screen and (max-width: 768px) {
        height: 1100px;
    }

    @media screen and (max-width: 768px) {
        height: 1300px;
    }
`

const ServicesSectionTitle = styled.h1`
    font-size: 2.5rem;
    color: #fff;
    margin-bottom: 64px;

    @media screen and (max-width: 480px) {
        font-size: 2rem;
    }
`

const ServicesWrapper = styled.div`
    max-width: 1100px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    align-items: center;
    grid-gap: 16px;
    padding: 0 20px;

    @media screen and (max-width: 1120px) {
        grid-template-columns: 1fr 1fr;
    }

    @media screen and (max-width: 768px) {
        grid-template-columns: 1fr;
        padding: 0 20px;
    }
`

const ServiceCard = styled.div`
    background-color: #fff;
    display: flex;
    flex-direction: column;
    align-items: center;
    border-radius: 10px;
    max-height: 340px;
    padding: 30px;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
    transition: all 0.2s ease-in-out;
    cursor: pointer;

    &:hover {
        transform: scale(1.02);
    }
`

const ServiceIcon = styled.img`
    height: 160px;
    width: 160px;
    margin-bottom: 10px;
`

const ServiceTitle = styled.h2`
    font-size: 1rem;
    margin-bottom: 10px;
`

const ServiceDesc = styled.p`
    font-size: 1rem;
    text-align: center;
`