import React from "react";
import classes from "./NavigationItems.css";
import NavigationItem from "./NavigationItem/NavigationItem";

const navigationItems = (props) => (
  <ul className={classes.NavigationItems}>
    <NavigationItem clicked={props.clicked} link="/">
      Burger Builder
    </NavigationItem>
    {props.isAuthenticated ? (
      <NavigationItem clicked={props.clicked} link="/orders">
        Orders
      </NavigationItem>
    ) : null}
    {props.isAuthenticated ? (
      <NavigationItem clicked={props.clicked} link="/logout">
        Logout
      </NavigationItem>
    ) : (
      <NavigationItem clicked={props.clicked} link="/auth">
        Authenticate
      </NavigationItem>
    )}
  </ul>
);
export default navigationItems;
