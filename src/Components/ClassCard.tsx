import React, { FC, ReactElement } from 'react'

interface Course {
    courseName: string,
    courseTag: string
}

type CardProps = {
    semester: string,
    course: Array<Course>,
}

const ClassCard: FC<CardProps> = ({semester, course}): ReactElement => {
    return (
        <div className="classcard-container">
            <div className="classcard-header">
                <p>{semester}</p> 
            </div>
            <div className="classcard-content">
                {course.map((item, index) => {
                    return (
                        <div className="course-line">
                            <p style={{margin: "10px 0 10px 0"}}>{item.courseName}</p> 
                            <div className="badge">{item.courseTag}</div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
};

export default ClassCard;