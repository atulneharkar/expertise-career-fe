import 'whatwg-fetch';

import { setHeader } from '../_helpers';
import { SERVER_URL } from '../_constants';

export const commonService = {
    getCategory,
    getCourseType,
    getUsers
};

function getCategory() {
  return (
    [{
      value: 'UX',
      label: 'UX'
    },
    {
      value: 'VD',
      label: 'VD'
    },
    {
      value: 'Front End',
      label: 'Front End'
    },
    {
      value: 'Back End',
      label: 'Back End'
    },
    {
      value: 'General',
      label: 'General'
    }]
  );
}

function getCourseType() {
  return (
    [{
      value: 'Webinar',
      label: 'Webinar'
    },
    {
      value: 'Package',
      label: 'Package'
    }]
  );
}

function getUsers() {
  return fetch(`${SERVER_URL}/user/list/all`, setHeader('GET', null, true)).then((response) => response.json());
}
