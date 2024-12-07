// 'use client'

import './portfolio.css'
import Link from 'next/link';
// import { useState } from 'react';

export default function Portfolio(){
    
    // const [state, setState] = useState()
    return(
        <>
            <div className="bg"></div>
            <div className="portfolio_section">
                <div className="portfolio_content">
                    <div className="bg_circle bg_circle1"></div>
                    <div className="bg_circle bg_circle2"></div>
                    <h1>My Portfolio</h1>
                    <p>Have you checked out my Behance Portfolio?</p>
                    <Link className='behance_link' href={'https://behance.net/AbdulRehman1771'}>Check it Out! <span>&gt;</span></Link>
                    <h1>Projects</h1>

                    <div className="port_box_div">
                        <div className="port_box port_box1">
                            <div className="port_about"><p>Dynamic Resume Builder</p></div>
                            <div className="port_desc"><Link href={'https://giaic-hackathon-dyanamic-resume-builer.vercel.app/'} className='lnk'><p>Go to live Project</p></Link></div>
                        </div>
                        <div className="port_box port_box2">
                            <div className="port_about"><p>PanaCloud Website Clone</p></div>
                        <div className="port_desc"><Link href={'https://final-assignment-of-html-and-css-nu.vercel.app/'} className='lnk'><p>Go to live Project</p></Link></div>
                        </div>
                        <div className="port_box port_box3">
                            <div className="port_about"><p>CLI Word Counter</p></div>
                        <div className="port_desc"><Link href={'https://www.npmjs.com/package/project_05_word_counter_by_abdulrehman'} className='lnk'><p>Go to live Project</p></Link></div>
                        </div>
                        <div className="port_box port_box4">
                            <div className="port_about"><p>Tech Minimal Logo Design</p></div>
                        <div className="port_desc"><Link href={'https://www.behance.net/gallery/142103149/Cipherem-TechCrypto-Logo-Design'} className='lnk'><p>Go to live Project</p></Link></div>
                        </div>
                        <div className="port_box port_box5">
                            <div className="port_about"><p>Razor Mouse UI</p></div>
                        <div className="port_desc"><Link href={'https://www.behance.net/gallery/130688169/Razer-Viper-Ultimate-Landing-Page-Design'} className='lnk'><p>Go to live Project</p></Link></div>
                        </div>
                        <div className="port_box port_box6">
                            <div className="port_about"><p>Kareem Pizza Wesite Ui</p></div>
                        <div className="port_desc"><Link href={'https://www.behance.net/gallery/149939597/Kareem-Pizza-Food-Website-UI-Design-'} className='lnk'><p>Go to live Project</p></Link></div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}