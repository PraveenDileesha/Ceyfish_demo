import { HiOutlineMail } from "react-icons/hi";

const EmailButton = () => {
  return (
    <a
      href="mailto:info@ceyfish.com?subject=Inquiry&body=Hello%20CeyFish%20Team,"
      className="btn-hero bg-secondary hover:border-btn-dark flex items-center justify-center"
    >
      <span>
        <HiOutlineMail className="btn-hero-icon text-deep-navy" />
      </span>
      <p className="btn-hero-text text-deep-navy">Send an Email</p>
    </a>
  );
};

export default EmailButton;
