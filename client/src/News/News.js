import React from "react";
const news = require("../data/articles.json");
const News = () => {
    return (
        <div
            className="col-xs-12"
            style={{ height: "50%", overflow: "scroll" }}
        >
            <center>
                <h1>News Articles</h1>
            </center>
            <hr style={{ color: "black" }} />
            {news.length > 0
                ? news.map((article, index) => {
                      return (
                          <div key={index}>
                              <div className="row">
                                  <div className="col-xs-12 col-sm-12 col-md-12">
                                      <a href={article.uri}>
                                          <img
                                              alt={""}
                                              src={`images/${index + 1}.jpg`}
                                              className="img-responsive img-box img-thumbnail"
                                          />
                                      </a>
                                  </div>
                                  <div className="col-xs-12 col-sm-12 col-md-12">
                                      <h4>
                                          <a href={article.uri}>
                                              {article.title}
                                          </a>
                                          -{article.date}
                                      </h4>
                                      <p></p>
                                      <small>By:{article.author}</small>
                                  </div>
                              </div>
                          </div>
                      );
                  })
                : null}
        </div>
    );
};
export { News };
