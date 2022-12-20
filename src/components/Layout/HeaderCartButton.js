import classes from "./HeaderCartButton.module.css";
import CardIcon from "../Cart/CartIcon";

const HeaderCartButton = (props) => {
  return (
    <button className={classes.button}>
      <span className={classes.icon}>
        <CardIcon />
      </span>
      <span>Your cart</span>
      <span className={classes.badge}>2</span>
    </button>
  );
};

export default HeaderCartButton;
