import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Login from "./pages/login";
import SignIn from "./pages/signin";

const App: React.FC = () => (
	<BrowserRouter>
		<Routes>
			<Route path="/login" element={<Login />} />
			<Route path="/signin" element={<SignIn/>} />
			<Route path="/*" element={<Login />} />
		</Routes>
	</BrowserRouter>
);

export default App;
