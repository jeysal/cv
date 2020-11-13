import * as React from 'react';

import infoStyles from './Info.module.css';

const Skills = () => (
  <section>
    <h2>Programming & technology</h2>
    <div className={infoStyles.infoGrid}>
      <div>Paradigms</div>
      <div>
        Functional, Functional & Reactive, Declarative, Imperative,
        Object-oriented
      </div>
      <div>Main interests</div>
      <div>
        Web technologies, Testing, Compilers & static analysis, Tooling & DX, Build systems
      </div>
      <div>Testing</div>
      <div>Integration, Unit, E2E, UI, TDD, Property-based</div>
      <div>Languages</div>
      <div>
        <em>Primary:</em> JavaScript, TypeScript, HTML, CSS
        <br />
        <em>Used</em>: Rust, Java, ReScript, Flow, Groovy, Golang, C++, C, Bash
      </div>
      <div>Tools</div>
      <div>
        <em>In-depth knowledge:</em> Jest, Babel, Gradle, Git, Vim, Linux
        <br />
        <em>Other:</em> Various CI/CD, macOS, Node.js & most of the JS ecosystem
      </div>
      <div>Libraries</div>
      <div>
        <em>Selection:</em> React, Angular, Cycle.js, RxJS, Express, Spring
      </div>
      <div>Databases</div>
      <div>Neo4j, MongoDB, various SQL-based, ORMs</div>
    </div>
  </section>
);

export default Skills;
