"use client"
import { useGlobalContext } from "@/ContextApi";

function DarkMode() {
    const {
        darkModeObject: {darkMode, setDarkMode}
    } = useGlobalContext() 

    function handleClickedDarkMode (index: number) {
    
        const updatedDarkModeObject = darkMode.map((item, i) => {
            if(i === index) {
                return {...item, isSelected: true}
            } else {
                return {...item, isSelected: false}
            }
        })
    
        setDarkMode(updatedDarkModeObject)
    }

    return (
        <div className={`${darkMode[1].isSelected? "bg-slate-700": "`bg-slate-10"} w-[74px] h-[36px] rounded-3xl flex items-center gap-2 pl-[5px]`}>
            {darkMode.map((item, i) => {
                return (
                    <div className={`${item.isSelected? "bg-main text-white": "bg-slate-100 text-main"} w-7 h-7 flex items-center justify-center rounded-full top-[4px] p-1 left-1 cursor-pointer select-none`}
                    key={i}
                    onClick={() => handleClickedDarkMode(i)}>
                        {item.icon}
                    </div>
                )
            })}
        </div>
    )

}

export default DarkMode
