const React = require("react");
const Layout = require("./layout/default-layout");

class register extends React.Component {
  render() {
    return (
      <Layout title="Product Registration Page">
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <div className="container container-xxl">
          <div className="row align-items-end">
            <div className="col"></div>
            <div className="">
              <br></br>
              <h3 className="text-uppercase text-secondary text-center">
                New Product
              </h3>
              <form action="/shop" method="POST">
                <div class="inline" className="mb-3">
                  <label htmlFor="pName" className="form-label text-secondary">
                    Product Name
                  </label>
                  <input
                    type="text"
                    class="form-control border border-secondary shadow-sm"
                    id="pName"
                    name="pname"
                    placeholder="Enter Product Name"
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="pPrice" className="form-label text-secondary">
                    Product Price
                  </label>
                  <input
                    type="text"
                    class="form-control border border-secondary shadow-sm"
                    id="pPrice"
                    name="pprice"
                    placeholder="Enter Product Price"
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="pStock" className="form-label text-secondary">
                    Product Stock
                  </label>
                  <input
                    type="text"
                    class="form-control border border-secondary shadow-sm"
                    id="pStock"
                    name="pstock"
                    placeholder="Enter Product Stock"
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="pImage" className="form-label text-secondary">
                    Product Stock
                  </label>
                  <input
                    type="text"
                    class="form-control border border-secondary shadow-sm"
                    id="pImage"
                    name="pImage"
                    placeholder="Enter Image URL"
                  />
                </div>
                <div className="mb-3">
                  <button
                    type="submit"
                    className="btn btn-outline-dark form-control"
                    value="Register Product"
                  >
                    Create Product
                  </button>
                </div>
              </form>
            </div>
            <div className="col"></div>
          </div>
        </div>
      </Layout>
    );
  }
}

module.exports = register;
