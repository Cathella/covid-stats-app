import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Region from '../components/Region';

describe('Region card loads as it should', () => {
  const data = {
    date: '2022-01-07',
    name: 'Madrid',
    today_confirmed: 1206297,
    today_deaths: 16381,
    today_new_confirmed: 21445,
    today_new_deaths: 3,
    today_new_open_cases: 21442,
    today_new_recovered: 78,
    today_open_cases: 1189916,
    today_recovered: 0,
  };

  it('Component has the number of total recovered cases', () => {
    render(<BrowserRouter><Region data={data} /></BrowserRouter>);

    expect(screen.getByText(/0/i)).toBeInTheDocument();
  });

  it('Component has the number of total deaths', () => {
    render(<BrowserRouter><Region data={data} /></BrowserRouter>);

    expect(screen.getByText(/16381/i)).toBeInTheDocument();
  });

  it('Component has the number of total open cases', () => {
    render(<BrowserRouter><Region data={data} /></BrowserRouter>);

    expect(screen.getByText(/1189916/i)).toBeInTheDocument();
  });
});
