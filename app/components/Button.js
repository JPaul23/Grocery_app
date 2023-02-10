import { StyleSheet } from 'react-native';
import { Pressable, Text } from 'react-native';

import { log } from '../config/logging';
import global from '../config/global';

export const BackButton = ({ color }) => (
  {/* <Icon
    name="arrow-left"
    size={25}
    color={color}

  /> */}
);

const ButtonPress = ({ title, navigation, page, outStyle }) => {

  return (
    <Pressable style={[styles.button, outStyle]} onPress={() => {
      navigation.navigate(`${page}`);
      log.info(`Pressed ${title}`);
    }
    }>
      <Text style={styles.textButton}>{title}</Text>
    </Pressable>
  )
};
export default ButtonPress;

export const styles = StyleSheet.create({
  button: {
    //flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 9,
    width: 284,
    height: 40,
    backgroundColor: global.primaryBtnColor,
    borderRadius: global.buttonRadius,
  },
  textButton: {
    color: global.white,
    textAlign: 'center',
    fontSize: global.fontSize
  },
});
