import { AppInsightsBoundary } from '@logto/app-insights/react';
import { MfaFactor } from '@logto/schemas';
import { Route, Routes, BrowserRouter } from 'react-router-dom';

import AppLayout from './Layout/AppLayout';
import AppBoundary from './Providers/AppBoundary';
import LoadingLayerProvider from './Providers/LoadingLayerProvider';
import PageContextProvider from './Providers/PageContextProvider';
import SettingsProvider from './Providers/SettingsProvider';
import SingleSignOnContextProvider from './Providers/SingleSignOnContextProvider';
import { singleSignOnPath } from './constants/env';
import Callback from './pages/Callback';
import Consent from './pages/Consent';
import Continue from './pages/Continue';
import ErrorPage from './pages/ErrorPage';
import ForgotPassword from './pages/ForgotPassword';
import MfaBinding from './pages/MfaBinding';
import BackupCodeBinding from './pages/MfaBinding/BackupCodeBinding';
import TotpBinding from './pages/MfaBinding/TotpBinding';
import WebAuthnBinding from './pages/MfaBinding/WebAuthnBinding';
import MfaVerification from './pages/MfaVerification';
import BackupCodeVerification from './pages/MfaVerification/BackupCodeVerification';
import TotpVerification from './pages/MfaVerification/TotpVerification';
import WebAuthnVerification from './pages/MfaVerification/WebAuthnVerification';
import Register from './pages/Register';
import RegisterPassword from './pages/RegisterPassword';
import ResetPassword from './pages/ResetPassword';
import SignIn from './pages/SignIn';
import SignInPassword from './pages/SignInPassword';
import SingleSignOnConnectors from './pages/SingleSignOnConnectors';
import SingleSignOnEmail from './pages/SingleSignOnEmail';
import SocialLanding from './pages/SocialLanding';
import SocialLinkAccount from './pages/SocialLinkAccount';
import SocialSignIn from './pages/SocialSignInCallback';
import Springboard from './pages/Springboard';
import VerificationCode from './pages/VerificationCode';
import { UserMfaFlow } from './types';
import { handleSearchParametersData } from './utils/search-parameters';

import './scss/normalized.scss';

handleSearchParametersData();

const App = () => {
  return (
    <BrowserRouter>
      <PageContextProvider>
        <SettingsProvider>
          <SingleSignOnContextProvider>
            <AppBoundary>
              <AppInsightsBoundary cloudRole="ui">
                <Routes>
                  <Route path="consent" element={<Consent />} />
                  <Route element={<AppLayout />}>
                    <Route
                      path="unknown-session"
                      element={<ErrorPage message="error.invalid_session" />}
                    />
                    <Route path="springboard" element={<Springboard />} />

                    <Route element={<LoadingLayerProvider />}>
                      {/* Sign-in */}
                      <Route path="sign-in">
                        <Route index element={<SignIn />} />
                        <Route path="password" element={<SignInPassword />} />
                        <Route path="social/:connectorId" element={<SocialSignIn />} />
                      </Route>

                      {/* Register */}
                      <Route path="register">
                        <Route index element={<Register />} />
                        <Route path="password" element={<RegisterPassword />} />
                      </Route>

                      {/* Forgot password */}
                      <Route path="forgot-password">
                        <Route index element={<ForgotPassword />} />
                        <Route path="reset" element={<ResetPassword />} />
                      </Route>

                      {/* Passwordless verification code */}
                      <Route path=":flow/verification-code" element={<VerificationCode />} />

                      {/* Mfa binding */}
                      <Route path={UserMfaFlow.MfaBinding}>
                        <Route index element={<MfaBinding />} />
                        <Route path={MfaFactor.TOTP} element={<TotpBinding />} />
                        <Route path={MfaFactor.WebAuthn} element={<WebAuthnBinding />} />
                        <Route path={MfaFactor.BackupCode} element={<BackupCodeBinding />} />
                      </Route>

                      {/* Mfa verification */}
                      <Route path={UserMfaFlow.MfaVerification}>
                        <Route index element={<MfaVerification />} />
                        <Route path={MfaFactor.TOTP} element={<TotpVerification />} />
                        <Route path={MfaFactor.WebAuthn} element={<WebAuthnVerification />} />
                        <Route path={MfaFactor.BackupCode} element={<BackupCodeVerification />} />
                      </Route>

                      {/* Continue set up missing profile */}
                      <Route path="continue">
                        <Route path=":method" element={<Continue />} />
                      </Route>

                      {/* Social sign-in pages */}
                      <Route path="social">
                        <Route path="link/:connectorId" element={<SocialLinkAccount />} />
                        <Route path="landing/:connectorId" element={<SocialLanding />} />
                      </Route>
                      <Route path="callback/:connectorId" element={<Callback />} />
                    </Route>

                    {/* Single sign-on */}
                    <Route path={singleSignOnPath} element={<LoadingLayerProvider />}>
                      <Route path="email" element={<SingleSignOnEmail />} />
                      <Route path="connectors" element={<SingleSignOnConnectors />} />
                    </Route>

                    <Route path="*" element={<ErrorPage />} />
                  </Route>
                </Routes>
              </AppInsightsBoundary>
            </AppBoundary>
          </SingleSignOnContextProvider>
        </SettingsProvider>
      </PageContextProvider>
    </BrowserRouter>
  );
};

export default App;
