import classNames from "classnames";

function Heading({ level = 1, children, className }) {
  if (level === 1) {
    return (
      <h1
        className={classNames(
          "text-3xl font-jostBold text-white  tracking-tight  sm:text-4xl md:text-5xl my-8",
          className
        )}
      >
        {children}
      </h1>
    );
  }
  if (level === 2) {
    return (
      <h2
        className={classNames(
          "text-4xl tracking-tight  font-jostBold my-6",
          className
        )}
      >
        {children}
      </h2>
    );
  }
  if (level === 3) {
    return (
      <h3
        className={classNames(
          "text-4xl tracking-tight font-jostMedium my-4",
          className
        )}
      >
        {children}
      </h3>
    );
  }
}

export default Heading;
