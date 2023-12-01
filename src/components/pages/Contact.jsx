

const Contact = () => {

    return (
        <>
            <div id='contact'>
                <h2>Contact</h2>
            </div>
            <div className="input-group mb-3" id="contact">
                <input type="text" className="form-control" placeholder="Name" aria-label="Username" aria-describedby="basic-addon1" />
            </div>
            <div className="input-group mb-3" id="contact">
                <input type="text" className="form-control" placeholder="Email" aria-label="Username" aria-describedby="basic-addon1" />
            </div>
            <div className="input-group">
                
                <textarea className="form-control" aria-label="With textarea" placeholder="message"></textarea>
            </div>
            <div>
                <br/>
                <button type="button" class="btn btn-primary">Primary</button>
            </div>
        </>
    )
}

export default Contact;