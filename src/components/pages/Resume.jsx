

const Resume = () => {
    return (
        <div>
            
            <div className='resume mt-5'>
                <h2>Key Skills</h2>
                <br />
                <div>
                    <h4>Front-end proficiencies</h4>
                    <ul>
                        <li>HTML</li>
                        <li>CSS</li>
                        <li>JavaScript</li>
                        <li>JQuery</li>
                        <li>Bootstrap</li>
                        <li>React</li>
                    </ul>
                </div>
                <div>
                    <h4>Back-end proficiencies</h4>
                    <ul>
                        <li>APIs</li>
                        <li>Express</li>
                        <li>Node</li>
                        <li>GraphQL</li>
                        <li>MySQL, Sequelize</li>
                        <li>MongoDB, Mongoose</li>
                    </ul>
                </div>
                <h5>Download my resume <span><a href='../src/resume.pdf' target='_blank'>here.</a></span></h5>
            </div>
        </div>
    )

}

export default Resume;