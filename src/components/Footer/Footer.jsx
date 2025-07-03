export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p className="footer-text">
          © 2025 藤沢イベント情報局
          <img
            src="/icons/logo.svg"
            alt="藤沢イベント情報局 ロゴ"
            className="footer-logo"
          />
        </p>
        <p className="footer-text">
          お問い合わせはこちら☞{" "}
          <a
            href="/contact"
            className="footer-link"
            aria-label="お問い合わせフォーム"
          >
            <img src="/icons/idea.svg" alt="お問い合わせアイコン" />
          </a>
        </p>
      </div>
    </footer>
  );
}
