import React from 'react'

const users = [
    {
        fullName: "Md Asikul Islam",
        age: 23,
        phones:[
           {
            home: "01301207270"
           },
           {
            office: "01537085183",
           } 
        ]
    },
    {
        fullName: "Md Raisul Islam",
        age: 28,
        phones:[
           {
            home: "01716095510"
           },
           {
            office: "01946139746",
           } 
        ]
    }
]

export default function Home() {
  return (
    <div>
       <h1> Nested Listed </h1>
       {
        users.map((user, index) => <article key={index} >
            <h3>FullName:{user.fullName}</h3>
            <p>Age:{user.age}</p>

            {
                user.phones.map((phone, index) => <div key={index}>
                    <p>Home:{phone.home}</p>
                    <p>office:{phone.office}</p>
                </div>)
            }
        </article> )
       }
    </div>
  )
}

// ****
// ১। জাভাস্ক্রিপ্ট এ বিভিন্ন ধরনের লুপের পরিবর্তে map() or foreach() মেথড ব্যবহার করা হয় ।

// ২। map() মেথডের প্যারামিটারে অ্যাঁরো ফাংশন পাস করতে হয় ।

// map((currentValue, index, arr) => {
//     // code block
// })

// অ্যাঁরো ফাংশনের প্যারামিটারে তিনটি ভ্যালু পাস করা যায় currentValue, index, arr



// ****
