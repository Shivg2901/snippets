import { useGlobalContext } from '@/ContextApi';
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';

const SideBarMenuIcon = () => {
  const { openSideBarObject: { openSideBar, setOpenSideBar } } = useGlobalContext();

  return (
    <>
      {!openSideBar ? (
        <MenuOutlinedIcon 
          onClick={() => setOpenSideBar(true)}
          className="text-slate-500 cursor-pointer hidden max-md:block md:hidden" 
        />
      ) : (
        <CloseOutlinedIcon 
          onClick={() => setOpenSideBar(false)}
          className="text-slate-500 cursor-pointer hidden max-md:block md:hidden" 
        />
      )}
    </>
  );
}

export default SideBarMenuIcon;
