import React from "react";
import StoredItem from "../components/StoredItem";
import items from "../data/items.json";
const Store = () => {
  return (
    <>
      <h1 className="text-[40px] font-bold mb-4">Store</h1>
      <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
        {items.map((item) => {
          return (
            <React.Fragment key={JSON.stringify(item.id)}>
              <StoredItem {...item} />
            </React.Fragment>
          );
        })}
      </div>
    </>
  );
};

export default Store;
