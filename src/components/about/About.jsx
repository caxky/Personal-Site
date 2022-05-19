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
      </div>
    </div>
  )
}
