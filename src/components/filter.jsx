const Filter = ({ filter, onFilterSelect }) => {
  let btns = [
    { id: "all", label: "All products" },
    { id: "completed", label: "Completed" },
    { id: "big-size", label: "Big Size" },
  ];

  return (
    <div className="filter">
      <div className="btns">
        {btns.map((item) => (
          <button
            className={`${filter === item.id && "active"} `}
            key={item.id}
            onClick={() => onFilterSelect(item.id)}
          >
            {item.label}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Filter;
