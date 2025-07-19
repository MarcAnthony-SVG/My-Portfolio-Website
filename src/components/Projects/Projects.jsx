import React from 'react';
import CorkBoard from '../Projects/Images/Corkboard.jpg';
import { Card } from './Card';
import Projects from '../../Data/Projects.js';
import update from 'immutability-helper';
import Wood from '../Projects/Images/wood.jpg';
import './Projects.css';

function buildCardData() {
  const cardsById = [];
  const cardsByIndex = [];
  for (let i = 0; i < Projects.length; i += 1) {
    const card = {
      id: i,
      image: Projects[i].image,
      title: Projects[i].title,
      text: Projects[i].text,
      link: Projects[i].link,
    };
    cardsById[card.id] = card;
    cardsByIndex[i] = card;
  }
  return {
    cardsById,
    cardsByIndex,
  };
}

export default class ProjectsContainer extends React.Component {
  constructor(props) {
    super(props);
    this.drawFrame = () => {
      const nextState = update(this.state, this.pendingUpdateFn);
      this.setState(nextState);
      this.pendingUpdateFn = undefined;
      this.requestedFrame = undefined;
    };
    this.moveCard = (id, afterId) => {
      const { cardsById, cardsByIndex } = this.state;
      const card = cardsById[id];
      const afterCard = cardsById[afterId];
      const cardIndex = cardsByIndex.indexOf(card);
      const afterIndex = cardsByIndex.indexOf(afterCard);
      this.scheduleUpdate({
        cardsByIndex: {
          $splice: [
            [cardIndex, 1],
            [afterIndex, 0, card],
          ],
        },
      });
    };
    this.state = buildCardData();
  }
  componentWillUnmount() {
    if (this.requestedFrame !== undefined) {
      cancelAnimationFrame(this.requestedFrame);
    }
  }
  render() {
    const { cardsByIndex } = this.state;
    return (
      <section
        style={{
          backgroundColor: 'black',
          border: '5px solid black',
          overflow: 'hidden',
        }}
        className="projects-section"
      >
        <header>
          <h1>Projects</h1>
        </header>
        <div className="projects-container">
          {cardsByIndex.map((card) => (
            <Card
              key={card.id}
              id={card.id}
              image={card.image}
              title={card.title}
              text={card.text}
              link={card.link}
              moveCard={this.moveCard}
            />
          ))}
        </div>
      </section>
    );
  }
  scheduleUpdate(updateFn) {
    this.pendingUpdateFn = updateFn;
    if (!this.requestedFrame) {
      this.requestedFrame = requestAnimationFrame(this.drawFrame);
    }
  }
}
