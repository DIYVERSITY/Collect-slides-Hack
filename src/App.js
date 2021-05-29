import { BrowserRouter, Route, Switch } from "react-router-dom";
import MainLayout from "./Layouts/MainLayout";
import Home from "./pages/Home/Home";
import Confirm from "./pages/Confirm/Confirm";
import Success from "./pages/Success/Success";

function App() {
  return (
    <BrowserRouter>
      <Route exact path={["/", "/confirm", "/success"]}>
        <MainLayout>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/confirm" component={Confirm} />
            <Route exact path="/success" component={Success} />
          </Switch>
        </MainLayout>
      </Route>
    </BrowserRouter>
  );
}

export default App;
