import { env } from "../env.mjs"

export function getTimeRemaining() {
  const now = new Date();
  const endTime = new Date(env.NEXT_PUBLIC_VOTING_START_DATE).getTime();

  const remainingTime = endTime - now.getTime();

  const seconds = Math.floor((remainingTime / 1000) % 60);
  const minutes = Math.floor((remainingTime / 1000 / 60) % 60);
  const hours = Math.floor((remainingTime / (1000 * 60 * 60)) % 24);

  const days = Math.floor(remainingTime / (1000 * 60 * 60 * 24));

  return { days, hours, minutes, seconds };
}