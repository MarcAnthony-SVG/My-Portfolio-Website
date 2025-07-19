import React from 'react';
import { useSpring, useTrail, animated } from '@react-spring/web';
import './NavBar.css'; // The updated CSS we discussed earlier
import { Link } from 'react-scroll';
const navItems = [
  { Name: 'Home', Link: 'home' }, 
  { Name: 'Profile', Link: 'profile-section' }, 
  { Name: 'Experience', Link: 'experience-section' }, 
  { Name: 'Projects', Link: 'projects-section' }, 
  { Name: 'Contact', Link: 'contact-section' }
];

const NavBar = () => {
  // Slide in the whole nav bar
  const navBarSpring = useSpring({
    from: { transform: 'translateY(-100%)', opacity: 0 },
    to: { transform: 'translateY(0%)', opacity: 1 },
    config: { tension: 400, friction: 40 },
  });

  // Fade in each nav item one by one
  const trail = useTrail(navItems.length, {
    from: { opacity: 0, transform: 'translateY(-10px)' },
    to: { opacity: 1, transform: 'translateY(0)' },
    config: { mass: 1, tension: 170, friction: 20 },
    delay: 300, // delay after nav bar drops
  });

  return (
    <animated.nav className="nav-content" style={navBarSpring}>
      <ul>
        {trail.map((style, index) => (
        
            <Link
              activeClass="active"
              to={navItems[index].Link}
              spy={true}
              smooth={true}
              offset={1}
              duration={1000}
            >  <animated.li key={index} style={style}>{navItems[index].Name} </animated.li>
            </Link>
         
        ))}
      </ul>
    </animated.nav>
  );
};
export default NavBar