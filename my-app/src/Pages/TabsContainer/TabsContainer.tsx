import React from 'react'
import "./style.css"
import Tab from './Tab/Tab'

const TabsContainer = () => {
  return (

    <div className='tabs__container'>

      <Tab customClass='tab_container tab_container-active' text="All" />
      <Tab customClass='tab_container ' text="My favorites" />
      <Tab customClass='tab_container ' text="Popular" />

    </div>
  )
}

export default TabsContainer
