import logo from "../image/Transparent logo.png";
import "./header.css";


export default function Header() {

  return (
    <>
      <div className="header container-fluid">
        <header>
          <img className="image" src={logo} height={110} alt="logo" />
          <h2 className="name">Soulmate Seekers</h2>
          وَخَلَقْنَاكُمْ أَزْوَاجًا
          <br></br>
          “And We created you in pairs.” (Surah an-Naba’, verse 8)
          {/* <div class="d-grid gap-2 d-md-block mr-5 md-0">
            <button
              class="btn btn-primary"
              type="button"
              id="btn_reg"
              onClick={() => SignUpNavigite("/register")}
            >
              Register Now
            </button>
            <button
              class="btn btn-primary"
              type="button"
              id="btn_signin"
              onClick={() => signInNavigate("/login")}
            >
              Sign In
            </button>
          </div> */}
          <br />
          <br />
        </header>
      </div>
    </>
  );
}
