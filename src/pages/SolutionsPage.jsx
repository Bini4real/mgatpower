function SolutionsPage() {
  return (
    <section className="solutions-page">
      <h1>Business Solutions</h1>
      <div className="services-grid" style={{ padding: "40px" }}>
        <div className="service-card">

        <h2>Our Approaches</h2><br></br>
        <p>We believe that technology should simplify work—not complicate it. Our approach is centered around:</p><br></br>
        
        <ul className="no-bullet" style={{ listStyleType: "none", paddingLeft: "20px" }}>
          <li>Understanding your business processes and challenges</li>
          <li>Designing solutions that align with your goals</li>
          <li>Building user-friendly applications that drive adoption</li>
          <li>Providing ongoing support and optimization</li>
        </ul>
        </div>
        <div className="service-card">

        <h2>What We Deliver</h2><br></br>

        <p>Our team delivers innovative solutions tailored to your business needs:</p><br></br>
        <ul className="no-bullet" style={{ listStyleType: "none", paddingLeft: "20px" }}>
          <li>Automate repetitive tasks and manual workflows</li>
          <li>Build custom business applications</li>
          <li>Improve data visibility through dashboards and reporting</li>
          <li>Integrate systems across platforms</li>
          <li>Enhance productivity and operational efficiency</li>
          <li>Expense Approval Workflow</li>
          <li>Document Management System</li>
        </ul>
        </div>
        <div className="service-card">

        <h2>Why Choose Us</h2><br></br>
        <p>We are committed to delivering solutions that drive real business value:</p><br></br>
        <ul className="no-bullet" style={{ listStyleType: "none", paddingLeft: "20px" }}>
          <li>Expertise in Microsoft Power Platform and modern web technologies</li>
          <li>Focus on user experience and adoption</li>
          <li>Proven track record of successful projects</li>
          <li>Dedicated support and ongoing optimization</li>
        </ul>
        </div>
      </div>
    </section>
  );
}

export default SolutionsPage;