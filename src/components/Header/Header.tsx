"use client"
import React, { useState } from 'react';
import Image from 'next/image';
import  './header.css'; 

export default function Header() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loggedIn, setLoggedIn] = useState(false);

    const handleLogin = (event: any) => {
        event.preventDefault();
        if (email != "" && password!= "") {
            setLoggedIn(true);
        }
    };
    
    return (
        <header className="header">
            <div className="logoContainer">
                <Image 
                    src="/assets/images/logo.png"
                    width={70}
                    height={70}
                    alt="Logo"
                />
                
            </div>
            <h1 className="logoText">The Little Friends</h1>
            {loggedIn ? (
                <div className='welcomeClient'>Bienvenue cher client</div>
            ) : (
            <div className="formContainer">
                <form onSubmit={handleLogin}> 
                    <div className='formFields'>
                        <div>
                            <label htmlFor="email">Email:</label>
                            <input type="email" id="email" name="email" required  onChange={(e) => setEmail(e.target.value)}/>
                        </div>
                        <div>
                            <label htmlFor="password">Mot de passe:</label>
                            <input type="password" id="password" name="password" required onChange={(e) => setPassword(e.target.value)} />
                        </div>
                    </div>
                    <button type="submit">Se connecter</button>
                </form>
            </div>
            )}
            
        </header>
    )
}
