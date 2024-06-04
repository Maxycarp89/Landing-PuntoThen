import React, { useState, useCallback } from 'react';

const Form = () => {
    const [errors, setErrors] = useState({});
    const [formData, setFormData] = useState({
        nombre: '',
        apellido: '',
        celular: '',
        email: '',
        mensaje: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleChange = useCallback((e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value
        }));
    }, []);

    const validate = () => {
        const errors = {};
        const nameRegex = /^[a-zA-Z]+$/;
        const numberRegex = /^\d+$/;
        const emailRegex = /\S+@\S+\.\S+/;

        if (!nameRegex.test(formData.nombre)) {
            errors.nombre = 'El nombre solo debe contener letras';
        }
        if (!nameRegex.test(formData.apellido)) {
            errors.apellido = 'El apellido solo debe contener letras';
        }
        if (!numberRegex.test(formData.celular)) {
            errors.celular = 'El celular solo debe contener números';
        }
        if (!emailRegex.test(formData.email)) {
            errors.email = 'El email no es válido';
        }
        if (formData.mensaje.length > 300) {
            errors.mensaje = 'El mensaje no debe exceder 300 caracteres';
        }
        return errors;
    };

    const handleSubmit = useCallback(async (e) => {
        e.preventDefault();
        const validationErrors = validate();
        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
        } else {
            setErrors({});
            setIsSubmitting(true);
            try {
                const response = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
                    method: 'POST',
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(formData)
                });

                if (response.ok) {
                    alert('Formulario enviado con éxito');
                    setFormData({
                        nombre: '',
                        apellido: '',
                        celular: '',
                        email: '',
                        mensaje: ''
                    });
                } else {
                    alert('Error al enviar el formulario');
                }
            } catch (error) {
                alert('Hubo un problema al enviar el formulario');
            } finally {
                setIsSubmitting(false);
            }
        }
    }, [formData]);

    return (
        <form className="max-w-lg mx-auto p-4" onSubmit={handleSubmit}>
            {['nombre', 'apellido', 'celular', 'email', 'mensaje'].map((field) => (
                <div className="mb-4" key={field}>
                    <label className="block text-sm font-normal italic text-neutral-600">
                        {field.charAt(0).toUpperCase() + field.slice(1)}
                    </label>
                    {field !== 'mensaje' ? (
                        <input
                            type={field === 'email' ? 'email' : 'text'}
                            name={field}
                            value={formData[field]}
                            onChange={handleChange}
                            className="w-full px-3 py-2 bg-neutral-900 rounded-md p-6 text-md border border-neutral-800 font-thin"
                        />
                    ) : (
                        <textarea
                            name={field}
                            value={formData[field]}
                            onChange={handleChange}
                            className="w-full px-3 py-2 bg-neutral-900 rounded-md p-6 text-md border border-neutral-800 font-thin"
                            maxLength="300"
                        />
                    )}
                    {errors[field] && <p className="text-red-500">{errors[field]}</p>}
                </div>
            ))}
            <button
                type="submit"
                className="bg-gradient-to-r from-cyan-500 to-emerald-500 py-2 px-3 rounded-md"
                disabled={isSubmitting}
            >
                {isSubmitting ? 'Enviando...' : 'Enviar'}
            </button>
        </form>
    );
};

export default Form;