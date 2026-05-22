import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase, faGraduationCap } from '@fortawesome/free-solid-svg-icons';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import '../assets/styles/Timeline.scss'

function Timeline() {
  return (
    <div id="history">
      <div className="items-container">
        <h1>Career History</h1>
        <VerticalTimeline>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: 'white', color: 'rgb(39, 40, 34)' }}
            contentArrowStyle={{ borderRight: '7px solid  white' }}
            date="Jun 2020 - Present"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Senior Full Stack Software Engineer</h3>
            <h4 className="vertical-timeline-element-subtitle">Accenture · Remote</h4>
            <p>
              Delivering enterprise-grade software for global clients across the professional-services and contact-center industry — designing and shipping multi-tenant SaaS products that help large organizations modernize customer engagement, agent experience, and back-office operations on the cloud.
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="Dec 2015 - Apr 2020"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Senior Software Engineer</h3>
            <h4 className="vertical-timeline-element-subtitle">Sharecare · Atlanta, GA</h4>
            <p>
              Building consumer and clinician-facing products in the digital health industry — helping patients engage with their care, enabling virtual visits between providers and members, and operating the platform under healthcare privacy and compliance requirements.
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="Aug 2010 - Oct 2015"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Software Engineer</h3>
            <h4 className="vertical-timeline-element-subtitle">Stonebranch · Alpharetta, GA</h4>
            <p>
              Working in the enterprise workload-automation and IT operations industry — contributing to a job scheduling and orchestration platform used by global enterprises to coordinate critical batch workloads across data centers and hybrid cloud environments.
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--education"
            date="Aug 2006 - Jun 2010"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faGraduationCap} />}
          >
            <h3 className="vertical-timeline-element-title">B.S. Computer Science</h3>
            <h4 className="vertical-timeline-element-subtitle">Western Carolina University</h4>
            <p>
              Foundations in algorithms, data structures, operating systems, databases, and software engineering.
            </p>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    </div>
  );
}

export default Timeline;
