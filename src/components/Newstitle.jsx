import React, { Component } from 'react';
export default class Newstitle extends Component {

  render() {
    let { title, description, imageurled, newsurl, author, time, source } = this.props;

    return (
      <div className="card ">
        <span className=" translate-middle badge rounded-pill bg-danger" style={{ position:'absolute', display:'flex', justifyContent:'flex-end', right:'0' }}>{source}</span>
        <img src={!imageurled ? "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwg-JMMnPo6XcsUA2cGnxUMTKVxkeNOcPVWA&usqp=CAU" : imageurled} className="card-img-top" alt="news/get" />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{description}....</p>
          <p className="card-text"><small className="text-muted">By {author ? author : "unknown"} on {new Date(time).toGMTString()}</small></p>
          <a href={newsurl} className="btn btn-primary">Read More</a>
        </div>
      </div>
    )
  }
}
