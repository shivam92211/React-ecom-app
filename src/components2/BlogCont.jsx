import "./BlogContStyles.css";
import React from 'react';



const Blog = ({ title, author, date, content1, content2, content3, content4,content5, imageUrl, subhead1,subhead2,subhead3, subhead4, subhead5    }) => {
  return (
    <div className="blog">
      <h2 className="blog-title">{title}</h2>
      <div className="blog-info">
        <span className="blog-author">By {author}</span>
        <span className="blog-date">{date}</span>
      </div>
      {imageUrl && (
        <div className="blog-image">
          <img className="b-img" src={imageUrl} alt="parallettes" />
        </div>
      )}
      <div>
        <p className="b-sub-head">{subhead1}</p>
        <p className="blog-content">{content1}</p>
        <br/>
        <p className="b-sub-head">{subhead2}</p>
        <p className="blog-content">{content2}</p>

        <br/>
        <p className="b-sub-head">{subhead3}</p>
        <p className="blog-content">{content3}</p>
        <br/>
        <p className="b-sub-head">{subhead4}</p>
        <p className="blog-content">{content4}</p>
        <br/>
        <p className="b-sub-head">{subhead5}</p>
        <p className="blog-content">{content5}</p>
    </div >
      </div>
  );
};

export default Blog;
