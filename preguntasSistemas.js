window.allQuestions = [
  {
    q: "¿Cómo se llama la consola de Windows que permite administrar usuarios?",
    options: [
      "Lusmerger.msc",
      "Lusrmgr.mcs",
      "Lusrmgr.msc",
      "No se pueden administrar usuarios",
    ],
    correct: 2,
    explanation:
      "Lusrmgr.msc es la consola de administración de usuarios y grupos locales.",
  },

  {
    q: "¿En qué fichero de Linux se almacenan las contraseñas encriptadas de los usuarios?",
    options: ["/etc/passwd", "/etc/shadow", "/etc/password", "/etc/users"],
    correct: 1,
    explanation: "/etc/shadow almacena las contraseñas cifradas.",
  },

  {
    q: "¿Se puede instalar Debian de manera gráfica?",
    options: [
      "No",
      "Depende del software de virtualización",
      "Depende de la versión",
      "Sí",
    ],
    correct: 3,
    explanation: "Debian incluye instalador gráfico.",
  },

  {
    q: "El comando cat hola > alumnos.txt añade contenido a un fichero y además...",
    options: [
      "Lo borra",
      "Lo ejecuta",
      "Reescribe el contenido si ya tiene algo",
      "Añade contenido al final",
    ],
    correct: 2,
    explanation: "El operador > sobrescribe el archivo.",
  },

  {
    q: "El directorio C:\\system32 pertenece a:",
    options: ["Windows", "Linux", "GNU", "Todas las anteriores"],
    correct: 0,
    explanation: "System32 es un directorio del sistema Windows.",
  },

  {
    q: "En Linux la opción -l del comando ls:",
    options: [
      "Muestra el contenido en formato largo",
      "Ordena por fecha",
      "Invierte el orden",
      "Muestra contenido oculto",
    ],
    correct: 0,
    explanation: "-l muestra detalles extendidos.",
  },

  {
    q: "Para crear un directorio alumnos en Linux en la ruta actual usamos el comando...",
    options: [
      "mkdir -r alumnos",
      "mkdir alumnos",
      "rmdir alumnos",
      "rmdir -r alumnos",
    ],
    correct: 1,
    explanation: "mkdir crea directorios.",
  },

  {
    q: "En Windows, la gestión de archivos se realiza:",
    options: [
      "Con comandos",
      "Con el Explorador de archivos",
      "Con el Administrador de discos",
      "Todas son incorrectas",
    ],
    correct: 1,
    explanation: "El Explorador de archivos es la herramienta principal.",
  },

  {
    q: "Enlaces que reutilizan el nombre de un inodo asignándole nombres distintos:",
    options: [
      "Enlaces duros",
      "Enlaces simbólicos",
      "Enlaces blandos",
      "Ninguna es correcta",
    ],
    correct: 0,
    explanation: "Los enlaces duros comparten inodo.",
  },

  {
    q: "Único RAID sin redundancia:",
    options: ["RAID 0", "RAID 1", "RAID 5", "Ninguna"],
    correct: 0,
    explanation: "RAID 0 solo distribuye datos sin redundancia.",
  },

  {
    q: "Tipo de fichero que NO existe en Linux:",
    options: [
      "Regulares",
      "Enlaces",
      "Dispositivos",
      "Ninguna de las anteriores",
    ],
    correct: 3,
    explanation: "Linux soporta todos esos tipos.",
  },

  {
    q: "Indica la ruta desde el directorio de trabajo actual:",
    options: [
      "Ruta directa",
      "Ruta relativa",
      "Ruta indirecta",
      "Ruta absoluta",
    ],
    correct: 1,
    explanation: "La ruta relativa parte del directorio actual.",
  },

  {
    q: "El volumen reflejado en Windows corresponde al RAID:",
    options: ["0", "1", "5", "Todas son incorrectas"],
    correct: 1,
    explanation: "El volumen reflejado es RAID 1.",
  },

  {
    q: "El grupo predefinido nobody:",
    options: [
      "No posee privilegios",
      "Posee privilegios sobre dispositivos",
      "Grupo de usuarios estándar",
      "No existe tal grupo",
    ],
    correct: 0,
    explanation: "nobody es un usuario/grupo sin privilegios.",
  },

  {
    q: "En Linux, el comando usermod permite:",
    options: [
      "Crear un usuario",
      "Modificar un usuario",
      "Eliminar un usuario",
      "Todas son incorrectas",
    ],
    correct: 1,
    explanation: "usermod modifica usuarios existentes.",
  },

  {
    q: "Niveles de permisos en Linux:",
    options: [
      "Permisos del propietario",
      "Permisos del grupo",
      "Permisos del resto de usuarios",
      "Todas son correctas",
    ],
    correct: 3,
    explanation: "Linux divide permisos en esos tres niveles.",
  },

  {
    q: "La opción -g del comando useradd:",
    options: [
      "Asigna el grupo principal del usuario",
      "Lista grupos secundarios",
      "Establece el directorio home",
      "Todas son incorrectas",
    ],
    correct: 0,
    explanation: "-g define el grupo principal.",
  },

  {
    q: "Los permisos 0666 y 0777 son:",
    options: [
      "Permisos originales por defecto de un archivo y un directorio respectivamente",
      "Permisos por defecto de un directorio y un archivo",
      "Permisos no otorgables de archivo y directorio",
      "Permisos no otorgables de directorio y archivo",
    ],
    correct: 0,
    explanation: "0666 es por defecto para archivos y 0777 para directorios.",
  },

  {
    q: "No es un grupo del sistema operativo por defecto:",
    options: ["Gestor", "Administrador", "Usuario", "Usuario avanzado"],
    correct: 0,
    explanation: "Gestor no es un grupo estándar.",
  },

  {
    q: "Comando para asignar contraseñas a usuarios:",
    options: [
      "passwd",
      "openssl passwd",
      "Las dos anteriores son correctas",
      "Todas son incorrectas",
    ],
    correct: 2,
    explanation: "Ambos comandos pueden generar contraseñas.",
  },

  {
    q: "Comando para cambiar permisos en Linux:",
    options: ["chmod", "umask", "umod", "Todas son incorrectas"],
    correct: 0,
    explanation: "chmod modifica permisos.",
  },

  {
    q: "Usuario con privilegios para modificar ficheros de configuración:",
    options: ["Gestor", "Administrador", "Usuario", "Usuario avanzado"],
    correct: 1,
    explanation: "El administrador tiene privilegios elevados.",
  },

  {
    q: "Usuarios que iniciarán sesión ocasionalmente y con permisos justos:",
    options: ["Gestor", "Administrador", "Usuario", "Ninguno"],
    correct: 2,
    explanation: "El usuario estándar tiene permisos limitados.",
  },
  // ===============
  // REDES
  // ===============
  {
    q: "Indica cuál de los siguientes es un dispositivo de interconexión de red:",
    options: ["RJ-45", "Ordenador", "Switch", "BIOS"],
    correct: 2,
    explanation: "Un switch interconecta dispositivos en una red.",
  },

  {
    q: "El protocolo POP3 es empleado en:",
    options: [
      "El correo electrónico",
      "Mensajería instantánea",
      "Transferencia de ficheros",
      "Software antimalware",
    ],
    correct: 0,
    explanation: "POP3 se usa para recibir correo electrónico.",
  },

  {
    q: "El protocolo IP:",
    options: [
      "Está orientado a la conexión",
      "No es fiable",
      "Requiere cableado",
      "Todas son incorrectas",
    ],
    correct: 1,
    explanation: "IP no garantiza entrega ni orden.",
  },

  {
    q: "El tipo de red coaxial se basa en:",
    options: ["El espacio", "La distribución", "El cableado", "El diseño"],
    correct: 2,
    explanation: "El coaxial es un tipo de cableado.",
  },

  {
    q: "Es un tipo de dirección IP:",
    options: [
      "Estática",
      "Dinámica",
      "Alternativa",
      "Todas las anteriores son correctas",
    ],
    correct: 3,
    explanation: "Las tres son tipos válidos de dirección IP.",
  },

  {
    q: "Existen comandos para modificar y monitorizar redes en Linux, uno de ellos es:",
    options: ["lshw", "lsdc", "lswr", "lswd"],
    correct: 0,
    explanation: "lshw muestra información del hardware, incluida la red.",
  },

  {
    q: "La cabecera en IPv6 posee:",
    options: ["20 bytes", "30 bytes", "40 bytes", "50 bytes"],
    correct: 2,
    explanation: "La cabecera fija de IPv6 es de 40 bytes.",
  },

  {
    q: "Mediante esta tecnología podemos crear una red inalámbrica con un smartphone:",
    options: ["Coaxial", "TCP/IP", "Wi-Fi Direct", "WPA"],
    correct: 2,
    explanation: "Wi-Fi Direct permite conexión directa entre dispositivos.",
  },

  {
    q: "No es un diseño de una topología de red:",
    options: [
      "Estrella",
      "Árbol",
      "Malla",
      "Todas las anteriores son correctas",
    ],
    correct: 3,
    explanation: "Todas son topologías válidas.",
  },

  {
    q: "No es uno de los protocolos principales de red:",
    options: [
      "Ethernet",
      "UDP",
      "TCP/IP",
      "Todas las anteriores son incorrectas",
    ],
    correct: 3,
    explanation: "Ethernet, UDP y TCP/IP sí son protocolos principales.",
  },

  {
    q: "Las redes P2P hacen referencia a...",
    options: ["Pair top pair", "Peer to peer", "Point to point", "Poe to poe"],
    correct: 1,
    explanation: "P2P significa peer to peer.",
  },

  {
    q: "Las tarjetas de red pueden ser:",
    options: [
      "Solo de Windows",
      "Solo de Linux",
      "Cableadas únicamente",
      "Cableadas e inalámbricas",
    ],
    correct: 3,
    explanation: "Las NIC pueden ser cableadas o inalámbricas.",
  },

  {
    q: "Una NIC también se puede llamar:",
    options: [
      "Adaptador de video",
      "Adaptador de internet",
      "Tarjeta de sonido",
      "Adaptador de pantalla",
    ],
    correct: 1,
    explanation: "NIC es un adaptador de red.",
  },
  // ===============
  // HARDWARE
  // ===============

  {
    q: "Las placas base se guían por los:",
    options: [
      "Factores de forma",
      "Zócalos del microprocesador",
      "Conectores internos",
      "Conectores externos",
    ],
    correct: 0,
    explanation: "Los factores de forma definen tamaño y disposición.",
  },

  {
    q: "Los medios de almacenamiento Flash son:",
    options: [
      "Fuentes de alimentación ópticas",
      "Discos duros mecánicos y cintas",
      "Discos duros SSD y tarjetas de memoria",
      "Ninguna es correcta",
    ],
    correct: 2,
    explanation: "Los SSD y tarjetas usan memoria flash.",
  },

  {
    q: "Los principales voltajes de un dispositivo electrónico son:",
    options: ["3.3 V", "12 V", "5 V", "Todas son correctas"],
    correct: 3,
    explanation: "Los tres voltajes son habituales en hardware.",
  },

  {
    q: "Los tipos de dispositivos periféricos son:",
    options: [
      "Dispositivos de entrada",
      "Dispositivos de salida",
      "Dispositivos de entrada y salida",
      "Todas son correctas",
    ],
    correct: 3,
    explanation: "Existen periféricos de entrada, salida y mixtos.",
  },

  {
    q: "Un hardware está formado, entre otros componentes, por:",
    options: ["Bus de datos", "Microprocesador", "Host", "VirtualBox"],
    correct: 1,
    explanation: "El microprocesador es un componente esencial del hardware.",
  },

  {
    q: "Si una BIOS enciende una luz LED para indicar un problema, es una señal...",
    options: [
      "Sonora",
      "Visual",
      "Depende del color de la luz",
      "Una BIOS no puede emitir señales mediante LEDs",
    ],
    correct: 1,
    explanation: "Una luz LED es una señal visual.",
  },
  // ===============
  // SEGURIDAD
  // ===============

  {
    q: "El más dañino de todos los tipos de malware. Se usa para cifrar todo el sistema y quitarles el acceso a los usuarios:",
    options: ["Scumware", "Exploit", "Ransomware", "Adware"],
    correct: 2,
    explanation: "El ransomware cifra los datos y bloquea el acceso.",
  },

  {
    q: "Es importante que un antivirus...",
    options: [
      "Consuma mucha CPU",
      "No se actualice",
      "Consuma poca memoria",
      "Ocupe mucho espacio en disco",
    ],
    correct: 2,
    explanation: "Un buen antivirus debe ser ligero.",
  },

  {
    q: "No es una función del antivirus:",
    options: [
      "Prevención de infección",
      "Análisis del equipo",
      "Detección de virus",
      "Recuperación de archivos dañados",
    ],
    correct: 3,
    explanation: "Los antivirus no reparan archivos dañados.",
  },

  {
    q: "Un algoritmo simétrico es:",
    options: ["RCA2", "ASES", "ICMP", "AES"],
    correct: 3,
    explanation: "AES es un algoritmo de cifrado simétrico.",
  },

  {
    q: "Un algoritmo de clave pública es:",
    options: ["RSA", "DSA", "ECC", "Todas son correctas"],
    correct: 3,
    explanation: "RSA, DSA y ECC son algoritmos de clave pública.",
  },

  {
    q: "El SID es:",
    options: [
      "Un código que da acceso al sistema",
      "Un sistema de autenticación de Windows",
      "Un identificador único asociado a un usuario",
      "Es lo mismo que el SAT",
    ],
    correct: 2,
    explanation: "El SID identifica de forma única a un usuario o grupo.",
  },

  {
    q: "La administración remota es:",
    options: [
      "Acción de administrar y asegurar la seguridad del sistema a distancia",
      "Técnica para cifrado de archivos",
      "Dispositivo para analizar tráfico entrante",
      "Ninguna es correcta",
    ],
    correct: 0,
    explanation:
      "La administración remota permite gestionar sistemas a distancia.",
  },

  {
    q: "La administración remota:",
    options: [
      "Solo se puede usar con una herramienta",
      "Viene incorporada en Windows mediante tres herramientas",
      "No permite gestionar seguridad",
      "Todas son correctas",
    ],
    correct: 1,
    explanation:
      "Windows incluye varias herramientas de administración remota.",
  },

  {
    q: "La herencia se deshabilita desde:",
    options: [
      "Propiedades del usuario",
      "Propiedades del recurso",
      "No se puede deshabilitar",
      "Desde el CMD",
    ],
    correct: 1,
    explanation: "La herencia se gestiona desde las propiedades del recurso.",
  },

  {
    q: "Las directivas de seguridad del sistema se dividen en:",
    options: [
      "Directivas de dominio y red",
      "Directivas locales y de red",
      "A y B son correctas",
      "Ninguna es correcta",
    ],
    correct: 3,
    explanation: "Las directivas no se clasifican así.",
  },

  {
    q: "Elementos que forman parte del SAT:",
    options: [
      "Lista de derechos del usuario",
      "SID del usuario",
      "SID de los grupos a los que pertenece",
      "Todas son correctas",
    ],
    correct: 3,
    explanation: "El SAT incluye derechos y SIDs del usuario y sus grupos.",
  },

  {
    q: "Un privilegio es:",
    options: [
      "Un apartado de los derechos que indica acciones no cubiertas por otros derechos",
      "Identificación única de Windows",
      "Lista de permisos de un recurso",
      "Permiso de control total",
    ],
    correct: 0,
    explanation: "Los privilegios permiten acciones especiales del sistema.",
  },
  // =================
  // VIRTUALIZACIÓN
  // =================

  {
    q: "El tercer paso para crear una máquina virtual de Windows 10 es:",
    options: [
      "Seleccionar ISO de Windows 10 como nuevo CD",
      "Instalar Windows 10 configurando los aspectos básicos",
      "Instalar las guest additions",
      "Darle un nombre a la máquina virtual",
    ],
    correct: 1,
    explanation:
      "Tras crear la VM y montar la ISO, se configuran los aspectos básicos.",
  },

  {
    q: "Indica qué tipo de software es VMware Workstation:",
    options: [
      "Software libre",
      "Software propietario",
      "Software totalmente gratuito",
      "Software incremental",
    ],
    correct: 1,
    explanation: "VMware Workstation es software propietario.",
  },

  {
    q: "Pro, Player y Fusion son versiones del siguiente software privativo de virtualización:",
    options: ["VMWare Workstation", "VirtualBox", "KVM", "Aviat Design"],
    correct: 0,
    explanation:
      "VMware distribuye sus productos en versiones Pro, Player y Fusion.",
  },

  {
    q: "Un ejemplo de buen nombre para una máquina virtual es:",
    options: ["VRSTFVM", "VirtualBox", "Windows 10 - Cliente", "Linux"],
    correct: 2,
    explanation: "Un nombre claro identifica el sistema y su función.",
  },

  {
    q: "Programa de Windows que permite crear un USB de arranque:",
    options: ["Rufus", "Debian", "Windows 11", "BIOS"],
    correct: 0,
    explanation: "Rufus permite crear USBs booteables.",
  },
  // ===========================
  // COPIAS / RAID / CLONACIÓN
  // ===========================

  {
    q: "¿Se pueden restaurar copias de seguridad incrementales y diferenciales al mismo tiempo?",
    options: [
      "Sí y debe hacerse",
      "No se debe",
      "No",
      "No se pueden restaurar bajo ningún concepto",
    ],
    correct: 1,
    explanation: "No deben mezclarse tipos de copia en la restauración.",
  },

  {
    q: "En la clonación de un equipo:",
    options: [
      "Solo podemos clonar una partición",
      "Solo podemos clonar el disco entero",
      "Podemos clonar tanto una partición como el disco entero",
      "Todas las anteriores son incorrectas",
    ],
    correct: 2,
    explanation: "La clonación permite copiar particiones o discos completos.",
  },

  {
    q: "No es un tipo de copia:",
    options: ["Completa", "Decreciente", "Incremental", "Diferencial"],
    correct: 1,
    explanation: "La copia decreciente no existe como tipo de copia.",
  },

  {
    q: "Único RAID sin redundancia:",
    options: ["RAID 0", "RAID 1", "RAID 5", "Ninguna"],
    correct: 0,
    explanation: "RAID 0 distribuye datos sin redundancia.",
  },

  {
    q: "Es un sistema RAID anidado:",
    options: [
      "RAID 0",
      "RAID 1",
      "RAID 5",
      "Todas las anteriores son incorrectas",
    ],
    correct: 3,
    explanation: "Los RAID anidados son combinaciones como RAID 10 o RAID 01.",
  },

  {
    q: "Puede que sea importante realizar esta acción antes de instalar un sistema operativo:",
    options: [
      "Copia de seguridad",
      "Instalación nativa",
      "Instalación por red",
      "Instalación dual",
    ],
    correct: 0,
    explanation: "Hacer copia de seguridad evita pérdida de datos.",
  },
  // ======================================
  // SOFTWARE / LICENCIAS / OFIMÁTICA
  // ======================================

  {
    q: "Conjunto de normas donde todos los derechos de la obra son del propietario:",
    options: [
      "Copyright",
      "Copyleft",
      "Creative Commons",
      "Todas son incorrectas",
    ],
    correct: 0,
    explanation: "El copyright otorga todos los derechos al autor.",
  },

  {
    q: "Las aplicaciones médicas:",
    options: [
      "Nunca serán consideradas de ofimática",
      "No pueden considerarse ofimáticas",
      "Sí son ofimáticas, aunque especializadas",
      "Todas son incorrectas",
    ],
    correct: 2,
    explanation: "Son ofimáticas adaptadas al ámbito sanitario.",
  },

  {
    q: "Las herramientas ofimáticas:",
    options: [
      "Están destinadas a uso doméstico",
      "Siempre son de propósito general",
      "Existen tanto de propósito general como específicas",
      "Todas son incorrectas",
    ],
    correct: 2,
    explanation: "Hay herramientas generales y otras especializadas.",
  },

  {
    q: "No es un tipo de licencia:",
    options: [
      "Copyright",
      "Copyleft",
      "Creative Commons",
      "Todas las anteriores son incorrectas",
    ],
    correct: 3,
    explanation: "Las tres son tipos válidos de licencia.",
  },

  {
    q: "Qué tipo de aplicación es MySQL:",
    options: [
      "Procesador de texto",
      "Base de datos",
      "Presentación gráfica",
      "Todas son incorrectas",
    ],
    correct: 1,
    explanation: "MySQL es un sistema gestor de bases de datos.",
  },

  {
    q: "Un tipo de software es:",
    options: [
      "Software de aplicación",
      "Software de comunicación",
      "Software de almacenamiento",
      "Ninguna es correcta",
    ],
    correct: 0,
    explanation: "El software de aplicación permite realizar tareas concretas.",
  },
];
