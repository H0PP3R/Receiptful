import * as React from "react";
import Hello from "./components/hello";

export default class App extends React.Component {
    render() {
        return (
          <div>
            <h1>Hello from React</h1>
            <Hello compiler="Typescript" framework="asdf" />
          </div>
        );
    }
}
