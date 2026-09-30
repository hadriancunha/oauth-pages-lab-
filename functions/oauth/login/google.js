export async function onRequest(context) {
  const clientId = context.env.GOOGLE_CLIENT_ID;
  const redirectUri = `${context.env.URL_BASE}/oauth/callback/google`;
  
  const googleAuthUrl = `https://accounts.google.com/o/oauth2/v2/auth?client_id=${clientId}&redirect_uri=${encodeURIComponent(redirectUri)}&response_type=code&scope=openid%20email%20profile`;
  
  return Response.redirect(googleAuthUrl, 302);
}
