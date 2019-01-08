import React from 'react'
import CodeMirror from 'react-codemirror'
import minimalExample from '!raw-loader!./minimalExample.md'
import TopHeadText from '../../components/TopHeadText'
import './styles.css'

export default function DemoCodeExample() {
  return (<div>
    <p className="IntroTextCodeExample">
      <CodeMirror
        value={minimalExample}
        options={{
          mode: 'markdown',
          readOnly: true,
          lineNumbers: false,
          theme: 'example',
          lineWrapping: false
        }}
      />
    </p>
  </div>)
}
