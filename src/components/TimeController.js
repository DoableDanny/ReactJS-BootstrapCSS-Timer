function TimeController({ id, increment, decrement }) {
  return (
    <div className="col-xs-6 m-4">
      <button className="btn btn-secondary time-btn" onClick={increment}>
        <i class="fas fa-arrow-up"></i>
      </button>
      <p className="text-center my-2">{id}</p>
      <button className="btn btn-secondary time-btn" onClick={decrement}>
        <i className="fas fa-arrow-down"></i>
      </button>
    </div>
  );
}

export default TimeController;
