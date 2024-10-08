import { useGlobalContext } from "@/ContextApi";
import TopBar from "./TopBar/TopBar";
import SwiperSelection from "./NotesArea/SwipeSelection";

function ContentArea() {
    const {darkModeObject: {darkMode}} = useGlobalContext();

    return(
        <div className={`p-5 ${darkMode[1].isSelected ? "bg-slate-700" : "bg-slate-100"} w-full h-full overflow-hidden`}>
            <TopBar />
            <NotesArea />
        </div>
    );
}

function NotesArea() {
    return (
        <div className="mt-5 w-full h-full overflow-hidden">
            <SwiperSelection />
        </div>
    );
}

export default ContentArea;
