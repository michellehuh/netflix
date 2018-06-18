import React, { Component } from "react";
import { Menu } from "semantic-ui-react";
import MovieInfo from "./MovieInfo";
import MyHistory from "./MyHistory";

class DashboardPage extends Component {
  state = {
    activeTab: "movies"
  };

  handleItemClick = (e, { name }) => this.setState({ activeTab: name });

  render() {
    const { activeTab } = this.state;
    return (
      <div>
        <Menu text inverted>
          <Menu.Item
            name="movies"
            active={activeTab === "movies"}
            onClick={this.handleItemClick}
          />
          <Menu.Item
            name="myHistory"
            active={activeTab === "myHistory"}
            onClick={this.handleItemClick}
          />
        </Menu>
        {activeTab === "movies" && <MovieInfo />}
        {activeTab === "myHistory" && <MyHistory />}
      </div>
    );
  }
}
export default DashboardPage;
