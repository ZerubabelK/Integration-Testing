import { useDispatch, useSelector } from "react-redux";
import { getOrders, setNewOrder } from "../redux/order/slice";

function useOrder() {
  const dispatch = useDispatch();
  const { auth, order } = useSelector((state) => state);
  const { user } = auth;
  const { orders, new_order, isLoading, error } = order;
  return {
    getOrders(param = "", query = "") {
      dispatch(getOrders({ token: user.token, query }));
    },
    addUserForCreateOrder(user_id) {
      dispatch(setNewOrder({ ...new_order, user_id }));
    },
    addDetails(details) {
      dispatch(
        setNewOrder({
          ...JSON.parse(JSON.stringify(details)),
          ...JSON.parse(JSON.stringify(new_order)),
          operator_id: user._id,
        })
      );
    },
    orders,
    new_order,
    isLoading,
    error,
  };
}

export default useOrder;
