import React, { useState } from 'react';

const Ruoka = () => {
  const [loginUserName, setLoginUserName] = useState('');
  const [loginPassword, setLoginPassword] = useState('');
  const [registerUserName, setRegisterUserName] = useState('');
  const [registerPassword, setRegisterPassword] = useState('');
  const [isLogin, setIsLogin] = useState(true);
  const [isForgotPassword, setIsForgotPassword] = useState(false);
  const [resetPasswordEmail, setResetPasswordEmail] = useState('');

  const handleLogin = () => {
    console.log('Kirjaudu', loginUserName, loginPassword);
  };

  const handleRegistration = () => {
    console.log('Rekisteröidy', registerUserName, registerPassword);
  };

  const switchForm = () => {
    setIsLogin(!isLogin);
    setIsForgotPassword(false);
  };

  const handleForgotPassword = () => {
    setIsForgotPassword(true);
  };

  const handleResetPassword = () => {
    console.log('Palauta salasana', resetPasswordEmail);
  };

  const handleCancelResetPassword = () => {
    setIsForgotPassword(false);
  };

  return (
    <div className="ruoka-container">
      <div className="container mt-3">
        <div id="responseContainer" className="mt-3"></div>
        <div className="header">
          {!isForgotPassword && <h2>{isLogin ? 'Kirjaudu sisään' : 'Rekisteröidy'}</h2>}
        </div>
        {isForgotPassword ? (
          <div className="forgot-password-modal">
            <h4>Palauta salasana</h4>
            <label htmlFor="resetPasswordEmail">Sähköposti</label>
            <input
              type="email"
              className="form-control"
              id="resetPasswordEmail"
              value={resetPasswordEmail}
              onChange={(e) => setResetPasswordEmail(e.target.value)}
              required
            />
            <br />
            <button className="btn btn-info" onClick={handleResetPassword}>
              Palauta salasana
            </button>
            <p onClick={handleCancelResetPassword} className="cancel-reset-password">
              Peruuta
            </p>
          </div>
        ) : (
          <>
            <div className="form-group">
              <label htmlFor={isLogin ? 'loginUserName' : 'registerUserName'}>
                Käyttäjätunnus
              </label>
              <input
                type="text"
                className="form-control"
                id={isLogin ? 'loginUserName' : 'registerUserName'}
                value={isLogin ? loginUserName : registerUserName}
                onChange={(e) =>
                  isLogin
                    ? setLoginUserName(e.target.value)
                    : setRegisterUserName(e.target.value)
                }
                required
              />
            </div>
            <br />
            <div className="form-group">
              <label htmlFor={isLogin ? 'loginPassword' : 'registerPassword'}>
                Salasana
              </label>
              <input
                type="password"
                className="form-control"
                id={isLogin ? 'loginPassword' : 'registerPassword'}
                value={isLogin ? loginPassword : registerPassword}
                onChange={(e) =>
                  isLogin
                    ? setLoginPassword(e.target.value)
                    : setRegisterPassword(e.target.value)
                }
                required
              />
            </div>
            <br />
            {isLogin && (
              <p onClick={handleForgotPassword} className="forgot-password">
                Unohditko salasanasi?
              </p>
            )}
            <div className="button-container">
              <button
                className="btn btn-info"
                onClick={isLogin ? handleLogin : handleRegistration}
              >
                {isLogin ? 'Kirjaudu' : 'Rekisteröidy'}
              </button>
              <p onClick={switchForm} className="cancel-reset-password red-text">
                {isLogin ? 'Etkö ole vielä käyttäjä?' : 'Peruuta'}
              </p>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Ruoka;
