import React from 'react';
import renderer from 'react-test-renderer';
import Header from './Header';
import HornedList from './HornedList';
import HornedItem from './HornedItem';
import App from './App';

it('renders correctly', () => {
  const tree = renderer
    .create(<Header/>)
    .toJSON();
  expect(tree).toMatchSnapshot();
});

it('renders correctly', () => {
  const tree = renderer
    .create(<HornedList />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});

it('renders correctly', () => {
  const tree = renderer
    .create(<HornedItem />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});

it('renders correctly', () => {
  const tree = renderer
    .create(<App />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});


