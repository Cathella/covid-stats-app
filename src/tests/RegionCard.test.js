import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import RegionCard from '../components/RegionCard';
import data from './__mocks__/apimock';

describe('Region card loads as it should', () => {
  it('Should be rendering 27 regions', () => {
    render(<BrowserRouter><RegionCard data={data} /></BrowserRouter>);

    expect(data.length).toBe(27);
  });

  it('Component has the region name on it', () => {
    render(<BrowserRouter><RegionCard data={data} /></BrowserRouter>);

    expect(screen.getByText(/Alagoas/i)).toBeInTheDocument();
  });

  it('Component should render the number Santa Catarina cases 14', () => {
    render(<BrowserRouter><RegionCard data={data} /></BrowserRouter>);

    expect(screen.getByText(/137/i)).toBeInTheDocument();
  });
});
