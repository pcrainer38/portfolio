const Contact = () => {
  function blurHandler(event) {
    var target = event.target.id;
    var textValue = document.getElementById(target).value;
    if (textValue === "") {
      document.getElementById(target + "-warning").style.display = "block";
    } else {
      document.getElementById(target + "-warning").style.display = "none";
    }
    if (target === "email") {
      var regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
      var result = regex.test(textValue);
      console.log(result);
      if (result === true) {
        document.getElementById(target + "-warning").style.display = "none";
      } else {
        document.getElementById(target + "-warning").style.display = "block";
      }
    }
  }

  return (

      <div className="mt-5" id="contact">
        <h2>Contact</h2>

        <div className="input-group mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Name"
            aria-label="Username"
            aria-describedby="basic-addon1"
            id="username"
            onBlur={blurHandler}
          />
        </div>
        <p id="username-warning">Username is required</p>

        <div className="input-group mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Email"
            aria-label="Username"
            aria-describedby="basic-addon1"
            id="email"
            onBlur={blurHandler}
          />
        </div>
        <p id="email-warning">Email is invalid</p>

        <div className="input-group">
          <textarea
            className="form-control"
            aria-label="With textarea"
            placeholder="message"
            id="message"
            onBlur={blurHandler}
          ></textarea>
        </div>
        <p id="message-warning">Message is required</p>
        <div>
          <br />
          <button type="button" class="btn btn-primary">
            Submit
          </button>
        </div>
      </div>
  );
};

export default Contact;
