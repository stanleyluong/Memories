import React from "react"
import { Container } from '@material-ui/core'
import { BrowserRouter, Switch, Route } from "react-router-dom"
import Navbar from "./components/Navbar/Navbar"
import Home from './components/Home/Home'
import Auth from "./components/Auth/Auth"

const App = () => (
    <BrowserRouter>
        <Container maxWidth='lg'>
            <Navbar />
            <Switch>
                <Route path="/Memories" exact component={Home} />
                <Route path="/Memories/auth" exact component={Auth} />
            </Switch>
        </Container>
    </BrowserRouter>
)

export default App