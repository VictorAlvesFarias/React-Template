import { Home, LucideHome, LucideList, LucideMenu, LucideUser } from 'lucide-react'
import React, { useContext } from 'react'
import { Route, Routes } from 'react-router-dom'
import { AuthContext } from '../context/auth-context'
import SidebarRoot from '../components/sidebar-root'
import SidebarMenu from '../components/sidebar-menu'
import SidebarItem from '../components/sidebar-item'
import SidebarHref from '../components/sidebar-href'
import SidebarHamburguer from '../components/sidebar-hamburguer'
import SidebarContent from '../components/sidebar-content'

function Application() {
    const {logout} = useContext(AuthContext)

    return (
        <SidebarRoot>
            <SidebarMenu>
                <SidebarItem href='/home'>
                    <LucideHome className='w-5 h-5' strokeWidth={1.75} />
                    <SidebarHref>Home</SidebarHref>
                </SidebarItem>
                <SidebarItem onClick={logout} href='' variation='spacing-top'>
                    <LucideHome  className='w-5 h-5' strokeWidth={1.75} />
                    <SidebarHref>Exit </SidebarHref>
                </SidebarItem>
            </SidebarMenu>
            <SidebarContent>
                <SidebarHamburguer>
                    <LucideMenu className='w-7 h-7 text-zinc-300' />
                </SidebarHamburguer>
                <Routes>
                    <Route path="/home/*" element={<Home />} />
                </Routes>
            </SidebarContent>
        </SidebarRoot>
    )
}

export default Application