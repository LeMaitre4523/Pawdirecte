import type { DoubleAuthChallenge } from "~/models";
import { decode } from "js-base64";

export const decodeDoubleAuthChallenge = (challenge: any): DoubleAuthChallenge => {
  return {
    question: decode(challenge.question),
    answers: challenge.propositions.map(decode)
  };
};
