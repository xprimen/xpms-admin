import React from 'react';
import {
	Edit,
	SimpleForm,
	TextInput,
	DateInput,
	ReferenceInput,
	ReferenceManyField,
	Datagrid,
	TextField,
	DateField,
	EditButton,
	SelectInput,
	email,
	required
} from 'react-admin';

/* const validating = (values) => {
	const errors = {};
	if (!values.nama) {
		errors.nama = [ 'Nama Wajib Diisi' ];
	}

	return errors;
}; */

const RegisteredMemberEdit = (props) => {
	return (
		<Edit {...props} title="Edit Pendaftar">
			<SimpleForm redirect="list">
				<ReferenceInput label="Acara" source="id_event" reference="event">
					<SelectInput optionText="event_name" />
				</ReferenceInput>
				<TextInput source="nama" label="Nama" validate={required()} />
				<TextInput source="alamat" label="Alamat" multiline />
				<TextInput source="hp" label="HP" />
				<TextInput source="email" label="Email" validate={email()} />
				<TextInput source="username_ig" label="Instagram" />
				{/* <TextInput source="device" label="Device" /> */}
			</SimpleForm>
		</Edit>
	);
};

export default RegisteredMemberEdit;
