import React, { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";

function DataFetching() {
  const [posts, setPosts] = useState([]);
  var count = Math.floor(Math.random() * 3 + 1);

  const getQuote = () => {
    fetch("https://api.kanye.rest/")
      .then((res) => res.json())
      .then((data) => {
        let randomNum = Math.floor(Math.random() * data.length);
        setPosts(data);
      });

    console.log(count);

    var nameClass = "album-art" + count;

    document.getElementById("art").className = nameClass;
    console.log(nameClass);

    // document.getElementById("art").style.background = "url(https://images.genius.com/48bb3318d8ae27f31eba3f1db412d15d.752x752x1.jpg)";
  };

  return (
    <div className="quoteSection">
      <ul>
        <h1 className="kQuotes">{posts.quote}</h1>
      </ul>
      <Button onClick={getQuote} type="button" className="btn btn-dark">
        Change Quote
      </Button>
    </div>
  );
}

export default DataFetching;
