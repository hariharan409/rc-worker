import React, { useState } from 'react';
import { Controller } from 'react-hook-form';
import { TouchableOpacity, StyleSheet } from 'react-native';
import { TextInput, Text, PaperProvider, DefaultTheme } from 'react-native-paper';
import { DatePickerModal } from 'react-native-paper-dates';
import moment from 'moment-timezone';
import ShowError from '@/components/ShowError';

/**
 * A reusable date picker component integrated with react-hook-form.
 * Wrap your app with PaperProvider and SafeAreaProvider once at the root.
 */
const EpicDatePicker = ({ name, control, label, error }) => {
  const [open, setOpen] = useState(false);

  // Customize the theme
  const customTheme = {
    ...DefaultTheme,
    colors: {...DefaultTheme.colors,onPrimary: "white",primary: 'blue',text: 'black',disabled: '#888'},
};

  return (
    <>
        <Controller
        control={control}
        rules={{ required: true }}
        name={name}
        render={({ field: { onChange, value } }) => (
            <PaperProvider theme={customTheme}>
                <Text style={styles.label} numberOfLines={1}>{label}</Text>
                <TouchableOpacity onPress={() => setOpen(true)}>
                    <TextInput
                        mode="outlined"
                        value={value ? moment(value).format("DD-MM-YYYY") : ""}
                        editable={false}
                        style={styles.input}
                        right={<TextInput.Icon style={{ borderColor: "rgba(0,0,0,0.1)", borderRadius: "5px", borderWidth: "1px" }} name="calender" icon="calendar" onPress={() => setOpen(true)}  />}
                    />
                </TouchableOpacity>
                <DatePickerModal
                    locale="en"
                    mode="single"
                    visible={open}
                    date={value || new Date()}
                    onConfirm={({ date }) => {
                        onChange(date);
                        setOpen(false);
                    }}
                    onDismiss={() => setOpen(false)}
                />
            </PaperProvider>
        )}
        />
        {error && <ShowError errorMessage="This is required" />}
    </>
  );
};

const styles = StyleSheet.create({
  label: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 4,
    marginTop: 20,
    textTransform: "capitalize",
    overflow: "hidden"
  },
  input: {
    marginTop: 8
  },
});

export default EpicDatePicker;
