import React from 'react';

const Home = () => {
    const handleClick = (e) => {
        console.log('Hello Ninjas', e);
    }

    const handleClickWithParenthesis = (name, e) => {
        console.log('hello ' + name, e.target);
    }

    return (
        <div className="home">
            <h2>Home Page</h2>
            <button onClick={handleClick}>Click Me</button>
            <button onClick={(e) => handleClickWithParenthesis('mario', e)}>Click Me</button>
        </div>
    )
}

export default Home
