import ClassCard from './ClassCard'

const coursesFA20 = [
    {
        courseName: "Programming Concepts",
        courseTag: "EECS 183"
    },
    {
        courseName: "Discrete Mathematics",
        courseTag: "EECS 203"
    },
    {
        courseName: "Writing and Academic Inquiry",
        courseTag: "ENGLISH 125"
    },
    {
        courseName: "Anthropology",
        courseTag: "ANTHRCUL 101"
    }
]

const coursesWN21 = [
    {
        courseName: "Programming and Data Structures",
        courseTag: "EECS 280"
    },
    {
        courseName: "Multivariable and Vector Calculus",
        courseTag: "MATH 215"
    },
    {
        courseName: "Linear Algebra",
        courseTag: "MATH 217"
    },
    {
        courseName: "Mathematical Writing",
        courseTag: "MATH 201"
    },
    {
        courseName: "Psychology",
        courseTag: "PSYCH 112"
    },
    {
        courseName: "Formation of a Habitable Planet",
        courseTag: "EARTH 111"
    }
]

const coursesFA21 = [
    {
        courseName: "Data Structures and Algorithms",
        courseTag: "EECS 281"
    },
    {
        courseName: "Computer Organization",
        courseTag: "EECS 370"
    },
    {
        courseName: "Probability and Statistics",
        courseTag: "STATS 412"
    },
    {
        courseName: "Cognitive Science",
        courseTag: "COGSCI200"
    }
]

const Coursework = () => {
    return (
        <div className="coursework">
            <h1>My <span style={{color: "#4EA5D9"}}>Coursework</span></h1>
                <div className="card-list">
                    <ClassCard 
                        semester = "Fall '20"
                        course = {coursesFA20}
                    />
                    <ClassCard 
                        semester = "Winter '21"
                        course = {coursesWN21}
                    />
                    <ClassCard 
                        semester = "Fall '21"
                        course = {coursesFA21}
                    />
                </div>
        </div>
    )
};

export default Coursework;