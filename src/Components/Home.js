import { useState, useEffect } from "react";
import { Container, Row, Col } from 'react-bootstrap';
import { HashLink } from 'react-router-hash-link';
import developer from '../assets/about_img.webp'

const About = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState('');
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const toRotate = [ "Web3 Developer", "Blockchain Developer", "Frontend Developer" ];
  const period = 2000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => { clearInterval(ticker) };
  }, [text], [delta])

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta(prevDelta => prevDelta / 2);
    } else {
        setDelta(100 - Math.random() * 25); 
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setDelta(period);
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setDelta(500);
    }
  }

  const downloadCV = async () => {
    try {
      const response = await fetch('/api/download');
      if (response.ok) {
        const blob = await response.blob();
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.style.display = 'none';
        a.href = url;
        a.download = 'mi-cv.pdf'; // Nombre del archivo descargado
        document.body.appendChild(a);
        a.click();
        window.URL.revokeObjectURL(url);
      } else {
        console.error('Error al descargar el archivo:', response.statusText);
      }
    } catch (error) {
      console.error('Error al descargar el archivo:', error);
    }
  }

  return (
    <section className="home d-flex align-items-center" id="home">
      <Container id="home">
        <Row className="home-content">
          <Col xs={12} md={8} className="text-left ">
            <h1 className="display-4">{`Hi! I'm Álvaro Díaz`}<br /><span className="txt-rotate" data-period="1000" data-rotate='[ "Web3 Developer", "Blockchain Developer", "Frontend Developer" ]'><span className="wrap">{text}</span></span></h1>
            <p>Engineer with a passion for blockchain technology and web development. My goal is to leveraging my engineering and management skills to drive innovation within the Blockchain and Web3 sector.</p>
            <div className="d-flex flex-row">
              <HashLink to="/#contact">
                <button className="connect-button" target="_blank" rel="noopener noreferrer">Let’s build it together!</button>
              </HashLink>
              <button onClick={downloadCV}>Download CV</button>
            </div>
          </Col>
          <Col xs={12} md={4} className="d-flex justify-content-center align-center">
            <img src={developer} alt="Álvaro Díaz - Web3 Developer" className="img-fluid float-end"></img>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default About;