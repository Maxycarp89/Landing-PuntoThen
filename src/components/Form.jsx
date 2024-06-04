import React, { useState } from 'react';

const Form = () => {
    const [errors, setErrors] = useState({});
    const [formData, setFormData] = useState({
        nombre: '',
        apellido: '',
        celular: '',
        email: '',
        mensaje: ''
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const validate = () => {
        const errors = {};
        if (!/^[a-zA-Z]+$/.test(formData.nombre)) {
            errors.nombre = 'El nombre solo debe contener letras';
        }
        if (!/^[a-zA-Z]+$/.test(formData.apellido)) {
            errors.apellido = 'El apellido solo debe contener letras';
        }
        if (!/^\d+$/.test(formData.celular)) {
            errors.celular = 'El celular solo debe contener números';
        }
        if (!/\S+@\S+\.\S+/.test(formData.email)) {
            errors.email = 'El email no es válido';
        }
        if (formData.mensaje.length > 300) {
            errors.mensaje = 'El mensaje no debe exceder 300 caracteres';
        }
        return errors;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const errors = validate();
        if (Object.keys(errors).length > 0) {
            setErrors(errors);
        } else {
            setErrors({});
            console.log(formData);
            fetch('https://formspree.io/f/YOUR_FORM_ID', {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            }).then(response => {
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
            });
        }
    };

    return (
        <form className="max-w-lg mx-auto p-4" onSubmit={handleSubmit}>
            <div className="mb-4">
                <label className="block text-gray-700">Nombre</label>
                <input
                    type="text"
                    name="nombre"
                    value={formData.nombre}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border rounded"
                />
                {errors.nombre && <p className="text-red-500">{errors.nombre}</p>}
            </div>
            <div className="mb-4">
                <label className="block text-gray-700">Apellido</label>
                <input
                    type="text"
                    name="apellido"
                    value={formData.apellido}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border rounded"
                />
                {errors.apellido && <p className="text-red-500">{errors.apellido}</p>}
            </div>
            <div className="mb-4">
                <label className="block text-gray-700">Celular</label>
                <input
                    type="text"
                    name="celular"
                    value={formData.celular}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border rounded"
                />
                {errors.celular && <p className="text-red-500">{errors.celular}</p>}
            </div>
            <div className="mb-4">
                <label className="block text-gray-700">Email</label>
                <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border rounded"
                />
                {errors.email && <p className="text-red-500">{errors.email}</p>}
            </div>
            <div className="mb-4">
                <label className="block text-gray-700">Mensaje</label>
                <textarea
                    name="mensaje"
                    value={formData.mensaje}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border rounded"
                    maxLength="300"
                />
                {errors.mensaje && <p className="text-red-500">{errors.mensaje}</p>}
            </div>
            <button
                type="submit"
                className="w-full bg-blue-500 text-white py-2 rounded"
            >
                Enviar
            </button>
        </form>
    );
};

export default Form;