# Mini Proyecto Windbnb esta basado en Airbnb con React y TailwindCSS
# ___________________________________________________________________
Este proyecto es una pequeña aplicación de reservas basado en Airbnb. Esta aplicación permite a los usuarios buscar estancias en distintas ciudades de Finlandia, tiene 3 modos de filtrado por ubicación, por cantidad de huéspedes y tambien por ambas condiciones, con un diseño moderno y completamente responsivo.

## Características del Proyecto
## ____________________________
- Muestra las estancias basadas en un archivo de datos "stays.json"
- Usa iconos ubicados en la carpeta icons en formato svg 
- Para el filtrado usa un "Modal" de búsqueda de diseño adaptativo (mobile, tablet, desktop)
- Se hace uso de componentes basados en React
- Tiene 3 tipos de filtrado dinámico por ciudad, número de huéspedes (Adultos y niños) y ambas selecciones
- Usa el Botón "Search" que aplica los filtros solo al presionarlo
- Para el cierre del modal con "X" en mobile o clic fuera del modal en desktop y tablet
- Dispone de Botones interactivos con efectos 3D con transiciones suaves
. Se implemento Hooks y Provideres para el uso de Datos y el Filtrado 
- Se hace uso de Context API para gestión global de filtros
- Estancias renderizadas dinámicamente desde un archivo local (`stays.json`)
- Se muestra las estancias que cumplen con el filtrado de manera interactiva
- Para mostrar todos los stays, no se selecciona nada en la busqueda del modal y esto inicializa a todas las estancias.

## Comportamiento del Modal
## ________________________
_____________________________________________________________________________________________________
      Acción del usuario             |            Sección mostrada en el modal               
_____________________________________________________________________________________________________
    Clic en Add location             |        Solo sección de ubicación (location)           
    Clic en Add guests               |        Solo sección de huéspedes, 
                                     |        Ambas si ya hay una ciudad seleccionada 
    Presionar Search                 |        Aplica filtro combinado y cierra el modal  
_____________________________________________________________________________________________________

## La Estructura de los archivos y directorios es la siguiente:
## ____________________________________________________________
```
src/
├── components/
│   ├── Header.jsx
│   ├── Main.jsx
│   ├── Modal.jsx
│   ├── StayCard.jsx
├── providers/
│   └── FilterProvider.jsx
├── hooks/
│   └── useData.jsx
├── App.jsx
├── main.jsx
├── index.css
```

## Las Tecnologías que se han utilizado para este proyecto fueron:
## _______________________________________________________________

-  Vite: para mostrar los cambios al instante, sin recargar toda la página.
-  React: Construir la interfaz de usuario.
- TailwindCSS: Para crear una interfaz atractiva y moderna.
- Axios: Para realizar peticiones HTTP a una API simulada o servidor externo.
- Custom Hooks: Implementar hooks personalizados para lógica reutilizable (ej. peticiones de datos o manejo de filtros).
- React Context API useContext (si es necesario): Para gestionar de manera global ciertos estados o configuraciones de la aplicación, como filtros de búsqueda.


## Desarrollado por :
## _________________

**Miguel Angel Cornejo D.**  
GitHub: [Michelangelo27](https://github.com/tuusuario)
