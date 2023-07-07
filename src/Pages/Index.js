import projects from '../projects.json'

function Index(props){
    console.log(projects)
    return (<div>
    {projects.map((element, index) => {
        return (
            <div 
            key={index}
            className="project"
            >
                <h3>{element.name}</h3>
                <div className='links'>
                    <a href = {element.url}
                    target = "_blank"
                    rel="noreferrer"
                    >Deployed Site</a> •  
                    <a href={element.frontend}
                    target = "_blank"
                    rel="noreferrer"
                    >{(element.backend)?"Frontend Repo":"GitHub Repo"}</a>
                </div>
                <a href={element.backend}
                target="_blank"
                rel='noreferrer'
                >{(element.backend) && " | Backend Repo"}</a>
                <div className='imgContainer'>
                    <img src = {element.img} alt={element.name} className={element.name}></img>
                </div>
                <div className='description'>{element.description}</div>
            </div>
        )
    })}

    </div>)
}

export default Index
