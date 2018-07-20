import React, { Component, Fragment } from 'react'

import Header from './Header.js'
import Image from './Image.js'

class App extends Component {
  render() {
    return(
      <Fragment>
        <Header name="Artashesh" lastName="Geghamyan"/>
        <Image imageSrc="https://upload.wikimedia.org/wikipedia/commons/3/36/Hopetoun_falls.jpg"/>
        <Header name="Gurgen" lastName="Geghamyan"/>
        <Image imageSrc="https://upload.wikimedia.org/wikipedia/commons/8/8f/Bachalpsee_reflection.jpg"/>
        <Image imageSrc="https://upload.wikimedia.org/wikipedia/commons/5/57/Galunggung.jpg"/>
      </Fragment>
    )
  }
}

export default App
