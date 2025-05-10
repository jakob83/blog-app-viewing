import styled from 'styled-components';
import { useState } from 'react';

const Form = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;
`;

const Label = styled.label`
  font-size: 1.2rem;
`;
const Textarea = styled.textarea`
  font-family: 'Raleway';
  font-size: 1rem;
  padding: 10px;
  border-radius: 5px;
`;
const Button = styled.button`
  background-color: #9bb0bf;
  border: none;
  padding: 10px 15px;
  font-size: 1rem;
  border-radius: 5px;
  transition: background-color 0.15s;
  &:hover {
    background-color: #49829b;
  }
  &:active {
    background-color: #9bb0bf;
  }
`;

function CommentForm({ postId, fetchPost }) {
  const [content, setContent] = useState('');
  const [err, setErr] = useState(null);
  async function handleSubmit(e) {
    e.preventDefault();
    const apiUrl = import.meta.env.VITE_API_URL;
    try {
      const token = localStorage.getItem('jwtToken');
      const res = await fetch(`${apiUrl}/posts/${postId}/comments`, {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ content }),
        method: 'POST',
      });
      if (!res.ok) {
        const errData = await res.json();
        return setErr(errData.error || 'Something went wrong');
      }
      fetchPost();
      setContent('');
      setErr(null);
    } catch (error) {
      setErr(error.msg || 'Something went wrong');
    }
  }
  async function handleChange(e) {
    setContent(e.target.value);
  }
  return (
    <Form onSubmit={handleSubmit}>
      <Label htmlFor="content">Write a Comment:</Label>
      <Textarea
        id="content"
        name="content"
        maxLength={100}
        required
        rows={3}
        cols={30}
        placeholder="Write your comment here..."
        onChange={handleChange}
        value={content}
      ></Textarea>
      <Button type="submit">Send</Button>
      {err && <p style={{ color: 'red' }}>{err}</p>}
    </Form>
  );
}

export default CommentForm;
