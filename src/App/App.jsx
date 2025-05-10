import { useEffect, useState } from 'react';
import Post from './PostPrev';
import './App.css';
import Header from '../Header/Header';
import styled from 'styled-components';

const Posts = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 16px;
  padding: 16px;
  justify-items: center;
`;

function App() {
  const apiUrl = import.meta.env.VITE_API_URL;
  const [posts, setPosts] = useState(null);

  useEffect(() => {
    async function fetchPosts() {
      try {
        const res = await fetch(`${apiUrl}/posts`);
        const json = await res.json();
        setPosts(json);
      } catch (error) {
        console.error('Failed to fetch posts:', error);
      }
    }

    fetchPosts();
  }, [apiUrl]); // run once when component mounts

  return (
    <>
      <Header />
      <Posts>
        {posts ? (
          posts.map((post) => (
            <Post
              key={post.id}
              author={post.author}
              title={post.title}
              content={post.content}
              id={post.id}
            />
          ))
        ) : (
          <p>Loading posts...</p>
        )}
      </Posts>
    </>
  );
}

export default App;
