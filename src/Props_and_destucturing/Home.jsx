import React from 'react'


const date = new Date();
const dateName = date.getDate();
const monthName = date.getMonth();
const currentYear = date.getFullYear();

// ১। props হল মূলত কোন একটা ফাংশনাল কম্পোনেন্ট এর প্যারামিটারে  props কে পাস করতে হবে ।

// ২। এখন ফাংশন থেকে ভ্যালু প্রিন্ট করতে হলে props.attribute_name দিয়ে কল করতে হবে ।

// ৩। তারপর রেনডার ফাংশন এর return() ভিতরে,  যে <emlement/>  দিয়ে ফাংশনাল কম্পোনেন্ট বা props টা কল হবে তার ভিতরে attribute গুলো পাস করতে হবে।

function Home(props) {

  // ৪। destructuring হল ,
  // const {titleText, descText} = props;
  // এখন আর props.titleText লিখার দরকার নাই শুধু titleText লিখলে ভ্যালু পাস হয়ে যাবে । এটাকেই destructuring বলে।



  return (
    <div>
        <div className='card'>
        <h3 className='cardTitle'>{props.titleText}</h3>
        <p className='cardDesc'>{props.descText}</p>
        <p className='cardFooter'>{dateName + monthName + currentYear}</p>
        </div>
    </div>
  )
}
export default Home;
