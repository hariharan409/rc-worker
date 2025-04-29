import { FailureToast, SuccessToast } from "@/components/Toast";
import { useNavigation } from "@react-navigation/native";
import { useForm } from "react-hook-form";


const useDeclareMonthlySalary = () => {
    const navigation = useNavigation();
    const {control, handleSubmit, formState: {errors}} = useForm({
        defaultValues: {companyName: "",salaryMonth: null,salaryCredited: null,salaryCreditedOn: null,remarks: ""}
    });

    const onFormSubmit = (data) => {
        try {
            console.log(data)
            SuccessToast("monthly salary has declared successfully");
            navigation.navigate('dashboard');
        } catch (error) {
            FailureToast(error.message);
        }
    }

    return {
        control,errors,handleSubmit,onFormSubmit
    }
}

export default useDeclareMonthlySalary;