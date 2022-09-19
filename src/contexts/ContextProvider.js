import React, { createContext, useContext, useState } from "react";

const StateContext = createContext();

const initialState = {
  // Khai báo trạng thái đóng mở của icon trên navbar
  chat: false,
  cart: false,
  notification: false,
  userProfile: false,
};

export const ContextProvider = ({ children }) => {
  const [activeMenu, setActiveMenu] = useState(true);
  return (
    <StateContext.Provider value={{ activeMenu, setActiveMenu }}>
      {children}
      {/* Means ContextProvider bọc cái gì vào thì cũng sẽ hiển thị ra cái đấy. Ko hiểu thì xem lại useContext của F8 */}
    </StateContext.Provider>
  );
};

export const useStateContext = () => useContext(StateContext);
/*
Bình thường sẽ export cai này:
- export { StateContext };
Sau đó qua Component con sẽ
- import  StateContext form './contexts/ContextProvider'
-const activeMenu = useContext(StateContext)

BUT ĐÉO.
Nó export 1 cái hàm chứa sẵn "useContext(StateContext)"
Nên qua Component chỉ cần: gán biến với hàm được Call:
- const activeMenu = useStateContext()
*/
