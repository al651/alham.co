import '../styles/Home.css';

function Home() {
  return (
    <p className="content">
          I am a student at the University of Portsmouth and currently I am undertaking a degree in {/* This comment literally fixes an issue by adding an extra space here. Pretty hacky */}
          <a className="courseLink" href="https://www.port.ac.uk/study/courses/bsc-hons-computing">
            Computing BSc
          </a>.
          <br></br>
          <br></br>
          Apart from my interest in computers and programming, I also have interests in engineering and have made things with Arduino and Raspberry Pi in the past
          which are documented on the blog section of this website alongside those related to programming.
        </p>
  );
}

export default Home;
