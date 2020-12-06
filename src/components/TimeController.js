import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp, faArrowDown } from "@fortawesome/free-solid-svg-icons";

function TimeController({ id, increment, decrement }) {
  return (
    <div className="col-xs-6 m-4">
      <button className="btn btn-secondary time-btn" onClick={increment}>
        <FontAwesomeIcon icon={faArrowUp} />
      </button>
      <p className="text-center my-2">{id}</p>
      <button className="btn btn-secondary time-btn" onClick={decrement}>
        <FontAwesomeIcon icon={faArrowDown} />
      </button>
    </div>
  );
}

export default TimeController;
