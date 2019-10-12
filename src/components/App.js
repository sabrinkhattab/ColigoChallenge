import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from 'react-router-dom'
import SideBar from "./sideBar"
import Dashboard from './Dashboard'
import Schedule from "./schedule";
import Courses from "./Courses";
import Gradebook from "./Gradebook";
import Performance from "./Performance";
import Announcement from "./Announcement";

class  App extends React.Component {

    render(){
        return (
            <Router>
                <div className="container-fluid">
                    <div className="row ">
                        <SideBar></SideBar>
                        <Switch>
                            <Route exact component={Dashboard} path={'/'}/>
                            <Route exact component={Schedule} path={'/schedule'}/>
                            <Route exact component={Courses} path={'/courses'}/>
                            <Route exact component={Gradebook} path={'/gradebook'}/>
                            <Route exact component={Performance} path={'/performance'}/>
                            <Route exact component={Announcement} path={'/announcement'}/>

                        </Switch>

                    </div>

                </div>

            </Router>

        );
    }

}

export default App;
