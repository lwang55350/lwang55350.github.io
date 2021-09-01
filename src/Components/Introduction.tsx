const Introduction = () => {
    return (
        <div className="introduction">
            <div className="intro-text">
                <h1>About <span style={{color: "#4EA5D9"}}>Me</span></h1>
                <p>
                    Hi! I'm Larry, and I am a current sophomore at the University of Michigan. 
                </p>
                <p>
                    I am a curious computer science student who is passionate to learn more 
                    about and explore the various fields of technology including Software 
                    Development, Cybersecurity, and Machine Learning. I am also interested 
                    in seeing how developing technology intersect the financial and healthcare 
                    sector. Feel free to send me a message to connect!
                </p>
                <h2>what I have been up to</h2>
                <ul className="try-list">
                    <li>taking drone shots</li>
                    <li>playing around with React</li>
                    <li>vibing to Heat Waves by Glass Animals</li>
                </ul>
            </div>
            <div className="intro-pic">
                <img src="/Images/ProfilePic.jpg" alt="LWang" style={{width: "350px"}}/>
            </div>
        </div>
    )
};

export default Introduction;