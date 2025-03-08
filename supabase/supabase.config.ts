import { createClient, SupabaseClient } from '@supabase/supabase-js'

//import config
const supabaseUrl = process.env.SUPABASE_URL || "";
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || "";

//create client
const supabase = createClient(supabaseUrl, supabaseKey)

export default supabase as SupabaseClient;