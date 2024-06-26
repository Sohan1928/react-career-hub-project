import { useEffect, useState } from "react";
import List from "./List";

const CategoryList = () => {
  const [lists, setLists] = useState([]);

  useEffect(() => {
    fetch("categories.json")
      .then((res) => res.json())
      .then((data) => setLists(data));
  }, []);

  return (
    <div className="my-6">
      <h1 className="text-2xl font-bold text-center lg:text-4xl">
        Job Category List
      </h1>
      <p className="m-4 opacity-70 text-center">
        <small>
          Explore thousands of job opportunities with all the information you
          need. Its your future.
        </small>
      </p>

      <div className="space-y-1 m-2 lg:flex gap-4 text-center  justify-center my-7">
        {lists.map((list) => (
          <List key={list.id} list={list}></List>
        ))}
      </div>
    </div>
  );
};

export default CategoryList;
