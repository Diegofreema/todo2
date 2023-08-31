/* eslint-disable prettier/prettier */
import 'react-native-url-polyfill/auto'

import { createClient } from '@supabase/supabase-js'
import * as SecureStore from 'expo-secure-store'

const ExpoSecureStoreAdapter = {
  getItem: (key: string) => {
    return SecureStore.getItemAsync(key)
  },
  setItem: (key: string, value: string) => {
    SecureStore.setItemAsync(key, value)
  },
  removeItem: (key: string) => {
    SecureStore.deleteItemAsync(key)
  },
}

const supabaseUrl = 'https://dcaqeqirygrhmgrapftj.supabase.co'
const supabaseAnonKey ='eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRjYXFlcWlyeWdyaG1ncmFwZnRqIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTM0OTc0MDIsImV4cCI6MjAwOTA3MzQwMn0.FvHDcsBxXTs8GdcKXusyldWb8cKzeHTa4Bugn85CeQw'

export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    storage: ExpoSecureStoreAdapter as any,
    autoRefreshToken: true,
    persistSession: true,
    detectSessionInUrl: false,
  },
})