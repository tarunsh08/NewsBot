import React from 'react'

const NewsItem = (props) => {
        let { title, description, imageUrl, newsUrl, author, date, source } = props
        return (
            <div className='my-3'>
                <div className="card">
                <span className="position-absolute top-0 translate-middle p-2 bg-danger rounded-pill badge" style={{left: '50%', zIndex: '1'}}>{source}</span>
                    <img src={!imageUrl ? "https://www.wsj.com/world/middle-east/mideast-power-saudi-arabia-rejects-trump-proposal-to-take-over-gaza-5fe9bc30" : imageUrl} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{title}...</h5>
                        <p className="card-text">{description}...</p>
                        <p className="card-text"><small className=" text-danger">By {!author ? "Unknown" : author} on {new Date(date).toLocaleString()}</small></p>
                        <a rel="noreferrer" href={newsUrl} target="_blank" className="btn btn-sm btn-success">Read More</a>
                    </div>
                </div>
            </div>
        )
}

export default NewsItem
