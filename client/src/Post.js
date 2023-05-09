import React from 'react';
import {formatISO9075} from "date-fns";

function Post({title,summary,cover,content,createdAt}) {
    return (
    <div className="post">
        <div className="image">
            <img src="https://techcrunch.com/wp-content/uploads/2020/07/GettyImages-1192287243.jpg?w=730&crop=1" alt=""/>
        </div>
        <div className="text">
            <h2>{title}</h2>
            <p className="info">
                <a href="" className="author">Darkim Powell</a>
                <time>{formatISO9075(new Date (createdAt))}</time>
            </p>
            <p>{summary}</p>
        </div>
    </div>
    );
}

export default Post;