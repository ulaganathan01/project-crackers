import { useState } from "react";
import axios from "axios";

export default function SignIn() {
  const [userData, setUserData] = useState({
    username: "",
    password: "",
    year: "",
  });
  const [isValid, setIsValid] = useState({ status: true, message: "" });
  function handleChange(e) {
    setUserData((prevState) => {
      return { ...prevState, [e.target.name]: e.target.value };
    });
  }
  function handleSubmit(e) {
    e.preventDefault();
    const { username, password, year } = userData;
    if (!username || !password || !year) {
      setIsValid({
        ...isValid,
        status: false,
        message: "Please enter all the necessary fields",
      });
    } else {
      setIsValid({ ...isValid, status: true, message: "" });
      console.log(userData);
      axios
        .post("http://localhost:8080/api/v2/user/signin", userData)
        .then((res) => {
          if (!res.data.status) {
            setIsValid({
              ...isValid,
              status: res.data.status,
              message: res.data.error,
            });
          } else {
            setIsValid({ ...isValid, status: true, message: "" });
            console.log(`Welcome ${res.data.user}`);
          }
        })
        .catch((err) => console.error(err.message));
    }
  }
  return (
    <div className="border border-success m-3 p-4">
      <div className="text-center my-2">
        <img
          src="/kannan-crackers.jpg"
          alt="Kannan Crackers Logo"
          width={180}
          height={150}
        />
      </div>
      <div className="d-flex justify-content-center text-center">
        {!isValid.status && (
          <div className="alert alert-danger w-50 p-2" role="alert">
            {isValid.message}
            <span className="text-danger">*</span>
          </div>
        )}
      </div>
      <form>
        <div className="d-flex flex-column align-items-center">
          <div className="row mb-2 w-25">
            <div>
              <label htmlFor="name" className="col-sm-2 col-form-label">
                Username
                <span className="fw-bold text-danger">*</span>
              </label>
              <input
                type="name"
                onChange={handleChange}
                name="username"
                className="form-control border border-success"
                id="name"
                value={userData.username}
              />
            </div>
          </div>
          <div className="row mb-2 w-25">
            <div>
              <label htmlFor="password" className="col-sm-2 col-form-label">
                Password
                <span className="fw-bold text-danger">*</span>
              </label>
              <input
                type="password"
                name="password"
                className="form-control border border-success"
                id="password"
                onChange={handleChange}
                value={userData.password}
              />
            </div>
          </div>
          <div className="row mb-2 w-25">
            <div>
              <label htmlFor="year" className="col-sm-2 col-form-label">
                Year
                <span className="fw-bold text-danger">*</span>
              </label>
              <select
                name="year"
                onChange={handleChange}
                className="form-select border border-success"
                aria-label="Default select example"
                id="year"
                value={userData.year}
              >
                <option value="">Select Year</option>
                <option value="2025">2025</option>
                <option value="2024">2024</option>
                <option value="2023">2023</option>
                <option value="2022">2022</option>
              </select>
            </div>
          </div>
          <button
            type="submit"
            className="btn btn-primary"
            onClick={handleSubmit}
          >
            Sign In
          </button>
        </div>
      </form>
    </div>
  );
}
