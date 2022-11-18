import PropTypes from "prop-types";

const ViewMore = (props) => {
  const { onClick } = props;

  return (
    <span className="services__button" onClick={onClick}>
      View More
      <i className="uil uil-arrow-right services__button-icon"></i>
    </span>
  );
};

ViewMore.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default ViewMore;
