import mongoose, { Document, Schema } from 'mongoose';

enum MenuType {
  Normal = 'normal',
  Vegano = 'vegano',
  Celíaco = 'celíaco',
}

export interface Menu extends Document {
  name: string;
  description: string;
  type: MenuType;
  precio: number;
}

const menuSchema = new Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  type: { type: String, enum: Object.values(MenuType), required: true },
  precio: { type: Number, required: true },
});

export default mongoose.model<Menu>('Menu', menuSchema);

