import styled from 'styled-components';

const StyledDIV = styled.div`
background-color: teal;
height: 300px;

h1 {
    background-color: blue;
    color: white;
}
ul {
    list-style: none;
    
}
li {
        background-color: white;
    }
li:nth-child(2) {
    color: red;
}
`;

function Contact() {
    return (
        <StyledDIV>
            <h1>Contact!</h1>
            <p>Lorem Ipsum yada yada</p>
            <ul>
                <li>HEJ</li>
                <li>ALLA</li>
                <li>GLADA</li>
            </ul>
        </StyledDIV>
    );
}
export default Contact;