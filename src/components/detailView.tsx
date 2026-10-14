import React, { useState } from 'react';
import { StyleSheet, Text, View, Pressable, ScrollView } from 'react-native';

interface Reaccion {
  paso: number;
  enzima: string;
  sustrato: string;
  producto: string;
}

interface Ruta {
  id: string;
  nombre: string;
  localizacion: string;
  color: string;
  resumen: string;
  reacciones?: Reaccion[];
}

interface DetailViewProps {
  section: {
    id: string;
    nombre: string;
    color: string;
    descripcion: string;
    rutas: Ruta[];
  };
  onBack: () => void;
}

export default function DetailView({ section, onBack }: DetailViewProps) {
  // Estado para controlar qué ruta metabólica interna se expande
  const [expandedRouteId, setExpandedRouteId] = useState<string | null>(null);

  const toggleRoute = (routeId: string) => {
    setExpandedRouteId(expandedRouteId === routeId ? null : routeId);
  };

  return (
    <ScrollView contentContainerStyle={styles.container} showsVerticalScrollIndicator={false}>
      {/* Botón de volver */}
      <Pressable style={styles.backButton} onPress={onBack}>
        <Text style={styles.backButtonText}>← Volver al Mapa General</Text>
      </Pressable>

      {/* Encabezado de la Sección Expandida */}
      <View style={[styles.headerCard, { backgroundColor: section.color }]}>
        <Text style={styles.headerTitle}>{section.nombre}</Text>
        <Text style={styles.headerDescription}>{section.descripcion}</Text>
      </View>

      <Text style={styles.sectionSubtitle}>Rutas Metabólicas Internas:</Text>

      {/* Lista de Rutas */}
      <View style={styles.routesList}>
        {section.rutas.map((ruta) => {
          const isExpanded = expandedRouteId === ruta.id;

          return (
            <View key={ruta.id} style={styles.routeCard}>
              <Pressable
                style={({ pressed }) => [
                  styles.routeHeader,
                  pressed && styles.pressedEffect,
                ]}
                onPress={() => toggleRoute(ruta.id)}
              >
                <View style={styles.routeTitleRow}>
                  <Text style={styles.routeName}>{ruta.nombre}</Text>
                  <Text style={styles.expandIcon}>{isExpanded ? '▲' : '▼'}</Text>
                </View>

                <View style={styles.badgeLocation}>
                  <Text style={styles.badgeLocationText}>📍 {ruta.localizacion}</Text>
                </View>
              </Pressable>

              {/* Contenido Expandible de la Ruta (Nivel 2) */}
              {isExpanded && (
                <View style={styles.routeDetails}>
                  <Text style={styles.resumenText}>{ruta.resumen}</Text>

                  {ruta.reacciones && ruta.reacciones.length > 0 ? (
                    <View style={styles.reactionsContainer}>
                      <Text style={styles.reactionsTitle}>Pasos y Enzimas:</Text>
                      {ruta.reacciones.map((reaccion) => (
                        <View key={reaccion.paso} style={styles.reactionItem}>
                          <Text style={styles.stepBadge}>Paso {reaccion.paso}</Text>
                          <Text style={styles.reactionText}>
                            <Text style={styles.boldText}>Enzima:</Text> {reaccion.enzima}
                          </Text>
                          <Text style={styles.reactionSubText}>
                            {reaccion.sustrato} ➔ {reaccion.producto}
                          </Text>
                        </View>
                      ))}
                    </View>
                  ) : (
                    <Text style={styles.emptyText}>
                      No hay reacciones registradas aún para esta ruta.
                    </Text>
                  )}
                </View>
              )}
            </View>
          );
        })}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 15,
  },
  backButton: {
    marginBottom: 16,
    alignSelf: 'flex-start',
  },
  backButtonText: {
    color: '#38BDF8',
    fontSize: 16,
    fontWeight: '600',
  },
  headerCard: {
    padding: 20,
    borderRadius: 16,
    marginBottom: 20,
  },
  headerTitle: {
    color: '#FFFFFF',
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  headerDescription: {
    color: '#F1F5F9',
    fontSize: 15,
    lineHeight: 20,
  },
  sectionSubtitle: {
    color: '#94A3B8',
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 12,
  },
  routesList: {
    gap: 12,
  },
  routeCard: {
    backgroundColor: '#0F172A',
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#1E293B',
    overflow: 'hidden',
  },
  routeHeader: {
    padding: 16,
  },
  pressedEffect: {
    opacity: 0.8,
  },
  routeTitleRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },
  routeName: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: 'bold',
  },
  expandIcon: {
    color: '#94A3B8',
    fontSize: 14,
  },
  badgeLocation: {
    alignSelf: 'flex-start',
    backgroundColor: '#1E293B',
    paddingHorizontal: 8,
    paddingVertical: 3,
    borderRadius: 6,
  },
  badgeLocationText: {
    color: '#38BDF8',
    fontSize: 12,
  },
  routeDetails: {
    padding: 16,
    borderTopWidth: 1,
    borderTopColor: '#1E293B',
    backgroundColor: '#020617',
  },
  resumenText: {
    color: '#CBD5E1',
    fontSize: 14,
    lineHeight: 20,
    marginBottom: 12,
  },
  reactionsContainer: {
    marginTop: 8,
    gap: 8,
  },
  reactionsTitle: {
    color: '#F8FAFC',
    fontSize: 14,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  reactionItem: {
    backgroundColor: '#0F172A',
    padding: 10,
    borderRadius: 8,
    borderLeftWidth: 3,
    borderLeftColor: '#38BDF8',
  },
  stepBadge: {
    color: '#38BDF8',
    fontSize: 12,
    fontWeight: 'bold',
    marginBottom: 2,
  },
  reactionText: {
    color: '#E2E8F0',
    fontSize: 13,
  },
  reactionSubText: {
    color: '#94A3B8',
    fontSize: 12,
    marginTop: 2,
  },
  boldText: {
    fontWeight: 'bold',
  },
  emptyText: {
    color: '#64748B',
    fontSize: 13,
    fontStyle: 'italic',
  },
});