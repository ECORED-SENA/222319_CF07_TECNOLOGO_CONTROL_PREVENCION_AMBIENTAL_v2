export default {
  global: {
    componenteFormativo: 'Valorar muestras según técnicas de análisis químico',
    descripcionCurso:
      'A través del estudio de este componente formativo, el aprendiz podrá apropiar elementos claves en la valoración de muestras de agua, suelo, olores y residuos sólidos en el contexto del análisis químico en laboratorio. También conocerá los protocolos, parámetros y variables, aplicables a tal ejercicio de valoración de muestras.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-principal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    /*imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.svg'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.svg'),
      },
    ],*/
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo: 'Aplicación de protocolos de análisis de muestras ',
        desarrolloContenidos: true,
      },

      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Bases conceptuales',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo:
          'Protocolos para análisis de agua, suelo, olores y residuos sólidos',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema4',
        numero: '4',
        titulo: 'Protocolos para análisis de agua',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '4.1',
            titulo: 'Variables físicas, químicas y microbiológicas del agua',
            hash: 't_4_1',
          },
          {
            numero: '4.2',
            titulo: 'Manejo de residuos, características de peligrosidad',
            hash: 't_4_2',
          },
          {
            numero: '4.3',
            titulo: 'Método <em>Biological Monitoring Working Party BMWP</em>',
            hash: 't_4_3',
          },
        ],
      },
      {
        nombreRuta: 'tema5',
        numero: '5',
        titulo: 'Protocolos de análisis de suelos',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema6',
        numero: '6',
        titulo: 'Protocolo para análisis de olores',
        desarrolloContenidos: true,
      },

      {
        nombreRuta: 'tema7',
        numero: '7',
        titulo: 'Protocolo de análisis de residuos sólidos',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '7.1',
            titulo: 'Muestreo y la preparación de la muestra',
            hash: 't_7_1',
          },
          {
            numero: '7.2',
            titulo: 'Equipos para análisis de muestras en residuos sólidos',
            hash: 't_7_2',
          },
        ],
      },
      {
        nombreRuta: 'tema8',
        numero: '8',
        titulo: 'Análisis de datos',
        desarrolloContenidos: true,
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/222319_CF07_DU.zip',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [
    {
      tema:
        'Protocolos para análisis de agua, suelo, olores y residuos sólidos',
      referencia:
        'Bascón, M (2016). La cromatografía de gases-olfatometría como herramienta en la evaluación del aroma de los alimentos. Trabajo de grado.',
      tipo: 'Documento',
      link:
        'https://idus.us.es/bitstream/handle/11441/54627/La%20cromatograf%C3%ADa.pdf?sequence=1&isAllowed=y',
    },
    /*{
      tema: 'Aplicación de protocolos de análisis de muestras',
      referencia:
        'Instituto de Hidrología, Meteorología y Estudios Ambientales (s.f.). <em>Métodos analíticos</em>. IDEAM.',
      tipo: 'Página web',
      link: 'http://www.ideam.gov.co/web/agua/metodos-analiticos',
    },*/
    {
      tema: 'Protocolos de análisis de suelos',
      referencia:
        'Servicio Nacional de Aprendizaje (2013). <em>Manual de prácticas de campo y del laboratorio de suelos</em>.',
      tipo: 'Manual',
      link:
        'https://repositorio.sena.edu.co/bitstream/11404/2785/1/practicas_campo_laboratorio_suelos.pdf',
    },
    {
      tema: 'Equipos de análisis de agua',
      referencia:
        'Universidad Politécnica de Cartagena (s.f.). <em>Análisis de aguas</em>. UPCT. ',
      tipo: 'Informe técnico',
      link: 'https://www.upct.es/~minaeees/analisis_aguas.pdf',
    },
  ],
  glosario: [
    {
      termino: 'Almacenamiento',
      significado:
        'representa el proceso de recolección y acumulación de residuos sólidos en el sitio de generación de los diferentes sectores de la producción. Implica la tenencia de residuos peligrosos por un período temporario al final del cual estos serán tratados, dispuestos o almacenados en otro lugar. (ICBF, 2020).',
    },
    {
      termino: 'Análisis físico y químico del agua',
      significado:
        'son aquellos procedimientos de laboratorio que se efectúan a una muestra de agua para evaluar sus características físicas, químicas o ambas (Resolución 2115, 2007, p.1).',
    },
    {
      termino: 'Calidad del agua',
      significado:
        'es el resultado de comparar las características físicas, químicas y microbiológicas encontradas en el agua, con el contenido de las normas que regulan la materia  (Decreto 1575, 2007, p.1).',
    },
    {
      termino: 'Ficha de seguridad (FDS) u Hoja de datos de seguridad',
      significado:
        'es una fuente que proporciona información completa sobre una sustancia o mezcla con miras al control y reglamentación de su utilización en el lugar de trabajo. Adicional a lo anterior aporta información sobre peligros, incluidos aquellos para el medio ambiente, y sobre las medidas de seguridad correspondientes. (ICBF, 2020).',
    },
    {
      termino: 'Horizonte del suelo',
      significado:
        'es una capa de suelo o de material de suelo aproximadamente paralela a  la  superficie  del  terreno,  que  es  producto  de  la  evolución  y  que  difiere  de  capas  adyacentes  genéticamente relacionadas con ella en propiedades y características físicas, químicas y biológicas. (NTC 3656).',
    },
    {
      termino: 'Monitoreo',
      significado:
        'proceso de muestreo del sistema de suministro de agua para consumo humano, que cubre espacio, tiempo y frecuencia en los puntos concertados según norma (IDEAM, sf).',
    },
    {
      termino: 'Muestra',
      significado:
        'toma puntual de agua en los puntos de muestreo concertados, que refleja la composición física, química y microbiológica representativa del momento, para el proceso de vigilancia de la autoridad sanitaria (INS, 2011, p.9).',
    },
    {
      termino: 'Muestra simple',
      significado:
        'este tipo de muestra se toma en un momento y lugar determinado. Es aplicable en los casos que se sabe, la composición del agua no varía significativamente en el tiempo o lugar, como lo son usualmente para caracterización fisicoquímica de aguas naturales. En este caso, tomar diferentes muestras puntuales puede ser útil para describir el comportamiento a través del espacio y tiempo (NTC 5667-2, 1995).',
    },
    {
      termino: 'Muestras compuestas',
      significado:
        'de acuerdo al Instituto de investigaciones marinas y costeras [INVEMAR], en el Manual de técnicas analíticas para la determinación de parámetros fisicoquímicos y contaminantes marinos, describe estas muestras como las que son usadas en su mayoría para vertimientos domésticos e industriales:<br/><br/> Debido a la variación horaria de su caudal, por tal razón son muy utilizadas en el monitoreo de ríos, vertimientos o procesos industriales en línea. Su toma se realiza en un mismo punto en intervalos de tiempo previamente definidos, y el volumen de cada muestra parcial puede ser constante o variar en función del caudal.  (INVEMAR).',
    },
    {
      termino: 'Muestras integradas',
      significado:
        'este tipo de muestra consiste en la recolección de muestras simples en diferentes puntos de manera simultánea que posteriormente son mezcladas. En caso de presentarse variaciones de caudal en los puntos de muestreo, se debe tener en cuenta para que el volumen aportado sea proporcional al caudal medido durante la toma de la muestra. (Instituto de hidrología, meteorología y estudios ambientales [IDEAM], 2017). ',
    },
    {
      termino: 'Muestra disturbada',
      significado:
        'muestras obtenidas del terreno sin ningún intento de preservar la estructura del suelo; es decir las partículas del suelo se recogen “sueltas” y se dejan mover unas en relación con otras. (NTC 4113-1).',
    },
    {
      termino: 'Muestra no disturbada',
      significado:
        'muestras obtenidas del terreno usando un método diseñado para preservar la estructura del suelo; es decir se usa equipo de muestreo especial en tal forma que no se deja que las partículas y los vacíos cambien con respecto a la distribución existente en el terreno antes del muestreo. (NTC 4113-1).',
    },
    {
      termino: 'Muestreo',
      significado:
        'proceso de toma de muestras que son analizadas en laboratorios para obtener información sobre la calidad del agua del sitio concertado en que fueron tomadas  (INS, 2011, p.9).',
    },
    {
      termino: 'Perfil del suelo',
      significado:
        'exposición vertical de horizontes de un suelo individual que son el resultado de la edafogénesis durante el período de formación del suelo (NTC 3656).',
    },
    {
      termino: 'Sustancias químicas',
      significado:
        'Elemento químico y sus compuestos en estado natural u obtenidos mediante cualquier proceso de producción, incluidos los aditivos necesarios para conservar la estabilidad del producto y las impurezas que resulten del proceso utilizado, y excluidos los disolventes que puedan separarse sin afectar a la estabilidad de la sustancia ni modificar su composición. (ICBF, 2020).',
    },
  ],
  referencias: [
    {
      referencia:
        'Asociación Española para la calidad AEC (2010) Contaminación Odorífera  p.1-2 ',
      link:
        'https://www.aec.es/c/document_library/get_file?uuid=3527643c-0525-42fd-9943-1c881254e44f&groupId=10128',
    },
    {
      referencia:
        'Bascón,M(2016). La cromatografía de gases-olfatometría como herramienta en la evaluación del aroma de los alimentos. Trabajo de grado. ',
      link:
        'https://idus.us.es/bitstream/handle/11441/54627/La%20cromatograf%C3%ADa.pdf?sequence=1&isAllowed=y',
    },
    {
      referencia:
        'Caballero. M.-Universidad Nacional del litoral (s, f) Introducción a la química analítica ',
      link:
        'https://drive.google.com/file/d/1Whan95W6nbJuyEBByRvJkeSKPOFMSCyM/view?usp=sharing:',
    },
    {
      referencia:
        'Diaz. A. - Monteiro. T - Ministerio de Salud y Protección Social - Organización Panamericana de la Salud. 2012). ',
    },
    {
      referencia:
        'Lineamiento para la vigilancia sanitaria y ambiental del impacto de los olores ofensivos en la salud y calidad de vida de las comunidades expuestas en áreas urbanas. Colombia. ',
      link:
        'https://www.minsalud.gov.co/sites/rid/Lists/BibliotecaDigital/RIDE/VS/PP/SA/impacto-olores-ofensivos-salud.pdf',
    },
    {
      referencia:
        'Fernández L.C-Instituto Mexicano del Petróleo Secretaría de Medio Ambiente y Recursos Naturales Instituto Nacional de Ecología. (2006). Manual de técnicas de análisis de suelos aplicadas a la remediación de sitios contaminados. Ciudad de México D.F. México.p.13. ',
      link:
        'http://biblioteca.semarnat.gob.mx/janium/Documentos/Ciga/Libros2011/CG008215.pdf',
    },
    {
      referencia:
        'Fenavi.org. (2014). Resolución-2087-de-2014-Protocolo-Monitoreo-control-y-Vigilancia-de-Olores-Ofensivos-1.pdf. Colombia.p.9 ',
      link:
        'https://fenavi.org/wp-content/uploads/2018/05/Resoluci%C3%B3n-2087-de-2014-Protocolo-Monitoreo-control-y-Vigilancia-de-Olores-Ofensivos-1.pdf',
    },
    {
      referencia:
        'Gómez J.C. - SENA . (2013). Manual de Prácticas de Campo y del Laboratorio de Suelos. Espinal. Colombia.p.7. ',
      link:
        'https://repositorio.sena.edu.co/bitstream/11404/2785/1/practicas_campo_laboratorio_suelos.pdf',
    },
    {
      referencia:
        'IDEAM (2007). Manual de Instrucciones para la toma, preservación y transporte de Muestras de Agua de Consumo Humano para Análisis de Laboratorio. ',
      link:
        'https://www.ins.gov.co/sivicap/Documentacin%20SIVICAP/2011%20Manual%20toma%20de%20muestras%20agua.pdf',
    },
    {
      referencia: 'IDEAM (2007). Toma de muestras de aguas residuales. ',
      link:
        'http://www.ideam.gov.co/documents/14691/38158/Toma_Muestras_AguasResiduales.pdf/f5baddf0-7d86-4598-bebd-0e123479d428',
    },
    {
      referencia:
        '[IDEAM]. (2014). Guía para el monitoreo de vertimientos de aguas superficiales y subterráneas.  ',
      link:
        'http://www.corponor.gov.co/control_calidad/2014/Guia_monitoreo_IDEAM.pdf',
    },
    {
      referencia:
        'Instituto Nacional de Salud [INS]. (2011). Manual de instrucciones para la toma, preservación, transporte de muestras de agua para consumo humano para análisis de laboratorio. ISBN 978-958-13-0147-8. ',
      link: 'https://www.ins.gov.co/sivicap/Documentacin%20SIVICAP',
    },
    {
      referencia:
        'Instituto de Hidrología, Metereología y Estudios Ambientales [IDEAM]. (2017). Toma de muestras de aguas superficiales para la red de calidad. ',
    },
    {
      referencia:
        'Instituto Nacional de Salud ( 2007).  Manual de Instrucciones para la Toma, preservación y transporte de muestras de agua de consumo humano para análisis de laboratorio. ',
    },
    {
      referencia:
        'Instituto Nacional de Tecnología Agropecuaria [INTA]. (2011). Protocolo de muestreo, transporte y conservación de muestras de agua con fines múltiples. Argentina. ',
      link:
        'https://inta.gob.ar/sites/default/files/script-tmp-protocolo_de_muestreo_de_aguas_inta.pdf',
    },
    {
      referencia:
        'SENA (2013 ). Manual de prácticas de campo y del laboratorio de suelos. Centro Agropecuario “La granja” Regional Tolima ',
    },
    {
      referencia:
        'Torres. H.- universidad libre (s, f) Guía 1 química analítica. ',
    },
    {
      referencia:
        'Thomas, L (2019, febrero 26). Técnicas de la química analítica. News Medical Life science. ',
    },
    {
      referencia: 'Tqi.co (s, f). Soluciones-confiables-olfatometría ',
      link: 'https://tqi.co/soluciones-confiables/olfatometria/',
    },
    {
      referencia:
        'Universidad Carlos III de Madrid ( s.f ) Determinación de los parámetros físico-químicos de calidad de las aguas ',
      link: 'https://www.upct.es/~minaeees/analisis_aguas.pdf',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Claudia Patricia Aristizabal',
          cargo: 'Líder del equipo',
          centro: 'Dirección General',
        },
        {
          nombre: 'Rafael Neftalí Lizcano Reyes',
          cargo: 'Responsable ecosistema de producción de RED Santander	',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Diana Carolina Triana Guarnizo',
          cargo: 'Instructor',
          centro: 'Centro de Gestión Industrial - Regional Distrito Capital',
        },
        {
          nombre: 'Juan Carlos Cárdenas Sánchez',
          cargo: 'Instructor',
          centro: 'Centro de Gestión Industrial - Regional Distrito Capital',
        },
        {
          nombre: 'Gloria Esperanza Ortiz Russi',
          cargo: 'Diseñadora Instruccional',
          centro: 'Centro de Diseño y Metrología - Regional Distrito Capital',
        },
        {
          nombre: 'Natalia Andrea Bueno Pizarro',
          cargo: 'Evaluador instruccional',
          centro: 'CENIGRAF',
        },
        {
          nombre: 'Martha Isabel Martínez Vargas',
          cargo: 'Productora audiovisual',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
        },
        {
          nombre: 'Fabián Leonardo Correa Díaz',
          cargo: 'Diseñador instruccional',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
        },
        {
          nombre: 'Sandra Patricia Hoyos Sepúlveda',
          cargo: 'Diseñadora Instruccional',
          centro: 'Centro para la Industria de la Comunicación Gráfica',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Carmen Alicia Martínez Torres',
          cargo: 'Animador y Productor Multimedia',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
        },
        {
          nombre: 'Wilson Andrés Arenales Cáceres',
          cargo: 'Storyboard e ilustración',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
        },
        {
          nombre: 'Camilo Andrés Bolaño Rey',
          cargo: 'Locución',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
        },
        {
          nombre: 'Blanca Flor Tinoco Torres',
          cargo: 'Diseñador web',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
        },
        {
          nombre: 'Andrea Paola Botello De la Rosa',
          cargo: 'Desarrollador Fullstack',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
        },
        {
          nombre: 'Emilsen Alfonso Bautista',
          cargo: 'Actividad didáctica',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Daniel Ricardo Mutis Gómez',
          cargo: 'Evaluador para Contenidos Inclusivos y Accesibles',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
        },
        {
          nombre: 'Zuleidy María Ruíz Torres',
          cargo: 'Validador de Recursos Educativos Digitales',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
        },
        {
          nombre: 'Luis Gabriel Urueta Álvarez',
          cargo: 'Validador de Recursos Educativos Digitales',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
