import React from 'react';
import {format} from "date-fns";

function Post({title,summary,cover,content,createdAt,author}) {
    return (
    <div className="post">
        <div className="image">
            <img src="https://techcrunch.com/wp-content/uploads/2020/07/GettyImages-1192287243.jpg?w=730&crop=1" alt=""/>
        </div>
        <div className="text">
            <h2>{title}</h2>
            <p className="info">
                <a className="author">{author.username}</a>
                <time>{format(new Date (createdAt),'MMM d yyyy HH:mm')}</time>
            </p>
            <p>{summary}</p>
        </div>
    </div>
    );
}

export default Post;