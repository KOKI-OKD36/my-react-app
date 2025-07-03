import { Link } from "react-router-dom";
import "./ContactList.css";

export default function ContactList() {
  return (
    <div className="contact-list-container">
      <h2>お問い合わせの種類を選んでください</h2>
      <div className="contact-cards">
        <Link to="/contact/volunteer" className="contact-card">
          <img src="/icons/volunteer.svg" alt="ボランティア" />
          <h3>ボランティア応募</h3>
          <p>
            地域イベントのお手伝いを
            <br />
            ご希望の方はこちら
          </p>
        </Link>

        <Link to="/contact/vendor" className="contact-card">
          <img src="/icons/vendor.svg" alt="出店応募" />
          <h3>出店応募</h3>
          <p>出店をご希望の方はこちら</p>
        </Link>

        <Link to="/contact/other" className="contact-card">
          <img src="/icons/other.svg" alt="その他お問い合わせ" />
          <h3>その他お問い合わせ</h3>
          <p>ご質問・ご意見などはこちら</p>
        </Link>
      </div>
    </div>
  );
}
