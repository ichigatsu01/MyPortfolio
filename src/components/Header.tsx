// import React from 'react'
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';

const Header = () => {
  return (
    <header className='header'>
      <h1>Welcome to My Portfolio!</h1>
      <div>
          <ul className="navi">
            <a href="https://github.com/ichigatsu01" target='_brank'>
              <li><GitHubIcon fontSize='large' /></li>
            </a>
            <li></li>
            <a href="mailto:firstmoon1986@gmail.com">
              <li><EmailIcon fontSize='large' /></li>
            </a>
            
          </ul>
      </div>
    </header>
  )
}

export default Header
