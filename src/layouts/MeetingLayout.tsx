import React from 'react'
import { Outlet } from 'react-router-dom'

interface MeetingLayoutProps {
    children?: React.ReactNode
}

const MeetingLayout: React.FC<MeetingLayoutProps> = ({children}) => {
  return (
    <>
        <h1>Meeting Layout</h1>
        <Outlet />
    </>
  )
}

export default MeetingLayout