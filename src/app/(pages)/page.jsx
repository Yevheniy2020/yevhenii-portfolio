'use client'
import React from 'react';
import Home from "@/app/components/pages/Home/Home";
import Work from "@/app/components/pages/Work/Work";

function App() {
    return (
        <div className="h-screen overflow-auto">
            <div className="h-[150vh] sticky top-0 overflow-hidden">
                <Home />
            </div>
            <Work />
        </div>
    );
}

export default App;
