function ServicesPage() {
  return (
    <section className="services">
    
      <h1>Our Services</h1>
      <div className="services-grid" style={{padding:"40px"}}>
      <div className="service-card">

      <h3>Power Platform Development</h3>
      <p>Build business apps using Power Apps and automate workflows.</p>
      </div>

      <div className="service-card">  
      <h3>SharePoint Solutions</h3>
      <p>Document management and internal portals.</p>
      </div>

      <div className="service-card">

      <h3>Web Development</h3>
      <p>Modern web applications using React.</p>
      </div>

      <div className="service-card">

      <h3>Data & Analytics</h3>
      <p>Business dashboards and reporting.</p>
      </div>
    </div>
    </section>
  );
}

export default ServicesPage;