import React from 'react'

function Text({style, children}) {
  return (
    <div>
      <h1 style={style} className="text">
      {children}
      </h1>
      
    </div>
  )
}

export default Text;
