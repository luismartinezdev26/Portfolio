---
name: Neo-Developer Core
colors:
  surface: '#10131b'
  surface-dim: '#10131b'
  surface-bright: '#363942'
  surface-container-lowest: '#0b0e15'
  surface-container-low: '#181b23'
  surface-container: '#1c1f27'
  surface-container-high: '#272a32'
  surface-container-highest: '#32353d'
  on-surface: '#e0e2ed'
  on-surface-variant: '#c1c6d7'
  inverse-surface: '#e0e2ed'
  inverse-on-surface: '#2d3039'
  outline: '#8b90a0'
  outline-variant: '#414754'
  surface-tint: '#aec6ff'
  primary: '#aec6ff'
  on-primary: '#002e6b'
  primary-container: '#0070f3'
  on-primary-container: '#ffffff'
  inverse-primary: '#0059c5'
  secondary: '#47faf3'
  on-secondary: '#003735'
  secondary-container: '#00ddd6'
  on-secondary-container: '#005d5a'
  tertiary: '#d1bcff'
  on-tertiary: '#3c0090'
  tertiary-container: '#884fff'
  on-tertiary-container: '#ffffff'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#d8e2ff'
  primary-fixed-dim: '#aec6ff'
  on-primary-fixed: '#001a43'
  on-primary-fixed-variant: '#004397'
  secondary-fixed: '#47faf3'
  secondary-fixed-dim: '#00ddd6'
  on-secondary-fixed: '#00201f'
  on-secondary-fixed-variant: '#00504d'
  tertiary-fixed: '#e9ddff'
  tertiary-fixed-dim: '#d1bcff'
  on-tertiary-fixed: '#23005b'
  on-tertiary-fixed-variant: '#5700c9'
  background: '#10131b'
  on-background: '#e0e2ed'
  surface-variant: '#32353d'
typography:
  display-lg:
    fontFamily: Sora
    fontSize: 72px
    fontWeight: '800'
    lineHeight: '1.1'
    letterSpacing: -0.04em
  headline-xl:
    fontFamily: Sora
    fontSize: 48px
    fontWeight: '700'
    lineHeight: '1.2'
    letterSpacing: -0.02em
  headline-xl-mobile:
    fontFamily: Sora
    fontSize: 32px
    fontWeight: '700'
    lineHeight: '1.2'
  headline-lg:
    fontFamily: Sora
    fontSize: 32px
    fontWeight: '600'
    lineHeight: '1.3'
  body-lg:
    fontFamily: Geist
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.6'
  body-md:
    fontFamily: Geist
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.6'
  code-label:
    fontFamily: JetBrains Mono
    fontSize: 14px
    fontWeight: '500'
    lineHeight: '1.4'
    letterSpacing: 0.05em
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  unit: 8px
  container-max: 1280px
  gutter: 24px
  margin-mobile: 20px
  section-gap-desktop: 160px
  section-gap-mobile: 80px
---

## Brand & Style

Este sistema de diseño personifica la vanguardia técnica y la sofisticación de un desarrollador Full-Stack de élite. La narrativa visual se centra en un "Futurismo de Precisión", donde la claridad del código se encuentra con una estética cinematográfica de alta tecnología.

El estilo combina **Minimalismo Oscuro** con toques de **Glassmorphism** y **Cyberpunk Refinado**. El objetivo es evocar una sensación de potencia, eficiencia y modernidad absoluta. La interfaz debe sentirse como una consola de comando avanzada pero extremadamente pulida, diseñada para resaltar proyectos de alto impacto mediante el uso estratégico de vacíos, contrastes agresivos y efectos de luminiscencia controlada.

## Colors

La paleta se fundamenta en una jerarquía de profundidades oscuras para minimizar la fatiga visual y maximizar el contraste de los elementos interactivos.

