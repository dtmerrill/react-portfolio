const styles = {
  card: {
    margin: 20,
    background: "#e8eaf6",
  },
  heading: {
    background: "#3f51b5",
    minHeight: 50,
    lineHeight: 3.5,
    fontSize: "1.2rem",
    color: "white",
    padding: "0 20px",
  },
  content: {
    padding: 20,
  },
};

export default function Card({ title, content, links }) {
  return (
    <div style={styles.card}>
      <div style={styles.heading}>{title}</div>
      <div style={styles.content}>{content}</div>
      {links && links.map(function (link, i) {
        return (
          <a href={link.href} key={i}>
            {link.title}
          </a>
        );
      })}
    </div>
  );
}
