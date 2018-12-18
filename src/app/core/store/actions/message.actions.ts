import { Action } from '@ngrx/store';
import { Message } from '@app/core/models/message.model';

export enum MessageActionTypes {
  Received = '[Message] received'
}

export class MessageReceived implements Action {
  readonly type = MessageActionTypes.Received;

  constructor(public payload: Message) { }
}

export type MessageAction =
  MessageReceived;
