import { View } from 'react-native';
import { Button } from 'react-native-paper';

import { log } from '../config/logging';

{/* <View className="flex flex-row justify-center absolute gap-3 bg-[#82CD47] border-r-2 w-72 h-10 py-9 px-5 border-solid border-8"> */ }
const ButtonPress = () => {
  return (
    <Button icon="camera" mode="contained" onPress={() => log.info("Pressed Get started")}>
      Get Started
    </Button>

  )
}

export default ButtonPress;