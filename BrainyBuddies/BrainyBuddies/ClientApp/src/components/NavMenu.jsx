import React, { useState } from 'react';
import {NavLink } from 'reactstrap';
import './NavMenu.css';
import { useNavigate } from 'react-router-dom';

const NavMenu = props => {

  const usenavigate = useNavigate();
  // useEffect(()=>{
  //     let username = sessionStorage.getItem('username');
  //     if(username===null || username===''){
  //         usenavigate('/login')
  //     }
  // })




    return (
      <header>
           <div className="grid-container">
      <div class="grid-item" id="item1">
        <img src={'https://images.moqups.com/repo/OR2Q9Ms0q16wN34fzzxyCAbkaoPHciku/p_g7o1tO0thQUwW49lMDO5OYt281SNRwjN/YEOAvKL5L5YOg47cZQOcpgKJvFIGsfdm.png?Expires=1685447509&Key-Pair-Id=K1TPUF1X6HKIYU&Signature=J1rW7eJ-~r1166R6-LeL9YpPKrMnoAgONjjUjYuldEI3nPuq08AFsnoYrjf9X1h1BscZF2835ORJmn0caYvn7HOv9c3I83n~1iMRYOPKHeOKZmWo6yuen8LL1e6akxdyN8evX5y-KQC7Ut2asY~t12ZVodRdRYvxuh4jy6Nul9gyzZhBzmhqKtXT330gPl1QjD9e4zP-94rwTGHwjkPZFfQ85geffuhfEzV-PqUtJTJxCPSAXTq~NONhcGozVD7dOEjzcPUc95clFscVR0DTVvM-4pbWIYP9MMBXWnMhiKLtxvlJ7I6Z6vi8o2csmhuFuUwwXygaI-qdyHl2azSgCg__'} width={'278px'} height={'197px'} />
        <h3>Brainy buddies</h3>
        <div></div>
        <div class="navigacija">
          <a href='#'>Home</a>
          <NavLink to="lesson-plans">Lesson Plans</NavLink>
          <a href='#'>Quiz</a>
        </div>
      </div>
      <div className="grid-item" id="item2">
        <div></div>
        <div className='lang'>
          <a href='#'>MK</a>
          <a href='#'>EN</a>
        </div>
        <div></div>
        <div className='sign up'>
          {/* {username ? <p>Hello, {username}</p> : (
            <>
              <button onClick={toggleLogin}>Log In</button>
              <button onClick={toggleSignUp}>Sign Up</button>
            </>
          )} */}
        </div>

      </div>
      </div>
        {/* <Navbar className="navbar-expand-sm navbar-toggleable-sm ng-white border-bottom box-shadow mb-3" container light>
          <NavbarBrand tag={Link} to="/">BrainyBuddies</NavbarBrand>
          <NavbarToggler onClick={this.toggleNavbar} className="mr-2" />
          <Collapse className="d-sm-inline-flex flex-sm-row-reverse" isOpen={!this.state.collapsed} navbar>
            <ul className="navbar-nav flex-grow">
              <NavItem>
                <NavLink tag={Link} className="text-dark" to="/">Home</NavLink>
              </NavItem>
              <NavItem>
                <NavLink tag={Link} className="text-dark" to="/counter">Counter</NavLink>
              </NavItem>
              <NavItem>
                <NavLink tag={Link} className="text-dark" to="/fetch-data">Fetch data</NavLink>
              </NavItem>
            </ul>
          </Collapse>
        </Navbar> */}
      </header>
    );
}

export default NavMenu;
