import projects from '../projects.json'

function Index(props){
    console.log(projects)
    return (<>
    {projects.map((element, index) => {
        return (
            <div 
            key={index}
            className="project"
            >
                <h3>{element.name}</h3>
                <a href = {element.url}>Deployed Site</a>
                <img src = {element.img}></img>
            </div>
        )
    })}

    </>)
}

export default Index
