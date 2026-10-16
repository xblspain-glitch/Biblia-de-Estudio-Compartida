BIBLIA DE ESTUDIO — V2.1.6

Primera versión funcional privada.

Funciones:
- Lectura sin conexión de los 66 libros.
- Selección de uno o varios versículos con un toque.
- Copia automática con referencia y RVR1960.
- Subrayado en seis colores.
- Versículos guardados.
- Explicaciones asociadas a un versículo o grupo.
- Marca visible para abrir, editar, copiar o eliminar la explicación.
- Búsqueda bíblica.
- Modo oscuro con letra blanca.
- Ajuste del tamaño de letra.
- Última lectura guardada.

Para probar en ordenador debe servirse mediante un servidor local, no abrirse directamente como file://.
Ejemplo: python -m http.server 8000
Luego abrir http://localhost:8000

ESTRUCTURA DE ESTA ENTREGA
- Todos los archivos están directamente en la raíz.
- No hay carpetas contenedoras ni subcarpetas.
- Las rutas de app.js, manifest.webmanifest y sw.js han sido adaptadas a esta estructura plana.

V1.34: el panel de Libros se abre deslizando desde el borde izquierdo hacia la derecha y se cierra deslizando hacia la izquierda.

V1.39: diccionario de 433 entradas tomado directamente de Oraciones V3.1.257 e incrustado en app.js. Panel de acciones con apertura/cierre por toque y gestos laterales.

V1.43: arranque consolidado. Seguir leyendo y Libros se inicializan al abrir. Los títulos verificados se recuperan automáticamente en la primera apertura y quedan guardados para siguientes versiones.

V1.45: “Seguir leyendo” pasa a llamarse “Punto de libro”. El punto se carga antes de mostrar la portada. El botón superior de guardados se sustituye por modo blanco/oscuro, conservando Guardar punto de libro en el panel lateral.

V1.46: Los seis botones del panel lateral se sustituyen por ilustraciones integradas, manteniendo todas sus funciones y el comportamiento de apertura del panel.

V1.56: el estado Guardado usa cápsulas de cristal amarillo completas en cada línea, sin cortes ni subrayado; mantiene prioridad azul durante la selección.

V1.57: integra permanentemente los 2.077 títulos RVR1960 dentro del paquete. Se cargan automáticamente desde el primer arranque, funcionan sin conexión y se conservan en backups y futuras actualizaciones.

V1.60.0: títulos RVR1960 embebidos, cuatro cabeceras por horario y estadísticas de guardados con fecha y hora.

V1.60: títulos incrustados directamente en app.js y botón Estadísticas trasladado al panel de acciones, sin icono.


V1.60: contraste corregido en modo claro para Bienvenido y títulos; estadísticas ampliadas.

V1.62: los botones pastel del panel lateral conservan sus colores también en modo claro.


V1.64.2
- Aplicado el icono ilustrado de Biblia y cruz al botón Versículo del día.
- Actualizada la caché para forzar la carga del nuevo recurso.


V1.64.8
- La portada muestra referencia, categoría y comienzo del Versículo del día.
- Se conserva en caché local para aparecer inmediatamente al abrir la aplicación.

V1.64.29: módulo Personajes Bíblicos trasladado desde Oraciones con su diseño, navegación, buscador, categorías y 409 fichas. No se importó el icono de Personajes.

V1.64.29: Personajes se trasladó desde la portada a la botonera lateral de acciones. Se corrigió el color de los nombres en las tarjetas para que sean legibles en modo oscuro.
V1.64.29: corregida la legibilidad de todo el contenido de las fichas de Personajes en modo oscuro, conservando las tarjetas blancas y aplicando texto oscuro.

V1.64.30: corregidos definitivamente en modo oscuro el texto escrito en el buscador de Personajes y todos los textos interiores de las fichas, manteniendo las tarjetas blancas. No se modificaron imágenes.


V1.64.33
- Desactivado el gesto de arrastrar hacia abajo para actualizar.
- Evita que al llegar arriba en Parábolas, Personajes o la lectura se recargue la app y vuelva a Inicio.
- Caché y versión actualizadas.


V1.64.75: Persistencia reforzada del interruptor de notificaciones y vista única del aviso del Versículo del día.

