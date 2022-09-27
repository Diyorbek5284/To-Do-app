import style from "./Card.module.css";

const Card = ({ image, image2 }) => {
  return (
    <div className={style.card}>
      <img src={image} />
      <img src={image2} />
    </div>
  );
};
export default Card;
