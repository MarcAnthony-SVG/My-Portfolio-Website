import React from "react";
import CorkBoard from "../../components/OldProjects/images/CorkBoardBackground.jpg";
import { Card } from "./Card";
import Projects from "../../Data/Projects.js";
import update from "immutability-helper";

const constainerStyle = {
  width: "100%",
  display: "flex",
  height: "1000px",
  justifyContent: "center",
  backgroundImage: "url(" + CorkBoard + ")",
  backgroundRepeat: "repeat",
  imageRendering: "high-quality",
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
    console.log("id", cardsById)
    console.log("index",cardsByIndex)

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
      <div className="Projects" style={{ backgroundColor: "goldenrod" , border: '10px solid black' , width: "99%"}}>
        <div className="title">
          <h1>Projects</h1>
          <p>Quote</p>
        </div>
        <div style={constainerStyle}>
          {cardsByIndex.map((card) => (
            <Card
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
