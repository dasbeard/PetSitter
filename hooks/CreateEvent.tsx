import { create } from 'zustand';

export interface CreateState {
  eventType: string | null;
  setEventType: (eventType: string | null) => void;
  // DatePickerVisible: boolean;
  // setDatePickerVisible: () => void;
}

const useCreateEventStore = create<CreateState>((set) => ({
  eventType: null,

  setEventType: (eventType) => set({eventType}),

  // DatePickerVisible: false,
  // setDatePickerVisible: () => set((state) => ({DatePickerVisible: !state.DatePickerVisible})),

}))

export default useCreateEventStore