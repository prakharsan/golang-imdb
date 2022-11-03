const Select = (props) => {
  return (
    <>
      <div className="mb-3">
        <label htmlFor={props.name} className="form-label">
          {props.title}
        </label>
      </div>
      <select
        className={`form-control ${props.className}`}
        name={props.name}
        value={props.value}
        onChange={props.handleChange}
      >
        <option value="">{props.placeholder}</option>
        {props.options.map((option) => {
          return (
            <option
              className="form-select"
              key={option.id}
              value={option.value}
              label={option.label}
            >
              {option.value}
            </option>
          );
        })}
      </select>
      <div className={props.errorDiv}>{props.errorMsg}</div>
    </>
  );
};

export default Select;
