<div align="center">

# `Choco Market 🛒🍕`

![Luis ViMa](https://github.com/adrianhdez2/juchi-market/assets/79607030/8b135321-97b8-4ffe-b739-e471ab46a5ce)


![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![Vite](https://img.shields.io/badge/vite-%23646CFF.svg?style=for-the-badge&logo=vite&logoColor=yellow)
![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)
![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)

</div>

## 📌Acerca de este proyecto
Este proyecto está enfocada en compras y ventas de productos (e-commerce) y va enfocado a la comunidad estudiantil.

## ⚡️ Dependencias y Servidor local

Clonar el repositorio (proyecto)

```bash
  git clone https://github.com/adrianhdez2/choco-market.git
```

Ir a la carpeta

```bash
  cd choco-market
```

Instalar dependencias

```bash
  npm install
```

Iniciar el servidor

```bash
  npm run baby
```

## Colaboradores 👑
  
<a href="https://github.com/adrianhdez2/choco-market/graphs/contributors">
  <img src="https://contrib.rocks/image?repo=adrianhdez2/choco-market" />
</a>

```c#
Console.Write("Ingrese a: "); String a = Console.ReadLine();
Console.Write("Ingrese X0: "); String x0 = Console.ReadLine();
Console.Write("Iteraciones: "); int iter = Console.Read();

int i = 0;

while (i <= iter) {
        Console.WriteLine();
        int result = int.Parse(a) * int.Parse(x0);

        int longitud = result.ToString().Length;
        int posicionInicial = longitud / 2 - 2; // Calcula la posición inicial (resta 2 para centrar los números)
        int longitudSubcadena = 4; // Cantidad de números centrales
        string subcadena = result.ToString().Substring(posicionInicial, longitudSubcadena);

        Console.WriteLine();
        Console.WriteLine(i + " (" + a + ")" + " (" + x0 + ") " + "= " + result + " x" + i + " = " + subcadena + " y" + i + " = " + "0." + subcadena);


        int xi = int.Parse(subcadena);
        x0 = xi.ToString();

        Console.WriteLine();
        i++;
 }
```
