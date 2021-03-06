const React = require("react");
const Layout = require("./layout/default-layout");

class Edit extends React.Component {
  render() {
    const editProduct = this.props.editProduct;
    return (
      <Layout title="Product Edit Page">
        <div className="container container-xxl">
          <div className="row align-items-end">
            <div className="col"></div>
            <div className="">
              <br></br>
              <h3 className="text-secondary text-center">Edit Product</h3>
              <form
                action={`/shop/product/${editProduct._id}?_method=PUT`}
                method="POST"
              >
                <div className="col mb-3">
                  <label htmlFor="pName" className="form-label text-secondary">
                    Product Name
                  </label>
                  <input
                    type="text"
                    class="form-control border border-secondary shadow-sm"
                    id="pName"
                    name="pname"
                    defaultValue={editProduct.pname}
                  />
                </div>
                <div className="col mb-3">
                  <label htmlFor="pPrice" className="form-label text-secondary">
                    Product Price
                  </label>
                  <input
                    type="text"
                    class="form-control border border-secondary shadow-sm"
                    id="pPrice"
                    name="pprice"
                    defaultValue={editProduct.pprice}
                  />
                </div>
                <div className="col mb-3">
                  <label htmlFor="pStock" className="form-label text-secondary">
                    Product Stock
                  </label>
                  <input
                    type="text"
                    class="form-control border border-secondary shadow-sm"
                    id="pStock"
                    name="pstock"
                    defaultValue={editProduct.pstock}
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="pStock" className="form-label text-secondary">
                    Product Image
                  </label>
                  <input
                    type="text"
                    class="form-control border border-secondary shadow-sm"
                    id="pStock"
                    name="pImage"
                    defaultValue={editProduct.pImage}
                  />
                </div>
                <div class="mb-3">
                  <input
                    type="submit"
                    className="btn btn-outline-dark form-control"
                    value="Update Product"
                  />
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

module.exports = Edit;
