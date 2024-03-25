import React from 'react';
import Nav from '../components/Nav';
import Home from '../pages/Home';
import ListedBooks from '../pages/ListedBooks';
import PagestoRead from '../pages/PagestoRead';
import { Outlet } from 'react-router-dom';

const MainLayout = () => {
    return (
        <div>
            <div className="h-16">
                <Nav></Nav>
            </div>
            <Outlet></Outlet>
            {/* <Home></Home>
            <ListedBooks></ListedBooks>
            <PagestoRead></PagestoRead> */}

        </div>
    );
};

export default MainLayout;