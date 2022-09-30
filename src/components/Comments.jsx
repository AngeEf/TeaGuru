import React from 'react';
import CommentItem from './CommentItem';

export default function Comments({
  posts, title, remove, currUser,
}) {
  return (
    <div>
      {posts.map((post, index) => (
        <CommentItem
          currUser={currUser}
          remove={remove}
          number={index + 1}
          post={post}
          key={post.id}
        />
      ))}
    </div>
  );
}
