import React from 'react';
import Topnav from '../Templates/Topnav'
function About() {
  return (
    <div className='bg-[#071013] text-zinc-200 relative overflow-x-hidden'>
      <div className='mt-5 absolute  ml-[100px] w-screen '>
      <Topnav/>
      </div>
      <section className='mt-[10%]'>
        <h1 className='text-5xl m-6 mx-16 text-[#3C887E]'>About  FilmFusion</h1>
        <div className='mx-16'>
          <p>
            Welcome to FilmFusion ! As the developer behind this project, I'm excited to share with you what this app is all about and how it came to be.
          </p>
          <p>
            I've built this app with a deep passion for movies and a commitment to providing fellow movie enthusiasts with a top-notch movie-watching experience. Every aspect of this app, from its design to its functionality, has been meticulously crafted to ensure a seamless and enjoyable user experience.
          </p>
          <p>
            As a solo developer, I've poured countless hours into developing and refining this app, striving to create a platform that caters to the diverse tastes and preferences of our users. Whether you're into action-packed blockbusters, heartwarming dramas, or thought-provoking documentaries, our movie app has something for everyone.
          </p>
        </div>
      </section>

      <section>
        <h1 className='About_h1 text-5xl m-6 mx-16 text-[#3C887E]'>Key Features</h1>
        <div className='mx-16'>
          <ul className="list-disc ml-6">
            <li>Discover trending movies</li>
            <li>Explore popular titles</li>
            <li>Find detailed information about movies, TV shows, and people in the industry</li>
            <li>Watch trailers and teasers</li>
            <li>Stay updated with the latest releases</li>
            <li>Personalized recommendations based on your interests</li>
          </ul>
        </div>
      </section>

      <section>
        <h1 className='About_h1 text-5xl m-6 mx-16 text-[#3C887E]'>Connect with Me</h1>
        <div className='mx-16'>
          <p>
            I'm always eager to hear from users like you! Whether you have feedback, questions, or just want to chat about movies, don't hesitate to reach out to me using the contact details below:
          </p>
          <p>
            Email: syedfaraz173@gmail.com<br />
            Phone: +917517543076<br />
            LinkedIn: www.linkedin.com/in/syed-israr<br />
            GitHub: github.com/syed1israr
          </p>
        </div>
      </section>
    </div>
  );
}

export default About;
