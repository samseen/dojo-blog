import React, { useState } from 'react';
import BlogList from '../BlogList';

const Home = () => {
    const [blogs, setBlogs] = useState([
        { title: 'My new website', body: 'lorem ipsum...', author: 'Mario', id: 1 },
        { title: 'Welcome Party', body: 'lorem ipsum...', author: 'Yoshi', id: 2 },
        { title: 'Web Dev top tips', body: 'lorem ipsum...', author: 'Luigi', id: 3 }
    ]);

    return (
        <div className="home">
            <BlogList />
        </div>
    )
}

export default Home
