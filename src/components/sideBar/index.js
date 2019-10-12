import React from 'react'
import * as styles from './styles.module.css'
import SideBarItems from './sideBarItems'

class sideBar extends React.Component{

    render() {
        return (
                    <div className={"col-2"}>
                        <div className={styles.sideBar_wrapper}>
                            <h3 className={styles.logo}>Coligo</h3>
                            <SideBarItems/>
                        </div>
                    </div>

        )
    }
}

export default sideBar;