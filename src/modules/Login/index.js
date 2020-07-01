import React from 'react';
import { MuiThemeProvider } from '@material-ui/core';

const index = (props) => {
	const submit = (e) => {
		e.preventDefault();
	};
	return (
		<MuiThemeProvider theme={props.theme}>
			<form onSubmit={submit} />
		</MuiThemeProvider>
	);
};

export default index;
