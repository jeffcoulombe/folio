import classNames from "classnames";
import PropTypes from "prop-types";

import ServiceListItem from "./ServiceListItem";

const ServiceModal = (props) => {
  const { tabIndex, toggleState, onClose, title, description, serviceItems } =
    props;

  return (
    <div
      className={classNames("services__modal", {
        "active-modal": toggleState === tabIndex,
      })}
    >
      <div className="services__modal-content">
        <i
          onClick={onClose}
          className="uil uil-times services__modal-close"
        ></i>

        <h3 className="services__modal-title">{title}</h3>
        <p className="services__modal-description">{description}</p>

        <ul className="services__modal-services grid">
          {serviceItems.map((item, i) => (
            <ServiceListItem text={item} key={`service-${i}`} />
          ))}
        </ul>
      </div>
    </div>
  );
};

ServiceModal.propTypes = {
  tabIndex: PropTypes.number.isRequired,
  toggleState: PropTypes.number.isRequired,
  onClose: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  serviceItems: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default ServiceModal;
