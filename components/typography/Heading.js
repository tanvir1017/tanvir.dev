import classNames from "classnames";

function Heading({ level = 1, children, className }) {
  if (level === 1) {
    return <h1 className={classNames("", className)}>{children}</h1>;
  }
  if (level === 2) {
    return <h2 className={classNames("", className)}>{children}</h2>;
  }
  if (level === 3) {
    return <h3 className={classNames("", className)}>{children}</h3>;
  }
}

export default Heading;