- **Fondo Primario (#121212):** Un carbón profundo que actúa como el vacío del lienzo.
- **Superficie/Cards (#1a1a1a):** Un slate sutilmente más claro para definir contenedores.
- **Acento Eléctrico (#0070f3):** Utilizado para acciones principales y estados activos.
- **Cian Neón (#00dfd8):** Reservado para detalles de datos, indicadores de éxito y efectos de brillo secundario.
- **Brillos y Sombras:** Se emplean gradientes lineales y radiales de los colores de acento con opacidades bajas (10-20%) para crear halos de luz que sugieren profundidad sin saturar la vista.

## Typography

La tipografía es el pilar de la identidad técnica del sistema. 

1. **Sora** se utiliza para titulares de gran escala, aportando un carácter geométrico y futurista. 
2. **Geist** maneja el cuerpo de texto con una legibilidad excepcional y un aire de herramienta de desarrollo profesional. 
3. **JetBrains Mono** se reserva para etiquetas, metadatos y fragmentos de código, reforzando el ADN de ingeniería del portafolio.

Los titulares deben usar pesos pesados (Bold/ExtraBold) para crear un contraste dramático contra el fondo oscuro. El espaciado entre letras (letter-spacing) se reduce en tamaños grandes para una apariencia más compacta y moderna.

## Layout & Spacing

El sistema utiliza una **Cuadrícula Fluida de 12 columnas** para escritorio y una de 4 columnas para dispositivos móviles. 

El ritmo vertical es generoso, permitiendo que cada proyecto "respire". Las secciones se dividen por espacios amplios para enfatizar la exclusividad de cada pieza de trabajo. Se fomenta el uso de alineaciones asimétricas para romper la monotonía, siempre manteniendo la coherencia con los márgenes de seguridad establecidos. 

En dispositivos móviles, los elementos de la interfaz se expanden a ancho completo, pero mantienen un "padding" interno consistente basado en la unidad base de 8px.

## Elevation & Depth

La jerarquía visual no se construye con sombras tradicionales negras, sino mediante **Capas Tonales y Luminiscencia**:

- **Nivel 0 (Fondo):** #121212 (Base plana).
- **Nivel 1 (Cards):** #1a1a1a con un borde de 1px con opacidad baja (white/10%).
- **Nivel 2 (Interacción):** Al hacer hover, las tarjetas activan un "Glow Border" utilizando un gradiente lineal entre el azul eléctrico y el cian neón.
- **Efecto de Cristal:** Los modales y menús de navegación utilizan un desenfoque de fondo (Backdrop Blur) de 12px a 20px, con un relleno semi-transparente para crear un efecto de vidrio esmerilado que flota sobre el contenido.

## Shapes

El sistema opta por una **estética de suavidad técnica (Soft)**. Los bordes no son ni completamente afilados ni excesivamente circulares. 

Se utiliza un radio de curvatura de `0.25rem` para elementos pequeños (botones, inputs) y hasta `0.75rem` para contenedores grandes (cards de proyectos). Esta elección mantiene una apariencia estructural y arquitectónica, evitando la informalidad de los bordes excesivamente redondeados, pero eliminando la agresividad de las esquinas en 90 grados.

## Components

### Botones
- **Primarios:** Fondo sólido Azul Eléctrico, texto en blanco, sin sombra, pero con un "inner glow" sutil en la parte superior. Al pasar el cursor, aumenta el brillo (brightness).
- **Secundarios (Ghost):** Borde de 1px Cian Neón, fondo transparente. Al hover, el fondo se llena con una opacidad del 10% del color de acento.

### Cards de Proyecto
- Fondo `surface_background`.
- Borde sutil de 1px.
- Transición suave de 0.3s en la escala (1.02x) y en la intensidad del borde al hacer hover.
- Uso de etiquetas (Chips) con tipografía `code-label` para indicar tecnologías (React, Node, etc.).

### Inputs y Formularios
- Estilo minimalista con borde inferior resaltado. 
- El cursor de texto (caret) debe ser de color Cian Neón para resaltar la interactividad.

### Chips de Tecnología
- Pequeñas píldoras con fondo oscuro y bordes de color de acento. 
- Tipografía monospaciada para evocar el entorno de una terminal.