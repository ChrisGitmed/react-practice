import React, { useState } from 'react';

const topics = [
  { title: 'HyperText Markup Language', content: 'Here is some text about HTML' },
  { title: 'Cascading Style Sheets', content: 'Here is some text about CSS' },
  { title: 'JavaScript', content: 'Here is some text about JS' }
];

function Content(props) {
  return (
    <p>{props.content}</p>
  );
}

function Title(props) {
  return (
    <h1 onClick={props.handleClick}>{props.title}</h1>
  );
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
