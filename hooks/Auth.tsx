import { supabase } from '@/utils/supabase';
import { AuthError, Session, User } from '@supabase/supabase-js'
import {create} from 'zustand'

export interface UserData {
  id: string;
  username: string;
  firstName: string;
  lastName: string;
  contact_email: string;
  avatar_url: string;
  isEmployee: boolean;
  isManager: boolean;
  created_at: string;
}
export interface AuthState {
  session: Session | null;
  setSession: (session: Session | null) => void;
  signIn: (email:string, password: string) => Promise<User | AuthError | null>;
  // signIn: (email:string, password: string) => Promise<Session | AuthError | null>;
  signUpWithEmail: (email:string, password: string) => Promise<User | AuthError | null>;
  logout: () => Promise<void>;
  userData: UserData | null;
  setUserData: (userData: UserData | null) => void;
  // getUserData: (session: Session) => Promise< UserData | null>
  getUserData: (user: User) => Promise< UserData | null>
}

const useAuthStore = create<AuthState>((set) =>({
  userData: null,
  setUserData: (userData) => set({userData}),

  getUserData: async (user) =>  {
    const { data, error, status } = await supabase
    .from('users')
    .select('username, first_name, last_name, contact_email, avatar_url, isEmployee, isManager, created_at')
    .eq('id', user.id)
    .single()

    if(error && status !== 406){
      return Promise.reject(null)
    }

    const allData ={...data, id: user.id} as UserData

    return Promise.resolve(allData)    
  },


  session: null,
  setSession: (session) => set({session }),
  
  signIn: async (email, password) => {
    if (!email) return Promise.reject('Email is required');
    if (!password) return Promise.reject('Password is required');
    
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });
    if (error) return Promise.reject(error);
    set({session: data.session}) 

    // return Promise.resolve(data.session) ;
    return Promise.resolve(data.user);
  },
  
  signUpWithEmail: async (email, password) => {
    if (!email) return Promise.reject('Email is required');
    if (!password) return Promise.reject('Password is required');
    
    const { data, error } = await supabase.auth.signUp({
      email,
      password,
    });
    
    if(error) return Promise.reject(error);
    set({session: data.session});
    return Promise.resolve(data.user);
  },
  
  logout: async () => {
    const { error } = await supabase.auth.signOut();
    if (error) return Promise.reject(error)
    set({session: null});
  return Promise.resolve();
  },

}));

export default useAuthStore;
  