import { useState } from "react";
import axios from "axios";

export default function Modal() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isValid, setIsValid] = useState({status: true, message: ""});
  const [customer, setCustomer] = useState({date: "",
    ordernumber: "",
    kattu: "",
    name: "",
    contactNumber: "",
    stateCode: "",
    city: "",
    amount: "",
    bank: "",
    remarks: "",
    status: "",
    transportName: "",
    LRNumber: "",
    LRDate: "",
    Box: "",
    EName: ""
  });
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);
  function handleChange(e){
    setCustomer((prevCustomer) => {
        return {...prevCustomer, [e.target.name]: e.target.value}
    })
  }
  function handleSubmit(){
    console.log(customer);
    if(customer.name){
        setIsValid({...isValid, status: true, message: ""});
        axios.post("http://localhost:8080/api/v2/customer/add", customer)
        .then(res => console.log(res))
        .catch((err) => {
            setIsValid({...isValid, status: false, message: err.message});
        })
    }else{
        setIsValid({...isValid, status: false, message: "Please enter the customer name"});
    }
  }
  return (
    <>
      <div className="me-3">
        {/* Button to open modal */}
        <button className="btn btn-warning" onClick={openModal}>
          Add Customer
        </button>

        {/* Modal */}
        {isModalOpen && (
          <>
            <div
              className={`modal fade ${isModalOpen ? "show" : ""}`}
              style={{
                display: isModalOpen ? "block" : "none",
                zIndex: 1055,
              }}
              tabIndex="-1"
              role="dialog"
              aria-labelledby="modalLabel"
              aria-hidden={!isModalOpen}
            >
              <div className="modal-dialog modal-dialog-scrollable" role="document">
                <div className="modal-content">
                  <div className="modal-header">
                    <h5 className="modal-title" id="modalLabel">
                      Add Customer
                    </h5>
                    <button
                      type="button"
                      className="btn-close"
                      onClick={closeModal}
                      aria-label="Close"
                    ></button>
                  </div>
                  <div className="modal-body">
                  {!isValid.status && (
                      <div className="alert alert-warning p-2" role="alert">
                        {isValid.message}
                      </div>
                    )}
                    <form className="row g-3">
                      <div className="col-md-6">
                        <label htmlFor="date" className="form-label">
                          Date
                        </label>
                        <input
                          type="text"
                          name="date"
                          className="form-control"
                          id="date"
                          onChange={handleChange}
                        />
                      </div>
                      <div className="col-md-6">
                        <label htmlFor="orderNumber" className="form-label">
                          Order Number
                        </label>
                        <input
                          type="text"
                          name="orderNumber"
                          className="form-control"
                          id="orderNumber"
                          onChange={handleChange}
                        />
                      </div>
                      <div className="col-6">
                        <label htmlFor="kattu" className="form-label">
                          Kattu
                        </label>
                        <input
                          type="text"
                          name="kattu"
                          className="form-control"
                          id="kattu"
                          onChange={handleChange}
                        />
                      </div>
                      <div className="col-6">
                        <label htmlFor="name" className="form-label">
                          Name
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="name"
                          name="name"
                          onChange={handleChange}
                        />
                      </div>
                      <div className="col-6">
                        <label htmlFor="contactNumber" className="form-label">
                          Contact Number
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="contactnumber"
                          name="contactNumber"
                          onChange={handleChange}
                        />
                      </div>
                      <div className="col-6">
                        <label htmlFor="stateCode" className="form-label">
                          State Code
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="stateCode"
                          name="stateCode"
                          onChange={handleChange}
                        />
                      </div>
                      <div className="col-6">
                        <label htmlFor="city" className="form-label">
                          City
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="city"
                          name="city"
                          onChange={handleChange}
                        />
                      </div>
                      <div className="col-6">
                        <label htmlFor="amount" className="form-label">
                          Amount
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="amount"
                          name="amount"
                          onChange={handleChange}
                        />
                      </div>
                      <div className="col-6">
                        <label htmlFor="bank" className="form-label">
                          Bank
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="bank"
                          name="bank"
                          onChange={handleChange}
                        />
                      </div>
                      <div className="col-6">
                        <label htmlFor="remarks" className="form-label">
                          Remarks
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="remarks"
                          name="remarks"
                          onChange={handleChange}
                        />
                      </div>
                      <div className="col-6">
                        <label htmlFor="status" className="form-label">
                          Status
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="status"
                          name="status"
                          onChange={handleChange}
                        />
                      </div>
                      <div className="col-6">
                        <label htmlFor="transportName" className="form-label">
                          Transport Name
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="transportName"
                          name="transportName"
                          onChange={handleChange}
                        />
                      </div>
                      <div className="col-6">
                        <label htmlFor="LRNumber" className="form-label">
                          LR Number
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="LRNumber"
                          name="LRNumber"
                          onChange={handleChange}
                        />
                      </div>
                      <div className="col-6">
                        <label htmlFor="LRDate" className="form-label">
                          LR Date
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="LRDate"
                          name="LRDate"
                          onChange={handleChange}
                        />
                      </div>
                      <div className="col-6">
                        <label htmlFor="box" className="form-label">
                          Box
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="box"
                          name="box"
                          onChange={handleChange}
                        />
                      </div>
                      <div className="col-6">
                        <label htmlFor="EName" className="form-label">
                          E Name
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="EName"
                          name="EName"
                          onChange={handleChange}
                        />
                      </div>
                    </form>
                  </div>
                  <div className="modal-footer">
                    <button
                      type="button"
                      className="btn btn-secondary"
                      onClick={closeModal}
                    >
                      Close
                    </button>
                    <button type="button" onClick={handleSubmit} className="btn btn-primary">
                      Submit
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Backdrop */}
            <div
              className="modal-backdrop fade show"
              style={{
                position: "fixed",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                backgroundColor: "rgba(0, 0, 0, 0.5)",
                zIndex: 1050,
              }}
              onClick={closeModal}
            ></div>
          </>
        )}
      </div>
    </>
  );
}
