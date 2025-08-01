# Instrucciones
¡Bienvenido/a a este coding challenge de Node! Recomendamos leer este archivo completo antes de empezar.

En el proyecto proporcionado encontrarás una base de código con algunos contratos definidos y funcionalidades por
implementar. A continuación, te detallamos los objetivos a cumplir.

1. Tu primera tarea es crear e integrar una implementación de BooksProvider para obtener información de libros desde un servicio externo. Esto incluye realizar la solicitud HTTP, procesar la respuesta y asegurarte de manejar los posibles errores. Además, deberás integrar esta implementación en el flujo principal del programa. La información se encuentra en https://6781684b85151f714b0aa5db.mockapi.io/api/v1/books

2. El siguiente paso consiste en separar la lógica de negocio y la de presentación, siguiendo los principios de separación de capas. Actualmente, toda esta lógica se encuentra "mezclada" en una sola capa, en el archivo `handlers/metrics.go`.

3. Hay varios usos de "any" en el código, lo cual no es ideal. Reemplazá estos usos por tipos más específicos y adecuados. Estos tipos debe incluir el tipado de MetricsResponse, que es la respuesta del handler.

4. Es importante que el código esté bien cubierto por tests. Actualizá las pruebas existentes para reflejar los cambios realizados en la lógica de negocio y añadí nuevos casos que validen el manejo de errores.
