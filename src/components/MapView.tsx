import React from 'react';
import { StyleSheet, Text, View, Pressable, ScrollView } from 'react-native';
import { METABOLIC_DATA } from '../constants/metaData';

// Definimos los tipos de props que recibe el componente
interface MapViewProps {
  onSelectSection: (section: typeof METABOLIC_DATA[0]) => void;
}

export default function MapView({ onSelectSection }: MapViewProps) {
  return (
    <ScrollView contentContainerStyle={styles.container} showsVerticalScrollIndicator={false}>
      <Text style={styles.subtitle}>Selecciona un área metabólica para explorar:</Text>

      <View style={styles.grid}>
        {METABOLIC_DATA.map((section) => (
          <Pressable
            key={section.id}
            style={({ pressed }) => [
              styles.card,
              { backgroundColor: section.color },
              pressed && styles.cardPressed,
            ]}
            onPress={() => onSelectSection(section)}
          >
            <Text style={styles.cardTitle}>{section.nombre}</Text>
            <Text style={styles.cardDescription} numberOfLines={2}>
              {section.descripcion}
            </Text>
            
            <View style={styles.badge}>
              <Text style={styles.badgeText}>
                {section.rutas.length} {section.rutas.length === 1 ? 'ruta' : 'rutas'}
              </Text>
            </View>
          </Pressable>
        ))}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 15,
  },
  subtitle: {
    color: '#94A3B8',
    fontSize: 16,
    marginBottom: 20,
    fontWeight: '500',
  },
  grid: {
    gap: 16,
  },
  card: {
    padding: 20,
    borderRadius: 16,
    minHeight: 120,
    justifyContent: 'space-between',
    elevation: 4, // Sombra en Android
    shadowColor: '#000', // Sombra en iOS
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  cardPressed: {
    opacity: 0.85,
    transform: [{ scale: 0.98 }],
  },
  cardTitle: {
    color: '#FFFFFF',
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 6,
  },
  cardDescription: {
    color: '#E2E8F0',
    fontSize: 14,
    lineHeight: 18,
    marginBottom: 12,
  },
  badge: {
    alignSelf: 'flex-start',
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 12,
  },
  badgeText: {
    color: '#FFFFFF',
    fontSize: 12,
    fontWeight: '600',
  },
});