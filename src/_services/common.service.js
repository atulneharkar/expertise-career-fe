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
      value: 'ux',
      label: 'UX'
    },
    {
      value: 'vd',
      label: 'VD'
    },
    {
      value: 'fe',
      label: 'FE'
    }]
  );
}

function getCourseType() {
  return (
    [{
      value: 'webinar',
      label: 'Webinar'
    },
    {
      value: 'package',
      label: 'Package'
    }]
  );
}

function getUsers() {
  //return fetch(`${SERVER_URL}/user/list/all`, setHeader('GET', null, true)).then((response) => response.json());
  return (
    [{
      value: 'webinar',
      label: 'Webinar'
    },
    {
      value: 'package',
      label: 'Package'
    }]
  );
}
