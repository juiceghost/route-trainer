import Navigation from './Navigation';
import { BrowserRouter as Router } from 'react-router-dom';

function App() {
    return (
        <Router>
            <div>Welcome to React-router!</div>
            <Navigation />
        </Router>
    );
}

export default App;