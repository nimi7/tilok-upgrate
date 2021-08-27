import React from 'react'
import { BrowserRouter as Router, Switch, Route,Link } from 'react-router-dom';
import './css/button.css'
////ssdsa

const STLYES=['btn--primary','btn--outline'];
const SIZE=['btn--medium','btn--large']


export const Button=({children,type,onClick,buttonStyle,buttonSize})=>{
    const checkButtonStyle=STLYES.includes(buttonStyle) ? buttonStyle:STLYES[0]

    const checkButtonToSIZE=SIZE.includes(buttonSize) ? buttonSize:SIZE[0]
    return(
        <Link to='/sing-up' className='btn-mobile'>
            <button className={`btn${checkButtonStyle} ${checkButtonToSIZE}`}
            onClick={onClick}
            type={type}
            >
                {children}
            </button>
        </Link>
    )
};