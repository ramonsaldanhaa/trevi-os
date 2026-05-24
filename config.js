const SUPABASE_URL = 'https://cfpasrtzrppogyoofyri.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNmcGFzcnR6cnBwb2d5b29meXJpIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzkzMjM3NDEsImV4cCI6MjA5NDg5OTc0MX0.VLlpbRJC3fu6zd8RKdLroNBSPUMrgGOoGl8K8TlHLl0';
const sb = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

async function requireAuth() {
  const { data: { session } } = await sb.auth.getSession();
  if (!session) { window.location.href = 'index.html'; return null; }
  return session;
}

async function getProfile(userId) {
  const { data } = await sb.from('profiles').select('*').eq('id', userId).single();
  return data;
}

function jobParam() {
  return new URLSearchParams(window.location.search).get('job');
}
