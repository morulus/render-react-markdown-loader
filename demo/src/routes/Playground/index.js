/* global __webpack_require__:false */
import React, {
  Component
} from "react";
import throttle from "lodash/throttle";
import CodeMirror from "react-codemirror";
import PageSkeleton from "containers/PageSkeleton";
import Document from "src/example/index.md";
import ReactMarkdown from "react-markdown";
import styled from "styled-components";
import * as recompose from "recompose";
import documentSource from "!raw-loader!src/example/index.md";
import loaderRunner from "./loader-runner";
import Error from "./Error";
import "./styles.css";

function resolveRequireC(request) {
  return __webpack_require__.c[request]
    ? __webpack_require__.c[request].exports
    : {};
}

const cachedModules = {
  react: React,
  "styled-components": styled,
  recompose,
  "react-markdown": ReactMarkdown,
  "./example.js": require("src/example/example.js"),
  "./sub.md": require("src/example/sub.md")
};

export default class Playground extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      Document
    };
    this.errorHandler = e => {
      this.setState({
        error: e.message
      });
    };
    /* eslint-disable no-unused-vars */
    /* eslint-disable no-undef */
    /* eslint-disable no-eval */
    this.changeHandler = throttle(nextContent => {
      try {
        const result = loaderRunner(nextContent);

        const module = {
          exports: null
        };

        /* The require fn which return only react */
        const require = function mockRequire(request) {
          let targetModule;

          if (cachedModules[request]) {
            targetModule =  cachedModules[request];
          } else {
            targetModule = process.env.NODE_ENV === "production"
              ? __webpack_require__(request)
              : resolveRequireC(request);
          }

          return targetModule.default || targetModule;
        };

        try {
          eval(result);
          const Componental = module.exports;

          this.setState({
            error: null,
            Document: module.exports
          });
        } catch (e) {
          this.setState({
            error: e.message
          });
        }
      } catch (e) {
        return this.setState({
          error: e.message
        });
      }
    }, 100);
  }

  componentDidCatch(error, errorInfo) {
    this.setState({
      error: errorInfo
    });
  }

  render() {
    const {
      Document, error
    } = this.state;

    return (
      <PageSkeleton fixed>
        <div className="Playground">
          <div className="PlaygroundBoards">
            <div className="Code">
              <CodeMirror
                value={documentSource}
                onChange={this.changeHandler}
                options={{
                  mode: "markdown",
                  lineNumbers: true,
                  theme: "tryout",
                  lineWrapping: true,
                  height: "100%"
                }}
              />
            </div>
            <div className="Content">
              <div className="Whiteboard markdown-body">
                {!error && <Document
                  onCatch={this.errorHandler}
                />}
                {error && <Error>{error}</Error>}
              </div>
            </div>
          </div>
        </div>
      </PageSkeleton>
    );
  }
}
