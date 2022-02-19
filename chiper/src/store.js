import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import { loadUser } from "redux-oidc";
import reducer from "./modules/reducer";
import userManager from "./userManager";

const composeEnhancer =
    (process.env.NODE_ENV !== "production" &&
        window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
    compose;
const persistedState = localStorage.getItem("state")
    ? JSON.parse(localStorage.getItem("state"))
    : [];

const store = createStore(
    reducer,
    persistedState,
    composeEnhancer(applyMiddleware(thunk))
);

store.subscribe(() => {
    localStorage.setItem("state", JSON.stringify(store.getState()));
});

loadUser(store, userManager);

export default store;