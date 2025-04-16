import { useForm } from "react-hook-form";


const useSignup = () => {
    const {control, handleSubmit, formState: {errors}} = useForm({
        defaultValues: {workPermitID: ""}
    });

    return {
        control,errors,handleSubmit
    }
}

export default useSignup;