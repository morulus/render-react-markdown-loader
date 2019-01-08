import React, { Component } from 'react'
import CodeMirror from 'react-codemirror'
import ReactMarkdown from 'react-markdown'
import styled from 'styled-components'
import recompose from 'recompose'
import GithubCorner from './components/GithubCorner'
import TopHeadText from './components/TopHeadText'
import Shell from './components/Shell'
import SyntaxPoster from './components/SyntaxPoster'
import Maintainer from './components/Maintainer'
import DemoCodeExample from './chunks/DemoCodeExample'
import RapidTips from './chunks/RapidTips'
import 'github-markdown-css/github-markdown.css'
import 'codemirror/lib/codemirror.css'
import 'codemirror/theme/neo.css'
import 'codemirror/theme/shadowfox.css'
import 'codemirror/mode/jsx/jsx'
import 'codemirror/mode/markdown/markdown'
import './styles.css'
import webpackConfigCode from '!raw-loader!./example/webpackConfigCode'

import Error from './Error'
const originalRequire = require;

import loaderRunner from './loader-runner'

function resolveRequireC(request) {
  return __webpack_require__.c[request]
    ? __webpack_require__.c[request].exports
    : {}
}

const cachedModules = {
  react: React,
  ["styled-components"]: styled,
  recompose: recompose,
  ["react-markdown"]: ReactMarkdown,
  "./example.js": require("./example/example.js"),
  "./sub.md": require("./example/sub.md")
}

export default class Demo extends Component {
  constructor(props) {
    super(props)
    this.state = {
      error: null,
      Document: this.props.Doc
    }
    this.errorHandler = (e) => {
      this.setState({
        error: e.message
      })
    }
    this.changeHandler = (nextContent) => {
      try {
        const result = loaderRunner(nextContent)

        const module = {
          exports: null
        }

        /* The require fn which return only react */
        const require = function mockRequire(request) {
          let targetModule;
          if (cachedModules[request]) {
            targetModule =  cachedModules[request];
          } else {
            targetModule = process.env.NODE_ENV === 'production'
              ? __webpack_require__(request)
              : resolveRequireC(request);
          }

          return targetModule.default || targetModule;
        }
        try {
          eval(result)
          const Componental = module.exports;
          this.setState({
            error: null,
            Document: module.exports
          })
        } catch(e) {
          this.setState({
            error: e.message
          })
        }
      } catch (e) {
        return this.setState({
          error: e.message
        })
      }
    }
  }
  componentDidCatch(error, errorInfo) {
    this.setState({
      error: errorInfo
    })
  }
  render() {
    const { source } = this.props;
    const { Document, error } = this.state;
    return (
      <div className="Container">
        <div className="Header">
          <h1>{`<`}<i>#</i>{`>`} render-react-markdown-loader</h1>
        </div>
        <div className="Contents">
          <SyntaxPoster />
          <div className="Intro Blocks">
            <div>
              <TopHeadText>
                <p>The <a href="https://webpack.js.org">Webpack</a> <a href="https://webpack.js.org/loaders/">loader</a> for transform markdown document into <a href="https://reactjs.org/">React</a> component.</p>
              </TopHeadText>
              <TopHeadText>
                <p>Powered by <a href="https://github.com/rexxars/react-markdown">React markdown</a>, extends the base markdown syntax with the ability to render React modules, described in <code className="inline">```</code> block, just by adding <code className="inline">{`js{render}`}</code> flag.</p>
              </TopHeadText>
              <TopHeadText>New syntax does not conflict with the markdown specification, but gives your document new superpowers.</TopHeadText>
            </div>
            <div>
              <DemoCodeExample />
            </div>
          </div>
          <div className="Blocks">
            <div>
              <div className="Article">
                <h2>## Install</h2>
                <div>
                  <TopHeadText>
                    <Shell>{`yarn add render-react-markdown-loader --dev`}</Shell>
                  </TopHeadText>
                </div>
              </div>
              <div className="Article">
                <h2>## Configure</h2>
                <div className="CodeExample">
                  <CodeMirror
                    value={webpackConfigCode}
                    options={{
                      mode: 'javascript',
                      readOnly: true,
                      lineNumbers: false,
                      theme: 'example',
                      lineWrapping: false
                    }}
                  />
                </div>
              </div>
            </div>
            <RapidTips />
          </div>
          <div className="Footer">
            <summary>To learn more about its capabilities visit official GitHub repo of loader.</summary>
            <a href="https://github.com/morulus/render-react-markdown-loader">
              <button>Go to repo</button>
            </a>
          </div>
        </div>
        <div className="Contents Playground">
          <h2>## Try it</h2>
          <div className="Demo">
            <div className="Code">
              <CodeMirror
                value={source}
                onChange={this.changeHandler}
                options={{
                  mode: 'markdown',
                  lineNumbers: true,
                  theme: 'neo',
                  lineWrapping: true,
                  height: '100%'
                }}
              />
            </div>
            <div className="Content markdown-body">
              <div className="Whiteboard">
                {!error && <Document
                  onCatch={this.errorHandler}
                />}
                {error && <Error>{error}</Error>}
              </div>
            </div>
          </div>
        </div>
        <div className="Contents">
          <div className="Blocks">
            <div>
              <h2>## Maintainers</h2>
              <Maintainer
                name="morulus"
              />
            </div>
            <div>
              <h2>## License</h2>
              <p>MIT, 2019</p>
            </div>
          </div>
        </div>
        <GithubCorner />
      </div>
    )

  }
}
