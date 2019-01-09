License text
==

```js{render}
import React from 'react'
import styled from 'styled components'
import License from './LICENSE.md'

const Paper = styled.div`
  background: white;
  padding: 20px;
  border: 1px gray solid;
`

export default () => (
  <Paper>
    <License />
  </Paper>
)
```
