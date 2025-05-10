import { useEffect, useState, useCallback } from 'react';
import { useParams } from 'react-router-dom';
import Header from '../Header/Header';
import Comment from './Comment';
import styled from 'styled-components';
import CommentForm from './CommentForm';
import checkAuth from '../utils/checkAuth';
import { Link } from 'react-router-dom';
import parse from 'html-react-parser';

const PostContainer = styled.div`
  width: 100%;
  max-width: 1400px;
  margin: 50px auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  padding: 50px 100px;
  border: 1px solid #ccc;
  background-color: #9bb0bf;
  border-radius: 8px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  box-sizing: border-box;
`;
const Content = styled.p`
  font-size: 1.2rem;
  font-family: 'Raleway';
  line-height: 1.3;
  width: 100%;
`;

const CommentsContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const LoginMessage = styled.div`
  width: 100%;
  max-width: 600px;
  padding: 20px;
  border: 1px solid gray;
  background-color: #ffffff;
  margin: 20px auto;
`;

const AuthLink = styled(Link)`
  border: 1px solid white;
  border-radius: 5px;
  font-size: 1.1rem;
  font-weight: bold;
  color: #282c34;

  &:hover {
    text-decoration: none;
  }
`;

function Post() {
  const [isAuth, setIsAuth] = useState(false);
  const [postData, setPostData] = useState(null);
  const [error, setError] = useState(null);
  const { postId } = useParams();

  const fetchPost = useCallback(async () => {
    const apiUrl = import.meta.env.VITE_API_URL;
    const res = await fetch(`${apiUrl}/posts/${postId}`);
    if (!res.ok) {
      const errData = await res.json();
      return setError(errData.error || 'An error occurred');
    }
    const data = await res.json();
    setPostData(data);
  }, [postId]);
  useEffect(() => {
    fetchPost();
  }, [postId, fetchPost]);

  useEffect(() => {
    setIsAuth(checkAuth());
  }, []);
  return (
    <>
      <Header />
      {postData ? (
        <PostContainer>
          <h1>{postData.title}</h1>
          <p>
            written by <i>{postData.author.username}</i>
          </p>
          <Content>{parse(postData.content)}</Content>
        </PostContainer>
      ) : (
        <p>Loading post...</p>
      )}
      {error && <p style={{ color: 'red' }}>{error}</p>}
      {isAuth ? (
        <CommentForm postId={postId} fetchPost={fetchPost} />
      ) : (
        <LoginMessage>
          You need to <AuthLink to={'/login'}>Login</AuthLink> or{' '}
          <AuthLink to={'/signup'}>Sign Up</AuthLink> to comment
        </LoginMessage>
      )}
      {postData && postData.comments.length > 0 ? (
        <CommentsContainer>
          {postData.comments.map((comment) => {
            return (
              <Comment
                user={comment.user.username}
                content={comment.content}
              ></Comment>
            );
          })}
        </CommentsContainer>
      ) : (
        ''
      )}
    </>
  );
}

export default Post;
