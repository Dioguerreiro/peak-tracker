import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from '../firebase';

const Dashboard = () => {

    const [user, loading, error] = useAuthState(auth);
    const navigate = useNavigate();
    
    useEffect(() => {
        if (loading) return;
        if (!user) return navigate("/");
    }, [user, loading]);

    return (
        <section id='dashboard-section' className='flex justify-center items-center'>
            <h2>Dashboard Page</h2>
        </section>
    );
};

export default Dashboard;
