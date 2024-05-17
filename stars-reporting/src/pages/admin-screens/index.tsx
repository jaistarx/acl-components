import { RootState } from "@/redux/store";
import { userActions, UserState } from "@/redux/user";
import React from "react";
import { useDispatch, useSelector } from "react-redux";

const Admin = () => {
  const dispatch = useDispatch();
  const user: UserState = useSelector((state: RootState) => state.user);
  return (
    <>
      <div>User: {user.firstName}</div>
      {/* <div>Error: {user.error.message}</div> */}
      <div>
        <button
          onClick={() =>
            dispatch(
              userActions.updateUser({
                userEmail: "3",
                firstName: "4",
                lastName: "5",
                userName: "6",
                loading: false,
                error: "",
              })
            )
          }
        >click</button>
      </div>
    </>
  );
};

export default Admin;
