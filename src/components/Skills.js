import React from 'react';

import infoStyles from './Info.module.css';

const Skills = () => (
  <section>
    <h2>Programming & technology</h2>
    <dl className={infoStyles.infoGrid}>
      <dt>Main interests</dt>
      <dd>
        <ol>
          <li>Web technologies</li>
          <li>Testing</li>
          <li>Compilers & static analysis</li>
          <li>Tooling & DX</li>
          <li>Build systems</li>
        </ol>
      </dd>
      <dt>Testing</dt>
      <dd>
        <ol>
          <li>Integration</li>
          <li>Unit</li>
          <li>E2E</li>
          <li>UI</li>
          <li>TDD</li>
          <li>Property-based</li>
        </ol>
      </dd>
      <dt>Paradigms</dt>
      <dd>
        <ol>
          <li>Functional</li>
          <li>Functional & Reactive</li>
          <li>Declarative</li>
          <li>Imperative</li>
          <li>Object-oriented</li>
        </ol>
      </dd>
      <dt>Languages</dt>
      <dd>
        <em>Primary:</em>{' '}
        <ol>
          <li>JavaScript</li>
          <li>TypeScript</li>
          <li>HTML</li>
          <li>CSS</li>
        </ol>
        <br />
        <em>Used</em>:{' '}
        <ol>
          <li>Rust</li>
          <li>Java</li>
          <li>ReScript</li>
          <li>Flow</li>
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
          <li>Babel</li>
          <li>Gradle</li>
          <li>Git</li>
          <li>Vim</li>
          <li>Linux</li>
        </ol>
        <br />
        <em>Other:</em>{' '}
        <ol>
          <li>Various CI/CD</li>
          <li>macOS</li>
          <li>Node.js & most of the JS ecosystem</li>
        </ol>
      </dd>
      <dt>Libraries</dt>
      <dd>
        <em>Selection:</em>{' '}
        <ol>
          <li>React</li>
          <li>Angular</li>
          <li>Cycle.js</li>
          <li>Emotion</li>
          <li>RxJS</li>
          <li>Express</li>
          <li>Spring</li>
        </ol>
      </dd>
      <dt>Databases</dt>
      <dd>
        <ol>
          <li>Neo4j</li>
          <li>MongoDB</li>
          <li>various SQL-based</li>
          <li>ORMs</li>
        </ol>
      </dd>
    </dl>
  </section>
);

export default Skills;
