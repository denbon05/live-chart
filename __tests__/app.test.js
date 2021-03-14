// @ts-check

import '@testing-library/jest-dom';
import fs from 'fs';
import path from 'path';
import { screen } from '@testing-library/dom';
// import userEvent from '@testing-library/user-event';
import nock from 'nock';
import axios from 'axios';
import app from '../src/app';

axios.defaults.adapter = require('axios/lib/adapters/http');

nock.disableNetConnect();
beforeEach(async () => {
  const pathToHtml = path.resolve(__dirname, '..', 'index.html');
  const html = fs.readFileSync(pathToHtml, 'utf-8');
  document.body.innerHTML = html;
  app();
});

test('init test', () => {
  expect(screen.getByTestId('update')).toBeInTheDocument();
});
