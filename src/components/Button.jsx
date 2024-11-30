export const Button = ({ children, mode = "filled", Icon, ...props }) => {
  return (
    <button className={mode} {...props}>
      {Icon && (
        <>
          <span>
            <Icon />
          </span>
        </>
      )}
      {children}
    </button>
  );
};
