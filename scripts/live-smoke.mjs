// Purpose: Opt-in guard for the paid network adapter not yet shipped in this alpha.
if(!process.env.TYPESAFE_API_KEY)throw new Error('Set TYPESAFE_API_KEY');throw new Error('Live adapter is not wired in this alpha; zero requests made');
