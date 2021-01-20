import { Link } from 'react-router-dom';

import styled from 'styled-components';

const StyledUL = styled.ul`
list-style: none;
`;

const StyledLink = styled(Link)`
background-color: green;
color: white;
`;

function Navigation() {
    return (
        <nav>
            <StyledUL>
                <li>
                    <StyledLink to="/">Home</StyledLink>
                </li>
                <li>
                    <StyledLink to="/about">About</StyledLink>
                </li>
                <li>
                    <StyledLink to="/projects">Projects</StyledLink>
                </li>
                <li>
                    <StyledLink to="/contact">Contact</StyledLink>
                </li>
            </StyledUL>
        </nav>
    );
}

export default Navigation;