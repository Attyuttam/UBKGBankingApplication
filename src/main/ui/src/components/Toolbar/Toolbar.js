import React from 'react';
import './Toolbar.css';
import '../SideDrawer/DrawerToggleButton';
import DrawerToggleButton from "../SideDrawer/DrawerToggleButton";
import {NavLink} from "react-router-dom";

const Toolbar = props => (
    <header className={'toolbar'}>
        <nav className={'toolbar__navigation'}>
            <div>
                <DrawerToggleButton click = {props.drawerClickHandler}/>
            </div>
            <div className={'toolbar__logo'}><a href={'/'}>UTTAR BANGA KSHETRIYA GRAMIN BANK</a></div>
            <div className={'spacer'}/>
            <div className={'toolbar_navigation-items'}>
                <ul>
                    <li><NavLink className={'toolbar-link'} to={'/'}>Home</NavLink></li>
                </ul>
            </div>
        </nav>
    </header>
);
export default Toolbar;