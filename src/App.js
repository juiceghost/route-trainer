import Navigation from './Navigation';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import styled from 'styled-components';

import About from './About';
import Contact from './Contact';
import Projects from './Projects';
import Home from './Home';
import Weather from './Weather';
import WeatherHook from './WeatherHook';

//import './App.css';

const StyledAbout = styled(About)`
height: 150px;
background-color: aquamarine;
`


function App() {
    return (
        <Router>
            <div>Welcome to React-router!</div>
            {/* <Weather /> */}
            <WeatherHook />
            <Navigation />
            <Switch>
                <Route path='/about'>
                    <StyledAbout name='Krille' />
                </Route>
                <Route path='/projects'>
                    <Projects />
                </Route>
                <Route path='/contact'>
                    <Contact />
                </Route>
                <Route path='/'>
                    <Home />
                </Route>
            </Switch>


            {/*  <About />
            <Projects />
            <Contact /> */}

        </Router>
    );
}

export default App;