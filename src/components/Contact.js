const Contact = () => {
  return (
    <>
      <h1>Contact Us</h1>
      <div>
        <form action="/">
          <div className="form-input">
            <label htmlFor="name">Full Name</label>
            <input type="text" name="name" value="" id="name" />
          </div>
          <div className="form-input">
            <label htmlFor="email">Email Id</label>
            <input type="text" name="email" value="" id="email" />
          </div>
          <div className="form-input">
            <label htmlFor="comment">Comment</label>
            <textarea name="comment" value="" id="comment" rows={8} cols={50} />
          </div>
          <button type="button" className="btn">
            Submit
          </button>
        </form>
      </div>
    </>
  );
};

export default Contact;
