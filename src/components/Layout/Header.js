import React, { Fragment } from 'react';
import HeaderCartButton from './HeaderCartButton';
import mealimg from "../assets/meals.jpg";
import classes from "./Header.module.css";

const Header = (props) => {
    return (
        <Fragment>
        <header className={classes.heeader}>
        SudoApt Meal Center
        <HeaderCartButton onClick = {props.onShowCart} />
        </header>
        <div className={classes['main-image']}>
        <img src={mealimg} alt="A table full of food" /> 
        
        </div>

        </Fragment>
    )
}

export default Header;