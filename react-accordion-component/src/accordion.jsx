import React from 'react';

export default class Accordion extends React.Component {
  render() {
    return (
      <div className="accordion">
        <div>
          <h3>Hypertext Markup Language</h3>
        </div>
        <div>
          <p>
            HyperText Markup Language (HTML) is the standard markup language
            for creating web pages and web applications. With Cascading Style
            Sheets(CSS) and JavaScript, it forms a triad of cornerstone
            technologies for the World Wide Web.
          </p>
        </div>
        <div>
          <h3>Cascading Style Sheets</h3>
        </div>
        <div>
          <p>
            Cascading Style Sheets (CSS) is a style sheet language used for
            describing the presentation of a document written in a markup
            language like HTML. CSS is a cornerstone technology of the World
            Wide Web, alongside HTML and JavaScript.
          </p>
        </div>
        <div>
          <h3>JavaScript</h3>
        </div>
        <div>
          <p>
            JavaScript, often abbreviated as JS, is a high-level, interpreted
            programming language that conforms to the ECMAScript specification.
            JavaScript has curly-bracket syntax, dynamic typing, prototype-based
            object-orientation, and first-class functions.
          </p>
        </div>
      </div>
    )
  }
}
