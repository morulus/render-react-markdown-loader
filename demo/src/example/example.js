import React from 'react'
import styles from './styles.css'

function getRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

function renderColorBox(color, index) {
  return (
    <div key={color} style={{
      backgroundColor: color
    }} />
  )
}

const colors = Array(20).fill(0).map(getRandomColor)

export default () => (
  <div className="ColorBoxes">
    {colors.map(renderColorBox)}
  </div>
)
