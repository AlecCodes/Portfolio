import {Link} from 'react-router-dom'

function AboutMe(props){
    return(
        <>
        <div className="alec">
            <img src="https://i.imgur.com/pu0GHYa.jpg"
            height='200px'
            ></img>
        </div>
        <p>As a <span>full-stack software engineer</span> with a background in European history and medical devices, I bring a unique perspective to every project. My passion for improving processes and taking initiative sets me apart as an asset to any team. With a strong track record of success in fast-paced environments, I thrive on collaboration and am eager to contribute my expertise to your organization as a full-stack software engineer.</p>
        <div className='contactme'>
            <h3>Contact me!</h3>
            <a href='https://www.linkedin.com/in/alec-hannaford/'>https://www.linkedin.com/in/alec-hannaford/</a>
            <br/> 
            <a href='mailto: alec322@gmail.com'>alec322@gmail.com</a> 
        </div>
        </>
    )
}
export default AboutMe