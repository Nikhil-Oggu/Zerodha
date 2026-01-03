// import React from "react";

// function Hero() {
//   return (
//     <section className="container-fluid" id="supportHero">
//       <div className="p-5 " id="supportWrapper">
//         <h4>Support Portal</h4>
//         <a href="">Track Tickets</a>
//       </div>
//       <div className="row p-5 m-3">
//         <div className="col-6 p-3">
//           <h1 className="fs-3">
//             Search for an answer or browse help topics to create a ticket
//           </h1>
//           <input placeholder="Eg. how do I activate F&O" />
//           <br />
//           <a href="">Track account opening</a>
//           <a href="">Track segment activation</a>
//           <a href="">Intraday margins</a>
//           <a href="">Kite user manual</a>
//         </div>
//         <div className="col-6 p-3">
//           <h1 className="fs-3">Featured</h1>
//           <ol>
//             <li>
//               <a href="">Current Takeovers and Delisting - January 2024</a>
//             </li>
//             <li>
//               <a href="">Latest Intraday leverages - MIS & CO</a>
//             </li>
//           </ol>
//         </div>
//       </div>
//     </section>
//   );
// }

// export default Hero;


import React from "react";

function Hero() {
  return (
    <section className="container-fluid" id="supportHero">
      {/* Header section with Support Portal and Track Tickets */}
      <div className="p-5 d-flex justify-content-between align-items-center" id="supportWrapper">
        <h4 className="fs-4">Support Portal</h4>
        <a href="" className="fs-5">Track Tickets</a>
      </div>

      {/* Main Content: Search and Featured */}
      <div className="row p-5 m-3">
        <div className="col-7 p-3">
          <h1 className="fs-3 mb-4">
            Search for an answer or browse help topics to create a ticket
          </h1>
          <div className="position-relative">
            <input placeholder="Eg. how do I activate F&O" className="mb-4" />
          </div>
          <div className="support-links">
            <a href="" className="me-3">Track account opening</a>
            <a href="" className="me-3">Track segment activation</a>
            <a href="" className="me-3">Intraday margins</a>
            <br />
            <a href="">Kite user manual</a>
          </div>
        </div>
        
        <div className="col-5 p-3 ps-5">
          <h1 className="fs-3 mb-4">Featured</h1>
          <ol>
            <li className="mb-3">
              <a href="">Current Takeovers and Delisting - January 2024</a>
            </li>
            <li>
              <a href="">Latest Intraday leverages - MIS & CO</a>
            </li>
          </ol>
        </div>
      </div>
    </section>
  );
}

export default Hero;