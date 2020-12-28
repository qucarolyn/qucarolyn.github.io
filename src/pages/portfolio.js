//this file sets up the portfolio page 
import React from 'react';

function PortfolioPage() {
  return (
    <div className="content">
      <h1 className="title">
          Portfolio
      </h1>
      <div className="section">
        <h2>My Work</h2>
        <ul>
          {/* //blank entry: _---- denotes something that needs to be changer
          <li className = "p_entry">
            <h3> _ProjectName |
              <a href = "">_link</a>
            </h3>
            <p className = "p_date"> _date </p>

            <p className = "p_mission"> 
              _text here
            </p>
            <p className ="p_tasks">
            _role
              <ul>
                <li>_tasks</li>
              </ul>
            </p>
          </li>
          */}

          <li className = "p_entry">
            <h3> Virtual Companions | 
              <a href = "/www.virtualcompanions.org/login">www.virtualcompanions.org/login</a>
            </h3>
            <p className = "p_date"> 11/2020 </p>

            <p className = "p_mission"> 
              The mission of Virtual Companions is to promote intergenerational mental health 
              awareness and contact through various programs and events.
            </p>
            {/* Add in image right here*/}
            <p className ="p_tasks">
            Web Development and UI/UX Design
              <ul>
                <li>Design web page flow for login page through WIX and WIX developer </li>
                <li>Implement and test jQuery and JavaScript to maintain user database and action events</li>
                <li>Manage front-end code for partnerships, programs , to-do list, phone pals, and pen pals pages</li>
              </ul>
            </p>
          </li>

          <li className = "p_entry">
              <h3> Filtered Search Engine | 
                <a href = "qucarolyn.github.io/search_engine/">qucarolyn.github.io/search_engine/</a>
                </h3>
              <p className = "p_date"> 10/2020 </p>

              <p className = "p_mission"> 
                Created for the Capital One Software Engineering Summit (SES). Github Repository
                </p>
            <p className ="p_tasks">
              Independent Project
               <ul>
                <li>Coded a web application that allows users search for, filter, and sort breaking news in 
                  entertainment, sports, and technology</li>
                <li>Created using HTML/CSS/JavaScript</li>
                <li>Handled API key and JSON requests, given news data from NewsAPI </li>
                </ul>
              </p>
            </li>

            <li className = "p_entry">
              <h3> Create and Learn | 
              <a href = "TODO: FIX ">Student Account</a>
            </h3>
            <p className = "p_date"> 06/2020 - 08/2020</p>

            <p className = "p_mission"> 
              Create and Learn’s mission is to offer computer science curriculum remotely to students 
              grades 2-9. 
            </p>
            {/* Add in image right here*/}
            <p className ="p_tasks">
            Product Management and UX/UI Design
              <ul>
                <li>Prototyped webpage workflow in WIX for: </li>
                  <ul>
                    <li>Public portfolio: page for students to submit and share coding projects on 
                      account platform</li>
                    <li>Account Page: homepage for Students and parents ot manage classes, schedule 
                      and portfolio</li>
                  </ul>
                <li>Organized Online Coding Fair and content, including Facebook Ads, Emails, and 
                  Blogpost</li>
              </ul>
            </p>
            <p className ="p_tasks">
            Graphic Design (canva)
              <ul>
                <li>Monogram Icons - for Student Profile Photos</li>
                {/* Add image carousel*/}
                <li>Class Badges - for Recognition of Class Completion </li>
                {/* Add image carousel*/}
                <li>Coding Fair Graphics - for Online Coding Fairs, Facebook Advertisments, and other ditigal media </li>
                {/* Add image carousel*/}
              </ul>
            </p>
          </li>
          </ul>

      </div>

      <div className="section">
        <h2>Relevant Courses</h2>
        <p> Stanford University</p>
        <p> Completed Coursework: </p>
        <ul>
          <li>CS 107: Computer Organization & Systems (Spring 2020)</li>
          <li>CS103: Mathematical Foundations of Computing (Spring 2020)</li>
          <li>CS106B: Programming Abstractions (Fall 2019)</li>
          <li>Math51: Linear Algebra and Multivariable Calculus (Winter 2020)</li>
          <li>PSYCH1: Introduction to Psychology (Winter 2020)</li>
        </ul>
        <p>Intending Coursework:</p>
        <ul>
          <li>CS109: Probability for Computer Scientists</li>
          <li>ME101: Visual Thinking</li>
        </ul>
      </div>

      <div className="section">
        <h2>Skills </h2>
          <ul> 
            <li> C </li>
            <li> C++ </li>
            <li> Java </li>
            <li> JavaScript </li>
            <li> React </li>
            <li> WIX and Wix Developer</li>
            <li> HTML/CSS </li>
            <li> Unix/Linux </li>
            <li> command line</li>
          </ul>
      </div>

    </div>
    
  );
}

export default PortfolioPage;