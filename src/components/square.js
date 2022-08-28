export const Square = (props) => {
  const classes = props.className ? `${props.className} square` : `square`;
  return (
    <span className={classes + (props.state === "X"? ` x` : ` o`)} onClick={props.onClick}>
      {props.state}
    </span>
  );
};
