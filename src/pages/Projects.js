import Card from "./Card";
import { fetchSomeCards } from "../lib/utils";

export default function Cards() {
  const cards = fetchSomeCards();
  return cards.map(function (card, i) {
    return (
      <Card
        title={card.title}
        content={card.content}
        links={card?.link}
        key={i}
      />
    );
  });
}
