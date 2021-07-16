import React from 'react';
import '../styles/Header.css';
// We declare an object called styles that will contain a few objects for card and heading styles
// Notice that each key lists CSS styles in camel case
// const styles = {
//   card: {
//     margin: 10,
//     background: '#2e8d52',
//   },
//   heading: {
//     background: '##2e8d52',
//     minHeight: 50,
//     lineHeight: 3.5,
//     fontSize: '2rem',
//     color: 'white',
//     padding: '0 20px',
//   },
// };

// In Navbar, we can assign a style from an object by using curly braces
function Navbar() {
  return (
    // <div style={styles.card}>
      // {/* <div style={styles.heading}>Navigation</div> */}
      <div className = "row">
        
        <ul>

<li>
  <a href="#projects">Projects</a>
</li>
<li>
  <a href="#resume">Resume</a>
</li>
<li>
  <a href="#contact">Contact Me</a>
</li>
</ul>
     </div>
  );
}

export default Navbar;
