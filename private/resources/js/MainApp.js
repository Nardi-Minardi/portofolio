import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Header, Footer } from './components';
import {
	Catatan,
	Home,
	Kontak,
	Pengalaman,
	Proyek
} from './pages';


const MainApp  = () => {
    return (
        <>
		<BrowserRouter>
        <Header/>
		{/* <Home/> */}
		<Switch>
			<Route path="/" exact component={Home} />
			<Route path="/proyek" component={Proyek} />
			<Route path="/pengalaman" component={Pengalaman} />
			<Route path="/kontak" component={Kontak} />
			<Route path="/catatan" component={Catatan} />
		</Switch>
		<Footer/>
		</BrowserRouter>
    	</>
    );
}

export default MainApp ;


if (document.getElementById('mainApp')) {
    ReactDOM.render(<MainApp />, document.getElementById('mainApp'));
}


