import React from 'react'
const Comparison = ({ selectedProperties, removePropertyFromComparison }) => {
  return (
    <div>
      <section className="content">
        {/* <div className="block-header">
          <div className="row">
            <div className="col-lg-5 col-md-5 col-sm-12">
              <h2>Property view
                <small>Welcome to Meta Estate Empire</small>
              </h2>
            </div>
            <div className="col-lg-7 col-md-7 col-sm-12 text-md-right">
              <div className="inlineblock text-center m-r-15 m-l-15 hidden-md-down">
                <div className="sparkline" data-type="bar" data-width="97%" data-height="25px" data-bar-width={2} data-bar-spacing={5} data-bar-color="#fff">3,2,6,5,9,8,7,9,5,1,3,5,7,4,6</div>
                <small className="col-white">Visitors</small>
              </div>
              <div className="inlineblock text-center m-r-15 m-l-15 hidden-md-down">
                <div className="sparkline" data-type="bar" data-width="97%" data-height="25px" data-bar-width={2} data-bar-spacing={5} data-bar-color="#fff">1,3,5,7,4,6,3,2,6,5,9,8,7,9,5</div>
                <small className="col-white">Bounce Rate</small>
              </div>
              <button className="btn btn-white btn-icon btn-round hidden-sm-down float-right ml-3" type="button">
                <i className="zmdi zmdi-plus" />
              </button>
              <ul className="breadcrumb float-md-right">
                <li className="breadcrumb-item"><a href="/home"><i className="zmdi zmdi-home" /> Meta</a></li>
                <li className="breadcrumb-item active">Property</li>
              </ul>
            </div>
          </div>
        </div> */}
          <div className="container-fluid p-4 bg-white mt-5 text-dark" style={{ borderRadius: '12px' }}>
            <div className="row">
              <div className='col-lg-3'>
                <div className=''></div>
              </div>
              <div className='col-lg-8'>
                <div>
                  <div className='row'>
                  {selectedProperties.map((property, index) => (
                <div className="col-lg-3 col-md-4 col-sm-12" key={index}>
                  <img className='img-fluid w-100'src={`data:image/png;base64,${property.image1}`}/>
                  
                  <h6 className="h2_style text-dark mt-4">{property.name}</h6>
                  <h6 className="h2_style text-dark mt-4">{property.price}</h6>
                  <h6 className="h2_style text-dark mt-4">{property.location}</h6>
                  <h6 className="h2_style text-dark mt-4">{property.type}</h6>
                  <h6 className="h2_style text-dark mt-4">{property.status}</h6>
                  <h6 className="h2_style text-dark mt-4">{property.area}</h6>
                  <h6 className="h2_style text-dark mt-4">{property.bedrooms}</h6>
                  <button className='btn btn-primary m-auto d-flex mt-3' onClick={() => removePropertyFromComparison(index)}>Remove</button>
                </div>
                
              ))}
                  </div>
                </div>
              </div>
            
            </div>
          </div>
      </section>
    </div>
  )
}
export default Comparison