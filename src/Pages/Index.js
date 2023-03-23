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
                <a href = {element.url}
                target = "_blank"
                rel="noreferrer"
                >Deployed Site</a> • 
                <a href={element.frontend}
                target = "_blank"
                rel="noreferrer"
                >GitHub Repo</a>
                <div className='imgContainer'>
                    <img src = {element.img} alt={element.name} className={element.name}></img>
                </div>
            </div>
        )
    })}

    </div>)
}

export default Index
