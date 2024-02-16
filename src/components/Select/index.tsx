import { StyleSheet } from 'react-native';
import { useTheme } from 'styled-components';
import { Dropdown,  } from 'react-native-element-dropdown';
import { CaretDown, X } from 'phosphor-react-native';

import { Container, ErrorMessage, Label, ResetValueButton } from './styles';
import { RFValue } from 'react-native-responsive-fontsize';

export type Data = {
  label: string | null,
  value: string | null
}

export type SelectRoot = {
  data: Array<Data>,
  label: string;
  placeholder: string;
  hide: boolean;
  error?: string | undefined;
}

export type SelectProps = SelectRoot & {
  value: Data;
  onChange: (item : Data) => void;
}

export function Select({ data, label, placeholder, hide, error, value, onChange }: SelectProps) {

  const { COLORS, FONT_FAMILY, FONT_SIZE } = useTheme()

  function resetValue() {
    onChange({ value: null, label: null })
  }

  if(!hide) {
    return (
      <Container>
        <Label>{label}</Label>
        <Dropdown 
            style={[styles.dropdown, { borderColor: COLORS.GRAY_400 }]}
            placeholderStyle={{ fontSize: RFValue(FONT_SIZE.MD), color: COLORS.GRAY_900 }}
            selectedTextStyle={{ fontSize: RFValue(FONT_SIZE.MD), color: COLORS.GRAY_800 }}
            fontFamily={FONT_FAMILY.REGULAR}
            containerStyle={{ backgroundColor: COLORS.GRAY_200}}
            itemTextStyle={{ color: COLORS.GRAY_700, paddingHorizontal: 20 }}
            showsVerticalScrollIndicator={false}
            onChangeText={console.log}
            data={data}
            maxHeight={200}
            labelField="label"
            valueField="value"
            placeholder={placeholder}
            value={value}
            activeColor={COLORS.GRAY_300}
            onChange={(item: Data) => onChange(item)}
            renderRightIcon={() => (
               value && value.label ? (
                <ResetValueButton onPress={() => resetValue()} activeOpacity={.7}>
                  <X 
                    color={COLORS.BLACK}
                    size={16}
                    weight='bold'
                  />
                </ResetValueButton>
               ) : (
                 <CaretDown
                   color={COLORS.BLACK}
                   size={16}
                 />
               )
            )}
        />
         {error && <ErrorMessage>{error}</ErrorMessage>}
      </Container>
    );
  }

  return null;

}

const styles = StyleSheet.create({
  dropdown: {
    borderWidth: 1,
    borderRadius: 6,
    padding: 10,
  },
});