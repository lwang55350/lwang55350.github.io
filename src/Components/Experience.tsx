import Card from "./Card"

const Experience = () => {
    return (
        <div className="experience">
            <h1>My <span style={{color: "#4EA5D9"}}>Experiences</span></h1>
            <div className="card-list">
                <Card 
                title = "Consumers Energy"
                imageURL = "/Images/consumers.jpeg"
                role = "Information Technology Intern"
                description = "Designed a new reporting method for software deployments by integrating Microsoft System Center Configuration Manager (SCCM) and ServiceNow data through a Python script that collected and processed this data into a generated daily deployment report."
                button = "CMS Energy"
                link = "https://www.consumersenergy.com/"
                footer = "May '21 - August '21"
                />
                <Card 
                title = "Wyzant"
                imageURL = "/Images/wyzant.jpeg"
                role = "Independent Tutor"
                description = "Taught the C++ programming language and introductory programming concepts to introduce a brand new high school student to the computer science field. Designed lesson plans that consisted of lectures and assignments to apply newly learned material."
                button = "Wyzant"
                link = "https://www.wyzant.com/"
                footer = "December '20 - May '21"
                />
                <Card 
                title = "Montgomery EMS"
                imageURL = "/Images/mems.png"
                role = "Volunteer Emergency Medical Technician"
                description = "Respond to 911 emergency calls around Montgomery Township. On scene, assess and provide prehospital care for our patients. Transport and transfer patient care to local emergency departments. 1000+ on-duty hours and 225+ 911 call responses."
                button = "MEMS"
                link = "https://www.mems47.org/public_website/index.shtml"
                footer = "February '18 - Present"
                />
            </div>
        </div>
    )
};

export default Experience;