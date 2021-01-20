import Navigation from './Navigation';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import About from './About';
import Contact from './Contact';
import Projects from './Projects';
import Home from './Home';

function App() {
    return (
        <Router>
            <div>Welcome to React-router!</div>
            <Navigation />
            <Switch>
                <Route path='/about'>
                    <About name='Krille' />
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