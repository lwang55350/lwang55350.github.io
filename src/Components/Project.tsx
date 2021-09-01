import Card from "./Card"

const Project = () => {
    return (
        <div className="project">
            <h1>My <span style={{color: "#4EA5D9"}}>Projects</span></h1>
            <div className="card-list">
                <Card 
                title = "Euchre"
                imageURL = "/Images/euchre.jpeg"
                role = "C++"
                description = "Designed a command line implementation of the Euchre card game for up to four players. Used Object Oriented Programming (OOP) concepts to allow functionality for Human and AI Bot Players."
                button = "Private Repository"
                link = "https://www.github.com/lwang55350"
                footer = "2021"
                />
                <Card 
                title = "Piazza Post Classifer"
                imageURL = "/Images/piazza.jpeg"
                role = "C++"
                description = "Implemented a program that uses natural language processing (NLP) and machine learning (ML) techniques to identify the correct category label for a Piazza post made by students."
                button = "Private Repository"
                link = "https://www.github.com/lwang55350"
                footer = "2021"
                />
                <Card 
                title = "Voting Bot"
                imageURL = "/Images/votingbot.jpeg"
                role = "Python"
                description = "Utilized Selenium to implement a voting bot that would access a website and submit a vote for a contest based on a list of inputted emails. The bot can also detect if an email has already been used, and would skip to the next."
                button = "Voting Bot"
                link = "https://www.github.com/lwang55350/voting-bot"
                footer = "2021"
                />
            </div>
        </div>
    )
};

export default Project;