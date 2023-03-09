import React, { Component } from 'react'
import About from './About'
import LogginPage from './LogginPage'
export default class Home extends Component {
constructor(props) {
  super(props)

  this.state = {
     isLoggedIn: true,
  }
}
  render() {
let {isLoggedIn} = this.state
let element;

   if(isLoggedIn){
    element =  <About/>
   }
   else{
    element =  <LogginPage/>
   }
   return(
    <div>
      {element}
      
    </div>
   )
  }

}


// *****
// ১। কন্ডিশনাল রেনডারিং এর ক্ষেত্রে  if and else কন্ডিশন return এর বাইরে লিখতে হবে ।

// ২। টারনারি অপারেটর ব্যাবহার করলে  return এর ভিতরে  লিখতে হবে ।
// {element = isLoggedIn ? <About/> : <LogginPage/>}

// ৩। লজিকাল অপারেটর and , or , not রিটার্ন ভিতরে ব্যবহার করতে হবে ।

// *****

