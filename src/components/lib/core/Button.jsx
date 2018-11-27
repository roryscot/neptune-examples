import React from "react";

import classNames from "classnames";
import styles from "styles/css/theme1.css";

const Button = (props) => {
  const { className, children, theme, tag, ...rest } = props;
  const CustomTag = `${tag}`;
  return (
    <CustomTag { ...rest } className={ classNames(styles.root, theme, className) }>
      { children }
    </CustomTag>
  );
};

Button.theme = {
  secondary: styles.secondary,
  primary: styles.primary
};

Button.defaultProps = {
  theme: Button.theme.primary,
  tag: "button"
};

Button.displayName = Button.name;

Button.propTypes = {
  theme: React.PropTypes.string,
  tag: React.PropTypes.string,
  className: React.PropTypes.string,
  children: React.PropTypes.oneOfType([
    React.PropTypes.string,
    React.PropTypes.element,
    React.PropTypes.arrayOf(React.PropTypes.element)
  ])
};


export default Button;