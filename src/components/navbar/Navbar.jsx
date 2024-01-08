import './navbar.scss';

export default function Navbar() {
  return (
    <div className='navbar'>
      <div className="wrapper">
        <div className='left'>
          <a href="#about" className='logo'>Kyle</a>
        </div>
        <div className='right'>
          <a href="#about">{'<About/>'}</a>
          <a href="#projects">{'<Projects/>'}</a>
          <a href="#contact">{'<Contact/>'}</a>
        </div>
      </div>
    </div>
  )
}
