import React from 'react';
import FilterLink from '../containers/FilterLink';
import * as todos from 'redux/actions';
console.warn(todos)

const { VisibilityFilters } = todos;

const Footer = () => (
  <p>
    Show: <FilterLink filter={VisibilityFilters.SHOW_ALL}>All</FilterLink>
    {', '}
    <FilterLink filter={VisibilityFilters.SHOW_ACTIVE}>Active</FilterLink>
    {', '}
    <FilterLink filter={VisibilityFilters.SHOW_COMPLETED}>Completed</FilterLink>
  </p>
)

export default Footer