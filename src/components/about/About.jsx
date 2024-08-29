import React from 'react';
import { useMediaQuery } from '@mui/material';
import "./about.scss";

export default function About() {
  const isMobile = useMediaQuery('(max-width:600px)');

  const formatInterests = (interests) => {
    return interests.map((interest, index) => {
      if (index === interests.length - 1) {
        return <> and<span key={index}> {interest}</span></>;
      } else if (index === interests.length - 2) {
        return <span key={index}>{interest}</span>;
      } else {
        return <><span key={index}>{interest}</span>, </>;
      }
    });
  };

  const interests = [
    'artificial intelligence',
    'financial technologies',
    'data analysis',
    'application development'
  ];
  
  const otherInterests = [
    'blockchain and web3',
    'image processing'
  ];

  const technologies = [
    {
      name: 'Javascript',
      logo: 'https://raw.githubusercontent.com/voodootikigod/logo.js/master/js.png',
    },
    {
      name: 'Vue.js',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Vue.js_Logo_2.svg/1184px-Vue.js_Logo_2.svg.png',
    },
    {
      name: 'React',
      logo: 'https://cdn.iconscout.com/icon/free/png-256/react-1-282599.png',
    },
    {
      name: 'Python',
      logo: 'https://cdn3.iconfinder.com/data/icons/logos-and-brands-adobe/512/267_Python-512.png',
    },
    {
      name: 'MongoDB',
      logo: 'https://cdn.iconscout.com/icon/free/png-256/mongodb-4-1175139.png',
    },
    {
      name: 'Node.js',
      logo: 'https://cdn.iconscout.com/icon/free/png-256/node-js-1174925.png',
    },
    {
      name: 'PostgreSQL',
      logo: 'https://cdn.iconscout.com/icon/free/png-256/postgresql-226047.png',
    },
    {
      name: 'Java',
      logo: 'https://cdn.iconscout.com/icon/free/png-256/java-43-569305.png',
    },
    {
      name: 'C++',
      logo: 'https://cdn.iconscout.com/icon/free/png-256/c-4-226082.png',
    },
    {
      name: 'Golang',
      logo: 'https://cdn.icon-icons.com/icons2/2699/PNG/512/golang_logo_icon_171073.png',
    },
    {
      name: 'SASS',
      logo: 'https://cdn.iconscout.com/icon/free/png-256/sass-226054.png',
    },
    {
      name: 'Rust',
      logo: 'https://th.bing.com/th/id/R.6263df62840add6bc6123157bac295f5?rik=kqtt2PAY49wR4A&pid=ImgRaw&r=0',
    },
    {
      name: 'Docker',
      logo: 'https://cdn.iconscout.com/icon/free/png-256/docker-226091.png',
    },
    {
      name: 'Kubernetes',
      logo: 'https://cdn.iconscout.com/icon/free/png-512/free-kubernets-283489.png',
    },
    {
      name: 'PHP',
      logo: 'https://cdn.iconscout.com/icon/free/png-256/php-2038871-1720084.png',
    }
  ];

  const formattedInterests = formatInterests(interests);
  const formattedOtherInterests = formatInterests(otherInterests);

  return (
    <div id="about">
      <div className="intro">
        <div className="wrapper">
          <h5>Hi, my name is</h5>
          <h1>Kyle James</h1>
          <h3>Software Developer, Finance, Solopreneur</h3>
        </div>
      </div>

      <h2>{'<About/>'}</h2>
      
      <div className="about">
        <p>I’m a recent graduate from the University of Ottawa with an Honours BSc in Computer Science.</p>
        <p>
          My current interests are {formattedInterests}. I continue to explore other areas of computer science/software 
          engineering such as {formattedOtherInterests}.
        </p>
        <br/>
        <p>A few technologies I’ve been working with recently or have worked with in the past:</p>

        { isMobile ? (
            <div className="container">
              {technologies.slice(0, 5).map((technology, index) => (
                <div className="item-mobile" key={index}>
                  <h4>{technology.name}</h4>
                  <img
                    src={technology.logo}
                    alt=""
                  />
                </div>
              ))}

              <div className="row-below">
                {technologies.slice(5).map((technology, index) => (
                  <div className="item-mobile" key={index}>
                    <h5>{technology.name}</h5>
                  </div>
                ))}
              </div>
            </div>
          ) : (
            <div className="container">
              {technologies.slice(0, 5).map((technology, index) => (
                <div className="item" key={index}>
                  <h4>{technology.name}</h4>
                  <img
                    src={technology.logo}
                    alt=""
                  />
                </div>
              ))}

              <div className="row-below">
                {technologies.slice(5).map((technology, index) => (
                  <div className="item smaller" key={index}>
                    <h5>{technology.name}</h5>
                    <img src={technology.logo} alt=""/>
                  </div>
                ))}
              </div>
            </div>
          )}
      </div>
    </div>
  )
}
