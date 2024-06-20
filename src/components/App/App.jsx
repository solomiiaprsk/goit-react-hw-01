import css from "./App.module.css";
import userData from "../../userData.json";
import Profile from "../Profile/Profile";
import friends from "../../friends.json";
import FriendList from "../FriendList/FriendList";
import items from "../../transactions.json";
import TransactionHistory from "../TransactionHistory/TransactionHistory";

const App = () => {
  return (
    <div className={css.container}>
      <Profile
        name={userData.username}
        tag={userData.tag}
        location={userData.location}
        image={userData.avatar}
        stats={userData.stats}
      />
      <FriendList data={friends} />
      <TransactionHistory items={items} />
    </div>
  );
};

export default App;