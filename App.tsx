import React, { useState } from 'react'
import { StyleSheet, Text, View, Button} from 'react-native'
import MapView from 'react-native-maps'
import { Map, Modals, Panel, Input, List } from './components'
import { SafeAreaView } from 'react-native-safe-area-context'
type point = {
	latitude: number
	longitude: number
}

export type inputPoints = {
	coordinate: point,
	name: string
}[]
interface StateApp  {
	inputPoints: inputPoints
	namePoint: string
	tempPoint: point 
	modal: boolean
	filter: string
	visibilityPoints: boolean
}
const DEFAULT_POINT: point = {
	latitude: 0,
	longitude: 0
}
export default function App() {
	const [points,setPoints]= useState<StateApp['inputPoints']>([])
	const [temPoints,setTempPoints]= useState<StateApp['tempPoint']>(DEFAULT_POINT)
	const [namePoint,setNamePoint]= useState<StateApp['namePoint']>("")
	const [filterVisibility,setFilterVisibility]= useState<StateApp['filter']>("") //new_point or all_point
	const [toggleModal,setToggleModal]= useState<StateApp['modal']>(false)
	const [visibilityPoints,setVisibilityPoints]= useState<StateApp['visibilityPoints']>(true)
	

	function handleLongPress(point: any) {
		setFilterVisibility("new_point")
		setTempPoints(point.coordinate)
		setToggleModal(true)
	}
	const handleSubmit = () => {
		const newPoints = [...points, {coordinate: temPoints, name: namePoint}]
		setPoints(newPoints)
		setToggleModal(false)

	}
	const handleList = () => {
		setFilterVisibility("all_point")
		setToggleModal(true)
	}
	const handClose = () => {
		setToggleModal(false)
	}
	const handleShowPoints = () => {
		setVisibilityPoints(!visibilityPoints)
	}
	return (
		<SafeAreaView
			edges={['top']}
			style={styles.containerApp}
		>
			<View style={styles.container}>
				<Map 
					onLongPress={handleLongPress}
					points={points}
					showPoints={visibilityPoints}
				/>
				<Panel
					titleLeft='List'
					onLeftPress={handleList}
					titleRight="Show / Hide"
					onRightPress={handleShowPoints}

				/>
				<Modals 
					visibility={toggleModal}
				>
					{filterVisibility === "new_point" ?
						<View style={styles.form}>
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
						</View>
						:
						<List 
							points={points}
							handleClose={handClose}
						/>
					}
				</Modals>
			</View>
		</SafeAreaView>
	)
}

const styles = StyleSheet.create({
	containerApp:{
		flex: 1,
		backgroundColor: '#fff',
	},
	container: {
		flex: 1,
		backgroundColor: '#fff',
		// alignItems: 'center',
	
	},
	input:{
		backgroundColor: "#cccc",
		flex: 1,
		padding: 5,
		
	},
	form:{
		padding: 20,
	}
	
})
