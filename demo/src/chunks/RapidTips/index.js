import React from 'react'
import "./styles.css"

function CodeBlock({ children }) {
  return (
    <div className="CodeBlock">
      {children}
    </div>
  )
}

export default () => (
  <div>
    <div className="RapidTips">
      <h2>## Syntax tips</h2>
      <CodeBlock>
        <code>{'```{render}'}</code> - render exported by code module as React component
      </CodeBlock>
      <CodeBlock>
        <code>{'```{render+}'}</code> - render exported by code module as React component and display it's source code
      </CodeBlock>
      <CodeBlock>
        <code>{'```{eval}'}</code> - just eval javascript code
      </CodeBlock>
      <CodeBlock>
        <code>{'```{jsx}'}</code> - render code as pure JSX
      </CodeBlock>
    </div>
  </div>
)
