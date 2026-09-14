// Banco de preguntas del quiz, por clase (1 a 8).
const quizzesByClass = {
  1: [
  {q:"¿Qué hace la función BUSCARV?", options:["Busca un valor en una fila y trae un dato hacia abajo","Busca un valor en una columna y trae un dato hacia la derecha","Suma todos los valores de una columna","Ordena una tabla de forma automática"], correct:1},
  {q:"¿Para qué sirve SI.ERROR?", options:["Para corregir automáticamente los datos mal escritos","Para eliminar filas con errores","Para mostrar un valor alternativo cuando una fórmula devuelve un error","Para contar la cantidad de errores en una hoja"], correct:2},
  {q:"En Y(condición1; condición2), ¿cuándo devuelve VERDADERO?", options:["Cuando al menos una condición se cumple","Cuando ninguna condición se cumple","Cuando todas las condiciones se cumplen","Siempre devuelve VERDADERO"], correct:2},
  {q:"¿Cuál es la ventaja de SI.CONJUNTO frente a anidar varios SI?", options:["Es más rápido de calcular para la computadora","Permite evaluar múltiples condiciones de forma más ordenada y legible","No requiere escribir ninguna condición","Solo funciona con números, no con texto"], correct:1},
  {q:"¿Qué argumento de BUSCARV se debe usar generalmente como FALSO?", options:["valor_buscado","rango","índice_columna","ordenado (para forzar coincidencia exacta)"], correct:3}
],
  2: [
  {q:"¿Qué hace la función NOMPROPIO?", options:["Convierte todo el texto a mayúsculas","Elimina los espacios sobrantes","Pone en mayúscula la primera letra de cada palabra","Cuenta la cantidad de caracteres de un texto"], correct:2},
  {q:"¿Cuál es la principal diferencia entre un Filtro estándar y una Vista de filtro?", options:["La Vista de filtro es más lenta de aplicar","El Filtro estándar es personal, la Vista de filtro es compartida","La Vista de filtro es personal y no afecta lo que ven otros colaboradores","No hay ninguna diferencia entre ambos"], correct:2},
  {q:"¿Para qué sirve la función SIFECHA?", options:["Para saber si una celda contiene una fecha válida","Para calcular la diferencia entre dos fechas en días, meses o años","Para convertir un texto en una fecha","Para sumar días a una fecha"], correct:1},
  {q:"En el formato condicional, ¿qué permite hacer una 'fórmula personalizada'?", options:["Solo cambiar el color de una celda si es mayor a un número","Aplicar reglas más complejas, como comparar con otra columna o resaltar una fila completa","Eliminar automáticamente las filas que no cumplen la condición","Ordenar los datos automáticamente"], correct:1},
  {q:'¿Qué función usarías para extraer "2024" del texto "PED-2024-105"?', options:["=IZQUIERDA(texto;4)","=DERECHA(texto;4)","=EXTRAE(texto;5;4)","=CONCATENAR(texto;4)"], correct:2}
],
  3: [
  {q:"¿Cuáles son las dos formas principales de usar Gemini con planillas de cálculo?", options:["Solo desde la aplicación de Gmail","Desde el panel lateral en Sheets y desde el chat independiente en gemini.google.com","Únicamente escribiendo fórmulas manualmente","Solo está disponible en Microsoft Excel"], correct:1},
  {q:"¿Qué elemento es imprescindible incluir en un buen prompt para generar una tabla?", options:["El nombre de la empresa","El formato de salida deseado, como las columnas específicas","La cantidad de usuarios que usarán la planilla","El color que debe tener la tabla"], correct:1},
  {q:'¿Qué hace el botón "Exportar a Hojas de cálculo" en Gemini?', options:["Descarga la conversación completa en PDF","Crea automáticamente una nueva planilla de Google Sheets con los datos generados","Envía un correo electrónico con la tabla","Elimina la tabla generada"], correct:1},
  {q:"Según las buenas prácticas vistas en la clase, ¿qué se debe hacer siempre con los datos generados por la IA?", options:["Usarlos sin revisar, ya que la IA nunca comete errores","Revisarlos antes de usarlos, ya que la IA puede cometer errores o inventar datos","Borrarlos inmediatamente después de generarlos","Convertirlos en una macro automáticamente"], correct:1},
  {q:"Si el botón de exportación no está disponible, ¿qué alternativa existe para llevar una tabla de Gemini a Sheets?", options:["No hay ninguna alternativa posible","Copiar la tabla generada y pegarla directamente en una hoja de Sheets","Tomar una captura de pantalla y adjuntarla","Solicitar soporte técnico a Google"], correct:1}
],
  4: [
  {q:"¿Qué ventaja tiene un gráfico creado directamente desde una tabla dinámica?", options:["Se puede editar solo desde el celular","Se actualiza automáticamente si cambian los datos originales","No permite cambiar los colores","Solo funciona con datos de texto"], correct:1},
  {q:"¿Qué es un gráfico combinado?", options:["Un gráfico que mezcla datos de dos planillas distintas","Un gráfico que muestra dos tipos de visualización en un mismo espacio (ej: barras y línea)","Un gráfico que solo se puede ver en pantalla completa","Un tipo de tabla dinámica"], correct:1},
  {q:"¿Qué función se utiliza para crear un minigráfico dentro de una celda?", options:["=GRAFICO()", "=MINICHART()", "=SPARKLINE()", "=TENDENCIA()"], correct:2},
  {q:"¿Cuál es la principal ventaja de un minigráfico (sparkline)?", options:["Ocupa toda la pantalla para mostrar más detalle", "Muestra la tendencia de una serie de datos sin ocupar espacio extra en la planilla", "Reemplaza completamente a las tablas dinámicas", "Solo funciona con fechas"], correct:1},
  {q:"¿Desde qué menú se inserta un gráfico en Google Sheets?", options:["Formato > Gráfico", "Datos > Gráfico", "Insertar > Gráfico", "Archivo > Gráfico"], correct:2}
],
  5: [
  {q:"¿Qué es una macro?", options:["Un tipo de gráfico avanzado", "Una secuencia de acciones grabada que se puede repetir automáticamente", "Una función para buscar datos", "Un complemento exclusivo de Excel"], correct:1},
  {q:"¿En qué lenguaje se traducen las macros grabadas en Google Sheets?", options:["Python", "JavaScript puro", "Google Apps Script", "HTML"], correct:2},
  {q:"¿Qué diferencia hay entre referencia absoluta y relativa al grabar una macro?", options:["No hay ninguna diferencia real", "La absoluta actúa siempre sobre las mismas celdas; la relativa depende de dónde esté el cursor", "La relativa es más lenta de ejecutar", "La absoluta solo funciona con números"], correct:1},
  {q:"¿Desde qué menú se graba una macro en Google Sheets?", options:["Datos > Macros > Grabar macro", "Insertar > Macros > Grabar macro", "Extensiones > Macros > Grabar macro", "Formato > Macros > Grabar macro"], correct:2},
  {q:"Además de ejecutarla desde el menú, ¿de qué otra forma se puede correr una macro?", options:["Solo se puede ejecutar desde el menú", "Con un atajo de teclado asignado al grabarla", "Enviando un correo electrónico", "Reiniciando la planilla"], correct:1}
],
  6: [
  {q:"¿Qué es un campo calculado en una tabla dinámica?", options:["Un filtro adicional sobre la tabla", "Una columna nueva cuyo valor sale de una fórmula que combina otros campos", "Un tipo de gráfico especial", "Una macro que se ejecuta automáticamente"], correct:1},
  {q:"¿Desde dónde se instalan los complementos en Google Sheets?", options:["Archivo > Complementos", "Extensiones > Complementos > Obtener complementos", "Datos > Complementos", "Insertar > Complementos"], correct:1},
  {q:"¿Cuál es el problema de usar SUMA sobre una tabla con un filtro aplicado?", options:["SUMA no funciona con números decimales", "SUMA calcula sobre todas las filas, incluidas las ocultas por el filtro", "SUMA solo funciona en una hoja nueva", "SUMA elimina las filas filtradas"], correct:1},
  {q:"¿Qué hace la función SUBTOTALES a diferencia de SUMA?", options:["Es exactamente igual a SUMA", "Solo calcula sobre las filas visibles según el filtro aplicado", "Solo funciona con fechas", "Calcula el subtotal de impuestos automáticamente"], correct:1},
  {q:"En =SUBTOTALES(función_num; rango), ¿qué representa el primer argumento?", options:["El nombre de la hoja", "El rango de celdas a sumar", "La operación a aplicar (por ejemplo, sumar o promediar)", "La cantidad de filas visibles"], correct:2}
],
  7: [
  {q:"¿Qué permite hacer la validación de datos con 'fórmula personalizada'?", options:["Solo permitir números enteros", "Definir cualquier condición propia que devuelva VERDADERO o FALSO", "Cambiar el color de la celda automáticamente", "Ordenar los datos de forma ascendente"], correct:1},
  {q:"¿Qué diferencia hay entre 'Rechazar la entrada' y 'Mostrar una advertencia' en validación de datos?", options:["No hay diferencia, ambas hacen lo mismo", "Rechazar impide escribir el dato inválido; Advertencia lo permite pero marca la celda", "Advertencia borra el dato automáticamente", "Rechazar solo funciona con fechas"], correct:1},
  {q:"¿Qué caracteriza a una lista desplegable dependiente?", options:["Siempre muestra las mismas opciones sin importar el contexto", "Sus opciones cambian según el valor elegido en otra celda", "Solo puede usarse con números", "No se puede combinar con otras fórmulas"], correct:1},
  {q:"¿Desde qué menú se protege una hoja o un rango en Google Sheets?", options:["Formato > Hojas y rangos protegidos", "Datos > Hojas y rangos protegidos", "Insertar > Hojas y rangos protegidos", "Archivo > Hojas y rangos protegidos"], correct:1},
  {q:"¿Para qué sirve el Historial de versiones en Google Sheets?", options:["Para eliminar la planilla completa", "Para ver quién hizo cada cambio y poder restaurar una versión anterior", "Para crear una copia de seguridad en la computadora", "Para cambiar el idioma de la planilla"], correct:1}
],
  8: [
  {q:"¿Qué significa 'combinar correspondencia'?", options:["Unir dos planillas en una sola", "Generar muchos documentos o correos personalizados a partir de una sola plantilla", "Combinar dos gráficos en uno", "Fusionar celdas en una tabla"], correct:1},
  {q:"¿Con qué herramienta se combina Google Sheets para lograr la combinación de correspondencia?", options:["Google Slides", "Google Docs, junto a un complemento", "Google Calendar", "Google Meet"], correct:1},
  {q:"¿Para qué se usa principalmente un archivo CSV?", options:["Para agregar animaciones a una planilla", "Para intercambiar datos en forma de tabla entre sistemas distintos", "Para proteger una hoja con contraseña", "Para crear gráficos dinámicos"], correct:1},
  {q:"¿Desde qué menú se exporta una hoja de Sheets a formato CSV?", options:["Datos > Exportar", "Archivo > Descargar > Valores separados por comas (.csv)", "Insertar > CSV", "Formato > Exportar"], correct:1},
  {q:"Al crear un formulario a partir de una planilla, ¿qué ocurre con las respuestas enviadas?", options:["Se pierden si no se guardan manualmente", "Se agregan automáticamente como filas nuevas en una hoja", "Se envían solo por correo electrónico", "Hay que copiarlas y pegarlas a mano"], correct:1}
],
};
