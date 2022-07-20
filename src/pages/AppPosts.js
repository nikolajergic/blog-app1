import {useState,useEffect} from 'react';
import { Link } from 'react-router-dom';
import PostService from '../services/PostService';

function AppPosts() {
    const [posts,setPosts] = useState([]);

    useEffect(() => {
        const fetchPosts = async () => {
          const data = await PostService.getAll();
    
          setPosts(data);
        };
        fetchPosts();
      }, []);

      return (
        <div style={{ marginLeft: 5 }}>
          <h2>My posts</h2>
          {posts.map((post) => (
            <div key={post.id} style={{ border: '3px solid orange', width: 300 }}>
              <p>
                <strong>Title:</strong> {post.title}
              </p>
              <p>
                <strong>Text:</strong> {post.text}
              </p>
              <Link to={`/posts/${post.id}`}>View post</Link>
            </div>
          ))}
        </div>
      );
    
}

export default AppPosts;