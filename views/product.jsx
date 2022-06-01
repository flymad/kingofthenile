const React = require("react");
const Layout = require("./layout/default-layout");

class product extends React.Component {
  render() {
    const product = this.props.product;
    return (
      <Layout title="Product Page">
        <br></br>
        <h1 className="text-center">Product Page</h1>
        <div className="container">
          <div className="row">
            <div className="col"></div>
            <div className="col">
              <div className="card img-thumbnail rounded">
                {/* <img src="/pic/shopImg.jpg" className="card-img-top " alt="Flower Image" /> */}
                <a href={`/shop/${product._id}`}>
                  <img
                    src={product.pImage}
                    className="card-img-top "
                    alt="Flowers Image"
                  />
                </a>
                <div className="card-body text-center">
                  <h5 className="card-title">{product.pname}</h5>
                  <p className="card-text">
                    Price <span className="fw-light">${product.pprice}</span>
                  </p>
                  <p className="card-text">
                    Quantity:
                    <span className="fw-light">
                      {" "}
                      {product.pstock === 0
                        ? `${product.pname} OUT OF STOCK`
                        : `${product.pstock}`}{" "}
                    </span>
                  </p>

                  <form
                    action={`/shop/product/${product._id}/buyNow?_method=PUT`}
                    method="POST"
                  >
                    <input
                      type="submit"
                      class={
                        product.pstock <= 0
                          ? "btn btn-outline-danger disabled"
                          : "btn btn-lg btn-block btn-outline-dark"
                      }
                      value="Buy Now"
                    />
                  </form>
                  <div className="mb-3">
                    <button
                      type="submit"
                      className="btn btn-secondary mt-4"
                      value="Edit Product"
                    >
                      <a
                        href={`/shop/product/${product._id}/edit`}
                        className="text-light text-decoration-none"
                      >
                        Edit Product
                      </a>
                    </button>
                  </div>
                  <div className="mb-3">
                    <form
                      action={`/shop/product/${product._id}?_method=DELETE`}
                      method="POST"
                    >
                      <input
                        type="submit"
                        className="btn btn-danger mt-4 text-light text-decoration-none"
                        value="Delete Product"
                      />
                    </form>
                  </div>
                  <div className="mb-3">
                    <button
                      type="submit"
                      className="btn btn-primary mt-4"
                      value="limited quantity Shopping"
                    >
                      <a
                        href="/shop"
                        className="text-light text-decoration-none"
                      >
                        Continue Shopping
                      </a>
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="col"></div>
          </div>
        </div>
      </Layout>
    );
  }
}
module.exports = product;
