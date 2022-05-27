const React = require("react");
const Layout = require("./layout/default-layout");

class register extends React.Component {
  render() {
    return (
      <Layout title="Product Registration Page">
        <div class="container">
          <div class="row">
            <div class="col"></div>
            <div class="col text-bg-light card">
              <h3 class="text-uppercase text-secondary">
                Product Registration Page
              </h3>
              <form action="" method="POST">
                <div class="mb-3">
                  <label htmlfor="pName" class="form-label">
                    Product Name
                  </label>
                  <input
                    type="text"
                    class="form-control border border-secondary shadow-sm"
                    id="pName"
                    name="pName"
                    placeholder="Enter Product Name"
                  />
                </div>
                <div class="mb-3">
                  <label htmlfor="pPrice" class="form-label">
                    Product Price
                  </label>
                  <input
                    type="text"
                    class="form-control border border-secondary shadow-sm"
                    id="pPrice"
                    name="pPrice"
                    placeholder="Enter Product Price"
                  />
                </div>
                <div class="mb-3">
                  <label htmlfor="pStock" class="form-label">
                    Product Stock
                  </label>
                  <input
                    type="text"
                    class="form-control border border-secondary shadow-sm"
                    id="pStock"
                    name="pStock"
                    placeholder="Enter Product Stock"
                  />
                </div>
                <div class="mb-3">
                  <label htmlfor="pImage" class="form-label">
                    Select Product Image
                  </label>
                  <input
                    class="form-control border border-secondary shadow-sm"
                    type="file"
                    id="pImage"
                    name="pImage"
                  />
                </div>
                <div class="mb-3">
                  <button
                    type="submit"
                    class="btn btn-outline-success form-control"
                    value="Register Product"
                  >
                    Register Product
                  </button>
                </div>
                <div class="mb-3">
                  <button
                    type="submit"
                    class="btn btn-outline-secondary form-control"
                    value="Register Product"
                  >
                    Edit Product
                  </button>
                </div>
                <div class="mb-3">
                  <button
                    type="submit"
                    class="btn btn-outline-danger form-control"
                    value="Register Product"
                  >
                    Delete Product
                  </button>
                </div>
              </form>
            </div>
            <div class="col"></div>
          </div>
        </div>
      </Layout>
    );
  }
}

module.exports = register;
