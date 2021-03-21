import React, { useState, useEffect } from 'react';
import BlogList from '../BlogList';

const Home = () => {
    const [blogs, setBlogs] = useState([
        { title: 'My new website', body: 'lorem ipsum...', author: 'Mario', id: 1 },
        { title: 'Welcome Party', body: 'lorem ipsum...', author: 'Yoshi', id: 2 },
        { title: 'Web Dev top tips', body: 'lorem ipsum...', author: 'Mario', id: 3 }
    ]);

    const handleDelete = (id) => {
        const newBlogs = blogs.filter(blog => blog.id !== id);
        setBlogs(newBlogs)
    }

    useEffect(() => {
        console.log("Use Effect Ran");
        console.log(blogs);
    });

    return (
        <div className="home">
            <BlogList blogs={blogs} title="All Blogs!" handleDelete={handleDelete} />
            <BlogList blogs={blogs.filter((blog) => blog.author === 'Mario')} title="Mario's Blogs!" />
        </div>
    )
}

export default Home
