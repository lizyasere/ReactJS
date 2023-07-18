/*when you hear the term Card component, it generally means container look with rounded corners, drop shadows and elements*/
//Whenever you combine components, You are using Composition

import "./Card.css";

const Card = (props) => {
  const classes = "card " + props.className;
  return <div className={classes}>{props.children}</div>;
};

export default Card;
