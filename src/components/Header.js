import React from "react";
import styled from "styled-components";

import logo from "./../logo.svg";
import * as Api from "../helpers/Api";
import Loader from "./Loader";

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: undefined,
      isLoading: false
    };
  }

  componentWillMount() {
    this.setState({ isLoading: true });

    Api.loadUser().then(user => {
      this.setState({ user, isLoading: false });
    });
  }

  render() {
    const { user, isLoading } = this.state;

    return (
      <StyledHeader>
        <img src={logo} className="App-logo" alt="logo" height="40" />
        {isLoading ? <Loader /> : <div>Welcome, {user.firstName}</div>}
      </StyledHeader>
    );
  }
}

export default Header;

const StyledHeader = styled.header`
  display: flex;
  align-items: center;
  width: 100%;
  justify-content: space-between;
  height: 70px;
  box-sizing: border-box;
  padding: 0px 20px;
  background: #fff;
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.1);
`;
