export function getRandomInt(max) {
  return Math.floor(Math.random() * (max + 1));
}

import { userData } from "../App";
export const User = () => {
  const randomName = userData[getRandomInt(userData.length - 1)];
  return (
    <div className="dynamic">
      <h1>TIME TO PRACTISE</h1>
      <p>Welcome on board of this course! You got this 💪</p>
      <div className="dynamic-container">
        {randomName}
        <p>Instructor</p>
      </div>
    </div>
  );
};
