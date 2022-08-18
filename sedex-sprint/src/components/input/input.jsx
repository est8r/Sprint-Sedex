import React from 'react'

const Input = ({value, type, onChange}) => {
  return (
    <input value ={value} type={type}
    onChange={onChange}/>
  )
}

export default Input