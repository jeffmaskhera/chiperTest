import React from "react";
import { Provider, useDispatch } from "react-redux";
import store from "./store";
import AppRouter from "./routes/appRouter";

function App() {
  return (
      <Provider store={store}>
        <AppRouter />
      </Provider>

  );
}

export default App;

