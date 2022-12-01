import MapView from 'react-native-maps'
import { StyleSheet, Dimensions } from 'react-native'

interface PropsMap  {
    onLongPress: (event: any) => void
}


export const Map = ({onLongPress}: PropsMap) => {
	return(
		<MapView 
			style={styles.map}
			onLongPress={(event) => onLongPress(event.nativeEvent)}
		/>
	)
}

const styles = StyleSheet.create({
	map:{
		height: Dimensions.get('window').height - 150,
		width: Dimensions.get('window').width
	},
})