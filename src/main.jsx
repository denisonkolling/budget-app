import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BudgetsProvider } from './contexts/BudgetsContexts.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
	<BudgetsProvider>
		<React.StrictMode>
			<App />
		</React.StrictMode>
	</BudgetsProvider>
);
