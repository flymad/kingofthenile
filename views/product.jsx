const React = require("react");
const Layout = require("./layout/default-layout");

class product extends React.Component {
  render() {
    return (
      <Layout title="Product Page">
        <h1 class="text-center">Product Page</h1>
        <div class="container">
          <div class="row">
            <div class="col"></div>
            <div class="col">
              <div class="card img-thumbnail rounded">
                <img src="/payprus.jpeg" class="card-img-top " alt="..." />
                <div class="card-body text-center">
                  <h5 class="card-title">Rose Flowers</h5>
                  <p class="card-text">
                    Price <span class="fw-light">$25.99</span>
                  </p>
                  <p class="card-text">
                    Quantity:<span class="fw-light"> 5 </span>
                  </p>
                  <a href="/shop" class="btn btn-primary">
                    Buy Now
                  </a>
                </div>
              </div>
            </div>
            <div class="col"></div>
          </div>
        </div>
      </Layout>
    );
  }
}
module.exports = product;
