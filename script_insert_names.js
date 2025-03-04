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

  // 1. Controllare quanti nomi ha già inserito questo IP
  const { count, error: selectError } = await supabaseClient
    .from("nomi")
    // Il trucco è usare { count: "exact", head: true } per ottenere SOLO il conteggio
    .select("*", { count: "exact", head: true })
    .eq("ip_address", ip);

  if (selectError) {
    console.error("Errore nel controllo IP:", selectError);
    alert("Errore durante il controllo IP.");
    return;
  }

  // 2. Se l'IP ha già inserito 5 nomi, blocchiamo l'invio
  if (count >= 5) {
    alert("Hai già inserito il massimo numero di nomi consentiti (5).");
    return;
  }

  // 3. Se l'IP non ha raggiunto il limite, inseriamo il nome e l'IP nel database
  const { data, error: insertError } = await supabaseClient
    .from("nomi")
    .insert([{ nome: nomeInput, ip_address: ip }]);

  if (insertError) {
    console.error("Errore nel salvataggio:", insertError);
    alert("Errore: " + insertError.message);
  } else {
    alert("Nome salvato con successo!");
    document.getElementById("nome").value = ""; // Resetta il campo
  }
}
