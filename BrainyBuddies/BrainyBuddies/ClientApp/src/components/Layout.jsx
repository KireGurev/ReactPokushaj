import React, {useState} from 'react';
import { Container } from 'reactstrap';
import { Outlet, useNavigate } from 'react-router-dom';
import NavMenu from './NavMenu';
import Login from './home/login/LoginComponent';
import Register from './home/register/RegisterComponent';

const Layout = () => {

  const [showLogin, setShowLogin] = useState(false);
  const [showSignUp, setShowSignUp] = useState(false);
  const username= sessionStorage.getItem('username');
  const navigate = useNavigate();
  
  const toggleLogin = () => {
    setShowLogin(!showLogin);
  };
  const toggleSignUp = () => {
    setShowSignUp(!showSignUp);
  };

 const toggleNavbar = () => {
    this.setState({
      collapsed: !this.state.collapsed
    });
  }

    return (
      <div>
        <NavMenu />
        <Outlet></Outlet>
        <Container>
          
       {/* {showLogin && <Login toggleLogin={toggleLogin}/>}
      {showSignUp && <Register toggleSignUp={toggleSignUp} />} */}

        </Container>
      </div>
    );
}

export default Layout;