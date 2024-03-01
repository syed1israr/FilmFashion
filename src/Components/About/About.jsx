import React from 'react'
import Topnav from '../Templates/Topnav'




function About() {
  return (
       
    <div className='bg-[#071013] text-zinc-200'>
   <Topnav/>
    <section className='mt-[10%]'>
    <h1 className='text-5xl m-6 mx-16 text-[#3C887E] ' >About Us</h1>
    <div className=' mx-16' >
        <p>GreenScapes Restaurants is a Pune-based restaurant that serves dinner. We are committed to providing our guests with a unique and memorable dining experience, using fresh, high-quality ingredients and creative dishes. Our menu features a variety of Indian and international cuisine, all made with care and attention to detail.

We believe that food is more than just nourishment; it is a way to connect with others and celebrate life. That's why we create a warm and inviting atmosphere at our restaurants, where guests can relax and enjoy a delicious meal with friends and family.

Whether you're looking for a romantic dinner for two or a casual meal with friends, GreenScapes Restaurants is the perfect place to experience the best of Pune dining. We invite you to come and see for yourself why we're the preferred choice for dinner in Pune.</p>
    </div>
    </section>
    <section>
    <h1 className='About_h1 text-5xl m-6 mx-16 text-[#3C887E]  '>Our commitment to sustainability</h1>
    <div>
    <p className='mx-16' >At GreenScapes Restaurants, we are committed to sustainability. We use locally sourced ingredients whenever possible, and we compost all of our food waste. We also have a rainwater harvesting system in place, and we use energy-efficient appliances and lighting. <br />We believe that it is important to give back to the community, and we support a number of local charities. We also offer a number of sustainable initiatives in our restaurants, such as using paper straws and compostable utensils.</p>

    </div>
    </section>
    <section>
    <h1 className='About_h1 text-5xl m-6 mx-16 text-[#3C887E]  '>Our commitment to our guests</h1>
    <div>
        <p className='mx-16' >At GreenScapes Restaurants, we are committed to providing our guests with a memorable dining experience. We offer a variety of dishes to choose from, all made with fresh, high-quality ingredients. We also have a team of experienced and friendly staff who are dedicated to making sure that your dining experience is enjoyable.</p>
    </div>
    </section>
  
  
    </div>
  )
}

export default About