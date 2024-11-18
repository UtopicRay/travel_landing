import { inView } from "motion/react";

export function useAnimation() {
  inView(".fade-up", (card) => {
    card.target.classList.add("animate-fade-up");
  });
  inView(".fade-right", (card) => {
    card.target.classList.add("animate-fade-right");
  });
  inView(".fade-left", (card) => {
    card.target.classList.add("animate-fade-left");
  });
  inView(".fade-down", (card) => {
    card.target.classList.add("animate-fade-down");
  });
}
