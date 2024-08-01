'use client';
import React, { ReactNode, useEffect, useState } from 'react';

const Loading = ({ children }) => {
    const [isLoading, setIsLoading] = useState(true);
    useEffect(() => {
        setTimeout(() => {
            setIsLoading(false);
        }, 2000);
    }, []);

    if (isLoading) {
        return <Spinner />;
    }

    return (
        <div>
            <Header />
            <div className="flex justify-center">
                <div className="w-360	">{children}</div>
            </div>
            <Footer />
        </div>
    );
};

export default Loading;
