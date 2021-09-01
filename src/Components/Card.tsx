import React, { FC, ReactElement } from 'react'

type CardProps = {
    title: string,
    imageURL: string,
    role: string,
    description: string,
    button: string,
    link: string,
    footer: string,
}

const Card: FC<CardProps> = ({title, imageURL, role, description, button, link, footer}): ReactElement => {
    return (
        <div className="card-container">
            <div className="image-container">
                <img src={imageURL} alt='okay' />
            </div>
            <div className="card-content">
                <div className="card-title">
                    <h3>{title}</h3>
                </div>
                <div className="card-body">
                    <p><i>{role}</i></p>
                    <p>{description}</p>
                </div>
            </div>
            <div className="card-button">
                <button>
                    <a href={link}>
                        {button}
                    </a>
                </button>
            </div>
            <div className="card-footer">
                <p>{footer}</p>
            </div>
        </div>
    )
};

export default Card;