import { create } from 'zustand';

export interface CreateState {
  eventType: string | null;
  setEventType: (eventType: string | null) => void;
}

const useCreateEventStore = create<CreateState>((set) => ({
  eventType: null,

  setEventType: (eventType) => set({eventType}),
}))

export default useCreateEventStore