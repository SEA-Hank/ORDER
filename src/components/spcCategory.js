import SpcItem from "./spcItem";
const SpcCategory = ({ category, items }) => {
  const generateItems = () => {
    let list = [];
    for (let foodId in items) {
      if (items[foodId] != 0)
        list.push(
          <SpcItem
            key={foodId}
            category={category}
            foodId={foodId}
            quantity={items[foodId]}
          />
        );
    }
    return list;
  };
  return (
    <div className="category-wrapper">
      <p className="category-title">{category}</p>
      <div className="items-wrapper">{generateItems()}</div>
    </div>
  );
};

export default SpcCategory;
