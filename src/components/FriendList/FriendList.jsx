import FriendListItem from "../FriendListItem/FriendListItem";
import css from "./FriendList.module.css";

const FriendList = ({ data }) => {
  return (
    <ul className={css.list}>
      {data.map((friend) => (
        <li className={css.item} key={friend.id}>
          <FriendListItem friends={friend} />
        </li>
      ))}
    </ul>
  );
};

export default FriendList;