import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';

const Marketplace = ({ addPropertyToComparison }) => {
  const [threebhk, setThreebhk] = useState([]);
  const [loading, setLoading] = useState(true);

  const [propertyType, setPropertyType] = useState(null);
  const [country, setCountry] = useState(null);
  const [beds, setBeds] = useState(null);
  const [fundstatus, setFundstatus] = useState(null);
  const [sortByPrice, setSortByPrice] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const cardsPerPage = 6;
  const navigate = useNavigate();

  const handleBuyClick = (property) => {
    addPropertyToComparison(property);
  };

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const handleSortByPriceChange = (event) => {
    setSortByPrice(event.target.value);
  };

  const filterProperties = (property) => {
    // ALL Filters
    if (propertyType && country && beds && fundstatus) {
      return property.status === propertyType && property.location === country && property.bedrooms == beds && property.type == fundstatus;
    }
    //Triple Filter 
    else if (propertyType && country && beds) {
      return property.status === propertyType && property.location === country && property.bedrooms == beds;
    }
    else if (propertyType && country && fundstatus) {
      return property.status === propertyType && property.location === country && property.type == fundstatus;
    }
    else if (propertyType && beds && fundstatus) {
      return property.status === propertyType && property.bedrooms == beds && property.type == fundstatus;
    }
    else if (country && beds && fundstatus) {
      return property.location === country && property.bedrooms == beds && property.type == fundstatus;
    }
    // Double Filter 
    else if (propertyType && country) {
      return property.status === propertyType && property.location === country;
    }
    else if (propertyType && beds) {
      return property.status === propertyType && property.bedrooms == beds;
    }
    else if (propertyType && fundstatus) {
      return property.status === propertyType && property.type == fundstatus;
    }
    else if (country && beds) {
      return property.location === country && property.bedrooms == beds;
    }
    else if (country && fundstatus) {
      return property.location === country && property.type == fundstatus;
    }
    else if (beds && fundstatus) {
      return property.bedrooms == beds && property.type == fundstatus;
    }
    // Single Filter 
    else if (propertyType) {
      return property.status === propertyType;
    }
    else if (country) {
      return property.location === country;
    }
    else if (beds) {
      return property.bedrooms == beds;
    }
    else if (fundstatus) {
      return property.type == fundstatus;
    }


    return true;
  };

  const sortProperties = (a, b) => {
    if (sortByPrice === "highToLow") {
      return b.price - a.price;
    } else if (sortByPrice === "lowToHigh") {
      return a.price - b.price;
    }
    return 0;
  };

  const indexOfLastCard = currentPage * cardsPerPage;
  const indexOfFirstCard = indexOfLastCard - cardsPerPage;
  const currentCards = threebhk
    .filter(filterProperties)
    .sort(sortProperties)
    .slice(indexOfFirstCard, indexOfLastCard);

  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(threebhk.filter(filterProperties).length / cardsPerPage); i++) {
    pageNumbers.push(i);
  }

  const handlePropertyTypeChange = (event) => {
    setPropertyType(event.target.value);
  };
  const handleCountryChange = (event) => {
    setCountry(event.target.value);
  };
  const handleBedChange = (event) => {
    setBeds(event.target.value);
  };
  const handleFundstatus = (event) => {
    setFundstatus(event.target.value);
  };

  useEffect(() => {
    axios.get('http://103.69.196.162:2000/properties')
      .then((res) => {
        setThreebhk(res.data);
        setLoading(false);
      }).catch((err) => {
        console.log(err);
        setLoading(false);
      });
  }, []);



  return (
    <div>
      {/* Main Content */}
      <section className="content">
        <div className="block-header">
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
        </div>
        <div className="container-fluid p-4 bg-white" style={{ borderRadius: '12px' }}>
          <div className='body mb-lg-3 mb-2' >
            <div className='row '>

              <div className='col-lg-3 d-flex justify-content-between '>
                <select className="form-control show-tick ms select2" data-placeholder="Select" onChange={handlePropertyTypeChange}>
                  <option selected disabled>Property Type</option>
                  {loading ? (
                    <option>Loading...</option>
                  ) : (
                    Array.from(new Set(threebhk.map(ele => ele.status))).map((type, index) => (
                      <option key={index}>{type}</option>
                    ))
                  )}
                </select>
              </div>


              <div className='col-lg-2 d-flex justify-content-between'>
                <select className="form-control show-tick ms select2" data-placeholder="Select" onChange={handleCountryChange}>
                  <option selected disabled>Country</option>
                  {loading ? (
                    <option>Loading...</option>
                  ) : (
                    Array.from(new Set(threebhk.map(ele => ele.location))).map((type, index) => (
                      <option key={index}>{type}</option>
                    ))
                  )}
                </select>
              </div>

              <div className='col-lg-2 d-flex justify-content-between'>
                <select className="form-control show-tick ms select2" data-placeholder="Select" onChange={handleBedChange}>
                  <option selected disabled>N. Beds</option>
                  {loading ? (
                    <option>Loading...</option>
                  ) : (
                    Array.from(new Set(threebhk.map(ele => ele.bedrooms))).map((type, index) => (
                      <option key={index}>{type}</option>
                    ))
                  )}
                </select>
              </div>

              <div className='col-lg-2 d-flex justify-content-between'>
                <select className="form-control show-tick ms select2" data-placeholder="Select" onChange={handleFundstatus}>
                  <option selected disabled>Funding Status</option>
                  {loading ? (
                    <option>Loading...</option>
                  ) : (
                    Array.from(new Set(threebhk.map(ele => ele.type))).map((type, index) => (
                      <option key={index}>{type}</option>
                    ))
                  )}
                </select>
              </div>

              <div className='col-lg-3 d-flex justify-content-between'>
                <select className="form-control show-tick ms select2" data-placeholder="Select" onChange={handleSortByPriceChange}>
                  <option selected disabled>Sort by Price</option>
                  <option value="highToLow">Price High to Low</option>
                  <option value="lowToHigh">Price Low to High</option>
                </select>
              </div>

            </div>
          </div>

          {/* CARD SCREEN */}
          <div className="row clearfix" style={{ boxShadow: 'rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px', borderRadius: '12px' }}>
            {currentCards.map((ele, index) => (
              <div className="col-lg-4 col-md-12" key={ele._id}>
                <div className="card">
                  <div className="body ">
                    <div class="position-relative overflow-hidden" >
                      <a href=""><img className="img-fluid img-thumbnail" src={`data:image/png;base64,${ele.image1}`} alt="img" /></a>
                      <div className="bg-primary rounded text-white  m-4 py-1 px-3" style={{ position: 'absolute', left: '0', top: '0' }}>{ele.type}</div>
                      <div className="bg-primary rounded text-white  m-4 py-1 px-3" style={{ position: 'absolute', right: '0', bottom: '0' }}>{ele.status}</div>
                      {/* <div className="bg-white rounded-top text-primary position-absolute start-0 bottom-0 mx-4 pt-1 px-3">Appartment</div> */}
                      <div className="d-flex justify-content-between mt-3 p-3 bg-light" style={{ position: 'absolute', left: '0', bottom: '0', width: '60%' }}>
                        <a href="#" title="Square Feet"><i className="zmdi zmdi-view-dashboard mr-2" /><span>{ele.area}</span></a>
                        <a href="#" title="Bedroom"><i className="zmdi zmdi-hotel mr-2" /><span>{ele.bedrooms}</span></a>
                        <a href="#" title="Parking space"><i className="zmdi zmdi-car-taxi mr-2" /><span>{ele.toilets}</span></a>

                      </div>
                    </div>

                    <div className='d-flex justify-content-between'>
                      <h3 className="mt-0 mb-2">{ele.name}</h3>
                      <h3 className="mt-0 mb-2">Property Price</h3>
                    </div>
                    <div className='d-flex justify-content-between'>
                      <h6 className="text-primary"><i className="zmdi zmdi-pin mr-2" />{ele.location}</h6>
                      <h6 className="text-primary  d-flex">{ele.price} <span className='  text-dark ' style={{ width: '16px', height: '16px', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '50px', marginLeft: '8px' }}><i className='zmdi zmdi-info-outline'></i></span></h6>
                    </div>

                    <div className='d-flex justify-content-around mt-3'>
                      <div className='text-center'>
                        <h6 className='mb-2'>Token Price</h6>
                        <p>$50 <strong className='text-primary'>$50</strong></p>
                      </div>
                      <div className='text-center'>
                        <h6 className='mb-2'>Dividend Yield</h6>
                        <p className='text-primary text-bold'> <strong className='text-primary'>%6+(0.50%)</strong></p>
                      </div>
                      <div className='text-center'>
                        <h6 className='mb-2'>Dividend Frequency</h6>
                        <p> <strong className='text-primary'>Weekly</strong></p>
                      </div>
                    </div>
                    <p className='text-center'>Available To Buy :  <strong className='text-dark'>0 Tokens</strong></p>

                    <div className=" d-flex justify-content-around">
                      <button
                        type="button"
                        className="btn btn-primary py-1 btn-block waves-effect waves-light mb-3"
                        style={{ backgroundColor: '#919296', borderRadius: '16px', maxWidth: '7rem' }}
                        onClick={() => handleBuyClick(ele)}
                      >
                        Buy
                      </button>
                      <button
                        type="submit"
                        className="btn btn-primary py-1 btn-block waves-effect waves-light mb-3"
                        style={{ backgroundColor: '#919296', borderRadius: '16px', maxWidth: '7rem' }}
                      >
                        Sell
                      </button>
                    </div>

                  </div>
                </div>
              </div>
            ))}

          </div>

          {/* STATIC PAGENITAION */}
          <div className='col-lg- mt-lg-5 mt-3 d-flex justify-content-end'>
            <nav aria-label="Page navigation example">
              <ul className="pagination">
                <li className={`page-item ${currentPage === 1 ? 'disabled' : ''}`}>
                  <a className="page-link text-primary" href="#" onClick={() => handlePageChange(currentPage - 1)} aria-label="Previous">
                    <span aria-hidden="true">&laquo;</span>
                  </a>
                </li>
                {pageNumbers.map(number => (
                  <li key={number} className={`page-item ${currentPage === number ? 'active' : ''}`}>
                    <a className="page-link text-primary" href="#" onClick={() => handlePageChange(number)}>{number}</a>
                  </li>
                ))}
                <li className={`page-item ${currentPage === pageNumbers.length ? 'disabled' : ''}`}>
                  <a className="page-link text-primary" href="#" onClick={() => handlePageChange(currentPage + 1)} aria-label="Next">
                    <span aria-hidden="true">&raquo;</span>
                  </a>
                </li>
              </ul>
            </nav>
          </div>


        </div>
      </section>
    </div>
  );
}

export default Marketplace;