import React, {useState} from 'react';
import styled from "styled-component

//깃에 올려보자

let number = 3;
function App() {
  const initialtateOfcomment = {
    id: 0,
    username: '',
    content: '',
  }
  const [comment, setComment] = useState(initialtateOfcomment);

  const [comments, setComments] = useState([
    {
      id:1,
      username: '김민지',
      content: '1번 댓글입니다.',
    },
    {
      id:2,
      username: '이민철',
      content: '2번 댓글입니다.',
    }
  ]);

  const onChangeInput = (e) => {
    const {name, value} = e.target;
    setComment({...comment, [name]: value});
  };

  const onSubmitComment = (e) => {
    e.preventDefault();
    setComments([...comments, {...comment, id: number}]);
    setComment(initialtateOfcomment);
    number++;
  };


  return (
    <StContainer>
      <Commentformcontainer>
        <P>댓글</P>
        <Form onSubmit={onSubmitComment}>
          <NameInput
          required={true}//입력 안하고 제출하면 경고창 뜸 & 제출 안 됨!
          minLength={3}
          placeholder='이름 (5자 이내)'
          maxLength={5}
          type='text'
          name='username'
          value={comment.username} //input에 입력되어 있을 초깃값
          onChange={onChangeInput}
          />
          <ContentInput
          required={true}
          minLength={2}
          placeholder='댓글을 입력하세요. (100자 이내)'
          maxLength={100}
          type='text'
          name='content'
          value={comment.content}
          onChange={onChangeInput}
          />
          <Button
          // onClick={onClickComment} 리덕스 연결
          >댓글달기</Button>
        </Form>
      </Commentformcontainer>
      {comments.map((comment) => {
          return (
          <Stcommentdiv key={comment.id}>
            <hr></hr>
            <h6>{comment.username}</h6>
            <p>{comment.content}</p>
            <hr></hr>
          </Stcommentdiv>
          )
        })
      }
    </StContainer>
  );
}



export default App;

const StContainer = styled.div`
  height: 400px;
  position: absolute;
  bottom: 0px;
  left: 0px;
  width: 100%;
  /* background-color: #fff; */
  transition: height 400ms ease-in-out;
  background-color: yellow;
`;

const Commentformcontainer = styled.div`
  background-color: red;
  flex-direction: row;
`;

const Form = styled.form`
  background-color: green;
  display: flex;
  align-items: center;
  /* justify-content: center; */
  /* flex-direction: row; */

  gap: 12px;
  width: 100%;
  padding: 0 12px;
`;

const P = styled.p`
margin: 16px;
`;

const NameInput = styled.input`
  box-sizing: border-box;
  height: 46px;
  width: 150px;
  outline: none;
  border-radius: 8px;
  padding: 0 12px;
  font-size: 14px;
  border: 1px solid #eee;
`;

const ContentInput = styled.input`
  box-sizing: border-box;
  height: 46px;
  width: 80%;
  outline: none;
  border-radius: 8px;
  padding: 0 12px;
  font-size: 14px;
  border: 1px solid #eee;
`;

const Button = styled.button`
  display: flex;
  align-items: center;
  /* justify-content: center; */
  /* flex-direction: row; */

  border: 1px solid #eee;
  background-color: #eee;
  height: 46px;
  border-radius: 8px;
  background-color: ${({ bgColor, disabled }) => (disabled ? '#ddd' : bgColor)};
`;

const Stcommentdiv = styled.div`
  background-color: lightblue;
  padding: 0 12px;
  display: row;
  hr {
    border: 1px solid #eee;
  }
  h6{
    margin: 5px 5px;
  }
  p {
    font-weight: bold;
    margin: 0 5px;
  }
`;