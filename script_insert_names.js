const { createClient } = supabase;

// Configure Supabase
const supabaseUrl = "https://rxsbzajqlqtanegpwnze.supabase.co";
const supabaseAnonKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJ4c2J6YWpxbHF0YW5lZ3B3bnplIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDEwNjAwMDgsImV4cCI6MjA1NjYzNjAwOH0.9aF724obCLlOk5yIqIqrfh3pkPuXlxC6A-3YQd85ibU";
const supabaseClient = createClient(supabaseUrl, supabaseAnonKey);

// Function to save a name
async function salvaNome() {
  const nomeInput = document.getElementById("nome").value;

  if (!nomeInput) {
    alert("Devi inserire un nome!");
    return;
  }

  // Ottenere l'IP dell'utente
  const response = await fetch("https://api64.ipify.org?format=json");
  const { ip } = await response.json();

  // Controllare quanti nomi ha già inserito questo IP
  const { count, error } = await supabaseClient
    .from("nomi")
    .select("*", { count: "exact", head: true }) // Conta i record SENZA restituirli
    .eq("ip_address", ip);

  if (error) {
    console.error("Errore nel controllo IP:", error);
    alert("Errore durante il controllo IP.");
    return;
  }

  if (count >= 5) { // Se l'IP ha già inserito 5 nomi, blocchiamo l'invio
    alert("Hai già inserito il massimo numero di nomi consentiti.");
    return;
  }

  // Inserire il nome e l'IP nel database
  const { insertData, insertError } = await supabaseClient
    .from("nomi")
    .insert([{ nome: nomeInput, ip_address: ip }]);

  if (insertError) {
    console.error("Errore nel salvataggio:", insertError);
    alert("Errore nel salvataggio del nome.");
  } else {
    alert("Nome salvato con successo!");
    document.getElementById("nome").value = ""; // Resetta il campo
  }
}

