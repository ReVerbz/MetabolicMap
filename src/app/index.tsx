import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';

// Importamos tus componentes y los tipos de datos
import Navbar from '../components/navbar';
import MapView from '../components/MapView';
import DetailView from '../components/detailView';
import { METABOLIC_DATA } from '../constants/metaData';

export default function Index() {
  // Estado para guardar la sección activa seleccionada
  const [selectedSection, setSelectedSection] = useState<typeof METABOLIC_DATA[0] | null>(null);

  return (
    <View style={styles.container}>
      {/* 1. Tu Barra Superior */}
      <Navbar />

      {/* 2. Contenido Dinámico */}
      <View style={styles.content}>
        {!selectedSection ? (
          // Vista 0: Mapa General
          <MapView onSelectSection={(section) => setSelectedSection(section)} />
        ) : (
          // Vista 1 y 2: Detalle Expandido y Rutas
          <DetailView
            section={selectedSection}
            onBack={() => setSelectedSection(null)}
          />
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#051031',
    paddingTop: 40, // Espacio para librar la barra de estado/notch
  },
  content: {
    flex: 1,
    paddingHorizontal: 16,
  },
});