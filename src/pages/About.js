import '../styles/About.css';

function About() {
  return (
    <p className="content">
          I am a recent graduate from the University of Portsmouth where I was undertaking a degree in  {/* This comment literally fixes an issue by adding an extra space here. Pretty hacky */}
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
  );
}

export default About;
