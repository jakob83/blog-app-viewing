import styled from 'styled-components';

const CommentContainer = styled.div`
  position: relative;
  background: #52c9fb;
  border-radius: 10px;
  padding: 10px 15px;
  color: #333;
  max-width: 900px;
  width: 100%;
  font-size: 1.1rem;
  margin: 20px;
`;
const UserP = styled.i`
  margin-bottom: 5px;
  color: transparent;
  color: rgba(0, 0, 0, 0.7);
`;
function Comment({ content, user }) {
  return (
    <CommentContainer>
      <UserP>{user}</UserP>
      <p>{content}</p>
    </CommentContainer>
  );
}

export default Comment;
