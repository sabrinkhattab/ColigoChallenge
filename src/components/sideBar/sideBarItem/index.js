import React from 'react'
import {NavLink} from 'react-router-dom'
import * as styles from './styles.module.css'

function SideBarItem(props){

    return(
       <li className={styles.item}>
           <NavLink
           to={props.linkUrl}
           exact={true}
           activeClassName={styles.active}
           >
               <div className={styles.wrapper}>
               <img  className={styles.icon} src={props.icon} />
               <span className={styles.text}>{props.linkName}</span>
               </div>
           </NavLink>
       </li>
    )
}
export default SideBarItem;