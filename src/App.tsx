import React, {FC} from "react";
import {Provider} from "react-redux";
import {Home} from "./components/Home/Home";
import store from "./store";

const App: FC = () => {
  return (
    <Provider store={store}>
      <Home />
    </Provider>
  );
};

export default App;
