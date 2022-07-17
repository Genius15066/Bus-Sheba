import { ProSidebar, Menu, MenuItem } from 'react-pro-sidebar'
import 'react-pro-sidebar/dist/css/styles.css'
import { Link } from 'react-router-dom'
import { FaGem } from 'react-icons/fa'
import { MdManageAccounts, MdOutlineAirplaneTicket } from 'react-icons/md'
import { AiOutlineAppstoreAdd } from 'react-icons/ai'
import { BsFillBookmarkCheckFill } from 'react-icons/bs'

import React from 'react'

function SideBar() {
  return (
    <ProSidebar>
      <Menu iconShape="square">
        <MenuItem className="mt-5 sidebar_style" icon={<FaGem />}>
          BusList
          <Link to="/dashboard/buslist" />
        </MenuItem>
        <MenuItem className="sidebar_style" icon={<BsFillBookmarkCheckFill />}>
          Bus Booking
          <Link to="/dashboard/managebus" />
        </MenuItem>
        <MenuItem className="sidebar_style" icon={<MdOutlineAirplaneTicket />}>
          My Ticket
          <Link to="/dashboard/managebus" />
        </MenuItem>
        <MenuItem className="sidebar_style" icon={<AiOutlineAppstoreAdd />}>
          Add Bus
          <Link to="/dashboard/addbus" />
        </MenuItem>
        <MenuItem className="sidebar_style" icon={<MdManageAccounts />}>
          Manage Bus
          <Link to="/dashboard/managebus" />
        </MenuItem>
      </Menu>
    </ProSidebar>
  )
}

export default SideBar
