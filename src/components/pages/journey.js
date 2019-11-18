import React from 'react';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import { FaGraduationCap } from "react-icons/fa";
import { MdDesktopWindows } from "react-icons/md";
import { TiChartLine, TiPencil } from "react-icons/ti";
import 'react-vertical-timeline-component/style.min.css';

function Journey() {
  return (
    <div className="container-fluid">
      <h2>
        T I M E L I N E
      </h2>

      <p>
        I wasn't born wanting to study computer science.
        <br></br> Going into college, I hardly had any idea what I wanted to do&mdash;I still am not completely sure.
        <br></br> I just love to continuously explore the things I am interested in within the fields of technology and computer science.
        <br></br>
        <br></br> This is my journey so far in the general field of computer science.
      </p>

      <VerticalTimeline>

      <VerticalTimelineElement
        className="vertical-timeline-element"
        date="Sep 2019 - present"
        iconStyle={{ background: 'rgb(212, 183, 0)', color: '#fff' }}
        icon={<TiPencil />}
      >
        <h3 className="vertical-timeline-element-title">Fundamentals of Computing TA</h3>
        <h5 className="vertical-timeline-element-subtitle">Notre Dame, IN</h5>
        <p>
          <i>"If you can't explain it simply, you don't understanding it well enough."</i> -Einstein
          <br></br>
          <br></br> This role has been training me to <strong>clearly communicate various concepts in C++ programming</strong> to help students internalize them.
        </p>
      </VerticalTimelineElement>

      <VerticalTimelineElement
        className="vertical-timeline-element"
        date="Jul 2019 - Aug 2019"
        iconStyle={{ background: 'rgb(115, 115, 115)', color: '#fff' }}
        icon={<TiChartLine />}
      >
        <h3 className="vertical-timeline-element-title">Data Science Intern at <a className="orderin-link" rel="noopener noreferrer" href="https://orderin.co.za/" target="_blank">OrderIn</a></h3>
        <h5 className="vertical-timeline-element-subtitle">Paarden Eiland, South Africa</h5>
        <p>
          Before this internship, I was completely new to <strong>Data Science and Machine Learning</strong>. During the short span of six weeks, I had to quickly learn and utilize <strong>Tensorflow</strong> to create a Recommendation Model by implementing <strong>NLP</strong>. The learning curve was steep, but with perseverance and the help of my mentors, I was able to complete the project.
        </p>
      </VerticalTimelineElement>
      
      <VerticalTimelineElement
        className="vertical-timeline-element"
        date="Sep 2018 - Feb 2019"
        iconStyle={{ background: 'rgb(212, 183, 0)', color: '#fff' }}
        icon={<MdDesktopWindows />}
      >
        <h3 className="vertical-timeline-element-title">Computer Consultant</h3>
        <h5 className="vertical-timeline-element-subtitle">Notre Dame, IN</h5>
        <p>
          I would consider this position as my first "official" job. I worked for my university's Office of Information Technology, managing various devices in <strong>Microsoft Windows Active Directory using SCCM.</strong> Through offering onsite help to staff and faculty, I learned how to <strong>politely interact with my clients, edit Group Policy Objects, rebuild machines using bootdrives, and create user-friendly tutorials</strong>.
        </p>
      </VerticalTimelineElement>

      <VerticalTimelineElement
        className="vertical-timeline-element"
        date="May 2017"
        iconStyle={{ background: 'rgb(211, 17, 69)', color: '#fff' }}
        icon={<FaGraduationCap />}
      >
        <h3 className="vertical-timeline-element-title">Graduated High School</h3>
        <h5 className="vertical-timeline-element-subtitle">New York, NY</h5>
        <p>
          During the four seemingly-long years at <a className="regis-link" rel="noopener noreferrer" href="https://www.regis.org/" target="_blank">Regis High School</a>, I struggled initially but eventually made it out with some of my closest friends to this day.
        </p>
      </VerticalTimelineElement>

      <VerticalTimelineElement
        className="vertical-timeline-element"
        date="Feb 2017"
        iconStyle={{ background: 'rgb(211, 17, 69)', color: '#fff' }}
        icon={<MdDesktopWindows />}
      >
        <h3 className="vertical-timeline-element-title"><a className="cyberpatriot-link" rel="noopener noreferrer" href="https://www.uscyberpatriot.org/" target="_blank">CyberPatriot IX</a>: 1<sup>st</sup> in State</h3>
        <h5 className="vertical-timeline-element-subtitle">New York, NY</h5>
        <p>
          While at Regis, I participated in the National Youth Cyber Defense Competition where <strong>teams worked together</strong> to patch vulnerabilities within a given virtual image of an operating system. At the time, I specialized in addressing the security flaws in Windows 7 and Windows 8. Our team diligently studied the various ways a machine could be compromised and in the end, the efforts paid off and <a className="regis-link" rel="noopener noreferrer" href="https://www.regis.org/article.cfm?id=6739" target="_blank">we won</a>.
        </p>
      </VerticalTimelineElement>

    </VerticalTimeline>

    </div>
  );
}

export default Journey;
