import { FailureToast, SuccessToast } from "@/components/Toast";
import { useForm } from "react-hook-form";


const useSignup = (navigation) => {
    const {control, handleSubmit, formState: {errors}} = useForm({
        defaultValues: {workPermitID: "",dob: null,name: "",employer: "",password: ""}
    });

    const onFormSubmit = (data) => {
        try {
            console.log(data)
            SuccessToast("user has added successfully");
            navigation.navigate('login');
        } catch (error) {
            FailureToast(error.message);
        }
    }

    const onBackToLogin = () => {
         // this will pop the signup screen off and return to login
        if (navigation.canGoBack()) {
            navigation.goBack();
        } else {
            // fallback: if for some reason you can't go back, explicitly navigate
            navigation.navigate('login');
        }
    }

    return {
        control,errors,handleSubmit,onFormSubmit,onBackToLogin
    }
}

export default useSignup;