const ITEMS = [
  {
    title: "LEARN REACT",
    description: "In-depth",
  },
  {
    title: "PRACTICE",
    description: "Practice working with React, components, etc.",
  },
];

export const Card = ({ title, description }) => {
  return (
    <div className="card">
      <h2>{title}</h2>
      <p>{description}</p>
    </div>
  );
};
