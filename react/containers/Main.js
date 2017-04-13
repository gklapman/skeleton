import React from 'react';
import Footer from '../components/Footer'


 const Main = ({children}) => (
	<div id="main" className="container-fluid">
		{children}
		<Footer />
	</div>
);

 export default Main;