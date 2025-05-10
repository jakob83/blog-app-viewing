import Header from '../Header/Header';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const HomeContainer = styled('div')`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 150px 1fr 1fr 1fr;

  justify-items: center;
  align-items: center;
  margin: 0 10px;
  @media (max-width: 800px) {
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 150px 300px 1fr;
  }
`;
const Heading = styled('h1')`
  grid-column: 1 / -1;
  grid-row: 1 / 2;
  font-family: sans-serif;
  font-size: 2.5rem;
  color: #000000;
  text-align: center;
  margin: 20px 0;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
  font-style: italic;
`;
const Img = styled('img')`
  grid-column: 2 / -1;
  max-width: 100%;
  width: 100%;
  border-radius: 20px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  object-fit: cover;
  height: auto;
  @media (max-width: 800px) {
    grid-row: 2 / 3;
    grid-column: 1 / -1;
  }
`;
const AboutContainer = styled('div')`
  grid-column: 1 / 2;
  background-color: #2b4a5f;
  padding: 40px;
  border-radius: 20px;
  max-width: 700px;
  width: 100%;
  box-sizing: border-box;
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.3);
  color: #ffffff;
  font-family: 'Comic Relief', sans-serif;
  line-height: 1.6;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  @media (max-width: 800px) {
    grid-row: 3 / 4;
    grid-column: 1 / -1;
  }
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.4);
  }
`;

const Paragraph = styled('p')`
  font-family: 'Comic Relief';
  color: white;
  font-size: 1.2rem;
  line-height: 1.7;
`;
const H2 = styled('h2')`
  font-family: 'Comic Relief';
  color: white;
`;
const WriteBlogContainer = styled('div')`
  align-self: start;
  grid-column: 1 / -1;
  background-color: #f4f4f4;
  padding: 20px;
  border-radius: 10px;
  max-width: 700px;
  width: 100%;
  box-sizing: border-box;
  text-align: center;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  font-family: 'Comic Relief', sans-serif;
  margin-top: 60px;
`;

const WriteBlogLink = styled.a`
  color: #2b4a5f;
  font-weight: bold;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`;

function Home() {
  return (
    <>
      <Header />
      <HomeContainer>
        <Heading>Your Daily Dose of Dev & Life</Heading>
        <AboutContainer>
          <H2>About Us</H2>
          <Paragraph>
            Welcome to our little corner of the internet! This blog is a space
            for anyone who loves programming, life, or a bit of both. Whether
            you're here to share your latest coding discovery, reflect on your
            journey, or just read what others have to say — you're in the right
            place. We believe everyone has a story or insight worth sharing.
            From debugging nightmares to aha moments, from tech tips to personal
            growth — it's all welcome here. Think of it as a digital journal
            meets tech community. Write. Read. Connect. Grow.
          </Paragraph>
        </AboutContainer>
        <Img src="pics/coding.jpg" />
        <WriteBlogContainer>
          Want to share your own story?{' '}
          <WriteBlogLink href="http://localhost:5173/" target="_blank">
            Start Writing
          </WriteBlogLink>
        </WriteBlogContainer>
      </HomeContainer>
    </>
  );
}

export default Home;
