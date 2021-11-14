import React, { useState } from 'react'
import styled from 'styled-components';
import {MdArrowForward, MdKeyboardArrowRight} from 'react-icons/md';
import { Link } from 'react-scroll';

const SiteButton = ({ primary, dark, buttonLabel, withArrow }) => {
    const [hover, setHover] = useState(false);

    const onHover = () => {
        setHover(!hover);
    }
    return (
        <Button 
            to="signup" 
            onMouseEnter={onHover} 
            onMouseLeave={onHover}
            primary={primary}
            dark={dark}
        >
            {buttonLabel} 
            { !withArrow 
              ? ''
              : [
                  (hover
                    ? <ArrowForward /> 
                    : <ArrowRight />
                  )
              ]
            }
        </Button>
    )
}

export default SiteButton

const Button = styled(Link)`
    border-radius: 50px;
    background: ${({primary}) => primary ? '#2e22e2' : '#010606'};
    white-space: nowrap;
    padding: ${({big}) => (big ? '14px 48px' : '12px 30px')};
    color: ${({dark}) => (dark ? '#010606' : '#ffffff')};
    font-size: ${({fontBig}) => (fontBig ? '20px' : '16px;')};
    outline: none;
    border: none;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all 0.2s ease-in-out;

    &:hover {
        background: ${({primary}) => primary ? '#fff' : '#2e22e2'};
        color: ${({primary}) => primary ? '#2e22e2' : '#fff'};
    }
`

const ArrowForward = styled(MdArrowForward)`
    margin-left: 8px;
    font-size: 20px;
`

const ArrowRight = styled(MdKeyboardArrowRight)`
    margin-left: 8px;
    font-size: 20px;
`
