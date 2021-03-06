import React from 'react'

const ProjectDetails = (props) => {
    const id = props.match.params.id;

    return (
        <div className="container section project-details">
            <div className="card z-depth-0">
                <div className="card-content">
                    <span className="card-title">Project Title - {id}</span>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ullam magnam deserunt ea neque dolor. Dolorem nam maxime, similique odit deleniti iusto nobis aut dolorum doloribus doloremque ad maiores nemo molestiae!</p>
                </div>
                <div className="card-action grey lighten-4 grey-text">
                    <div>Posted by Daru</div>
                    <div>2nd September, 2pm</div>
                </div>
            </div>
        </div>
    )
}

export default ProjectDetails
