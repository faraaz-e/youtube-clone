import { useSelector } from "react-redux";

const Sidebar = () => {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);

  // Early return
  if (!isMenuOpen) return null;

  return (
    <div className="col-span-2 px-4 py-3 text-white hidden md:block">
      <div className="space-y-1">
        <div className="flex p-2 hover:bg-zinc-800 hover:rounded-lg hover:w-1/2">
          <span className="material-symbols-outlined">home</span>
          <label className="px-5">Home</label>
        </div>
        <div className="flex p-2 hover:bg-zinc-800 hover:rounded-lg hover:w-1/2">
          <span className="material-symbols-outlined">slow_motion_video</span>
          <label className="px-5">Shorts</label>
        </div>
        <div className="flex p-2 hover:bg-zinc-800 hover:rounded-lg hover:w-1/2">
          <span className="material-symbols-outlined">subscriptions</span>
          <label className="px-5">Subscriptions</label>
        </div>

        <div className="border-t border-zinc-800 w-1/2"></div>

        <div className="flex p-2 hover:bg-zinc-800 hover:rounded-lg hover:w-1/2">
          <span className="material-symbols-outlined">video_library</span>
          <label className="px-5">Library</label>
        </div>
        <div className="flex p-2 hover:bg-zinc-800 hover:rounded-lg hover:w-1/2">
          <span className="material-symbols-outlined">history</span>
          <label className="px-5">History</label>
        </div>
        <div className="flex p-2 hover:bg-zinc-800 hover:rounded-lg hover:w-1/2">
          <span className="material-symbols-outlined">schedule</span>
          <label className="px-5">Watch Later</label>
        </div>
        <div className="flex p-2 hover:bg-zinc-800 hover:rounded-lg hover:w-1/2">
          <span className="material-symbols-outlined">thumb_up</span>
          <label className="px-5">Liked videos</label>
        </div>

        <div className="border-t border-zinc-800 w-1/2"></div>

        <h1 className="p-2"> Subscriptions </h1>

        <div className="flex p-2 hover:bg-zinc-800 hover:rounded-lg hover:w-[51%]">
          <span className="material-symbols-outlined">add_circle</span>
          <label className="px-5">Browse channels</label>
        </div>

        <div className="border-t border-zinc-800 w-1/2"></div>

        <h1 className="p-2"> Explore </h1>

        <div className="flex p-2 hover:bg-zinc-800 hover:rounded-lg hover:w-1/2">
          <span className="material-symbols-outlined">
            local_fire_department
          </span>
          <label className="px-5">Trending</label>
        </div>
        <div className="flex p-2 hover:bg-zinc-800 hover:rounded-lg hover:w-1/2">
          <span className="material-symbols-outlined">shopping_bag</span>
          <label className="px-5">Shopping</label>
        </div>
        <div className="flex p-2 hover:bg-zinc-800 hover:rounded-lg hover:w-1/2">
          <span className="material-symbols-outlined">music_note</span>
          <label className="px-5">Music</label>
        </div>
        <div className="flex p-2 hover:bg-zinc-800 hover:rounded-lg hover:w-1/2">
          <span className="material-symbols-outlined">movie</span>
          <label className="px-5">Movies</label>
        </div>
        <div className="flex p-2 hover:bg-zinc-800 hover:rounded-lg hover:w-1/2">
          <span className="material-symbols-outlined">sensors</span>
          <label className="px-5">Live</label>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
