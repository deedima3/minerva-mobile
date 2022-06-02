import create, { StateCreator } from "zustand";
import { PersistOptions } from "zustand/middleware";
import { persist } from "zustand/middleware";
import AsyncStorage from '@react-native-async-storage/async-storage';

interface UserState {
  user: string | null | undefined;
  changeUser: (user: string) => void;
  removeUser: () => void;
}

type MyPersist = (
  config: StateCreator<UserState>,
  options: PersistOptions<UserState>
) => StateCreator<UserState>;

const useUserStore = create<UserState>(
  (persist as unknown as MyPersist)(
    (set: any) => ({
      user: "",
      changeUser: (user: string) => set({ user: user }),
      removeUser: () => set({ user: "", is_admin: 0 }),
    }),
    {
      name: "user-storage",
      getStorage: () => AsyncStorage,
    }
  )
);

export default useUserStore;
