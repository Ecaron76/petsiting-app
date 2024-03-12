import React from 'react';
import Image from 'next/image';
import './footer.css'; // Utilisation de modules CSS pour une meilleure gestion des styles

export default function Footer() {
    return (
        <footer className="footer">
            <div className="footerContent">
                <div className="socialMedia">
                    <h3>Suivez-nous</h3>
                    <div className="socialIcons">
                        <a href="https://www.tiktok.com/@the_little_friend?_t=8kakZFSxGjp&_r=1"><Image src="/assets/images/tiktok.png" width={60} height={60} alt="Tiktok" /></a>
                        <a href="https://www.instagram.com/_the_little_friends?igsh=bWZhZno1dmhiZG0x&utm_source=qr"><Image src="/assets/images/instagram.png" width={60} height={60} alt="Instagram"/></a>
                    </div>
                </div>
                <div className="contactInfo">
                    <h3>Nous Contacter</h3>
                    <p>Email: contact@thelittlefriends.com</p>
                    <p>Téléphone: +123456789</p>
                    <p>Adresse: 123 Rue des Animaux, Rouen, France</p>
                </div>
            </div>
            <div className="footerBottom">
                <p>&copy; 2024 The Little Friends. Tous droits réservés. <a href="#">Politique de confidentialité</a></p>
            </div>
        </footer>
    );
}
