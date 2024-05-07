import React from 'react'
import { NavLink } from 'react-router-dom'
function Agent_invoice() {
  return (
    <div>
      
        <section className="content invoice">
  <div className="block-header">
    <div className="row">
      <div className="col-lg-7 col-md-6 col-sm-12">
        <h2>Agent Invoice
          <small>Welcome to Meta Estate Empire</small>
        </h2>
      </div>
      <div className="col-lg-5 col-md-6 col-sm-12">
        <ul className="breadcrumb float-md-right">
        <li className="breadcrumb-item"><a href="/home"><i className="zmdi zmdi-home" /> Meta</a></li>
          <li className="breadcrumb-item"><NavLink to="">Pages</NavLink></li>
          <li className="breadcrumb-item active">Invoice</li>
        </ul>
      </div>
    </div>
  </div>
  <div className="container-fluid">
  <div className="row clearfix">
    <div className="col-lg-12">
      <div className="card">
        <div className="header">
          <h2><strong>Single</strong> Invoice</h2>
          <ul className="header-dropdown">
            <li className="dropdown"> <NavLink to="" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false"> <i className="zmdi zmdi-more" /> </NavLink>
              <ul className="dropdown-menu">
                <li><NavLink to="">Print Invoices</NavLink></li>
                <li role="presentation" className="divider" />
                <li><NavLink to="">Export to XLS</NavLink></li>
                <li><NavLink to="">Export to CSV</NavLink></li>
                <li><NavLink to="">Export to XML</NavLink></li>
              </ul>
            </li>
            <li className="remove">
              <NavLink role="button" className="boxs-close"><i className="zmdi zmdi-close" /></NavLink>
            </li>
          </ul>
        </div>
        <div className="body">
          <h3 className="mb-0">Invoice Details : <strong className="text-primary">#2015000152</strong></h3>
          <ul className="nav nav-tabs">
            <li className="nav-item inlineblock"><a className="nav-link active" data-toggle="tab" href="#details" aria-expanded="true">Details</a></li>
            <li className="nav-item inlineblock"><a className="nav-link" data-toggle="tab" href="#notes" aria-expanded="false">Notes</a></li>
            <li className="nav-item inlineblock"><a className="nav-link" data-toggle="tab" href="#history" aria-expanded="false">History</a></li>
          </ul>                
        </div>
      </div>
      <div className="tab-content">
        <div role="tabpanel" className="tab-pane in active" id="details" aria-expanded="true">
          <div className="card">
            <div className="body">
              <div className="row">
                <div className="col-md-6 col-sm-6">
                  <address>
                    <strong>ThemeMakker Inc.</strong><br />
                    795 Folsom Ave, Suite 546<br />
                    San Francisco, CA 54656<br />
                    <address title="Phone">P:</address> (123) 456-34636
                  </address>
                </div>
                <div className="col-md-6 col-sm-6 text-right">
                  <p className="mb-0"><strong>Order Date: </strong> Jun 15, 2019</p>
                  <p className="mb-0"><strong>Order Status: </strong> <span className="badge bg-orange">Pending</span></p>
                  <p><strong>Order ID: </strong> #123456</p>
                </div>
              </div>
              <div className="mt-40" />
              <div className="row">
                <div className="col-md-12">
                  <div className="table-responsive">
                    <table className="table table-hover">
                      <thead>
                        <tr>
                          <th>#</th>                                                        
                          <th>Item</th>
                          <th className="hidden-sm-down">Description</th>
                          <th>Quantity</th>
                          <th className="hidden-sm-down">Unit Cost</th>
                          <th>Total</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>1</td>
                          <td>Simple Black Clock</td>
                          <td className="hidden-sm-down">Lorem ipsum dolor sit amet.</td>
                          <td>1</td>
                          <td className="hidden-sm-down">$380</td>
                          <td>$380</td>
                        </tr>
                        <tr>
                          <td>2</td>
                          <td>Brone Candle</td>
                          <td className="hidden-sm-down">There are many variations of passages of Lorem Ipsum</td>
                          <td>5</td>
                          <td className="hidden-sm-down">$50</td>
                          <td>$250</td>
                        </tr>
                        <tr>
                          <td>3</td>
                          <td>Wood Simple Clock</td>
                          <td className="hidden-sm-down">Lorem ipsum dolor sit amet.</td>
                          <td>2</td>
                          <td className="hidden-sm-down">$500</td>
                          <td>$1000</td>
                        </tr>
                        <tr>
                          <td>4</td>
                          <td>Unero Small Bag</td>
                          <td className="hidden-sm-down">Contrary to popular belief, not simply random text</td>
                          <td>3</td>
                          <td className="hidden-sm-down">$300</td>
                          <td>$900</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
              <hr />
              <div className="row">
                <div className="col-md-6">
                  <h5>Note</h5>
                  <p>Etsy doostang zoodles disqus groupon greplin oooj voxy zoodles, weebly ning heekya handango imeem plugg dopplr jibjab, movity jajah plickers sifteo edmodo ifttt zimbra.</p>
                </div>
                <div className="col-md-6 text-right">
                  <p className="mb-0"><b>Sub-total:</b> 2930.00</p>
                  <p className="mb-0">Discout: 12.9%</p>
                  <p className="mb-0">VAT: 12.9%</p>                                        
                  <h3 className="mb-0 m-t-10">USD 2930.00</h3>
                </div>
              </div>
              <hr />
              <div className="hidden-print col-md-12 text-right">
                <button className="btn btn-warning btn-icon  btn-icon-mini btn-round"><i className="zmdi zmdi-print" /></button>
                <button className="btn btn-primary btn-round">Submit</button>
              </div>
            </div>
          </div>
        </div>
        <div role="tabpanel" className="tab-pane" id="notes" aria-expanded="false">
          <div className="row clearfix">
            <div className="col-lg-6 col-md-12">
              <div className="card">
                <div className="header">
                  <h2><strong>ID:</strong> 25822</h2>
                  <small>Created at: 8 Jan, 2019</small>
                </div>
                <div className="body">
                  <h6>This is Note</h6>
                  <p className="mb-0">Lorem ipsum dolor sit amet, ut duo atqui exerci dicunt, ius impedit mediocritatem an. Pri ut tation electram moderatius.
                    Per te suavitate democritum. Duis nemore probatus ne quo, ad liber essent aliquid
                    pro. Et eos nusquam accumsan, vide mentitum fabellas ne est, eu munere gubergren
                    sadipscing mel.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-12">
              <div className="card">
                <div className="header">
                  <h2><strong>ID:</strong> 25823</h2>
                  <small>Created at: 19 Dec, 2018</small>
                </div>
                <div className="body">
                  <h6>This is Note</h6>
                  <p className="mb-0">Lorem ipsum dolor sit amet, ut duo atqui exerci dicunt, ius impedit mediocritatem an. Pri ut tation electram moderatius.
                    Per te suavitate democritum. Duis nemore probatus ne quo, ad liber essent aliquid
                    pro. Et eos nusquam accumsan, vide mentitum fabellas ne est, eu munere gubergren
                    sadipscing mel.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-12">
              <div className="card">
                <div className="header">
                  <h2><strong>ID:</strong> 25824</h2>
                  <small>Created at: 18 Dec, 2018</small>
                </div>
                <div className="body">
                  <h6>This is Note</h6>
                  <p className="mb-0">Lorem ipsum dolor sit amet, ut duo atqui exerci dicunt, ius impedit mediocritatem an. Pri ut tation electram moderatius.
                    Per te suavitate democritum. Duis nemore probatus ne quo, ad liber essent aliquid
                    pro. Et eos nusquam accumsan, vide mentitum fabellas ne est, eu munere gubergren
                    sadipscing mel.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-12">
              <div className="card">
                <div className="header">
                  <h2><strong>ID:</strong> 25825</h2>
                  <small>Created at: 19 Dec, 2018</small>
                </div>
                <div className="body">
                  <h6>This is Note</h6>
                  <p className="mb-0">Lorem ipsum dolor sit amet, ut duo atqui exerci dicunt, ius impedit mediocritatem an. Pri ut tation electram moderatius.
                    Per te suavitate democritum. Duis nemore probatus ne quo, ad liber essent aliquid
                    pro. Et eos nusquam accumsan, vide mentitum fabellas ne est, eu munere gubergren
                    sadipscing mel.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-12">
              <button className="btn btn-primary btn-round">Add Note</button>
            </div>
          </div>
        </div>
        <div role="tabpanel" className="tab-pane" id="history" aria-expanded="false">
          <div className="card">
            <div className="body">
              <div className="row">
                <div className="col-md-6 col-sm-6">
                  <address>
                    <strong>ThemeMakker Inc.</strong><br />
                    795 Folsom Ave, Suite 546<br />
                    San Francisco, CA 54656<br />
                    <abbr title="Phone">P:</abbr> (123) 456-34636
                  </address>
                </div>
                <div className="col-md-6 col-sm-6 text-right">
                  <p className="mb-0"><strong>Order Date: </strong> Jun 15, 2019</p>
                  <p className="mb-0"><strong>Order Status: </strong> <span className="badge bg-orange">Pending</span></p>
                  <p><strong>Order ID: </strong> #123456</p>
                </div>
              </div>                                
              <div className="row">
                <div className="col-md-12">
                  <div className="table-responsive">
                    <table className="table table-striped">
                      <thead>
                        <tr>
                          <th>#</th>
                          <th>Description</th>
                          <th>Date</th>
                          <th>Status</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>1</td>
                          <td>Invoice Created</td>
                          <td>18 Dec, 2018</td>
                          <td><span className="badge badge-default">Panding</span></td>
                        </tr>
                        <tr>
                          <td>1</td>
                          <td>Invoice Sent</td>
                          <td>19 Dec, 2018</td>
                          <td><span className="badge badge-default">Panding</span></td>
                        </tr>
                        <tr>
                          <td>1</td>
                          <td>Invoice Paid</td>
                          <td>20 Dec, 2018</td>
                          <td><span className="badge badge-success">Success</span></td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>                   
      </div>
    </div>
  </div>
</div>

</section>

    </div>
  )
}

export default Agent_invoice