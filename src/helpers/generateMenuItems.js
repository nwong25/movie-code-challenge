import {uid} from "uid";

const generateMenuItems = ({numberOfItems}) => {
  let menuItemsList = []
  for(let i = 1; i <= numberOfItems; i++){
    menuItemsList.push({
      text: `Menu ${i}`,
      id: uid()
    })
  }
  return menuItemsList
}

export default generateMenuItems