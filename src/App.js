import "./App.css";
import { useState } from "react";
function App() {
  const [userData, setUserData] = useState({ name: "", email: "", size: "" });
  const [option, setOption] = useState("small size");
  const handleUserData = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
    if (e.target.name === "size") {
      setOption(e.target.value);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem("user", userData.name);
    localStorage.setItem("email", userData.email);
    localStorage.setItem("size", userData.size);
    setUserData({ name: "", email: "", size: "" });
    setOption("small size");
  };
  return (
    <section className="section-book">
      <div className="book" style={{}}>
        <div className="book__form">
          <form action="#" className="form" onSubmit={handleSubmit}>
            <div className=" u-margin-bottom-medium">
              <h3 className="heading-secondary">start booking now</h3>
            </div>
            <div className="form__element">
              <input
                type="text"
                className="form__input"
                id="name"
                placeholder="Full name"
                name="name"
                value={userData.name}
                onChange={handleUserData}
                required
              />
              <label htmlFor="name" className="form__label">
                Full name
              </label>
            </div>
            <div className="form__element">
              <input
                type="email"
                className="form__input"
                id="email"
                placeholder="Email address"
                name="email"
                value={userData.email}
                onChange={handleUserData}
                required
              />
              <label htmlFor="email" className="form__label">
                Email address
              </label>
            </div>
            <div className="form__element u-margin-bottom-medium">
              <div className="form__radio">
                <input
                  type="radio"
                  className="form__radio-input"
                  id="small"
                  name="size"
                  value="small size"
                  onChange={handleUserData}
                  checked={option === "small size"}
                />
                <label htmlFor="small" className="form__radio-label">
                  <span className="form__radio-button"></span>
                  Small tour group
                </label>
              </div>
              <div className="form__radio">
                <input
                  type="radio"
                  className="form__radio-input"
                  id="large"
                  name="size"
                  value="large size"
                  checked={option === "large size"}
                  onChange={handleUserData}
                />
                <label htmlFor="large" className="form__radio-label">
                  <span className="form__radio-button"></span>
                  Large tour group
                </label>
              </div>
            </div>
            <div className="form__element">
              <button className="btn btn--green">Next step &rarr;</button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

export default App;
