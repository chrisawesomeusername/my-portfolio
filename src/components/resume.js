import React, {Component} from 'react';
import {Grid, Cell} from 'react-mdl';
import Education from './education';
import Experience from './experience';
import Skills from './skills';


class Resume extends Component {
  render() {
    return(
      <div>
        <Grid>
          <Cell col={4}>
            <div style={{textAlign: 'center'}}>
              <img src="https://images.assetsdelivery.com/compings_v2/thesomeday123/thesomeday1231709/thesomeday123170900021.jpg" alt="avatar" style={{height: '200px'}}
                />
            </div>
            <h2 style={{paddingTop: '2em'}}>Chris Brown</h2>
            <h4 style={{color: 'grey'}}>Web and UX Designer</h4>
            <hr style={{borderTop: '1px solid #333', width: '50%'}}/>
            <p></p>
            <hr style={{borderTop: '1px solid #333', width: '50%'}}/>
            <h5>Address</h5>
            <p>156 Tasman Street</p>
            <h5>Phone</h5>
            <p>0273060809</p>
            <h5>Email</h5>
            <p>chris.brown@hotmail.co.nz</p>
            <h5>Github</h5>
            <a href="https://github.com/chrisawesomeusername" target="_blank">github.com/chrisawesomeusername</a>
          </Cell>
          <Cell className="resume-right-col" col={8}>
            <h2>Education</h2>
            <Education
              startYear={2019}
              endYear={2020}
              schoolName="Yoobee Colleges"
              schoolDescription="Diploma in Web and UX design"
              schoolExplain="In the past year at Yoobee, we have gone through the basic fundamentals of web design (HTML, CSS, JS) and used these skills to learn about the wider range of web design tools. Libraries and frameworks were the first we looked at, Jquery and Bootstrap etc for quickly creating our projects, then Express with MongoDB when we were looking at some backend code and API's. Many of these projects were solo assignments but a few were in groups which taught us to keep track of different parts of a project and troubleshoot and figure out compatibility issues as we were often using different operating systems etc. We were really tested on this in the later half of the course when the country was put into lockdown so we went straight to remote learning and working collaboratively."
            />
            <Education
              startYear={2012}
              endYear={2016}
              schoolName="Weltec"
              schoolDescription="Bachelor of Creative Technologies"
              schoolExplain="I spent four years at Weltec learning about many different areas of the art, design and creative world, which included the history and modern advancements in these areas. Some subjects I looked into were painting/drawing, sculpture, interior design, photography/film/editing, but by the end I was mainly focusing on digital design and print media. Typography, colour/contrast and hierarchical structure were the main areas of this work. Through all this work, culture always played a strong part so we were always keeping in mind cultural and sociological issues that could show in our work. "
            />
          <hr style={{borderTop: "1px solid white"}}/>

          <h2>Work</h2>
            <Experience
              startYear={2011}
              endYear="current"
              jobName="Hell Pizza"
              jobDescription="Store Manager"
              jobExplain="Throughout all of my studies, I have kept a job at Hell Pizza for income, where I started as a delivery driver and over the years learnt more about how the store was run. In my years between study I was working full time as the store manager which in addition to running shifts at the busiest pizza store in New Zealand included tasks such as rostering, stock ordering, cash handling, the odd maintenance job and occasionally hiring staff. In my time at Hell I have understood the importance of working as a team, attention to detail and respect for everyone whether they are my superior or not."
            />
          <hr style={{borderTop: "1px solid white"}}/>

        <h2>Skills</h2>
        <Skills
          skill="Javascript"
          progress={75}
        />
        <Skills
          skill="HTML/CSS"
          progress={75}
        />
        <Skills
          skill="NodeJS"
          progress={40}
        />
        <Skills
          skill="React"
          progress={35}
        />
        <Skills
          skill="Wordpress"
          progress={35}
        />







          </Cell>
        </Grid>
      </div>
    )
  }
}
export default Resume;
