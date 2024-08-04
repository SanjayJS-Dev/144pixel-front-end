import React, { Suspense } from 'react';
import App from './App';

const HomePage = () => {
    return (
        <App/>
    );
}

const Loader = () => {
    <div className="h-dvh w-full bg-white flex justify-center items-center text-black">
        Loading...
    </div>
}

export default HomePage;
