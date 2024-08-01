'use client';
import React, { useState } from 'react';
import Spinner from "@/app/components/ui/Spinner.component";

const Loading = ({ children }) => {
    const [isLoading, setIsLoading] = useState(true);

    return (
        <>
            {isLoading ? <Spinner setIsLoading={setIsLoading}/> : children}
        </>
    );
};

export default Loading;
