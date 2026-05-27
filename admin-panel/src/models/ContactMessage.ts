import mongoose, { Schema, Document } from 'mongoose';

export interface IContactMessage extends Document {
  fullName: string;
  email: string;
  phoneNumber: string;
  flowerType: string;
  quantity: number;
  message: string;
  status: string;
  createdAt: Date;
}

const ContactMessageSchema: Schema = new Schema({
  fullName: { type: String, required: true },
  email: { type: String, required: true },
  phoneNumber: { type: String, required: true },
  flowerType: { type: String, required: true },
  quantity: { type: Number, required: true },
  message: { type: String, required: false },
  status: { type: String, default: 'Pending' },
  createdAt: { type: Date, default: Date.now },
});

export default mongoose.models.ContactMessage || mongoose.model<IContactMessage>('ContactMessage', ContactMessageSchema);
