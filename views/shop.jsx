const React = require("react");
const Layout = require("./layout/default-layout");

class shop extends React.Component {
  render() {
    const { shop } = this.props;
    return (
      <Layout title="Shop Page">
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
          <a class="navbar-brand" href="">
            King Of The Nile
          </a>
          <ul class="navbar-nav ms-auto">
            <li class="nav-item">
              <a class="nav-link" href="/shop/register">
                Create New Product
              </a>
            </li>
          </ul>
        </nav>

        <div className="container flex-row align-items-center">
          <div className="row">
            <ul className="col-lg-4 col-md-5">
              {shop.map((myshop) => {
                return (
                  <li className="card img-thumbnail mx-2 mt-2" key={myshop._id}>
                    <h5 className="card-header text-center">{myshop.pname}</h5>
                    <a href={`/shop/${myshop._id}`}>
                      <img
                        src={myshop.pImage}
                        className="card-img-top "
                        alt="Flowers Image"
                      />
                    </a>
                    <div className="card-body text-center">
                      <p className="card-text">
                        Price:{" "}
                        <span className="fw-light">${myshop.pprice}</span>
                      </p>
                      <p className="card-text">
                        Quantity:
                        <span className="fw-light"> {myshop.pstock} </span>
                      </p>
                      <a
                        href={`/shop/product/${myshop._id}`}
                        className="btn btn-sm btn-block btn-outline-dark"
                      >
                        Product Details
                      </a>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </Layout>
    );
  }
}

module.exports = shop;
