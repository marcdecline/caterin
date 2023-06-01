import mongoose, {Document} from "mongoose";

interface Empresa extends Document {
    nombre: string;
    direccion: string;
    codigoPostal: string;
    localidad: string;
    provincia: string;
    telefono: string;
    nifCif: string;
    email: string;
    contactPerson: string;
    password: string;
}

const EmpresaSchema = new mongoose.Schema({ 
    nombre: { type: String, required: true },
    direccion: { type: String, required: true },
    codigoPostal: { type: String, required: true },
    localidad: { type: String, required: true },
    provincia: { type: String, required: true },
    telefono: { type: String, required: true },
    nifCif: { type: String, required: true },
    email: { type: String, required: true },
    contactPerson: { type: String, required: true },
    password: { type: String, requred: true },
})

const EmpresaModel = mongoose.model<Empresa>('Empresa', EmpresaSchema);

export default EmpresaModel;