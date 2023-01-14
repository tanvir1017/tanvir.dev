import classNames from "classnames";

function Text({ children, className }) {
  return <p className={classNames("", className)}>{children}</p>;
}

export default Text;
