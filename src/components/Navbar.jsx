import React from 'react'
import {  NavLink } from 'react-router-dom'
import styles from "../styles/Navbar.module.css"

const Navbar = () => {
    const links = [
        {
            to:"/",
            title:"Home",
            exact:"true"
        },
        {
            to:"/about",
            title:"About",
            exact:"false"
        },
        {
            to:"/projects",
            title:"Projects",
            exact:"false"
        },
        {
            to:"/contact",
            title:"Contact",
            exact:"false"
        },
    ]
    return (
        <div className={styles.navbar}>
            {
                links.map(({to,exact,title}) => <NavLink activeStyle={{fontSize:"22px",color:"goldenrod"}} className={styles.links} key={to} to={to} exact={exact}>{title}</NavLink>)
            }
        </div>
    )
}

export default Navbar
