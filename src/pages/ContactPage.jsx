function ContactPage() {
  return (
    <div style={{padding:"40px"}}>
      <h1>Contact Us</h1>

      <form>
        <input type="text" placeholder="Name" /><br/><br/>
        <input type="email" placeholder="Email" /><br/><br/>
        <textarea placeholder="Message"></textarea><br/><br/>

        <button>Send Message</button>
      </form>
    </div>
  );
}

export default ContactPage;