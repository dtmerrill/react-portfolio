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
function Card() {
  return (
    <div style={styles.card}>
      <div style={styles.heading}>Tabletop Auction House</div>
      <div style={styles.content}>
        `Tabletop Auction House provides a marketplace for gamers and game masters to create and exchange in-game equipment, both reducing the creative pressure on the gm and establishing a unique channel by which games might grow and evolve. Sometimes you don’t want to have to think about the ‘simple’ things when it comes to world-building. Our marketplace takes some of that pressure off while also creating a way to advance the story to whatever depth is desired by the team.`
      </div>
    </div>
  );
}

export default Card;
