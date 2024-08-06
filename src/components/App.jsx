import React from "react";
import SocialMediaBar from "./SocialMediaBar";
import NavigationBar from "./NavigationBar";
import HomeElements from "./HomeElements";
import homeData from "../assets/homeData";

function App() {
  return (
    <div className="container">
      <SocialMediaBar />
      <NavigationBar />
      <div className="continut">
        {homeData.map((element) => {
          return (
            <HomeElements
              button={element.title}
              src={element.url}
              alt={element.alt}
              text={element.text}
            />
          );
        })}
      </div>
    </div>
  );
}

export default App;
