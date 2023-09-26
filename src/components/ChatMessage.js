const ChatMessage = ({ name, message }) => {
  return (
    <div className="text-white text-xs flex items-center py-2">
      <img
        className="h-5"
        alt="user"
        src="https://www.nicepng.com/png/full/136-1366211_group-of-10-guys-login-user-icon-png.png"
      />
      <p className="px-2">
        <span className="p text-zinc-500 font-bold">{name}</span>
        <span className="pl-2">{message}</span>
      </p>
    </div>
  );
};

export default ChatMessage;
