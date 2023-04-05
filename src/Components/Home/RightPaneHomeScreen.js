import React,{ useContext } from "react";
import { FcOpenedFolder } from "react-icons/fc";
import { BiEditAlt } from "react-icons/bi";
import { IoTrashOutline } from "react-icons/io5";
import Card from "../Card";
import { ModalContext } from "../../Context/ModalContext";
import { PlaygroundContext } from "../../Context/PlaygroundContext";
import { useNavigate } from "react-router-dom";
function RightPaneHomeScreen() {
  const navigate = useNavigate();
  const { openModal } = useContext(ModalContext);
  const { folders, deleteFolder, deleteCard } = useContext(PlaygroundContext);
  return (
    <div className="border-2 border-black h-screen p-8">
      <div className="flex justify-between items-center">
        <h2>
          My <span className="font-semibold text-2xl">PlayGroud</span>
        </h2>
        <h4
          onClick={() =>
            openModal({
              show: true,
              modalType: 1,
              identifiers: {
                folderId: "",
                cardID: "",
              },
            })
          }
        >
          <span className="font-semibold text-2xl">+</span> New Folder
        </h4>
      </div>
      <hr className="mb-12 mt-4 bg-black" />
      {Object.entries(folders).map(([folderId, folder]) => (
        <div className="flex flex-col my-8">
          <div className="flex justify-between items-center">
            <div className="flex items-center">
              <FcOpenedFolder size={"2em"} />
              <h3 className="font-semibold">{folder.title}</h3>
            </div>
            <div className="flex gap-4 items-center">
              <BiEditAlt
                size={"1.5em"}
                onClick={() => {
                  openModal({
                    show: true,
                    modalType: 4,
                    identifiers: {
                      folderId: folderId,
                      cardID: "",
                    },
                  });
                }}
              />
              <IoTrashOutline
                size={"1.5em"}
                onClick={() => deleteFolder(folderId)}
              />
              <h4
                onClick={() => {
                  openModal({
                    show: true,
                    modalType: 2,
                    identifiers: {
                      folderId: folderId,
                      cardID: "",
                    },
                  });
                }}
              >
                + New playground
              </h4>
            </div>
          </div>
          <hr className="mb-12 mt-4 bg-black" />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">
            {Object.entries(folder["playgrounds"]).map(
              ([playgroundId, playground]) => (
                <Card key={playgroundId}>
                  <div
                    className="flex items-center justify-between"
                    onClick={(e) => {
                      e.stopPropagation();
                      navigate(`/code/${folderId}/${playgroundId}`);
                    }}
                  >
                    <div className="flex gap-4">
                      <img src="/logo-small.png" alt="logo" />
                      <div>
                        <h4>{playground.title}</h4>
                        <h4>language: {playground.language}</h4>
                      </div>
                    </div>
                    <div
                      className="flex gap-4 items-center"
                      onClick={(e) => {
                        e.stopPropagation();
                      }}
                    >
                      <BiEditAlt
                        size={"1.5em"}
                        onClick={() =>
                          openModal({
                            show: true,
                            modalType: 5,
                            identifiers: {
                              folderId: folderId,
                              cardID: playgroundId,
                            },
                          })
                        }
                      />
                      <IoTrashOutline
                        size={"1.5em"}
                        onClick={() => deleteCard(folderId, playgroundId)}
                      />
                    </div>
                  </div>
                </Card>
              )
            )}
          </div>
        </div>
      ))}
    </div>
  );
}

export default RightPaneHomeScreen;
