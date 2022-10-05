import "./directory.style.scss";
import ContentItem from "../item/item.components";

const Directory = ({ contents }) => {
  console.log(contents);
  return (
    <div className="categories-container">
      {contents.map((content) => (
        <ContentItem key={content.id} content={content} />
      ))}
    </div>
  );
};
export default Directory;
