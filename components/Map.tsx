import MapView, { Marker, LatLng } from 'react-native-maps'
import { StyleSheet, Dimensions } from 'react-native'
import { inputPoints } from '../App'

interface PropsMap  {
    onLongPress: (event: any) => void
	points: inputPoints
	showPoints: boolean
}


export const Map = ({onLongPress,points,showPoints}: PropsMap) => {
	return(
		<MapView 
			style={styles.map}
			onLongPress={(event) => onLongPress(event.nativeEvent)}
		>
			{showPoints && points.map( (point,index) =>(
				<Marker 
					key={`${point.name}${index}`}
					coordinate={point.coordinate}
				/>
			))}
		</MapView>
	)
}

const styles = StyleSheet.create({
	map:{
		height: Dimensions.get('window').height - 150,
		width: Dimensions.get('window').width
	},
})