'use client'

import "./Navbar.css"
import Image from "next/image";
import Link from "next/link";
export default function Navbar(){

    // const search = document.querySelector('.search');
    // search?.addEventListener('click',()=>{
    //     console.log('search button clicked');
    // });

    return(
        <>
        <div className="main">
            <div className="blurbg">
                
            </div>
            <div className="navbar">
                <div className="logo"><Link href={'#about'}><Image src={'/ar_Logo.png'} width={50} height={50} alt='Logo' /></Link></div>
                <div className="navigation_btn">
                    <div><Link  className="nav_btn" href={'/'}>Home</Link></div>
                    <div><Link  className="nav_btn" href={'#about'}>About</Link></div>
                    <div><Link className="nav_btn" href={'#portfolio'}>Portfolio</Link></div>
                    <div><Link className="nav_btn" href={'#contact_section'}>Contact</Link></div>
                </div>
                <div className="search_icon">
                    <div>
                        <input type="text" name="" id="search" placeholder="Search" />
                    </div>
                    <div>
                        <Link href={'/'}><Image className="search" width={30} height={30} src='/search_Icon.svg' alt="seach"/></Link>
                    </div>
                </div>
            </div>
        </div>
        </>
    );
}