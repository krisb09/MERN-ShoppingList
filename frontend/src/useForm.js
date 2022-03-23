import { useState } from 'react';

const useForm = (defaultValues = {}) => {
    const [ values, setValues] = useState(defaultValues);

    const handleOnChange = (e) => {
        const { name, values } = e.target;

        setValues({
            ...values,
            [name]: values,
        });
    };

    return {
        handleOnChange,
        values
    };
};

export default useForm;