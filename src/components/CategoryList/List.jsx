import PropTypes from "prop-types";

const List = ({ list }) => {
  const { logo, category_name, availability } = list;
  return (
    <div className="bg-[#7E90FE] bg-opacity-5 items-center justify-center p-5 rounded-lg hover:bg-[#e5e7f9] shadow-md shadow-[#9873FF]">
      <div>
        <img
          className="bg-[#7E90FE] bg-opacity-15 p-2 rounded-lg mb-4"
          src={logo}
          alt=""
        />
        <div className="mr-8">
          <h3 className="font-semibold text-lg">{category_name}</h3>
          <p className="opacity-70">{availability}</p>
        </div>
      </div>
    </div>
  );
};

List.propTypes = {
  list: PropTypes.string.isRequired,
};

export default List;
