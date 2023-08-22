import React from 'react';
import ReactDOM from 'react-dom';
import css from './index.css'
function Hi() {
  return <div className='main'>
<div className='sidebar'>
    <div className="contents">
<h2 className='abc'>Contact</h2>
<hr className='abc'/ >
<h4 className='abc'>Phone</h4>
<p className='abc'>03343916764</p>
<h4 className='abc'>Email</h4>
<p className='abc'>faraztariq12123@gmail.com</p>
<h4 className='abc'>Address</h4>
<p className='abc'>Gulzar-e-Hijri, Scheme 33</p>
<h3 className='abc'>Social Links</h3>
<h4 className='abc'>Github Profile Link</h4>
<a className='abc' href="https://github.com/faraztariq-402">https://github.com/faraztariq-402</a>
<h4 className='abc'>Linkedin Profile Link</h4>
<a className='abc' href="https://www.linkedin.com/in/faraz-tariq-8a4435265">https://www.linkedin.com/in/faraz-tariq-8a4435265</a>

<h2 className='abc'>Education</h2>
<hr className='abc' />
<h4 className='abc'>Matriculation</h4>
<p className='abc'>Cambridge Public School</p>
<h4 className='abc'>Intermediate</h4>
<p className='abc'>Adamjee Govt.Science College</p>
<h4 className='abc'>Web And Mobile App Development</h4>
<p className='abc'>Saylani Mass IT Training Program</p>

<h2 className='abc'>Skills</h2>
<hr  className='abc'/>
<ul className='abc'>
    <li>HTML</li>
    <li>CSS</li>
    <li>Bootstrap</li>
    <li>Es6</li>
    <li>Firebase</li>
    <li>Express JS</li>
    <li>Node Js</li>
    <li>Mongodb</li>
    <li>React</li>
    <li>Git, Github</li>

</ul>
<h2 className='abc'>Languages</h2>
<hr className='abc'/>
<ul className='abc'>
    <li>English</li>
    <li>Urdu</li>
</ul>
</div>
</div>
<div className='mainPage'>
<h1 className='def'>Faraz Tariq</h1>
<h3 className='def'>Web Developer</h3>
<p className='def'>Hello, I'm Faraz Tariq, a passionate web developer dedicated to learning and mastering new technologies. Currently enrolled in Web and Mobile application development course at Saylani Mass IT Training. Proficient in HTML5, CSS3, Bootstrap, JavaScript (ES6), Firebase, Git, and GitHub. Actively exploring MERN Stack Technology.</p>
<h3 className='def'>Experience</h3>
<hr className='def'/>
<p className='def'>Web and Mobile App Development Intern
 Saylani Mass IT Training Program | 2022 - Present   
</p>
<ul className='def'>
    <li>Acquired hands-on experience in HTML, CSS,          JavaScript,Bootstrap and Firebase.  
</li>
<li> Gained proficiency in using Git and GitHub for                         version control.
</li>
<li>Currently exploring MERN Stack development.</li>
</ul>

<h3 className='def'>Projects</h3>
<hr className='def project' />
<p className='def project'><b>1. Trello Clone</b></p>
<a className='def project' href="https://faraztariq-402.github.io/Trello-Clone/"> <b>Link:</b> https://faraztariq-402.github.io/Trello-Clone/
</a><br />
<span className='def project'><b>Description:</b>A clone of a popular project management web app with drag and drop task management feature.</span>

<p className='def project'><b>2. Calculator</b></p>
<a className='def project' href="https://faraztariq-402.github.io/Calculator/"> <b>Link:</b>https://faraztariq-402.github.io/Calculator/

</a><br />
<span className='def project'><b>Description:</b>This is a simple calculator</span>

<p className='def project'><b>3. Express Crud With Mongodb</b></p>
<a className='def project' href="https://kind-plum-hare-hat.cyclic.cloud/"> <b>Link:</b>https://kind-plum-hare-hat.cyclic.cloud/

</a><br />
<span className='def project'><b>Description:</b>  This is a simple crud operation with express server and mongodb database
</span>


<p className='def project'><b>4. Drawing App</b></p>
<a className='def project' href="https://faraztariq-402.github.io/Js-Drawing-App/"> <b>Link:</b>https://faraztariq-402.github.io/Js-Drawing-App/

</a><br />
<span className='def project'><b>Description:</b>  A simple drawing app for creating digital art.
</span>
</div>





  </div>;
}

ReactDOM.render(<Hi/>, document.querySelector('#root'));