import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Posts from './Posts';
import Pagination from './Pagination';

const UseEffect = () => {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage] = useState(7);

    useEffect(() => {
    const fetchPosts = async () => {
        setLoading(true);
        await axios.get('https://jsonplaceholder.typicode.com/posts').then((res) =>{
            setPosts(res.data);
        });
        setLoading(false);
    };

    fetchPosts();
    }, []);
    // console.log(posts);    
    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

    const paginate = (pageNumber) => setCurrentPage(pageNumber)
  return (
    <div className='mb-3 mt-3'>
      <Posts posts={currentPosts} loading={loading}/>
      <Pagination postsPerPage={postsPerPage} totalPosts={posts.length} paginate={paginate} />
    </div>
  )
}

export default UseEffect