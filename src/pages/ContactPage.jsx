function ContactPage() {
  return (
    <div style={{padding:"40px"}}>
      <h1>Contact Us</h1>

      <form>
        <input type="text" placeholder="Name" /><br/><br/>
        <input type="email" placeholder="Email" /><br/><br/>
        <textarea placeholder="Message"></textarea><br/><br/>

        <button>Send Message</button>
        <section style={{marginTop:"100px"}}>
          <p>Or Reach us at:</p>
        </section>
        
        <div className="contact">
          <p> <svg className="svg-icon" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
  <path d="M6.6 10.8c1.5 2.9 3.7 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1.1-.3 1.2.4 2.5.6 3.8.6.6 0 1 .4 1 1V21c0 .6-.4 1-1 1C10.1 22 2 13.9 2 3c0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.6.6 3.8.1.4 0 .8-.3 1.1L6.6 10.8z"/>
</svg> 301 806 5559</p>
          <p><svg className="svg-icon" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
  <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
</svg> akalebineyam600@gmail.com</p>
          <p><svg className="svg-icon" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
  <path d="M12 2a10 10 0 100 20 10 10 0 000-20zm7.9 9h-3.2c-.2-2.3-1.1-4.3-2.4-5.7 2.7.9 4.8 3.2 5.6 5.7zM12 4c1.5 1.6 2.5 4 2.7 7H9.3c.2-3 1.2-5.4 2.7-7zM4.1 13h3.2c.2 2.3 1.1 4.3 2.4 5.7-2.7-.9-4.8-3.2-5.6-5.7zM7.3 11H4.1c.8-2.5 2.9-4.8 5.6-5.7-1.3 1.4-2.2 3.4-2.4 5.7zM12 20c-1.5-1.6-2.
5-4-2.7-7h5.4c-.2 3-1.2 5.4-2.7 7zM16.7 11h3.2c-.8 2.5-2.9 4.8-5.6 5.7 1.3-1.4 2.2-3.4 2.4-5.7z"/>
</svg> www.biniakaledev.com</p>
        </div>         
        
      </form>
    </div>
  );
}

export default ContactPage;