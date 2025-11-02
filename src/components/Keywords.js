import React from 'react';

import * as infoStyles from './Info.module.css';

const Keywords = () => (
  <section>
    <h2>Keywords</h2>
    <p>
      You're in a rush, into buzzwords, or searching for something specific?
      What follows is a list of some of the things I am familiar with that
      spring to mind. Otherwise, I talk more about my main focus areas down at
      the bottom.
    </p>
    <dl className={infoStyles.infoGrid}>
      <dt>Main interests</dt>
      <dd>
        <ol>
          <li>Web technologies</li>
          <li>High-fidelity UI</li>
          <li>Tooling & DX</li>
          <li>Testing</li>
          <li>Compilers & static analysis</li>
        </ol>
      </dd>
      <dt>Soft Skills</dt>
      <dd>
        <ol>
          <li>Coaching</li>
          <li>Hiring/Interviewing</li>
          <li>Roadmap Planning</li>
          <li>Public Speaking</li>
          <li>1-2-1s</li>
        </ol>
      </dd>
      <dt>Testing</dt>
      <dd>
        <ol>
          <li>Integration</li>
          <li>Unit</li>
          <li>UI</li>
          <li>End-to-end (e2e)</li>
          <li>Visual</li>
          <li>TDD</li>
          <li>Property-based</li>
        </ol>
      </dd>
      <dt>Languages</dt>
      <dd>
        <em>Primary:</em>{' '}
        <ol>
          <li>TypeScript</li>
          <li>JavaScript</li>
          <li>HTML</li>
          <li>CSS</li>
        </ol>
        <br />
        <em>Also used</em>:{' '}
        <ol>
          <li>Rust</li>
          <li>Java</li>
          <li>Groovy</li>
          <li>Golang</li>
          <li>C++</li>
          <li>C</li>
          <li>Bash</li>
        </ol>
      </dd>
      <dt>Tools</dt>
      <dd>
        <em>In-depth knowledge:</em>{' '}
        <ol>
          <li>Jest</li>
          <li>Node.js</li>
          <li>most of the JS ecosystem</li>
          <li>Git</li>
          <li>Vim</li>
          <li>Linux</li>
        </ol>
        <br />
        <em>Other:</em>{' '}
        <ol>
          <li>CRDTs</li>
          <li>coding agents</li>
          <li>various cloud providers</li>
          <li>various CI/CD</li>
          <li>Gradle</li>
        </ol>
      </dd>
      <dt>Libraries</dt>
      <dd>
        <em>Small selection:</em>{' '}
        <ol>
          <li>React</li>
          <li>Next.js</li>
          <li>various CSS-in-JS</li>
          <li>Slate Editor</li>
          <li>RxJS</li>
          <li>Spring</li>
        </ol>
      </dd>
      <dt>Databases</dt>
      <dd>
        <ol>
          <li>PostgreSQL</li>
          <li>MongoDB</li>
          <li>Neo4j</li>
          <li>ORMs</li>
          <li>in-browser storage (offline-first)</li>
        </ol>
      </dd>
    </dl>
  </section>
);

export default Keywords;
