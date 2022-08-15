import React from 'react';

import infoStyles from './Info.module.css';

const Skills = () => (
  <>
    <section>
      <h2>Skills & specialties</h2>
      <h3>Keywords</h3>
      <p>
        You're in a rush, into buzzwords, or searching for something specific?
        What follows is a list of some of the things I am familiar with that
        spring to mind.
      </p>
      <dl className={infoStyles.infoGrid}>
        <dt>Main interests</dt>
        <dd>
          <ol>
            <li>Web technologies</li>
            <li>Testing</li>
            <li>Tooling & DX</li>
            <li>Compilers & static analysis</li>
            <li>Build systems</li>
          </ol>
        </dd>
        <dt>Testing types</dt>
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
        <dt>Programming paradigms</dt>
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
            <li>Node.js & most of the JS ecosystem</li>
            <li>Git</li>
            <li>Vim</li>
            <li>Linux</li>
          </ol>
          <br />
          <em>Other:</em>{' '}
          <ol>
            <li>Various cloud providers</li>
            <li>various CI/CD</li>
            <li>Gradle</li>
            <li>macOS</li>
          </ol>
        </dd>
        <dt>Libraries</dt>
        <dd>
          <em>Small selection:</em>{' '}
          <ol>
            <li>React</li>
            <li>Angular</li>
            <li>Cycle.js</li>
            <li>Emotion (CSS-in-JS)</li>
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
            <li>In-browser storage (offline-first)</li>
          </ol>
        </dd>
      </dl>
    </section>
    <section>
      <h3>Frontend engineering</h3>
      <p>
        While I've also done full-stack development, the majority of my work for
        many years now has been in frontend engineering. I enjoy the focus to
        detail that building user interfaces requires and the complexity that
        the asynchronous nature of UI brings with it.
      </p>
      <p>
        I specialize in creating highly scalable and consistent frontend
        architectures in a small but skilled team, often from a green field,
        evolving abstractions as the need arises. I pursue structural solutions
        that leave no room for individual error in order to ensure scalability
        and avoid inconsistencies such as stale cache data or dead hyperlinks.
      </p>
      <p>
        Taking a systematic approach to CSS, I treat it as code that has
        maintainability requirements not unlike JavaScript code, helping achieve
        consistent styling and layouting. I agree with a lot of the principles
        that Heydon Pickering outlines in the book{' '}
        <a href="https://every-layout.dev/">Every Layout</a>, but at the same
        time appreciate the power of CSS-in-JS when it comes to deduplicating
        everything from design tokens to entire grid layout templates.
      </p>
    </section>
    <section>
      <h3>Testing</h3>
      <p>
        I have extensive experience in software testing, applied to frontend
        testing and to testing various other kinds of codebases. Comprehensive
        and high-quality automated tests enable developers to work on a codebase
        with high confidence and velocity. To achieve this, tests must not only
        be sensitive (detect bugs with high reliability), but also specific (not
        fail due to changes that are not bugs). This is called resilient (as
        opposed to brittle) testing and is much harder to achieve, but it allows
        comprehensive testing while also keeping the codebase easy to refactor
        without failing tests reporting many false positives.
      </p>
      <p>
        I am familiar with more specialized forms of testing, for example
        property-based testing, and know when and how to apply them in everyday
        tasks. I have coached teams in improving their standard of testing, as I
        have in other topics.
      </p>
      <p>
        Through contributing to <a href="https://jestjs.io/">Jest</a>, I have
        seen the various ways people use testing frameworks in the wild. I know
        about testing framework internals both specific to Jest and in general
        and can build infrastructure for advanced and large-scale testing
        setups. I am knowledgeable in testing complicated infrastructure code
        such as a testing framework itself.
      </p>
      <p>
        I've sometimes appeared on podcasts talking about testing, such as{' '}
        <em>
          <a href="https://www.listennotes.com/podcasts/expectexception/9-jest-with-tim-seckinger-G9OyrzCkUNe/">
            expect(Exception)
          </a>
        </em>{' '}
        and German-language{' '}
        <em>
          <a href="https://workingdraft.de/436/">Working</a>{' '}
          <a href="https://workingdraft.de/462/">Draft</a>
        </em>
        .
      </p>
    </section>
    <section>
      <h3>Developer Tooling</h3>
      <p>
        In addition to Jest, I have deep knowledge in and contributed to other
        crucical developer tools in the JS ecosystem, such as{' '}
        <a href="https://babeljs.io/">Babel</a>, and extensive broad JS
        ecosystem knowledge accumulated over many years.
      </p>
      <p>
        In most projects, I've taken responsibility for the setup of the
        developer tooling, configuring and extending it according to the
        specific needs of the team. I have set up multiple monorepos for
        codebases of different sizes.
      </p>
      <p>
        I have experience with the highly asynchronous workflows used to
        solutionize on difficult technical challenges in open source work, RFC
        and proposal processes, and managing work efficiently with these long
        feedback cycles.
      </p>
    </section>
  </>
);

export default Skills;
