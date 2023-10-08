import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom/client';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render();
const BlogPost = () => {
  const [grid, setGrid] = useState([
    {
      id: 1,
      title: "Introduction To A Machine Learning",
      imgUrl: "https://edyoda.s3.amazonaws.com/media/blog-images/learn_machine_learning_courses_online.png",
      author: "EDYoda",
      date: " | 23 Jul 2019",
      content: "We have had an insight into Artificial Intelligence. Well, one of its subfields is machine learning and this introduction will help you get a fair idea of what this ....."
    },{
      id: 2,
      title: "LAMP Stack Vs MEAN stack: Choosing the..",
      imgUrl: "https://edyoda.s3.amazonaws.com/media/blog-images/6.png",
      author: "EDYoda",
      date: " | 24 Aug 2019",
      content: "In today's dynamic world, developing a rapid application with a smooth user interface that can adapt to specific features is the main business requirement..."
    },{
      id: 3,
      title: "Impact of Cloud Computing in various",
      imgUrl: "https://edyoda.s3.amazonaws.com/media/blog-images/4.png",
      author: "EDYoda",
      date: " | 24 Aug 2019",
      content: "Cloud computing has been rapidly gaining pace in the world of information technology. It has been observed that over 90% of global enterprises are using clou..."
    },{
      id: 4,
      title: "Challenges of Machine Learning in Big Data",
      imgUrl: "https://edyoda.s3.amazonaws.com/media/blog-images/3.png",
      author: "EDYoda",
      date: " | 24 Aug 2019",
      content: "Machine Learning is a subset of artificial intelligence which is an important part of computer science. The revolution of Big Data promises to transform the..."
    },{
      id: 5,
      title: "Breaking the Myths around Cybersecurity",
      imgUrl: "https://edyoda.s3.amazonaws.com/media/blog-images/5.png",
      author: "EDYoda",
      date: " | 26 Aug 2019",
      content: "Cybersecurity plays an integral role in the process of good business models. But even cybersecurity programs built with good intentions can fall short in..."
    },{
      id: 6,
      title: "Importance of Data Backup and Recovery i..",
      imgUrl: "https://edyoda.s3.amazonaws.com/media/blog-images/7.png",
      author: "EDYoda",
      date: " | 26 Aug 2019",
      content: "A business must always introspect the areas where they lack in order to bring about a positive change in the work environment. One of the main..."
    },{
      id: 7,
      title: "What is Web Scraping?",
      imgUrl: "https://edyoda.s3.amazonaws.com/media/blog-images/automation-testing-an-overview-2.png",
      author: "Zac Clancy",
      date: " | 25 Sep 2019",
      content: "Simply put, web scraping is one of the tools developers use to gather and analyze information from the internet. Some websites and platforms offer application.."
    },{
      id: 8,
      title: "What is Income Share Agreement?",
      imgUrl: "https://edyoda.s3.amazonaws.com/media/blog-images/what_is_isa_blog_1.png",
      author: "EDYoda",
      date: " | 14 Oct 2019",
      content: "The term Income Share Agreement has been around for a long time since 1955 to be precise. Surprised, eh? It was first introduced by Milton Friedman, ..."
    },{
      id: 9,
      title: "Practical Machine Learning with Python",
      imgUrl: "https://edyoda.s3.amazonaws.com/media/blog-images/practical_machine_learning_1.png",
      author: "Daniel Pyrathon",
      date: " | 16 Oct 2019",
      content: "Machine learning is a field of artificial intelligence that uses statistical techniques to give computer systems the ability to “learn” (e.g., progressively)..."
    }
  ]);

  // useEffect can be removed as we are not making an API call anymore

  return (
    <div className="list-items">
      {grid.map((item) => (
        <div key={item.id} className="items">
          <div className="image">
            <img src={item.imgUrl} alt={item.title} />
          </div>
          <div className="itext">
            <h3>{item.title}</h3>
            <div className="author">
              <h3 className="title">{item.author}</h3>
              <p> {item.date}</p>
            </div>
            <div className="para">{item.content}</div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default BlogPost;







