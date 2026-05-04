# QArepotas

Sitio web promocional y de pedidos para comida rápida. Permite mostrar productos, seleccionar cantidades, completar datos del cliente y enviar el pedido directamente por WhatsApp.

## Qué Incluye

- Banner principal con mensaje de bienvenida.
- Carrusel de producto destacado con imagen, nombre, ingredientes y precio.
- Navegación superior y menú móvil.
- Link de ubicación con Google Maps en escritorio y celular.
- Modal de menú completo con productos y bebidas.
- Selector de cantidades por producto con botones `+` y `-`.
- Resumen del pedido con total automático.
- Formulario para nombre del cliente, dirección y forma de pago.
- Opción de pago por `Transferencia` o `Efectivo`.
- Si el pago es en efectivo, permite indicar si necesita devuelta o si paga completo.
- Envío del pedido a WhatsApp con el detalle completo.
- Botón de WhatsApp activo aunque el cliente quiera escribir primero sin seleccionar productos.
- Sección de promociones con tarjetas visuales.
- Horario de atención y nota de cobertura de domicilio.
- Diseño adaptable para computador y celular.

## Actualizaciones Recientes

- Se corrigieron textos con acentos y caracteres dañados.
- Se unificó el número de WhatsApp: `573044247299`.
- Se corrigió el enlace de Google Maps para que sea igual en escritorio y celular.
- Se mejoró la experiencia móvil del menú y del modal de pedidos.
- Se agregó horario de atención: todos los días de `6:00 p. m.` a `12:00 a. m.`.
- Se agregó información de zona de entrega local.
- Se habilitó el botón `Pedir por WhatsApp` para que siempre funcione.
- Se agregaron bebidas al menú.

## Cómo Funciona

### 1. Vista Principal

La pantalla inicial muestra:

- logo,
- accesos rápidos,
- mensaje principal,
- producto destacado,
- horario y zona de entrega,
- botones para abrir el menú o las promociones.

### 2. Menú De Productos

Al abrir el menú, el usuario puede:

- ver todos los productos disponibles,
- agregar o quitar cantidades,
- ver el total en tiempo real,
- escribir su nombre,
- escribir su dirección,
- elegir la forma de pago,
- enviar el pedido por WhatsApp.

### 3. Pago

El pedido puede hacerse con:

- `Transferencia`
- `Efectivo`

Si elige `Efectivo`, aparece una opción extra para indicar:

- `Necesito devuelta`
- `Pago completo`

### 4. Pedido Por WhatsApp

El botón de WhatsApp genera un mensaje con:

- nombre del cliente,
- dirección,
- forma de pago,
- detalle de cada producto y su cantidad,
- total final.

Si el cliente no selecciona productos, el botón igual abre WhatsApp con un mensaje simple para iniciar el pedido.

### 5. Promociones

La sección de promociones muestra tarjetas con ofertas activas para que el cliente las vea fácilmente.

## Productos Incluidos

- Desgranado de pollo: `$20.000`
- Burrito: `$20.000`
- Arepa rellena: `$18.000`
- Quesadillas: `$20.000`
- Maicitos gratinados: `$18.000`
- Perro caliente: `$12.000`
- Chuzo: `$17.000`
- Hamburguesa: `$12.000`

## Bebidas Incluidas

- Postobón: `$4.000`
- Coca-Cola: `$10.000`
- Hit 1/4: `$10.000`
- Agua saborizada: `$4.000`

## Archivos Principales

- `index.html`: estructura del sitio.
- `styles.css`: estilos visuales y diseño responsive.
- `script.js`: carrusel, menú, promociones y envío a WhatsApp.
- `images/`: imágenes del logo y de los productos.

## Requisitos

- No necesita instalación de dependencias.
- Solo necesitas abrir `index.html` en un navegador.
- Para verlo desde celular en la misma red, puedes servirlo con:

```powershell
python -m http.server 8001 --bind 0.0.0.0
```

Y abrir desde el celular:

```text
http://IP-DE-TU-PC:8001
```

## Notas

- El pedido se envía al WhatsApp configurado en `script.js`.
- El link de ubicación está configurado en `index.html`.
- El panel de promociones oculto está pensado para uso interno.
- Si abres el sitio en otro navegador o dispositivo, las promociones guardadas localmente no se comparten automáticamente.
