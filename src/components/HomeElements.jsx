import React from "react";
import { View, Image, StyleSheet } from "react-native";

function HomeElements(props) {
  return (
    <div className="card">
      <button className="button">{props.button}</button>
      <Image className="card-image" source={""} />
      <div className="card-description">
        <p>{props.text}</p>
      </div>
    </div>
  );
}

export default HomeElements;
