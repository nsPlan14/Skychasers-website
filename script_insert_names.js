const { createClient } = supabase;

// Configure Supabase
const supabaseUrl = "https://rxsbzajqlqtanegpwnze.supabase.co";
const supabaseAnonKey = "LA_TUA_ANON_KEY";
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

  // Ottenere la data attuale in formato UTC (TIMESTAMPTZ)
  const nowUTC = new Date().toISOString(); // Formato: 'YYYY-MM-DDTHH:MM:SS.sssZ'

  // Inserire il nome, l'IP e la data UTC nel database
  const { data, error } = await supabaseClient
    .from("nomi")
    .insert([{ nome: nomeInput, ip_address: ip, data_salvataggio: nowUTC }]);

  if (error) {
    console.error("Errore nel salvataggio:", error);
    alert("Errore: " + error.message);
  } else {
    alert("Nome salvato con successo!");
    document.getElementById("nome").value = "";
  }
}
