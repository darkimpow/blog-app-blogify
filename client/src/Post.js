import React from 'react';

function Post() {
    return (
    <div className="post">
        <div className="image">
            <img src="https://techcrunch.com/wp-content/uploads/2020/07/GettyImages-1192287243.jpg?w=730&crop=1" alt=""/>
        </div>
        <div className="text">
            <h2>Exploring the Riches: How DevOps and Generative AI are Transforming Tech</h2>
            <p className="info">
                <a href="" className="author">Darkim Powell</a>
                <time>2023-05-01 2:45pm</time>
            </p>
            <p className="summary">Generative AI isn’t just about creative endeavors and parlor tricks. Investors and Big Tech alike are betting that it will also affect enterprise infrastructure and cyber security.</p>
        </div>
    </div>
    );
}

export default Post;