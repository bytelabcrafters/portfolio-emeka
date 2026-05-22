import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAws } from '@fortawesome/free-brands-svg-icons';
import {
    faCode,
    faServer,
    faHeadset,
    faDatabase,
    faShieldHalved,
    faBrain,
} from '@fortawesome/free-solid-svg-icons';
import Chip from '@mui/material/Chip';
import '../assets/styles/Expertise.scss';

const frontendStack = [
    "TypeScript",
    "JavaScript",
    "Angular",
    "React",
    "RxJS",
    "HTML5",
    "CSS3",
    "SASS",
    "Electron",
    "Chrome Extensions",
    "PWA",
];

const backendStack = [
    "Node.js",
    "Express.js",
    "GraphQL",
    "REST API",
    ".NET Core",
    "ASP.NET",
    "Java",
    "Spring",
    "Python",
    "C#",
    "MongoDB",
    "PostgreSQL",
    "Redis",
    "MySQL",
];

const cloudStack = [
    "GCP",
    "AWS",
    "Azure",
    "Docker",
    "Kubernetes",
    "Terraform",
    "Cloud Build",
    "Prometheus",
    "OpenTelemetry",
    "Grafana",
    "SonarQube",
    "Jest",
    "Mocha",
    "Cypress",
];

const realtimeStack = [
    "WebRTC",
    "SIP",
    "WebSockets",
    "Salesforce CTI",
    "HTTP/2",
    "Service Workers",
    "Electron",
    "Chrome Extensions",
];

const dataStack = [
    "BigQuery",
    "Elasticsearch",
    "Kibana",
    "MongoDB",
    "PostgreSQL",
    "Redis Streams",
    "Pub/Sub",
    "Debezium",
    "Python ETL",
    "GCP Coldline",
];

const securityStack = [
    "HIPAA",
    "SOC2",
    "ISO-27001",
    "JWT",
    "AWS KMS",
    "AWS Secrets Manager",
    "Firebase Identity Platform",
    "MFA",
    "LDAP / SSO",
    "OAuth 2.0",
];

function Expertise() {
    return (
    <div className="container" id="expertise">
        <div className="skills-container">
            <h1>Expertise</h1>
            <p className="expertise-intro">
                Fourteen years of shipping production software across contact-center, healthcare, and
                workload-automation domains. The areas below are the ones I've delivered to paying customers,
                not just dabbled in.
            </p>
            <div className="skills-grid">
                <div className="skill">
                    <FontAwesomeIcon icon={faCode} size="3x"/>
                    <h3>Frontend Engineering</h3>
                    <p>I build performant, accessible web UIs with Angular and React and ship them as Chrome extensions, Electron desktop clients, and embedded CRM widgets. Bundle budgets, lazy-loading, tree-shaking, and Time-to-Interactive get the same attention as visual polish — one Angular app went from a 1.8&nbsp;MB initial bundle to 950&nbsp;KB with a 38% TTI win across Chrome, Edge, and Firefox.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {frontendStack.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                <div className="skill">
                    <FontAwesomeIcon icon={faServer} size="3x"/>
                    <h3>Backend & Distributed Systems</h3>
                    <p>I design multi-tenant SaaS platforms as dozens of stateless Node.js, .NET Core, and Java services exposing REST and GraphQL APIs. Recent work includes a 45-service contact-center platform sustaining 1,200&nbsp;req/s at p95 &lt; 180&nbsp;ms, and an event-driven invoice subsystem on Redis Streams + PostgreSQL processing 2.5M invoices a month without blocking the conversational workload.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {backendStack.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                <div className="skill">
                    <FontAwesomeIcon icon={faAws} size="3x"/>
                    <h3>Cloud, DevOps & Observability</h3>
                    <p>I deploy to GCP, AWS, and Azure with Docker, Kubernetes, and Terraform; run blue-green delivery through declarative pipelines that spin up ephemeral PR environments; and keep production healthy with Prometheus, OpenTelemetry, Grafana, and SonarQube. Custom HPA metrics held one platform under 65% CPU through a 5× Black Friday spike with no manual intervention.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {cloudStack.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                <div className="skill">
                    <FontAwesomeIcon icon={faHeadset} size="3x"/>
                    <h3>Real-Time & Communications</h3>
                    <p>Deep experience with telephony, video, and live-collaboration stacks: SIP-over-WebSocket bridges to Salesforce CTI that cut call-setup latency by 170&nbsp;ms, a WebRTC + Java/Spring telemedicine module sustaining 7,000 concurrent sessions, and HTTP/2 server-push tuning that dropped average payload size from 540&nbsp;KB to 220&nbsp;KB for field agents on cellular networks.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {realtimeStack.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                <div className="skill">
                    <FontAwesomeIcon icon={faDatabase} size="3x"/>
                    <h3>Data Engineering & Analytics</h3>
                    <p>I model schemas, move data, and stand up the analytics that business teams actually use. Recent projects include a MySQL→BigQuery CDC pipeline on Debezium + Pub/Sub serving 2,100 executive aggregations a day at 0.9&nbsp;s median latency, a 4.2&nbsp;TB MongoDB→GCP Coldline archival workflow, and Elasticsearch + Kibana dashboards refreshed every five minutes from Redis pub/sub click streams.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {dataStack.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                <div className="skill">
                    <FontAwesomeIcon icon={faShieldHalved} size="3x"/>
                    <h3>Security & Compliance</h3>
                    <p>I've shipped systems under HIPAA, SOC2, and ISO-27001 audits with zero major findings. Work spans an internal .NET Core authorization service using JWT + AWS KMS, a Firebase Identity Platform migration with multi-factor enforcement and Python risk-scoring triggers that cut fraudulent sessions by 62%, and LDAP SSO with credentials externalized into AWS Secrets Manager.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {securityStack.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                <div className="skill">
                    <FontAwesomeIcon icon={faBrain} size="3x"/>
                    <h3>AI, ML & Speech</h3>
                    <p>I integrate ML into product surfaces where it earns its keep. Built a Python predictive health-scoring engine on PostgreSQL features that lifted premium-coaching conversion by 14%, a Java DeepSpeech enrichment microservice with bulk indexing to Elasticsearch for sub-second search over 30M conversation records, and a MongoDB-backed feature-flag SDK that let product safely roll out sentiment analysis to 5% cohorts.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        <Chip className='chip' label="Python" />
                        <Chip className='chip' label="DeepSpeech" />
                        <Chip className='chip' label="Elasticsearch" />
                        <Chip className='chip' label="Sentiment Analysis" />
                        <Chip className='chip' label="Feature Flags" />
                        <Chip className='chip' label="A/B Testing" />
                        <Chip className='chip' label="Sentry" />
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
}

export default Expertise;
