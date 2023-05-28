import { useDispatch, useSelector } from "react-redux";
import { getUsers, setFilteredUsers } from "../redux/user/slice";

function useUser() {
  const { user } = useSelector((state) => state.auth);
  const { filtered_users, error } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  return {
    getFilteredUsers(query, param) {
      dispatch(getUsers({ query, param, token: user.token }));
    },
    resetUsers() {
      dispatch(setFilteredUsers([]));
    },
    filtered_users,
    error,
  };
}

export default useUser;
