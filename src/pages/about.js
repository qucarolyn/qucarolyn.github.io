//this file sets up the About page 
import React, {Component} from 'react';
import Profile from '/Users/carolynqu/websites/qucarolyn/src/components/images/home/profile.jpeg';
import pod1 from '/Users/carolynqu/websites/qucarolyn/src/components/images/home/profile.jpeg';


class AboutPage extends Component {
  render() {
    return (
      <div className="about">
        <h1 className="title">
          Hi, I'm Carolyn
        </h1>
        <img src = {Profile} style={{width: 100}} alt='Carolyn Qu Profile' />
        
        <div className= "content">
          <h2>About Me</h2>
          <p>
            I am currently an undergraduate student at Stanford University, expected to graduate in 
            June 2024.  I am a prospective CS or Product Design Major (currently undeclared). 
          </p>
          <p>
            Growing up, I had a plethora of seemingly detached interests. While I grew deeply involved 
            in mathematics, computer science, and physics, I also had a deep appreciation and interest 
            in fine arts and art history. Eventually, I noticed that my interests boiled down to problem 
            solving skills and a fascination with details. 
          </p>
          <p>
            I am looking for opportunities where I can contribute to the creation, testing, and 
            implementation of cutting-edge design and software solutions for the future.  I have found 
            computer science to be the greatest intersection of all of my interests, requiring analytical 
            approaches to challenges, but also allowing me to express and develop creative solutions. As 
            computers become an increasingly prevalent part of everyday life, I believe that there is 
            great potential in fine-tuning and further developing our interaction with these machines.
          </p>
          <p>
          I’m also passionate about sustainability and reducing my environmental impact. I believe that 
          it's incredibly important to learn, understand, and appreciate where our food comes from, as 
          well as how to consume while being respectful of the earth. 
          </p>
        </div>

        <div className="Content">
          <h2>Campus Involvement</h2>
          <p>
          At Stanford, I am a member of the Varsity Cheer team, where I am proud to support our mens and 
          women’s basketball, football, volleyball, and gymnastics teams. I am also a ChangHER campus 
          ambassador, working to connect and build a network of female entrepreneurs on Stanford’s campus. 
          </p>
        </div>

        <div className="Content">
          <h2>Hobbies</h2>
          <p>
            In my free time, I can be found in the kitchen or outdoors. As a vegan, I love baking 
            delicious plant-based desserts and treats (so good that you wouldn’t even know they’re dairy 
            free). I am also a nature lover, and I enjoy spending my time hiking, at the beach, or 
            exploring outside!
          </p>
        </div>

        <div className="Content">
          <h2>What Inspires Me</h2>
          <p>
            I find a lot of value in the lifelong pursuit of learning, and I’m always open to new 
            opportunities to gain a deeper understanding of our world. Personally, I’ve loved podcasts 
            for helping me broaden my perspectives. Here are some of my favorites so far: 
          </p>
          <ul>
            {/* 
            <li>
              <img src = {pod1} style={{width: 50}} alt='podcastName' />
              <a href = "" className = "podTitle">Podcast Name</a>
              <p>, by Person Name </p>
              <p>Favorite Episodes: </p>
            </li>
            */}

            <li>
              <img src = {pod1} style={{width: 50}} alt='Podcast Cover' />
              <a href = "" className = "podTitle">99% Invisible</a>
              <p>, by Roman Mars </p>
              <p>Favorite Episodes: 424- The Great Indoors, Perfume: Articles of Interest #9</p>
            </li>

            <li>
              <img src = {pod1} style={{width: 50}} alt='Podcast Cover' />
              <a href = "" className = "podTitle">Hidden Brain</a>
              <p>, by Shankar Vedantam</p>
              <p>Favorite Episodes: Screaming Into a Void, Beyond Doomscrolling</p>
            </li>

            <li>
              <img src = {pod1} style={{width: 50}} alt='Podcast Cover' />
              <a href = "" className = "podTitle">Science VS</a>
              <p>, by Gimlet</p>
              <p>Favorite Episodes: Hunting an Invisible Killer, Lab-Grown Meat: We Grill it</p>
            </li>

            <li>
              <img src = {pod1} style={{width: 50}} alt='Podcast Cover' />
              <a href = "" className = "podTitle">Radio Lab</a>
              <p>, by WNYC </p>
              <p>Favorite Episodes: Insomnia Line, How to Win Friends and Influence Baboons </p>
            </li>

            <li>
              <img src = {pod1} style={{width: 50}} alt='Podcast Cover' />
              <a href = "" className = "podTitle">Today Explained</a>
              <p>, by Vox</p>
              <p>Favorite Episodes: “I can’t breathe.” Again.  </p>
            </li>


          </ul>
        </div>

      </div>
    )
  }
}

export default AboutPage;