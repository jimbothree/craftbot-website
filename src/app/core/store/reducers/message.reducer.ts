import { Message } from '@app/core/models/message.model';
import { MessageAction, MessageActionTypes } from '../actions/message.actions';
import { createFeatureSelector, createSelector } from '@ngrx/store';

export interface State {
  messages: Message[];
}

export const initialState: State = {
  messages: []
};

export function reducer(state: State = initialState, action: MessageAction): State {
  switch (action.type) {
    case MessageActionTypes.Received: return { ...state, messages: [...state.messages, action.payload] };

    default: return state;
  }
}

export const getState = createFeatureSelector<State>('message');
export const getMessages = createSelector(getState, state => state && state.messages);
