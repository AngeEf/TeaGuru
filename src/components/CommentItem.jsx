import React from 'react';
import MyButton from './UI/button/MyButton';

export default function CommentItem(props, { currUser }) {
  console.log('---->', currUser);

  return (
    <div className="post">
      <div className="post__content">
        <strong>
          {props.number}
          .
          {' '}
          {currUser.name}
        </strong>
        <div>
          {props.post.body}
        </div>
      </div>
      <div className="post__btns">
        <MyButton onClick={() => props.remove(props.post)}>
          Удалить
        </MyButton>
      </div>
    </div>
  );
}
