import React from 'react'

const todoTitle = "Call Family";
const todoDesc = "Coronavirus is an infectious disease and is commonly called Covid-19. It affects the human respiratory system causing difficulty in breathing" ;
const date = new Date();
const dateName = date.getDate();
const monthName = date.getMonth();
const currentYear = date.getFullYear();

 function Home() {
  return (
    <div>
      
       <div className='card'>
        <h3 className='todoTitle'>{todoTitle}</h3>
{/*         
      ১। React-js মুলত বেবেল এর মাধ্যমে কোড গুলোকে javascript এ কনভার্ট করে, এটাকে javascript xml বা jsx বলে ।

      ২। এইচটিএমএল এলিমেন্ট এর মধ্যে আমরা ডায়নামিকালি কারলি ব্রাসেস বা সেকেন্ড ব্র্যাকেট ভিতরে javascript value,variable, array , object অ্যাড করা যায় । 

      ৩। এখানে এইচটিএমএল এলিমেন্ট এ কারলি ব্রাচেস এ লাল কোড গুলো javascript variable . */}
        
        <p className='todoDesc'>{todoDesc}</p>
        <p className='cardFooter'>{dateName +   monthName  + currentYear  }</p>
     </div>
    </div>
  )
}
export default Home;