import { createContext, useEffect, useState } from "react";
export const UserContext = createContext(null);

const UserStore = (props) => {
  const [color, setColor] = useState(localStorage.getItem("bgcolor"));

  useEffect(
    () => {
      localStorage.setItem("bgcolor", color);
    },
    { color }
  );

  return (
    <UserContext.Provider
      value={{
        color,
        setColor,
      }}
    >
      {props.children}
    </UserContext.Provider>
  );
};
export default UserStore;
// 화면 껐을 때도 유지됨
