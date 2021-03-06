import React from 'react'
import { SidebarContainer, 
         Icon,
         CloseIcon, 
         SidebarWrapper, 
         SidebarMenu, 
         SidebarLink, 
         SideBtnWrap, 
         SidebarRoute} from './SidebarElements'

const Sidebar = ({isOpen, toggle}) => {
    return (
        <SidebarContainer isOpen={isOpen} onClick={toggle}>
            <Icon onClick={toggle}>
                <CloseIcon />
            </Icon>
            <SidebarWrapper>
                <SidebarMenu>
                    <SidebarLink to='about' onClick={toggle}>About</SidebarLink>
                    <SidebarLink to='whyus' onClick={toggle}>Why Us</SidebarLink>
                    <SidebarLink to='program' onClick={toggle}>Our Program</SidebarLink>
                    <SidebarLink to='services' onClick={toggle}>Discount</SidebarLink>
                </SidebarMenu>
                <SideBtnWrap>
                    <SidebarRoute to="/daftar">Daftar</SidebarRoute>
                </SideBtnWrap>
            </SidebarWrapper>
        </SidebarContainer>
    )
}

export default Sidebar
