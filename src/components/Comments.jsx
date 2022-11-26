import styled from "styled-components";
import Comment from "./Comment";

const Comments = () => {
  return (
    <Container>
      <NewComment>
        <Avatar src="" alt="" />
        <Input placeholder="add a comment" />
      </NewComment>
      <Comment />
      <Comment />
      <Comment />
      <Comment />
      <Comment />
      <Comment />
      <Comment />
      <Comment />
      <Comment />
      <Comment />
      <Comment />
    </Container>
  );
};

const Container = styled.div``;

const NewComment = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const Avatar = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: grey;
`;

const Input = styled.input`
  border: none;
  border-bottom: 1px solid ${({ theme }) => theme.soft};
  background: transparent;
  outline: none;
  padding: 5px;
  width: 100%;
`;

export default Comments;
