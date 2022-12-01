import { View, Text, TextInput, StyleSheet, TextInputProps } from 'react-native'
import { spacing } from '../themes'

interface PropsInput extends TextInputProps{
    title: string
}
export const Input = ({title, ...res}: PropsInput) => {
	return(
		<View style={styles.wrapper}>
			<Text style={styles.title}>{title}</Text>
			<TextInput {...res}/>
		</View>
	)
}

const styles = StyleSheet.create({
	wrapper:{
		height: 60,
		marginBottom: 10,  
		
	},
	title: {
		fontWeight: '500',
		marginBottom: spacing.tiny
	}
})