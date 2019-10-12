import React from 'react'
import * as styles from './styles.module.css'
import {NavLink} from "react-router-dom";
import SideBarItem from "../sideBarItem";
class SideBarItems extends React.Component{
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div  className={styles.sideBar_Links_Wrapper}>
                <ul className={styles.sideBar_links}>
                    <SideBarItem  linkUrl="/" linkName="Dashboard"
                                  icon={require('../../../assets/icons/nav-file-text-inactive@2x.png')}
                    />
                    <SideBarItem  linkUrl="/schedule" linkName="Schedule"
                                  icon={require('../../../assets/icons/nav-file-text-inactive@2x.png')}
                    />
                    <SideBarItem  linkUrl="/courses" linkName="Courses"
                                  icon={require('../../../assets/icons/nav-file-text-inactive@2x.png')}
                    />
                    <SideBarItem  linkUrl="/gradebook" linkName="Gradebook"
                                  icon={require('../../../assets/icons/nav-file-text-inactive@2x.png')}
                    />
                    <SideBarItem  linkUrl="/performance" linkName="Performance"
                                  icon={require('../../../assets/icons/nav-file-text-inactive@2x.png')}
                    />
                    <SideBarItem  linkUrl="/announcement" linkName="Announcement"
                                  icon={require('../../../assets/icons/nav-file-text-inactive@2x.png')}
                    />
                </ul>
            </div>
        )
     }


}
export default SideBarItems ;