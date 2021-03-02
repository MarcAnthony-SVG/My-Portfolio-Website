import React from 'react';
import CorkBoard from '../Projects/Images/Corkboard.jpg';
import { Card } from './Card';
import Projects from '../../Data/Projects.js';
import update from 'immutability-helper';
import Wood from '../Projects/Images/Wood.jpg';

const constainerStyle = {
  width: '100%',
  display: 'flex',
  height: '830px',
  justifyContent: 'center',
  backgroundImage: 'url(' + CorkBoard + ')',
  backgroundRepeat: 'repeat',
  imageRendering: 'high-quality',
  overflow: 'auto',
};
function buildCardData() {
  const cardsById = [];
  const cardsByIndex = [];
  for (let i = 0; i < Projects.length; i += 1) {
    const card = {
      id: i,
      image: Projects[i].image,
      title: Projects[i].title,
      text: Projects[i].text,
    };
    cardsById[card.id] = card;
    cardsByIndex[i] = card;
    console.log('id', cardsById);
    console.log('index', cardsByIndex);
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
      <div
        className="Projects"
        style={{
          backgroundColor: 'black',
          border: '5px solid black',
          width: '99.59vw',
          overflow: 'hidden',
        }}
      >
        <div
          className="ProjectsContainer"
          style={{
            background: `url(${Wood})`,
            width: '100vw',
            height: '5vh',
            marginTop: "-15px",
            marginBottom: '10px',
            backgroundPosition: 'center',
            backgroundSize: '170vh 14vh',
            backgroundRepeat: 'repeat'
          }}
        >
          <h1
            className="Title"
            style={{
              paddingTop:"10px",
              color: 'white',
              textAlign: 'center',
            }}
          >
            Projects
          </h1>
        </div>
        <div style={constainerStyle}>
          {cardsByIndex.map((card) => (
            <Card
              // style={{textAlign:"center"}}
              key={card.id}
              id={card.id}
              image={card.image}
              title={card.title}
              text={card.text}
              moveCard={this.moveCard}
            />
          ))}
        </div>
      </div>
    );
  }
  scheduleUpdate(updateFn) {
    this.pendingUpdateFn = updateFn;
    if (!this.requestedFrame) {
      this.requestedFrame = requestAnimationFrame(this.drawFrame);
    }
  }
}
