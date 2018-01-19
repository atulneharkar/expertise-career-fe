import React, { Component } from 'react';
import SocialShare from '../../_components/SocialShare';

import maheshImg from '../../assets/images/mahesh.jpg';
import ieltsScoring from '../../assets/images/ielts-scoring.png';
import ieltsAcademicReadingScores from '../../assets/images/ielts-academic-reading-scores.jpg';
import ieltsMain from '../../assets/images/ielts-main.jpg';

class BlogList extends Component {
  render() {
    return (
      <div className="wrapper blog-wrapper clearfix">
        <h2 className="page-heading">Blogs</h2>

        <div className="article-wrapper">
        	<div className="articles">
        	  <div className="article-content">
        	    <div className="author-details">
        	    	<img src={maheshImg} alt="author" className="author-image" />
        	    	<div className="author-description">
        	    		<p>Mahesh Shinde</p>
						<p>Working IN MNC  IT,  based in Mumbai</p>
						<p>5+ years in digital design as Sr. UX</p>
						<p>Industrial designer from NID | Mechanical Engg</p>
        	    	</div>
        	    </div>

                <h2 className="article-title">How to score 7.5+ in IELTS with just 40 days of preparation?</h2>

        	    <img src={ieltsMain} alt="ielts main" className="main-img" />
        	    <p>
	        	    I belong to design industry and I work in IT domain. My work is mostly facing clients and consulting. 
	        	    I was pretty much sure that my listeninig skills will be unbeatable until I gave my sample listening test. 
	        	    ( later in article you will find how I felt about this in my first week of practice )
        	    </p>
        	    <p>
	        	    Scoring in IETS is a task. Especially when you have to achieve certain rating to meet your educational or 
	        	    professional goals. IELTS has 4 parts Listening, Reading, Speaking and Writing
        	    </p>
        	    <p>
	        	    My perspective , Listening is the toughest one. Then comes the Reading. Those who are familiar with english with 
	        	    their curriculum can manage to get 7 to 7.5 in writing and speaking with moderate brush up or practice.
	              However, to achive good score in listening and readingis the toughest part of the test.
							</p>
        	    <p>
        	    	I started preparing for my IELTS and my goals were, Listening 8,  Reading 7.5, Writing 7 or 7.5 and Speaking 7.5
								Here is how I achieved exact score that I aimed for within 1.5 months of preparation.
        	    </p>
        	    <div className="score-images clearfix">
	        	    <img src={ieltsAcademicReadingScores} alt="ielts academic reading scores" />
	        	    <img src={ieltsScoring} alt="ielts scoring" />
        	    </div>
        	  </div>
        	  <h3 className="sub-title">Getting Started</h3>
        	  <p>
        	  	Step 1 - Book your test date here at <a href="https://ielts.britishcouncil.org/?_ga=2.264412107.513907514.1515516800-1774548538.1515516800" target="_blank">
        	  		https://ielts.britishcouncil.org/?_ga=2.264412107.513907514.1515516800-1774548538.1515516800
        	  	</a>
        	  </p>
        	  <p>
        	    Step 2 - Give a sample test from the study material which you will receive once you sign up and book a test.
        	  </p>
        	  <h3 className="sub-title">Plan your time distribution based on your weak areas</h3>
        	  <p>
        	  	Once you get your scores on each test, analyze them and find out your weak and strong areas.
							The section in which you score the lowest is the one you need to focus most of your attention.
							The sections where you are scoring lets say 25 or 30 out of 40 will require gradual practice too. 
							In my sample listening test, I scored 20/40 in my Listening test. I was devastated!! but it gave me a useful insight that 
							I need to focus most of my time to priority wise 1.Listening 2. Reading and 3. Writing and speaking comes later.
        	  </p>
        	  <h3 className="sub-title">Sources of material for practice</h3>
        	  <ol>
        	  	<li>
        	  		Brtish Cousel booklet with CD. ( listening and reading ) 
        	  	</li>
        	  	<li>
        	  		Barron's IELTS book from the bookstore, costs Rs. 400/- ( * I recommend this book as it gives great tips to 
        	  		help you focus on the tricks and do's / dont's. ) 
        	  	</li>
        	  	<li>
        	  		Youtube Test ( Latest tests ) Listening -  I gave more than 30 test / Reading - more than 20 Tests and Writing - Roughly 3 -4 
        	  		tests. For listening I averaged out my score for last 10 test and it was between 30 out of 40 to 37 out of 40. 
        	  		This gives you fair idea about what you can expect out of your final scores in exam.
        	  	</li>
        	  	<li>
        	  		Youtube Speaking skill Videos help you to prepare for speaking test. ( In my next article I will write on what to focus while you speak. ) 
        	  	</li>
        	  </ol>
        	  <p>I will share more detailed tips in my upcoming article on what to focus on.</p> 
        	  <p>Don't forget to share if you like this article.</p>
        	  <SocialShare shareUrl="https://skillunfold.com/blogs" title="skillunfold - We build websites, mobile apps and also provide coaching in web technologies" />
        	</div>

        </div>

      </div>
    );
  }
}

export default BlogList;
