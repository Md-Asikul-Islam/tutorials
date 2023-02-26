
import React from 'react'
import Data from './data.json'

export default function Home() {
    let items = [];
    Data.map((items) => <Home titleText ={items.title}  descText = {items.desc} /> )
  return (
    <div>
       <h1 className='headingStyle'> Todo App</h1>
       {items}
    </div>
  )
}
