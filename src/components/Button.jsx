// TODO: Add onClick functionality

const Button = ({ children, btnClass }) => {
  return (
    <>
      <button className={btnClass}>{children}</button>
    </>
  );
};
export default Button;
