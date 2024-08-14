import { useGlobalContext } from '@/ContextApi';
import SearchIcon from '@mui/icons-material/Search';

const SearchBar = () => {

  const {darkModeObject: {darkMode}} = useGlobalContext()

  return (
    <div className={`relative pl-3 w-[60%] h-[38px] ${darkMode[1].isSelected? "bg-slate-700": "bg-slate-100"} rounded-3xl flex items-center gap-2`}>
        <SearchIcon sx={{fontSize: 13}} className='text-main'/>
        <input placeholder='Search for a snippet...'
        className={`text-slate-500  ${darkMode[1].isSelected? "bg-slate-700": "bg-slate-100"} text-sm outline-none w-[70%]`}/>
        <AddSnippetButton />
    </div>
  )
}

const AddSnippetButton = () => {
    return (
        <div className='
        absolute flex gap-1 px-2 rounded-3xl bg-main p-1 text-[13px] text-white top-[6px] items-center cursor-pointer select-none right-[6px] max-md:px-1 
        '>

            <div className='font-bold'>
              +
            </div>
            <div className='max-md:hidden'>
              Snippet
            </div>
        </div>
    )
}

export default SearchBar