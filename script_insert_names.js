const { createClient } = supabase;

// Configure Supabase
const supabaseUrl = "https://rxsbzajqlqtanegpwnze.supabase.co";
const supabaseAnonKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJ4c2J6YWpxbHF0YW5lZ3B3bnplIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDEwNjAwMDgsImV4cCI6MjA1NjYzNjAwOH0.9aF724obCLlOk5yIqIqrfh3pkPuXlxC6A-3YQd85ibU";
const supabaseClient = createClient(supabaseUrl, supabaseAnonKey);

// Funzione per salvare il nome, IP e data nel database
async function salvaNome() {
  const nomeInput = document.getElementById("nome").value;
  if (!nomeInput) {
    alert("Devi inserire un nome!");
    return;
  }

  // Ottenere l'IP dell'utente
  try {
    const response = await fetch("https://api64.ipify.org?format=json");
    const { ip } = await response.json();

    // Ottenere la data attuale in formato UTC
    const nowUTC = new Date().toISOString();

    // Inserire il nome, l'IP e la data nel database
    const { data, error } = await supabaseClient
      .from("nomi")
      .insert([{ nome: nomeInput, ip_address: ip, time_save: nowUTC }]);

    if (error) {
      console.error("Errore nel salvataggio:", error);
      alert("Errore: " + error.message);
    } else {
      alert("Nome salvato con successo!");
      document.getElementById("nome").value = ""; // Resetta il campo
    }
  } catch (err) {
    console.error("Errore nel recupero dell'IP:", err);
    alert("Impossibile ottenere l'IP.");
  }
}
