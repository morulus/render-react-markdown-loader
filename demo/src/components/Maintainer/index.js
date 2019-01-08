import React from 'react'
import styles from './styles.css'

export default ({ name }) => (
  <div className="Maintainer">
    <div>
      <img src={`https://avatars.githubusercontent.com/${name}`} />
      <a href={`http://github.com/${name}`}>@{name}</a>
    </div>
  </div>
)
