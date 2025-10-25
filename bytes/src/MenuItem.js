function MenuItem({ name, description, imageSrc }) {
  return (
    <div className="menu-item">
      <img className="menu-item-image" src={imageSrc} alt={`${name} picture`} />
      <h4>{name}</h4>
      <p>{description}</p>
    </div>
  );
}

export default MenuItem