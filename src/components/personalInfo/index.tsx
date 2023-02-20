import "./index.css";
import { useSelector, useDispatch } from "react-redux";
import { increment, setName, setEmail, setPhone } from "../../../counterSlice";

function PersonalInfo() {
  const page = useSelector((state: any) => state.counter.page);
  const name = useSelector((state: any) => state.counter.name);
  const email = useSelector((state: any) => state.counter.email);
  const phone = useSelector((state: any) => state.counter.phone);
  const dispatch = useDispatch();

  return (
    <div className="Personal-Info">
      <div className="Personal-Info-Description">
        <p className="Personal-Info-Title">Personal info</p>
        <p>Please provide your name, email address, and phone number</p>
      </div>
      <form>
        <label htmlFor="name">Name</label>
        <input
          className="Personal-Info-Input"
          type="text"
          id="Name"
          placeholder="e.g. Nicola Tesla"
          required
          value={name}
          onChange={(e) => dispatch(setName(e.target.value))}
        />
        <label htmlFor="email">Email Address</label>
        <input
          className="Personal-Info-Input"
          type="email"
          id="Email"
          placeholder="e.g. Nicolatesla@scienceb*tch.com"
          required
          value={email}
          onChange={(e) => dispatch(setEmail(e.target.value))}
        />
        <label htmlFor="phone-number">Phone Number</label>
        <input
          className="Personal-Info-Input"
          type="tel"
          id="Tel"
          placeholder="e.g. 123-456-7890"
          required
          value={phone}
          onChange={(e) => dispatch(setPhone(e.target.value))}
        />
      </form>
      <div className="Personal-Info-Footer-Buttons">
        <button
          className="Next-Step-Button"
          onClick={() => dispatch(increment())}
        >
          Next Step
        </button>
      </div>
    </div>
  );
}

export default PersonalInfo;
