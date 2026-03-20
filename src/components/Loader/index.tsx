import "./styles.css";

export const PortalLoader = () => {
  return (
    <div className="loader-container">
      <div className="portal">
        <div className="portal-inner"></div>
        <div className="portal-core"></div>
      </div>
      <p className="loader-text">Saltando de dimensión...</p>
    </div>
  );
};
