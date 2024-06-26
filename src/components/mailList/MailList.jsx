import "./mailList.css";
const MailList = () => {
  return (
    <>
      <div className="mail">
        <h1 className="mailTitle"> save time, save money!</h1>
        <span className="mailDesc">
          Sign up and we'll send the best deals to you
        </span>
        <div className="mailInputContainer">
          <input type="text" placeholder="your Email"></input>
          <button className="headerBtn">Subscribe</button>
        </div>
      </div>
    </>
  );
};
export default MailList;
