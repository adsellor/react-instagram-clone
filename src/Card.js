import React, {Fragment} from 'react'

// Local import
import Header from './Header.js'
import Image from './Image.js'
import { imageData } from './data.js'


const mappedImages = () => {
  return imageData.user1.image
}
const Card = () => {
    console.log(mappedImages())
   return (
      <Fragment>
        <Header name='Placeholder' lastname="Lastname Placeholder"/>
        {mappedImages()}
      </Fragment>
   )
}

export default Card

