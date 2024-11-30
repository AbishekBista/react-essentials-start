import "./AboutCard.css";
export const AboutCard = ({ children, name }) => {
  return (
    <div className="about-card">
      <h2>{name}</h2>
      {children}
    </div>
  );
};
