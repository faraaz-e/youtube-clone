import { useEffect, useState } from "react";
import ChatMessage from "./ChatMessage";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "../utils/chatSlice";
import { generateRandomMessage, generateRandomName } from "../utils/helper";

const LiveChat = () => {
  const [liveMessage, setLiveMessage] = useState("");
  const dispatch = useDispatch();
  const chatMessages = useSelector((store) => store.chat.messages);

  useEffect(() => {
    const i = setInterval(() => {
      // API Polling
      //   const data = fetch();
      //   const jsonData = data.json();
      dispatch(
        addMessage({
          name: generateRandomName(),
          message: generateRandomMessage(20),
        })
      );
    }, 1000);

    return () => clearInterval(i);
  }, []);

  return (
    <>
      <div className="mx-5 p-2 w-96 h-[500px] border border-zinc-800 rounded-lg text-white overflow-y-scroll flex flex-col-reverse">
        {chatMessages.map((c, i) => (
          <ChatMessage key={i} name={c.name} message={c.message} />
        ))}
      </div>

      <form
        className="mx-5 p-2 w-96 border border-zinc-800 rounded-lg flex"
        onSubmit={(e) => {
          e.preventDefault();
          dispatch(
            addMessage({
              name: "Tom Jerry",
              message: liveMessage,
            })
          );
          setLiveMessage("");
        }}
      >
        <input
          type="text"
          className="py-1 px-3 bg-transparent w-full border-b-[1px] border-zinc-500 text-white"
          placeholder="Chat..."
          value={liveMessage}
          onChange={(e) => setLiveMessage(e.target.value)}
        />
        <button>
          <span class="material-symbols-outlined text-zinc-500">send</span>
        </button>
      </form>
    </>
  );
};

export default LiveChat;
