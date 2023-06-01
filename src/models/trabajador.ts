import mongoose, { Document } from "mongoose";

interface Trabajador extends Document { 
    nombre: string;
    apellido: string;
    dni: string;
    telefono: string;
    email: string;
    password: string;
}

const TrabajadorSchema = new mongoose.Schema({ 
    nombre: { type: String, required: true },
    apellido: { type: String, required: true },
    dni: { type: String, required: true },
    telefono: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, requred: true },
});

const TrabajadorModel = mongoose.model<Trabajador>('Trabajador', TrabajadorSchema);

export default TrabajadorModel;