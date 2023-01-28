import { StyleSheet } from 'react-native';
import { Button } from '@rneui/themed';

import { log } from '../config/logging';

const ButtonPress = () => {
  return (
    <Button title="Get Started" onPress={() => log.info("Pressed Get started")} />
  )
}
export default ButtonPress;

export const styles = StyleSheet.create({
  button: {
    flex: 1,
    //flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 9,
    width: 284,
    height: 40,
    top: 690,
    backgroundColor: '#82CD47',
    /* boxShadow: '0 2 4 rgba(0, 0, 0, 0.2)', */
    borderRadius: 20,
  },
});