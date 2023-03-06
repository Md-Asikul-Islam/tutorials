import React, { Component } from 'react'

export default class Home extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         count: 0
      }
    }

    increment = () => {
        this.setState({
            count:this.state.count + 1
        })
    }
    decrement = () => {
        this.setState({
            count:this.state.count - 1
        })
    }
    
  render() {
    const {count} = this.state

    return (
      <div className='btn'>
         <h1>count:{count}</h1>
         <button className='inc' onClick={this.increment}>+</button>
         <button className='dec' onClick={this.decrement}>-</button>
      </div>
    )
  }
}


//***/   ১। state হল Component এর নিজস্ব ডাটা  এবং  ডাটা গুলা পরিবর্তন করা যায় ।

// ২। constructor অবজেক্ট এর কোন ডাটা রেনডার ফাংশনে এক্সেস করতে চাইলে (this.state.objectName) দিয়ে  এক্সেস নিতে হবে ।

// ৩। state এর কোন ডাটা পরিবর্তন করতে setState() ফাংশনের মধ্যে করতে হবে ।

// ৪।  class এর ভিতরে কোন মেথড কে এক্সেস করতে অন্য মেথডে এক্সেস করতে চাইলে this.methodName  দিয়ে এক্সেস করতে হবে ।   

// ৫।  // Wrong
// this.setState({
//   counter: this.state.counter + this.props.increment,
// }); এখানে counter: এর পর কখনই this.state ব্যবহার করা যাবে না ।


// তখন এভাবে করতে হবে 
// // Correct
// this.setState(function(state, props) {
//     return {
//       counter: state.counter + props.increment
//     };
//   });

// ৬। setState কোন অবজেক্ট দিলে পূর্বের অবজেক্টএর সাথে তুলনা করে যতটুকই পরিবর্তন হইসে ঠিক ঐ টাই আপডেট করে দিবে বা মারজ করবে


// ******