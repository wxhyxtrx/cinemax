const Card = ({ children, className }:any) => {
  return <div className={`bg-primary-light ${className}`}>{children}</div>;
};

export default Card;
