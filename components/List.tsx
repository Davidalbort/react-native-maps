import { Button, FlatList, Text, View, StyleSheet, Dimensions } from "react-native"
import { inputPoints } from "../App"

interface PropsList {
    points: inputPoints
    handleClose: () => void
}

export const List = ({points,handleClose}: PropsList) => {
	return(
		<>
			<View style={styles.list}>
				<FlatList 
					data={points.map( item => item.name)}
					renderItem={({item}) => <View style={styles.item}><Text>{item}</Text></View>}
					keyExtractor={ item => item}
				/>
			</View>
			<View>
				<Button 
					title="Close"
					onPress={handleClose}
				/>
			</View>
		</>
	)
}

const styles = StyleSheet.create( {
	list: {
		height: Dimensions.get("window").height -250
	},
    item: {
        padding: 5,
        borderBottomColor: "#cccc",
        borderBottomWidth: 1,
    }
})