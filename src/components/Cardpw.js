import React from 'react';

// We declare an object called styles that will contain a few objects for card and heading styles
// Notice that each key lists CSS styles in camel case
const styles = {
  card: {
    margin: 20,
    background: '#e8eaf6',
  },
  heading: {
    background: '#3f51b5',
    minHeight: 50,
    lineHeight: 3.5,
    fontSize: '1.2rem',
    color: 'white',
    padding: '0 20px',
  },
  content: {
    padding: 20,
  },
};

// In `Card`, we can assign a style from an object by using curly braces
// We are assigning the card, heading, and content all from our `style` object
function Card2() {
  return (
    <div style={styles.card}>
      <div style={styles.heading}>Quick and Easy Password Generator</div>
      <div style={styles.content}>
        Based on a need to streamline and simplify our lives while at the same time increasing the complexity of our digital footprint, steps must be taken (get it, 'footprint'/'steps'?) to make access to that complexity both challenging to others to figure out and easy for us to apply.
      </div>
    </div>
  );
}

export default Card2;
