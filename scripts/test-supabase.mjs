import { createClient } from '@supabase/supabase-js';

const url = process.env.VITE_SUPABASE_URL;
const key = process.env.SUPABASE_SERVICE_KEY;

console.log('URL:', url);
console.log('Key starts with:', key?.slice(0, 20));

const supabase = createClient(url, key);

try {
  const { data, error } = await supabase.from('blog_posts').select('slug').limit(3);
  if (error) {
    console.error('Supabase error:', JSON.stringify(error, null, 2));
  } else {
    console.log('Success! Existing slugs:', data);
  }
} catch (e) {
  console.error('Caught error:', e.message);
  console.error('Cause:', e.cause);
}
