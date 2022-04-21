import React, {useEffect} from "react";
import { BrowserRouter } from "react-router-dom";
import  AppContent from "components/AppContent";

const App = () => {
	useEffect(() => {;
	}, [])
	return (
		<BrowserRouter>
			<AppContent />
		</BrowserRouter>
	);
};

export default App;
