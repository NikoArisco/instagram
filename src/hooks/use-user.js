import { useState, useEffect, useContext } from "react";
import UserContext from "../context/user";
import { getUserByUserId } from "../services/firebase";

const useUser = () => {
  const [activeUser, setactiveUser] = useState({});
  const { user } = useContext(UserContext);

  useEffect(() => {
    async function getUserObjByUserId() {
      const [response] = await getUserByUserId(user.uid);
      setactiveUser(response);
    }
    if (user?.uid) {
      getUserObjByUserId();
    }
  }, [user]);
  return { user: activeUser };
};

export default useUser;
