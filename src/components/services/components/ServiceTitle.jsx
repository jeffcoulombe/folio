import classNames from "classnames";
import PropTypes from "prop-types";

const ServiceTitle = (props) => {
  const { icon, children } = props;

  return (
    <div>
      <i className={classNames(icon, "uil", "services__icon")}></i>
      <h3 className="services__title">{children}</h3>
    </div>
  );
};

ServiceTitle.propTypes = {
  icon: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default ServiceTitle;
