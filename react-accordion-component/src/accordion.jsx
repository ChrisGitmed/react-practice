import React, { useState } from 'react';

const topics = [
  { title: 'HyperText Markup Language', content: 'Here is some text about HTML' },
  { title: 'Cascading Style Sheets', content: 'Here is some text about CSS' },
  { title: 'JavaScript', content: 'Here is some text about JS' }
];

class Content extends React.Component {
  render() {
    return (
      <p>{this.props.content}</p>
    );
  }
}

class Title extends React.Component {
  render() {
    return (
      <h1 onClick={this.props.handleClick}>{this.props.title}</h1>
    );
  }
}

export default function Accordion() {
  const [content, setContent] = useState('');

  function handleClick(index) {
    if (content === topics[index].content) {
      setContent('');
    } else {
      setContent(topics[index].content);
    }
  }

  const titleArray = [];
  topics.forEach((element, index) => {
    titleArray.push(
      <Title handleClick={() => handleClick(index)} title={element.title} />
    );
    if (element.content === content) {
      titleArray.push(
        <Content content={content}/>
      );
    }
  });

  return titleArray;
}

/**
export default class Accordion extends React.Component {
  constructor(props) {
    super(props);
    this.state = { content: '' };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(index) {
    if (this.state.content === topics[index].content) {
      this.setState({
        content: ''
      });
    } else {
      this.setState({
        content: topics[index].content
      });
    }
  }

  render() {
    const titleArray = [];
    topics.forEach((element, index) => {
      titleArray.push(
        <Title handleClick={() => this.handleClick(index)} title={element.title} />
      );
      if (element.content === this.state.content) {
        titleArray.push(
          <Content content={this.state.content}/>
        );
      }
    });

    return titleArray;
  }
}
*/
