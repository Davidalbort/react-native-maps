import { StyleSheet, Dimensions, Modal, View, Text } from 'react-native'

interface PropsModals {
    children: React.ReactNode
    visibility: boolean
}
export const Modals = ({children,visibility}:PropsModals) => {
	return(
		<View style={styles.container}>
			<Modal
				animationType='slide'
				transparent={true}
				visible={visibility}
			>
				<View style={styles.center}>
					<View style={styles.modalView}>
						{children}
					</View>
				</View>

			</Modal>

		</View>
	)
}

const styles = StyleSheet.create({
	container:{
		flex: 1,
		justifyContent: 'flex-start'
		
	},
	center:{
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: 'rgba(0,0,0,0.3)',
		alignSelf: "stretch"
	},
	modalView: {
		backgroundColor: "#fff",
		borderRadius: 4,
		shadowColor: "#000",
		shadowOffset:{
			width: 0,
			height:3,
		},
		width: Dimensions.get('window').width - 150
	},
})