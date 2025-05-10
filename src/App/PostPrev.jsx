import styled from 'styled-components';
import { Link } from 'react-router-dom';
import parse from 'html-react-parser';

const PostContainer = styled(Link)`
  text-decoration: none;
  color: black;
  border: 1px solid #ccc;
  border-radius: 5px;
  padding: 20px;
  margin: 10px;
  background-color: #f9f9f9;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  box-sizing: border-box;
  transition: transform 0.2s;
  max-width: 600px;
  width: 100%;
  height: 300px;
  overflow: hidden;
  position: relative;

  &:hover {
    transform: scale(1.02);
  }
  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 50px;
    background: linear-gradient(transparent, #f9f9f9);
  }
`;

function PostPrev({ title, author, content, id }) {
  let parsedContent = parse(content);
  return (
    <PostContainer to={`/posts/${id}`}>
      <h2>{title}</h2>
      <p>
        by <i>{author.username}</i>
      </p>
      <p>
        {parsedContent.length > 200
          ? parsedContent.slice(0, 200) + '...'
          : parsedContent}
      </p>
    </PostContainer>
  );
}

export default PostPrev;
