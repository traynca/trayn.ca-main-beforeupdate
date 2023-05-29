import React from 'react';
import FooterComponent from './FooterComponent';
import NavbarComponent from './NavbarComponent';

const Layout = ({ children }) => {
    return (
        <>
            <NavbarComponent />
            {children}
            <FooterComponent />
        </>
    );
};

export default Layout;