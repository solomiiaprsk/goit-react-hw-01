
import css from "./FriendListItem.module.css";
import clsx from "clsx";

const FriendListItem = ({ friends: { avatar, name, isOnline } }) => {
  return (
    <>
      <img src={avatar} alt={name} width="60" />
      <p className={css.name}>{name}</p>
      <p className={clsx(css.status, isOnline ? css.green : css.red)}>
        {isOnline ? "Online" : "Offline"}
      </p>
    </>
  );
};

export default FriendListItem;
