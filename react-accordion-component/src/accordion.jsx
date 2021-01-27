import React from 'react';

export default class Accordion extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: ''
    }
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event) {
    const id = event.currentTarget.id;
    if (this.state.text === id) {
      this.setState({text: ''});
    } else this.setState({ text: id })
  }

  render() {
    const { handleClick } = this;
    const { text } = this.state;

    let htmlTextClass = 'hidden';
    let cssTextClass = 'hidden';
    let jsTextClass = 'hidden';

    if ( text === 'html') {
      htmlTextClass = ''
      cssTextClass = 'hidden'
      jsTextClass = 'hidden'
    } else if (text === 'css') {
      htmlTextClass = 'hidden'
      cssTextClass = ''
      jsTextClass = 'hidden'
    } else if (text === 'js') {
      htmlTextClass = 'hidden'
      cssTextClass = 'hidden'
      jsTextClass = ''
    }

    return (
      <div className="accordion">
        <div className="title" id="html" onClick={handleClick}>
          <h3>Hypertext Markup Language</h3>
        </div>
        <div className={htmlTextClass} id="html-text">
          <p>
            HyperText Markup Language (HTML) is the standard markup language
            for creating web pages and web applications. With Cascading Style
            Sheets(CSS) and JavaScript, it forms a triad of cornerstone
            technologies for the World Wide Web.
          </p>
        </div>
        <div className="title" id="css" onClick={handleClick}>
          <h3>Cascading Style Sheets</h3>
        </div>
        <div className={cssTextClass} id="css-text">
          <p>
            Cascading Style Sheets (CSS) is a style sheet language used for
            describing the presentation of a document written in a markup
            language like HTML. CSS is a cornerstone technology of the World
            Wide Web, alongside HTML and JavaScript.
          </p>
        </div>
        <div className="title" id="js" onClick={handleClick}>
          <h3>JavaScript</h3>
        </div>
        <div className={jsTextClass} id="js-text">
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
