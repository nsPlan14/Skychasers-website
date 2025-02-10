// Dizionario delle traduzioni
const translations = {
    en: {
    howItWorks: "Mission",
    team: "Team",
    raptor: "Raptor",
    updates: "Updates",
    contacts: "Contacts",
    theProject: "THE CANSAT PROJECT",
    projectDescription: "The CanSat Project is more than just an educational experience: it is a true miniature space mission. Students from all over the world are challenged to design, build, launch, and operate an actual miniature satellite, the <b>CanSat</b>, replicating the phases of a real space mission: Design, Construction, Launch, and Mission.",
    homeLearnMore: "Learn More",
    followUs: "Follow Us",
    position: "Aosta Valley, Italy",
    missioneHomeHead: "MISSION",
    missionHomeSub: "LEARN MORE ABOUT<br>OUR PROJECT",
    secondaryMissionHead: "SECONDARY MISSION",
    secondaryMissionExp: "Our secondary mission includes a number of sensors to detect essential data for any self-respecting space mission: temperature and pressure (primary), accelerometer, gyroscope, magnetometer, volatile organic compound detection, humidity. There will also be a <b>Geiger-Muller</b> counter to measure ionising radiation at various altitudes. There is also going be an in-flight stabilisation system to keep the CanSat's roll stable throughout the descent. All the main sensors will be housed in a <b>Flight Computer</b> that we will design. Everything will be controlled with an ESP32. The will have communication ports for the most commonly used protocols and an integrated GPS. It will also include an H-bridge to control a DC motor, and power supplies for the ESCs of the brushless motors, which are needed for in-flight stabilisation. All data will be both transmitted to the groundstation and stored on an on-board flash memory.",
    goBackBtn: "Go Back",
    teamSubHead: "DISCOVER MORE ABOUT OUR TEAM!",
    updatesHomeHead: "UPDATES",
    scrollSubHead: "SCROLL FOR MORE",
    twentyJanTwoFive: "JANUARY 20, 2025",
    headTeamAccept: "ACCEPTED FOR CANSAT<br>2024-2025",
    teamFirstUpdate: "We are delighted and honored to announce that our team has been <b>selected</b> for the Italian CanSat 2024-2025 competition! This is a very <b>special moment</b> because it demonstrates our hard work over <b>months of planning</b>, and we are confident that <b>we will not disappoint expectations</b>, bringing our project to a successful conclusion. Now we face months of advanced design and testing, trying to identify any issues that may arise in the future. Thank you all for your trust. See you in Bologna!",
    filippoDesc: "Filippo is responsible for the <b>development and management</b> of the website and social media for this project. With his <b>strategic vision</b> and <b>attention to detail</b>, he is in charge of designing an innovative and intuitive digital platform intended to be the main reference point for project information. His efforts focus on <b>optimizing the user experience</b>, ensuring smooth communication, quick access to content, and a professional representation that enhances the team's work.",
    nizarDesc: "Nizar is passionate about the world of space, from engineering to the discoveries of the universe, and he has decided to participate in this competition to connect even more with this passion. He is currently studying <b>computer science</b> and has previously created and developed several electronics projects, starting with the simple yet essential <b>Arduino Uno</b> and reaching the current and powerful <b>ESP32</b>. In this project, he will be responsible for developing the software for the <b>control algorithms</b> and will also dedicate time to electronics by designing the satellite’s <b>Flight Computer</b>. According to him, <i>“if humans reached the Moon with a 2 MHz computer, then with an Arduino Uno, anything is possible.”</i>",
    patrizioDesc: "Patrizio Aloisio is our <b>professor</b> of telecommunications and <b>mentor</b> for this project. With decades of experience in electronics, he is the ideal person to rely on to achieve our ambitions. With his technical support and knowledge, we will be able to develop and advance the CanSat faster, also allowing us to <b>learn from his experience</b>.",
    patrizioSubHead: "Professor and Mentor",
    patrizioProfession: "Mentor",
    simoneSubHead: "COM Engineer",
    simoneDesc: "Passionate about <b>programming</b> and <b>practical engineering</b>, Simone is responsible for <b>satellite communication</b> and <b>software development</b> in the CanSat project. He works to ensure smooth communication between the CanSat and the <b>ground station</b>. His role consists of developing the software that processes and transmits telemetry data, allowing real-time monitoring and analysis of the satellite’s performance. Combining technical skills and a DIY approach, he contributes to innovation and problem-solving necessary for a successful CanSat mission.",
    skyDesc: "Sky contributed to this project by developing and implementing the <b>Kalman filter</b> for <b>sensor data processing</b>. Working in C++, he tested and applied the filter to improve the accuracy of pressure, altitude, and acceleration measurements. Thanks to this optimization, data analysis during flight has become more reliable and effective.",
    skySubHead: "Software Engineer",
    raptorDesc: "The <b>Raptor Flight Computer</b> is the brain of our project, responsible for controlling every single aspect of the CanSat. It has several integrated sensors: BMP280, BME680, ENS210, and CCS811 for <b>temperature</b>, <b>pressure</b>, <b>volatile organic compounds</b> (VOC) measurement, and <b>humidity</b>; MPU6500, MPU6050, and QMC5883L for <b>accelerometer</b>, <b>gyroscope</b>, and <b>magnetometer</b>. All computational power comes from an <b>ESP32-S3</b>. There will also be communication ports for the most commonly used protocols: <b>UART</b>, <b>I2C</b>, and <b>SPI</b>. The system also includes an <b>H-bridge</b> with the L293DD to control some DC motors and power supplies for the ESCs of the brushless motors. All data will be both transmitted to the ground and stored on onboard <b>flash memory</b> and an <b>SD card</b>.",
    fiveFebTwoFive: "FEBRUARY 05, 2025",
    headVDAOrienta: "SKYCHASERS AT VDA ORIENTA",
    teamSecondUpdate: "We were happy to have participated in the regional event <b>VDA Orienta</b>, which this year, for the first time, guided middle school students in choosing their high school. Representing the <b>I. Manzetti Technical Institute</b>, specifically the <b>Information Technology and Telecommunications</b> program, we provided the students not only with a general overview of the school but also a presentation of our CanSat project, sparking curiosity and interest among them. We showed them the development behind such a project, from the website to the prototyping hardware, which will ultimately lead us to build a fully functional and operational mini-satellite. We can't wait to move on to the next step of development.",
  },

    it: {
    howItWorks: "Missione",
    team: "Squadra",
    raptor: "Raptor",
    updates: "Aggiornamenti",
    contacts: "Contatti",
    theProject: "IL PROGETTO CANSAT",
    projectDescription: "Il Progetto CanSat è più di una semplice esperienza educativa: è una vera missione spaziale in miniatura. Gli studenti di tutto il mondo sono sfidati a progettare, costruire, lanciare e operare un vero e proprio satellite in miniatura, il <b>CanSat</b>, replicando le fasi di una missione spaziale reale: Progettazione, Costruzione, Lancio e Missione.",
    homeLearnMore: "Scopri di più",
    followUs: "Seguici",
    position: "Valle d'Aosta, Italia",
    missioneHomeHead: "MISSIONE",
    missionHomeSub: "SCOPRI DI PIÙ SUL<br>NOSTRO PROGETTO",
    secondaryMissionHead: "MISSIONE SECONDARIA",
    secondaryMissionExp: "La nostra missione secondaria comprende una serie di sensori per rilevare dati essenziali per qualsiasi missione spaziale che si rispetti: temperatura e pressione (primaria), accelerometro, giroscopio, magnetometro, rilevamento di composti organici volatili, umidità. Sarà presente anche un contatore <b>Geiger-Muller</b> per misurare le radiazioni ionizzanti a varie altitudini. Ci sarà inoltre un sistema di stabilizzazione in volo per mantenere stabile il rollio del CanSat durante la discesa. Tutti i sensori principali saranno alloggiati in un <b>Flight Computer</b> che progetteremo. Tutto sarà controllato con un ESP32. Il avrà porte di comunicazione per i protocolli più comunemente usati e un GPS integrato. Comprenderà anche un ponte ad H per controllare un motore a corrente continua e alimentatori per gli ESC dei motori brushless necessari per la stabilizzazione in volo. Tutti i dati saranno trasmessi alla groundstation e memorizzati su una memoria flash a bordo.",
    filippoDesc: "Filippo è responsabile dello <b>sviluppo e gestione</b> del sito web e dei social media di questo progetto. Con la sua <b>visione strategica</b> e <b>attenzione ai dettagli</b>, si occupa della progettazione di una piattaforma digitale innovativa e intuitiva, destinata a diventare il principale punto di riferimento per le informazioni sul progetto. I suoi sforzi si concentrano sull’<b>ottimizzazione dell’esperienza utente</b>, garantendo una comunicazione fluida, un rapido accesso ai contenuti e una rappresentazione professionale che valorizza il lavoro del team.",
    nizarDesc: "Nizar è appassionato del mondo dello spazio, dall'ingegneria alle scoperte dell'universo, e ha deciso di partecipare a questa competizione per connettersi ancora di più con questa passione. Attualmente studia <b>informatica</b> e in passato ha creato e sviluppato diversi progetti di elettronica, iniziando con il semplice ma essenziale <b>Arduino Uno</b> fino ad arrivare all'attuale e potente <b>ESP32</b>. In questo progetto si occuperà dello svilupo del software degli <b>algoritmi di controllo</b> e inoltre dedicherà anche tempo all'elettronica progettando il <b>Computer di Volo</b> del satellite. Secondo lui, <i>“se l’uomo è arrivato sulla Luna con un computer da 2 MHz, allora con l’Arduino Uno si può fare tutto”</i>.",
    patrizioDesc: "Patrizio Aloisio è il nostro <b>professore</b> di telecomunicazioni e <b>mentore</b> per questo progetto. Con decenni di esperienza nell'elettronica, è la persona ideale su cui fare affidamento per realizzare le nostre ambizioni. Con il suo supporto tecnico e la sua conoscenza, saremo in grado di sviluppare e portare avanti il CanSat più velocemente, permettendoci anche di <b>imparare dalla sua esperienza</b>.",
    patrizioSubHead: "Professore e Mentore",
    patrizioProfession: "Mentore",
    simoneSubHead: "Ingegnere COM",
    simoneDesc: "Appassionato di <b>programmazione</b> e <b>ingegneria pratica</b>, Simone è responsabile della <b>comunicazione del satellite</b> e dello <b>sviluppo software</b> nel progetto CanSat. Lavora per garantire una comunicazione fluida tra il CanSat e la <b>stazione di terra</b>. Il suo ruolo consiste nello sviluppo del software che elabora e trasmette i dati di telemetria, consentendo il monitoraggio e l’analisi in tempo reale delle prestazioni del satellite. Combinando competenze tecniche e un approccio fai-da-te, contribuisce all’innovazione e alla risoluzione dei problemi necessari per il successo della missione CanSat.",
    skyDesc: "Sky ha contribuito a questo progetto sviluppando e implementando il <b>filtro di Kalman</b> per l’<b>elaborazione dei dati dei sensori</b>. Lavorando in C++, ha testato e applicato il filtro per migliorare la precisione delle misurazioni di pressione, altitudine e accelerazione. Grazie a questa ottimizzazione, l’analisi dei dati durante il volo è diventata più affidabile ed efficace.",
    skySubHead: "Ingegnere Software",
    goBackBtn: "Torna Indietro",
    teamSubHead: "SCOPRI DI PIÙ SUL NOSTRO TEAM!",
    teamLearnMore: "Scopri di più",
    updatesHomeHead: "AGGIORNAMENTI",
    scrollSubHead: "SCORRI PER ALTRO",
    twentyJanTwoFive: "20 GENNAIO 2025",
    headTeamAccept: "SELEZIONATI PER CANSAT<br>2024-2025",
    teamFirstUpdate: "Siamo entusiasti e onorati di annunciare che il nostro team è stato <b>selezionato</b> per la competizione italiana CanSat 2024-2025! Questo è un <b>momento molto speciale</b> perché dimostra il nostro duro lavoro dopo <b>mesi di pianificazione</b>, e siamo certi che <b>non deluderemo le aspettative</b>, portando il nostro progetto a una conclusione di successo. Ora ci attendono mesi di progettazione avanzata e test, cercando di individuare eventuali problemi che potrebbero sorgere in futuro. Grazie a tutti per la fiducia. Ci vediamo a Bologna!",
    raptorDesc: "Il <b>Raptor Flight Computer</b> è il cervello del nostro progetto, responsabile del controllo di ogni singolo aspetto del CanSat. Dispone di diversi sensori integrati: BMP280, BME680, ENS210 e CCS811 per la misurazione di <b>temperatura</b>, <b>pressione</b>, <b>composti organici volatili</b> (VOC) e <b>umidità</b>; MPU6500, MPU6050 e QMC5883L per <b>accelerometro</b>, <b>giroscopio</b> e <b>magnetometro</b>. Tutta la potenza computazionale proviene da un <b>ESP32-S3</b>. Saranno inoltre presenti porte di comunicazione per i protocolli più utilizzati: <b>UART</b>, <b>I2C</b> e <b>SPI</b>. Il sistema include anche un <b>ponte H</b> con l’L293DD per controllare alcuni motori DC e alimentatori per gli ESC dei motori brushless. Tutti i dati saranno sia trasmessi a terra che archiviati nella <b>memoria flash</b> di bordo e su una <b>scheda SD</b>.",
    teamSecondUpdate: "Siamo stati felici di aver partecipato all'evento regionale <b>VDA Orienta</b>, che quest'anno, per la prima volta, ha guidato i ragazzi delle scuole medie nella scelta della scuola superiore. In rappresentanza dell'<b'Istituto Tecnico I. Manzetti</b>, e più nello specifico dell'indirizzo <b>Informatica e Telecomunicazioni</b>, abbiamo dato ai ragazzi non solo una visione generale della scuola, ma anche una presentazione del nostro progetto CanSat, suscitando curiosità e interesse tra di loro. Gli abbiamo mostrato gli sviluppi dietro un progetto del genere, dal sito web all’hardware di prototipazione, che ci porterà infine a costruire un mini-satellite perfettamente funzionante e operativo. Non vediamo l'ora di passare al prossimo passo dello sviluppo.",
    fiveFebTwoFive: "05 FEBBRAIO 2025",
    headVDAOrienta: "SKYCHASERS A VDA ORIENTA",
  },
  de: {
    howItWorks: "Mission",
    team: "Team",
    raptor: "Raptor",
    updates: "Updates",
    contacts: "Kontakte",
    theProject: "DAS CANSAT-PROJEKT",
    projectDescription: "Das CanSat-Projekt ist mehr als nur eine Bildungserfahrung: Es ist eine echte Miniatur-Weltraummission. Schüler aus der ganzen Welt werden herausgefordert, einen echten Minisatelliten, den <b>CanSat</b>, zu entwerfen, zu bauen, zu starten und zu betreiben, indem sie die Phasen einer echten Weltraummission nachbilden: Entwurf, Konstruktion, Start und Mission.",
    homeLearnMore: "Mehr erfahren",
    followUs: "Folgen Sie uns",
    position: "Aostatal, Italien",
    missioneHomeHead: "MISSION",
    missionHomeSub: "ERFAHREN SIE MEHR ÜBER<br>UNSER PROJEKT",
    secondaryMissionHead: "SEKUNDÄRMISSION",
    secondaryMissionExp: "Unsere Sekundärmission umfasst eine Reihe von Sensoren, um wichtige Daten für jede respektable Weltraummission zu erfassen: Temperatur und Druck (primär), Beschleunigungsmesser, Gyroskop, Magnetometer, Erkennung flüchtiger organischer Verbindungen, Feuchtigkeit. Es wird auch einen <b>Geiger-Müller</b>-Zähler geben, um ionisierende Strahlung in verschiedenen Höhen zu messen. Es wird außerdem ein Stabilisierungssystem im Flug geben, um die Rollbewegung des CanSat während des Abstiegs stabil zu halten. Alle Hauptsensoren werden in einem <b>Flight Computer</b> untergebracht, den wir entwerfen werden. Alles wird mit einem ESP32 gesteuert. Der wird Kommunikationsports für die am häufigsten verwendeten Protokolle und ein integriertes GPS haben. Er wird auch eine H-Brücke enthalten, um einen Gleichstrommotor zu steuern, sowie Stromversorgungen für die ESCs der Brushless-Motoren, die für die Stabilisierung im Flug erforderlich sind. Alle Daten werden sowohl an die Bodenstation übertragen als auch auf einem Onboard-Flash-Speicher gespeichert.",
    filippoDesc: "Filippo ist für die <b>Entwicklung und Verwaltung</b> der Website und der sozialen Medien dieses Projekts verantwortlich. Mit seiner <b>strategischen Vision</b> und <b>Liebe zum Detail</b> entwirft er eine innovative und intuitive digitale Plattform, die als zentrale Informationsquelle für das Projekt dienen soll. Seine Arbeit konzentriert sich auf die <b>Optimierung der Benutzererfahrung</b>, um eine reibungslose Kommunikation, einen schnellen Zugriff auf Inhalte und eine professionelle Darstellung zu gewährleisten, die die Arbeit des Teams hervorhebt.",
    nizarDesc: "Nizar begeistert sich für die Welt des Weltraums, von der Ingenieurwissenschaft bis zu den Entdeckungen des Universums, und hat beschlossen, an diesem Wettbewerb teilzunehmen, um sich noch stärker mit dieser Leidenschaft zu verbinden. Derzeit studiert er <b>Informatik</b> und hat zuvor mehrere Elektronikprojekte entwickelt, angefangen mit dem einfachen, aber essenziellen <b>Arduino Uno</b> bis hin zum aktuellen und leistungsstarken <b>ESP32</b>. In diesem Projekt wird er für die Entwicklung der Software der <b>Regelungsalgorithmen</b> verantwortlich sein und sich außerdem der Elektronik widmen, indem er den <b>Flugcomputer</b> des Satelliten entwirft. Seiner Meinung nach: <i>„Wenn die Menschheit mit einem 2-MHz-Computer auf dem Mond landen konnte, dann kann man mit einem Arduino Uno alles machen.“</i>",
    patrizioDesc: "Patrizio Aloisio ist unser <b>Telekommunikationsprofessor</b> und <b>Mentor</b> für dieses Projekt. Mit jahrzehntelanger Erfahrung in der Elektronik ist er die ideale Person, auf die wir uns verlassen können, um unsere Ambitionen zu verwirklichen. Mit seiner technischen Unterstützung und seinem Wissen können wir CanSat schneller entwickeln und umsetzen und gleichzeitig von seiner Erfahrung lernen.",
    patrizioSubHead: "Professor und Mentor",
    simoneSubHead: "COM-Ingenieur",
    skySubHead: "Software-Ingenieur",
    goBackBtn: "Zurück",
    teamSubHead: "ERFAHREN SIE MEHR ÜBER UNSER TEAM!",
    patrizioProfession: "Mentor",
    teamLearnMore: "Mehr erfahren",
    updatesHomeHead: "UPDATES",
    scrollSubHead: "SCROLLEN FÜR MEHR",
    twentyJanTwoFive: "20. JANUAR 2025",
    headTeamAccept: "FÜR CANSAT<br>2024-2025 AUSGEWÄHLT",
    teamFirstUpdate: "Wir sind begeistert und geehrt, bekannt zu geben, dass unser Team für den italienischen CanSat-Wettbewerb 2024-2025 <b>ausgewählt</b> wurde! Dies ist ein <b>ganz besonderer Moment</b>, da er unsere harte Arbeit nach <b>Monaten der Planung</b> bestätigt, und wir sind zuversichtlich, dass <b>wir die Erwartungen nicht enttäuschen</b> und unser Projekt erfolgreich abschließen werden. Jetzt stehen uns Monate fortgeschrittener Entwicklung und Tests bevor, in denen wir versuchen, mögliche Probleme zu identifizieren, die in der Zukunft auftreten könnten. Vielen Dank für euer Vertrauen. Wir sehen uns in Bologna!",
    simoneDesc: "Leidenschaftlich interessiert an <b>Programmierung</b> und <b>praktischer Ingenieurwissenschaft</b>, ist Simone für die <b>Satellitenkommunikation</b> und die <b>Softwareentwicklung</b> im CanSat-Projekt verantwortlich. Er arbeitet daran, eine reibungslose Kommunikation zwischen dem CanSat und der <b>Bodenstation</b> sicherzustellen. Seine Aufgabe besteht darin, die Software zu entwickeln, die Telemetriedaten verarbeitet und überträgt, um eine Echtzeitüberwachung und -analyse der Satellitenleistung zu ermöglichen. Durch die Kombination technischer Fähigkeiten mit einem DIY-Ansatz trägt er zur Innovation und Problemlösung bei, die für eine erfolgreiche CanSat-Mission erforderlich sind.",
    skyDesc: "Sky hat zu diesem Projekt beigetragen, indem er den <b>Kalman-Filter</b> für die <b>Sensor-Datenverarbeitung</b> entwickelt und implementiert hat. Er arbeitete in C++ und testete sowie implementierte den Filter, um die Genauigkeit der Druck-, Höhen- und Beschleunigungsmessungen zu verbessern. Dank dieser Optimierung ist die Datenanalyse während des Fluges zuverlässiger und effektiver geworden.",
    raptorDesc: "Der <b>Raptor Flight Computer</b> ist das Gehirn unseres Projekts und für die Steuerung jedes einzelnen Aspekts des CanSat verantwortlich. Er verfügt über mehrere integrierte Sensoren: BMP280, BME680, ENS210 und CCS811 zur Messung von <b>Temperatur</b>, <b>Druck</b>, <b>flüchtigen organischen Verbindungen</b> (VOC) und <b>Feuchtigkeit</b>; MPU6500, MPU6050 und QMC5883L für <b>Beschleunigungsmesser</b>, <b>Kreisel</b> und <b>Magnetometer</b>. Die gesamte Rechenleistung stammt von einem <b>ESP32-S3</b>. Außerdem gibt es Kommunikationsschnittstellen für die gängigsten Protokolle: <b>UART</b>, <b>I2C</b> und <b>SPI</b>. Das System enthält zudem eine <b>H-Brücke</b> mit dem L293DD zur Steuerung einiger Gleichstrommotoren sowie Stromversorgungen für die ESCs der Brushless-Motoren. Alle Daten werden sowohl an die Bodenstation übertragen als auch im <b>Flash-Speicher</b> an Bord und auf einer <b>SD-Karte</b> gespeichert.",
    teamSecondUpdate: "Wir waren glücklich, am regionalen Event <b>VDA Orienta</b> teilgenommen zu haben, das dieses Jahr zum ersten Mal Mittelschüler bei der Wahl ihrer weiterführenden Schule unterstützte. Als Vertreter des <b>Technischen Instituts I. Manzetti</b>, insbesondere des Fachbereichs <b>Informatik und Telekommunikation</b>, haben wir den Schülern nicht nur eine allgemeine Vorstellung von der Schule gegeben, sondern auch unser CanSat-Projekt vorgestellt, das großes Interesse und Neugier bei ihnen geweckt hat. Wir haben ihnen die Entwicklung hinter einem solchen Projekt gezeigt – von der Website bis zur Prototypen-Hardware –, die uns letztendlich dazu führen wird, einen voll funktionsfähigen und einsatzbereiten Mini-Satelliten zu bauen. Wir können es kaum erwarten, den nächsten Schritt in der Entwicklung zu gehen.",
    fiveFebTwoFive: "05 FEBRUAR 2025",
    headVDAOrienta: "SKYCHASERS BEI VDA ORIENTA"
  },
  fr: {
    howItWorks: "Mission",
    team: "Équipe",
    raptor: "Raptor",
    updates: "Mises à jour",
    contacts: "Contacts",
    theProject: "LE PROJET CANSAT",
    projectDescription: "Le projet CanSat est bien plus qu'une simple expérience éducative : c'est une véritable mission spatiale en miniature. Des étudiants du monde entier sont défiés de concevoir, construire, lancer et opérer un satellite miniature, le <b>CanSat</b>, en reproduisant les étapes d'une mission spatiale réelle : Conception, Construction, Lancement et Mission.",
    homeLearnMore: "En savoir plus",
    followUs: "Suivez-nous",
    position: "Vallée d'Aoste, Italie",
    missioneHomeHead: "MISSION",
    missionHomeSub: "EN SAVOIR PLUS SUR<br>NOTRE PROJET",
    secondaryMissionHead: "MISSION SECONDAIRE",
    secondaryMissionExp: "Notre mission secondaire comprend une série de capteurs pour détecter des données essentielles pour toute mission spatiale digne de ce nom : température et pression (principaux), accéléromètre, gyroscope, magnétomètre, détection de composés organiques volatils, humidité. Un compteur <b>Geiger-Muller</b> sera également présent pour mesurer les radiations ionisantes à différentes altitudes. Un système de stabilisation en vol sera également inclus pour maintenir la stabilité de la rotation du CanSat pendant la descente. Tous les capteurs principaux seront logés dans un <b>Flight Computer</b> que nous concevrons. Tout sera contrôlé par un ESP32. Le disposera de ports de communication pour les protocoles les plus couramment utilisés et d'un GPS intégré. Il comprendra également un pont en H pour contrôler un moteur à courant continu et des alimentations pour les ESC des moteurs brushless nécessaires à la stabilisation en vol. Toutes les données seront transmises à la station au sol et stockées sur une mémoire flash embarquée.",
    filippoDesc: "Filippo est responsable du <b>développement et de la gestion</b> du site web et des réseaux sociaux de ce projet. Avec sa <b>vision stratégique</b> et son <b>attention aux détails</b>, il est chargé de concevoir une plateforme numérique innovante et intuitive, destinée à être le principal point de référence pour les informations du projet. Ses efforts se concentrent sur <b>l’optimisation de l’expérience utilisateur</b>, garantissant une communication fluide, un accès rapide au contenu et une représentation professionnelle qui valorise le travail de l’équipe.",
    nizarDesc: "Nizar est passionné par le monde de l’espace, de l’ingénierie aux découvertes de l’univers, et il a décidé de participer à cette compétition pour se rapprocher encore plus de cette passion. Il étudie actuellement <b>l’informatique</b> et a auparavant créé et développé plusieurs projets en électronique, en commençant par le simple mais essentiel <b>Arduino Uno</b> jusqu’à arriver à l’actuel et puissant <b>ESP32</b>. Dans ce projet, il sera responsable du développement du logiciel des <b>algorithmes de contrôle</b> et consacrera également du temps à l’électronique en concevant l’<b>ordinateur de vol</b> du satellite. Selon lui, <i>« si l’homme est allé sur la Lune avec un ordinateur de 2 MHz, alors avec un Arduino Uno, tout est possible. »</i>",
    patrizioDesc: "Patrizio Aloisio est notre <b>professeur</b> de télécommunications et <b>mentor</b> pour ce projet. Avec des décennies d'expérience en électronique, il est la personne idéale sur laquelle s'appuyer pour réaliser nos ambitions. Avec son soutien technique et ses connaissances, nous pourrons développer et mener à bien le projet CanSat plus rapidement, tout en <b>apprenant de son expérience</b>.",
    patrizioSubHead: "Professeur et Mentor",
    simoneSubHead: "Ingénieur COM",
    skySubHead: "Ingénieur Logiciel",
    goBackBtn: "Retour",
    teamSubHead: "DÉCOUVREZ EN PLUS SUR NOTRE ÉQUIPE !",
    patrizioProfession: "Mentor",
    teamLearnMore: "En savoir plus",
    updatesHomeHead: "MISES À JOUR",
    scrollSubHead: "DÉFILER POUR PLUS",
    twentyJanTwoFive: "20 JANVIER 2025",
    headTeamAccept: "SÉLECTIONNÉS POUR<br>LE CANSAT 2024-2025",
    teamFirstUpdate: "Nous sommes ravis et honorés d’annoncer que notre équipe a été <b>sélectionnée</b> pour la compétition italienne CanSat 2024-2025 ! C’est un <b>moment très spécial</b> car il démontre notre travail acharné après <b>des mois de planification</b>, et nous sommes convaincus que <b>nous ne décevrons pas les attentes</b>, menant notre projet à une conclusion réussie. Maintenant, nous avons devant nous des mois de conception avancée et de tests, en essayant d’identifier tout problème potentiel qui pourrait survenir à l’avenir. Merci à tous pour votre confiance. Rendez-vous à Bologne !",
    simoneDesc: "Passionné par la <b>programmation</b> et l’<b>ingénierie pratique</b>, Simone est responsable de la <b>communication du satellite</b> et du <b>développement logiciel</b> dans le projet CanSat. Il travaille pour assurer une communication fluide entre le CanSat et la <b>station au sol</b>. Son rôle consiste à développer le logiciel qui traite et transmet les données de télémétrie, permettant ainsi le suivi et l’analyse en temps réel des performances du satellite. En combinant compétences techniques et approche DIY, il contribue à l’innovation et à la résolution des problèmes nécessaires au succès de la mission CanSat.",
    skyDesc: "Sky a contribué à ce projet en développant et en implémentant le <b>filtre de Kalman</b> pour le <b>traitement des données des capteurs</b>. En travaillant en C++, il a testé et appliqué le filtre afin d’améliorer la précision des mesures de pression, d’altitude et d’accélération. Grâce à cette optimisation, l’analyse des données en vol est devenue plus fiable et efficace.",
    raptorDesc: "Le <b>Raptor Flight Computer</b> est le cerveau de notre projet, chargé de contrôler chaque aspect du CanSat. Il intègre plusieurs capteurs : BMP280, BME680, ENS210 et CCS811 pour mesurer la <b>température</b>, la <b>pression</b>, les <b>composés organiques volatils</b> (COV) et l’<b>humidité</b> ; MPU6500, MPU6050 et QMC5883L pour l’<b>accéléromètre</b>, le <b>gyroscope</b> et le <b>magnétomètre</b>. Toute la puissance de calcul est fournie par un <b>ESP32-S3</b>. Il y aura également des ports de communication pour les protocoles les plus couramment utilisés : <b>UART</b>, <b>I2C</b> et <b>SPI</b>. Le système comprend aussi un <b>pont en H</b> avec le L293DD pour contrôler certains moteurs à courant continu ainsi que des alimentations pour les ESC des moteurs brushless. Toutes les données seront à la fois transmises au sol et stockées dans la <b>mémoire flash</b> embarquée ainsi que sur une <b>carte SD</b>.",
    teamSecondUpdate: "Nous avons été heureux de participer à l'événement régional <b>VDA Orienta</b>, qui cette année, pour la première fois, a guidé les élèves du collège dans le choix de leur lycée. En représentant l'<b>Institut Technique I. Manzetti</b>, et plus particulièrement la filière <b>Informatique et Télécommunications</b>, nous avons offert aux élèves non seulement une vision générale de l'école, mais aussi une présentation de notre projet CanSat, suscitant curiosité et intérêt parmi eux. Nous leur avons montré les différentes étapes du développement d'un tel projet, du site web au matériel de prototypage, qui nous mènera finalement à construire un mini-satellite pleinement fonctionnel et opérationnel. Nous avons hâte de passer à la prochaine étape du développement.",
    fiveFebTwoFive: "05 FÉVRIER 2025",
    headVDAOrienta: "SKYCHASERS À VDA ORIENTA"
  },
  es: {
    howItWorks: "Misión",
    team: "Equipo",
    raptor: "Raptor",
    updates: "Actualizaciones",
    contacts: "Contactos",
    theProject: "EL PROYECTO CANSAT",
    projectDescription: "El proyecto CanSat es mucho más que una simple experiencia educativa: es una auténtica misión espacial en miniatura. Estudiantes de todo el mundo son desafiados a diseñar, construir, lanzar y operar un satélite en miniatura, el <b>CanSat</b>, replicando las fases de una misión espacial real: Diseño, Construcción, Lanzamiento y Misión.",
    homeLearnMore: "Más información",
    followUs: "Síguenos",
    position: "Valle de Aosta, Italia",
    missioneHomeHead: "MISIÓN",
    missionHomeSub: "APRENDE MÁS SOBRE<br>NUESTRO PROYECTO",
    secondaryMissionHead: "MISIÓN SECUNDARIA",
    secondaryMissionExp: "Nuestra misión secundaria incluye una serie de sensores para detectar datos esenciales para cualquier misión espacial respetable: temperatura y presión (principales), acelerómetro, giroscopio, magnetómetro, detección de compuestos orgánicos volátiles, y humedad. También habrá un contador <b>Geiger-Muller</b> para medir radiaciones ionizantes a diferentes altitudes. Además, contará con un sistema de estabilización en vuelo para mantener estable el movimiento del CanSat durante el descenso. Todos los sensores principales estarán alojados en un <b>Flight Computer</b> que diseñaremos. Todo será controlado por un ESP32. El tendrá puertos de comunicación para los protocolos más utilizados y un GPS integrado. También incluirá un puente H para controlar un motor de corriente continua y fuentes de alimentación para los ESC de los motores brushless necesarios para la estabilización en vuelo. Todos los datos serán transmitidos a la estación base y almacenados en una memoria flash a bordo.",
    filippoDesc: "Filippo es responsable del <b>desarrollo y gestión</b> del sitio web y las redes sociales de este proyecto. Con su <b>visión estratégica</b> y <b>atención al detalle</b>, se encarga de diseñar una plataforma digital innovadora e intuitiva, destinada a ser el principal punto de referencia para la información del proyecto. Sus esfuerzos se centran en <b>optimizar la experiencia del usuario</b>, asegurando una comunicación fluida, un acceso rápido al contenido y una representación profesional que resalte el trabajo del equipo.",
    nizarDesc: "A Nizar le apasiona el mundo del espacio, desde la ingeniería hasta los descubrimientos del universo, y ha decidido participar en esta competición para conectar aún más con esta pasión. Actualmente estudia <b>informática</b> y anteriormente ha creado y desarrollado varios proyectos de electrónica, comenzando con el simple pero esencial <b>Arduino Uno</b> hasta llegar al actual y potente <b>ESP32</b>. En este proyecto, se encargará del desarrollo del software de los <b>algoritmos de control</b> y también dedicará tiempo a la electrónica diseñando la <b>Computadora de Vuelo</b> del satélite. Según él, <i>“si el ser humano llegó a la Luna con un ordenador de 2 MHz, entonces con un Arduino Uno se puede hacer todo.”</i>",
    patrizioDesc: "Patrizio Aloisio es nuestro <b>profesor</b> de telecomunicaciones y <b>mentor</b> en este proyecto. Con décadas de experiencia en electrónica, es la persona ideal en la que apoyarse para alcanzar nuestras ambiciones. Con su apoyo técnico y conocimientos, podremos desarrollar y avanzar con CanSat más rápido, mientras también <b>aprendemos de su experiencia</b>.",
    patrizioSubHead: "Profesor y Mentor",
    simoneSubHead: "Ingeniero COM",
    skySubHead: "Ingeniero de Software",
    goBackBtn: "Regresar",
    teamSubHead: "¡DESCUBRE MÁS SOBRE NUESTRO EQUIPO!",
    patrizioProfession: "Mentor",
    teamLearnMore: "Más información",
    updatesHomeHead: "ACTUALIZACIONES",
    scrollSubHead: "DESPLAZA HACIA ABAJO",
    twentyJanTwoFive: "20 DE ENERO DE 2025",
    headTeamAccept: "SELECCIONADOS PARA EL CANSAT<br>2024-2025",
    teamFirstUpdate: "¡Estamos encantados y honrados de anunciar que nuestro equipo ha sido <b>seleccionado</b> para la competencia italiana CanSat 2024-2025! Este es un <b>momento muy especial</b> porque demuestra nuestro arduo trabajo tras <b>meses de planificación</b>, y estamos seguros de que <b>no decepcionaremos las expectativas</b>, llevando nuestro proyecto a una conclusión exitosa. Ahora nos esperan meses de diseño avanzado y pruebas, tratando de identificar cualquier problema que pueda surgir en el futuro. Gracias a todos por su confianza. ¡Nos vemos en Bolonia!",
    simoneDesc: "Apasionado por la <b>programación</b> y la <b>ingeniería práctica</b>, Simone es responsable de la <b>comunicación del satélite</b> y el <b>desarrollo de software</b> en el proyecto CanSat. Trabaja para garantizar una comunicación fluida entre el CanSat y la <b>estación terrestre</b>. Su rol consiste en desarrollar el software que procesa y transmite los datos de telemetría, permitiendo el monitoreo y análisis en tiempo real del rendimiento del satélite. Combinando habilidades técnicas con un enfoque DIY, contribuye a la innovación y resolución de problemas necesarios para una misión CanSat exitosa.",
    skyDesc: "Sky contribuyó a este proyecto desarrollando e implementando el <b>filtro de Kalman</b> para el <b>procesamiento de datos de los sensores</b>. Trabajando en C++, probó y aplicó el filtro para mejorar la precisión de las mediciones de presión, altitud y aceleración. Gracias a esta optimización, el análisis de datos durante el vuelo se ha vuelto más fiable y efectivo.",
    raptorDesc: "El <b>Raptor Flight Computer</b> es el cerebro de nuestro proyecto, responsable de controlar cada aspecto del CanSat. Cuenta con varios sensores integrados: BMP280, BME680, ENS210 y CCS811 para la medición de <b>temperatura</b>, <b>presión</b>, <b>compuestos orgánicos volátiles</b> (VOC) y <b>humedad</b>; MPU6500, MPU6050 y QMC5883L para el <b>acelerómetro</b>, <b>giroscopio</b> y <b>magnetómetro</b>. Toda la potencia de cálculo proviene de un <b>ESP32-S3</b>. También habrá puertos de comunicación para los protocolos más utilizados: <b>UART</b>, <b>I2C</b> y <b>SPI</b>. El sistema también incluye un <b>puente H</b> con el L293DD para controlar algunos motores de corriente continua y fuentes de alimentación para los ESC de los motores brushless. Todos los datos serán transmitidos a tierra y almacenados tanto en la <b>memoria flash</b> a bordo como en una <b>tarjeta SD</b>.",
    teamSecondUpdate: "Estuvimos encantados de haber participado en el evento regional <b>VDA Orienta</b>, que este año, por primera vez, guió a los estudiantes de secundaria en la elección de su escuela superior. En representación del <b>Instituto Técnico I. Manzetti</b>, y más específicamente del área de <b>Informática y Telecomunicaciones</b>, brindamos a los estudiantes no solo una visión general de la escuela, sino también una presentación de nuestro proyecto CanSat, despertando curiosidad e interés entre ellos. Les mostramos el desarrollo detrás de un proyecto de este tipo, desde la página web hasta el hardware de prototipado, que finalmente nos llevará a construir un mini-satélite completamente funcional y operativo. Estamos ansiosos por dar el siguiente paso en el desarrollo.",
    fiveFebTwoFive: "05 FEBRERO 2025",
    headVDAOrienta: "SKYCHASERS EN VDA ORIENTA"
  },
  };
  
  // Navbar
  const menu = document.querySelector("#menu-icon");
  const navbar = document.querySelector(".navbar");
  
  menu.onclick = () => {
    navbar.classList.toggle("active");
  };
  
  window.onscroll = () => {
    navbar.classList.remove("active");
  };

  // hide navbare when user scroll
  let lastScrollY = window.scrollY;

  window.addEventListener("scroll", () => {
      let currentScrollY = window.scrollY;
      const header = document.getElementById("header");

      if (currentScrollY > lastScrollY) {
          // Scrolling down -> Hide navbar
          header.classList.add("hide");
      } else {
          // Scrolling up -> Show navbar
          header.classList.remove("hide");
      }

      lastScrollY = currentScrollY;
  });
  
  // Dark Mode
  const darkmode = document.querySelector("#darkmode");
  const isDarkModeEnabled = localStorage.getItem("darkMode") === "enabled";
  
  darkmode.classList.replace(isDarkModeEnabled ? "bx-moon" : "bx-sun", isDarkModeEnabled ? "bx-sun" : "bx-moon");
  document.body.classList.toggle("active", isDarkModeEnabled);
  
  darkmode.onclick = () => {
    const isMoon = darkmode.classList.contains("bx-moon");
    darkmode.classList.replace(isMoon ? "bx-moon" : "bx-sun", isMoon ? "bx-sun" : "bx-moon");
    document.body.classList.toggle("active", isMoon);
    localStorage.setItem("darkMode", isMoon ? "enabled" : "disabled");
  };
  
  // Multi-lingua
  document.addEventListener("DOMContentLoaded", () => {
    const languageIcon = document.getElementById("language-icon");
    const languageMenu = document.getElementById("language-menu");
    const savedLanguage = localStorage.getItem("language") || "en";
  
    languageIcon.addEventListener("click", () => {
      languageMenu.style.display = languageMenu.style.display === "block" ? "none" : "block";
    });
  
    document.addEventListener("click", (event) => {
      if (!languageIcon.contains(event.target) && !languageMenu.contains(event.target)) {
        languageMenu.style.display = "none";
      }
    });
  
    setLanguage(savedLanguage);
  
    languageMenu.addEventListener("click", (event) => {
      if (event.target.tagName === "LI") {
        const selectedLanguage = event.target.getAttribute("data-lang");
        setLanguage(selectedLanguage);
        localStorage.setItem("language", selectedLanguage);
        languageMenu.style.display = "none";
      }
    });
  
    function setLanguage(language) {
      document.querySelectorAll("[data-translate]").forEach((element) => {
        const key = element.getAttribute("data-translate");
        if (translations[language][key]) {
          element.innerHTML = translations[language][key];
        }
      });
    }
  });
  
  
  // Scroll Reveal
  const sr = ScrollReveal({
    origin: "top",
    distance: "40px",
    duration: 2000,
    reset: false,
  });
  
  sr.reveal(
    `.home-text, .home-img,
     .about-img, .about-text,
     .project-text, .project-img,
     .box, .s-box,
     .btn, .connect-text,
     .contact-box, .updates-text,
     .scroll-arrow`,
    { interval: 200 }
  );
  
