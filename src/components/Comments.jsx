import React from 'react';
import CommentItem from './CommentItem';

export default function Comments({posts, title, remove}) {
  return (
    <div>
      {/* <h1 style={{ textAlign: 'center' }}>
        {title}
      </h1> */}
      {posts.map((post, index) => (
        <CommentItem remove={remove} number={index + 1} post={post} key={post.id} />
      ))}
    </div>
  );
}
