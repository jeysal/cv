import * as React from 'react';

export const start = new Date('2014-01');
export default [
  {
    from: '2019-01',
    location: 'Remote',
    description: (
      <>
        <a href="https://github.com/facebook/jest">Jest</a> core contributor in
        spare time, development of a popular open-source JavaScript testing
        platform
      </>
    ),
  },
  {
    from: '2018-10',
    location: 'DTM/CGN/BER, DE',
    description: (
      <>
        Software Engineer at <a href="https://www.adesso.de/">adesso AG</a>,
        full-stack JavaScript web development in a customer project using Scrum
        methodology
      </>
    ),
  },
  {
    from: '2017-07',
    to: '2018-09',
    location: 'Dortmund, DE',
    description: (
      <>
        Part-time working student at{' '}
        <a href="https://www.adesso.de/">adesso AG</a>, agile product
        development of an IoT and data visualization platform
      </>
    ),
  },
  {
    from: '2014-09',
    to: '2018-12',
    location: 'Dortmund, DE',
    description: (
      <>
        <div>
          Student at{' '}
          <a href="https://www.fh-dortmund.de/">Fachhochschule Dortmund</a>{' '}
          University of Applied Sciences and Arts
        </div>
        <small>
          <div>
            Awarded Bachelor of Science in Software Engineering (orig.
            "Softwaretechnik")
          </div>
          <div>Final grade 1.2 (scale 1.0 best to 4.0 worst)</div>
          <div>
            <small style={{ fontSize: '75%' }}>
              Thesis title: Compile-time abstraction of JavaScript mocking
              libraries powering a domain-specific language for interaction
              testing
            </small>
          </div>
        </small>
      </>
    ),
  },
  {
    from: '2014-08',
    to: '2017-06',
    location: 'Dortmund, DE',
    description: (
      <>
        Vocational education at <a href="https://www.adesso.de/">adesso AG</a>{' '}
        with parallel studies, development of Java backends and JavaScript
        frontends for internal web applications
      </>
    ),
  },
  {
    to: '2014-06',
    location: 'Wetter, DE',
    description: (
      <>
        <div>Secondary education, concluded with Abitur</div>
        <small>
          <div>
            Average grade 1.6 (equiv. A in US / UK, scale 1.0 best to 4.0 worst)
          </div>
        </small>
      </>
    ),
  },
];
