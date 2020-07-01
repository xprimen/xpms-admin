import React from 'react';
import {
	Create,
	SimpleForm,
	TextInput,
	DateInput,
	ReferenceInput,
	Datagrid,
	TextField,
	DateField,
	EditButton,
	SelectInput,
	email,
	required
} from 'react-admin';

const RegisteredMemberCreate = (props) => {
	return (
		<Create {...props} title="Tambah">
			<SimpleForm redirect="list">
				<ReferenceInput label="Acara" source="id_event" reference="event">
					<SelectInput optionText="event_name" validate={required()} />
				</ReferenceInput>
				<TextInput source="nama" label="Nama" validate={required()} />
				<TextInput source="alamat" label="Alamat" multiline />
				<TextInput source="hp" label="HP" />
				<TextInput source="email" label="Email" validate={email()} />
				<TextInput source="username_ig" label="Instagram" />
			</SimpleForm>
		</Create>
	);
};

export default RegisteredMemberCreate;
