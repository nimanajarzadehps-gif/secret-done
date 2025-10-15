import React, { useState } from "react";
import "../login.css";

export default function AuthPage() {
  const [isSignUpMode, setIsSignUpMode] = useState(false);

  return (
    <div className={`containers ${isSignUpMode ? "sign-up-mode" : ""}`}>
      <div className="forms-containers">
        <div className="signin-signup">

          <form action="#" className="sign-in-form">
            <h2 className="title">ورود</h2>
            <div className="input-field">
              <i className="fas fa-user"></i>
              <input type="text" placeholder="نام کاربری" style={{
              fontFamily:"IranSansRegular",
            }}/>
            </div>
            <div className="input-field">
              <i className="fas fa-lock"></i>
              <input type="password" style={{
              fontFamily:"IranSansRegular",
            }} placeholder="رمز عبور" />
            </div>
            <input type="submit" value="ورود" className="btn solid" style={{
              fontFamily:"IranSansRegular",
            }}/>
          </form>

      
          <form action="#" className="sign-up-form">
            <h2 className="title">ثبت‌نام</h2>
            <div className="input-field">
              <i className="fas fa-user"></i>
              <input type="text" placeholder="نام کاربری" style={{
                fontFamily:"IranSansRegular",
              }}/>
            </div>
            <div className="input-field">
              <i className="fas fa-envelope"></i>
              <input type="email" placeholder="ایمیل" style={{
                fontFamily:"IranSansRegular",
              }}/>
            </div>
            <div className="input-field">
              <i className="fas fa-lock"></i>
              <input type="password" placeholder="رمز عبور" style={{
                fontFamily:"IranSansRegular",
              }}/>
            </div>
            <input type="submit" className="btn" value="ثبت‌نام" style={{
              fontFamily:"IranSansRegular",
            }}/>
          </form>
        </div>
      </div>


      <div className="panels-containers">
        <div className="panel left-panel">
          <div className="content">
            <h3 style={{
              fontFamily:"IranSansBold",
            }}>کاربر جدید هستید؟</h3>
            <p style={{
              fontFamily:"IranSansRegular",
            }}>برای استفاده از امکانات سایت، همین حالا ثبت‌نام کنید.</p>
            <button
              className="btn transparent"
              onClick={() => setIsSignUpMode(true)}
            >
              ثبت‌نام
            </button>
          </div>
          <img
            src="undraw_access-account_aydp (2).svg"
            className="image"
            alt="ورود"
          />
        </div>

        <div className="panel right-panel">
          <div className="content">
            <h3 style={{
              fontFamily:"IranSansBold",
            }}>حساب کاربری دارید؟</h3>
            <p style={{
              fontFamily:"IranSansRegular",
            }}>اگر قبلاً ثبت‌نام کرده‌اید، از این بخش وارد شوید.</p>
            <button
              className="btn transparent"
              onClick={() => setIsSignUpMode(false)}
            >
              ورود
            </button>
          </div>
          <img
            src="undraw_authentication_tbfc.svg"
            className="image"
            alt="ثبت‌نام"
          />
        </div>
      </div>
    </div>
  );
}
