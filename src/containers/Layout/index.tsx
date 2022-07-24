import React from 'react'
import { Footer, Navbar } from '../../components';
import './Layout.css';

interface Props {
    children: React.ReactNode
}

export const Layout = (props: Props) => {
    return(
        <div className='containerLayout'>
            <Navbar />
                <div className='children'>{ props.children }</div>
            <Footer />
        </div>
    );
}