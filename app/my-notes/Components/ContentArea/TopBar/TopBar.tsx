import { useGlobalContext } from "@/ContextApi";
import DarkMode from "./DarkMode";
import ProfileUser from "./ProfileUser";
import SearchBar from "./SearchBar";
import SideBarMenuIcon from "./SideBarMenuIcon";

export default function TopBar() {

    const {darkModeObject: {darkMode}} = useGlobalContext() 

    return <div className={`${darkMode[1].isSelected? "bg-slate-800 text-white": "bg-white"} rounded-lg flex justify-between p-[8px]`}>
        <ProfileUser />
        <SearchBar />
       <div className="flex gap-4 items-center">
       <DarkMode />
       <SideBarMenuIcon />
       </div>
    </div>
}