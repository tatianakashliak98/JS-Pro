import React,{FC} from 'react'
import "./style.css"
import Tab from './Tab/Tab'
import { useNavigate } from 'react-router-dom';
interface ITabsContainer{
  customClassAll?: string,
  customClassFavorite?: string,
  customClassPopular?: string,
}

const TabsContainer: FC<ITabsContainer> = ({ customClassAll, customClassFavorite, customClassPopular }) => {
  const navigate = useNavigate();
  return (

    <div className='tabs__container'>

      <Tab onClick={()=>navigate("/posts")} customClass={customClassAll} text="All"/>
      <Tab onClick={()=>navigate("/postsIsFavorine")}customClass={customClassFavorite} text="My favorites" />
      <Tab customClass={customClassPopular} text="Popular" />

    </div>
  )
}

export default TabsContainer
