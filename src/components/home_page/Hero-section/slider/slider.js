const Slider = () =>{
    return(
        <div>
        <div id="carouselExampleAutoplaying" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div class="carousel-inner">
    <div class="carousel-item active position-relative">
      <img src="Images/slide.jpg" class="d-block w-100" alt="..."/>
      <div class=" slide-data position-absolute  d-none d-md-block">
        <h5 className="text-white">Unifying Talent</h5>
        <h6 className="text-white">Educational Institutions, and Recruiters </h6> 
        <p  className="text-white">Explore a world of opportunities to enrich your skills,<br/>
         bolster your resume, and secure your ideal career path<br/>
          on our platform.</p>
        <button type="button" class="btn btn-outline-primary" >About Us</button>
      </div>
    </div>
    <div class="carousel-item">
      <img src="Images/slide.jpg" class="d-block w-100" alt="..."/>
      <div class="slide-data position-absolute  d-none d-md-block">
        <h5 className="text-white">Bringing Together Aspiring Talent</h5>
        <h6 className="text-white">Leading Institutions, and Recruiters</h6>
        <p  className="text-white">Discover global opportunities to learn, showcase your skills,<br/>
        enhance your CV, and secure your dream job through our platform.</p>
        <button type="button" class="btn btn-outline-primary" >About Us</button>
      </div>
    </div>
    <div class="carousel-item">
      <img src="Images/slide.jpg" class="d-block w-100" alt="..."/>
      <div class="slide-data position-absolute  d-none d-md-block">
        <h5 className="text-white">Bridging the Gap</h5>
        <h6 className="text-white">Between Talent and Education</h6> 
        <p  className="text-white">Explore a diverse range of opportunities to nurture your skills,<br/>
        elevate your resume, and pave the way towards your dream career<br/>
         through our platform.</p>
        <button type="button" class="btn btn-outline-primary" >About Us</button>
      </div>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying " data-bs-slide="next">
  <span class="">Next</span>
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
  </button>
</div>
        </div>
    )
}
export default Slider;