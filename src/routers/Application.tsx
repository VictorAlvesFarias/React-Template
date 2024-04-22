import { LucideHome, LucideList, LucideMenu, LucideUser } from 'lucide-react'
import React, { useContext } from 'react'
import { Route, Routes } from 'react-router-dom'
import Sidebar from '../components/sidebar'
import { AuthContext } from '../context/auth-context'
import Home from '../pages/Home'

function Application() {
    const {logout} = useContext(AuthContext)

    return (
        <Sidebar.Root>
            <Sidebar.Menu>
                <Sidebar.Item href='/home'>
                    <LucideHome className='w-5 h-5' strokeWidth={1.75} />
                    <Sidebar.Href>Home</Sidebar.Href>
                </Sidebar.Item>
                <Sidebar.Item onClick={logout} href='' variation='spacing-top'>
                    <LucideHome  className='w-5 h-5' strokeWidth={1.75} />
                    <Sidebar.Href>Exit </Sidebar.Href>
                </Sidebar.Item>
            </Sidebar.Menu>
            <Sidebar.Content>
                <Sidebar.Hamburguer>
                    <LucideMenu className='w-7 h-7 text-zinc-300' />
                </Sidebar.Hamburguer>
                <Routes>
                    <Route path="/home/*" element={<Home />} />
                </Routes>
            </Sidebar.Content>
        </Sidebar.Root>
    )
}

export default Application