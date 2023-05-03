// Imports
import {NativeSyntheticEvent, TextInputChangeEventData} from 'react-native';

// Types
export type InputProps = {
  // Attrs
  placeholder: string;
  // Optional Attrs
  value?: string;
  hide?: boolean;
  onChange?: (e: NativeSyntheticEvent<TextInputChangeEventData>) => void;
}