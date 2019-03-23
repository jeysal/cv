(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{142:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(170),i=a(215),c=a(4),A=a.n(c),o=a(216),m=a.n(o);function s(e){var t=e.description,a=e.lang,n=e.meta,r=e.keywords,c=i.data.site,A=t||c.siteMetadata.description,o=c.siteMetadata.title;return l.a.createElement(m.a,{htmlAttributes:{lang:a},title:o,meta:[{name:"description",content:A},{property:"og:title",content:o},{property:"og:description",content:A},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:"@"+c.siteMetadata.twitter},{name:"twitter:title",content:o},{name:"twitter:description",content:A}].concat(r.length>0?{name:"keywords",content:r.join(", ")}:[]).concat(n)})}s.defaultProps={lang:"en",meta:[],keywords:[]},s.propTypes={description:A.a.string,lang:A.a.string,meta:A.a.array,keywords:A.a.arrayOf(A.a.string)};var d=s,u=a(224),E=a(225),p=a.n(E),g=a(226),f=a.n(g),v=function(){var e=u.data.placeholderImage.childImageSharp.fluid;return l.a.createElement("div",null,l.a.createElement(p.a,{fluid:e,alt:"Profile picture",className:f.a.img}),l.a.createElement("div",{className:f.a.subtitle},l.a.createElement("div",{className:f.a.subtitleLarge},"picture blurred - equal chances for everyone"),l.a.createElement("div",{className:f.a.subtitleWeb},"press to reveal"),l.a.createElement("div",{className:f.a.subtitlePrint},"visit web version to view picture")))},h=a(227),w=a(228),B=a(232),b=a.n(B),y=a(159),j=a.n(y),S=function(){var e=h.data.site.siteMetadata,t=e.author,a=e.dateOfBirth,l=e.email,r=e.github,i=Object(w.useQueryParam)("phone",w.StringParam)[0];return n.createElement("section",null,n.createElement("h2",null,"Personal & contact information"),n.createElement("div",{className:j.a.infoGrid},n.createElement("div",null,"Name"),n.createElement("div",null,t),n.createElement("div",null,"Born"),n.createElement("div",null,a," (age ",b()(a),")"),n.createElement("div",null,"Nationality"),n.createElement("div",null,"German (EU citizenship)"),n.createElement("div",null,"Languages"),n.createElement("div",null,"English (fluent), German (native)"),n.createElement("small",null," "),n.createElement("small",null," "),n.createElement("div",null,"Email"),n.createElement("div",null,n.createElement("a",{href:"mailto:"+l},l)),n.createElement("div",null,"Phone"),n.createElement("div",null,i&&"+"+i||"<hidden in public version>"),n.createElement("div",null,"GitHub"),n.createElement("div",null,n.createElement("a",{href:"https://github.com/"+r},r))))},N=a(214),D=a(233),T=new Date("2014-01"),x=[{from:"2019-01",location:"Remote",description:n.createElement(n.Fragment,null,n.createElement("a",{href:"https://github.com/facebook/jest"},"Jest")," core contributor in spare time, development of a popular open-source JavaScript testing platform")},{from:"2018-10",location:"DTM/CGN/BER, DE",description:n.createElement(n.Fragment,null,"Software Engineer at ",n.createElement("a",{href:"https://www.adesso.de/"},"adesso AG"),", full-stack JavaScript web development in a customer project using Scrum methodology")},{from:"2017-07",to:"2018-09",location:"Dortmund, DE",description:n.createElement(n.Fragment,null,"Part-time working student at"," ",n.createElement("a",{href:"https://www.adesso.de/"},"adesso AG"),", agile product development of an IoT and data visualization platform")},{from:"2014-09",to:"2018-12",location:"Dortmund, DE",description:n.createElement(n.Fragment,null,n.createElement("div",null,"Student at"," ",n.createElement("a",{href:"https://www.fh-dortmund.de/"},"Fachhochschule Dortmund")," ","University of Applies Sciences and Arts"),n.createElement("small",null,n.createElement("div",null,'Awarded Bachelor of Science in Software Engineering (orig. "Softwaretechnik")'),n.createElement("div",null,"Final grade 1.2 (scale 1.0 best to 4.0 worst)"),n.createElement("div",null,n.createElement("small",{style:{fontSize:"75%"}},"Thesis title: Compile-time abstraction of JavaScript mocking libraries powering a domain-specific language for interaction testing"))))},{from:"2014-08",to:"2017-06",location:"Dortmund, DE",description:n.createElement(n.Fragment,null,"Vocational education at ",n.createElement("a",{href:"https://www.adesso.de/"},"adesso AG")," ","with parallel studies, development of Java backends and JavaScript frontends for internal web applications")},{to:"2014-06",location:"Wetter, DE",description:n.createElement(n.Fragment,null,n.createElement("div",null,"Secondary education, concluded with Abitur"),n.createElement("small",null,n.createElement("div",null,"Average grade 1.6 (equiv. A in US / UK, scale 1.0 best to 4.0 worst)")))}],M=a(336),P=a.n(M),Q=Object(D.addMonths)(new Date,1),k=Object(D.differenceInCalendarMonths)(Q,T),C=function(){return n.createElement("div",{className:P.a.diagram},x.map(function(e,t){var a=e.from,l=e.to,r=N.a[t%N.a.length],i=Object(D.differenceInCalendarMonths)(a||T,T),c=100*Object(D.differenceInCalendarMonths)(Q,l&&Object(D.addMonths)(l,1)||Q)/k+"%",A=100*i/k+"%";return n.createElement("div",{key:t,className:P.a.entry,style:{gridTemplateRows:c+" auto "+A}},n.createElement("div",{className:P.a.bar,style:{backgroundColor:r}}))}))},G=function(){return n.createElement("section",null,n.createElement("h2",null,"Education & experience"),n.createElement("div",{style:{display:"grid",gridTemplateColumns:"1cm auto",columnGap:"5mm"}},n.createElement("aside",null,n.createElement(C,null)),n.createElement("div",{className:j.a.infoGrid},x.map(function(e,t){var a=e.from,l=e.to,r=e.description,i=e.location;return n.createElement(n.Fragment,{key:t},n.createElement("div",{style:{color:N.a[t%N.a.length]}},n.createElement("div",{style:{fontFamily:"monospace",textAlign:a?"left":"right"}},a," - ",l),i&&n.createElement("small",null,n.createElement("div",{style:{textAlign:"center"}},i))),n.createElement("div",{style:{lineHeight:"1.25rem",marginBottom:"0.25rem"}},r))}))))},Y=function(){return n.createElement("section",null,n.createElement("h2",null,"Programming & technology"),n.createElement("div",{className:j.a.infoGrid},n.createElement("div",null,"Paradigms"),n.createElement("div",null,"Functional, Functional & Reactive, Declarative, Imperative, Object-oriented"),n.createElement("div",null,"Main interests"),n.createElement("div",null,"Testing, Compilers & static analysis, Tooling & DX, Build systems, Web technologies"),n.createElement("div",null,"Testing"),n.createElement("div",null,"Integration, Unit, E2E, UI, TDD, Property-based"),n.createElement("div",null,"Languages"),n.createElement("div",null,n.createElement("em",null,"Primary:")," JavaScript, TypeScript, HTML, CSS, Java",n.createElement("br",null),n.createElement("em",null,"Used"),": Rust, Reason, Flow, Groovy, Golang, C++, C, Bash"),n.createElement("div",null,"Tools"),n.createElement("div",null,n.createElement("em",null,"In-depth knowledge:")," Jest, Babel, Gradle, Git, Vim, Linux",n.createElement("br",null),n.createElement("em",null,"Other:")," Various CI/CD, macOS, Node.js & most of the JS ecosystem"),n.createElement("div",null,"Libraries"),n.createElement("div",null,n.createElement("em",null,"Selection:")," React, Angular, Cycle.js, RxJS, Express, Spring"),n.createElement("div",null,"Databases"),n.createElement("div",null,"Neo4j, MongoDB, various SQL-based, ORMs")))},R=a(337),F=a.n(R);t.default=function(){return l.a.createElement(r.a,null,l.a.createElement(d,null),l.a.createElement("div",{className:F.a.topSection},l.a.createElement("div",{className:F.a.infoWrapper},l.a.createElement(S,null)),l.a.createElement("aside",{className:F.a.profilePicWrapper},l.a.createElement(v,null))),l.a.createElement("hr",null),l.a.createElement(G,null),l.a.createElement("hr",null),l.a.createElement(Y,null))}},155:function(e){e.exports={data:{site:{siteMetadata:{title:"Tim Seckinger's resume"}}}}},156:function(e){e.exports={data:{site:{siteMetadata:{author:"Tim Seckinger",github:"jeysal"}}}}},170:function(e,t,a){"use strict";var n=a(155),l=a(0),r=a.n(l),i=a(4),c=a.n(i),A=a(171),o=a.n(A),m=function(e){var t=e.siteTitle;return r.a.createElement("header",{className:o.a.header},r.a.createElement("div",{className:o.a.title},r.a.createElement("h1",null,t)))};m.propTypes={siteTitle:c.a.string},m.defaultProps={siteTitle:""};var s=m,d=a(156),u=a(172),E=a.n(u),p=function(){var e=d.data.site.siteMetadata,t=e.author,a=e.github,n="https://"+a+".github.io/cv";return r.a.createElement(r.a.Fragment,null,r.a.createElement("hr",null),r.a.createElement("footer",{className:E.a.footer},r.a.createElement("div",{className:E.a.footerWeb},"Built by"," ",r.a.createElement("a",{href:"https://github.com/"+a},t)),r.a.createElement("div",{className:E.a.footerPrint},"Web version at"," ",r.a.createElement("a",{href:n},r.a.createElement("code",null,n)))))},g=(a(173),function(e){var t=e.children,a=n.data.site.siteMetadata.title;return r.a.createElement(r.a.Fragment,null,r.a.createElement(s,{siteTitle:a}),r.a.createElement("div",{style:{margin:"0 auto",maxWidth:"210mm",padding:"0 1rem 0.5rem 1rem"}},r.a.createElement("main",null,t),r.a.createElement(p,null)))});g.propTypes={children:c.a.node.isRequired};t.a=g},215:function(e){e.exports={data:{site:{siteMetadata:{title:"Tim Seckinger's resume",description:"Tim Seckinger's resume",twitter:"_jeysal_"}}}}},224:function(e){e.exports={data:{placeholderImage:{childImageSharp:{fluid:{base64:"data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAUABQDASIAAhEBAxEB/8QAGQABAAMBAQAAAAAAAAAAAAAAAAIEBQED/8QAFgEBAQEAAAAAAAAAAAAAAAAAAQAC/9oADAMBAAIQAxAAAAHIlYvWsBI59tYHgj//xAAaEAADAQEBAQAAAAAAAAAAAAABAgMABCEx/9oACAEBAAEFApzLtSTTO5mCW6PGyfaqADzzO//EABURAQEAAAAAAAAAAAAAAAAAAAEg/9oACAEDAQE/ASP/xAAVEQEBAAAAAAAAAAAAAAAAAAABEP/aAAgBAgEBPwFjP//EABsQAAIDAAMAAAAAAAAAAAAAAAECABAhETFB/9oACAEBAAY/AgomrxSkxvctc0juv//EABoQAAMAAwEAAAAAAAAAAAAAAAABESExUUH/2gAIAQEAAT8hsxXwcU5OkNAerwTJuCJuj2ZZcHbDyPWh4nGqvGf/2gAMAwEAAgADAAAAEBvfgv/EABYRAQEBAAAAAAAAAAAAAAAAAAEQMf/aAAgBAwEBPxADDGf/xAAYEQEBAAMAAAAAAAAAAAAAAAABABARMf/aAAgBAgEBPxBI2rox/8QAHRABAQEBAAEFAAAAAAAAAAAAAREAITFRYXGBof/aAAgBAQABPxAWUvgV1Y0gujmHPglqDOiX6uLor5LT2/cJgsdAmfBiuS09HlzXjgXjXf/Z",aspectRatio:1,src:"/cv/static/41d22f5462736027dfd6620645c88ade/6d5f0/profile-pic.png",srcSet:"/cv/static/41d22f5462736027dfd6620645c88ade/9ba12/profile-pic.png 256w,\n/cv/static/41d22f5462736027dfd6620645c88ade/a07ef/profile-pic.png 512w,\n/cv/static/41d22f5462736027dfd6620645c88ade/6d5f0/profile-pic.png 1024w,\n/cv/static/41d22f5462736027dfd6620645c88ade/2f511/profile-pic.png 1536w,\n/cv/static/41d22f5462736027dfd6620645c88ade/4d7ca/profile-pic.png 2048w,\n/cv/static/41d22f5462736027dfd6620645c88ade/45d15/profile-pic.png 3072w,\n/cv/static/41d22f5462736027dfd6620645c88ade/66def/profile-pic.png 3324w",sizes:"(max-width: 1024px) 100vw, 1024px"}}}}}},227:function(e){e.exports={data:{site:{siteMetadata:{author:"Tim Seckinger",dateOfBirth:"1997-09-06",email:"seckinger.tim@gmail.com",github:"jeysal"}}}}}}]);
//# sourceMappingURL=component---src-pages-index-js-48b39a4cd9cd4fd59cc9.js.map