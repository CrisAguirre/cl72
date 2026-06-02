/**
 * Curso Comprensión Lectora 7 — 8 unidades (Contenido del Curso en Línea).
 * Estructura pedagógica: inicio → desarrollo → cierre → evaluación (plan de asignatura).
 */

const q = (id, prompt, options, correctOptionIndex) => ({ id, prompt, options, correctOptionIndex });

const course = {
  courseId: 'cl7-2026',
  title: 'Comprensión Lectora — Grado Séptimo',
  description: 'Curso virtual de 8 unidades para fortalecer comprensión lectora en niveles semántico, sintáctico y pragmático, con recursos digitales y evaluaciones formativas.',
  grade: '7',
  durationWeeks: 4,
  passPercentage: 70,
  activities: [
    {
      activityId: 1,
      unit: 'semantico',
      title: 'Introducción al uso de herramientas de IA',
      objective: 'Identificar elementos explícitos del texto y comprender el uso básico de IA como apoyo académico.',
      startInstructions: 'Lee la presentación de herramientas de IA y explica con tus palabras qué es la inteligencia artificial y cómo puede apoyar la lectura.',
      developmentInstructions: 'Trabaja la lectura de Las Hormigas: identifica al menos 10 palabras clave y organízalas en una nube de palabras. Relaciona cada palabra con un fragmento del texto.',
      closureInstructions: 'Responde el quiz formativo de cierre con tu equipo y registra una reflexión breve sobre qué aprendiste del nivel semántico.',
      resources: [
        { type: 'genially', title: 'Presentación herramientas IA', url: 'https://view.genially.com/696fb0fddc40bdee09d29216/presentation-herramientas-ia' },
        { type: 'calameo', title: 'Lectura Las Hormigas', url: 'https://www.calameo.com/books/007604388d53541762386' }
      ],
      quizQuestions: [
        q(1, 'En el nivel semántico de la comprensión lectora se trabaja principalmente:', ['La entonación oral', 'El significado de palabras y la idea global del texto', 'La puntuación exclusivamente', 'El tamaño de la letra'], 1),
        q(2, 'Una nube de palabras a partir de Las Hormigas sirve para:', ['Decorar la clase', 'Visualizar términos clave y el tema central del texto', 'Sustituir la lectura completa', 'Evaluar solo ortografía'], 1),
        q(3, 'Usar IA como apoyo académico implica:', ['Copiar sin revisar', 'Formular preguntas claras y contrastar la respuesta con el texto', 'Evitar leer el texto fuente', 'Eliminar la reflexión del estudiante'], 1),
        q(4, 'La idea principal de un texto es:', ['Un detalle al azar', 'La idea global que organiza el mensaje', 'Solo el título', 'La opinión personal sin evidencia'], 1),
        q(5, 'Identificar palabras clave ayuda al lector a:', ['Memorizar sin comprender', 'Anticipar y recuperar el contenido esencial', 'Omitir párrafos', 'No hacer inferencias'], 1)
      ]
    },
    {
      activityId: 2,
      unit: 'semantico',
      title: 'Herramientas y tips para generar prompt',
      objective: 'Usar prompts claros para obtener información pertinente y fortalecer la comprensión del texto.',
      startInstructions: 'Revisa la presentación de conceptos de prompt y anota dos reglas para redactar instrucciones claras a la IA.',
      developmentInstructions: 'Construye tres prompts para resolver una situación académica real (por ejemplo, resumir, comparar o explicar un párrafo) y compara los resultados.',
      closureInstructions: 'Comparte en una reflexión qué aprendiste sobre ventajas y límites del uso de IA en comprensión lectora.',
      resources: [
        { type: 'canva', title: 'Conceptos de Prompt', url: 'https://www.canva.com/design/DAG--Eg9Lso/' },
        { type: 'canva', title: 'Documento editable de trabajo', url: 'https://www.canva.com/design/DAG_hHwGRko/' }
      ],
      quizQuestions: [
        q(1, 'Un prompt efectivo para comprensión lectora debe ser:', ['Ambiguo y muy corto', 'Claro, con contexto y propósito definido', 'Solo una palabra', 'Sin mencionar el texto'], 1),
        q(2, 'Al pedir a la IA un resumen, el estudiante debe:', ['Aceptarlo sin leer el original', 'Verificar contra el texto fuente', 'Inventar datos nuevos', 'Omitir citas'], 1),
        q(3, 'Una limitación del uso de IA en lectura es:', ['Que siempre sustituye al docente', 'Puede generar información imprecisa si no se contrasta', 'Que prohíbe leer', 'Que elimina el nivel pragmático'], 1),
        q(4, 'Incluir el fragmento o tema del texto en el prompt ayuda a:', ['Confundir al modelo', 'Obtener respuestas más pertinentes', 'Evitar la comprensión', 'No usar vocabulario'], 1),
        q(5, 'Comparar tres prompts distintos permite:', ['Trabajar sin criterio', 'Analizar cuál produce mejores resultados para el propósito', 'Eliminar la lectura', 'Solo copiar'], 1)
      ]
    },
    {
      activityId: 3,
      unit: 'semantico',
      title: 'Creación de fichas interactivas en Liveworksheets',
      objective: 'Diseñar fichas interactivas sencillas para reforzar la comprensión explícita de la información.',
      startInstructions: 'Observa el tutorial de Liveworksheets y reconoce cómo crear actividades de verdadero o falso con autocorrección.',
      developmentInstructions: 'Crea una ficha con al menos 10 afirmaciones basadas en un texto trabajado en clase y configura la autocorrección.',
      closureInstructions: 'Publica el enlace de tu ficha y responde qué fue fácil y qué fue complejo en el proceso.',
      resources: [
        { type: 'youtube', title: 'Tutorial Liveworksheets', url: 'https://youtu.be/MmUpEp9xf_Y' },
        { type: 'liveworksheet', title: 'Plataforma Liveworksheets', url: 'https://www.liveworksheets.com/es' }
      ],
      quizQuestions: [
        q(1, 'Las fichas interactivas V/F refuerzan sobre todo la comprensión:', ['Solo creativa', 'Explícita (datos que están en el texto)', 'Solo fonológica', 'Sin texto'], 1),
        q(2, 'La autocorrección en Liveworksheets permite:', ['No leer', 'Retroalimentación inmediata al estudiante', 'Eliminar el docente', 'Evitar evaluar'], 1),
        q(3, 'Cada afirmación de la ficha debe basarse en:', ['Opinión sin texto', 'Evidencia del material leído', 'Rumores', 'Otro grado escolar'], 1),
        q(4, 'Publicar el enlace de la ficha sirve para:', ['Ocultar el trabajo', 'Compartir y revisar el producto con el grupo', 'Borrar la actividad', 'No evaluar'], 1),
        q(5, 'En el nivel semántico, una ficha bien diseñada trabaja:', ['Solo rimas', 'Vocabulario y comprensión literal del contenido', 'Solo caligrafía', 'Solo deportes'], 1)
      ]
    },
    {
      activityId: 4,
      unit: 'sintactico',
      title: 'Presentación interactiva del texto Canto Chocoano',
      objective: 'Identificar elementos implícitos e intención del autor usando evidencias del texto.',
      startInstructions: 'Lee Canto Chocoano y responde qué mensaje transmite sobre su contexto cultural.',
      developmentInstructions: 'Diseña una presentación por diapositivas con la intención del autor y al menos tres evidencias textuales.',
      closureInstructions: 'Realiza el juego de reconocimiento de saberes previos y registra tu resultado.',
      resources: [
        { type: 'canva', title: 'Lectura Canto Chocoano', url: 'https://www.canva.com/design/DAG6fHfFvAU/' },
        { type: 'educaplay', title: 'Juego de preguntas', url: 'https://es.educaplay.com/recursos-educativos/27015882' }
      ],
      quizQuestions: [
        q(1, 'En el nivel sintáctico se profundiza en:', ['Solo imágenes sin texto', 'Relaciones entre ideas, coherencia e inferencias', 'Solo mayúsculas', 'Solo la portada'], 1),
        q(2, 'La intención del autor se identifica cuando el lector:', ['Copia el título', 'Interpreta el propósito con apoyo del texto', 'Ignora el contexto', 'No lee'], 1),
        q(3, 'Una evidencia textual válida es:', ['Una opinión sin cita', 'Un fragmento que respalda la interpretación', 'Un dibujo ajeno al texto', 'Un rumor'], 1),
        q(4, 'Canto Chocoano permite trabajar comprensión porque:', ['No tiene mensaje', 'Vincula cultura, lenguaje y contexto del Pacífico', 'Es solo matemáticas', 'No requiere lectura'], 1),
        q(5, 'El juego de saberes previos ayuda a:', ['Evitar la lectura', 'Activar conocimientos antes de interpretar', 'Sustituir la evaluación final', 'Eliminar el cierre'], 1)
      ]
    },
    {
      activityId: 5,
      unit: 'sintactico',
      title: 'Creación de historieta en Pixton',
      objective: 'Reconstruir la secuencia narrativa del texto e interpretar reacciones de personajes.',
      startInstructions: 'Retoma el fragmento clave de Canto Chocoano y selecciona los hechos principales en orden.',
      developmentInstructions: 'Crea una historieta de 6 a 10 viñetas con diálogos, pensamientos y onomatopeyas que representen la secuencia.',
      closureInstructions: 'Comparte el enlace de tu historieta y responde la reflexión del equipo en el formulario indicado.',
      resources: [
        { type: 'pixton', title: 'Herramienta Pixton', url: 'https://www.pixton.com/' },
        { type: 'forms', title: 'Formulario de reflexión', url: 'https://docs.google.com/forms/' }
      ],
      quizQuestions: [
        q(1, 'La secuencia narrativa ordena los hechos en:', ['Orden aleatorio', 'Una línea temporal coherente', 'Solo imágenes sueltas', 'Sin personajes'], 1),
        q(2, 'Los diálogos en la historieta deben reflejar:', ['Otro texto no leído', 'Lo que sucede en el fragmento trabajado', 'Solo humor sin sentido', 'Datos inventados'], 1),
        q(3, 'Reconstruir la narrativa en viñetas fortalece:', ['Solo dibujo', 'Comprensión de eventos y personajes', 'Solo ortografía', 'Memorizar sin leer'], 1),
        q(4, 'Las onomatopeyas y pensamientos en Pixton ayudan a:', ['Confundir la historia', 'Expresar emociones y acciones', 'Eliminar el texto base', 'No interpretar'], 1),
        q(5, 'Compartir el enlace de la historieta permite:', ['No evidenciar aprendizaje', 'Socializar el producto y recibir retroalimentación', 'Evitar el cierre', 'Saltar la unidad 4'], 1)
      ]
    },
    {
      activityId: 6,
      unit: 'pragmatico',
      title: 'Análisis y línea de tiempo del texto La Guernica',
      objective: 'Comprender intenciones y contexto histórico para construir interpretaciones críticas.',
      startInstructions: 'Lee el texto sobre Guernica y observa la pintura para identificar símbolos relevantes.',
      developmentInstructions: 'Organiza los hechos en una línea de tiempo por bloques cronológicos con títulos claros.',
      closureInstructions: 'Publica tu línea de tiempo y responde la pregunta de reflexión final en el documento o mural indicado.',
      resources: [
        { type: 'padlet', title: 'Mural de análisis Guernica', url: 'https://padlet.com/magisterudes14/juicios-de-valor-s4xk5nhrib0mjjyr' },
        { type: 'drive', title: 'Documento editable reflexión', url: 'https://drive.google.com/file/d/1mFG_yG_iDq4nAoxnCwnncYWife4Uje1z/view' }
      ],
      quizQuestions: [
        q(1, 'El nivel pragmático implica considerar:', ['Solo letras sueltas', 'Contexto, intención y uso del texto', 'Solo rimas', 'Solo caligrafía'], 1),
        q(2, 'La línea de tiempo de Guernica organiza:', ['Opiniones sin orden', 'Hechos y momentos en orden cronológico', 'Solo colores', 'Solo música'], 1),
        q(3, 'Interpretar símbolos en la obra requiere:', ['Ignorar el contexto histórico', 'Relacionar imagen, texto y situación', 'Solo copiar Wikipedia sin leer', 'No reflexionar'], 1),
        q(4, 'Una interpretación crítica debe:', ['Ser sin evidencia', 'Fundamentarse en el análisis del material', 'Repetir el título', 'Evitar preguntas'], 1),
        q(5, 'El Padlet o mural de análisis sirve para:', ['No participar', 'Compartir juicios y reflexiones del grupo', 'Eliminar la lectura', 'Solo calificar sin contenido'], 1)
      ]
    },
    {
      activityId: 7,
      unit: 'pragmatico',
      title: 'Juego de preguntas y respuestas con Scratch',
      objective: 'Formular preguntas de comprensión y evaluar la interpretación del texto en formato interactivo.',
      startInstructions: 'Realiza el aprestamiento en Scratch y explora bloques de control y variables.',
      developmentInstructions: 'Construye un juego de preguntas basado en la lectura de Guernica con retroalimentación para aciertos y errores.',
      closureInstructions: 'Presenta tu juego y explica qué criterios usaste para formular cada pregunta.',
      resources: [
        { type: 'youtube', title: 'Tutorial aprestamiento Scratch', url: 'https://youtu.be/Jq_1ZwXc58o' },
        { type: 'youtube', title: 'Tutorial quiz Scratch', url: 'https://youtu.be/daSe-VtxthU' }
      ],
      quizQuestions: [
        q(1, 'Un quiz en Scratch sobre Guernica debe evaluar:', ['Solo diseño de sprites', 'Comprensión e interpretación del texto', 'Solo sonido', 'Otro curso'], 1),
        q(2, 'Las preguntas del juego deben ser:', ['Sin relación con la lectura', 'Claras y basadas en el contenido estudiado', 'Imposibles de responder', 'Solo de memoria mecánica'], 1),
        q(3, 'La retroalimentación en el juego ayuda al jugador a:', ['No aprender', 'Corregir y reforzar comprensión', 'Saltar la unidad', 'Evitar leer'], 1),
        q(4, 'Explicar los criterios de las preguntas demuestra:', ['Memorización sin sentido', 'Dominio de lo que se evalúa', 'Copiar el tutorial', 'No planificar'], 1),
        q(5, 'Scratch como herramienta en esta unidad integra:', ['Solo programación sin lectura', 'Lectura, preguntas y producto digital', 'Solo videojuegos ajenos al curso', 'Solo dibujo'], 1)
      ]
    },
    {
      activityId: 8,
      unit: 'pragmatico',
      title: 'Creación de un Storytelling',
      objective: 'Construir una narración con inicio, nudo y desenlace para expresar aprendizajes y reflexión personal.',
      startInstructions: 'Observa el video de storytelling e identifica cómo se engancha a la audiencia al inicio.',
      developmentInstructions: 'Elabora un guion de un día escolar vinculado a comprensión lectora y transfórmalo en producto digital (video, genially, etc.).',
      closureInstructions: 'Socializa tu producto y responde las preguntas de reflexión en Mentimeter.',
      resources: [
        { type: 'youtube', title: 'Storytelling definición', url: 'https://youtu.be/RVSA0VOkgMY' },
        { type: 'mentimeter', title: 'Reflexión final', url: 'https://www.menti.com/alcaxumg8oyh?questionIndex=1' }
      ],
      quizQuestions: [
        q(1, 'Un storytelling efectivo incluye:', ['Solo una imagen', 'Inicio, nudo y desenlace', 'Solo lista de compras', 'Sin mensaje'], 1),
        q(2, 'El gancho inicial sirve para:', ['Aburrir al público', 'Captar la atención desde el primer momento', 'Evitar la reflexión', 'No hablar del tema'], 1),
        q(3, 'Vincular el guion a un día escolar permite:', ['Separar lectura de la vida real', 'Conectar aprendizajes con experiencia cotidiana', 'No usar comprensión lectora', 'Solo entretenimiento'], 1),
        q(4, 'La reflexión final en Mentimeter cierra:', ['Solo el semestre anterior', 'La ruta de las 8 unidades del curso', 'Sin participación', 'Solo matemáticas'], 1),
        q(5, 'Esta unidad integra principalmente el nivel:', ['Fonológico exclusivo', 'Pragmático (uso, contexto y propósito comunicativo)', 'Solo caligrafía', 'Solo deporte'], 1)
      ]
    }
  ]
};

module.exports = course;
