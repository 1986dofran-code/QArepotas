# QArepotas

Sitio web promocional y de pedidos para comida rápida. Está pensado para mostrar productos, permitir que el cliente seleccione cantidades, complete sus datos y envíe el pedido por WhatsApp.

## Qué incluye

- Banner principal con mensaje de bienvenida.
- Carrusel de producto destacado con imagen, nombre, ingredientes y precio.
- Navegación superior y menú móvil.
- Modal de menú completo con todos los productos.
- Selector de cantidades por producto con botones `+` y `-`.
- Resumen del pedido con total automático.
- Formulario para nombre del cliente, dirección y forma de pago.
- Opción de pago por `Transferencia` o `Efectivo`.
- Si el pago es en efectivo, pide confirmar si necesita devuelta o si paga completo.
- Envío del pedido a WhatsApp con el detalle completo.
- Sección de promociones con tarjetas visuales.
- Diseño adaptable para computador y celular.

## Cómo funciona

### 1. Vista principal

La pantalla inicial muestra:

- el logo,
- accesos rápidos,
- el mensaje principal,
- un producto destacado,
- y botones para abrir el menú o las promociones.

### 2. Menú de productos

Al abrir el menú, el usuario puede:

- ver todos los productos disponibles,
- subir o bajar la cantidad de cada uno,
- ver el total en tiempo real,
- escribir su nombre,
- escribir su dirección,
- elegir la forma de pago.

### 3. Pago

El pedido puede hacerse con:

- `Transferencia`
- `Efectivo`

Si elige `Efectivo`, aparece una opción extra para indicar:

- `Necesito devuelta`
- `Pago completo`

### 4. Pedido por WhatsApp

Cuando el pedido está completo, el botón de WhatsApp genera un mensaje con:

- nombre del cliente,
- dirección,
- forma de pago,
- detalle de cada producto y su cantidad,
- total final.

### 5. Promociones

La sección de promociones muestra tarjetas con ofertas activas para que el cliente las vea fácilmente.

## Productos incluidos

- Desgranado de pollo
- Burrito
- Arepa rellena
- Quesadillas
- Maicitos gratinados
- Perro caliente
- Chuzo
- Hamburguesa

## Archivos principales

- `index.html`: estructura del sitio.
- `styles.css`: estilos visuales y diseño responsive.
- `script.js`: carrusel, menú, promociones y envío a WhatsApp.
- `images/`: imágenes del logo y de los productos.

## Requisitos

- No necesita instalación de dependencias.
- Solo necesitas abrir `index.html` en un navegador.

## Notas

- El pedido se envía a WhatsApp con el número configurado en `script.js`.
- El panel de promociones oculto está pensado para uso interno.
- Si abres el sitio en otro navegador o dispositivo, las promociones guardadas localmente no se comparten automáticamente.
