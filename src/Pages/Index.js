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
                <a href = {element.url}>Deployed Site</a> • <a href={element.frontend}>GitHub Repo</a>
                <div className='imgContainer'>
                    <img src = {element.img} className={element.name}></img>
                </div>
            </div>
        )
    })}

    </div>)
}

export default Index
