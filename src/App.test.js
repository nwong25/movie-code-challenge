import React from 'react'
import App from './App';
import {shallow} from 'enzyme'

describe('<App />', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<App />)
  })
  describe('_showNavMenu', () => {
    beforeEach(() => {
      wrapper.setState({
        displayNavMenu: false
      })
      wrapper.instance()._showNavMenu()
    })
    it('should toggle the state of displayNavMenu', () => {
      expect(wrapper.state().displayNavMenu).toEqual(true)
    });
  });


  describe('Nav Menu', () => {
    describe('when nav menu is not display', () => {
      beforeEach(() => {
        wrapper.setState({
          displayNavMenu: false
        })
      })

      it('should render the hamburge menu-icon', () => {
        expect(wrapper.find('img').exists()).toEqual(true)
        expect(wrapper.find('span').exists()).toEqual(false)
      });
    });
    describe('when nav menu displayed', () => {
      beforeEach(() => {
        wrapper.setState({
          displayNavMenu: true
        })
      })

      it('should render the X icon', () => {
        expect(wrapper.find('img').exists()).toEqual(false)
        expect(wrapper.find('span').exists()).toEqual(true)
      });
    });

  });

  describe('when nav menu button clicks get clicked', () => {
    beforeEach(() => {
      wrapper.setState({
        displayNavMenu: false
      })
      jest.spyOn(wrapper.instance(),'_showNavMenu')
      wrapper.find('button').simulate('click')
    })
    it('should should call this_showNavMenu with current state', () => {
      expect(wrapper.instance()._showNavMenu).toHaveBeenCalledWith(false)
    });
  });

  it('should render a hidden skip content link', () => {
    expect(wrapper.find('a.hidden').exists()).toEqual(true)
  });

  it('should display the header title', () => {
    expect(wrapper.find('h1').text()).toEqual('Movie Search')
  });

  it('should display nav menu bar with 7 menu items', () => {
    expect(wrapper.find('NavBar').exists()).toEqual(true)
    expect(wrapper.find('NavBar').props('displayNavMenu')).toBeTruthy()
  });

});