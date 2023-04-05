import React, { useContext } from "react";
import LeftPaneHomeScreen from "../Components/Home/LeftPaneHomeScreen";
import RightPaneHomeScreen from "../Components/Home/RightPaneHomeScreen";
import { ModalContext } from "../Context/ModalContext";

import Modal from "../Components/Modal";
function Home() {
  const { isOpenModal } = useContext(ModalContext);
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2">
      <div className="sm:w-full md:w-full w-4/12">
        <LeftPaneHomeScreen />
      </div>
      <div className="sm:w-full md:w-full w-8/12">
        <RightPaneHomeScreen />
      </div>
      {isOpenModal.show && <Modal />}
    </div>
  );
}

export default Home;
