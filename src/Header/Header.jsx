import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 1rem 2rem;
  background-color: #282c34;
  color: white;
  flex-wrap: wrap;
`;
const SVG = styled.svg`
  .text {
    font-family: 'Segoe UI', 'Roboto', sans-serif;
    font-size: 28px;
    font-weight: bold;
    fill: #d1d5db; /* light gray (similar to your nav text) */
  }
  .highlight {
    fill: #34d399; /* soft green, matches your "Zagg" look */
  }
`;
const NavLinks = styled.nav`
  display: flex;
  align-items: center;
  gap: 2rem;
`;

const AuthLinkContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: white;
  font-size: 1.2rem;
  font-weight: bold;

  &:hover {
    text-decoration: underline;
  }
`;

const AuthLink = styled(StyledLink)`
  padding: 0.7rem 1.2rem;
  border: 1px solid white;
  border-radius: 5px;
  background-color: #61dafb;
  color: #282c34;

  &:hover {
    background-color: #21a1f1;
  }
`;

const WelcomeMessage = styled.p`
  font-size: 1.2rem;
  color: #61dafb;
  margin: 0;
  font-weight: bold;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.5);
`;

const Header = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  console.log(user);
  useEffect(() => {
    const apiUrl = import.meta.env.VITE_API_URL;
    async function fetchMe() {
      try {
        const jwtToken = localStorage.getItem('jwtToken');
        const res = await fetch(`${apiUrl}/me`, {
          method: 'GET',
          headers: {
            Authorization: `Bearer ${jwtToken}`,
          },
        });
        if (!res.ok) {
          throw new Error('Network response was not ok');
        }
        const { user } = await res.json();
        setUser(user);
        setLoading(false);
      } catch (error) {
        setUser(null);
      }
    }

    fetchMe();
  }, []);

  return (
    <HeaderContainer>
      <SVG
        width="200"
        height="60"
        viewBox="0 0 200 60"
        xmlns="http://www.w3.org/2000/svg"
      >
        <style></style>
        <text x="10" y="40" class="text">
          <tspan class="highlight">Zagg</tspan> Blog
        </text>
      </SVG>
      <NavLinks>
        <StyledLink to="/">Home</StyledLink>
        <StyledLink to="/posts">Posts</StyledLink>
      </NavLinks>
      <AuthLinkContainer>
        {!loading &&
          (user !== null ? (
            <WelcomeMessage>Welcome {user.username}!</WelcomeMessage>
          ) : (
            <>
              <AuthLink to="/login">Login</AuthLink>
              <AuthLink to="/signup">Signup</AuthLink>
            </>
          ))}
      </AuthLinkContainer>
    </HeaderContainer>
  );
};

export { AuthLink };
export default Header;
