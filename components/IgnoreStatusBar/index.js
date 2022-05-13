import { getStatusBarHeight } from 'react-native-status-bar-height';
import styled from 'styled-components'

export const IgnoreStatusBar = styled.View`
  width: 100%;
  height: ${getStatusBarHeight() + 'px'}
`;