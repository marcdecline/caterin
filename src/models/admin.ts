import mongoose, { Document } from 'mongoose';

interface Admin extends Document { 
    username: string;
    email: string;
    password: string;
}

const AdminSchema = new mongoose.Schema({ 
    username: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, requred: true },
});

const AdminModel = mongoose.model<Admin>('Admin', AdminSchema);

export default AdminModel;