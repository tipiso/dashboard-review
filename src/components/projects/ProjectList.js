import React from 'react';
import ProjectSummary from './Project.Summary';

const ProjectList = ({ projects }) => {
    return (
        <div className="project-list section">
            <div className="card z-depth-0 project-summary">
                {projects && projects.map(project => {
                    return (
                        <ProjectSummary project={project} key={project.id} />
                    )
                })}
            </div>
        </div>
    )
}

export default ProjectList;