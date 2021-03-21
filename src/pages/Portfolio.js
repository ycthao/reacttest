import React, { Component } from "react";
import PortfolioCard from "../components/PortfolioCard/portfolioCard";
import Wrapper from "../components/Wrapper/index";
import plists from "../plist.json";

class Portfolio extends Component {
  state = {
    plists
  };
  render() {
    return (
      <Wrapper>
        {this.state.plists.map((plist) => (
          <PortfolioCard
            id={plist.id}
            key={plist.id}
            name={plist.name}
            image={plist.image}
            description={plist.description}
            technology={plist.technology}
            github={plist.github}
            deployed={plist.deployed}
          />
        ))}
      </Wrapper>
    );
  }
}

export default Portfolio;
