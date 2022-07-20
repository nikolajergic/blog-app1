import {useState,useEffect} from 'react';
import { useParams,Redirect } from 'react-router-dom';
import PostService from '../services/PostService';

function SinglePost() {
    const [post, setPosts] = useState({})
    const {id} = useParams();

    useEffect(() => {
        const fetchPost = async () => {
          const data = await PostService.get(id);
    
          setPosts(data);
        };
        if (id) {
            fetchPost();
          }
        }, [id]);
        
        if (!post) {
            return <Redirect to='/posts' />;
          }

          return (
            <div style={{ marginLeft: 5 }}>
              <h1>{post.title}</h1>
              <p>{post.text}</p>
            </div>
          );
        }


export default SinglePost;