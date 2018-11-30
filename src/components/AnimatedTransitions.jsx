import React from "react";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect
} from "react-router-dom";

import { DefaultTheme as theme } from '../assets/styles/css/NeptuneDefaultTheme';
import { AnimatedRGB } from '../components/hocs/AnimatedTransitions/AnimatedRGB'
/* you'll need this CSS somewhere
.fade-enter {
  opacity: 0;
  z-index: 1;
}

.fade-enter.fade-enter-active {
  opacity: 1;
  transition: opacity 250ms ease-in;
}
*/

import {hexToRgb} from '../utils/helperFunctions'

import CompareProducts from '../components/lib/productComparison/CompareProducts'
import { Monitor } from '../components/lib/bitcoinMonitor/Monitor';

const title = ()=><div>Product Comparison</div>
const gamification = ()=><div>Gameify participation in your business</div>
const collaborativeRecords = ()=><div>Manage and collaborate on forms</div>


const styles = {};

styles.fill = {
  position: "absolute",
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
};

styles.content = {
  ...styles.fill,
  top: "40px",
  textAlign: "center"
};

styles.nav = {
  padding: 0,
  margin: 0,
  position: "absolute",
  top: 0,
  height: "40px",
  width: "100%",
  display: "flex"
};

styles.navItem = {
  textAlign: "center",
  flex: 1,
  listStyleType: "none",
  padding: "10px"
};

styles.hsl = {
  ...styles.fill,
  color: "white",
  paddingTop: "20px",
  fontSize: "30px"
};

styles.rgb = {
  ...styles.fill,
  color: "white",
  paddingTop: "20px",
  fontSize: "30px"
};


const AnimatedTransitions = () => {
  return (
    <Router>
      <Route
        render={({ location }) => (
          <div style={styles.fill}>
            <Route
              exact
              path="/"
              render={() => <Redirect to="productComparison" />}
            />

            <ul style={styles.nav}>
              <NavLink to="/productComparison">Product Comparison</NavLink>
              <NavLink to="/bitCoinMonitor">Bitcoin Monitor</NavLink>
              <NavLink to="/gamify">Gamified Participation</NavLink>
              <NavLink to="/records">Legal Records</NavLink>

            </ul>

            <div style={styles.content}>
              <TransitionGroup>
                {/* no different than other usage of
                CSSTransition, just make sure to pass
                `location` to `Switch` so it can match
                the old location as it animates out
                */}
                <CSSTransition
                  key={location.key}
                  classNames="fade"
                  timeout={300}
                >
                  <Switch location={location}>
                    <Route exact path="/productComparison"  component={AnimatedRGB(CompareProducts, {...styles, bgColor: hexToRgb(theme.colors.blue)})}></Route>
                    <Route exact path="/bitCoinMonitor"  component={AnimatedRGB(Monitor, {...styles, bgColor: hexToRgb(theme.colors.primary)})}></Route>
                    <Route exact path="/gamify"  component={AnimatedRGB(gamification, {...styles, bgColor: hexToRgb(theme.colors.secondary)})}></Route>
                    <Route exact path="/records"  component={AnimatedRGB(collaborativeRecords, {...styles, bgColor: hexToRgb(theme.colors.red)})}></Route>

                    <Route render={() => <div>Not Found</div>} />
                  </Switch>
                </CSSTransition>
              </TransitionGroup>
            </div>
          </div>
        )}
      />
    </Router>
  );
}

function NavLink(props) {
  return (
    <li style={styles.navItem}>
      <Link {...props} style={{ color: "inherit" }} />
    </li>
  );
}

export default AnimatedTransitions;