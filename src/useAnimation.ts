import { inView } from "motion/react";
import { useEffect } from "react";

export function useAnimation() {
  useEffect(() => {
    inView(".fade-up", (card) => {
      card.target.classList.add("animate-fade-up");
      card.target.classList.add("animate-delay-200");
    });
    inView(".fade-right", (card) => {
      card.target.classList.add("animate-fade-right");
      card.target.classList.add("animate-delay-200");
    });
    inView(".fade-left", (card) => {
      card.target.classList.add("animate-fade-left");
      card.target.classList.add("animate-delay-200");
    });
    inView(".fade-down", (card) => {
      card.target.classList.add("animate-fade-down");
    });
  }, []);
}
