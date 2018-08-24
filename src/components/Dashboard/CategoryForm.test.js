import React from 'react';
import CategoryForm from './CategoryForm';
import { mount } from 'enzyme';
import toJSON from 'enzyme-to-json';

describe('Category Form', () => {

  it('renders add if no category prop', () => {
    const handleComplete = jest.fn();
    const promise = Promise.resolve();
    handleComplete.mockReturnValueOnce(promise);

    const wrapper = mount(<CategoryForm onComplete={handleComplete}/>);
    expect(toJSON(wrapper)).toMatchSnapshot();
    
    const category = {
      name: 'rent',
      budget: 1200
    };
  
    wrapper.find('input[name="name"]').simulate('change', {
      target: { 
        name: 'name',
        value: category.name 
      }
    });

    wrapper.find('input[name="budget"]').simulate('change', {
      target: { 
        name: 'budget',
        value: category.budget 
      }
    });

    wrapper.find('button').simulate('submit');

    const calls = handleComplete.mock.calls;
    expect(calls.length).toBe(1);
    expect(calls[0][0]).toEqual(category);

    expect(toJSON(wrapper)).toMatchSnapshot();

    return promise
      .then(() => {
        wrapper.update();
        expect(toJSON(wrapper)).toMatchSnapshot();
      });
  
  });
});