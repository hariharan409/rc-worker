import { getRequest, postRequest } from "@/api/axiosCall";

export const getUserListAPI = async() => {
    try{
        let value = await getRequest('/user/get-user-list');
        if(value.success === true) {
            return value.value;
        } else {
            throw new Error("Something went wrong!. Please contact admin");
        }
    } catch(error) {
        throw new Error(error.message);
    }
}

export const getUserRoleAPI = async(email) => {
    try{
        let value = await getRequest('/user/get-user-role', {email: email});
        if(value.success === true) {
            return value.value;
        } else {
            throw new Error("Something went wrong!. Please contact admin");
        }
    } catch(error) {
        throw new Error(error.message);
    }
}

export const userLoginAPI = async(user) => {
    try{
        let value = await getRequest('/user/user-login',{user: user});
        if(value.success === true) {
            return value.value;
        } else {
            throw new Error("Something went wrong!. Please contact admin");
        }
    } catch(error) {
        throw new Error(error.message);
    }
}

export const userSignUpAPI = async(user) => {
    try{
        let value = await getRequest('/user/user-signup',{user: user});
        if(value.success === true) {
            return value.value;
        } else {
            throw new Error("Something went wrong!. Please contact admin");
        }
    } catch(error) {
        throw new Error(error.message);
    }
}

export const verifyTokenAPI = async(token) => {
    try{
        let value = await getRequest('/user/verify-token',{token: token});
        if(value.success === true) {
            return value.value;
        } else {
            throw new Error("Something went wrong!. Please contact admin");
        }
    } catch(error) {
        throw new Error(error.message);
    }
}

export const resendEmailOTPAPI = async(email) => {
    try{
        let value = await getRequest('/user/resending-otp',{email: email});
        if(value.success === true) {
            return value.value;
        } else {
            throw new Error("Something went wrong!. Please contact admin");
        }
    } catch(error) {
        throw new Error(error.message);
    }
}

export const userCreateAPI = async(email, role) => {
    try{
        let value = await postRequest('/user/create-user',{email: email, role: role});
        if(value.success === true) {
            return value.value;
        } else {
            throw new Error("Something went wrong!. Please contact admin");
        }
    } catch(error) {
        throw new Error(error.message);
    }
}

export const userDeleteAPI = async(email) => {
    try{
        let value = await postRequest('/user/delete-user',{email: email});
        if(value.success === true) {
            return value.value;
        } else {
            throw new Error("Something went wrong!. Please contact admin");
        }
    } catch(error) {
        throw new Error(error.message);
    }
}


export const getCeoCfoEmails = async() => {
    try{
       // let value = await getRequest('/user/get-user-role', {email: email});
        let emails = await getRequest('/user/get-ceo-cfo-emails');
        if(emails.success === true) {
            return emails.value;
        } else {
            throw new Error("Something went wrong!. Please contact admin");
        }
    } catch(error) {
        throw new Error(error.message);
    }
}