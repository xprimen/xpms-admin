import React, { cloneElement } from 'react';
import {
	Pagination,
	List,
	Datagrid,
	TextField,
	ReferenceField,
	Filter,
	TextInput,
	ReferenceInput,
	SelectInput,
	TopToolbar,
	CreateButton,
	ExportButton,
	sanitizeListRestProps,
	Button
} from 'react-admin';
import IconEvent from '@material-ui/icons/Event';

const Setfilter = (props) => (
	<Filter {...props}>
		<TextInput label="Nama" source="nama" />
		<TextInput label="Alamat" source="alamat" />
		<ReferenceInput label="Acara" source="id_event" reference="event" sortBy="id_event">
			<SelectInput optionText="event_name" />
		</ReferenceInput>
		{/* <BooleanInput source="status" alwaysOn /> */}
	</Filter>
);

const ListActions = ({
	currentSort,
	className,
	resource,
	filters,
	displayedFilters,
	exporter, // you can hide ExportButton if exporter = (null || false)
	filterValues,
	permanentFilter,
	hasCreate, // you can hide CreateButton if hasCreate = false
	basePath,
	selectedIds,
	onUnselectItems,
	showFilter,
	maxResults,
	total,
	...rest
}) => (
	<TopToolbar className={className} {...sanitizeListRestProps(rest)}>
		{filters &&
			cloneElement(filters, {
				resource,
				showFilter,
				displayedFilters,
				filterValues,
				context: 'button'
			})}
		<CreateButton basePath={basePath} />
		<ExportButton
			disabled={total === 0}
			resource={resource}
			sort={currentSort}
			filter={{ ...filterValues, ...permanentFilter }}
			exporter={exporter}
			maxResults={maxResults}
		/>
		{/* Add your custom actions */}
		<Button
			onClick={() => {
				alert('Your custom action');
			}}
			label="Show calendar"
		>
			<IconEvent />
		</Button>
	</TopToolbar>
);

ListActions.defaultProps = {
	selectedIds: [],
	onUnselectItems: () => null
};

const RegisteredMemberList = (props) => {
	const pagination = (props) => (
		<Pagination
			rowsPerPageOptions={[
				2,
				10,
				50,
				200,
				500,
				1000,
				1500,
				2000,
				3500,
				5000,
				7500,
				10000,
				15000,
				50000,
				100000,
				500000,
				1000000
			]}
			{...props}
		/>
	);

	return (
		<List
			{...props}
			pagination={pagination()}
			filters={<Setfilter />}
			title="Pendaftar"
			sort={{ field: 'created_at', order: 'DESC' }}
			filterDevalutValue={{ status: true }}
			bulkActionButtons={false}
		>
			<Datagrid>
				{/* <TextField source="id_rm" /> */}
				<ReferenceField source="id_event" reference="event" label="Acara">
					<TextField source="event_name" />
				</ReferenceField>
				<TextField source="nama" label="Nama" />
				<TextField source="alamat" />
				<TextField source="hp" />
				<TextField source="email" />
				<TextField source="username_ig" />
				<TextField source="device" />
			</Datagrid>
		</List>
	);
};

export default RegisteredMemberList;
