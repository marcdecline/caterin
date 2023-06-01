import mongoose, { Document } from 'mongoose';

interface Cocinero extends Document {
    nombre: string;
    apellido: string;
    dni: string;
    telefono: string;
    email: string;
    password: string;
}

const cocineroSchema = new mongoose.Schema({
    nombre: { type: String, required: true },
    apellido: { type: String, required: true },
    dni: { type: String, required: true },
    telefono: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, requred: true },
});
    
const CocineroModel = mongoose.model<Cocinero>('Cocinero', cocineroSchema);

export default CocineroModel;
