import React from 'react'

function Icon({iconName, size}) {
  return (
    <img src={`/icons/${iconName}.svg`} width={size}/>
  )
}

Icon.defaultProps = {
    size: '30px'
}

export default Icon
