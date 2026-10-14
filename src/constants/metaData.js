export const METABOLIC_DATA = [
  {
    id: 'carbohidratos',
    nombre: 'Metabolismo de Carbohidratos',
    color: '#2563EB', // Azul
    // Coordenadas para el polígono SVG en un canvas de viewBox 0 0 100 100
    points: '5,5 95,5 95,45 5,45',
    labelX: 50,
    labelY: 26,
    descripcion: 'Rutas de degradación y síntesis de azúcares para la obtención de energía rápida.',
    rutas: [
      {
        id: 'glucolisis',
        nombre: 'Glucólisis',
        localizacion: 'Citosol',
        color: '#3B82F6',
        resumen: 'Conversión de 1 molécula de glucosa en 2 moléculas de piruvato, generando ATP y NADH.',
        reacciones: [
          { paso: 1, enzima: 'Hexocinasa / Glucocinasa', sustrato: 'Glucosa', producto: 'Glucosa-6-fosfato' },
          { paso: 2, enzima: 'Fosfoglucosa isomerasa', sustrato: 'Glucosa-6-fosfato', producto: 'Fructosa-6-fosfato' },
          { paso: 3, enzima: 'Fosfofructocinasa-1 (PFK-1)', sustrato: 'Fructosa-6-fosfato', producto: 'Fructosa-1,6-bisfosfato' }
        ]
      },
      {
        id: 'gluconeogenesis',
        nombre: 'Gluconeogénesis',
        localizacion: 'Hígado (Matriz mitocondrial y Citosol)',
        color: '#1D4ED8',
        resumen: 'Síntesis de nueva glucosa a partir de precursores no glúcidos como lactato, glicerol y aminoácidos.',
        reacciones: []
      },
      {
        id: 'glucogenolisis',
        nombre: 'Glucogenólicis',
        localizacion: 'Citosol (Hígado y Músculo)',
        color: '#1E40AF',
        resumen: 'Degradación del glucógeno almacenado para liberar glucosa.',
        reacciones: []
      }
    ]
  },
  {
    id: 'lipidos',
    nombre: 'Metabolismo de Lípidos',
    color: '#059669', // Verde
    points: '5,50 48,50 48,95 5,95',
    labelX: 26,
    labelY: 74,
    descripcion: 'Almacenamiento, transporte y degradación de grasas para la producción de energía a largo plazo.',
    rutas: [
      {
        id: 'beta_oxidacion',
        nombre: 'Beta-Oxidación de Ácidos Grasos',
        localizacion: 'Matriz Mitocondrial',
        color: '#10B981',
        resumen: 'Degradación secuencial de ácidos grasos a Acetil-CoA para alimentar el Ciclo de Krebs.',
        reacciones: []
      },
      {
        id: 'lipogenesis',
        nombre: 'Lipogénesis (Síntesis de Ácidos Grasos)',
        localizacion: 'Citosol',
        color: '#047857',
        resumen: 'Construcción de ácidos grasos a partir de exceso de Acetil-CoA.',
        reacciones: []
      }
    ]
  },
  {
    id: 'proteinas',
    nombre: 'Metabolismo de Proteínas y Aminoácidos',
    color: '#D97706', // Naranja/Ámbar
    points: '52,50 95,50 95,95 52,95',
    labelX: 73,
    labelY: 74,
    descripcion: 'Degradación de aminoácidos, eliminación del grupo amino y metabolismo de urea.',
    rutas: [
      {
        id: 'ciclo_urea',
        nombre: 'Ciclo de la Urea',
        localizacion: 'Mitocondria y Citosol del Hepatocito',
        color: '#F59E0B',
        resumen: 'Conversión del amonio tóxico procedente del catabolismo de aminoácidos en urea excretable.',
        reacciones: []
      }
    ]
  }
];