V1.64.75: Añadida únicamente una respuesta táctil al presionar los botones: ligero descenso, compresión y aumento de brillo, sin modificar pantallas, categorías ni estructura.

V1.64.79: Panel Libros refinado con selector dorado, bordes dorados discretos, flechas animadas, despliegue suave de capítulos, subtítulos reorganizados y respuesta táctil en cada libro.

V1.64.81: Buscador y Diccionario unificados con la identidad visual dorada del panel Libros: fondos oscuros coherentes, bordes dorados, controles comunes, foco elegante, tarjetas homogéneas y animación suave de apertura.
V1.64.81: Corregido el centrado del Buscador con el teclado abierto, separado el botón Copiar del cierre del Diccionario y unificado el botón lateral Diccionario con el acabado dorado metálico premium.

V1.64.86: Guardados, versículos favoritos y Estadísticas unificados con la identidad visual dorada premium: paneles, tarjetas, botones, listados, paginación, modo claro y respuesta táctil coherentes.


V1.64.95
- Retirados los iconos de los controles de bloques en Parábolas y Guía.
- Corregido el contraste del nombre de Personajes en modo claro.
- Unificados los botones dorados de los tres módulos en modo oscuro y claro.


V1.64.95
- Corregidos todos los botones del menú emergente para usar carbón y marco dorado en modo oscuro y claro.
- Eliminado completamente el brillo ovalado superior de los botones.
- Dorado reservado al estado pulsado y a controles activos o seleccionados.
- Unificados botones de Personajes, Parábolas, Guía y diálogos.

V1.64.95
- Pantalla principal unificada con el diseño elegante de Libros: carbón y oro en oscuro, marfil y oro en claro.
- Eliminado el brillo ovalado antiguo de las tarjetas principales.
- Estado táctil dorado para las tarjetas y el botón Entrar.
- Pestaña lateral de la botonera en dorado permanente, plegada y desplegada, en ambos temas.

V1.64.95
- Recuperado el aviso visual «NUEVO» y la animación del Versículo del día hasta que se abre.
- Tirador lateral integrado con el tema: fondo carbón en oscuro y marfil en claro.
- Marco y flecha del tirador en dorado, sin fondo dorado llamativo.
- Caché y recursos offline actualizados.


V2.0.4: limpieza conservadora del CSS. Se retiraron animaciones antiguas ya sustituidas, una regla exactamente duplicada y etiquetas históricas de versión en comentarios. El aspecto y el funcionamiento permanecen iguales.

V2.1.6 — BASE ESTABLE
- Consolidación de la base técnica tras las fases de limpieza y optimización.
- Versiones, recursos y caché unificados en 2.1.6.
- Validación integral de HTML, CSS, JavaScript, JSON, manifiesto y referencias locales.
- Estructura plana, funcionamiento offline y paquete listo para publicar.


V2.1.6 · DICCIONARIO INTEGRADO EN LA LECTURA
- Las palabras incluidas en el diccionario aparecen en cápsulas verde claro.
- Se distinguen aunque el versículo tenga explicación, punto de libro o subrayado.
- Los cambios del diccionario se reflejan inmediatamente en el capítulo abierto.


V2.1.10
- Las palabras nuevas añadidas al diccionario activan por defecto “Mostrar cápsula verde en el texto bíblico”.
- Las entradas existentes conservan su ajuste individual.
- Caché y recursos actualizados a la versión 2.1.10.


V2.1.11
- Migración única: todas las entradas personales ya añadidas al diccionario se activan con cápsula verde.
- Las palabras originales del diccionario mantienen su configuración.
- Las entradas nuevas continúan naciendo con la cápsula activada por defecto.
- La opción para activar o desactivar la cápsula permanece visible al añadir o editar.
- Caché y recursos actualizados a la versión 2.1.11.

V2.1.13
- El contador de Diccionario en Estadísticas muestra ahora el total real: entradas originales más entradas añadidas por el usuario.
- El contador se sincroniza directamente con localStorage al abrir Estadísticas y tras añadir, editar, eliminar o restaurar entradas.
- El botón de Diccionario en Ajustes también muestra el total real.
- Caché y recursos actualizados a la versión 2.1.13.


V2.3.0: añadida la sección Profecías dentro de la Enciclopedia Bíblica, con búsqueda y 13 fichas mesiánicas iniciales.
