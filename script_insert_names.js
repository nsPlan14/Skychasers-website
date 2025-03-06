const { createClient } = supabase;

// Configure Supabase
const supabaseUrl = "https://rxsbzajqlqtanegpwnze.supabase.co";
const supabaseAnonKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJ4c2J6YWpxbHF0YW5lZ3B3bnplIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDEwNjAwMDgsImV4cCI6MjA1NjYzNjAwOH0.9aF724obCLlOk5yIqIqrfh3pkPuXlxC6A-3YQd85ibU";
const supabaseClient = createClient(supabaseUrl, supabaseAnonKey);

// Function to save name, ip and time/date
async function salvaNome() {
  const nomeInput = document.getElementById("nome").value;
  if (!nomeInput) {
    alert("You have to enter a name!");
    return;
  }

  // IP
  try {
    const response = await fetch("https://api64.ipify.org?format=json");
    const { ip } = await response.json();

    // Date (UTC)
    const nowUTC = new Date().toISOString();

    // Name, IP and date into the database
    const { data, error } = await supabaseClient
      .from("nomi")
      .insert([{ nome: nomeInput, ip_address: ip, time_save: nowUTC }]);

    if (error) {
      console.error("Error in saving:", error);
      alert("Error: " + error.message);
    } else {
      alert("Name successfully saved!");
      document.getElementById("nome").value = ""; // Resetta tye field
    }
  } catch (err) {
    console.error("IP retrieval error:", err);
    alert("Unable to get IP.");
  }
}