import React from 'react';
import { Card, CardContent } from '@material-ui/core';
import { Authenticated, Title } from 'react-admin';
import { withRouter } from 'react-router-dom';

const index = (props) => {
	return (
		<Authenticated location={props.location}>
			<Card>
				<Title title="Administrator Page" />
				<CardContent>Selamat Datang di Halaman Administrator...</CardContent>
			</Card>
		</Authenticated>
	);
};

export default withRouter(index);
