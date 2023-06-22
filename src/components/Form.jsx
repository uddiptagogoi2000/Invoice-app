function Form() {
  return (
    <form className="form">
      <h2>New Invoice</h2>
      <h3>Bill From</h3>
      <div className="form-group">
        <label htmlFor="from-address" className="label">
          Street Address
        </label>
        <input type="text" id="from-address" className="input input-full" />
      </div>
      <div className="input-group">
        <div className="form-group">
          <label htmlFor="from-city" className="label">
            City
          </label>
          <input type="text" id="from-city" className="input" />
        </div>
        <div className="form-group">
          <label htmlFor="from-postcode" className="label">
            Post Code
          </label>
          <input type="text" id="from-postcode" className="input" />
        </div>
        <div className="form-group">
          <label htmlFor="text" className="label">
            Country
          </label>
          <input type="text" id="from-country" className="input" />
        </div>
      </div>
    </form>
  );
}

export default Form;
