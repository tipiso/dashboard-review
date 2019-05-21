import React from 'react';

const ProjectSummary = ({ project }) => {

    return (
        <div className="card-content grey-text text-darken-3">
            <span className="card-title">{project.title}</span>
            <p>Written by the Bengol</p>
            <p className="grey-text">3rd october, 2pm</p>
        </div>
    )
}

export default ProjectSummary;