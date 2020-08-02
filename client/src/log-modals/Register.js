import React from "react";
import Modal from "react-modal";
import { ProductContext } from "../ProductContext";

function Register() {
  const state = useContext(ProductContext);
  return (
    <div>
      <div>
        <Modal isOpen={true}>
          <div className="modal-content">
            <h4>Register</h4>
          </div>
          <div>
            {/* row one */}
            <form>
              <div className="row">
                <div class="input-field col s6">
                  <input
                    id="last_name"
                    type="text"
                    class="validate"
                    style={{ borderBottom: "2px solid black" }}
                  />
                  <label for="last_name">Last Name</label>
                </div>
                <div class="input-field col s6">
                  <input
                    id="name"
                    type="text"
                    class="validate"
                    style={{ borderBottom: "2px solid black" }}
                  />
                  <label for="name">Last Name</label>
                </div>
              </div>
              <div className="row">
                <div class="input-field col s6">
                  <input
                    id="_name"
                    type="text"
                    class="validate"
                    style={{ borderBottom: "2px solid black" }}
                  />
                  <label for="_name">Last Name</label>
                </div>
                <div class="input-field col s6">
                  <input
                    id="ame"
                    type="text"
                    class="validate"
                    style={{ borderBottom: "2px solid black" }}
                  />
                  <label for="ame">Last Name</label>
                </div>
              </div>
              <div className="center">
                <button className="btn red">cancel</button>
                <button className="btn green" value="submit">
                  submit
                </button>
              </div>
            </form>
            {/* end of row 1 */}
          </div>
        </Modal>
      </div>
    </div>
  );
}

export default Register;
