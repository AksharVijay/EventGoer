import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./components/Home/Home";
import EventDetails from "./components/EventDetails/EventDetails";
import GeneralBooking from "./components/GeneralBooking/GeneralBooking";
import AllotedSeated from "./components/AllotedSeated/AllotedSeated";
import Checkout from "./components/Checkout/Checkout";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/:title" exact children={<EventDetails />}></Route>
          <Route path="/GeneralBooking" exact>
            <GeneralBooking />
          </Route>
        </Switch>

        {/* <EventDetails /> */}
        {/* <GeneralBooking /> */}
        {/* <AllotedSeated /> */}
        {/* <Checkout /> */}
      </div>
    </BrowserRouter>
  );
}

export default App;
