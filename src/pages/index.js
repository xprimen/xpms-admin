import React from 'react';
import { Link } from 'gatsby';

import Layout from '../components/layout';
import Image from '../components/image';
import SEO from '../components/seo';
import { Admin, Resource } from 'react-admin';
import jsonApiClient from 'ra-jsonapi-client';
import UserIcon from '@material-ui/icons/People';
import { createMuiTheme } from '@material-ui/core';
import config from '../config';
import Dashboard from '../modules/Dashboard';
import Login from '../modules/Login';
import { RegisteredMemberList, RegisteredMemberEdit } from '../modules/RegisteredMember';
import indonesianMessages from 'ra-language-indonesian';
import polyglotI18nProvider from 'ra-i18n-polyglot';
import { EventList, EventEdit } from '../modules/Event';
import MuiThemeXPrimen from '../utils/MuiThemeXPrimen';

const settings = {
	total: 'totalRows',
	headers: {
		// Authorization: 'API-KEY',
		Accept: 'application/json; charset=utf-8',
		'Content-Type': 'application/json; charset=utf-8'
		// Accept: 'application/vnd.api+json; charset=utf-8',
		// 'Content-Type': 'application/vnd.api+json; charset=utf-8'
	},
	updateMethod: 'PUT'
};
const dataProvider = jsonApiClient(config.base_url_api, settings);

const messages = {
	id: indonesianMessages
};

const IndexPage = () => (
	<Admin dashboard={Dashboard} theme={MuiThemeXPrimen} dataProvider={dataProvider}>
		<Resource
			name="registered-member"
			list={RegisteredMemberList}
			icon={UserIcon}
			options={{ label: 'Pendaftar' }}
			// create={RegisteredMemberCreate}
			edit={RegisteredMemberEdit}
		/>
		<Resource
			name="event"
			list={EventList}
			options={{
				label: 'Acara'
			}}
			edit={EventEdit}
		/>
		{/* <Resource name="users" list={ListGuesser} /> */}
	</Admin>
);

export default IndexPage;
