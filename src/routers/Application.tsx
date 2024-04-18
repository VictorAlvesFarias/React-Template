import { LucideHome, LucideList, LucideMenu, LucideUser } from 'lucide-react'
import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Sidebar from '../components/Sidebar'
import Home from '../pages/Home'

function Application() {
    return (
        <Sidebar.Context>
            <Sidebar.Root>
                <Sidebar.Menu>
                    <Sidebar.Item href='/home'>
                        <LucideHome className='w-5 h-5' strokeWidth={1.75} />
                        <Sidebar.Href>Home</Sidebar.Href>
                    </Sidebar.Item>
                    <Sidebar.Item href='/list'>
                        <LucideList className='w-5 h-5' strokeWidth={1.75} />
                        <Sidebar.Href>List</Sidebar.Href>
                    </Sidebar.Item>
                    <Sidebar.Item href='/profile'>
                        <LucideUser className='w-5 h-5' strokeWidth={1.75} />
                        <Sidebar.Href>Profile</Sidebar.Href>
                    </Sidebar.Item>
                    <Sidebar.Item href='' variation='spacing-top'>
                        <LucideHome className='w-5 h-5' strokeWidth={1.75} />
                        <Sidebar.Href>Exit </Sidebar.Href>
                    </Sidebar.Item>
                </Sidebar.Menu>
                <Sidebar.Content>
                    <Sidebar.Hamburguer>
                        <LucideMenu className='w-7 h-7 text-zinc-300' />
                    </Sidebar.Hamburguer>
                    <Routes>
                        <Route path="/home" element={<Home />} />
                        <Route path="/list" element={<Home />} />
                        <Route path="/profile" element={<Home />} />
                    </Routes>
                </Sidebar.Content>
            </Sidebar.Root>
        </Sidebar.Context>
    )
}

export default Application