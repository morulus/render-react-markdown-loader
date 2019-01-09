render-react-markdown-loader
==

This markdown document demonstrates how you can render react modules directly from the markdown code.

Simple render
--

```js{render}
import React from 'react'

export default () => (
  <textarea>Hello, world434324</textarea>
)
```

Import node modules
--

Inside code block you can import any installed module from `node_modules`.

```js{render}
import React from 'react'
import styled from 'styled-components'

const Button = styled.button`
  background-color: #ffc723;
  padding: 10px;
  border: 0;
  border-radius: 6px;
`

export default () => (
  <Button>This button rendered directly from the markdown</Button>
)
```

Import local modules
--

Also you can import or re-export some local module

```js{render}
export { default } from './example.js'
```

Import another markdown file
--

```js{render}
export { default } from './sub.md'
```

Other languages
--

You can configure support for other languages.
Here's Coffee script example.

```coffee{render}
React = require 'react'
helloWorld = -> React.createElement('b', null, 'Hello Coffee!')


module.exports = helloWorld
```
