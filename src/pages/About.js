import '../styles/About.css';

function About() {
  return (
    <div id='contentParent'>
      <section className="sectionContent">
        <p>
            I am a graduate from the University of Portsmouth where I was undertaking a degree in  {/* This comment literally fixes an issue by adding an extra space here. Pretty hacky */}
            <a className="extlink" href="https://www.port.ac.uk/study/courses/bsc-hons-computing">
              Computing BSc
            </a>.
            <br></br>
            <br></br>
            I have a strong interest in software engineering and game development and have made small projects over time but never dedicated a place for documenting them all which is why I decided to make a website, for posterity.
            <br></br>
            <br></br>
            Apart from my interest in software development, I also have an interest in engineering, particularly with electronics and have made things with Arduino and Raspberry Pi in the past, which will be documented in the blog section of this website alongside those related to software.
          </p>
      </section>

      <section className="sectionContent">
        <div>
          <h1>Certifications</h1>
        </div>
        <div>
          <picture>
            <source type="image/png" srcSet="media/uipath-starter-cert.png"/>
            <a href="https://cloud.contentraven.com/crdownloadfiles/index.aspx?act=8MH4sSWyowEaN0eXRAsy+A__&id=2g4ZMo936yU_">
              <img className="certImg" src="media/uipath-starter-cert.png" alt="uipath automation starter certification badge" height="150" width="300" />
            </a>
            <a href="https://www.codecademy.com/profiles/alham.me/certificates/705dcb15de0da4dd9d9fc4f3274b430e">
              <img className="certImg" src="media/codeacademy-cert-badge.png" alt="codeacademy learn javascript certification badge" height="150" width="300" />
            </a>
          </picture>
          
        </div>
      </section>
    </div>
  );
}

export default About;
