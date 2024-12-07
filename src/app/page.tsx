// import Image from "next/image";
import Link from "next/link";
import Image from "next/image";


export default function Home() {
  return (
    <>
      <div className="home_hero">
        <div className="container">
          <div className="intro">
            <h1>Hi,</h1>
            <h2>I AM</h2>
            <span>Abdul Rehman</span>
            <p>
              Graphic Designer, Front End Developer, Nextjs, & Ethical Hacking Student
            </p>
            <div className="contact_me_btn">
              <Link className="btn" href={'/contact'}>Contact Me</Link>
            </div>
          </div>
          <div className="dev_image">
            <div className="bg_circle"></div>
            <Image className="developer_image" src='/developer_pic.png' width={800} height={800} alt="developer pic"  />
          </div>
        </div>
      </div>
      
      
    <div id="about" className="about">
      <div className="about_content">
      <h1>About</h1>
      <div className="line"></div>
      <div className="para">
        <p>I am a versatile graphic designer and front-end developer with a passion for crafting beautiful and functional web experiences. My journey began with a love for design, where I learned to create visually stunning graphics that tell compelling stories. Over the years, I have honed my skills in HTML, CSS, TypeScript, and JavaScript, leveraging these technologies to build responsive and user-friendly applications using Next.js.</p>
        <br /><br />
        <p>Currently, I am expanding my horizons as an ethical hacking student. This pursuit allows me to explore the critical aspects of cybersecurity, equipping me with the knowledge to develop secure applications and protect digital assets. By understanding the mindset of potential threats, I aim to create safer online environments while maintaining exceptional user experiences.</p>
        <br /><br />
        <p>With a unique blend of creativity and technical expertise, I strive to deliver solutions that are not only aesthetically pleasing but also secure and efficient. I am always eager to learn and embrace new challenges, pushing the boundaries of what&apos;s possible in the digital space.</p>
      </div>
      </div>
    </div>


    <div className="skills">
      <div className="skill_content">
        <h1>Skills</h1>
        <div className="skill_box">
          <div className="box">
            <Image className="svg_icon" width={80} height={80} alt="" src={'/icons8-html-logo.svg'} />
            <p>HTML</p>
          </div>
          <div className="box">
            <Image className="svg_icon" width={80} height={80} alt="" src={'/w3_css-icon.svg'} />
            <p>CSS</p>
          </div>
          <div className="box">
            <Image className="svg_icon" width={80} height={80} alt="" src={'/typescript.svg'} />
            <p>TypeScript</p>
          </div>
          <div className="box">
            <Image className="svg_icon" width={80} height={80} alt="" src={'/logo-javascript.svg'} />
            <p>JavaScript</p>
          </div>
          <div className="box">
            <Image className="svg_icon nextjs_logo" width={80} height={80} alt="" src={'/nextjs-ar21.svg'} />
            <p>NextJs</p>
          </div>
          <div className="box">
            <Image className="svg_icon" width={80} height={80} alt="" src={'/python-5.svg'} />
            <p>Python</p>
          </div>
          <div className="box">
            <Image className="svg_icon" width={80} height={80} alt="" src={'/adobe-illustrator-cc-3.svg'} />
            <p>Adobe Illustrator</p>
          </div>
          <div className="box">
            <Image className="svg_icon" width={80} height={80} alt="" src={'/adobe-photoshop-2.svg'} />
            <p>Adobe Photoshop</p>
          </div>
          <div className="box">
            <Image className="svg_icon" width={80} height={80} alt="" src={'/premiere-pro-cc.svg'} />
            <p>Adobe Premiere Pro</p>
          </div>
          <div className="box">
            <Image className="svg_icon" width={80} height={80} alt="" src={'/Adobe_Dimension_Logo_Vector.svg'} />
            <p>Adobe Dimension</p>
          </div>
          <div className="box">
            <Image className="svg_icon" width={80} height={80} alt="" src={'adobe-indesign-cc-icon.svg'} />
            <p>Adobe Indesign</p>
          </div>
          <div className="box">
            <Image className="svg_icon" width={80} height={80} alt="" src={'adobe-xd-2.svg'} />
            <p>Adobe Xd</p>
          </div>
        </div>
      </div>
    </div>
      
      
    <div id="portfolio" className="portfolio">
      <div className="portfolio_content">
        <h1>Portfolio</h1>
        <div className="folio_collection">
          <div className="folio_item">
            <Image className="item" alt="portfolio_thumbnail" width={400} height={400} src={'/panacloud_website_clone.jpg'} />
            <div className="overlay_menu">
              <div>
                <h4>PanaCloud Website Clone</h4>
                <p>Clone of Panacloud Website using HTML and CSS.</p>
              </div>
            </div>
          </div>
          <div className="folio_item">
            <Image className="item" alt="portfolio_thumbnail" width={400} height={400} src={'/dynamic_resume_builder.jpg'} />
            <div className="overlay_menu">
              <div>
                <h4>Dynamic Resume Builder</h4>
                <p>A minimal Logo Design for a company called Surrounding Deer.</p>
              </div>
            </div>
          </div>
          <div className="folio_item">
            <Image className="item" alt="portfolio_thumbnail" width={400} height={400} src={'/ciphere_logo_design.jpg'} />
            <div className="overlay_menu">
              <div>
                <h4>Tech Logo Design</h4>
                <p>Tech Logo Designed for a Crypto Tech Business.</p>
              </div>
            </div>
          </div>
          <div className="folio_item">
            <Image className="item" alt="portfolio_thumbnail" width={400} height={400} src={'/kareem_pizza_ui.jpg'} />
            <div className="overlay_menu">
              <div>
                <h4>Kareem Pizza Website UI</h4>
                <p>A website designed for a Limka and Pizza Selling shop.</p>
              </div>
            </div>
          </div>
        </div>
        <div className="view_all_btn">
        <Link className="view_btn" href={'/portfolio'}>View All</Link>
        </div>
      </div>
    </div>


    <div className="experience">
      <div className="experience_content">
        <h1>Experience</h1>
        <div className="exp exp_1">
          <div className="lft_side">
            <div className="year_label">
              <div><h4>2022</h4></div>
            </div>
            <div className="cirlce">
              <div></div>
            </div>
            <div className="ex_line"></div>
          </div>
          <div className="rt_side">
            <h2>Graphic Designer</h2>
            <h5>SAFE Pharmaceuticals (Pvt.) Ltd.</h5>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente corporis consectetur dolorem, in dolor, totam perspiciatis doloremque nesciunt reiciendis quibusdam nisi? Mollitia voluptas sed consequuntur voluptates facilis est deleniti illum voluptatem! Quasi saepe sed natus obcaecati, assumenda earum incidunt quibusdam velit quae temporibus omnis, iure eos voluptate quas facere laboriosam. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugit dolor repudiandae quibusdam error ab dicta commodi debitis vero at sint libero voluptate vel cupiditate ratione qui eveniet velit, itaque eius veniam quia molestias? Vitae dolores mollitia eligendi iste, magnam, ex nihil error ullam expedita autem delectus odio ratione. Excepturi, incidunt. Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta enim et quae cupiditate rem modi deserunt doloribus ullam quasi maiores! Aliquid deserunt eos sunt explicabo, fuga numquam maxime a nesciunt accusamus accusantium labore laboriosam hic repudiandae quae amet corporis odit eveniet repellat quasi blanditiis ab nihil? Hic accusamus explicabo voluptas.</p>
          </div>
        </div>
        <div className="exp exp_2">
          <div className="lft_side">
            <div className="year_label">
              <div><h4>2022</h4></div>
            </div>
            <div className="cirlce">
              <div></div>
            </div>
            <div className="ex_line"></div>
          </div>
          <div className="rt_side">
            <h2>Officer IT</h2>
            <h5>SAFE Pharmaceuticals (Pvt.) Ltd.</h5>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente corporis consectetur  Excepturi, incidunt. Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta enim et quae cupiditate rem modi deserunt doloribus ullam quasi maiores! Aliquid deserunt eos sunt explicabo, fuga numquam maxime a nesciunt accusamus accusantium labore laboriosam hic repudiandae quae amet corporis odit eveniet repellat quasi blanditiis ab nihil? Hic accusamus explicabo voluptas.</p>
          </div>
        </div>
        <div className="exp exp_3">
          <div className="lft_side">
            <div className="year_label">
              <div><h4>2021</h4></div>
            </div>
            <div className="cirlce">
              <div></div>
            </div>
            <div className="ex_line"></div>
          </div>
          <div className="rt_side">
            <h2>Graphic Designer</h2>
            <h5>Fiverr</h5>
            <p>Lorem ipsui? Mollitia voluptas sed consequuntur voluptates facilis est deleniti illum voluptatem! Quasi saepe sed natus obcaecati, assumenda earum incidunt quibusdam velit quae temporibus omnis, iure eos voluptate quas facere laboriosam. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugit dolor repudiandae quibusdam error ab dicta commodi debitis vero at sint libero voluptate vel cupiditate ratione qui eveniet velit, itaque eius veniam quia molestias? Vitae dolores mollitia eligendi iste, magnam, ex nihil error ullam expedita autem delectus odio ratione.si blanditiis ab nihil? Hic accusamus explicabo voluptas.</p>
          </div>
        </div>
        <div className="exp exp_4">
          <div className="lft_side">
            <div className="year_label">
              <div><h4>2021</h4></div>
            </div>
            <div className="cirlce">
              <div></div>
            </div>
            <div className="ex_line"></div>
          </div>
          <div className="rt_side">
            <h2>Graphic Designer</h2>
            <h5>SAFE Pharmaceuticals (Pvt.) Ltd.</h5>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente corporis consectetur dolorem, in dolor, totam perspiciatis doloremque nesciunt reiciendis quibusdam nisi? Mollitia voluptas sed consequuntur voluptates facilis est deleniti illum voluptatem! Quasi saepe sed natus obcaecati, assumenda earum incidunt quibusdam velit quae temporibus omnis, iure eos voluptate quas facere laboriosam. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugit dolor repudiandae quibusdam error ab dicta commodi debitis vero at sint libero voluptate vel cupiditate ratione qui eveniet velit, itaque eius veniam quia molestias? Vitae dolores mollitia e laboriosam hic repudiandae quae amet corporis odit eveniet repellat quasi blanditiis ab nihil? Hic accusamus explicabo voluptas.</p>
          </div>
        </div>
      </div>
    </div>


    <div id="contact_section" className="contact_section">
      <div className="contact_content">
        <h1>Get in Touch</h1>
        <p>Wanna design your website? Click the below:</p>
        <Link href={'/contact'} className="contact_btn  ">Contact Me</Link>
      </div>
    </div>


    </>
  );
}
