const TeamItem = () => {
    return(
        <div className="col-lg-2 teem_nth_style">
        <div className="teem_member text-center">
          <div className="teem_face">
            <span><i className="fa-regular fa-arrow-right-long"></i></span>
            <img src="https://lh3.googleusercontent.com/p/AF1QipOfBgQae8edsAzIwXZXx_4lKqfO1ssj4Clj5zvU=s680-w680-h510" alt="" />
          </div>
          <div className="team_addr">
            <p className="h4">Anukul Mahato</p>
            <p>Web Developer</p>
            <div className="teem_social">
              <a className="default_icon_style bgcc1 me-2" href="#"
                ><i className="fa-brands fa-twitter"></i
              ></a>
              <a className="default_icon_style bgcc2 me-2" href="#"
                ><i className="fa-brands fa-facebook-f"></i
              ></a>
              <a className="default_icon_style bgcc3 me-2" href="#"
                ><i className="fa-brands fa-linkedin-in"></i
              ></a>
            </div>
          </div>
        </div>
      </div>
    );
};
export default TeamItem;
