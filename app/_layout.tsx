import { Slot, usePathname, useRouter } from "expo-router";
import {
  StatusBar,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { SafeAreaView } from "react-native-safe-area-context";
import styles from "../constants/styles";

export default function RootLayout() {
  const pathname = usePathname();
  const router = useRouter();

  // Determinar la pestaña activa basándose en la ruta actual
  const getActiveTab = () => {
    if (pathname === '/') return 'home';
    if (pathname.startsWith('/progress')) return 'progress';
    if (pathname.startsWith('/social')) return 'social';
    if (pathname.startsWith('/achievements')) return 'achievements';
    return 'home';
  };

  const activeTab = getActiveTab();

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#4C3FAF" />

      {/* Header */}
      <View style={styles.header}>
        <View>
          <Text style={styles.headerTitle}>Chepi</Text>
          <Text style={styles.headerSubtitle}>Empieza tu camino hacia el equilibrio digital </Text>
        </View>
        <TouchableOpacity style={styles.settingsButton}>
          <Text style={styles.settingsIcon}>⚙️</Text>
        </TouchableOpacity>
      </View>

      {/* Content - Aquí se renderiza el contenido de cada pantalla */}
      <View style={{ flex: 1 }}>
        <Slot />
      </View>

      {/* Bottom Navigation */}
      <View style={styles.bottomNav}>
        <TouchableOpacity
          style={styles.navItem}
          onPress={() => router.push('/')}
        >
          <View style={[
            styles.iconContainer,
            activeTab === 'home' && styles.iconContainerActive
          ]}>
            <Text style={styles.navIcon}>🏠</Text>
          </View>
          <Text style={[
            styles.navLabel,
            activeTab === 'home' && styles.navLabelActive
          ]}>
            Inicio
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.navItem}
          onPress={() => router.push('/progress')}
        >
          <View style={[
            styles.iconContainer,
            activeTab === 'progress' && styles.iconContainerActive
          ]}>
            <Text style={styles.navIcon}>📈</Text>
          </View>
          <Text style={[
            styles.navLabel,
            activeTab === 'progress' && styles.navLabelActive
          ]}>
            Progreso
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.navItem}
          onPress={() => router.push('/social')}
        >
          <View style={[
            styles.iconContainer,
            activeTab === 'social' && styles.iconContainerActive
          ]}>
            <Text style={styles.navIcon}>👥</Text>
          </View>
          <Text style={[
            styles.navLabel,
            activeTab === 'social' && styles.navLabelActive
          ]}>
            Social
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.navItem}
          onPress={() => router.push('/achievements')}
        >
          <View style={[
            styles.iconContainer,
            activeTab === 'achievements' && styles.iconContainerActive
          ]}>
            <Text style={styles.navIcon}>🏆</Text>
          </View>
          <Text style={[
            styles.navLabel,
            activeTab === 'achievements' && styles.navLabelActive
          ]}>
            Logros
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
