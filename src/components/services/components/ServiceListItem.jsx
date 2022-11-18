import PropTypes from "prop-types";

const ServiceListItem = (props) => {
  const { text } = props;

  return (
    <li className="services__modal-service">
      <i className="uil uil-check-circle services__modal-icon"></i>
      <p className="services__modal-info">{text}</p>
    </li>
  );
};

ServiceListItem.propTypes = {
  text: PropTypes.string.isRequired,
};

export default ServiceListItem;
