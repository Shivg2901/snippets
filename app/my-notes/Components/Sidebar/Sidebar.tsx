import DeveloperModeIcon from "@mui/icons-material/DeveloperMode";
import { SiJavascript, SiCplusplus, SiPython } from "react-icons/si";
import { useGlobalContext } from "@/ContextApi";
export default function Sidebar() {

    const {darkModeObject: 
        {darkMode},
        openSideBarObject: 
        {openSideBar, setOpenSideBar}} = useGlobalContext()

    return <div className={`${openSideBar? "fixed z-50 shadow-lg": "max-md:hidden"} pr-10 p-5 flex flex-col gap-2 h-screen pt-7 border-r ${darkMode[1].isSelected? "bg-slate-800": "bg-white"}`}>
        <Logo />
        <QuickLinks />
        <Languages />
    </div>
}

function Logo() {
    return <div className="flex gap-2 items-center">
        <div className="bg-main p-[6px] items-center">
        <DeveloperModeIcon sx = {{fontSize: 27, color: "white"}}/>
        </div>
        <div className="flex gap-1 text-[19px]">
            <span className="font-bold text-main">Snippets</span>
        </div>
    </div>
}

function QuickLinks() {

    const {sideBarMenuObject: {sideBarMenu, setSideBarMenu}} = useGlobalContext();


    function clickedMenu(index: number) {
        const updatedSideBarMenu = sideBarMenu.map((menu, i) => {
            if (i === index) {
                return { ...menu, isSelected: true };
            } else {
                return { ...menu, isSelected: false }; 
            }
        });
        setSideBarMenu(updatedSideBarMenu);
    }
    

    return <div className="mt-20 text-sm">
        <div className="font-bold text-slate-400">Quick Links</div>
        <ul className="text-slate-400 mt-4 flex flex-col gap-2">
            {sideBarMenu.map((menu, index) => (
                <li key={index} className={`flex cursor-pointer select-none gap-1 rounded-md w-full px-2 p-[7px] items-center ${menu.isSelected? "bg-main text-white": "text-slate-400"}`} onClick={() => clickedMenu(index)}>
                    {menu.icons}
                    <span>{menu.name}</span>
                </li>
            ))}
            
        </ul>
    </div>
}

function Languages() {
    return <div className="mt-12 text-sm">
        <div className="font-bold text-slate-400">Languages</div>
        <div className="mt-5 ml-2 text-slate-400 flex flex-col gap-4">
            <div className="flex justify-between">
                <div className="flex gap-1 items-center">
                    <SiJavascript size={15}/> JavaScript
                </div>
                <span className="font-bold">11</span>
            </div>

            <div className="flex justify-between">
                <div className="flex gap-1 items-center">
                    <SiCplusplus size={15}/> C++
                </div>
                <span className="font-bold">8</span>
            </div>

            <div className="flex justify-between">
                <div className="flex gap-1 items-center">
                    <SiPython size={15}/> Python
                </div>
                <span className="font-bold">14</span>
            </div>
        </div>
    </div>
}
