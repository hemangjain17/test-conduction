import React from 'react'
import cross from './cross.png';
const CrossBtn = ({index , id , deleteOption}) => {
  return (
    <div className ="option-delete-btn" onClick={() => deleteOption(index , id)}>
      <img src = {cross} className = "cross-btn-image"/>
    </div>
  )
}

export default CrossBtn
