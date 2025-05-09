import { useForm } from "react-hook-form";
import useUserContext from "./useUserContext";
import { FailureToast, SuccessToast } from "@/components/Toast";



const useLogin = (navigation) => {
    const { setIsAuthenticated } = useUserContext();
    const {control, handleSubmit, formState: {errors}} = useForm({
        defaultValues: {workPermitID: "",password: ""}
    });

    const onFormSubmit = (data) => {
        try {
            SuccessToast("welcome harihara dhamodaran");
            setIsAuthenticated(true);
            navigation.replace('dashboard');
        } catch (error) {
            FailureToast(error.message);
        }
    }

    const onSignup = () => {
        navigation.navigate('signup');
    }

    return {
        control,handleSubmit,errors,onFormSubmit,onSignup
    }

}

export default useLogin;