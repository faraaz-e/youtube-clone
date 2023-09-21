import { Provider } from "react-redux";
import "./App.css";
import Body from "./components/Body";
import Header from "./components/Header";
import store from "./utils/store";

function App() {
  return (
    <Provider store={store}>
      <div className="bg-black">
        <Header />
        <Body />
      </div>
    </Provider>
  );
}

export default App;
