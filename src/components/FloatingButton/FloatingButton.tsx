import React from 'react'
import { Text, TouchableOpacity } from 'react-native'
import styles from './styles'

interface FloatingButtonProps {
  label?: string
  icon?: JSX.Element
  onPress: () => void
}

/**
 * The FloatingButton component is a button with an optional label and icon that triggers an onPress
 * event.
 * @param {FloatingButtonProps}  - - `label`: A string representing the label text for the button.
 * @returns The `FloatingButton` component is returning a `TouchableOpacity` component with the
 * following structure:
 */
const FloatingButton = ({
  label,
  icon,
  onPress,
}: FloatingButtonProps) => {
  return (
    <TouchableOpacity onPress={onPress} style={[styles.container]}>
      {icon}
      {label && <Text style={[styles.label]}>{label}</Text>}
    </TouchableOpacity>
  )
}

export default FloatingButton
