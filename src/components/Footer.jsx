function Footer() {
  return (
    <footer className="footer footer-center bg-base-300 text-base-content p-4 shadow-lg">
      <aside>
        <p className="font-semibold">
          Paweł Chudecki © {new Date().getFullYear()}
        </p>
      </aside>
    </footer>
  );
}

export default Footer;
