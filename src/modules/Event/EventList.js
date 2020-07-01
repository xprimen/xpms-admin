import React from 'react';
import { Pagination, List, Datagrid, TextField, DateField, BooleanField } from 'react-admin';

const EventList = (props) => {
	const pagination = (props) => <Pagination rowsPerPageOptions={[ 10, 25, 50, 100 ]} {...props} />;

	return (
		<List {...props} pagination={pagination()} title="Acara" sort={{ field: 'status', order: 'DESC' }}>
			<Datagrid rowClick="edit">
				{/* <TextField source="id_event" /> */}
				<TextField source="event_name" />
				<DateField source="start_event" label="Tanggal Mulai" textAlign="right" />
				<DateField source="end_event" label="Tanggal Akhir" textAlign="right" />
				<TextField source="flyer" label="Flyer" textAlign="center" />
				<TextField source="background" label="Background" textAlign="center" />
				{/* <TextField source="background_setting" label="Pengaturan Background" textAlign="center" /> */}
				<BooleanField source="status" />
			</Datagrid>
		</List>
	);
};

export default EventList;
