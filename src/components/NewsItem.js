import React from 'react';
import noimage from "./noimage.png";

export default function NewsItem(props) {

    let { title, description, imageUrl, newsUrl, author, date, source } = props;
    return (
        <div className="my-4">
            <div className="card" style={{ width: "20rem" }}>
                <div style={{
                    display: "flex",
                    justifyContent: "flex-end",
                    position: "absolute",
                    right: "0"
                }}>
                    <span className="badge rounded-pill bg-danger" >{source} </span>
                </div>
                <img src={imageUrl ? imageUrl : noimage} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">{description}</p>
                    <p className="card-text"><small className="text-muted">By {author ? author : "Unkown"} on {new Date(date).toGMTString()} </small></p>
                    <a href={newsUrl} target="_blank" className="btn btn-sm btn-dark">Read More</a>
                </div>
            </div>
        </div>
    )
}
