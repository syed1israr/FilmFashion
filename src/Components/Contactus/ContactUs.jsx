import '../Contactus/Contact.css'
const contact = () => {
    return (
      <div id="page3">
        <div id="left1">
          <div id="text5">
            <h5 className='-mt-7'>Contact us !</h5>
            <h1>We Would Love<br />to Hear from you</h1>
          </div>
          <div id="info">
            <div className="infos">
              <div className="circle i1"></div>
              <h1 className='hi text-2xl '>DataBase.com</h1>
            </div>
            <div className="infos">
              <div className="circle i1"></div>
              <h1 className='hi text-2xl ' >Pune-Maharashtra 411005</h1>
            </div>
          </div>
        </div>
        <div id="right1">
          <div className="line l1">
            <h1 className='hi text-2xl'>👋 Say Hi!</h1>
            <div className="circle c1 "><i className="ri-arrow-right-up-line hover:text-[#1E1E24] hover:rotate-12 "  ></i></div>
          </div>
          <div className="line l2"></div>
        </div>
      </div>
    );
  };
  
  export default contact;
  