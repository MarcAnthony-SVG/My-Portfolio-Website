import React, { memo, useMemo, useRef } from "react";

import { useDrag, useDrop } from "react-dnd";
import { ItemTypes } from "../../Utilities/ItemTypes";

const cardStyle = {
  border: "1px solid black",
  width: "70%",
  height: "70%",
  margin: "1%",
  padding: "0.5rem 1rem",
  backgroundColor: "white",
  cursor: "move",
  overflow: "auto",
};
export const Card = memo(({ id, text, title, image, moveCard }) => {
  const ref = useRef(null);
  const [{ isDragging }, connectDrag] = useDrag({
    item: { id, type: ItemTypes.CARD },
    collect: (monitor) => {
      const result = {
        isDragging: monitor.isDragging(),
      };
      return result;
    },
  });
  const [, connectDrop] = useDrop({
    accept: ItemTypes.CARD,
    hover({ id: draggedId }) {
      if (draggedId !== id) {
        moveCard(draggedId, id);
      }
    },
  });
  connectDrag(ref);
  connectDrop(ref);
  const opacity = isDragging ? 0 : 1;
  const containerStyle = useMemo(() => ({ ...cardStyle, opacity }), [opacity]);
  return (
    <div ref={ref} style={containerStyle}>
      <img src={image} alt="img" style={{ height: "45%", width: "auto" }}/>
      <h3 style={{ textAlign: "center" }}>{title}</h3>
      {text}
    </div>
  );
});
