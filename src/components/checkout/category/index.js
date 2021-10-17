import Item from "./Item";
import ItemEditor from "./ItemEditor";
const Category = ({ category, items, popUp }) => {
  const generateItems = () => {
    let list = [];
    for (let foodId in items) {
      if (items[foodId] != 0)
        list.push(
          <Item
            key={foodId}
            category={category}
            foodId={foodId}
            quantity={items[foodId]}
            popUp={popUp}
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

export default Category;
export { ItemEditor };
