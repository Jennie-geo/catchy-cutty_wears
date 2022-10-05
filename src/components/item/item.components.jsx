import "./item.style.scss";
// import "./categories.style.scss";
const ContentItem = ({ content }) => {
  const { title, url } = content;
  return (
    <div className="category-container">
      <div
        className="background-image"
        style={{ backgroundImage: `url(${url})` }}
      />
      <div className="category-body-container">
        <h2>{title}</h2>
        <p>Shop now</p>
      </div>
    </div>
  );
};
export default ContentItem;
