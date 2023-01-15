import classNames from "classnames";

function Text({ children, className }) {
  return (
    <p className={classNames("font-2xl my-4 font-jostRegular", className)}>
      {children}
    </p>
  );
}

export default Text;
