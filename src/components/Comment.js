const Comment = ({ data }) => {
  const { name, text, replies } = data;

  return (
    <div className="p-4 flex">
      <img
        className="h-7"
        alt="user"
        src="https://www.nicepng.com/png/full/136-1366211_group-of-10-guys-login-user-icon-png.png"
      />
      <div className="px-3">
        <p className="font-bold">{name}</p>
        <p className="">{text}</p>
      </div>
    </div>
  );
};

export default Comment;
