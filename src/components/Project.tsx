import React from "react";
import mock01 from '../assets/images/mock01.png';
import mock02 from '../assets/images/mock02.png';
import mock03 from '../assets/images/mock03.png';
import mock04 from '../assets/images/mock04.png';
import mock05 from '../assets/images/mock05.png';
import mock06 from '../assets/images/mock06.png';
import mock07 from '../assets/images/mock07.png';
import mock08 from '../assets/images/mock08.png';
import '../assets/styles/Project.scss';

function Project() {
    return(
    <div className="projects-container" id="projects">
        <h1>Featured Work</h1>
        <p className="projects-intro">
            A selection of production systems I designed, built, and shipped across contact center, healthcare,
            and workload automation domains. Most live behind enterprise SSO, so links aren't public — happy to
            walk through architecture and code in a conversation.
        </p>
        <div className="projects-grid">
            <div className="project">
                <img src={mock01} className="zoom" alt="Multi-tenant contact center platform" width="100%"/>
                <h2>Multi-Tenant Contact Center Platform</h2>
                <p>Architected 45 stateless Node.js/TypeScript microservices on GCP handling 1,200 req/s with p95 under 180&nbsp;ms. Shipped an Angular Chrome extension with lazy-loading and tree-shaking that cut the initial bundle from 1.8&nbsp;MB to 950&nbsp;KB and improved Time-to-Interactive by 38%.</p>
            </div>
            <div className="project">
                <img src={mock02} className="zoom" alt="Adaptive media routing API" width="100%"/>
                <h2>Adaptive Media Routing API</h2>
                <p>Built an Express.js + GraphQL gateway that aggregates conversation transcripts from MongoDB, Elasticsearch, and Firebase behind unified pagination, cutting average query response from 420&nbsp;ms to 160&nbsp;ms across 30&nbsp;GB datasets. Added a Java DeepSpeech transcription enrichment service with sub-second searchability over 30M records.</p>
            </div>
            <div className="project">
                <img src={mock03} className="zoom" alt="CTI integration with Salesforce" width="100%"/>
                <h2>Salesforce CTI & Telephony Bridge</h2>
                <p>Integrated SIP-over-WebSocket telephony events with a .NET Core facade in front of a legacy ASP.NET connector, cutting call setup latency by 170&nbsp;ms and enabling omnichannel dashboards inside CRM iframes. Packaged the Angular agent app as an Electron desktop client with an S3 signed-URL auto-update pipeline serving 4,000 agents.</p>
            </div>
            <div className="project">
                <img src={mock04} className="zoom" alt="Patient engagement portal" width="100%"/>
                <h2>Patient Engagement Portal (HIPAA)</h2>
                <p>Built an Angular 7 + Node.js/Express portal for 500,000 active patients with Firebase Cloud Messaging push notifications. Migrated MySQL to a sharded MongoDB cluster on AWS EKS, redesigning the schema to drop 95th-percentile response time from 900&nbsp;ms to 280&nbsp;ms and passing an external HIPAA audit with zero major findings.</p>
            </div>
            <div className="project">
                <img src={mock05} className="zoom" alt="Telemedicine module" width="100%"/>
                <h2>WebRTC Telemedicine Module</h2>
                <p>Shipped a secure video telemedicine module with a Java/Spring backend and WebRTC + SIP signaling, sustaining 7,000 simultaneous sessions and writing call records back to CRM via REST. Hardened the platform with a Mocha + Cypress suite that lifted coverage from 52% to 85% and caught a session-storage memory leak before rollout.</p>
            </div>
            <div className="project">
                <img src={mock06} className="zoom" alt="Workload automation dashboard" width="100%"/>
                <h2>Workload Automation Dashboard</h2>
                <p>Built an AngularJS + Java servlet dashboard for ops staff to visualize and re-run 5,000+ nightly batch tasks, then ported cron workflows to Node.js + Redis pipelines processing 1.2M tasks daily with at-least-once delivery and back-pressure. Codified AWS VPCs, security groups, and ELBs with early Terraform, cutting sandbox setup from two days to two hours.</p>
            </div>
        </div>

        <h2 className="projects-subheading">Open Source & Side Projects</h2>
        <p className="projects-intro">
            Smaller experiments and learning projects hosted on GitHub.
        </p>
        <div className="projects-grid">
            <div className="project">
                <a href="https://github.com/galaxyb-dark/multi-reg-analysis" target="_blank" rel="noreferrer"><img src={mock07} className="zoom" alt="Multiple regression property analysis thumbnail" width="100%"/></a>
                <a href="https://github.com/galaxyb-dark/multi-reg-analysis" target="_blank" rel="noreferrer"><h2>Multiple Regression Property Analysis</h2></a>
                <p>Analyzed a real estate dataset and predicted property prices using statistical methods such as OLS and multi-regression analysis. Built in Python with Pandas, NumPy, Matplotlib, and Scikit-Learn.</p>
            </div>
            <div className="project">
                <a href="https://github.com/galaxyb-dark/submeowrine" target="_blank" rel="noreferrer"><img src={mock08} className="zoom" alt="Submeowrine mobile game thumbnail" width="100%"/></a>
                <a href="https://github.com/galaxyb-dark/submeowrine" target="_blank" rel="noreferrer"><h2>Submeowrine</h2></a>
                <p>An Android mobile application built with Java and Android Studio that runs a 2D shooting game.</p>
            </div>
        </div>
    </div>
    );
}

export default Project;
