const Tech = ({ tech }) => (
  <div>
      <div className="tech-stack-item">
        <div className="tech-image-container">
          <img
            src={tech.icon}
            alt={tech.name}
          />
        </div>
        <span>
          {tech.name}
        </span>
      </div>
  </div>
);

export default Tech;