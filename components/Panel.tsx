import { StyleSheet, Button, View } from 'react-native'

interface PropsPanel {
	onLeftPress : () => void
	onRightPress : () => void
	titleLeft : string
	titleRight : string

}

export const Panel = ({onLeftPress,titleLeft,titleRight, onRightPress}: PropsPanel) => {
	return(
		<View style={styles.panel}>
			<Button 
				title={titleLeft}
				onPress={onLeftPress}
			/>
			<Button 
				title={titleRight}
				onPress={onRightPress}
			/>
		</View>
	)
}

const styles = StyleSheet.create({
	panel:{
		flex: 1,
		flexDirection: 'row',
		justifyContent: 'center',
		alignItems: 'center'
	}
})