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

  // Chiamare la funzione check_ip_count per sapere quanti nomi esistono per questo IP
  const { data: countResult, error: rpcError } = await supabaseClient
    .rpc("check_ip_count", { the_ip: ip });

  if (rpcError) {
    console.error("Errore nel controllo IP:", rpcError);
    alert("Errore durante il controllo IP.");
    return;
  }

  const ipCount = countResult; // Il valore ritornato dalla funzione

  if (ipCount >= 5) {
    alert("Hai già inserito il massimo numero di nomi consentiti (5).");
    return;
  }

  // Inserire il nome e l'IP nel database
  const { data, error } = await supabaseClient
    .from("nomi")
    .insert([{ nome: nomeInput, ip_address: ip }]);

  if (error) {
    console.error("Errore nel salvataggio:", error);
    alert("Errore: " + error.message);
  } else {
    alert("Nome salvato con successo!");
    document.getElementById("nome").value = "";
  }
}
