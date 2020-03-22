import React from 'react';
import {Navbar} from "./components/Navbar";
import {TodosPage} from "./pages/TodosPage";
import {AboutPage} from "./pages/AboutPage";
import {BrowserRouter, Switch, Route} from "react-router-dom"


const App: React.FC = () => {

    return (
        <BrowserRouter>
            <Navbar/>
            <div className="container">
                <Switch>
                    <Route path={"/"} exact component={TodosPage}/>
                    <Route path={"/about"}component={AboutPage}/>
                </Switch>

            </div>
        </BrowserRouter>

    );
}

export default App;
