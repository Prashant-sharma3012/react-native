import React from 'react';
import { HeaderButton } from 'react-navigation-header-buttons';
import IconSet from 'react-native-vector-icons/MaterialIcons';

const HeaderBtn = (props) => {
  return (
    <HeaderButton
      {...props}
      IconComponent={IconSet}
      iconSize={23}
    />
  )
}


export default HeaderBtn;