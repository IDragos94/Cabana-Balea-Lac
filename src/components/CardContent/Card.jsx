function Card({ imageUrl, title }) {
  return (
    <div className="svg">
      <img src={imageUrl} />
      <title>{title}</title>
    </div>
  );
}
export default Card;
