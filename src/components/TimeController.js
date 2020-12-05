function TimeController({ id, increment, decrement }) {
  return (
    <div className="col-xs-6 m-4">
      <button className="btn btn-secondary time-btn" onClick={increment}>
        +
      </button>
      <p className="text-center my-2">{id}</p>
      <button className="btn btn-secondary time-btn" onClick={decrement}>
        -
      </button>
    </div>
  );
}

export default TimeController;
