import React from 'react'
import {shallow} from 'enzyme'
import NavBar from "./NavBar";
import { uid } from 'uid'

describe('<NavBar />', () => {
  let wrapper, props
  beforeEach(() => {
    props={
      menuItems: [
        {
          text:'Menu 1',
          id: uid()
        },
        {
          text:'Menu 2',
          id: uid()
        },
        {
          text:'Menu 3',
          id: uid()
        }
      ],
      displayNavMenu: false
    }
    wrapper = shallow (<NavBar {...props}/>)
  })

  describe('when there are menu items', () => {
    it('should render the menu items in the nav bar', () => {
      expect(wrapper.find('.menu-link').length).toEqual(3)
      expect(wrapper.find('.menu-link').at(0).text()).toEqual('Menu 1')
      expect(wrapper.find('.menu-link').at(1).text()).toEqual('Menu 2')
      expect(wrapper.find('.menu-link').at(2).text()).toEqual('Menu 3')
    });
  });

  describe('when displayNavMenu is false', () => {
    it('should not have showMenu class', () => {
      expect(wrapper.find('nav').hasClass('showMenu')).toEqual(false)
    });
  });

  describe('when displayNavMenu is true', () => {
    beforeEach(() => {
      wrapper.setProps({
        displayNavMenu: true
      })
    })

    it('should display menu', () => {
      expect(wrapper.find('nav').hasClass('showMenu')).toEqual(true)
    });
  });

});