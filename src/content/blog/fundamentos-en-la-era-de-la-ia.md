---
title: "Los fundamentos no caducaron: Uncle Bob sobre programar con IA"
description: "Notas de la conversación entre Matt Pocock y Robert C. Martin sobre por qué la arquitectura, las pruebas y el pensamiento estratégico importan más ahora que los agentes escriben el código."
date: 2026-08-31
excerpt: "La IA escribe código rápido, pero deja suciedad. Estas son las ideas de Uncle Bob sobre cómo dirigirla sin perder el oficio."
---

Vi la conversación entre Matt Pocock y Robert C. Martin (Uncle Bob) sobre el papel de los fundamentos del software en la era de la IA. Me pareció una de las discusiones más honestas que he escuchado del tema: ni el entusiasmo ciego de quien cree que ya no hay que aprender a programar, ni el rechazo de quien piensa que esto es una moda pasajera.

Estas son las ideas que me llevo, con mis propios comentarios.

## La IA es rápida, pero deja suciedad

Uncle Bob usa una expresión bastante gráfica: los modelos dejan *dog do* en el código. Generan una solución que funciona, sí, pero sembrada de duplicación, nombres pobres, funciones que hacen tres cosas y abstracciones que nadie pidió.

Su conclusión no es dejar de usarlas, es no confiar ciegamente en ellas. La propuesta es apoyarse en **herramientas deterministas** —linters, formateadores, analizadores de complejidad, cobertura, tests— porque son las únicas que dan la misma respuesta siempre. Un modelo te dice "el código está bien" con la misma seguridad tanto si lo está como si no. Un linter no tiene opinión.

Esto conecta con algo que ya se nota en el día a día: la parte cara del trabajo dejó de ser escribir el código y pasó a ser *verificarlo*.

## Gauntlet: agentes en cascada en lugar de instrucciones infinitas

El intento habitual de controlar a un modelo es escribirle reglas. Más reglas. Un archivo de instrucciones cada vez más largo. Y el modelo las ignora a la mitad, porque compiten por atención con el resto del contexto.

La alternativa que propone Bob es lo que llama **Gauntlet**: en vez de un agente que lo haga todo bien, una cadena de agentes especializados donde cada uno tiene un único trabajo:

1. Uno **especifica** qué hay que construir.
2. Otro **escribe** el código.
3. Otro **limpia** lo que quedó sucio.
4. Otro **prueba** de forma rigurosa, incluyendo *mutation testing*.

Lo interesante del paso 4: las pruebas de mutación introducen cambios deliberados en el código (invertir una condición, cambiar un `+` por un `-`) y verifican que algún test falle. Si nadie falla, tus tests no estaban probando nada. Es una manera de medir la calidad de la suite, no solo la del código — y es exactamente el tipo de señal objetiva que un modelo no puede fingir.

La idea de fondo es que un agente con una sola responsabilidad se comporta mucho mejor que uno con veinte reglas. Es el principio de responsabilidad única aplicado al pipeline en lugar de a la clase.

## La estructura sigue mandando

Aquí está, para mí, el punto más importante. El diseño modular profundo —módulos con interfaces pequeñas que esconden mucha complejidad— sigue siendo vital, y ahora por una razón adicional.

Un modelo lee el código con las mismas limitaciones que un humano: contexto finito. Si para entender una función tiene que cargar ocho archivos, se le acaba el presupuesto y empieza a adivinar. Si el código está bien estructurado, entiende el contexto y comete menos errores.

Dicho de otra forma: **la buena arquitectura dejó de ser solo un favor a tus compañeros y pasó a ser también una optimización de rendimiento para tus herramientas.** Un código bien organizado hace que la IA sea más útil. Un código enredado la vuelve peligrosa.

## No le impongas disciplinas humanas a una máquina

Este punto me sorprendió viniendo de él. Bob argumenta que prácticas como el TDD estricto —escribir el test, verlo fallar, escribir el mínimo código, refactorizar— existen porque *los humanos* tenemos memoria de trabajo limitada. El ciclo corto es un andamio para nuestra cabeza, no una verdad universal.

Una IA no tiene ese cuello de botella. Obligarla a seguir el ritual paso a paso es imponerle una restricción que resuelve un problema que ella no tiene.

Lo que sí funciona es medir el resultado: fijar **umbrales de complejidad** y exigir que el código los cumpla. Menciona el puntaje CRAP (*Change Risk Anti-Patterns*), que combina complejidad ciclomática con cobertura de tests: si una función es complicada y además está poco probada, la métrica se dispara. Un número así no se negocia ni se convence con un prompt bien escrito.

El cambio mental es pasar de **"sigue este proceso"** a **"cumple este umbral"**. Al proceso no puedes auditarlo; al umbral sí.

## El programador del futuro piensa estratégicamente

La programación táctica —traducir un requisito conocido a líneas de código— es justo lo que se está automatizando. Lo que no: decidir cuáles son los límites del sistema, qué se acopla con qué, qué decisión de hoy nos va a costar cara en un año, y cómo verificar que lo que produjo un agente realmente hace lo que se pidió.

Y ahí está la paradoja que Bob deja clara: **para supervisar a un agente necesitas los fundamentos que el agente supuestamente te ahorra**. No puedes revisar un diseño que no sabrías escribir. No puedes detectar el *dog do* si nunca aprendiste a distinguirlo del código limpio. La IA no reemplaza el criterio; sube el precio de no tenerlo.

## Lo que me llevo a la práctica

- Todo lo que pueda verificar una herramienta determinista, que lo verifique ella. Mi revisión se guarda para lo que las herramientas no ven: si el diseño tiene sentido.
- Prefiero varios pasos acotados a un prompt gigante que intenta cubrirlo todo.
- Antes de pedirle algo grande a un agente, invierto en que el módulo que va a tocar sea legible. Ese rato se paga solo.
- Umbrales por encima de rituales. Una métrica en CI vale más que un párrafo de buenas intenciones en un archivo de reglas.
- Y la parte incómoda: seguir estudiando los fundamentos, precisamente ahora que parece que no hacen falta.

## Referencias

**La conversación**

- Matt Pocock con Robert C. Martin (Uncle Bob), sobre los fundamentos del software en la era de la IA. El bloque sobre diseño modular y contexto está alrededor del minuto 28:33 - 31:15.

**Los conceptos que menciona, si quieres profundizar**

- *Mutation testing* — introduce fallos deliberados en el código para comprobar que tus tests los detectan. Herramientas: [Stryker](https://stryker-mutator.io/) (JS/TS, C#, Scala), [PIT](https://pitest.org/) (Java), [mutmut](https://mutmut.readthedocs.io/) (Python).
- *CRAP score* (Change Risk Anti-Patterns) — combina complejidad ciclomática y cobertura de tests en un solo número: alta complejidad + baja cobertura dispara la métrica. Propuesto por Alberto Savoia y Bob Evans.
- *Deep modules* — interfaz pequeña que esconde mucha complejidad. Viene de *A Philosophy of Software Design*, de John Ousterhout, la mejor lectura corta sobre el tema.
- *Clean Code* y *Clean Architecture*, de Robert C. Martin — el origen de buena parte de lo que discuten.
