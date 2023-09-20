const Header = () => {
  return (
    <div className="grid grid-flow-col">
      <div className="flex col-span-2 py-2 px-5 items-center">
        <button className="hidden md:block">
          <span className="material-symbols-outlined text-white align-middle">
            menu
          </span>
        </button>

        <img
          className="h-5 pl-4"
          alt="logo"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/54/YouTube_dark_logo_2017.svg/1280px-YouTube_dark_logo_2017.svg.png"
        />

        <sup className="text-zinc-400 pl-1">IN</sup>
      </div>

      <div className="col-span-8 flex justify-center py-2">
        <input
          type="text"
          className="py-1 px-4 border border-solid border-zinc-800 bg-black text-white focus:border-blue-800 rounded-l-full w-1/2"
          placeholder="Search"
        />

        <button className="py-1 px-4 border border-solid border-zinc-800 bg-zinc-800 hover:bg-zinc-700 rounded-r-full">
          <span className="material-symbols-outlined text-white align-middle">
            search
          </span>
        </button>

        <button className="mx-3 p-2 bg-zinc-800 hover:bg-zinc-700 rounded-full text-white hidden md:block">
          <span className="material-symbols-outlined text-white align-middle">
            mic
          </span>
        </button>
      </div>

      <div className="p-2 col-span-2 flex justify-center items-center space-x-5">
        <button className="hidden md:block">
          <span className="material-symbols-outlined text-white align-middle">
            videocam
          </span>
        </button>

        <button>
          <span className="material-symbols-outlined text-white align-middle">
            notifications
          </span>
        </button>

        <img
          className="h-7"
          alt="user"
          src="https://www.nicepng.com/png/full/136-1366211_group-of-10-guys-login-user-icon-png.png"
        />
      </div>
    </div>
  );
};

export default Header;
