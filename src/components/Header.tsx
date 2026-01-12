import "./Header.css";

interface HeaderProps {
  nombreUsuario: string;
  inicial: string;
}

const Header = ({ nombreUsuario, inicial }: HeaderProps) => {
  return (
    <header className="header">
      <div className="header-usuario">
        <div className="header-avatar">{inicial}</div>
        <div>
          <span className="header-label">Usuario:</span>
          <h3 className="header-nombre">{nombreUsuario}</h3>
        </div>
      </div>

      {/* Logo oficial */}
      <img
        src="/logo-kronos2.png"
        alt="Logo Kronos"
        className="header-logo"
      />
    </header>
  );
};

export default Header;
