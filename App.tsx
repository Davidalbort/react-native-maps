import React, { useState } from 'react'
import { StyleSheet, Text, View, Button} from 'react-native'
import MapView from 'react-native-maps'
import { Map, Modals, Panel, Input } from './components'
type point = {
	latitude?: number
	longitude?: number
}

type inputPoints = {
	coordinate: point,
	name: string
}[]
interface StateApp  {
	inputPoints: inputPoints
	namePoint: string
	tempPoint: point 
	modal: boolean
}

export default function App() {
	const [points,setPoints]= useState<StateApp['inputPoints']>([])
	const [temPoints,setTempPoints]= useState<StateApp['tempPoint']>({})
	const [namePoint,setNamePoint]= useState<StateApp['namePoint']>("")
	const [toggleModal,setToggleModal]= useState<StateApp['modal']>(false)
	

	function handleLongPress(point: any) {
		setTempPoints(point.coordinate)
		setToggleModal(true)
	}
	const handleSubmit = () => {
		const newPoints = [...points, {coordinate: temPoints, name: namePoint}]
		setPoints(newPoints)
		setToggleModal(false)

	}
	console.log(points)
	return (
		<View style={styles.container}>
			<Map 
				onLongPress={handleLongPress}
			/>
			<Panel />
			<Modals 
				visibility={toggleModal}
			>
				<Input 
					title="Name"
					placeholder="Write name point"
					onChangeText={(name) => setNamePoint(name)}
					style={styles.input}
				/>
				<Button 
					title="Add"
					onPress={handleSubmit}
				/>
			</Modals>
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'flex-start',
	},
	input:{
		backgroundColor: "#cccc",
		flex: 1,
		padding: 5,
		
	},
	
})
