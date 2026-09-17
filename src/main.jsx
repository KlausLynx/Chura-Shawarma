import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx' 
import * as Sentry from "@sentry/react";
import { ErrorBoundary } from 'react-error-boundary';

Sentry.init({
  dsn: "https://219709bc28e00f303492cb8995aacdc4@o4511802656227328.ingest.de.sentry.io/4512084026720336",
  dataCollection: {
    enabled: true,
    useOnlyFirstPartyHosts: true,
  },
  integrations: [Sentry.browserTracingIntegration(), Sentry.replayIntegration()],
  tracesSampleRate: 1.0,
  replaysSessionSampleRate: 0.1,
  replaysOnErrorSampleRate: 1.0,
})

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ErrorBoundary 
    onError={(error) => Sentry.captureException(error)}
    fallbackRender={() => <p>Something went wrong, Please reload the page</p>}>
      <App />  
    </ErrorBoundary>
  </StrictMode>,
)