const questions = [
  {
    text: "¿Qué es la Inteligencia Artificial (IA)?",
    options: [
      "Un tipo de robot avanzado",
      "La simulación de procesos de inteligencia humana por parte de máquinas",
      "La capacidad de una máquina para imitar funciones cognitivas humanas como 'aprender' y 'resolver problemas'",
      "Un lenguaje de programación específico para análisis de datos"
    ],
    correct: [1, 2]
  },
  {
    text: "¿Cuál de las siguientes NO es una subdisciplina principal de la IA?",
    options: [
      "Aprendizaje Automático (Machine Learning)",
      "Procesamiento del Lenguaje Natural (NLP)",
      "Blockchain",
      "Visión por Computadora"
    ],
    correct: [2]
  },
  {
    text: "¿Qué procesos imita la IA?",
    options: [
      "Adquisición de información y reglas (aprendizaje)",
      "Razonamiento (utilizar reglas para llegar a conclusiones)",
      "Autocorrección",
      "Emociones y sentimientos"
    ],
    correct: [0, 1, 2]
  },
  {
    text: "¿Qué capacidad ha ganado la IA con el aprendizaje profundo?",
    options: [
      "Programarse completamente sola",
      "Aprender y mejorar con grandes conjuntos de datos",
      "Reemplazar completamente a los trabajadores humanos",
      "Funcionar sin electricidad"
    ],
    correct: [1]
  },
  {
    text: "¿En qué áreas planea integrar IA BK Systems?",
    options: [
      "Mantenimiento predictivo de maquinaria",
      "Eficiencia energética de las plantas",
      "Desarrollo de productos personalizados",
      "Mejora de la interacción del cliente con interfaces inteligentes"
    ],
    correct: [0, 1, 2, 3]
  },
  {
    text: "¿Qué caracteriza a una empresa digitalizada frente a una clásica?",
    options: [
      "Falta de integración tecnológica",
      "Uso limitado de la nube",
      "Dependencia exclusiva de métodos tradicionales",
      "Uso intensivo de datos y automatización"
    ],
    correct: [3]
  },
  {
    text: "¿Cuál es un ejemplo de empresa que ha implementado transformación digital?",
    options: [
      "Una empresa que solo usa fax para comunicarse",
      "Cosentino con IA y Big Data",
      "Un negocio que opera sin sistemas de gestión",
      "Una tienda local sin presencia online"
    ],
    correct: [1]
  },
  {
    text: "¿Qué caracteriza la economía digital?",
    options: [
      "Reducción en la eficiencia empresarial",
      "Uso intensivo de datos y nuevas tecnologías",
      "Exclusión del comercio electrónico",
      "Desconexión entre empresas y clientes"
    ],
    correct: [1]
  },
{
  text: "¿Cómo ayuda la inteligencia artificial en la transformación digital?",
  options: [
    "Solo es útil para empresas tecnológicas",
    "Automatiza análisis de datos y mejora predicciones",
    "No tiene impacto en la toma de decisiones",
    "Sustituye completamente a los empleados"
  ],
  correct: [1]
},
{
  text: "¿Cuál de los siguientes es un desafío de la digitalización?",
  options: [
    "Resistencia al cambio organizacional",
    "Aumento en costos operativos sin beneficios",
    "Menor acceso a información en tiempo real",
    "Disminución en la capacidad de innovación"
  ],
  correct: [0]
},
{
  text: "¿Cuál es una barrera común en la digitalización empresarial?",
  options: [
    "Resistencia al cambio y falta de formación",
    "Falta de datos disponibles para análisis",
    "Exceso de talento en tecnologías digitales",
    "Baja demanda de soluciones tecnológicas"
  ],
  correct: [0]
},
{
  text: "¿Cuál es un beneficio clave de la automatización en producción?",
  options: [
    "Elimina la necesidad de supervisión humana",
    "Aumenta la eficiencia y reduce errores",
    "Encarece los costos de operación",
    "Disminuye la competitividad de la empresa"
  ],
  correct: [1]
},
{
  text: "¿Por qué es clave la ciberseguridad en la transformación digital?",
  options: [
    "Solo es relevante para grandes empresas",
    "Protege los datos y garantiza el cumplimiento normativo",
    "Permite compartir datos sin restricciones",
    "Hace innecesario el almacenamiento en la nube"
  ],
  correct: [1]
},
{
  text: "¿Cómo influye el IoT en la digitalización de la empresa?",
  options: [
    "Es solo aplicable al sector tecnológico",
    "Elimina la necesidad de sensores en producción",
    "No tiene impacto en la eficiencia operativa",
    "Permite monitorear procesos en tiempo real"
  ],
  correct: [3]
},
{
  text: "¿Cuál de las siguientes NO es una ventaja de la digitalización?",
  options: [
    "Mayor dependencia de sistemas tradicionales",
    "Automatización de procesos",
    "Acceso a datos en tiempo real",
    "Mejora en la toma de decisiones"
  ],
  correct: [0]
},
{
  text: "¿Cuál es una característica de la contabilidad digital?",
  options: [
    "Reducción de auditorías",
    "Incompatibilidad con normativas legales",
    "Eliminación del control financiero",
    "Uso de facturación electrónica y reportes automatizados"
  ],
  correct: [3]
},
{
  text: "¿Cómo mejora la digitalización la comunicación interna?",
  options: [
    "Dificulta la transmisión de información",
    "Hace innecesarias las reuniones entre empleados",
    "Sustituye completamente la comunicación presencial",
    "Facilita la colaboración con herramientas como Slack o Teams"
  ],
  correct: [3]
},
{
  text: "¿Qué recurso digital es clave para la gestión de inventarios?",
  options: [
    "Eliminación de la trazabilidad de productos",
    "Sistemas RFID y bases de datos en tiempo real",
    "Uso de registros manuales en papel",
    "Control de stock sin herramientas digitales"
  ],
  correct: [1]
},
{
  text: "¿Qué impacto tiene la digitalización en el servicio postventa?",
  options: [
    "Mejora la atención al cliente con chatbots y CRM",
    "Reduce la disponibilidad de soporte técnico",
    "Dificulta la personalización de la atención",
    "Hace innecesaria la interacción con el cliente"
  ],
  correct: [0]
},
{
  text: "¿Qué impacto tiene la digitalización en el departamento de Recursos Humanos?",
  options: [
    "Hace innecesarias las políticas de bienestar laboral",
    "Reduce la necesidad de capacitación",
    "Automatiza procesos como el reclutamiento y evaluación de desempeño",
    "Elimina la interacción con los empleados"
  ],
  correct: [2]
},
{
  text: "¿Qué ventaja proporciona el uso de la nube en una empresa digitalizada?",
  options: [
    "Aumento de costos sin beneficios operativos",
    "Escalabilidad y acceso remoto a información",
    "Mayor necesidad de servidores físicos",
    "Reducción de la flexibilidad empresarial"
  ],
  correct: [1]
},
{
  text: "¿Qué modelo de negocio es común en empresas digitalizadas?",
  options: [
    "Gestión de información en papel",
    "Producción manual sin automatización",
    "Venta exclusiva en tiendas físicas",
    "Plataformas basadas en datos y servicios online"
  ],
  correct: [3]
},
{
  text: "¿Qué estrategia es clave en la transformación digital?",
  options: [
    "Evitar la capacitación en nuevas tecnologías",
    "Resistencia a la automatización",
    "Mantener procesos manuales sin mejoras",
    "Gestión del cambio organizacional"
  ],
  correct: [3]
},
{
  text: "¿Cómo puede el análisis predictivo ayudar a una empresa minorista?",
  options: [
    "A reducir la dependencia del proveedor de la nube",
    "A prever la demanda de productos y ajustar inventarios",
    "A optimizar las rutas de entrega",
    "A gestionar riesgos financieros"
  ],
  correct: [1]
},
{
  text: "¿Cuál es una de las principales ventajas del almacenamiento de datos en la nube?",
  options: [
    "Elimina por completo la necesidad de cualquier medida de seguridad",
    "Permite escalar la capacidad de almacenamiento sin invertir en infraestructura física",
    "Requiere hardware especializado en las instalaciones de la empresa",
    "Es el único método seguro para almacenar datos confidenciales"
  ],
  correct: [1]
},
{
  text: "¿Cuál es un desafío para las empresas al usar la nube?",
  options: [
    "La imposibilidad de acceder a los datos desde cualquier lugar",
    "La necesidad de cumplir con regulaciones como GDPR y HIPAA",
    "La falta de escalabilidad de las soluciones en la nube",
    "Costos de mantenimiento y actualización del hardware en la nube"
  ],
  correct: [1]
},
{
  text: "¿Qué implica la transformación digital más allá de la tecnología?",
  options: [
    "Un cambio fundamental en la forma de operar y entregar valor",
    "La automatización completa de todos los puestos de trabajo",
    "Un cambio cultural que requiere desafiar el statu quo y experimentar",
    "Limitar el uso de datos a áreas específicas de la empresa"
  ],
  correct: [0, 2]
},
{
  text: "¿Qué beneficio clave ofrece la transformación digital?",
  options: [
    "Mayor capacidad de respuesta al mercado",
    "Reducción garantizada de todos los riesgos",
    "Fomento de la innovación",
    "Eliminación de la necesidad de recursos humanos"
  ],
  correct: [0, 2]
}
,
{
  text: "¿Qué tecnologías específicas mejoran la interacción y satisfacción del cliente?",
  options: [
    "Big Data y Cloud Computing",
    "Procesamiento del Lenguaje Natural (NLP) e Inteligencia Artificial (IA)",
    "Sistemas de gestión de inventarios en tiempo real",
    "Robótica y sistemas de ensamblaje"
  ],
  correct: [1]
},
{
  text: "¿Cuál es uno de los primeros pasos cruciales en un proyecto de transformación digital?",
  options: [
    "Implementar tecnologías de automatización",
    "Identificar los objetivos estratégicos alineados con la visión de la empresa",
    "Capacitar a todo el personal en todas las nuevas tecnologías",
    "Documentar todos los cambios realizados"
  ],
  correct: [1]
},
{
  text: "Después de definir los objetivos estratégicos, ¿qué paso esencial sigue?",
  options: [
    "Comprar inmediatamente nuevo hardware",
    "Alinear todas las áreas de producción, negocio y comunicaciones",
    "Despedir al personal que no esté familiarizado con la tecnología",
    "Ignorar las brechas de seguridad iniciales"
  ],
  correct: [1]
},
{
  text: "¿Por qué es importante el análisis del encaje en áreas digitalizadas?",
  options: [
    "Para asegurarse de que la digitalización no cause disrupciones significativas",
    "Para evaluar la compatibilidad de los nuevos sistemas con la estructura existente",
    "Para determinar qué áreas no necesitan digitalización",
    "Para definir el presupuesto total del proyecto"
  ],
  correct: [0, 1]
},
{
  text: "¿Qué horizonte temporal debe considerar una empresa al planificar digitalización?",
  options: [
    "Solo las necesidades presentes inmediatas",
    "Solo las necesidades futuras de crecimiento",
    "Tanto las necesidades presentes como las futuras",
    "Únicamente las necesidades tecnológicas del mercado"
  ],
  correct: [2]
},
{
  text: "¿Qué tecnologías debe relacionar Gourmet Foods con el área de Producción?",
  options: [
    "Chatbots y CRM",
    "Sistemas de automatización y gestión de calidad con sensores IoT",
    "Software de gestión de inventarios y seguimiento en tiempo real",
    "Plataformas de análisis de datos y CRM"
  ],
  correct: [1]
},
{
  text: "¿Qué medidas de seguridad debería implementar Gourmet Foods?",
  options: [
    "Cifrado de datos",
    "Monitoreo continuo de actividades",
    "Eliminación de todos los datos antiguos",
    "Autenticación multifactor"
  ],
  correct: [0, 1, 3]
},
{
  text: "¿Qué incluye el proceso de tratamiento y análisis de datos?",
  options: [
    "Únicamente el almacenamiento de datos en la nube",
    "Recolección, almacenamiento, procesamiento y análisis de datos",
    "Ignorar los datos irrelevantes",
    "Utilizar técnicas de machine learning para obtener insights"
  ],
  correct: [1, 3]
},
{
  text: "¿Qué elementos deben integrarse para asegurar eficiencia en transformación digital?",
  options: [
    "Únicamente las aplicaciones de software",
    "Datos, aplicaciones y plataformas",
    "Los proveedores de tecnología",
    "Únicamente el hardware y el software"
  ],
  correct: [1]
},
{
  text: "¿Por qué es vital documentar los cambios en un proyecto de transformación digital?",
  options: [
    "Para complicar el proceso de implementación",
    "Facilita el seguimiento y la evaluación del proyecto",
    "Proporciona una guía para futuras mejoras y adaptaciones",
    "Permite evaluar el impacto de cada modificación"
  ],
  correct: [1, 2, 3]
},
{
  text: "¿Qué acciones relacionadas con recursos humanos son clave en la transformación digital?",
  options: [
    "Contratar únicamente personal con experiencia previa en digitalización",
    "Capacitar al personal en nuevas tecnologías",
    "Fomentar una cultura de aprendizaje continuo",
    "Asegurar la alineación del equipo con la visión digital de la empresa"
  ],
  correct: [1, 2, 3]
},
{
  text: "¿Cómo ayuda la inteligencia artificial en la automatización de procesos?",
  options: [
    "Creando reportes manuales",
    "Analizando patrones de datos y ejecutando decisiones",
    "Eliminando el trabajo colaborativo",
    "Reduciendo el uso de sensores"
  ],
  correct: [1]
},
{
  text: "¿Qué ventaja clave ofrecen los sistemas inteligentes en atención al cliente?",
  options: [
    "Atención despersonalizada",
    "Soporte técnico exclusivo para clientes VIP",
    "Automatización de respuestas mediante NLP y chatbots",
    "Reducción de horarios de atención"
  ],
  correct: [2]
},
{
  text: "¿Cómo mejora el Big Data la toma de decisiones empresariales?",
  options: [
    "Elimina el criterio humano",
    "Permite decisiones en tiempo real basadas en datos",
    "Reduce el volumen de datos disponibles",
    "Se limita solo al marketing"
  ],
  correct: [1]
},
{
  text: "¿Qué herramienta de Python es clave para análisis de datos tabulares?",
  options: [
    "Matplotlib",
    "Pandas",
    "Seaborn",
    "TensorFlow"
  ],
  correct: [1]
},
{
  text: "¿Qué sector NO se menciona como altamente impactado por la transformación digital?",
  options: [
    "Sector bancario",
    "Transporte y logística",
    "Sector gubernamental",
    "Salud"
  ],
  correct: [2]
},
{
  text: "¿Qué ejemplo representa un modelo de negocio digital?",
  options: [
    "Producción manual sin automatización",
    "Plataformas basadas en datos y servicios online",
    "Gestión de procesos con papel y bolígrafo",
    "Tiendas físicas sin software de control"
  ],
  correct: [1]
},
{
  text: "¿Cuál es una función clave del Internet de las Cosas (IoT)?",
  options: [
    "Eliminar sensores en la industria",
    "Monitorear en tiempo real los procesos productivos",
    "Reducir la digitalización de operaciones",
    "Reemplazar totalmente la supervisión humana"
  ],
  correct: [1]
},
{
  text: "¿Qué diferencia a una empresa clásica de una digitalizada?",
  options: [
    "Mayor dependencia de canales físicos",
    "Automatización y uso intensivo de datos",
    "Falta de inversión en tecnología",
    "Uso exclusivo de papel"
  ],
  correct: [1]
},
{
  text: "¿Qué tecnología se usa para identificar defectos en procesos de calidad en línea?",
  options: [
    "Blockchain",
    "Visión por Computadora",
    "CRM",
    "Bases de datos relacionales"
  ],
  correct: [1]
}
,
{
  text: "¿Qué herramienta basada en Python se utiliza para modelos predictivos como regresiones y árboles de decisión?",
  options: [
    "Keras",
    "Matplotlib",
    "Scikit-learn",
    "Pandas"
  ],
  correct: [2]
},
{
  text: "¿Qué plataforma permite ejecutar notebooks en la nube sin instalación local?",
  options: [
    "Jupyter Notebook",
    "RStudio",
    "Google Colab",
    "VSCode"
  ],
  correct: [2]
},
{
  text: "¿Cuál es un beneficio de la nube en la digitalización empresarial?",
  options: [
    "Dificulta el acceso a la información",
    "Permite escalar almacenamiento sin invertir en hardware físico",
    "Aumenta el gasto en mantenimiento local",
    "Reduce la flexibilidad operativa"
  ],
  correct: [1]
},
{
  text: "¿Qué tecnología permite monitorear maquinaria en tiempo real?",
  options: [
    "Redes neuronales",
    "Sensores IoT",
    "RPA",
    "Excel"
  ],
  correct: [1]
},
{
  text: "¿Cuál es un factor de éxito en la transformación digital según las fuentes?",
  options: [
    "Ignorar la cultura organizacional",
    "Fomentar una cultura de cambio y aprendizaje continuo",
    "Evitar experimentar con nuevas tecnologías",
    "Usar exclusivamente soluciones tradicionales"
  ],
  correct: [1]
},
{
  text: "¿Qué diferencia a Google Colab de Jupyter Notebook?",
  options: [
    "Colab se ejecuta en la nube y no requiere instalación",
    "Jupyter es más rápido",
    "Colab solo funciona con Java",
    "Jupyter no puede usar librerías de IA"
  ],
  correct: [0]
},
{
  text: "¿Qué herramienta Python permite visualización de datos pero no análisis estadístico?",
  options: [
    "Matplotlib",
    "Scikit-learn",
    "R",
    "NumPy"
  ],
  correct: [0]
},
{
  text: "¿Cuál es el objetivo principal del procesamiento del lenguaje natural (NLP)?",
  options: [
    "Controlar robots físicos",
    "Entender e interpretar el lenguaje humano",
    "Analizar imágenes",
    "Detectar fraudes bancarios"
  ],
  correct: [1]
},
{
  text: "¿Qué herramienta facilita la creación de redes neuronales profundas en Python?",
  options: [
    "Scikit-learn",
    "PyTorch",
    "Pandas",
    "Plotly"
  ],
  correct: [1]
},
{
  text: "¿Qué hace Keras especialmente útil para programadores?",
  options: [
    "Es difícil de configurar",
    "Solo funciona en sistemas Linux",
    "Ofrece una experiencia de aprendizaje amigable",
    "No se puede usar en proyectos reales"
  ],
  correct: [2]
},
{
  text: "¿Qué tareas complejas puede realizar el Deep Learning según las fuentes?",
  options: [
    "Predicción del clima",
    "Reconocimiento de imágenes",
    "Procesamiento del lenguaje natural",
    "Optimización de rutas de entrega"
  ],
  correct: [1, 2]
},
{
  text: "¿Qué empresa se menciona como ejemplo del uso de IA y Big Data?",
  options: [
    "Netflix",
    "Spotify",
    "Uber",
    "Tesla"
  ],
  correct: [0]
},
{
  text: "¿Qué combina la IA con Big Data para mejorar la toma de decisiones?",
  options: [
    "Análisis predictivo, reconocimiento de patrones y procesamiento de grandes volúmenes de datos",
    "Documentación legal",
    "Automatización de correo electrónico",
    "Seguimiento de envíos"
  ],
  correct: [0]
},
{
  text: "¿Qué rol cumple la visión por computadora en manufactura?",
  options: [
    "Predecir la demanda",
    "Controlar rutas de transporte",
    "Inspeccionar productos en tiempo real para identificar defectos",
    "Gestionar inventarios"
  ],
  correct: [2]
},
{
  text: "¿Qué hace la IA en el sector salud según las fuentes?",
  options: [
    "Analiza imágenes médicas",
    "Diseña tratamientos personalizados",
    "Gestiona datos clínicos",
    "Reemplaza a los médicos"
  ],
  correct: [0, 1, 2]
},
{
  text: "¿Cómo mejora el NLP el servicio al cliente?",
  options: [
    "A través de chatbots y asistentes virtuales",
    "Con visualización de gráficos",
    "Mediante cálculos financieros",
    "Mediante hardware especializado"
  ],
  correct: [0]
},
{
  text: "¿Cuál es un beneficio de usar IA en logística?",
  options: [
    "Reemplaza al equipo de ventas",
    "Predice demanda y optimiza inventario",
    "Automatiza la contabilidad",
    "Desconecta sistemas productivos"
  ],
  correct: [1]
},
{
  text: "¿Qué tecnología se usa para organizar y estructurar datos en tablas?",
  options: [
    "Scikit-learn",
    "Pandas",
    "Keras",
    "Matplotlib"
  ],
  correct: [1]
},
{
  text: "¿Qué hace PyTorch en el ámbito del aprendizaje profundo?",
  options: [
    "Genera informes PDF",
    "Permite construir y entrenar modelos de redes neuronales",
    "Se usa solo para visualizaciones",
    "No es compatible con Python"
  ],
  correct: [1]
},
{
  text: "¿Qué tecnologías se aplican en el caso práctico de Gourmet Foods?",
  options: [
    "Sensores IoT para gestión de calidad",
    "Redes sociales para atención al cliente",
    "Almacenamiento en papel",
    "Mecanografía automática"
  ],
  correct: [0]
},
{
  text: "¿Qué medidas de seguridad son recomendadas en proyectos de digitalización?",
  options: [
    "Cifrado de datos",
    "Monitoreo continuo de actividades",
    "Eliminación de todos los datos antiguos",
    "Autenticación multifactor"
  ],
  correct: [0, 1, 3]
},
{
  text: "¿Qué incluye el tratamiento de datos en transformación digital?",
  options: [
    "Recolección, almacenamiento, procesamiento y análisis de datos",
    "Solamente almacenamiento en la nube",
    "Evitar analizar datos irrelevantes",
    "Uso de machine learning para extraer insights"
  ],
  correct: [0, 3]
},
{
  text: "¿Qué elementos deben integrarse en una empresa digitalizada para ser eficiente?",
  options: [
    "Datos, aplicaciones y plataformas",
    "Solo software de contabilidad",
    "Canales de televisión",
    "Infraestructura física sin digitalización"
  ],
  correct: [0]
},
{
  text: "¿Por qué es importante documentar los cambios en transformación digital?",
  options: [
    "Complica el proceso",
    "Facilita seguimiento y evaluación",
    "Sirve como guía para mejoras futuras",
    "Permite evaluar el impacto de modificaciones"
  ],
  correct: [1, 2, 3]
},
{
  text: "¿Qué acciones son clave en el área de recursos humanos durante la transformación digital?",
  options: [
    "Capacitación en nuevas tecnologías",
    "Fomento del aprendizaje continuo",
    "Contratar solo a expertos externos",
    "Alineación con la visión digital"
  ],
  correct: [0, 1, 3]
},
{
  text: "¿Cuál es una ventaja del uso de la nube para inventarios?",
  options: [
    "Hace más lento el acceso a datos",
    "Escalabilidad y acceso remoto",
    "Requiere más papel",
    "Reduce el control del stock"
  ],
  correct: [1]
},
{
  text: "¿Qué recurso digital permite trazabilidad y control en tiempo real de inventarios?",
  options: [
    "RFID y bases de datos en tiempo real",
    "Hojas de cálculo en papel",
    "Código Morse",
    "Reportes impresos semanales"
  ],
  correct: [0]
},
{
  text: "¿Qué distingue a una empresa digitalizada?",
  options: [
    "Uso intensivo de datos y automatización",
    "Uso exclusivo de archivos físicos",
    "Falta de integración digital",
    "Evita conectividad remota"
  ],
  correct: [0]
},
{
  text: "¿Qué ejemplo representa la transformación digital efectiva?",
  options: [
    "Cosentino con IA y Big Data",
    "Empresa sin página web",
    "Negocio sin CRM",
    "Empresa con fax como única tecnología"
  ],
  correct: [0]
},
{
  text: "¿Qué caracteriza a la economía digital?",
  options: [
    "Uso intensivo de datos y nuevas tecnologías",
    "Exclusión del e-commerce",
    "Desconexión con clientes",
    "Procesos analógicos predominantes"
  ],
  correct: [0]
}
];




