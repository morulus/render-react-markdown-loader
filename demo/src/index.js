import Doc from './example/index.md'
import docRaw from '!raw-loader!./example/index.md'
import Demo from './Demo';
import React from 'react'
import ReactDom from 'react-dom'

ReactDom.render(
  <Demo source={docRaw} Doc={Doc} />,
  document.getElementById('root')
)
