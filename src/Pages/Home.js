import React from 'react';

function Home() {
    return (
        <div>
            <div className="hero">
                <div className="hero-content">
                    <h1>Hello!<br />I’m Surekha Prabodhani</h1>
                    <h2>Software Engineer</h2>
                    <p>Blade API is a powerful web-based tool for developing and testing REST APIs. It offers a user-friendly interface for developers.</p>
                    <div className="social-links">
                        <a href="https://www.linkedin.com" target="_blank" rel="noreferrer"><i className="fab fa-linkedin"></i></a>
                        <a href="https://www.facebook.com" target="_blank" rel="noreferrer"><i className="fab fa-facebook"></i></a>
                        <a href="https://www.github.com" target="_blank" rel="noreferrer"><i className="fab fa-github"></i></a>
                    </div>
                    <a className="btn" href="/path/to/cv.pdf" download>Download CV</a>
                </div>
            </div>
        </div>
    );
}

export default Home;
