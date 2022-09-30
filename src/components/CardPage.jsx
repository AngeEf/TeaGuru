import React, { useEffect, useState } from 'react';
import Comments from './Comments';
import MyButton from './UI/button/MyButton';
import MyInput from './UI/input/MyInput';
import Description from './Description';
import CommentForm from './CommentForm';

export default function CardPage({currUser, items}) {
  const [posts, setPosts] = useState([]);
  const [post, setPost] = useState({ title: '', body: '' });
  const [onePage, setOnePage] = useState({})

  const {id} = useParams()
  useEffect(() => {
    
  })

  const addNewPost = (e) => {
    e.preventDefault();
    const newPost = {
      id: Date.now(),
      title: post.title,
      body: post.body,
    };
    console.log(newPost);
    setPosts([...posts, newPost]);
    setPost({ title: '', body: '' });
  };
  const addNewComment = (newPost) => {
    setPosts([...posts, newPost]);
  };
  const removeComment = (post) => {
    setPosts(posts.filter((el) => el.id !== post.id));
  };

  return (
    <div>
      <Description />
      <div className="App">
        <CommentForm create={addNewComment} />
        <h1 style={{ textAlign: 'center' }}>
          Комментарии
        </h1>
        {posts.length !== 0
          ? <Comments remove={removeComment} posts={posts} title="Комментарии" />
          : <h2 style={{ textAlign: 'center' }}>Комментариев пока еще нет</h2>}
      </div>
    </div>
  );
}