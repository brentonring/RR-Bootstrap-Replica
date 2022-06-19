import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button';

export default function TopBar() {
    return (
        <div>
            <Navbar bg='light' expand='lg' style={{display: 'flex', flexDirection: 'row'}}>
                <Navbar.Brand style={{margin: '5px 500px 0 20px'}} href='#home'>
                    <img
                        src='https://www.instacart.com/assets/beetstrap/brand/2022/instacart-logo-color-6678cb82d531f8910d5ba270a11a7e9b56fc261371bda42ea7a5abeff3492e1c.svg'
                        alt='Instacart logo'
                    />
                </Navbar.Brand>
                <Nav style={{justifyContent: 'end', flexDirection: 'row'}}>
                    <Nav.Item>
                        <Nav.Link style={{color: '#343538'}} href='#LogIn'>Log In</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Button variant='success' style={{fontSize: '18px'}}>Sign Up</Button>
                    </Nav.Item>
                </Nav>
            </Navbar>
        </div>
    )
}