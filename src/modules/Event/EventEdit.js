import React from 'react';
import {
	Edit,
	SimpleForm,
	TextInput,
	DateInput,
	ReferenceField,
	ReferenceManyField,
	Datagrid,
	TextField,
	EditButton,
	ImageInput,
	ImageField,
	BooleanInput
} from 'react-admin';

const EventEdit = (props) => {
	return (
		<Edit {...props} title="Edit">
			<SimpleForm>
				<TextInput source="event_name" label="Nama Acara" />
				<DateInput source="event_start" label="Tanggal Mulai Acara" options={{ format: 'YYYY-MM-DD' }} />
				<DateInput source="end_start" label="Tanggal Berakhir Acara" options={{ format: 'YYYY-MM-DD' }} />
				<ImageInput source="flyer" label="Flyer" accept="image/*" placeholder={<p>Drop your file here</p>}>
					<ImageField source="src" title="Flyer" />
				</ImageInput>
				<ImageInput
					source="background"
					label="Background"
					accept="image/*"
					placeholder={<p>Drop your file here</p>}
				>
					<ImageField source="src" title="Flyer" />
				</ImageInput>
				{/* <TextInput source="background_setting" label="Bg Setting" multiline /> */}
				{/* <BooleanInput label="Status" source="status" /> */}
			</SimpleForm>
		</Edit>
	);
};

export default EventEdit;
