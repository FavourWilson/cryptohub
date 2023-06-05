const Button = ({ children, className, hasIcon = !1, icon, onClick, type="button" }) => {
  return (
    <>
      <button
        onClick={onClick}
        type={type}
        className={`${
          hasIcon ? "flex items-center px-4" : "px-6"
        } ${className} py-2 font-medium tracking-wide capitalize transition-colors duration-300 transform rounded-lg focus:outline-none focus:ring focus:ring-opacity-80`}
      >
        {hasIcon && icon}
        <span className={`${hasIcon ? "mx-1" : ""}`}>{children}</span>
      </button>
    </>
  );
};

export default Button;
