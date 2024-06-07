import  { useState, useCallback, useEffect } from 'react';
import emailjs from '@emailjs/browser';

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
    const [alert, setAlert] = useState({ message: '', type: '' });

    const handleChange = useCallback((e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value
        }));
    }, []);

    const validate = () => {
        const errors = {};
        const nameRegex = /^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/;
        const numberRegex = /^\d+$/;
        const emailRegex = /\S+@\S+\.\S+/;

        if (!nameRegex.test(formData.nombre)) {
            errors.nombre = 'El nombre solo debe contener letras y espacios';
        }
        if (!nameRegex.test(formData.apellido)) {
            errors.apellido = 'El apellido solo debe contener letras y espacios';
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
                const templateParams = {
                    from_name: formData.nombre,
                    from_lastname: formData.apellido,
                    from_phone: formData.celular,
                    from_email: formData.email,
                    message: formData.mensaje
                };

                const result = await emailjs.send('default_service', 'template_lk6dfb4', templateParams, 'oDsqGh72pqyX2-OdX');

                if (result.status === 200) {
                    setAlert({ message: 'Formulario enviado con éxito', type: 'success' });
                    setFormData({
                        nombre: '',
                        apellido: '',
                        celular: '',
                        email: '',
                        mensaje: ''
                    });
                } else {
                    setAlert({ message: 'Hubo un problema al enviar el formulario', type: 'error' });
                }
            } catch (error) {
                setAlert({ message: 'Hubo un problema al enviar el formulario', type: 'error' });
            } finally {
                setIsSubmitting(false);
                setTimeout(() => {
                    setAlert({ message: '', type: '' });
                }, 3000);
            }
        }
    }, [formData]);

    useEffect(() => {
        let timer;
        if (alert.message) {
            timer = setTimeout(() => {
                setAlert({ message: '', type: '' });
            }, 3000);
        }
        return () => clearTimeout(timer);
    }, [alert]);

    return (
        <div>
            {alert.message && (
                <div
                    className={`fixed top-4 right-4 transition-opacity duration-1000 ${alert.type === 'success' ? 'bg-gradient-to-r from-cyan-500 to-emerald-500' : 'bg-red-100 border-red-400 text-red-700'
                        } border px-4 py-3 rounded relative shadow-lg`}
                    role="alert"
                >
                    <strong className="font-bold">{alert.type === 'success' ? 'Enviado!' : 'Intente mas tarde!'}</strong>
                    <span className="block sm:inline">{alert.message}</span>
                    <span className="absolute top-0 bottom-0 right-0 px-4 py-3">
                        <svg className="fill-current h-6 w-6" role="button" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><title>Close</title><path d="M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z" /></svg>
                    </span>
                </div>
            )}
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
        </div>
    );
};

export default Form;