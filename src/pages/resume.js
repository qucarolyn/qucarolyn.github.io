//this file sets up the homepage 
import React from 'react';
import Resume from '/Users/carolynqu/websites/qucarolyn/src/components/images/CQu_Resume.jpg';

function ResumePage() {
  return (
    <div className="content">
      <h1 className="title">
          Resume
      </h1>
      <img src = {Resume} style={{width: 650}} alt='Carolyn Qu Resume' />
      <a href="/Users/carolynqu/websites/qucarolyn/src/components/CQu_Resume.pdf" download="carolyn_qu_resume">
        download PDF version</a>
    </div>
    
  );
}

export default ResumePage;