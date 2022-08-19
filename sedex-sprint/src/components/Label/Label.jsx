import React from 'react'

const Label = ({texto}) => {
  return (
    <label htmlFor={texto}>{texto}</label>
  )
}

export default Label