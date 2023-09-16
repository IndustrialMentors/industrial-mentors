import "./trainer.css";
const Trainer = () => {
  return (
    <div class="cardt my-4">
      <img src="./Images/mentor_pic.jpg" class="card-img-top" alt="..." />
      <div class="card-body ">
        <h4 class="card-title border-0 border-bottom">Subject Name</h4>
        <h5>Mentor name</h5>
        <p class="card-text">
          this is the dicription abot the mentor and the subject he/she teaches
        </p>
        <div className="d-flex justify-content-center">
          <a
            href="#"
            class="btn btn-primary  infobtn "
          >
            Details
          </a>
        </div>
      </div>
    </div>
  );
};
export default Trainer;
