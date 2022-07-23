import React from 'react'
import { Footer, Navbar } from '../../components';
import { Home } from '../../pages/Home';
import './Layout.css';

interface Props {
    children: React.ReactNode
}

export const Layout = (props: Props) => {
    return(
        <div className='containerLayout'>
            <Navbar />
                <div className='children'>{ props.children }</div>
                <Home />
            <Footer />
        </div>
    );
}