import "./about.scss";

export default function About() {
  return (
    <div id="about">
      <div className="intro">
        <div className="wrapper">
          <h6>Hi, my name is</h6>
          <h1>Kyle James.</h1>
          <h2>Software Engineering, Entrepreneurship, Finance</h2>
        </div>
      </div>

      <div className="about">
        <h3>{'<About/>'}</h3>

        <p>I’m a third year student at the University of Ottawa studying Computer Science.</p>
        <p>
          My current interests are <span>financial technologies</span>, <span>blockchain and web3</span>, <span>data analysis</span>, and <span>application development</span>. 
          I continue to explore other areas of computer science/software engineering such as <span>artificial intelligence</span>, <span>image processing</span>, etc.
        </p>
        <br/>
        <p>A few technologies I’ve been working with recently:</p>

        <div className="container">
          <div className="item">
            <h4>Javascript</h4>
            <img src="https://raw.githubusercontent.com/voodootikigod/logo.js/master/js.png" alt="" />
          </div>

          <div className="item">
            <h4>Vue.js</h4>
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Vue.js_Logo_2.svg/1184px-Vue.js_Logo_2.svg.png" alt="" />
          </div>

          <div className="item">
            <h4>React</h4>
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png" alt="" />
          </div>

          <div className="item">
            <h4>Python</h4>
            <img src="https://cdn3.iconfinder.com/data/icons/logos-and-brands-adobe/512/267_Python-512.png" alt="" />
          </div>

          <div className="item">
            <h4>MongoDB</h4>
            <img src="https://cdn.iconscout.com/icon/free/png-256/mongodb-4-1175139.png" alt="" />
          </div>
        </div>
      </div>
    </div>
  )
}
