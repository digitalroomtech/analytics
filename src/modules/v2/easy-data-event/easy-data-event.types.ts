import { ObjectId } from 'mongodb';


export interface EasyDataEvent{
  _id?: ObjectId;
  name?: string;
  uuid?: string;
  user_id?: number;
  tenant_id?: string;
  created_at?: Date;
  updated_at?: Date;
}
export interface EasyDataMetaEvent {
  _id?: string;
  meta_key?: string;
  meta_value?: string;
  event: EasyDataEvent;
  created_at?: string;
  updated_at?: string;
}

export interface CreateEasyDataEventArgs{
  meta_value:string;
  meta_key:string;
}

export interface CreateEasyDataEventArgs {
  name?: string;
  uuid?: string;
  user_id?: number;
  tenant_id?: string;
  meta_data:CreateEasyDataEventArgs[]
}